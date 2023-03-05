import axios from 'axios'
import store from '@/store'
import router from '@/router'

// 基准地址，可供非axios请求快速请求
export const baseURL = 'http://mock.boxuegu.com/mock/1175/'
const instance = axios.create({
  baseURL,
  headers: {},
  timeout: 5000
})

// 请求拦截
instance.interceptors.request.use(config => {
  // const profiles = store.state.user.profiles
  const { profiles } = store.state.user
  if (profiles.token) {
    config.headers.Authorization = `Bearer ${profiles.token}`
  }
  return config
}, err => {
  return Promise.reject(err)
})

// 响应拦截
instance.interceptors.response.use(res => res.data, err => {
  if (err.response && err.response.statue === 401) {
    // 1清空无效信息,提交commit清空store里的信息
    store.commit('user/setUser', {})
    // 2跳转到某页面
    // 获取的local地址fullPath需要转义，特殊字符转为URI编码
    const fullPath = encodeURIComponent(router.currentRoute.value.fullPath)
    router.push('/login?redirectUrl=' + fullPath)
  }
  return Promise.reject(err)
})

// 请求工具函数
export default (url, method, subData) => {
  return instance({
    url,
    method,
    // 动态设置
    [method.toLowerCase() === 'get' ? 'params' : 'data']: subData
  })
}
