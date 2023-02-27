export default {
    name: 'counter',
    redirect: { name: 'counter-setup' },
    component: () => import('../layouts/CounterLayout.vue'),
    children: [
        {
            path: 'options',
            name: 'counter-options',
            component: () => import('../pages/CounterOptionsPage.vue')
        },
        {
            path: 'setup',
            name: 'counter-setup',
            component: () => import('../pages/CounterSetupPage.vue')
        },
    ]
}