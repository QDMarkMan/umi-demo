
/* ----------------------------------------------------------------------------------------------
 *  @Author [ETongfu].
 *  @Des [Hooks test].
 *-------------------------------------------------------------------------------------------- */

import { Button, Input } from "antd";
import { ChangeEvent, MutableRefObject, useEffect, useReducer, useRef, useState } from "react";
import './index.less'


const initialState = { count: 0 }

type Action = | { type: 'increment' }
| { type: 'decrement' }
| { type: 'incrementAmount'; amount: number };

const reducer = (state = initialState, action: Action) => {
  switch (action.type) {
  case 'increment':
    return { count: state.count + 1 }
  case 'decrement':
    return { count: state.count - 1 }
  default:
    throw new Error('Error')
  }
}

export default function HooksPage() {
  const [state, dispatch] = useReducer(reducer, initialState)
  const [pageSize, setPageSize ] = useState(1)
  const [input, setInput] = useState('')
  const ref = useRef<Input>(null)

  useEffect(() => {
    console.log('input state change!');
  }, [input])

  useEffect(() => {
    console.log('模拟生命周期created');
  }, [])

  const setLocalState = () => {
    dispatch({ type: 'increment' })
    setPageSize(pageSize + 1)
   }

   const setInputChange = (e: ChangeEvent<HTMLInputElement>) => {
     setInput(e.target.value)
   }

   const setFocus = () => {
     // ！的意思是非undefined和非null的判断
    ref.current!.focus()
   }


  return (
    <div className="hooks-index">
      <h1>Hooks</h1>

      <h2> Count: {state.count}</h2>
      <Button onClick={setLocalState}>Increment</Button>
      <Button onClick={() => { dispatch({ type: 'decrement' }) }}>Decrement</Button>

      <h1> Input Test </h1>

      <h2>Input {input}</h2>
      <Input ref={ref} onChange={setInputChange}></Input>

      <Button onClick={setFocus}>Focus</Button>
    </div>
  )
}
