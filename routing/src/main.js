import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';

import { routes } from './routes.js';


const router = new VueRouter({
  routes,
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else if (to.hash) {
      return { selector: to.hash };
    }
  }
});

Vue.use(VueRouter);
Vue.config.productionTip = false;


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
