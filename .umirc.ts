import { defineConfig } from 'umi';

export default defineConfig({
  plugins: [
    // '@umijs/plugin-initial-state'
    // '@umijs/plugin-access'
  ],
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
    { path: '/table', component: '@/pages/table/index' },
    { path: '/hooks', component: '@/pages/hooks/index' },
    { path: '/demo', component: '@/pages/demo/index' },
  ],
  fastRefresh: {},
  dynamicImport: {
    loading: '@/components/PageLoading',
  },
});
