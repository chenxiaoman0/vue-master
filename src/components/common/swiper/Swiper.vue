<template>
    <div class="swiper">
       <mt-swipe :auto="5000" class="swiper-wrap">
            <mt-swipe-item v-for="(item,index) in swiperData" :key="index">
               <img v-bind:src="item.img" alt="" @load="imageLoad"> 
            </mt-swipe-item>
        </mt-swipe>
    </div>    
</template>
<script>
export default {
    props:{
        swiperData:{
            type:Array,
            default(){
                return[]
            }
        }
    },
    methods:{
        getSwriperdata(){
            getSwriperData().then(res=>{
               console.log(res);
            })
        },
        imageLoad(){
        this.$emit('imageLoad')
      },
      //封装内部refresh()函数
      refresh(){
          this.scroll.refresh();
      }
    }
}
</script>
<style scoped>
.swiper-wrap img{
    width: 100%;
}
</style>