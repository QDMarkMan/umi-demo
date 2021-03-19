/** ---------------------------------------------------------------------------------------------
 *  @Author [ETongfu].
 *  @Date [2021-03-17 09:52:45].
 *  @Des [Model JSX].
 *-------------------------------------------------------------------------------------------- */
import React from 'react';
import { createPortal } from 'react-dom';

export interface IModalDemoProps {
  visible: boolean;
  onClose?: () => void;
  onOpen?: () => void;
}

const ModalDemo: React.FC<IModalDemoProps> = (props) => {
  const style = {
    display: props.visible ? 'block' : 'none',
  };
  // const { visible, onClose, onOpen } = props
  // visible ? (onOpen && onOpen()) : (onClose && onClose())
  const target = document.querySelector('.hooks-index');
  return createPortal(
    <div className="modal-demo" style={style}>
      Modal
      {props.children}
    </div>,
    target || document.body,
  );
};

export default ModalDemo;
