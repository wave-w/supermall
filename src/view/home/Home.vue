<template>
  <div id="home">
    <nav-bar class="home-navbar">
      <div slot="center">购物街</div>
    </nav-bar>
      <tab-control :tabcontrol="['流行','新款','精选']" @indexclick='indexclick' ref="tabcontrol1" class="tabcontrol" v-show="positiony<-taboffsettop"></tab-control>
    <scroll class="content" ref="scroll" :probe-type='3' @scroll='scrollclick' :pullUpLoad='true'
      @pullingUp='pullingUp'>
      <home-swiper :banners='banners' @imgload='imgload'></home-swiper>
      <homecommer-view :recommends="recommends"></homecommer-view>
      <home-recommend></home-recommend>
      <tab-control :tabcontrol="['流行','新款','精选']" @indexclick='indexclick' ref="tabcontrol"></tab-control>
      <goods :good="showtype"></goods>
    </scroll>
    <back-top @click.native="backclick" v-show="positiony<-1500"></back-top>
  </div>
</template>
<script>
  import NavBar from 'components/common/navbar/navbar'
  import HomeSwiper from './childhomeview/HomeSwiper'
  import HomecommerView from './childhomeview/HomecommerView'
  import HomeRecommend from './childhomeview/HomeRecommend'
  import TabControl from 'components/content/tabcontrol/TabControl'
  import Goods from "components/content/goods/Goods"
  import Scroll from "components/common/betterscroll/Scroll"
  import BackTop from "components/content/BackTop/BackTop"
  import {
    debounce
  } from 'common/util'
  import {
    HomeMultidata,
    HomeGood
  } from 'network/home';
  export default {
    name: 'home',
    components: {
      NavBar,
      HomeSwiper,
      HomecommerView,
      HomeRecommend,
      TabControl,
      Goods,
      Scroll,
      BackTop
    },
    data() {
      return {
        banners: [],
        recommends: [],
        goods: {
          'pop': {
            page: 0,
            list: []
          },
          'new': {
            page: 0,
            list: []
          },
          'sell': {
            page: 0,
            list: []
          },

        },
        currindex: 'pop',
        positiony: 0,
        taboffsettop: 0
      }

    },
    created() {
      this.getHomeMultidata()
      this.getHomeGood('pop'),
        this.getHomeGood('new'),
        this.getHomeGood('sell')
    },
    mounted() {
      const refresh = debounce(this.$refs.scroll.refresh, 500)
      this.$bus.$on("ItemImageLoad", () => {
          refresh()
        })

    },
    methods: {
      imgload() {
     this.taboffsettop = this.$refs.tabcontrol.$el.offsetTop
      },
      getHomeMultidata() {
        HomeMultidata().then(res => {
          this.banners = res.data.banner.list;
          this.recommends = res.data.recommend.list;
        })
      },
      getHomeGood(type) {
        const page = this.goods[type].page + 1;
        HomeGood(type, page).then(res => {
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page += 1
          this.$refs.scroll.finishPullUp() //解决上拉加载更多只执行一次
        })
      },
      indexclick(index) {
        //  const indexarr=['pop','new','sell']
        //  this.currindex=indexarr[index]
        switch (index) {
          case 0:
            this.currindex = 'pop'
            break;
          case 1:
            this.currindex = 'new'
            break;
          case 2:
            this.currindex = 'sell'
        }
        this.$refs.tabcontrol1.currindex=index
        this.$refs.tabcontrol.currindex=index
      },
      backclick() {
        this.$refs.scroll.scrollTo(0, 0)
      },
      scrollclick(position) {
        this.positiony = position.y
      },
      pullingUp() {
        this.getHomeGood(this.currindex)
        this.$refs.scroll.scroll.refresh()
      }
    },
    computed: {
      showtype() {
        return this.goods[this.currindex].list
      }
    }
  }
</script>

<style scoped>
  #home {
/*     padding-top: 44px;
 */    height: 100vh;
    position: relative;
  }

  .home-navbar {
    background-color: var(--color-tint);
    color: #fff;
 /*    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9; */
  }


  .content {
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
    right: 0;
    left: 0;
  }

  /*   .content{
    height: calc(100%-93px);
    overflow: hidden;
    margin-top: 44px;
  } */
  .tabcontrol{
    position: relative;
    z-index: 9;
  }
 
</style>