(this["webpackJsonprock-paper-scissors"]=this["webpackJsonprock-paper-scissors"]||[]).push([[0],{13:function(e,a,t){},14:function(e,a,t){},32:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),l=t(3),r=t.n(l),i=(t(13),t(2)),o=(t(14),t(1));function s(e){return c.a.createElement("div",{className:"playButton paper",onClick:e.handleClick},c.a.createElement("div",{className:"paper-icon"}))}function m(e){return c.a.createElement("div",{className:"playButton rock",onClick:e.handleClick},c.a.createElement("div",{className:"rock-icon"}))}function u(e){return c.a.createElement("div",{className:"playButton scissors",onClick:e.handleClick},c.a.createElement("div",{className:"scissors-icon"}))}function d(e){return c.a.createElement("div",{className:"buttonsContainer"},c.a.createElement("div",{className:"upperButtons"},c.a.createElement(o.Spring,{from:{opacity:0,marginLeft:-50},to:{opacity:1,marginLeft:0}},(function(a){return c.a.createElement("div",{style:a},c.a.createElement(s,{handleClick:e.handleClick}))})),c.a.createElement(o.Spring,{from:{opacity:0,marginRight:-50},to:{opacity:1,marginRight:0}},(function(a){return c.a.createElement("div",{style:a},c.a.createElement(u,{handleClick:e.handleClick}))}))),c.a.createElement("div",null,c.a.createElement(o.Spring,{from:{opacity:0,marginBottom:-50},to:{opacity:1,marginBottom:0}},(function(a){return c.a.createElement("div",{style:a},c.a.createElement(m,{handleClick:e.handleClick}))}))))}function E(e){return c.a.createElement("div",{className:"step3"},c.a.createElement("div",null,c.a.createElement(o.Spring,{from:{opacity:0,marginLeft:-50},to:{opacity:1,marginLeft:0}},(function(a){return c.a.createElement("div",{style:a},c.a.createElement("p",null,"YOU PICKED"),1===e.choiceP1?c.a.createElement(m,null):void 0,2===e.choiceP1?c.a.createElement(s,null):void 0,3===e.choiceP1?c.a.createElement(u,null):void 0)}))),c.a.createElement("div",null,c.a.createElement("p",{className:"result"},1===e.winner?"YOU WON":void 0,2===e.winner?"YOU LOOSE":void 0,3===e.winner?"TIE":void 0),c.a.createElement("p",{className:"playAgain",onClick:e.handleClick},"PLAY AGAIN")),c.a.createElement("div",null,c.a.createElement(o.Spring,{from:{opacity:0,marginRight:-50},to:{opacity:1,marginRight:0}},(function(a){return c.a.createElement("div",{style:a},c.a.createElement("p",null,"THE HOUSE PICKED"),1===e.choiceP2?c.a.createElement(m,null):void 0,2===e.choiceP2?c.a.createElement(s,null):void 0,3===e.choiceP2?c.a.createElement(u,null):void 0)}))))}function p(e){return c.a.createElement("header",null,c.a.createElement("div",null,c.a.createElement("p",null,"Rock"),c.a.createElement("p",null,"Paper"),c.a.createElement("p",null,"Scissors")),c.a.createElement("div",{className:"score"},c.a.createElement("p",null,"Score"),c.a.createElement("p",{className:"score-number"},e.score)))}function v(e){return c.a.createElement("div",{className:"rules",onClick:e.handleClick},"RULES")}function h(e){return c.a.createElement(o.Spring,{from:{opacity:0},to:{opacity:1}},(function(a){return c.a.createElement("div",{style:a},c.a.createElement("div",{className:"rulesCard"},c.a.createElement("div",{className:"rulesCard-header"},c.a.createElement("p",null,"Rules"),c.a.createElement("div",{className:"closeRules",onClick:e.handleClick})),c.a.createElement("div",{className:"rulesCard-img"})))}))}var f=function(){var e=Object(n.useState)(!1),a=Object(i.a)(e,2),t=a[0],l=a[1],r=Object(n.useState)(0),o=Object(i.a)(r,2),s=o[0],m=o[1],u=Object(n.useState)(0),f=Object(i.a)(u,2),k=f[0],g=f[1],C=Object(n.useState)(1),y=Object(i.a)(C,2),N=y[0],b=y[1],O=Object(n.useState)(0),S=Object(i.a)(O,2),w=S[0],P=S[1],j=Object(n.useState)(0),B=Object(i.a)(j,2),L=B[0],R=B[1],A=function(e){l(!t)};return c.a.createElement("div",{className:"App"},c.a.createElement(p,{score:w}),1===N?c.a.createElement(d,{handleClick:function(e){var a=0,t=Math.floor(3*Math.random()+1);switch(g(t),e.target.classList.value){case"rock-icon":a=1,m(1),b(2);break;case"paper-icon":a=2,m(2),b(2);break;case"scissors-icon":a=3,m(3),b(2)}if(a===t)R(3);else switch(a){case 1:2===t?R(2):(R(1),P(w+1));break;case 2:1===t?(R(1),P(w+1)):R(2);break;case 3:1===t?R(2):(R(1),P(w+1))}console.log("P1 ".concat(a," - P2 ").concat(t))}}):void 0,2===N?c.a.createElement(E,{choiceP1:s,choiceP2:k,handleClick:function(){b(1)},winner:L}):void 0,c.a.createElement(v,{handleClick:A}),t?c.a.createElement(h,{handleClick:A}):void 0)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,a,t){e.exports=t(32)}},[[8,1,2]]]);
//# sourceMappingURL=main.ad4a12e4.chunk.js.map