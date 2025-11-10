import type { ConfigType } from "dayjs";
import dayjs from "dayjs";
import { useEffect, useMemo, useState } from "react";

export type TDate = ConfigType;
/**
 * 倒计时
 */
export type OptionType = {
  targetDate?: TDate; // 目标日期
  interval?: number; // 倒计时的间隔
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
  // 目标日期的时间戳 - 当前的时间戳
  const left = dayjs(target).valueOf() - Date.now();
  return left < 0 ? 0 : left;
}
function useCountDown(options: OptionType) {
  const { targetDate, interval = 1000 } = options;

  // 剩余的倒计时时间
  const [timeLeft, setTimeLeft] = useState(() => calcLeft(targetDate));

  useEffect(() => {
    /**
     * 对目标日期进行倒计时
     */
    const timer = setInterval(() => {
      setTimeLeft(calcLeft(targetDate));
      // 倒计时归零则停止计时
      if (timeLeft <= 0) {
        clearInterval(timer);
      }
    }, interval);
    return () => {
      clearInterval(timer);
    };
  }, [targetDate, interval]);

  const formattedRes = useMemo(() => parseMs(timeLeft), [timeLeft]);

  return [timeLeft, formattedRes] as const;
}

function App() {
  const currentDate = new Date();
  const [_, formattedRes] = useCountDown({
    targetDate: `${currentDate.getFullYear()}-${
      currentDate.getMonth() + 1
    }-${currentDate.getDate()} 17:11:11`,
  });
  const { days, hours, minutes, seconds, milliseconds } = formattedRes;
  return (
    <div>
      距离年底还剩:{days}日{hours}小时{minutes}分钟{seconds}秒{milliseconds}毫秒
    </div>
  );
}
export default App;
