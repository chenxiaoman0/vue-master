<template>
    <div class="ActivityItem">
        <div class="item-wrap">
          <div class="left item-img">
              <img :src="img" alt="">
          </div>
          <div class="right item-main">
              <h5 class="title">读书无用？但对于有些人来说，那是通往未来的希望</h5>
              <div class="bottom">
                  <div class="datetime left">
                        <img src="~/assets/img/activity/shijian.svg" alt="">
                        <span>10-13</span>
                  </div>
                    <div class="pageview right">
                        <img src="~/assets/img/activity/liulan.svg" alt="">
                        <span>320人浏览</span>
                    </div>
              </div>
          </div>
        </div>
    </div>    
</template>
<script>

export default {
   data(){
       return {
           img:require("assets/img/home/slide1.jpeg")
       }
   }
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
 width: 150px;
}
.item-wrap .item-img img{
 width: 150px;
 height: 100px;
 border-radius: 10px;
}
.item-wrap  .item-main{
    margin-left: 10px;
    position: relative;
}
.item-wrap .right .title{
    flex: 1;
    font-weight:500;
    font-size: 16px;
    line-height: 20px;
    color: #000;
    padding-top: 5px;
}
.datetime,
.pageview{
font-size: 13px;
}
.datetime{
    position: absolute;
    left: 0;
    bottom: 0;
}
.pageview{
    position: absolute;
    right: 0;
    bottom: 0;
}
.datetime img,
.pageview img{
    height: 18px;
    vertical-align: middle;
    margin-right: 5px;
}
</style>