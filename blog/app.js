const express = require('express')
const admin = require('./route/admin')
const home = require('./route/home')
const app = express()

app.use('/admin',admin)
app.use('/home',home)

app.listen(3000)
console.log('server is running at localhost:3000');