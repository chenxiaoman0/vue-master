<template>
    <div class="guide">
        <nav-bar class="nav-bar">
            <back @click.native="backTo" slot="navBarLeft"></back>
            <div slot="navBarcenter">入门指南</div>
       </nav-bar>
       <scroll class="scroll" ref="scroll">
        <div class="guide-content">
            <p>韶院公益之家是一一个倡导闲置零抛弃、旧衣环保公益处理的校内公益平台。平台以[环保为世界，公益为你]为理念。在校师生可通过韶院公益之家平台进行环保回收获取能量，能量可用于捐赠公益项目以及兑换环保福利的方式，鼓励全社会-起参与到闲置零抛弃的行动中来。韶院公益之家回收通过和物流公司、公益组织、再生工厂、出口工厂合作，建立了可循环的旧8衣物回收以及综合处理体系，以"环保+公益”的方式处理旧8衣物，让有限资源无限循环。同时飞蚂蚁也陆续发起了“善-集助农”、“盲人客服:助残”、“不塑之客.抵抗白色污染”、“为山区孩子送新衣”等环保和公益项目。让韶院在校师生能够轻松参与环保，简单参与公益。
            </p>
            <div class="guide-banner">
                <h5>韶院公益之家回收流程</h5>
                <p>环保为世界，公益为你</p>
                <img 
                src="~assets/img/home/guide-banner.png" 
                @load="imgLoad"
                alt="">
            </div>
            <h5>一、旧书处理方式</h5>
            <p class="title">环保再生:</p>
            <p>
            将符合标准的各类纸质书本类物品进行回收，经过专业的维护修整后，将其捐赠给全国各地的贫困地区和学校等，让生活困难的孩子们拥有享受知识的幸福和权利。
            </p>
            <p class="title">公益捐赠:
            </p>
               <p>
            将保存良好的书籍直接捐助给贫困地区的学生和学校。目前已有148所贫困学校已获得公益捐赠，仅2018年就达到了1169万册图书，共惠及51274名贫困学生。之后，飞蚂蚁让更多的留守贫困儿童有好书看、有好书读。
            </p>
            <h5>二、旧衣处理方式</h5>
            <p class="title">环保再生</p>
            <p>
            韶院公益之家与环保处理工厂进行合作，将可用于再生的棉毛、棉纶、涤纶等旧衣物进行再生处理，从而加工成农业保温材料、建筑隔音材料、填充材料等等，或者分解成可再生纤维、聚酯原料、再生棉帆布以重新用于纺织品生产。
            </p>
            <p class="title">公益捐赠</p>
            <p>
                将回收后的旧衣物进行分拣，其中符合捐赠标准的衣物，会经过严格的清洗、消毒、整理后，捐赠给有需要的贫困地区、个人以及公益组织等。
            </p>
            <h5>三、跳蚤市场</h5>
            <p class="title">可回收物品</p>
            <p>
                电子产品:鼠标键盘、音响、耳机，电脑配件等 
                生活用品:鞋架、电风扇、台灯、折叠桌、等 
                文具用品:工具书、计算器、记本、课外图书等 
                运动器材:球类球拍、健身器材、滑板等 其它:自行车、乐器、公仔玩偶、装饰品、礼品，箱包等 
            </p>
            <p class="title">公益捐赠</p>
            <p>
                所有卖不出的物品以及所有盈利的钱都会捐赠给有需要的贫困地区、个人以及公益组织等
            </p>
        </div>
       </scroll>

    </div>
</template>
<script>
import NavBar from 'components/common/navbar/NavBar'
import Scroll from 'components/common/scroll/Scroll'

import {backToMixin} from '@/common/mixin'
export default {
     mixins: [backToMixin],
     components:{
        Scroll,NavBar 
     },
     methods:{
         imgLoad(){
             this.$refs.scroll.refresh();
         }
     }
}
</script>
<style scoped>
.scroll{
    height: calc(100vh - 44px - 49px);
    overflow: hidden;
}
.guide-content{
    padding: 10px;
    text-align: left;
    line-height: 25px;
}
.guide-content p{
    text-align: left;
    text-indent: 2em;
    font-size: 14px;
}
 .guide-content  h5{
     font-size: 16px;
     color: #5b872e;
 }
.guide-banner{
width: 100%;
text-align: center;
margin-top: 5px;
}
.guide-banner p{
text-align: center;
margin-top: 5px;
color: rgb(134, 133, 133);
}
.guide-banner img{
    width: 100%;
    margin-bottom: 15px;
}
 .guide-content .title{
    color: #5b872e;
    font-weight: 600;
 }
</style>