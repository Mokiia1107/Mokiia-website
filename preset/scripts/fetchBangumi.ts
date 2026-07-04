import { mkdir, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const projectRoot = path.resolve(__dirname, '../..')
const dataJsonPath = path.join(projectRoot, 'public', 'bangumi.json')
const coversOutputDir = path.join(projectRoot, 'public', 'bangumi', 'covers')

const USERNAME = 'mokiia1107'
const USER_AGENT = `${USERNAME}/m-literature-club (https://www.m-literature.club)`
const API_BASE = 'https://api.bgm.tv/v0'
const BGM_SUBJECT_URL = 'https://bgm.tv/subject'
const BGM_USER_URL = `https://bgm.tv/user/${USERNAME}`
const BGM_LIST_URL = `https://bgm.tv/anime/list/${USERNAME}`

const STATUS_TYPES = [
  { type: 1, key: 'wish', label: '想看' },
  { type: 3, key: 'doing', label: '在看' },
  { type: 2, key: 'collect', label: '看过' }
] as const

interface SubjectImages {
  large?: string
  common?: string
  medium?: string
  small?: string
  grid?: string
}

interface Subject {
  id: number
  type: number
  name: string
  name_cn: string
  date?: string | null
  images?: SubjectImages
  eps?: number
}

interface UserCollection {
  subject_id: number
  subject_type: number
  rate: number
  type: number
  comment?: string | null
  tags?: string[]
  ep_status?: number
  updated_at?: string
  subject?: Subject
}

interface CollectionsResponse {
  data: UserCollection[]
  total: number
  limit: number
  offset: number
}

interface BangumiItem {
  id: number
  name_cn: string
  name: string
  date?: string
  rate: number
  comment?: string
  cover?: string
  coverFallback?: string
  eps?: number
  ep_status?: number
  url: string
}

interface BangumiData {
  updatedAt: string
  userUrl: string
  listUrl: string
  wish: BangumiItem[]
  doing: BangumiItem[]
  collect: BangumiItem[]
}

async function fetchWithUA(url: string): Promise<Response> {
  const res = await fetch(url, {
    headers: {
      'User-Agent': USER_AGENT,
      Accept: 'application/json'
    }
  })
  if (!res.ok) {
    throw new Error(`Failed to fetch ${url}: ${res.status} ${res.statusText}`)
  }
  return res
}

async function fetchCollections(statusType: number): Promise<UserCollection[]> {
  const results: UserCollection[] = []
  const limit = 50
  let offset = 0

  while (true) {
    const url = new URL(`${API_BASE}/users/${USERNAME}/collections`)
    url.searchParams.set('subject_type', '2')
    url.searchParams.set('type', String(statusType))
    url.searchParams.set('limit', String(limit))
    url.searchParams.set('offset', String(offset))

    console.log(`[bangumi] Fetching ${url.toString()}`)
    const res = await fetchWithUA(url.toString())
    const data = (await res.json()) as CollectionsResponse

    if (!data.data || data.data.length === 0) break

    results.push(...data.data)

    if (data.data.length < limit) break
    offset += limit

    // Be polite to the API
    await new Promise((resolve) => setTimeout(resolve, 500))
  }

  return results
}

async function downloadAndConvertCover(
  subjectId: number,
  imageUrl?: string
): Promise<string | undefined> {
  if (!imageUrl) return undefined

  const outputPath = path.join(coversOutputDir, `${subjectId}.webp`)

  try {
    const res = await fetchWithUA(imageUrl)
    const buffer = Buffer.from(await res.arrayBuffer())

    await sharp(buffer)
      .resize({ width: 480, withoutEnlargement: true })
      .webp({ quality: 85 })
      .toFile(outputPath)

    return `/bangumi/covers/${subjectId}.webp`
  } catch (error) {
    console.warn(`[bangumi] Failed to process cover for ${subjectId}: ${(error as Error).message}`)
    return undefined
  }
}

function formatDate(date?: string | null): string | undefined {
  if (!date) return undefined
  // Keep YYYY-MM-DD as-is
  return date
}

async function main() {
  await mkdir(coversOutputDir, { recursive: true })

  const data: BangumiData = {
    updatedAt: new Date().toISOString(),
    userUrl: BGM_USER_URL,
    listUrl: BGM_LIST_URL,
    wish: [],
    doing: [],
    collect: []
  }

  for (const { type, key, label } of STATUS_TYPES) {
    console.log(`[bangumi] Fetching "${label}" list...`)
    const collections = await fetchCollections(type)
    console.log(`[bangumi] Got ${collections.length} entries for "${label}"`)

    const items: BangumiItem[] = []
    for (const collection of collections) {
      const subject = collection.subject
      if (!subject) continue

      const item: BangumiItem = {
        id: subject.id,
        name_cn: subject.name_cn || subject.name,
        name: subject.name,
        date: formatDate(subject.date),
        rate: collection.rate ?? 0,
        comment: collection.comment || undefined,
        eps: subject.eps,
        ep_status: collection.ep_status,
        url: `${BGM_SUBJECT_URL}/${subject.id}`
      }

      // Prefer large image, fall back to common/medium
      const imageUrl = subject.images?.large || subject.images?.common || subject.images?.medium
      if (imageUrl) {
        item.coverFallback = imageUrl.replace(/\/[lcmgs]\//, '/l/')
      }
      const cover = await downloadAndConvertCover(subject.id, imageUrl)
      if (cover) {
        item.cover = cover
      }

      items.push(item)

      // Small delay to avoid hammering the image CDN
      await new Promise((resolve) => setTimeout(resolve, 200))
    }

    data[key] = items
  }

  await writeFile(dataJsonPath, `${JSON.stringify(data, null, 2)}\n`, 'utf-8')
  console.log(`[bangumi] Wrote ${dataJsonPath}`)
  console.log(
    `[bangumi] Summary: wish=${data.wish.length}, doing=${data.doing.length}, collect=${data.collect.length}`
  )
}

main().catch((error) => {
  console.error('[bangumi] Unexpected failure:', error)
  process.exitCode = 1
})
