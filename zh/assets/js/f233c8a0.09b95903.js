"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7075],{9613:(e,n,r)=>{r.d(n,{Zo:()=>s,kt:()=>m});var t=r(9496);function p(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){p(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,p=function(e,n){if(null==e)return{};var r,t,p={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(p[r]=e[r]);return p}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(p[r]=e[r])}return p}var i=t.createContext({}),c=function(e){var n=t.useContext(i),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},s=function(e){var n=c(e.components);return t.createElement(i.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,p=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(r),m=p,_=d["".concat(i,".").concat(m)]||d[m]||u[m]||o;return r?t.createElement(_,a(a({ref:n},s),{},{components:r})):t.createElement(_,a({ref:n},s))}));function m(e,n){var r=arguments,p=n&&n.mdxType;if("string"==typeof e||p){var o=r.length,a=new Array(o);a[0]=d;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l.mdxType="string"==typeof e?e:p,a[1]=l;for(var c=2;c<o;c++)a[c]=r[c];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6007:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var t=r(2962),p=r(2742),o=(r(9496),r(9613)),a=["components"],l={id:"errors",title:"\u9519\u8bef\u7801"},i=void 0,c={unversionedId:"errors",id:"errors",title:"\u9519\u8bef\u7801",description:"ERRPNPMUNEXPECTED_STORE",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/errors.md",sourceDirName:".",slug:"/errors",permalink:"/zh/next/errors",draft:!1,editUrl:"https://crowdin.com/project/pnpm/zh-CN",tags:[],version:"current",frontMatter:{id:"errors",title:"\u9519\u8bef\u7801"},sidebar:"docs",previous:{title:"\u529f\u80fd\u6bd4\u8f83",permalink:"/zh/next/feature-comparison"},next:{title:"\u6807\u5fd7",permalink:"/zh/next/logos"}},s={},u=[{value:"ERR_PNPM_UNEXPECTED_STORE",id:"err_pnpm_unexpected_store",level:2},{value:"ERR_PNPM_NO_MATCHING_VERSION_INSIDE_WORKSPACE",id:"err_pnpm_no_matching_version_inside_workspace",level:2},{value:"ERR_PNPM_PEER_DEP_ISSUES",id:"err_pnpm_peer_dep_issues",level:2},{value:"ERR_PNPM_OUTDATED_LOCKFILE",id:"err_pnpm_outdated_lockfile",level:2}],d={toc:u};function m(e){var n=e.components,r=(0,p.Z)(e,a);return(0,o.kt)("wrapper",(0,t.Z)({},d,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"err_pnpm_unexpected_store"},"ERR_PNPM_UNEXPECTED_STORE"),(0,o.kt)("p",null,"\u5b58\u5728\u6a21\u5757\u76ee\u5f55\u5e76\u94fe\u63a5\u5230\u4e0d\u540c\u7684\u5b58\u50a8\u76ee\u5f55\u3002"),(0,o.kt)("p",null,"\u5982\u679c\u60a8\u6709\u610f\u66f4\u6539\u4e86\u5b58\u50a8\u76ee\u5f55\uff0c\u8bf7\u8fd0\u884c ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm install")," \uff0cpnpm \u5c06\u4f7f\u7528\u65b0\u5b58\u50a8\u91cd\u65b0\u5b89\u88c5\u4f9d\u8d56\u3002"),(0,o.kt)("h2",{id:"err_pnpm_no_matching_version_inside_workspace"},"ERR_PNPM_NO_MATCHING_VERSION_INSIDE_WORKSPACE"),(0,o.kt)("p",null,"\u9879\u76ee\u5177\u6709\u5de5\u4f5c\u533a\u4e2d\u4e0d\u5b58\u5728\u7684\u5de5\u4f5c\u533a\u4f9d\u8d56\u9879\u3002"),(0,o.kt)("p",null,"\u4f8b\u5982\uff0c\u5305 ",(0,o.kt)("inlineCode",{parentName:"p"},"foo")," \u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"dependency")," \u6709 ",(0,o.kt)("inlineCode",{parentName:"p"},"bar@1.0.0"),"\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "foo",\n  "version": "1.0.0",\n  "dependencies": {\n    "bar": "workspace:1.0.0"\n  }\n}\n')),(0,o.kt)("p",null,"\u4f46\u662f\uff0c\u5de5\u4f5c\u533a\u4e2d\u53ea\u6709 ",(0,o.kt)("inlineCode",{parentName:"p"},"bar@2.0.0"),"\uff0c\u6240\u4ee5 ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm install")," \u5c06\u5931\u8d25\u3002"),(0,o.kt)("p",null,"\u8981\u4fee\u590d\u6b64\u9519\u8bef\uff0c\u6240\u6709\u4f7f\u7528 ",(0,o.kt)("a",{parentName:"p",href:"/zh/next/workspaces#workspace-protocol-workspace"},"\u5de5\u4f5c\u533a\u534f\u8bae")," \u7684\u4f9d\u8d56\u9879\u9700\u8981\u88ab\u66f4\u65b0\u81f3\u5f53\u524d\u5de5\u4f5c\u533a\u4e2d\u7684\u7248\u672c\u3002 \u8fd9\u53ef\u4ee5\u624b\u52a8\u5b8c\u6210\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm -r update")," \u547d\u4ee4\u5b8c\u6210\u3002"),(0,o.kt)("h2",{id:"err_pnpm_peer_dep_issues"},"ERR_PNPM_PEER_DEP_ISSUES"),(0,o.kt)("p",null,"\u9879\u76ee\u5177\u6709\u672a\u89e3\u6790\u7684\u5bf9\u7b49\u4f9d\u8d56\u5173\u7cfb\u6216\u5bf9\u7b49\u4f9d\u8d56\u5173\u7cfb\u4e0e\u6240\u9700\u8303\u56f4\u4e0d\u5339\u914d\uff0c\u90a3\u4e48 ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm install")," \u5c06\u5931\u8d25\u3002 \u8981\u89e3\u51b3\u6b64\u95ee\u9898\uff0c\u8bf7\u5b89\u88c5\u7f3a\u5c11\u7684\u5bf9\u7b49\u4f9d\u8d56\u9879\u3002"),(0,o.kt)("p",null,"\u60a8\u4e5f\u53ef\u4ee5\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json"),"\u4e2d\u7684 ",(0,o.kt)("a",{parentName:"p",href:"package_json#pnpmpeerdependencyrulesignoremissing"},"pnpm.peerDependencyRules.ignoreMissing")," \u548c ",(0,o.kt)("a",{parentName:"p",href:"package_json#pnpmpeerdependencyrulesallowedversions"},"pnpm.peerDependencyRules.allowedVersions")," \u5b57\u6bb5\u9009\u62e9\u6027\u5730\u5ffd\u7565\u8fd9\u4e9b\u9519\u8bef\u3002"),(0,o.kt)("h2",{id:"err_pnpm_outdated_lockfile"},"ERR_PNPM_OUTDATED_LOCKFILE"),(0,o.kt)("p",null,"\u5982\u679c\u4e0d\u66f4\u6539 lockfile \u5c31\u65e0\u6cd5\u6267\u884c\u5b89\u88c5\uff0c\u5219\u4f1a\u53d1\u751f\u6b64\u9519\u8bef\u3002 \u5982\u679c\u6709\u4eba\u66f4\u6539\u4e86\u5b58\u50a8\u5e93\u4e2d\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," \u6587\u4ef6\uff0c\u4e4b\u540e\u6ca1\u6709\u8fd0\u884c ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm install")," \uff0c\u8fd9\u53ef\u80fd\u4f1a\u53d1\u751f\u5728 CI \u73af\u5883\u4e2d\u3002 \u6216\u8005\u6709\u4eba\u5fd8\u8bb0\u63d0\u4ea4 lockfile \u6587\u4ef6\u7684\u66f4\u6539\u3002"),(0,o.kt)("p",null,"\u8981\u4fee\u590d\u6b64\u9519\u8bef\uff0c\u53ea\u9700\u8fd0\u884c ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm install")," \u5e76\u5c06 lockfile \u7684\u66f4\u6539\u63d0\u4ea4\u3002"))}m.isMDXComponent=!0}}]);