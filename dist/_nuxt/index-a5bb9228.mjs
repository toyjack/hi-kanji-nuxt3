import{_ as c,d,r as l,b as p,c as u,e,t as r,i as b,v as h,n as g}from"./entry-cf55a5cd.mjs";const x=d({name:"index",setup(o,{expose:n}){n();const a=l("\u5929");function t(){return g({path:`/search/${a.value}`})}const s={hanzi:a,move:t};return Object.defineProperty(s,"__isScriptSetup",{enumerable:!1,value:!0}),s}}),m={class:"overflow-hidden h-full w-screen bg-cover bg-origin-border bg-no-repeat bg-center bg-fixed items-center",style:{"background-image":"url(https://clioimg.hi.u-tokyo.ac.jp/viewer/image/idata/000/0073/10/8/00000005.jpg)"}},_={class:"flex flex-col items-center justify-between h-full"},f={class:"py-4"},v={class:"font-extrabold text-3xl text-center md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-400"},w={class:"flex flex-row mb-auto pt-4 gap-2"},y={class:"px-1 md:p-2 self-end items-end bg-black opacity-20 rounded"},k={class:"text-xs md:text-base text-white underline text-right"},j={href:"https://clioimg.hi.u-tokyo.ac.jp/viewer/view/idata/000/0073/10/8/00000005?m=limit&n=20",target:"blank"};function $(o,n,a,t,s,z){return p(),u("div",m,[e("div",_,[e("div",f,[e("p",v,r(o.$t("index.search-all-characters")),1)]),e("div",w,[b(e("input",{type:"text","onUpdate:modelValue":n[0]||(n[0]=i=>t.hanzi=i),class:"border-transparent appearance-none border border-gray-300 py-2 px-4 w-2/3 md:w-3/5 bg-white rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"},null,512),[[h,t.hanzi]]),e("button",{onClick:t.move,class:"p-2 mb-auto text-white bg-blue-500 rounded px-4 py-2 hover:bg-white hover:text-black duration-300"},r(o.$t("button.search")),1)]),e("div",y,[e("p",k,[e("a",j,r(o.$t("index.bgImage")),1)])])])])}var S=c(x,[["render",$]]);export{S as default};
