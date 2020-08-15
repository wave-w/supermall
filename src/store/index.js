import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import mutations from './mutation'
import actions from './action'
import getters from './getters'
const state = {
        cartList:[],
}
const store =new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})
export default store