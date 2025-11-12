import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { FC, ReactNode, CSSProperties } from "react";
import getMaskStyle from "./getMaskStyle";
import "./Mask.scss";
import ResizeObserver from "resize-observer-polyfill";

export type MaskProps = {
  element: HTMLElement | (() => HTMLElement); // 目标元素，
  container?: HTMLElement | (() => HTMLElement); // 目标元素的容器
  renderMaskContent?: (wrapper: ReactNode) => ReactNode; // mask会包围住element,randerMaskConten可以在mask周围渲染其他内容
  onAnimationStart?: () => void;
  onAnimationEnd?: () => void;
};

const Mask: FC<MaskProps> = (props) => {
  const {
    renderMaskContent,
    element,
    container,
    onAnimationStart,
    onAnimationEnd,
  } = props;
  const [style, setStyle] = useState<CSSProperties>();
  const elementRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLElement | undefined>(null);

  const onAnimationStartRef = useRef(onAnimationStart);
  onAnimationStartRef.current = onAnimationStart;

  const onAnimationEndRef = useRef(onAnimationEnd);
  onAnimationEndRef.current = onAnimationEnd;

  const setElementRef = useCallback(() => {
    elementRef.current = typeof element === "function" ? element() : element;
    containerRef.current =
      typeof container === "function" ? container() : container;
  }, [element, container]);

  const setMaskStyle = useCallback(() => {
    if (!elementRef.current) {
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          elementRef.current?.scrollIntoView({
            block: "center",
            inline: "center",
          });
        } else {
          const maskStyle = getMaskStyle(
            elementRef.current!,
            containerRef.current || document.documentElement
          );

          setStyle(maskStyle);
          observer.unobserve(elementRef.current!);

          observer.disconnect();
        }
      });
    });

    observer.observe(elementRef.current!);
  }, []);

  // 目标元素变化时，mark会有200ms的动画
  // 30ms加个缓冲
  useEffect(() => {
    onAnimationStartRef.current?.();
    const timer = setTimeout(() => {
      onAnimationEndRef.current?.();
    }, 230);
    return () => clearTimeout(timer);
  }, [element]);

  useEffect(() => {
    if (!element) {
      return;
    }
    setElementRef();

    setMaskStyle();

    // 获取目标元素在容器中的位置，目标元素的宽高
    // 以此制定mask元素的宽，高，border的宽高
  }, [setMaskStyle, setElementRef]);

  // 容器高度变化的话，重新计算mask 的样式
  useEffect(() => {
    setElementRef();
    const observer = new ResizeObserver(() => {
      setMaskStyle();
    });

    observer.observe(containerRef.current || document.documentElement);
    return () => {
      observer.disconnect();
    };
  }, []);

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
      if (prevStyleOverflow.current !== null) {
        document.body.style.overflow = prevStyleOverflow.current;
      }
    };
  }, []);
  return <></>;
}

export default Mask;
