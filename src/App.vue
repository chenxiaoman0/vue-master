<template>
  <div id="app">
    <main-tab-bar></main-tab-bar>
    <!-- 需要在组件内设置name属性 进行匹配 -->
    <keep-alive exclude="goodDetail,dynamicDetail">
        <router-view></router-view>
    </keep-alive>
    </div>
</template>
<script>
import MainTabBar from 'components/content/tabbar/MainTabBar'
export default {
    name:'app',
    data(){
        return{
            
        }
    },
    components:{
           MainTabBar
    },
    methods:{
    }
}
</script>
<style scoped>
@import 'assets/css/base.css';
/* 主色调 62C989*/
#app{
    font-family: sans-serif,Arial,'Avenir', Helvetica;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: rgb(36, 34, 34);
}
</style>

