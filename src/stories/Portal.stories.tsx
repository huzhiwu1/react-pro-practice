import type { Meta, StoryObj } from "@storybook/react-vite";
import Portal from "../Portal";
import type { PropsWithChildren } from "react";
import type { PortalProps } from "../Portal";

const meta = {
  title: "Components/Portal",
  component: Portal,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    attach: {
      control: "object",
      description: "挂载的位置",
      table: {
        type: {
          summary: "string | HTMLElement;",
        },
      },
    },
  },

  tags: ["autodocs"],
} satisfies Meta<typeof Portal>;

export default meta;
type Story = StoryObj<typeof meta>;

const renderPortal = (props: PropsWithChildren<PortalProps>) => {
  const { children, attach } = props;

  return (
    <>
      <Portal attach={attach}>{children}</Portal>
      <div
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ width: "100px", height: "100px" }}>占位</div>
        <div style={{ width: "100px", height: "100px" }}>占位</div>

        <div style={{ width: "100px", height: "100px" }}>占位</div>

        <div id="attach"></div>
        <div style={{ width: "100px", height: "100px" }}>占位</div>

        <div style={{ width: "100px", height: "100px" }}>占位</div>
      </div>
    </>
  );
};

export const Attach: Story = {
  args: {
    children: (
      <div
        style={{
          margin: "50px",
          background: "red",
          width: "200px",
          height: "200px",
          textAlign: "center",
          lineHeight: "200px",
        }}
      >
        我是portal渲染的内容
      </div>
    ),
    attach: "div#attach",
  },
  render: renderPortal,
};
