import { forwardRef, type ReactNode } from "react";
import type { IconProps } from ".";
import Icon from ".";

export type CreateIconOptions = {
  iconProps?: IconProps;
  content: ReactNode;
  viewbox?: string;
};
function createIcon(options: CreateIconOptions) {
  const { iconProps, content, viewbox = "0 0 1024 1024" } = options;
  /**
   * icon = createIcon
   * 外部使用
   * <icon ref={ref} {...props}/>
   * 这里还需要再做一次ref转发，
   * props还需要用高阶组件进行包装
   */
  return forwardRef<SVGSVGElement, IconProps>((props, ref) => {
    return (
      <Icon ref={ref} viewBox={viewbox} {...iconProps} {...props}>
        {content}
      </Icon>
    );
  });
}
export default createIcon;
