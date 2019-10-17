//入口文件
import Vue from "vue";

//导入vue-router
import VueRouter from "vue-router";

//手动安装vue-router
Vue.use(VueRouter);

//导入所有的mint-ui组件
import MintUi from "mint-ui";
//导入样式
import "mint-ui/lib/style.css";
//安装mint-ui组件
Vue.use(MintUi);

//按需导入mint-ui组件
//import { Button } from "mint-ui";
//导入样式
//import "mint-ui/lib/style.css";
//使用Vue.component 注册按钮组件
//Vue.component(Button.name, Button);


//导入css文件
import "./css/app.css";
//导入bootstrap文件
import "bootstrap/dist/css/bootstrap.css";

//导入mui组件样式表
import "./lib/mui/css/mui.css";

//导入 app组件
import app from "./App.vue";

//导入 自定义路由模块
import router from "./router.js";

var vm = new Vue({
	el: "#app",
	data: {},
	method: {},
	render: c=>c(app),
	router
});