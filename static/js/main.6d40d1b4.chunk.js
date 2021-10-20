(this["webpackJsonpmy-react-app"]=this["webpackJsonpmy-react-app"]||[]).push([[0],{35:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(17),i=n.n(r),s=n(23),l=n(9),o=n(7),j=n(0);function d(e){return Object(j.jsx)("div",{children:Object(j.jsx)("nav",{class:"navbar navbar-expand-lg navbar-light bg-light",children:Object(j.jsxs)("div",{class:"container-fluid",children:[Object(j.jsx)(o.b,{class:"navbar-brand",to:"/React-FLP/",children:e.title}),Object(j.jsx)("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(j.jsx)("span",{class:"navbar-toggler-icon"})}),Object(j.jsx)("div",{class:"collapse navbar-collapse",id:"navbarNav",children:Object(j.jsxs)("ul",{class:"navbar-nav",children:[Object(j.jsx)("li",{class:"nav-item",children:Object(j.jsx)(o.b,{class:"nav-link active","aria-current":"page",to:"/React-FLP/",children:"Home"})}),Object(j.jsx)("li",{class:"nav-item",children:Object(j.jsx)(o.b,{class:"nav-link active","aria-current":"page",to:"/React-FLP/add_item",children:"Add Item"})}),Object(j.jsx)("li",{class:"nav-item",children:Object(j.jsx)(o.b,{class:"nav-link active","aria-current":"page",to:"/React-FLP/my_cart",children:"My Cart"})})]})})]})})})}function b(e){var t=Object(c.useState)(""),n=Object(l.a)(t,2),a=(n[0],n[1]);return Object(j.jsx)("div",{class:"container",children:Object(j.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n=document.querySelector(".form-select");e.addItem(n.value)},children:[Object(j.jsxs)("select",{class:"form-select","aria-label":"Default select example",onChange:function(e){a(e.target.value)},children:[Object(j.jsx)("option",{value:"Bag",children:"Bag"}),Object(j.jsx)("option",{value:"Pen",children:"Pen"}),Object(j.jsx)("option",{value:"Pencil",children:"Pencil"}),Object(j.jsx)("option",{value:"Eraser",children:"Eraser"}),Object(j.jsx)("option",{value:"Sharpner",children:"Sharpner"}),Object(j.jsx)("option",{value:"Ruler",children:"Ruler"}),Object(j.jsx)("option",{value:"Protactor",children:"Protactor"}),Object(j.jsx)("option",{value:"Rounder",children:"Rounder"}),Object(j.jsx)("option",{value:"Wax Crayon",children:"Wax Crayon"}),Object(j.jsx)("option",{value:"Pencil Color",children:"Pencil Color"}),Object(j.jsx)("option",{value:"Red Pen",children:"Red Pen"})]}),Object(j.jsx)("button",{type:"submit",class:"btn btn-primary",children:"Add"})]})})}function u(e){var t=e.item,n=e.onDelete;return Object(j.jsxs)("div",{class:"container",children:[Object(j.jsx)("p",{children:t.name}),Object(j.jsx)("button",{type:"button",class:"btn btn-sm btn-danger",onClick:function(){return n(t)},children:"Delete"})]})}function x(e){return Object(j.jsxs)("div",{class:"container",style:{minHeight:"70vh"},children:[Object(j.jsx)("h3",{children:"Items in your Cart"}),0===e.items.length?"No items to display":e.items.map((function(t){return Object(j.jsx)(u,{item:t,onDelete:e.onDelete})}))]})}function h(){return Object(j.jsx)("footer",{class:"bg-dark text-light py-3",children:Object(j.jsx)("p",{class:"text-center",children:"Copyright \xa9 ShopHere.com"})})}var v=n(20),O=n(21),p=n(24),m=n(22);function f(){var e=Object(c.useReducer)((function(e,t){switch(t){case"add":return e+1;case"reset":return 0}}),0),t=Object(l.a)(e,2),n=t[0],a=t[1];Object(c.useEffect)((function(){document.title="React App clicked ".concat(n," times")}));var r=Object(c.useContext)(k);return Object(j.jsxs)("div",{children:[Object(j.jsxs)("p",{children:["You clicked ",n," times"]}),Object(j.jsx)("button",{onClick:function(){return a("add")},children:"Click me"}),Object(j.jsx)("button",{onClick:function(){return a("reset")},children:"Reset"}),Object(j.jsxs)("div",{children:["User context value ",r]})]})}var g=function(e){Object(p.a)(n,e);var t=Object(m.a)(n);function n(e){var c;return Object(v.a)(this,n),(c=t.call(this,e)).changeText=function(){c.setState({text:"Welcome Folks!"})},c.state={text:"Hello there!"},c}return Object(O.a)(n,[{key:"shouldComponentUpdate",value:function(){return!0}},{key:"componentDidMount",value:function(){var e=this;setTimeout((function(){e.setState({text:"Welcome"})}),3e3)}},{key:"getSnapshotBeforeUpdate",value:function(e,t){document.getElementById("div1").innerHTML="Before the update, the text was "+t.text}},{key:"componentDidUpdate",value:function(){document.getElementById("div2").innerHTML="The updated text is "+this.state.text}},{key:"render",value:function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{children:this.state.text}),Object(j.jsx)("div",{id:"div1"}),Object(j.jsx)("div",{id:"div2"}),Object(j.jsx)("button",{type:"button",onClick:this.changeText,children:"Change text"})]}),Object(j.jsx)(f,{})]})}}]),n}(a.a.Component),y=n(2),k=a.a.createContext();var C=function(){var e=Object(c.useState)([{name:"bag"},{name:"pen"},{name:"bottle"},{name:"eraser"}]),t=Object(l.a)(e,2),n=t[0],a=t[1],r=function(e){var t={name:e};a([].concat(Object(s.a)(n),[t]))},i=function(e){a(n.filter((function(t){return t!==e})))};return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)(o.a,{children:[Object(j.jsx)(d,{title:"Shop Here"}),Object(j.jsxs)(y.c,{children:[Object(j.jsx)(y.a,{exact:!0,path:"/React-FLP/",render:function(){return Object(j.jsx)(k.Provider,{value:"Risha",children:Object(j.jsx)(g,{})})}}),Object(j.jsx)(y.a,{exact:!0,path:"/React-FLP/add_item",render:function(){return Object(j.jsx)(b,{addItem:r})}}),Object(j.jsx)(y.a,{exact:!0,path:"/React-FLP/my_cart",render:function(){return Object(j.jsx)(x,{items:n,onDelete:i})}})]}),Object(j.jsx)(h,{})]})})};i.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(C,{})}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.6d40d1b4.chunk.js.map