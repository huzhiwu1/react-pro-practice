import { useCallback, useEffect, useRef } from "react";

function useMountedState(): () => boolean {
  const mountedRef = useRef<boolean>(false);
  const getMountedState = useCallback(() => mountedRef.current, []);
  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
    };
  }, []);
  return getMountedState;
}

export default useMountedState;
