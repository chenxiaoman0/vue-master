<template>
  <div class="cont">
    <nav-bar>
        <div slot="navBarcenter">登录</div>
    </nav-bar>
    <div class="box">
      <login-icon></login-icon>
      <div class="login-box">
        <mt-field placeholder="请输入手机号" type="tel" v-model="phone"></mt-field>
        <mt-field placeholder="请输入密码" type="password" v-model="password"></mt-field>
        <div class="login-btn" @click="login">登录</div>
        <div class="methods">
          <div class="m-msg">
            <router-link :to="{path:'/msgLogin'}">
              <img src="~assets/img/login/message.png"/>
              短信登录
            </router-link>
          </div>
          <div class="m-pswd">
            <router-link :to="{path:'/resetPassword'}">
              <img src="~assets/img/login/password.png" />
              找回密码
            </router-link>
          </div>
          <div class="m-phone">
            <router-link :to="{path:'/register'}">
              <img src="~assets/img/login/phone.png" />
              快速注册
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'

import LoginIcon from './childCom/LogonIcon'
import {checkUser} from 'network/login'
import { Toast } from 'mint-ui';

import {setCookie} from 'common/utils'
  //import { MessageBox } from 'mint-ui';
  export default {
    components: {
      NavBar,
      LoginIcon
    },
    data(){
      return{
        phone:null,
        password:null
      }
    },
    methods: {
        //登录验证
        login(){     
           if(!!!this.phone){
           Toast('手机号不能为空');
            return;
          }
          if(!this.isPhoneNo(this.phone)){
             Toast('手机号格式不正确');
             return;
          }
          if(!!!this.password){
           Toast('密码不能为空');
            return;
          }
          if(this.password.length<6 || this.password.length>12){
            Toast('密码的长度在6-12位之间');
            return;
          }
          if(!this.verifyPassword(this.password)){
            Toast('密码的格式错误');
            return;
          }
        checkUser(this.phone,this.password).then((res)=>{
            if(res){
                let instance = Toast('登录成功');
                setTimeout(() => {
                instance.close();
                setCookie('Flag','isLogin');
                this.$router.push({
                    path:'/home'
                })
                }, 2000);
            }
        })
        },
        //手机号验证
        isPhoneNo(phone) {  
          var pattern = /^1[34578]\d{9}$/;
          return pattern.test(phone);
        },
        //密码验证
        verifyPassword(pwd){
            let pattern=/^[A-Za-z_0-9]{6,16}$/;
            return pattern.test(pwd);
        }
    }
  }
</script>

<style scoped>
  .cont{
    height: 100vh;
    background-color: #ffffff;
    position: relative;
    z-index: 999;
    overflow: hidden;
  }
  .box{
    font-size:16px;
  }
  .box .login-box {
    padding: 0 10px 15px;
  }

  .box .login-box .login-btn {
    margin-top: 10px;
    text-align: center;
    color: #fff;
    padding: 10px 0;
    border-radius:5px;
    background-color: var(--color-tint);
  }

  .methods{
    margin-top:12px;
    font-size:12px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .methods  a{
    display: flex;
    align-items: center;
  }
  .methods  a > img{
    margin-right: 2px;
    width: 12x;
    height:12px;
  }
  .methods .m-msg a > img{
    width: 14px;
    height:14px;
  }
</style>
