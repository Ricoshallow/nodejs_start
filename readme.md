## node核心
  - 在node中，一个js文件就是一个模块
  - 在node中，每一个js文件中的js代码都是独立运行在一个函数中
  - 我们可以通过exports来向外部暴露变量和方法
  - 我们可以通过require来引入模块
  - 模块分为两大类

       1. 核心模块：
           由node引擎提供的模块
       2. 文件模块：
           由用户自己创建的模块
  - 在node中有一个全局对象global，与浏览器中的window类似
  - node在执行模块中的代码时，会将代码包裹在函数
   ```function(exports, require,module,__filename,__dirname){}```中
   
    ```exports```
    对象用来将变量或者函数暴露到外部
    
    ```require```
    函数用来引入外部模块 

    ```module```
    代表当前模块本身,exports就是module的属性

    ```__filename```
    代表当前模块的完整路径
    
    ```__dirname```
    代表当前模块所在文件夹的路径


## NPM(node package manager) 
### npm命令：

- ```npm -v``` 查看npm版本
- ```npm version``` 查看所有模块的版本
- ```npm search 包名``` 搜素包
- ```npm install / i 包名``` 安装包
- ```npm remove / r``` 包名 删除包
- ```npm install 包名 --save``` 安装包并添加到依赖中
- ```npm install``` 下载当前项目所依赖的包
- ```npm install 包名 -g``` 全局安装包 

### node包查询机制：

当前目录的node_modules->上级目录的node_modules-> ... ->磁盘根目录的node_modules

## Buffer

### buffer基本概念

- buffer的结构和数组很像，操作的方法也和数组类似，buffer专门用来存储二进制数据
- buffer中存储的都是二进制数据，以16进制形式显示
- buffer中每个元素的范围 00~ff
- buffer中的一个元素占用一个字节，一个英文占用一个字节，一个中文占用三个字节
- buffer大小一旦确定不能修改

### buffer API

- ```Buffer.from(str)``` 将字符串转换为buffer
- ```Buffer.alloc(10)``` 创建指定大小的buffer
- ```Buffer.allocUnsafe(10)``` 创建可能包含敏感信息的指定大小的buffer
- ```buffer.toString()``` 将buffer转换为字符串


## 文件系统

### FS基本概念
fs就是通过Node来操作系统中的文件
fs模块中所有操作都有两种形式可供选择同步和异步

### FS API (sync)
```fs.openSync(path, flags[, mode]) ```

- path: 要打开文件的路径
- flags: 打开文件要执行的操作类型 r只读 w可写
- mode: 设置文件操作权限
返回值: 文件描述符

```fs.writeSync(fd, string[, position[, encoding]])```

- fd: 文件描述符
- string: 要写入的内容

```fs.closeSync(fd) ``` 


- fd: 文件描述符

 ### FS API (async)

```fs.open(path[, flags[, mode]], callback)```
- callback: function(err,fd){}

```fs.write(fd, buffer[, offset[, length[, position]]], callback)```
- callback: function(err,byteWritten,buffer)

```fs.close(fd[, callback])```

- callback: function(err)

```fs.readFile(path[, options], callback)```写入文件
- callback: function(err,data) data为buffer

### FS stream

流式读写适用于大文件，可以分多次将文件写入或读取

```fs.createReadStream(path[, options])``` 创建一个可读流

```fs.createWriteStream(path[, options])``` 创建一个可写流


## webServer

### 核心模块

- ```http```:创建HTTP服务  ```http.createServer((req,res)=>{}).listen(port)```
- ```url```:提供用于网址处理和解析的实用工具  
    ```let param = url.parse(request.url,true).query```获取get参数

    ```let param = url.parse(request.url,true).pathname```获取请求路径

- ```path```:提供了用于处理文件和目录的路径的实用工具

    ```path.extname() ```方法返回 path 的扩展名