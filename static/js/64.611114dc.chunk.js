(this.webpackJsonpexample=this.webpackJsonpexample||[]).push([[64],{1148:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return E}));var n=r(2),a=r(4),i=r(6),o=r(7),s=r(0),u=r(1),c=(r(17),r(18),r(15),r(11)),l=r(874),f=r(44),y=r(8),p=r.n(y),b=r(14),m=r(16),d=r(28),h=r(27),v=r(22),O=r(3),j=r(23),g=r(192),x=r(840),I=r(793),k=r(156),S=r(742),w=r(834),P=function(e){Object(i.a)(r,e);var t=Object(o.a)(r);function r(){var e;return Object(n.a)(this,r),(e=t.apply(this,arguments)).type="map-image-3d",e}return Object(a.a)(r,[{key:"initialize",value:function(){var e=this;this.updatingHandles.add(this,"exportImageVersion",(function(){return e.updatingHandles.addPromise(e.refreshDebounced())}))}},{key:"createFetchPopupFeaturesQueryGeometry",value:function(e,t){return Object(w.a)(e,t,this.view)}},{key:"getFetchOptions",value:function(){return{timeExtent:this.timeExtent}}}]),r}(function(e){var t=function(e){Object(i.a)(r,e);var t=Object(o.a)(r);function r(){return Object(n.a)(this,r),t.apply(this,arguments)}return Object(a.a)(r,[{key:"initialize",value:function(){this.exportImageParameters=new x.a({layer:this.layer})}},{key:"destroy",value:function(){this.exportImageParameters.destroy(),this.exportImageParameters=null}},{key:"exportImageVersion",get:function(){var e;return null==(e=this.exportImageParameters)||e.commitProperty("version"),this.commitProperty("timeExtent"),(this._get("exportImageVersion")||0)+1}},{key:"fetchPopupFeatures",value:function(){var e=Object(m.a)(p.a.mark((function e(t,r){var n,a,i,o,s,u,c=this;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=this.layer,t){e.next=3;break}return e.abrupt("return",Promise.reject(new v.a("mapimagelayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:n})));case 3:return a=this.get("view.scale"),i=[],o=function(){var e=Object(m.a)(p.a.mark((function e(t){var n,s,u;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=0===t.minScale||a<=t.minScale,s=0===t.maxScale||a>=t.maxScale,t.visible&&n&&s&&(t.sublayers?t.sublayers.forEach(o):t.popupEnabled&&(u=Object(S.a)(t,Object(b.a)(Object(b.a)({},r),{},{defaultPopupTemplateEnabled:!1})),Object(O.k)(u)&&i.unshift({sublayer:t,popupTemplate:u})));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),s=n.sublayers.toArray().reverse().map(o),e.next=6,Promise.all(s);case 6:return u=i.map(function(){var e=Object(m.a)(p.a.mark((function e(n){var a,i,o,s,u,l,f;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.sublayer,i=n.popupTemplate,e.next=3,a.load().catch((function(){}));case 3:return o=a.createQuery(),s=Object(O.k)(r)?r.event:null,u=Object(I.a)({renderer:a.renderer,event:s}),l=c.createFetchPopupFeaturesQueryGeometry(t,u),o.geometry=l,e.next=7,Object(S.b)(a,i);case 7:return o.outFields=e.sent,e.next=10,c._loadArcadeModules(i);case 10:return(f=e.sent)&&f.arcadeUtils.hasGeometryOperations(i)||(o.maxAllowableOffset=l.width/u),e.next=14,a.queryFeatures(o);case 14:return e.abrupt("return",e.sent.features);case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e.next=9,Object(j.k)(u);case 9:return e.abrupt("return",e.sent.reduce((function(e,t){return t.value?[].concat(Object(f.a)(e),Object(f.a)(t.value)):e}),[]).filter((function(e){return null!=e})));case 10:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"canResume",value:function(){var e;return!!Object(d.a)(Object(h.a)(r.prototype),"canResume",this).call(this)&&(null==(e=this.timeExtent)||!e.isEmpty)}},{key:"_loadArcadeModules",value:function(e){if(e.get("expressionInfos.length"))return Object(k.e)()}}]),r}(e);return Object(s.a)([Object(u.b)()],t.prototype,"exportImageParameters",void 0),Object(s.a)([Object(u.b)({readOnly:!0})],t.prototype,"exportImageVersion",null),Object(s.a)([Object(u.b)()],t.prototype,"layer",void 0),Object(s.a)([Object(u.b)()],t.prototype,"suspended",void 0),Object(s.a)([Object(u.b)(g.a)],t.prototype,"timeExtent",void 0),t=Object(s.a)([Object(c.a)("esri.views.layers.MapImageLayerView")],t)}(l.a)),E=P=Object(s.a)([Object(c.a)("esri.views.3d.layers.MapImageLayerView3D")],P)},742:function(e,t,r){"use strict";r.d(t,"a",(function(){return f})),r.d(t,"b",(function(){return c}));var n=r(8),a=r.n(n),i=r(44),o=r(16),s=r(3),u=r(105);function c(e){return l.apply(this,arguments)}function l(){return l=Object(o.a)(a.a.mark((function e(t){var r,n,o,c,l,f,y,p,b,m=arguments;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=m.length>1&&void 0!==m[1]?m[1]:t.popupTemplate,Object(s.k)(r)){e.next=3;break}return e.abrupt("return",[]);case 3:return e.next=5,r.getRequiredFields(t.fieldsIndex);case 5:if(n=e.sent,o=r.lastEditInfoEnabled,c=t.objectIdField,l=t.typeIdField,f=t.globalIdField,y=t.relationships,!n.includes("*")){e.next=13;break}return e.abrupt("return",["*"]);case 13:if(!o){e.next=19;break}return e.next=16,Object(u.n)(t);case 16:e.t0=e.sent,e.next=20;break;case 19:e.t0=[];case 20:return p=e.t0,b=Object(u.j)(t.fieldsIndex,[].concat(Object(i.a)(n),Object(i.a)(p))),e.abrupt("return",(l&&b.push(l),b&&c&&t.fieldsIndex.has(c)&&-1===b.indexOf(c)&&b.push(c),b&&f&&t.fieldsIndex.has(f)&&-1===b.indexOf(f)&&b.push(f),y&&y.forEach((function(e){var r=e.keyField;b&&r&&t.fieldsIndex.has(r)&&-1===b.indexOf(r)&&b.push(r)})),b));case 23:case"end":return e.stop()}}),e)}))),l.apply(this,arguments)}function f(e,t){return e.popupTemplate?e.popupTemplate:Object(s.k)(t)&&t.defaultPopupTemplateEnabled&&Object(s.k)(e.defaultPopupTemplate)?e.defaultPopupTemplate:null}},748:function(e,t,r){"use strict";function n(e){var t,r=e.layer;return"floorInfo"in r&&null!=(t=r.floorInfo)&&t.floorField&&"floors"in e.view?o(e.view.floors,r.floorInfo.floorField):null}function a(e,t){var r;return"floorInfo"in t&&null!=(r=t.floorInfo)&&r.floorField?o(e,t.floorInfo.floorField):null}function i(e,t){var r=t.definitionExpression;return e?r?"(".concat(r,") AND (").concat(e,")"):e:r}function o(e,t){if(null==e||!e.length)return null;var r=e.filter((function(e){return""!==e})).map((function(e){return"'".concat(e,"'")}));return r.push("''"),"".concat(t," IN (").concat(r.join(","),") OR ").concat(t," IS NULL")}r.d(t,"a",(function(){return i})),r.d(t,"b",(function(){return n})),r.d(t,"c",(function(){return a}))},793:function(e,t,r){"use strict";function n(e,t){return t?"xoffset"in t&&t.xoffset?Math.max(e,Math.abs(t.xoffset)):"yoffset"in t&&t.yoffset?Math.max(e,Math.abs(t.yoffset||0)):e:e}function a(e,t){return"number"==typeof e?e:e&&e.stops&&e.stops.length?function(e){for(var t=0,r=0,n=0;n<e.length;n++){var a=e[n].size;"number"==typeof a&&(t+=a,r++)}return t/r}(e.stops):t}function i(e,t){if(!t)return e;var r=t.filter((function(e){return"size"===e.type})).map((function(t){var r=t.maxSize,n=t.minSize;return(a(r,e)+a(n,e))/2})),n=0,i=r.length;if(0===i)return e;for(var o=0;o<i;o++)n+=r[o];var s=Math.floor(n/i);return Math.max(s,e)}function o(e){var t=e&&e.renderer,r="touch"===(e&&e.event&&e.event.pointerType)?9:6;if(!t)return r;var a="visualVariables"in t?i(r,t.visualVariables):r;if("simple"===t.type)return n(a,t.symbol);if("unique-value"===t.type){var o=a;return t.uniqueValueInfos.forEach((function(e){o=n(o,e.symbol)})),o}if("class-breaks"===t.type){var s=a;return t.classBreakInfos.forEach((function(e){s=n(s,e.symbol)})),s}return t.type,a}r.d(t,"a",(function(){return o}))},797:function(e,t,r){"use strict";r.d(t,"a",(function(){return i})),r.d(t,"b",(function(){return s})),r.d(t,"c",(function(){return a}));var n=r(13);function a(e,t,r){return t.flatten((function(e){return e.sublayers})).length!==e.length||(!!e.some((function(e){return e.originIdOf("minScale")>r||e.originIdOf("maxScale")>r||e.originIdOf("renderer")>r||e.originIdOf("labelingInfo")>r||e.originIdOf("opacity")>r||e.originIdOf("labelsVisible")>r||e.originIdOf("source")>r}))||!o(e,t))}function i(e,t,r){return!!e.some((function(e){var t=e.source;return!(!t||"map-layer"===t.type&&t.mapLayerId===e.id&&(!t.gdbVersion||t.gdbVersion===r.gdbVersion))||e.originIdOf("renderer")>2||e.originIdOf("labelingInfo")>2||e.originIdOf("opacity")>2||e.originIdOf("labelsVisible")>2}))||!o(e,t)}function o(e,t){if(!e||!e.length)return!0;var r=t.slice().reverse().flatten((function(e){var t=e.sublayers;return t&&t.toArray().reverse()})).map((function(e){return e.id})).toArray();if(e.length>r.length)return!1;var a,i=0,o=r.length,s=Object(n.a)(e);try{for(s.s();!(a=s.n()).done;){for(var u=a.value.id;i<o&&r[i]!==u;)i++;if(i>=o)return!1}}catch(c){s.e(c)}finally{s.f()}return!0}function s(e){return!!e&&e.some((function(e){return null!=e.minScale||e.layerDefinition&&null!=e.layerDefinition.minScale}))}},834:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));r(129);var n=r(3),a=r(76),i=(r(793),r(70));function o(e,t,r){var o,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:new i.a;if("2d"===r.type)o=t*r.resolution;else if("3d"===r.type){var u=r.overlayPixelSizeInMapUnits(e),c=r.basemapSpatialReference;o=Object(n.k)(c)&&!c.equals(r.spatialReference)?Object(a.f)(c)/Object(a.f)(r.spatialReference):t*u}var l=e.x-o,f=e.y-o,y=e.x+o,p=e.y+o,b=r.spatialReference;return s.xmin=Math.min(l,y),s.ymin=Math.min(f,p),s.xmax=Math.max(l,y),s.ymax=Math.max(f,p),s.spatialReference=b,s}new i.a},840:function(e,t,r){"use strict";r.d(t,"a",(function(){return v}));var n=r(14),a=r(2),i=r(4),o=r(6),s=r(7),u=r(0),c=r(33),l=r(193),f=r(3),y=r(1),p=(r(17),r(18),r(15),r(11)),b=r(192),m=r(797),d=r(748),h={visible:"visibleSublayers",definitionExpression:"layerDefs",labelingInfo:"hasDynamicLayers",labelsVisible:"hasDynamicLayers",opacity:"hasDynamicLayers",minScale:"visibleSublayers",maxScale:"visibleSublayers",renderer:"hasDynamicLayers",source:"hasDynamicLayers"},v=function(e){Object(o.a)(r,e);var t=Object(s.a)(r);function r(e){var n;return Object(a.a)(this,r),(n=t.call(this,e)).floors=null,n.scale=0,n}return Object(i.a)(r,[{key:"destroy",value:function(){this.layer=null}},{key:"dynamicLayers",get:function(){var e=this;if(!this.hasDynamicLayers)return null;var t=this.visibleSublayers.map((function(t){var r=Object(d.c)(e.floors,t);return t.toExportImageJSON(r)}));return t.length?JSON.stringify(t):null}},{key:"hasDynamicLayers",get:function(){return this.layer&&Object(m.a)(this.visibleSublayers,this.layer.serviceSublayers,this.layer)}},{key:"layer",set:function(e){var t=this;this._get("layer")!==e&&(this._set("layer",e),this.handles.remove("layer"),e&&this.handles.add([e.allSublayers.on("change",(function(){return t.notifyChange("visibleSublayers")})),e.on("sublayer-update",(function(e){return t.notifyChange(h[e.propertyName])}))],"layer"))}},{key:"layers",get:function(){var e=this.visibleSublayers;return e?e.length?"show:"+e.map((function(e){return e.id})).join(","):"show:-1":null}},{key:"layerDefs",get:function(){var e,t=this,r=!(null==(e=this.floors)||!e.length),n=this.visibleSublayers.filter((function(e){return null!=e.definitionExpression||r&&null!=e.floorInfo}));return n.length?JSON.stringify(n.reduce((function(e,r){var n=Object(d.c)(t.floors,r),a=Object(f.k)(n)?Object(d.a)(n,r):r.definitionExpression;return e[r.id]=a,e}),{})):null}},{key:"version",get:function(){this.commitProperty("layers"),this.commitProperty("layerDefs"),this.commitProperty("dynamicLayers"),this.commitProperty("timeExtent");var e=this.layer;return e&&(e.commitProperty("dpi"),e.commitProperty("imageFormat"),e.commitProperty("imageTransparency"),e.commitProperty("gdbVersion")),(this._get("version")||0)+1}},{key:"visibleSublayers",get:function(){var e=this,t=[];if(!this.layer)return t;var r=this.layer.sublayers;r&&r.forEach((function r(n){var a=e.scale,i=0===a,o=0===n.minScale||a<=n.minScale,s=0===n.maxScale||a>=n.maxScale;n.visible&&(i||o&&s)&&(n.sublayers?n.sublayers.forEach(r):t.unshift(n))}));var n=this._get("visibleSublayers");return!n||n.length!==t.length||n.some((function(e,r){return t[r]!==e}))?t:n}},{key:"toJSON",value:function(){var e=this.layer,t={dpi:e.dpi,format:e.imageFormat,transparent:e.imageTransparency,gdbVersion:e.gdbVersion||null};return this.hasDynamicLayers&&this.dynamicLayers?t.dynamicLayers=this.dynamicLayers:t=Object(n.a)(Object(n.a)({},t),{},{layers:this.layers,layerDefs:this.layerDefs}),t}}]),r}(Object(l.b)(c.a));Object(u.a)([Object(y.b)({readOnly:!0})],v.prototype,"dynamicLayers",null),Object(u.a)([Object(y.b)()],v.prototype,"floors",void 0),Object(u.a)([Object(y.b)({readOnly:!0})],v.prototype,"hasDynamicLayers",null),Object(u.a)([Object(y.b)()],v.prototype,"layer",null),Object(u.a)([Object(y.b)({readOnly:!0})],v.prototype,"layers",null),Object(u.a)([Object(y.b)({readOnly:!0})],v.prototype,"layerDefs",null),Object(u.a)([Object(y.b)({type:Number})],v.prototype,"scale",void 0),Object(u.a)([Object(y.b)(b.a)],v.prototype,"timeExtent",void 0),Object(u.a)([Object(y.b)({readOnly:!0})],v.prototype,"version",null),Object(u.a)([Object(y.b)({readOnly:!0})],v.prototype,"visibleSublayers",null),v=Object(u.a)([Object(p.a)("esri.layers.mixins.ExportImageParameters")],v)}}]);
//# sourceMappingURL=64.611114dc.chunk.js.map