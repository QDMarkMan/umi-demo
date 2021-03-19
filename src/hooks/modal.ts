/** ---------------------------------------------------------------------------------------------
 *  @Author [ETongfu].
 *  @Date [2021-03-17 12:29:42].
 *  @Des [Modal Trigger].
 *-------------------------------------------------------------------------------------------- */
import { useCallback, useState } from 'react';
export function useModel(initialValue: boolean = false) {
  const [visible, setVisible] = useState(initialValue);

  const open = useCallback(() => {
    setVisible(true);
    console.log('open visible', visible);
  }, [setVisible]);

  const close = useCallback(() => {
    setVisible(false);
    console.log('close visible', visible);
  }, [setVisible]);

  return {
    visible,
    open,
    close,
  };
}
