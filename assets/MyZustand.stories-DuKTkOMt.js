import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{r as d}from"./iframe-j35EKpAQ.js";import"./preload-helper-PPVm8Dsz.js";const v=t=>{let e;const a=new Set,u=(n,p)=>{const s=typeof n=="function"?n(e):n;if(Object.is(e,s))return;const l=e;p||typeof s!="object"||s===null?e=s:e=Object.assign({},e,s),a.forEach(X=>X(e,l))},b=()=>e,i={setState:u,getState:b,subscribe:n=>(a.add(n),()=>{a.delete(n)}),destroy:()=>{a.clear()}};return e=t(u,b,i),i};function f(t,e){function a(){return e(t.getState())}return d.useSyncExternalStore(t.subscribe,a)}function S(t){const e=v(t),a=u=>f(e,u);return Object.assign(a,e),a}const c=S(t=>({aaa:0,bbb:0,updateAaa:e=>{t(()=>({aaa:e}))},updateBbb:e=>{t(()=>({bbb:e}))}}));function m(){const t=c(e=>e.aaa);return o.jsxs("div",{children:["hello ",t]})}function g(){return d.useEffect(()=>{c.subscribe(t=>console.log("Bbb",t))},[]),o.jsx("div",{children:o.jsx(m,{})})}function A(){const t=c(a=>a.aaa),e=c(a=>a.updateAaa);return o.jsxs("div",{children:[o.jsx("input",{value:t,onChange:a=>e(a.target.value)}),o.jsx(g,{})]})}const y={title:"Components/MyZustand",component:A,parameters:{layout:"centered",docs:{description:{component:`一个轻量级、易于使用的状态管理库
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
        `}}},argTypes:{},tags:["autodocs"]},r={parameters:{docs:{source:{code:`
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
        `,open:!0}}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
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
        \`,
        open: true
      }
    }
  }
}`,...r.parameters?.docs?.source}}};const E=["Default"];export{r as Default,E as __namedExportsOrder,y as default};
