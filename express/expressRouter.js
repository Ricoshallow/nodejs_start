const express = require('express')

const app = express()
// 构建路由对象
const home = express.Router()
const admin = express.Router()
// 创建二级路由
home.get('/', (req, res) => {
    res.send('welcome to homepage')
})
admin.get('/', (req, res) => {
    res.send('welcome to admin')
})
//路由参数
app.get('/params/:id/:name/:age', (req, res) => {
    res.send(req.params)
})
// 将路由和请求路径匹配
app.use('/home', home)
app.use('/admin', admin)
app.listen(3000)
console.log('server is running at localhost:3000');