import Vue from 'vue';
import App from './app.vue';

//（1）引入
import Axios from 'axios';

//（2）给Vue原型挂载一个属性
Vue.prototype.$axios = Axios;

// 默认设置
Axios.defaults.headers = {
  accept:'defaults'
}

// 请求拦截器设置
Axios.interceptors.request.use(function(config){
  config.headers = {
    accept: 'interceptors'
  }
  return config;
})

new Vue({
  el:'#app',
  render:c=>c(App)
})