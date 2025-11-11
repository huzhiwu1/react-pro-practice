import { useEffect, useRef } from "react";

export type UseTimerProps = {
  duration?: number;
  id?: number;
  remove: (id: number) => void;
};
function useTimer(props: UseTimerProps) {
  const { id, duration = 1000, remove } = props;

  const timerRef = useRef<number>(null);

  const removeTimer = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  };

  const startTimer = () => {
    timerRef.current = setTimeout(() => {
      remove(id!);
      removeTimer();
    }, duration);
  };

  useEffect(() => {
    startTimer();
    return () => removeTimer();
  }, []);

  const onMouseEnter = () => {
    removeTimer();
  };

  const onMouseLeave = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    startTimer();
  };
  return {
    onMouseEnter,
    onMouseLeave,
  } as const;
}

export default useTimer;
