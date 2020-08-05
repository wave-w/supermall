<template>
  <div id="home">  
  <nav-bar class="home-navbar"><div slot="center">购物街</div></nav-bar>
<home-swiper :banners='banners'></home-swiper>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/navbar'
import HomeSwiper from './childhomeview/homeswiper'

import { HomeMultidata } from 'network/home';
export default {
  name: 'home',
  components:{
    NavBar,
    HomeSwiper
  },
  data() {
    return {
      banners :[],
      recommends:[]
    }
  },
  created() {
    HomeMultidata().then(res=>{
      console.log(res);
      this.banners=res.data.banner.list;
      this.recommends=res.data.recommend.list;
    })
  },
}
</script>

<style scoped>
.home-navbar{
  background-color: var(--color-tint);
  color: #fff;
}
</style>