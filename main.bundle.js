(()=>{"use strict";var e,r={5980:(e,r,n)=>{var t=n(5893),o=n(7294),a=n(3935);n(9601),n(2526),n(1817),n(1539),n(2165),n(6992),n(8783),n(3948),n(7042),n(8309),n(1038);const i=(0,o.memo)((function(e){var r=e.children;return(0,t.jsx)("main",Object.assign({className:"m1ytpwda"},{children:(0,t.jsx)("div",Object.assign({className:"i1p5s9vt"},{children:r}),void 0)}),void 0)}));n(2521);n(7941),n(4916),n(5306);var l=n(1682),u=n(8800),c=n(9802),s=["node","inline","className","children"];function d(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const f=(0,o.memo)((function(e){var r=e.value;return(0,t.jsx)("div",Object.assign({className:"pnopd40"},{children:(0,t.jsx)(l.Z,{children:r,unwrapDisallowed:!1,components:{code:function(e){e.node;var r=e.inline,n=e.className,o=e.children,a=d(e,s),i=/language-(\w+)/.exec(n||"");return!r&&i?(0,t.jsx)(u.Z,{children:String(o).replace(/\n$/,""),style:c.Z,language:i[1],PreTag:"div"},void 0):(0,t.jsx)("code",Object.assign({className:n},a,{children:o}),void 0)}}},void 0)}),void 0)}));n(8499);const v=(0,o.memo)((function(e){var r=e.value,n=e.handleChange;return(0,t.jsx)("textarea",{className:"t13ol3h6",onChange:n,value:r},void 0)}));n(5745);const m=(0,o.memo)((function(){return(0,t.jsx)("header",Object.assign({className:"hwue83p"},{children:"Simple Markdown Editor"}),void 0)}));function y(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var t,o,a=[],i=!0,l=!1;try{for(n=n.call(e);!(i=(t=n.next()).done)&&(a.push(t.value),!r||a.length!==r);i=!0);}catch(e){l=!0,o=e}finally{try{i||null==n.return||n.return()}finally{if(l)throw o}}return a}(e,r)||function(e,r){if(!e)return;if("string"==typeof e)return p(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return p(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e,r){(null==r||r>e.length)&&(r=e.length);for(var n=0,t=new Array(r);n<r;n++)t[n]=e[n];return t}n(2215);const h=function(e,r){var n=localStorage.getItem(e)||r||"",t=y((0,o.useState)(n),2),a=t[0],i=t[1],l=(0,o.useCallback)((function(r){i(r),localStorage.setItem(e,r)}),[]);return[a,l]};function b(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var t,o,a=[],i=!0,l=!1;try{for(n=n.call(e);!(i=(t=n.next()).done)&&(a.push(t.value),!r||a.length!==r);i=!0);}catch(e){l=!0,o=e}finally{try{i||null==n.return||n.return()}finally{if(l)throw o}}return a}(e,r)||function(e,r){if(!e)return;if("string"==typeof e)return g(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return g(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(e,r){(null==r||r>e.length)&&(r=e.length);for(var n=0,t=new Array(r);n<r;n++)t[n]=e[n];return t}const j=(0,o.memo)((function(){var e=b(h("editor","\n# HELLO WORLD!\n\nthis is my React-practice-project.\n\n- Front-end\n  - React\n  - TypeScript\n  - Linaria\n  - webpack\n\n\n~~~js\nconsole.log('Rei Matsuda');\n~~~\n\n"),2),r=e[0],n=e[1],a=(0,o.useCallback)((function(e){var r=e.currentTarget.value;n(r)}),[]);return(0,t.jsxs)("div",Object.assign({className:"e1a0l4jg"},{children:[(0,t.jsx)(m,{},void 0),(0,t.jsxs)(i,{children:[(0,t.jsx)(v,{value:r,handleChange:a},void 0),(0,t.jsx)(f,{value:r},void 0)]},void 0)]}),void 0)}));n(4226);const O=(0,o.memo)((function(){return(0,t.jsx)(j,{},void 0)}));(0,a.render)((0,t.jsx)(o.StrictMode,{children:(0,t.jsx)(O,{},void 0)},void 0),document.getElementById("app"));n(6587)},2521:(e,r,n)=>{n.r(r)},2215:(e,r,n)=>{n.r(r)},8499:(e,r,n)=>{n.r(r)},5745:(e,r,n)=>{n.r(r)},6587:(e,r,n)=>{n.r(r)},4226:(e,r,n)=>{n.r(r)}},n={};function t(e){var o=n[e];if(void 0!==o)return o.exports;var a=n[e]={exports:{}};return r[e](a,a.exports,t),a.exports}t.m=r,e=[],t.O=(r,n,o,a)=>{if(!n){var i=1/0;for(s=0;s<e.length;s++){for(var[n,o,a]=e[s],l=!0,u=0;u<n.length;u++)(!1&a||i>=a)&&Object.keys(t.O).every((e=>t.O[e](n[u])))?n.splice(u--,1):(l=!1,a<i&&(i=a));if(l){e.splice(s--,1);var c=o();void 0!==c&&(r=c)}}return r}a=a||0;for(var s=e.length;s>0&&e[s-1][2]>a;s--)e[s]=e[s-1];e[s]=[n,o,a]},t.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return t.d(r,{a:r}),r},t.d=(e,r)=>{for(var n in r)t.o(r,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),t.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e={179:0};t.O.j=r=>0===e[r];var r=(r,n)=>{var o,a,[i,l,u]=n,c=0;if(i.some((r=>0!==e[r]))){for(o in l)t.o(l,o)&&(t.m[o]=l[o]);if(u)var s=u(t)}for(r&&r(n);c<i.length;c++)a=i[c],t.o(e,a)&&e[a]&&e[a][0](),e[i[c]]=0;return t.O(s)},n=self.webpackChunk=self.webpackChunk||[];n.forEach(r.bind(null,0)),n.push=r.bind(null,n.push.bind(n))})();var o=t.O(void 0,[216],(()=>t(5980)));o=t.O(o)})();