import type { RouteLocationNormalized } from 'vue-router'

export default {
    name: 'clients',
    redirect: { name: 'clients-list' },
    component: () => import('../layouts/ClientsLayout.vue'),
    children: [
        {
            path: '',
            name: 'clients-list',
            component: () => import('../pages/ListPage.vue')
        },
        {
            path: ':id',
            name: 'client-detail',
            component: () => import('../pages/ClientPage.vue'),
            props: (route: RouteLocationNormalized) => ({ id: +route.params.id }),
        },
    ]
}