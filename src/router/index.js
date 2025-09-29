import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
    { path: '/todo-1', name: '???', component: ?? },
    { path: '/todo-2', name: '??', component: ?? }
];

const router = createRouter({
    history: createWebHashHistory(), // important pour Electron (pas d'historique HTML5)
    routes
});

export default router;