import { useEffect, useRef } from "react";

const defaultOptions: MutationObserverInit = {
  subtree: true, // 监听子节点的children和属性变化
  childList: true, // 监听子组件的属性变化
  attributeFilter: ["style", "class"], // 监听style,class的属性变化
};
function useMutationObserver(
  nodeOrlist: HTMLElement | HTMLElement[],
  callback: MutationCallback,
  options: MutationObserverInit = defaultOptions
) {
  const callbackRef = useRef<MutationCallback>(null);
  callbackRef.current = callback;

  // 需要节点渲染到页面上之后，再进行监听
  useEffect(() => {
    if (!nodeOrlist || !callbackRef.current) {
      return;
    }
    // 记录实例，用于卸载组件时进行清除副作用
    let instance: MutationObserver;
    if ("MutationObserver" in window) {
      instance = new MutationObserver(callbackRef.current);
      nodeOrlist = Array.isArray(nodeOrlist) ? nodeOrlist : [nodeOrlist];
      nodeOrlist.forEach((node) => {
        instance.observe(node, options);
      });
    }
    return () => {
      instance.takeRecords();
      instance.disconnect();
    };
  }, [nodeOrlist, options]);
}

export default useMutationObserver;
