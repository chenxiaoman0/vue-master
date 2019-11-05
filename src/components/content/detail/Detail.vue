<template>
    <div class="detail">
        <h5 class="detail-title">爱不单行 | 爱心捐赠，“衣”往情深</h5>
        <div class="detail-dec">
            <span class="detail-dec-left">麻风村</span>
            <span>
            <img src="~assets/img/activity/liulan.svg" alt="">
                326人浏览
            </span>
        </div>
        <div class="progress">
            
        </div>
        <div class="detail-content">
            <p class="">我们要帮助的韶西麻风病康复长者的概况：
                有这么一种疾病被歧视着，有这么一群人被遗忘着。 麻风病是由麻风杆菌引发的一种慢性传染病，患者的畸残率比较高，面容扭曲变形、肌肉溃疡、手断脚断，是常见的症状。
            </p>
            <p>他们曾被妖魔化为“风吹来的魔鬼”，被病痛和歧视的双重肆虐折磨着，随着医学发展，麻风病不再是“不治之症”，也不需要强制隔离。但比疾病更难医治的是对疾病本身的误解和歧视。麻风病使他们与至亲分离，有的在年轻时就被隔离起来，如今膝下无子女；畸形的外表让他们不易被人接受，也难于重返社会生活，他们很多再也走不出那片隔离区了。 
            </p>
            <p>疾病使康复长者基本丧失了劳动力，靠政府补贴维持生活，每人每月500块的补贴，扣取了电费和伙食费后已经所剩无几，他们还要定时给神经性坏掉的伤口上药，有时候老人们舍不得买那昂贵的药品，常会导致伤口的二次感染。老人们最怕的就是生病了，病了也宁愿痛着、忍着都不愿出去治疗。 
            </p>
            <p>康复村的物资相当匮乏，所以老人们都很珍惜这里的每件物品。他们常常用着不合穿的鞋子，不同双的袜子，重复使用的一次性的碗筷，老人的衣物基本都是他人捐赠。 
            </p>
            <p>大多数老人十分热情，每当志愿者来访时他们都表示欢迎，喜欢跟志愿者聊天唱歌玩游戏。 但平时他们都十分孤单，村子里十分寂静。 村子需要多一点鸟语和花香。 
            </p>
            <img src="~assets/img/home/dynamic/dynamic1.jpg" alt="" @load="imgload">
            <p>交流的是故事，传递的是真情，物品有价，情义无价，爱心义卖，心系韶西，我们能为老人们做些什么呢？让爱在行动！请多多关注、参与我们的麻风病康复村公益筹活动吧！
            </p>
        </div>
    </div>
</template>
<script>
export default {
    methods:{
         imgload(){
             this.$emit('imgload')
        }
    }
}
</script>
<style scoped>
.detail{
    margin-top: 15px;
    padding: 5px;
}
.detail .detail-title{
    font-size: 17px;
    font-weight: 600;
}
.detail-dec{
margin-top: 15px;
display: flex;
justify-content:space-between;
padding-left: 5px;
padding-right: 5px;
}
.detail-dec-left{
    color:var(--color-tint);
}
.detail-dec img{
    width: 25px;
    height: 25px;
    vertical-align: middle;
}
.detail-content{
    text-align: left;
    text-indent: 2em;
    margin-top: 15px;
    line-height: 23px;
}
</style>