(function(e){function t(t){for(var a,s,r=t[0],l=t[1],p=t[2],d=0,c=[];d<r.length;d++)s=r[d],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&c.push(i[s][0]),i[s]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);u&&u(t);while(c.length)c.shift()();return o.push.apply(o,p||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,r=1;r<n.length;r++){var l=n[r];0!==i[l]&&(a=!1)}a&&(o.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},i={app:0},o=[];function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=t,r=r.slice();for(var p=0;p<r.length;p++)t(r[p]);var u=l;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var a=n("c21b"),i=n.n(a);i.a},"0744":function(e,t,n){},"22eb":function(e,t,n){},"383d":function(e,t,n){},"44f1":function(e,t,n){"use strict";var a=n("aa79"),i=n.n(a);i.a},"4ca5":function(e,t,n){"use strict";var a=n("383d"),i=n.n(a);i.a},"508b":function(e,t,n){"use strict";var a=n("0744"),i=n.n(a);i.a},"56d7":function(e,t,n){"use strict";n.r(t);var a=n("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},["/"!==this.$route.path?n("div",{staticClass:"routing"},[n("Nav")],1):e._e(),n("router-view")],1)},o=[],s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("nav",{staticClass:"navbar container",attrs:{role:"navigation","aria-label":"main navigation"}},[e._m(0),n("div",{staticClass:"navbar-menu",attrs:{id:"navbar"}},[n("div",{staticClass:"navbar-start"},[n("router-link",{staticClass:"navbar-item",attrs:{to:"/jobs"}},[e._v("Jobs")]),n("router-link",{staticClass:"navbar-item",attrs:{to:"/createpage"}},[e._v("Create manager or model")])],1),e._m(1)])])},r=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"navbar-brand"},[n("p",{staticClass:"navbar-item"},[n("strong",{staticClass:"is-size-4"},[e._v("Company Name")])]),n("a",{staticClass:"navbar-burger burger",attrs:{role:"button","aria-label":"menu","aria-expanded":"false","data-target":"navbarBasicExample"}},[n("span",{attrs:{"aria-hidden":"true"}}),n("span",{attrs:{"aria-hidden":"true"}}),n("span",{attrs:{"aria-hidden":"true"}})])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"navbar-end"},[n("div",{staticClass:"navbar-item"},[n("div",{staticClass:"buttons",attrs:{onclick:"logout"}},[n("a",{staticClass:"button is-dark"},[n("strong",[e._v("Log Out")])])])])])}],l={name:"Nav"},p=l,u=(n("44f1"),n("2877")),d=Object(u["a"])(p,s,r,!1,null,"7669c818",null),c=d.exports,m={name:"app",components:{Nav:c}},h=m,v=(n("034f"),Object(u["a"])(h,i,o,!1,null,null,null)),g=v.exports,f=n("8c4f"),b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.isManager?n("span",[e._v("Now you see me")]):e._e()])},y=[],_={name:"StartPage",created(){let e=localStorage.getItem("token"),t=e.split(".")[1],n=window.atob(t),a=JSON.parse(n),i=a["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];"Manager"==i?this.isManager=!0:"Model"==i&&(this.isModel=!0)},data:function(){return{isManager:!1,isModel:!1}}},w=_,x=Object(u["a"])(w,b,y,!1,null,null,null),k=x.exports,M=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home",attrs:{id:"login"}},[n("h1",[e._v("Welcome to Model Management")]),n("p",[e._v("First you need to login")]),n("br"),n("input",{directives:[{name:"model",rawName:"v-model",value:e.input.username,expression:"input.username"}],attrs:{type:"text",name:"username",placeholder:"Username"},domProps:{value:e.input.username},on:{input:function(t){t.target.composing||e.$set(e.input,"username",t.target.value)}}}),n("br"),n("input",{directives:[{name:"model",rawName:"v-model",value:e.input.password,expression:"input.password"}],attrs:{type:"password",name:"password",placeholder:"Password"},domProps:{value:e.input.password},on:{input:function(t){t.target.composing||e.$set(e.input,"password",t.target.value)}}}),n("br"),n("button",{attrs:{type:"button"},on:{click:function(t){e.login()}}},[e._v("Login")])])},N=[],j={name:"Home",props:{},data(){return{input:{username:"",password:""}}},methods:{login(){""!=this.input.username&&""!=this.input.password&&fetch("https://localhost:44368/api/Account/login",{method:"POST",body:JSON.stringify({email:this.input.username,password:this.input.password}),headers:new Headers({"Content-Type":"application/json"})}).then(e=>{if(!e.ok)throw new Error("Network response was not ok");e.json().then(t=>{e.status&&localStorage.setItem("token",t.jwt),this.$router.push("/jobs")})})}}},P=j,C=(n("c61e"),Object(u["a"])(P,M,N,!1,null,"64a0f8e9",null)),S=C.exports,$=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"jobs",attrs:{id:"list"}},[n("h1",[e._v("Jobs")]),e._m(0),e._l(e.jobList,function(t){return n("div",{key:t.id,on:{click:function(n){e.updateSelectedJob(t)}}},[n("table",[n("tr",[n("td",[e._v(e._s(t.customer))]),n("td",[e._v(e._s(t.startDate))]),n("td",[e._v(e._s(t.days))]),n("td",[e._v(e._s(t.location))]),n("td",[e._v(e._s(t.comments))]),n("td",[e._v(e._s(e.getModels()))]),n("td",[e._v(e._s(e.getExpense(t)))])])])])}),n("p",[e._v("Selected job: "+e._s(e.selectedJob.customer)+" "+e._s(e.selectedJob.location))]),e._m(1),e._l(e.modelList,function(t){return e.isManager?n("div",{key:t.id,on:{click:function(n){e.updateSelectedModel(t)}}},[n("table",[n("tr",[n("td",[e._v(e._s(t.firstName))]),n("td",[e._v(e._s(t.lastName))])])])]):e._e()}),n("p",[e._v("Selected model: "+e._s(e.selectedModel.firstName)+" "+e._s(e.selectedModel.lastName))]),e.isManager?n("div",[n("button",{attrs:{type:"button"},on:{click:function(t){e.addModel()}}},[e._v("Add selected model to selected job")]),n("button",{attrs:{type:"button"},on:{click:function(t){e.addModel()}}},[e._v("Delete selected model from selected job")])]):e._e()],2)},E=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("table",[n("tr",[n("th",[e._v("Customer")]),n("th",[e._v("Start Date")]),n("th",[e._v("Days")]),n("th",[e._v("Location")]),n("th",[e._v("Comments")]),n("th",[e._v("Models")]),n("th",[e._v("Expenses")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("table",[n("tr",[n("th",[e._v("First Name")]),n("th",[e._v("Last Name")])])])}],z={name:"Jobs",data(){return{jobList:[],modelList:[],expenseList:[],jobModelList:[],selectedJob:{},selectedModel:{},expense:0,jobModels:{},isManager:!1}},methods:{updateSelectedJob(e){this.selectedJob=e},updateSelectedModel(e){this.selectedModel=e},getExpense(e){return this.expense=0,this.expenseList.forEach(t=>{t["jobId"]==e["efJobId"]&&(this.expense+=t["amount"])}),this.expense},getModels(){var e="";return this.jobModelList["1"]["models"].forEach(t=>e+=t["firstName"]+" "+t["lastName"]+" "),e},async addModel(){let e=await fetch("https://localhost:44368/api/Jobs/"+this.selectedJob["efJobId"]+"/model/"+this.selectedModel["efModelId"],{method:"POST",credentials:"include",headers:new Headers({Authorization:"Bearer "+localStorage.getItem("token"),"Content-Type":"application/json"})});e.ok?alert("Model has been added. Please refresh page"):alert("Response not ok "+e.statusText)},async deleteModel(){let e=await fetch("https://localhost:44368/api/Jobs/"+this.selectedJob["efJobId"]+"/model/"+this.selectedModel["efModelId"],{method:"DELETE",credentials:"include",headers:new Headers({Authorization:"Bearer "+localStorage.getItem("token"),"Content-Type":"application/json"})});e.ok?alert("Model has been delected. Please refresh page"):alert("Response not ok "+e.statusText)}},async created(){let e=await fetch("https://localhost:44368/api/Jobs",{method:"GET",credentials:"include",headers:{Authorization:"Bearer "+localStorage.getItem("token"),"Content-Type":"application/json"}});e.ok?(this.jobList=await e.json(),this.jobList.forEach(async e=>{let t=await fetch("https://localhost:44368/api/Jobs/"+e["efJobId"],{method:"GET",credentials:"include",headers:{Authorization:"Bearer "+localStorage.getItem("token"),"Content-Type":"application/json"}});t.ok&&this.jobModelList.push(await t.json())})):alert("Response not ok "+e.statusText);let t=await fetch("https://localhost:44368/api/Models",{method:"GET",credentials:"include",headers:{Authorization:"Bearer "+localStorage.getItem("token"),"Content-Type":"application/json"}});t.ok?this.modelList=await t.json():alert("Response not ok "+t.statusText);let n=await fetch("https://localhost:44368/api/Expenses",{method:"GET",credentials:"include",headers:{Authorization:"Bearer "+localStorage.getItem("token"),"Content-Type":"application/json"}});n.ok?this.expenseList=await n.json():alert("Response not ok "+n.statusText);let a=localStorage.getItem("token"),i=a.split(".")[1],o=window.atob(i),s=JSON.parse(o),r=s["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];"Manager"==r&&(this.isManager=!0)}},O=z,T=(n("4ca5"),Object(u["a"])(O,$,E,!1,null,"08a6dd89",null)),J=T.exports,L=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"createpage",attrs:{id:"create"}},[n("h1",[e._v("Opret")]),n("span",[e._v("\n        Which do you want to create?:\n        "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.input.picked,expression:"input.picked"}],attrs:{type:"radio",id:"model",value:"model"},domProps:{checked:e._q(e.input.picked,"model")},on:{change:function(t){e.$set(e.input,"picked","model")}}}),n("label",[e._v("Model")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.input.picked,expression:"input.picked"}],attrs:{type:"radio",id:"manager",value:"manager"},domProps:{checked:e._q(e.input.picked,"manager")},on:{change:function(t){e.$set(e.input,"picked","manager")}}}),n("label",[e._v("Manager")])]),n("br"),n("span",[e._v("Picked: "+e._s(e.input.picked))]),n("p",[e._v("First name:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.input.firstname,expression:"input.firstname"}],attrs:{type:"text",name:"firstname",placeholder:"First name"},domProps:{value:e.input.firstname},on:{input:function(t){t.target.composing||e.$set(e.input,"firstname",t.target.value)}}}),n("br"),n("p",[e._v("Last name:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.input.lastname,expression:"input.lastname"}],attrs:{type:"text",name:"lastname",placeholder:"Last name"},domProps:{value:e.input.lastname},on:{input:function(t){t.target.composing||e.$set(e.input,"lastname",t.target.value)}}}),n("br"),n("p",[e._v("Email:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.input.email,expression:"input.email"}],attrs:{type:"text",name:"email",placeholder:"Email"},domProps:{value:e.input.email},on:{input:function(t){t.target.composing||e.$set(e.input,"email",t.target.value)}}}),n("br"),n("p",[e._v("Password:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.input.password,expression:"input.password"}],attrs:{type:"text",name:"password",placeholder:"Password"},domProps:{value:e.input.password},on:{input:function(t){t.target.composing||e.$set(e.input,"password",t.target.value)}}}),n("br"),n("div",{directives:[{name:"show",rawName:"v-show",value:e.input.picked==e.input.isModel,expression:"input.picked == input.isModel"}]},[n("p",[e._v("Phone number:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.input.phoneno,expression:"input.phoneno"}],attrs:{type:"text",name:"phoneno",placeholder:"Phone number"},domProps:{value:e.input.phoneno},on:{input:function(t){t.target.composing||e.$set(e.input,"phoneno",t.target.value)}}}),n("br"),n("p",[e._v("Adress line:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.input.adressline1,expression:"input.adressline1"}],attrs:{type:"text",name:"adressline1",placeholder:"Adress"},domProps:{value:e.input.adressline1},on:{input:function(t){t.target.composing||e.$set(e.input,"adressline1",t.target.value)}}}),n("br"),n("p",[e._v("Adress line continued:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.input.adressline2,expression:"input.adressline2"}],attrs:{type:"text",name:"adressline2",placeholder:"Adress continued"},domProps:{value:e.input.adressline2},on:{input:function(t){t.target.composing||e.$set(e.input,"adressline2",t.target.value)}}}),n("br"),n("p",[e._v("City:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.input.city,expression:"input.city"}],attrs:{type:"text",name:"city",placeholder:"City"},domProps:{value:e.input.city},on:{input:function(t){t.target.composing||e.$set(e.input,"city",t.target.value)}}}),n("br"),n("p",[e._v("Zip:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.input.zip,expression:"input.zip"}],attrs:{type:"text",name:"zip",placeholder:"Zip"},domProps:{value:e.input.zip},on:{input:function(t){t.target.composing||e.$set(e.input,"zip",t.target.value)}}}),n("br"),n("p",[e._v("Country:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.input.country,expression:"input.country"}],attrs:{type:"text",name:"country",placeholder:"Country"},domProps:{value:e.input.country},on:{input:function(t){t.target.composing||e.$set(e.input,"country",t.target.value)}}}),n("br"),n("p",[e._v("Nationality:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.input.nationality,expression:"input.nationality"}],attrs:{type:"text",name:"nationality",placeholder:"Nationality"},domProps:{value:e.input.nationality},on:{input:function(t){t.target.composing||e.$set(e.input,"nationality",t.target.value)}}}),n("br"),n("p",[e._v("Birthday:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.input.birthdate,expression:"input.birthdate"}],attrs:{type:"date",name:"birthdate",placeholder:"Birth date"},domProps:{value:e.input.birthdate},on:{input:function(t){t.target.composing||e.$set(e.input,"birthdate",t.target.value)}}}),n("br"),n("p",[e._v("Height:")]),n("input",{directives:[{name:"model",rawName:"v-model.number",value:e.input.height,expression:"input.height",modifiers:{number:!0}}],attrs:{type:"number",name:"height",placeholder:"Height"},domProps:{value:e.input.height},on:{input:function(t){t.target.composing||e.$set(e.input,"height",e._n(t.target.value))},blur:function(t){e.$forceUpdate()}}}),n("br"),n("p",[e._v("Shoe size:")]),n("input",{directives:[{name:"model",rawName:"v-model.number",value:e.input.shoesize,expression:"input.shoesize",modifiers:{number:!0}}],attrs:{type:"number",name:"shoesize",placeholder:"Shoe size"},domProps:{value:e.input.shoesize},on:{input:function(t){t.target.composing||e.$set(e.input,"shoesize",e._n(t.target.value))},blur:function(t){e.$forceUpdate()}}}),n("br"),n("p",[e._v("Hair color:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.input.haircolor,expression:"input.haircolor"}],attrs:{type:"text",name:"haircolor",placeholder:"Hair color"},domProps:{value:e.input.haircolor},on:{input:function(t){t.target.composing||e.$set(e.input,"haircolor",t.target.value)}}}),n("br"),n("p",[e._v("Eye color:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.input.eyecolor,expression:"input.eyecolor"}],attrs:{type:"text",name:"eyecolor",placeholder:"Eye color"},domProps:{value:e.input.eyecolor},on:{input:function(t){t.target.composing||e.$set(e.input,"eyecolor",t.target.value)}}}),n("br"),n("p",[e._v("Comments:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.input.comments,expression:"input.comments"}],attrs:{type:"text",name:"comments",placeholder:"Comments"},domProps:{value:e.input.comments},on:{input:function(t){t.target.composing||e.$set(e.input,"comments",t.target.value)}}}),n("br")]),n("br"),n("br"),n("button",{attrs:{type:"button"},on:{click:function(t){e.create()}}},[e._v("Create "+e._s(e.input.picked))])])},I=[],A={name:"createpage",data(){return{input:{firstname:"",lastname:"",email:"",password:"",phoneno:"",adressline1:"",adressline2:"",city:"",zip:"",country:"",nationality:"",birthdate:null,height:null,shoesize:null,haircolor:"",eyecolor:"",comments:"",picked:"manager",isModel:"model",isManager:"manager"}}},props:{},methods:{async create(){this.input.picked==this.input.isManager?""!=this.input.firstname&&""!=this.input.lastname&&""!=this.input.email&&""!=this.input.password?fetch("https://localhost:44368/api/Managers",{method:"POST",credentials:"include",headers:{Authorization:"Bearer "+localStorage.getItem("token"),"Content-Type":"application/json"},body:JSON.stringify({firstName:this.input.firstname,lastName:this.input.lastname,email:this.input.email,password:this.input.password})}).then(e=>{if(!e.ok)throw 400==e.status?new Error(e.statusText):new Error("Network response was not ok")}):this.input.firstname="Manager gik galt":this.input.picked==this.input.isModel&&(""!=this.input.firstname&&""!=this.input.lastname&&""!=this.input.email&&""!=this.input.password&&""!=this.input.phoneno&&""!=this.input.adressline1&&""!=this.input.city&&""!=this.input.zip&&""!=this.input.country&&""!=this.input.nationality&&""!=this.input.birthday&&""!=this.input.height&&""!=this.input.shoesize&&""!=this.input.haircolor&&""!=this.input.eyecolor?fetch("https://localhost:44368/api/Models",{method:"POST",credentials:"include",headers:{Authorization:"Bearer "+localStorage.getItem("token"),"Content-Type":"application/json"},body:JSON.stringify({firstName:this.input.firstname,lastName:this.input.lastname,email:this.input.email,phoneNo:this.input.phoneno,adressline1:this.input.adressline1,adressline2:this.input.adressline2,zip:this.input.zip,city:this.input.city,country:this.input.country,birthDate:this.input.birthdate,nationality:this.input.nationality,height:this.input.height,shoeSize:this.input.shoesize,hairColor:this.input.haircolor,eyeColor:this.input.eyecolor,comments:this.input.comments,password:this.input.password})}).then(e=>{if(!e.ok)throw 400==e.status?new Error(e.statusText):new Error("Network response was not ok")}):this.input.firstname="Model gik galt")}}},B=A,H=(n("508b"),Object(u["a"])(B,L,I,!1,null,"8e0f1944",null)),D=H.exports;a["a"].use(f["a"]);var R=new f["a"]({mode:"history",base:"/",routes:[{path:"/",component:S},{path:"/startPage",component:k},{path:"/jobs",component:J},{path:"/createpage",component:D}]});n("92c6");a["a"].config.productionTip=!0,new a["a"]({router:R,render:e=>e(g)}).$mount("#app")},aa79:function(e,t,n){},c21b:function(e,t,n){},c61e:function(e,t,n){"use strict";var a=n("22eb"),i=n.n(a);i.a}});
//# sourceMappingURL=app.8317d438.js.map