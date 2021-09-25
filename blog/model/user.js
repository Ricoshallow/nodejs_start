const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 20
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String
    },
    state: {
        type: Number,
        default: 0
    }
})

const User = mongoose.model('User', userSchema)
// User.create({
//     username: 'ricoshallow',
//     email: 'ricoshaollow@qq.com',
//     password: '123456',
//     role: 'admin',
//     state: 0
// }).then(()=>console.log('user is successully created!')).catch(()=>console.log('user failed'))

module.exports = {
    User
}