import {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
  type ForwardRefRenderFunction,
} from "react";
import "./index.css";

const MonthName = [
  "一月",
  "二月",
  "三月",
  "四月",
  "五月",
  "六月",
  "七月",
  "八月",
  "九月",
  "十月",
  "十一月",
  "十二月",
];
interface ICalendarProps {
  defaultValue?: Date;
  onChange?: (date: Date) => void;
}
interface ICalendarRef {
  getDate: () => Date;
  setDate: (date: Date) => void;
}
const Calender: ForwardRefRenderFunction<ICalendarRef, ICalendarProps> = (
  props,
  ref
) => {
  const { defaultValue, onChange } = props;
  const [date, setDate] = useState(() => {
    return defaultValue || new Date();
  });
  const handleClickNext = useCallback(() => {
    console.log(date.getMonth() + 1);
    const newDate = new Date(date.getFullYear(), date.getMonth() + 1, 1);
    setDate(newDate);
  }, [date]);

  const handleClickPrev = useCallback(() => {
    const newDate = new Date(date.getFullYear(), date.getMonth() - 1, 1);
    setDate(newDate);
  }, [date]);
  /**
   * new Date(year, monthIndex, day)
   * monthIndex 是从0开始的，0表示1月，11表示12月
   * day表示日期，1表示1号，31表示31号
   * new Date(2025,2,0).getDate() // 28 可以拿到1月份的天数
   */

  const renderDays = useMemo(() => {
    console.log("renderDays");
    // 获取当月有多少天
    const daysCount = new Date(
      date.getFullYear(),
      date.getMonth() + 1,
      0
    ).getDate();
    // 获取当月1号是星期几
    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
    // 编写需要渲染的日期列表
    const days = [];
    for (let i = 0; i < firstDay; i++) {
      days.push(<div className="empty" key={`empty-${i}`}></div>);
    }
    for (let i = 1; i <= daysCount; i++) {
      function handleClickDay() {
        const newDate = new Date(date.getFullYear(), date.getMonth(), i);
        setDate(newDate);
        onChange?.(newDate);
      }
      days.push(
        <div
          className={`day ${i === date.getDate() ? "selected" : ""}`}
          key={`day-${i}`}
          onClick={handleClickDay}
        >
          {i}
        </div>
      );
    }
    return days;
  }, [date, onChange]);

  useImperativeHandle(
    ref,
    () => {
      return {
        getDate: () => date,
        setDate: (newDate: Date) => {
          setDate(newDate);
        },
      };
    },
    [date]
  );

  return (
    <div className="calendar">
      <div className="header">
        <button onClick={handleClickPrev}>&lt;</button>
        <div>
          {date.getFullYear()} 年 {MonthName[date.getMonth()]}
        </div>
        <button onClick={handleClickNext}>&gt;</button>
      </div>
      <div className="days">
        <div className="day">日</div>
        <div className="day">一</div>
        <div className="day">二</div>
        <div className="day">三</div>
        <div className="day">四</div>
        <div className="day">五</div>
        <div className="day">六</div>
        {renderDays}
      </div>
    </div>
  );
};

const WrapperCalender = forwardRef(Calender);

function App() {
  const calendarRef = useRef<ICalendarRef>(null);
  const onClickGetDate = useCallback(() => {
    console.log(calendarRef.current?.getDate());
  }, []);

  return <WrapperCalender ref={calendarRef} onChange={onClickGetDate} />;
}
export default App;
