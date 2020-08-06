<template>
  <div class="recommends">
  <div v-for="(items,index) in recommends" :key="index" class="recommends-items">
  <a :href="items.link">
  <img :src="items.image" alt="">
  <div>{{items.title}}</div>
  </a>
  </div>
  </div>
</template>
<script>
export default {
  name: 'HomecommerView',
  props :{
      recommends:{
          type:Array,
          default(){
              return []
          }
      } 
  }
}
</script>

<style scoped>
 .recommends{
    display: flex;
    width: 100%;
    text-align: center;
    padding: 5px;
    border-bottom: 10px solid #eee;
  }

  .recommends-items{
    flex: 1;
  }

  .recommends-items img{
    width: 70px;
    height: 65px;
    border-radius: 100%;

  }
</style>