(this.webpackJsonpexample=this.webpackJsonpexample||[]).push([[43],{706:function(e,t,n){},707:function(e,t,n){},709:function(e,t){function n(e){return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}))}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id=709},711:function(e,t,n){"use strict";n.r(t);var i=n(387),a=n.n(i),o=n(695),s=n.n(o),r=(n(706),n(2)),c=n(4),h=n(6),d=n(7),u=(n(707),n(543)),l=n(699),m=n(124),v=n(453),g=n(221),p=n(55),f=function(){function e(){Object(r.a)(this,e),this.clock=new g.c,this.mesh=void 0,this.radiansPerSecond=g.f.degToRad(30)}return Object(c.a)(e,[{key:"setup",value:function(e,t,n){var i=new g.b(1e4,1e4,1e4),a=new g.h({color:16711680,flatShading:!0});this.mesh=new g.g(i,a),this.mesh.scale.set(10,10,10),n.add(this.mesh);var o=[9.993,53.679,4e5],s=[0,0,0];v.c(e.view,o,0,p.a.WGS84,s,0,1),this.mesh.position.set(s[0],s[1],s[2]),e.view.goTo({target:[o[0],o[1]],zoom:5})}},{key:"render",value:function(e){var t=this.clock.getDelta();this.mesh.rotation.x+=this.radiansPerSecond*t,this.mesh.rotation.y+=this.radiansPerSecond*t,this.mesh.rotation.z+=this.radiansPerSecond*t}},{key:"dispose",value:function(e){this.mesh.material.dispose(),this.mesh.geometry.dispose()}}]),e}(),w=n(698),b=n(452),y=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"componentDidMount",value:function(){m.a.apiKey="";var e=new u.a({basemap:"arcgis-light-gray"}),t=new l.a({container:"arcgis_view",map:e,viewingMode:"global",camera:{position:{x:-9932671,y:2380007,z:1687219,spatialReference:{wkid:102100}},heading:0,tilt:35}});void 0!==t.environment.lighting&&(t.environment.lighting.cameraTrackingEnabled=!1,t.environment.lighting.date=new Date),w.a.start(t,new f)}},{key:"render",value:function(){return Object(b.jsx)("div",{id:"arcgis_view",className:"map","data-testid":"arcgis_element"})}}]),n}(i.Component);s.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(y,{})}),document.getElementById("root"))}},[[711,44,45]]]);
//# sourceMappingURL=main.c165e505.chunk.js.map