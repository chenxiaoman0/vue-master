<template>
  <div class="my-appointment">
    <nav-bar>
      <back @click.native="backTo" slot="navBarLeft"></back>
      <div slot="navBarcenter">我的订单</div>
    </nav-bar>
    <tab-control
      class="tab-control"
      :title="['未完成订单', '已完成订单']"
      @getTabControlIndex="itemClick"
    ></tab-control>
    <scroll class="scroll" ref="scroll">
      <appointment-item
        v-for="item in infos[currentTabType]"
        :key="item.id"
        :info="item"
        :state="currentTabType"
      ></appointment-item>
    </scroll>
  </div>
</template>
<script>
import NavBar from "components/common/navbar/NavBar";
import Back from "components/common/back/Back";
import TabControl from "components/content/tabcontrol/TabControl";
import Scroll from "components/common/scroll/Scroll";

import AppointmentItem from "./childCom/AppointmentItem";

import { getOrderList } from "network/market";
export default {
  components: {
    NavBar,
    Back,
    TabControl,
    Scroll,
    AppointmentItem
  },
  data() {
    return {
      currentTabType: "incomplete",
      orderList: []
    };
  },
  created() {
    this.$nextTick(() => {
      getOrderList(1).then(res => {
        this.orderList = res;
      });
    });
  },
  activated() {
    this.$refs.scroll.refresh();
  },
  methods: {
    backTo() {
      this.$router.back();
    },
    itemClick(i) {
      switch (i) {
        case 0: {
          this.currentTabType = "incomplete";
          break;
        }
        case 1: {
          this.currentTabType = "complete";
          break;
        }
      }
      //bug
      this.$refs.scroll.refresh();
    }
  },
  computed: {
    infos() {
      const infos = { complete: [], incomplete: [] };
      this.orderList.forEach(item => {
        if (item.complete==0) {
          infos.incomplete.push(item);
        } else {
          infos.complete.push(item);
        }
      });
      return infos;
    }
  }
};
</script>
<style scoped>
.scroll {
  height: calc(100vh - 44px - 47px - 41px);
  overflow: hidden;
  background: #eee;
}
</style>