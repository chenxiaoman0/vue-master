<template>
    <div class="dunamic-tabbar">
        <div class="row">
            <span><img src="~assets/img/common/icon/dianzan.svg" alt=""></span>
            <span>助力</span>
        </div>
        <div class="row">
            <span><img src="~assets/img/common/icon/juanzeng.svg" alt=""></span>
            <span>我要捐赠</span>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.dunamic-tabbar{
    height: 50px;
    line-height: 50px;
    background: #e6f8d3;
    position: relative;
    bottom: 0;
    z-index: 1000;
    display: flex;
    color: #5b872e;
}
.row{
    flex: 1;
}
.row img{
    width: 30px;
    height: 30px;
    vertical-align: middle;
}
</style>