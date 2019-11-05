<template>
  <div class="select-weight">
    <div class="weight" @click="ShouPup">
      <mt-cell title="物品重量" is-link>
        <span>{{ this.weight}}</span>
      </mt-cell>
    </div>
    <!-- 点击弹出选择重量 -->
    <mt-popup
      v-model="popupVisible"
      popup-transition="popup-fade"
      closeOnClickModal="true"
      position="bottom"
    >
      <mt-picker :slots="slots" @change="onValuesChange" showToolbar>
        <div class="picker-toolbar-title">
          <div class="usi-btn-cancel" @click="popupVisible = !popupVisible">
            取消
          </div>
          <div class="">请选择物品重量</div>
          <div class="usi-btn-sure" @click="determine">
            确定
          </div>
        </div>
      </mt-picker>
    </mt-popup>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showToolbar: true,
      message: "",
      slots: [
        {
          values: ["小于5kg(暂不上门收)", "5kg-10kg", "10kg-20kg", "大于20kg"]
        }
      ],
      popupVisible: false,
      weight:'请选择物品重量'
    };
  },
  methods: {
    //点击显示
    ShouPup() {
      this.popupVisible = true;
    },
    //改变选项
    onValuesChange(picker, values) {
      this.message = values[0];
      if (values[0] > values[1]) {
        picker.setSlotValue(1, values[0]);
      }
    },
    determine(){
        this.popupVisible = !this.popupVisible;
        this.weight=this.message ;
        this.$emit('selectweight',this.weight)
    }
  }
};
</script>
<style scoped>
.select-weight .picker {
  width: 100vw;
}
.picker-toolbar-title {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  height: 40px;
  line-height: 40px;
  font-size: 16px;
}
.usi-btn-cancel,
.usi-btn-sure {
  color: var(--color-tint);
}
</style>