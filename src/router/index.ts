import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

import Home from '../pages/Home/index.vue';
import About from '../pages/About/index.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/about',
    component: About,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
