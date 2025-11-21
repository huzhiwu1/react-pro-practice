import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{r as k}from"./iframe-j35EKpAQ.js";import"./preload-helper-PPVm8Dsz.js";/*! js-cookie v3.0.5 | MIT */function p(e){for(var a=1;a<arguments.length;a++){var i=arguments[a];for(var t in i)e[t]=i[t]}return e}var v={read:function(e){return e[0]==='"'&&(e=e.slice(1,-1)),e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}};function h(e,a){function i(r,s,o){if(!(typeof document>"u")){o=p({},a,o),typeof o.expires=="number"&&(o.expires=new Date(Date.now()+o.expires*864e5)),o.expires&&(o.expires=o.expires.toUTCString()),r=encodeURIComponent(r).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var c="";for(var d in o)o[d]&&(c+="; "+d,o[d]!==!0&&(c+="="+o[d].split(";")[0]));return document.cookie=r+"="+e.write(s,r)+c}}function t(r){if(!(typeof document>"u"||arguments.length&&!r)){for(var s=document.cookie?document.cookie.split("; "):[],o={},c=0;c<s.length;c++){var d=s[c].split("="),y=d.slice(1).join("=");try{var x=decodeURIComponent(d[0]);if(o[x]=e.read(y,x),r===x)break}catch{}}return r?o[r]:o}}return Object.create({set:i,get:t,remove:function(r,s){i(r,"",p({},s,{expires:-1}))},withAttributes:function(r){return h(this.converter,p({},this.attributes,r))},withConverter:function(r){return h(p({},this.converter,r),this.attributes)}},{attributes:{value:Object.freeze(a)},converter:{value:Object.freeze(e)}})}var C=h(v,{path:"/"});function b(e){const[a,i]=k.useState(()=>C.get(e)||null),t=k.useCallback((s,o)=>{C.set(e,s,o),i(s)},[]),r=k.useCallback(()=>{C.remove(e),i(null)},[]);return[a,t,r]}const j=({cookieName:e,initialValue:a,options:i})=>{const[t,r,s]=b(e),[o,c]=k.useState(a||"");return n.jsxs("div",{style:{padding:20,border:"1px solid #ddd",borderRadius:8,maxWidth:400},children:[n.jsxs("h3",{children:["Cookie: ",e]}),n.jsxs("div",{style:{marginBottom:16},children:[n.jsx("strong",{children:"当前值:"}),n.jsx("span",{style:{marginLeft:8,padding:"4px 8px",background:"#f5f5f5",borderRadius:4,fontFamily:"monospace"},children:t||"未设置"})]}),n.jsxs("div",{style:{display:"flex",gap:8,marginBottom:16},children:[n.jsx("input",{type:"text",value:o,onChange:d=>c(d.target.value),placeholder:"输入 cookie 值",style:{padding:"8px 12px",border:"1px solid #ccc",borderRadius:4,flex:1}}),n.jsx("button",{onClick:()=>r(o,i),style:{padding:"8px 16px",background:"#1890ff",color:"white",border:"none",borderRadius:4,cursor:"pointer"},children:"设置 Cookie"})]}),n.jsxs("div",{style:{display:"flex",gap:8},children:[n.jsx("button",{onClick:s,style:{padding:"8px 16px",background:"#ff4d4f",color:"white",border:"none",borderRadius:4,cursor:"pointer"},children:"删除 Cookie"}),n.jsx("button",{onClick:()=>{c(""),r("",i)},style:{padding:"8px 16px",background:"#faad14",color:"white",border:"none",borderRadius:4,cursor:"pointer"},children:"清空 Cookie"})]}),t&&n.jsxs("div",{style:{marginTop:16,padding:12,background:"#f6ffed",border:"1px solid #b7eb8f",borderRadius:4},children:[n.jsx("div",{style:{fontSize:12,color:"#52c41a",marginBottom:4},children:"Cookie 信息"}),n.jsxs("div",{style:{fontFamily:"monospace",fontSize:12},children:["名称: ",e,n.jsx("br",{}),"值: ",t,n.jsx("br",{}),"长度: ",t.length," 字符"]})]})]})},B={title:"Hooks/useCookie",component:j,parameters:{layout:"centered",docs:{description:{component:"用于管理浏览器 Cookie 的自定义 Hook，支持设置、更新和删除操作。"}}},argTypes:{cookieName:{control:"text",description:"Cookie 名称",table:{type:{summary:"string"},defaultValue:{summary:"required"}}},initialValue:{control:"text",description:"初始值（如果 Cookie 已存在则忽略）",table:{type:{summary:"string"}}},options:{control:"object",description:"Cookie 配置选项",table:{type:{summary:"Cookies.CookieAttributes",detail:"包含 expires, path, domain, secure 等属性"}}}},tags:["autodocs"]},l={args:{cookieName:"demo-cookie",initialValue:"initial-value"}},u={args:{cookieName:"user-preference",initialValue:"light-mode"},parameters:{docs:{description:{story:"基础用法，用于存储用户偏好设置"}}}},m={args:{cookieName:"session-token",initialValue:"abc123xyz",options:{expires:7}},parameters:{docs:{description:{story:"设置过期时间的 Cookie，适合用于会话管理"}}}},g={args:{cookieName:"auth-token",initialValue:"secure-jwt-token",options:{secure:!0,sameSite:"strict"}},parameters:{docs:{description:{story:"安全 Cookie，仅通过 HTTPS 传输"}}}},f={args:{cookieName:"page-specific",initialValue:"page-data",options:{path:"/admin"}},parameters:{docs:{description:{story:"限制在特定路径下可访问的 Cookie"}}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    cookieName: "demo-cookie",
    initialValue: "initial-value"
  }
}`,...l.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    cookieName: "user-preference",
    initialValue: "light-mode"
  },
  parameters: {
    docs: {
      description: {
        story: "基础用法，用于存储用户偏好设置"
      }
    }
  }
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    cookieName: "session-token",
    initialValue: "abc123xyz",
    options: {
      expires: 7 // 7天后过期
    }
  },
  parameters: {
    docs: {
      description: {
        story: "设置过期时间的 Cookie，适合用于会话管理"
      }
    }
  }
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    cookieName: "auth-token",
    initialValue: "secure-jwt-token",
    options: {
      secure: true,
      sameSite: "strict"
    }
  },
  parameters: {
    docs: {
      description: {
        story: "安全 Cookie，仅通过 HTTPS 传输"
      }
    }
  }
}`,...g.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    cookieName: "page-specific",
    initialValue: "page-data",
    options: {
      path: "/admin"
    }
  },
  parameters: {
    docs: {
      description: {
        story: "限制在特定路径下可访问的 Cookie"
      }
    }
  }
}`,...f.parameters?.docs?.source}}};const U=["Default","BasicUsage","WithExpiration","SecureCookie","PathRestricted"];export{u as BasicUsage,l as Default,f as PathRestricted,g as SecureCookie,m as WithExpiration,U as __namedExportsOrder,B as default};
