<template>
  <div class="donate-form">
    <nav-bar>
      <back @click.native="backTo" slot="navBarLeft"></back>
      <div slot="navBarcenter">填写信息</div>
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
          placeholder="请输入预约上门回收地址"
          v-model="address"
        ></mt-field>
        <mt-field
          label="备注："
          placeholder="请输入备注信息"
          v-model="decoration"
        ></mt-field>
      </div>
      <div class="classification">
        <h5 class="from-title">物品类型</h5>
        <div class="checklist">
          <div>
            <input type="checkbox" id="yifu" value="衣服" v-model="goods" />
            <label for="yifu">衣服</label>
          </div>
          <div>
            <input type="checkbox" id="shuji" v-model="goods" value="书籍" />
            <label for="shuji">书籍</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="riyongpin"
              value="日用品"
              v-model="goods"
            />
             <label for="riyongpin">日用品</label>
          </div>
          <div>
            <input type="checkbox" id="tiyu" value="体育器材" v-model="goods" />
            <label for="tiyu">体育器材</label>
          </div>
          <div>
            <input type="checkbox" id="otner" value="其它" v-model="goods" />
            <label for="otner">其它</label>
          </div>
        </div>
      </div>
      <div class="weight">
        <select-weight @selectweight="selectweight"></select-weight>
      </div>
      <div class="datetime">
        <select-date @selectdate="selectdate"></select-date>
      </div>
      <mt-button
        @click.native="handleClick"
        size="large"
        type="primary"
        class="btn"
        >预约上门</mt-button
      >
    </div>
  </div>
</template>
<script>
import NavBar from "components/common/navbar/NavBar";
import Back from "components/common/back/Back";

import Separator from "components/content/separator/Separator";
import SelectWeight from "./childCom/SelectWeight";
import SelectDate from "components/content/selectdate/SelectDate";

import { isPhoneNo } from "common/utils";
import { MessageBox, Toast } from "mint-ui";

import { addDonateInfo } from "network/donate";
export default {
  components: {
    NavBar,
    Back,
    Separator,
    SelectWeight,
    SelectDate
  },
  data() {
    return {
      imgpath: require("assets/img/common/icon/xuanzhong-active.svg"),
      imgactivepath: require("assets/img/common/icon/xuanzhong.svg"),
      username: "",
      phone: "",
      address: "",
      decoration: "",
      weight: "",
      datatime: "",
      active: "",
      goods: []
    };
  },
  watch: {
    checklist(val, oldval) {
      this.goods = val;
    }
  },
  methods: {
    //点击返回上一页面
    backTo() {
      this.$router.back();
    },
    selectdate(datetime) {
      this.datetime = datetime;
    },
    selectweight(weight) {
      this.weight = weight;
    },
    //点击提交
    handleClick() {
      if (
        !this.username ||
        !this.phone ||
        !this.address ||
        !this.goods ||
        !this.weight ||
        !this.datetime
      ) {
        MessageBox({
          title: "提示",
          message: "请填写完整信息",
          showCancelButton: true
        });
        return;
      }
      //验证手机号
      if (!isPhoneNo(this.phone)) {
        MessageBox({
          title: "提示",
          message: "手机号输入不正确",
          showCancelButton: true
        });
        return;
      }
      const DonationInfo = {};
      DonationInfo.username = this.username;
      DonationInfo.phone = this.phone;
      DonationInfo.address = this.address;
      DonationInfo.goods = this.goods.join(",");
      DonationInfo.decoration = this.decoration;
      DonationInfo.weight = this.weight;
      DonationInfo.datetime = this.datetime;
      DonationInfo.addtime = Math.round(new Date() / 1000);
      DonationInfo.complete = false;
      addDonateInfo(DonationInfo).then(res => {
        if (res == 1) {
          MessageBox({
            title: "预约成功",
            message: "感谢您对公益的支持！",
            showCancelButton: true
          });
          this.username = "";
          this.phone = "";
          this.address = "";
          this.good = "";
          this.decoration = "";
          this.weight = "";
          this.datetime = "";
        }else{
             MessageBox({
            title: "预约失败",
            message: "请重新提交",
            showCancelButton: true
          });
        }
      });
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