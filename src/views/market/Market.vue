<template>
    <div class="market">
        <nav-bar class="nav-bar">
            <div slot="navBarcenter">跳蚤市场</div>
            <div 
            slot="navBarRight"
            class="tips" 
            v-on:click="getTips"
            >
            <img src="~assets/img/market/wenti.svg" alt="">
            </div>
       </nav-bar>
       <!-- 小提示 -->
        <mt-popup
        v-model="popupVisible"
        popup-transition="popup-fade"
        class="popup"
        >
            <div class="tipsContent">
                <h5>公益有你</h5>
                <p>所有卖不出的物品以及所有盈利的钱都会捐赠给有需要的贫困地区、个人以及公益组织等</p>
            </div>
        </mt-popup>
        <div class="search">
            <mt-search
                autofocus 
                cancel-text="取消"
                placeholder="搜索"
                :show="false">
            </mt-search>
        </div>
        <tab-control 
            class="tab-control" 
            :title="['书籍','日常用品','器材','其它']" @getTabControlIndex="itemClick"
            >
        </tab-control>
       <scroll class="scroll" ref="scroll">
            <goods-list 
            :goodData="goods[currentTabType].list"
            ></goods-list> 
       </scroll>
    </div>    
</template>
<script>
import NavBar from 'components/common/navbar/NavBar'
import TabControl from 'components/content/tabcontrol/TabControl'
import Scroll from 'components/common/scroll/Scroll'
import GoodsList from './childComs/GoodsList'

import {debounce} from 'common/utils'
//引入请求数据方法
import {getGoodsData} from 'network/market'
export default {
    data(){
        return{
            active:'',
            currentTabType:'book',
            goods:{
                book:{page:0,list:[]},
                daily:{page:0,list:[]},
                equipment:{page:0,list:[]},
                other:{page:0,list:[]}
            },
            popupVisible:false
        }
    },
    components:{
        NavBar,TabControl,GoodsList,Scroll
    },
    created(){
    this.getGoodsData('book');
    this.getGoodsData('daily');
    this.getGoodsData('equipment');
    this.getGoodsData('other');
    },
    actived(){
        this.$ref.scroll.refresh();
    },
    mounted(){
    //事件总线加防抖技术
    const refresh = debounce(this.$refs.scroll.refresh,50)
      this.$bus.$on('imgLoad', () => {
       refresh()
      })
    },
    methods:{
        itemClick(i){
            switch (i){
                case 0:{
                this.currentTabType='book';
                break;
                }
                case 1:{
                this.currentTabType='daily';
                break;
                }
                case 2:{
                this.currentTabType='equipment';
                break;
                }
                case 3:{
                this.currentTabType='other';
                break;
                }  
            }
        //   this.getGoodsData(this.currentTabType);
        },
        getGoodsData(type){
           const page=this.goods[type].page+1;
            getGoodsData(type,page).then(res=>{
                this.goods[type].list.push(...res.data);
                this.goods[page]+=1;
            })
        },
        getTips(){
            this.popupVisible=true;
        },
    }
}
</script>
<style scoped>
.market{
    overflow: hidden;
}
.scroll{
    height: calc(100vh - 44px - 40px - 40px - 49px);
    overflow: hidden;
    background: #eee;
}
.search{
    font-size: 16px;
    height: 50px;
}
.search .mint-searchbar{
border-radius: 10px;
}
.market-banner img{
width: 100%;
border-radius: 10px;
}

.market .tips img{
    width: 25px;
    height: 25px;
    margin-top: 10px;
}
.popup{
    border-radius: 5px;
    line-height: 20px;
    padding: 7px;
    text-indent: 2em;
    text-align: left;
    font-size: 14px;
}
.popup h5{
    font-size: 15px;
    text-align: center;
    margin-bottom: 10px;
}
</style>