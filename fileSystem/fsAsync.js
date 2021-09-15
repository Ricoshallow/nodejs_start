const fs = require('fs')

fs.open('demoAsync.txt','w',function(err,fd){
    if(!err){
        console.log('文件读取成功');
        fs.write(fd,"i am studying async...",function(err){
            if (!err){
                console.log('文件写入成功');
            }
            fs.close(fd,function(err){
                console.log('文件关闭成功');
            })

        })
    }
})

console.log('开始进行文件读写关的异步操作');