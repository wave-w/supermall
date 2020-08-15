<template>
  <swiper class="detailswiper">
    <swiper-item v-for="(item,index) in topimage" :key="index">
      <img :src="item" alt="">
    </swiper-item>
  </swiper>
</template>

<script>
  import {
    Swiper,
    SwiperItem
  } from 'components/common/swiper/index';
  export default {
    name: 'ChildSwiper',
    components: {
      Swiper,
      SwiperItem
    },
    props: {
      topimage: {
        type: Array,
        default () {
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .detailswiper {
    height: 300px;
    overflow: hidden;
  }
</style>