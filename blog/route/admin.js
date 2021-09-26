const express = require('express')
const {
    User
} = require('../model/user')

const admin = express.Router()
admin.get('/', (req, res) => {
    res.send('admin page')
})
admin.get('/login', (req, res) => {
    res.render('admin/login')
})
admin.get('/user', async (req, res) => {
    // get current page 
    let {
        page
    } = req.query
    page = page? parseInt(page) : 1
    // get total totalData
    let totalData = await User.countDocuments()
    // how many data in each page
    let eachPageData = 5
    // total page num
    let totalPage = Math.ceil(totalData / eachPageData)
    // get userlist form database
    let userList = await User.find().skip((page-1)*eachPageData).limit(eachPageData)
    res.render('admin/user', {
        userList,totalPage,page,totalData
    })
})
admin.get('/user-edit', (req, res) => {
    res.render('admin/user-edit')
})
admin.get('/logout', (req, res) => {
    req.session.destroy(() => {
        res.clearCookie('connect.sid')
        res.redirect('/admin/login')
    })
})

module.exports = admin