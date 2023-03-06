<template>
  <nav class="app-nav">
    <div class="container">
      <ul>
        <template v-if="profiles.token">
          <li><a href="javascript:;" class="iconfont icon-user">{{profiles.account}}</a></li>
          <li><a href="javascript:;">退出登录</a></li>
        </template>
        <template v-else>
          <li><a href="javascript:;">登录</a></li>
          <li><a href="javascript:;">免费注册</a></li>
        </template>
        <li><a href="javascript:;">我的订单</a></li>
        <li><a href="javascript:;">会员中心</a></li>
        <li><a href="javascript:;">帮助</a></li>
        <li><a href="javascript:;" class="iconfont icon-phone">手机版</a></li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
export default {
  name: 'AppNavbar',
  setup () {
    const store = useStore()
    const profiles = computed(() => {
      return store.state.user.profiles
    })
    return { profiles }
  }
}
</script>

<style scoped lang="less">
.app-nav{
  background: #333;
  ul{
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 53px;
    li{
    text-align: center;
    a{
      display: inline-block;
      padding: 0 20px;
      color: aliceblue;
    }
    a:hover{
      color: @xtxColor;
    }
    ~li{
      border-left: 2px solid #666;
    }
  }
  }
}
</style>
