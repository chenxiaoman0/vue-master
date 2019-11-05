<template>
    <div class="gift-card">
        <img :src="giftItemData.imgpath" 
        alt="" 
        @load="Toimgload"
        >
        <p class="need">{{giftItemData.need}}能量</p>
        <p><span class="money">{{giftItemData.money}}</span>环保金</p>
        <mt-button  class="exchangebtn">立即兑换</mt-button> 
    </div>
</template>
<script>
export default {
    props:{
        giftItemData:{
            type:Object,
            default(){
                return{}
            }
        }
    },
    methods:{
        Toimgload(){
            console.log('--');
           this.$emit('imgload');
        }
    }
}
</script>
<style scoped>
.gift-card{
    margin-top: 5px;
    width: 45%;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 1px 1px 1px 1px #ccc;
    text-align: center;
}
.gift-card img{
    width: 90%;
    margin: 0 auto;
    border-radius: 5px;
}
.gift-card p{
    margin-top: 10px;
}
.gift-card .need{
    font-size: 12px;
    font-weight: 600;
}
.gift-card .money{
    color: rgb(255, 192, 57);
    margin-right: 3px;
}
.exchangebtn{
    width: 80px;
    height: 25px;
    font-size: 14px;
    background:#185A81;
    color: #fff;
    margin-top: 10px;
}
</style>