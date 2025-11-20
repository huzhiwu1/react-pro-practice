import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "antd";
import CopyToClipboard from "../CopyToClipboard";

const meta = {
  title: "复制文本组件",
  component: CopyToClipboard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    text: {
      control: "text",
    },
  },
} satisfies Meta<typeof CopyToClipboard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const OnCopy: Story = {
  args: {
    onCopy: (text: string, result: boolean) => {
      alert(`复制${result ? "成功" : "失败"}！复制内容:${text}`);
    },
    text: "我是复制的文本",
    children: <button>点击复制文本</button>,
  },
};

export const Children: Story = {
  args: {
    onCopy: (text: string, result: boolean) => {
      alert(`复制${result ? "成功" : "失败"}！复制内容:${text}`);
    },
    text: "我是复制的文本",
    children: <Button type="primary">button child</Button>,
  },
};
