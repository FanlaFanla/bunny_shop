// 定义分类相关的API接口
import request from '@/utils/request'

// 获取首页所有分类
export const getAllCategory = () => {
  return request('/home/category/head', 'get')
}
