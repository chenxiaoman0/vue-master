<template>
    <div class="popular-item">
        <div>
            <div class="picture">
                <img 
                :src="popularitemdata.imgpath" 
                @load="imgload"
                alt="">
            </div>
            <div class="popular-describe">
                <h5>{{popularitemdata.title}}</h5>
                <div class="describe-content">{{popularitemdata.content}}</div>
            <mt-button  class="intobtn">进入</mt-button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    components:{
      
    },
    props:{
        popularitemdata:{
            type:Object,
            default(){
                return {}
            }
        }
    },
    methods:{
        imgload(){
            thsi.$bus.$emit('imgload');
        }
    }
}
</script>
<style scoped>
.popular-item{
    width: 50%;
    display:inline-block; 
    padding: 7px;
}
.popular-item>div{
    padding: 10px;
    border-radius: 10px;
    box-shadow: 1px 1px 1px 1px #ccc;
    margin-top: 5px;
    margin-bottom: 5px;
}
.picture img{
    width: 60px;
    height: 60px;
    border-radius: 50%;
}
.popular-describe{
    padding: 8px;
}
.popular-describe h5{
    font-size: 15px;
    font-weight: 600;
    margin-bottom: 5px;
    padding-left: 5px;
    padding-right: 5px;
}
.popular-describe .describe-content{
    font-size: 13px;
    line-height: 20px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 5;
    overflow: hidden;
}
.intobtn{
    width: 80px;
    height: 25px;
    font-size: 14px;
    background:#185A81;
    color: #fff;
    margin-top: 10px;
}
</style>