<template>
    <div class="home-review">
        <home-header title="最新资讯" @toMore="toMore"></home-header>
        <div class="review-main" >
             <news-item 
                class="activity-item"
                v-for="(activityContent,index) in reviewData"
                :key="index"
                :activityContent="activityContent"
            >
            <div slot="right" class="right">
                 <img src="~assets/img/common/icon/bumen.svg" alt="">
                <span class="right">
                    {{activityContent.organization}}
                </span>
            </div>
            </news-item>
        </div>
        <separator></separator>
    </div>
</template>
<script>
import HomeHeader from './HomeHeader'
import newsItem from 'components/content/newsitem/newsItem'
import Separator from 'components/content/separator/Separator'
export default {
    components:{
        HomeHeader,Separator,newsItem
    },
    data(){
        return {
           reviewData:[
            {nid:1,imgpath:require("assets/img/home/children.png"),title:"地球一小时高效行动ing,熊猫君喊你一起来站塑料！",datetime:'2019-10-10',organization:'青年志愿者协会'},
            {nid:2,imgpath:require("assets/img/home/children.png"),title:"地球一小时高效行动ing,熊猫君喊你一起来站塑料！",datetime:56541245698,organization:'青年志愿者协会'},
             {nid:3,imgpath:require("assets/img/home/children.png"),title:"地球一小时高效行动ing,熊猫君喊你一起来站塑料！",datetime:'2019-10-10',organization:'青年志愿者协会'},
              {nid:3,imgpath:require("assets/img/home/children.png"),title:"地球一小时高效行动ing,熊猫君喊你一起来站塑料！",datetime:'2019-10-10',organization:'青年志愿者协会'},
               {nid:3,imgpath:require("assets/img/home/children.png"),title:"地球一小时高效行动ing,熊猫君喊你一起来站塑料！",datetime:'2019-10-10',organization:'青年志愿者协会'}
           ]
        }
    },
    methods:{
        toMore(){
            this.$router.push({
                path:'/activity'
            })
        }
    }
}
</script>
<style scoped>
.home-review{
    margin-top: 15px;
}
</style>