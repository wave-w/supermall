<template>
  <div class="goods">
<goods-item v-for="(item,index) in good" :key="index" :goodsitem='item'>
</goods-item>
  </div>
</template>

<script>
import GoodsItem from './GoodsItem'
export default {
  name: 'Goods',
  components:{
  GoodsItem
  },
  props:{
     good :{
         type:Array,
         default(){
             return []
         }
     } 
  }
}
</script>

<style scoped>
.goods{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>