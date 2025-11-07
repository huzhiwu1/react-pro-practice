import { useCallback, useEffect, useRef, useState } from "react";

function useInterval(fn: Function, delay: number) {
  const fnRef = useRef<Function>(fn);
  useEffect(() => {
    fnRef.current = fn;
  });

  const timerRef = useRef<number>(null);
  const clear = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
  }, []);

  useEffect(() => {
    timerRef.current = setInterval(() => fnRef.current(), delay);
    return clear;
  }, [delay]);

  return clear;
}

function App() {
  const [count, setCount] = useState(0);

  useInterval(() => {
    console.log(count);
    setCount(count + 1);
  }, 1000);
  return <div>{count}</div>;
}

export default App;
