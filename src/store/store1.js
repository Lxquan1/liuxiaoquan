import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex) //再vue应用中安装vuex
let store = new Vuex.Store({
    state:{count:0},//存放数据的
    mutations:{//存放用户提交的方法=》业务
        // mutations 是修改state的方法唯一的
        increment(state,payloab){//修改 state的业务函数
            // 每个mutations的第一个参数就是state本身
            state.count = state.count+payloab
        },
        jian(state,payloab){//修改 state的业务函数
            // 每个mutations的第一个参数就是state本身
            state.count = state.count-payloab
        }
    },
    actions:{
        asyncincrement(context,payloab){
            // 存放异步的 提交mutation
            // 每个 action 的第一个参数是上下文对象context
            setTimeout(function(){
                context.commit("increment",payloab)
            },2000)
        }
    }
})
export default store