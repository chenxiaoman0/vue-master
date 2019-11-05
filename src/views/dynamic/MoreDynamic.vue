<template>
    <div class="donate-info">
        <nav-bar>
            <back @click.native="backTo" slot="navBarLeft"></back>
            <div slot="navBarcenter">公益动态</div>
       </nav-bar>
       <scroll class="scroll">
            <div class="popular-main" >
                <news-card v-for="(dynamicitemdata,index) in dynamicdata" :key="index" :card="dynamicitemdata" >
                </news-card>
            </div>
       </scroll>
    </div>
</template>
<script>
import NavBar from 'components/common/navbar/NavBar'
import Back from 'components/common/back/Back'
import Scroll from 'components/common/scroll/Scroll'

import NewsCard from 'components/content/newscard/NewsCard'
export default {
    components:{
        NavBar,Back,NewsCard,Scroll
    },
    data(){
        return{
            dynamicdata:[
               {imgpath:require("assets/img/home/dynamic/dynamic1.jpg"),title:"山区儿童读书计划",content:"用微薄的力量，捐给山区书本，让他们,用微薄的力量，捐给山区书本，让他们",progressValue:32},
                {imgpath:require('assets/img/home/dynamic/dynamic2.jpg'),title:'罕见的歌声与梦想',content:"他们想拥有舞台，我想唱歌用微薄的力量，捐给山区书本，让他们,用微薄的力量，捐给山区书本，让他们",progressValue:80},
                {imgpath:require('assets/img/home/dynamic/dynamic3.jpg'),title:'罕见的歌声与梦想',content:"他们想拥有舞台，我想唱歌用微薄的力量，捐给山区书本，让他们,用微薄的力量，捐给山区书本，让他们",progressValue:10},
                {imgpath:require('assets/img/home/dynamic/dynamic3.jpg'),title:'罕见的歌声与梦想',content:"他们想拥有舞台，我想唱歌用微薄的力量，捐给山区书本，让他们,用微薄的力量，捐给山区书本，让他们",progressValue:60}
           ] 
        }
    },
    methods:{
        //点击返回上一页面
        backTo(){
            this.$router.back();
        }
    }
}
</script>
<style scoped>
.popular-main{
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    /* margin-top: 10px; */
    padding-top: 10px;
}
.scroll{
    position: absolute;
    height: 100vh;
    top: 44px;
    left: 0;
    right: 0;
    overflow: hidden;
    background: #fff;
    z-index: 999;
}
</style>