import DayJS from "dayjs";
import type { MonthCalendarProps } from "./components/MonthCalendar";
import MonthCalendar from "./components/MonthCalendar";
import Header from "./components/Header";

interface CalendarProps extends MonthCalendarProps {}

function Calendar(props: CalendarProps) {
  return (
    <div className="calendar">
      <Header {...props} />
      <MonthCalendar {...props} />
    </div>
  );
}
function App() {
  return (
    <div>
      <Calendar value={DayJS("2025-11-1")} />
    </div>
  );
}
export default App;
