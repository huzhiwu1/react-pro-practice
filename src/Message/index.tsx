import { useEffect, useMemo } from "react";
import type { CSSProperties, FC, ReactNode, RefObject } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { useStore } from "./useStore";
import "./index.scss";
import { createPortal } from "react-dom";
import MessageItem from "./messageItem";

export type MessageProps = {
  className?: string;
  style?: CSSProperties;
  content?: ReactNode;
  id?: number;
  nodeRef?: RefObject<HTMLDivElement | null>;
};

const MessageProvider: FC<{}> = (props) => {
  const { messageList, add, remove, update, clear } = useStore();

  useEffect(() => {
    const timer = setInterval(() => {
      add({
        content: Math.random().toString().slice(2, 8),
      });
    }, 2000);
    return () => clearInterval(timer);
  }, []);
  const content = (
    <>
      <button onClick={() => remove(1)}>删除id=1</button>
      <button onClick={() => update(2, { content: "更新id=2" })}>
        更新id=2
      </button>
      <button onClick={() => clear()}>清除</button>
      <TransitionGroup className="message-wrapper">
        {messageList.map((message) => {
          return (
            <CSSTransition
              nodeRef={message.nodeRef}
              key={message.id}
              classNames="message"
              timeout={1000}
            >
              <MessageItem ref={message.nodeRef} {...message} remove={remove} />
            </CSSTransition>
          );
        })}
      </TransitionGroup>
    </>
  );
  const wrapper = useMemo(() => {
    const div = document.createElement("div");
    div.className = "message-container";
    document.body.appendChild(div);
    return div;
  }, []);
  return createPortal(content, wrapper);
};

function App() {
  return (
    <div>
      <MessageProvider />
    </div>
  );
}

export default App;
