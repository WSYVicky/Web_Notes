import Vue from 'vue';
import App from './app.vue';

//引入子组件
import headerVue from './components/header.vue';
import bodyVue from './components/body.vue';
import footerVue from './components/footer.vue';

//声明全局组件
//注册一个组件，第一个参数是名称，在template中使用,第二个参数是实际的对象，显示成什么内容，具备什么功能
Vue.component('headerVue',headerVue);
Vue.component('bodyVue',bodyVue);
Vue.component('footerVue',footerVue);

new Vue({
  el:'#app',
  render: c => c(App)
})