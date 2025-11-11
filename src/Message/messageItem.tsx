import { forwardRef } from "react";
import type { CSSProperties, ReactNode } from "react";
import cs from "classnames";
import type { UseTimerProps } from "./useTimer";
import useTimer from "./useTimer";
export interface MessageItemProps extends UseTimerProps {
  className?: string;
  style?: CSSProperties;
  content?: ReactNode;
}

const MessageItem = forwardRef<HTMLDivElement, MessageItemProps>(
  (props, ref) => {
    const { className, style, content } = props;
    const { onMouseEnter, onMouseLeave } = useTimer(props);
    return (
      <div
        ref={ref}
        className={cs(className, "message-item")}
        style={style}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        {content}
      </div>
    );
  }
);
export default MessageItem;
