import React from "react";
import { useCallback, useEffect, useRef, useState } from "react";

function useScroll(refObj: React.RefObject<HTMLElement | null>) {
  const [isScrolling, setIsScrolling] = useState(false);

  // 用于在鼠标滚动后，设置150毫秒后显示滚动停止
  const scrollTimerRef = useRef<number>(null);

  const handleScrollEnd = useCallback(() => {
    setIsScrolling(false);
  }, []);

  const handleScroll = useCallback(() => {
    console.log("scroll");
    setIsScrolling(true);
    if (scrollTimerRef.current) {
      clearTimeout(scrollTimerRef.current);
    }
    scrollTimerRef.current = setTimeout(handleScrollEnd, 150);
  }, []);

  /** dom挂载到页面上后，才能添加滚动事件 */
  useEffect(() => {
    if (refObj?.current) {
      refObj.current.addEventListener("scroll", handleScroll);
      return () => {
        if (refObj?.current) {
          refObj.current.removeEventListener("scroll", handleScroll);
        }
      };
    }
    return () => {};
  }, []);
  return isScrolling;
}

function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isScrolling = useScroll(containerRef);
  return (
    <>
      <div>{isScrolling ? "滚动中" : "滚动停止"}</div>
      <div
        className="container"
        ref={containerRef}
        style={{ height: "200px", overflow: "auto" }}
      >
        <div style={{ height: "40px", lineHeight: "40px" }}>占位</div>
        <div style={{ height: "40px", lineHeight: "40px" }}>占位</div>
        <div style={{ height: "40px", lineHeight: "40px" }}>占位</div>
        <div style={{ height: "40px", lineHeight: "40px" }}>占位</div>
        <div style={{ height: "40px", lineHeight: "40px" }}>占位</div>
        <div style={{ height: "40px", lineHeight: "40px" }}>占位</div>
        <div style={{ height: "40px", lineHeight: "40px" }}>占位</div>
        <div style={{ height: "40px", lineHeight: "40px" }}>占位</div>
        <div style={{ height: "40px", lineHeight: "40px" }}>占位</div>
        <div style={{ height: "40px", lineHeight: "40px" }}>占位</div>
        <div style={{ height: "40px", lineHeight: "40px" }}>占位</div>
        <div style={{ height: "40px", lineHeight: "40px" }}>占位</div>
        <div style={{ height: "40px", lineHeight: "40px" }}>占位</div>
        <div style={{ height: "40px", lineHeight: "40px" }}>占位</div>
        <div style={{ height: "40px", lineHeight: "40px" }}>占位</div>
        <div style={{ height: "40px", lineHeight: "40px" }}>占位</div>
        <div style={{ height: "40px", lineHeight: "40px" }}>占位</div>
        <div style={{ height: "40px", lineHeight: "40px" }}>占位</div>
        <div style={{ height: "40px", lineHeight: "40px" }}>占位</div>
        <div style={{ height: "40px", lineHeight: "40px" }}>占位</div>
        <div style={{ height: "40px", lineHeight: "40px" }}>占位</div>
        <div style={{ height: "40px", lineHeight: "40px" }}>占位</div>
        <div style={{ height: "40px", lineHeight: "40px" }}>占位</div>
        <div style={{ height: "40px", lineHeight: "40px" }}>占位</div>
        <div style={{ height: "40px", lineHeight: "40px" }}>占位</div>
        <div style={{ height: "40px", lineHeight: "40px" }}>占位</div>
        <div style={{ height: "40px", lineHeight: "40px" }}>占位</div>
        <div style={{ height: "40px", lineHeight: "40px" }}>占位</div>
        <div style={{ height: "40px", lineHeight: "40px" }}>占位</div>
        <div style={{ height: "40px", lineHeight: "40px" }}>占位</div>
        <div style={{ height: "40px", lineHeight: "40px" }}>占位</div>
        <div style={{ height: "40px", lineHeight: "40px" }}>占位</div>
        <div style={{ height: "40px", lineHeight: "40px" }}>占位</div>
        <div style={{ height: "40px", lineHeight: "40px" }}>占位</div>
        <div style={{ height: "40px", lineHeight: "40px" }}>占位</div>
        <div style={{ height: "40px", lineHeight: "40px" }}>占位</div>
        <div style={{ height: "40px", lineHeight: "40px" }}>占位</div>
        <div style={{ height: "40px", lineHeight: "40px" }}>占位</div>
        <div style={{ height: "40px", lineHeight: "40px" }}>占位</div>
        <div style={{ height: "40px", lineHeight: "40px" }}>占位</div>
        <div style={{ height: "40px", lineHeight: "40px" }}>占位</div>
        <div style={{ height: "40px", lineHeight: "40px" }}>占位</div>
        <div style={{ height: "40px", lineHeight: "40px" }}>占位</div>
        <div style={{ height: "40px", lineHeight: "40px" }}>占位</div>
        <div style={{ height: "40px", lineHeight: "40px" }}>占位</div>
        <div style={{ height: "40px", lineHeight: "40px" }}>占位</div>
        <div style={{ height: "40px", lineHeight: "40px" }}>占位</div>
        <div style={{ height: "40px", lineHeight: "40px" }}>占位</div>
        <div style={{ height: "40px", lineHeight: "40px" }}>占位</div>
        <div style={{ height: "40px", lineHeight: "40px" }}>占位</div>
        <div style={{ height: "40px", lineHeight: "40px" }}>占位</div>
        <div style={{ height: "40px", lineHeight: "40px" }}>占位</div>
      </div>
    </>
  );
}

export default App;
