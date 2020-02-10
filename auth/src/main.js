import Vue from 'vue';
import App from './App.vue';
import axios from 'axios';
import Vuelidate from 'vuelidate';

import router from './router.js';
import store from './store.js';

Vue.config.productionTip = false;

Vue.use(Vuelidate);

axios.defaults.baseURL = 'https://vuejs-http-fb871.firebaseio.com';
// axios.defaults.headers.common['Authorization'] = 'hsdaodks';
axios.defaults.headers.get['Accepts'] = 'application/json';

const requestInterceptor = axios.interceptors.request.use((config) => {
  console.log('Request interceptor', config);
  return config;
});

const responseInterceptor = axios.interceptors.response.use((response) => {
  console.log('Response interceptor', response);
  return response;
});

axios.interceptors.request.eject(requestInterceptor);
axios.interceptors.response.eject(responseInterceptor);

Vue.filter('pretty', (value) => {
  return JSON.stringify(value, null, 2);
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
