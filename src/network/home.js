import {request1} from './request'

export function getHomeMultidata() {
  return request1({
    url: '/home/multidata'
  })
}

export function getGoodsData(type,page) {
  return request1({
    url:'/home/data',
    params:{
      type,
      page
    }
  })
}
