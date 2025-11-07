import { useCallback, useEffect, useRef, useState } from "react";

function useTimeout(fn: Function, delay: number) {
  const fnRef = useRef<Function>(fn);
  fnRef.current = fn;

  const timerRef = useRef<number>(null);

  const clear = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
  }, []);

  useEffect(() => {
    timerRef.current = setTimeout(() => fnRef.current(), delay);
    return clear;
  }, [delay]);
}

function App() {
  const [count, setCount] = useState(0);
  useTimeout(() => setCount(count + 1), 2000);
  return <div>{count}</div>;
}
export default App;
