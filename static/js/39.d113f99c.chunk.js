(this.webpackJsonpexample=this.webpackJsonpexample||[]).push([[39],{1122:function(t,e,n){"use strict";n.r(e),n.d(e,"loadGLTFMesh",(function(){return E}));var r=n(13),c=n(8),o=n.n(c),a=n(16),u=n(51),i=n(101),s=n(117),l=n(3),b=n(66),f=n(94),p=n(10),O=n(46),j=n(605),m=n(484),d=n(365),v=n(606),g=n(35),x=n(182),h=n(540),w=n(346),y=n(804),k=n(498),C=n(501),B=n(541),A=n(153),M=n(372),T=n(380),F=n(428),S=n(485);function E(t,e,n){return J.apply(this,arguments)}function J(){return(J=Object(a.a)(o.a.mark((function t(e,n,c){var a,u,i,s,b,f,p,O,j,m,d,g,x,h,w,B,A;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=new k.a(R(c)),t.next=3,Object(C.a)(a,n,c,!0);case 3:u=t.sent.model,i=u.lods.shift(),s=new Map,b=new Map,u.textures.forEach((function(t,e){return s.set(e,L(t))})),u.materials.forEach((function(t,e){return b.set(e,N(t,s))})),f=I(i),p=Object(r.a)(f.parts);try{for(p.s();!(O=p.n()).done;)j=O.value,q(f,j,b)}catch(o){p.e(o)}finally{p.f()}return m=f.vertexAttributes,d=m.position,g=m.normal,x=m.tangent,h=m.color,w=m.texCoord0,B={position:d.typedBuffer,normal:Object(l.k)(g)?g.typedBuffer:null,tangent:Object(l.k)(x)?x.typedBuffer:null,uv:Object(l.k)(w)?w.typedBuffer:null,color:Object(l.k)(h)?h.typedBuffer:null},A=Object(y.c)(B,e,c),t.abrupt("return",{transform:A.transform,components:f.components,spatialReference:e.spatialReference,vertexAttributes:new v.c({position:A.vertexAttributes.position,normal:A.vertexAttributes.normal,tangent:A.vertexAttributes.tangent,color:B.color,uv:B.uv})});case 13:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function R(t){return null!=t&&t.resolveFile?{busy:!1,request:function(){var e=Object(a.a)(o.a.mark((function e(n,r,c){var a,u;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.resolveFile(n),u="image"===r?"image":"binary"===r?"array-buffer":"json",e.next=3,Object(i.default)(a,{responseType:u,signal:Object(l.k)(c)?c.signal:null});case 3:return e.abrupt("return",e.sent.data);case 4:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}()}:null}function z(t,e){if(Object(l.j)(t))return"-";var n=t.typedBuffer;return"".concat(Object(s.b)(e,n.buffer,(function(){return e.size})),"/").concat(n.byteOffset,"/").concat(n.byteLength)}function I(t){var e,n=0,c={color:!1,tangent:!1,normal:!1,texCoord0:!1},o=new Map,a=new Map,u=[],i=Object(r.a)(t.parts);try{var b=function(){var t=e.value,r=t.attributes,i=r.position,b=r.normal,f=r.color,p=r.tangent,O=r.texCoord0,j="\n      ".concat(z(i,o),"/\n      ").concat(z(b,o),"/\n      ").concat(z(f,o),"/\n      ").concat(z(p,o),"/\n      ").concat(z(O,o),"/\n      ").concat(function(t){return Object(l.k)(t)?t.toString():"-"}(t.transform),"\n    "),m=!1,d=Object(s.b)(a,j,(function(){return m=!0,{start:n,length:i.count}}));m&&(n+=i.count),b&&(c.normal=!0),f&&(c.color=!0),p&&(c.tangent=!0),O&&(c.texCoord0=!0),u.push({gltf:t,writeVertices:m,region:d})};for(i.s();!(e=i.n()).done;)b()}catch(f){i.e(f)}finally{i.f()}return{vertexAttributes:{position:Object(w.a)(g.v,n),normal:c.normal?Object(w.a)(g.u,n):null,tangent:c.tangent?Object(w.a)(g.C,n):null,color:c.color?Object(w.a)(g.J,n):null,texCoord0:c.texCoord0?Object(w.a)(g.m,n):null},parts:u,components:[]}}function L(t){return new d.a({data:t.data,wrap:D(t.parameters.wrap)})}function N(t,e){var n,r=new u.a(function(t,e){return Object(O.g)(H(t[0]),H(t[1]),H(t[2]),e)}(t.color,t.opacity)),c=t.emissiveFactor?new u.a((n=t.emissiveFactor,Object(p.g)(H(n[0]),H(n[1]),H(n[2])))):null;return new m.a({color:r,colorTexture:Object(l.t)(Object(l.c)(t.textureColor,(function(t){return e.get(t)}))),normalTexture:Object(l.t)(Object(l.c)(t.textureNormal,(function(t){return e.get(t)}))),emissiveColor:c,emissiveTexture:Object(l.t)(Object(l.c)(t.textureEmissive,(function(t){return e.get(t)}))),occlusionTexture:Object(l.t)(Object(l.c)(t.textureOcclusion,(function(t){return e.get(t)}))),alphaMode:V(t.alphaMode),alphaCutoff:t.alphaCutoff,doubleSided:t.doubleSided,metallic:t.metallicFactor,roughness:t.roughnessFactor,metallicRoughnessTexture:Object(l.t)(Object(l.c)(t.textureMetallicRoughness,(function(t){return e.get(t)})))})}function q(t,e,n){e.writeVertices&&function(t,e){var n=t.vertexAttributes,r=n.position,c=n.normal,o=n.tangent,a=n.color,u=n.texCoord0,i=e.region.start,s=e.gltf,p=s.attributes,O=s.transform,j=p.position.count;if(Object(x.e)(r.slice(i,j),p.position,O),Object(l.k)(p.normal)&&Object(l.k)(c)){var m=Object(b.a)(Object(f.b)(),O);Object(x.a)(c.slice(i,j),p.normal,m)}else Object(l.k)(c)&&Object(T.b)(c,0,0,1,{dstIndex:i,count:j});if(Object(l.k)(p.tangent)&&Object(l.k)(o)){var d=Object(b.a)(Object(f.b)(),O);Object(h.c)(o.slice(i,j),p.tangent,d)}else Object(l.k)(o)&&Object(F.b)(o,0,0,1,1,{dstIndex:i,count:j});if(Object(l.k)(p.texCoord0)&&Object(l.k)(u)?Object(S.b)(u.slice(i,j),p.texCoord0):Object(l.k)(u)&&Object(S.a)(u,0,0,{dstIndex:i,count:j}),Object(l.k)(p.color)&&Object(l.k)(a)){var v=p.color,w=a.slice(i,j);if(4===v.elementCount)v instanceof g.C?Object(h.b)(w,v,255):v instanceof g.J?Object(F.a)(w,v):v instanceof g.H&&Object(h.a)(w,v,8);else{Object(F.b)(w,255,255,255,255);var y=g.B.fromTypedArray(w.typedBuffer,w.typedBufferStride);v instanceof g.u?Object(x.d)(y,v,255):v instanceof g.B?Object(T.a)(y,v):v instanceof g.z&&Object(x.b)(y,v,8)}}else Object(l.k)(a)&&Object(F.b)(a.slice(i,j),255,255,255,255)}(t,e);var r=e.gltf,c=function(t,e){switch(e){case 4:return Object(B.c)(t,A.e);case 5:return Object(B.b)(t);case 6:return Object(B.a)(t)}}(r.indices||r.attributes.position.count,r.primitiveType),o=e.region.start;if(o)for(var a=0;a<c.length;a++)c[a]+=o;t.components.push(new j.a({faces:c,material:n.get(r.material),trustSourceNormals:!0}))}function V(t){switch(t){case"OPAQUE":return"opaque";case"MASK":return"mask";case"BLEND":return"blend"}}function D(t){return{horizontal:G(t.s),vertical:G(t.t)}}function G(t){switch(t){case 33071:return"clamp";case 33648:return"mirror";case 10497:return"repeat"}}function H(t){return 255*Math.pow(t,1/M.a)}}}]);
//# sourceMappingURL=39.d113f99c.chunk.js.map