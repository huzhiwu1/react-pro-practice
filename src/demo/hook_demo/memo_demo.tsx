import { useEffect, useState, memo, useCallback, useMemo } from "react";

// interface IChildProps {
//   num: number;
// }
// function Child(props: IChildProps) {
//   console.log("child render");
//   useEffect(() => {
//     console.log("useEffect child");
//   }, []);
//   return <div>child{props.num}</div>;
// }
// const MemoChild = memo(Child);
// function App() {
//   const [, forceUpdate] = useState({});
//   const [num, setNum] = useState(0);
//   console.log("father render");

//   useEffect(() => {
//     console.log("father useEffect");
//     setInterval(() => {
//       console.log("定时器触发");
//       forceUpdate({});
//     }, 1000);
//   }, []);
//   return (
//     <div>
//       father<MemoChild num={num}></MemoChild>
//       <button onClick={() => setNum((num) => num + 1)}>+</button>
//       <button onClick={() => setNum((num) => num - 1)}>-</button>
//     </div>
//   );
// }
interface IChildProps {
  count: number;
  callback: Function;
}
function Child(props: IChildProps) {
  console.log("child render");
  const { count, callback } = props;

  useEffect(() => {
    console.log("child useEffect");
  }, []);

  return <div>{count}</div>;
}
const MemoChild = memo(Child);
function App() {
  const [num, setNum] = useState(0);
  const [, forceUpdate] = useState({});
  const testCallback = useCallback(() => {}, []);
  const count = useMemo(() => {
    return num * 2;
  }, [num]);
  console.log("app render");
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("父组件更新");
      forceUpdate({});
    }, 3000);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <div>
      <MemoChild count={count} callback={testCallback} />
      <button onClick={() => setNum((num) => num + 1)}>+</button>
      <button onClick={() => setNum((num) => num - 1)}>-</button>
    </div>
  );
}

export default App;
