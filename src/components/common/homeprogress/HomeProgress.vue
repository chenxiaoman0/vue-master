<template>
    <div class="home-progress">
           <mt-progress :value="progressValue" class="progress" :bar-height="6">
            <div slot="start">进度</div>
            <div slot="end">{{progressValue}}%</div>
        </mt-progress>
    </div>
</template>
<script>
export default {
    props:{
        progressValue:{
            type:Number,
            default:0
        }
    }
}
</script>
<style scoped>
.home-progress{
    height: 30px;
    line-height: 30px;
}
.progress{
    top: 50%;
    transform: translateY(-50%);

}
.progress div{
    font-size: 12px;
    padding-left: 3px;
    padding-right: 3px;
}
.mt-progress-content{
    border-radius: 5px;
}
/* .mt-progress-content .mt-progress-progress{
    background-color:var(--color-tint);
    border-radius: 2px;
} */
</style>