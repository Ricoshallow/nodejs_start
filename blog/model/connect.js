const mongoose = require('mongoose')


mongoose.connect('mongodb://localhost/blog')
    .then(()=>console.log('database connect successful'))
    .catch(()=>console.log('database connect failed'))
