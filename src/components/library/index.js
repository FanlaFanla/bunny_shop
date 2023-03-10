import CustomMessage from './CustomMessage.js'

export default {
  // install方法可挂载到main.js节点
  // main.js里需要使用 use 本模块
  install (app) {
    app.config.globalProperties.$CustomMessage = CustomMessage
  }
}
