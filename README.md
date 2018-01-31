# taoFE项目框架(仅供个人学习使用)

> taoFE项目以gulp作为脚手架，提供本地开发、webpack打包、java环境服务、数据mock等功能


## 1. 安装依赖
本地需要支持node.js、gulp等基础工具。开发人员需要对node.js、gulp、webpack、commonJS、JSTL语法等有一定了解
在本地工程里面命令行启动`(c)npm install`即完成安装

## 2. 启动命令
> gulp server
一键启动环境，对当前工程静态资源会自动执行less编译、webpack构建、实时监听、java环境配置、路由识别、页面渲染等工作。
默认端口为9999，启动完毕后打开localhost:9999即可查看当前页面。

## 3.项目目录
```
├── README.md				
├── gulpfile.js             //gulp执行目录
├── lib                     //内部调用资源
│   
├── mock_server             //mock服务器
│   ├── data
│   │   └── home.json
│   ├── index.js           //服务器配置文件
│   ├── routes.js          //服务器路由文件
│   └── views
├── package.json          
├── src                      //开发目录
│   ├── assets               //静态资源
│   │   ├── components         //js模块
│   │   └── less               //less模块
│   └── pages				 //页面
│       ├── home               //每个页面组成一个独立的开发目录
│       └── partials           //页面公共部分
├── tasks					//gulp子命令
│   ├── mock-server.js
│   └── webpack.js
└── webpack.config.js       //webpack配置文件
```

## 4. 路由规则
路由需要在mock_server/routes.js里面配置，详细规则是：
```
'[method]::[route_url]': '[template_file]'
```
mock数据规则：

+ 默认http请求方法为get，需要post方法则key值前需加上post::
+ 为了区分页面路由还是同步/异步渲染方式，后者需要在value前加mock::区分
+ 同步渲染数据源json文字名字需要与对应jsp文件名字一样
+ 异步数据支持json(ajax)，也支持js输出(jsonP)


其他配置见[fds主页](https://github.com/zhex/fe-dev-server)

## 4. less模块规范
为了更好组织样式文件，统一采用less开发样式，webpack会自动编译成css。
全站公共样式在src/assets/less下，统一打包成common.less，在每个页面的entry js里面引入common.js和页面less文件。
开发环境下css会通过style的形式引入，非开发方式会打包成一个独立的css vedors文件。

```
//index.js
require('../../assets/less/common.less');  //基础模块
require('./index.less');     //业务模块
```

## 5.js模块规范
js模块遵循commonJS规范，通过webpack进行模块化引用和打包工作。
执行webpack方法后，页面会生成一个公共的vendors文件和业务js。
开发时候需要做的就是在执行页面脚本前先加载模块。
```
//index.js
require('../../assets/less/common.less');
require('./index.less');

require("./a.ejs");

console.log("首页");
```

## 6.编译

本地执行如下命令
```
gulp build -e production
```
会将源代码编译到dist目录，再本地执行git push代码即可
