let actions = {
    asyncincrement(context,payloab){
        // 存放异步的 提交mutation
        // 每个 action 的第一个参数是上下文对象context
        setTimeout(function(){
            context.commit("increment",payloab)
        },2000)
    }
}
export default actions