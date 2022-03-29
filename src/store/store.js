import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex) 
import state from "./state/state"
import mutations from "./mutations/mutations"
import actions from "./actions/actions"
 let store = new Vuex.Store({
    state,
    mutations,
    actions
})
export default store