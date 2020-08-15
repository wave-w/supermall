<template>
  <div class="cartlist">
  <scroll class="content">
  <cart-list-item  v-for="(item,index) in getcartList" :key="index" :product="item"></cart-list-item>
  </scroll>
  </div>
</template>
<script>
import {mapGetters} from 'vuex'
import Scroll from 'components/common/betterscroll/Scroll'
import CartListItem from './cartListitem'
export default {
  name: 'cartList',
  components:{
      Scroll,
      CartListItem
  },
  computed: {
      ...mapGetters(['getcartList'])
  },
}
</script>

<style scoped>
.content {
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
    right: 0;
    left: 0;
  }  
</style>