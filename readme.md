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

- ```http```:创建HTTP服务  

    ```javascript
    http.createServer((req,res)=>{
        req.method // 请求方法
        req.headers // 请求报文
        req.url // 请求地址(包含get请求参数)
        res.writeHead(statusCode, {'content-type': 'htmlType;charset=utf-8'}) // 设置响应头状态码和文件类型并防止中文乱码

        // post请求参数放置在请求体中进行传输，需要通过监听data和end事件进行处理 
        let params = ''
        req.on('data',(data)=>{
            params += data
        })
        req.on('end',()=>{
            console.log(params);
        })

        res.end() // 响应给客户端的信息
    }).listen(port)
    ```
- ```url```:提供用于网址处理和解析的实用工具  
    ```let param = url.parse(request.url,true).query```获取get参数

    ```let url = url.parse(request.url,true).pathname```获取请求路径

- ```querystring```:将post参数转换为对象格式

- ```path```:提供了用于处理文件和目录的路径的实用工具

    ```path.extname() ```方法返回 path 的扩展名
    ```path.join(__dirname,'')``` 方法拼接静态资源的的绝对路径
- ```mime``` 媒体类型映射综合库
    ```mime.getType(staticPath)``` 方法返回路径对应的mime

## mongodb
### 数据库核心

- database：数据库
- collection：集合，一组数据的集合
- document：文档，一条具体的数据
- field：字段，文档中的属性名称
### 增刪改查 
- 连接数据库 ```mongoose.connect()```
- 增 [(mongodb增加文档)](./mongoDB/mongoAdd.js)
     - 创建集合 ```new mongoose.Schema({})``` ```mongoose.model```
     - 向集合中插入数据 ```save()``` ```Collection.create()```
- 查 [(mongodb查询文档)](./mongoDB/mongoFind.js)
    - 全局查询 ```Collection.find()```
    - 通过字段查询 ```Collection.find({id:xxxxxx})```
    - 查找一个 ```Collection.findOne({id:xxxxxx})```
    - 按条件查找 ```....```
    - 获取数据库中已经存在的集合
    ```javascript 
    const userSchema = mongoose.Schema()
    const User = mongoose.model('User',userSchema,'users')
    ```
- 改 
    ```User.updateOne({name: old},{name: new})```

    ```User.updateMany()```
- 删
    - 删除一个指定文档，结果返回删除的文档 ```Collection.findOneAndDelete({id: xxxxx})```
    - 删除全部文档，结果返回删除状态和删除的总条数  ```Collection.deleteMany({})```
### 集合关联
    - 使用id对集合进行关联
    - 使用populate方法进行关联集合查询
### 导入数据
```mongoimport -d 数据库名称 -c 集合名称 -file要导入的数据文件```

## Art-template
### 标准语法
- ```{{data}}```
- ```{{@data}}```原文输出
- ```{{if}}{{else}}{{/if}}```条件
- ```{{each data}}{{$value $index}}{{/each}}```循环
### 原始语法
- ```<%=data%>```
- ```<%-data%>```原文输出
### 子模版
```{{include 'path'}}```引入子模版
```{{extend 'layout path'}}  {{block 'JavaScript'}}special JavaScript{{/bloack}}``` 继承公共骨架 填充自有内容
### 模板配置
- ```template.defaults.imports.变量``` 配置变量
- ```template.defaults.root``` 配置根目录
- ```template.defautls.extname``` 配置模板默认后缀
## express框架
### 核心
- 提供方便简洁的路由定义方式
    ```app.get('/home',(req,res)=>{})```
- 对获取HTTP请求参数进行简化处理
    - get请求参数获取

        ```app.get('/get',(req,res)=>{req.query})```
    - post请求参数获取(用第三方模块body-parser)

         ```app.post('/post',(req,res)=>{req.body})```
- 对模板引擎支持程度高，方便渲染动态HTML
    [(模板引擎示例)](./express/expressArtTemplate.js)
- 简单的静态资源访问代码

    ```app.use(express.static(staticPath))```
- 提供中间件机制有效控制HTTP请求

   ```app.get('/home',(req,res,next)=>{next()})```

   ```app.use((req,res,next)=>{next()})```匹配所有请求方式和请求路径

### 中间件应用
   1. 路由保护，登录状态允许访问(调用next方法)，否则重定向到登录页面
   ```app.use((req,res,next)=>{if (islogin) next()})```
   2. 网站维护公告，定义接收所有请求的中间件(最上面)
   ```app.use((req,res,next)=>{res.send('server is debuging')})```
   3. 定义404页面(最下面)
   ```app.use((req,res,next)=>{res.status(404).send('page not found')})```
   4. 错误处理
   ```app.use((err,req,res,next)=>{res.status(500).send(err.message)})```

### express-session
    实现session功能

 