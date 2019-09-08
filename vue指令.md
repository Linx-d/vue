# MVVM

## Sublime快捷键

~~~
shift home选择这一行
ctrl d 选择页面中所有的选中的代码
~~~



## BootStrap知识点

### 使用BootStrap步骤：

1.先导入bootstrap的CDN

~~~
<!-- 最新版本的 起步链接https://v3.bootcss.com/getting-started/ -->

<!-- 最新版本的 Bootstrap 核心 CSS 文件 -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">

<!-- 可选的 Bootstrap 主题文件（一般不用引入） -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">

<!-- 最新的 Bootstrap 核心 JavaScript 文件 -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" 
crossorigin="anonymous"></script>

~~~

2.类知识点

~~~
为元素添加类 
1.table赋予表格基本样式
2.table-bordered 赋予表格和其中每个单元格增加边框
3.table-striped 给tbody的每一行增加斑马条纹样式
4.table-hover 可以让tbody中的每一行对鼠标悬停状态作出相应
<table class="table table-bordered table-hover table-striped"></table>

为父元素添加类 class="form-inline" 可以让子元素在一行显示

按钮的类 
1.btn 赋予按钮基本样式 
2.btn-primary 赋予带情景的按钮
<input type="button" class="btn btn-primary" />

输入框的类
1.control 赋予输入框基本样式
<input type="text" class="control" />

带标题的面版 
1.panel 赋予基本的面版样式
2.panel-primary 赋予面版情景效果 
3.panel-heading 赋予面版的头部基本样式 可以和panel-primary配合使用
4.panel-body 赋予面版的主体基本样式
<div class="panel panel-primary">
  <div class="panel-heading">
    <h3 class="panel-title">Panel title</h3>
  </div>
  <div class="panel-body">
    Panel content
  </div>
</div>
~~~



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



### 跑马灯效果实现

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



### 事件修饰符

- .stop阻止冒泡
- .prevent阻止默认事件
- .capture添加监听器时使用事件捕获模式
- .self只当事件在元素本身（比如不是子元素）触发时触发回调
- .once事件只触发一次

````html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>事件修饰符</title>
	<script type="text/javascript" src="./lib/vue.js"></script>
	<style type="text/css">
		.inner {
			height: 200px;
			background-color: skyblue;
		}
		.outner {
			background-color: pink;
			padding: 20px;
		}
	</style>
</head>
<body>
	<div id="app">
		<!-- .stop事件修饰符阻止所有冒泡事件 -->
		<!--
		<div class="inner" @click="dclick">
			<input type="button" value="按钮" @click.stop="iclick">
		</div> -->

		<!-- .capture事件修饰符捕获事件 -->
		<!--
		<div class="inner" @click.capture="dclick">
			<input type="button" value="按钮" @click="iclick">
		</div>-->

        <!-- .prevent事件修饰符阻止事件的默认行为 -->
        <!-- .once事件修饰符 指定事件只触发一次 -->
        <!--
		<a href="http://www.baidu.com" @click.prevent.once="baiduclick">去百度</a>-->

		<!-- .stop事件修饰符和.self事件修饰符的区别 -->
		<!-- .stop事件修饰符真正阻止了事件的冒泡行为 -->
		<!--<div class="outner" @click="outclick">
			<div class="inner" @click="dclick">
				<input type="button" value="按钮" @click.stop="iclick">
			</div>
		</div>-->

		<!-- .self事件修饰符只阻止了自己身上冒泡行为的触发，并不会真正阻止冒泡行为 -->
		<div class="outner" @click="outclick">
			<div class="inner" @click.self="dclick">
				<input type="button" value="按钮" @click="iclick">
			</div>
		</div>
	</div>
	<script>
		var vm = new Vue({
			el: "#app",
			data: {

			},
			methods: {
				iclick(){
					console.log("这是按钮输出的");
				},
				dclick(){
					console.log("这是点击div输出的");
				},
				baiduclick(){
					console.log("点击百度");
				},
				outclick(){
					console.log("点击外层div");
				}
			}
		});
	</script>
</body>
</html>
````



#### v-model双向数据绑定

~~~
	v-bind 只能实现数据的单向绑定，从M自动绑定到V，无法实现数据的双向绑定。但是可以在很多地方运用。
	使用方法：在要绑定的属性前面加v-bind: 或者直接简写冒号(:)
	
	v-model 指令，可以实现表单元素和model中数据的双向绑定
	注意：v-model只能运用在表单元素中 
	例如: inpug(text,email,tell,number),textarea，radio，checkbox，select，address
	使用方法：v-model="msg"  
	注意：不加冒号
~~~

#### 计算器calc案例

~~~
单词：
calc计算器		result结果	 
sym符号	
~~~



````html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<script type="text/javascript" src="./lib/vue.js"></script>
</head>
<body>
	<div id="app">
		<input type="text" v-model="n1">
		<select v-model="sym">
			<option value="+">+</option>
			<option value="-">-</option>
			<option value="*">*</option>
			<option value="/">/</option>
		</select>
		<input type="text" v-model="n2">
		<input type="button" value="=" @click="calc">
		<input type="text" v-model="result">
	</div>
	
	<script>
		var vm = new Vue({
			el: "#app",
			data: {
				n1: "0",
				sym: "+",
				n2: "0",
				result: "0"
			},
			methods: {
				calc() {
					switch(this.sym){
						case "+":
						this.result = parseInt(this.n1)+parseInt(this.n2);
						break;
						case "-":
						this.result = parseInt(this.n1)-parseInt(this.n2);
						break;
						case "*":
						this.result = parseInt(this.n1)*parseInt(this.n2);
						break;
						case "/":
						this.result = parseInt(this.n1)/parseInt(this.n2);
						break;
					}

					//投机取巧的方式，在正式开发中不提倡使用，在必须时可以使用
					/*
					var str = parseInt(this.n1)+this.sym+parseInt(this.n2);
					this.result = eval(str);*/
				}
			}
		});
	</script>
</body>
</html>
````



#### 通过属性绑定为元素设置class

````html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<script type="text/javascript" src="./lib/vue.js"></script>
	<style type="text/css">
		.red {
			color: red;
		}
		.thin {
			font-weight: 200;
		}
		.italic {
			font-style: italic;
		}
		.active {
			letter-spacing: 0.5em;
		}
	</style>
</head>
<body>
	<div id="app">
		<h1 :class="strobj">H1标题通过属性绑定设置class</h1>
		<h1 :class="['red','thin','italic',flag?'active':'']">H1标题通过属性绑定设置class</h1>
		<h1 :class="['red','thin','italic',{active:true}]">H1标题通过属性绑定设置class</h1>
		<h1 :class="{red: true, active: false, thin: false, italic: true}">H1标题通过属性绑定设置class</h1>
		<h1 :class="strobj">H1标题通过属性绑定设置class</h1>	    
	</div>

	<script>
		var vm = new Vue({
			el: "#app",
			data: {
				flag: true,
				strobj: {red: true, thin: true, active: true, italic: true}
			},
			methods: {}
		});
	</script>
</body>
</html>
````



#### 通过属性绑定为元素设置内联样式

````html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<script src="./lib/vue.js"></script>
</head>
<body>
	<div id="app">
		<!--通过普通的方法设置行内样式-->
		<h1 style="color: red; font-weight: 200;">H1标题通过属性绑定设置内联样式</h1>

        <!--通过属性绑定的方法为元素设置行内样式，属性名可以不加引号，属性值必须加引号，否则浏览器就会把属性值作为变量解析去vm对象中的data去查找这个变量。注意：带特殊符号例如横杠(-)的属性名一定要用单引号包裹起来，这是对象中的规则-->
		<h1 :style="{color: 'skyblue', 'font-weight': 200}">H1标题通过属性绑定设置内联样式</h1>

        
		<h1 :style="strObj">H1标题通过属性绑定设置内联样式</h1>

		<h1 :style="[strObj, strObj2]">H1标题通过属性绑定设置内联样式</h1>
	</div>
	<script>
		var vm = new Vue({
			el: "#app",
			data: {
				/*strObj的值是一个对象 所以不用引号包裹。包裹起来就是字符串了就不符合属性绑定机制*/
				italic: 'italic',
				strObj: {color: 'skyblue', 'font-weight': 200},
				strObj2: { 'font-style': 'italic'}
			},
			methods: {}
		});
	</script>
</body>
</html>
````



#### v-for迭代的四种使用方式

````html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<script type="text/javascript" src="./lib/vue.js"></script>
</head>
<body>
	<div id="app">
		<!-- 迭代一个普通数组 -->
		<p v-for="(item, i) in arr">值：{{ item }}----索引：{{ i }}</p>
<br>
		<!-- 迭代一个普通对象 -->
		<p v-for="(key, item, i) in obj">索引：{{ i }}--------键：{{ key }}-----------值：{{item}}</p>
<br>
		<!-- 迭代数字 -->
		<p v-for="number in 10">{{ number }}</p>
<br>		
        <!-- 迭代复杂数组 -->
        <p v-for="(item, i) in arr2">姓名：{{ item.name }} ----年龄：{{ item.age }}---索引：{{ i }}</p>
	</div>
	
	<script>
		var vm = new Vue({
			el: "#app",
			data: {
				arr: [0, 1, 2, 3, 4, 5, 6],
				obj: {
					name: "托尼-仕达克",
					gender: "男",
					age: 24
				},
				arr2: [{
					name: "Linx-d",
					age: 24
				},{
					name: "Linx-x",
					age: 25
				},{
					name: "Linx-y",
					age: 26
				}]
			},
			methods: {}
		});
	</script>
</body>
</html>
````



#### v-for中的key的使用注意事项

**注意**

- v-for循环的时候，key属性只能使用number或者string
- key在使用的时候，必须使用v-bind属性绑定的形式，指定key的值
- 在组件中，使用v-for循环的时候，或者在一些特殊星狂中，如果v-for有问题，必须在使用v-for的同事，指定唯一的字符串/数字类型     :key的值

````html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<script type="text/javascript" src="./lib/vue.js"></script>
</head>
<body>
	<div id="app">
		<label>id:<input type="text" v-model="id"></label>
		<label>name:<input type="text" v-model="name"></label>
		
		<input type="button" @click="add" value="按钮">
		<p v-for="(item,i) in list" :key="item.id">
			<input type="checkbox">索引：{{ i }}---id:{{item.id}}---名字:{{ item.name }}
		</p>
	</div>
	
	<script>
		var vm = new Vue({
			el: "#app",
			data: {
				id: '',
				name: '',
				list: [{
					id: 1,
					name: "嬴政"
				},{
					id: 2,
					name: "韩非"
				},{
					id: 3,
					name: "赵高"
				},{
					id: 4,
					name: "吕不韦"
				},{
					id: 5,
					name: "李斯"
				}]
			},
			methods: {
				add(){
					this.list.unshift({id: this.id, name: this.name});
				}
			}
		});
	</script>
</body>
</html>
````



#### v-if和v-show的使用特点

作用： 让元素在页面中不显示

v-if：删除设置该属性的元素   每次都会重新删除或创建元素

v-show：将设置该属性的元素的显示模式改为none   每次不会重新进行DOM的删除和创建操作，指示切换了元素的display:none；样式



~~~

v-if 有较高的切换性能消耗	 
在使用有可能永远不显示的元素时，使用v-if

v-show 有较高的初始渲染消耗 
在频繁切换该元素是否显示时，使用v-show
~~~



````html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<script type="text/javascript" src="./lib/vue.js"></script>
</head>
<body>
	<div id="app">
		<input type="button" value="按钮" @click="flag=!flag">
		<p v-if="flag">这是v-if控制的元素</p>
		<h1 v-show="flag">这是v-show控制的元素</h1>
	</div>
	
	<script>
		var vm = new Vue({
			el: "#app",
			data: {
				flag: true
			},
			methods: {
				
			}
		});
	</script>
</body>
</html>
````



#### 品牌案例

````html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>品牌案例</title>
	<!-- 最新版本的 Bootstrap 核心 CSS 文件 -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">

<!-- 可选的 Bootstrap 主题文件（一般不用引入） -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">

<!-- 最新的 Bootstrap 核心 JavaScript 文件 -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
<script src="./lib/vue.js"></script>
</head>
<body>
	<div id="app">
		<div class="panel panel-primary">
			<div class="panel-heading">
			    <h3 class="panel-title">品牌</h3>
			</div>
			<div class="panel-body form-inline">
			    <label>Id: 
			    	<input type="text" class="form-control" v-model="id">
			    </label>

			    <label>Name: 
			    	<input type="text" class="form-control" v-model="name">
			    </label>

			    <!-- v-on:(@)事件绑定 的值可以加括号，加了括号就可以传参数-->
			    <input type="button" value="添加" class="btn btn-primary" @click="add">

			    <label>搜索关键词：
			    	<input type="text" class="form-control" v-model="keywords">
			    </label>
			</div>
		</div>		

		<table class="table table-bordered table-hover table-striped">
			<thead>
				<tr>
					<th>Id</th>
					<th>Name</th>
					<th>Time</th>
					<th>Operation</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="item in search(keywords)" :key="item.id">
					<td>{{ item.id }}</td>
					<td>{{ item.name }}</td>
					<td>{{ item.ctime | changeTime() }}</td>
					<td>
						<a href="" @click.prevent="del(item.id)">删除</a>
					</td>
				</tr>
			</tbody>
		</table>
	</div>

		<div id="app2">
			<p>{{ strDate | changeTime }}</p>
		</div>
	<script>
		Vue.filter('changeTime',function(strDate,msg=""){
			var newDate = new Date(strDate);
			var y = newDate.getFullYear();
			var m = newDate.getMonth();
			var d = newDate.getDate();
			if(msg.toLowerCase()=="yyyy-mm-dd"){
			//return y+'-'+m+'-'+d;

			//return `$(y)-$(m)-$(d)`;  这里使用模板字符串时，占位符应该使用${};
			return `${y}-${m}-${d}`;
		}else{
			var h = newDate.getHours();
			var f = newDate.getMinutes();
			var s = newDate.getSeconds();
			return `${y}-${m}-${d} ${h}:${f}:${s}`;
		}
			
		});

		var vm = new Vue({
			el: "#app",
			data: {
				id: '',
				name: '',
				keywords: '',
				list: [{
					id: 1,
					name: "宝马",
					ctime: new Date()
				},{
					id: 2,
					name: "奔驰",
					ctime: new Date()
				}]
			},
			methods: {
				add(){
					//console.log('hi');
					var car = {id: this.id, name: this.name, ctime: new Date()};
					this.list.push(car);
				},//methods中的方法之间也要加逗号
				del(id){
					/*this.list.some((item,index)=>{
						if(item.id==id){
							this.list.splice(index,1);
							return true;
							//数组的some方法在解析到true时，立刻停止执行
						}
					});*/
					var index= this.list.findIndex((item)=>{
						if(item.id==id) return true;
					});
					console.log(index);
					this.list.splice(index,1);
				},
				search(keywords){
					/*var newList = [];
					this.list.forEach((item)=>{
						
						if(item.name.indexOf(keywords) != -1) {
							newList.push(item);
						}
						
					});
					return newList;*/

					//es6新方法 includes，filter，some，findIndex
					return this.list.filter((item)=>{
						if(item.name.includes(keywords)){
							return item;
						}
					});
				}
			}
		});

		var vm2 = new Vue({
			el: "#app2",
			data: {
				strDate: new Date()
			},
			methods: {

			},
			filters: {
				//调用过滤器的时候，如果私有过滤器和全局过滤器的名称相同，则遵循先私有后全局的就近调用原则
				changeTime(strDate,msg=""){
					var newDate = new Date(strDate);
					var y = newDate.getFullYear();
					var m = newDate.getMonth();
					var d = newDate.getDate();
					if(msg.toLowerCase()=="yyyy-mm-dd"){
					//return y+'-'+m+'-'+d;

					//return `$(y)-$(m)-$(d)`;  这里使用模板字符串时，占位符应该使用${};
					return `${y}-${m}-${d}`;
				}else{
					var h = newDate.getHours();
					var f = newDate.getMinutes();
					var s = newDate.getSeconds();
					return `${y}-${m}-${d} ${h}:${f}:${s}++++++++`;
				}
				}
			}
		});
	</script>
</body>
</html>
````

