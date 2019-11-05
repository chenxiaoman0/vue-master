<template>
    <div class="good-list">
        <goods-list-item :goodsitem="value" class="goods-list-item" v-for="(value,index) in goodData" :key="index"></goods-list-item>
    </div>
</template>
<script>
import GoodsListItem from './GoodsListItem'
export default {
    data(){
        return{

        }
    },
    props:{
        goodData:{
            type:Array,
            default(){
                return []
            }
        }
    },
    components:{
        GoodsListItem
    },
}
</script>
<style scoped>
  .good-list{
    display: flex;
    flex-wrap: wrap;
    /* justify-content: flex-start; */
    justify-content: space-between;
    padding-left:8px;
    padding-right:8px;
  }
</style>