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

/*
ES6中通过 export default和export暴露数据
export default只能暴露一次，接收时使用import a from "./test.js";  名称不限

export 可以暴露多次，而且只能使用暴露时的名称用{}接收，如果要使用别名接收，就使用as起别名
*/


import hi, {title as xing, demo} from "./test.js";


console.log(hi);
console.log(xing);
console.log(demo);


