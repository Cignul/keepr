(function(e){function t(t){for(var s,r,i=t[0],l=t[1],u=t[2],p=0,d=[];p<i.length;p++)r=i[p],n[r]&&d.push(n[r][0]),n[r]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(e[s]=l[s]);c&&c(t);while(d.length)d.shift()();return o.push.apply(o,u||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],s=!0,i=1;i<a.length;i++){var l=a[i];0!==n[l]&&(s=!1)}s&&(o.splice(t--,1),e=r(r.s=a[0]))}return e}var s={},n={app:0},o=[];function r(t){if(s[t])return s[t].exports;var a=s[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=s,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)r.d(a,s,function(t){return e[t]}.bind(null,s));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var c=l;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";var s=a("c21b"),n=a.n(s);n.a},"56d7":function(e,t,a){"use strict";a.r(t);var s=a("2b0e"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},o=[],r=(a("034f"),a("2877")),i={},l=Object(r["a"])(i,n,o,!1,null,null,null);l.options.__file="App.vue";var u=l.exports,c=a("ce5b"),p=a.n(c),d=a("8c4f"),m=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home"},[e._m(0),a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[a("h1",[e._v(" testing vaultkeep display area")]),a("button",{staticClass:"btn btn-primary",on:{click:e.getKeepsByVaultId}},[e._v("get keeps by vault id ")])])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-12"},[a("form",[e._v("Create a Keep:\n        "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newKeep.name,expression:"newKeep.name"}],staticClass:"form-control",attrs:{type:"text",Default:"name"},domProps:{value:e.newKeep.name},on:{input:function(t){t.target.composing||e.$set(e.newKeep,"name",t.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newKeep.description,expression:"newKeep.description"}],staticClass:"form-control",attrs:{type:"text",Default:"description"},domProps:{value:e.newKeep.description},on:{input:function(t){t.target.composing||e.$set(e.newKeep,"description",t.target.value)}}}),e._v("\n        Create Keep->"),a("input",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(t){e.createKeep()}}})]),a("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(t){e.GetAll()}}},[e._v("get all keeps")])])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-12"},[a("form",[e._v("Create a Vault:\n        "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newVault.name,expression:"newVault.name"}],staticClass:"form-control",attrs:{type:"text",Default:"name"},domProps:{value:e.newVault.name},on:{input:function(t){t.target.composing||e.$set(e.newVault,"name",t.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newVault.description,expression:"newVault.description"}],staticClass:"form-control",attrs:{type:"text",Default:"description"},domProps:{value:e.newVault.description},on:{input:function(t){t.target.composing||e.$set(e.newVault,"description",t.target.value)}}}),e._v("\n        Create Vault-> "),a("input",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(t){e.createVault()}}})]),a("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(t){e.getAllVaults()}}},[e._v("get all vaults")])])]),a("ul",[e._v("List of Keeps:")]),e._l(e.keeps,function(t){return a("li",[e._v(e._s(t.name))])}),a("ul",[e._v("List of Vaults:")]),e._l(e.vaults,function(t){return a("li",[e._v(e._s(e.vaults))])}),a("button",{on:{click:function(t){e.Logout()}}},[e._v("Logout")]),a("div",[a("v-layout",[a("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[a("v-card",[a("v-img",{staticClass:"white--text",attrs:{height:"200px",src:"https://cdn.vuetifyjs.com/images/cards/docks.jpg"}},[a("v-container",{attrs:{"fill-height":"",fluid:""}},[a("v-layout",{attrs:{"fill-height":""}},[a("v-flex",{attrs:{xs12:"","align-end":"",flexbox:""}},[a("span",{staticClass:"headline"},[e._v('Vault: $"{vault}"')])])],1)],1)],1),a("v-card-title",[a("div",[a("span",{staticClass:"grey--text"},[e._v("Vault name")]),a("br"),a("span",[e._v("need interpolation for title")]),a("br"),a("span",[e._v("need interpolation here (description)")])])]),a("v-card-actions",[a("v-btn",{attrs:{flat:"",color:"orange"}},[e._v("View")]),a("v-btn",{attrs:{flat:"",color:"orange"}},[e._v("Like")]),a("v-btn",{attrs:{flat:"",color:"orange"}},[e._v("Share")])],1)],1)],1)],1)],1)],2)},v=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("header",[a("h1",{staticClass:"font-weight-thin.font-italic"},[e._v("Welcome to Keepr")])])}],g={name:"home",mounted(){this.$store.state.user.id||this.$router.push({name:"login"})},data(){return{newKeep:{title:"",description:""},newVault:{title:"",description:""}}},computed:{keeps(){return this.$store.state.keeps},vaults(){return this.$store.state.vaults},Lougout(){return this.$store.state.setUser=!1}},methods:{createKeep(){console.log("hitting create keep from button"),this.$store.dispatch("createKeep",this.newKeep)},GetAll(){console.log("hitting getAll from button"),this.$store.dispatch("getAllKeeps")},createVault(){console.log("hitting create vault from button"),this.$store.dispatch("createVault",this.newVault)},getAllVaults(){console.log("hitting getallVAultsfrom button"),this.$store.dispatch("getAllVaults")},getKeepsByVaultId(){console.log("htitingKeepsByVaultIdfrom button in store"),this.$store.dispatch("getKeepsByVaultId")}}},f=g,h=Object(r["a"])(f,m,v,!1,null,null,null);h.options.__file="Home.vue";var w=h.exports,b=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"login"},[e.loginForm?a("form",{on:{submit:function(t){return t.preventDefault(),e.loginUser(t)}}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.creds.email,expression:"creds.email"}],attrs:{type:"email",placeholder:"email"},domProps:{value:e.creds.email},on:{input:function(t){t.target.composing||e.$set(e.creds,"email",t.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:e.creds.password,expression:"creds.password"}],attrs:{type:"password",placeholder:"password"},domProps:{value:e.creds.password},on:{input:function(t){t.target.composing||e.$set(e.creds,"password",t.target.value)}}}),a("button",{attrs:{type:"submit"}},[e._v("Login")])]):a("form",{on:{submit:function(t){return t.preventDefault(),e.register(t)}}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.newUser.username,expression:"newUser.username"}],attrs:{type:"text",placeholder:"name"},domProps:{value:e.newUser.username},on:{input:function(t){t.target.composing||e.$set(e.newUser,"username",t.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newUser.email,expression:"newUser.email"}],attrs:{type:"email",placeholder:"email"},domProps:{value:e.newUser.email},on:{input:function(t){t.target.composing||e.$set(e.newUser,"email",t.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newUser.password,expression:"newUser.password"}],attrs:{type:"password",placeholder:"password"},domProps:{value:e.newUser.password},on:{input:function(t){t.target.composing||e.$set(e.newUser,"password",t.target.value)}}}),a("button",{attrs:{type:"submit"}},[e._v("Create Account")])]),a("div",{on:{click:function(t){e.loginForm=!e.loginForm}}},[e.loginForm?a("p",[e._v("No account Click to Register")]):a("p",[e._v("Already have an account click to Login")])])])},_=[],y={name:"login",mounted(){this.$store.dispatch("authenticate")},data(){return{loginForm:!0,creds:{email:"",password:""},newUser:{email:"",password:"",username:""}}},methods:{register(){this.$store.dispatch("register",this.newUser)},loginUser(){this.$store.dispatch("login",this.creds)}}},V=y,x=Object(r["a"])(V,b,_,!1,null,null,null);x.options.__file="Login.vue";var C=x.exports;s["default"].use(d["a"]);var K=new d["a"]({routes:[{path:"/",name:"home",component:w},{path:"/login",name:"login",component:C}]}),$=a("2f62"),k=a("bc3a"),U=a.n(k);s["default"].use($["a"]);let A=U.a.create({baseURL:"//localhost:5000/account/",timeout:3e3,withCredentials:!0}),P=U.a.create({baseURL:"//localhost:5000/api/",timeout:3e3,withCredentials:!0});var j=new $["a"].Store({state:{user:{},keeps:{},vaults:{}},mutations:{setUser(e,t){e.user=t},setKeeps(e,t){e.keeps=t},setVaults(e,t){e.vaults=t}},actions:{getAllKeeps({commit:e,dispatch:t}){P.get("keeps").then(t=>{e("setKeeps",t.data)})},createKeep({commit:e,dispatch:t},a){P.post("keeps",a).then(e=>{t("getAllKeeps")})},getAllVaults({commit:e,dispatch:t}){P.get("vaults").then(t=>{e("setVaults",t.data)})},createVault({commit:e,dispatch:t},a){P.post("vaults",a).then(e=>{t("getAllVaults")})},getKeepsByVaultId({commit:e,dispatch:t}){P.get("vaults").then(t=>{e("setVaults",t.data)}),P.get("keeps").then(t=>{e("setKeeps",t.data)})},register({commit:e,dispatch:t},a){A.post("register",a).then(t=>{e("setUser",t.data),K.push({name:"home"})}).catch(e=>{console.log("[registration failed] :",e)})},authenticate({commit:e,dispatch:t}){A.get("authenticate").then(t=>{e("setUser",t.data),K.push({name:"home"})}).catch(e=>{console.log("not authenticated")})},login({commit:e,dispatch:t},a){A.post("login",a).then(t=>{e("setUser",t.data),K.push({name:"home"})}).catch(e=>{console.log("Login Failed")})}}});a("bf40");s["default"].config.productionTip=!1,s["default"].use(p.a),new s["default"]({router:K,store:j,render:e=>e(u)}).$mount("#app")},c21b:function(e,t,a){}});
//# sourceMappingURL=app.6e8892b4.js.map