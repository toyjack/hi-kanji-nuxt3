import{b as f,M as v,r as m,o as i,h as c,i as t,F as g,y as w,t as s,j as y,e as $,p as l,q as n,k as o,N as k,x as C}from"./entry.cc194de1.mjs";const L={class:"relative inline-block text-left"},j={class:""},z=t("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":"true",role:"img",class:"iconify iconify--entypo",width:"32",height:"32",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 20 20"},[t("path",{fill:"currentColor",d:"M19.753 10.909c-.624-1.707-2.366-2.726-4.661-2.726c-.09 0-.176.002-.262.006l-.016-2.063l3.525-.607c.115-.019.133-.119.109-.231c-.023-.111-.167-.883-.188-.976c-.027-.131-.102-.127-.207-.109c-.104.018-3.25.461-3.25.461l-.013-2.078c-.001-.125-.069-.158-.194-.156l-1.025.016c-.105.002-.164.049-.162.148l.033 2.307s-3.061.527-3.144.543c-.084.014-.17.053-.151.143c.019.09.19 1.094.208 1.172c.018.08.072.129.188.107l2.924-.504l.035 2.018c-1.077.281-1.801.824-2.256 1.303c-.768.807-1.207 1.887-1.207 2.963c0 1.586.971 2.529 2.328 2.695c3.162.387 5.119-3.06 5.769-4.715c1.097 1.506.256 4.354-2.094 5.98c-.043.029-.098.129-.033.207l.619.756c.08.096.206.059.256.023c2.51-1.73 3.661-4.515 2.869-6.683zm-7.386 3.188c-.966-.121-.944-.914-.944-1.453c0-.773.327-1.58.876-2.156a3.21 3.21 0 0 1 1.229-.799l.082 4.277a2.773 2.773 0 0 1-1.243.131zm2.427-.553l.046-4.109c.084-.004.166-.01.252-.01c.773 0 1.494.145 1.885.361c.391.217-1.023 2.713-2.183 3.758zm-8.95-7.668a.196.196 0 0 0-.196-.145h-1.95a.194.194 0 0 0-.194.144L.008 16.916c-.017.051-.011.076.062.076h1.733c.075 0 .099-.023.114-.072l1.008-3.318h3.496l1.008 3.318c.016.049.039.072.113.072h1.734c.072 0 .078-.025.062-.076c-.014-.05-3.083-9.741-3.494-11.04zm-2.618 6.318l1.447-5.25l1.447 5.25H3.226z"})],-1),B=[z],N={key:0,class:"origin-top-right absolute right-0 mt-2 w-fit rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none",role:"menu","aria-orientation":"vertical","aria-labelledby":"menu-button",tabindex:"-1"},E={class:"py-1",role:"none"},M=["onClick"],V=f({__name:"LangButton",setup(p){const{t:e,locale:h}=v(),a=m(!1),r=m([{name:"\u65E5\u672C\u8A9E",value:"ja"},{name:"\u4E2D\u6587",value:"zh"},{name:"English",value:"en"}]);function x(d){console.log(d),h.value=d}return(d,_)=>(i(),c("div",null,[t("div",L,[t("div",j,[t("button",{onClick:_[0]||(_[0]=u=>a.value=!a.value),class:"text-white",id:"menu-button","aria-expanded":"false","aria-haspopup":"true"},B)]),a.value?(i(),c("div",N,[t("div",E,[(i(!0),c(g,null,w(r.value,(u,b)=>(i(),c("a",{key:b,onClick:Q=>x(u.value),href:"#",class:"text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100",role:"menuitem",tabindex:"-1",id:"menu-item-0"},s(u.name),9,M))),128))])])):y("",!0)])]))}}),S={class:"h-screen flex flex-col"},A={class:"bg-gradient-to-r from-cyan-500 to-blue-500 flex flex-col justify-between"},D={class:"flex flex-row justify-between px-2 pt-7 pb-2 md:p-20"},F={class:"flex flex-col"},H={class:"text-sm md:text-xl text-white"},I={class:"text-left text-xl md:text-3xl font-serif text-white uppercase"},R={class:"pt-4 pr-1 flex flex-row"},q={class:"tabs md:px-20"},T={class:"flex-grow"},Y={class:"bg-gradient-to-r from-cyan-500 to-blue-500 text-white flex flex-col items-center justify-center"},G={class:"text-sm md:text-base pt-5 md:pt-4 text-center"},J={href:"https://www.hi.u-tokyo.ac.jp/en/",target:"blank",class:"underline"},K={class:"text-sm md:text-base p-2 md:p-4"},O=o("Copyright 2022 "),P={href:"https://researchmap.jp/liuguanwei",target:"blank",class:"underline"},W=f({__name:"default",setup(p){return $(),(e,h)=>{const a=C,r=V;return i(),c("div",S,[t("header",A,[t("div",D,[t("div",F,[t("h6",H,s(e.$t("index.hiut")),1),t("h3",I,[l(a,{to:"/",class:"hover:underline"},{default:n(()=>[o(s(e.$t("index.title")),1)]),_:1})])]),t("div",R,[l(r)])]),t("div",q,[l(a,{class:"tab tab-lifted",to:"/",activeClass:"tab-active"},{default:n(()=>[o(s(e.$t("home")),1)]),_:1}),l(a,{class:"tab tab-lifted",to:"/search",activeClass:"tab-active"},{default:n(()=>[o(s(e.$t("search")),1)]),_:1}),l(a,{class:"tab tab-lifted",to:"/list",activeClass:"tab-active"},{default:n(()=>[o(s(e.$t("list")),1)]),_:1}),l(a,{class:"tab tab-lifted",to:"/about",activeClass:"tab-active"},{default:n(()=>[o(s(e.$t("about")),1)]),_:1})])]),t("main",T,[k(e.$slots,"default")]),t("footer",Y,[t("div",G,[o(s(e.$t("index.allImg"))+" ",1),t("a",J,s(e.$t("index.fromHiut")),1)]),t("div",K,[O,t("a",P,s(e.$t("author")),1)])])])}}});export{W as default};
