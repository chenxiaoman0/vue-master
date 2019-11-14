<template>
  <div class="home">
    <nav-bar>
      <div slot="navBarcenter">韶院公益之家</div>
    </nav-bar>
    <Scroll ref="scroll" :probeType="3" class="content">
      <swiper
        @imageLoad="imageLoad"
        :swiperData="swiperData"
        class="home-swiper"
      ></swiper>
      <div class="appointment">
        <app-item
          class="app-item"
          v-for="(appItemData, index) in appdata"
          :key="index"
          :appItemData="appItemData"
        >
        </app-item>
      </div>
      <div class="banner">
        <img src="~assets/img/home/banner.png" alt="" />
      </div>
      <home-dynamic :dynamic="dynamic"></home-dynamic>
      <home-review :newsest="newsest"></home-review>
    </Scroll>
  </div>
</template>
<script>
import NavBar from "components/common/navbar/NavBar";
import Swiper from "components/common/swiper/Swiper";
import Scroll from "components/common/scroll/Scroll";

import AppItem from "components/content/appItem/AppItem";
import Separator from "components/content/separator/Separator";

import HomeReview from "./childCom/HomeReview";
import HomeDynamic from "./childCom/HomeDynamic";

import { getNewsData } from "network/news";

//引入防抖
import { debounce } from "common/utils";
export default {
  components: {
    NavBar,
    Swiper,
    Scroll,
    AppItem,
    Separator,
    HomeDynamic,
    HomeReview
  },
  data() {
    return {
      appdata: [
        {
          path: require("assets/img/home/appointment/a1.png"),
          title: "预约上门",
          src: "donate"
        },
        {
          path: require("assets/img/home/appointment/a2.png"),
          title: "入门指南",
          src: "guide"
        },
        {
          path: require("assets/img/home/appointment/a3.png"),
          title: "签到",
          src: "checkin"
        },
        {
          path: require("assets/img/home/appointment/a4.png"),
          title: "客服中心",
          src: "DonateBook"
        }
      ],
      swiperData: [
        { img: require("assets/img/home/slide1.jpeg") },
        { img: require("assets/img/home/slide2.jpeg") },
        { img: require("assets/img/home/slide3.jpeg") }
      ],
      dynamic: [],
      newsest:[]
    };
  },
  created() {
    getNewsData("donation", 1).then(res => {
      this.dynamic = res;
    });
     getNewsData("newest", 1).then(res => {
      this.newsest = res;
    });
  },
  mounted() {
    //事件总线加防抖技术
    const refresh = debounce(this.$refs.scroll.refresh, 50);
    this.$bus.$on("imgLoad", () => {
      refresh();
    });
  },
  methods: {
    //时间监听方法
    imageLoad() {
      //监听图片加载完成刷新页面
      this.$refs.scroll.refresh();
    }
  }
};
</script>
<style scoped>
.content {
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
.banner img {
  width: 100%;
}
.appointment {
  width: 100%;
  display: flex;
  text-align: center;
}
.app-item {
  flex: 1;
}
.home-swiper {
  height: 180px;
}
</style>