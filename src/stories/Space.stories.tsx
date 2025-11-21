import type { Meta, StoryObj } from "@storybook/react-vite";
import Space from "../Space";
import { ConfigProvider } from "../Space/ConfigProvider";

const meta = {
  title: "Components/Space",
  component: Space,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        story: "在 ConfigProvider 中使用的示例，配置了大的间距",
      },
    },
  },
  argTypes: {
    direction: {
      description: "horizontal用于决定子组件是横向排列还是竖向排列",
    },
    split: {
      control: "object",
      description: "分隔组件的渲染内容",
      table: {
        type: {
          summary: "ReactNode",
        },
      },
    },
    wrap: {
      description: "是否可换行",
    },
    size: {
      description: "组件之间的间隔",
    },
  },

  tags: ["autodocs"],
} satisfies Meta<typeof Space>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Direction: Story = {
  args: {
    direction: "horizontal",
    children: [
      <div style={{ width: "120px", height: "60px", background: "red" }} />,
      <div style={{ width: "120px", height: "60px", background: "red" }} />,
      <div style={{ width: "120px", height: "60px", background: "red" }} />,
    ],
  },
};

export const Split: Story = {
  args: {
    direction: "horizontal",
    children: [
      <div style={{ width: "120px", height: "60px", background: "red" }} />,
      <div style={{ width: "120px", height: "60px", background: "red" }} />,
      <div style={{ width: "120px", height: "60px", background: "red" }} />,
    ],
    split: (
      <div style={{ height: "100px", width: "1px", background: "blue" }}></div>
    ),
  },
};

export const Wrap: Story = {
  args: {
    direction: "horizontal",
    children: [
      <div style={{ width: "120px", height: "60px", background: "red" }} />,
      <div style={{ width: "120px", height: "60px", background: "red" }} />,
      <div style={{ width: "120px", height: "60px", background: "red" }} />,
      <div style={{ width: "120px", height: "60px", background: "red" }} />,
    ],
    split: (
      <div style={{ height: "100px", width: "1px", background: "blue" }}></div>
    ),
    style: { width: "400px" },
    wrap: true,
  },
};

export const Size: Story = {
  args: {
    direction: "horizontal",
    children: [
      <div style={{ width: "120px", height: "60px", background: "red" }} />,
      <div style={{ width: "120px", height: "60px", background: "red" }} />,
      <div style={{ width: "120px", height: "60px", background: "red" }} />,
      <div style={{ width: "120px", height: "60px", background: "red" }} />,
    ],
    split: (
      <div style={{ height: "100px", width: "1px", background: "blue" }}></div>
    ),
    size: "small",
  },
};

export const configProvider: Story = {
  args: {
    direction: "horizontal",
    children: [
      <div style={{ width: "120px", height: "60px", background: "red" }} />,
      <div style={{ width: "120px", height: "60px", background: "red" }} />,
      <div style={{ width: "120px", height: "60px", background: "red" }} />,
      <div style={{ width: "120px", height: "60px", background: "red" }} />,
    ],
    split: (
      <div style={{ height: "100px", width: "1px", background: "blue" }}></div>
    ),
  },
  decorators: [
    (Story) => (
      <ConfigProvider
        space={{
          size: 30,
        }}
      >
        <Story />
      </ConfigProvider>
    ),
  ],
  parameters: {
    docs: {
      source: {
        code: `
         <ConfigProvider space={{ size: 30 }}>
            <Space
                direction="horizontal"
                split={
                    <div style={{ height: "100px", width: "1px", background: "blue" }}></div>
                }
            >
                <div style={{ width: "120px", height: "60px", background: "red" }} />
                <div style={{ width: "120px", height: "60px", background: "red" }} />
                <div style={{ width: "120px", height: "60px", background: "red" }} />
                <div style={{ width: "120px", height: "60px", background: "red" }} />
            </Space>
        </ConfigProvider>
        `,
      },
    },
  },
};
