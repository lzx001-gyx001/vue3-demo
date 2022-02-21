import { createRouter, createWebHistory } from 'vue-router'


import Home from '../view/Home/index.vue'

import About from '../view/About/index.vue'

const routes = [{
    path: '/',
    component: Home,
    redirect: "/root",
    children: [
        { name: "Root", path: '/root', component: About },
        { name: "Blog", path: '/blog', component: () => import('../view/Blog/index.vue') },
    ]
}, ]



const router = createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: createWebHistory(),
    routes, // `routes: routes` 的缩写
})











export default router