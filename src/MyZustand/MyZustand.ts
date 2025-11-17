/**
 *
 * @param createState 中间件，在setState,getState,操作其他api时，作为中间件去处理额外的事件
 */
export const createStore = <T>(createState) => {
  let state: Partial<T>;

  const setState = (
    partialState: Partial<T> | ((state: Partial<T>) => Partial<T>),
    replace?: boolean
  ) => {
    const nextState =
      typeof partialState === "function" ? partialState(state) : partialState;

    if (Object.is(state, nextState)) {
      return;
    }

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
  };

  const getState = () => state;

  state = createState(setState, getState);
  return {
    getState,
    setState,
  };
};
