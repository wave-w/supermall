<template>
  <div>
  {{good}}
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
</style>