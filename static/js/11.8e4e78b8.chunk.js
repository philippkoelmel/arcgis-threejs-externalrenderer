(this.webpackJsonpexample=this.webpackJsonpexample||[]).push([[11],{765:function(t,e,r){"use strict";r.d(e,"a",(function(){return O})),r.d(e,"b",(function(){return l})),r.d(e,"c",(function(){return o})),r.d(e,"d",(function(){return c})),r.d(e,"e",(function(){return f})),r.d(e,"f",(function(){return u})),r.d(e,"g",(function(){return h})),r.d(e,"h",(function(){return s})),r.d(e,"i",(function(){return a})),r.d(e,"j",(function(){return v})),r.d(e,"k",(function(){return m})),r.d(e,"l",(function(){return d})),r.d(e,"m",(function(){return g})),r.d(e,"n",(function(){return j})),r.d(e,"o",(function(){return p}));var i=r(3),n=r(787);function a(t){return Object(i.k)(t)&&"esri.layers.support.PixelBlock"===t.declaredClass&&t.pixels&&t.pixels.length>0}function s(t,e){if(null==e||!e.length||!a(t))return t;var r=t.pixels.length;return e&&e.some((function(t){return t>=r}))||1===r&&1===e.length&&0===e[0]?t:r!==e.length||e.some((function(t,e){return t!==e}))?new n.a({pixelType:t.pixelType,width:t.width,height:t.height,mask:t.mask,validPixelCount:t.validPixelCount,maskIsAlpha:t.maskIsAlpha,pixels:e.map((function(e){return t.pixels[e]})),statistics:t.statistics&&e.map((function(e){return t.statistics[e]}))}):t}function o(t){if(t){var e=t.colormap;if(e&&0!==e.length){var r=e.sort((function(t,e){return t[0]-e[0]})),i=0;r[0][0]<0&&(i=r[0][0]);var n,a=Math.max(256,r[r.length-1][0]-i+1),s=new Uint8Array(4*a),o=[],l=0,h=0,u=5===r[0].length;if(a>65536)return r.forEach((function(t){o[t[0]-i]=u?t.slice(1):t.slice(1).concat([255])})),{indexed2DColormap:o,offset:i,alphaSpecified:u};if(t.fillUnspecified)for(l=(n=r[h])[0]-i;l<a;l++)s[4*l]=n[1],s[4*l+1]=n[2],s[4*l+2]=n[3],s[4*l+3]=u?n[4]:255,l===n[0]-i&&(n=h===r.length-1?n:r[++h]);else for(l=0;l<r.length;l++)s[h=4*((n=r[l])[0]-i)]=n[1],s[h+1]=n[2],s[h+2]=n[3],s[h+3]=u?n[4]:255;return{indexedColormap:s,offset:i,alphaSpecified:u}}}}function l(t,e){if(!a(t))return t;if(!e&&(e.indexedColormap||e.indexed2DColormap))return t;var r=t.clone(),i=r.pixels,n=r.mask,s=r.width*r.height;if(1!==i.length)return t;var o,l=e.indexedColormap,h=e.indexed2DColormap,u=e.offset,f=e.alphaSpecified,c=l.length-1,p=0,v=i[0],d=new Uint8Array(v.length),x=new Uint8Array(v.length),m=new Uint8Array(v.length),g=0;if(l)if(n)for(p=0;p<s;p++)n[p]&&((g=4*(v[p]-u))<u||g>c?n[p]=0:(d[p]=l[g],x[p]=l[g+1],m[p]=l[g+2],n[p]=l[g+3]));else{for(n=new Uint8Array(s),p=0;p<s;p++)(g=4*(v[p]-u))<u||g>c?n[p]=0:(d[p]=l[g],x[p]=l[g+1],m[p]=l[g+2],n[p]=l[g+3]);r.mask=n}else if(n)for(p=0;p<s;p++)n[p]&&(o=h[v[p]],d[p]=o[0],x[p]=o[1],m[p]=o[2],n[p]=o[3]);else{for(n=new Uint8Array(s),p=0;p<s;p++)o=h[v[p]],d[p]=o[0],x[p]=o[1],m[p]=o[2],n[p]=o[3];r.mask=n}return r.pixels=[d,x,m],r.statistics=null,r.pixelType="u8",r.maskIsAlpha=f,r}function h(t){if(!a(t))return null;t.statistics||t.updateStatistics();var e,r,i,n,s,o,l,h,u,f,c,p,v,d,x=t.pixels,m=t.mask,g=t.pixelType,w=t.statistics,y=t.width*t.height,k=x.length,b=[],M=[],A=256;for(n=0;n<k;n++){if(o=new Uint32Array(A),h=x[n],"u8"===g)if(e=-.5,r=255.5,m)for(s=0;s<y;s++)m[s]&&o[h[s]]++;else for(s=0;s<y;s++)o[h[s]]++;else{if(e=w[n].minValue,i=((r=w[n].maxValue)-e)/A,l=new Uint32Array(257),m)for(s=0;s<y;s++)m[s]&&l[Math.floor((h[s]-e)/i)]++;else for(s=0;s<y;s++)l[Math.floor((h[s]-e)/i)]++;for(s=0;s<255;s++)o[s]=l[s];o[255]=l[255]+l[256]}for(b.push({min:e,max:r,size:A,counts:o}),u=0,f=0,v=0,s=0;s<A;s++)u+=o[s],f+=s*o[s];for(d=f/u,s=0;s<A;s++)v+=o[s]*Math.pow(s-d,2);c=(d+.5)*(i=(r-e)/A)+e,p=Math.sqrt(v/(u-1))*i,M.push({min:e,max:r,avg:c,stddev:p})}return{statistics:M,histograms:b}}function u(t){for(var e=[],r=0;r<t.length;r++){for(var i=t[r],n=i.min,a=i.max,s=i.size,o=i.counts,l=0,h=0,u=0;u<s;u++)l+=o[u],h+=u*o[u];for(var f=h/l,c=0,p=0;p<s;p++)c+=o[p]*Math.pow(p-f,2);var v=(a-n)/s,d=(f+.5)*v+n,x=Math.sqrt(c/(l-1))*v;e.push({min:n,max:a,avg:d,stddev:x})}return e}function f(t){var e=t.minCutOff,r=t.maxCutOff,i=t.gamma,n=t.pixelType,a=t.outMin||0,s=t.outMax||255;if(-1===["u8","u16","s8","s16"].indexOf(n))return null;var o,l,h=e.length,u=0;"s8"===n?u=-127:"s16"===n&&(u=-32767);var f=256;["u16","s16"].indexOf(n)>-1&&(f=65536);var c=[],p=[],v=s-a;for(o=0;o<h;o++)p[o]=r[o]-e[o],c[o]=v/(r[o]-e[o]);var d,x=i&&i.length>=h,m=[];if(x)for(o=0;o<h;o++)i[o]>1?i[o]>2?m[o]=6.5+Math.pow(i[o]-2,2.5):m[o]=6.5+100*Math.pow(2-i[o],4):m[o]=1;var g,w,y,k=[];if(x)for(o=0;o<h;o++){for(y=[],l=0;l<f;l++)d=((g=l+u)-e[o])/p[o],w=1,i[o]>1&&(w-=Math.pow(1/v,d*m[o])),g<r[o]&&g>e[o]?y[l]=Math.floor(w*v*Math.pow(d,1/i[o]))+a:g>=r[o]?y[l]=s:y[l]=a;k[o]=y}else for(o=0;o<h;o++){for(y=[],l=0;l<f;l++)(g=l+u)<=e[o]?y[l]=a:g>=r[o]?y[l]=s:y[l]=Math.floor((g-e[o])/p[o]*v)+a;k[o]=y}if(null!=t.contrastOffset){var b=function(t,e){var r,i,n=Math.min(Math.max(t,-100),100),a=Math.min(Math.max(e,-100),100),s=255,o=128,l=new Uint8Array(256);for(r=0;r<256;r++)n>0&&n<100?i=(200*r-100*s+2*s*a)/(2*(100-n))+o:n<=0&&n>-100?i=(200*r-100*s+2*s*a)*(100+n)/2e4+o:100===n?i=(i=200*r-100*s+(s+1)*(100-n)+2*s*a)>0?s:0:-100===n&&(i=o),l[r]=i>s?s:i<0?0:i;return l}(t.contrastOffset,t.brightnessOffset);for(o=0;o<h;o++)for(y=k[o],l=0;l<f;l++)y[l]=b[y[l]]}return{lut:k,offset:u}}function c(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:256;e=Math.min(e,256);for(var r=t.size,i=t.counts,n=new Uint8Array(r),a=i.reduce((function(t,r){return t+r/e}),0),s=0,o=0,l=0,h=a,u=0;u<r;u++)if(l+=i[u],!(u<r-1&&l+i[u+1]<h)){for(;s<e-1&&h<l;)s++,h+=a;for(var f=o;f<=u;f++)n[f]=s;o=u+1}for(var c=o;c<r;c++)n[c]=e-1;return n}function p(t,e){if(!a(t))return null;var r,i,n,s,o,l=t.clone(),h=l.pixels,u=l.mask,f=e.minCutOff,c=e.maxCutOff,p=e.gamma,v=e.outMin||0,d=e.outMax||255,x=l.width*l.height,m=h.length,g=d-v,w=[],y=[];for(r=0;r<m;r++)y[r]=c[r]-f[r],w[r]=g/(c[r]-f[r]);var k=p&&p.length>=m,b=[];if(k)for(r=0;r<m;r++)p[r]>1?p[r]>2?b[r]=6.5+Math.pow(p[r]-2,2.5):b[r]=6.5+100*Math.pow(2-p[r],4):b[r]=1;if(k)if(null!=u){for(i=0;i<x;i++)if(u[i])for(r=0;r<m;r++)o=((n=h[r][i])-f[r])/y[r],s=1,p[r]>1&&(s-=Math.pow(1/g,o*b[r])),n<c[r]&&n>f[r]?h[r][i]=Math.floor(s*g*Math.pow(o,1/p[r]))+v:n>=c[r]?h[r][i]=d:h[r][i]=v}else for(i=0;i<x;i++)for(r=0;r<m;r++)o=((n=h[r][i])-f[r])/y[r],s=1,p[r]>1&&(s-=Math.pow(1/g,o*b[r])),n<c[r]&&n>f[r]?h[r][i]=Math.floor(s*g*Math.pow(o,1/p[r]))+v:n>=c[r]?h[r][i]=d:h[r][i]=v;else if(null!=u){for(i=0;i<x;i++)if(u[i])for(r=0;r<m;r++)(n=h[r][i])<c[r]&&n>f[r]?h[r][i]=Math.floor((n-f[r])/y[r]*g)+v:n>=c[r]?h[r][i]=d:h[r][i]=v}else for(i=0;i<x;i++)for(r=0;r<m;r++)(n=h[r][i])<c[r]&&n>f[r]?h[r][i]=Math.floor((n-f[r])/y[r]*g)+v:n>=c[r]?h[r][i]=d:h[r][i]=v;return l.pixelType="u8",l.updateStatistics(),l}function v(t,e){if(!a(t))return null;var r,i,s=t.pixels,o=t.mask,l=t.width*t.height,h=s.length,u=e.lut,f=e.offset;u&&1===u[0].length&&(u=s.map((function(){return u})));var c,p,v,d=[];if(f)if(null==o)for(r=0;r<h;r++){for(c=s[r],p=u[r],v=new Uint8Array(l),i=0;i<l;i++)v[i]=p[c[i]-f];d.push(v)}else for(r=0;r<h;r++){for(c=s[r],p=u[r],v=new Uint8Array(l),i=0;i<l;i++)o[i]&&(v[i]=p[c[i]-f]);d.push(v)}else if(null==o)for(r=0;r<h;r++){for(c=s[r],p=u[r],v=new Uint8Array(l),i=0;i<l;i++)v[i]=p[c[i]];d.push(v)}else for(r=0;r<h;r++){for(c=s[r],p=u[r],v=new Uint8Array(l),i=0;i<l;i++)o[i]&&(v[i]=p[c[i]]);d.push(v)}var x=new n.a({width:t.width,height:t.height,pixels:d,mask:o,pixelType:"u8"});return x.updateStatistics(),x}function d(t,e){if(!a(t))return null;var r,i,n,s,o,l,h=t.clone(),u=h.pixels,f=h.width*h.height,c=e.length,p=Math.floor(c/2),v=e[Math.floor(p)],d=u[0],x=!1,m=new Uint8Array(f),g=new Uint8Array(f),w=new Uint8Array(f),y=h.mask,k=4===e[0].mappedColor.length;for(y||((y=new Uint8Array(f)).fill(k?255:1),h.mask=y),o=0;o<f;o++)if(y[o]){for(r=d[o],x=!1,l=p,i=v,n=0,s=c-1;s-n>1;){if(r===i.value){x=!0;break}r>i.value?n=l:s=l,l=Math.floor((n+s)/2),i=e[Math.floor(l)]}x||(r===e[n].value?(i=e[n],x=!0):r===e[s].value?(i=e[s],x=!0):r<e[n].value?(x=!1,i=null):r>e[n].value&&(r<e[s].value?(i=e[n],x=!0):s===c-1?(x=!1,i=null):(i=e[s],x=!0))),x?(m[o]=i.mappedColor[0],g[o]=i.mappedColor[1],w[o]=i.mappedColor[2],y[o]=i.mappedColor[3]):m[o]=g[o]=w[o]=y[o]=0}return h.pixels=[m,g,w],h.mask=y,h.pixelType="u8",h.maskIsAlpha=k,h}function x(t,e,r,i,n,a){var s=r.block,o=s.width,l=s.height,h=r.offset,u=h.x,f=h.y,c=r.mosaic,p=c.width,v=function(t,e,r,i,n,a,s,o){return{xmin:n<=r*t?0:n<r*t+t?n-r*t:t,ymin:a<=i*e?0:a<i*e+e?a-i*e:e,xmax:n+s<=r*t?0:n+s<r*t+t?n+s-r*t:t,ymax:a+o<=i*e?0:a+o<i*e+e?a+o-i*e:e}}(o,l,i,n,u,f,p,c.height),d=0,x=0;if(a){var m=a.hasGCSSShiftTransform?360:a.halfWorldWidth,g=o*a.resolutionX,w=a.startX+i*g;w<m&&w+g>m?x=a.rightPadding:w>=m&&(d=a.leftMargin-a.rightPadding,x=0)}if(v.xmax-=x,"number"!=typeof e)for(var y=v.ymin;y<v.ymax;y++)for(var k=(n*l+y-f)*p+(i*o-u)+d,b=y*o,M=v.xmin;M<v.xmax;M++)t[k+M]=e[b+M];else for(var A=v.ymin;A<v.ymax;A++)for(var j=(n*l+A-f)*p+(i*o-u)+d,O=v.xmin;O<v.xmax;O++)t[j+O]=e}function m(t,e,r,s,o){var l=t.filter((function(t){return a(t)}))[0];if(Object(i.j)(l))return null;for(var h,u,f=s?s.width:e.width,c=s?s.height:e.height,p=l.width,v=l.height,d=e.width/p,m=e.height/v,g={offset:r||{x:0,y:0},mosaic:s||e,block:{width:p,height:v}},w=l.pixelType,y=n.a.getPixelArrayConstructor(w),k=l.pixels.length,b=[],M=0;M<k;M++){h=new y(f*c);for(var A=0;A<m;A++)for(var j=0;j<d;j++){var O=t[A*d+j];a(O)&&x(h,O.pixels[M],g,j,A,o)}b.push(h)}if(t.some((function(t){return Object(i.j)(t)||t.mask&&t.mask.length>0}))){u=new Uint8Array(f*c);for(var U=0;U<m;U++)for(var T=0;T<d;T++){var C=t[U*d+T];x(u,(Object(i.k)(C)?C.mask:null)||(C?1:0),g,T,U,o)}}var B=new n.a({width:f,height:c,pixels:b,pixelType:w,mask:u});return B.updateStatistics(),B}function g(t,e,r){if(!a(t))return null;var i=t.width,n=t.height,s=e.x,o=e.y,l=r.width+s,h=r.height+o;if(s<0||o<0||l>i||h>n)return t;if(0===s&&0===o&&l===i&&h===n)return t;t.mask||(t.mask=new Uint8Array(i*n));for(var u=t.mask,f=0;f<n;f++)for(var c=f*i,p=0;p<i;p++)u[c+p]=f<o||f>=h||p<s||p>=l?0:1;return t.updateStatistics(),t}function w(t){if(!a(t))return null;for(var e=t.clone(),r=t.width,i=t.height,n=t.pixels,s=t.mask,o=n[0],l=e.pixels[0],h=2;h<i-1;h++){for(var u=new Map,f=h-2;f<h+2;f++)for(var c=0;c<4;c++){var p=f*r+c;b(u,o[p],s?s[p]:1)}l[h*r]=y(u),l[h*r+1]=l[h*r+2]=l[h*r];for(var v=3;v<r-1;v++){var d=(h-2)*r+v+1;b(u,o[d],s?s[d]:1),b(u,o[d=(h-1)*r+v+1],s?s[d]:1),b(u,o[d=h*r+v+1],s?s[d]:1),b(u,o[d=(h+1)*r+v+1],s?s[d]:1),k(u,o[d=(h-2)*r+v-3],s?s[d]:1),k(u,o[d=(h-1)*r+v-3],s?s[d]:1),k(u,o[d=h*r+v-3],s?s[d]:1),k(u,o[d=(h+1)*r+v-3],s?s[d]:1),l[h*r+v]=y(u)}l[h*r+v+1]=l[h*r+v]}for(var x=0;x<r;x++)l[x]=l[r+x]=l[2*r+x],l[(i-1)*r+x]=l[(i-2)*r+x];return e.updateStatistics(),e}function y(t){if(0===t.size)return 0;for(var e=0,r=-1,i=0,n=t.keys(),a=n.next();!a.done;)(i=t.get(a.value))>e&&(r=a.value,e=i),a=n.next();return r}function k(t,e,r){if(0!==r){var i=t.get(e);1===i?t.delete(e):t.set(e,i-1)}}function b(t,e,r){0!==r&&t.set(e,t.has(e)?t.get(e)+1:1)}function M(t,e,r){var i=e.x,s=e.y,o=r.width,l=r.height;if(0===i&&0===s&&l===t.height&&o===t.width)return t;var h=t.width,u=t.height,f=Math.max(0,s),c=Math.max(0,i),p=Math.min(i+o,h),v=Math.min(s+l,u);if(p<0||v<0||!a(t))return null;i=Math.max(0,-i),s=Math.max(0,-s);for(var d=t.pixels,x=t.mask,m=o*l,g=d.length,w=[],y=0;y<g;y++){for(var k=d[y],b=n.a.createEmptyBand(t.pixelType,m),M=f;M<v;M++)for(var A=M*h,j=(M+s-f)*o+i,O=c;O<p;O++)b[j++]=k[A+O];w.push(b)}for(var U=new Uint8Array(m),T=f;T<v;T++)for(var C=T*h,B=(T+s-f)*o+i,P=c;P<p;P++)U[B++]=x?x[C+P]:1;var S=new n.a({width:r.width,height:r.height,pixelType:t.pixelType,pixels:w,mask:U});return S.updateStatistics(),S}function A(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(!a(t))return null;for(var r=t.pixels,i=t.width,s=t.height,o=t.mask,l=t.pixelType,h=[],u=Math.round(i/2),f=Math.round(s/2),c=s-1,p=i-1,v=0;v<r.length;v++){for(var d=r[v],x=n.a.createEmptyBand(l,u*f),m=0,g=0;g<s;g+=2)for(var w=0;w<i;w+=2){var y=d[g*i+w];if(e){var k=w===p?y:d[g*i+w+1],b=g===c?y:d[g*i+w+i],M=w===p?b:g===c?k:d[g*i+w+i+1];x[m++]=(y+k+b+M)/4}else x[m++]=y}h.push(x)}var A=null;if(o){A=new Uint8Array(u*f);for(var j=0,O=0;O<s;O+=2)for(var U=0;U<i;U+=2){var T=o[O*i+U];if(e){var C=U===p?T:o[O*i+U+1],B=O===c?T:o[O*i+U+i],P=U===p?B:O===c?C:o[O*i+U+i+1];A[j++]=T*C*B*P?1:0}else A[j++]=T}}return new n.a({width:u,height:f,pixelType:l,pixels:h,mask:A})}function j(t,e,r){if(!a(t))return null;for(var i=e.width,n=e.height,s=t.width,o=t.height,l=new Map,h={x:0,y:0},u=null==r?1:1+r,f=t,c=0;c<u;c++){for(var p=Math.ceil(s/i),v=Math.ceil(o/n),d=0;d<v;d++){h.y=d*n;for(var x=0;x<p;x++){h.x=x*i;var m=M(f,h,e);l.set("".concat(c,"/").concat(d,"/").concat(x),m)}}c<u-1&&(f=A(f)),s=Math.round(s/2),o=Math.round(o/2)}return l}function O(t,e,r,i){var s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"nearest";if(!a(t))return null;"majority"===s&&(t=w(t));for(var o,l,h,u,f,c,p,v=t,d=v.pixels,x=v.mask,m=v.pixelType,g=t.width,y=t.height,k=n.a.getPixelArrayConstructor(m),b=d.length,M=e.width,A=e.height,j=i.cols,O=i.rows,U=Math.ceil(M/j-.1/j),T=Math.ceil(A/O-.1/O),C=!1,B=0;B<r.length;B+=3)-1===r[B]&&-1===r[B+1]&&-1===r[B+2]&&(C=!0);for(var P,S,G=U*j,I=G*T*O,F=new Float32Array(I),R=new Float32Array(I),V=0,_="majority"===s?0:.5,z=0;z<T;z++)for(var E=0;E<U;E++){l=r[o=12*(z*U+E)],h=r[o+1],u=r[o+2],f=r[o+3],c=r[o+4],p=r[o+5];for(var q=0;q<O;q++){V=(z*O+q)*G+E*j,S=(q+.5)/O;for(var D=0;D<q;D++)P=(D+.5)/j,F[V+D]=Math.round((l*P+h*S+u)*g-_),R[V+D]=Math.round((f*P+c*S+p)*y-_)}l=r[o+=6],h=r[o+1],u=r[o+2],f=r[o+3],c=r[o+4],p=r[o+5];for(var L=0;L<O;L++){V=(z*O+L)*G+E*j,S=(L+.5)/O;for(var N=L;N<j;N++)P=(N+.5)/j,F[V+N]=Math.round((l*P+h*S+u)*g-_),R[V+N]=Math.round((f*P+c*S+p)*y-_)}}for(var X,J=function(t,e){for(var r=0;r<A;r++){o=r*G;for(var i=0;i<M;i++)F[o]<0||R[o]<0?t[r*M+i]=0:t[r*M+i]=e[F[o]+R[o]*g],o++}},W=[],H=0;H<b;H++)J(X=new k(M*A),d[H]),W.push(X);var K=new n.a({width:M,height:A,pixelType:m,pixels:W});if(x)K.mask=new Uint8Array(M*A),J(K.mask,x);else if(C){K.mask=new Uint8Array(M*A);for(var Q=0;Q<M*A;Q++)K.mask[Q]=F[Q]<0||R[Q]<0?0:1}return K.updateStatistics(),K}},787:function(t,e,r){"use strict";r.d(e,"a",(function(){return y}));var i,n=r(34),a=r(2),s=r(4),o=r(6),l=r(7),h=r(0),u=(r(17),r(22)),f=r(29),c=r(25),p=r(15),v=r(3),d=r(1),x=r(64),m=r(11),g=p.a.getLogger("esri.layers.support.PixelBlock"),w=i=function(t){Object(o.a)(r,t);var e=Object(l.a)(r);function r(t){var i;return Object(a.a)(this,r),(i=e.call(this,t)).width=null,i.height=null,i.pixelType="f32",i.validPixelCount=null,i.mask=null,i.maskIsAlpha=!1,i.pixels=null,i.statistics=null,i}return Object(s.a)(r,[{key:"castPixelType",value:function(t){if(!t)return"f32";var e=t.toLowerCase();return["u1","u2","u4"].indexOf(e)>-1?e="u8":-1===["unknown","u8","s8","u16","s16","u32","s32","f32","f64"].indexOf(e)&&(e="f32"),e}},{key:"getPlaneCount",value:function(){return this.pixels&&this.pixels.length}},{key:"addData",value:function(t){if(!t.pixels||t.pixels.length!==this.width*this.height)throw new u.a("pixelblock:invalid-or-missing-pixels","add data requires valid pixels array that has same length defined by pixel block width * height");this.pixels||(this.pixels=[]),this.statistics||(this.statistics=[]),this.pixels.push(t.pixels),this.statistics.push(t.statistics||{minValue:null,maxValue:null})}},{key:"getAsRGBA",value:function(){var t=new ArrayBuffer(this.width*this.height*4);switch(this.pixelType){case"s8":case"s16":case"u16":case"s32":case"u32":case"f32":case"f64":this._fillFromNon8Bit(t);break;default:this._fillFrom8Bit(t)}return new Uint8ClampedArray(t)}},{key:"getAsRGBAFloat",value:function(){var t=new Float32Array(this.width*this.height*4);return this._fillFrom32Bit(t),t}},{key:"updateStatistics",value:function(){var t=this;this.statistics=this.pixels.map((function(e){return t._calculateBandStatistics(e,t.mask)}));var e=this.mask,r=0;if(e)for(var i=0;i<e.length;i++)e[i]&&r++;else r=this.width*this.height;this.validPixelCount=r}},{key:"clamp",value:function(t){if(t&&"f64"!==t&&"f32"!==t){var e;switch(t){case"u8":e=[0,255];break;case"u16":e=[0,65535];break;case"u32":e=[0,4294967295];break;case"s8":e=[-128,127];break;case"s16":e=[-32768,32767];break;case"s32":e=[-2147483648,2147483647];break;default:e=[-34e38,34e38]}for(var r,a,s,o=e,l=Object(n.a)(o,2),h=l[0],u=l[1],f=this.pixels,c=this.width*this.height,p=f.length,v=[],d=0;d<p;d++){s=i.createEmptyBand(t,c),r=f[d];for(var x=0;x<c;x++)a=r[x],s[x]=a>u?u:a<h?h:a;v.push(s)}this.pixels=v,this.pixelType=t}}},{key:"extractBands",value:function(t){var e=this;if(Object(v.j)(t)||0===t.length||null==this.pixels||0===this.pixels.length)return this;var r=this.pixels.length,n=t.some((function(t){return t>=e.pixels.length})),a=r===t.length&&!t.some((function(t,e){return t!==e}));return n||a?this:new i({pixelType:this.pixelType,width:this.width,height:this.height,mask:this.mask,validPixelCount:this.validPixelCount,maskIsAlpha:this.maskIsAlpha,pixels:t.map((function(t){return e.pixels[t]})),statistics:this.statistics&&t.map((function(t){return e.statistics[t]}))})}},{key:"clone",value:function(){var t,e=new i({width:this.width,height:this.height,pixelType:this.pixelType,maskIsAlpha:this.maskIsAlpha,validPixelCount:this.validPixelCount});this.mask&&(this.mask instanceof Uint8Array?e.mask=new Uint8Array(this.mask):e.mask=this.mask.slice(0));var r=i.getPixelArrayConstructor(this.pixelType);if(this.pixels&&this.pixels.length>0){e.pixels=[];var n=this.pixels[0].slice;for(t=0;t<this.pixels.length;t++)e.pixels[t]=n?this.pixels[t].slice(0,this.pixels[t].length):new r(this.pixels[t])}if(this.statistics)for(e.statistics=[],t=0;t<this.statistics.length;t++)e.statistics[t]=Object(c.a)(this.statistics[t]);return e}},{key:"_fillFrom8Bit",value:function(t){var e=this.mask,r=this.maskIsAlpha,i=this.pixels;if(t&&i&&i.length){var n,a,s,o;n=a=s=i[0],i.length>=3?(a=i[1],s=i[2]):2===i.length&&(a=i[1]);var l=new Uint32Array(t),h=this.width*this.height;if(n.length===h)if(e&&e.length===h)if(r)for(o=0;o<h;o++)e[o]&&(l[o]=e[o]<<24|s[o]<<16|a[o]<<8|n[o]);else for(o=0;o<h;o++)e[o]&&(l[o]=255<<24|s[o]<<16|a[o]<<8|n[o]);else for(o=0;o<h;o++)l[o]=255<<24|s[o]<<16|a[o]<<8|n[o];else g.error("getAsRGBA()","Unable to convert to RGBA. The pixelblock is invalid.")}else g.error("getAsRGBA()","Unable to convert to RGBA. The input pixel block is empty.")}},{key:"_fillFromNon8Bit",value:function(t){var e=this.pixels,r=this.mask,i=this.statistics;if(t&&e&&e.length){var n=this.pixelType,a=1,s=0,o=1;if(i&&i.length>0)s=i.map((function(t){return t.minValue})).reduce((function(t,e){return Math.min(t,e)})),o=i.map((function(t){return t.maxValue-t.minValue})).reduce((function(t,e){return Math.max(t,e)})),a=255/o;else{var l=255;"s8"===n?(s=-128,l=127):"u16"===n?l=65535:"s16"===n?(s=-32768,l=32767):"u32"===n?l=4294967295:"s32"===n?(s=-2147483648,l=2147483647):"f32"===n?(s=-34e38,l=34e38):"f64"===n&&(s=-Number.MAX_VALUE,l=Number.MAX_VALUE),a=255/(l-s)}var h,u,f,c,p,v=new Uint32Array(t),d=this.width*this.height;if((h=u=f=e[0]).length!==d)return g.error("getAsRGBA()","Unable to convert to RGBA. The pixelblock is invalid.");if(e.length>=2)if(u=e[1],e.length>=3&&(f=e[2]),r&&r.length===d)for(c=0;c<d;c++)r[c]&&(v[c]=255<<24|(f[c]-s)*a<<16|(u[c]-s)*a<<8|(h[c]-s)*a);else for(c=0;c<d;c++)v[c]=255<<24|(f[c]-s)*a<<16|(u[c]-s)*a<<8|(h[c]-s)*a;else if(r&&r.length===d)for(c=0;c<d;c++)p=(h[c]-s)*a,r[c]&&(v[c]=255<<24|p<<16|p<<8|p);else for(c=0;c<d;c++)p=(h[c]-s)*a,v[c]=255<<24|p<<16|p<<8|p}else g.error("getAsRGBA()","Unable to convert to RGBA. The input pixel block is empty.")}},{key:"_fillFrom32Bit",value:function(t){var e,r,i,n,a=this.pixels,s=this.mask;if(!t||!a||!a.length)return g.error("getAsRGBAFloat()","Unable to convert to RGBA. The input pixel block is empty.");e=r=i=a[0],a.length>=3?(r=a[1],i=a[2]):2===a.length&&(r=a[1]);var o=this.width*this.height;if(e.length!==o)return g.error("getAsRGBAFloat()","Unable to convert to RGBA. The pixelblock is invalid.");var l=0;if(s&&s.length===o)for(n=0;n<o;n++)t[l++]=e[n],t[l++]=r[n],t[l++]=i[n],t[l++]=1&s[n];else for(n=0;n<o;n++)t[l++]=e[n],t[l++]=r[n],t[l++]=i[n],t[l++]=1}},{key:"_calculateBandStatistics",value:function(t,e){var r,i=1/0,n=-1/0,a=t.length,s=0;if(e)for(r=0;r<a;r++)e[r]&&(i=(s=t[r])<i?s:i,n=s>n?s:n);else for(r=0;r<a;r++)i=(s=t[r])<i?s:i,n=s>n?s:n;return{minValue:i,maxValue:n}}}],[{key:"createEmptyBand",value:function(t,e){return new(i.getPixelArrayConstructor(t))(e)}},{key:"getPixelArrayConstructor",value:function(t){var e;switch(t){case"u1":case"u2":case"u4":case"u8":e=Uint8Array;break;case"u16":e=Uint16Array;break;case"u32":case"u32":e=Uint32Array;break;case"s8":e=Int8Array;break;case"s16":e=Int16Array;break;case"s32":e=Int32Array;break;case"f32":case"c64":case"c128":case"unknown":e=Float32Array;break;case"f64":e=Float64Array}return e}}]),r}(f.a);Object(h.a)([Object(d.b)({json:{write:!0}})],w.prototype,"width",void 0),Object(h.a)([Object(d.b)({json:{write:!0}})],w.prototype,"height",void 0),Object(h.a)([Object(d.b)({json:{write:!0}})],w.prototype,"pixelType",void 0),Object(h.a)([Object(x.a)("pixelType")],w.prototype,"castPixelType",null),Object(h.a)([Object(d.b)({json:{write:!0}})],w.prototype,"validPixelCount",void 0),Object(h.a)([Object(d.b)({json:{write:!0}})],w.prototype,"mask",void 0),Object(h.a)([Object(d.b)({json:{write:!0}})],w.prototype,"maskIsAlpha",void 0),Object(h.a)([Object(d.b)({json:{write:!0}})],w.prototype,"pixels",void 0),Object(h.a)([Object(d.b)({json:{write:!0}})],w.prototype,"statistics",void 0);var y=w=i=Object(h.a)([Object(m.a)("esri.layers.support.PixelBlock")],w)},788:function(t,e,r){"use strict";function i(t){return"h"in t&&"s"in t&&"v"in t}function n(t){return"l"in t&&"a"in t&&"b"in t}function a(t){return"l"in t&&"c"in t&&"h"in t}function s(t){return"x"in t&&"y"in t&&"z"in t}r.d(e,"a",(function(){return w})),r.d(e,"b",(function(){return y})),r.d(e,"c",(function(){return k})),r.d(e,"d",(function(){return g}));var o=[[.4124,.3576,.1805],[.2126,.7152,.0722],[.0193,.1192,.9505]],l=[[3.2406,-1.5372,-.4986],[-.9689,1.8758,.0415],[.0557,-.204,1.057]];function h(t,e){var r,i,n=[];if(t[0].length!==e.length)throw"dimensions do not match";var a=t.length,s=t[0].length,o=0;for(r=0;r<a;r++){for(o=0,i=0;i<s;i++)o+=t[r][i]*e[i];n.push(o)}return n}function u(t){var e=[t.r/255,t.g/255,t.b/255].map((function(t){return t<=.04045?t/12.92:Math.pow((t+.055)/1.055,2.4)})),r=h(o,e);return{x:100*r[0],y:100*r[1],z:100*r[2]}}function f(t){var e=h(l,[t.x/100,t.y/100,t.z/100]).map((function(t){var e=t<=.0031308?12.92*t:1.055*Math.pow(t,1/2.4)-.055;return Math.min(1,Math.max(e,0))}));return{r:Math.round(255*e[0]),g:Math.round(255*e[1]),b:Math.round(255*e[2])}}function c(t){var e=[t.x/95.047,t.y/100,t.z/108.883].map((function(t){return t>Math.pow(6/29,3)?Math.pow(t,1/3):1/3*Math.pow(29/6,2)*t+4/29}));return{l:116*e[1]-16,a:500*(e[0]-e[1]),b:200*(e[1]-e[2])}}function p(t){var e=t.l,r=[(e+16)/116+t.a/500,(e+16)/116,(e+16)/116-t.b/200].map((function(t){return t>6/29?Math.pow(t,3):3*Math.pow(6/29,2)*(t-4/29)}));return{x:95.047*r[0],y:100*r[1],z:108.883*r[2]}}function v(t){return c(u(t))}function d(t){return f(p(t))}function x(t){return function(t){var e=t.l,r=t.a,i=t.b,n=Math.sqrt(r*r+i*i),a=Math.atan2(i,r);return{l:e,c:n,h:a=a>0?a:a+2*Math.PI}}(c(u(t)))}function m(t){return f(p(function(t){var e=t.l,r=t.c,i=t.h;return{l:e,a:r*Math.cos(i),b:r*Math.sin(i)}}(t)))}function g(t){return function(t){return"r"in t&&"g"in t&&"b"in t}(t)?t:a(t)?m(t):n(t)?d(t):s(t)?f(t):i(t)?function(t){var e,r=(t.h+360)%360/60,i=t.s/100,n=t.v/100*255,a=n*i,s=a*(1-Math.abs(r%2-1));switch(Math.floor(r)){case 0:e={r:a,g:s,b:0};break;case 1:e={r:s,g:a,b:0};break;case 2:e={r:0,g:a,b:s};break;case 3:e={r:0,g:s,b:a};break;case 4:e={r:s,g:0,b:a};break;case 5:case 6:e={r:a,g:0,b:s};break;default:e={r:0,g:0,b:0}}return e.r=Math.round(e.r+n-a),e.g=Math.round(e.g+n-a),e.b=Math.round(e.b+n-a),e}(t):t}function w(t){return i(t)?t:function(t){var e=t.r,r=t.g,i=t.b,n=Math.max(e,r,i),a=n-Math.min(e,r,i),s=n,o=0===a?0:n===e?(r-i)/a%6:n===r?(i-e)/a+2:(e-r)/a+4,l=0===a?0:a/s;return o<0&&(o+=6),{h:o*=60,s:l*=100,v:s*=100/255}}(g(t))}function y(t){return n(t)?t:v(g(t))}function k(t){return a(t)?t:x(g(t))}}}]);
//# sourceMappingURL=11.8e4e78b8.chunk.js.map