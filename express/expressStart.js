const express = require('express')
const promisefy = require('util').promisify
const fs = require('fs')
const readFile = promisefy(fs.readFile)
const bodyParser = require('body-parser')
const app = express()

// 网站维护公告，定义接受所有请求的中间件
// app.use((req,res,next)=>{
//     res.send('网站正在维护...')
// })

// 路由保护，登录态允许访问
// let isLogin = true 
// app.use((req,res,next)=>{
//     if(isLogin){
//         next()
//     }else{
//         res.send('please login first...')
//     }

// })

app.get('/list', (req, res, next) => {
    res.send('the list is displaying...')
})
app.get('/home', (req, res) => {
    res.send('welcome to the homepage...')
})

// 错误处理中间件
app.get('/error', (req, res) => {
    throw new Error('some error happend!!!')
})
app.use((err, req, res, next) => {
    res.status(500).send(err.message)
})

// 异步错误处理
app.get('/file', async (req, res, next) => {
    try {
        let data = await readFile('../package-lock.json')
        res.send(data)
    } catch (error) {
        next(error)
    }

})

// get请求参数获取
app.get('/get', (req, res) => {
    res.send(req.query)
})

// post请求参数获取
// 配置body-parser模块
app.use(bodyParser.urlencoded({
    extended: false
}))
app.post('/post', (req, res) => {
    res.send(req.body)
})

// 没有找到指定路由的资源 展示404页面
app.use((req, res) => {
    res.send('404 not found...')
})

app.listen(3000)
console.log('server is runing at localhost:3000')