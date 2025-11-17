import { useEffect } from "react";
import { create } from "zustand";

const logMiddleware = function (func) {
  return function (set, get, store) {
    function newSet(...args) {
      console.log("调用args", args);
      return set(...args);
    }
    return func(newSet, get, store);
  };
};
const useXXXStore = create(
  logMiddleware((set) => ({
    aaa: 0,
    bbb: 0,
    updateAaa: (value) =>
      set(() => ({
        aaa: value,
      })),
    updateBbb: (value) =>
      set(() => ({
        bbb: value,
      })),
  }))
);

function App() {
  const updateAaa = useXXXStore((state) => state.updateAaa);
  const aaa = useXXXStore((state) => state.aaa);
  useEffect(() => {
    useXXXStore.subscribe((state) => {
      console.log("subscribe", useXXXStore.getState());
    });
  }, []);
  return (
    <div>
      <input value={aaa} onChange={(e) => updateAaa(e.target.value)} />
      <Bbb />
    </div>
  );
}

function Bbb() {
  return (
    <div>
      <Ccc />
    </div>
  );
}

function Ccc() {
  const aaa = useXXXStore((state) => state.aaa);
  return <div>hello {aaa}</div>;
}

export default App;
