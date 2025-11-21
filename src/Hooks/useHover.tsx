import React from "react";
import { useState } from "react";
import type { MouseEvent, MouseEventHandler, ReactElement } from "react";

/**
 *  传入的组件可以有如下属性
 */
export type HoverableProps = {
  onMouseEnter?: MouseEventHandler<unknown>;
  onMouseLeave?: MouseEventHandler<unknown>;
  [key: string]: unknown; // 支持其他属性
};
export type HoverableElement =
  | ((state: boolean) => ReactElement<HoverableProps>)
  | ReactElement<HoverableProps>;

function useHover(element: HoverableElement) {
  const [state, setState] = useState<boolean>(false);

  /**
   * mouseEvent => originalOnMouseEnter=>setState(),originOnMouseEnter()
   */
  const onMouseEnter =
    (originalOnMouseEnter?: MouseEventHandler) => (event: MouseEvent) => {
      setState(true);
      originalOnMouseEnter?.(event);
    };

  const onMouseLeave =
    (originalOnMouseLeave?: MouseEventHandler) => (event: MouseEvent) => {
      setState(false);
      originalOnMouseLeave?.(event);
    };

  if (typeof element === "function") {
    element = element(state);
  }
  const hoverableElement = React.cloneElement(element, {
    onMouseEnter: onMouseEnter(element?.props?.onMouseEnter),
    onMouseLeave: onMouseLeave(element?.props?.onMouseLeave),
  });
  return [hoverableElement, state] as const;
}

// function App() {
//   const content = <div>请把鼠标悬浮在我上面</div>;
//   const [hoverable, hovered] = useHover(content);
//   return (
//     <div>
//       hover组件测试
//       <div>{hoverable}</div>
//       <div>{hovered ? "hover了" : "没有hover"}</div>
//     </div>
//   );
// }
// export default App;

export default useHover;
