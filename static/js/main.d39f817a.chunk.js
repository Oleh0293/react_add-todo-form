(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(8),i=a.n(n),r=a(7),c=a(2),s=a(4),o=(a(14),a(1)),d=a(9),l=a.n(d),u=a(0),m=function(e){var t=e.user,a=t.email,n=t.name;return Object(u.jsx)("a",{className:"UserInfo",href:"mailto:".concat(a),children:n})},j=function(e){var t=e.todo,a=t.title,n=t.completed,i=t.user,r=t.id;return Object(u.jsxs)("article",{"data-id":r,className:l()("TodoInfo",{"TodoInfo--completed":n}),children:[Object(u.jsx)("h2",{className:"TodoInfo__title",children:a}),i&&Object(u.jsx)(m,{user:i})]})},b=function(e){var t=e.todos;return Object(u.jsx)("section",{className:"TodoList",children:t.map((function(e){return Object(u.jsx)(j,{todo:e},e.id)}))})},h=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}],O=function(e){var t=e.addTodoHandler,a=Object(o.useState)(""),n=Object(c.a)(a,2),i=n[0],r=n[1],s=Object(o.useState)(!1),d=Object(c.a)(s,2),l=d[0],m=d[1],j=Object(o.useState)(0),b=Object(c.a)(j,2),O=b[0],f=b[1],p=Object(o.useState)(!1),x=Object(c.a)(p,2),v=x[0],y=x[1];return Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault();var a=!1;if(""===i&&(m(!0),a=!0),0===O&&(y(!0),a=!0),!a){var n=h.find((function(e){return e.id===O}));t({title:i,completed:!1,userId:O,user:n||null}),r(""),f(0)}},children:[Object(u.jsxs)("div",{className:"field",children:[Object(u.jsx)("input",{type:"text","data-cy":"titleInput",placeholder:"",value:i,onChange:function(e){r(e.target.value),l&&m(!1)}}),l&&Object(u.jsx)("span",{className:"error",children:"Please enter a title"})]}),Object(u.jsxs)("div",{children:[Object(u.jsxs)("select",{"data-cy":"userSelect",value:O,onChange:function(e){f(+e.target.value),v&&y(!1)},children:[Object(u.jsx)("option",{value:"0",disabled:!0,children:"Choose a user"}),h.map((function(e){return Object(u.jsx)("option",{value:e.id,children:e.name},e.id)}))]}),v&&Object(u.jsx)("span",{className:"error",children:"Please choose a user"})]}),Object(u.jsx)("button",{type:"submit","data-cy":"submitButton",children:"Add"})]})};var f=[{id:1,title:"delectus aut autem",completed:!0,userId:1},{id:15,title:"some other todo",completed:!1,userId:1},{id:2,title:"quis ut nam facilis et officia qui",completed:!1,userId:4}].map((function(e){return Object(s.a)(Object(s.a)({},e),{},{user:(t=e.userId,h.find((function(e){return e.id===t}))||null)});var t})),p=function(){var e=Object(o.useState)(f),t=Object(c.a)(e,2),a=t[0],n=t[1];return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("h1",{children:"Add good form"}),Object(u.jsx)(O,{addTodoHandler:function(e){var t=a.map((function(e){return e.id})),i=Math.max.apply(Math,Object(r.a)(t)),c=Object(s.a)(Object(s.a)({},e),{},{id:i+1});n((function(e){return[].concat(Object(r.a)(e),[c])}))}}),Object(u.jsx)(b,{todos:a})]})};i.a.render(Object(u.jsx)(p,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.d39f817a.chunk.js.map