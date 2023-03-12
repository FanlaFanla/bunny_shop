import CustomMessage from './CustomMessage.js'

// export default {
//   // install方法可挂载到main.js节点
//   // main.js里需要使用 use 本模块
//   install (app) {
//     app.config.globalProperties.$CustomMessage = CustomMessage
//   }
// }
const importFn = require.context('./', false, /\.vue$/)
export default {
  install (app) {
    // 在app上进行扩展，app提供 component directive 函数
    // 如果要挂载原型 app.config.globalProperties 方式
    // app.component(XtxSkeleton.name, XtxSkeleton)
    // app.component(XtxCarousel.name, XtxCarousel)
    // app.component(XtxMore.name, XtxMore)
    // app.component(XtxBread.name, XtxBread)
    // app.component(XtxBreadItem.name, XtxBreadItem)

    // 根据keys批量注册
    importFn.keys().forEach(path => {
      // 导入组件
      const component = importFn(path).default
      // 进行注册
      app.component(component.name, component)
    })

    // 定义指令
    // defineDirective(app)

    // 定义一个原型函数
    app.config.globalProperties.$CustomMessage = CustomMessage
    // app.config.globalProperties.$confirm = Confirm
  }
}
