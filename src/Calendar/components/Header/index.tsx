import type { Dayjs } from "dayjs";
import "./index.scss";
import { useContext } from "react";
import { allCalendarLocales, CalendarLocaleContext } from "../../locale";

interface HeaderProps {
  curMonth: Dayjs;
  preMonthHandler: () => void;
  nextMonthHandler: () => void;
  todayHandler: () => void;
}
function Header(props: HeaderProps) {
  const { curMonth, preMonthHandler, nextMonthHandler, todayHandler } = props;
  const { locale } = useContext(CalendarLocaleContext);
  const calendarLocale = allCalendarLocales[locale];
  return (
    <div className="calendar-header">
      <div className="calendar-header-left">
        <div className="calendar-header-icon" onClick={preMonthHandler}>
          &lt;
        </div>
        <div className="calendar-header-value">
          {curMonth.format(calendarLocale.formatMonth)}
        </div>
        <div className="calendar-header-icon" onClick={nextMonthHandler}>
          &gt;
        </div>
        <button className="calendar-header-btn" onClick={todayHandler}>
          {calendarLocale.today}
        </button>
      </div>
    </div>
  );
}
export default Header;
