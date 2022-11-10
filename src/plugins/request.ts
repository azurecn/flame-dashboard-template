import FlameRequests from "flame-request"

export default new FlameRequests({
  projectName: process.env.VUE_APP_PROJECT_NAME || '',
  whiteList: ['login']
})