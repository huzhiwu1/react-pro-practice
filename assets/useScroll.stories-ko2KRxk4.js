import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{r as n}from"./iframe-j35EKpAQ.js";import"./preload-helper-PPVm8Dsz.js";function g(e){const[r,t]=n.useState(!1),i=n.useRef(null),d=n.useCallback(()=>{t(!1)},[]),s=n.useCallback(()=>{console.log("scroll"),t(!0),i.current&&clearTimeout(i.current),i.current=setTimeout(d,150)},[]);return n.useEffect(()=>e?.current?(e.current.addEventListener("scroll",s),()=>{e?.current&&e.current.removeEventListener("scroll",s)}):()=>{},[]),r}const h=e=>{const r=n.useRef(null),t=g(r),i=()=>{r.current?.scrollTo({top:0,behavior:e.scrollBehavior})},d=()=>{r.current&&r.current.scrollTo({top:r.current.scrollHeight,behavior:e.scrollBehavior})},s=()=>{r.current&&r.current.scrollTo({top:r.current.scrollHeight/2,behavior:e.scrollBehavior})};return o.jsxs("div",{style:{padding:24,border:"1px solid #ddd",borderRadius:8,maxWidth:600},children:[o.jsx("h3",{style:{margin:"0 0 16px 0"},children:"滚动检测演示"}),e.showIndicator!==!1&&o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:16,padding:12,background:t?"#fff2e8":"#f6ffed",border:`1px solid ${t?"#ffd591":"#b7eb8f"}`,borderRadius:4},children:[o.jsx("div",{style:{width:12,height:12,borderRadius:"50%",background:t?"#fa8c16":"#52c41a",animation:t?"pulse 1s infinite":"none"}}),o.jsx("span",{style:{fontWeight:"bold",color:t?"#fa8c16":"#52c41a"},children:t?"滚动中...":"静止状态"})]}),o.jsxs("div",{style:{display:"flex",gap:8,marginBottom:16,flexWrap:"wrap"},children:[o.jsx("button",{onClick:i,style:{padding:"6px 12px",background:"#1890ff",color:"white",border:"none",borderRadius:4,cursor:"pointer",fontSize:12},children:"↑ 滚动到顶部"}),o.jsx("button",{onClick:s,style:{padding:"6px 12px",background:"#722ed1",color:"white",border:"none",borderRadius:4,cursor:"pointer",fontSize:12},children:"↕ 滚动到中间"}),o.jsx("button",{onClick:d,style:{padding:"6px 12px",background:"#52c41a",color:"white",border:"none",borderRadius:4,cursor:"pointer",fontSize:12},children:"↓ 滚动到底部"})]}),o.jsxs("div",{ref:r,style:{height:e.height,width:e.width,overflow:"auto",border:"2px solid #d9d9d9",borderRadius:4,position:"relative",background:"#fafafa"},children:[o.jsx("div",{style:{height:e.contentHeight,padding:16,background:"linear-gradient(45deg, #f5f5f5 25%, transparent 25%), linear-gradient(-45deg, #f5f5f5 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #f5f5f5 75%), linear-gradient(-45deg, transparent 75%, #f5f5f5 75%)",backgroundSize:"20px 20px",backgroundPosition:"0 0, 0 10px, 10px -10px, -10px 0px"},children:Array.from({length:Math.ceil(e.contentHeight/100)},(u,c)=>o.jsxs("div",{style:{padding:"20px 0",borderBottom:c<Math.ceil(e.contentHeight/100)-1?"1px dashed #ccc":"none"},children:[o.jsxs("div",{style:{background:"#1890ff",color:"white",padding:"8px 12px",borderRadius:4,display:"inline-block",marginBottom:8},children:["内容区块 ",c+1]}),o.jsxs("div",{style:{fontSize:14,color:"#666"},children:["这是第 ",c+1," 个内容区块，用于演示滚动检测。 当前滚动状态:"," ",o.jsx("strong",{children:t?"滚动中":"静止"})]})]},c))}),o.jsx("div",{style:{position:"absolute",top:0,right:0,background:"rgba(0,0,0,0.7)",color:"white",padding:"4px 8px",fontSize:12,borderBottomLeftRadius:4},children:"滚动容器"})]}),o.jsxs("details",{style:{marginTop:16},children:[o.jsx("summary",{style:{cursor:"pointer",fontSize:14,color:"#666"},children:"调试信息"}),o.jsx("pre",{style:{background:"#f5f5f5",padding:12,borderRadius:4,fontSize:12,marginTop:8},children:JSON.stringify({isScrolling:t,containerHeight:e.height,contentHeight:e.contentHeight,scrollBehavior:e.scrollBehavior},null,2)})]}),o.jsx("style",{children:`
        @keyframes pulse {
          0% { opacity: 1; }
          50% { opacity: 0.5; }
          100% { opacity: 1; }
        }
      `})]})},p=`const ScrollDemo = (props: {
  height: number;
  width: number;
  contentHeight: number;
  showIndicator?: boolean;
  scrollBehavior?: "auto" | "smooth";
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isScrolling = useScroll(containerRef);

  const scrollToTop = () => {
    containerRef.current?.scrollTo({ top: 0, behavior: props.scrollBehavior });
  };

  const scrollToBottom = () => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        top: containerRef.current.scrollHeight,
        behavior: props.scrollBehavior,
      });
    }
  };

  const scrollToMiddle = () => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        top: containerRef.current.scrollHeight / 2,
        behavior: props.scrollBehavior,
      });
    }
  };

  return (
    <div
      style={{
        padding: 24,
        border: "1px solid #ddd",
        borderRadius: 8,
        maxWidth: 600,
      }}
    >
      <h3 style={{ margin: "0 0 16px 0" }}>滚动检测演示</h3>

      {/* 状态指示器 */}
      {props.showIndicator !== false && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            marginBottom: 16,
            padding: 12,
            background: isScrolling ? "#fff2e8" : "#f6ffed",
            border: \`1px solid \${isScrolling ? "#ffd591" : "#b7eb8f"}\`,
            borderRadius: 4,
          }}
        >
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: "50%",
              background: isScrolling ? "#fa8c16" : "#52c41a",
              animation: isScrolling ? "pulse 1s infinite" : "none",
            }}
          />
          <span
            style={{
              fontWeight: "bold",
              color: isScrolling ? "#fa8c16" : "#52c41a",
            }}
          >
            {isScrolling ? "滚动中..." : "静止状态"}
          </span>
        </div>
      )}

      {/* 控制按钮 */}
      <div
        style={{ display: "flex", gap: 8, marginBottom: 16, flexWrap: "wrap" }}
      >
        <button
          onClick={scrollToTop}
          style={{
            padding: "6px 12px",
            background: "#1890ff",
            color: "white",
            border: "none",
            borderRadius: 4,
            cursor: "pointer",
            fontSize: 12,
          }}
        >
          ↑ 滚动到顶部
        </button>

        <button
          onClick={scrollToMiddle}
          style={{
            padding: "6px 12px",
            background: "#722ed1",
            color: "white",
            border: "none",
            borderRadius: 4,
            cursor: "pointer",
            fontSize: 12,
          }}
        >
          ↕ 滚动到中间
        </button>

        <button
          onClick={scrollToBottom}
          style={{
            padding: "6px 12px",
            background: "#52c41a",
            color: "white",
            border: "none",
            borderRadius: 4,
            cursor: "pointer",
            fontSize: 12,
          }}
        >
          ↓ 滚动到底部
        </button>
      </div>

      {/* 滚动容器 */}
      <div
        ref={containerRef}
        style={{
          height: props.height,
          width: props.width,
          overflow: "auto",
          border: "2px solid #d9d9d9",
          borderRadius: 4,
          position: "relative",
          background: "#fafafa",
        }}
      >
        {/* 滚动内容 */}
        <div
          style={{
            height: props.contentHeight,
            padding: 16,
            background:
              "linear-gradient(45deg, #f5f5f5 25%, transparent 25%), linear-gradient(-45deg, #f5f5f5 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #f5f5f5 75%), linear-gradient(-45deg, transparent 75%, #f5f5f5 75%)",
            backgroundSize: "20px 20px",
            backgroundPosition: "0 0, 0 10px, 10px -10px, -10px 0px",
          }}
        >
          {/* 添加一些可见内容 */}
          {Array.from(
            { length: Math.ceil(props.contentHeight / 100) },
            (_, i) => (
              <div
                key={i}
                style={{
                  padding: "20px 0",
                  borderBottom:
                    i < Math.ceil(props.contentHeight / 100) - 1
                      ? "1px dashed #ccc"
                      : "none",
                }}
              >
                <div
                  style={{
                    background: "#1890ff",
                    color: "white",
                    padding: "8px 12px",
                    borderRadius: 4,
                    display: "inline-block",
                    marginBottom: 8,
                  }}
                >
                  内容区块 {i + 1}
                </div>
                <div style={{ fontSize: 14, color: "#666" }}>
                  这是第 {i + 1} 个内容区块，用于演示滚动检测。 当前滚动状态:{" "}
                  <strong>{isScrolling ? "滚动中" : "静止"}</strong>
                </div>
              </div>
            )
          )}
        </div>

        {/* 滚动位置指示器 */}
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            background: "rgba(0,0,0,0.7)",
            color: "white",
            padding: "4px 8px",
            fontSize: 12,
            borderBottomLeftRadius: 4,
          }}
        >
          滚动容器
        </div>
      </div>

      {/* 调试信息 */}
      <details style={{ marginTop: 16 }}>
        <summary style={{ cursor: "pointer", fontSize: 14, color: "#666" }}>
          调试信息
        </summary>
        <pre
          style={{
            background: "#f5f5f5",
            padding: 12,
            borderRadius: 4,
            fontSize: 12,
            marginTop: 8,
          }}
        >
          {JSON.stringify(
            {
              isScrolling,
              containerHeight: props.height,
              contentHeight: props.contentHeight,
              scrollBehavior: props.scrollBehavior,
            },
            null,
            2
          )}
        </pre>
      </details>

      <style>{\`
        @keyframes pulse {
          0% { opacity: 1; }
          50% { opacity: 0.5; }
          100% { opacity: 1; }
        }
      \`}</style>
    </div>
  );
};`,x={title:"Hooks/useScroll",component:h,parameters:{layout:"centered",docs:{description:{component:"滚动检测 Hook，用于检测元素是否正在滚动，支持防抖延迟检测。"}}},argTypes:{height:{control:{type:"number",min:100,max:800,step:50},description:"滚动容器高度"},width:{control:{type:"number",min:200,max:800,step:50},description:"滚动容器宽度"},contentHeight:{control:{type:"number",min:200,max:2e3,step:100},description:"内容区域高度"},showIndicator:{control:"boolean",description:"是否显示滚动状态指示器"},scrollBehavior:{control:{type:"select"},options:["auto","smooth"],description:"滚动行为"}},args:{height:300,width:400,contentHeight:1e3,showIndicator:!0,scrollBehavior:"auto"},tags:["autodocs"]},l={args:{height:300,width:400,contentHeight:800,scrollBehavior:"auto"},parameters:{docs:{description:{story:"基础用法：检测容器的滚动状态，150ms 防抖延迟"},source:{code:p}}}},a={args:{height:300,width:400,contentHeight:1200,scrollBehavior:"smooth"},parameters:{docs:{description:{story:"平滑滚动：使用 CSS 平滑滚动效果"},source:{code:p}}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    height: 300,
    width: 400,
    contentHeight: 800,
    scrollBehavior: "auto"
  },
  parameters: {
    docs: {
      description: {
        story: "基础用法：检测容器的滚动状态，150ms 防抖延迟"
      },
      source: {
        code: sourceCode
      }
    }
  }
}`,...l.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    height: 300,
    width: 400,
    contentHeight: 1200,
    scrollBehavior: "smooth"
  },
  parameters: {
    docs: {
      description: {
        story: "平滑滚动：使用 CSS 平滑滚动效果"
      },
      source: {
        code: sourceCode
      }
    }
  }
}`,...a.parameters?.docs?.source}}};const y=["Basic","SmoothScrolling"];export{l as Basic,a as SmoothScrolling,y as __namedExportsOrder,x as default};
