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

   