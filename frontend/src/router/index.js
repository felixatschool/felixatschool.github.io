import { createRouter, createWebHistory } from 'vue-router'

import Login from '../views/login.vue';
import Home from '../views/home.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    },
  ]
})

export default router
