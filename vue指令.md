# MVVM

## Vue.js基本代码和MVVM之间的对应关系

MVVM是前端视图层的分层开发思想，主要把每个页面，分成了M、V和VM。其中，VM是MVVM思想的核心，因为，VM是V和M之间的调度者。

前端页面中使用MVVM的思想，主要是为了让我们开发更加方便，因为MVVM提供了数据的双向绑定。

注意：数据的双向绑定是由MVVM提供的。



# VUE指令



## 构造函数语法

#### 示例：

~~~
function Person(firstName, lastName, age, eyeColor) {
    this.firstName = firstName;  
    this.lastName = lastName;
    this.age = age;
    this.eyeColor = eyeColor;
    this.changeName = function (name) {
        this.lastName = name;
    };
}
var person1 = new person('linx','linx-d',22,'blue');
~~~



## Vue之-基本的代码结构和插值表达式、v-cloak

### Vue之-基本的代码结构

~~~javascript
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<script type="text/javascript" src='./lib/vue.js'></script>
</head>
<body>
	<!--渲染数据-->
	<!--将来new的实例会控制这个元素中的所有内容-->
	<div id="one"><p>{{ msg }}</p></div><!--MVVM中的V（展示层）vue实例控制的元素区域就是我们的V-->
	<script type="text/javascript">
		//使用构造函数创建一个vm对象，vue实例。
		//整个vm对象是mvvm中的vm层，就是我们MVVM中的VM调度者
		//当我们导入包之后，在浏览器的内存中，就多了一个vue构造函数
		//vm实例去控制一个id为one的元素
		var vm = new Vue({
			el: '#one',//el属性表示，当前我们new的这个Vue实例，要控制页面上的哪个区域
			data: { //data属性中，可以看做页面的model。存放的是el中要用到的数据也是mvvm中的m层（数据层）。专门用来保存每个页面的数据。
				msg: '欢迎学习vue！'//通过vue提供的指令，很方便的就能把数据渲染到页面上，程序员不再手动操作DOM元素了【前端的vue之类的框架，不提倡我们去手动操作dom元素了】
			}
		});
		/*jquery中往dom元素中添加数据的语法假设p的id为content
		$('$content').text(data.msg);
		*/
	</script>
</body>
</html>
~~~



### 插值表达式

~~~
{{ msg }} 占位符用于替换vm对象中的数据
~~~



### Vue指令之v-cloak、v-text、v-html、v-bind

#### v-cloak

~~~
作用：用于解决插值表达式{{ msg }}闪烁的问题
用法：为标签设置v-cloak属性再在css样式表使用属性选择器，设置显示模式为none隐藏
实例：
<style>
	[v-cloak] {
		display: none;
	}	
</style>
<div id="app">
	<p v-cloak>{{ msg }}</p>
</div>
~~~



#### v-text

~~~
	作用：v-text指令是跟插值表达式的作用相似。将数据导入元素中
	区别：
	v-text指令不存在闪烁的问题。
	v-text会把元素中的内容全部覆盖，而插值表达式只会替代占位符所在位置的内容
	示例：
	<div id="app">
	<p>{{ msg }}</p>
	<p v-text="msg"></p>
	</div>
~~~



#### v-html

~~~
	作用：v-html指令，尽量将数据以html代码的方式解析
	示例：
	<div id="app">
		<div v-html="msg2"></div>
	</div>
	
	<script type="text/script">
		var vm = new Vue({
			el: '#app',
			data: {
				msg2: '<h1>这是一个大大的h1标签</h1>'
			}
		})
	</script>
~~~



#### v-bind:

~~~
	作用：是vue中，提供的用于绑定属性的指令。
	<input type="button" value="按钮" v-bind:title="mytitle">
	注意：v-bind指令可以被简写为英文状态下的冒号(:)后面跟要绑定的属性
	
	在v-bind中可以写合法的js表达式。
~~~

注意：        <!-- v-bind绑定属性，就是把元素中的属性和vue实例中的data属性中的变量（属性）进行绑定，让代码在解析时，自动去vue实例找这个变量 -->

缩写： 	冒号(:)



````html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<script type="text/javascript" src="lib/vue.js"></script>
	<style type="text/css">
		[v-cloak] {
			display: none;
		}
	</style>
</head>
<body>
	<div id="app">
		<!-- v-->
		<!-- v-cloak指令解决插值表达式闪烁的问题 -->
		<p v-cloak>+++++++{{ msg }}-----------</p><!-- v-cloak指令不
		会覆盖元素的内容 -->

		<!-- v-text指令和msg插值表达式的作用相似但也有不用 -->
		<p v-text='msg'>sdsads</p><!-- v-text指令会把元素内所有内容覆盖 -->
		<div v-html='msg2'>
			<!-- v-html指令 作用：会尽量把数据当做html标签来解析同时也会覆盖元素的全部内容 -->
		</div>
		<!-- v-bind：是 vue中，提供的用于绑定属性的指令 -->
		<!-- v-bind用于绑定vm对象中的变量可以简写为英文状态下的冒号(:)后面跟要绑定的属性-->
		<!-- v-bind中，可以写合法的js表达式-->
		<input type="button" v-bind:value="myvalue" v-bind:title="mytitle+'1sss24'">
		<br /><br />
		<input type="button" :value="myvalue" :title="mytitle+'12345'">
	</div>

	<script type="text/javascript">
		var vm = new Vue({
			el: '#app',
			data: {
				msg: '123',
				msg2: '<h1>我是一个h1标签，我是最大的</h1>',
				mytitle: '这是自己定义的一个title属性',
				myvalue: '这是自己定义的一个value属性'
			}
		})
	</script>
</body>
</html>
````



#### v-on:

~~~
	作用：	vue中提供了v-on：事件绑定机制
	new的Vue实例，vm对象中methods属性定义了当前Vue实例所有可用的方法
~~~

缩写：	@

````html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>v-on指令学习</title>
	<script type="text/javascript" src="lib/vue.js"></script>
    <!--导包使用script-->
    <!-- -->
</head>
<body>
	<div id="app">
        <!-- 使用v-bind简写方式绑定属性时，注意要在被绑定属性前加冒号(:) -->
		<input type="button" :value="msg" :title="msg2" v-on:click="show">
	</div>
	<script type="text/javascript">
		var vm = new Vue({
			el: "#app",
			data: {
				msg: "按钮",
				msg2: "定义的按钮",
			},
			methods: {
				show: function(){
					alert("hello");
				}
			}
		});
	</script>
</body>
</html>
````



## 跑马灯效果实现

~~~
使用箭头函数可以解决this的指向问题，
可以通过this访问当前vue实例中的data属性。

vue实例中的方法放在methods对象中，
在声明方法时可以直接使用：
myInterval(){} vue会自动将其识别会 myInterval: function(){}

setInterval()方法在每个给定的时间间隔重复给定的函数。
clearInterval()方法停止setInterval()方法中指定的函数的执行
示例如下：
Interval = setInterval(()=>{},500);
clearInterval(Interval);
~~~



````html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>完善跑马灯效果</title>
	<script type="text/javascript" src="./lib/vue.js"></script>
</head>
<body>
	<div id="app">
		<input type="button" value="浪起来" :title="msg" @click="myInterval">
		<input type="button" value="发育" :title="msg2" @click = "stop">
		<h4>{{ msg3 }}</h4>
	</div>

	<script>
		var vm = new Vue({
			el: "#app",
			data: {
				msg: "浪",
				msg2: "发育",
				msg3: "猥琐发育！别浪....",
				Interval: null
			},
			methods: {
				myInterval(){
					if(this.Interval!=null) return;
					this.Interval = setInterval(()=>{
						var start = this.msg3.substring(0,1);
						var end = this.msg3.substring(1);
						this.msg3 = end+start;
					},500);
				},
				stop(){
					clearInterval(this.Interval);
					this.Interval = null;
				}
			}
		});
	</script>
</body>
</html>
````

