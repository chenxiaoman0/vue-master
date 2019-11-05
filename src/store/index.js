import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

import { showDonateInfo } from "network/donate";
export default new Vuex.Store({
  state: {
    //   登录状态保存
    isLogin: false,
    //总的捐赠信息
    donationInfos: [
      {
        username: "陈小曼",
        address: "韶关学院西区秋枫C315",
        addtime: 1571224466714,
        datatime: "2019-10-16 18:00-20:00",
        decoration: "东西有点多",
        good: "衣服",
        phone: "13415638865",
        weight: "10kg-20kg",
        complete: true
      }
    ]
  },
  mutations: {
    pushDonation(state, payload) {
      state.donationInfos.push(payload);
    },
    readDonation(state, payload){
        state.donationInfos=payload;
    }
  },
  actions: {
    // //添加捐赠信息
    addDonation(context, payload) {
      return new Promise(resolve => {
        let res = addDonateInfo(payload);
        resolve(res);
      }).then(info => {
        if (info) {
          return new Promise(resolve => {
            resolve("预约成功");
          });
        }
      });
    },
    //显示捐赠信息
    showDonation(context) {
    const id=1;
      return new Promise(resolve => {
        let res=showDonateInfo(id)
        resolve(res);
      }).then(res => {
        if (res) {
        //有数据则显示
          context.commit("readDonation", res);
          return new Promise(resolve => {
            resolve(res);
          });
        }
      });
    }
  }
});
