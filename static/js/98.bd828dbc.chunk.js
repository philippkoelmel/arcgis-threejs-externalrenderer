(this.webpackJsonpexample=this.webpackJsonpexample||[]).push([[98],{840:function(e,t,r){"use strict";r.d(t,"a",(function(){return j}));var a=r(14),i=r(2),n=r(4),s=r(6),o=r(7),c=r(0),l=r(33),u=r(193),b=r(3),y=r(1),p=(r(17),r(18),r(15),r(11)),h=r(192),O=r(797),m=r(748),d={visible:"visibleSublayers",definitionExpression:"layerDefs",labelingInfo:"hasDynamicLayers",labelsVisible:"hasDynamicLayers",opacity:"hasDynamicLayers",minScale:"visibleSublayers",maxScale:"visibleSublayers",renderer:"hasDynamicLayers",source:"hasDynamicLayers"},j=function(e){Object(s.a)(r,e);var t=Object(o.a)(r);function r(e){var a;return Object(i.a)(this,r),(a=t.call(this,e)).floors=null,a.scale=0,a}return Object(n.a)(r,[{key:"destroy",value:function(){this.layer=null}},{key:"dynamicLayers",get:function(){var e=this;if(!this.hasDynamicLayers)return null;var t=this.visibleSublayers.map((function(t){var r=Object(m.c)(e.floors,t);return t.toExportImageJSON(r)}));return t.length?JSON.stringify(t):null}},{key:"hasDynamicLayers",get:function(){return this.layer&&Object(O.a)(this.visibleSublayers,this.layer.serviceSublayers,this.layer)}},{key:"layer",set:function(e){var t=this;this._get("layer")!==e&&(this._set("layer",e),this.handles.remove("layer"),e&&this.handles.add([e.allSublayers.on("change",(function(){return t.notifyChange("visibleSublayers")})),e.on("sublayer-update",(function(e){return t.notifyChange(d[e.propertyName])}))],"layer"))}},{key:"layers",get:function(){var e=this.visibleSublayers;return e?e.length?"show:"+e.map((function(e){return e.id})).join(","):"show:-1":null}},{key:"layerDefs",get:function(){var e,t=this,r=!(null==(e=this.floors)||!e.length),a=this.visibleSublayers.filter((function(e){return null!=e.definitionExpression||r&&null!=e.floorInfo}));return a.length?JSON.stringify(a.reduce((function(e,r){var a=Object(m.c)(t.floors,r),i=Object(b.k)(a)?Object(m.a)(a,r):r.definitionExpression;return e[r.id]=i,e}),{})):null}},{key:"version",get:function(){this.commitProperty("layers"),this.commitProperty("layerDefs"),this.commitProperty("dynamicLayers"),this.commitProperty("timeExtent");var e=this.layer;return e&&(e.commitProperty("dpi"),e.commitProperty("imageFormat"),e.commitProperty("imageTransparency"),e.commitProperty("gdbVersion")),(this._get("version")||0)+1}},{key:"visibleSublayers",get:function(){var e=this,t=[];if(!this.layer)return t;var r=this.layer.sublayers;r&&r.forEach((function r(a){var i=e.scale,n=0===i,s=0===a.minScale||i<=a.minScale,o=0===a.maxScale||i>=a.maxScale;a.visible&&(n||s&&o)&&(a.sublayers?a.sublayers.forEach(r):t.unshift(a))}));var a=this._get("visibleSublayers");return!a||a.length!==t.length||a.some((function(e,r){return t[r]!==e}))?t:a}},{key:"toJSON",value:function(){var e=this.layer,t={dpi:e.dpi,format:e.imageFormat,transparent:e.imageTransparency,gdbVersion:e.gdbVersion||null};return this.hasDynamicLayers&&this.dynamicLayers?t.dynamicLayers=this.dynamicLayers:t=Object(a.a)(Object(a.a)({},t),{},{layers:this.layers,layerDefs:this.layerDefs}),t}}]),r}(Object(u.b)(l.a));Object(c.a)([Object(y.b)({readOnly:!0})],j.prototype,"dynamicLayers",null),Object(c.a)([Object(y.b)()],j.prototype,"floors",void 0),Object(c.a)([Object(y.b)({readOnly:!0})],j.prototype,"hasDynamicLayers",null),Object(c.a)([Object(y.b)()],j.prototype,"layer",null),Object(c.a)([Object(y.b)({readOnly:!0})],j.prototype,"layers",null),Object(c.a)([Object(y.b)({readOnly:!0})],j.prototype,"layerDefs",null),Object(c.a)([Object(y.b)({type:Number})],j.prototype,"scale",void 0),Object(c.a)([Object(y.b)(h.a)],j.prototype,"timeExtent",void 0),Object(c.a)([Object(y.b)({readOnly:!0})],j.prototype,"version",null),Object(c.a)([Object(y.b)({readOnly:!0})],j.prototype,"visibleSublayers",null),j=Object(c.a)([Object(p.a)("esri.layers.mixins.ExportImageParameters")],j)},926:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return H}));var a=r(8),i=r.n(a),n=r(16),s=r(14),o=r(2),c=r(4),l=r(6),u=r(7),b=r(0),y=r(101),p=r(175),h=r(22),O=r(193),m=r(465),d=r(3),j=r(573),f=r(23),v=r(1),g=(r(17),r(18)),S=(r(15),r(49)),x=r(11),k=r(45),w=r(167),L=r(70),E=r(469),P=r(373),I=r(587),D=r(927),N=r(584),J=r(579),M=r(590),F=r(575),T=r(574),U=r(454),q=r(576),R=r(928),V=r(591),A=r(192),_=r(840),z=r(868),C=r(797),G=function(e){Object(l.a)(r,e);var t=Object(u.a)(r);function r(){var e;Object(o.a)(this,r);for(var a=arguments.length,i=new Array(a),n=0;n<a;n++)i[n]=arguments[n];return(e=t.call.apply(t,[this].concat(i))).datesInUnknownTimezone=!1,e.dpi=96,e.gdbVersion=null,e.imageFormat="png24",e.imageMaxHeight=2048,e.imageMaxWidth=2048,e.imageTransparency=!0,e.isReference=null,e.labelsVisible=!1,e.operationalLayerType="ArcGISMapServiceLayer",e.sourceJSON=null,e.sublayers=null,e.type="map-image",e.url=null,e}return Object(c.a)(r,[{key:"normalizeCtorArgs",value:function(e,t){return"string"==typeof e?Object(s.a)({url:e},t):e}},{key:"load",value:function(e){var t=this,r=Object(d.k)(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service"]},e).catch(f.w).then((function(){return t._fetchService(r)}))),Promise.resolve(this)}},{key:"readImageFormat",value:function(e,t){var r=t.supportedImageFormatTypes;return r&&r.indexOf("PNG32")>-1?"png32":"png24"}},{key:"writeSublayers",value:function(e,t,r,a){if(this.loaded&&e){var i=e.slice().reverse().flatten((function(e){var t=e.sublayers;return t&&t.toArray().reverse()})).toArray(),n=!1;if(this.capabilities&&this.capabilities.operations.supportsExportMap&&this.capabilities.exportMap.supportsDynamicLayers){var o=Object(w.d)(a.origin);if(3===o){var c=this.createSublayersForOrigin("service").sublayers;n=Object(C.c)(i,c,2)}else if(o>3){var l=this.createSublayersForOrigin("portal-item");n=Object(C.c)(i,l.sublayers,Object(w.d)(l.origin))}}var u=[],b=Object(s.a)({writeSublayerStructure:n},a),y=n;i.forEach((function(e){var t=e.write({},b);u.push(t),y=y||"user"===e.originOf("visible")})),u.some((function(e){return Object.keys(e).length>1}))&&(t.layers=u),y&&(t.visibleLayers=i.filter((function(e){return e.visible})).map((function(e){return e.id})))}}},{key:"createExportImageParameters",value:function(e,t,r,a){var i=a&&a.pixelRatio||1;e&&this.version>=10&&(e=e.clone().shiftCentralMeridian());var n=new _.a({layer:this,floors:null==a?void 0:a.floors,scale:Object(E.b)({extent:e,width:t})*i}),o=n.toJSON();n.destroy();var c=!a||!a.rotation||this.version<10.3?{}:{rotation:-a.rotation},l=e&&e.spatialReference,u=l.wkid||JSON.stringify(l.toJSON());o.dpi*=i;var b={};if(null!=a&&a.timeExtent){var y=a.timeExtent.toJSON(),p=y.start,h=y.end;b.time=p&&h&&p===h?""+p:"".concat(null==p?"null":p,",").concat(null==h?"null":h)}else this.timeInfo&&!this.timeInfo.hasLiveData&&(b.time="null,null");return Object(s.a)(Object(s.a)(Object(s.a)({bbox:e&&e.xmin+","+e.ymin+","+e.xmax+","+e.ymax,bboxSR:u,imageSR:u,size:t+","+r},o),c),b)}},{key:"fetchImage",value:function(){var e=Object(n.a)(i.a.mark((function e(t,r,a,n){var o,c,l;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c={responseType:"image",signal:null!=(o=null==n?void 0:n.signal)?o:null,query:Object(s.a)(Object(s.a)(Object(s.a)(Object(s.a)(Object(s.a)({},this.parsedUrl.query),this.createExportImageParameters(t,r,a,n)),{},{f:"image"},this.refreshParameters),this.customParameters),{},{token:this.apiKey})},l=this.parsedUrl.path+"/export",null==c.query.dynamicLayers||this.capabilities.exportMap.supportsDynamicLayers){e.next=3;break}return e.abrupt("return",Promise.reject(new h.a("mapimagelayer:dynamiclayer-not-supported","service ".concat(this.url," doesn't support dynamic layers, which is required to be able to change the sublayer's order, rendering, labeling or source."),{query:c.query})));case 3:return e.abrupt("return",Object(y.default)(l,c).then((function(e){return e.data})).catch((function(e){if(Object(f.n)(e))throw e;throw new h.a("mapimagelayer:image-fetch-error","Unable to load image: ".concat(l),{error:e})})));case 4:case"end":return e.stop()}}),e,this)})));return function(t,r,a,i){return e.apply(this,arguments)}}()},{key:"fetchRecomputedExtents",value:function(){var e=Object(n.a)(i.a.mark((function e(){var t,r,a,n,o,c,l,u,b=arguments;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=b.length>0&&void 0!==b[0]?b[0]:{},r=Object(s.a)(Object(s.a)({},t),{},{query:Object(s.a)(Object(s.a)({returnUpdates:!0,f:"json"},this.customParameters),{},{token:this.apiKey})}),e.next=4,Object(y.default)(this.url,r);case 4:return a=e.sent,n=a.data,o=n.extent,c=n.fullExtent,l=n.timeExtent,u=o||c,e.abrupt("return",{fullExtent:u&&L.a.fromJSON(u),timeExtent:l&&p.a.fromJSON({start:l[0],end:l[1]})});case 11:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"loadAll",value:function(){var e=this;return Object(m.a)(this,(function(t){t(e.allSublayers)}))}},{key:"_fetchService",value:function(){var e=Object(n.a)(i.a.mark((function e(t){var r,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.sourceJSON){e.next=2;break}return e.abrupt("return",void this.read(this.sourceJSON,{origin:"service",url:this.parsedUrl}));case 2:return e.next=4,Object(y.default)(this.parsedUrl.path,{query:Object(s.a)(Object(s.a)(Object(s.a)({f:"json"},this.parsedUrl.query),this.customParameters),{},{token:this.apiKey}),signal:t});case 4:r=e.sent,a=r.data,r.ssl&&(this.url=this.url.replace(/^http:/i,"https:")),this.sourceJSON=a,this.read(a,{origin:"service",url:this.parsedUrl});case 8:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),r}(Object(J.a)(Object(V.a)(Object(q.a)(Object(R.a)(Object(D.a)(Object(N.a)(Object(F.a)(Object(T.a)(Object(j.a)(Object(U.a)(Object(I.a)(Object(M.a)(Object(O.b)(P.a))))))))))))));Object(b.a)([Object(v.b)({type:Boolean})],G.prototype,"datesInUnknownTimezone",void 0),Object(b.a)([Object(v.b)()],G.prototype,"dpi",void 0),Object(b.a)([Object(v.b)()],G.prototype,"gdbVersion",void 0),Object(b.a)([Object(v.b)()],G.prototype,"imageFormat",void 0),Object(b.a)([Object(S.a)("imageFormat",["supportedImageFormatTypes"])],G.prototype,"readImageFormat",null),Object(b.a)([Object(v.b)({json:{origins:{service:{read:{source:"maxImageHeight"}}}}})],G.prototype,"imageMaxHeight",void 0),Object(b.a)([Object(v.b)({json:{origins:{service:{read:{source:"maxImageWidth"}}}}})],G.prototype,"imageMaxWidth",void 0),Object(b.a)([Object(v.b)()],G.prototype,"imageTransparency",void 0),Object(b.a)([Object(v.b)({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:function(){return{enabled:!1}}}}})],G.prototype,"isReference",void 0),Object(b.a)([Object(v.b)({json:{read:!1,write:!1}})],G.prototype,"labelsVisible",void 0),Object(b.a)([Object(v.b)({type:["ArcGISMapServiceLayer"]})],G.prototype,"operationalLayerType",void 0),Object(b.a)([Object(v.b)({json:{read:!1,write:!1}})],G.prototype,"popupEnabled",void 0),Object(b.a)([Object(v.b)()],G.prototype,"sourceJSON",void 0),Object(b.a)([Object(v.b)({json:{write:{ignoreOrigin:!0}}})],G.prototype,"sublayers",void 0),Object(b.a)([Object(k.a)("sublayers",{layers:{type:[z.a]},visibleLayers:{type:[g.a]}})],G.prototype,"writeSublayers",null),Object(b.a)([Object(v.b)({type:["show","hide","hide-children"]})],G.prototype,"listMode",void 0),Object(b.a)([Object(v.b)({json:{read:!1},readOnly:!0,value:"map-image"})],G.prototype,"type",void 0),Object(b.a)([Object(v.b)(A.n)],G.prototype,"url",void 0);var H=G=Object(b.a)([Object(x.a)("esri.layers.MapImageLayer")],G)}}]);
//# sourceMappingURL=98.bd828dbc.chunk.js.map