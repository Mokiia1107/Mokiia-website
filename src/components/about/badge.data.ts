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
  strapText: 'Literature Club',
  front: {
    brand: 'About',
    passType: 'CREW InFo',
    photo: '/images/头像.jpg',
    portraitLabel: '',
    portraitEdition: '',
    name: 'Mokiia',
    alias: '莫莫卡',
    seal: '',
    role: '文学部部长',
    motto: ['已经，没什么好害怕的了', ''],
    code: 'have a nice weekend!',
    note: 'mokiia.chr'
  },
  back: {
    kicker: 'Okay, Everyone!',
    title: ['Are you into reading?', 'No need for being coy!'],
    features: ['感谢你成为我文学部的一员！', 'Thank you for being a part of my Literature Club!', ''],
    catchLabel: '不要迟疑，还有，记得随时保存你的游戏进度',
    catchphrase: 'by Mokiia'
  }
}
