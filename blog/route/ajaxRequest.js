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
        res.send('correct')
    } else {
        res.send('error')
    }

})


module.exports = request