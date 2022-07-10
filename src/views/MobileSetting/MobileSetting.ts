// 标题
export interface FlmTitle {
  title: string
  subTitle: string
}

// 正文
export interface FlmText {
  content: string
}

// 组件
export interface flmComponent {
  id?: number
  name: string
  type: 'flmTitle' | 'flmText'
  defaultConfig: FlmTitle | FlmText
}

// 组件引用字典
export interface FlmComponentDist {
  flmTitle: Object
  flmTitleSetting: Object
  flmText: Object
  flmTextSetting: Object
}