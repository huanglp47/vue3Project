import type { AppRouteRecordRaw, AppRouteModule } from '@/router/type';

// export const LAYOUT = () => import('@/layouts/default/index.vue');
// export const EXCEPTION_COMPONENT = () => import('@/views/sys/exception/Exception.vue');

// import HomeView from '../views/HomeView.vue'
export const HomeRoute:AppRouteRecordRaw = {
    path: '/',
    name: 'Home',
    component: () => import('@/views/home.vue'),
    meta: {
        title: '主页',
    }
}
export const AboutRoute:AppRouteRecordRaw = {
    path: '/about',
    name: 'About',
    component: () => import('@/views/AboutView.vue'),
    meta: {
        title: '关于页'
    }
}

export const LoginRoute:AppRouteRecordRaw = {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/sys/login/login.vue'),
    meta: {
        title: '登录',
    }
}
// 404 on a page
export const PAGE_NOT_FOUND_ROUTE: AppRouteRecordRaw = {
    path: '/:path(.*)*',
    name: "PageNotFound",
    // component: LAYOUT,
    meta: {
        title: 'ErrorPage',
        hideBreadcrumb: true,
        hideMenu: true,
    },
    children: [
        {
            path: '/:path(.*)*',
            name: "PageNotFound",
            // component: EXCEPTION_COMPONENT,
            meta: {
                title: 'ErrorPage',
                hideBreadcrumb: true,
                hideMenu: true,
            },
        },
    ],
};
const modules: any = import.meta.globEager('./modules/**/*.ts');
const routeModuleList: AppRouteModule[] =[]
Object.keys(modules).forEach((key)=>{
    const mod = modules[key].default || {};
    const modList = Array.isArray(mod) ? [...mod] : [mod];
    routeModuleList.push(...modList);
})

export const basicRoutes = [
    LoginRoute,
    HomeRoute,
    AboutRoute,
    ...routeModuleList, // 主要路由
    PAGE_NOT_FOUND_ROUTE,
]
