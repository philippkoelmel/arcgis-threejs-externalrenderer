(this.webpackJsonpexample=this.webpackJsonpexample||[]).push([[118],{1120:function(n,e,t){"use strict";t.r(e),t.d(e,"registerFunctions",(function(){return u}));var r=t(752),o=t(770),a=t(743),c=t(746);function i(n){return n&&n.domain?"coded-value"===n.domain.type||"codedValue"===n.domain.type?r.a.convertObjectToArcadeDictionary({type:"codedValue",name:n.domain.name,dataType:c.l[n.field.type],codedValues:n.domain.codedValues.map((function(n){return{name:n.name,code:n.code}}))}):r.a.convertObjectToArcadeDictionary({type:"range",name:n.domain.name,dataType:c.l[n.field.type],min:n.domain.min,max:n.domain.max}):null}function u(n){"async"===n.mode&&(n.functions.domain=function(e,t){return n.standardFunctionAsync(e,t,(function(n,e,t){if(Object(a.J)(t,2,3),t[0]instanceof o.a)return i(t[0].fullDomain(Object(a.x)(t[1]),void 0===t[2]?void 0:Object(a.N)(t[2])));if(Object(a.I)(t[0]))return t[0]._ensureLoaded().then((function(){return i(Object(a.S)(Object(a.x)(t[1]),t[0],null,void 0===t[2]?void 0:Object(a.N)(t[2])))}));throw new Error("Invalid Parameter")}))},n.functions.subtypes=function(e,t){return n.standardFunctionAsync(e,t,(function(n,e,t){if(Object(a.J)(t,1,1),t[0]instanceof o.a){var c=t[0].subtypes();return c?r.a.convertObjectToArcadeDictionary(c):null}if(Object(a.I)(t[0]))return t[0]._ensureLoaded().then((function(){var n=t[0].subtypes();return n?r.a.convertObjectToArcadeDictionary(n):null}));throw new Error("Invalid Parameter")}))},n.functions.domainname=function(e,t){return n.standardFunctionAsync(e,t,(function(n,e,t){if(Object(a.J)(t,2,4),t[0]instanceof o.a)return t[0].domainValueLookup(Object(a.x)(t[1]),t[2],void 0===t[3]?void 0:Object(a.N)(t[3]));if(Object(a.I)(t[0]))return t[0]._ensureLoaded().then((function(){var n=Object(a.S)(Object(a.x)(t[1]),t[0],null,void 0===t[3]?void 0:Object(a.N)(t[3]));return Object(a.T)(n,t[2])}));throw new Error("Invalid Parameter")}))},n.signatures.push({name:"domainname",min:"2",max:"4"}),n.functions.domaincode=function(e,t){return n.standardFunctionAsync(e,t,(function(n,e,t){if(Object(a.J)(t,2,4),t[0]instanceof o.a)return t[0].domainCodeLookup(Object(a.x)(t[1]),t[2],void 0===t[3]?void 0:Object(a.N)(t[3]));if(Object(a.I)(t[0]))return t[0]._ensureLoaded().then((function(){var n=Object(a.S)(Object(a.x)(t[1]),t[0],null,void 0===t[3]?void 0:Object(a.N)(t[3]));return Object(a.a)(n,t[2])}));throw new Error("Invalid Parameter")}))},n.signatures.push({name:"domaincode",min:"2",max:"4"})),n.functions.text=function(e,t){return n.standardFunctionAsync(e,t,(function(n,e,t){if(Object(a.J)(t,1,2),!Object(a.I)(t[0]))return Object(a.M)(t[0],t[1]);var r=Object(a.c)(t[1],"");return""===r?t[0].castToText():"schema"===r.toLowerCase()?t[0].convertToText("schema",n.abortSignal):"featureset"===r.toLowerCase()?t[0].convertToText("featureset",n.abortSignal):void 0}))},n.functions.gdbversion=function(e,t){return n.standardFunctionAsync(e,t,(function(n,e,t){if(Object(a.J)(t,1,1),t[0]instanceof o.a)return t[0].gdbVersion();if(Object(a.I)(t[0]))return t[0].load().then((function(n){return n.gdbVersion}));throw new Error("Invalid Parameter")}))},n.functions.schema=function(e,t){return n.standardFunctionAsync(e,t,(function(n,e,t){if(Object(a.J)(t,1,1),Object(a.I)(t[0]))return t[0].load().then((function(){return r.a.convertObjectToArcadeDictionary(t[0].schema())}));if(t[0]instanceof o.a){var c=t[0].schema();return c?r.a.convertObjectToArcadeDictionary(c):null}throw new Error("Invalid Parameter")}))}}}}]);
//# sourceMappingURL=118.ad8fac93.chunk.js.map