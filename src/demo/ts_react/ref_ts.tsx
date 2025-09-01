// 使用useRef时，如果是保存dom,则初始状态传一个null,这是ref是只读状态
// 如果保存dom，但是不存null，会报错
// 如果不是保存dom，则可以不传初始值，这是ref可以赋值

import { useRef, forwardRef, useState, useEffect } from "react";
import type { ForwardRefRenderFunction } from "react";

interface IChild {
  count: number;
}

const Child: ForwardRefRenderFunction<HTMLInputElement, IChild> = (
  props,
  ref
) => {
  return (
    <>
      <input ref={ref} />
      <div>{props.count}</div>
    </>
  );
};

const WrapperChild = forwardRef(Child);

function App() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [count, setCount] = useState(0);
  useEffect(() => {
    inputRef?.current?.focus();
  }, []);
  return (
    <>
      <WrapperChild count={count} ref={inputRef}></WrapperChild>
      <button onClick={() => setCount((preState) => preState + 1)}>+1</button>
    </>
  );
}

export default App;
