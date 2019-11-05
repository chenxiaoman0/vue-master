<template>
  <div class="my-appointment">
    <nav-bar>
      <back @click.native="backTo" slot="navBarLeft"></back>
      <div slot="navBarcenter">我的预约</div>
    </nav-bar>
    <tab-control
      class="tab-control"
      :title="['待上门', '已完成']"
      @getTabControlIndex="itemClick"
    ></tab-control>
    <scroll class="scroll" ref="scroll">
      <appointment-item
        v-for="(donationInfo, index) in infos[currentTabType]"
        :key="index"
        :info="donationInfo"
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
      currentTabType: "incomplete"
    };
  },
  created() {
    this.$nextTick(()=>{
        this.$store.dispatch("showDonation");
    });
  },
//   mounted() {
//   },
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
      this.$store.state.donationInfos.forEach(item => {
        if (item.complete) {
          infos.complete.push(item);
        } else {
          infos.incomplete.push(item);
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