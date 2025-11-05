import React from "react";
import cs from "classnames";
import "./index.scss";
import type {
  CSSProperties,
  FC,
  HTMLAttributes,
  PropsWithChildren,
} from "react";

export interface SpaceProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  style?: CSSProperties;
  direction?: "horizontal" | "vertical";
  align?: "start" | "end" | "center" | "baseline";
}
const Space: FC<PropsWithChildren<SpaceProps>> = (props) => {
  const { className, style, direction = "horizontal", align, children } = props;

  // 如果是水平排列，默认子组件锤子居中
  const mergedAlign =
    direction === "horizontal" && align === undefined ? "center" : align;

  // 将children扁平化
  const flapChildren = React.Children.toArray(children);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const nodes = flapChildren.map((item: any, index) => {
    const key = (item && item.key) || `space-item-${index}`;
    return (
      <div className="space-item" key={key}>
        {item}
      </div>
    );
  });
  const cn = cs(className, "space", `space-${direction}`, {
    [`space-align-${mergedAlign}`]: mergedAlign,
  });
  return (
    <div style={style} className={cn}>
      {nodes}
    </div>
  );
};
function App() {
  return (
    <Space
      direction="horizontal"
      style={{ width: "300px", height: "300px", background: "blue" }}
    >
      <div style={{ width: "60px", height: "60px", background: "red" }} />
      <div style={{ width: "60px", height: "60px", background: "red" }} />
      <div style={{ width: "60px", height: "60px", background: "red" }} />
    </Space>
  );
}

export default App;
