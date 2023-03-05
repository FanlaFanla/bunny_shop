// 用户模块
export default {
  namespaced: true,
  state () {
    return {
      // 用户信息
      profiles: {
        id: '',
        avatar: '',
        nickname: '',
        account: '',
        mobile: '',
        token: ''
      }
    }
  },
  mutations: {
    setUser (state, payload) {
      state.profiles = payload
    }
  }
}
