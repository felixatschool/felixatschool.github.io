import { createRouter, createWebHistory } from 'vue-router'

import Login from '../views/login.vue';
import Home from '../views/home.vue';
import Recipe from '../views/recipe.vue';
import Calendar from '../views/calendar.vue';
import List from '../views/list.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/',
      name: 'calendar',
      component: Calendar
    },
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/',
      name: 'recipe',
      component: Recipe
    },
    {
      path: '/',
      name: 'list',
      component: List
    },
    { 
      path: '/:catchAll(.*)',
      redirect: 
	{ name: 'login' }
    }
  ]
})

export default router
