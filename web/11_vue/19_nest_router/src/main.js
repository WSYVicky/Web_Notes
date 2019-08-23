import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './app.vue';
import Header from './components/header.vue';
import Footer from './components/footer.vue';
import Music from './components/music.vue';
import Oumei from './components/oumei.vue';
import Guochan from './components/guochan.vue'

Vue.component('HeaderVue',Header);
Vue.component('FooterVue',Footer);

Vue.use(VueRouter);

let router = new VueRouter({
  routes:[{
    path:'/',
    redirect:{name:'music'}
    },
    {
      name:'music',
      path:'/music',
      component: Music,
      children: [
        {name:'music_oumei',path:'oumei',component:Oumei},
        {name:'music_guochan',path:'guochan',component:Guochan}
      ]
    }
  ]
});

new Vue({
  el:'#app',
  router,
  render: c=>c(App)
})