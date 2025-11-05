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
}
const Space: FC<PropsWithChildren<SpaceProps>> = (props) => {
  const { className, style, direction = "horizontal", children } = props;

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
  const cn = cs(className, "space", `space-${direction}`);
  return (
    <div style={style} className={cn}>
      {nodes}
    </div>
  );
};
function App() {
  return (
    <Space direction="vertical">
      <div key="test-1">1</div>
      <div key="test-2">2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
      <div>9</div>
      <div>10</div>1 [2]
      {3}
      <div>
        <div>
          <div>4</div>
        </div>
      </div>
      {[[[<div>5</div>]]]}
    </Space>
  );
}

export default App;
