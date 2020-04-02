(this["webpackJsonpanimal-crossing-new-horizons-data"]=this["webpackJsonpanimal-crossing-new-horizons-data"]||[]).push([[0],{71:function(t,e,n){t.exports=n(86)},76:function(t,e,n){},82:function(t,e,n){},86:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),s=n(9),o=n.n(s),i=(n(76),n(17)),l=n(39),m=n(62),c=n(130),h=n(135),d=n(132),u=n(134),p=n(87),g=n(136),y=n(58),f=n.n(y);function B(t){return t%12+(0===Math.trunc(t/12)?"am":"pm")}function F(t){return"".concat(B(t.start)," - ").concat(B(t.end))}function A(t){switch(t){case 1:return"Jan";case 2:return"Feb";case 3:return"Mar";case 4:return"Apr";case 5:return"May";case 6:return"Jun";case 7:return"July";case 8:return"Aug";case 9:return"Sept";case 10:return"Oct";case 11:return"Nov";case 12:return"Dec"}}function b(t){return"".concat(A(t.start)," - ").concat(A(t.end))}function S(t,e){return function(t,e){if("All"===t.months)return!0;var n=(new Date).getMonth()+1;return t.months[e].some((function(t){return t.start<=n&&t.end>=n||t.start<=n&&t.start>t.end||t.start>=n&&t.start>t.end&&t.end>=n}))}(t,e)&&function(t){if("All"===t.times)return!0;var e=(new Date).getHours();return t.times.some((function(t){return t.start<=e&&t.end>e||t.start<=e&&t.start>t.end||t.start>=e&&t.start>t.end&&t.end>e}))}(t)}var v=Object(c.a)((function(t){return{cardRoot:{flexGrow:1,minWidth:275,display:"block",width:"30vw"},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},pos:{marginBottom:12}}}));function w(t){var e,n,a,s=v();return r.a.createElement(d.a,{className:s.cardRoot,variant:"outlined"},r.a.createElement(u.a,null,r.a.createElement(p.a,{gutterBottom:!0,variant:"h5",component:"h2"},t.creature.name),r.a.createElement(p.a,{className:s.pos,color:"textSecondary"},t.creature.type),r.a.createElement(h.a,{container:!0,alignItems:"center"},r.a.createElement(h.a,{item:!0,xs:4},r.a.createElement(p.a,null,"Price")),r.a.createElement(h.a,{item:!0,xs:1},r.a.createElement(f.a,null)),r.a.createElement(h.a,{item:!0,xs:7},r.a.createElement(p.a,null,t.creature.price.toLocaleString(navigator.language,{minimumFractionDigits:0}))),r.a.createElement(h.a,{item:!0,xs:4},r.a.createElement(p.a,null,"Location")),r.a.createElement(h.a,{item:!0,xs:8},r.a.createElement(p.a,null,t.creature.location)),r.a.createElement(h.a,{item:!0,xs:4},r.a.createElement(p.a,null,"Active Time(s)")),r.a.createElement(h.a,{item:!0,xs:8},r.a.createElement(p.a,null,"string"===typeof(a=t.creature.times)||a instanceof String?a||"Unknown":a.map(F).join(", "))),r.a.createElement(h.a,{item:!0,xs:4},r.a.createElement(p.a,null,"Active Month(s)")),r.a.createElement(h.a,{item:!0,xs:8},r.a.createElement(p.a,null,(e=t.creature.months,n=t.hemisphere,"string"===typeof e||e instanceof String?e||"Unknown":e[n].map(b).join(", ")))),r.a.createElement(h.a,{item:!0,xs:4},r.a.createElement(p.a,null,"In My Museum")),r.a.createElement(h.a,{item:!0,xs:8},r.a.createElement(g.a,{checked:t.museum.has(t.creature.name),onChange:function(e){var n=new Set(t.museum);e.target.checked?n.add(e.target.name):n.delete(e.target.name),t.setMuseum(n)},name:t.creature.name,inputProps:{"aria-label":"in my museum toggle"}})))))}var O=Object(c.a)((function(t){return{root:{flexGrow:1,minWidth:275},paper:{height:140,width:100},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:14},pos:{marginBottom:12}}}));function E(t){var e=O();return r.a.createElement(h.a,{container:!0,className:e.root,spacing:2},r.a.createElement(h.a,{item:!0,xs:12},r.a.createElement(h.a,{container:!0,justify:"center",spacing:2},t.creatures.map((function(e){return r.a.createElement(h.a,{key:e.name,item:!0},r.a.createElement(w,{creature:e,hemisphere:t.hemisphere,museum:t.museum,setMuseum:t.setMuseum}))})))))}n(82);var k=n(59),R=n.n(k),C=n(34),M=n(21),P=n(143),j=n(142),x=n(138),N=n(15),G=n(146),D=n(90),H=n(60),I=n.n(H),L=n(144),T=n(10),W=n(11),J=n(61),K=n.n(J),z=n(148),U=n(145),q=n(141),Y=n(88),Q=n(140),V=n(147),Z=n(139),$=n(149),X=Object(c.a)((function(t){return{search:Object(M.a)({position:"relative",borderRadius:t.shape.borderRadius,backgroundColor:Object(T.b)(t.palette.common.white,.15),"&:hover":{backgroundColor:Object(T.b)(t.palette.common.white,.25)},marginLeft:0,width:"100%"},t.breakpoints.up("sm"),{marginLeft:t.spacing(1),width:"auto"}),searchIcon:{padding:t.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(M.a)({padding:t.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(t.spacing(4),"px)"),transition:t.transitions.create("width"),width:"100%"},t.breakpoints.up("sm"),{width:"12ch","&:focus":{width:"20ch"}}),title:Object(M.a)({flexGrow:1,display:"none"},t.breakpoints.up("sm"),{display:"block"}),offset:t.mixins.toolbar,root:{display:"flex"},drawer:Object(M.a)({},t.breakpoints.up("sm"),{width:240,flexShrink:0}),appBar:Object(M.a)({},t.breakpoints.up("sm"),{width:"calc(100% - ".concat(240,"px)"),marginLeft:240}),menuButton:Object(M.a)({marginRight:t.spacing(2)},t.breakpoints.up("sm"),{display:"none"}),toolbar:t.mixins.toolbar,drawerPaper:{width:240},content:{flexGrow:1,padding:t.spacing(3)}}}));var _=function(t){var e=t.container,n=X(),a=Object(W.a)(),s=r.a.useState(!1),o=Object(i.a)(s,2),l=o[0],m=o[1],c=function(e){var n=e.target.name,a=e.target.checked;t.setFiltersState(Object(C.a)({},t.filtersState,Object(M.a)({},n,Object(C.a)({},t.filtersState[n],{enabled:a}))))},h=r.a.createElement("div",null,r.a.createElement("div",{className:n.toolbar}),r.a.createElement(x.a,null),r.a.createElement(V.a,{component:"fieldset"},r.a.createElement(Z.a,{component:"legend"},"Filters"),r.a.createElement(Y.a,null,Object.entries(t.filtersState).map((function(t){var e=Object(i.a)(t,2),n=e[0],a=e[1];return r.a.createElement(Q.a,{control:r.a.createElement(g.a,{checked:a.enabled,onChange:c,name:n}),label:a.label})})))),r.a.createElement(x.a,null),r.a.createElement(V.a,{component:"fieldset"},r.a.createElement(Z.a,{component:"legend"},"Hemisphere"),r.a.createElement(q.a,{"aria-label":"hemisphere",name:"hemisphere1",value:t.hemisphere,onChange:function(e){t.onHemisphereChange(e.target.value)}},r.a.createElement(Q.a,{value:"north",control:r.a.createElement(U.a,null),label:"North"}),r.a.createElement(Q.a,{value:"south",control:r.a.createElement(U.a,null),label:"South"}))),r.a.createElement(x.a,null));return r.a.createElement("div",{className:n.root},r.a.createElement(j.a,null),r.a.createElement(P.a,{position:"fixed",className:n.appBar},r.a.createElement(L.a,null,r.a.createElement(D.a,{color:"inherit","aria-label":"open drawer",edge:"start",onClick:function(){m(!l)},className:n.menuButton},r.a.createElement(I.a,null)),r.a.createElement(p.a,{className:n.title,variant:"h6",noWrap:!0},"New Horizons Creature Companion"),r.a.createElement("div",{className:n.search},r.a.createElement("div",{className:n.searchIcon},r.a.createElement(K.a,null)),r.a.createElement(z.a,{placeholder:"Search\u2026",classes:{root:n.inputRoot,input:n.inputInput},inputProps:{"aria-label":"search"},onChange:function(e){return t.onSearchChange(e.target.value)}})))),r.a.createElement("nav",{className:n.drawer,"aria-label":"mailbox folders"},r.a.createElement(G.a,{smUp:!0,implementation:"css"},r.a.createElement($.a,{container:e,variant:"temporary",anchor:"rtl"===a.direction?"right":"left",open:l,onClose:function(){m(!1)},onOpen:function(){m(!0)},classes:{paper:n.drawerPaper},ModalProps:{keepMounted:!0}},h)),r.a.createElement(G.a,{xsDown:!0,implementation:"css"},r.a.createElement(N.a,{classes:{paper:n.drawerPaper},variant:"permanent",open:!0},h))),r.a.createElement("main",{className:n.content},r.a.createElement("div",{className:n.toolbar,class:!0}),r.a.createElement("div",{className:n.offset}),t.content))};var tt=[].concat(Object(l.a)([{name:"Common Butterfly",location:"Flying",price:160,times:[{start:4,end:19}],months:{north:[{start:9,end:6}],south:[{start:3,end:12}]},type:"Bug"},{name:"Yellow Butterfly",location:"Flying",price:160,times:[{start:4,end:19}],months:{north:[{start:3,end:6},{start:9,end:10}],south:[{start:3,end:4},{start:9,end:12}]},type:"Bug"},{name:"Tiger Butterfly",location:"Flying",price:240,times:[{start:4,end:19}],months:{north:[{start:3,end:9}],south:[{start:9,end:3}]},type:"Bug"},{name:"Peacock Butterfly",location:"Flying",price:2500,times:[{start:4,end:19}],months:{north:[{start:3,end:6}],south:[{start:9,end:12}]},type:"Bug"},{name:"Common Bluebottle",location:"Flying",price:300,times:[{start:4,end:19}],months:{north:[{start:4,end:8}],south:[{start:10,end:2}]},type:"Bug"},{name:"Paper Kite Butterfly",location:"Flying",price:1e3,times:[{start:8,end:19}],months:"All",type:"Bug"},{name:"Great Purple Emperor",location:"Flying",price:3e3,times:[{start:4,end:19}],months:{north:[{start:5,end:8}],south:[{start:11,end:2}]},type:"Bug"},{name:"Monach Butterfly",location:"Flying",price:140,times:[{start:4,end:17}],months:{north:[{start:9,end:11}],south:[{start:3,end:5}]},type:"Bug"},{name:"Emperor Butterfly",location:"Flying",price:4e3,times:[{start:17,end:8}],months:{north:[{start:6,end:9},{start:12,end:3}],south:[{start:12,end:3},{start:6,end:9}]},type:"Bug"},{name:"Agrias Butterfly",location:"Flying",price:3e3,times:[{start:8,end:17}],months:{north:[{start:4,end:9}],south:[{start:11,end:3}]},type:"Bug"},{name:"Raja Brooke's Birdwing",location:"Flying",price:2500,times:[{start:8,end:17}],months:{north:[{start:4,end:9},{start:12,end:2}],south:[{start:11,end:3},{start:6,end:8}]},type:"Bug"},{name:"Queen Alexandra's Birdwing",location:"Flying",price:4e3,times:[{start:8,end:16}],months:{north:[{start:5,end:9}],south:[{start:11,end:3}]},type:"Bug"},{name:"Moth",location:"Flying by light",price:130,times:[{start:19,end:4}],months:"All",type:"Bug"},{name:"Atlas Moth",location:"On trees",price:3e3,times:[{start:19,end:4}],months:{north:[{start:4,end:9}],south:[{start:10,end:3}]},type:"Bug"},{name:"Madagascan Sunset Moth",location:"Flying",price:2500,times:[{start:8,end:16}],months:{north:[{start:4,end:9}],south:[{start:10,end:3}]},type:"Bug"},{name:"Long Locust",location:"On ground",price:200,times:[{start:8,end:19}],months:{north:[{start:4,end:11}],south:[{start:11,end:5}]},type:"Bug"},{name:"Migratory Locust",location:"On ground",price:600,times:[{start:8,end:19}],months:{north:[{start:8,end:11}],south:[{start:2,end:5}]},type:"Bug"},{name:"Rice Grasshopper",location:"On ground",price:160,times:[{start:8,end:19}],months:{north:[{start:8,end:11}],south:[{start:2,end:5}]},type:"Bug"},{name:"Grasshopper",location:"On ground",price:160,times:[{start:8,end:17}],months:{north:[{start:7,end:9}],south:[{start:1,end:3}]},type:"Bug"},{name:"Cricket",location:"Dig at cricket noise",price:130,times:[{start:17,end:8}],months:{north:[{start:9,end:11}],south:[{start:3,end:5}]},type:"Bug"},{name:"Bell Cricket",location:"On ground",price:430,times:[{start:17,end:8}],months:{north:[{start:9,end:10}],south:[{start:3,end:4}]},type:"Bug"},{name:"Mantis",location:"On flowers",price:430,times:[{start:8,end:17}],months:{north:[{start:3,end:11}],south:[{start:9,end:5}]},type:"Bug"},{name:"Orchid Mantis",location:"On white flowers",price:2400,times:[{start:8,end:17}],months:{north:[{start:3,end:11}],south:[{start:9,end:5}]},type:"Bug"},{name:"Honeybee",location:"Flying",price:200,times:[{start:8,end:17}],months:{north:[{start:3,end:7}],south:[{start:3,end:7}]},type:"Bug"},{name:"Wasp",location:"Falls from shaking trees",price:2500,times:"All",months:"All",type:"Bug"},{name:"Brown Cicada",location:"On trees",price:250,times:[{start:8,end:17}],months:{north:[{start:7,end:8}],south:[{start:1,end:2}]},type:"Bug"},{name:"Robust Cicada",location:"On trees",price:300,times:[{start:8,end:17}],months:{north:[{start:7,end:8}],south:[{start:1,end:2}]},type:"Bug"},{name:"Giant Cicada",location:"On trees",price:600,times:[{start:8,end:17}],months:{north:[{start:7,end:8}],south:[{start:1,end:2}]},type:"Bug"},{name:"Walker Cicada",location:"On trees",price:400,times:[{start:8,end:17}],months:{north:[{start:8,end:9}],south:[{start:2,end:3}]},type:"Bug"},{name:"Evening Cicada",location:"On trees",price:660,times:[{start:4,end:8},{start:16,end:19}],months:{north:[{start:7,end:8}],south:[{start:1,end:2}]},type:"Bug"},{name:"Cicada Shell",location:"On trees",price:10,times:"All",months:{north:[{start:7,end:8}],south:[{start:1,end:2}]},type:"Bug"},{name:"Red Dragonfly",location:"Flying",price:180,times:[{start:8,end:19}],months:{north:[{start:9,end:10}],south:[{start:3,end:4}]},type:"Bug"},{name:"Darner Dragonfly",location:"Flying",price:230,times:[{start:8,end:17}],months:{north:[{start:4,end:10}],south:[{start:10,end:4}]},type:"Bug"},{name:"Banded Dragonfly",location:"Flying",price:4500,times:[{start:8,end:17}],months:{north:[{start:5,end:10}],south:[{start:11,end:4}]},type:"Bug"},{name:"Damselfly",location:"Flying",price:500,times:"All",months:{north:[{start:11,end:2}],south:[{start:5,end:8}]},type:"Bug"},{name:"Firefly",location:"Flying",price:400,times:[{start:19,end:4}],months:{north:[{start:6,end:6}],south:[{start:12,end:12}]},type:"Bug"},{name:"Mole Cricket",location:"Underground",price:500,times:"All",months:{north:[{start:11,end:5}],south:[{start:5,end:11}]},type:"Bug"},{name:"Pondskater",location:"Ponds",price:130,times:[{start:8,end:19}],months:{north:[{start:5,end:9}],south:[{start:11,end:3}]},type:"Bug"},{name:"Diving Beetle",location:"Ponds and rivers",price:800,times:[{start:8,end:19}],months:{north:[{start:5,end:9}],south:[{start:11,end:3}]},type:"Bug"},{name:"Giant Water Bug",location:"Ponds and rivers",price:2e3,times:[{start:19,end:8}],months:{north:[{start:4,end:9}],south:[{start:10,end:3}]},type:"Bug"},{name:"Stinkbug",location:"On flowers",price:120,times:"All",months:{north:[{start:3,end:11}],south:[{start:9,end:5}]},type:"Bug"},{name:"Man-faced Stink Bug",location:"On flowers",price:1e3,times:[{start:19,end:8}],months:{north:[{start:3,end:11}],south:[{start:9,end:5}]},type:"Bug"},{name:"Ladybug",location:"On flowers",price:200,times:[{start:8,end:17}],months:{north:[{start:3,end:6},{start:10,end:10}],south:[{start:4,end:4},{start:9,end:12}]},type:"Bug"},{name:"Tiger Beetle",location:"On ground",price:1500,times:"All",months:{north:[{start:2,end:11}],south:[{start:8,end:5}]},type:"Bug"},{name:"Jewel Beetle",location:"On trees",price:2400,times:"All",months:{north:[{start:4,end:8}],south:[{start:10,end:2}]},type:"Bug"},{name:"Violin Beetle",location:"On tree stumps",price:450,times:"All",months:{north:[{start:5,end:6},{start:9,end:11}],south:[{start:11,end:12},{start:3,end:4}]},type:"Bug"},{name:"Citrus Long-horned Beetle",location:"On tree stumps",price:350,times:"All",months:"All",type:"Bug"},{name:"Rosalia Batesi Beetle",location:"On tree stumps",price:3e3,times:"All",months:{north:[{start:5,end:9}],south:[{start:11,end:3}]},type:"Bug"},{name:"Blue Weevil Beetle",location:"On palm trees",price:800,times:"All",months:{north:[{start:7,end:8}],south:[{start:1,end:2}]},type:"Bug"},{name:"Dung Beetle",location:"Pushing snowballs",price:3e3,times:"",months:{north:[{start:12,end:2}],south:[{start:6,end:8}]},type:"Bug"},{name:"Earth-boring Dung Beetle",location:"On ground",price:300,times:"All",months:{north:[{start:7,end:9}],south:[{start:1,end:3}]},type:"Bug"},{name:"Scarab Beetle",location:"On trees",price:1e4,times:[{start:23,end:8}],months:{north:[{start:7,end:8}],south:[{start:1,end:2}]},type:"Bug"},{name:"Drone Beetle",location:"On trees",price:200,times:"All",months:{north:[{start:6,end:8}],south:[{start:12,end:2}]},type:"Bug"},{name:"Goliath Beetle",location:"On trees",price:8e3,times:[{start:17,end:8}],months:{north:[{start:6,end:9}],south:[{start:12,end:3}]},type:"Bug"},{name:"Saw Stag",location:"On trees",price:2e3,times:"All",months:{north:[{start:7,end:8}],south:[{start:1,end:2}]},type:"Bug"},{name:"Miyama Stag",location:"On trees",price:1e3,times:"All",months:{north:[{start:7,end:8}],south:[{start:1,end:2}]},type:"Bug"},{name:"Giant Stag",location:"On trees",price:1e4,times:[{start:23,end:8}],months:{north:[{start:7,end:8}],south:[{start:1,end:2}]},type:"Bug"},{name:"Rainbow Stag",location:"On trees",price:6e3,times:[{start:19,end:8}],months:{north:[{start:6,end:9}],south:[{start:12,end:3}]},type:"Bug"},{name:"Cyclommatus Stag",location:"On trees",price:8e3,times:[{start:17,end:8}],months:{north:[{start:7,end:8}],south:[{start:1,end:2}]},type:"Bug"},{name:"Golden Stag",location:"On trees",price:1200,times:[{start:17,end:8}],months:{north:[{start:7,end:8}],south:[{start:1,end:2}]},type:"Bug"},{name:"Giraffe Stag",location:"On trees",price:1200,times:[{start:17,end:8}],months:{north:[{start:7,end:8}],south:[{start:1,end:2}]},type:"Bug"},{name:"Horned Dynastid",location:"On trees",price:1350,times:[{start:17,end:8}],months:{north:[{start:7,end:8}],south:[{start:1,end:2}]},type:"Bug"},{name:"Horned Atlas",location:"On trees",price:8e3,times:[{start:17,end:8}],months:{north:[{start:7,end:8}],south:[{start:1,end:2}]},type:"Bug"},{name:"Horned Elephant",location:"On trees",price:8e3,times:[{start:17,end:8}],months:{north:[{start:7,end:8}],south:[{start:1,end:2}]},type:"Bug"},{name:"Horned Hercules",location:"On trees",price:1200,times:[{start:17,end:8}],months:{north:[{start:7,end:8}],south:[{start:1,end:2}]},type:"Bug"},{name:"Walking Stick",location:"Falls from shaking trees",price:600,times:[{start:4,end:8},{start:17,end:19}],months:{north:[{start:7,end:11}],south:[{start:1,end:5}]},type:"Bug"},{name:"Walking Leaf",location:"Near trees, disguised as furniture leaf",price:600,times:"All",months:{north:[{start:7,end:8}],south:[{start:1,end:3}]},type:"Bug"},{name:"Bagworm",location:"Falls from shaking trees",price:600,times:"All",months:"All",type:"Bug"},{name:"Ant",location:"On rotten food",price:80,times:"All",months:"All",type:"Bug"},{name:"Hermit Crab",location:"Beach",price:1e3,times:[{start:19,end:8}],months:"All",type:"Bug"},{name:"Wharf Roach",location:"On rocks at beach",price:200,times:"All",months:"All",type:"Bug"},{name:"Fly",location:"On trash items",price:60,times:"All",months:"All",type:"Bug"},{name:"Mosquito",location:"Flying",price:130,times:[{start:17,end:4}],months:{north:[{start:6,end:9}],south:[{start:12,end:3}]},type:"Bug"},{name:"Flea",location:"On villagers",price:70,times:"All",months:{north:[{start:4,end:11}],south:[{start:10,end:5}]},type:"Bug"},{name:"Snail",location:"On rocks (raining)",price:250,times:"All",months:"All",type:"Bug"},{name:"Pill Bug",location:"Hit rocks",price:250,times:[{start:23,end:16}],months:{north:[{start:9,end:6}],south:[{start:3,end:12}]},type:"Bug"},{name:"Centipede",location:"Hit rocks",price:300,times:[{start:16,end:23}],months:{north:[{start:9,end:6}],south:[{start:3,end:12}]},type:"Bug"},{name:"Spider",location:"Falls from shaking trees",price:480,times:[{start:19,end:8}],months:"All",type:"Bug"},{name:"Tarantula",location:"On ground",price:8e3,times:[{start:19,end:4}],months:{north:[{start:11,end:4}],south:[{start:5,end:10}]},type:"Bug"},{name:"Scorpion",location:"On ground",price:8e3,times:[{start:19,end:4}],months:{north:[{start:5,end:10}],south:[{start:11,end:4}]},type:"Bug"}]),Object(l.a)([{name:"Bitterling",price:900,location:"River",times:"All",months:{north:[{start:11,end:3}],south:[{start:5,end:9}]},type:"Fish"},{name:"Pale Chub",price:200,location:"River",times:[{start:9,end:16}],months:"All",type:"Fish"},{name:"Crucian Carp",price:160,location:"River",times:"All",months:"All",type:"Fish"},{name:"Dace",price:240,location:"River",times:[{start:16,end:9}],months:"All",type:"Fish"},{name:"Carp",price:300,location:"Pond",times:"All",months:"All",type:"Fish"},{name:"Koi",price:4e3,location:"Pond",times:[{start:16,end:9}],months:"All",type:"Fish"},{name:"Goldfish",price:1300,location:"Pond",times:"All",months:"All",type:"Fish"},{name:"Pop-eyed Goldfish",price:1300,location:"Pond",times:[{start:9,end:16}],months:"All",type:"Fish"},{name:"Ranchu Goldfish",price:4500,location:"Pond",times:[{start:9,end:16}],months:"All",type:"Fish"},{name:"Killifish",price:300,location:"Pond",times:"All",months:{north:[{start:4,end:8}],south:[{start:10,end:2}]},type:"Fish"},{name:"Crawfish",price:200,location:"Pond",times:"All",months:{north:[{start:4,end:9}],south:[{start:10,end:3}]},type:"Fish"},{name:"Soft-shelled Turtle",price:3750,location:"River",times:[{start:16,end:9}],months:{north:[{start:8,end:9}],south:[{start:2,end:3}]},type:"Fish"},{name:"Snapping Turtle",price:5e3,location:"River",times:[{start:21,end:4}],months:{north:[{start:4,end:10}],south:[{start:10,end:4}]},type:"Fish"},{name:"Tadpole",price:100,location:"Pond",times:"All",months:{north:[{start:3,end:7}],south:[{start:9,end:1}]},type:"Fish"},{name:"Frog",price:120,location:"Pond",times:"All",months:{north:[{start:5,end:8}],south:[{start:11,end:2}]},type:"Fish"},{name:"Freshwater Goby",price:400,location:"River",times:[{start:16,end:9}],months:"All",type:"Fish"},{name:"Loach",price:400,location:"River",times:"All",months:{north:[{start:3,end:5}],south:[{start:9,end:11}]},type:"Fish"},{name:"Catfish",price:800,location:"Pond",times:[{start:16,end:9}],months:{north:[{start:5,end:10}],south:[{start:11,end:4}]},type:"Fish"},{name:"Giant Snakehead",price:5500,location:"Pond",times:[{start:9,end:16}],months:{north:[{start:5,end:8}],south:[{start:11,end:2}]},type:"Fish"},{name:"Bluegill",price:180,location:"River",times:[{start:9,end:16}],months:"All",type:"Fish"},{name:"Yellow Perch",price:300,location:"River",times:"All",months:{north:[{start:10,end:3}],south:[{start:4,end:9}]},type:"Fish"},{name:"Black Bass",price:400,location:"River",times:"All",months:"All",type:"Fish"},{name:"Tilapia",price:800,location:"River",times:"All",months:{north:[{start:6,end:10}],south:[{start:12,end:4}]},type:"Fish"},{name:"Pike",price:1800,location:"River",times:"All",months:{north:[{start:9,end:12}],south:[{start:3,end:6}]},type:"Fish"},{name:"Pond Smelt",price:400,location:"River",times:"All",months:{north:[{start:12,end:2}],south:[{start:6,end:8}]},type:"Fish"},{name:"Sweetfish",price:900,location:"River",times:"All",months:{north:[{start:7,end:9}],south:[{start:12,end:3}]},type:"Fish"},{name:"Cherry Salmon",price:1e3,location:"Clifftop river",times:"All",months:{north:[{start:3,end:11}],south:[{start:9,end:5}]},type:"Fish"},{name:"Char",price:3800,location:"River",times:[{start:16,end:9}],months:{north:[{start:3,end:11}],south:[{start:9,end:5}]},type:"Fish"},{name:"Golden Trout",price:15e3,location:"Clifftop river",times:[{start:16,end:9}],months:{north:[{start:3,end:11}],south:[{start:9,end:5}]},type:"Fish"},{name:"Stringfish",price:15e3,location:"Clifftop river",times:[{start:16,end:9}],months:{north:[{start:12,end:3}],south:[{start:6,end:9}]},type:"Fish"},{name:"Salmon",price:700,location:"River mouth",times:"All",months:{north:[{start:9,end:9}],south:[{start:3,end:3}]},type:"Fish"},{name:"King Salmon",price:1800,location:"River mouth",times:"All",months:{north:[{start:9,end:9}],south:[{start:3,end:3}]},type:"Fish"},{name:"Mitten Crab",price:2e3,location:"River",times:[{start:16,end:9}],months:{north:[{start:9,end:11}],south:[{start:3,end:5}]},type:"Fish"},{name:"Guppy",price:1300,location:"River",times:[{start:9,end:16}],months:{north:[{start:4,end:11}],south:[{start:10,end:5}]},type:"Fish"},{name:"Nibble Fish",price:1500,location:"River",times:[{start:9,end:16}],months:{north:[{start:5,end:9}],south:[{start:11,end:4}]},type:"Fish"},{name:"Angelfish",price:3e3,location:"River",times:[{start:16,end:9}],months:{north:[{start:5,end:10}],south:[{start:11,end:4}]},type:"Fish"},{name:"Betta",price:2500,location:"River",times:[{start:9,end:16}],months:{north:[{start:5,end:9}],south:[{start:11,end:3}]},type:"Fish"},{name:"Neon Tetra",price:500,location:"River",times:[{start:9,end:16}],months:{north:[{start:4,end:11}],south:[{start:10,end:5}]},type:"Fish"},{name:"Rainbowfish",price:800,location:"River",times:[{start:9,end:16}],months:{north:[{start:5,end:10}],south:[{start:11,end:4}]},type:"Fish"},{name:"Piranha",price:2500,location:"River",times:[{start:9,end:16},{start:21,end:4}],months:{north:[{start:6,end:9}],south:[{start:12,end:3}]},type:"Fish"},{name:"Arowana",price:1e4,location:"River",times:[{start:16,end:9}],months:{north:[{start:6,end:9}],south:[{start:12,end:3}]},type:"Fish"},{name:"Dorado",price:15e3,location:"River",times:[{start:4,end:21}],months:{north:[{start:6,end:9}],south:[{start:12,end:3}]},type:"Fish"},{name:"Gar",price:6e3,location:"Pond",times:[{start:16,end:9}],months:{north:[{start:6,end:9}],south:[{start:12,end:3}]},type:"Fish"},{name:"Arapaima",price:1e4,location:"River",times:[{start:16,end:9}],months:{north:[{start:6,end:9}],south:[{start:12,end:3}]},type:"Fish"},{name:"Saddled Birchir",price:4e3,location:"River",times:[{start:21,end:4}],months:{north:[{start:6,end:9}],south:[{start:12,end:3}]},type:"Fish"},{name:"Sturgeon",price:1e4,location:"River mouth",times:"All",months:{north:[{start:9,end:3}],south:[{start:3,end:9}]},type:"Fish"},{name:"Sea Butterfly",price:1e3,location:"Sea",times:"All",months:{north:[{start:12,end:3}],south:[{start:6,end:9}]},type:"Fish"},{name:"Seahorse",price:1100,location:"Sea",times:"All",months:{north:[{start:4,end:11}],south:[{start:10,end:5}]},type:"Fish"},{name:"Clownfish",price:650,location:"Sea",times:"All",months:{north:[{start:4,end:9}],south:[{start:10,end:3}]},type:"Fish"},{name:"Surgeonfish",price:1e3,location:"Sea",times:"All",months:{north:[{start:4,end:9}],south:[{start:10,end:3}]},type:"Fish"},{name:"Butterfly Fish",price:1e3,location:"Sea",times:"All",months:{north:[{start:4,end:9}],south:[{start:10,end:3}]},type:"Fish"},{name:"Napoleonfish",price:1e4,location:"Sea",times:[{start:4,end:21}],months:{north:[{start:7,end:8}],south:[{start:1,end:2}]},type:"Fish"},{name:"Zebra Turkeyfish",price:500,location:"Sea",times:"All",months:{north:[{start:4,end:11}],south:[{start:10,end:5}]},type:"Fish"},{name:"Blowfish",price:5e3,location:"Sea",times:[{start:21,end:4}],months:{north:[{start:11,end:2}],south:[{start:5,end:8}]},type:"Fish"},{name:"Puffer Fish",price:250,location:"Sea",times:"All",months:{north:[{start:7,end:9}],south:[{start:1,end:3}]},type:"Fish"},{name:"Anchovy",price:200,location:"Sea",times:[{start:4,end:21}],months:"All",type:"Fish"},{name:"Horse Mackerel",price:150,location:"Sea",times:"All",months:"All",type:"Fish"},{name:"Barred Knifejaw",price:5e3,location:"Sea",times:"All",months:{north:[{start:3,end:11}],south:[{start:9,end:5}]},type:"Fish"},{name:"Sea Bass",price:400,location:"Sea",times:"All",months:"All",type:"Fish"},{name:"Red Snapper",price:3e3,location:"Sea",times:"All",months:"All",type:"Fish"},{name:"Dab",price:300,location:"Sea",times:"All",months:{north:[{start:10,end:4}],south:[{start:4,end:10}]},type:"Fish"},{name:"Olive Flounder",price:800,location:"Sea",times:"All",months:"All",type:"Fish"},{name:"Squid",price:500,location:"Sea",times:"All",months:{north:[{start:12,end:8}],south:[{start:6,end:2}]},type:"Fish"},{name:"Moray Eel",price:2e3,location:"Sea",times:"All",months:{north:[{start:8,end:10}],south:[{start:2,end:4}]},type:"Fish"},{name:"Ribbon Eel",price:600,location:"Sea",times:"All",months:{north:[{start:6,end:10}],south:[{start:1,end:4}]},type:"Fish"},{name:"Tuna",price:7e3,location:"Pier",times:"All",months:{north:[{start:11,end:4}],south:[{start:5,end:10}]},type:"Fish"},{name:"Blue Marlin",price:1e4,location:"Pier",times:"All",months:{north:[{start:7,end:4}],south:[{start:1,end:10}]},type:"Fish"},{name:"Giant Trevally",price:4500,location:"Pier",times:"All",months:{north:[{start:5,end:10}],south:[{start:11,end:4}]},type:"Fish"},{name:"Mahi-mahi",price:6e3,location:"Pier",times:"All",months:{north:[{start:5,end:10}],south:[{start:11,end:4}]},type:"Fish"},{name:"Ocean Sunfish",price:4e3,location:"Sea",times:[{start:4,end:21}],months:{north:[{start:7,end:9}],south:[{start:1,end:3}]},type:"Fish"},{name:"Ray",price:3e3,location:"Sea",times:[{start:4,end:21}],months:{north:[{start:8,end:11}],south:[{start:2,end:5}]},type:"Fish"},{name:"Saw Shark",price:12e3,location:"Sea",times:[{start:16,end:9}],months:{north:[{start:6,end:9}],south:[{start:12,end:3}]},type:"Fish"},{name:"Hammerhead Shark",price:8e3,location:"Sea",times:[{start:16,end:9}],months:{north:[{start:6,end:9}],south:[{start:12,end:3}]},type:"Fish"},{name:"Great White Shark",price:15e3,location:"Sea",times:[{start:16,end:9}],months:{north:[{start:6,end:9}],south:[{start:12,end:3}]},type:"Fish"},{name:"Whale Shark",price:13e3,location:"Sea",times:"All",months:{north:[{start:6,end:9}],south:[{start:12,end:3}]},type:"Fish"},{name:"Suckerfish",price:1500,location:"Sea",times:"All",months:{north:[{start:6,end:9}],south:[{start:12,end:3}]},type:"Fish"},{name:"Football Fish",price:2500,location:"Sea",times:[{start:16,end:9}],months:{north:[{start:11,end:3}],south:[{start:5,end:9}]},type:"Fish"},{name:"Oarfish",price:9e3,location:"Sea",times:"All",months:{north:[{start:12,end:5}],south:[{start:6,end:11}]},type:"Fish"},{name:"Barreleye",price:15e3,location:"Sea",times:[{start:21,end:4}],months:"All",type:"Fish"},{name:"Coelacanth",price:15e3,location:"Sea when raining",times:"All",months:"All",type:"Fish"}]));function et(t,e,n,a){var r,s;return(""===t?tt:(r=tt,s=t,new m.a(r,{shouldSort:!0,keys:["name"],minMatchCharLength:2,threshold:.4}).search(s).map((function(t){return t.item})))).filter((function(t){return(!n.currentlyActive.enabled||S(t,e))&&(!n.goingAway.enabled||function(t,e){return"All"!==t.months&&t.months[e].some((function(t){return t.end===(new Date).getMonth()+1}))}(t,e))&&(!n.newArrival.enabled||function(t,e){return"All"!==t.months&&t.months[e].some((function(t){return t.start===(new Date).getMonth()+1}))}(t,e))&&(!n.notInMuseum.enabled||!a.has(t.name))&&("Bug"!==t.type||n.bugs.enabled)&&("Fish"!==t.type||n.fish.enabled)}))}function nt(){var t=Object(a.useState)(""),e=Object(i.a)(t,2),n=e[0],s=e[1],o=function(t,e){var n=Object(a.useState)((function(){try{var n=window.localStorage.getItem(t);return n?JSON.parse(n):e}catch(a){return console.log(a),e}})),r=Object(i.a)(n,2),s=r[0],o=r[1];return[s,function(e){try{var n=e instanceof Function?e(s):e;o(n),window.localStorage.setItem(t,JSON.stringify(n))}catch(a){console.log(a)}}]}("hemi","north"),m=Object(i.a)(o,2),c=m[0],h=m[1],d=function(t){var e=Object(a.useState)((function(){try{var e=window.localStorage.getItem(t);return e?new Set(JSON.parse(e)):new Set}catch(n){return console.log(n),new Set}})),n=Object(i.a)(e,2),r=n[0],s=n[1];return[r,function(e){try{s(e),window.localStorage.setItem(t,JSON.stringify(Object(l.a)(e)))}catch(n){console.log(n)}}]}("museum"),u=Object(i.a)(d,2),p=u[0],g=u[1],y=Object(a.useState)({bugs:{enabled:!0,label:"Bugs"},fish:{enabled:!0,label:"Fish"},currentlyActive:{enabled:!1,label:"Currently Active Only"},goingAway:{enabled:!1,label:"Leaving This Month"},newArrival:{enabled:!1,label:"New This Month"},notInMuseum:{enabled:!1,label:"Not In Museum"}}),f=Object(i.a)(y,2),B=f[0],F=f[1],A=R.a.debounce((function(t){s(t)}),120),b=r.a.createElement(E,{creatures:et(n,c,B,p),hemisphere:c,museum:p,setMuseum:g});return r.a.createElement("div",null,r.a.createElement(_,{content:b,onSearchChange:A,hemisphere:c,onHemisphereChange:h,filtersState:B,setFiltersState:F}))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(85);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(nt,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[71,1,2]]]);
//# sourceMappingURL=main.5739f158.chunk.js.map