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
   cnpm init -y  //首先用npm的包管理工具把项目管理起来
   
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

## 作用：

1. 自动在内存中根据指定页面生成一个内存的页面
2. 自动把打包好的bundle.js追加到页面中去



# loader配置使用

注意：

~~~
webpack，默认只能打包处理JS类型的文件，无法处理其它非JS类型的文件；

如果要处理非JS类型的文件，我们需要手动安装一些合适第三方loader加载器

1.如果想要打包处理css文件，需要安装
cnpm i style-loader css-loader -D

2.打开webpack.config.JS 这个配置文件，在这里面，新增一个配置节点，叫做module，它是一个对象，在这个module对象身上，有个rules属性，这个rules属性是个数组；这个数组中，存放了，所有第三方文件的匹配和处理规则；
webpack.config.js配置文件代码如下：


const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: path.join(__dirname, './src/main.js'),
	output: {
		path: path.join(__dirname, "./dist"),
		filename: 'bundle.js'
	},
	plugins: [
	    new htmlWebpackPlugin({//创建一个 在内存中生成html页面的插件
	    	//指定 模板页面，将来会根据指定的页面路径，去生成内存中的页面
	    	template: path.join(__dirname, "src", "index.html"),
	    	//指定生成的页面名称
	    	filename: "index.html"
	    })  //配置插件的节点...
	],
	module: {  //这个节点，用于配置所有第三方模块 加载器
		rules: [//所有第三方模块的匹配规则
		{  test: /\.css$/,  use: ['style-loader', 'css-loader']}  //配置处理.css文件的第三方loader规则
		]
	}
}
~~~



## 打包处理less文件

1. 首先局部安装less-loader内部所依赖的包   //-D代表局部   i代表install

   `cnpm i -less -D`

2. 然后安装less-loader 加载器

   `cnpm i -less-loader -D`

3. 再配置文件webpack.config.js中添加rules规则

   ~~~
   	module: {
   		rules: [
   			{ test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader']}
   		]
   	}
   ~~~

   

   ## 打包处理scss文件

   1. 首先局部安装sass-loader内部依赖的包 

      `cnpm i node-sass -D`

   2. 然后局部安装sass-loader加载器

      `cnpm i sass-loader -D`

   3. 再配置文件webpack.config.js文配置rules规则

      ~~~
      	module: {
      		rules: [
      			{ test： /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader']}
      		]
      	}
      ~~~

      

## 分析webpack调用第三方loader的过程

1. 首先，webpack发现，我们并没有通过命令的形式，给它指定入口和出口
2. webpack就会去项目的根目录中，查找一个叫做'webpack.config.js'的配置文件
3. 当找到配置文件后，webpack会去解析执行这个配置文件，当解析执行完配置文件后，就得到了配置文件中，导出的配置对象
4. 当webpack拿到配置对象后，就拿到了配置对象中，指定的入口和出口，然后进行打包构建



# webpack中url-loader的使用

默认情况下，webpack无法处理css文件中的url地址，不管是图片还是字体库，只要是url地址，都处理不了

## 安装url-loader加载器

### 处理图片

1. 安装loader(依赖内部模块file-loader)

   `cnpm i url-loader file-loader -D`	

2. 配置rules

   ~~~
   {test: /\.(jpg|jpeg|png|gif)$/, use: "url-loader?limit=7631"}
   ~~~

3. 在加载器后面加?表示传参

4. limit给定的值，是图片的大小，单位是byte，如果我们引用的图片的大小大于等于limit的值，那么久不会被转为base64格式的字符串，如果图片大小小于给定的limit值，就会被转为base64格式的字符串

5. 继续传参让图片名字跟图片的原名称一样

   ~~~
   {test: /\.(jpeg|jpg|gif|png)$/, use: "url-loader?limit=7631&name=[name].[ext]"}
   ~~~

6. 配置hash值，让图片拥有唯一的名字hash是32位的key设置取前多少位

   ~~~
   {test: /\.(jpeg|jpg|gif|png)$/, use: "url-loader?limit=7631&name=[hash: 8]-[name].[ext]"}
   ~~~

### 处理字体

7. 下载bootstrap@3版本(依赖jquery)   

   注意：这里推荐下载3版本的bootstrap，因为下载4版本会没有字体文件

   `cnpm i bootstrap@3 -D`

8. 在main.js文件中导入bootstrap

   ~~~
   import '../node_modules/_bootstrap@3.4.1@bootstrap/dist/css/bootstrap.css';
   ~~~

9. 在配置文件webpack.config.js中配置rules

   ~~~
   {test: /\.(svg|ttf|woff|woff2|eot)$/, use: "url-loader"}
   ~~~




# webpack和npm中的几个问题

~~~
	1.package.json文件中不能写注释
	
	2.报错提示的单词
	unexpected意外的 token令牌 parse转换/解析
	
	3.在安装包的时候如果因网速原因或者其他原因ctrl+c终止下载，可能会报很多包的错误，是因为包已经被破坏了，这时候只需要将node_modules全部删除，重新下载即可。
	
	4.如果报包的错，package.json中的配置包信息，不能准确保证，当前项目中是否真正有这个包，在packjson中指示记录了这个包曾经安装过，这时候，去node_modules中查看是否有需要的包。
~~~



# webpack中babel的配置

## ES6新语法实现面向对象

~~~
//class关键字，是ES6中提供的新语法，是用来实现ES6中面向对象编程的方式
class Person = {
	//使用static关键字，可以定义静态属性
	//所谓的静态属性，就是可以直接通过类名，直接访问的属性
	//实例属性，只能通过类的实例，来访问的属性，叫做实例属性
	static info = {
		name = "zs",
		age = 22
	}
}
//访问Person类身上的info静态属性
console.log(Person.info);
~~~

**注意：**

在webpack中，默认只能处理一部分ES6的新语法，一些更高级的ES6语法或者ES7语法，webpack是处理不了的;这时候，就需要借助于第三方的loader，来帮助webpack处理这些高级的语法，当第三方loader把高级语法转为低级的语法之后，会把结果交给webpack去打包到bundle.js中



## 通过Babel，可以帮我们将高级语法转为低级的语法

1. 在webpack中，可以运行如下两套命令，安装两套包，去安装Babel相关的loader功能

- 第一套： 

`cnpm i babel-core babel-loader babel-plugin-transform-runtime -D`

- 第二套:

`cnpm i babel-preset-env babel-preset-stage-0 -D`

2. 打开webpack的配置文件，在module节点下的rules数组中，添加一个新的匹配规则:

   - `{test: /\.js$/, use: "babel-loader", exclude: /node_modules/};`

   - 注意： 在配置 babel 的 loader 规则的时候，必须把node_modules 目录，通过 exclude 选项排除掉：

     原因有两：

     1. 如果不排除node_modules，则Babel会node_modules 中的所有第三方JS文件，都打包编译，这样，会非常消耗CPU，同时，打包速度非常慢。

     2. 哪怕，最终Babel把所有的node_modules中的JS转换完毕了，但是，项目也无法正常运行！

3. 在项目的根目录中，新建一个叫做 `.babelsrc`  的配置文件， 这个配置文件，属于JSON格式，所以，在写 `.babelsrc` 配置的时候，必须符合JSON语法规范：不能写注释，字符串必须用双引号

   - 在 `.babelsrc`写如下的配置： 大家可以把 preset 翻译成【语法】的意思

     ~~~
     {
     	"presets": ["env", "stage-0"],
     	"plugins": ["transform-runtime"]
     }
     ~~~



注意：

~~~
	这里遇到的两个错误
	1.在下载第一个包cnpm i babel-core babel-loader babel-plugin-transform-runtime -D
	的时候，有可能会将core下载失败，因为下载babel-loader的时候下载的8x版本，而babel-core是6x版本的，但是要想运行6x版本的babel-core 就需要下载7x版本的babel-loader，
	所以这时候的解决办法就是下载7x版本的babel-loader，指令如下
	cnpm i babel-loader@7 -D
	
	2.第二个错误是ES6中的语法错误，在使用ES6新语法，中的类CLASS中声明静态属性，在内部声明是会报错代码如下：
	class Person {
		static info = {
			name: "zs",
			age: 22
		}
	}
	console.log(Person.info);
	//这里的错误会指向info后的=号，
	
	解决办法：将静态属性在外部声明，代码如下
	class Person {
	
	}
	Person.info = {
		name: "zs",
		age: 22
	}
	console.log(Person.info);
~~~



# vue-webpack结合使用

## 使用resolve节点配置导入完整的vue文件

### 安装：

**安装vue的包 cnpm i vue  -S**

~~~
你应该将 vue-loader 和 vue-template-compiler 一起安装——除非你是使用自行 fork 版本的 Vue 模板编译器的高阶用户：

npm install -D vue-loader vue-template-compiler
vue-template-compiler 需要独立安装的原因是你可以单独指定其版本。

每个 vue 包的新版本发布时，一个相应版本的 vue-template-compiler 也会随之发布。编译器的版本必须和基本的 vue 包保持同步，这样 vue-loader 就会生成兼容运行时的代码。这意味着你每次升级项目中的 vue 包时，也应该匹配升级 vue-template-compiler。
~~~



​	1.在main.js文件中使用  import Vue from "vue" 导入包，但是这是导入的包是不完整的runtime类型的包，如果需要导入完整的包，需要在webpack.config.js中配置resolve属性

~~~
resolve: {
		alias: "vue/dist/vue.js"
	}
	这里将alias: "vue/dist/vue.js"  注释掉	
~~~

​	注意：这个方法虽然方便，但是不能用。因为webpack中，推荐使用 .vue 这个组件模板文件定义组件，所以，需要安装能解析这种文件的loader 

`cnpm i vue-loader vue-template-compiler -D`



1. ​	在src下创建login.vue文件代码如下

~~~
<template>
   <div>
     <h1>这是使用.vue文件创建的模板</h1>
   </div>
</template>

<script>

</script>

<style>

</style>
~~~

3. 在main.js入口文件中配置导入模板的代码(使用render方法渲染组件 )

~~~
//入口文件

//console.log('ok');

import Vue from "vue";
import login from "./login.vue";

/*import Vue from "../node_modules/vue/dist/vue.js";*/

/*var login = {
	template: "<h1>登录组件</h1>"
}*/

var vm = new Vue({
	el: "#app",
	data: {
		msg: "123"
	},
	method: {},
	render: c => c(login)
	/*render简化
	render: function(createElements){
		return createElements(login);
	}*/
	/*components: {
		login
	}*/
})
~~~

### 配置：

 Vue Loader 的配置和其它的 loader 不太一样。除了通过一条规则将 `vue-loader` 应用到所有扩展名为 `.vue` 的文件上之外，请确保在你的 webpack 配置中添加 Vue Loader 的插件：

~~~
// webpack.config.js
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  module: {
    rules: [
      // ... 其它规则
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  plugins: [
    // 请确保引入这个插件！
    new VueLoaderPlugin()
  ]
}
~~~

 **这个插件是必须的！** 它的职责是将你定义过的其它规则复制并应用到 `.vue` 文件里相应语言的块。例如，如果你有一条匹配 `/\.js$/` 的规则，那么它会应用到 `.vue` 文件里的 `script` 块。 



一个更完整的webpack配置实例：

~~~
const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');


//模块输出  输出一个对象 所以是 module.exports
module.exports = {
	entry: path.join(__dirname, 'src', 'main.js'),
	output: {
		path: path.join(__dirname, 'dist'),
		filename: "bundle.js"
	},
	plugins: [
	new htmlWebpackPlugin({
		template: path.join(__dirname, 'src', 'index.html'),
		filename: "index.html"
	}),
	new VueLoaderPlugin()
	],
	module: {
		rules: [
		{test: /\.css$/, use: ['style-loader', 'css-loader']},
		{test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader']},
		{test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader']},
		{test: /\.(jpeg|jpg|gif|png)$/, use: "url-loader?limit=200000&name=[hash:8]-[name].[ext]"},
		{test: /\.(eot|svg|ttf|woff|woff2)$/, use: "url-loader"},
		{test: /\.js$/, use: "babel-loader", exclude: /node_modules/},
		{test: /\.vue$/, use: "vue-loader"}
		]
	},
	resolve: {
		alias: {
			/*"vue$": "vue/dist/vue.js"*/
		}
	}
}
~~~

