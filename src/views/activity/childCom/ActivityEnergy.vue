 <template>
    <div class="activity-energy">
        <div class="energy-title">
            <img 
            src="~assets/img/common/icon/nengliang.svg" alt=""
            @load="imgLoad"
            >
            <h5>我的能量</h5>
        </div>
        <div class="energy-main">
            <div class="col current">
                <span>724</span>
                 <p>当前能量值</p>
            </div>
            <div class="col">
                <span>245</span>
                 <p>捐赠次数</p>
            </div>
            <div class="col">
                <span>839</span>
                 <p>累计收益</p>
            </div>
        </div>
        <separator></separator>
    </div>    
</template>
<script>
import Separator from 'components/content/separator/Separator';
export default {
    data(){
        return{
           
        }
    },
    components:{
        Separator
    },
    methods:{
        imgLoad(){
            this.$emit('imgLoad')
        }
    }
}
</script>
<style scoped>
.activity-energy{
padding: 10px;
}
.energy-title{
    font-size: 14px;
    text-align: left;
}
.energy-title img{
    width: 30px;
    height:30px;
    vertical-align: middle;
}
.energy-title h5{
    display: inline-block;
    font-size: 15px;
    font-weight: 500;
}
.energy-main{
    display: flex;
    margin-top: 10px;
    font-size: 14px;
     color: rgb(82, 80, 80);
}
.energy-main p{
    color: rgb(139, 139, 139);
    margin-top: 6px;
     font-size: 13px;
}
.energy-main .col{
    flex: 1;
}
.energy-main .current{
  margin-right: 110px;
}
</style> */