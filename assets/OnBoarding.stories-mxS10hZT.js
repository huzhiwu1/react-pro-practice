import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{r as s,R as F}from"./iframe-j35EKpAQ.js";import{r as ce}from"./index-BuEuhmWt.js";import{i as ie,g as de,a as ue,b as pe,P as me,u as ge,T as fe,c as ye,d as be}from"./index-CK6fBrpZ.js";import{g as H,m as V,r as xe,P as he,C as z,u as ve,c as Se,o as Ce,B as f}from"./button-Cc6E7tyq.js";import{c as B}from"./index-DqVAgsJl.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DnnyNCso.js";import"./objectWithoutPropertiesLoose-AGTbIyKU.js";var we={ESC:27};const T=e=>e?typeof e=="function"?e():e:null,je=e=>{const{componentCls:t,popoverColor:r,titleMinWidth:n,fontWeightStrong:o,innerPadding:l,boxShadowSecondary:i,colorTextHeading:d,borderRadiusLG:u,zIndexPopup:m,titleMarginBottom:g,colorBgElevated:b,popoverBg:p,titleBorderBottom:y,innerContentPadding:h,titlePadding:c}=e;return[{[t]:Object.assign(Object.assign({},xe(e)),{position:"absolute",top:0,left:{_skip_check_:!0,value:0},zIndex:m,fontWeight:"normal",whiteSpace:"normal",textAlign:"start",cursor:"auto",userSelect:"text","--valid-offset-x":"var(--arrow-offset-horizontal, var(--arrow-x))",transformOrigin:["var(--valid-offset-x, 50%)","var(--arrow-y, 50%)"].join(" "),"--antd-arrow-background-color":b,width:"max-content",maxWidth:"100vw","&-rtl":{direction:"rtl"},"&-hidden":{display:"none"},[`${t}-content`]:{position:"relative"},[`${t}-inner`]:{backgroundColor:p,backgroundClip:"padding-box",borderRadius:u,boxShadow:i,padding:l},[`${t}-title`]:{minWidth:n,marginBottom:g,color:d,fontWeight:o,borderBottom:y,padding:c},[`${t}-inner-content`]:{color:r,padding:h}})},de(e,"var(--antd-arrow-background-color)"),{[`${t}-pure`]:{position:"relative",maxWidth:"none",margin:e.sizePopupArrow,display:"inline-block",[`${t}-content`]:{display:"inline-block"}}}]},Ee=e=>{const{componentCls:t}=e;return{[t]:he.map(r=>{const n=e[`${r}6`];return{[`&${t}-${r}`]:{"--antd-arrow-background-color":n,[`${t}-inner`]:{backgroundColor:n},[`${t}-arrow`]:{background:"transparent"}}}})}},Oe=e=>{const{lineWidth:t,controlHeight:r,fontHeight:n,padding:o,wireframe:l,zIndexPopupBase:i,borderRadiusLG:d,marginXS:u,lineType:m,colorSplit:g,paddingSM:b}=e,p=r-n,y=p/2,h=p/2-t,c=o;return Object.assign(Object.assign(Object.assign({titleMinWidth:177,zIndexPopup:i+30},ue(e)),pe({contentRadius:d,limitVerticalRadius:!0})),{innerPadding:l?0:12,titleMarginBottom:l?0:u,titlePadding:l?`${y}px ${c}px ${h}px`:0,titleBorderBottom:l?`${t}px ${m} ${g}`:"none",innerContentPadding:l?`${b}px ${c}px`:0})},G=H("Popover",e=>{const{colorBgElevated:t,colorText:r}=e,n=V(e,{popoverBg:t,popoverColor:r});return[je(n),Ee(n),ie(n,"zoom-big")]},Oe,{resetStyle:!1,deprecatedTokens:[["width","titleMinWidth"],["minWidth","titleMinWidth"]]});var Be=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]]);return r};const q=({title:e,content:t,prefixCls:r})=>!e&&!t?null:s.createElement(s.Fragment,null,e&&s.createElement("div",{className:`${r}-title`},e),t&&s.createElement("div",{className:`${r}-inner-content`},t)),ke=e=>{const{hashId:t,prefixCls:r,className:n,style:o,placement:l="top",title:i,content:d,children:u}=e,m=T(i),g=T(d),b=B(t,r,`${r}-pure`,`${r}-placement-${l}`,n);return s.createElement("div",{className:b,style:o},s.createElement("div",{className:`${r}-arrow`}),s.createElement(me,Object.assign({},e,{className:t,prefixCls:r}),u||s.createElement(q,{prefixCls:r,title:m,content:g})))},Pe=e=>{const{prefixCls:t,className:r}=e,n=Be(e,["prefixCls","className"]),{getPrefixCls:o}=s.useContext(z),l=o("popover",t),[i,d,u]=G(l);return i(s.createElement(ke,Object.assign({},n,{prefixCls:l,hashId:d,className:B(r,u)})))};var Ne=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]]);return r};const $e=s.forwardRef((e,t)=>{var r,n;const{prefixCls:o,title:l,content:i,overlayClassName:d,placement:u="top",trigger:m="hover",children:g,mouseEnterDelay:b=.1,mouseLeaveDelay:p=.1,onOpenChange:y,overlayStyle:h={},styles:c,classNames:x}=e,v=Ne(e,["prefixCls","title","content","overlayClassName","placement","trigger","children","mouseEnterDelay","mouseLeaveDelay","onOpenChange","overlayStyle","styles","classNames"]),{getPrefixCls:C,className:E,style:O,classNames:j,styles:k}=ve("popover"),w=C("popover",o),[I,M,ee]=G(w),te=C(),ne=B(d,M,ee,E,j.root,x?.root),re=B(j.body,x?.body),[oe,se]=ge(!1,{value:(r=e.open)!==null&&r!==void 0?r:e.visible,defaultValue:(n=e.defaultOpen)!==null&&n!==void 0?n:e.defaultVisible}),D=(S,P)=>{se(S,!0),y?.(S,P)},ae=S=>{S.keyCode===we.ESC&&D(!1,S)},le=S=>{D(S)},_=T(l),L=T(i);return I(s.createElement(fe,Object.assign({placement:u,trigger:m,mouseEnterDelay:b,mouseLeaveDelay:p},v,{prefixCls:w,classNames:{root:ne,body:re},styles:{root:Object.assign(Object.assign(Object.assign(Object.assign({},k.root),O),h),c?.root),body:Object.assign(Object.assign({},k.body),c?.body)},ref:t,open:oe,onOpenChange:le,overlay:_||L?s.createElement(q,{prefixCls:w,title:_,content:L}):null,transitionName:ye(te,"zoom-big",v.transitionName),"data-popover-inject":!0}),Se(g,{onKeyDown:S=>{var P,R;s.isValidElement(g)&&((R=g==null?void 0:(P=g.props).onKeyDown)===null||R===void 0||R.call(P,S)),ae(S)}})))}),J=$e;J._InternalPanelDoNotUseOrYouWillBeFired=Pe;function A(e){return["small","middle","large"].includes(e)}const X=["wrap","nowrap","wrap-reverse"],K=["flex-start","flex-end","start","end","center","space-between","space-around","space-evenly","stretch","normal","left","right"],U=["center","start","end","flex-start","flex-end","self-start","self-end","baseline","normal","stretch"],Te=(e,t)=>{const r=t.wrap===!0?"wrap":t.wrap;return{[`${e}-wrap-${r}`]:r&&X.includes(r)}},Ie=(e,t)=>{const r={};return U.forEach(n=>{r[`${e}-align-${n}`]=t.align===n}),r[`${e}-align-stretch`]=!t.align&&!!t.vertical,r},Me=(e,t)=>{const r={};return K.forEach(n=>{r[`${e}-justify-${n}`]=t.justify===n}),r};function Re(e,t){return B(Object.assign(Object.assign(Object.assign({},Te(e,t)),Ie(e,t)),Me(e,t)))}const Fe=e=>{const{componentCls:t}=e;return{[t]:{display:"flex",margin:0,padding:0,"&-vertical":{flexDirection:"column"},"&-rtl":{direction:"rtl"},"&:empty":{display:"none"}}}},We=e=>{const{componentCls:t}=e;return{[t]:{"&-gap-small":{gap:e.flexGapSM},"&-gap-middle":{gap:e.flexGap},"&-gap-large":{gap:e.flexGapLG}}}},De=e=>{const{componentCls:t}=e,r={};return X.forEach(n=>{r[`${t}-wrap-${n}`]={flexWrap:n}}),r},_e=e=>{const{componentCls:t}=e,r={};return U.forEach(n=>{r[`${t}-align-${n}`]={alignItems:n}}),r},Le=e=>{const{componentCls:t}=e,r={};return K.forEach(n=>{r[`${t}-justify-${n}`]={justifyContent:n}}),r},Ae=()=>({}),He=H("Flex",e=>{const{paddingXS:t,padding:r,paddingLG:n}=e,o=V(e,{flexGapSM:t,flexGap:r,flexGapLG:n});return[Fe(o),We(o),De(o),_e(o),Le(o)]},Ae,{resetStyle:!1});var Ve=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]]);return r};const W=F.forwardRef((e,t)=>{const{prefixCls:r,rootClassName:n,className:o,style:l,flex:i,gap:d,vertical:u=!1,component:m="div",children:g}=e,b=Ve(e,["prefixCls","rootClassName","className","style","flex","gap","vertical","component","children"]),{flex:p,direction:y,getPrefixCls:h}=F.useContext(z),c=h("flex",r),[x,v,C]=He(c),E=u??p?.vertical,O=B(o,n,p?.className,c,v,C,Re(c,e),{[`${c}-rtl`]:y==="rtl",[`${c}-gap-${d}`]:A(d),[`${c}-vertical`]:E}),j=Object.assign(Object.assign({},p?.style),l);return i&&(j.flex=i),d&&!A(d)&&(j.gap=d),x(F.createElement(m,Object.assign({ref:t,className:O,style:j},Ce(b,["justify","wrap","align"])),g))});function ze(e,t){if(!e)return{};const{width:r,height:n,top:o,left:l}=e.getBoundingClientRect(),i=o+t.scrollTop,d=l+t.scrollLeft;return{width:t.scrollWidth,height:t.scrollHeight,borderTopWidth:Math.max(i,0),borderLeftWidth:Math.max(d,0),borderBottomWidth:Math.max(t.scrollHeight-i-n,0),borderRightWidth:Math.max(t.scrollWidth-d-r,0)}}const Y=e=>{const{renderMaskContent:t,element:r,container:n,onAnimationStart:o,onAnimationEnd:l}=e,[i,d]=s.useState(),u=s.useRef(null),m=s.useRef(null),g=s.useRef(o);g.current=o;const b=s.useRef(l);b.current=l;const p=s.useCallback(()=>{u.current=typeof r=="function"?r():r,m.current=typeof n=="function"?n():n},[r,n]),y=s.useCallback(()=>{if(!u.current)return;const c=new IntersectionObserver(x=>{x.forEach(v=>{if(!v.isIntersecting)u.current?.scrollIntoView({block:"center",inline:"center"});else{const C=ze(u.current,m.current||document.documentElement);d(C),c.unobserve(u.current),c.disconnect()}})});c.observe(u.current)},[]);s.useEffect(()=>{g.current?.();const c=setTimeout(()=>{b.current?.()},230);return()=>clearTimeout(c)},[r]),s.useEffect(()=>{r&&(p(),y())},[y,p]),s.useEffect(()=>{p();const c=new be(()=>{y()});return c.observe(m.current||document.documentElement),()=>{c.disconnect()}},[]);const h=s.useMemo(()=>t?t(a.jsx("div",{className:"mask-content",style:{width:"100%",height:"100%"}})):null,[t]);return a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"mask",style:i,children:h}),i?a.jsx(Ge,{}):null]})};function Ge(){const e=s.useRef(null);return s.useEffect(()=>(e.current=document.body.style.overflow,document.body.style.overflow="hidden",()=>{e.current!==null&&(document.body.style.overflow=e.current)}),[]),a.jsx(a.Fragment,{})}Y.__docgenInfo={description:"",methods:[],displayName:"Mask",props:{element:{required:!0,tsType:{name:"union",raw:"HTMLElement | (() => HTMLElement)",elements:[{name:"HTMLElement"},{name:"unknown"}]},description:""},container:{required:!1,tsType:{name:"union",raw:"HTMLElement | (() => HTMLElement)",elements:[{name:"HTMLElement"},{name:"unknown"}]},description:""},renderMaskContent:{required:!1,tsType:{name:"signature",type:"function",raw:"(wrapper: ReactNode) => ReactNode",signature:{arguments:[{type:{name:"ReactNode"},name:"wrapper"}],return:{name:"ReactNode"}}},description:""},onAnimationStart:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onAnimationEnd:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const Z=e=>{const{step:t=0,steps:r,onStepEnd:n,getContainer:o}=e,[l,i]=s.useState(t),[d,u]=s.useState(!1),m=s.useMemo(()=>r[l],[l]),[g,b]=s.useState(!1),[,p]=s.useState({}),y=m?.selector(),h=o&&o()||document.documentElement,c=m?.renderContent,x=m?.beforeBack,v=m?.beforeForward,C=m?.placement,E=s.useCallback(async()=>{l!==0&&(x&&await x?.(l),i(w=>--w))},[x,l]),O=s.useCallback(async()=>{if(l===r.length-1){u(!0),await n?.();return}v&&await v?.(l),i(w=>++w)},[v,l,n]);s.useEffect(()=>{i(t)},[t]);const j=s.useCallback(w=>{const I=c?.(t),M=a.jsxs("div",{className:"onboarding-operator",children:[l!==0&&a.jsx(f,{className:"back",onClick:()=>E(),children:"上一步"}),a.jsx(f,{className:"forward",onClick:()=>O(),type:"primary",children:l!==r.length-1?"下一步":"我知道了"})]});return a.jsx(J,{open:!0,content:a.jsxs(a.Fragment,{children:[I,M]}),placement:C||"top",children:w})},[c,l,r,O,E,C]);if(s.useEffect(()=>{p({})},[]),!y||d)return null;const k=a.jsx(Y,{element:y,renderMaskContent:g?()=>null:j,container:h,onAnimationEnd:()=>b(!1),onAnimationStart:()=>b(!0)});return ce.createPortal(k,h)},tt={title:"Components/OnBoarding",component:Z,parameters:{layout:"centered"},argTypes:{steps:{control:"object",description:"引导步骤数组",table:{type:{summary:"Step[]",detail:`
          Step {
            selector: () => HTMLElement | null;
            renderContent?: (currentStep: number) => ReactNode;
            placement?: TooltipPlacement;
            beforeBack?: (currentStep: number) => void;
            beforeForward?: (currentStep: number) => void;
          }
          `}}},onStepEnd:{control:"object",defaultValue:()=>alert("引导结束"),description:"引导步骤结束时的回调函数"}},tags:["autodocs"]},Q=e=>{const{steps:t,onStepEnd:r}=e,[n,o]=s.useState(!1);return s.useEffect(()=>{document.body.style.overflow="unset"},[]),a.jsxs(a.Fragment,{children:[a.jsx(f,{onClick:()=>o(!0),children:"开始引导"}),a.jsxs("div",{className:"App",children:[a.jsxs(W,{gap:"small",wrap:"wrap",id:"btn-group1",children:[a.jsx(f,{type:"primary",children:"Primary Button"}),a.jsx(f,{children:"Default Button"}),a.jsx(f,{type:"dashed",children:"Dashed Button"}),a.jsx(f,{type:"text",children:"Text Button"}),a.jsx(f,{type:"link",children:"Link Button"})]}),a.jsx("div",{style:{height:"1000px"}}),a.jsxs(W,{wrap:"wrap",gap:"small",children:[a.jsx(f,{type:"primary",danger:!0,children:"Primary"}),a.jsx(f,{danger:!0,children:"Default"}),a.jsx(f,{type:"dashed",danger:!0,id:"btn-group2",children:"Dashed"}),a.jsx(f,{type:"text",danger:!0,children:"Text"}),a.jsx(f,{type:"link",danger:!0,children:"Link"})]}),a.jsx("div",{style:{height:"500px"}}),a.jsxs(W,{wrap:"wrap",gap:"small",children:[a.jsx(f,{type:"primary",ghost:!0,children:"Primary"}),a.jsx(f,{ghost:!0,children:"Default"}),a.jsx(f,{type:"dashed",ghost:!0,children:"Dashed"}),a.jsx(f,{type:"primary",danger:!0,ghost:!0,id:"btn-group3",children:"Danger"})]}),n?a.jsx(Z,{onStepEnd:()=>{r?.(),o(!1)},steps:t}):null]})]})},N={args:{steps:[{selector:()=>document.getElementById("btn-group1"),renderContent:()=>"来财",beforeBack(e){console.log("上一步是",e)},beforeForward(e){console.log("下一步是",e)},placement:"bottom"},{selector:()=>document.getElementById("btn-group2"),beforeBack(e){console.log("上一步是",e)},beforeForward(e){console.log("下一步是",e)},renderContent:()=>"四面八方都来财",placement:"bottom"},{selector:()=>document.getElementById("btn-group3"),beforeBack(e){console.log("上一步是",e)},beforeForward(e){console.log("下一步是",e)},renderContent:()=>"财神爷来财",placement:"bottom"}]},render:Q},$={args:{onStepEnd:()=>{alert("引导结束")},steps:[{selector:()=>document.getElementById("btn-group1"),renderContent:()=>"来财",beforeBack(e){console.log("上一步是",e)},beforeForward(e){console.log("下一步是",e)},placement:"bottom"},{selector:()=>document.getElementById("btn-group2"),beforeBack(e){console.log("上一步是",e)},beforeForward(e){console.log("下一步是",e)},renderContent:()=>"四面八方都来财",placement:"bottom"},{selector:()=>document.getElementById("btn-group3"),beforeBack(e){console.log("上一步是",e)},beforeForward(e){console.log("下一步是",e)},renderContent:()=>"财神爷来财",placement:"bottom"}]},render:Q};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    steps: [{
      selector: () => {
        return document.getElementById("btn-group1");
      },
      renderContent: () => {
        return "来财";
      },
      beforeBack(currentStep) {
        console.log("上一步是", currentStep);
      },
      beforeForward(currentStep) {
        console.log("下一步是", currentStep);
      },
      placement: "bottom"
    }, {
      selector: () => {
        return document.getElementById("btn-group2");
      },
      beforeBack(currentStep) {
        console.log("上一步是", currentStep);
      },
      beforeForward(currentStep) {
        console.log("下一步是", currentStep);
      },
      renderContent: () => {
        return "四面八方都来财";
      },
      placement: "bottom"
    }, {
      selector: () => {
        return document.getElementById("btn-group3");
      },
      beforeBack(currentStep) {
        console.log("上一步是", currentStep);
      },
      beforeForward(currentStep) {
        console.log("下一步是", currentStep);
      },
      renderContent: () => {
        return "财神爷来财";
      },
      placement: "bottom"
    }]
  },
  render: RenderOnBoarding
}`,...N.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  args: {
    onStepEnd: () => {
      alert("引导结束");
    },
    steps: [{
      selector: () => {
        return document.getElementById("btn-group1");
      },
      renderContent: () => {
        return "来财";
      },
      beforeBack(currentStep) {
        console.log("上一步是", currentStep);
      },
      beforeForward(currentStep) {
        console.log("下一步是", currentStep);
      },
      placement: "bottom"
    }, {
      selector: () => {
        return document.getElementById("btn-group2");
      },
      beforeBack(currentStep) {
        console.log("上一步是", currentStep);
      },
      beforeForward(currentStep) {
        console.log("下一步是", currentStep);
      },
      renderContent: () => {
        return "四面八方都来财";
      },
      placement: "bottom"
    }, {
      selector: () => {
        return document.getElementById("btn-group3");
      },
      beforeBack(currentStep) {
        console.log("上一步是", currentStep);
      },
      beforeForward(currentStep) {
        console.log("下一步是", currentStep);
      },
      renderContent: () => {
        return "财神爷来财";
      },
      placement: "bottom"
    }]
  },
  render: RenderOnBoarding
}`,...$.parameters?.docs?.source}}};const nt=["Steps","onStepEnd"];export{N as Steps,nt as __namedExportsOrder,tt as default,$ as onStepEnd};
