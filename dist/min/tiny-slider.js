var tns=function(){var t=window,vi=t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||t.msRequestAnimationFrame||function(t){return setTimeout(t,16)},e=window,hi=e.cancelAnimationFrame||e.mozCancelAnimationFrame||function(t){clearTimeout(t)};function pi(){for(var t,e,n,i=arguments[0]||{},a=1,r=arguments.length;a<r;a++)if(null!==(t=arguments[a]))for(e in t)i!==(n=t[e])&&void 0!==n&&(i[e]=n);return i}function mi(){var t=document,e=t.body;return e||((e=t.createElement("body")).fake=!0),e}var n=document.documentElement;function gi(t){var e="";return t.fake&&(e=n.style.overflow,t.style.background="",t.style.overflow=n.style.overflow="hidden",n.appendChild(t)),e}function yi(t,e){t.fake&&(t.remove(),n.style.overflow=e,n.offsetHeight)}function xi(t,e,n,i){"insertRule"in t?t.insertRule(e+"{"+n+"}",i):t.addRule(e,n,i)}function bi(t){return("insertRule"in t?t.cssRules:t.rules).length}function wi(t,e,n){for(var i=0,a=t.length;i<a;i++)e.call(n,t[i],i)}var i="classList"in document.createElement("_"),Ci=i?function(t,e){return t.classList.contains(e)}:function(t,e){return 0<=t.className.indexOf(e)},Ai=i?function(t,e){Ci(t,e)||t.classList.add(e)}:function(t,e){Ci(t,e)||(t.className+=" "+e)},Mi=i?function(t,e){Ci(t,e)&&t.classList.remove(e)}:function(t,e){Ci(t,e)&&(t.className=t.className.replace(e,""))};function Ti(t,e){return t.hasAttribute(e)}function r(t){return void 0!==t.item}function ki(t,e){if(t=r(t)||t instanceof Array?t:[t],"[object Object]"===Object.prototype.toString.call(e))for(var n=t.length;n--;)for(var i in e)t[n].setAttribute(i,e[i])}function Ni(t,e){t=r(t)||t instanceof Array?t:[t];for(var n=(e=e instanceof Array?e:[e]).length,i=t.length;i--;)for(var a=n;a--;)t[i].removeAttribute(e[a])}function Ei(t){Ti(t,"hidden")||ki(t,{hidden:""})}function Ii(t){Ti(t,"hidden")&&Ni(t,"hidden")}function Oi(t){return 0<t.offsetWidth&&0<t.offsetHeight}function Bi(e){if("string"==typeof e){var n=[e],i=e.charAt(0).toUpperCase()+e.substr(1);["Webkit","Moz","ms","O"].forEach(function(t){"ms"===t&&"transform"!==e||n.push(t+i)}),e=n}for(var t=document.createElement("fakeelement"),a=(e.length,0);a<e.length;a++){var r=e[a];if(void 0!==t.style[r])return r}return!1}function Li(t,e){var n=!1;return/^Webkit/.test(t)?n="webkit"+e+"End":/^O/.test(t)?n="o"+e+"End":t&&(n=e.toLowerCase()+"end"),n}var a=!1;try{var o=Object.defineProperty({},"passive",{get:function(){a=!0}});window.addEventListener("test",null,o)}catch(t){}var s=!!a&&{passive:!0};function Si(t,e){for(var n in e){var i=("touchstart"===n||"touchmove"===n)&&s;t.addEventListener(n,e[n],i)}}function Di(t,e){for(var n in e){var i=0<=["touchstart","touchmove"].indexOf(n)&&s;t.removeEventListener(n,e[n],i)}}function Ri(){return{topics:{},on:function(t,e){this.topics[t]=this.topics[t]||[],this.topics[t].push(e)},off:function(t,e){if(this.topics[t])for(var n=0;n<this.topics[t].length;n++)if(this.topics[t][n]===e){this.topics[t].splice(n,1);break}},emit:function(t,e){this.topics[t]&&this.topics[t].forEach(function(t){t(e)})}}}Object.keys||(Object.keys=function(t){var e=[];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.push(n);return e}),"remove"in Element.prototype||(Element.prototype.remove=function(){this.parentNode&&this.parentNode.removeChild(this)});var Hi=function(h){h=pi({container:".slider",mode:"carousel",axis:"horizontal",items:1,gutter:0,edgePadding:0,fixedWidth:!1,autoWidth:!1,viewportMax:!1,slideBy:1,controls:!0,controlsText:["prev","next"],controlsContainer:!1,prevButton:!1,nextButton:!1,nav:!0,navContainer:!1,navAsThumbnails:!1,arrowKeys:!1,speed:300,autoplay:!1,autoplayTimeout:5e3,autoplayDirection:"forward",autoplayText:["start","stop"],autoplayHoverPause:!1,autoplayButton:!1,autoplayButtonOutput:!0,autoplayResetOnVisibility:!0,animateIn:"tns-fadeIn",animateOut:"tns-fadeOut",animateNormal:"tns-normal",animateDelay:!1,loop:!0,rewind:!1,autoHeight:!1,responsive:!1,lazyload:!1,touch:!0,mouseDrag:!1,swipeAngle:15,nested:!1,freezable:!0,onInit:!1,useLocalStorage:!0},h||{});var N=document,p=window,s=13,l=32,u=33,c=34,f=35,d=36,v=37,m=38,g=39,y=40,o={},x=h.useLocalStorage;if(x){var t=navigator.userAgent,e=new Date;try{(o=p.localStorage)?(o.setItem(e,e),x=o.getItem(e)==e,o.removeItem(e)):x=!1,x||(o={})}catch(t){x=!1}x&&(o.tnsApp&&o.tnsApp!==t&&["tC","tPL","tMQ","tTf","t3D","tTDu","tTDe","tADu","tADe","tTE","tAE"].forEach(function(t){o.removeItem(t)}),localStorage.tnsApp=t)}function n(t,e){return o[t]?(r=o[t],0<=["true","false"].indexOf(r)?JSON.parse(r):r):(n=o,i=t,a=e,x&&n.setItem(i,a),a);var n,i,a,r}for(var i,a,r,b,w,C,A,M=n("tC",function(){var t=document,e=mi(),n=gi(e),i=t.createElement("div"),a=!1;e.appendChild(i);try{for(var r,o="(10px * 10)",s=["calc"+o,"-moz-calc"+o,"-webkit-calc"+o],l=0;l<3;l++)if(r=s[l],i.style.width=r,100===i.offsetWidth){a=r.replace(o,"");break}}catch(t){}return e.fake?yi(e,n):i.remove(),a}()),T=n("tPL",function(){var t,e=document,n=mi(),i=gi(n),a=e.createElement("div"),r=e.createElement("div"),o="";a.className="tns-t-subp2",r.className="tns-t-ct";for(var s=0;s<70;s++)o+="<div></div>";return r.innerHTML=o,a.appendChild(r),n.appendChild(a),t=Math.abs(a.getBoundingClientRect().left-r.children[67].getBoundingClientRect().left)<2,n.fake?yi(n,i):a.remove(),t}()),E=n("tMQ",(a=document,r=mi(),b=gi(r),w=a.createElement("div"),C=a.createElement("style"),A="@media all and (min-width:1px){.tns-mq-test{position:absolute}}",C.type="text/css",w.className="tns-mq-test",r.appendChild(C),r.appendChild(w),C.styleSheet?C.styleSheet.cssText=A:C.appendChild(a.createTextNode(A)),i=window.getComputedStyle?window.getComputedStyle(w).position:w.currentStyle.position,r.fake?yi(r,b):w.remove(),"absolute"===i)),k=n("tTf",Bi("transform")),I=n("t3D",function(t){if(!t)return!1;if(!window.getComputedStyle)return!1;var e,n=document,i=mi(),a=gi(i),r=n.createElement("p"),o=9<t.length?"-"+t.slice(0,-9).toLowerCase()+"-":"";return o+="transform",i.insertBefore(r,null),r.style[t]="translate3d(1px,1px,1px)",e=window.getComputedStyle(r).getPropertyValue(o),i.fake?yi(i,a):r.remove(),void 0!==e&&0<e.length&&"none"!==e}(k)),O=n("tTDu",Bi("transitionDuration")),B=n("tTDe",Bi("transitionDelay")),L=n("tADu",Bi("animationDuration")),S=n("tADe",Bi("animationDelay")),D=n("tTE",Li(O,"Transition")),R=n("tAE",Li(L,"Animation")),H=p.console&&"function"==typeof p.console.warn,P=["container","controlsContainer","prevButton","nextButton","navContainer","autoplayButton"],W=P.length;W--;){var z=P[W];if("string"==typeof h[z]){var q=N.querySelector(h[z]);if(!q||!q.nodeName)return void(H&&console.warn("Can't find",h[z]));h[z]=q}}if(!(h.container.children.length<1)){if(h.responsive){var j={},F=h.responsive;for(var V in F){var Q=F[V];j[V]="number"==typeof Q?{items:Q}:Q}h.responsive=j,j=null,0 in h.responsive&&delete(h=pi(h,h.responsive[0])).responsive[0]}var X="carousel"===h.mode;if(!X){h.axis="horizontal",h.edgePadding=!1;var Y=h.animateIn,K=h.animateOut,U=h.animateDelay,G=h.animateNormal}var J,_,Z,$,tt,et,nt,it,at,rt="horizontal"===h.axis,ot=N.createElement("div"),st=N.createElement("div"),lt=h.container,ut=lt.parentNode,ct=lt.outerHTML,ft=lt.children,dt=ft.length,vt=h.responsive,ht=0,pt=on(),mt=h.nested,gt=h.autoWidth,yt=un("fixedWidth"),xt=un("edgePadding"),bt=un("gutter"),wt=sn(),Ct=gt?1:Math.floor(un("items")),At="page"===un("slideBy")?Ct:un("slideBy"),Mt=h.viewportMax||h.fixedWidthViewportWidth,Tt=un("arrowKeys"),kt=un("speed"),Nt=h.rewind,Et=!Nt&&h.loop,It=un("autoHeight"),Ot=(at=document.createElement("style"),it&&at.setAttribute("media",it),document.querySelector("head").appendChild(at),at.sheet?at.sheet:at.styleSheet),Bt=h.lazyload,Lt=[],St=Et?(et=function(){{if(gt||yt&&!Mt)return dt-1;var t=yt?"fixedWidth":"items",e=[];if((yt||h[t]<dt)&&e.push(h[t]),vt)for(var n in vt){var i=vt[n][t];i&&(yt||i<dt)&&e.push(i)}return e.length||e.push(0),Math.ceil(yt?Mt/Math.min.apply(null,e):Math.max.apply(null,e))}}(),nt=X?Math.ceil((5*et-dt)/2):4*et-dt,nt=Math.max(et,nt),ln("edgePadding")?nt+1:nt):0,Dt=X?dt+2*St:dt+St,Rt=!(!yt&&!gt||Et),Ht=yt?zn():null,Pt=!X||!Et,Wt=rt?"left":"top",zt="",qt="",jt=an(un("startIndex")),Ft=jt,Vt=0,Qt=gt?null:nn(),Xt=h.swipeAngle,Yt=!Xt||"?",Kt=!1,Ut=h.onInit,Gt=new Ri,Jt=" tns-slider tns-"+h.mode,_t=lt.id||(tt=window.tnsId,window.tnsId=tt?tt+1:1,"tns"+window.tnsId),Zt=un("disable"),$t=h.freezable,te=gt?null:bn(),ee={click:Un,keydown:function(t){switch((t=ni(t)).keyCode){case v:case m:case u:Ce.disabled||Un(t,-1);break;case g:case y:case c:Ae.disabled||Un(t,1);break;case d:Kn("first",t);break;case f:Kn("last",t)}}},ne={click:function(t){Kt&&Yn();var e=(t=ni(t)).target||t.srcElement;for(;e!==ke&&!Ti(e,"data-nav");)e=e.parentNode;Ti(e,"data-nav")&&Kn(Ie=[].indexOf.call(Me,e),t)},keydown:function(t){var e=N.activeElement;if(!Ti(e,"data-nav"))return;var n=(t=ni(t)).keyCode,i=[].indexOf.call(Me,e),a=Ne.length,r=Ne.indexOf(i);h.navContainer&&(a=dt,r=i);function o(t){return h.navContainer?t:Ne[t]}switch(n){case v:case u:0<r&&ei(Me[o(r-1)]);break;case m:case d:0<r&&ei(Me[o(0)]);break;case g:case c:r<a-1&&ei(Me[o(r+1)]);break;case y:case f:r<a-1&&ei(Me[o(a-1)]);break;case s:case l:Kn(Ie=i,t)}}},ie={mouseover:function(){De&&(Jn(),Re=!0)},mouseout:function(){Re&&(Gn(),Re=!1)}},ae={visibilitychange:function(){N.hidden?De&&(Jn(),Pe=!0):Pe&&(Gn(),Pe=!1)}},re={keydown:function(t){switch((t=ni(t)).keyCode){case v:Un(t,-1);break;case g:Un(t,1)}}},oe={touchstart:oi,touchmove:si,touchend:ui,touchcancel:ui},se={mousedown:oi,mousemove:si,mouseup:ui,mouseleave:ui},le=ln("controls"),ue=ln("nav"),ce=!!gt||h.navAsThumbnails,fe=ln("autoplay"),de=ln("touch"),ve=ln("mouseDrag"),he="tns-slide-active",pe="tns-complete",me={load:Tn,error:Tn};if(le)var ge,ye,xe=un("controls"),be=un("controlsText"),we=h.controlsContainer,Ce=h.prevButton,Ae=h.nextButton;if(ue)var Me,Te=un("nav"),ke=h.navContainer,Ne=[],Ee=Ne,Ie=-1,Oe=rn(),Be=Oe,Le="tns-nav-active";if(fe)var Se,De,Re,He,Pe,We=un("autoplay"),ze=un("autoplayTimeout"),qe="forward"===h.autoplayDirection?1:-1,je=un("autoplayText"),Fe=un("autoplayHoverPause"),Ve=h.autoplayButton,Qe=un("autoplayResetOnVisibility"),Xe=["<span class='tns-visually-hidden'>"," animation</span>"];if(de||ve)var Ye,Ke={},Ue={},Ge=!1,Je=0,_e=rt?function(t,e){return t.x-e.x}:function(t,e){return t.y-e.y};if(de)var Ze=un("touch");if(ve)var $e=un("mouseDrag");te&&(xe=Te=Ze=$e=Tt=We=Fe=Qe=!1),k&&(Wt=k,zt="translate",I?(zt+=rt?"3d(":"3d(0px, ",qt=rt?", 0px, 0px)":", 0px)"):(zt+=rt?"X(":"Y(",qt=")")),function(){ln("gutter");ot.className="tns-outer",st.className="tns-inner",st.id=_t+"-iw",It&&(st.className+=" tns-ah");""===lt.id&&(lt.id=_t);Jt+=T||gt?" tns-subpixel":" tns-no-subpixel",Jt+=M?" tns-calc":" tns-no-calc",X&&(Jt+=" tns-"+h.axis);if(lt.className+=Jt,X){var t=N.createElement("div");t.className="tns-ovh",ot.appendChild(t),t.appendChild(st)}else ot.appendChild(st);if(ut.insertBefore(ot,lt),st.appendChild(lt),X&&D){var e={};e[D]=Yn,Si(lt,e)}for(var n=0;n<dt;n++){var i=ft[n];i.id||(i.id=_t+"-item"+n),Ai(i,"tns-item"),!X&&G&&Ai(i,G),ki(i,{"aria-hidden":"true",tabindex:"-1"})}if(St){for(var a=N.createDocumentFragment(),r=N.createDocumentFragment(),o=St;o--;){var s=o%dt,l=ft[s].cloneNode(!0);if(Ni(l,"id"),r.insertBefore(l,r.firstChild),X){var u=ft[dt-1-s].cloneNode(!0);Ni(u,"id"),a.appendChild(u)}}lt.insertBefore(a,lt.firstChild),lt.appendChild(r),ft=lt.children}if(ln("autoHeight")||!X||gt||!rt){var c=lt.querySelectorAll("img");wi(c,function(t){var e=t.src;e.indexOf("data:image")<0?(Si(t,me),t.src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",t.src=e):Ai(t,pe)}),vi(function(){En(function(t){for(var e=[],n=0,i=t.length;n<i;n++)e.push(t[n]);return e}(c),function(){$=!0,Zt||(rt&&!gt||(Ln(),Mn(),gt&&(Ct=un("items"),Ht=zn(),te=bn(),Qt=nn(),te&&(xe=Te=Ze=$e=Tt=We=Fe=Qe=!1),gn()),rt||ci()),X&&jn())})})}X&&rt&&!gt&&jn();(function(){for(var t=jt,e=jt+Math.min(dt,Ct);t<e;t++){var n=ft[t];ki(n,{"aria-hidden":"false"}),Ni(n,["tabindex"]),Ai(n,he),X||(n.style.left=100*(t-jt)/Ct+"%",Ai(n,Y),Mi(n,G))}if(X&&rt&&(T||gt?(xi(Ot,"#"+_t+" > .tns-item","font-size:"+p.getComputedStyle(ft[0]).fontSize+";",bi(Ot)),xi(Ot,"#"+_t,"font-size:0;",bi(Ot))):wi(ft,function(t,e){var n;t.style.marginLeft=(n=e,M?M+"("+100*n+"% / "+Dt+")":100*n/Dt+"%")})),E){var i=cn(h.edgePadding,h.gutter,h.fixedWidth,h.speed);xi(Ot,"#"+_t+"-iw",i,bi(Ot)),X&&(i=rt&&!gt?"width:"+fn(h.fixedWidth,h.gutter,h.items)+";":"",O&&(i+=pn(kt)),xi(Ot,"#"+_t,i,bi(Ot))),i=rt&&!gt?dn(h.fixedWidth,h.gutter,h.items):"",h.gutter&&(i+=vn(h.gutter)),X||(O&&(i+=pn(kt)),L&&(i+=mn(kt))),i&&xi(Ot,"#"+_t+" > .tns-item",i,bi(Ot))}else{st.style.cssText=cn(xt,bt,yt),X&&rt&&!gt&&(lt.style.width=fn(yt,bt,Ct));var i=rt&&!gt?dn(yt,bt,Ct):"";bt&&(i+=vn(bt)),i&&xi(Ot,"#"+_t+" > .tns-item",i,bi(Ot))}if(vt&&E)for(var a in vt){a=parseInt(a);var r=vt[a],i="",o="",s="",l="",u=gt?null:un("items",a),c=un("fixedWidth",a),f=un("speed",a),d=un("edgePadding",a),v=un("gutter",a);("edgePadding"in r||"gutter"in r)&&(o="#"+_t+"-iw{"+cn(d,v,c,f)+"}"),X&&rt&&!gt&&("fixedWidth"in r||"items"in r||yt&&"gutter"in r)&&(s="width:"+fn(c,v,u)+";"),O&&"speed"in r&&(s+=pn(f)),s&&(s="#"+_t+"{"+s+"}"),("fixedWidth"in r||yt&&"gutter"in r||!X&&"items"in r)&&(l+=dn(c,v,u)),"gutter"in r&&(l+=vn(v)),!X&&"speed"in r&&(O&&(l+=pn(f)),L&&(l+=mn(f))),l&&(l="#"+_t+" > .tns-item{"+l+"}"),(i=o+s+l)&&Ot.insertRule("@media (min-width: "+a/16+"em) {"+i+"}",Ot.cssRules.length)}})(),gt||gn();vt&&wn()}();var tn=Et?X?function(){var t=Vt,e=Qt;t+=At,e-=At,xt?(t+=1,e-=1):yt&&wt%(yt+bt)&&(e-=1),St&&(e<jt?jt-=dt:jt<t&&(jt+=dt))}:function(){if(Qt<jt)for(;Vt+dt<=jt;)jt-=dt;else if(jt<Vt)for(;jt<=Qt-dt;)jt+=dt}:function(){jt=Math.max(Vt,Math.min(Qt,jt))},en=X?function(){var e,n,i,a,t,r,o,s,l,u,c;O||!kt?(Fn(),kt&&Oi(lt)||Yn()):(e=lt,n=Wt,i=zt,a=qt,t=qn(),r=kt,o=Yn,s=Math.min(r,10),l=0<=t.indexOf("%")?"%":"px",t=t.replace(l,""),u=Number(e.style[n].replace(i,"").replace(a,"").replace(l,"")),c=(t-u)/r*s,setTimeout(function t(){r-=s,u+=c,e.style[n]=i+u+l+a,0<r?setTimeout(t,s):o()},s)),rt||ci()}:function(){Lt=[];var t={};t[D]=t[R]=Yn,Di(ft[Ft],t),Si(ft[jt],t),Vn(Ft,Y,K,!0),Vn(jt,G,Y),D&&R&&kt&&Oi(lt)||Yn()};return{getInfo:di,events:Gt,goTo:Kn,play:function(){We&&!De&&(Zn(),He=!1)},pause:function(){De&&($n(),He=!0)},isOn:J,updateSliderHeight:Bn,rebuild:function(){return Hi(h)},destroy:function(){if(Ot.disabled=!0,Di(p,{resize:yn}),Tt&&Di(N,re),xe&&(Di(we,ee),h.controlsContainer&&(Ni(we,["aria-label","tabindex"]),Ni(we.children,["aria-controls","aria-disabled","tabindex"])),we=Ce=Ae=null),Te&&(Di(ke,ne),h.navContainer&&(Ni(ke,["aria-label"]),Ni(Me,["aria-selected","aria-controls","tabindex"])),ke=Me=null),We&&(clearInterval(Se),Ve&&Di(Ve,{click:ti}),Di(lt,ie),Di(lt,ae),h.autoplayButton&&Ni(Ve,["data-action"])),X&&D){var t={};t[D]=Yn,Di(lt,t)}Ze&&Di(lt,oe),$e&&Di(lt,se),ot.insertAdjacentHTML("beforebegin",ct),ot.remove(),ft=_t=dt=Dt=St=ot=st=lt=jt=Ft=Ct=At=Oe=Be=le=Ne=Ee=this.getInfo=this.events=this.goTo=this.play=this.pause=this.destroy=null,this.isOn=J=!1}}}function nn(){if(yt||gt){if(yt)return Math.floor(-Ht/(yt+bt))+1;for(var t=Dt-1,e=t;_[t]>-Ht;)e=--t;return e}return Et||X?Math.max(0,Dt-Math.ceil(un("items"))):Dt-1}function an(t){return t=t?Math.max(0,Math.min(Et?dt-1:dt-Ct,t)):0,X?t+St:t}function rn(t){for(null==t&&(t=jt),X&&(t-=St);t<0;)t+=dt;return Math.floor(t%dt)}function on(){return p.innerWidth||N.documentElement.clientWidth||N.body.clientWidth}function sn(){var t=function t(e){return e.clientWidth||t(e.parentNode)}(ut);return xt?t-(2*xt-bt):t}function ln(t){if(h[t])return!0;if(vt)for(var e in vt)if(vt[e][t])return!0;return!1}function un(t,e){e=e||pt;var n,i={slideBy:"page",edgePadding:!1};if(!X&&t in i)n=i[t];else if("items"===t&&yt)n=Math.floor(e/(yt+bt));else if("autoHeight"===t&&"outer"===mt)n=!0;else if(n=h[t],vt)for(var a in vt)e>=parseInt(a)&&t in vt[a]&&(n=vt[a][t]);return"slideBy"===t&&"page"===n&&(n=un("items")),X||"slideBy"!==t&&"items"!==t||(n=Math.floor(n)),n}function cn(t,e,n,i){var a="";if(t){var r=t;e&&(r-=e),a=rt?"margin: 0 "+r+"px 0 "+t+"px;":"margin: "+t+"px 0 "+r+"px 0;"}else if(e&&!n){var o="-"+e+"px";a="margin: 0 "+(rt?o+" 0 0":"0 "+o+" 0")+";"}return O&&i&&(a+=pn(i)),a}function fn(t,e,n){return t?(t+e)*Dt+"px":M?M+"("+100*Dt+"% / "+n+")":100*Dt/n+"%"}function dn(t,e,n){var i;if(t)i=t+e+"px";else{X||(n=Math.floor(n));var a=X?Dt:n;i=M?M+"(100% / "+a+")":100/a+"%"}return i="width:"+i,"inner"!==mt?i+";":i+" !important;"}function vn(t){var e="";!1!==t&&(e=(rt?"padding-":"margin-")+(rt?"right":"bottom")+": "+t+"px;");return e}function hn(t,e){var n=t.substring(0,t.length-e).toLowerCase();return n&&(n="-"+n+"-"),n}function pn(t){return hn(O,18)+"transition-duration:"+t/1e3+"s;"}function mn(t){return hn(L,17)+"animation-duration:"+t/1e3+"s;"}function gn(){if(fe){var t=We?"stop":"start";Ve?ki(Ve,{"data-action":t}):h.autoplayButtonOutput&&(ot.insertAdjacentHTML("afterbegin",'<button data-action="'+t+'" type="button">'+Xe[0]+t+Xe[1]+je[0]+"</button>"),Ve=ot.querySelector("[data-action]")),Ve&&Si(Ve,{click:ti}),We?(Zn(),Fe&&Si(lt,ie),Qe&&Si(lt,ae)):Ve&&Ei(Ve)}if(ue){var e=X?St:0;if(ke){ki(ke,{"aria-label":"Carousel Pagination"}),Me=ke.children;for(var n=0;n<dt;n++){var i=Me[n];i&&ki(i,{"data-nav":n,tabindex:"-1","aria-selected":"false","aria-controls":ft[e+n].id})}}else{var a="",r=ce?"":"hidden";for(n=0;n<dt;n++)a+='<button data-nav="'+n+'" tabindex="-1" aria-selected="false" aria-controls="'+ft[e+n].id+'" '+r+' type="button"></button>';a='<div class="tns-nav" aria-label="Carousel Pagination">'+a+"</div>",ot.insertAdjacentHTML("afterbegin",a),ke=ot.querySelector(".tns-nav"),Me=ke.children}if(fi(),O){var o=O.substring(0,O.length-18).toLowerCase(),s="transition: all "+kt/1e3+"s";o&&(s="-"+o+"-"+s),xi(Ot,"[aria-controls^="+_t+"-item]",s,bi(Ot))}ki(Me[Oe],{tabindex:"0","aria-selected":"true"}),Ai(Me[Oe],Le),Si(ke,ne),Te||Ei(ke)}le&&(we||Ce&&Ae?(we&&(Ce=we.children[0],Ae=we.children[1],ki(we,{"aria-label":"Carousel Navigation",tabindex:"0"}),ki(we.children,{"aria-controls":_t,tabindex:"-1"})),ki(Ce,{"data-controls":"prev"}),ki(Ae,{"data-controls":"next"})):(ot.insertAdjacentHTML("afterbegin",'<div class="tns-controls" aria-label="Carousel Navigation" tabindex="0"><button data-controls="prev" tabindex="-1" aria-controls="'+_t+'" type="button">'+be[0]+'</button><button data-controls="next" tabindex="-1" aria-controls="'+_t+'" type="button">'+be[1]+"</button></div>"),we=ot.querySelector(".tns-controls"),Ce=we.children[0],Ae=we.children[1]),ge=Dn(Ce),ye=Dn(Ae),Pn(),we?Si(we,ee):(Si(Ce,ee),Si(Ae,ee)),xe||Ei(we)),Ze&&Si(lt,oe),$e&&Si(lt,se),Tt&&Si(N,re),"inner"===mt?Gt.on("outerResized",function(){xn(),Gt.emit("innerLoaded",di())}):Si(p,{resize:yn}),"outer"===mt?Gt.on("innerLoaded",Nn):!It&&X||Zt||Nn(),gt||Mn(),Cn(),Gt.on("indexChanged",In),"function"==typeof Ut&&Ut(di()),"inner"===mt&&Gt.emit("innerLoaded",di()),Zt&&An(!0),J=!0}function yn(t){vi(function(){xn(ni(t))})}function xn(t){if(J){pt=on(),"outer"===mt&&Gt.emit("outerResized",di(t));var e,n,i=ht,a=xt,r=bt,o=jt,s=Ct,l=te,u=!1;if(xt=un("edgePadding"),bt=un("gutter"),wt=sn(),vt&&wn(),i!==ht&&Gt.emit("newBreakpointStart",di(t)),rt&&!gt||Zt||(Ln(),rt||(ci(),u=!0)),(yt||gt)&&(Ht=zn(),Qt=nn()),i!==ht||yt||gt){var c=Tt,f=It,d=yt,v=Zt;if(Ct=un("items"),At=un("slideBy"),Zt=un("disable"),Rt&&(u=!0),te=bn(),Ct!==s&&(yt||gt||(Qt=nn()),tn()),Zt!==v&&An(Zt),te===l||Zt||(te?Fn(qn(an(0))):u=!0,Cn()),i!==ht&&(kt=un("speed"),(yt=un("fixedWidth"))!==d&&(u=!0),(It=un("autoHeight"))!==f&&(It||(st.style.height=""))),(Tt=!te&&un("arrowKeys"))!==c&&(Tt?Si(N,re):Di(N,re)),le){var h=xe,p=be;xe=!te&&un("controls"),be=un("controlsText"),xe!==h&&(xe?Ii(we):Ei(we)),be!==p&&(Ce.innerHTML=be[0],Ae.innerHTML=be[1])}if(ue){var m=Te;(Te=!te&&un("nav"))!==m&&(Te?(Ii(ke),fi()):Ei(ke))}if(de){var g=Ze;(Ze=!te&&un("touch"))!==g&&X&&(Ze?Si(lt,oe):Di(lt,oe))}if(ve){var y=$e;($e=!te&&un("mouseDrag"))!==y&&X&&($e?Si(lt,se):Di(lt,se))}if(fe){var x=We,b=Fe,w=Qe,C=je;if(te?We=Fe=Qe=!1:(We=un("autoplay"))?(Fe=un("autoplayHoverPause"),Qe=un("autoplayResetOnVisibility")):Fe=Qe=!1,je=un("autoplayText"),ze=un("autoplayTimeout"),We!==x&&(We?(Ve&&Ii(Ve),De||He||Zn()):(Ve&&Ei(Ve),De&&$n())),Fe!==b&&(Fe?Si(lt,ie):Di(lt,ie)),Qe!==w&&(Qe?Si(N,ae):Di(N,ae)),Ve&&je!==C){var A=We?1:0,M=Ve.innerHTML,T=M.length-C[A].length;M.substring(T)===C[A]&&(Ve.innerHTML=M.substring(0,T)+je[A])}}if(!E){if(te||xt===a&&bt===r||(st.style.cssText=cn(xt,bt,yt)),rt&&!yt){X&&(lt.style.width=fn(!1,null,Ct));var k=dn(yt,bt,Ct)+vn(bt);n=bi(e=Ot)-1,"deleteRule"in e?e.deleteRule(n):e.removeRule(n),xi(Ot,"#"+_t+" > .tns-item",k,bi(Ot))}yt||(u=!0)}jt===o||Zt||(Gt.emit("indexChanged",di()),u=!0),(Ct!==s||gt)&&(In(),function(){if(!X){for(var t=jt+Math.min(dt,Ct),e=Dt;e--;){var n=ft[e];jt<=e&&e<t?(Ai(n,"tns-moving"),n.style.left=100*(e-jt)/Ct+"%",Ai(n,Y),Mi(n,G)):n.style.left&&(n.style.left="",Ai(n,G),Mi(n,Y)),Mi(n,K)}setTimeout(function(){wi(ft,function(t){Mi(t,"tns-moving")})},300)}}(),navigator.msMaxTouchPoints&&setSnapInterval())}Zt||(!It&&X||Nn(),u&&(jn(),Ft=jt)),i!==ht&&Gt.emit("newBreakpointEnd",di(t))}}function bn(){return!!Zt||!!$t&&(yt||gt?Et?(yt?(yt+bt)*dt:_[dt])-bt<=wt:!Ht:dt<=Ct)}function wn(){var t=ht=0;for(var e in vt)pt>=parseInt(e)&&(ht=t+1),t++}function Cn(){var t="tns-transparent";if(te){if(!Z){if(xt&&(st.style.margin="0px"),St)for(var e=St;e--;)X&&Ai(ft[e],t),Ai(ft[Dt-e-1],t);Z=!0}}else if(Z){if(xt&&E&&(st.style.margin=""),St)for(e=St;e--;)X&&Mi(ft[e],t),Mi(ft[Dt-e-1],t);Z=!1}}function An(t){var e=ft.length;if(t){if(Ot.disabled=!0,lt.className=lt.className.replace(Jt.substring(1),""),Ni(lt,["style"]),Et)for(var n=St;n--;)X&&Ei(ft[n]),Ei(ft[e-n-1]);if(rt&&X||Ni(st,["style"]),!X)for(var i=jt,a=jt+dt;i<a;i++){Ni(r=ft[i],["style"]),Mi(r,Y),Mi(r,G)}}else{if(Ot.disabled=!1,lt.className+=Jt,rt&&!gt||(Ln(),gt&&(Ht=zn(),Qt=nn())),jn(),Et)for(n=St;n--;)X&&Ii(ft[n]),Ii(ft[e-n-1]);if(!X)for(i=jt,a=jt+dt;i<a;i++){var r=ft[i],o=i<jt+Ct?Y:G;r.style.left=100*(i-jt)/Ct+"%",Ai(r,o)}}}function Mn(){if(Bt&&!Zt){var t=jt;if(gt)for(var e=jt+1,n=e,i=_[jt]+wt+xt-bt;_[e]<i;)n=++e;else n=jt+Ct;for(xt&&(t-=1,gt||(n+=1)),t=Math.floor(Math.max(t,0)),n=Math.ceil(Math.min(n,Dt));t<n;t++)wi(ft[t].querySelectorAll(".tns-lazy-img"),function(t){var e,n={};n[D]=function(t){t.stopPropagation()},Si(t,n),Ci(t,"loaded")||(t.src=(e="data-src",t.getAttribute(e)),Ai(t,"loaded"))})}}function Tn(t){var e=ii(t);Ai(e,pe),Di(e,me)}function kn(t,e){for(var n=[],i=t,a=Math.min(t+e,Dt);i<a;i++)wi(ft[i].querySelectorAll("img"),function(t){n.push(t)});return n}function Nn(){var t=It?kn(jt,Ct):kn(St,dt);vi(function(){En(t,Bn)})}function En(n,t){return $?t():(n.forEach(function(t,e){Ci(t,pe)&&n.splice(e,1)}),n.length?void vi(function(){En(n,t)}):t())}function In(){Mn(),function(){for(var t=jt+Math.min(dt,Ct),e=Dt;e--;){var n=ft[e];jt<=e&&e<t?Ti(n,"tabindex")&&(ki(n,{"aria-hidden":"false"}),Ni(n,["tabindex"]),Ai(n,he)):(Ti(n,"tabindex")||ki(n,{"aria-hidden":"true",tabindex:"-1"}),Ci(n,he)&&Mi(n,he))}}(),Pn(),fi(),function(){if(Te&&(Oe=-1!==Ie?Ie:rn(),Ie=-1,Oe!==Be)){var t=Me[Be],e=Me[Oe];ki(t,{tabindex:"-1","aria-selected":"false"}),ki(e,{tabindex:"0","aria-selected":"true"}),Mi(t,Le),Ai(e,Le),Be=Oe}}()}function On(t,e){for(var n=[],i=t,a=Math.min(t+e,Dt);i<a;i++)n.push(ft[i].offsetHeight);return Math.max.apply(null,n)}function Bn(){var t=It?On(jt,Ct):On(St,dt);st.style.height!==t&&(st.style.height=t+"px")}function Ln(){_=[0];for(var t,e=rt?"left":"top",n=ft[0].getBoundingClientRect()[e],i=1;i<Dt;i++)t=ft[i].getBoundingClientRect()[e],_.push(t-n)}function Sn(t){return t.nodeName.toLowerCase()}function Dn(t){return"button"===Sn(t)}function Rn(t){return"true"===t.getAttribute("aria-disabled")}function Hn(t,e,n){t?e.disabled=n:e.setAttribute("aria-disabled",n.toString())}function Pn(){if(xe&&!Nt&&!Et){var t=ge?Ce.disabled:Rn(Ce),e=ye?Ae.disabled:Rn(Ae),n=jt<=Vt,i=!Nt&&Qt<=jt;n&&!t&&Hn(ge,Ce,!0),!n&&t&&Hn(ge,Ce,!1),i&&!e&&Hn(ye,Ae,!0),!i&&e&&Hn(ye,Ae,!1)}}function Wn(t,e){O&&(t.style[O]=e)}function zn(){var t=-((yt?(yt+bt)*Dt-bt:_[Dt-1]+ft[Dt-1].getBoundingClientRect().width-bt)-wt);return 0<t&&(t=0),t}function qn(t){var e;(null==t&&(t=jt),rt&&!gt)?e=yt?-(yt+bt)*t:100*-t/(k?Dt:Ct):e=-_[t];return Rt&&(e=Math.max(e,Ht)),e+=!rt||gt||yt?"px":"%"}function jn(t){Wn(lt,"0s"),Fn(t),setTimeout(function(){Wn(lt,"")},10)}function Fn(t){null==t&&(t=qn()),lt.style[Wt]=zt+t+qt}function Vn(t,e,n,i){var a=t+Ct;Et||(a=Math.min(a,Dt));for(var r=t;r<a;r++){var o=ft[r];i||(o.style.left=100*(r-jt)/Ct+"%"),U&&B&&(o.style[B]=o.style[S]=U*(r-t)/1e3+"s"),Mi(o,e),Ai(o,n),i&&Lt.push(o)}}function Qn(t,e){Pt&&tn(),(jt!==Ft||e)&&(Gt.emit("indexChanged",di()),Gt.emit("transitionStart",di()),It&&Nn(),De&&t&&0<=["click","keydown"].indexOf(t.type)&&$n(),Kt=!0,en())}function Xn(t){return t.toLowerCase().replace(/-/g,"")}function Yn(t){if(X||Kt){if(Gt.emit("transitionEnd",di(t)),!X&&0<Lt.length)for(var e=0;e<Lt.length;e++){var n=Lt[e];n.style.left="",S&&B&&(n.style[S]="",n.style[B]=""),Mi(n,K),Ai(n,G)}if(!t||!X&&t.target.parentNode===lt||t.target===lt&&Xn(t.propertyName)===Xn(Wt)){if(!Pt){var i=jt;tn(),jt!==i&&(Gt.emit("indexChanged",di()),jn())}"inner"===mt&&Gt.emit("innerLoaded",di()),Kt=!1,Ft=jt}}}function Kn(t,e){if(!te)if("prev"===t)Un(e,-1);else if("next"===t)Un(e,1);else{Kt&&Yn();var n=rn(),i=0;if("first"===t?i=-n:"last"===t?i=X?dt-Ct-n:dt-1-n:("number"!=typeof t&&(t=parseInt(t)),isNaN(t)||(e||(t=Math.max(0,Math.min(dt-1,t))),i=t-n)),!X&&i&&Math.abs(i)<Ct){var a=0<i?1:-1;i+=Vt<=jt+i-dt?dt*a:2*dt*a*-1}jt+=i,X&&Et&&(jt<Vt&&(jt+=dt),Qt<jt&&(jt-=dt)),rn(jt)!==rn(Ft)&&Qn(e)}}function Un(t,e){var n;if(Kt&&Yn(),!e){for(var i=(t=ni(t)).target||t.srcElement;i!==we&&[Ce,Ae].indexOf(i)<0;)i=i.parentNode;var a=[Ce,Ae].indexOf(i);0<=a&&(n=!0,e=0===a?-1:1)}if(Nt){if(jt===Vt&&-1===e)return void Kn("last",t);if(jt===Qt&&1===e)return void Kn("first",t)}e&&(jt+=At*e,gt&&(jt=Math.floor(jt)),Qn(n||t&&"keydown"===t.type?t:null))}function Gn(){Se=setInterval(function(){Un(null,qe)},ze),De=!0}function Jn(){clearInterval(Se),De=!1}function _n(t,e){ki(Ve,{"data-action":t}),Ve.innerHTML=Xe[0]+t+Xe[1]+e}function Zn(){Gn(),Ve&&_n("stop",je[1])}function $n(){Jn(),Ve&&_n("start",je[0])}function ti(){De?($n(),He=!0):(Zn(),He=!1)}function ei(t){t.focus()}function ni(t){return ai(t=t||p.event)?t.changedTouches[0]:t}function ii(t){return t.target||p.event.srcElement}function ai(t){return 0<=t.type.indexOf("touch")}function ri(t){t.preventDefault?t.preventDefault():t.returnValue=!1}function oi(t){Kt&&Yn(),Ge=!0,X&&(hi(Je),Je=0);var e=ni(t);Gt.emit(ai(t)?"touchStart":"dragStart",di(t)),!ai(t)&&0<=["img","a"].indexOf(Sn(ii(t)))&&ri(t),Ue.x=Ke.x=parseInt(e.clientX),Ue.y=Ke.y=parseInt(e.clientY),X&&(Ye=parseFloat(lt.style[Wt].replace(zt,"").replace(qt,"")),Wn(lt,"0s"))}function si(t){if(Ge){var e=ni(t);Ue.x=parseInt(e.clientX),Ue.y=parseInt(e.clientY),X&&!Je&&(Je=vi(function(){!function t(e){if(!Yt)return void(Ge=!1);hi(Je);Ge&&(Je=vi(function(){t(e)}));li();if(Yt){try{e.type&&Gt.emit(ai(e)?"touchMove":"dragMove",di(e))}catch(t){}var n=Ye,i=_e(Ue,Ke);if(!rt||yt||gt)n+=i,n+="px";else{var a=k?i*Ct*100/(wt*Dt):100*i/wt;n+=a,n+="%"}lt.style[Wt]=zt+n+qt}}(t)}))}}function li(){var t,e,n,i,a,r;"?"===Yt&&Ue.x!==Ke.x&&Ue.y!==Ke.y&&(a=Ue.y-Ke.y,r=Ue.x-Ke.x,t=Math.atan2(a,r)*(180/Math.PI),e=Xt,n=!1,i=Math.abs(90-Math.abs(t)),90-e<=i?n="horizontal":i<=e&&(n="vertical"),Yt=n===h.axis)}function ui(i){if(Ge){X&&(hi(Je),Wn(lt,"")),Ge=!1;var t=ni(i);Ue.x=parseInt(t.clientX),Ue.y=parseInt(t.clientY);var a=_e(Ue,Ke);if(5<=Math.abs(a)){if(!ai(i)){var n=ii(i);Si(n,{click:function t(e){ri(e),Di(n,{click:t})}})}X?Je=vi(function(){if(rt&&!gt){var t=-a*Ct/wt;t=0<a?Math.floor(t):Math.ceil(t),jt+=t}else{var e=-(Ye+a);if(e<=0)jt=Vt;else if(e>=_[_.length-1])jt=Qt;else for(var n=0;n<Dt&&e>=_[n];)e>_[jt=n]&&a<0&&(jt+=1),n++}Qn(i,a),Gt.emit(ai(i)?"touchEnd":"dragEnd",di(i))}):(li(),Yt&&Un(i,0<a?-1:1))}}Xt&&(Yt="?")}function ci(){st.style.height=_[jt+Ct]-_[jt]+"px"}function fi(){Te&&!ce&&(!function(){Ne=[];for(var t=rn()%Ct;t<dt;)X&&!Et&&dt<t+Ct&&(t=dt-Ct),Ne.push(t),t+=Ct;(Et&&Ne.length*Ct<dt||!Et&&0<Ne[0])&&Ne.unshift(0)}(),Ne!==Ee&&(wi(Me,function(t,e){Ne.indexOf(e)<0?Ei(t):Ii(t)}),Ee=Ne))}function di(t){return{container:lt,slideItems:ft,navContainer:ke,navItems:Me,controlsContainer:we,hasControls:le,prevButton:Ce,nextButton:Ae,items:Ct,slideBy:At,cloneCount:St,slideCount:dt,slideCountNew:Dt,index:jt,indexCached:Ft,navCurrentIndex:Oe,navCurrentIndexCached:Be,visibleNavIndexes:Ne,visibleNavIndexesCached:Ee,sheet:Ot,event:t||{}}}H&&console.warn("No slides found in",h.container)};return Hi}();
//# sourceMappingURL=../sourcemaps/tiny-slider.js.map
