(this.webpackJsonpexample=this.webpackJsonpexample||[]).push([[31],{757:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return l})),n.d(t,"c",(function(){return p})),n.d(t,"d",(function(){return u}));var r=n(20),a=n(14),i=n(17),s=n(25),c=n(760),o=n(318);function u(e){return{renderer:{type:"simple",symbol:"esriGeometryPoint"===e||"esriGeometryMultipoint"===e?o.c:"esriGeometryPolyline"===e?o.e:o.d}}}function l(e,t){if(Object(i.a)("csp-restrictions"))return function(){return Object(a.a)(Object(r.a)({},t,null),e)};try{var n="this.".concat(t," = null;");for(var s in e)n+="this".concat(s.indexOf(".")?'["'.concat(s,'"]'):".".concat(s)," = ").concat(JSON.stringify(e[s]),";");var c=new Function(n);return function(){return new c}}catch(o){return function(){return Object(a.a)(Object(r.a)({},t,null),e)}}}function p(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return[{name:"New Feature",description:"",prototype:{attributes:Object(s.a)(e)}}]}function d(e,t){return{attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:e},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:t,supportsDelete:t,supportsEditing:t,supportsChangeTracking:!1,supportsQuery:!0,supportsQueryAttachments:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:t,supportsExceedsLimitStatistics:!0},query:c.a,queryRelated:{supportsCount:!0,supportsOrderBy:!0,supportsPagination:!0},editing:{supportsGeometryUpdate:t,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1}}}},806:function(e,t,n){"use strict";n.d(t,"a",(function(){return M})),n.d(t,"b",(function(){return b})),n.d(t,"c",(function(){return P})),n.d(t,"d",(function(){return S}));var r=n(34),a=n(8),i=n.n(a),s=n(13),c=n(22),o=n(281),u=n(223),l=i.a.mark(y),p=i.a.mark(m),d=i.a.mark(g),f={LineString:"esriGeometryPolyline",MultiLineString:"esriGeometryPolyline",MultiPoint:"esriGeometryMultipoint",Point:"esriGeometryPoint",Polygon:"esriGeometryPolygon",MultiPolygon:"esriGeometryPolygon"};function b(e){return f[e]}function y(e){var t,n,r;return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:a.t0=e.type,a.next="Feature"===a.t0?3:"FeatureCollection"===a.t0?6:25;break;case 3:return a.next=5,e;case 5:return a.abrupt("break",25);case 6:t=Object(s.a)(e.features),a.prev=7,t.s();case 9:if((n=t.n()).done){a.next=17;break}if(r=n.value,a.t1=r,!a.t1){a.next=15;break}return a.next=15,r;case 15:a.next=9;break;case 17:a.next=22;break;case 19:a.prev=19,a.t2=a.catch(7),t.e(a.t2);case 22:return a.prev=22,t.f(),a.finish(22);case 25:case"end":return a.stop()}}),l,null,[[7,19,22,25]])}function m(e){var t,n,r,a,c,o,u,l,d;return i.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:if(e){i.next=2;break}return i.abrupt("return",null);case 2:i.t0=e.type,i.next="Point"===i.t0?5:"LineString"===i.t0||"MultiPoint"===i.t0?8:"MultiLineString"===i.t0||"Polygon"===i.t0?10:"MultiPolygon"===i.t0?27:58;break;case 5:return i.next=7,e.coordinates;case 7:return i.abrupt("break",58);case 8:return i.delegateYield(e.coordinates,"t1",9);case 9:return i.abrupt("break",58);case 10:t=Object(s.a)(e.coordinates),i.prev=11,t.s();case 13:if((n=t.n()).done){i.next=18;break}return r=n.value,i.delegateYield(r,"t2",16);case 16:i.next=13;break;case 18:i.next=23;break;case 20:i.prev=20,i.t3=i.catch(11),t.e(i.t3);case 23:return i.prev=23,t.f(),i.finish(23);case 26:return i.abrupt("break",58);case 27:a=Object(s.a)(e.coordinates),i.prev=28,a.s();case 30:if((c=a.n()).done){i.next=50;break}o=c.value,u=Object(s.a)(o),i.prev=33,u.s();case 35:if((l=u.n()).done){i.next=40;break}return d=l.value,i.delegateYield(d,"t4",38);case 38:i.next=35;break;case 40:i.next=45;break;case 42:i.prev=42,i.t5=i.catch(33),u.e(i.t5);case 45:return i.prev=45,u.f(),i.finish(45);case 48:i.next=30;break;case 50:i.next=55;break;case 52:i.prev=52,i.t6=i.catch(28),a.e(i.t6);case 55:return i.prev=55,a.f(),i.finish(55);case 58:case"end":return i.stop()}}),p,null,[[11,20,23,26],[28,52,55,58],[33,42,45,48]])}function g(e){var t,n,r,a,c,l,p,f,y,m,g,h,v,j=arguments;return i.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:t=j.length>1&&void 0!==j[1]?j[1]:{},n=t.geometryType,r=t.objectIdField,a=Object(s.a)(e),i.prev=3,a.s();case 5:if((c=a.n()).done){i.next=18;break}if(l=c.value,f=l.geometry,y=l.properties,m=l.id,!f||b(f.type)===n){i.next=10;break}return i.abrupt("continue",16);case 10:return h=null!=(p=(g=y||{})[r])?p:null,r&&null!=m&&!g[r]&&(g[r]=h=m),v=new o.b(f?O(new u.a,f,t):null,g,null,h),i.next=16,v;case 16:i.next=5;break;case 18:i.next=23;break;case 20:i.prev=20,i.t0=i.catch(3),a.e(i.t0);case 23:return i.prev=23,a.f(),i.finish(23);case 26:case"end":return i.stop()}}),d,null,[[3,20,23,26]])}function h(e){var t,n=Object(s.a)(e);try{for(n.s();!(t=n.n()).done;){if(t.value.length>2)return!0}}catch(r){n.e(r)}finally{n.f()}return!1}function v(e){for(var t=0,n=0;n<e.length;n++){var r=e[n],a=e[(n+1)%e.length];t+=r[0]*a[1]-a[0]*r[1]}return t<=0}function j(e){var t=e[0],n=e[e.length-1];return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]||e.push(t),e}function O(e,t,n){switch(t.type){case"LineString":case"MultiPoint":return function(e,t,n){return x(e,t.coordinates,n),e}(e,t,n);case"MultiLineString":return function(e,t,n){var r,a=Object(s.a)(t.coordinates);try{for(a.s();!(r=a.n()).done;){x(e,r.value,n)}}catch(i){a.e(i)}finally{a.f()}return e}(e,t,n);case"MultiPolygon":return function(e,t,n){var r,a=Object(s.a)(t.coordinates);try{for(a.s();!(r=a.n()).done;){var i=r.value;w(e,i[0],n);for(var c=1;c<i.length;c++)k(e,i[c],n)}}catch(o){a.e(o)}finally{a.f()}return e}(e,t,n);case"Point":return function(e,t,n){return I(e,t.coordinates,n),e}(e,t,n);case"Polygon":return function(e,t,n){var r=t.coordinates;w(e,r[0],n);for(var a=1;a<r.length;a++)k(e,r[a],n);return e}(e,t,n)}}function w(e,t,n){var r=j(t);!function(e){return!v(e)}(r)?x(e,r,n):F(e,r,n)}function k(e,t,n){var r=j(t);!function(e){return v(e)}(r)?x(e,r,n):F(e,r,n)}function x(e,t,n){var r,a=Object(s.a)(t);try{for(a.s();!(r=a.n()).done;){I(e,r.value,n)}}catch(i){a.e(i)}finally{a.f()}e.lengths.push(t.length)}function F(e,t,n){for(var r=t.length-1;r>=0;r--)I(e,t[r],n);e.lengths.push(t.length)}function I(e,t,n){var a=Object(r.a)(t,3),i=a[0],s=a[1],c=a[2];e.coords.push(i,s),n.hasZ&&e.coords.push(c||0)}function T(e){switch(typeof e){case"string":return"esriFieldTypeString";case"number":return"esriFieldTypeDouble";default:return"unknown"}}function S(e){if(!e)throw new c.a("geojson-layer:empty","GeoJSON data is empty");if("Feature"!==e.type&&"FeatureCollection"!==e.type)throw new c.a("geojson-layer:unsupported-geojson-object","missing or not supported GeoJSON object type",{data:e});var t=e.crs;if(t){var n="string"==typeof t?t:"name"===t.type?t.properties.name:"EPSG"===t.type?t.properties.code:null,r=new RegExp(".*(CRS84H?|4326)$","i");if(!n||!r.test(n))throw new c.a("geojson-layer:unsupported-crs","unsupported GeoJSON 'crs' member",{crs:t})}}function P(e){var t,n,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=[],i=new Set,c=new Set,o=!1,u=Number.NEGATIVE_INFINITY,l=null,p=!1,d=r.geometryType,f=void 0===d?null:d,g=!1,v=Object(s.a)(y(e));try{var j=function(){var e=n.value,r=e.geometry,s=e.properties,d=e.id;if((!r||(f||(f=b(r.type)),b(r.type)===f))&&(o||(o=h(m(r))),p||(p=null!=d)&&("number"===(t=typeof d)&&(l=Object.keys(s).filter((function(e){return s[e]===d})))),p&&"number"===t&&null!=d&&(u=Math.max(u,d),l.length>1?l=l.filter((function(e){return s[e]===d})):1===l.length&&(l=s[l[0]]===d?l:[])),!g&&s)){var y=!0;for(var v in s)if(!i.has(v)){var j=s[v];if(null!=j){var O=T(j);"unknown"!==O?(c.delete(v),i.add(v),a.push({name:v,alias:v,type:O})):c.add(v)}else y=!1,c.add(v)}g=y}};for(v.s();!(n=v.n()).done;)j()}catch(F){v.e(F)}finally{v.f()}var O=l&&1===l.length&&l[0]||null;if(O){var w,k=Object(s.a)(a);try{for(k.s();!(w=k.n()).done;){var x=w.value;x.name===O&&(x.type="esriFieldTypeOID")}}catch(F){k.e(F)}finally{k.f()}}return{fields:a,geometryType:f,hasZ:o,maxObjectId:Math.max(0,u),objectIdFieldName:O,objectIdFieldType:t,unknownFields:Array.from(c)}}function M(e,t){return Array.from(g(y(e),t))}},854:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(609),a=n(57),i=(n(27),n(250),n(6));function s(e,t){s=function(e,t){return new u(e,void 0,t)};var n=Object(a.a)(RegExp),c=RegExp.prototype,o=new WeakMap;function u(e,t,r){var a=n.call(this,e,t);return o.set(a,r||o.get(e)),a}function l(e,t){var n=o.get(t);return Object.keys(n).reduce((function(t,r){return t[r]=e[n[r]],t}),Object.create(null))}return Object(i.a)(u,n),u.prototype.exec=function(e){var t=c.exec.call(this,e);return t&&(t.groups=l(t,this)),t},u.prototype[Symbol.replace]=function(e,t){if("string"===typeof t){var n=o.get(this);return c[Symbol.replace].call(this,e,t.replace(/\$<([^>]+)>/g,(function(e,t){return"$"+n[t]})))}if("function"===typeof t){var a=this;return c[Symbol.replace].call(this,e,(function(){var e=[];return e.push.apply(e,arguments),"object"!==Object(r.a)(e[e.length-1])&&e.push(l(e,a)),t.apply(this,e)}))}return c[Symbol.replace].call(this,e,t)},s.apply(this,arguments)}},955:function(e,t,n){"use strict";n.d(t,"a",(function(){return k})),n.d(t,"b",(function(){return F})),n.d(t,"c",(function(){return T})),n.d(t,"d",(function(){return P})),n.d(t,"e",(function(){return G})),n.d(t,"f",(function(){return R})),n.d(t,"g",(function(){return q})),n.d(t,"h",(function(){return D}));var r=n(8),a=n.n(r),i=n(13),s=n(14),c=n(854),o=n(16),u=(n(129),n(101)),l=n(22),p=n(15),d=n(3),f=n(56),b=n(75),y=n(417),m=n(492),g=n(806),h=n(757),v=n(580),j=n(603),O=n(55),w=p.a.getLogger("esri.layers.graphics.sources.ogcfeature");function k(e,t){return x.apply(this,arguments)}function x(){return x=Object(o.a)(a.a.mark((function e(t,n){var r,c,o,p,f,b,y,m,O,k,x,F,I,T,S,P,M,G,N,R,q,C=arguments;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=C.length>2&&void 0!==C[2]?C[2]:{},c=C.length>3&&void 0!==C[3]?C[3]:5,o=t.links,p=B(o,"items","application/geo+json")||B(o,"http://www.opengis.net/def/rel/ogc/1.0/items","application/geo+json"),!Object(d.j)(p)){e.next=5;break}throw new l.a("ogc-feature-layer:missing-items-page","Missing items url");case 5:return e.next=7,Object(u.default)(p.href,{signal:r.signal,query:Object(s.a)(Object(s.a)({limit:c},r.customParameters),{},{token:r.apiKey}),headers:{accept:"application/geo+json"}});case 7:return f=e.sent,b=f.data,e.next=11,Object(g.d)(b);case 11:if(y=Object(g.c)(b,{geometryType:n.geometryType}),m=n.fields||y.fields||[],O=null!=n.hasZ?n.hasZ:y.hasZ,k=y.geometryType,x=n.objectIdField||y.objectIdFieldName||"OBJECTID",F=n.timeInfo,I=m.find((function(e){return e.name===x}))){e.next=20;break}if(y.objectIdFieldType){e.next=17;break}throw new l.a("ogc-feature-layer:missing-feature-id","Collection geojson require a feature id as a unique identifier");case 17:m.unshift({name:x,alias:x,type:"esriFieldTypeOID",editable:!1,nullable:!1}),e.next=21;break;case 20:I.type="esriFieldTypeOID",I.editable=!1,I.nullable=!1;case 21:x!==y.objectIdFieldName&&(T=m.find((function(e){return e.name===y.objectIdFieldName})))&&(T.type="esriFieldTypeInteger"),m===y.fields&&y.unknownFields.length>0&&w.warn({name:"ogc-feature-layer:unknown-field-types",message:"Some fields types couldn't be inferred from the features and were dropped",details:{unknownFields:y.unknownFields}}),S=Object(i.a)(m),e.prev=24,S.s();case 26:if((P=S.n()).done){e.next=34;break}if(null==(M=P.value).name&&(M.name=M.alias),null==M.alias&&(M.alias=M.name),"esriFieldTypeOID"!==M.type&&"esriFieldTypeGlobalID"!==M.type&&(M.editable=null==M.editable||!!M.editable,M.nullable=null==M.nullable||!!M.nullable),M.name){e.next=30;break}throw new l.a("ogc-feature-layer:invalid-field-name","field name is missing",{field:M});case 30:if(-1!==j.a.jsonValues.indexOf(M.type)){e.next=32;break}throw new l.a("ogc-feature-layer:invalid-field-type",'invalid type for field "'.concat(M.name,'"'),{field:M});case 32:e.next=26;break;case 34:e.next=39;break;case 36:e.prev=36,e.t0=e.catch(24),S.e(e.t0);case 39:return e.prev=39,S.f(),e.finish(39);case 42:return F&&(G=new v.a(m),F.startTimeField&&((N=G.get(F.startTimeField))?(F.startTimeField=N.name,N.type="esriFieldTypeDate"):F.startTimeField=null),F.endTimeField&&((R=G.get(F.endTimeField))?(F.endTimeField=R.name,R.type="esriFieldTypeDate"):F.endTimeField=null),F.trackIdField&&((q=G.get(F.trackIdField))?F.trackIdField=q.name:(F.trackIdField=null,w.warn({name:"ogc-feature-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:F}}))),F.startTimeField||F.endTimeField||(w.warn({name:"ogc-feature-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing",details:{timeInfo:F}}),F=null)),e.abrupt("return",{drawingInfo:k?Object(h.d)(k):null,geometryType:k,fields:m,hasZ:!!O,objectIdField:x,timeInfo:F});case 44:case"end":return e.stop()}}),e,null,[[24,36,39,42]])}))),x.apply(this,arguments)}function F(e){return I.apply(this,arguments)}function I(){return I=Object(o.a)(a.a.mark((function e(t){var n,r,i,c,o,p,f,b,y=arguments;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=y.length>1&&void 0!==y[1]?y[1]:{},r=t.links,i=B(r,"data","application/json")||B(r,"http://www.opengis.net/def/rel/ogc/1.0/data","application/json"),!Object(d.j)(i)){e.next=4;break}throw new l.a("ogc-feature-layer:missing-collections-page","Missing collections url");case 4:return c=n.apiKey,o=n.customParameters,p=n.signal,e.next=9,Object(u.default)(i.href,{signal:p,headers:{accept:"application/json"},query:Object(s.a)(Object(s.a)({},o),{},{token:c})});case 9:return f=e.sent,b=f.data,e.abrupt("return",b);case 12:case"end":return e.stop()}}),e)}))),I.apply(this,arguments)}function T(e){return S.apply(this,arguments)}function S(){return S=Object(o.a)(a.a.mark((function e(t){var n,r,i,c,o,p,f,b,y=arguments;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=y.length>1&&void 0!==y[1]?y[1]:{},r=t.links,i=B(r,"conformance","application/json")||B(r,"http://www.opengis.net/def/rel/ogc/1.0/conformance","application/json"),!Object(d.j)(i)){e.next=4;break}throw new l.a("ogc-feature-layer:missing-conformance-page","Missing conformance url");case 4:return c=n.apiKey,o=n.customParameters,p=n.signal,e.next=9,Object(u.default)(i.href,{signal:p,headers:{accept:"application/json"},query:Object(s.a)(Object(s.a)({},o),{},{token:c})});case 9:return f=e.sent,b=f.data,e.abrupt("return",b);case 12:case"end":return e.stop()}}),e)}))),S.apply(this,arguments)}function P(e){return M.apply(this,arguments)}function M(){return M=Object(o.a)(a.a.mark((function e(t){var n,r,i,c,o,l,p=arguments;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=p.length>1&&void 0!==p[1]?p[1]:{},r=n.apiKey,i=n.customParameters,c=n.signal,e.next=6,Object(u.default)(t,{signal:c,headers:{accept:"application/json"},query:Object(s.a)(Object(s.a)({},i),{},{token:r})});case 6:return o=e.sent,l=o.data,e.abrupt("return",l);case 9:case"end":return e.stop()}}),e)}))),M.apply(this,arguments)}function G(e){return N.apply(this,arguments)}function N(){return N=Object(o.a)(a.a.mark((function e(t){var n,r,i,c,o,l,p,f,b=arguments;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=b.length>1&&void 0!==b[1]?b[1]:{},r="application/vnd.oai.openapi+json;version=3.0",i=B(t.links,"service-desc",r),!Object(d.j)(i)){e.next=4;break}return e.abrupt("return",(w.warn("ogc-feature-layer:missing-openapi-page","The OGC API-Features server does not have an OpenAPI page."),null));case 4:return c=n.apiKey,o=n.customParameters,l=n.signal,e.next=9,Object(u.default)(i.href,{signal:l,headers:{accept:r},query:Object(s.a)(Object(s.a)({},o),{},{token:c})});case 9:return p=e.sent,f=p.data,e.abrupt("return",f);case 12:case"end":return e.stop()}}),e)}))),N.apply(this,arguments)}function R(e){var t=Object(c.a)(/^http:\/\/www\.opengis.net\/def\/crs\/(.*)\/(.*)\/(.*)$/i,{authority:1,version:2,code:3}).exec(e),n=null==t?void 0:t.groups;if(!n)return null;var r=n.authority,a=n.code;switch(r.toLowerCase()){case"ogc":switch(a.toLowerCase()){case"crs27":return O.a.GCS_NAD_1927.wkid;case"crs83":return 4269;case"crs84":case"crs84h":return O.a.WGS84.wkid;default:return null}case"esri":case"epsg":var i=Number.parseInt(a,10);return Number.isNaN(i)?null:i;default:return null}}function q(e,t,n){return C.apply(this,arguments)}function C(){return(C=Object(o.a)(a.a.mark((function e(t,n,r){var i;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D(t,n,r);case 2:return i=e.sent,e.abrupt("return",Object(y.g)(i));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function D(e,t,n){return A.apply(this,arguments)}function A(){return A=Object(o.a)(a.a.mark((function e(t,n,r){var c,o,p,h,v,j,w,k,x,F,I,T,S,P,M,G,N,R,q,C,D,A,E,K,U,V,Y,$,Q,_,z,H,X,ee,te,ne,re,ae,ie,se,ce,oe;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c=t.capabilities.query.maxRecordCount,o=t.collection,p=t.layerDefinition,h=t.queryParameters,v=h.apiKey,j=h.customParameters,w=t.spatialReference,k=t.supportedCrs,x=o.links,F=B(x,"items","application/geo+json")||B(x,"http://www.opengis.net/def/rel/ogc/1.0/items","application/geo+json"),!Object(d.j)(F)){e.next=3;break}throw new l.a("ogc-feature-layer:missing-items-page","Missing items url");case 3:if(I=n.geometry,T=n.num,S=n.start,P=n.timeExtent,M=n.where,!n.objectIds){e.next=6;break}throw new l.a("ogc-feature-layer:query-by-objectids-not-supported","Queries with objectids are not supported");case 6:return G=O.a.fromJSON(w),N=Object(d.u)(n.outSpatialReference,G),R=N.isWGS84?null:W(N,k),q=J(I,k),C=L(P),D=Z(M),A=null!=T?T:null!=S&&void 0!==S?10:c,e.next=15,Object(u.default)(F.href,Object(s.a)(Object(s.a)({},r),{},{query:Object(s.a)(Object(s.a)(Object(s.a)({},j),q),{},{crs:R,datetime:C,query:D,limit:A,startindex:S,token:v}),headers:{accept:"application/geo+json"}}));case 15:if(E=e.sent,K=E.data,U=!1,K.links&&(V=K.links.find((function(e){return"next"===e.rel})),U=!!V),!U&&Number.isInteger(K.numberMatched)&&Number.isInteger(K.numberReturned)&&(U=K.numberReturned<K.numberMatched),Y=p.fields,$=p.globalIdField,Q=p.hasM,_=p.hasZ,z=p.objectIdField,H=p.geometryType,X=Object(g.a)(K,{geometryType:H,hasZ:_,objectIdField:z}),!R&&N.isWebMercator){ee=Object(i.a)(X);try{for(ee.s();!(te=ee.n()).done;)ne=te.value,Object(d.k)(ne.geometry)&&((re=Object(y.h)(ne.geometry,H,_,!1)).spatialReference=O.a.WGS84,ne.geometry=Object(y.d)(Object(b.d)(re,N)))}catch(a){ee.e(a)}finally{ee.f()}}ae=Object(i.a)(X);try{for(ae.s();!(ie=ae.n()).done;)(se=ie.value).objectId=se.attributes[z]}catch(a){ae.e(a)}finally{ae.f()}return ce=R||!R&&N.isWebMercator?N.toJSON():f.b,oe=new m.a,e.abrupt("return",(oe.exceededTransferLimit=U,oe.features=X,oe.fields=Y,oe.geometryType=H,oe.globalIdFieldName=$,oe.hasM=Q,oe.hasZ=_,oe.objectIdFieldName=z,oe.spatialReference=ce,oe));case 26:case"end":return e.stop()}}),e)}))),A.apply(this,arguments)}function W(e,t){var n,r,a,i,s,c=e.isWebMercator;return e.wkid?c?null!=(r=null!=(a=null!=(i=null!=(s=t[3857])?s:t[102100])?i:t[102113])?a:t[900913])?r:null:null!=(n=t[e.wkid])?n:null:null}function E(e){if(Object(d.j)(e))return"";var t=e.xmin,n=e.ymin,r=e.xmax,a=e.ymax;return"".concat(t,",").concat(n,",").concat(r,",").concat(a)}function L(e){if(Object(d.j)(e))return null;var t=e.start,n=e.end;return"".concat(Object(d.k)(t)?t.toISOString():"..","/").concat(Object(d.k)(n)?n.toISOString():"..")}function Z(e){return Object(d.j)(e)||!e||"1=1"===e?null:e}function J(e,t){if(!function(e){return Object(d.k)(e)&&"extent"===e.type}(e))return null;var n=e.spatialReference;if(!n||n.isWGS84)return{bbox:E(e)};var r=W(n,t);return r?{bbox:E(e),"bbox-crs":r}:n.isWebMercator?{bbox:E(Object(b.d)(e,O.a.WGS84))}:null}function B(e,t,n){return e.find((function(e){return e.rel===t&&e.type===n}))||e.find((function(e){return e.rel===t&&!e.type}))}}}]);
//# sourceMappingURL=31.0c4b06ba.chunk.js.map