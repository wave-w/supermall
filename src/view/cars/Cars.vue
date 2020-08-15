<template>
 <div class="cart">
<nav-bar class="cart-navbar">
      <div slot="center">购物车({{$store.getters.cartLength}})</div>
    </nav-bar>
    <cart-list></cart-list>
    <cart-bottom-nav></cart-bottom-nav>
 </div>
</template>
<script>
 import NavBar from 'components/common/navbar/navbar'
//  import { mapGetter } from "vuex"
import CartList from './childcart/cartList'
import CartBottomNav from './childcart/CartBottomNav'
export default {
  name: 'cars',
  components: {
    NavBar,
    CartList,
    CartBottomNav
  },
  computed: {
    // ...mapGetter(['cartLength','cartList'])
  },
}
</script>

<style scoped>
.cart-navbar{
   background-color: var(--color-tint);
    color: #fff;
}
</style>