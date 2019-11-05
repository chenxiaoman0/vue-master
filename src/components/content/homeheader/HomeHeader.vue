<template>
        <div class="homeHeader">
            <div class="homeHeader-top clearfix">
                <div class="moduleTitle fl">
                    <span class="fl">{{title}}</span>
                </div>
                <a href="/donateInfo" class="fr homeHeader-more">more</a>
            </div>
        </div>
</template>
<script>
export default {
    props:['title']
}
</script>
<style scoped>
.moduleTitle{
    width: 180px;
    height: 33px;
    line-height: 33px;
    background: url('~assets/img/home/moduleTitle.png')no-repeat;
    background-position-x: -25px;
    font-size: 16px;
    color: #fff;
}
.moduleTitle span{
   margin-left:15px;
}
.homeHeader-more{
  line-height: 33px;
    margin-right: 10px;
}
</style>