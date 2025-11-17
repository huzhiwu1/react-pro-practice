import { useEffect } from "react";
import { create } from "./MyZustand";

const useXXXStore = create((set) => ({
  aaa: 0,
  bbb: 0,
  updateAaa: (value: number) => {
    set(() => ({
      aaa: value,
    }));
  },
  updateBbb: (value: number) => {
    set(() => ({
      bbb: value,
    }));
  },
}));

function Ccc() {
  const aaa = useXXXStore((state) => state.aaa);
  return <div>hello {aaa}</div>;
}
function Bbb() {
  useEffect(() => {
    useXXXStore.subscribe((state) => console.log("Bbb", state));
  }, []);
  return (
    <div>
      <Ccc />
    </div>
  );
}

function App() {
  const aaa = useXXXStore((state) => state.aaa);
  const updateAaa = useXXXStore((state) => state.updateAaa);
  return (
    <div>
      <input value={aaa} onChange={(e) => updateAaa(e.target.value)} />
      <Bbb />
    </div>
  );
}

export default App;
