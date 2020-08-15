export default {
    addcount(state,playload){
        playload.count++
    },
    addcart(state,playload){
        playload.isCheck = true
        state.cartList.push(playload)
    },
    changeCheck(state,playload){
        playload.isCheck=!playload.isCheck
    },
 }