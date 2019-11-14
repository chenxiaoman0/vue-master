<template>
  <div class="good-list-item" @click="goodsItemClick">
    <div class="good-list-item-img">
      <img v-lazy="goodsitem.imgpath[0]" alt="" @load="imgLoad" />
    </div>
    <div class="good-info">
      <p class="title">
        <span>{{ goodsitem.title }}</span>
      </p>
      <div class="good-info-dec">
        <span>{{ goodsitem.degree }}成新</span>
         <span>{{getName(goodsitem.c_name)}}</span>
      </div>
      <p class="price">
        <span>￥{{ goodsitem.price }}</span>
      </p>
    </div>
  </div>
</template>
<script>
export default {
    
  props: {
    goodsitem: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data(){
      return {
          kindName:''
      }
  },
  created(){
      this.getName(this.goodsitem.c_name)
  },
  methods: {
    goodsItemClick() {
        this.$router.push({
            path:'/goodDetail',
            query: { id:this.goodsitem.g_id }
        })
    },
    imgLoad() {
      this.$bus.$emit("imgLoad");
    },
     getName(name){
        switch (name) {
            case 'book':
            return '书籍';
            break;
            case 'daily':
            return '日常用品';
            break;
            case 'equipment':
            return '体育器材';
            break;
            case 'other':
            return '其它';
            break;
        }
      }
  },
};
</script>
<style scoped>
.good-list-item {
  width: 48%;
  padding: 10px;
  padding-bottom: 0;
  position: relative;
  background: #fff;
  border-radius: 5px;
  margin-top: 10px;
}
.good-list-item-img {
  width: 100%;
  height: 180px;
  overflow: hidden;
}
.good-list-item img {
  width: 100%;
  border-radius: 5px;
}
.good-list-item .good-info {
  font-size: 12px;
  /* position: absolute; */
  left: 0;
  right: 0;
  overflow: hidden;
  padding: 10px;
  text-align: left;
}
.good-list-item .good-info p {
  overflow: hidden;
  margin-bottom: 3px;
  font-size: 15px;
  font-weight: 500;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}
.good-info-dec {
  margin-top: 20px;
}
.good-info-dec span {
  padding: 5px 15px;
  border-radius: 10px;
  margin-right: 5px;
  color: #fff;
}
.good-info-dec span:nth-child(1) {
  background: rgb(255, 181, 85);
}
.good-info-dec span:nth-child(2) {
  background: rgb(67, 142, 255);
}
.good-list-item .good-info .price {
  margin-top: 15px;
  color: #5b872e;
}
</style>