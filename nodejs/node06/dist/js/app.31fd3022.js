(function(){"use strict";var e={4324:function(e,t,n){var o=n(9242),i=n(3396);function r(e,t){const n=(0,i.up)("router-link"),o=(0,i.up)("router-view");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i._)("nav",null,[(0,i.Wm)(n,{to:"/"},{default:(0,i.w5)((()=>[(0,i.Uk)("채팅")])),_:1}),(0,i.Uk)(" | "),(0,i.Wm)(n,{to:"/about"},{default:(0,i.w5)((()=>[(0,i.Uk)("채팅목록")])),_:1})]),(0,i.Wm)(o)],64)}var a=n(89);const u={},s=(0,a.Z)(u,[["render",r]]);var c=s,l=n(678),d=n(7139);const f=(0,i._)("div",{class:"modal"},[(0,i._)("div",{class:"modal-body"},[(0,i._)("div",null,"👏변경됐습니다.")])],-1),m={id:"contanier"},p={id:"chatid1"},v={id:"messages"},h={key:0},g={key:1},b={key:2},k={id:"chatid2"},y=["disabled"],w={id:"send"};function _(e,t,n,r,a,u){return(0,i.wg)(),(0,i.iD)(i.HY,null,[f,(0,i._)("div",m,[(0,i._)("div",p,[(0,i._)("span",null,[(0,i.Uk)("대화명 "),(0,i._)("input",{id:"chatidi",onInput:t[0]||(t[0]=e=>a.myname=e.target.value),placeholder:"대화명을 입력해주세요."},null,32),(0,i._)("input",{type:"button",value:"확인",onClick:t[1]||(t[1]=e=>u.makeName())})]),(0,i.wy)((0,i._)("span",null,"대화명: "+(0,d.zw)(a.myname),513),[[o.F8,"익명"!==a.myname]])]),(0,i._)("div",v,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(a.chatData,((e,t)=>((0,i.wg)(),(0,i.iD)("div",{class:"chat-line",key:t},[""==e.toid?((0,i.wg)(),(0,i.iD)("div",h,(0,d.zw)(e.id+": "+e.message),1)):e.toid!=a.myname?((0,i.wg)(),(0,i.iD)("div",g,(0,d.zw)(e.toid+"에게 보낸 메시지: "+e.message),1)):((0,i.wg)(),(0,i.iD)("div",b,(0,d.zw)(e.id+"에게 받은 메시지: "+e.message),1))])))),128))]),(0,i._)("div",k,[(0,i.Uk)(" 귓속말: "),(0,i._)("input",{type:"checkbox",onClick:t[2]||(t[2]=e=>{a.ck=e.target.checked,u.toNameState()})}),(0,i._)("input",{disabled:!a.ck,onInput:t[3]||(t[3]=e=>a.toname=e.target.value),placeholder:"상대 이름"},null,40,y),(0,i.Uk)("에게 ")]),(0,i._)("div",w,[(0,i.wy)((0,i._)("input",{id:"input","onUpdate:modelValue":t[4]||(t[4]=e=>a.message=e),autocomplete:"off",onKeyup:t[5]||(t[5]=(0,o.D2)((e=>""!==a.message&&u.sendMessage()),["enter"]))},null,544),[[o.nr,a.message]]),(0,i._)("button",{onClick:t[6]||(t[6]=e=>""!==a.message&&u.sendMessage())},"전송")])])],64)}n(7658);var O={name:"chat",created(){this.$socket.on("chat",(e=>{console.log(e),this.chatData.push(e)}))},data(){return{chatData:[],myname:"익명",ck:!1,toname:"",message:"",modalon:!1}},methods:{makeName(){console.log("나중에 활용할 함수")},sendMessage(){this.$socket.emit("chat",{message:this.message,id:this.myname,toid:this.toname}),console.log(this.message),this.message=""},toNameState(){this.ck||(this.toname="")}}};const j=(0,a.Z)(O,[["render",_]]);var D=j;const C=[{path:"/",name:"home",component:D},{path:"/about",name:"about",component:()=>n.e(443).then(n.bind(n,8924))}],P=(0,l.p7)({history:(0,l.PO)("/"),routes:C});var T=P,M=n(6623),N=(0,M.MT)({state:{},getters:{},mutations:{},actions:{},modules:{}}),S=n(2066);const U=(0,o.ri)(c),E=(0,S.io)();U.config.globalProperties.$socket=E,U.config.globalProperties.kys="짱멋짐",U.use(N).use(T).mount("#app")}},t={};function n(o){var i=t[o];if(void 0!==i)return i.exports;var r=t[o]={exports:{}};return e[o](r,r.exports,n),r.exports}n.m=e,function(){var e=[];n.O=function(t,o,i,r){if(!o){var a=1/0;for(l=0;l<e.length;l++){o=e[l][0],i=e[l][1],r=e[l][2];for(var u=!0,s=0;s<o.length;s++)(!1&r||a>=r)&&Object.keys(n.O).every((function(e){return n.O[e](o[s])}))?o.splice(s--,1):(u=!1,r<a&&(a=r));if(u){e.splice(l--,1);var c=i();void 0!==c&&(t=c)}}return t}r=r||0;for(var l=e.length;l>0&&e[l-1][2]>r;l--)e[l]=e[l-1];e[l]=[o,i,r]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,o){return n.f[o](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/about.d6ac2caf.js"}}(),function(){n.miniCssF=function(e){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="vue_pr02:";n.l=function(o,i,r,a){if(e[o])e[o].push(i);else{var u,s;if(void 0!==r)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var d=c[l];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==t+r){u=d;break}}u||(s=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,n.nc&&u.setAttribute("nonce",n.nc),u.setAttribute("data-webpack",t+r),u.src=o),e[o]=[i];var f=function(t,n){u.onerror=u.onload=null,clearTimeout(m);var i=e[o];if(delete e[o],u.parentNode&&u.parentNode.removeChild(u),i&&i.forEach((function(e){return e(n)})),t)return t(n)},m=setTimeout(f.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=f.bind(null,u.onerror),u.onload=f.bind(null,u.onload),s&&document.head.appendChild(u)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var e={143:0};n.f.j=function(t,o){var i=n.o(e,t)?e[t]:void 0;if(0!==i)if(i)o.push(i[2]);else{var r=new Promise((function(n,o){i=e[t]=[n,o]}));o.push(i[2]=r);var a=n.p+n.u(t),u=new Error,s=function(o){if(n.o(e,t)&&(i=e[t],0!==i&&(e[t]=void 0),i)){var r=o&&("load"===o.type?"missing":o.type),a=o&&o.target&&o.target.src;u.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",u.name="ChunkLoadError",u.type=r,u.request=a,i[1](u)}};n.l(a,s,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,o){var i,r,a=o[0],u=o[1],s=o[2],c=0;if(a.some((function(t){return 0!==e[t]}))){for(i in u)n.o(u,i)&&(n.m[i]=u[i]);if(s)var l=s(n)}for(t&&t(o);c<a.length;c++)r=a[c],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return n.O(l)},o=self["webpackChunkvue_pr02"]=self["webpackChunkvue_pr02"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(4324)}));o=n.O(o)})();
//# sourceMappingURL=app.31fd3022.js.map