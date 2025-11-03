import DayJS from "dayjs";
import type { Dayjs } from "dayjs";
import type { CSSProperties } from "react";
import type { MonthCalendarProps } from "./components/MonthCalendar";
import cs from "classnames";

import MonthCalendar from "./components/MonthCalendar";
import Header from "./components/Header";
import { CalendarLocaleContext } from "./locale";

export interface CalendarProps extends MonthCalendarProps {
  locale?: string;
  value: Dayjs;
  style?: CSSProperties;
  className?: string | string[];
}
function Calendar(props: CalendarProps) {
  const { className, style, locale } = props;
  const classNames = cs("calendar", className);

  return (
    <CalendarLocaleContext.Provider
      value={{ locale: locale || navigator.language }}
    >
      <div className={classNames} style={style}>
        <Header {...props} />
        <MonthCalendar {...props} />
      </div>
    </CalendarLocaleContext.Provider>
  );
}
function App() {
  return (
    <div>
      <Calendar
        className={"test_calendar_className"}
        style={{ background: "#097890" }}
        value={DayJS("2025-11-1")}
        locale="en-US"
        // dateRender={(date) => (
        //   <div
        //     className="dateRender"
        //     style={{ background: "red", height: "500px" }}
        //   >
        //     {date.format("YY年MM月DD日")}
        //   </div>
        // )}
        dateInnerContent={(date) => (
          <div style={{ background: "yellow" }}>
            <p style={{ color: "red" }}>{date.format("YY/MM/DD")}</p>
          </div>
        )}
      />
    </div>
  );
}
export default App;
