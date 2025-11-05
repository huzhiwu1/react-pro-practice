import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from "react";
import type { PropsWithChildren } from "react";
import { createPortal } from "react-dom";
export type PortalProps = {
  attach: string | HTMLElement;
};

function getAttach(attach: PortalProps["attach"]) {
  if (typeof attach === "string") {
    return document.querySelector(attach);
  }
  if (typeof attach === "object" && attach instanceof window.HTMLElement) {
    return attach;
  }
  return document.body;
}

const Portal = forwardRef<HTMLElement, PropsWithChildren<PortalProps>>(
  (props, ref) => {
    const { children, attach = document.body } = props;
    /**
     * 1. 创建一个container，
     * 2. 将container渲染到document.body中
     * 3. 通过createPortal将children渲染到container中
     */
    const container = useMemo(() => {
      // 避免重复创建
      const el = document.createElement("div");
      el.className = "portal_wrap";
      return el;
    }, []);

    useEffect(() => {
      const attachDom = getAttach(attach);
      attachDom?.appendChild?.(container);
      return () => {
        attachDom?.removeChild?.(container);
      };
    }, [container, attach]);

    useImperativeHandle(ref, () => container, [container]);
    return createPortal(children, container);
  }
);

function App() {
  const containerRef = useRef<HTMLElement>(null);
  const [count, setCount] = useState(0);
  const content = (
    <button onClick={() => setCount((count) => count + 1)}>按钮{count}</button>
  );

  useEffect(() => {
    console.log(containerRef);
  }, []);
  return (
    <Portal attach={document.body} ref={containerRef}>
      {content}
    </Portal>
  );
}

export default App;
