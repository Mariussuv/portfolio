(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[81],{3416:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/AboutSection",function(){return s(2448)}])},3785:function(e,t,s){"use strict";s.d(t,{Z:function(){return d}});var a=s(5893),A=s(5052);s(7294);var r=s(5398),i=s(7962),n=s(7507),c=s(7036),l=s(181),o=s(3508),u=s(9572),x=s(6215);function d(e){let{type:t,variant:s="primary"}=e,d="text-".concat(s);switch(t){case A.G.up:return(0,a.jsx)(l.Z,{className:d});case A.G.down:return(0,a.jsx)(o.Z,{className:d});case A.G.left:return(0,a.jsx)(u.Z,{className:d});case A.G.right:return(0,a.jsx)(x.Z,{className:d});case A.G.profile:return(0,a.jsx)(r.Z,{className:d});case A.G.experience:return(0,a.jsx)(i.Z,{className:d});case A.G.contact:return(0,a.jsx)(n.Z,{className:d});default:return(0,a.jsx)(c.Z,{})}}},3721:function(e,t,s){"use strict";s.d(t,{Z:function(){return A}});var a=s(5893);function A(e){let{type:t,text:s,variant:A}=e;switch(t){case"title":return(0,a.jsx)("h1",{className:"font-burtons text-3xl p-2 ".concat("primary"==A?" text-primary":" text-secondary"),children:s});case"subtitle":return(0,a.jsx)("h2",{className:" uppercase text-xl ".concat("primary"==A?" text-primary":" text-secondary"),children:s});case"caption":return(0,a.jsx)("p",{className:" text-sm opacity-60",children:s});default:return(0,a.jsx)("p",{children:s})}}},5052:function(e,t,s){"use strict";var a,A;s.d(t,{G:function(){return a}}),(A=a||(a={}))[A.up=0]="up",A[A.down=1]="down",A[A.left=2]="left",A[A.right=3]="right",A[A.profile=4]="profile",A[A.experience=5]="experience",A[A.contact=6]="contact"},2448:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return f}});var a=s(5893),A=s(3721),r=s(5675),i=s.n(r),n={src:"/_next/static/media/pp.ec9920a2.jpg",height:2412,width:2248,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgABwMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABQEBAQAAAAAAAAAAAAAAAAAAAAH/2gAMAwEAAhADEAAAALQr/8QAHBAAAgICAwAAAAAAAAAAAAAAAgQBAxESAAVS/9oACAEBAAE/AGO8QSYFq/cV7QMAwOSOay0mdfMc/8QAFREBAQAAAAAAAAAAAAAAAAAAABH/2gAIAQIBAT8Aj//EABURAQEAAAAAAAAAAAAAAAAAABEA/9oACAEDAQE/AFv/2Q==",blurWidth:7,blurHeight:8};let c=()=>[{name:"Gaming",url:"https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80"},{name:"Homebrewing",url:"https://images.unsplash.com/photo-1618584386532-f59df5adbbfb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2325&q=80"},{name:"Workout",url:"https://images.unsplash.com/photo-1544033527-b192daee1f5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80"},{name:"Food",url:"https://images.unsplash.com/photo-1577303935007-0d306ee638cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2640&q=80"}];var l=s(7294);function o(e){let{title:t,illustration:s}=e;return(0,a.jsxs)("div",{className:" bg-secondary rounded-lg shadow-sm flex flex-col justify-between max-w-md",children:[(0,a.jsx)("img",{className:" h-40 w-full object-cover rounded-t-md",src:s}),(0,a.jsx)("div",{className:"m-4",children:(0,a.jsx)(A.Z,{type:"subtitle",variant:"primary",text:t})})]})}var u=s(3785),x=s(5052);function d(e){let{hobbies:t}=e,[s,A]=(0,l.useState)(0),r=e=>{let a=s+e;a<0&&(a=t.length-1),a>t.length-1&&(a=0),A(a)};return(0,a.jsxs)("div",{className:"relative",children:[(0,a.jsx)(o,{title:t[s].name,illustration:t[s].url}),(0,a.jsxs)("div",{className:"flex justify-between absolute top-1/2 w-full p-2",children:[(0,a.jsx)("div",{className:" rounded-full bg-bg-white",onClick:()=>r(-1),children:(0,a.jsx)(u.Z,{type:x.G.left,variant:"primary"})}),(0,a.jsx)("div",{className:" rounded-full bg-bg-white",onClick:()=>r(1),children:(0,a.jsx)(u.Z,{type:x.G.right})})]})]})}function f(){let e=c();return(0,a.jsxs)("div",{className:" relative max-w-md w-full",children:[(0,a.jsx)(A.Z,{type:"title",text:"about me",variant:"secondary"}),(0,a.jsxs)("div",{className:" bg-secondary rounded-lg shadow-lg flex justify-between max-w-md p-4 bg-gradient-to-t from-secondary to-bg-white",children:[(0,a.jsxs)("div",{className:"p-2 w-1/2",children:[(0,a.jsx)(A.Z,{type:"subtitle",text:"Marius Suvatne",variant:"primary"}),(0,a.jsx)(A.Z,{type:"caption",text:"Software Developer"}),(0,a.jsx)(A.Z,{type:"text",text:"Marius is a software engineer working for Capgemini Norway. "})]}),(0,a.jsx)("div",{className:" w-1/2 m-4",children:(0,a.jsx)(i(),{className:" rounded-full",src:n,alt:""})})]}),(0,a.jsxs)("div",{className:" absolute w-full bottom-28",children:[(0,a.jsx)(A.Z,{type:"title",text:"things i also enjoy",variant:"secondary"}),(0,a.jsx)(d,{hobbies:e})]})]})}}},function(e){e.O(0,[77,675,774,888,179],function(){return e(e.s=3416)}),_N_E=e.O()}]);