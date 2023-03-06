<template>
  <header class="app-header">
    <div class="container">
      <div class="icon">
        <a href="javascript:;"></a>
      </div>
      <!-- 组件 -->
      <AppHeaderNav></AppHeaderNav>
      <div class="search">
        <em class="iconfont icon-search"></em>
        <input type="text" placeholder="搜一搜">
      </div>
      <div class="cart">
        <em class="iconfont icon-cart"></em>
        <span class="cartcount">1</span>
      </div>
    </div>
  </header>
</template>

<script>
import AppHeaderNav from './AppHeaderNav.vue'
export default { components: { AppHeaderNav } }
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
    .cart{
      position: relative;
      margin-left: 10px;
      .iconfont{
        font-size: 25px;
      }
      .cartcount{
        position: absolute;
        top: -5px;
        left: 20px;
        font-size: 12px;
        padding: 2px 7px;
        border-radius: 10px;
        color: #fff;
        background: rgb(251, 45, 45);
      }
    }
   }
}
</style>
