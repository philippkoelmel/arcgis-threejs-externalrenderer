(this.webpackJsonpexample=this.webpackJsonpexample||[]).push([[94],{1095:function(t,e,n){"use strict";n.r(e),function(t,r,i){n.d(e,"b",(function(){return f}));var o,a,u,s=n(700),c={exports:{}};o=c,a=(a="undefined"!=typeof document&&document.currentScript?document.currentScript.src:void 0)||t,u=function(t){var e,o,u=void 0!==(t=t||{})?t:{};u.ready=new Promise((function(t,n){e=t,o=n}));var c,l={};for(c in u)u.hasOwnProperty(c)&&(l[c]=u[c]);var f,p,d,y;f="object"==typeof window,p="function"==typeof importScripts,d="object"==typeof r&&"object"==typeof r.versions&&"string"==typeof r.versions.node,y=!f&&!d&&!p;var h,v,m,g,b="";d?(b=p?n(759).dirname(b)+"/":i+"/",h=function(t,e){return m||(m=n(780)),g||(g=n(759)),t=g.normalize(t),m.readFileSync(t,e?null:"utf8")},v=function(t){var e=h(t,!0);return e.buffer||(e=new Uint8Array(e)),A(e.buffer),e},r.argv.length>1&&r.argv[1].replace(/\\/g,"/"),r.argv.slice(2),r.on("uncaughtException",(function(t){if(!(t instanceof He))throw t})),r.on("unhandledRejection",it),u.inspect=function(){return"[Emscripten Module object]"}):y?("undefined"!=typeof read&&(h=function(t){return read(t)}),v=function(t){var e;return"function"==typeof readbuffer?new Uint8Array(readbuffer(t)):(A("object"==typeof(e=read(t,"binary"))),e)},"undefined"!=typeof scriptArgs&&scriptArgs,"undefined"!=typeof print&&("undefined"==typeof console&&(console={}),console.log=print,console.warn=console.error="undefined"!=typeof printErr?printErr:print)):(f||p)&&(p?b=self.location.href:document.currentScript&&(b=document.currentScript.src),a&&(b=a),b=0!==b.indexOf("blob:")?b.substr(0,b.lastIndexOf("/")+1):"",h=function(t){var e=new XMLHttpRequest;return e.open("GET",t,!1),e.send(null),e.responseText},p&&(v=function(t){var e=new XMLHttpRequest;return e.open("GET",t,!1),e.responseType="arraybuffer",e.send(null),new Uint8Array(e.response)}));var $,w,C=u.print||console.log.bind(console),T=u.printErr||console.warn.bind(console);for(c in l)l.hasOwnProperty(c)&&(u[c]=l[c]);l=null,u.arguments,u.thisProgram,u.quit,u.wasmBinary&&($=u.wasmBinary),u.noExitRuntime,"object"!=typeof WebAssembly&&it("no native wasm support detected");var _=new WebAssembly.Table({initial:157,maximum:157,element:"anyfunc"}),P=!1;function A(t,e){t||it("Assertion failed: "+e)}var E="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0;function W(t,e,n){for(var r=e+n,i=e;t[i]&&!(i>=r);)++i;if(i-e>16&&t.subarray&&E)return E.decode(t.subarray(e,i));for(var o="";e<i;){var a=t[e++];if(128&a){var u=63&t[e++];if(192!=(224&a)){var s=63&t[e++];if((a=224==(240&a)?(15&a)<<12|u<<6|s:(7&a)<<18|u<<12|s<<6|63&t[e++])<65536)o+=String.fromCharCode(a);else{var c=a-65536;o+=String.fromCharCode(55296|c>>10,56320|1023&c)}}else o+=String.fromCharCode((31&a)<<6|u)}else o+=String.fromCharCode(a)}return o}function S(t,e){return t?W(M,t,e):""}var k="undefined"!=typeof TextDecoder?new TextDecoder("utf-16le"):void 0;function O(t,e){for(var n=t,r=n>>1,i=r+e/2;!(r>=i)&&L[r];)++r;if((n=r<<1)-t>32&&k)return k.decode(M.subarray(t,n));for(var o=0,a="";;){var u=V[t+2*o>>1];if(0==u||o==e/2)return a;++o,a+=String.fromCharCode(u)}}function j(t,e,n){if(void 0===n&&(n=2147483647),n<2)return 0;for(var r=e,i=(n-=2)<2*t.length?n/2:t.length,o=0;o<i;++o){var a=t.charCodeAt(o);V[e>>1]=a,e+=2}return V[e>>1]=0,e-r}function F(t){return 2*t.length}function x(t,e){for(var n=0,r="";!(n>=e/4);){var i=H[t+4*n>>2];if(0==i)break;if(++n,i>=65536){var o=i-65536;r+=String.fromCharCode(55296|o>>10,56320|1023&o)}else r+=String.fromCharCode(i)}return r}function R(t,e,n){if(void 0===n&&(n=2147483647),n<4)return 0;for(var r=e,i=r+n-4,o=0;o<t.length;++o){var a=t.charCodeAt(o);if(a>=55296&&a<=57343&&(a=65536+((1023&a)<<10)|1023&t.charCodeAt(++o)),H[e>>2]=a,(e+=4)+4>i)break}return H[e>>2]=0,e-r}function D(t){for(var e=0,n=0;n<t.length;++n){var r=t.charCodeAt(n);r>=55296&&r<=57343&&++n,e+=4}return e}var I,U,M,V,L,H,z,B,N;function G(t,e){return t%e>0&&(t+=e-t%e),t}function q(t){I=t,u.HEAP8=U=new Int8Array(t),u.HEAP16=V=new Int16Array(t),u.HEAP32=H=new Int32Array(t),u.HEAPU8=M=new Uint8Array(t),u.HEAPU16=L=new Uint16Array(t),u.HEAPU32=z=new Uint32Array(t),u.HEAPF32=B=new Float32Array(t),u.HEAPF64=N=new Float64Array(t)}var J=u.INITIAL_MEMORY||16777216;function X(t){for(;t.length>0;){var e=t.shift();if("function"!=typeof e){var n=e.func;"number"==typeof n?void 0===e.arg?u.dynCall_v(n):u.dynCall_vi(n,e.arg):n(void 0===e.arg?null:e.arg)}else e(u)}}(w=u.wasmMemory?u.wasmMemory:new WebAssembly.Memory({initial:J/65536,maximum:32768}))&&(I=w.buffer),J=I.byteLength,q(I),H[80624]=5565536;var Y=[],Z=[],K=[],Q=[];var tt=Math.ceil,et=Math.floor,nt=0,rt=null;function it(t){u.onAbort&&u.onAbort(t),T(t+=""),P=!0,t="abort("+t+"). Build with -s ASSERTIONS=1 for more info.";var e=new WebAssembly.RuntimeError(t);throw o(e),e}function ot(t,e){return String.prototype.startsWith?t.startsWith(e):0===t.indexOf(e)}u.preloadedImages={},u.preloadedAudios={};function at(t){return ot(t,"data:application/octet-stream;base64,")}function ut(t){return ot(t,"file://")}var st,ct="basis_transcoder.wasm";function lt(){try{if($)return new Uint8Array($);if(v)return v(ct);throw"both async and sync fetching of the wasm failed"}catch(T){it(T)}}at(ct)||(st=ct,ct=u.locateFile?u.locateFile(st,b):b+st),Z.push({func:function(){Ue()}});var ft={};function pt(t){for(;t.length;){var e=t.pop();t.pop()(e)}}function dt(t){return this.fromWireType(z[t>>2])}var yt={},ht={},vt={};function mt(t){if(void 0===t)return"_unknown";var e=(t=t.replace(/[^a-zA-Z0-9_]/g,"$")).charCodeAt(0);return e>=48&&e<=57?"_"+t:t}function gt(t,e){return t=mt(t),function(){return e.apply(this,arguments)}}function bt(t,e){var n=gt(e,(function(t){this.name=e,this.message=t;var n=new Error(t).stack;void 0!==n&&(this.stack=this.toString()+"\n"+n.replace(/^Error(:[^\n]*)?\n/,""))}));return n.prototype=Object.create(t.prototype),n.prototype.constructor=n,n.prototype.toString=function(){return void 0===this.message?this.name:this.name+": "+this.message},n}var $t=void 0;function wt(t){throw new $t(t)}function Ct(t,e,n){function r(e){var r=n(e);r.length!==t.length&&wt("Mismatched type converter count");for(var i=0;i<t.length;++i)Wt(t[i],r[i])}t.forEach((function(t){vt[t]=e}));var i=new Array(e.length),o=[],a=0;e.forEach((function(t,e){ht.hasOwnProperty(t)?i[e]=ht[t]:(o.push(t),yt.hasOwnProperty(t)||(yt[t]=[]),yt[t].push((function(){i[e]=ht[t],++a===o.length&&r(i)})))})),0===o.length&&r(i)}function Tt(t){switch(t){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError("Unknown type size: "+t)}}var _t=void 0;function Pt(t){for(var e="",n=t;M[n];)e+=_t[M[n++]];return e}var At=void 0;function Et(t){throw new At(t)}function Wt(t,e,n){if(n=n||{},!("argPackAdvance"in e))throw new TypeError("registerType registeredInstance requires argPackAdvance");var r=e.name;if(t||Et('type "'+r+'" must have a positive integer typeid pointer'),ht.hasOwnProperty(t)){if(n.ignoreDuplicateRegistrations)return;Et("Cannot register type '"+r+"' twice")}if(ht[t]=e,delete vt[t],yt.hasOwnProperty(t)){var i=yt[t];delete yt[t],i.forEach((function(t){t()}))}}function St(t){if(!(this instanceof zt))return!1;if(!(t instanceof zt))return!1;for(var e=this.$$.ptrType.registeredClass,n=this.$$.ptr,r=t.$$.ptrType.registeredClass,i=t.$$.ptr;e.baseClass;)n=e.upcast(n),e=e.baseClass;for(;r.baseClass;)i=r.upcast(i),r=r.baseClass;return e===r&&n===i}function kt(t){return{count:t.count,deleteScheduled:t.deleteScheduled,preservePointerOnDelete:t.preservePointerOnDelete,ptr:t.ptr,ptrType:t.ptrType,smartPtr:t.smartPtr,smartPtrType:t.smartPtrType}}function Ot(t){Et(function(t){return t.$$.ptrType.registeredClass.name}(t)+" instance already deleted")}var jt=!1;function Ft(t){}function xt(t){t.count.value-=1,0===t.count.value&&function(t){t.smartPtr?t.smartPtrType.rawDestructor(t.smartPtr):t.ptrType.registeredClass.rawDestructor(t.ptr)}(t)}function Rt(t){return"undefined"==typeof FinalizationGroup?(Rt=function(t){return t},t):(jt=new FinalizationGroup((function(t){for(var e=t.next();!e.done;e=t.next()){var n=e.value;n.ptr?xt(n):console.warn("object already deleted: "+n.ptr)}})),Rt=function(t){return jt.register(t,t.$$,t.$$),t},Ft=function(t){jt.unregister(t.$$)},Rt(t))}function Dt(){if(this.$$.ptr||Ot(this),this.$$.preservePointerOnDelete)return this.$$.count.value+=1,this;var t=Rt(Object.create(Object.getPrototypeOf(this),{$$:{value:kt(this.$$)}}));return t.$$.count.value+=1,t.$$.deleteScheduled=!1,t}function It(){this.$$.ptr||Ot(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&Et("Object already scheduled for deletion"),Ft(this),xt(this.$$),this.$$.preservePointerOnDelete||(this.$$.smartPtr=void 0,this.$$.ptr=void 0)}function Ut(){return!this.$$.ptr}var Mt=void 0,Vt=[];function Lt(){for(;Vt.length;){var t=Vt.pop();t.$$.deleteScheduled=!1,t.delete()}}function Ht(){return this.$$.ptr||Ot(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&Et("Object already scheduled for deletion"),Vt.push(this),1===Vt.length&&Mt&&Mt(Lt),this.$$.deleteScheduled=!0,this}function zt(){}var Bt={};function Nt(t,e,n){if(void 0===t[e].overloadTable){var r=t[e];t[e]=function(){return t[e].overloadTable.hasOwnProperty(arguments.length)||Et("Function '"+n+"' called with an invalid number of arguments ("+arguments.length+") - expects one of ("+t[e].overloadTable+")!"),t[e].overloadTable[arguments.length].apply(this,arguments)},t[e].overloadTable=[],t[e].overloadTable[r.argCount]=r}}function Gt(t,e,n){u.hasOwnProperty(t)?((void 0===n||void 0!==u[t].overloadTable&&void 0!==u[t].overloadTable[n])&&Et("Cannot register public name '"+t+"' twice"),Nt(u,t,t),u.hasOwnProperty(n)&&Et("Cannot register multiple overloads of a function with the same number of arguments ("+n+")!"),u[t].overloadTable[n]=e):(u[t]=e,void 0!==n&&(u[t].numArguments=n))}function qt(t,e,n,r,i,o,a,u){this.name=t,this.constructor=e,this.instancePrototype=n,this.rawDestructor=r,this.baseClass=i,this.getActualType=o,this.upcast=a,this.downcast=u,this.pureVirtualFunctions=[]}function Jt(t,e,n){for(;e!==n;)e.upcast||Et("Expected null or instance of "+n.name+", got an instance of "+e.name),t=e.upcast(t),e=e.baseClass;return t}function Xt(t,e){if(null===e)return this.isReference&&Et("null is not a valid "+this.name),0;e.$$||Et('Cannot pass "'+Pe(e)+'" as a '+this.name),e.$$.ptr||Et("Cannot pass deleted object as a pointer of type "+this.name);var n=e.$$.ptrType.registeredClass;return Jt(e.$$.ptr,n,this.registeredClass)}function Yt(t,e){var n;if(null===e)return this.isReference&&Et("null is not a valid "+this.name),this.isSmartPointer?(n=this.rawConstructor(),null!==t&&t.push(this.rawDestructor,n),n):0;e.$$||Et('Cannot pass "'+Pe(e)+'" as a '+this.name),e.$$.ptr||Et("Cannot pass deleted object as a pointer of type "+this.name),!this.isConst&&e.$$.ptrType.isConst&&Et("Cannot convert argument of type "+(e.$$.smartPtrType?e.$$.smartPtrType.name:e.$$.ptrType.name)+" to parameter type "+this.name);var r=e.$$.ptrType.registeredClass;if(n=Jt(e.$$.ptr,r,this.registeredClass),this.isSmartPointer)switch(void 0===e.$$.smartPtr&&Et("Passing raw pointer to smart pointer is illegal"),this.sharingPolicy){case 0:e.$$.smartPtrType===this?n=e.$$.smartPtr:Et("Cannot convert argument of type "+(e.$$.smartPtrType?e.$$.smartPtrType.name:e.$$.ptrType.name)+" to parameter type "+this.name);break;case 1:n=e.$$.smartPtr;break;case 2:if(e.$$.smartPtrType===this)n=e.$$.smartPtr;else{var i=e.clone();n=this.rawShare(n,Ce((function(){i.delete()}))),null!==t&&t.push(this.rawDestructor,n)}break;default:Et("Unsupporting sharing policy")}return n}function Zt(t,e){if(null===e)return this.isReference&&Et("null is not a valid "+this.name),0;e.$$||Et('Cannot pass "'+Pe(e)+'" as a '+this.name),e.$$.ptr||Et("Cannot pass deleted object as a pointer of type "+this.name),e.$$.ptrType.isConst&&Et("Cannot convert argument of type "+e.$$.ptrType.name+" to parameter type "+this.name);var n=e.$$.ptrType.registeredClass;return Jt(e.$$.ptr,n,this.registeredClass)}function Kt(t){return this.rawGetPointee&&(t=this.rawGetPointee(t)),t}function Qt(t){this.rawDestructor&&this.rawDestructor(t)}function te(t){null!==t&&t.delete()}function ee(t,e,n){if(e===n)return t;if(void 0===n.baseClass)return null;var r=ee(t,e,n.baseClass);return null===r?null:n.downcast(r)}function ne(){return Object.keys(oe).length}function re(){var t=[];for(var e in oe)oe.hasOwnProperty(e)&&t.push(oe[e]);return t}function ie(t){Mt=t,Vt.length&&Mt&&Mt(Lt)}var oe={};function ae(t,e){return e=function(t,e){for(void 0===e&&Et("ptr should not be undefined");t.baseClass;)e=t.upcast(e),t=t.baseClass;return e}(t,e),oe[e]}function ue(t,e){return e.ptrType&&e.ptr||wt("makeClassHandle requires ptr and ptrType"),!!e.smartPtrType!=!!e.smartPtr&&wt("Both smartPtrType and smartPtr must be specified"),e.count={value:1},Rt(Object.create(t,{$$:{value:e}}))}function se(t){var e=this.getPointee(t);if(!e)return this.destructor(t),null;var n=ae(this.registeredClass,e);if(void 0!==n){if(0===n.$$.count.value)return n.$$.ptr=e,n.$$.smartPtr=t,n.clone();var r=n.clone();return this.destructor(t),r}function i(){return this.isSmartPointer?ue(this.registeredClass.instancePrototype,{ptrType:this.pointeeType,ptr:e,smartPtrType:this,smartPtr:t}):ue(this.registeredClass.instancePrototype,{ptrType:this,ptr:t})}var o,a=this.registeredClass.getActualType(e),u=Bt[a];if(!u)return i.call(this);o=this.isConst?u.constPointerType:u.pointerType;var s=ee(e,this.registeredClass,o.registeredClass);return null===s?i.call(this):this.isSmartPointer?ue(o.registeredClass.instancePrototype,{ptrType:o,ptr:s,smartPtrType:this,smartPtr:t}):ue(o.registeredClass.instancePrototype,{ptrType:o,ptr:s})}function ce(t,e,n,r,i,o,a,u,s,c,l){this.name=t,this.registeredClass=e,this.isReference=n,this.isConst=r,this.isSmartPointer=i,this.pointeeType=o,this.sharingPolicy=a,this.rawGetPointee=u,this.rawConstructor=s,this.rawShare=c,this.rawDestructor=l,i||void 0!==e.baseClass?this.toWireType=Yt:r?(this.toWireType=Xt,this.destructorFunction=null):(this.toWireType=Zt,this.destructorFunction=null)}function le(t,e,n){u.hasOwnProperty(t)||wt("Replacing nonexistant public symbol"),void 0!==u[t].overloadTable&&void 0!==n?u[t].overloadTable[n]=e:(u[t]=e,u[t].argCount=n)}function fe(t,e){t=Pt(t);var n=function(t){var n=[e];return function(){n.length=arguments.length+1;for(var e=0;e<arguments.length;e++)n[e+1]=arguments[e];return t.apply(null,n)}}(u["dynCall_"+t]);return"function"!=typeof n&&Et("unknown function pointer with signature "+t+": "+e),n}var pe=void 0;function de(t){var e=Le(t),n=Pt(e);return Ve(e),n}function ye(t,e){var n=[],r={};throw e.forEach((function t(e){r[e]||ht[e]||(vt[e]?vt[e].forEach(t):(n.push(e),r[e]=!0))})),new pe(t+": "+n.map(de).join([", "]))}function he(t,e){for(var n=[],r=0;r<t;r++)n.push(H[(e>>2)+r]);return n}function ve(t,e,n,r,i){var o=e.length;o<2&&Et("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var a=null!==e[1]&&null!==n,u=!1,s=1;s<e.length;++s)if(null!==e[s]&&void 0===e[s].destructorFunction){u=!0;break}var c="void"!==e[0].name,l=o-2,f=new Array(l),p=[],d=[];return function(){var n;arguments.length!==l&&Et("function "+t+" called with "+arguments.length+" arguments, expected "+l+" args!"),d.length=0,p.length=a?2:1,p[0]=i,a&&(n=e[1].toWireType(d,this),p[1]=n);for(var o=0;o<l;++o)f[o]=e[o+2].toWireType(d,arguments[o]),p.push(f[o]);var s=r.apply(null,p);if(u)pt(d);else for(o=a?1:2;o<e.length;o++){var y=1===o?n:f[o-2];null!==e[o].destructorFunction&&e[o].destructorFunction(y)}if(c)return e[0].fromWireType(s)}}var me=[],ge=[{},{value:void 0},{value:null},{value:!0},{value:!1}];function be(t){t>4&&0==--ge[t].refcount&&(ge[t]=void 0,me.push(t))}function $e(){for(var t=0,e=5;e<ge.length;++e)void 0!==ge[e]&&++t;return t}function we(){for(var t=5;t<ge.length;++t)if(void 0!==ge[t])return ge[t];return null}function Ce(t){switch(t){case void 0:return 1;case null:return 2;case!0:return 3;case!1:return 4;default:var e=me.length?me.pop():ge.length;return ge[e]={refcount:1,value:t},e}}function Te(t,e,n){switch(e){case 0:return function(t){var e=n?U:M;return this.fromWireType(e[t])};case 1:return function(t){var e=n?V:L;return this.fromWireType(e[t>>1])};case 2:return function(t){var e=n?H:z;return this.fromWireType(e[t>>2])};default:throw new TypeError("Unknown integer type: "+t)}}function _e(t,e){var n=ht[t];return void 0===n&&Et(e+" has unknown type "+de(t)),n}function Pe(t){if(null===t)return"null";var e=typeof t;return"object"===e||"array"===e||"function"===e?t.toString():""+t}function Ae(t,e){switch(e){case 2:return function(t){return this.fromWireType(B[t>>2])};case 3:return function(t){return this.fromWireType(N[t>>3])};default:throw new TypeError("Unknown float type: "+t)}}function Ee(t,e,n){switch(e){case 0:return n?function(t){return U[t]}:function(t){return M[t]};case 1:return n?function(t){return V[t>>1]}:function(t){return L[t>>1]};case 2:return n?function(t){return H[t>>2]}:function(t){return z[t>>2]};default:throw new TypeError("Unknown integer type: "+t)}}function We(t){return t||Et("Cannot use deleted val. handle = "+t),ge[t].value}var Se={};function ke(t){var e=Se[t];return void 0===e?Pt(t):e}var Oe=[];function je(){if("object"==typeof globalThis)return globalThis;function t(t){t.$$$embind_global$$$=t;var e="object"==typeof $$$embind_global$$$&&t.$$$embind_global$$$===t;return e||delete t.$$$embind_global$$$,e}if("object"==typeof $$$embind_global$$$)return $$$embind_global$$$;if("object"==typeof s.b&&t(s.b)?$$$embind_global$$$=s.b:"object"==typeof self&&t(self)&&($$$embind_global$$$=self),"object"==typeof $$$embind_global$$$)return $$$embind_global$$$;throw Error("unable to get global object.")}var Fe={};function xe(e){try{return w.grow(e-I.byteLength+65535>>>16),q(w.buffer),1}catch(t){}}var Re={mappings:{},buffers:[null,[],[]],printChar:function(t,e){var n=Re.buffers[t];0===e||10===e?((1===t?C:T)(W(n,0)),n.length=0):n.push(e)},varargs:void 0,get:function(){return Re.varargs+=4,H[Re.varargs-4>>2]},getStr:function(t){return S(t)},get64:function(t,e){return t}};$t=u.InternalError=bt(Error,"InternalError"),function(){for(var t=new Array(256),e=0;e<256;++e)t[e]=String.fromCharCode(e);_t=t}(),At=u.BindingError=bt(Error,"BindingError"),zt.prototype.isAliasOf=St,zt.prototype.clone=Dt,zt.prototype.delete=It,zt.prototype.isDeleted=Ut,zt.prototype.deleteLater=Ht,ce.prototype.getPointee=Kt,ce.prototype.destructor=Qt,ce.prototype.argPackAdvance=8,ce.prototype.readValueFromPointer=dt,ce.prototype.deleteObject=te,ce.prototype.fromWireType=se,u.getInheritedInstanceCount=ne,u.getLiveInheritedInstances=re,u.flushPendingDeletes=Lt,u.setDelayFunction=ie,pe=u.UnboundTypeError=bt(Error,"UnboundTypeError"),u.count_emval_handles=$e,u.get_first_emval=we;var De={u:function(t){var e=ft[t];delete ft[t];var n=e.rawConstructor,r=e.rawDestructor,i=e.fields;Ct([t],i.map((function(t){return t.getterReturnType})).concat(i.map((function(t){return t.setterArgumentType}))),(function(t){var o={};return i.forEach((function(e,n){var r=e.fieldName,a=t[n],u=e.getter,s=e.getterContext,c=t[n+i.length],l=e.setter,f=e.setterContext;o[r]={read:function(t){return a.fromWireType(u(s,t))},write:function(t,e){var n=[];l(f,t,c.toWireType(n,e)),pt(n)}}})),[{name:e.name,fromWireType:function(t){var e={};for(var n in o)e[n]=o[n].read(t);return r(t),e},toWireType:function(t,e){for(var i in o)if(!(i in e))throw new TypeError('Missing field:  "'+i+'"');var a=n();for(i in o)o[i].write(a,e[i]);return null!==t&&t.push(r,a),a},argPackAdvance:8,readValueFromPointer:dt,destructorFunction:r}]}))},J:function(t,e,n,r,i){var o=Tt(n);Wt(t,{name:e=Pt(e),fromWireType:function(t){return!!t},toWireType:function(t,e){return e?r:i},argPackAdvance:8,readValueFromPointer:function(t){var r;if(1===n)r=U;else if(2===n)r=V;else{if(4!==n)throw new TypeError("Unknown boolean type size: "+e);r=H}return this.fromWireType(r[t>>o])},destructorFunction:null})},y:function(t,e,n,r,i,o,a,u,s,c,l,f,p){l=Pt(l),o=fe(i,o),u&&(u=fe(a,u)),c&&(c=fe(s,c)),p=fe(f,p);var d=mt(l);Gt(d,(function(){ye("Cannot construct "+l+" due to unbound types",[r])})),Ct([t,e,n],r?[r]:[],(function(e){var n,i;e=e[0],i=r?(n=e.registeredClass).instancePrototype:zt.prototype;var a=gt(d,(function(){if(Object.getPrototypeOf(this)!==s)throw new At("Use 'new' to construct "+l);if(void 0===f.constructor_body)throw new At(l+" has no accessible constructor");var t=f.constructor_body[arguments.length];if(void 0===t)throw new At("Tried to invoke ctor of "+l+" with invalid number of parameters ("+arguments.length+") - expected ("+Object.keys(f.constructor_body).toString()+") parameters instead!");return t.apply(this,arguments)})),s=Object.create(i,{constructor:{value:a}});a.prototype=s;var f=new qt(l,a,s,p,n,o,u,c),y=new ce(l,f,!0,!1,!1),h=new ce(l+"*",f,!1,!1,!1),v=new ce(l+" const*",f,!1,!0,!1);return Bt[t]={pointerType:h,constPointerType:v},le(d,a),[y,h,v]}))},x:function(t,e,n,r,i,o){A(e>0);var a=he(e,n);i=fe(r,i);var u=[o],s=[];Ct([],[t],(function(t){var n="constructor "+(t=t[0]).name;if(void 0===t.registeredClass.constructor_body&&(t.registeredClass.constructor_body=[]),void 0!==t.registeredClass.constructor_body[e-1])throw new At("Cannot register multiple constructors with identical number of parameters ("+(e-1)+") for class '"+t.name+"'! Overload resolution is currently only performed using the parameter count, not actual type info!");return t.registeredClass.constructor_body[e-1]=function(){ye("Cannot construct "+t.name+" due to unbound types",a)},Ct([],a,(function(r){return t.registeredClass.constructor_body[e-1]=function(){arguments.length!==e-1&&Et(n+" called with "+arguments.length+" arguments, expected "+(e-1)),s.length=0,u.length=e;for(var t=1;t<e;++t)u[t]=r[t].toWireType(s,arguments[t-1]);var o=i.apply(null,u);return pt(s),r[0].fromWireType(o)},[]})),[]}))},d:function(t,e,n,r,i,o,a,u){var s=he(n,r);e=Pt(e),o=fe(i,o),Ct([],[t],(function(t){var r=(t=t[0]).name+"."+e;function i(){ye("Cannot call "+r+" due to unbound types",s)}u&&t.registeredClass.pureVirtualFunctions.push(e);var c=t.registeredClass.instancePrototype,l=c[e];return void 0===l||void 0===l.overloadTable&&l.className!==t.name&&l.argCount===n-2?(i.argCount=n-2,i.className=t.name,c[e]=i):(Nt(c,e,r),c[e].overloadTable[n-2]=i),Ct([],s,(function(i){var u=ve(r,i,t,o,a);return void 0===c[e].overloadTable?(u.argCount=n-2,c[e]=u):c[e].overloadTable[n-2]=u,[]})),[]}))},k:function(t,e,n){t=Pt(t),Ct([],[e],(function(e){return e=e[0],u[t]=e.fromWireType(n),[]}))},I:function(t,e){Wt(t,{name:e=Pt(e),fromWireType:function(t){var e=ge[t].value;return be(t),e},toWireType:function(t,e){return Ce(e)},argPackAdvance:8,readValueFromPointer:dt,destructorFunction:null})},n:function(t,e,n,r){var i=Tt(n);function o(){}e=Pt(e),o.values={},Wt(t,{name:e,constructor:o,fromWireType:function(t){return this.constructor.values[t]},toWireType:function(t,e){return e.value},argPackAdvance:8,readValueFromPointer:Te(e,i,r),destructorFunction:null}),Gt(e,o)},a:function(t,e,n){var r=_e(t,"enum");e=Pt(e);var i=r.constructor,o=Object.create(r.constructor.prototype,{value:{value:n},constructor:{value:gt(r.name+"_"+e,(function(){}))}});i.values[n]=o,i[e]=o},B:function(t,e,n){var r=Tt(n);Wt(t,{name:e=Pt(e),fromWireType:function(t){return t},toWireType:function(t,e){if("number"!=typeof e&&"boolean"!=typeof e)throw new TypeError('Cannot convert "'+Pe(e)+'" to '+this.name);return e},argPackAdvance:8,readValueFromPointer:Ae(e,r),destructorFunction:null})},i:function(t,e,n,r,i,o){var a=he(e,n);t=Pt(t),i=fe(r,i),Gt(t,(function(){ye("Cannot call "+t+" due to unbound types",a)}),e-1),Ct([],a,(function(n){var r=[n[0],null].concat(n.slice(1));return le(t,ve(t,r,null,i,o),e-1),[]}))},j:function(t,e,n,r,i){e=Pt(e),-1===i&&(i=4294967295);var o=Tt(n),a=function(t){return t};if(0===r){var u=32-8*n;a=function(t){return t<<u>>>u}}var s=-1!=e.indexOf("unsigned");Wt(t,{name:e,fromWireType:a,toWireType:function(t,n){if("number"!=typeof n&&"boolean"!=typeof n)throw new TypeError('Cannot convert "'+Pe(n)+'" to '+this.name);if(n<r||n>i)throw new TypeError('Passing a number "'+Pe(n)+'" from JS side to C/C++ side to an argument of type "'+e+'", which is outside the valid range ['+r+", "+i+"]!");return s?n>>>0:0|n},argPackAdvance:8,readValueFromPointer:Ee(e,o,0!==r),destructorFunction:null})},h:function(t,e,n){var r=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array][e];function i(t){var e=z,n=e[t>>=2],i=e[t+1];return new r(I,i,n)}Wt(t,{name:n=Pt(n),fromWireType:i,argPackAdvance:8,readValueFromPointer:i},{ignoreDuplicateRegistrations:!0})},C:function(t,e){var n="std::string"===(e=Pt(e));Wt(t,{name:e,fromWireType:function(t){var e,r=z[t>>2];if(n)for(var i=t+4,o=0;o<=r;++o){var a=t+4+o;if(o==r||0==M[a]){var u=S(i,a-i);void 0===e?e=u:(e+=String.fromCharCode(0),e+=u),i=a+1}}else{var s=new Array(r);for(o=0;o<r;++o)s[o]=String.fromCharCode(M[t+4+o]);e=s.join("")}return Ve(t),e},toWireType:function(t,e){e instanceof ArrayBuffer&&(e=new Uint8Array(e));var r="string"==typeof e;r||e instanceof Uint8Array||e instanceof Uint8ClampedArray||e instanceof Int8Array||Et("Cannot pass non-string to std::string");var i=(n&&r?function(){return function(t){for(var e=0,n=0;n<t.length;++n){var r=t.charCodeAt(n);r>=55296&&r<=57343&&(r=65536+((1023&r)<<10)|1023&t.charCodeAt(++n)),r<=127?++e:e+=r<=2047?2:r<=65535?3:4}return e}(e)}:function(){return e.length})(),o=Me(4+i+1);if(z[o>>2]=i,n&&r)!function(t,e,n){(function(t,e,n,r){if(!(r>0))return 0;for(var i=n,o=n+r-1,a=0;a<t.length;++a){var u=t.charCodeAt(a);if(u>=55296&&u<=57343&&(u=65536+((1023&u)<<10)|1023&t.charCodeAt(++a)),u<=127){if(n>=o)break;e[n++]=u}else if(u<=2047){if(n+1>=o)break;e[n++]=192|u>>6,e[n++]=128|63&u}else if(u<=65535){if(n+2>=o)break;e[n++]=224|u>>12,e[n++]=128|u>>6&63,e[n++]=128|63&u}else{if(n+3>=o)break;e[n++]=240|u>>18,e[n++]=128|u>>12&63,e[n++]=128|u>>6&63,e[n++]=128|63&u}}e[n]=0})(t,M,e,n)}(e,o+4,i+1);else if(r)for(var a=0;a<i;++a){var u=e.charCodeAt(a);u>255&&(Ve(o),Et("String has UTF-16 code units that do not fit in 8 bits")),M[o+4+a]=u}else for(a=0;a<i;++a)M[o+4+a]=e[a];return null!==t&&t.push(Ve,o),o},argPackAdvance:8,readValueFromPointer:dt,destructorFunction:function(t){Ve(t)}})},w:function(t,e,n){var r,i,o,a,u;n=Pt(n),2===e?(r=O,i=j,a=F,o=function(){return L},u=1):4===e&&(r=x,i=R,a=D,o=function(){return z},u=2),Wt(t,{name:n,fromWireType:function(t){for(var n,i=z[t>>2],a=o(),s=t+4,c=0;c<=i;++c){var l=t+4+c*e;if(c==i||0==a[l>>u]){var f=r(s,l-s);void 0===n?n=f:(n+=String.fromCharCode(0),n+=f),s=l+e}}return Ve(t),n},toWireType:function(t,r){"string"!=typeof r&&Et("Cannot pass non-string to C++ string type "+n);var o=a(r),s=Me(4+o+e);return z[s>>2]=o>>u,i(r,s+4,o+e),null!==t&&t.push(Ve,s),s},argPackAdvance:8,readValueFromPointer:dt,destructorFunction:function(t){Ve(t)}})},v:function(t,e,n,r,i,o){ft[t]={name:Pt(e),rawConstructor:fe(n,r),rawDestructor:fe(i,o),fields:[]}},c:function(t,e,n,r,i,o,a,u,s,c){ft[t].fields.push({fieldName:Pt(e),getterReturnType:n,getter:fe(r,i),getterContext:o,setterArgumentType:a,setter:fe(u,s),setterContext:c})},K:function(t,e){Wt(t,{isVoid:!0,name:e=Pt(e),argPackAdvance:0,fromWireType:function(){},toWireType:function(t,e){}})},m:function(t,e,n){t=We(t),e=_e(e,"emval::as");var r=[],i=Ce(r);return H[n>>2]=i,e.toWireType(r,t)},s:function(t,e,n,r){(t=Oe[t])(e=We(e),n=ke(n),null,r)},b:be,z:function(t){return 0===t?Ce(je()):(t=ke(t),Ce(je()[t]))},t:function(t,e){var n=function(t,e){for(var n=new Array(t),r=0;r<t;++r)n[r]=_e(H[(e>>2)+r],"parameter "+r);return n}(t,e),r=n[0],i=new Array(t-1);return function(t){var e=Oe.length;return Oe.push(t),e}((function(e,o,a,u){for(var s=0,c=0;c<t-1;++c)i[c]=n[c+1].readValueFromPointer(u+s),s+=n[c+1].argPackAdvance;var l=e[o].apply(e,i);for(c=0;c<t-1;++c)n[c+1].deleteObject&&n[c+1].deleteObject(i[c]);if(!r.isVoid)return r.toWireType(a,l)}))},r:function(t){return t=ke(t),Ce(u[t])},e:function(t,e){return Ce((t=We(t))[e=We(e)])},g:function(t){t>4&&(ge[t].refcount+=1)},q:function(t,e,n,r){t=We(t);var i=Fe[e];return i||(i=function(t){var e=new Array(t+1);return function(n,r,i){e[0]=n;for(var o=0;o<t;++o){var a=_e(H[(r>>2)+o],"parameter "+o);e[o+1]=a.readValueFromPointer(i),i+=a.argPackAdvance}return Ce(new(n.bind.apply(n,e)))}}(e),Fe[e]=i),i(t,n,r)},f:function(t){return Ce(ke(t))},l:function(t){pt(ge[t].value),be(t)},p:function(){it()},F:function(t,e,n){M.copyWithin(t,e,e+n)},G:function(t){t>>>=0;var e=M.length,n=2147483648;if(t>n)return!1;for(var r=1;r<=4;r*=2){var i=e*(1+.2/r);if(i=Math.min(i,t+100663296),xe(Math.min(n,G(Math.max(16777216,t,i),65536))))return!0}return!1},H:function(t){return 0},D:function(t,e,n,r,i){},A:function(t,e,n,r){for(var i=0,o=0;o<n;o++){for(var a=H[e+8*o>>2],u=H[e+(8*o+4)>>2],s=0;s<u;s++)Re.printChar(t,M[a+s]);i+=u}return H[r>>2]=i,0},memory:w,o:function(t){return(t=+t)>=0?+et(t+.5):+tt(t-.5)},E:function(t){},table:_};!function(){var t={a:De};function e(t,e){var n=t.exports;u.asm=n,function(t){if(nt--,u.monitorRunDependencies&&u.monitorRunDependencies(nt),0==nt&&rt){var e=rt;rt=null,e()}}()}function n(t){e(t.instance)}function r(e){return($||!f&&!p||"function"!=typeof fetch||ut(ct)?new Promise((function(t,e){t(lt())})):fetch(ct,{credentials:"same-origin"}).then((function(t){if(!t.ok)throw"failed to load wasm binary file at '"+ct+"'";return t.arrayBuffer()})).catch((function(){return lt()}))).then((function(e){return WebAssembly.instantiate(e,t)})).then(e,(function(t){T("failed to asynchronously prepare wasm: "+t),it(t)}))}if(nt++,u.monitorRunDependencies&&u.monitorRunDependencies(nt),u.instantiateWasm)try{return u.instantiateWasm(t,e)}catch(c){return T("Module.instantiateWasm callback failed with error: "+c),!1}(function(){if($||"function"!=typeof WebAssembly.instantiateStreaming||at(ct)||ut(ct)||"function"!=typeof fetch)return r(n);fetch(ct,{credentials:"same-origin"}).then((function(e){return WebAssembly.instantiateStreaming(e,t).then(n,(function(t){return T("wasm streaming compile failed: "+t),T("falling back to ArrayBuffer instantiation"),r(n)}))}))})()}();var Ie,Ue=u.___wasm_call_ctors=function(){return(Ue=u.___wasm_call_ctors=u.asm.L).apply(null,arguments)},Me=u._malloc=function(){return(Me=u._malloc=u.asm.M).apply(null,arguments)},Ve=u._free=function(){return(Ve=u._free=u.asm.N).apply(null,arguments)},Le=u.___getTypeName=function(){return(Le=u.___getTypeName=u.asm.O).apply(null,arguments)};function He(t){this.name="ExitStatus",this.message="Program terminated with exit("+t+")",this.status=t}function ze(t){function n(){Ie||(Ie=!0,u.calledRun=!0,P||(X(Z),X(K),e(u),u.onRuntimeInitialized&&u.onRuntimeInitialized(),function(){if(u.postRun)for("function"==typeof u.postRun&&(u.postRun=[u.postRun]);u.postRun.length;)t=u.postRun.shift(),Q.unshift(t);var t;X(Q)}()))}nt>0||(function(){if(u.preRun)for("function"==typeof u.preRun&&(u.preRun=[u.preRun]);u.preRun.length;)t=u.preRun.shift(),Y.unshift(t);var t;X(Y)}(),nt>0||(u.setStatus?(u.setStatus("Running..."),setTimeout((function(){setTimeout((function(){u.setStatus("")}),1),n()}),1)):n()))}if(u.___embind_register_native_and_builtin_types=function(){return(u.___embind_register_native_and_builtin_types=u.asm.P).apply(null,arguments)},u.dynCall_viii=function(){return(u.dynCall_viii=u.asm.Q).apply(null,arguments)},u.dynCall_vi=function(){return(u.dynCall_vi=u.asm.R).apply(null,arguments)},u.dynCall_v=function(){return(u.dynCall_v=u.asm.S).apply(null,arguments)},u.dynCall_i=function(){return(u.dynCall_i=u.asm.T).apply(null,arguments)},u.dynCall_iii=function(){return(u.dynCall_iii=u.asm.U).apply(null,arguments)},u.dynCall_ii=function(){return(u.dynCall_ii=u.asm.V).apply(null,arguments)},u.dynCall_vii=function(){return(u.dynCall_vii=u.asm.W).apply(null,arguments)},u.dynCall_iiii=function(){return(u.dynCall_iiii=u.asm.X).apply(null,arguments)},u.dynCall_iiiii=function(){return(u.dynCall_iiiii=u.asm.Y).apply(null,arguments)},u.dynCall_iiiiii=function(){return(u.dynCall_iiiiii=u.asm.Z).apply(null,arguments)},u.dynCall_iiiiiiii=function(){return(u.dynCall_iiiiiiii=u.asm._).apply(null,arguments)},u.dynCall_iiiiiiiii=function(){return(u.dynCall_iiiiiiiii=u.asm.$).apply(null,arguments)},u.dynCall_viiii=function(){return(u.dynCall_viiii=u.asm.aa).apply(null,arguments)},u.dynCall_iiiiiii=function(){return(u.dynCall_iiiiiii=u.asm.ba).apply(null,arguments)},u.dynCall_iiiiiiiiiiiiiiiiiiii=function(){return(u.dynCall_iiiiiiiiiiiiiiiiiiii=u.asm.ca).apply(null,arguments)},u.dynCall_iiiiiiiiiiiiiiiiiiiii=function(){return(u.dynCall_iiiiiiiiiiiiiiiiiiiii=u.asm.da).apply(null,arguments)},u.dynCall_iiiiiiiiiiiiiiiiiii=function(){return(u.dynCall_iiiiiiiiiiiiiiiiiii=u.asm.ea).apply(null,arguments)},u.dynCall_viiiii=function(){return(u.dynCall_viiiii=u.asm.fa).apply(null,arguments)},u.dynCall_iiiiiiiiii=function(){return(u.dynCall_iiiiiiiiii=u.asm.ga).apply(null,arguments)},u.dynCall_iiiiiiiiiii=function(){return(u.dynCall_iiiiiiiiiii=u.asm.ha).apply(null,arguments)},u.dynCall_jiji=function(){return(u.dynCall_jiji=u.asm.ia).apply(null,arguments)},u.dynCall_viiiiii=function(){return(u.dynCall_viiiiii=u.asm.ja).apply(null,arguments)},rt=function t(){Ie||ze(),Ie||(rt=t)},u.run=ze,u.preInit)for("function"==typeof u.preInit&&(u.preInit=[u.preInit]);u.preInit.length>0;)u.preInit.pop()();return ze(),t.ready},o.exports=u;var l=c.exports,f=Object.freeze(Object.assign(Object.create(null),c.exports,{default:l}))}.call(this,"/index.js",n(779),"/")},779:function(t,e){var n,r,i=t.exports={};function o(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function u(t){if(n===setTimeout)return setTimeout(t,0);if((n===o||!n)&&setTimeout)return n=setTimeout,setTimeout(t,0);try{return n(t,0)}catch(e){try{return n.call(null,t,0)}catch(e){return n.call(this,t,0)}}}!function(){try{n="function"===typeof setTimeout?setTimeout:o}catch(t){n=o}try{r="function"===typeof clearTimeout?clearTimeout:a}catch(t){r=a}}();var s,c=[],l=!1,f=-1;function p(){l&&s&&(l=!1,s.length?c=s.concat(c):f=-1,c.length&&d())}function d(){if(!l){var t=u(p);l=!0;for(var e=c.length;e;){for(s=c,c=[];++f<e;)s&&s[f].run();f=-1,e=c.length}s=null,l=!1,function(t){if(r===clearTimeout)return clearTimeout(t);if((r===a||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(t);try{r(t)}catch(e){try{return r.call(null,t)}catch(e){return r.call(this,t)}}}(t)}}function y(t,e){this.fun=t,this.array=e}function h(){}i.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];c.push(new y(t,e)),1!==c.length||l||u(d)},y.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=h,i.addListener=h,i.once=h,i.off=h,i.removeListener=h,i.removeAllListeners=h,i.emit=h,i.prependListener=h,i.prependOnceListener=h,i.listeners=function(t){return[]},i.binding=function(t){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(t){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}}}]);
//# sourceMappingURL=94.84582ebe.chunk.js.map