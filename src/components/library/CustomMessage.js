// 提供显示message的函数
// 可以直接用编程式使用，也可以改在vue原形上
// import Message from 'message.js' Message({...})
// this.$Messge
import { createVNode, render } from 'vue'
import CustomMessage from './CustomMessage.vue'

const div = document.createElement('div')
document.body.appendChild(div)

let timer = null
export default ({ type, text }) => {
  // 1渲染组件
  // 2将组件编译为虚拟节点
  // createVNode(组件, props)
  const vnode = createVNode(CustomMessage, { type, text })
  // 3准备装载自定义组件的DOM容器
  // 4把虚拟节点渲染到 3 的DOM容器中
  // render(虚拟节点，容器)
  render(vnode, div)
  // 销毁本组件
  clearTimeout(timer)
  timer = setTimeout(() => {
    render(null, div)
  }, 3000)
}
