<template>
  <div class="select-datetime">
    <div class="datetime" @click="ShouPup">
      <mt-cell 
      :title="title"
       is-link
      >
        <img
          slot="icon"
          src="~assets/img/common/icon/shangmen.svg"
          width="24"
          height="24"
        />
        <span>
          {{this.datatime}}</span
        >
      </mt-cell>
    </div>
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
            <div class="">请选择志愿者上门回收时间</div>
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
      title:'预约志愿者上门回收',
      message: "",
      datatime:'',
      slots: [
        {
          flex: 1,
          values: ["2019-10-16", "2019-10-17", "2019-10-18"],
          className: "slot1",
          textAlign: "right"
        },
        {
          divider: true,
          content: "-",
          className: "slot2"
        },
        {
          flex: 1,
          values: ["12:00-13:00","13:00-14:00", "18:00-19:00","19:00-20:00"],
          className: "slot3",
          textAlign: "left"
        }
      ],
      popupVisible: false
    };
  },
  methods: {
    //点击显示
    ShouPup() {
      this.popupVisible = true;
    },
    //改变选项
    onValuesChange(picker, values) {
      this.message = values['0']+' '+values['1'];
      this.title='上门回收时间';
    },
    //点击确定
    determine(){
        this.popupVisible = !this.popupVisible;
        this.datatime=this.message ;
        this.$emit('selectdate',this.datatime)
    }
  }
};
</script>
<style scoped>
.select-datetime .picker {
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
.datetime {
  margin-top: 10px;
}
.show_year {
  text-align: left;
}
</style>