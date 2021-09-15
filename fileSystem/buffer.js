let str = "i am rico"
// 将字符串保存到buffer中
let buf = Buffer.from(str)
// console.log(buf);
// console.log(buf.length);//占用内存的大小

// 创建指定大小的buffer
let buf1 = Buffer.alloc(10)
// 创建指定大小buffer，但是buffer中可能含有敏感信息
let buf2 = Buffer.allocUnsafe(10)
console.log(buf1,buf2);

//将buffer转换为字符串
console.log(buf2.toString(),buf.toString());




