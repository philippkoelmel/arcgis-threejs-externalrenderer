(this.webpackJsonpexample=this.webpackJsonpexample||[]).push([[109],{1022:function(e,t,a){"use strict";a.r(t),a.d(t,"FeatureTileTree3DDebugger",(function(){return g})),a.d(t,"default",(function(){return v}));var i=a(14),n=a(34),r=a(2),l=a(4),s=a(6),o=a(7),c=a(0),u=(a(129),a(60)),b=a(1),h=(a(17),a(18),a(15),a(11)),y=a(819),d=a(245),p=a(148),g=function(e){Object(s.a)(a,e);var t=Object(o.a)(a);function a(e){var i;return Object(r.a)(this,a),(i=t.call(this,e)).watchUpdatingTracking=new d.a,i.handles=new u.a,i}return Object(l.a)(a,[{key:"initialize",value:function(){var e=this;this.handles.add(this.view.featureTiles.addClient()),this.watchUpdatingTracking.addOnCollectionPropertyChange(this.view.featureTiles,"tiles",(function(){return e.update()}),2)}},{key:"destroy",value:function(){this.handles&&(this.handles.destroy(),this.handles=null),this.watchUpdatingTracking.destroy()}},{key:"getTiles",value:function(){var e=this,t=function(t){var a=Object(n.a)(t.lij,3),i=a[0],r=a[1],l=a[2];return p.a.fromExtent(e.view.featureTiles.tilingScheme.getExtentGeometry(i,r,l))};return this.view.featureTiles.tiles.toArray().sort((function(e,t){return e.loadPriority-t.loadPriority})).map((function(e){return Object(i.a)(Object(i.a)({},e),{},{geometry:t(e)})}))}}]),a}(y.a);Object(c.a)([Object(b.b)({readOnly:!0})],g.prototype,"watchUpdatingTracking",void 0),Object(c.a)([Object(b.b)({readOnly:!0,aliasOf:"watchUpdatingTracking.updating"})],g.prototype,"updating",void 0);var v=g=Object(c.a)([Object(h.a)("esri.views.3d.layers.support.FeatureTileTree3DDebugger")],g)},819:function(e,t,a){"use strict";a.d(t,"a",(function(){return w}));var i=a(2),n=a(4),r=a(6),l=a(7),s=a(0),o=a(51),c=a(134),u=a(33),b=a(21),h=a(3),y=a(1),d=(a(17),a(18),a(15),a(11)),p=a(207),g=a(226),v=a(263),f=a(208),O=[[0,179,255],[117,62,128],[0,104,255],[215,189,166],[32,0,193],[98,162,206],[102,112,129],[52,125,0],[142,118,246],[138,83,0],[92,122,255],[122,55,83],[0,142,255],[81,40,179],[0,200,244],[13,24,127],[0,170,147],[19,58,241],[22,44,35]],w=function(e){Object(r.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).updating=!1,n.enablePolygons=!0,n.enableLabels=!0,n._polygons=new Map,n._labels=new Map,n._enabled=!0,n}return Object(n.a)(a,[{key:"initialize",value:function(){this._symbols=O.map((function(e){return new g.a({color:[e[0],e[1],e[2],.6],outline:{color:"black",width:1}})})),this.update()}},{key:"destroy",value:function(){this._enabled=!1,this.clear()}},{key:"enabled",get:function(){return this._enabled},set:function(e){this._enabled!==e&&(this._enabled=e,this.update())}},{key:"update",value:function(){var e=this;if(this._enabled){var t=this.getTiles(),a=new Array,i=new Set((this._labels.size,this._labels.keys()));t.forEach((function(n,r){var l=n.lij.toString();i.delete(l);var s=n.lij[0],u=n.geometry;if(e.enablePolygons&&!e._polygons.has(l)){var y=new c.a({geometry:u,symbol:e._symbols[s%e._symbols.length]});e._polygons.set(l,y),a.push(y)}if(e.enableLabels){var d=function(e){if(Object(h.k)(e.label))return e.label;var t=e.lij.toString();return Object(h.k)(e.loadPriority)&&(t+=" (".concat(e.loadPriority,")")),t}(n),g=r/(t.length-1),O=Object(b.m)(0,200,g),w=Object(b.m)(20,6,g)/.75,j=Object(h.k)(n.loadPriority)&&n.loadPriority>=t.length,m=new o.a([O,j?0:O,j?0:O]),_="3d"===e.view.type?function(){return new p.a({verticalOffset:{screenLength:40/.75},callout:{type:"line",color:"white",border:{color:"black"}},symbolLayers:[new f.a({text:d,halo:{color:"white",size:1/.75},material:{color:m},size:w})]})}:function(){return new v.a({text:d,haloColor:"white",haloSize:1/.75,color:m,size:w})};if(e._labels.has(l)){var k=e._labels.get(l),T=_();(Object(h.j)(k.symbol)||JSON.stringify(T)!==JSON.stringify(k.symbol))&&(k.symbol=T)}else{var P=new c.a({geometry:u.extent.center,symbol:_()});e._labels.set(l,P),a.push(P)}}}));var n=new Array;i.forEach((function(t){e._polygons.has(t)&&(n.push(e._polygons.get(t)),e._polygons.delete(t)),e._labels.has(t)&&(n.push(e._labels.get(t)),e._labels.delete(t))})),this.view.graphics.removeMany(n),this.view.graphics.addMany(a)}else this.clear()}},{key:"clear",value:function(){this.view.graphics.removeMany(Array.from(this._polygons.values())),this.view.graphics.removeMany(Array.from(this._labels.values())),this._polygons.clear(),this._labels.clear()}}]),a}(u.a);Object(s.a)([Object(y.b)({constructOnly:!0})],w.prototype,"view",void 0),Object(s.a)([Object(y.b)({readOnly:!0})],w.prototype,"updating",void 0),Object(s.a)([Object(y.b)()],w.prototype,"enabled",null),w=Object(s.a)([Object(d.a)("esri.views.support.TileTreeDebugger")],w)}}]);
//# sourceMappingURL=109.3b9a901b.chunk.js.map