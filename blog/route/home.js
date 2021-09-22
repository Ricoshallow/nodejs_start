const express = require('express')
const home = express.Router()
home.get('/',(req,res)=>{
    res.send('home page')
})

module.exports = home