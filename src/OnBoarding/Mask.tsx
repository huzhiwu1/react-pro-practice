import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { FC, ReactNode, CSSProperties } from "react";
import getMaskStyle from "./getMaskStyle";
import "./Mask.scss";
import ResizeObserver from "resize-observer-polyfill";

export type MaskProps = {
  element: HTMLElement | (() => HTMLElement); // 目标元素，
  container?: HTMLElement | (() => HTMLElement); // 目标元素的容器
  renderMaskContent?: (wrapper: ReactNode) => ReactNode; // mask会包围住element,randerMaskConten可以在mask周围渲染其他内容
};

const Mask: FC<MaskProps> = (props) => {
  const { renderMaskContent } = props;
  let { element, container } = props;
  const [style, setStyle] = useState<CSSProperties>();

  const setMaskStyle = useCallback(() => {
    if (typeof element === "function") {
      element = element();
    }
    if (typeof container === "function") {
      container = container();
    }

    element.scrollIntoView({
      block: "center",
      inline: "center",
    });

    const maskStyle = getMaskStyle(
      element,
      container || document.documentElement
    );

    setStyle(maskStyle);
  }, [element, container]);

  // 容器高度变化的话，重新计算mask 的样式
  useEffect(() => {
    const observer = new ResizeObserver(() => {
      setMaskStyle();
    });
    if (typeof container === "function") {
      container = container();
    }
    observer.observe(container || document.documentElement);
    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!element) {
      return;
    }
    setMaskStyle();

    // 获取目标元素在容器中的位置，目标元素的宽高
    // 以此制定mask元素的宽，高，border的宽高
  }, [setMaskStyle]);

  const content = useMemo(() => {
    if (!renderMaskContent) {
      return null;
    }
    return renderMaskContent(
      <div className="mask-content" style={{ width: "100%", height: "100%" }} />
    );
  }, [renderMaskContent]);

  return (
    <>
      <div className="mask" style={style}>
        {content}
      </div>
      {style ? <OverflowHidden /> : null}
    </>
  );
};

function OverflowHidden() {
  const prevStyleOverflow = useRef<string>(null);
  useEffect(() => {
    prevStyleOverflow.current = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      if (prevStyleOverflow.current) {
        document.body.style.overflow = prevStyleOverflow.current;
      }
    };
  }, []);
  return <></>;
}

export default Mask;
