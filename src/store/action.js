export default  {
    addcartList(context,playload){
      return new Promise((resolve,reject)=>{
            // oldcartList=null
        // for (let item of state.cartList) {
        //     if(item.iid === playload.iid){
        //           oldcartList  = item
        //     }
        // }
        let oldcart = context.state.cartList.find(item=>item.iid===playload.iid)
        if(oldcart){
            // oldcart.count+=1
            context.commit('addcount',oldcart)
            resolve('商品数量+1')
        }else{
            playload.count = 1
            // state.cartList.push(playload)
            context.commit('addcart',playload)
            resolve('加入购物车成功')
        }
      })
    },
}