import { Button, Flex } from "antd";
import OnBoarding from ".";
import { useEffect, useState } from "react";

function App() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    document.body.style.overflow = "unset";
  }, []);
  return (
    <>
      <Button onClick={() => setOpen(true)}>开始引导</Button>
      <div className="App">
        <Flex gap="small" wrap="wrap" id="btn-group1">
          <Button type="primary">Primary Button</Button>
          <Button>Default Button</Button>
          <Button type="dashed">Dashed Button</Button>
          <Button type="text">Text Button</Button>
          <Button type="link">Link Button</Button>
        </Flex>

        <div style={{ height: "1000px" }}></div>

        <Flex wrap="wrap" gap="small">
          <Button type="primary" danger>
            Primary
          </Button>
          <Button danger>Default</Button>
          <Button type="dashed" danger id="btn-group2">
            Dashed
          </Button>
          <Button type="text" danger>
            Text
          </Button>
          <Button type="link" danger>
            Link
          </Button>
        </Flex>

        <div style={{ height: "500px" }}></div>

        <Flex wrap="wrap" gap="small">
          <Button type="primary" ghost>
            Primary
          </Button>
          <Button ghost>Default</Button>
          <Button type="dashed" ghost>
            Dashed
          </Button>
          <Button type="primary" danger ghost id="btn-group3">
            Danger
          </Button>
        </Flex>

        {open ? (
          <OnBoarding
            onStepEnd={() => {
              console.log("结束引导");
              setOpen(false);
            }}
            steps={[
              {
                selector: () => {
                  return document.getElementById("btn-group1");
                },
                renderContent: () => {
                  return "来财";
                },
                beforeBack(currentStep) {
                  console.log("上一步是", currentStep);
                },
                beforeForward(currentStep) {
                  console.log("下一步是", currentStep);
                },
                placement: "bottom",
              },
              {
                selector: () => {
                  return document.getElementById("btn-group2");
                },
                beforeBack(currentStep) {
                  console.log("上一步是", currentStep);
                },
                beforeForward(currentStep) {
                  console.log("下一步是", currentStep);
                },
                renderContent: () => {
                  return "四面八方都来财";
                },
                placement: "bottom",
              },
              {
                selector: () => {
                  return document.getElementById("btn-group3");
                },
                beforeBack(currentStep) {
                  console.log("上一步是", currentStep);
                },
                beforeForward(currentStep) {
                  console.log("下一步是", currentStep);
                },
                renderContent: () => {
                  return "财神爷来财";
                },
                placement: "bottom",
              },
            ]}
          />
        ) : null}
      </div>
    </>
  );
}
export default App;
