import { useEffect, useMemo, useRef, useState } from "react";
import type { FC, ReactNode, CSSProperties } from "react";
import getMarkStyle from "./getMarkStyle";
import "./Mark.scss";

export type MarkProps = {
  element: HTMLElement | (() => HTMLElement); // 目标元素，
  container?: HTMLElement | (() => HTMLElement); // 目标元素的容器
  renderMarkContent?: (wrapper: ReactNode) => ReactNode; // mark会包围住element,randerMarkConten可以在mark周围渲染其他内容
};

const Mark: FC<MarkProps> = (props) => {
  const { renderMarkContent } = props;
  let { element, container } = props;
  const [style, setStyle] = useState<CSSProperties>();

  //   const setMarkStyle = useCallback(() => {}, []);

  useEffect(() => {
    if (!element) {
      return;
    }

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

    const markStyle = getMarkStyle(
      element,
      container || document.documentElement
    );

    setStyle(markStyle);

    // 获取目标元素在容器中的位置，目标元素的宽高
    // 以此制定mark元素的宽，高，border的宽高
  }, [element, container]);

  const content = useMemo(() => {
    if (!renderMarkContent) {
      return null;
    }
    return renderMarkContent(
      <div className="mask-content" style={{ width: "100%", height: "100%" }} />
    );
  }, [renderMarkContent]);

  return (
    <>
      <div className="mark" style={style}>
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

export default Mark;
