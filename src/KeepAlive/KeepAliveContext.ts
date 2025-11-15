import { createContext } from "react";
import type { ReactNode } from "react";
export type KeepAliveContextType = {
  keepPaths: (string | RegExp)[]; // 需要保存状态的路由
  keepElements: Record<string, ReactNode>; // 保存的路由组件，Record<路径，路由组件>
  dropByPath?: (path: string) => void;
};

export function isKeepPath(isKeepPath: Array<string | RegExp>, path: string) {
  for (const keepPath of isKeepPath) {
    if (keepPath === path) {
      return true;
    }
    if (keepPath instanceof RegExp && keepPath.test(path)) {
      return true;
    }
    if (typeof keepPath === "string" && keepPath.toLocaleLowerCase() === path) {
      return true;
    }
  }
  return false;
}

export const keepElements: KeepAliveContextType["keepElements"] = {};

export const KeepAliveContext = createContext<KeepAliveContextType>({
  keepPaths: [],
  keepElements: keepElements,
  dropByPath: (path: string) => {
    keepElements[path] = null;
  },
});
