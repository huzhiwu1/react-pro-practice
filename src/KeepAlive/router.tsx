/* eslint-disable react-refresh/only-export-components */
import { Button } from "antd";
import { useContext, useEffect, useState } from "react";
import useKeepLiveOutlet from "./useKeepLiveOutlet";
import type { RouteObject } from "react-router-dom";
import { Link, useLocation, createBrowserRouter } from "react-router-dom";
import { KeepAliveContext } from "./KeepAliveContext";

function Layout() {
  const { pathname } = useLocation();
  const element = useKeepLiveOutlet();

  return (
    <div>
      <div>当前路由：{pathname}</div>
      {element}
    </div>
  );
}
function Aaa() {
  const [count, setCount] = useState(0);
  const { dropByPath } = useContext(KeepAliveContext);
  return (
    <>
      <div>{count}</div>
      <Button onClick={() => setCount((count) => count + 1)}>+</Button>
      <Button onClick={() => setCount((count) => count - 1)}>-</Button>
      <div>
        <Link to="/Bbb">
          <div>去Bbb</div>
        </Link>
        <Link to="/Ccc">
          <div>去Ccc</div>
        </Link>
      </div>
      <button onClick={() => dropByPath?.("/Bbb")}>删除Bbb组件的缓存</button>
      <button onClick={() => dropByPath?.("Aaa")}>删除Aaa组件的缓存</button>
    </>
  );
}
function Bbb() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    return () => {
      console.log("卸载组件 Bbb");
    };
  }, []);
  return (
    <>
      <div>{count}</div>
      <Button onClick={() => setCount((count) => count + 1)}>+</Button>
      <Button onClick={() => setCount((count) => count - 1)}>-</Button>
      <div>
        <Link to="/">去首页</Link>
      </div>
    </>
  );
}
function Ccc() {
  const [count, setCount] = useState(0);
  return (
    <>
      <div>{count}</div>
      <Button onClick={() => setCount((count) => count + 1)}>+</Button>
      <Button onClick={() => setCount((count) => count - 1)}>-</Button>
      <div>
        <Link to="/">去首页</Link>
      </div>
    </>
  );
}
const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Aaa />,
      },
      {
        path: "/Bbb",
        element: <Bbb />,
      },
      {
        path: "/Ccc",
        element: <Ccc />,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
