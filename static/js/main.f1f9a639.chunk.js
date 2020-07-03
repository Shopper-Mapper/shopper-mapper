(this["webpackJsonpshopper-mapper"]=this["webpackJsonpshopper-mapper"]||[]).push([[0],{28:function(e,t,a){e.exports=a(56)},33:function(e,t,a){},51:function(e,t,a){},55:function(e,t,a){e.exports=a.p+"static/media/map.e9e08731.jpg"},56:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(27),s=a.n(c),i=(a(33),a(16)),o=a(6),l=a.n(o),u=a(14),m=a(7),d=a(8),h=a(10),p=a(9),g=a(5),E=a.n(g),y=(a(51),a(3)),v=a(4),f=function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(){var e;return Object(m.a)(this,a),(e=t.call(this)).handleChangeLocation=function(t){e.setState({userInputlocation:t.target.value})},e.handleChangeQuery=function(t){e.setState({userInputQuery:t.target.value})},e.state={userInputlocation:"",userInputQuery:""},e}return Object(d.a)(a,[{key:"render",value:function(){var e=this.state,t=e.userInputlocation,a=e.userInputQuery,n=this.props.handleClick;return r.a.createElement("header",{className:"header"},r.a.createElement("form",{className:"row",action:""},r.a.createElement("div",{className:"header-search col-auto"},r.a.createElement("div",null,r.a.createElement("label",{className:"sr-only",htmlFor:"searchLocation"},"Enter location:"),r.a.createElement("input",{className:"input input-location",onChange:this.handleChangeLocation,type:"text",name:"searchLocation",id:"searchLocation",placeholder:"Your location"})),r.a.createElement("div",null,r.a.createElement("label",{className:"sr-only",htmlFor:"searchQuery"},"Enter query:"),r.a.createElement("input",{className:"input input-query",onChange:this.handleChangeQuery,type:"text",name:"searchQuery",id:"searchQuery",placeholder:"Your query"}))),r.a.createElement("div",{className:"col-auto header-search-btn"},r.a.createElement("button",{className:"button",onClick:function(e){return n(e,t,a)},type:"submit"},r.a.createElement(y.a,{className:"search-icon",icon:v.f})))))}}]),a}(n.Component),b=function(e){var t=e.onClick,a=e.query,n=e.median,c=function(e){var a=e.currentTarget.value;t(a)};return r.a.createElement("div",null,a.length>0?a.map((function(e,t){return r.a.createElement("button",{className:n.includes(t)?"query-btn highlighted":"query-btn",key:e.id,id:e.id,value:e.displayString,onClick:c},e.displayString)})):r.a.createElement("p",null,"No results!"))},k=function(){return r.a.createElement("ul",{className:"row row--center directions-list"},r.a.createElement("li",null,r.a.createElement(y.a,{className:"back-icon directions-icon",icon:v.d})),r.a.createElement("li",null,r.a.createElement(y.a,{className:"back-icon directions-icon",icon:v.c})),r.a.createElement("li",null,r.a.createElement(y.a,{className:"back-icon directions-icon",icon:v.b})),r.a.createElement("li",null,r.a.createElement(y.a,{className:"back-icon directions-icon",icon:v.a})))},w=function(e){var t=e.directionsArray,a=e.handleBackButton;return r.a.createElement("div",{className:"directions-container"},r.a.createElement(k,null),t.map((function(e){return r.a.createElement("ul",{key:e.index},r.a.createElement("li",{className:"query-item"},e.narrative))})),r.a.createElement("button",{onClick:a,className:"button directions-back-btn"},r.a.createElement(y.a,{className:"back-icon",icon:v.e})))},N=function(e){var t=e.children;return r.a.createElement("main",null,t)},q=a(11),L=a.n(q),j="tZVntk8rKYnj1VeUAi4cTD6mGHgEoP15",C=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){var e;return Object(m.a)(this,n),(e=t.call(this)).searchResultsArray=function(){return e.state.queryList.map((function(t,a){return t.displayString+(e.state.middleLocation.includes(a)?"|marker-green":"")})).join("||")},e.findMiddle=function(){var t=Math.floor((e.state.queryList.length-1)/2),a=[];a=e.state.queryList.length%2?[t]:[t,t+1],e.setState({middleLocation:a})},e.handleClick=function(){var t=Object(u.a)(l.a.mark((function t(a,n,r){var c;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),t.next=3,e.getQueries(n,r);case 3:return t.prev=3,e.findMiddle(),t.next=7,E()({method:"GET",url:"https://www.mapquestapi.com/staticmap/v5/map",responseType:"blob",params:{key:"tZVntk8rKYnj1VeUAi4cTD6mGHgEoP15",scalebar:"true|bottom",locations:e.state.location+e.searchResultsArray(),shape:"radius:10km|".concat(e.state.location),size:"600,600"}});case 7:c=t.sent,e.setState({mapImageData:URL.createObjectURL(c.data)}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(3),L()("Error has occurred!","".concat(t.t0));case 14:case"end":return t.stop()}}),t,null,[[3,11]])})));return function(e,a,n){return t.apply(this,arguments)}}(),e.destinationClick=function(t){e.setState({destination:t,loading:!0},(function(){try{E()({url:"https://www.mapquestapi.com/directions/v2/route",method:"GET",responseType:"json",params:{key:j,from:e.state.location,to:e.state.destination}}).then((function(t){t=t.data.route.legs[0].maneuvers,e.setState({directions:t,loading:!1})})),E()({method:"GET",url:"https://www.mapquestapi.com/staticmap/v5/map",responseType:"blob",params:{key:j,scalebar:"true|bottom",start:e.state.location,end:e.state.destination,size:"600,600"}}).then((function(t){e.setState({mapImageData:URL.createObjectURL(t.data),directionsArr:!0,searchResults:!1})}))}catch(t){L()("Error has occurred!","".concat(t))}}))},e.handleBackButton=function(t){t.preventDefault(),e.setState({directionsArr:!1,searchResults:!0})},e.state={queryList:[],searchResults:!1,destination:"",directions:[],mapImageData:"",location:"",middleLocation:[],range:1e4,directionsArr:!1,loading:!1},e}return Object(d.a)(n,[{key:"getQueries",value:function(){var e=Object(u.a)(l.a.mark((function e(t,a){var n,r,c,s,o,u,m,d;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({loading:!0}),e.prev=1,e.next=4,E()({url:"https://www.mapquestapi.com/geocoding/v1/address",method:"GET",responseType:"json",params:{key:j,location:t}});case 4:return n=e.sent,r=Object(i.a)(n.data.results,1),c=Object(i.a)(r[0].locations,1),s=c[0].latLng,o=s.lat,u=s.lng,e.next=12,E()({url:"https://www.mapquestapi.com//search/v4/place",method:"GET",responseType:"json",params:{circle:"".concat(u,", ").concat(o,", ").concat(this.state.range),pageSize:20,key:j,sort:"relevance",q:a}});case 12:m=e.sent,d=m.data.results,this.setState({queryList:d,searchResults:!0,location:t,loading:!1}),e.next=20;break;case 17:e.prev=17,e.t0=e.catch(1),L()("Error has occurred!","".concat(e.t0));case 20:case"end":return e.stop()}}),e,this,[[1,17]])})));return function(t,a){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",{className:"wrapper"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"col-80"},r.a.createElement(f,{handleClick:this.handleClick}),r.a.createElement(N,null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"search-list col-50"},!this.state.queryList.length>0?r.a.createElement("p",{className:"main-intro"},"Welcome to Shopper Mapper - for when you want to go somewhere average. Enter your location and what you\u2019re looking for (e.g. museum, restaurant, cafe) and we\u2019ll list options within 10km, highlighting what\u2019s not too good, not too bad, but right in the middle."):null,this.state.loading?r.a.createElement("p",{className:"main-loading"},"Loading..."):null,this.state.searchResults?r.a.createElement(b,{query:this.state.queryList,median:this.state.middleLocation,onClick:this.destinationClick}):null,this.state.directionsArr?r.a.createElement(w,{handleBackButton:this.handleBackButton,directionsArray:this.state.directions}):null),r.a.createElement("div",{className:"col-50"},this.state.mapImageData?r.a.createElement("img",{className:"query-image",src:this.state.mapImageData,alt:"map"}):r.a.createElement("img",{className:"query-image",src:a(55),alt:"anothermap"})))))))}}]),n}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[28,1,2]]]);
//# sourceMappingURL=main.f1f9a639.chunk.js.map