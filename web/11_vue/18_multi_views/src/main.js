import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './app.vue';
import Header from './components/header.vue';
import Footer from './components/footer.vue';

Vue.use(VueRouter);

let router = new VueRouter({
  routes:[
    { path:'/',
      components:{
        header:Header,
        footer:Footer,
        default:Header
      }
    }
  ]
});

new Vue({
  el:'#app',
  router,
  render: c=>c(App)
})