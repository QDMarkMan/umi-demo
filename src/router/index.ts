// umi routes: https://umijs.org/docs/routing

import { IRoute } from 'umi';

const Route: Array<IRoute> = [
  {
    layout: false,
    path: '/login',
    component: '@/pages/login',
  },
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    menu: {
      name: 'Home',
      icon: 'testicon',
      flatMenu: false,
      hideInMenu: false,
      hideChildrenInMenu: false,
    },
    component: '@/pages/home/index',
  },
  {
    path: '/demo',
    menuRender: false,
    component: '@/pages/demo/index',
  },
  // {
  //   name: 'test',
  //   path: '/test',
  //   component: './test',
  //   access: 'canTest' // 权限定义返回值的某个 key
  // }
];

export default Route;
