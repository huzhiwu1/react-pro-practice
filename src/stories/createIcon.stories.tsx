import type { Meta, StoryObj } from "@storybook/react-vite";

import createIcon from "../Icon/createIcon";

const IconAdd = createIcon({
  content: (
    <>
      <path d="M853.333333 480H544V170.666667c0-17.066667-14.933333-32-32-32s-32 14.933333-32 32v309.333333H170.666667c-17.066667 0-32 14.933333-32 32s14.933333 32 32 32h309.333333V853.333333c0 17.066667 14.933333 32 32 32s32-14.933333 32-32V544H853.333333c17.066667 0 32-14.933333 32-32s-14.933333-32-32-32z"></path>
    </>
  ),
});

const meta = {
  title: "Components/Icon/CreateIcon",
  component: IconAdd,
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
  },
  tags: ["autodocs"],
} satisfies Meta<typeof IconAdd>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Size: Story = {
  args: {
    size: "10em",
  },
  parameters: {
    docs: {
      source: {
        code: `
      const IconAdd = createIcon({
        content: (
          <>
          <path d="M853.333333 480H544V170.666667c0-17.066667-14.933333-32-32-32s-32 14.933333-32 32v309.333333H170.666667c-17.066667 0-32 14.933333-32 32s14.933333 32 32 32h309.333333V853.333333c0 17.066667 14.933333 32 32 32s32-14.933333 32-32V544H853.333333c17.066667 0 32-14.933333 32-32s-14.933333-32-32-32z"></path>
          </>
        ),
      });

      return <IconAdd size="10em"/>
        `,
      },
    },
  },
};

export const Spin: Story = {
  args: {
    spin: true,
    size: "10em",
  },
  parameters: {
    docs: {
      source: {
        code: `
      const IconAdd = createIcon({
        content: (
          <>
          <path d="M853.333333 480H544V170.666667c0-17.066667-14.933333-32-32-32s-32 14.933333-32 32v309.333333H170.666667c-17.066667 0-32 14.933333-32 32s14.933333 32 32 32h309.333333V853.333333c0 17.066667 14.933333 32 32 32s32-14.933333 32-32V544H853.333333c17.066667 0 32-14.933333 32-32s-14.933333-32-32-32z"></path>
          </>
        ),
      });

      return <IconAdd size="10em" spin={true}/>
        `,
      },
    },
  },
};

export const Ref: Story = {
  args: {
    size: "10em",
    ref: (ref) => {
      ref?.addEventListener("click", () => {
        alert("转发ref");
      });
    },
  },
  parameters: {
    docs: {
      source: {
        code: `
      const IconAdd = createIcon({
        content: (
          <>
          <path d="M853.333333 480H544V170.666667c0-17.066667-14.933333-32-32-32s-32 14.933333-32 32v309.333333H170.666667c-17.066667 0-32 14.933333-32 32s14.933333 32 32 32h309.333333V853.333333c0 17.066667 14.933333 32 32 32s32-14.933333 32-32V544H853.333333c17.066667 0 32-14.933333 32-32s-14.933333-32-32-32z"></path>
          </>
        ),
      });

      return <IconAdd size="10em"
        ref={(ref) => {
          ref?.addEventListener("click", () => {
            alert("转发ref");
          });
        }},
      />
        `,
      },
    },
  },
};
