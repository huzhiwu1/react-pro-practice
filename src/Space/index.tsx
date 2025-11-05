import React, { useMemo } from "react";
import cs from "classnames";
import "./index.scss";
import type {
  CSSProperties,
  FC,
  HTMLAttributes,
  PropsWithChildren,
} from "react";

export type SizeType = "small" | "middle" | "large" | number | undefined;
const SpaceSize = {
  small: 8,
  middle: 16,
  large: 24,
};

function getSpaceSize(size: SizeType) {
  return typeof size === "string" ? SpaceSize[size] : size || 0;
}
export interface SpaceProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  style?: CSSProperties;
  direction?: "horizontal" | "vertical";
  align?: "start" | "end" | "center" | "baseline";
  wrap?: boolean;
  size?: SizeType | [SizeType, SizeType];
}

const Space: FC<PropsWithChildren<SpaceProps>> = (props) => {
  const {
    className,
    style,
    direction = "horizontal",
    align,
    wrap,
    size = "small",
    children,
    ...restProps
  } = props;

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

  // 换行等style
  const otherStyle: CSSProperties = {};
  if (wrap) {
    otherStyle.flexFlow = "wrap";
  }

  const [horizontalSize, verticalSize] = useMemo(() => {
    const sizeArr = (Array.isArray(size) ? size : [size, size]) as [
      SizeType,
      SizeType
    ];
    return sizeArr.map((size) => getSpaceSize(size));
  }, [size]);

  otherStyle.rowGap = horizontalSize;
  otherStyle.columnGap = verticalSize;

  const cn = cs(className, "space", `space-${direction}`, {
    [`space-align-${mergedAlign}`]: mergedAlign,
  });
  return (
    <div style={{ ...style, ...otherStyle }} className={cn} {...restProps}>
      {nodes}
    </div>
  );
};
function App() {
  return (
    <Space
      direction="horizontal"
      style={{ width: "300px", height: "300px", background: "blue" }}
      wrap
    >
      <div style={{ width: "120px", height: "60px", background: "red" }} />
      <div style={{ width: "120px", height: "60px", background: "red" }} />
      <div style={{ width: "120px", height: "60px", background: "red" }} />
    </Space>
  );
}

export default App;
