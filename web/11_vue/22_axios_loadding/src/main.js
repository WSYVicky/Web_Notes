import Vue from 'vue';
import App from './app.vue';
import Axios from 'axios';
// 引入mint-ui
// 相面的句子相当于 export default 整个对象
// 引入部分：import { Indicator } from 'mint-ui'; 相当于 export 整个对象.Indicator -> {Indicator}
import Mint from 'mint-ui';
// 引入mint-ui的css
import 'mint-ui/lib/style.css';
// 安装插件
Vue.use(Mint);


Vue.prototype.$axios = Axios;

// 默认设置
Axios.defaults.headers = {
  accept:'defaults'
}

// 请求拦截器设置
Axios.interceptors.request.use(function(config){
  //请求发起之前  显示loadding
  Mint.Indicator.open();
  return config;
})

Axios.interceptors.response.use(function(config){
  //在响应回来之后，隐藏loadding
  Mint.Indicator.close();
  return config;
})

new Vue({
  el:'#app',
  render:c=>c(App)
})