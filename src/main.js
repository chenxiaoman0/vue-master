import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index.js";
import VueLazyload from 'vue-lazyload'
var vm=new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
//图片懒加载
Vue.use(VueLazyload, {
    loading:require('./assets/img/default.png')
  })
   
//引入能量球
import Echarts from 'echarts'
Vue.prototype.$echarts =  Echarts;

//创建事件总线
Vue.prototype.$bus = new Vue()

//引入mint组件
import { Swipe, SwipeItem,Progress,Button,Field,Picker} from 'mint-ui';
import { Popup } from 'mint-ui';
import { Cell } from 'mint-ui';
import { Checklist } from 'mint-ui';
import { DatetimePicker } from 'mint-ui';
import { Search } from 'mint-ui';
import { Toast } from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Progress.name, Progress);
Vue.component(Button.name, Button);
Vue.component(Field.name, Field);
Vue.component(Picker.name, Picker);
Vue.component(Popup.name, Popup);
Vue.component(Cell.name, Cell);
Vue.component(Checklist.name, Checklist);
Vue.component(DatetimePicker.name, DatetimePicker);
Vue.component(Search.name, Search);
