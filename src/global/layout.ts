/** ---------------------------------------------------------------------------------------------
 *  @Author [ETongfu].
 *  @Date [2021-03-25 15:42:31].
 *  @Des [Render runtime layout].
 *-------------------------------------------------------------------------------------------- */
import SideMenu from '@/components/layout/SideMenu';
import Footer from '@/components/layout/Footer';
import type { RunTimeLayoutConfig } from 'umi';

export const initLayout: RunTimeLayoutConfig = () => {
  return {
    // rightContentRender: () => <SideMenu />,
    // // disableContentMargin: false,
    // footerRender: () => <Footer />,
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
    menuHeaderRender: undefined,
  };
};
