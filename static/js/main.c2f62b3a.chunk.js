(this.webpackJsonpreact_carousel=this.webpackJsonpreact_carousel||[]).push([[0],{11:function(e,t,n){},12:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var i=n(6),a=n.n(i),s=n(3),c=n(2),l=n(4),r=n(1),o=(n(11),n(12),n(0)),u=function(e){var t=e.images,n=e.step,i=e.frameSize,a=e.itemWidth,s=e.animationDuration,c=e.isInfinite,u=Object(r.useState)(0),m=Object(l.a)(u,2),p=m[0],b=m[1],j=i*a,h=t.length-i;return Object(o.jsxs)("div",{className:"Carousel",children:[Object(o.jsx)("div",{className:"Carousel__frame",style:{width:"".concat(j,"px")},children:Object(o.jsx)("ul",{className:"Carousel__list",style:{transform:"translateX(-".concat(p*a,"px)"),transition:"".concat(s,"ms transform")},children:t.map((function(e,t){return Object(o.jsx)("li",{children:Object(o.jsx)("img",{className:"Carousel__img",src:e,alt:(t+1).toString(),width:a})},e)}))})}),Object(o.jsxs)("div",{className:"Carousel__buttons",children:[Object(o.jsx)("button",{type:"button",className:"Carousel__button",onClick:function(){b((function(e){return e-n>0?e-n:0}))},disabled:!p,children:"<"}),Object(o.jsx)("button",{type:"button",className:"Carousel__button",onClick:function(){b((function(e){return e===h&&c?0:e+n<h?e+n:h}))},disabled:!c&&p===h,"data-cy":"next",children:">"})]})]})},m={step:3,frameSize:3,itemWidth:130,animationDuration:1e3,isInfinite:!1},p=function(){var e=Object(r.useState)(m),t=Object(l.a)(e,2),n=t[0],i=t[1],a=["./img/1.png","./img/2.png","./img/3.png","./img/4.png","./img/5.png","./img/6.png","./img/7.png","./img/8.png","./img/9.png","./img/10.png"],p=function(e,t){i((function(n){return Object(c.a)(Object(c.a)({},n),{},Object(s.a)({},e,t))}))};return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)("h1",{className:"App__title","data-cy":"title",children:"Carousel with ".concat(a.length," images")}),Object(o.jsxs)("div",{className:"App__controls",children:[Object(o.jsxs)("label",{className:"App__control",children:["Item width:",Object(o.jsx)("input",{type:"number",className:"App__input",value:n.itemWidth,onChange:function(e){p("itemWidth",+e.target.value)},step:10})]}),Object(o.jsxs)("label",{className:"App__control",children:["Frame size:",Object(o.jsx)("input",{type:"number",className:"App__input",value:n.frameSize,min:1,max:a.length,onChange:function(e){p("frameSize",+e.target.value)}})]}),Object(o.jsxs)("label",{className:"App__control",children:["Step:",Object(o.jsx)("input",{type:"number",className:"App__input",value:n.step,min:1,max:a.length,onChange:function(e){p("step",+e.target.value)}})]}),Object(o.jsxs)("label",{className:"App__control",children:["Animation duration:",Object(o.jsx)("input",{type:"number",className:"App__input",value:n.animationDuration,min:0,step:100,onChange:function(e){p("animationDuration",+e.target.value)}})]}),Object(o.jsxs)("label",{className:"App__control App__control--checkbox",children:["Infinite:",Object(o.jsx)("input",{type:"checkbox",className:"App__checkbox",checked:n.isInfinite,onClick:function(){i((function(e){return Object(c.a)(Object(c.a)({},e),{},{isInfinite:!e.isInfinite})}))}})]})]}),Object(o.jsx)(u,{images:a,step:n.step,frameSize:n.frameSize,itemWidth:n.itemWidth,animationDuration:n.animationDuration,isInfinite:n.isInfinite})]})};a.a.render(Object(o.jsx)(p,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.c2f62b3a.chunk.js.map