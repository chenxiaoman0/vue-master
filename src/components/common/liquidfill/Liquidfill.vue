<template>
    <div id="liquidFill" :style="{width: '260px', height: '165px',}"></div>
</template>
<script>
import echartsLiquidfill from 'echarts-liquidfill'
// 引入水晶球插件
export default {
    mounted() {
    this.$nextTick(function () {
        this.liquidFill(); 
        this.$emit('liquidLoad')
    });
    },
    methods:{
     //绘制水晶球
    liquidFill (){//方法
    var liquid = this.$echarts.init(document.getElementById('liquidFill'));
    liquid.setOption({
        series: [{
            type: 'liquidFill',//类型
            data: [0.7, 0.5, 0.4,],//数据是个数组 数组的每一项的值是0-1
             label: {
                normal: {
                    formatter: '324',
                    textStyle: {
                        fontSize: 28
                    }
                }
            },
            outline: {
                //show: true , //是否显示轮廓 布尔值
                borderDistance: 0, //外部轮廓与图表的距离 数字
                itemStyle:{
                    //borderColor:'rgba(255,0,0,0.09)', //边框的颜色
                    borderWidth: 0,  //边框的宽度
                    //shadowBlur: 5 , //外部轮廓的阴影范围 一旦设置了内外都有阴影
                    //shadowColor: '#000' //外部轮廓的阴影颜色 
                }
            },
            backgroundStyle: {
                color:'#fff',//图表的背景颜色 
            },
            emphasis:{
                itemStyle: {
                    opacity :1 //鼠标经过波浪颜色的透明度
                }
            },
            color: ['#62c989'],//水波的颜色 对应的是data里面值
            shape: 'circle',//水填充图的形状 circle默认圆形  rect圆角矩形  triangle三角形  diamond菱形  pin水滴状 arrow箭头状  还可以是svg的path
            center: ['50%','50%'],//图表相对于盒子的位置 第一个是水平的位置 第二个是垂直的值 默认是[50%,50%]是在水平和垂直方向居中 可以设置百分比 也可以设置具体值
            radius: '80%', //图表的大小 值是圆的直径 可以是百分比 也可以是具体值 100%则占满整个盒子 默认是40%; 百分比下是根据宽高最小的一个为参照依据
            amplitude:3,   //振幅 是波浪的震荡幅度 可以取具体的值 也可以是百分比 百分比下是按图标的直径来算
            waveLength:'50%',//波的长度 可以是百分比也可以是具体的像素值  百分比下是相对于直径的 取得越大波浪的起伏越小
            phase:0 ,//波的相位弧度 默认情况下是自动
            period: (value,index)=>{//控制波的移动速度 可以是函数 也可以是数字 两个参数  value 是data数据里面的值 index 是data值的索引

                return index*2000;
            },
            direction: 'left',//波移动的速度 两个参数  left 从右往左 right 从左往右
            waveAnimation: true, //控制波动画的开关  值是布尔值 false 是关闭动画 true 是开启动画 也是默认值
            animationEasing: 'linear',//初始动画
            animationEasingUpdate: 'quarticInOut',//数据更新的动画效果
            animationDuration: 3000, //初始动画的时长，支持回调函数，可以通过每个数据返回不同的 delay 时间实现更绚丽的初始动画效果
            animationDurationUpdate : 300 //数据更新动画的时长

        }],
        //backgroundColor: 'rgba(255,0,0,0.1)'容器背景颜色
    })
}
    }

}
</script>
<style scoped>
</style>