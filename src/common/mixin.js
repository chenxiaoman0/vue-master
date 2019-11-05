import Back from 'components/common/back/Back'
//返回上一页
export const backToMixin = {
components:{
    Back
    },
methods : {
    backTo(){
        this.$router.back();
    }
  }
}
