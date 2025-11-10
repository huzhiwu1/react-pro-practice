import { useEffect, type CSSProperties, type FC, type ReactNode } from "react";
import { useStore } from "./useStore";

export type MessageProps = {
  className?: string;
  style?: CSSProperties;
  content?: ReactNode;
  id?: number;
};

const MessageProvider: FC<{}> = (props) => {
  const { messageList, add, remove, update, clear } = useStore();

  useEffect(() => {
    const timer = setInterval(() => {
      add({
        content: Math.random().toString().slice(0, 5),
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  return (
    <>
      <button onClick={() => remove(1)}>删除id=1</button>
      <button onClick={() => update(2, { content: "更新id=2" })}>
        更新id=2
      </button>
      <button onClick={() => clear()}>清楚</button>

      {messageList.map((message) => {
        return (
          <div
            className={message.className}
            style={{
              width: 100,
              lineHeight: "30px",
              border: "1px solid #000",
              margin: "20px",
            }}
            key={message.id}
          >
            {message.content}
          </div>
        );
      })}
    </>
  );
};

function App() {
  return (
    <div>
      <MessageProvider />
    </div>
  );
}

export default App;
