import { useSyncExternalStore } from "react";

export type StateType<T> = Partial<T> | T;

export type SetStateType<T> = (
  partialState: StateType<T> | ((state: StateType<T>) => StateType<T>),
  replace?: boolean
) => void;

export type GetStateType<T> = () => StateType<T>;

export type SubscribeType<T> = (listener: ListenerType<T>) => Function;

export type ApiType<T> = {
  setState: SetStateType<T>;
  getState: GetStateType<T>;
  subscribe: SubscribeType<T>;
  destroy: () => void;
};
export type ListenerType<T> = (
  state: StateType<T>,
  oldState: StateType<T>
) => void;

export type CreateStateType<T> = (
  setState: SetStateType<T>,
  getState?: GetStateType<T>,
  api?: ApiType<T>
) => StateType<T>;
/**
 *
 * @param createState 中间件，在setState,getState,操作其他api时，作为中间件去处理额外的事件
 */
export const createStore = <T>(createState: CreateStateType<T>) => {
  let state: StateType<T>;
  const listeners: Set<ListenerType<T>> = new Set();

  const setState: SetStateType<T> = (partialState, replace) => {
    const nextState =
      typeof partialState === "function"
        ? (partialState as (state: StateType<T>) => StateType<T>)(state)
        : partialState;

    if (Object.is(state, nextState)) {
      return;
    }

    const prevState = state;

    if (!replace) {
      // 不替换，融合
      if (typeof nextState !== "object" || nextState === null) {
        state = nextState;
      } else {
        state = Object.assign({}, state, nextState);
      }
    } else {
      state = nextState;
    }
    listeners.forEach((listener) => listener(state, prevState));
  };

  const getState: GetStateType<T> = () => state;

  const subscribe: SubscribeType<T> = (listener) => {
    listeners.add(listener);
    return () => {
      listeners.delete(listener);
    };
  };

  const destroy = () => {
    listeners.clear();
  };

  const api = {
    setState,
    getState,
    subscribe,
    destroy,
  };

  state = createState(setState, getState, api);
  return api;
};

export type SelectorType<T> = (state: StateType<T>) => StateType<T>;
/**
 * 状态变更，触发重新渲染
 */

function useStore<T>(api: ApiType<T>, selector: SelectorType<T>) {
  function getState() {
    return selector(api.getState());
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return useSyncExternalStore(api.subscribe as any, getState);
}

export function create<T>(
  createState: CreateStateType<T>
): ApiType<T> & { (selector: SelectorType<T>): StateType<T> } {
  const api = createStore(createState);
  const useBoundStore = (selector: SelectorType<T>) => useStore(api, selector);

  /**
   * 合并函数和对象，
   * 既可以当函数使用
   * useBoundStore(selector)
   * 又可以当对象使用
   * useBoundStore.getState()
   */
  Object.assign(useBoundStore, api);
  return useBoundStore as ApiType<T> & {
    (selector: SelectorType<T>): StateType<T>;
  };
}
