<template>
    <div>
    <h2>这是account组件</h2>
    <router-link to="/account/login">登录</router-link>
    <router-link to="/account/register">注册</router-link>
    <router-view></router-view>
    </div>
</template>

<script>

</script>

<style lang="scss" scoped>
/*样式的 scoped 是通过 css 的属性选择器实现的*/
body {
	div {
	font-style: italic;
	}
}
</style>
