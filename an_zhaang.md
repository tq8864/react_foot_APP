### 已装：
        √    1). create-react-app xxx
        √    2). yarn eject
                yarn start
                yarn remove 卸载
        √    3). 数据模拟(mock): yarn add mockjs  json-server -s  (端口号：3333)       改端口号：mock文件夹 =》 server.js(最后一行)
        √    4). props类型检查：yarn add prop-types -s

        √    5). SCSS 是 Sass 3 引入新的语法:yarn add node-sass -s

					配置修改config/webpack.config.js 找 到 sassModuleRegex/sassRegex 替换 use值
						use: [
					              {loader:'style-loader'},
					              {loader:'css-loader?modules'}, 
					              {loader:'sass-loader'},
					              {
					                loader: 'sass-resources-loader',
					                options:{
					                  resources:'./src/xx/全局主题.scss'
					                }
					              }
					            ]
					   注意: 
					   		loader:'css-loader?modules'    ?modules 模块化时需要添加
					   		resources 指向作用域在项目环境下（package.json）
            6). 去除eslint 警告：
                    yarn  eject
                    找到项目下config/webpack.config.js
                    注释关于eslint的rules规则

        √    7).create-react-app 2.x/3.x 代理：(解决跨域): yarn add http-proxy-middleware -s
            
                新版本cra脚手架在package.json中使用proxy只能用字符串了。
                
                方案1: 
                    配置: package.json
                        "proxy":"https://uncle9.top:3000"

                    组件： /api/xx ...

                问题： 只能代理一个服务器
                
                官网给了新的使用方式，在src下新建文件setupProxy.js加下面代码，无需单独应用，webpack会自动引入文件。

                解决:
                    安装：yarn add http-proxy-middleware -s
                    src/ 创建 setupProxy.js

                    const proxy = require('http-proxy-middleware'); //需要安装中间件

                    module.exports = function(app) {
                    app.use(
                        proxy("/api", {
                        target: 'https://uncle9.top',
                        changeOrigin: true
                        })
                    );
                    app.use(
                        proxy("/v2", {
                        target: "https://api.douban.com",
                        changeOrigin: true
                        })
                    );

                    };

                    组件： /api/xx ... | /v2/... 
          √  8). 安装：yarn add query-string -s

                无法从v4 中获取 URL 的查询字符串了。
                因为没有关于如何处理复杂查询字符串的标准。
                所以，作者让开发者去选择如何处理查询字符串。
                推荐query-string库
          √  9).路由搭建：yarn add react-router-dom
          √  10).yarn add axios -s
          √  11).安装第三方插件：yarn add antd-mobile --save  
          √  12).yarn add pubsub-js -S 订阅发布模式（在npm.com中查询使用方法--视频在11月19日最后面）
		