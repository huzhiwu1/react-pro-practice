import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as s}from"./iframe-j35EKpAQ.js";import"./preload-helper-PPVm8Dsz.js";function j(n,r={}){const{defaultValue:o,defaultValuePropName:l="defaultValue",valuePropName:u="value",trigger:x="onChange"}=r,c=Object.prototype.hasOwnProperty.call(n,u),t=n[u],[h,p]=s.useState(()=>c?t:n[l]!==void 0?n[l]:o),g=t!==void 0?t:h,C=a=>typeof a=="function",V=s.useCallback(a=>{const f=C(a)?a(g):a;c||p(f),n[x]?.(f)},[t]),m=s.useRef(!0);return s.useEffect(()=>{t===void 0&&m.current===!1&&p(t),m.current=!1},[t]),[g,V]}const v=n=>{const[r,o]=j(n);return e.jsxs("div",{style:{padding:20,border:"1px solid #ddd",borderRadius:8,maxWidth:400},children:[e.jsx("h3",{children:"受控/非受控输入框"}),e.jsx("input",{value:r||"",onChange:l=>o(l.target.value),placeholder:"输入内容...",style:{width:"100%",padding:"8px 12px",border:"1px solid #ccc",borderRadius:4,marginBottom:12}}),e.jsxs("div",{style:{fontSize:14,color:"#666"},children:[e.jsxs("div",{children:["当前值: ",e.jsx("strong",{children:r||"空"})]}),e.jsxs("div",{children:["模式: ",e.jsx("strong",{children:n.value!==void 0?"受控":"非受控"})]}),n.defaultValue!==void 0&&e.jsxs("div",{children:["默认值: ",e.jsx("strong",{children:n.defaultValue})]})]})]})},R={title:"Hooks/useControllableValue",component:v,parameters:{layout:"centered",docs:{description:{component:"支持受控和非受控模式的值管理 Hook，可以无缝切换两种模式。"}}},argTypes:{value:{control:"text",description:"受控值（设置后组件变为受控模式）"},defaultValue:{control:"text",description:"非受控模式下的默认值"},onChange:{action:"onChange",description:"值变化时的回调函数"}},tags:["autodocs"]},d={args:{defaultValue:"初始值"},parameters:{docs:{description:{story:"非受控模式：使用内部状态管理值，通过 defaultValue 设置初始值"}}}},i={render:n=>{const[r,o]=s.useState("受控值");return e.jsxs("div",{children:[e.jsx(v,{...n,value:r,onChange:o}),e.jsxs("div",{style:{marginTop:16,padding:12,background:"#f0f0f0",borderRadius:4},children:[e.jsx("p",{style:{margin:0,fontSize:14},children:"外部控制:"}),e.jsx("button",{onClick:()=>o("新值 "+Date.now()),style:{marginTop:8,padding:"4px 8px"},children:"改变值"})]})]})},parameters:{docs:{description:{story:"受控模式：值由外部状态控制，通过 value 和 onChange 属性管理"}}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: "初始值"
  },
  parameters: {
    docs: {
      description: {
        story: "非受控模式：使用内部状态管理值，通过 defaultValue 设置初始值"
      }
    }
  }
}`,...d.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => {
    // 在 render 函数中创建状态来模拟受控组件
    const [value, setValue] = useState("受控值");
    return <div>
        <ControllableInputDemo {...args} value={value} onChange={setValue} />
        <div style={{
        marginTop: 16,
        padding: 12,
        background: "#f0f0f0",
        borderRadius: 4
      }}>
          <p style={{
          margin: 0,
          fontSize: 14
        }}>外部控制:</p>
          <button onClick={() => setValue("新值 " + Date.now())} style={{
          marginTop: 8,
          padding: "4px 8px"
        }}>
            改变值
          </button>
        </div>
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: "受控模式：值由外部状态控制，通过 value 和 onChange 属性管理"
      }
    }
  }
}`,...i.parameters?.docs?.source}}};const k=["Uncontrolled","Controlled"];export{i as Controlled,d as Uncontrolled,k as __namedExportsOrder,R as default};
