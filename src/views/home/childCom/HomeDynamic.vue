<template>
  <div class="dynamic">
    <home-header title="公益动态" @toMore="toMore"></home-header>
    <div class="dynamic-main">
      <news-card
        v-for="(dynamicitemdata, index) in dynamic"
        :key="index"
        :card="dynamicitemdata"
      >
      </news-card>
    </div>
    <separator></separator>
  </div>
</template>
<script>
import NewsCard from "components/content/newscard/NewsCard";
import Separator from "components/content/separator/Separator";

import HomeHeader from "./HomeHeader";
export default {
  components: {
    HomeHeader,
    NewsCard,
    Separator
  },
  props: {
    dynamic: {
      type: Array,
      default() {
        return [];
      }
    }
  },

  methods: {
    toMore() {
      this.$router.push({
        path: "/moreDynamic"
      });
    }
  }
};
</script>
<style scoped>
.dynamic {
  margin-top: 15px;
}
.dynamic-main {
  display: flex;
  flex-wrap: wrap;
  padding: 5px;
}
</style>