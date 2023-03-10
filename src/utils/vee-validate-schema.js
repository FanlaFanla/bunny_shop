// vee-validate表单校验插件校验规则
export default {
  // 用户名校验规则
  username (value) {
    value = !value ? value = '' : value
    if (!value) return '请输入用户名'
    if (value.length > 4 && value.length < 15) {
      return true
    }
    return '长度4-15'
  },
  // 密码校验规则
  password (value) {
    if (!value) return '请输入密码'
    if (/^[0-9a-zA-z]{8,16}$/.test(value)) {
      return true
    }
    return '长度8-16位'
  },
  // 手机号校验规则
  mobile (value) {
    if (!value) return '请输入手机号'
    if (/1[3578][0-9]{9}$/.test(value)) {
      return true
    }
    return '手机号错误'
  }
}
