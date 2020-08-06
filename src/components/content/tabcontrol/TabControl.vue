<template>
  <div class="tabcontrol">
  <div v-for="(item,index) in tabcontrol" :key="index" class="tabcontrol-items" >
  <span :class="{isactive:currindex===index}" @click="itemclick(index)">{{item}}</span>
  </div>
  </div>
</template>

<script>
export default {
  name: 'TabControl',
  data() {
      return {
          currindex :0
      }
  },
  methods: {
      itemclick(index){
          this.currindex=index
      }
  },
  props :{
     tabcontrol : {
     type:Array,
     default(){
     return []
 }
     }
  }
}
</script>

<style scoped>
.tabcontrol{
    display: flex;
    text-align: center;
    font-size: 15px;
    height: 40px;
    line-height: 40px;
    background-color: #fff;
}
.tabcontrol-items{
    flex: 1;
}
.tabcontrol-items span{
    padding: 5px;
}
.isactive{
color:var(--color-high-text);
border-bottom : 3px solid var(--color-tint);
}
</style>