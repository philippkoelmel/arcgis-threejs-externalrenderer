(this.webpackJsonpexample=this.webpackJsonpexample||[]).push([[43],{706:function(e,t,n){},707:function(e,t,n){},709:function(e,t){function n(e){return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}))}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id=709},711:function(e,t,n){"use strict";n.r(t);var i=n(387),a=n.n(i),o=n(695),s=n.n(o),r=(n(706),n(2)),c=n(4),h=n(6),d=n(7),u=(n(707),n(543)),m=n(699),l=n(124),v=n(453),f=n(221),g=n(55),p=function(){function e(){Object(r.a)(this,e),this.clock=new f.c,this.mesh=void 0,this.radiansPerSecond=f.f.degToRad(30)}return Object(c.a)(e,[{key:"setup",value:function(e,t,n){var i=new f.b(1e4,1e4,1e4),a=new f.h({color:16711680,flatShading:!0});this.mesh=new f.g(i,a),this.mesh.scale.set(10,10,10),n.add(this.mesh);var o=[9.993,53.679,4e5],s=[0,0,0];v.c(e.view,o,0,g.a.WGS84,s,0,1),this.mesh.position.set(s[0],s[1],s[2]),e.view.goTo({target:[o[0],o[1]],zoom:5})}},{key:"render",value:function(e){var t=this.clock.getDelta();this.mesh.rotation.x+=this.radiansPerSecond*t,this.mesh.rotation.y+=this.radiansPerSecond*t,this.mesh.rotation.z+=this.radiansPerSecond*t}},{key:"dispose",value:function(e){this.mesh.material.dispose(),this.mesh.geometry.dispose()}}]),e}(),w=n(698),b=n(452),j=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"componentDidMount",value:function(){l.a.apiKey="AAPK1f0dbbc63fa9475693907f074ef16c340wQaz2AT8M7-jiAEJ0dPLGKSAGS7Wx6CBzSdEqMQuABzCh681un_LUxUmPeT4KeR";var e=new u.a({basemap:"arcgis-light-gray"}),t=new m.a({container:"arcgis_view",map:e,viewingMode:"global",camera:{position:{x:-9932671,y:2380007,z:1687219,spatialReference:{wkid:102100}},heading:0,tilt:35}});void 0!==t.environment.lighting&&(t.environment.lighting.cameraTrackingEnabled=!1,t.environment.lighting.date=new Date),w.a.start(t,new p)}},{key:"render",value:function(){return Object(b.jsx)("div",{id:"arcgis_view",className:"map","data-testid":"arcgis_element"})}}]),n}(i.Component);s.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(j,{})}),document.getElementById("root"))}},[[711,44,45]]]);
//# sourceMappingURL=main.a60ed1c8.chunk.js.map