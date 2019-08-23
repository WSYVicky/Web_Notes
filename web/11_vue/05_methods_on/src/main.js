import Vue from 'vue';
import App from './app.vue';

new Vue({
  el:'#app',
  // render:function(c) {
  //     return c(App);
  // }

  // ES6写法：
  //（1）当参数是一个的时候，小括号可以省略
  //（2）当代码只有一行且是返回值的时候，可以省略大括号
  render: c => c(App)
})