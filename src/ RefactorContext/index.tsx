/* eslint-disable react-refresh/only-export-components */
import type { FC, PropsWithChildren } from "react";
import { createContext, useContext, useState } from "react";

export type ContextType = {
  a: number;
  b: number;
  setA: (num: number) => void;
  setB: (num: number) => void;
};

export const Context = createContext<ContextType>({
  a: 0,
  b: 0,
  setA: () => {},
  setB: () => {},
});

const Provider: FC<PropsWithChildren> = (props) => {
  const { children } = props;
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  return (
    <Context.Provider
      value={{
        a,
        b,
        setA,
        setB,
      }}
    >
      {children}
    </Context.Provider>
  );
};

const Aaa: FC = () => {
  const { a, setA } = useContext(Context);
  // 使用同一个context,只要context有一些变化，子组件使用该context的组件都会重新刷新
  /**
   * 解决方法：
   * 1. 使用memo
   * 2. 拆分context为两个
   */
  console.log("a render");
  return (
    <div>
      a: {a}
      <button onClick={() => setA(a + 1)}>+</button>
      <button onClick={() => setA(a - 1)}>-</button>
    </div>
  );
};

const Bbb: FC = () => {
  const { b, setB } = useContext(Context);
  console.log("b render");
  return (
    <div>
      b: {b}
      <button onClick={() => setB(b + 1)}>+</button>
      <button onClick={() => setB(b - 1)}>-</button>
    </div>
  );
};

function App() {
  return (
    <Provider>
      <Aaa></Aaa>
      <Bbb></Bbb>
    </Provider>
  );
}

export default App;
