// useHover.stories.tsx
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import useHover from "../../Hooks/useHover";

// 基础演示组件
const HoverDemo = (props: { element: any; showState?: boolean }) => {
  const [hoverElement, isHovered] = useHover(props.element);

  return (
    <div
      style={{
        padding: 24,
        border: "1px solid #ddd",
        borderRadius: 8,
        maxWidth: 500,
        textAlign: "center",
      }}
    >
      <h3 style={{ margin: "0 0 16px 0" }}>Hover 状态演示</h3>

      {/* 显示 hover 状态 */}
      {props.showState !== false && (
        <div
          style={{
            padding: 12,
            background: isHovered ? "#f6ffed" : "#f0f0f0",
            border: isHovered ? "1px solid #b7eb8f" : "1px solid #d9d9d9",
            borderRadius: 4,
            marginBottom: 16,
            fontSize: 14,
            color: isHovered ? "#52c41a" : "#666",
            fontWeight: "bold",
          }}
        >
          Hover 状态: {isHovered ? "✅ 悬停中" : "❌ 未悬停"}
        </div>
      )}

      {/* 悬停元素 */}
      <div style={{ display: "flex", justifyContent: "center" }}>
        {hoverElement}
      </div>
    </div>
  );
};

const meta = {
  title: "Hooks/useHover",
  component: HoverDemo,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "用于管理元素悬停状态的 Hook，支持函数子组件和普通元素两种用法。",
      },
    },
  },
  argTypes: {
    element: {
      control: { type: null }, // 禁用 Controls
      description: "要添加悬停效果的元素或函数",
    },
    showState: {
      control: "boolean",
      description: "是否显示悬停状态指示器",
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof HoverDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

// 基础按钮悬停
export const BasicButton: Story = {
  args: {
    element: (
      <button
        style={{
          padding: "12px 24px",
          background: "#1890ff",
          color: "white",
          border: "none",
          borderRadius: 4,
          fontSize: 16,
          cursor: "pointer",
          transition: "all 0.3s",
        }}
      >
        悬停我
      </button>
    ),
    showState: true,
  },
  parameters: {
    docs: {
      description: {
        story: "基础用法：为普通元素添加悬停状态检测",
      },
      source: {
        code: `const HoverDemo = (props: { element: any; showState?: boolean }) => {
  const [hoverElement, isHovered] = useHover(props.element);

  return (
    <div
      style={{
        padding: 24,
        border: "1px solid #ddd",
        borderRadius: 8,
        maxWidth: 500,
        textAlign: "center",
      }}
    >
      <h3 style={{ margin: "0 0 16px 0" }}>Hover 状态演示</h3>

      {/* 显示 hover 状态 */}
      {props.showState !== false && (
        <div
          style={{
            padding: 12,
            background: isHovered ? "#f6ffed" : "#f0f0f0",
            border: isHovered ? "1px solid #b7eb8f" : "1px solid #d9d9d9",
            borderRadius: 4,
            marginBottom: 16,
            fontSize: 14,
            color: isHovered ? "#52c41a" : "#666",
            fontWeight: "bold",
          }}
        >
          Hover 状态: {isHovered ? "✅ 悬停中" : "❌ 未悬停"}
        </div>
      )}

      {/* 悬停元素 */}
      <div style={{ display: "flex", justifyContent: "center" }}>
        {hoverElement}
      </div>
    </div>
  );
};`,
      },
    },
  },
};

// 函数子组件用法
export const FunctionAsChild: Story = {
  args: {
    showState: true,
  },
  render: (args) => (
    <HoverDemo
      {...args}
      element={(isHovered: boolean) => (
        <div
          style={{
            padding: "20px",
            background: isHovered ? "#1890ff" : "#f0f0f0",
            color: isHovered ? "white" : "#333",
            border: `2px solid ${isHovered ? "#096dd9" : "#d9d9d9"}`,
            borderRadius: 8,
            cursor: "pointer",
            transition: "all 0.3s",
            transform: isHovered ? "scale(1.05)" : "scale(1)",
            boxShadow: isHovered
              ? "0 4px 12px rgba(24, 144, 255, 0.3)"
              : "none",
            minWidth: "120px",
          }}
        >
          {isHovered ? "👆 鼠标悬停中" : "🖱️ 悬停我"}
        </div>
      )}
    />
  ),
  parameters: {
    docs: {
      description: {
        story: "函数子组件用法：接收 hover 状态作为参数，动态渲染内容",
      },
      source: {
        code: `const HoverDemo = (props: { element: any; showState?: boolean }) => {
  const [hoverElement, isHovered] = useHover(props.element);

  return (
    <div
      style={{
        padding: 24,
        border: "1px solid #ddd",
        borderRadius: 8,
        maxWidth: 500,
        textAlign: "center",
      }}
    >
      <h3 style={{ margin: "0 0 16px 0" }}>Hover 状态演示</h3>

      {/* 显示 hover 状态 */}
      {props.showState !== false && (
        <div
          style={{
            padding: 12,
            background: isHovered ? "#f6ffed" : "#f0f0f0",
            border: isHovered ? "1px solid #b7eb8f" : "1px solid #d9d9d9",
            borderRadius: 4,
            marginBottom: 16,
            fontSize: 14,
            color: isHovered ? "#52c41a" : "#666",
            fontWeight: "bold",
          }}
        >
          Hover 状态: {isHovered ? "✅ 悬停中" : "❌ 未悬停"}
        </div>
      )}

      {/* 悬停元素 */}
      <div style={{ display: "flex", justifyContent: "center" }}>
        {hoverElement}
      </div>
    </div>
  );
};`,
      },
    },
  },
};
