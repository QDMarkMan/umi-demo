/** ---------------------------------------------------------------------------------------------
 *  @Author [ETongfu].
 *  @Date [2021-03-23 17:24:40].
 *  @Des [umi agreement file].
 *-------------------------------------------------------------------------------------------- */

import { getUserCookie } from './util/cookie';

export async function getInitialState() {
  const key = getUserCookie();
  return {
    token: key,
  };
}
