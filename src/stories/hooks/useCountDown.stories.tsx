// useCountDown.stories.tsx
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState, useCallback } from "react";
import useCountDown from "../../Hooks/useCountDown";

// 基础倒计时演示组件
const CountdownDemo = (props: any) => {
  const [timeLeft, formattedRes] = useCountDown(props);

  const isRunning = timeLeft > 0;
  const isExpired = timeLeft === 0;

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
      <h3 style={{ margin: "0 0 16px 0" }}>倒计时器</h3>

      {/* 时间显示 */}
      <div
        style={{
          fontSize: 32,
          fontWeight: "bold",
          fontFamily: "monospace",
          background: isExpired ? "#f6ffed" : "#f0f0f0",
          border: isExpired ? "1px solid #b7eb8f" : "1px solid #d9d9d9",
          padding: 16,
          borderRadius: 4,
          marginBottom: 16,
        }}
      >
        {isExpired ? (
          "时间到！"
        ) : (
          <>
            {formattedRes.days > 0 && <span>{formattedRes.days}天 </span>}
            {String(formattedRes.hours).padStart(2, "0")}:
            {String(formattedRes.minutes).padStart(2, "0")}:
            {String(formattedRes.seconds).padStart(2, "0")}
            {props.interval < 1000 && (
              <span>
                .
                {String(formattedRes.milliseconds).padStart(3, "0").slice(0, 2)}
              </span>
            )}
          </>
        )}
      </div>

      {/* 详细信息 */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          gap: 8,
          marginBottom: 16,
        }}
      >
        {formattedRes.days > 0 && (
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: 24, fontWeight: "bold" }}>
              {formattedRes.days}
            </div>
            <div style={{ fontSize: 12, color: "#666" }}>天</div>
          </div>
        )}
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: 24, fontWeight: "bold" }}>
            {String(formattedRes.hours).padStart(2, "0")}
          </div>
          <div style={{ fontSize: 12, color: "#666" }}>小时</div>
        </div>
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: 24, fontWeight: "bold" }}>
            {String(formattedRes.minutes).padStart(2, "0")}
          </div>
          <div style={{ fontSize: 12, color: "#666" }}>分钟</div>
        </div>
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: 24, fontWeight: "bold" }}>
            {String(formattedRes.seconds).padStart(2, "0")}
          </div>
          <div style={{ fontSize: 12, color: "#666" }}>秒</div>
        </div>
        {props.interval < 1000 && (
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: 24, fontWeight: "bold" }}>
              {String(formattedRes.milliseconds).padStart(3, "0").slice(0, 2)}
            </div>
            <div style={{ fontSize: 12, color: "#666" }}>毫秒</div>
          </div>
        )}
      </div>

      {/* 状态信息 */}
      <div
        style={{
          padding: 12,
          background: isExpired ? "#f6ffed" : isRunning ? "#e6f7ff" : "#fff2e8",
          border: isExpired
            ? "1px solid #b7eb8f"
            : isRunning
            ? "1px solid #91d5ff"
            : "1px solid #ffd591",
          borderRadius: 4,
          fontSize: 14,
          color: isExpired ? "#52c41a" : isRunning ? "#1890ff" : "#fa8c16",
        }}
      >
        {isExpired ? "倒计时结束" : isRunning ? "倒计时进行中..." : "未开始"}
      </div>

      {/* 调试信息 */}
      <details style={{ marginTop: 16, fontSize: 12, color: "#666" }}>
        <summary>调试信息</summary>
        <pre
          style={{
            textAlign: "left",
            background: "#f5f5f5",
            padding: 8,
            borderRadius: 4,
          }}
        >
          {JSON.stringify(
            {
              timeLeft,
              formattedRes,
              targetDate: props.targetDate,
              leftTime: props.leftTime,
              interval: props.interval,
            },
            null,
            2
          )}
        </pre>
      </details>
    </div>
  );
};

const meta = {
  title: "Hooks/useCountDown",
  component: CountdownDemo,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "倒计时 Hook，支持目标日期和剩余时间两种模式，提供格式化的时间数据。",
      },
    },
  },
  argTypes: {
    targetDate: {
      control: "date",
      description: "目标日期（Date 对象、时间戳或日期字符串）",
    },
    leftTime: {
      control: "number",
      description: "剩余时间（毫秒），从当前时间开始倒计时",
    },
    interval: {
      control: { type: "number", min: 10, max: 5000, step: 10 },
      description: "更新间隔（毫秒）",
    },
    onEnd: {
      action: "onEnd",
      description: "倒计时结束时的回调函数",
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof CountdownDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

// 目标日期倒计时
export const TargetDate: Story = {
  args: {
    targetDate: new Date(Date.now() + 2 * 60 * 1000), // 2分钟后
    interval: 1000,
  },
  parameters: {
    docs: {
      description: {
        story: "使用目标日期进行倒计时，到达指定时间点结束",
      },
    },
  },
};

// 剩余时间倒计时
export const LeftTime: Story = {
  args: {
    leftTime: 5 * 60 * 1000, // 5分钟
    interval: 1000,
  },
  parameters: {
    docs: {
      description: {
        story: "使用剩余时间进行倒计时，从当前时间开始计算",
      },
    },
  },
};
