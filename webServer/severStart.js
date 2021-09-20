/**
 * webserver构建的基本流程
 */
const http = require('http')
const url = require('url')
const path = require('path')
const fs = require('fs')
const querystring = require('querystring')

const app = http.createServer()

app.on('request', (req, res) => {
    //用url模块获取get请求参数
    let params = url.parse(req.url, true).query
    // 用url模块获取请求路径
    let pathname = url.parse(req.url, true).pathname
    // 处理post请求
    if (req.method == "POST") {
        let params = ''
        // 获取post请求参数(携带在请求体中)
        req.on('data', (data) => {
            params += data
        })
        req.on('end', () => {
            console.log(querystring.parse(params));
        })
        res.end('post ok ' + params)
    }
    // 处理get请求
    else if (req.method == "GET") {
        // 根据不同路由响应不同内容
        if (pathname == '/index' || pathname == '/') {
            res.end('welcome to homepage')
        } else if (pathname == '/list') {
            res.end('list is displaying')
        } else {
            res.end('page is not found')
        }
    }
})
app.listen(3000)
console.log('server is running at localhost:3000');