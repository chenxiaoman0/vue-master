<template>
    <div class="donate-book">
        <nav-bar>
        <back @click.native="backTo" slot="navBarLeft"></back>
        <div slot="navBarcenter">衣物捐</div>
    </nav-bar>
    </div>
</template>
<script>
import NavBar from 'components/common/navbar/NavBar'
import Back from 'components/common/back/Back'
export default {
    components:{
       NavBar, Back
    },
    methods:{
    //点击返回上一页面
    backTo(){
        this.$router.back();
    },
    }
}
</script>
<style scoped>

</style>