(self.webpackChunkweb=self.webpackChunkweb||[]).push([[6634],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=i,h=d["".concat(c,".").concat(m)]||d[m]||u[m]||r;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<r;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3919:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!a(e)}n.d(t,{b:function(){return a},Z:function(){return i}})},4996:function(e,t,n){"use strict";n.d(t,{C:function(){return r},Z:function(){return o}});var a=n(2263),i=n(3919);function r(){var e=(0,a.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,r=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var r=void 0===a?{}:a,o=r.forcePrependBaseUrl,s=void 0!==o&&o,c=r.absolute,l=void 0!==c&&c;if(!n)return n;if(n.startsWith("#"))return n;if((0,i.b)(n))return n;if(s)return t+n;var p=n.startsWith(t)?n:t+n.replace(/^\//,"");return l?e+p:p}(r,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,r().withBaseUrl)(e,t)}},3299:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return u},default:function(){return m}});var a=n(2122),i=n(9756),r=(n(7294),n(3905)),o=n(4996),s=["components"],c={title:"Creating tasks"},l=void 0,p={unversionedId:"tutorials/todo-app/creating-tasks",id:"tutorials/todo-app/creating-tasks",isDocsHomePage:!1,title:"Creating tasks",description:"To enable the creation of new tasks, we will need two things:",source:"@site/docs/tutorials/todo-app/creating-tasks.md",sourceDirName:"tutorials/todo-app",slug:"/tutorials/todo-app/creating-tasks",permalink:"/docs/tutorials/todo-app/creating-tasks",editUrl:"https://github.com/wasp-lang/wasp/edit/main/web/docs/tutorials/todo-app/creating-tasks.md",tags:[],version:"current",frontMatter:{title:"Creating tasks"},sidebar:"docs",previous:{title:"Listing tasks",permalink:"/docs/tutorials/todo-app/listing-tasks"},next:{title:"Updating tasks",permalink:"/docs/tutorials/todo-app/updating-tasks"}},u=[{value:"Action",id:"action",children:[{value:"Wasp declaration",id:"wasp-declaration",children:[]},{value:"JS implementation",id:"js-implementation",children:[]}]},{value:"React form",id:"react-form",children:[]},{value:"Side note: Automatic invalidation/updating of queries",id:"side-note-automatic-invalidationupdating-of-queries",children:[]}],d={toc:u};function m(e){var t=e.components,n=(0,i.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"To enable the creation of new tasks, we will need two things:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"a Wasp action that creates a new task."),(0,r.kt)("li",{parentName:"ol"},"a React form that calls that action with the new task's data.")),(0,r.kt)("h2",{id:"action"},"Action"),(0,r.kt)("p",null,"Creating an action is very similar to creating a query."),(0,r.kt)("h3",{id:"wasp-declaration"},"Wasp declaration"),(0,r.kt)("p",null,"First we declare the action in Wasp:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c",metastring:'title="main.wasp"',title:'"main.wasp"'},'// ...\n\naction createTask {\n  fn: import { createTask } from "@ext/actions.js",\n  entities: [Task]\n}\n')),(0,r.kt)("h3",{id:"js-implementation"},"JS implementation"),(0,r.kt)("p",null,"Next, we define a JS function for that action:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="ext/actions.js"',title:'"ext/actions.js"'},"export const createTask = async (args, context) => {\n  return context.entities.Task.create({\n    data: { description: args.description }\n  })\n}\n")),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"We put the JS function in a new file ",(0,r.kt)("inlineCode",{parentName:"p"},"ext/actions.js"),", but we could have put it anywhere we wanted! There are no limitations here, as long as the import statement in the Wasp file is correct and it is inside the ",(0,r.kt)("inlineCode",{parentName:"p"},"ext/")," dir."))),(0,r.kt)("h2",{id:"react-form"},"React form"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'{5,12,39-61} title="ext/MainPage.js"',"{5,12,39-61}":!0,title:'"ext/MainPage.js"'},"import React from 'react'\n\nimport { useQuery } from '@wasp/queries'\nimport getTasks from '@wasp/queries/getTasks'\nimport createTask from '@wasp/actions/createTask'\n\nconst MainPage = () => {\n  const { data: tasks, isFetching, error } = useQuery(getTasks)\n\n  return (\n    <div>\n      <NewTaskForm />\n\n      {tasks && <TasksList tasks={tasks} />}\n\n      {isFetching && 'Fetching...'}\n      {error && 'Error: ' + error}\n    </div>\n  )\n}\n\nconst Task = (props) => {\n  return (\n    <div>\n      <input\n        type='checkbox' id={props.task.id}\n        checked={props.task.isDone} readonly\n      />\n      {props.task.description}\n    </div>\n  )\n}\n\nconst TasksList = (props) => {\n  if (!props.tasks?.length) return 'No tasks'\n  return props.tasks.map((task, idx) => <Task task={task} key={idx} />)\n}\n\nconst NewTaskForm = (props) => {\n  const handleSubmit = async (event) => {\n    event.preventDefault()\n    try {\n      const description = event.target.description.value\n      event.target.reset()\n      await createTask({ description })\n    } catch (err) {\n      window.alert('Error: ' + err.message)\n    }\n  }\n\n  return (\n    <form onSubmit={handleSubmit}>\n      <input\n        name='description'\n        type='text'\n        defaultValue=''\n      />\n      <input type='submit' value='Create task' />\n    </form>\n  )\n}\n\nexport default MainPage\n")),(0,r.kt)("p",null,"Here we call our action directly (no hooks) because we don't need any reactivity. The rest is just regular React code."),(0,r.kt)("p",null,"That's it!\nTry creating a \"Build a Todo App in Wasp\" task and see it appear in the list below.\nThe task is created on the server and also saved in the database. Try refreshing the page or opening it in another browser - you'll see the tasks are still here!"),(0,r.kt)("img",{alt:"Todo App - creating new task",src:(0,o.Z)("img/todo-app-new-task.png"),style:{border:"1px solid black"}}),(0,r.kt)("h2",{id:"side-note-automatic-invalidationupdating-of-queries"},"Side note: Automatic invalidation/updating of queries"),(0,r.kt)("p",null,"You will notice that when you create a new task, the list of tasks is automatically updated with that new task, although we have written no code to take care of that! Normally, you would have to do this explicitly, e.g. with ",(0,r.kt)("inlineCode",{parentName:"p"},"react-query")," you would invalidate the ",(0,r.kt)("inlineCode",{parentName:"p"},"getTasks")," query via its key, or would call its ",(0,r.kt)("inlineCode",{parentName:"p"},"refetch()")," method."),(0,r.kt)("p",null,"The reason why the ",(0,r.kt)("inlineCode",{parentName:"p"},"getTasks")," query automatically updates when the ",(0,r.kt)("inlineCode",{parentName:"p"},"createTask")," action is executed is because Wasp is aware that both of them are working with the ",(0,r.kt)("inlineCode",{parentName:"p"},"Task")," entity, and therefore assumes that action that operates on ",(0,r.kt)("inlineCode",{parentName:"p"},"Task")," (in this case ",(0,r.kt)("inlineCode",{parentName:"p"},"createTask"),") might have changed the result of the ",(0,r.kt)("inlineCode",{parentName:"p"},"getTasks")," query. Therefore, in the background, Wasp nudges the ",(0,r.kt)("inlineCode",{parentName:"p"},"getTasks")," query to update. This means that ",(0,r.kt)("strong",{parentName:"p"},"out of the box, Wasp will make sure that all your queries that deal with entities are always in sync with any changes that the actions might have done"),"."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"While this kind of approach to automatic invalidation of queries is very convenient, it is in some situations wasteful and could become a performance bottleneck as an app grows. In that case, you will be able to override this default behaviour and instead provide more detailed (and performant) instructions on how the specific action should affect queries. This is not yet implemented, but is something we plan to do and you can track the progress ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/wasp-lang/wasp/issues/63"},"here")," (or even contribute!)."))))}m.isMDXComponent=!0}}]);