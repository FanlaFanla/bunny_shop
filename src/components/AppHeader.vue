<template>
  <header class="app-header">
    <div class="container">
      <div class="icon">
        <RouterLink to="/"></RouterLink>
      </div>
      <!-- 组件 -->
      <AppHeaderNav></AppHeaderNav>
      <div class="search">
        <em class="iconfont icon-search"></em>
        <input type="text" placeholder="搜一搜">
      </div>
      <!-- 使用购物车组件 -->
      <AppHeaderCart></AppHeaderCart>
    </div>
  </header>
</template>

<script>
import AppHeaderNav from './AppHeaderNav.vue'
import AppHeaderCart from './AppHeaderCart.vue'
export default { components: { AppHeaderNav, AppHeaderCart } }
</script>

<style scoped lang="less">
.app-header{
  background: #fff;
  .container{
    display: flex;
    align-items: center;
      .icon{
      a{
        display: block;
        width: 200px;
        height: 100px;
        background:url(@/assets/images/logo.png) center/100% no-repeat;
      }
    }
    .search{
      position: relative;
      em{
        position: absolute;
        top: 8px;
        left: 8px;
        color: #cec6c6;
      }
      input{
        height: 32px;
        padding-left: 30px;
        border-bottom: 1px solid #ebe1e1;
      }
    }
   }
}
</style>
