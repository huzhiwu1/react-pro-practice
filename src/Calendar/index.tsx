import DayJS from "dayjs";
import type { Dayjs } from "dayjs";
import type { CSSProperties } from "react";
import { useCallback, useState } from "react";
import type { MonthCalendarProps } from "./components/MonthCalendar";
import cs from "classnames";

import MonthCalendar from "./components/MonthCalendar";
import Header from "./components/Header";
import { CalendarLocaleContext } from "./locale";

export interface CalendarProps extends MonthCalendarProps {
  locale?: string;
  value: Dayjs;
  onChange?: (value: Dayjs) => void;
  style?: CSSProperties;
  className?: string | string[];
}
function Calendar(props: CalendarProps) {
  const { className, style, locale, value, onChange } = props;
  const classNames = cs("calendar", className);

  const [curValue, setCurValue] = useState(value);

  const selectHandler = useCallback((value: Dayjs) => {
    onChange?.(value);
    setCurValue(value);
  }, []);

  return (
    <CalendarLocaleContext.Provider
      value={{ locale: locale || navigator.language }}
    >
      <div className={classNames} style={style}>
        <Header {...props} />
        <MonthCalendar
          {...props}
          value={curValue}
          selectHandler={selectHandler}
        />
      </div>
    </CalendarLocaleContext.Provider>
  );
}
function App() {
  return (
    <div>
      <Calendar
        value={DayJS("2025-11-1")}
        // dateRender={(date) => (
        //   <div
        //     className="dateRender"
        //     style={{ background: "red", height: "500px" }}
        //   >
        //     {date.format("YY年MM月DD日")}
        //   </div>
        // )}
        onChange={(date) => alert(date.format("YY年MM月DD日"))}
        // dateInnerContent={(date) => (
        //   <div style={{ background: "#fff" }}>
        //     <p style={{ color: "red" }}>{date.format("YY/MM/DD")}</p>
        //   </div>
        // )}
      />
    </div>
  );
}
export default App;
