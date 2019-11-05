<template>
    <div class="my-integral">
         <nav-bar>
            <back @click.native="backTo" slot="navBarLeft"></back>
            <div slot="navBarcenter">我的能量</div>
        </nav-bar>
        <scroll class="scroll" ref="scroll">
            <header>
                <div class="integral-cicle">
                    <liquidfill
                    ></liquidfill>
                    <p>能量积分</p>
                </div>
            </header>
            <div class="banner">
                <img 
                src="~assets/img/profile/integral/banner.png" 
                alt=""
                @load="imgload"
                >
            </div>
            <div class="gift">
                    <h5>爱心礼物：</h5>
                    <div class="gift-content">
                        <gift-card 
                        v-for="(giftItemData,index) in giftData"
                        :key="index"
                        :giftItemData="giftItemData"
                        @imgload="imgload"
                        ></gift-card>
                    </div>
            </div>
        </scroll>
    </div>
</template>
<script>
import NavBar from 'components/common/navbar/NavBar'
import Back from 'components/common/back/Back'
import Scroll from 'components/common/scroll/Scroll'
import Liquidfill from 'components/common/liquidfill/Liquidfill'


import GiftCard from './childCom/GiftCard'
export default {
    components:{
        NavBar,Back,GiftCard,Scroll,Liquidfill
    },
    data(){
        return{
            giftData:[
                {imgpath:require('assets/img/profile/integral/item1.png'),need:200,money:1.00},
                {imgpath:require('assets/img/profile/integral/item2.png'),need:1200,money:5.00}, 
                {imgpath:require('assets/img/profile/integral/item3.png'),need:2500,money:10.00}, 
                {imgpath:require('assets/img/profile/integral/item4.png'),need:5200,money:20.00},
                {imgpath:require('assets/img/profile/integral/item3.png'),need:2500,money:10.00}, 
                {imgpath:require('assets/img/profile/integral/item4.png'),need:5200,money:20.00},        
                 ]
        }
    },

    methods:{
        backTo(){
            this.$router.back();
        },
        imgload(){
            // console.log(this.$refs.scroll)
            this.$refs.scroll.refresh()
        }
    }

}
</script>
<style scoped>
.my-integral header{
    height: 200px;
    background:linear-gradient(var(--color-tint),#fff);
    border:none;
    display: flex;
    align-items: center;
    justify-content: center;
}
.integral-cicle p{
    color: rgb(139, 137, 137);
    margin-top: -10px;
}
.scroll{
    /* height: calc(100vh - 44px - 49px); */
    position: relative;;
    height:calc(100vh - 44px); 
    /* top:44px; */
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
    z-index: 999;
    background: #fff;

}
.banner img{
    width: 90%;
    border-radius: 10px;
}
.gift{
    padding: 10px;
    text-align: left;
}
.gift h5{
    font-size: 16px;
}
.gift-content{
    display: flex;
    flex-wrap: wrap;
    margin-top: 15px;
    justify-content: space-around
}
</style>