<template>
    <div class="donate-info">
        <nav-bar>
            <back @click.native="backTo" slot="navBarLeft"></back>
            <div slot="navBarcenter">益捐</div>
       </nav-bar>
        <donate-info-card :info="info"></donate-info-card>
    </div>
</template>
<script>
import NavBar from 'components/common/navbar/NavBar'
import Back from 'components/common/back/Back'


import DonateInfoCard from './childCom/DonateInfoCard'
export default {
    components:{
        NavBar,Back,DonateInfoCard
    },
    data(){
        return{
            info:{
                imgpath:require("assets/img/home/old.jpg"),title:"麻风村",content:"我们要帮助的韶西麻风病康复长者的概况:有这么一种疾病被歧视着，有这么一群人被遗忘着。 。他们曾被妖魔化为“风吹来的魔鬼”，被病痛和歧视的双重肆虐折磨着."
            }
        }
    }
}
</script>
<style scoped>

</style>