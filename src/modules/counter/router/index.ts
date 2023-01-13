export default {
    name: 'counter',
    component: () => import('../layouts/CounterLayout.vue'),
    children: [
        {
            path: '',
            name: 'counter',
            component: () => import('../pages/CounterPage.vue')
        },
    ]
}