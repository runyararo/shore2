"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6915],{2822:function(e,a,s){s.r(a),a.default={src:"/_next/static/media/logo-1.9c4b102b.png",height:108,width:363,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAYAAABllJ3tAAAATElEQVR4nGOct+rqKw42Zt6///7fXrzrRcWuZ7/0RFgZ7//+z2DBwMBwnnHKwks3WFgYuYGcJ5fvfkmbeugjl7QQy/uvf/+LAsU+AQAy9h7H45OdsAAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:2}},7559:function(e,a,s){s.r(a),a.default={src:"/_next/static/media/logo-rec-w.8a0e6573.png",height:238,width:238,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAe0lEQVR42g3DsaqBARgA0G+5dYd7y/STGMgLsLBbGJWIsjB4AVHKLkpKFpTFpuQBjCbv4FVOnDqh4eHPzNaPm1H4ddJ399RxloSyi7B0Ffaaoe4gTO2EtUFIq0qpKPrXlA1daxsTC0dv41CzMjfU1vLSCwU5eRnJd0nyAUCIVYEIqj+AAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8}},6914:function(e,a,s){s.r(a),a.default={src:"/_next/static/media/site-footer-shape-1.3a0b38c9.png",height:585,width:1920,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAQAAADPnVVmAAAAHUlEQVR42mP4J/CP/58gEPMAWUA2A5AJYvBAhQUAJbsQ1Qii7XMAAAAASUVORK5CYII=",blurWidth:8,blurHeight:2}},3528:function(e,a,s){s.d(a,{Z:function(){return d}});var r=s(5893);s(7294);var t=s(1026),i=s(5242),n=s(1163),l=s(5832);let o=e=>{let{subItem:a={},mobile:s=!1,handleToggleMenu:t}=e,[o,c]=(0,i.Z)(!1),{subItems:d,href:m,name:h}=a,{pathname:f}=(0,n.useRouter)();return(0,r.jsxs)("li",{className:"".concat((null==d?void 0:d.length)?"dropdown":""," ").concat(f===m?"current":""),children:[(0,r.jsxs)(l.Z,{onClick:t,href:m,className:s&&o?"expanded":"",children:[h," ",s&&(null==d?void 0:d.length)>0&&(0,r.jsx)("button",{"aria-label":"dropdown toggler",onClick:e=>{e.preventDefault(),c()},className:o?"expanded":"",children:(0,r.jsx)("i",{className:"fa fa-angle-down"})})]}),(0,r.jsx)("ul",{className:s&&!o?"d-none":"d-block",children:null==d?void 0:d.map(e=>(0,r.jsx)("li",{children:(0,r.jsx)(l.Z,{onClick:t,href:e.href,children:e.name})},e.id))})]})};var c=e=>{let{navItem:a={},mobile:s=!1,onePage:c=!1}=e,[d,m]=(0,i.Z)(!1),{pathname:h}=(0,n.useRouter)(),{currentActive:f,toggleMenu:u}=(0,t.E)(),x=()=>{s&&(u(!1),document.body.classList.remove("locked"))},{name:g,href:p,subNavItems:j=[]}=a,A=c?f===p:h===p;return A||c||(A=j.find(e=>{var a;return e.href===h||(null===(a=e.subItems)||void 0===a?void 0:a.find(e=>e.href===h))})),(0,r.jsxs)("li",{className:"".concat(j.length?"dropdown":"").concat(A?" current":""),children:[(0,r.jsxs)(l.Z,{onClick:x,href:p,className:s&&d?"expanded":"",children:[g," ",s&&j.length>0&&(0,r.jsx)("button",{"aria-label":"dropdown toggler",onClick:e=>{e.stopPropagation(),e.preventDefault(),m()},className:d?"expanded":"",children:(0,r.jsx)("i",{className:"fa fa-angle-down"})})]}),(0,r.jsx)("ul",{className:s&&!d?"d-none":"d-block",children:j.map(e=>(0,r.jsx)(o,{subItem:e,mobile:s,handleToggleMenu:x},e.id))})]})},d=e=>{let{navItems:a=[],mobile:s=!1,onePage:t=!1}=e;return(0,r.jsx)("ul",{className:"main-menu__list",children:a.map(e=>(0,r.jsx)(c,{navItem:e,mobile:s,onePage:t},e.id))})}},6915:function(e,a,s){s.d(a,{Z:function(){return Y}});var r=s(5893),t=s(7294),i=s(1330),n=e=>{let{loading:a=!0}=e;return(0,r.jsx)("div",{style:{zIndex:a?9999:-1},className:"preloader animated".concat(a?"":" fadeOut"),children:(0,r.jsx)(i.Z,{className:"preloader__image",width:60,src:"/_next/static/media/loader.3f3c6e49.png",alt:""})})},l=s(6500),o=s(9008),c=s.n(o),d=s(6261),m=s(1026),h=s(148),f=s(5832),u=s(3528);let{logo:x,navItems:g,phone:p,phoneHref:j,email:A,socials:b}=h.default;var v=e=>{let{navItems:a=g,onePage:s=!1}=e,{menuStatus:t,toggleMenu:n}=(0,m.E)(),l=()=>{document.body.classList.toggle("locked"),n()};return(0,r.jsxs)("div",{className:"mobile-nav__wrapper".concat(t?" expanded":""),children:[(0,r.jsx)("div",{onClick:l,className:"mobile-nav__overlay mobile-nav__toggler"}),(0,r.jsxs)("div",{className:"mobile-nav__content",children:[(0,r.jsx)("span",{onClick:l,className:"mobile-nav__close mobile-nav__toggler",children:(0,r.jsx)("i",{className:"fa fa-times"})}),(0,r.jsx)("div",{className:"logo-box",children:(0,r.jsx)(f.Z,{href:"/","aria-label":"logo image",children:(0,r.jsx)(i.Z,{src:x.src,width:155,alt:""})})}),(0,r.jsx)("div",{className:"mobile-nav__container",children:(0,r.jsx)(u.Z,{navItems:a,mobile:!0,onePage:s})}),(0,r.jsxs)("ul",{className:"mobile-nav__contact list-unstyled",children:[(0,r.jsxs)("li",{children:[(0,r.jsx)("i",{className:"fa fa-envelope"}),(0,r.jsx)("a",{href:"mailto:".concat(A),children:A})]}),(0,r.jsxs)("li",{children:[(0,r.jsx)("i",{className:"fa fa-phone-alt"}),(0,r.jsx)("a",{href:"tel:".concat(j),children:p})]})]}),(0,r.jsx)("div",{className:"mobile-nav__top",children:(0,r.jsx)("div",{className:"mobile-nav__social",children:b.map(e=>{let{id:a,href:s,icon:t}=e;return(0,r.jsx)("a",{href:s,className:t},a)})})})]})]})},_=()=>{let{openSearch:e,toggleSearch:a}=(0,m.E)(),s=()=>{a(),document.body.classList.toggle("locked")};return(0,r.jsxs)("div",{className:"search-popup".concat(e?" active":""),children:[(0,r.jsx)("div",{onClick:s,className:"search-popup__overlay search-toggler"}),(0,r.jsx)("div",{className:"search-popup__content",children:(0,r.jsxs)("form",{onSubmit:e=>{e.preventDefault(),console.log(new FormData(e.target).get("search")),s()},children:[(0,r.jsx)("label",{htmlFor:"search",className:"sr-only",children:"search here"}),(0,r.jsx)("input",{type:"text",id:"search",name:"search",placeholder:"Search Here...",required:!0}),(0,r.jsx)("button",{type:"submit","aria-label":"search submit",className:"thm-btn",children:(0,r.jsx)("i",{className:"icon-magnifying-glass"})})]})})]})},w=s(7559);let N={bg:s(6914).default,logo:w.default,aboutText:"Serving South Shore youth with passion and pride",socials:[{id:1,icon:"fab fa-twitter",href:"#"},{id:2,icon:"fab fa-facebook",href:"#"},{id:3,icon:"fab fa-pinterest-p",href:"#"},{id:4,icon:"fab fa-instagram",href:"#"}],links:[{id:1,text:"About",href:"/about"},{id:2,text:"Meet our team",href:"#"},{id:3,text:"Programs",href:"#"},{id:4,text:"Updates",href:"#"},{id:5,text:"Contact",href:"/contact"},{id:6,text:"Gallery",href:"#"},{id:7,text:"Terms of use",href:"#"},{id:8,text:"Privacy policy",href:"#"}],newsletterText:"Subscribe to our newsletter",address:"PO BOX 20303, Montreal",phone:"+1- (519 ) 333 - 0079",phoneHref:"15193330079",email:"southshore@gmail.com",author:"321 DataPro",year:new Date().getFullYear()};var k=s(682),S=s(4051),Z=s(1555);let{bg:y,logo:C,aboutText:E,author:P,year:U,links:I,socials:T,newsletterText:B,address:R,phone:O,phoneHref:D,email:H}=N;var F=e=>{let{footerClassName:a=""}=e;return(0,r.jsxs)("footer",{className:"site-footer ".concat(a),children:[(0,r.jsxs)("div",{className:"site-footer__top",children:[(0,r.jsx)("div",{className:"site-footer-shape-1",style:{backgroundImage:"url(".concat(y.src,")")}}),(0,r.jsxs)(k.Z,{children:[(0,r.jsxs)(S.Z,{children:[(0,r.jsx)(Z.Z,{xl:4,lg:6,md:6,className:"animated fadeInUp",children:(0,r.jsx)("div",{className:"footer-widget__column footer-widget__about",children:(0,r.jsx)("div",{className:"footer-widget__logo",children:(0,r.jsx)(f.Z,{href:"/",children:(0,r.jsx)(i.Z,{src:C.src,alt:""})})})})}),(0,r.jsx)(Z.Z,{xl:4,lg:6,md:6,className:"animated fadeInUp",children:(0,r.jsxs)("div",{className:"footer-widget__column footer-widget__explore clearfix",children:[(0,r.jsx)("h3",{className:"footer-widget__title",children:"Explore"}),(0,r.jsx)("ul",{className:"footer-widget__explore-list list-unstyled clearfix",children:I.slice(0,4).map(e=>{let{id:a,href:s,text:t}=e;return(0,r.jsx)("li",{children:(0,r.jsx)(f.Z,{href:s,children:t})},a)})}),(0,r.jsx)("ul",{className:"footer-widget__explore-list footer-widget__explore-list-two list-unstyled clearfix",children:I.slice(4).map(e=>{let{id:a,href:s,text:t}=e;return(0,r.jsx)("li",{children:(0,r.jsx)(f.Z,{href:s,children:t})},a)})})]})}),(0,r.jsx)(Z.Z,{xl:4,lg:6,md:6,className:"animated fadeInUp",children:(0,r.jsxs)("div",{className:"footer-widget__column footer-widget__newsletter-box clearfix",children:[(0,r.jsx)("h3",{className:"footer-widget__title",children:"Newsletter"}),(0,r.jsx)("p",{className:"footer-widget__newsletter-text",children:B}),(0,r.jsx)("form",{onSubmit:e=>{e.preventDefault(),console.log(new FormData(e.target).get("email"))},className:"footer-widget__newsletter-form",children:(0,r.jsxs)("div",{className:"footer-widget__newsletter-input-box",children:[(0,r.jsx)("input",{type:"email",placeholder:"Email address",name:"email",required:!0}),(0,r.jsx)("button",{type:"submit",className:"footer-widget__newsletter-btn",children:(0,r.jsx)("i",{className:"far fa-paper-plane"})})]})})]})})]}),(0,r.jsxs)(S.Z,{children:[(0,r.jsx)(Z.Z,{xl:6,children:(0,r.jsx)("div",{className:"site-footer__bottom-inner",children:(0,r.jsx)("p",{className:"footer-widget__about-text",children:E})})}),(0,r.jsx)(Z.Z,{xl:6,children:(0,r.jsx)("div",{className:"site-footer__bottom-inner",children:(0,r.jsx)("div",{className:"site-footer__social",children:T.map(e=>{let{id:a,href:s,icon:t}=e;return(0,r.jsx)("a",{href:s,children:(0,r.jsx)("i",{className:t})},a)})})})})]})]})]}),(0,r.jsx)("div",{className:"site-footer__bottom",children:(0,r.jsx)(k.Z,{children:(0,r.jsx)(S.Z,{children:(0,r.jsx)(Z.Z,{xl:12,children:(0,r.jsx)("div",{className:"site-footer__bottom-inner",children:(0,r.jsxs)("p",{className:"site-footer__bottom-text",children:["\xa9 Copyright ",U," by ",(0,r.jsx)("a",{href:"#",children:P})]})})})})})})]})},Y=e=>{let{children:a,pageTitle:s="",footerClassName:i="",navItems:o,onePage:m=!1}=e,[h,f]=(0,t.useState)(!0),{scrollTop:u}=(0,l.Z)(100);return(0,t.useEffect)(()=>{let e=setTimeout(()=>{f(!1)},400);return()=>clearTimeout(e)},[]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(c(),{children:[(0,r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,r.jsxs)("title",{children:[s," || SSYO || South Shore Youth Organization"]})]}),(0,r.jsx)(n,{loading:h}),(0,r.jsxs)("main",{id:"wrapper",style:{opacity:h?0:1},className:"page-wrapper animated fadeIn",children:[a,(0,r.jsx)(F,{footerClassName:i})]}),(0,r.jsx)(v,{navItems:o,onePage:m}),(0,r.jsx)(_,{}),u&&(0,r.jsx)(d.rU,{to:"wrapper",smooth:!0,duration:500,id:"backToTop",style:{cursor:"pointer"},className:"scroll-to-target scroll-to-top d-inline-block fadeIn animated",children:(0,r.jsx)("i",{className:"fa fa-angle-up"})})]})}},5832:function(e,a,s){var r=s(5893),t=s(1664),i=s.n(t);s(7294),a.Z=e=>{let{children:a,href:s,replace:t,passHref:n,scroll:l,shallow:o,prefetch:c,locale:d,legacyBehavior:m,as:h,...f}=e;return(0,r.jsx)(i(),{href:s,replace:t,passHref:n,scroll:l,shallow:o,prefetch:c,locale:d,legacyBehavior:m,as:h,children:(0,r.jsx)("a",{href:s,...f,children:a})})}},148:function(e,a,s){s.d(a,{AX:function(){return n},Wx:function(){return o},_E:function(){return i},nP:function(){return l}});var r=s(2822);let t={id:1,name:"Home",href:"/index-3"},i=[{...t,href:"#home"},{id:2,name:"Services",href:"#services"},{id:3,name:"About",href:"#about"},{id:4,name:"Programs",href:"#Programs"},{id:5,name:"Team",href:"#team"},{id:6,name:"News",href:"#news"}],n=[{...t,href:"#home"},{id:2,name:"About",href:"#about"},{id:3,name:"Programs",href:"#Programs"},{id:4,name:"Services",href:"#services"},{id:5,name:"Testimonial",href:"#testimonial"},{id:6,name:"News",href:"#news"}],l=[{...t,href:"#home"},{id:2,name:"Services",href:"#services"},{id:3,name:"About",href:"#about"},{id:4,name:"Programs",href:"#Programs"},{id:5,name:"Testimonial",href:"#testimonial"},{id:6,name:"Contact",href:"#contact"},{id:7,name:"News",href:"#news"}],o=[{id:1,name:"Services",href:"/services"},{id:2,name:"Services Two",href:"/services-2"},{id:3,name:"Services Three",href:"/services-3"},{id:4,name:"Consumer Product",href:"/consumer-product"},{id:5,name:"Audit Marketing",href:"/audit-marketing"},{id:6,name:"Banking Advising",href:"/banking-advising"},{id:7,name:"Business Growth",href:"/business-growth"},{id:8,name:"Financial Advice",href:"/financial-advice"},{id:9,name:"Marketing Rules",href:"/marketing-rules"}],c={logo:r.default,navItems:[t,{id:4,name:"About",href:"#",subNavItems:[{id:1,name:"Our Team",href:"#"},{id:2,name:"Alumni",href:"#"},{id:3,name:"Partners",href:"#"},{id:4,name:"Become A Member",href:"#"},{id:9,name:"Our Sports Teams",href:"#"},{id:9,name:"Support SSYO",href:"#"}]},{id:2,name:"Programs",href:"",subNavItems:[{id:2,name:"Outreach",href:"#"},{id:3,name:"Mental Health",href:"#"},{id:4,name:"Athletics",href:"#"},{id:5,name:"Education",href:"#"}]},{id:7,name:"News",href:"#"},{id:6,name:"Contact",href:"/contact"}],callText:" ",phone:" ",phoneHref:"12463330079",email:"needhelp@sshore.com",socials:[{id:1,icon:"fab fa-twitter",href:"#"},{id:2,icon:"fab fa-facebook-square",href:"#"},{id:3,icon:"fab fa-pinterest-p",href:"#"},{id:4,icon:"fab fa-instagram",href:"#"}]};a.default=c},6500:function(e,a,s){var r=s(7294);a.Z=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,[a,s]=(0,r.useState)(0),[t,i]=(0,r.useState)(!1),n=(0,r.useCallback)(()=>{var a,r;s(null===(a=window)||void 0===a?void 0:a.scrollY),(null===(r=window)||void 0===r?void 0:r.scrollY)>e?i(!0):i(!1)},[e]);return(0,r.useEffect)(()=>(n(),window.addEventListener("scroll",n),()=>window.removeEventListener("scroll",n)),[n]),{scrollTop:t,scroll:a}}}}]);