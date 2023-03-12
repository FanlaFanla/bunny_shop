import { getNewCartGoods } from '@/api/cart'

// 购物车模块
export default {
  namespaced: true,
  state () {
    return {
      // 购物车商品列表
      list: []
    }
  },
  mutations: {
    // 加入购物车
    insertCart (state, payload) {
      const { skuId } = payload
      // 添加过的商品count累加
      if (state.list.some(item => item.skuId === skuId)) {
        state.list[state.list.findIndex(item => item.skuId === skuId)].count += payload.count
        return
      }
      // 没有添加过的商品直接unshift
      state.list.unshift(payload)
    },
    // 更新购物车
    updateCart (state, goods) {
      // updateGoods是store里商品信息
      const updateGoods = state.list.find(item => item.skuId === goods.skuId)
      for (const key in goods) {
        if (goods[key] !== undefined && goods[key] !== null && goods[key] !== '') {
          // 把最新的价格和库存更新
          updateGoods[key] = goods[key]
        }
      }
    },
    // 从购物车删除商品
    deleteGoods (state, skuId) {
      const index = state.list.findIndex(item => item.skuId === skuId)
      state.list.splice(index, 1)
    }
  },
  actions: {
    // 加入购物车
    insertCart (ctx, payload) {
      // 登录和未登录
      return new Promise((resolve, reject) => {
        // 已经登录
        if (ctx.rootState.user.profiles.token) {
          return 1
        } else {
          // 未登录
          ctx.commit('insertCart', payload)
        }
      })
    },
    // 获取商品列表
    findCart (ctx) {
      return new Promise((resolve, reject) => {
        if (ctx.rootState.user.profiles.token) {
          // 已登录
        } else {
          // 未登录
          // 有几件商品，同时发送请求，一并修改本地数据
          // Promise.all([promise数组]).then(dataalist => {...})
          const promiseArr = ctx.state.list.map(goods => {
            return getNewCartGoods(goods.skuId)
          })
          Promise.all(promiseArr).then(result => {
            // 更新本地购物车
            result.forEach((item, index) => {
              ctx.commit('updateCart', { skuId: ctx.state.list[index].skuId, ...item.result })
            })
          })
        }
      })
    },
    // 删除商品
    deleteCart (ctx, payload) {
      return new Promise((resolve, reject) => {
        if (ctx.rootState.user.profiles.token) {
          console.log(1)
        } else {
          // 未登录
          ctx.commit('deleteGoods', payload)
        }
      })
    }
  },
  getters: {
    // 购物车内所有商品的数量，供shop Icon显示数字
    countGoods (state) {
      return state.list.reduce((p, n) => p + n.count, 0)
    },
    // 购物车内所有商品的价格
    totalPrice (state) {
      return (state.list.reduce((p, n) => p + n.count * n.price, 0).toFixed(2))
    }
  }
}
