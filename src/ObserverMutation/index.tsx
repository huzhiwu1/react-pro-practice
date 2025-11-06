import React, {
  isValidElement,
  useCallback,
  useEffect,
  useLayoutEffect,
} from "react";
import useMutationObserver from "../Hooks/useMutationObserver";
import { useRef, useState } from "react";
import type { FC } from "react";

export type MutationObserverType = {
  options?: MutationObserverInit;
  onMutate: MutationCallback;
  children: React.ReactElement;
};
const MutationObserver: FC<MutationObserverType> = (props) => {
  const { options, onMutate, children } = props;
  // useMutationObserver需要监听dom,但在执行该函数时，dom还没挂载到页面上
  // 这里需要使用ref来记录渲染后的节点，再使用useState进行状态的变化，让useMutationObserver再次之行
  const [target, setTarget] = useState<HTMLElement>();
  const nodeRef = useRef<HTMLElement>(null);

  useMutationObserver(target!, onMutate, options);

  useLayoutEffect(() => {
    if (nodeRef.current) {
      setTarget(nodeRef.current);
    }
  }, []);

  if (!children || !isValidElement(children)) {
    return null;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return React.cloneElement<any>(children, { ref: nodeRef });
};

// export default MutationObserver;

function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);
  }, []);
  const onObserver = useCallback<MutationCallback>((mutation) => {
    console.log(mutation);
  }, []);
  return (
    <MutationObserver onMutate={onObserver}>
      <>
        <div className={`father-${count}`}>
          father
          <div className={`child-${count}`}>
            child <div className="count">{count}</div>
          </div>
        </div>
      </>
    </MutationObserver>
  );
}
export default App;
