import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{r as n,R as p}from"./iframe-j35EKpAQ.js";import"./preload-helper-PPVm8Dsz.js";const v={subtree:!0,childList:!0,attributeFilter:["style","class"]};function b(e,u,r=v){const a=n.useRef(null);a.current=u,n.useEffect(()=>{if(!e||!a.current)return;let s;return"MutationObserver"in window&&(s=new MutationObserver(a.current),e=Array.isArray(e)?e:[e],e.forEach(i=>{s.observe(i,r)})),()=>{s.takeRecords(),s.disconnect()}},[e,r])}const m=e=>{const{options:u,onMutate:r,children:a}=e,[s,i]=n.useState(),c=n.useRef(null);return b(s,r,u),n.useLayoutEffect(()=>{c.current&&i(c.current)},[]),!a||!n.isValidElement(a)?null:p.cloneElement(a,{ref:c})};m.__docgenInfo={description:"",methods:[],displayName:"MutationObserver",props:{options:{required:!1,tsType:{name:"MutationObserverInit"},description:""},onMutate:{required:!0,tsType:{name:"MutationCallback"},description:""},children:{required:!0,tsType:{name:"ReactReactElement",raw:"React.ReactElement"},description:""}}};const x={title:"Components/MutationObserver",component:m,parameters:{layout:"centered"},argTypes:{onMutate:{type:"function",description:"监听子组件的属性，节点变化，返回子组件变化的内容"}},tags:["autodocs"]},M=e=>{const{onMutate:u}=e,[r,a]=n.useState(0),[s,i]=n.useState([]);n.useEffect(()=>{setInterval(()=>{a(o=>o+1)},1500)},[]);const c=n.useCallback((o,l)=>{u?.(o,l),i(o)},[u]);return t.jsxs("div",{children:[t.jsx(m,{onMutate:c,children:t.jsxs("div",{className:`father-${r}`,children:["father",t.jsxs("div",{className:`child-${r}`,children:["child ",t.jsx("div",{className:"count",children:r})]})]})}),t.jsxs("div",{children:[t.jsx("span",{children:"属性变更内容"}),t.jsx("br",{}),s.map(o=>t.jsxs("div",{children:[t.jsx("span",{children:o.attributeName}),":",t.jsx("span",{children:o.target?.getAttribute?.(o.attributeName)})]}))]})]})},d={args:{onMutate:e=>{},children:t.jsx(t.Fragment,{})},render:M,parameters:{docs:{source:{code:`
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
      `}}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    onMutate: mutations => {},
    children: <></>
  },
  render: RenderMutationComponent,
  parameters: {
    docs: {
      source: {
        code: \`
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
        <div className={father-\\\${count}}>
          father
          <div className={child-\\\${count}}>
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
      \`
      }
    }
  }
}`,...d.parameters?.docs?.source}}};const C=["OnMutate"];export{d as OnMutate,C as __namedExportsOrder,x as default};
