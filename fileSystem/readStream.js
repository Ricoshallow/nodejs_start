const fs = require('fs')
// 创建一个可读流
let rs = fs.createReadStream("D:/搜狗高速下载/picture/冥想.jpg")
// 创建一个可写流
let ws = fs.createWriteStream("mind.jpg")
// pipe()可将可读流中的内容输出到可写流中
// rs.pipe(ws)

// 读取一个可读流中的数据，可以为可读流绑定一个data事件
rs.on('data', function (data) {
    //较大的文件分流读取
    console.log(data);
})