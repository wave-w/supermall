<template>
  <div id="home">  
  <nav-bar class="home-navbar"><div slot="center">购物街</div></nav-bar>
<home-swiper :banners='banners'></home-swiper>
 <homecommer-view :recommends="recommends"></homecommer-view>
 <home-recommend></home-recommend>
 <tab-control :tabcontrol="['流行','新款','精选']" class="tabcontrol"></tab-control>
 <goods :good="goods['pop'].list"></goods>
  </div>
</template>
<script>
import NavBar from 'components/common/navbar/navbar'
import HomeSwiper from './childhomeview/HomeSwiper'
import HomecommerView from './childhomeview/HomecommerView'
import HomeRecommend from './childhomeview/HomeRecommend'
import TabControl from 'components/content/tabcontrol/TabControl'
import Goods from "components/content/goods/Goods"
 

import { HomeMultidata,HomeGood } from 'network/home';
export default {
  name: 'home',
  components:{
    NavBar,
    HomeSwiper,
    HomecommerView,
    HomeRecommend,
    TabControl,
    Goods
  },
  data() {
    return {
      banners :[],
      recommends:[],
      goods:{
        'pop':{page:0,list:[]},
        'new':{page:0,list:[]},
        'sell':{page:0,list:[]}
      }
    }
  },
  created() {
   this.getHomeMultidata()
   this.getHomeGood('pop'),
   this.getHomeGood('new'),
   this.getHomeGood('sell')
  },
  methods: {
    getHomeMultidata(){
     HomeMultidata().then(res=>{
      this.banners=res.data.banner.list;
      this.recommends=res.data.recommend.list;
    })
    },
getHomeGood(type){
const page =this.goods[type].page+1;
HomeGood(type,page).then(res=>{
  this.goods[type].list.push(...res.data.list)
  this.goods[type].page+=1
})
}
  },
}
</script>

<style scoped>
#home{
  padding-top: 44px;
}
.home-navbar{
  background-color: var(--color-tint);
    color:#fff;
    position: fixed;
    left: 0;
    right:0;
    top: 0;
    z-index: 9;
}
.tabcontrol{
  position: sticky;
  top: 44px;
}
</style>