import Vue from 'vue';
import App from './App.vue';
import router from './router';
import VueConfetti from 'vue-confetti';
import VueGtag from 'vue-gtag';

Vue.use(VueGtag, {
  config: { id: 'GTM-W8FLCX8' }
});

import 'bootstrap/dist/css/bootstrap.css';
import './style.scss';

Vue.config.productionTip = false;

Vue.use(VueConfetti);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
