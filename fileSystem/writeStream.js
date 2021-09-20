const fs = require('fs')
// 创建一个可写流
let ws = fs.createWriteStream('stream.txt')
// 通过监听流的open和close事件来监听流的打开和关闭
ws.once('open', function () {
    console.log('streaming is open...');
})

// 通过ws想文件中输出内容
ws.write('i am streaming data')
ws.write('i am streaming data')
ws.write('i am streaming data')
// 关闭流:close只能写入一次
ws.end()