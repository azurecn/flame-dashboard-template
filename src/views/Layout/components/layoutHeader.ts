// 通知消息
export interface Notice {
  notice: string
  date: string
  status: number
}

// 通知状态
export interface NoticeStatus {
  text: string
  type: 'danger' | 'warning' | 'info'
}

// 用户信息
export interface UserInfo {
  userName: string
  userRole: string
  systemVersion: string
}

// 用户操作
export interface UserOperation {
  operation: string
  text: string
}