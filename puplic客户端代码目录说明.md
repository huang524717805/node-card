#### puplic客户端代码目录说明

> 程序的入口文件为app.js，所有的代码和资源文件全部存放在assers目录中

1. controllers文件夹存放控制器
2. services文件夹存放调用服务器端api的服务
3. tpl文件夹存储的是模板html文件
4. libs文件夹存储的是使用的第三方框架的源码
5. css和images文件夹下存储的是样式和图片

在app.js中配置页面路由，用于串联控制器和模板

****
服务器端的入口文件为app.js
进入目录运行
    node app.js