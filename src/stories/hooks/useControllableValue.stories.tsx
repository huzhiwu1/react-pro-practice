// useControllableValue.stories.tsx
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState, useCallback } from "react";
import useControllableValue from "../../Hooks/useControllableValue";

// 基础演示组件
const ControllableInputDemo = (props: any) => {
  const [value, setValue] = useControllableValue(props);

  return (
    <div
      style={{
        padding: 20,
        border: "1px solid #ddd",
        borderRadius: 8,
        maxWidth: 400,
      }}
    >
      <h3>受控/非受控输入框</h3>

      <input
        value={value || ""}
        onChange={(e) => setValue(e.target.value)}
        placeholder="输入内容..."
        style={{
          width: "100%",
          padding: "8px 12px",
          border: "1px solid #ccc",
          borderRadius: 4,
          marginBottom: 12,
        }}
      />

      <div style={{ fontSize: 14, color: "#666" }}>
        <div>
          当前值: <strong>{value || "空"}</strong>
        </div>
        <div>
          模式: <strong>{props.value !== undefined ? "受控" : "非受控"}</strong>
        </div>
        {props.defaultValue !== undefined && (
          <div>
            默认值: <strong>{props.defaultValue}</strong>
          </div>
        )}
      </div>
    </div>
  );
};

const meta = {
  title: "Hooks/useControllableValue",
  component: ControllableInputDemo,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "支持受控和非受控模式的值管理 Hook，可以无缝切换两种模式。",
      },
    },
  },
  argTypes: {
    value: {
      control: "text",
      description: "受控值（设置后组件变为受控模式）",
    },
    defaultValue: {
      control: "text",
      description: "非受控模式下的默认值",
    },
    onChange: {
      action: "onChange",
      description: "值变化时的回调函数",
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ControllableInputDemo>;

export default meta;
type Story = StoryObj<typeof meta>;
// 非受控模式
export const Uncontrolled: Story = {
  args: {
    defaultValue: "初始值",
  },
  parameters: {
    docs: {
      description: {
        story: "非受控模式：使用内部状态管理值，通过 defaultValue 设置初始值",
      },
    },
  },
};

// 受控模式
export const Controlled: Story = {
  render: (args) => {
    // 在 render 函数中创建状态来模拟受控组件
    const [value, setValue] = useState("受控值");

    return (
      <div>
        <ControllableInputDemo {...args} value={value} onChange={setValue} />
        <div
          style={{
            marginTop: 16,
            padding: 12,
            background: "#f0f0f0",
            borderRadius: 4,
          }}
        >
          <p style={{ margin: 0, fontSize: 14 }}>外部控制:</p>
          <button
            onClick={() => setValue("新值 " + Date.now())}
            style={{ marginTop: 8, padding: "4px 8px" }}
          >
            改变值
          </button>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "受控模式：值由外部状态控制，通过 value 和 onChange 属性管理",
      },
    },
  },
};
