import { useContext } from "react";
import { MessageConfigContext } from "./ConfigProvider";

function useMessage() {
  const { messageProviderRef } = useContext(MessageConfigContext);
  if (!messageProviderRef) {
    throw new Error("请在最外层添加 ConfigProvider 组件");
  }

  return messageProviderRef.current!;
}

export default useMessage;
