(this.webpackJsonpexample=this.webpackJsonpexample||[]).push([[27],{754:function(e,t,i){"use strict";i.d(t,"a",(function(){return s}));var n=i(13),r=i(3);function a(e,t){return e?t?4:3:t?3:2}function s(e,t,i,s,h){if(Object(r.j)(t)||!t.lengths.length)return null;var u="upperLeft"===(null==h?void 0:h.originPosition)?-1:1;e.lengths.length&&(e.lengths.length=0),e.coords.length&&(e.coords.length=0);var l,d=e.coords,p=[],v=i?[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY]:[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY],f=t.lengths,y=t.coords,b=a(i,s),g=0,j=Object(n.a)(f);try{for(j.s();!(l=j.n()).done;){var m=l.value,O=c(v,y,g,m,i,s,u);O&&p.push(O),g+=m*b}}catch(I){j.e(I)}finally{j.f()}if(p.sort((function(e,t){var n=u*e[2]-u*t[2];return 0===n&&i&&(n=e[4]-t[4]),n})),p.length){var S=6*p[0][2];d[0]=p[0][0]/S,d[1]=p[0][1]/S,i&&(S=6*p[0][4],d[2]=0!==S?p[0][3]/S:0),(d[0]<v[0]||d[0]>v[1]||d[1]<v[2]||d[1]>v[3]||i&&(d[2]<v[4]||d[2]>v[5]))&&(d.length=0)}if(!d.length){var k=t.lengths[0]?o(y,0,f[0],i,s):null;if(!k)return null;d[0]=k[0],d[1]=k[1],i&&k.length>2&&(d[2]=k[2])}return e}function c(e,t,i,n,r,s){for(var c=arguments.length>6&&void 0!==arguments[6]?arguments[6]:1,o=a(r,s),h=i,u=i+o,l=0,d=0,p=0,v=0,f=0,y=0,b=n-1;y<b;y++,h+=o,u+=o){var g=t[h],j=t[h+1],m=t[h+2],O=t[u],S=t[u+1],k=t[u+2],I=g*S-O*j;v+=I,l+=(g+O)*I,d+=(j+S)*I,r&&(p+=(m+k)*(I=g*k-O*m),f+=I),g<e[0]&&(e[0]=g),g>e[1]&&(e[1]=g),j<e[2]&&(e[2]=j),j>e[3]&&(e[3]=j),r&&(m<e[4]&&(e[4]=m),m>e[5]&&(e[5]=m))}if(v*c>0&&(v*=-1),f*c>0&&(f*=-1),!v)return null;var E=[l,d,.5*v];return r&&(E[3]=p,E[4]=.5*f),E}function o(e,t,i,n,r){for(var s=a(n,r),c=t,o=t+s,p=0,v=0,f=0,y=0,b=0,g=i-1;b<g;b++,c+=s,o+=s){var j=e[c],m=e[c+1],O=e[c+2],S=e[o],k=e[o+1],I=e[o+2],E=n?u(j,m,O,S,k,I):h(j,m,S,k);if(E)if(p+=E,n){var x=d(j,m,O,S,k,I);v+=E*x[0],f+=E*x[1],y+=E*x[2]}else{var w=l(j,m,S,k);v+=E*w[0],f+=E*w[1]}}return p>0?n?[v/p,f/p,y/p]:[v/p,f/p]:i>0?n?[e[t],e[t+1],e[t+2]]:[e[t],e[t+1]]:null}function h(e,t,i,n){var r=i-e,a=n-t;return Math.sqrt(r*r+a*a)}function u(e,t,i,n,r,a){var s=n-e,c=r-t,o=a-i;return Math.sqrt(s*s+c*c+o*o)}function l(e,t,i,n){return[e+.5*(i-e),t+.5*(n-t)]}function d(e,t,i,n,r,a){return[e+.5*(n-e),t+.5*(r-t),i+.5*(a-i)]}},764:function(e,t,i){"use strict";i.d(t,"a",(function(){return c}));var n,r,a,s={exports:{}};n=s,r=function(){function e(i,n,r,a,s){for(;a>r;){if(a-r>600){var c=a-r+1,o=n-r+1,h=Math.log(c),u=.5*Math.exp(2*h/3),l=.5*Math.sqrt(h*u*(c-u)/c)*(o-c/2<0?-1:1);e(i,n,Math.max(r,Math.floor(n-o*u/c+l)),Math.min(a,Math.floor(n+(c-o)*u/c+l)),s)}var d=i[n],p=r,v=a;for(t(i,r,n),s(i[a],d)>0&&t(i,r,a);p<v;){for(t(i,p,v),p++,v--;s(i[p],d)<0;)p++;for(;s(i[v],d)>0;)v--}0===s(i[r],d)?t(i,r,v):t(i,++v,a),v<=n&&(r=v+1),n<=v&&(a=v-1)}}function t(e,t,i){var n=e[t];e[t]=e[i],e[i]=n}function i(e,t){return e<t?-1:e>t?1:0}return function(t,n,r,a,s){e(t,n,r||0,a||t.length-1,s||i)}},void 0!==(a=r())&&(n.exports=a);var c=s.exports},939:function(e,t,i){"use strict";i.d(t,"a",(function(){return o}));var n=i(2),r=i(4),a=i(195),s=function(){function e(){Object(n.a)(this,e),this.items=[]}return Object(r.a)(e,[{key:"addObject",value:function(e,t){this.items.push({type:0,objectStateId:t,object:e})}},{key:"addRenderGeometry",value:function(e,t,i){this.items.push({type:1,objectStateId:t,renderGeometry:e,owner:i})}},{key:"addExternal",value:function(e,t){this.items.push({type:2,objectStateId:t,remove:e})}},{key:"remove",value:function(e){for(var t=this.items.length-1;t>=0;--t){var i=this.items[t];i.objectStateId===e&&(this._removeObjectStateItem(i),this.items.splice(t,1))}}},{key:"removeObject",value:function(e){for(var t=this.items.length-1;t>=0;--t){var i=this.items[t];0===i.type&&i.object===e&&(this._removeObjectStateItem(i),this.items.splice(t,1))}}},{key:"removeRenderGeometry",value:function(e){for(var t=this.items.length-1;t>=0;--t){var i=this.items[t];1===i.type&&i.renderGeometry===e&&(this._removeObjectStateItem(i),this.items.splice(t,1))}}},{key:"removeAll",value:function(){var e=this;this.items.forEach((function(t){e._removeObjectStateItem(t)})),this.items=[]}},{key:"_removeObjectStateItem",value:function(e){switch(e.type){case 0:0===e.objectStateId.channel?e.object.removeHighlight(e.objectStateId):1===e.objectStateId.channel&&e.object.removeOcclude(e.objectStateId);break;case 1:e.owner.removeRenderGeometryObjectState(e.renderGeometry,e.objectStateId);break;case 2:e.remove(e.objectStateId)}}}]),e}(),c=function(){function e(t,i){Object(n.a)(this,e),this.stateType=t,this.objectIdField=i,this.objectStateSet=new s,this.ids=new Set,this.paused=!1}return Object(r.a)(e,[{key:"hasGraphic",value:function(e){if(this.objectIdField){var t=e.graphic.attributes[this.objectIdField];return this.ids.has(t)}return this.ids.has(e.graphic.uid)}}]),e}(),o=function(){function e(t){Object(n.a)(this,e),this._graphicsCore=t,this._stateSets=new Array}return Object(r.a)(e,[{key:"destroy",value:function(){this._stateSets&&this._stateSets.forEach((function(e){return e.objectStateSet.removeAll()})),this._stateSets=null}},{key:"acquireSet",value:function(e,t){var i=this,n=new c(e,t);this._stateSets.push(n);var r=Object(a.b)((function(){return i.releaseSet(n)}));return{set:n,handle:r}}},{key:"releaseSet",value:function(e){e.objectStateSet.removeAll();var t=this._stateSets?this._stateSets.indexOf(e):-1;-1!==t&&this._stateSets.splice(t,1)}},{key:"_addObjectStateSet",value:function(e,t){e.addObjectStateSet(t.stateType,t.objectStateSet)}},{key:"_removeObjectStateSet",value:function(e,t){e.removeObjectState(t.objectStateSet)}},{key:"setUid",value:function(e,t){e.ids.add(t);var i=this._graphicsCore.graphics3DGraphics.get(t);i&&this._addObjectStateSet(i,e)}},{key:"setUids",value:function(e,t){var i=this;t.forEach((function(t){return i.setUid(e,t)}))}},{key:"setObjectIds",value:function(e,t){t.forEach((function(t){return e.ids.add(t)})),this.initializeSet(e)}},{key:"addGraphic",value:function(e){var t=this;this._stateSets.forEach((function(i){!i.paused&&i.hasGraphic(e)&&t._addObjectStateSet(e,i)}))}},{key:"removeGraphic",value:function(e){var t=this;this._stateSets.forEach((function(i){i.hasGraphic(e)&&t._removeObjectStateSet(e,i)}))}},{key:"allGraphicsDeleted",value:function(){this._stateSets&&this._stateSets.forEach((function(e){return e.objectStateSet.removeAll()}))}},{key:"initializeSet",value:function(e){var t=this,i=this._graphicsCore.graphics3DGraphics;e.objectIdField?i.forEach((function(i){i&&e.hasGraphic(i)&&t._addObjectStateSet(i,e)})):e.ids.forEach((function(n){var r=i.get(n);r&&t._addObjectStateSet(r,e)}))}},{key:"test",get:function(){return{states:this._stateSets}}}]),e}()},942:function(e,t,i){"use strict";i.d(t,"a",(function(){return m}));var n=i(13),r=i(2),a=i(4),s=i(6),c=i(7),o=i(0),h=i(33),u=i(90),l=i(60),d=i(3),p=i(1),v=(i(17),i(18),i(15),i(11)),f=i(71),y=i(42),b=i(97),g=function(){function e(){Object(r.a)(this,e),this._extents=new f.a({allocator:function(e){return e||Object(y.l)()}}),this._tmpExtent=Object(y.l)(),this._dirty=!1}return Object(a.a)(e,[{key:"empty",get:function(){return 0===this._extents.length}},{key:"size",get:function(){return this._extents.length}},{key:"clear",value:function(){this._extents.clear()}},{key:"add",value:function(e){this.contains(e)||(this.removeContained(e),Object(y.k)(this._extents.pushNew(),e),this._dirty=!0)}},{key:"pop",value:function(){return this._dirty&&this.mergeTight(),this._extents.pop()}},{key:"merge",value:function(e){return this.mergeTight(e),e.hasProgressed}},{key:"mergeTight",value:function(){for(var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b.d,i=this._extents,n=new Set,r=0;r!==i.length;){i.sort((function(e,t){return e[0]-t[0]})),r=i.length,n.clear();for(var a=function(r){if(t.done)return{v:void 0};for(var a=i.getItemAt(r),s=r+1;s<i.length;++s){var c=i.getItemAt(s);if(c[0]>=a[2])break;n.add(c)}n.forEach((function(r){if(a!==r)if(r[2]<=a[0])n.delete(r);else{var s=Object(y.d)(a),c=Object(y.d)(r),o=e._tmpExtent;Object(y.p)(a,r,o);var h=s+c;(Object(y.d)(o)-h)/h<.05&&(Object(y.k)(a,o),n.delete(r),i.remove(r),t.madeProgress())}})),n.add(a)},s=0;s<i.length;++s){var c=a(s);if("object"===typeof c)return c.v}}this._dirty=!1}},{key:"contains",value:function(e){return this._extents.some((function(t){return Object(y.g)(t,e)}))}},{key:"removeContained",value:function(e){this._extents.filterInPlace((function(t){return!Object(y.g)(e,t)}))}},{key:"test",get:function(){var e=this;return{containsPoint:function(t){return e._extents.some((function(e){return Object(y.h)(e,t)}))}}}}]),e}(),j=function(e){Object(s.a)(i,e);var t=Object(c.a)(i);function i(){var e;return Object(r.a)(this,i),(e=t.apply(this,arguments)).dirtyExtents=new g,e.globalDirty=!1,e.averageExtentUpdateSize=0,e.dirtyGraphicsSet=new Set,e.handles=new l.a,e.updateElevation=!1,e.layerView=null,e.graphicsCore=null,e.events=new u.a,e}return Object(a.a)(i,[{key:"setup",value:function(e,t,i,n){var r=this;this.layerView=e,this.queryGraphicUIDsInExtent=t,this.graphicsCore=i,this.elevationProvider=n;var a=this.layerView.view.resourceController.scheduler;this.handles.add([n.on("elevation-change",(function(e){return r._elevationChanged(e)})),this.layerView.watch("suspended",(function(){return r.suspendedChange()})),a.registerTask(b.b.ELEVATION_ALIGNMENT,this)])}},{key:"destroy",value:function(){this.dirtyGraphicsSet.clear(),this.handles.destroy(),this.handles=null,this.layerView=null,this.graphicsCore=null,this.queryGraphicUIDsInExtent=null}},{key:"clear",value:function(){this.dirtyGraphicsSet.clear(),this.notifyChange("updating")}},{key:"suspendedChange",value:function(){!0===this.layerView.suspended?this.updateElevation=!1:!1===this.layerView.suspended&&this.updateElevation&&(this.globalDirty=!0,this.notifyChange("updating"))}},{key:"elevationInfoChange",value:function(){this.globalDirty=!0,this.notifyChange("updating")}},{key:"updating",get:function(){return this.running}},{key:"running",get:function(){return this.dirtyGraphicsSet.size>0||this.dirtyExtents&&!this.dirtyExtents.empty||this.globalDirty}},{key:"updatingRemaining",get:function(){return this.dirtyGraphicsSet.size+this.dirtyExtents.size*this.averageExtentUpdateSize}},{key:"runTask",value:function(e){var t=this;for(this.globalDirty&&(this.markAllGraphicsElevationDirty(),this.globalDirty=!1,e.madeProgress()),e.run((function(){return t.dirtyExtents.merge(e)}));this.running&&!e.done;)this._updateDirtyGraphics(e),this._updateDirtyExtents(e);this.layerView.view.deconflictor.setDirty(),this.notifyChange("updating")}},{key:"_updateDirtyGraphics",value:function(e){var t,i=this.layerView.view.renderCoordsHelper,r=0===this.graphicsCore.effectiveUpdatePolicy,a=Object(n.a)(this.dirtyGraphicsSet.keys());try{for(a.s();!(t=a.n()).done;){var s=t.value,c=this.graphicsCore.getGraphics3DGraphicById(s);if(this.dirtyGraphicsSet.delete(s),Object(d.k)(c)&&(c.alignWithElevation(this.elevationProvider,i,r),e.madeProgress()),e.done)return}}catch(o){a.e(o)}finally{a.f()}}},{key:"_updateDirtyExtents",value:function(e){for(var t=this;!this.dirtyExtents.empty&&!e.done;){var i=this.dirtyExtents.pop(),n=this.elevationProvider.spatialReference;this.events.emit("invalidate-elevation",{extent:i,spatialReference:n});var r=this.dirtyGraphicsSet.size;this.queryGraphicUIDsInExtent(i,n,(function(e){var i=t.graphicsCore.getGraphics3DGraphicById(e);Object(d.k)(i)&&i.needsElevationUpdates()&&t.dirtyGraphicsSet.add(e)})),this.averageExtentUpdateSize=.1*(this.dirtyGraphicsSet.size-r)+.9*this.averageExtentUpdateSize,e.madeProgress()}}},{key:"markAllGraphicsElevationDirty",value:function(){var e=this;this.dirtyExtents.clear(),this.dirtyGraphicsSet.clear(),this.graphicsCore.graphics3DGraphics.forEach((function(t,i){return e.dirtyGraphicsSet.add(i)}))}},{key:"_elevationChanged",value:function(e){if("scene"!==e.context||this.graphicsCore.layer.elevationInfo&&"relative-to-scene"===this.graphicsCore.layer.elevationInfo.mode){var t=e.extent,i=e.spatialReference;if(this.layerView.suspended){if(!this.updateElevation){var n=this.graphicsCore.computedExtent;n&&t[2]>n.xmin&&t[0]<n.xmax&&t[3]>n.ymin&&t[1]<n.ymax&&(this.updateElevation=!0)}this.events.emit("invalidate-elevation",{extent:t,spatialReference:i})}else t[0]===-1/0?this.globalDirty=!0:this.dirtyExtents.add(t),this.notifyChange("updating")}}}]),i}(h.a);Object(o.a)([Object(p.b)({readOnly:!0})],j.prototype,"updating",null),Object(o.a)([Object(p.b)({readOnly:!0})],j.prototype,"updatingRemaining",null);var m=j=Object(o.a)([Object(v.a)("esri.views.3d.layers.graphics.Graphics3DElevationAlignment")],j)},951:function(e,t,i){"use strict";i.d(t,"a",(function(){return A}));var n=i(8),r=i.n(n),a=i(16),s=i(14),c=i(2),o=i(4),h=i(6),u=i(7),l=i(0),d=i(134),p=i(33),v=i(53),f=i(60),y=i(3),b=i(23),g=i(36),j=i(1),m=(i(17),i(18),i(15),i(11)),O=i(583),S=i(373),k=i(347),I=i(155),E=i(483),x=i(843),w=i(942),_=i(939),C=i(820),G=i(107),V=i(245),N=function(e){Object(h.a)(i,e);var t=Object(u.a)(i);function i(e){var n;return Object(c.a)(this,i),(n=t.call(this,e)).graphicsCore=null,n.elevationAlignment=new w.a,n.watchUpdatingTracking=new V.a,n.handles=new f.a,n.suspendResumeExtent=null,n}return Object(o.a)(i,[{key:"normalizeCtorArgs",value:function(e){var t=null;e.scaleVisibilityEnabled&&(delete(e=Object(s.a)({},e)).scaleVisibilityEnabled,t=new C.a);var i=new x.a({owner:e.owner,layer:e.layer,preferredUpdatePolicy:1,graphicSymbolSupported:!0});return Object(s.a)(Object(s.a)({},e),{},{graphicsCore:i,scaleVisibility:t})}},{key:"initialize",value:function(){var e=this,t=this.scaleVisibility;Object(y.k)(t)&&"minScale"in this.layer&&this.watchUpdatingTracking.add(this.layer,"scaleRangeId",(function(){return t.layerMinMaxScaleChangeHandler()})),"elevationInfo"in this.layer&&this.watchUpdatingTracking.add(this.layer,"elevationInfo",(function(t,i){Object(O.a)(t,i)&&e.watchUpdatingTracking.addPromise(e.graphicsCore.elevationInfoChange())}))}},{key:"setup",value:function(){var e=Object(a.a)(r.a.mark((function e(){var t,i,n=this;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=function(e,t,i){return n.graphicsCore.spatialIndex.queryGraphicUIDsInExtent(e,t,i)},this.elevationAlignment.setup(this.owner,t,this.graphicsCore,this.view.elevationProvider),Object(y.k)(this.scaleVisibility)&&"minScale"in this.layer&&(i=this.owner.view.basemapTerrain,this.scaleVisibility.setup(this.owner,this.layer,t,this.graphicsCore,i)),this._set("objectStates",new _.a(this.graphicsCore)),e.prev=3,e.next=6,this.graphicsCore.setup({elevationAlignment:this.elevationAlignment,scaleVisibility:this.scaleVisibility,objectStates:this.objectStates});case 6:e.next=13;break;case 8:if(e.prev=8,e.t0=e.catch(3),!Object(b.n)(e.t0)){e.next=12;break}return e.abrupt("return");case 12:throw e.t0;case 13:this.destroyed||(this.handles.add(this.view.watch("clippingArea",(function(){return n.updateClippingExtent()}),!0)),this.updateClippingExtent(),this.setupSuspendResumeExtent(),this.graphicsCore.startCreateGraphics());case 14:case"end":return e.stop()}}),e,this,[[3,8]])})));return function(){return e.apply(this,arguments)}}()},{key:"destroy",value:function(){this.handles=Object(y.e)(this.handles),this.watchUpdatingTracking.destroy(),this._set("elevationAlignment",Object(y.e)(this.elevationAlignment)),this._set("scaleVisibility",Object(y.e)(this.scaleVisibility)),this._set("objectStates",Object(y.e)(this.objectStates)),this._set("graphicsCore",Object(y.e)(this.graphicsCore))}},{key:"suspended",get:function(){return!(!Object(y.k)(this.scaleVisibility)||!this.scaleVisibility.suspended)}},{key:"updating",get:function(){var e,t;return!!(null!=(e=this.graphicsCore)&&e.updating||Object(y.k)(this.scaleVisibility)&&this.scaleVisibility.updating||null!=(t=this.watchUpdatingTracking)&&t.updating)}},{key:"getGraphicFromGraphicUid",value:function(e){if(this.owner.loadedGraphics){var t=this.owner.loadedGraphics.find((function(t){return t.uid===e}));if(t){var i=this.layer instanceof S.a?this.layer:null;return Object(k.c)(t,i)}}}},{key:"whenGraphicBounds",value:function(e,t){return this.graphicsCore?this.graphicsCore.whenGraphicBounds(e,t):Promise.reject()}},{key:"computeAttachmentOrigin",value:function(e,t){return this.graphicsCore?this.graphicsCore.computeAttachmentOrigin(e,t):null}},{key:"getSymbolLayerSize",value:function(e,t){return this.graphicsCore?this.graphicsCore.getSymbolLayerSize(e,t):null}},{key:"maskOccludee",value:function(e){var t=this.objectStates.acquireSet(1,null),i=t.set,n=t.handle;return this.objectStates.setUid(i,e.uid),n}},{key:"highlight",value:function(e){if(e instanceof I.a)return T;if("number"==typeof e)return this.highlight([e]);if(e instanceof d.a)return this.highlight([e]);if(e instanceof v.a&&(e=e.toArray()),Array.isArray(e)&&e.length>0){if(e[0]instanceof d.a){var t=e.map((function(e){return e.uid})),i=this.objectStates.acquireSet(0,null),n=i.set,r=i.handle;return this.objectStates.setUids(n,t),r}if("number"==typeof e[0]){var a=e,s=this.objectStates.acquireSet(0,null),c=s.set,o=s.handle;return this.objectStates.setObjectIds(c,a),o}}return T}},{key:"updateClippingExtent",value:function(){var e=this.view.clippingArea;this.graphicsCore.setClippingExtent(e,this.view.spatialReference)&&this.graphicsCore.recreateAllGraphics()}},{key:"updateSuspendResumeExtent",value:function(){Object(y.j)(this.scaleVisibility)||(this.suspendResumeExtent=Object(G.e)(this.graphicsCore.computedExtent,this.suspendResumeExtent,E.a,this.graphicsCore.extentPadding),this.scaleVisibility.setExtent(this.suspendResumeExtent))}},{key:"setupSuspendResumeExtent",value:function(){var e=this;Object(y.j)(this.scaleVisibility)||(Object(g.a)(this.graphicsCore,"computedExtent",(function(t){return e.updateSuspendResumeExtent()}),!0),this.graphicsCore.watch("extentPadding",(function(t){return e.updateSuspendResumeExtent()})))}}]),i}(p.a);Object(l.a)([Object(j.b)({constructOnly:!0})],N.prototype,"owner",void 0),Object(l.a)([Object(j.b)({constructOnly:!0})],N.prototype,"layer",void 0),Object(l.a)([Object(j.b)({readOnly:!0,aliasOf:"owner.view"})],N.prototype,"view",void 0),Object(l.a)([Object(j.b)({constructOnly:!0})],N.prototype,"graphicsCore",void 0),Object(l.a)([Object(j.b)({constructOnly:!0})],N.prototype,"scaleVisibility",void 0),Object(l.a)([Object(j.b)({readOnly:!0})],N.prototype,"elevationAlignment",void 0),Object(l.a)([Object(j.b)({readOnly:!0})],N.prototype,"objectStates",void 0),Object(l.a)([Object(j.b)({readOnly:!0})],N.prototype,"watchUpdatingTracking",void 0),Object(l.a)([Object(j.b)({readOnly:!0})],N.prototype,"suspended",null),Object(l.a)([Object(j.b)({readOnly:!0})],N.prototype,"updating",null),N=Object(l.a)([Object(m.a)("esri.views.3d.layers.graphics.Graphics3DGraphicLikeLayerView")],N);var T={remove:function(){},pause:function(){},resume:function(){}},A=N}}]);
//# sourceMappingURL=27.0441d374.chunk.js.map