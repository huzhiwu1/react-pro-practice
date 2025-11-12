import Mask from "./Mask";
import { Popover, Button } from "antd";

function App() {
  return (
    <>
      <Mask
        element={() => document.getElementById("img")!}
        renderMaskContent={(wrapper) => {
          return (
            <Popover
              content={
                <div style={{ width: 300 }}>
                  <p>hello</p>
                  <Button type="primary">下一步</Button>
                </div>
              }
              open={true}
            >
              {wrapper}
            </Popover>
          );
        }}
      />
      <div style={{ height: "100px" }}>占位</div>
      <div style={{ height: "100px" }}>占位</div>
      <div style={{ height: "100px" }}>占位</div>
      <div style={{ height: "100px" }}>占位</div>
      <div style={{ height: "100px" }}>占位</div>
      <div style={{ height: "100px" }}>占位</div>
      <div style={{ height: "100px" }}>占位</div>
      <div style={{ height: "100px" }}>占位</div>
      <div style={{ height: "100px" }}>占位</div>
      <div style={{ height: "100px" }}>占位</div>
      <div style={{ height: "100px" }}>占位</div>
      <div style={{ height: "100px" }}>占位</div>
      <div style={{ height: "100px" }}>占位</div>
      <div style={{ height: "100px" }}>占位</div>
      <div style={{ height: "100px" }}>占位</div>
      <div style={{ height: "100px" }}>占位</div>
      <div style={{ height: "100px" }}>占位</div>
      <div style={{ height: "100px" }}>占位</div>
      <div style={{ height: "100px" }}>占位</div>
      <div style={{ height: "100px" }}>占位</div>
      <div style={{ height: "100px" }}>占位</div>
      <div style={{ height: "100px" }}>占位</div>
      <div style={{ height: "100px" }}>占位</div>
      <div style={{ height: "100px" }}>占位</div>
      <div id="img">
        <img src="/vite.svg" width={100} height={100} />
      </div>

      <div style={{ height: "100px" }}>占位</div>
      <div style={{ height: "100px" }}>占位</div>
      <div style={{ height: "100px" }}>占位</div>
      <div style={{ height: "100px" }}>占位</div>
      <div style={{ height: "100px" }}>占位</div>
      <div style={{ height: "100px" }}>占位</div>
      <div style={{ height: "100px" }}>占位</div>
      <div style={{ height: "100px" }}>占位</div>
      <div style={{ height: "100px" }}>占位</div>
      <div style={{ height: "100px" }}>占位</div>
      <div style={{ height: "100px" }}>占位</div>
      <div style={{ height: "100px" }}>占位</div>
      <div style={{ height: "100px" }}>占位</div>
      <div style={{ height: "100px" }}>占位</div>
      <div style={{ height: "100px" }}>占位</div>
      <div style={{ height: "100px" }}>占位</div>
    </>
  );
}
export default App;
