import type { FC } from "react";
import type { Dayjs } from "dayjs";
import "./index.scss";

export interface MonthCalendarProps {
  value: Dayjs;
}

/**
 *
 * 日历会渲染 6 * 7个格子，跨度包含前一个月末的日期 本月日期 下个月初日期
 * 1. 计算本月第一天是星期几，例如是星期二，则星期天，星期一 共有两天属于上个月末
 * 2. 拿到本月第一天的日期 如2025-11-1 然后天数递增去渲染，dayjs自然会得出合理的日期
 * 3. 通过value的month 与渲染的日期对比，不相等的则是下个月末的日期
 */
interface IDayInfo {
  date: Dayjs;
  isCurrentMonth: boolean;
}
function getAllDays(value: Dayjs): IDayInfo[] {
  // 本月第一天
  const startDate = value.startOf("month");
  // 本月第一天是星期几
  const startDay = startDate.day();
  // 渲染的天数
  const daysInfo = new Array<{ date: Dayjs; isCurrentMonth: boolean }>(6 * 7);
  // 上个月末的日期
  for (let i = 0; i < startDay; i++) {
    daysInfo[i] = {
      date: startDate.subtract(startDay - i, "day"),
      isCurrentMonth: false,
    };
  }
  // 渲染 当月 和下个月初的日期
  for (let i = startDay; i < daysInfo.length; i++) {
    const calcDate = startDate.add(i - startDay, "day");
    daysInfo[i] = {
      date: calcDate,
      isCurrentMonth: calcDate.month() === startDate.month(),
    };
  }
  return daysInfo;
}

function renderDays(daysInfo: IDayInfo[]) {
  const rows = [];
  // 6行 7列
  for (let i = 0; i < 6; i++) {
    const row = [];
    for (let j = 0; j < 7; j++) {
      const item = daysInfo[i * 7 + j];
      row[j] = (
        <div
          className={`calendar-month-body-cell ${
            item.isCurrentMonth ? "current-month" : ""
          }`}
        >
          {item.date.date()}
        </div>
      );
    }
    rows.push(row);
  }
  return rows.map((row) => (
    <div className="calendar-month-body-row">{row}</div>
  ));
}

function renderWeekDays() {
  const weekList = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
  return weekList.map((item) => {
    return <div className="calendar-week-item">{item}</div>;
  });
}
const MonthCalendar: FC<MonthCalendarProps> = (props) => {
  return (
    <div className="calendar-month-container">
      <div className="calendar-week-container">{renderWeekDays()}</div>
      <div className="calendar-month-body">
        {renderDays(getAllDays(props.value))}
      </div>
    </div>
  );
};

export default MonthCalendar;
