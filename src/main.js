import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'normalize.css'
import '@/assets/styles/common.less'
import '@/assets/styles/fonticon.css'
// 自定义组件挂载
import ComponentLibrary from '@/components/library'

const app = createApp(App)

app.use(store).use(router).use(ComponentLibrary).mount('#app')
