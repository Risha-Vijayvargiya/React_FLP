(this["webpackJsonpmy-react-app"]=this["webpackJsonpmy-react-app"]||[]).push([[0],{13:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(6),i=n.n(r),s=n(4),l=n(7),o=n(0);function j(e){return Object(o.jsx)("div",{children:Object(o.jsx)("nav",{class:"navbar navbar-expand-lg navbar-light bg-light",children:Object(o.jsxs)("div",{class:"container-fluid",children:[Object(o.jsx)("a",{class:"navbar-brand",href:"#",children:e.title}),Object(o.jsx)("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(o.jsx)("span",{class:"navbar-toggler-icon"})}),Object(o.jsx)("div",{class:"collapse navbar-collapse",id:"navbarNav",children:Object(o.jsxs)("ul",{class:"navbar-nav",children:[Object(o.jsx)("li",{class:"nav-item",children:Object(o.jsx)("a",{class:"nav-link active","aria-current":"page",href:"/Home.js",children:"Home"})}),Object(o.jsx)("li",{class:"nav-item",children:Object(o.jsx)("a",{class:"nav-link active","aria-current":"page",href:"/Cart.js",children:"My Cart"})})]})})]})})})}function b(e){var t=Object(a.useState)(""),n=Object(s.a)(t,2),c=n[0],r=n[1];return Object(o.jsx)("div",{class:"container",children:Object(o.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e.addItem(c)},children:[Object(o.jsxs)("select",{class:"form-select","aria-label":"Default select example",onChange:function(e){r(e.target.value)},children:[Object(o.jsx)("option",{selected:!0,children:"Choose Item to add to Cart"}),Object(o.jsx)("option",{value:"Bag",id:"item",children:"Bag"}),Object(o.jsx)("option",{value:"Pen",id:"item",children:"Pen"}),Object(o.jsx)("option",{value:"Pencil",id:"item",children:"Pencil"}),Object(o.jsx)("option",{value:"Eraser",id:"item",children:"Eraser"}),Object(o.jsx)("option",{value:"Sharpner",id:"item",children:"Sharpner"}),Object(o.jsx)("option",{value:"Ruler",id:"item",children:"Ruler"}),Object(o.jsx)("option",{value:"Protactor",id:"item",children:"Protactor"}),Object(o.jsx)("option",{value:"Rounder",id:"item",children:"Rounder"}),Object(o.jsx)("option",{value:"Wax Crayon",id:"item",children:"Wax Crayon"}),Object(o.jsx)("option",{value:"Pencil Color",id:"item",children:"Pencil Color"}),Object(o.jsx)("option",{value:"Red Pen",id:"item",children:"Red Pen"})]}),Object(o.jsx)("button",{type:"button",class:"btn btn-primary",children:"Add"})]})})}function d(e){var t=e.item,n=e.onDelete;return Object(o.jsxs)("div",{class:"container",children:[Object(o.jsx)("p",{children:t.name}),Object(o.jsx)("button",{type:"button",class:"btn btn-sm btn-danger",onClick:function(){return n(t)},children:"Delete"})]})}function u(e){return Object(o.jsxs)("div",{class:"container",style:{minHeight:"70vh"},children:[Object(o.jsx)("h3",{children:"Items in your Cart"}),0===e.items.length?"No items to display":e.items.map((function(t){return Object(o.jsx)(d,{item:t,onDelete:e.onDelete})}))]})}function h(){return Object(o.jsx)("footer",{class:"bg-dark text-light py-3",children:Object(o.jsx)("p",{class:"text-center",children:"Copyright \xa9 ShopHere.com"})})}var x=function(){var e=Object(a.useState)([{name:"bag"},{name:"pen"},{name:"bottle"},{name:"eraser"}]),t=Object(s.a)(e,2),n=t[0],c=t[1];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(j,{title:"Shop Here"}),Object(o.jsx)(b,{addItem:function(e){var t={items:e};c([].concat(Object(l.a)(e),[t]))}}),Object(o.jsx)(u,{items:n,onDelete:function(e){c(n.filter((function(t){return t!==e})))}}),Object(o.jsx)(h,{})]})};i.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(x,{})}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.f8ae3d53.chunk.js.map