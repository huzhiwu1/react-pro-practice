import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as a}from"./iframe-j35EKpAQ.js";import{d as y}from"./dayjs.min-CV57c2Uc.js";import"./preload-helper-PPVm8Dsz.js";function v(t){return{days:Math.floor(t/864e5),hours:Math.floor(t/36e5)%24,minutes:Math.floor(t/6e4)%60,seconds:Math.floor(t/1e3)%60,milliseconds:Math.floor(t)%1e3}}function m(t){if(!t)return 0;const s=y(t).valueOf()-Date.now();return s<0?0:s}function S(t){const{targetDate:s,leftTime:n,interval:i=1e3,onEnd:r}=t,x=a.useMemo(()=>{if(typeof n<"u"&&n>0)return n+Date.now()},[n]),o="leftTime"in t?x:s,[c,f]=a.useState(()=>m(o)),g=a.useRef(r);g.current=r,a.useEffect(()=>{if(!o){f(0);return}f(m(o));const p=setInterval(()=>{const u=m(o);f(u),u===0&&(g.current?.(),clearInterval(p))},i);return()=>{clearInterval(p)}},[o,i]);const h=a.useMemo(()=>v(c),[c]);return[c,h]}const j=t=>{const[s,n]=S(t),i=s>0,r=s===0;return e.jsxs("div",{style:{padding:24,border:"1px solid #ddd",borderRadius:8,maxWidth:500,textAlign:"center"},children:[e.jsx("h3",{style:{margin:"0 0 16px 0"},children:"倒计时器"}),e.jsx("div",{style:{fontSize:32,fontWeight:"bold",fontFamily:"monospace",background:r?"#f6ffed":"#f0f0f0",border:r?"1px solid #b7eb8f":"1px solid #d9d9d9",padding:16,borderRadius:4,marginBottom:16},children:r?"时间到！":e.jsxs(e.Fragment,{children:[n.days>0&&e.jsxs("span",{children:[n.days,"天 "]}),String(n.hours).padStart(2,"0"),":",String(n.minutes).padStart(2,"0"),":",String(n.seconds).padStart(2,"0"),t.interval<1e3&&e.jsxs("span",{children:[".",String(n.milliseconds).padStart(3,"0").slice(0,2)]})]})}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(5, 1fr)",gap:8,marginBottom:16},children:[n.days>0&&e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx("div",{style:{fontSize:24,fontWeight:"bold"},children:n.days}),e.jsx("div",{style:{fontSize:12,color:"#666"},children:"天"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx("div",{style:{fontSize:24,fontWeight:"bold"},children:String(n.hours).padStart(2,"0")}),e.jsx("div",{style:{fontSize:12,color:"#666"},children:"小时"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx("div",{style:{fontSize:24,fontWeight:"bold"},children:String(n.minutes).padStart(2,"0")}),e.jsx("div",{style:{fontSize:12,color:"#666"},children:"分钟"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx("div",{style:{fontSize:24,fontWeight:"bold"},children:String(n.seconds).padStart(2,"0")}),e.jsx("div",{style:{fontSize:12,color:"#666"},children:"秒"})]}),t.interval<1e3&&e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx("div",{style:{fontSize:24,fontWeight:"bold"},children:String(n.milliseconds).padStart(3,"0").slice(0,2)}),e.jsx("div",{style:{fontSize:12,color:"#666"},children:"毫秒"})]})]}),e.jsx("div",{style:{padding:12,background:r?"#f6ffed":i?"#e6f7ff":"#fff2e8",border:r?"1px solid #b7eb8f":i?"1px solid #91d5ff":"1px solid #ffd591",borderRadius:4,fontSize:14,color:r?"#52c41a":i?"#1890ff":"#fa8c16"},children:r?"倒计时结束":i?"倒计时进行中...":"未开始"}),e.jsxs("details",{style:{marginTop:16,fontSize:12,color:"#666"},children:[e.jsx("summary",{children:"调试信息"}),e.jsx("pre",{style:{textAlign:"left",background:"#f5f5f5",padding:8,borderRadius:4},children:JSON.stringify({timeLeft:s,formattedRes:n,targetDate:t.targetDate,leftTime:t.leftTime,interval:t.interval},null,2)})]})]})},R={title:"Hooks/useCountDown",component:j,parameters:{layout:"centered",docs:{description:{component:"倒计时 Hook，支持目标日期和剩余时间两种模式，提供格式化的时间数据。"}}},argTypes:{targetDate:{control:"date",description:"目标日期（Date 对象、时间戳或日期字符串）"},leftTime:{control:"number",description:"剩余时间（毫秒），从当前时间开始倒计时"},interval:{control:{type:"number",min:10,max:5e3,step:10},description:"更新间隔（毫秒）"},onEnd:{action:"onEnd",description:"倒计时结束时的回调函数"}},tags:["autodocs"]},d={args:{targetDate:new Date(Date.now()+120*1e3),interval:1e3},parameters:{docs:{description:{story:"使用目标日期进行倒计时，到达指定时间点结束"}}}},l={args:{leftTime:300*1e3,interval:1e3},parameters:{docs:{description:{story:"使用剩余时间进行倒计时，从当前时间开始计算"}}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    targetDate: new Date(Date.now() + 2 * 60 * 1000),
    // 2分钟后
    interval: 1000
  },
  parameters: {
    docs: {
      description: {
        story: "使用目标日期进行倒计时，到达指定时间点结束"
      }
    }
  }
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    leftTime: 5 * 60 * 1000,
    // 5分钟
    interval: 1000
  },
  parameters: {
    docs: {
      description: {
        story: "使用剩余时间进行倒计时，从当前时间开始计算"
      }
    }
  }
}`,...l.parameters?.docs?.source}}};const w=["TargetDate","LeftTime"];export{l as LeftTime,d as TargetDate,w as __namedExportsOrder,R as default};
