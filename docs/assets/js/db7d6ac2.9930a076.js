"use strict";(self.webpackChunkkotestdocs=self.webpackChunkkotestdocs||[]).push([[1295],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var o=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,s=function(e,t){if(null==e)return{};var n,o,s={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,s=e.mdxType,r=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(n),d=s,m=u["".concat(l,".").concat(d)]||u[d]||f[d]||r;return n?o.createElement(m,a(a({ref:t},c),{},{components:n})):o.createElement(m,a({ref:t},c))}));function d(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=n.length,a=new Array(r);a[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:s,a[1]=i;for(var p=2;p<r;p++)a[p]=n[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},47464:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>f,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var o=n(87462),s=(n(67294),n(3905));const r={id:"soft_assertions",title:"Soft Assertions",slug:"soft-assertions.html"},a=void 0,i={unversionedId:"assertions/soft_assertions",id:"assertions/soft_assertions",title:"Soft Assertions",description:"Normally, assertions like shouldBe throw an exception when they fail.",source:"@site/docs/assertions/soft_assertions.md",sourceDirName:"assertions",slug:"/assertions/soft-assertions.html",permalink:"/docs/next/assertions/soft-assertions.html",draft:!1,editUrl:"https://github.com/kotest/kotest/blob/master/documentation/docs/assertions/soft_assertions.md",tags:[],version:"current",frontMatter:{id:"soft_assertions",title:"Soft Assertions",slug:"soft-assertions.html"},sidebar:"assertions",previous:{title:"Clues",permalink:"/docs/next/assertions/clues.html"},next:{title:"Eventually",permalink:"/docs/next/assertions/eventually.html"}},l={},p=[],c={toc:p};function f(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Normally, assertions like ",(0,s.kt)("inlineCode",{parentName:"p"},"shouldBe")," throw an exception when they fail.\nBut sometimes you want to perform multiple assertions in a test, and\nwould like to see all of the assertions that failed. Kotest provides\nthe ",(0,s.kt)("inlineCode",{parentName:"p"},"assertSoftly")," function for this purpose."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-kotlin"},"assertSoftly {\n  foo shouldBe bar\n  foo should contain(baz)\n}\n")),(0,s.kt)("p",null,"If any assertions inside the block failed, the test will continue to\nrun. All failures will be reported in a single exception at the end of\nthe block."),(0,s.kt)("p",null,"Another version of ",(0,s.kt)("inlineCode",{parentName:"p"},"assertSoftly")," takes a test target and lambda with test target as its receiver."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-kotlin"},'assertSoftly(foo) {\n    shouldNotEndWith("b")\n    length shouldBe 3\n}\n')),(0,s.kt)("p",null,"We can configure assert softly to be implicitly added to every test via ",(0,s.kt)("a",{parentName:"p",href:"/docs/next/framework/project-config.html"},"project config"),"."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Note:")," only Kotest's own assertions can be asserted softly. To be compatible with ",(0,s.kt)("inlineCode",{parentName:"p"},"assertSoftly"),", assertions from other libraries must be wrapped in ",(0,s.kt)("inlineCode",{parentName:"p"},"shouldPass"),", which is described leter in this section. If any other checks fail and throw an ",(0,s.kt)("inlineCode",{parentName:"p"},"AssertionError"),", it will not respect ",(0,s.kt)("inlineCode",{parentName:"p"},"assertSoftly")," and bubble up, erasing the results of previous assertions. This includes Kotest's own ",(0,s.kt)("inlineCode",{parentName:"p"},"fail()")," function, so when the following code runs, we won't know if the first assertion ",(0,s.kt)("inlineCode",{parentName:"p"},"foo shouldBe bar")," succeeded or failed:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-kotlin"},'assertSoftly {\n  foo shouldBe bar\n  fail("Something happened")\n}\n')),(0,s.kt)("p",null,"Likewise, if mockk",(0,s.kt)("inlineCode",{parentName:"p"},"s "),"verify(...)` fails in the following example, the second assertion will not execute:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-kotlin"},"assertSoftly {\n  verify(exactly = 1) { myClass.myMethod(any()) }\n  foo shouldBe bar\n}\n")),(0,s.kt)("p",null,"So if we want to invoke non-kotest assertions inside ",(0,s.kt)("inlineCode",{parentName:"p"},"assrtSoftly")," blocks, they need to be invoked via ",(0,s.kt)("inlineCode",{parentName:"p"},"shouldPass"),".\nIn the following example both ",(0,s.kt)("inlineCode",{parentName:"p"},"verify")," and the second assertion can fail, and we shall get both errors accumulated:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-kotlin"},"assertSoftly {\n  shouldPass {\n    verify(exactly = 1) { myClass.myMethod(any()) }\n  }\n  foo shouldBe bar\n}\n")),(0,s.kt)("p",null,"Likewise, in the following example the failure of ",(0,s.kt)("inlineCode",{parentName:"p"},"verify")," will not be ignored, it will be added along with the failure of the first assertion:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-kotlin"},"assertSoftly {\n  (2+2) shouldBe 5\n  shouldPass {\n    verify(exactly = 1) { myClass.myMethod(any()) }\n  }\n}\n")))}f.isMDXComponent=!0}}]);