import { useEffect, useRef, useState } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type PropsType = Record<string, any>;

function useWhyDidYouUpdate(componentName: string, props: PropsType) {
  // 记录之前的props
  const prevPropsRef = useRef<PropsType>(props);

  useEffect(() => {
    if (prevPropsRef.current) {
      /**
       * 1.拿到所有的key
       * 2. 遍历所有的key，对比前后的值变化
       */
      const allPropsKey = Object.keys({ ...prevPropsRef.current, ...props });
      const changedProps: PropsType = {};
      allPropsKey.forEach((key) => {
        if (!Object.is(prevPropsRef.current[key], props[key])) {
          changedProps[key] = {
            from: prevPropsRef.current[key],
            to: props[key],
          };
        }
      });

      if (Object.keys(changedProps).length > 0) {
        console.log("[why-did-you-update", componentName, changedProps);
      }
    }
    prevPropsRef.current = props;
  });
}

function App() {
  const [random, setRandom] = useState(Math.random());
  return (
    <>
      <Count random={random} />
      <button onClick={() => setRandom(Math.random())}>设置随机数</button>
    </>
  );
}

function Count(props: { random: number }) {
  const { random } = props;
  const [count, setCount] = useState(0);
  useWhyDidYouUpdate("Count", { ...props, count });
  return (
    <>
      <div>随机数：{random}</div>
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount(count - 1)}>-1</button>
    </>
  );
}
export default App;
