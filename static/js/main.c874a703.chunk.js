(this.webpackJsonpweatherapp=this.webpackJsonpweatherapp||[]).push([[0],{117:function(e,t,a){"use strict";a.r(t);var n,r=a(0),i=a.n(r),c=a(20),o=a.n(c),l=a(24),s=(a(91),a(92),a(17)),u=a(25),m=a(29),b=a(27),d=a(44),h=a(8),f=a(23),p=a.n(f),v=a(138),E=a(118),g=a(140),j=a(152),O=a(5),k=a(72),y=a.n(k),w=Object(O.a)((function(e){return{root:{flexGrow:1},menu_item:{color:"#697387"},gradient:{backgroundImage:"linear-gradient(to right, #fcfaff, #f2f9fc)"}}}))((function(e){var t=e.classes,a=Object(h.g)(),n=function(e){return function(){return a.push(e)}};return i.a.createElement("div",{className:p()(t.root)},i.a.createElement(v.a,{position:"static",style:{boxShadow:"none"}},i.a.createElement(g.a,{className:t.gradient},i.a.createElement(y.a,{style:{color:"#52cbff"}}),i.a.createElement(j.a,{onClick:n("/")},i.a.createElement(E.a,{className:t.menu_item},"Weather Forecast")),i.a.createElement(j.a,{onClick:n("/teeko-game")},i.a.createElement(E.a,{className:t.menu_item},"Teeko Game")))))})),C=a(141),D=a(142),P=Object(O.a)((function(e){return{block:{width:50,height:50,zIndex:10,borderWidth:2,marginLeft:2.5,display:"flex",marginRight:2.5,borderRadius:25,flexWrap:"wrap",borderStyle:"solid",borderColor:"black",alignItems:"center",justifyContent:"center"},inner_block:{width:40,height:40,borderRadius:20}}}))((function(e){var t=e.color,a=e.onClick,n=e.selectedAreaColor,r=e.classes,c=r.inner_block,o=r.block;return i.a.createElement("div",{className:o,onClick:a,style:{backgroundColor:n}},i.a.createElement("div",{className:c,style:{backgroundColor:t}}))})),S=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25],x=[[1,2,3,4],[2,3,4,5],[6,7,8,9],[7,8,9,10],[11,12,13,14],[12,13,14,15],[16,17,18,19],[17,18,19,20],[21,22,23,24],[22,23,24,25],[1,6,11,16],[6,11,16,21],[2,7,12,17],[7,12,17,22],[3,8,13,18],[8,13,18,23],[4,9,14,19],[9,14,19,24],[5,10,15,20],[10,15,20,25],[16,12,8,4],[22,18,14,10],[21,17,13,9],[17,13,9,5],[20,14,8,2],[24,18,12,6],[25,19,13,7],[19,13,7,1]],N={1:[6,7,2],2:[1,6,7,8,3],3:[2,7,8,9,4],4:[3,8,9,10,5],5:[4,9,10],6:[1,2,7,12,11],7:[1,2,3,8,13,12,11,6],8:[2,3,4,9,14,13,12,7],9:[3,4,5,10,15,14,13,8],10:[5,4,9,14,15],11:[6,7,12,17,16],12:[6,7,8,13,18,17,16,11],13:[7,8,9,14,19,18,17,12],14:[8,9,10,15,20,19,18,13],15:[10,9,14,19,20],16:[11,12,17,22,21],17:[11,12,13,18,23,22,21,16],18:[12,13,14,19,24,23,22,17],19:[13,14,15,20,25,24,23,18],20:[15,14,19,24,25],21:[16,17,22],22:[21,16,17,18,23],23:[22,17,18,19,24],24:[23,18,19,20,25],25:[24,19,20]},I=Object(l.b)("teekoStore")(n=Object(l.c)(n=function(e){Object(m.a)(a,e);var t=Object(b.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){var e=this.props,t=e.classes,a=e.teekoStore,n=a.redPositions,r=a.circleClicked,c=a.selectedPiece,o=a.blackPositions,l=a.redPlayerIndicator,s=a.blackPlayerIndicator;return i.a.createElement(C.a,{className:"h-100",fluid:!0},i.a.createElement("h1",{className:"mt-3"},"Teeko Game"),i.a.createElement(D.a,{className:"d-flex justify-content-center align-items-center"},i.a.createElement("div",{className:t.board},i.a.createElement("div",{className:t.board_inner},i.a.createElement("div",{className:t.emblishment1}),i.a.createElement("div",{className:t.emblishment2}),S.map((function(e){var t;return n.includes(e)?t=l:o.includes(e)&&(t=s),i.a.createElement(P,{key:e,color:t,onClick:function(){return r(e)},selectedAreaColor:c===e?"#52cbff":"white"})}))))))}}]),a}(r.Component))||n)||n,W=Object(O.a)((function(e){return{board:{width:340,height:340,marginTop:20,display:"flex",borderWidth:15,borderStyle:"solid",borderColor:"black",alignItems:"center",justifyContent:"center",boxShadow:"3px 3px 15px grey"},board_inner:{width:300,height:300,paddingTop:5,borderWidth:6,display:"flex",flexWrap:"wrap",paddingBottom:5,alignItems:"center",borderStyle:"solid",borderColor:"black",position:"relative",justifyContent:"center"},emblishment1:{top:30,left:30,right:30,bottom:30,zPosition:0,borderWidth:4,borderColor:"grey",borderStyle:"solid",position:"absolute"},emblishment2:{top:85,left:85,right:85,bottom:85,zPosition:0,borderWidth:4,borderColor:"grey",borderStyle:"solid",position:"absolute"}}}))(I),z=a(30),B=a.n(z),R=a(40),A=a(34),T=a(18),L=a(151),_=a(76),V=a(73),F=a.n(V),G=a(148),M=a(150),Y=a(74),K=a.n(Y),H=a(149),J=a(144),q=a(147),U=a(143),$=a(146),Q=a(145),X=Object(U.a)({root:{padding:5,minWidth:120},title:{fontSize:14},pos:{marginBottom:12}});function Z(e){var t=e.convertedDate,a=e.isCelcius,n=e.temp,r=e.humidity,c=X();return i.a.createElement(J.a,{className:c.root,variant:"outlined"},i.a.createElement(Q.a,null,i.a.createElement(E.a,{className:c.title,color:"textSecondary",gutterBottom:!0},t),i.a.createElement(E.a,{variant:"h6",component:"h6"},n,a?"\u02daC":"\u02daF"),i.a.createElement(E.a,{className:c.pos,color:"textSecondary"},"Humidity - ",r)),i.a.createElement($.a,{onClick:function(){return alert("Go to weather app for more info")}},i.a.createElement(q.a,{size:"small"},"Learn More")))}var ee,te=Object(O.a)((function(e){return{container:{left:0,right:0,top:100,bottom:0,display:"flex",position:"absolute"}}}))((function(e){var t=e.classes;return i.a.createElement(C.a,{className:t.container},i.a.createElement(D.a,{className:"d-flex flex-fill justify-content-center align-items-center"},i.a.createElement("p",null,"Loading\u2026")))})),ae=Object(U.a)({root:{padding:5,minWidth:120},title:{fontSize:14},pos:{marginBottom:12}});function ne(e){var t=e.isCelcius,a=ae();return i.a.createElement(J.a,{className:a.root,variant:"outlined"},i.a.createElement(Q.a,null,i.a.createElement(E.a,{className:a.title,color:"textSecondary",gutterBottom:!0},".........."),i.a.createElement(E.a,{variant:"h6",component:"h6"},"--",t?"\u02daC":"\u02daF"),i.a.createElement(E.a,{className:a.pos,color:"textSecondary"},"Humidity - ....")),i.a.createElement($.a,{onClick:function(){return alert("Go to weather app for more info")}},i.a.createElement(q.a,{size:"small"},"Learn More")))}var re,ie,ce,oe,le,se,ue,me,be,de,he,fe,pe,ve,Ee,ge,je=Object(l.b)("weatherStore")(ee=Object(l.c)(ee=function(e){Object(m.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return e=t.call.apply(t,[this].concat(r)),Object(T.a)(Object(A.a)(e),"_setIsCelcius",function(){var t=Object(R.a)(B.a.mark((function t(a){var n,r,i,c;return B.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.props.weatherStore,r=n.fetchWeatherData,i=n.setIsCelcius,c=n.setIsRefreshing,i(a),c(),t.next=5,r();case 5:c(!1);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),Object(T.a)(Object(A.a)(e),"setIsRefreshing",(function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return e.setState({isRefreshing:t})})),e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){(0,this.props.weatherStore.fetchWeatherData)()}},{key:"render",value:function(){var e=this,t=this.props.weatherStore,a=t.isCelcius,n=t.isRefreshing,r=t.onVisibleDateBack,c=t.visibleWeatherData,o=t.onVisibleDateForward;return c?i.a.createElement(C.a,{fluid:!0},i.a.createElement("h1",{className:"mt-3"},"Weather Forecast"),i.a.createElement(_.a,{className:"p-3 p-md-5 mt-4"},i.a.createElement(G.a,null,i.a.createElement(D.a,{className:"d-flex justify-content-center"},i.a.createElement(H.a,{value:"celcius",label:"Celcius",checked:a,control:i.a.createElement(L.a,null),onChange:function(t){return e._setIsCelcius(!0)}})),i.a.createElement(D.a,{className:"d-flex justify-content-center"},i.a.createElement(H.a,{value:"fahrenheit",label:"Fahrenheit",control:i.a.createElement(L.a,null),checked:!a,onChange:function(t){return e._setIsCelcius(!1)}}))),i.a.createElement(G.a,{className:"d-flex my-3 justify-content-between"},i.a.createElement(M.a,{size:"medium",onClick:function(){return r()}},i.a.createElement(F.a,null)),i.a.createElement(M.a,{size:"medium",onClick:function(){return o()}},i.a.createElement(K.a,null))),n?i.a.createElement(G.a,null,i.a.createElement(D.a,null,i.a.createElement(ne,{isCelcius:a})),i.a.createElement(D.a,null,i.a.createElement(ne,{isCelcius:a})),i.a.createElement(D.a,null,i.a.createElement(ne,{isCelcius:a}))):i.a.createElement(G.a,null,c.map((function(e,t){var n=e.dt,r=new Date(1e3*n);return i.a.createElement(D.a,{key:n},i.a.createElement(Z,{temp:e.main.temp,isCelcius:a,humidity:e.main.humidity,convertedDate:r.toDateString()}))}))))):i.a.createElement(te,null)}}]),a}(i.a.Component))||ee)||ee,Oe=function(e){Object(m.a)(a,e);var t=Object(b.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return i.a.createElement(d.a,{basename:"/Weather-TeekoGame-App"},i.a.createElement(w,null),i.a.createElement(h.d,null,i.a.createElement(h.b,{path:"/",exact:!0,component:je}),i.a.createElement(h.b,{path:"/teeko-game",exact:!0,component:W}),i.a.createElement(h.a,{to:"/"})))}}]),a}(r.Component),ke=a(49),ye=a(13),we=a(14),Ce=(a(60),a(3)),De=(re=Ce.n.ref,ie=Ce.n.ref,ce=function e(){Object(s.a)(this,e),Object(T.a)(this,"isBlackTurn",!0),Object(T.a)(this,"redPlayerIndicator","#bd172a"),Object(T.a)(this,"blackPlayerIndicator","#3b3233"),Object(ye.a)(this,"selectedPiece",oe,this),Object(ye.a)(this,"redPositions",le,this),Object(ye.a)(this,"blackPositions",se,this),Object(ye.a)(this,"circleClicked",ue,this),Object(T.a)(this,"evaluater",(function(e,t){return!(e.length<=3)&&e.every((function(e){return t.includes(e)}))})),Object(Ce.m)(this)},oe=Object(we.a)(ce.prototype,"selectedPiece",[Ce.n],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),le=Object(we.a)(ce.prototype,"redPositions",[re],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),se=Object(we.a)(ce.prototype,"blackPositions",[ie],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),ue=Object(we.a)(ce.prototype,"circleClicked",[Ce.f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t){var a=e.redPositions.includes(t),n=e.blackPositions.includes(t),r=4===e.redPositions.length,i=4===e.blackPositions.length;if(a||n){var c,o;e.isBlackTurn?i&&!a?e.selectedPiece=t:(c=i?e.selectedPiece?"Please find an empty slot.":'You need to select a "BLACK" piece.':'Please place "BLACK" in an empty area.',alert(c)):r&&!n?e.selectedPiece=t:(o=i?e.selectedPiece?"Please find an empty slot.":'You need to select a "RED" piece.':'Please place "RED" in an empty area.',alert(o))}else{if(e.isBlackTurn){if(i&&!e.selectedPiece)return void alert('Please select a "BLACK" piece to move.');if(i&&!N[e.selectedPiece].includes(t))return void alert("Invalid Move!");if(i){var l=e.blackPositions.indexOf(e.selectedPiece);e.blackPositions.splice(l,1)}e.blackPositions=[].concat(Object(ke.a)(e.blackPositions),[t])}else{if(r&&!e.selectedPiece)return void alert('Please select a "RED" piece to move.');if(r&&!N[e.selectedPiece].includes(t))return void alert("Invalid Move!");if(r){var s=e.redPositions.indexOf(e.selectedPiece);e.redPositions.splice(s,1)}e.redPositions=[].concat(Object(ke.a)(e.redPositions),[t])}var u=!1,m=!1;if(x.forEach((function(t){e.evaluater(e.redPositions,t)&&(u=!0),e.evaluater(e.blackPositions,t)&&(m=!0)})),u||m)alert('CONGRATULATIONS! "'.concat(u?"RED":"BLACK",' PLAYER" WINS!!')),e.redPositions=[],e.isBlackTurn=!0,e.blackPositions=[];else e.isBlackTurn=!e.isBlackTurn;e.selectedPiece=null}}}}),ce),Pe=a(47),Se=a.n(Pe),xe=a(75),Ne=a(48),Ie=a.n(Ne);function We(e){return Ie()(1e3*e).format("YYYY-MM-DD")}var ze=(me=function e(){var t=this;Object(s.a)(this,e),Object(T.a)(this,"weatherData",void 0),Object(ye.a)(this,"isCelcius",be,this),Object(ye.a)(this,"visibleWeatherData",de,this),Object(ye.a)(this,"isRefreshing",he,this),Object(T.a)(this,"fetchWeatherData",Object(R.a)(B.a.mark((function e(){var a,n;return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.isCelcius?"metric":"imperial",e.prev=1,t.source=Se.a.CancelToken.source(),e.next=5,Se.a.get("https://api.openweathermap.org/data/2.5/forecast?q=Kathmandu&units=".concat(a,"&APPID=").concat(xe.appId));case 5:n=e.sent,t.filterAndSetData(n.data),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log("Error",e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))),Object(ye.a)(this,"filterAndSetData",fe,this),Object(ye.a)(this,"onVisibleDateForward",pe,this),Object(ye.a)(this,"onVisibleDateBack",ve,this),Object(T.a)(this,"resetVisibleDate",(function(){t.visibleWeatherData=t.weatherData.slice(t.visibleDateStart,t.visibleDateEnd)})),Object(ye.a)(this,"setIsCelcius",Ee,this),Object(ye.a)(this,"setIsRefreshing",ge,this),this.visibleDateEnd=3,this.visibleDateStart=0,Object(Ce.m)(this)},be=Object(we.a)(me.prototype,"isCelcius",[Ce.n],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),de=Object(we.a)(me.prototype,"visibleWeatherData",[Ce.n],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),he=Object(we.a)(me.prototype,"isRefreshing",[Ce.n],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),fe=Object(we.a)(me.prototype,"filterAndSetData",[Ce.f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t){var a=[];t.list.forEach((function(t,n){var r=t.dt;if(e.prevDate&&function(e,t){var a=We(e),n=We(t);return Ie()(a).isSame(n,"day")}(e.prevDate,t.dt))return null;e.prevDate=r,a.push(t)})),e.weatherData=a,e.visibleWeatherData=a.slice(e.visibleDateStart,e.visibleDateEnd)}}}),pe=Object(we.a)(me.prototype,"onVisibleDateForward",[Ce.f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(){e.visibleDateEnd!==e.weatherData.length&&(e.visibleDateEnd++,e.visibleDateStart++,e.resetVisibleDate())}}}),ve=Object(we.a)(me.prototype,"onVisibleDateBack",[Ce.f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(){0!==e.visibleDateStart&&(e.visibleDateEnd--,e.visibleDateStart--,e.resetVisibleDate())}}}),Ee=Object(we.a)(me.prototype,"setIsCelcius",[Ce.f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return e.isCelcius=t}}}),ge=Object(we.a)(me.prototype,"setIsRefreshing",[Ce.f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return e.isRefreshing=t}}}),me);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Be=new function e(){Object(s.a)(this,e),this.teekoStore=new De(this),this.weatherStore=new ze(this)};o.a.render(i.a.createElement(l.a,{rootStore:Be,teekoStore:Be.teekoStore,weatherStore:Be.weatherStore},i.a.createElement(Oe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},75:function(e,t){e.exports={appId:"a44c63bf4a70d8d8dd6758497afce4ec"}},86:function(e,t,a){e.exports=a(117)},92:function(e,t,a){}},[[86,1,2]]]);
//# sourceMappingURL=main.c874a703.chunk.js.map