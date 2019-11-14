<template>
    <div class="check-in">
        <nav-bar class="nav-bar">
            <back @click.native="backTo" slot="navBarLeft"></back>
            <div slot="navBarcenter">签到</div>
       </nav-bar>
       <div class="check-content">
            <header>
                <p>当前拥有</p>
                <!-- <div class="current">
                    当前拥有
                </div> -->
                <div class="header-left">
                    <p><span>220</span>能量</p>
                </div>
                <div class="header-center">
                    <span>明细</span>
                </div>
                <div class="header-right">
                    <span>每日签到+5</span>
                </div>
            </header>
            <div class="check-main">
                <div class="banner">
                    <a href="">
                     <img src="~assets/img/checkin/banner.png" alt="">
                    </a>
                </div>
                <div class="check-main-cell">
                    <check-in-cell
                    v-for="(cellData,index) in cellsData"
                    :key="index"
                    :cellData="cellData"
                    ></check-in-cell>
                </div>
            </div>
       </div>
    </div>
</template>
<script>
import NavBar from 'components/common/navbar/NavBar'

import CheckInCell from './childCom/CheckInCell'
import {backToMixin} from '@/common/mixin'
export default {
    components:{
        NavBar,CheckInCell
    },
    data(){
        return{
            cellsData:[
                {title:'新用户注册',num:50,toName:'已注册',toPath:''},
                {title:'每日首次登录',num:10,toName:'已登录',toPath:''},
                {title:'捐赠物资',num:50,toName:'去捐赠',toPath:''},
                {title:'购买商品',num:80,toName:'去购买',toPath:''},
                {title:'浏览文章',num:2,toName:'去浏览',toPath:''}
            ]
        }
    },
    mixins: [backToMixin],
}
</script>
<style scoped>
.check-in .check-content{
    height: calc(100vh - 44px);
    position: relative;
    z-index: 999;
    background: rgb(230, 228, 228);
}
.check-in header{
    height: 100px;
    background: var(--color-tint);
    padding: 10px;
    text-align:left;
    display: flex;
    flex-wrap: wrap;
}
.check-in header>p{
    width: 100%;
}
.check-in header div{
flex: 1;
font-size: 14px;
}
.header-left span{
    font-size: 16px;
    font-weight: 50;
    color: rgb(255, 104, 4);
    margin-right: 8px;
}
.header-right span,
.header-center span
{
    padding: 3px 10px;
    border-radius: 10px;
}
.header-center span{
    border:1px solid #eee;
}
.header-right span{
    background: rgb(170, 170, 170);
    color: #fff;
    text-align: right;
}
.check-main{
    width: 88%;
    margin: 0 auto;
    border-radius: 10px;
    position: relative;
    top: -19px;;
    box-shadow: 1px 1px 1px #eee;
}
.check-main .banner {
    width: 100%;
    
}
.check-main .banner img{
    width: 100%;
    border-radius: 10px;
}
</style>