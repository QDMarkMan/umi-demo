/** ---------------------------------------------------------------------------------------------
 *  @Author [ETongfu].
 *  @Date [2021-03-23 18:11:06].
 *  @Des [Cookie].
 *-------------------------------------------------------------------------------------------- */
import Cookie from 'js-cookie';
/**
 * 获取当前用户cookie
 * @returns
 */
export function getUserCookie(): string {
  const key = Cookie.get('user') || '';
  return key;
}
