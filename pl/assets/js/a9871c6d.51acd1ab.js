"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3362],{9613:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>w});var a=t(9496);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},p=Object.keys(e);for(a=0;a<p.length;a++)t=p[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)t=p[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var o=a.createContext({}),u=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},s=function(e){var n=u(e.components);return a.createElement(o.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,p=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=u(t),w=i,d=m["".concat(o,".").concat(w)]||m[w]||c[w]||p;return t?a.createElement(d,r(r({ref:n},s),{},{components:t})):a.createElement(d,r({ref:n},s))}));function w(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var p=t.length,r=new Array(p);r[0]=m;var l={};for(var o in n)hasOwnProperty.call(n,o)&&(l[o]=n[o]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var u=2;u<p;u++)r[u]=t[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8834:(e,n,t)=>{t.r(n),t.d(n,{frontMatter:()=>l,contentTitle:()=>o,metadata:()=>u,toc:()=>s,default:()=>m});var a=t(9518),i=t(7344),p=(t(9496),t(9613)),r=["components"],l={id:"uninstall",title:"Odinstalowywanie pnpm"},o=void 0,u={unversionedId:"uninstall",id:"uninstall",title:"Odinstalowywanie pnpm",description:"Usuwanie pakiet\xf3w zainstalowanych globalnie",source:"@site/i18n/pl/docusaurus-plugin-content-docs/current/uninstall.md",sourceDirName:".",slug:"/uninstall",permalink:"/pl/next/uninstall",editUrl:"https://crowdin.com/project/pnpm/pl",tags:[],version:"current",frontMatter:{id:"uninstall",title:"Odinstalowywanie pnpm"},sidebar:"docs",previous:{title:"How peers are resolved",permalink:"/pl/next/how-peers-are-resolved"},next:{title:"pnpm vs npm",permalink:"/pl/next/pnpm-vs-npm"}},s=[{value:"Usuwanie pakiet\xf3w zainstalowanych globalnie",id:"usuwanie-pakiet\xf3w-zainstalowanych-globalnie",children:[],level:2},{value:"Usuwanie pnpm CLI",id:"usuwanie-pnpm-cli",children:[],level:2},{value:"Usuwanie globalnego pnpm-store",id:"usuwanie-globalnego-pnpm-store",children:[],level:2},{value:"Usuwanie pliku stanu",id:"usuwanie-pliku-stanu",children:[],level:2}],c={toc:s};function m(e){var n=e.components,t=(0,i.Z)(e,r);return(0,p.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,p.kt)("h2",{id:"usuwanie-pakiet\xf3w-zainstalowanych-globalnie"},"Usuwanie pakiet\xf3w zainstalowanych globalnie"),(0,p.kt)("p",null,"Przed usuni\u0119ciem pnpm CLI, powiniene\u015b usun\u0105\u0107 wszelkie globalnie zainstalowane przez niego pakiety."),(0,p.kt)("p",null,"Aby wy\u015bwietli\u0107 wszystkie globalnie zainstalowane pakiety, uruchom ",(0,p.kt)("inlineCode",{parentName:"p"},"pnpm ls -g"),". Na ten moment, dost\u0119pne s\u0105 dwa sposoby na usuni\u0119cie takich paczek:"),(0,p.kt)("ol",null,(0,p.kt)("li",{parentName:"ol"},"Uruchom polecenie: ",(0,p.kt)("inlineCode",{parentName:"li"},"pnpm rm -g <pkg>...")," dla ka\u017cdej zainstalowanej paczki."),(0,p.kt)("li",{parentName:"ol"},"Uruchom polecenie: ",(0,p.kt)("inlineCode",{parentName:"li"},"pnpm root -g"),". aby znale\u017a\u0107 folder g\u0142\xf3wny oraz usun\u0105\u0107 go r\u0119cznie.")),(0,p.kt)("h2",{id:"usuwanie-pnpm-cli"},"Usuwanie pnpm CLI"),(0,p.kt)("p",null,"Je\u017celi u\u017cy\u0142e\u015b skrypt\xf3w do zainstalowanie pnpm (lub npx), powiniene\u015b przed usuni\u0119ciem pnpm CLI u\u017cy\u0107 polecenia:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"pnpm rm -g pnpm\n")),(0,p.kt)("p",null,"Je\u017celi u\u017cy\u0142e\u015b npm do zainstalowania pnpm, powiniene\u015b u\u017cy\u0107 go do usuni\u0119cia pnpm:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"npm rm -g pnpm\n")),(0,p.kt)("h2",{id:"usuwanie-globalnego-pnpm-store"},"Usuwanie globalnego pnpm-store"),(0,p.kt)("p",null,"Je\u017celi u\u017cywa\u0142e\u015b pnpm wy\u0142\u0105cznie na swoim g\u0142\xf3wnym dysku/partycji, to w g\u0142\xf3wnym folderze u\u017cytkownika, powinien znajdowa\u0107 si\u0119 globalny ",(0,p.kt)("inlineCode",{parentName:"p"},".pnpm-store"),". Mo\u017cesz go usun\u0105\u0107 poleceniem:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"rm -rf ~/.pnpm-store\n")),(0,p.kt)("p",null,"Je\u017celi u\u017cywa\u0142e\u015b pnpm nie na swoim g\u0142\xf3wnym dysku / partycji, to ",(0,p.kt)("inlineCode",{parentName:"p"},".pnpm-store")," powinien znajdowa\u0107 si\u0119 w jego katalogu g\u0142\xf3wnym. Dla przyk\u0142adu, je\u017celi u\u017cywa\u0142e\u015b pnpm na dysku ",(0,p.kt)("inlineCode",{parentName:"p"},"D:")," (na Windowsie), to powinien znajdowa\u0107 si\u0119 pod podan\u0105 \u015bcie\u017ck\u0105: ",(0,p.kt)("inlineCode",{parentName:"p"},"D:\\.pnpm-store"),"."),(0,p.kt)("h2",{id:"usuwanie-pliku-stanu"},"Usuwanie pliku stanu"),(0,p.kt)("p",null,"pnpm zapisuje r\xf3wnie\u017c stany w pliku ",(0,p.kt)("inlineCode",{parentName:"p"},"~/.pnpm-state.json"),". Mo\u017cesz go usun\u0105\u0107."))}m.isMDXComponent=!0}}]);