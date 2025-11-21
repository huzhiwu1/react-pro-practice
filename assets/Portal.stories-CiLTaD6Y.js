import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as i}from"./iframe-j35EKpAQ.js";import{r as l}from"./index-BuEuhmWt.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DnnyNCso.js";function p(t){return typeof t=="string"?document.querySelector(t):typeof t=="object"&&t instanceof window.HTMLElement?t:document.body}const d=i.forwardRef((t,s)=>{const{children:a,attach:c=document.body}=t,r=i.useMemo(()=>{const n=document.createElement("div");return n.className="portal_wrap",n},[]);return i.useEffect(()=>{const n=p(c);return n?.appendChild?.(r),()=>{n?.removeChild?.(r)}},[r,c]),i.useImperativeHandle(s,()=>r,[r]),l.createPortal(a,r)});d.__docgenInfo={description:"",methods:[],displayName:"Portal",props:{attach:{required:!0,tsType:{name:"union",raw:"string | HTMLElement",elements:[{name:"string"},{name:"HTMLElement"}]},description:""}}};const f={title:"Components/Portal",component:d,parameters:{layout:"centered"},argTypes:{attach:{control:"object",description:"挂载的位置",table:{type:{summary:"string | HTMLElement;"}}}},tags:["autodocs"]},h=t=>{const{children:s,attach:a}=t;return e.jsxs(e.Fragment,{children:[e.jsx(d,{attach:a,children:s}),e.jsxs("div",{style:{width:"100vw",height:"100vh",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},children:[e.jsx("div",{style:{width:"100px",height:"100px"},children:"占位"}),e.jsx("div",{style:{width:"100px",height:"100px"},children:"占位"}),e.jsx("div",{style:{width:"100px",height:"100px"},children:"占位"}),e.jsx("div",{id:"attach"}),e.jsx("div",{style:{width:"100px",height:"100px"},children:"占位"}),e.jsx("div",{style:{width:"100px",height:"100px"},children:"占位"})]})]})},o={args:{children:e.jsx("div",{style:{margin:"50px",background:"red",width:"200px",height:"200px",textAlign:"center",lineHeight:"200px"},children:"我是portal渲染的内容"}),attach:"div#attach"},render:h};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    children: <div style={{
      margin: "50px",
      background: "red",
      width: "200px",
      height: "200px",
      textAlign: "center",
      lineHeight: "200px"
    }}>
        我是portal渲染的内容
      </div>,
    attach: "div#attach"
  },
  render: renderPortal
}`,...o.parameters?.docs?.source}}};const v=["Attach"];export{o as Attach,v as __namedExportsOrder,f as default};
