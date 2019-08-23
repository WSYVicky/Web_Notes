import Vue from 'vue';
import App from './app.vue';

//引入子组件
import sub from './components/sub.vue';

//注册子组件成全局组件
Vue.component('subVue',sub);

new Vue({
  el:'#app',
  render:c=>c(App)
})