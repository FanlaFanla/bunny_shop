<template>
  <!-- 顶部区域 -->
  <AppNavbar></AppNavbar>
  <!-- 头部区域 -->
  <AppHeader></AppHeader>
  <!-- 内容容器 -->
  <div class="main">
    <!-- 二级路由 -->
    <router-view></router-view>
  </div>
  <!-- 底部组件 -->
  <AppFooter></AppFooter>
</template>

<script>
import AppNavbar from '@/components/AppNavbar.vue'
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
export default {
  name: 'LayoutPage',
  components: {
    AppNavbar,
    AppHeader,
    AppFooter
  }
}
</script>

<style scoped lang="less">
</style>
