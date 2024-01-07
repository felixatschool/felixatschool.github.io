(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function ys(t,e){const n=new Set(t.split(","));return e?r=>n.has(r.toLowerCase()):r=>n.has(r)}const Q={},Ft=[],ye=()=>{},Tc=()=>!1,lr=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),bs=t=>t.startsWith("onUpdate:"),ie=Object.assign,Es=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Sc=Object.prototype.hasOwnProperty,W=(t,e)=>Sc.call(t,e),B=Array.isArray,ln=t=>fr(t)==="[object Map]",Rc=t=>fr(t)==="[object Set]",H=t=>typeof t=="function",oe=t=>typeof t=="string",ur=t=>typeof t=="symbol",te=t=>t!==null&&typeof t=="object",So=t=>(te(t)||H(t))&&H(t.then)&&H(t.catch),Cc=Object.prototype.toString,fr=t=>Cc.call(t),Ac=t=>fr(t).slice(8,-1),Pc=t=>fr(t)==="[object Object]",Is=t=>oe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Bn=ys(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),dr=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Oc=/-(\w)/g,Wt=dr(t=>t.replace(Oc,(e,n)=>n?n.toUpperCase():"")),kc=/\B([A-Z])/g,Qt=dr(t=>t.replace(kc,"-$1").toLowerCase()),Ro=dr(t=>t.charAt(0).toUpperCase()+t.slice(1)),Pr=dr(t=>t?`on${Ro(t)}`:""),ft=(t,e)=>!Object.is(t,e),Hn=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Yn=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Gr=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let ti;const Co=()=>ti||(ti=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ws(t){if(B(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=oe(r)?Lc(r):ws(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(oe(t)||te(t))return t}const Nc=/;(?![^(]*\))/g,Dc=/:([^]+)/,Mc=/\/\*[^]*?\*\//g;function Lc(t){const e={};return t.replace(Mc,"").split(Nc).forEach(n=>{if(n){const r=n.split(Dc);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Ts(t){let e="";if(oe(t))e=t;else if(B(t))for(let n=0;n<t.length;n++){const r=Ts(t[n]);r&&(e+=r+" ")}else if(te(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const xc="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Uc=ys(xc);function Ao(t){return!!t||t===""}let Ie;class Fc{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Ie,!e&&Ie&&(this.index=(Ie.scopes||(Ie.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Ie;try{return Ie=this,e()}finally{Ie=n}}}on(){Ie=this}off(){Ie=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function $c(t,e=Ie){e&&e.active&&e.effects.push(t)}function Bc(){return Ie}let bt;class Ss{constructor(e,n,r,s){this.fn=e,this.trigger=n,this.scheduler=r,this.active=!0,this.deps=[],this._dirtyLevel=3,this._trackId=0,this._runnings=0,this._queryings=0,this._depsLength=0,$c(this,s)}get dirty(){if(this._dirtyLevel===1){this._dirtyLevel=0,this._queryings++,Ct();for(const e of this.deps)if(e.computed&&(Hc(e.computed),this._dirtyLevel>=2))break;At(),this._queryings--}return this._dirtyLevel>=2}set dirty(e){this._dirtyLevel=e?3:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=at,n=bt;try{return at=!0,bt=this,this._runnings++,ni(this),this.fn()}finally{ri(this),this._runnings--,bt=n,at=e}}stop(){var e;this.active&&(ni(this),ri(this),(e=this.onStop)==null||e.call(this),this.active=!1)}}function Hc(t){return t.value}function ni(t){t._trackId++,t._depsLength=0}function ri(t){if(t.deps&&t.deps.length>t._depsLength){for(let e=t._depsLength;e<t.deps.length;e++)Po(t.deps[e],t);t.deps.length=t._depsLength}}function Po(t,e){const n=t.get(e);n!==void 0&&e._trackId!==n&&(t.delete(e),t.size===0&&t.cleanup())}let at=!0,qr=0;const Oo=[];function Ct(){Oo.push(at),at=!1}function At(){const t=Oo.pop();at=t===void 0?!0:t}function Rs(){qr++}function Cs(){for(qr--;!qr&&Jr.length;)Jr.shift()()}function ko(t,e,n){if(e.get(t)!==t._trackId){e.set(t,t._trackId);const r=t.deps[t._depsLength];r!==e?(r&&Po(r,t),t.deps[t._depsLength++]=e):t._depsLength++}}const Jr=[];function No(t,e,n){Rs();for(const r of t.keys())if(!(!r.allowRecurse&&r._runnings)&&r._dirtyLevel<e&&(!r._runnings||e!==2)){const s=r._dirtyLevel;r._dirtyLevel=e,s===0&&(!r._queryings||e!==2)&&(r.trigger(),r.scheduler&&Jr.push(r.scheduler))}Cs()}const Do=(t,e)=>{const n=new Map;return n.cleanup=t,n.computed=e,n},Yr=new WeakMap,Et=Symbol(""),Xr=Symbol("");function ge(t,e,n){if(at&&bt){let r=Yr.get(t);r||Yr.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=Do(()=>r.delete(n))),ko(bt,s)}}function ze(t,e,n,r,s,i){const o=Yr.get(t);if(!o)return;let c=[];if(e==="clear")c=[...o.values()];else if(n==="length"&&B(t)){const a=Number(r);o.forEach((l,u)=>{(u==="length"||!ur(u)&&u>=a)&&c.push(l)})}else switch(n!==void 0&&c.push(o.get(n)),e){case"add":B(t)?Is(n)&&c.push(o.get("length")):(c.push(o.get(Et)),ln(t)&&c.push(o.get(Xr)));break;case"delete":B(t)||(c.push(o.get(Et)),ln(t)&&c.push(o.get(Xr)));break;case"set":ln(t)&&c.push(o.get(Et));break}Rs();for(const a of c)a&&No(a,3);Cs()}const Vc=ys("__proto__,__v_isRef,__isVue"),Mo=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(ur)),si=jc();function jc(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=K(this);for(let i=0,o=this.length;i<o;i++)ge(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(K)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Ct(),Rs();const r=K(this)[e].apply(this,n);return Cs(),At(),r}}),t}function Wc(t){const e=K(this);return ge(e,"has",t),e.hasOwnProperty(t)}class Lo{constructor(e=!1,n=!1){this._isReadonly=e,this._shallow=n}get(e,n,r){const s=this._isReadonly,i=this._shallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?rl:$o:i?Fo:Uo).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=B(e);if(!s){if(o&&W(si,n))return Reflect.get(si,n,r);if(n==="hasOwnProperty")return Wc}const c=Reflect.get(e,n,r);return(ur(n)?Mo.has(n):Vc(n))||(s||ge(e,"get",n),i)?c:me(c)?o&&Is(n)?c:c.value:te(c)?s?Ho(c):pr(c):c}}class xo extends Lo{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._shallow){const a=Kt(i);if(!Xn(r)&&!Kt(r)&&(i=K(i),r=K(r)),!B(e)&&me(i)&&!me(r))return a?!1:(i.value=r,!0)}const o=B(e)&&Is(n)?Number(n)<e.length:W(e,n),c=Reflect.set(e,n,r,s);return e===K(s)&&(o?ft(r,i)&&ze(e,"set",n,r):ze(e,"add",n,r)),c}deleteProperty(e,n){const r=W(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&ze(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!ur(n)||!Mo.has(n))&&ge(e,"has",n),r}ownKeys(e){return ge(e,"iterate",B(e)?"length":Et),Reflect.ownKeys(e)}}class Kc extends Lo{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const zc=new xo,Gc=new Kc,qc=new xo(!0),As=t=>t,hr=t=>Reflect.getPrototypeOf(t);function Dn(t,e,n=!1,r=!1){t=t.__v_raw;const s=K(t),i=K(e);n||(ft(e,i)&&ge(s,"get",e),ge(s,"get",i));const{has:o}=hr(s),c=r?As:n?ks:gn;if(o.call(s,e))return c(t.get(e));if(o.call(s,i))return c(t.get(i));t!==s&&t.get(e)}function Mn(t,e=!1){const n=this.__v_raw,r=K(n),s=K(t);return e||(ft(t,s)&&ge(r,"has",t),ge(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function Ln(t,e=!1){return t=t.__v_raw,!e&&ge(K(t),"iterate",Et),Reflect.get(t,"size",t)}function ii(t){t=K(t);const e=K(this);return hr(e).has.call(e,t)||(e.add(t),ze(e,"add",t,t)),this}function oi(t,e){e=K(e);const n=K(this),{has:r,get:s}=hr(n);let i=r.call(n,t);i||(t=K(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?ft(e,o)&&ze(n,"set",t,e):ze(n,"add",t,e),this}function ai(t){const e=K(this),{has:n,get:r}=hr(e);let s=n.call(e,t);s||(t=K(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&ze(e,"delete",t,void 0),i}function ci(){const t=K(this),e=t.size!==0,n=t.clear();return e&&ze(t,"clear",void 0,void 0),n}function xn(t,e){return function(r,s){const i=this,o=i.__v_raw,c=K(o),a=e?As:t?ks:gn;return!t&&ge(c,"iterate",Et),o.forEach((l,u)=>r.call(s,a(l),a(u),i))}}function Un(t,e,n){return function(...r){const s=this.__v_raw,i=K(s),o=ln(i),c=t==="entries"||t===Symbol.iterator&&o,a=t==="keys"&&o,l=s[t](...r),u=n?As:e?ks:gn;return!e&&ge(i,"iterate",a?Xr:Et),{next(){const{value:h,done:g}=l.next();return g?{value:h,done:g}:{value:c?[u(h[0]),u(h[1])]:u(h),done:g}},[Symbol.iterator](){return this}}}}function Xe(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Jc(){const t={get(i){return Dn(this,i)},get size(){return Ln(this)},has:Mn,add:ii,set:oi,delete:ai,clear:ci,forEach:xn(!1,!1)},e={get(i){return Dn(this,i,!1,!0)},get size(){return Ln(this)},has:Mn,add:ii,set:oi,delete:ai,clear:ci,forEach:xn(!1,!0)},n={get(i){return Dn(this,i,!0)},get size(){return Ln(this,!0)},has(i){return Mn.call(this,i,!0)},add:Xe("add"),set:Xe("set"),delete:Xe("delete"),clear:Xe("clear"),forEach:xn(!0,!1)},r={get(i){return Dn(this,i,!0,!0)},get size(){return Ln(this,!0)},has(i){return Mn.call(this,i,!0)},add:Xe("add"),set:Xe("set"),delete:Xe("delete"),clear:Xe("clear"),forEach:xn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=Un(i,!1,!1),n[i]=Un(i,!0,!1),e[i]=Un(i,!1,!0),r[i]=Un(i,!0,!0)}),[t,n,e,r]}const[Yc,Xc,Qc,Zc]=Jc();function Ps(t,e){const n=e?t?Zc:Qc:t?Xc:Yc;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(W(n,s)&&s in r?n:r,s,i)}const el={get:Ps(!1,!1)},tl={get:Ps(!1,!0)},nl={get:Ps(!0,!1)},Uo=new WeakMap,Fo=new WeakMap,$o=new WeakMap,rl=new WeakMap;function sl(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function il(t){return t.__v_skip||!Object.isExtensible(t)?0:sl(Ac(t))}function pr(t){return Kt(t)?t:Os(t,!1,zc,el,Uo)}function Bo(t){return Os(t,!1,qc,tl,Fo)}function Ho(t){return Os(t,!0,Gc,nl,$o)}function Os(t,e,n,r,s){if(!te(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=il(t);if(o===0)return t;const c=new Proxy(t,o===2?r:n);return s.set(t,c),c}function $t(t){return Kt(t)?$t(t.__v_raw):!!(t&&t.__v_isReactive)}function Kt(t){return!!(t&&t.__v_isReadonly)}function Xn(t){return!!(t&&t.__v_isShallow)}function Vo(t){return $t(t)||Kt(t)}function K(t){const e=t&&t.__v_raw;return e?K(e):t}function jo(t){return Yn(t,"__v_skip",!0),t}const gn=t=>te(t)?pr(t):t,ks=t=>te(t)?Ho(t):t;class Wo{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new Ss(()=>e(this._value),()=>Qr(this,1)),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=K(this);return Ko(e),(!e._cacheable||e.effect.dirty)&&ft(e._value,e._value=e.effect.run())&&Qr(e,2),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function ol(t,e,n=!1){let r,s;const i=H(t);return i?(r=t,s=ye):(r=t.get,s=t.set),new Wo(r,s,i||!s,n)}function Ko(t){at&&bt&&(t=K(t),ko(bt,t.dep||(t.dep=Do(()=>t.dep=void 0,t instanceof Wo?t:void 0))))}function Qr(t,e=3,n){t=K(t);const r=t.dep;r&&No(r,e)}function me(t){return!!(t&&t.__v_isRef===!0)}function Zr(t){return zo(t,!1)}function al(t){return zo(t,!0)}function zo(t,e){return me(t)?t:new cl(t,e)}class cl{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:K(e),this._value=n?e:gn(e)}get value(){return Ko(this),this._value}set value(e){const n=this.__v_isShallow||Xn(e)||Kt(e);e=n?e:K(e),ft(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:gn(e),Qr(this,3))}}function It(t){return me(t)?t.value:t}const ll={get:(t,e,n)=>It(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return me(s)&&!me(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Go(t){return $t(t)?t:new Proxy(t,ll)}function ct(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){gr(i,e,n)}return s}function Re(t,e,n,r){if(H(t)){const i=ct(t,e,n,r);return i&&So(i)&&i.catch(o=>{gr(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(Re(t[i],e,n,r));return s}function gr(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,c=`https://vuejs.org/errors/#runtime-${n}`;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,c)===!1)return}i=i.parent}const a=e.appContext.config.errorHandler;if(a){ct(a,null,10,[t,o,c]);return}}ul(t,n,s,r)}function ul(t,e,n,r=!0){console.error(t)}let mn=!1,es=!1;const ce=[];let Le=0;const Bt=[];let Ve=null,vt=0;const qo=Promise.resolve();let Ns=null;function Jo(t){const e=Ns||qo;return t?e.then(this?t.bind(this):t):e}function fl(t){let e=Le+1,n=ce.length;for(;e<n;){const r=e+n>>>1,s=ce[r],i=_n(s);i<t||i===t&&s.pre?e=r+1:n=r}return e}function Ds(t){(!ce.length||!ce.includes(t,mn&&t.allowRecurse?Le+1:Le))&&(t.id==null?ce.push(t):ce.splice(fl(t.id),0,t),Yo())}function Yo(){!mn&&!es&&(es=!0,Ns=qo.then(Qo))}function dl(t){const e=ce.indexOf(t);e>Le&&ce.splice(e,1)}function hl(t){B(t)?Bt.push(...t):(!Ve||!Ve.includes(t,t.allowRecurse?vt+1:vt))&&Bt.push(t),Yo()}function li(t,e,n=mn?Le+1:0){for(;n<ce.length;n++){const r=ce[n];if(r&&r.pre){if(t&&r.id!==t.uid)continue;ce.splice(n,1),n--,r()}}}function Xo(t){if(Bt.length){const e=[...new Set(Bt)];if(Bt.length=0,Ve){Ve.push(...e);return}for(Ve=e,Ve.sort((n,r)=>_n(n)-_n(r)),vt=0;vt<Ve.length;vt++)Ve[vt]();Ve=null,vt=0}}const _n=t=>t.id==null?1/0:t.id,pl=(t,e)=>{const n=_n(t)-_n(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Qo(t){es=!1,mn=!0,ce.sort(pl);try{for(Le=0;Le<ce.length;Le++){const e=ce[Le];e&&e.active!==!1&&ct(e,null,14)}}finally{Le=0,ce.length=0,Xo(),mn=!1,Ns=null,(ce.length||Bt.length)&&Qo()}}function gl(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Q;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:g}=r[u]||Q;g&&(s=n.map(y=>oe(y)?y.trim():y)),h&&(s=n.map(Gr))}let c,a=r[c=Pr(e)]||r[c=Pr(Wt(e))];!a&&i&&(a=r[c=Pr(Qt(e))]),a&&Re(a,t,6,s);const l=r[c+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[c])return;t.emitted[c]=!0,Re(l,t,6,s)}}function Zo(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},c=!1;if(!H(t)){const a=l=>{const u=Zo(l,e,!0);u&&(c=!0,ie(o,u))};!n&&e.mixins.length&&e.mixins.forEach(a),t.extends&&a(t.extends),t.mixins&&t.mixins.forEach(a)}return!i&&!c?(te(t)&&r.set(t,null),null):(B(i)?i.forEach(a=>o[a]=null):ie(o,i),te(t)&&r.set(t,o),o)}function mr(t,e){return!t||!lr(e)?!1:(e=e.slice(2).replace(/Once$/,""),W(t,e[0].toLowerCase()+e.slice(1))||W(t,Qt(e))||W(t,e))}let Te=null,_r=null;function Qn(t){const e=Te;return Te=t,_r=t&&t.type.__scopeId||null,e}function ml(t){_r=t}function _l(){_r=null}function vl(t,e=Te,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&bi(-1);const i=Qn(e);let o;try{o=t(...s)}finally{Qn(i),r._d&&bi(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Or(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:c,attrs:a,emit:l,render:u,renderCache:h,data:g,setupState:y,ctx:C,inheritAttrs:N}=t;let M,P;const L=Qn(t);try{if(n.shapeFlag&4){const j=s||r,ee=j;M=Me(u.call(ee,j,h,i,y,g,C)),P=a}else{const j=e;M=Me(j.length>1?j(i,{attrs:a,slots:c,emit:l}):j(i,null)),P=e.props?a:yl(a)}}catch(j){fn.length=0,gr(j,t,1),M=be(vn)}let U=M;if(P&&N!==!1){const j=Object.keys(P),{shapeFlag:ee}=U;j.length&&ee&7&&(o&&j.some(bs)&&(P=bl(P,o)),U=zt(U,P))}return n.dirs&&(U=zt(U),U.dirs=U.dirs?U.dirs.concat(n.dirs):n.dirs),n.transition&&(U.transition=n.transition),M=U,Qn(L),M}const yl=t=>{let e;for(const n in t)(n==="class"||n==="style"||lr(n))&&((e||(e={}))[n]=t[n]);return e},bl=(t,e)=>{const n={};for(const r in t)(!bs(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function El(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:c,patchFlag:a}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&a>=0){if(a&1024)return!0;if(a&16)return r?ui(r,o,l):!!o;if(a&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const g=u[h];if(o[g]!==r[g]&&!mr(l,g))return!0}}}else return(s||c)&&(!c||!c.$stable)?!0:r===o?!1:r?o?ui(r,o,l):!0:!!o;return!1}function ui(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!mr(n,i))return!0}return!1}function Il({vnode:t,parent:e},n){if(n)for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const wl=Symbol.for("v-ndc"),Tl=t=>t.__isSuspense;function Sl(t,e){e&&e.pendingBranch?B(t)?e.effects.push(...t):e.effects.push(t):hl(t)}const Rl=Symbol.for("v-scx"),Cl=()=>Ue(Rl),Fn={};function Vn(t,e,n){return ea(t,e,n)}function ea(t,e,{immediate:n,deep:r,flush:s,once:i,onTrack:o,onTrigger:c}=Q){if(e&&i){const F=e;e=(...ne)=>{F(...ne),ee()}}const a=fe,l=F=>r===!0?F:yt(F,r===!1?1:void 0);let u,h=!1,g=!1;if(me(t)?(u=()=>t.value,h=Xn(t)):$t(t)?(u=()=>l(t),h=!0):B(t)?(g=!0,h=t.some(F=>$t(F)||Xn(F)),u=()=>t.map(F=>{if(me(F))return F.value;if($t(F))return l(F);if(H(F))return ct(F,a,2)})):H(t)?e?u=()=>ct(t,a,2):u=()=>(y&&y(),Re(t,a,3,[C])):u=ye,e&&r){const F=u;u=()=>yt(F())}let y,C=F=>{y=U.onStop=()=>{ct(F,a,4),y=U.onStop=void 0}},N;if(Er)if(C=ye,e?n&&Re(e,a,3,[u(),g?[]:void 0,C]):u(),s==="sync"){const F=Cl();N=F.__watcherHandles||(F.__watcherHandles=[])}else return ye;let M=g?new Array(t.length).fill(Fn):Fn;const P=()=>{if(!(!U.active||!U.dirty))if(e){const F=U.run();(r||h||(g?F.some((ne,de)=>ft(ne,M[de])):ft(F,M)))&&(y&&y(),Re(e,a,3,[F,M===Fn?void 0:g&&M[0]===Fn?[]:M,C]),M=F)}else U.run()};P.allowRecurse=!!e;let L;s==="sync"?L=P:s==="post"?L=()=>pe(P,a&&a.suspense):(P.pre=!0,a&&(P.id=a.uid),L=()=>Ds(P));const U=new Ss(u,ye,L),j=Bc(),ee=()=>{U.stop(),j&&Es(j.effects,U)};return e?n?P():M=U.run():s==="post"?pe(U.run.bind(U),a&&a.suspense):U.run(),N&&N.push(ee),ee}function Al(t,e,n){const r=this.proxy,s=oe(t)?t.includes(".")?ta(r,t):()=>r[t]:t.bind(r,r);let i;H(e)?i=e:(i=e.handler,n=e);const o=fe;Gt(this);const c=ea(s,i.bind(r),n);return o?Gt(o):wt(),c}function ta(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function yt(t,e,n=0,r){if(!te(t)||t.__v_skip)return t;if(e&&e>0){if(n>=e)return t;n++}if(r=r||new Set,r.has(t))return t;if(r.add(t),me(t))yt(t.value,e,n,r);else if(B(t))for(let s=0;s<t.length;s++)yt(t[s],e,n,r);else if(Rc(t)||ln(t))t.forEach(s=>{yt(s,e,n,r)});else if(Pc(t))for(const s in t)yt(t[s],e,n,r);return t}function fi(t,e){const n=Te;if(n===null)return t;const r=Ir(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,c,a,l=Q]=e[i];o&&(H(o)&&(o={mounted:o,updated:o}),o.deep&&yt(c),s.push({dir:o,instance:r,value:c,oldValue:void 0,arg:a,modifiers:l}))}return t}function gt(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const c=s[o];i&&(c.oldValue=i[o].value);let a=c.dir[r];a&&(Ct(),Re(a,n,8,[t.el,c,t,e]),At())}}/*! #__NO_SIDE_EFFECTS__ */function na(t,e){return H(t)?ie({name:t.name},e,{setup:t}):t}const jn=t=>!!t.type.__asyncLoader,ra=t=>t.type.__isKeepAlive;function Pl(t,e){sa(t,"a",e)}function Ol(t,e){sa(t,"da",e)}function sa(t,e,n=fe){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(vr(e,r,n),n){let s=n.parent;for(;s&&s.parent;)ra(s.parent.vnode)&&kl(r,e,n,s),s=s.parent}}function kl(t,e,n,r){const s=vr(e,t,r,!0);ia(()=>{Es(r[e],s)},n)}function vr(t,e,n=fe,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Ct(),Gt(n);const c=Re(e,n,t,o);return wt(),At(),c});return r?s.unshift(i):s.push(i),i}}const qe=t=>(e,n=fe)=>(!Er||t==="sp")&&vr(t,(...r)=>e(...r),n),Nl=qe("bm"),Dl=qe("m"),Ml=qe("bu"),Ll=qe("u"),xl=qe("bum"),ia=qe("um"),Ul=qe("sp"),Fl=qe("rtg"),$l=qe("rtc");function Bl(t,e=fe){vr("ec",t,e)}const ts=t=>t?va(t)?Ir(t)||t.proxy:ts(t.parent):null,un=ie(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>ts(t.parent),$root:t=>ts(t.root),$emit:t=>t.emit,$options:t=>Ms(t),$forceUpdate:t=>t.f||(t.f=()=>{t.effect.dirty=!0,Ds(t.update)}),$nextTick:t=>t.n||(t.n=Jo.bind(t.proxy)),$watch:t=>Al.bind(t)}),kr=(t,e)=>t!==Q&&!t.__isScriptSetup&&W(t,e),Hl={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:c,appContext:a}=t;let l;if(e[0]!=="$"){const y=o[e];if(y!==void 0)switch(y){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(kr(r,e))return o[e]=1,r[e];if(s!==Q&&W(s,e))return o[e]=2,s[e];if((l=t.propsOptions[0])&&W(l,e))return o[e]=3,i[e];if(n!==Q&&W(n,e))return o[e]=4,n[e];ns&&(o[e]=0)}}const u=un[e];let h,g;if(u)return e==="$attrs"&&ge(t,"get",e),u(t);if((h=c.__cssModules)&&(h=h[e]))return h;if(n!==Q&&W(n,e))return o[e]=4,n[e];if(g=a.config.globalProperties,W(g,e))return g[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return kr(s,e)?(s[e]=n,!0):r!==Q&&W(r,e)?(r[e]=n,!0):W(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let c;return!!n[o]||t!==Q&&W(t,o)||kr(e,o)||(c=i[0])&&W(c,o)||W(r,o)||W(un,o)||W(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:W(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function di(t){return B(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let ns=!0;function Vl(t){const e=Ms(t),n=t.proxy,r=t.ctx;ns=!1,e.beforeCreate&&hi(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:c,provide:a,inject:l,created:u,beforeMount:h,mounted:g,beforeUpdate:y,updated:C,activated:N,deactivated:M,beforeDestroy:P,beforeUnmount:L,destroyed:U,unmounted:j,render:ee,renderTracked:F,renderTriggered:ne,errorCaptured:de,serverPrefetch:Pe,expose:ve,inheritAttrs:Je,components:pt,directives:Oe,filters:tn}=e;if(l&&jl(l,r,null),o)for(const J in o){const z=o[J];H(z)&&(r[J]=z.bind(n))}if(s){const J=s.call(n,n);te(J)&&(t.data=pr(J))}if(ns=!0,i)for(const J in i){const z=i[J],Be=H(z)?z.bind(n,n):H(z.get)?z.get.bind(n,n):ye,Ye=!H(z)&&H(z.set)?z.set.bind(n):ye,ke=we({get:Be,set:Ye});Object.defineProperty(r,J,{enumerable:!0,configurable:!0,get:()=>ke.value,set:he=>ke.value=he})}if(c)for(const J in c)oa(c[J],r,n,J);if(a){const J=H(a)?a.call(n):a;Reflect.ownKeys(J).forEach(z=>{Wn(z,J[z])})}u&&hi(u,t,"c");function re(J,z){B(z)?z.forEach(Be=>J(Be.bind(n))):z&&J(z.bind(n))}if(re(Nl,h),re(Dl,g),re(Ml,y),re(Ll,C),re(Pl,N),re(Ol,M),re(Bl,de),re($l,F),re(Fl,ne),re(xl,L),re(ia,j),re(Ul,Pe),B(ve))if(ve.length){const J=t.exposed||(t.exposed={});ve.forEach(z=>{Object.defineProperty(J,z,{get:()=>n[z],set:Be=>n[z]=Be})})}else t.exposed||(t.exposed={});ee&&t.render===ye&&(t.render=ee),Je!=null&&(t.inheritAttrs=Je),pt&&(t.components=pt),Oe&&(t.directives=Oe)}function jl(t,e,n=ye){B(t)&&(t=rs(t));for(const r in t){const s=t[r];let i;te(s)?"default"in s?i=Ue(s.from||r,s.default,!0):i=Ue(s.from||r):i=Ue(s),me(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function hi(t,e,n){Re(B(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function oa(t,e,n,r){const s=r.includes(".")?ta(n,r):()=>n[r];if(oe(t)){const i=e[t];H(i)&&Vn(s,i)}else if(H(t))Vn(s,t.bind(n));else if(te(t))if(B(t))t.forEach(i=>oa(i,e,n,r));else{const i=H(t.handler)?t.handler.bind(n):e[t.handler];H(i)&&Vn(s,i,t)}}function Ms(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,c=i.get(e);let a;return c?a=c:!s.length&&!n&&!r?a=e:(a={},s.length&&s.forEach(l=>Zn(a,l,o,!0)),Zn(a,e,o)),te(e)&&i.set(e,a),a}function Zn(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Zn(t,i,n,!0),s&&s.forEach(o=>Zn(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const c=Wl[o]||n&&n[o];t[o]=c?c(t[o],e[o]):e[o]}return t}const Wl={data:pi,props:gi,emits:gi,methods:on,computed:on,beforeCreate:ue,created:ue,beforeMount:ue,mounted:ue,beforeUpdate:ue,updated:ue,beforeDestroy:ue,beforeUnmount:ue,destroyed:ue,unmounted:ue,activated:ue,deactivated:ue,errorCaptured:ue,serverPrefetch:ue,components:on,directives:on,watch:zl,provide:pi,inject:Kl};function pi(t,e){return e?t?function(){return ie(H(t)?t.call(this,this):t,H(e)?e.call(this,this):e)}:e:t}function Kl(t,e){return on(rs(t),rs(e))}function rs(t){if(B(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function ue(t,e){return t?[...new Set([].concat(t,e))]:e}function on(t,e){return t?ie(Object.create(null),t,e):e}function gi(t,e){return t?B(t)&&B(e)?[...new Set([...t,...e])]:ie(Object.create(null),di(t),di(e??{})):e}function zl(t,e){if(!t)return e;if(!e)return t;const n=ie(Object.create(null),t);for(const r in e)n[r]=ue(t[r],e[r]);return n}function aa(){return{app:null,config:{isNativeTag:Tc,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Gl=0;function ql(t,e){return function(r,s=null){H(r)||(r=ie({},r)),s!=null&&!te(s)&&(s=null);const i=aa(),o=new WeakSet;let c=!1;const a=i.app={_uid:Gl++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:yu,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&H(l.install)?(o.add(l),l.install(a,...u)):H(l)&&(o.add(l),l(a,...u))),a},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),a},component(l,u){return u?(i.components[l]=u,a):i.components[l]},directive(l,u){return u?(i.directives[l]=u,a):i.directives[l]},mount(l,u,h){if(!c){const g=be(r,s);return g.appContext=i,h===!0?h="svg":h===!1&&(h=void 0),u&&e?e(g,l):t(g,l,h),c=!0,a._container=l,l.__vue_app__=a,Ir(g.component)||g.component.proxy}},unmount(){c&&(t(null,a._container),delete a._container.__vue_app__)},provide(l,u){return i.provides[l]=u,a},runWithContext(l){er=a;try{return l()}finally{er=null}}};return a}}let er=null;function Wn(t,e){if(fe){let n=fe.provides;const r=fe.parent&&fe.parent.provides;r===n&&(n=fe.provides=Object.create(r)),n[t]=e}}function Ue(t,e,n=!1){const r=fe||Te;if(r||er){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:er._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&H(e)?e.call(r&&r.proxy):e}}function Jl(t,e,n,r=!1){const s={},i={};Yn(i,br,1),t.propsDefaults=Object.create(null),ca(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Bo(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function Yl(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,c=K(s),[a]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let g=u[h];if(mr(t.emitsOptions,g))continue;const y=e[g];if(a)if(W(i,g))y!==i[g]&&(i[g]=y,l=!0);else{const C=Wt(g);s[C]=ss(a,c,C,y,t,!1)}else y!==i[g]&&(i[g]=y,l=!0)}}}else{ca(t,e,s,i)&&(l=!0);let u;for(const h in c)(!e||!W(e,h)&&((u=Qt(h))===h||!W(e,u)))&&(a?n&&(n[h]!==void 0||n[u]!==void 0)&&(s[h]=ss(a,c,h,void 0,t,!0)):delete s[h]);if(i!==c)for(const h in i)(!e||!W(e,h))&&(delete i[h],l=!0)}l&&ze(t,"set","$attrs")}function ca(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,c;if(e)for(let a in e){if(Bn(a))continue;const l=e[a];let u;s&&W(s,u=Wt(a))?!i||!i.includes(u)?n[u]=l:(c||(c={}))[u]=l:mr(t.emitsOptions,a)||(!(a in r)||l!==r[a])&&(r[a]=l,o=!0)}if(i){const a=K(n),l=c||Q;for(let u=0;u<i.length;u++){const h=i[u];n[h]=ss(s,a,h,l[h],t,!W(l,h))}}return o}function ss(t,e,n,r,s,i){const o=t[n];if(o!=null){const c=W(o,"default");if(c&&r===void 0){const a=o.default;if(o.type!==Function&&!o.skipFactory&&H(a)){const{propsDefaults:l}=s;n in l?r=l[n]:(Gt(s),r=l[n]=a.call(null,e),wt())}else r=a}o[0]&&(i&&!c?r=!1:o[1]&&(r===""||r===Qt(n))&&(r=!0))}return r}function la(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},c=[];let a=!1;if(!H(t)){const u=h=>{a=!0;const[g,y]=la(h,e,!0);ie(o,g),y&&c.push(...y)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!a)return te(t)&&r.set(t,Ft),Ft;if(B(i))for(let u=0;u<i.length;u++){const h=Wt(i[u]);mi(h)&&(o[h]=Q)}else if(i)for(const u in i){const h=Wt(u);if(mi(h)){const g=i[u],y=o[h]=B(g)||H(g)?{type:g}:ie({},g);if(y){const C=yi(Boolean,y.type),N=yi(String,y.type);y[0]=C>-1,y[1]=N<0||C<N,(C>-1||W(y,"default"))&&c.push(h)}}}const l=[o,c];return te(t)&&r.set(t,l),l}function mi(t){return t[0]!=="$"}function _i(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function vi(t,e){return _i(t)===_i(e)}function yi(t,e){return B(e)?e.findIndex(n=>vi(n,t)):H(e)&&vi(e,t)?0:-1}const ua=t=>t[0]==="_"||t==="$stable",Ls=t=>B(t)?t.map(Me):[Me(t)],Xl=(t,e,n)=>{if(e._n)return e;const r=vl((...s)=>Ls(e(...s)),n);return r._c=!1,r},fa=(t,e,n)=>{const r=t._ctx;for(const s in t){if(ua(s))continue;const i=t[s];if(H(i))e[s]=Xl(s,i,r);else if(i!=null){const o=Ls(i);e[s]=()=>o}}},da=(t,e)=>{const n=Ls(e);t.slots.default=()=>n},Ql=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=K(e),Yn(e,"_",n)):fa(e,t.slots={})}else t.slots={},e&&da(t,e);Yn(t.slots,br,1)},Zl=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Q;if(r.shapeFlag&32){const c=e._;c?n&&c===1?i=!1:(ie(s,e),!n&&c===1&&delete s._):(i=!e.$stable,fa(e,s)),o=e}else e&&(da(t,e),o={default:1});if(i)for(const c in s)!ua(c)&&o[c]==null&&delete s[c]};function is(t,e,n,r,s=!1){if(B(t)){t.forEach((g,y)=>is(g,e&&(B(e)?e[y]:e),n,r,s));return}if(jn(r)&&!s)return;const i=r.shapeFlag&4?Ir(r.component)||r.component.proxy:r.el,o=s?null:i,{i:c,r:a}=t,l=e&&e.r,u=c.refs===Q?c.refs={}:c.refs,h=c.setupState;if(l!=null&&l!==a&&(oe(l)?(u[l]=null,W(h,l)&&(h[l]=null)):me(l)&&(l.value=null)),H(a))ct(a,c,12,[o,u]);else{const g=oe(a),y=me(a);if(g||y){const C=()=>{if(t.f){const N=g?W(h,a)?h[a]:u[a]:a.value;s?B(N)&&Es(N,i):B(N)?N.includes(i)||N.push(i):g?(u[a]=[i],W(h,a)&&(h[a]=u[a])):(a.value=[i],t.k&&(u[t.k]=a.value))}else g?(u[a]=o,W(h,a)&&(h[a]=o)):y&&(a.value=o,t.k&&(u[t.k]=o))};o?(C.id=-1,pe(C,n)):C()}}}const pe=Sl;function eu(t){return tu(t)}function tu(t,e){const n=Co();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:c,createComment:a,setText:l,setElementText:u,parentNode:h,nextSibling:g,setScopeId:y=ye,insertStaticContent:C}=t,N=(f,d,p,m=null,v=null,b=null,S=void 0,I=null,w=!!d.dynamicChildren)=>{if(f===d)return;f&&!rn(f,d)&&(m=_(f),he(f,v,b,!0),f=null),d.patchFlag===-2&&(w=!1,d.dynamicChildren=null);const{type:E,ref:R,shapeFlag:D}=d;switch(E){case yr:M(f,d,p,m);break;case vn:P(f,d,p,m);break;case Dr:f==null&&L(d,p,m,S);break;case je:pt(f,d,p,m,v,b,S,I,w);break;default:D&1?ee(f,d,p,m,v,b,S,I,w):D&6?Oe(f,d,p,m,v,b,S,I,w):(D&64||D&128)&&E.process(f,d,p,m,v,b,S,I,w,T)}R!=null&&v&&is(R,f&&f.ref,b,d||f,!d)},M=(f,d,p,m)=>{if(f==null)r(d.el=c(d.children),p,m);else{const v=d.el=f.el;d.children!==f.children&&l(v,d.children)}},P=(f,d,p,m)=>{f==null?r(d.el=a(d.children||""),p,m):d.el=f.el},L=(f,d,p,m)=>{[f.el,f.anchor]=C(f.children,d,p,m,f.el,f.anchor)},U=({el:f,anchor:d},p,m)=>{let v;for(;f&&f!==d;)v=g(f),r(f,p,m),f=v;r(d,p,m)},j=({el:f,anchor:d})=>{let p;for(;f&&f!==d;)p=g(f),s(f),f=p;s(d)},ee=(f,d,p,m,v,b,S,I,w)=>{d.type==="svg"?S="svg":d.type==="math"&&(S="mathml"),f==null?F(d,p,m,v,b,S,I,w):Pe(f,d,v,b,S,I,w)},F=(f,d,p,m,v,b,S,I)=>{let w,E;const{props:R,shapeFlag:D,transition:k,dirs:$}=f;if(w=f.el=o(f.type,b,R&&R.is,R),D&8?u(w,f.children):D&16&&de(f.children,w,null,m,v,Nr(f,b),S,I),$&&gt(f,null,m,"created"),ne(w,f,f.scopeId,S,m),R){for(const Y in R)Y!=="value"&&!Bn(Y)&&i(w,Y,null,R[Y],b,f.children,m,v,ae);"value"in R&&i(w,"value",null,R.value,b),(E=R.onVnodeBeforeMount)&&De(E,m,f)}$&&gt(f,null,m,"beforeMount");const V=nu(v,k);V&&k.beforeEnter(w),r(w,d,p),((E=R&&R.onVnodeMounted)||V||$)&&pe(()=>{E&&De(E,m,f),V&&k.enter(w),$&&gt(f,null,m,"mounted")},v)},ne=(f,d,p,m,v)=>{if(p&&y(f,p),m)for(let b=0;b<m.length;b++)y(f,m[b]);if(v){let b=v.subTree;if(d===b){const S=v.vnode;ne(f,S,S.scopeId,S.slotScopeIds,v.parent)}}},de=(f,d,p,m,v,b,S,I,w=0)=>{for(let E=w;E<f.length;E++){const R=f[E]=I?et(f[E]):Me(f[E]);N(null,R,d,p,m,v,b,S,I)}},Pe=(f,d,p,m,v,b,S)=>{const I=d.el=f.el;let{patchFlag:w,dynamicChildren:E,dirs:R}=d;w|=f.patchFlag&16;const D=f.props||Q,k=d.props||Q;let $;if(p&&mt(p,!1),($=k.onVnodeBeforeUpdate)&&De($,p,d,f),R&&gt(d,f,p,"beforeUpdate"),p&&mt(p,!0),E?ve(f.dynamicChildren,E,I,p,m,Nr(d,v),b):S||z(f,d,I,null,p,m,Nr(d,v),b,!1),w>0){if(w&16)Je(I,d,D,k,p,m,v);else if(w&2&&D.class!==k.class&&i(I,"class",null,k.class,v),w&4&&i(I,"style",D.style,k.style,v),w&8){const V=d.dynamicProps;for(let Y=0;Y<V.length;Y++){const Z=V[Y],se=D[Z],Ee=k[Z];(Ee!==se||Z==="value")&&i(I,Z,se,Ee,v,f.children,p,m,ae)}}w&1&&f.children!==d.children&&u(I,d.children)}else!S&&E==null&&Je(I,d,D,k,p,m,v);(($=k.onVnodeUpdated)||R)&&pe(()=>{$&&De($,p,d,f),R&&gt(d,f,p,"updated")},m)},ve=(f,d,p,m,v,b,S)=>{for(let I=0;I<d.length;I++){const w=f[I],E=d[I],R=w.el&&(w.type===je||!rn(w,E)||w.shapeFlag&70)?h(w.el):p;N(w,E,R,null,m,v,b,S,!0)}},Je=(f,d,p,m,v,b,S)=>{if(p!==m){if(p!==Q)for(const I in p)!Bn(I)&&!(I in m)&&i(f,I,p[I],null,S,d.children,v,b,ae);for(const I in m){if(Bn(I))continue;const w=m[I],E=p[I];w!==E&&I!=="value"&&i(f,I,E,w,S,d.children,v,b,ae)}"value"in m&&i(f,"value",p.value,m.value,S)}},pt=(f,d,p,m,v,b,S,I,w)=>{const E=d.el=f?f.el:c(""),R=d.anchor=f?f.anchor:c("");let{patchFlag:D,dynamicChildren:k,slotScopeIds:$}=d;$&&(I=I?I.concat($):$),f==null?(r(E,p,m),r(R,p,m),de(d.children,p,R,v,b,S,I,w)):D>0&&D&64&&k&&f.dynamicChildren?(ve(f.dynamicChildren,k,p,v,b,S,I),(d.key!=null||v&&d===v.subTree)&&ha(f,d,!0)):z(f,d,p,R,v,b,S,I,w)},Oe=(f,d,p,m,v,b,S,I,w)=>{d.slotScopeIds=I,f==null?d.shapeFlag&512?v.ctx.activate(d,p,m,S,w):tn(d,p,m,v,b,S,w):kt(f,d,w)},tn=(f,d,p,m,v,b,S)=>{const I=f.component=hu(f,m,v);if(ra(f)&&(I.ctx.renderer=T),pu(I),I.asyncDep){if(v&&v.registerDep(I,re),!f.el){const w=I.subTree=be(vn);P(null,w,d,p)}}else re(I,f,d,p,v,b,S)},kt=(f,d,p)=>{const m=d.component=f.component;if(El(f,d,p))if(m.asyncDep&&!m.asyncResolved){J(m,d,p);return}else m.next=d,dl(m.update),m.effect.dirty=!0,m.update();else d.el=f.el,m.vnode=d},re=(f,d,p,m,v,b,S)=>{const I=()=>{if(f.isMounted){let{next:R,bu:D,u:k,parent:$,vnode:V}=f;{const Mt=pa(f);if(Mt){R&&(R.el=V.el,J(f,R,S)),Mt.asyncDep.then(()=>{f.isUnmounted||I()});return}}let Y=R,Z;mt(f,!1),R?(R.el=V.el,J(f,R,S)):R=V,D&&Hn(D),(Z=R.props&&R.props.onVnodeBeforeUpdate)&&De(Z,$,R,V),mt(f,!0);const se=Or(f),Ee=f.subTree;f.subTree=se,N(Ee,se,h(Ee.el),_(Ee),f,v,b),R.el=se.el,Y===null&&Il(f,se.el),k&&pe(k,v),(Z=R.props&&R.props.onVnodeUpdated)&&pe(()=>De(Z,$,R,V),v)}else{let R;const{el:D,props:k}=d,{bm:$,m:V,parent:Y}=f,Z=jn(d);if(mt(f,!1),$&&Hn($),!Z&&(R=k&&k.onVnodeBeforeMount)&&De(R,Y,d),mt(f,!0),D&&G){const se=()=>{f.subTree=Or(f),G(D,f.subTree,f,v,null)};Z?d.type.__asyncLoader().then(()=>!f.isUnmounted&&se()):se()}else{const se=f.subTree=Or(f);N(null,se,p,m,f,v,b),d.el=se.el}if(V&&pe(V,v),!Z&&(R=k&&k.onVnodeMounted)){const se=d;pe(()=>De(R,Y,se),v)}(d.shapeFlag&256||Y&&jn(Y.vnode)&&Y.vnode.shapeFlag&256)&&f.a&&pe(f.a,v),f.isMounted=!0,d=p=m=null}},w=f.effect=new Ss(I,ye,()=>Ds(E),f.scope),E=f.update=()=>{w.dirty&&w.run()};E.id=f.uid,mt(f,!0),E()},J=(f,d,p)=>{d.component=f;const m=f.vnode.props;f.vnode=d,f.next=null,Yl(f,d.props,m,p),Zl(f,d.children,p),Ct(),li(f),At()},z=(f,d,p,m,v,b,S,I,w=!1)=>{const E=f&&f.children,R=f?f.shapeFlag:0,D=d.children,{patchFlag:k,shapeFlag:$}=d;if(k>0){if(k&128){Ye(E,D,p,m,v,b,S,I,w);return}else if(k&256){Be(E,D,p,m,v,b,S,I,w);return}}$&8?(R&16&&ae(E,v,b),D!==E&&u(p,D)):R&16?$&16?Ye(E,D,p,m,v,b,S,I,w):ae(E,v,b,!0):(R&8&&u(p,""),$&16&&de(D,p,m,v,b,S,I,w))},Be=(f,d,p,m,v,b,S,I,w)=>{f=f||Ft,d=d||Ft;const E=f.length,R=d.length,D=Math.min(E,R);let k;for(k=0;k<D;k++){const $=d[k]=w?et(d[k]):Me(d[k]);N(f[k],$,p,null,v,b,S,I,w)}E>R?ae(f,v,b,!0,!1,D):de(d,p,m,v,b,S,I,w,D)},Ye=(f,d,p,m,v,b,S,I,w)=>{let E=0;const R=d.length;let D=f.length-1,k=R-1;for(;E<=D&&E<=k;){const $=f[E],V=d[E]=w?et(d[E]):Me(d[E]);if(rn($,V))N($,V,p,null,v,b,S,I,w);else break;E++}for(;E<=D&&E<=k;){const $=f[D],V=d[k]=w?et(d[k]):Me(d[k]);if(rn($,V))N($,V,p,null,v,b,S,I,w);else break;D--,k--}if(E>D){if(E<=k){const $=k+1,V=$<R?d[$].el:m;for(;E<=k;)N(null,d[E]=w?et(d[E]):Me(d[E]),p,V,v,b,S,I,w),E++}}else if(E>k)for(;E<=D;)he(f[E],v,b,!0),E++;else{const $=E,V=E,Y=new Map;for(E=V;E<=k;E++){const _e=d[E]=w?et(d[E]):Me(d[E]);_e.key!=null&&Y.set(_e.key,E)}let Z,se=0;const Ee=k-V+1;let Mt=!1,Qs=0;const nn=new Array(Ee);for(E=0;E<Ee;E++)nn[E]=0;for(E=$;E<=D;E++){const _e=f[E];if(se>=Ee){he(_e,v,b,!0);continue}let Ne;if(_e.key!=null)Ne=Y.get(_e.key);else for(Z=V;Z<=k;Z++)if(nn[Z-V]===0&&rn(_e,d[Z])){Ne=Z;break}Ne===void 0?he(_e,v,b,!0):(nn[Ne-V]=E+1,Ne>=Qs?Qs=Ne:Mt=!0,N(_e,d[Ne],p,null,v,b,S,I,w),se++)}const Zs=Mt?ru(nn):Ft;for(Z=Zs.length-1,E=Ee-1;E>=0;E--){const _e=V+E,Ne=d[_e],ei=_e+1<R?d[_e+1].el:m;nn[E]===0?N(null,Ne,p,ei,v,b,S,I,w):Mt&&(Z<0||E!==Zs[Z]?ke(Ne,p,ei,2):Z--)}}},ke=(f,d,p,m,v=null)=>{const{el:b,type:S,transition:I,children:w,shapeFlag:E}=f;if(E&6){ke(f.component.subTree,d,p,m);return}if(E&128){f.suspense.move(d,p,m);return}if(E&64){S.move(f,d,p,T);return}if(S===je){r(b,d,p);for(let D=0;D<w.length;D++)ke(w[D],d,p,m);r(f.anchor,d,p);return}if(S===Dr){U(f,d,p);return}if(m!==2&&E&1&&I)if(m===0)I.beforeEnter(b),r(b,d,p),pe(()=>I.enter(b),v);else{const{leave:D,delayLeave:k,afterLeave:$}=I,V=()=>r(b,d,p),Y=()=>{D(b,()=>{V(),$&&$()})};k?k(b,V,Y):Y()}else r(b,d,p)},he=(f,d,p,m=!1,v=!1)=>{const{type:b,props:S,ref:I,children:w,dynamicChildren:E,shapeFlag:R,patchFlag:D,dirs:k}=f;if(I!=null&&is(I,null,p,f,!0),R&256){d.ctx.deactivate(f);return}const $=R&1&&k,V=!jn(f);let Y;if(V&&(Y=S&&S.onVnodeBeforeUnmount)&&De(Y,d,f),R&6)Nn(f.component,p,m);else{if(R&128){f.suspense.unmount(p,m);return}$&&gt(f,null,d,"beforeUnmount"),R&64?f.type.remove(f,d,p,v,T,m):E&&(b!==je||D>0&&D&64)?ae(E,d,p,!1,!0):(b===je&&D&384||!v&&R&16)&&ae(w,d,p),m&&Nt(f)}(V&&(Y=S&&S.onVnodeUnmounted)||$)&&pe(()=>{Y&&De(Y,d,f),$&&gt(f,null,d,"unmounted")},p)},Nt=f=>{const{type:d,el:p,anchor:m,transition:v}=f;if(d===je){Dt(p,m);return}if(d===Dr){j(f);return}const b=()=>{s(p),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(f.shapeFlag&1&&v&&!v.persisted){const{leave:S,delayLeave:I}=v,w=()=>S(p,b);I?I(f.el,b,w):w()}else b()},Dt=(f,d)=>{let p;for(;f!==d;)p=g(f),s(f),f=p;s(d)},Nn=(f,d,p)=>{const{bum:m,scope:v,update:b,subTree:S,um:I}=f;m&&Hn(m),v.stop(),b&&(b.active=!1,he(S,f,d,p)),I&&pe(I,d),pe(()=>{f.isUnmounted=!0},d),d&&d.pendingBranch&&!d.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===d.pendingId&&(d.deps--,d.deps===0&&d.resolve())},ae=(f,d,p,m=!1,v=!1,b=0)=>{for(let S=b;S<f.length;S++)he(f[S],d,p,m,v)},_=f=>f.shapeFlag&6?_(f.component.subTree):f.shapeFlag&128?f.suspense.next():g(f.anchor||f.el),A=(f,d,p)=>{f==null?d._vnode&&he(d._vnode,null,null,!0):N(d._vnode||null,f,d,null,null,null,p),li(),Xo(),d._vnode=f},T={p:N,um:he,m:ke,r:Nt,mt:tn,mc:de,pc:z,pbc:ve,n:_,o:t};let O,G;return e&&([O,G]=e(T)),{render:A,hydrate:O,createApp:ql(A,O)}}function Nr({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function mt({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function nu(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function ha(t,e,n=!1){const r=t.children,s=e.children;if(B(r)&&B(s))for(let i=0;i<r.length;i++){const o=r[i];let c=s[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=s[i]=et(s[i]),c.el=o.el),n||ha(o,c)),c.type===yr&&(c.el=o.el)}}function ru(t){const e=t.slice(),n=[0];let r,s,i,o,c;const a=t.length;for(r=0;r<a;r++){const l=t[r];if(l!==0){if(s=n[n.length-1],t[s]<l){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)c=i+o>>1,t[n[c]]<l?i=c+1:o=c;l<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function pa(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:pa(e)}const su=t=>t.__isTeleport,je=Symbol.for("v-fgt"),yr=Symbol.for("v-txt"),vn=Symbol.for("v-cmt"),Dr=Symbol.for("v-stc"),fn=[];let Se=null;function xs(t=!1){fn.push(Se=t?null:[])}function iu(){fn.pop(),Se=fn[fn.length-1]||null}let yn=1;function bi(t){yn+=t}function ga(t){return t.dynamicChildren=yn>0?Se||Ft:null,iu(),yn>0&&Se&&Se.push(t),t}function ma(t,e,n,r,s,i){return ga(xe(t,e,n,r,s,i,!0))}function ou(t,e,n,r,s){return ga(be(t,e,n,r,s,!0))}function os(t){return t?t.__v_isVNode===!0:!1}function rn(t,e){return t.type===e.type&&t.key===e.key}const br="__vInternal",_a=({key:t})=>t??null,Kn=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?oe(t)||me(t)||H(t)?{i:Te,r:t,k:e,f:!!n}:t:null);function xe(t,e=null,n=null,r=0,s=null,i=t===je?0:1,o=!1,c=!1){const a={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&_a(e),ref:e&&Kn(e),scopeId:_r,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Te};return c?(Us(a,n),i&128&&t.normalize(a)):n&&(a.shapeFlag|=oe(n)?8:16),yn>0&&!o&&Se&&(a.patchFlag>0||i&6)&&a.patchFlag!==32&&Se.push(a),a}const be=au;function au(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===wl)&&(t=vn),os(t)){const c=zt(t,e,!0);return n&&Us(c,n),yn>0&&!i&&Se&&(c.shapeFlag&6?Se[Se.indexOf(t)]=c:Se.push(c)),c.patchFlag|=-2,c}if(vu(t)&&(t=t.__vccOpts),e){e=cu(e);let{class:c,style:a}=e;c&&!oe(c)&&(e.class=Ts(c)),te(a)&&(Vo(a)&&!B(a)&&(a=ie({},a)),e.style=ws(a))}const o=oe(t)?1:Tl(t)?128:su(t)?64:te(t)?4:H(t)?2:0;return xe(t,e,n,r,s,o,i,!0)}function cu(t){return t?Vo(t)||br in t?ie({},t):t:null}function zt(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,c=e?uu(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&_a(c),ref:e&&e.ref?n&&s?B(s)?s.concat(Kn(e)):[s,Kn(e)]:Kn(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==je?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&zt(t.ssContent),ssFallback:t.ssFallback&&zt(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function lu(t=" ",e=0){return be(yr,null,t,e)}function Me(t){return t==null||typeof t=="boolean"?be(vn):B(t)?be(je,null,t.slice()):typeof t=="object"?et(t):be(yr,null,String(t))}function et(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:zt(t)}function Us(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(B(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Us(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(br in e)?e._ctx=Te:s===3&&Te&&(Te.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else H(e)?(e={default:e,_ctx:Te},n=32):(e=String(e),r&64?(n=16,e=[lu(e)]):n=8);t.children=e,t.shapeFlag|=n}function uu(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Ts([e.class,r.class]));else if(s==="style")e.style=ws([e.style,r.style]);else if(lr(s)){const i=e[s],o=r[s];o&&i!==o&&!(B(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function De(t,e,n,r=null){Re(t,e,7,[n,r])}const fu=aa();let du=0;function hu(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||fu,i={uid:du++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Fc(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:la(r,s),emitsOptions:Zo(r,s),emit:null,emitted:null,propsDefaults:Q,inheritAttrs:r.inheritAttrs,ctx:Q,data:Q,props:Q,attrs:Q,slots:Q,refs:Q,setupState:Q,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=gl.bind(null,i),t.ce&&t.ce(i),i}let fe=null,Fs,as;{const t=Co(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};Fs=e("__VUE_INSTANCE_SETTERS__",n=>fe=n),as=e("__VUE_SSR_SETTERS__",n=>Er=n)}const Gt=t=>{Fs(t),t.scope.on()},wt=()=>{fe&&fe.scope.off(),Fs(null)};function va(t){return t.vnode.shapeFlag&4}let Er=!1;function pu(t,e=!1){e&&as(e);const{props:n,children:r}=t.vnode,s=va(t);Jl(t,n,s,e),Ql(t,r);const i=s?gu(t,e):void 0;return e&&as(!1),i}function gu(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=jo(new Proxy(t.ctx,Hl));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?_u(t):null;Gt(t),Ct();const i=ct(r,t,0,[t.props,s]);if(At(),wt(),So(i)){if(i.then(wt,wt),e)return i.then(o=>{Ei(t,o,e)}).catch(o=>{gr(o,t,0)});t.asyncDep=i}else Ei(t,i,e)}else ya(t,e)}function Ei(t,e,n){H(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:te(e)&&(t.setupState=Go(e)),ya(t,n)}let Ii;function ya(t,e,n){const r=t.type;if(!t.render){if(!e&&Ii&&!r.render){const s=r.template||Ms(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:c,compilerOptions:a}=r,l=ie(ie({isCustomElement:i,delimiters:c},o),a);r.render=Ii(s,l)}}t.render=r.render||ye}{Gt(t),Ct();try{Vl(t)}finally{At(),wt()}}}function mu(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return ge(t,"get","$attrs"),e[n]}}))}function _u(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return mu(t)},slots:t.slots,emit:t.emit,expose:e}}function Ir(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Go(jo(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in un)return un[n](t)},has(e,n){return n in e||n in un}}))}function vu(t){return H(t)&&"__vccOpts"in t}const we=(t,e)=>ol(t,e,Er);function ba(t,e,n){const r=arguments.length;return r===2?te(e)&&!B(e)?os(e)?be(t,null,[e]):be(t,e):be(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&os(n)&&(n=[n]),be(t,e,n))}const yu="3.4.5",bu="http://www.w3.org/2000/svg",Eu="http://www.w3.org/1998/Math/MathML",tt=typeof document<"u"?document:null,wi=tt&&tt.createElement("template"),Iu={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?tt.createElementNS(bu,t):e==="mathml"?tt.createElementNS(Eu,t):tt.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>tt.createTextNode(t),createComment:t=>tt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>tt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{wi.innerHTML=r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t;const c=wi.content;if(r==="svg"||r==="mathml"){const a=c.firstChild;for(;a.firstChild;)c.appendChild(a.firstChild);c.removeChild(a)}e.insertBefore(c,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},wu=Symbol("_vtc");function Tu(t,e,n){const r=t[wu];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Su=Symbol("_vod"),Ru=Symbol("");function Cu(t,e,n){const r=t.style,s=oe(n);if(n&&!s){if(e&&!oe(e))for(const i in e)n[i]==null&&cs(r,i,"");for(const i in n)cs(r,i,n[i])}else{const i=r.display;if(s){if(e!==n){const o=r[Ru];o&&(n+=";"+o),r.cssText=n}}else e&&t.removeAttribute("style");Su in t&&(r.display=i)}}const Ti=/\s*!important$/;function cs(t,e,n){if(B(n))n.forEach(r=>cs(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=Au(t,e);Ti.test(n)?t.setProperty(Qt(r),n.replace(Ti,""),"important"):t[r]=n}}const Si=["Webkit","Moz","ms"],Mr={};function Au(t,e){const n=Mr[e];if(n)return n;let r=Wt(e);if(r!=="filter"&&r in t)return Mr[e]=r;r=Ro(r);for(let s=0;s<Si.length;s++){const i=Si[s]+r;if(i in t)return Mr[e]=i}return e}const Ri="http://www.w3.org/1999/xlink";function Pu(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Ri,e.slice(6,e.length)):t.setAttributeNS(Ri,e,n);else{const i=Uc(e);n==null||i&&!Ao(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function Ou(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n??"";return}const c=t.tagName;if(e==="value"&&c!=="PROGRESS"&&!c.includes("-")){t._value=n;const l=c==="OPTION"?t.getAttribute("value"):t.value,u=n??"";l!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Ao(n):n==null&&l==="string"?(n="",a=!0):l==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function Lt(t,e,n,r){t.addEventListener(e,n,r)}function ku(t,e,n,r){t.removeEventListener(e,n,r)}const Ci=Symbol("_vei");function Nu(t,e,n,r,s=null){const i=t[Ci]||(t[Ci]={}),o=i[e];if(r&&o)o.value=r;else{const[c,a]=Du(e);if(r){const l=i[e]=xu(r,s);Lt(t,c,l,a)}else o&&(ku(t,c,o,a),i[e]=void 0)}}const Ai=/(?:Once|Passive|Capture)$/;function Du(t){let e;if(Ai.test(t)){e={};let r;for(;r=t.match(Ai);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Qt(t.slice(2)),e]}let Lr=0;const Mu=Promise.resolve(),Lu=()=>Lr||(Mu.then(()=>Lr=0),Lr=Date.now());function xu(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Re(Uu(r,n.value),e,5,[r])};return n.value=t,n.attached=Lu(),n}function Uu(t,e){if(B(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Pi=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Fu=(t,e,n,r,s,i,o,c,a)=>{const l=s==="svg";e==="class"?Tu(t,r,l):e==="style"?Cu(t,n,r):lr(e)?bs(e)||Nu(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):$u(t,e,r,l))?Ou(t,e,r,i,o,c,a):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Pu(t,e,r,l))};function $u(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Pi(e)&&H(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Pi(e)&&oe(n)?!1:e in t}const Oi=t=>{const e=t.props["onUpdate:modelValue"]||!1;return B(e)?n=>Hn(e,n):e};function Bu(t){t.target.composing=!0}function ki(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const xr=Symbol("_assign"),Ni={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[xr]=Oi(s);const i=r||s.props&&s.props.type==="number";Lt(t,e?"change":"input",o=>{if(o.target.composing)return;let c=t.value;n&&(c=c.trim()),i&&(c=Gr(c)),t[xr](c)}),n&&Lt(t,"change",()=>{t.value=t.value.trim()}),e||(Lt(t,"compositionstart",Bu),Lt(t,"compositionend",ki),Lt(t,"change",ki))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t[xr]=Oi(i),t.composing)return;const o=s||t.type==="number"?Gr(t.value):t.value,c=e??"";o!==c&&(document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===c)||(t.value=c))}},Hu=["ctrl","shift","alt","meta"],Vu={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Hu.some(n=>t[`${n}Key`]&&!e.includes(n))},ju=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const c=Vu[e[o]];if(c&&c(s,e))return}return t(s,...i)})},Wu=ie({patchProp:Fu},Iu);let Di;function Ku(){return Di||(Di=eu(Wu))}const zu=(...t)=>{const e=Ku().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=qu(r);if(!s)return;const i=e._component;!H(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,Gu(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function Gu(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function qu(t){return oe(t)?document.querySelector(t):t}/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const xt=typeof window<"u";function Ju(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const q=Object.assign;function Ur(t,e){const n={};for(const r in e){const s=e[r];n[r]=Ce(s)?s.map(t):t(s)}return n}const dn=()=>{},Ce=Array.isArray,Yu=/\/$/,Xu=t=>t.replace(Yu,"");function Fr(t,e,n="/"){let r,s={},i="",o="";const c=e.indexOf("#");let a=e.indexOf("?");return c<a&&c>=0&&(a=-1),a>-1&&(r=e.slice(0,a),i=e.slice(a+1,c>-1?c:e.length),s=t(i)),c>-1&&(r=r||e.slice(0,c),o=e.slice(c,e.length)),r=tf(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function Qu(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Mi(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Zu(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&qt(e.matched[r],n.matched[s])&&Ea(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function qt(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Ea(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!ef(t[n],e[n]))return!1;return!0}function ef(t,e){return Ce(t)?Li(t,e):Ce(e)?Li(e,t):t===e}function Li(t,e){return Ce(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function tf(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,c;for(o=0;o<r.length;o++)if(c=r[o],c!==".")if(c==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}var bn;(function(t){t.pop="pop",t.push="push"})(bn||(bn={}));var hn;(function(t){t.back="back",t.forward="forward",t.unknown=""})(hn||(hn={}));function nf(t){if(!t)if(xt){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Xu(t)}const rf=/^[^#]+#/;function sf(t,e){return t.replace(rf,"#")+e}function of(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const wr=()=>({left:window.pageXOffset,top:window.pageYOffset});function af(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=of(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function xi(t,e){return(history.state?history.state.position-e:-1)+t}const ls=new Map;function cf(t,e){ls.set(t,e)}function lf(t){const e=ls.get(t);return ls.delete(t),e}let uf=()=>location.protocol+"//"+location.host;function Ia(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let c=s.includes(t.slice(i))?t.slice(i).length:1,a=s.slice(c);return a[0]!=="/"&&(a="/"+a),Mi(a,"")}return Mi(n,t)+r+s}function ff(t,e,n,r){let s=[],i=[],o=null;const c=({state:g})=>{const y=Ia(t,location),C=n.value,N=e.value;let M=0;if(g){if(n.value=y,e.value=g,o&&o===C){o=null;return}M=N?g.position-N.position:0}else r(y);s.forEach(P=>{P(n.value,C,{delta:M,type:bn.pop,direction:M?M>0?hn.forward:hn.back:hn.unknown})})};function a(){o=n.value}function l(g){s.push(g);const y=()=>{const C=s.indexOf(g);C>-1&&s.splice(C,1)};return i.push(y),y}function u(){const{history:g}=window;g.state&&g.replaceState(q({},g.state,{scroll:wr()}),"")}function h(){for(const g of i)g();i=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:a,listen:l,destroy:h}}function Ui(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?wr():null}}function df(t){const{history:e,location:n}=window,r={value:Ia(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(a,l,u){const h=t.indexOf("#"),g=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+a:uf()+t+a;try{e[u?"replaceState":"pushState"](l,"",g),s.value=l}catch(y){console.error(y),n[u?"replace":"assign"](g)}}function o(a,l){const u=q({},e.state,Ui(s.value.back,a,s.value.forward,!0),l,{position:s.value.position});i(a,u,!0),r.value=a}function c(a,l){const u=q({},s.value,e.state,{forward:a,scroll:wr()});i(u.current,u,!0);const h=q({},Ui(r.value,a,null),{position:u.position+1},l);i(a,h,!1),r.value=a}return{location:r,state:s,push:c,replace:o}}function hf(t){t=nf(t);const e=df(t),n=ff(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=q({location:"",base:t,go:r,createHref:sf.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function pf(t){return typeof t=="string"||t&&typeof t=="object"}function wa(t){return typeof t=="string"||typeof t=="symbol"}const Qe={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Ta=Symbol("");var Fi;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Fi||(Fi={}));function Jt(t,e){return q(new Error,{type:t,[Ta]:!0},e)}function He(t,e){return t instanceof Error&&Ta in t&&(e==null||!!(t.type&e))}const $i="[^/]+?",gf={sensitive:!1,strict:!1,start:!0,end:!0},mf=/[.+*?^${}()[\]/\\]/g;function _f(t,e){const n=q({},gf,e),r=[];let s=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let h=0;h<l.length;h++){const g=l[h];let y=40+(n.sensitive?.25:0);if(g.type===0)h||(s+="/"),s+=g.value.replace(mf,"\\$&"),y+=40;else if(g.type===1){const{value:C,repeatable:N,optional:M,regexp:P}=g;i.push({name:C,repeatable:N,optional:M});const L=P||$i;if(L!==$i){y+=10;try{new RegExp(`(${L})`)}catch(j){throw new Error(`Invalid custom RegExp for param "${C}" (${L}): `+j.message)}}let U=N?`((?:${L})(?:/(?:${L}))*)`:`(${L})`;h||(U=M&&l.length<2?`(?:/${U})`:"/"+U),M&&(U+="?"),s+=U,y+=20,M&&(y+=-8),N&&(y+=-20),L===".*"&&(y+=-50)}u.push(y)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function c(l){const u=l.match(o),h={};if(!u)return null;for(let g=1;g<u.length;g++){const y=u[g]||"",C=i[g-1];h[C.name]=y&&C.repeatable?y.split("/"):y}return h}function a(l){let u="",h=!1;for(const g of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const y of g)if(y.type===0)u+=y.value;else if(y.type===1){const{value:C,repeatable:N,optional:M}=y,P=C in l?l[C]:"";if(Ce(P)&&!N)throw new Error(`Provided param "${C}" is an array but it is not repeatable (* or + modifiers)`);const L=Ce(P)?P.join("/"):P;if(!L)if(M)g.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${C}"`);u+=L}}return u||"/"}return{re:o,score:r,keys:i,parse:c,stringify:a}}function vf(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function yf(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=vf(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Bi(r))return 1;if(Bi(s))return-1}return s.length-r.length}function Bi(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const bf={type:0,value:""},Ef=/[a-zA-Z0-9_]/;function If(t){if(!t)return[[]];if(t==="/")return[[bf]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(y){throw new Error(`ERR (${n})/"${l}": ${y}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let c=0,a,l="",u="";function h(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(a==="*"||a==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:a==="*"||a==="+",optional:a==="*"||a==="?"})):e("Invalid state to consume buffer"),l="")}function g(){l+=a}for(;c<t.length;){if(a=t[c++],a==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:a==="/"?(l&&h(),o()):a===":"?(h(),n=1):g();break;case 4:g(),n=r;break;case 1:a==="("?n=2:Ef.test(a)?g():(h(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&c--);break;case 2:a===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+a:n=3:u+=a;break;case 3:h(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&c--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),s}function wf(t,e,n){const r=_f(If(t.path),n),s=q(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function Tf(t,e){const n=[],r=new Map;e=ji({strict:!1,end:!0,sensitive:!1},e);function s(u){return r.get(u)}function i(u,h,g){const y=!g,C=Sf(u);C.aliasOf=g&&g.record;const N=ji(e,u),M=[C];if("alias"in u){const U=typeof u.alias=="string"?[u.alias]:u.alias;for(const j of U)M.push(q({},C,{components:g?g.record.components:C.components,path:j,aliasOf:g?g.record:C}))}let P,L;for(const U of M){const{path:j}=U;if(h&&j[0]!=="/"){const ee=h.record.path,F=ee[ee.length-1]==="/"?"":"/";U.path=h.record.path+(j&&F+j)}if(P=wf(U,h,N),g?g.alias.push(P):(L=L||P,L!==P&&L.alias.push(P),y&&u.name&&!Vi(P)&&o(u.name)),C.children){const ee=C.children;for(let F=0;F<ee.length;F++)i(ee[F],P,g&&g.children[F])}g=g||P,(P.record.components&&Object.keys(P.record.components).length||P.record.name||P.record.redirect)&&a(P)}return L?()=>{o(L)}:dn}function o(u){if(wa(u)){const h=r.get(u);h&&(r.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function c(){return n}function a(u){let h=0;for(;h<n.length&&yf(u,n[h])>=0&&(u.record.path!==n[h].record.path||!Sa(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!Vi(u)&&r.set(u.record.name,u)}function l(u,h){let g,y={},C,N;if("name"in u&&u.name){if(g=r.get(u.name),!g)throw Jt(1,{location:u});N=g.record.name,y=q(Hi(h.params,g.keys.filter(L=>!L.optional).map(L=>L.name)),u.params&&Hi(u.params,g.keys.map(L=>L.name))),C=g.stringify(y)}else if("path"in u)C=u.path,g=n.find(L=>L.re.test(C)),g&&(y=g.parse(C),N=g.record.name);else{if(g=h.name?r.get(h.name):n.find(L=>L.re.test(h.path)),!g)throw Jt(1,{location:u,currentLocation:h});N=g.record.name,y=q({},h.params,u.params),C=g.stringify(y)}const M=[];let P=g;for(;P;)M.unshift(P.record),P=P.parent;return{name:N,path:C,params:y,matched:M,meta:Cf(M)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:c,getRecordMatcher:s}}function Hi(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Sf(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:Rf(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function Rf(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function Vi(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Cf(t){return t.reduce((e,n)=>q(e,n.meta),{})}function ji(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function Sa(t,e){return e.children.some(n=>n===t||Sa(t,n))}const Ra=/#/g,Af=/&/g,Pf=/\//g,Of=/=/g,kf=/\?/g,Ca=/\+/g,Nf=/%5B/g,Df=/%5D/g,Aa=/%5E/g,Mf=/%60/g,Pa=/%7B/g,Lf=/%7C/g,Oa=/%7D/g,xf=/%20/g;function $s(t){return encodeURI(""+t).replace(Lf,"|").replace(Nf,"[").replace(Df,"]")}function Uf(t){return $s(t).replace(Pa,"{").replace(Oa,"}").replace(Aa,"^")}function us(t){return $s(t).replace(Ca,"%2B").replace(xf,"+").replace(Ra,"%23").replace(Af,"%26").replace(Mf,"`").replace(Pa,"{").replace(Oa,"}").replace(Aa,"^")}function Ff(t){return us(t).replace(Of,"%3D")}function $f(t){return $s(t).replace(Ra,"%23").replace(kf,"%3F")}function Bf(t){return t==null?"":$f(t).replace(Pf,"%2F")}function tr(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function Hf(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(Ca," "),o=i.indexOf("="),c=tr(o<0?i:i.slice(0,o)),a=o<0?null:tr(i.slice(o+1));if(c in e){let l=e[c];Ce(l)||(l=e[c]=[l]),l.push(a)}else e[c]=a}return e}function Wi(t){let e="";for(let n in t){const r=t[n];if(n=Ff(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Ce(r)?r.map(i=>i&&us(i)):[r&&us(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function Vf(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Ce(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const jf=Symbol(""),Ki=Symbol(""),Tr=Symbol(""),ka=Symbol(""),fs=Symbol("");function sn(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function nt(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,c)=>{const a=h=>{h===!1?c(Jt(4,{from:n,to:e})):h instanceof Error?c(h):pf(h)?c(Jt(2,{from:e,to:h})):(i&&r.enterCallbacks[s]===i&&typeof h=="function"&&i.push(h),o())},l=t.call(r&&r.instances[s],e,n,a);let u=Promise.resolve(l);t.length<3&&(u=u.then(a)),u.catch(h=>c(h))})}function $r(t,e,n,r){const s=[];for(const i of t)for(const o in i.components){let c=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(Wf(c)){const l=(c.__vccOpts||c)[e];l&&s.push(nt(l,n,r,i,o))}else{let a=c();s.push(()=>a.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=Ju(l)?l.default:l;i.components[o]=u;const g=(u.__vccOpts||u)[e];return g&&nt(g,n,r,i,o)()}))}}return s}function Wf(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function zi(t){const e=Ue(Tr),n=Ue(ka),r=we(()=>e.resolve(It(t.to))),s=we(()=>{const{matched:a}=r.value,{length:l}=a,u=a[l-1],h=n.matched;if(!u||!h.length)return-1;const g=h.findIndex(qt.bind(null,u));if(g>-1)return g;const y=Gi(a[l-2]);return l>1&&Gi(u)===y&&h[h.length-1].path!==y?h.findIndex(qt.bind(null,a[l-2])):g}),i=we(()=>s.value>-1&&qf(n.params,r.value.params)),o=we(()=>s.value>-1&&s.value===n.matched.length-1&&Ea(n.params,r.value.params));function c(a={}){return Gf(a)?e[It(t.replace)?"replace":"push"](It(t.to)).catch(dn):Promise.resolve()}return{route:r,href:we(()=>r.value.href),isActive:i,isExactActive:o,navigate:c}}const Kf=na({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:zi,setup(t,{slots:e}){const n=pr(zi(t)),{options:r}=Ue(Tr),s=we(()=>({[qi(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[qi(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:ba("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),zf=Kf;function Gf(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function qf(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Ce(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Gi(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const qi=(t,e,n)=>t??e??n,Jf=na({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Ue(fs),s=we(()=>t.route||r.value),i=Ue(Ki,0),o=we(()=>{let l=It(i);const{matched:u}=s.value;let h;for(;(h=u[l])&&!h.components;)l++;return l}),c=we(()=>s.value.matched[o.value]);Wn(Ki,we(()=>o.value+1)),Wn(jf,c),Wn(fs,s);const a=Zr();return Vn(()=>[a.value,c.value,t.name],([l,u,h],[g,y,C])=>{u&&(u.instances[h]=l,y&&y!==u&&l&&l===g&&(u.leaveGuards.size||(u.leaveGuards=y.leaveGuards),u.updateGuards.size||(u.updateGuards=y.updateGuards))),l&&u&&(!y||!qt(u,y)||!g)&&(u.enterCallbacks[h]||[]).forEach(N=>N(l))},{flush:"post"}),()=>{const l=s.value,u=t.name,h=c.value,g=h&&h.components[u];if(!g)return Ji(n.default,{Component:g,route:l});const y=h.props[u],C=y?y===!0?l.params:typeof y=="function"?y(l):y:null,M=ba(g,q({},C,e,{onVnodeUnmounted:P=>{P.component.isUnmounted&&(h.instances[u]=null)},ref:a}));return Ji(n.default,{Component:M,route:l})||M}}});function Ji(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Na=Jf;function Yf(t){const e=Tf(t.routes,t),n=t.parseQuery||Hf,r=t.stringifyQuery||Wi,s=t.history,i=sn(),o=sn(),c=sn(),a=al(Qe);let l=Qe;xt&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Ur.bind(null,_=>""+_),h=Ur.bind(null,Bf),g=Ur.bind(null,tr);function y(_,A){let T,O;return wa(_)?(T=e.getRecordMatcher(_),O=A):O=_,e.addRoute(O,T)}function C(_){const A=e.getRecordMatcher(_);A&&e.removeRoute(A)}function N(){return e.getRoutes().map(_=>_.record)}function M(_){return!!e.getRecordMatcher(_)}function P(_,A){if(A=q({},A||a.value),typeof _=="string"){const p=Fr(n,_,A.path),m=e.resolve({path:p.path},A),v=s.createHref(p.fullPath);return q(p,m,{params:g(m.params),hash:tr(p.hash),redirectedFrom:void 0,href:v})}let T;if("path"in _)T=q({},_,{path:Fr(n,_.path,A.path).path});else{const p=q({},_.params);for(const m in p)p[m]==null&&delete p[m];T=q({},_,{params:h(p)}),A.params=h(A.params)}const O=e.resolve(T,A),G=_.hash||"";O.params=u(g(O.params));const f=Qu(r,q({},_,{hash:Uf(G),path:O.path})),d=s.createHref(f);return q({fullPath:f,hash:G,query:r===Wi?Vf(_.query):_.query||{}},O,{redirectedFrom:void 0,href:d})}function L(_){return typeof _=="string"?Fr(n,_,a.value.path):q({},_)}function U(_,A){if(l!==_)return Jt(8,{from:A,to:_})}function j(_){return ne(_)}function ee(_){return j(q(L(_),{replace:!0}))}function F(_){const A=_.matched[_.matched.length-1];if(A&&A.redirect){const{redirect:T}=A;let O=typeof T=="function"?T(_):T;return typeof O=="string"&&(O=O.includes("?")||O.includes("#")?O=L(O):{path:O},O.params={}),q({query:_.query,hash:_.hash,params:"path"in O?{}:_.params},O)}}function ne(_,A){const T=l=P(_),O=a.value,G=_.state,f=_.force,d=_.replace===!0,p=F(T);if(p)return ne(q(L(p),{state:typeof p=="object"?q({},G,p.state):G,force:f,replace:d}),A||T);const m=T;m.redirectedFrom=A;let v;return!f&&Zu(r,O,T)&&(v=Jt(16,{to:m,from:O}),ke(O,O,!0,!1)),(v?Promise.resolve(v):ve(m,O)).catch(b=>He(b)?He(b,2)?b:Ye(b):z(b,m,O)).then(b=>{if(b){if(He(b,2))return ne(q({replace:d},L(b.to),{state:typeof b.to=="object"?q({},G,b.to.state):G,force:f}),A||m)}else b=pt(m,O,!0,d,G);return Je(m,O,b),b})}function de(_,A){const T=U(_,A);return T?Promise.reject(T):Promise.resolve()}function Pe(_){const A=Dt.values().next().value;return A&&typeof A.runWithContext=="function"?A.runWithContext(_):_()}function ve(_,A){let T;const[O,G,f]=Xf(_,A);T=$r(O.reverse(),"beforeRouteLeave",_,A);for(const p of O)p.leaveGuards.forEach(m=>{T.push(nt(m,_,A))});const d=de.bind(null,_,A);return T.push(d),ae(T).then(()=>{T=[];for(const p of i.list())T.push(nt(p,_,A));return T.push(d),ae(T)}).then(()=>{T=$r(G,"beforeRouteUpdate",_,A);for(const p of G)p.updateGuards.forEach(m=>{T.push(nt(m,_,A))});return T.push(d),ae(T)}).then(()=>{T=[];for(const p of f)if(p.beforeEnter)if(Ce(p.beforeEnter))for(const m of p.beforeEnter)T.push(nt(m,_,A));else T.push(nt(p.beforeEnter,_,A));return T.push(d),ae(T)}).then(()=>(_.matched.forEach(p=>p.enterCallbacks={}),T=$r(f,"beforeRouteEnter",_,A),T.push(d),ae(T))).then(()=>{T=[];for(const p of o.list())T.push(nt(p,_,A));return T.push(d),ae(T)}).catch(p=>He(p,8)?p:Promise.reject(p))}function Je(_,A,T){c.list().forEach(O=>Pe(()=>O(_,A,T)))}function pt(_,A,T,O,G){const f=U(_,A);if(f)return f;const d=A===Qe,p=xt?history.state:{};T&&(O||d?s.replace(_.fullPath,q({scroll:d&&p&&p.scroll},G)):s.push(_.fullPath,G)),a.value=_,ke(_,A,T,d),Ye()}let Oe;function tn(){Oe||(Oe=s.listen((_,A,T)=>{if(!Nn.listening)return;const O=P(_),G=F(O);if(G){ne(q(G,{replace:!0}),O).catch(dn);return}l=O;const f=a.value;xt&&cf(xi(f.fullPath,T.delta),wr()),ve(O,f).catch(d=>He(d,12)?d:He(d,2)?(ne(d.to,O).then(p=>{He(p,20)&&!T.delta&&T.type===bn.pop&&s.go(-1,!1)}).catch(dn),Promise.reject()):(T.delta&&s.go(-T.delta,!1),z(d,O,f))).then(d=>{d=d||pt(O,f,!1),d&&(T.delta&&!He(d,8)?s.go(-T.delta,!1):T.type===bn.pop&&He(d,20)&&s.go(-1,!1)),Je(O,f,d)}).catch(dn)}))}let kt=sn(),re=sn(),J;function z(_,A,T){Ye(_);const O=re.list();return O.length?O.forEach(G=>G(_,A,T)):console.error(_),Promise.reject(_)}function Be(){return J&&a.value!==Qe?Promise.resolve():new Promise((_,A)=>{kt.add([_,A])})}function Ye(_){return J||(J=!_,tn(),kt.list().forEach(([A,T])=>_?T(_):A()),kt.reset()),_}function ke(_,A,T,O){const{scrollBehavior:G}=t;if(!xt||!G)return Promise.resolve();const f=!T&&lf(xi(_.fullPath,0))||(O||!T)&&history.state&&history.state.scroll||null;return Jo().then(()=>G(_,A,f)).then(d=>d&&af(d)).catch(d=>z(d,_,A))}const he=_=>s.go(_);let Nt;const Dt=new Set,Nn={currentRoute:a,listening:!0,addRoute:y,removeRoute:C,hasRoute:M,getRoutes:N,resolve:P,options:t,push:j,replace:ee,go:he,back:()=>he(-1),forward:()=>he(1),beforeEach:i.add,beforeResolve:o.add,afterEach:c.add,onError:re.add,isReady:Be,install(_){const A=this;_.component("RouterLink",zf),_.component("RouterView",Na),_.config.globalProperties.$router=A,Object.defineProperty(_.config.globalProperties,"$route",{enumerable:!0,get:()=>It(a)}),xt&&!Nt&&a.value===Qe&&(Nt=!0,j(s.location).catch(G=>{}));const T={};for(const G in Qe)Object.defineProperty(T,G,{get:()=>a.value[G],enumerable:!0});_.provide(Tr,A),_.provide(ka,Bo(T)),_.provide(fs,a);const O=_.unmount;Dt.add(_),_.unmount=function(){Dt.delete(_),Dt.size<1&&(l=Qe,Oe&&Oe(),Oe=null,a.value=Qe,Nt=!1,J=!1),O()}}};function ae(_){return _.reduce((A,T)=>A.then(()=>Pe(T)),Promise.resolve())}return Nn}function Xf(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const c=e.matched[o];c&&(t.matched.find(l=>qt(l,c))?r.push(c):n.push(c));const a=t.matched[o];a&&(e.matched.find(l=>qt(l,a))||s.push(a))}return[n,r,s]}function Qf(){return Ue(Tr)}const Zf={__name:"App",setup(t){return(e,n)=>(xs(),ou(It(Na)))}};var Yi={};/**
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
 */const Da=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},ed=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],c=t[n++],a=((s&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(a>>10)),e[r++]=String.fromCharCode(56320+(a&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Ma={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,c=o?t[s+1]:0,a=s+2<t.length,l=a?t[s+2]:0,u=i>>2,h=(i&3)<<4|c>>4;let g=(c&15)<<2|l>>6,y=l&63;a||(y=64,o||(g=64)),r.push(n[u],n[h],n[g],n[y])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Da(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):ed(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],c=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||c==null||l==null||h==null)throw new td;const g=i<<2|c>>4;if(r.push(g),l!==64){const y=c<<4&240|l>>2;if(r.push(y),h!==64){const C=l<<6&192|h;r.push(C)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class td extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const nd=function(t){const e=Da(t);return Ma.encodeByteArray(e,!0)},La=function(t){return nd(t).replace(/\./g,"")},xa=function(t){try{return Ma.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function rd(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const sd=()=>rd().__FIREBASE_DEFAULTS__,id=()=>{if(typeof process>"u"||typeof Yi>"u")return;const t=Yi.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},od=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&xa(t[1]);return e&&JSON.parse(e)},Bs=()=>{try{return sd()||id()||od()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},ad=t=>{var e,n;return(n=(e=Bs())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Ua=()=>{var t;return(t=Bs())===null||t===void 0?void 0:t.config},Fa=t=>{var e;return(e=Bs())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class cd{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function le(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ld(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(le())}function ud(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function fd(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function dd(){const t=le();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function hd(){try{return typeof indexedDB=="object"}catch{return!1}}function pd(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const gd="FirebaseError";class dt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=gd,Object.setPrototypeOf(this,dt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Rn.prototype.create)}}class Rn{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?md(i,r):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new dt(s,c,r)}}function md(t,e){return t.replace(_d,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const _d=/\{\$([^}]+)}/g;function vd(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function nr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Xi(i)&&Xi(o)){if(!nr(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Xi(t){return t!==null&&typeof t=="object"}/**
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
 */function Cn(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function an(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function cn(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function yd(t,e){const n=new bd(t,e);return n.subscribe.bind(n)}class bd{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Ed(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Br),s.error===void 0&&(s.error=Br),s.complete===void 0&&(s.complete=Br);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Ed(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Br(){}/**
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
 */function Pt(t){return t&&t._delegate?t._delegate:t}class Yt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */class Id{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new cd;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Td(e))try{this.getOrInitializeService({instanceIdentifier:_t})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=_t){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=_t){return this.instances.has(e)}getOptions(e=_t){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:wd(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=_t){return this.component?this.component.multipleInstances?e:_t:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function wd(t){return t===_t?void 0:t}function Td(t){return t.instantiationMode==="EAGER"}/**
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
 */class Sd{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Id(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var X;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(X||(X={}));const Rd={debug:X.DEBUG,verbose:X.VERBOSE,info:X.INFO,warn:X.WARN,error:X.ERROR,silent:X.SILENT},Cd=X.INFO,Ad={[X.DEBUG]:"log",[X.VERBOSE]:"log",[X.INFO]:"info",[X.WARN]:"warn",[X.ERROR]:"error"},Pd=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=Ad[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class $a{constructor(e){this.name=e,this._logLevel=Cd,this._logHandler=Pd,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in X))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Rd[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,X.DEBUG,...e),this._logHandler(this,X.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,X.VERBOSE,...e),this._logHandler(this,X.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,X.INFO,...e),this._logHandler(this,X.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,X.WARN,...e),this._logHandler(this,X.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,X.ERROR,...e),this._logHandler(this,X.ERROR,...e)}}const Od=(t,e)=>e.some(n=>t instanceof n);let Qi,Zi;function kd(){return Qi||(Qi=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Nd(){return Zi||(Zi=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ba=new WeakMap,ds=new WeakMap,Ha=new WeakMap,Hr=new WeakMap,Hs=new WeakMap;function Dd(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(lt(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Ba.set(n,t)}).catch(()=>{}),Hs.set(e,t),e}function Md(t){if(ds.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});ds.set(t,e)}let hs={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ds.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Ha.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return lt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Ld(t){hs=t(hs)}function xd(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Vr(this),e,...n);return Ha.set(r,e.sort?e.sort():[e]),lt(r)}:Nd().includes(t)?function(...e){return t.apply(Vr(this),e),lt(Ba.get(this))}:function(...e){return lt(t.apply(Vr(this),e))}}function Ud(t){return typeof t=="function"?xd(t):(t instanceof IDBTransaction&&Md(t),Od(t,kd())?new Proxy(t,hs):t)}function lt(t){if(t instanceof IDBRequest)return Dd(t);if(Hr.has(t))return Hr.get(t);const e=Ud(t);return e!==t&&(Hr.set(t,e),Hs.set(e,t)),e}const Vr=t=>Hs.get(t);function Fd(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),c=lt(o);return r&&o.addEventListener("upgradeneeded",a=>{r(lt(o.result),a.oldVersion,a.newVersion,lt(o.transaction),a)}),n&&o.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),c.then(a=>{i&&a.addEventListener("close",()=>i()),s&&a.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),c}const $d=["get","getKey","getAll","getAllKeys","count"],Bd=["put","add","delete","clear"],jr=new Map;function eo(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(jr.get(e))return jr.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=Bd.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||$d.includes(n)))return;const i=async function(o,...c){const a=this.transaction(o,s?"readwrite":"readonly");let l=a.store;return r&&(l=l.index(c.shift())),(await Promise.all([l[n](...c),s&&a.done]))[0]};return jr.set(e,i),i}Ld(t=>({...t,get:(e,n,r)=>eo(e,n)||t.get(e,n,r),has:(e,n)=>!!eo(e,n)||t.has(e,n)}));/**
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
 */class Hd{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Vd(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Vd(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ps="@firebase/app",to="0.9.25";/**
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
 */const St=new $a("@firebase/app"),jd="@firebase/app-compat",Wd="@firebase/analytics-compat",Kd="@firebase/analytics",zd="@firebase/app-check-compat",Gd="@firebase/app-check",qd="@firebase/auth",Jd="@firebase/auth-compat",Yd="@firebase/database",Xd="@firebase/database-compat",Qd="@firebase/functions",Zd="@firebase/functions-compat",eh="@firebase/installations",th="@firebase/installations-compat",nh="@firebase/messaging",rh="@firebase/messaging-compat",sh="@firebase/performance",ih="@firebase/performance-compat",oh="@firebase/remote-config",ah="@firebase/remote-config-compat",ch="@firebase/storage",lh="@firebase/storage-compat",uh="@firebase/firestore",fh="@firebase/firestore-compat",dh="firebase",hh="10.7.1";/**
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
 */const gs="[DEFAULT]",ph={[ps]:"fire-core",[jd]:"fire-core-compat",[Kd]:"fire-analytics",[Wd]:"fire-analytics-compat",[Gd]:"fire-app-check",[zd]:"fire-app-check-compat",[qd]:"fire-auth",[Jd]:"fire-auth-compat",[Yd]:"fire-rtdb",[Xd]:"fire-rtdb-compat",[Qd]:"fire-fn",[Zd]:"fire-fn-compat",[eh]:"fire-iid",[th]:"fire-iid-compat",[nh]:"fire-fcm",[rh]:"fire-fcm-compat",[sh]:"fire-perf",[ih]:"fire-perf-compat",[oh]:"fire-rc",[ah]:"fire-rc-compat",[ch]:"fire-gcs",[lh]:"fire-gcs-compat",[uh]:"fire-fst",[fh]:"fire-fst-compat","fire-js":"fire-js",[dh]:"fire-js-all"};/**
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
 */const rr=new Map,ms=new Map;function gh(t,e){try{t.container.addComponent(e)}catch(n){St.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function En(t){const e=t.name;if(ms.has(e))return St.debug(`There were multiple attempts to register component ${e}.`),!1;ms.set(e,t);for(const n of rr.values())gh(n,t);return!0}function Va(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const mh={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},ut=new Rn("app","Firebase",mh);/**
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
 */class _h{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Yt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ut.create("app-deleted",{appName:this._name})}}/**
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
 */const An=hh;function ja(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:gs,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw ut.create("bad-app-name",{appName:String(s)});if(n||(n=Ua()),!n)throw ut.create("no-options");const i=rr.get(s);if(i){if(nr(n,i.options)&&nr(r,i.config))return i;throw ut.create("duplicate-app",{appName:s})}const o=new Sd(s);for(const a of ms.values())o.addComponent(a);const c=new _h(n,r,o);return rr.set(s,c),c}function vh(t=gs){const e=rr.get(t);if(!e&&t===gs&&Ua())return ja();if(!e)throw ut.create("no-app",{appName:t});return e}function Ht(t,e,n){var r;let s=(r=ph[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const c=[`Unable to register library "${s}" with version "${e}":`];i&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&c.push("and"),o&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),St.warn(c.join(" "));return}En(new Yt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const yh="firebase-heartbeat-database",bh=1,In="firebase-heartbeat-store";let Wr=null;function Wa(){return Wr||(Wr=Fd(yh,bh,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(In)}}}).catch(t=>{throw ut.create("idb-open",{originalErrorMessage:t.message})})),Wr}async function Eh(t){try{return await(await Wa()).transaction(In).objectStore(In).get(Ka(t))}catch(e){if(e instanceof dt)St.warn(e.message);else{const n=ut.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});St.warn(n.message)}}}async function no(t,e){try{const r=(await Wa()).transaction(In,"readwrite");await r.objectStore(In).put(e,Ka(t)),await r.done}catch(n){if(n instanceof dt)St.warn(n.message);else{const r=ut.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});St.warn(r.message)}}}function Ka(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Ih=1024,wh=30*24*60*60*1e3;class Th{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Rh(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=ro();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const c=new Date(o.date).valueOf();return Date.now()-c<=wh}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=ro(),{heartbeatsToSend:r,unsentEntries:s}=Sh(this._heartbeatsCache.heartbeats),i=La(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function ro(){return new Date().toISOString().substring(0,10)}function Sh(t,e=Ih){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),so(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),so(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Rh{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return hd()?pd().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Eh(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return no(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return no(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function so(t){return La(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Ch(t){En(new Yt("platform-logger",e=>new Hd(e),"PRIVATE")),En(new Yt("heartbeat",e=>new Th(e),"PRIVATE")),Ht(ps,to,t),Ht(ps,to,"esm2017"),Ht("fire-js","")}Ch("");var Ah="firebase",Ph="10.7.1";/**
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
 */Ht(Ah,Ph,"app");function Vs(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function za(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Oh=za,Ga=new Rn("auth","Firebase",za());/**
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
 */const sr=new $a("@firebase/auth");function kh(t,...e){sr.logLevel<=X.WARN&&sr.warn(`Auth (${An}): ${t}`,...e)}function zn(t,...e){sr.logLevel<=X.ERROR&&sr.error(`Auth (${An}): ${t}`,...e)}/**
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
 */function Ae(t,...e){throw js(t,...e)}function Fe(t,...e){return js(t,...e)}function Nh(t,e,n){const r=Object.assign(Object.assign({},Oh()),{[e]:n});return new Rn("auth","Firebase",r).create(e,{appName:t.name})}function js(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Ga.create(t,...e)}function x(t,e,...n){if(!t)throw js(e,...n)}function We(t){const e="INTERNAL ASSERTION FAILED: "+t;throw zn(e),new Error(e)}function Ge(t,e){t||We(e)}/**
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
 */function _s(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Dh(){return io()==="http:"||io()==="https:"}function io(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function Mh(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Dh()||ud()||"connection"in navigator)?navigator.onLine:!0}function Lh(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Pn{constructor(e,n){this.shortDelay=e,this.longDelay=n,Ge(n>e,"Short delay should be less than long delay!"),this.isMobile=ld()||fd()}get(){return Mh()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Ws(t,e){Ge(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class qa{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;We("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;We("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;We("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const xh={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Uh=new Pn(3e4,6e4);function Ot(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ht(t,e,n,r,s={}){return Ja(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const c=Cn(Object.assign({key:t.config.apiKey},o)).slice(1),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode),qa.fetch()(Ya(t,t.config.apiHost,n,c),Object.assign({method:e,headers:a,referrerPolicy:"no-referrer"},i))})}async function Ja(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},xh),e);try{const s=new $h(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw $n(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[a,l]=c.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw $n(t,"credential-already-in-use",o);if(a==="EMAIL_EXISTS")throw $n(t,"email-already-in-use",o);if(a==="USER_DISABLED")throw $n(t,"user-disabled",o);const u=r[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Nh(t,u,l);Ae(t,u)}}catch(s){if(s instanceof dt)throw s;Ae(t,"network-request-failed",{message:String(s)})}}async function Sr(t,e,n,r,s={}){const i=await ht(t,e,n,r,s);return"mfaPendingCredential"in i&&Ae(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Ya(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Ws(t.config,s):`${t.config.apiScheme}://${s}`}function Fh(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class $h{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Fe(this.auth,"network-request-failed")),Uh.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function $n(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Fe(t,e,r);return s.customData._tokenResponse=n,s}function oo(t){return t!==void 0&&t.enterprise!==void 0}class Bh{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return Fh(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function Hh(t,e){return ht(t,"GET","/v2/recaptchaConfig",Ot(t,e))}/**
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
 */async function Vh(t,e){return ht(t,"POST","/v1/accounts:delete",e)}async function jh(t,e){return ht(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function pn(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Wh(t,e=!1){const n=Pt(t),r=await n.getIdToken(e),s=Ks(r);x(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:pn(Kr(s.auth_time)),issuedAtTime:pn(Kr(s.iat)),expirationTime:pn(Kr(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Kr(t){return Number(t)*1e3}function Ks(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return zn("JWT malformed, contained fewer than 3 sections"),null;try{const s=xa(n);return s?JSON.parse(s):(zn("Failed to decode base64 JWT payload"),null)}catch(s){return zn("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Kh(t){const e=Ks(t);return x(e,"internal-error"),x(typeof e.exp<"u","internal-error"),x(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function wn(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof dt&&zh(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function zh({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class Gh{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Xa{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=pn(this.lastLoginAt),this.creationTime=pn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ir(t){var e;const n=t.auth,r=await t.getIdToken(),s=await wn(t,jh(n,{idToken:r}));x(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Yh(i.providerUserInfo):[],c=Jh(t.providerData,o),a=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(c!=null&&c.length),u=a?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new Xa(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function qh(t){const e=Pt(t);await ir(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Jh(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Yh(t){return t.map(e=>{var{providerId:n}=e,r=Vs(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function Xh(t,e){const n=await Ja(t,{},async()=>{const r=Cn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=Ya(t,s,"/v1/token",`key=${i}`),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",qa.fetch()(o,{method:"POST",headers:c,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Qh(t,e){return ht(t,"POST","/v2/accounts:revokeToken",Ot(t,e))}/**
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
 */class Tn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){x(e.idToken,"internal-error"),x(typeof e.idToken<"u","internal-error"),x(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Kh(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return x(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await Xh(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Tn;return r&&(x(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(x(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(x(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Tn,this.toJSON())}_performRefresh(){return We("not implemented")}}/**
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
 */function Ze(t,e){x(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Tt{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Vs(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Gh(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Xa(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await wn(this,this.stsTokenManager.getToken(this.auth,e));return x(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Wh(this,e)}reload(){return qh(this)}_assign(e){this!==e&&(x(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Tt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){x(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await ir(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await wn(this,Vh(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,c,a,l,u;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(s=n.email)!==null&&s!==void 0?s:void 0,y=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,C=(o=n.photoURL)!==null&&o!==void 0?o:void 0,N=(c=n.tenantId)!==null&&c!==void 0?c:void 0,M=(a=n._redirectEventId)!==null&&a!==void 0?a:void 0,P=(l=n.createdAt)!==null&&l!==void 0?l:void 0,L=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:U,emailVerified:j,isAnonymous:ee,providerData:F,stsTokenManager:ne}=n;x(U&&ne,e,"internal-error");const de=Tn.fromJSON(this.name,ne);x(typeof U=="string",e,"internal-error"),Ze(h,e.name),Ze(g,e.name),x(typeof j=="boolean",e,"internal-error"),x(typeof ee=="boolean",e,"internal-error"),Ze(y,e.name),Ze(C,e.name),Ze(N,e.name),Ze(M,e.name),Ze(P,e.name),Ze(L,e.name);const Pe=new Tt({uid:U,auth:e,email:g,emailVerified:j,displayName:h,isAnonymous:ee,photoURL:C,phoneNumber:y,tenantId:N,stsTokenManager:de,createdAt:P,lastLoginAt:L});return F&&Array.isArray(F)&&(Pe.providerData=F.map(ve=>Object.assign({},ve))),M&&(Pe._redirectEventId=M),Pe}static async _fromIdTokenResponse(e,n,r=!1){const s=new Tn;s.updateFromServerResponse(n);const i=new Tt({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await ir(i),i}}/**
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
 */const ao=new Map;function Ke(t){Ge(t instanceof Function,"Expected a class definition");let e=ao.get(t);return e?(Ge(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,ao.set(t,e),e)}/**
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
 */class Qa{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Qa.type="NONE";const co=Qa;/**
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
 */function Gn(t,e,n){return`firebase:${t}:${e}:${n}`}class Vt{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Gn(this.userKey,s.apiKey,i),this.fullPersistenceKey=Gn("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Tt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Vt(Ke(co),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||Ke(co);const o=Gn(r,e.config.apiKey,e.name);let c=null;for(const l of n)try{const u=await l._get(o);if(u){const h=Tt._fromJSON(e,u);l!==i&&(c=h),i=l;break}}catch{}const a=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!a.length?new Vt(i,e,r):(i=a[0],c&&await i._set(o,c.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new Vt(i,e,r))}}/**
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
 */function lo(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(tc(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Za(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(rc(e))return"Blackberry";if(sc(e))return"Webos";if(zs(e))return"Safari";if((e.includes("chrome/")||ec(e))&&!e.includes("edge/"))return"Chrome";if(nc(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Za(t=le()){return/firefox\//i.test(t)}function zs(t=le()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ec(t=le()){return/crios\//i.test(t)}function tc(t=le()){return/iemobile/i.test(t)}function nc(t=le()){return/android/i.test(t)}function rc(t=le()){return/blackberry/i.test(t)}function sc(t=le()){return/webos/i.test(t)}function Rr(t=le()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Zh(t=le()){var e;return Rr(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function ep(){return dd()&&document.documentMode===10}function ic(t=le()){return Rr(t)||nc(t)||sc(t)||rc(t)||/windows phone/i.test(t)||tc(t)}function tp(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function oc(t,e=[]){let n;switch(t){case"Browser":n=lo(le());break;case"Worker":n=`${lo(le())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${An}/${r}`}/**
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
 */class np{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,c)=>{try{const a=e(i);o(a)}catch(a){c(a)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function rp(t,e={}){return ht(t,"GET","/v2/passwordPolicy",Ot(t,e))}/**
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
 */const sp=6;class ip{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:sp,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,c;const a={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,a),this.validatePasswordCharacterOptions(e,a),a.isValid&&(a.isValid=(n=a.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),a.isValid&&(a.isValid=(r=a.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),a.isValid&&(a.isValid=(s=a.containsLowercaseLetter)!==null&&s!==void 0?s:!0),a.isValid&&(a.isValid=(i=a.containsUppercaseLetter)!==null&&i!==void 0?i:!0),a.isValid&&(a.isValid=(o=a.containsNumericCharacter)!==null&&o!==void 0?o:!0),a.isValid&&(a.isValid=(c=a.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),a}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class op{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new uo(this),this.idTokenSubscription=new uo(this),this.beforeStateQueue=new np(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ga,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Ke(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Vt.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,c=s==null?void 0:s._redirectEventId,a=await this.tryRedirectSignIn(e);(!o||o===c)&&(a!=null&&a.user)&&(s=a.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return x(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ir(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Lh()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Pt(e):null;return n&&x(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&x(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Ke(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await rp(this),n=new ip(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Rn("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Qh(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Ke(e)||this._popupRedirectResolver;x(n,this,"argument-error"),this.redirectPersistenceManager=await Vt.create(this,[Ke(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(x(c,this,"internal-error"),c.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const a=e.addObserver(n,r,s);return()=>{o=!0,a()}}else{const a=e.addObserver(n);return()=>{o=!0,a()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return x(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=oc(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&kh(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Zt(t){return Pt(t)}class uo{constructor(e){this.auth=e,this.observer=null,this.addObserver=yd(n=>this.observer=n)}get next(){return x(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function ap(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function ac(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Fe("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",ap().appendChild(r)})}function cp(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const lp="https://www.google.com/recaptcha/enterprise.js?render=",up="recaptcha-enterprise",fp="NO_RECAPTCHA";class dp{constructor(e){this.type=up,this.auth=Zt(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,c)=>{Hh(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(a=>{if(a.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const l=new Bh(a);return i.tenantId==null?i._agentRecaptchaConfig=l:i._tenantRecaptchaConfigs[i.tenantId]=l,o(l.siteKey)}}).catch(a=>{c(a)})})}function s(i,o,c){const a=window.grecaptcha;oo(a)?a.enterprise.ready(()=>{a.enterprise.execute(i,{action:e}).then(l=>{o(l)}).catch(()=>{o(fp)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(c=>{if(!n&&oo(window.grecaptcha))s(c,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}ac(lp+c).then(()=>{s(c,i,o)}).catch(a=>{o(a)})}}).catch(c=>{o(c)})})}}async function fo(t,e,n,r=!1){const s=new dp(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function ho(t,e,n,r){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await fo(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await fo(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
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
 */function hp(t,e){const n=Va(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(nr(i,e??{}))return s;Ae(s,"already-initialized")}return n.initialize({options:e})}function pp(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Ke);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function gp(t,e,n){const r=Zt(t);x(r._canInitEmulator,r,"emulator-config-failed"),x(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=cc(e),{host:o,port:c}=mp(e),a=c===null?"":`:${c}`;r.config.emulator={url:`${i}//${o}${a}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||_p()}function cc(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function mp(t){const e=cc(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:po(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:po(o)}}}function po(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function _p(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Gs{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return We("not implemented")}_getIdTokenResponse(e){return We("not implemented")}_linkToIdToken(e,n){return We("not implemented")}_getReauthenticationResolver(e){return We("not implemented")}}async function vp(t,e){return ht(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function yp(t,e){return Sr(t,"POST","/v1/accounts:signInWithPassword",Ot(t,e))}/**
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
 */async function bp(t,e){return Sr(t,"POST","/v1/accounts:signInWithEmailLink",Ot(t,e))}async function Ep(t,e){return Sr(t,"POST","/v1/accounts:signInWithEmailLink",Ot(t,e))}/**
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
 */class Sn extends Gs{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Sn(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Sn(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ho(e,n,"signInWithPassword",yp);case"emailLink":return bp(e,{email:this._email,oobCode:this._password});default:Ae(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ho(e,r,"signUpPassword",vp);case"emailLink":return Ep(e,{idToken:n,email:this._email,oobCode:this._password});default:Ae(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function jt(t,e){return Sr(t,"POST","/v1/accounts:signInWithIdp",Ot(t,e))}/**
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
 */const Ip="http://localhost";class Rt extends Gs{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Rt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ae("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Vs(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Rt(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return jt(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,jt(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,jt(e,n)}buildRequest(){const e={requestUri:Ip,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Cn(n)}return e}}/**
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
 */function wp(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Tp(t){const e=an(cn(t)).link,n=e?an(cn(e)).deep_link_id:null,r=an(cn(t)).deep_link_id;return(r?an(cn(r)).link:null)||r||n||e||t}class qs{constructor(e){var n,r,s,i,o,c;const a=an(cn(e)),l=(n=a.apiKey)!==null&&n!==void 0?n:null,u=(r=a.oobCode)!==null&&r!==void 0?r:null,h=wp((s=a.mode)!==null&&s!==void 0?s:null);x(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=(i=a.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=a.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(c=a.tenantId)!==null&&c!==void 0?c:null}static parseLink(e){const n=Tp(e);try{return new qs(n)}catch{return null}}}/**
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
 */class en{constructor(){this.providerId=en.PROVIDER_ID}static credential(e,n){return Sn._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=qs.parseLink(n);return x(r,"argument-error"),Sn._fromEmailAndCode(e,r.code,r.tenantId)}}en.PROVIDER_ID="password";en.EMAIL_PASSWORD_SIGN_IN_METHOD="password";en.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class lc{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class On extends lc{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class rt extends On{constructor(){super("facebook.com")}static credential(e){return Rt._fromParams({providerId:rt.PROVIDER_ID,signInMethod:rt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return rt.credentialFromTaggedObject(e)}static credentialFromError(e){return rt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return rt.credential(e.oauthAccessToken)}catch{return null}}}rt.FACEBOOK_SIGN_IN_METHOD="facebook.com";rt.PROVIDER_ID="facebook.com";/**
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
 */class st extends On{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Rt._fromParams({providerId:st.PROVIDER_ID,signInMethod:st.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return st.credentialFromTaggedObject(e)}static credentialFromError(e){return st.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return st.credential(n,r)}catch{return null}}}st.GOOGLE_SIGN_IN_METHOD="google.com";st.PROVIDER_ID="google.com";/**
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
 */class it extends On{constructor(){super("github.com")}static credential(e){return Rt._fromParams({providerId:it.PROVIDER_ID,signInMethod:it.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return it.credentialFromTaggedObject(e)}static credentialFromError(e){return it.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return it.credential(e.oauthAccessToken)}catch{return null}}}it.GITHUB_SIGN_IN_METHOD="github.com";it.PROVIDER_ID="github.com";/**
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
 */class ot extends On{constructor(){super("twitter.com")}static credential(e,n){return Rt._fromParams({providerId:ot.PROVIDER_ID,signInMethod:ot.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return ot.credentialFromTaggedObject(e)}static credentialFromError(e){return ot.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return ot.credential(n,r)}catch{return null}}}ot.TWITTER_SIGN_IN_METHOD="twitter.com";ot.PROVIDER_ID="twitter.com";/**
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
 */class Xt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Tt._fromIdTokenResponse(e,r,s),o=go(r);return new Xt({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=go(r);return new Xt({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function go(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class or extends dt{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,or.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new or(e,n,r,s)}}function uc(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?or._fromErrorAndOperation(t,i,e,r):i})}async function Sp(t,e,n=!1){const r=await wn(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Xt._forOperation(t,"link",r)}/**
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
 */async function Rp(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const i=await wn(t,uc(r,s,e,t),n);x(i.idToken,r,"internal-error");const o=Ks(i.idToken);x(o,r,"internal-error");const{sub:c}=o;return x(t.uid===c,r,"user-mismatch"),Xt._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Ae(r,"user-mismatch"),i}}/**
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
 */async function fc(t,e,n=!1){const r="signIn",s=await uc(t,r,e),i=await Xt._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function Cp(t,e){return fc(Zt(t),e)}/**
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
 */async function Ap(t){const e=Zt(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function Pp(t,e,n){return Cp(Pt(t),en.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Ap(t),r})}function Op(t,e,n,r){return Pt(t).onIdTokenChanged(e,n,r)}function kp(t,e,n){return Pt(t).beforeAuthStateChanged(e,n)}const ar="__sak";/**
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
 */class dc{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ar,"1"),this.storage.removeItem(ar),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function Np(){const t=le();return zs(t)||Rr(t)}const Dp=1e3,Mp=10;class hc extends dc{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Np()&&tp(),this.fallbackToPolling=ic(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,c,a)=>{this.notifyListeners(o,a)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);ep()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Mp):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Dp)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}hc.type="LOCAL";const Lp=hc;/**
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
 */class pc extends dc{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}pc.type="SESSION";const gc=pc;/**
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
 */function xp(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Cr{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Cr(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(o).map(async l=>l(n.origin,i)),a=await xp(c);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:a})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Cr.receivers=[];/**
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
 */function Js(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Up{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((c,a)=>{const l=Js("",20);s.port1.start();const u=setTimeout(()=>{a(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const g=h;if(g.data.eventId===l)switch(g.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(g.data.response);break;default:clearTimeout(u),clearTimeout(i),a(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function $e(){return window}function Fp(t){$e().location.href=t}/**
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
 */function mc(){return typeof $e().WorkerGlobalScope<"u"&&typeof $e().importScripts=="function"}async function $p(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Bp(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Hp(){return mc()?self:null}/**
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
 */const _c="firebaseLocalStorageDb",Vp=1,cr="firebaseLocalStorage",vc="fbase_key";class kn{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ar(t,e){return t.transaction([cr],e?"readwrite":"readonly").objectStore(cr)}function jp(){const t=indexedDB.deleteDatabase(_c);return new kn(t).toPromise()}function vs(){const t=indexedDB.open(_c,Vp);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(cr,{keyPath:vc})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(cr)?e(r):(r.close(),await jp(),e(await vs()))})})}async function mo(t,e,n){const r=Ar(t,!0).put({[vc]:e,value:n});return new kn(r).toPromise()}async function Wp(t,e){const n=Ar(t,!1).get(e),r=await new kn(n).toPromise();return r===void 0?null:r.value}function _o(t,e){const n=Ar(t,!0).delete(e);return new kn(n).toPromise()}const Kp=800,zp=3;class yc{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await vs(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>zp)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return mc()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Cr._getInstance(Hp()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await $p(),!this.activeServiceWorker)return;this.sender=new Up(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Bp()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await vs();return await mo(e,ar,"1"),await _o(e,ar),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>mo(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Wp(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>_o(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Ar(s,!1).getAll();return new kn(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Kp)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}yc.type="LOCAL";const Gp=yc;new Pn(3e4,6e4);/**
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
 */function qp(t,e){return e?Ke(e):(x(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Ys extends Gs{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return jt(e,this._buildIdpRequest())}_linkToIdToken(e,n){return jt(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return jt(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Jp(t){return fc(t.auth,new Ys(t),t.bypassAuthState)}function Yp(t){const{auth:e,user:n}=t;return x(n,e,"internal-error"),Rp(n,new Ys(t),t.bypassAuthState)}async function Xp(t){const{auth:e,user:n}=t;return x(n,e,"internal-error"),Sp(n,new Ys(t),t.bypassAuthState)}/**
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
 */class bc{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:c}=e;if(o){this.reject(o);return}const a={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(a))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Jp;case"linkViaPopup":case"linkViaRedirect":return Xp;case"reauthViaPopup":case"reauthViaRedirect":return Yp;default:Ae(this.auth,"internal-error")}}resolve(e){Ge(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ge(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Qp=new Pn(2e3,1e4);class Ut extends bc{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Ut.currentPopupAction&&Ut.currentPopupAction.cancel(),Ut.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return x(e,this.auth,"internal-error"),e}async onExecution(){Ge(this.filter.length===1,"Popup operations only handle one event");const e=Js();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Fe(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Fe(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ut.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Fe(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Qp.get())};e()}}Ut.currentPopupAction=null;/**
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
 */const Zp="pendingRedirect",qn=new Map;class eg extends bc{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=qn.get(this.auth._key());if(!e){try{const r=await tg(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}qn.set(this.auth._key(),e)}return this.bypassAuthState||qn.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function tg(t,e){const n=sg(e),r=rg(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function ng(t,e){qn.set(t._key(),e)}function rg(t){return Ke(t._redirectPersistence)}function sg(t){return Gn(Zp,t.config.apiKey,t.name)}async function ig(t,e,n=!1){const r=Zt(t),s=qp(r,e),o=await new eg(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const og=10*60*1e3;class ag{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!cg(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Ec(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Fe(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=og&&this.cachedEventUids.clear(),this.cachedEventUids.has(vo(e))}saveEventToCache(e){this.cachedEventUids.add(vo(e)),this.lastProcessedEventTime=Date.now()}}function vo(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Ec({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function cg(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ec(t);default:return!1}}/**
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
 */async function lg(t,e={}){return ht(t,"GET","/v1/projects",e)}/**
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
 */const ug=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,fg=/^https?/;async function dg(t){if(t.config.emulator)return;const{authorizedDomains:e}=await lg(t);for(const n of e)try{if(hg(n))return}catch{}Ae(t,"unauthorized-domain")}function hg(t){const e=_s(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!fg.test(n))return!1;if(ug.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const pg=new Pn(3e4,6e4);function yo(){const t=$e().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function gg(t){return new Promise((e,n)=>{var r,s,i;function o(){yo(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{yo(),n(Fe(t,"network-request-failed"))},timeout:pg.get()})}if(!((s=(r=$e().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=$e().gapi)===null||i===void 0)&&i.load)o();else{const c=cp("iframefcb");return $e()[c]=()=>{gapi.load?o():n(Fe(t,"network-request-failed"))},ac(`https://apis.google.com/js/api.js?onload=${c}`).catch(a=>n(a))}}).catch(e=>{throw Jn=null,e})}let Jn=null;function mg(t){return Jn=Jn||gg(t),Jn}/**
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
 */const _g=new Pn(5e3,15e3),vg="__/auth/iframe",yg="emulator/auth/iframe",bg={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Eg=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Ig(t){const e=t.config;x(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ws(e,yg):`https://${t.config.authDomain}/${vg}`,r={apiKey:e.apiKey,appName:t.name,v:An},s=Eg.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Cn(r).slice(1)}`}async function wg(t){const e=await mg(t),n=$e().gapi;return x(n,t,"internal-error"),e.open({where:document.body,url:Ig(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:bg,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Fe(t,"network-request-failed"),c=$e().setTimeout(()=>{i(o)},_g.get());function a(){$e().clearTimeout(c),s(r)}r.ping(a).then(a,()=>{i(o)})}))}/**
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
 */const Tg={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Sg=500,Rg=600,Cg="_blank",Ag="http://localhost";class bo{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Pg(t,e,n,r=Sg,s=Rg){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const a=Object.assign(Object.assign({},Tg),{width:r.toString(),height:s.toString(),top:i,left:o}),l=le().toLowerCase();n&&(c=ec(l)?Cg:n),Za(l)&&(e=e||Ag,a.scrollbars="yes");const u=Object.entries(a).reduce((g,[y,C])=>`${g}${y}=${C},`,"");if(Zh(l)&&c!=="_self")return Og(e||"",c),new bo(null);const h=window.open(e||"",c,u);x(h,t,"popup-blocked");try{h.focus()}catch{}return new bo(h)}function Og(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const kg="__/auth/handler",Ng="emulator/auth/handler",Dg=encodeURIComponent("fac");async function Eo(t,e,n,r,s,i){x(t.config.authDomain,t,"auth-domain-config-required"),x(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:An,eventId:s};if(e instanceof lc){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",vd(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(i||{}))o[u]=h}if(e instanceof On){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const c=o;for(const u of Object.keys(c))c[u]===void 0&&delete c[u];const a=await t._getAppCheckToken(),l=a?`#${Dg}=${encodeURIComponent(a)}`:"";return`${Mg(t)}?${Cn(c).slice(1)}${l}`}function Mg({config:t}){return t.emulator?Ws(t,Ng):`https://${t.authDomain}/${kg}`}/**
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
 */const zr="webStorageSupport";class Lg{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=gc,this._completeRedirectFn=ig,this._overrideRedirectResult=ng}async _openPopup(e,n,r,s){var i;Ge((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Eo(e,n,r,_s(),s);return Pg(e,o,Js())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Eo(e,n,r,_s(),s);return Fp(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Ge(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await wg(e),r=new ag(e);return n.register("authEvent",s=>(x(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(zr,{type:zr},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[zr];o!==void 0&&n(!!o),Ae(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=dg(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return ic()||zs()||Rr()}}const xg=Lg;var Io="@firebase/auth",wo="1.5.1";/**
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
 */class Ug{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){x(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Fg(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function $g(t){En(new Yt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;x(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const a={apiKey:o,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:oc(t)},l=new op(r,s,i,a);return pp(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),En(new Yt("auth-internal",e=>{const n=Zt(e.getProvider("auth").getImmediate());return(r=>new Ug(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ht(Io,wo,Fg(t)),Ht(Io,wo,"esm2017")}/**
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
 */const Bg=5*60,Hg=Fa("authIdTokenMaxAge")||Bg;let To=null;const Vg=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Hg)return;const s=n==null?void 0:n.token;To!==s&&(To=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function jg(t=vh()){const e=Va(t,"auth");if(e.isInitialized())return e.getImmediate();const n=hp(t,{popupRedirectResolver:xg,persistence:[Gp,Lp,gc]}),r=Fa("authTokenSyncURL");if(r){const i=Vg(r);kp(n,i,()=>i(n.currentUser)),Op(n,o=>i(o))}const s=ad("auth");return s&&gp(n,`http://${s}`),n}$g("Browser");const Ic=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},Xs=t=>(ml("data-v-f5e697d4"),t=t(),_l(),t),Wg={class:"login-container"},Kg={class:"login-card"},zg=Xs(()=>xe("h1",null,"Login",-1)),Gg=Xs(()=>xe("label",{for:"email"},"Email:",-1)),qg=Xs(()=>xe("label",{for:"password"},"Password:",-1)),Jg={__name:"login",setup(t){const e={apiKey:"AIzaSyAao4h1YveNXtPYsTnLwCv9-96y-aHdsFY",authDomain:"upbeat-aspect-410421.firebaseapp.com"},n=Qf(),r=ja(e),s=jg(r),i=Zr(""),o=Zr(""),c=async()=>{try{await Pp(s,i.value,o.value),n.push({name:"Home"})}catch(a){console.log(a)}};return(a,l)=>(xs(),ma("div",Wg,[xe("div",Kg,[zg,xe("form",{onSubmit:l[3]||(l[3]=ju((...u)=>a.login&&a.login(...u),["prevent"]))},[Gg,fi(xe("input",{type:"text","onUpdate:modelValue":l[0]||(l[0]=u=>i.value=u),id:"email",required:""},null,512),[[Ni,i.value]]),qg,fi(xe("input",{type:"password","onUpdate:modelValue":l[1]||(l[1]=u=>o.value=u),id:"password",required:""},null,512),[[Ni,o.value]]),xe("button",{onClick:l[2]||(l[2]=u=>c())},"Login")],32)])]))}},Yg=Ic(Jg,[["__scopeId","data-v-f5e697d4"]]),Xg={};function Qg(t,e){return xs(),ma("h2",null," home ")}const Zg=Ic(Xg,[["render",Qg]]),em=Yf({history:hf("/"),routes:[{path:"/",name:"login",component:Yg},{path:"/",name:"Home",component:Zg}]}),wc=zu(Zf);wc.use(em);wc.mount("#app");
