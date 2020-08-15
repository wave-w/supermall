<template>
  <div>
  <nav-bar>
  <div slot="left" class="back"><img src="~assets/img/common/back.svg" alt="" @click="backclick"></div>
  <div slot="center" class="center">
  <div v-for="(item,index) in title" :key="index" class="center-item" @click="itemclick(index)" :class="{ifclick:itemclickindex==index}">{{item}}
  </div>
  </div>
  </nav-bar>
  </div>
</template>
<script>
import NavBar from 'components/common/navbar/navbar'
export default {
  name: 'ChildNavbar',
  data() {
      return {
          title:['商品','参数','评论','推荐'],
            itemclickindex:0
      }   
  },
  components:{
    NavBar
  },
  methods: {
      itemclick(index){
      this.itemclickindex=index
         this.$emit("item",index)
      },
      backclick(){
         this.$router.back()
      }
  },
}
</script>

<style scoped>
.center{
    display: flex;
}
.center-item{
   flex: 1;
   font-size: 15px;
}
.ifclick{
    color: var(--color-tint)
}
.back img {
    margin-top: 11px;
}
</style>