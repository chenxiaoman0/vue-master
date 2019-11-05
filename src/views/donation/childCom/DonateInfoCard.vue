<template>
    <div class="donate-book-card">
        <div class="card-main">
        <img :src="info.imgpath" alt="">
        <div class="card-text">
            <h5>{{info.title}}</h5>
            <p>{{info.describe}}</p>
            <p class="donatenum">已有<span>{{info.num}}人</span>捐助</p>
            <mt-button  class="donatebtn">我要捐赠</mt-button>
        </div>
        </div>
    </div>
</template>
<script>

export default {
    props:{
        info:{
            type:Object,
                default(){
                    return{}
                }
        }
    }
}
</script>
<style scoped>
.donate-book-card{
    width: 50%;
    padding: 5px;
    margin-top: 10px;
}
.card-main{
  background: #fff;
  border-radius: 7px;
  box-shadow: 1px 1px 1px 1px #eee;
}
.card-main img{
width: 100%;
margin: 0 auto;
  border-radius: 7px;
}
.card-text{
    height: 110px;
    padding: 10px;
    line-height: 16px;
}
.card-text h5{
    font-size: 14px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-weight: 600;
}
.card-text p{
    font-size: 12px;
     overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin-top: 5px;
}
.card-text .donatenum{
    color: #666;
}
.card-text p span{
    color: rgb(250, 160, 160);
}
.card-text .donatebtn{
    width: 75px;
    height: 25px;
    line-height: 25px;
    font-size: 12px;
    margin-top: 5px;
    color: #fff;
    /* background: #5dd359; */
    background: #6bd0b2;
     /* background: #7cde79;  */
}
</style>