import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{d as y}from"./dayjs.min-CV57c2Uc.js";import{r as l}from"./iframe-j35EKpAQ.js";import{c as T}from"./index-DqVAgsJl.js";import"./preload-helper-PPVm8Dsz.js";const H={formatYear:"YYYY 年",formatMonth:"MM 月",month:{January:"一月",February:"二月",March:"三月",April:"四月",May:"五月",June:"六月",July:"七月",August:"八月",September:"九月",October:"十月",November:"十一月",December:"十二月"},today:"今天",week:{monday:"星期一",tuesday:"星期二",wednesday:"星期三",thursday:"星期四",friday:"星期五",saturday:"星期六",sunday:"星期日"}},A={formatYear:"YYYY",formatMonth:"MMM YYYY",today:"Today",month:{January:"January",February:"February",March:"March",April:"April",May:"May",June:"June",July:"July",August:"August",September:"September",October:"October",November:"November",December:"December"},week:{monday:"Monday",tuesday:"Tuesday",wednesday:"Wednesday",thursday:"Thursday",friday:"Friday",saturday:"Saturday",sunday:"Sunday"}},S=l.createContext({locale:"zh-CN"}),k={"zh-CN":H,"en-US":A};function I(e){const a=e.startOf("month"),r=a.day(),t=new Array(42);for(let n=0;n<r;n++)t[n]={date:a.subtract(r-n,"day"),isCurrentMonth:!1};for(let n=r;n<t.length;n++){const s=a.add(n-r,"day");t[n]={date:s,isCurrentMonth:s.month()===a.month()}}return t}function L(e,a,r,t,n){const s=[];for(let d=0;d<6;d++){const i=[];for(let m=0;m<7;m++){const c=e[d*7+m];i[m]=o.jsx("div",{className:`calendar-month-body-cell ${c.isCurrentMonth?"current-month":""}`,onClick:()=>t?.(c.date),children:a?a(c.date):o.jsxs("div",{className:"calendar-month-body-cell-date",children:[o.jsx("div",{className:T("calendar-month-body-cell-date-value",{"calendar-month-body-cell-selected":n?.format("YY/MM/DD")===c.date.format("YY/MM/DD")}),children:c.date.date()}),o.jsx("div",{className:"calendar-month-body-cell-date-content",children:r?.(c.date)})]})})}s.push(i)}return s.map(d=>o.jsx("div",{className:"calendar-month-body-row",children:d}))}function O(e){return["monday","tuesday","wednesday","thursday","friday","saturday","sunday"].map(r=>o.jsx("div",{className:"calendar-week-item",children:e.week[r]},r))}const J=e=>{const{dateRender:a,dateInnerContent:r,selectHandler:t,value:n,curMonth:s}=e,{locale:d}=l.useContext(S),i=k[d];return o.jsxs("div",{className:"calendar-month-container",children:[o.jsx("div",{className:"calendar-week-container",children:O(i)}),o.jsx("div",{className:"calendar-month-body",children:L(I(s),a,r,t,n)})]})};J.__docgenInfo={description:"",methods:[],displayName:"MonthCalendar",props:{value:{required:!0,tsType:{name:"Dayjs"},description:""},curMonth:{required:!0,tsType:{name:"Dayjs"},description:""},dateRender:{required:!1,tsType:{name:"signature",type:"function",raw:"(date: Dayjs) => ReactNode",signature:{arguments:[{type:{name:"Dayjs"},name:"date"}],return:{name:"ReactNode"}}},description:""},dateInnerContent:{required:!1,tsType:{name:"signature",type:"function",raw:"(date: Dayjs) => ReactNode",signature:{arguments:[{type:{name:"Dayjs"},name:"date"}],return:{name:"ReactNode"}}},description:""},selectHandler:{required:!1,tsType:{name:"signature",type:"function",raw:"(date: Dayjs) => void",signature:{arguments:[{type:{name:"Dayjs"},name:"date"}],return:{name:"void"}}},description:""}}};function R(e){const{curMonth:a,preMonthHandler:r,nextMonthHandler:t,todayHandler:n}=e,{locale:s}=l.useContext(S),d=k[s];return o.jsx("div",{className:"calendar-header",children:o.jsxs("div",{className:"calendar-header-left",children:[o.jsx("div",{className:"calendar-header-icon",onClick:r,children:"<"}),o.jsx("div",{className:"calendar-header-value",children:a.format(d.formatMonth)}),o.jsx("div",{className:"calendar-header-icon",onClick:t,children:">"}),o.jsx("button",{className:"calendar-header-btn",onClick:n,children:d.today})]})})}R.__docgenInfo={description:"",methods:[],displayName:"Header",props:{curMonth:{required:!0,tsType:{name:"Dayjs"},description:""},preMonthHandler:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},nextMonthHandler:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},todayHandler:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};function q(e,a){var r=typeof Symbol=="function"&&e[Symbol.iterator];if(!r)return e;var t=r.call(e),n,s=[],d;try{for(;(a===void 0||a-- >0)&&!(n=t.next()).done;)s.push(n.value)}catch(i){d={error:i}}finally{try{n&&!n.done&&(r=t.return)&&r.call(t)}finally{if(d)throw d.error}}return s}function _(e,a,r){if(r||arguments.length===2)for(var t=0,n=a.length,s;t<n;t++)(s||!(t in a))&&(s||(s=Array.prototype.slice.call(a,0,t)),s[t]=a[t]);return e.concat(s||Array.prototype.slice.call(a))}var E=function(e){return typeof e=="function"},F=function(e){var a=l.useRef(e);a.current=l.useMemo(function(){return e},[e]);var r=l.useRef(void 0);return r.current||(r.current=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return a.current.apply(this,t)}),r.current},P=function(){var e=q(l.useState({}),2),a=e[1];return l.useCallback(function(){return a({})},[])};function z(e,a){a===void 0&&(a={});var r=e??{},t=a.defaultValue,n=a.defaultValuePropName,s=n===void 0?"defaultValue":n,d=a.valuePropName,i=d===void 0?"value":d,m=a.trigger,c=m===void 0?"onChange":m,f=r[i],h=Object.prototype.hasOwnProperty.call(r,i),b=l.useMemo(function(){return h?f:Object.prototype.hasOwnProperty.call(r,s)?r[s]:t},[]),p=l.useRef(b);h&&(p.current=f);var x=P();function u(N){for(var Y=[],v=1;v<arguments.length;v++)Y[v-1]=arguments[v];var V=E(N)?N(p.current):N;h||(p.current=V,x()),r[c]&&r[c].apply(r,_([V],q(Y),!1))}return[p.current,F(u)]}function j(e){const{className:a,style:r,locale:t,onChange:n}=e,s=T("calendar",a),[d,i]=z(e,{defaultValue:y()}),[m,c]=l.useState(d),f=l.useCallback(u=>{n?.(u),i(u),c(u)},[]),h=l.useCallback(u=>{f(u)},[]),b=l.useCallback(()=>{c(u=>u.subtract(1,"month"))},[]),p=l.useCallback(()=>{c(u=>u.add(1,"month"))},[]),x=l.useCallback(()=>{const u=y(Date.now());f(u)},[]);return o.jsx(S.Provider,{value:{locale:t||navigator.language},children:o.jsxs("div",{className:s,style:r,children:[o.jsx(R,{...e,curMonth:m,preMonthHandler:b,nextMonthHandler:p,todayHandler:x}),o.jsx(J,{...e,value:d,selectHandler:h,curMonth:m})]})})}j.__docgenInfo={description:"",methods:[],displayName:"Calendar",props:{locale:{required:!1,tsType:{name:"string"},description:""},value:{required:!1,tsType:{name:"Dayjs"},description:""},defaultValue:{required:!1,tsType:{name:"Dayjs"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: Dayjs) => void",signature:{arguments:[{type:{name:"Dayjs"},name:"value"}],return:{name:"void"}}},description:""},style:{required:!1,tsType:{name:"CSSProperties"},description:""},className:{required:!1,tsType:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},description:""}},composes:["Omit"]};const K={title:"Components/日历组件",component:j,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{value:{control:"date"},defaultValue:{control:"date"}}},w=e=>typeof e.value=="number"?o.jsx(j,{...e,value:y(e.value),defaultValue:y(e.defaultValue)}):o.jsx(j,{...e}),g={args:{value:y(Date.now())},render:w,parameters:{docs:{description:{story:"value值类型为Dayjs，传入该值用于指定当前的日期是什么"}}}},D={args:{defaultValue:y(Date.now()),dateRender(e){return o.jsx("p",{style:{color:"blue"},children:e.date()})}},render:w,parameters:{docs:{description:{story:"dateRender用于自定义渲染每个日期的单元格"}}}},C={args:{defaultValue:y(Date.now()),dateInnerContent(e){return e.format("YY/MM/DD")===y(Date.now()).format("YY/MM/DD")?o.jsx("p",{style:{color:"red"},children:"当天"}):null}},render:w,parameters:{docs:{description:{story:"dateInnerContent用于自定义渲染每个日期的单元格除日期外的内容"}}}},M={args:{defaultValue:y(Date.now()),locale:"en-US"},render:w,parameters:{docs:{description:{story:"locale指定国际化内容"}}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    value: DayJS(Date.now())
  },
  render: renderCalendar,
  parameters: {
    docs: {
      description: {
        story: "value值类型为Dayjs，传入该值用于指定当前的日期是什么"
      }
    }
  }
}`,...g.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: DayJS(Date.now()),
    // value: DayJS(Date.now()),
    dateRender(date) {
      return <p style={{
        color: "blue"
      }}>{date.date()}</p>;
    }
  },
  render: renderCalendar,
  parameters: {
    docs: {
      description: {
        story: "dateRender用于自定义渲染每个日期的单元格"
      }
    }
  }
}`,...D.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: DayJS(Date.now()),
    // value: DayJS(Date.now()),
    dateInnerContent(date) {
      return date.format("YY/MM/DD") === DayJS(Date.now()).format("YY/MM/DD") ? <p style={{
        color: "red"
      }}>当天</p> : null;
    }
  },
  render: renderCalendar,
  parameters: {
    docs: {
      description: {
        story: "dateInnerContent用于自定义渲染每个日期的单元格除日期外的内容"
      }
    }
  }
}`,...C.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: DayJS(Date.now()),
    // value: DayJS(Date.now()),
    locale: "en-US"
  },
  render: renderCalendar,
  parameters: {
    docs: {
      description: {
        story: "locale指定国际化内容"
      }
    }
  }
}`,...M.parameters?.docs?.source}}};const Q=["value","DateRender","DateInnerContent","Locale"];export{C as DateInnerContent,D as DateRender,M as Locale,Q as __namedExportsOrder,K as default,g as value};
