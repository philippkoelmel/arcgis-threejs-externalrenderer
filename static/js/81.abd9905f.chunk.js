(this.webpackJsonpexample=this.webpackJsonpexample||[]).push([[81],{902:function(e,t,r){"use strict";r.d(t,"a",(function(){return g}));var a,n=r(2),i=r(4),s=r(6),o=r(7),u=r(0),c=r(53),l=r(465),p=r(196),b=r(1),y=(r(17),r(18),r(15),r(11)),d=r(811),f=r(836),j={type:c.a,readOnly:!0,json:{origins:{service:{read:{source:"sublayers",reader:v}}},read:!1}};function v(e,t,r){if(e&&Array.isArray(e))return new c.a(e.map((function(e){var t=function(e){return"group"===e.layerType?h:d.a}(e);if(t){var a=new t;return a.read(e,r),a}r&&r.messages&&e&&r.messages.push(new p.a("building-scene-layer:unsupported-sublayer-type","Building scene sublayer of type '"+(e.type||"unknown")+"' are not supported",{definition:e,context:r}))})))}var O,h=a=function(e){Object(s.a)(r,e);var t=Object(o.a)(r);function r(e){var a;return Object(n.a)(this,r),(a=t.call(this,e)).type="building-group",a.listMode="show",a.sublayers=null,a}return Object(i.a)(r,[{key:"loadAll",value:function(){var e=this;return Object(l.b)(this,(function(t){return a.forEachSublayer(e.sublayers,(function(e){"building-group"!==e.type&&t(e)}))}))}}]),r}(f.a);Object(u.a)([Object(b.b)({type:["hide","show","hide-children"],json:{write:!0}})],h.prototype,"listMode",void 0),Object(u.a)([Object(b.b)(j)],h.prototype,"sublayers",void 0),h=a=Object(u.a)([Object(y.a)("esri.layers.buildingSublayers.BuildingGroupSublayer")],h),(O=h||(h={})).sublayersProperty=j,O.readSublayers=v,O.forEachSublayer=function e(t,r){t.forEach((function(t){r(t),"building-group"===t.type&&e(t.sublayers,r)}))};var g=h},923:function(e,t,r){"use strict";r.d(t,"a",(function(){return j}));var a=r(34),n=r(8),i=r.n(n),s=r(16),o=r(2),u=r(4),c=r(131),l=r(101),p=r(3),b=r(23),y=r(582),d=r(152),f=r(422),j=function(){function e(t,r,a,n){Object(o.a)(this,e),this.parsedUrl=t,this.portalItem=r,this.apiKey=a,this.signal=n,this.rootDocument=null;var i=this.parsedUrl.path.match(/^(.*)\/SceneServer\/layers\/([\d]*)\/?$/i);i&&(this.urlParts={root:i[1],layerId:parseInt(i[2],10)})}return Object(u.a)(e,[{key:"fetch",value:function(){var e=Object(s.a)(i.a.mark((function e(){var t,r,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.urlParts){e.next=2;break}return e.abrupt("return",null);case 2:if(null==(t=this.portalItem)){e.next=6;break}e.t0=t,e.next=9;break;case 6:return e.next=8,this.portalItemFromServiceItemId();case 8:e.t0=e.sent;case 9:if(r=e.t0,!Object(p.j)(r)){e.next=12;break}return e.abrupt("return",this.loadFromUrl());case 12:return e.next=14,this.findAndLoadRelatedPortalItem(r);case 14:return a=e.sent,e.abrupt("return",Object(p.j)(a)?null:this.loadFeatureLayerFromPortalItem(a));case 16:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"fetchPortalItem",value:function(){var e=Object(s.a)(i.a.mark((function e(){var t,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.urlParts){e.next=2;break}return e.abrupt("return",null);case 2:if(null==(t=this.portalItem)){e.next=6;break}e.t0=t,e.next=9;break;case 6:return e.next=8,this.portalItemFromServiceItemId();case 8:e.t0=e.sent;case 9:return r=e.t0,e.abrupt("return",Object(p.j)(r)?null:this.findAndLoadRelatedPortalItem(r));case 11:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"fetchRootDocument",value:function(){var e=Object(s.a)(i.a.mark((function e(){var t,r,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!Object(p.k)(this.rootDocument)){e.next=2;break}return e.abrupt("return",this.rootDocument);case 2:if(!Object(p.j)(this.urlParts)){e.next=4;break}return e.abrupt("return",(this.rootDocument={},{}));case 4:return t={query:{f:"json",token:this.apiKey},responseType:"json",signal:this.signal},r="".concat(this.urlParts.root,"/SceneServer"),e.prev=5,e.next=8,Object(l.default)(r,t);case 8:a=e.sent,this.rootDocument=a.data,e.next=15;break;case 12:e.prev=12,e.t0=e.catch(5),this.rootDocument={};case 15:return e.abrupt("return",this.rootDocument);case 16:case"end":return e.stop()}}),e,this,[[5,12]])})));return function(){return e.apply(this,arguments)}}()},{key:"fetchServiceOwningPortalUrl",value:function(){var e=Object(s.a)(i.a.mark((function e(){var t,r,a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null==(r=null==(t=c.b)?void 0:t.findServerInfo(this.parsedUrl.path))||!r.owningSystemUrl){e.next=3;break}return e.abrupt("return",r.owningSystemUrl);case 3:return a=this.parsedUrl.path.replace(/(.*\/rest)\/.*/i,"$1")+"/info",e.prev=4,e.next=7,Object(l.default)(a,{query:{f:"json"},responseType:"json",signal:this.signal});case 7:if(!(n=e.sent.data.owningSystemUrl)){e.next=10;break}return e.abrupt("return",n);case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(4),Object(b.w)(e.t0);case 15:return e.abrupt("return",null);case 16:case"end":return e.stop()}}),e,this,[[4,12]])})));return function(){return e.apply(this,arguments)}}()},{key:"findAndLoadRelatedPortalItem",value:function(){var e=Object(s.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.fetchRelatedItems({relationshipType:"Service2Service",direction:"reverse"},{signal:this.signal});case 3:if(e.t0=e.sent.find((function(e){return"Feature Service"===e.type})),e.t0){e.next=6;break}e.t0=null;case 6:return e.abrupt("return",e.t0);case 9:return e.prev=9,e.t1=e.catch(0),e.abrupt("return",(Object(b.w)(e.t1),null));case 12:case"end":return e.stop()}}),e,this,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()},{key:"loadFeatureLayerFromPortalItem",value:function(){var e=Object(s.a)(i.a.mark((function e(t){var r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.load({signal:this.signal});case 2:return e.next=4,this.findMatchingAssociatedSublayerUrl(t.url);case 4:return r=e.sent,e.abrupt("return",new y.default({url:r,portalItem:t}).load({signal:this.signal}));case 6:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"loadFromUrl",value:function(){var e=Object(s.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.findMatchingAssociatedSublayerUrl("".concat(this.urlParts.root,"/FeatureServer"));case 2:return t=e.sent,e.abrupt("return",new y.default({url:t}).load({signal:this.signal}));case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"findMatchingAssociatedSublayerUrl",value:function(){var e=Object(s.a)(i.a.mark((function e(t){var r,n,s,o,u,c,p,b,y,d,f,j;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.replace(/^(.*FeatureServer)(\/[\d]*\/?)?$/i,"$1"),n={query:{f:"json"},responseType:"json",authMode:"no-prompt",signal:this.signal},s=this.urlParts.layerId,o=this.fetchRootDocument(),u=Object(l.default)(r,n),e.next=7,Promise.all([u,o]);case 7:if(c=e.sent,p=Object(a.a)(c,2),b=p[0],y=p[1],d=y&&y.layers,f=b.data&&b.data.layers,Array.isArray(f)){e.next=15;break}throw new Error("expected layers array");case 15:if(!Array.isArray(d)){e.next=25;break}j=0;case 17:if(!(j<Math.min(d.length,f.length))){e.next=23;break}if(d[j].id!==s){e.next=20;break}return e.abrupt("return","".concat(r,"/").concat(f[j].id));case 20:j++,e.next=17;break;case 23:e.next=27;break;case 25:if(!(s<f.length)){e.next=27;break}return e.abrupt("return","".concat(r,"/").concat(f[s].id));case 27:throw new Error("could not find matching associated sublayer");case 28:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"portalItemFromServiceItemId",value:function(){var e=Object(s.a)(i.a.mark((function e(){var t,r,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.fetchRootDocument();case 2:if(t=e.sent.serviceItemId){e.next=5;break}return e.abrupt("return",null);case 5:return r=new f.default({id:t,apiKey:this.apiKey}),e.next=8,this.fetchServiceOwningPortalUrl();case 8:return a=e.sent,Object(p.k)(a)&&(r.portal=new d.a({url:a})),e.prev=10,e.abrupt("return",r.load({signal:this.signal}));case 14:return e.prev=14,e.t0=e.catch(10),e.abrupt("return",(Object(b.w)(e.t0),null));case 17:case"end":return e.stop()}}),e,this,[[10,14]])})));return function(){return e.apply(this,arguments)}}()}]),e}()},990:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return Le}));var a=r(8),n=r.n(a),i=r(14),s=r(16),o=r(13),u=r(2),c=r(4),l=r(28),p=r(27),b=r(6),y=r(7),d=r(0),f=r(53),j=r(287),v=r(22),O=r(25),h=r(465),g=r(15),m=r(3),w=r(573),k=r(23),S=r(43),x=r(1),I=(r(18),r(17),r(49)),F=r(11),B=r(55),T=r(373),A=r(811),P=r(902),E=r(587),L=r(584),M=r(575),R=r(574),U=r(576),N=r(873),_=r(29),q=r(588),D=function(e){Object(b.a)(r,e);var t=Object(y.a)(r);function r(){var e;return Object(u.a)(this,r),(e=t.apply(this,arguments)).type=null,e}return r}(_.a);Object(d.a)([Object(x.b)({type:String,readOnly:!0,json:{write:!0}})],D.prototype,"type",void 0);var K,J=D=Object(d.a)([Object(F.a)("esri.layers.support.BuildingFilterAuthoringInfo")],D),V=K=function(e){Object(b.a)(r,e);var t=Object(y.a)(r);function r(){var e;return Object(u.a)(this,r),(e=t.apply(this,arguments)).filterType=null,e.filterValues=null,e}return Object(c.a)(r,[{key:"clone",value:function(){return new K({filterType:this.filterType,filterValues:Object(O.a)(this.filterValues)})}}]),r}(_.a);Object(d.a)([Object(x.b)({type:String,json:{write:!0}})],V.prototype,"filterType",void 0),Object(d.a)([Object(x.b)({type:[String],json:{write:!0}})],V.prototype,"filterValues",void 0);var C,$=V=K=Object(d.a)([Object(F.a)("esri.layers.support.BuildingFilterAuthoringInfoType")],V),H=f.a.ofType($),z=C=function(e){Object(b.a)(r,e);var t=Object(y.a)(r);function r(){return Object(u.a)(this,r),t.apply(this,arguments)}return Object(c.a)(r,[{key:"clone",value:function(){return new C({filterTypes:Object(O.a)(this.filterTypes)})}}]),r}(_.a);Object(d.a)([Object(x.b)({type:H,json:{write:!0}})],z.prototype,"filterTypes",void 0);var G,W=z=C=Object(d.a)([Object(F.a)("esri.layers.support.BuildingFilterAuthoringInfoBlock")],z),X=f.a.ofType(W),Q=G=function(e){Object(b.a)(r,e);var t=Object(y.a)(r);function r(){var e;return Object(u.a)(this,r),(e=t.apply(this,arguments)).type="checkbox",e}return Object(c.a)(r,[{key:"clone",value:function(){return new G({filterBlocks:Object(O.a)(this.filterBlocks)})}}]),r}(J);Object(d.a)([Object(x.b)({type:["checkbox"]})],Q.prototype,"type",void 0),Object(d.a)([Object(x.b)({type:X,json:{write:!0}})],Q.prototype,"filterBlocks",void 0);var Y=Q=G=Object(d.a)([Object(F.a)("esri.layers.support.BuildingFilterAuthoringInfoCheckbox")],Q),Z=function(e){Object(b.a)(r,e);var t=Object(y.a)(r);function r(){return Object(u.a)(this,r),t.apply(this,arguments)}return r}(_.a);Object(d.a)([Object(x.b)({readOnly:!0,json:{read:!1}})],Z.prototype,"type",void 0);var ee,te=Z=Object(d.a)([Object(F.a)("esri.layers.support.BuildingFilterMode")],Z),re=ee=function(e){Object(b.a)(r,e);var t=Object(y.a)(r);function r(){var e;return Object(u.a)(this,r),(e=t.apply(this,arguments)).type="solid",e}return Object(c.a)(r,[{key:"clone",value:function(){return new ee}}]),r}(te);Object(d.a)([Object(x.b)({type:["solid"],readOnly:!0,json:{write:!0}})],re.prototype,"type",void 0);var ae,ne=re=ee=Object(d.a)([Object(F.a)("esri.layers.support.BuildingFilterModeSolid")],re),ie=r(52),se=r(502),oe=ae=function(e){Object(b.a)(r,e);var t=Object(y.a)(r);function r(){var e;return Object(u.a)(this,r),(e=t.apply(this,arguments)).type="wire-frame",e.edges=null,e}return Object(c.a)(r,[{key:"clone",value:function(){return new ae({edges:Object(O.a)(this.edges)})}}]),r}(te);Object(d.a)([Object(ie.a)({wireFrame:"wire-frame"})],oe.prototype,"type",void 0),Object(d.a)([Object(x.b)(se.a)],oe.prototype,"edges",void 0);var ue,ce=oe=ae=Object(d.a)([Object(F.a)("esri.layers.support.BuildingFilterModeWireFrame")],oe),le=ue=function(e){Object(b.a)(r,e);var t=Object(y.a)(r);function r(){var e;return Object(u.a)(this,r),(e=t.apply(this,arguments)).type="x-ray",e}return Object(c.a)(r,[{key:"clone",value:function(){return new ue}}]),r}(te);Object(d.a)([Object(x.b)({type:["x-ray"],readOnly:!0,json:{write:!0}})],le.prototype,"type",void 0);var pe,be=le=ue=Object(d.a)([Object(F.a)("esri.layers.support.BuildingFilterModeXRay")],le),ye={nonNullable:!0,types:{key:"type",base:te,typeMap:{solid:ne,"wire-frame":ce,"x-ray":be}},json:{read:function(e){switch(e&&e.type){case"solid":return ne.fromJSON(e);case"wireFrame":return ce.fromJSON(e);case"x-ray":return be.fromJSON(e);default:return}},write:{enabled:!0,isRequired:!0}}},de=pe=function(e){Object(b.a)(r,e);var t=Object(y.a)(r);function r(){var e;return Object(u.a)(this,r),(e=t.apply(this,arguments)).filterExpression=null,e.filterMode=new ne,e.title="",e}return Object(c.a)(r,[{key:"clone",value:function(){return new pe({filterExpression:this.filterExpression,filterMode:Object(O.a)(this.filterMode),title:this.title})}}]),r}(_.a);Object(d.a)([Object(x.b)({type:String,json:{write:{enabled:!0,isRequired:!0}}})],de.prototype,"filterExpression",void 0),Object(d.a)([Object(x.b)(ye)],de.prototype,"filterMode",void 0),Object(d.a)([Object(x.b)({type:String,json:{write:{enabled:!0,isRequired:!0}}})],de.prototype,"title",void 0);var fe,je=de=pe=Object(d.a)([Object(F.a)("esri.layers.support.BuildingFilterBlock")],de),ve=f.a.ofType(je),Oe=fe=function(e){Object(b.a)(r,e);var t=Object(y.a)(r);function r(){var e;return Object(u.a)(this,r),(e=t.apply(this,arguments)).description=null,e.filterBlocks=null,e.id=Object(q.a)(),e.name=null,e}return Object(c.a)(r,[{key:"clone",value:function(){return new fe({description:this.description,filterBlocks:Object(O.a)(this.filterBlocks),id:this.id,name:this.name,filterAuthoringInfo:Object(O.a)(this.filterAuthoringInfo)})}}]),r}(_.a);Object(d.a)([Object(x.b)({type:String,json:{write:!0}})],Oe.prototype,"description",void 0),Object(d.a)([Object(x.b)({type:ve,json:{write:{enabled:!0,isRequired:!0}}})],Oe.prototype,"filterBlocks",void 0),Object(d.a)([Object(x.b)({types:{key:"type",base:J,typeMap:{checkbox:Y}},json:{read:function(e){return"checkbox"===(e&&e.type)?Y.fromJSON(e):null},write:!0}})],Oe.prototype,"filterAuthoringInfo",void 0),Object(d.a)([Object(x.b)({type:String,constructOnly:!0,json:{write:{enabled:!0,isRequired:!0}}})],Oe.prototype,"id",void 0),Object(d.a)([Object(x.b)({type:String,json:{write:{enabled:!0,isRequired:!0}}})],Oe.prototype,"name",void 0);var he=Oe=fe=Object(d.a)([Object(F.a)("esri.layers.support.BuildingFilter")],Oe),ge=r(101),me=r(185),we=r(243),ke=g.a.getLogger("esri.layers.support.BuildingSummaryStatistics"),Se=function(e){Object(b.a)(r,e);var t=Object(y.a)(r);function r(){var e;return Object(u.a)(this,r),(e=t.apply(this,arguments)).fieldName=null,e.modelName=null,e.label=null,e.min=null,e.max=null,e.mostFrequentValues=null,e.subLayerIds=null,e}return r}(_.a);Object(d.a)([Object(x.b)({type:String})],Se.prototype,"fieldName",void 0),Object(d.a)([Object(x.b)({type:String})],Se.prototype,"modelName",void 0),Object(d.a)([Object(x.b)({type:String})],Se.prototype,"label",void 0),Object(d.a)([Object(x.b)({type:Number})],Se.prototype,"min",void 0),Object(d.a)([Object(x.b)({type:Number})],Se.prototype,"max",void 0),Object(d.a)([Object(x.b)({json:{read:function(e){return Array.isArray(e)&&(e.every((function(e){return"string"==typeof e}))||e.every((function(e){return"number"==typeof e})))?e.slice():null}}})],Se.prototype,"mostFrequentValues",void 0),Object(d.a)([Object(x.b)({type:[Number]})],Se.prototype,"subLayerIds",void 0),Se=Object(d.a)([Object(F.a)("esri.layers.support.BuildingFieldStatistics")],Se);var xe=function(e){Object(b.a)(r,e);var t=Object(y.a)(r);function r(){var e;return Object(u.a)(this,r),(e=t.apply(this,arguments)).url=null,e}return Object(c.a)(r,[{key:"fields",get:function(){return this.loaded||"loading"===this.loadStatus?this._get("fields"):(ke.error("building summary statistics are not loaded"),null)}},{key:"load",value:function(e){var t=Object(m.k)(e)?e.signal:null;return this.addResolvingPromise(this._fetchService(t)),Promise.resolve(this)}},{key:"_fetchService",value:function(){var e=Object(s.a)(n.a.mark((function e(t){var r;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ge.default)(this.url,{query:{f:"json"},responseType:"json",signal:t});case 2:r=e.sent.data,this.read(r,{origin:"service"});case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),r}(me.a.LoadableMixin(Object(we.b)(_.a)));Object(d.a)([Object(x.b)({constructOnly:!0,type:String})],xe.prototype,"url",void 0),Object(d.a)([Object(x.b)({readOnly:!0,type:[Se],json:{read:{source:"summary"}}})],xe.prototype,"fields",null);var Ie=xe=Object(d.a)([Object(F.a)("esri.layers.support.BuildingSummaryStatistics")],xe),Fe=r(192),Be=r(923),Te=g.a.getLogger("esri.layers.BuildingSceneLayer"),Ae=f.a.ofType(he),Pe=Object(O.a)(P.a.sublayersProperty);Pe.json.origins["web-scene"]={type:[A.a],write:{enabled:!0,overridePolicy:function(){return{enabled:!1}}}},Pe.json.origins["portal-item"]={type:[A.a],write:{enabled:!0,overridePolicy:function(){return{enabled:!1}}}};var Ee=function(e){Object(b.a)(r,e);var t=Object(y.a)(r);function r(e){var a;return Object(u.a)(this,r),(a=t.call(this,e)).operationalLayerType="BuildingSceneLayer",a.allSublayers=new j.a({getCollections:function(){return[a.sublayers]},getChildrenFunction:function(e){return"building-group"===e.type?e.sublayers:null}}),a.sublayers=null,a.sublayerOverrides=null,a.filters=new Ae,a.activeFilterId=null,a.summaryStatistics=null,a.outFields=null,a.type="building-scene",a}return Object(c.a)(r,[{key:"normalizeCtorArgs",value:function(e){return"string"==typeof e?{url:e}:e}},{key:"destroy",value:function(){this.allSublayers.destroy()}},{key:"readSublayers",value:function(e,t,r){var a=this,n=P.a.readSublayers(e,t,r);return P.a.forEachSublayer(n,(function(e){return e.layer=a})),this.sublayerOverrides&&(this.applySublayerOverrides(n,this.sublayerOverrides),this.sublayerOverrides=null),n}},{key:"applySublayerOverrides",value:function(e,t){var r=t.overrides,a=t.context;P.a.forEachSublayer(e,(function(e){return e.read(r.get(e.id),a)}))}},{key:"readSublayerOverrides",value:function(e,t){var r,a=new Map,n=Object(o.a)(e);try{for(n.s();!(r=n.n()).done;){var i=r.value;null!=i&&"object"==typeof i&&"number"==typeof i.id?a.set(i.id,i):t.messages.push(new v.a("building-scene-layer:invalid-sublayer-override","Invalid value for sublayer override. Not an object or no id specified.",{value:i}))}}catch(s){n.e(s)}finally{n.f()}return{overrides:a,context:t}}},{key:"writeSublayerOverrides",value:function(e,t,r){var a=[];P.a.forEachSublayer(this.sublayers,(function(e){var t=e.write({},r);Object.keys(t).length>1&&a.push(t)})),a.length>0&&(t.sublayers=a)}},{key:"writeUnappliedOverrides",value:function(e,t){t.sublayers=[],e.overrides.forEach((function(e){t.sublayers.push(Object(O.a)(e))}))}},{key:"write",value:function(e,t){return e=Object(l.a)(Object(p.a)(r.prototype),"write",this).call(this,e,t),!t||"web-scene"!==t.origin&&"portal-item"!==t.origin||(this.sublayers?this.writeSublayerOverrides(this.sublayers,e,t):this.sublayerOverrides&&this.writeUnappliedOverrides(this.sublayerOverrides,e)),e}},{key:"read",value:function(e,t){if(Object(l.a)(Object(p.a)(r.prototype),"read",this).call(this,e,t),t&&("web-scene"===t.origin||"portal-item"===t.origin)&&null!=e&&Array.isArray(e.sublayers)){var a=this.readSublayerOverrides(e.sublayers,t);this.sublayers?this.applySublayerOverrides(this.sublayers,a):this.sublayerOverrides=a}}},{key:"readSummaryStatistics",value:function(e,t){if("string"==typeof t.statisticsHRef){var r=Object(S.z)(this.parsedUrl.path,t.statisticsHRef);return new Ie({url:r})}return null}},{key:"elevationInfo",set:function(e){this._set("elevationInfo",e),this._validateElevationInfo()}},{key:"load",value:function(e){var t=this,r=Object(m.k)(e)?e.signal:null,a=this.loadFromPortal({supportedTypes:["Scene Service"]},e).catch(k.w).then((function(){return t._fetchService(r)})).then((function(){return t._fetchAssociatedFeatureService(r)}));return this.addResolvingPromise(a),Promise.resolve(this)}},{key:"loadAll",value:function(){var e=this;return Object(h.a)(this,(function(t){P.a.forEachSublayer(e.sublayers,(function(e){"building-group"!==e.type&&t(e)})),e.summaryStatistics&&t(e.summaryStatistics)}))}},{key:"saveAs",value:function(){var e=Object(s.a)(n.a.mark((function e(t,r){var a=this;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this._debouncedSaveOperations(1,Object(i.a)(Object(i.a)({},r),{},{getTypeKeywords:function(){return a._getTypeKeywords()},portalItemLayerType:"building-scene"}),t));case 1:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"save",value:function(){var e=Object(s.a)(n.a.mark((function e(){var t,r=this;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={getTypeKeywords:function(){return r._getTypeKeywords()},portalItemLayerType:"building-scene"},e.abrupt("return",this._debouncedSaveOperations(0,t));case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"validateLayer",value:function(e){if(!e.layerType||"Building"!==e.layerType)throw new v.a("buildingscenelayer:layer-type-not-supported","BuildingSceneLayer does not support this layer type",{layerType:e.layerType})}},{key:"_getTypeKeywords",value:function(){return["Building"]}},{key:"_validateElevationInfo",value:function(){var e=this.elevationInfo;e&&("absolute-height"!==e.mode&&Te.warn(".elevationInfo=","Building scene layers only support absolute-height elevation mode"),e.featureExpressionInfo&&"0"!==e.featureExpressionInfo.expression&&Te.warn(".elevationInfo=","Building scene layers do not support featureExpressionInfo"))}},{key:"_fetchAssociatedFeatureService",value:function(){var e=Object(s.a)(n.a.mark((function e(t){var r;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=new Be.a(this.parsedUrl,this.portalItem,this.apiKey,t),e.prev=1,e.next=4,r.fetchPortalItem();case 4:this.associatedFeatureServiceItem=e.sent,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),Te.warn("Associated feature service item could not be loaded",e.t0);case 10:case"end":return e.stop()}}),e,this,[[1,7]])})));return function(t){return e.apply(this,arguments)}}()}]),r}(Object(N.a)(Object(L.a)(Object(M.a)(Object(R.a)(Object(U.a)(Object(w.a)(Object(E.a)(T.a))))))));Object(d.a)([Object(x.b)({type:["BuildingSceneLayer"]})],Ee.prototype,"operationalLayerType",void 0),Object(d.a)([Object(x.b)({readOnly:!0})],Ee.prototype,"allSublayers",void 0),Object(d.a)([Object(x.b)(Pe)],Ee.prototype,"sublayers",void 0),Object(d.a)([Object(I.a)("service","sublayers")],Ee.prototype,"readSublayers",null),Object(d.a)([Object(x.b)({type:Ae,nonNullable:!0,json:{write:!0}})],Ee.prototype,"filters",void 0),Object(d.a)([Object(x.b)({type:String,json:{write:!0}})],Ee.prototype,"activeFilterId",void 0),Object(d.a)([Object(x.b)({readOnly:!0,type:Ie})],Ee.prototype,"summaryStatistics",void 0),Object(d.a)([Object(I.a)("summaryStatistics",["statisticsHRef"])],Ee.prototype,"readSummaryStatistics",null),Object(d.a)([Object(x.b)({type:[String],json:{read:!1}})],Ee.prototype,"outFields",void 0),Object(d.a)([Object(x.b)(Fe.l)],Ee.prototype,"fullExtent",void 0),Object(d.a)([Object(x.b)({type:["show","hide","hide-children"]})],Ee.prototype,"listMode",void 0),Object(d.a)([Object(x.b)(Object(Fe.k)(B.a))],Ee.prototype,"spatialReference",void 0),Object(d.a)([Object(x.b)(Fe.b)],Ee.prototype,"elevationInfo",null),Object(d.a)([Object(x.b)({json:{read:!1},readOnly:!0})],Ee.prototype,"type",void 0),Object(d.a)([Object(x.b)()],Ee.prototype,"associatedFeatureServiceItem",void 0);var Le=Ee=Object(d.a)([Object(F.a)("esri.layers.BuildingSceneLayer")],Ee)}}]);
//# sourceMappingURL=81.abd9905f.chunk.js.map