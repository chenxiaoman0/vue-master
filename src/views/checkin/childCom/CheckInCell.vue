<template>
    <div class="check-in-cell">
        <div>
            <img src="~assets/img/checkin/cellicon.png" alt="">
        </div>
        <div>
            <h5>{{cellData.title}}</h5>
            <p>+{{cellData.num}}能量值</p>
        </div>
        <div>
        <mt-button 
        size="small"
        :class="{active:isActive?true:''}"
        @click.native="To"
        >去注册</mt-button>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        cellData:{
            type:Object,
            default(){
                return{

                }
            }
        }
    },
    data(){
        return{
            isActive:false
        }
    },
    methods:{
        To(){
            this.isActive=!this.isActive;
        }
    }
}
</script>
<style scoped>
.check-in-cell{
    width: 100%;
    padding-top: 15px;
    padding-bottom: 15px;
    display: flex;
    align-items: center;
    font-size: 14px;
    margin-top: 5px;
    background: #fff;
    border-radius: 10px;
}
.check-in-cell img{
    width: 50px;
}
 .check-in-cell div:nth-child(1){
     width: 70px;
 }
  .check-in-cell div:nth-child(2){
    width: 70%;
    text-align:left;
    padding-left: 5px;
    line-height: 20px;
 }
.check-in-cell div:nth-child(2) h5{
font-size: 15px;
margin-bottom: 5px;
}
.check-in-cell div:nth-child(2) p{
    color: rgb(150, 147, 147);
}
.check-in-cell div:nth-child(3){
     width: 100px;
 }
.check-in-cell div:nth-child(3) button{
      width: 70px;
      background:var(--color-tint);
      color: #fff;
 }
 .check-in-cell div:nth-child(3) .active{
     background: rgb(170, 170, 170);
 }
</style>