const express = require('express')
const path = require('path')
const admin = require('./route/admin')
const home = require('./route/home')
const request = require('./route/ajaxRequest')
const app = express()
require('./model/connect')
// require('./model/user')

let staticPath = path.join(__dirname, 'public')
app.use(express.static(staticPath))

app.engine('art', require('express-art-template'))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'art')

app.use('/admin', admin)
app.use('/home', home)
app.use('/request', request)

app.listen(3000)
console.log('server is running at localhost:3000');