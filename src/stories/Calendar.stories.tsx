import type { Meta, StoryObj } from "@storybook/react-vite";

import DayJS from "dayjs";
import Calendar, { type CalendarProps } from "../Calendar";

const meta = {
  title: "Components/日历组件",
  component: Calendar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    value: {
      control: "date",
    },
    defaultValue: {
      control: "date",
    },
  },
} satisfies Meta<typeof Calendar>;

export default meta;
type Story = StoryObj<typeof meta>;

const renderCalendar = (props: CalendarProps) => {
  if (typeof props.value === "number") {
    return (
      <Calendar
        {...props}
        value={DayJS(props.value)}
        defaultValue={DayJS(props.defaultValue)}
      />
    );
  }
  return <Calendar {...props} />;
};
export const value: Story = {
  args: {
    value: DayJS(Date.now()),
  },
  render: renderCalendar,
  parameters: {
    docs: {
      description: {
        story: "value值类型为Dayjs，传入该值用于指定当前的日期是什么",
      },
    },
  },
};

export const DateRender: Story = {
  args: {
    defaultValue: DayJS(Date.now()),
    // value: DayJS(Date.now()),
    dateRender(date) {
      return <p style={{ color: "blue" }}>{date.date()}</p>;
    },
  },
  render: renderCalendar,
  parameters: {
    docs: {
      description: {
        story: "dateRender用于自定义渲染每个日期的单元格",
      },
    },
  },
};

export const DateInnerContent: Story = {
  args: {
    defaultValue: DayJS(Date.now()),
    // value: DayJS(Date.now()),
    dateInnerContent(date) {
      return date.format("YY/MM/DD") ===
        DayJS(Date.now()).format("YY/MM/DD") ? (
        <p style={{ color: "red" }}>当天</p>
      ) : null;
    },
  },
  render: renderCalendar,
  parameters: {
    docs: {
      description: {
        story: "dateInnerContent用于自定义渲染每个日期的单元格除日期外的内容",
      },
    },
  },
};

export const Locale: Story = {
  args: {
    defaultValue: DayJS(Date.now()),
    // value: DayJS(Date.now()),
    locale: "en-US",
  },
  render: renderCalendar,
  parameters: {
    docs: {
      description: {
        story: "locale指定国际化内容",
      },
    },
  },
};
