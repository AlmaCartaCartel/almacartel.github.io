(this["webpackJsonpstar-database"]=this["webpackJsonpstar-database"]||[]).push([[0],{24:function(e,t,a){e.exports=a.p+"static/media/deth-star.81c98480.png"},25:function(e,t,a){e.exports=a(44)},30:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(21),l=a.n(c),i=a(2),s=a(3),o=a(5),u=a(4),m=a(6),p=a(8),d=a(12),f=(a(30),function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark"},r.a.createElement(p.b,{className:" btn navbar-brand",to:"/"},r.a.createElement("h3",null,"StarDB")),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarText","aria-controls":"navbarText","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarText"},r.a.createElement("ul",{className:"navbar-nav mr-auto btn-group"},r.a.createElement("li",null,r.a.createElement(p.b,{to:"/people/"},"People")),r.a.createElement("li",null,r.a.createElement(p.b,{to:"/planets/"},"Planets")),r.a.createElement("li",null,r.a.createElement(p.b,{to:"/starships/"},"Starships")),r.a.createElement("li",null,r.a.createElement(p.b,{to:"/login"},"Login")),r.a.createElement("li",null,r.a.createElement(p.b,{to:"/secret-page"},"Secret")))))}}]),t}(r.a.Component)),h=a(7),g=a.n(h),v=a(13),E=function(){function e(){var t=this;Object(i.a)(this,e),this.getAllPeople=Object(v.a)(g.a.mark((function e(){var a;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResourse("/people/");case 2:return a=e.sent,e.abrupt("return",a.results.map(t._transformPerson));case 4:case"end":return e.stop()}}),e)}))),this.getPerson=function(){var e=Object(v.a)(g.a.mark((function e(a){var n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResourse("/people/".concat(a));case 2:return n=e.sent,e.abrupt("return",t._transformPerson(n));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getAllStarships=Object(v.a)(g.a.mark((function e(){var a;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResourse("/starships/");case 2:return a=e.sent,e.abrupt("return",a.results.map(t._transformStarship));case 4:case"end":return e.stop()}}),e)}))),this.getStarship=function(){var e=Object(v.a)(g.a.mark((function e(a){var n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResourse("/starships/".concat(a));case 2:return n=e.sent,e.abrupt("return",t._transformStarship(n));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getAllPlanets=Object(v.a)(g.a.mark((function e(){var a;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResourse("/planets/");case 2:return a=e.sent,e.abrupt("return",a.results.map(t._transformPlanet));case 4:case"end":return e.stop()}}),e)}))),this.getPlanet=function(){var e=Object(v.a)(g.a.mark((function e(a){var n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResourse("/planets/".concat(a));case 2:return n=e.sent,e.abrupt("return",t._transformPlanet(n));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this._transformPlanet=function(e){return{id:t._getId(e),name:e.name,population:e.population,rotationPeriod:e.rotation_period,diameter:e.diameter,img:t._getImg("/planets/".concat(t._getId(e),".jpg"))}},this._transformPerson=function(e){return{id:t._getId(e),name:e.name,gender:e.gender,birthYear:e.birth_year,eyeColor:e.eye_color,img:t._getImg("/characters/".concat(t._getId(e),".jpg"))}},this._transformStarship=function(e){return{id:t._getId(e),name:e.name,model:e.model,manufacturer:e.manufacturer,costInCredits:e.cost_in_credits,length:e.length,crew:e.crew,passengers:e.passengers,cargoCapacity:e.cargo_capacity,img:t._getImg("/starships/".concat(t._getId(e),".jpg"))}},this._api_base="https://swapi.co/api",this._img_base="https://starwars-visualguide.com/assets/img"}return Object(s.a)(e,[{key:"getResourse",value:function(){var e=Object(v.a)(g.a.mark((function e(t){var a;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(this._api_base+t);case 2:if((a=e.sent).ok){e.next=5;break}throw new Error("\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0437\u0430\u043f\u0440\u043e\u0441\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435 \u043f\u043e \u0430\u0434\u0440\u0435\u0441\u0443 ".concat(this._api_base+t,", \u0441\u0442\u0430\u0442\u0443\u0441 ").concat(a.status));case 5:return e.abrupt("return",a.json());case 6:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"_getImg",value:function(e){return"".concat(this._img_base).concat(e)}},{key:"_getId",value:function(e){return e.url.match(/\/([0-9]*)\/$/)[1]}}]),e}(),b=(a(37),function(){return r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"lds-css ng-scope"},r.a.createElement("div",{className:"lds-double-ring"},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null,r.a.createElement("div",null)),r.a.createElement("div",null,r.a.createElement("div",null)))))}),j=(a(38),a(24)),y=a.n(j),O=function(){return r.a.createElement("div",{className:"error",role:"alert"},r.a.createElement("img",{src:y.a,alt:"error-massage"}),r.a.createElement("h2",null,"BOOM!"),r.a.createElement("p",null,"something has gone terribly wrong"),r.a.createElement("p",null,"(but we alredy sent droid to fix it)"))},w=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={onerror:!1},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidCatch",value:function(){this.setState({onerror:!0})}},{key:"render",value:function(){return this.state.onerror?r.a.createElement(O,null):this.props.children}}]),t}(r.a.Component),I=(a(39),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={planet:{},onload:!0,error:!1},a.swapiService=new E,a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.updateInterval;this.updatePlanet(),this.interval=setInterval((function(){return e.updatePlanet()}),t)}},{key:"updatePlanet",value:function(){var e=this;(0,this.swapiService.getPlanet)(Math.floor(18*Math.random())+2).then((function(t){return e.setState({planet:t,onload:!1})})).catch((function(){return e.onError()}))}},{key:"onError",value:function(){this.setState({error:!0})}},{key:"render",value:function(){var e=this.state,t=e.onload,a=e.planet;if(e.error)return r.a.createElement(O,null);var n=t?r.a.createElement(b,null):r.a.createElement(N,{planet:a});return r.a.createElement(w,null,r.a.createElement("div",{className:"random-planet bg-dark col-12"},r.a.createElement("div",{className:"container"},n)))}}]),t}(r.a.Component));I.defaultProps={updateInterval:1e4};var N=function(e){var t=e.planet,a=t.name,n=t.population,c=t.rotationPeriod,l=t.diameter,i=t.id,s="https://starwars-visualguide.com/assets/img/planets/".concat(i,".jpg");return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"img-cont"},r.a.createElement("img",{src:s,className:"planet-img",alt:""})),r.a.createElement("div",{className:""},r.a.createElement("h3",null,a),r.a.createElement("ul",{className:"list-group"},r.a.createElement("li",{className:"list-group-item"},"Population: ",n),r.a.createElement("li",{className:"list-group-item"},"Rotation period: ",c),r.a.createElement("li",{className:"list-group-item"},"Diameter: ",l))))},_=I,k=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row d-flex"},this.props.children))}}]),t}(r.a.Component),S=r.a.createContext(),P=S.Provider,x=S.Consumer,C=r.a.createElement("div",{className:"container col-lg-4 col-12 d-flex justify-content-center align-items-center"},r.a.createElement("div",{className:"row"},r.a.createElement(b,null))),L=function(e,t){return function(a){function n(){var e,t;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=Object(o.a)(this,(e=Object(u.a)(n)).call.apply(e,[this].concat(r)))).state={data:null,error:!1,load:!0},t}return Object(m.a)(n,a),Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this;t().then((function(t){e.setState({data:t,load:!1})})).catch((function(){e.setState({error:!0})}))}},{key:"render",value:function(){var t=this.state,a=t.data,n=t.load,c=t.error;return n?C:c?O:r.a.createElement(e,Object.assign({},this.props,{data:a}))}}]),n}(r.a.Component)},D=function(e){return function(t){return r.a.createElement(x,null,(function(a){return r.a.createElement(e,Object.assign({},t,{swapiService:a}))}))}},A=(a(40),function(e){var t=e.data,a=e.onItemSelected,n=e.children,c=e.coll,l=t.map((function(e){return r.a.createElement("li",{className:"list-group-item",key:e.id,onClick:function(){return a(e.id)}},n(e))}));return r.a.createElement("div",{className:"".concat(c," item-list container col-12")},r.a.createElement("ul",{className:"list-group row"},l))});A.defaultProps={onItemSelected:function(){},coll:"col-lg-4"};var R=A,M=new E,B=function(e,t){return function(a){return r.a.createElement(e,a,t)}},T=L(B(R,(function(e){var t=e.name;return r.a.createElement("span",null,t)})),M.getAllPeople),Y=L(B(R,(function(e){var t=e.name,a=e.diameter;return r.a.createElement("span",null,t," (",a,")")})),M.getAllPlanets),J=L(B(R,(function(e){var t=e.name,a=e.model;return r.a.createElement("span",null,t," (",a,")")})),M.getAllStarships),G=(a(41),function(e){var t=e.item,a=e.field,n=e.label;return r.a.createElement("li",{className:"list-group-item"},r.a.createElement("span",{className:"term"},n),r.a.createElement("span",null,t[a]))}),U=r.a.createElement("div",{className:"container col-8"},r.a.createElement("div",{className:"item-details card row justify-content-center"},r.a.createElement("span",null,"Select a item from a list"))),W=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).swapiService=new E,a.state={item:null,load:!1},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.updateItem()}},{key:"componentDidUpdate",value:function(e){this.props.itemId!==e.itemId&&(this.setState({load:!0}),this.updateItem())}},{key:"updateItem",value:function(){var e=this,t=this.props,a=t.itemId,n=t.getData;a&&n(a).then((function(t){e.setState({item:t,load:!1})}))}},{key:"render",value:function(){var e=this.state,t=e.item;if(e.load)return r.a.createElement("div",{className:"container col-8"},r.a.createElement("div",{className:"item-details card row justify-content-center"},r.a.createElement(b,null)));if(null===t)return U;var a=t.name,n=t.img;return r.a.createElement("div",{className:"container col-8"},r.a.createElement("div",{className:"item-details card row"},r.a.createElement("img",{className:"item-image",src:n,alt:"item"}),r.a.createElement("div",{className:"card-body"},r.a.createElement("h4",null,a),r.a.createElement("ul",{className:"list-group list-group-flush"},r.a.Children.map(this.props.children,(function(e){return r.a.cloneElement(e,{item:t})}))))))}}]),t}(r.a.Component),$=D((function(e){var t=e.itemId,a=e.swapiService;return r.a.createElement(W,{itemId:t,getData:a.getPerson},r.a.createElement(G,{field:"gender",label:"Gender"}),r.a.createElement(G,{field:"eyeColor",label:"Eye Color"}),r.a.createElement(G,{field:"birthYear",label:"Birth Year"}))})),q=D((function(e){var t=e.itemId,a=e.swapiService;return r.a.createElement(W,{itemId:t,getData:a.getPlanet},r.a.createElement(G,{field:"population",label:"Population"}),r.a.createElement(G,{field:"rotationPeriod",label:"Rotation Period"}),r.a.createElement(G,{field:"diameter",label:"Diameter"}))})),z=D((function(e){var t=e.itemId,a=e.swapiService;return r.a.createElement(W,{itemId:t,getData:a.getStarship},r.a.createElement(G,{field:"model",label:"Model"}),r.a.createElement(G,{field:"length",label:"Length"}),r.a.createElement(G,{field:"costInCredits",label:"Cost"}))})),F=Object(d.g)((function(e){var t=e.history;return r.a.createElement(T,{coll:"col-12",onItemSelected:function(e){t.push(e)}})})),H=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={itemId:null},a.selectPerson=function(e){a.setState({itemId:e})},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(k,null,r.a.createElement(J,{onItemSelected:this.selectPerson}),r.a.createElement(z,{itemId:this.state.itemId}))}}]),t}(n.Component),K=Object(d.g)((function(e){var t=e.history,a=e.match.params.id;return r.a.createElement(k,null,r.a.createElement(Y,{onItemSelected:function(e){return t.push(e)}}),r.a.createElement(q,{itemId:a}))})),Q=function(e){return e.isLoggedIn?r.a.createElement("div",{className:"jumbotron text-center"},r.a.createElement("h3",null,"This page is full of secrets!!!")):r.a.createElement(d.a,{to:"/login"})},V=function(e){var t=e.isLoggedIn,a=e.onLogin;return t?r.a.createElement(d.a,{to:"/"}):r.a.createElement("div",{className:"jumbotron"},r.a.createElement("p",null,"Login to see secret page!"),r.a.createElement("button",{className:"btn btn-primary",onClick:a},"Login"))},X=(a(42),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={isLoggedIn:!1},a.onLogin=function(){a.setState({isLoggedIn:!0})},a.swapiService=new E,a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.state.isLoggedIn;return r.a.createElement("div",{className:"container justify-content-center"},r.a.createElement(w,null,r.a.createElement(P,{value:this.swapiService},r.a.createElement(p.a,null,r.a.createElement(k,null,r.a.createElement(f,null),r.a.createElement(_,null)),r.a.createElement(d.d,null,r.a.createElement(d.b,{path:"/",render:function(){return r.a.createElement("h2",null,"Welcome to StarDB")},exact:!0}),r.a.createElement(d.b,{path:"/people",exact:!0,component:F}),r.a.createElement(d.b,{path:"/planets/:id?",exact:!0,component:K}),r.a.createElement(d.b,{path:"/starships",exact:!0,component:H}),r.a.createElement(d.b,{path:"/people/:id",render:function(e){var t=e.match.params.id;return r.a.createElement($,{itemId:t})}}),r.a.createElement(d.b,{path:"/login",render:function(){return r.a.createElement(V,{isLoggedIn:t,onLogin:e.onLogin})}}),r.a.createElement(d.b,{path:"/secret-page",render:function(){return r.a.createElement(Q,{isLoggedIn:t})}}),r.a.createElement(d.b,{render:function(){return r.a.createElement("h2",null," Page not found")}}))))))}}]),t}(r.a.Component));a(43);l.a.render(r.a.createElement(X,null),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.1484800c.chunk.js.map