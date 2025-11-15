import { useContext } from "react";
import { useOutlet, useLocation, matchPath } from "react-router-dom";
import { KeepAliveContext, isKeepPath } from "./KeepAliveContext";

function useKeepLiveOutlet() {
  const { keepPaths, keepElements } = useContext(KeepAliveContext);
  const { pathname } = useLocation();

  const element = useOutlet();

  // 是否保存组件的状态
  const isKeep = isKeepPath(keepPaths, pathname);

  // 将路由组件保存到全局状态
  if (isKeep) {
    keepElements![pathname] = element;
  }

  return (
    <>
      {Object.entries(keepElements)?.map(([path, keepElement]) => {
        return (
          <div
            key={path}
            className="keep-alive-path"
            style={{
              height: "100%",
              width: "100%",
              position: "relative",
              overflow: "hidden auto",
            }}
            hidden={!matchPath(path, pathname)}
          >
            {keepElement}
          </div>
        );
      })}
      {!isKeep && element}
    </>
  );
}

export default useKeepLiveOutlet;
