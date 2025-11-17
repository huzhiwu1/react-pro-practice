/* eslint-disable react-refresh/only-export-components */
import type { PropsWithChildren, FC } from "react";
import { createContext, useContext, useState, memo } from "react";

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

const WrapperA: FC = () => {
  const { a, setA } = useContext(Context);
  return <A a={a} setA={setA} />;
};

const A: FC<{
  a: ContextType["a"];
  setA: ContextType["setA"];
}> = memo((props) => {
  const { a, setA } = props;
  console.log("render a");
  return (
    <div>
      a : {a}
      <button onClick={() => setA(a + 1)}>+</button>
      <button onClick={() => setA(a - 1)}>-</button>
    </div>
  );
});

const WrapperB: FC = () => {
  const { b, setB } = useContext(Context);
  return <B b={b} setB={setB} />;
};

const B: FC<{
  b: ContextType["b"];
  setB: ContextType["setB"];
}> = memo((props) => {
  const { b, setB } = props;
  console.log("render b");
  return (
    <div>
      b : {b}
      <button onClick={() => setB(b + 1)}>+</button>
      <button onClick={() => setB(b - 1)}>-</button>
    </div>
  );
});

function App() {
  return (
    <Provider>
      <WrapperA />
      <WrapperB />
    </Provider>
  );
}
export default App;
