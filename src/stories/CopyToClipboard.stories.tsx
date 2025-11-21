import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "antd";
import CopyToClipboard from "../CopyToClipboard";

const meta = {
  title: "Components/复制文本组件",
  component: CopyToClipboard,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "用于复制文本的组件，将需要的文本通过text传入，onCopy回调函数在文本复制成功时调用",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    text: {
      control: "text",
      description: "自定义需要复制的文本内容",
    },
    onCopy: {
      control: "object",
      table: {
        type: {
          summary: "(text:string, result:boolean)=>void",
          detail:
            "文本复制成功时的回调函数，text为文本，result表示复制结果是否成功",
        },
      },
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
