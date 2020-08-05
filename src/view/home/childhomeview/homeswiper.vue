<template>
  <div>
    <swiper>
  <swiper-item v-for="(items,index) in banners" :key="index">
  <a :href="items.link">
  <img :src="items.image" alt="">
  </a>
  </swiper-item>
  </swiper>
  </div>
</template>
<script>
import { Swiper, SwiperItem } from 'components/common/swiper/index';
export default {
  name: 'homeswiper',
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
  }
}
</script>

<style scoped>
</style>