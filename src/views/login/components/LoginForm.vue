<template>
  <div id="password-phone">
        <div class="toggle" v-if="isMessageLogin==='isMessageLogin'">
          <div class="iconfont icon-msg" @click="isMessageLogin=''">使用短信登录</div>
        </div>
        <div class="toggle " v-else>
          <div class=" iconfont icon-user" @click="isMessageLogin='isMessageLogin'">使用密码登录</div>
        </div>

        <Form ref="userRef" :validation-schema="userLoginSchema" autocomplete="off">
        <template v-if="isMessageLogin==='isMessageLogin'">
          <div>
            <em class="iconfont icon-user"></em>
            <Field type="text" v-model="form.account" name="username" placeholder="请输入用户名"/>
            <ErrorMessage name="username"></ErrorMessage>
            <p></p>
          </div>
          <div>
            <em class="iconfont icon-lock"></em>
            <Field type="password" v-model="form.password" name="password" placeholder="请输入密码" />
            <ErrorMessage name="password"></ErrorMessage>
          </div>
        </template>
        <template v-else>
          <div>
            <em class="iconfont icon-user"></em>
            <Field type="text" v-model="form.mobile" name="mobile" placeholder="请输入手机号"/>
            <ErrorMessage name="mobile"></ErrorMessage>
          </div>
          <div>
            <em class="iconfont icon-code"></em>
            <Field type="text" name="code" v-model="form.code" placeholder="请输入验证码" autocomplete="off"/>
            <span @click="sendmsg" v-if="time===60">发送验证码</span>
            <span v-else-if="time<60">{{ time }}</span>
          </div>
        </template>
        <div class="clause" :validation-schema="userLoginSchema">
          <Field v-model="form.isAgree" value="true" name="isAgree" type="checkbox"/>
          <i>我已同意<a href="">隐私条款</a>和<a href="">服务条款</a></i>
          <ErrorMessage name="isAgree"></ErrorMessage>
        </div>
        <div class="submit">
          <div @click="submit">提交</div>
        </div>
        </Form>
      </div>
</template>

<script>
import { ref, reactive, watch, getCurrentInstance } from 'vue'
// 表单验证插件
import { Form, Field, ErrorMessage } from 'vee-validate'
// 表单校验规则
import veeValidate from '@/utils/vee-validate-schema'
// 引用仓库
import { useStore } from 'vuex'
import { useRouter, useRoute } from 'vue-router'
// 用户登录api
import { userAccountLogin, userMobileLoginMsg, userMobileLogin } from '@/api/user'
// import CustomMessage from '@/components/library/CustomMessage.js'
export default {
  name: 'LoginForm',
  components: {
    Form, Field, ErrorMessage
  },
  setup () {
    // 表单数据
    const form = reactive({
      isAgree: false,
      account: null,
      password: null,
      mobile: null,
      code: null
    })
    // 短信/用户名登录切换
    const isMessageLogin = ref('isMessageLogin')
    // 表单验证
    const userLoginSchema = {
      username: veeValidate.username,
      password: veeValidate.password,
      mobile: veeValidate.mobile,
      isAgree (value) {
        if (!value) { return '请勾选同意' }
        return true
      }
    }
    // 监听短信登录/用户登录 判定条件，清空输入过的表单
    watch(isMessageLogin, () => {
      // 重置数据
      form.isAgree = false
      form.account = null
      form.password = null
      form.mobile = null
      form.code = null
      // 如果没有销毁Field组件，之前的校验结果不会消耗
    })
    const store = useStore()
    const router = useRouter()
    const route = useRoute()
    // 点击登录时对整体表单进行校验
    const { proxy } = getCurrentInstance()
    const userRef = ref(null)
    async function submit () {
      // CustomMessage({})
      // proxy.$CustomMessage({})
      // validate对整体表单校验，返回的是promise
      const valid = await userRef.value.validate()
      // 表单验证成功为true
      if (!valid.valid) {
        let data = null
        try {
          // 判断是哪种登录方式
          if (!isMessageLogin.value) {
            // 1发送验证码，60秒倒计时
            // 2手机号登录
            const { mobile, code } = form
            data = await userMobileLogin({ mobile, code })
            console.log(data)
          } else {
            // 账号登录
            const { account, password } = form
            data = await userAccountLogin({ account, password })
          }
          // 存储用户信息
          // 跳转来源地址
          const { id, account, avatar, mobile, nickname, token } = data.result
          store.commit('user/setUser', { id, account, avatar, mobile, nickname, token })
          router.push(route.query.redirectUrl || '/')
          // 消息提示
          proxy.$CustomMessage({ type: 'success', text: '登录成功' })
        } catch (e) {
          console.log(e)
        }
      }
    }
    // 验证码重置倒计时
    const time = ref(60)
    const sendmsg = async () => {
      const valid = userLoginSchema.mobile(form.mobile)
      let timer = null
      if (valid) {
        // 手机号校验成功
        const result = await userMobileLoginMsg(form.mobile)
        time.value--
        // 开启60秒倒计时
        console.log(result)
        timer = setInterval(() => {
          time.value--
          if (time.value <= 0) {
            clearInterval(timer)
            time.value = 60
          }
        }, 1000)
      } else {

      }
    }
    return { form, isMessageLogin, userRef, submit, userLoginSchema, sendmsg, time }
  }
}
</script>

<style scoped lang='less'>
#password-phone {
      .toggle {
        margin: 10px 0 0;
        padding: 0 30px;
        height: 30px;
        line-height: 30px;
        font-size: 14px;
        color: @xtxColor;
        overflow: hidden;
        div{
          float: right;
        }
      }
      form {
        padding: 10px 30px 0;
        div {
          margin-bottom: 33px;
          position: relative;
          em {
            position: absolute;
            background-color: #dedfdb;
            width: 36px;
            height: 36px;
            font-size: 20px;
            text-align: center;
            line-height: 36px;
          }
          input {
            width: 300px;
            height: 36px;
            padding-left: 45px;
            border: 1px solid #e4e1e1;
          }
          span{
            position: absolute;
            width: 90px;
            height: 36px;
            background: #f4f4f5;
            line-height: 35px;
            text-align: center;
            right: 20px;
            font-size: 14px;
          }
        }
        .clause {
        padding: 0 30px;
        display: flex;
        align-items: center;
        input{
          width: 20px;
          display: inline-block;
          margin-right: 4px;
        }
        a {
          color: #2d87ee;
        }
        span[role]{
          display: block;
          position: absolute;
          top: 27px;
          background: inherit;
          left: 42px;
          color: red;
        }
      }
      .submit {
        padding: 0 30px;
        margin-top: 36px;
        div {
          width: 100%;
          height: 40px;
          background: @xtxColor;
          text-align: center;
          line-height: 40px;
          color: #fff;
        }
      }
      }
    }
</style>
