(this.webpackJsonpexample=this.webpackJsonpexample||[]).push([[89],{1077:function(e,t,i){"use strict";i.r(t),i.d(t,"default",(function(){return V}));var n=i(8),s=i.n(n),r=i(16),a=i(2),u=i(4),c=i(28),l=i(27),o=i(6),h=i(7),p=i(0),d=i(3),y=i(36),g=i(1),f=(i(17),i(18),i(15),i(11)),b=i(578),v=i(907),m=i(951),O=i(107),j=i(753),w=i(577),k=function(e){Object(o.a)(i,e);var t=Object(h.a)(i);function i(){var e;return Object(a.a)(this,i),(e=t.apply(this,arguments)).type="graphics-3d",e.frustumVisibility=new v.a,e.slicePlaneEnabled=!1,e.drapeSourceType=1,e.suspendResumeExtent=null,e.fullExtentInLocalViewSpatialReference=null,e}return Object(u.a)(i,[{key:"initialize",value:function(){var e=this;this._set("graphics3d",new m.a({owner:this,layer:this.layer,scaleVisibilityEnabled:!0})),this.graphics3d.setup(),this.frustumVisibility.setup(this),this.setupSuspendResumeExtent(),this.updatingHandles.add(this,"fullOpacity",(function(){return e.graphics3d.graphicsCore.opacityChange()})),this.handles.add(this.layer.on("graphic-update",(function(t){return e.graphics3d.graphicsCore.graphicUpdateHandler(t)}))),this.addResolvingPromise(Object(j.a)(this).then((function(t){return e.fullExtentInLocalViewSpatialReference=t}))),this.layer.internal?this.notifyChange("updating"):this.handles.add(Object(y.l)(this.view,"basemapTerrain.ready",(function(){return e.notifyChange("updating")})))}},{key:"destroy",value:function(){this.frustumVisibility&&(this.frustumVisibility.destroy(),this._set("frustumVisibility",null)),this.graphics3d&&(this.graphics3d.destroy(),this._set("graphics3d",null))}},{key:"legendEnabled",get:function(){return this.canResume()&&!this.frustumVisibility.suspended}},{key:"suspendInfo",get:function(){var e,t={};return Object(d.k)(this.graphics3d.scaleVisibility)&&this.graphics3d.scaleVisibility.suspended&&(t.outsideScaleRange=!0),t.outsideOfView=!(null==(e=this.frustumVisibility)||!e.suspended),t}},{key:"fetchPopupFeatures",value:function(){var e=Object(r.a)(s.a.mark((function e(t,i){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(d.k)(i)?i.clientGraphics:null);case 1:case"end":return e.stop()}}),e)})));return function(t,i){return e.apply(this,arguments)}}()},{key:"notifyGraphicGeometryChanged",value:function(e){this.graphics3d.graphicsCore.notifyGraphicGeometryChanged(e)}},{key:"notifyGraphicVisibilityChanged",value:function(e){this.graphics3d.graphicsCore.notifyGraphicVisibilityChanged(e)}},{key:"graphics3DGraphics",get:function(){return this.graphics3d.graphicsCore.graphics3DGraphics}},{key:"graphics3DGraphicsByObjectID",get:function(){return this.graphics3d?this.graphics3d.graphicsCore.graphics3DGraphicsByObjectID:null}},{key:"symbolUpdateType",get:function(){return this.graphics3d.graphicsCore.symbolUpdateType}},{key:"getGraphicFromGraphicUid",value:function(e){return this.graphics3d.getGraphicFromGraphicUid(e)}},{key:"whenGraphicBounds",value:function(e,t){return this.graphics3d.whenGraphicBounds(e,t)}},{key:"computeAttachmentOrigin",value:function(e,t){return this.graphics3d?this.graphics3d.graphicsCore.computeAttachmentOrigin(e,t):null}},{key:"getSymbolLayerSize",value:function(e,t){return this.graphics3d.getSymbolLayerSize(e,t)}},{key:"queryGraphics",value:function(){return Promise.resolve(this.loadedGraphics)}},{key:"maskOccludee",value:function(e){return this.graphics3d.maskOccludee(e)}},{key:"highlight",value:function(e){return this.graphics3d.highlight(e)}},{key:"updatePolicy",get:function(){var e;return(null==(e=this.graphics3d)?void 0:e.graphicsCore.effectiveUpdatePolicy)||1}},{key:"canResume",value:function(){var e;return Object(c.a)(Object(l.a)(i.prototype),"canResume",this).call(this)&&!(null!=(e=this.graphics3d)&&e.suspended)}},{key:"isUpdating",value:function(){var e,t;return!(!(this.graphics3d&&this.graphics3d.updating||this.frustumVisibility&&this.frustumVisibility.updating)&&(this.layer.internal||null!=(e=this.view)&&null!=(t=e.basemapTerrain)&&t.ready))}},{key:"setupSuspendResumeExtent",value:function(){var e=this,t=function(){e.suspendResumeExtent=Object(O.e)(e.graphics3d.graphicsCore.computedExtent,e.suspendResumeExtent,1.2,e.graphics3d.graphicsCore.extentPadding),e.frustumVisibility.setExtent(e.suspendResumeExtent)};Object(y.a)(this.graphics3d.graphicsCore,"computedExtent",(function(){return t()}),!0),Object(y.e)(this.graphics3d.graphicsCore,"extentPadding",(function(){return t()}),!0)}},{key:"performanceInfo",get:function(){return{displayedNumberOfFeatures:this.loadedGraphics.length,maximumNumberOfFeatures:-1,totalNumberOfFeatures:-1,nodes:0,core:null,updating:this.updating,elevationUpdating:this.graphics3d.elevationAlignment.updating,visibilityFrustum:!this.frustumVisibility.suspended}}}]),i}(Object(b.a)(w.a));Object(p.a)([Object(g.b)({aliasOf:"layer.graphics"})],k.prototype,"loadedGraphics",void 0),Object(p.a)([Object(g.b)({readOnly:!0})],k.prototype,"suspended",void 0),Object(p.a)([Object(g.b)({readOnly:!0})],k.prototype,"legendEnabled",null),Object(p.a)([Object(g.b)({readOnly:!0})],k.prototype,"updating",void 0),Object(p.a)([Object(g.b)()],k.prototype,"layer",void 0),Object(p.a)([Object(g.b)({readOnly:!0})],k.prototype,"frustumVisibility",void 0),Object(p.a)([Object(g.b)({readOnly:!0})],k.prototype,"graphics3d",void 0),Object(p.a)([Object(g.b)({type:Boolean})],k.prototype,"slicePlaneEnabled",void 0),Object(p.a)([Object(g.b)({readOnly:!0})],k.prototype,"suspendInfo",null);var V=k=Object(p.a)([Object(f.a)("esri.views.3d.layers.GraphicsLayerView3D")],k)},753:function(e,t,i){"use strict";i.d(t,"a",(function(){return a}));var n=i(3),s=i(75),r=i(581);function a(e){var t=e.view.spatialReference,i=e.layer.fullExtent,a=i&&i.spatialReference;if(!a)return Promise.resolve(null);if(a.equals(t))return Promise.resolve(i.clone());var u=Object(s.d)(i,t);return Object(n.k)(u)?Promise.resolve(u):e.view.state.isLocal?Object(r.projectGeometry)(i,t,e.layer.portalItem).then((function(t){return!e.destroyed&&t?t:void 0})).catch((function(){return null})):Promise.resolve(null)}},907:function(e,t,i){"use strict";i.d(t,"a",(function(){return b}));var n=i(2),s=i(4),r=i(6),a=i(7),u=i(0),c=i(33),l=i(60),o=i(36),h=i(1),p=(i(17),i(18),i(15),i(11)),d=i(68),y=i(635),g=i(97),f=function(e){Object(r.a)(i,e);var t=Object(a.a)(i);function i(){var e;return Object(n.a)(this,i),(e=t.apply(this,arguments)).suspended=!1,e.extent=null,e.extentIntersectionDirty=!0,e._isVisibleBelowSurface=!1,e.handles=new l.a,e.layerView=null,e.updating=!0,e}return Object(s.a)(i,[{key:"setup",value:function(e){var t=this;this.layerView=e,this.extentIntersection=new y.a({renderCoordsHelper:e.view.renderCoordsHelper});var i=e.view,n=i.basemapTerrain,s=i.resourceController.scheduler;this.handles.add([i.on("resize",(function(){return t.viewChange()})),i.state.watch("camera",(function(){return t.viewChange()}),!0),s.registerTask(g.b.FRUSTUM_VISIBILITY,this),n.on("elevation-bounds-change",(function(){return t.elevationBoundsChange()}))]),"local"===i.viewingMode?this.isVisibleBelowSurface=!0:this.handles.add([Object(o.a)(n,["opacity","wireframe"],(function(){return t.updateIsVisibleBelowSurface()})),Object(o.a)(i,"map.ground.navigationConstraint.type",(function(){return t.updateIsVisibleBelowSurface()}))])}},{key:"destroy",value:function(){this.layerView=null,this.extent=null,this.extentIntersection=null,this.handles&&(this.handles.destroy(),this.handles=null)}},{key:"_setDirty",value:function(){this.updating||this._set("updating",!0)}},{key:"setExtent",value:function(e){this.extent=e,this.extentIntersectionDirty=!0,this._setDirty()}},{key:"viewChange",value:function(){this._setDirty()}},{key:"elevationBoundsChange",value:function(){this._setDirty(),this.extentIntersectionDirty=!0}},{key:"isVisibleBelowSurface",set:function(e){this._isVisibleBelowSurface=e,this._setDirty(),this.extentIntersectionDirty=!0}},{key:"updateIsVisibleBelowSurface",value:function(){var e=this.layerView.view,t=e.basemapTerrain,i="local"===e.viewingMode,n=e.map.ground&&e.map.ground.navigationConstraint&&"none"===e.map.ground.navigationConstraint.type;this.isVisibleBelowSurface=i||!t.opaque||n}},{key:"updateExtentIntersection",value:function(){if(this.extentIntersectionDirty){this.extentIntersectionDirty=!1;var e,t=this.layerView.view;if(this._isVisibleBelowSurface)e=-.3*Object(d.e)(t.spatialReference).radius;else{var i=t.basemapTerrain.elevationBounds,n=i.min,s=i.max;e=n-Math.max(1,(s-n)*(1.2-1))}this.extentIntersection.update(this.extent,t.spatialReference,e)}}},{key:"running",get:function(){return this.updating}},{key:"runTask",value:function(){if(this._set("updating",!1),this.extent){this.updateExtentIntersection();var e=this.layerView.view.frustum,t=Object(d.e)(this.layerView.view.spatialReference).radius;this._set("suspended",!this.extentIntersection.isVisibleInFrustum(e,t))}else this._set("suspended",!1)}}]),i}(c.a);Object(u.a)([Object(h.b)({readOnly:!0})],f.prototype,"suspended",void 0),Object(u.a)([Object(h.b)({readOnly:!0})],f.prototype,"updating",void 0);var b=f=Object(u.a)([Object(p.a)("esri.views.3d.layers.graphics.Graphics3DFrustumVisibility")],f)}}]);
//# sourceMappingURL=89.c2669e5b.chunk.js.map