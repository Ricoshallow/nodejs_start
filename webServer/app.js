const http = require('http')
const url = require('url')
const path = require('path')
const fs = require('fs')
const querystring = require('querystring')

const app = http.createServer()

app.on('request', (req, res) => {
    let params = url.parse(req.url, true).query
    let pathname = url.parse(req.url, true).pathname
    if (req.method == "POST") {
        let params = ''
        req.on('data',(data)=>{
            params += data
        })
        req.on('end',()=>{
            console.log(querystring.parse(params));
        })
        res.end('post ok ' + params)
    } else if (req.method == "GET") {
        if (pathname == '/index' || pathname == '/') {
            res.end('welcome to homepage' + params.name + params.age)
        } else if (pathname == '/list') {
            res.end('list is displaying')
        } else {
            res.end('page is not found')
        }
    }
})
app.listen(3000)
console.log('server is running at localhost:3000');