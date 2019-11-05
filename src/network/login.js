import {request} from './request'
const qs = require('qs');
export function checkUser(username,password){
    const data={
        username:username,
        password:password,
        addtime:Date.now()
    }
    return request({
        method:'POST',
        url:'login/loginin',
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
        data:qs.stringify(data),
    })
}
export function register(user){
    const data={
        username:user.phone,
        password:user.password,
        code:user.code,
        addtime:Date.now()
    }
    return request({
        method:'POST',
        url:'login/register',
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
        data:qs.stringify(data),
    })
}
export function getVCode(){
    return request({
        url:'login/show_captcha'+Math.random()
    })
}