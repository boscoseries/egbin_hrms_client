(this["webpackJsonpegbin-client"]=this["webpackJsonpegbin-client"]||[]).push([[16],{701:function(e,t,n){"use strict";n.r(t);var c=n(20),s=n(1),a=n(634),r=n.n(a),i=n(635),j=n(9),l=n(633),o=n(163),d=n(631),b=n(22),u=n(89),h=n(628),m=n(629),O=function(){var e=Object(b.g)(),t=Object(u.e)(),n=Object(o.b)(),a=Object(o.c)((function(e){return e})),O=a.users,x=O.loggedinUser,p=O.user,f=a.users.users.results,v=Object(s.useState)(""),y=Object(l.a)(v,2),g=y[0],_=y[1],w=Object(s.useState)({}),D=Object(l.a)(w,2),k=D[0],C=D[1];Object(s.useLayoutEffect)((function(){_(x[k.type]),n(Object(d.h)()),n(Object(d.g)(x.user_id))}),[k.type,x,n]);var F=function(e){var t=e.target.name,n=e.target.value;C((function(){return k[t]=n,Object(j.a)({},k)}))},L=function(){var c=Object(i.a)(r.a.mark((function c(){var s;return r.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:if(!(Object.keys(k).length<6)){c.next=2;break}return c.abrupt("return",t.show("Please complete all fields"));case 2:if(!(k.duration>g)){c.next=4;break}return c.abrupt("return",t.show("You can only take "+g+" days"));case 4:if(!(k.duration>=14)){c.next=6;break}return c.abrupt("return",t.show("Please input a duration below 14 days"));case 6:return s=Object(j.a)(Object(j.a)({},k),{},{leave_start:new Date(k.leave_start),leave_end:new Date(k.leave_end),resumption_date:new Date(k.resumption_date)}),c.next=9,n(Object(d.a)(s));case 9:c.sent.id&&e.push("/employee/summary");case 11:case"end":return c.stop()}}),c)})));return function(){return c.apply(this,arguments)}}();return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(h.F,{className:"d-flex justify-content-center",children:Object(c.jsx)(h.j,{xs:"12",md:"6",children:Object(c.jsxs)(h.e,{children:[Object(c.jsx)(h.i,{className:"p-8 ",children:Object(c.jsx)("strong",{children:"Leave Request Form"})}),Object(c.jsxs)(h.f,{children:[Object(c.jsxs)(h.r,{action:"",method:"post",encType:"multipart/form-data",className:"form-horizontal",children:[g&&Object(c.jsxs)(h.s,{row:!0,children:[Object(c.jsx)(h.j,{md:"3",children:Object(c.jsx)(h.D,{children:Object(c.jsx)("strong",{children:"Availabe Days:"})})}),Object(c.jsx)(h.j,{xs:"12",md:"9",children:Object(c.jsx)("p",{className:"form-control-static",children:Object(c.jsx)("strong",{children:g})})})]}),Object(c.jsxs)(h.s,{row:!0,children:[Object(c.jsxs)(h.j,{sm:"12",md:"6",children:[Object(c.jsx)(h.D,{htmlFor:"type",children:"Leave Type"}),Object(c.jsxs)(h.G,{custom:!0,name:"type",id:"type",onChange:F,children:[Object(c.jsx)("option",{value:"",children:"Select Leave Type"}),Object(c.jsx)("option",{value:"annual_leave",children:"Annual Leave"}),Object(c.jsx)("option",{value:"exam_leave",children:"Examination Leave"}),Object(c.jsx)("option",{value:"sick_leave",children:"Sick Leave"}),Object(c.jsx)("option",{value:"compassionate_leave",children:"Compassionate Leave"})]})]}),Object(c.jsxs)(h.j,{md:"6",children:[Object(c.jsx)(h.D,{htmlFor:"duration",children:"Duration"}),Object(c.jsx)(h.y,{id:"duration",name:"duration",type:"number",placeholder:"Number of days",onChange:F,required:!0})]})]}),Object(c.jsxs)(h.s,{row:!0,children:[Object(c.jsxs)(h.j,{sm:"12",md:"6",children:[Object(c.jsx)(h.D,{htmlFor:"leave_start",children:"Start"}),Object(c.jsx)(h.y,{type:"date",id:"leave_start",name:"leave_start",placeholder:"date",onChange:F})]}),Object(c.jsxs)(h.j,{sm:"12",md:"6",children:[Object(c.jsx)(h.D,{htmlFor:"leave_end",children:"End"}),Object(c.jsx)(h.y,{type:"date",id:"leave_end",name:"leave_end",placeholder:"date",onChange:F})]})]}),Object(c.jsxs)(h.s,{row:!0,children:[Object(c.jsxs)(h.j,{sm:"12",md:"6",children:[Object(c.jsx)(h.D,{htmlFor:"resumption_date",children:"Resumption Date"}),Object(c.jsx)(h.y,{type:"date",id:"resumption_date",name:"resumption_date",placeholder:"date",onChange:F})]}),Object(c.jsxs)(h.j,{sm:"12",md:"6",children:[Object(c.jsx)(h.D,{htmlFor:"relieve_staff",children:"Relieve Staff"}),Object(c.jsxs)(h.G,{custom:!0,name:"relieve_staff",id:"relieve_staff",onChange:F,children:[Object(c.jsx)("option",{value:"",children:"Select Employee"}),f&&f.length&&f.filter((function(e){return e.id!==x.user_id})).map((function(e){return Object(c.jsx)("option",{value:e.id,children:"".concat(e.firstname," ").concat(e.lastname)},e.staff_id)}))]})]})]}),Object(c.jsx)(h.s,{row:!0,children:Object(c.jsxs)(h.j,{sm:"12",children:[Object(c.jsx)(h.D,{htmlFor:"description",children:"Description"}),Object(c.jsx)(h.I,{name:"description",id:"description",rows:"4",placeholder:"Tell us why...",onChange:F})]})})]}),Object(c.jsxs)("div",{children:["Reporting Manager: ",p.line_manager&&"".concat(p.line_manager.firstname," ").concat(p.line_manager.lastname)]})]}),Object(c.jsxs)(h.g,{className:"d-flex justify-content-between",children:[Object(c.jsxs)(h.d,{type:"submit",size:"sm",color:"primary",onClick:L,children:[Object(c.jsx)(m.a,{name:"cil-scrubber"})," Submit"]}),Object(c.jsxs)(h.d,{type:"reset",size:"sm",color:"danger",onClick:function(){return e.goBack()},children:[Object(c.jsx)(m.a,{name:"cil-ban"})," Cancel"]})]})]})})})})};t.default=function(){return Object(c.jsx)("div",{children:Object(c.jsx)(O,{})})}}}]);
//# sourceMappingURL=16.ba1c367c.chunk.js.map