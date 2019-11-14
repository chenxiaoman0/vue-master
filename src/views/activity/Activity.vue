<template>
  <div class="activity">
    <nav-bar>
      <div slot="navBarcenter">公益</div>
    </nav-bar>
    <tab-control
      class="tab-control-top tabcontroltop"
      v-show="isShowTabTop"
      :title="['最新资讯', '往期回顾', '环保知识', '推荐新闻']"
      @getTabControlIndex="itemClick"
      ref="tabcontrol1"
    >
    </tab-control>
    <scroll
      class="srcoll"
      ref="scroll"
      :probeType="3"
      @scrollPosition="scrollPosition"
    >
      <div class="search">
        <mt-search
          autofocus
          cancel-text="取消"
          placeholder="搜索"
          :result="filterResult"
          :show="false"
        >
        </mt-search>
      </div>
      <activity-top></activity-top>
      <activity-energy @imgLoad="imgLoad"></activity-energy>
      <div class="activity-tab">
        <tab-control
          class="tab-control"
          :title="['最新资讯', '往期回顾', '环保知识', '推荐新闻']"
          ref="tabcontrol2"
          @getTabControlIndex="itemClick"
        >
        </tab-control>
        <activity-tab-item
          :activityItemData="activityData[currentTabType].content"
          :currentTabType="currentTabType"
        >
        </activity-tab-item>
      </div>
    </scroll>
  </div>
</template>
<script>
import NavBar from "components/common/navbar/NavBar";
import Scroll from "components/common/scroll/Scroll";
import TabControl from "components/content/tabcontrol/TabControl";

import ActivityTabItem from "./childCom/ActivityTabItem";
import ActivityTop from "./childCom/ActivityTop";
import ActivityEnergy from "./childCom/ActivityEnergy";

import { getNewestData,getNewsData } from "network/news";
export default {
  components: {
    NavBar,
    ActivityTop,
    ActivityEnergy,
    Scroll,
    TabControl,
    ActivityTabItem
  },
  data() {
    return {
      isShowTabTop: false,
      defaultResult: [
        "Apple",
        "Banana",
        "Orange",
        "Durian",
        "Lemon",
      ],
      currentTabType: "newest",
      activityData: {
        newest: {
          page: 0,
          content: {
            bannerpath: require("assets/img/activity/tab/newest.png"),
            list: []
          }
        },
        review: { 
            page: 0,
             content: {
            bannerpath: require("assets/img/activity/tab/newest.png"),
            list: []
          }},
        knowledge: { page: 0, 
         content: {
            bannerpath: require("assets/img/activity/tab/newest.png"),
            list: []
          } },
        recommend: { page: 0,  
        content: {
            bannerpath: require("assets/img/activity/tab/newest.png"),
            list: []
          }}
      }
    };
  },
  computed: {
    //查找匹配搜索查询的数据
    filterResult() {
      return this.defaultResult.filter(value =>
        new RegExp(this.value, "i").test(value)
      );
    }
  },
  created() {
    this.getNewsData("newest",1);
    this.getNewsData("review", 1);
    this.getNewsData("knowledge", 1);
    this.getNewsData("recommend", 1);
  },
  mounted() {
    this.$bus.$on("imgLoad", () => {
      this.imgLoad();
    });
  },
  methods: {
    imgLoad() {
      this.$refs.scroll.refresh();
    },
    itemClick(i) {
      switch (i) {
        case 0: {
          this.currentTabType = "newest";
          break;
        }
        case 1: {
          this.currentTabType = "review";
          break;
        }
        case 2: {
          this.currentTabType = "knowledge";
          break;
        }
        case 3: {
          this.currentTabType = "recommend";
          break;
        }
      }
      this.$refs.tabcontrol1.currentIndex = i;
      this.$refs.tabcontrol2.currentIndex = i;
      this.$refs.scroll.refresh();
    },
    //请求数据方法
    getNewsData(type) {
      const page = this.activityData[type].page + 1;
      getNewsData(type, page).then(res => {
        this.activityData[type].content.list.push(...res);
        this.activityData[type].page += 1;
          this.$refs.scroll.refresh()
      });
    },
    //请求最新数据
    getNewestData(type,limit){
        getNewestData(type, limit).then(res => {
        this.activityData['newest'].content.list.push(...res);
        this.activityData['newest'].page += 1;
        this.$refs.scroll.refresh()
      });
    },
    //监听滚动显示顶部tabbar
    scrollPosition(position) {
      if (-position.y > 330) {
        this.isShowTabTop = true;
      } else {
        this.isShowTabTop = false;
      }
    }
  }
};
</script>
<style scoped>
.srcoll {
  overflow: hidden;
  height: calc(100vh - 44px - 49px);
  overflow: hidden;
}
.search {
  font-size: 16px;
  height: 50px;
}
.search .mint-searchbar {
  border-radius: 10px;
}
.tabcontroltop {
  background: #fff;
  position: absolute;
  width: 100%;
}
</style>