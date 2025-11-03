import type { Dayjs } from "dayjs";
import "./index.scss";

interface HeaderProps {
  value: Dayjs;
}
function Header(props: HeaderProps) {
  const date = props.value;
  return (
    <div className="calendar-header">
      <div className="calendar-header-left">
        <div className="calendar-header-icon">&lt;</div>
        <div className="calendar-header-value">
          {date.format("YY年MM月DD日")}
        </div>
        <div className="calendar-header-icon">&gt;</div>
        <button className="calendar-header-btn">今天</button>
      </div>
    </div>
  );
}
export default Header;
