<template>
    <div class="ActivityItem" @click="Todetail">
        <div class="item-wrap">
          <div class="left item-img">
              <img src="~assets/img/home/old.jpg" alt="">
          </div>
          <div class="right item-main">
              <h5 class="title" v-text="activityContent.title"></h5>
              <div class="bottom">
                <div class="datetime left">
                    <img src="~assets/img/activity/shijian.svg" alt="">
                    <span>{{activityContent.addtime}}</span>
                </div>
                <slot name="right">
                    <div class="pageview right">
                        <img src="~assets/img/activity/liulan.svg" alt="">
                        <span>{{activityContent.number}}人浏览</span>
                    </div>
                </slot>
              </div>
          </div>
        </div>
    </div>    
</template>
<script>
import formatDate from 'common/utils'
export default {
   data(){
       return {
           img:require("assets/img/home/slide1.jpeg")
       }
   },
   props:{
       activityContent:{
           type:Object,
           default(){
               return{}
           }
       }
   },
   methods:{
       Todetail(){
           this.$router.push({
               path:'/dynamicDetail',
               query: { id:this.activityContent.id }
           })
       }
   },
}
</script>
<style scoped>
.item-wrap{
    width: 100%;
    height: 130px;
    background: #fff;
    padding: 10px;
    padding-top: 15px;
    padding-bottom: 15px;
    display: flex;
    border-bottom: 1px solid #eee;
}
.item-wrap .item-img{
 width: 180px;
}
.item-wrap .item-img img{
 padding-top: 5px;
  width: 130px;
 height: 100px;
 overflow: hidden;
 border-radius: 10px;
 position: relative;
 top: 50%;
 transform: translateY(-50%);
}
.item-wrap  .item-main{
    width: 100%;
    margin-left: 10px;
    margin-right: 10px;
    position: relative;
    
}
.item-wrap .right .title{
    font-weight:600;
    padding-top: 5px;
     font-size: 14px;
    line-height:18px;
    text-align: left;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
}
.bottom{
    padding-bottom: 5px;
}
.bottom>div{
font-size: 12px;
position: absolute;
}
.bottom .right{
    /* position: absolute; */
    bottom: 0;
    right: 0;
}
.bottom .left{
    /* position: absolute; */
    left: 0;
    bottom: 0;
}
.bottom .right img{
height:16px;
}
.bottom .left img{
    height: 13px;
    margin-right: 3px;
}
.bottom img{
    vertical-align: middle;
}
</style>