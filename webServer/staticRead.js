/**
 * 静态文件读取的基本流程
 */
const http = require('http')
const fs = require('fs')
const url = require('url')
const path = require('path')
const mime = require('mime')
const app = http.createServer()

app.on('request', (req, res) => {

    let pathname = url.parse(req.url, true).pathname
    pathname = pathname == '/' ? '/default.html' : pathname
    // 将浏览器端请求的地址转换为静态资源在磁盘中的地址
    let staticPath = path.join(__dirname, 'static' + pathname)
    let type = mime.getType(staticPath)
    // 读取静态资源文件，响应给浏览器
    fs.readFile(staticPath, (err, data) => {
        // console.log('file is reading...');
        if (!err) {
            // 设置响应头。用mime模块来获取对应资源的content-type
            res.writeHead(200, {
                'Content-Type': type
            })
            res.end(data)
        } else {
            res.end('file reading failed')
        }
    })
})
app.listen(3000)
console.log('Server is runing at locahost:3000')