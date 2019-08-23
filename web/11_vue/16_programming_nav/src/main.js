import Vue from 'vue';
import App from './app.vue';
import Movies from './components/movies.vue';
import Music from './components/music.vue';

import VueRouter from 'vue-router';

Vue.use(VueRouter);

let router = new VueRouter({
  routes:[
    {name:'music',path:'/music',component:Music},
    {name:'movies',path:'/movies',component:Movies},
  ]
})

new Vue({
  el:'#app',
  router,
  render: c=>c(App)
});