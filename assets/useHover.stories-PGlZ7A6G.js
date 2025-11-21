import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{r as c,R as v}from"./iframe-j35EKpAQ.js";import"./preload-helper-PPVm8Dsz.js";function f(e){const[o,n]=c.useState(!1),l=s=>i=>{n(!0),s?.(i)},p=s=>i=>{n(!1),s?.(i)};return typeof e=="function"&&(e=e(o)),[v.cloneElement(e,{onMouseEnter:l(e?.props?.onMouseEnter),onMouseLeave:p(e?.props?.onMouseLeave)}),o]}const a=e=>{const[o,n]=f(e.element);return r.jsxs("div",{style:{padding:24,border:"1px solid #ddd",borderRadius:8,maxWidth:500,textAlign:"center"},children:[r.jsx("h3",{style:{margin:"0 0 16px 0"},children:"Hover 状态演示"}),e.showState!==!1&&r.jsxs("div",{style:{padding:12,background:n?"#f6ffed":"#f0f0f0",border:n?"1px solid #b7eb8f":"1px solid #d9d9d9",borderRadius:4,marginBottom:16,fontSize:14,color:n?"#52c41a":"#666",fontWeight:"bold"},children:["Hover 状态: ",n?"✅ 悬停中":"❌ 未悬停"]}),r.jsx("div",{style:{display:"flex",justifyContent:"center"},children:o})]})},x={title:"Hooks/useHover",component:a,parameters:{layout:"centered",docs:{description:{component:"用于管理元素悬停状态的 Hook，支持函数子组件和普通元素两种用法。"}}},argTypes:{element:{control:{type:null},description:"要添加悬停效果的元素或函数"},showState:{control:"boolean",description:"是否显示悬停状态指示器"}},tags:["autodocs"]},t={args:{element:r.jsx("button",{style:{padding:"12px 24px",background:"#1890ff",color:"white",border:"none",borderRadius:4,fontSize:16,cursor:"pointer",transition:"all 0.3s"},children:"悬停我"}),showState:!0},parameters:{docs:{description:{story:"基础用法：为普通元素添加悬停状态检测"},source:{code:`const HoverDemo = (props: { element: any; showState?: boolean }) => {
  const [hoverElement, isHovered] = useHover(props.element);

  return (
    <div
      style={{
        padding: 24,
        border: "1px solid #ddd",
        borderRadius: 8,
        maxWidth: 500,
        textAlign: "center",
      }}
    >
      <h3 style={{ margin: "0 0 16px 0" }}>Hover 状态演示</h3>

      {/* 显示 hover 状态 */}
      {props.showState !== false && (
        <div
          style={{
            padding: 12,
            background: isHovered ? "#f6ffed" : "#f0f0f0",
            border: isHovered ? "1px solid #b7eb8f" : "1px solid #d9d9d9",
            borderRadius: 4,
            marginBottom: 16,
            fontSize: 14,
            color: isHovered ? "#52c41a" : "#666",
            fontWeight: "bold",
          }}
        >
          Hover 状态: {isHovered ? "✅ 悬停中" : "❌ 未悬停"}
        </div>
      )}

      {/* 悬停元素 */}
      <div style={{ display: "flex", justifyContent: "center" }}>
        {hoverElement}
      </div>
    </div>
  );
};`}}}},d={args:{showState:!0},render:e=>r.jsx(a,{...e,element:o=>r.jsx("div",{style:{padding:"20px",background:o?"#1890ff":"#f0f0f0",color:o?"white":"#333",border:`2px solid ${o?"#096dd9":"#d9d9d9"}`,borderRadius:8,cursor:"pointer",transition:"all 0.3s",transform:o?"scale(1.05)":"scale(1)",boxShadow:o?"0 4px 12px rgba(24, 144, 255, 0.3)":"none",minWidth:"120px"},children:o?"👆 鼠标悬停中":"🖱️ 悬停我"})}),parameters:{docs:{description:{story:"函数子组件用法：接收 hover 状态作为参数，动态渲染内容"},source:{code:`const HoverDemo = (props: { element: any; showState?: boolean }) => {
  const [hoverElement, isHovered] = useHover(props.element);

  return (
    <div
      style={{
        padding: 24,
        border: "1px solid #ddd",
        borderRadius: 8,
        maxWidth: 500,
        textAlign: "center",
      }}
    >
      <h3 style={{ margin: "0 0 16px 0" }}>Hover 状态演示</h3>

      {/* 显示 hover 状态 */}
      {props.showState !== false && (
        <div
          style={{
            padding: 12,
            background: isHovered ? "#f6ffed" : "#f0f0f0",
            border: isHovered ? "1px solid #b7eb8f" : "1px solid #d9d9d9",
            borderRadius: 4,
            marginBottom: 16,
            fontSize: 14,
            color: isHovered ? "#52c41a" : "#666",
            fontWeight: "bold",
          }}
        >
          Hover 状态: {isHovered ? "✅ 悬停中" : "❌ 未悬停"}
        </div>
      )}

      {/* 悬停元素 */}
      <div style={{ display: "flex", justifyContent: "center" }}>
        {hoverElement}
      </div>
    </div>
  );
};`}}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    element: <button style={{
      padding: "12px 24px",
      background: "#1890ff",
      color: "white",
      border: "none",
      borderRadius: 4,
      fontSize: 16,
      cursor: "pointer",
      transition: "all 0.3s"
    }}>
        悬停我
      </button>,
    showState: true
  },
  parameters: {
    docs: {
      description: {
        story: "基础用法：为普通元素添加悬停状态检测"
      },
      source: {
        code: \`const HoverDemo = (props: { element: any; showState?: boolean }) => {
  const [hoverElement, isHovered] = useHover(props.element);

  return (
    <div
      style={{
        padding: 24,
        border: "1px solid #ddd",
        borderRadius: 8,
        maxWidth: 500,
        textAlign: "center",
      }}
    >
      <h3 style={{ margin: "0 0 16px 0" }}>Hover 状态演示</h3>

      {/* 显示 hover 状态 */}
      {props.showState !== false && (
        <div
          style={{
            padding: 12,
            background: isHovered ? "#f6ffed" : "#f0f0f0",
            border: isHovered ? "1px solid #b7eb8f" : "1px solid #d9d9d9",
            borderRadius: 4,
            marginBottom: 16,
            fontSize: 14,
            color: isHovered ? "#52c41a" : "#666",
            fontWeight: "bold",
          }}
        >
          Hover 状态: {isHovered ? "✅ 悬停中" : "❌ 未悬停"}
        </div>
      )}

      {/* 悬停元素 */}
      <div style={{ display: "flex", justifyContent: "center" }}>
        {hoverElement}
      </div>
    </div>
  );
};\`
      }
    }
  }
}`,...t.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    showState: true
  },
  render: args => <HoverDemo {...args} element={(isHovered: boolean) => <div style={{
    padding: "20px",
    background: isHovered ? "#1890ff" : "#f0f0f0",
    color: isHovered ? "white" : "#333",
    border: \`2px solid \${isHovered ? "#096dd9" : "#d9d9d9"}\`,
    borderRadius: 8,
    cursor: "pointer",
    transition: "all 0.3s",
    transform: isHovered ? "scale(1.05)" : "scale(1)",
    boxShadow: isHovered ? "0 4px 12px rgba(24, 144, 255, 0.3)" : "none",
    minWidth: "120px"
  }}>
          {isHovered ? "👆 鼠标悬停中" : "🖱️ 悬停我"}
        </div>} />,
  parameters: {
    docs: {
      description: {
        story: "函数子组件用法：接收 hover 状态作为参数，动态渲染内容"
      },
      source: {
        code: \`const HoverDemo = (props: { element: any; showState?: boolean }) => {
  const [hoverElement, isHovered] = useHover(props.element);

  return (
    <div
      style={{
        padding: 24,
        border: "1px solid #ddd",
        borderRadius: 8,
        maxWidth: 500,
        textAlign: "center",
      }}
    >
      <h3 style={{ margin: "0 0 16px 0" }}>Hover 状态演示</h3>

      {/* 显示 hover 状态 */}
      {props.showState !== false && (
        <div
          style={{
            padding: 12,
            background: isHovered ? "#f6ffed" : "#f0f0f0",
            border: isHovered ? "1px solid #b7eb8f" : "1px solid #d9d9d9",
            borderRadius: 4,
            marginBottom: 16,
            fontSize: 14,
            color: isHovered ? "#52c41a" : "#666",
            fontWeight: "bold",
          }}
        >
          Hover 状态: {isHovered ? "✅ 悬停中" : "❌ 未悬停"}
        </div>
      )}

      {/* 悬停元素 */}
      <div style={{ display: "flex", justifyContent: "center" }}>
        {hoverElement}
      </div>
    </div>
  );
};\`
      }
    }
  }
}`,...d.parameters?.docs?.source}}};const g=["BasicButton","FunctionAsChild"];export{t as BasicButton,d as FunctionAsChild,g as __namedExportsOrder,x as default};
