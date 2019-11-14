<template>
    <div class="donate">
        <nav-bar>
        <back @click.native="backTo" slot="navBarLeft"></back>
         <div slot="navBarcenter">预约回收</div>
       </nav-bar>
       <donate-swiper class="donate-swiper"
       :donateData="donateData">
       </donate-swiper>
    </div>
</template>
<script>
import Back from 'components/common/back/Back'
import NavBar from 'components/common/navbar/NavBar'
import DonateSwiper from './childCom/DonateSwiper'
import DonateCard from './childCom/DonateCard'
export default {
    data(){
        return{
            donateData:[
                {did:1,name:'book',imgpath:require("assets/img/donate/cardimg.png"),title:'参与图书循环 共享低碳生活',iconpath:require('assets/img/common/icon/shuji.svg'),btntext:'书籍回收'},
                {did:2,name:'clothes',imgpath:require("assets/img/donate/cardimg.png"),iconpath:require('assets/img/common/icon/yifu.svg'),title:'旧衣零抛弃，环保旧风尚',btntext:'旧衣回收'},
                {did:3,name:'goods',imgpath:require("assets/img/donate/cardimg.png"),iconpath:require('assets/img/common/icon/goods.svg'),title:'让闲置回收价值',btntext:'闲置回收'}
            ],
            isshow:false
        }
    },
    components:{
        DonateSwiper, DonateCard,NavBar,Back
    },
    methods:{
    //点击返回上一页面
    backTo(){
        this.$router.back();
    },
    }
}
</script>
<style scoped>
.donate{
    position: relative;
    z-index: 999;
    height: 100vh;
    /* background: #fff; */
    overflow: hidden;
    background: #e6f8d3;
}
.donate-swiper{
    margin-top: 100px;
}
.tipsContent{
    width: 100%;
    height: 100vh;
    position: absolute;
    left: 0;
    top: 0;
    overflow: hidden;
    display: none;
    z-index: 9999;
    background: rgba(0, 0, 0, .7)
}
</style>