<template>
  <div>
    <swiper>
  <swiper-item v-for="(items,index) in banners" :key="index">
  <a :href="items.link">
  <img :src="items.image" alt="" @load="imgload">
  </a>
  </swiper-item>
  </swiper>
  </div>
</template>
<script>
import { Swiper, SwiperItem } from 'components/common/swiper/index';
export default {
  name: 'homeswiper',
  data() {
    return {
      isload:false
    }
  },
  components:{
        Swiper,
    SwiperItem,
  },
  props :{
      banners: {
          type:Array,
          default(){
              return []
          }
      }
  },
 methods: {
  
    imgload(){
       if(!this.isload){
     this.$emit('imgload')
     this.isload=true
  }
   } 
 },
}
</script>

<style scoped>
</style>