(this.webpackJsonpmy_workout_report=this.webpackJsonpmy_workout_report||[]).push([[0],{22:function(e,n,t){e.exports=t(46)},27:function(e,n,t){},28:function(e,n,t){},29:function(e,n,t){},40:function(e,n,t){},41:function(e,n,t){},42:function(e,n,t){},46:function(e,n,t){"use strict";t.r(n);var r=t(0),o=t.n(r),a=t(10),i=t.n(a),c=(t(27),t(28),t(29),t(1)),u=t(7),l=t(3),s=t(5),m=t(2),d=t(4),b=t(6),f="routines/ADD_SET",p="routines/ADD_REPS",g=Date.now().toString(),v=new Date,x={routine:{id:g,title:"title",createdAt:v.toLocaleDateString("ko-KR",{year:"numeric",month:"long",day:"numeric"}),dayName:v.toLocaleDateString("ko-KR",{weekday:"long"}),desc:"Description",workoutItems:{}}};function O(){var e=Object(c.a)(["\n  width: 10%;\n  height: 100%;\n  padding: 0;\n  display: flex;\n  border: none;\n  box-sizing: border-box;\n  border-radius: 50%;\n  cursor: pointer;\n  color: white;\n\n  transition: 0.125s all ease-in;\n  background: #38d9a9;\n  &:hover {\n    transform: scale(1.1);\n    background: #63e6be;\n  }\n  &:active {\n    background: #20c997;\n  }\n"]);return O=function(){return e},e}function h(){var e=Object(c.a)(["\n  width: 90%;\n  height: 35px;\n  font-size: 1.3rem;\n  color: #343a40;\n  font-weight: bold;\n  border: none;\n  box-sizing: border-box;\n  ::placeholder {\n    font-size: 1.3rem;\n  }\n"]);return h=function(){return e},e}function E(){var e=Object(c.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding-left: 5px;\n  padding-right: 5px;\n  padding-bottom: 2px;\n  padding-top: 2px;\n\n  border-radius: 4px;\n  border: 1px solid #dee2e6;\n  width: 100%;\n  box-sizing: border-box;\n"]);return E=function(){return e},e}var j=m.b.form(E()),w=m.b.input(h()),k=m.b.button(O()),y=function(e){var n=e.id,t=Object(r.useState)(""),a=Object(s.a)(t,2),i=a[0],c=a[1],u=Object(d.c)();return o.a.createElement(j,{onSubmit:function(e){e.preventDefault(),function(e){u(function(e){return{type:"routines/ADD_WORKOUT",text:e}}(e))}(i),c("")}},o.a.createElement(w,{id:n,value:i,placeholder:"Input your Item",onChange:function(e){return c(e.target.value)},required:!0,autoFocus:!0}),o.a.createElement(k,{type:"submit"},o.a.createElement(b.a,{size:"100%"})))};function I(){var e=Object(c.a)(["\n      border-bottom: 1px solid #343a40;\n      &:hover {\n        border-bottom: 1px solid #343a40;\n      }\n      &:active {\n        border-bottom: 1px solid rgba(255, 255, 255, 0);\n        opacity: 0.8;\n      }\n    "]);return I=function(){return e},e}function S(){var e=Object(c.a)(["\n  cursor: pointer;\n  border-bottom: 1px solid rgba(255, 255, 255, 0);\n  &:hover {\n    border-bottom: 1px solid #343a40;\n  }\n  svg {\n    width: 18px;\n    height: 100%;\n    fill: #343a40;\n  }\n  ","\n"]);return S=function(){return e},e}function N(){var e=Object(c.a)(["\n  padding-top: 48px;\n  h2 {\n    margin: 0;\n    font-size: 2rem;\n    color: #343a40;\n    padding-left: 32px;\n    padding-right: 32px;\n  }\n  .day {\n    margin-top: 4px;\n    color: #868e96;\n    font-size: 21px;\n  }\n  .tasks-left {\n    color: #20c997;\n    font-size: 18px;\n    margin-top: 40px;\n    font-weight: bold;\n  }\n"]);return N=function(){return e},e}function C(){var e=Object(c.a)(["\n  width: 100%;\n  height: 100%;\n  border: none;\n  color: #343a40;\n  font-weight: bold;\n"]);return C=function(){return e},e}function D(){var e=Object(c.a)(["\n  padding-left: 32px;\n  padding-right: 32px;\n  top: 0;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  border-bottom: 1px solid #e9ecef;\n  background: #fff;\n"]);return D=function(){return e},e}function z(){var e=Object(c.a)(["\n  display: flex;\n  align-items: center;\n"]);return z=function(){return e},e}var R=m.b.h2(z()),_=m.b.div(D()),T=m.b.input(C()),W=m.b.div(N()),A=(m.b.span(S(),(function(e){return e.open&&Object(m.a)(I())})),function(e){var n=e.routine,t=Object(r.useState)({title:n.title,desc:n.desc}),a=Object(s.a)(t,2),i=a[0],c=a[1],m=i.title,d=i.desc,b=Object(r.useState)(!0),f=Object(s.a)(b,2),p=f[0],g=(f[1],Object(r.useState)(!1)),v=Object(s.a)(g,2),x=(v[0],v[1],function(){var e=Object(r.useState)({x:0,y:0}),n=Object(s.a)(e,2),t=n[0],o=n[1],a=function(){o({y:window.scrollY,x:window.scrollX})};return Object(r.useEffect)((function(){return window.addEventListener("scroll",a),function(){return window.removeEventListener("scroll",onscroll)}}),[]),t}().y),O=function(e){var n,t=e.target,r=t.title,o=t.desc;console.log(e.target),c(Object(l.a)({},i,(n={},Object(u.a)(n,r,r),Object(u.a)(n,o,o),n)))};return o.a.createElement(W,null,o.a.createElement(R,null,o.a.createElement(T,{type:"text",value:m,onChange:O,onMouseOver:function(e){console.log(e.target)},readOnly:p})),o.a.createElement(R,null,o.a.createElement(T,{type:"text",value:d,onChange:O,readOnly:p})),o.a.createElement("h2",null,n.createdAt,o.a.createElement("span",{className:"day"},n.dayName)),o.a.createElement(_,{style:{position:x>224?"fixed":"static"}},o.a.createElement(y,{onCreate:n})))});var B=function(e){var n=e.number,t=e.diff,r=e.unit,a=e.onIncrease,i=e.onDecrease,c=e.onSetNumber,u=e.onSetDiff,l=function(e){e.target.select()};return o.a.createElement("div",{className:"Setter"},o.a.createElement("div",null,"\uc124\uc815 \uac12",o.a.createElement("input",{type:"number",placeholder:"Set your the smallest weight",value:t,min:"1.25",onChange:function(e){e.target.value?u(parseFloat(e.target.value,10)):e.target.value=t},onClick:l}),o.a.createElement("span",{className:"unit"},r)),o.a.createElement("div",{className:"Button-Count-Up",onClick:a},o.a.createElement(b.c,null)),o.a.createElement("div",null,o.a.createElement("input",{type:"number",placeholder:"Input your Weight",value:n,min:"1",onChange:function(e){e.target.value?c(parseFloat(e.target.value,10)):e.target.value=0},onClick:l}),o.a.createElement("span",{className:"unit"},r)),o.a.createElement("div",{className:"Button-Count-Down",onClick:i},o.a.createElement(b.b,null)))},U="counter/SET_DIFF",F="counter/INCREASE",M="counter/DECREASE",K={number:0,diff:1.25,unit:"kg"};t(40);var L=function(){var e=Object(d.d)((function(e){return{number:e.counter.number,diff:e.counter.diff,unit:e.counter.unit}}),d.b),n=e.number,t=e.diff,r=e.unit,a=Object(d.c)();return o.a.createElement("div",{className:"SetterNav"},o.a.createElement(B,{number:n,diff:t,unit:r,onIncrease:function(){return a({type:F})},onDecrease:function(){return a({type:M})},onSetDiff:function(e){return a(function(e){return{type:U,diff:e}}(e))},onSetNumber:function(e){return a(function(e){return{type:"counter/SET_NUMBER",number:e}}(e))}}))},V=t(19);t(41),t(42);var H=function(e){var n=e.workoutItemName,t=e.set,a=e.index;console.log(n,t,a);var i=a+1,c=Object(d.d)((function(e){return e.counter.number})),u=t.reps;console.log(u);var l=Object(r.useState)(0),m=Object(s.a)(l,2),b=m[0],f=m[1],g=Object(d.c)(),v=function(e,n,t,r){g(function(e,n,t,r){return{type:p,text:e,setIndex:n,reps:t,weight:r}}(e,n,t,r))};return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"Button",onClick:function(){f(b+1),console.log("reps",u),console.log("repsCount",b),console.log("weight",c),v(n,i,b,c),console.log("reps",u),console.log("repsCount",b)}},u))};var J=function(e){var n=e.workoutItem,t=n.sets,r=n.name;return o.a.createElement(o.a.Fragment,null,Object.values(t).map((function(e,n){return o.a.createElement(H,{key:n,index:n,set:e,workoutItemName:r})})))};var P=function(e){var n=e.sets,t=e.workoutItem;return o.a.createElement(J,{sets:n,workoutItem:t})};function X(e){var n=e.set;return o.a.createElement("li",null,o.a.createElement("span",null,n.set),"set",o.a.createElement("span",null,n.weight),"kg",o.a.createElement("span",null,n.reps),"reps")}var q=o.a.memo((function(e){var n=e.workoutItem,t=Object(r.useState)(2),a=Object(s.a)(t,2),i=a[0],c=a[1],u=n.name,l=n.sets,m=Object(d.c)(),p=function(e,n){return m(function(e,n){return{type:f,text:e,nextSet:n}}(e,n))};return o.a.createElement(o.a.Fragment,null,o.a.createElement("li",{className:"WorkoutItem"},o.a.createElement("div",{className:"WorkoutItemHead"},o.a.createElement("span",{className:"name"},o.a.createElement("b",null,u)),o.a.createElement("span",{role:"img","aria-label":"Delete WorkoutItem",className:"Button-del",onClick:function(){var e;e=u.toString().replace(/(\s*)/g,""),m({type:"routines/REMOVE_WORKOUT",text:e})}},o.a.createElement(b.f,null)),o.a.createElement("ul",{className:"sets"},Object.values(l).map((function(e,n){return o.a.createElement(X,{key:n,set:e})})))),o.a.createElement("div",{className:"WorkoutItemButtonsBlock"},o.a.createElement("div",{className:"Buttons"},o.a.createElement(P,{sets:l,workoutItem:n})),o.a.createElement("div",{className:"addButton",onClick:function(){c(i+1),p(u.toString().replace(/(\s*)/g,""),i)}},o.a.createElement(b.a,null)))))}));function Y(){var e=Object(c.a)(["\n  padding: 0;\n"]);return Y=function(){return e},e}var $=m.b.ul(Y()),G=function(e){var n=e.workoutItems;return o.a.createElement($,null,Object.values(n).map((function(e,n){return o.a.createElement(q,{key:n,workoutItem:e})})))};var Q=function(e){Object(V.a)(e);var n=Object(d.d)((function(e){return e.routines.routine.workoutItems}));return o.a.createElement(G,{workoutItems:n})},Z=t(20);function ee(){var e=Object(c.a)(["\n      background: #ff6b6b;\n      &:hover {\n        background: #ff8787;\n      }\n      &:active {\n        background: #fa5252;\n      }\n      transform: translate(-50%, 50%) rotate(45deg);\n    "]);return ee=function(){return e},e}function ne(){var e=Object(c.a)(["\n  display: flex;\n  background: #38d9a9;\n  &:hover {\n    background: #63e6be;\n  }\n  &:active {\n    background: #20c997;\n  }\n\n  z-index: 9;\n  cursor: pointer;\n  width: 80px;\n  height: 80px;\n  align-items: center;\n  justify-content: center;\n  font-size: 60px;\n  position: absolute;\n  left: 50%;\n  bottom: 0px;\n  transform: translate(-50%, 50%);\n  color: white;\n  border-radius: 50%;\n  border: none;\n  outline: none;\n\n  transition: 0.125s all ease-in;\n  ","\n"]);return ne=function(){return e},e}function te(){var e=Object(c.a)(["\n  flex: 1;\n  padding-bottom: 100px;\n  overflow-y: auto;\n  padding-left: 32px;\n  padding-right: 32px;\n"]);return te=function(){return e},e}function re(){var e=Object(c.a)(["\n  height: 100%;\n  overflow-y: auto;\n  /* \u25cf\u25cf\u25cf\u25cf\u25cf\u25cf\u25cf\uc2a4\ud06c\ub864\ubc14 \uc228\uae30\uae30 */\n  ::-webkit-scrollbar {\n    display: none;\n  }\n"]);return re=function(){return e},e}function oe(){var e=Object(c.a)(["\n  padding-bottom: 10px;\n  margin-bottom: 10px;\n  border-bottom: 1px solid #ccc;\n"]);return oe=function(){return e},e}function ae(){var e=Object(c.a)(["\n  display: flex;\n  flex-direction: column;\n\n  width: 80%;\n  max-width: 512px;\n  height: 80%;\n  min-height: 400px;\n  max-height: 600px;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  padding-left: 20px;\n  padding-right: 20px;\n\n  border-radius: 10px;\n  background: #fff;\n  box-shadow: 0px 10px 20px 3px rgba(0, 0, 0, 0.2);\n\n  position: absolute;\n  right: 0;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: auto;\n  margin-bottom: auto;\n  margin-bottom: auto;\n\n  font-size: 24px;\n  color: #343a40;\n"]);return ae=function(){return e},e}function ie(){var e=Object(c.a)(["\n  .name {\n    font-size: 20px;\n    font-weight: bold;\n  }\n  .set {\n    font-size: 18px;\n  }\n"]);return ie=function(){return e},e}function ce(){var e=Object(c.a)(["\n  position: fixed;\n  left: 0;\n  top: 0;\n  z-index: 99;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: rgba(0, 0, 0, 0.8);\n"]);return ce=function(){return e},e}function ue(){var e=Object(c.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  position: absolute;\n  right: 0;\n  top: 0;\n\n  width: 50px;\n  height: 50px;\n  transform: translate(25px, -25px);\n  border-radius: 50%;\n\n  background-color: #fa5252;\n  color: #fff;\n\n  cursor: pointer;\n"]);return ue=function(){return e},e}function le(){var e=Object(c.a)(["\n  display: inline-block;\n  cursor: pointer;\n"]);return le=function(){return e},e}function se(){var e=Object(c.a)(["\n  display: flex;\n  align-items: center;\n\n  width: 90%;\n  position: absolute;\n  bottom: -100px;\n  left: 0;\n  right: 0;\n  margin-left: auto;\n  margin-right: auto;\n  height: 100px;\n  border-radius: 10px;\n  color: #fff;\n  background: rgba(51, 51, 51, 0.7);\n\n  opacity: 0.7;\n  animation-name: SlideUp;\n  animation-duration: 4s;\n  animation-timing-function: ease-in-out;\n\n  @keyframes SlideUp {\n    30%,\n    70% {\n      opacity: 1;\n      bottom: 100px;\n    }\n  }\n"]);return se=function(){return e},e}function me(){var e=Object(c.a)(["\n  resize: none;\n  width: 100%;\n  height: 100%;\n  outline: none;\n  border: none;\n  font-size: 18px;\n  font-size: 18px;\n  color: #343a40;\n"]);return me=function(){return e},e}var de=m.b.textarea(me()),be=m.b.div(se()),fe=m.b.i(le()),pe=m.b.div(ue()),ge=m.b.div(ce()),ve=(m.b.li(ie()),m.b.div(ae())),xe=m.b.div(oe()),Oe=m.b.div(re()),he=m.b.div(te()),Ee=m.b.button(ne(),(function(e){return e.open&&Object(m.a)(ee())})),je=function(e){var n=e.routine,t=Object(r.useState)(!1),a=Object(s.a)(t,2),i=a[0],c=a[1],u=Object(r.useState)(""),l=Object(s.a)(u,2),m=l[0],d=l[1],f=Object(r.useState)(!0),p=Object(s.a)(f,2),g=p[0],v=(p[1],Object(r.useState)({value:m,copied:!1})),x=Object(s.a)(v,2),O=x[0];return x[1],o.a.createElement(o.a.Fragment,null,o.a.createElement(he,null,o.a.createElement(Q,{routine:n}),o.a.createElement(L,null)),i&&o.a.createElement(ge,null,o.a.createElement(ve,null,o.a.createElement(pe,{onClick:function(){c(!1)}},"X"),o.a.createElement(xe,null,"Today's Routine",o.a.createElement(Z.CopyToClipboard,{text:m},o.a.createElement(fe,{onClick:function(e){var n=e.target.innerHTML;console.log(m),console.log('Clicked on "'.concat(n,'"!'))}},o.a.createElement(b.e,null)))),o.a.createElement(Oe,null,o.a.createElement(de,{onChange:function(e){return d(e.target.value)},readOnly:g,value:m}))),O.copied&&o.a.createElement(be,null,"Copied.")),o.a.createElement(Ee,{onClick:function(){c(!0),d((n.title+"\n"+n.desc+"\n"+n.createdAt+"\n"+Object.values(n.workoutItems).map((function(e){return e.name+"\n"+Object.values(e.sets).map((function(e){return e.set+"set "+e.weight+"kg "+e.reps+"reps\n"}))}))).replace(/,/gi,""))}},o.a.createElement(b.d,null)))};var we=function(){var e=Object(d.d)((function(e){return e.routines.routine}));return o.a.createElement("div",null,o.a.createElement(A,{routine:e}),o.a.createElement(je,{routine:e}))};var ke=function(){return o.a.createElement("div",{className:"App"},o.a.createElement("div",{className:"MWR-wrapper"},o.a.createElement(we,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ye=t(8),Ie=Object(ye.b)({counter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"counter/SET_NUMBER":return Object(l.a)({},e,{number:n.number});case U:return Object(l.a)({},e,{diff:n.diff});case F:return Object(l.a)({},e,{number:e.number+e.diff});case M:return Object(l.a)({},e,{number:e.number-e.diff});default:return e}},routines:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"routines/ADD_WORKOUT":return{routine:Object(l.a)({},e.routine,{workoutItems:Object(l.a)({},e.routine.workoutItems,Object(u.a)({},n.text,{name:[n.text],sets:{1:{set:1,reps:0,weight:0}}}))})};case"routines/REMOVE_WORKOUT":var t=Object.keys(e.routine.workoutItems).filter((function(e){return e!==n.text})).reduce((function(n,t){return n[t]=e.routine.workoutItems[t],n}),{});return console.log("REMOVE_WORKOUT"),console.log("\trest items:",t),{routine:Object(l.a)({},e.routine,{workoutItems:Object(l.a)({},t)})};case f:return console.log("ADD_SET",n.text,n.nextSet),{routine:Object(l.a)({},e.routine,{workoutItems:Object(l.a)({},e.routine.workoutItems,Object(u.a)({},n.text,Object(l.a)({},e.routine.workoutItems[n.text],{sets:Object(l.a)({},e.routine.workoutItems[n.text].sets,Object(u.a)({},n.nextSet,{set:n.nextSet,reps:0,weight:0}))})))})};case p:return console.log("ADD_REPS",n.text,n.setIndex,n.reps,n.weight),{routine:Object(l.a)({},e.routine,{workoutItems:Object(l.a)({},e.routine.workoutItems,Object(u.a)({},n.text,Object(l.a)({},e.routine.workoutItems[n.text],{sets:Object(l.a)({},e.routine.workoutItems[n.text].sets,Object(u.a)({},n.setIndex,{set:n.setIndex,reps:n.reps,weight:n.weight}))})))})};default:return e}}}),Se=Object(ye.c)(Ie);console.log(Se.getState()),i.a.render(o.a.createElement(d.a,{store:Se},o.a.createElement(ke,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[22,1,2]]]);
//# sourceMappingURL=main.950aa059.chunk.js.map