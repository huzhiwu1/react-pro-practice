// Message.docs.stories.tsx
import type { Meta, StoryObj } from "@storybook/react-vite";
import MessageDemo from "./MessageDemo";
import { ConfigProvider } from "../../Message/ConfigProvider";

const meta = {
  title: "Components/Message",
  component: MessageDemo,
  decorators: [
    (Story) => (
      <ConfigProvider>
        <Story />
      </ConfigProvider>
    ),
  ],
  parameters: {
    layout: "center",
    docs: {
      description: {
        component: "消息提示组件的完整使用文档",
      },
    },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {},
  parameters: {
    docs: {
      source: {
        code: `
        function MessageDemo() {
  const messageProviderRef = useMessage();
  return (
    <div>
      <button
        onClick={() =>
          messageProviderRef.add({ content: "顶部消息", position: "top" })
        }
      >
        显示顶部消息
      </button>
      <button
        onClick={() =>
          messageProviderRef.add({
            content: "显示底部消息",
            position: "bottom",
          })
        }
      >
        显示底部消息
      </button>
    </div>
  );
}
        `,
      },
    },
  },
};
