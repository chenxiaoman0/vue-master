<template>
    <div class="donate-swiper">
        <mt-swipe class="swiper-wrap"  :auto="0">
            <mt-swipe-item v-for="(donateItemData,index) in donateData" :key="index">
                <!-- <slot name="donateCard" :donateItemData="donateItemData"></slot> -->
                 <donate-card :donateItemData="donateItemData"></donate-card>
            </mt-swipe-item>
        </mt-swipe>
    </div>
</template>
<script>
import DonateCard from './DonateCard'
export default {
    data(){
        return{
          
        }
    },
    props:{
       donateData:{
           type:Array,
           default(){
               return[]
           }
       }  
    },
    components:{
        DonateCard
    }
}
</script>
<style scoped>
.swiper-wrap{
    height: 450px;
}
</style>