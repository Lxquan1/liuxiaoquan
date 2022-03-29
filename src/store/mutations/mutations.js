let mutations = {
    increment(state,payload){
        state.count = state.count+payload
    },
    jian(state,payload){
        state.count = state.count-payload
    }
}
export default mutations