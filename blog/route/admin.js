const express = require('express')
const {User} = require('../model/user')

const admin = express.Router()
admin.get('/', (req, res) => {
    res.send('admin page')
})
admin.get('/login', (req, res) => {
    res.render('admin/login')
})
admin.get('/user', async(req, res) => {
    // get userlist form database
    let userList = await User.find()
    // console.log(userList);
    res.render('admin/user',{
        userList
    })
})
admin.get('/user-edit',(req,res)=>{
    res.render('admin/user-edit')
})
admin.get('/logout',(req,res)=>{
    req.session.destroy(()=>{
        res.clearCookie('connect.sid')
        res.redirect('/admin/login')
    })
})

module.exports = admin