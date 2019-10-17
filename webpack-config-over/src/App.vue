<template>
    <div>
        <h1>这是App组件</h1>
        <router-link to="/account">Account</router-link>
        <router-link to="/goodslist">Goodslist</router-link>
        <router-view></router-view>
        <mt-button type="primary" icon="more" @click="show">default</mt-button>
        <mt-button type="danger" size="small" plain>default</mt-button>
        <mt-button type="primary" size="large" disabled>default</mt-button>
        <button type="button" class="mui-btn mui-btn-royal">
                    紫色
                </button>
    </div>
</template>

<script>
//按需导入js组件
import { Toast } from 'mint-ui';
export default {
	data: function(){
        return {
            toastInstance: null
        }
	},
    created: function(){
        this.getList();
    },
    methods: {
        getList(){
            this.show();
            setTimeout(()=>{
                this.toastInstance.close();
            }, 3000);
        },
        show(){
            this.toastInstance = Toast({
            message: "操作成功",
            position: "top",
            duration: -1,
            className: "myToast",
            iconClass: "glyphicon glyphicon-heart"
            });
        }
    }
}
</script>

<style>

</style>