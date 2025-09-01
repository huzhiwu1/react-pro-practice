import { useReducer } from "react";
interface Data {
  result: number;
}
type Action =
  | {
      type: "add";
      num: number;
    }
  | {
      type: "minus";
      num: number;
    };

function reducer(state: Data, action: Action) {
  switch (action.type) {
    case "add":
      return {
        result: state.result + action.num,
      };
    case "minus":
      return {
        result: state.result + action.num,
      };
  }
  return state;
}
function App() {
  const [res, dispatch] = useReducer(reducer, {
    result: 0,
  });

  return (
    <>
      <button onClick={() => dispatch({ type: "add", num: 1 })}>加</button>
      <button onClick={() => dispatch({ type: "minus", num: -1 })}>减</button>
      <div>{res.result}</div>
    </>
  );
}

export default App;
