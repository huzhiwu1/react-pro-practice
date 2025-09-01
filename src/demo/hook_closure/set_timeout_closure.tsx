import { useEffect, useReducer, useRef, useState } from "react";

// function App() {
//   const [count, setCount] = useState(0);
//   useEffect(() => {
//     setInterval(() => {
//       setCount((count) => count + 1);
//     }, 1000);
//   }, []);
//   return <div>{count}</div>;
// }
// interface IData {
//   result: number;
// }

// type Action =
//   | {
//       type: "add";
//       count: number;
//     }
//   | {
//       type: "minus";
//       count: number;
//     };
// interface IAction {
//   type: "add" | "minus";
//   count: number;
// }
// function countReducer(initialState: IData, action: IAction): IData {
//   switch (action.type) {
//     case "add":
//       return {
//         result: initialState.result + action.count,
//       };
//     case "minus":
//       return {
//         result: initialState.result - action.count,
//       };
//   }
//   return initialState;
// }
// function App() {
//   const [res, dispatch] = useReducer(countReducer, { result: 0 });
//   useEffect(() => {
//     setInterval(() => {
//       dispatch({
//         type: "add",
//         count: 2,
//       });
//     }, 1000);
//   }, []);
//   return <div>{res.result}</div>;
// }
// type IData = number;
// interface IAction {
//   type: "add" | "minus";
//   count: IData;
// }
// function countReducer(state: IData, action: IAction) {
//   switch (action.type) {
//     case "add":
//       return state + action.count;
//     case "minus":
//       return state - action.count;
//   }
//   return state;
// }
// function App() {
//   const [res, dispatch] = useReducer(countReducer, 0);
//   useEffect(() => {
//     console.log("res", res);
//     setInterval(() => {
//       dispatch({
//         type: "add",
//         count: 2,
//       });
//     }, 1000);
//   }, []);
//   return <div>{res}</div>;
// }

function App() {
  const [count, setCount] = useState(0);
  const addCountFun = () => {
    setCount(count + 1);
  };
  const addCountFunRef = useRef(addCountFun);
  // 每次渲染函数时，需要更新ref
  // 初始化时定义了ref,如果没有主动更新，ref的引用会维持不变
  addCountFunRef.current = addCountFun;
  useEffect(() => {
    const timer = setInterval(() => {
      console.log(addCountFunRef.current);
      addCountFunRef.current();
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  return <div>{count}</div>;
}
export default App;
