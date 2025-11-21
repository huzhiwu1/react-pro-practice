import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as g,R as A}from"./iframe-j35EKpAQ.js";import{c as _}from"./index-DqVAgsJl.js";import"./preload-helper-PPVm8Dsz.js";const b=g.createContext({space:{size:"small"}});function w(n){const{space:c,children:h}=n;return e.jsx(b.Provider,{value:{space:c},children:h})}w.__docgenInfo={description:"",methods:[],displayName:"ConfigProvider"};const R={small:8,middle:16,large:24};function E(n){return typeof n=="string"?R[n]:n||0}const k=n=>{const{space:c}=g.useContext(b),{className:h,style:z,direction:x="horizontal",align:u,wrap:f,size:i=c?.size||"small",children:j,split:m,...S}=n,v=x==="horizontal"&&u===void 0?"center":u,y=A.Children.toArray(j),C=y.map((t,d)=>{const q=t&&t.key||`space-item-${d}`;return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"space-item",children:t},q),m&&d<y.length-1&&e.jsx("span",{className:"space-split",children:m})]})}),r={};f&&(r.flexFlow="wrap");const[P,T]=g.useMemo(()=>(Array.isArray(i)?i:[i,i]).map(d=>E(d)),[i]);r.rowGap=P,r.columnGap=T;const N=_(h,"space",`space-${x}`,{[`space-align-${v}`]:v});return e.jsx("div",{style:{...z,...r},className:N,...S,children:C})};k.__docgenInfo={description:"",methods:[],displayName:"Space",props:{className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"CSSProperties"},description:""},direction:{required:!1,tsType:{name:"union",raw:'"horizontal" | "vertical"',elements:[{name:"literal",value:'"horizontal"'},{name:"literal",value:'"vertical"'}]},description:""},align:{required:!1,tsType:{name:"union",raw:'"start" | "end" | "center" | "baseline"',elements:[{name:"literal",value:'"start"'},{name:"literal",value:'"end"'},{name:"literal",value:'"center"'},{name:"literal",value:'"baseline"'}]},description:""},wrap:{required:!1,tsType:{name:"boolean"},description:""},size:{required:!1,tsType:{name:"union",raw:"SizeType | [SizeType, SizeType]",elements:[{name:"union",raw:'"small" | "middle" | "large" | number | undefined',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"middle"'},{name:"literal",value:'"large"'},{name:"number"},{name:"undefined"}]},{name:"tuple",raw:"[SizeType, SizeType]",elements:[{name:"union",raw:'"small" | "middle" | "large" | number | undefined',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"middle"'},{name:"literal",value:'"large"'},{name:"number"},{name:"undefined"}]},{name:"union",raw:'"small" | "middle" | "large" | number | undefined',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"middle"'},{name:"literal",value:'"large"'},{name:"number"},{name:"undefined"}]}]}]},description:""},split:{required:!1,tsType:{name:"ReactNode"},description:""}},composes:["HTMLAttributes"]};const I={title:"Components/Space",component:k,parameters:{layout:"centered",docs:{description:{story:"在 ConfigProvider 中使用的示例，配置了大的间距"}}},argTypes:{direction:{description:"horizontal用于决定子组件是横向排列还是竖向排列"},split:{control:"object",description:"分隔组件的渲染内容",table:{type:{summary:"ReactNode"}}},wrap:{description:"是否可换行"},size:{description:"组件之间的间隔"}},tags:["autodocs"]},a={args:{direction:"horizontal",children:[e.jsx("div",{style:{width:"120px",height:"60px",background:"red"}}),e.jsx("div",{style:{width:"120px",height:"60px",background:"red"}}),e.jsx("div",{style:{width:"120px",height:"60px",background:"red"}})]}},s={args:{direction:"horizontal",children:[e.jsx("div",{style:{width:"120px",height:"60px",background:"red"}}),e.jsx("div",{style:{width:"120px",height:"60px",background:"red"}}),e.jsx("div",{style:{width:"120px",height:"60px",background:"red"}})],split:e.jsx("div",{style:{height:"100px",width:"1px",background:"blue"}})}},o={args:{direction:"horizontal",children:[e.jsx("div",{style:{width:"120px",height:"60px",background:"red"}}),e.jsx("div",{style:{width:"120px",height:"60px",background:"red"}}),e.jsx("div",{style:{width:"120px",height:"60px",background:"red"}}),e.jsx("div",{style:{width:"120px",height:"60px",background:"red"}})],split:e.jsx("div",{style:{height:"100px",width:"1px",background:"blue"}}),style:{width:"400px"},wrap:!0}},l={args:{direction:"horizontal",children:[e.jsx("div",{style:{width:"120px",height:"60px",background:"red"}}),e.jsx("div",{style:{width:"120px",height:"60px",background:"red"}}),e.jsx("div",{style:{width:"120px",height:"60px",background:"red"}}),e.jsx("div",{style:{width:"120px",height:"60px",background:"red"}})],split:e.jsx("div",{style:{height:"100px",width:"1px",background:"blue"}}),size:"small"}},p={args:{direction:"horizontal",children:[e.jsx("div",{style:{width:"120px",height:"60px",background:"red"}}),e.jsx("div",{style:{width:"120px",height:"60px",background:"red"}}),e.jsx("div",{style:{width:"120px",height:"60px",background:"red"}}),e.jsx("div",{style:{width:"120px",height:"60px",background:"red"}})],split:e.jsx("div",{style:{height:"100px",width:"1px",background:"blue"}})},decorators:[n=>e.jsx(w,{space:{size:30},children:e.jsx(n,{})})],parameters:{docs:{source:{code:`
         <ConfigProvider space={{ size: 30 }}>
            <Space
                direction="horizontal"
                split={
                    <div style={{ height: "100px", width: "1px", background: "blue" }}></div>
                }
            >
                <div style={{ width: "120px", height: "60px", background: "red" }} />
                <div style={{ width: "120px", height: "60px", background: "red" }} />
                <div style={{ width: "120px", height: "60px", background: "red" }} />
                <div style={{ width: "120px", height: "60px", background: "red" }} />
            </Space>
        </ConfigProvider>
        `}}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    direction: "horizontal",
    children: [<div style={{
      width: "120px",
      height: "60px",
      background: "red"
    }} />, <div style={{
      width: "120px",
      height: "60px",
      background: "red"
    }} />, <div style={{
      width: "120px",
      height: "60px",
      background: "red"
    }} />]
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    direction: "horizontal",
    children: [<div style={{
      width: "120px",
      height: "60px",
      background: "red"
    }} />, <div style={{
      width: "120px",
      height: "60px",
      background: "red"
    }} />, <div style={{
      width: "120px",
      height: "60px",
      background: "red"
    }} />],
    split: <div style={{
      height: "100px",
      width: "1px",
      background: "blue"
    }}></div>
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    direction: "horizontal",
    children: [<div style={{
      width: "120px",
      height: "60px",
      background: "red"
    }} />, <div style={{
      width: "120px",
      height: "60px",
      background: "red"
    }} />, <div style={{
      width: "120px",
      height: "60px",
      background: "red"
    }} />, <div style={{
      width: "120px",
      height: "60px",
      background: "red"
    }} />],
    split: <div style={{
      height: "100px",
      width: "1px",
      background: "blue"
    }}></div>,
    style: {
      width: "400px"
    },
    wrap: true
  }
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    direction: "horizontal",
    children: [<div style={{
      width: "120px",
      height: "60px",
      background: "red"
    }} />, <div style={{
      width: "120px",
      height: "60px",
      background: "red"
    }} />, <div style={{
      width: "120px",
      height: "60px",
      background: "red"
    }} />, <div style={{
      width: "120px",
      height: "60px",
      background: "red"
    }} />],
    split: <div style={{
      height: "100px",
      width: "1px",
      background: "blue"
    }}></div>,
    size: "small"
  }
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    direction: "horizontal",
    children: [<div style={{
      width: "120px",
      height: "60px",
      background: "red"
    }} />, <div style={{
      width: "120px",
      height: "60px",
      background: "red"
    }} />, <div style={{
      width: "120px",
      height: "60px",
      background: "red"
    }} />, <div style={{
      width: "120px",
      height: "60px",
      background: "red"
    }} />],
    split: <div style={{
      height: "100px",
      width: "1px",
      background: "blue"
    }}></div>
  },
  decorators: [Story => <ConfigProvider space={{
    size: 30
  }}>
        <Story />
      </ConfigProvider>],
  parameters: {
    docs: {
      source: {
        code: \`
         <ConfigProvider space={{ size: 30 }}>
            <Space
                direction="horizontal"
                split={
                    <div style={{ height: "100px", width: "1px", background: "blue" }}></div>
                }
            >
                <div style={{ width: "120px", height: "60px", background: "red" }} />
                <div style={{ width: "120px", height: "60px", background: "red" }} />
                <div style={{ width: "120px", height: "60px", background: "red" }} />
                <div style={{ width: "120px", height: "60px", background: "red" }} />
            </Space>
        </ConfigProvider>
        \`
      }
    }
  }
}`,...p.parameters?.docs?.source}}};const M=["Direction","Split","Wrap","Size","configProvider"];export{a as Direction,l as Size,s as Split,o as Wrap,M as __namedExportsOrder,p as configProvider,I as default};
