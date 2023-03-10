<template>
  <div id="main">
    <!-- 头部欢迎 -->
  <LoginHeader>欢迎登录</LoginHeader>
  <!-- 登录表单区 -->
  <div class="login">
    <div class="wrapper">
      <div class="loginmethod">
        <a @click="activeName='isAccountLogin'" :class="{active:activeName==='isAccountLogin'}">账户登录</a>
        <a @click="activeName='isSqrLogin'" :class="{active:activeName==='isSqrLogin'}">扫码登录</a>
      </div>
      <!-- 输入账号，短信登录 -->
      <LoginForm v-if="activeName === 'isAccountLogin'"></LoginForm>
      <!-- 二维码登陆 -->
      <div id="sqr" v-else-if="activeName === 'isSqrLogin'">
        <img src="@/assets/images/code.jpg" alt="" />
        <p>打开<a href="">微信APP</a>扫码登录</p>
      </div>
    </div>
  </div>
  <!-- 底部署名 -->
  <LoginFooter></LoginFooter>
  </div>
</template>

<script>
import { ref } from 'vue'
import LoginHeader from '@/views/login/components/LoginHeader.vue'
import LoginFooter from '@/views/login/components/LoginFooter.vue'
import LoginForm from '@/views/login/components/LoginForm.vue'
export default {
  components: {
    LoginHeader,
    LoginFooter,
    LoginForm
  },
  setup () {
    const activeName = ref('isAccountLogin')
    return { activeName }
  }
}
</script>

<style scoped lang="less">
#main{
  background: #fff;
}
// 登录表单区域
.login {
  height: 490px;
  background: url(@/assets/images/login-bg.jpg) no-repeat 68% / cover;
  position: relative;
  .wrapper {
    position: absolute;
    width: 380px;
    height: 400px;
    background: #fff;
    left: 50%;
    top: 50px;
    .loginmethod {
      padding: 0 30px;
      border-bottom: 1px solid #f0f0f0;
      height: 55px;
      line-height: 55px;
      a {
        display: inline-block;
        font-size: 20px;
        &:hover {
          color: @xtxColor;
        }
        &:nth-child(n + 2) {
          float: right;
        }
      }
      .active{
        color: @xtxColor;
      }
    }
  }
}
#sqr{
      text-align: center;
      img{
        width: 200px;
        height: 200px;
        margin: 45px 0 45px 0;
      }
      a{
        font-size: 20px;
        color: @xtxColor;
      }
    }
</style>
