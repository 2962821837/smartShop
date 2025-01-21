import request from '@/utils/request'

// 加入购物车
// goodId=>商品id
// goodsSkuId=>商品规格id,如红色手机，蓝色手机
export const addCart = (goodsId, goodsNum, goodsSkuId) => {
  return request.post('/cart/add', {
    goodsId,
    goodsNum,
    goodsSkuId
  })
}

export const getCartList = () => {
  return request.get('/cart/list')
}

export const changeCount = (goodsId, goodsNum, goodsSkuId) => {
  return request.post('/cart/update', {
    goodsId,
    goodsNum,
    goodsSkuId
  })
}

export const delSelect = (cartIds) => {
  return request.post('/cart/clear', {
    cartIds
  })
}
