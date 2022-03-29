<template>
    <div>
        home 下的用户列表
        <button @click="add(10)">增加</button>
        <button @click="jian(6)">减少</button>
        <p>{{this.$store.state.count}}</p>
    </div>
</template>
<script>
export default {
    name:"HomeUser",
    methods: {
        add(a){
            // 不能直接修改count
            this.$store.dispatch("asyncincrement",a)
            // dispatch 给 actions 提交方法
        },
        jian(b){
            this.$store.commit("jian",b)
        }
    },
}
</script>
<style>
    
</style>