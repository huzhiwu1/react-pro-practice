// useCookie.stories.tsx
import type { Meta, StoryObj } from "@storybook/react-vite";

import useCookie from "../../Hooks/useCookie";
import { useState } from "react";

// 创建演示组件
const CookieDemo = ({
  cookieName,
  initialValue,
  options,
}: {
  cookieName: string;
  initialValue?: string;
  options?: Cookies.CookieAttributes;
}) => {
  const [value, updateCookie, deleteCookie] = useCookie(cookieName);

  const [inputValue, setInputValue] = useState(initialValue || "");

  return (
    <div
      style={{
        padding: 20,
        border: "1px solid #ddd",
        borderRadius: 8,
        maxWidth: 400,
      }}
    >
      <h3>Cookie: {cookieName}</h3>

      <div style={{ marginBottom: 16 }}>
        <strong>当前值:</strong>
        <span
          style={{
            marginLeft: 8,
            padding: "4px 8px",
            background: "#f5f5f5",
            borderRadius: 4,
            fontFamily: "monospace",
          }}
        >
          {value || "未设置"}
        </span>
      </div>

      <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="输入 cookie 值"
          style={{
            padding: "8px 12px",
            border: "1px solid #ccc",
            borderRadius: 4,
            flex: 1,
          }}
        />
        <button
          onClick={() => updateCookie(inputValue, options)}
          style={{
            padding: "8px 16px",
            background: "#1890ff",
            color: "white",
            border: "none",
            borderRadius: 4,
            cursor: "pointer",
          }}
        >
          设置 Cookie
        </button>
      </div>

      <div style={{ display: "flex", gap: 8 }}>
        <button
          onClick={deleteCookie}
          style={{
            padding: "8px 16px",
            background: "#ff4d4f",
            color: "white",
            border: "none",
            borderRadius: 4,
            cursor: "pointer",
          }}
        >
          删除 Cookie
        </button>

        <button
          onClick={() => {
            setInputValue("");
            updateCookie("", options);
          }}
          style={{
            padding: "8px 16px",
            background: "#faad14",
            color: "white",
            border: "none",
            borderRadius: 4,
            cursor: "pointer",
          }}
        >
          清空 Cookie
        </button>
      </div>

      {value && (
        <div
          style={{
            marginTop: 16,
            padding: 12,
            background: "#f6ffed",
            border: "1px solid #b7eb8f",
            borderRadius: 4,
          }}
        >
          <div style={{ fontSize: 12, color: "#52c41a", marginBottom: 4 }}>
            Cookie 信息
          </div>
          <div style={{ fontFamily: "monospace", fontSize: 12 }}>
            名称: {cookieName}
            <br />
            值: {value}
            <br />
            长度: {value.length} 字符
          </div>
        </div>
      )}
    </div>
  );
};

const meta = {
  title: "Hooks/useCookie",
  component: CookieDemo,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "用于管理浏览器 Cookie 的自定义 Hook，支持设置、更新和删除操作。",
      },
    },
  },
  argTypes: {
    cookieName: {
      control: "text",
      description: "Cookie 名称",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "required" },
      },
    },
    initialValue: {
      control: "text",
      description: "初始值（如果 Cookie 已存在则忽略）",
      table: {
        type: { summary: "string" },
      },
    },
    options: {
      control: "object",
      description: "Cookie 配置选项",
      table: {
        type: {
          summary: "Cookies.CookieAttributes",
          detail: "包含 expires, path, domain, secure 等属性",
        },
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof CookieDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    cookieName: "demo-cookie",
    initialValue: "initial-value",
  },
};

// 基础用法
export const BasicUsage: Story = {
  args: {
    cookieName: "user-preference",
    initialValue: "light-mode",
  },
  parameters: {
    docs: {
      description: {
        story: "基础用法，用于存储用户偏好设置",
      },
    },
  },
};

// 带过期时间的 Cookie
export const WithExpiration: Story = {
  args: {
    cookieName: "session-token",
    initialValue: "abc123xyz",
    options: {
      expires: 7, // 7天后过期
    },
  },
  parameters: {
    docs: {
      description: {
        story: "设置过期时间的 Cookie，适合用于会话管理",
      },
    },
  },
};

// 安全的 Cookie（HTTPS only）
export const SecureCookie: Story = {
  args: {
    cookieName: "auth-token",
    initialValue: "secure-jwt-token",
    options: {
      secure: true,
      sameSite: "strict",
    },
  },
  parameters: {
    docs: {
      description: {
        story: "安全 Cookie，仅通过 HTTPS 传输",
      },
    },
  },
};

// 路径限制的 Cookie
export const PathRestricted: Story = {
  args: {
    cookieName: "page-specific",
    initialValue: "page-data",
    options: {
      path: "/admin",
    },
  },
  parameters: {
    docs: {
      description: {
        story: "限制在特定路径下可访问的 Cookie",
      },
    },
  },
};
