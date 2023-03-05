<template>
  <!-- 顶部区域 -->
  <nav>顶部区域</nav>
  <!-- 头部区域 -->
  <header>头部区域</header>
  <!-- 内容容器 -->
  <div class="main">
    <!-- 二级路由 -->
    <router-view></router-view>
  </div>
  <!-- 底部组件 -->
  <footer>footer</footer>
</template>

<script>
export default {
  name: 'LayoutPage'
}
</script>

<style scoped lang="less">
</style>
