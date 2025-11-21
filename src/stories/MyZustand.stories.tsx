import type { Meta, StoryObj } from "@storybook/react-vite";
import { create } from "../MyZustand/MyZustand";

import { useEffect } from "react";

const useXXXStore = create((set) => ({
  aaa: 0,
  bbb: 0,
  updateAaa: (value: number) => {
    set(() => ({
      aaa: value,
    }));
  },
  updateBbb: (value: number) => {
    set(() => ({
      bbb: value,
    }));
  },
}));

function Ccc() {
  const aaa = useXXXStore((state) => state.aaa);
  return <div>hello {aaa}</div>;
}
function Bbb() {
  useEffect(() => {
    useXXXStore.subscribe((state) => console.log("Bbb", state));
  }, []);
  return (
    <div>
      <Ccc />
    </div>
  );
}

function App() {
  const aaa = useXXXStore((state) => state.aaa);
  const updateAaa = useXXXStore((state) => state.updateAaa);
  return (
    <div>
      <input value={aaa} onChange={(e) => updateAaa(e.target.value)} />
      <Bbb />
    </div>
  );
}

const meta = {
  title: "Components/MyZustand",
  component: App,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `一个轻量级、易于使用的状态管理库
        import { create } from 'MyZustand';
        // 定义全局状态
        const useXXXStore = create((set) => ({
            aaa: 0,
            bbb: 0,
            updateAaa: (value: number) => {
                set(() => ({
                aaa: value,
                }));
            },
            updateBbb: (value: number) => {
                set(() => ({
                bbb: value,
                }));
            },
        }));
        // 使用
        function Ccc() {
            const aaa = useXXXStore((state) => state.aaa);
            return <div>hello {aaa}</div>;
        }
        function Bbb() {
            useEffect(() => {
                useXXXStore.subscribe((state) => console.log("Bbb", state));
            }, []);
            return (
                <div>
                <Ccc />
                </div>
            );
        }
        function App() {
            const aaa = useXXXStore((state) => state.aaa);
            const updateAaa = useXXXStore((state) => state.updateAaa);
            return (
                <div>
                <input value={aaa} onChange={(e) => updateAaa(e.target.value)} />
                <Bbb />
                </div>
            );
        }

  );
}
        `,
      },
    },
  },
  argTypes: {},

  tags: ["autodocs"],
} satisfies Meta<typeof App>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    docs: {
      source: {
        code: `
        const useXXXStore = create((set) => ({
            aaa: 0,
            bbb: 0,
            updateAaa: (value: number) => {
                set(() => ({
                aaa: value,
                }));
            },
            updateBbb: (value: number) => {
                set(() => ({
                bbb: value,
                }));
            },
            }));

        function Ccc() {
            const aaa = useXXXStore((state) => state.aaa);
            return <div>hello {aaa}</div>;
        }
        function Bbb() {
            useEffect(() => {
                useXXXStore.subscribe((state) => console.log("Bbb", state));
            }, []);
            return (
                <div>
                <Ccc />
                </div>
            );
        }

        function App() {
            const aaa = useXXXStore((state) => state.aaa);
            const updateAaa = useXXXStore((state) => state.updateAaa);
            return (
                <div>
                <input value={aaa} onChange={(e) => updateAaa(e.target.value)} />
                <Bbb />
                </div>
            );
        }
        `,
        open: true,
      },
    },
  },
};
