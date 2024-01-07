(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function hs(t,e){const n=new Set(t.split(","));return e?r=>n.has(r.toLowerCase()):r=>n.has(r)}const Z={},xt=[],ye=()=>{},bc=()=>!1,ar=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),ps=t=>t.startsWith("onUpdate:"),oe=Object.assign,gs=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Ic=Object.prototype.hasOwnProperty,W=(t,e)=>Ic.call(t,e),B=Array.isArray,Ut=t=>cr(t)==="[object Map]",mo=t=>cr(t)==="[object Set]",H=t=>typeof t=="function",ie=t=>typeof t=="string",Xt=t=>typeof t=="symbol",te=t=>t!==null&&typeof t=="object",_o=t=>(te(t)||H(t))&&H(t.then)&&H(t.catch),vo=Object.prototype.toString,cr=t=>vo.call(t),wc=t=>cr(t).slice(8,-1),yo=t=>cr(t)==="[object Object]",ms=t=>ie(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,$n=hs(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),lr=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Tc=/-(\w)/g,jt=lr(t=>t.replace(Tc,(e,n)=>n?n.toUpperCase():"")),Sc=/\B([A-Z])/g,Qt=lr(t=>t.replace(Sc,"-$1").toLowerCase()),Eo=lr(t=>t.charAt(0).toUpperCase()+t.slice(1)),Tr=lr(t=>t?`on${Eo(t)}`:""),ut=(t,e)=>!Object.is(t,e),Sr=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},qn=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Rc=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Js;const bo=()=>Js||(Js=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function _s(t){if(B(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=ie(r)?Oc(r):_s(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(ie(t)||te(t))return t}const Cc=/;(?![^(]*\))/g,Ac=/:([^]+)/,Pc=/\/\*[^]*?\*\//g;function Oc(t){const e={};return t.replace(Pc,"").split(Cc).forEach(n=>{if(n){const r=n.split(Ac);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function vs(t){let e="";if(ie(t))e=t;else if(B(t))for(let n=0;n<t.length;n++){const r=vs(t[n]);r&&(e+=r+" ")}else if(te(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const kc="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Nc=hs(kc);function Io(t){return!!t||t===""}const Dc=t=>ie(t)?t:t==null?"":B(t)||te(t)&&(t.toString===vo||!H(t.toString))?JSON.stringify(t,wo,2):String(t),wo=(t,e)=>e&&e.__v_isRef?wo(t,e.value):Ut(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[Rr(r,i)+" =>"]=s,n),{})}:mo(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Rr(n))}:Xt(e)?Rr(e):te(e)&&!B(e)&&!yo(e)?String(e):e,Rr=(t,e="")=>{var n;return Xt(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};let Ie;class Lc{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Ie,!e&&Ie&&(this.index=(Ie.scopes||(Ie.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Ie;try{return Ie=this,e()}finally{Ie=n}}}on(){Ie=this}off(){Ie=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Mc(t,e=Ie){e&&e.active&&e.effects.push(t)}function xc(){return Ie}let yt;class ys{constructor(e,n,r,s){this.fn=e,this.trigger=n,this.scheduler=r,this.active=!0,this.deps=[],this._dirtyLevel=3,this._trackId=0,this._runnings=0,this._queryings=0,this._depsLength=0,Mc(this,s)}get dirty(){if(this._dirtyLevel===1){this._dirtyLevel=0,this._queryings++,Rt();for(const e of this.deps)if(e.computed&&(Uc(e.computed),this._dirtyLevel>=2))break;Ct(),this._queryings--}return this._dirtyLevel>=2}set dirty(e){this._dirtyLevel=e?3:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=ot,n=yt;try{return ot=!0,yt=this,this._runnings++,Ys(this),this.fn()}finally{Xs(this),this._runnings--,yt=n,ot=e}}stop(){var e;this.active&&(Ys(this),Xs(this),(e=this.onStop)==null||e.call(this),this.active=!1)}}function Uc(t){return t.value}function Ys(t){t._trackId++,t._depsLength=0}function Xs(t){if(t.deps&&t.deps.length>t._depsLength){for(let e=t._depsLength;e<t.deps.length;e++)To(t.deps[e],t);t.deps.length=t._depsLength}}function To(t,e){const n=t.get(e);n!==void 0&&e._trackId!==n&&(t.delete(e),t.size===0&&t.cleanup())}let ot=!0,jr=0;const So=[];function Rt(){So.push(ot),ot=!1}function Ct(){const t=So.pop();ot=t===void 0?!0:t}function Es(){jr++}function bs(){for(jr--;!jr&&Wr.length;)Wr.shift()()}function Ro(t,e,n){if(e.get(t)!==t._trackId){e.set(t,t._trackId);const r=t.deps[t._depsLength];r!==e?(r&&To(r,t),t.deps[t._depsLength++]=e):t._depsLength++}}const Wr=[];function Co(t,e,n){Es();for(const r of t.keys())if(!(!r.allowRecurse&&r._runnings)&&r._dirtyLevel<e&&(!r._runnings||e!==2)){const s=r._dirtyLevel;r._dirtyLevel=e,s===0&&(!r._queryings||e!==2)&&(r.trigger(),r.scheduler&&Wr.push(r.scheduler))}bs()}const Ao=(t,e)=>{const n=new Map;return n.cleanup=t,n.computed=e,n},Kr=new WeakMap,Et=Symbol(""),zr=Symbol("");function ge(t,e,n){if(ot&&yt){let r=Kr.get(t);r||Kr.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=Ao(()=>r.delete(n))),Ro(yt,s)}}function We(t,e,n,r,s,i){const o=Kr.get(t);if(!o)return;let c=[];if(e==="clear")c=[...o.values()];else if(n==="length"&&B(t)){const a=Number(r);o.forEach((l,f)=>{(f==="length"||!Xt(f)&&f>=a)&&c.push(l)})}else switch(n!==void 0&&c.push(o.get(n)),e){case"add":B(t)?ms(n)&&c.push(o.get("length")):(c.push(o.get(Et)),Ut(t)&&c.push(o.get(zr)));break;case"delete":B(t)||(c.push(o.get(Et)),Ut(t)&&c.push(o.get(zr)));break;case"set":Ut(t)&&c.push(o.get(Et));break}Es();for(const a of c)a&&Co(a,3);bs()}const Fc=hs("__proto__,__v_isRef,__isVue"),Po=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Xt)),Qs=$c();function $c(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=K(this);for(let i=0,o=this.length;i<o;i++)ge(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(K)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Rt(),Es();const r=K(this)[e].apply(this,n);return bs(),Ct(),r}}),t}function Bc(t){const e=K(this);return ge(e,"has",t),e.hasOwnProperty(t)}class Oo{constructor(e=!1,n=!1){this._isReadonly=e,this._shallow=n}get(e,n,r){const s=this._isReadonly,i=this._shallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?Zc:Lo:i?Do:No).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=B(e);if(!s){if(o&&W(Qs,n))return Reflect.get(Qs,n,r);if(n==="hasOwnProperty")return Bc}const c=Reflect.get(e,n,r);return(Xt(n)?Po.has(n):Fc(n))||(s||ge(e,"get",n),i)?c:me(c)?o&&ms(n)?c:c.value:te(c)?s?xo(c):fr(c):c}}class ko extends Oo{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._shallow){const a=Wt(i);if(!Jn(r)&&!Wt(r)&&(i=K(i),r=K(r)),!B(e)&&me(i)&&!me(r))return a?!1:(i.value=r,!0)}const o=B(e)&&ms(n)?Number(n)<e.length:W(e,n),c=Reflect.set(e,n,r,s);return e===K(s)&&(o?ut(r,i)&&We(e,"set",n,r):We(e,"add",n,r)),c}deleteProperty(e,n){const r=W(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&We(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!Xt(n)||!Po.has(n))&&ge(e,"has",n),r}ownKeys(e){return ge(e,"iterate",B(e)?"length":Et),Reflect.ownKeys(e)}}class Hc extends Oo{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Vc=new ko,jc=new Hc,Wc=new ko(!0),Is=t=>t,ur=t=>Reflect.getPrototypeOf(t);function Nn(t,e,n=!1,r=!1){t=t.__v_raw;const s=K(t),i=K(e);n||(ut(e,i)&&ge(s,"get",e),ge(s,"get",i));const{has:o}=ur(s),c=r?Is:n?Ss:pn;if(o.call(s,e))return c(t.get(e));if(o.call(s,i))return c(t.get(i));t!==s&&t.get(e)}function Dn(t,e=!1){const n=this.__v_raw,r=K(n),s=K(t);return e||(ut(t,s)&&ge(r,"has",t),ge(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function Ln(t,e=!1){return t=t.__v_raw,!e&&ge(K(t),"iterate",Et),Reflect.get(t,"size",t)}function Zs(t){t=K(t);const e=K(this);return ur(e).has.call(e,t)||(e.add(t),We(e,"add",t,t)),this}function ei(t,e){e=K(e);const n=K(this),{has:r,get:s}=ur(n);let i=r.call(n,t);i||(t=K(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?ut(e,o)&&We(n,"set",t,e):We(n,"add",t,e),this}function ti(t){const e=K(this),{has:n,get:r}=ur(e);let s=n.call(e,t);s||(t=K(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&We(e,"delete",t,void 0),i}function ni(){const t=K(this),e=t.size!==0,n=t.clear();return e&&We(t,"clear",void 0,void 0),n}function Mn(t,e){return function(r,s){const i=this,o=i.__v_raw,c=K(o),a=e?Is:t?Ss:pn;return!t&&ge(c,"iterate",Et),o.forEach((l,f)=>r.call(s,a(l),a(f),i))}}function xn(t,e,n){return function(...r){const s=this.__v_raw,i=K(s),o=Ut(i),c=t==="entries"||t===Symbol.iterator&&o,a=t==="keys"&&o,l=s[t](...r),f=n?Is:e?Ss:pn;return!e&&ge(i,"iterate",a?zr:Et),{next(){const{value:h,done:g}=l.next();return g?{value:h,done:g}:{value:c?[f(h[0]),f(h[1])]:f(h),done:g}},[Symbol.iterator](){return this}}}}function Ye(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Kc(){const t={get(i){return Nn(this,i)},get size(){return Ln(this)},has:Dn,add:Zs,set:ei,delete:ti,clear:ni,forEach:Mn(!1,!1)},e={get(i){return Nn(this,i,!1,!0)},get size(){return Ln(this)},has:Dn,add:Zs,set:ei,delete:ti,clear:ni,forEach:Mn(!1,!0)},n={get(i){return Nn(this,i,!0)},get size(){return Ln(this,!0)},has(i){return Dn.call(this,i,!0)},add:Ye("add"),set:Ye("set"),delete:Ye("delete"),clear:Ye("clear"),forEach:Mn(!0,!1)},r={get(i){return Nn(this,i,!0,!0)},get size(){return Ln(this,!0)},has(i){return Dn.call(this,i,!0)},add:Ye("add"),set:Ye("set"),delete:Ye("delete"),clear:Ye("clear"),forEach:Mn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=xn(i,!1,!1),n[i]=xn(i,!0,!1),e[i]=xn(i,!1,!0),r[i]=xn(i,!0,!0)}),[t,n,e,r]}const[zc,Gc,qc,Jc]=Kc();function ws(t,e){const n=e?t?Jc:qc:t?Gc:zc;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(W(n,s)&&s in r?n:r,s,i)}const Yc={get:ws(!1,!1)},Xc={get:ws(!1,!0)},Qc={get:ws(!0,!1)},No=new WeakMap,Do=new WeakMap,Lo=new WeakMap,Zc=new WeakMap;function el(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function tl(t){return t.__v_skip||!Object.isExtensible(t)?0:el(wc(t))}function fr(t){return Wt(t)?t:Ts(t,!1,Vc,Yc,No)}function Mo(t){return Ts(t,!1,Wc,Xc,Do)}function xo(t){return Ts(t,!0,jc,Qc,Lo)}function Ts(t,e,n,r,s){if(!te(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=tl(t);if(o===0)return t;const c=new Proxy(t,o===2?r:n);return s.set(t,c),c}function Ft(t){return Wt(t)?Ft(t.__v_raw):!!(t&&t.__v_isReactive)}function Wt(t){return!!(t&&t.__v_isReadonly)}function Jn(t){return!!(t&&t.__v_isShallow)}function Uo(t){return Ft(t)||Wt(t)}function K(t){const e=t&&t.__v_raw;return e?K(e):t}function Fo(t){return qn(t,"__v_skip",!0),t}const pn=t=>te(t)?fr(t):t,Ss=t=>te(t)?xo(t):t;class $o{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new ys(()=>e(this._value),()=>Gr(this,1)),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=K(this);return Bo(e),(!e._cacheable||e.effect.dirty)&&ut(e._value,e._value=e.effect.run())&&Gr(e,2),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function nl(t,e,n=!1){let r,s;const i=H(t);return i?(r=t,s=ye):(r=t.get,s=t.set),new $o(r,s,i||!s,n)}function Bo(t){ot&&yt&&(t=K(t),Ro(yt,t.dep||(t.dep=Ao(()=>t.dep=void 0,t instanceof $o?t:void 0))))}function Gr(t,e=3,n){t=K(t);const r=t.dep;r&&Co(r,e)}function me(t){return!!(t&&t.__v_isRef===!0)}function Ho(t){return Vo(t,!1)}function rl(t){return Vo(t,!0)}function Vo(t,e){return me(t)?t:new sl(t,e)}class sl{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:K(e),this._value=n?e:pn(e)}get value(){return Bo(this),this._value}set value(e){const n=this.__v_isShallow||Jn(e)||Wt(e);e=n?e:K(e),ut(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:pn(e),Gr(this,3))}}function bt(t){return me(t)?t.value:t}const il={get:(t,e,n)=>bt(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return me(s)&&!me(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function jo(t){return Ft(t)?t:new Proxy(t,il)}function at(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){dr(i,e,n)}return s}function Se(t,e,n,r){if(H(t)){const i=at(t,e,n,r);return i&&_o(i)&&i.catch(o=>{dr(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(Se(t[i],e,n,r));return s}function dr(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,c=`https://vuejs.org/errors/#runtime-${n}`;for(;i;){const l=i.ec;if(l){for(let f=0;f<l.length;f++)if(l[f](t,o,c)===!1)return}i=i.parent}const a=e.appContext.config.errorHandler;if(a){at(a,null,10,[t,o,c]);return}}ol(t,n,s,r)}function ol(t,e,n,r=!0){console.error(t)}let gn=!1,qr=!1;const ce=[];let Me=0;const $t=[];let He=null,vt=0;const Wo=Promise.resolve();let Rs=null;function Ko(t){const e=Rs||Wo;return t?e.then(this?t.bind(this):t):e}function al(t){let e=Me+1,n=ce.length;for(;e<n;){const r=e+n>>>1,s=ce[r],i=mn(s);i<t||i===t&&s.pre?e=r+1:n=r}return e}function Cs(t){(!ce.length||!ce.includes(t,gn&&t.allowRecurse?Me+1:Me))&&(t.id==null?ce.push(t):ce.splice(al(t.id),0,t),zo())}function zo(){!gn&&!qr&&(qr=!0,Rs=Wo.then(qo))}function cl(t){const e=ce.indexOf(t);e>Me&&ce.splice(e,1)}function ll(t){B(t)?$t.push(...t):(!He||!He.includes(t,t.allowRecurse?vt+1:vt))&&$t.push(t),zo()}function ri(t,e,n=gn?Me+1:0){for(;n<ce.length;n++){const r=ce[n];if(r&&r.pre){if(t&&r.id!==t.uid)continue;ce.splice(n,1),n--,r()}}}function Go(t){if($t.length){const e=[...new Set($t)];if($t.length=0,He){He.push(...e);return}for(He=e,He.sort((n,r)=>mn(n)-mn(r)),vt=0;vt<He.length;vt++)He[vt]();He=null,vt=0}}const mn=t=>t.id==null?1/0:t.id,ul=(t,e)=>{const n=mn(t)-mn(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function qo(t){qr=!1,gn=!0,ce.sort(ul);try{for(Me=0;Me<ce.length;Me++){const e=ce[Me];e&&e.active!==!1&&at(e,null,14)}}finally{Me=0,ce.length=0,Go(),gn=!1,Rs=null,(ce.length||$t.length)&&qo()}}function fl(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Z;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const f=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:g}=r[f]||Z;g&&(s=n.map(y=>ie(y)?y.trim():y)),h&&(s=n.map(Rc))}let c,a=r[c=Tr(e)]||r[c=Tr(jt(e))];!a&&i&&(a=r[c=Tr(Qt(e))]),a&&Se(a,t,6,s);const l=r[c+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[c])return;t.emitted[c]=!0,Se(l,t,6,s)}}function Jo(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},c=!1;if(!H(t)){const a=l=>{const f=Jo(l,e,!0);f&&(c=!0,oe(o,f))};!n&&e.mixins.length&&e.mixins.forEach(a),t.extends&&a(t.extends),t.mixins&&t.mixins.forEach(a)}return!i&&!c?(te(t)&&r.set(t,null),null):(B(i)?i.forEach(a=>o[a]=null):oe(o,i),te(t)&&r.set(t,o),o)}function hr(t,e){return!t||!ar(e)?!1:(e=e.slice(2).replace(/Once$/,""),W(t,e[0].toLowerCase()+e.slice(1))||W(t,Qt(e))||W(t,e))}let xe=null,Yo=null;function Yn(t){const e=xe;return xe=t,Yo=t&&t.type.__scopeId||null,e}function dl(t,e=xe,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&hi(-1);const i=Yn(e);let o;try{o=t(...s)}finally{Yn(i),r._d&&hi(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Cr(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:c,attrs:a,emit:l,render:f,renderCache:h,data:g,setupState:y,ctx:C,inheritAttrs:N}=t;let L,P;const M=Yn(t);try{if(n.shapeFlag&4){const j=s||r,ee=j;L=Le(f.call(ee,j,h,i,y,g,C)),P=a}else{const j=e;L=Le(j.length>1?j(i,{attrs:a,slots:c,emit:l}):j(i,null)),P=e.props?a:hl(a)}}catch(j){un.length=0,dr(j,t,1),L=Ee(_n)}let U=L;if(P&&N!==!1){const j=Object.keys(P),{shapeFlag:ee}=U;j.length&&ee&7&&(o&&j.some(ps)&&(P=pl(P,o)),U=Kt(U,P))}return n.dirs&&(U=Kt(U),U.dirs=U.dirs?U.dirs.concat(n.dirs):n.dirs),n.transition&&(U.transition=n.transition),L=U,Yn(M),L}const hl=t=>{let e;for(const n in t)(n==="class"||n==="style"||ar(n))&&((e||(e={}))[n]=t[n]);return e},pl=(t,e)=>{const n={};for(const r in t)(!ps(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function gl(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:c,patchFlag:a}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&a>=0){if(a&1024)return!0;if(a&16)return r?si(r,o,l):!!o;if(a&8){const f=e.dynamicProps;for(let h=0;h<f.length;h++){const g=f[h];if(o[g]!==r[g]&&!hr(l,g))return!0}}}else return(s||c)&&(!c||!c.$stable)?!0:r===o?!1:r?o?si(r,o,l):!0:!!o;return!1}function si(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!hr(n,i))return!0}return!1}function ml({vnode:t,parent:e},n){if(n)for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const _l=Symbol.for("v-ndc"),vl=t=>t.__isSuspense;function yl(t,e){e&&e.pendingBranch?B(t)?e.effects.push(...t):e.effects.push(t):ll(t)}const El=Symbol.for("v-scx"),bl=()=>Ke(El),Un={};function Bn(t,e,n){return Xo(t,e,n)}function Xo(t,e,{immediate:n,deep:r,flush:s,once:i,onTrack:o,onTrigger:c}=Z){if(e&&i){const F=e;e=(...ne)=>{F(...ne),ee()}}const a=fe,l=F=>r===!0?F:Lt(F,r===!1?1:void 0);let f,h=!1,g=!1;if(me(t)?(f=()=>t.value,h=Jn(t)):Ft(t)?(f=()=>l(t),h=!0):B(t)?(g=!0,h=t.some(F=>Ft(F)||Jn(F)),f=()=>t.map(F=>{if(me(F))return F.value;if(Ft(F))return l(F);if(H(F))return at(F,a,2)})):H(t)?e?f=()=>at(t,a,2):f=()=>(y&&y(),Se(t,a,3,[C])):f=ye,e&&r){const F=f;f=()=>Lt(F())}let y,C=F=>{y=U.onStop=()=>{at(F,a,4),y=U.onStop=void 0}},N;if(vr)if(C=ye,e?n&&Se(e,a,3,[f(),g?[]:void 0,C]):f(),s==="sync"){const F=bl();N=F.__watcherHandles||(F.__watcherHandles=[])}else return ye;let L=g?new Array(t.length).fill(Un):Un;const P=()=>{if(!(!U.active||!U.dirty))if(e){const F=U.run();(r||h||(g?F.some((ne,de)=>ut(ne,L[de])):ut(F,L)))&&(y&&y(),Se(e,a,3,[F,L===Un?void 0:g&&L[0]===Un?[]:L,C]),L=F)}else U.run()};P.allowRecurse=!!e;let M;s==="sync"?M=P:s==="post"?M=()=>pe(P,a&&a.suspense):(P.pre=!0,a&&(P.id=a.uid),M=()=>Cs(P));const U=new ys(f,ye,M),j=xc(),ee=()=>{U.stop(),j&&gs(j.effects,U)};return e?n?P():L=U.run():s==="post"?pe(U.run.bind(U),a&&a.suspense):U.run(),N&&N.push(ee),ee}function Il(t,e,n){const r=this.proxy,s=ie(t)?t.includes(".")?Qo(r,t):()=>r[t]:t.bind(r,r);let i;H(e)?i=e:(i=e.handler,n=e);const o=fe;zt(this);const c=Xo(s,i.bind(r),n);return o?zt(o):It(),c}function Qo(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function Lt(t,e,n=0,r){if(!te(t)||t.__v_skip)return t;if(e&&e>0){if(n>=e)return t;n++}if(r=r||new Set,r.has(t))return t;if(r.add(t),me(t))Lt(t.value,e,n,r);else if(B(t))for(let s=0;s<t.length;s++)Lt(t[s],e,n,r);else if(mo(t)||Ut(t))t.forEach(s=>{Lt(s,e,n,r)});else if(yo(t))for(const s in t)Lt(t[s],e,n,r);return t}function gt(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const c=s[o];i&&(c.oldValue=i[o].value);let a=c.dir[r];a&&(Rt(),Se(a,n,8,[t.el,c,t,e]),Ct())}}/*! #__NO_SIDE_EFFECTS__ */function Zo(t,e){return H(t)?oe({name:t.name},e,{setup:t}):t}const Hn=t=>!!t.type.__asyncLoader,ea=t=>t.type.__isKeepAlive;function wl(t,e){ta(t,"a",e)}function Tl(t,e){ta(t,"da",e)}function ta(t,e,n=fe){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(pr(e,r,n),n){let s=n.parent;for(;s&&s.parent;)ea(s.parent.vnode)&&Sl(r,e,n,s),s=s.parent}}function Sl(t,e,n,r){const s=pr(e,t,r,!0);ra(()=>{gs(r[e],s)},n)}function pr(t,e,n=fe,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Rt(),zt(n);const c=Se(e,n,t,o);return It(),Ct(),c});return r?s.unshift(i):s.push(i),i}}const Ge=t=>(e,n=fe)=>(!vr||t==="sp")&&pr(t,(...r)=>e(...r),n),Rl=Ge("bm"),na=Ge("m"),Cl=Ge("bu"),Al=Ge("u"),Pl=Ge("bum"),ra=Ge("um"),Ol=Ge("sp"),kl=Ge("rtg"),Nl=Ge("rtc");function Dl(t,e=fe){pr("ec",t,e)}const Jr=t=>t?ma(t)?Ns(t)||t.proxy:Jr(t.parent):null,ln=oe(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Jr(t.parent),$root:t=>Jr(t.root),$emit:t=>t.emit,$options:t=>As(t),$forceUpdate:t=>t.f||(t.f=()=>{t.effect.dirty=!0,Cs(t.update)}),$nextTick:t=>t.n||(t.n=Ko.bind(t.proxy)),$watch:t=>Il.bind(t)}),Ar=(t,e)=>t!==Z&&!t.__isScriptSetup&&W(t,e),Ll={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:c,appContext:a}=t;let l;if(e[0]!=="$"){const y=o[e];if(y!==void 0)switch(y){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Ar(r,e))return o[e]=1,r[e];if(s!==Z&&W(s,e))return o[e]=2,s[e];if((l=t.propsOptions[0])&&W(l,e))return o[e]=3,i[e];if(n!==Z&&W(n,e))return o[e]=4,n[e];Yr&&(o[e]=0)}}const f=ln[e];let h,g;if(f)return e==="$attrs"&&ge(t,"get",e),f(t);if((h=c.__cssModules)&&(h=h[e]))return h;if(n!==Z&&W(n,e))return o[e]=4,n[e];if(g=a.config.globalProperties,W(g,e))return g[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Ar(s,e)?(s[e]=n,!0):r!==Z&&W(r,e)?(r[e]=n,!0):W(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let c;return!!n[o]||t!==Z&&W(t,o)||Ar(e,o)||(c=i[0])&&W(c,o)||W(r,o)||W(ln,o)||W(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:W(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function ii(t){return B(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Yr=!0;function Ml(t){const e=As(t),n=t.proxy,r=t.ctx;Yr=!1,e.beforeCreate&&oi(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:c,provide:a,inject:l,created:f,beforeMount:h,mounted:g,beforeUpdate:y,updated:C,activated:N,deactivated:L,beforeDestroy:P,beforeUnmount:M,destroyed:U,unmounted:j,render:ee,renderTracked:F,renderTriggered:ne,errorCaptured:de,serverPrefetch:Ae,expose:ve,inheritAttrs:qe,components:pt,directives:Pe,filters:tn}=e;if(l&&xl(l,r,null),o)for(const J in o){const z=o[J];H(z)&&(r[J]=z.bind(n))}if(s){const J=s.call(n,n);te(J)&&(t.data=fr(J))}if(Yr=!0,i)for(const J in i){const z=i[J],$e=H(z)?z.bind(n,n):H(z.get)?z.get.bind(n,n):ye,Je=!H(z)&&H(z.set)?z.set.bind(n):ye,Oe=we({get:$e,set:Je});Object.defineProperty(r,J,{enumerable:!0,configurable:!0,get:()=>Oe.value,set:he=>Oe.value=he})}if(c)for(const J in c)sa(c[J],r,n,J);if(a){const J=H(a)?a.call(n):a;Reflect.ownKeys(J).forEach(z=>{Vn(z,J[z])})}f&&oi(f,t,"c");function re(J,z){B(z)?z.forEach($e=>J($e.bind(n))):z&&J(z.bind(n))}if(re(Rl,h),re(na,g),re(Cl,y),re(Al,C),re(wl,N),re(Tl,L),re(Dl,de),re(Nl,F),re(kl,ne),re(Pl,M),re(ra,j),re(Ol,Ae),B(ve))if(ve.length){const J=t.exposed||(t.exposed={});ve.forEach(z=>{Object.defineProperty(J,z,{get:()=>n[z],set:$e=>n[z]=$e})})}else t.exposed||(t.exposed={});ee&&t.render===ye&&(t.render=ee),qe!=null&&(t.inheritAttrs=qe),pt&&(t.components=pt),Pe&&(t.directives=Pe)}function xl(t,e,n=ye){B(t)&&(t=Xr(t));for(const r in t){const s=t[r];let i;te(s)?"default"in s?i=Ke(s.from||r,s.default,!0):i=Ke(s.from||r):i=Ke(s),me(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function oi(t,e,n){Se(B(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function sa(t,e,n,r){const s=r.includes(".")?Qo(n,r):()=>n[r];if(ie(t)){const i=e[t];H(i)&&Bn(s,i)}else if(H(t))Bn(s,t.bind(n));else if(te(t))if(B(t))t.forEach(i=>sa(i,e,n,r));else{const i=H(t.handler)?t.handler.bind(n):e[t.handler];H(i)&&Bn(s,i,t)}}function As(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,c=i.get(e);let a;return c?a=c:!s.length&&!n&&!r?a=e:(a={},s.length&&s.forEach(l=>Xn(a,l,o,!0)),Xn(a,e,o)),te(e)&&i.set(e,a),a}function Xn(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Xn(t,i,n,!0),s&&s.forEach(o=>Xn(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const c=Ul[o]||n&&n[o];t[o]=c?c(t[o],e[o]):e[o]}return t}const Ul={data:ai,props:ci,emits:ci,methods:on,computed:on,beforeCreate:ue,created:ue,beforeMount:ue,mounted:ue,beforeUpdate:ue,updated:ue,beforeDestroy:ue,beforeUnmount:ue,destroyed:ue,unmounted:ue,activated:ue,deactivated:ue,errorCaptured:ue,serverPrefetch:ue,components:on,directives:on,watch:$l,provide:ai,inject:Fl};function ai(t,e){return e?t?function(){return oe(H(t)?t.call(this,this):t,H(e)?e.call(this,this):e)}:e:t}function Fl(t,e){return on(Xr(t),Xr(e))}function Xr(t){if(B(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function ue(t,e){return t?[...new Set([].concat(t,e))]:e}function on(t,e){return t?oe(Object.create(null),t,e):e}function ci(t,e){return t?B(t)&&B(e)?[...new Set([...t,...e])]:oe(Object.create(null),ii(t),ii(e??{})):e}function $l(t,e){if(!t)return e;if(!e)return t;const n=oe(Object.create(null),t);for(const r in e)n[r]=ue(t[r],e[r]);return n}function ia(){return{app:null,config:{isNativeTag:bc,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Bl=0;function Hl(t,e){return function(r,s=null){H(r)||(r=oe({},r)),s!=null&&!te(s)&&(s=null);const i=ia(),o=new WeakSet;let c=!1;const a=i.app={_uid:Bl++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:du,get config(){return i.config},set config(l){},use(l,...f){return o.has(l)||(l&&H(l.install)?(o.add(l),l.install(a,...f)):H(l)&&(o.add(l),l(a,...f))),a},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),a},component(l,f){return f?(i.components[l]=f,a):i.components[l]},directive(l,f){return f?(i.directives[l]=f,a):i.directives[l]},mount(l,f,h){if(!c){const g=Ee(r,s);return g.appContext=i,h===!0?h="svg":h===!1&&(h=void 0),f&&e?e(g,l):t(g,l,h),c=!0,a._container=l,l.__vue_app__=a,Ns(g.component)||g.component.proxy}},unmount(){c&&(t(null,a._container),delete a._container.__vue_app__)},provide(l,f){return i.provides[l]=f,a},runWithContext(l){Qn=a;try{return l()}finally{Qn=null}}};return a}}let Qn=null;function Vn(t,e){if(fe){let n=fe.provides;const r=fe.parent&&fe.parent.provides;r===n&&(n=fe.provides=Object.create(r)),n[t]=e}}function Ke(t,e,n=!1){const r=fe||xe;if(r||Qn){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:Qn._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&H(e)?e.call(r&&r.proxy):e}}function Vl(t,e,n,r=!1){const s={},i={};qn(i,mr,1),t.propsDefaults=Object.create(null),oa(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Mo(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function jl(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,c=K(s),[a]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const f=t.vnode.dynamicProps;for(let h=0;h<f.length;h++){let g=f[h];if(hr(t.emitsOptions,g))continue;const y=e[g];if(a)if(W(i,g))y!==i[g]&&(i[g]=y,l=!0);else{const C=jt(g);s[C]=Qr(a,c,C,y,t,!1)}else y!==i[g]&&(i[g]=y,l=!0)}}}else{oa(t,e,s,i)&&(l=!0);let f;for(const h in c)(!e||!W(e,h)&&((f=Qt(h))===h||!W(e,f)))&&(a?n&&(n[h]!==void 0||n[f]!==void 0)&&(s[h]=Qr(a,c,h,void 0,t,!0)):delete s[h]);if(i!==c)for(const h in i)(!e||!W(e,h))&&(delete i[h],l=!0)}l&&We(t,"set","$attrs")}function oa(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,c;if(e)for(let a in e){if($n(a))continue;const l=e[a];let f;s&&W(s,f=jt(a))?!i||!i.includes(f)?n[f]=l:(c||(c={}))[f]=l:hr(t.emitsOptions,a)||(!(a in r)||l!==r[a])&&(r[a]=l,o=!0)}if(i){const a=K(n),l=c||Z;for(let f=0;f<i.length;f++){const h=i[f];n[h]=Qr(s,a,h,l[h],t,!W(l,h))}}return o}function Qr(t,e,n,r,s,i){const o=t[n];if(o!=null){const c=W(o,"default");if(c&&r===void 0){const a=o.default;if(o.type!==Function&&!o.skipFactory&&H(a)){const{propsDefaults:l}=s;n in l?r=l[n]:(zt(s),r=l[n]=a.call(null,e),It())}else r=a}o[0]&&(i&&!c?r=!1:o[1]&&(r===""||r===Qt(n))&&(r=!0))}return r}function aa(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},c=[];let a=!1;if(!H(t)){const f=h=>{a=!0;const[g,y]=aa(h,e,!0);oe(o,g),y&&c.push(...y)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!i&&!a)return te(t)&&r.set(t,xt),xt;if(B(i))for(let f=0;f<i.length;f++){const h=jt(i[f]);li(h)&&(o[h]=Z)}else if(i)for(const f in i){const h=jt(f);if(li(h)){const g=i[f],y=o[h]=B(g)||H(g)?{type:g}:oe({},g);if(y){const C=di(Boolean,y.type),N=di(String,y.type);y[0]=C>-1,y[1]=N<0||C<N,(C>-1||W(y,"default"))&&c.push(h)}}}const l=[o,c];return te(t)&&r.set(t,l),l}function li(t){return t[0]!=="$"}function ui(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function fi(t,e){return ui(t)===ui(e)}function di(t,e){return B(e)?e.findIndex(n=>fi(n,t)):H(e)&&fi(e,t)?0:-1}const ca=t=>t[0]==="_"||t==="$stable",Ps=t=>B(t)?t.map(Le):[Le(t)],Wl=(t,e,n)=>{if(e._n)return e;const r=dl((...s)=>Ps(e(...s)),n);return r._c=!1,r},la=(t,e,n)=>{const r=t._ctx;for(const s in t){if(ca(s))continue;const i=t[s];if(H(i))e[s]=Wl(s,i,r);else if(i!=null){const o=Ps(i);e[s]=()=>o}}},ua=(t,e)=>{const n=Ps(e);t.slots.default=()=>n},Kl=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=K(e),qn(e,"_",n)):la(e,t.slots={})}else t.slots={},e&&ua(t,e);qn(t.slots,mr,1)},zl=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Z;if(r.shapeFlag&32){const c=e._;c?n&&c===1?i=!1:(oe(s,e),!n&&c===1&&delete s._):(i=!e.$stable,la(e,s)),o=e}else e&&(ua(t,e),o={default:1});if(i)for(const c in s)!ca(c)&&o[c]==null&&delete s[c]};function Zr(t,e,n,r,s=!1){if(B(t)){t.forEach((g,y)=>Zr(g,e&&(B(e)?e[y]:e),n,r,s));return}if(Hn(r)&&!s)return;const i=r.shapeFlag&4?Ns(r.component)||r.component.proxy:r.el,o=s?null:i,{i:c,r:a}=t,l=e&&e.r,f=c.refs===Z?c.refs={}:c.refs,h=c.setupState;if(l!=null&&l!==a&&(ie(l)?(f[l]=null,W(h,l)&&(h[l]=null)):me(l)&&(l.value=null)),H(a))at(a,c,12,[o,f]);else{const g=ie(a),y=me(a);if(g||y){const C=()=>{if(t.f){const N=g?W(h,a)?h[a]:f[a]:a.value;s?B(N)&&gs(N,i):B(N)?N.includes(i)||N.push(i):g?(f[a]=[i],W(h,a)&&(h[a]=f[a])):(a.value=[i],t.k&&(f[t.k]=a.value))}else g?(f[a]=o,W(h,a)&&(h[a]=o)):y&&(a.value=o,t.k&&(f[t.k]=o))};o?(C.id=-1,pe(C,n)):C()}}}const pe=yl;function Gl(t){return ql(t)}function ql(t,e){const n=bo();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:c,createComment:a,setText:l,setElementText:f,parentNode:h,nextSibling:g,setScopeId:y=ye,insertStaticContent:C}=t,N=(u,d,p,m=null,v=null,E=null,S=void 0,I=null,w=!!d.dynamicChildren)=>{if(u===d)return;u&&!rn(u,d)&&(m=_(u),he(u,v,E,!0),u=null),d.patchFlag===-2&&(w=!1,d.dynamicChildren=null);const{type:b,ref:R,shapeFlag:D}=d;switch(b){case gr:L(u,d,p,m);break;case _n:P(u,d,p,m);break;case Or:u==null&&M(d,p,m,S);break;case De:pt(u,d,p,m,v,E,S,I,w);break;default:D&1?ee(u,d,p,m,v,E,S,I,w):D&6?Pe(u,d,p,m,v,E,S,I,w):(D&64||D&128)&&b.process(u,d,p,m,v,E,S,I,w,T)}R!=null&&v&&Zr(R,u&&u.ref,E,d||u,!d)},L=(u,d,p,m)=>{if(u==null)r(d.el=c(d.children),p,m);else{const v=d.el=u.el;d.children!==u.children&&l(v,d.children)}},P=(u,d,p,m)=>{u==null?r(d.el=a(d.children||""),p,m):d.el=u.el},M=(u,d,p,m)=>{[u.el,u.anchor]=C(u.children,d,p,m,u.el,u.anchor)},U=({el:u,anchor:d},p,m)=>{let v;for(;u&&u!==d;)v=g(u),r(u,p,m),u=v;r(d,p,m)},j=({el:u,anchor:d})=>{let p;for(;u&&u!==d;)p=g(u),s(u),u=p;s(d)},ee=(u,d,p,m,v,E,S,I,w)=>{d.type==="svg"?S="svg":d.type==="math"&&(S="mathml"),u==null?F(d,p,m,v,E,S,I,w):Ae(u,d,v,E,S,I,w)},F=(u,d,p,m,v,E,S,I)=>{let w,b;const{props:R,shapeFlag:D,transition:k,dirs:$}=u;if(w=u.el=o(u.type,E,R&&R.is,R),D&8?f(w,u.children):D&16&&de(u.children,w,null,m,v,Pr(u,E),S,I),$&&gt(u,null,m,"created"),ne(w,u,u.scopeId,S,m),R){for(const Y in R)Y!=="value"&&!$n(Y)&&i(w,Y,null,R[Y],E,u.children,m,v,ae);"value"in R&&i(w,"value",null,R.value,E),(b=R.onVnodeBeforeMount)&&Ne(b,m,u)}$&&gt(u,null,m,"beforeMount");const V=Jl(v,k);V&&k.beforeEnter(w),r(w,d,p),((b=R&&R.onVnodeMounted)||V||$)&&pe(()=>{b&&Ne(b,m,u),V&&k.enter(w),$&&gt(u,null,m,"mounted")},v)},ne=(u,d,p,m,v)=>{if(p&&y(u,p),m)for(let E=0;E<m.length;E++)y(u,m[E]);if(v){let E=v.subTree;if(d===E){const S=v.vnode;ne(u,S,S.scopeId,S.slotScopeIds,v.parent)}}},de=(u,d,p,m,v,E,S,I,w=0)=>{for(let b=w;b<u.length;b++){const R=u[b]=I?Ze(u[b]):Le(u[b]);N(null,R,d,p,m,v,E,S,I)}},Ae=(u,d,p,m,v,E,S)=>{const I=d.el=u.el;let{patchFlag:w,dynamicChildren:b,dirs:R}=d;w|=u.patchFlag&16;const D=u.props||Z,k=d.props||Z;let $;if(p&&mt(p,!1),($=k.onVnodeBeforeUpdate)&&Ne($,p,d,u),R&&gt(d,u,p,"beforeUpdate"),p&&mt(p,!0),b?ve(u.dynamicChildren,b,I,p,m,Pr(d,v),E):S||z(u,d,I,null,p,m,Pr(d,v),E,!1),w>0){if(w&16)qe(I,d,D,k,p,m,v);else if(w&2&&D.class!==k.class&&i(I,"class",null,k.class,v),w&4&&i(I,"style",D.style,k.style,v),w&8){const V=d.dynamicProps;for(let Y=0;Y<V.length;Y++){const Q=V[Y],se=D[Q],be=k[Q];(be!==se||Q==="value")&&i(I,Q,se,be,v,u.children,p,m,ae)}}w&1&&u.children!==d.children&&f(I,d.children)}else!S&&b==null&&qe(I,d,D,k,p,m,v);(($=k.onVnodeUpdated)||R)&&pe(()=>{$&&Ne($,p,d,u),R&&gt(d,u,p,"updated")},m)},ve=(u,d,p,m,v,E,S)=>{for(let I=0;I<d.length;I++){const w=u[I],b=d[I],R=w.el&&(w.type===De||!rn(w,b)||w.shapeFlag&70)?h(w.el):p;N(w,b,R,null,m,v,E,S,!0)}},qe=(u,d,p,m,v,E,S)=>{if(p!==m){if(p!==Z)for(const I in p)!$n(I)&&!(I in m)&&i(u,I,p[I],null,S,d.children,v,E,ae);for(const I in m){if($n(I))continue;const w=m[I],b=p[I];w!==b&&I!=="value"&&i(u,I,b,w,S,d.children,v,E,ae)}"value"in m&&i(u,"value",p.value,m.value,S)}},pt=(u,d,p,m,v,E,S,I,w)=>{const b=d.el=u?u.el:c(""),R=d.anchor=u?u.anchor:c("");let{patchFlag:D,dynamicChildren:k,slotScopeIds:$}=d;$&&(I=I?I.concat($):$),u==null?(r(b,p,m),r(R,p,m),de(d.children,p,R,v,E,S,I,w)):D>0&&D&64&&k&&u.dynamicChildren?(ve(u.dynamicChildren,k,p,v,E,S,I),(d.key!=null||v&&d===v.subTree)&&fa(u,d,!0)):z(u,d,p,R,v,E,S,I,w)},Pe=(u,d,p,m,v,E,S,I,w)=>{d.slotScopeIds=I,u==null?d.shapeFlag&512?v.ctx.activate(d,p,m,S,w):tn(d,p,m,v,E,S,w):Pt(u,d,w)},tn=(u,d,p,m,v,E,S)=>{const I=u.component=ou(u,m,v);if(ea(u)&&(I.ctx.renderer=T),au(I),I.asyncDep){if(v&&v.registerDep(I,re),!u.el){const w=I.subTree=Ee(_n);P(null,w,d,p)}}else re(I,u,d,p,v,E,S)},Pt=(u,d,p)=>{const m=d.component=u.component;if(gl(u,d,p))if(m.asyncDep&&!m.asyncResolved){J(m,d,p);return}else m.next=d,cl(m.update),m.effect.dirty=!0,m.update();else d.el=u.el,m.vnode=d},re=(u,d,p,m,v,E,S)=>{const I=()=>{if(u.isMounted){let{next:R,bu:D,u:k,parent:$,vnode:V}=u;{const Nt=da(u);if(Nt){R&&(R.el=V.el,J(u,R,S)),Nt.asyncDep.then(()=>{u.isUnmounted||I()});return}}let Y=R,Q;mt(u,!1),R?(R.el=V.el,J(u,R,S)):R=V,D&&Sr(D),(Q=R.props&&R.props.onVnodeBeforeUpdate)&&Ne(Q,$,R,V),mt(u,!0);const se=Cr(u),be=u.subTree;u.subTree=se,N(be,se,h(be.el),_(be),u,v,E),R.el=se.el,Y===null&&ml(u,se.el),k&&pe(k,v),(Q=R.props&&R.props.onVnodeUpdated)&&pe(()=>Ne(Q,$,R,V),v)}else{let R;const{el:D,props:k}=d,{bm:$,m:V,parent:Y}=u,Q=Hn(d);if(mt(u,!1),$&&Sr($),!Q&&(R=k&&k.onVnodeBeforeMount)&&Ne(R,Y,d),mt(u,!0),D&&G){const se=()=>{u.subTree=Cr(u),G(D,u.subTree,u,v,null)};Q?d.type.__asyncLoader().then(()=>!u.isUnmounted&&se()):se()}else{const se=u.subTree=Cr(u);N(null,se,p,m,u,v,E),d.el=se.el}if(V&&pe(V,v),!Q&&(R=k&&k.onVnodeMounted)){const se=d;pe(()=>Ne(R,Y,se),v)}(d.shapeFlag&256||Y&&Hn(Y.vnode)&&Y.vnode.shapeFlag&256)&&u.a&&pe(u.a,v),u.isMounted=!0,d=p=m=null}},w=u.effect=new ys(I,ye,()=>Cs(b),u.scope),b=u.update=()=>{w.dirty&&w.run()};b.id=u.uid,mt(u,!0),b()},J=(u,d,p)=>{d.component=u;const m=u.vnode.props;u.vnode=d,u.next=null,jl(u,d.props,m,p),zl(u,d.children,p),Rt(),ri(u),Ct()},z=(u,d,p,m,v,E,S,I,w=!1)=>{const b=u&&u.children,R=u?u.shapeFlag:0,D=d.children,{patchFlag:k,shapeFlag:$}=d;if(k>0){if(k&128){Je(b,D,p,m,v,E,S,I,w);return}else if(k&256){$e(b,D,p,m,v,E,S,I,w);return}}$&8?(R&16&&ae(b,v,E),D!==b&&f(p,D)):R&16?$&16?Je(b,D,p,m,v,E,S,I,w):ae(b,v,E,!0):(R&8&&f(p,""),$&16&&de(D,p,m,v,E,S,I,w))},$e=(u,d,p,m,v,E,S,I,w)=>{u=u||xt,d=d||xt;const b=u.length,R=d.length,D=Math.min(b,R);let k;for(k=0;k<D;k++){const $=d[k]=w?Ze(d[k]):Le(d[k]);N(u[k],$,p,null,v,E,S,I,w)}b>R?ae(u,v,E,!0,!1,D):de(d,p,m,v,E,S,I,w,D)},Je=(u,d,p,m,v,E,S,I,w)=>{let b=0;const R=d.length;let D=u.length-1,k=R-1;for(;b<=D&&b<=k;){const $=u[b],V=d[b]=w?Ze(d[b]):Le(d[b]);if(rn($,V))N($,V,p,null,v,E,S,I,w);else break;b++}for(;b<=D&&b<=k;){const $=u[D],V=d[k]=w?Ze(d[k]):Le(d[k]);if(rn($,V))N($,V,p,null,v,E,S,I,w);else break;D--,k--}if(b>D){if(b<=k){const $=k+1,V=$<R?d[$].el:m;for(;b<=k;)N(null,d[b]=w?Ze(d[b]):Le(d[b]),p,V,v,E,S,I,w),b++}}else if(b>k)for(;b<=D;)he(u[b],v,E,!0),b++;else{const $=b,V=b,Y=new Map;for(b=V;b<=k;b++){const _e=d[b]=w?Ze(d[b]):Le(d[b]);_e.key!=null&&Y.set(_e.key,b)}let Q,se=0;const be=k-V+1;let Nt=!1,zs=0;const nn=new Array(be);for(b=0;b<be;b++)nn[b]=0;for(b=$;b<=D;b++){const _e=u[b];if(se>=be){he(_e,v,E,!0);continue}let ke;if(_e.key!=null)ke=Y.get(_e.key);else for(Q=V;Q<=k;Q++)if(nn[Q-V]===0&&rn(_e,d[Q])){ke=Q;break}ke===void 0?he(_e,v,E,!0):(nn[ke-V]=b+1,ke>=zs?zs=ke:Nt=!0,N(_e,d[ke],p,null,v,E,S,I,w),se++)}const Gs=Nt?Yl(nn):xt;for(Q=Gs.length-1,b=be-1;b>=0;b--){const _e=V+b,ke=d[_e],qs=_e+1<R?d[_e+1].el:m;nn[b]===0?N(null,ke,p,qs,v,E,S,I,w):Nt&&(Q<0||b!==Gs[Q]?Oe(ke,p,qs,2):Q--)}}},Oe=(u,d,p,m,v=null)=>{const{el:E,type:S,transition:I,children:w,shapeFlag:b}=u;if(b&6){Oe(u.component.subTree,d,p,m);return}if(b&128){u.suspense.move(d,p,m);return}if(b&64){S.move(u,d,p,T);return}if(S===De){r(E,d,p);for(let D=0;D<w.length;D++)Oe(w[D],d,p,m);r(u.anchor,d,p);return}if(S===Or){U(u,d,p);return}if(m!==2&&b&1&&I)if(m===0)I.beforeEnter(E),r(E,d,p),pe(()=>I.enter(E),v);else{const{leave:D,delayLeave:k,afterLeave:$}=I,V=()=>r(E,d,p),Y=()=>{D(E,()=>{V(),$&&$()})};k?k(E,V,Y):Y()}else r(E,d,p)},he=(u,d,p,m=!1,v=!1)=>{const{type:E,props:S,ref:I,children:w,dynamicChildren:b,shapeFlag:R,patchFlag:D,dirs:k}=u;if(I!=null&&Zr(I,null,p,u,!0),R&256){d.ctx.deactivate(u);return}const $=R&1&&k,V=!Hn(u);let Y;if(V&&(Y=S&&S.onVnodeBeforeUnmount)&&Ne(Y,d,u),R&6)kn(u.component,p,m);else{if(R&128){u.suspense.unmount(p,m);return}$&&gt(u,null,d,"beforeUnmount"),R&64?u.type.remove(u,d,p,v,T,m):b&&(E!==De||D>0&&D&64)?ae(b,d,p,!1,!0):(E===De&&D&384||!v&&R&16)&&ae(w,d,p),m&&Ot(u)}(V&&(Y=S&&S.onVnodeUnmounted)||$)&&pe(()=>{Y&&Ne(Y,d,u),$&&gt(u,null,d,"unmounted")},p)},Ot=u=>{const{type:d,el:p,anchor:m,transition:v}=u;if(d===De){kt(p,m);return}if(d===Or){j(u);return}const E=()=>{s(p),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(u.shapeFlag&1&&v&&!v.persisted){const{leave:S,delayLeave:I}=v,w=()=>S(p,E);I?I(u.el,E,w):w()}else E()},kt=(u,d)=>{let p;for(;u!==d;)p=g(u),s(u),u=p;s(d)},kn=(u,d,p)=>{const{bum:m,scope:v,update:E,subTree:S,um:I}=u;m&&Sr(m),v.stop(),E&&(E.active=!1,he(S,u,d,p)),I&&pe(I,d),pe(()=>{u.isUnmounted=!0},d),d&&d.pendingBranch&&!d.isUnmounted&&u.asyncDep&&!u.asyncResolved&&u.suspenseId===d.pendingId&&(d.deps--,d.deps===0&&d.resolve())},ae=(u,d,p,m=!1,v=!1,E=0)=>{for(let S=E;S<u.length;S++)he(u[S],d,p,m,v)},_=u=>u.shapeFlag&6?_(u.component.subTree):u.shapeFlag&128?u.suspense.next():g(u.anchor||u.el),A=(u,d,p)=>{u==null?d._vnode&&he(d._vnode,null,null,!0):N(d._vnode||null,u,d,null,null,null,p),ri(),Go(),d._vnode=u},T={p:N,um:he,m:Oe,r:Ot,mt:tn,mc:de,pc:z,pbc:ve,n:_,o:t};let O,G;return e&&([O,G]=e(T)),{render:A,hydrate:O,createApp:Hl(A,O)}}function Pr({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function mt({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Jl(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function fa(t,e,n=!1){const r=t.children,s=e.children;if(B(r)&&B(s))for(let i=0;i<r.length;i++){const o=r[i];let c=s[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=s[i]=Ze(s[i]),c.el=o.el),n||fa(o,c)),c.type===gr&&(c.el=o.el)}}function Yl(t){const e=t.slice(),n=[0];let r,s,i,o,c;const a=t.length;for(r=0;r<a;r++){const l=t[r];if(l!==0){if(s=n[n.length-1],t[s]<l){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)c=i+o>>1,t[n[c]]<l?i=c+1:o=c;l<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function da(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:da(e)}const Xl=t=>t.__isTeleport,De=Symbol.for("v-fgt"),gr=Symbol.for("v-txt"),_n=Symbol.for("v-cmt"),Or=Symbol.for("v-stc"),un=[];let Te=null;function ha(t=!1){un.push(Te=t?null:[])}function Ql(){un.pop(),Te=un[un.length-1]||null}let vn=1;function hi(t){vn+=t}function Zl(t){return t.dynamicChildren=vn>0?Te||xt:null,Ql(),vn>0&&Te&&Te.push(t),t}function pa(t,e,n,r,s,i){return Zl(_r(t,e,n,r,s,i,!0))}function es(t){return t?t.__v_isVNode===!0:!1}function rn(t,e){return t.type===e.type&&t.key===e.key}const mr="__vInternal",ga=({key:t})=>t??null,jn=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?ie(t)||me(t)||H(t)?{i:xe,r:t,k:e,f:!!n}:t:null);function _r(t,e=null,n=null,r=0,s=null,i=t===De?0:1,o=!1,c=!1){const a={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&ga(e),ref:e&&jn(e),scopeId:Yo,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:xe};return c?(Os(a,n),i&128&&t.normalize(a)):n&&(a.shapeFlag|=ie(n)?8:16),vn>0&&!o&&Te&&(a.patchFlag>0||i&6)&&a.patchFlag!==32&&Te.push(a),a}const Ee=eu;function eu(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===_l)&&(t=_n),es(t)){const c=Kt(t,e,!0);return n&&Os(c,n),vn>0&&!i&&Te&&(c.shapeFlag&6?Te[Te.indexOf(t)]=c:Te.push(c)),c.patchFlag|=-2,c}if(fu(t)&&(t=t.__vccOpts),e){e=tu(e);let{class:c,style:a}=e;c&&!ie(c)&&(e.class=vs(c)),te(a)&&(Uo(a)&&!B(a)&&(a=oe({},a)),e.style=_s(a))}const o=ie(t)?1:vl(t)?128:Xl(t)?64:te(t)?4:H(t)?2:0;return _r(t,e,n,r,s,o,i,!0)}function tu(t){return t?Uo(t)||mr in t?oe({},t):t:null}function Kt(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,c=e?ru(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&ga(c),ref:e&&e.ref?n&&s?B(s)?s.concat(jn(e)):[s,jn(e)]:jn(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==De?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Kt(t.ssContent),ssFallback:t.ssFallback&&Kt(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function nu(t=" ",e=0){return Ee(gr,null,t,e)}function Le(t){return t==null||typeof t=="boolean"?Ee(_n):B(t)?Ee(De,null,t.slice()):typeof t=="object"?Ze(t):Ee(gr,null,String(t))}function Ze(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Kt(t)}function Os(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(B(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Os(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(mr in e)?e._ctx=xe:s===3&&xe&&(xe.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else H(e)?(e={default:e,_ctx:xe},n=32):(e=String(e),r&64?(n=16,e=[nu(e)]):n=8);t.children=e,t.shapeFlag|=n}function ru(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=vs([e.class,r.class]));else if(s==="style")e.style=_s([e.style,r.style]);else if(ar(s)){const i=e[s],o=r[s];o&&i!==o&&!(B(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Ne(t,e,n,r=null){Se(t,e,7,[n,r])}const su=ia();let iu=0;function ou(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||su,i={uid:iu++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Lc(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:aa(r,s),emitsOptions:Jo(r,s),emit:null,emitted:null,propsDefaults:Z,inheritAttrs:r.inheritAttrs,ctx:Z,data:Z,props:Z,attrs:Z,slots:Z,refs:Z,setupState:Z,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=fl.bind(null,i),t.ce&&t.ce(i),i}let fe=null,ks,ts;{const t=bo(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};ks=e("__VUE_INSTANCE_SETTERS__",n=>fe=n),ts=e("__VUE_SSR_SETTERS__",n=>vr=n)}const zt=t=>{ks(t),t.scope.on()},It=()=>{fe&&fe.scope.off(),ks(null)};function ma(t){return t.vnode.shapeFlag&4}let vr=!1;function au(t,e=!1){e&&ts(e);const{props:n,children:r}=t.vnode,s=ma(t);Vl(t,n,s,e),Kl(t,r);const i=s?cu(t,e):void 0;return e&&ts(!1),i}function cu(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Fo(new Proxy(t.ctx,Ll));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?uu(t):null;zt(t),Rt();const i=at(r,t,0,[t.props,s]);if(Ct(),It(),_o(i)){if(i.then(It,It),e)return i.then(o=>{pi(t,o,e)}).catch(o=>{dr(o,t,0)});t.asyncDep=i}else pi(t,i,e)}else _a(t,e)}function pi(t,e,n){H(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:te(e)&&(t.setupState=jo(e)),_a(t,n)}let gi;function _a(t,e,n){const r=t.type;if(!t.render){if(!e&&gi&&!r.render){const s=r.template||As(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:c,compilerOptions:a}=r,l=oe(oe({isCustomElement:i,delimiters:c},o),a);r.render=gi(s,l)}}t.render=r.render||ye}{zt(t),Rt();try{Ml(t)}finally{Ct(),It()}}}function lu(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return ge(t,"get","$attrs"),e[n]}}))}function uu(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return lu(t)},slots:t.slots,emit:t.emit,expose:e}}function Ns(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(jo(Fo(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in ln)return ln[n](t)},has(e,n){return n in e||n in ln}}))}function fu(t){return H(t)&&"__vccOpts"in t}const we=(t,e)=>nl(t,e,vr);function va(t,e,n){const r=arguments.length;return r===2?te(e)&&!B(e)?es(e)?Ee(t,null,[e]):Ee(t,e):Ee(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&es(n)&&(n=[n]),Ee(t,e,n))}const du="3.4.5",hu="http://www.w3.org/2000/svg",pu="http://www.w3.org/1998/Math/MathML",et=typeof document<"u"?document:null,mi=et&&et.createElement("template"),gu={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?et.createElementNS(hu,t):e==="mathml"?et.createElementNS(pu,t):et.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>et.createTextNode(t),createComment:t=>et.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>et.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{mi.innerHTML=r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t;const c=mi.content;if(r==="svg"||r==="mathml"){const a=c.firstChild;for(;a.firstChild;)c.appendChild(a.firstChild);c.removeChild(a)}e.insertBefore(c,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},mu=Symbol("_vtc");function _u(t,e,n){const r=t[mu];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const vu=Symbol("_vod"),yu=Symbol("");function Eu(t,e,n){const r=t.style,s=ie(n);if(n&&!s){if(e&&!ie(e))for(const i in e)n[i]==null&&ns(r,i,"");for(const i in n)ns(r,i,n[i])}else{const i=r.display;if(s){if(e!==n){const o=r[yu];o&&(n+=";"+o),r.cssText=n}}else e&&t.removeAttribute("style");vu in t&&(r.display=i)}}const _i=/\s*!important$/;function ns(t,e,n){if(B(n))n.forEach(r=>ns(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=bu(t,e);_i.test(n)?t.setProperty(Qt(r),n.replace(_i,""),"important"):t[r]=n}}const vi=["Webkit","Moz","ms"],kr={};function bu(t,e){const n=kr[e];if(n)return n;let r=jt(e);if(r!=="filter"&&r in t)return kr[e]=r;r=Eo(r);for(let s=0;s<vi.length;s++){const i=vi[s]+r;if(i in t)return kr[e]=i}return e}const yi="http://www.w3.org/1999/xlink";function Iu(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(yi,e.slice(6,e.length)):t.setAttributeNS(yi,e,n);else{const i=Nc(e);n==null||i&&!Io(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function wu(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n??"";return}const c=t.tagName;if(e==="value"&&c!=="PROGRESS"&&!c.includes("-")){t._value=n;const l=c==="OPTION"?t.getAttribute("value"):t.value,f=n??"";l!==f&&(t.value=f),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Io(n):n==null&&l==="string"?(n="",a=!0):l==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function Tu(t,e,n,r){t.addEventListener(e,n,r)}function Su(t,e,n,r){t.removeEventListener(e,n,r)}const Ei=Symbol("_vei");function Ru(t,e,n,r,s=null){const i=t[Ei]||(t[Ei]={}),o=i[e];if(r&&o)o.value=r;else{const[c,a]=Cu(e);if(r){const l=i[e]=Ou(r,s);Tu(t,c,l,a)}else o&&(Su(t,c,o,a),i[e]=void 0)}}const bi=/(?:Once|Passive|Capture)$/;function Cu(t){let e;if(bi.test(t)){e={};let r;for(;r=t.match(bi);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Qt(t.slice(2)),e]}let Nr=0;const Au=Promise.resolve(),Pu=()=>Nr||(Au.then(()=>Nr=0),Nr=Date.now());function Ou(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Se(ku(r,n.value),e,5,[r])};return n.value=t,n.attached=Pu(),n}function ku(t,e){if(B(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Ii=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Nu=(t,e,n,r,s,i,o,c,a)=>{const l=s==="svg";e==="class"?_u(t,r,l):e==="style"?Eu(t,n,r):ar(e)?ps(e)||Ru(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Du(t,e,r,l))?wu(t,e,r,i,o,c,a):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Iu(t,e,r,l))};function Du(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Ii(e)&&H(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Ii(e)&&ie(n)?!1:e in t}const Lu=oe({patchProp:Nu},gu);let wi;function Mu(){return wi||(wi=Gl(Lu))}const xu=(...t)=>{const e=Mu().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=Fu(r);if(!s)return;const i=e._component;!H(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,Uu(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function Uu(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Fu(t){return ie(t)?document.querySelector(t):t}/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const Dt=typeof window<"u";function $u(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const q=Object.assign;function Dr(t,e){const n={};for(const r in e){const s=e[r];n[r]=Re(s)?s.map(t):t(s)}return n}const fn=()=>{},Re=Array.isArray,Bu=/\/$/,Hu=t=>t.replace(Bu,"");function Lr(t,e,n="/"){let r,s={},i="",o="";const c=e.indexOf("#");let a=e.indexOf("?");return c<a&&c>=0&&(a=-1),a>-1&&(r=e.slice(0,a),i=e.slice(a+1,c>-1?c:e.length),s=t(i)),c>-1&&(r=r||e.slice(0,c),o=e.slice(c,e.length)),r=Ku(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function Vu(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Ti(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function ju(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Gt(e.matched[r],n.matched[s])&&ya(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Gt(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function ya(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Wu(t[n],e[n]))return!1;return!0}function Wu(t,e){return Re(t)?Si(t,e):Re(e)?Si(e,t):t===e}function Si(t,e){return Re(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function Ku(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,c;for(o=0;o<r.length;o++)if(c=r[o],c!==".")if(c==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}var yn;(function(t){t.pop="pop",t.push="push"})(yn||(yn={}));var dn;(function(t){t.back="back",t.forward="forward",t.unknown=""})(dn||(dn={}));function zu(t){if(!t)if(Dt){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Hu(t)}const Gu=/^[^#]+#/;function qu(t,e){return t.replace(Gu,"#")+e}function Ju(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const yr=()=>({left:window.pageXOffset,top:window.pageYOffset});function Yu(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=Ju(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Ri(t,e){return(history.state?history.state.position-e:-1)+t}const rs=new Map;function Xu(t,e){rs.set(t,e)}function Qu(t){const e=rs.get(t);return rs.delete(t),e}let Zu=()=>location.protocol+"//"+location.host;function Ea(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let c=s.includes(t.slice(i))?t.slice(i).length:1,a=s.slice(c);return a[0]!=="/"&&(a="/"+a),Ti(a,"")}return Ti(n,t)+r+s}function ef(t,e,n,r){let s=[],i=[],o=null;const c=({state:g})=>{const y=Ea(t,location),C=n.value,N=e.value;let L=0;if(g){if(n.value=y,e.value=g,o&&o===C){o=null;return}L=N?g.position-N.position:0}else r(y);s.forEach(P=>{P(n.value,C,{delta:L,type:yn.pop,direction:L?L>0?dn.forward:dn.back:dn.unknown})})};function a(){o=n.value}function l(g){s.push(g);const y=()=>{const C=s.indexOf(g);C>-1&&s.splice(C,1)};return i.push(y),y}function f(){const{history:g}=window;g.state&&g.replaceState(q({},g.state,{scroll:yr()}),"")}function h(){for(const g of i)g();i=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",f,{passive:!0}),{pauseListeners:a,listen:l,destroy:h}}function Ci(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?yr():null}}function tf(t){const{history:e,location:n}=window,r={value:Ea(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(a,l,f){const h=t.indexOf("#"),g=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+a:Zu()+t+a;try{e[f?"replaceState":"pushState"](l,"",g),s.value=l}catch(y){console.error(y),n[f?"replace":"assign"](g)}}function o(a,l){const f=q({},e.state,Ci(s.value.back,a,s.value.forward,!0),l,{position:s.value.position});i(a,f,!0),r.value=a}function c(a,l){const f=q({},s.value,e.state,{forward:a,scroll:yr()});i(f.current,f,!0);const h=q({},Ci(r.value,a,null),{position:f.position+1},l);i(a,h,!1),r.value=a}return{location:r,state:s,push:c,replace:o}}function nf(t){t=zu(t);const e=tf(t),n=ef(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=q({location:"",base:t,go:r,createHref:qu.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function rf(t){return typeof t=="string"||t&&typeof t=="object"}function ba(t){return typeof t=="string"||typeof t=="symbol"}const Xe={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Ia=Symbol("");var Ai;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Ai||(Ai={}));function qt(t,e){return q(new Error,{type:t,[Ia]:!0},e)}function Be(t,e){return t instanceof Error&&Ia in t&&(e==null||!!(t.type&e))}const Pi="[^/]+?",sf={sensitive:!1,strict:!1,start:!0,end:!0},of=/[.+*?^${}()[\]/\\]/g;function af(t,e){const n=q({},sf,e),r=[];let s=n.start?"^":"";const i=[];for(const l of t){const f=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let h=0;h<l.length;h++){const g=l[h];let y=40+(n.sensitive?.25:0);if(g.type===0)h||(s+="/"),s+=g.value.replace(of,"\\$&"),y+=40;else if(g.type===1){const{value:C,repeatable:N,optional:L,regexp:P}=g;i.push({name:C,repeatable:N,optional:L});const M=P||Pi;if(M!==Pi){y+=10;try{new RegExp(`(${M})`)}catch(j){throw new Error(`Invalid custom RegExp for param "${C}" (${M}): `+j.message)}}let U=N?`((?:${M})(?:/(?:${M}))*)`:`(${M})`;h||(U=L&&l.length<2?`(?:/${U})`:"/"+U),L&&(U+="?"),s+=U,y+=20,L&&(y+=-8),N&&(y+=-20),M===".*"&&(y+=-50)}f.push(y)}r.push(f)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function c(l){const f=l.match(o),h={};if(!f)return null;for(let g=1;g<f.length;g++){const y=f[g]||"",C=i[g-1];h[C.name]=y&&C.repeatable?y.split("/"):y}return h}function a(l){let f="",h=!1;for(const g of t){(!h||!f.endsWith("/"))&&(f+="/"),h=!1;for(const y of g)if(y.type===0)f+=y.value;else if(y.type===1){const{value:C,repeatable:N,optional:L}=y,P=C in l?l[C]:"";if(Re(P)&&!N)throw new Error(`Provided param "${C}" is an array but it is not repeatable (* or + modifiers)`);const M=Re(P)?P.join("/"):P;if(!M)if(L)g.length<2&&(f.endsWith("/")?f=f.slice(0,-1):h=!0);else throw new Error(`Missing required param "${C}"`);f+=M}}return f||"/"}return{re:o,score:r,keys:i,parse:c,stringify:a}}function cf(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function lf(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=cf(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Oi(r))return 1;if(Oi(s))return-1}return s.length-r.length}function Oi(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const uf={type:0,value:""},ff=/[a-zA-Z0-9_]/;function df(t){if(!t)return[[]];if(t==="/")return[[uf]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(y){throw new Error(`ERR (${n})/"${l}": ${y}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let c=0,a,l="",f="";function h(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(a==="*"||a==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:f,repeatable:a==="*"||a==="+",optional:a==="*"||a==="?"})):e("Invalid state to consume buffer"),l="")}function g(){l+=a}for(;c<t.length;){if(a=t[c++],a==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:a==="/"?(l&&h(),o()):a===":"?(h(),n=1):g();break;case 4:g(),n=r;break;case 1:a==="("?n=2:ff.test(a)?g():(h(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&c--);break;case 2:a===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+a:n=3:f+=a;break;case 3:h(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&c--,f="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),s}function hf(t,e,n){const r=af(df(t.path),n),s=q(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function pf(t,e){const n=[],r=new Map;e=Di({strict:!1,end:!0,sensitive:!1},e);function s(f){return r.get(f)}function i(f,h,g){const y=!g,C=gf(f);C.aliasOf=g&&g.record;const N=Di(e,f),L=[C];if("alias"in f){const U=typeof f.alias=="string"?[f.alias]:f.alias;for(const j of U)L.push(q({},C,{components:g?g.record.components:C.components,path:j,aliasOf:g?g.record:C}))}let P,M;for(const U of L){const{path:j}=U;if(h&&j[0]!=="/"){const ee=h.record.path,F=ee[ee.length-1]==="/"?"":"/";U.path=h.record.path+(j&&F+j)}if(P=hf(U,h,N),g?g.alias.push(P):(M=M||P,M!==P&&M.alias.push(P),y&&f.name&&!Ni(P)&&o(f.name)),C.children){const ee=C.children;for(let F=0;F<ee.length;F++)i(ee[F],P,g&&g.children[F])}g=g||P,(P.record.components&&Object.keys(P.record.components).length||P.record.name||P.record.redirect)&&a(P)}return M?()=>{o(M)}:fn}function o(f){if(ba(f)){const h=r.get(f);h&&(r.delete(f),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(f);h>-1&&(n.splice(h,1),f.record.name&&r.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function c(){return n}function a(f){let h=0;for(;h<n.length&&lf(f,n[h])>=0&&(f.record.path!==n[h].record.path||!wa(f,n[h]));)h++;n.splice(h,0,f),f.record.name&&!Ni(f)&&r.set(f.record.name,f)}function l(f,h){let g,y={},C,N;if("name"in f&&f.name){if(g=r.get(f.name),!g)throw qt(1,{location:f});N=g.record.name,y=q(ki(h.params,g.keys.filter(M=>!M.optional).map(M=>M.name)),f.params&&ki(f.params,g.keys.map(M=>M.name))),C=g.stringify(y)}else if("path"in f)C=f.path,g=n.find(M=>M.re.test(C)),g&&(y=g.parse(C),N=g.record.name);else{if(g=h.name?r.get(h.name):n.find(M=>M.re.test(h.path)),!g)throw qt(1,{location:f,currentLocation:h});N=g.record.name,y=q({},h.params,f.params),C=g.stringify(y)}const L=[];let P=g;for(;P;)L.unshift(P.record),P=P.parent;return{name:N,path:C,params:y,matched:L,meta:_f(L)}}return t.forEach(f=>i(f)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:c,getRecordMatcher:s}}function ki(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function gf(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:mf(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function mf(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function Ni(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function _f(t){return t.reduce((e,n)=>q(e,n.meta),{})}function Di(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function wa(t,e){return e.children.some(n=>n===t||wa(t,n))}const Ta=/#/g,vf=/&/g,yf=/\//g,Ef=/=/g,bf=/\?/g,Sa=/\+/g,If=/%5B/g,wf=/%5D/g,Ra=/%5E/g,Tf=/%60/g,Ca=/%7B/g,Sf=/%7C/g,Aa=/%7D/g,Rf=/%20/g;function Ds(t){return encodeURI(""+t).replace(Sf,"|").replace(If,"[").replace(wf,"]")}function Cf(t){return Ds(t).replace(Ca,"{").replace(Aa,"}").replace(Ra,"^")}function ss(t){return Ds(t).replace(Sa,"%2B").replace(Rf,"+").replace(Ta,"%23").replace(vf,"%26").replace(Tf,"`").replace(Ca,"{").replace(Aa,"}").replace(Ra,"^")}function Af(t){return ss(t).replace(Ef,"%3D")}function Pf(t){return Ds(t).replace(Ta,"%23").replace(bf,"%3F")}function Of(t){return t==null?"":Pf(t).replace(yf,"%2F")}function Zn(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function kf(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(Sa," "),o=i.indexOf("="),c=Zn(o<0?i:i.slice(0,o)),a=o<0?null:Zn(i.slice(o+1));if(c in e){let l=e[c];Re(l)||(l=e[c]=[l]),l.push(a)}else e[c]=a}return e}function Li(t){let e="";for(let n in t){const r=t[n];if(n=Af(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Re(r)?r.map(i=>i&&ss(i)):[r&&ss(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function Nf(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Re(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const Df=Symbol(""),Mi=Symbol(""),Ls=Symbol(""),Pa=Symbol(""),is=Symbol("");function sn(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function tt(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,c)=>{const a=h=>{h===!1?c(qt(4,{from:n,to:e})):h instanceof Error?c(h):rf(h)?c(qt(2,{from:e,to:h})):(i&&r.enterCallbacks[s]===i&&typeof h=="function"&&i.push(h),o())},l=t.call(r&&r.instances[s],e,n,a);let f=Promise.resolve(l);t.length<3&&(f=f.then(a)),f.catch(h=>c(h))})}function Mr(t,e,n,r){const s=[];for(const i of t)for(const o in i.components){let c=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(Lf(c)){const l=(c.__vccOpts||c)[e];l&&s.push(tt(l,n,r,i,o))}else{let a=c();s.push(()=>a.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const f=$u(l)?l.default:l;i.components[o]=f;const g=(f.__vccOpts||f)[e];return g&&tt(g,n,r,i,o)()}))}}return s}function Lf(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function xi(t){const e=Ke(Ls),n=Ke(Pa),r=we(()=>e.resolve(bt(t.to))),s=we(()=>{const{matched:a}=r.value,{length:l}=a,f=a[l-1],h=n.matched;if(!f||!h.length)return-1;const g=h.findIndex(Gt.bind(null,f));if(g>-1)return g;const y=Ui(a[l-2]);return l>1&&Ui(f)===y&&h[h.length-1].path!==y?h.findIndex(Gt.bind(null,a[l-2])):g}),i=we(()=>s.value>-1&&Ff(n.params,r.value.params)),o=we(()=>s.value>-1&&s.value===n.matched.length-1&&ya(n.params,r.value.params));function c(a={}){return Uf(a)?e[bt(t.replace)?"replace":"push"](bt(t.to)).catch(fn):Promise.resolve()}return{route:r,href:we(()=>r.value.href),isActive:i,isExactActive:o,navigate:c}}const Mf=Zo({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:xi,setup(t,{slots:e}){const n=fr(xi(t)),{options:r}=Ke(Ls),s=we(()=>({[Fi(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Fi(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:va("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),xf=Mf;function Uf(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Ff(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Re(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Ui(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Fi=(t,e,n)=>t??e??n,$f=Zo({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Ke(is),s=we(()=>t.route||r.value),i=Ke(Mi,0),o=we(()=>{let l=bt(i);const{matched:f}=s.value;let h;for(;(h=f[l])&&!h.components;)l++;return l}),c=we(()=>s.value.matched[o.value]);Vn(Mi,we(()=>o.value+1)),Vn(Df,c),Vn(is,s);const a=Ho();return Bn(()=>[a.value,c.value,t.name],([l,f,h],[g,y,C])=>{f&&(f.instances[h]=l,y&&y!==f&&l&&l===g&&(f.leaveGuards.size||(f.leaveGuards=y.leaveGuards),f.updateGuards.size||(f.updateGuards=y.updateGuards))),l&&f&&(!y||!Gt(f,y)||!g)&&(f.enterCallbacks[h]||[]).forEach(N=>N(l))},{flush:"post"}),()=>{const l=s.value,f=t.name,h=c.value,g=h&&h.components[f];if(!g)return $i(n.default,{Component:g,route:l});const y=h.props[f],C=y?y===!0?l.params:typeof y=="function"?y(l):y:null,L=va(g,q({},C,e,{onVnodeUnmounted:P=>{P.component.isUnmounted&&(h.instances[f]=null)},ref:a}));return $i(n.default,{Component:L,route:l})||L}}});function $i(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Oa=$f;function Bf(t){const e=pf(t.routes,t),n=t.parseQuery||kf,r=t.stringifyQuery||Li,s=t.history,i=sn(),o=sn(),c=sn(),a=rl(Xe);let l=Xe;Dt&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=Dr.bind(null,_=>""+_),h=Dr.bind(null,Of),g=Dr.bind(null,Zn);function y(_,A){let T,O;return ba(_)?(T=e.getRecordMatcher(_),O=A):O=_,e.addRoute(O,T)}function C(_){const A=e.getRecordMatcher(_);A&&e.removeRoute(A)}function N(){return e.getRoutes().map(_=>_.record)}function L(_){return!!e.getRecordMatcher(_)}function P(_,A){if(A=q({},A||a.value),typeof _=="string"){const p=Lr(n,_,A.path),m=e.resolve({path:p.path},A),v=s.createHref(p.fullPath);return q(p,m,{params:g(m.params),hash:Zn(p.hash),redirectedFrom:void 0,href:v})}let T;if("path"in _)T=q({},_,{path:Lr(n,_.path,A.path).path});else{const p=q({},_.params);for(const m in p)p[m]==null&&delete p[m];T=q({},_,{params:h(p)}),A.params=h(A.params)}const O=e.resolve(T,A),G=_.hash||"";O.params=f(g(O.params));const u=Vu(r,q({},_,{hash:Cf(G),path:O.path})),d=s.createHref(u);return q({fullPath:u,hash:G,query:r===Li?Nf(_.query):_.query||{}},O,{redirectedFrom:void 0,href:d})}function M(_){return typeof _=="string"?Lr(n,_,a.value.path):q({},_)}function U(_,A){if(l!==_)return qt(8,{from:A,to:_})}function j(_){return ne(_)}function ee(_){return j(q(M(_),{replace:!0}))}function F(_){const A=_.matched[_.matched.length-1];if(A&&A.redirect){const{redirect:T}=A;let O=typeof T=="function"?T(_):T;return typeof O=="string"&&(O=O.includes("?")||O.includes("#")?O=M(O):{path:O},O.params={}),q({query:_.query,hash:_.hash,params:"path"in O?{}:_.params},O)}}function ne(_,A){const T=l=P(_),O=a.value,G=_.state,u=_.force,d=_.replace===!0,p=F(T);if(p)return ne(q(M(p),{state:typeof p=="object"?q({},G,p.state):G,force:u,replace:d}),A||T);const m=T;m.redirectedFrom=A;let v;return!u&&ju(r,O,T)&&(v=qt(16,{to:m,from:O}),Oe(O,O,!0,!1)),(v?Promise.resolve(v):ve(m,O)).catch(E=>Be(E)?Be(E,2)?E:Je(E):z(E,m,O)).then(E=>{if(E){if(Be(E,2))return ne(q({replace:d},M(E.to),{state:typeof E.to=="object"?q({},G,E.to.state):G,force:u}),A||m)}else E=pt(m,O,!0,d,G);return qe(m,O,E),E})}function de(_,A){const T=U(_,A);return T?Promise.reject(T):Promise.resolve()}function Ae(_){const A=kt.values().next().value;return A&&typeof A.runWithContext=="function"?A.runWithContext(_):_()}function ve(_,A){let T;const[O,G,u]=Hf(_,A);T=Mr(O.reverse(),"beforeRouteLeave",_,A);for(const p of O)p.leaveGuards.forEach(m=>{T.push(tt(m,_,A))});const d=de.bind(null,_,A);return T.push(d),ae(T).then(()=>{T=[];for(const p of i.list())T.push(tt(p,_,A));return T.push(d),ae(T)}).then(()=>{T=Mr(G,"beforeRouteUpdate",_,A);for(const p of G)p.updateGuards.forEach(m=>{T.push(tt(m,_,A))});return T.push(d),ae(T)}).then(()=>{T=[];for(const p of u)if(p.beforeEnter)if(Re(p.beforeEnter))for(const m of p.beforeEnter)T.push(tt(m,_,A));else T.push(tt(p.beforeEnter,_,A));return T.push(d),ae(T)}).then(()=>(_.matched.forEach(p=>p.enterCallbacks={}),T=Mr(u,"beforeRouteEnter",_,A),T.push(d),ae(T))).then(()=>{T=[];for(const p of o.list())T.push(tt(p,_,A));return T.push(d),ae(T)}).catch(p=>Be(p,8)?p:Promise.reject(p))}function qe(_,A,T){c.list().forEach(O=>Ae(()=>O(_,A,T)))}function pt(_,A,T,O,G){const u=U(_,A);if(u)return u;const d=A===Xe,p=Dt?history.state:{};T&&(O||d?s.replace(_.fullPath,q({scroll:d&&p&&p.scroll},G)):s.push(_.fullPath,G)),a.value=_,Oe(_,A,T,d),Je()}let Pe;function tn(){Pe||(Pe=s.listen((_,A,T)=>{if(!kn.listening)return;const O=P(_),G=F(O);if(G){ne(q(G,{replace:!0}),O).catch(fn);return}l=O;const u=a.value;Dt&&Xu(Ri(u.fullPath,T.delta),yr()),ve(O,u).catch(d=>Be(d,12)?d:Be(d,2)?(ne(d.to,O).then(p=>{Be(p,20)&&!T.delta&&T.type===yn.pop&&s.go(-1,!1)}).catch(fn),Promise.reject()):(T.delta&&s.go(-T.delta,!1),z(d,O,u))).then(d=>{d=d||pt(O,u,!1),d&&(T.delta&&!Be(d,8)?s.go(-T.delta,!1):T.type===yn.pop&&Be(d,20)&&s.go(-1,!1)),qe(O,u,d)}).catch(fn)}))}let Pt=sn(),re=sn(),J;function z(_,A,T){Je(_);const O=re.list();return O.length?O.forEach(G=>G(_,A,T)):console.error(_),Promise.reject(_)}function $e(){return J&&a.value!==Xe?Promise.resolve():new Promise((_,A)=>{Pt.add([_,A])})}function Je(_){return J||(J=!_,tn(),Pt.list().forEach(([A,T])=>_?T(_):A()),Pt.reset()),_}function Oe(_,A,T,O){const{scrollBehavior:G}=t;if(!Dt||!G)return Promise.resolve();const u=!T&&Qu(Ri(_.fullPath,0))||(O||!T)&&history.state&&history.state.scroll||null;return Ko().then(()=>G(_,A,u)).then(d=>d&&Yu(d)).catch(d=>z(d,_,A))}const he=_=>s.go(_);let Ot;const kt=new Set,kn={currentRoute:a,listening:!0,addRoute:y,removeRoute:C,hasRoute:L,getRoutes:N,resolve:P,options:t,push:j,replace:ee,go:he,back:()=>he(-1),forward:()=>he(1),beforeEach:i.add,beforeResolve:o.add,afterEach:c.add,onError:re.add,isReady:$e,install(_){const A=this;_.component("RouterLink",xf),_.component("RouterView",Oa),_.config.globalProperties.$router=A,Object.defineProperty(_.config.globalProperties,"$route",{enumerable:!0,get:()=>bt(a)}),Dt&&!Ot&&a.value===Xe&&(Ot=!0,j(s.location).catch(G=>{}));const T={};for(const G in Xe)Object.defineProperty(T,G,{get:()=>a.value[G],enumerable:!0});_.provide(Ls,A),_.provide(Pa,Mo(T)),_.provide(is,a);const O=_.unmount;kt.add(_),_.unmount=function(){kt.delete(_),kt.size<1&&(l=Xe,Pe&&Pe(),Pe=null,a.value=Xe,Ot=!1,J=!1),O()}}};function ae(_){return _.reduce((A,T)=>A.then(()=>Ae(T)),Promise.resolve())}return kn}function Hf(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const c=e.matched[o];c&&(t.matched.find(l=>Gt(l,c))?r.push(c):n.push(c));const a=t.matched[o];a&&(e.matched.find(l=>Gt(l,a))||s.push(a))}return[n,r,s]}const Vf=_r("h2",null," coucou ",-1),jf={__name:"App",setup(t){return(e,n)=>(ha(),pa(De,null,[Vf,Ee(bt(Oa))],64))}};var Bi={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ka=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Wf=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],c=t[n++],a=((s&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(a>>10)),e[r++]=String.fromCharCode(56320+(a&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Na={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,c=o?t[s+1]:0,a=s+2<t.length,l=a?t[s+2]:0,f=i>>2,h=(i&3)<<4|c>>4;let g=(c&15)<<2|l>>6,y=l&63;a||(y=64,o||(g=64)),r.push(n[f],n[h],n[g],n[y])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(ka(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Wf(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],c=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||c==null||l==null||h==null)throw new Kf;const g=i<<2|c>>4;if(r.push(g),l!==64){const y=c<<4&240|l>>2;if(r.push(y),h!==64){const C=l<<6&192|h;r.push(C)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Kf extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const zf=function(t){const e=ka(t);return Na.encodeByteArray(e,!0)},Da=function(t){return zf(t).replace(/\./g,"")},La=function(t){try{return Na.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gf(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qf=()=>Gf().__FIREBASE_DEFAULTS__,Jf=()=>{if(typeof process>"u"||typeof Bi>"u")return;const t=Bi.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Yf=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&La(t[1]);return e&&JSON.parse(e)},Ms=()=>{try{return qf()||Jf()||Yf()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Xf=t=>{var e,n;return(n=(e=Ms())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Ma=()=>{var t;return(t=Ms())===null||t===void 0?void 0:t.config},xa=t=>{var e;return(e=Ms())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qf{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function le(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Zf(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(le())}function ed(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function td(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function nd(){const t=le();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function rd(){try{return typeof indexedDB=="object"}catch{return!1}}function sd(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const id="FirebaseError";class ft extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=id,Object.setPrototypeOf(this,ft.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Sn.prototype.create)}}class Sn{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?od(i,r):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new ft(s,c,r)}}function od(t,e){return t.replace(ad,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const ad=/\{\$([^}]+)}/g;function cd(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function er(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Hi(i)&&Hi(o)){if(!er(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Hi(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rn(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function an(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function cn(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function ld(t,e){const n=new ud(t,e);return n.subscribe.bind(n)}class ud{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");fd(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=xr),s.error===void 0&&(s.error=xr),s.complete===void 0&&(s.complete=xr);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function fd(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function xr(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dt(t){return t&&t._delegate?t._delegate:t}class Jt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _t="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dd{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Qf;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(pd(e))try{this.getOrInitializeService({instanceIdentifier:_t})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=_t){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=_t){return this.instances.has(e)}getOptions(e=_t){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:hd(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=_t){return this.component?this.component.multipleInstances?e:_t:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function hd(t){return t===_t?void 0:t}function pd(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gd{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new dd(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var X;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(X||(X={}));const md={debug:X.DEBUG,verbose:X.VERBOSE,info:X.INFO,warn:X.WARN,error:X.ERROR,silent:X.SILENT},_d=X.INFO,vd={[X.DEBUG]:"log",[X.VERBOSE]:"log",[X.INFO]:"info",[X.WARN]:"warn",[X.ERROR]:"error"},yd=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=vd[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ua{constructor(e){this.name=e,this._logLevel=_d,this._logHandler=yd,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in X))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?md[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,X.DEBUG,...e),this._logHandler(this,X.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,X.VERBOSE,...e),this._logHandler(this,X.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,X.INFO,...e),this._logHandler(this,X.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,X.WARN,...e),this._logHandler(this,X.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,X.ERROR,...e),this._logHandler(this,X.ERROR,...e)}}const Ed=(t,e)=>e.some(n=>t instanceof n);let Vi,ji;function bd(){return Vi||(Vi=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Id(){return ji||(ji=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Fa=new WeakMap,os=new WeakMap,$a=new WeakMap,Ur=new WeakMap,xs=new WeakMap;function wd(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(ct(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Fa.set(n,t)}).catch(()=>{}),xs.set(e,t),e}function Td(t){if(os.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});os.set(t,e)}let as={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return os.get(t);if(e==="objectStoreNames")return t.objectStoreNames||$a.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ct(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Sd(t){as=t(as)}function Rd(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Fr(this),e,...n);return $a.set(r,e.sort?e.sort():[e]),ct(r)}:Id().includes(t)?function(...e){return t.apply(Fr(this),e),ct(Fa.get(this))}:function(...e){return ct(t.apply(Fr(this),e))}}function Cd(t){return typeof t=="function"?Rd(t):(t instanceof IDBTransaction&&Td(t),Ed(t,bd())?new Proxy(t,as):t)}function ct(t){if(t instanceof IDBRequest)return wd(t);if(Ur.has(t))return Ur.get(t);const e=Cd(t);return e!==t&&(Ur.set(t,e),xs.set(e,t)),e}const Fr=t=>xs.get(t);function Ad(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),c=ct(o);return r&&o.addEventListener("upgradeneeded",a=>{r(ct(o.result),a.oldVersion,a.newVersion,ct(o.transaction),a)}),n&&o.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),c.then(a=>{i&&a.addEventListener("close",()=>i()),s&&a.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),c}const Pd=["get","getKey","getAll","getAllKeys","count"],Od=["put","add","delete","clear"],$r=new Map;function Wi(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if($r.get(e))return $r.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=Od.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Pd.includes(n)))return;const i=async function(o,...c){const a=this.transaction(o,s?"readwrite":"readonly");let l=a.store;return r&&(l=l.index(c.shift())),(await Promise.all([l[n](...c),s&&a.done]))[0]};return $r.set(e,i),i}Sd(t=>({...t,get:(e,n,r)=>Wi(e,n)||t.get(e,n,r),has:(e,n)=>!!Wi(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kd{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Nd(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Nd(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const cs="@firebase/app",Ki="0.9.25";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tt=new Ua("@firebase/app"),Dd="@firebase/app-compat",Ld="@firebase/analytics-compat",Md="@firebase/analytics",xd="@firebase/app-check-compat",Ud="@firebase/app-check",Fd="@firebase/auth",$d="@firebase/auth-compat",Bd="@firebase/database",Hd="@firebase/database-compat",Vd="@firebase/functions",jd="@firebase/functions-compat",Wd="@firebase/installations",Kd="@firebase/installations-compat",zd="@firebase/messaging",Gd="@firebase/messaging-compat",qd="@firebase/performance",Jd="@firebase/performance-compat",Yd="@firebase/remote-config",Xd="@firebase/remote-config-compat",Qd="@firebase/storage",Zd="@firebase/storage-compat",eh="@firebase/firestore",th="@firebase/firestore-compat",nh="firebase",rh="10.7.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ls="[DEFAULT]",sh={[cs]:"fire-core",[Dd]:"fire-core-compat",[Md]:"fire-analytics",[Ld]:"fire-analytics-compat",[Ud]:"fire-app-check",[xd]:"fire-app-check-compat",[Fd]:"fire-auth",[$d]:"fire-auth-compat",[Bd]:"fire-rtdb",[Hd]:"fire-rtdb-compat",[Vd]:"fire-fn",[jd]:"fire-fn-compat",[Wd]:"fire-iid",[Kd]:"fire-iid-compat",[zd]:"fire-fcm",[Gd]:"fire-fcm-compat",[qd]:"fire-perf",[Jd]:"fire-perf-compat",[Yd]:"fire-rc",[Xd]:"fire-rc-compat",[Qd]:"fire-gcs",[Zd]:"fire-gcs-compat",[eh]:"fire-fst",[th]:"fire-fst-compat","fire-js":"fire-js",[nh]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tr=new Map,us=new Map;function ih(t,e){try{t.container.addComponent(e)}catch(n){Tt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function En(t){const e=t.name;if(us.has(e))return Tt.debug(`There were multiple attempts to register component ${e}.`),!1;us.set(e,t);for(const n of tr.values())ih(n,t);return!0}function Ba(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oh={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},lt=new Sn("app","Firebase",oh);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ah{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Jt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw lt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cn=rh;function Ha(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:ls,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw lt.create("bad-app-name",{appName:String(s)});if(n||(n=Ma()),!n)throw lt.create("no-options");const i=tr.get(s);if(i){if(er(n,i.options)&&er(r,i.config))return i;throw lt.create("duplicate-app",{appName:s})}const o=new gd(s);for(const a of us.values())o.addComponent(a);const c=new ah(n,r,o);return tr.set(s,c),c}function ch(t=ls){const e=tr.get(t);if(!e&&t===ls&&Ma())return Ha();if(!e)throw lt.create("no-app",{appName:t});return e}function Bt(t,e,n){var r;let s=(r=sh[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const c=[`Unable to register library "${s}" with version "${e}":`];i&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&c.push("and"),o&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Tt.warn(c.join(" "));return}En(new Jt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lh="firebase-heartbeat-database",uh=1,bn="firebase-heartbeat-store";let Br=null;function Va(){return Br||(Br=Ad(lh,uh,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(bn)}}}).catch(t=>{throw lt.create("idb-open",{originalErrorMessage:t.message})})),Br}async function fh(t){try{return await(await Va()).transaction(bn).objectStore(bn).get(ja(t))}catch(e){if(e instanceof ft)Tt.warn(e.message);else{const n=lt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Tt.warn(n.message)}}}async function zi(t,e){try{const r=(await Va()).transaction(bn,"readwrite");await r.objectStore(bn).put(e,ja(t)),await r.done}catch(n){if(n instanceof ft)Tt.warn(n.message);else{const r=lt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Tt.warn(r.message)}}}function ja(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dh=1024,hh=30*24*60*60*1e3;class ph{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new mh(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Gi();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const c=new Date(o.date).valueOf();return Date.now()-c<=hh}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Gi(),{heartbeatsToSend:r,unsentEntries:s}=gh(this._heartbeatsCache.heartbeats),i=Da(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Gi(){return new Date().toISOString().substring(0,10)}function gh(t,e=dh){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),qi(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),qi(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class mh{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return rd()?sd().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await fh(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return zi(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return zi(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function qi(t){return Da(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _h(t){En(new Jt("platform-logger",e=>new kd(e),"PRIVATE")),En(new Jt("heartbeat",e=>new ph(e),"PRIVATE")),Bt(cs,Ki,t),Bt(cs,Ki,"esm2017"),Bt("fire-js","")}_h("");var vh="firebase",yh="10.7.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Bt(vh,yh,"app");function Us(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Wa(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Eh=Wa,Ka=new Sn("auth","Firebase",Wa());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nr=new Ua("@firebase/auth");function bh(t,...e){nr.logLevel<=X.WARN&&nr.warn(`Auth (${Cn}): ${t}`,...e)}function Wn(t,...e){nr.logLevel<=X.ERROR&&nr.error(`Auth (${Cn}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ce(t,...e){throw Fs(t,...e)}function Ue(t,...e){return Fs(t,...e)}function Ih(t,e,n){const r=Object.assign(Object.assign({},Eh()),{[e]:n});return new Sn("auth","Firebase",r).create(e,{appName:t.name})}function Fs(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Ka.create(t,...e)}function x(t,e,...n){if(!t)throw Fs(e,...n)}function Ve(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Wn(e),new Error(e)}function ze(t,e){t||Ve(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fs(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function wh(){return Ji()==="http:"||Ji()==="https:"}function Ji(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Th(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(wh()||ed()||"connection"in navigator)?navigator.onLine:!0}function Sh(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An{constructor(e,n){this.shortDelay=e,this.longDelay=n,ze(n>e,"Short delay should be less than long delay!"),this.isMobile=Zf()||td()}get(){return Th()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $s(t,e){ze(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class za{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ve("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ve("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ve("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rh={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ch=new An(3e4,6e4);function At(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ht(t,e,n,r,s={}){return Ga(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const c=Rn(Object.assign({key:t.config.apiKey},o)).slice(1),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode),za.fetch()(qa(t,t.config.apiHost,n,c),Object.assign({method:e,headers:a,referrerPolicy:"no-referrer"},i))})}async function Ga(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Rh),e);try{const s=new Ph(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Fn(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[a,l]=c.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw Fn(t,"credential-already-in-use",o);if(a==="EMAIL_EXISTS")throw Fn(t,"email-already-in-use",o);if(a==="USER_DISABLED")throw Fn(t,"user-disabled",o);const f=r[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Ih(t,f,l);Ce(t,f)}}catch(s){if(s instanceof ft)throw s;Ce(t,"network-request-failed",{message:String(s)})}}async function Er(t,e,n,r,s={}){const i=await ht(t,e,n,r,s);return"mfaPendingCredential"in i&&Ce(t,"multi-factor-auth-required",{_serverResponse:i}),i}function qa(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?$s(t.config,s):`${t.config.apiScheme}://${s}`}function Ah(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Ph{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Ue(this.auth,"network-request-failed")),Ch.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Fn(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Ue(t,e,r);return s.customData._tokenResponse=n,s}function Yi(t){return t!==void 0&&t.enterprise!==void 0}class Oh{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return Ah(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function kh(t,e){return ht(t,"GET","/v2/recaptchaConfig",At(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nh(t,e){return ht(t,"POST","/v1/accounts:delete",e)}async function Dh(t,e){return ht(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hn(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Lh(t,e=!1){const n=dt(t),r=await n.getIdToken(e),s=Bs(r);x(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:hn(Hr(s.auth_time)),issuedAtTime:hn(Hr(s.iat)),expirationTime:hn(Hr(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Hr(t){return Number(t)*1e3}function Bs(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Wn("JWT malformed, contained fewer than 3 sections"),null;try{const s=La(n);return s?JSON.parse(s):(Wn("Failed to decode base64 JWT payload"),null)}catch(s){return Wn("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Mh(t){const e=Bs(t);return x(e,"internal-error"),x(typeof e.exp<"u","internal-error"),x(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function In(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof ft&&xh(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function xh({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uh{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ja{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=hn(this.lastLoginAt),this.creationTime=hn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rr(t){var e;const n=t.auth,r=await t.getIdToken(),s=await In(t,Dh(n,{idToken:r}));x(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Bh(i.providerUserInfo):[],c=$h(t.providerData,o),a=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(c!=null&&c.length),f=a?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new Ja(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(t,h)}async function Fh(t){const e=dt(t);await rr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function $h(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Bh(t){return t.map(e=>{var{providerId:n}=e,r=Us(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hh(t,e){const n=await Ga(t,{},async()=>{const r=Rn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=qa(t,s,"/v1/token",`key=${i}`),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",za.fetch()(o,{method:"POST",headers:c,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Vh(t,e){return ht(t,"POST","/v2/accounts:revokeToken",At(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){x(e.idToken,"internal-error"),x(typeof e.idToken<"u","internal-error"),x(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Mh(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return x(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await Hh(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new wn;return r&&(x(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(x(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(x(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new wn,this.toJSON())}_performRefresh(){return Ve("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qe(t,e){x(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class wt{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Us(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Uh(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Ja(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await In(this,this.stsTokenManager.getToken(this.auth,e));return x(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Lh(this,e)}reload(){return Fh(this)}_assign(e){this!==e&&(x(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new wt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){x(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await rr(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await In(this,Nh(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,c,a,l,f;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(s=n.email)!==null&&s!==void 0?s:void 0,y=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,C=(o=n.photoURL)!==null&&o!==void 0?o:void 0,N=(c=n.tenantId)!==null&&c!==void 0?c:void 0,L=(a=n._redirectEventId)!==null&&a!==void 0?a:void 0,P=(l=n.createdAt)!==null&&l!==void 0?l:void 0,M=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:U,emailVerified:j,isAnonymous:ee,providerData:F,stsTokenManager:ne}=n;x(U&&ne,e,"internal-error");const de=wn.fromJSON(this.name,ne);x(typeof U=="string",e,"internal-error"),Qe(h,e.name),Qe(g,e.name),x(typeof j=="boolean",e,"internal-error"),x(typeof ee=="boolean",e,"internal-error"),Qe(y,e.name),Qe(C,e.name),Qe(N,e.name),Qe(L,e.name),Qe(P,e.name),Qe(M,e.name);const Ae=new wt({uid:U,auth:e,email:g,emailVerified:j,displayName:h,isAnonymous:ee,photoURL:C,phoneNumber:y,tenantId:N,stsTokenManager:de,createdAt:P,lastLoginAt:M});return F&&Array.isArray(F)&&(Ae.providerData=F.map(ve=>Object.assign({},ve))),L&&(Ae._redirectEventId=L),Ae}static async _fromIdTokenResponse(e,n,r=!1){const s=new wn;s.updateFromServerResponse(n);const i=new wt({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await rr(i),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xi=new Map;function je(t){ze(t instanceof Function,"Expected a class definition");let e=Xi.get(t);return e?(ze(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Xi.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ya{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Ya.type="NONE";const Qi=Ya;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kn(t,e,n){return`firebase:${t}:${e}:${n}`}class Ht{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Kn(this.userKey,s.apiKey,i),this.fullPersistenceKey=Kn("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?wt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ht(je(Qi),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||je(Qi);const o=Kn(r,e.config.apiKey,e.name);let c=null;for(const l of n)try{const f=await l._get(o);if(f){const h=wt._fromJSON(e,f);l!==i&&(c=h),i=l;break}}catch{}const a=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!a.length?new Ht(i,e,r):(i=a[0],c&&await i._set(o,c.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new Ht(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zi(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Za(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Xa(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(tc(e))return"Blackberry";if(nc(e))return"Webos";if(Hs(e))return"Safari";if((e.includes("chrome/")||Qa(e))&&!e.includes("edge/"))return"Chrome";if(ec(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Xa(t=le()){return/firefox\//i.test(t)}function Hs(t=le()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Qa(t=le()){return/crios\//i.test(t)}function Za(t=le()){return/iemobile/i.test(t)}function ec(t=le()){return/android/i.test(t)}function tc(t=le()){return/blackberry/i.test(t)}function nc(t=le()){return/webos/i.test(t)}function br(t=le()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function jh(t=le()){var e;return br(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Wh(){return nd()&&document.documentMode===10}function rc(t=le()){return br(t)||ec(t)||nc(t)||tc(t)||/windows phone/i.test(t)||Za(t)}function Kh(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sc(t,e=[]){let n;switch(t){case"Browser":n=Zi(le());break;case"Worker":n=`${Zi(le())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Cn}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zh{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,c)=>{try{const a=e(i);o(a)}catch(a){c(a)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gh(t,e={}){return ht(t,"GET","/v2/passwordPolicy",At(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qh=6;class Jh{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:qh,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,c;const a={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,a),this.validatePasswordCharacterOptions(e,a),a.isValid&&(a.isValid=(n=a.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),a.isValid&&(a.isValid=(r=a.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),a.isValid&&(a.isValid=(s=a.containsLowercaseLetter)!==null&&s!==void 0?s:!0),a.isValid&&(a.isValid=(i=a.containsUppercaseLetter)!==null&&i!==void 0?i:!0),a.isValid&&(a.isValid=(o=a.containsNumericCharacter)!==null&&o!==void 0?o:!0),a.isValid&&(a.isValid=(c=a.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),a}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yh{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new eo(this),this.idTokenSubscription=new eo(this),this.beforeStateQueue=new zh(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ka,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=je(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Ht.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,c=s==null?void 0:s._redirectEventId,a=await this.tryRedirectSignIn(e);(!o||o===c)&&(a!=null&&a.user)&&(s=a.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return x(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await rr(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Sh()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?dt(e):null;return n&&x(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&x(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(je(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Gh(this),n=new Jh(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Sn("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Vh(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&je(e)||this._popupRedirectResolver;x(n,this,"argument-error"),this.redirectPersistenceManager=await Ht.create(this,[je(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(x(c,this,"internal-error"),c.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const a=e.addObserver(n,r,s);return()=>{o=!0,a()}}else{const a=e.addObserver(n);return()=>{o=!0,a()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return x(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=sc(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&bh(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Zt(t){return dt(t)}class eo{constructor(e){this.auth=e,this.observer=null,this.addObserver=ld(n=>this.observer=n)}get next(){return x(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xh(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function ic(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Ue("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",Xh().appendChild(r)})}function Qh(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const Zh="https://www.google.com/recaptcha/enterprise.js?render=",ep="recaptcha-enterprise",tp="NO_RECAPTCHA";class np{constructor(e){this.type=ep,this.auth=Zt(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,c)=>{kh(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(a=>{if(a.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const l=new Oh(a);return i.tenantId==null?i._agentRecaptchaConfig=l:i._tenantRecaptchaConfigs[i.tenantId]=l,o(l.siteKey)}}).catch(a=>{c(a)})})}function s(i,o,c){const a=window.grecaptcha;Yi(a)?a.enterprise.ready(()=>{a.enterprise.execute(i,{action:e}).then(l=>{o(l)}).catch(()=>{o(tp)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(c=>{if(!n&&Yi(window.grecaptcha))s(c,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}ic(Zh+c).then(()=>{s(c,i,o)}).catch(a=>{o(a)})}}).catch(c=>{o(c)})})}}async function to(t,e,n,r=!1){const s=new np(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function no(t,e,n,r){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await to(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await to(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rp(t,e){const n=Ba(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(er(i,e??{}))return s;Ce(s,"already-initialized")}return n.initialize({options:e})}function sp(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(je);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function ip(t,e,n){const r=Zt(t);x(r._canInitEmulator,r,"emulator-config-failed"),x(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=oc(e),{host:o,port:c}=op(e),a=c===null?"":`:${c}`;r.config.emulator={url:`${i}//${o}${a}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||ap()}function oc(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function op(t){const e=oc(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:ro(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:ro(o)}}}function ro(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function ap(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Ve("not implemented")}_getIdTokenResponse(e){return Ve("not implemented")}_linkToIdToken(e,n){return Ve("not implemented")}_getReauthenticationResolver(e){return Ve("not implemented")}}async function cp(t,e){return ht(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lp(t,e){return Er(t,"POST","/v1/accounts:signInWithPassword",At(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function up(t,e){return Er(t,"POST","/v1/accounts:signInWithEmailLink",At(t,e))}async function fp(t,e){return Er(t,"POST","/v1/accounts:signInWithEmailLink",At(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn extends Vs{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Tn(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Tn(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return no(e,n,"signInWithPassword",lp);case"emailLink":return up(e,{email:this._email,oobCode:this._password});default:Ce(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return no(e,r,"signUpPassword",cp);case"emailLink":return fp(e,{idToken:n,email:this._email,oobCode:this._password});default:Ce(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vt(t,e){return Er(t,"POST","/v1/accounts:signInWithIdp",At(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dp="http://localhost";class St extends Vs{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new St(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ce("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Us(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new St(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Vt(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Vt(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Vt(e,n)}buildRequest(){const e={requestUri:dp,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Rn(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hp(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function pp(t){const e=an(cn(t)).link,n=e?an(cn(e)).deep_link_id:null,r=an(cn(t)).deep_link_id;return(r?an(cn(r)).link:null)||r||n||e||t}class js{constructor(e){var n,r,s,i,o,c;const a=an(cn(e)),l=(n=a.apiKey)!==null&&n!==void 0?n:null,f=(r=a.oobCode)!==null&&r!==void 0?r:null,h=hp((s=a.mode)!==null&&s!==void 0?s:null);x(l&&f&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=f,this.continueUrl=(i=a.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=a.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(c=a.tenantId)!==null&&c!==void 0?c:null}static parseLink(e){const n=pp(e);try{return new js(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{constructor(){this.providerId=en.PROVIDER_ID}static credential(e,n){return Tn._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=js.parseLink(n);return x(r,"argument-error"),Tn._fromEmailAndCode(e,r.code,r.tenantId)}}en.PROVIDER_ID="password";en.EMAIL_PASSWORD_SIGN_IN_METHOD="password";en.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ac{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn extends ac{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt extends Pn{constructor(){super("facebook.com")}static credential(e){return St._fromParams({providerId:nt.PROVIDER_ID,signInMethod:nt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return nt.credentialFromTaggedObject(e)}static credentialFromError(e){return nt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return nt.credential(e.oauthAccessToken)}catch{return null}}}nt.FACEBOOK_SIGN_IN_METHOD="facebook.com";nt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt extends Pn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return St._fromParams({providerId:rt.PROVIDER_ID,signInMethod:rt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return rt.credentialFromTaggedObject(e)}static credentialFromError(e){return rt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return rt.credential(n,r)}catch{return null}}}rt.GOOGLE_SIGN_IN_METHOD="google.com";rt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st extends Pn{constructor(){super("github.com")}static credential(e){return St._fromParams({providerId:st.PROVIDER_ID,signInMethod:st.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return st.credentialFromTaggedObject(e)}static credentialFromError(e){return st.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return st.credential(e.oauthAccessToken)}catch{return null}}}st.GITHUB_SIGN_IN_METHOD="github.com";st.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it extends Pn{constructor(){super("twitter.com")}static credential(e,n){return St._fromParams({providerId:it.PROVIDER_ID,signInMethod:it.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return it.credentialFromTaggedObject(e)}static credentialFromError(e){return it.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return it.credential(n,r)}catch{return null}}}it.TWITTER_SIGN_IN_METHOD="twitter.com";it.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await wt._fromIdTokenResponse(e,r,s),o=so(r);return new Yt({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=so(r);return new Yt({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function so(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr extends ft{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,sr.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new sr(e,n,r,s)}}function cc(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?sr._fromErrorAndOperation(t,i,e,r):i})}async function gp(t,e,n=!1){const r=await In(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Yt._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mp(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const i=await In(t,cc(r,s,e,t),n);x(i.idToken,r,"internal-error");const o=Bs(i.idToken);x(o,r,"internal-error");const{sub:c}=o;return x(t.uid===c,r,"user-mismatch"),Yt._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Ce(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lc(t,e,n=!1){const r="signIn",s=await cc(t,r,e),i=await Yt._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function _p(t,e){return lc(Zt(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vp(t){const e=Zt(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function yp(t,e,n){return _p(dt(t),en.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&vp(t),r})}function Ep(t,e,n,r){return dt(t).onIdTokenChanged(e,n,r)}function bp(t,e,n){return dt(t).beforeAuthStateChanged(e,n)}function Ip(t,e,n,r){return dt(t).onAuthStateChanged(e,n,r)}const ir="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uc{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ir,"1"),this.storage.removeItem(ir),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wp(){const t=le();return Hs(t)||br(t)}const Tp=1e3,Sp=10;class fc extends uc{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=wp()&&Kh(),this.fallbackToPolling=rc(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,c,a)=>{this.notifyListeners(o,a)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);Wh()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Sp):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Tp)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}fc.type="LOCAL";const Rp=fc;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dc extends uc{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}dc.type="SESSION";const hc=dc;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cp(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Ir(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(o).map(async l=>l(n.origin,i)),a=await Cp(c);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:a})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ir.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ws(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ap{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((c,a)=>{const l=Ws("",20);s.port1.start();const f=setTimeout(()=>{a(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const g=h;if(g.data.eventId===l)switch(g.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(g.data.response);break;default:clearTimeout(f),clearTimeout(i),a(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fe(){return window}function Pp(t){Fe().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pc(){return typeof Fe().WorkerGlobalScope<"u"&&typeof Fe().importScripts=="function"}async function Op(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function kp(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Np(){return pc()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gc="firebaseLocalStorageDb",Dp=1,or="firebaseLocalStorage",mc="fbase_key";class On{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function wr(t,e){return t.transaction([or],e?"readwrite":"readonly").objectStore(or)}function Lp(){const t=indexedDB.deleteDatabase(gc);return new On(t).toPromise()}function ds(){const t=indexedDB.open(gc,Dp);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(or,{keyPath:mc})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(or)?e(r):(r.close(),await Lp(),e(await ds()))})})}async function io(t,e,n){const r=wr(t,!0).put({[mc]:e,value:n});return new On(r).toPromise()}async function Mp(t,e){const n=wr(t,!1).get(e),r=await new On(n).toPromise();return r===void 0?null:r.value}function oo(t,e){const n=wr(t,!0).delete(e);return new On(n).toPromise()}const xp=800,Up=3;class _c{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ds(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Up)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return pc()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ir._getInstance(Np()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Op(),!this.activeServiceWorker)return;this.sender=new Ap(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||kp()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ds();return await io(e,ir,"1"),await oo(e,ir),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>io(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Mp(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>oo(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=wr(s,!1).getAll();return new On(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),xp)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}_c.type="LOCAL";const Fp=_c;new An(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $p(t,e){return e?je(e):(x(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ks extends Vs{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Vt(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Vt(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Vt(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Bp(t){return lc(t.auth,new Ks(t),t.bypassAuthState)}function Hp(t){const{auth:e,user:n}=t;return x(n,e,"internal-error"),mp(n,new Ks(t),t.bypassAuthState)}async function Vp(t){const{auth:e,user:n}=t;return x(n,e,"internal-error"),gp(n,new Ks(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vc{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:c}=e;if(o){this.reject(o);return}const a={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(a))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Bp;case"linkViaPopup":case"linkViaRedirect":return Vp;case"reauthViaPopup":case"reauthViaRedirect":return Hp;default:Ce(this.auth,"internal-error")}}resolve(e){ze(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ze(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jp=new An(2e3,1e4);class Mt extends vc{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Mt.currentPopupAction&&Mt.currentPopupAction.cancel(),Mt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return x(e,this.auth,"internal-error"),e}async onExecution(){ze(this.filter.length===1,"Popup operations only handle one event");const e=Ws();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ue(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ue(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Mt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ue(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,jp.get())};e()}}Mt.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wp="pendingRedirect",zn=new Map;class Kp extends vc{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=zn.get(this.auth._key());if(!e){try{const r=await zp(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}zn.set(this.auth._key(),e)}return this.bypassAuthState||zn.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function zp(t,e){const n=Jp(e),r=qp(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function Gp(t,e){zn.set(t._key(),e)}function qp(t){return je(t._redirectPersistence)}function Jp(t){return Kn(Wp,t.config.apiKey,t.name)}async function Yp(t,e,n=!1){const r=Zt(t),s=$p(r,e),o=await new Kp(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xp=10*60*1e3;class Qp{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Zp(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!yc(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Ue(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Xp&&this.cachedEventUids.clear(),this.cachedEventUids.has(ao(e))}saveEventToCache(e){this.cachedEventUids.add(ao(e)),this.lastProcessedEventTime=Date.now()}}function ao(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function yc({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Zp(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return yc(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eg(t,e={}){return ht(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tg=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ng=/^https?/;async function rg(t){if(t.config.emulator)return;const{authorizedDomains:e}=await eg(t);for(const n of e)try{if(sg(n))return}catch{}Ce(t,"unauthorized-domain")}function sg(t){const e=fs(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!ng.test(n))return!1;if(tg.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ig=new An(3e4,6e4);function co(){const t=Fe().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function og(t){return new Promise((e,n)=>{var r,s,i;function o(){co(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{co(),n(Ue(t,"network-request-failed"))},timeout:ig.get()})}if(!((s=(r=Fe().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Fe().gapi)===null||i===void 0)&&i.load)o();else{const c=Qh("iframefcb");return Fe()[c]=()=>{gapi.load?o():n(Ue(t,"network-request-failed"))},ic(`https://apis.google.com/js/api.js?onload=${c}`).catch(a=>n(a))}}).catch(e=>{throw Gn=null,e})}let Gn=null;function ag(t){return Gn=Gn||og(t),Gn}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cg=new An(5e3,15e3),lg="__/auth/iframe",ug="emulator/auth/iframe",fg={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},dg=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function hg(t){const e=t.config;x(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?$s(e,ug):`https://${t.config.authDomain}/${lg}`,r={apiKey:e.apiKey,appName:t.name,v:Cn},s=dg.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Rn(r).slice(1)}`}async function pg(t){const e=await ag(t),n=Fe().gapi;return x(n,t,"internal-error"),e.open({where:document.body,url:hg(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:fg,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Ue(t,"network-request-failed"),c=Fe().setTimeout(()=>{i(o)},cg.get());function a(){Fe().clearTimeout(c),s(r)}r.ping(a).then(a,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gg={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},mg=500,_g=600,vg="_blank",yg="http://localhost";class lo{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Eg(t,e,n,r=mg,s=_g){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const a=Object.assign(Object.assign({},gg),{width:r.toString(),height:s.toString(),top:i,left:o}),l=le().toLowerCase();n&&(c=Qa(l)?vg:n),Xa(l)&&(e=e||yg,a.scrollbars="yes");const f=Object.entries(a).reduce((g,[y,C])=>`${g}${y}=${C},`,"");if(jh(l)&&c!=="_self")return bg(e||"",c),new lo(null);const h=window.open(e||"",c,f);x(h,t,"popup-blocked");try{h.focus()}catch{}return new lo(h)}function bg(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ig="__/auth/handler",wg="emulator/auth/handler",Tg=encodeURIComponent("fac");async function uo(t,e,n,r,s,i){x(t.config.authDomain,t,"auth-domain-config-required"),x(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Cn,eventId:s};if(e instanceof ac){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",cd(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,h]of Object.entries(i||{}))o[f]=h}if(e instanceof Pn){const f=e.getScopes().filter(h=>h!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const c=o;for(const f of Object.keys(c))c[f]===void 0&&delete c[f];const a=await t._getAppCheckToken(),l=a?`#${Tg}=${encodeURIComponent(a)}`:"";return`${Sg(t)}?${Rn(c).slice(1)}${l}`}function Sg({config:t}){return t.emulator?$s(t,wg):`https://${t.authDomain}/${Ig}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vr="webStorageSupport";class Rg{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=hc,this._completeRedirectFn=Yp,this._overrideRedirectResult=Gp}async _openPopup(e,n,r,s){var i;ze((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await uo(e,n,r,fs(),s);return Eg(e,o,Ws())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await uo(e,n,r,fs(),s);return Pp(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(ze(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await pg(e),r=new Qp(e);return n.register("authEvent",s=>(x(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Vr,{type:Vr},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Vr];o!==void 0&&n(!!o),Ce(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=rg(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return rc()||Hs()||br()}}const Cg=Rg;var fo="@firebase/auth",ho="1.5.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ag{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){x(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pg(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Og(t){En(new Jt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;x(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const a={apiKey:o,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:sc(t)},l=new Yh(r,s,i,a);return sp(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),En(new Jt("auth-internal",e=>{const n=Zt(e.getProvider("auth").getImmediate());return(r=>new Ag(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Bt(fo,ho,Pg(t)),Bt(fo,ho,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kg=5*60,Ng=xa("authIdTokenMaxAge")||kg;let po=null;const Dg=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Ng)return;const s=n==null?void 0:n.token;po!==s&&(po=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Lg(t=ch()){const e=Ba(t,"auth");if(e.isInitialized())return e.getImmediate();const n=rp(t,{popupRedirectResolver:Cg,persistence:[Fp,Rp,hc]}),r=xa("authTokenSyncURL");if(r){const i=Dg(r);bp(n,i,()=>i(n.currentUser)),Ep(n,o=>i(o))}const s=Xf("auth");return s&&ip(n,`http://${s}`),n}Og("Browser");const Mg=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},go={apiKey:"AIzaSyAao4h1YveNXtPYsTnLwCv9-96y-aHdsFY",authDomain:"upbeat-aspect-410421.firebaseapp.com"},xg={setup(){const t=Ho("");console.log(go);const e=Ha(go),n=Lg(e);na(()=>{Ip(n,s=>{s?(console.log(s),t.value="Welcome, "+s.email):t.value="No user signed in."}),r()});function r(){yp(n,"felix@app.com","admin123").catch(o=>{t.value=o.message})}return{message:t}}},Ug={id:"message"};function Fg(t,e,n,r,s,i){return ha(),pa("div",null,[_r("p",Ug,Dc(r.message),1)])}const $g=Mg(xg,[["render",Fg]]),Bg=Bf({history:nf("/"),routes:[{path:"/",name:"login",component:$g}]}),Ec=xu(jf);Ec.use(Bg);Ec.mount("#app");
