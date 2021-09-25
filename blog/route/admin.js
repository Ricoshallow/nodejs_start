const express = require('express')

const admin = express.Router()
admin.get('/', (req, res) => {
    res.send('admin page')
})
admin.get('/login', (req, res) => {
    res.render('admin/login')
})
admin.get('/user', (req, res) => {
    res.render('admin/article')
})

module.exports = admin