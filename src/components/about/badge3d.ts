// 3D 工牌：移植自 fanhuayishiy/ai-crew-pass 的 Lanyard 实现
// 上游：React Bits Lanyard（MIT + Commons Clause，Copyright 2026 David Haz）
//      与 xu-yaoting/hanging-pass（MIT，Copyright 2026 Hanging Pass contributors）
// 完整许可文本见仓库根目录 THIRD_PARTY_NOTICES.md
// 刚体卡片 + 绳段物理、开孔卡片、PMREM 摄影棚环境、金属件、多列挂绳
import * as THREE from 'three'
import type { BadgeData } from './badge.data'

const TEX_W = 1024
const TEX_H = 1488
const CARD_W = 1.6
const CARD_H = 2.25
const CORNER = 0.117
const THICKNESS = 0.018
const BEVEL = 0.007
const JOINTS = 4
const NODE_WEIGHT = 1 / 0.05
const MAX_STEP = 1 / 960
const ITERATIONS = 2
const SAMPLES = 72
const FOV = 24
const STRAP_WIDTH = 0.36
const STRAP_SCALE = STRAP_WIDTH * 0.65
const RING_RADIUS = 0.095
const RING_TUBE = 0.0135
const EYELET_RADIUS = 0.036
const CLAMP_BODY = 0.15
const FLIP_SPIN = 9
const BAND_COLUMNS = [0, 0.07, 0.93, 1]
const BAND_BEND = [-0.95, -0.28, 0.28, 0.95]
// 恒定像素比例：卡片在屏幕上恒为约 408px 高，挂绳约 250px 长
const WORLD_PER_PX = CARD_H / 450
const ROPE_LENGTH = 250 * WORLD_PER_PX

// ---------- 主题 ----------

function themeColors() {
  const raw = getComputedStyle(document.documentElement).getPropertyValue('--primary').trim()
  let primary = 'hsl(175, 55%, 40%)'
  const m = raw.match(/([\d.]+)[ ,]+([\d.]+)%[ ,]+([\d.]+)%/)
  if (m) primary = `hsl(${m[1]}, ${m[2]}%, ${m[3]}%)`
  const fontFamily = getComputedStyle(document.body).fontFamily
  return { primary, fontFamily }
}

// ---------- 卡面绘制（无打孔槽：卡片几何体上有真实开孔） ----------

function roundRectPath(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  r: number
) {
  ctx.beginPath()
  ctx.moveTo(x + r, y)
  ctx.arcTo(x + w, y, x + w, y + h, r)
  ctx.arcTo(x + w, y + h, x, y + h, r)
  ctx.arcTo(x, y + h, x, y, r)
  ctx.arcTo(x, y, x + w, y, r)
  ctx.closePath()
}

function drawTopline(
  ctx: CanvasRenderingContext2D,
  fontFamily: string,
  brand: string,
  passType: string,
  color: string,
  dim: string
) {
  ctx.textBaseline = 'alphabetic'
  ctx.textAlign = 'left'
  ctx.fillStyle = color
  ctx.font = `700 50px ${fontFamily}`
  ctx.fillText(brand, 70, 130)
  ctx.font = `500 30px ${fontFamily}`
  ctx.fillStyle = dim
  ;(ctx as CanvasRenderingContext2D & { letterSpacing: string }).letterSpacing = '8px'
  ctx.textAlign = 'right'
  ctx.fillText(passType, TEX_W - 70, 126)
  ;(ctx as CanvasRenderingContext2D & { letterSpacing: string }).letterSpacing = '0px'
}

function drawFront(data: BadgeData, photoImg: HTMLImageElement | null): HTMLCanvasElement {
  const { primary, fontFamily } = themeColors()
  const canvas = document.createElement('canvas')
  canvas.width = TEX_W
  canvas.height = TEX_H
  const ctx = canvas.getContext('2d')!

  const bg = ctx.createLinearGradient(0, 0, 0, TEX_H)
  bg.addColorStop(0, '#ffffff')
  bg.addColorStop(1, '#e9f0f0')
  ctx.fillStyle = bg
  ctx.fillRect(0, 0, TEX_W, TEX_H)
  ctx.strokeStyle = 'rgba(15,23,42,0.16)'
  ctx.lineWidth = 5
  roundRectPath(ctx, 3, 3, TEX_W - 6, TEX_H - 6, 38)
  ctx.stroke()

  drawTopline(ctx, fontFamily, data.front.brand, data.front.passType, '#0f172a', 'rgba(15,23,42,0.55)')

  // photo area
  const px = 70
  const py = 185
  const ps = TEX_W - 140
  roundRectPath(ctx, px, py, ps, ps, 30)
  ctx.save()
  ctx.clip()
  ctx.fillStyle = '#edf2f3'
  ctx.fillRect(px, py, ps, ps)
  if (photoImg) {
    const s = Math.max(ps / photoImg.width, ps / photoImg.height)
    const dw = photoImg.width * s
    const dh = photoImg.height * s
    ctx.drawImage(photoImg, px + (ps - dw) / 2, py + (ps - dh) / 2, dw, dh)
  } else {
    ctx.strokeStyle = 'rgba(15,23,42,0.22)'
    ctx.lineWidth = 3
    ctx.setLineDash([16, 12])
    ctx.beginPath()
    ctx.arc(TEX_W / 2, py + ps / 2 - 30, 110, 0, Math.PI * 2)
    ctx.stroke()
    ctx.font = `500 34px ${fontFamily}`
    ctx.fillStyle = 'rgba(15,23,42,0.35)'
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.fillText('PHOTO', TEX_W / 2, py + ps / 2 + 120)
    ctx.setLineDash([])
  }
  ctx.restore()
  ctx.strokeStyle = 'rgba(15,23,42,0.12)'
  ctx.lineWidth = 2
  roundRectPath(ctx, px, py, ps, ps, 30)
  ctx.stroke()

  // portrait chips
  const chip = (text: string, alignRight: boolean) => {
    ctx.font = `500 26px ${fontFamily}`
    const w = ctx.measureText(text).width + 44
    const cx = alignRight ? px + ps - w - 18 : px + 18
    roundRectPath(ctx, cx, py + ps - 58, w, 40, 20)
    ctx.fillStyle = 'rgba(255,255,255,0.85)'
    ctx.fill()
    ctx.fillStyle = 'rgba(15,23,42,0.72)'
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.fillText(text, cx + w / 2, py + ps - 38)
  }
  if (data.front.portraitLabel) chip(data.front.portraitLabel, false)
  if (data.front.portraitEdition) chip(data.front.portraitEdition, true)

  // name + alias + seal
  ctx.textAlign = 'left'
  ctx.textBaseline = 'alphabetic'
  ctx.fillStyle = '#0f172a'
  ctx.font = `700 78px ${fontFamily}`
  ctx.fillText(data.front.name, 70, 1170)
  const nameW = ctx.measureText(data.front.name).width
  if (data.front.alias) {
    ctx.font = `500 36px ${fontFamily}`
    ctx.fillStyle = 'rgba(15,23,42,0.55)'
    ctx.fillText(`  |  ${data.front.alias}`, 70 + nameW, 1170)
  }
  if (data.front.seal) {
    ctx.font = `600 26px ${fontFamily}`
    const sw = ctx.measureText(data.front.seal).width + 40
    roundRectPath(ctx, TEX_W - 70 - sw, 1124, sw, 48, 24)
    ctx.strokeStyle = primary
    ctx.lineWidth = 2.5
    ctx.stroke()
    ctx.fillStyle = primary
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.fillText(data.front.seal, TEX_W - 70 - sw / 2, 1149)
    ctx.textBaseline = 'alphabetic'
  }

  // role
  ctx.textAlign = 'left'
  ctx.font = `500 40px ${fontFamily}`
  ctx.fillStyle = 'rgba(15,23,42,0.6)'
  ctx.fillText(data.front.role, 70, 1236)

  // divider + motto
  ctx.strokeStyle = 'rgba(15,23,42,0.12)'
  ctx.lineWidth = 2
  ctx.beginPath()
  ctx.moveTo(70, 1290)
  ctx.lineTo(TEX_W - 70, 1290)
  ctx.stroke()
  ctx.font = `400 34px ${fontFamily}`
  ctx.fillStyle = 'rgba(15,23,42,0.55)'
  ctx.fillText(data.front.motto[0], 70, 1338)
  ctx.fillText(data.front.motto[1], 70, 1386)

  // barcode + code
  let seed = 7
  const rand = () => {
    seed = (seed * 1103515245 + 12345) & 0x7fffffff
    return seed / 0x7fffffff
  }
  ctx.fillStyle = '#0f172a'
  let bx = 70
  while (bx < 420) {
    const bw = 2 + rand() * 6
    if (rand() > 0.35) ctx.fillRect(bx, 1406, bw, 52)
    bx += bw + 2 + rand() * 4
  }
  ctx.textAlign = 'right'
  ctx.font = `600 30px ${fontFamily}`
  ctx.fillStyle = 'rgba(15,23,42,0.75)'
  ctx.fillText(data.front.code, TEX_W - 70, 1436)
  ctx.font = `400 24px ${fontFamily}`
  ctx.fillStyle = 'rgba(15,23,42,0.45)'
  ctx.fillText(data.front.note, TEX_W - 70, 1468)

  return canvas
}

function drawBack(data: BadgeData): HTMLCanvasElement {
  const { primary, fontFamily } = themeColors()
  const canvas = document.createElement('canvas')
  canvas.width = TEX_W
  canvas.height = TEX_H
  const ctx = canvas.getContext('2d')!

  const bg = ctx.createLinearGradient(0, 0, 0, TEX_H)
  bg.addColorStop(0, '#141a2e')
  bg.addColorStop(1, '#1b2340')
  ctx.fillStyle = bg
  ctx.fillRect(0, 0, TEX_W, TEX_H)
  ctx.strokeStyle = 'rgba(255,255,255,0.22)'
  ctx.lineWidth = 5
  roundRectPath(ctx, 3, 3, TEX_W - 6, TEX_H - 6, 38)
  ctx.stroke()

  // accent waves
  ctx.fillStyle = primary
  ctx.globalAlpha = 0.14
  ctx.beginPath()
  ctx.ellipse(TEX_W * 0.25, TEX_H + 180, TEX_W * 0.7, 320, 0, 0, Math.PI * 2)
  ctx.fill()
  ctx.globalAlpha = 0.1
  ctx.beginPath()
  ctx.ellipse(TEX_W * 0.85, TEX_H + 120, TEX_W * 0.55, 260, 0, 0, Math.PI * 2)
  ctx.fill()
  ctx.globalAlpha = 1

  drawTopline(
    ctx,
    fontFamily,
    data.front.brand,
    data.front.passType,
    'rgba(255,255,255,0.92)',
    'rgba(255,255,255,0.5)'
  )

  ctx.textAlign = 'left'
  ctx.fillStyle = '#ffffff'
  ctx.font = `800 96px ${fontFamily}`
  ctx.fillText(data.back.kicker, 70, 380)
  ctx.font = `700 64px ${fontFamily}`
  ctx.fillStyle = 'rgba(255,255,255,0.92)'
  ctx.fillText(data.back.title[0], 70, 500)
  ctx.fillText(data.back.title[1], 70, 600)

  ctx.fillStyle = primary
  roundRectPath(ctx, 70, 660, 110, 14, 7)
  ctx.fill()

  ctx.font = `400 38px ${fontFamily}`
  ctx.fillStyle = 'rgba(255,255,255,0.68)'
  data.back.features.forEach((f, i) => {
    ctx.fillText(f, 70, 770 + i * 72)
  })

  ctx.strokeStyle = 'rgba(255,255,255,0.15)'
  ctx.lineWidth = 2
  ctx.beginPath()
  ctx.moveTo(70, 1150)
  ctx.lineTo(TEX_W - 70, 1150)
  ctx.stroke()

  ctx.font = `500 28px ${fontFamily}`
  ctx.fillStyle = 'rgba(255,255,255,0.45)'
  ctx.fillText(data.back.catchLabel, 70, 1215)
  ctx.font = `600 44px ${fontFamily}`
  ctx.fillStyle = '#ffffff'
  ctx.fillText(data.back.catchphrase, 70, 1275)

  return canvas
}

// 挂绳纹理：覆盖整条挂绳长度（不平铺），顶端淡色渐变到底端深色
function drawStrap(text: string): HTMLCanvasElement {
  const { primary, fontFamily } = themeColors()
  const canvas = document.createElement('canvas')
  canvas.width = 192
  canvas.height = 768
  const ctx = canvas.getContext('2d')!

  // 整条挂绳共用一个渐变：顶端淡色 → 中段主题色 → 底端深色
  const m = primary.match(/([\d.]+)[ ,]+([\d.]+)%[ ,]+([\d.]+)%/)
  const light = m ? `hsl(${m[1]}, ${m[2]}%, ${Math.min(92, parseFloat(m[3]) + 20)}%)` : primary
  const bg = ctx.createLinearGradient(0, 0, 0, 768)
  bg.addColorStop(0, light)
  bg.addColorStop(0.55, primary)
  bg.addColorStop(1, '#0f172a')
  ctx.fillStyle = bg
  ctx.fillRect(0, 0, 192, 768)

  // weave lines
  ctx.strokeStyle = 'rgba(255,255,255,0.06)'
  ctx.lineWidth = 2
  for (let y = 0; y < 768; y += 8) {
    ctx.beginPath()
    ctx.moveTo(0, y)
    ctx.lineTo(192, y)
    ctx.stroke()
  }
  // edge shading
  const edge = ctx.createLinearGradient(0, 0, 192, 0)
  edge.addColorStop(0, 'rgba(0,0,0,0.35)')
  edge.addColorStop(0.18, 'rgba(0,0,0,0)')
  edge.addColorStop(0.82, 'rgba(0,0,0,0)')
  edge.addColorStop(1, 'rgba(0,0,0,0.35)')
  ctx.fillStyle = edge
  ctx.fillRect(0, 0, 192, 768)

  if (text) {
    ctx.fillStyle = 'rgba(255,255,255,0.85)'
    ctx.font = `700 34px ${fontFamily}`
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    for (const y of [128, 384, 640]) {
      ctx.save()
      ctx.translate(96, y)
      ctx.rotate(-Math.PI / 2)
      ctx.fillText(text, 0, 0)
      ctx.restore()
    }
  }
  return canvas
}

function loadPhoto(src: string): Promise<HTMLImageElement | null> {
  if (!src) return Promise.resolve(null)
  return new Promise((resolve) => {
    const img = new Image()
    img.onload = () => resolve(img)
    img.onerror = () => resolve(null)
    img.src = src
  })
}

// ---------- 几何体与材质工具（移植） ----------

const clampNum = (v: number, min: number, max: number) => Math.min(max, Math.max(min, v))

const seeded = (start: number) => {
  let state = start >>> 0
  return () => {
    state = (state + 0x6d2b79f5) >>> 0
    let t = state
    t = Math.imul(t ^ (t >>> 15), t | 1)
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

const traceRoundedRect = (
  path: THREE.Shape | THREE.Path,
  x: number,
  y: number,
  width: number,
  height: number,
  radius: number
) => {
  const r = Math.max(0, Math.min(radius, width / 2, height / 2))
  const k = r * 0.4477
  path.moveTo(x + r, y)
  path.lineTo(x + width - r, y)
  path.bezierCurveTo(x + width - k, y, x + width, y + k, x + width, y + r)
  path.lineTo(x + width, y + height - r)
  path.bezierCurveTo(x + width, y + height - k, x + width - k, y + height, x + width - r, y + height)
  path.lineTo(x + r, y + height)
  path.bezierCurveTo(x + k, y + height, x, y + height - k, x, y + height - r)
  path.lineTo(x, y + r)
  path.bezierCurveTo(x, y + k, x + k, y, x + r, y)
}

const cardLayout = () => {
  const slot = { width: 0.34, height: 0.07, y: CARD_H / 2 - 0.13 }
  const ringY = CARD_H / 2 - 0.055
  return { width: CARD_W, height: CARD_H, radius: CORNER, slot, ringY, hangY: ringY + RING_RADIUS }
}

const buildCardGeometry = (layout: ReturnType<typeof cardLayout>) => {
  const { width, height, radius, slot } = layout
  const outline = new THREE.Shape()
  traceRoundedRect(
    outline,
    -width / 2 + BEVEL,
    -height / 2 + BEVEL,
    width - BEVEL * 2,
    height - BEVEL * 2,
    Math.max(radius - BEVEL, 0.005)
  )
  const hole = new THREE.Path()
  traceRoundedRect(
    hole,
    -slot.width / 2 - BEVEL,
    slot.y - slot.height / 2 - BEVEL,
    slot.width + BEVEL * 2,
    slot.height + BEVEL * 2,
    slot.height / 2 + BEVEL
  )
  outline.holes.push(hole)
  const body = new THREE.ExtrudeGeometry(outline, {
    depth: THICKNESS,
    bevelEnabled: true,
    bevelThickness: BEVEL,
    bevelSize: BEVEL,
    bevelSegments: 5,
    curveSegments: 24
  })
  body.translate(0, 0, -THICKNESS / 2)
  const face = new THREE.ShapeGeometry(outline, 24)
  const position = face.getAttribute('position')
  const uv = face.getAttribute('uv') as THREE.BufferAttribute
  for (let i = 0; i < position.count; i++) {
    uv.setXY(i, (position.getX(i) + width / 2) / width, (position.getY(i) + height / 2) / height)
  }
  uv.needsUpdate = true
  return { body, face }
}

const buildClampGeometry = (width: number) => {
  const shape = new THREE.Shape()
  const w = width * 1.16
  traceRoundedRect(shape, -w / 2 + 0.014, -CLAMP_BODY / 2 + 0.014, w - 0.028, CLAMP_BODY - 0.028, 0.024)
  const geometry = new THREE.ExtrudeGeometry(shape, {
    depth: 0.02,
    bevelEnabled: true,
    bevelThickness: 0.014,
    bevelSize: 0.014,
    bevelSegments: 6,
    curveSegments: 10
  })
  geometry.translate(0, 0, -0.01)
  return geometry
}

const buildBandGeometry = (count: number) => {
  const columns = BAND_COLUMNS.length
  const geometry = new THREE.BufferGeometry()
  geometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array(count * columns * 3), 3))
  geometry.setAttribute('normal', new THREE.BufferAttribute(new Float32Array(count * columns * 3), 3))
  geometry.setAttribute('uv', new THREE.BufferAttribute(new Float32Array(count * columns * 2), 2))
  const index: number[] = []
  for (let i = 0; i < count - 1; i++) {
    for (let c = 0; c < columns - 1; c++) {
      const a = i * columns + c
      index.push(a, a + columns, a + 1, a + 1, a + columns, a + columns + 1)
    }
  }
  geometry.setIndex(index)
  return geometry
}

const buildEnvironment = (renderer: THREE.WebGLRenderer) => {
  const scene = new THREE.Scene()
  scene.background = new THREE.Color(0.035, 0.035, 0.04)
  const geometry = new THREE.PlaneGeometry(1, 1)
  const materials: THREE.MeshBasicMaterial[] = []
  const panel = (intensity: number, position: [number, number, number], scale: [number, number], rotation = 0) => {
    const material = new THREE.MeshBasicMaterial({
      color: new THREE.Color(intensity, intensity, intensity),
      side: THREE.DoubleSide
    })
    materials.push(material)
    const mesh = new THREE.Mesh(geometry, material)
    mesh.position.set(...position)
    mesh.scale.set(scale[0], scale[1], 1)
    mesh.lookAt(0, 0, 0)
    mesh.rotateZ(rotation)
    scene.add(mesh)
  }
  panel(2.6, [0, 4.5, 8], [9, 4])
  panel(6, [-5.5, 0.5, 7], [0.9, 14])
  panel(4, [5, -0.5, 8], [0.6, 14])
  panel(3.5, [0, -1, 9], [24, 0.35], Math.PI / 3)
  panel(2.5, [1, 2.5, 9], [24, 0.2], Math.PI / 3)
  panel(1.4, [0, 6, -6], [12, 4])
  panel(0.5, [0, -7, 1], [16, 6])
  panel(0.9, [8, 0, -2], [4, 10])
  const pmrem = new THREE.PMREMGenerator(renderer)
  const target = pmrem.fromScene(scene, 0.035)
  pmrem.dispose()
  geometry.dispose()
  materials.forEach((m) => m.dispose())
  return target
}

const buildGrainTexture = () => {
  const size = 128
  const canvas = document.createElement('canvas')
  canvas.width = size
  canvas.height = size
  const ctx = canvas.getContext('2d')!
  const random = seeded(7)
  const field = Float32Array.from({ length: size * size }, () => random())
  const height = (x: number, y: number) => {
    let sum = 0
    for (let j = -1; j <= 1; j++) {
      for (let i = -1; i <= 1; i++) sum += field[((y + j + size) % size) * size + ((x + i + size) % size)]
    }
    return (sum / 9) * 1.6
  }
  const image = ctx.createImageData(size, size)
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const nx = height((x - 1 + size) % size, y) - height((x + 1) % size, y)
      const ny = height(x, (y - 1 + size) % size) - height(x, (y + 1) % size)
      const length = Math.hypot(nx, ny, 1)
      const i = (y * size + x) * 4
      image.data[i] = ((nx / length) * 0.5 + 0.5) * 255
      image.data[i + 1] = ((ny / length) * 0.5 + 0.5) * 255
      image.data[i + 2] = ((1 / length) * 0.5 + 0.5) * 255
      image.data[i + 3] = 255
    }
  }
  ctx.putImageData(image, 0, 0)
  const texture = new THREE.CanvasTexture(canvas)
  texture.wrapS = THREE.RepeatWrapping
  texture.wrapT = THREE.RepeatWrapping
  texture.repeat.set(5, 7)
  return texture
}

const buildWeaveTexture = () => {
  const size = 128
  const threads = 8
  const random = seeded(19)
  const fiber = Float32Array.from({ length: size * size }, () => random())
  const profile = (f: number) => Math.sqrt(Math.max(0, 1 - 4 * f * f))
  const height = (x: number, y: number) => {
    const px = ((x % size) + size) % size
    const py = ((y % size) + size) % size
    const u = (px / size) * threads
    const v = (py / size) * threads
    const cu = Math.floor(u)
    const cv = Math.floor(v)
    const fu = u - cu - 0.5
    const fv = v - cv - 0.5
    const lift = (cu + cv) % 2 === 0
    const warp = profile(fu) * (0.55 + 0.45 * Math.cos(fv * Math.PI * (lift ? 1 : 0.6)))
    const weft = profile(fv) * (0.55 + 0.45 * Math.cos(fu * Math.PI * (lift ? 0.6 : 1)))
    return (lift ? Math.max(warp, weft * 0.7) : Math.max(weft, warp * 0.7)) + fiber[py * size + px] * 0.08
  }
  const data = new Uint8Array(size * size * 4)
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const nx = (height(x - 1, y) - height(x + 1, y)) * 1.6
      const ny = (height(x, y - 1) - height(x, y + 1)) * 1.6
      const length = Math.hypot(nx, ny, 1)
      const i = (y * size + x) * 4
      data[i] = ((nx / length) * 0.5 + 0.5) * 255
      data[i + 1] = ((ny / length) * 0.5 + 0.5) * 255
      data[i + 2] = ((1 / length) * 0.5 + 0.5) * 255
      data[i + 3] = 255
    }
  }
  const texture = new THREE.DataTexture(data, size, size)
  texture.wrapS = THREE.RepeatWrapping
  texture.wrapT = THREE.RepeatWrapping
  texture.magFilter = THREE.LinearFilter
  texture.minFilter = THREE.LinearMipmapLinearFilter
  texture.generateMipmaps = true
  texture.needsUpdate = true
  return texture
}

// ---------- 刚体 + 绳段物理（移植） ----------

interface Physics {
  gravity: number
  gravityX: number
  hold: number
  stiffness: number
  spring: number
  bandDamping: number
  linearDrag: number
  angularDrag: number
  air: number
  broadside: number
  spinAir: number
  nodeDrag: number
  nodeAir: number
  twist: number
  twistDamping: number
  grip: number
  gripDamping: number
  breeze: number
}

interface Grab {
  local: THREE.Vector3
  rotation: THREE.Quaternion
  reach: number
  from: THREE.Vector3
  target: THREE.Vector3
}

interface Sim {
  nodes: THREE.Vector3[]
  previous: THREE.Vector3[]
  velocities: THREE.Vector3[]
  lengths: Float64Array
  impulses: Float64Array
  rest: number
  anchor: THREE.Vector3
  body: {
    position: THREE.Vector3
    previous: THREE.Vector3
    velocity: THREE.Vector3
    quaternion: THREE.Quaternion
    previousQuaternion: THREE.Quaternion
    angular: THREE.Vector3
    mass: number
    inverseInertia: THREE.Vector3
    hang: THREE.Vector3
  }
  grab: Grab | null
  turn: number
  twist: number
  twistRaw: number
  calm: number
}

const createSimulation = (): Sim => {
  const vectors = () => Array.from({ length: JOINTS + 1 }, () => new THREE.Vector3())
  return {
    nodes: vectors(),
    previous: vectors(),
    velocities: vectors(),
    lengths: new Float64Array(JOINTS),
    impulses: new Float64Array(JOINTS),
    rest: 1,
    anchor: new THREE.Vector3(),
    body: {
      position: new THREE.Vector3(),
      previous: new THREE.Vector3(),
      velocity: new THREE.Vector3(),
      quaternion: new THREE.Quaternion(),
      previousQuaternion: new THREE.Quaternion(),
      angular: new THREE.Vector3(),
      mass: 1,
      inverseInertia: new THREE.Vector3(1, 1, 1),
      hang: new THREE.Vector3()
    },
    grab: null,
    turn: 0,
    twist: 0,
    twistRaw: 0,
    calm: 0
  }
}

const scratch = {
  a: new THREE.Vector3(),
  b: new THREE.Vector3(),
  c: new THREE.Vector3(),
  d: new THREE.Vector3(),
  e: new THREE.Vector3(),
  f: new THREE.Vector3(),
  g: new THREE.Vector3(),
  pin: new THREE.Vector3(),
  q: new THREE.Quaternion(),
  r: new THREE.Quaternion()
}

const applyInverseInertia = (body: Sim['body'], vector: THREE.Vector3, out: THREE.Vector3) => {
  scratch.r.copy(body.quaternion).invert()
  out.copy(vector).applyQuaternion(scratch.r)
  out.set(out.x * body.inverseInertia.x, out.y * body.inverseInertia.y, out.z * body.inverseInertia.z)
  return out.applyQuaternion(body.quaternion)
}

const rotateBody = (q: THREE.Quaternion, w: THREE.Vector3) => {
  const { x: qx, y: qy, z: qz, w: qw } = q
  q.x += 0.5 * (w.x * qw + w.y * qz - w.z * qy)
  q.y += 0.5 * (w.y * qw + w.z * qx - w.x * qz)
  q.z += 0.5 * (w.z * qw + w.x * qy - w.y * qx)
  q.w += 0.5 * (-w.x * qx - w.y * qy - w.z * qz)
  q.normalize()
}

const bodyWeight = (body: Sim['body'], r: THREE.Vector3, normal: THREE.Vector3) => {
  const rn = scratch.c.crossVectors(r, normal)
  return 1 / body.mass + rn.dot(applyInverseInertia(body, rn, scratch.d))
}

const pushBody = (body: Sim['body'], r: THREE.Vector3, impulse: THREE.Vector3) => {
  body.position.addScaledVector(impulse, 1 / body.mass)
  rotateBody(body.quaternion, applyInverseInertia(body, scratch.e.crossVectors(r, impulse), scratch.f))
}

const solveSegment = (sim: Sim, i: number, h: number, physics: Physics) => {
  const { nodes, body } = sim
  const a = nodes[i]
  const wa = i === 0 ? 0 : NODE_WEIGHT
  const last = i === JOINTS - 1
  const r = scratch.g
  let b = nodes[i + 1]
  if (last) {
    r.copy(body.hang).applyQuaternion(body.quaternion)
    b = scratch.b.copy(body.position).add(r)
  }
  const delta = scratch.a.subVectors(b, a)
  const length = delta.length()
  const stretch = length - sim.rest
  if (stretch <= 0 || length < 1e-9) return
  const normal = delta.divideScalar(length)
  const wb = last ? bodyWeight(body, r, normal) : NODE_WEIGHT
  const rate = (length - sim.lengths[i]) / h
  const tension =
    physics.hold * Math.tanh((physics.stiffness * stretch) / physics.hold) +
    physics.spring * stretch +
    physics.bandDamping * Math.max(0, rate)
  const room = tension * h * h - sim.impulses[i]
  if (room <= 0) return
  const lambda = Math.min(stretch / (wa + wb), room)
  sim.impulses[i] += lambda
  if (wa) a.addScaledVector(normal, lambda * wa)
  if (last) pushBody(body, r, normal.multiplyScalar(-lambda))
  else b.addScaledVector(normal, -lambda * wb)
}

const solvePin = (body: Sim['body'], grab: Grab, target: THREE.Vector3) => {
  const r = scratch.g.copy(grab.local).applyQuaternion(body.quaternion)
  const delta = scratch.a.copy(target).sub(body.position).sub(r)
  const distance = delta.length()
  if (distance < 1e-9) return
  const normal = delta.divideScalar(distance)
  const lambda = distance / bodyWeight(body, r, normal)
  pushBody(body, r, normal.multiplyScalar(lambda))
}

const placeHanging = (sim: Sim, layout: ReturnType<typeof cardLayout>, intro: boolean) => {
  const { nodes, previous, velocities, body, anchor } = sim
  nodes[0].copy(anchor)
  for (let i = 1; i <= JOINTS; i++) {
    nodes[i].copy(nodes[i - 1])
    if (intro) nodes[i].x += sim.rest
    else nodes[i].y -= sim.rest
  }
  body.quaternion.identity()
  if (intro) body.quaternion.setFromAxisAngle(new THREE.Vector3(0, 0, 1), Math.PI / 2)
  body.hang.set(0, layout.hangY, 0)
  const offset = scratch.a.copy(body.hang).applyQuaternion(body.quaternion)
  body.position.copy(nodes[JOINTS]).sub(offset)
  body.previous.copy(body.position)
  body.previousQuaternion.copy(body.quaternion)
  body.velocity.set(0, 0, 0)
  body.angular.set(0, 0, 0)
  for (let i = 0; i <= JOINTS; i++) {
    previous[i].copy(nodes[i])
    velocities[i].set(0, 0, 0)
  }
  sim.lengths.fill(sim.rest)
  sim.turn = 0
  sim.twist = 0
  sim.twistRaw = 0
  sim.calm = 0
}

const configureSimulation = (sim: Sim, layout: ReturnType<typeof cardLayout>, length: number) => {
  sim.rest = length / JOINTS
  const { width, height } = layout
  const body = sim.body
  const t = THICKNESS + BEVEL * 2
  body.mass = 1
  body.inverseInertia.set(
    12 / (height * height + t * t),
    12 / (width * width + t * t),
    12 / (width * width + height * height)
  )
  body.hang.set(0, layout.hangY, 0)
}

const stepSimulation = (sim: Sim, dt: number, physics: Physics, time: number) => {
  const steps = Math.max(1, Math.ceil(dt / MAX_STEP - 1e-6))
  const h = dt / steps
  const { nodes, previous, velocities, body } = sim
  const windX = physics.breeze * (Math.sin(time * 0.53) * 0.7 + Math.sin(time * 1.31 + 1.7) * 0.3) * 3
  const windZ = physics.breeze * Math.sin(time * 0.37 + 0.6) * 2
  const grab = sim.grab
  const pin = scratch.pin
  const nodeDrag = Math.exp(-physics.nodeDrag * h)
  const linearDrag = Math.exp(-physics.linearDrag * h)
  const angularDrag = Math.exp(-physics.angularDrag * h)

  for (let s = 0; s < steps; s++) {
    for (let i = 1; i < JOINTS; i++) {
      const v = velocities[i]
      v.y -= physics.gravity * h
      v.x += (windX + physics.gravityX) * h
      v.z += windZ * h
      previous[i].copy(nodes[i])
      nodes[i].addScaledVector(v, h)
    }

    body.previous.copy(body.position)
    body.previousQuaternion.copy(body.quaternion)
    const q = body.quaternion
    if (grab) {
      const turn = scratch.q.copy(grab.rotation).multiply(scratch.r.copy(q).invert())
      if (turn.w < 0) turn.set(-turn.x, -turn.y, -turn.z, -turn.w)
      const torque = scratch.a.set(turn.x, turn.y, turn.z).multiplyScalar(2 * physics.grip)
      torque.addScaledVector(body.angular, -physics.gripDamping)
      body.angular.addScaledVector(applyInverseInertia(body, torque, scratch.b), h)
    }
    const up = scratch.a.set(0, 1, 0).applyQuaternion(q)
    const front = scratch.b.set(-up.x * up.z, -up.y * up.z, 1 - up.z * up.z)
    if (front.lengthSq() > 1e-3) {
      const facing = scratch.d.set(0, 0, 1).applyQuaternion(q)
      const raw = Math.atan2(scratch.e.crossVectors(front, facing).dot(up), front.dot(facing))
      let turned = raw - sim.twistRaw
      if (turned > Math.PI) turned -= Math.PI * 2
      else if (turned < -Math.PI) turned += Math.PI * 2
      sim.twist += turned
      sim.twistRaw = raw
    }
    if (!grab) {
      const spin = body.angular.dot(up)
      body.angular.addScaledVector(up, (physics.twist * (sim.turn - sim.twist) - physics.twistDamping * spin) * h)
    }
    body.velocity.y -= physics.gravity * h
    body.velocity.x += (windX * 0.35 + physics.gravityX) * h
    body.velocity.z += windZ * 0.35 * h
    body.position.addScaledVector(body.velocity, h)
    rotateBody(body.quaternion, scratch.f.copy(body.angular).multiplyScalar(h))

    sim.impulses.fill(0)
    if (grab) pin.lerpVectors(grab.from, grab.target, (s + 1) / steps)
    for (let iteration = 0; iteration < ITERATIONS; iteration++) {
      for (let i = 0; i < JOINTS; i++) solveSegment(sim, i, h, physics)
      if (grab) solvePin(body, grab, pin)
    }

    for (let i = 1; i < JOINTS; i++) {
      const v = velocities[i].subVectors(nodes[i], previous[i]).divideScalar(h).multiplyScalar(nodeDrag)
      v.multiplyScalar(1 / (1 + physics.nodeAir * v.length() * h))
    }
    body.velocity.subVectors(body.position, body.previous).divideScalar(h)
    const dq = scratch.q.copy(body.previousQuaternion).invert().premultiply(body.quaternion)
    body.angular.set(dq.x, dq.y, dq.z).multiplyScalar((2 / h) * (dq.w < 0 ? -1 : 1))

    const normal = scratch.a.set(0, 0, 1).applyQuaternion(body.quaternion)
    const acrossN = body.velocity.dot(normal)
    const along = scratch.b.copy(body.velocity).addScaledVector(normal, -acrossN)
    along.multiplyScalar(1 / (1 + physics.air * along.length() * h))
    body.velocity
      .copy(along)
      .addScaledVector(normal, acrossN / (1 + physics.broadside * Math.abs(acrossN) * h))
      .multiplyScalar(linearDrag)
    body.angular.multiplyScalar(angularDrag / (1 + physics.spinAir * body.angular.length() * h))
    if (body.velocity.lengthSq() > 3600) body.velocity.setLength(60)
    if (body.angular.lengthSq() > 1600) body.angular.setLength(40)

    nodes[JOINTS].copy(body.hang).applyQuaternion(body.quaternion).add(body.position)
    for (let i = 0; i < JOINTS; i++) sim.lengths[i] = nodes[i].distanceTo(nodes[i + 1])
  }

  if (grab) grab.from.copy(grab.target)

  let energy = body.velocity.lengthSq() + body.angular.lengthSq() * 0.3
  for (let i = 1; i < JOINTS; i++) energy += velocities[i].lengthSq() * 0.05
  sim.calm = energy < 2e-4 ? sim.calm + dt : 0
}

// ---------- 主入口 ----------

export async function initBadge(
  stage: HTMLElement,
  data: BadgeData,
  anchorEl?: HTMLElement | null
): Promise<void> {
  await document.fonts.ready
  const photoImg = await loadPhoto(data.front.photo)
  const frontCanvas = drawFront(data, photoImg)
  const backCanvas = drawBack(data)
  const strapCanvas = drawStrap(data.strapText)

  let renderer: THREE.WebGLRenderer
  try {
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' })
  } catch {
    const img = document.createElement('img')
    img.src = frontCanvas.toDataURL()
    img.alt = 'badge'
    img.style.width = '100%'
    stage.appendChild(img)
    return
  }
  renderer.setClearColor(0x000000, 0)
  renderer.outputColorSpace = THREE.SRGBColorSpace
  renderer.toneMapping = THREE.NeutralToneMapping
  renderer.toneMappingExposure = 1
  const dom = renderer.domElement
  dom.style.display = 'block'
  dom.style.width = '100%'
  dom.style.height = '100%'
  dom.style.pointerEvents = 'none'
  // 全页覆盖层：挂绳从页面顶端垂下，卡片可在整页范围内拖拽
  const root = document.body
  root.style.position = 'relative'
  stage.style.position = 'absolute'
  stage.style.inset = '0'
  stage.style.pointerEvents = 'none'
  stage.style.zIndex = '30'
  stage.style.overflow = 'hidden'
  root.appendChild(stage)
  stage.appendChild(dom)

  const anisotropy = Math.min(8, renderer.capabilities.getMaxAnisotropy())
  const scene = new THREE.Scene()
  const environment = buildEnvironment(renderer)
  scene.environment = environment.texture
  const camera = new THREE.PerspectiveCamera(FOV, 1, 0.1, 200)
  const keyLight = new THREE.DirectionalLight(0xffffff, 1.6)
  keyLight.position.set(-2.5, 4, 6)
  const fillLight = new THREE.DirectionalLight(0xffffff, 0.35)
  fillLight.position.set(3, -1, 4)
  scene.add(keyLight, fillLight)

  const makeTex = (c: HTMLCanvasElement) => {
    const t = new THREE.CanvasTexture(c)
    t.colorSpace = THREE.SRGBColorSpace
    t.anisotropy = anisotropy
    return t
  }
  const frontTexture = makeTex(frontCanvas)
  const backTexture = makeTex(backCanvas)
  const strapTexture = makeTex(strapCanvas)
  strapTexture.wrapS = THREE.ClampToEdgeWrapping
  strapTexture.wrapT = THREE.RepeatWrapping
  const weave = buildWeaveTexture()
  weave.repeat.set(2, (2 * ROPE_LENGTH) / STRAP_SCALE)

  // 卡面印刷色直出，不参与光照/镀层（参照实现的 crispFront 方案）
  const frontMaterial = new THREE.MeshBasicMaterial({ map: frontTexture, toneMapped: false })
  const backMaterial = new THREE.MeshBasicMaterial({ map: backTexture, toneMapped: false })
  const edgeMaterial = new THREE.MeshPhysicalMaterial({ envMapIntensity: 0.5 })
  const metalMaterial = new THREE.MeshStandardMaterial({ metalness: 1 })
  metalMaterial.color.set('#d9dce2')
  metalMaterial.roughness = 0.16
  const bandMaterial = new THREE.MeshPhysicalMaterial({
    map: strapTexture,
    normalMap: weave,
    normalScale: new THREE.Vector2(0.7, 0.7),
    roughness: 0.68,
    sheen: 1,
    sheenRoughness: 0.42,
    sheenColor: new THREE.Color(0.32, 0.32, 0.34),
    side: THREE.DoubleSide
  })

  const layout = cardLayout()
  const cardGeo = buildCardGeometry(layout)
  const cardGroup = new THREE.Group()
  const bodyMesh = new THREE.Mesh(cardGeo.body, edgeMaterial)
  const frontMesh = new THREE.Mesh(cardGeo.face, frontMaterial)
  frontMesh.position.z = THICKNESS / 2 + BEVEL + 0.0012
  const backMesh = new THREE.Mesh(cardGeo.face.clone(), backMaterial)
  backMesh.rotation.y = Math.PI
  backMesh.position.z = -(THICKNESS / 2 + BEVEL + 0.0012)
  const ring = new THREE.Mesh(new THREE.TorusGeometry(RING_RADIUS, RING_TUBE, 18, 72), metalMaterial)
  ring.rotation.y = Math.PI / 2 - 0.7
  ring.position.set(0, layout.ringY, 0)
  cardGroup.add(bodyMesh, frontMesh, backMesh, ring)
  scene.add(cardGroup)

  const bandGeometry = buildBandGeometry(SAMPLES)
  const band = new THREE.Mesh(bandGeometry, bandMaterial)
  band.frustumCulled = false
  scene.add(band)

  const clampGroup = new THREE.Group()
  const clampMesh = new THREE.Mesh(buildClampGeometry(STRAP_SCALE), metalMaterial)
  clampMesh.position.y = EYELET_RADIUS + CLAMP_BODY / 2 - 0.004
  const eyelet = new THREE.Mesh(new THREE.TorusGeometry(EYELET_RADIUS, 0.0105, 14, 40), metalMaterial)
  clampGroup.add(clampMesh, eyelet)
  scene.add(clampGroup)

  const sim = createSimulation()
  const controls: THREE.Vector3[] = []
  const mouth = new THREE.Vector3()
  const tuck = new THREE.Vector3()
  const curve = new THREE.CatmullRomCurve3(controls, false, 'centripetal')
  const view = { width: 1, height: 1 }
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  let raf = 0
  let last = performance.now()
  let time = 0
  let visible = true
  let alive = true
  let hovering = false
  let press: { x: number; y: number; time: number; point: THREE.Vector3 } | null = null

  let framed = false
  const frameView = () => {
    const aspect = view.width / view.height
    let viewHeight = view.height * WORLD_PER_PX
    const minimumWidth = layout.width / 0.72
    if (viewHeight * aspect < minimumWidth) viewHeight = minimumWidth / aspect
    const viewWidth = viewHeight * aspect
    const camZ = viewHeight / 2 / Math.tan((FOV * Math.PI) / 360)
    camera.aspect = aspect
    camera.position.set(0, 0, camZ)
    // 相机离场景很远（全页画布），收紧 near/far 换取深度精度，避免卡面与挤出盖 z-fighting
    camera.near = Math.max(0.05, camZ - 8)
    camera.far = camZ + 8
    camera.lookAt(0, 0, 0)
    camera.updateProjectionMatrix()
    camera.updateMatrixWorld()
    // 锚点对齐文字栏目的水平中心（文档坐标），而非页面正中
    let anchorX = 0
    if (anchorEl) {
      const rect = anchorEl.getBoundingClientRect()
      const stageRect = stage.getBoundingClientRect()
      const centerPx = rect.left - stageRect.left + rect.width / 2
      anchorX = (centerPx / view.width - 0.5) * viewWidth
    }
    // 页面高度变化时平移整个仿真状态，避免锚点瞬移拉扯卡片
    const delta = scratch.d.set(anchorX, viewHeight / 2 - 0.1, 0).sub(sim.anchor)
    if (!framed) {
      framed = true
      sim.anchor.add(delta)
    } else if (delta.lengthSq() > 1e-10) {
      sim.anchor.add(delta)
      for (let i = 0; i <= JOINTS; i++) {
        sim.nodes[i].add(delta)
        sim.previous[i].add(delta)
      }
      sim.body.position.add(delta)
      sim.body.previous.add(delta)
    }
    configureSimulation(sim, layout, ROPE_LENGTH)
    sim.nodes[0].copy(sim.anchor)
    sim.previous[0].copy(sim.anchor)
  }

  const physics = (): Physics => {
    const gravity = 40
    const weight = 40
    return {
      gravity,
      gravityX: 0,
      hold: weight * 3.85,
      stiffness: weight * 10 * JOINTS,
      spring: weight * 0.25 * JOINTS,
      bandDamping: weight * 0.19 * JOINTS,
      linearDrag: 1,
      angularDrag: 0.5 * Math.pow(12, 0.5),
      air: 0.15,
      broadside: 0.5,
      spinAir: 0.03,
      nodeDrag: 2,
      nodeAir: 0.2,
      twist: 30,
      twistDamping: 3,
      grip: 40,
      gripDamping: 6,
      breeze: reduced ? 0 : 0.5
    }
  }

  const points = Array.from({ length: SAMPLES }, () => new THREE.Vector3())
  const sides = Array.from({ length: SAMPLES }, () => new THREE.Vector3())
  const bends = BAND_BEND.map((angle) => [Math.cos(angle), Math.sin(angle)])
  const work = {
    tangent: new THREE.Vector3(),
    toCamera: new THREE.Vector3(),
    basis: new THREE.Matrix4(),
    up: new THREE.Vector3(),
    across: new THREE.Vector3(),
    facing: new THREE.Vector3(),
    end: new THREE.Vector3()
  }

  const updateBand = () => {
    const hang = sim.nodes[JOINTS]
    const reach = EYELET_RADIUS + CLAMP_BODY + 0.05
    let guide = JOINTS - 1
    while (guide > 0 && sim.nodes[guide].distanceTo(hang) < reach * 1.1) guide--
    const axis = work.up.subVectors(sim.nodes[guide], hang)
    if (axis.lengthSq() < 1e-8) axis.set(0, 1, 0).applyQuaternion(sim.body.quaternion)
    axis.normalize()
    mouth.copy(hang).addScaledVector(axis, reach)
    tuck.copy(hang).addScaledVector(axis, EYELET_RADIUS + CLAMP_BODY * 0.35)
    controls.length = 0
    for (let i = 0; i <= guide; i++) controls.push(sim.nodes[i])
    controls.push(mouth, tuck)
    curve.updateArcLengths()
    for (let i = 0; i < SAMPLES; i++) curve.getPointAt(i / (SAMPLES - 1), points[i])
    const length = curve.getLength()
    const held = 1 - mouth.distanceTo(tuck) / Math.max(length, 0.001)
    const position = bandGeometry.getAttribute('position') as THREE.BufferAttribute
    const normal = bandGeometry.getAttribute('normal') as THREE.BufferAttribute
    const uv = bandGeometry.getAttribute('uv') as THREE.BufferAttribute
    const columns = BAND_COLUMNS.length
    const restLength = sim.rest * JOINTS
    const width = STRAP_SCALE / Math.pow(Math.max(1, length / Math.max(restLength, 0.001)), 0.35)
    const { tangent, toCamera, across, facing } = work
    for (let i = 0; i < SAMPLES; i++) {
      tangent.subVectors(points[Math.min(SAMPLES - 1, i + 1)], points[Math.max(0, i - 1)])
      if (tangent.lengthSq() < 1e-12) tangent.set(0, -1, 0)
      tangent.normalize()
      toCamera.subVectors(camera.position, points[i]).normalize()
      const side = sides[i].crossVectors(toCamera, tangent)
      if (side.lengthSq() < 1e-10) side.copy(i > 0 ? sides[i - 1] : scratch.a.set(1, 0, 0))
      side.normalize()
      if (i > 0 && side.dot(sides[i - 1]) < 0) side.negate()
      const angle = -sim.twist * Math.pow(Math.min(1, i / (SAMPLES - 1) / Math.max(held, 0.001)), 1.3)
      facing.crossVectors(tangent, side)
      across.copy(side).multiplyScalar(Math.cos(angle)).addScaledVector(facing, Math.sin(angle))
      facing.crossVectors(tangent, across)
      const p = points[i]
      const v = 1 - i / (SAMPLES - 1)
      for (let c = 0; c < columns; c++) {
        const k = i * columns + c
        const offset = (BAND_COLUMNS[c] - 0.5) * width
        const [bendCos, bendSin] = bends[c]
        position.setXYZ(k, p.x + across.x * offset, p.y + across.y * offset, p.z + across.z * offset)
        normal.setXYZ(
          k,
          facing.x * bendCos + across.x * bendSin,
          facing.y * bendCos + across.y * bendSin,
          facing.z * bendCos + across.z * bendSin
        )
        uv.setXY(k, BAND_COLUMNS[c], v)
      }
    }
    work.end.copy(across)
    position.needsUpdate = true
    normal.needsUpdate = true
    uv.needsUpdate = true

    across.copy(work.end).addScaledVector(axis, -work.end.dot(axis)).normalize()
    facing.crossVectors(across, axis).normalize()
    work.basis.makeBasis(across, axis, facing)
    clampGroup.quaternion.setFromRotationMatrix(work.basis)
    clampGroup.position.copy(hang)
  }

  const render = () => {
    cardGroup.position.copy(sim.body.position)
    cardGroup.quaternion.copy(sim.body.quaternion)
    updateBand()
    renderer.render(scene, camera)
  }

  const tick = (now: number) => {
    raf = 0
    if (!alive) return
    const dt = Math.min(1 / 30, Math.max(1 / 240, (now - last) / 1000))
    last = now
    time += dt
    const current = physics()
    stepSimulation(sim, dt, current, time)
    const body = sim.body
    if (!Number.isFinite(body.position.x + body.position.y + body.position.z + body.quaternion.w)) {
      sim.grab = null
      placeHanging(sim, layout, false)
    }
    render()
    const resting = sim.calm > 1.2 && !sim.grab && current.breeze === 0
    if (visible && !resting) raf = requestAnimationFrame(tick)
  }

  const start = () => {
    if (raf || !visible || !alive) return
    sim.calm = 0
    last = performance.now()
    raf = requestAnimationFrame(tick)
  }

  const raycaster = new THREE.Raycaster()
  const pointer = new THREE.Vector2()

  const toPointer = (event: PointerEvent) => {
    const rect = dom.getBoundingClientRect()
    pointer.set(
      ((event.clientX - rect.left) / rect.width) * 2 - 1,
      -((event.clientY - rect.top) / rect.height) * 2 + 1
    )
    raycaster.setFromCamera(pointer, camera)
  }

  const pickCard = () => {
    cardGroup.updateMatrixWorld()
    const hits = raycaster.intersectObjects([bodyMesh, frontMesh, backMesh], false)
    return hits[0] || null
  }

  const setCursor = (value: string) => {
    if (document.body.style.cursor !== value) document.body.style.cursor = value
  }

  const flip = (point: THREE.Vector3) => {
    const body = sim.body
    const up = scratch.a.set(0, 1, 0).applyQuaternion(body.quaternion)
    let direction = sim.turn > 0 ? -1 : 1
    if (sim.turn === 0) {
      const away = scratch.c.subVectors(point, camera.position).normalize()
      direction = scratch.b.subVectors(point, body.position).cross(away).dot(up) < 0 ? -1 : 1
    }
    sim.turn = sim.turn === 0 ? Math.PI * direction : 0
    body.angular.addScaledVector(up, FLIP_SPIN * direction)
  }

  const onPointerDown = (event: PointerEvent) => {
    if (event.button > 0) return
    toPointer(event)
    const hit = pickCard()
    if (!hit) return
    sim.grab = {
      local: hit.point.clone().sub(sim.body.position).applyQuaternion(sim.body.quaternion.clone().invert()),
      rotation: sim.body.quaternion.clone(),
      reach: hit.distance,
      from: hit.point.clone(),
      target: hit.point.clone()
    }
    press = { x: event.clientX, y: event.clientY, time: performance.now(), point: hit.point.clone() }
    setCursor('grabbing')
    event.preventDefault()
    start()
  }

  const onPointerMove = (event: PointerEvent) => {
    toPointer(event)
    if (sim.grab) {
      if (event.buttons === 0) {
        onPointerUp(event)
        return
      }
      if (press && Math.hypot(event.clientX - press.x, event.clientY - press.y) > 6) press = null
      raycaster.ray.at(sim.grab.reach, sim.grab.target)
      start()
      return
    }
    if (event.pointerType === 'touch') return
    hovering = !!pickCard()
    setCursor(hovering ? 'grab' : '')
  }

  const onPointerUp = (event: PointerEvent) => {
    if (!sim.grab) return
    sim.grab = null
    if (press && event.type === 'pointerup' && performance.now() - press.time < 450) flip(press.point)
    press = null
    setCursor(hovering && event.pointerType !== 'touch' ? 'grab' : '')
    start()
  }

  // 触屏：按住卡片时阻止页面滚动
  const onTouchStart = (event: TouchEvent) => {
    if (event.touches.length !== 1) return
    const t = event.touches[0]
    toPointer(t as unknown as PointerEvent)
    if (pickCard()) event.preventDefault()
  }

  window.addEventListener('pointerdown', onPointerDown)
  window.addEventListener('pointermove', onPointerMove)
  window.addEventListener('pointerup', onPointerUp)
  window.addEventListener('pointercancel', onPointerUp)
  window.addEventListener('touchstart', onTouchStart, { passive: false })

  const resize = () => {
    view.width = Math.max(1, stage.clientWidth)
    view.height = Math.max(1, stage.clientHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2))
    renderer.setSize(view.width, view.height, false)
    frameView()
    render()
    start()
  }

  const resizeObserver = new ResizeObserver(resize)
  resizeObserver.observe(stage)
  const intersectionObserver = new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting
    if (visible) start()
  })
  intersectionObserver.observe(stage)

  frameView()
  placeHanging(sim, layout, !reduced)
  resize()
}
