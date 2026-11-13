// ============================================================
// 工牌内容配置：直接修改下面的文字，保存后刷新页面即可生效
// ============================================================

export interface BadgeData {
  /** 挂绳上的文字（竖排重复显示） */
  strapText: string
  front: {
    /** 左上角品牌 / 站点名 */
    brand: string
    /** 右上角证件类型 */
    passType: string
    /** 照片路径：把图片放进 public/images/ 后填 '/images/你的图片.jpg'；留空 '' 显示占位符 */
    photo: string
    /** 照片左下角标签 */
    portraitLabel: string
    /** 照片右下角标签 */
    portraitEdition: string
    /** 姓名（大字） */
    name: string
    /** 别名（姓名右侧小字，留空 '' 不显示） */
    alias: string
    /** 姓名行右侧的徽章文字 */
    seal: string
    /** 部门 / 职位 */
    role: string
    /** 两行签名 */
    motto: [string, string]
    /** 底部编号（条形码右侧） */
    code: string
    /** 底部编号下方的小字 */
    note: string
  }
  back: {
    /** 背面上方的大短句 */
    kicker: string
    /** 两行大标题 */
    title: [string, string]
    /** 三条特点 */
    features: [string, string, string]
    /** 底部引言的标签 */
    catchLabel: string
    /** 底部引言内容 */
    catchphrase: string
  }
}

export const badge: BadgeData = {
  strapText: 'MOKIIA',
  front: {
    brand: 'XXX',
    passType: 'CREW PASS',
    photo: '',
    portraitLabel: 'XXX',
    portraitEdition: 'XXX',
    name: 'XXX',
    alias: 'XXX',
    seal: 'XXX',
    role: 'XXX',
    motto: ['XXX', 'XXX'],
    code: 'XXX',
    note: 'XXX'
  },
  back: {
    kicker: 'XXX',
    title: ['XXX', 'XXX'],
    features: ['XXX', 'XXX', 'XXX'],
    catchLabel: 'XXX',
    catchphrase: 'XXX'
  }
}
