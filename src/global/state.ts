/** ---------------------------------------------------------------------------------------------
 *  @Author [ETongfu].
 *  @Date [2021-03-25 15:38:38].
 *  @Des [Init state].
 *-------------------------------------------------------------------------------------------- */
import { getUserCookie } from '@/util/cookie';

interface InitialState {
  token?: any;
  userInfo?: any;
  fetchUserInfo?: () => Promise<any | undefined>;
}

export async function initState() {
  const key = getUserCookie();
  return {
    token: key,
  };
}
