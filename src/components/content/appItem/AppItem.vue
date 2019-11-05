<template>
    <div class="app-item" @click="Topage">
         <a href="#">
            <img :src="appItemData.path" alt="" class="item-img">
         </a>
       <span>{{appItemData.title}}</span>
    </div>
</template>
<script>
export default {
    data(){
        return{

        }
    },
    props:{
        appItemData:{
           type: Object,
            default() {
            return {}
            }
        }
    },
    methods:{
        Topage(){
            this.$router.push(this.appItemData.src)
        }
    }

}
</script>
<style scoped>
.app-item{
    margin-top:25px;
    margin-bottom: 15px;
}
.app-item a{
    display: block;
}
.item-img{
    width: 50px;
    height: 50px;
}
</style>