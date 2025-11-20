import type { Meta, StoryObj } from "@storybook/react-vite";
import { useEffect, useState, useCallback } from "react";
import OnBoarding from "../OnBoarding";
import type { OnBoardingProps } from "../OnBoarding";
import { Button, Flex } from "antd";

const meta = {
  title: "Components/OnBoarding",
  component: OnBoarding,
  parameters: {
    layout: "centered",
  },

  argTypes: {
    steps: {
      control: "object",
      description: "引导步骤数组",
      table: {
        type: {
          summary: "Step[]",
          detail: `
          Step {
            selector: () => HTMLElement | null;
            renderContent?: (currentStep: number) => ReactNode;
            placement?: TooltipPlacement;
            beforeBack?: (currentStep: number) => void;
            beforeForward?: (currentStep: number) => void;
          }
          `,
        },
      },
    },
    onStepEnd: {
      control: "object",
      defaultValue: () => alert("引导结束"),
      description: "引导步骤结束时的回调函数",
    },
  },

  tags: ["autodocs"],
} satisfies Meta<typeof OnBoarding>;

export default meta;
type Story = StoryObj<typeof meta>;

const RenderOnBoarding = (props: OnBoardingProps) => {
  const { steps, onStepEnd } = props;
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
              onStepEnd?.();
              setOpen(false);
            }}
            steps={steps}
          />
        ) : null}
      </div>
    </>
  );
};

export const Steps: Story = {
  args: {
    steps: [
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
    ],
  },
  render: RenderOnBoarding,
};

export const onStepEnd: Story = {
  args: {
    onStepEnd: () => {
      alert("引导结束");
    },
    steps: [
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
    ],
  },
  render: RenderOnBoarding,
};
