import DayJS from "dayjs";
import type { Dayjs } from "dayjs";
import type { CSSProperties } from "react";
import { useCallback, useState } from "react";
import type { MonthCalendarProps } from "./components/MonthCalendar";
import cs from "classnames";

import MonthCalendar from "./components/MonthCalendar";
import Header from "./components/Header";
import { CalendarLocaleContext } from "./locale";
import { useControllableValue } from "ahooks";

export interface CalendarProps
  extends Omit<MonthCalendarProps, "curMonth" | "value"> {
  locale?: string;
  value?: Dayjs;
  defaultValue?: Dayjs;
  onChange?: (value: Dayjs) => void;
  style?: CSSProperties;
  className?: string | string[];
}
function Calendar(props: CalendarProps) {
  const { className, style, locale, onChange } = props;
  const classNames = cs("calendar", className);

  const [curValue, setCurValue] = useControllableValue(props, {
    defaultValue: DayJS(),
  });
  const [curMonth, setCurMonth] = useState(curValue);

  const changeDate = useCallback((value: Dayjs) => {
    onChange?.(value);
    setCurValue(value);
    setCurMonth(value);
  }, []);

  const selectHandler = useCallback((value: Dayjs) => {
    changeDate(value);
  }, []);

  const preMonthHandler = useCallback(() => {
    setCurMonth((date) => date.subtract(1, "month"));
  }, []);

  const nextMonthHandler = useCallback(() => {
    setCurMonth((date) => date.add(1, "month"));
  }, []);

  const todayHandler = useCallback(() => {
    const today = DayJS(Date.now());
    changeDate(today);
  }, []);

  return (
    <CalendarLocaleContext.Provider
      value={{ locale: locale || navigator.language }}
    >
      <div className={classNames} style={style}>
        <Header
          {...props}
          curMonth={curMonth}
          preMonthHandler={preMonthHandler}
          nextMonthHandler={nextMonthHandler}
          todayHandler={todayHandler}
        />
        <MonthCalendar
          {...props}
          value={curValue}
          selectHandler={selectHandler}
          curMonth={curMonth}
        />
      </div>
    </CalendarLocaleContext.Provider>
  );
}
export default Calendar;
