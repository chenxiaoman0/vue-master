import {request} from './request'
const qs = require('qs');
//显示预约的订单
export function showDonateInfo(id){
    return request({
        url:'donate/readDonateInfo',
        params:{
            id
        }
    })
}

// 添加预约信息
export function addDonateInfo(data){
     return request({
        method:'POST',
        url:'donate/createDonateInfo',
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
        data:qs.stringify(data),
    })
 }