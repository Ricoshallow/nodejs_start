## node基础
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
    该对象用来将变量或者函数暴露到外部
    
    ```require```
    函数用来引入外部模块 

    ```module```
    代表当前模块本身,exports就是module的属性

    ```__filename```
    当前模块的完整路径
    
    ```__dirname```
    当前模块所在文件夹的路径
 