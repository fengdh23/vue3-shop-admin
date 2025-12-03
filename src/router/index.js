import { fr, pa } from "element-plus/es/locales.mjs";
import {
    createRouter,
    createWebHashHistory
} from "vue-router";


import Index from '~/pages/index.vue'
import About from '~/pages/about.vue'
import NotFound from '~/pages/404.vue'
import Login from '~/pages/login.vue'

const routes = [{
    path: '/',   // 根路径 默认路径
    component: Index
},{
    path: '/login',   // 根路径 默认路径
    component: Login
},,{
    path: '/about',   // 根路径 默认路径
    component: About
},{
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound
}]

const router = createRouter({
    history: createWebHashHistory(),
    routes,  // 短语缩写，相当于 routes: routes
});

export default router;