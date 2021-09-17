const fs = require('fs')
let path = "C:/Users/yjf/Desktop/自我介绍.txt"
fs.readFile(path,function(err,data){
    if(!err){
        console.log(data.toString());
    }
})