import type { AppRouteModule } from '@/router/type';

const login: AppRouteModule = {
    path: '/login',
    name: 'Login',
    component: import('@/views/sys/login/login.vue'),
    meta: {
        hideChildrenInMenu: true,
        icon: 'simple-icons:about-dot-me',
        title: '登录页面',
        orderNo: 100000,
    },
}

export default login;
