<template>
  <div id="tabBar" class="ignore">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "TabBar"
  }
</script>

<style scoped>
  #tabBar {
    height: 49px;
    width: 100%;
    overflow: hidden;
    background-color: #f6f6f6;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    -webkit-box-shadow: 0px -2px 2px rgba(100,100,100,0.2);
    -moz-box-shadow: 0px -2px 2px rgba(100,100,100,0.2);
    box-shadow: 0px -2px 2px rgba(100,100,100,0.2);
    text-align: center;
    z-index: 999;
  }
</style>
