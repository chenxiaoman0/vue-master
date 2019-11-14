<template>
  <div class="good-detail">
    <nav-bar class="nav-bar">
      <back slot="navBarLeft" @click.native="backTo"></back>
      <div slot="navBarcenter">商品详情</div>
    </nav-bar>
    <scroll class="scroll" ref="scroll">
      <div class="good-img">
        <img
          v-if="goodsData.imgpath"
          :src="goodsData.imgpath[0]"
          alt=""
          class=""
        />
      </div>
      <div class="good-info">
        <h5>{{ goodsData.title }}</h5>
        <p class="good-text">{{ goodsData.dec }}</p>
        <div class="good-info-dec">
          <span>{{ goodsData.degree }}成新</span>
          <span>{{ getName(goodsData.c_name) }}</span>
        </div>
        <p class="price">
          <span>￥{{ goodsData.price }}</span>
        </p>
      </div>
      <div class="good-tips">
        <p>
          确认购买会有工作人员上门进行交易，确认购买后不可更改，任意取消会扣去能量值。您的购买金额将全额捐给公益平台，感谢您对公益的支持！
        </p>
      </div>
      <separator></separator>
      <div class="good-details">
        <img
          v-for="(item, index) in goodsData['imgpath']"
          v-bind:key="index"
          :src="item"
          @load="imgload"
          alt=""
        />
      </div>
    </scroll>
    <detail-bottom-bar @ToBuy="ToBuy"></detail-bottom-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import Scroll from "components/common/scroll/Scroll";
import Swiper from "components/common/swiper/Swiper";
import back from "components/common/back/Back";

import Separator from "components/content/separator/Separator";
import DetailBottomBar from "./childComs/DetailBottomBar";

import { backToMixin } from "common/mixin";

//引入请求数据方法
import { getDetail } from "network/market";
export default {
  name: "goodDetail",
  components: {
    NavBar,
    Scroll,
    back,
    Swiper,
    Separator,
    DetailBottomBar
  },
  mixins: [backToMixin],
  data() {
    return {
      swiperData: [
        { img: require("assets/img/market/goods/1.jpg") },
        { img: require("assets/img/market/goods/2.jpg") },
        { img: require("assets/img/market/goods/3.jpg") }
      ],
      goodsData: {}
    };
  },
  created() {
    getDetail(this.$route.query.id).then(res => {
     this.goodsData=res;
    });
  },
  methods: {
    imgload() {
      this.$refs.scroll.refresh();
    },
    backTo() {
      this.$router.back();
    },
    getName(name) {
      switch (name) {
        case "book":
          return "书籍";
          break;
        case "daily":
          return "日常用品";
          break;
        case "equipment":
          return "体育器材";
          break;
        case "other":
          return "其它";
          break;
      }
    },
    ToBuy(){
        console.log(this.goodsData.c_id);
        this.$router.push({
            path:'/buy',
            query: { id:this.goodsData.c_id }
        })
    }
  }
};
</script>
<style scoped>
.scroll {
  height: calc(100vh - 44px - 49px);
  background: #fff;
  position: relative;
  overflow: hidden;
  z-index: 999;
}
.good-img {
  height: 300px;
  overflow: hidden;
}
.good-img img {
  width: 100%;
}
.good-info {
  text-align: left;
  padding: 10px;
}
.good-tips {
  background: rgb(243, 241, 241);
  font-size: 14px;
  text-align: left;
  padding: 10px;
  color: rgb(155, 155, 155);
}
.good-info h5 {
  font-size: 16px;
  overflow: hidden;
  margin-top: 5px;
}
.good-text {
  margin-top: 15px;
}
.good-info-dec {
  margin-top: 12px;
}
.good-info-dec span {
  padding: 5px 15px;
  border-radius: 10px;
  margin-right: 5px;
  font-size: 13px;
  color: #fff;
}
.good-info-dec span:nth-child(1) {
  background: rgb(255, 181, 85);
}
.good-info-dec span:nth-child(2) {
  background: rgb(67, 142, 255);
}
.good-info .price {
  margin-top: 15px;
  color: #5b872e;
  font-size: 19px;
}
.good-details img {
  width: 100%;
}
</style>