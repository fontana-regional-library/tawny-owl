import Vue from 'vue';
import Router from 'vue-router';

import Event from '@/components/features/events/event';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      redirect: '/events',
    },
    {
      path: '/events',
      name: 'Events',
      component: Event,
    },
  ],
});
