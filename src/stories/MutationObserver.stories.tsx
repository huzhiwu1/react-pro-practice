import type { Meta, StoryObj } from "@storybook/react-vite";
import { useEffect, useState, useCallback } from "react";
import MutationObserver, {
  type MutationObserverType,
} from "../MutationObserver";

const meta = {
  title: "Components/MutationObserver",
  component: MutationObserver,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    onMutate: {
      type: "function",
      description: "监听子组件的属性，节点变化，返回子组件变化的内容",
    },
  },

  tags: ["autodocs"],
} satisfies Meta<typeof MutationObserver>;

export default meta;
type Story = StoryObj<typeof meta>;

const RenderMutationComponent = (props: MutationObserverType) => {
  const { onMutate } = props;
  const [count, setCount] = useState(0);
  const [mutation, setMutation] = useState<MutationRecord[]>([]);
  useEffect(() => {
    setInterval(() => {
      setCount((count) => count + 1);
    }, 1500);
  }, []);
  const onObserver = useCallback<MutationCallback>(
    (mutation, observer) => {
      onMutate?.(mutation, observer);
      setMutation(mutation);
    },
    [onMutate]
  );
  return (
    <div>
      <MutationObserver onMutate={onObserver}>
        <div className={`father-${count}`}>
          father
          <div className={`child-${count}`}>
            child <div className="count">{count}</div>
          </div>
        </div>
      </MutationObserver>
      <div>
        <span>属性变更内容</span>
        <br />
        {mutation.map((item) => {
          return (
            <div>
              <span>{item.attributeName}</span>:
              <span>{item.target?.getAttribute?.(item.attributeName)}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export const OnMutate: Story = {
  args: {
    onMutate: (mutations) => {},
    children: <></>,
  },
  render: RenderMutationComponent,
  parameters: {
    docs: {
      source: {
        code: `
  const RenderMutationComponent = (props: MutationObserverType) => {
  const { onMutate } = props;
  const [count, setCount] = useState(0);
  const [mutation, setMutation] = useState<MutationRecord[]>([]);
  useEffect(() => {
    setInterval(() => {
      setCount((count) => count + 1);
    }, 1500);
  }, []);
  const onObserver = useCallback<MutationCallback>(
    (mutation, observer) => {
      onMutate?.(mutation, observer);
      setMutation(mutation);
    },
    [onMutate]
  );
  return (
    <div>
      <MutationObserver onMutate={onObserver}>
        <div className={father-\${count}}>
          father
          <div className={child-\${count}}>
            child <div className="count">{count}</div>
          </div>
        </div>
      </MutationObserver>
      <div>
        <span>属性变更内容</span>
        <br />
        {mutation.map((item) => {
          return (
            <div>
              <span>{item.attributeName}</span>:
              <span>{item.target?.getAttribute?.(item.attributeName)}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
      `,
      },
    },
  },
};
