import { ConfigProvider } from "./ConfigProvider";
import useMessage from "./useMessage";

function Aaa() {
  const messageProviderRef = useMessage();

  return (
    <div>
      aa组件
      <button onClick={() => messageProviderRef.add({ content: "请求成功" })}>
        请求成功！
      </button>
    </div>
  );
}
function App() {
  return (
    <ConfigProvider>
      <Aaa />
    </ConfigProvider>
  );
}

export default App;
