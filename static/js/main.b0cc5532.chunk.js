(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{12:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var s=n(1),i=n.n(s),c=n(7),r=n.n(c),o=(n(12),n(2)),a=n(3),l=n(5),d=n(4),u=(n(13),n(0)),j=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var s;return Object(o.a)(this,n),(s=t.call(this,e)).listenScrollEvent=function(e){0===window.scrollY?s.setState({opacity:1}):s.setState({opacity:1-window.scrollY/320})},s.state={opacity:1},s}return Object(a.a)(n,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.listenScrollEvent)}},{key:"render",value:function(){return Object(u.jsx)("div",{className:"Header",style:{opacity:this.state.opacity},children:Object(u.jsxs)("p",{children:[Object(u.jsx)("span",{children:"Hello,"}),Object(u.jsx)("br",{}),"I\u2019m Aneta Szmidt,",Object(u.jsx)("br",{}),"a Web & Mobile App Developer",Object(u.jsx)("br",{}),"freelance from Stockholm."]})})}}]),n}(i.a.Component),m=function(e){var t=e.title,n=e.description,s=e.img,i=e.color;e.id,e.showItemsDescription;return Object(u.jsxs)("div",{className:"WorkItem red",children:[Object(u.jsx)("body",{className:"",style:{background:i},children:Object(u.jsx)("img",{src:s,className:"App-logo",alt:"logo"})}),Object(u.jsxs)("div",{className:"ItemFooter",children:[Object(u.jsx)("h2",{className:"red",children:t}),Object(u.jsx)("h4",{children:n[0]}),Object(u.jsx)("span",{className:"dot"}),Object(u.jsx)("h4",{children:n[1]}),Object(u.jsx)("span",{className:"dot"}),Object(u.jsx)("h4",{children:n[2]})]})]})},b=n.p+"static/media/Web 1920 \u2013 1.765ecac5.png",p=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var s;return Object(o.a)(this,n),(s=t.call(this,e)).componentDidMount=function(){var e=[{name:"Make a Story",description:["web app","mobile-friendly design","firebase"],img:b,color:"#FDEED2",id:1},{name:"Memory Matching Game",description:["Android","Product Design","Google Maps"],img:"",id:2},{name:"Password Manager",description:["Android","Product Design","Google Maps"],img:"",id:3},{name:"Auction Portal",description:["Android","Product Design","Google Maps"],img:"",id:4},{name:"Make a Story",description:["Android","Product Design","Google Maps"],img:"",id:5},{name:"StorySpot",description:["Android","Product Design","Google Maps"],img:"",id:6}];s.setState({items:e})},s.handleClick=function(e,t){window.location.href="details?".concat(e,"&id=").concat(t)},s.itemToItem=function(e){console.log(e);var t=e.name,n=e.description,i=e.img,c=e.color,r=e.id;return Object(u.jsx)(m,{title:t,description:n,img:i,color:c,id:r,showItemsDescription:s.handleClick},t)},s.state={items:[]},s}return Object(a.a)(n,[{key:"render",value:function(){return Object(u.jsx)("div",{className:"Portfolio",children:this.state.items.map(this.itemToItem)})}}]),n}(i.a.Component),h=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(a.a)(n,[{key:"render",value:function(){return Object(u.jsxs)("div",{className:"Contact",children:[Object(u.jsxs)("div",{className:"GetContact",children:[Object(u.jsx)("h2",{children:"Contact with me! I love new challenges"}),Object(u.jsxs)("h3",{children:["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel arcu fringilla, dignissim ligula nec,",Object(u.jsx)("br",{})," iaculis dui. Nulla facilisi. Donec rutrum convallis mollis. Praesent in semper ex. Sed sem nisi, laoreet in. ",Object(u.jsx)("br",{}),Object(u.jsx)("br",{})," Vestibulum in, pretium non eros. Duis nec enim turpis. Suspendisse massa justo, placerat vulputate dignissim non, maximus ut metus. Aliquam sodales eros id metus. ",Object(u.jsx)("br",{})," ",Object(u.jsx)("br",{}),"Sollicitudin fringilla. Aenean lectus magna, semper a luctus quis, dapibus vel dolor."]})]}),Object(u.jsxs)("div",{className:"Footer",children:[Object(u.jsx)("p",{className:"red",children:"Email"}),Object(u.jsx)("p",{className:"red",children:"LinkedIn"}),Object(u.jsx)("p",{className:"red",children:"GitHub"})]})]})}}]),n}(i.a.Component),O=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var s;return Object(o.a)(this,n),(s=t.call(this,e)).mouseListener=function(e){s.setState({clientX:e.clientX-25,clientY:e.clientY-20})},s.mouseListener2=function(e){"red"===e.target.className?s.setState({cursorColor:"red",transform:"scale(1.5)"}):s.setState({transform:"none",cursorColor:"#e5e5e5"})},s.state={opacity:1,cursorColor:"#e5e5e5",clientX:100,clientY:100},s}return Object(a.a)(n,[{key:"componentDidMount",value:function(){document.addEventListener("mousemove",this.mouseListener),document.addEventListener("mouseover",this.mouseListener2)}},{key:"render",value:function(){return Object(u.jsxs)("div",{className:"Home",children:[Object(u.jsx)(j,{}),Object(u.jsx)(p,{}),Object(u.jsx)(h,{}),Object(u.jsx)("div",{id:"cou",className:"cursor cursor--small red",style:{background:this.state.cursorColor,transform:this.state.transform,left:this.state.clientX,top:this.state.clientY}})]})}}]),n}(i.a.Component),f=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(a.a)(n,[{key:"render",value:function(){return Object(u.jsxs)("div",{className:"Navbar",children:[Object(u.jsx)("h4",{className:"red",children:"Aneta Szmidt"}),Object(u.jsx)("h4",{className:"red",style:{},children:"About"})]})}}]),n}(i.a.Component),v=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(a.a)(n,[{key:"render",value:function(){return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(f,{}),Object(u.jsx)(O,{})]})}}]),n}(i.a.Component),x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,s=t.getFID,i=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),s(e),i(e),c(e),r(e)}))};r.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(v,{})}),document.getElementById("root")),x()}},[[16,1,2]]]);
//# sourceMappingURL=main.b0cc5532.chunk.js.map