import"./entry.756b6741.mjs";var S=function(t){var e=[],n=0,r;t=t.replace(/(\[[^\]]*\])/g,function(c,i){var o="__ph-"+n+"__";return e.push(i),n++,o}),r=t.replace(/(:nth-[-\w]+)(\([^)]+\))/g,function(c,i,o){var a="__ph-"+n+"__";return e.push(o),n++,i+a});var s={content:r,placeholders:e};return s},$=function(t,e){return e.replace(/__ph-(\d+)__/g,function(n,r){return t[+r]})},d="-shadowcsshost",E="-shadowcssslotted",R="-shadowcsscontext",j=")(?:\\(((?:\\([^)(]*\\)|[^)(]*)+?)\\))?([^,{]*)",B=new RegExp("("+d+j,"gim"),M=new RegExp("("+R+j,"gim"),U=new RegExp("("+E+j,"gim"),g=d+"-no-combinator",q=/-shadowcsshost-no-combinator([^\s]*)/,y=[/::shadow/g,/::content/g],z="([>\\s~+[.,{:][\\s\\S]*)?$",_=/-shadowcsshost/gim,A=/:host/gim,D=/::slotted/gim,F=/:host-context/gim,G=/\/\*\s*[\s\S]*?\*\//g,H=function(t){return t.replace(G,"")},J=/\/\*\s*#\s*source(Mapping)?URL=[\s\S]+?\*\//g,N=function(t){return t.match(J)||[]},P=/(\s*)([^;\{\}]+?)(\s*)((?:{%BLOCK%}?\s*;?)|(?:\s*;))/g,Q=/([{}])/g,T="{",V="}",w="%BLOCK%",O=function(t,e){var n=X(t),r=0;return n.escapedString.replace(P,function(){for(var s=[],c=0;c<arguments.length;c++)s[c]=arguments[c];var i=s[2],o="",a=s[4],u="";a&&a.startsWith("{"+w)&&(o=n.blocks[r++],a=a.substring(w.length+1),u="{");var l={selector:i,content:o},f=e(l);return""+s[1]+f.selector+s[3]+u+f.content+a})},X=function(t){for(var e=t.split(Q),n=[],r=[],s=0,c=[],i=0;i<e.length;i++){var o=e[i];o===V&&s--,s>0?c.push(o):(c.length>0&&(r.push(c.join("")),n.push(w),c=[]),n.push(o)),o===T&&s++}c.length>0&&(r.push(c.join("")),n.push(w));var a={escapedString:n.join(""),blocks:r};return a},Y=function(t){return t=t.replace(F,R).replace(A,d).replace(D,E),t},k=function(t,e,n){return t.replace(e,function(){for(var r=[],s=0;s<arguments.length;s++)r[s]=arguments[s];if(r[2]){for(var c=r[2].split(","),i=[],o=0;o<c.length;o++){var a=c[o].trim();if(!a)break;i.push(n(g,a,r[3]))}return i.join(",")}else return g+r[3]})},C=function(t,e,n){return t+e.replace(d,"")+n},Z=function(t){return k(t,B,C)},tt=function(t,e,n){return e.indexOf(d)>-1?C(t,e,n):t+e+n+", "+e+" "+t+n},et=function(t,e){var n=U;return t.replace(n,function(){for(var r=[],s=0;s<arguments.length;s++)r[s]=arguments[s];if(r[2]){var c=r[2].trim(),i=r[3],o="."+e+" > "+c+i;return o}else return g+r[3]})},nt=function(t){return k(t,M,tt)},rt=function(t){return y.reduce(function(e,n){return e.replace(n," ")},t)},ct=function(t){var e=/\[/g,n=/\]/g;return t=t.replace(e,"\\[").replace(n,"\\]"),new RegExp("^("+t+")"+z,"m")},st=function(t,e){var n=ct(e);return!n.test(t)},ot=function(t,e,n){if(_.lastIndex=0,_.test(t)){var r="."+n;return t.replace(q,function(s,c){return c.replace(/([^:]*)(:*)(.*)/,function(i,o,a,u){return o+r+a+u})}).replace(_,r+" ")}return e+" "+t},ut=function(t,e,n){var r=/\[is=([^\]]*)\]/g;e=e.replace(r,function(m){for(var p=[],h=1;h<arguments.length;h++)p[h-1]=arguments[h];return p[0]});var s="."+e,c=function(m){var p=m.trim();if(!p)return"";if(m.indexOf(g)>-1)p=ot(m,e,n);else{var h=m.replace(_,"");if(h.length>0){var x=h.match(/([^:]*)(:*)(.*)/);x&&(p=x[1]+s+x[2]+x[3])}}return p},i=S(t);t=i.content;for(var o="",a=0,u,l=/( |>|\+|~(?!=))\s*/g,f=t.indexOf(g)>-1,v=!f;(u=l.exec(t))!==null;){var K=u[1],W=t.slice(a,u.index).trim();v=v||W.indexOf(g)>-1;var L=v?c(W):W;o+=L+" "+K+" ",a=l.lastIndex}var b=t.substring(a);return v=v||b.indexOf(g)>-1,o+=v?c(b):b,$(i.placeholders,o)},it=function(t,e,n,r){return t.split(",").map(function(s){return r&&s.indexOf("."+r)>-1?s.trim():st(s,e)?ut(s,e,n).trim():s.trim()}).join(", ")},I=function(t,e,n,r,s){return O(t,function(c){var i=c.selector,o=c.content;c.selector[0]!=="@"?i=it(c.selector,e,n,r):(c.selector.startsWith("@media")||c.selector.startsWith("@supports")||c.selector.startsWith("@page")||c.selector.startsWith("@document"))&&(o=I(c.content,e,n,r));var a={selector:i.replace(/\s{2,}/g," ").trim(),content:o};return a})},at=function(t,e,n,r,s){return t=Y(t),t=Z(t),t=nt(t),t=et(t,r),t=rt(t),e&&(t=I(t,e,n,r)),t=t.replace(/-shadowcsshost-no-combinator/g,"."+n),t=t.replace(/>\s*\*\s+([^{, ]+)/gm," $1 "),t.trim()},ft=function(t,e,n){var r=e+"-h",s=e+"-s",c=N(t);t=H(t);var i=[];if(n){var o=function(u){var l="/*!@___"+i.length+"___*/",f="/*!@"+u.selector+"*/";return i.push({placeholder:l,comment:f}),u.selector=l+u.selector,u};t=O(t,function(u){return u.selector[0]!=="@"?o(u):((u.selector.startsWith("@media")||u.selector.startsWith("@supports")||u.selector.startsWith("@page")||u.selector.startsWith("@document"))&&(u.content=O(u.content,o)),u)})}var a=at(t,e,r,s);return t=[a].concat(c).join(`
`),n&&i.forEach(function(u){var l=u.placeholder,f=u.comment;t=t.replace(l,f)}),t};/**
* @license
* Copyright Google Inc. All Rights Reserved.
*
* Use of this source code is governed by an MIT-style license that can be
* found in the LICENSE file at https://angular.io/license
*
* This file is a port of shadowCSS from webcomponents.js to TypeScript.
* https://github.com/webcomponents/webcomponentsjs/blob/4efecd7e0e/src/ShadowCSS/ShadowCSS.js
* https://github.com/angular/angular/blob/master/packages/compiler/src/shadow_css.ts
*/export{ft as scopeCss};