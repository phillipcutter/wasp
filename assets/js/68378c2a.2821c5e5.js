(self.webpackChunkweb=self.webpackChunkweb||[]).push([[4767],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),d=o,m=p["".concat(l,".").concat(d)]||p[d]||h[d]||i;return n?a.createElement(m,r(r({ref:t},u),{},{components:n})):a.createElement(m,r({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var c=2;c<i;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8610:function(e,t,n){"use strict";var a=n(7294),o=n(4996);t.Z=function(e){return a.createElement("div",null,a.createElement("p",{align:"center"},a.createElement("figure",null,a.createElement("img",{alt:e.alt,src:(0,o.Z)(e.source)}),a.createElement("figcaption",{class:"image-caption"},e.caption))))}},2908:function(e,t,n){"use strict";var a=n(7294),o=n(6742),i=(n(4996),function(){return a.createElement("span",{className:"in-blog-cta--divider"}," \u2192 ")});t.Z=function(){return a.createElement("p",null,a.createElement(o.Z,{className:"in-blog-cta--link",to:"https://e44cy1h4s0q.typeform.com/to/ycUzQa5A"},"We are in Alpha (try it out)!"),a.createElement(i,null),a.createElement(o.Z,{className:"in-blog-cta--link",to:"https://discord.gg/rzdnErX"},"Join our community"),a.createElement(i,null),a.createElement(o.Z,{className:"in-blog-cta--link",to:"https://wasp-lang.notion.site/Founding-Engineer-at-Wasp-402274568afa4d7eb7f428f8fa2c0816"},"Work with us"))}},6742:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var a=n(9756),o=n(7294),i=n(3727),r=n(2263),s=n(3919),l=n(412),c=(0,o.createContext)({collectLink:function(){}}),u=n(4996),h=n(8780),p=["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"];var d=function(e){var t,n,d=e.isNavLink,m=e.to,f=e.href,g=e.activeClassName,w=e.isActive,b=e["data-noBrokenLinkCheck"],k=e.autoAddBaseUrl,y=void 0===k||k,v=(0,a.Z)(e,p),N=(0,r.Z)().siteConfig,j=N.trailingSlash,C=N.baseUrl,x=(0,u.C)().withBaseUrl,T=(0,o.useContext)(c),I=m||f,E=(0,s.Z)(I),W=null==I?void 0:I.replace("pathname://",""),P=void 0!==W?(n=W,y&&function(e){return e.startsWith("/")}(n)?x(n):n):void 0;P&&E&&(P=(0,h.applyTrailingSlash)(P,{trailingSlash:j,baseUrl:C}));var O,M=(0,o.useRef)(!1),S=d?i.OL:i.rU,A=l.Z.canUseIntersectionObserver;(0,o.useEffect)((function(){return!A&&E&&null!=P&&window.docusaurus.prefetch(P),function(){A&&O&&O.disconnect()}}),[P,A,E]);var L=null!==(t=null==P?void 0:P.startsWith("#"))&&void 0!==t&&t,D=!P||!E||L;return P&&E&&!L&&!b&&T.collectLink(P),D?o.createElement("a",Object.assign({href:P},I&&!E&&{target:"_blank",rel:"noopener noreferrer"},v)):o.createElement(S,Object.assign({},v,{onMouseEnter:function(){M.current||null==P||(window.docusaurus.preload(P),M.current=!0)},innerRef:function(e){var t,n;A&&e&&E&&(t=e,n=function(){null!=P&&window.docusaurus.prefetch(P)},(O=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(O.unobserve(t),O.disconnect(),n())}))}))).observe(t))},to:P||""},d&&{isActive:w,activeClassName:g}))}},3919:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!a(e)}n.d(t,{b:function(){return a},Z:function(){return o}})},4996:function(e,t,n){"use strict";n.d(t,{C:function(){return i},Z:function(){return r}});var a=n(2263),o=n(3919);function i(){var e=(0,a.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var i=void 0===a?{}:a,r=i.forcePrependBaseUrl,s=void 0!==r&&r,l=i.absolute,c=void 0!==l&&l;if(!n)return n;if(n.startsWith("#"))return n;if((0,o.b)(n))return n;if(s)return t+n;var u=n.startsWith(t)?n:t+n.replace(/^\//,"");return c?e+u:u}(i,n,e,t)}}}function r(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},8802:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=t.trailingSlash,a=t.baseUrl;if(e.startsWith("#"))return e;if(void 0===n)return e;var o,i=e.split(/[#?]/)[0],r="/"===i||i===a?i:(o=i,n?function(e){return e.endsWith("/")?e:e+"/"}(o):function(e){return e.endsWith("/")?e.slice(0,-1):e}(o));return e.replace(i,r)}},8780:function(e,t,n){"use strict";var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var o=n(8802);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return a(o).default}});var i=n(9964);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return a(i).default}})},9964:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},9873:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return u},assets:function(){return h},toc:function(){return p},default:function(){return m}});var a=n(2122),o=n(9756),i=(n(7294),n(3905)),r=(n(6742),n(4996),n(2908),n(589),n(8610)),s=["components"],l={title:"ML code generation vs coding by hand - a hypothesis of the future",authors:["matijasos"],image:"/img/language-lifecycle-copilot.png",tags:["webdev","wasp","ML","language"]},c=void 0,u={permalink:"/blog/2022/06/24/ML-code-gen-vs-coding-by-hand-future",editUrl:"https://github.com/wasp-lang/wasp/edit/main/web/blog/blog/2022-06-24-ML-code-gen-vs-coding-by-hand-future.md",source:"@site/blog/2022-06-24-ML-code-gen-vs-coding-by-hand-future.md",title:"ML code generation vs coding by hand - a hypothesis of the future",description:"Language lifecycle",date:"2022-06-24T00:00:00.000Z",formattedDate:"June 24, 2022",tags:[{label:"webdev",permalink:"/blog/tags/webdev"},{label:"wasp",permalink:"/blog/tags/wasp"},{label:"ML",permalink:"/blog/tags/ml"},{label:"language",permalink:"/blog/tags/language"}],readingTime:11.535,truncated:!0,authors:[{name:"Matija Sosic",title:"Co-founder & CEO @ Wasp",url:"https://github.com/matijasos",imageURL:"https://github.com/matijasos.png",key:"matijasos"}],nextItem:{title:"Feature Release Announcement - Wasp Jobs",permalink:"/blog/2022/06/15/jobs-feature-announcement"}},h={authorsImageUrls:[void 0]},p=[{value:"Why (ML) code generation?",id:"why-ml-code-generation",children:[]},{value:"The cake is a lie** - who maintains the code once it\u2019s generated?",id:"the-cake-is-a-lie---who-maintains-the-code-once-its-generated",children:[]},{value:"Meet the big A - Abstraction \ud83d\udc46",id:"meet-the-big-a---abstraction-",children:[]},{value:"But my beautiful generated codez \ud83d\ude3f\ud83d\udcbb! What happens with it then?",id:"but-my-beautiful-generated-codez--what-happens-with-it-then",children:[]},{value:"Conclusion",id:"conclusion",children:[{value:"Writing that informed this post",id:"writing-that-informed-this-post",children:[]},{value:"Thanks to the reviewers",id:"thanks-to-the-reviewers",children:[]}]}],d={toc:p};function m(e){var t=e.components,l=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Language lifecycle",src:n(9847).Z})),(0,i.kt)("p",null,"We are working on a config language / DSL for building web apps that integrates with React & Node.js. A number of potential investors and some users asked us \u201c",(0,i.kt)("em",{parentName:"p"},"Why are you bothering creating a new language for web app development? Isn\u2019t Github Copilot","*"," soon going to be generating all the code for you?"),"\u201d."),(0,i.kt)("p",null,"This is on our take on the situation and what we think things might look like in the future."),(0,i.kt)("h2",{id:"why-ml-code-generation"},"Why (ML) code generation?"),(0,i.kt)("p",null,"In order to make development faster, we came up with IDE autocompletion - e.g. if you are using React and start typing ",(0,i.kt)("inlineCode",{parentName:"p"},"componentDid"),", IDE will automatically offer to complete it to ",(0,i.kt)("inlineCode",{parentName:"p"},"componentDidMount()")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"componentDidLoad()"),". Besides saving keystrokes, maybe even more valuable is being able to see what methods/properties are available to us within a current scope. IDE being aware of the project structure and code hierarchy also makes refactoring much easier."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Although that\u2019s already great, how do we take it to the next level?")," Traditional IDE support is based on rules written by humans and if we e.g. wanted to make IDE capable of implementing common functions for us, there would be just too many of them to catalogize and maintain by hand."),(0,i.kt)("p",null,"If there was only a way for a computer to analyze all the code we\u2019ve written so far and learn by itself how to autocomplete our code and what to do about humanity in general, instead of us doing all the hard work - oh, wait, ..."),(0,i.kt)(r.Z,{alt:"The cake is a lie",source:"img/portal-cake.jpg",caption:"What? Everybody likes a nice piece of cake, that\u2019s a well known fact about humans. Especially when it has cherries on top.",mdxType:"ImgWithCaption"}),(0,i.kt)("p",null,"Delicious and moist cake aside, we actually have this working! IDEs can now do some really cool things like proposing the full implementation of a function, based on its name and the accompanying comments:"),(0,i.kt)(r.Z,{alt:"Copilot example - text sentiment",source:"img/copilot-example-sentiment.gif",caption:"GitHub Copilot generating a whole function based on the comments and its signature",mdxType:"ImgWithCaption"}),(0,i.kt)("p",null,"This is pretty amazing! The example above is powered by ",(0,i.kt)("a",{parentName:"p",href:"https://copilot.github.com/"},"Github Copilot")," - it\u2019s essentially a neural network trained on a huge amount of publicly available code. I will not get into the technical details of how it works under the hood, but there are ",(0,i.kt)("a",{parentName:"p",href:"https://betterprogramming.pub/ai-review-github-copilot-d43afde51a5a#:~:text=They%20fine%2Dtuned%20the%20Codex,code%20it's%20been%20trained%20on."},"a lot")," ",(0,i.kt)("a",{parentName:"p",href:"https://www.fast.ai/2021/07/19/copilot/"},"of great")," ",(0,i.kt)("a",{parentName:"p",href:"https://arxiv.org/abs/2107.03374"},"articles")," covering the science behind it."),(0,i.kt)("p",null,"Seeing this, questions arise - what does this mean for the future of programming? Is this just IDE autocompletion on steroids or something more? Do we need to keep bothering with manually writing code, if we can just type in the comments what we want and that\u2019s it?"),(0,i.kt)(r.Z,{alt:"PMs learn about GitHub Copilot",source:"img/pms-learn-about-github-copilot.jpg",caption:"I knew it - those pesky developers will hear from me! (\u201ccutting all estimates in half\u201d)",mdxType:"ImgWithCaption"}),(0,i.kt)("h2",{id:"the-cake-is-a-lie---who-maintains-the-code-once-its-generated"},"The cake is a lie** - who maintains the code once it\u2019s generated?"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"**a reference to ",(0,i.kt)("a",{parentName:"em",href:"https://en.wikipedia.org/wiki/Portal_(video_game)"},"Portal"),", a famous video game where AI conducts experiments on humans while pretending to be well-intended and promising them a cake if they follow through. The AI eventually ends up embedded in a potato.")," "),(0,i.kt)("p",null,"When thinking about how ML code generation affects the overall development process, there is one thing to consider that often doesn\u2019t immediately spring to mind when looking at the awesome Copilot examples."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"For the purposes of this post, I will not delve into the questions of code quality, ",(0,i.kt)("a",{parentName:"p",href:"https://www.theinsaneapp.com/2021/09/github-copilot-generated-40-percent-insecure-code.html"},"security"),", ",(0,i.kt)("a",{parentName:"p",href:"https://fosspost.org/github-copilot/"},"legal & privacy issues"),", pricing, and others of similar character that are often brought up in these early days of ML code generation. Let\u2019s just assume all this is sorted out and see what happens next."))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"The question is - what happens with the code once it is generated? Who is responsible for it and who will maintain and refactor it in the future?")),(0,i.kt)(r.Z,{alt:"Devs still need to maintain generated code",source:"img/always-has-been-copilot.png",caption:"PM shrieking indiscernibly in the corner (\u201dfiring up Jira to revert all the cut estimates\u201d)",mdxType:"ImgWithCaption"}),(0,i.kt)("p",null,"Although ML code generation helps with getting the initial code written, it cannot do much beyond that - if that code is to be maintained and changed in the future (and if anyone uses it, it is), the developer still needs to fully own and understand it."),(0,i.kt)("p",null,"Imagine all we had was an assembly language, but IDE completion worked really well for it, and you could say \u201cimplement a function that sorts an array, ascending\u201d and it would produce the required code perfectly. Would that still be something you\u2019d like to return to in the future when you need to change your sort to descending \ud83d\ude05\xa0? "),(0,i.kt)("p",null,"In other words, it means Copilot and similar solutions do not reduce the code complexity nor the amount of knowledge required to build features, they just help write the initial code faster, and bring the knowledge/examples closer to the code (which is really helpful). If a developer accepts the generated code blindly, they are just creating tech debt and pushing it forward."),(0,i.kt)("h2",{id:"meet-the-big-a---abstraction-"},"Meet the big A - Abstraction \ud83d\udc46"),(0,i.kt)("p",null,"If Github Copilot and others cannot solve all our troubles of learning how to code and understanding in detail how session management via JWT works, what can? "),(0,i.kt)("p",null,"Abstraction - that\u2019s how programmers have been dealing with the code repetition and reducing complexity for decades - by creating libraries, frameworks, and languages. It is how we advanced from vanilla JS and direct DOM manipulation to jQuery and finally to UI libraries such as React and Vue."),(0,i.kt)("p",null,"Introducing abstractions inevitably means giving up on a certain amount of power and flexibility (e.g. when summing numbers in Python you don\u2019t get to exactly specify which CPU registers are going to be used for it), but the point is that, if done right, you don\u2019t need nor want such power in the majority of the cases."),(0,i.kt)(r.Z,{alt:"Abstraction equals less responsibility",source:"img/uncle-ben-great-power.jpg",caption:"What Uncle Ben actually meant: avoiding responsibility is the main benefit of abstraction! (Peter totally missed the point, unfortunately, and became Spiderman instead of learning how to code)",mdxType:"ImgWithCaption"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"The only way not to be responsible for a piece of code is that it doesn\u2019t exist in the first place"),". "),(0,i.kt)("p",null,"Because as soon as pixels on the screen change their color it\u2019s something you have to worry about, and that is why the main benefit of all the frameworks, languages, etc. is ",(0,i.kt)("em",{parentName:"p"},"less code")," == ",(0,i.kt)("em",{parentName:"p"},"less decisions")," == ",(0,i.kt)("em",{parentName:"p"},"less responsibility.")),(0,i.kt)("p",null,"The only way to have less code is to make less decisions and provide fewer details to the computer on how to do a certain task - ideally, we\u2019d just state what we want and we wouldn\u2019t even care about how it is done, as long as it\u2019s within the time/memory/cost boundaries we have (so we might need to state those as well)."),(0,i.kt)("p",null,"Let\u2019s take a look at the very common (and everyone\u2019s favorite) feature in the world of web apps - authentication (yaay \u2620\ufe0f\xa0\ud83d\udd2b)! The typical code for it will look something like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Auth on the backend in Node.js - example"',title:'"Auth',on:!0,the:!0,backend:!0,in:!0,"Node.js":!0,"-":!0,'example"':!0},"import jwt from 'jsonwebtoken'\nimport SecurePassword from 'secure-password'\nimport util from 'util'\n\nimport prisma from '../dbClient.js'\nimport { handleRejection } from '../utils.js'\nimport config from '../config.js'\n\nconst jwtSign = util.promisify(jwt.sign)\nconst jwtVerify = util.promisify(jwt.verify)\n\nconst JWT_SECRET = config.auth.jwtSecret\n\nexport const sign = (id, options) => jwtSign({ id }, JWT_SECRET, options)\nexport const verify = (token) => jwtVerify(token, JWT_SECRET)\n\nconst auth = handleRejection(async (req, res, next) => {\n  const authHeader = req.get('Authorization')\n  if (!authHeader) {\n    return next()\n  }\n\n  if (authHeader.startsWith('Bearer ')) {\n    const token = authHeader.substring(7, authHeader.length)\n\n    let userIdFromToken\n    try {\n      userIdFromToken = (await verify(token)).id\n    } catch (error) {\n      if (['TokenExpiredError', 'JsonWebTokenError', 'NotBeforeError'].includes(error.name)) {\n        return res.status(401).send()\n      } else {\n        throw error\n      }\n    }\n\n    const user = await prisma.user.findUnique({ where: { id: userIdFromToken } })\n    if (!user) {\n      return res.status(401).send()\n    }\n\n    const { password, ...userView } = user\n\n    req.user = userView\n  } else {\n    return res.status(401).send()\n  }\n\n  next()\n})\n\nconst SP = new SecurePassword()\n\nexport const hashPassword = async (password) => {\n  const hashedPwdBuffer = await SP.hash(Buffer.from(password))\n  return hashedPwdBuffer.toString(\"base64\")\n}\n\nexport const verifyPassword = async (hashedPassword, password) => {\n  try {\n    return await SP.verify(Buffer.from(password), Buffer.from(hashedPassword, \"base64\"))\n  } catch (error) {\n    console.error(error)\n    return false\n  }\n}\n")),(0,i.kt)("p",null,"And this is just a portion of the backend code (and for the email & password method only)! As you can see, we have quite a lot of flexibility here and get to do/specify things like:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"choose the implementation method for auth (e.g. session or JWT-based)"),(0,i.kt)("li",{parentName:"ul"},"choose the exact npm packages we want to use for the token (if going with JWT) and password management"),(0,i.kt)("li",{parentName:"ul"},"parse the auth header and specify for each value (",(0,i.kt)("inlineCode",{parentName:"li"},"Authorization"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"Bearer"),", \u2026) how to respond"),(0,i.kt)("li",{parentName:"ul"},"choose the return code (e.g. 401, 403) for each possible outcome"),(0,i.kt)("li",{parentName:"ul"},"choose how the password is decoded/encoded (base64)")),(0,i.kt)("p",null,"On one hand, it\u2019s really cool to have that level of control and flexibility in our code, but on the other hand, it\u2019s quite a lot of decisions (== mistakes) to be made, especially for something as common as authentication!"),(0,i.kt)("p",null,"If somebody later asks \u201c",(0,i.kt)("em",{parentName:"p"},"so why exactly did you choose secure-password npm package, or why exactly base64 encoding?"),"\u201d it\u2019s something we should probably answer with something else rather than \u201c",(0,i.kt)("em",{parentName:"p"},"well, there was that SO post from 2012 that seemed pretty legit, it had almost 50 upvotes. Hmm, can\u2019t find it now though. Plus, it has \u2018secure\u2019 in the name, that sounds good, right?"),"\u201d"),(0,i.kt)("p",null,"Another thing to keep in mind is that we should also track how things change over time, and make sure that after a couple of years we\u2019re still using the best practices and that the packages are regularly updated."),(0,i.kt)(r.Z,{alt:"Making decisions",source:"img/sweating.gif",caption:"Everything is fine (still looking for that SO post from 2012)",mdxType:"ImgWithCaption"}),(0,i.kt)("p",null,"If we try to apply the principles from above (less code, less detailed instructions, stating ",(0,i.kt)("strong",{parentName:"p"},"what")," we want instead of ",(0,i.kt)("strong",{parentName:"p"},"how")," it needs to be done), the code for auth might look something like this: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-css"},'auth: {\n    userEntity: User,\n    methods: [ EmailAndPassword, LinkedIn, Google ],\n    onAuthFailedRedirectTo: "/login",\n    onAuthSucceededRedirectTo: "/dashboard"\n  }\n')),(0,i.kt)("p",null,"Based on this, the computer/compiler could take care of all the stuff mentioned above, and then depending on the level of abstraction, provide some sort of interface (e.g. form components, or functions) to \u201chook\u201d in with our own e.g. React/Node.js code (btw this is how it actually ",(0,i.kt)("a",{parentName:"p",href:"/docs/language/features#authentication--authorization"},"works in Wasp"),")."),(0,i.kt)("p",null,"We don\u2019t need to care what exact packages or encryption methods are used beneath the hood - it is the responsibility we trust with the authors and maintainers of the abstraction layer, just like we trust that Python knows the best how to sum two numbers on the assembly level and that it is kept in sync with the latest advancements in the field. The same happens when we rely on the built-in data structures or count on the garbage collector to manage our program\u2019s memory well."),(0,i.kt)("h2",{id:"but-my-beautiful-generated-codez--what-happens-with-it-then"},"But my beautiful generated codez \ud83d\ude3f\ud83d\udcbb! What happens with it then?"),(0,i.kt)("p",null,"Don\u2019t worry, it\u2019s all still here and you can generate all the code you wish! The main point to understand here is that ML code generation and framework/language development complement rather than replace each other and are here to stay, which is ultimately a huge win for the developer community - they will keep making our lives easier and allow us to do more fun stuff (instead of implementing auth or CRUD API for the n-th time)!"),(0,i.kt)("p",null,"I see the evolution here as a cycle (or an upward spiral in fact, but that\u2019s beyond my drawing capabilities):"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"language/framework exists"),", is mainstream, and a lot of people use it"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"patterns start emerging")," (e.g. implementing auth, or making an API call) \u2192 ML captures them, offers via autocomplete"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"some of those patterns mature")," and become stable \u2192 candidates for abstraction"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"new, more abstract, language/framework")," emerges"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"back to step 1"),".")),(0,i.kt)(r.Z,{alt:"Language evolution lifecycle",source:"img/language-lifecycle-copilot.png",caption:"It\u2019s the circle of (language) life, and it moves us all - Ingonyama nengw' enamabala, \u2026",mdxType:"ImgWithCaption"}),(0,i.kt)("h2",{id:"conclusion"},"Conclusion"),(0,i.kt)("p",null,"This means we are winning on both sides - when the language is mainstream we can benefit from ML code generation, helping us write the code faster. On the other hand, when the patterns of code we don\u2019t want to repeat/deal with emerge and become stable we get a whole new language or framework that allows us to write even less code and care about fewer implementation details!"),(0,i.kt)(r.Z,{alt:"Fizz Buzz with Copilot - stop",source:"img/fizz-buzz-copilot-stop.gif",caption:"The future is now, old man.",mdxType:"ImgWithCaption"}),(0,i.kt)("p",null,"*",(0,i.kt)("em",{parentName:"p"},"Not to be biased, there are also other solutions offering similar functionality - e.g. ",(0,i.kt)("a",{parentName:"em",href:"https://www.tabnine.com/"},"TabNine"),", ",(0,i.kt)("a",{parentName:"em",href:"https://www.jetbrains.com/help/webstorm/auto-completing-code.html#ml_completion"},"Webstorm has its own"),", ",(0,i.kt)("a",{parentName:"em",href:"https://www.kite.com/"},"Kite"),", ",(0,i.kt)("a",{parentName:"em",href:"https://github.com/CodedotAl/gpt-code-clippy"},"GPT Code Clippy (OSS attempt)")," et al., but Github Copilot recently made the biggest splash.")),(0,i.kt)("h3",{id:"writing-that-informed-this-post"},"Writing that informed this post"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.fast.ai/2021/07/19/copilot/"},"Is GitHub Copilot a blessing, or a curse? (fast.ai)")," - an objective and extremely well-written overview of GitHub Copilot with real-world examples"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://betterprogramming.pub/6-reasons-why-you-should-avoid-github-copilot-and-fly-solo-instead-8a948665433f"},"6 Reasons Why You Should Avoid GitHub Copilot and \u201cFly Solo\u201d Instead")," - brings up and questions the potential downsides of ML code generation and Github Copilot"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://dagshub.com/blog/github-copilot-not-code/"},"Github Copilot Wants to Play Chess Instead of Code")," - a fresh approach to GitHub Copilot where it is used as a conversation partner instead of writing code!"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://jessmart.in/articles/copilot"},"Conversational Programming"),' - a forward looking post that proposes a future where AI will serve as a "sparring partner" and help us reach the optimal solutions through iterations, instead of programmer doing all the work by themself.')),(0,i.kt)("h3",{id:"thanks-to-the-reviewers"},"Thanks to the reviewers"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://twitter.com/jeremyphoward"},"Jeremy Howard"),", ",(0,i.kt)("a",{parentName:"p",href:"https://twitter.com/mcsee1"},"Maxi Contieri"),", ",(0,i.kt)("a",{parentName:"p",href:"https://twitter.com/mariokostelac"},"Mario Kostelac"),", ",(0,i.kt)("a",{parentName:"p",href:"https://twitter.com/vladblagoje"},"Vladimir Blagojevic"),", ",(0,i.kt)("a",{parentName:"p",href:"https://twitter.com/idonov8"},"Ido Nov"),", ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/izikeros"},"Krystian Safjan"),", ",(0,i.kt)("a",{parentName:"p",href:"https://twitter.com/fakela6"},"Favour Kelvin"),", ",(0,i.kt)("a",{parentName:"p",href:"https://twitter.com/filipsodic"},"Filip Sodic"),", ",(0,i.kt)("a",{parentName:"p",href:"https://twitter.com/shayneczyzewski"},"Shayne Czyzewski")," and ",(0,i.kt)("a",{parentName:"p",href:"https://twitter.com/MartinSosic"},"Martin Sosic")," - thank you for your generous comments, ideas and suggestions! You made this post better and made sure I don't go overboard with memes :)."))}m.isMDXComponent=!0},589:function(e,t,n){"use strict";n.d(t,{ZP:function(){return l}});var a=n(2122),o=n(9756),i=(n(7294),n(3905)),r=["components"],s={toc:[]};function l(e){var t=e.components,n=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Wasp is a configuration language (DSL) for building full-stack web apps with less code and best practices that works alongside React and Node.js. We are on a mission to streamline web app development while empowering developers to continue using the power of code and their favorite tools. We are backed by Y Combinator and engineers from Airbnb, Facebook, and Lyft.")))}l.isMDXComponent=!0},9847:function(e,t,n){"use strict";t.Z=n.p+"assets/images/language-lifecycle-copilot-1ac79f130ce752bbf27cdc26b103b0dc.png"}}]);