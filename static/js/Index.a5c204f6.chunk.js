(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{199:function(e,t,n){},212:function(e,t,n){},215:function(e,t,n){"use strict";n(223),n(181),n(287);var a=n(1),o=n.n(a),r=n(5),i=n.n(r),c=(n(118),n(88)),l=n.n(c),s=(n(291),n(62)),m=n.n(s),u=(n(292),n(103)),d=n.n(u),p=(n(293),n(24)),h=n.n(p),g=n(48),f=n(67),v=n(52),b=n(75),E=n(76),N=(n(142),n(61)),y=n.n(N),w=n(153),C=n.n(w).a.create({baseURL:"http://www.erershop.com/",timeout:1e3,method:"get",withCredentials:!0,responseType:"json",responseEncoding:"utf8",xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN"}),S=n(154),k=n.n(S),T=function(e){y.a.error({title:"\u63d0\u793a",content:e,okText:"\u786e\u5b9a",centered:!0})},x=function(e){return C.get("index.php",{params:{m:"Home",c:"Api",a:"send_validate_code",scene:1,type:"mobile",mobile:e}}).then(function(e){var t=e.data,n=void 0===t?{}:t;return 1===n.status||(T(n.msg||"\u4eca\u5929\u83b7\u53d6\u9a8c\u8bc1\u7801\u8d85\u8fc710\u6761\uff0c\u660e\u5929\u624d\u53ef\u4ee5\u83b7\u53d6"),!1)}).catch(function(e){return console.error("index.php",e),T("\u670d\u52a1\u5f02\u5e38"),!1})},O=function(e,t){return C.post("index.php/Admin/Api/do_login",k.a.stringify({username:e,verify_code:t}),{headers:{"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"}}).then(function(e){var t=e.data,n=void 0===t?{}:t;if(-1===n.status)return T(n.msg),!1;var a={username:n.user.mobile,user_id:n.user.user_id};return localStorage.setItem("ererPcuserObj",JSON.stringify(a)),window.location.href="../xiazai/shopmsg.html",!0}).catch(function(e){return console.error("index.php/Admin/Api/do_login",e),T("\u670d\u52a1\u5f02\u5e38"),!1})},A=(n(199),function(e){y.a.error({title:"\u63d0\u793a",content:e,okText:"\u786e\u5b9a",centered:!0})}),I=60,j=function(e){function t(){var e,n;Object(g.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(v.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(o)))).state={visible:!1,getCerting:!1,certNoTime:0,logining:!1},n.showModal=function(){n.setState({visible:!0})},n.handleCancel=function(e){n.setState({visible:!1})},n.countTimer=function(){var e=n.state.certNoTime;n.setState({certNoTime:e-1},function(){e>1&&setTimeout(n.countTimer,1e3)})},n.getCert=function(e){n.props.form.validateFields(function(e,t){n.validatePhoneNo(t.phoneNo)&&(n.setState({getCerting:!0}),x(t.phoneNo).then(function(e){e&&n.setState({getCerting:!1,certNoTime:I},function(){setTimeout(n.countTimer,1e3)}),n.setState({getCerting:!1})}).catch(function(e){n.setState({getCerting:!1})}))})},n.validatePhoneNo=function(e){if(e){if(/(^1[3-9]\d{9}$)|(^09\d{8}$)/.test(e))return!0;A("\u8bf7\u8f93\u5165\u6b63\u786e\u683c\u5f0f\u7684\u624b\u673a\u53f7\u7801")}else A("\u8bf7\u8f93\u5165\u624b\u673a\u53f7")},n.validateCertNo=function(e){if(e)return!0;A("\u8bf7\u8f93\u5165\u9a8c\u8bc1\u7801")},n.handleSubmit=function(e){e&&e.preventDefault(),n.props.form.validateFields(function(e,t){n.validatePhoneNo(t.phoneNo)&&n.validateCertNo(t.certNo)&&(n.setState({logining:!0}),O(t.phoneNo,t.certNo).then(function(e){n.setState({logining:!1})}).catch(function(e){n.setState({logining:!1})}))})},n}return Object(E.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){for(var e=document.body.querySelectorAll('[href="#login-modal"]'),t=e.length,n=0;n<t;n++)e[n].addEventListener("click",this.showModal,!1)}},{key:"componentWillUnmount",value:function(){for(var e=document.body.querySelectorAll("click",'[href="#login-modal"]'),t=e.length,n=0;n<t;n++)e[n].removeEventListener(this.showModal)}},{key:"render",value:function(){var e=this.props.form.getFieldDecorator,t=this.state,n=t.getCerting,a=t.certNoTime,r=t.logining;return o.a.createElement(o.a.Fragment,null,o.a.createElement(y.a,{title:"\u6b22\u8fce\u5165\u9a7b",visible:this.state.visible,centered:!0,footer:null,closable:!1,className:"component-login-modal",style:{width:"33.2vw"},maskClosable:!0,onCancel:this.handleCancel},o.a.createElement(m.a,{onSubmit:this.handleSubmit,className:"component-login-form"},o.a.createElement(m.a.Item,null,e("phoneNo")(o.a.createElement(d.a,{placeholder:"\u8bf7\u8f93\u5165\u624b\u673a\u53f7",prefix:o.a.createElement(h.a,{type:"user",style:{color:"rgba(0,0,0,.25)"}})}))),o.a.createElement(m.a.Item,null,e("certNo")(o.a.createElement(d.a,{placeholder:"\u8bf7\u8f93\u5165\u9a8c\u8bc1\u7801",prefix:o.a.createElement(h.a,{type:"safety-certificate",style:{color:"rgba(0,0,0,.25)"}}),addonAfter:n?o.a.createElement("span",{className:"info"},"\u83b7\u53d6\u4e2d..."):0===a?o.a.createElement("span",{className:"btn-addon info",onClick:this.getCert},"\u83b7\u53d6\u9a8c\u8bc1\u7801"):o.a.createElement("span",{className:"info"},"".concat(a,"\u79d2\u540e\u83b7\u53d6"))}))),o.a.createElement(l.a,{type:"primary",htmlType:"submit",className:"login-form-button",block:!0,loading:r},"\u767b\u5f55"))))}}]),t}(o.a.Component),_=m.a.create({name:"component-login-form"})(j),q=n(157),P=n.n(q);n(212);i.a.render(o.a.createElement(_,null),document.getElementById("join-us"));try{var R=P.a.getParser(window.navigator.userAgent).getBrowser();/Internet Explorer/i.test(R.name)&&Number.parseInt(R.version)<=9&&(document.body.innerHTML="\u4e0d\u652f\u6301\u8be5IE\u7248\u672c\uff0c\u8bf7\u4f7f\u7528IE10\u6216\u8005\u4ee5\u4e0a\u7248\u672c\u7684IE\u6d4f\u89c8\u5668"),console.log("\u5f53\u524d\u6d4f\u89c8\u5668\uff1a",R.name,"\uff1b\u7248\u672c\uff1a",R.version)}catch(F){}},782:function(e,t,n){e.exports=n(793)},783:function(e,t,n){},787:function(e,t,n){},793:function(e,t,n){"use strict";n.r(t);n(215);var a=n(337),o=n.n(a),r=n(1),i=n.n(r),c=n(5),l=n.n(c),s=(n(783),n(784),n(338)),m=n.n(s),u=n(48),d=n(67),p=n(52),h=n(75),g=n(76),f=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(p.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(o)))).state={QRVisible:!1},n.toggleQRVisible=function(e){e&&e.stopPropagation(),n.setState({QRVisible:!n.state.QRVisible})},n}return Object(g.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.state.QRVisible;return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"fixed fixed-qr"},i.a.createElement("div",{className:"qr-code-list",style:e?{display:"block"}:{}},i.a.createElement("div",{className:"qr-code"},i.a.createElement("img",{src:"".concat("http://res.erershop.com","/right_bar_qr1.png"),alt:""}),i.a.createElement("div",{className:"title"},"\u5546\u5bb6\u7248APP")),i.a.createElement("div",{className:"qr-code"},i.a.createElement("img",{src:"".concat("http://res.erershop.com","/right_bar_qr2.png"),alt:""}),i.a.createElement("div",{className:"title"},"\u6d88\u8d39\u7248APP")),i.a.createElement("div",{className:"qr-code"},i.a.createElement("img",{src:"".concat("http://res.erershop.com","/right_bar_qr3.png"),alt:""}),i.a.createElement("div",{className:"title"},"\u52a0\u5165QQ\u7fa4\u4e86\u89e3\u66f4\u591a"))),e&&i.a.createElement("div",{className:"line"}),i.a.createElement("div",{className:"more-qr",onClick:this.toggleQRVisible}),i.a.createElement(m.a,{className:"right-bar"},i.a.createElement("div",{className:"line"}),i.a.createElement("div",{className:"goto-top",id:"back-top"}))))}}]),t}(i.a.Component),v=(n(787),n(221));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(i.a.createElement(f,null),document.getElementById("right-bar-container")),o.a.polyfill();for(var b=document.querySelectorAll(".top-bar a[href]"),E=0;E<b.length;E++){b[E].addEventListener("click",function(e){document.getElementById(e.target.hash.replace("#","")).scrollIntoView()},!0)}new v.a(".first-page-container .swiper-container",{loop:!0,autoplay:{delay:3e3,disableOnInteraction:!1}}),new v.a(".collaborator .swiper-container",{loop:!0,autoplay:{delay:3e3,disableOnInteraction:!1},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[782,4,0,6]]]);
//# sourceMappingURL=Index.a5c204f6.chunk.js.map