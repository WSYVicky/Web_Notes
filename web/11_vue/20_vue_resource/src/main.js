import Vue from 'vue';
import App from './app.vue';

//（1）引入
import VueResource from 'vue-resource';
//（2）安装插件
Vue.use(VueResource);


new Vue({
  el:'#app',
  render:c=>c(App)
})