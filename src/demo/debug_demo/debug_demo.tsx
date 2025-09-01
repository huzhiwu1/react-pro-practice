import { useCallback, useEffect, useState } from "react";

interface IProps {
  count: number;
  handleClick: Function;
}
function RenderCount(props: IProps) {
  return (
    <>
      <div>{props.count}</div>
      <button onClick={() => props.handleClick(+1)}>+1</button>
      <button onClick={() => props.handleClick(-1)}>-1</button>
    </>
  );
}
function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  const handleClick = useCallback(
    (value: number) => {
      return (value += count);
    },
    [count]
  );
  return (
    <div>
      <RenderCount count={count} handleClick={handleClick} />
    </div>
  );
}
export default App;

/**
 * 1.启动服务
 * 2.点击vscode的debug按钮，选择chrome调试模式
 * 3.创建launch.json，把端口改成服务的端口
 * 4.进行打点测试
 */

/**
 * {
  // 使用 IntelliSense 了解相关属性。
  // 悬停以查看现有属性的描述。
  // 欲了解更多信息，请访问: https://go.microsoft.com/fwlink/?linkid=830387
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Launch Chrome",
      "request": "launch",
      "type": "chrome",
      "url": "http://localhost:5173",
      "webRoot": "${workspaceFolder}",
      //   "userDataDir": "/Users/huzhiwu/Library/Application\\ Support/Google/Chrome/Profile\\ 7"
      "userDataDir": false
    }
  ]
}

 */
