<template>
  <div class="appointment-item">
    <p>下单时间{{ addtime }}</p>
    <div class="appointment-content">
      <div class="row">
        <h5>{{ info.good||info.title }}</h5>
        <mt-button 
        v-if="info.complete==0"
        type="primary" 
        class="cencelbtn" 
        size="large"
          >取消预约</mt-button
        >
        <span v-if="info.complete==1">已完成</span>
        <span v-if="info.complete==2">已取消</span>
      </div>
      <div class="username">
        <img src="~assets/img/common/icon/personal.svg" alt="" />
        <span>{{ info.username }}</span>
      </div>
      <div class="address">
        <img src="~assets/img/common/icon/location.svg" alt="" />
        <span>{{ info.address }}</span>
      </div>
      <div class="phone">
        <img src="~assets/img/common/icon/shouji.svg" alt="" />
        <span>{{ info.phone }}</span>
      </div>
      <div class="row">
        <h5>服务时间</h5>
        <span>{{ info.datetime }}</span>
      </div>
      <div class="appointment-dec">
        {{ info.decoration }}
      </div>
    </div>
  </div>
</template>
<script>
import { formatDate } from "common/utils";
export default {
  props: {
    info: {
      type: Object,
      default() {
        return {};
      }
    },
    state: {
      type: String,
      default: "incomplete"
    }
  },
  computed: {
    addtime() {
    var phptime=this.info.addtime || this.info.orderaddtime
      const date = new Date(parseInt(phptime)*1000);
      return formatDate(date, "yyyy-MM-dd hh:mm");
    }
  }
};
</script>
<style scoped>
.appointment-item {
  background: #fff;
  margin-top: 10px;
  text-align: left;
  padding: 10px;
}
.appointment-content {
  padding: 10px;
}
.appointment-content h5 {
  font-size: 18px;
}
.appointment-content img {
  width: 20px;
  height: 20px;
  vertical-align: middle;
  margin-right: 3px;
}
.row {
  display: block;
  display: flex;
  justify-content: space-between;
  width: 100%;
  line-height: 30px;
  margin-top: 10px;
  align-content: space-between;
}
.row h5 {
  font-weight: 600;
  width: 80px;
}
.row span,
.row > div {
  text-align: right;
  flex: 1;
  color: var(--color-tint);
}
.username,
.address,
.phone,
.appointment-dec {
  margin-top: 10px;
}
.appointment-dec {
  background: #eee;
  height: 80px;
  padding: 10px;
  border-radius: 5px;
}
.cencelbtn {
  width: 70px;
  height: 30px;
  background:rgb(255, 116, 52);
  padding-left: 5px;
  padding-right: 5px;
  font-size: 12px;
}
</style>