import {request} from './request'
const qs = require('qs');
export function getGoodsData(type,page){
    return request({
        url:'goods/getGoodsData',
        params:{
            type,
            page
        }
    })
}
export function getDetail(id){
    return request({
        url:'goods/getDetail',
        params:{
          id
        }
    })
}
//购买商品
export function buy(){
    const data={
        username:username,
        password:address,
        phone:phone,
        dec:dec,
        u_id:1
    }
    return request({
        method:'POST',
        url:'goods/buy',
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
        data:qs.stringify(data),
    })
}
//我的购买列表
export function getOrderList(id){
    return request({
        url:'goods/orderList',
        params:{
          u_id:1
        }
    })
}