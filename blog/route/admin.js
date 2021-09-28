const express = require('express')
const {
    User
} = require('../model/user')
const mongoose = require('mongoose')
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
    page = page ? parseInt(page) : 1
    // get total totalData
    let totalData = await User.countDocuments()
    // how many data in each page
    let eachPageData = 5
    // total page num
    let totalPage = Math.ceil(totalData / eachPageData)
    // get userlist form database
    let userList = await User.find().skip((page - 1) * eachPageData).limit(eachPageData)
    res.render('admin/user', {
        userList,
        totalPage,
        page,
        totalData
    })
})
admin.get('/user-edit', async (req, res) => {
    let {
        id
    } = req.query
    if (id) {
        let sid = mongoose.Types.ObjectId(id)
        let {
            username,
            email,
            password
        } = await User.findOne({
            _id: sid
        })
        console.log(username, email, password);
        res.render('admin/user-edit', {
            username,
            email,
            password
        })
    } else {
        res.render('admin/user-edit')
    }

})
admin.get('/logout', (req, res) => {
    req.session.destroy(() => {
        res.clearCookie('connect.sid')
        res.redirect('/admin/login')
    })
})
admin.get('/delete', async (req, res) => {
    let id = req.query.id

    // await User.findOneAndDelete({_id:id})
    await User.findByIdAndDelete(id)
    res.redirect('/admin/user')

})
module.exports = admin