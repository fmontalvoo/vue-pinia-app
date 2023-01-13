import { createRouter, createWebHistory } from 'vue-router'

import counterRouter from '@/modules/counter/router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/counter',
      ...counterRouter
    },
  ]
})

export default router
