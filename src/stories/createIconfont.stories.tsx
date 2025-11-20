import createFromIconfont from "../Icon/createFromIconfont";
import type { Meta, StoryObj } from "@storybook/react-vite";

const IconFont = createFromIconfont(
  "//at.alicdn.com/t/c/font_5057985_4kho4141eru.js"
);

const meta = {
  title: "Components/Icon/createFromIconfont",
  component: IconFont,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    size: {
      control: "object",
      description: "图标尺寸，可以是字符串或字符串数组",
      table: {
        type: {
          summary: "string | string[]",
          detail:
            "支持单个尺寸字符串如 '24px'，或响应式尺寸数组如 ['16px', '24px'],[宽度，高度]",
        },
      },
    },
    spin: {
      control: "boolean",
      description: "图标是否可以旋转",
    },
    ref: {
      description: "转发ref到外部",
      defaultValue: (ref) => {
        ref?.addEventListener("click", () => {
          alert("转发ref");
        });
      },
    },
    type: {
      description: "icon的类型",
      defaultValue: "icon-exe",
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof IconFont>;
export default meta;

type Story = StoryObj<typeof meta>;

export const IconFolder: Story = {
  args: {
    type: "icon-folder",
    size: ["10em", "10em"],
  },
  parameters: {
    docs: {
      source: {
        code: `
        const IconFont = createFromIconfont("//at.alicdn.com/t/c/font_5057985_4kho4141eru.js");
        return <IconFont type="icon-folder" size={["10em", "10em"]}/>
        `,
      },
    },
  },
};
