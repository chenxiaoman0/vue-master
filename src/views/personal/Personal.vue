<template>
    <div class="personal">
        <nav-bar>
            <div slot="navBarcenter">个人中心</div>
       </nav-bar>
       <header>
           <div>
                <img src="~assets/img/profile/touxiang.jpg" alt="">
                <p>陈小曼</p>
           </div>
       </header>
       <div class="personal-main">
           <mt-cell 
           title="我的预约" 
           class="row"
           to="/myAppointment"
           >
            <span>></span>
            <img slot="icon" src="~assets/img/common/icon/naozhong.svg" width="24" height="24">
            </mt-cell>
            <mt-cell 
           title="我的订单" 
           class="row"
           to="/myAppointment"
           >
            <span>></span>
            <img slot="icon" src="~assets/img/common/icon/dingdan.svg" width="24" height="24">
            </mt-cell>
           <mt-cell 
           title="能量商城" 
            to="/myIntegral"
           class="row">
            <span>></span>
            <img slot="icon" src="~assets/img/common/icon/nengliang.svg" width="24" height="24">
            </mt-cell>
            <mt-cell title="意见反馈" class="row">
            <span>></span>
            <img slot="icon" src="~assets/img/common/icon/yijianfankui.svg" width="24" height="24">
            </mt-cell>
            <mt-cell title="联系客服" class="row">
            <span>></span>
            <img slot="icon" src="~assets/img/common/icon/lianxikefu.svg" width="24" height="24">
            </mt-cell>
       </div>
    </div>    
</template>
<script>
import NavBar from 'components/common/navbar/NavBar'
export default {
    components:{
        NavBar
    }
}
</script>
<style scoped>
.personal header{
    height: 200px;
     background:linear-gradient(var(--color-tint),#fff);
     border:none;
     display: flex;
    align-items: center;
    justify-content: center;
}
.personal header p{
    margin-top: 10px;
}
.personal header img{
    width: 90px;
    height: 90px;
    border-radius: 50%;
}
.row{
    border-bottom: 1px solid #ccc;
}
.personal-main{
    text-align: left;
}

</style>