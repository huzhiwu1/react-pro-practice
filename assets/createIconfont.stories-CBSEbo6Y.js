import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{r as d}from"./iframe-j35EKpAQ.js";import{I as i}from"./index-BJQjH1DN.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DqVAgsJl.js";const c=new Set;function m(e){if(e.length>0&&!c.has(e)){const o=document.createElement("script");o.src=e,o.setAttribute("data-namespace",e),document.body.appendChild(o),c.add(e)}return d.forwardRef((o,s)=>{const{type:n,...a}=o;return r.jsx(i,{ref:s,...a,children:n?r.jsx("use",{xlinkHref:`#${n}`}):null})})}const p=m("//at.alicdn.com/t/c/font_5057985_4kho4141eru.js"),y={title:"Components/Icon/createFromIconfont",component:p,parameters:{layout:"centered"},argTypes:{size:{control:"object",description:"图标尺寸，可以是字符串或字符串数组",table:{type:{summary:"string | string[]",detail:"支持单个尺寸字符串如 '24px'，或响应式尺寸数组如 ['16px', '24px'],[宽度，高度]"}}},spin:{control:"boolean",description:"图标是否可以旋转"},ref:{description:"转发ref到外部",defaultValue:e=>{e?.addEventListener("click",()=>{alert("转发ref")})}},type:{description:"icon的类型",defaultValue:"icon-exe"}},tags:["autodocs"]},t={args:{type:"icon-folder",size:["10em","10em"]},parameters:{docs:{source:{code:`
        const IconFont = createFromIconfont("//at.alicdn.com/t/c/font_5057985_4kho4141eru.js");
        return <IconFont type="icon-folder" size={["10em", "10em"]}/>
        `}}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    type: "icon-folder",
    size: ["10em", "10em"]
  },
  parameters: {
    docs: {
      source: {
        code: \`
        const IconFont = createFromIconfont("//at.alicdn.com/t/c/font_5057985_4kho4141eru.js");
        return <IconFont type="icon-folder" size={["10em", "10em"]}/>
        \`
      }
    }
  }
}`,...t.parameters?.docs?.source}}};const F=["IconFolder"];export{t as IconFolder,F as __namedExportsOrder,y as default};
