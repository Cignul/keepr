(function(t){function e(e){for(var s,r,i=e[0],l=e[1],c=e[2],p=0,m=[];p<i.length;p++)r=i[p],n[r]&&m.push(n[r][0]),n[r]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);u&&u(e);while(m.length)m.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],s=!0,i=1;i<a.length;i++){var l=a[i];0!==n[l]&&(s=!1)}s&&(o.splice(e--,1),t=r(r.s=a[0]))}return t}var s={},n={app:0},o=[];function r(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=s,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)r.d(a,s,function(e){return t[e]}.bind(null,s));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var u=l;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var s=a("c21b"),n=a.n(s);n.a},"56d7":function(t,e,a){"use strict";a.r(e);var s=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},o=[],r=(a("034f"),a("2877")),i={},l=Object(r["a"])(i,n,o,!1,null,null,null);l.options.__file="App.vue";var c=l.exports,u=a("ce5b"),p=a.n(u),m=a("8c4f"),d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[t._m(0),a("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(e){t.Logout()}}},[t._v("Logout")]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-12"},[a("form",[t._v("Create a Keep:\n        "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.newKeep.name,expression:"newKeep.name"}],staticClass:"form-control",attrs:{type:"text",Default:"name"},domProps:{value:t.newKeep.name},on:{input:function(e){e.target.composing||t.$set(t.newKeep,"name",e.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:t.newKeep.description,expression:"newKeep.description"}],staticClass:"form-control",attrs:{type:"text",Default:"description"},domProps:{value:t.newKeep.description},on:{input:function(e){e.target.composing||t.$set(t.newKeep,"description",e.target.value)}}}),t._v("\n        Create Keep->"),a("input",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(e){t.createKeep()}}})]),a("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(e){t.GetAll()}}},[t._v("get all keeps")])])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-12"},[a("form",[t._v("Create a Vault:\n        "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.newVault.name,expression:"newVault.name"}],staticClass:"form-control",attrs:{type:"text",Default:"name"},domProps:{value:t.newVault.name},on:{input:function(e){e.target.composing||t.$set(t.newVault,"name",e.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:t.newVault.description,expression:"newVault.description"}],staticClass:"form-control",attrs:{type:"text",Default:"description"},domProps:{value:t.newVault.description},on:{input:function(e){e.target.composing||t.$set(t.newVault,"description",e.target.value)}}}),t._v("\n        Create Vault-> "),a("input",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(e){t.createVault()}}})]),a("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(e){t.getAllVaults()}}},[t._v("get all vaults")])])]),a("ul",[t._v("List of Keeps:")]),t._l(t.keeps,function(e){return a("li",[t._v(t._s(e.name))])}),a("ul",[t._v("List of Vaults:")]),t._l(t.vaults,function(e){return a("li",[t._v(t._s(t.vaults))])}),a("button",{staticClass:"btn btn-primary",on:{click:t.getKeepsByVaultId}},[t._v("get keeps by vault id ")]),a("div",[a("v-layout",t._l(t.vaults,function(e){return a("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[a("v-card",[a("v-img",{staticClass:"white--text",attrs:{height:"200px",src:"data:image/jpeg;base64,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"}},[a("v-container",{attrs:{"fill-height":"",fluid:""}},[a("v-layout",{attrs:{"fill-height":""}},[a("v-flex",{attrs:{xs12:"","align-end":"",flexbox:""}},[a("span",{staticClass:"headline"},[t._v(t._s(e.name))])])],1)],1)],1),a("v-card-title",[a("div",[a("span",{staticClass:"grey--text"},[t._v(t._s(e.name))]),a("br"),a("span",[t._v(t._s(e.description))])])]),a("v-card-actions",[a("v-btn",{attrs:{flat:"",color:"blue"}},[t._v("View")]),a("v-btn",{attrs:{flat:"",color:"orange"}},[t._v("Like")]),a("v-btn",{attrs:{flat:"",color:"purple"}},[t._v("Share")])],1)],1)],1)}))],1)],2)},h=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",[a("h1",{staticClass:"font-weight-thin.font-italic"},[t._v("Welcome to Keepr")])])}],A={name:"home",mounted(){this.$store.state.user.id||this.$router.push({name:"login"})},data(){return{newKeep:{title:"",description:""},newVault:{title:"",description:""}}},computed:{keeps(){return this.$store.state.keeps},vaults(){return this.$store.state.vaults},Lougout(){return this.$store.state.setUser=!1}},methods:{createKeep(){console.log("hitting create keep from button"),this.$store.dispatch("createKeep",this.newKeep)},GetAll(){console.log("hitting getAll from button"),this.$store.dispatch("getAllKeeps")},createVault(){console.log("hitting create vault from button"),this.$store.dispatch("createVault",this.newVault)},getAllVaults(){console.log("hitting getallVAultsfrom button"),this.$store.dispatch("getAllVaults")},getKeepsByVaultId(){console.log("htitingKeepsByVaultIdfrom button in store"),this.$store.dispatch("getKeepsByVaultId")},Logout(){}}},g=A,v=Object(r["a"])(g,d,h,!1,null,null,null);v.options.__file="Home.vue";var f=v.exports,w=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"login"},[t.loginForm?a("form",{on:{submit:function(e){return e.preventDefault(),t.loginUser(e)}}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.creds.email,expression:"creds.email"}],attrs:{type:"email",placeholder:"email"},domProps:{value:t.creds.email},on:{input:function(e){e.target.composing||t.$set(t.creds,"email",e.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:t.creds.password,expression:"creds.password"}],attrs:{type:"password",placeholder:"password"},domProps:{value:t.creds.password},on:{input:function(e){e.target.composing||t.$set(t.creds,"password",e.target.value)}}}),a("button",{attrs:{type:"submit"}},[t._v("Login")])]):a("form",{on:{submit:function(e){return e.preventDefault(),t.register(e)}}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.newUser.username,expression:"newUser.username"}],attrs:{type:"text",placeholder:"name"},domProps:{value:t.newUser.username},on:{input:function(e){e.target.composing||t.$set(t.newUser,"username",e.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:t.newUser.email,expression:"newUser.email"}],attrs:{type:"email",placeholder:"email"},domProps:{value:t.newUser.email},on:{input:function(e){e.target.composing||t.$set(t.newUser,"email",e.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:t.newUser.password,expression:"newUser.password"}],attrs:{type:"password",placeholder:"password"},domProps:{value:t.newUser.password},on:{input:function(e){e.target.composing||t.$set(t.newUser,"password",e.target.value)}}}),a("button",{attrs:{type:"submit"}},[t._v("Create Account")])]),a("div",{on:{click:function(e){t.loginForm=!t.loginForm}}},[t.loginForm?a("p",[t._v("No account Click to Register")]):a("p",[t._v("Already have an account click to Login")])])])},b=[],y={name:"login",mounted(){this.$store.dispatch("authenticate")},data(){return{loginForm:!0,creds:{email:"",password:""},newUser:{email:"",password:"",username:""}}},methods:{register(){this.$store.dispatch("register",this.newUser)},loginUser(){this.$store.dispatch("login",this.creds)}}},V=y,B=Object(r["a"])(V,w,b,!1,null,null,null);B.options.__file="Login.vue";var x=B.exports;s["default"].use(m["a"]);var S=new m["a"]({routes:[{path:"/",name:"home",component:f},{path:"/login",name:"login",component:x}]}),K=a("2f62"),j=a("bc3a"),C=a.n(j);s["default"].use(K["a"]);let E=C.a.create({baseURL:"//localhost:5000/account/",timeout:3e3,withCredentials:!0}),q=C.a.create({baseURL:"//localhost:5000/api/",timeout:3e3,withCredentials:!0});var L=new K["a"].Store({state:{user:{},keeps:{},vaults:{}},mutations:{setUser(t,e){t.user=e},setKeeps(t,e){t.keeps=e},setVaults(t,e){t.vaults=e}},actions:{getAllKeeps({commit:t,dispatch:e}){q.get("keeps").then(e=>{t("setKeeps",e.data)})},createKeep({commit:t,dispatch:e},a){q.post("keeps",a).then(t=>{e("getAllKeeps")})},getAllVaults({commit:t,dispatch:e}){q.get("vaults").then(e=>{t("setVaults",e.data)})},createVault({commit:t,dispatch:e},a){q.post("vaults",a).then(t=>{e("getAllVaults")})},getKeepsByVaultId({commit:t,dispatch:e}){q.get("vaults").then(e=>{t("setVaults",e.data)}),q.get("keeps").then(e=>{t("setKeeps",e.data)})},register({commit:t,dispatch:e},a){E.post("register",a).then(e=>{t("setUser",e.data),S.push({name:"home"})}).catch(t=>{console.log("[registration failed] :",t)})},authenticate({commit:t,dispatch:e}){E.get("authenticate").then(e=>{t("setUser",e.data),S.push({name:"home"})}).catch(t=>{console.log("not authenticated")})},login({commit:t,dispatch:e},a){E.post("login",a).then(e=>{t("setUser",e.data),S.push({name:"home"})}).catch(t=>{console.log("Login Failed")})}}});a("bf40");s["default"].config.productionTip=!1,s["default"].use(p.a),new s["default"]({router:S,store:L,render:t=>t(c)}).$mount("#app")},c21b:function(t,e,a){}});
//# sourceMappingURL=app.3a965071.js.map