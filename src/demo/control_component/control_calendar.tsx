import { useCallback, useEffect, useRef, useState } from "react";
import { useMergeState } from "./useMergeState";

interface CalendarProps {
  defaultValue?: Date;
  value?: Date;
  onChange?: (date: Date) => void;
}

function Calendar(props: CalendarProps) {
  const { defaultValue, value: propsValue, onChange } = props;
  const [mergeValue, setValueState] = useMergeState<Date>(new Date(), {
    value: propsValue,
    defaultValue,
    onChange: onChange,
  });

  return (
    <div>
      <h1>日历</h1>
      <h1>当前日期{mergeValue?.toDateString()}</h1>
      <ul>
        <li onClick={() => setValueState(new Date("2025-09-01"))}>
          2025-09-01
        </li>
        <li onClick={() => setValueState(new Date("2025-08-01"))}>
          2025-08-01
        </li>
        <li onClick={() => setValueState(new Date("2025-07-01"))}>
          2025-07-01
        </li>
      </ul>
    </div>
  );
}
// function Calendar(props: CalendarProps) {
//   const { defaultValue, value: propsValue, onChange } = props;
//   // 确定初始值
//   const [valueStae, setValueState] = useState<Date | undefined>(() => {
//     if (propsValue === undefined) {
//       return defaultValue;
//     } else {
//       return propsValue;
//     }
//   });

//   const onValueStateChange = useCallback(
//     (value: Date) => {
//       // 如果propsValue存在，则受控
//       if (propsValue === undefined) {
//         setValueState(value);
//       }
//       onChange?.(value);
//     },
//     [propsValue, onChange]
//   );

//   // 初次渲染已经确定了是受控还是非受控
//   // 如果是非初次渲染，这时从受控变成非受控
//   const firstRenderRef = useRef(true);
//   useEffect(() => {
//     if (propsValue === undefined && !firstRenderRef.current) {
//       setValueState(propsValue);
//     }
//     firstRenderRef.current = false;
//   }, [propsValue]);
//   // 渲染时，使用propsValue 还是 valueState
//   const mergeValue = propsValue === undefined ? valueStae : propsValue;

//   return (
//     <div>
//       <h1>日历</h1>
//       <h1>当前日期{mergeValue?.toDateString()}</h1>
//       <ul>
//         <li onClick={() => onValueStateChange(new Date("2025-09-01"))}>
//           2025-09-01
//         </li>
//         <li onClick={() => onValueStateChange(new Date("2025-08-01"))}>
//           2025-08-01
//         </li>
//         <li onClick={() => onValueStateChange(new Date("2025-07-01"))}>
//           2025-07-01
//         </li>
//       </ul>
//     </div>
//   );
// }
function App() {
  const [value, setValue] = useState<Date>(new Date());
  const handleChangeDate = useCallback((date: Date) => {
    // setValue(date);
    console.log("change date", date);
  }, []);
  return (
    <Calendar
      //   defaultValue={new Date()}
      //   value={value}
      onChange={handleChangeDate}
    />
  );
}
export default App;
