import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{r as p}from"./iframe-j35EKpAQ.js";import{I as m}from"./index-BJQjH1DN.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DqVAgsJl.js";function u(e){const{iconProps:t,content:o,viewbox:a="0 0 1024 1024"}=e;return p.forwardRef((d,i)=>s.jsx(m,{ref:i,viewBox:a,...t,...d,children:o}))}const f=u({content:s.jsx(s.Fragment,{children:s.jsx("path",{d:"M853.333333 480H544V170.666667c0-17.066667-14.933333-32-32-32s-32 14.933333-32 32v309.333333H170.666667c-17.066667 0-32 14.933333-32 32s14.933333 32 32 32h309.333333V853.333333c0 17.066667 14.933333 32 32 32s32-14.933333 32-32V544H853.333333c17.066667 0 32-14.933333 32-32s-14.933333-32-32-32z"})})}),H={title:"Components/Icon/CreateIcon",component:f,parameters:{layout:"centered"},argTypes:{size:{control:"object",description:"图标尺寸，可以是字符串或字符串数组",table:{type:{summary:"string | string[]",detail:"支持单个尺寸字符串如 '24px'，或响应式尺寸数组如 ['16px', '24px'],[宽度，高度]"}}},spin:{control:"boolean",description:"图标是否可以旋转"},ref:{description:"转发ref到外部",defaultValue:e=>{e?.addEventListener("click",()=>{alert("转发ref")})}}},tags:["autodocs"]},n={args:{size:"10em"},parameters:{docs:{source:{code:`
      const IconAdd = createIcon({
        content: (
          <>
          <path d="M853.333333 480H544V170.666667c0-17.066667-14.933333-32-32-32s-32 14.933333-32 32v309.333333H170.666667c-17.066667 0-32 14.933333-32 32s14.933333 32 32 32h309.333333V853.333333c0 17.066667 14.933333 32 32 32s32-14.933333 32-32V544H853.333333c17.066667 0 32-14.933333 32-32s-14.933333-32-32-32z"></path>
          </>
        ),
      });

      return <IconAdd size="10em"/>
        `}}}},r={args:{spin:!0,size:"10em"},parameters:{docs:{source:{code:`
      const IconAdd = createIcon({
        content: (
          <>
          <path d="M853.333333 480H544V170.666667c0-17.066667-14.933333-32-32-32s-32 14.933333-32 32v309.333333H170.666667c-17.066667 0-32 14.933333-32 32s14.933333 32 32 32h309.333333V853.333333c0 17.066667 14.933333 32 32 32s32-14.933333 32-32V544H853.333333c17.066667 0 32-14.933333 32-32s-14.933333-32-32-32z"></path>
          </>
        ),
      });

      return <IconAdd size="10em" spin={true}/>
        `}}}},c={args:{size:"10em",ref:e=>{e?.addEventListener("click",()=>{alert("转发ref")})}},parameters:{docs:{source:{code:`
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
        `}}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    size: "10em"
  },
  parameters: {
    docs: {
      source: {
        code: \`
      const IconAdd = createIcon({
        content: (
          <>
          <path d="M853.333333 480H544V170.666667c0-17.066667-14.933333-32-32-32s-32 14.933333-32 32v309.333333H170.666667c-17.066667 0-32 14.933333-32 32s14.933333 32 32 32h309.333333V853.333333c0 17.066667 14.933333 32 32 32s32-14.933333 32-32V544H853.333333c17.066667 0 32-14.933333 32-32s-14.933333-32-32-32z"></path>
          </>
        ),
      });

      return <IconAdd size="10em"/>
        \`
      }
    }
  }
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    spin: true,
    size: "10em"
  },
  parameters: {
    docs: {
      source: {
        code: \`
      const IconAdd = createIcon({
        content: (
          <>
          <path d="M853.333333 480H544V170.666667c0-17.066667-14.933333-32-32-32s-32 14.933333-32 32v309.333333H170.666667c-17.066667 0-32 14.933333-32 32s14.933333 32 32 32h309.333333V853.333333c0 17.066667 14.933333 32 32 32s32-14.933333 32-32V544H853.333333c17.066667 0 32-14.933333 32-32s-14.933333-32-32-32z"></path>
          </>
        ),
      });

      return <IconAdd size="10em" spin={true}/>
        \`
      }
    }
  }
}`,...r.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    size: "10em",
    ref: ref => {
      ref?.addEventListener("click", () => {
        alert("转发ref");
      });
    }
  },
  parameters: {
    docs: {
      source: {
        code: \`
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
        \`
      }
    }
  }
}`,...c.parameters?.docs?.source}}};const g=["Size","Spin","Ref"];export{c as Ref,n as Size,r as Spin,g as __namedExportsOrder,H as default};
