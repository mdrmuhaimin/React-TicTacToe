(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,t,r){e.exports=r(37)},28:function(e,t,r){},37:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r.n(a),l=r(14),s=r.n(l),o=(r(28),r(18)),i=r(5),u=r(7),c=r(15),f=r(16),h=r(21),m=r(17),p=r(22),v=function(e){var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],r=0;for(r=0;r<t.length;r++){var a=Object(u.a)(t[r],3),n=a[0],l=a[1],s=a[2];if(e[n]&&e[n]===e[l]&&e[n]===e[s])return[n,l,s]}for(r=0;r<e.length;r++)if(null===e[r])return null;return"Draw"},d=function(e,t){return null===t||"string"===typeof t?e:(e=e.map(function(e){return e+" irrelevant-block"}),t.forEach(function(t){return e[t]=e[t].replace("irrelevant-block","winning-block")}),e)},b=function(e){var t,r,a=e.split("-");return 2!==a.length?null:(t=a[0].split("").map(function(e){return parseInt(e,10)}),r=a[1].split("").map(function(e){return parseInt(e,10)}),t.some(function(e){return isNaN(e)})||r.some(function(e){return isNaN(e)})?null:[t,r])},N=function(e){return n.a.createElement("div",{className:"square "+e.textColorClass,onClick:e.onClick},e.value)},g=function(e){return n.a.createElement("div",{className:"reload",onClick:e.boardReset},n.a.createElement("i",{className:"fas fa-redo-alt"}))},x=function(e,t){var r=0,a=Array(9).fill(null),n=Array(9).fill(""),l=e.length===t.length;for(r=0;r<e.length;r++)a[e[r]]="X",n[e[r]]="red-color";for(r=0;r<t.length;r++)a[t[r]]="O",n[t[r]]="green-color";return[a,n,l]},k=function(e){function t(e){var r;Object(c.a)(this,t),r=Object(h.a)(this,Object(m.a)(t).call(this,e));var a=e.match.params.state,n=null,l=null,s=Array(9).fill(null),o=Array(9).fill(""),i=!0;if("undefined"!==typeof a&&null!==b(a)){var f=b(a),p=Object(u.a)(f,2);if(n=p[0],l=p[1],n.length<l.length||n.length>5||l.length>4)n=null,l=null;else{var v=x(n,l),d=Object(u.a)(v,3);s=d[0],o=d[1],i=d[2]}}return r.state={squares:s,colorClass:o,xIsNext:i},r}return Object(p.a)(t,e),Object(f.a)(t,[{key:"boardReset",value:function(){this.props.history.push("/");var e=Array(9).fill(null),t=Array(9).fill("");this.setState({squares:e,xIsNext:!0,colorClass:t})}},{key:"setColorClass",value:function(e,t){var r=v(e);return d(t.slice(),r)}},{key:"handleClick",value:function(e){var t=this.state.squares.slice(),r=v(t),a=this.state.colorClass.slice();null===r&&null===t[e]&&(a[e]=!0===this.state.xIsNext?"red-color":"green-color",t[e]=!0===this.state.xIsNext?"X":"O",a=d(a,v(t)),this.props.history.push("/"+function(e){var t=[],r=[],a=0;for(a in e)"X"===e[a]?t.push(a):"O"===e[a]&&r.push(a);return t.join("")+"-"+r.join("")}(t)),this.setState({squares:t,xIsNext:!this.state.xIsNext,colorClass:a}))}},{key:"renderSquare",value:function(e){var t=this;return n.a.createElement(N,{value:this.state.squares[e],textColorClass:this.state.colorClass[e],onClick:function(){return t.handleClick(e)}})}},{key:"render",value:function(){var e=this,t=v(this.state.squares),r="",a="status";"string"===typeof t?r="Match Drawn":null!==t?(a+=" winning-block",r="Winner "+this.state.squares[t[0]]):r="Next player: "+(!0===this.state.xIsNext?"X":"O");for(var l=[],s=[],o=0;o<9;o++)o>0&&o%3===0&&(l.push(n.a.createElement("div",{className:"board-row"},s)),s=[]),s.push(n.a.createElement("div",{className:"board-block"},this.renderSquare(o)));return l.push(n.a.createElement("div",{className:"board-row"},s)),n.a.createElement("div",{className:"game"},n.a.createElement("div",{className:"game-board"},n.a.createElement("div",{className:a},r),n.a.createElement(g,{boardReset:function(){return e.boardReset()}}),n.a.createElement("div",null,l)))}}]),t}(n.a.Component);s.a.render(n.a.createElement(o.a,null,n.a.createElement(i.a,{exact:!0,path:"/:state?",component:k})),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.1f12b27c.chunk.js.map