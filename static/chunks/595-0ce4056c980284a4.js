"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[595],{3785:function(e,t,s){s.d(t,{Z:function(){return p}});var a=s(5893),i=s(5052);s(7294);var r=s(5398),n=s(7962),l=s(7507),c=s(7036),o=s(181),x=s(3508),d=s(9572),u=s(6215);function p(e){let{type:t,variant:s="primary"}=e,p="text-".concat(s);switch(t){case i.G.up:return(0,a.jsx)(o.Z,{className:p});case i.G.down:return(0,a.jsx)(x.Z,{className:p});case i.G.left:return(0,a.jsx)(d.Z,{className:p});case i.G.right:return(0,a.jsx)(u.Z,{className:p});case i.G.profile:return(0,a.jsx)(r.Z,{className:p});case i.G.experience:return(0,a.jsx)(n.Z,{className:p});case i.G.contact:return(0,a.jsx)(l.Z,{className:p});default:return(0,a.jsx)(c.Z,{})}}},3721:function(e,t,s){s.d(t,{Z:function(){return i}});var a=s(5893);function i(e){let{type:t,text:s,variant:i}=e;switch(t){case"title":return(0,a.jsx)("h1",{className:"font-burtons text-3xl p-2 ".concat("primary"==i?" text-primary":" text-secondary"),children:s});case"subtitle":return(0,a.jsx)("h2",{className:" uppercase text-xl ".concat("primary"==i?" text-primary":" text-secondary"),children:s});case"caption":return(0,a.jsx)("p",{className:" text-sm opacity-60",children:s});default:return(0,a.jsx)("p",{children:s})}}},5052:function(e,t,s){var a,i;s.d(t,{G:function(){return a}}),(i=a||(a={}))[i.up=0]="up",i[i.down=1]="down",i[i.left=2]="left",i[i.right=3]="right",i[i.profile=4]="profile",i[i.experience=5]="experience",i[i.contact=6]="contact"},2448:function(e,t,s){s.r(t),s.d(t,{default:function(){return A}});var a=s(5893),i=s(3721),r=s(5675),n=s.n(r),l={src:"/_next/static/media/pp.ec9920a2.jpg",height:2412,width:2248,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgABwMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABQEBAQAAAAAAAAAAAAAAAAAAAAH/2gAMAwEAAhADEAAAALQr/8QAHBAAAgICAwAAAAAAAAAAAAAAAgQBAxESAAVS/9oACAEBAAE/AGO8QSYFq/cV7QMAwOSOay0mdfMc/8QAFREBAQAAAAAAAAAAAAAAAAAAABH/2gAIAQIBAT8Aj//EABURAQEAAAAAAAAAAAAAAAAAABEA/9oACAEDAQE/AFv/2Q==",blurWidth:7,blurHeight:8};let c=()=>[{name:"Gaming",url:"https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80"},{name:"Homebrewing",url:"https://images.unsplash.com/photo-1618584386532-f59df5adbbfb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2325&q=80"},{name:"Workout",url:"https://images.unsplash.com/photo-1544033527-b192daee1f5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80"},{name:"Food",url:"https://images.unsplash.com/photo-1577303935007-0d306ee638cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2640&q=80"}];var o=s(7294);function x(e){let{title:t,illustration:s}=e;return(0,a.jsxs)("div",{className:" bg-secondary rounded-lg shadow-sm flex flex-col justify-between max-w-md",children:[(0,a.jsx)("img",{className:" h-40 w-full object-cover rounded-t-md",src:s}),(0,a.jsx)("div",{className:"m-4",children:(0,a.jsx)(i.Z,{type:"subtitle",variant:"primary",text:t})})]})}var d=s(3785),u=s(5052);function p(e){let{hobbies:t}=e,[s,i]=(0,o.useState)(0),r=e=>{let a=s+e;a<0&&(a=t.length-1),a>t.length-1&&(a=0),i(a)};return(0,a.jsxs)("div",{className:"relative",children:[(0,a.jsx)(x,{title:t[s].name,illustration:t[s].url}),(0,a.jsxs)("div",{className:"flex justify-between absolute top-1/2 w-full p-2",children:[(0,a.jsx)("div",{className:" rounded-full bg-bg-white",onClick:()=>r(-1),children:(0,a.jsx)(d.Z,{type:u.G.left,variant:"primary"})}),(0,a.jsx)("div",{className:" rounded-full bg-bg-white",onClick:()=>r(1),children:(0,a.jsx)(d.Z,{type:u.G.right})})]})]})}function A(){let e=c();return(0,a.jsxs)("div",{className:" relative max-w-md w-full",children:[(0,a.jsx)(i.Z,{type:"title",text:"about me",variant:"secondary"}),(0,a.jsxs)("div",{className:" bg-secondary rounded-lg shadow-lg flex justify-between max-w-md p-4 bg-gradient-to-t from-secondary to-bg-white",children:[(0,a.jsxs)("div",{className:"p-2 w-1/2",children:[(0,a.jsx)(i.Z,{type:"subtitle",text:"Marius Suvatne",variant:"primary"}),(0,a.jsx)(i.Z,{type:"caption",text:"Software Developer"}),(0,a.jsx)(i.Z,{type:"text",text:"Marius is a software engineer working for Capgemini Norway. "})]}),(0,a.jsx)("div",{className:" w-1/2 m-4",children:(0,a.jsx)(n(),{className:" rounded-full",src:l,alt:""})})]}),(0,a.jsxs)("div",{className:" absolute w-full bottom-28",children:[(0,a.jsx)(i.Z,{type:"title",text:"things i also enjoy",variant:"secondary"}),(0,a.jsx)(p,{hobbies:e})]})]})}},7711:function(e,t,s){s.r(t),s.d(t,{default:function(){return o}});var a=s(5893),i=s(3721),r=s(7294),n=s(5052),l=s(3785);function c(e){let{label:t,expanded:s=!1,children:c}=e,[o,x]=(0,r.useState)(!1);return(0,r.useEffect)(()=>{x(s)},[s]),(0,a.jsxs)("div",{className:" bg-secondary w-full rounded-lg shadow-2xl  ",children:[(0,a.jsxs)("div",{className:" bg-bg-primary rounded-t-lg w-full flex flex-row justify-between cursor-pointer p-2 ".concat(!o&&"rounded-lg"),onClick:()=>x(!o),children:[(0,a.jsx)(i.Z,{type:"subtitle",text:null!=t?t:""}),o?(0,a.jsx)(l.Z,{type:n.G.up,variant:"secondary"}):(0,a.jsx)(l.Z,{type:n.G.down,variant:"secondary"})]}),(0,a.jsx)("div",{className:"px-2 pt-0 overflow-hidden transition-[max-height] duration-500 ease-in ".concat(o?" max-h-[1000px]":"max-h-0"),children:(0,a.jsx)("div",{className:" p-4 flex flex-col gap-2",children:c})})]})}function o(){return(0,a.jsxs)("div",{className:" max-w-md w-full",children:[(0,a.jsx)(i.Z,{type:"title",text:"experience",variant:"secondary"}),(0,a.jsxs)("div",{className:"p-2 gap-4 flex flex-col",children:[(0,a.jsxs)(c,{label:"education",children:[(0,a.jsxs)("div",{className:"flex flex-row",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)(i.Z,{type:"caption",text:"2017"}),(0,a.jsx)(i.Z,{type:"caption",text:"2020"})]}),(0,a.jsxs)("div",{className:" border-primary border-l-2 ml-2 pl-2",children:[(0,a.jsx)(i.Z,{type:"text",text:"University of Agder"}),(0,a.jsx)(i.Z,{type:"caption",text:"Bachelor Degree Computer Engineering"})]})]}),(0,a.jsxs)("div",{className:"flex flex-row mt-4",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)(i.Z,{type:"caption",text:"2020"}),(0,a.jsx)(i.Z,{type:"caption",text:"2022"})]}),(0,a.jsxs)("div",{className:" border-primary border-l-2 ml-2 pl-2",children:[(0,a.jsx)(i.Z,{type:"text",text:"University of Agder"}),(0,a.jsx)(i.Z,{type:"caption",text:"Masters Degree in Artificial Intelligence"})]})]})]}),(0,a.jsxs)(c,{label:"job experience",children:[(0,a.jsxs)("div",{className:" w-full bg-bg-white rounded-md flex",children:[(0,a.jsx)("div",{className:"w-1/3 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80')] bg-no-repeat bg-cover rounded-l-md p-2 justify-center"}),(0,a.jsxs)("div",{className:"w-2/3 p-2",children:[(0,a.jsx)(i.Z,{type:"subtitle",variant:"primary",text:"Bitmesh AS"}),(0,a.jsx)(i.Z,{type:"text",text:"Bitmesh provides a collection of services, enabling rapid IoT application development."})]})]}),(0,a.jsxs)("div",{className:" w-full bg-bg-white rounded-md flex",children:[(0,a.jsx)("div",{className:"w-1/3 bg-[url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80')] bg-no-repeat bg-cover rounded-l-md p-2 justify-center"}),(0,a.jsxs)("div",{className:"w-2/3 p-2",children:[(0,a.jsx)(i.Z,{type:"subtitle",variant:"primary",text:"Capgemini"}),(0,a.jsx)(i.Z,{type:"text",text:"Capgemini is a multinational information technology (IT) services and consulting company."})]})]})]}),(0,a.jsxs)(c,{label:"projects",children:[(0,a.jsxs)("div",{className:" w-full bg-bg-white rounded-md flex",children:[(0,a.jsxs)("div",{className:"w-1/2 p-2",children:[(0,a.jsx)(i.Z,{type:"subtitle",variant:"primary",text:"Min Side 2.0"}),(0,a.jsx)(i.Z,{type:"caption",text:"Nortura"}),(0,a.jsx)(i.Z,{type:"text",text:"Min Side 2.0 is a large system for Norwegian farmers to aid in operation. I worked as a fullstack developer using React.JS and dotnet."})]}),(0,a.jsx)("div",{className:"w-1/2 bg-[url('../../public/illustrations/cows.jpg')] bg-no-repeat bg-cover rounded-r-md"})]}),(0,a.jsxs)("div",{className:" w-full bg-bg-white rounded-md flex",children:[(0,a.jsxs)("div",{className:"w-1/2 p-2",children:[(0,a.jsx)(i.Z,{type:"subtitle",variant:"primary",text:"Osterham"}),(0,a.jsx)(i.Z,{type:"caption",text:"Viggoman Plays"}),(0,a.jsx)(i.Z,{type:"text",text:"Osterham is a huge Minecraft project building a realistic medieval city"})]}),(0,a.jsx)("div",{className:"w-1/2 bg-[url('../../public/illustrations/Osterham.png')] bg-no-repeat bg-cover rounded-r-md"})]})]}),(0,a.jsx)(c,{label:"certifications"})]})]})}},3595:function(e,t,s){s.r(t),s.d(t,{default:function(){return u}});var a=s(5893),i=s(2448),r=s(7294),n=s(7711),l=s(3721);function c(e){let{children:t,label:s}=e;return(0,a.jsxs)("nav",{className:"flex justify-between p-2 bg-bg-primary shadow-lg mb-4 sticky top-0 z-10",children:[(0,a.jsx)(l.Z,{type:"title",text:s}),(0,a.jsx)("div",{className:"flex items-center gap-3",children:t})]})}var o=s(3785);function x(e){let{variant:t,label:s,icon:i,onClick:r}=e;return(0,a.jsxs)("div",{className:"px-4 py-2 rounded-lg cursor-pointer shadow-md flex flex-row ".concat("primary"==t?"transition ease-in-out delay-150 bg-primary text-secondary hover:bg-primaryhighlight":"bg-secondary border-2 "),onClick:r,children:[s&&(0,a.jsx)("h1",{children:s}),i&&(0,a.jsx)("div",{children:(0,a.jsx)(o.Z,{type:i,variant:"primary"==t?"secondary":"primary"})})]})}var d=s(5052);function u(){let[e,t]=(0,r.useState)(0);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(c,{label:"portfolio",children:[(0,a.jsx)(x,{variant:"primary",onClick:()=>t(0),icon:d.G.profile}),(0,a.jsx)(x,{variant:"primary",onClick:()=>t(1),icon:d.G.experience}),(0,a.jsx)(x,{variant:"primary",onClick:()=>t(2),icon:d.G.contact})]}),(0,a.jsxs)("div",{className:"flex justify-center p-2 h-full",children:[0==e&&(0,a.jsx)(i.default,{}),1==e&&(0,a.jsx)(n.default,{})]})]})}}}]);