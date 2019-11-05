<template>
    <div class="activity-tab-item" >
        <a href="">
            <img 
            :src="activityItemData.bannerpath"
            @load="imgLoad"
            alt="">
        </a>
        <div v-if="currentTabType=='review'">
             <news-item 
                class="activity-item"
                v-for="(activityContent,index) in activityItemData.list"
                :key="index"
                :activityContent="activityContent"
            >
            <div slot="right" class="right">
                 <img src="~assets/img/common/icon/bumen.svg" alt="">
                <span class="right">{{activityContent.organization}}</span>
            </div>
            </news-item>
        </div>
        <div v-else>
            <news-item 
                class="activity-item"
                v-for="(activityContent,index) in activityItemData.list"
                :key="index"
                :activityContent="activityContent"
            ></news-item>
        </div>
    </div>
</template>
<script>
import newsItem from 'components/content/newsitem/newsItem'
export default {
    components:{
        newsItem
    },
    props:{
        activityItemData:{
            type:Object,
            default(){
                return {}
            }
        },
        currentTabType:{
            type:String,
            default:''
        }
    },
    created(){
        console.log(this.activityItemData);
    },
    methods:{
        imgLoad(){
            this.$bus.$emit('imgLoad');
        }
    }
}
</script>
<style scoped>
.activity-tab-item a{
    display: block;
    margin-top: 5px;
}
.activity-tab-item img{
    width: 90%;
    border-radius: 5px;
}
</style>