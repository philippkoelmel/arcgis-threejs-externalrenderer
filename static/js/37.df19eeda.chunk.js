(this.webpackJsonpexample=this.webpackJsonpexample||[]).push([[37],{1124:function(e,t,a){"use strict";a.r(t),a.d(t,"I3STreeDebugger",(function(){return f}));var l=a(2),i=a(4),n=a(6),r=a(7),s=a(0),o=(a(129),a(3)),c=a(1),b=(a(17),a(18),a(15),a(11)),u=a(26),h=a(32),j=a(5),O=a(10),p=a(48),y=a(819),v=a(148),f=function(e){Object(n.a)(a,e);var t=Object(r.a)(a);function a(e){return Object(l.a)(this,a),t.call(this,e)}return Object(i.a)(a,[{key:"getTiles",value:function(){var e=this.lv.getVisibleNodes(),t=this.view.renderSpatialReference,a=this.nodeSR;return e.map((function(e){return function(e,t,a){var l=e.serviceObb;if(Object(o.j)(l)||Object(o.j)(t))return null;Object(u.x)(g,l.quaternion),Object(j.m)(d,l.center),Object(p.q)(d,a,0,d,t,0,1),g[12]=d[0],g[13]=d[1],g[14]=d[2];var i=[[],[],[]];Object(j.m)(d,l.halfSize),Object(j.s)(d,d,g),Object(p.q)(d,t,0,d,a,0,1),i[0].push([d[0],d[1]]),Object(j.m)(d,l.halfSize),d[0]=-d[0],Object(j.s)(d,d,g),Object(p.q)(d,t,0,d,a,0,1),i[0].push([d[0],d[1]]),Object(j.m)(d,l.halfSize),d[0]=-d[0],d[1]=-d[1],Object(j.s)(d,d,g),Object(p.q)(d,t,0,d,a,0,1),i[0].push([d[0],d[1]]),Object(j.m)(d,l.halfSize),d[1]=-d[1],Object(j.s)(d,d,g),Object(p.q)(d,t,0,d,a,0,1),i[0].push([d[0],d[1]]),i[1].push(i[0][0]),i[1].push(i[0][1]),Object(j.m)(d,l.halfSize),d[0]=-d[0],d[2]=-d[2],Object(j.s)(d,d,g),Object(p.q)(d,t,0,d,a,0,1),i[1].push([d[0],d[1]]),Object(j.m)(d,l.halfSize),d[2]=-d[2],Object(j.s)(d,d,g),Object(p.q)(d,t,0,d,a,0,1),i[1].push([d[0],d[1]]),i[2].push(i[0][0]),i[2].push(i[0][3]),Object(j.m)(d,l.halfSize),d[1]=-d[1],d[2]=-d[2],Object(j.s)(d,d,g),Object(p.q)(d,t,0,d,a,0,1),i[2].push([d[0],d[1]]),i[2].push(i[1][3]);var n=new v.a({rings:i,spatialReference:a});return{lij:[e.level,e.childCount,0],label:e.id,geometry:n}}(e,t,a)})).sort((function(e,t){return e.lij[0]===t.lij[0]?e.label>t.label?-1:1:e.lij[0]-t.lij[0]}))}}]),a}(y.a);Object(s.a)([Object(c.b)({constructOnly:!0})],f.prototype,"lv",void 0),Object(s.a)([Object(c.b)({constructOnly:!0})],f.prototype,"nodeSR",void 0),f=Object(s.a)([Object(b.a)("esri.views.3d.layers.support.I3STreeDebugger")],f);var g=Object(h.d)(),d=Object(O.e)()},819:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var l=a(2),i=a(4),n=a(6),r=a(7),s=a(0),o=a(51),c=a(134),b=a(33),u=a(21),h=a(3),j=a(1),O=(a(17),a(18),a(15),a(11)),p=a(207),y=a(226),v=a(263),f=a(208),g=[[0,179,255],[117,62,128],[0,104,255],[215,189,166],[32,0,193],[98,162,206],[102,112,129],[52,125,0],[142,118,246],[138,83,0],[92,122,255],[122,55,83],[0,142,255],[81,40,179],[0,200,244],[13,24,127],[0,170,147],[19,58,241],[22,44,35]],d=function(e){Object(n.a)(a,e);var t=Object(r.a)(a);function a(e){var i;return Object(l.a)(this,a),(i=t.call(this,e)).updating=!1,i.enablePolygons=!0,i.enableLabels=!0,i._polygons=new Map,i._labels=new Map,i._enabled=!0,i}return Object(i.a)(a,[{key:"initialize",value:function(){this._symbols=g.map((function(e){return new y.a({color:[e[0],e[1],e[2],.6],outline:{color:"black",width:1}})})),this.update()}},{key:"destroy",value:function(){this._enabled=!1,this.clear()}},{key:"enabled",get:function(){return this._enabled},set:function(e){this._enabled!==e&&(this._enabled=e,this.update())}},{key:"update",value:function(){var e=this;if(this._enabled){var t=this.getTiles(),a=new Array,l=new Set((this._labels.size,this._labels.keys()));t.forEach((function(i,n){var r=i.lij.toString();l.delete(r);var s=i.lij[0],b=i.geometry;if(e.enablePolygons&&!e._polygons.has(r)){var j=new c.a({geometry:b,symbol:e._symbols[s%e._symbols.length]});e._polygons.set(r,j),a.push(j)}if(e.enableLabels){var O=function(e){if(Object(h.k)(e.label))return e.label;var t=e.lij.toString();return Object(h.k)(e.loadPriority)&&(t+=" (".concat(e.loadPriority,")")),t}(i),y=n/(t.length-1),g=Object(u.m)(0,200,y),d=Object(u.m)(20,6,y)/.75,m=Object(h.k)(i.loadPriority)&&i.loadPriority>=t.length,w=new o.a([g,m?0:g,m?0:g]),_="3d"===e.view.type?function(){return new p.a({verticalOffset:{screenLength:40/.75},callout:{type:"line",color:"white",border:{color:"black"}},symbolLayers:[new f.a({text:O,halo:{color:"white",size:1/.75},material:{color:w},size:d})]})}:function(){return new v.a({text:O,haloColor:"white",haloSize:1/.75,color:w,size:d})};if(e._labels.has(r)){var S=e._labels.get(r),k=_();(Object(h.j)(S.symbol)||JSON.stringify(k)!==JSON.stringify(S.symbol))&&(S.symbol=k)}else{var z=new c.a({geometry:b.extent.center,symbol:_()});e._labels.set(r,z),a.push(z)}}}));var i=new Array;l.forEach((function(t){e._polygons.has(t)&&(i.push(e._polygons.get(t)),e._polygons.delete(t)),e._labels.has(t)&&(i.push(e._labels.get(t)),e._labels.delete(t))})),this.view.graphics.removeMany(i),this.view.graphics.addMany(a)}else this.clear()}},{key:"clear",value:function(){this.view.graphics.removeMany(Array.from(this._polygons.values())),this.view.graphics.removeMany(Array.from(this._labels.values())),this._polygons.clear(),this._labels.clear()}}]),a}(b.a);Object(s.a)([Object(j.b)({constructOnly:!0})],d.prototype,"view",void 0),Object(s.a)([Object(j.b)({readOnly:!0})],d.prototype,"updating",void 0),Object(s.a)([Object(j.b)()],d.prototype,"enabled",null),d=Object(s.a)([Object(O.a)("esri.views.support.TileTreeDebugger")],d)}}]);
//# sourceMappingURL=37.df19eeda.chunk.js.map