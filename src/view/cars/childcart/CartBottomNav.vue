<template>
  <div class="bottom-bar">
  <div class="check-all"  @click="checkall">
  <check-button class="check-button"  :is-check="isSelectAll" ></check-button>
  <span class="check-ch">全选</span>
  </div>
  <div class="pay">
  <p>
    合计:{{payprice}}
  </p></div>
  <div class="calculate" @click="calculate">
  <p>
    去计算:({{checkpay}})
  </p>
  </div>
  </div>
</template>
<script>
import CheckButton from 'components/content/checkbutton/CheckButton'
import {mapGetters} from 'vuex'
export default {
  name: 'CartBottomNav',
  components:{
      CheckButton
  },
  methods: {
      checkall(){
          if(this.isSelectAll){
              this.getcartList.forEach(item=>item.isCheck=false)
          }else{
              this.getcartList.forEach(item=>item.isCheck=true)
          }
    //  this.getcartList.forEach(item=>item.isCheck=!item.isCheck)
      },
      calculate(){
          if(!this.isSelectAll){
               this.$toast.show("请选择你要购买的商品",2000)
          }else{
              this.$toast.show("你买不起",2000)
          }
      }
  },
   computed: {
      ...mapGetters(['getcartList']),
      payprice(){
          return '￥' + this.getcartList.filter(item=>{
              return item.isCheck
          }).reduce((preValue,item)=>{
              return preValue+item.price*item.count
          },0).toFixed(2)
      },
      checkpay(){
          return this.getcartList.filter(item=>item.isCheck).length
      },
      isSelectAll(){
          if(this.getcartList.length==0)  return false
             //  return !(this.getcartList.filter(item=>!item.isCheck).length!=0)
                //  return   !(this.getcartList.every(item=>!item.isCheck))
                for(let item of this.getcartList){
                    if(!item.isCheck){
                        return false
                    }
                }
                return true
      }
  },
}
</script>

<style scoped>
.bottom-bar{
    height: 40px;
    width: 100%;
    display: flex;
    background-color: #eee;
    position: absolute;
    bottom: 49px;
    line-height: 45px;
}
.check-all{
    display: flex;
    align-items: center;
}
.check-button{
    margin-left: 20px;
    margin-top: 8px;
    margin-right: 10px;
}
.check-ch{
      margin-top: 5px;
      margin-right: 10px;
      font-size: 17px;
}
.pay{
   margin-left: 30px;
}
.calculate{
    margin-left: 20px;
    flex: 1;
    text-align: center;
    background-color: red;
    color: #fff;
}
</style>