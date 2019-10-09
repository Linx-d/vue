# 初始化Git仓储/（仓库）

- 这个仓库会存放，git对我们项目代码进行备份的文件
- 在项目目录右键打开 git bash here
- 执行命令`git init`  备注（进入仓库里面）

## 自报家门（配置信息）
- 就是在git中设置当前使用的用户是谁
- 每一次备份都会把当前备份者的信息存储起来
- 命令：
    + 配置用户名: `git config --global user.name "xiaoming"` 
    + 配置邮箱: `git config --global user.email "xiaoming@sina.cc"`

## 把大象放到冰箱要几步
1.打开冰箱门
2.放大象
3.关上冰箱

## 把代码存储到.git仓储中
1.放到大门口 
+ `git add ./readme.md`   把指定的文件放到大门口
+ `git add ./`   把所有的修改的文件添加到大门口  
+ `git add .` **git add .** ：会监控工作区的状态树，使用它会把工作时的所有变化提交到暂存区，包括文件内容修改(modified)以及新文件(new)，但不包括被删除的文件。

2.把仓储门口的代码放到仓储房间里 

+ `git commit -m "我们完成了第一个功能！"`   备注（这是对这次的代码提交的说明）
+ `git commit --all -m "一些说明"`   备注 ： **--all表示把所有修改的文件一次性提交到版本库**
~~~注意如果第2步中的代码少写了 -m 会进入一个输出窗口，执行以下操作
1.按esc 
2.在英文输入状态下输入:q! 退出窗口（添加感叹号!为强制退出，不加为退出） 
~~~

# 可以一次性把我们修改的代码放到房间里（版本库）

~~~
git commit --all -m "注释说明"
--all 表示把所有修改的文件提交到版本库
~~~



# 查看当前的状态

- 输入 git status看窗口中绿色的字，检查当前是否把文件放到暂存区了
- 可以用来查看当前代码有没有被放到仓储中去
（status状态）
- 命令: `git status`



# git中的忽略文件

- .gitignore,在这个文件中可以设置要忽略的文件或者目录。
- 被忽略的文件不会被提交到仓储中去。
- 在.gitignore中可以书写要被忽略的文件的路径，以/开头，一行写一个路径，这些路径所对应的文件都会被忽略，不会被提交到仓储中
  - 写法 
    - `/.idea` 会忽略.idea 文件
    - `/js` 会忽略js目录中的所有文件
    - `/js/*.js` 会忽略js目录下所有js文件

# 查看日志

查看历史提交的日志

```
   git log 查看日志详细信息
   git log --oneline 更精简的日志信息

```

# 版本回退

## 回退到指定的版本

~~~
git reset --hard head~0
//表示回退到上一次代码提交的时候
~~~



~~~
git reset --hard head~1
//表示回退到上上次代码提交的时候
~~~



~~~
git reset --hard [版本号]
//表示回退到指定版本号提交的时候
~~~



# 查看历史行为记录

~~~
git reflog
//可以看到每一次切换版本的记录，也可以看到所有历史的行为记录
~~~



# 分支

- 默认是有一个主分支master

## 创建分支

~~~
git branch dev
//创建一个与主分支互不干扰的dev分支
在刚创建时 dev分支例的东西和master分支例的东西是一样的
~~~

## 切换分支

~~~
git checkout dev
//切换到指定的分支，这里的切换到名为dev的分支
	git branch
	//查看当前有哪些分支
	哪个分支前面有*号就代表当前处于哪个分支。
~~~

## 合并分支

~~~
git merge dev
//合并分支内容，把当前的分支和指定的分支，进行合并（这里的代码指的是在master分支上合并dev分支）

//合并时如果有冲突，需要手动去处理，处理后还需要再提交一次。
~~~

~~~
重构：
git branch dev 创建名称是dev的分支
git checkout master 选择master主分支
git merge dev 与指定分支合并（有可能发生冲突，需要手动处理）
git branch 查看分支列表
git branch -d dev 删除dev分支
~~~

## 删除分支 

~~~
git branch -d dev
//dev是分支名字
~~~



# GitHub

- https://github.com
- 不是git，只是一个网站
- 只不过这个网站提供了允许通过git上传代码的功能

## 提交代码到github（当做服务器来用）

~~~
	语法:git push [地址] master
	示例:git push https://github.com/Linx-d/test113.git master
~~~

- 会把当前分支的内容上传到远程的master



## 获取远程分支的数据

### 1.开发过程中常用的pull

~~~
	语法: git pull [地址] master
	示例: git pull https://github.com/Linx-d/test113.git master
	作用: 会得到远程分支的数据.(*注意本地-要初始一个仓储!**多次获取数据会进行响应的整合*)
~~~

### 2.不常用的克隆clone

~~~
	语法: git clone [地址]
	示例: git clone https://github.com/Linx-d/test113.git
	作用：会得到远程仓储相同的数据 （注意多次获取数据会被覆盖）
~~~



## 上传地址

~~~
https://github.com/Linx-d/test113.git
~~~



~~~
上传到我的心里
~~~



## SSH提交项目

### 1.生成公钥和私钥

- 在任何一个项目中右键打开git bash here
- 输入命令:

~~~
ssh-keygen -t rsa -C "mai@bo.com"
//在C盘下的用户中的Administrator下的.ssh文件中生成了公钥id_rsa.pub和私钥id_rsa
~~~

- 提交代码赋值ssh地址

~~~
语法：git push [地址] master
示例：git push git@github.com:Linx-d/test118.git master
//使用ssh不用输入账户密码，更方便，安全性更高
~~~

- ssh上传地址

~~~
git@github.com:Linx-d/test118.git
~~~



再次添加了一个功能

这是小红添加的功能

# push和pull简化

~~~
生成公钥和私钥
ssh-keygen -t rsa -C "mai@bo.com"
生成的公钥和私钥保存在C盘下的用户中的Administrator中的.ssh文件中
id_rsa.pub是公钥  id_rsa是私钥
将公钥在github中设置好
下次再上传项目的时候就不用输入账户密码
上传项目语法：	git push git@github.com:Linx-d/test118.git master
~~~



## 第一步:绑定起源origin

~~~
git remote add origin git@github.com:Linx-d/test118.git
~~~



## 第二步:与服务器github建立连接

~~~
在push项目时添加-u
git push origin -u master
执行以上代码之后，以后在当前项目下只需要是通过git push就能上传项目，以及git pull就能下载项目。

注意：在上传项目之前需要先将项目保存到本地仓储中，在更新项目之前，需要先将服务器最新版下载下来，以防止冲突（可以在本地解决好冲突在上传服务器）
~~~





加油

~~~
有没有想过穿过这片沙漠
管它六合八荒斗一场
~~~

