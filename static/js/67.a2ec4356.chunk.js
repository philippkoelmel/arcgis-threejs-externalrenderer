(this.webpackJsonpexample=this.webpackJsonpexample||[]).push([[67],{726:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return j}));var r=n(8),a=n.n(r),i=n(13),s=n(16),u=n(2),o=n(4),c=n(22),h=n(15),l=n(3),d=n(23),f=n(56),v=n(417),m=n(776),p=n(777),y=n(785),_=n(806),g=n(828),b=n(940),x=n(580),j=function(){function e(){var t=this;Object(u.a)(this,e),this._queryEngine=null,this._customParameters=null,this._snapshotFeatures=function(){var e=Object(s.a)(a.a.mark((function e(n){var r,s,u,o,c,h,m,y,x,j,k;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t._queryEngine.objectIdField,e.next=3,Object(b.d)(t._getFeatureUrl,t._featureType.typeName,t._getFeatureOutputFormat,{customParameters:t._customParameters,dateFields:t._queryEngine.fieldsIndex.dateFields.map((function(e){return e.name})),signal:n});case 3:return s=e.sent,e.next=6,Object(_.d)(s);case 6:if(Object(d.x)(n),u=Object(_.a)(s,{geometryType:t._queryEngine.geometryType,hasZ:!1,objectIdField:r}),!Object(f.d)(t._queryEngine.spatialReference,f.b)){o=Object(i.a)(u);try{for(o.s();!(c=o.n()).done;)h=c.value,Object(l.k)(h.geometry)&&(h.geometry=Object(v.d)(Object(p.b)(Object(v.h)(h.geometry,t._queryEngine.geometryType,!1,!1),f.b,t._queryEngine.spatialReference)))}catch(a){o.e(a)}finally{o.f()}}m=1,y=Object(i.a)(u);try{for(y.s();!(x=y.n()).done;)j=x.value,k={},Object(g.d)(t._fieldsIndex,k,j.attributes,null,!0),j.attributes=k,null==j.attributes[r]&&(j.objectId=j.attributes[r]=m++)}catch(a){y.e(a)}finally{y.f()}return e.abrupt("return",u);case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}return Object(o.a)(e,[{key:"destroy",value:function(){var e;null==(e=this._queryEngine)||e.destroy(),this._queryEngine=null}},{key:"load",value:function(){var e=Object(s.a)(a.a.mark((function e(t,n){var r,i,s,u,o,c,h,f,v;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.getFeatureUrl,i=t.getFeatureOutputFormat,s=t.spatialReference,u=t.fields,o=t.geometryType,c=t.featureType,h=t.objectIdField,f=t.customParameters,this._featureType=c,this._customParameters=f,this._getFeatureUrl=r,this._getFeatureOutputFormat=i,this._fieldsIndex=new x.a(u),e.next=8,this._checkProjection(s);case 8:return Object(d.x)(n),this._queryEngine=new y.a({fields:u,geometryType:o,hasM:!1,hasZ:!1,objectIdField:h,spatialReference:s,timeInfo:null,featureStore:new m.a({geometryType:o,hasM:!1,hasZ:!1})}),e.next=12,this._snapshotFeatures(Object(l.t)(n.signal));case 12:return v=e.sent,e.abrupt("return",(this._queryEngine.featureStore.addMany(v),{extent:this._queryEngine.fullExtent}));case 14:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"applyEdits",value:function(){var e=Object(s.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:throw new c.a("wfs-source:editing-not-supported","applyEdits() is not supported on WFSLayer");case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"queryFeatures",value:function(){var e=Object(s.a)(a.a.mark((function e(){var t,n,r=arguments;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:{},n=r.length>1&&void 0!==r[1]?r[1]:{},e.next=4,this._waitSnapshotComplete();case 4:return e.abrupt("return",this._queryEngine.executeQuery(t,n.signal));case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"queryFeatureCount",value:function(){var e=Object(s.a)(a.a.mark((function e(){var t,n,r=arguments;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:{},n=r.length>1&&void 0!==r[1]?r[1]:{},e.next=4,this._waitSnapshotComplete();case 4:return e.abrupt("return",this._queryEngine.executeQueryForCount(t,n.signal));case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"queryObjectIds",value:function(){var e=Object(s.a)(a.a.mark((function e(){var t,n,r=arguments;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:{},n=r.length>1&&void 0!==r[1]?r[1]:{},e.next=4,this._waitSnapshotComplete();case 4:return e.abrupt("return",this._queryEngine.executeQueryForIds(t,n.signal));case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"queryExtent",value:function(){var e=Object(s.a)(a.a.mark((function e(){var t,n,r=arguments;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:{},n=r.length>1&&void 0!==r[1]?r[1]:{},e.next=4,this._waitSnapshotComplete();case 4:return e.abrupt("return",this._queryEngine.executeQueryForExtent(t,n.signal));case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"querySnapping",value:function(){var e=Object(s.a)(a.a.mark((function e(t){var n,r=arguments;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.length>1&&void 0!==r[1]?r[1]:{},e.next=3,this._waitSnapshotComplete();case 3:return e.abrupt("return",this._queryEngine.executeQueryForSnapping(t,n.signal));case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"setCustomParameters",value:function(e){this._customParameters=e}},{key:"refresh",value:function(){var e=Object(s.a)(a.a.mark((function e(){var t,n=this;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return null==(t=this._snapshotTask)||t.abort(),this._snapshotTask=Object(d.i)(this._snapshotFeatures),this._snapshotTask.promise.then((function(e){n._queryEngine.featureStore.clear(),e&&n._queryEngine.featureStore.addMany(e)}),(function(e){n._queryEngine.featureStore.clear(),Object(d.n)(e)||h.a.getLogger("esri.layers.WFSLayer").error(new c.a("wfs-layer:getfeature-error","An error occurred during the GetFeature request",{error:e}))})),e.next=5,this._waitSnapshotComplete();case 5:return e.abrupt("return",{extent:this._queryEngine.fullExtent});case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"_waitSnapshotComplete",value:function(){var e=Object(s.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this._snapshotTask||this._snapshotTask.finished){e.next=9;break}return e.prev=1,e.next=4,this._snapshotTask.promise;case 4:e.next=8;break;case 6:e.prev=6,e.t0=e.catch(1);case 8:return e.abrupt("return",this._waitSnapshotComplete());case 9:case"end":return e.stop()}}),e,this,[[1,6]])})));return function(){return e.apply(this,arguments)}}()},{key:"_checkProjection",value:function(){var e=Object(s.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(p.a)(f.b,t);case 3:e.next=8;break;case 5:throw e.prev=5,e.t0=e.catch(0),new c.a("unsupported-projection","Projection not supported",{spatialReference:t});case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t){return e.apply(this,arguments)}}()}]),e}()},756:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var r=n(6),a=n(7),i=n(13),s=n(2),u=n(4),o=n(108),c=n(3),h=n(71),l=n(764),d=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:9,n=arguments.length>1?arguments[1]:void 0;Object(s.a)(this,e),this.compareMinX=p,this.compareMinY=y,this.toBBox=function(e){return e},this._maxEntries=Math.max(4,t||9),this._minEntries=Math.max(2,Math.ceil(.4*this._maxEntries)),n&&("function"==typeof n?this.toBBox=n:this._initFormat(n)),this.clear()}return Object(u.a)(e,[{key:"destroy",value:function(){this.clear(),B.prune(),I.prune(),w.prune(),M.prune()}},{key:"all",value:function(e){this._all(this.data,e)}},{key:"search",value:function(e,t){var n=this.data,r=this.toBBox;if(k(e,n))for(B.clear();n;){for(var a=0,i=n.children.length;a<i;a++){var s=n.children[a],u=n.leaf?r(s):s;k(e,u)&&(n.leaf?t(s):j(e,u)?this._all(s,t):B.push(s))}n=B.pop()}}},{key:"collides",value:function(e){var t=this.data,n=this.toBBox;if(!k(e,t))return!1;for(B.clear();t;){for(var r=0,a=t.children.length;r<a;r++){var i=t.children[r],s=t.leaf?n(i):i;if(k(e,s)){if(t.leaf||j(e,s))return!0;B.push(i)}}t=B.pop()}return!1}},{key:"load",value:function(e){if(!e.length)return this;if(e.length<this._minEntries){for(var t=0,n=e.length;t<n;t++)this.insert(e[t]);return this}var r=this._build(e.slice(0,e.length),0,e.length-1,0);if(this.data.children.length)if(this.data.height===r.height)this._splitRoot(this.data,r);else{if(this.data.height<r.height){var a=this.data;this.data=r,r=a}this._insert(r,this.data.height-r.height-1,!0)}else this.data=r;return this}},{key:"insert",value:function(e){return e&&this._insert(e,this.data.height-1),this}},{key:"clear",value:function(){return this.data=new X([]),this}},{key:"remove",value:function(e){if(!e)return this;var t,n=this.data,r=null,a=0,i=!1,s=this.toBBox(e);for(w.clear(),M.clear();n||w.length>0;){var u;if(n||(n=Object(c.d)(w.pop()),r=w.data[w.length-1],a=null!=(u=M.pop())?u:0,i=!0),n.leaf&&-1!==(t=Object(o.g)(n.children,e,n.children.length,n.indexHint)))return n.children.splice(t,1),w.push(n),this._condense(w),this;i||n.leaf||!j(n,s)?r?(a++,n=r.children[a],i=!1):n=null:(w.push(n),M.push(a),a=0,r=n,n=n.children[0])}return this}},{key:"toJSON",value:function(){return this.data}},{key:"fromJSON",value:function(e){return this.data=e,this}},{key:"_all",value:function(e,t){var n=e;for(I.clear();n;){var r;if(!0===n.leaf){var a,s=Object(i.a)(n.children);try{for(s.s();!(a=s.n()).done;){t(a.value)}}catch(u){s.e(u)}finally{s.f()}}else I.pushArray(n.children);n=null!=(r=I.pop())?r:null}}},{key:"_build",value:function(e,t,n,r){var a=n-t+1,i=this._maxEntries;if(a<=i){var s=new X(e.slice(t,n+1));return f(s,this.toBBox),s}r||(r=Math.ceil(Math.log(a)/Math.log(i)),i=Math.ceil(a/Math.pow(i,r-1)));var u=new Y([]);u.height=r;var o=Math.ceil(a/i),c=o*Math.ceil(Math.sqrt(i));O(e,t,n,c,this.compareMinX);for(var h=t;h<=n;h+=c){var l=Math.min(h+c-1,n);O(e,h,l,o,this.compareMinY);for(var d=h;d<=l;d+=o){var v=Math.min(d+o-1,l);u.children.push(this._build(e,d,v,r-1))}}return f(u,this.toBBox),u}},{key:"_chooseSubtree",value:function(e,t,n,r){for(;r.push(t),!0!==t.leaf&&r.length-1!==n;){for(var a=void 0,i=1/0,s=1/0,u=0,o=t.children.length;u<o;u++){var c=t.children[u],h=_(c),l=b(e,c)-h;l<s?(s=l,i=h<i?h:i,a=c):l===s&&h<i&&(i=h,a=c)}t=a||t.children[0]}return t}},{key:"_insert",value:function(e,t,n){var r=this.toBBox,a=n?e:r(e);w.clear();var i=this._chooseSubtree(a,this.data,t,w);for(i.children.push(e),m(i,a);t>=0&&w.data[t].children.length>this._maxEntries;)this._split(w,t),t--;this._adjustParentBBoxes(a,w,t)}},{key:"_split",value:function(e,t){var n=e.data[t],r=n.children.length,a=this._minEntries;this._chooseSplitAxis(n,a,r);var i=this._chooseSplitIndex(n,a,r);if(i){var s=n.children.splice(i,n.children.length-i),u=n.leaf?new X(s):new Y(s);u.height=n.height,f(n,this.toBBox),f(u,this.toBBox),t?e.data[t-1].children.push(u):this._splitRoot(n,u)}else console.log("  Error: assertion failed at PooledRBush._split: no valid split index")}},{key:"_splitRoot",value:function(e,t){this.data=new Y([e,t]),this.data.height=e.height+1,f(this.data,this.toBBox)}},{key:"_chooseSplitIndex",value:function(e,t,n){var r,a,i;r=a=1/0;for(var s=t;s<=n-t;s++){var u=v(e,0,s,this.toBBox),o=v(e,s,n,this.toBBox),c=x(u,o),h=_(u)+_(o);c<r?(r=c,i=s,a=h<a?h:a):c===r&&h<a&&(a=h,i=s)}return i}},{key:"_chooseSplitAxis",value:function(e,t,n){var r=e.leaf?this.compareMinX:p,a=e.leaf?this.compareMinY:y;this._allDistMargin(e,t,n,r)<this._allDistMargin(e,t,n,a)&&e.children.sort(r)}},{key:"_allDistMargin",value:function(e,t,n,r){e.children.sort(r);for(var a=this.toBBox,i=v(e,0,t,a),s=v(e,n-t,n,a),u=g(i)+g(s),o=t;o<n-t;o++){var c=e.children[o];m(i,e.leaf?a(c):c),u+=g(i)}for(var h=n-t-1;h>=t;h--){var l=e.children[h];m(s,e.leaf?a(l):l),u+=g(s)}return u}},{key:"_adjustParentBBoxes",value:function(e,t,n){for(var r=n;r>=0;r--)m(t.data[r],e)}},{key:"_condense",value:function(e){for(var t=e.length-1;t>=0;t--){var n=e.data[t];if(0===n.children.length)if(t>0){var r=e.data[t-1],a=r.children;a.splice(Object(o.g)(a,n,a.length,r.indexHint),1)}else this.clear();else f(n,this.toBBox)}}},{key:"_initFormat",value:function(e){var t=["return a"," - b",";"];this.compareMinX=new Function("a","b",t.join(e[0])),this.compareMinY=new Function("a","b",t.join(e[1])),this.toBBox=new Function("a","return {minX: a"+e[0]+", minY: a"+e[1]+", maxX: a"+e[2]+", maxY: a"+e[3]+"};")}}]),e}();function f(e,t){v(e,0,e.children.length,t,e)}function v(e,t,n,r,a){a||(a=new X([])),a.minX=1/0,a.minY=1/0,a.maxX=-1/0,a.maxY=-1/0;for(var i,s=t;s<n;s++)i=e.children[s],m(a,e.leaf?r(i):i);return a}function m(e,t){e.minX=Math.min(e.minX,t.minX),e.minY=Math.min(e.minY,t.minY),e.maxX=Math.max(e.maxX,t.maxX),e.maxY=Math.max(e.maxY,t.maxY)}function p(e,t){return e.minX-t.minX}function y(e,t){return e.minY-t.minY}function _(e){return(e.maxX-e.minX)*(e.maxY-e.minY)}function g(e){return e.maxX-e.minX+(e.maxY-e.minY)}function b(e,t){return(Math.max(t.maxX,e.maxX)-Math.min(t.minX,e.minX))*(Math.max(t.maxY,e.maxY)-Math.min(t.minY,e.minY))}function x(e,t){var n=Math.max(e.minX,t.minX),r=Math.max(e.minY,t.minY),a=Math.min(e.maxX,t.maxX),i=Math.min(e.maxY,t.maxY);return Math.max(0,a-n)*Math.max(0,i-r)}function j(e,t){return e.minX<=t.minX&&e.minY<=t.minY&&t.maxX<=e.maxX&&t.maxY<=e.maxY}function k(e,t){return t.minX<=e.maxX&&t.minY<=e.maxY&&t.maxX>=e.minX&&t.maxY>=e.minY}function O(e,t,n,r,a){for(var i=[t,n];i.length;){var s=Object(c.d)(i.pop()),u=Object(c.d)(i.pop());if(!(s-u<=r)){var o=u+Math.ceil((s-u)/r/2)*r;Object(l.a)(e,o,u,s,a),i.push(u,o,o,s)}}}var B=new h.a,I=new h.a,w=new h.a,M=new h.a({deallocator:void 0}),E=function(e){Object(r.a)(n,e);var t=Object(a.a)(n);function n(){var e;return Object(s.a)(this,n),(e=t.apply(this,arguments)).height=1,e.indexHint=new o.a,e}return n}((function e(){Object(s.a)(this,e),this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0})),X=function(e){Object(r.a)(n,e);var t=Object(a.a)(n);function n(e){var r;return Object(s.a)(this,n),(r=t.call(this)).children=e,r.leaf=!0,r}return n}(E),Y=function(e){Object(r.a)(n,e);var t=Object(a.a)(n);function n(e){var r;return Object(s.a)(this,n),(r=t.call(this)).children=e,r.leaf=!1,r}return n}(E)},763:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(754),a=n(281),i=n(223),s={getObjectId:function(e){return e.objectId},getAttributes:function(e){return e.attributes},getAttribute:function(e,t){return e.attributes[t]},cloneWithGeometry:function(e,t){return new a.b(t,e.attributes,null,e.objectId)},getGeometry:function(e){return e.geometry},getCentroid:function(e,t){return e.centroid||(e.centroid=Object(r.a)(new i.a,e.geometry,t.hasZ,t.hasM)),e.centroid}}},771:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(2),a=n(4),i=n(17),s=n(756),u={minX:0,minY:0,maxX:0,maxY:0};var o=function(){function e(){var t=this;Object(r.a)(this,e),this._indexInvalid=!1,this._boundsToLoad=[],this._boundsById=new Map,this._idByBounds=new Map,this._index=new s.a(9,Object(i.a)("csp-restrictions")?function(e){return{minX:e[0],minY:e[1],maxX:e[2],maxY:e[3]}}:["[0]","[1]","[2]","[3]"]),this._loadIndex=function(){if(t._indexInvalid){var e=new Array(t._idByBounds.size),n=0;t._idByBounds.forEach((function(t,r){e[n++]=r})),t._indexInvalid=!1,t._index.clear(),t._index.load(e)}else t._boundsToLoad.length&&(t._index.load(t._boundsToLoad.filter((function(e){return t._idByBounds.has(e)}))),t._boundsToLoad.length=0)}}return Object(a.a)(e,[{key:"clear",value:function(){this._indexInvalid=!1,this._boundsToLoad.length=0,this._boundsById.clear(),this._idByBounds.clear(),this._index.clear()}},{key:"delete",value:function(e){var t=this._boundsById.get(e);this._boundsById.delete(e),t&&(this._idByBounds.delete(t),this._indexInvalid||this._index.remove(t))}},{key:"forEachInBounds",value:function(e,t){var n=this;this._loadIndex(),function(e,t,n){u.minX=t[0],u.minY=t[1],u.maxX=t[2],u.maxY=t[3],e.search(u,n)}(this._index,e,(function(e){return t(n._idByBounds.get(e))}))}},{key:"get",value:function(e){return this._boundsById.get(e)}},{key:"has",value:function(e){return this._boundsById.has(e)}},{key:"invalidateIndex",value:function(){this._indexInvalid||(this._indexInvalid=!0,this._boundsToLoad.length=0)}},{key:"set",value:function(e,t){if(!this._indexInvalid){var n=this._boundsById.get(e);n&&(this._index.remove(n),this._idByBounds.delete(n))}this._boundsById.set(e,t),t&&(this._idByBounds.set(t,e),this._indexInvalid||(this._boundsToLoad.push(t),this._boundsToLoad.length>5e4&&this._loadIndex()))}}]),e}()},776:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var r=n(13),a=n(2),i=n(4),s=n(22),u=n(90),o=n(15),c=n(3),h=n(37),l=n(42),d=n(417),f=n(771),v=n(763),m=function(){function e(t){Object(a.a)(this,e),this.geometryInfo=t,this._boundsStore=new f.a,this._featuresById=new Map,this._markedIds=new Set,this.events=new u.a,this.featureAdapter=v.a}return Object(i.a)(e,[{key:"geometryType",get:function(){return this.geometryInfo.geometryType}},{key:"hasM",get:function(){return this.geometryInfo.hasM}},{key:"hasZ",get:function(){return this.geometryInfo.hasZ}},{key:"numFeatures",get:function(){return this._featuresById.size}},{key:"fullBounds",get:function(){var e=this;if(!this.numFeatures)return null;var t=Object(l.l)(l.a);return this._featuresById.forEach((function(n){var r=e._boundsStore.get(n.objectId);r&&(t[0]=Math.min(r[0],t[0]),t[1]=Math.min(r[1],t[1]),t[2]=Math.max(r[2],t[2]),t[3]=Math.max(r[3],t[3]))})),t}},{key:"storeStatistics",get:function(){var e=0;return this._featuresById.forEach((function(t){Object(c.k)(t.geometry)&&t.geometry.coords&&(e+=t.geometry.coords.length)})),{featureCount:this._featuresById.size,vertexCount:e/(this.hasZ?this.hasM?4:3:this.hasM?3:2)}}},{key:"add",value:function(e){this._add(e),this._emitChanged()}},{key:"addMany",value:function(e){var t,n=Object(r.a)(e);try{for(n.s();!(t=n.n()).done;){var a=t.value;this._add(a)}}catch(i){n.e(i)}finally{n.f()}this._emitChanged()}},{key:"clear",value:function(){this._featuresById.clear(),this._boundsStore.clear(),this._emitChanged()}},{key:"removeById",value:function(e){var t=this._featuresById.get(e);return t?(this._remove(t),this._emitChanged(),t):null}},{key:"removeManyById",value:function(e){this._boundsStore.invalidateIndex();var t,n=Object(r.a)(e);try{for(n.s();!(t=n.n()).done;){var a=t.value,i=this._featuresById.get(a);i&&this._remove(i)}}catch(s){n.e(s)}finally{n.f()}this._emitChanged()}},{key:"forEachBounds",value:function(e,t,n){var a,i=Object(r.a)(e);try{for(i.s();!(a=i.n()).done;){var s=a.value,u=this._boundsStore.get(s.objectId);u&&t(Object(h.s)(n,u))}}catch(o){i.e(o)}finally{i.f()}}},{key:"getFeature",value:function(e){return this._featuresById.get(e)}},{key:"has",value:function(e){return this._featuresById.has(e)}},{key:"forEach",value:function(e){this._featuresById.forEach((function(t){return e(t)}))}},{key:"forEachInBounds",value:function(e,t){var n=this;this._boundsStore.forEachInBounds(e,(function(e){t(n._featuresById.get(e))}))}},{key:"startMarkingUsedFeatures",value:function(){this._boundsStore.invalidateIndex(),this._markedIds.clear()}},{key:"sweep",value:function(){var e=this,t=!1;this._featuresById.forEach((function(n,r){e._markedIds.has(r)||(t=!0,e._remove(n))})),this._markedIds.clear(),t&&this._emitChanged()}},{key:"_emitChanged",value:function(){this.events.emit("changed",void 0)}},{key:"_add",value:function(e){if(e){var t=e.objectId;if(null!=t){var n,r=this._featuresById.get(t);if(this._markedIds.add(t),r?(e.displayId=r.displayId,n=this._boundsStore.get(t),this._boundsStore.delete(t)):Object(c.k)(this.onFeatureAdd)&&this.onFeatureAdd(e),Object(c.j)(e.geometry)||!e.geometry.coords||!e.geometry.coords.length)return this._boundsStore.set(t,null),void this._featuresById.set(t,e);n=Object(d.o)(Object(c.k)(n)?n:Object(l.l)(),e.geometry,this.geometryInfo.hasZ,this.geometryInfo.hasM),Object(c.k)(n)&&this._boundsStore.set(t,n),this._featuresById.set(t,e)}else o.a.getLogger("esri.layers.graphics.data.FeatureStore").error(new s.a("featurestore:invalid-feature","feature id is missing",{feature:e}))}}},{key:"_remove",value:function(e){return Object(c.k)(this.onFeatureRemove)&&this.onFeatureRemove(e),this._markedIds.delete(e.objectId),this._boundsStore.delete(e.objectId),this._featuresById.delete(e.objectId),e}}]),e}()},828:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return v})),n.d(t,"c",(function(){return j})),n.d(t,"d",(function(){return y})),n.d(t,"e",(function(){return g}));var r=n(8),a=n.n(r),i=n(16),s=n(13),u=n(2),o=n(56),c=n(105),h=function e(){Object(u.a)(this,e),this.code=null,this.description=null},l=function e(t){Object(u.a)(this,e),this.error=new h,this.globalId=null,this.objectId=null,this.success=!1,this.uniqueId=null,this.error.description=t};function d(e){return new l(e)}var f=function e(t){Object(u.a)(this,e),this.globalId=null,this.success=!0,this.objectId=this.uniqueId=t};function v(e){return new f(e)}var m,p=new Set;function y(e,t,n,r){var a=arguments.length>4&&void 0!==arguments[4]&&arguments[4],i=arguments.length>5?arguments[5]:void 0;for(var u in p.clear(),n){var o=e.get(u);if(o){var h=n[u],l=_(o,h);if(l!==h&&i&&i.push({name:"invalid-value-type",message:"attribute value was converted to match the field type",details:{field:o,originalValue:h,sanitizedValue:l}}),p.add(o.name),o&&(a||o.editable)){var f=Object(c.v)(o,l);if(f)return d(Object(c.w)(f,o,l));t[o.name]=l}}}if(r){var v,m=Object(s.a)(r);try{for(m.s();!(v=m.n()).done;){var y=v.value;if(!p.has(y.name))return d('missing required field "'.concat(y.name,'"'))}}catch(g){m.e(g)}finally{m.f()}}return null}function _(e,t){var n=t;return"string"==typeof t&&Object(c.p)(e)?n=parseFloat(t):null!=t&&Object(c.q)(e)&&"string"!=typeof t&&(n=String(t)),Object(c.t)(n)}function g(e,t){if(!e||!Object(o.l)(t))return e;if("rings"in e||"paths"in e){if(!m)throw new TypeError("geometry engine not loaded");return m.simplify(t,e)}return e}function b(){return x.apply(this,arguments)}function x(){return(x=Object(i.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=m,e.t0){e.next=6;break}return e.next=4,Promise.all([n.e(3),n.e(18)]).then(n.bind(null,870));case 4:m=e.sent,e.t0=m;case 6:return e.abrupt("return",e.t0);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function j(e,t){return k.apply(this,arguments)}function k(){return(k=Object(i.a)(a.a.mark((function e(t,n){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=!Object(o.l)(t)||"esriGeometryPolygon"!==n&&"esriGeometryPolyline"!==n,e.t0){e.next=4;break}return e.next=4,b();case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=67.a2ec4356.chunk.js.map