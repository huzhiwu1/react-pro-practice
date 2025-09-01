// import {
//   useCallback,
//   useState,
//   type ChangeEvent,
//   type ChangeEventHandler,
// } from "react";

// interface IInputProps {
//   handleChange: ChangeEventHandler;
//   defaultValue?: string;
// }
// function MyInput(props: IInputProps) {
//   return <input onChange={props.handleChange} value={props.defaultValue} />;
// }
// function App() {
//   const [defaultValue, setValue] = useState("初始值");
//   const handleChagne = useCallback<ChangeEventHandler>(
//     (e: ChangeEvent<HTMLInputElement>) => {
//       console.log("input change", e, e.target.value);
//       setValue(e.target.value);
//     },
//     []
//   );
//   return <MyInput defaultValue={defaultValue} handleChange={handleChagne} />;
// }
// export default App;

import { useCallback, useState } from "react";
import type { ChangeEventHandler } from "react";
function App() {
  const [value, setValue] = useState("");
  const handleChange = useCallback<ChangeEventHandler<HTMLInputElement>>(
    (e) => {
      console.log(e.target.value);
      setValue(e.target.value.toUpperCase());
    },
    []
  );
  return <input value={value} onChange={handleChange} />;
}
export default App;
