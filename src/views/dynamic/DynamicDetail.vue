<template>
  <div class="dynamic-detail">
    <nav-bar>
      <back @click.native="backTo" slot="navBarLeft"></back>
      <div slot="navBarcenter">详情</div>
    </nav-bar>
    <scroll class="scroll" ref="scroll">
      <div class="detail">
        <h5 class="detail-title">{{ detail.title }}</h5>
        <div class="detail-dec">
          <span class="detail-dec-left">{{ detail.dec }}</span>
          <span>
            <img src="~assets/img/activity/liulan.svg" alt="" />
            {{ detail.number }}人浏览
          </span>
        </div>
        <div class="progress"></div>
        <div class="detail-content" v-html="detail.editorValue"></div>
      </div>
    </scroll>
    <dynamic-tabbar></dynamic-tabbar>
  </div>
</template>
<script>
import NavBar from "components/common/navbar/NavBar";
import Back from "components/common/back/Back";
import Scroll from "components/common/scroll/Scroll";
import Swiper from "components/common/swiper/Swiper";

import DynamicTabbar from "./childCom/DynamicTabbar";

import { getNewsDetail } from "network/news";
export default {
  name: "dynamicDetail",
  components: {
    NavBar,
    Back,
    Scroll,
    Swiper,
    DynamicTabbar
  },
  data() {
    return {
      detail: {}
    };
  },
  created() {
    getNewsDetail(this.$route.query.id).then(res => {
      this.detail = res;
      this.$nextTick(() => {
        this.$refs.scroll.refresh();
      });
    });
  },
  mounted() {
    this.$refs.scroll.refresh();
  },
  methods: {
    //点击返回上一页面
    backTo() {
      this.$router.back();
    }
  }
};
</script>
<style scoped>
.scroll {
  height: 100%;
  background: #fff;
  height: calc(100vh - 44px - 50px);
  overflow: hidden;
  position: relative;
  z-index: 999;
}
.detail {
  margin-top: 15px;
  padding: 5px;
}
.detail .detail-title {
  font-size: 17px;
  font-weight: 600;
}
.detail-dec {
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
  padding-left: 5px;
  padding-right: 5px;
}
.detail-dec-left {
  color: var(--color-tint);
}
.detail-dec img {
  width: 25px;
  height: 25px;
  vertical-align: middle;
}
.detail-content {
  text-align: left;
  text-indent: 2em;
  margin-top: 15px;
  line-height: 23px;
}
</style> 