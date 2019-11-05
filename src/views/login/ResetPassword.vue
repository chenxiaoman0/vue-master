<template>
  <div class="cont">
    <nav-bar>
         <back slot="navBarLeft" @click.native="backTo"></back>
        <div slot="navBarcenter">忘记密码</div>
    </nav-bar>
    <div class="box">
       <login-icon></login-icon>
      <div class="msg-login-box">
        <mt-field placeholder="请输入手机号" type="tel" v-model="phone"></mt-field>
        <div class="code">
          <mt-field placeholder="请输入验证码" type="text" v-model="imgNumber">
          </mt-field>
          <div class="seconding" >
            <img :src="verifyCode" alt="看不清？点击更换" @click="getVCode"/>
          </div>
        </div>
        <div  class="code">
          <mt-field placeholder="请输入验证码" type="number" v-model="number">
          </mt-field>
          <div :class="{disabled_btn:vcBool,seconds:fetchCodeMsg,seconding:!fetchCodeMsg}"   @click="sendCode">{{timerCodeMsg}}</div>
        </div>
        <mt-field placeholder="请输入新密码" type="password" v-model="password"></mt-field>
        <div class="msg-login-btn" @click="restPwd">重置密码</div>
      </div>
    </div>
  </div>
</template>

<script>
import { Toast } from 'mint-ui';
import NavBar from 'components/common/navbar/NavBar'
import Back from 'components/common/back/Back'


import LoginIcon from './childCom/LogonIcon'
  export default {
    components: {
      NavBar,
      LoginIcon,
      Back
    },
    data() {
      return {
        phone: null,
        number: null,
        password: null,
        imgNumber:null,
        verifyCode:null,
        vcBool:true,
        timerCodeMsg:'获取验证码',
        fetchCodeMsg:true
      }
    },
    watch: {
      imgNumber: function (value) {
        if(value.length >= 4){
          this.chkVCode()
        }
      }
    },
    methods: {
    //点击返回上一页面
    backTo(){
        this.$router.back();
    },
      sendCode(){//发送短信验证码
          if(!!!this.phone){
            Toast('手机号不能为空');
            return;
          }
          if(!this.isPhoneNo(this.phone)){
            Toast('手机号格式不正确');
             return;
          }
          this.axios.post(this.url+'/api/Login/SendSMSCode',{phone:this.phone}).then((res)=>{
            this.timeOut();
            if(res.data.Code==200){
              Toast(res.data.Data);
            }else{
              Toast(res.data.Data);
            }
          }).catch((err)=>{
             Toast('网络请求超时');
          })
      },
      isPhoneNo(phone) {  //手机号验证
        var pattern = /^1[34578]\d{9}$/;
        return pattern.test(phone);
      },
      verifyPassword(pwd){//密码验证
          let pattern=/^[A-Za-z_0-9]{6,16}$/;
          return pattern.test(pwd);
      },
      timeOut(){//倒计时
        let self=this;
        self.fetchCodeMsg = true
        let sec =60;
        for(let  i=0; i<=60; i++){
          window.setTimeout(function(){
              if (sec != 0) {
                self.timerCodeMsg = sec + "s后重新发送" ;
                sec--;
            } else {
                sec = 60;//如果倒计时结束就让重新获取验证码显示出来
                self.timerCodeMsg="重新获取验证码";
                self.fetchCodeMsg = false
            }
          }, i * 1000)
        }
      },
      restPwd(){//重置密码
        if(!!!this.phone){
            Toast('手机号不能为空');
            return;
          }
          if(!this.isPhoneNo(this.phone)){
            Toast('手机号格式不正确');
            return;
          }
          if(!!!this.number){
            Toast('验证码不能为空');
            return;
          }
          if(this.number.length!=6){
            Toast('验证码格式不正确');
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
          this.axios.post(this.url+'/api/Login/EditUserPwd',{phone:this.phone,code:this.number,pwd:this.password}).then((res)=>{
            if(res.data.Code==200){
              let instance = Toast(res.data.Data);
              setTimeout(() => {
                instance.close();
                this.$router.push({ path: '/login' })
              }, 1000);

            }else{
              Toast(res.data.Data);
            }
          }).catch((err)=>{
            Toast('网络请求超时');
          })
      },
      getVCode(){

          this.axios.get(this.url + '/api/Login/CreateVCode', {}).then((res) => {
           this.verifyCode=res.data.Data.imgUrl;
           this.vcToken=res.data.Data.randVCode;
           this.vcBool=true;
           this.fetchCodeMsg=true;
          }).catch((err)=>{
             Toast('网络请求超时');
          })

      },
      chkVCode(){
        if(!!!this.imgNumber){
          Toast('请输入图片中的字符');
          return;
        }
        if(this.imgNumber.length!=4){
          Toast('输入的字符长度不对');
          return;
        }
        let strs=this.verifyCode.split('/');
        let imgName=strs[strs.length-1];
        this.axios.post(this.url + '/api/Login/CheckVCode', {vCode:this.imgNumber,token:this.vcToken,imgName:imgName}).then((res) => {
           if(res.data.Code == 200){
              this.vcBool=false;
              this.fetchCodeMsg=false;
           }else{
             Toast(res.data.Data);
           }
          }).catch((err)=>{
             Toast('网络请求超时');
          })
      }

    }
  }
</script>

<style scoped>
.disabled_btn{
    pointer-events: none;
    color: gainsboro;
    border-color: gainsboro;
   }
  .cont{
    height: 100vh;
    position: relative;
    z-index: 999;
    overflow: hidden;
    background-color: #ffffff;
  }
  .box {
   font-size:16px;
  }

  .box .msg-login-box {
    padding: 0 10px 15px;
  }
  .box .msg-login-box .msg-login-btn {
    margin-top: 10px;
    text-align: center;
    color: #fff;
    padding:10px 0;
    border-radius: 5px;
   background-color:var(--color-tint);
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
    margin-right: 5px;
    width: 12x;
    height:12px;
  }
  .methods .m-msg a > img{
     width: 14px;
    height:14px;
  }
  .code{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .code .seconds ,
.code .seconding{
    height: 33px;
    width:88px; 
    text-align: center;
    line-height:33px;
    margin-top:10px;
    border-radius: 5px;
    }
  .code .seconds {
    color: #A9A9A9;
    border: 1px solid #d9d9d9;
    border-radius: 5px;
    pointer-events: none;
  }
  .code .seconding {
    color: var(--color-tint);
    border: 1px solid var(--color-tint);
  }
  .code .seconding > img{
    vertical-align: inherit;
    border-radius: 5px;
  }
  .code a{
    width: 7.5rem!important;
  }
</style>
