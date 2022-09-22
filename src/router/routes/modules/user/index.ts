import type { AppRouteModule } from '@/router/type';

// export const LAYOUT = () => import('/@/layouts/default/index.vue');

const dashboard: AppRouteModule = {
    path: '/user',
    name: 'User',
    // component: LAYOUT,
    redirect: '/user/list',
    meta: {
        hideChildrenInMenu: true,
        icon: 'simple-icons:about-dot-me',
        title: '用户详情',
        orderNo: 100000,
    },
    children: [
        {
            path: 'list',
            name: 'ListPage',
            component: () => import('@/views/sys/user/index.vue'),
            meta: {
                title: '用户列表',
                icon: 'simple-icons:about-dot-me',
                hideMenu: true,
            },
        },
        {
            path: 'detail',
            name: 'userDetail',
            component: () => import('@/views/sys/user/detail.vue'),
            meta: {
                title: '用户详情',
                icon: 'simple-icons:about-dot-me',
                hideMenu: true,
            },
        },
    ],
}

export default dashboard;
