<template>
  <div class="detail-bottom-bar">
    <div class="collection">
      <img src="~assets/img/common/collect.svg" alt="" />
      <span>收藏</span>
    </div>
    <div class="buy" @click="ToBuy">
      <span>我要了</span>
    </div>
  </div>
</template>
<script>
import { MessageBox, Toast } from "mint-ui";
export default {
  methods: {
    ToBuy() {
      MessageBox.confirm("购买成功后将有工作人员送货上门，确定购买?").then(
        action => {
          this.$emit('ToBuy');
        }
      );
    }
  }
};
</script>
<style scoped>
.detail-bottom-bar {
  width: 100%;
  height: 49px;
  line-height: 49px;
  position: relative;
  z-index: 1000;
  background: #fff;
  box-shadow: 1px -1px 1px #c6c6c6;
  display: flex;
}
.collection {
  width: 120px;
  border-right: 1px solid #ccc;
}
.collection img {
  width: 25px;
  height: 25px;
  margin-right: 15px;
  vertical-align: middle;
}
.buy {
  flex: 1;
  background: var(--color-tint);
  color: #fff;
}
</style>