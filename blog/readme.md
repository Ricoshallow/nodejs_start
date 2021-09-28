## 登录功能实现
### 流程
- 创建用户集合，初始化用户
- 为登录表单项设置请求地址，请求方式以及表单项name属性
- 当用户点击登录按钮时，客户端验证用户是否填写了登录表单，如果有未填项阻值表单提交(前端验证)
- 服务器端接收请求参数，验证用户是否填写登录表单，如果有未填项，为客户端做出响应，阻止程序向下执行(防止浏览器禁用JavaScript)
- 根据邮箱地址和用户密码进行身份验证，为客户端做出响应(后端验证)

### 登录态保持(cookies + sessionid)
用户登录验证成功后，在当前域名的cookies中保存用户名username
```express-session```模块 实现session功能
```app.use(session({secret: 'secret key'}))```设置cookies中session标识
```req.session.username```拿到session中的属性
```req.session.destroy(()=>{res.clearCookies('');res.redirect('/login')})``` 清除cookies中的username实现退出登录的功能

### 登录拦截
用户未登录时，禁止用户访问用户界面，重定向到登录页面。(判断cookies中是否有username属性)
```javascript
    // 利用express中间件
    app.use('/admin',(req,res,next)=>{
    if(req.url !=='/login' && !req.session.username){
        res.redirect('/admin/login')
    }else{
        next()
    }
})
```
### jQuery  serializeArray() 方法
输出以数组形式序列化表单值结果 $("form").serializeArray()

### 坑
form表单中的button如果没有指定type默认为submit


## 新增用户功能
- 为新增用户表单指定请求地址，请求方式，为表单添加name属性
- 验证客户端传过来的参数格式，以及当前邮箱是否注册过
- 将用户信息添加到数据库中，重定向到用户列表页面

## 数据分页功能
- 当前页，用户通过点击上一页或者下一页或者页码产生，客户端通过get参数方式传递到服务器端
   ``` let page = req.qurey```通过get请求参数获得当前页(/admin/user?page=2)
- 总页数，根据总页数判断当前页是否为最后一页(Math.ceil 总数据条数/每页显示数据条数)
    ```User.countDocuments()```数据库总文档数

## 用户信息删除
- 确认删除框中添加隐藏域 用以存储要删除的用户的ID
- 为删除按钮添加自定义属性用以存储要删除的用户的ID
- 为删除按钮添加点击事件，在点击事件处理函数中获取自定义属性
- 为删除表单添加提交地址以及提交方式
- 接收客户端传过来的id参数，并根据id删除用户

### 坑 
mongoose API中id需要写成_id ```User.findOneAndDelete({_id: '614b10db6e1eb00816afa281'})```