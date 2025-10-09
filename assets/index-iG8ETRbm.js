import{r as C,c as Qr,e as Zr,g as xr,R as Pe}from"./react-o6zXO7vr.js";import{D as he,c as Xr,B as Q,s as $,M as Te,a as be,T as en,F as re,A as tn,R as rn,S as Nt,b as nn,d as on,C as an}from"./antd-BX_d-fAz.js";import{c as sn}from"./gallery-D_0dEau7.js";import{R as Pt,a as cn,b as Mt,c as dn,d as Dt,e as Lt,f as Bt,g as ln,h as pn}from"./antdIcons-DTZZSpnr.js";import{i as un,g as fn,q as mn,c as br,o as hn,l as gn,a as xn,b as bn,s as yr,d as Et,u as yn,e as wn,f as vn}from"./firebase-CbrwKV5s.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(i){if(i.ep)return;i.ep=!0;const a=r(i);fetch(i.href,a)}})();var wr={exports:{}},et={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jn=C,kn=Symbol.for("react.element"),En=Symbol.for("react.fragment"),Sn=Object.prototype.hasOwnProperty,_n=jn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,On={key:!0,ref:!0,__self:!0,__source:!0};function vr(e,t,r){var n,i={},a=null,s=null;r!==void 0&&(a=""+r),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(s=t.ref);for(n in t)Sn.call(t,n)&&!On.hasOwnProperty(n)&&(i[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps,t)i[n]===void 0&&(i[n]=t[n]);return{$$typeof:kn,type:e,key:a,ref:s,props:i,_owner:_n.current}}et.Fragment=En;et.jsx=vr;et.jsxs=vr;wr.exports=et;var o=wr.exports,ft={},$t=Qr;ft.createRoot=$t.createRoot,ft.hydrateRoot=$t.hydrateRoot;var jr={exports:{}};(function(e,t){(function(r,n){e.exports=n()})(Zr,function(){return function(r){function n(a){if(i[a])return i[a].exports;var s=i[a]={exports:{},id:a,loaded:!1};return r[a].call(s.exports,s,s.exports,n),s.loaded=!0,s.exports}var i={};return n.m=r,n.c=i,n.p="dist/",n(0)}([function(r,n,i){function a(S){return S&&S.__esModule?S:{default:S}}var s=Object.assign||function(S){for(var W=1;W<arguments.length;W++){var Z=arguments[W];for(var m in Z)Object.prototype.hasOwnProperty.call(Z,m)&&(S[m]=Z[m])}return S},l=i(1),c=(a(l),i(6)),d=a(c),h=i(7),u=a(h),f=i(8),p=a(f),x=i(9),k=a(x),I=i(10),z=a(I),j=i(11),E=a(j),T=i(14),P=a(T),b=[],y=!1,_={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},H=function(){var S=arguments.length>0&&arguments[0]!==void 0&&arguments[0];if(S&&(y=!0),y)return b=(0,E.default)(b,_),(0,z.default)(b,_.once),b},se=function(){b=(0,P.default)(),H()},v=function(){b.forEach(function(S,W){S.node.removeAttribute("data-aos"),S.node.removeAttribute("data-aos-easing"),S.node.removeAttribute("data-aos-duration"),S.node.removeAttribute("data-aos-delay")})},g=function(S){return S===!0||S==="mobile"&&k.default.mobile()||S==="phone"&&k.default.phone()||S==="tablet"&&k.default.tablet()||typeof S=="function"&&S()===!0},N=function(S){_=s(_,S),b=(0,P.default)();var W=document.all&&!window.atob;return g(_.disable)||W?v():(_.disableMutationObserver||p.default.isSupported()||(console.info(`
      aos: MutationObserver is not supported on this browser,
      code mutations observing has been disabled.
      You may have to call "refreshHard()" by yourself.
    `),_.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",_.easing),document.querySelector("body").setAttribute("data-aos-duration",_.duration),document.querySelector("body").setAttribute("data-aos-delay",_.delay),_.startEvent==="DOMContentLoaded"&&["complete","interactive"].indexOf(document.readyState)>-1?H(!0):_.startEvent==="load"?window.addEventListener(_.startEvent,function(){H(!0)}):document.addEventListener(_.startEvent,function(){H(!0)}),window.addEventListener("resize",(0,u.default)(H,_.debounceDelay,!0)),window.addEventListener("orientationchange",(0,u.default)(H,_.debounceDelay,!0)),window.addEventListener("scroll",(0,d.default)(function(){(0,z.default)(b,_.once)},_.throttleDelay)),_.disableMutationObserver||p.default.ready("[data-aos]",se),b)};r.exports={init:N,refresh:H,refreshHard:se}},function(r,n){},,,,,function(r,n){(function(i){function a(g,N,S){function W(D){var te=V,ge=X;return V=X=void 0,ce=D,G=g.apply(ge,te)}function Z(D){return ce=D,L=setTimeout(R,N),ie?W(D):G}function m(D){var te=D-K,ge=D-ce,zt=N-te;return Y?se(zt,J-ge):zt}function O(D){var te=D-K,ge=D-ce;return K===void 0||te>=N||te<0||Y&&ge>=J}function R(){var D=v();return O(D)?ue(D):void(L=setTimeout(R,m(D)))}function ue(D){return L=void 0,F&&V?W(D):(V=X=void 0,G)}function fe(){L!==void 0&&clearTimeout(L),ce=0,V=K=X=L=void 0}function ee(){return L===void 0?G:ue(v())}function oe(){var D=v(),te=O(D);if(V=arguments,X=this,K=D,te){if(L===void 0)return Z(K);if(Y)return L=setTimeout(R,N),W(K)}return L===void 0&&(L=setTimeout(R,N)),G}var V,X,J,G,L,K,ce=0,ie=!1,Y=!1,F=!0;if(typeof g!="function")throw new TypeError(f);return N=h(N)||0,l(S)&&(ie=!!S.leading,Y="maxWait"in S,J=Y?H(h(S.maxWait)||0,N):J,F="trailing"in S?!!S.trailing:F),oe.cancel=fe,oe.flush=ee,oe}function s(g,N,S){var W=!0,Z=!0;if(typeof g!="function")throw new TypeError(f);return l(S)&&(W="leading"in S?!!S.leading:W,Z="trailing"in S?!!S.trailing:Z),a(g,N,{leading:W,maxWait:N,trailing:Z})}function l(g){var N=typeof g>"u"?"undefined":u(g);return!!g&&(N=="object"||N=="function")}function c(g){return!!g&&(typeof g>"u"?"undefined":u(g))=="object"}function d(g){return(typeof g>"u"?"undefined":u(g))=="symbol"||c(g)&&_.call(g)==x}function h(g){if(typeof g=="number")return g;if(d(g))return p;if(l(g)){var N=typeof g.valueOf=="function"?g.valueOf():g;g=l(N)?N+"":N}if(typeof g!="string")return g===0?g:+g;g=g.replace(k,"");var S=z.test(g);return S||j.test(g)?E(g.slice(2),S?2:8):I.test(g)?p:+g}var u=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(g){return typeof g}:function(g){return g&&typeof Symbol=="function"&&g.constructor===Symbol&&g!==Symbol.prototype?"symbol":typeof g},f="Expected a function",p=NaN,x="[object Symbol]",k=/^\s+|\s+$/g,I=/^[-+]0x[0-9a-f]+$/i,z=/^0b[01]+$/i,j=/^0o[0-7]+$/i,E=parseInt,T=(typeof i>"u"?"undefined":u(i))=="object"&&i&&i.Object===Object&&i,P=(typeof self>"u"?"undefined":u(self))=="object"&&self&&self.Object===Object&&self,b=T||P||Function("return this")(),y=Object.prototype,_=y.toString,H=Math.max,se=Math.min,v=function(){return b.Date.now()};r.exports=s}).call(n,function(){return this}())},function(r,n){(function(i){function a(v,g,N){function S(F){var D=oe,te=V;return oe=V=void 0,K=F,J=v.apply(te,D)}function W(F){return K=F,G=setTimeout(O,g),ce?S(F):J}function Z(F){var D=F-L,te=F-K,ge=g-D;return ie?H(ge,X-te):ge}function m(F){var D=F-L,te=F-K;return L===void 0||D>=g||D<0||ie&&te>=X}function O(){var F=se();return m(F)?R(F):void(G=setTimeout(O,Z(F)))}function R(F){return G=void 0,Y&&oe?S(F):(oe=V=void 0,J)}function ue(){G!==void 0&&clearTimeout(G),K=0,oe=L=V=G=void 0}function fe(){return G===void 0?J:R(se())}function ee(){var F=se(),D=m(F);if(oe=arguments,V=this,L=F,D){if(G===void 0)return W(L);if(ie)return G=setTimeout(O,g),S(L)}return G===void 0&&(G=setTimeout(O,g)),J}var oe,V,X,J,G,L,K=0,ce=!1,ie=!1,Y=!0;if(typeof v!="function")throw new TypeError(u);return g=d(g)||0,s(N)&&(ce=!!N.leading,ie="maxWait"in N,X=ie?_(d(N.maxWait)||0,g):X,Y="trailing"in N?!!N.trailing:Y),ee.cancel=ue,ee.flush=fe,ee}function s(v){var g=typeof v>"u"?"undefined":h(v);return!!v&&(g=="object"||g=="function")}function l(v){return!!v&&(typeof v>"u"?"undefined":h(v))=="object"}function c(v){return(typeof v>"u"?"undefined":h(v))=="symbol"||l(v)&&y.call(v)==p}function d(v){if(typeof v=="number")return v;if(c(v))return f;if(s(v)){var g=typeof v.valueOf=="function"?v.valueOf():v;v=s(g)?g+"":g}if(typeof v!="string")return v===0?v:+v;v=v.replace(x,"");var N=I.test(v);return N||z.test(v)?j(v.slice(2),N?2:8):k.test(v)?f:+v}var h=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(v){return typeof v}:function(v){return v&&typeof Symbol=="function"&&v.constructor===Symbol&&v!==Symbol.prototype?"symbol":typeof v},u="Expected a function",f=NaN,p="[object Symbol]",x=/^\s+|\s+$/g,k=/^[-+]0x[0-9a-f]+$/i,I=/^0b[01]+$/i,z=/^0o[0-7]+$/i,j=parseInt,E=(typeof i>"u"?"undefined":h(i))=="object"&&i&&i.Object===Object&&i,T=(typeof self>"u"?"undefined":h(self))=="object"&&self&&self.Object===Object&&self,P=E||T||Function("return this")(),b=Object.prototype,y=b.toString,_=Math.max,H=Math.min,se=function(){return P.Date.now()};r.exports=a}).call(n,function(){return this}())},function(r,n){function i(h){var u=void 0,f=void 0;for(u=0;u<h.length;u+=1)if(f=h[u],f.dataset&&f.dataset.aos||f.children&&i(f.children))return!0;return!1}function a(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function s(){return!!a()}function l(h,u){var f=window.document,p=a(),x=new p(c);d=u,x.observe(f.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function c(h){h&&h.forEach(function(u){var f=Array.prototype.slice.call(u.addedNodes),p=Array.prototype.slice.call(u.removedNodes),x=f.concat(p);if(i(x))return d()})}Object.defineProperty(n,"__esModule",{value:!0});var d=function(){};n.default={isSupported:s,ready:l}},function(r,n){function i(f,p){if(!(f instanceof p))throw new TypeError("Cannot call a class as a function")}function a(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(n,"__esModule",{value:!0});var s=function(){function f(p,x){for(var k=0;k<x.length;k++){var I=x[k];I.enumerable=I.enumerable||!1,I.configurable=!0,"value"in I&&(I.writable=!0),Object.defineProperty(p,I.key,I)}}return function(p,x,k){return x&&f(p.prototype,x),k&&f(p,k),p}}(),l=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,c=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,d=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,h=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,u=function(){function f(){i(this,f)}return s(f,[{key:"phone",value:function(){var p=a();return!(!l.test(p)&&!c.test(p.substr(0,4)))}},{key:"mobile",value:function(){var p=a();return!(!d.test(p)&&!h.test(p.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),f}();n.default=new u},function(r,n){Object.defineProperty(n,"__esModule",{value:!0});var i=function(s,l,c){var d=s.node.getAttribute("data-aos-once");l>s.position?s.node.classList.add("aos-animate"):typeof d<"u"&&(d==="false"||!c&&d!=="true")&&s.node.classList.remove("aos-animate")},a=function(s,l){var c=window.pageYOffset,d=window.innerHeight;s.forEach(function(h,u){i(h,d+c,l)})};n.default=a},function(r,n,i){function a(d){return d&&d.__esModule?d:{default:d}}Object.defineProperty(n,"__esModule",{value:!0});var s=i(12),l=a(s),c=function(d,h){return d.forEach(function(u,f){u.node.classList.add("aos-init"),u.position=(0,l.default)(u.node,h.offset)}),d};n.default=c},function(r,n,i){function a(d){return d&&d.__esModule?d:{default:d}}Object.defineProperty(n,"__esModule",{value:!0});var s=i(13),l=a(s),c=function(d,h){var u=0,f=0,p=window.innerHeight,x={offset:d.getAttribute("data-aos-offset"),anchor:d.getAttribute("data-aos-anchor"),anchorPlacement:d.getAttribute("data-aos-anchor-placement")};switch(x.offset&&!isNaN(x.offset)&&(f=parseInt(x.offset)),x.anchor&&document.querySelectorAll(x.anchor)&&(d=document.querySelectorAll(x.anchor)[0]),u=(0,l.default)(d).top,x.anchorPlacement){case"top-bottom":break;case"center-bottom":u+=d.offsetHeight/2;break;case"bottom-bottom":u+=d.offsetHeight;break;case"top-center":u+=p/2;break;case"bottom-center":u+=p/2+d.offsetHeight;break;case"center-center":u+=p/2+d.offsetHeight/2;break;case"top-top":u+=p;break;case"bottom-top":u+=d.offsetHeight+p;break;case"center-top":u+=d.offsetHeight/2+p}return x.anchorPlacement||x.offset||isNaN(h)||(f=h),u+f};n.default=c},function(r,n){Object.defineProperty(n,"__esModule",{value:!0});var i=function(a){for(var s=0,l=0;a&&!isNaN(a.offsetLeft)&&!isNaN(a.offsetTop);)s+=a.offsetLeft-(a.tagName!="BODY"?a.scrollLeft:0),l+=a.offsetTop-(a.tagName!="BODY"?a.scrollTop:0),a=a.offsetParent;return{top:l,left:s}};n.default=i},function(r,n){Object.defineProperty(n,"__esModule",{value:!0});var i=function(a){return a=a||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(a,function(s){return{node:s}})};n.default=i}])})})(jr);var Cn=jr.exports;const An=xr(Cn);var ne=function(){return ne=Object.assign||function(t){for(var r,n=1,i=arguments.length;n<i;n++){r=arguments[n];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a])}return t},ne.apply(this,arguments)};function Ue(e,t,r){if(r||arguments.length===2)for(var n=0,i=t.length,a;n<i;n++)(a||!(n in t))&&(a||(a=Array.prototype.slice.call(t,0,n)),a[n]=t[n]);return e.concat(a||Array.prototype.slice.call(t))}var B="-ms-",Ne="-moz-",M="-webkit-",kr="comm",tt="rule",St="decl",Rn="@import",Er="@keyframes",Tn="@layer",Sr=Math.abs,_t=String.fromCharCode,mt=Object.assign;function In(e,t){return U(e,0)^45?(((t<<2^U(e,0))<<2^U(e,1))<<2^U(e,2))<<2^U(e,3):0}function _r(e){return e.trim()}function me(e,t){return(e=t.exec(e))?e[0]:e}function A(e,t,r){return e.replace(t,r)}function Ke(e,t,r){return e.indexOf(t,r)}function U(e,t){return e.charCodeAt(t)|0}function Se(e,t,r){return e.slice(t,r)}function pe(e){return e.length}function Or(e){return e.length}function Ie(e,t){return t.push(e),e}function zn(e,t){return e.map(t).join("")}function Ft(e,t){return e.filter(function(r){return!me(r,t)})}var rt=1,_e=1,Cr=0,de=0,q=0,Re="";function nt(e,t,r,n,i,a,s,l){return{value:e,root:t,parent:r,type:n,props:i,children:a,line:rt,column:_e,length:s,return:"",siblings:l}}function xe(e,t){return mt(nt("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function je(e){for(;e.root;)e=xe(e.root,{children:[e]});Ie(e,e.siblings)}function Nn(){return q}function Pn(){return q=de>0?U(Re,--de):0,_e--,q===10&&(_e=1,rt--),q}function le(){return q=de<Cr?U(Re,de++):0,_e++,q===10&&(_e=1,rt++),q}function we(){return U(Re,de)}function We(){return de}function ot(e,t){return Se(Re,e,t)}function ht(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Mn(e){return rt=_e=1,Cr=pe(Re=e),de=0,[]}function Dn(e){return Re="",e}function dt(e){return _r(ot(de-1,gt(e===91?e+2:e===40?e+1:e)))}function Ln(e){for(;(q=we())&&q<33;)le();return ht(e)>2||ht(q)>3?"":" "}function Bn(e,t){for(;--t&&le()&&!(q<48||q>102||q>57&&q<65||q>70&&q<97););return ot(e,We()+(t<6&&we()==32&&le()==32))}function gt(e){for(;le();)switch(q){case e:return de;case 34:case 39:e!==34&&e!==39&&gt(q);break;case 40:e===41&&gt(e);break;case 92:le();break}return de}function $n(e,t){for(;le()&&e+q!==57;)if(e+q===84&&we()===47)break;return"/*"+ot(t,de-1)+"*"+_t(e===47?e:le())}function Fn(e){for(;!ht(we());)le();return ot(e,de)}function Gn(e){return Dn(qe("",null,null,null,[""],e=Mn(e),0,[0],e))}function qe(e,t,r,n,i,a,s,l,c){for(var d=0,h=0,u=s,f=0,p=0,x=0,k=1,I=1,z=1,j=0,E="",T=i,P=a,b=n,y=E;I;)switch(x=j,j=le()){case 40:if(x!=108&&U(y,u-1)==58){Ke(y+=A(dt(j),"&","&\f"),"&\f",Sr(d?l[d-1]:0))!=-1&&(z=-1);break}case 34:case 39:case 91:y+=dt(j);break;case 9:case 10:case 13:case 32:y+=Ln(x);break;case 92:y+=Bn(We()-1,7);continue;case 47:switch(we()){case 42:case 47:Ie(Kn($n(le(),We()),t,r,c),c);break;default:y+="/"}break;case 123*k:l[d++]=pe(y)*z;case 125*k:case 59:case 0:switch(j){case 0:case 125:I=0;case 59+h:z==-1&&(y=A(y,/\f/g,"")),p>0&&pe(y)-u&&Ie(p>32?Kt(y+";",n,r,u-1,c):Kt(A(y," ","")+";",n,r,u-2,c),c);break;case 59:y+=";";default:if(Ie(b=Gt(y,t,r,d,h,i,l,E,T=[],P=[],u,a),a),j===123)if(h===0)qe(y,t,b,b,T,a,u,l,P);else switch(f===99&&U(y,3)===110?100:f){case 100:case 108:case 109:case 115:qe(e,b,b,n&&Ie(Gt(e,b,b,0,0,i,l,E,i,T=[],u,P),P),i,P,u,l,n?T:P);break;default:qe(y,b,b,b,[""],P,0,l,P)}}d=h=p=0,k=z=1,E=y="",u=s;break;case 58:u=1+pe(y),p=x;default:if(k<1){if(j==123)--k;else if(j==125&&k++==0&&Pn()==125)continue}switch(y+=_t(j),j*k){case 38:z=h>0?1:(y+="\f",-1);break;case 44:l[d++]=(pe(y)-1)*z,z=1;break;case 64:we()===45&&(y+=dt(le())),f=we(),h=u=pe(E=y+=Fn(We())),j++;break;case 45:x===45&&pe(y)==2&&(k=0)}}return a}function Gt(e,t,r,n,i,a,s,l,c,d,h,u){for(var f=i-1,p=i===0?a:[""],x=Or(p),k=0,I=0,z=0;k<n;++k)for(var j=0,E=Se(e,f+1,f=Sr(I=s[k])),T=e;j<x;++j)(T=_r(I>0?p[j]+" "+E:A(E,/&\f/g,p[j])))&&(c[z++]=T);return nt(e,t,r,i===0?tt:l,c,d,h,u)}function Kn(e,t,r,n){return nt(e,t,r,kr,_t(Nn()),Se(e,2,-2),0,n)}function Kt(e,t,r,n,i){return nt(e,t,r,St,Se(e,0,n),Se(e,n+1,-1),n,i)}function Ar(e,t,r){switch(In(e,t)){case 5103:return M+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return M+e+e;case 4789:return Ne+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return M+e+Ne+e+B+e+e;case 5936:switch(U(e,t+11)){case 114:return M+e+B+A(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return M+e+B+A(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return M+e+B+A(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return M+e+B+e+e;case 6165:return M+e+B+"flex-"+e+e;case 5187:return M+e+A(e,/(\w+).+(:[^]+)/,M+"box-$1$2"+B+"flex-$1$2")+e;case 5443:return M+e+B+"flex-item-"+A(e,/flex-|-self/g,"")+(me(e,/flex-|baseline/)?"":B+"grid-row-"+A(e,/flex-|-self/g,""))+e;case 4675:return M+e+B+"flex-line-pack"+A(e,/align-content|flex-|-self/g,"")+e;case 5548:return M+e+B+A(e,"shrink","negative")+e;case 5292:return M+e+B+A(e,"basis","preferred-size")+e;case 6060:return M+"box-"+A(e,"-grow","")+M+e+B+A(e,"grow","positive")+e;case 4554:return M+A(e,/([^-])(transform)/g,"$1"+M+"$2")+e;case 6187:return A(A(A(e,/(zoom-|grab)/,M+"$1"),/(image-set)/,M+"$1"),e,"")+e;case 5495:case 3959:return A(e,/(image-set\([^]*)/,M+"$1$`$1");case 4968:return A(A(e,/(.+:)(flex-)?(.*)/,M+"box-pack:$3"+B+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+M+e+e;case 4200:if(!me(e,/flex-|baseline/))return B+"grid-column-align"+Se(e,t)+e;break;case 2592:case 3360:return B+A(e,"template-","")+e;case 4384:case 3616:return r&&r.some(function(n,i){return t=i,me(n.props,/grid-\w+-end/)})?~Ke(e+(r=r[t].value),"span",0)?e:B+A(e,"-start","")+e+B+"grid-row-span:"+(~Ke(r,"span",0)?me(r,/\d+/):+me(r,/\d+/)-+me(e,/\d+/))+";":B+A(e,"-start","")+e;case 4896:case 4128:return r&&r.some(function(n){return me(n.props,/grid-\w+-start/)})?e:B+A(A(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return A(e,/(.+)-inline(.+)/,M+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(pe(e)-1-t>6)switch(U(e,t+1)){case 109:if(U(e,t+4)!==45)break;case 102:return A(e,/(.+:)(.+)-([^]+)/,"$1"+M+"$2-$3$1"+Ne+(U(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Ke(e,"stretch",0)?Ar(A(e,"stretch","fill-available"),t,r)+e:e}break;case 5152:case 5920:return A(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(n,i,a,s,l,c,d){return B+i+":"+a+d+(s?B+i+"-span:"+(l?c:+c-+a)+d:"")+e});case 4949:if(U(e,t+6)===121)return A(e,":",":"+M)+e;break;case 6444:switch(U(e,U(e,14)===45?18:11)){case 120:return A(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+M+(U(e,14)===45?"inline-":"")+"box$3$1"+M+"$2$3$1"+B+"$2box$3")+e;case 100:return A(e,":",":"+B)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return A(e,"scroll-","scroll-snap-")+e}return e}function Ve(e,t){for(var r="",n=0;n<e.length;n++)r+=t(e[n],n,e,t)||"";return r}function Wn(e,t,r,n){switch(e.type){case Tn:if(e.children.length)break;case Rn:case St:return e.return=e.return||e.value;case kr:return"";case Er:return e.return=e.value+"{"+Ve(e.children,n)+"}";case tt:if(!pe(e.value=e.props.join(",")))return""}return pe(r=Ve(e.children,n))?e.return=e.value+"{"+r+"}":""}function qn(e){var t=Or(e);return function(r,n,i,a){for(var s="",l=0;l<t;l++)s+=e[l](r,n,i,a)||"";return s}}function Hn(e){return function(t){t.root||(t=t.return)&&e(t)}}function Yn(e,t,r,n){if(e.length>-1&&!e.return)switch(e.type){case St:e.return=Ar(e.value,e.length,r);return;case Er:return Ve([xe(e,{value:A(e.value,"@","@"+M)})],n);case tt:if(e.length)return zn(r=e.props,function(i){switch(me(i,n=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":je(xe(e,{props:[A(i,/:(read-\w+)/,":"+Ne+"$1")]})),je(xe(e,{props:[i]})),mt(e,{props:Ft(r,n)});break;case"::placeholder":je(xe(e,{props:[A(i,/:(plac\w+)/,":"+M+"input-$1")]})),je(xe(e,{props:[A(i,/:(plac\w+)/,":"+Ne+"$1")]})),je(xe(e,{props:[A(i,/:(plac\w+)/,B+"input-$1")]})),je(xe(e,{props:[i]})),mt(e,{props:Ft(r,n)});break}return""})}}var Un={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},ae={},Oe=typeof process<"u"&&ae!==void 0&&(ae.REACT_APP_SC_ATTR||ae.SC_ATTR)||"data-styled",Rr="active",Tr="data-styled-version",it="6.1.19",Ot=`/*!sc*/
`,Je=typeof window<"u"&&typeof document<"u",Vn=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&ae!==void 0&&ae.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&ae.REACT_APP_SC_DISABLE_SPEEDY!==""?ae.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&ae.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&ae!==void 0&&ae.SC_DISABLE_SPEEDY!==void 0&&ae.SC_DISABLE_SPEEDY!==""&&ae.SC_DISABLE_SPEEDY!=="false"&&ae.SC_DISABLE_SPEEDY),at=Object.freeze([]),Ce=Object.freeze({});function Jn(e,t,r){return r===void 0&&(r=Ce),e.theme!==r.theme&&e.theme||t||r.theme}var Ir=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Qn=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Zn=/(^-|-$)/g;function Wt(e){return e.replace(Qn,"-").replace(Zn,"")}var Xn=/(a)(d)/gi,$e=52,qt=function(e){return String.fromCharCode(e+(e>25?39:97))};function xt(e){var t,r="";for(t=Math.abs(e);t>$e;t=t/$e|0)r=qt(t%$e)+r;return(qt(t%$e)+r).replace(Xn,"$1-$2")}var lt,zr=5381,Ee=function(e,t){for(var r=t.length;r;)e=33*e^t.charCodeAt(--r);return e},Nr=function(e){return Ee(zr,e)};function eo(e){return xt(Nr(e)>>>0)}function to(e){return e.displayName||e.name||"Component"}function pt(e){return typeof e=="string"&&!0}var Pr=typeof Symbol=="function"&&Symbol.for,Mr=Pr?Symbol.for("react.memo"):60115,ro=Pr?Symbol.for("react.forward_ref"):60112,no={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},oo={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Dr={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},io=((lt={})[ro]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},lt[Mr]=Dr,lt);function Ht(e){return("type"in(t=e)&&t.type.$$typeof)===Mr?Dr:"$$typeof"in e?io[e.$$typeof]:no;var t}var ao=Object.defineProperty,so=Object.getOwnPropertyNames,Yt=Object.getOwnPropertySymbols,co=Object.getOwnPropertyDescriptor,lo=Object.getPrototypeOf,Ut=Object.prototype;function Lr(e,t,r){if(typeof t!="string"){if(Ut){var n=lo(t);n&&n!==Ut&&Lr(e,n,r)}var i=so(t);Yt&&(i=i.concat(Yt(t)));for(var a=Ht(e),s=Ht(t),l=0;l<i.length;++l){var c=i[l];if(!(c in oo||r&&r[c]||s&&c in s||a&&c in a)){var d=co(t,c);try{ao(e,c,d)}catch{}}}}return e}function Ae(e){return typeof e=="function"}function Ct(e){return typeof e=="object"&&"styledComponentId"in e}function ye(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Vt(e,t){if(e.length===0)return"";for(var r=e[0],n=1;n<e.length;n++)r+=e[n];return r}function Me(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function bt(e,t,r){if(r===void 0&&(r=!1),!r&&!Me(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var n=0;n<t.length;n++)e[n]=bt(e[n],t[n]);else if(Me(t))for(var n in t)e[n]=bt(e[n],t[n]);return e}function At(e,t){Object.defineProperty(e,"toString",{value:t})}function De(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var po=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var r=0,n=0;n<t;n++)r+=this.groupSizes[n];return r},e.prototype.insertRules=function(t,r){if(t>=this.groupSizes.length){for(var n=this.groupSizes,i=n.length,a=i;t>=a;)if((a<<=1)<0)throw De(16,"".concat(t));this.groupSizes=new Uint32Array(a),this.groupSizes.set(n),this.length=a;for(var s=i;s<a;s++)this.groupSizes[s]=0}for(var l=this.indexOfGroup(t+1),c=(s=0,r.length);s<c;s++)this.tag.insertRule(l,r[s])&&(this.groupSizes[t]++,l++)},e.prototype.clearGroup=function(t){if(t<this.length){var r=this.groupSizes[t],n=this.indexOfGroup(t),i=n+r;this.groupSizes[t]=0;for(var a=n;a<i;a++)this.tag.deleteRule(n)}},e.prototype.getGroup=function(t){var r="";if(t>=this.length||this.groupSizes[t]===0)return r;for(var n=this.groupSizes[t],i=this.indexOfGroup(t),a=i+n,s=i;s<a;s++)r+="".concat(this.tag.getRule(s)).concat(Ot);return r},e}(),He=new Map,Qe=new Map,Ye=1,Fe=function(e){if(He.has(e))return He.get(e);for(;Qe.has(Ye);)Ye++;var t=Ye++;return He.set(e,t),Qe.set(t,e),t},uo=function(e,t){Ye=t+1,He.set(e,t),Qe.set(t,e)},fo="style[".concat(Oe,"][").concat(Tr,'="').concat(it,'"]'),mo=new RegExp("^".concat(Oe,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),ho=function(e,t,r){for(var n,i=r.split(","),a=0,s=i.length;a<s;a++)(n=i[a])&&e.registerName(t,n)},go=function(e,t){for(var r,n=((r=t.textContent)!==null&&r!==void 0?r:"").split(Ot),i=[],a=0,s=n.length;a<s;a++){var l=n[a].trim();if(l){var c=l.match(mo);if(c){var d=0|parseInt(c[1],10),h=c[2];d!==0&&(uo(h,d),ho(e,h,c[3]),e.getTag().insertRules(d,i)),i.length=0}else i.push(l)}}},Jt=function(e){for(var t=document.querySelectorAll(fo),r=0,n=t.length;r<n;r++){var i=t[r];i&&i.getAttribute(Oe)!==Rr&&(go(e,i),i.parentNode&&i.parentNode.removeChild(i))}};function xo(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Br=function(e){var t=document.head,r=e||t,n=document.createElement("style"),i=function(l){var c=Array.from(l.querySelectorAll("style[".concat(Oe,"]")));return c[c.length-1]}(r),a=i!==void 0?i.nextSibling:null;n.setAttribute(Oe,Rr),n.setAttribute(Tr,it);var s=xo();return s&&n.setAttribute("nonce",s),r.insertBefore(n,a),n},bo=function(){function e(t){this.element=Br(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(r){if(r.sheet)return r.sheet;for(var n=document.styleSheets,i=0,a=n.length;i<a;i++){var s=n[i];if(s.ownerNode===r)return s}throw De(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,r){try{return this.sheet.insertRule(r,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var r=this.sheet.cssRules[t];return r&&r.cssText?r.cssText:""},e}(),yo=function(){function e(t){this.element=Br(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,r){if(t<=this.length&&t>=0){var n=document.createTextNode(r);return this.element.insertBefore(n,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),wo=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,r){return t<=this.length&&(this.rules.splice(t,0,r),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Qt=Je,vo={isServer:!Je,useCSSOMInjection:!Vn},$r=function(){function e(t,r,n){t===void 0&&(t=Ce),r===void 0&&(r={});var i=this;this.options=ne(ne({},vo),t),this.gs=r,this.names=new Map(n),this.server=!!t.isServer,!this.server&&Je&&Qt&&(Qt=!1,Jt(this)),At(this,function(){return function(a){for(var s=a.getTag(),l=s.length,c="",d=function(u){var f=function(z){return Qe.get(z)}(u);if(f===void 0)return"continue";var p=a.names.get(f),x=s.getGroup(u);if(p===void 0||!p.size||x.length===0)return"continue";var k="".concat(Oe,".g").concat(u,'[id="').concat(f,'"]'),I="";p!==void 0&&p.forEach(function(z){z.length>0&&(I+="".concat(z,","))}),c+="".concat(x).concat(k,'{content:"').concat(I,'"}').concat(Ot)},h=0;h<l;h++)d(h);return c}(i)})}return e.registerId=function(t){return Fe(t)},e.prototype.rehydrate=function(){!this.server&&Je&&Jt(this)},e.prototype.reconstructWithOptions=function(t,r){return r===void 0&&(r=!0),new e(ne(ne({},this.options),t),this.gs,r&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(r){var n=r.useCSSOMInjection,i=r.target;return r.isServer?new wo(i):n?new bo(i):new yo(i)}(this.options),new po(t)));var t},e.prototype.hasNameForId=function(t,r){return this.names.has(t)&&this.names.get(t).has(r)},e.prototype.registerName=function(t,r){if(Fe(t),this.names.has(t))this.names.get(t).add(r);else{var n=new Set;n.add(r),this.names.set(t,n)}},e.prototype.insertRules=function(t,r,n){this.registerName(t,r),this.getTag().insertRules(Fe(t),n)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Fe(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),jo=/&/g,ko=/^\s*\/\/.*$/gm;function Fr(e,t){return e.map(function(r){return r.type==="rule"&&(r.value="".concat(t," ").concat(r.value),r.value=r.value.replaceAll(",",",".concat(t," ")),r.props=r.props.map(function(n){return"".concat(t," ").concat(n)})),Array.isArray(r.children)&&r.type!=="@keyframes"&&(r.children=Fr(r.children,t)),r})}function Eo(e){var t,r,n,i=Ce,a=i.options,s=a===void 0?Ce:a,l=i.plugins,c=l===void 0?at:l,d=function(f,p,x){return x.startsWith(r)&&x.endsWith(r)&&x.replaceAll(r,"").length>0?".".concat(t):f},h=c.slice();h.push(function(f){f.type===tt&&f.value.includes("&")&&(f.props[0]=f.props[0].replace(jo,r).replace(n,d))}),s.prefix&&h.push(Yn),h.push(Wn);var u=function(f,p,x,k){p===void 0&&(p=""),x===void 0&&(x=""),k===void 0&&(k="&"),t=k,r=p,n=new RegExp("\\".concat(r,"\\b"),"g");var I=f.replace(ko,""),z=Gn(x||p?"".concat(x," ").concat(p," { ").concat(I," }"):I);s.namespace&&(z=Fr(z,s.namespace));var j=[];return Ve(z,qn(h.concat(Hn(function(E){return j.push(E)})))),j};return u.hash=c.length?c.reduce(function(f,p){return p.name||De(15),Ee(f,p.name)},zr).toString():"",u}var So=new $r,yt=Eo(),Gr=Pe.createContext({shouldForwardProp:void 0,styleSheet:So,stylis:yt});Gr.Consumer;Pe.createContext(void 0);function Zt(){return C.useContext(Gr)}var _o=function(){function e(t,r){var n=this;this.inject=function(i,a){a===void 0&&(a=yt);var s=n.name+a.hash;i.hasNameForId(n.id,s)||i.insertRules(n.id,s,a(n.rules,s,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=r,At(this,function(){throw De(12,String(n.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=yt),this.name+t.hash},e}(),Oo=function(e){return e>="A"&&e<="Z"};function Xt(e){for(var t="",r=0;r<e.length;r++){var n=e[r];if(r===1&&n==="-"&&e[0]==="-")return e;Oo(n)?t+="-"+n.toLowerCase():t+=n}return t.startsWith("ms-")?"-"+t:t}var Kr=function(e){return e==null||e===!1||e===""},Wr=function(e){var t,r,n=[];for(var i in e){var a=e[i];e.hasOwnProperty(i)&&!Kr(a)&&(Array.isArray(a)&&a.isCss||Ae(a)?n.push("".concat(Xt(i),":"),a,";"):Me(a)?n.push.apply(n,Ue(Ue(["".concat(i," {")],Wr(a),!1),["}"],!1)):n.push("".concat(Xt(i),": ").concat((t=i,(r=a)==null||typeof r=="boolean"||r===""?"":typeof r!="number"||r===0||t in Un||t.startsWith("--")?String(r).trim():"".concat(r,"px")),";")))}return n};function ve(e,t,r,n){if(Kr(e))return[];if(Ct(e))return[".".concat(e.styledComponentId)];if(Ae(e)){if(!Ae(a=e)||a.prototype&&a.prototype.isReactComponent||!t)return[e];var i=e(t);return ve(i,t,r,n)}var a;return e instanceof _o?r?(e.inject(r,n),[e.getName(n)]):[e]:Me(e)?Wr(e):Array.isArray(e)?Array.prototype.concat.apply(at,e.map(function(s){return ve(s,t,r,n)})):[e.toString()]}function Co(e){for(var t=0;t<e.length;t+=1){var r=e[t];if(Ae(r)&&!Ct(r))return!1}return!0}var Ao=Nr(it),Ro=function(){function e(t,r,n){this.rules=t,this.staticRulesId="",this.isStatic=(n===void 0||n.isStatic)&&Co(t),this.componentId=r,this.baseHash=Ee(Ao,r),this.baseStyle=n,$r.registerId(r)}return e.prototype.generateAndInjectStyles=function(t,r,n){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,r,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&r.hasNameForId(this.componentId,this.staticRulesId))i=ye(i,this.staticRulesId);else{var a=Vt(ve(this.rules,t,r,n)),s=xt(Ee(this.baseHash,a)>>>0);if(!r.hasNameForId(this.componentId,s)){var l=n(a,".".concat(s),void 0,this.componentId);r.insertRules(this.componentId,s,l)}i=ye(i,s),this.staticRulesId=s}else{for(var c=Ee(this.baseHash,n.hash),d="",h=0;h<this.rules.length;h++){var u=this.rules[h];if(typeof u=="string")d+=u;else if(u){var f=Vt(ve(u,t,r,n));c=Ee(c,f+h),d+=f}}if(d){var p=xt(c>>>0);r.hasNameForId(this.componentId,p)||r.insertRules(this.componentId,p,n(d,".".concat(p),void 0,this.componentId)),i=ye(i,p)}}return i},e}(),qr=Pe.createContext(void 0);qr.Consumer;var ut={};function To(e,t,r){var n=Ct(e),i=e,a=!pt(e),s=t.attrs,l=s===void 0?at:s,c=t.componentId,d=c===void 0?function(T,P){var b=typeof T!="string"?"sc":Wt(T);ut[b]=(ut[b]||0)+1;var y="".concat(b,"-").concat(eo(it+b+ut[b]));return P?"".concat(P,"-").concat(y):y}(t.displayName,t.parentComponentId):c,h=t.displayName,u=h===void 0?function(T){return pt(T)?"styled.".concat(T):"Styled(".concat(to(T),")")}(e):h,f=t.displayName&&t.componentId?"".concat(Wt(t.displayName),"-").concat(t.componentId):t.componentId||d,p=n&&i.attrs?i.attrs.concat(l).filter(Boolean):l,x=t.shouldForwardProp;if(n&&i.shouldForwardProp){var k=i.shouldForwardProp;if(t.shouldForwardProp){var I=t.shouldForwardProp;x=function(T,P){return k(T,P)&&I(T,P)}}else x=k}var z=new Ro(r,f,n?i.componentStyle:void 0);function j(T,P){return function(b,y,_){var H=b.attrs,se=b.componentStyle,v=b.defaultProps,g=b.foldedComponentIds,N=b.styledComponentId,S=b.target,W=Pe.useContext(qr),Z=Zt(),m=b.shouldForwardProp||Z.shouldForwardProp,O=Jn(y,W,v)||Ce,R=function(X,J,G){for(var L,K=ne(ne({},J),{className:void 0,theme:G}),ce=0;ce<X.length;ce+=1){var ie=Ae(L=X[ce])?L(K):L;for(var Y in ie)K[Y]=Y==="className"?ye(K[Y],ie[Y]):Y==="style"?ne(ne({},K[Y]),ie[Y]):ie[Y]}return J.className&&(K.className=ye(K.className,J.className)),K}(H,y,O),ue=R.as||S,fe={};for(var ee in R)R[ee]===void 0||ee[0]==="$"||ee==="as"||ee==="theme"&&R.theme===O||(ee==="forwardedAs"?fe.as=R.forwardedAs:m&&!m(ee,ue)||(fe[ee]=R[ee]));var oe=function(X,J){var G=Zt(),L=X.generateAndInjectStyles(J,G.styleSheet,G.stylis);return L}(se,R),V=ye(g,N);return oe&&(V+=" "+oe),R.className&&(V+=" "+R.className),fe[pt(ue)&&!Ir.has(ue)?"class":"className"]=V,_&&(fe.ref=_),C.createElement(ue,fe)}(E,T,P)}j.displayName=u;var E=Pe.forwardRef(j);return E.attrs=p,E.componentStyle=z,E.displayName=u,E.shouldForwardProp=x,E.foldedComponentIds=n?ye(i.foldedComponentIds,i.styledComponentId):"",E.styledComponentId=f,E.target=n?i.target:e,Object.defineProperty(E,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(T){this._foldedDefaultProps=n?function(P){for(var b=[],y=1;y<arguments.length;y++)b[y-1]=arguments[y];for(var _=0,H=b;_<H.length;_++)bt(P,H[_],!0);return P}({},i.defaultProps,T):T}}),At(E,function(){return".".concat(E.styledComponentId)}),a&&Lr(E,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),E}function er(e,t){for(var r=[e[0]],n=0,i=t.length;n<i;n+=1)r.push(t[n],e[n+1]);return r}var tr=function(e){return Object.assign(e,{isCss:!0})};function Io(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];if(Ae(e)||Me(e))return tr(ve(er(at,Ue([e],t,!0))));var n=e;return t.length===0&&n.length===1&&typeof n[0]=="string"?ve(n):tr(ve(er(n,t)))}function wt(e,t,r){if(r===void 0&&(r=Ce),!t)throw De(1,t);var n=function(i){for(var a=[],s=1;s<arguments.length;s++)a[s-1]=arguments[s];return e(t,r,Io.apply(void 0,Ue([i],a,!1)))};return n.attrs=function(i){return wt(e,t,ne(ne({},r),{attrs:Array.prototype.concat(r.attrs,i).filter(Boolean)}))},n.withConfig=function(i){return wt(e,t,ne(ne({},r),i))},n}var Hr=function(e){return wt(To,e)},w=Hr;Ir.forEach(function(e){w[e]=Hr(e)});const st=()=>C.useMemo(()=>({WEDDING_DATE:"2025년 11월 8일 토요일 오전 11시",WEDDING_LOCATION:"프란치스코 교육회관",WEDDING_INVITATION_URL:"https://mqjinwon.github.io/wedding_invitation",GROOM_NAME:"김진원 라파엘",GROOM_ACCOUNT_NUMBER:"국민은행 493602-01-268652",GROOM_FATHER_NAME:"김봉규 가브리엘",GROOM_FATHER_ACCOUNT_NUMBER:"국민은행 815-24-0348-330",GROOM_MOTHER_NAME:"송혜정 마리아",GROOM_MOTHER_ACCOUNT_NUMBER:"신한은행 110-097-465778",BRIDE_NAME:"이연제 카타리나",BRIDE_ACCOUNT_NUMBER:"신한은행 110-488-583838",BRIDE_FATHER_NAME:"이승철 세례자요한",BRIDE_FATHER_ACCOUNT_NUMBER:"○○은행 ***-***-******",BRIDE_MOTHER_NAME:"박미숙 첼리나",BRIDE_MOTHER_ACCOUNT_NUMBER:"○○은행 ***-***-****** ",KAKAOTALK_API_TOKEN:"9611b9bc76a2baa916b7e161275c48b7",KAKAOTALK_SHARE_IMAGE:"https://raw.githubusercontent.com/mqjinwon/wedding_invitation/refs/heads/main/public/kakaotalk_share.jpg",MASTER_PASSWORD:"admin12345678"}),[]),zo="/wedding_invitation/upper_image.webp",No=w.div`
  width: 100%;
  max-width: 800px;
  overflow: visible;
  margin: 0 auto;
  padding: 0;
`,Po=w.div`
  width: 100%;
  text-align: center;
  padding: 42px 16px 0 16px;
  font-weight: 500 !important;
  color: var(--title-color);
  animation: fadein 3s;
  -moz-animation: fadein 3s; /* Firefox */
  -webkit-animation: fadein 3s; /* Safari and Chrome */
  -o-animation: fadein 3s; /* Opera */

  @media screen and (max-width: 768px) {
    padding: 32px 12px 0 12px;
  }

  @media screen and (max-width: 480px) {
    padding: 24px 8px 0 8px;
  }
`,Mo=w.img`
  width: 100%;
  height: auto;
  object-fit: contain;
  display: block;
  margin: 0 auto;
  max-width: 100%;

  @media screen and (max-width: 768px) {
    width: 100%;
    max-width: 100%;
  }
`,Do=w.p`
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
`,Lo=w.p`
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
`,Bo=w.p`
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
`,$o=()=>{const{WEDDING_DATE:e,WEDDING_LOCATION:t,GROOM_NAME:r,BRIDE_NAME:n}=st();return o.jsxs(No,{children:[o.jsx(Mo,{src:zo,alt:"Wedding invitation background"}),o.jsxs(Po,{children:[o.jsx(Do,{children:"WEDDING INVITATION"}),o.jsx(Lo,{children:"김진원 & 이연제"}),o.jsxs(Bo,{children:[e,o.jsx("br",{}),t]})]})]})},Ze=w.p`
  font-size: 1.1rem;
  line-height: 1.75;
  opacity: 0.75;
  margin-bottom: 42px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 1.0rem;
    line-height: 1.8;
    margin-bottom: 32px;
  }

  @media screen and (max-width: 480px) {
    font-size: 0.9rem;
    line-height: 1.9;
    margin-bottom: 24px;
  }
`,Rt=w.p`
  font-size: 1.2rem;
  color: var(--title-color);
  font-weight: bold;
  opacity: 0.85;
  margin-bottom: 0;

  @media screen and (max-width: 768px) {
    font-size: 1.1rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 1.0rem;
  }
`,Tt=w.div`
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
`,Fo=()=>{const{GROOM_NAME:e,GROOM_FATHER_NAME:t,GROOM_MOTHER_NAME:r,BRIDE_NAME:n,BRIDE_FATHER_NAME:i,BRIDE_MOTHER_NAME:a}=st();return o.jsxs(Tt,{children:[o.jsx(he,{style:{marginTop:32,marginBottom:32},plain:!0,children:o.jsx(Rt,{children:"초대합니다"})}),o.jsxs(Ze,{children:["소망이 축복 속에서 기쁨으로 이루어지는 날,",o.jsx("br",{}),o.jsx("br",{}),"저희 두 사람이 하나가 될",o.jsx("br",{}),"뜻깊은 날을 맞게 되었습니다.",o.jsx("br",{}),o.jsx("br",{}),"소중하고 힘찬 내디딤이 될 수 있도록",o.jsx("br",{}),"격려해 주시면 더없는 기쁨이 되겠습니다.",o.jsx("br",{}),o.jsx("br",{})]}),o.jsxs(Ze,{children:[t," · ",r,"의 아들"," ",o.jsx("span",{style:{fontWeight:"bold"},children:e}),o.jsx("br",{}),i," · ",a,"의 딸"," ",o.jsx("span",{style:{fontWeight:"bold"},children:n}),o.jsx("br",{}),o.jsx("br",{})]})]})},Go=w.div`
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
`;w.p`
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
`;const Ko=w.div`
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
    object-fit: contain;
    width: 100%;
    max-width: 500px;
    height: auto;
    margin: 0 auto;
    display: block;
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
      object-fit: contain;
      width: 100%;
      max-width: 100%;
      height: auto;
      margin: 0 auto;
      display: block;
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
      object-fit: contain;
      width: 100%;
      max-width: 100%;
      height: auto;
      margin: 0 auto;
      display: block;
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
`,rr=[{original:"/wedding_invitation/images/1.webp",thumbnail:"/wedding_invitation/images/1.webp"},{original:"/wedding_invitation/images/2.webp",thumbnail:"/wedding_invitation/images/2.webp"},{original:"/wedding_invitation/images/3.webp",thumbnail:"/wedding_invitation/images/3.webp"},{original:"/wedding_invitation/images/4.webp",thumbnail:"/wedding_invitation/images/4.webp"},{original:"/wedding_invitation/images/5.webp",thumbnail:"/wedding_invitation/images/5.webp"},{original:"/wedding_invitation/images/6.webp",thumbnail:"/wedding_invitation/images/6.webp"}],Wo=()=>{console.log("Images loaded:",rr);const e={touchAction:"pan-x pan-y pinch-zoom",WebkitOverflowScrolling:"touch"};return C.useEffect(()=>{const t=()=>{document.querySelectorAll(".image-gallery, .image-gallery *").forEach(i=>{i.style.touchAction="pan-x pan-y pinch-zoom"})};t();const r=setTimeout(t,100);return()=>clearTimeout(r)},[]),o.jsxs(Go,{children:[o.jsx(Ko,{style:e,children:o.jsx(sn,{items:rr,showPlayButton:!0,showFullscreenButton:!0,showThumbnails:!0,showNav:!0,showIndex:!1,showBullets:!1,thumbnailPosition:"bottom",slideInterval:3e3,slideDuration:450,slideOnThumbnailOver:!1,useBrowserFullscreen:!1,disableSwipe:!1,enableSwipe:!0,enableTouchDrag:!0,enableMouseDrag:!0,lazyLoad:!0,infinite:!0,startIndex:0})}),o.jsx("br",{}),o.jsx("br",{})]})},ke=w(Rt)`
  display: inline;
`,qo=w(Ze)`
  opacity: 1;
`,Ho=w.div`
  width: 100%;
  padding: 0;
  pointer-events: none;
  max-height: 400px;
  height: 400px;

  & > * {
    pointer-events: auto;
  }

  @media screen and (max-width: 768px) {
    margin: 0 -12px;
    width: calc(100% + 24px);
    height: 360px !important; /* 태블릿 이하에서 높이 축소 */
  }

  @media screen and (max-width: 480px) {
    margin: 0 -8px;
    width: calc(100% + 16px);
    /* 모바일에서 크롭 제거하고 더 낮은 높이 적용 */
    height: 300px !important;
  }
`,Yo=w.div`
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
  max-width: 220px;
  margin-left: auto;
  margin-right: auto;

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`,Uo=w.div`
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
`,nr=w.img`
  width: 100%;
  max-width: 500px;
  height: auto;
  border-radius: 8px;
  margin: 16px auto;
  display: block;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  opacity: 1;
  image-rendering: -webkit-optimize-contrast;
  image-rendering: crisp-edges;
  image-rendering: pixelated;
  image-rendering: auto;
  filter: none;

  &:hover {
    transform: scale(1.02);
  }

  @media screen and (max-width: 768px) {
    max-width: 100%;
    margin: 12px auto;
    border-radius: 6px;
  }

  @media screen and (max-width: 480px) {
    margin: 8px auto;
    border-radius: 4px;
  }
`,or=w.div`
  text-align: center;
  font-size: 0.8rem;
  color: var(--title-color);
  opacity: 0.7;
  margin-top: -8px;
  margin-bottom: 16px;
  font-weight: 500;

  @media screen and (max-width: 768px) {
    font-size: 0.75rem;
    margin-bottom: 12px;
  }

  @media screen and (max-width: 480px) {
    font-size: 0.7rem;
    margin-bottom: 8px;
  }
`,Vo=()=>{const[e,t]=C.useState(!1),r=()=>{const n=document.createElement("script"),i=document.createTextNode(`new daum.roughmap.Lander({
    "timestamp" : "1753587778659",
    "key" : "5xqv9qeza2u",
    "mapWidth" : "640",
    "mapHeight" : "480"
  }).render();`);n.appendChild(i),document.body.appendChild(n)};return C.useEffect(()=>{(function(){let n=window.location.protocol==="https:"?"https:":"http:",i="16137cec";if(window.daum&&window.daum.roughmap&&window.daum.roughmap.cdn)return;window.daum=window.daum||{},window.daum.roughmap={cdn:i,URL_KEY_DATA_LOAD_PRE:n+"//t1.daumcdn.net/roughmap/",url_protocal:n};let a=n+"//t1.daumcdn.net/kakaomapweb/place/jscss/roughmap/"+i+"/roughmapLander.js";const s=document.createElement("script");s.src=a,document.body.append(s),s.onload=()=>{r()}})()},[]),o.jsxs(Tt,{children:[o.jsx(he,{plain:!0,style:{marginTop:0,marginBottom:32},children:o.jsx(ke,{children:"오시는 길"})}),o.jsx(Ho,{id:"daumRoughmapContainer1753587778659",className:"root_daum_roughmap root_daum_roughmap_landing"}),o.jsxs(qo,{as:"div",children:[o.jsx("br",{}),o.jsx("br",{}),o.jsx("br",{}),o.jsx(ke,{children:"결혼식장"}),o.jsx("br",{}),o.jsx("span",{style:{fontWeight:"bold"},children:"프란치스코 교육회관"}),o.jsx("br",{}),"서울 중구 정동길 9 (정동 17-1, 04518)",o.jsx("br",{})," ",o.jsx("a",{href:"https://kko.kakao.com/SfeKhu-9eY",target:"_blank",rel:"noopener noreferrer",style:{color:"#3A6B5A",textDecoration:"underline",fontWeight:"normal",fontSize:"0.95em"},children:"카카오지도"})," | ",o.jsx("a",{href:"https://map.naver.com/p/entry/place/13353340?c=15.00,0,0,0,dh&placePath=/home?from=map&fromPanelNum=1&additionalHeight=76&timestamp=202507271836&locale=ko&svcName=map_pcv5",target:"_blank",rel:"noopener noreferrer",style:{color:"#3A6B5A",textDecoration:"underline",fontWeight:"normal",fontSize:"0.95em"},children:"네이버지도"}),o.jsx("br",{}),o.jsx("br",{}),o.jsx(nr,{src:"/wedding_invitation/loc_front.jpg",alt:"프란치스코 교육회관 정면"}),o.jsx(or,{children:"프란치스코 교육회관 정면"}),o.jsx("br",{}),o.jsx(ke,{children:"지하철 이용시"}),o.jsx("br",{}),"5호선 서대문역 5번 출구에서",o.jsx("br",{}),"경향신문사 방향으로 7분 거리",o.jsx("br",{}),"1,2호선 시청역 1,2,12번 출구",o.jsx("br",{}),"(덕수궁 방향)에서 정동길을 따라 15분 거리",o.jsx("br",{}),o.jsx("br",{}),o.jsx(ke,{children:"버스 이용시"}),o.jsx("br",{}),o.jsx("span",{style:{fontWeight:"bold"},children:"서울역사박물관 앞 하차"}),o.jsx("br",{}),o.jsx("br",{}),o.jsx(Yo,{onMouseEnter:()=>t(!0),onMouseLeave:()=>t(!1),onClick:()=>t(!e),children:o.jsx("span",{style:{fontWeight:"500"},children:"🚌 이용 가능한 버스 보기"})}),e&&o.jsxs(Uo,{children:[o.jsxs("div",{style:{border:"1px solid #1976d2",borderRadius:"6px",padding:"8px",backgroundColor:"rgba(25, 118, 210, 0.05)"},children:[o.jsx("div",{style:{color:"#1976d2",fontWeight:"bold",fontSize:"0.8rem",marginBottom:"6px"},children:"파란색 간선버스"}),o.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"6px"},children:["101","103","150","160","260","270","271","273","370","470","600","601","602","704","702A 서오릉","702B 용두초교","705","720","721","741","6002","N26","N37","N75"].map((n,i)=>o.jsx("span",{style:{backgroundColor:"#1976d2",color:"white",padding:"2px 5px",borderRadius:"3px",fontSize:"0.75rem",fontWeight:"500"},children:n},i))})]}),o.jsxs("div",{style:{border:"1px solid #008000",borderRadius:"6px",padding:"8px",backgroundColor:"rgba(0, 128, 0, 0.05)"},children:[o.jsx("div",{style:{color:"#008000",fontWeight:"bold",fontSize:"0.8rem",marginBottom:"6px"},children:"초록색 일반버스"}),o.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"6px"},children:["790","1002","7019","8101","8701"].map((n,i)=>o.jsx("span",{style:{backgroundColor:"#008000",color:"white",padding:"2px 5px",borderRadius:"3px",fontSize:"0.75rem",fontWeight:"500"},children:n},i))})]}),o.jsxs("div",{style:{border:"1px solid #ff0000",borderRadius:"6px",padding:"8px",backgroundColor:"rgba(255, 0, 0, 0.05)"},children:[o.jsx("div",{style:{color:"#ff0000",fontWeight:"bold",fontSize:"0.8rem",marginBottom:"6px"},children:"빨간색 광역버스"}),o.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"6px"},children:["1004","8600","8601","9709","9709N","9710","9710-1","G6005"].map((n,i)=>o.jsx("span",{style:{backgroundColor:"#ff0000",color:"white",padding:"2px 5px",borderRadius:"3px",fontSize:"0.75rem",fontWeight:"500"},children:n},i))})]})]}),o.jsx("br",{}),o.jsx(ke,{children:"주차"}),o.jsx("br",{}),o.jsx("span",{style:{fontWeight:"bold"},children:"이화정동빌딩"}),o.jsx("br",{}),"주말 시내 교통 체증이 예상되오니 대중교통을 권장드리며,",o.jsx("br",{}),"승용차를 가져오시는 경우"," ",o.jsx("span",{style:{fontWeight:"bold"},children:"이화정동빌딩 주차장"}),"을",o.jsx("br",{}),"이용하시기 바랍니다.",o.jsx("br",{}),o.jsx("br",{}),o.jsx(nr,{src:"/wedding_invitation/loc_parkinglot.jpg",alt:"이화정동빌딩 주차장"}),o.jsx(or,{children:"이화정동빌딩 주차장"}),o.jsx("br",{}),o.jsx("br",{}),o.jsx(ke,{children:"축하 화환"}),o.jsx("br",{}),"성당 내에는 축하 화환 반입이 제한되오니 양해 바랍니다.",o.jsx("br",{}),"화환을 대신하여 어려운 이웃을 위해",o.jsx("br",{}),"쌀 또는 성금으로 기부하실 수 있습니다.",o.jsx("br",{}),"성금 기부는 ",o.jsx("a",{href:"https://www.fec.or.kr/bbs/board.php?bo_table=pds&wr_id=29",target:"_blank",rel:"noopener noreferrer",children:"본 양식"}),"을 이용해 주시기 바랍니다.",o.jsx("br",{}),"(성금 기부 문의처 : 02) 6364-2245)",o.jsx("br",{}),o.jsx("br",{})]})]})},Jo="/wedding_invitation/Quote.png";w.div`
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
`;w.span`
  display: block;
  margin: 0 auto;
  font-size: 1.3rem;
  text-align: center;
  color: var(--title-color);
  line-height: 2.2rem;
  opacity: 1;
  background-image: url(${Jo});
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
`;var ct={};function vt(e){"@babel/helpers - typeof";return vt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},vt(e)}Object.defineProperty(ct,"__esModule",{value:!0});ct.CopyToClipboard=void 0;var Ge=Yr(C),Qo=Yr(Xr),Zo=["text","onCopy","options","children"];function Yr(e){return e&&e.__esModule?e:{default:e}}function ir(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function ar(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?ir(Object(r),!0).forEach(function(n){It(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ir(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function Xo(e,t){if(e==null)return{};var r=ei(e,t),n,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function ei(e,t){if(e==null)return{};var r={},n=Object.keys(e),i,a;for(a=0;a<n.length;a++)i=n[a],!(t.indexOf(i)>=0)&&(r[i]=e[i]);return r}function ti(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function ri(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function ni(e,t,r){return t&&ri(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function oi(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&jt(e,t)}function jt(e,t){return jt=Object.setPrototypeOf||function(n,i){return n.__proto__=i,n},jt(e,t)}function ii(e){var t=si();return function(){var n=Xe(e),i;if(t){var a=Xe(this).constructor;i=Reflect.construct(n,arguments,a)}else i=n.apply(this,arguments);return ai(this,i)}}function ai(e,t){if(t&&(vt(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Ur(e)}function Ur(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function si(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Xe(e){return Xe=Object.setPrototypeOf?Object.getPrototypeOf:function(r){return r.__proto__||Object.getPrototypeOf(r)},Xe(e)}function It(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var Vr=function(e){oi(r,e);var t=ii(r);function r(){var n;ti(this,r);for(var i=arguments.length,a=new Array(i),s=0;s<i;s++)a[s]=arguments[s];return n=t.call.apply(t,[this].concat(a)),It(Ur(n),"onClick",function(l){var c=n.props,d=c.text,h=c.onCopy,u=c.children,f=c.options,p=Ge.default.Children.only(u),x=(0,Qo.default)(d,f);h&&h(d,x),p&&p.props&&typeof p.props.onClick=="function"&&p.props.onClick(l)}),n}return ni(r,[{key:"render",value:function(){var i=this.props;i.text,i.onCopy,i.options;var a=i.children,s=Xo(i,Zo),l=Ge.default.Children.only(a);return Ge.default.cloneElement(l,ar(ar({},s),{},{onClick:this.onClick}))}}]),r}(Ge.default.PureComponent);ct.CopyToClipboard=Vr;It(Vr,"defaultProps",{onCopy:void 0,options:void 0});var ci=ct,kt=ci.CopyToClipboard;kt.CopyToClipboard=kt;var di=kt;const ze=xr(di),li=w(Tt)`
  padding-bottom: 18px;
`,pi=w.img`
  width: 100%;
  height: auto;
  display: block;
  margin: 8px auto;
  border-radius: 0;
  box-shadow: none;
  filter: none;
`;w.video`
  width: 100%;
  height: auto;
  display: block;
  margin: 8px auto;
  border-radius: 0;
  box-shadow: none;
  
  /* 배경 투명 처리 - mask 속성 사용 */
  background: transparent;
  
  /* mask 속성으로 검은 배경 제거 */
  /* 방법 1: 기본 마스크 적용 */
  mask: linear-gradient(black, black);
  -webkit-mask: linear-gradient(black, black);
  
  /* 방법 2: 필터 제거 - 원본 색상 그대로 유지 */
  /* filter: none; */
  
  /* 방법 3: 블렌드 모드 제거 - 자연스러운 표시 */
  /* mix-blend-mode: normal; */
  
  /* 방법 4: 대안 - multiply 모드 */
  /* mix-blend-mode: multiply; */
  
  /* 방법 5: 대안 - overlay 모드 */
  /* mix-blend-mode: overlay; */
`;const sr=w.p`
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
`,cr=w.p`
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
`,ui=w.div`
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
`,dr=w.div`
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
`,lr=w(Te)`
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
`,fi=()=>{const[e,t]=C.useState(!1),[r,n]=C.useState(!1),{GROOM_NAME:i,GROOM_ACCOUNT_NUMBER:a,GROOM_FATHER_NAME:s,GROOM_FATHER_ACCOUNT_NUMBER:l,GROOM_MOTHER_NAME:c,GROOM_MOTHER_ACCOUNT_NUMBER:d,BRIDE_NAME:h,BRIDE_ACCOUNT_NUMBER:u}=st();return o.jsxs(li,{"data-aos":"fade-up",children:[o.jsx(he,{plain:!0,style:{marginTop:0,marginBottom:32},children:o.jsx(Rt,{children:"마음 전하실 곳"})}),o.jsxs(Ze,{children:["참석이 어려우신 분들을 위해 기재했습니다. ",o.jsx("br",{}),"너그러운 마음으로 양해 부탁드립니다."]}),o.jsxs(ui,{children:[o.jsxs(dr,{onClick:()=>t(!0),children:[o.jsx(Pt,{style:{fontSize:64,marginBottom:16},twoToneColor:"#829fe0"}),o.jsx("br",{}),o.jsx(sr,{children:"신랑측 계좌번호 확인"})]}),o.jsxs(dr,{onClick:()=>n(!0),children:[o.jsx(Pt,{style:{fontSize:64,marginBottom:16},twoToneColor:"#fe7daf"}),o.jsx("br",{}),o.jsx(sr,{children:"신부측 계좌번호 확인"})]})]}),o.jsxs(lr,{title:o.jsx("b",{children:"신랑측 계좌번호"}),open:e,onOk:()=>t(!1),onCancel:()=>t(!1),footer:[o.jsx(cr,{children:"계좌번호 클릭시, 붙여넣기 가능한 텍스트로 복사됩니다."},"groom-footer")],children:[o.jsxs("div",{children:[o.jsx("b",{children:"신랑 : 김진원"}),o.jsx(he,{type:"vertical"}),o.jsx(ze,{text:a,children:o.jsx(Q,{type:"text",style:{padding:0,margin:0},onClick:()=>$.success("계좌번호가 복사되었습니다."),children:a})})]}),o.jsxs("div",{style:{marginTop:24,marginBottom:24},children:[o.jsx("b",{children:"부 : 김봉규"}),o.jsx(he,{type:"vertical"}),o.jsx(ze,{text:l,children:o.jsx(Q,{type:"text",style:{padding:0,margin:0},onClick:()=>$.success("계좌번호가 복사되었습니다."),children:l})})]}),o.jsxs("div",{children:[o.jsx("b",{children:"모 : 송혜정"}),o.jsx(he,{type:"vertical"}),o.jsx(ze,{text:d,children:o.jsx(Q,{type:"text",style:{padding:0,margin:0},onClick:()=>$.success("계좌번호가 복사되었습니다."),children:d})})]})]}),o.jsx(lr,{title:o.jsx("b",{children:"신부측 계좌번호"}),open:r,onOk:()=>n(!1),onCancel:()=>n(!1),footer:[o.jsx(cr,{children:"계좌번호 클릭시, 붙여넣기 가능한 텍스트로 복사됩니다."},"bride-footer")],children:o.jsxs("div",{children:[o.jsx("b",{children:"신부 : 이연제"}),o.jsx(he,{type:"vertical"}),o.jsx(ze,{text:u,children:o.jsx(Q,{type:"text",style:{padding:0,margin:0},onClick:()=>$.success("계좌번호가 복사되었습니다."),children:u})})]})}),o.jsx(pi,{src:"/wedding_invitation/end.gif",alt:"추억 이미지"})]})},mi=w.div`
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
`,hi=w.span`
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
`,gi=w.div`
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
`,xi=w(Q)`
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
`,pr=w(Q)`
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
`,bi=()=>{const[e,t]=C.useState(!1),[r,n]=C.useState(!1),[i,a]=C.useState(!1),[s,l]=C.useState(!1),[c,d]=C.useState(0),{GROOM_NAME:h,BRIDE_NAME:u,KAKAOTALK_SHARE_IMAGE:f,WEDDING_INVITATION_URL:p,KAKAOTALK_API_TOKEN:x}=st();C.useEffect(()=>{t(!0)},[]),C.useEffect(()=>{const j=()=>window.Kakao?(n(!0),a(!1),l(!1),!0):!1;if(j())return;const E=setInterval(()=>{j()&&clearInterval(E)},500),T=setTimeout(()=>{clearInterval(E),a(!1),window.Kakao||(console.warn("카카오톡 SDK 로드 타임아웃 - 15초 후에도 로드되지 않음"),l(!0))},15e3);return()=>{clearInterval(E),clearTimeout(T)}},[]);const k=async()=>{if(!x){console.warn("카카오톡 API 토큰이 설정되지 않았습니다."),$.error("카카오톡 공유 기능을 사용할 수 없습니다.");return}if(i){$.info("카카오톡 SDK를 로드하는 중입니다. 잠시만 기다려주세요.");return}if(s&&c>=3){$.warning("카카오톡 공유가 불가능합니다. 링크 복사로 공유해주세요.");return}if(!r&&!window.Kakao){console.warn(`카카오톡 SDK가 로드되지 않았습니다. 재시도 중... (${c+1}/3)`),a(!0),d(j=>j+1);try{if(await I(),await new Promise(j=>setTimeout(j,2e3)),!window.Kakao)throw new Error("SDK 재로드 후에도 window.Kakao가 없음")}catch(j){console.error("카카오톡 SDK 재로드 실패:",j),a(!1),c>=2?(l(!0),$.error("카카오톡 공유 기능을 사용할 수 없습니다. 링크 복사로 공유해주세요.")):$.error("카카오톡 공유 기능을 사용할 수 없습니다. 잠시 후 다시 시도해주세요.");return}}if(window.Kakao){const j=window.Kakao;if(!j.isInitialized())try{j.init(x)}catch(E){console.error("카카오톡 SDK 초기화 실패:",E),$.error("카카오톡 공유 기능을 초기화할 수 없습니다.");return}try{j.Share.sendCustom({templateId:124907}),$.success("카카오톡으로 청첩장을 공유합니다!")}catch(E){console.error("카카오톡 공유 버튼 생성 실패:",E),$.error("카카오톡 공유 기능을 사용할 수 없습니다.")}}else console.warn("카카오톡 SDK가 로드되지 않았습니다."),$.error("카카오톡 공유 기능을 사용할 수 없습니다. 잠시 후 다시 시도해주세요.")},I=()=>new Promise((j,E)=>{document.querySelectorAll('script[src*="kakao.min.js"]').forEach(_=>_.remove());const P=Date.now(),b=document.createElement("script");b.async=!0,b.src=`https://developers.kakao.com/sdk/js/kakao.min.js?v=${P}`;const y=setTimeout(()=>{b.remove(),E(new Error("SDK 로드 타임아웃"))},1e4);b.onload=()=>{clearTimeout(y),console.log("카카오톡 SDK 수동 로드 완료"),setTimeout(()=>{window.Kakao&&typeof window.Kakao.init=="function"?(n(!0),a(!1),l(!1),j()):E(new Error("SDK 로드되었지만 window.Kakao가 사용 불가능"))},500)},b.onerror=_=>{clearTimeout(y),console.error("카카오톡 SDK 수동 로드 실패:",_),a(!1),E(_)},document.head.appendChild(b)}),z=!x;return o.jsxs(mi,{style:{marginBottom:16},children:[o.jsx(he,{"data-aos":"fade-up",plain:!0,style:{marginTop:0,marginBottom:32},children:o.jsx(hi,{children:"청첩장 공유하기"})}),o.jsxs(gi,{"data-aos":"fade-up",children:[!z&&o.jsx(xi,{"data-aos":"fade-up",style:{margin:0,opacity:s?.6:1},icon:o.jsx(cn,{}),id:"sendKakao",size:"large",loading:i,disabled:i,onClick:k,children:i?"카카오톡 SDK 로드 중...":s?"카카오톡 공유 (재시도)":"카카오톡으로 공유하기"}),e?o.jsx(ze,{text:p,children:o.jsx(pr,{style:{margin:0,border:s?"2px solid var(--medium-green)":"1px solid var(--white)",boxShadow:s?"0 0 10px rgba(76, 175, 80, 0.3)":"none"},icon:o.jsx(Mt,{}),size:"large",onClick:()=>{s?$.success("청첩장 링크가 복사되었습니다. 카카오톡에 붙여넣기하여 공유해주세요!"):$.success("청첩장 링크가 복사되었습니다.")},children:s?"📋 링크 복사 (카카오톡 공유용)":"링크로 공유하기"})}):o.jsx(pr,{style:{margin:0},icon:o.jsx(Mt,{}),size:"large",disabled:!0,children:"링크로 공유하기"})]})]})},yi={apiKey:"AIzaSyDgt17zNlbq9-e31tmXjhp6dwbYFPo9uSk",authDomain:"wedding1108-b3bdb.firebaseapp.com",projectId:"wedding1108-b3bdb",storageBucket:"wedding1108-b3bdb.firebasestorage.app",messagingSenderId:"692522081520",appId:"1:692522081520:web:7a186f603800154865b635"},wi=un(yi),Le=fn(wi),Be="guestbooks",vi=async e=>{try{if(!navigator.onLine)throw new Error("인터넷 연결을 확인해주세요.");return{success:!0,id:(await bn(br(Le,Be),{...e,password:e.password,timestamp:yr()})).id,message:"방명록이 성공적으로 작성되었습니다."}}catch(t){throw console.error("방명록 추가 오류:",t),new Error("방명록 작성에 실패했습니다. 잠시 후 다시 시도해주세요.")}},ji=async(e=50)=>{try{if(!navigator.onLine)throw new Error("인터넷 연결을 확인해주세요.");const t=mn(br(Le,Be),hn("timestamp","desc"),gn(e)),r=await xn(t),n=[];return r.forEach(i=>{var a,s,l;n.push({id:i.id,...i.data(),timestamp:((l=(s=(a=i.data().timestamp)==null?void 0:a.toDate)==null?void 0:s.call(a))==null?void 0:l.toISOString())||new Date().toISOString()})}),{success:!0,data:n,total:n.length,hasMore:n.length===e}}catch(t){throw console.error("방명록 조회 오류:",t),t.code==="permission-denied"?new Error("방명록 접근 권한이 없습니다. 관리자에게 문의해주세요."):t.code==="unavailable"?new Error("서비스가 일시적으로 사용할 수 없습니다. 잠시 후 다시 시도해주세요."):t.message.includes("ERR_BLOCKED_BY_CLIENT")||t.message.includes("blocked")?new Error("광고 차단기나 보안 확장 프로그램이 서비스 접근을 차단하고 있습니다. 확장 프로그램을 비활성화하고 다시 시도해주세요."):t.message.includes("network")||t.message.includes("fetch")?new Error("네트워크 연결을 확인해주세요."):new Error("방명록을 불러오는데 실패했습니다. 잠시 후 다시 시도해주세요.")}},ki=async(e,t)=>{try{if(!navigator.onLine)throw new Error("인터넷 연결을 확인해주세요.");const r=Et(Le,Be,e);return await yn(r,{...t,updatedAt:yr()}),{success:!0,message:"방명록이 성공적으로 수정되었습니다."}}catch(r){throw console.error("방명록 수정 오류:",r),r.code==="permission-denied"?new Error("방명록 수정 권한이 없습니다."):r.code==="not-found"?new Error("수정할 방명록을 찾을 수 없습니다."):r.message.includes("ERR_BLOCKED_BY_CLIENT")||r.message.includes("blocked")?new Error("광고 차단기나 보안 확장 프로그램이 서비스 접근을 차단하고 있습니다."):new Error("방명록 수정에 실패했습니다. 잠시 후 다시 시도해주세요.")}},Ei=async(e,t)=>{try{if(!navigator.onLine)throw new Error("인터넷 연결을 확인해주세요.");if(t==="admin12345678")return{success:!0,message:"마스터 비밀번호가 확인되었습니다."};const n=Et(Le,Be,e),i=await wn(n);if(!i.exists())throw new Error("방명록을 찾을 수 없습니다.");if(i.data().password!==t)throw new Error("비밀번호가 올바르지 않습니다.");return{success:!0,message:"비밀번호가 확인되었습니다."}}catch(r){throw console.error("비밀번호 검증 오류:",r),r.message.includes("비밀번호가 올바르지 않습니다")?r:r.code==="not-found"?new Error("방명록을 찾을 수 없습니다."):r.message.includes("ERR_BLOCKED_BY_CLIENT")||r.message.includes("blocked")?new Error("광고 차단기나 보안 확장 프로그램이 서비스 접근을 차단하고 있습니다."):new Error("비밀번호 검증에 실패했습니다. 잠시 후 다시 시도해주세요.")}},Si=async e=>{try{if(!navigator.onLine)throw new Error("인터넷 연결을 확인해주세요.");const t=Et(Le,Be,e);return await vn(t),{success:!0,message:"방명록이 성공적으로 삭제되었습니다."}}catch(t){throw console.error("방명록 삭제 오류:",t),t.code==="permission-denied"?new Error("방명록 삭제 권한이 없습니다."):t.code==="not-found"?new Error("삭제할 방명록을 찾을 수 없습니다."):t.message.includes("ERR_BLOCKED_BY_CLIENT")||t.message.includes("blocked")?new Error("광고 차단기나 보안 확장 프로그램이 서비스 접근을 차단하고 있습니다."):new Error("방명록 삭제에 실패했습니다. 잠시 후 다시 시도해주세요.")}},{TextArea:ur}=be,{Text:_i}=en,Oi=w.div`
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
`,Ci=w.span`
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
`,Ai=w(Q)`
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
`,Jr=w(an)`
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
`,Ri=w.div`
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
`,Ti=w.div`
  position: absolute;
  bottom: 12px;
  right: 16px;
  display: flex;
  gap: 8px;
  opacity: 0;
  transition: opacity 0.3s ease;

  ${Jr}:hover & {
    opacity: 1;
  }

  @media screen and (max-width: 768px) {
    bottom: 8px;
    right: 12px;
    gap: 6px;
  }
`,fr=w(Q)`
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
`,Ii=w.div`
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
`,zi=w.div`
  color: var(--text-color);
  line-height: 1.6;
  margin-top: 8px;
  white-space: pre-wrap;
  word-break: break-word;

  @media screen and (max-width: 768px) {
    font-size: 0.9rem;
    line-height: 1.5;
  }
`,Ni=()=>{const[e,t]=C.useState(!1),[r,n]=C.useState([]),[i,a]=C.useState(!1),[s,l]=C.useState(!1),[c,d]=C.useState(!1),[h,u]=C.useState(!1),[f,p]=C.useState(null),[x,k]=C.useState(""),[I,z]=C.useState(!0),[j,E]=C.useState(!1),[T,P]=C.useState(!1),[b]=re.useForm(),[y]=re.useForm(),[_]=re.useForm();C.useEffect(()=>{t(!0)},[]),C.useEffect(()=>{if(!e)return;const m=async(O=0)=>{try{z(!0),P(!1);const R=await ji();n(R.data||[])}catch(R){if(console.error("방명록 로드 실패:",R),O<2&&(R.message.includes("blocked")||R.message.includes("network"))){console.log(`재시도 중... (${O+1}/2)`),setTimeout(()=>{m(O+1)},2e3);return}P(!0),$.error(R.message||"방명록을 불러오는데 실패했습니다.")}finally{z(!1)}};m()},[e]);const H=async()=>{try{E(!0);const m=await b.validateFields(),O=await vi({name:m.name,message:m.message,relationship:m.relationship||"",password:m.password});if(O.success){const R={id:O.id,name:m.name,message:m.message,relationship:m.relationship||"",timestamp:new Date().toISOString()};n([R,...r]),b.resetFields(),a(!1),$.success("방명록이 등록되었습니다.")}}catch(m){console.error("방명록 추가 실패:",m),$.error(m.message||"방명록 등록에 실패했습니다.")}finally{E(!1)}},se=async()=>{try{E(!0);const m=await y.validateFields();(await ki(f.id,{name:m.name,message:m.message,relationship:m.relationship||""})).success&&(n(r.map(R=>R.id===f.id?{...R,name:m.name,message:m.message,relationship:m.relationship||"",updatedAt:new Date().toISOString()}:R)),y.resetFields(),l(!1),p(null),$.success("방명록이 수정되었습니다."))}catch(m){console.error("방명록 수정 실패:",m),$.error(m.message||"방명록 수정에 실패했습니다.")}finally{E(!1)}},v=async m=>{try{(await Si(m)).success&&(n(r.filter(R=>R.id!==m)),$.success("방명록이 삭제되었습니다."))}catch(O){console.error("방명록 삭제 실패:",O),$.error(O.message||"방명록 삭제에 실패했습니다.")}},g=(m,O)=>{p(m),k(O),d(!0),_.resetFields()},N=async()=>{try{E(!0);const O=(await _.validateFields()).password,R=await Ei(f.id,O);R.success&&(x==="edit"?(y.setFieldsValue({name:f.name,message:f.message,relationship:f.relationship||""}),d(!1),l(!0),p({...f,password:O}),$.success(R.message)):x==="delete"&&(d(!1),u(!0)))}catch(m){console.error("비밀번호 확인 실패:",m),$.error(m.message||"비밀번호 확인에 실패했습니다.")}finally{E(!1)}},S=m=>{g(m,"edit")},W=m=>{const O=r.find(R=>R.id===m);O&&g(O,"delete")};C.useEffect(()=>{const m=O=>{h&&O.key==="Enter"&&(O.preventDefault(),v(f.id),u(!1),p(null),k(""))};return h&&document.addEventListener("keydown",m),()=>{document.removeEventListener("keydown",m)}},[h,f]);const Z=m=>{try{if(!m)return"날짜 없음";const O=new Date(m);return isNaN(O.getTime())?"날짜 오류":O.toLocaleString("ko-KR",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"})}catch(O){return console.error("날짜 포맷팅 오류:",O),"날짜 오류"}};return o.jsxs(Oi,{style:{marginBottom:16},"data-aos":"fade-up",children:[o.jsx(he,{plain:!0,style:{marginTop:0,marginBottom:32},children:o.jsx(Ci,{children:"방명록"})}),T&&o.jsx(tn,{message:"방명록 서비스 연결 오류",description:o.jsxs("div",{children:[o.jsx("p",{children:"서버와의 연결에 문제가 있어 방명록 기능을 사용할 수 없습니다."}),o.jsxs("p",{style:{marginTop:"8px",fontSize:"0.9rem"},children:[o.jsx("strong",{children:"해결 방법:"}),o.jsx("br",{}),"1. 광고 차단기나 보안 확장 프로그램을 일시적으로 비활성화",o.jsx("br",{}),"2. 브라우저를 새로고침",o.jsx("br",{}),"3. 잠시 후 다시 시도"]})]}),type:"warning",showIcon:!0,icon:o.jsx(dn,{}),style:{marginBottom:16}}),o.jsx(Ai,{icon:o.jsx(rn,{}),size:"large",onClick:()=>a(!0),disabled:T,children:"방명록 작성하기"}),o.jsx("div",{style:{textAlign:"left"},children:e?I?o.jsxs("div",{style:{textAlign:"center",padding:"40px 20px"},children:[o.jsx(Nt,{size:"large"}),o.jsx("div",{style:{marginTop:"16px",color:"#666"},children:"방명록을 불러오는 중..."})]}):T?o.jsxs("div",{style:{textAlign:"center",padding:"40px 20px",color:"#999",fontSize:"0.9rem"},children:["방명록 서비스를 사용할 수 없습니다.",o.jsx("br",{}),"잠시 후 다시 시도해주세요."]}):o.jsxs(o.Fragment,{children:[r.length>0&&o.jsx("div",{style:{marginBottom:"16px",padding:"0 4px"},children:o.jsxs(_i,{style:{color:"#666",fontSize:"0.9rem"},children:["총 ",r.length,"개의 방명록"]})}),r.length===0?o.jsxs("div",{style:{textAlign:"center",padding:"40px 20px",color:"#999",fontSize:"0.9rem"},children:["아직 방명록이 없습니다.",o.jsx("br",{}),"첫 번째 방명록을 남겨보세요!"]}):r.map(m=>o.jsxs(Jr,{style:{cursor:"default"},children:[o.jsx(Ri,{children:Z(m.timestamp)}),o.jsx(Ii,{children:m.name}),m.relationship&&o.jsx("div",{style:{fontSize:"0.8rem",color:"#666",marginBottom:"8px"},children:m.relationship}),o.jsx(zi,{children:m.message}),o.jsxs(Ti,{children:[o.jsx(fr,{icon:o.jsx(nn,{}),onClick:O=>{O.stopPropagation(),S(m)},title:"수정"}),o.jsx(fr,{icon:o.jsx(on,{}),onClick:O=>{O.stopPropagation(),W(m.id)},title:"삭제",danger:!0})]})]},m.id))]}):o.jsxs("div",{style:{textAlign:"center",padding:"40px 20px"},children:[o.jsx(Nt,{size:"large"}),o.jsx("div",{style:{marginTop:"16px",color:"#666"},children:"로딩 중..."})]})}),o.jsx(Te,{title:"방명록 작성",open:i,onCancel:()=>{a(!1),b.resetFields()},okText:"등록",cancelText:"취소",width:400,confirmLoading:j,footer:[o.jsx(Q,{onClick:()=>{a(!1),b.resetFields()},children:"취소"},"cancel"),o.jsx(Q,{type:"primary",loading:j,onClick:()=>b.submit(),children:"등록"},"submit")],children:o.jsxs(re,{form:b,layout:"vertical",onFinish:H,children:[o.jsx(re.Item,{name:"name",label:"이름",rules:[{required:!0,message:"이름을 입력해주세요."}],children:o.jsx(be,{prefix:o.jsx(Dt,{}),placeholder:"이름을 입력하세요",maxLength:20,onPressEnter:()=>b.submit()})}),o.jsx(re.Item,{name:"relationship",label:"관계 (선택사항)",children:o.jsx(be,{placeholder:"예: 신랑 친구, 신부 동생 등",maxLength:30,onPressEnter:()=>b.submit()})}),o.jsx(re.Item,{name:"message",label:"메시지",rules:[{required:!0,message:"메시지를 입력해주세요."}],children:o.jsx(ur,{prefix:o.jsx(Lt,{}),placeholder:"축하 메시지를 남겨주세요",rows:4,maxLength:500,showCount:!0,onPressEnter:m=>{(m.ctrlKey||m.metaKey)&&b.submit()}})}),o.jsx(re.Item,{name:"password",label:"비밀번호",rules:[{required:!0,message:"비밀번호를 입력해주세요."},{min:4,message:"비밀번호는 4자 이상이어야 합니다."},{max:20,message:"비밀번호는 20자 이하여야 합니다."}],children:o.jsx(be.Password,{prefix:o.jsx(Bt,{}),placeholder:"수정/삭제 시 사용할 비밀번호",maxLength:20,onPressEnter:()=>b.submit()})})]})}),o.jsx(Te,{title:"방명록 수정",open:s,onCancel:()=>{l(!1),p(null),y.resetFields()},okText:"수정",cancelText:"취소",width:400,confirmLoading:j,footer:[o.jsx(Q,{onClick:()=>{l(!1),p(null),y.resetFields()},children:"취소"},"cancel"),o.jsx(Q,{type:"primary",loading:j,onClick:()=>y.submit(),children:"수정"},"submit")],children:o.jsxs(re,{form:y,layout:"vertical",onFinish:se,children:[o.jsx(re.Item,{name:"name",label:"이름",rules:[{required:!0,message:"이름을 입력해주세요."}],children:o.jsx(be,{prefix:o.jsx(Dt,{}),placeholder:"이름을 입력하세요",maxLength:20,onPressEnter:()=>y.submit()})}),o.jsx(re.Item,{name:"relationship",label:"관계 (선택사항)",children:o.jsx(be,{placeholder:"예: 신랑 친구, 신부 동생 등",maxLength:30,onPressEnter:()=>y.submit()})}),o.jsx(re.Item,{name:"message",label:"메시지",rules:[{required:!0,message:"메시지를 입력해주세요."}],children:o.jsx(ur,{prefix:o.jsx(Lt,{}),placeholder:"축하 메시지를 남겨주세요",rows:4,maxLength:500,showCount:!0,onPressEnter:m=>{(m.ctrlKey||m.metaKey)&&y.submit()}})})]})}),o.jsxs(Te,{title:`방명록 ${x==="edit"?"수정":"삭제"} - 비밀번호 확인`,open:c,onCancel:()=>{d(!1),p(null),k(""),_.resetFields()},okText:"확인",cancelText:"취소",width:400,confirmLoading:j,footer:[o.jsx(Q,{onClick:()=>{d(!1),p(null),k(""),_.resetFields()},children:"취소"},"cancel"),o.jsx(Q,{type:"primary",loading:j,onClick:()=>_.submit(),children:"확인"},"submit")],children:[o.jsx("div",{style:{marginBottom:16},children:o.jsxs("p",{style:{marginBottom:8},children:[o.jsx("strong",{children:f==null?void 0:f.name}),"님의 방명록을"," ",x==="edit"?"수정":"삭제","하려면 비밀번호를 입력해주세요."]})}),o.jsx(re,{form:_,layout:"vertical",onFinish:N,children:o.jsx(re.Item,{name:"password",label:"비밀번호",rules:[{required:!0,message:"비밀번호를 입력해주세요."},{min:4,message:"비밀번호는 4자 이상이어야 합니다."}],children:o.jsx(be.Password,{prefix:o.jsx(Bt,{}),placeholder:"개별 비밀번호 또는 마스터 비밀번호",maxLength:20,onPressEnter:()=>_.submit()})})})]}),o.jsx(Te,{title:"방명록 삭제",open:h,onCancel:()=>{u(!1),p(null),k("")},okText:"삭제",cancelText:"취소",width:400,confirmLoading:j,footer:[o.jsx(Q,{onClick:()=>{u(!1),p(null),k("")},children:"취소"},"cancel"),o.jsx(Q,{type:"primary",danger:!0,loading:j,onClick:()=>{v(f.id),u(!1),p(null),k("")},children:"삭제"},"delete")],children:o.jsxs("div",{style:{marginBottom:16},children:[o.jsxs("p",{style:{marginBottom:8},children:[o.jsx("strong",{children:f==null?void 0:f.name}),"님의 방명록을 삭제하시겠습니까?"]}),o.jsx("p",{style:{color:"#ff4d4f",fontSize:"0.9rem"},children:"이 작업은 되돌릴 수 없습니다."})]})})]})},Pi=w.footer`
  padding: 20px;
  text-align: center;
  opacity: 1;
  background: var(--dark-green);
  color: var(--white);
  margin-top: 40px;
`,Mi=({children:e,...t})=>o.jsx(Pi,{...t,children:e});w.div`
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
`;w.div`
  text-align: center;
  color: var(--title-color);
  padding: 20px;

  @media screen and (max-width: 768px) {
    padding: 16px;
  }

  @media screen and (max-width: 480px) {
    padding: 12px;
  }
`;w.div`
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
`;w.div`
  font-size: 1rem;
  font-weight: 500;

  @media screen and (max-width: 768px) {
    font-size: 0.9rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 0.85rem;
  }
`;w.div`
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
`;const Di=w.div`
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
`,Li=w.button`
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
`,Bi=w.div`
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
`,$i=({audioRef:e,onMusicToggle:t})=>{const[r,n]=C.useState(!1);C.useEffect(()=>{const a=e.current;if(!a)return;const s=()=>n(!0),l=()=>n(!1),c=()=>{a.currentTime=0,a.play().catch(d=>{console.log("Music replay failed:",d)})};return a.addEventListener("play",s),a.addEventListener("pause",l),a.addEventListener("ended",c),()=>{a.removeEventListener("play",s),a.removeEventListener("pause",l),a.removeEventListener("ended",c)}},[e]);const i=()=>{const a=e.current;a&&(r?a.pause():a.play().catch(s=>{console.log("Music play failed:",s)}),t&&t(!r))};return o.jsxs(Di,{children:[o.jsx(Li,{onClick:i,className:r?"playing":"",title:r?"음악 켜기":"음악 끄기",children:r?o.jsx(ln,{}):o.jsx(pn,{})}),o.jsx(Bi,{children:r?"음악 OFF":"음악 ON"})]})},mr="/wedding_invitation/song.mp3",hr=w.div`
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
`,gr=w.div`
  @font-face {
    font-family: 'GowunDodum';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2108@1.1/GowunDodum-Regular.woff') format('woff'),
         url(${"/wedding_invitation/fonts/GowunDodum-Regular.ttf"}) format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }
`,Fi=()=>{const[e,t]=C.useState(!1),[r,n]=C.useState(!1),[i,a]=C.useState(!1),s=C.useRef(null);C.useEffect(()=>{navigator.userAgent.includes("Edg")||navigator.userAgent.includes("Edge")?(console.log("Edge browser detected - applying compatibility fixes"),setTimeout(()=>a(!0),200)):a(!0)},[]),C.useEffect(()=>{const c=s.current;if(!c)return;const d=setTimeout(()=>{console.log("Audio loading timeout - proceeding anyway"),t(!0)},5e3),h=()=>{console.log("Audio can play"),clearTimeout(d),t(!0)},u=()=>{console.log("Audio can play through"),clearTimeout(d),t(!0)},f=z=>{console.error("Audio loading failed:",z),clearTimeout(d),n(!0),t(!0)},p=()=>{console.log("Audio loading started")},x=()=>{console.log("Audio loading progress")},k=()=>{console.log("Audio data loaded"),clearTimeout(d),t(!0)},I=()=>{console.log("Audio metadata loaded"),clearTimeout(d),t(!0)};return c.addEventListener("loadstart",p),c.addEventListener("progress",x),c.addEventListener("loadeddata",k),c.addEventListener("loadedmetadata",I),c.addEventListener("canplay",h),c.addEventListener("canplaythrough",u),c.addEventListener("error",f),()=>{clearTimeout(d),c.removeEventListener("loadstart",p),c.removeEventListener("progress",x),c.removeEventListener("loadeddata",k),c.removeEventListener("loadedmetadata",I),c.removeEventListener("canplay",h),c.removeEventListener("canplaythrough",u),c.removeEventListener("error",f)}},[]),C.useEffect(()=>{if(window.Kakao)return;const c=document.createElement("script");return c.async=!0,c.src="https://developers.kakao.com/sdk/js/kakao.min.js",c.onload=()=>{console.log("카카오톡 SDK 로드 완료")},c.onerror=()=>{console.error("카카오톡 SDK 로드 실패")},document.body.appendChild(c),()=>{const d=document.querySelector('script[src*="kakao.min.js"]');d&&document.body.removeChild(d)}},[]),C.useEffect(()=>{An.init({duration:1500})},[]);const l=c=>{console.log("Music toggled:",c?"ON":"OFF")};return i?o.jsxs(hr,{children:[o.jsx(gr,{}),o.jsx($i,{audioRef:s,onMusicToggle:l}),o.jsxs("audio",{ref:s,preload:"auto",loop:!0,style:{display:"none"},onLoadStart:()=>console.log("Audio load start"),onCanPlay:()=>{console.log("Audio can play from inline"),t(!0)},onError:c=>{console.error("Audio error from inline:",c),n(!0),t(!0)},children:[o.jsx("source",{src:mr,type:"audio/mpeg"}),o.jsx("source",{src:mr,type:"audio/mp3"}),o.jsx("track",{kind:"captions"})]}),o.jsx($o,{}),o.jsx(Fo,{}),o.jsx(Wo,{}),o.jsx(Vo,{}),o.jsx(fi,{}),o.jsx(bi,{}),o.jsx(Ni,{}),o.jsxs(Mi,{style:{background:"var(--dark-green)",opacity:.8,textAlign:"center",color:"var(--dark-green)"},children:[o.jsx("div",{style:{fontSize:"0.8rem",marginBottom:"4px",color:"var(--background-color)"},children:"Copyright © 2025 Jinwon Kim & Yeonje Lee"}),o.jsxs("div",{style:{fontSize:"0.7rem",opacity:.6,marginTop:"4px",fontStyle:"italic",color:"var(--background-color)"},children:["Background Music:"," ",o.jsx("a",{href:"https://youtu.be/RbCjnviTo_s?si=oj1JppC3nud_nu96",target:"_blank",rel:"noopener noreferrer",style:{color:"inherit",textDecoration:"underline",opacity:.8},children:"YouTube"})]})]})]}):o.jsxs(hr,{children:[o.jsx(gr,{}),o.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",fontSize:"1.2rem",color:"var(--text-color)"},children:"로딩 중..."})]})};ft.createRoot(document.getElementById("root")).render(o.jsx(Fi,{}));
