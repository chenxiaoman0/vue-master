<template>
  <div class="cont">
    <nav-bar>
      <back slot="navBarLeft" @click.native="backTo"></back>
      <div slot="navBarcenter">注册</div>
    </nav-bar>
    <div class="box">
      <login-icon></login-icon>
      <div class="register-box">
        <mt-field
          placeholder="请输入手机号"
          type="tel"
          v-model="phone"
        ></mt-field>
        <div class="code">
          <mt-field placeholder="请输入验证码" type="text" v-model="imgNumber">
          </mt-field>
          <div class="seconding">
            <!-- <img :src="verifyCode" alt="看不清？点击更换" @click="getVCode"/> -->
            <img :src="verifyCode" alt="看不清？点击更换" @click="getVCode" />
          </div>
        </div>
        <div class="code">
          <mt-field placeholder="请输入验证码" type="number" v-model="code">
          </mt-field>
          <div
            :class="{
              disabled_btn: vcBool,
              seconds: fetchCodeMsg,
              seconding: !fetchCodeMsg
            }"
            @click="sendCode"
          >
            {{ timerCodeMsg }}
          </div>
        </div>
        <mt-field
          placeholder="请输入密码"
          type="password"
          v-model="password"
        ></mt-field>
        <div class="register-btn" @click="sendRegister">注册</div>
        <div class="tips">
          注册即视为同意
          <span class="tips lm-text-red" @click="open">《服务协议》</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
import NavBar from "components/common/navbar/NavBar";
import Back from "components/common/back/Back";

import LoginIcon from "./childCom/LogonIcon";

import { register } from "network/login";
import { isPhoneNo, timeOut } from "common/utils";

import { MessageBox } from "mint-ui";
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
      imgNumber: null,
      password: null,
      vcBool: true,
      vcToken: null,
      dialog: null,
      code: "",
      timerCodeMsg: "获取验证码",
      fetchCodeMsg: true,
      verifyCode:
        "http://630747.echu.net/tp5/public/index.php/api/login/show_captcha"
    };
  },
  watch: {
    imgNumber: function(value) {
      if (value.length >= 4) {
        this.chkVCode();
      }
    }
  },
  methods: {
    //点击返回上一页面
    backTo() {
      this.$router.back();
    },
    sendCode() {
      //发送短信验证码
      if (!!!this.phone) {
        Toast("手机号不能为空");
        return;
      }
      if (!isPhoneNo(this.phone)) {
        Toast("手机号格式不正确");
        return;
      }
      this.axios
        .post(this.url + "/api/Login/SendSMSCode", { phone: this.phone })
        .then(res => {
          timeOut(); //发送成功开始倒计时
          if (res.data.Code == 200) {
            Toast(res.data.Data);
          } else {
            Toast(res.data.Data);
          }
        })
        .catch(err => {
          Toast("网络请求超时");
        });
    },
    sendRegister() {
      //注册
      if (!!!this.phone) {
        Toast("手机号不能为空");
        return;
      }
      if (!isPhoneNo(this.phone)) {
        Toast("手机号格式不正确");
        return;
      }
      if (!!!this.imgNumber) {
        Toast("验证码不能为空");
        return;
      }
      if (this.imgNumber.length != 4) {
        Toast("验证码格式不正确");
        return;
      }
      if (!!!this.password) {
        Toast("密码不能为空");
        return;
      }
      if (this.password.length < 6 || this.password.length > 12) {
        Toast("密码的长度在6-12位之间");
        return;
      }
      if (!this.verifyPassword(this.password)) {
        Toast("密码的格式错误");
        return;
      }
      const user = {};
      user.phone = this.phone;
      user.password = this.password;
      user.code = this.imgNumber;
      register(user).then(res => {
          console.log(res);
        if (res == 1||res==2) {
          MessageBox({
            title: "提示",
            message: "登录成功！将前往登录页",
            showCancelButton: true
          });
          this.$router.push({
            path: "/login"
          });
        }else if(res==0){
            MessageBox({
            title: "提示",
            message: "该用户名已被注册",
            showCancelButton: true
          });
        }
      });
    },
    verifyPassword(pwd) {
      //密码验证
      let pattern = /^[A-Za-z_0-9]{6,16}$/;
      return pattern.test(pwd);
    },
    //点击刷新验证码
    getVCode() {
      this.verifyCode = this.verifyCode + "?time=" + Math.random();
    },
    open() {},
    chkVCode() {
      if (!!!this.imgNumber) {
        Toast("请输入图片中的字符");
        return;
      }
      if (this.imgNumber.length != 4) {
        Toast("输入的字符长度不对");
        return;
      }
      let strs = this.verifyCode.split("/");
      let imgName = strs[strs.length - 1];
      //   this.axios
      //     .post(this.url + "/api/Login/CheckVCode", {
      //       vCode: this.imgNumber,
      //       token: this.vcToken,
      //       imgName: imgName
      //     })
      //     .then(res => {
      //       if (res.data.Code == 200) {
      //         this.vcBool = false;
      //         this.fetchCodeMsg = false;
      //       } else {
      //         Toast(res.data.Data);
      //       }
      //     })
      //     .catch(err => {
      //       Toast("网络请求超时");
      //     });
    }
  }
};
</script>

<style scoped>
.disabled_btn {
  pointer-events: none;
  color: gainsboro;
  border-color: gainsboro;
}
.cont {
  height: 100vh;
  position: relative;
  z-index: 999;
  overflow: hidden;
  background-color: #ffffff;
}
.code {
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.code .seconds,
.code .seconding {
  height: 33px;
  width: 88px;
  text-align: center;
  line-height: 33px;
  margin-top: 10px;
  border-radius: 5px;
}
.code .seconding img {
  width: 100%;
  height: 100%;
}
.code .seconds {
  color: #a9a9a9;
  border: 1px solid #d9d9d9;
  border-radius: 5px;
  pointer-events: none;
}
.code .seconding {
  color: var(--color-tint);
  border: 1px solid var(--color-tint);
}
.code .seconding > img {
  vertical-align: inherit;
  border-radius: 5px;
}
/* .code a {
    width: 7.5rem !important;
  } */
.box {
  font-size: 14px;
}
.box .register-box {
  padding: 0 10px 15px;
}
.box .register {
  height: 7px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.box .register > img {
  margin: 0 auto;
  width: 5rem;
  height: 3.3rem;
}
.box .register-box .register-btn {
  margin-top: 10px;
  text-align: center;
  color: #fff;
  padding: 10px 0;
  border-radius: 5px;
  background-color: var(--color-tint);
}
.register-box .tips {
  margin-top: 5px;
}
</style>
