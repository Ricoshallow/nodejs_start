const fs = require('fs')

let demo = fs.openSync('demo.txt', 'w')
// console.log(demo);

fs.writeSync(demo, 'i am studying you...')

fs.closeSync(demo)