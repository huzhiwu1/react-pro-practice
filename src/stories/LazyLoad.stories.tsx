import type { Meta, StoryObj } from "@storybook/react-vite";

import LazyLoad from "../LazyLoad";
import type { LazyLoadProps } from "../LazyLoad";

const meta = {
  title: "Components/懒加载组件",
  component: LazyLoad,
  //   parameters: {
  //     layout: "centered",
  //   },
  tags: ["autodocs"],
  argTypes: {
    offset: {
      description: "距离视口多少距离开始加载",
    },
  },
} satisfies Meta<typeof LazyLoad>;

export default meta;
type Story = StoryObj<typeof meta>;

const renderLazyLoad = (props: LazyLoadProps) => {
  return (
    <>
      <div style={{ height: "40px", lineHeight: "40px" }}>占位</div>
      <div style={{ height: "40px", lineHeight: "40px" }}>占位</div>
      <div style={{ height: "40px", lineHeight: "40px" }}>占位</div>
      <div style={{ height: "40px", lineHeight: "40px" }}>占位</div>
      <div style={{ height: "40px", lineHeight: "40px" }}>占位</div>
      <div style={{ height: "40px", lineHeight: "40px" }}>占位</div>
      <div style={{ height: "40px", lineHeight: "40px" }}>占位</div>
      <div style={{ height: "40px", lineHeight: "40px" }}>占位</div>
      <div style={{ height: "40px", lineHeight: "40px" }}>占位</div>
      <div style={{ height: "40px", lineHeight: "40px" }}>占位</div>
      <div style={{ height: "40px", lineHeight: "40px" }}>占位</div>
      <div style={{ height: "40px", lineHeight: "40px" }}>占位</div>
      <div style={{ height: "40px", lineHeight: "40px" }}>占位</div>
      <div style={{ height: "40px", lineHeight: "40px" }}>占位</div>
      <div style={{ height: "40px", lineHeight: "40px" }}>占位</div>
      <div style={{ height: "40px", lineHeight: "40px" }}>占位</div>
      <div style={{ height: "40px", lineHeight: "40px" }}>占位</div>
      <div style={{ height: "40px", lineHeight: "40px" }}>占位</div>
      <div style={{ height: "40px", lineHeight: "40px" }}>占位</div>
      <div style={{ height: "40px", lineHeight: "40px" }}>占位</div>
      <div style={{ height: "40px", lineHeight: "40px" }}>占位</div>
      <div style={{ height: "40px", lineHeight: "40px" }}>占位</div>
      <div style={{ height: "40px", lineHeight: "40px" }}>占位</div>
      <div style={{ height: "40px", lineHeight: "40px" }}>占位</div>
      <div style={{ height: "40px", lineHeight: "40px" }}>占位</div>
      <div style={{ height: "40px", lineHeight: "40px" }}>占位</div>
      <div style={{ height: "40px", lineHeight: "40px" }}>占位</div>
      <div style={{ height: "40px", lineHeight: "40px" }}>占位</div>
      <div style={{ height: "40px", lineHeight: "40px" }}>占位</div>
      <LazyLoad {...props} />
      <div style={{ height: "40px", lineHeight: "40px" }}>占位</div>
    </>
  );
};
export const offset: Story = {
  args: {
    offset: "100px",
    children: (
      <img src="https://img1.baidu.com/it/u=2172818577,3783888802&fm=253&app=138&f=JPEG?w=800&h=1422" />
    ),
  },

  render: renderLazyLoad,
};

export const placeholder: Story = {
  args: {
    offset: "100px",
    placeholder: <div style={{ height: "100px" }}>loading....</div>,
    children: (
      <img src="https://img1.baidu.com/it/u=2172818577,3783888802&fm=253&app=138&f=JPEG?w=800&h=1422" />
    ),
  },

  render: renderLazyLoad,
};

export const onContentVisible: Story = {
  args: {
    offset: "100px",
    placeholder: <div style={{ height: "100px" }}>loading....</div>,
    children: (
      <img src="https://img1.baidu.com/it/u=2172818577,3783888802&fm=253&app=138&f=JPEG?w=800&h=1422" />
    ),
    onContentVisible: () => {
      alert("已经出现在视口内");
    },
  },

  render: renderLazyLoad,
};
