import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
} from "react";
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
export type MessageProviderRef = {
  messageList: MessageProps[];
  add: (message: MessageProps) => void;
  remove: (id: number) => void;
  update: (id: number, message: MessageProps) => void;
  clearAll: () => void;
};
const MessageProvider = forwardRef<MessageProviderRef>((props, ref) => {
  const { messageList, add, remove, update, clearAll } = useStore();

  useImperativeHandle(ref, () => ({
    messageList,
    add,
    remove,
    update,
    clearAll,
  }));

  const content = (
    <>
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
});

function App() {
  const messageProviderRef = useRef<MessageProviderRef>(null);
  return (
    <div>
      <button
        onClick={() =>
          messageProviderRef.current?.add?.({
            content: "请求成功！",
          })
        }
      >
        请求成功！
      </button>
      <MessageProvider ref={messageProviderRef} />
    </div>
  );
}

export default App;
