import { useEffect } from "react";
import { createStore } from "./MyZustand";
function App() {
  const store = createStore((set) => ({
    a: 1,
    updateAaa: (value) => {
      set(() => ({
        a: value,
      }));
    },
  }));
  useEffect(() => {
    console.log("a", store.getState().a);

    const updateAaa = store.getState().updateAaa;
    updateAaa(2);
    const Aaa = store.getState().a;
    console.log(Aaa);
  }, []);

  return <div>测试</div>;
}
export default App;
