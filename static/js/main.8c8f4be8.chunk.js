(this.webpackJsonpreact_carousel=this.webpackJsonpreact_carousel||[]).push([[0],{11:function(e,t,n){},12:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var i=n(6),a=n.n(i),s=n(3),c=n(2),r=n(4),l=n(1),o=(n(11),n(12),n(0)),m=function(e){var t=e.images,n=e.step,i=e.frameSize,a=e.itemWidth,s=e.animationDuration,c=e.isInfinite,m=Object(l.useState)(0),u=Object(r.a)(m,2),p=u[0],b=u[1],j=i*(a+5),d=t.length-i;return Object(o.jsxs)("div",{className:"Carousel",children:[Object(o.jsx)("div",{className:"Carousel__frame",style:{width:"".concat(j,"px")},children:Object(o.jsx)("ul",{className:"Carousel__list",style:{transform:"translateX(-".concat(p*(a+5),"px)"),transition:"".concat(s,"ms transform")},children:t.map((function(e,t){return Object(o.jsx)("li",{children:Object(o.jsx)("img",{className:"Carousel__img",src:e,alt:(t+1).toString(),width:a})},e)}))})}),Object(o.jsxs)("div",{className:"Carousel__buttons",children:[Object(o.jsx)("button",{type:"button",className:"Carousel__button",onClick:function(){b((function(e){return 0===e&&c?d:e-n>0?e-n:0}))},disabled:!p&&!c,children:"<"}),Object(o.jsx)("button",{type:"button",className:"Carousel__button",onClick:function(){b((function(e){return e===d&&c?0:e+n<d?e+n:d}))},disabled:!c&&p===d,"data-cy":"next",children:">"})]})]})},u={step:3,frameSize:3,itemWidth:130,animationDuration:1e3,isInfinite:!1},p=function(){var e=Object(l.useState)(u),t=Object(r.a)(e,2),n=t[0],i=t[1],a=["./img/1.png","./img/2.png","./img/3.png","./img/4.png","./img/5.png","./img/6.png","./img/7.png","./img/8.png","./img/9.png","./img/10.png"],p=function(e,t){i((function(n){return Object(c.a)(Object(c.a)({},n),{},Object(s.a)({},e,t))}))};return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)("h1",{className:"App__title","data-cy":"title",children:"Carousel with ".concat(a.length," images")}),Object(o.jsxs)("div",{className:"App__controls",children:[Object(o.jsxs)("label",{className:"App__control",htmlFor:"itemId",children:["Item width:",Object(o.jsx)("input",{id:"itemId",type:"number",className:"App__input",value:n.itemWidth,onChange:function(e){p("itemWidth",+e.target.value)},step:10})]}),Object(o.jsxs)("label",{className:"App__control",htmlFor:"frameId",children:["Frame size:",Object(o.jsx)("input",{id:"frameId",type:"number",className:"App__input",value:n.frameSize,min:1,max:a.length,onChange:function(e){p("frameSize",+e.target.value)}})]}),Object(o.jsxs)("label",{className:"App__control",htmlFor:"stepId",children:["Step:",Object(o.jsx)("input",{id:"stepId",type:"number",className:"App__input",value:n.step,min:1,max:a.length,onChange:function(e){p("step",+e.target.value)}})]}),Object(o.jsxs)("label",{className:"App__control",children:["Animation duration:",Object(o.jsx)("input",{type:"number",className:"App__input",value:n.animationDuration,min:0,step:100,onChange:function(e){p("animationDuration",+e.target.value)}})]}),Object(o.jsxs)("label",{className:"App__control App__control--checkbox",children:["Infinite:",Object(o.jsx)("input",{type:"checkbox",className:"App__checkbox",checked:n.isInfinite,onChange:function(){i((function(e){return Object(c.a)(Object(c.a)({},e),{},{isInfinite:!e.isInfinite})}))}})]})]}),Object(o.jsx)(m,{images:a,step:n.step,frameSize:n.frameSize,itemWidth:n.itemWidth,animationDuration:n.animationDuration,isInfinite:n.isInfinite})]})};a.a.render(Object(o.jsx)(p,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.8c8f4be8.chunk.js.map