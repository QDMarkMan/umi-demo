/** ---------------------------------------------------------------------------------------------
 *  @Author [ETongfu].
 *  @Date [2021-03-25 15:29:25].
 *  @Des [Config for umi].
 *-------------------------------------------------------------------------------------------- */

import Route from '../src/router';
import layoutSetting from './layout';
import { defineConfig } from 'umi';

export default defineConfig({
  routes: Route,
  nodeModulesTransform: {
    type: 'none',
  },
  antd: {
    dark: false,
  },
  dynamicImport: {
    loading: '@/components/PageLoading',
  },
  favicon: './favicon.ico',
  hash: true,
  forkTSChecker: {},
  ignoreMomentLocale: true,
  layout: {
    locale: true,
    ...layoutSetting,
  },
  locale: {
    default: 'zh-CN',
    antd: true,
    baseNavigator: true,
  },
  targets: { ie: 11 },
  theme: { 'primary-color': layoutSetting.primaryColor },
  title: 'UmiReactTemplate',
});
