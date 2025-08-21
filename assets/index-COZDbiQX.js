import{r as T,c as Hr,e as Yr,g as ur,R as Pe}from"./react-o6zXO7vr.js";import{D as ue,c as Ur,B as Q,s as K,M as Re,a as be,T as Vr,F as re,A as Jr,R as Qr,S as Rt,b as Zr,d as Xr,C as en}from"./antd-BX_d-fAz.js";import{c as tn}from"./gallery-D_0dEau7.js";import{R as It,a as rn,b as zt,c as nn,d as Nt,e as Pt,f as Mt,g as on,h as an}from"./antdIcons-DTZZSpnr.js";import{i as sn,g as cn,q as dn,c as mr,o as ln,l as pn,a as un,b as mn,s as fr,d as kt,u as fn,e as hn,f as gn}from"./firebase-CbrwKV5s.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(i){if(i.ep)return;i.ep=!0;const a=r(i);fetch(i.href,a)}})();var hr={exports:{}},Xe={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xn=T,bn=Symbol.for("react.element"),yn=Symbol.for("react.fragment"),wn=Object.prototype.hasOwnProperty,vn=xn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,jn={key:!0,ref:!0,__self:!0,__source:!0};function gr(e,t,r){var n,i={},a=null,s=null;r!==void 0&&(a=""+r),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(s=t.ref);for(n in t)wn.call(t,n)&&!jn.hasOwnProperty(n)&&(i[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps,t)i[n]===void 0&&(i[n]=t[n]);return{$$typeof:bn,type:e,key:a,ref:s,props:i,_owner:vn.current}}Xe.Fragment=yn;Xe.jsx=gr;Xe.jsxs=gr;hr.exports=Xe;var o=hr.exports,ut={},Dt=Hr;ut.createRoot=Dt.createRoot,ut.hydrateRoot=Dt.hydrateRoot;var xr={exports:{}};(function(e,t){(function(r,n){e.exports=n()})(Yr,function(){return function(r){function n(a){if(i[a])return i[a].exports;var s=i[a]={exports:{},id:a,loaded:!1};return r[a].call(s.exports,s,s.exports,n),s.loaded=!0,s.exports}var i={};return n.m=r,n.c=i,n.p="dist/",n(0)}([function(r,n,i){function a(k){return k&&k.__esModule?k:{default:k}}var s=Object.assign||function(k){for(var W=1;W<arguments.length;W++){var Z=arguments[W];for(var h in Z)Object.prototype.hasOwnProperty.call(Z,h)&&(k[h]=Z[h])}return k},l=i(1),c=(a(l),i(6)),d=a(c),f=i(7),u=a(f),m=i(8),p=a(m),x=i(9),j=a(x),I=i(10),z=a(I),O=i(11),A=a(O),N=i(14),M=a(N),v=[],y=!1,S={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},H=function(){var k=arguments.length>0&&arguments[0]!==void 0&&arguments[0];if(k&&(y=!0),y)return v=(0,A.default)(v,S),(0,z.default)(v,S.once),v},se=function(){v=(0,M.default)(),H()},w=function(){v.forEach(function(k,W){k.node.removeAttribute("data-aos"),k.node.removeAttribute("data-aos-easing"),k.node.removeAttribute("data-aos-duration"),k.node.removeAttribute("data-aos-delay")})},g=function(k){return k===!0||k==="mobile"&&j.default.mobile()||k==="phone"&&j.default.phone()||k==="tablet"&&j.default.tablet()||typeof k=="function"&&k()===!0},R=function(k){S=s(S,k),v=(0,M.default)();var W=document.all&&!window.atob;return g(S.disable)||W?w():(S.disableMutationObserver||p.default.isSupported()||(console.info(`
      aos: MutationObserver is not supported on this browser,
      code mutations observing has been disabled.
      You may have to call "refreshHard()" by yourself.
    `),S.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",S.easing),document.querySelector("body").setAttribute("data-aos-duration",S.duration),document.querySelector("body").setAttribute("data-aos-delay",S.delay),S.startEvent==="DOMContentLoaded"&&["complete","interactive"].indexOf(document.readyState)>-1?H(!0):S.startEvent==="load"?window.addEventListener(S.startEvent,function(){H(!0)}):document.addEventListener(S.startEvent,function(){H(!0)}),window.addEventListener("resize",(0,u.default)(H,S.debounceDelay,!0)),window.addEventListener("orientationchange",(0,u.default)(H,S.debounceDelay,!0)),window.addEventListener("scroll",(0,d.default)(function(){(0,z.default)(v,S.once)},S.throttleDelay)),S.disableMutationObserver||p.default.ready("[data-aos]",se),v)};r.exports={init:R,refresh:H,refreshHard:se}},function(r,n){},,,,,function(r,n){(function(i){function a(g,R,k){function W(D){var te=V,ge=X;return V=X=void 0,ce=D,F=g.apply(ge,te)}function Z(D){return ce=D,$=setTimeout(C,R),ie?W(D):F}function h(D){var te=D-G,ge=D-ce,Tt=R-te;return Y?se(Tt,J-ge):Tt}function E(D){var te=D-G,ge=D-ce;return G===void 0||te>=R||te<0||Y&&ge>=J}function C(){var D=w();return E(D)?me(D):void($=setTimeout(C,h(D)))}function me(D){return $=void 0,B&&V?W(D):(V=X=void 0,F)}function fe(){$!==void 0&&clearTimeout($),ce=0,V=G=X=$=void 0}function ee(){return $===void 0?F:me(w())}function oe(){var D=w(),te=E(D);if(V=arguments,X=this,G=D,te){if($===void 0)return Z(G);if(Y)return $=setTimeout(C,R),W(G)}return $===void 0&&($=setTimeout(C,R)),F}var V,X,J,F,$,G,ce=0,ie=!1,Y=!1,B=!0;if(typeof g!="function")throw new TypeError(m);return R=f(R)||0,l(k)&&(ie=!!k.leading,Y="maxWait"in k,J=Y?H(f(k.maxWait)||0,R):J,B="trailing"in k?!!k.trailing:B),oe.cancel=fe,oe.flush=ee,oe}function s(g,R,k){var W=!0,Z=!0;if(typeof g!="function")throw new TypeError(m);return l(k)&&(W="leading"in k?!!k.leading:W,Z="trailing"in k?!!k.trailing:Z),a(g,R,{leading:W,maxWait:R,trailing:Z})}function l(g){var R=typeof g>"u"?"undefined":u(g);return!!g&&(R=="object"||R=="function")}function c(g){return!!g&&(typeof g>"u"?"undefined":u(g))=="object"}function d(g){return(typeof g>"u"?"undefined":u(g))=="symbol"||c(g)&&S.call(g)==x}function f(g){if(typeof g=="number")return g;if(d(g))return p;if(l(g)){var R=typeof g.valueOf=="function"?g.valueOf():g;g=l(R)?R+"":R}if(typeof g!="string")return g===0?g:+g;g=g.replace(j,"");var k=z.test(g);return k||O.test(g)?A(g.slice(2),k?2:8):I.test(g)?p:+g}var u=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(g){return typeof g}:function(g){return g&&typeof Symbol=="function"&&g.constructor===Symbol&&g!==Symbol.prototype?"symbol":typeof g},m="Expected a function",p=NaN,x="[object Symbol]",j=/^\s+|\s+$/g,I=/^[-+]0x[0-9a-f]+$/i,z=/^0b[01]+$/i,O=/^0o[0-7]+$/i,A=parseInt,N=(typeof i>"u"?"undefined":u(i))=="object"&&i&&i.Object===Object&&i,M=(typeof self>"u"?"undefined":u(self))=="object"&&self&&self.Object===Object&&self,v=N||M||Function("return this")(),y=Object.prototype,S=y.toString,H=Math.max,se=Math.min,w=function(){return v.Date.now()};r.exports=s}).call(n,function(){return this}())},function(r,n){(function(i){function a(w,g,R){function k(B){var D=oe,te=V;return oe=V=void 0,G=B,J=w.apply(te,D)}function W(B){return G=B,F=setTimeout(E,g),ce?k(B):J}function Z(B){var D=B-$,te=B-G,ge=g-D;return ie?H(ge,X-te):ge}function h(B){var D=B-$,te=B-G;return $===void 0||D>=g||D<0||ie&&te>=X}function E(){var B=se();return h(B)?C(B):void(F=setTimeout(E,Z(B)))}function C(B){return F=void 0,Y&&oe?k(B):(oe=V=void 0,J)}function me(){F!==void 0&&clearTimeout(F),G=0,oe=$=V=F=void 0}function fe(){return F===void 0?J:C(se())}function ee(){var B=se(),D=h(B);if(oe=arguments,V=this,$=B,D){if(F===void 0)return W($);if(ie)return F=setTimeout(E,g),k($)}return F===void 0&&(F=setTimeout(E,g)),J}var oe,V,X,J,F,$,G=0,ce=!1,ie=!1,Y=!0;if(typeof w!="function")throw new TypeError(u);return g=d(g)||0,s(R)&&(ce=!!R.leading,ie="maxWait"in R,X=ie?S(d(R.maxWait)||0,g):X,Y="trailing"in R?!!R.trailing:Y),ee.cancel=me,ee.flush=fe,ee}function s(w){var g=typeof w>"u"?"undefined":f(w);return!!w&&(g=="object"||g=="function")}function l(w){return!!w&&(typeof w>"u"?"undefined":f(w))=="object"}function c(w){return(typeof w>"u"?"undefined":f(w))=="symbol"||l(w)&&y.call(w)==p}function d(w){if(typeof w=="number")return w;if(c(w))return m;if(s(w)){var g=typeof w.valueOf=="function"?w.valueOf():w;w=s(g)?g+"":g}if(typeof w!="string")return w===0?w:+w;w=w.replace(x,"");var R=I.test(w);return R||z.test(w)?O(w.slice(2),R?2:8):j.test(w)?m:+w}var f=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(w){return typeof w}:function(w){return w&&typeof Symbol=="function"&&w.constructor===Symbol&&w!==Symbol.prototype?"symbol":typeof w},u="Expected a function",m=NaN,p="[object Symbol]",x=/^\s+|\s+$/g,j=/^[-+]0x[0-9a-f]+$/i,I=/^0b[01]+$/i,z=/^0o[0-7]+$/i,O=parseInt,A=(typeof i>"u"?"undefined":f(i))=="object"&&i&&i.Object===Object&&i,N=(typeof self>"u"?"undefined":f(self))=="object"&&self&&self.Object===Object&&self,M=A||N||Function("return this")(),v=Object.prototype,y=v.toString,S=Math.max,H=Math.min,se=function(){return M.Date.now()};r.exports=a}).call(n,function(){return this}())},function(r,n){function i(f){var u=void 0,m=void 0;for(u=0;u<f.length;u+=1)if(m=f[u],m.dataset&&m.dataset.aos||m.children&&i(m.children))return!0;return!1}function a(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function s(){return!!a()}function l(f,u){var m=window.document,p=a(),x=new p(c);d=u,x.observe(m.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function c(f){f&&f.forEach(function(u){var m=Array.prototype.slice.call(u.addedNodes),p=Array.prototype.slice.call(u.removedNodes),x=m.concat(p);if(i(x))return d()})}Object.defineProperty(n,"__esModule",{value:!0});var d=function(){};n.default={isSupported:s,ready:l}},function(r,n){function i(m,p){if(!(m instanceof p))throw new TypeError("Cannot call a class as a function")}function a(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(n,"__esModule",{value:!0});var s=function(){function m(p,x){for(var j=0;j<x.length;j++){var I=x[j];I.enumerable=I.enumerable||!1,I.configurable=!0,"value"in I&&(I.writable=!0),Object.defineProperty(p,I.key,I)}}return function(p,x,j){return x&&m(p.prototype,x),j&&m(p,j),p}}(),l=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,c=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,d=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,f=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,u=function(){function m(){i(this,m)}return s(m,[{key:"phone",value:function(){var p=a();return!(!l.test(p)&&!c.test(p.substr(0,4)))}},{key:"mobile",value:function(){var p=a();return!(!d.test(p)&&!f.test(p.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),m}();n.default=new u},function(r,n){Object.defineProperty(n,"__esModule",{value:!0});var i=function(s,l,c){var d=s.node.getAttribute("data-aos-once");l>s.position?s.node.classList.add("aos-animate"):typeof d<"u"&&(d==="false"||!c&&d!=="true")&&s.node.classList.remove("aos-animate")},a=function(s,l){var c=window.pageYOffset,d=window.innerHeight;s.forEach(function(f,u){i(f,d+c,l)})};n.default=a},function(r,n,i){function a(d){return d&&d.__esModule?d:{default:d}}Object.defineProperty(n,"__esModule",{value:!0});var s=i(12),l=a(s),c=function(d,f){return d.forEach(function(u,m){u.node.classList.add("aos-init"),u.position=(0,l.default)(u.node,f.offset)}),d};n.default=c},function(r,n,i){function a(d){return d&&d.__esModule?d:{default:d}}Object.defineProperty(n,"__esModule",{value:!0});var s=i(13),l=a(s),c=function(d,f){var u=0,m=0,p=window.innerHeight,x={offset:d.getAttribute("data-aos-offset"),anchor:d.getAttribute("data-aos-anchor"),anchorPlacement:d.getAttribute("data-aos-anchor-placement")};switch(x.offset&&!isNaN(x.offset)&&(m=parseInt(x.offset)),x.anchor&&document.querySelectorAll(x.anchor)&&(d=document.querySelectorAll(x.anchor)[0]),u=(0,l.default)(d).top,x.anchorPlacement){case"top-bottom":break;case"center-bottom":u+=d.offsetHeight/2;break;case"bottom-bottom":u+=d.offsetHeight;break;case"top-center":u+=p/2;break;case"bottom-center":u+=p/2+d.offsetHeight;break;case"center-center":u+=p/2+d.offsetHeight/2;break;case"top-top":u+=p;break;case"bottom-top":u+=d.offsetHeight+p;break;case"center-top":u+=d.offsetHeight/2+p}return x.anchorPlacement||x.offset||isNaN(f)||(m=f),u+m};n.default=c},function(r,n){Object.defineProperty(n,"__esModule",{value:!0});var i=function(a){for(var s=0,l=0;a&&!isNaN(a.offsetLeft)&&!isNaN(a.offsetTop);)s+=a.offsetLeft-(a.tagName!="BODY"?a.scrollLeft:0),l+=a.offsetTop-(a.tagName!="BODY"?a.scrollTop:0),a=a.offsetParent;return{top:l,left:s}};n.default=i},function(r,n){Object.defineProperty(n,"__esModule",{value:!0});var i=function(a){return a=a||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(a,function(s){return{node:s}})};n.default=i}])})})(xr);var kn=xr.exports;const En=ur(kn);var ne=function(){return ne=Object.assign||function(t){for(var r,n=1,i=arguments.length;n<i;n++){r=arguments[n];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a])}return t},ne.apply(this,arguments)};function Ue(e,t,r){if(r||arguments.length===2)for(var n=0,i=t.length,a;n<i;n++)(a||!(n in t))&&(a||(a=Array.prototype.slice.call(t,0,n)),a[n]=t[n]);return e.concat(a||Array.prototype.slice.call(t))}var L="-ms-",Ne="-moz-",P="-webkit-",br="comm",et="rule",Et="decl",_n="@import",yr="@keyframes",Sn="@layer",wr=Math.abs,_t=String.fromCharCode,mt=Object.assign;function On(e,t){return U(e,0)^45?(((t<<2^U(e,0))<<2^U(e,1))<<2^U(e,2))<<2^U(e,3):0}function vr(e){return e.trim()}function he(e,t){return(e=t.exec(e))?e[0]:e}function _(e,t,r){return e.replace(t,r)}function We(e,t,r){return e.indexOf(t,r)}function U(e,t){return e.charCodeAt(t)|0}function Ee(e,t,r){return e.slice(t,r)}function pe(e){return e.length}function jr(e){return e.length}function Ie(e,t){return t.push(e),e}function An(e,t){return e.map(t).join("")}function $t(e,t){return e.filter(function(r){return!he(r,t)})}var tt=1,_e=1,kr=0,de=0,q=0,Ce="";function rt(e,t,r,n,i,a,s,l){return{value:e,root:t,parent:r,type:n,props:i,children:a,line:tt,column:_e,length:s,return:"",siblings:l}}function xe(e,t){return mt(rt("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function je(e){for(;e.root;)e=xe(e.root,{children:[e]});Ie(e,e.siblings)}function Cn(){return q}function Tn(){return q=de>0?U(Ce,--de):0,_e--,q===10&&(_e=1,tt--),q}function le(){return q=de<kr?U(Ce,de++):0,_e++,q===10&&(_e=1,tt++),q}function we(){return U(Ce,de)}function Ke(){return de}function nt(e,t){return Ee(Ce,e,t)}function ft(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Rn(e){return tt=_e=1,kr=pe(Ce=e),de=0,[]}function In(e){return Ce="",e}function ct(e){return vr(nt(de-1,ht(e===91?e+2:e===40?e+1:e)))}function zn(e){for(;(q=we())&&q<33;)le();return ft(e)>2||ft(q)>3?"":" "}function Nn(e,t){for(;--t&&le()&&!(q<48||q>102||q>57&&q<65||q>70&&q<97););return nt(e,Ke()+(t<6&&we()==32&&le()==32))}function ht(e){for(;le();)switch(q){case e:return de;case 34:case 39:e!==34&&e!==39&&ht(q);break;case 40:e===41&&ht(e);break;case 92:le();break}return de}function Pn(e,t){for(;le()&&e+q!==57;)if(e+q===84&&we()===47)break;return"/*"+nt(t,de-1)+"*"+_t(e===47?e:le())}function Mn(e){for(;!ft(we());)le();return nt(e,de)}function Dn(e){return In(qe("",null,null,null,[""],e=Rn(e),0,[0],e))}function qe(e,t,r,n,i,a,s,l,c){for(var d=0,f=0,u=s,m=0,p=0,x=0,j=1,I=1,z=1,O=0,A="",N=i,M=a,v=n,y=A;I;)switch(x=O,O=le()){case 40:if(x!=108&&U(y,u-1)==58){We(y+=_(ct(O),"&","&\f"),"&\f",wr(d?l[d-1]:0))!=-1&&(z=-1);break}case 34:case 39:case 91:y+=ct(O);break;case 9:case 10:case 13:case 32:y+=zn(x);break;case 92:y+=Nn(Ke()-1,7);continue;case 47:switch(we()){case 42:case 47:Ie($n(Pn(le(),Ke()),t,r,c),c);break;default:y+="/"}break;case 123*j:l[d++]=pe(y)*z;case 125*j:case 59:case 0:switch(O){case 0:case 125:I=0;case 59+f:z==-1&&(y=_(y,/\f/g,"")),p>0&&pe(y)-u&&Ie(p>32?Bt(y+";",n,r,u-1,c):Bt(_(y," ","")+";",n,r,u-2,c),c);break;case 59:y+=";";default:if(Ie(v=Lt(y,t,r,d,f,i,l,A,N=[],M=[],u,a),a),O===123)if(f===0)qe(y,t,v,v,N,a,u,l,M);else switch(m===99&&U(y,3)===110?100:m){case 100:case 108:case 109:case 115:qe(e,v,v,n&&Ie(Lt(e,v,v,0,0,i,l,A,i,N=[],u,M),M),i,M,u,l,n?N:M);break;default:qe(y,v,v,v,[""],M,0,l,M)}}d=f=p=0,j=z=1,A=y="",u=s;break;case 58:u=1+pe(y),p=x;default:if(j<1){if(O==123)--j;else if(O==125&&j++==0&&Tn()==125)continue}switch(y+=_t(O),O*j){case 38:z=f>0?1:(y+="\f",-1);break;case 44:l[d++]=(pe(y)-1)*z,z=1;break;case 64:we()===45&&(y+=ct(le())),m=we(),f=u=pe(A=y+=Mn(Ke())),O++;break;case 45:x===45&&pe(y)==2&&(j=0)}}return a}function Lt(e,t,r,n,i,a,s,l,c,d,f,u){for(var m=i-1,p=i===0?a:[""],x=jr(p),j=0,I=0,z=0;j<n;++j)for(var O=0,A=Ee(e,m+1,m=wr(I=s[j])),N=e;O<x;++O)(N=vr(I>0?p[O]+" "+A:_(A,/&\f/g,p[O])))&&(c[z++]=N);return rt(e,t,r,i===0?et:l,c,d,f,u)}function $n(e,t,r,n){return rt(e,t,r,br,_t(Cn()),Ee(e,2,-2),0,n)}function Bt(e,t,r,n,i){return rt(e,t,r,Et,Ee(e,0,n),Ee(e,n+1,-1),n,i)}function Er(e,t,r){switch(On(e,t)){case 5103:return P+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return P+e+e;case 4789:return Ne+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return P+e+Ne+e+L+e+e;case 5936:switch(U(e,t+11)){case 114:return P+e+L+_(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return P+e+L+_(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return P+e+L+_(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return P+e+L+e+e;case 6165:return P+e+L+"flex-"+e+e;case 5187:return P+e+_(e,/(\w+).+(:[^]+)/,P+"box-$1$2"+L+"flex-$1$2")+e;case 5443:return P+e+L+"flex-item-"+_(e,/flex-|-self/g,"")+(he(e,/flex-|baseline/)?"":L+"grid-row-"+_(e,/flex-|-self/g,""))+e;case 4675:return P+e+L+"flex-line-pack"+_(e,/align-content|flex-|-self/g,"")+e;case 5548:return P+e+L+_(e,"shrink","negative")+e;case 5292:return P+e+L+_(e,"basis","preferred-size")+e;case 6060:return P+"box-"+_(e,"-grow","")+P+e+L+_(e,"grow","positive")+e;case 4554:return P+_(e,/([^-])(transform)/g,"$1"+P+"$2")+e;case 6187:return _(_(_(e,/(zoom-|grab)/,P+"$1"),/(image-set)/,P+"$1"),e,"")+e;case 5495:case 3959:return _(e,/(image-set\([^]*)/,P+"$1$`$1");case 4968:return _(_(e,/(.+:)(flex-)?(.*)/,P+"box-pack:$3"+L+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+P+e+e;case 4200:if(!he(e,/flex-|baseline/))return L+"grid-column-align"+Ee(e,t)+e;break;case 2592:case 3360:return L+_(e,"template-","")+e;case 4384:case 3616:return r&&r.some(function(n,i){return t=i,he(n.props,/grid-\w+-end/)})?~We(e+(r=r[t].value),"span",0)?e:L+_(e,"-start","")+e+L+"grid-row-span:"+(~We(r,"span",0)?he(r,/\d+/):+he(r,/\d+/)-+he(e,/\d+/))+";":L+_(e,"-start","")+e;case 4896:case 4128:return r&&r.some(function(n){return he(n.props,/grid-\w+-start/)})?e:L+_(_(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return _(e,/(.+)-inline(.+)/,P+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(pe(e)-1-t>6)switch(U(e,t+1)){case 109:if(U(e,t+4)!==45)break;case 102:return _(e,/(.+:)(.+)-([^]+)/,"$1"+P+"$2-$3$1"+Ne+(U(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~We(e,"stretch",0)?Er(_(e,"stretch","fill-available"),t,r)+e:e}break;case 5152:case 5920:return _(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(n,i,a,s,l,c,d){return L+i+":"+a+d+(s?L+i+"-span:"+(l?c:+c-+a)+d:"")+e});case 4949:if(U(e,t+6)===121)return _(e,":",":"+P)+e;break;case 6444:switch(U(e,U(e,14)===45?18:11)){case 120:return _(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+P+(U(e,14)===45?"inline-":"")+"box$3$1"+P+"$2$3$1"+L+"$2box$3")+e;case 100:return _(e,":",":"+L)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return _(e,"scroll-","scroll-snap-")+e}return e}function Ve(e,t){for(var r="",n=0;n<e.length;n++)r+=t(e[n],n,e,t)||"";return r}function Ln(e,t,r,n){switch(e.type){case Sn:if(e.children.length)break;case _n:case Et:return e.return=e.return||e.value;case br:return"";case yr:return e.return=e.value+"{"+Ve(e.children,n)+"}";case et:if(!pe(e.value=e.props.join(",")))return""}return pe(r=Ve(e.children,n))?e.return=e.value+"{"+r+"}":""}function Bn(e){var t=jr(e);return function(r,n,i,a){for(var s="",l=0;l<t;l++)s+=e[l](r,n,i,a)||"";return s}}function Fn(e){return function(t){t.root||(t=t.return)&&e(t)}}function Gn(e,t,r,n){if(e.length>-1&&!e.return)switch(e.type){case Et:e.return=Er(e.value,e.length,r);return;case yr:return Ve([xe(e,{value:_(e.value,"@","@"+P)})],n);case et:if(e.length)return An(r=e.props,function(i){switch(he(i,n=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":je(xe(e,{props:[_(i,/:(read-\w+)/,":"+Ne+"$1")]})),je(xe(e,{props:[i]})),mt(e,{props:$t(r,n)});break;case"::placeholder":je(xe(e,{props:[_(i,/:(plac\w+)/,":"+P+"input-$1")]})),je(xe(e,{props:[_(i,/:(plac\w+)/,":"+Ne+"$1")]})),je(xe(e,{props:[_(i,/:(plac\w+)/,L+"input-$1")]})),je(xe(e,{props:[i]})),mt(e,{props:$t(r,n)});break}return""})}}var Wn={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},ae={},Se=typeof process<"u"&&ae!==void 0&&(ae.REACT_APP_SC_ATTR||ae.SC_ATTR)||"data-styled",_r="active",Sr="data-styled-version",ot="6.1.19",St=`/*!sc*/
`,Je=typeof window<"u"&&typeof document<"u",Kn=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&ae!==void 0&&ae.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&ae.REACT_APP_SC_DISABLE_SPEEDY!==""?ae.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&ae.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&ae!==void 0&&ae.SC_DISABLE_SPEEDY!==void 0&&ae.SC_DISABLE_SPEEDY!==""&&ae.SC_DISABLE_SPEEDY!=="false"&&ae.SC_DISABLE_SPEEDY),it=Object.freeze([]),Oe=Object.freeze({});function qn(e,t,r){return r===void 0&&(r=Oe),e.theme!==r.theme&&e.theme||t||r.theme}var Or=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Hn=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Yn=/(^-|-$)/g;function Ft(e){return e.replace(Hn,"-").replace(Yn,"")}var Un=/(a)(d)/gi,Be=52,Gt=function(e){return String.fromCharCode(e+(e>25?39:97))};function gt(e){var t,r="";for(t=Math.abs(e);t>Be;t=t/Be|0)r=Gt(t%Be)+r;return(Gt(t%Be)+r).replace(Un,"$1-$2")}var dt,Ar=5381,ke=function(e,t){for(var r=t.length;r;)e=33*e^t.charCodeAt(--r);return e},Cr=function(e){return ke(Ar,e)};function Vn(e){return gt(Cr(e)>>>0)}function Jn(e){return e.displayName||e.name||"Component"}function lt(e){return typeof e=="string"&&!0}var Tr=typeof Symbol=="function"&&Symbol.for,Rr=Tr?Symbol.for("react.memo"):60115,Qn=Tr?Symbol.for("react.forward_ref"):60112,Zn={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Xn={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Ir={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},eo=((dt={})[Qn]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},dt[Rr]=Ir,dt);function Wt(e){return("type"in(t=e)&&t.type.$$typeof)===Rr?Ir:"$$typeof"in e?eo[e.$$typeof]:Zn;var t}var to=Object.defineProperty,ro=Object.getOwnPropertyNames,Kt=Object.getOwnPropertySymbols,no=Object.getOwnPropertyDescriptor,oo=Object.getPrototypeOf,qt=Object.prototype;function zr(e,t,r){if(typeof t!="string"){if(qt){var n=oo(t);n&&n!==qt&&zr(e,n,r)}var i=ro(t);Kt&&(i=i.concat(Kt(t)));for(var a=Wt(e),s=Wt(t),l=0;l<i.length;++l){var c=i[l];if(!(c in Xn||r&&r[c]||s&&c in s||a&&c in a)){var d=no(t,c);try{to(e,c,d)}catch{}}}}return e}function Ae(e){return typeof e=="function"}function Ot(e){return typeof e=="object"&&"styledComponentId"in e}function ye(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Ht(e,t){if(e.length===0)return"";for(var r=e[0],n=1;n<e.length;n++)r+=e[n];return r}function Me(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function xt(e,t,r){if(r===void 0&&(r=!1),!r&&!Me(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var n=0;n<t.length;n++)e[n]=xt(e[n],t[n]);else if(Me(t))for(var n in t)e[n]=xt(e[n],t[n]);return e}function At(e,t){Object.defineProperty(e,"toString",{value:t})}function De(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var io=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var r=0,n=0;n<t;n++)r+=this.groupSizes[n];return r},e.prototype.insertRules=function(t,r){if(t>=this.groupSizes.length){for(var n=this.groupSizes,i=n.length,a=i;t>=a;)if((a<<=1)<0)throw De(16,"".concat(t));this.groupSizes=new Uint32Array(a),this.groupSizes.set(n),this.length=a;for(var s=i;s<a;s++)this.groupSizes[s]=0}for(var l=this.indexOfGroup(t+1),c=(s=0,r.length);s<c;s++)this.tag.insertRule(l,r[s])&&(this.groupSizes[t]++,l++)},e.prototype.clearGroup=function(t){if(t<this.length){var r=this.groupSizes[t],n=this.indexOfGroup(t),i=n+r;this.groupSizes[t]=0;for(var a=n;a<i;a++)this.tag.deleteRule(n)}},e.prototype.getGroup=function(t){var r="";if(t>=this.length||this.groupSizes[t]===0)return r;for(var n=this.groupSizes[t],i=this.indexOfGroup(t),a=i+n,s=i;s<a;s++)r+="".concat(this.tag.getRule(s)).concat(St);return r},e}(),He=new Map,Qe=new Map,Ye=1,Fe=function(e){if(He.has(e))return He.get(e);for(;Qe.has(Ye);)Ye++;var t=Ye++;return He.set(e,t),Qe.set(t,e),t},ao=function(e,t){Ye=t+1,He.set(e,t),Qe.set(t,e)},so="style[".concat(Se,"][").concat(Sr,'="').concat(ot,'"]'),co=new RegExp("^".concat(Se,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),lo=function(e,t,r){for(var n,i=r.split(","),a=0,s=i.length;a<s;a++)(n=i[a])&&e.registerName(t,n)},po=function(e,t){for(var r,n=((r=t.textContent)!==null&&r!==void 0?r:"").split(St),i=[],a=0,s=n.length;a<s;a++){var l=n[a].trim();if(l){var c=l.match(co);if(c){var d=0|parseInt(c[1],10),f=c[2];d!==0&&(ao(f,d),lo(e,f,c[3]),e.getTag().insertRules(d,i)),i.length=0}else i.push(l)}}},Yt=function(e){for(var t=document.querySelectorAll(so),r=0,n=t.length;r<n;r++){var i=t[r];i&&i.getAttribute(Se)!==_r&&(po(e,i),i.parentNode&&i.parentNode.removeChild(i))}};function uo(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Nr=function(e){var t=document.head,r=e||t,n=document.createElement("style"),i=function(l){var c=Array.from(l.querySelectorAll("style[".concat(Se,"]")));return c[c.length-1]}(r),a=i!==void 0?i.nextSibling:null;n.setAttribute(Se,_r),n.setAttribute(Sr,ot);var s=uo();return s&&n.setAttribute("nonce",s),r.insertBefore(n,a),n},mo=function(){function e(t){this.element=Nr(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(r){if(r.sheet)return r.sheet;for(var n=document.styleSheets,i=0,a=n.length;i<a;i++){var s=n[i];if(s.ownerNode===r)return s}throw De(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,r){try{return this.sheet.insertRule(r,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var r=this.sheet.cssRules[t];return r&&r.cssText?r.cssText:""},e}(),fo=function(){function e(t){this.element=Nr(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,r){if(t<=this.length&&t>=0){var n=document.createTextNode(r);return this.element.insertBefore(n,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),ho=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,r){return t<=this.length&&(this.rules.splice(t,0,r),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Ut=Je,go={isServer:!Je,useCSSOMInjection:!Kn},Pr=function(){function e(t,r,n){t===void 0&&(t=Oe),r===void 0&&(r={});var i=this;this.options=ne(ne({},go),t),this.gs=r,this.names=new Map(n),this.server=!!t.isServer,!this.server&&Je&&Ut&&(Ut=!1,Yt(this)),At(this,function(){return function(a){for(var s=a.getTag(),l=s.length,c="",d=function(u){var m=function(z){return Qe.get(z)}(u);if(m===void 0)return"continue";var p=a.names.get(m),x=s.getGroup(u);if(p===void 0||!p.size||x.length===0)return"continue";var j="".concat(Se,".g").concat(u,'[id="').concat(m,'"]'),I="";p!==void 0&&p.forEach(function(z){z.length>0&&(I+="".concat(z,","))}),c+="".concat(x).concat(j,'{content:"').concat(I,'"}').concat(St)},f=0;f<l;f++)d(f);return c}(i)})}return e.registerId=function(t){return Fe(t)},e.prototype.rehydrate=function(){!this.server&&Je&&Yt(this)},e.prototype.reconstructWithOptions=function(t,r){return r===void 0&&(r=!0),new e(ne(ne({},this.options),t),this.gs,r&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(r){var n=r.useCSSOMInjection,i=r.target;return r.isServer?new ho(i):n?new mo(i):new fo(i)}(this.options),new io(t)));var t},e.prototype.hasNameForId=function(t,r){return this.names.has(t)&&this.names.get(t).has(r)},e.prototype.registerName=function(t,r){if(Fe(t),this.names.has(t))this.names.get(t).add(r);else{var n=new Set;n.add(r),this.names.set(t,n)}},e.prototype.insertRules=function(t,r,n){this.registerName(t,r),this.getTag().insertRules(Fe(t),n)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Fe(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),xo=/&/g,bo=/^\s*\/\/.*$/gm;function Mr(e,t){return e.map(function(r){return r.type==="rule"&&(r.value="".concat(t," ").concat(r.value),r.value=r.value.replaceAll(",",",".concat(t," ")),r.props=r.props.map(function(n){return"".concat(t," ").concat(n)})),Array.isArray(r.children)&&r.type!=="@keyframes"&&(r.children=Mr(r.children,t)),r})}function yo(e){var t,r,n,i=Oe,a=i.options,s=a===void 0?Oe:a,l=i.plugins,c=l===void 0?it:l,d=function(m,p,x){return x.startsWith(r)&&x.endsWith(r)&&x.replaceAll(r,"").length>0?".".concat(t):m},f=c.slice();f.push(function(m){m.type===et&&m.value.includes("&")&&(m.props[0]=m.props[0].replace(xo,r).replace(n,d))}),s.prefix&&f.push(Gn),f.push(Ln);var u=function(m,p,x,j){p===void 0&&(p=""),x===void 0&&(x=""),j===void 0&&(j="&"),t=j,r=p,n=new RegExp("\\".concat(r,"\\b"),"g");var I=m.replace(bo,""),z=Dn(x||p?"".concat(x," ").concat(p," { ").concat(I," }"):I);s.namespace&&(z=Mr(z,s.namespace));var O=[];return Ve(z,Bn(f.concat(Fn(function(A){return O.push(A)})))),O};return u.hash=c.length?c.reduce(function(m,p){return p.name||De(15),ke(m,p.name)},Ar).toString():"",u}var wo=new Pr,bt=yo(),Dr=Pe.createContext({shouldForwardProp:void 0,styleSheet:wo,stylis:bt});Dr.Consumer;Pe.createContext(void 0);function Vt(){return T.useContext(Dr)}var vo=function(){function e(t,r){var n=this;this.inject=function(i,a){a===void 0&&(a=bt);var s=n.name+a.hash;i.hasNameForId(n.id,s)||i.insertRules(n.id,s,a(n.rules,s,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=r,At(this,function(){throw De(12,String(n.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=bt),this.name+t.hash},e}(),jo=function(e){return e>="A"&&e<="Z"};function Jt(e){for(var t="",r=0;r<e.length;r++){var n=e[r];if(r===1&&n==="-"&&e[0]==="-")return e;jo(n)?t+="-"+n.toLowerCase():t+=n}return t.startsWith("ms-")?"-"+t:t}var $r=function(e){return e==null||e===!1||e===""},Lr=function(e){var t,r,n=[];for(var i in e){var a=e[i];e.hasOwnProperty(i)&&!$r(a)&&(Array.isArray(a)&&a.isCss||Ae(a)?n.push("".concat(Jt(i),":"),a,";"):Me(a)?n.push.apply(n,Ue(Ue(["".concat(i," {")],Lr(a),!1),["}"],!1)):n.push("".concat(Jt(i),": ").concat((t=i,(r=a)==null||typeof r=="boolean"||r===""?"":typeof r!="number"||r===0||t in Wn||t.startsWith("--")?String(r).trim():"".concat(r,"px")),";")))}return n};function ve(e,t,r,n){if($r(e))return[];if(Ot(e))return[".".concat(e.styledComponentId)];if(Ae(e)){if(!Ae(a=e)||a.prototype&&a.prototype.isReactComponent||!t)return[e];var i=e(t);return ve(i,t,r,n)}var a;return e instanceof vo?r?(e.inject(r,n),[e.getName(n)]):[e]:Me(e)?Lr(e):Array.isArray(e)?Array.prototype.concat.apply(it,e.map(function(s){return ve(s,t,r,n)})):[e.toString()]}function ko(e){for(var t=0;t<e.length;t+=1){var r=e[t];if(Ae(r)&&!Ot(r))return!1}return!0}var Eo=Cr(ot),_o=function(){function e(t,r,n){this.rules=t,this.staticRulesId="",this.isStatic=(n===void 0||n.isStatic)&&ko(t),this.componentId=r,this.baseHash=ke(Eo,r),this.baseStyle=n,Pr.registerId(r)}return e.prototype.generateAndInjectStyles=function(t,r,n){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,r,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&r.hasNameForId(this.componentId,this.staticRulesId))i=ye(i,this.staticRulesId);else{var a=Ht(ve(this.rules,t,r,n)),s=gt(ke(this.baseHash,a)>>>0);if(!r.hasNameForId(this.componentId,s)){var l=n(a,".".concat(s),void 0,this.componentId);r.insertRules(this.componentId,s,l)}i=ye(i,s),this.staticRulesId=s}else{for(var c=ke(this.baseHash,n.hash),d="",f=0;f<this.rules.length;f++){var u=this.rules[f];if(typeof u=="string")d+=u;else if(u){var m=Ht(ve(u,t,r,n));c=ke(c,m+f),d+=m}}if(d){var p=gt(c>>>0);r.hasNameForId(this.componentId,p)||r.insertRules(this.componentId,p,n(d,".".concat(p),void 0,this.componentId)),i=ye(i,p)}}return i},e}(),Br=Pe.createContext(void 0);Br.Consumer;var pt={};function So(e,t,r){var n=Ot(e),i=e,a=!lt(e),s=t.attrs,l=s===void 0?it:s,c=t.componentId,d=c===void 0?function(N,M){var v=typeof N!="string"?"sc":Ft(N);pt[v]=(pt[v]||0)+1;var y="".concat(v,"-").concat(Vn(ot+v+pt[v]));return M?"".concat(M,"-").concat(y):y}(t.displayName,t.parentComponentId):c,f=t.displayName,u=f===void 0?function(N){return lt(N)?"styled.".concat(N):"Styled(".concat(Jn(N),")")}(e):f,m=t.displayName&&t.componentId?"".concat(Ft(t.displayName),"-").concat(t.componentId):t.componentId||d,p=n&&i.attrs?i.attrs.concat(l).filter(Boolean):l,x=t.shouldForwardProp;if(n&&i.shouldForwardProp){var j=i.shouldForwardProp;if(t.shouldForwardProp){var I=t.shouldForwardProp;x=function(N,M){return j(N,M)&&I(N,M)}}else x=j}var z=new _o(r,m,n?i.componentStyle:void 0);function O(N,M){return function(v,y,S){var H=v.attrs,se=v.componentStyle,w=v.defaultProps,g=v.foldedComponentIds,R=v.styledComponentId,k=v.target,W=Pe.useContext(Br),Z=Vt(),h=v.shouldForwardProp||Z.shouldForwardProp,E=qn(y,W,w)||Oe,C=function(X,J,F){for(var $,G=ne(ne({},J),{className:void 0,theme:F}),ce=0;ce<X.length;ce+=1){var ie=Ae($=X[ce])?$(G):$;for(var Y in ie)G[Y]=Y==="className"?ye(G[Y],ie[Y]):Y==="style"?ne(ne({},G[Y]),ie[Y]):ie[Y]}return J.className&&(G.className=ye(G.className,J.className)),G}(H,y,E),me=C.as||k,fe={};for(var ee in C)C[ee]===void 0||ee[0]==="$"||ee==="as"||ee==="theme"&&C.theme===E||(ee==="forwardedAs"?fe.as=C.forwardedAs:h&&!h(ee,me)||(fe[ee]=C[ee]));var oe=function(X,J){var F=Vt(),$=X.generateAndInjectStyles(J,F.styleSheet,F.stylis);return $}(se,C),V=ye(g,R);return oe&&(V+=" "+oe),C.className&&(V+=" "+C.className),fe[lt(me)&&!Or.has(me)?"class":"className"]=V,S&&(fe.ref=S),T.createElement(me,fe)}(A,N,M)}O.displayName=u;var A=Pe.forwardRef(O);return A.attrs=p,A.componentStyle=z,A.displayName=u,A.shouldForwardProp=x,A.foldedComponentIds=n?ye(i.foldedComponentIds,i.styledComponentId):"",A.styledComponentId=m,A.target=n?i.target:e,Object.defineProperty(A,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(N){this._foldedDefaultProps=n?function(M){for(var v=[],y=1;y<arguments.length;y++)v[y-1]=arguments[y];for(var S=0,H=v;S<H.length;S++)xt(M,H[S],!0);return M}({},i.defaultProps,N):N}}),At(A,function(){return".".concat(A.styledComponentId)}),a&&zr(A,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),A}function Qt(e,t){for(var r=[e[0]],n=0,i=t.length;n<i;n+=1)r.push(t[n],e[n+1]);return r}var Zt=function(e){return Object.assign(e,{isCss:!0})};function Oo(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];if(Ae(e)||Me(e))return Zt(ve(Qt(it,Ue([e],t,!0))));var n=e;return t.length===0&&n.length===1&&typeof n[0]=="string"?ve(n):Zt(ve(Qt(n,t)))}function yt(e,t,r){if(r===void 0&&(r=Oe),!t)throw De(1,t);var n=function(i){for(var a=[],s=1;s<arguments.length;s++)a[s-1]=arguments[s];return e(t,r,Oo.apply(void 0,Ue([i],a,!1)))};return n.attrs=function(i){return yt(e,t,ne(ne({},r),{attrs:Array.prototype.concat(r.attrs,i).filter(Boolean)}))},n.withConfig=function(i){return yt(e,t,ne(ne({},r),i))},n}var Fr=function(e){return yt(So,e)},b=Fr;Or.forEach(function(e){b[e]=Fr(e)});const at=()=>T.useMemo(()=>({WEDDING_DATE:"2025년 11월 8일 토요일, 오전 11시",WEDDING_LOCATION:"프란치스코 교육회관",WEDDING_INVITATION_URL:"https://mqjinwon.github.io/wedding_invitation",GROOM_NAME:"김진원 라파엘",GROOM_ACCOUNT_NUMBER:"국민은행 493602-01-268652",GROOM_FATHER_NAME:"김봉규 가브리엘",GROOM_FATHER_ACCOUNT_NUMBER:"국민은행 815-24-0348-330",GROOM_MOTHER_NAME:"송혜정 마리아",GROOM_MOTHER_ACCOUNT_NUMBER:"신한은행 110-097-465778",BRIDE_NAME:"이연제 카타리나",BRIDE_ACCOUNT_NUMBER:"국민은행 743202-04-223131",BRIDE_FATHER_NAME:"이승철 세례자요한",BRIDE_FATHER_ACCOUNT_NUMBER:"○○은행 ***-***-******",BRIDE_MOTHER_NAME:"박미숙 첼리나",BRIDE_MOTHER_ACCOUNT_NUMBER:"○○은행 ***-***-****** ",KAKAOTALK_API_TOKEN:"9611b9bc76a2baa916b7e161275c48b7",KAKAOTALK_SHARE_IMAGE:"https://cdn.pixabay.com/photo/2014/11/13/17/04/heart-529607_960_720.jpg",MASTER_PASSWORD:"admin12345678"}),[]),Ao="/wedding_invitation/BackgroundVideo.mp4",Co=b.div`
  width: 100%;
  max-width: 800px;
  overflow: hidden;
  margin: 0 auto;
  padding: 0 16px;

  @media screen and (max-width: 768px) {
    padding: 0 12px;
  }

  @media screen and (max-width: 480px) {
    padding: 0 8px;
  }
`,To=b.div`
  width: 100%;
  text-align: center;
  padding-top: 42px;
  font-weight: 500 !important;
  color: var(--title-color);
  animation: fadein 3s;
  -moz-animation: fadein 3s; /* Firefox */
  -webkit-animation: fadein 3s; /* Safari and Chrome */
  -o-animation: fadein 3s; /* Opera */

  @media screen and (max-width: 768px) {
    padding-top: 32px;
  }

  @media screen and (max-width: 480px) {
    padding-top: 24px;
  }
`,Ro=b.video`
  width: 100%;
  height: auto;
  max-height: 400px;
  object-fit: cover;

  @media screen and (max-width: 768px) {
    max-height: 300px;
  }

  @media screen and (max-width: 480px) {
    max-height: 250px;
  }
`,Io=b.p`
  font-size: 0.825rem;
  opacity: 0.45;
  margin-bottom: 32px;

  @media screen and (max-width: 768px) {
    font-size: 0.75rem;
    margin-bottom: 24px;
  }

  @media screen and (max-width: 480px) {
    font-size: 0.7rem;
    margin-bottom: 20px;
  }
`,zo=b.p`
  font-size: 1.5rem;
  font-weight: bold;
  opacity: 0.9;
  margin-bottom: 16px;
  line-height: 1.4;

  @media screen and (max-width: 768px) {
    font-size: 1.3rem;
    margin-bottom: 14px;
  }

  @media screen and (max-width: 480px) {
    font-size: 1.1rem;
    margin-bottom: 12px;
  }
`,No=b.p`
  font-size: 1.06rem;
  opacity: 0.65;
  margin-bottom: 24px;
  line-height: 1.5;

  @media screen and (max-width: 768px) {
    font-size: 0.95rem;
    margin-bottom: 20px;
  }

  @media screen and (max-width: 480px) {
    font-size: 0.85rem;
    margin-bottom: 16px;
  }
`,Po=()=>{const{WEDDING_DATE:e,WEDDING_LOCATION:t,GROOM_NAME:r,BRIDE_NAME:n}=at();return o.jsxs(Co,{children:[o.jsxs(To,{children:[o.jsx(Io,{children:"WEDDING INVITATION"}),o.jsx(zo,{children:"김진원 & 이연제"}),o.jsxs(No,{children:[e,o.jsx("br",{}),t]})]}),o.jsx(Ro,{autoPlay:!0,loop:!0,muted:!0,playsInline:!0,children:o.jsx("source",{src:Ao,type:"video/mp4"})})]})},Mo="/wedding_invitation/flower1.png",Do=b.div`
  padding-top: 42px;
  margin: 0 auto;
  width: 100%;
  max-width: 800px;
  padding-left: 16px;
  padding-right: 16px;

  @media screen and (max-width: 768px) {
    padding-top: 32px;
    padding-left: 12px;
    padding-right: 12px;
  }

  @media screen and (max-width: 480px) {
    padding-top: 24px;
    padding-left: 8px;
    padding-right: 8px;
  }
`,$o=b.p`
  font-size: 1rem;
  color: var(--title-color);
  font-weight: bold;
  opacity: 0.85;
  margin-bottom: 0;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 0.9rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 0.85rem;
  }
`,Lo=b.p`
  font-size: 0.72rem;
  line-height: 1.75;
  opacity: 0.75;
  margin-bottom: 16px;
  width: 100%;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 0.8rem;
    line-height: 1.8;
    margin-bottom: 14px;
  }

  @media screen and (max-width: 480px) {
    font-size: 0.75rem;
    line-height: 1.9;
    margin-bottom: 12px;
  }
`,Bo=b.p`
  font-size: 0.875rem;
  line-height: 1.75;
  opacity: 0.85;
  margin-bottom: 0px;
  width: 100%;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 0.8rem;
    line-height: 1.8;
  }

  @media screen and (max-width: 480px) {
    font-size: 0.75rem;
    line-height: 1.9;
  }
`,Fo=b.img`
  display: block;
  margin: 0 auto;
  width: 1.375rem;
  padding-bottom: 42px;

  @media screen and (max-width: 768px) {
    width: 1.2rem;
    padding-bottom: 32px;
  }

  @media screen and (max-width: 480px) {
    width: 1.1rem;
    padding-bottom: 24px;
  }
`,Go=()=>{const{GROOM_NAME:e,GROOM_FATHER_NAME:t,GROOM_MOTHER_NAME:r,BRIDE_NAME:n,BRIDE_FATHER_NAME:i,BRIDE_MOTHER_NAME:a}=at();return o.jsxs(Do,{children:[o.jsx(ue,{style:{marginTop:32,marginBottom:32},plain:!0,children:o.jsx($o,{children:"초대합니다"})}),o.jsx(Fo,{src:Mo}),o.jsxs(Lo,{children:["함께 보내는 열 한 번째 가을,",o.jsx("br",{}),o.jsx("br",{}),"소중한 분들을 모시고 평생 함께할 것을 약속하고자 합니다.",o.jsx("br",{}),o.jsx("br",{}),"가까이서 축복해주신다면 더없는 기쁨으로 간직하겠습니다."]}),o.jsxs(Bo,{children:[t," · ",r,"의 아들"," ",o.jsx("span",{style:{fontWeight:"bold",fontSize:"1.1em"},children:e}),o.jsx("br",{}),o.jsx("br",{}),i," · ",a,"의 딸"," ",o.jsx("span",{style:{fontWeight:"bold",fontSize:"1.1em"},children:n}),o.jsx("br",{}),o.jsx("br",{})]})]})},Wo=b.div`
  padding-top: 42px;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding-left: 16px;
  padding-right: 16px;

  @media screen and (max-width: 768px) {
    padding-top: 32px;
    padding-left: 12px;
    padding-right: 12px;
  }

  @media screen and (max-width: 480px) {
    padding-top: 24px;
    padding-left: 8px;
    padding-right: 8px;
  }
`,Ko=b.p`
  font-size: 1rem;
  color: var(--title-color);
  font-weight: bold;
  opacity: 0.85;
  margin-bottom: 0;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 0.9rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 0.85rem;
  }
`,qo=b.div`
  .image-gallery {
    width: 100%;
    border-radius: 8px;
    padding: 10px;
  }

  .image-gallery-slide {
    border-radius: 8px;
    overflow: hidden;
  }

  .image-gallery-image {
    border-radius: 8px;
    object-fit: cover;
    width: 100%;
  }

  .image-gallery-thumbnail {
    border-radius: 4px;
    overflow: hidden;
  }

  .image-gallery-thumbnail-image {
    border-radius: 4px;
    object-fit: cover;
    width: 100%;
    height: 80px;
  }

  .image-gallery-thumbnails-wrapper {
    margin-top: 10px;
  }

  .image-gallery-thumbnails {
    padding: 0;
    display: flex;
    justify-content: center;
    gap: 12px;
  }

  .image-gallery-thumbnail {
    margin: 0;
    border: 3px solid transparent;
    transition: all 0.3s ease;
    border-radius: 6px;
    overflow: hidden;
  }

  .image-gallery-thumbnail.active {
    border-color: var(--light-green);
    box-shadow: 0 2px 8px rgba(24, 144, 255, 0);
  }

  .image-gallery-thumbnail:hover {
    border-color: var(--light-green);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(24, 144, 255, 0);
  }

  /* 모바일에서 터치 동작 개선 */
  @media screen and (max-width: 768px) {
    .image-gallery {
      touch-action: pan-x pan-y pinch-zoom !important;
      border-radius: 6px;
      padding: 8px;
    }

    .image-gallery-slide {
      border-radius: 6px;
      overflow: hidden !important;
      touch-action: pan-x pan-y pinch-zoom !important;
    }

    .image-gallery-image {
      border-radius: 8px;
      object-fit: cover;
      width: 100%;
      touch-action: pan-x pan-y pinch-zoom !important;
    }

    .image-gallery-content {
      touch-action: pan-x pan-y pinch-zoom !important;
    }

    .image-gallery-slide-wrapper {
      touch-action: pan-x pan-y pinch-zoom !important;
    }

    .image-gallery-slides {
      touch-action: pan-x pan-y pinch-zoom !important;
    }

    .image-gallery-thumbnails-wrapper {
      margin-top: 8px;
    }

    .image-gallery-thumbnail {
      border-radius: 3px;
      margin: 0;
    }

    .image-gallery-thumbnail-image {
      border-radius: 3px;
      width: 100%;
      height: 60px;
      object-fit: cover;
    }

    /* 갤러리 내부 모든 요소에 좌우/상하 스와이프 허용 */
    .image-gallery * {
      touch-action: pan-x pan-y pinch-zoom !important;
    }
  }

  @media screen and (max-width: 480px) {
    .image-gallery {
      border-radius: 4px;
      padding: 6px;
    }
    
    .image-gallery-slide {
      border-radius: 4px;
    }

    .image-gallery-image {
      border-radius: 8px;
      object-fit: cover;
      width: 100%;
    }

    .image-gallery-thumbnail {
      border-radius: 2px;
      margin: 0;
    }

    .image-gallery-thumbnail-image {
      border-radius: 2px;
      width: 100%;
      height: 40px;
      object-fit: cover;
    }
  }
`,Xt=[{original:"/wedding_invitation/images/1.webp",thumbnail:"/wedding_invitation/images/1.webp"},{original:"/wedding_invitation/images/2.webp",thumbnail:"/wedding_invitation/images/2.webp"}],Ho=()=>{console.log("Images loaded:",Xt);const e={touchAction:"pan-x pan-y pinch-zoom",WebkitOverflowScrolling:"touch"};return T.useEffect(()=>{const t=()=>{document.querySelectorAll(".image-gallery, .image-gallery *").forEach(i=>{i.style.touchAction="pan-x pan-y pinch-zoom"})};t();const r=setTimeout(t,100);return()=>clearTimeout(r)},[]),o.jsxs(Wo,{children:[o.jsx(ue,{style:{marginTop:0,marginBottom:32},plain:!0,children:o.jsx(Ko,{children:"우리의 아름다운 순간"})}),o.jsx(qo,{style:e,children:o.jsx(tn,{items:Xt,showPlayButton:!0,showFullscreenButton:!0,showThumbnails:!0,showNav:!0,showIndex:!1,showBullets:!1,thumbnailPosition:"bottom",slideInterval:3e3,slideDuration:450,slideOnThumbnailOver:!1,useBrowserFullscreen:!1,disableSwipe:!1,enableSwipe:!0,enableTouchDrag:!0,enableMouseDrag:!0,lazyLoad:!0,infinite:!0,startIndex:0})})]})},Yo="/wedding_invitation/flower2.png",Uo=b.div`
  padding-top: 42px;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding-left: 16px;
  padding-right: 16px;

  @media screen and (max-width: 768px) {
    padding-top: 32px;
    padding-left: 12px;
    padding-right: 12px;
  }

  @media screen and (max-width: 480px) {
    padding-top: 24px;
    padding-left: 8px;
    padding-right: 8px;
  }
`,Te=b.span`
  font-size: 1rem;
  color: var(--title-color);
  font-weight: bold;
  opacity: 0.85;
  margin-bottom: 0;

  @media screen and (max-width: 768px) {
    font-size: 0.9rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 0.85rem;
  }
`,Vo=b.img`
  display: block;
  margin: 0 auto;
  width: 1.375rem;
  padding-bottom: 42px;

  @media screen and (max-width: 768px) {
    width: 1.2rem;
    padding-bottom: 32px;
  }

  @media screen and (max-width: 480px) {
    width: 1.1rem;
    padding-bottom: 24px;
  }
`,Jo=b.div`
  font-size: 0.875rem;
  line-height: 1.75;
  opacity: 0.75;
  width: 100%;
  text-align: center;
  padding-top: 42px;
  padding-bottom: 42px;
  margin: 0;
  word-break: keep-all;
  word-wrap: break-word;
  overflow-wrap: break-word;

  @media screen and (max-width: 768px) {
    font-size: 0.8rem;
    line-height: 1.8;
    padding-top: 32px;
    padding-bottom: 32px;
  }

  @media screen and (max-width: 480px) {
    font-size: 0.75rem;
    line-height: 1.9;
    padding-top: 24px;
    padding-bottom: 24px;
  }
`,Qo=b.div`
  width: 100%;
  padding: 0;
  pointer-events: none;
  max-height: 400px;

  & > * {
    pointer-events: auto;
  }

  @media screen and (max-width: 768px) {
    margin: 0 -12px;
    width: calc(100% + 24px);
  }

  @media screen and (max-width: 480px) {
    margin: 0 -8px;
    width: calc(100% + 16px);
  }
`,Zo=b.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 10px;
  border: 1px solid var(--title-color);
  border-radius: 15px;
  cursor: pointer;
  transition: all 0.3s ease;
  background-color: rgba(255, 255, 255, 0.1);
  margin-bottom: 16px;
  min-height: 44px;
  min-width: 29px;
  width: 66%;
  max-width: 180px;
  margin-left: auto;
  margin-right: auto;

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`,Xo=b.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 20px;
  animation: fadeIn 0.3s ease-in;
  width: 100%;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media screen and (max-width: 768px) {
    gap: 6px;
    margin-bottom: 16px;
  }

  @media screen and (max-width: 480px) {
    gap: 4px;
    margin-bottom: 12px;
  }
`,ei=()=>{const[e,t]=T.useState(!1),r=()=>{const n=document.createElement("script"),i=document.createTextNode(`new daum.roughmap.Lander({
    "timestamp" : "1753587778659",
    "key" : "5xqv9qeza2u",
    "mapWidth" : "640",
    "mapHeight" : "480"
  }).render();`);n.appendChild(i),document.body.appendChild(n)};return T.useEffect(()=>{(function(){let n=window.location.protocol==="https:"?"https:":"http:",i="16137cec";if(window.daum&&window.daum.roughmap&&window.daum.roughmap.cdn)return;window.daum=window.daum||{},window.daum.roughmap={cdn:i,URL_KEY_DATA_LOAD_PRE:n+"//t1.daumcdn.net/roughmap/",url_protocal:n};let a=n+"//t1.daumcdn.net/kakaomapweb/place/jscss/roughmap/"+i+"/roughmapLander.js";const s=document.createElement("script");s.src=a,document.body.append(s),s.onload=()=>{r()}})()},[]),o.jsxs(Uo,{children:[o.jsx(ue,{plain:!0,style:{marginTop:0,marginBottom:32},children:o.jsx(Te,{children:"오시는 길"})}),o.jsx(Vo,{src:Yo}),o.jsx(Qo,{id:"daumRoughmapContainer1753587778659",className:"root_daum_roughmap root_daum_roughmap_landing"}),o.jsxs(Jo,{children:[o.jsx("span",{style:{fontWeight:"bold"},children:"프란치스코 교육회관"}),o.jsx("br",{}),"서울 중구 정동길 9 (정동 17-1, 04518)",o.jsx("br",{})," ",o.jsx("a",{href:"https://kko.kakao.com/SfeKhu-9eY",target:"_blank",rel:"noopener noreferrer",style:{color:"#3A6B5A",textDecoration:"underline",fontWeight:"normal",fontSize:"0.95em"},children:"카카오지도"})," | ",o.jsx("a",{href:"https://map.naver.com/p/entry/place/13353340?c=15.00,0,0,0,dh&placePath=/home?from=map&fromPanelNum=1&additionalHeight=76&timestamp=202507271836&locale=ko&svcName=map_pcv5",target:"_blank",rel:"noopener noreferrer",style:{color:"#3A6B5A",textDecoration:"underline",fontWeight:"normal",fontSize:"0.95em"},children:"네이버지도"}),o.jsx("br",{}),o.jsx("br",{}),o.jsx(Te,{children:"지하철 이용시"}),o.jsx("br",{}),"5호선 서대문역 5호선 출구에서",o.jsx("br",{}),"경향신문사 방향으로 7분 거리",o.jsx("br",{}),"1,2호선 시청역 1,2,12번 출구",o.jsx("br",{}),"(덕수궁 방향)에서 정동길을 따라 15분 거리",o.jsx("br",{}),o.jsx("br",{}),o.jsx(Te,{children:"버스 이용시"}),o.jsx("br",{}),o.jsx("span",{style:{fontWeight:"bold"},children:"서울역사박물관 앞 하차"}),o.jsx("br",{}),o.jsx("br",{}),o.jsx(Zo,{onMouseEnter:()=>t(!0),onMouseLeave:()=>t(!1),onClick:()=>t(!e),children:o.jsx("span",{style:{fontWeight:"500"},children:"🚌 이용 가능한 버스 보기"})}),e&&o.jsxs(Xo,{children:[o.jsxs("div",{style:{border:"1px solid #1976d2",borderRadius:"6px",padding:"8px",backgroundColor:"rgba(25, 118, 210, 0.05)"},children:[o.jsx("div",{style:{color:"#1976d2",fontWeight:"bold",fontSize:"0.8rem",marginBottom:"6px"},children:"파란색 간선버스"}),o.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"6px"},children:["101","103","150","160","260","270","271","273","370","470","600","601","602","704","702A 서오릉","702B 용두초교","705","720","721","741","6002","N26","N37","N75"].map((n,i)=>o.jsx("span",{style:{backgroundColor:"#1976d2",color:"white",padding:"2px 5px",borderRadius:"3px",fontSize:"0.75rem",fontWeight:"500"},children:n},i))})]}),o.jsxs("div",{style:{border:"1px solid #008000",borderRadius:"6px",padding:"8px",backgroundColor:"rgba(0, 128, 0, 0.05)"},children:[o.jsx("div",{style:{color:"#008000",fontWeight:"bold",fontSize:"0.8rem",marginBottom:"6px"},children:"초록색 일반버스"}),o.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"6px"},children:["790","1002","7019","8101","8701"].map((n,i)=>o.jsx("span",{style:{backgroundColor:"#008000",color:"white",padding:"2px 5px",borderRadius:"3px",fontSize:"0.75rem",fontWeight:"500"},children:n},i))})]}),o.jsxs("div",{style:{border:"1px solid #ff0000",borderRadius:"6px",padding:"8px",backgroundColor:"rgba(255, 0, 0, 0.05)"},children:[o.jsx("div",{style:{color:"#ff0000",fontWeight:"bold",fontSize:"0.8rem",marginBottom:"6px"},children:"빨간색 광역버스"}),o.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"6px"},children:["1004","8600","8601","9709","9709N","9710","9710-1","G6005"].map((n,i)=>o.jsx("span",{style:{backgroundColor:"#ff0000",color:"white",padding:"2px 5px",borderRadius:"3px",fontSize:"0.75rem",fontWeight:"500"},children:n},i))})]})]}),o.jsx("br",{}),o.jsx(Te,{children:"주차"}),o.jsx("br",{}),o.jsx("span",{style:{fontWeight:"bold"},children:"이화정동빌딩"}),o.jsx("br",{}),"주말 시내 교통 체증이 예상되오니 대중교통을 권장드리며,",o.jsx("br",{}),"승용차를 가져오시는 경우"," ",o.jsx("span",{style:{fontWeight:"bold"},children:"이화정동빌딩 주차장"}),"을",o.jsx("br",{}),"이용하시기 바랍니다.",o.jsx("br",{}),o.jsx("br",{}),o.jsx(Te,{children:"축하 화환"}),o.jsx("br",{}),"축하 화환은 정중히 사양합니다.",o.jsx("br",{}),"화환을 대신하여 어려운 이웃을 위해 쌀 ·성금으로",o.jsx("br",{}),"기부하실 수 있습니다.",o.jsx("br",{}),"(성금 기부 문의처 : 02) 6364-2245)",o.jsx("br",{})]})]})},ti="/wedding_invitation/Quote.png";b.div`
  padding-top: 42px;
  padding-left: 42px;
  padding-right: 42px;
  width: 100%;
  max-width: 800px;
  overflow: hidden;
  margin: 0 auto;
  position: relative;

  @media screen and (max-width: 768px) {
    padding-top: 32px;
    padding-left: 24px;
    padding-right: 24px;
  }

  @media screen and (max-width: 480px) {
    padding-top: 24px;
    padding-left: 16px;
    padding-right: 16px;
  }
`;b.span`
  display: block;
  margin: 0 auto;
  font-size: 1.3rem;
  font-family: 'mom_to_daughter';
  text-align: center;
  color: var(--title-color);
  line-height: 2.2rem;
  opacity: 1;
  background-image: url(${ti});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 500% 500%; /* 이미지를 3배 확대 */
  position: relative;
  padding: 60px 40px;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  max-width: 600px;
`;b.img`
  display: block;
  margin: 0 auto;
  width: 1.375rem;
  padding-bottom: 42px;

  @media screen and (max-width: 768px) {
    width: 1.2rem;
    padding-bottom: 32px;
  }

  @media screen and (max-width: 480px) {
    width: 1.1rem;
    padding-bottom: 24px;
  }
`;var st={};function wt(e){"@babel/helpers - typeof";return wt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},wt(e)}Object.defineProperty(st,"__esModule",{value:!0});st.CopyToClipboard=void 0;var Ge=Gr(T),ri=Gr(Ur),ni=["text","onCopy","options","children"];function Gr(e){return e&&e.__esModule?e:{default:e}}function er(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function tr(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?er(Object(r),!0).forEach(function(n){Ct(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):er(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function oi(e,t){if(e==null)return{};var r=ii(e,t),n,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function ii(e,t){if(e==null)return{};var r={},n=Object.keys(e),i,a;for(a=0;a<n.length;a++)i=n[a],!(t.indexOf(i)>=0)&&(r[i]=e[i]);return r}function ai(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function si(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function ci(e,t,r){return t&&si(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function di(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&vt(e,t)}function vt(e,t){return vt=Object.setPrototypeOf||function(n,i){return n.__proto__=i,n},vt(e,t)}function li(e){var t=ui();return function(){var n=Ze(e),i;if(t){var a=Ze(this).constructor;i=Reflect.construct(n,arguments,a)}else i=n.apply(this,arguments);return pi(this,i)}}function pi(e,t){if(t&&(wt(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Wr(e)}function Wr(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function ui(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Ze(e){return Ze=Object.setPrototypeOf?Object.getPrototypeOf:function(r){return r.__proto__||Object.getPrototypeOf(r)},Ze(e)}function Ct(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var Kr=function(e){di(r,e);var t=li(r);function r(){var n;ai(this,r);for(var i=arguments.length,a=new Array(i),s=0;s<i;s++)a[s]=arguments[s];return n=t.call.apply(t,[this].concat(a)),Ct(Wr(n),"onClick",function(l){var c=n.props,d=c.text,f=c.onCopy,u=c.children,m=c.options,p=Ge.default.Children.only(u),x=(0,ri.default)(d,m);f&&f(d,x),p&&p.props&&typeof p.props.onClick=="function"&&p.props.onClick(l)}),n}return ci(r,[{key:"render",value:function(){var i=this.props;i.text,i.onCopy,i.options;var a=i.children,s=oi(i,ni),l=Ge.default.Children.only(a);return Ge.default.cloneElement(l,tr(tr({},s),{},{onClick:this.onClick}))}}]),r}(Ge.default.PureComponent);st.CopyToClipboard=Kr;Ct(Kr,"defaultProps",{onCopy:void 0,options:void 0});var mi=st,jt=mi.CopyToClipboard;jt.CopyToClipboard=jt;var fi=jt;const ze=ur(fi),hi="/wedding_invitation/flower3.png",gi=b.div`
  padding-top: 42px;
  padding-bottom: 18px;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  padding-left: 16px;
  padding-right: 16px;

  @media screen and (max-width: 768px) {
    padding-top: 32px;
    padding-left: 12px;
    padding-right: 12px;
  }

  @media screen and (max-width: 480px) {
    padding-top: 24px;
    padding-left: 8px;
    padding-right: 8px;
  }
`,xi=b.p`
  font-size: 1rem;
  color: var(--title-color);
  font-weight: bold;
  opacity: 0.85;
  margin-bottom: 0;

  @media screen and (max-width: 768px) {
    font-size: 0.9rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 0.85rem;
  }
`,bi=b.p`
  font-size: 0.875rem;
  line-height: 1.75;
  opacity: 0.75;
  margin-bottom: 42px;

  @media screen and (max-width: 768px) {
    font-size: 0.8rem;
    line-height: 1.8;
    margin-bottom: 32px;
  }

  @media screen and (max-width: 480px) {
    font-size: 0.75rem;
    line-height: 1.9;
    margin-bottom: 24px;
  }
`,rr=b.p`
  font-size: 0.875rem;
  line-height: 1.75;
  opacity: 0.75;
  margin-bottom: 42px;

  @media screen and (max-width: 768px) {
    font-size: 0.8rem;
    line-height: 1.8;
    margin-bottom: 32px;
  }

  @media screen and (max-width: 480px) {
    font-size: 0.75rem;
    line-height: 1.9;
    margin-bottom: 24px;
  }
`,nr=b.p`
  font-size: 0.875rem;
  line-height: 1.75;
  opacity: 0.65;
  margin-top: 8px;

  @media screen and (max-width: 768px) {
    font-size: 0.8rem;
    line-height: 1.8;
  }

  @media screen and (max-width: 480px) {
    font-size: 0.75rem;
    line-height: 1.9;
  }
`,yi=b.div`
  margin-bottom: 3.125rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: center;
  gap: 16px;

  @media screen and (max-width: 768px) {
    flex-direction: row;
    gap: 12px;
    margin-bottom: 2.5rem;
  }

  @media screen and (max-width: 480px) {
    flex-direction: row;
    gap: 8px;
    margin-bottom: 2rem;
  }
`,or=b.div`
  width: 10.75rem;
  border: 1px solid var(--gray);
  padding: 2.188rem 0;
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 8px;
  min-height: 44px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: rgba(239, 221, 222, 0.1);
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  @media screen and (max-width: 768px) {
    width: calc(50% - 6px);
    padding: 1.5rem 0;
    min-height: 48px;
  }

  @media screen and (max-width: 480px) {
    width: calc(50% - 4px);
    padding: 1.25rem 0;
    min-height: 52px;
  }
`,wi=b.img`
  display: block;
  margin: 0 auto;
  width: 1.375rem;
  padding-bottom: 42px;

  @media screen and (max-width: 768px) {
    width: 1.2rem;
    padding-bottom: 32px;
  }

  @media screen and (max-width: 480px) {
    width: 1.1rem;
    padding-bottom: 24px;
  }
`,ir=b(Re)`
  .ant-modal-content {
    border-radius: 12px;
  }

  .ant-modal-header {
    border-radius: 12px 12px 0 0;
  }

  @media screen and (max-width: 768px) {
    .ant-modal {
      margin: 16px;
      max-width: calc(100vw - 32px);
    }

    .ant-modal-content {
      border-radius: 8px;
    }

    .ant-modal-header {
      border-radius: 8px 8px 0 0;
    }
  }

  @media screen and (max-width: 480px) {
    .ant-modal {
      margin: 8px;
      max-width: calc(100vw - 16px);
    }

    .ant-modal-content {
      border-radius: 6px;
    }

    .ant-modal-header {
      border-radius: 6px 6px 0 0;
    }
  }
`,vi=()=>{const[e,t]=T.useState(!1),[r,n]=T.useState(!1),{GROOM_NAME:i,GROOM_ACCOUNT_NUMBER:a,GROOM_FATHER_NAME:s,GROOM_FATHER_ACCOUNT_NUMBER:l,GROOM_MOTHER_NAME:c,GROOM_MOTHER_ACCOUNT_NUMBER:d,BRIDE_NAME:f,BRIDE_ACCOUNT_NUMBER:u}=at();return o.jsxs(gi,{children:[o.jsx(ue,{"data-aos":"fade-up",plain:!0,style:{marginTop:0,marginBottom:32},children:o.jsx(xi,{children:"축하의 마음을 전하세요"})}),o.jsx(wi,{src:hi}),o.jsx(bi,{"data-aos":"fade-up",children:"축하의 마음을 담아 축의금을 전달해 보세요."}),o.jsxs(yi,{children:[o.jsxs(or,{"data-aos":"fade-up",onClick:()=>t(!0),children:[o.jsx(It,{style:{fontSize:64,marginBottom:16},twoToneColor:"#829fe0"}),o.jsx("br",{}),o.jsx(rr,{children:"신랑측 계좌번호 확인"})]}),o.jsxs(or,{"data-aos":"fade-up",onClick:()=>n(!0),children:[o.jsx(It,{style:{fontSize:64,marginBottom:16},twoToneColor:"#fe7daf"}),o.jsx("br",{}),o.jsx(rr,{children:"신부측 계좌번호 확인"})]})]}),o.jsxs(ir,{title:o.jsx("b",{children:"신랑측 계좌번호"}),open:e,onOk:()=>t(!1),onCancel:()=>t(!1),footer:[o.jsx(nr,{children:"계좌번호 클릭시, 붙여넣기 가능한 텍스트로 복사됩니다."},"groom-footer")],children:[o.jsxs("div",{children:[o.jsx("b",{children:"부 : 김봉규"}),o.jsx(ue,{type:"vertical"}),o.jsx(ze,{text:l,children:o.jsx(Q,{type:"text",style:{padding:0,margin:0},onClick:()=>K.success("계좌번호가 복사되었습니다."),children:l})})]}),o.jsxs("div",{style:{marginTop:24,marginBottom:24},children:[o.jsx("b",{children:"모 : 송혜정"}),o.jsx(ue,{type:"vertical"}),o.jsx(ze,{text:d,children:o.jsx(Q,{type:"text",style:{padding:0,margin:0},onClick:()=>K.success("계좌번호가 복사되었습니다."),children:d})})]}),o.jsxs("div",{children:[o.jsx("b",{children:"신랑 : 김진원"}),o.jsx(ue,{type:"vertical"}),o.jsx(ze,{text:a,children:o.jsx(Q,{type:"text",style:{padding:0,margin:0},onClick:()=>K.success("계좌번호가 복사되었습니다."),children:a})})]})]}),o.jsx(ir,{title:o.jsx("b",{children:"신부측 계좌번호"}),open:r,onOk:()=>n(!1),onCancel:()=>n(!1),footer:[o.jsx(nr,{children:"계좌번호 클릭시, 붙여넣기 가능한 텍스트로 복사됩니다."},"bride-footer")],children:o.jsxs("div",{children:[o.jsx("b",{children:"신부 : 이연제"}),o.jsx(ue,{type:"vertical"}),o.jsx(ze,{text:u,children:o.jsx(Q,{type:"text",style:{padding:0,margin:0},onClick:()=>K.success("계좌번호가 복사되었습니다."),children:u})})]})})]})},ji=b.div`
  padding-top: 42px;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  padding-left: 16px;
  padding-right: 16px;

  @media screen and (max-width: 768px) {
    padding-top: 32px;
    padding-left: 12px;
    padding-right: 12px;
  }

  @media screen and (max-width: 480px) {
    padding-top: 24px;
    padding-left: 8px;
    padding-right: 8px;
  }
`,ki=b.span`
  font-size: 1rem;
  color: var(--title-color);
  font-weight: bold;
  opacity: 0.85;
  margin-bottom: 0;

  @media screen and (max-width: 768px) {
    font-size: 0.9rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 0.85rem;
  }
`,Ei=b.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-width: 400px;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    gap: 10px;
  }

  @media screen and (max-width: 480px) {
    gap: 8px;
  }
`,_i=b(Q)`
  background: var(--white);
  border-color: var(--white);
  color: var(--black);
  width: 100%;
  height: 48px;
  border-radius: 8px;
  font-weight: 500;
  align-item: center;
  transition: all 0.3s ease;

  &:hover {
    background-color: var(--light-yellow) !important;
    border-color: var(--light-yellow) !important;
    color: var(--black) !important;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  &:focus {
    background-color: var(--yellow) !important;
    border-color: var(--yellow) !important;
    color: var(--black) !important;
    outline: 2px solid var(--yellow) !important;
    outline-offset: 2px !important;
  }

  @media screen and (max-width: 768px) {
    height: 52px;
    font-size: 0.9rem;
  }

  @media screen and (max-width: 480px) {
    height: 56px;
    font-size: 0.85rem;
  }
`,ar=b(Q)`
  background: var(--white);
  border-color: var(--white);
  color: var(--black);
  width: 100%;
  height: 48px;
  border-radius: 8px;
  font-weight: 500;
  align-item: center;
  transition: all 0.3s ease;

  &:hover {
    background-color: var(--light-green) !important;
    border-color: var(--light-green) !important;
    color: var(--black) !important;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  &:focus {
    background-color: var(--medium-green) !important;
    border-color: var(--medium-green) !important;
    color: var(--black) !important;
    outline: 2px solid var(--medium-green) !important;
    outline-offset: 2px !important;
  }

  @media screen and (max-width: 768px) {
    height: 52px;
    font-size: 0.9rem;
  }

  @media screen and (max-width: 480px) {
    height: 56px;
    font-size: 0.85rem;
  }
`,Si=()=>{const[e,t]=T.useState(!1),{GROOM_NAME:r,BRIDE_NAME:n,KAKAOTALK_SHARE_IMAGE:i,WEDDING_INVITATION_URL:a,KAKAOTALK_API_TOKEN:s}=at();T.useEffect(()=>{t(!0)},[]);const l=()=>{if(!s){console.warn("카카오톡 API 토큰이 설정되지 않았습니다."),K.error("카카오톡 공유 기능을 사용할 수 없습니다.");return}if(window.Kakao){const d=window.Kakao;if(!d.isInitialized())try{d.init(s)}catch(f){console.error("카카오톡 SDK 초기화 실패:",f),K.error("카카오톡 공유 기능을 초기화할 수 없습니다.");return}try{d.Link.createDefaultButton({objectType:"feed",container:"#sendKakao",content:{title:`${r}❤${n} 결혼식에 초대합니다`,description:"아래의 '청첩장 열기' 버튼을 눌러 읽어주세요🤵👰",imageUrl:i,link:{mobileWebUrl:window.location.href,webUrl:window.location.href}},buttons:[{title:"청첩장 열기",link:{mobileWebUrl:window.location.href,webUrl:window.location.href}}],installTalk:!0}),setTimeout(()=>{const f=document.getElementById("sendKakao");f?(f.click(),K.success("카카오톡으로 청첩장을 공유합니다!")):K.error("공유 버튼을 찾을 수 없습니다.")},100)}catch(f){console.error("카카오톡 공유 버튼 생성 실패:",f),K.error("카카오톡 공유 기능을 사용할 수 없습니다.")}}else console.warn("카카오톡 SDK가 로드되지 않았습니다."),K.error("카카오톡 공유 기능을 사용할 수 없습니다. 잠시 후 다시 시도해주세요.")},c=!s;return o.jsxs(ji,{style:{marginBottom:16},children:[o.jsx(ue,{"data-aos":"fade-up",plain:!0,style:{marginTop:0,marginBottom:32},children:o.jsx(ki,{children:"청첩장 공유하기"})}),o.jsxs(Ei,{children:[!c&&o.jsx(_i,{style:{margin:0},icon:o.jsx(rn,{}),id:"sendKakao",size:"large",onClick:l,children:"카카오톡으로 공유하기"}),e?o.jsx(ze,{text:a,children:o.jsx(ar,{style:{margin:0},icon:o.jsx(zt,{}),size:"large",onClick:()=>K.success("청첩장 링크가 복사되었습니다."),children:"링크로 공유하기"})}):o.jsx(ar,{style:{margin:0},icon:o.jsx(zt,{}),size:"large",disabled:!0,children:"링크로 공유하기"})]})]})},Oi={apiKey:"AIzaSyDgt17zNlbq9-e31tmXjhp6dwbYFPo9uSk",authDomain:"wedding1108-b3bdb.firebaseapp.com",projectId:"wedding1108-b3bdb",storageBucket:"wedding1108-b3bdb.firebasestorage.app",messagingSenderId:"692522081520",appId:"1:692522081520:web:7a186f603800154865b635"},Ai=sn(Oi),$e=cn(Ai),Le="guestbooks",Ci=async e=>{try{if(!navigator.onLine)throw new Error("인터넷 연결을 확인해주세요.");return{success:!0,id:(await mn(mr($e,Le),{...e,password:e.password,timestamp:fr()})).id,message:"방명록이 성공적으로 작성되었습니다."}}catch(t){throw console.error("방명록 추가 오류:",t),new Error("방명록 작성에 실패했습니다. 잠시 후 다시 시도해주세요.")}},Ti=async(e=50)=>{try{if(!navigator.onLine)throw new Error("인터넷 연결을 확인해주세요.");const t=dn(mr($e,Le),ln("timestamp","desc"),pn(e)),r=await un(t),n=[];return r.forEach(i=>{var a,s,l;n.push({id:i.id,...i.data(),timestamp:((l=(s=(a=i.data().timestamp)==null?void 0:a.toDate)==null?void 0:s.call(a))==null?void 0:l.toISOString())||new Date().toISOString()})}),{success:!0,data:n,total:n.length,hasMore:n.length===e}}catch(t){throw console.error("방명록 조회 오류:",t),t.code==="permission-denied"?new Error("방명록 접근 권한이 없습니다. 관리자에게 문의해주세요."):t.code==="unavailable"?new Error("서비스가 일시적으로 사용할 수 없습니다. 잠시 후 다시 시도해주세요."):t.message.includes("ERR_BLOCKED_BY_CLIENT")||t.message.includes("blocked")?new Error("광고 차단기나 보안 확장 프로그램이 서비스 접근을 차단하고 있습니다. 확장 프로그램을 비활성화하고 다시 시도해주세요."):t.message.includes("network")||t.message.includes("fetch")?new Error("네트워크 연결을 확인해주세요."):new Error("방명록을 불러오는데 실패했습니다. 잠시 후 다시 시도해주세요.")}},Ri=async(e,t)=>{try{if(!navigator.onLine)throw new Error("인터넷 연결을 확인해주세요.");const r=kt($e,Le,e);return await fn(r,{...t,updatedAt:fr()}),{success:!0,message:"방명록이 성공적으로 수정되었습니다."}}catch(r){throw console.error("방명록 수정 오류:",r),r.code==="permission-denied"?new Error("방명록 수정 권한이 없습니다."):r.code==="not-found"?new Error("수정할 방명록을 찾을 수 없습니다."):r.message.includes("ERR_BLOCKED_BY_CLIENT")||r.message.includes("blocked")?new Error("광고 차단기나 보안 확장 프로그램이 서비스 접근을 차단하고 있습니다."):new Error("방명록 수정에 실패했습니다. 잠시 후 다시 시도해주세요.")}},Ii=async(e,t)=>{try{if(!navigator.onLine)throw new Error("인터넷 연결을 확인해주세요.");if(t==="admin12345678")return{success:!0,message:"마스터 비밀번호가 확인되었습니다."};const n=kt($e,Le,e),i=await hn(n);if(!i.exists())throw new Error("방명록을 찾을 수 없습니다.");if(i.data().password!==t)throw new Error("비밀번호가 올바르지 않습니다.");return{success:!0,message:"비밀번호가 확인되었습니다."}}catch(r){throw console.error("비밀번호 검증 오류:",r),r.message.includes("비밀번호가 올바르지 않습니다")?r:r.code==="not-found"?new Error("방명록을 찾을 수 없습니다."):r.message.includes("ERR_BLOCKED_BY_CLIENT")||r.message.includes("blocked")?new Error("광고 차단기나 보안 확장 프로그램이 서비스 접근을 차단하고 있습니다."):new Error("비밀번호 검증에 실패했습니다. 잠시 후 다시 시도해주세요.")}},zi=async e=>{try{if(!navigator.onLine)throw new Error("인터넷 연결을 확인해주세요.");const t=kt($e,Le,e);return await gn(t),{success:!0,message:"방명록이 성공적으로 삭제되었습니다."}}catch(t){throw console.error("방명록 삭제 오류:",t),t.code==="permission-denied"?new Error("방명록 삭제 권한이 없습니다."):t.code==="not-found"?new Error("삭제할 방명록을 찾을 수 없습니다."):t.message.includes("ERR_BLOCKED_BY_CLIENT")||t.message.includes("blocked")?new Error("광고 차단기나 보안 확장 프로그램이 서비스 접근을 차단하고 있습니다."):new Error("방명록 삭제에 실패했습니다. 잠시 후 다시 시도해주세요.")}},{TextArea:sr}=be,{Text:Ni}=Vr,Pi=b.div`
  padding-top: 42px;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  padding-left: 16px;
  padding-right: 16px;

  @media screen and (max-width: 768px) {
    padding-top: 32px;
    padding-left: 12px;
    padding-right: 12px;
  }

  @media screen and (max-width: 480px) {
    padding-top: 24px;
    padding-left: 8px;
    padding-right: 8px;
  }
`,Mi=b.span`
  font-size: 1rem;
  color: var(--title-color);
  font-weight: bold;
  opacity: 0.85;
  margin-bottom: 0;

  @media screen and (max-width: 768px) {
    font-size: 0.9rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 0.85rem;
  }
`,Di=b(Q)`
  background: var(--white);
  border-color: var(--white);
  color: var(--black);
  width: 100%;
  max-width: 400px;
  height: 48px;
  border-radius: 8px;
  font-weight: 500;
  transition: all 0.3s ease;
  margin: 0 auto 24px;

  &:hover {
    background-color: var(--light-green) !important;
    border-color: var(--light-green) !important;
    color: var(--black) !important;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  &:focus {
    background-color: var(--medium-green) !important;
    border-color: var(--medium-green) !important;
    color: var(--black) !important;
  }

  @media screen and (max-width: 768px) {
    height: 52px;
    font-size: 0.9rem;
  }

  @media screen and (max-width: 480px) {
    height: 56px;
    font-size: 0.85rem;
  }
`,qr=b(en)`
  margin-bottom: 16px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  }

  &.expanded {
    transform: scale(1.02);
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.2);
  }

  .ant-card-body {
    padding: 16px;
  }

  @media screen and (max-width: 768px) {
    margin-bottom: 12px;

    .ant-card-body {
      padding: 12px;
    }
  }
`,$i=b.div`
  position: absolute;
  top: 12px;
  left: 16px;
  font-size: 0.75rem;
  color: #999;
  opacity: 0.7;

  @media screen and (max-width: 768px) {
    font-size: 0.7rem;
    top: 8px;
    left: 12px;
  }
`,Li=b.div`
  position: absolute;
  bottom: 12px;
  right: 16px;
  display: flex;
  gap: 8px;
  opacity: 0;
  transition: opacity 0.3s ease;

  ${qr}:hover & {
    opacity: 1;
  }

  @media screen and (max-width: 768px) {
    bottom: 8px;
    right: 12px;
    gap: 6px;
  }
`,cr=b(Q)`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--white);
  border-color: var(--light-green);
  color: var(--dark-green);
  transition: all 0.3s ease;

  &:hover {
    background: var(--light-green) !important;
    border-color: var(--medium-green) !important;
    color: var(--dark-green) !important;
    transform: scale(1.1);
  }

  &.ant-btn-dangerous {
    border-color: #ff4d4f;
    color: #ff4d4f;

    &:hover {
      background: #ff4d4f !important;
      border-color: #ff7875 !important;
      color: white !important;
    }
  }

  @media screen and (max-width: 768px) {
    width: 28px;
    height: 28px;
  }
`,Bi=b.div`
  font-weight: bold;
  color: var(--dark-green);
  margin-bottom: 8px;
  margin-top: 24px;
  font-size: 1rem;

  @media screen and (max-width: 768px) {
    font-size: 0.9rem;
    margin-bottom: 6px;
    margin-top: 20px;
  }
`,Fi=b.div`
  color: var(--text-color);
  line-height: 1.6;
  margin-top: 8px;
  white-space: pre-wrap;
  word-break: break-word;

  @media screen and (max-width: 768px) {
    font-size: 0.9rem;
    line-height: 1.5;
  }
`,Gi=()=>{const[e,t]=T.useState(!1),[r,n]=T.useState([]),[i,a]=T.useState(!1),[s,l]=T.useState(!1),[c,d]=T.useState(!1),[f,u]=T.useState(!1),[m,p]=T.useState(null),[x,j]=T.useState(""),[I,z]=T.useState(!0),[O,A]=T.useState(!1),[N,M]=T.useState(!1),[v]=re.useForm(),[y]=re.useForm(),[S]=re.useForm();T.useEffect(()=>{t(!0)},[]),T.useEffect(()=>{if(!e)return;const h=async(E=0)=>{try{z(!0),M(!1);const C=await Ti();n(C.data||[])}catch(C){if(console.error("방명록 로드 실패:",C),E<2&&(C.message.includes("blocked")||C.message.includes("network"))){console.log(`재시도 중... (${E+1}/2)`),setTimeout(()=>{h(E+1)},2e3);return}M(!0),K.error(C.message||"방명록을 불러오는데 실패했습니다.")}finally{z(!1)}};h()},[e]);const H=async()=>{try{A(!0);const h=await v.validateFields(),E=await Ci({name:h.name,message:h.message,relationship:h.relationship||"",password:h.password});if(E.success){const C={id:E.id,name:h.name,message:h.message,relationship:h.relationship||"",timestamp:new Date().toISOString()};n([C,...r]),v.resetFields(),a(!1),K.success("방명록이 등록되었습니다.")}}catch(h){console.error("방명록 추가 실패:",h),K.error(h.message||"방명록 등록에 실패했습니다.")}finally{A(!1)}},se=async()=>{try{A(!0);const h=await y.validateFields();(await Ri(m.id,{name:h.name,message:h.message,relationship:h.relationship||""})).success&&(n(r.map(C=>C.id===m.id?{...C,name:h.name,message:h.message,relationship:h.relationship||"",updatedAt:new Date().toISOString()}:C)),y.resetFields(),l(!1),p(null),K.success("방명록이 수정되었습니다."))}catch(h){console.error("방명록 수정 실패:",h),K.error(h.message||"방명록 수정에 실패했습니다.")}finally{A(!1)}},w=async h=>{try{(await zi(h)).success&&(n(r.filter(C=>C.id!==h)),K.success("방명록이 삭제되었습니다."))}catch(E){console.error("방명록 삭제 실패:",E),K.error(E.message||"방명록 삭제에 실패했습니다.")}},g=(h,E)=>{p(h),j(E),d(!0),S.resetFields()},R=async()=>{try{A(!0);const E=(await S.validateFields()).password,C=await Ii(m.id,E);C.success&&(x==="edit"?(y.setFieldsValue({name:m.name,message:m.message,relationship:m.relationship||""}),d(!1),l(!0),p({...m,password:E}),K.success(C.message)):x==="delete"&&(d(!1),u(!0)))}catch(h){console.error("비밀번호 확인 실패:",h),K.error(h.message||"비밀번호 확인에 실패했습니다.")}finally{A(!1)}},k=h=>{g(h,"edit")},W=h=>{const E=r.find(C=>C.id===h);E&&g(E,"delete")};T.useEffect(()=>{const h=E=>{f&&E.key==="Enter"&&(E.preventDefault(),w(m.id),u(!1),p(null),j(""))};return f&&document.addEventListener("keydown",h),()=>{document.removeEventListener("keydown",h)}},[f,m]);const Z=h=>{try{if(!h)return"날짜 없음";const E=new Date(h);return isNaN(E.getTime())?"날짜 오류":E.toLocaleString("ko-KR",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"})}catch(E){return console.error("날짜 포맷팅 오류:",E),"날짜 오류"}};return o.jsxs(Pi,{style:{marginBottom:16},children:[o.jsx(ue,{"data-aos":"fade-up",plain:!0,style:{marginTop:0,marginBottom:32},children:o.jsx(Mi,{children:"방명록"})}),N&&o.jsx(Jr,{message:"방명록 서비스 연결 오류",description:o.jsxs("div",{children:[o.jsx("p",{children:"서버와의 연결에 문제가 있어 방명록 기능을 사용할 수 없습니다."}),o.jsxs("p",{style:{marginTop:"8px",fontSize:"0.9rem"},children:[o.jsx("strong",{children:"해결 방법:"}),o.jsx("br",{}),"1. 광고 차단기나 보안 확장 프로그램을 일시적으로 비활성화",o.jsx("br",{}),"2. 브라우저를 새로고침",o.jsx("br",{}),"3. 잠시 후 다시 시도"]})]}),type:"warning",showIcon:!0,icon:o.jsx(nn,{}),style:{marginBottom:16}}),o.jsx(Di,{icon:o.jsx(Qr,{}),size:"large",onClick:()=>a(!0),disabled:N,children:"방명록 작성하기"}),o.jsx("div",{style:{textAlign:"left"},children:e?I?o.jsxs("div",{style:{textAlign:"center",padding:"40px 20px"},children:[o.jsx(Rt,{size:"large"}),o.jsx("div",{style:{marginTop:"16px",color:"#666"},children:"방명록을 불러오는 중..."})]}):N?o.jsxs("div",{style:{textAlign:"center",padding:"40px 20px",color:"#999",fontSize:"0.9rem"},children:["방명록 서비스를 사용할 수 없습니다.",o.jsx("br",{}),"잠시 후 다시 시도해주세요."]}):o.jsxs(o.Fragment,{children:[r.length>0&&o.jsx("div",{style:{marginBottom:"16px",padding:"0 4px"},children:o.jsxs(Ni,{style:{color:"#666",fontSize:"0.9rem"},children:["총 ",r.length,"개의 방명록"]})}),r.length===0?o.jsxs("div",{style:{textAlign:"center",padding:"40px 20px",color:"#999",fontSize:"0.9rem"},children:["아직 방명록이 없습니다.",o.jsx("br",{}),"첫 번째 방명록을 남겨보세요!"]}):r.map(h=>o.jsxs(qr,{style:{cursor:"default"},children:[o.jsx($i,{children:Z(h.timestamp)}),o.jsx(Bi,{children:h.name}),h.relationship&&o.jsx("div",{style:{fontSize:"0.8rem",color:"#666",marginBottom:"8px"},children:h.relationship}),o.jsx(Fi,{children:h.message}),o.jsxs(Li,{children:[o.jsx(cr,{icon:o.jsx(Zr,{}),onClick:E=>{E.stopPropagation(),k(h)},title:"수정"}),o.jsx(cr,{icon:o.jsx(Xr,{}),onClick:E=>{E.stopPropagation(),W(h.id)},title:"삭제",danger:!0})]})]},h.id))]}):o.jsxs("div",{style:{textAlign:"center",padding:"40px 20px"},children:[o.jsx(Rt,{size:"large"}),o.jsx("div",{style:{marginTop:"16px",color:"#666"},children:"로딩 중..."})]})}),o.jsx(Re,{title:"방명록 작성",open:i,onCancel:()=>{a(!1),v.resetFields()},okText:"등록",cancelText:"취소",width:400,confirmLoading:O,footer:[o.jsx(Q,{onClick:()=>{a(!1),v.resetFields()},children:"취소"},"cancel"),o.jsx(Q,{type:"primary",loading:O,onClick:()=>v.submit(),children:"등록"},"submit")],children:o.jsxs(re,{form:v,layout:"vertical",onFinish:H,children:[o.jsx(re.Item,{name:"name",label:"이름",rules:[{required:!0,message:"이름을 입력해주세요."}],children:o.jsx(be,{prefix:o.jsx(Nt,{}),placeholder:"이름을 입력하세요",maxLength:20,onPressEnter:()=>v.submit()})}),o.jsx(re.Item,{name:"relationship",label:"관계 (선택사항)",children:o.jsx(be,{placeholder:"예: 신랑 친구, 신부 동생 등",maxLength:30,onPressEnter:()=>v.submit()})}),o.jsx(re.Item,{name:"message",label:"메시지",rules:[{required:!0,message:"메시지를 입력해주세요."}],children:o.jsx(sr,{prefix:o.jsx(Pt,{}),placeholder:"축하 메시지를 남겨주세요",rows:4,maxLength:500,showCount:!0,onPressEnter:h=>{(h.ctrlKey||h.metaKey)&&v.submit()}})}),o.jsx(re.Item,{name:"password",label:"비밀번호",rules:[{required:!0,message:"비밀번호를 입력해주세요."},{min:4,message:"비밀번호는 4자 이상이어야 합니다."},{max:20,message:"비밀번호는 20자 이하여야 합니다."}],children:o.jsx(be.Password,{prefix:o.jsx(Mt,{}),placeholder:"수정/삭제 시 사용할 비밀번호",maxLength:20,onPressEnter:()=>v.submit()})})]})}),o.jsx(Re,{title:"방명록 수정",open:s,onCancel:()=>{l(!1),p(null),y.resetFields()},okText:"수정",cancelText:"취소",width:400,confirmLoading:O,footer:[o.jsx(Q,{onClick:()=>{l(!1),p(null),y.resetFields()},children:"취소"},"cancel"),o.jsx(Q,{type:"primary",loading:O,onClick:()=>y.submit(),children:"수정"},"submit")],children:o.jsxs(re,{form:y,layout:"vertical",onFinish:se,children:[o.jsx(re.Item,{name:"name",label:"이름",rules:[{required:!0,message:"이름을 입력해주세요."}],children:o.jsx(be,{prefix:o.jsx(Nt,{}),placeholder:"이름을 입력하세요",maxLength:20,onPressEnter:()=>y.submit()})}),o.jsx(re.Item,{name:"relationship",label:"관계 (선택사항)",children:o.jsx(be,{placeholder:"예: 신랑 친구, 신부 동생 등",maxLength:30,onPressEnter:()=>y.submit()})}),o.jsx(re.Item,{name:"message",label:"메시지",rules:[{required:!0,message:"메시지를 입력해주세요."}],children:o.jsx(sr,{prefix:o.jsx(Pt,{}),placeholder:"축하 메시지를 남겨주세요",rows:4,maxLength:500,showCount:!0,onPressEnter:h=>{(h.ctrlKey||h.metaKey)&&y.submit()}})})]})}),o.jsxs(Re,{title:`방명록 ${x==="edit"?"수정":"삭제"} - 비밀번호 확인`,open:c,onCancel:()=>{d(!1),p(null),j(""),S.resetFields()},okText:"확인",cancelText:"취소",width:400,confirmLoading:O,footer:[o.jsx(Q,{onClick:()=>{d(!1),p(null),j(""),S.resetFields()},children:"취소"},"cancel"),o.jsx(Q,{type:"primary",loading:O,onClick:()=>S.submit(),children:"확인"},"submit")],children:[o.jsx("div",{style:{marginBottom:16},children:o.jsxs("p",{style:{marginBottom:8},children:[o.jsx("strong",{children:m==null?void 0:m.name}),"님의 방명록을 ",x==="edit"?"수정":"삭제","하려면 비밀번호를 입력해주세요."]})}),o.jsx(re,{form:S,layout:"vertical",onFinish:R,children:o.jsx(re.Item,{name:"password",label:"비밀번호",rules:[{required:!0,message:"비밀번호를 입력해주세요."},{min:4,message:"비밀번호는 4자 이상이어야 합니다."}],children:o.jsx(be.Password,{prefix:o.jsx(Mt,{}),placeholder:"개별 비밀번호 또는 마스터 비밀번호",maxLength:20,onPressEnter:()=>S.submit()})})})]}),o.jsx(Re,{title:"방명록 삭제",open:f,onCancel:()=>{u(!1),p(null),j("")},okText:"삭제",cancelText:"취소",width:400,confirmLoading:O,footer:[o.jsx(Q,{onClick:()=>{u(!1),p(null),j("")},children:"취소"},"cancel"),o.jsx(Q,{type:"primary",danger:!0,loading:O,onClick:()=>{w(m.id),u(!1),p(null),j("")},children:"삭제"},"delete")],children:o.jsxs("div",{style:{marginBottom:16},children:[o.jsxs("p",{style:{marginBottom:8},children:[o.jsx("strong",{children:m==null?void 0:m.name}),"님의 방명록을 삭제하시겠습니까?"]}),o.jsx("p",{style:{color:"#ff4d4f",fontSize:"0.9rem"},children:"이 작업은 되돌릴 수 없습니다."})]})})]})},Wi=b.footer`
  padding: 20px;
  text-align: center;
  background: var(--dark-green);
  color: var(--white);
  margin-top: 40px;
`,Ki=({children:e,...t})=>o.jsx(Wi,{...t,children:e});b.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  transition: opacity 0.5s ease;
  opacity: ${e=>e.$loaded?0:1};
  pointer-events: ${e=>e.$loaded?"none":"auto"};
`;b.div`
  text-align: center;
  color: var(--title-color);
  padding: 20px;

  @media screen and (max-width: 768px) {
    padding: 16px;
  }

  @media screen and (max-width: 480px) {
    padding: 12px;
  }
`;b.div`
  width: 40px;
  height: 40px;
  border: 3px solid #f3f3f3;
  border-top: 3px solid var(--title-color);
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin: 0 auto 16px;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @media screen and (max-width: 768px) {
    width: 36px;
    height: 36px;
    border-width: 2.5px;
    margin-bottom: 14px;
  }

  @media screen and (max-width: 480px) {
    width: 32px;
    height: 32px;
    border-width: 2px;
    margin-bottom: 12px;
  }
`;b.div`
  font-size: 1rem;
  font-weight: 500;

  @media screen and (max-width: 768px) {
    font-size: 0.9rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 0.85rem;
  }
`;b.div`
  font-size: 0.8rem;
  margin-top: 8px;
  opacity: 0.7;

  @media screen and (max-width: 768px) {
    font-size: 0.75rem;
    margin-top: 6px;
  }

  @media screen and (max-width: 480px) {
    font-size: 0.7rem;
    margin-top: 4px;
  }
`;const qi=b.div`
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  @media screen and (max-width: 768px) {
    top: 16px;
    right: 16px;
    gap: 6px;
  }

  @media screen and (max-width: 480px) {
    top: 12px;
    right: 12px;
    gap: 4px;
  }
`,Hi=b.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  background: var(--music-button-bg);
  color: var(--background-color);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  -webkit-tap-highlight-color: transparent;

  &:hover {
    background: var(--music-button-hover);
    transform: scale(1.1);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  }

  &:active {
    transform: scale(0.95);
  }

  &.playing {
    background: var(--music-button-playing);
    color: var(--music-button-playing-text);
    animation: pulse 2s infinite;
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 var(--light-yellow);
    }
    70% {
      box-shadow: 0 0 0 5px var(--light-yellow);
    }
    100% {
      box-shadow: 0 0 0 0 rgba(255, 215, 0, 0);
    }
  }

  @media screen and (max-width: 768px) {
    width: 44px;
    height: 44px;
    font-size: 16px;
    min-height: 44px;
    min-width: 44px;
  }

  @media screen and (max-width: 480px) {
    width: 48px;
    height: 48px;
    font-size: 18px;
    min-height: 48px;
    min-width: 48px;
  }
`,Yi=b.div`
  font-size: 10px;
  color: var(--title-color);
  text-align: center;
  font-weight: 500;
  opacity: 0.8;
  background: var(--music-label-bg);
  padding: 2px 6px;
  border-radius: 8px;
  white-space: nowrap;

  @media screen and (max-width: 768px) {
    font-size: 9px;
    padding: 3px 8px;
  }

  @media screen and (max-width: 480px) {
    font-size: 8px;
    padding: 4px 10px;
  }
`,Ui=({audioRef:e,onMusicToggle:t})=>{const[r,n]=T.useState(!1);T.useEffect(()=>{const a=e.current;if(!a)return;const s=()=>n(!0),l=()=>n(!1),c=()=>{a.currentTime=0,a.play().catch(d=>{console.log("Music replay failed:",d)})};return a.addEventListener("play",s),a.addEventListener("pause",l),a.addEventListener("ended",c),()=>{a.removeEventListener("play",s),a.removeEventListener("pause",l),a.removeEventListener("ended",c)}},[e]);const i=()=>{const a=e.current;a&&(r?a.pause():a.play().catch(s=>{console.log("Music play failed:",s)}),t&&t(!r))};return o.jsxs(qi,{children:[o.jsx(Hi,{onClick:i,className:r?"playing":"",title:r?"음악 켜기":"음악 끄기",children:r?o.jsx(on,{}):o.jsx(an,{})}),o.jsx(Yi,{children:r?"음악 OFF":"음악 ON"})]})},dr="/wedding_invitation/song.mp3",lr=b.div`
  background-image: url(${"/wedding_invitation/GroovePaper.png"});
  background-size: 100px auto;
  background-repeat: repeat;
  background-attachment: fixed;
  background-position: center;
  min-height: 100vh;
  color: var(--text-color);
  position: relative;

  /* 모바일 최적화 */
  @media screen and (max-width: 768px) {
    background-size: 40px auto;
  }

  @media screen and (max-width: 480px) {
    background-size: 5px auto;
  }
`,pr=b.div`
  @font-face {
    font-family: 'mom_to_daughter';
    src: url(${"/wedding_invitation/fonts/mom_to_daughter.woff2"}) format('woff2'),
         url(${"/wedding_invitation/fonts/mom_to_daughter.woff"}) format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }
`,Vi=()=>{const[e,t]=T.useState(!1),[r,n]=T.useState(!1),[i,a]=T.useState(!1),s=T.useRef(null);T.useEffect(()=>{navigator.userAgent.includes("Edg")||navigator.userAgent.includes("Edge")?(console.log("Edge browser detected - applying compatibility fixes"),setTimeout(()=>a(!0),200)):a(!0)},[]),T.useEffect(()=>{const c=s.current;if(!c)return;const d=setTimeout(()=>{console.log("Audio loading timeout - proceeding anyway"),t(!0)},5e3),f=()=>{console.log("Audio can play"),clearTimeout(d),t(!0)},u=()=>{console.log("Audio can play through"),clearTimeout(d),t(!0)},m=z=>{console.error("Audio loading failed:",z),clearTimeout(d),n(!0),t(!0)},p=()=>{console.log("Audio loading started")},x=()=>{console.log("Audio loading progress")},j=()=>{console.log("Audio data loaded"),clearTimeout(d),t(!0)},I=()=>{console.log("Audio metadata loaded"),clearTimeout(d),t(!0)};return c.addEventListener("loadstart",p),c.addEventListener("progress",x),c.addEventListener("loadeddata",j),c.addEventListener("loadedmetadata",I),c.addEventListener("canplay",f),c.addEventListener("canplaythrough",u),c.addEventListener("error",m),()=>{clearTimeout(d),c.removeEventListener("loadstart",p),c.removeEventListener("progress",x),c.removeEventListener("loadeddata",j),c.removeEventListener("loadedmetadata",I),c.removeEventListener("canplay",f),c.removeEventListener("canplaythrough",u),c.removeEventListener("error",m)}},[]),T.useEffect(()=>{if(window.Kakao)return;const c=document.createElement("script");return c.async=!0,c.src="https://developers.kakao.com/sdk/js/kakao.min.js",c.onload=()=>{console.log("카카오톡 SDK 로드 완료")},c.onerror=()=>{console.error("카카오톡 SDK 로드 실패")},document.body.appendChild(c),()=>{const d=document.querySelector('script[src*="kakao.min.js"]');d&&document.body.removeChild(d)}},[]),T.useEffect(()=>{En.init({duration:1500})},[]);const l=c=>{console.log("Music toggled:",c?"ON":"OFF")};return i?o.jsxs(lr,{children:[o.jsx(pr,{}),o.jsx(Ui,{audioRef:s,onMusicToggle:l}),o.jsxs("audio",{ref:s,preload:"auto",loop:!0,style:{display:"none"},onLoadStart:()=>console.log("Audio load start"),onCanPlay:()=>{console.log("Audio can play from inline"),t(!0)},onError:c=>{console.error("Audio error from inline:",c),n(!0),t(!0)},children:[o.jsx("source",{src:dr,type:"audio/mpeg"}),o.jsx("source",{src:dr,type:"audio/mp3"}),o.jsx("track",{kind:"captions"})]}),o.jsx(Po,{}),o.jsx(Go,{}),o.jsx(Ho,{}),o.jsx(ei,{}),o.jsx(vi,{}),o.jsx(Si,{}),o.jsx(Gi,{}),o.jsxs(Ki,{style:{background:"var(--dark-green)",opacity:.8,textAlign:"center",color:"var(--dark-green)"},children:[o.jsx("div",{style:{fontSize:"0.8rem",marginBottom:"4px",color:"var(--background-color)"},children:"Copyright © 2025 Jinwon Kim & Yeonje Lee"}),o.jsxs("div",{style:{fontSize:"0.7rem",opacity:.6,marginTop:"4px",fontStyle:"italic",color:"var(--background-color)"},children:["Background Music:"," ",o.jsx("a",{href:"https://youtu.be/RbCjnviTo_s?si=oj1JppC3nud_nu96",target:"_blank",rel:"noopener noreferrer",style:{color:"inherit",textDecoration:"underline",opacity:.8},children:"YouTube"})]})]})]}):o.jsxs(lr,{children:[o.jsx(pr,{}),o.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",fontSize:"1.2rem",color:"var(--text-color)"},children:"로딩 중..."})]})};ut.createRoot(document.getElementById("root")).render(o.jsx(Vi,{}));
