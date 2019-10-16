//入口文件
import Vue from "vue";

//导入vue-router
import VueRouter from "vue-router";

//手动安装vue-router
Vue.use(VueRouter);

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