import DayJS from "dayjs";
import type { Dayjs } from "dayjs";
import type { CSSProperties } from "react";
import cs from "classnames";
import MonthCalendar from "./components/MonthCalendar";
import Header from "./components/Header";

export interface CalendarProps {
  value: Dayjs;
  style?: CSSProperties;
  className?: string | string[];
}
function Calendar(props: CalendarProps) {
  const { className, style } = props;
  const classNames = cs("calendar", className);
  return (
    <div className={classNames} style={style}>
      <Header {...props} />
      <MonthCalendar {...props} />
    </div>
  );
}
function App() {
  return (
    <div>
      <Calendar
        className={"test_calendar_className"}
        style={{ background: "blue" }}
        value={DayJS("2025-11-1")}
      />
    </div>
  );
}
export default App;
