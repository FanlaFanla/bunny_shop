import request from '@/utils/request'

/*
账号密码登录
@params {String} account
@params {String} password
@return promise
*/
export const userAccountLogin = ({ account, password }) => {
  return request('/login', 'post', { account, password })
}

/* 获取手机号登录验证码
@params {String} mobile
*/
export const userMobileLoginMsg = (mobile) => {
  return request('/login/code', 'get', { mobile })
}

/* 手机号登录
@params {String} mobile
@params {String} code
*/
export const userMobileLogin = (mobile, code) => {
  return request('/login/code', 'post', { mobile, code })
}
