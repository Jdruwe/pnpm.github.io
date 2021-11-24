"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5909],{9613:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>c});var a=n(9496);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,l=function(t,e){if(null==t)return{};var n,a,l={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var m=a.createContext({}),o=function(t){var e=a.useContext(m),n=e;return t&&(n="function"==typeof t?t(e):p(p({},e),t)),n},d=function(t){var e=o(t.components);return a.createElement(m.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},s=a.forwardRef((function(t,e){var n=t.components,l=t.mdxType,r=t.originalType,m=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),s=o(n),c=l,k=s["".concat(m,".").concat(c)]||s[c]||u[c]||r;return n?a.createElement(k,p(p({ref:e},d),{},{components:n})):a.createElement(k,p({ref:e},d))}));function c(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=n.length,p=new Array(r);p[0]=s;var i={};for(var m in e)hasOwnProperty.call(e,m)&&(i[m]=e[m]);i.originalType=t,i.mdxType="string"==typeof t?t:l,p[1]=i;for(var o=2;o<r;o++)p[o]=n[o];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},306:(t,e,n)=>{n.r(e),n.d(e,{frontMatter:()=>i,contentTitle:()=>m,metadata:()=>o,toc:()=>d,default:()=>s});var a=n(2245),l=n(5903),r=(n(9496),n(9613)),p=["components"],i={id:"installation",title:"\u5b89\u88c5"},m=void 0,o={unversionedId:"installation",id:"version-6.x/installation",isDocsHomePage:!1,title:"\u5b89\u88c5",description:"\u4f7f\u7528\u72ec\u7acb\u811a\u672c",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-6.x/installation.md",sourceDirName:".",slug:"/installation",permalink:"/zh/installation",editUrl:"https://crowdin.com/project/pnpm/zh-CN",tags:[],version:"6.x",frontMatter:{id:"installation",title:"\u5b89\u88c5"},sidebar:"version-6.x/docs",previous:{title:"\u9879\u76ee\u521d\u8877",permalink:"/zh/motivation"},next:{title:"pnpm CLI",permalink:"/zh/pnpm-cli"}},d=[{value:"\u4f7f\u7528\u72ec\u7acb\u811a\u672c",id:"\u4f7f\u7528\u72ec\u7acb\u811a\u672c",children:[{value:"\u672a\u9884\u88c5 Node.js",id:"\u672a\u9884\u88c5-nodejs",children:[],level:3},{value:"\u5df2\u9884\u88c5 Node.js",id:"\u5df2\u9884\u88c5-nodejs",children:[],level:3}],level:2},{value:"\u4f7f\u7528 Corepack",id:"\u4f7f\u7528-corepack",children:[],level:2},{value:"\u901a\u8fc7 npm \u5b89\u88c5",id:"\u901a\u8fc7-npm-\u5b89\u88c5",children:[],level:2},{value:"\u901a\u8fc7 npx \u5b89\u88c5",id:"\u901a\u8fc7-npx-\u5b89\u88c5",children:[],level:2},{value:"\u5347\u7ea7",id:"\u5347\u7ea7",children:[],level:2},{value:"\u517c\u5bb9\u6027",id:"\u517c\u5bb9\u6027",children:[],level:2},{value:"\u6545\u969c\u6392\u67e5",id:"\u6545\u969c\u6392\u67e5",children:[],level:2},{value:"\u5378\u8f7d pnpm",id:"\u5378\u8f7d-pnpm",children:[],level:2}],u={toc:d};function s(t){var e=t.components,n=(0,l.Z)(t,p);return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u4f7f\u7528\u72ec\u7acb\u811a\u672c"},"\u4f7f\u7528\u72ec\u7acb\u811a\u672c"),(0,r.kt)("h3",{id:"\u672a\u9884\u88c5-nodejs"},"\u672a\u9884\u88c5 Node.js"),(0,r.kt)("p",null,"\u5728 POSIX \u7cfb\u7edf\u4e0a\uff0c\u5373\u4f7f\u60a8\u6ca1\u6709\u5b89\u88c5 Node.js\uff0c\u60a8\u4e5f\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u811a\u672c\u5b89\u88c5 pnpm\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"curl -fsSL https://get.pnpm.io/install.sh | sh -\n")),(0,r.kt)("p",null,"\u5982\u679c\u60a8\u6ca1\u6709\u5b89\u88c5 curl\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528 wget\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"wget -qO- https://get.pnpm.io/install.sh | sh -\n")),(0,r.kt)("p",null,"\u7136\u540e\u60a8\u53ef\u4ee5\u4f7f\u7528 ",(0,r.kt)("a",{parentName:"p",href:"/zh/cli/env"},"pnpm env")," \u547d\u4ee4\u6765\u5b89\u88c5 Node.js\u3002"),(0,r.kt)("h3",{id:"\u5df2\u9884\u88c5-nodejs"},"\u5df2\u9884\u88c5 Node.js"),(0,r.kt)("p",null,"\u5728 Linux \u6216 macOS \u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm\n")),(0,r.kt)("p",null,"\u5728 Windows \u4e0b\uff08\u4f7f\u7528PowerShell\uff09\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},"Invoke-WebRequest 'https://get.pnpm.io/v6.16.js' -UseBasicParsing -o pnpm.js; node pnpm.js add --global pnpm; Remove-Item pnpm.js\n")),(0,r.kt)("p",null,"\u72ec\u7acb\u811a\u672c\u5df2\u7ecf\u7ecf\u8fc7\u7b7e\u540d\u3002 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pnpm/get#verifying-files"},"\u5982\u4f55\u9a8c\u8bc1\uff1f")),(0,r.kt)("h2",{id:"\u4f7f\u7528-corepack"},"\u4f7f\u7528 Corepack"),(0,r.kt)("p",null,"\u4ece v16.13 \u5f00\u59cb\uff0cNode.js \u53d1\u5e03\u4e86 ",(0,r.kt)("a",{parentName:"p",href:"https://nodejs.org/api/corepack.html"},"Corepack")," \u6765\u7ba1\u7406\u5305\u7ba1\u7406\u5668\u3002 \u8fd9\u662f\u4e00\u9879\u5b9e\u9a8c\u6027\u529f\u80fd\uff0c\u56e0\u6b64\u60a8\u9700\u8981\u901a\u8fc7\u8fd0\u884c\u5982\u4e0b\u811a\u672c\u6765\u542f\u7528\u5b83\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"corepack enable\n")),(0,r.kt)("p",null,"\u8fd9\u5c06\u81ea\u52a8\u5728\u60a8\u7684\u7cfb\u7edf\u4e0a\u5b89\u88c5 pnpm\u3002 \u4f46\u662f\uff0c\u5b83\u53ef\u80fd\u4e0d\u662f\u6700\u65b0\u7248\u672c\u7684 pnpm\u3002 \u8981\u5347\u7ea7\u5b83\uff0c\u8bf7\u68c0\u67e5\u6700\u65b0\u7684 pnpm \u7248\u672c\u5e76\u8fd0\u884c\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"corepack prepare pnpm@6.22.2 --activate\n")),(0,r.kt)("h2",{id:"\u901a\u8fc7-npm-\u5b89\u88c5"},"\u901a\u8fc7 npm \u5b89\u88c5"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npm install -g pnpm\n")),(0,r.kt)("h2",{id:"\u901a\u8fc7-npx-\u5b89\u88c5"},"\u901a\u8fc7 npx \u5b89\u88c5"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npx pnpm add -g pnpm\n")),(0,r.kt)("h2",{id:"\u5347\u7ea7"},"\u5347\u7ea7"),(0,r.kt)("p",null,"\u4e00\u65e6\u4f60\u5b89\u88c5\u4e86 pnpm\uff0c\u5c31\u65e0\u9700\u518d\u4f7f\u7528\u5176\u4ed6\u8f6f\u4ef6\u5305\u7ba1\u7406\u5668\u8fdb\u884c\u5347\u7ea7\u3002 \u4f60\u53ef\u4ee5\u4f7f\u7528 pnpm \u5347\u7ea7\u81ea\u5df1\uff0c\u50cf\u8fd9\u6837\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm add -g pnpm\n")),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Do you wanna use pnpm on CI servers? See: ",(0,r.kt)("a",{parentName:"p",href:"/zh/continuous-integration"},"Continuous Integration"),"."))),(0,r.kt)("h2",{id:"\u517c\u5bb9\u6027"},"\u517c\u5bb9\u6027"),(0,r.kt)("p",null,"\u4ee5\u4e0b\u662f\u5404\u7248\u672c pnpm \u4e0e\u5404\u7248\u672c Node.js \u4e4b\u95f4\u7684\u652f\u6301\u8868\u683c\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Node.js"),(0,r.kt)("th",{parentName:"tr",align:null},"pnpm 1"),(0,r.kt)("th",{parentName:"tr",align:null},"pnpm 2"),(0,r.kt)("th",{parentName:"tr",align:null},"pnpm 3"),(0,r.kt)("th",{parentName:"tr",align:null},"pnpm 4"),(0,r.kt)("th",{parentName:"tr",align:null},"pnpm 5"),(0,r.kt)("th",{parentName:"tr",align:null},"pnpm 6"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Node.js 4"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Node.js 6"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Node.js 8"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Node.js 10"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Node.js 12"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Node.js 14"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Node.js 16"),(0,r.kt)("td",{parentName:"tr",align:null},"?"),(0,r.kt)("td",{parentName:"tr",align:null},"?"),(0,r.kt)("td",{parentName:"tr",align:null},"\u672a\u77e5"),(0,r.kt)("td",{parentName:"tr",align:null},"\u672a\u77e5"),(0,r.kt)("td",{parentName:"tr",align:null},"\u672a\u77e5"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")))),(0,r.kt)("h2",{id:"\u6545\u969c\u6392\u67e5"},"\u6545\u969c\u6392\u67e5"),(0,r.kt)("p",null,"\u5982\u679c pnpm \u635f\u574f\u5e76\u4e14\u60a8\u65e0\u6cd5\u901a\u8fc7\u91cd\u65b0\u5b89\u88c5\u6765\u4fee\u590d\u5b83\uff0c\u60a8\u53ef\u80fd\u9700\u8981\u4ece PATH \u4e2d\u5c06\u5176\u624b\u52a8\u5220\u9664\u3002"),(0,r.kt)("p",null,"\u5047\u8bbe\u60a8\u5728\u8fd0\u884c ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm install"),"\u65f6\u9047\u5230\u4ee5\u4e0b\u9519\u8bef\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"C:\\src>pnpm install\ninternal/modules/cjs/loader.js:883\n  throw err;\n  ^\n\n\n\nError: Cannot find module 'C:\\Users\\Bence\\AppData\\Roaming\\npm\\pnpm-global\\4\\node_modules\\pnpm\\bin\\pnpm.js'\n\u2190[90m    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:880:15)\u2190[39m\n\u2190[90m    at Function.Module._load (internal/modules/cjs/loader.js:725:27)\u2190[39m\n\u2190[90m    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:72:12)\u2190[39m\n\u2190[90m    at internal/main/run_main_module.js:17:47\u2190[39m {\n  code: \u2190[32m'MODULE_NOT_FOUND'\u2190[39m,\n  requireStack: []\n}\n")),(0,r.kt)("p",null,"\u9996\u5148\uff0c\u5c1d\u8bd5\u901a\u8fc7\u8fd0\u884c\uff1a ",(0,r.kt)("inlineCode",{parentName:"p"},"which pnpm"),"\u6765\u627e\u5230 pnpm \u7684\u4f4d\u7f6e\u3002 \u5982\u679c\u60a8\u4f7f\u7528\u7684\u662f Windows\uff0c\u8bf7\u5728 Git Bash \u4e2d\u8fd0\u884c\u6b64\u547d\u4ee4\u3002 \u60a8\u5c06\u83b7\u5f97 pnpm \u547d\u4ee4\u7684\u4f4d\u7f6e\uff0c\u4f8b\u5982\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ which pnpm\n/c/Program Files/nodejs/pnpm\n")),(0,r.kt)("p",null,"\u73b0\u5728\u60a8\u5e94\u8be5\u5df2\u7ecf\u77e5\u9053\u4e86 pnpm CLI \u7684\u6240\u5728\u76ee\u5f55\u3002\u6253\u5f00\u8be5\u76ee\u5f55\u5e76\u5220\u9664\u6240\u6709\u4e0e pnpm \u76f8\u5173\u7684\u6587\u4ef6\uff08\u5982",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm.cmd"),"\u3001 ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpx.cmd"),"\u3001 ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm"),"\u7b49\uff09\u3002 \u5b8c\u6210\u540e\uff0c\u518d\u6b21\u5b89\u88c5 pnpm\u3002\u73b0\u5728\uff0c\u5b83\u5e94\u8be5\u6b63\u6309\u7167\u9884\u671f\u5de5\u4f5c\u3002"),(0,r.kt)("h2",{id:"\u5378\u8f7d-pnpm"},"\u5378\u8f7d pnpm"),(0,r.kt)("p",null,"\u5982\u679c\u60a8\u9700\u8981\u4ece\u7cfb\u7edf\u4e2d\u5378\u8f7d pnpm CLI \u5e76\u79fb\u9664\u78c1\u76d8\u4e2d\u7684\u76f8\u5173\u6587\u4ef6\uff0c\u8bf7\u67e5\u9605 ",(0,r.kt)("a",{parentName:"p",href:"/zh/uninstall"},"\u5378\u8f7d pnpm"),"\u3002"))}s.isMDXComponent=!0}}]);