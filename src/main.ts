import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"

import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import 'element-plus/dist/index.css'
import * as icons from '@element-plus/icons-vue'

import { isValidKey } from '@/../node_modules/flame-plus/packages/utils'

// 打印当前版本（注释为selint忽略，不要删）
/* eslint-disable */
console.log(
  `%c flame-frame-web %c ${process.env.VUE_APP_VERSION} `,
  'color: white; background: #6B4890; padding: 2px 0; border-radius: 10px 0 0 10px',
  'color: white; background: #383038; padding: 2px 0; border-radius: 0 10px 10px 0'
)
/* eslint-disable */

const app = createApp(App)
  .use(store)
  .use(router)
  .use(ElementPlus, { locale: zhCn })
Object.keys(icons).forEach((key: string) => {
  isValidKey(key, icons) && app.component(key, icons[key])
})
app.mount("#app")
