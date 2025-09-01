import {
  useState,
  useEffect,
  useRef,
  useLayoutEffect,
  useCallback,
} from "react";
function useInterval(fn: Function, timeout: number) {
  const fnRef = useRef(fn);
  // 如果fn变更，需要注意更新
  // 更新时机要再dom准备完成后，渲染到浏览器上前
  const cleanRef = useRef<Function>(() => {});
  // 避免外部使用clean函数时，由于useRef.current的地址变化，而导致组件更新，所以这里使用useCallback包裹
  const cleanCallback = useCallback(() => {
    cleanRef?.current?.();
  }, []);
  //   useLayoutEffect(() => {
  fnRef.current = fn;
  //   }, []);
  // 需要在dom已经渲染到浏览器上后，再执行定时器任务
  useEffect(() => {
    const timer = setInterval(() => {
      fnRef?.current?.();
    }, timeout);
    cleanRef.current = () => {
      clearInterval(timer);
    };
    return cleanCallback;
  }, []);
  return cleanCallback;
}
function App() {
  const [count, setCount] = useState(0);

  //   useEffect(() => {
  //     const timer = setInterval(() => {
  //       setCount((count) => count + 1);
  //     }, 1000);
  //     return () => clearInterval(timer);
  //   }, []);
  useInterval(() => setCount(count + 1), 1000);

  return <div>{count}</div>;
}

export default App;
