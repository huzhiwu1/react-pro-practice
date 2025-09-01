import { useContext, createContext } from "react";

// const CountContext = createContext(111);
// function Father() {
//   return <Child></Child>;
// }
// function Child() {
//   const count = useContext(CountContext);
//   return <h1>{count}</h1>;
// }

// function App() {
//   return <CountContext.Provider value={222}>
//     <Father />
//   </CountContext.Provider>;
// }
// export default App;
const CountContext = createContext(111);

function Father() {
  return (
    <div>
      father
      <Child />
    </div>
  );
}
function Child() {
  return (
    <div>
      <CountContext.Consumer>
        {(count) => <h1>{count}</h1>}
      </CountContext.Consumer>
    </div>
  );
}

function App() {
  return (
    <CountContext.Provider value={222}>
      <Father></Father>
    </CountContext.Provider>
  );
}
export default App;
