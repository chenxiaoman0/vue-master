<template>
  <tab-bar class="tabbar">
    <tab-bar-item link="/home">
      <img src="~assets/img/tabbar/home.svg" alt="" slot="item-icon">
      <img src="~assets/img/tabbar/home_active.svg" alt="" slot="item-active-icon">
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item link="/market">
      <img src="~assets/img/tabbar/market.svg" alt="" slot="item-icon">
      <img src="~assets/img/tabbar/market_active.svg" alt="" slot="item-active-icon">
      <div slot="item-text">跳蚤市场</div>
    </tab-bar-item>
    <tab-bar-item link="/activity">
      <img src="~assets/img/tabbar/activity.svg" alt="" slot="item-icon">
      <img src="~assets/img/tabbar/activity_active.svg" alt="" slot="item-active-icon">
      <div slot="item-text">公益</div>
    </tab-bar-item>
    <tab-bar-item link="/personal">
      <img src="~assets/img/tabbar/personal.svg" alt="" slot="item-icon">
      <img src="~assets/img/tabbar/personal_active.svg" alt="" slot="item-active-icon">
      <div slot="item-text">个人中心</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
  import TabBar from 'components/common/tabbar/TabBar'
  import TabBarItem from 'components/common/tabbar/TabBarItem'
  export default {
    name: "MainTabBar",
    components:{
      TabBar,
      TabBarItem
    }
  }
</script>

<style scoped>

</style>
