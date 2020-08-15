<template>
    <div id="detail">
        <child-navbar @item="navclick" ref="childnarbar"></child-navbar>
        <scroll class="content" ref="scroll" :probeType="3" @scroll="scrollclick">
            <child-swiper :topimage='topimg'></child-swiper>
            <detail-base-info :goods='goods'></detail-base-info>
            <detail-shop-info :shop="shop"></detail-shop-info>
            <detail-images-info :imagesInfo='detailInfo' @imgLoad='imgLoad'></detail-images-info>
            <detail-param-info :paramInfo='GoodsParams' ref="param"></detail-param-info>
            <detail-comment-info :comment-info='commentInfo' ref="comment"></detail-comment-info>
            <goods-recommend :good='DetailRecommend' ref="recommend"></goods-recommend>
        </scroll>
        <detail-bottom-bar @addcartclick="addcartclick"></detail-bottom-bar>
    <back-top @click.native="backclick" v-show="Positiony<-1500"></back-top>
  
    </div>
</template>

<script>
    import ChildNavbar from './childdetail/ChildNavbar'
    import ChildSwiper from './childdetail/ChildSwiper'
    import {Detail, Goods,Shop,GoodsParams,DetailRecommend} from 'network/detail';
    import DetailBaseInfo from './childdetail/DetailBaseInfo'
    import DetailShopInfo from './childdetail/DetailShopInfo'
    import DetailImagesInfo from './childdetail/DetailImagesInfo'
    import DetailParamInfo from './childdetail/DetailParamInfo'
    import DetailCommentInfo from './childdetail/DetailCommentInfo'
    import DetailBottomBar from './childdetail/DetailBottomBar'
    import Scroll from "components/common/betterscroll/Scroll"
    import GoodsRecommend from 'components/content/goods/Goods'
    import { debounce } from "common/util";
    import BackTop from "components/content/BackTop/BackTop"
    import {mapActions} from 'vuex'
    // import Toast from 'components/common/toast/Toast'
    export default {
        name: 'Detail',
        data() {
            return {
                iid: null,
                topimg: [],
                goods: {},
                shop: {},
                detailInfo: {},
                GoodsParams: {},
                commentInfo: {},
                DetailRecommend: [],
                showtemplateY:null,
                currindex:-1,
                Positiony:0,
                // message:'',
                // show:false
            }
        },
        components: {
            ChildNavbar,
            ChildSwiper,
            DetailBaseInfo,
            DetailShopInfo,
            Scroll,
            DetailImagesInfo,
            DetailParamInfo,
            DetailCommentInfo,
            GoodsRecommend,
            DetailBottomBar,
            BackTop,
            // Toast
        },
        methods: {
            ...mapActions(['addcartList']),
            getDetail(iid) {
                Detail(this.iid).then(res => {
                    const data = res.result
                    this.topimg = data.itemInfo.topImages
                    this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
                    this.shop = new Shop(data.shopInfo)
                    this.detailInfo = data.detailInfo
                    this.GoodsParams = new GoodsParams(data.itemParams.info, data.itemParams.rule)
                    if (data.rate.cRate != 0) {
                        this.commentInfo = data.rate.list[0]
                    }
                })
                   
            },
            getDetailRecommend() {
                DetailRecommend().then(res=>{
                    this.DetailRecommend = res.data.list
                })
            },
            imgLoad() {
                this.$refs.scroll.refresh()
               this.showtemplateY()
            },
            navclick(index){
                this.$refs.scroll.scrollTo(0,-this.templateY[index],1000)
            },
            scrollclick(position){
                const positionY=-position.y
                this.Positiony=position.y
                for(let i in this.templateY){
                i = parseInt(i)
                if(this.currindex!==i&&positionY>this.templateY[i]&&positionY
                <this.templateY[i+1]&&i<=this.templateY.length-1){ this.currindex=i
                    this.$refs.childnarbar.itemclickindex=this.currindex }else
                    if(this.currindex!==this.templateY.length-1&&positionY>this.templateY[this.templateY.length-1]){
                    i=parseInt(this.templateY.length-1)
                    this.currindex=i
                    this.$refs.childnarbar.itemclickindex=this.currindex
                    }
                    }
                    },
                    backclick() {
                    this.$refs.scroll.scrollTo(0, 0)
                    },
                    addcartclick(){
                        const cart={}
                        cart.img=this.topimg[0]
                        cart.title=this.goods.title
                        cart.desc=this.goods.desc
                        cart.price=this.goods.lowNowPrice
                        cart.iid=this.iid
                        cart.count=1
                        // this.$store.dispatch("addcartList",cart).then(res=>{
                        //     console.log(res)
                        // })
                        this.addcartList(cart).then(res=>{
                            // this.message=res,
                            // this.show=true
                            // setTimeout(()=>{
                            //     this.show=false
                            // },1000)
                            this.$toast.show(res,2000)
                        })
                    }   
                    },
        created() {
            this.iid = this.$route.params.iid
            this.getDetail(this.iid)
            this.getDetailRecommend()
            this.showtemplateY = debounce(()=>{
                    this.templateY=[]
                    this.templateY.push(0)
                    this.templateY.push(this.$refs.param.$el.offsetTop)
                    this.templateY.push(this.$refs.comment.$el.offsetTop)
                    this.templateY.push(this.$refs.recommend.$el.offsetTop)
            },200)
        },
        mounted() {
             const refresh = debounce(this.$refs.scroll.refresh, 500)
             this.$bus.$on("detailItemImageLoad", () => {
             refresh()
             })

        },
    }
</script>

<style scoped>
    #detail {
        position: relative;
        height: 100vh;
        z-index: 9;
        background-color: #fff;
    }

    .content {
        overflow: hidden;
        position: absolute;
        top: 44px;
        bottom: 58px;
        right: 0;
        left: 0;
    }
</style>