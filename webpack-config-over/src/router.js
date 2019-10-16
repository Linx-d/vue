//导入vue-router
import VueRouter from "vue-router"; 
//导入account组件和goodslist组件
import account from "./main/acount.vue";
import goodslist from "./main/goodslist.vue";

//导入Account组件中的login组件和register组件
import login from "./subcom/login.vue";
import register from "./subcom/register.vue";



//创建路由对象
var router = new VueRouter({
	routes: [
	{
		path: "/account",
		component: account,
		children: [
		{
			path: "login",
			component: login
		},
		{
			path: "register",
			component: register
		}
		]
	},
	{
		path: "/goodslist",
		component: goodslist
	}]
});

export default router;