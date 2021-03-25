/** ---------------------------------------------------------------------------------------------
 *  @Author [ETongfu].
 *  @Date [2021-03-25 15:29:00].
 *  @Des [Layout config].
 *  @doc [https://beta-pro.ant.design/docs/advanced-menu-cn]
 *-------------------------------------------------------------------------------------------- */
import { Settings as LayoutSettings } from '@ant-design/pro-layout';

export default {
  navTheme: 'light',
  // 拂晓蓝
  primaryColor: '#c33f39',
  layout: 'mix',
  contentWidth: 'Fluid',
  fixedHeader: true,
  headerHeight: 80,
  headerTheme: 'light',
  fixSiderbar: true,
  colorWeak: false,
  menu: { locale: true },
  title: 'Portals',
  pwa: false,
  logo: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
  iconfontUrl: '',
} as LayoutSettings & {
  pwa: boolean;
};
