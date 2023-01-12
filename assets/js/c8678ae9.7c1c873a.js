"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[8279],{3905:(e,t,n)=>{n.d(t,{Zo:()=>g,kt:()=>m});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},g=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,g=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=o,d=u["".concat(c,".").concat(m)]||u[m]||p[m]||r;return n?a.createElement(d,i(i({ref:t},g),{},{components:n})):a.createElement(d,i({ref:t},g))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},38610:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(67294),o=n(44996);const r=e=>a.createElement("div",null,a.createElement("p",{align:"center"},a.createElement("figure",null,a.createElement("img",{style:{width:e.width},alt:e.alt,src:(0,o.Z)(e.source)}),a.createElement("figcaption",{class:"image-caption",style:{fontStyle:"italic",opacity:.6,fontSize:"0.9rem"}},e.caption))))},92908:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),o=n(39960);n(44996);const r=()=>a.createElement("span",{className:"in-blog-cta--divider"}," \u2192 "),i=()=>a.createElement("p",{className:"in-blog-cta-link-container"},a.createElement(o.Z,{className:"in-blog-cta--link",to:"https://e44cy1h4s0q.typeform.com/to/ycUzQa5A"},"We are in Beta (try it out)!"),a.createElement(r,null),a.createElement(o.Z,{className:"in-blog-cta--link",to:"https://discord.gg/rzdnErX"},"Join our community"),a.createElement(r,null),a.createElement(o.Z,{className:"in-blog-cta--link",to:"https://wasp-lang.notion.site/Founding-Engineer-at-Wasp-402274568afa4d7eb7f428f8fa2c0816"},"Work with us"))},57980:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var a=n(87462),o=(n(67294),n(3905));n(39960),n(44996),n(92908),n(70589),n(38610);const r={title:"ML code generation vs. coding by hand - what we think programming is going to look like",authors:["matijasos"],image:"/img/language-lifecycle-copilot.png",tags:["webdev","wasp","ML","language"]},i=void 0,l={permalink:"/blog/2022/06/24/ML-code-gen-vs-coding-by-hand-future",editUrl:"https://github.com/wasp-lang/wasp/edit/main/web/blog/blog/2022-06-24-ML-code-gen-vs-coding-by-hand-future.md",source:"@site/blog/2022-06-24-ML-code-gen-vs-coding-by-hand-future.md",title:"ML code generation vs. coding by hand - what we think programming is going to look like",description:"We are working on a config language / DSL for building web apps that integrates with React & Node.js. A number of times we've been asked \u201cWhy are you bothering creating a new language for web app development? Isn\u2019t Github Copilot\\ soon going to be generating all the code for developers anyhow?*\u201d.",date:"2022-06-24T00:00:00.000Z",formattedDate:"June 24, 2022",tags:[{label:"webdev",permalink:"/blog/tags/webdev"},{label:"wasp",permalink:"/blog/tags/wasp"},{label:"ML",permalink:"/blog/tags/ml"},{label:"language",permalink:"/blog/tags/language"}],readingTime:10.975,hasTruncateMarker:!0,authors:[{name:"Matija Sosic",title:"Co-founder & CEO @ Wasp",url:"https://github.com/matijasos",imageURL:"https://github.com/matijasos.png",key:"matijasos"}],frontMatter:{title:"ML code generation vs. coding by hand - what we think programming is going to look like",authors:["matijasos"],image:"/img/language-lifecycle-copilot.png",tags:["webdev","wasp","ML","language"]},prevItem:{title:"How to communicate why your startup is worth joining",permalink:"/blog/2022/08/15/how-to-communicate-why-your-startup-is-worth-joining"},nextItem:{title:"Feature Announcement - Wasp Jobs",permalink:"/blog/2022/06/15/jobs-feature-announcement"}},c={authorsImageUrls:[void 0]},s=[],g={toc:s};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"We are working on a config language / DSL for building web apps that integrates with React & Node.js. A number of times we've been asked \u201c",(0,o.kt)("em",{parentName:"p"},"Why are you bothering creating a new language for web app development? Isn\u2019t Github Copilot","*"," soon going to be generating all the code for developers anyhow?"),"\u201d."),(0,o.kt)("p",null,"This is on our take on the situation and what we think things might look like in the future."))}p.isMDXComponent=!0},70589:(e,t,n)=>{n.d(t,{ZP:()=>i});var a=n(87462),o=(n(67294),n(3905));const r={toc:[]};function i(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},r,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Wasp is a configuration language (DSL) for building full-stack web apps with less code and best practices that works alongside React and Node.js. We are on a mission to streamline web app development while empowering developers to continue using the power of code and their favorite tools. We are backed by Y Combinator and engineers from Airbnb, Facebook, and Lyft.")))}i.isMDXComponent=!0}}]);