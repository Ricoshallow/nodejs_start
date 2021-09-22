const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/playground')
    .then(() => console.log('database connect successful'))
    .catch(() => console.log('database connect failed'))

// 设定集合规则
const testSchema = new mongoose.Schema({
    //验证规则
    name: {
        type: String,
        required: [true,'please input name'],
        maxlength: 10,
        minlength: 2,
        // 去除字符串两端空格
        trim: true
    },
    author: String,
    isPublish: Boolean
})
// 使用规则创建集合
const Test = mongoose.model("Test", testSchema)

// // 创建文档
// const test1 = new Test({
//     name: 'js',
//     author: 'rico',
//     isPublish: true
// })
// // 保存文档
// test1.save()

// 插入文档另一种方法
Test.create({
    name: 'html',
    author: 'rico',
    isPublish: true
}).then(doc => console.log(doc)).catch(err => console.log(err))
Test.create({
    name: 'js',
    author: 'rico',
    isPublish: true
}).then(doc => console.log(doc)).catch(err => console.log(err))
Test.create({
    name: 'css',
    author: 'rico',
    isPublish: false
}).then(doc => console.log(doc)).catch(err => console.log(err))