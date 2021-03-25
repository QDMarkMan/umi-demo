/** ---------------------------------------------------------------------------------------------
 *  @Author [ETongfu].
 *  @Date [2021-03-23 17:24:40].
 *  @Des [umi agreement file].
 *-------------------------------------------------------------------------------------------- */
import { initState } from '@/global/state';

import type { RunTimeLayoutConfig } from 'umi';
import SideMenu from '@/components/layout/SideMenu';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';

// getInitialState
export const getInitialState = initState;

export const layout: RunTimeLayoutConfig = () => {
  return {
    disableContentMargin: false,
    footerRender: () => <Footer />,
    // onPageChange: () => {
    //   const { location } = history;
    //   // 如果没有登录，重定向到 login
    //   if (!initialState?.currentUser && location.pathname !== '/login') {
    //     history.push('/login');
    //   }
    // },
    // // 水印相关设置
    // waterMarkProps: {
    //   content: initialState?.currentUser?.name
    // },
    headerRender: () => <Header />,
    menuHeaderRender: undefined,
  };
};
