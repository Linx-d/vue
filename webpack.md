# cnpm使用webpack

~~~~
	注意：如果使用cnpm指令未成功，就先配置cnpm
	
	通过cnpm使用：
	npm install -g cnpm --registry=https://registry.npm.taobao.org
	
	恢复使用：
	npm config set registry https://registry.npmjs.org
~~~~



# 实际创建webpack项目步骤

1. 先全局安装webpack和webpack-cli

   ~~~~
   cnpm install webpack -g
   cnpm install webpack-cli -g
   ~~~~

   只需安装一次就够了，以后创建项目就不在需要全局安装webpack和webpack-cli

   注意：cnpm是使用淘宝镜像的指令以下指令皆遵循此原则。如果安装npm成功则不需要使用cnpm，使用npm即可

2. 在指定盘符中创建项目（新建文件夹这里就是项目根目录）

`   注意这里创建项目的名称不能带有特殊字符，统一使用小写字母命名`

3. 在项目中创建以下目录

   ~~~
   dist{
   
   }
   src{
   	js文件夹
   	css文件夹
   	images文件夹
   	index.js文件
   	index.html文件
   }
   ~~~

4. 在项目根目录中使用cmd通过shift+鼠标右键 打开cmd窗口

5. 在窗口中局部安装webpack和webpack-cli

   ~~~~
   cnpm install webpack --save-dev
   
   cnpm install webpack-cli --save-dev
   ~~~~

6. 在cmd窗口下载相应的包（例如jquery）

   ~~~
   cnpm init -y
   
   cnpm i jquery -S     //这里的i是install的缩写
   ~~~

7. 这时项目中的文件如下

   ~~~
   dist{                 //文件夹
   
   }
   
   src{                 //文件夹
   	js文件夹
   	css文件夹
   	images文件夹
   	index.js文件
   	index.html文件
   }
   
   package.json文件
   
   node_modules{                 //文件夹
    //若干文件
   }
   ~~~

   注意：

   ~~~
   The 'mode' option has not been set, webpack will fallback to 'production' for this value. Set 'mode' option to 'development' or 'production' to enable defaults for each environment.
   
   以上的警告指的是没有设定是开发模式还是生产模式,要求指定.
   
   只需要在项目中的package.json中script中配置上
   ————————————————
   版权声明：本文为CSDN博主「Day____Day____Up」的原创文章，遵循 CC 4.0 BY-SA 版权协议，转载请附上原文出处链接及本声明。
   原文链接：https://blog.csdn.net/weixin_37281289/article/details/79849293
   ~~~

   

8. 在package.json文件中script中配置上以下两句代码即可

   ~~~
   "dev": "webpack --mode development",
   "build": "webpack --mode production"
   ~~~

9. 在cmd中输入

   ~~~
   cnpm run dev   //指定开发环境运行
   cnpm run build  //指定生产环境运行
   ~~~

   

# webpack能做什么

静态资源拖慢网页运行速度

1. 能过处理JS文件的相互依赖关系

2. webpack能够处理JS的兼容问题，把高级的浏览器不识别的语法，转为低级的浏览器能正常识别的语法。

   

   注意： 运行的命令的格式 ：

   ~~~
   	webpack 要打包的文件的路径 打包好的输出文件的路径
   ~~~

## wepack配置文件

~~~
当我们在控制台，直接输入webpack命令执行的时候，webpack做了以下几步
~~~

- 首先，webpack发现，我们并没有通过命令的形式，给它指定入口和出口

- webpack就回去项目的根目录中，查找一个叫做`webpack.config.js`的配置文件

- 当找到配置文件后，webpack会去解析执行这个配置文件，当解析执行完配置文件后，就得到了配置文件中，导出的配置对象

- 当webpack拿到配置对象后，就拿到了配置对象中，指定的入口和出口，然后进行了打包构建。

- **webpack.config.js配置文件如下：**

  ~~~
  const path = require('path');
  module.exports = {
  	entry: path.join(__dirname, "src", 'main.js'),   //入口文件
  	output: {
  		path: path.join(__dirname, "dist"),  //出口地址
  		filename: "bundle.js"   //输出文件名称
  	}
  }
  ~~~

  

# 自动打包编译

- 使用webpack-dev-server 这个工具，来实现自动打包编译的功能

~~~
	1.运行 cnpm i webpack-dev-server -D 
    把这个工具安装到项目的本地开发依赖
    
    2.更改package.json中的dev     //注意使用自动打包工具，必须局部安装webpack
    "dev": "webpack --mode development webpack-dev-server"
    
    3.运行 cnpm run dev
    //作用
    在更改代码之后，自动打包文件，开发者只需要刷新页面即可。
    
    4.webpack-dev-server帮我们打包生成的bundle.js文件， 并没有存放到实际的物理磁盘上；二是，直接托		管到了电脑内存中，所以，我们在项目根目录中，根本找不到这个打包好的bundle.js
    
    5.我们可以认为，webpack-dev-server 把打包好的文件， 以一种虚拟的形式，托管到了咱们项目的根目中，		虽然我们看不到它，但是，可以任务，和dist src node_modules 平级，有一个看不见的文件，叫做			bundle.js
~~~

- webpack-dev-server的常用命令

~~~
	在package.JSON里的dev脚本命令中传参传一些相关指令：
	--open 自动打开浏览器
	--port 3000 指定3000端口
	--contentBase src 以src为根路径 这样就会以src目录进行整个项目托管
	--hot 热重载热更新（只应用少量的更新就能刷新页面，能减少不必要的代码更新）
	
	dev脚本中最终的代码如下：
	"dev": "webpack-dev-server --open --port 3000 --contentBase src --hot --mode development"
~~~



# 使用html-webpack-plugin插件配置启动页面

由于使用  --contentBase  指令的过程比较繁琐，需要制定启动的目录，同时还需要修改index.html中script标签的src属性，所以推荐大家使用 html-webpack-plugin 插件配置启动页面

~~~
	1. 运行 cnpm i html-webpack-plugin --save-dev 安装到开发依赖
	2. 修改webpack.config.js 配置文件如下：
		//导入处理路径的模块
		const path = require('path');
		//导入自动生成html文件的插件
		const htmlWebpackPlugin = require('html-webpack-plugin');
		
		module.exports = {
		entry: path.join(__dirname, "src", "main.js"), //项目入口文件
		output: {//配置输出选项
		path: path.join(__dirname, "dist"), //配置输出的路径
		filename: "bundle.js" //配置输出的文件名
		},
		plugins: [//添加plugins节点配置插件
			new htmlWebpackPlugin({
			template: path.join(__dirname, "src", "index.html"),
			filename: "index.html"//自动生成的html文件的名称
			})
		]
		}
~~~

