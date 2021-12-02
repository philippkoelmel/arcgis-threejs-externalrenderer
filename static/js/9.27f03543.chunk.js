(this.webpackJsonpexample=this.webpackJsonpexample||[]).push([[9],{776:function(e,t,r){"use strict";r.r(t),r.d(t,"getFirstLayerOrTableId",(function(){return L})),r.d(t,"getNumLayersAndTables",(function(){return g})),r.d(t,"load",(function(){return f})),r.d(t,"preprocessFSItemData",(function(){return j}));var n=r(8),a=r.n(n),u=r(15),c=r(24),s=r(862),i=r(167),o=r(937),l=r(653),p=r(938);function f(e,t){return d.apply(this,arguments)}function d(){return(d=Object(u.a)(a.a.mark((function e(t,r){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(n=t.instance.portalItem)||!n.id){e.next=8;break}return e.next=4,n.load(r);case 4:b(t),e.t0=h(t,r),e.next=9;break;case 8:e.t0=Promise.resolve();case 9:return e.abrupt("return",e.t0);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function b(e){var t=e.instance.portalItem;if(-1===e.supportedTypes.indexOf(t.type))throw new c.a("portal:invalid-layer-item-type","Invalid layer item type '${type}', expected '${expectedType}'",{type:t.type,expectedType:e.supportedTypes.join(", ")})}function h(e,t){return v.apply(this,arguments)}function v(){return v=Object(u.a)(a.a.mark((function e(t,r){var n,u,c,s,i,p;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.instance,u=n.portalItem,c=u.url,s=u.title,i=Object(o.a)(u),"group"!==n.type){e.next=3;break}return e.abrupt("return",(n.read({title:s},i),y(n,t)));case 3:return c&&n.read({url:c},i),e.next=6,k(t,r);case 6:return p=e.sent,e.abrupt("return",(p&&n.read(p,i),n.resourceReferences={portalItem:u,paths:i.readResourcePaths},n.read({title:s},i),Object(l.a)(n,i)));case 8:case"end":return e.stop()}}),e)}))),v.apply(this,arguments)}function y(e,t){var r,n,i=e.portalItem.type;switch(i){case"Feature Service":case"Feature Collection":r=s.a.FeatureLayer;break;case"Stream Service":r=s.a.StreamLayer;break;case"Scene Service":r=s.a.SceneLayer;break;default:throw new c.a("portal:unsupported-item-type-as-group","The item type '".concat(i,"' is not supported as a 'IGroupLayer'"))}return r().then((function(e){return n=e,k(t)})).then(function(){var t=Object(u.a)(a.a.mark((function t(r){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("Feature Service"!==i){t.next=7;break}return t.next=3,j(r,e.portalItem.url);case 3:r=t.sent,t.t0=w(e,n,r),t.next=8;break;case 7:t.t0=g(r)>0?w(e,n,r):m(e,n);case 8:return t.abrupt("return",t.t0);case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}function m(e,t){return e.portalItem.url?Object(p.a)(e.portalItem.url).then((function(r){var n,a;function u(e){return{id:e.id,name:e.name}}r&&w(e,t,{layers:null==(n=r.layers)?void 0:n.map(u),tables:null==(a=r.tables)?void 0:a.map(u)})})):Promise.resolve()}function w(e,t,r){var n=r.layers||[],a=r.tables||[];"Feature Collection"===e.portalItem.type&&(n.forEach((function(e){var t;"Table"===(null==e||null==(t=e.layerDefinition)?void 0:t.type)&&a.push(e)})),n=n.filter((function(e){var t;return"Table"!==(null==e||null==(t=e.layerDefinition)?void 0:t.type)}))),n.reverse().forEach((function(n){var a=x(e,t,r,n);e.add(a)})),a.reverse().forEach((function(n){var a=x(e,t,r,n);e.tables.add(a)}))}function x(e,t,r,n){var a=new t({portalItem:e.portalItem.clone(),layerId:n.id,sublayerTitleMode:"service-name"});if("Feature Collection"===e.portalItem.type){var u={origin:"portal-item",portal:e.portalItem.portal||i.a.getDefault()};a.read(n,u);var c=r.showLegend;null!=c&&a.read({showLegend:c},u)}return a}function k(e,t){if(!1===e.supportsData)return Promise.resolve(void 0);var r=e.instance;return r.portalItem.fetchData("json",t).catch((function(){return null})).then(function(){var e=Object(u.a)(a.a.mark((function e(t){var n,u;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!S(r)){e.next=3;break}return u=!0,e.abrupt("return",(t&&g(t)>0&&(null==r.layerId&&(r.layerId=L(t)),(n=I(t,r.layerId))&&(1===g(t)&&(u=!1),null!=t.showLegend&&(n.showLegend=t.showLegend))),u&&"service-name"!==r.sublayerTitleMode&&(r.sublayerTitleMode="item-title-and-service-name"),n));case 3:return e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}function j(e,t){return O.apply(this,arguments)}function O(){return(O=Object(u.a)(a.a.mark((function e(t,r){var n,u,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!=(null==(n=t)?void 0:n.layers)&&null!=(null==(u=t)?void 0:u.tables)){e.next=5;break}return e.next=3,Object(p.a)(r);case 3:c=e.sent,(t=t||{}).layers=t.layers||(null==c?void 0:c.layers),t.tables=t.tables||(null==c?void 0:c.tables);case 5:return e.abrupt("return",t);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function L(e){var t=e.layers;if(t&&t.length)return t[0].id;var r=e.tables;return r&&r.length?r[0].id:null}function I(e,t){var r=e.layers;if(r)for(var n=0;n<r.length;n++)if(r[n].id===t)return r[n];var a=e.tables;if(a)for(var u=0;u<a.length;u++)if(a[u].id===t)return a[u];return null}function g(e){var t,r,n,a;return(null!=(t=null==e||null==(r=e.layers)?void 0:r.length)?t:0)+(null!=(n=null==e||null==(a=e.tables)?void 0:a.length)?n:0)}function S(e){return"stream"!==e.type&&"layerId"in e}},862:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var n=r(8),a=r.n(n),u=r(15),c={BingMapsLayer:function(){var e=Object(u.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.e(165).then(r.bind(null,1063));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),BuildingSceneLayer:function(){var e=Object(u.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([r.e(8),r.e(32),r.e(81)]).then(r.bind(null,1052));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),CSVLayer:function(){var e=Object(u.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.e(82).then(r.bind(null,1064));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ElevationLayer:function(){var e=Object(u.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.e(31).then(r.bind(null,1010));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),FeatureLayer:function(){var e=Object(u.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.resolve().then(r.bind(null,635));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),GroupLayer:function(){var e=Object(u.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.e(40).then(r.bind(null,985));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),GeoRSSLayer:function(){var e=Object(u.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.e(166).then(r.bind(null,1034));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ImageryLayer:function(){var e=Object(u.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([r.e(11),r.e(13),r.e(23),r.e(167)]).then(r.bind(null,1051));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ImageryTileLayer:function(){var e=Object(u.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([r.e(11),r.e(13),r.e(23),r.e(75)]).then(r.bind(null,1049));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),IntegratedMeshLayer:function(){var e=Object(u.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([r.e(8),r.e(74)]).then(r.bind(null,1065));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),KMLLayer:function(){var e=Object(u.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.e(168).then(r.bind(null,1059));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),MapImageLayer:function(){var e=Object(u.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([r.e(17),r.e(83)]).then(r.bind(null,987));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),MapNotesLayer:function(){var e=Object(u.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.e(99).then(r.bind(null,1066));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),OGCFeatureLayer:function(){var e=Object(u.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([r.e(29),r.e(100)]).then(r.bind(null,1067));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),OpenStreetMapLayer:function(){var e=Object(u.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.e(84).then(r.bind(null,1037));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),PointCloudLayer:function(){var e=Object(u.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([r.e(8),r.e(70)]).then(r.bind(null,1053));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),RouteLayer:function(){var e=Object(u.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.e(169).then(r.bind(null,1038));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),SceneLayer:function(){var e=Object(u.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([r.e(8),r.e(76)]).then(r.bind(null,1068));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),StreamLayer:function(){var e=Object(u.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.e(170).then(r.bind(null,1069));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),TileLayer:function(){var e=Object(u.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([r.e(17),r.e(71)]).then(r.bind(null,1039));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),UnknownLayer:function(){var e=Object(u.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.e(171).then(r.bind(null,1040));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),UnsupportedLayer:function(){var e=Object(u.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.e(172).then(r.bind(null,1041));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),VectorTileLayer:function(){var e=Object(u.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([r.e(16),r.e(59)]).then(r.bind(null,1054));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),VoxelLayer:function(){var e=Object(u.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.e(173).then(r.bind(null,1048));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),WebTileLayer:function(){var e=Object(u.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.e(102).then(r.bind(null,877));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),WFSLayer:function(){var e=Object(u.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([r.e(30),r.e(85)]).then(r.bind(null,1070));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),WMSLayer:function(){var e=Object(u.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.e(101).then(r.bind(null,1060));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),WMTSLayer:function(){var e=Object(u.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.e(77).then(r.bind(null,1055));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}},937:function(e,t,r){"use strict";r.d(t,"a",(function(){return u}));var n=r(44),a=r(167);function u(e){return{origin:"portal-item",url:Object(n.K)(e.itemUrl),portal:e.portal||a.a.getDefault(),portalItem:e,readResourcePaths:[]}}},938:function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));var n=r(8),a=r.n(n),u=r(15),c=r(107);function s(e){return i.apply(this,arguments)}function i(){return i=Object(u.a)(a.a.mark((function e(t){var r,n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(c.default)(t,{responseType:"json",query:{f:"json"}});case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)}))),i.apply(this,arguments)}}}]);
//# sourceMappingURL=9.27f03543.chunk.js.map