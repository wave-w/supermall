<template>
  <div class="wrapper" ref="wrapper">
  <div class="content">
  <slot></slot>
  </div>
  </div>
</template>

<script>
import Bsscroll from 'better-scroll'
export default {
  name: 'this.name',
  props:{
     probeType:{
       type:Number,
       default :0
     },
     pullUpLoad:{
       type:Boolean,
       default:false
     }
  },
  data() {
      return {
          scroll:null 
      }
  },
  mounted() {
      this.scroll= new Bsscroll(this.$refs.wrapper,{
          click:true,
          probeType : this.probeType,
          pullUpLoad:this.pullUpLoad
      }),
      this.scroll.on('scroll',(position)=>{
        this.$emit('scroll',position)
      }),
      this.scroll.on('pullingUp',()=>{
        this.$emit('pullingUp')
      })
  },
   methods: {
      scrollTo(x,y,time=1000){
          this.scroll.scrollTo(x,y,time)
      },
      finishPullUp(){
          this.scroll.finishPullUp()
      }
  },
}
</script>

<style scoped>
</style>