(function(e){function t(t){for(var i,r,s=t[0],p=t[1],u=t[2],m=0,c=[];m<s.length;m++)r=s[m],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&c.push(a[r][0]),a[r]=0;for(i in p)Object.prototype.hasOwnProperty.call(p,i)&&(e[i]=p[i]);l&&l(t);while(c.length)c.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],i=!0,s=1;s<n.length;s++){var p=n[s];0!==a[p]&&(i=!1)}i&&(o.splice(t--,1),e=r(r.s=n[0]))}return e}var i={},a={app:0},o=[];function r(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=i,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],p=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var l=p;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},2242:function(e,t,n){},"4f0e":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);var i=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},o=[],r={name:"app"},s=r,p=n("2877"),u=Object(p["a"])(s,a,o,!1,null,null,null),l=u.exports,m=n("8c4f"),c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.isManager?n("span",[e._v("Now you see me")]):e._e()])},d=[],h={name:"StartPage",created(){let e=localStorage.getItem("token"),t=e.split(".")[1],n=window.atob(t),i=JSON.parse(n),a=i["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];"Manager"==a?this.isManager=!0:"Model"==a&&(this.isModel=!0)},data:function(){return{isManager:!1,isModel:!1}}},v=h,g=Object(p["a"])(v,c,d,!1,null,null,null),f=g.exports,y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home",attrs:{id:"login"}},[n("h1",[e._v("Welcome to Model Management")]),n("p",[e._v("First you need to login")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.input.username,expression:"input.username"}],attrs:{type:"text",name:"username",placeholder:"Username"},domProps:{value:e.input.username},on:{input:function(t){t.target.composing||e.$set(e.input,"username",t.target.value)}}}),n("br"),n("br"),n("input",{directives:[{name:"model",rawName:"v-model",value:e.input.password,expression:"input.password"}],attrs:{type:"password",name:"password",placeholder:"Password"},domProps:{value:e.input.password},on:{input:function(t){t.target.composing||e.$set(e.input,"password",t.target.value)}}}),n("br"),n("br"),n("button",{attrs:{type:"button"},on:{click:function(t){e.login()}}},[e._v("Login")])])},w=[],b={name:"Home",props:{},data(){return{input:{username:"",password:""}}},methods:{login(){""!=this.input.username&&""!=this.input.password&&fetch("https://localhost:44368/api/Account/login",{method:"POST",body:JSON.stringify({email:this.input.username,password:this.input.password}),headers:new Headers({"Content-Type":"application/json"})}).then(e=>{if(!e.ok)throw new Error("Network response was not ok");e.json().then(t=>{e.status&&localStorage.setItem("token",t.jwt),this.$router.push("/createpage")})})}}},_=b,x=(n("a6eb"),Object(p["a"])(_,y,w,!1,null,"5f82cb38",null)),k=x.exports,P=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"jobs",attrs:{id:"list"}},[n("h1",[e._v("Jobs")]),e._l(e.jobList,function(t){return n("div",{key:t.id},[n("table",{attrs:{border:"1"}},[e._m(0,!0),n("tr",[n("td",[e._v(e._s(t.customer))]),n("td",[e._v(e._s(t.startDay))]),n("td",[e._v(e._s(t.days))]),n("td",[e._v(e._s(t.location))]),n("td",[e._v(e._s(t.comments))]),n("td",[e._v(e._s(t.models))]),n("td",[e._v("expenses")])])])])})],2)},N=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("tr",[n("th",[e._v("Customer")]),n("th",[e._v("Start Day")]),n("th",[e._v("Days")]),n("th",[e._v("Location")]),n("th",[e._v("Comments")]),n("th",[e._v("Models")]),n("th",[e._v("Expenses")])])}],M={name:"Jobs",data(){return{jobList:[],isManager:!1,isModel:!1}},async created(){let e=await fetch("https://localhost:44368/api/Jobs",{method:"GET",credentials:"include",headers:{Authorization:"Bearer "+localStorage.getItem("token"),"Content-Type":"jobs/json"}});e.ok?this.jobList=await e.json():alert("Response not ok "+e.statusText);let t=localStorage.getItem("token"),n=t.split(".")[1],i=window.atob(n),a=JSON.parse(i),o=a["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];"Manager"==o?this.isManager=!0:"Model"==o&&(this.isModel=!0)}},$=M,j=(n("f170"),Object(p["a"])($,P,N,!1,null,"ada441dc",null)),O=j.exports,S=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"createpage",attrs:{id:"create"}},[n("h1",[e._v("Opret")]),n("span",[n("p",[e._v("Which do you want to create?:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.input.picked,expression:"input.picked"}],attrs:{type:"radio",id:"model",value:"model"},domProps:{checked:e._q(e.input.picked,"model")},on:{change:function(t){e.$set(e.input,"picked","model")}}}),n("label",[e._v("Model")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.input.picked,expression:"input.picked"}],attrs:{type:"radio",id:"manager",value:"manager"},domProps:{checked:e._q(e.input.picked,"manager")},on:{change:function(t){e.$set(e.input,"picked","manager")}}}),n("label",[e._v("Manager")])]),n("br"),n("span",[e._v("Picked: "+e._s(e.input.picked))]),n("p",[e._v("First name:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.input.firstname,expression:"input.firstname"}],attrs:{type:"text",name:"firstname",placeholder:"First name"},domProps:{value:e.input.firstname},on:{input:function(t){t.target.composing||e.$set(e.input,"firstname",t.target.value)}}}),n("br"),n("p",[e._v("Last name:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.input.lastname,expression:"input.lastname"}],attrs:{type:"text",name:"lastname",placeholder:"Last name"},domProps:{value:e.input.lastname},on:{input:function(t){t.target.composing||e.$set(e.input,"lastname",t.target.value)}}}),n("br"),n("p",[e._v("Email:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.input.email,expression:"input.email"}],attrs:{type:"text",name:"email",placeholder:"Email"},domProps:{value:e.input.email},on:{input:function(t){t.target.composing||e.$set(e.input,"email",t.target.value)}}}),n("br"),n("p",[e._v("Password:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.input.password,expression:"input.password"}],attrs:{type:"text",name:"password",placeholder:"Password"},domProps:{value:e.input.password},on:{input:function(t){t.target.composing||e.$set(e.input,"password",t.target.value)}}}),n("br"),n("div",{directives:[{name:"show",rawName:"v-show",value:e.input.picked==e.input.isModel,expression:"input.picked == input.isModel"}]},[n("p",[e._v("Phone number:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.input.phoneno,expression:"input.phoneno"}],attrs:{type:"text",name:"phoneno",placeholder:"Phone number"},domProps:{value:e.input.phoneno},on:{input:function(t){t.target.composing||e.$set(e.input,"phoneno",t.target.value)}}}),n("br"),n("p",[e._v("Adress line:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.input.adressline1,expression:"input.adressline1"}],attrs:{type:"text",name:"adressline1",placeholder:"Adress"},domProps:{value:e.input.adressline1},on:{input:function(t){t.target.composing||e.$set(e.input,"adressline1",t.target.value)}}}),n("br"),n("p",[e._v("Adress line continued:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.input.adressline2,expression:"input.adressline2"}],attrs:{type:"text",name:"adressline2",placeholder:"Adress continued"},domProps:{value:e.input.adressline2},on:{input:function(t){t.target.composing||e.$set(e.input,"adressline2",t.target.value)}}}),n("br"),n("p",[e._v("City:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.input.city,expression:"input.city"}],attrs:{type:"text",name:"city",placeholder:"City"},domProps:{value:e.input.city},on:{input:function(t){t.target.composing||e.$set(e.input,"city",t.target.value)}}}),n("br"),n("p",[e._v("Zip:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.input.zip,expression:"input.zip"}],attrs:{type:"text",name:"zip",placeholder:"Zip"},domProps:{value:e.input.zip},on:{input:function(t){t.target.composing||e.$set(e.input,"zip",t.target.value)}}}),n("br"),n("p",[e._v("Country:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.input.country,expression:"input.country"}],attrs:{type:"text",name:"country",placeholder:"Country"},domProps:{value:e.input.country},on:{input:function(t){t.target.composing||e.$set(e.input,"country",t.target.value)}}}),n("br"),n("p",[e._v("Nationality:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.input.nationality,expression:"input.nationality"}],attrs:{type:"text",name:"nationality",placeholder:"Nationality"},domProps:{value:e.input.nationality},on:{input:function(t){t.target.composing||e.$set(e.input,"nationality",t.target.value)}}}),n("br"),n("p",[e._v("Birthday:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.input.birthday,expression:"input.birthday"}],attrs:{type:"text",name:"birthday",placeholder:"Birthday"},domProps:{value:e.input.birthday},on:{input:function(t){t.target.composing||e.$set(e.input,"birthday",t.target.value)}}}),n("br"),n("p",[e._v("Height:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.input.height,expression:"input.height"}],attrs:{type:"text",name:"height",placeholder:"Height"},domProps:{value:e.input.height},on:{input:function(t){t.target.composing||e.$set(e.input,"height",t.target.value)}}}),n("br"),n("p",[e._v("Shoe size:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.input.shoesize,expression:"input.shoesize"}],attrs:{type:"text",name:"shoesize",placeholder:"Shoe size"},domProps:{value:e.input.shoesize},on:{input:function(t){t.target.composing||e.$set(e.input,"shoesize",t.target.value)}}}),n("br"),n("p",[e._v("Hair color:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.input.haircolor,expression:"input.haircolor"}],attrs:{type:"text",name:"haircolor",placeholder:"Hair color"},domProps:{value:e.input.haircolor},on:{input:function(t){t.target.composing||e.$set(e.input,"haircolor",t.target.value)}}}),n("br"),n("p",[e._v("Eye color:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.input.eyecolor,expression:"input.eyecolor"}],attrs:{type:"text",name:"eyecolor",placeholder:"Eye color"},domProps:{value:e.input.eyecolor},on:{input:function(t){t.target.composing||e.$set(e.input,"eyecolor",t.target.value)}}}),n("br"),n("p",[e._v("Comments:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.input.comments,expression:"input.comments"}],attrs:{type:"text",name:"comments",placeholder:"Comments"},domProps:{value:e.input.comments},on:{input:function(t){t.target.composing||e.$set(e.input,"comments",t.target.value)}}}),n("br")]),n("br"),n("br"),n("button",{attrs:{type:"button"},on:{click:function(t){e.create()}}},[e._v("Create "+e._s(e.input.picked))])])},z=[],E={name:"createpage",data(){return{input:{firstname:"",lastname:"",email:"",password:"",phoneno:"",adressline1:"",adressline2:"",city:"",zip:"",country:"",nationality:"",birthday:"",height:"",shoesize:"",haircolor:"",eyecolor:"",comments:"",picked:null,isModel:"model",isManager:"manager"}}},props:{isModel:!0},methods:{async create(){this.input.picked==this.input.isManager?""!=this.input.firstname&&""!=this.input.lastname&&""!=this.input.email&&""!=this.input.password?fetch("https://localhost:44368/api/Managers",{method:"POST",credentials:"include",headers:{Authorization:"Bearer "+localStorage.getItem("token"),"Content-Type":"application/json"},body:JSON.stringify({firstName:this.input.firstname,lastName:this.input.lastname,email:this.input.email,password:this.input.password})}).then(e=>{if(!e.ok)throw 400==e.status?new Error(e.statusText):new Error("Network response was not ok")}):this.input.firstname="Manager gik galt":this.input.picked==this.input.isModel?""!=this.input.firstname&&""!=this.input.lastname&&""!=this.input.email&&""!=this.input.password&&""!=this.input.phoneno&&""!=this.input.adressline1&&""!=this.input.city&&""!=this.input.zip&&""!=this.input.country&&""!=this.input.nationality&&""!=this.input.birthday&&""!=this.input.height&&""!=this.input.shoesize&&""!=this.input.haircolor&&""!=this.input.eyecolor?fetch("https://localhost:44368/api/Models",{method:"POST",credentials:"include",headers:{Authorization:"Bearer "+localStorage.getItem("token"),"Content-Type":"application/json"},body:JSON.stringify({firstName:this.input.firstname,lastName:this.input.lastname,email:this.input.email,password:this.input.password})}).then(e=>{if(!e.ok)throw 400==e.status?new Error(e.statusText):new Error("Network response was not ok")}):this.input.firstname="Model gik galt":this.input.lastname="noget med radio"}}},C=E,T=(n("eb77"),Object(p["a"])(C,S,z,!1,null,"4d89556c",null)),J=T.exports;i["a"].use(m["a"]);var A=new m["a"]({mode:"history",base:"/",routes:[{path:"/",component:k},{path:"/startPage",component:f},{path:"/jobs",component:O},{path:"/createpage",component:J}]});i["a"].config.productionTip=!0,new i["a"]({router:A,render:e=>e(l)}).$mount("#app")},a6eb:function(e,t,n){"use strict";var i=n("c912"),a=n.n(i);a.a},c912:function(e,t,n){},eb77:function(e,t,n){"use strict";var i=n("4f0e"),a=n.n(i);a.a},f170:function(e,t,n){"use strict";var i=n("2242"),a=n.n(i);a.a}});
//# sourceMappingURL=app.355c4a75.js.map