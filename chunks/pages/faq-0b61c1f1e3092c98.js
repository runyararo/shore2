(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7746],{1671:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/faq",function(){return t(9081)}])},2872:function(e,s,t){"use strict";t.r(s),s.default={src:"/_next/static/media/page-header-bg.c1fcfe3a.jpg",height:922,width:1894,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAQACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAAAwEBAQAAAAAAAAAAAAAAAAAABgf/2gAMAwEAAhADEAAAALA3Qv/EABQQAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQEAAT8Af//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Af//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Af//Z",blurWidth:8,blurHeight:4}},384:function(e,s,t){"use strict";t.r(s),s.default={src:"/_next/static/media/contact-one-shape.1493212a.png",height:1295,width:1920,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAQAAADSmGXeAAAANUlEQVR42mP4Z/hP/Z/WPxUg1AKyDBn+yf9TBmIlIASzGP6p/dP/p/RPCgiVgCw1TBXoZgAAncotd8yanrIAAAAASUVORK5CYII=",blurWidth:8,blurHeight:5}},706:function(e,s,t){"use strict";var a=t(5893);t(7294);var n=t(4051),i=t(1555),c=t(7536);s.Z=e=>{let{inputs:s=[],formClassName:t="comment-one__form",inputClassName:l="comment-form__input-box",messageClassName:r="text-message-box",btnBoxClassName:o="btn-box",btnClassName:d="comment-form__btn",btnText:A="Send a message"}=e,{register:u,handleSubmit:m,formState:{errors:h}}=(0,c.cI)();return(0,a.jsxs)("form",{onSubmit:m(e=>console.log(e)),className:"".concat(t," contact-form-validated"),children:[(0,a.jsx)(n.Z,{children:s.map(e=>{let{name:s,placeholder:t,type:n,required:c}=e;return(0,a.jsx)(i.Z,{xl:6,children:(0,a.jsxs)("div",{className:l,children:[(0,a.jsx)("input",{type:n,placeholder:t,name:s,id:s,...u(s,{required:c})}),c&&h[s]&&(0,a.jsx)("label",{htmlFor:s,className:"error",children:"This field is required."})]})},s)})}),(0,a.jsx)(n.Z,{children:(0,a.jsxs)(i.Z,{xl:12,children:[(0,a.jsx)("div",{className:"".concat(l," ").concat(r),children:(0,a.jsx)("textarea",{name:"message",placeholder:"Write a Message",...u("message")})}),(0,a.jsx)("div",{className:o,children:(0,a.jsx)("button",{type:"submit",className:"thm-btn ".concat(d),children:A})})]})})]})}},4163:function(e,s,t){"use strict";var a=t(5893),n=t(4820);t(7294);var i=t(682),c=t(4051),l=t(1555),r=t(9609),o=t(706);let{tagline:d,title:A,inputs:u,title2:m}=n.contactPage;s.Z=e=>{let{isTitleTwo:s=!1}=e;return(0,a.jsx)("section",{className:"contact-page",children:(0,a.jsxs)(i.Z,{children:[(0,a.jsx)(r.Z,{title:s?m:A,tagline:d,className:"text-center"}),(0,a.jsx)(c.Z,{children:(0,a.jsx)(l.Z,{xl:12,children:(0,a.jsx)("div",{className:"contact-page__form",children:(0,a.jsx)(o.Z,{inputs:u})})})})]})})}},9950:function(e,s,t){"use strict";t.d(s,{Z:function(){return A}});var a=t(5893);t(7294);var n=t(682),i=t(4051),c=t(1555),l=t(5832),r=t(256);let{title:o,href:d}={title:"We’re delivering the best \n customer experience",href:"/about"};var A=e=>{let{className:s=""}=e;return(0,a.jsx)("section",{className:"cta-one ".concat(s),children:(0,a.jsx)(n.Z,{children:(0,a.jsx)(i.Z,{children:(0,a.jsx)(c.Z,{xl:12,children:(0,a.jsx)("div",{className:"cta-one__inner",children:(0,a.jsxs)("div",{className:"cta-one__inner-content",children:[(0,a.jsx)("div",{className:"cta-one-shape-1 float-bob-x"}),(0,a.jsx)("div",{className:"cta-one-shape-2 float-bob-x-2"}),(0,a.jsx)("h3",{className:"cta-one__title",children:(0,a.jsx)(r.Z,{text:o})}),(0,a.jsx)(l.Z,{href:d,className:"thm-btn cta-one__btn",children:"Discover More"})]})})})})})})}},7418:function(e,s,t){"use strict";var a=t(5893),n=t(7294);s.Z=e=>{let{faqs:s=[],className:t=""}=e,[i,c]=(0,n.useState)(1),l=s.length;return(0,a.jsx)("div",{className:"accrodion-grp faq-one-accrodion overflow-hidden ".concat(t),children:s.map(e=>{let{id:s,title:t,text:n}=e;return(0,a.jsxs)("div",{className:"accrodion".concat(s===i?" active":"").concat(s===l?" last-chiled":""),children:[(0,a.jsx)("div",{onClick:()=>c(s),className:"accrodion-title",children:(0,a.jsx)("h4",{children:t})}),(0,a.jsx)("div",{className:"accrodion-content ".concat(s===i?"d-block":"d-none"),children:(0,a.jsx)("div",{className:"inner animated".concat(s===i?" fadeInUp":""),children:(0,a.jsx)("p",{children:n})})})]},s)})})}},42:function(e,s,t){"use strict";var a=t(5893),n=t(1026),i=t(148),c=t(6500);t(7294);var l=t(1330),r=t(5832),o=t(3528);let{logo:d,navItems:A,callText:u,phone:m,phoneHref:h}=i.default;s.Z=e=>{let{mainMenuClass:s="",navItems:t=A,onePage:i=!1}=e,{scrollTop:u}=(0,c.Z)(100),{toggleMenu:m,toggleSearch:h}=(0,n.E)();return(0,a.jsx)("header",{className:"main-header clearfix",children:(0,a.jsx)("nav",{className:"".concat(u?"stricky-header stricked-menu stricky-fixed slideInDown":"slideIn"," main-menu ").concat(s," animated clearfix"),children:(0,a.jsxs)("div",{className:"main-menu-wrapper clearfix".concat(u?" sticky-header__content":""),children:[(0,a.jsxs)("div",{className:"main-menu-wrapper__left",children:[(0,a.jsx)("div",{className:"main-menu-wrapper__logo",children:(0,a.jsx)(r.Z,{href:"/",children:(0,a.jsx)(l.Z,{src:d.src,alt:""})})}),(0,a.jsxs)("div",{className:"main-menu-wrapper__main-menu",children:[(0,a.jsx)("a",{onClick:()=>{document.body.classList.toggle("locked"),m()},className:"mobile-nav__toggler",children:(0,a.jsx)("i",{className:"fa fa-bars"})}),(0,a.jsx)(o.Z,{navItems:t,onePage:i})]})]}),(0,a.jsx)("div",{className:"main-menu-wrapper__right",children:(0,a.jsx)("div",{className:"main-menu-wrapper__search-cat",children:(0,a.jsx)("a",{onClick:()=>{h(),m(!1),document.body.classList.toggle("locked")},className:"main-menu-wrapper__search search-toggler icon-magnifying-glass cursor-pointer"})})})]})})})}},4846:function(e,s,t){"use strict";var a=t(5893),n=t(2872);t(7294);var i=t(682),c=t(5832);s.Z=e=>{let{page:s="",title:t="",parent:l="",parentHref:r="/"}=e;return(0,a.jsxs)("section",{className:"page-header",children:[(0,a.jsx)("div",{className:"page-header-bg",style:{backgroundImage:"url(".concat(n.default.src,")")}}),(0,a.jsx)("div",{className:"page-header-shape-1 float-bob-x-6"}),(0,a.jsx)("div",{className:"page-header-shape-2 float-bob-x-7"}),(0,a.jsx)(i.Z,{children:(0,a.jsxs)("div",{className:"page-header__inner",children:[(0,a.jsxs)("ul",{className:"thm-breadcrumb list-unstyled",children:[(0,a.jsx)("li",{children:(0,a.jsx)(c.Z,{href:"/",children:"Home"})})," ",(0,a.jsx)("li",{children:(0,a.jsx)("span",{children:"/"})})," ",l&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("li",{children:(0,a.jsx)(c.Z,{href:r,children:l})})," ",(0,a.jsx)("li",{children:(0,a.jsx)("span",{children:"/"})})," "]}),(0,a.jsx)("li",{children:s||t})]}),(0,a.jsx)("h2",{children:t})]})})]})}},256:function(e,s,t){"use strict";var a=t(5893),n=t(7294);s.Z=e=>{let{text:s="",separator:t="\n",children:i="",highlight:c=""}=e,l=(i||s).split(t),r=l.length-1,o=c.toLowerCase();return(0,a.jsx)(n.Fragment,{children:l.map((e,s)=>{let t=e.trim(),i=t.toLowerCase();return(0,a.jsxs)(n.Fragment,{children:[c&&i.includes(o)?i===o?(0,a.jsx)("span",{children:t}):t.split(" ").map((e,s)=>e.toLowerCase()===o?(0,a.jsxs)("span",{children:[e," "]},s):e+" "):t," ",s!==r&&(0,a.jsx)("br",{})]},s)})})}},9609:function(e,s,t){"use strict";var a=t(5893);t(7294),s.Z=e=>{let{title:s="",tagline:t="",children:n,className:i,...c}=e;return(0,a.jsxs)("div",{className:"section-title ".concat(i),...c,children:[t&&(0,a.jsx)("span",{className:"section-title__tagline",children:t}),(0,a.jsx)("h2",{className:"section-title__title",children:s||n})]})}},4820:function(e,s,t){"use strict";t.d(s,{F:function(){return n},contactDetails:function(){return r},contactOne:function(){return c},contactPage:function(){return l}});var a=t(384);let n=[{name:"name",type:"text",placeholder:"Full name",required:!0},{name:"email",type:"email",placeholder:"Email address",required:!0},{name:"phone",type:"text",placeholder:"Phone",required:!1},{name:"subject",type:"text",placeholder:"Subject",required:!1}],i={phone:"+1- ( 246 ) 333 - 0079",phoneHref:"12463330079",email:"needhelp@company.com"},c={bg:a.default,tagline:"contact with us",title:"We are Here to Help You & Your Business",text:"Pellentesque ultricies quam dui, id portt tor leo \n iaculis nec. Phasellus ac neque.",timeRange:"8:00 am - 6:00 pm",inputs:n,bottomTitle:"Visit Our Office",contacts:[{id:1,title:"Austin",text:"22 Texas West Hills",...i},{id:2,title:"Boston",text:"22 Texas West Hills",...i},{id:3,title:"New York",text:"22 Texas West Hills",...i},{id:4,title:"Dubai",text:"22 Texas West Hills",...i}]},l={tagline:"Contact with us",title:"Have Any Question?",title2:"Write a Message",inputs:n},r={title:"Get in Touch",text:"Nulla quis commodo ligula. Curabitur bibendum ante at nibh lobortis, nec volutpat mauris faucibus.",address:"60 Road Broklyn Golden Street of New York. USA",contactIcon:"icon-phone1",...i}},2892:function(e,s,t){"use strict";t.d(s,{_:function(){return a}});let a=[{id:1,title:"Interdum et malesuada fames ac ante ipsum",text:"Suspendisse finibus urna mauris, vitae consequat quam vel. Vestibulum leo ligula, vit commodo nisl Sed luctus venenatis pellentesque."},{id:2,title:"Maecenas condimentum sollicitudin ligula,",text:"Suspendisse finibus urna mauris, vitae consequat quam vel. Vestibulum leo ligula, vit commodo nisl Sed luctus venenatis pellentesque."},{id:3,title:"Duis rhoncus orci ut metus rhoncus",text:"Suspendisse finibus urna mauris, vitae consequat quam vel. Vestibulum leo ligula, vit commodo nisl Sed luctus venenatis pellentesque."}];s.Z=[a,a]},9081:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return x}});var a=t(5893),n=t(4163),i=t(9950),c=t(2892);t(7294);var l=t(682),r=t(4051),o=t(1555),d=t(7418),A=()=>(0,a.jsx)("section",{className:"faq-page",children:(0,a.jsx)(l.Z,{children:(0,a.jsx)(r.Z,{children:c.Z.map((e,s)=>(0,a.jsx)(o.Z,{xl:6,lg:6,children:(0,a.jsx)("div",{className:"faq-page__single",children:(0,a.jsx)(d.Z,{faqs:e,className:"faq-one-accrodion-".concat(s+1)})})},s))})})}),u=t(42),m=t(6915),h=t(4846),x=()=>(0,a.jsxs)(m.Z,{pageTitle:"FAQs",children:[(0,a.jsx)(u.Z,{}),(0,a.jsx)(h.Z,{title:"FAQs"}),(0,a.jsx)(A,{}),(0,a.jsx)(n.Z,{}),(0,a.jsx)(i.Z,{})]})}},function(e){e.O(0,[2266,7536,6915,9774,2888,179],function(){return e(e.s=1671)}),_N_E=e.O()}]);