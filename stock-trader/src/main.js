import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';

import { store } from './store/store.js';

import { routes } from './routes.js';

Vue.use(VueRouter);
Vue.config.productionTip = false;

Vue.filter('monify', (value) => {
  return `$${value.toFixed(2)}`;
});

const router = new VueRouter({
  routes,
  mode: 'history',
});

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
