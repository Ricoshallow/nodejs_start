const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/playground')
    .then(() => console.log('database connect successful'))
    .catch(() => console.log('database connect failed'));



// 文章集合
const articleSchema = new mongoose.Schema({
    title: String,
    author: {
        // 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    }
})
const Article = mongoose.model("Article", articleSchema)

// 获取数据库中已经存在的集合
const userSchema = mongoose.Schema()
const User = mongoose.model('users',userSchema,'users')


// Article.create({title: 'love forever',author: '5c09f236aeb04b22f8460967'}).then(res=>console.log(res))
// Article.create({title: 'little prince',author: '5c09f267aeb04b22f8460968'}).then(res=>console.log(res))

//关联查询
Article.find().populate('author').then(res=>console.log(res))