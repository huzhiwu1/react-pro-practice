import { useEffect } from "react";

function useLifecycles(
  mountedCallback?: Function,
  unMountedCallback?: Function
) {
  useEffect(() => {
    mountedCallback?.();
    return () => {
      unMountedCallback?.();
    };
  }, []);
}

export default useLifecycles;
