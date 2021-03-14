import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
    { path: '/table', component: '@/pages/table/index' },
    { path: '/hooks', component: '@/pages/hooks/index' }
  ],
  fastRefresh: {},
});