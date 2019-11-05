<template>
  <div class="donate-book">
    <nav-bar>
      <back @click.native="backTo" slot="navBarLeft"></back>
      <div slot="navBarcenter">书籍捐</div>
    </nav-bar>
    <scroll class="scroll">
      <div class="donate-book-main">
        <donate-book-card
          v-for="(donateBookItem, index) in donateData"
          :key="index"
          :donateBookItem="donateBookItem"
        ></donate-book-card>
      </div>
    </scroll>
  </div>
</template>
<script>
import NavBar from "components/common/navbar/NavBar";
import Back from "components/common/back/Back";
import Scroll from "components/common/scroll/Scroll";

import DonateBookCard from "./childCom/DonateBookCard";
export default {
  components: {
    NavBar,
    Back,
    DonateBookCard,
    Scroll
  },
  data() {
    return {
      donateData: [
        {
          did: 1,
          imgpath: require("assets/img/home/old.jpg"),
          title: "红粉笔计划",
          describe: "把爱送给有梦的孩子",
          num: 15332
        },
        {
          did: 2,
          imgpath: require("assets/img/home/old.jpg"),
          title: "捐一份书香，留一份书情",
          describe: "书籍是人类进步的阶梯",
          num: 23555
        },
        {
          did: 3,
          imgpath: require("assets/img/home/old.jpg"),
          title: "捐一份书香，留一份书情",
          describe: "书籍是人类进步的阶梯",
          num: 23555
        },
        {
          did: 4,
          imgpath: require("assets/img/home/old.jpg"),
          title: "捐一份书香，留一份书情",
          describe: "书籍是人类进步的阶梯",
          num: 23555
        },
        {
          did: 3,
          imgpath: require("assets/img/home/old.jpg"),
          title: "捐一份书香，留一份书情",
          describe: "书籍是人类进步的阶梯",
          num: 23555
        },
        {
          did: 4,
          imgpath: require("assets/img/home/old.jpg"),
          title: "捐一份书香，留一份书情",
          describe: "书籍是人类进步的阶梯",
          num: 23555
        }
      ]
    };
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
.donate-book-main {
  display: flex;
  flex-wrap: wrap;
  /* background: rgb(245, 245, 245); */
}
.scroll {
  position: absolute;
  top: 44px;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>