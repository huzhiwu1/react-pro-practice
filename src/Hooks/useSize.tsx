import { useCallback, useEffect, useRef, useState } from "react";
import ResizeObserver from "resize-observer-polyfill";
import type { RefObject } from "react";

export type SizeType = { width: number; height: number };
function useSize(el: RefObject<HTMLElement | null>) {
  /**
   * 初始化size,用el的宽高作为初始化参数
   */
  const [size, setSize] = useState<SizeType | undefined>(() =>
    el.current
      ? { width: el.current.clientWidth, height: el.current.clientHeight }
      : undefined
  );

  const onSizeChange = useCallback<ResizeObserverCallback>((entries) => {
    const [entry] = entries;
    setSize({
      height: entry.target.clientHeight,
      width: entry.target.clientWidth,
    });
  }, []);

  useEffect(() => {
    if (el.current) {
      const instance = new ResizeObserver(onSizeChange);
      instance.observe(el.current);
      return () => {
        if (el.current) {
          instance.unobserve(el.current);
        }
      };
    }
    return () => {};
  }, []);

  return size;
}

function App() {
  const divRef = useRef<HTMLDivElement>(null);
  const size = useSize(divRef);
  return (
    <div ref={divRef} style={{ height: "100vh" }}>
      占位
      <div>
        width:{size?.width} height:{size?.height}
      </div>
    </div>
  );
}

export default App;
