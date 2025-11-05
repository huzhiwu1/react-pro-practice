import {
  forwardRef,
  type CSSProperties,
  type PropsWithChildren,
  type SVGAttributes,
} from "react";
import cs from "classnames";
import "./index.scss";

export type BaseIconProps = {
  className?: string;
  style?: CSSProperties;
  size?: string | string[];
  spin?: boolean;
};

export type IconProps = BaseIconProps &
  Omit<SVGAttributes<SVGElement>, keyof BaseIconProps>;

function getSize(size: BaseIconProps["size"]) {
  if (Array.isArray(size) && size.length === 2) {
    return size as string[];
  }
  const width = (size as string) || "1em";
  const height = (size as string) || "1em";
  return [width, height];
}

const Icon = forwardRef<SVGSVGElement, PropsWithChildren<IconProps>>(
  (props, ref) => {
    const { className, style, size, spin, children, ...rest } = props;
    const cn = cs("icon", className, {
      spin: spin,
    });
    const [width, height] = getSize(size);

    return (
      <svg
        className={cn}
        ref={ref}
        style={style}
        width={width}
        height={height}
        {...rest}
      >
        {children}
      </svg>
    );
  }
);
export default Icon;
