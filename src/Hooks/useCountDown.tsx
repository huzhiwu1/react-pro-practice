import type { ConfigType } from "dayjs";
import dayjs from "dayjs";
import { useEffect, useMemo, useRef, useState } from "react";

export type TDate = ConfigType;
/**
 * 倒计时
 */
export type OptionType = {
  targetDate?: TDate; // 目标日期
  leftTime?: number; // 倒计时的时间
  interval?: number; // 倒计时的间隔
  onEnd?: () => void;
};

/**
 * 日期格式化的类型
 */
export type FormattedRes = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  milliseconds: number;
};
/**
 * 对倒计时进行格式化
 */
function parseMs(milliseconds: number): FormattedRes {
  return {
    days: Math.floor(milliseconds / 86400000),
    hours: Math.floor(milliseconds / 3600000) % 24,
    minutes: Math.floor(milliseconds / 60000) % 60,
    seconds: Math.floor(milliseconds / 1000) % 60,
    milliseconds: Math.floor(milliseconds) % 1000,
  };
}

/**
 * 计算剩余时间
 */
function calcLeft(target: TDate) {
  if (!target) {
    return 0;
  }
  // 目标日期的时间戳 - 当前的时间戳
  const left = dayjs(target).valueOf() - Date.now();
  return left < 0 ? 0 : left;
}
function useCountDown(options: OptionType) {
  const { targetDate, leftTime, interval = 1000, onEnd } = options;
  /**
   * 目标时间点
   * 1. 有传入leftTime，则目标日期是leftTime + Date.now()
   * 2. 没有传入leftTime,有传入targetDate,则目标日期是targetDate
   */
  const memoLeftTime = useMemo(() => {
    if (typeof leftTime !== "undefined" && leftTime > 0) {
      return leftTime + Date.now();
    }
    return undefined;
  }, [leftTime]);

  const target = "leftTime" in options ? memoLeftTime : targetDate;

  // 剩余的倒计时时间
  const [timeLeft, setTimeLeft] = useState(() => calcLeft(target));

  /**
   * 对onEnd进行持久化
   */
  const onEndRef = useRef(onEnd);
  onEndRef.current = onEnd;

  useEffect(() => {
    if (!target) {
      setTimeLeft(0);
      return;
    }
    setTimeLeft(calcLeft(target));
    /**
     * 对目标日期进行倒计时
     */
    const timer = setInterval(() => {
      const targetLeftTime = calcLeft(target);
      setTimeLeft(targetLeftTime);
      // 倒计时归零则停止计时
      if (targetLeftTime === 0) {
        onEndRef.current?.();
        clearInterval(timer);
      }
    }, interval);
    return () => {
      clearInterval(timer);
    };
  }, [target, interval]);

  const formattedRes = useMemo(() => parseMs(timeLeft), [timeLeft]);

  return [timeLeft, formattedRes] as const;
}

// function App() {
//   const currentDate = new Date();
//   const [_, formattedRes] = useCountDown({
//     targetDate: `${currentDate.getFullYear()}-${
//       currentDate.getMonth() + 1
//     }-${currentDate.getDate()} 16:46:38`,
//     // leftTime: 1000 * 3,
//     onEnd: () => console.log("倒计时完成"),
//   });
//   const { days, hours, minutes, seconds, milliseconds } = formattedRes;
//   return (
//     <div>
//       距离年底还剩:{days}日{hours}小时{minutes}分钟{seconds}秒{milliseconds}毫秒
//     </div>
//   );
// }
// export default App;

export default useCountDown;
