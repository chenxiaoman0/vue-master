import {request} from './request'

//获取分类新闻数据
export function getNewsData(type,page){
    return request({
        url:'news/getNews',
        params:{
            type,
            page
        }
    })
}
//获取最新几条的分类数据
export function getNewestData(){
    return request({
        url:'news/getNewest'
    })
}
export function getNewsDetail(id){
    return request({
        url:'news/getDetail',
        params:{
            id
        }
    })
}