import type { Dayjs } from "dayjs";
import "./index.scss";
import { useContext } from "react";
import { allCalendarLocales, CalendarLocaleContext } from "../../locale";

interface HeaderProps {
  value: Dayjs;
}
function Header(props: HeaderProps) {
  const date = props.value;
  const { locale } = useContext(CalendarLocaleContext);
  const calendarLocale = allCalendarLocales[locale];
  return (
    <div className="calendar-header">
      <div className="calendar-header-left">
        <div className="calendar-header-icon">&lt;</div>
        <div className="calendar-header-value">
          {date.format(calendarLocale.formatMonth)}
        </div>
        <div className="calendar-header-icon">&gt;</div>
        <button className="calendar-header-btn">{calendarLocale.today}</button>
      </div>
    </div>
  );
}
export default Header;
