const express = require('express')
const path = require('path')
const app = express()
let staticPath = path.join(__dirname, 'static')
app.use(express.static(staticPath))
app.listen(3000)
console.log('server is running at localhost:3000')