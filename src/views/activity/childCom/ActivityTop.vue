<template>
    <div class="activity-top">
        <div>
            <a href="/donate" class="">
                <img src="~assets/img/activity/liliang.png" alt="">
                <p>捐赠</p>
            </a>
            <a href="/myIntegral">
                <img src="~assets/img/activity/huibao.png" alt="">
                <p>积分商城</p>
            </a>
        </div>
        <separator></separator>
    </div>    
</template>
<script>
import Separator from 'components/content/separator/Separator';
export default {
    data(){
        return{
           
        }
    },
    components:{
        Separator
    }
}
</script>
<style scoped>
.activity-top>div{
    display: flex;
}
.activity-top a{
    flex: 1;
    font-size: 14px;

}
.activity-top p{
    margin-top: 8px;
}
.activity-top img{
    border-radius: 3px;
    box-shadow:0px 0px 10px #ccc ;
}
</style>