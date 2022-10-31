import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/clientes',
      name: 'cliente',
      component: () => import('../views/Cliente.vue')
    },
    {
      path: '/rotas',
      name: 'rota',
      component: () => import('../views/Rota.vue')
    },
    {
      path: '/maps',
      name: 'map',
      component: () => import('../views/Maps.vue')
    },
  ]
})

export default router
