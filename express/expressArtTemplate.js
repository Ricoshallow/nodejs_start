const express = require('express')
const path = require('path')

const app = express()
// 公共数据-所有模板都能拿到
app.locals.users = [{
    name: 'rico',
    age: 18
}, {
    name: 'carol',
    age: 17
}]

// 告诉express使用什么模板引擎 渲染什么后缀的模板引擎
app.engine('art', require('express-art-template'))

// 告诉express模板存在的位置
app.set('views', path.join(__dirname, 'views'))

// 告诉express模板的默认后缀
app.set('view engine', 'art')

app.get('/index', (req, res) => {
    // 渲染模板
    res.render('index', {
        msg: 'message'
    })
})
app.get('/list', (req, res) => {
    res.render('list', {
        msg: 'list page'
    })
})
app.listen(3000)
console.log('server is running at localhost:3000');