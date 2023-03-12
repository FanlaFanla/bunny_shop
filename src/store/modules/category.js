// 分类数据模块
import { topCategory } from '@/api/topCategory.js'
import { getAllCategory } from '@/api/category.js'
export default {
  namespaced: true,
  state () {
    return {
      // 基础分类信息，依赖topCategory.js
      categoryList: topCategory.map(item => ({ name: item }))
    }
  },
  mutations: {
    // payload，所有分类的集合
    setCategoryList (state, payload) {
      state.categoryList = payload
    }
  },
  actions: {
    async getCategoryList ({ commit }) {
    // 获取分类数据
      const data = await getAllCategory()
      // 修改分类数据
      commit('setCategoryList', data.result)
    }
  }
}
