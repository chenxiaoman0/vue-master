import {request} from './request'

// export function getGoodsData(type,page){
//     return request1({
//         url:'home/data',
//         params:{
//             type,
//             page
//         }
//     })
// }
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
