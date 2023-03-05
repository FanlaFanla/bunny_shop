import { createRouter, createWebHashHistory } from 'vue-router'

const routes = []

const router = createRouter({
  // 哈希路由模式
  history: createWebHashHistory(),
  routes
})

export default router
