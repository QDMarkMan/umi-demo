/** ---------------------------------------------------------------------------------------------
 *  @Author [ETongfu].
 *  @Date [2021-03-19 18:05:31].
 *  @Des [React Demo page].
 *-------------------------------------------------------------------------------------------- */
import { createRef, forwardRef, useEffect } from 'react';
import './index.less';

export type Ref = HTMLButtonElement;

const FancyButton = forwardRef<Ref>((props, ref) => (
  <button ref={ref} className="fancy-button">
    Fancy Button {props.children}
  </button>
));

export default function DemoPage() {
  const ref = createRef<Ref>();

  useEffect(() => {
    ref.current?.focus();
  }, []);

  return (
    <div className="demo-page">
      <h1> Demo Page </h1>

      <FancyButton ref={ref}></FancyButton>
    </div>
  );
}
