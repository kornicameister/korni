(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(){},29:function(){},30:function(){},32:function(){},33:function(n,r,t){"use strict";t.r(r);var e=t(4),i=(t(31),t(32),t(5)),a=!("localhost"!==window.location.hostname&&"[::1]"!==window.location.hostname&&!window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function o(n){navigator.serviceWorker.register(n).then(function(n){n.onupdatefound=function(){var r=n.installing;r.onstatechange=function(){"installed"===r.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(n){console.error("Error during service worker registration:",n)})}for(var f=Object({NODE_ENV:"production",PUBLIC_URL:""}).ELM_APP_VERSION,u=[],c=0;c<32;c++){var s=e({height:500,width:500,seed:"dev"==f?new Date:f}).png();u.push(s)}i.Elm.Main.init({node:document.getElementById("root"),flags:{trianglifyDataUris:u,version:Object({NODE_ENV:"production",PUBLIC_URL:""}).ELM_APP_VERSION}}),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var n="".concat("","/service-worker.js");a?function(n){fetch(n).then(function(r){404===r.status||-1===r.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(n){n.unregister().then(function(){window.location.reload()})}):o(n)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(n):o(n)})}}()},5:function(){!function(n){"use strict";function r(n,r,t){return t.a=n,t.f=r,t}function t(n){return r(2,n,function(r){return function(t){return n(r,t)}})}function e(n){return r(3,n,function(r){return function(t){return function(e){return n(r,t,e)}}})}function i(n){return r(4,n,function(r){return function(t){return function(e){return function(i){return n(r,t,e,i)}}}})}function a(n){return r(5,n,function(r){return function(t){return function(e){return function(i){return function(a){return n(r,t,e,i,a)}}}}})}function o(n,r,t){return 2===n.a?n.f(r,t):n(r)(t)}function f(n,r,t,e){return 3===n.a?n.f(r,t,e):n(r)(t)(e)}function u(n,r,t,e,i){return 4===n.a?n.f(r,t,e,i):n(r)(t)(e)(i)}function c(n,r,t,e,i,a){return 5===n.a?n.f(r,t,e,i,a):n(r)(t)(e)(i)(a)}function s(n,r,t,e,i,a,o){return 6===n.a?n.f(r,t,e,i,a,o):n(r)(t)(e)(i)(a)(o)}var l={$:0};function v(n,r){return{$:1,a:n,b:r}}var m=t(v);function g(n){for(var r=l,t=n.length;t--;)r=v(n[t],r);return r}function h(n,r,t,e){if(t>100)return e.push(d(n,r)),!0;if(n===r)return!0;if("object"!==typeof n||null===n||null===r)return"function"===typeof n&&k(5),!1;for(var i in n.$<0&&(n=Hn(n),r=Hn(r)),n)if(!h(n[i],r[i],t+1,e))return!1;return!0}function d(n,r){return{a:n,b:r}}function b(n,r){var t={};for(var e in n)t[e]=n[e];for(var e in r)t[e]=r[e];return t}function p(n,r){if("string"===typeof n)return n+r;if(!n.b)return r;var t=v(n.a,r);n=n.b;for(var e=t;n.b;n=n.b)e=e.b=v(n.a,r);return t}var w=e(function(n,r,t){for(var e=Array(n),i=0;i<n;i++)e[i]=t(r+i);return e}),y=t(function(n,r){for(var t=Array(n),e=0;e<n&&r.b;e++)t[e]=r.a,r=r.b;return t.length=e,d(t,r)});function k(n){throw Error("https://github.com/elm/core/blob/1.0.0/hints/"+n+".md")}var $=Math.ceil,z=Math.floor,x=Math.log,E=e(function(n,r,t){return t.slice(n,r)}),L=t(function(n,r){return r.indexOf(n)>-1}),A=t(function(n,r){return 0===r.indexOf(n)}),j=t(function(n,r){var t=n.length;if(t<1)return l;for(var e=0,i=[];(e=r.indexOf(n,e))>-1;)i.push(e),e+=t;return g(i)});function I(n){return n+""}function _(n){return{$:2,b:n}}_(function(n){return"number"!==typeof n?U("an INT",n):-2147483647<n&&n<2147483647&&(0|n)===n?gr(n):!isFinite(n)||n%1?U("an INT",n):gr(n)}),_(function(n){return"boolean"===typeof n?gr(n):U("a BOOL",n)}),_(function(n){return"number"===typeof n?gr(n):U("a FLOAT",n)}),_(function(n){return gr(S(n))});var M=_(function(n){return"string"===typeof n?gr(n):n instanceof String?gr(n+""):U("a STRING",n)}),N=t(function(n,r){return{$:6,d:n,b:r}}),C=t(function(n,r){return{$:10,b:r,h:n}}),T=t(function(n,r){return O(n,q(r))});function O(n,r){switch(n.$){case 2:return n.b(r);case 5:return null===r?gr(n.c):U("null",r);case 3:return V(r)?B(n.b,r,g):U("a LIST",r);case 4:return V(r)?B(n.b,r,D):U("an ARRAY",r);case 6:var t=n.d;if("object"!==typeof r||null===r||!(t in r))return U("an OBJECT with a field named `"+t+"`",r);var e=O(n.b,r[t]);return qn(e)?e:mr(o(dr,t,e.a));case 7:var i=n.e;return V(r)?i<r.length?(e=O(n.b,r[i]),qn(e)?e:mr(o(br,i,e.a))):U("a LONGER array. Need index "+i+" but only see "+r.length+" entries",r):U("an ARRAY",r);case 8:if("object"!==typeof r||null===r||V(r))return U("an OBJECT",r);var a=l;for(var f in r)if(r.hasOwnProperty(f)){if(e=O(n.b,r[f]),!qn(e))return mr(o(dr,f,e.a));a=v(d(f,e.a),a)}return gr(rr(a));case 9:for(var u=n.f,c=n.g,s=0;s<c.length;s++){if(e=O(c[s],r),!qn(e))return e;u=u(e.a)}return gr(u);case 10:return e=O(n.b,r),qn(e)?O(n.h(e.a),r):e;case 11:for(var m=l,h=n.g;h.b;h=h.b){if(e=O(h.a,r),qn(e))return e;m=v(e.a,m)}return mr(pr(rr(m)));case 1:return mr(o(hr,n.a,S(r)));case 0:return gr(n.a)}}function B(n,r,t){for(var e=r.length,i=Array(e),a=0;a<e;a++){var f=O(n,r[a]);if(!qn(f))return mr(o(br,a,f.a));i[a]=f.a}return gr(t(i))}function V(n){return Array.isArray(n)||"function"===typeof FileList&&n instanceof FileList}function D(n){return o(sr,n.length,function(r){return n[r]})}function U(n,r){return mr(o(hr,"Expecting "+n,S(r)))}function F(n,r){if(n===r)return!0;if(n.$!==r.$)return!1;switch(n.$){case 0:case 1:return n.a===r.a;case 2:return n.b===r.b;case 5:return n.c===r.c;case 3:case 4:case 8:return F(n.b,r.b);case 6:return n.d===r.d&&F(n.b,r.b);case 7:return n.e===r.e&&F(n.b,r.b);case 9:return n.f===r.f&&P(n.g,r.g);case 10:return n.h===r.h&&F(n.b,r.b);case 11:return P(n.g,r.g)}}function P(n,r){var t=n.length;if(t!==r.length)return!1;for(var e=0;e<t;e++)if(!F(n[e],r[e]))return!1;return!0}function S(n){return n}function q(n){return n}function R(n){return{$:0,a:n}}function J(n){return{$:2,b:n,c:null}}S(null);var H=t(function(n,r){return{$:3,b:n,d:r}}),X=0;function W(n){var r={$:0,e:X++,f:n,g:null,h:[]};return Y(r),r}var G=!1,K=[];function Y(n){if(K.push(n),!G){for(G=!0;n=K.shift();)Q(n);G=!1}}function Q(n){for(;n.f;){var r=n.f.$;if(0===r||1===r){for(;n.g&&n.g.$!==r;)n.g=n.g.i;if(!n.g)return;n.f=n.g.b(n.f.a),n.g=n.g.i}else{if(2===r)return void(n.f.c=n.f.b(function(r){n.f=r,Y(n)}));if(5===r){if(0===n.h.length)return;n.f=n.f.b(n.h.shift())}else n.g={$:3===r?0:1,b:n.f.b,i:n.g},n.f=n.f.d}}}var Z={};function nn(n,r){var t={g:r,h:void 0},e=n.c,i=n.d,a=n.e,c=n.f;return t.h=W(o(H,function n(r){return o(H,n,{$:5,b:function(n){var o=n.a;return 0===n.$?f(i,t,o,r):a&&c?u(e,t,o.i,o.j,r):f(e,t,a?o.i:o.j,r)}})},n.b))}var rn,tn=t(function(n,r){return J(function(t){n.g(r),t(R(0))})});function en(n){return{$:2,m:n}}function an(n,r,t){var e,i={};for(var a in on(!0,r,i,null),on(!1,t,i,null),n)(e=n[a]).h.push({$:"fx",a:i[a]||{i:l,j:l}}),Y(e)}function on(n,r,t,e){switch(r.$){case 1:var i=r.k,a=function(n,t,e){return o(n?Z[t].e:Z[t].f,function(n){for(var r=e;r;r=r.q)n=r.p(n);return n},r.l)}(n,i,e);return void(t[i]=function(n,r,t){return t=t||{i:l,j:l},n?t.i=v(r,t.i):t.j=v(r,t.j),t}(n,a,t[i]));case 2:for(var f=r.m;f.b;f=f.b)on(n,f.a,t,e);return;case 3:return void on(n,r.o,t,{p:r.n,q:e})}}var fn="undefined"!==typeof document?document:{};function un(n,r){n.appendChild(r)}function cn(n){return{$:0,a:n}}var sn=t(function(n,r){return t(function(t,e){for(var i=[],a=0;e.b;e=e.b){var o=e.a;a+=o.b||0,i.push(o)}return a+=i.length,{$:1,c:r,d:dn(t),e:i,f:n,b:a}})}),ln=sn(void 0);t(function(n,r){return t(function(t,e){for(var i=[],a=0;e.b;e=e.b){var o=e.a;a+=o.b.b||0,i.push(o)}return a+=i.length,{$:2,c:r,d:dn(t),e:i,f:n,b:a}})})(void 0);var vn,mn=t(function(n,r){return{$:"a2",n:n,o:r}}),gn=t(function(n,r){return{$:"a3",n:n,o:r}});function hn(n){return/^\s*(javascript:|data:text\/html)/i.test(n)?"":n}function dn(n){for(var r={};n.b;n=n.b){var t=n.a,e=t.$,i=t.n,a=t.o;if("a2"!==e){var o=r[e]||(r[e]={});"a3"===e&&"class"===i?bn(o,i,a):o[i]=a}else"className"===i?bn(r,i,q(a)):r[i]=q(a)}return r}function bn(n,r,t){var e=n[r];n[r]=e?e+" "+t:t}function pn(n,r){var t=n.$;if(5===t)return pn(n.k||(n.k=n.m()),r);if(0===t)return fn.createTextNode(n.a);if(4===t){for(var e=n.k,i=n.j;4===e.$;)"object"!==typeof i?i=[i,e.j]:i.push(e.j),e=e.k;var a={j:i,p:r};return(o=pn(e,a)).elm_event_node_ref=a,o}if(3===t)return wn(o=n.h(n.g),r,n.d),o;var o=n.f?fn.createElementNS(n.f,n.c):fn.createElement(n.c);rn&&"a"==n.c&&o.addEventListener("click",rn(o)),wn(o,r,n.d);for(var f=n.e,u=0;u<f.length;u++)un(o,pn(1===t?f[u]:f[u].b,r));return o}function wn(n,r,t){for(var e in t){var i=t[e];"a1"===e?yn(n,i):"a0"===e?zn(n,r,i):"a3"===e?kn(n,i):"a4"===e?$n(n,i):("value"!==e&&"checked"!==e||n[e]!==i)&&(n[e]=i)}}function yn(n,r){var t=n.style;for(var e in r)t[e]=r[e]}function kn(n,r){for(var t in r){var e=r[t];"undefined"!==typeof e?n.setAttribute(t,e):n.removeAttribute(t)}}function $n(n,r){for(var t in r){var e=r[t],i=e.f,a=e.o;"undefined"!==typeof a?n.setAttributeNS(i,t,a):n.removeAttributeNS(i,t)}}function zn(n,r,t){var e=n.elmFs||(n.elmFs={});for(var i in t){var a=t[i],o=e[i];if(a){if(o){if(o.q.$===a.$){o.q=a;continue}n.removeEventListener(i,o)}o=xn(r,a),n.addEventListener(i,o,vn&&{passive:Sr(a)<2}),e[i]=o}else n.removeEventListener(i,o),e[i]=void 0}}try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){vn=!0}}))}catch(n){}function xn(n,r){function t(r){var e=t.q,i=O(e.a,r);if(qn(i)){for(var a,o=Sr(e),f=i.a,u=o?o<3?f.a:f.r:f,c=1==o?f.b:3==o&&f.ac,s=(c&&r.stopPropagation(),(2==o?f.b:3==o&&f.aa)&&r.preventDefault(),n);a=s.j;){if("function"==typeof a)u=a(u);else for(var l=a.length;l--;)u=a[l](u);s=s.p}s(u,c)}}return t.q=r,t}function En(n,r){return n.$==r.$&&F(n.a,r.a)}function Ln(n,r,t,e){var i={$:r,r:t,s:e,t:void 0,u:void 0};return n.push(i),i}function An(n,r,t,e){if(n!==r){var i=n.$,a=r.$;if(i!==a){if(1!==i||2!==a)return void Ln(t,0,e,r);r=function(n){for(var r=n.e,t=r.length,e=Array(t),i=0;i<t;i++)e[i]=r[i].b;return{$:1,c:n.c,d:n.d,e:e,f:n.f,b:n.b}}(r),a=1}switch(a){case 5:for(var o=n.l,f=r.l,u=o.length,c=u===f.length;c&&u--;)c=o[u]===f[u];if(c)return void(r.k=n.k);r.k=r.m();var s=[];return An(n.k,r.k,s,0),void(s.length>0&&Ln(t,1,e,s));case 4:for(var l=n.j,v=r.j,m=!1,g=n.k;4===g.$;)m=!0,"object"!==typeof l?l=[l,g.j]:l.push(g.j),g=g.k;for(var h=r.k;4===h.$;)m=!0,"object"!==typeof v?v=[v,h.j]:v.push(h.j),h=h.k;return m&&l.length!==v.length?void Ln(t,0,e,r):((m?function(n,r){for(var t=0;t<n.length;t++)if(n[t]!==r[t])return!1;return!0}(l,v):l===v)||Ln(t,2,e,v),void An(g,h,t,e+1));case 0:return void(n.a!==r.a&&Ln(t,3,e,r.a));case 1:return void jn(n,r,t,e,_n);case 2:return void jn(n,r,t,e,Mn);case 3:if(n.h!==r.h)return void Ln(t,0,e,r);var d=In(n.d,r.d);d&&Ln(t,4,e,d);var b=r.i(n.g,r.g);return void(b&&Ln(t,5,e,b))}}}function jn(n,r,t,e,i){if(n.c===r.c&&n.f===r.f){var a=In(n.d,r.d);a&&Ln(t,4,e,a),i(n,r,t,e)}else Ln(t,0,e,r)}function In(n,r,t){var e;for(var i in n)if("a1"!==i&&"a0"!==i&&"a3"!==i&&"a4"!==i)if(i in r){var a=n[i],o=r[i];a===o&&"value"!==i&&"checked"!==i||"a0"===t&&En(a,o)||((e=e||{})[i]=o)}else(e=e||{})[i]=t?"a1"===t?"":"a0"===t||"a3"===t?void 0:{f:n[i].f,o:void 0}:"string"===typeof n[i]?"":null;else{var f=In(n[i],r[i]||{},i);f&&((e=e||{})[i]=f)}for(var u in r)u in n||((e=e||{})[u]=r[u]);return e}function _n(n,r,t,e){var i=n.e,a=r.e,o=i.length,f=a.length;o>f?Ln(t,6,e,{v:f,i:o-f}):o<f&&Ln(t,7,e,{v:o,e:a});for(var u=o<f?o:f,c=0;c<u;c++){var s=i[c];An(s,a[c],t,++e),e+=s.b||0}}function Mn(n,r,t,e){for(var i=[],a={},o=[],f=n.e,u=r.e,c=f.length,s=u.length,l=0,v=0,m=e;l<c&&v<s;){var g=(L=f[l]).a,h=(A=u[v]).a,d=L.b,b=A.b,p=void 0,w=void 0;if(g!==h){var y=f[l+1],k=u[v+1];if(y){var $=y.a,z=y.b;w=h===$}if(k){var x=k.a,E=k.b;p=g===x}if(p&&w)An(d,E,i,++m),Cn(a,i,g,b,v,o),m+=d.b||0,Tn(a,i,g,z,++m),m+=z.b||0,l+=2,v+=2;else if(p)m++,Cn(a,i,h,b,v,o),An(d,E,i,m),m+=d.b||0,l+=1,v+=2;else if(w)Tn(a,i,g,d,++m),m+=d.b||0,An(z,b,i,++m),m+=z.b||0,l+=2,v+=1;else{if(!y||$!==x)break;Tn(a,i,g,d,++m),Cn(a,i,h,b,v,o),m+=d.b||0,An(z,E,i,++m),m+=z.b||0,l+=2,v+=2}}else An(d,b,i,++m),m+=d.b||0,l++,v++}for(;l<c;){var L;Tn(a,i,(L=f[l]).a,d=L.b,++m),m+=d.b||0,l++}for(;v<s;){var A,j=j||[];Cn(a,i,(A=u[v]).a,A.b,void 0,j),v++}(i.length>0||o.length>0||j)&&Ln(t,8,e,{w:i,x:o,y:j})}var Nn="_elmW6BL";function Cn(n,r,t,e,i,a){var o=n[t];if(!o)return a.push({r:i,A:o={c:0,z:e,r:i,s:void 0}}),void(n[t]=o);if(1===o.c){a.push({r:i,A:o}),o.c=2;var f=[];return An(o.z,e,f,o.r),o.r=i,void(o.s.s={w:f,A:o})}Cn(n,r,t+Nn,e,i,a)}function Tn(n,r,t,e,i){var a=n[t];if(a){if(0===a.c){a.c=2;var o=[];return An(e,a.z,o,i),void Ln(r,9,i,{w:o,A:a})}Tn(n,r,t+Nn,e,i)}else{var f=Ln(r,9,i,void 0);n[t]={c:1,z:e,r:i,s:f}}}function On(n,r,t,e){return 0===t.length?n:(function n(r,t,e,i){!function r(t,e,i,a,o,f,u){for(var c=i[a],s=c.r;s===o;){var l=c.$;if(1===l)n(t,e.k,c.s,u);else if(8===l)c.t=t,c.u=u,(v=c.s.w).length>0&&r(t,e,v,0,o,f,u);else if(9===l){c.t=t,c.u=u;var v,m=c.s;m&&(m.A.s=t,(v=m.w).length>0&&r(t,e,v,0,o,f,u))}else c.t=t,c.u=u;if(!(c=i[++a])||(s=c.r)>f)return a}var g=e.$;if(4===g){for(var h=e.k;4===h.$;)h=h.k;return r(t,h,i,a,o+1,f,t.elm_event_node_ref)}for(var d=e.e,b=t.childNodes,p=0;p<d.length;p++){o++;var w=1===g?d[p]:d[p].b,y=o+(w.b||0);if(o<=s&&s<=y&&(!(c=i[a=r(b[p],w,i,a,o,y,u)])||(s=c.r)>f))return a;o=y}return a}(r,t,e,0,0,t.b,i)}(n,r,t,e),Bn(n,t))}function Bn(n,r){for(var t=0;t<r.length;t++){var e=r[t],i=e.t,a=Vn(i,e);i===n&&(n=a)}return n}function Vn(n,r){switch(r.$){case 0:return function(n){var t=n.parentNode,e=pn(r.s,r.u);return e.elm_event_node_ref||(e.elm_event_node_ref=n.elm_event_node_ref),t&&e!==n&&t.replaceChild(e,n),e}(n);case 4:return wn(n,r.u,r.s),n;case 3:return n.replaceData(0,n.length,r.s),n;case 1:return Bn(n,r.s);case 2:return n.elm_event_node_ref?n.elm_event_node_ref.j=r.s:n.elm_event_node_ref={j:r.s,p:r.u},n;case 6:for(var t=r.s,e=0;e<t.i;e++)n.removeChild(n.childNodes[t.v]);return n;case 7:for(var i=(t=r.s).e,a=n.childNodes[e=t.v];e<i.length;e++)n.insertBefore(pn(i[e],r.u),a);return n;case 9:if(!(t=r.s))return n.parentNode.removeChild(n),n;var o=t.A;return"undefined"!==typeof o.r&&n.parentNode.removeChild(n),o.s=Bn(n,t.w),n;case 8:return function(n,r){var t=r.s,e=function(n,r){if(n){for(var t=fn.createDocumentFragment(),e=0;e<n.length;e++){var i=n[e].A;un(t,2===i.c?i.s:pn(i.z,r.u))}return t}}(t.y,r);n=Bn(n,t.w);for(var i=t.x,a=0;a<i.length;a++){var o=i[a],f=o.A,u=2===f.c?f.s:pn(f.z,r.u);n.insertBefore(u,n.childNodes[o.r])}return e&&un(n,e),n}(n,r);case 5:return r.s(n);default:k(10)}}var Dn=i(function(n,r,t,e){return function(n,r,t,e,i,a){var f=o(T,n,S(r?r.flags:void 0));qn(f)||k(2);var u={},c=(f=t(f.a)).a,s=a(v,c),l=function(n,r){var t;for(var e in Z){var i=Z[e];i.a&&((t=t||{})[e]=i.a(e,r)),n[e]=nn(i,r)}return t}(u,v);function v(n,r){s(c=(f=o(e,n,c)).a,r),an(u,f.b,i(c))}return an(u,f.b,i(c)),l?{ports:l}:{}}(r,e,n.a9,n.bx,n.bs,function(r,t){var e=n.J&&n.J(r),i=n.bz,a=fn.title,u=fn.body,c=function n(r){if(3===r.nodeType)return cn(r.textContent);if(1!==r.nodeType)return cn("");for(var t=l,e=r.attributes,i=e.length;i--;){var a=e[i];t=v(o(gn,a.name,a.value),t)}var u=r.tagName.toLowerCase(),c=l,s=r.childNodes;for(i=s.length;i--;)c=v(n(s[i]),c);return f(ln,u,t,c)}(u);return function(n,r){r(n);var t=0;function e(){t=1===t?0:(Un(e),r(n),1)}return function(i,a){n=i,a?(r(n),2===t&&(t=1)):(0===t&&Un(e),t=2)}}(t,function(n){rn=e;var t=i(n),o=ln("body")(l)(t.aV),f=function(n,r){var t=[];return An(n,r,t,0),t}(c,o);u=On(u,c,f,r),c=o,rn=0,a!==t.bv&&(fn.title=a=t.bv)})})}),Un=("undefined"!==typeof cancelAnimationFrame&&cancelAnimationFrame,"undefined"!==typeof requestAnimationFrame?requestAnimationFrame:function(n){return setTimeout(n,1e3/60)});function Fn(){return rt(fn.location.href).a||k(1)}var Pn=t(function(n,r){return o(Pr,$r,J(function(){history.pushState({},"",r),n()}))}),Sn=("undefined"!==typeof document&&document,"undefined"!==typeof window?window:{addEventListener:function(){},removeEventListener:function(){}}),qn=function(n){return!n.$},Rn=e(function(n,r,t){for(;;){if(-2===t.$)return r;var e=t.d,i=n,a=f(n,t.b,t.c,f(Rn,n,r,t.e));n=i,r=a,t=e}}),Jn=m,Hn=function(n){return f(Rn,e(function(n,r,t){return o(Jn,d(n,r),t)}),l,n)},Xn=i(function(n,r,t,e){return{$:0,a:n,b:r,c:t,d:e}}),Wn=$,Gn=t(function(n,r){return x(r)/x(n)}),Kn=Wn(o(Gn,2,32)),Yn=[],Qn=u(Xn,0,Kn,Yn,Yn),Zn=y,nr=e(function(n,r,t){for(;;){if(!t.b)return r;var e=t.b,i=n,a=o(n,t.a,r);n=i,r=a,t=e}}),rr=function(n){return f(nr,Jn,l,n)},tr=t(function(n,r){for(;;){var t=o(Zn,32,n),e=t.b,i=o(Jn,{$:0,a:t.a},r);if(!e.b)return rr(i);n=e,r=i}}),er=t(function(n,r){for(;;){var t=Wn(r/32);if(1===t)return o(Zn,32,n).a;n=o(tr,n,l),r=t}}),ir=z,ar=t(function(n,r){return function n(r,t,e){if("object"!==typeof r)return r===t?0:r<t?-1:1;if("undefined"===typeof r.$)return(e=n(r.a,t.a))?e:(e=n(r.b,t.b))?e:n(r.c,t.c);for(;r.b&&t.b&&!(e=n(r.a,t.a));r=r.b,t=t.b);return e||(r.b?1:t.b?-1:0)}(n,r)>0?n:r}),or=function(n){return n.length},fr=t(function(n,r){if(r.b){var t=32*r.b,e=ir(o(Gn,32,t-1)),i=n?rr(r.e):r.e,a=o(er,i,r.b);return u(Xn,or(r.d)+t,o(ar,5,e*Kn),a,r.d)}return u(Xn,or(r.d),Kn,Yn,r.d)}),ur=w,cr=a(function(n,r,t,e,i){for(;;){if(r<0)return o(fr,!1,{e:e,b:t/32|0,d:i});var a={$:1,a:f(ur,32,r,n)};n=n,r-=32,t=t,e=o(Jn,a,e),i=i}}),sr=t(function(n,r){if(n>0){var t=n%32;return c(cr,r,n-t-32,n,l,f(ur,t,n-t,r))}return Qn}),lr=function(n){return{$:0,a:n}},vr={$:1},mr=function(n){return{$:1,a:n}},gr=function(n){return{$:0,a:n}},hr=t(function(n,r){return{$:3,a:n,b:r}}),dr=t(function(n,r){return{$:0,a:n,b:r}}),br=t(function(n,r){return{$:1,a:n,b:r}}),pr=function(n){return{$:2,a:n}},wr=I,yr=en(l),kr=e(function(n,r,t){return d({Y:t,O:n.O},yr)}),$r=function(n){for(;;)n=n},zr=R,xr=zr(0),Er=i(function(n,r,t,e){if(e.b){var i=e.a,a=e.b;if(a.b){var c=a.a,s=a.b;if(s.b){var l=s.a,v=s.b;if(v.b){var m=v.b;return o(n,i,o(n,c,o(n,l,o(n,v.a,t>500?f(nr,n,r,rr(m)):u(Er,n,r,t+1,m)))))}return o(n,i,o(n,c,o(n,l,r)))}return o(n,i,o(n,c,r))}return o(n,i,r)}return r}),Lr=e(function(n,r,t){return u(Er,n,r,0,t)}),Ar=t(function(n,r){return f(Lr,t(function(r,t){return o(Jn,n(r),t)}),l,r)}),jr=H,Ir=t(function(n,r){return o(jr,function(r){return zr(n(r))},r)}),_r=e(function(n,r,t){return o(jr,function(r){return o(jr,function(t){return zr(o(n,r,t))},t)},r)}),Mr=tn,Nr=t(function(n,r){var t=r;return function(n){return J(function(r){r(R(W(n)))})}(o(jr,Mr(n),t))});Z.Task={b:xr,c:e(function(n,r){return o(Ir,function(){return 0},(t=o(Ar,Nr(n),r),f(Lr,_r(Jn),zr(l),t)));var t}),d:e(function(){return zr(0)}),e:t(function(n,r){return o(Ir,n,r)}),f:void 0};var Cr,Tr,Or,Br,Vr,Dr,Ur,Fr=(Ur="Task",function(n){return{$:1,k:Ur,l:n}}),Pr=t(function(n,r){return Fr(o(Ir,n,r))}),Sr=function(n){switch(n.$){case 0:return 0;case 1:return 1;case 2:return 2;default:return 3}},qr=E,Rr=t(function(n,r){return n<1?r:f(qr,n,r.length,r)}),Jr=A,Hr=j,Xr=function(n){return""===n},Wr=t(function(n,r){return n<1?"":f(qr,0,n,r)}),Gr=L,Kr=r(6,Dr=function(n,r,t,e,i,a){return{an:a,aq:r,az:e,aB:t,aE:n,aF:i}},function(n){return function(r){return function(t){return function(e){return function(i){return function(a){return Dr(n,r,t,e,i,a)}}}}}}),Yr=a(function(n,r,t,e,i){if(Xr(i)||o(Gr,"@",i))return vr;var a=o(Hr,":",i);if(a.b){if(a.b.b)return vr;var f=a.a,u=function(n){for(var r=0,t=n.charCodeAt(0),e=43==t||45==t?1:0,i=e;i<n.length;++i){var a=n.charCodeAt(i);if(a<48||57<a)return vr;r=10*r+a-48}return i==e?vr:lr(45==t?-r:r)}(o(Rr,f+1,i));if(1===u.$)return vr;var c=u;return lr(s(Kr,n,o(Wr,f,i),c,r,t,e))}return lr(s(Kr,n,i,vr,r,t,e))}),Qr=i(function(n,r,t,e){if(Xr(e))return vr;var i=o(Hr,"/",e);if(i.b){var a=i.a;return c(Yr,n,o(Rr,a,e),r,t,o(Wr,a,e))}return c(Yr,n,"/",r,t,e)}),Zr=e(function(n,r,t){if(Xr(t))return vr;var e=o(Hr,"?",t);if(e.b){var i=e.a;return u(Qr,n,lr(o(Rr,i+1,t)),r,o(Wr,i,t))}return u(Qr,n,vr,r,t)}),nt=t(function(n,r){if(Xr(r))return vr;var t=o(Hr,"#",r);if(t.b){var e=t.a;return f(Zr,n,lr(o(Rr,e+1,r)),o(Wr,e,r))}return f(Zr,n,vr,r)}),rt=function(n){return o(Jr,"http://",n)?o(nt,0,o(Rr,7,n)):o(Jr,"https://",n)?o(nt,1,o(Rr,8,n)):vr},tt=Pn,et=t(function(n,r){return 1===n.$?r:r+":"+wr(n.a)}),it=e(function(n,r,t){return 1===r.$?t:p(t,p(n,r.a))}),at=t(function(n,r){if(n.$)return d(r,yr);var t=n.a;return d(r,t.$?function(n){return o(Pr,$r,J(function(){try{Sn.location=n}catch(n){fn.location.reload(!1)}}))}(t.a):o(tt,r.Y,function(n){return f(it,"#",n.an,f(it,"?",n.aF,p(o(et,n.aB,p(n.aE?"https://":"http://",n.aq)),n.az)))}(t.a)))}),ot=ln("a"),ft=ln("article"),ut=ln("h1"),ct=ln("h3"),st=ln("header"),lt=ln("hr"),vt=ln("i"),mt=ln("img"),gt=ln("main"),ht=ln("nav"),dt=ln("p"),bt=ln("section"),pt=ln("span"),wt=ln("strong"),yt=cn,kt=S,$t=t(function(n,r){return o(mn,n,kt(r))}),zt=$t("className"),xt=function(n){return o($t,"href",/^javascript:/i.test((r=n).replace(/\s/g,""))?"":r);var r},Et=$t("target"),Lt=$t("title"),At=gn("class"),jt=At("fa-2x"),It=At("fa-fw"),_t=At("fa-pull-left"),Mt=a(function(n,r,t,e,i){return{z:e,bb:r,az:i,bo:n,E:t}}),Nt=c(Mt,"fab","github",496,512,"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"),Ct=c(Mt,"fab","gitlab",512,512,"M105.2 24.9c-3.1-8.9-15.7-8.9-18.9 0L29.8 199.7h132c-.1 0-56.6-174.8-56.6-174.8zM.9 287.7c-2.6 8 .3 16.9 7.1 22l247.9 184-226.2-294zm160.8-88l94.3 294 94.3-294zm349.4 88l-28.8-88-226.3 294 247.9-184c6.9-5.1 9.7-14 7.2-22zM425.7 24.9c-3.1-8.9-15.7-8.9-18.9 0l-56.6 174.8h132z"),Tt=c(Mt,"fab","linkedin",448,512,"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"),Ot=t(function(n,r){return r.$?vr:lr(n(r.a))}),Bt=t(function(n,r){return r.$?n:r.a}),Vt=t(function(n,r){return o(gn,function(n){return/^(on|formAction$)/i.test(n)?"data-"+n:n}(n),hn(r))}),Dt=sn("http://www.w3.org/2000/svg"),Ut=Dt("svg"),Ft=gn("viewBox"),Pt=Dt("clipPath"),St=Dt("defs"),qt=Dt("g"),Rt=Dt("mask"),Jt=Dt("path"),Ht=Dt("rect"),Xt=gn("clip-path"),Wt=gn("d"),Gt=gn("fill"),Kt=gn("id"),Yt=gn("mask"),Qt=gn("maskContentUnits"),Zt=gn("maskUnits"),ne=gn("height"),re=gn("width"),te=gn("x"),ee=gn("y"),ie=g([te("0"),ee("0"),re("100%"),ne("100%")]),ae=t(function(n,r){return o(Jt,p(g([Gt("currentColor"),Wt(r.az)]),n),l)}),oe=e(function(n,r,t){var e=o(Ht,o(Jn,Gt("white"),ie),l),i=o(qt,g([n.ar]),g([o(Jt,g([n.az,Gt("black"),Wt(t.az)]),l)])),a=o(qt,g([n.ay]),g([i])),f="mask-"+t.bb,u=o(Rt,p(g([Kt(f),Zt("userSpaceOnUse"),Qt("userSpaceOnUse")]),ie),g([e,a])),c="clip-"+r.bb;return g([o(St,l,g([o(Pt,g([Kt(c)]),g([o(ae,l,r)])),u])),o(Ht,p(g([Gt("currentColor"),Xt("url(#"+c+")"),Yt("url(#"+f+")")]),ie),l)])}),fe=t(function(n,r){if(n.$)return o(ae,l,r);var t=n.a;return o(qt,g([t.ay]),g([o(qt,g([t.ar]),g([o(ae,g([t.az]),r)]))]))}),ue=t(function(n,r){switch(n.$){case 0:return b(r,{aL:r.aL+((t=n.a).$?-t.a:t.a)});case 1:var t=n.a,e=function(){switch(t.$){case 0:return d(0,-t.a);case 1:return d(0,t.a);case 2:return d(-t.a,0);default:return d(t.a,0)}}();return b(r,{T:r.T+e.a,U:r.U+e.b});case 2:return b(r,{br:r.br+n.a});default:return b(r,n.a?{a6:!0}:{a5:!0})}}),ce={a5:!1,a6:!1,br:0,aL:16,T:0,U:0},se=function(n){var r=function(n){return f(nr,ue,ce,n)}(n);return function(n,r){for(var t,e=[],i=h(n,r,0,e);i&&(t=e.pop());i=h(t.a,t.b,0,e));return i}(r,ce)?vr:lr(r)},le=I,ve=gn("transform"),me=e(function(n,r,t){var e="translate("+le(r/2*-1)+" -256)",i="translate("+le(n/2)+" 256)",a="translate("+le(32*t.T)+","+le(32*t.U)+") ",o="rotate("+le(t.br)+" 0 0)",f=t.aL/16*(t.a6?-1:1),u="scale("+le(t.aL/16*(t.a5?-1:1))+", "+le(f)+") ";return{ar:ve(p(a,p(u,o))),ay:ve(i),az:ve(e)}}),ge=i(function(n,r,t,e){var i=function(){if(t.$)return d(e.E,e.z);var n=t.a;return d(n.E,n.z)}(),a=i.a,u=i.b,c="svg-inline--fa fa-"+e.bb+" fa-w-"+wr(Wn(a/u*16)),s=o(Ot,o(me,a,e.E),se(r)),l=function(){if(t.$)return g([o(fe,s,e)]);var n=t.a;return f(oe,o(Bt,f(me,a,e.E,ce),s),n,e)}();return o(Ut,p(g([At(c),o(Vt,"role","img"),o(Vt,"aria-hidden","true"),o(Vt,"xmlns","http://www.w3.org/2000/svg"),Ft("0 0 "+wr(a)+" "+wr(u))]),n),l)}),he=e(function(n,r,t){return u(ge,n,r,vr,t)}),de=function(n){return o(he,n,l)},be=c(Mt,"fas","blog",512,512,"M172.2 226.8c-14.6-2.9-28.2 8.9-28.2 23.8V301c0 10.2 7.1 18.4 16.7 22 18.2 6.8 31.3 24.4 31.3 45 0 26.5-21.5 48-48 48s-48-21.5-48-48V120c0-13.3-10.7-24-24-24H24c-13.3 0-24 10.7-24 24v248c0 89.5 82.1 160.2 175 140.7 54.4-11.4 98.3-55.4 109.7-109.7 17.4-82.9-37-157.2-112.5-172.2zM209 0c-9.2-.5-17 6.8-17 16v31.6c0 8.5 6.6 15.5 15 15.9 129.4 7 233.4 112 240.9 241.5.5 8.4 7.5 15 15.9 15h32.1c9.2 0 16.5-7.8 16-17C503.4 139.8 372.2 8.6 209 0zm.3 96c-9.3-.7-17.3 6.7-17.3 16.1v32.1c0 8.4 6.5 15.3 14.8 15.9 76.8 6.3 138 68.2 144.9 145.2.8 8.3 7.6 14.7 15.9 14.7h32.2c9.3 0 16.8-8 16.1-17.3-8.4-110.1-96.5-198.2-206.6-206.7z"),pe=c(Mt,"fas","home",576,512,"M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"),we=c(Mt,"fas","tachometer-alt",576,512,"M288 32C128.94 32 0 160.94 0 320c0 52.8 14.25 102.26 39.06 144.8 5.61 9.62 16.3 15.2 27.44 15.2h443c11.14 0 21.83-5.58 27.44-15.2C561.75 422.26 576 372.8 576 320c0-159.06-128.94-288-288-288zm0 64c14.71 0 26.58 10.13 30.32 23.65-1.11 2.26-2.64 4.23-3.45 6.67l-9.22 27.67c-5.13 3.49-10.97 6.01-17.64 6.01-17.67 0-32-14.33-32-32S270.33 96 288 96zM96 384c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm48-160c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm246.77-72.41l-61.33 184C343.13 347.33 352 364.54 352 384c0 11.72-3.38 22.55-8.88 32H232.88c-5.5-9.45-8.88-20.28-8.88-32 0-33.94 26.5-61.43 59.9-63.59l61.34-184.01c4.17-12.56 17.73-19.45 30.36-15.17 12.57 4.19 19.35 17.79 15.17 30.36zm14.66 57.2l15.52-46.55c3.47-1.29 7.13-2.23 11.05-2.23 17.67 0 32 14.33 32 32s-14.33 32-32 32c-11.38-.01-20.89-6.28-26.57-15.22zM480 384c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32z"),ye=f(function(n){return ln(function(n){return"script"==n?"p":n}(n))},"style",l,g([yt('svg:not(:root).svg-inline--fa {  overflow: visible;}.svg-inline--fa {  display: inline-block;  font-size: inherit;  height: 1em;  overflow: visible;  vertical-align: -0.125em;}.svg-inline--fa.fa-lg {  vertical-align: -0.225em;}.svg-inline--fa.fa-w-1 {  width: 0.0625em;}.svg-inline--fa.fa-w-2 {  width: 0.125em;}.svg-inline--fa.fa-w-3 {  width: 0.1875em;}.svg-inline--fa.fa-w-4 {  width: 0.25em;}.svg-inline--fa.fa-w-5 {  width: 0.3125em;}.svg-inline--fa.fa-w-6 {  width: 0.375em;}.svg-inline--fa.fa-w-7 {  width: 0.4375em;}.svg-inline--fa.fa-w-8 {  width: 0.5em;}.svg-inline--fa.fa-w-9 {  width: 0.5625em;}.svg-inline--fa.fa-w-10 {  width: 0.625em;}.svg-inline--fa.fa-w-11 {  width: 0.6875em;}.svg-inline--fa.fa-w-12 {  width: 0.75em;}.svg-inline--fa.fa-w-13 {  width: 0.8125em;}.svg-inline--fa.fa-w-14 {  width: 0.875em;}.svg-inline--fa.fa-w-15 {  width: 0.9375em;}.svg-inline--fa.fa-w-16 {  width: 1em;}.svg-inline--fa.fa-w-17 {  width: 1.0625em;}.svg-inline--fa.fa-w-18 {  width: 1.125em;}.svg-inline--fa.fa-w-19 {  width: 1.1875em;}.svg-inline--fa.fa-w-20 {  width: 1.25em;}.svg-inline--fa.fa-pull-left {  margin-right: 0.3em;  width: auto;}.svg-inline--fa.fa-pull-right {  margin-left: 0.3em;  width: auto;}.svg-inline--fa.fa-border {  height: 1.5em;}.svg-inline--fa.fa-li {  width: 2em;}.svg-inline--fa.fa-fw {  width: 1.25em;}.fa-layers svg.svg-inline--fa {  bottom: 0;  left: 0;  margin: auto;  position: absolute;  right: 0;  top: 0;}.fa-layers {  display: inline-block;  height: 1em;  position: relative;  text-align: center;  vertical-align: -0.125em;  width: 1em;}.fa-layers svg.svg-inline--fa {  -webkit-transform-origin: center center;          transform-origin: center center;}.fa-layers-counter, .fa-layers-text {  display: inline-block;  position: absolute;  text-align: center;}.fa-layers-text {  left: 50%;  top: 50%;  -webkit-transform: translate(-50%, -50%);          transform: translate(-50%, -50%);  -webkit-transform-origin: center center;          transform-origin: center center;}.fa-layers-counter {  background-color: #ff253a;  border-radius: 1em;  -webkit-box-sizing: border-box;          box-sizing: border-box;  color: #fff;  height: 1.5em;  line-height: 1;  max-width: 5em;  min-width: 1.5em;  overflow: hidden;  padding: 0.25em;  right: 0;  text-overflow: ellipsis;  top: 0;  -webkit-transform: scale(0.25);          transform: scale(0.25);  -webkit-transform-origin: top right;          transform-origin: top right;}.fa-layers-bottom-right {  bottom: 0;  right: 0;  top: auto;  -webkit-transform: scale(0.25);          transform: scale(0.25);  -webkit-transform-origin: bottom right;          transform-origin: bottom right;}.fa-layers-bottom-left {  bottom: 0;  left: 0;  right: auto;  top: auto;  -webkit-transform: scale(0.25);          transform: scale(0.25);  -webkit-transform-origin: bottom left;          transform-origin: bottom left;}.fa-layers-top-right {  right: 0;  top: 0;  -webkit-transform: scale(0.25);          transform: scale(0.25);  -webkit-transform-origin: top right;          transform-origin: top right;}.fa-layers-top-left {  left: 0;  right: auto;  top: 0;  -webkit-transform: scale(0.25);          transform: scale(0.25);  -webkit-transform-origin: top left;          transform-origin: top left;}.fa-lg {  font-size: 1.3333333333em;  line-height: 0.75em;  vertical-align: -0.0667em;}.fa-xs {  font-size: 0.75em;}.fa-sm {  font-size: 0.875em;}.fa-1x {  font-size: 1em;}.fa-2x {  font-size: 2em;}.fa-3x {  font-size: 3em;}.fa-4x {  font-size: 4em;}.fa-5x {  font-size: 5em;}.fa-6x {  font-size: 6em;}.fa-7x {  font-size: 7em;}.fa-8x {  font-size: 8em;}.fa-9x {  font-size: 9em;}.fa-10x {  font-size: 10em;}.fa-fw {  text-align: center;  width: 1.25em;}.fa-ul {  list-style-type: none;  margin-left: 2.5em;  padding-left: 0;}.fa-ul > li {  position: relative;}.fa-li {  left: -2em;  position: absolute;  text-align: center;  width: 2em;  line-height: inherit;}.fa-border {  border: solid 0.08em #eee;  border-radius: 0.1em;  padding: 0.2em 0.25em 0.15em;}.fa-pull-left {  float: left;}.fa-pull-right {  float: right;}.fa.fa-pull-left,.fas.fa-pull-left,.far.fa-pull-left,.fal.fa-pull-left,.fab.fa-pull-left {  margin-right: 0.3em;}.fa.fa-pull-right,.fas.fa-pull-right,.far.fa-pull-right,.fal.fa-pull-right,.fab.fa-pull-right {  margin-left: 0.3em;}.fa-spin {  -webkit-animation: fa-spin 2s infinite linear;          animation: fa-spin 2s infinite linear;}.fa-pulse {  -webkit-animation: fa-spin 1s infinite steps(8);          animation: fa-spin 1s infinite steps(8);}@-webkit-keyframes fa-spin {  0% {    -webkit-transform: rotate(0deg);            transform: rotate(0deg);  }  100% {    -webkit-transform: rotate(360deg);            transform: rotate(360deg);  }}@keyframes fa-spin {  0% {    -webkit-transform: rotate(0deg);            transform: rotate(0deg);  }  100% {    -webkit-transform: rotate(360deg);            transform: rotate(360deg);  }}.fa-rotate-90 {  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=1)";  -webkit-transform: rotate(90deg);          transform: rotate(90deg);}.fa-rotate-180 {  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2)";  -webkit-transform: rotate(180deg);          transform: rotate(180deg);}.fa-rotate-270 {  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=3)";  -webkit-transform: rotate(270deg);          transform: rotate(270deg);}.fa-flip-horizontal {  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)";  -webkit-transform: scale(-1, 1);          transform: scale(-1, 1);}.fa-flip-vertical {  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";  -webkit-transform: scale(1, -1);          transform: scale(1, -1);}.fa-flip-both, .fa-flip-horizontal.fa-flip-vertical {  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";  -webkit-transform: scale(-1, -1);          transform: scale(-1, -1);}:root .fa-rotate-90,:root .fa-rotate-180,:root .fa-rotate-270,:root .fa-flip-horizontal,:root .fa-flip-vertical,:root .fa-flip-both {  -webkit-filter: none;          filter: none;}.fa-stack {  display: inline-block;  height: 2em;  position: relative;  width: 2.5em;}.fa-stack-1x,.fa-stack-2x {  bottom: 0;  left: 0;  margin: auto;  position: absolute;  right: 0;  top: 0;}.svg-inline--fa.fa-stack-1x {  height: 1em;  width: 1.25em;}.svg-inline--fa.fa-stack-2x {  height: 2em;  width: 2.5em;}.fa-inverse {  color: #fff;}.sr-only {  border: 0;  clip: rect(0, 0, 0, 0);  height: 1px;  margin: -1px;  overflow: hidden;  padding: 0;  position: absolute;  width: 1px;}.sr-only-focusable:active, .sr-only-focusable:focus {  clip: auto;  height: auto;  margin: 0;  overflow: visible;  position: static;  width: auto;}')])),ke=C,$e=N,ze=M;Cr={Main:{init:(Tr={a9:kr,bk:function(n){return{$:1,a:n}},bl:function(n){return{$:0,a:n}},bs:t(function(n){return n})(en(l)),bx:at,bz:function(n){return{aV:g([o(gt,l,g([ye,o(st,l,g([o(ut,l,g([o(ot,g([xt("/")]),g([o(de,g([It,_t]),pe)])),o(pt,l,g([yt("kornicameister home page...")]))])),o(ct,l,g([yt(n.O)]))])),o(bt,g([zt("logo")]),g([o(mt,g([("/logo.png",o($t,"src",hn("/logo.png")))]),l)])),o(ht,l,g([o(ot,l,g([o(de,g([It,jt]),we)])),o(ot,l,g([o(de,g([It,jt]),be)])),o(ot,g([xt("https://www.linkedin.com/in/tomasz-tr\u0119bski"),Lt("My LinkedIn profile"),Et("_blank")]),g([o(de,g([It,jt]),Tt)])),o(ot,g([xt("https://www.github.com/kornicameister"),Lt("My Github profile"),Et("_blank")]),g([o(de,g([It,jt]),Nt)])),o(ot,g([xt("https://www.gitlab.com/kornicameister"),Lt("My Gitlab profile"),Et("_blank")]),g([o(de,g([It,jt]),Ct)]))])),o(ft,g([zt("content")]),g([o(ut,g([zt("greeting")]),g([yt("Boya mates")])),o(bt,l,g([o(dt,l,g([yt("I am "),o(wt,l,g([yt("kornicameister")])),yt(" also known as "),o(vt,l,g([yt("Tomasz Tr\u0119bski.")]))]))])),o(bt,l,g([o(dt,l,g([yt("Born in 1990 in \u0141owicz, Poland - I actually never thought my journey with computers "),yt("might be something more than playing video games or being exhausted after being forced to write those "),yt('"hello-world"-ish programs in Pascal during my high school classes. '),o(wt,l,g([yt("I was so wrong, wasn't I?")]))]))])),o(bt,l,g([o(dt,l,g([yt("I think that some credit must be given to my classmate from the time I was doing my engineering degree "),yt(" from Logistic. He was, back then, about to graduate with the same degree from computer science. "),yt("As a extracurricular activity; ha has infected me with the love for programming")]))])),o(bt,l,g([o(dt,l,g([yt("I started out by doing simple C/C++ programs, just to get myself familiar with the world I was "),yt("entering. After that I met Java and I think that it kept me busy for around 3 years, including "),yt("my first 2 years of professional career. "),yt("Then, I joined Python camp and I have been its faitful member since 2015.")])),o(lt,l,l),o(dt,l,g([yt("But I haven't stopped there and I am still exploring this wonderful world that allowed me to "),yt("indulge my passion to learn, give me only so much joy a challange can bring "),yt("and, last but no less important, to start a family to share a life. ")]))]))]))]))]),bv:"Korni"}}},Or=Tr.bk,Br=Tr.bl,Vr=function(){Vr.a(Or(Fn()))},Dn({J:function(n){return Vr.a=n,Sn.addEventListener("popstate",Vr),Sn.navigator.userAgent.indexOf("Trident")<0||Sn.addEventListener("hashchange",Vr),t(function(r,t){if(!t.ctrlKey&&!t.metaKey&&!t.shiftKey&&t.button<1&&!r.target&&!r.hasAttribute("download")){t.preventDefault();var e=r.href,i=Fn(),a=rt(e).a;n(Br(a&&i.aE===a.aE&&i.aq===a.aq&&i.aB.a===a.aB.a?{$:0,a:a}:function(n){return{$:1,a:n}}(e)))}})},a9:function(n){return f(Tr.a9,n,Fn(),Vr)},bz:Tr.bz,bx:Tr.bx,bs:Tr.bs}))(o(ke,function(n){return o(ke,function(r){return{$:0,a:{bw:r,O:n}}},o($e,"trianglifyDataUris",{$:3,b:ze}))},o($e,"version",ze)))(0)}},n.Elm?function n(r,t){for(var e in t)e in r?"init"==e?k(6):n(r[e],t[e]):r[e]=t[e]}(n.Elm,Cr):n.Elm=Cr}(this)},6:function(n,r,t){t(7),n.exports=t(33)}},[[6,1,2]]]);
//# sourceMappingURL=main.d963ead6.chunk.js.map