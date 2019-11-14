<template>
    <div class="home-review">
        <home-header title="最新资讯" @toMore="toMore"></home-header>
        <div class="review-main" >
             <news-item 
                class="activity-item"
                v-for="(activityContent,index) in newsest"
                :key="index"
                :activityContent="activityContent"
            >
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
    props:{
        newsest:{
            type:Array,
            default(){
                return []
            }
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