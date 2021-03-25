/** ---------------------------------------------------------------------------------------------
 *  @Author [ETongfu].
 *  @Date [2021-03-25 15:20:09].
 *  @Des [Login Index].
 *-------------------------------------------------------------------------------------------- */
import { Button } from 'antd';
import { useState } from 'react';
import { history } from 'umi';
export default function LoginPage() {
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      history.push('/');
    }, 3000);
  };

  return (
    <div>
      Login
      <Button loading={loading} size="small" onClick={handleLogin}>
        登录
      </Button>
    </div>
  );
}
