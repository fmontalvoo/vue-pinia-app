import { createRouter, createWebHistory } from 'vue-router'

import clientsRouter from '@/modules/clients/router'
import counterRouter from '@/modules/counter/router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/clients',
      ...clientsRouter
    },
    {
      path: '/counter',
      ...counterRouter
    },
    {
      path: '',
      redirect: { name: 'clients-list' }
    }
  ]
})

export default router
