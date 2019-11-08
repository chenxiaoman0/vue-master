<template>
    <div class="progress-card" @click="Todetail">
        <div>
            <img 
            src="~assets/img/home/old.jpg" 
            alt=""
            @load="imgload"
            >
            <div class="top">
            <div class="card-main">
                <div class="card-text">
                    <h5>{{card.title}}</h5>
                    <p>
                        <span v-html="card.editorValue"></span>
                    </p>
                </div>
                <mt-button  class="intobtn">进入</mt-button> 
            </div>
            </div>
        </div> 
    </div>
</template>
<script>
import HomeProgress from 'components/common/homeprogress/HomeProgress'
export default {
    components:{
        HomeProgress
    },
    props:{
        card:{
            type:Object,
            default(){
                return {}
            }
        }
    },
    methods:{
        Todetail(){
            this.$router.push({
                path:'/dynamicDetail',
               query: { id:this.card.id }
            })
        },
        imgload(){
            console.log('--');
            this.$bus.$emit('imgload');
        }
    }
}
</script>
<style scoped>
.progress-card{
    width:50%;
    padding: 7px;
}
.progress-card>div{
 border-radius: 10px;
box-shadow: 1px 1px 1px 1px #eee;
}
.progress-card p{
    color: #666;
}
.progress-card img{
    width: 100%;
     border-radius: 10px;
}
.top{
    position: relative;
    height: 120px;
}
.top .card-main{
    width: 90%;
    height: 130px;
    border-radius: 10px;
    background: #fff;
    box-shadow:1px 1px 1px 1px #eee;
    z-index: 999;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: -25px;
    padding: 5px;
    overflow: hidden;
}
.card-text{
    margin-top: 3px;
    color: rgb(17, 16, 16);
}
.card-text h5{
    font-size: 14px;
    font-weight: 600;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.card-text p{
    display: block;
    font-size: 13px;
    text-align: left;
    margin-top: 5px;
    line-height: 17px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
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