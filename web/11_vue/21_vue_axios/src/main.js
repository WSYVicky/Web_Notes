import Vue from 'vue';
import App from './app.vue';

//（1）引入
import Axios from 'axios';

//（2）给Vue原型挂载一个属性
Vue.prototype.$axios = Axios;



new Vue({
  el:'#app',
  render:c=>c(App)
})