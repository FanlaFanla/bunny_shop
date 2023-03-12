// 购物车相关的api
import request from '@/utils/request'
// 获取商品信息
// @params skuId{String}
export const getNewCartGoods = (skuId) => {
  return request(`/goods/stock/${skuId}`, 'get')
}
