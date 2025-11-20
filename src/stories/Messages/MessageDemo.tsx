import useMessage from "../../Message/useMessage";

function MessageDemo() {
  const messageProviderRef = useMessage();
  return (
    <div>
      <button
        onClick={() =>
          messageProviderRef.add({ content: "顶部消息", position: "top" })
        }
      >
        显示顶部消息
      </button>
      <button
        onClick={() =>
          messageProviderRef.add({
            content: "显示底部消息",
            position: "bottom",
          })
        }
      >
        显示底部消息
      </button>
      <button
        onClick={() => {
          messageProviderRef.add({
            content: "消息id===111",
            position: "top",
            id: 1111,
          });
        }}
      >
        显示消息id=1111
      </button>
      <button onClick={() => messageProviderRef.remove(1111)}>
        删除消息id=1111
      </button>
      <button
        onClick={() =>
          messageProviderRef.update(1111, {
            content: "你好",
          })
        }
      >
        更新消息id=1111为你好
      </button>
    </div>
  );
}

export default MessageDemo;
