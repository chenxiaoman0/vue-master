<template>
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
        <div
          v-for="(item, index) in classification"
          :key="index"
          @click="checked(index)"
        >
          <div
            class="classification-checked"
            :class="active == index ? 'active' : ''"
          >
            <img src="~assets/img/common/icon/xuanzhong.svg" alt="" />
          </div>
          <span>{{ item }}</span>
        </div>
      </div>
    </div>
    <div class="weight">
      <select-weight
      @selectweight="selectweight"
      ></select-weight>
    </div>
    <div class="datetime">
        <select-date
        @selectdate="selectdate"
        ></select-date>
    </div>
    <mt-button
      @click.native="handleClick"
      size="large"
      type="primary"
      class="btn"
      >预约上门</mt-button
    >
  </div>
</template>
<script>
import Separator from "components/content/separator/Separator";
import SelectWeight from "./SelectWeight";
import SelectDate from "./SelectDate";

import { isPhoneNo } from 'common/utils';

import { MessageBox } from 'mint-ui';
export default {
  components: {
    Separator,
    SelectWeight,
    SelectDate
  },
  data() {
    return {
      username: "",
      phone: "",
      address: "",
      decoration: "",
      good:'衣服',
      weight:'',
      datatime:'',
      active: "",
      classification: ["衣服", "书籍", "日用品", "体育器材", "其它"],
    };
  },
  methods: {
    checked(i) {
      this.active = i;
      console.log(i);
    },
    selectdate(datatime){
        this.datatime=datatime
    },
    selectweight(weight){
        this.weight=weight
    },
    //点击提交
    handleClick(){
        if(!this.username||!this.phone||!this.address||!this.good||!this.weight||!this.datatime){
            MessageBox({
            title: '提示',
            message: '请填写完整信息',
            showCancelButton: true
            });
            return;
        }
        //验证手机号
        // isPhoneNo(this.phone);
        console.log(isPhoneNo(this.phone))
        return;
        const DonationInfo={};
        DonationInfo.username=this.username;
        DonationInfo.phone=this.phone;
        DonationInfo.address=this.address;
        DonationInfo.good=this.good;
        DonationInfo.decoration=this.decoration;
        DonationInfo.weight=this.weight;
        DonationInfo.datatime=this.datatime;
        DonationInfo.addtime=Date.now();
        DonationInfo.complete=false;
        this.$store.commit('addDonation',DonationInfo);
    },
  }
};
</script>
<style scoped>
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
  width: 100%;
  height: 100%;
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
.datetime{
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
.mint-cell-text{
font-size: 15px;
}
</style>