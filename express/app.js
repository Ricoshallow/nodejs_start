const express = require('express')
const app = express()

// app.get('/', (req, res) => {
//     res.send('hello express')
// })
// app.get('/list', (req, res) => {
//     res.send({
//         name: 'rico',
//         age: 18
//     })
// })
app.use((req,res,next)=>{
    req.name = 'rico'
    console.log('拦截了所有请求');
    next()
})
app.use((req,res,next)=>{
    res.send(req.name)
})


app.listen(3000)
console.log('server is runing at localhost:3000')