import type { ReactNode, CSSProperties, FC } from "react";
import React from "react";
import { useCallback, useLayoutEffect, useRef, useState } from "react";

export type LazyLoadProps = {
  offset?: number | string;
  className?: string;
  children: ReactNode;
  width?: number | string;
  height?: number | string;
  style?: CSSProperties;
  placeholder?: ReactNode;
  onContentVisible?: () => void;
};

const LazyLoad: FC<LazyLoadProps> = function (props) {
  const {
    offset = 0,
    children,
    width,
    height,
    className,
    style,
    placeholder,
    onContentVisible,
  } = props;

  const [visible, setVisible] = useState(false);
  const onContentVisibleRef = useRef<Function>(onContentVisible);
  onContentVisibleRef.current = onContentVisible;

  // 使用ref来拿到容器的dom，然后使用IntersectionObserver进行监听
  const containerRef = useRef<HTMLDivElement>(null);

  // 使用obsererRef是因为需要在dom更新完成，还没渲染到页面上时进行监听，
  // 还需要在dom进入视口后，解除监听事件，
  // 两个不同时机调用，需要使用ref
  const observerRef = useRef<IntersectionObserver>(null);

  const mergedPlaceholder = placeholder || <div>loading...</div>;

  const unObserve = useCallback(() => {
    const container = containerRef.current;
    if (container && container instanceof HTMLElement && observerRef.current) {
      observerRef.current.unobserve(container);
      observerRef.current.disconnect();
    }
  }, []);

  const intersectionCallback = useCallback<IntersectionObserverCallback>(
    (entries) => {
      const [entry] = entries;
      const { isIntersecting } = entry;
      if (isIntersecting) {
        setVisible(true);
        onContentVisibleRef.current?.();
        // 这里需要解除IntersectionObserver的监听事件
        unObserve();
      }
    },
    []
  );

  useLayoutEffect(() => {
    if (containerRef.current && containerRef.current instanceof HTMLElement) {
      const rootMargin =
        typeof offset === "number" ? offset + "px" : offset || "0px";

      observerRef.current = new IntersectionObserver(intersectionCallback, {
        rootMargin,
        threshold: 0,
      });

      observerRef.current.observe(containerRef.current);
      return unObserve;
    }
  }, []);

  return (
    <div
      className={className}
      style={{
        width: width,
        height: height,
        ...style,
      }}
      ref={containerRef}
    >
      {visible ? children : mergedPlaceholder}
    </div>
  );
};

// const LazyComp = React.lazy(() => import("./lazyComDeom"));

// function App() {
//   const onImgVisible = useCallback(() => {
//     console.log("出现在视口");
//   }, []);
//   return (
//     <>
//       <div style={{ height: "40px", lineHeight: "40px" }}>占位</div>
//       <div style={{ height: "40px", lineHeight: "40px" }}>占位</div>
//       <div style={{ height: "40px", lineHeight: "40px" }}>占位</div>
//       <div style={{ height: "40px", lineHeight: "40px" }}>占位</div>
//       <div style={{ height: "40px", lineHeight: "40px" }}>占位</div>
//       <div style={{ height: "40px", lineHeight: "40px" }}>占位</div>
//       <div style={{ height: "40px", lineHeight: "40px" }}>占位</div>
//       <div style={{ height: "40px", lineHeight: "40px" }}>占位</div>
//       <div style={{ height: "40px", lineHeight: "40px" }}>占位</div>
//       <div style={{ height: "40px", lineHeight: "40px" }}>占位</div>
//       <div style={{ height: "40px", lineHeight: "40px" }}>占位</div>
//       <div style={{ height: "40px", lineHeight: "40px" }}>占位</div>
//       <div style={{ height: "40px", lineHeight: "40px" }}>占位</div>
//       <div style={{ height: "40px", lineHeight: "40px" }}>占位</div>
//       <div style={{ height: "40px", lineHeight: "40px" }}>占位</div>
//       <div style={{ height: "40px", lineHeight: "40px" }}>占位</div>
//       <div style={{ height: "40px", lineHeight: "40px" }}>占位</div>
//       <div style={{ height: "40px", lineHeight: "40px" }}>占位</div>
//       <div style={{ height: "40px", lineHeight: "40px" }}>占位</div>
//       <div style={{ height: "40px", lineHeight: "40px" }}>占位</div>
//       <div style={{ height: "40px", lineHeight: "40px" }}>占位</div>
//       <div style={{ height: "40px", lineHeight: "40px" }}>占位</div>
//       <div style={{ height: "40px", lineHeight: "40px" }}>占位</div>
//       <div style={{ height: "40px", lineHeight: "40px" }}>占位</div>
//       <div style={{ height: "40px", lineHeight: "40px" }}>占位</div>
//       <div style={{ height: "40px", lineHeight: "40px" }}>占位</div>
//       <div style={{ height: "40px", lineHeight: "40px" }}>占位</div>
//       <div style={{ height: "40px", lineHeight: "40px" }}>占位</div>
//       <div style={{ height: "40px", lineHeight: "40px" }}>占位</div>
//       <div style={{ height: "40px", lineHeight: "40px" }}>占位</div>
//       <div style={{ height: "40px", lineHeight: "40px" }}>占位</div>
//       <div style={{ height: "40px", lineHeight: "40px" }}>占位</div>
//       <LazyLoad
//         onContentVisible={onImgVisible}
//         // placeholder={<div>测试placeholder</div>}
//       >
//         <img src="https://img1.baidu.com/it/u=2172818577,3783888802&fm=253&app=138&f=JPEG?w=800&h=1422" />
//       </LazyLoad>
//       <div style={{ height: "40px", lineHeight: "40px" }}>占位</div>
//       <div style={{ height: "40px", lineHeight: "40px" }}>占位</div>
//       <div style={{ height: "40px", lineHeight: "40px" }}>占位</div>
//       <div style={{ height: "40px", lineHeight: "40px" }}>占位</div>
//       <div style={{ height: "40px", lineHeight: "40px" }}>占位</div>
//       <div style={{ height: "40px", lineHeight: "40px" }}>占位</div>
//       <div style={{ height: "40px", lineHeight: "40px" }}>占位</div>
//       <LazyLoad
//         offset={10}
//         onContentVisible={() => console.log("组件加载完成")}
//       >
//         <LazyComp />
//       </LazyLoad>
//     </>
//   );
// }

// export default App;

export default LazyLoad;
