(this["webpackJsonpegbin-client"]=this["webpackJsonpegbin-client"]||[]).push([[9],{631:function(e,t,n){"use strict";n.d(t,"i",(function(){return i})),n.d(t,"c",(function(){return s})),n.d(t,"a",(function(){return f})),n.d(t,"f",(function(){return x})),n.d(t,"h",(function(){return l})),n.d(t,"g",(function(){return u})),n.d(t,"l",(function(){return O})),n.d(t,"b",(function(){return d})),n.d(t,"j",(function(){return p})),n.d(t,"e",(function(){return j})),n.d(t,"d",(function(){return y})),n.d(t,"k",(function(){return h}));var a=n(636),c=n(54),r=n(648),o=n(637),i=function(e){return function(t){return o({method:"post",url:"".concat(a.b,"/api/v1/employees/login/"),data:e,headers:{"content-type":"application/json"}}).then((function(e){return t({type:c.e,payload:e.data.result}),localStorage.setItem("key",e.data.result.access),e.data})).catch((function(e){return e}))}},s=function(e){return function(t){var n=Object(r.a)(e);return t({type:c.e,payload:n}),n}},l=function(){return function(e){return o({method:"get",url:"".concat(a.b,"/api/v1/employees/"),headers:{"content-type":"application/json",authorization:a.a}}).then((function(t){return e({type:c.d,payload:t.data}),t.data})).catch((function(e){return e}))}},u=function(e){return function(t){return o({method:"get",url:"".concat(a.b,"/api/v1/employees/").concat(e),headers:{"content-type":"application/json",authorization:a.a}}).then((function(e){return t({type:c.c,payload:e.data}),e.data})).catch((function(e){return e}))}},d=function(e){return function(t){return o({method:"post",url:"".concat(a.b,"/api/v1/employees/"),data:e,headers:{"content-type":"application/json"}}).then((function(e){return t({type:c.a,payload:e.data}),e.data})).catch((function(e){return e}))}},p=function(){return function(e){e({type:c.f})}},j=function(e){return function(t){return o({method:"delete",url:"".concat(a.b,"/api/v1/employees/").concat(e,"/"),headers:{"content-type":"application/json",authorization:a.a}}).then((function(n){return t({type:c.b,payload:"".concat(e)}),n.data}))}},h=function(e){return function(t){return o({method:"post",url:"".concat(a.b,"/api/v1/employees/reset_password/"),data:e,headers:{"content-type":"application/json"}}).then((function(n){return t({type:c.g,payload:e.staff_id}),n.data}))}},m=n(88),b=n(637),f=function(e){return function(t){return b({method:"post",url:"".concat(a.b,"/api/v1/leave/"),data:e,headers:{"content-type":"application/json",authorization:a.a}}).then((function(e){return t({type:m.a,payload:e.data}),e.data})).catch((function(e){return e}))}},x=function(){return function(e){return b({method:"get",url:"".concat(a.b,"/api/v1/leave/"),headers:{"content-type":"application/json",authorization:a.a}}).then((function(t){return e({type:m.c,payload:t.data.results}),t.data.results})).catch((function(e){return e}))}},O=function(e,t){return function(n){return b({method:"patch",url:"".concat(a.b,"/api/v1/leave/").concat(e,"/update_status/"),data:t,headers:{"content-type":"application/json",authorization:a.a}}).then((function(e){return n({type:m.d,payload:e.data}),e.data})).catch((function(e){return e}))}},y=function(e){return function(t){return b({method:"delete",url:"".concat(a.b,"/api/v1/leave/").concat(e,"/"),headers:{"content-type":"application/json",authorization:a.a}}).then((function(n){return t({type:m.b,payload:"".concat(e)}),n.data}))}}},636:function(e,t,n){"use strict";var a;n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return c})),a="https://egbin-api.herokuapp.com";var c="Bearer ".concat(localStorage.getItem("key"))},639:function(e,t,n){"use strict";n.d(t,"a",(function(){return v})),n.d(t,"b",(function(){return k})),n.d(t,"c",(function(){return E})),n.d(t,"d",(function(){return L})),n.d(t,"e",(function(){return S})),n.d(t,"f",(function(){return M})),n.d(t,"g",(function(){return A}));var a=n(20),c=n(10),r=n(1),o=n.n(r),i=n(22),s=n(628),l=n(636),u=o.a.lazy((function(){return Promise.all([n.e(1),n.e(8)]).then(n.bind(null,695))})),d=o.a.lazy((function(){return n.e(13).then(n.bind(null,703))})),p=o.a.lazy((function(){return n.e(17).then(n.bind(null,702))})),j=o.a.lazy((function(){return n.e(16).then(n.bind(null,701))})),h=o.a.lazy((function(){return Promise.all([n.e(1),n.e(7)]).then(n.bind(null,696))})),m=o.a.lazy((function(){return Promise.all([n.e(1),n.e(6)]).then(n.bind(null,697))})),b=o.a.lazy((function(){return n.e(11).then(n.bind(null,698))})),f=o.a.lazy((function(){return n.e(15).then(n.bind(null,704))})),x=o.a.lazy((function(){return n.e(12).then(n.bind(null,699))})),O=[{path:"/",exact:!0,name:"Home",component:p},{path:"/admin/manage/:id",exact:!0,name:"Leave Request Details",component:b},{path:"/dashboard",exact:!0,name:"Dashboard",component:p},{path:"/admin/employees",exact:!0,name:"Employees",component:u},{path:"/admin/employees/:id/update",exact:!0,name:"Employees",component:o.a.lazy((function(){return n.e(14).then(n.bind(null,700))}))},{path:"/admin/employees/:id",exact:!0,name:"Employee Details",component:f},{path:"/admin/manage",exact:!0,name:"Manage Leave Request",component:m},{path:"/admin/onboard",exact:!0,name:"Onboard",component:d},{path:"/request",exact:!0,name:"Request Leave",component:j},{path:"/employee/summary",exact:!0,name:"History",component:h},{path:"/employee/details/:id",exact:!0,name:"Leave Request Details",component:x}],y=Object(a.jsx)("div",{className:"pt-3 text-center",children:Object(a.jsx)("div",{className:"sk-spinner sk-spinner-pulse"})}),g=function(){var e=Object(i.g)();return!l.a||l.a.split(" ")[1].length<400?e.push("/login"):Object(a.jsx)("main",{className:"c-main",children:Object(a.jsx)(s.k,{fluid:!0,children:Object(a.jsx)(r.Suspense,{fallback:y,children:Object(a.jsxs)(i.d,{children:[O.map((function(e,t){return e.component&&Object(a.jsx)(i.b,{path:e.path,exact:e.exact,name:e.name,render:function(t){return Object(a.jsx)(s.p,{children:Object(a.jsx)(e.component,Object(c.a)({},t))})}},t)})),Object(a.jsx)(i.a,{from:"/",to:"/dashboard"})]})})})})},v=o.a.memo(g),N=function(){return Object(a.jsxs)(s.q,{fixed:!1,children:[Object(a.jsxs)("div",{children:[Object(a.jsx)("a",{href:"https://egbin-power.com/",target:"_blank",rel:"noopener noreferrer",children:"Egnin Power"}),Object(a.jsx)("span",{className:"ml-1",children:"\xa9 2020 HRMS"})]}),Object(a.jsxs)("div",{className:"mfs-auto",children:[Object(a.jsx)("span",{className:"mr-1",children:"Powered by"}),Object(a.jsx)("a",{href:"https://egbin-power.com/",target:"_blank",rel:"noopener noreferrer",children:"Egbin Tech."})]})]})},k=o.a.memo(N),w=n(633),z=n(163),E=function(){var e=Object(z.c)((function(e){return e.users.loggedinUser})),t=e.role,n=e.firstname,c=Object(r.useState)(t),o=Object(w.a)(c,2),i=o[0],l=o[1];return Object(r.useLayoutEffect)((function(){l((function(){return t}))}),[t,e]),Object(a.jsxs)(s.t,{withSubheader:!0,children:[Object(a.jsxs)(s.H,{className:"px-3 justify-content-between",children:[Object(a.jsx)("img",{src:"https://theeagleonline.com.ng/wp-content/uploads/2015/10/Egbin-logo.jpg",height:"50",alt:"Logo"}),Object(a.jsxs)("div",{className:"d-flex align-items-center",children:["Welcome,",Object(a.jsx)("span",{children:Object(a.jsx)("strong",{className:"px-2",children:n})})]})]}),Object(a.jsxs)(s.u,{className:"d-md-down-none mr-auto",children:[Object(a.jsx)(s.v,{className:"px-3",children:Object(a.jsx)(s.w,{to:"/dashboard",children:"Dashboard"})}),Object(a.jsx)(s.v,{className:"px-3",children:Object(a.jsx)(s.w,{to:"/request",children:"Request Leave"})}),"ADMIN"===i&&Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(s.v,{className:"px-3",children:Object(a.jsx)(s.w,{to:"/admin/employees",children:"Employees"})}),Object(a.jsx)(s.v,{className:"px-3",children:Object(a.jsx)(s.w,{to:"/admin/onboard",children:"Onboard Employee"})})]}),("ADMIN"===i||"MANAGER"===i)&&Object(a.jsx)(s.v,{className:"px-3",children:Object(a.jsx)(s.w,{to:"/admin/manage",children:"Manage Leave Requests"})})]}),Object(a.jsxs)(s.u,{className:"px-3 d-flex align-items-center justify-content-center",children:[Object(a.jsx)(S,{}),Object(a.jsx)(L,{}),Object(a.jsx)(A,{})]})]})},D=n(629),L=function(){return Object(a.jsxs)(s.l,{inNav:!0,className:"c-header-nav-item mx-2",direction:"down",children:[Object(a.jsxs)(s.o,{className:"c-header-nav-link",caret:!1,children:[Object(a.jsx)(D.a,{name:"cil-envelope-open"}),Object(a.jsx)(s.a,{shape:"pill",color:"info",children:0})]}),Object(a.jsx)(s.n,{className:"pt-0",placement:"bottom-end",children:Object(a.jsx)(s.m,{header:!0,tag:"div",color:"light",children:Object(a.jsxs)("strong",{children:["You have ",0," messages"]})})})]})},S=function(){return Object(a.jsxs)(s.l,{inNav:!0,className:"c-header-nav-item mx-2",children:[Object(a.jsxs)(s.o,{className:"c-header-nav-link",caret:!1,children:[Object(a.jsx)(D.a,{name:"cil-bell"}),Object(a.jsx)(s.a,{shape:"pill",color:"danger",children:0})]}),Object(a.jsx)(s.n,{placement:"bottom-end",className:"pt-0",children:Object(a.jsx)(s.m,{header:!0,tag:"div",className:"text-center",color:"light",children:Object(a.jsxs)("strong",{children:["You have ",0," notifications"]})})})]})},q=n(631),A=function(){var e=Object(i.g)(),t=Object(z.b)();return Object(a.jsxs)(s.l,{inNav:!0,className:"c-header-nav-items mx-2",direction:"down",children:[Object(a.jsx)(s.o,{className:"c-header-nav-link d-block",caret:!1,children:Object(a.jsx)("div",{className:"c-avatar",children:Object(a.jsx)(s.x,{src:"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",className:"c-avatar-img",alt:"",height:100,witdth:100})})}),Object(a.jsxs)(s.n,{className:"pt-0 bg-gradient-secondary text-white",placement:"bottom-end",children:[Object(a.jsx)(s.m,{header:!0,tag:"div",color:"black",className:"text-center",children:Object(a.jsx)("strong",{children:"Account Settings"})}),Object(a.jsx)(s.m,{onClick:function(){return localStorage.removeItem("key"),t(Object(q.j)()),e.push("/login")},children:"Logout"})]})]})},M=function(e){var t=e.statusUpdate,n=e.handleDelete,c=e.displayDetails,o=e.id,i=e.updateKey,l=e.deleteKey,u=e.detailsKey,d=Object(z.c)((function(e){return e.users.loggedinUser})).role,p=Object(r.useState)(d),j=Object(w.a)(p,2),h=j[0],m=j[1];return Object(r.useLayoutEffect)((function(){m(d)}),[d]),Object(a.jsxs)(s.l,{className:"c-header-nav-items mx-2",direction:"up",children:[Object(a.jsx)(s.o,{className:"c-header-nav-link",caret:!1,children:Object(a.jsx)(D.a,{name:"cil-list"})}),Object(a.jsxs)(s.n,{className:"pb-4 bg-secondary",placement:"bottom-end",children:[("ADMIN"===h||"MANAGER"===h)&&i&&Object(a.jsx)(s.m,{onClick:t,children:Object(a.jsx)("strong",{id:o,children:i})}),"ADMIN"===h&&l&&Object(a.jsx)(s.m,{onClick:n,children:Object(a.jsx)("strong",{id:o,children:l})}),u&&Object(a.jsx)(s.m,{onClick:c,children:Object(a.jsx)("strong",{id:o,children:u})})]})]})};n(645)},645:function(e,t,n){"use strict";n.r(t);var a=n(20),c=n(634),r=n.n(c),o=n(635),i=n(1),s=n(639),l=n(631),u=n(22),d=n(163),p=n(636);t.default=function(){var e=Object(d.b)(),t=Object(u.g)(),n=localStorage.getItem("key");return p.a&&p.a.split(" ")[1]||t.push("/login"),Object(i.useLayoutEffect)((function(){(function(){var t=Object(o.a)(r.a.mark((function t(){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e(Object(l.c)(n));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()().then((function(){t.goForward()})).catch((function(){return t.push("/login")}))}),[n,e,t,p.a]),Object(a.jsx)("div",{className:"c-app c-default-layout",children:Object(a.jsxs)("div",{className:"c-wrapper",children:[Object(a.jsx)(s.c,{}),Object(a.jsx)("div",{className:"c-body",children:Object(a.jsx)(s.a,{})}),Object(a.jsx)(s.b,{})]})})}}}]);
//# sourceMappingURL=9.d4712bcc.chunk.js.map