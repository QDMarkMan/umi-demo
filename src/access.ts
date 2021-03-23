/** ---------------------------------------------------------------------------------------------
 *  @Author [ETongfu].
 *  @Date [2021-03-23 17:41:22].
 *  @Des [permission handle].
 *-------------------------------------------------------------------------------------------- */
interface IAccessState {
  token?: string;
}

export default function (initialState: IAccessState) {
  const { token } = initialState;
  return {
    isLogin: () => token != '',
  };
}
