(function(e){function t(t){for(var a,r,o=t[0],c=t[1],l=t[2],u=0,d=[];u<o.length;u++)r=o[u],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&d.push(i[r][0]),i[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);p&&p(t);while(d.length)d.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],a=!0,r=1;r<n.length;r++){var o=n[r];0!==i[o]&&(a=!1)}a&&(s.splice(t--,1),e=c(c.s=n[0]))}return e}var a={},r={app:0},i={app:0},s=[];function o(e){return c.p+"js/"+({FAQ:"FAQ"}[e]||e)+"."+{FAQ:"4ccadee0"}[e]+".js"}function c(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={FAQ:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var a="css/"+({FAQ:"FAQ"}[e]||e)+"."+{FAQ:"d97dd7f8"}[e]+".css",i=c.p+a,s=document.getElementsByTagName("link"),o=0;o<s.length;o++){var l=s[o],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===a||u===i))return t()}var d=document.getElementsByTagName("style");for(o=0;o<d.length;o++){l=d[o],u=l.getAttribute("data-href");if(u===a||u===i)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var a=t&&t.target&&t.target.src||i,s=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=a,delete r[e],p.parentNode.removeChild(p),n(s)},p.href=i;var m=document.getElementsByTagName("head")[0];m.appendChild(p)})).then((function(){r[e]=0})));var a=i[e];if(0!==a)if(a)t.push(a[2]);else{var s=new Promise((function(t,n){a=i[e]=[t,n]}));t.push(a[2]=s);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=o(e);var d=new Error;l=function(t){u.onerror=u.onload=null,clearTimeout(p);var n=i[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",d.name="ChunkLoadError",d.type=a,d.request=r,n[1](d)}i[e]=void 0}};var p=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(t)},c.m=e,c.c=a,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)c.d(n,a,function(t){return e[t]}.bind(null,a));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var p=u;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"1f99":function(e,t,n){},"22b8":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAWCAYAAADeiIy1AAAB/UlEQVRIS72Vy4uOYRjGf1cjBpFDzUZhpbCwcCgWNMZCQso41EjSkOys7GymLGZKSrNzWEhZyEJSJBE2RlJCYoEi8QfM5DCX7umhZ7753u99v/mmeVbv4b7v3316r1dM01GrHNurgA3AHGAIeCHpz7+4ttvi/j/IdlxvlvSoCtz2QuAC0FNj/yw9awe6gR+SBnNQF3AH2CvpdiNYSuo+sLXAzkDEfhnJA6M56BRwDvgJnJB0pQhm+xBwtaTyEeAe0AHszEEngcHM+S5wXNLn2oC2I4kjFVr8Edgu6V0OWpNKzf0jq5vAReChpGgJtp8CmyqAlkv6FHbjts72LWBXQYDvwGvgLbANWFECiqRmSvo9DmS7E1gA9AGrK2RbZhLbFvMZO3nrDgDXy7ybeP9c0vp6oMXAh1RVE/EKTfslnZ4ASkM+mgbfsmIAXZIe1AUl2H5gAFjaQlnvgZW5FE3I3PYxYAuwB5g7SVivpEu5bz1QCGR8JzMmCXkFrJX0qyEote8gcBmY3SRsGFgn6U2tX+HQbS8JCQJ2hHMF4ChwWNK1eraNQLOAXuAsML8EFELcI+lGkd0YyHYEigrmAcvSMuxLyltWTEhSiO+TRoa5MsRan2lCfr6l38r52sFXap3t2LrdwMYknIvixwV8Bb4kYY0WPZYUzyudqVCASqC/p9adL1O2dWUAAAAASUVORK5CYII="},2395:function(e,t,n){},"27a4":function(e,t,n){},"35d0":function(e,t,n){"use strict";var a=n("cbee"),r=n.n(a);r.a},"47c3":function(e,t,n){e.exports=n.p+"img/content-img-01@2x.348ba4b9.png"},"4b6b":function(e,t,n){e.exports=n.p+"img/content-img-02@2x.2f79f8f2.png"},"4f8f":function(e,t,n){e.exports=n.p+"img/caballeros.bc9f40b5.png"},"56d7":function(e,t,n){"use strict";n.r(t);n("bd49"),n("450d");var a=n("18ff"),r=n.n(a),i=(n("960d"),n("defb")),s=n.n(i),o=(n("cb70"),n("b370")),c=n.n(o),l=(n("a7cc"),n("df33")),u=n.n(l),d=(n("1951"),n("eedf")),p=n.n(d),m=(n("b8e0"),n("a4c4")),g=n.n(m),f=(n("0fb7"),n("f529")),v=n.n(f),A=(n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("2b0e")),h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Header"),n("router-view"),n("Footer")],1)},b=[],C=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"header home"},[a("div",{staticClass:"pages-wrapper header-wrapper"},[a("div",{staticClass:"logon-wrapper",on:{click:e.home}},[a("img",{attrs:{src:n("ffba"),width:"40",alt:""}}),a("span",[e._v("Nsure.Network")])]),a("div",{staticClass:"right-wrapper"},[a("div",{staticClass:"right-list"},[e._m(0),a("div",{staticClass:"right-list-item"},[a("router-link",{attrs:{to:"/faq"}},[e._v("FAQ")])],1)])])])])},y=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"right-list-item"},[n("a",{attrs:{href:"/Nsure_WP_0.7.pdf",target:"_blank",rel:""}},[e._v("Whitepaper")])])}],w=(n("b0c0"),{comments:{},data:function(){return{menuList:[{path:"/home",name:"Home"},{path:"/insure",name:"Insure"},{path:"/liquidity-mining",name:"Liquidity Mining"},{path:"/stake-pool",name:"Stake Pool"}]}},methods:{handle:function(e){e.name!==this.$route.name&&this.$router.push(e.path)},home:function(){this.$router.push("/")},goInsure:function(){this.$router.push("/insure")}}}),k=w,E=(n("ae42"),n("2877")),S=Object(E["a"])(k,C,y,!1,null,"ef7c2e98",null),x=S.exports,P=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},B=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"footer"},[a("div",{staticClass:"pages-wrapper footer-wrapper"},[a("div",{staticClass:"left"},[a("div",{staticClass:"logon-wrapper"},[a("img",{attrs:{src:n("ffba"),width:"40",alt:""}}),a("span",[e._v("Nsure.Network")])])]),a("div",{staticClass:"right footer-right"},[a("div",{staticClass:"footer-right-item"},[a("div",{staticClass:"footer-title"},[e._v("SOCIAL")]),a("ul",{staticClass:"footer-right-item-list"},[a("li",[a("img",{attrs:{src:n("22b8"),width:"16",alt:""}}),a("a",{attrs:{href:"https://twitter.com/Nsure_network",target:"_blank",rel:""}},[e._v("Twitter")])]),a("li",[a("img",{attrs:{src:n("b505"),width:"16",alt:""}}),a("a",{attrs:{href:"https://discord.com/invite/nSvAapa",target:"_blank",rel:""}},[e._v("Discord")])]),a("li",[a("img",{attrs:{src:n("64da"),width:"16",alt:""}}),a("a",{attrs:{href:"https://t.me/nsurenet",target:"_blank",rel:""}},[e._v("Telegram")])]),a("li",[a("img",{attrs:{src:n("63fc"),width:"16",alt:""}}),a("a",{attrs:{href:"https://medium.com/@nsure_network",target:"_blank",rel:""}},[e._v("Medium")])])])]),a("div",{staticClass:"footer-right-item"},[a("div",{staticClass:"footer-title"},[e._v("CONTACT")]),a("ul",{staticClass:"footer-right-item-list"},[a("li",[e._v(" contact@Nsure.network ")])])])])])])}],O={name:"Footer"},R=O,F=(n("35d0"),Object(E["a"])(R,P,B,!1,null,"00201320",null)),N=F.exports,M={components:{Header:x,Footer:N}},D=M,j=(n("7c55"),Object(E["a"])(D,h,b,!1,null,null,null)),Y=j.exports,L=(n("d3b7"),n("8c4f")),U=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home"},[e._m(0),a("div",{staticClass:"contnet"},[a("div",{staticClass:"pages-wrapper content-wrapper"},[a("div",{staticClass:"content-item"},[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"content-item-box"},[a("h3",[e._v("Capital Mining")]),a("p",[e._v("Provide capital to back insurance risks in the capital pool, or purchase insurance covers to obtain NSURE tokens. NSURE are minted and automatically awarded on every block.")]),a("div",{staticClass:"img-box"},[a("img",{attrs:{src:n("47c3"),alt:""}})])])])],1),a("div",{staticClass:"content-item"},[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"content-item-box"},[a("h3",[e._v("Open Market to Trade Risk")]),a("p",[e._v("Nsure.Network is a permissionless platform for whoever wants to purchase a cover. Capital providers can utilize NSURE to stake on specific insurance risks to obtain daily insurance premiums. Leverage staking is available for non-correlated insurance products.")]),a("div",{staticClass:"img-box"},[a("img",{attrs:{src:n("4b6b"),alt:""}})])])])],1),a("div",{staticClass:"content-item"},[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"content-item-box"},[a("h3",[e._v("Dynamic Pricing and Capital Management")]),a("p",[e._v("Pricing is determined by real-time supply of capital and demand of insurance coverage for the products. The capital model ensures that valid claims will always be paid and that systematic risk is under control.")]),a("div",{staticClass:"img-box"},[a("img",{attrs:{src:n("d877"),alt:""}})])])])],1)])]),a("div",{staticClass:"we-do-wrapper"},[a("div",{staticClass:"pages-wrapper we-do-content"},[a("h1",[e._v("Nsure.Network Roadmap")]),a("div",{staticClass:"we-do-list-wrapper"},[a("ul",{staticClass:"we-do-list"},e._l(e.roadmap,(function(t,n){return a("li",{key:n},[a("div",{staticClass:"title"},[e._v(e._s(t.time))]),a("ul",{staticClass:"we-do-item-list"},e._l(t.list,(function(t){return a("li",{key:t},[e._v(e._s(t))])})),0)])})),0)])])]),a("div",{staticClass:"team-wrapper"},[a("div",{staticClass:"title"},[e._v("Team")]),a("div",{staticClass:"pages-wrapper team-content"},[a("ul",{staticClass:"team-content-list"},e._l(e.team,(function(t,n){return a("li",{key:n},[a("div",{staticClass:"list-item"},[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"content-item-box"},[a("h3",[e._v(e._s(t.name))]),a("h4",[e._v(e._s(t.job))]),a("div",{staticClass:"banner-des-box"},e._l(t.introduction,(function(t){return a("p",{key:t},[e._v(e._s(t))])})),0)])])],1)])})),0)])]),a("mechanism")],1)},_=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"banner"},[a("div",{staticClass:"banner-content"},[a("div",{staticClass:"banner-content-item banner-content-item-left"},[a("div",{staticClass:"banner-des-box"},[a("h1",[e._v("Open Insurance Platform for Open Finance")]),a("h3",[e._v("Create an insurance market to trade risk")]),a("div",{staticClass:"banner-button-wrapper"},[a("div",{staticClass:"banner-button"},[a("a",{attrs:{href:"https://buy.nsure.network/#/"}},[e._v("MVP on Rinkeby")])])])])]),a("div",{staticClass:"banner-content-item banner-content-item-right"},[a("div",{staticClass:"banner-img"},[a("img",{attrs:{src:n("6e2e"),alt:""}})])])])])}],V=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"we-do-wrapper"},[n("div",{staticClass:"pages-wrapper we-do-content"},[n("h1",[e._v("Our Partners")]),n("ul",e._l(e.imagesList,(function(e,t){return n("li",{key:t},[n("a",{attrs:{href:e.url,target:"_Blank"}},[n("img",{attrs:{src:e.img,alt:""}})])])})),0)])])},J=[],Q=n("f5fd"),T=n("8c35"),I=n("e92e"),G=n("72ef"),H=n("d7e6"),W=n("f285"),K=n("4f8f"),X={name:"mechanism",data:function(){return{imagesList:[{url:"https://based.ventures",img:Q},{url:"https://mechanism.capital",img:I},{url:"https://genblock.capital",img:T},{url:"https://au21.capital",img:G},{url:"https://Signal.vc",img:H},{url:"https://3commas.io",img:W},{url:"http://caballeroscapital.com",img:K}]}}},z=X,Z=(n("e4a0"),Object(E["a"])(z,V,J,!1,null,"4396d567",null)),q=Z.exports,$={name:"Home",components:{mechanism:q},data:function(){return{tips:"Beware of Any Scam Attempts. $NSURE token has not been deployed yet. Any pools found are impersonations and SCAM ATTEMPTS. Do not engage with such.",roadmap:[{time:"2020Q1",list:["Whitepaper V0.1 release"]},{time:"2020Q3",list:["MVP","Liquidity Bootstrapping"]},{time:"2020Q4",list:["Alpha release: Capital Mining; Cover purchasing; Leveraged Staking; Claim payment"]},{time:"2021Q1",list:["Mainnet V1.0 release"]},{time:"2021Q2",list:["Nsure DAO support; Community governance"]},{time:"2021Q3",list:["Boostrap on multichain ecosystem; e.g. Polkadot"]},{time:"2021Q4",list:["Developing strategies to deliver greater returns to Nsure holders"]}],team:[{name:"Jeff Ren",job:"Management & Research",introduction:["M.Sc in Management.","M.Sc in Coastal Engineering.","Previously with Chainfunder Capital as Investment Director & Researcher.","Research about blockchain protocols and ecosystems since 2017. Has been developing for Hurricane surge model for NOAA(US National Oceanic and Atmospheric Administration)."]},{name:"Alex Peng",job:"Insurance Model Design & Actuarial Analysis",introduction:["Master’s Degree in Financial Engineering.","10 years insurance professional in AON with extensive experience in Actuarial Analysis, Insurance Linked Securities structuring and Reinsurance broker. ","Expert in Financial Modeling and Quantit-ative Analytics."]},{name:"Leafan Chan",job:"Lead Developer",introduction:["Project Management Professional (PMP) certificate","Expert in Project Management, smart contracts and public blockchain development.","10 years’ C++/Golang relevant working experience, and more than 3 years blockchain experiences, formerly lead Sangfor’s cyber security team of 40+ devs."]},{name:"Alvaro Fernandez",job:"Strategy & Growth",introduction:["Majored in Economics & Finance. ","Developed his carreer in Venture Capital space. Previously Vice President and Managing Director for Europe at JRR Group. prior to that Investment & Incubation Manager at ChainFunder. Provided strategic consulting, including DBS Singapore & Italian Undersecretary of State for the Ministry of Economic Development."]},{name:"Jessie Wang",job:"Insurance Model Design & Communication",introduction:["Majored in Actuarial Science, achieved certified actuary credential (FCAS).","Previously with Allianz as Product Manager for more than 2 years, in charge of insurance products for Hong Kong and Singapore markets. Prior to that, worked in Aon Analytic Team for around 3 years with extensive experience in actuarial and catastrophe analysis."]},{name:"Vincent Bauwens",job:"Marketing",introduction:["Msc. in Finance and Business Engineering.","Co-Founder of several companies and ecommerce brands.Currently managing a marketing agency. 5+ years of experience in marketing & business development and early stage investments in the blockchain industry."]},{name:"Gary Lattanzi",job:"Partnerships & Operations",introduction:["Majored in International Business Trading and Development.","Developed his carreer in Venture Capital space as analyst for different token funds. Currently in the AI*blockchain intersection doing Crypto Data Analytics. Provided strategic consulting, including HTF startups, web3  & Italian Undersecretary of State for the Ministry of Economic Development."]},{name:"Anne Shuai",job:"UI Designer",introduction:["Previously in charge of UI designs for Palm Entertainment Xuan Dong Information Technology Co., Ltd., HeShuai has spent her past years providing and managing UI design features for tech companies and digital applications."]},{name:"Aaron Fang",job:"Full-Stack Developer",introduction:["Mastered in Golang Language, Proficient in JS TS Dart OC, deep understanding of MCV, MVVM, KVO. ","Previously engaged with development of blockchain wallets, exchanges and cross-platform development. Past experience includes mid- and back-end development of IM social software in Javascript iOS for large IT companies."]}]}}},ee=$,te=(n("cf89"),Object(E["a"])(ee,U,_,!1,null,"6985bb30",null)),ne=te.exports;A["default"].use(L["a"]);var ae=[{path:"/",name:"Home",component:ne},{path:"/faq",name:"FAQ",component:function(){return n.e("FAQ").then(n.bind(null,"10c2"))}}],re=new L["a"]({routes:ae}),ie=re,se=(n("b680"),n("ac1f"),n("466d"),n("0508")),oe=n("5c2b"),ce={epsilon:1e-12,matrix:"Matrix",number:"number",precision:64,predictable:!1,randomSeed:null},le=Object(se["a"])(oe["a"],ce),ue=function(e){var t=e.toExponential().match(/\d(?:\.(\d*))?e([+-]\d+)/);return e.toFixed(Math.max(0,(t[1]||"").length-t[2]))},de=le,pe=n("5530"),me=n("d4ec"),ge=n("bee2"),fe=n("ade3"),ve=n("bc3a"),Ae=n.n(ve),he=function(){function e(){Object(me["a"])(this,e),Object(fe["a"])(this,"axios",void 0),this.axios=Ae.a.create({timeout:3e4,headers:{"Content-Type":"application/json; charset=UTF-8"},transformRequest:[function(e){return JSON.stringify(e)}],transformResponse:[function(e){return JSON.parse(e)}]}),this.interceptors()}return Object(ge["a"])(e,[{key:"interceptors",value:function(){this.axios.interceptors.request.use((function(e){return Promise.resolve(e)}),(function(e){return Promise.reject(e)})),this.axios.interceptors.response.use((function(e){var t=e.status,n=e.data,a=n.code,r=n.result;return 200===t&&0===a?Promise.resolve(r):Promise.reject(n)}),(function(e){return Promise.reject(e)}))}},{key:"get",value:function(e,t){return this.axios.get(e,{params:Object(pe["a"])({},t)})}},{key:"post",value:function(e,t){return this.axios.post(e,t)}},{key:"put",value:function(e,t){return this.axios.put(e,t)}},{key:"patch",value:function(e,t){return this.axios.patch(e,t)}},{key:"delete",value:function(e){return this.axios.delete(e)}}]),e}(),be=he,Ce={dev:{common:"http://120.79.189.25:9502"},test:{common:"https://test.goomtu.com"},prod:{common:"https://test.goomtu.com"}},ye=Ce.dev;ye=Ce.prod;var we=ye.common,ke="/v1",Ee=we+ke,Se=new be;Se.axios.interceptors.request.use((function(e){return Promise.resolve(e)}),(function(e){return Promise.reject(e)})),Se.axios.interceptors.response.use((function(e){return Promise.resolve(e)}),(function(e){return console.log(e),Promise.reject(e)}));var xe=function(e){return Se.get("".concat(Ee,"/product/list"),e)},Pe=function(e){return Se.get("".concat(Ee,"/provider/list"),e)},Be=function(e){return Se.get("".concat(Ee,"/order/list"),e)},Oe=function(e){return Se.get("".concat(Ee,"/provider/records"),e)},Re={getProductList:xe,getProviderList:Pe,getOrderList:Be,getRecords:Oe};n("1f99"),n("0fae");A["default"].config.productionTip=!1,A["default"].prototype.$math=de,A["default"].prototype.$exNumber=ue,A["default"].prototype.$http=Re,A["default"].prototype.$message=v.a,A["default"].use(g.a),A["default"].use(p.a),A["default"].use(u.a),A["default"].use(c.a),A["default"].use(s.a),A["default"].use(r.a),new A["default"]({router:ie,render:function(e){return e(Y)}}).$mount("#app")},"63fc":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAB8ElEQVRIS+2VP0iVURiHn58NakOB2SQmJBltJoabg0LQEtkkZKGEUW6uGkKkgjUURNlwaQgN4kIRES4tRSAKSjlEjQURLgYWOBiceC/ni8Pnd+8VPNxBPds97/v9nvP+vaLCRxXmUQA651ylwPvA6Jneuyn9Aoxk5NPu2ovkeR0YsKYP7FXAPaAxuSuV0huSHofizrke4EUR4LSkocTmnDsAPAGuhP6lgH+BbknvAxF7sUV/IgPaKulT4HsJmEn7lWua55J6U1FeB6ZTQouSOrbhV3bTvAT6JVl9Csc5Vwt8A44GgKtAXtLvwC/rYdsC3gaOSHobiI0Bt/xve0wD0CspFws4JelsIFYPfAcs2kfAK6BT0s1YwGXgtKSPgeBDwLqyFTDQ19jAWUl9AbAZeApcAH4Ad2IBx4ElwMakWZKlMmmg48BF4C4wEQtoTWMptXNf0nCq/W0uT8YC5gEDrnjIH+CYpF9+RDqBd94WJUJbS8+Az0CLFx6VNOmBVsPLsYA5SYNe+BQwDxwGVoEmPxI/gRpf3/OS5oL6tgEfvN//KhRbbebYJWkzEDgHvIHCsrgGVAMPAPOxod+y1J1zXcBr4GCiUwxonWivT58zgC3wNW+oAzaAhQzf5MoiPVQOWOL7nZnK/VvsTD3j690P/Ae8SRrEXOe6kQAAAABJRU5ErkJggg=="},"64da":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAcCAYAAAB2+A+pAAACj0lEQVRIS82Wy4uOYRjGf5dTjhOjHEomhJAzGRklUbLABtGUKeeUYiHJmoUFRXazoKYo/4KFnEnU0CyosXAoFkJiYVy69XzTO99873eYU+7N1/e+z/v83uu5r/u+XzEEYXsS0CDpRQGnweTaXgMcAXYDXZImDBrY9nhgL3AUWJYR9lzSigEH216S1DUD3coy4FZJBwYEbHs0sCsB11ZI2zFJV/sFtj0fOAzsA+qLgF+B78CMouuNkh7XDLY9EtiR1G3MURcb/wEWAXWZNV1x/JJ+Vg223QAcAvYDU3OAn4E3wFhgDhAGy0a7pPBAd5QsJ9vDga1J3RZgWJn83UsK3wLzgHEl1l6T1JILtj09KTsIzKxglvfAR2AV8AxYCIzJeea4pMu9wLbXASeA7cCICkADd4HlqWyeAouBcHheNEm6Xwr8AQi1laIT+AYsTQufpCYxqsyDYbY6ST9KgcMQhfKYUmKT30DksjGj7BGwEgi3l4sOSZGGHtHDXKlktgGR483JVFEK7UXt7yGwuoq0BKxNUnSzfHD2TiqjS8B6YHLm3gMgmn84v5o4Keli1eBYaLspGeld6kRhpDjecuVVzNgg6U6t4FD1CXiVlHcAC6qRmdZEBUyUFIas7qgLq2y3AbOAGGnh3lpm+GtJ0VR6RcVNbMdsvQJ8AWbXoDaW3pC0p6/gmD5x3PHZEvktRDSRacDcMi9zStKFPoGTyQISRvv3Fzgr6Vyax9EKuwd8EWSTpNv9AZ8GzgO/gBZJN7Ob2Y65HEM+plM26iVFimrPcVIcA+M6cEZS1HGvsB39+laaUHG/U1KuJyqaqxYz2Y5vrVZgZ7yEpPgtGQMKLhBsh5Nj+L8cUnA1pzQoiv9r8F9bH68d9JK5vgAAAABJRU5ErkJggg=="},"6e2e":function(e,t,n){e.exports=n.p+"img/banner-bg-2@2x.e4c190e5.png"},"72ef":function(e,t,n){e.exports=n.p+"img/au21.c715b5c5.png"},"7c55":function(e,t,n){"use strict";var a=n("2395"),r=n.n(a);r.a},"8c35":function(e,t,n){e.exports=n.p+"img/genblock.96368d52.png"},ae42:function(e,t,n){"use strict";var a=n("d2f2"),r=n.n(a);r.a},b505:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAWCAYAAADeiIy1AAADUElEQVRIS6WVW6iWZRCFn6VliBJ2Ms2iggIzTaEjmGVFRZmoBaUYil2pREJedEAlLLKggiSyboIKMQWzk0mppaUgboPOCQYVmZTZScooyhXL5v/595e2C+fue9+Zb82sd2aNOITZHgncBIwBzgRGSfq60932IOBdYAfwNrBc0nsH+6Wah7YvBBYDFzTuZktaYrsXYEm2PQt4vOG3FZgjaUvneTcg2/cBdwM53wa8BQwHrgL2VuDRwJ/A98BRQL5fBz4ELgHOSyLA/ZLmtcDaQLbHAm8Cu4GnQxVwZSPbH4A9dXY8cEzjfm1ROR0YCIyVtDE+nUDPA5OAm4GLgZnAZ8Ay4A3gHUk/Nt5oAHAucDkwBTgdeALYDDwLrJJ0fRvIdspPJaFnMNAfuBpYKSk09Wi2ewM3AK8BPwNfAsemMkl7D1Rke1rR9aSkVHLYZvth4HZguqRnWkAvA9eFAkl5p8M22xmLNNMrksanRwOWDjoCGNCkyvYQ4EbgU0lJqG22xwNnACskfdW4C5V50z9CYYDOAj4GNki6rOF8AvA+kMGMLZB0b9E9H1hY5xnkcyR924gPO+nmYQGaATwFPCDprobjXOAh4AXgGuC3VF0+PwF9gDXARGCupEca8YuAO4FbArSkWnmSpPywk5q2I3APcArQt8ZiX3VWzpPoIkkZ9s74JLAqLR+g1cC1VfoHDcec5/4XoB/QJemANNmO1JzfcTdO0quN+BFF/eoAdZVspN+7cVw/TFW31vBOlpT3DNAw4Lka0seatJdP3jjz2RWgL4CTwneEshyOk/RdK7t0ZuuuM+Py7XZnux1bHf07sCtAvwL5GCxpn+2TgShv5H+hpFDUo9kOpQtKIy+StNN26N4FHBmgTcBoYB0woXbPUuDs+vv2UucAR/s6VTzaFvGNug8t/4+AqbWjXgKuADYFKJ0UhU3Q5yUbaYAMadbGqT2W87dDniBrYQUwDkirn1bJXdqSoBNr2eXnsTTFiyWSEdjoXxQiSUWAY6kswhlFiGJHSFcWK2mC2PJagt80F1+mOLOQcrNJY4slzfm3qmw/CtxWPvuB9bX4NrTi/rHKq5NCV+Qo8vSgpGjhIc121sEdwCdZnpJCYzc7KNB/fJP/5fYXji5LX4iRyk0AAAAASUVORK5CYII="},cbee:function(e,t,n){},cf89:function(e,t,n){"use strict";var a=n("27a4"),r=n.n(a);r.a},d2f2:function(e,t,n){},d7e6:function(e,t,n){e.exports=n.p+"img/signal.5e9bda10.png"},d877:function(e,t,n){e.exports=n.p+"img/content-img-03@2x.5978936d.png"},e4a0:function(e,t,n){"use strict";var a=n("f0d8"),r=n.n(a);r.a},e92e:function(e,t,n){e.exports=n.p+"img/mechanism.66c5253d.png"},f0d8:function(e,t,n){},f285:function(e,t,n){e.exports=n.p+"img/3commas.d8a9083a.png"},f5fd:function(e,t,n){e.exports=n.p+"img/based.bed9386a.png"},ffba:function(e,t,n){e.exports=n.p+"img/logo@2x.f897a44c.png"}});
//# sourceMappingURL=app.c431b48b.js.map