<template>
  <div class="donate-form">
    <nav-bar>
      <back @click.native="backTo" slot="navBarLeft"></back>
      <div slot="navBarcenter">填写收货地址</div>
    </nav-bar>
    <div class="donate-form-child">
      <div class="user">
        <h5 class="from-title">个人信息</h5>
        <mt-field
          label="姓名："
          placeholder="请输入用户名"
          v-model="username"
        ></mt-field>
        <mt-field
          label="联系方式："
          placeholder="请输入联系方式"
          v-model="phone"
        ></mt-field>
        <mt-field
          label="地址："
          placeholder="请输入预约送货上门地址"
          v-model="address"
        ></mt-field>
        <mt-field
          label="备注："
          placeholder="请输入备注信息"
          v-model="decoration"
        ></mt-field>
      </div>
      <div class="datetime">
        <select-date @selectdate="selectdate"></select-date>
      </div>
      <mt-button
        @click.native="handleClick"
        size="large"
        type="primary"
        class="btn"
        >提交</mt-button
      >
    </div>
  </div>
</template>
<script>
import NavBar from "components/common/navbar/NavBar";
import Back from "components/common/back/Back";

import Separator from "components/content/separator/Separator";
import SelectDate from "components/content/selectdate/SelectDate";
import { isPhoneNo } from "common/utils";

import { buy } from "network/market";

export default {
  components: {
    NavBar,
    Back,
    Separator,
    SelectDate
  },
  data() {
    return {
      g_id: "",
      u_id: 1,
      username: "",
      phone: "",
      address: "",
      decoration: "",
      active: "",
      datetime: ""
    };
  },
  created() {
    this.g_id = this.$route.query.id;
  },
  methods: {
    //点击返回上一页面
    backTo() {
      this.$router.back();
    },
    //点击提交
    handleClick() {
      var data = {};
      data. g_id = this. g_id;
      data.u_id = this.u_id;
      data.username = this.username;
      data.phone = this.phone;
      data.address = this.address;
      data.decoration = this.decoration;
      data.datetime = this.datetime;
      buy(data).then((res)=>{
          if (res == 1) {
          MessageBox({
            title: "购买成功",
            message: "感谢您对公益的支持！",
            showCancelButton: true
          });
          this.username = "";
          this.phone = "";
          this.address = "";
          this.decoration = "";
          this.datatime = "";
        }
      })
    },
    selectdate(datetime) {
      this.datetime = datetime;
    }
  }
};
</script>
<style scoped>
.donate-form {
  height: 100vh;
  background: #f1f1f1;
  overflow: hidden;
  position: relative;
  z-index: 999;
}
.user {
  background: #fff;
}
.classification {
  background: #fff;
  margin-top: 10px;
}
.classification .checklist {
  display: flex;
  flex-wrap: wrap;
}
.checklist img {
  width: 25px;
  height: 25px;
  vertical-align: middle;
  margin-right: 3px;
}
.from-title {
  text-align: left;
  padding: 10px;
  font-size: 16px;
  font-weight: 500;
}
.classification .checklist > div {
  width: 33%;
  display: block;
  padding: 10px;
  padding-left: 20px;
  text-align: left;
  color: #666;
}

.weight,
.datetime {
  margin-top: 10px;
  text-align: left;
}
.btn {
  background: var(--color-tint);
  color: #fff;
  width: 80%;
  margin: 0 auto;
  margin-top: 15px;
}
.classification-checked {
  display: inline-block;
  box-sizing: border-box;
  width: 25px;
  height: 25px;
  border-radius: 50%;
}
.active {
  background: var(--color-tint);
}
.mint-cell-text {
  font-size: 15px;
}
</style>