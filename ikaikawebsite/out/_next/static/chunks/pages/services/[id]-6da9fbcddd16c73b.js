(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[395],{9932:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/services/[id]",function(){return n(3328)}])},7878:function(e,t,n){"use strict";var i=n(5893);t.Z=()=>(0,i.jsxs)("ul",{className:"equipment__list",children:[(0,i.jsxs)("li",{children:[" COMPUTER            ",(0,i.jsx)("ul",{children:(0,i.jsx)("li",{children:" Mac Studio "},Math.random())})]},Math.random()),(0,i.jsxs)("li",{children:[" MONITORING",(0,i.jsxs)("ul",{children:[(0,i.jsxs)("li",{children:[" Main Monitors",(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:" 2x Yamaha HS8 Studio Monitors "},Math.random()),(0,i.jsx)("li",{children:" 2x T10S Studio Subwoofers "},Math.random()),(0,i.jsx)("li",{children:" Digitally tuned using Sonarworks Sound ID Reference "},Math.random())]})]},Math.random()),(0,i.jsxs)("li",{children:[" Reference Monitors",(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:" 2x Avantone MixCubes (Active) "},Math.random()),(0,i.jsx)("li",{children:" Digitally tuned using Sonarworks SoundID Reference "},Math.random())]})]})]})]},Math.random()),(0,i.jsxs)("li",{children:[" AUDIO INTERFACES",(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:" Apollo x8p "},Math.random()),(0,i.jsx)("li",{children:" Zoom H8 "},Math.random())]})]},Math.random()),(0,i.jsxs)("li",{children:[" MICROPHONES",(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:" Rode NTK "},Math.random()),(0,i.jsx)("li",{children:" Shure SM7B "},Math.random()),(0,i.jsx)("li",{children:" Shyre SM57 Match Pair "},Math.random()),(0,i.jsx)("li",{children:" Lewitt LCT 040 Match Pair "},Math.random()),(0,i.jsx)("li",{children:" Zoom H8 XYH-6 "},Math.random()),(0,i.jsx)("li",{children:" Zoom H8 SSH-6 "},Math.random())]})]},Math.random()),(0,i.jsxs)("li",{children:[" POWER CONDITION & UPS",(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:" 2x Radial Power-1 Conditioners "},Math.random()),(0,i.jsx)("li",{children:"Furman F1000UPS "},Math.random())]})]},Math.random())]})},3328:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return m},default:function(){return _}});var i=n(5893),a=n(5221),r=n(7294),s=n(3454),l=e=>{let{serviceName:t}=e,[n,l]=(0,r.useState)(!1),[c,o]=(0,r.useState)(""),d=async e=>{l(!0),e.preventDefault(),o(document.getElementById("project__input__name").value);let n={name:document.getElementById("project__input__name").value,phone:document.getElementById("project__input__phone").value,email:document.getElementById("project__input__email").value,message:document.getElementById("project__input__message").value,service:t},i=await fetch("https://ikaikarecords-production.up.railway.app/email",{method:"POST",body:JSON.stringify(n),headers:{"Content-Type":"application/json"}});await i.json()};return(0,i.jsx)(i.Fragment,{children:n?(0,i.jsxs)("div",{className:"project__sent",children:["Thanks ",c,"! We look forward to working with you and will get back to you as soon as possible."]}):(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.Z,{headerName:"contact form",minor:!0}),(0,i.jsx)("div",{className:"project__container",children:(0,i.jsxs)("form",{className:"project__form",onSubmit:d,children:[(0,i.jsxs)("div",{className:"project__input",first:"",children:[(0,i.jsx)("a",{children:" NAME "}),(0,i.jsx)("input",{className:"project__input__text",id:"project__input__name",placeholder:"Anthony Fantano",required:!0})]}),(0,i.jsxs)("div",{className:"project__input",second:"",children:[(0,i.jsx)("a",{children:" PHONE (OPTIONAL) "}),(0,i.jsx)("input",{type:"tel",id:"project__input__phone",placeholder:"999-999-9999",className:"project__input__text"})]}),(0,i.jsxs)("div",{className:"project__input",third:"",children:[(0,i.jsx)("a",{children:" EMAIL "}),(0,i.jsx)("input",{type:"email",placeholder:"email@example.com",id:"project__input__email",className:"project__input__text",required:!0})]}),(0,i.jsxs)("div",{className:"project__input",fourth:"",children:[(0,i.jsx)("a",{children:" MESSAGE "}),(0,i.jsx)("textarea",{className:"project__input__text",id:"project__input__message",placeholder:"Tell us a little about your ".concat(t.toLowerCase()," project..."),rows:"3",required:!0})]}),(0,i.jsx)(s.E.input,{whileHover:{backgroundColor:"#a6a6a6"},transition:{duration:.25},className:"project__input__submit",type:"submit",value:"SUBMIT"})]})})]})})},c=n(7878);n(5675);var o=n(4298),d=n.n(o);n(1163);var u=n(9008),h=n.n(u),m=!0,_=e=>{let{service:t}=e,[n,s]=(0,r.useState)("");return(0,r.useEffect)(()=>{t.attributes.calendlyLink?s("calendar"):s("form")}),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(h(),{children:[(0,i.jsxs)("title",{children:[t.attributes.name," - Ikaika Records"]}),(0,i.jsx)("meta",{name:"description",content:t.attributes.metadescription})]}),(0,i.jsxs)("div",{className:"radial__gradient",children:[(0,i.jsx)("div",{className:"page__padding"}),(0,i.jsx)(a.Z,{headerName:t.attributes.name,prev:"services"}),"calendar"==n?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{className:"calendly-inline-widget","data-url":"https://calendly.com/ikaikarecords/30min?hide_gdpr_banner=1&background_color=161A1E&text_color=ffffff&primary_color=1C6590",style:{height:850}}),(0,i.jsx)(d(),{type:"text/javascript",src:"https://assets.calendly.com/assets/external/widget.js",async:!0})]}):null,(0,i.jsx)("div",{className:"content__container",children:(0,i.jsxs)("div",{className:"servicepage__description",children:[(0,i.jsx)("img",{alt:t.attributes.alt,src:t.attributes.imageLink}),(0,i.jsxs)("h4",{children:[" ",t.attributes.name.toUpperCase()," - ",t.attributes.tag.toUpperCase()," "]}),(0,i.jsxs)("p",{children:[" ",t.attributes.description," "]})]})}),"form"==n?(0,i.jsx)(l,{serviceName:t.attributes.name}):null,"studio-recording"==t.attributes.siteLink?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.Z,{headerName:"recording equipment",minor:!0}),(0,i.jsx)("div",{className:"content__container",children:(0,i.jsx)(c.Z,{})})]}):null]})]})}},9008:function(e,t,n){e.exports=n(2636)},1163:function(e,t,n){n(6885)},4298:function(e,t,n){e.exports=n(5442)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=9932)}),_N_E=e.O()}]);