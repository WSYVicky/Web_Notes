import Vue from 'vue';
import App from './app.vue';

import Home from './components/home.vue'

//（1）安装路由
//（2）引入路由
import VueRouter from 'vue-router';

//（3）安装插件
Vue.use(VueRouter);

//（4）创建路由对象并配置路由规则
let router = new VueRouter({
  routes:[
    { path:'/' ,redirect:'/home' },
    {path:'/home',component:Home}
  ]
});

//（5）将路由对象传递给Vue实例，options中
new Vue({
  el:'#app',
  render:c=>c(App),
  router:router
})

