// useInterval.stories.tsx
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState, useCallback } from "react";
import useInterval from "../../Hooks/useInterval";

// 基础计数器演示组件
const CounterDemo = (props: {
  fn: Function;
  delay: number;
  description?: string;
}) => {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(true);

  const increment = useCallback(() => {
    setCount((prev) => prev + 1);
    props.fn(); // 调用传入的函数（用于测试）
  }, [props.fn]);

  // 使用 useInterval
  const clearInterval = useInterval(
    isRunning ? increment : () => {},
    props.delay
  );

  const toggle = () => setIsRunning((prev) => !prev);
  const reset = () => {
    setCount(0);
    setIsRunning(true);
  };

  return (
    <div
      style={{
        padding: 24,
        border: "1px solid #ddd",
        borderRadius: 8,
        maxWidth: 400,
        textAlign: "center",
      }}
    >
      <h3 style={{ margin: "0 0 16px 0" }}>useInterval 演示</h3>

      {props.description && (
        <div
          style={{
            padding: 12,
            background: "#f6f6f6",
            borderRadius: 4,
            marginBottom: 16,
            fontSize: 14,
          }}
        >
          {props.description}
        </div>
      )}

      {/* 计数器显示 */}
      <div
        style={{
          fontSize: 48,
          fontWeight: "bold",
          fontFamily: "monospace",
          color: isRunning ? "#1890ff" : "#666",
          marginBottom: 16,
          transition: "color 0.3s",
        }}
      >
        {count}
      </div>

      {/* 状态指示器 */}
      <div
        style={{
          display: "inline-block",
          padding: "4px 12px",
          background: isRunning ? "#f6ffed" : "#fff2e8",
          color: isRunning ? "#52c41a" : "#fa8c16",
          border: `1px solid ${isRunning ? "#b7eb8f" : "#ffd591"}`,
          borderRadius: 12,
          fontSize: 12,
          fontWeight: "bold",
          marginBottom: 16,
        }}
      >
        {isRunning ? "运行中" : "已暂停"}
      </div>

      {/* 控制按钮 */}
      <div
        style={{
          display: "flex",
          gap: 8,
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <button
          onClick={toggle}
          style={{
            padding: "8px 16px",
            background: isRunning ? "#faad14" : "#52c41a",
            color: "white",
            border: "none",
            borderRadius: 4,
            cursor: "pointer",
          }}
        >
          {isRunning ? "⏸️ 暂停" : "▶️ 继续"}
        </button>

        <button
          onClick={clearInterval}
          style={{
            padding: "8px 16px",
            background: "#ff4d4f",
            color: "white",
            border: "none",
            borderRadius: 4,
            cursor: "pointer",
          }}
        >
          ⏹️ 停止
        </button>

        <button
          onClick={reset}
          style={{
            padding: "8px 16px",
            background: "#1890ff",
            color: "white",
            border: "none",
            borderRadius: 4,
            cursor: "pointer",
          }}
        >
          🔄 重置
        </button>
      </div>

      {/* 详细信息 */}
      <div style={{ marginTop: 16, fontSize: 12, color: "#666" }}>
        <div>间隔: {props.delay}ms</div>
        <div>调用次数: {count}</div>
      </div>
    </div>
  );
};
const sourceCode = `const CounterDemo = (props: {
  fn: Function;
  delay: number;
  description?: string;
}) => {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(true);

  const increment = useCallback(() => {
    setCount((prev) => prev + 1);
    props.fn(); // 调用传入的函数（用于测试）
  }, [props.fn]);

  // 使用 useInterval
  const clearInterval = useInterval(
    isRunning ? increment : () => {},
    props.delay
  );

  const toggle = () => setIsRunning((prev) => !prev);
  const reset = () => {
    setCount(0);
    setIsRunning(true);
  };

  return (
    <div
      style={{
        padding: 24,
        border: "1px solid #ddd",
        borderRadius: 8,
        maxWidth: 400,
        textAlign: "center",
      }}
    >
      <h3 style={{ margin: "0 0 16px 0" }}>useInterval 演示</h3>

      {props.description && (
        <div
          style={{
            padding: 12,
            background: "#f6f6f6",
            borderRadius: 4,
            marginBottom: 16,
            fontSize: 14,
          }}
        >
          {props.description}
        </div>
      )}

      {/* 计数器显示 */}
      <div
        style={{
          fontSize: 48,
          fontWeight: "bold",
          fontFamily: "monospace",
          color: isRunning ? "#1890ff" : "#666",
          marginBottom: 16,
          transition: "color 0.3s",
        }}
      >
        {count}
      </div>

      {/* 状态指示器 */}
      <div
        style={{
          display: "inline-block",
          padding: "4px 12px",
          background: isRunning ? "#f6ffed" : "#fff2e8",
          color: isRunning ? "#52c41a" : "#fa8c16",
          border: \`1px solid \${isRunning ? "#b7eb8f" : "#ffd591"}\`,
          borderRadius: 12,
          fontSize: 12,
          fontWeight: "bold",
          marginBottom: 16,
        }}
      >
        {isRunning ? "运行中" : "已暂停"}
      </div>

      {/* 控制按钮 */}
      <div
        style={{
          display: "flex",
          gap: 8,
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <button
          onClick={toggle}
          style={{
            padding: "8px 16px",
            background: isRunning ? "#faad14" : "#52c41a",
            color: "white",
            border: "none",
            borderRadius: 4,
            cursor: "pointer",
          }}
        >
          {isRunning ? "⏸️ 暂停" : "▶️ 继续"}
        </button>

        <button
          onClick={clearInterval}
          style={{
            padding: "8px 16px",
            background: "#ff4d4f",
            color: "white",
            border: "none",
            borderRadius: 4,
            cursor: "pointer",
          }}
        >
          ⏹️ 停止
        </button>

        <button
          onClick={reset}
          style={{
            padding: "8px 16px",
            background: "#1890ff",
            color: "white",
            border: "none",
            borderRadius: 4,
            cursor: "pointer",
          }}
        >
          🔄 重置
        </button>
      </div>

      {/* 详细信息 */}
      <div style={{ marginTop: 16, fontSize: 12, color: "#666" }}>
        <div>间隔: {props.delay}ms</div>
        <div>调用次数: {count}</div>
      </div>
    </div>
  );
};`;

const meta = {
  title: "Hooks/useInterval",
  component: CounterDemo,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "定时器 Hook，用于定期执行函数，支持动态间隔和手动清除。",
      },
    },
  },
  argTypes: {
    delay: {
      control: { type: "number", min: 10, max: 5000, step: 100 },
      description: "执行间隔（毫秒）",
    },
    fn: {
      table: {
        disable: true, // 在 Controls 中隐藏
      },
    },
    description: {
      control: "text",
      description: "示例描述",
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof CounterDemo>;

export default meta;
type Story = StoryObj<typeof meta>;
// 快速间隔（100ms）
export const FastInterval: Story = {
  args: {
    delay: 100,
    fn: () => console.log("回调函数"),
    description: "快速间隔（100ms） - 适合高频更新",
  },
  parameters: {
    docs: {
      description: {
        story: "快速间隔执行，适合需要高频更新的场景",
      },
      source: {
        code: sourceCode,
      },
    },
  },
};

// 标准间隔（1秒）
export const StandardInterval: Story = {
  args: {
    delay: 1000,
    fn: () => console.log("回调函数"),
    description: "标准间隔（1秒） - 适合常规计时",
  },
  parameters: {
    docs: {
      description: {
        story: "标准间隔执行，适合常规计时需求",
      },
      source: {
        code: sourceCode,
      },
    },
  },
};

// 慢速间隔（5秒）
export const SlowInterval: Story = {
  args: {
    delay: 5000,
    fn: () => console.log("回调函数"),
    description: "慢速间隔（5秒） - 适合低频检查",
  },
  parameters: {
    docs: {
      description: {
        story: "慢速间隔执行，适合低频检查或轮询",
      },
      source: {
        code: sourceCode,
      },
    },
  },
};
