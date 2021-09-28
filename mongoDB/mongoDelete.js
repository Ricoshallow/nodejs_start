const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/playground')
    .then(() => console.log('database connect successful'))
    .catch(() => console.log('database connect failed'))

// 設定集合規則
const testSchema = new mongoose.Schema({
    name: String,
    author: String,
    isPublish: Boolean
})
// 使用規則創建集合
const Test = mongoose.model("Test", testSchema)

Test.findOneAndDelete({_id: '614b10db6e1eb00816afa281'}).then(res=>console.log(res)) // 返回删除的对象
Test.deleteMany({}).then(res=>console.log(res)) // 返回一个对象表明删除操作成功与否和删除的文档条数