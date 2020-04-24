(this["webpackJsonpveggie-corner-stock"]=this["webpackJsonpveggie-corner-stock"]||[]).push([[0],{50:function(e,t,a){e.exports=a(66)},56:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(20),c=a.n(r),o=(a(55),a(56),a(19)),s=a(17),i=a(7),m=function(){return l.a.createElement(o.a,{bg:"dark",variant:"dark",expand:"md"},l.a.createElement(o.a.Brand,{as:"div"},l.a.createElement(i.b,{className:"link",to:"/"},"Veggie stock corner")),l.a.createElement(o.a.Toggle,{"aria-controls":"basic-navbar-nav"}),l.a.createElement(o.a.Collapse,{id:"basic-navbar-nav"},l.a.createElement(s.a,{className:"ml-auto"},l.a.createElement(s.a.Link,{as:"div"},l.a.createElement(i.b,{to:"/"},"Inicio")),l.a.createElement(s.a.Link,{as:"div"},l.a.createElement(i.b,{to:"/foods"},"Alimentos")))))},u=a(68),d=function(){return l.a.createElement(u.a,null,l.a.createElement("h1",null,"Veggie stock corner \ud83e\udd51 \ud83c\udf45 \ud83e\udd6c"),l.a.createElement("p",null,"Una sencilla SPA de alimentos"),l.a.createElement(i.b,{className:"btn btn-dark btn-outline btn-sm",to:"/foods"},"Ver alimentos"))},E=a(26),f=a(27),h=a(32),p=a(30),b=a(69),k=a(70),g=function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(){var e;return Object(E.a)(this,a),(e=t.call(this)).state={foods:void 0},e}return Object(f.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://react-webinar.herokuapp.com/").then((function(e){return e.json()})).then((function(t){return e.setState({foods:t})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return l.a.createElement(u.a,null,this.state.foods?l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",null,"Stock de alimentos"),l.a.createElement("p",null,"Consulta los detalles de stock, precios y origen de nuestros alimentos."),l.a.createElement(k.a,{bordered:!0},l.a.createElement("tbody",null,this.state.foods.map((function(e){return l.a.createElement("tr",{key:e._id},l.a.createElement("td",null,l.a.createElement("img",{src:"/img/".concat(e.img),alt:e.name})),l.a.createElement("td",null,l.a.createElement("p",null,e.name)),l.a.createElement("td",null,l.a.createElement("p",null,"Precio: ",e.price," | Stock: ",e.stock," | Kcal: ",e.kcal)),l.a.createElement("td",null,l.a.createElement("p",null,"Precio: ",e.price," \u20ac | Stock disponible: ",e.stock," uds.",l.a.createElement(i.b,{className:"btn btn-sm btn-outline-dark",to:"/details/".concat(e._id)},"Ver detalles"))))}))))):l.a.createElement(b.a,{animation:"border",role:"status",className:"spinner"},l.a.createElement("h3",{className:"sr-only"},"Loading...")))}}]),a}(n.Component),v=a(71),y=a(72),N=a(74),O=a(73),j=function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(E.a)(this,a),(n=t.call(this,e)).state={foods:void 0},n}return Object(f.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.foodId;fetch("https://react-webinar.herokuapp.com/".concat(t)).then((function(e){return e.json()})).then((function(t){return e.setState({foods:t})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return l.a.createElement(u.a,null,this.state.foods?l.a.createElement(v.a,null,l.a.createElement(y.a,{md:4},l.a.createElement("h1",null,this.state.foods.name),l.a.createElement("img",{className:"food-detail-img",src:"/img/".concat(this.state.foods.img),alt:this.state.foods.name})),l.a.createElement(y.a,{md:8},l.a.createElement("h2",null,"Especificaciones del alimento"),l.a.createElement("p",null,this.state.foods.description),l.a.createElement("hr",null),l.a.createElement("p",null,"Precio: ",this.state.foods.price," \u20ac"),l.a.createElement(N.a,{defaultActiveKey:"Nutricional"},l.a.createElement(O.a,{className:"tab",eventKey:"Nutricional",title:"Nutricional"},l.a.createElement("h3",null,"Informaci\xf3n nutricional"),l.a.createElement("hr",null),l.a.createElement("p",null,"Informaci\xf3n nutricional por 100g:"),l.a.createElement("ul",null,l.a.createElement("li",null,"Calor\xedas: ",this.state.foods.kcal),l.a.createElement("li",null,"Prote\xednas: ",this.state.foods.protein),l.a.createElement("li",null,"Grasas: ",this.state.foods.fat),l.a.createElement("li",null,"Carbohidratos: ",this.state.foods.carbs))),l.a.createElement(O.a,{eventKey:"Origen",title:"Origen"},l.a.createElement("h3",null,"Origen"),l.a.createElement("hr",null),l.a.createElement("p",null,this.state.foods.name," procedente de:"),l.a.createElement("ul",null,this.state.foods.origin.map((function(e){return l.a.createElement("li",null,e)})))),l.a.createElement(O.a,{eventKey:"Stock",title:"Stock"},l.a.createElement("h3",null,"Stock"),l.a.createElement("hr",null),l.a.createElement("p",null,"Stock actual: ",this.state.foods.stock," unidades en stock"))),l.a.createElement(i.b,{className:"btn btn-dark",to:"/foods"},"Volver al listado"))):l.a.createElement(b.a,{animation:"border",role:"status",className:"spinner"},l.a.createElement("h3",{className:"sr-only"},"Loading...")))}}]),a}(n.Component),S=a(13),C=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(m,null),l.a.createElement(S.c,null,l.a.createElement(S.a,{path:"/",exact:!0,component:d}),l.a.createElement(S.a,{path:"/foods",component:g}),l.a.createElement(S.a,{path:"/details/:foodId",component:j}),l.a.createElement(d,null),l.a.createElement(g,null)))};c.a.render(l.a.createElement(i.a,null,l.a.createElement(C,null)),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.d29c510a.chunk.js.map