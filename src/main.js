import Vue from 'vue';

import Fontana from './Fontana';

import router from './router';
import store from './store';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#fontana-regional-library',
  router,
  render: h => h(Fontana),
  store,
});
