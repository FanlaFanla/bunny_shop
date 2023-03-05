import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import cart from './modules/cart'
import user from './modules/user'
import category from './modules/category'

export default createStore({
  // 存状态
  state: {
  },
  // 计算包装
  getters: {
  },
  // 更新状态
  mutations: {
  },
  // 异步更新状态
  actions: {
  },
  // 模块
  modules: {
    cart,
    user,
    category
  },
  // 插件
  plugins: [
    createPersistedState({
      key: 'bunny',
      paths: ['user', 'cart']
    })
  ]
})
