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

User.updateOne({name: '张三'},{name:'张老三'}).then(res=>console.log(res))
// User.updateMany({},{age: 20})