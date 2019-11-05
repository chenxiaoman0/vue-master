<template>
    <div class="donate-card">
        <div class="tips" v-on:click="getTips">
            <img src="~assets/img/common/question.svg" alt="">
        </div>
        <mt-popup
        v-model="popupVisible"
        popup-transition="popup-fade">
        <div class="tipsContent">
            <h5>我们的“多余”,他们的“需要”</h5>
            <p>物品我们接受捐赠和寄卖，寄卖后的钱将会五五分，等活动结束后寄卖物品的钱和卖不出去的物品将会返回给物主。所有义卖盈利的钱会全部用在韶西麻风病康复村中。 同一片天空下，还有许多这样的他们，没有一件像样的衣服……</p>
        </div>
        </mt-popup>
       <div class="card-main">
           <img :src="donateItemData.imgpath" alt="">
            <div class="card-text">
                <h5>{{donateItemData.title}}</h5>
                <p>免费上门回收</p>
                  <mt-button  class="donatebtn" @click.native="toDonatebForm">{{donateItemData.btntext}}</mt-button>
            </div>
       </div>
    </div>
</template>
<script>
import Swiper from 'components/common/swiper/Swiper'
export default {
    data(){
        return{
          popupVisible: false
        }
    },
    props:{
       donateItemData:{
           type:Object,
           default(){
               return{}
           }
       } 
    },
    methods:{
        toDonatebForm(){
            this.$router.push({
                path:'/donateForm'
            })
        },
        getTips(){
            this.popupVisible=true;
        }
    }
}
</script>
<style scoped>
.donate-card{
   width: 80%;
   height: 400px;
   border-radius: 8px;
   background: #fff;
   box-shadow: #ccc 0px 0px 30px;
   /* background: #ccc; */
   margin: 0 auto;
    position: relative;
}
.card-main{
background: #fff;
position: relative;
}
.card-main img{
    width: 235px;
    height: 160px;
    margin: 0 auto;
    margin-top: 40px;
    box-shadow:#ccc 0px 0px 40px ;
}
.donate-card .tips{
    position: absolute;
    width: 25px;
    height: 25px;
    right: 5px;
    top: 10px;
    z-index: 999;
}
.tipsContent{
 width: 280px;
 text-align: center;
 line-height: 16px;
  border-radius: 5px;
  background: #fff;
    padding: 15px;
}
.tipsContent h5{
    font-size: 16px;
    color: #5b872e;
}
.tipsContent p{
   margin-top: 10px;
   /* font-size: 16px; */
    line-height: 26px;
    text-indent: 2em;
}
.donate-card .tips img{
    /* width: 25px;
    height: 25px; */
    width: 100%;
    height: 100%;
}


.card-text  h5{
    color: #5b872e;
    font-size: 15px;
    margin-top: 30px;
}
.card-text p{
    color: #acacac;
    font-size: 13px;
    margin-top: 10px;
}
.card-text .donatebtn{
    width: 110px;
    height: 35px;
    border-radius: 10px;
    color: #5b872e;
    background: #c8dbb8;
    font-size: 14px;
    margin-top: 25px;
}
</style>