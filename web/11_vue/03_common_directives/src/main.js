//2：引入vue
import Vue from 'vue';

//3：引入app.vue 用它的内容来替换div id=app
import App from './app.vue'

//4：构建vue实例
new Vue({
  // 渲染内容的目的地
  el:'#app',
  // 渲染内容
  render:function (c) { //c只是一个形参，叫什么都可以
    return c(App)
  }
})