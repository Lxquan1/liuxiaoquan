let Mock = require("mockjs")
let data = [
    { id: 0, name: "黄安", text: "我ex" },
    { id: 1, name: "郑伟", text: "我ex黄安" },
    { id: 2, name: "风光之", text: "我ex黄安哈哈哈哈" },
    { id: 3, name: "我上台", text: "我ex黄安我上台" },
    { id: 4, name: "卧龙", text: "我ex黄安卧龙" },

]
Mock.mock("/api/homeindex", "get", function (config) {
    console.log(config);
    return data
})
Mock.mock(/\/api\/homeindex\/\d/, "delete", function (config) {
    console.log(config.url);
    let arr = config.url.split("/")
    let id = arr.pop()
    data.splice(id, 1)
    // data = data.map(function(item,id){
    //     return{
    //         id,
    //         name:item.name,
    //         text:item.text
    //     }
    // })
     // 数组凹陷的决绝方案
    data.forEach(function(item,index){
        item.id = index
    })
    return data
})
Mock.mock(/\/api\/homeindex\/edit\/\d/,"put", function (config) {
    console.log(config)
    let arr = config.url.split("/")
    let id = arr.pop()
    let canshu = config.body
    canshu = JSON.parse(canshu)
    data[id].name = canshu.name
    data[id].text = canshu.text
    console.log(data);
    return data
})
// 
Mock.mock("/api/homeindex",'post',function(config){
    let obj = JSON.parse(config.body)
    let name = obj.name
    let text = obj.text
    // 数组凹陷的决绝方案
    data.push({id:data.length,name,text})
    return data;
})