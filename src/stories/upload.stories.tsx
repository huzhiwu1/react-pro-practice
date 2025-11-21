import type { Meta, StoryObj } from "@storybook/react-vite";
import Upload, { type UploadProps } from "../Upload";
import { Button } from "antd";
const meta = {
  title: "Components/Upload",
  component: Upload,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    multiple: {
      description: "是否可以上传多个文件",
    },
    drag: {
      description: "是否支持拖拽上传文件",
    },
  },

  tags: ["autodocs"],
} satisfies Meta<typeof Upload>;

export default meta;
type Story = StoryObj<typeof meta>;

const RenderUpload = (props: UploadProps) => {
  return (
    <Upload {...props}>
      <Button>上传文件</Button>
    </Upload>
  );
};

export const Multiple: Story = {
  args: {
    action: "http://localhost:3000/upload",
    name: "file",
    multiple: true,
  },
  render: RenderUpload,
};

export const Drag: Story = {
  args: {
    action: "http://localhost:3000/upload",
    name: "file",
    multiple: true,
    drag: true,
  },
  render: RenderUpload,
};

export const BeforeUpload: Story = {
  args: {
    action: "http://localhost:3000/upload",
    name: "file",
    beforeUpload: (file) => {
      alert(`beforeUpload 文件名称${file.name}`);
      return true;
    },
  },
  render: RenderUpload,
};

export const OnProgress: Story = {
  args: {
    action: "http://localhost:3000/upload",
    name: "file",
    onProgress: (percentage, file) => {
      alert(`onProgress 文件名称${file.name} 进度${percentage}`);
      return true;
    },
  },
  render: RenderUpload,
};

export const onSuccess: Story = {
  args: {
    action: "http://localhost:3000/upload",
    name: "file",
    onSuccess: (data, file) => {
      alert(`onSuccess 文件名称${file.name} data${data}`);
      return true;
    },
  },
  render: RenderUpload,
};

export const onError: Story = {
  args: {
    action: "http://localhost:3000/upload",
    name: "file",
    onError: (error, file) => {
      alert(`onError 文件名称${file.name} error${error}`);
      return true;
    },
  },
  render: RenderUpload,
};

export const onRemove: Story = {
  args: {
    action: "http://localhost:3000/upload",
    name: "file",
    onRemove: (file) => {
      alert(`onRemove 文件名称${file.name}`);
      return true;
    },
  },
  render: RenderUpload,
};
