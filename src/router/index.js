import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '@/views/Layout.vue'
import Home from '@/views/home/Home.vue'
import Login from '@/views/login/Login.vue'
const Goods = () => import('@/views/goods/index')

const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      { path: '/', component: Home },
      { path: '/product/:id', component: Goods }
    ]
  },
  {
    path: '/login', component: Login
  }
]

const router = createRouter({
  // 哈希路由模式
  history: createWebHashHistory(),
  routes
})

export default router
