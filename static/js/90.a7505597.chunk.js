(this.webpackJsonpexample=this.webpackJsonpexample||[]).push([[90],{724:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return g}));var n=r(13),a=r(2),o=r(4),i=r(3),u=r(98),c=r(197),f=r(558),s=r(5),l=r(62),d=r(48),b=r(55),v=r(957),y=function(){function e(){Object(a.a)(this,e)}return Object(o.a)(e,[{key:"transform",value:function(e){var t=this._transform(e),r=[t.points.buffer,t.rgb.buffer];Object(i.k)(t.pointIdFilterMap)&&r.push(t.pointIdFilterMap.buffer);var a,o=Object(n.a)(t.attributes);try{for(o.s();!(a=o.n()).done;){var c=a.value;"buffer"in c.values&&Object(u.c)(c.values.buffer)&&c.values.buffer!==t.rgb.buffer&&r.push(c.values.buffer)}}catch(f){o.e(f)}finally{o.f()}return Promise.resolve({result:t,transferList:r})}},{key:"_transform",value:function(e){var t=Object(v.e)(e.schema,e.geometryBuffer),r=t.length/3,a=null,o=[],u=Object(v.d)(e.primaryAttributeData,t,r);Object(i.k)(e.primaryAttributeData)&&u&&o.push({attributeInfo:e.primaryAttributeData.attributeInfo,values:u});var c=Object(v.d)(e.modulationAttributeData,t,r);Object(i.k)(e.modulationAttributeData)&&c&&o.push({attributeInfo:e.modulationAttributeData.attributeInfo,values:c});var f=Object(v.b)(e.rendererInfo,u,c,r);if(e.filterInfo&&e.filterInfo.length>0&&Object(i.k)(e.filterAttributesData)){var s=e.filterAttributesData.map((function(e){var n=Object(v.d)(e,t,r),a={attributeInfo:e.attributeInfo,values:n};return o.push(a),a}));a=new Uint32Array(r),r=Object(v.c)(t,f,a,e.filterInfo,s)}var l,d=Object(n.a)(e.userAttributesData);try{for(d.s();!(l=d.n()).done;){var y=l.value,h=Object(v.d)(y,t,r);o.push({attributeInfo:y.attributeInfo,values:h})}}catch(w){d.e(w)}finally{d.f()}3*r<f.length&&(f=new Uint8Array(f.buffer.slice(0,3*r))),this._applyElevationOffsetInPlace(t,r,e.elevationOffset);var g=this._transformCoordinates(t,r,e.obb,b.a.fromJSON(e.inSR),b.a.fromJSON(e.outSR));return{obb:e.obb,points:g,rgb:f,attributes:o,pointIdFilterMap:a}}},{key:"_transformCoordinates",value:function(e,t,r,n,a){if(!Object(d.q)(e,n,0,e,a,0,t))throw Error("Can't reproject");var o=Object(l.d)(r.center[0],r.center[1],r.center[2]),i=Object(l.c)(),u=Object(l.c)();Object(c.b)(h,r.quaternion);for(var f=new Float32Array(3*t),b=0;b<t;b++)i[0]=e[3*b]-o[0],i[1]=e[3*b+1]-o[1],i[2]=e[3*b+2]-o[2],Object(s.w)(u,i,h),r.halfSize[0]=Math.max(r.halfSize[0],Math.abs(u[0])),r.halfSize[1]=Math.max(r.halfSize[1],Math.abs(u[1])),r.halfSize[2]=Math.max(r.halfSize[2],Math.abs(u[2])),f[3*b]=i[0],f[3*b+1]=i[1],f[3*b+2]=i[2];return f}},{key:"_applyElevationOffsetInPlace",value:function(e,t,r){if(0!==r)for(var n=0;n<t;n++)e[3*n+2]+=r}}]),e}(),h=Object(f.b)();function g(){return new y}},778:function(e,t,r){"use strict";r.d(t,"a",(function(){return g})),r.d(t,"b",(function(){return h})),r.d(t,"c",(function(){return b})),r.d(t,"d",(function(){return p}));var n=r(14),a=r(13),o=r(22),i=r(25),u=r(15),c=r(808),f=u.a.getLogger("esri.views.3d.layers.i3s.I3SBinaryReader");function s(e,t,r){for(var n="",a=0;a<r;){var i=e[t+a];if(i<128)n+=String.fromCharCode(i),a++;else if(i>=192&&i<224){if(a+1>=r)throw new o.a("utf8-decode-error","UTF-8 Decode failed. Two byte character was truncated.");var u=(31&i)<<6|63&e[t+a+1];n+=String.fromCharCode(u),a+=2}else if(i>=224&&i<240){if(a+2>=r)throw new o.a("utf8-decode-error","UTF-8 Decode failed. Multi byte character was truncated.");var c=(15&i)<<12|(63&e[t+a+1])<<6|63&e[t+a+2];n+=String.fromCharCode(c),a+=3}else{if(!(i>=240&&i<248))throw new o.a("utf8-decode-error","UTF-8 Decode failed. Invalid multi byte sequence.");if(a+3>=r)throw new o.a("utf8-decode-error","UTF-8 Decode failed. Multi byte character was truncated.");var f=(7&i)<<18|(63&e[t+a+1])<<12|(63&e[t+a+2])<<6|63&e[t+a+3];if(f>=65536){var s=55296+(f-65536>>10),l=56320+(1023&f);n+=String.fromCharCode(s,l)}else n+=String.fromCharCode(f);a+=4}}return n}function l(e,t){for(var r={byteOffset:0,byteCount:0,fields:Object.create(null)},n=0,a=0;a<t.length;a++){var o=t[a],i=o.valueType||o.type,u=O[i];r.fields[o.property]=u(e,n),n+=m[i].BYTES_PER_ELEMENT}return r.byteCount=n,r}function d(e,t,r){var n,a,i=[],u=0;for(a=0;a<e;a+=1){if((n=t[a])>0){if(i.push(s(r,u,n-1)),0!==r[u+n-1])throw new o.a("string-array-error","Invalid string array: missing null termination.")}else i.push(null);u+=n}return i}function b(e,t){return new(0,m[t.valueType])(e,t.byteOffset,t.count*t.valuesPerElement)}function v(e,t,r){for(var n=null!=t.header?l(e,t.header):{byteOffset:0,byteCount:0,fields:{count:r}},a={header:n,byteOffset:n.byteCount,byteCount:0,entries:Object.create(null)},u=n.byteCount,c=0;c<t.ordering.length;c++){var f=t.ordering[c],s=Object(i.a)(t[f]);if(s.count=n.fields.count,"String"===s.valueType){if(s.byteOffset=u,s.byteCount=n.fields[f+"ByteCount"],"UTF-8"!==s.encoding)throw new o.a("unsupported-encoding","Unsupported String encoding.",{encoding:s.encoding})}else{if(!U(s.valueType))throw new o.a("unsupported-value-type","Unsupported binary valueType",{valueType:s.valueType});var d=I(s.valueType);u+=u%d!=0?d-u%d:0,s.byteOffset=u,s.byteCount=d*s.valuesPerElement*s.count}u+=s.byteCount,a.entries[f]=s}return a.byteCount=u-a.byteOffset,a}function y(e,t,r){if(t!==e&&f.error("Invalid ".concat(r," buffer size\n expected: ").concat(e,", actual: ").concat(t,")")),t<e)throw new o.a("buffer-too-small","Binary buffer is too small",{expectedSize:e,actualSize:t})}function h(e,t){var r,o=l(e,t&&t.header),i=o.byteCount,u={isDraco:!1,header:o,byteOffset:o.byteCount,byteCount:0,vertexAttributes:{}},c=o.fields,f=null!=c.vertexCount?c.vertexCount:c.count,s=Object(a.a)(t.ordering);try{for(s.s();!(r=s.n()).done;){var d=r.value;if(t.vertexAttributes[d]){var b=Object(n.a)(Object(n.a)({},t.vertexAttributes[d]),{},{byteOffset:i,count:f}),v=w[d]?w[d]:"_"+d;u.vertexAttributes[v]=b,i+=I(b.valueType)*b.valuesPerElement*f}}}catch(k){s.e(k)}finally{s.f()}var h=c.faceCount;if(t.faces&&h){u.faces={};var g,p=Object(a.a)(t.ordering);try{for(p.s();!(g=p.n()).done;){var m=g.value;if(t.faces[m]){var O=Object(n.a)(Object(n.a)({},t.faces[m]),{},{byteOffset:i,count:h});u.faces[m]=O,i+=I(O.valueType)*O.valuesPerElement*h}}}catch(k){p.e(k)}finally{p.f()}}var U=c.featureCount;if(t.featureAttributes&&t.featureAttributeOrder&&U){u.featureAttributes={};var C,A=Object(a.a)(t.featureAttributeOrder);try{for(A.s();!(C=A.n()).done;){var j=C.value;if(t.featureAttributes[j]){var M=Object(n.a)(Object(n.a)({},t.featureAttributes[j]),{},{byteOffset:i,count:U});u.featureAttributes[j]=M,i+=("UInt64"===M.valueType?8:I(M.valueType))*M.valuesPerElement*U}}}catch(k){A.e(k)}finally{A.f()}}return y(i,e.byteLength,"geometry"),u.byteCount=i-u.byteOffset,u}function g(e,t){return e&&e.compressedAttributes&&"draco"===e.compressedAttributes.encoding?function(e){var t,r={isDraco:!0,isLegacy:!1,color:!1,normal:!1,uv0:!1,uvRegion:!1,featureIndex:!1},n=Object(a.a)(e);try{for(n.s();!(t=n.n()).done;){switch(t.value){case"position":break;case"normal":r.normal=!0;break;case"uv0":r.uv0=!0;break;case"color":r.color=!0;break;case"uv-region":r.uvRegion=!0;break;case"feature-index":r.featureIndex=!0}}}catch(o){n.e(o)}finally{n.f()}return r}(e.compressedAttributes.attributes):e?function(e){return{isDraco:!1,isLegacy:!1,color:null!=e.color,normal:null!=e.normal,uv0:null!=e.uv0,uvRegion:null!=e.uvRegion,featureIndex:null!=e.faceRange&&null!=e.featureId}}(e):function(e){var t,r={isDraco:!1,isLegacy:!0,color:!1,normal:!1,uv0:!1,uvRegion:!1,featureIndex:!1},n=Object(a.a)(e.ordering);try{for(n.s();!(t=n.n()).done;){var o=t.value;if(e.vertexAttributes[o])switch(o){case"position":break;case"normal":r.normal=!0;break;case"color":r.color=!0;break;case"uv0":r.uv0=!0;break;case"region":r.uvRegion=!0}}}catch(i){n.e(i)}finally{n.f()}return e.featureAttributes&&e.featureAttributeOrder&&(r.featureIndex=!0),r}(t)}var w={position:"position",normal:"normal",color:"color",uv0:"uv0",region:"uvRegion"};function p(e,t,r){if("lepcc-rgb"===e.encoding)return Object(c.b)(t);if("lepcc-intensity"===e.encoding)return Object(c.a)(t);if(null!=e.encoding&&""!==e.encoding)throw new o.a("unknown-attribute-storage-info-encoding","Unknown Attribute Storage Info Encoding");e["attributeByteCounts "]&&!e.attributeByteCounts&&(f.warn("Warning: Trailing space in 'attributeByteCounts '."),e.attributeByteCounts=e["attributeByteCounts "]),"ObjectIds"===e.ordering[0]&&e.hasOwnProperty("objectIds")&&(f.warn("Warning: Case error in objectIds"),e.ordering[0]="objectIds");var n=v(t,e,r);y(n.byteOffset+n.byteCount,t.byteLength,"attribute");var a=n.entries.attributeValues||n.entries.objectIds;if(a){if("String"===a.valueType){var i=n.entries.attributeByteCounts,u=b(t,i),s=function(e,t){return new Uint8Array(e,t.byteOffset,t.byteCount)}(t,a);return d(i.count,u,s)}return b(t,a)}throw new o.a("bad-attribute-storage-info","Bad attributeStorageInfo specification.")}var m={Float32:Float32Array,Float64:Float64Array,UInt8:Uint8Array,Int8:Int8Array,UInt16:Uint16Array,Int16:Int16Array,UInt32:Uint32Array,Int32:Int32Array},O={Float32:function(e,t){return new DataView(e,0).getFloat32(t,!0)},Float64:function(e,t){return new DataView(e,0).getFloat64(t,!0)},UInt8:function(e,t){return new DataView(e,0).getUint8(t)},Int8:function(e,t){return new DataView(e,0).getInt8(t)},UInt16:function(e,t){return new DataView(e,0).getUint16(t,!0)},Int16:function(e,t){return new DataView(e,0).getInt16(t,!0)},UInt32:function(e,t){return new DataView(e,0).getUint32(t,!0)},Int32:function(e,t){return new DataView(e,0).getInt32(t,!0)}};function U(e){return m.hasOwnProperty(e)}function I(e){return U(e)?m[e].BYTES_PER_ELEMENT:0}},808:function(e,t,r){"use strict";r.d(t,"a",(function(){return J})),r.d(t,"b",(function(){return E})),r.d(t,"c",(function(){return j}));var n=r(22),a=!0,o=0,i=10,u=10,c=12,f=16;function s(e,t,r){return{identifier:String.fromCharCode.apply(null,new Uint8Array(e,r+o,i)),version:t.getUint16(r+u,a),checksum:t.getUint32(r+c,a)}}var l=0,d=4,b=8,v=16,y=24,h=32,g=40,w=48,p=56,m=64,O=72,U=80,I=84,C=88;function A(e,t){return{sizeLo:e.getUint32(t+l,a),sizeHi:e.getUint32(t+d,a),minX:e.getFloat64(t+b,a),minY:e.getFloat64(t+v,a),minZ:e.getFloat64(t+y,a),maxX:e.getFloat64(t+h,a),maxY:e.getFloat64(t+g,a),maxZ:e.getFloat64(t+w,a),errorX:e.getFloat64(t+p,a),errorY:e.getFloat64(t+m,a),errorZ:e.getFloat64(t+O,a),count:e.getUint32(t+U,a),reserved:e.getUint32(t+I,a)}}function j(e){var t=new DataView(e,0),r=0,a=s(e,t,r),o=a.identifier,i=a.version;if(r+=f,"LEPCC     "!==o)throw new n.a("lepcc-decode-error","Bad identifier");if(i>1)throw new n.a("lepcc-decode-error","Unknown version");var u=A(t,r);if(r+=C,u.sizeHi*Math.pow(2,32)+u.sizeLo!==e.byteLength)throw new n.a("lepcc-decode-error","Bad size");var c=new Float64Array(3*u.count),l=[],d=[],b=[],v=[];if(r=M(e,r,l),r=M(e,r,d),r=M(e,r,b),(r=M(e,r,v))!==e.byteLength)throw new n.a("lepcc-decode-error","Bad length");for(var y=0,h=0,g=0;g<l.length;g++){h+=l[g];for(var w=0,p=0;p<d[g];p++){w+=b[y];var m=v[y];c[3*y]=Math.min(u.maxX,u.minX+2*u.errorX*w),c[3*y+1]=Math.min(u.maxY,u.minY+2*u.errorY*h),c[3*y+2]=Math.min(u.maxZ,u.minZ+2*u.errorZ*m),y++}}return{errorX:u.errorX,errorY:u.errorY,errorZ:u.errorZ,result:c}}function M(e,t,r){var n=[];t=k(e,t,n);for(var a=[],o=0;o<n.length;o++){a.length=0,t=k(e,t,a);for(var i=0;i<a.length;i++)r.push(a[i]+n[o])}return t}function k(e,t,r){var o=new DataView(e,t),i=o.getUint8(0),u=31&i,c=!!(32&i),f=(192&i)>>6,s=0;if(0===f)s=o.getUint32(1,a),t+=5;else if(1===f)s=o.getUint16(1,a),t+=3;else{if(2!==f)throw new n.a("lepcc-decode-error","Bad count type");s=o.getUint8(1),t+=2}if(c)throw new n.a("lepcc-decode-error","LUT not implemented");for(var l=Math.ceil(s*u/8),d=new Uint8Array(e,t,l),b=0,v=0,y=0,h=-1>>>32-u,g=0;g<s;g++){for(;v<u;)b|=d[y]<<v,v+=8,y+=1;r[g]=b&h,b>>>=u,(v-=u)+u>32&&(b|=d[y-1]>>8-v)}return t+y}var F=0,B=4,D=8,z=12,L=14,x=15,S=16;function T(e,t){return{sizeLo:e.getUint32(t+F,a),sizeHi:e.getUint32(t+B,a),count:e.getUint32(t+D,a),colorMapCount:e.getUint16(t+z,a),lookupMethod:e.getUint8(t+L),compressionMethod:e.getUint8(t+x)}}function E(e){var t=new DataView(e,0),r=0,a=s(e,t,r),o=a.identifier,i=a.version;if(r+=f,"ClusterRGB"!==o)throw new n.a("lepcc-decode-error","Bad identifier");if(i>1)throw new n.a("lepcc-decode-error","Unknown version");var u=T(t,r);if(r+=S,u.sizeHi*Math.pow(2,32)+u.sizeLo!==e.byteLength)throw new n.a("lepcc-decode-error","Bad size");if((2===u.lookupMethod||1===u.lookupMethod)&&0===u.compressionMethod){if(3*u.colorMapCount+u.count+r!==e.byteLength||u.colorMapCount>256)throw new n.a("lepcc-decode-error","Bad count");for(var c=new Uint8Array(e,r,3*u.colorMapCount),l=new Uint8Array(e,r+3*u.colorMapCount,u.count),d=new Uint8Array(3*u.count),b=0;b<u.count;b++){var v=l[b];d[3*b]=c[3*v],d[3*b+1]=c[3*v+1],d[3*b+2]=c[3*v+2]}return d}if(0===u.lookupMethod&&0===u.compressionMethod){if(3*u.count+r!==e.byteLength||0!==u.colorMapCount)throw new n.a("lepcc-decode-error","Bad count");return new Uint8Array(e,r).slice()}if(u.lookupMethod<=2&&1===u.compressionMethod){if(r+3!==e.byteLength||1!==u.colorMapCount)throw new n.a("lepcc-decode-error","Bad count");for(var y=t.getUint8(r),h=t.getUint8(r+1),g=t.getUint8(r+2),w=new Uint8Array(3*u.count),p=0;p<u.count;p++)w[3*p]=y,w[3*p+1]=h,w[3*p+2]=g;return w}throw new n.a("lepcc-decode-error","Bad method "+u.lookupMethod+","+u.compressionMethod)}var P=0,R=4,V=8,_=12,Y=14,X=15,Z=16;function H(e,t){return{sizeLo:e.getUint32(t+P,a),sizeHi:e.getUint32(t+R,a),count:e.getUint32(t+V,a),scaleFactor:e.getUint16(t+_,a),bitsPerPoint:e.getUint8(t+Y),reserved:e.getUint8(t+X)}}function J(e){var t=new DataView(e,0),r=0,a=s(e,t,r),o=a.identifier,i=a.version;if(r+=f,"Intensity "!==o)throw new n.a("lepcc-decode-error","Bad identifier");if(i>1)throw new n.a("lepcc-decode-error","Unknown version");var u=H(t,r);if(r+=Z,u.sizeHi*Math.pow(2,32)+u.sizeLo!==e.byteLength)throw new n.a("lepcc-decode-error","Bad size");var c=new Uint16Array(u.count);if(8===u.bitsPerPoint){if(u.count+r!==e.byteLength)throw new n.a("lepcc-decode-error","Bad size");for(var l=new Uint8Array(e,r,u.count),d=0;d<u.count;d++)c[d]=l[d]*u.scaleFactor}else if(16===u.bitsPerPoint){if(2*u.count+r!==e.byteLength)throw new n.a("lepcc-decode-error","Bad size");for(var b=new Uint16Array(e,r,u.count),v=0;v<u.count;v++)c[v]=b[v]*u.scaleFactor}else{var y=[];if(k(e,r,y)!==e.byteLength)throw new n.a("lepcc-decode-error","Bad size");for(var h=0;h<u.count;h++)c[h]=y[h]*u.scaleFactor}return c}}}]);
//# sourceMappingURL=90.a7505597.chunk.js.map