import { useCallback, type CSSProperties, type MouseEventHandler } from "react";

interface IChildProps {
  clickHandler: MouseEventHandler;
  style: CSSProperties;
}
function Child(props: IChildProps) {
  return (
    <div onClick={props.clickHandler} style={props.style}>
      我是child
    </div>
  );
}

function App() {
  const clickhandler = useCallback<MouseEventHandler>((e) => {
    console.log(e.clientX, e.clientY);
  }, []);
  return (
    <>
      <Child
        style={{
          width: "300px",
          height: "300px",
          border: "1px solid black",
        }}
        clickHandler={clickhandler}
      />
    </>
  );
}
export default App;
