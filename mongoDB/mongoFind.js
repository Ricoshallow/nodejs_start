const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/playground')
    .then(() => console.log('database connect successful'))
    .catch(() => console.log('database connect failed'))

// 設定集合規則
const userSchema = new mongoose.Schema({
    name: String,
    author: String,
    age: Number,
    password: String,
    hobbies: [String]
})
const User = mongoose.model('User', userSchema)

User.find().then(res=>console.log(res))
User.find({_id: '5c09f2b6aeb04b22f846096a'}).then(res=>console.log(res))
User.findOne({name:'李四'}).then(res=>console.log(res))
// 查找年龄大于20 小于40的文档
User.find({age:{$gt:20,$lt:40}}).then(res=>console.log(res))
// 查询hobbies中包含足球的文档
User.find({hobbies:{$in:['足球']}}).then(res=>console.log(res))
// 查询结果显示name email 不显示id
User.find().select('name email _id').then(res=>console.log(res))
// 查询结果按年龄升序排列
User.find().sort('age').then(res=>console.log(res))
// 查询结果跳过2个 限制数量为2
User.find().skip(2).limit(2).then(res=>console.log(res))