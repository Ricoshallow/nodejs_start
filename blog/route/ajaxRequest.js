const express = require('express')
const bodyParser = require('body-parser')
const {
    User
} = require('../model/user')

const request = express.Router()
request.get('/', (req, res) => {
    // get请求参数
    console.log(req.query);
    res.send('request page')
})

// 配置body-parser模块
request.use(bodyParser.urlencoded({
    extended: false
}))
request.post('/login', async (req, res) => {
    // res.send ('i am validate the user information...')
    let {
        email,
        password
    } = req.body
    let user = await User.findOne({
        email
    })
    if (user !== null && user.password === password) {
        // 将用户名存储在请求对象中
        req.session.username = user.username
        req.app.locals.userInfo = user
        res.send('correct')
    } else {
        res.send('error')
    }

})
request.post('/addUser',async(req,res)=>{
    // console.log(req.body);
    let {username,email,password,role,state} = req.body
    state = state === 'on'? 1 : 0
    let existEmail = await User.findOne({email})
    // console.log(existEmail);
    if (existEmail){
        return res.send('current email has existed')
        
    } else {
        User.create({
            username,email,password,role,state
        }).then((res)=>console.log(res))
        res.send('correct')
        
    }
})

module.exports = request