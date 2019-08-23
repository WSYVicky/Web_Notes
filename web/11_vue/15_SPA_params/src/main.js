import Vue from 'vue';
import App from './app.vue';
import List from './components/list.vue';
import Detail from './components/detail.vue';


import VueRouter from 'vue-router';

Vue.use(VueRouter);

let router = new VueRouter({
  routes:[
    {name:'list',path:'/list',component:List},

    //（1）查询字符串——path不用改
    // /detail?id=1
    // 导航
    {name:'detail',path:'/detail',component:Detail},

    //（2）path方式——path要改
    // /detail/id
    {name:'detail',path:'/detail/:id',component:Detail}
  ]
})

new Vue({
  el:'#app',
  router,
  render: c=>c(App)
});