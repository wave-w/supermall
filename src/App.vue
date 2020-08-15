<template>
  <div id="app">
  <main-tabbar class="main-tabbar"></main-tabbar>
  <keep-alive exclude="Detail">
  <router-view></router-view> 
  </keep-alive>
  </div>
</template>

<script>
import MainTabbar from 'components/content/mainTabbar/maintabbar'
export default {
  name: 'App',
  components: {
    MainTabbar
  }
}
</script>
<style>
@import 'assets/css/base.css';

</style>
