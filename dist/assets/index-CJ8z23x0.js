(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();const tu=!1;var Yx=Array.isArray,Zx=Array.prototype.indexOf,$x=Array.from,Dp=Object.defineProperty,Yi=Object.getOwnPropertyDescriptor,Kx=Object.prototype,Jx=Array.prototype,jx=Object.getPrototypeOf,zd=Object.isExtensible;function $r(s){return typeof s=="function"}const Hn=()=>{};function Lp(s){for(var e=0;e<s.length;e++)s[e]()}function Qx(){var s,e,t=new Promise((n,i)=>{s=n,e=i});return{promise:t,resolve:s,reject:e}}const Vt=2,Ru=4,Pu=8,eg=1<<24,Pi=16,Ii=32,Ws=64,cl=128,Xn=512,Xt=1024,pn=2048,Di=4096,ri=8192,Zi=16384,Iu=32768,Fs=65536,kd=1<<17,Up=1<<18,Ka=1<<19,Np=1<<20,Os=32768,nu=1<<21,Fp=1<<22,Ea=1<<23,Ar=Symbol("$state"),Op=Symbol("legacy props"),Bp=new class extends Error{name="StaleReactionError";message="The reaction that called `getAbortSignal()` was re-run or destroyed"};function Du(s){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function tg(s){throw new Error("https://svelte.dev/e/effect_in_teardown")}function ng(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function ig(s){throw new Error("https://svelte.dev/e/effect_orphan")}function sg(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function rg(s){throw new Error("https://svelte.dev/e/props_invalid_value")}function ag(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function og(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function cg(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function lg(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}const hg=1,ug=2,dg=4,fg=8,pg=16,mg=1,xg=2,Jt=Symbol();function gg(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}function zp(s){return s===this.v}function kp(s,e){return s!=s?e==e:s!==e||s!==null&&typeof s=="object"||typeof s=="function"}function Vp(s){return!kp(s,this.v)}let Hr=!1,_g=!1;function vg(){Hr=!0}let bt=null;function uc(s){bt=s}function Tn(s){return Gp().get(s)}function Un(s,e){return Gp().set(s,e),e}function ll(s,e=!1,t){bt={p:bt,i:!1,c:null,e:null,s,x:null,l:Hr&&!e?{s:null,u:null,$:[]}:null}}function hl(s){var e=bt,t=e.e;if(t!==null){e.e=null;for(var n of t)rm(n)}return e.i=!0,bt=e.p,{}}function ul(){return!Hr||bt!==null&&bt.l===null}function Gp(s){return bt===null&&Du(),bt.c??=new Map(yg(bt)||void 0)}function yg(s){let e=s.p;for(;e!==null;){const t=e.c;if(t!==null)return t;e=e.p}return null}let Es=[];function Hp(){var s=Es;Es=[],Lp(s)}function dl(s){if(Es.length===0&&!fa){var e=Es;queueMicrotask(()=>{e===Es&&Hp()})}Es.push(s)}function bg(){for(;Es.length>0;)Hp()}function Wp(s){var e=mt;if(e===null)return at.f|=Ea,s;if((e.f&Iu)===0){if((e.f&cl)===0)throw s;e.b.error(s)}else dc(s,e)}function dc(s,e){for(;e!==null;){if((e.f&cl)!==0)try{e.b.error(s);return}catch(t){s=t}e=e.parent}throw s}const uo=new Set;let Lt=null,In=null,Rn=[],fl=null,iu=!1,fa=!1;class ti{committed=!1;current=new Map;previous=new Map;#e=new Set;#t=new Set;#i=0;#n=0;#c=null;#r=[];#s=[];skipped_effects=new Set;is_fork=!1;is_deferred(){return this.is_fork||this.#n>0}process(e){Rn=[],this.apply();var t={parent:null,effect:null,effects:[],render_effects:[],block_effects:[]};for(const n of e)this.#a(n,t);this.is_fork||this.#h(),this.is_deferred()?(this.#o(t.effects),this.#o(t.render_effects),this.#o(t.block_effects)):(Lt=null,Vd(t.render_effects),Vd(t.effects),this.#c?.resolve()),In=null}#a(e,t){e.f^=Xt;for(var n=e.first;n!==null;){var i=n.f,r=(i&(Ii|Ws))!==0,a=r&&(i&Xt)!==0,o=a||(i&ri)!==0||this.skipped_effects.has(n);if((n.f&cl)!==0&&n.b?.is_pending()&&(t={parent:t,effect:n,effects:[],render_effects:[],block_effects:[]}),!o&&n.fn!==null){r?n.f^=Xt:(i&Ru)!==0?t.effects.push(n):Ja(n)&&((n.f&Pi)!==0&&t.block_effects.push(n),Ra(n));var c=n.first;if(c!==null){n=c;continue}}var l=n.parent;for(n=n.next;n===null&&l!==null;)l===t.effect&&(this.#o(t.effects),this.#o(t.render_effects),this.#o(t.block_effects),t=t.parent),n=l.next,l=l.parent}}#o(e){for(const t of e)((t.f&pn)!==0?this.#r:this.#s).push(t),this.#l(t.deps),qt(t,Xt)}#l(e){if(e!==null)for(const t of e)(t.f&Vt)===0||(t.f&Os)===0||(t.f^=Os,this.#l(t.deps))}capture(e,t){this.previous.has(e)||this.previous.set(e,t),(e.f&Ea)===0&&(this.current.set(e,e.v),In?.set(e,e.v))}activate(){Lt=this,this.apply()}deactivate(){Lt===this&&(Lt=null,In=null)}flush(){if(this.activate(),Rn.length>0){if(Xp(),Lt!==null&&Lt!==this)return}else this.#i===0&&this.process([]);this.deactivate()}discard(){for(const e of this.#t)e(this);this.#t.clear()}#h(){if(this.#n===0){for(const e of this.#e)e();this.#e.clear()}this.#i===0&&this.#u()}#u(){if(uo.size>1){this.previous.clear();var e=In,t=!0,n={parent:null,effect:null,effects:[],render_effects:[],block_effects:[]};for(const r of uo){if(r===this){t=!1;continue}const a=[];for(const[c,l]of this.current){if(r.current.has(c))if(t&&l!==r.current.get(c))r.current.set(c,l);else continue;a.push(c)}if(a.length===0)continue;const o=[...r.current.keys()].filter(c=>!this.current.has(c));if(o.length>0){var i=Rn;Rn=[];const c=new Set,l=new Map;for(const h of a)qp(h,o,c,l);if(Rn.length>0){Lt=r,r.apply();for(const h of Rn)r.#a(h,n);r.deactivate()}Rn=i}}Lt=null,In=e}this.committed=!0,uo.delete(this)}increment(e){this.#i+=1,e&&(this.#n+=1)}decrement(e){this.#i-=1,e&&(this.#n-=1),this.revive()}revive(){for(const e of this.#r)qt(e,pn),Bs(e);for(const e of this.#s)qt(e,Di),Bs(e);this.#r=[],this.#s=[],this.flush()}oncommit(e){this.#e.add(e)}ondiscard(e){this.#t.add(e)}settled(){return(this.#c??=Qx()).promise}static ensure(){if(Lt===null){const e=Lt=new ti;uo.add(Lt),fa||ti.enqueue(()=>{Lt===e&&e.flush()})}return Lt}static enqueue(e){dl(e)}apply(){}}function Mg(s){var e=fa;fa=!0;try{for(var t;;){if(bg(),Rn.length===0&&(Lt?.flush(),Rn.length===0))return fl=null,t;Xp()}}finally{fa=e}}function Xp(){var s=Ki;iu=!0;var e=null;try{var t=0;for(mc(!0);Rn.length>0;){var n=ti.ensure();if(t++>1e3){var i,r;Sg()}n.process(Rn),$i.clear()}}finally{iu=!1,mc(s),fl=null}}function Sg(){try{sg()}catch(s){dc(s,fl)}}let gi=null;function Vd(s){var e=s.length;if(e!==0){for(var t=0;t<e;){var n=s[t++];if((n.f&(Zi|ri))===0&&Ja(n)&&(gi=new Set,Ra(n),n.deps===null&&n.first===null&&n.nodes_start===null&&(n.teardown===null&&n.ac===null?lm(n):n.fn=null),gi?.size>0)){$i.clear();for(const i of gi){if((i.f&(Zi|ri))!==0)continue;const r=[i];let a=i.parent;for(;a!==null;)gi.has(a)&&(gi.delete(a),r.push(a)),a=a.parent;for(let o=r.length-1;o>=0;o--){const c=r[o];(c.f&(Zi|ri))===0&&Ra(c)}}gi.clear()}}gi=null}}function qp(s,e,t,n){if(!t.has(s)&&(t.add(s),s.reactions!==null))for(const i of s.reactions){const r=i.f;(r&Vt)!==0?qp(i,e,t,n):(r&(Fp|Pi))!==0&&(r&pn)===0&&Yp(i,e,n)&&(qt(i,pn),Bs(i))}}function Yp(s,e,t){const n=t.get(s);if(n!==void 0)return n;if(s.deps!==null)for(const i of s.deps){if(e.includes(i))return!0;if((i.f&Vt)!==0&&Yp(i,e,t))return t.set(i,!0),!0}return t.set(s,!1),!1}function Bs(s){for(var e=fl=s;e.parent!==null;){e=e.parent;var t=e.f;if(iu&&e===mt&&(t&Pi)!==0&&(t&Up)===0)return;if((t&(Ws|Ii))!==0){if((t&Xt)===0)return;e.f^=Xt}}Rn.push(e)}function Zp(s){let e=0,t=pl(0),n;return()=>{Pr()&&(ye(t),am(()=>(e===0&&(n=is(()=>s(()=>pa(t)))),e+=1,()=>{dl(()=>{e-=1,e===0&&(n?.(),n=void 0,pa(t))})})))}}var wg=Fs|Ka|cl;function Tg(s,e,t){new Eg(s,e,t)}class Eg{parent;#e=!1;#t;#i=null;#n;#c;#r;#s=null;#a=null;#o=null;#l=null;#h=null;#u=0;#d=0;#p=!1;#f=null;#v=Zp(()=>(this.#f=pl(this.#u),()=>{this.#f=null}));constructor(e,t,n){this.#t=e,this.#n=t,this.#c=n,this.parent=mt.b,this.#e=!!this.#n.pending,this.#r=Nu(()=>{mt.b=this;{var i=this.#g();try{this.#s=_i(()=>n(i))}catch(r){this.error(r)}this.#d>0?this.#x():this.#e=!1}return()=>{this.#h?.remove()}},wg)}#y(){try{this.#s=_i(()=>this.#c(this.#t))}catch(e){this.error(e)}this.#e=!1}#b(){const e=this.#n.pending;e&&(this.#a=_i(()=>e(this.#t)),ti.enqueue(()=>{var t=this.#g();this.#s=this.#m(()=>(ti.ensure(),_i(()=>this.#c(t)))),this.#d>0?this.#x():(ma(this.#a,()=>{this.#a=null}),this.#e=!1)}))}#g(){var e=this.#t;return this.#e&&(this.#h=Aa(),this.#t.before(this.#h),e=this.#h),e}is_pending(){return this.#e||!!this.parent&&this.parent.is_pending()}has_pending_snippet(){return!!this.#n.pending}#m(e){var t=mt,n=at,i=bt;Ji(this.#r),Dn(this.#r),uc(this.#r.ctx);try{return e()}catch(r){return Wp(r),null}finally{Ji(t),Dn(n),uc(i)}}#x(){const e=this.#n.pending;this.#s!==null&&(this.#l=document.createDocumentFragment(),this.#l.append(this.#h),dm(this.#s,this.#l)),this.#a===null&&(this.#a=_i(()=>e(this.#t)))}#_(e){if(!this.has_pending_snippet()){this.parent&&this.parent.#_(e);return}this.#d+=e,this.#d===0&&(this.#e=!1,this.#a&&ma(this.#a,()=>{this.#a=null}),this.#l&&(this.#t.before(this.#l),this.#l=null))}update_pending_count(e){this.#_(e),this.#u+=e,this.#f&&jp(this.#f,this.#u)}get_effect_pending(){return this.#v(),ye(this.#f)}error(e){var t=this.#n.onerror;let n=this.#n.failed;if(this.#p||!t&&!n)throw e;this.#s&&(Mn(this.#s),this.#s=null),this.#a&&(Mn(this.#a),this.#a=null),this.#o&&(Mn(this.#o),this.#o=null);var i=!1,r=!1;const a=()=>{if(i){gg();return}i=!0,r&&lg(),ti.ensure(),this.#u=0,this.#o!==null&&ma(this.#o,()=>{this.#o=null}),this.#e=this.has_pending_snippet(),this.#s=this.#m(()=>(this.#p=!1,_i(()=>this.#c(this.#t)))),this.#d>0?this.#x():this.#e=!1};var o=at;try{Dn(null),r=!0,t?.(e,a),r=!1}catch(c){dc(c,this.#r&&this.#r.parent)}finally{Dn(o)}n&&dl(()=>{this.#o=this.#m(()=>{ti.ensure(),this.#p=!0;try{return _i(()=>{n(this.#t,()=>e,()=>a)})}catch(c){return dc(c,this.#r.parent),null}finally{this.#p=!1}})})}}function Lu(s){var e=Vt|pn,t=at!==null&&(at.f&Vt)!==0?at:null;return mt!==null&&(mt.f|=Ka),{ctx:bt,deps:null,effects:null,equals:zp,f:e,fn:s,reactions:null,rv:0,v:Jt,wv:0,parent:t??mt,ac:null}}function qn(s){const e=Lu(s);return fm(e),e}function Ag(s){const e=Lu(s);return e.equals=Vp,e}function $p(s){var e=s.effects;if(e!==null){s.effects=null;for(var t=0;t<e.length;t+=1)Mn(e[t])}}function Cg(s){for(var e=s.parent;e!==null;){if((e.f&Vt)===0)return(e.f&Zi)===0?e:null;e=e.parent}return null}function Uu(s){var e,t=mt;Ji(Cg(s));try{s.f&=~Os,$p(s),e=gm(s)}finally{Ji(t)}return e}function Kp(s){var e=Uu(s);if(s.equals(e)||(Lt?.is_fork||(s.v=e),s.wv=mm()),!Xs)if(In!==null)(Pr()||Lt?.is_fork)&&In.set(s,e);else{var t=(s.f&Xn)===0?Di:Xt;qt(s,t)}}let su=new Set;const $i=new Map;let Jp=!1;function pl(s,e){var t={f:0,v:s,reactions:null,equals:zp,rv:0,wv:0};return t}function jn(s,e){const t=pl(s);return fm(t),t}function Rg(s,e=!1,t=!0){const n=pl(s);return e||(n.equals=Vp),Hr&&t&&bt!==null&&bt.l!==null&&(bt.l.s??=[]).push(n),n}function kn(s,e,t=!1){at!==null&&(!ni||(at.f&kd)!==0)&&ul()&&(at.f&(Vt|Pi|Fp|kd))!==0&&!Si?.includes(s)&&cg();let n=t?Mr(e):e;return jp(s,n)}function jp(s,e){if(!s.equals(e)){var t=s.v;Xs?$i.set(s,e):$i.set(s,t),s.v=e;var n=ti.ensure();n.capture(s,t),(s.f&Vt)!==0&&((s.f&pn)!==0&&Uu(s),qt(s,(s.f&Xn)!==0?Xt:Di)),s.wv=mm(),Qp(s,pn),ul()&&mt!==null&&(mt.f&Xt)!==0&&(mt.f&(Ii|Ws))===0&&(Cn===null?Vg([s]):Cn.push(s)),!n.is_fork&&su.size>0&&!Jp&&Pg()}return e}function Pg(){Jp=!1;var s=Ki;mc(!0);const e=Array.from(su);try{for(const t of e)(t.f&Xt)!==0&&qt(t,Di),Ja(t)&&Ra(t)}finally{mc(s)}su.clear()}function pa(s){kn(s,s.v+1)}function Qp(s,e){var t=s.reactions;if(t!==null)for(var n=ul(),i=t.length,r=0;r<i;r++){var a=t[r],o=a.f;if(!(!n&&a===mt)){var c=(o&pn)===0;if(c&&qt(a,e),(o&Vt)!==0){var l=a;In?.delete(l),(o&Os)===0&&(o&Xn&&(a.f|=Os),Qp(l,Di))}else c&&((o&Pi)!==0&&gi!==null&&gi.add(a),Bs(a))}}}function Mr(s){if(typeof s!="object"||s===null||Ar in s)return s;const e=jx(s);if(e!==Kx&&e!==Jx)return s;var t=new Map,n=Yx(s),i=jn(0),r=Is,a=o=>{if(Is===r)return o();var c=at,l=Is;Dn(null),Wd(r);var h=o();return Dn(c),Wd(l),h};return n&&t.set("length",jn(s.length)),new Proxy(s,{defineProperty(o,c,l){(!("value"in l)||l.configurable===!1||l.enumerable===!1||l.writable===!1)&&ag();var h=t.get(c);return h===void 0?h=a(()=>{var u=jn(l.value);return t.set(c,u),u}):kn(h,l.value,!0),!0},deleteProperty(o,c){var l=t.get(c);if(l===void 0){if(c in o){const h=a(()=>jn(Jt));t.set(c,h),pa(i)}}else kn(l,Jt),pa(i);return!0},get(o,c,l){if(c===Ar)return s;var h=t.get(c),u=c in o;if(h===void 0&&(!u||Yi(o,c)?.writable)&&(h=a(()=>{var f=Mr(u?o[c]:Jt),p=jn(f);return p}),t.set(c,h)),h!==void 0){var d=ye(h);return d===Jt?void 0:d}return Reflect.get(o,c,l)},getOwnPropertyDescriptor(o,c){var l=Reflect.getOwnPropertyDescriptor(o,c);if(l&&"value"in l){var h=t.get(c);h&&(l.value=ye(h))}else if(l===void 0){var u=t.get(c),d=u?.v;if(u!==void 0&&d!==Jt)return{enumerable:!0,configurable:!0,value:d,writable:!0}}return l},has(o,c){if(c===Ar)return!0;var l=t.get(c),h=l!==void 0&&l.v!==Jt||Reflect.has(o,c);if(l!==void 0||mt!==null&&(!h||Yi(o,c)?.writable)){l===void 0&&(l=a(()=>{var d=h?Mr(o[c]):Jt,f=jn(d);return f}),t.set(c,l));var u=ye(l);if(u===Jt)return!1}return h},set(o,c,l,h){var u=t.get(c),d=c in o;if(n&&c==="length")for(var f=l;f<u.v;f+=1){var p=t.get(f+"");p!==void 0?kn(p,Jt):f in o&&(p=a(()=>jn(Jt)),t.set(f+"",p))}if(u===void 0)(!d||Yi(o,c)?.writable)&&(u=a(()=>jn(void 0)),kn(u,Mr(l)),t.set(c,u));else{d=u.v!==Jt;var g=a(()=>Mr(l));kn(u,g)}var x=Reflect.getOwnPropertyDescriptor(o,c);if(x?.set&&x.set.call(h,l),!d){if(n&&typeof c=="string"){var m=t.get("length"),v=Number(c);Number.isInteger(v)&&v>=m.v&&kn(m,v+1)}pa(i)}return!0},ownKeys(o){ye(i);var c=Reflect.ownKeys(o).filter(u=>{var d=t.get(u);return d===void 0||d.v!==Jt});for(var[l,h]of t)h.v!==Jt&&!(l in o)&&c.push(l);return c},setPrototypeOf(){og()}})}var Gd,em,tm,nm;function Ig(){if(Gd===void 0){Gd=window,em=/Firefox/.test(navigator.userAgent);var s=Element.prototype,e=Node.prototype,t=Text.prototype;tm=Yi(e,"firstChild").get,nm=Yi(e,"nextSibling").get,zd(s)&&(s.__click=void 0,s.__className=void 0,s.__attributes=null,s.__style=void 0,s.__e=void 0),zd(t)&&(t.__t=void 0)}}function Aa(s=""){return document.createTextNode(s)}function fc(s){return tm.call(s)}function ml(s){return nm.call(s)}function pc(s,e){return fc(s)}function Rr(s,e=!1){{var t=fc(s);return t instanceof Comment&&t.data===""?ml(t):t}}function br(s,e=1,t=!1){let n=s;for(;e--;)n=ml(n);return n}function Dg(){return!1}function im(s){var e=at,t=mt;Dn(null),Ji(null);try{return s()}finally{Dn(e),Ji(t)}}function sm(s){mt===null&&(at===null&&ig(),ng()),Xs&&tg()}function Lg(s,e){var t=e.last;t===null?e.last=e.first=s:(t.next=s,s.prev=t,e.last=s)}function ns(s,e,t){var n=mt;n!==null&&(n.f&ri)!==0&&(s|=ri);var i={ctx:bt,deps:null,nodes_start:null,nodes_end:null,f:s|pn|Xn,first:null,fn:e,last:null,next:null,parent:n,b:n&&n.b,prev:null,teardown:null,transitions:null,wv:0,ac:null};if(t)try{Ra(i),i.f|=Iu}catch(o){throw Mn(i),o}else e!==null&&Bs(i);var r=i;if(t&&r.deps===null&&r.teardown===null&&r.nodes_start===null&&r.first===r.last&&(r.f&Ka)===0&&(r=r.first,(s&Pi)!==0&&(s&Fs)!==0&&r!==null&&(r.f|=Fs)),r!==null&&(r.parent=n,n!==null&&Lg(r,n),at!==null&&(at.f&Vt)!==0&&(s&Ws)===0)){var a=at;(a.effects??=[]).push(r)}return i}function Pr(){return at!==null&&!ni}function Ug(s){const e=ns(Pu,null,!1);return qt(e,Xt),e.teardown=s,e}function Ir(s){sm();var e=mt.f,t=!at&&(e&Ii)!==0&&(e&Iu)===0;if(t){var n=bt;(n.e??=[]).push(s)}else return rm(s)}function rm(s){return ns(Ru|Np,s,!1)}function zt(s){return sm(),ns(Pu|Np,s,!0)}function Ng(s){ti.ensure();const e=ns(Ws|Ka,s,!0);return(t={})=>new Promise(n=>{t.outro?ma(e,()=>{Mn(e),n(void 0)}):(Mn(e),n(void 0))})}function Fg(s){return ns(Ru,s,!1)}function am(s,e=0){return ns(Pu|e,s,!0)}function Nu(s,e=0){var t=ns(Pi|e,s,!0);return t}function _i(s){return ns(Ii|Ka,s,!0)}function om(s){var e=s.teardown;if(e!==null){const t=Xs,n=at;Hd(!0),Dn(null);try{e.call(null)}finally{Hd(t),Dn(n)}}}function cm(s,e=!1){var t=s.first;for(s.first=s.last=null;t!==null;){const i=t.ac;i!==null&&im(()=>{i.abort(Bp)});var n=t.next;(t.f&Ws)!==0?t.parent=null:Mn(t,e),t=n}}function Og(s){for(var e=s.first;e!==null;){var t=e.next;(e.f&Ii)===0&&Mn(e),e=t}}function Mn(s,e=!0){var t=!1;(e||(s.f&Up)!==0)&&s.nodes_start!==null&&s.nodes_end!==null&&(Bg(s.nodes_start,s.nodes_end),t=!0),cm(s,e&&!t),xc(s,0),qt(s,Zi);var n=s.transitions;if(n!==null)for(const r of n)r.stop();om(s);var i=s.parent;i!==null&&i.first!==null&&lm(s),s.next=s.prev=s.teardown=s.ctx=s.deps=s.fn=s.nodes_start=s.nodes_end=s.ac=null}function Bg(s,e){for(;s!==null;){var t=s===e?null:ml(s);s.remove(),s=t}}function lm(s){var e=s.parent,t=s.prev,n=s.next;t!==null&&(t.next=n),n!==null&&(n.prev=t),e!==null&&(e.first===s&&(e.first=n),e.last===s&&(e.last=t))}function ma(s,e,t=!0){var n=[];hm(s,n,!0),zg(n,()=>{t&&Mn(s),e&&e()})}function zg(s,e){var t=s.length;if(t>0){var n=()=>--t||e();for(var i of s)i.out(n)}else e()}function hm(s,e,t){if((s.f&ri)===0){if(s.f^=ri,s.transitions!==null)for(const a of s.transitions)(a.is_global||t)&&e.push(a);for(var n=s.first;n!==null;){var i=n.next,r=(n.f&Fs)!==0||(n.f&Ii)!==0&&(s.f&Pi)!==0;hm(n,e,r?t:!1),n=i}}}function kg(s){um(s,!0)}function um(s,e){if((s.f&ri)!==0){s.f^=ri,(s.f&Xt)===0&&(qt(s,pn),Bs(s));for(var t=s.first;t!==null;){var n=t.next,i=(t.f&Fs)!==0||(t.f&Ii)!==0;um(t,i?e:!1),t=n}if(s.transitions!==null)for(const r of s.transitions)(r.is_global||e)&&r.in()}}function dm(s,e){for(var t=s.nodes_start,n=s.nodes_end;t!==null;){var i=t===n?null:ml(t);e.append(t),t=i}}let Ki=!1;function mc(s){Ki=s}let Xs=!1;function Hd(s){Xs=s}let at=null,ni=!1;function Dn(s){at=s}let mt=null;function Ji(s){mt=s}let Si=null;function fm(s){at!==null&&(Si===null?Si=[s]:Si.push(s))}let Qt=null,yn=0,Cn=null;function Vg(s){Cn=s}let pm=1,Ca=0,Is=Ca;function Wd(s){Is=s}function mm(){return++pm}function Ja(s){var e=s.f;if((e&pn)!==0)return!0;if(e&Vt&&(s.f&=~Os),(e&Di)!==0){var t=s.deps;if(t!==null)for(var n=t.length,i=0;i<n;i++){var r=t[i];if(Ja(r)&&Kp(r),r.wv>s.wv)return!0}(e&Xn)!==0&&In===null&&qt(s,Xt)}return!1}function xm(s,e,t=!0){var n=s.reactions;if(n!==null&&!Si?.includes(s))for(var i=0;i<n.length;i++){var r=n[i];(r.f&Vt)!==0?xm(r,e,!1):e===r&&(t?qt(r,pn):(r.f&Xt)!==0&&qt(r,Di),Bs(r))}}function gm(s){var e=Qt,t=yn,n=Cn,i=at,r=Si,a=bt,o=ni,c=Is,l=s.f;Qt=null,yn=0,Cn=null,at=(l&(Ii|Ws))===0?s:null,Si=null,uc(s.ctx),ni=!1,Is=++Ca,s.ac!==null&&(im(()=>{s.ac.abort(Bp)}),s.ac=null);try{s.f|=nu;var h=s.fn,u=h(),d=s.deps;if(Qt!==null){var f;if(xc(s,yn),d!==null&&yn>0)for(d.length=yn+Qt.length,f=0;f<Qt.length;f++)d[yn+f]=Qt[f];else s.deps=d=Qt;if(Ki&&Pr()&&(s.f&Xn)!==0)for(f=yn;f<d.length;f++)(d[f].reactions??=[]).push(s)}else d!==null&&yn<d.length&&(xc(s,yn),d.length=yn);if(ul()&&Cn!==null&&!ni&&d!==null&&(s.f&(Vt|Di|pn))===0)for(f=0;f<Cn.length;f++)xm(Cn[f],s);return i!==null&&i!==s&&(Ca++,Cn!==null&&(n===null?n=Cn:n.push(...Cn))),(s.f&Ea)!==0&&(s.f^=Ea),u}catch(p){return Wp(p)}finally{s.f^=nu,Qt=e,yn=t,Cn=n,at=i,Si=r,uc(a),ni=o,Is=c}}function Gg(s,e){let t=e.reactions;if(t!==null){var n=Zx.call(t,s);if(n!==-1){var i=t.length-1;i===0?t=e.reactions=null:(t[n]=t[i],t.pop())}}t===null&&(e.f&Vt)!==0&&(Qt===null||!Qt.includes(e))&&(qt(e,Di),(e.f&Xn)!==0&&(e.f^=Xn,e.f&=~Os),$p(e),xc(e,0))}function xc(s,e){var t=s.deps;if(t!==null)for(var n=e;n<t.length;n++)Gg(s,t[n])}function Ra(s){var e=s.f;if((e&Zi)===0){qt(s,Xt);var t=mt,n=Ki;mt=s,Ki=!0;try{(e&(Pi|eg))!==0?Og(s):cm(s),om(s);var i=gm(s);s.teardown=typeof i=="function"?i:null,s.wv=pm;var r;tu&&_g&&(s.f&pn)!==0&&s.deps}finally{Ki=n,mt=t}}}async function Hg(){await Promise.resolve(),Mg()}function ye(s){var e=s.f,t=(e&Vt)!==0;if(at!==null&&!ni){var n=mt!==null&&(mt.f&Zi)!==0;if(!n&&!Si?.includes(s)){var i=at.deps;if((at.f&nu)!==0)s.rv<Ca&&(s.rv=Ca,Qt===null&&i!==null&&i[yn]===s?yn++:Qt===null?Qt=[s]:Qt.includes(s)||Qt.push(s));else{(at.deps??=[]).push(s);var r=s.reactions;r===null?s.reactions=[at]:r.includes(at)||r.push(at)}}}if(Xs){if($i.has(s))return $i.get(s);if(t){var a=s,o=a.v;return((a.f&Xt)===0&&a.reactions!==null||vm(a))&&(o=Uu(a)),$i.set(a,o),o}}else t&&(!In?.has(s)||Lt?.is_fork&&!Pr())&&(a=s,Ja(a)&&Kp(a),Ki&&Pr()&&(a.f&Xn)===0&&_m(a));if(In?.has(s))return In.get(s);if((s.f&Ea)!==0)throw s.v;return s.v}function _m(s){if(s.deps!==null){s.f^=Xn;for(const e of s.deps)(e.reactions??=[]).push(s),(e.f&Vt)!==0&&(e.f&Xn)===0&&_m(e)}}function vm(s){if(s.v===Jt)return!0;if(s.deps===null)return!1;for(const e of s.deps)if($i.has(e)||(e.f&Vt)!==0&&vm(e))return!0;return!1}function is(s){var e=ni;try{return ni=!0,s()}finally{ni=e}}const Wg=-7169;function qt(s,e){s.f=s.f&Wg|e}const Xg=["touchstart","touchmove"];function qg(s){return Xg.includes(s)}const Yg=new Set,Xd=new Set;let qd=null;function fo(s){var e=this,t=e.ownerDocument,n=s.type,i=s.composedPath?.()||[],r=i[0]||s.target;qd=s;var a=0,o=qd===s&&s.__root;if(o){var c=i.indexOf(o);if(c!==-1&&(e===document||e===window)){s.__root=e;return}var l=i.indexOf(e);if(l===-1)return;c<=l&&(a=c)}if(r=i[a]||s.target,r!==e){Dp(s,"currentTarget",{configurable:!0,get(){return r||t}});var h=at,u=mt;Dn(null),Ji(null);try{for(var d,f=[];r!==null;){var p=r.assignedSlot||r.parentNode||r.host||null;try{var g=r["__"+n];g!=null&&(!r.disabled||s.target===r)&&g.call(r,s)}catch(x){d?f.push(x):d=x}if(s.cancelBubble||p===e||p===null)break;r=p}if(d){for(let x of f)queueMicrotask(()=>{throw x});throw d}}finally{s.__root=e,delete s.currentTarget,Dn(h),Ji(u)}}}function Zg(s){var e=document.createElement("template");return e.innerHTML=s.replaceAll("<!>","<!---->"),e.content}function ru(s,e){var t=mt;t.nodes_start===null&&(t.nodes_start=s,t.nodes_end=e)}function xl(s,e){var t=(e&mg)!==0,n=(e&xg)!==0,i,r=!s.startsWith("<!>");return()=>{i===void 0&&(i=Zg(r?s:"<!>"+s),t||(i=fc(i)));var a=n||em?document.importNode(i,!0):i.cloneNode(!0);if(t){var o=fc(a),c=a.lastChild;ru(o,c)}else ru(a,a);return a}}function gl(){var s=document.createDocumentFragment(),e=document.createComment(""),t=Aa();return s.append(e,t),ru(e,t),s}function ji(s,e){s!==null&&s.before(e)}function $g(s,e){return Kg(s,e)}const js=new Map;function Kg(s,{target:e,anchor:t,props:n={},events:i,context:r,intro:a=!0}){Ig();var o=new Set,c=u=>{for(var d=0;d<u.length;d++){var f=u[d];if(!o.has(f)){o.add(f);var p=qg(f);e.addEventListener(f,fo,{passive:p});var g=js.get(f);g===void 0?(document.addEventListener(f,fo,{passive:p}),js.set(f,1)):js.set(f,g+1)}}};c($x(Yg)),Xd.add(c);var l=void 0,h=Ng(()=>{var u=t??e.appendChild(Aa());return Tg(u,{pending:()=>{}},d=>{if(r){ll({});var f=bt;f.c=r}i&&(n.$$events=i),l=s(d,n)||{},r&&hl()}),()=>{for(var d of o){e.removeEventListener(d,fo);var f=js.get(d);--f===0?(document.removeEventListener(d,fo),js.delete(d)):js.set(d,f)}Xd.delete(c),u!==t&&u.parentNode?.removeChild(u)}});return Jg.set(l,h),l}let Jg=new WeakMap;class ym{anchor;#e=new Map;#t=new Map;#i=new Map;#n=new Set;#c=!0;constructor(e,t=!0){this.anchor=e,this.#c=t}#r=()=>{var e=Lt;if(this.#e.has(e)){var t=this.#e.get(e),n=this.#t.get(t);if(n)kg(n),this.#n.delete(t);else{var i=this.#i.get(t);i&&(this.#t.set(t,i.effect),this.#i.delete(t),i.fragment.lastChild.remove(),this.anchor.before(i.fragment),n=i.effect)}for(const[r,a]of this.#e){if(this.#e.delete(r),r===e)break;const o=this.#i.get(a);o&&(Mn(o.effect),this.#i.delete(a))}for(const[r,a]of this.#t){if(r===t||this.#n.has(r))continue;const o=()=>{if(Array.from(this.#e.values()).includes(r)){var l=document.createDocumentFragment();dm(a,l),l.append(Aa()),this.#i.set(r,{effect:a,fragment:l})}else Mn(a);this.#n.delete(r),this.#t.delete(r)};this.#c||!n?(this.#n.add(r),ma(a,o,!1)):o()}}};#s=e=>{this.#e.delete(e);const t=Array.from(this.#e.values());for(const[n,i]of this.#i)t.includes(n)||(Mn(i.effect),this.#i.delete(n))};ensure(e,t){var n=Lt,i=Dg();if(t&&!this.#t.has(e)&&!this.#i.has(e))if(i){var r=document.createDocumentFragment(),a=Aa();r.append(a),this.#i.set(e,{effect:_i(()=>t(a)),fragment:r})}else this.#t.set(e,_i(()=>t(this.anchor)));if(this.#e.set(n,e),i){for(const[o,c]of this.#t)o===e?n.skipped_effects.delete(c):n.skipped_effects.add(c);for(const[o,c]of this.#i)o===e?n.skipped_effects.delete(c.effect):n.skipped_effects.add(c.effect);n.oncommit(this.#r),n.ondiscard(this.#s)}else this.#r()}}function jg(s,e,t=!1){var n=new ym(s),i=t?Fs:0;function r(a,o){n.ensure(a,o)}Nu(()=>{var a=!1;e((o,c=!0)=>{a=!0,r(c,o)}),a||r(!1,null)},i)}function _l(s,e,...t){var n=new ym(s);Nu(()=>{const i=e()??null;n.ensure(i,i&&(r=>i(r,...t)))},Fs)}function Yd(s,e){return s===e||s?.[Ar]===e}function Zd(s={},e,t,n){return Fg(()=>{var i,r;return am(()=>{i=r,r=[],is(()=>{s!==t(...r)&&(e(s,...r),i&&Yd(t(...i),s)&&e(null,...i))})}),()=>{dl(()=>{r&&Yd(t(...r),s)&&e(null,...r)})}}),s}function Fu(s,e,t){if(s==null)return e(void 0),t&&t(void 0),Hn;const n=is(()=>s.subscribe(e,t));return n.unsubscribe?()=>n.unsubscribe():n}const Qs=[];function Ou(s,e){return{subscribe:Dr(s,e).subscribe}}function Dr(s,e=Hn){let t=null;const n=new Set;function i(o){if(kp(s,o)&&(s=o,t)){const c=!Qs.length;for(const l of n)l[1](),Qs.push(l,s);if(c){for(let l=0;l<Qs.length;l+=2)Qs[l][0](Qs[l+1]);Qs.length=0}}}function r(o){i(o(s))}function a(o,c=Hn){const l=[o,c];return n.add(l),n.size===1&&(t=e(i,r)||Hn),o(s),()=>{n.delete(l),n.size===0&&t&&(t(),t=null)}}return{set:i,update:r,subscribe:a}}function Bu(s,e,t){const n=!Array.isArray(s),i=n?[s]:s;if(!i.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value");const r=e.length<2;return Ou(t,(a,o)=>{let c=!1;const l=[];let h=0,u=Hn;const d=()=>{if(h)return;u();const p=e(n?l[0]:l,a,o);r?a(p):u=typeof p=="function"?p:Hn},f=i.map((p,g)=>Fu(p,x=>{l[g]=x,h&=~(1<<g),c&&d()},()=>{h|=1<<g}));return c=!0,d(),function(){Lp(f),u(),c=!1}})}function bm(s){let e;return Fu(s,t=>e=t)(),e}let po=!1,au=Symbol();function Qg(s,e,t){const n=t[e]??={store:null,source:Rg(void 0),unsubscribe:Hn};if(n.store!==s&&!(au in t))if(n.unsubscribe(),n.store=s??null,s==null)n.source.v=void 0,n.unsubscribe=Hn;else{var i=!0;n.unsubscribe=Fu(s,r=>{i?n.source.v=r:kn(n.source,r)}),i=!1}return s&&au in t?bm(s):ye(n.source)}function e_(){const s={};function e(){Ug(()=>{for(var t in s)s[t].unsubscribe();Dp(s,au,{enumerable:!1,value:!0})})}return[s,e]}function t_(s){var e=po;try{return po=!1,[s(),po]}finally{po=e}}const n_={get(s,e){if(!s.exclude.includes(e))return s.props[e]},set(s,e){return!1},getOwnPropertyDescriptor(s,e){if(!s.exclude.includes(e)&&e in s.props)return{enumerable:!0,configurable:!0,value:s.props[e]}},has(s,e){return s.exclude.includes(e)?!1:e in s.props},ownKeys(s){return Reflect.ownKeys(s.props).filter(e=>!s.exclude.includes(e))}};function vl(s,e,t){return new Proxy({props:s,exclude:e},n_)}const i_={get(s,e){let t=s.props.length;for(;t--;){let n=s.props[t];if($r(n)&&(n=n()),typeof n=="object"&&n!==null&&e in n)return n[e]}},set(s,e,t){let n=s.props.length;for(;n--;){let i=s.props[n];$r(i)&&(i=i());const r=Yi(i,e);if(r&&r.set)return r.set(t),!0}return!1},getOwnPropertyDescriptor(s,e){let t=s.props.length;for(;t--;){let n=s.props[t];if($r(n)&&(n=n()),typeof n=="object"&&n!==null&&e in n){const i=Yi(n,e);return i&&!i.configurable&&(i.configurable=!0),i}}},has(s,e){if(e===Ar||e===Op)return!1;for(let t of s.props)if($r(t)&&(t=t()),t!=null&&e in t)return!0;return!1},ownKeys(s){const e=[];for(let t of s.props)if($r(t)&&(t=t()),!!t){for(const n in t)e.includes(n)||e.push(n);for(const n of Object.getOwnPropertySymbols(t))e.includes(n)||e.push(n)}return e}};function Mm(...s){return new Proxy({props:s},i_)}function la(s,e,t,n){var i=!Hr||(t&ug)!==0,r=(t&fg)!==0,a=(t&pg)!==0,o=n,c=!0,l=()=>(c&&(c=!1,o=a?is(n):n),o),h;if(r){var u=Ar in s||Op in s;h=Yi(s,e)?.set??(u&&e in s?_=>s[e]=_:void 0)}var d,f=!1;r?[d,f]=t_(()=>s[e]):d=s[e],d===void 0&&n!==void 0&&(d=l(),h&&(i&&rg(),h(d)));var p;if(i?p=()=>{var _=s[e];return _===void 0?l():(c=!0,_)}:p=()=>{var _=s[e];return _!==void 0&&(o=void 0),_===void 0?o:_},i&&(t&dg)===0)return p;if(h){var g=s.$$legacy;return(function(_,y){return arguments.length>0?((!i||!y||g||f)&&h(y?p():_),_):p()})}var x=!1,m=((t&hg)!==0?Lu:Ag)(()=>(x=!1,p()));r&&ye(m);var v=mt;return(function(_,y){if(arguments.length>0){const A=y?ye(m):i&&r?Mr(_):_;return kn(m,A),x=!0,o!==void 0&&(o=A),_}return Xs&&x||(v.f&Zi)!==0?m.v:ye(m)})}function Sm(s){bt===null&&Du(),Hr&&bt.l!==null?s_(bt).m.push(s):Ir(()=>{const e=is(s);if(typeof e=="function")return e})}function ja(s){bt===null&&Du(),Sm(()=>()=>is(s))}function s_(s){var e=s.l;return e.u??={a:[],b:[],m:[]}}const r_="5";typeof window<"u"&&((window.__svelte??={}).v??=new Set).add(r_);vg();const $d=(s,e)=>{if(s===e)return!0;if(!s||!e)return!1;const t=s.length;if(e.length!==t)return!1;for(let n=0;n<t;n++)if(s[n]!==e[n])return!1;return!0},a_=()=>{const s=[],n={items:s,remember:(i,r)=>{for(let o=0;o<s.length;o++){const c=s[o];if($d(r,c.keys)&&c.promise)return c.promise}const a={promise:i(),keys:r};return s.push(a),a.promise},clear:i=>{for(let r=0;r<s.length;r++){const a=s[r];if($d(i,a.keys)){s.splice(r,1);return}}}};return Un("threlte-cache",n),n};const yl="181",Ds={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},As={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},wm=0,ou=1,Tm=2,o_=3,c_=0,zu=1,xa=2,Qn=3,Ei=0,nn=1,ei=2,ai=0,Ls=1,cu=2,lu=3,hu=4,Em=5,Wi=100,Am=101,Cm=102,Rm=103,Pm=104,Im=200,Dm=201,Lm=202,Um=203,gc=204,_c=205,Nm=206,Fm=207,Om=208,Bm=209,zm=210,km=211,Vm=212,Gm=213,Hm=214,vc=0,yc=1,bc=2,zs=3,Mc=4,Sc=5,wc=6,Tc=7,Qa=0,Wm=1,Xm=2,wi=0,qm=1,Ym=2,Zm=3,$m=4,Km=5,Ec=6,Jm=7,uu="attached",jm="detached",bl=300,Ai=301,Qi=302,Pa=303,Ia=304,Wr=306,Da=1e3,dn=1001,La=1002,kt=1003,ku=1004,l_=1004,Sr=1005,h_=1005,At=1006,ga=1007,u_=1007,ii=1008,d_=1008,Yn=1009,Vu=1010,Gu=1011,Lr=1012,Ml=1013,Ci=1014,fn=1015,qs=1016,Sl=1017,wl=1018,Ur=1020,Hu=35902,Wu=35899,Xu=1021,qu=1022,tn=1023,Nr=1026,Fr=1027,Tl=1028,eo=1029,El=1030,Al=1031,f_=1032,Cl=1033,_a=33776,va=33777,ya=33778,ba=33779,Ac=35840,Cc=35841,Rc=35842,Pc=35843,Ic=36196,Dc=37492,Lc=37496,Uc=37808,Nc=37809,Fc=37810,Oc=37811,Bc=37812,zc=37813,kc=37814,Vc=37815,Gc=37816,Hc=37817,Wc=37818,Xc=37819,qc=37820,Yc=37821,Zc=36492,$c=36494,Kc=36495,Jc=36283,jc=36284,Qc=36285,el=36286,Qm=2200,e0=2201,t0=2202,Ua=2300,tl=2301,cc=2302,Cs=2400,Rs=2401,Na=2402,Rl=2500,Yu=2501,p_=0,m_=1,x_=2,n0=3200,i0=3201,g_=3202,__=3203,ss=0,s0=1,bi="",hn="srgb",ks="srgb-linear",Fa="linear",ct="srgb",v_=0,ws=7680,y_=7681,b_=7682,M_=7683,S_=34055,w_=34056,T_=5386,E_=512,A_=513,C_=514,R_=515,P_=516,I_=517,D_=518,du=519,r0=512,a0=513,o0=514,Zu=515,c0=516,l0=517,h0=518,u0=519,Oa=35044,L_=35048,U_=35040,N_=35045,F_=35049,O_=35041,B_=35046,z_=35050,k_=35042,V_="100",fu="300 es",bn=2e3,Or=2001,G_={COMPUTE:"compute",RENDER:"render"},H_={PERSPECTIVE:"perspective",LINEAR:"linear",FLAT:"flat"},W_={NORMAL:"normal",CENTROID:"centroid",SAMPLE:"sample",FIRST:"first",EITHER:"either"};function d0(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}const X_={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function wr(s,e){return new X_[s](e)}function Ba(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function f0(){const s=Ba("canvas");return s.style.display="block",s}const Kd={};let es=null;function q_(s){es=s}function Y_(){return es}function za(...s){const e="THREE."+s.shift();es?es("log",e,...s):console.log(e,...s)}function me(...s){const e="THREE."+s.shift();es?es("warn",e,...s):console.warn(e,...s)}function We(...s){const e="THREE."+s.shift();es?es("error",e,...s):console.error(e,...s)}function Br(...s){const e=s.join(" ");e in Kd||(Kd[e]=!0,me(...s))}function Z_(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}class ci{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}}const Gt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Jd=1234567;const Us=Math.PI/180,zr=180/Math.PI;function Sn(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Gt[s&255]+Gt[s>>8&255]+Gt[s>>16&255]+Gt[s>>24&255]+"-"+Gt[e&255]+Gt[e>>8&255]+"-"+Gt[e>>16&15|64]+Gt[e>>24&255]+"-"+Gt[t&63|128]+Gt[t>>8&255]+"-"+Gt[t>>16&255]+Gt[t>>24&255]+Gt[n&255]+Gt[n>>8&255]+Gt[n>>16&255]+Gt[n>>24&255]).toLowerCase()}function ke(s,e,t){return Math.max(e,Math.min(t,s))}function $u(s,e){return(s%e+e)%e}function $_(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function K_(s,e,t){return s!==e?(t-s)/(e-s):0}function Ma(s,e,t){return(1-t)*s+t*e}function J_(s,e,t,n){return Ma(s,e,1-Math.exp(-t*n))}function j_(s,e=1){return e-Math.abs($u(s,e*2)-e)}function Q_(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function ev(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function tv(s,e){return s+Math.floor(Math.random()*(e-s+1))}function nv(s,e){return s+Math.random()*(e-s)}function iv(s){return s*(.5-Math.random())}function sv(s){s!==void 0&&(Jd=s);let e=Jd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function rv(s){return s*Us}function av(s){return s*zr}function ov(s){return(s&s-1)===0&&s!==0}function cv(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function lv(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function hv(s,e,t,n,i){const r=Math.cos,a=Math.sin,o=r(t/2),c=a(t/2),l=r((e+n)/2),h=a((e+n)/2),u=r((e-n)/2),d=a((e-n)/2),f=r((n-e)/2),p=a((n-e)/2);switch(i){case"XYX":s.set(o*h,c*u,c*d,o*l);break;case"YZY":s.set(c*d,o*h,c*u,o*l);break;case"ZXZ":s.set(c*u,c*d,o*h,o*l);break;case"XZX":s.set(o*h,c*p,c*f,o*l);break;case"YXY":s.set(c*f,o*h,c*p,o*l);break;case"ZYZ":s.set(c*p,c*f,o*h,o*l);break;default:me("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function en(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function $e(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const p0={DEG2RAD:Us,RAD2DEG:zr,generateUUID:Sn,clamp:ke,euclideanModulo:$u,mapLinear:$_,inverseLerp:K_,lerp:Ma,damp:J_,pingpong:j_,smoothstep:Q_,smootherstep:ev,randInt:tv,randFloat:nv,randFloatSpread:iv,seededRandom:sv,degToRad:rv,radToDeg:av,isPowerOfTwo:ov,ceilPowerOfTwo:cv,floorPowerOfTwo:lv,setQuaternionFromProperEuler:hv,normalize:$e,denormalize:en};class X{constructor(e=0,t=0){X.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ke(this.x,e.x,t.x),this.y=ke(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ke(this.x,e,t),this.y=ke(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ke(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Yt{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3],d=r[a+0],f=r[a+1],p=r[a+2],g=r[a+3];if(o<=0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(o>=1){e[t+0]=d,e[t+1]=f,e[t+2]=p,e[t+3]=g;return}if(u!==g||c!==d||l!==f||h!==p){let x=c*d+l*f+h*p+u*g;x<0&&(d=-d,f=-f,p=-p,g=-g,x=-x);let m=1-o;if(x<.9995){const v=Math.acos(x),_=Math.sin(v);m=Math.sin(m*v)/_,o=Math.sin(o*v)/_,c=c*m+d*o,l=l*m+f*o,h=h*m+p*o,u=u*m+g*o}else{c=c*m+d*o,l=l*m+f*o,h=h*m+p*o,u=u*m+g*o;const v=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=v,l*=v,h*=v,u*=v}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,a){const o=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=r[a],d=r[a+1],f=r[a+2],p=r[a+3];return e[t]=o*p+h*u+c*f-l*d,e[t+1]=c*p+h*d+l*u-o*f,e[t+2]=l*p+h*f+o*d-c*u,e[t+3]=h*p-o*u-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(i/2),u=o(r/2),d=c(n/2),f=c(i/2),p=c(r/2);switch(a){case"XYZ":this._x=d*h*u+l*f*p,this._y=l*f*u-d*h*p,this._z=l*h*p+d*f*u,this._w=l*h*u-d*f*p;break;case"YXZ":this._x=d*h*u+l*f*p,this._y=l*f*u-d*h*p,this._z=l*h*p-d*f*u,this._w=l*h*u+d*f*p;break;case"ZXY":this._x=d*h*u-l*f*p,this._y=l*f*u+d*h*p,this._z=l*h*p+d*f*u,this._w=l*h*u-d*f*p;break;case"ZYX":this._x=d*h*u-l*f*p,this._y=l*f*u+d*h*p,this._z=l*h*p-d*f*u,this._w=l*h*u+d*f*p;break;case"YZX":this._x=d*h*u+l*f*p,this._y=l*f*u+d*h*p,this._z=l*h*p-d*f*u,this._w=l*h*u-d*f*p;break;case"XZY":this._x=d*h*u-l*f*p,this._y=l*f*u-d*h*p,this._z=l*h*p+d*f*u,this._w=l*h*u+d*f*p;break;default:me("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(a-i)*f}else if(n>o&&n>u){const f=2*Math.sqrt(1+n-o-u);this._w=(h-c)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(r+l)/f}else if(o>u){const f=2*Math.sqrt(1+o-n-u);this._w=(r-l)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+u-n-o);this._w=(a-i)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ke(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+a*o+i*l-r*c,this._y=i*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-i*o,this._w=a*h-n*o-i*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let n=e._x,i=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,i=-i,r=-r,a=-a,o=-o);let c=1-t;if(o<.9995){const l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,t=Math.sin(t*l)/h,this._x=this._x*c+n*t,this._y=this._y*c+i*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+i*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class E{constructor(e=0,t=0,n=0){E.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(jd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(jd.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*i-o*n),h=2*(o*t-r*i),u=2*(r*n-a*t);return this.x=t+c*l+a*u-o*h,this.y=n+c*h+o*l-r*u,this.z=i+c*u+r*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ke(this.x,e.x,t.x),this.y=ke(this.y,e.y,t.y),this.z=ke(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ke(this.x,e,t),this.y=ke(this.y,e,t),this.z=ke(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=i*c-r*o,this.y=r*a-n*c,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return lh.copy(this).projectOnVector(e),this.sub(lh)}reflect(e){return this.sub(lh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ke(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const lh=new E,jd=new Yt;class Ze{constructor(e,t,n,i,r,a,o,c,l){Ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,c,l)}set(e,t,n,i,r,a,o,c,l){const h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],p=n[8],g=i[0],x=i[3],m=i[6],v=i[1],_=i[4],y=i[7],A=i[2],w=i[5],P=i[8];return r[0]=a*g+o*v+c*A,r[3]=a*x+o*_+c*w,r[6]=a*m+o*y+c*P,r[1]=l*g+h*v+u*A,r[4]=l*x+h*_+u*w,r[7]=l*m+h*y+u*P,r[2]=d*g+f*v+p*A,r[5]=d*x+f*_+p*w,r[8]=d*m+f*y+p*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-n*r*h+n*o*c+i*r*l-i*a*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=h*a-o*l,d=o*c-h*r,f=l*r-a*c,p=t*u+n*d+i*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/p;return e[0]=u*g,e[1]=(i*l-h*n)*g,e[2]=(o*n-i*a)*g,e[3]=d*g,e[4]=(h*t-i*c)*g,e[5]=(i*r-o*t)*g,e[6]=f*g,e[7]=(n*c-l*t)*g,e[8]=(a*t-n*r)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-i*l,i*c,-i*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(hh.makeScale(e,t)),this}rotate(e){return this.premultiply(hh.makeRotation(-e)),this}translate(e,t){return this.premultiply(hh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const hh=new Ze,Qd=new Ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ef=new Ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function uv(){const s={enabled:!0,workingColorSpace:ks,spaces:{},convert:function(i,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ct&&(i.r=Ti(i.r),i.g=Ti(i.g),i.b=Ti(i.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ct&&(i.r=Cr(i.r),i.g=Cr(i.g),i.b=Cr(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===bi?Fa:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,a){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return Br("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return Br("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[ks]:{primaries:e,whitePoint:n,transfer:Fa,toXYZ:Qd,fromXYZ:ef,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:hn},outputColorSpaceConfig:{drawingBufferColorSpace:hn}},[hn]:{primaries:e,whitePoint:n,transfer:ct,toXYZ:Qd,fromXYZ:ef,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:hn}}}),s}const tt=uv();function Ti(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Cr(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let er;class m0{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{er===void 0&&(er=Ba("canvas")),er.width=e.width,er.height=e.height;const i=er.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=er}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ba("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=Ti(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ti(t[n]/255)*255):t[n]=Ti(t[n]);return{data:t,width:e.width,height:e.height}}else return me("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let dv=0;class Xi{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:dv++}),this.uuid=Sn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(uh(i[a].image)):r.push(uh(i[a]))}else r=uh(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function uh(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?m0.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(me("Texture: Unable to serialize Texture."),{})}let fv=0;const dh=new E;class Tt extends ci{constructor(e=Tt.DEFAULT_IMAGE,t=Tt.DEFAULT_MAPPING,n=dn,i=dn,r=At,a=ii,o=tn,c=Yn,l=Tt.DEFAULT_ANISOTROPY,h=bi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:fv++}),this.uuid=Sn(),this.name="",this.source=new Xi(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new X(0,0),this.repeat=new X(1,1),this.center=new X(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(dh).x}get height(){return this.source.getSize(dh).y}get depth(){return this.source.getSize(dh).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){me(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){me(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==bl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Da:e.x=e.x-Math.floor(e.x);break;case dn:e.x=e.x<0?0:1;break;case La:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Da:e.y=e.y-Math.floor(e.y);break;case dn:e.y=e.y<0?0:1;break;case La:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Tt.DEFAULT_IMAGE=null;Tt.DEFAULT_MAPPING=bl;Tt.DEFAULT_ANISOTROPY=1;class je{constructor(e=0,t=0,n=0,i=1){je.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],p=c[9],g=c[2],x=c[6],m=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-g)<.01&&Math.abs(p-x)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+g)<.1&&Math.abs(p+x)<.1&&Math.abs(l+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const _=(l+1)/2,y=(f+1)/2,A=(m+1)/2,w=(h+d)/4,P=(u+g)/4,I=(p+x)/4;return _>y&&_>A?_<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(_),i=w/n,r=P/n):y>A?y<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(y),n=w/i,r=I/i):A<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(A),n=P/r,i=I/r),this.set(n,i,r,t),this}let v=Math.sqrt((x-p)*(x-p)+(u-g)*(u-g)+(d-h)*(d-h));return Math.abs(v)<.001&&(v=1),this.x=(x-p)/v,this.y=(u-g)/v,this.z=(d-h)/v,this.w=Math.acos((l+f+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ke(this.x,e.x,t.x),this.y=ke(this.y,e.y,t.y),this.z=ke(this.z,e.z,t.z),this.w=ke(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ke(this.x,e,t),this.y=ke(this.y,e,t),this.z=ke(this.z,e,t),this.w=ke(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ku extends ci{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:At,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new je(0,0,e,t),this.scissorTest=!1,this.viewport=new je(0,0,e,t);const i={width:e,height:t,depth:n.depth},r=new Tt(i);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:At,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new Xi(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class oi extends Ku{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Pl extends Tt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=kt,this.minFilter=kt,this.wrapR=dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class pv extends oi{constructor(e=1,t=1,n=1,i={}){super(e,t,i),this.isWebGLArrayRenderTarget=!0,this.depth=n,this.texture=new Pl(null,e,t,n),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}}class Il extends Tt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=kt,this.minFilter=kt,this.wrapR=dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class mv extends oi{constructor(e=1,t=1,n=1,i={}){super(e,t,i),this.isWebGL3DRenderTarget=!0,this.depth=n,this.texture=new Il(null,e,t,n),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}}class Rt{constructor(e=new E(1/0,1/0,1/0),t=new E(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(On.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(On.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=On.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,On):On.fromBufferAttribute(r,a),On.applyMatrix4(e.matrixWorld),this.expandByPoint(On);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),mo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),mo.copy(n.boundingBox)),mo.applyMatrix4(e.matrixWorld),this.union(mo)}const i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,On),On.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Kr),xo.subVectors(this.max,Kr),tr.subVectors(e.a,Kr),nr.subVectors(e.b,Kr),ir.subVectors(e.c,Kr),Ni.subVectors(nr,tr),Fi.subVectors(ir,nr),ls.subVectors(tr,ir);let t=[0,-Ni.z,Ni.y,0,-Fi.z,Fi.y,0,-ls.z,ls.y,Ni.z,0,-Ni.x,Fi.z,0,-Fi.x,ls.z,0,-ls.x,-Ni.y,Ni.x,0,-Fi.y,Fi.x,0,-ls.y,ls.x,0];return!fh(t,tr,nr,ir,xo)||(t=[1,0,0,0,1,0,0,0,1],!fh(t,tr,nr,ir,xo))?!1:(go.crossVectors(Ni,Fi),t=[go.x,go.y,go.z],fh(t,tr,nr,ir,xo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,On).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(On).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(hi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),hi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),hi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),hi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),hi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),hi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),hi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),hi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(hi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const hi=[new E,new E,new E,new E,new E,new E,new E,new E],On=new E,mo=new Rt,tr=new E,nr=new E,ir=new E,Ni=new E,Fi=new E,ls=new E,Kr=new E,xo=new E,go=new E,hs=new E;function fh(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){hs.fromArray(s,r);const o=i.x*Math.abs(hs.x)+i.y*Math.abs(hs.y)+i.z*Math.abs(hs.z),c=e.dot(hs),l=t.dot(hs),h=n.dot(hs);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const xv=new Rt,Jr=new E,ph=new E;class Pt{constructor(e=new E,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):xv.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Jr.subVectors(e,this.center);const t=Jr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Jr,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ph.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Jr.copy(e.center).add(ph)),this.expandByPoint(Jr.copy(e.center).sub(ph))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const ui=new E,mh=new E,_o=new E,Oi=new E,xh=new E,vo=new E,gh=new E;class Li{constructor(e=new E,t=new E(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ui)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ui.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ui.copy(this.origin).addScaledVector(this.direction,t),ui.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){mh.copy(e).add(t).multiplyScalar(.5),_o.copy(t).sub(e).normalize(),Oi.copy(this.origin).sub(mh);const r=e.distanceTo(t)*.5,a=-this.direction.dot(_o),o=Oi.dot(this.direction),c=-Oi.dot(_o),l=Oi.lengthSq(),h=Math.abs(1-a*a);let u,d,f,p;if(h>0)if(u=a*c-o,d=a*o-c,p=r*h,u>=0)if(d>=-p)if(d<=p){const g=1/h;u*=g,d*=g,f=u*(u+a*d+2*o)+d*(a*u+d+2*c)+l}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d<=-p?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=p?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(mh).addScaledVector(_o,d),f}intersectSphere(e,t){ui.subVectors(e.center,this.origin);const n=ui.dot(this.direction),i=ui.dot(ui)-n*n,r=e.radius*e.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,i=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,i=(e.min.x-d.x)*l),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),u>=0?(o=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,ui)!==null}intersectTriangle(e,t,n,i,r){xh.subVectors(t,e),vo.subVectors(n,e),gh.crossVectors(xh,vo);let a=this.direction.dot(gh),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Oi.subVectors(this.origin,e);const c=o*this.direction.dot(vo.crossVectors(Oi,vo));if(c<0)return null;const l=o*this.direction.dot(xh.cross(Oi));if(l<0||c+l>a)return null;const h=-o*Oi.dot(gh);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class De{constructor(e,t,n,i,r,a,o,c,l,h,u,d,f,p,g,x){De.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,c,l,h,u,d,f,p,g,x)}set(e,t,n,i,r,a,o,c,l,h,u,d,f,p,g,x){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=i,m[1]=r,m[5]=a,m[9]=o,m[13]=c,m[2]=l,m[6]=h,m[10]=u,m[14]=d,m[3]=f,m[7]=p,m[11]=g,m[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new De().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/sr.setFromMatrixColumn(e,0).length(),r=1/sr.setFromMatrixColumn(e,1).length(),a=1/sr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const d=a*h,f=a*u,p=o*h,g=o*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=f+p*l,t[5]=d-g*l,t[9]=-o*c,t[2]=g-d*l,t[6]=p+f*l,t[10]=a*c}else if(e.order==="YXZ"){const d=c*h,f=c*u,p=l*h,g=l*u;t[0]=d+g*o,t[4]=p*o-f,t[8]=a*l,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=f*o-p,t[6]=g+d*o,t[10]=a*c}else if(e.order==="ZXY"){const d=c*h,f=c*u,p=l*h,g=l*u;t[0]=d-g*o,t[4]=-a*u,t[8]=p+f*o,t[1]=f+p*o,t[5]=a*h,t[9]=g-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const d=a*h,f=a*u,p=o*h,g=o*u;t[0]=c*h,t[4]=p*l-f,t[8]=d*l+g,t[1]=c*u,t[5]=g*l+d,t[9]=f*l-p,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const d=a*c,f=a*l,p=o*c,g=o*l;t[0]=c*h,t[4]=g-d*u,t[8]=p*u+f,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=f*u+p,t[10]=d-g*u}else if(e.order==="XZY"){const d=a*c,f=a*l,p=o*c,g=o*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+g,t[5]=a*h,t[9]=f*u-p,t[2]=p*u-f,t[6]=o*h,t[10]=g*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(gv,e,_v)}lookAt(e,t,n){const i=this.elements;return _n.subVectors(e,t),_n.lengthSq()===0&&(_n.z=1),_n.normalize(),Bi.crossVectors(n,_n),Bi.lengthSq()===0&&(Math.abs(n.z)===1?_n.x+=1e-4:_n.z+=1e-4,_n.normalize(),Bi.crossVectors(n,_n)),Bi.normalize(),yo.crossVectors(_n,Bi),i[0]=Bi.x,i[4]=yo.x,i[8]=_n.x,i[1]=Bi.y,i[5]=yo.y,i[9]=_n.y,i[2]=Bi.z,i[6]=yo.z,i[10]=_n.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],p=n[2],g=n[6],x=n[10],m=n[14],v=n[3],_=n[7],y=n[11],A=n[15],w=i[0],P=i[4],I=i[8],S=i[12],M=i[1],D=i[5],F=i[9],B=i[13],q=i[2],G=i[6],Y=i[10],J=i[14],W=i[3],re=i[7],ce=i[11],Ce=i[15];return r[0]=a*w+o*M+c*q+l*W,r[4]=a*P+o*D+c*G+l*re,r[8]=a*I+o*F+c*Y+l*ce,r[12]=a*S+o*B+c*J+l*Ce,r[1]=h*w+u*M+d*q+f*W,r[5]=h*P+u*D+d*G+f*re,r[9]=h*I+u*F+d*Y+f*ce,r[13]=h*S+u*B+d*J+f*Ce,r[2]=p*w+g*M+x*q+m*W,r[6]=p*P+g*D+x*G+m*re,r[10]=p*I+g*F+x*Y+m*ce,r[14]=p*S+g*B+x*J+m*Ce,r[3]=v*w+_*M+y*q+A*W,r[7]=v*P+_*D+y*G+A*re,r[11]=v*I+_*F+y*Y+A*ce,r[15]=v*S+_*B+y*J+A*Ce,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],f=e[14],p=e[3],g=e[7],x=e[11],m=e[15];return p*(+r*c*u-i*l*u-r*o*d+n*l*d+i*o*f-n*c*f)+g*(+t*c*f-t*l*d+r*a*d-i*a*f+i*l*h-r*c*h)+x*(+t*l*u-t*o*f-r*a*u+n*a*f+r*o*h-n*l*h)+m*(-i*o*h-t*c*u+t*o*d+i*a*u-n*a*d+n*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],f=e[11],p=e[12],g=e[13],x=e[14],m=e[15],v=u*x*l-g*d*l+g*c*f-o*x*f-u*c*m+o*d*m,_=p*d*l-h*x*l-p*c*f+a*x*f+h*c*m-a*d*m,y=h*g*l-p*u*l+p*o*f-a*g*f-h*o*m+a*u*m,A=p*u*c-h*g*c-p*o*d+a*g*d+h*o*x-a*u*x,w=t*v+n*_+i*y+r*A;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/w;return e[0]=v*P,e[1]=(g*d*r-u*x*r-g*i*f+n*x*f+u*i*m-n*d*m)*P,e[2]=(o*x*r-g*c*r+g*i*l-n*x*l-o*i*m+n*c*m)*P,e[3]=(u*c*r-o*d*r-u*i*l+n*d*l+o*i*f-n*c*f)*P,e[4]=_*P,e[5]=(h*x*r-p*d*r+p*i*f-t*x*f-h*i*m+t*d*m)*P,e[6]=(p*c*r-a*x*r-p*i*l+t*x*l+a*i*m-t*c*m)*P,e[7]=(a*d*r-h*c*r+h*i*l-t*d*l-a*i*f+t*c*f)*P,e[8]=y*P,e[9]=(p*u*r-h*g*r-p*n*f+t*g*f+h*n*m-t*u*m)*P,e[10]=(a*g*r-p*o*r+p*n*l-t*g*l-a*n*m+t*o*m)*P,e[11]=(h*o*r-a*u*r-h*n*l+t*u*l+a*n*f-t*o*f)*P,e[12]=A*P,e[13]=(h*g*i-p*u*i+p*n*d-t*g*d-h*n*x+t*u*x)*P,e[14]=(p*o*i-a*g*i-p*n*c+t*g*c+a*n*x-t*o*x)*P,e[15]=(a*u*i-h*o*i+h*n*c-t*u*c-a*n*d+t*o*d)*P,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-i*c,l*c+i*o,0,l*o+i*c,h*o+n,h*c-i*a,0,l*c-i*o,h*c+i*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,h=a+a,u=o+o,d=r*l,f=r*h,p=r*u,g=a*h,x=a*u,m=o*u,v=c*l,_=c*h,y=c*u,A=n.x,w=n.y,P=n.z;return i[0]=(1-(g+m))*A,i[1]=(f+y)*A,i[2]=(p-_)*A,i[3]=0,i[4]=(f-y)*w,i[5]=(1-(d+m))*w,i[6]=(x+v)*w,i[7]=0,i[8]=(p+_)*P,i[9]=(x-v)*P,i[10]=(1-(d+g))*P,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=sr.set(i[0],i[1],i[2]).length();const a=sr.set(i[4],i[5],i[6]).length(),o=sr.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],Bn.copy(this);const l=1/r,h=1/a,u=1/o;return Bn.elements[0]*=l,Bn.elements[1]*=l,Bn.elements[2]*=l,Bn.elements[4]*=h,Bn.elements[5]*=h,Bn.elements[6]*=h,Bn.elements[8]*=u,Bn.elements[9]*=u,Bn.elements[10]*=u,t.setFromRotationMatrix(Bn),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,i,r,a,o=bn,c=!1){const l=this.elements,h=2*r/(t-e),u=2*r/(n-i),d=(t+e)/(t-e),f=(n+i)/(n-i);let p,g;if(c)p=r/(a-r),g=a*r/(a-r);else if(o===bn)p=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Or)p=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=bn,c=!1){const l=this.elements,h=2/(t-e),u=2/(n-i),d=-(t+e)/(t-e),f=-(n+i)/(n-i);let p,g;if(c)p=1/(a-r),g=a/(a-r);else if(o===bn)p=-2/(a-r),g=-(a+r)/(a-r);else if(o===Or)p=-1/(a-r),g=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=u,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const sr=new E,Bn=new De,gv=new E(0,0,0),_v=new E(1,1,1),Bi=new E,yo=new E,_n=new E,tf=new De,nf=new Yt;class wn{constructor(e=0,t=0,n=0,i=wn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],a=i[4],o=i[8],c=i[1],l=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ke(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(ke(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-ke(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(ke(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:me("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return tf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(tf,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return nf.setFromEuler(this),this.setFromQuaternion(nf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}wn.DEFAULT_ORDER="XYZ";class Dl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let vv=0;const sf=new E,rr=new Yt,di=new De,bo=new E,jr=new E,yv=new E,bv=new Yt,rf=new E(1,0,0),af=new E(0,1,0),of=new E(0,0,1),cf={type:"added"},Mv={type:"removed"},ar={type:"childadded",child:null},_h={type:"childremoved",child:null};class nt extends ci{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:vv++}),this.uuid=Sn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=nt.DEFAULT_UP.clone();const e=new E,t=new wn,n=new Yt,i=new E(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new De},normalMatrix:{value:new Ze}}),this.matrix=new De,this.matrixWorld=new De,this.matrixAutoUpdate=nt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=nt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Dl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return rr.setFromAxisAngle(e,t),this.quaternion.multiply(rr),this}rotateOnWorldAxis(e,t){return rr.setFromAxisAngle(e,t),this.quaternion.premultiply(rr),this}rotateX(e){return this.rotateOnAxis(rf,e)}rotateY(e){return this.rotateOnAxis(af,e)}rotateZ(e){return this.rotateOnAxis(of,e)}translateOnAxis(e,t){return sf.copy(e).applyQuaternion(this.quaternion),this.position.add(sf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(rf,e)}translateY(e){return this.translateOnAxis(af,e)}translateZ(e){return this.translateOnAxis(of,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(di.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?bo.copy(e):bo.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),jr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?di.lookAt(jr,bo,this.up):di.lookAt(bo,jr,this.up),this.quaternion.setFromRotationMatrix(di),i&&(di.extractRotation(i.matrixWorld),rr.setFromRotationMatrix(di),this.quaternion.premultiply(rr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(We("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(cf),ar.child=e,this.dispatchEvent(ar),ar.child=null):We("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Mv),_h.child=e,this.dispatchEvent(_h),_h.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),di.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),di.multiply(e.parent.matrixWorld)),e.applyMatrix4(di),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(cf),ar.child=e,this.dispatchEvent(ar),ar.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jr,e,yv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jr,bv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];i.animations.push(r(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),f=a(e.animations),p=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=i,n;function a(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}nt.DEFAULT_UP=new E(0,1,0);nt.DEFAULT_MATRIX_AUTO_UPDATE=!0;nt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const zn=new E,fi=new E,vh=new E,pi=new E,or=new E,cr=new E,lf=new E,yh=new E,bh=new E,Mh=new E,Sh=new je,wh=new je,Th=new je;class un{constructor(e=new E,t=new E,n=new E){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),zn.subVectors(e,t),i.cross(zn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){zn.subVectors(i,t),fi.subVectors(n,t),vh.subVectors(e,t);const a=zn.dot(zn),o=zn.dot(fi),c=zn.dot(vh),l=fi.dot(fi),h=fi.dot(vh),u=a*l-o*o;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(l*c-o*h)*d,p=(a*h-o*c)*d;return r.set(1-f-p,p,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,pi)===null?!1:pi.x>=0&&pi.y>=0&&pi.x+pi.y<=1}static getInterpolation(e,t,n,i,r,a,o,c){return this.getBarycoord(e,t,n,i,pi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,pi.x),c.addScaledVector(a,pi.y),c.addScaledVector(o,pi.z),c)}static getInterpolatedAttribute(e,t,n,i,r,a){return Sh.setScalar(0),wh.setScalar(0),Th.setScalar(0),Sh.fromBufferAttribute(e,t),wh.fromBufferAttribute(e,n),Th.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(Sh,r.x),a.addScaledVector(wh,r.y),a.addScaledVector(Th,r.z),a}static isFrontFacing(e,t,n,i){return zn.subVectors(n,t),fi.subVectors(e,t),zn.cross(fi).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return zn.subVectors(this.c,this.b),fi.subVectors(this.a,this.b),zn.cross(fi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return un.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return un.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return un.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return un.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return un.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let a,o;or.subVectors(i,n),cr.subVectors(r,n),yh.subVectors(e,n);const c=or.dot(yh),l=cr.dot(yh);if(c<=0&&l<=0)return t.copy(n);bh.subVectors(e,i);const h=or.dot(bh),u=cr.dot(bh);if(h>=0&&u<=h)return t.copy(i);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(n).addScaledVector(or,a);Mh.subVectors(e,r);const f=or.dot(Mh),p=cr.dot(Mh);if(p>=0&&f<=p)return t.copy(r);const g=f*l-c*p;if(g<=0&&l>=0&&p<=0)return o=l/(l-p),t.copy(n).addScaledVector(cr,o);const x=h*p-f*u;if(x<=0&&u-h>=0&&f-p>=0)return lf.subVectors(r,i),o=(u-h)/(u-h+(f-p)),t.copy(i).addScaledVector(lf,o);const m=1/(x+g+d);return a=g*m,o=d*m,t.copy(n).addScaledVector(or,a).addScaledVector(cr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const x0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zi={h:0,s:0,l:0},Mo={h:0,s:0,l:0};function Eh(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class _e{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=hn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,tt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=tt.workingColorSpace){return this.r=e,this.g=t,this.b=n,tt.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=tt.workingColorSpace){if(e=$u(e,1),t=ke(t,0,1),n=ke(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Eh(a,r,e+1/3),this.g=Eh(a,r,e),this.b=Eh(a,r,e-1/3)}return tt.colorSpaceToWorking(this,i),this}setStyle(e,t=hn){function n(r){r!==void 0&&parseFloat(r)<1&&me("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:me("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);me("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=hn){const n=x0[e.toLowerCase()];return n!==void 0?this.setHex(n,t):me("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ti(e.r),this.g=Ti(e.g),this.b=Ti(e.b),this}copyLinearToSRGB(e){return this.r=Cr(e.r),this.g=Cr(e.g),this.b=Cr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=hn){return tt.workingToColorSpace(Ht.copy(this),e),Math.round(ke(Ht.r*255,0,255))*65536+Math.round(ke(Ht.g*255,0,255))*256+Math.round(ke(Ht.b*255,0,255))}getHexString(e=hn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=tt.workingColorSpace){tt.workingToColorSpace(Ht.copy(this),t);const n=Ht.r,i=Ht.g,r=Ht.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let c,l;const h=(o+a)/2;if(o===a)c=0,l=0;else{const u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case n:c=(i-r)/u+(i<r?6:0);break;case i:c=(r-n)/u+2;break;case r:c=(n-i)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=tt.workingColorSpace){return tt.workingToColorSpace(Ht.copy(this),t),e.r=Ht.r,e.g=Ht.g,e.b=Ht.b,e}getStyle(e=hn){tt.workingToColorSpace(Ht.copy(this),e);const t=Ht.r,n=Ht.g,i=Ht.b;return e!==hn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(zi),this.setHSL(zi.h+e,zi.s+t,zi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(zi),e.getHSL(Mo);const n=Ma(zi.h,Mo.h,t),i=Ma(zi.s,Mo.s,t),r=Ma(zi.l,Mo.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ht=new _e;_e.NAMES=x0;let Sv=0;class Zt extends ci{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Sv++}),this.uuid=Sn(),this.name="",this.type="Material",this.blending=Ls,this.side=Ei,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=gc,this.blendDst=_c,this.blendEquation=Wi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new _e(0,0,0),this.blendAlpha=0,this.depthFunc=zs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=du,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ws,this.stencilZFail=ws,this.stencilZPass=ws,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){me(`Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){me(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ls&&(n.blending=this.blending),this.side!==Ei&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==gc&&(n.blendSrc=this.blendSrc),this.blendDst!==_c&&(n.blendDst=this.blendDst),this.blendEquation!==Wi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==zs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==du&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ws&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ws&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ws&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(t){const r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Ui extends Zt{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new _e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wn,this.combine=Qa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Mi=wv();function wv(){const s=new ArrayBuffer(4),e=new Float32Array(s),t=new Uint32Array(s),n=new Uint32Array(512),i=new Uint32Array(512);for(let c=0;c<256;++c){const l=c-127;l<-27?(n[c]=0,n[c|256]=32768,i[c]=24,i[c|256]=24):l<-14?(n[c]=1024>>-l-14,n[c|256]=1024>>-l-14|32768,i[c]=-l-1,i[c|256]=-l-1):l<=15?(n[c]=l+15<<10,n[c|256]=l+15<<10|32768,i[c]=13,i[c|256]=13):l<128?(n[c]=31744,n[c|256]=64512,i[c]=24,i[c|256]=24):(n[c]=31744,n[c|256]=64512,i[c]=13,i[c|256]=13)}const r=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let c=1;c<1024;++c){let l=c<<13,h=0;for(;(l&8388608)===0;)l<<=1,h-=8388608;l&=-8388609,h+=947912704,r[c]=l|h}for(let c=1024;c<2048;++c)r[c]=939524096+(c-1024<<13);for(let c=1;c<31;++c)a[c]=c<<23;a[31]=1199570944,a[32]=2147483648;for(let c=33;c<63;++c)a[c]=2147483648+(c-32<<23);a[63]=3347054592;for(let c=1;c<64;++c)c!==32&&(o[c]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:r,exponentTable:a,offsetTable:o}}function ln(s){Math.abs(s)>65504&&me("DataUtils.toHalfFloat(): Value out of range."),s=ke(s,-65504,65504),Mi.floatView[0]=s;const e=Mi.uint32View[0],t=e>>23&511;return Mi.baseTable[t]+((e&8388607)>>Mi.shiftTable[t])}function ha(s){const e=s>>10;return Mi.uint32View[0]=Mi.mantissaTable[Mi.offsetTable[e]+(s&1023)]+Mi.exponentTable[e],Mi.floatView[0]}class Tv{static toHalfFloat(e){return ln(e)}static fromHalfFloat(e){return ha(e)}}const Ct=new E,So=new X;let Ev=0;class dt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ev++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Oa,this.updateRanges=[],this.gpuType=fn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)So.fromBufferAttribute(this,t),So.applyMatrix3(e),this.setXY(t,So.x,So.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix3(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix4(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyNormalMatrix(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.transformDirection(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=en(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=$e(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=en(t,this.array)),t}setX(e,t){return this.normalized&&(t=$e(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=en(t,this.array)),t}setY(e,t){return this.normalized&&(t=$e(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=en(t,this.array)),t}setZ(e,t){return this.normalized&&(t=$e(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=en(t,this.array)),t}setW(e,t){return this.normalized&&(t=$e(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=$e(t,this.array),n=$e(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=$e(t,this.array),n=$e(n,this.array),i=$e(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=$e(t,this.array),n=$e(n,this.array),i=$e(i,this.array),r=$e(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Oa&&(e.usage=this.usage),e}}class Av extends dt{constructor(e,t,n){super(new Int8Array(e),t,n)}}class Cv extends dt{constructor(e,t,n){super(new Uint8Array(e),t,n)}}class Rv extends dt{constructor(e,t,n){super(new Uint8ClampedArray(e),t,n)}}class Pv extends dt{constructor(e,t,n){super(new Int16Array(e),t,n)}}class Ju extends dt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Iv extends dt{constructor(e,t,n){super(new Int32Array(e),t,n)}}class ju extends dt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Dv extends dt{constructor(e,t,n){super(new Uint16Array(e),t,n),this.isFloat16BufferAttribute=!0}getX(e){let t=ha(this.array[e*this.itemSize]);return this.normalized&&(t=en(t,this.array)),t}setX(e,t){return this.normalized&&(t=$e(t,this.array)),this.array[e*this.itemSize]=ln(t),this}getY(e){let t=ha(this.array[e*this.itemSize+1]);return this.normalized&&(t=en(t,this.array)),t}setY(e,t){return this.normalized&&(t=$e(t,this.array)),this.array[e*this.itemSize+1]=ln(t),this}getZ(e){let t=ha(this.array[e*this.itemSize+2]);return this.normalized&&(t=en(t,this.array)),t}setZ(e,t){return this.normalized&&(t=$e(t,this.array)),this.array[e*this.itemSize+2]=ln(t),this}getW(e){let t=ha(this.array[e*this.itemSize+3]);return this.normalized&&(t=en(t,this.array)),t}setW(e,t){return this.normalized&&(t=$e(t,this.array)),this.array[e*this.itemSize+3]=ln(t),this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=$e(t,this.array),n=$e(n,this.array)),this.array[e+0]=ln(t),this.array[e+1]=ln(n),this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=$e(t,this.array),n=$e(n,this.array),i=$e(i,this.array)),this.array[e+0]=ln(t),this.array[e+1]=ln(n),this.array[e+2]=ln(i),this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=$e(t,this.array),n=$e(n,this.array),i=$e(i,this.array),r=$e(r,this.array)),this.array[e+0]=ln(t),this.array[e+1]=ln(n),this.array[e+2]=ln(i),this.array[e+3]=ln(r),this}}class Se extends dt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Lv=0;const An=new De,Ah=new nt,lr=new E,vn=new Rt,Qr=new Rt,Ft=new E;class Ye extends ci{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Lv++}),this.uuid=Sn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(d0(e)?ju:Ju)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ze().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return An.makeRotationFromQuaternion(e),this.applyMatrix4(An),this}rotateX(e){return An.makeRotationX(e),this.applyMatrix4(An),this}rotateY(e){return An.makeRotationY(e),this.applyMatrix4(An),this}rotateZ(e){return An.makeRotationZ(e),this.applyMatrix4(An),this}translate(e,t,n){return An.makeTranslation(e,t,n),this.applyMatrix4(An),this}scale(e,t,n){return An.makeScale(e,t,n),this.applyMatrix4(An),this}lookAt(e){return Ah.lookAt(e),Ah.updateMatrix(),this.applyMatrix4(Ah.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(lr).negate(),this.translate(lr.x,lr.y,lr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,r=e.length;i<r;i++){const a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Se(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&me("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Rt);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){We("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new E(-1/0,-1/0,-1/0),new E(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];vn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ft.addVectors(this.boundingBox.min,vn.min),this.boundingBox.expandByPoint(Ft),Ft.addVectors(this.boundingBox.max,vn.max),this.boundingBox.expandByPoint(Ft)):(this.boundingBox.expandByPoint(vn.min),this.boundingBox.expandByPoint(vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&We('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Pt);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){We("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new E,1/0);return}if(e){const n=this.boundingSphere.center;if(vn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Qr.setFromBufferAttribute(o),this.morphTargetsRelative?(Ft.addVectors(vn.min,Qr.min),vn.expandByPoint(Ft),Ft.addVectors(vn.max,Qr.max),vn.expandByPoint(Ft)):(vn.expandByPoint(Qr.min),vn.expandByPoint(Qr.max))}vn.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)Ft.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Ft));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Ft.fromBufferAttribute(o,l),c&&(lr.fromBufferAttribute(e,l),Ft.add(lr)),i=Math.max(i,n.distanceToSquared(Ft))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&We('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){We("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new dt(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let I=0;I<n.count;I++)o[I]=new E,c[I]=new E;const l=new E,h=new E,u=new E,d=new X,f=new X,p=new X,g=new E,x=new E;function m(I,S,M){l.fromBufferAttribute(n,I),h.fromBufferAttribute(n,S),u.fromBufferAttribute(n,M),d.fromBufferAttribute(r,I),f.fromBufferAttribute(r,S),p.fromBufferAttribute(r,M),h.sub(l),u.sub(l),f.sub(d),p.sub(d);const D=1/(f.x*p.y-p.x*f.y);isFinite(D)&&(g.copy(h).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(D),x.copy(u).multiplyScalar(f.x).addScaledVector(h,-p.x).multiplyScalar(D),o[I].add(g),o[S].add(g),o[M].add(g),c[I].add(x),c[S].add(x),c[M].add(x))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let I=0,S=v.length;I<S;++I){const M=v[I],D=M.start,F=M.count;for(let B=D,q=D+F;B<q;B+=3)m(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const _=new E,y=new E,A=new E,w=new E;function P(I){A.fromBufferAttribute(i,I),w.copy(A);const S=o[I];_.copy(S),_.sub(A.multiplyScalar(A.dot(S))).normalize(),y.crossVectors(w,S);const D=y.dot(c[I])<0?-1:1;a.setXYZW(I,_.x,_.y,_.z,D)}for(let I=0,S=v.length;I<S;++I){const M=v[I],D=M.start,F=M.count;for(let B=D,q=D+F;B<q;B+=3)P(e.getX(B+0)),P(e.getX(B+1)),P(e.getX(B+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new dt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new E,r=new E,a=new E,o=new E,c=new E,l=new E,h=new E,u=new E;if(e)for(let d=0,f=e.count;d<f;d+=3){const p=e.getX(d+0),g=e.getX(d+1),x=e.getX(d+2);i.fromBufferAttribute(t,p),r.fromBufferAttribute(t,g),a.fromBufferAttribute(t,x),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),o.fromBufferAttribute(n,p),c.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),o.add(h),c.add(h),l.add(h),n.setXYZ(p,o.x,o.y,o.z),n.setXYZ(g,c.x,c.y,c.z),n.setXYZ(x,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ft.fromBufferAttribute(e,t),Ft.normalize(),e.setXYZ(t,Ft.x,Ft.y,Ft.z)}toNonIndexed(){function e(o,c){const l=o.array,h=o.itemSize,u=o.normalized,d=new l.constructor(c.length*h);let f=0,p=0;for(let g=0,x=c.length;g<x;g++){o.isInterleavedBufferAttribute?f=c[g]*o.data.stride+o.offset:f=c[g]*h;for(let m=0;m<h;m++)d[p++]=l[f++]}return new dt(d,h,u)}if(this.index===null)return me("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ye,n=this.index.array,i=this.attributes;for(const o in i){const c=i[o],l=e(c,n);t.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let h=0,u=l.length;h<u;h++){const d=l[h],f=e(d,n);c.push(f)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const f=l[u];h.push(f.toJSON(e.data))}h.length>0&&(i[c]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(t))}const r=e.morphAttributes;for(const l in r){const h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,h=a.length;l<h;l++){const u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const hf=new De,us=new Li,wo=new Pt,uf=new E,To=new E,Eo=new E,Ao=new E,Ch=new E,Co=new E,df=new E,Ro=new E;class It extends nt{constructor(e=new Ye,t=new Ui){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(r&&o){Co.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=o[c],u=r[c];h!==0&&(Ch.fromBufferAttribute(u,e),a?Co.addScaledVector(Ch,h):Co.addScaledVector(Ch.sub(t),h))}t.add(Co)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),wo.copy(n.boundingSphere),wo.applyMatrix4(r),us.copy(e.ray).recast(e.near),!(wo.containsPoint(us.origin)===!1&&(us.intersectSphere(wo,uf)===null||us.origin.distanceToSquared(uf)>(e.far-e.near)**2))&&(hf.copy(r).invert(),us.copy(e.ray).applyMatrix4(hf),!(n.boundingBox!==null&&us.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,us)))}_computeIntersections(e,t,n){let i;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,g=d.length;p<g;p++){const x=d[p],m=a[x.materialIndex],v=Math.max(x.start,f.start),_=Math.min(o.count,Math.min(x.start+x.count,f.start+f.count));for(let y=v,A=_;y<A;y+=3){const w=o.getX(y),P=o.getX(y+1),I=o.getX(y+2);i=Po(this,m,e,n,l,h,u,w,P,I),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=x.materialIndex,t.push(i))}}else{const p=Math.max(0,f.start),g=Math.min(o.count,f.start+f.count);for(let x=p,m=g;x<m;x+=3){const v=o.getX(x),_=o.getX(x+1),y=o.getX(x+2);i=Po(this,a,e,n,l,h,u,v,_,y),i&&(i.faceIndex=Math.floor(x/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(a))for(let p=0,g=d.length;p<g;p++){const x=d[p],m=a[x.materialIndex],v=Math.max(x.start,f.start),_=Math.min(c.count,Math.min(x.start+x.count,f.start+f.count));for(let y=v,A=_;y<A;y+=3){const w=y,P=y+1,I=y+2;i=Po(this,m,e,n,l,h,u,w,P,I),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=x.materialIndex,t.push(i))}}else{const p=Math.max(0,f.start),g=Math.min(c.count,f.start+f.count);for(let x=p,m=g;x<m;x+=3){const v=x,_=x+1,y=x+2;i=Po(this,a,e,n,l,h,u,v,_,y),i&&(i.faceIndex=Math.floor(x/3),t.push(i))}}}}function Uv(s,e,t,n,i,r,a,o){let c;if(e.side===nn?c=n.intersectTriangle(a,r,i,!0,o):c=n.intersectTriangle(i,r,a,e.side===Ei,o),c===null)return null;Ro.copy(o),Ro.applyMatrix4(s.matrixWorld);const l=t.ray.origin.distanceTo(Ro);return l<t.near||l>t.far?null:{distance:l,point:Ro.clone(),object:s}}function Po(s,e,t,n,i,r,a,o,c,l){s.getVertexPosition(o,To),s.getVertexPosition(c,Eo),s.getVertexPosition(l,Ao);const h=Uv(s,e,t,n,To,Eo,Ao,df);if(h){const u=new E;un.getBarycoord(df,To,Eo,Ao,u),i&&(h.uv=un.getInterpolatedAttribute(i,o,c,l,u,new X)),r&&(h.uv1=un.getInterpolatedAttribute(r,o,c,l,u,new X)),a&&(h.normal=un.getInterpolatedAttribute(a,o,c,l,u,new E),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:c,c:l,normal:new E,materialIndex:0};un.getNormal(To,Eo,Ao,d.normal),h.face=d,h.barycoord=u}return h}class Ys extends Ye{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],h=[],u=[];let d=0,f=0;p("z","y","x",-1,-1,n,t,e,a,r,0),p("z","y","x",1,-1,n,t,-e,a,r,1),p("x","z","y",1,1,e,n,t,i,a,2),p("x","z","y",1,-1,e,n,-t,i,a,3),p("x","y","z",1,-1,e,t,n,i,r,4),p("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new Se(l,3)),this.setAttribute("normal",new Se(h,3)),this.setAttribute("uv",new Se(u,2));function p(g,x,m,v,_,y,A,w,P,I,S){const M=y/P,D=A/I,F=y/2,B=A/2,q=w/2,G=P+1,Y=I+1;let J=0,W=0;const re=new E;for(let ce=0;ce<Y;ce++){const Ce=ce*D-B;for(let Ke=0;Ke<G;Ke++){const Qe=Ke*M-F;re[g]=Qe*v,re[x]=Ce*_,re[m]=q,l.push(re.x,re.y,re.z),re[g]=0,re[x]=0,re[m]=w>0?1:-1,h.push(re.x,re.y,re.z),u.push(Ke/P),u.push(1-ce/I),J+=1}}for(let ce=0;ce<I;ce++)for(let Ce=0;Ce<P;Ce++){const Ke=d+Ce+G*ce,Qe=d+Ce+G*(ce+1),rt=d+(Ce+1)+G*(ce+1),ot=d+(Ce+1)+G*ce;c.push(Ke,Qe,ot),c.push(Qe,rt,ot),W+=6}o.addGroup(f,W,S),f+=W,d+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ys(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function kr(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(me("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function jt(s){const e={};for(let t=0;t<s.length;t++){const n=kr(s[t]);for(const i in n)e[i]=n[i]}return e}function Nv(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function g0(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:tt.workingColorSpace}const Qu={clone:kr,merge:jt};var Fv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ov=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ln extends Zt{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Fv,this.fragmentShader=Ov,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=kr(e.uniforms),this.uniformsGroups=Nv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Ll extends nt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new De,this.projectionMatrix=new De,this.projectionMatrixInverse=new De,this.coordinateSystem=bn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ki=new E,ff=new X,pf=new X;class Ot extends Ll{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=zr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Us*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return zr*2*Math.atan(Math.tan(Us*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ki.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ki.x,ki.y).multiplyScalar(-e/ki.z),ki.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ki.x,ki.y).multiplyScalar(-e/ki.z)}getViewSize(e,t){return this.getViewBounds(e,ff,pf),t.subVectors(pf,ff)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Us*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*i/c,t-=a.offsetY*n/l,i*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const hr=-90,ur=1;class _0 extends nt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Ot(hr,ur,e,t);i.layers=this.layers,this.add(i);const r=new Ot(hr,ur,e,t);r.layers=this.layers,this.add(r);const a=new Ot(hr,ur,e,t);a.layers=this.layers,this.add(a);const o=new Ot(hr,ur,e,t);o.layers=this.layers,this.add(o);const c=new Ot(hr,ur,e,t);c.layers=this.layers,this.add(c);const l=new Ot(hr,ur,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,c]=t;for(const l of t)this.remove(l);if(e===bn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Or)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,l),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}}class to extends Tt{constructor(e=[],t=Ai,n,i,r,a,o,c,l,h){super(e,t,n,i,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class v0 extends oi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new to(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Ys(5,5,5),r=new Ln({name:"CubemapFromEquirect",uniforms:kr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:nn,blending:ai});r.uniforms.tEquirect.value=t;const a=new It(i,r),o=t.minFilter;return t.minFilter===ii&&(t.minFilter=At),new _0(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}}class Tr extends nt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Bv={type:"move"};class lc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Tr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Tr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new E,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new E),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Tr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new E,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new E),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const g of e.hand.values()){const x=t.getJointPose(g,n),m=this._getHandJoint(l,g);x!==null&&(m.matrix.fromArray(x.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=x.radius),m.visible=x!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,p=.005;l.inputState.pinching&&d>f+p?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-p&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Bv)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Tr;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Ul{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new _e(e),this.density=t}clone(){return new Ul(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Nl{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new _e(e),this.near=t,this.far=n}clone(){return new Nl(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}let ed=class extends nt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new wn,this.environmentIntensity=1,this.environmentRotation=new wn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};class Fl{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Oa,this.updateRanges=[],this.version=0,this.uuid=Sn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Sn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Sn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Kt=new E;class Vs{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix4(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.applyNormalMatrix(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.transformDirection(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=en(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=$e(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=$e(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=$e(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=$e(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=$e(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=en(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=en(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=en(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=en(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=$e(t,this.array),n=$e(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=$e(t,this.array),n=$e(n,this.array),i=$e(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=$e(t,this.array),n=$e(n,this.array),i=$e(i,this.array),r=$e(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){za("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new dt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Vs(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){za("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class td extends Zt{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new _e(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let dr;const ea=new E,fr=new E,pr=new E,mr=new X,ta=new X,y0=new De,Io=new E,na=new E,Do=new E,mf=new X,Rh=new X,xf=new X;class b0 extends nt{constructor(e=new td){if(super(),this.isSprite=!0,this.type="Sprite",dr===void 0){dr=new Ye;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Fl(t,5);dr.setIndex([0,1,2,0,2,3]),dr.setAttribute("position",new Vs(n,3,0,!1)),dr.setAttribute("uv",new Vs(n,2,3,!1))}this.geometry=dr,this.material=e,this.center=new X(.5,.5),this.count=1}raycast(e,t){e.camera===null&&We('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),fr.setFromMatrixScale(this.matrixWorld),y0.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),pr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&fr.multiplyScalar(-pr.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const a=this.center;Lo(Io.set(-.5,-.5,0),pr,a,fr,i,r),Lo(na.set(.5,-.5,0),pr,a,fr,i,r),Lo(Do.set(.5,.5,0),pr,a,fr,i,r),mf.set(0,0),Rh.set(1,0),xf.set(1,1);let o=e.ray.intersectTriangle(Io,na,Do,!1,ea);if(o===null&&(Lo(na.set(-.5,.5,0),pr,a,fr,i,r),Rh.set(0,1),o=e.ray.intersectTriangle(Io,Do,na,!1,ea),o===null))return;const c=e.ray.origin.distanceTo(ea);c<e.near||c>e.far||t.push({distance:c,point:ea.clone(),uv:un.getInterpolation(ea,Io,na,Do,mf,Rh,xf,new X),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Lo(s,e,t,n,i,r){mr.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(ta.x=r*mr.x-i*mr.y,ta.y=i*mr.x+r*mr.y):ta.copy(mr),s.copy(e),s.x+=ta.x,s.y+=ta.y,s.applyMatrix4(y0)}const Uo=new E,gf=new E;class M0 extends nt{constructor(){super(),this.isLOD=!0,this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]}}),this.autoUpdate=!0}copy(e){super.copy(e,!1);const t=e.levels;for(let n=0,i=t.length;n<i;n++){const r=t[n];this.addLevel(r.object.clone(),r.distance,r.hysteresis)}return this.autoUpdate=e.autoUpdate,this}addLevel(e,t=0,n=0){t=Math.abs(t);const i=this.levels;let r;for(r=0;r<i.length&&!(t<i[r].distance);r++);return i.splice(r,0,{distance:t,hysteresis:n,object:e}),this.add(e),this}removeLevel(e){const t=this.levels;for(let n=0;n<t.length;n++)if(t[n].distance===e){const i=t.splice(n,1);return this.remove(i[0].object),!0}return!1}getCurrentLevel(){return this._currentLevel}getObjectForDistance(e){const t=this.levels;if(t.length>0){let n,i;for(n=1,i=t.length;n<i;n++){let r=t[n].distance;if(t[n].object.visible&&(r-=r*t[n].hysteresis),e<r)break}return t[n-1].object}return null}raycast(e,t){if(this.levels.length>0){Uo.setFromMatrixPosition(this.matrixWorld);const i=e.ray.origin.distanceTo(Uo);this.getObjectForDistance(i).raycast(e,t)}}update(e){const t=this.levels;if(t.length>1){Uo.setFromMatrixPosition(e.matrixWorld),gf.setFromMatrixPosition(this.matrixWorld);const n=Uo.distanceTo(gf)/e.zoom;t[0].object.visible=!0;let i,r;for(i=1,r=t.length;i<r;i++){let a=t[i].distance;if(t[i].object.visible&&(a-=a*t[i].hysteresis),n>=a)t[i-1].object.visible=!1,t[i].object.visible=!0;else break}for(this._currentLevel=i-1;i<r;i++)t[i].object.visible=!1}}toJSON(e){const t=super.toJSON(e);this.autoUpdate===!1&&(t.object.autoUpdate=!1),t.object.levels=[];const n=this.levels;for(let i=0,r=n.length;i<r;i++){const a=n[i];t.object.levels.push({object:a.object.uuid,distance:a.distance,hysteresis:a.hysteresis})}return t}}const _f=new E,vf=new je,yf=new je,zv=new E,bf=new De,No=new E,Ph=new Pt,Mf=new De,Ih=new Li;class S0 extends It{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=uu,this.bindMatrix=new De,this.bindMatrixInverse=new De,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Rt),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,No),this.boundingBox.expandByPoint(No)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Pt),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,No),this.boundingSphere.expandByPoint(No)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ph.copy(this.boundingSphere),Ph.applyMatrix4(i),e.ray.intersectsSphere(Ph)!==!1&&(Mf.copy(i).invert(),Ih.copy(e.ray).applyMatrix4(Mf),!(this.boundingBox!==null&&Ih.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Ih)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new je,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===uu?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===jm?this.bindMatrixInverse.copy(this.bindMatrix).invert():me("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;vf.fromBufferAttribute(i.attributes.skinIndex,e),yf.fromBufferAttribute(i.attributes.skinWeight,e),_f.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const a=yf.getComponent(r);if(a!==0){const o=vf.getComponent(r);bf.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(zv.copy(_f).applyMatrix4(bf),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class nd extends nt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Wn extends Tt{constructor(e=null,t=1,n=1,i,r,a,o,c,l=kt,h=kt,u,d){super(null,a,o,c,l,h,i,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Sf=new De,kv=new De;class Ol{constructor(e=[],t=[]){this.uuid=Sn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){me("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new De)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new De;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,a=e.length;r<a;r++){const o=e[r]?e[r].matrixWorld:kv;Sf.multiplyMatrices(o,t[r]),Sf.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Ol(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Wn(t,e,e,tn,fn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let a=t[r];a===void 0&&(me("Skeleton: No bone found with UUID:",r),a=new nd),this.bones.push(a),this.boneInverses.push(new De().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const a=t[i];e.bones.push(a.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class Vr extends dt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const xr=new De,wf=new De,Fo=[],Tf=new Rt,Vv=new De,ia=new It,sa=new Pt;class w0 extends It{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Vr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Vv)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Rt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,xr),Tf.copy(e.boundingBox).applyMatrix4(xr),this.boundingBox.union(Tf)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Pt),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,xr),sa.copy(e.boundingSphere).applyMatrix4(xr),this.boundingSphere.union(sa)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(ia.geometry=this.geometry,ia.material=this.material,ia.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),sa.copy(this.boundingSphere),sa.applyMatrix4(n),e.ray.intersectsSphere(sa)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,xr),wf.multiplyMatrices(n,xr),ia.matrixWorld=wf,ia.raycast(e,Fo);for(let a=0,o=Fo.length;a<o;a++){const c=Fo[a];c.instanceId=r,c.object=this,t.push(c)}Fo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Vr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Wn(new Float32Array(i*this.count),i,this.count,Tl,fn));const r=this.morphTexture.source.data.data;let a=0;for(let l=0;l<n.length;l++)a+=n[l];const o=this.geometry.morphTargetsRelative?1:1-a,c=i*e;r[c]=o,r.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Dh=new E,Gv=new E,Hv=new Ze;class yi{constructor(e=new E(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Dh.subVectors(n,t).cross(Gv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Dh),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Hv.getNormalMatrix(e),i=this.coplanarPoint(Dh).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ds=new Pt,Wv=new X(.5,.5),Oo=new E;class Xr{constructor(e=new yi,t=new yi,n=new yi,i=new yi,r=new yi,a=new yi){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=bn,n=!1){const i=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],l=r[3],h=r[4],u=r[5],d=r[6],f=r[7],p=r[8],g=r[9],x=r[10],m=r[11],v=r[12],_=r[13],y=r[14],A=r[15];if(i[0].setComponents(l-a,f-h,m-p,A-v).normalize(),i[1].setComponents(l+a,f+h,m+p,A+v).normalize(),i[2].setComponents(l+o,f+u,m+g,A+_).normalize(),i[3].setComponents(l-o,f-u,m-g,A-_).normalize(),n)i[4].setComponents(c,d,x,y).normalize(),i[5].setComponents(l-c,f-d,m-x,A-y).normalize();else if(i[4].setComponents(l-c,f-d,m-x,A-y).normalize(),t===bn)i[5].setComponents(l+c,f+d,m+x,A+y).normalize();else if(t===Or)i[5].setComponents(c,d,x,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ds.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ds.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ds)}intersectsSprite(e){ds.center.set(0,0,0);const t=Wv.distanceTo(e.center);return ds.radius=.7071067811865476+t,ds.applyMatrix4(e.matrixWorld),this.intersectsSphere(ds)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Oo.x=i.normal.x>0?e.max.x:e.min.x,Oo.y=i.normal.y>0?e.max.y:e.min.y,Oo.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Oo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const Kn=new De,Jn=new Xr;class Bl{constructor(){this.coordinateSystem=bn}intersectsObject(e,t){if(!t.isArrayCamera||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){const i=t.cameras[n];if(Kn.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),Jn.setFromProjectionMatrix(Kn,i.coordinateSystem,i.reversedDepth),Jn.intersectsObject(e))return!0}return!1}intersectsSprite(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){const i=t.cameras[n];if(Kn.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),Jn.setFromProjectionMatrix(Kn,i.coordinateSystem,i.reversedDepth),Jn.intersectsSprite(e))return!0}return!1}intersectsSphere(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){const i=t.cameras[n];if(Kn.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),Jn.setFromProjectionMatrix(Kn,i.coordinateSystem,i.reversedDepth),Jn.intersectsSphere(e))return!0}return!1}intersectsBox(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){const i=t.cameras[n];if(Kn.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),Jn.setFromProjectionMatrix(Kn,i.coordinateSystem,i.reversedDepth),Jn.intersectsBox(e))return!0}return!1}containsPoint(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){const i=t.cameras[n];if(Kn.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),Jn.setFromProjectionMatrix(Kn,i.coordinateSystem,i.reversedDepth),Jn.containsPoint(e))return!0}return!1}clone(){return new Bl}}function Lh(s,e){return s-e}function Xv(s,e){return s.z-e.z}function qv(s,e){return e.z-s.z}class Yv{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,n,i){const r=this.pool,a=this.list;this.index>=r.length&&r.push({start:-1,count:-1,z:-1,index:-1});const o=r[this.index];a.push(o),this.index++,o.start=e,o.count=t,o.z=n,o.index=i}reset(){this.list.length=0,this.index=0}}const on=new De,Zv=new _e(1,1,1),Ef=new Xr,$v=new Bl,Bo=new Rt,fs=new Pt,ra=new E,Af=new E,Kv=new E,Uh=new Yv,Wt=new It,zo=[];function Jv(s,e,t=0){const n=e.itemSize;if(s.isInterleavedBufferAttribute||s.array.constructor!==e.array.constructor){const i=s.count;for(let r=0;r<i;r++)for(let a=0;a<n;a++)e.setComponent(r+t,a,s.getComponent(r,a))}else e.array.set(s.array,t*n);e.needsUpdate=!0}function ps(s,e){if(s.constructor!==e.constructor){const t=Math.min(s.length,e.length);for(let n=0;n<t;n++)e[n]=s[n]}else{const t=Math.min(s.length,e.length);e.set(new s.constructor(s.buffer,0,t))}}class T0 extends It{constructor(e,t,n=t*2,i){super(new Ye,i),this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._instanceInfo=[],this._geometryInfo=[],this._availableInstanceIds=[],this._availableGeometryIds=[],this._nextIndexStart=0,this._nextVertexStart=0,this._geometryCount=0,this._visibilityChanged=!0,this._geometryInitialized=!1,this._maxInstanceCount=e,this._maxVertexCount=t,this._maxIndexCount=n,this._multiDrawCounts=new Int32Array(e),this._multiDrawStarts=new Int32Array(e),this._multiDrawCount=0,this._multiDrawInstances=null,this._matricesTexture=null,this._indirectTexture=null,this._colorsTexture=null,this._initMatricesTexture(),this._initIndirectTexture()}get maxInstanceCount(){return this._maxInstanceCount}get instanceCount(){return this._instanceInfo.length-this._availableInstanceIds.length}get unusedVertexCount(){return this._maxVertexCount-this._nextVertexStart}get unusedIndexCount(){return this._maxIndexCount-this._nextIndexStart}_initMatricesTexture(){let e=Math.sqrt(this._maxInstanceCount*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4),n=new Wn(t,e,e,tn,fn);this._matricesTexture=n}_initIndirectTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);const t=new Uint32Array(e*e),n=new Wn(t,e,e,eo,Ci);this._indirectTexture=n}_initColorsTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);const t=new Float32Array(e*e*4).fill(1),n=new Wn(t,e,e,tn,fn);n.colorSpace=tt.workingColorSpace,this._colorsTexture=n}_initializeGeometry(e){const t=this.geometry,n=this._maxVertexCount,i=this._maxIndexCount;if(this._geometryInitialized===!1){for(const r in e.attributes){const a=e.getAttribute(r),{array:o,itemSize:c,normalized:l}=a,h=new o.constructor(n*c),u=new dt(h,c,l);t.setAttribute(r,u)}if(e.getIndex()!==null){const r=n>65535?new Uint32Array(i):new Uint16Array(i);t.setIndex(new dt(r,1))}this._geometryInitialized=!0}}_validateGeometry(e){const t=this.geometry;if(!!e.getIndex()!=!!t.getIndex())throw new Error('THREE.BatchedMesh: All geometries must consistently have "index".');for(const n in t.attributes){if(!e.hasAttribute(n))throw new Error(`THREE.BatchedMesh: Added geometry missing "${n}". All geometries must have consistent attributes.`);const i=e.getAttribute(n),r=t.getAttribute(n);if(i.itemSize!==r.itemSize||i.normalized!==r.normalized)throw new Error("THREE.BatchedMesh: All attributes must have a consistent itemSize and normalized value.")}}validateInstanceId(e){const t=this._instanceInfo;if(e<0||e>=t.length||t[e].active===!1)throw new Error(`THREE.BatchedMesh: Invalid instanceId ${e}. Instance is either out of range or has been deleted.`)}validateGeometryId(e){const t=this._geometryInfo;if(e<0||e>=t.length||t[e].active===!1)throw new Error(`THREE.BatchedMesh: Invalid geometryId ${e}. Geometry is either out of range or has been deleted.`)}setCustomSort(e){return this.customSort=e,this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Rt);const e=this.boundingBox,t=this._instanceInfo;e.makeEmpty();for(let n=0,i=t.length;n<i;n++){if(t[n].active===!1)continue;const r=t[n].geometryIndex;this.getMatrixAt(n,on),this.getBoundingBoxAt(r,Bo).applyMatrix4(on),e.union(Bo)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Pt);const e=this.boundingSphere,t=this._instanceInfo;e.makeEmpty();for(let n=0,i=t.length;n<i;n++){if(t[n].active===!1)continue;const r=t[n].geometryIndex;this.getMatrixAt(n,on),this.getBoundingSphereAt(r,fs).applyMatrix4(on),e.union(fs)}}addInstance(e){if(this._instanceInfo.length>=this.maxInstanceCount&&this._availableInstanceIds.length===0)throw new Error("THREE.BatchedMesh: Maximum item count reached.");const n={visible:!0,active:!0,geometryIndex:e};let i=null;this._availableInstanceIds.length>0?(this._availableInstanceIds.sort(Lh),i=this._availableInstanceIds.shift(),this._instanceInfo[i]=n):(i=this._instanceInfo.length,this._instanceInfo.push(n));const r=this._matricesTexture;on.identity().toArray(r.image.data,i*16),r.needsUpdate=!0;const a=this._colorsTexture;return a&&(Zv.toArray(a.image.data,i*4),a.needsUpdate=!0),this._visibilityChanged=!0,i}addGeometry(e,t=-1,n=-1){this._initializeGeometry(e),this._validateGeometry(e);const i={vertexStart:-1,vertexCount:-1,reservedVertexCount:-1,indexStart:-1,indexCount:-1,reservedIndexCount:-1,start:-1,count:-1,boundingBox:null,boundingSphere:null,active:!0},r=this._geometryInfo;i.vertexStart=this._nextVertexStart,i.reservedVertexCount=t===-1?e.getAttribute("position").count:t;const a=e.getIndex();if(a!==null&&(i.indexStart=this._nextIndexStart,i.reservedIndexCount=n===-1?a.count:n),i.indexStart!==-1&&i.indexStart+i.reservedIndexCount>this._maxIndexCount||i.vertexStart+i.reservedVertexCount>this._maxVertexCount)throw new Error("THREE.BatchedMesh: Reserved space request exceeds the maximum buffer size.");let c;return this._availableGeometryIds.length>0?(this._availableGeometryIds.sort(Lh),c=this._availableGeometryIds.shift(),r[c]=i):(c=this._geometryCount,this._geometryCount++,r.push(i)),this.setGeometryAt(c,e),this._nextIndexStart=i.indexStart+i.reservedIndexCount,this._nextVertexStart=i.vertexStart+i.reservedVertexCount,c}setGeometryAt(e,t){if(e>=this._geometryCount)throw new Error("THREE.BatchedMesh: Maximum geometry count reached.");this._validateGeometry(t);const n=this.geometry,i=n.getIndex()!==null,r=n.getIndex(),a=t.getIndex(),o=this._geometryInfo[e];if(i&&a.count>o.reservedIndexCount||t.attributes.position.count>o.reservedVertexCount)throw new Error("THREE.BatchedMesh: Reserved space not large enough for provided geometry.");const c=o.vertexStart,l=o.reservedVertexCount;o.vertexCount=t.getAttribute("position").count;for(const h in n.attributes){const u=t.getAttribute(h),d=n.getAttribute(h);Jv(u,d,c);const f=u.itemSize;for(let p=u.count,g=l;p<g;p++){const x=c+p;for(let m=0;m<f;m++)d.setComponent(x,m,0)}d.needsUpdate=!0,d.addUpdateRange(c*f,l*f)}if(i){const h=o.indexStart,u=o.reservedIndexCount;o.indexCount=t.getIndex().count;for(let d=0;d<a.count;d++)r.setX(h+d,c+a.getX(d));for(let d=a.count,f=u;d<f;d++)r.setX(h+d,c);r.needsUpdate=!0,r.addUpdateRange(h,o.reservedIndexCount)}return o.start=i?o.indexStart:o.vertexStart,o.count=i?o.indexCount:o.vertexCount,o.boundingBox=null,t.boundingBox!==null&&(o.boundingBox=t.boundingBox.clone()),o.boundingSphere=null,t.boundingSphere!==null&&(o.boundingSphere=t.boundingSphere.clone()),this._visibilityChanged=!0,e}deleteGeometry(e){const t=this._geometryInfo;if(e>=t.length||t[e].active===!1)return this;const n=this._instanceInfo;for(let i=0,r=n.length;i<r;i++)n[i].active&&n[i].geometryIndex===e&&this.deleteInstance(i);return t[e].active=!1,this._availableGeometryIds.push(e),this._visibilityChanged=!0,this}deleteInstance(e){return this.validateInstanceId(e),this._instanceInfo[e].active=!1,this._availableInstanceIds.push(e),this._visibilityChanged=!0,this}optimize(){let e=0,t=0;const n=this._geometryInfo,i=n.map((a,o)=>o).sort((a,o)=>n[a].vertexStart-n[o].vertexStart),r=this.geometry;for(let a=0,o=n.length;a<o;a++){const c=i[a],l=n[c];if(l.active!==!1){if(r.index!==null){if(l.indexStart!==t){const{indexStart:h,vertexStart:u,reservedIndexCount:d}=l,f=r.index,p=f.array,g=e-u;for(let x=h;x<h+d;x++)p[x]=p[x]+g;f.array.copyWithin(t,h,h+d),f.addUpdateRange(t,d),l.indexStart=t}t+=l.reservedIndexCount}if(l.vertexStart!==e){const{vertexStart:h,reservedVertexCount:u}=l,d=r.attributes;for(const f in d){const p=d[f],{array:g,itemSize:x}=p;g.copyWithin(e*x,h*x,(h+u)*x),p.addUpdateRange(e*x,u*x)}l.vertexStart=e}e+=l.reservedVertexCount,l.start=r.index?l.indexStart:l.vertexStart,this._nextIndexStart=r.index?l.indexStart+l.reservedIndexCount:0,this._nextVertexStart=l.vertexStart+l.reservedVertexCount}}return this}getBoundingBoxAt(e,t){if(e>=this._geometryCount)return null;const n=this.geometry,i=this._geometryInfo[e];if(i.boundingBox===null){const r=new Rt,a=n.index,o=n.attributes.position;for(let c=i.start,l=i.start+i.count;c<l;c++){let h=c;a&&(h=a.getX(h)),r.expandByPoint(ra.fromBufferAttribute(o,h))}i.boundingBox=r}return t.copy(i.boundingBox),t}getBoundingSphereAt(e,t){if(e>=this._geometryCount)return null;const n=this.geometry,i=this._geometryInfo[e];if(i.boundingSphere===null){const r=new Pt;this.getBoundingBoxAt(e,Bo),Bo.getCenter(r.center);const a=n.index,o=n.attributes.position;let c=0;for(let l=i.start,h=i.start+i.count;l<h;l++){let u=l;a&&(u=a.getX(u)),ra.fromBufferAttribute(o,u),c=Math.max(c,r.center.distanceToSquared(ra))}r.radius=Math.sqrt(c),i.boundingSphere=r}return t.copy(i.boundingSphere),t}setMatrixAt(e,t){this.validateInstanceId(e);const n=this._matricesTexture,i=this._matricesTexture.image.data;return t.toArray(i,e*16),n.needsUpdate=!0,this}getMatrixAt(e,t){return this.validateInstanceId(e),t.fromArray(this._matricesTexture.image.data,e*16)}setColorAt(e,t){return this.validateInstanceId(e),this._colorsTexture===null&&this._initColorsTexture(),t.toArray(this._colorsTexture.image.data,e*4),this._colorsTexture.needsUpdate=!0,this}getColorAt(e,t){return this.validateInstanceId(e),t.fromArray(this._colorsTexture.image.data,e*4)}setVisibleAt(e,t){return this.validateInstanceId(e),this._instanceInfo[e].visible===t?this:(this._instanceInfo[e].visible=t,this._visibilityChanged=!0,this)}getVisibleAt(e){return this.validateInstanceId(e),this._instanceInfo[e].visible}setGeometryIdAt(e,t){return this.validateInstanceId(e),this.validateGeometryId(t),this._instanceInfo[e].geometryIndex=t,this}getGeometryIdAt(e){return this.validateInstanceId(e),this._instanceInfo[e].geometryIndex}getGeometryRangeAt(e,t={}){this.validateGeometryId(e);const n=this._geometryInfo[e];return t.vertexStart=n.vertexStart,t.vertexCount=n.vertexCount,t.reservedVertexCount=n.reservedVertexCount,t.indexStart=n.indexStart,t.indexCount=n.indexCount,t.reservedIndexCount=n.reservedIndexCount,t.start=n.start,t.count=n.count,t}setInstanceCount(e){const t=this._availableInstanceIds,n=this._instanceInfo;for(t.sort(Lh);t[t.length-1]===n.length-1;)n.pop(),t.pop();if(e<n.length)throw new Error(`BatchedMesh: Instance ids outside the range ${e} are being used. Cannot shrink instance count.`);const i=new Int32Array(e),r=new Int32Array(e);ps(this._multiDrawCounts,i),ps(this._multiDrawStarts,r),this._multiDrawCounts=i,this._multiDrawStarts=r,this._maxInstanceCount=e;const a=this._indirectTexture,o=this._matricesTexture,c=this._colorsTexture;a.dispose(),this._initIndirectTexture(),ps(a.image.data,this._indirectTexture.image.data),o.dispose(),this._initMatricesTexture(),ps(o.image.data,this._matricesTexture.image.data),c&&(c.dispose(),this._initColorsTexture(),ps(c.image.data,this._colorsTexture.image.data))}setGeometrySize(e,t){const n=[...this._geometryInfo].filter(o=>o.active);if(Math.max(...n.map(o=>o.vertexStart+o.reservedVertexCount))>e)throw new Error(`BatchedMesh: Geometry vertex values are being used outside the range ${t}. Cannot shrink further.`);if(this.geometry.index&&Math.max(...n.map(c=>c.indexStart+c.reservedIndexCount))>t)throw new Error(`BatchedMesh: Geometry index values are being used outside the range ${t}. Cannot shrink further.`);const r=this.geometry;r.dispose(),this._maxVertexCount=e,this._maxIndexCount=t,this._geometryInitialized&&(this._geometryInitialized=!1,this.geometry=new Ye,this._initializeGeometry(r));const a=this.geometry;r.index&&ps(r.index.array,a.index.array);for(const o in r.attributes)ps(r.attributes[o].array,a.attributes[o].array)}raycast(e,t){const n=this._instanceInfo,i=this._geometryInfo,r=this.matrixWorld,a=this.geometry;Wt.material=this.material,Wt.geometry.index=a.index,Wt.geometry.attributes=a.attributes,Wt.geometry.boundingBox===null&&(Wt.geometry.boundingBox=new Rt),Wt.geometry.boundingSphere===null&&(Wt.geometry.boundingSphere=new Pt);for(let o=0,c=n.length;o<c;o++){if(!n[o].visible||!n[o].active)continue;const l=n[o].geometryIndex,h=i[l];Wt.geometry.setDrawRange(h.start,h.count),this.getMatrixAt(o,Wt.matrixWorld).premultiply(r),this.getBoundingBoxAt(l,Wt.geometry.boundingBox),this.getBoundingSphereAt(l,Wt.geometry.boundingSphere),Wt.raycast(e,zo);for(let u=0,d=zo.length;u<d;u++){const f=zo[u];f.object=this,f.batchId=o,t.push(f)}zo.length=0}Wt.material=null,Wt.geometry.index=null,Wt.geometry.attributes={},Wt.geometry.setDrawRange(0,1/0)}copy(e){return super.copy(e),this.geometry=e.geometry.clone(),this.perObjectFrustumCulled=e.perObjectFrustumCulled,this.sortObjects=e.sortObjects,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this._geometryInfo=e._geometryInfo.map(t=>({...t,boundingBox:t.boundingBox!==null?t.boundingBox.clone():null,boundingSphere:t.boundingSphere!==null?t.boundingSphere.clone():null})),this._instanceInfo=e._instanceInfo.map(t=>({...t})),this._availableInstanceIds=e._availableInstanceIds.slice(),this._availableGeometryIds=e._availableGeometryIds.slice(),this._nextIndexStart=e._nextIndexStart,this._nextVertexStart=e._nextVertexStart,this._geometryCount=e._geometryCount,this._maxInstanceCount=e._maxInstanceCount,this._maxVertexCount=e._maxVertexCount,this._maxIndexCount=e._maxIndexCount,this._geometryInitialized=e._geometryInitialized,this._multiDrawCounts=e._multiDrawCounts.slice(),this._multiDrawStarts=e._multiDrawStarts.slice(),this._indirectTexture=e._indirectTexture.clone(),this._indirectTexture.image.data=this._indirectTexture.image.data.slice(),this._matricesTexture=e._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.data.slice(),this._colorsTexture!==null&&(this._colorsTexture=e._colorsTexture.clone(),this._colorsTexture.image.data=this._colorsTexture.image.data.slice()),this}dispose(){this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this._indirectTexture.dispose(),this._indirectTexture=null,this._colorsTexture!==null&&(this._colorsTexture.dispose(),this._colorsTexture=null)}onBeforeRender(e,t,n,i,r){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;const a=i.getIndex(),o=a===null?1:a.array.BYTES_PER_ELEMENT,c=this._instanceInfo,l=this._multiDrawStarts,h=this._multiDrawCounts,u=this._geometryInfo,d=this.perObjectFrustumCulled,f=this._indirectTexture,p=f.image.data,g=n.isArrayCamera?$v:Ef;d&&!n.isArrayCamera&&(on.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse).multiply(this.matrixWorld),Ef.setFromProjectionMatrix(on,n.coordinateSystem,n.reversedDepth));let x=0;if(this.sortObjects){on.copy(this.matrixWorld).invert(),ra.setFromMatrixPosition(n.matrixWorld).applyMatrix4(on),Af.set(0,0,-1).transformDirection(n.matrixWorld).transformDirection(on);for(let _=0,y=c.length;_<y;_++)if(c[_].visible&&c[_].active){const A=c[_].geometryIndex;this.getMatrixAt(_,on),this.getBoundingSphereAt(A,fs).applyMatrix4(on);let w=!1;if(d&&(w=!g.intersectsSphere(fs,n)),!w){const P=u[A],I=Kv.subVectors(fs.center,ra).dot(Af);Uh.push(P.start,P.count,I,_)}}const m=Uh.list,v=this.customSort;v===null?m.sort(r.transparent?qv:Xv):v.call(this,m,n);for(let _=0,y=m.length;_<y;_++){const A=m[_];l[x]=A.start*o,h[x]=A.count,p[x]=A.index,x++}Uh.reset()}else for(let m=0,v=c.length;m<v;m++)if(c[m].visible&&c[m].active){const _=c[m].geometryIndex;let y=!1;if(d&&(this.getMatrixAt(m,on),this.getBoundingSphereAt(_,fs).applyMatrix4(on),y=!g.intersectsSphere(fs,n)),!y){const A=u[_];l[x]=A.start*o,h[x]=A.count,p[x]=m,x++}}f.needsUpdate=!0,this._multiDrawCount=x,this._visibilityChanged=!1}onBeforeShadow(e,t,n,i,r,a){this.onBeforeRender(e,null,i,r,a)}}class sn extends Zt{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new _e(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const nl=new E,il=new E,Cf=new De,aa=new Li,ko=new Pt,Nh=new E,Rf=new E;class ts extends nt{constructor(e=new Ye,t=new sn){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)nl.fromBufferAttribute(t,i-1),il.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=nl.distanceTo(il);e.setAttribute("lineDistance",new Se(n,1))}else me("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ko.copy(n.boundingSphere),ko.applyMatrix4(i),ko.radius+=r,e.ray.intersectsSphere(ko)===!1)return;Cf.copy(i).invert(),aa.copy(e.ray).applyMatrix4(Cf);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let g=f,x=p-1;g<x;g+=l){const m=h.getX(g),v=h.getX(g+1),_=Vo(this,e,aa,c,m,v,g);_&&t.push(_)}if(this.isLineLoop){const g=h.getX(p-1),x=h.getX(f),m=Vo(this,e,aa,c,g,x,p-1);m&&t.push(m)}}else{const f=Math.max(0,a.start),p=Math.min(d.count,a.start+a.count);for(let g=f,x=p-1;g<x;g+=l){const m=Vo(this,e,aa,c,g,g+1,g);m&&t.push(m)}if(this.isLineLoop){const g=Vo(this,e,aa,c,p-1,f,p-1);g&&t.push(g)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Vo(s,e,t,n,i,r,a){const o=s.geometry.attributes.position;if(nl.fromBufferAttribute(o,i),il.fromBufferAttribute(o,r),t.distanceSqToSegment(nl,il,Nh,Rf)>n)return;Nh.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(Nh);if(!(l<e.near||l>e.far))return{distance:l,point:Rf.clone().applyMatrix4(s.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:s}}const Pf=new E,If=new E;class li extends ts{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Pf.fromBufferAttribute(t,i),If.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Pf.distanceTo(If);e.setAttribute("lineDistance",new Se(n,1))}else me("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class E0 extends ts{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}let id=class extends Zt{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new _e(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}};const Df=new De,pu=new Li,Go=new Pt,Ho=new E;class A0 extends nt{constructor(e=new Ye,t=new id){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Go.copy(n.boundingSphere),Go.applyMatrix4(i),Go.radius+=r,e.ray.intersectsSphere(Go)===!1)return;Df.copy(i).invert(),pu.copy(e.ray).applyMatrix4(Df);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,u=n.attributes.position;if(l!==null){const d=Math.max(0,a.start),f=Math.min(l.count,a.start+a.count);for(let p=d,g=f;p<g;p++){const x=l.getX(p);Ho.fromBufferAttribute(u,x),Lf(Ho,x,c,i,e,t,this)}}else{const d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let p=d,g=f;p<g;p++)Ho.fromBufferAttribute(u,p),Lf(Ho,p,c,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Lf(s,e,t,n,i,r,a){const o=pu.distanceSqToPoint(s);if(o<t){const c=new E;pu.closestPointToPoint(s,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class C0 extends Tt{constructor(e,t,n,i,r=At,a=At,o,c,l){super(e,t,n,i,r,a,o,c,l),this.isVideoTexture=!0,this.generateMipmaps=!1,this._requestVideoFrameCallbackId=0;const h=this;function u(){h.needsUpdate=!0,h._requestVideoFrameCallbackId=e.requestVideoFrameCallback(u)}"requestVideoFrameCallback"in e&&(this._requestVideoFrameCallbackId=e.requestVideoFrameCallback(u))}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}dispose(){this._requestVideoFrameCallbackId!==0&&(this.source.data.cancelVideoFrameCallback(this._requestVideoFrameCallbackId),this._requestVideoFrameCallbackId=0),super.dispose()}}class jv extends C0{constructor(e,t,n,i,r,a,o,c){super({},e,t,n,i,r,a,o,c),this.isVideoFrameTexture=!0}update(){}clone(){return new this.constructor().copy(this)}setFrame(e){this.image=e,this.needsUpdate=!0}}class Qv extends Tt{constructor(e,t){super({width:e,height:t}),this.isFramebufferTexture=!0,this.magFilter=kt,this.minFilter=kt,this.generateMipmaps=!1,this.needsUpdate=!0}}class zl extends Tt{constructor(e,t,n,i,r,a,o,c,l,h,u,d){super(null,a,o,c,l,h,i,r,u,d),this.isCompressedTexture=!0,this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}class ey extends zl{constructor(e,t,n,i,r,a){super(e,t,n,r,a),this.isCompressedArrayTexture=!0,this.image.depth=i,this.wrapR=dn,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ty extends zl{constructor(e,t,n){super(void 0,e[0].width,e[0].height,t,n,Ai),this.isCompressedCubeTexture=!0,this.isCubeTexture=!0,this.image=e}}class ny extends Tt{constructor(e,t,n,i,r,a,o,c,l){super(e,t,n,i,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class sd extends Tt{constructor(e,t,n=Ci,i,r,a,o=kt,c=kt,l,h=Nr,u=1){if(h!==Nr&&h!==Fr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:u};super(d,i,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Xi(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class rd extends Tt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class kl extends Ye{constructor(e=1,t=1,n=4,i=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:i,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),i=Math.max(3,Math.floor(i)),r=Math.max(1,Math.floor(r));const a=[],o=[],c=[],l=[],h=t/2,u=Math.PI/2*e,d=t,f=2*u+d,p=n*2+r,g=i+1,x=new E,m=new E;for(let v=0;v<=p;v++){let _=0,y=0,A=0,w=0;if(v<=n){const S=v/n,M=S*Math.PI/2;y=-h-e*Math.cos(M),A=e*Math.sin(M),w=-e*Math.cos(M),_=S*u}else if(v<=n+r){const S=(v-n)/r;y=-h+S*t,A=e,w=0,_=u+S*d}else{const S=(v-n-r)/n,M=S*Math.PI/2;y=h+e*Math.sin(M),A=e*Math.cos(M),w=e*Math.sin(M),_=u+d+S*u}const P=Math.max(0,Math.min(1,_/f));let I=0;v===0?I=.5/i:v===p&&(I=-.5/i);for(let S=0;S<=i;S++){const M=S/i,D=M*Math.PI*2,F=Math.sin(D),B=Math.cos(D);m.x=-A*B,m.y=y,m.z=A*F,o.push(m.x,m.y,m.z),x.set(-A*B,w,A*F),x.normalize(),c.push(x.x,x.y,x.z),l.push(M+I,P)}if(v>0){const S=(v-1)*g;for(let M=0;M<i;M++){const D=S+M,F=S+M+1,B=v*g+M,q=v*g+M+1;a.push(D,F,B),a.push(F,q,B)}}}this.setIndex(a),this.setAttribute("position",new Se(o,3)),this.setAttribute("normal",new Se(c,3)),this.setAttribute("uv",new Se(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new kl(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class Vl extends Ye{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const r=[],a=[],o=[],c=[],l=new E,h=new X;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){const f=n+u/t*i;l.x=e*Math.cos(f),l.y=e*Math.sin(f),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,c.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Se(a,3)),this.setAttribute("normal",new Se(o,3)),this.setAttribute("uv",new Se(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vl(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class no extends Ye{constructor(e=1,t=1,n=1,i=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const l=this;i=Math.floor(i),r=Math.floor(r);const h=[],u=[],d=[],f=[];let p=0;const g=[],x=n/2;let m=0;v(),a===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new Se(u,3)),this.setAttribute("normal",new Se(d,3)),this.setAttribute("uv",new Se(f,2));function v(){const y=new E,A=new E;let w=0;const P=(t-e)/n;for(let I=0;I<=r;I++){const S=[],M=I/r,D=M*(t-e)+e;for(let F=0;F<=i;F++){const B=F/i,q=B*c+o,G=Math.sin(q),Y=Math.cos(q);A.x=D*G,A.y=-M*n+x,A.z=D*Y,u.push(A.x,A.y,A.z),y.set(G,P,Y).normalize(),d.push(y.x,y.y,y.z),f.push(B,1-M),S.push(p++)}g.push(S)}for(let I=0;I<i;I++)for(let S=0;S<r;S++){const M=g[S][I],D=g[S+1][I],F=g[S+1][I+1],B=g[S][I+1];(e>0||S!==0)&&(h.push(M,D,B),w+=3),(t>0||S!==r-1)&&(h.push(D,F,B),w+=3)}l.addGroup(m,w,0),m+=w}function _(y){const A=p,w=new X,P=new E;let I=0;const S=y===!0?e:t,M=y===!0?1:-1;for(let F=1;F<=i;F++)u.push(0,x*M,0),d.push(0,M,0),f.push(.5,.5),p++;const D=p;for(let F=0;F<=i;F++){const q=F/i*c+o,G=Math.cos(q),Y=Math.sin(q);P.x=S*Y,P.y=x*M,P.z=S*G,u.push(P.x,P.y,P.z),d.push(0,M,0),w.x=G*.5+.5,w.y=Y*.5*M+.5,f.push(w.x,w.y),p++}for(let F=0;F<i;F++){const B=A+F,q=D+F;y===!0?h.push(q,q+1,B):h.push(q+1,q,B),I+=3}l.addGroup(m,I,y===!0?1:2),m+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new no(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class io extends no{constructor(e=1,t=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new io(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class rs extends Ye{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const r=[],a=[];o(i),l(n),h(),this.setAttribute("position",new Se(r,3)),this.setAttribute("normal",new Se(r.slice(),3)),this.setAttribute("uv",new Se(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(v){const _=new E,y=new E,A=new E;for(let w=0;w<t.length;w+=3)f(t[w+0],_),f(t[w+1],y),f(t[w+2],A),c(_,y,A,v)}function c(v,_,y,A){const w=A+1,P=[];for(let I=0;I<=w;I++){P[I]=[];const S=v.clone().lerp(y,I/w),M=_.clone().lerp(y,I/w),D=w-I;for(let F=0;F<=D;F++)F===0&&I===w?P[I][F]=S:P[I][F]=S.clone().lerp(M,F/D)}for(let I=0;I<w;I++)for(let S=0;S<2*(w-I)-1;S++){const M=Math.floor(S/2);S%2===0?(d(P[I][M+1]),d(P[I+1][M]),d(P[I][M])):(d(P[I][M+1]),d(P[I+1][M+1]),d(P[I+1][M]))}}function l(v){const _=new E;for(let y=0;y<r.length;y+=3)_.x=r[y+0],_.y=r[y+1],_.z=r[y+2],_.normalize().multiplyScalar(v),r[y+0]=_.x,r[y+1]=_.y,r[y+2]=_.z}function h(){const v=new E;for(let _=0;_<r.length;_+=3){v.x=r[_+0],v.y=r[_+1],v.z=r[_+2];const y=x(v)/2/Math.PI+.5,A=m(v)/Math.PI+.5;a.push(y,1-A)}p(),u()}function u(){for(let v=0;v<a.length;v+=6){const _=a[v+0],y=a[v+2],A=a[v+4],w=Math.max(_,y,A),P=Math.min(_,y,A);w>.9&&P<.1&&(_<.2&&(a[v+0]+=1),y<.2&&(a[v+2]+=1),A<.2&&(a[v+4]+=1))}}function d(v){r.push(v.x,v.y,v.z)}function f(v,_){const y=v*3;_.x=e[y+0],_.y=e[y+1],_.z=e[y+2]}function p(){const v=new E,_=new E,y=new E,A=new E,w=new X,P=new X,I=new X;for(let S=0,M=0;S<r.length;S+=9,M+=6){v.set(r[S+0],r[S+1],r[S+2]),_.set(r[S+3],r[S+4],r[S+5]),y.set(r[S+6],r[S+7],r[S+8]),w.set(a[M+0],a[M+1]),P.set(a[M+2],a[M+3]),I.set(a[M+4],a[M+5]),A.copy(v).add(_).add(y).divideScalar(3);const D=x(A);g(w,M+0,v,D),g(P,M+2,_,D),g(I,M+4,y,D)}}function g(v,_,y,A){A<0&&v.x===1&&(a[_]=v.x-1),y.x===0&&y.z===0&&(a[_]=A/2/Math.PI+.5)}function x(v){return Math.atan2(v.z,-v.x)}function m(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rs(e.vertices,e.indices,e.radius,e.details)}}class Gl extends rs{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Gl(e.radius,e.detail)}}const Wo=new E,Xo=new E,Fh=new E,qo=new un;class R0 extends Ye{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const i=Math.pow(10,4),r=Math.cos(Us*t),a=e.getIndex(),o=e.getAttribute("position"),c=a?a.count:o.count,l=[0,0,0],h=["a","b","c"],u=new Array(3),d={},f=[];for(let p=0;p<c;p+=3){a?(l[0]=a.getX(p),l[1]=a.getX(p+1),l[2]=a.getX(p+2)):(l[0]=p,l[1]=p+1,l[2]=p+2);const{a:g,b:x,c:m}=qo;if(g.fromBufferAttribute(o,l[0]),x.fromBufferAttribute(o,l[1]),m.fromBufferAttribute(o,l[2]),qo.getNormal(Fh),u[0]=`${Math.round(g.x*i)},${Math.round(g.y*i)},${Math.round(g.z*i)}`,u[1]=`${Math.round(x.x*i)},${Math.round(x.y*i)},${Math.round(x.z*i)}`,u[2]=`${Math.round(m.x*i)},${Math.round(m.y*i)},${Math.round(m.z*i)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let v=0;v<3;v++){const _=(v+1)%3,y=u[v],A=u[_],w=qo[h[v]],P=qo[h[_]],I=`${y}_${A}`,S=`${A}_${y}`;S in d&&d[S]?(Fh.dot(d[S].normal)<=r&&(f.push(w.x,w.y,w.z),f.push(P.x,P.y,P.z)),d[S]=null):I in d||(d[I]={index0:l[v],index1:l[_],normal:Fh.clone()})}}for(const p in d)if(d[p]){const{index0:g,index1:x}=d[p];Wo.fromBufferAttribute(o,g),Xo.fromBufferAttribute(o,x),f.push(Wo.x,Wo.y,Wo.z),f.push(Xo.x,Xo.y,Xo.z)}this.setAttribute("position",new Se(f,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Zn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){me("Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let i=0;const r=n.length;let a;t?a=t:a=e*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(i=Math.floor(o+(c-o)/2),l=n[i]-a,l<0)o=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===a)return i/(r-1);const h=n[i],d=n[i+1]-h,f=(a-h)/d;return(i+f)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);const a=this.getPoint(i),o=this.getPoint(r),c=t||(a.isVector2?new X:new E);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new E,i=[],r=[],a=[],o=new E,c=new De;for(let f=0;f<=e;f++){const p=f/e;i[f]=this.getTangentAt(p,new E)}r[0]=new E,a[0]=new E;let l=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),a[0].crossVectors(i[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(i[f-1],i[f]),o.length()>Number.EPSILON){o.normalize();const p=Math.acos(ke(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(o,p))}a[f].crossVectors(i[f],r[f])}if(t===!0){let f=Math.acos(ke(r[0].dot(r[e]),-1,1));f/=e,i[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let p=1;p<=e;p++)r[p].applyMatrix4(c.makeRotationAxis(i[p],f*p)),a[p].crossVectors(i[p],r[p])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Hl extends Zn{constructor(e=0,t=0,n=1,i=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(e,t=new X){const n=t,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(a?r=0:r=i),this.aClockwise===!0&&!a&&(r===i?r=-i:r=r-i);const o=this.aStartAngle+e*r;let c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*h-f*u+this.aX,l=d*u+f*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class P0 extends Hl{constructor(e,t,n,i,r,a){super(e,t,n,n,i,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function ad(){let s=0,e=0,t=0,n=0;function i(r,a,o,c){s=r,e=o,t=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){i(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,h,u){let d=(a-r)/l-(o-r)/(l+h)+(o-a)/h,f=(o-a)/h-(c-a)/(h+u)+(c-o)/u;d*=h,f*=h,i(a,o,d,f)},calc:function(r){const a=r*r,o=a*r;return s+e*r+t*a+n*o}}}const Yo=new E,Oh=new ad,Bh=new ad,zh=new ad;class I0 extends Zn{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new E){const n=t,i=this.points,r=i.length,a=(r-(this.closed?0:1))*e;let o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,h;this.closed||o>0?l=i[(o-1)%r]:(Yo.subVectors(i[0],i[1]).add(i[0]),l=Yo);const u=i[o%r],d=i[(o+1)%r];if(this.closed||o+2<r?h=i[(o+2)%r]:(Yo.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=Yo),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let p=Math.pow(l.distanceToSquared(u),f),g=Math.pow(u.distanceToSquared(d),f),x=Math.pow(d.distanceToSquared(h),f);g<1e-4&&(g=1),p<1e-4&&(p=g),x<1e-4&&(x=g),Oh.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,p,g,x),Bh.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,p,g,x),zh.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,p,g,x)}else this.curveType==="catmullrom"&&(Oh.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),Bh.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),zh.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(Oh.calc(c),Bh.calc(c),zh.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new E().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Uf(s,e,t,n,i){const r=(n-e)*.5,a=(i-t)*.5,o=s*s,c=s*o;return(2*t-2*n+r+a)*c+(-3*t+3*n-2*r-a)*o+r*s+t}function iy(s,e){const t=1-s;return t*t*e}function sy(s,e){return 2*(1-s)*s*e}function ry(s,e){return s*s*e}function Sa(s,e,t,n){return iy(s,e)+sy(s,t)+ry(s,n)}function ay(s,e){const t=1-s;return t*t*t*e}function oy(s,e){const t=1-s;return 3*t*t*s*e}function cy(s,e){return 3*(1-s)*s*s*e}function ly(s,e){return s*s*s*e}function wa(s,e,t,n,i){return ay(s,e)+oy(s,t)+cy(s,n)+ly(s,i)}class od extends Zn{constructor(e=new X,t=new X,n=new X,i=new X){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new X){const n=t,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(wa(e,i.x,r.x,a.x,o.x),wa(e,i.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class D0 extends Zn{constructor(e=new E,t=new E,n=new E,i=new E){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new E){const n=t,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(wa(e,i.x,r.x,a.x,o.x),wa(e,i.y,r.y,a.y,o.y),wa(e,i.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class cd extends Zn{constructor(e=new X,t=new X){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new X){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new X){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class L0 extends Zn{constructor(e=new E,t=new E){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new E){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new E){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ld extends Zn{constructor(e=new X,t=new X,n=new X){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new X){const n=t,i=this.v0,r=this.v1,a=this.v2;return n.set(Sa(e,i.x,r.x,a.x),Sa(e,i.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class hd extends Zn{constructor(e=new E,t=new E,n=new E){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new E){const n=t,i=this.v0,r=this.v1,a=this.v2;return n.set(Sa(e,i.x,r.x,a.x),Sa(e,i.y,r.y,a.y),Sa(e,i.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ud extends Zn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new X){const n=t,i=this.points,r=(i.length-1)*e,a=Math.floor(r),o=r-a,c=i[a===0?a:a-1],l=i[a],h=i[a>i.length-2?i.length-1:a+1],u=i[a>i.length-3?i.length-1:a+2];return n.set(Uf(o,c.x,l.x,h.x,u.x),Uf(o,c.y,l.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new X().fromArray(i))}return this}}var sl=Object.freeze({__proto__:null,ArcCurve:P0,CatmullRomCurve3:I0,CubicBezierCurve:od,CubicBezierCurve3:D0,EllipseCurve:Hl,LineCurve:cd,LineCurve3:L0,QuadraticBezierCurve:ld,QuadraticBezierCurve3:hd,SplineCurve:ud});class U0 extends Zn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new sl[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const a=i[r]-n,o=this.curves[r],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const a=r[i],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,c=a.getPoints(o);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new sl[i.type]().fromJSON(i))}return this}}class rl extends U0{constructor(e){super(),this.type="Path",this.currentPoint=new X,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new cd(this.currentPoint.clone(),new X(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const r=new ld(this.currentPoint.clone(),new X(e,t),new X(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,a){const o=new od(this.currentPoint.clone(),new X(e,t),new X(n,i),new X(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new ud(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,a){const o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+o,t+c,n,i,r,a),this}absarc(e,t,n,i,r,a){return this.absellipse(e,t,n,n,i,r,a),this}ellipse(e,t,n,i,r,a,o,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,i,r,a,o,c),this}absellipse(e,t,n,i,r,a,o,c){const l=new Hl(e,t,n,i,r,a,o,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Ns extends rl{constructor(e){super(e),this.uuid=Sn(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new rl().fromJSON(i))}return this}}function hy(s,e,t=2){const n=e&&e.length,i=n?e[0]*t:s.length;let r=N0(s,0,i,t,!0);const a=[];if(!r||r.next===r.prev)return a;let o,c,l;if(n&&(r=my(s,e,r,t)),s.length>80*t){o=s[0],c=s[1];let h=o,u=c;for(let d=t;d<i;d+=t){const f=s[d],p=s[d+1];f<o&&(o=f),p<c&&(c=p),f>h&&(h=f),p>u&&(u=p)}l=Math.max(h-o,u-c),l=l!==0?32767/l:0}return ka(r,a,t,o,c,l,0),a}function N0(s,e,t,n,i){let r;if(i===Ey(s,e,t,n)>0)for(let a=e;a<t;a+=n)r=Nf(a/n|0,s[a],s[a+1],r);else for(let a=t-n;a>=e;a-=n)r=Nf(a/n|0,s[a],s[a+1],r);return r&&Gr(r,r.next)&&(Ga(r),r=r.next),r}function Gs(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(Gr(t,t.next)||vt(t.prev,t,t.next)===0)){if(Ga(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function ka(s,e,t,n,i,r,a){if(!s)return;!a&&r&&yy(s,n,i,r);let o=s;for(;s.prev!==s.next;){const c=s.prev,l=s.next;if(r?dy(s,n,i,r):uy(s)){e.push(c.i,s.i,l.i),Ga(s),s=l.next,o=l.next;continue}if(s=l,s===o){a?a===1?(s=fy(Gs(s),e),ka(s,e,t,n,i,r,2)):a===2&&py(s,e,t,n,i,r):ka(Gs(s),e,t,n,i,r,1);break}}}function uy(s){const e=s.prev,t=s,n=s.next;if(vt(e,t,n)>=0)return!1;const i=e.x,r=t.x,a=n.x,o=e.y,c=t.y,l=n.y,h=Math.min(i,r,a),u=Math.min(o,c,l),d=Math.max(i,r,a),f=Math.max(o,c,l);let p=n.next;for(;p!==e;){if(p.x>=h&&p.x<=d&&p.y>=u&&p.y<=f&&ua(i,o,r,c,a,l,p.x,p.y)&&vt(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function dy(s,e,t,n){const i=s.prev,r=s,a=s.next;if(vt(i,r,a)>=0)return!1;const o=i.x,c=r.x,l=a.x,h=i.y,u=r.y,d=a.y,f=Math.min(o,c,l),p=Math.min(h,u,d),g=Math.max(o,c,l),x=Math.max(h,u,d),m=mu(f,p,e,t,n),v=mu(g,x,e,t,n);let _=s.prevZ,y=s.nextZ;for(;_&&_.z>=m&&y&&y.z<=v;){if(_.x>=f&&_.x<=g&&_.y>=p&&_.y<=x&&_!==i&&_!==a&&ua(o,h,c,u,l,d,_.x,_.y)&&vt(_.prev,_,_.next)>=0||(_=_.prevZ,y.x>=f&&y.x<=g&&y.y>=p&&y.y<=x&&y!==i&&y!==a&&ua(o,h,c,u,l,d,y.x,y.y)&&vt(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;_&&_.z>=m;){if(_.x>=f&&_.x<=g&&_.y>=p&&_.y<=x&&_!==i&&_!==a&&ua(o,h,c,u,l,d,_.x,_.y)&&vt(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;y&&y.z<=v;){if(y.x>=f&&y.x<=g&&y.y>=p&&y.y<=x&&y!==i&&y!==a&&ua(o,h,c,u,l,d,y.x,y.y)&&vt(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function fy(s,e){let t=s;do{const n=t.prev,i=t.next.next;!Gr(n,i)&&O0(n,t,t.next,i)&&Va(n,i)&&Va(i,n)&&(e.push(n.i,t.i,i.i),Ga(t),Ga(t.next),t=s=i),t=t.next}while(t!==s);return Gs(t)}function py(s,e,t,n,i,r){let a=s;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Sy(a,o)){let c=B0(a,o);a=Gs(a,a.next),c=Gs(c,c.next),ka(a,e,t,n,i,r,0),ka(c,e,t,n,i,r,0);return}o=o.next}a=a.next}while(a!==s)}function my(s,e,t,n){const i=[];for(let r=0,a=e.length;r<a;r++){const o=e[r]*n,c=r<a-1?e[r+1]*n:s.length,l=N0(s,o,c,n,!1);l===l.next&&(l.steiner=!0),i.push(My(l))}i.sort(xy);for(let r=0;r<i.length;r++)t=gy(i[r],t);return t}function xy(s,e){let t=s.x-e.x;if(t===0&&(t=s.y-e.y,t===0)){const n=(s.next.y-s.y)/(s.next.x-s.x),i=(e.next.y-e.y)/(e.next.x-e.x);t=n-i}return t}function gy(s,e){const t=_y(s,e);if(!t)return e;const n=B0(t,s);return Gs(n,n.next),Gs(t,t.next)}function _y(s,e){let t=e;const n=s.x,i=s.y;let r=-1/0,a;if(Gr(s,t))return t;do{if(Gr(s,t.next))return t.next;if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){const u=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=n&&u>r&&(r=u,a=t.x<t.next.x?t:t.next,u===n))return a}t=t.next}while(t!==e);if(!a)return null;const o=a,c=a.x,l=a.y;let h=1/0;t=a;do{if(n>=t.x&&t.x>=c&&n!==t.x&&F0(i<l?n:r,i,c,l,i<l?r:n,i,t.x,t.y)){const u=Math.abs(i-t.y)/(n-t.x);Va(t,s)&&(u<h||u===h&&(t.x>a.x||t.x===a.x&&vy(a,t)))&&(a=t,h=u)}t=t.next}while(t!==o);return a}function vy(s,e){return vt(s.prev,s,e.prev)<0&&vt(e.next,s,s.next)<0}function yy(s,e,t,n){let i=s;do i.z===0&&(i.z=mu(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,by(i)}function by(s){let e,t=1;do{let n=s,i;s=null;let r=null;for(e=0;n;){e++;let a=n,o=0;for(let l=0;l<t&&(o++,a=a.nextZ,!!a);l++);let c=t;for(;o>0||c>0&&a;)o!==0&&(c===0||!a||n.z<=a.z)?(i=n,n=n.nextZ,o--):(i=a,a=a.nextZ,c--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;n=a}r.nextZ=null,t*=2}while(e>1);return s}function mu(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function My(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function F0(s,e,t,n,i,r,a,o){return(i-a)*(e-o)>=(s-a)*(r-o)&&(s-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(i-a)*(n-o)}function ua(s,e,t,n,i,r,a,o){return!(s===a&&e===o)&&F0(s,e,t,n,i,r,a,o)}function Sy(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!wy(s,e)&&(Va(s,e)&&Va(e,s)&&Ty(s,e)&&(vt(s.prev,s,e.prev)||vt(s,e.prev,e))||Gr(s,e)&&vt(s.prev,s,s.next)>0&&vt(e.prev,e,e.next)>0)}function vt(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function Gr(s,e){return s.x===e.x&&s.y===e.y}function O0(s,e,t,n){const i=$o(vt(s,e,t)),r=$o(vt(s,e,n)),a=$o(vt(t,n,s)),o=$o(vt(t,n,e));return!!(i!==r&&a!==o||i===0&&Zo(s,t,e)||r===0&&Zo(s,n,e)||a===0&&Zo(t,s,n)||o===0&&Zo(t,e,n))}function Zo(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function $o(s){return s>0?1:s<0?-1:0}function wy(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&O0(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function Va(s,e){return vt(s.prev,s,s.next)<0?vt(s,e,s.next)>=0&&vt(s,s.prev,e)>=0:vt(s,e,s.prev)<0||vt(s,s.next,e)<0}function Ty(s,e){let t=s,n=!1;const i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function B0(s,e){const t=xu(s.i,s.x,s.y),n=xu(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Nf(s,e,t,n){const i=xu(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Ga(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function xu(s,e,t){return{i:s,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Ey(s,e,t,n){let i=0;for(let r=e,a=t-n;r<t;r+=n)i+=(s[a]-s[r])*(s[r+1]+s[a+1]),a=r;return i}class Ay{static triangulate(e,t,n=2){return hy(e,t,n)}}class Gn{static area(e){const t=e.length;let n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return Gn.area(e)<0}static triangulateShape(e,t){const n=[],i=[],r=[];Ff(e),Of(n,e);let a=e.length;t.forEach(Ff);for(let c=0;c<t.length;c++)i.push(a),a+=t[c].length,Of(n,t[c]);const o=Ay.triangulate(n,i);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}}function Ff(s){const e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function Of(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}class Wl extends Ye{constructor(e=new Ns([new X(.5,.5),new X(-.5,.5),new X(-.5,-.5),new X(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],r=[];for(let o=0,c=e.length;o<c;o++){const l=e[o];a(l)}this.setAttribute("position",new Se(i,3)),this.setAttribute("uv",new Se(r,2)),this.computeVertexNormals();function a(o){const c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1;let d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:f-.1,g=t.bevelOffset!==void 0?t.bevelOffset:0,x=t.bevelSegments!==void 0?t.bevelSegments:3;const m=t.extrudePath,v=t.UVGenerator!==void 0?t.UVGenerator:Cy;let _,y=!1,A,w,P,I;m&&(_=m.getSpacedPoints(h),y=!0,d=!1,A=m.computeFrenetFrames(h,!1),w=new E,P=new E,I=new E),d||(x=0,f=0,p=0,g=0);const S=o.extractPoints(l);let M=S.shape;const D=S.holes;if(!Gn.isClockWise(M)){M=M.reverse();for(let ee=0,R=D.length;ee<R;ee++){const Q=D[ee];Gn.isClockWise(Q)&&(D[ee]=Q.reverse())}}function B(ee){const Q=10000000000000001e-36;let se=ee[0];for(let oe=1;oe<=ee.length;oe++){const ne=oe%ee.length,Te=ee[ne],fe=Te.x-se.x,be=Te.y-se.y,C=fe*fe+be*be,b=Math.max(Math.abs(Te.x),Math.abs(Te.y),Math.abs(se.x),Math.abs(se.y)),O=Q*b*b;if(C<=O){ee.splice(ne,1),oe--;continue}se=Te}}B(M),D.forEach(B);const q=D.length,G=M;for(let ee=0;ee<q;ee++){const R=D[ee];M=M.concat(R)}function Y(ee,R,Q){return R||We("ExtrudeGeometry: vec does not exist"),ee.clone().addScaledVector(R,Q)}const J=M.length;function W(ee,R,Q){let se,oe,ne;const Te=ee.x-R.x,fe=ee.y-R.y,be=Q.x-ee.x,C=Q.y-ee.y,b=Te*Te+fe*fe,O=Te*C-fe*be;if(Math.abs(O)>Number.EPSILON){const H=Math.sqrt(b),K=Math.sqrt(be*be+C*C),V=R.x-fe/H,Ie=R.y+Te/H,pe=Q.x-C/K,Le=Q.y+be/K,Re=((pe-V)*C-(Le-Ie)*be)/(Te*C-fe*be);se=V+Te*Re-ee.x,oe=Ie+fe*Re-ee.y;const te=se*se+oe*oe;if(te<=2)return new X(se,oe);ne=Math.sqrt(te/2)}else{let H=!1;Te>Number.EPSILON?be>Number.EPSILON&&(H=!0):Te<-Number.EPSILON?be<-Number.EPSILON&&(H=!0):Math.sign(fe)===Math.sign(C)&&(H=!0),H?(se=-fe,oe=Te,ne=Math.sqrt(b)):(se=Te,oe=fe,ne=Math.sqrt(b/2))}return new X(se/ne,oe/ne)}const re=[];for(let ee=0,R=G.length,Q=R-1,se=ee+1;ee<R;ee++,Q++,se++)Q===R&&(Q=0),se===R&&(se=0),re[ee]=W(G[ee],G[Q],G[se]);const ce=[];let Ce,Ke=re.concat();for(let ee=0,R=q;ee<R;ee++){const Q=D[ee];Ce=[];for(let se=0,oe=Q.length,ne=oe-1,Te=se+1;se<oe;se++,ne++,Te++)ne===oe&&(ne=0),Te===oe&&(Te=0),Ce[se]=W(Q[se],Q[ne],Q[Te]);ce.push(Ce),Ke=Ke.concat(Ce)}let Qe;if(x===0)Qe=Gn.triangulateShape(G,D);else{const ee=[],R=[];for(let Q=0;Q<x;Q++){const se=Q/x,oe=f*Math.cos(se*Math.PI/2),ne=p*Math.sin(se*Math.PI/2)+g;for(let Te=0,fe=G.length;Te<fe;Te++){const be=Y(G[Te],re[Te],ne);Ne(be.x,be.y,-oe),se===0&&ee.push(be)}for(let Te=0,fe=q;Te<fe;Te++){const be=D[Te];Ce=ce[Te];const C=[];for(let b=0,O=be.length;b<O;b++){const H=Y(be[b],Ce[b],ne);Ne(H.x,H.y,-oe),se===0&&C.push(H)}se===0&&R.push(C)}}Qe=Gn.triangulateShape(ee,R)}const rt=Qe.length,ot=p+g;for(let ee=0;ee<J;ee++){const R=d?Y(M[ee],Ke[ee],ot):M[ee];y?(P.copy(A.normals[0]).multiplyScalar(R.x),w.copy(A.binormals[0]).multiplyScalar(R.y),I.copy(_[0]).add(P).add(w),Ne(I.x,I.y,I.z)):Ne(R.x,R.y,0)}for(let ee=1;ee<=h;ee++)for(let R=0;R<J;R++){const Q=d?Y(M[R],Ke[R],ot):M[R];y?(P.copy(A.normals[ee]).multiplyScalar(Q.x),w.copy(A.binormals[ee]).multiplyScalar(Q.y),I.copy(_[ee]).add(P).add(w),Ne(I.x,I.y,I.z)):Ne(Q.x,Q.y,u/h*ee)}for(let ee=x-1;ee>=0;ee--){const R=ee/x,Q=f*Math.cos(R*Math.PI/2),se=p*Math.sin(R*Math.PI/2)+g;for(let oe=0,ne=G.length;oe<ne;oe++){const Te=Y(G[oe],re[oe],se);Ne(Te.x,Te.y,u+Q)}for(let oe=0,ne=D.length;oe<ne;oe++){const Te=D[oe];Ce=ce[oe];for(let fe=0,be=Te.length;fe<be;fe++){const C=Y(Te[fe],Ce[fe],se);y?Ne(C.x,C.y+_[h-1].y,_[h-1].x+Q):Ne(C.x,C.y,u+Q)}}}Z(),j();function Z(){const ee=i.length/3;if(d){let R=0,Q=J*R;for(let se=0;se<rt;se++){const oe=Qe[se];Pe(oe[2]+Q,oe[1]+Q,oe[0]+Q)}R=h+x*2,Q=J*R;for(let se=0;se<rt;se++){const oe=Qe[se];Pe(oe[0]+Q,oe[1]+Q,oe[2]+Q)}}else{for(let R=0;R<rt;R++){const Q=Qe[R];Pe(Q[2],Q[1],Q[0])}for(let R=0;R<rt;R++){const Q=Qe[R];Pe(Q[0]+J*h,Q[1]+J*h,Q[2]+J*h)}}n.addGroup(ee,i.length/3-ee,0)}function j(){const ee=i.length/3;let R=0;Me(G,R),R+=G.length;for(let Q=0,se=D.length;Q<se;Q++){const oe=D[Q];Me(oe,R),R+=oe.length}n.addGroup(ee,i.length/3-ee,1)}function Me(ee,R){let Q=ee.length;for(;--Q>=0;){const se=Q;let oe=Q-1;oe<0&&(oe=ee.length-1);for(let ne=0,Te=h+x*2;ne<Te;ne++){const fe=J*ne,be=J*(ne+1),C=R+se+fe,b=R+oe+fe,O=R+oe+be,H=R+se+be;Je(C,b,O,H)}}}function Ne(ee,R,Q){c.push(ee),c.push(R),c.push(Q)}function Pe(ee,R,Q){ft(ee),ft(R),ft(Q);const se=i.length/3,oe=v.generateTopUV(n,i,se-3,se-2,se-1);Ge(oe[0]),Ge(oe[1]),Ge(oe[2])}function Je(ee,R,Q,se){ft(ee),ft(R),ft(se),ft(R),ft(Q),ft(se);const oe=i.length/3,ne=v.generateSideWallUV(n,i,oe-6,oe-3,oe-2,oe-1);Ge(ne[0]),Ge(ne[1]),Ge(ne[3]),Ge(ne[1]),Ge(ne[2]),Ge(ne[3])}function ft(ee){i.push(c[ee*3+0]),i.push(c[ee*3+1]),i.push(c[ee*3+2])}function Ge(ee){r.push(ee.x),r.push(ee.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Ry(t,n,e)}static fromJSON(e,t){const n=[];for(let r=0,a=e.shapes.length;r<a;r++){const o=t[e.shapes[r]];n.push(o)}const i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new sl[i.type]().fromJSON(i)),new Wl(n,e.options)}}const Cy={generateTopUV:function(s,e,t,n,i){const r=e[t*3],a=e[t*3+1],o=e[n*3],c=e[n*3+1],l=e[i*3],h=e[i*3+1];return[new X(r,a),new X(o,c),new X(l,h)]},generateSideWallUV:function(s,e,t,n,i,r){const a=e[t*3],o=e[t*3+1],c=e[t*3+2],l=e[n*3],h=e[n*3+1],u=e[n*3+2],d=e[i*3],f=e[i*3+1],p=e[i*3+2],g=e[r*3],x=e[r*3+1],m=e[r*3+2];return Math.abs(o-h)<Math.abs(a-l)?[new X(a,1-c),new X(l,1-u),new X(d,1-p),new X(g,1-m)]:[new X(o,1-c),new X(h,1-u),new X(f,1-p),new X(x,1-m)]}};function Ry(s,e,t){if(t.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){const r=s[n];t.shapes.push(r.uuid)}else t.shapes.push(s.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Xl extends rs{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Xl(e.radius,e.detail)}}class ql extends Ye{constructor(e=[new X(0,-.5),new X(.5,0),new X(0,.5)],t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=ke(i,0,Math.PI*2);const r=[],a=[],o=[],c=[],l=[],h=1/t,u=new E,d=new X,f=new E,p=new E,g=new E;let x=0,m=0;for(let v=0;v<=e.length-1;v++)switch(v){case 0:x=e[v+1].x-e[v].x,m=e[v+1].y-e[v].y,f.x=m*1,f.y=-x,f.z=m*0,g.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case e.length-1:c.push(g.x,g.y,g.z);break;default:x=e[v+1].x-e[v].x,m=e[v+1].y-e[v].y,f.x=m*1,f.y=-x,f.z=m*0,p.copy(f),f.x+=g.x,f.y+=g.y,f.z+=g.z,f.normalize(),c.push(f.x,f.y,f.z),g.copy(p)}for(let v=0;v<=t;v++){const _=n+v*h*i,y=Math.sin(_),A=Math.cos(_);for(let w=0;w<=e.length-1;w++){u.x=e[w].x*y,u.y=e[w].y,u.z=e[w].x*A,a.push(u.x,u.y,u.z),d.x=v/t,d.y=w/(e.length-1),o.push(d.x,d.y);const P=c[3*w+0]*y,I=c[3*w+1],S=c[3*w+0]*A;l.push(P,I,S)}}for(let v=0;v<t;v++)for(let _=0;_<e.length-1;_++){const y=_+v*e.length,A=y,w=y+e.length,P=y+e.length+1,I=y+1;r.push(A,w,I),r.push(P,I,w)}this.setIndex(r),this.setAttribute("position",new Se(a,3)),this.setAttribute("uv",new Se(o,2)),this.setAttribute("normal",new Se(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ql(e.points,e.segments,e.phiStart,e.phiLength)}}class so extends rs{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new so(e.radius,e.detail)}}class qr extends Ye{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(i),l=o+1,h=c+1,u=e/o,d=t/c,f=[],p=[],g=[],x=[];for(let m=0;m<h;m++){const v=m*d-a;for(let _=0;_<l;_++){const y=_*u-r;p.push(y,-v,0),g.push(0,0,1),x.push(_/o),x.push(1-m/c)}}for(let m=0;m<c;m++)for(let v=0;v<o;v++){const _=v+l*m,y=v+l*(m+1),A=v+1+l*(m+1),w=v+1+l*m;f.push(_,y,w),f.push(y,A,w)}this.setIndex(f),this.setAttribute("position",new Se(p,3)),this.setAttribute("normal",new Se(g,3)),this.setAttribute("uv",new Se(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qr(e.width,e.height,e.widthSegments,e.heightSegments)}}class Yl extends Ye{constructor(e=.5,t=1,n=32,i=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);const o=[],c=[],l=[],h=[];let u=e;const d=(t-e)/i,f=new E,p=new X;for(let g=0;g<=i;g++){for(let x=0;x<=n;x++){const m=r+x/n*a;f.x=u*Math.cos(m),f.y=u*Math.sin(m),c.push(f.x,f.y,f.z),l.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,h.push(p.x,p.y)}u+=d}for(let g=0;g<i;g++){const x=g*(n+1);for(let m=0;m<n;m++){const v=m+x,_=v,y=v+n+1,A=v+n+2,w=v+1;o.push(_,y,w),o.push(y,A,w)}}this.setIndex(o),this.setAttribute("position",new Se(c,3)),this.setAttribute("normal",new Se(l,3)),this.setAttribute("uv",new Se(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yl(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Zl extends Ye{constructor(e=new Ns([new X(0,.5),new X(-.5,-.5),new X(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],i=[],r=[],a=[];let o=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let h=0;h<e.length;h++)l(e[h]),this.addGroup(o,c,h),o+=c,c=0;this.setIndex(n),this.setAttribute("position",new Se(i,3)),this.setAttribute("normal",new Se(r,3)),this.setAttribute("uv",new Se(a,2));function l(h){const u=i.length/3,d=h.extractPoints(t);let f=d.shape;const p=d.holes;Gn.isClockWise(f)===!1&&(f=f.reverse());for(let x=0,m=p.length;x<m;x++){const v=p[x];Gn.isClockWise(v)===!0&&(p[x]=v.reverse())}const g=Gn.triangulateShape(f,p);for(let x=0,m=p.length;x<m;x++){const v=p[x];f=f.concat(v)}for(let x=0,m=f.length;x<m;x++){const v=f[x];i.push(v.x,v.y,0),r.push(0,0,1),a.push(v.x,v.y)}for(let x=0,m=g.length;x<m;x++){const v=g[x],_=v[0]+u,y=v[1]+u,A=v[2]+u;n.push(_,y,A),c+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return Py(t,e)}static fromJSON(e,t){const n=[];for(let i=0,r=e.shapes.length;i<r;i++){const a=t[e.shapes[i]];n.push(a)}return new Zl(n,e.curveSegments)}}function Py(s,e){if(e.shapes=[],Array.isArray(s))for(let t=0,n=s.length;t<n;t++){const i=s[t];e.shapes.push(i.uuid)}else e.shapes.push(s.uuid);return e}class ro extends Ye{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const h=[],u=new E,d=new E,f=[],p=[],g=[],x=[];for(let m=0;m<=n;m++){const v=[],_=m/n;let y=0;m===0&&a===0?y=.5/t:m===n&&c===Math.PI&&(y=-.5/t);for(let A=0;A<=t;A++){const w=A/t;u.x=-e*Math.cos(i+w*r)*Math.sin(a+_*o),u.y=e*Math.cos(a+_*o),u.z=e*Math.sin(i+w*r)*Math.sin(a+_*o),p.push(u.x,u.y,u.z),d.copy(u).normalize(),g.push(d.x,d.y,d.z),x.push(w+y,1-_),v.push(l++)}h.push(v)}for(let m=0;m<n;m++)for(let v=0;v<t;v++){const _=h[m][v+1],y=h[m][v],A=h[m+1][v],w=h[m+1][v+1];(m!==0||a>0)&&f.push(_,y,w),(m!==n-1||c<Math.PI)&&f.push(y,A,w)}this.setIndex(f),this.setAttribute("position",new Se(p,3)),this.setAttribute("normal",new Se(g,3)),this.setAttribute("uv",new Se(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ro(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class $l extends rs{constructor(e=1,t=0){const n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],i=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,i,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new $l(e.radius,e.detail)}}class Kl extends Ye{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const a=[],o=[],c=[],l=[],h=new E,u=new E,d=new E;for(let f=0;f<=n;f++)for(let p=0;p<=i;p++){const g=p/i*r,x=f/n*Math.PI*2;u.x=(e+t*Math.cos(x))*Math.cos(g),u.y=(e+t*Math.cos(x))*Math.sin(g),u.z=t*Math.sin(x),o.push(u.x,u.y,u.z),h.x=e*Math.cos(g),h.y=e*Math.sin(g),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(p/i),l.push(f/n)}for(let f=1;f<=n;f++)for(let p=1;p<=i;p++){const g=(i+1)*f+p-1,x=(i+1)*(f-1)+p-1,m=(i+1)*(f-1)+p,v=(i+1)*f+p;a.push(g,x,v),a.push(x,m,v)}this.setIndex(a),this.setAttribute("position",new Se(o,3)),this.setAttribute("normal",new Se(c,3)),this.setAttribute("uv",new Se(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Kl(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Jl extends Ye{constructor(e=1,t=.4,n=64,i=8,r=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:i,p:r,q:a},n=Math.floor(n),i=Math.floor(i);const o=[],c=[],l=[],h=[],u=new E,d=new E,f=new E,p=new E,g=new E,x=new E,m=new E;for(let _=0;_<=n;++_){const y=_/n*r*Math.PI*2;v(y,r,a,e,f),v(y+.01,r,a,e,p),x.subVectors(p,f),m.addVectors(p,f),g.crossVectors(x,m),m.crossVectors(g,x),g.normalize(),m.normalize();for(let A=0;A<=i;++A){const w=A/i*Math.PI*2,P=-t*Math.cos(w),I=t*Math.sin(w);u.x=f.x+(P*m.x+I*g.x),u.y=f.y+(P*m.y+I*g.y),u.z=f.z+(P*m.z+I*g.z),c.push(u.x,u.y,u.z),d.subVectors(u,f).normalize(),l.push(d.x,d.y,d.z),h.push(_/n),h.push(A/i)}}for(let _=1;_<=n;_++)for(let y=1;y<=i;y++){const A=(i+1)*(_-1)+(y-1),w=(i+1)*_+(y-1),P=(i+1)*_+y,I=(i+1)*(_-1)+y;o.push(A,w,I),o.push(w,P,I)}this.setIndex(o),this.setAttribute("position",new Se(c,3)),this.setAttribute("normal",new Se(l,3)),this.setAttribute("uv",new Se(h,2));function v(_,y,A,w,P){const I=Math.cos(_),S=Math.sin(_),M=A/y*_,D=Math.cos(M);P.x=w*(2+D)*.5*I,P.y=w*(2+D)*S*.5,P.z=w*Math.sin(M)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jl(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}}class jl extends Ye{constructor(e=new hd(new E(-1,-1,0),new E(-1,1,0),new E(1,1,0)),t=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:r};const a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new E,c=new E,l=new X;let h=new E;const u=[],d=[],f=[],p=[];g(),this.setIndex(p),this.setAttribute("position",new Se(u,3)),this.setAttribute("normal",new Se(d,3)),this.setAttribute("uv",new Se(f,2));function g(){for(let _=0;_<t;_++)x(_);x(r===!1?t:0),v(),m()}function x(_){h=e.getPointAt(_/t,h);const y=a.normals[_],A=a.binormals[_];for(let w=0;w<=i;w++){const P=w/i*Math.PI*2,I=Math.sin(P),S=-Math.cos(P);c.x=S*y.x+I*A.x,c.y=S*y.y+I*A.y,c.z=S*y.z+I*A.z,c.normalize(),d.push(c.x,c.y,c.z),o.x=h.x+n*c.x,o.y=h.y+n*c.y,o.z=h.z+n*c.z,u.push(o.x,o.y,o.z)}}function m(){for(let _=1;_<=t;_++)for(let y=1;y<=i;y++){const A=(i+1)*(_-1)+(y-1),w=(i+1)*_+(y-1),P=(i+1)*_+y,I=(i+1)*(_-1)+y;p.push(A,w,I),p.push(w,P,I)}}function v(){for(let _=0;_<=t;_++)for(let y=0;y<=i;y++)l.x=_/t,l.y=y/i,f.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new jl(new sl[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class z0 extends Ye{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],n=new Set,i=new E,r=new E;if(e.index!==null){const a=e.attributes.position,o=e.index;let c=e.groups;c.length===0&&(c=[{start:0,count:o.count,materialIndex:0}]);for(let l=0,h=c.length;l<h;++l){const u=c[l],d=u.start,f=u.count;for(let p=d,g=d+f;p<g;p+=3)for(let x=0;x<3;x++){const m=o.getX(p+x),v=o.getX(p+(x+1)%3);i.fromBufferAttribute(a,m),r.fromBufferAttribute(a,v),Bf(i,r,n)===!0&&(t.push(i.x,i.y,i.z),t.push(r.x,r.y,r.z))}}}else{const a=e.attributes.position;for(let o=0,c=a.count/3;o<c;o++)for(let l=0;l<3;l++){const h=3*o+l,u=3*o+(l+1)%3;i.fromBufferAttribute(a,h),r.fromBufferAttribute(a,u),Bf(i,r,n)===!0&&(t.push(i.x,i.y,i.z),t.push(r.x,r.y,r.z))}}this.setAttribute("position",new Se(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function Bf(s,e,t){const n=`${s.x},${s.y},${s.z}-${e.x},${e.y},${e.z}`,i=`${e.x},${e.y},${e.z}-${s.x},${s.y},${s.z}`;return t.has(n)===!0||t.has(i)===!0?!1:(t.add(n),t.add(i),!0)}var zf=Object.freeze({__proto__:null,BoxGeometry:Ys,CapsuleGeometry:kl,CircleGeometry:Vl,ConeGeometry:io,CylinderGeometry:no,DodecahedronGeometry:Gl,EdgesGeometry:R0,ExtrudeGeometry:Wl,IcosahedronGeometry:Xl,LatheGeometry:ql,OctahedronGeometry:so,PlaneGeometry:qr,PolyhedronGeometry:rs,RingGeometry:Yl,ShapeGeometry:Zl,SphereGeometry:ro,TetrahedronGeometry:$l,TorusGeometry:Kl,TorusKnotGeometry:Jl,TubeGeometry:jl,WireframeGeometry:z0});class k0 extends Zt{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new _e(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class V0 extends Ln{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class dd extends Zt{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new _e(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new _e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ss,this.normalScale=new X(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class G0 extends dd{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new X(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ke(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new _e(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new _e(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new _e(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class H0 extends Zt{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new _e(16777215),this.specular=new _e(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new _e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ss,this.normalScale=new X(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wn,this.combine=Qa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class W0 extends Zt{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new _e(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new _e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ss,this.normalScale=new X(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class X0 extends Zt{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ss,this.normalScale=new X(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class q0 extends Zt{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new _e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new _e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ss,this.normalScale=new X(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wn,this.combine=Qa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class fd extends Zt{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=n0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class pd extends Zt{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Y0 extends Zt{constructor(e){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new _e(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ss,this.normalScale=new X(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Z0 extends sn{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}function Ps(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function $0(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function K0(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function gu(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,a=0;a!==n;++r){const o=t[r]*e;for(let c=0;c!==e;++c)i[a++]=s[o+c]}return i}function md(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push(...a)),r=s[i++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=s[i++];while(r!==void 0)}function Iy(s,e,t,n,i=30){const r=s.clone();r.name=e;const a=[];for(let c=0;c<r.tracks.length;++c){const l=r.tracks[c],h=l.getValueSize(),u=[],d=[];for(let f=0;f<l.times.length;++f){const p=l.times[f]*i;if(!(p<t||p>=n)){u.push(l.times[f]);for(let g=0;g<h;++g)d.push(l.values[f*h+g])}}u.length!==0&&(l.times=Ps(u,l.times.constructor),l.values=Ps(d,l.values.constructor),a.push(l))}r.tracks=a;let o=1/0;for(let c=0;c<r.tracks.length;++c)o>r.tracks[c].times[0]&&(o=r.tracks[c].times[0]);for(let c=0;c<r.tracks.length;++c)r.tracks[c].shift(-1*o);return r.resetDuration(),r}function Dy(s,e=0,t=s,n=30){n<=0&&(n=30);const i=t.tracks.length,r=e/n;for(let a=0;a<i;++a){const o=t.tracks[a],c=o.ValueTypeName;if(c==="bool"||c==="string")continue;const l=s.tracks.find(function(m){return m.name===o.name&&m.ValueTypeName===c});if(l===void 0)continue;let h=0;const u=o.getValueSize();o.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(h=u/3);let d=0;const f=l.getValueSize();l.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(d=f/3);const p=o.times.length-1;let g;if(r<=o.times[0]){const m=h,v=u-h;g=o.values.slice(m,v)}else if(r>=o.times[p]){const m=p*u+h,v=m+u-h;g=o.values.slice(m,v)}else{const m=o.createInterpolant(),v=h,_=u-h;m.evaluate(r),g=m.resultBuffer.slice(v,_)}c==="quaternion"&&new Yt().fromArray(g).normalize().conjugate().toArray(g);const x=l.times.length;for(let m=0;m<x;++m){const v=m*f+d;if(c==="quaternion")Yt.multiplyQuaternionsFlat(l.values,v,g,0,l.values,v);else{const _=f-d*2;for(let y=0;y<_;++y)l.values[v+y]-=g[y]}}}return s.blendMode=Yu,s}class Ly{static convertArray(e,t){return Ps(e,t)}static isTypedArray(e){return $0(e)}static getKeyframeOrder(e){return K0(e)}static sortedArray(e,t,n){return gu(e,t,n)}static flattenJSON(e,t,n,i){md(e,t,n,i)}static subclip(e,t,n,i,r=30){return Iy(e,t,n,i,r)}static makeClipAdditive(e,t=0,n=e,i=30){return Dy(e,t,n,i)}}class ao{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];e:{t:{let a;n:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=t[++n],e<i)break t}a=t.length;break n}if(!(e>=r)){const o=t[1];e<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=t[--n-1],e>=r)break t}a=n,n=0;break n}break e}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let a=0;a!==i;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class J0 extends ao{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Cs,endingEnd:Cs}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,a=e+1,o=i[r],c=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Rs:r=e,o=2*t-n;break;case Na:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Rs:a=e,c=2*n-t;break;case Na:a=1,c=n+i[1]-i[0];break;default:a=e-1,c=t}const l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(i-t),g=p*p,x=g*p,m=-d*x+2*d*g-d*p,v=(1+d)*x+(-1.5-2*d)*g+(-.5+d)*p+1,_=(-1-f)*x+(1.5+f)*g+.5*p,y=f*x-f*g;for(let A=0;A!==o;++A)r[A]=m*a[h+A]+v*a[l+A]+_*a[c+A]+y*a[u+A];return r}}class xd extends ao{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==o;++d)r[d]=a[l+d]*u+a[c+d]*h;return r}}class j0 extends ao{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Nn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ps(t,this.TimeBufferType),this.values=Ps(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ps(e.times,Array),values:Ps(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new j0(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new xd(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new J0(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ua:t=this.InterpolantFactoryMethodDiscrete;break;case tl:t=this.InterpolantFactoryMethodLinear;break;case cc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return me("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ua;case this.InterpolantFactoryMethodLinear:return tl;case this.InterpolantFactoryMethodSmooth:return cc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,a=i-1;for(;r!==i&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(We("KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(We("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){const c=n[o];if(typeof c=="number"&&isNaN(c)){We("KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){We("KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(i!==void 0&&$0(i))for(let o=0,c=i.length;o!==c;++o){const l=i[o];if(isNaN(l)){We("KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===cc,r=e.length-1;let a=1;for(let o=1;o<r;++o){let c=!1;const l=e[o],h=e[o+1];if(l!==h&&(o!==1||l!==e[0]))if(i)c=!0;else{const u=o*n,d=u-n,f=u+n;for(let p=0;p!==n;++p){const g=t[u+p];if(g!==t[d+p]||g!==t[f+p]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];const u=o*n,d=a*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Nn.prototype.ValueTypeName="";Nn.prototype.TimeBufferType=Float32Array;Nn.prototype.ValueBufferType=Float32Array;Nn.prototype.DefaultInterpolation=tl;class Zs extends Nn{constructor(e,t,n){super(e,t,n)}}Zs.prototype.ValueTypeName="bool";Zs.prototype.ValueBufferType=Array;Zs.prototype.DefaultInterpolation=Ua;Zs.prototype.InterpolantFactoryMethodLinear=void 0;Zs.prototype.InterpolantFactoryMethodSmooth=void 0;class gd extends Nn{constructor(e,t,n,i){super(e,t,n,i)}}gd.prototype.ValueTypeName="color";class Ha extends Nn{constructor(e,t,n,i){super(e,t,n,i)}}Ha.prototype.ValueTypeName="number";class Q0 extends ao{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(i-t);let l=e*o;for(let h=l+o;l!==h;l+=4)Yt.slerpFlat(r,0,a,l-o,a,l,c);return r}}class oo extends Nn{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new Q0(this.times,this.values,this.getValueSize(),e)}}oo.prototype.ValueTypeName="quaternion";oo.prototype.InterpolantFactoryMethodSmooth=void 0;class $s extends Nn{constructor(e,t,n){super(e,t,n)}}$s.prototype.ValueTypeName="string";$s.prototype.ValueBufferType=Array;$s.prototype.DefaultInterpolation=Ua;$s.prototype.InterpolantFactoryMethodLinear=void 0;$s.prototype.InterpolantFactoryMethodSmooth=void 0;class Wa extends Nn{constructor(e,t,n,i){super(e,t,n,i)}}Wa.prototype.ValueTypeName="vector";class Xa{constructor(e="",t=-1,n=[],i=Rl){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Sn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(Ny(n[a]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=n.length;r!==a;++r)t.push(Nn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,a=[];for(let o=0;o<r;o++){let c=[],l=[];c.push((o+r-1)%r,o,(o+1)%r),l.push(0,1,0);const h=K0(c);c=gu(c,1,h),l=gu(l,1,h),!i&&c[0]===0&&(c.push(r),l.push(l[0])),a.push(new Ha(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){const l=e[o],h=l.name.match(r);if(h&&h.length>1){const u=h[1];let d=i[u];d||(i[u]=d=[]),d.push(l)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(me("AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return We("AnimationClip: No animation in JSONLoader data."),null;const n=function(u,d,f,p,g){if(f.length!==0){const x=[],m=[];md(f,x,m,p),x.length!==0&&g.push(new u(d,x,m))}},i=[],r=e.name||"default",a=e.fps||30,o=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let u=0;u<l.length;u++){const d=l[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let p;for(p=0;p<d.length;p++)if(d[p].morphTargets)for(let g=0;g<d[p].morphTargets.length;g++)f[d[p].morphTargets[g]]=-1;for(const g in f){const x=[],m=[];for(let v=0;v!==d[p].morphTargets.length;++v){const _=d[p];x.push(_.time),m.push(_.morphTarget===g?1:0)}i.push(new Ha(".morphTargetInfluence["+g+"]",x,m))}c=f.length*a}else{const f=".bones["+t[u].name+"]";n(Wa,f+".position",d,"pos",i),n(oo,f+".quaternion",d,"rot",i),n(Wa,f+".scale",d,"scl",i)}}return i.length===0?null:new this(r,c,i,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function Uy(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ha;case"vector":case"vector2":case"vector3":case"vector4":return Wa;case"color":return gd;case"quaternion":return oo;case"bool":case"boolean":return Zs;case"string":return $s}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function Ny(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Uy(s.type);if(s.times===void 0){const t=[],n=[];md(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const si={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class _d{constructor(e,t,n){const i=this;let r=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&i.onStart!==void 0&&i.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){const f=l[u],p=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Ks=new _d;class mn{constructor(e){this.manager=e!==void 0?e:Ks,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}mn.DEFAULT_MATERIAL_NAME="__DEFAULT";const mi={};class Fy extends Error{constructor(e,t){super(e),this.response=t}}class Ri extends mn{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=si.get(`file:${e}`);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(mi[e]!==void 0){mi[e].push({onLoad:t,onProgress:n,onError:i});return}mi[e]=[],mi[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&me("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const h=mi[e],u=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=d?parseInt(d):0,p=f!==0;let g=0;const x=new ReadableStream({start(m){v();function v(){u.read().then(({done:_,value:y})=>{if(_)m.close();else{g+=y.byteLength;const A=new ProgressEvent("progress",{lengthComputable:p,loaded:g,total:f});for(let w=0,P=h.length;w<P;w++){const I=h[w];I.onProgress&&I.onProgress(A)}m.enqueue(y),v()}},_=>{m.error(_)})}}});return new Response(x)}else throw new Fy(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return l.json();default:if(o==="")return l.text();{const u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(p=>f.decode(p))}}}).then(l=>{si.add(`file:${e}`,l);const h=mi[e];delete mi[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(l)}}).catch(l=>{const h=mi[e];if(h===void 0)throw this.manager.itemError(e),l;delete mi[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class Oy extends mn{constructor(e){super(e)}load(e,t,n,i){const r=this,a=new Ri(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(o){try{t(r.parse(JSON.parse(o)))}catch(c){i?i(c):We(c),r.manager.itemError(e)}},n,i)}parse(e){const t=[];for(let n=0;n<e.length;n++){const i=Xa.parse(e[n]);t.push(i)}return t}}class By extends mn{constructor(e){super(e)}load(e,t,n,i){const r=this,a=[],o=new zl,c=new Ri(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(r.withCredentials);let l=0;function h(u){c.load(e[u],function(d){const f=r.parse(d,!0);a[u]={width:f.width,height:f.height,format:f.format,mipmaps:f.mipmaps},l+=1,l===6&&(f.mipmapCount===1&&(o.minFilter=At),o.image=a,o.format=f.format,o.needsUpdate=!0,t&&t(o))},n,i)}if(Array.isArray(e))for(let u=0,d=e.length;u<d;++u)h(u);else c.load(e,function(u){const d=r.parse(u,!0);if(d.isCubemap){const f=d.mipmaps.length/d.mipmapCount;for(let p=0;p<f;p++){a[p]={mipmaps:[]};for(let g=0;g<d.mipmapCount;g++)a[p].mipmaps.push(d.mipmaps[p*d.mipmapCount+g]),a[p].format=d.format,a[p].width=d.width,a[p].height=d.height}o.image=a}else o.image.width=d.width,o.image.height=d.height,o.mipmaps=d.mipmaps;d.mipmapCount===1&&(o.minFilter=At),o.format=d.format,o.needsUpdate=!0,t&&t(o)},n,i);return o}}const gr=new WeakMap;class qa extends mn{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=si.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let u=gr.get(a);u===void 0&&(u=[],gr.set(a,u)),u.push({onLoad:t,onError:i})}return a}const o=Ba("img");function c(){h(),t&&t(this);const u=gr.get(this)||[];for(let d=0;d<u.length;d++){const f=u[d];f.onLoad&&f.onLoad(this)}gr.delete(this),r.manager.itemEnd(e)}function l(u){h(),i&&i(u),si.remove(`image:${e}`);const d=gr.get(this)||[];for(let f=0;f<d.length;f++){const p=d[f];p.onError&&p.onError(u)}gr.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),si.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}}class zy extends mn{constructor(e){super(e)}load(e,t,n,i){const r=new to;r.colorSpace=hn;const a=new qa(this.manager);a.setCrossOrigin(this.crossOrigin),a.setPath(this.path);let o=0;function c(l){a.load(e[l],function(h){r.images[l]=h,o++,o===6&&(r.needsUpdate=!0,t&&t(r))},void 0,i)}for(let l=0;l<e.length;++l)c(l);return r}}class ky extends mn{constructor(e){super(e)}load(e,t,n,i){const r=this,a=new Wn,o=new Ri(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(r.withCredentials),o.load(e,function(c){let l;try{l=r.parse(c)}catch(h){if(i!==void 0)i(h);else{h(h);return}}l.image!==void 0?a.image=l.image:l.data!==void 0&&(a.image.width=l.width,a.image.height=l.height,a.image.data=l.data),a.wrapS=l.wrapS!==void 0?l.wrapS:dn,a.wrapT=l.wrapT!==void 0?l.wrapT:dn,a.magFilter=l.magFilter!==void 0?l.magFilter:At,a.minFilter=l.minFilter!==void 0?l.minFilter:At,a.anisotropy=l.anisotropy!==void 0?l.anisotropy:1,l.colorSpace!==void 0&&(a.colorSpace=l.colorSpace),l.flipY!==void 0&&(a.flipY=l.flipY),l.format!==void 0&&(a.format=l.format),l.type!==void 0&&(a.type=l.type),l.mipmaps!==void 0&&(a.mipmaps=l.mipmaps,a.minFilter=ii),l.mipmapCount===1&&(a.minFilter=At),l.generateMipmaps!==void 0&&(a.generateMipmaps=l.generateMipmaps),a.needsUpdate=!0,t&&t(a,l)},n,i),a}}class Vy extends mn{constructor(e){super(e)}load(e,t,n,i){const r=new Tt,a=new qa(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class as extends nt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new _e(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class ex extends as{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(nt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new _e(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const kh=new De,kf=new E,Vf=new E;class vd{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new X(512,512),this.mapType=Yn,this.map=null,this.mapPass=null,this.matrix=new De,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Xr,this._frameExtents=new X(1,1),this._viewportCount=1,this._viewports=[new je(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;kf.setFromMatrixPosition(e.matrixWorld),t.position.copy(kf),Vf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Vf),t.updateMatrixWorld(),kh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(kh,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(kh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Gy extends vd{constructor(){super(new Ot(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=zr*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class tx extends as{constructor(e,t,n=0,i=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(nt.DEFAULT_UP),this.updateMatrix(),this.target=new nt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Gy}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Gf=new De,oa=new E,Vh=new E;class Hy extends vd{constructor(){super(new Ot(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new X(4,2),this._viewportCount=6,this._viewports=[new je(2,1,1,1),new je(0,1,1,1),new je(3,1,1,1),new je(1,1,1,1),new je(3,0,1,1),new je(1,0,1,1)],this._cubeDirections=[new E(1,0,0),new E(-1,0,0),new E(0,0,1),new E(0,0,-1),new E(0,1,0),new E(0,-1,0)],this._cubeUps=[new E(0,1,0),new E(0,1,0),new E(0,1,0),new E(0,1,0),new E(0,0,1),new E(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),oa.setFromMatrixPosition(e.matrixWorld),n.position.copy(oa),Vh.copy(n.position),Vh.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Vh),n.updateMatrixWorld(),i.makeTranslation(-oa.x,-oa.y,-oa.z),Gf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Gf,n.coordinateSystem,n.reversedDepth)}}class nx extends as{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Hy}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class co extends Ll{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Wy extends vd{constructor(){super(new co(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ix extends as{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(nt.DEFAULT_UP),this.updateMatrix(),this.target=new nt,this.shadow=new Wy}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class sx extends as{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class rx extends as{constructor(e,t,n=10,i=10){super(e,t),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=n,this.height=i}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){const t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}}class ax{constructor(){this.isSphericalHarmonics3=!0,this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new E)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){const n=e.x,i=e.y,r=e.z,a=this.coefficients;return t.copy(a[0]).multiplyScalar(.282095),t.addScaledVector(a[1],.488603*i),t.addScaledVector(a[2],.488603*r),t.addScaledVector(a[3],.488603*n),t.addScaledVector(a[4],1.092548*(n*i)),t.addScaledVector(a[5],1.092548*(i*r)),t.addScaledVector(a[6],.315392*(3*r*r-1)),t.addScaledVector(a[7],1.092548*(n*r)),t.addScaledVector(a[8],.546274*(n*n-i*i)),t}getIrradianceAt(e,t){const n=e.x,i=e.y,r=e.z,a=this.coefficients;return t.copy(a[0]).multiplyScalar(.886227),t.addScaledVector(a[1],2*.511664*i),t.addScaledVector(a[2],2*.511664*r),t.addScaledVector(a[3],2*.511664*n),t.addScaledVector(a[4],2*.429043*n*i),t.addScaledVector(a[5],2*.429043*i*r),t.addScaledVector(a[6],.743125*r*r-.247708),t.addScaledVector(a[7],2*.429043*n*r),t.addScaledVector(a[8],.429043*(n*n-i*i)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(e.coefficients[n],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let n=0;n<9;n++)this.coefficients[n].lerp(e.coefficients[n],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].fromArray(e,t+i*3);return this}toArray(e=[],t=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].toArray(e,t+i*3);return e}static getBasisAt(e,t){const n=e.x,i=e.y,r=e.z;t[0]=.282095,t[1]=.488603*i,t[2]=.488603*r,t[3]=.488603*n,t[4]=1.092548*n*i,t[5]=1.092548*i*r,t[6]=.315392*(3*r*r-1),t[7]=1.092548*n*r,t[8]=.546274*(n*n-i*i)}}class ox extends as{constructor(e=new ax,t=1){super(void 0,t),this.isLightProbe=!0,this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}fromJSON(e){return this.intensity=e.intensity,this.sh.fromArray(e.sh),this}toJSON(e){const t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}}class Ql extends mn{constructor(e){super(e),this.textures={}}load(e,t,n,i){const r=this,a=new Ri(r.manager);a.setPath(r.path),a.setRequestHeader(r.requestHeader),a.setWithCredentials(r.withCredentials),a.load(e,function(o){try{t(r.parse(JSON.parse(o)))}catch(c){i?i(c):We(c),r.manager.itemError(e)}},n,i)}parse(e){const t=this.textures;function n(r){return t[r]===void 0&&me("MaterialLoader: Undefined texture",r),t[r]}const i=this.createMaterialFromType(e.type);if(e.uuid!==void 0&&(i.uuid=e.uuid),e.name!==void 0&&(i.name=e.name),e.color!==void 0&&i.color!==void 0&&i.color.setHex(e.color),e.roughness!==void 0&&(i.roughness=e.roughness),e.metalness!==void 0&&(i.metalness=e.metalness),e.sheen!==void 0&&(i.sheen=e.sheen),e.sheenColor!==void 0&&(i.sheenColor=new _e().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(i.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&i.emissive!==void 0&&i.emissive.setHex(e.emissive),e.specular!==void 0&&i.specular!==void 0&&i.specular.setHex(e.specular),e.specularIntensity!==void 0&&(i.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&i.specularColor!==void 0&&i.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(i.shininess=e.shininess),e.clearcoat!==void 0&&(i.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(i.dispersion=e.dispersion),e.iridescence!==void 0&&(i.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(i.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(i.transmission=e.transmission),e.thickness!==void 0&&(i.thickness=e.thickness),e.attenuationDistance!==void 0&&(i.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&i.attenuationColor!==void 0&&i.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(i.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(i.fog=e.fog),e.flatShading!==void 0&&(i.flatShading=e.flatShading),e.blending!==void 0&&(i.blending=e.blending),e.combine!==void 0&&(i.combine=e.combine),e.side!==void 0&&(i.side=e.side),e.shadowSide!==void 0&&(i.shadowSide=e.shadowSide),e.opacity!==void 0&&(i.opacity=e.opacity),e.transparent!==void 0&&(i.transparent=e.transparent),e.alphaTest!==void 0&&(i.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(i.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(i.depthFunc=e.depthFunc),e.depthTest!==void 0&&(i.depthTest=e.depthTest),e.depthWrite!==void 0&&(i.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(i.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(i.blendSrc=e.blendSrc),e.blendDst!==void 0&&(i.blendDst=e.blendDst),e.blendEquation!==void 0&&(i.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(i.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(i.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(i.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&i.blendColor!==void 0&&i.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(i.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(i.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(i.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(i.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(i.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(i.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(i.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(i.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(i.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(i.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(i.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(i.rotation=e.rotation),e.linewidth!==void 0&&(i.linewidth=e.linewidth),e.dashSize!==void 0&&(i.dashSize=e.dashSize),e.gapSize!==void 0&&(i.gapSize=e.gapSize),e.scale!==void 0&&(i.scale=e.scale),e.polygonOffset!==void 0&&(i.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(i.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(i.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(i.dithering=e.dithering),e.alphaToCoverage!==void 0&&(i.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(i.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(i.forceSinglePass=e.forceSinglePass),e.visible!==void 0&&(i.visible=e.visible),e.toneMapped!==void 0&&(i.toneMapped=e.toneMapped),e.userData!==void 0&&(i.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?i.vertexColors=e.vertexColors>0:i.vertexColors=e.vertexColors),e.uniforms!==void 0)for(const r in e.uniforms){const a=e.uniforms[r];switch(i.uniforms[r]={},a.type){case"t":i.uniforms[r].value=n(a.value);break;case"c":i.uniforms[r].value=new _e().setHex(a.value);break;case"v2":i.uniforms[r].value=new X().fromArray(a.value);break;case"v3":i.uniforms[r].value=new E().fromArray(a.value);break;case"v4":i.uniforms[r].value=new je().fromArray(a.value);break;case"m3":i.uniforms[r].value=new Ze().fromArray(a.value);break;case"m4":i.uniforms[r].value=new De().fromArray(a.value);break;default:i.uniforms[r].value=a.value}}if(e.defines!==void 0&&(i.defines=e.defines),e.vertexShader!==void 0&&(i.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(i.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(i.glslVersion=e.glslVersion),e.extensions!==void 0)for(const r in e.extensions)i.extensions[r]=e.extensions[r];if(e.lights!==void 0&&(i.lights=e.lights),e.clipping!==void 0&&(i.clipping=e.clipping),e.size!==void 0&&(i.size=e.size),e.sizeAttenuation!==void 0&&(i.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(i.map=n(e.map)),e.matcap!==void 0&&(i.matcap=n(e.matcap)),e.alphaMap!==void 0&&(i.alphaMap=n(e.alphaMap)),e.bumpMap!==void 0&&(i.bumpMap=n(e.bumpMap)),e.bumpScale!==void 0&&(i.bumpScale=e.bumpScale),e.normalMap!==void 0&&(i.normalMap=n(e.normalMap)),e.normalMapType!==void 0&&(i.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),i.normalScale=new X().fromArray(r)}return e.displacementMap!==void 0&&(i.displacementMap=n(e.displacementMap)),e.displacementScale!==void 0&&(i.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(i.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(i.roughnessMap=n(e.roughnessMap)),e.metalnessMap!==void 0&&(i.metalnessMap=n(e.metalnessMap)),e.emissiveMap!==void 0&&(i.emissiveMap=n(e.emissiveMap)),e.emissiveIntensity!==void 0&&(i.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(i.specularMap=n(e.specularMap)),e.specularIntensityMap!==void 0&&(i.specularIntensityMap=n(e.specularIntensityMap)),e.specularColorMap!==void 0&&(i.specularColorMap=n(e.specularColorMap)),e.envMap!==void 0&&(i.envMap=n(e.envMap)),e.envMapRotation!==void 0&&i.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(i.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(i.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(i.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(i.lightMap=n(e.lightMap)),e.lightMapIntensity!==void 0&&(i.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(i.aoMap=n(e.aoMap)),e.aoMapIntensity!==void 0&&(i.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(i.gradientMap=n(e.gradientMap)),e.clearcoatMap!==void 0&&(i.clearcoatMap=n(e.clearcoatMap)),e.clearcoatRoughnessMap!==void 0&&(i.clearcoatRoughnessMap=n(e.clearcoatRoughnessMap)),e.clearcoatNormalMap!==void 0&&(i.clearcoatNormalMap=n(e.clearcoatNormalMap)),e.clearcoatNormalScale!==void 0&&(i.clearcoatNormalScale=new X().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(i.iridescenceMap=n(e.iridescenceMap)),e.iridescenceThicknessMap!==void 0&&(i.iridescenceThicknessMap=n(e.iridescenceThicknessMap)),e.transmissionMap!==void 0&&(i.transmissionMap=n(e.transmissionMap)),e.thicknessMap!==void 0&&(i.thicknessMap=n(e.thicknessMap)),e.anisotropyMap!==void 0&&(i.anisotropyMap=n(e.anisotropyMap)),e.sheenColorMap!==void 0&&(i.sheenColorMap=n(e.sheenColorMap)),e.sheenRoughnessMap!==void 0&&(i.sheenRoughnessMap=n(e.sheenRoughnessMap)),i}setTextures(e){return this.textures=e,this}createMaterialFromType(e){return Ql.createMaterialFromType(e)}static createMaterialFromType(e){const t={ShadowMaterial:k0,SpriteMaterial:td,RawShaderMaterial:V0,ShaderMaterial:Ln,PointsMaterial:id,MeshPhysicalMaterial:G0,MeshStandardMaterial:dd,MeshPhongMaterial:H0,MeshToonMaterial:W0,MeshNormalMaterial:X0,MeshLambertMaterial:q0,MeshDepthMaterial:fd,MeshDistanceMaterial:pd,MeshBasicMaterial:Ui,MeshMatcapMaterial:Y0,LineDashedMaterial:Z0,LineBasicMaterial:sn,Material:Zt};return new t[e]}}class _u{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class cx extends Ye{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class lx extends mn{constructor(e){super(e)}load(e,t,n,i){const r=this,a=new Ri(r.manager);a.setPath(r.path),a.setRequestHeader(r.requestHeader),a.setWithCredentials(r.withCredentials),a.load(e,function(o){try{t(r.parse(JSON.parse(o)))}catch(c){i?i(c):We(c),r.manager.itemError(e)}},n,i)}parse(e){const t={},n={};function i(f,p){if(t[p]!==void 0)return t[p];const x=f.interleavedBuffers[p],m=r(f,x.buffer),v=wr(x.type,m),_=new Fl(v,x.stride);return _.uuid=x.uuid,t[p]=_,_}function r(f,p){if(n[p]!==void 0)return n[p];const x=f.arrayBuffers[p],m=new Uint32Array(x).buffer;return n[p]=m,m}const a=e.isInstancedBufferGeometry?new cx:new Ye,o=e.data.index;if(o!==void 0){const f=wr(o.type,o.array);a.setIndex(new dt(f,1))}const c=e.data.attributes;for(const f in c){const p=c[f];let g;if(p.isInterleavedBufferAttribute){const x=i(e.data,p.data);g=new Vs(x,p.itemSize,p.offset,p.normalized)}else{const x=wr(p.type,p.array),m=p.isInstancedBufferAttribute?Vr:dt;g=new m(x,p.itemSize,p.normalized)}p.name!==void 0&&(g.name=p.name),p.usage!==void 0&&g.setUsage(p.usage),a.setAttribute(f,g)}const l=e.data.morphAttributes;if(l)for(const f in l){const p=l[f],g=[];for(let x=0,m=p.length;x<m;x++){const v=p[x];let _;if(v.isInterleavedBufferAttribute){const y=i(e.data,v.data);_=new Vs(y,v.itemSize,v.offset,v.normalized)}else{const y=wr(v.type,v.array);_=new dt(y,v.itemSize,v.normalized)}v.name!==void 0&&(_.name=v.name),g.push(_)}a.morphAttributes[f]=g}e.data.morphTargetsRelative&&(a.morphTargetsRelative=!0);const u=e.data.groups||e.data.drawcalls||e.data.offsets;if(u!==void 0)for(let f=0,p=u.length;f!==p;++f){const g=u[f];a.addGroup(g.start,g.count,g.materialIndex)}const d=e.data.boundingSphere;return d!==void 0&&(a.boundingSphere=new Pt().fromJSON(d)),e.name&&(a.name=e.name),e.userData&&(a.userData=e.userData),a}}class Xy extends mn{constructor(e){super(e)}load(e,t,n,i){const r=this,a=this.path===""?_u.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||a;const o=new Ri(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(c){let l=null;try{l=JSON.parse(c)}catch(u){i!==void 0&&i(u),u("ObjectLoader: Can't parse "+e+".",u.message);return}const h=l.metadata;if(h===void 0||h.type===void 0||h.type.toLowerCase()==="geometry"){i!==void 0&&i(new Error("THREE.ObjectLoader: Can't load "+e)),We("ObjectLoader: Can't load "+e);return}r.parse(l,t)},n,i)}async loadAsync(e,t){const n=this,i=this.path===""?_u.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||i;const r=new Ri(this.manager);r.setPath(this.path),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials);const a=await r.loadAsync(e,t),o=JSON.parse(a),c=o.metadata;if(c===void 0||c.type===void 0||c.type.toLowerCase()==="geometry")throw new Error("THREE.ObjectLoader: Can't load "+e);return await n.parseAsync(o)}parse(e,t){const n=this.parseAnimations(e.animations),i=this.parseShapes(e.shapes),r=this.parseGeometries(e.geometries,i),a=this.parseImages(e.images,function(){t!==void 0&&t(l)}),o=this.parseTextures(e.textures,a),c=this.parseMaterials(e.materials,o),l=this.parseObject(e.object,r,c,o,n),h=this.parseSkeletons(e.skeletons,l);if(this.bindSkeletons(l,h),this.bindLightTargets(l),t!==void 0){let u=!1;for(const d in a)if(a[d].data instanceof HTMLImageElement){u=!0;break}u===!1&&t(l)}return l}async parseAsync(e){const t=this.parseAnimations(e.animations),n=this.parseShapes(e.shapes),i=this.parseGeometries(e.geometries,n),r=await this.parseImagesAsync(e.images),a=this.parseTextures(e.textures,r),o=this.parseMaterials(e.materials,a),c=this.parseObject(e.object,i,o,a,t),l=this.parseSkeletons(e.skeletons,c);return this.bindSkeletons(c,l),this.bindLightTargets(c),c}parseShapes(e){const t={};if(e!==void 0)for(let n=0,i=e.length;n<i;n++){const r=new Ns().fromJSON(e[n]);t[r.uuid]=r}return t}parseSkeletons(e,t){const n={},i={};if(t.traverse(function(r){r.isBone&&(i[r.uuid]=r)}),e!==void 0)for(let r=0,a=e.length;r<a;r++){const o=new Ol().fromJSON(e[r],i);n[o.uuid]=o}return n}parseGeometries(e,t){const n={};if(e!==void 0){const i=new lx;for(let r=0,a=e.length;r<a;r++){let o;const c=e[r];switch(c.type){case"BufferGeometry":case"InstancedBufferGeometry":o=i.parse(c);break;default:c.type in zf?o=zf[c.type].fromJSON(c,t):me(`ObjectLoader: Unsupported geometry type "${c.type}"`)}o.uuid=c.uuid,c.name!==void 0&&(o.name=c.name),c.userData!==void 0&&(o.userData=c.userData),n[c.uuid]=o}}return n}parseMaterials(e,t){const n={},i={};if(e!==void 0){const r=new Ql;r.setTextures(t);for(let a=0,o=e.length;a<o;a++){const c=e[a];n[c.uuid]===void 0&&(n[c.uuid]=r.parse(c)),i[c.uuid]=n[c.uuid]}}return i}parseAnimations(e){const t={};if(e!==void 0)for(let n=0;n<e.length;n++){const i=e[n],r=Xa.parse(i);t[r.uuid]=r}return t}parseImages(e,t){const n=this,i={};let r;function a(c){return n.manager.itemStart(c),r.load(c,function(){n.manager.itemEnd(c)},void 0,function(){n.manager.itemError(c),n.manager.itemEnd(c)})}function o(c){if(typeof c=="string"){const l=c,h=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(l)?l:n.resourcePath+l;return a(h)}else return c.data?{data:wr(c.type,c.data),width:c.width,height:c.height}:null}if(e!==void 0&&e.length>0){const c=new _d(t);r=new qa(c),r.setCrossOrigin(this.crossOrigin);for(let l=0,h=e.length;l<h;l++){const u=e[l],d=u.url;if(Array.isArray(d)){const f=[];for(let p=0,g=d.length;p<g;p++){const x=d[p],m=o(x);m!==null&&(m instanceof HTMLImageElement?f.push(m):f.push(new Wn(m.data,m.width,m.height)))}i[u.uuid]=new Xi(f)}else{const f=o(u.url);i[u.uuid]=new Xi(f)}}}return i}async parseImagesAsync(e){const t=this,n={};let i;async function r(a){if(typeof a=="string"){const o=a,c=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(o)?o:t.resourcePath+o;return await i.loadAsync(c)}else return a.data?{data:wr(a.type,a.data),width:a.width,height:a.height}:null}if(e!==void 0&&e.length>0){i=new qa(this.manager),i.setCrossOrigin(this.crossOrigin);for(let a=0,o=e.length;a<o;a++){const c=e[a],l=c.url;if(Array.isArray(l)){const h=[];for(let u=0,d=l.length;u<d;u++){const f=l[u],p=await r(f);p!==null&&(p instanceof HTMLImageElement?h.push(p):h.push(new Wn(p.data,p.width,p.height)))}n[c.uuid]=new Xi(h)}else{const h=await r(c.url);n[c.uuid]=new Xi(h)}}}return n}parseTextures(e,t){function n(r,a){return typeof r=="number"?r:(me("ObjectLoader.parseTexture: Constant should be in numeric form.",r),a[r])}const i={};if(e!==void 0)for(let r=0,a=e.length;r<a;r++){const o=e[r];o.image===void 0&&me('ObjectLoader: No "image" specified for',o.uuid),t[o.image]===void 0&&me("ObjectLoader: Undefined image",o.image);const c=t[o.image],l=c.data;let h;Array.isArray(l)?(h=new to,l.length===6&&(h.needsUpdate=!0)):(l&&l.data?h=new Wn:h=new Tt,l&&(h.needsUpdate=!0)),h.source=c,h.uuid=o.uuid,o.name!==void 0&&(h.name=o.name),o.mapping!==void 0&&(h.mapping=n(o.mapping,qy)),o.channel!==void 0&&(h.channel=o.channel),o.offset!==void 0&&h.offset.fromArray(o.offset),o.repeat!==void 0&&h.repeat.fromArray(o.repeat),o.center!==void 0&&h.center.fromArray(o.center),o.rotation!==void 0&&(h.rotation=o.rotation),o.wrap!==void 0&&(h.wrapS=n(o.wrap[0],Hf),h.wrapT=n(o.wrap[1],Hf)),o.format!==void 0&&(h.format=o.format),o.internalFormat!==void 0&&(h.internalFormat=o.internalFormat),o.type!==void 0&&(h.type=o.type),o.colorSpace!==void 0&&(h.colorSpace=o.colorSpace),o.minFilter!==void 0&&(h.minFilter=n(o.minFilter,Wf)),o.magFilter!==void 0&&(h.magFilter=n(o.magFilter,Wf)),o.anisotropy!==void 0&&(h.anisotropy=o.anisotropy),o.flipY!==void 0&&(h.flipY=o.flipY),o.generateMipmaps!==void 0&&(h.generateMipmaps=o.generateMipmaps),o.premultiplyAlpha!==void 0&&(h.premultiplyAlpha=o.premultiplyAlpha),o.unpackAlignment!==void 0&&(h.unpackAlignment=o.unpackAlignment),o.compareFunction!==void 0&&(h.compareFunction=o.compareFunction),o.userData!==void 0&&(h.userData=o.userData),i[o.uuid]=h}return i}parseObject(e,t,n,i,r){let a;function o(d){return t[d]===void 0&&me("ObjectLoader: Undefined geometry",d),t[d]}function c(d){if(d!==void 0){if(Array.isArray(d)){const f=[];for(let p=0,g=d.length;p<g;p++){const x=d[p];n[x]===void 0&&me("ObjectLoader: Undefined material",x),f.push(n[x])}return f}return n[d]===void 0&&me("ObjectLoader: Undefined material",d),n[d]}}function l(d){return i[d]===void 0&&me("ObjectLoader: Undefined texture",d),i[d]}let h,u;switch(e.type){case"Scene":a=new ed,e.background!==void 0&&(Number.isInteger(e.background)?a.background=new _e(e.background):a.background=l(e.background)),e.environment!==void 0&&(a.environment=l(e.environment)),e.fog!==void 0&&(e.fog.type==="Fog"?a.fog=new Nl(e.fog.color,e.fog.near,e.fog.far):e.fog.type==="FogExp2"&&(a.fog=new Ul(e.fog.color,e.fog.density)),e.fog.name!==""&&(a.fog.name=e.fog.name)),e.backgroundBlurriness!==void 0&&(a.backgroundBlurriness=e.backgroundBlurriness),e.backgroundIntensity!==void 0&&(a.backgroundIntensity=e.backgroundIntensity),e.backgroundRotation!==void 0&&a.backgroundRotation.fromArray(e.backgroundRotation),e.environmentIntensity!==void 0&&(a.environmentIntensity=e.environmentIntensity),e.environmentRotation!==void 0&&a.environmentRotation.fromArray(e.environmentRotation);break;case"PerspectiveCamera":a=new Ot(e.fov,e.aspect,e.near,e.far),e.focus!==void 0&&(a.focus=e.focus),e.zoom!==void 0&&(a.zoom=e.zoom),e.filmGauge!==void 0&&(a.filmGauge=e.filmGauge),e.filmOffset!==void 0&&(a.filmOffset=e.filmOffset),e.view!==void 0&&(a.view=Object.assign({},e.view));break;case"OrthographicCamera":a=new co(e.left,e.right,e.top,e.bottom,e.near,e.far),e.zoom!==void 0&&(a.zoom=e.zoom),e.view!==void 0&&(a.view=Object.assign({},e.view));break;case"AmbientLight":a=new sx(e.color,e.intensity);break;case"DirectionalLight":a=new ix(e.color,e.intensity),a.target=e.target||"";break;case"PointLight":a=new nx(e.color,e.intensity,e.distance,e.decay);break;case"RectAreaLight":a=new rx(e.color,e.intensity,e.width,e.height);break;case"SpotLight":a=new tx(e.color,e.intensity,e.distance,e.angle,e.penumbra,e.decay),a.target=e.target||"";break;case"HemisphereLight":a=new ex(e.color,e.groundColor,e.intensity);break;case"LightProbe":a=new ox().fromJSON(e);break;case"SkinnedMesh":h=o(e.geometry),u=c(e.material),a=new S0(h,u),e.bindMode!==void 0&&(a.bindMode=e.bindMode),e.bindMatrix!==void 0&&a.bindMatrix.fromArray(e.bindMatrix),e.skeleton!==void 0&&(a.skeleton=e.skeleton);break;case"Mesh":h=o(e.geometry),u=c(e.material),a=new It(h,u);break;case"InstancedMesh":h=o(e.geometry),u=c(e.material);const d=e.count,f=e.instanceMatrix,p=e.instanceColor;a=new w0(h,u,d),a.instanceMatrix=new Vr(new Float32Array(f.array),16),p!==void 0&&(a.instanceColor=new Vr(new Float32Array(p.array),p.itemSize));break;case"BatchedMesh":h=o(e.geometry),u=c(e.material),a=new T0(e.maxInstanceCount,e.maxVertexCount,e.maxIndexCount,u),a.geometry=h,a.perObjectFrustumCulled=e.perObjectFrustumCulled,a.sortObjects=e.sortObjects,a._drawRanges=e.drawRanges,a._reservedRanges=e.reservedRanges,a._geometryInfo=e.geometryInfo.map(g=>{let x=null,m=null;return g.boundingBox!==void 0&&(x=new Rt().fromJSON(g.boundingBox)),g.boundingSphere!==void 0&&(m=new Pt().fromJSON(g.boundingSphere)),{...g,boundingBox:x,boundingSphere:m}}),a._instanceInfo=e.instanceInfo,a._availableInstanceIds=e._availableInstanceIds,a._availableGeometryIds=e._availableGeometryIds,a._nextIndexStart=e.nextIndexStart,a._nextVertexStart=e.nextVertexStart,a._geometryCount=e.geometryCount,a._maxInstanceCount=e.maxInstanceCount,a._maxVertexCount=e.maxVertexCount,a._maxIndexCount=e.maxIndexCount,a._geometryInitialized=e.geometryInitialized,a._matricesTexture=l(e.matricesTexture.uuid),a._indirectTexture=l(e.indirectTexture.uuid),e.colorsTexture!==void 0&&(a._colorsTexture=l(e.colorsTexture.uuid)),e.boundingSphere!==void 0&&(a.boundingSphere=new Pt().fromJSON(e.boundingSphere)),e.boundingBox!==void 0&&(a.boundingBox=new Rt().fromJSON(e.boundingBox));break;case"LOD":a=new M0;break;case"Line":a=new ts(o(e.geometry),c(e.material));break;case"LineLoop":a=new E0(o(e.geometry),c(e.material));break;case"LineSegments":a=new li(o(e.geometry),c(e.material));break;case"PointCloud":case"Points":a=new A0(o(e.geometry),c(e.material));break;case"Sprite":a=new b0(c(e.material));break;case"Group":a=new Tr;break;case"Bone":a=new nd;break;default:a=new nt}if(a.uuid=e.uuid,e.name!==void 0&&(a.name=e.name),e.matrix!==void 0?(a.matrix.fromArray(e.matrix),e.matrixAutoUpdate!==void 0&&(a.matrixAutoUpdate=e.matrixAutoUpdate),a.matrixAutoUpdate&&a.matrix.decompose(a.position,a.quaternion,a.scale)):(e.position!==void 0&&a.position.fromArray(e.position),e.rotation!==void 0&&a.rotation.fromArray(e.rotation),e.quaternion!==void 0&&a.quaternion.fromArray(e.quaternion),e.scale!==void 0&&a.scale.fromArray(e.scale)),e.up!==void 0&&a.up.fromArray(e.up),e.castShadow!==void 0&&(a.castShadow=e.castShadow),e.receiveShadow!==void 0&&(a.receiveShadow=e.receiveShadow),e.shadow&&(e.shadow.intensity!==void 0&&(a.shadow.intensity=e.shadow.intensity),e.shadow.bias!==void 0&&(a.shadow.bias=e.shadow.bias),e.shadow.normalBias!==void 0&&(a.shadow.normalBias=e.shadow.normalBias),e.shadow.radius!==void 0&&(a.shadow.radius=e.shadow.radius),e.shadow.mapSize!==void 0&&a.shadow.mapSize.fromArray(e.shadow.mapSize),e.shadow.camera!==void 0&&(a.shadow.camera=this.parseObject(e.shadow.camera))),e.visible!==void 0&&(a.visible=e.visible),e.frustumCulled!==void 0&&(a.frustumCulled=e.frustumCulled),e.renderOrder!==void 0&&(a.renderOrder=e.renderOrder),e.userData!==void 0&&(a.userData=e.userData),e.layers!==void 0&&(a.layers.mask=e.layers),e.children!==void 0){const d=e.children;for(let f=0;f<d.length;f++)a.add(this.parseObject(d[f],t,n,i,r))}if(e.animations!==void 0){const d=e.animations;for(let f=0;f<d.length;f++){const p=d[f];a.animations.push(r[p])}}if(e.type==="LOD"){e.autoUpdate!==void 0&&(a.autoUpdate=e.autoUpdate);const d=e.levels;for(let f=0;f<d.length;f++){const p=d[f],g=a.getObjectByProperty("uuid",p.object);g!==void 0&&a.addLevel(g,p.distance,p.hysteresis)}}return a}bindSkeletons(e,t){Object.keys(t).length!==0&&e.traverse(function(n){if(n.isSkinnedMesh===!0&&n.skeleton!==void 0){const i=t[n.skeleton];i===void 0?me("ObjectLoader: No skeleton found with UUID:",n.skeleton):n.bind(i,n.bindMatrix)}})}bindLightTargets(e){e.traverse(function(t){if(t.isDirectionalLight||t.isSpotLight){const n=t.target,i=e.getObjectByProperty("uuid",n);i!==void 0?t.target=i:t.target=new nt}})}}const qy={UVMapping:bl,CubeReflectionMapping:Ai,CubeRefractionMapping:Qi,EquirectangularReflectionMapping:Pa,EquirectangularRefractionMapping:Ia,CubeUVReflectionMapping:Wr},Hf={RepeatWrapping:Da,ClampToEdgeWrapping:dn,MirroredRepeatWrapping:La},Wf={NearestFilter:kt,NearestMipmapNearestFilter:ku,NearestMipmapLinearFilter:Sr,LinearFilter:At,LinearMipmapNearestFilter:ga,LinearMipmapLinearFilter:ii},Gh=new WeakMap;class Yy extends mn{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&me("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&me("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=si.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(l=>{if(Gh.has(a)===!0)i&&i(Gh.get(a)),r.manager.itemError(e),r.manager.itemEnd(e);else return t&&t(l),r.manager.itemEnd(e),l});return}return setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const c=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return si.add(`image-bitmap:${e}`,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){i&&i(l),Gh.set(c,l),si.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});si.add(`image-bitmap:${e}`,c),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}let Ko;class yd{static getContext(){return Ko===void 0&&(Ko=new(window.AudioContext||window.webkitAudioContext)),Ko}static setContext(e){Ko=e}}class Zy extends mn{constructor(e){super(e)}load(e,t,n,i){const r=this,a=new Ri(this.manager);a.setResponseType("arraybuffer"),a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(c){try{const l=c.slice(0);yd.getContext().decodeAudioData(l,function(u){t(u)}).catch(o)}catch(l){o(l)}},n,i);function o(c){i?i(c):We(c),r.manager.itemError(e)}}}const Xf=new De,qf=new De,ms=new De;class $y{constructor(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new Ot,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new Ot,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}update(e){const t=this._cache;if(t.focus!==e.focus||t.fov!==e.fov||t.aspect!==e.aspect*this.aspect||t.near!==e.near||t.far!==e.far||t.zoom!==e.zoom||t.eyeSep!==this.eyeSep){t.focus=e.focus,t.fov=e.fov,t.aspect=e.aspect*this.aspect,t.near=e.near,t.far=e.far,t.zoom=e.zoom,t.eyeSep=this.eyeSep,ms.copy(e.projectionMatrix);const i=t.eyeSep/2,r=i*t.near/t.focus,a=t.near*Math.tan(Us*t.fov*.5)/t.zoom;let o,c;qf.elements[12]=-i,Xf.elements[12]=i,o=-a*t.aspect+r,c=a*t.aspect+r,ms.elements[0]=2*t.near/(c-o),ms.elements[8]=(c+o)/(c-o),this.cameraL.projectionMatrix.copy(ms),o=-a*t.aspect-r,c=a*t.aspect-r,ms.elements[0]=2*t.near/(c-o),ms.elements[8]=(c+o)/(c-o),this.cameraR.projectionMatrix.copy(ms)}this.cameraL.matrixWorld.copy(e.matrixWorld).multiply(qf),this.cameraR.matrixWorld.copy(e.matrixWorld).multiply(Xf)}}class hx extends Ot{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class ux{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const xs=new E,Hh=new Yt,Ky=new E,gs=new E,_s=new E;class Jy extends nt{constructor(){super(),this.type="AudioListener",this.context=yd.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new ux}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(e){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}updateMatrixWorld(e){super.updateMatrixWorld(e);const t=this.context.listener;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(xs,Hh,Ky),gs.set(0,0,-1).applyQuaternion(Hh),_s.set(0,1,0).applyQuaternion(Hh),t.positionX){const n=this.context.currentTime+this.timeDelta;t.positionX.linearRampToValueAtTime(xs.x,n),t.positionY.linearRampToValueAtTime(xs.y,n),t.positionZ.linearRampToValueAtTime(xs.z,n),t.forwardX.linearRampToValueAtTime(gs.x,n),t.forwardY.linearRampToValueAtTime(gs.y,n),t.forwardZ.linearRampToValueAtTime(gs.z,n),t.upX.linearRampToValueAtTime(_s.x,n),t.upY.linearRampToValueAtTime(_s.y,n),t.upZ.linearRampToValueAtTime(_s.z,n)}else t.setPosition(xs.x,xs.y,xs.z),t.setOrientation(gs.x,gs.y,gs.z,_s.x,_s.y,_s.z)}}class dx extends nt{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){me("Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){me("Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;const t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){me("Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(e=0){if(this.hasPlaybackControl===!1){me("Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(this.context.currentTime+e),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){return this.detune=e,this.isPlaying===!0&&this.source.detune!==void 0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){me("Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1,this._progress=0}getLoop(){return this.hasPlaybackControl===!1?(me("Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){me("Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}copy(e,t){return super.copy(e,t),e.sourceType!=="buffer"?(me("Audio: Audio source type cannot be copied."),this):(this.autoplay=e.autoplay,this.buffer=e.buffer,this.detune=e.detune,this.loop=e.loop,this.loopStart=e.loopStart,this.loopEnd=e.loopEnd,this.offset=e.offset,this.duration=e.duration,this.playbackRate=e.playbackRate,this.hasPlaybackControl=e.hasPlaybackControl,this.sourceType=e.sourceType,this.filters=e.filters.slice(),this)}clone(e){return new this.constructor(this.listener).copy(this,e)}}const vs=new E,Yf=new Yt,jy=new E,ys=new E;class Qy extends dx{constructor(e){super(e),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}connect(){return super.connect(),this.panner.connect(this.gain),this}disconnect(){return super.disconnect(),this.panner.disconnect(this.gain),this}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(e){return this.panner.refDistance=e,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(e){return this.panner.rolloffFactor=e,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(e){return this.panner.distanceModel=e,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(e){return this.panner.maxDistance=e,this}setDirectionalCone(e,t,n){return this.panner.coneInnerAngle=e,this.panner.coneOuterAngle=t,this.panner.coneOuterGain=n,this}updateMatrixWorld(e){if(super.updateMatrixWorld(e),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(vs,Yf,jy),ys.set(0,0,1).applyQuaternion(Yf);const t=this.panner;if(t.positionX){const n=this.context.currentTime+this.listener.timeDelta;t.positionX.linearRampToValueAtTime(vs.x,n),t.positionY.linearRampToValueAtTime(vs.y,n),t.positionZ.linearRampToValueAtTime(vs.z,n),t.orientationX.linearRampToValueAtTime(ys.x,n),t.orientationY.linearRampToValueAtTime(ys.y,n),t.orientationZ.linearRampToValueAtTime(ys.z,n)}else t.setPosition(vs.x,vs.y,vs.z),t.setOrientation(ys.x,ys.y,ys.z)}}class eb{constructor(e,t=2048){this.analyser=e.context.createAnalyser(),this.analyser.fftSize=t,this.data=new Uint8Array(this.analyser.frequencyBinCount),e.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let e=0;const t=this.getFrequencyData();for(let n=0;n<t.length;n++)e+=t[n];return e/t.length}}class fx{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,r,a;switch(t){case"quaternion":i=this._slerp,r=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,r=e*i+i;let a=this.cumulativeWeight;if(a===0){for(let o=0;o!==i;++o)n[r+o]=n[o];a=t}else{a+=t;const o=t/a;this._mixBufferRegion(n,r,0,o,i)}this.cumulativeWeight=a}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,r=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const c=t*this._origIndex;this._mixBufferRegion(n,i,c,1-r,t)}a>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let c=t,l=t+t;c!==l;++c)if(n[c]!==n[c+t]){o.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let r=n,a=i;r!==a;++r)t[r]=t[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,r){if(i>=.5)for(let a=0;a!==r;++a)e[t+a]=e[n+a]}_slerp(e,t,n,i){Yt.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,r){const a=this._workIndex*r;Yt.multiplyQuaternionsFlat(e,a,e,t,e,n),Yt.slerpFlat(e,t,e,t,e,a,i)}_lerp(e,t,n,i,r){const a=1-i;for(let o=0;o!==r;++o){const c=t+o;e[c]=e[c]*a+e[n+o]*i}}_lerpAdditive(e,t,n,i,r){for(let a=0;a!==r;++a){const o=t+a;e[o]=e[o]+e[n+a]*i}}}const bd="\\[\\]\\.:\\/",tb=new RegExp("["+bd+"]","g"),Md="[^"+bd+"]",nb="[^"+bd.replace("\\.","")+"]",ib=/((?:WC+[\/:])*)/.source.replace("WC",Md),sb=/(WCOD+)?/.source.replace("WCOD",nb),rb=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Md),ab=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Md),ob=new RegExp("^"+ib+sb+rb+ab+"$"),cb=["material","materials","bones","map"];class lb{constructor(e,t,n){const i=n||it.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class it{constructor(e,t,n){this.path=t,this.parsedPath=n||it.parseTrackName(t),this.node=it.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new it.Composite(e,t,n):new it(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(tb,"")}static parseTrackName(e){const t=ob.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);cb.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===t||o.uuid===t)return o;const c=n(o.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=it.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){me("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){We("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){We("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){We("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){We("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){We("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){We("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){We("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const a=e[i];if(a===void 0){const l=t.nodeName;We("PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){We("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){We("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}it.Composite=lb;it.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};it.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};it.prototype.GetterByBindingType=[it.prototype._getValue_direct,it.prototype._getValue_array,it.prototype._getValue_arrayElement,it.prototype._getValue_toArray];it.prototype.SetterByBindingTypeAndVersioning=[[it.prototype._setValue_direct,it.prototype._setValue_direct_setNeedsUpdate,it.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[it.prototype._setValue_array,it.prototype._setValue_array_setNeedsUpdate,it.prototype._setValue_array_setMatrixWorldNeedsUpdate],[it.prototype._setValue_arrayElement,it.prototype._setValue_arrayElement_setNeedsUpdate,it.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[it.prototype._setValue_fromArray,it.prototype._setValue_fromArray_setNeedsUpdate,it.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class hb{constructor(){this.isAnimationObjectGroup=!0,this.uuid=Sn(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;const e={};this._indicesByUUID=e;for(let n=0,i=arguments.length;n!==i;++n)e[arguments[n].uuid]=n;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};const t=this;this.stats={objects:{get total(){return t._objects.length},get inUse(){return this.total-t.nCachedObjects_}},get bindingsPerObject(){return t._bindings.length}}}add(){const e=this._objects,t=this._indicesByUUID,n=this._paths,i=this._parsedPaths,r=this._bindings,a=r.length;let o,c=e.length,l=this.nCachedObjects_;for(let h=0,u=arguments.length;h!==u;++h){const d=arguments[h],f=d.uuid;let p=t[f];if(p===void 0){p=c++,t[f]=p,e.push(d);for(let g=0,x=a;g!==x;++g)r[g].push(new it(d,n[g],i[g]))}else if(p<l){o=e[p];const g=--l,x=e[g];t[x.uuid]=p,e[p]=x,t[f]=g,e[g]=d;for(let m=0,v=a;m!==v;++m){const _=r[m],y=_[g];let A=_[p];_[p]=y,A===void 0&&(A=new it(d,n[m],i[m])),_[g]=A}}else e[p]!==o&&We("AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=l}remove(){const e=this._objects,t=this._indicesByUUID,n=this._bindings,i=n.length;let r=this.nCachedObjects_;for(let a=0,o=arguments.length;a!==o;++a){const c=arguments[a],l=c.uuid,h=t[l];if(h!==void 0&&h>=r){const u=r++,d=e[u];t[d.uuid]=h,e[h]=d,t[l]=u,e[u]=c;for(let f=0,p=i;f!==p;++f){const g=n[f],x=g[u],m=g[h];g[h]=x,g[u]=m}}}this.nCachedObjects_=r}uncache(){const e=this._objects,t=this._indicesByUUID,n=this._bindings,i=n.length;let r=this.nCachedObjects_,a=e.length;for(let o=0,c=arguments.length;o!==c;++o){const l=arguments[o],h=l.uuid,u=t[h];if(u!==void 0)if(delete t[h],u<r){const d=--r,f=e[d],p=--a,g=e[p];t[f.uuid]=u,e[u]=f,t[g.uuid]=d,e[d]=g,e.pop();for(let x=0,m=i;x!==m;++x){const v=n[x],_=v[d],y=v[p];v[u]=_,v[d]=y,v.pop()}}else{const d=--a,f=e[d];d>0&&(t[f.uuid]=u),e[u]=f,e.pop();for(let p=0,g=i;p!==g;++p){const x=n[p];x[u]=x[d],x.pop()}}}this.nCachedObjects_=r}subscribe_(e,t){const n=this._bindingsIndicesByPath;let i=n[e];const r=this._bindings;if(i!==void 0)return r[i];const a=this._paths,o=this._parsedPaths,c=this._objects,l=c.length,h=this.nCachedObjects_,u=new Array(l);i=r.length,n[e]=i,a.push(e),o.push(t),r.push(u);for(let d=h,f=c.length;d!==f;++d){const p=c[d];u[d]=new it(p,e,t)}return u}unsubscribe_(e){const t=this._bindingsIndicesByPath,n=t[e];if(n!==void 0){const i=this._paths,r=this._parsedPaths,a=this._bindings,o=a.length-1,c=a[o],l=e[o];t[l]=n,a[n]=c,a.pop(),r[n]=r[o],r.pop(),i[n]=i[o],i.pop()}}}class px{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const r=t.tracks,a=r.length,o=new Array(a),c={endingStart:Cs,endingEnd:Cs};for(let l=0;l!==a;++l){const h=r[l].createInterpolant(null);o[l]=h,h.settings=c}this._interpolantSettings=c,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=e0,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){const i=this._clip.duration,r=e._clip.duration,a=r/i,o=i/r;e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,r=i.time,a=this.timeScale;let o=this._timeScaleInterpolant;o===null&&(o=i._lendControlInterpolant(),this._timeScaleInterpolant=o);const c=o.parameterPositions,l=o.sampleValues;return c[0]=r,c[1]=r+n,l[0]=e/a,l[1]=t/a,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const r=this._startTime;if(r!==null){const c=(e-r)*n;c<0||n===0?t=0:(this._startTime=null,t=n*c)}t*=this._updateTimeScale(e);const a=this._updateTime(t),o=this._updateWeight(e);if(o>0){const c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case Yu:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(a),l[h].accumulateAdditive(o);break;case Rl:default:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(a),l[h].accumulate(i,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,r=this._loopCount;const a=n===t0;if(e===0)return r===-1?i:a&&(r&1)===1?t-i:i;if(n===Qm){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),i>=t||i<0){const o=Math.floor(i/t);i-=t*o,r+=Math.abs(o);const c=this.repetitions-r;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){const l=e<0;this._setEndings(l,!l,a)}else this._setEndings(!1,!1,a);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=i;if(a&&(r&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=Rs,i.endingEnd=Rs):(e?i.endingStart=this.zeroSlopeAtStart?Rs:Cs:i.endingStart=Na,t?i.endingEnd=this.zeroSlopeAtEnd?Rs:Cs:i.endingEnd=Na)}_scheduleFading(e,t,n){const i=this._mixer,r=i.time;let a=this._weightInterpolant;a===null&&(a=i._lendControlInterpolant(),this._weightInterpolant=a);const o=a.parameterPositions,c=a.sampleValues;return o[0]=r,c[0]=t,o[1]=r+e,c[1]=n,this}}const ub=new Float32Array(1);class db extends ci{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,r=i.length,a=e._propertyBindings,o=e._interpolants,c=n.uuid,l=this._bindingsByRootAndName;let h=l[c];h===void 0&&(h={},l[c]=h);for(let u=0;u!==r;++u){const d=i[u],f=d.name;let p=h[f];if(p!==void 0)++p.referenceCount,a[u]=p;else{if(p=a[u],p!==void 0){p._cacheIndex===null&&(++p.referenceCount,this._addInactiveBinding(p,c,f));continue}const g=t&&t._propertyBindings[u].binding.parsedPath;p=new fx(it.create(n,f,g),d.ValueTypeName,d.getValueSize()),++p.referenceCount,this._addInactiveBinding(p,c,f),a[u]=p}o[u].resultBuffer=p.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,r=this._actionsByClip[i];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,r=this._actionsByClip;let a=r[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=a;else{const o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=i.length,i.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const r=e._clip.uuid,a=this._actionsByClip,o=a[r],c=o.knownActions,l=c[c.length-1],h=e._byClipCacheIndex;l._byClipCacheIndex=h,c[h]=l,c.pop(),e._byClipCacheIndex=null;const u=o.actionByRoot,d=(e._localRoot||this._root).uuid;delete u[d],c.length===0&&delete a[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,r=this._bindings;let a=i[t];a===void 0&&(a={},i[t]=a),a[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,r=n.path,a=this._bindingsByRootAndName,o=a[i],c=t[t.length-1],l=e._cacheIndex;c._cacheIndex=l,t[l]=c,t.pop(),delete o[r],Object.keys(o).length===0&&delete a[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new xd(new Float32Array(2),new Float32Array(2),1,ub),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,r=t[i];e.__cacheIndex=i,t[i]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){const i=t||this._root,r=i.uuid;let a=typeof e=="string"?Xa.findByName(i,e):e;const o=a!==null?a.uuid:e,c=this._actionsByClip[o];let l=null;if(n===void 0&&(a!==null?n=a.blendMode:n=Rl),c!==void 0){const u=c.actionByRoot[r];if(u!==void 0&&u.blendMode===n)return u;l=c.knownActions[0],a===null&&(a=l._clip)}if(a===null)return null;const h=new px(this,a,t,n);return this._bindAction(h,l),this._addInactiveAction(h,o,r),h}existingAction(e,t){const n=t||this._root,i=n.uuid,r=typeof e=="string"?Xa.findByName(n,e):e,a=r?r.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,r=Math.sign(e),a=this._accuIndex^=1;for(let l=0;l!==n;++l)t[l]._update(i,e,r,a);const o=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)o[l].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){const a=r.knownActions;for(let o=0,c=a.length;o!==c;++o){const l=a[o];this._deactivateAction(l);const h=l._cacheIndex,u=t[t.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(l)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const a in n){const o=n[a].actionByRoot,c=o[t];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}const i=this._bindingsByRootAndName,r=i[t];if(r!==void 0)for(const a in r){const o=r[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}class fb extends Ku{constructor(e=1,t=1,n=1,i={}){super(e,t,i),this.isRenderTarget3D=!0,this.depth=n,this.texture=new Il(null,e,t,n),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}}class Sd{constructor(e){this.value=e}clone(){return new Sd(this.value.clone===void 0?this.value:this.value.clone())}}let pb=0;class mb extends ci{constructor(){super(),this.isUniformsGroup=!0,Object.defineProperty(this,"id",{value:pb++}),this.name="",this.usage=Oa,this.uniforms=[]}add(e){return this.uniforms.push(e),this}remove(e){const t=this.uniforms.indexOf(e);return t!==-1&&this.uniforms.splice(t,1),this}setName(e){return this.name=e,this}setUsage(e){return this.usage=e,this}dispose(){this.dispatchEvent({type:"dispose"})}copy(e){this.name=e.name,this.usage=e.usage;const t=e.uniforms;this.uniforms.length=0;for(let n=0,i=t.length;n<i;n++){const r=Array.isArray(t[n])?t[n]:[t[n]];for(let a=0;a<r.length;a++)this.uniforms.push(r[a].clone())}return this}clone(){return new this.constructor().copy(this)}}class xb extends Fl{constructor(e,t,n=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}class gb{constructor(e,t,n,i,r,a=!1){this.isGLBufferAttribute=!0,this.name="",this.buffer=e,this.type=t,this.itemSize=n,this.elementSize=i,this.count=r,this.normalized=a,this.version=0}set needsUpdate(e){e===!0&&this.version++}setBuffer(e){return this.buffer=e,this}setType(e,t){return this.type=e,this.elementSize=t,this}setItemSize(e){return this.itemSize=e,this}setCount(e){return this.count=e,this}}const Zf=new De;class _b{constructor(e,t,n=0,i=1/0){this.ray=new Li(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Dl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):We("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Zf.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Zf),this}intersectObject(e,t=!0,n=[]){return vu(e,this,n,t),n.sort($f),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)vu(e[i],this,n,t);return n.sort($f),n}}function $f(s,e){return s.distance-e.distance}function vu(s,e,t,n){let i=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const r=s.children;for(let a=0,o=r.length;a<o;a++)vu(r[a],e,t,!0)}}class vb{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=yb.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function yb(){this._document.hidden===!1&&this.reset()}class yu{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=ke(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(ke(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class bb{constructor(e=1,t=0,n=0){this.radius=e,this.theta=t,this.y=n}set(e,t,n){return this.radius=e,this.theta=t,this.y=n,this}copy(e){return this.radius=e.radius,this.theta=e.theta,this.y=e.y,this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+n*n),this.theta=Math.atan2(e,n),this.y=t,this}clone(){return new this.constructor().copy(this)}}class wd{constructor(e,t,n,i){wd.prototype.isMatrix2=!0,this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,i){const r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=i,this}}const Kf=new X;class Mb{constructor(e=new X(1/0,1/0),t=new X(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Kf.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Kf).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Jf=new E,Jo=new E,_r=new E,vr=new E,Wh=new E,Sb=new E,wb=new E;class mx{constructor(e=new E,t=new E){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){Jf.subVectors(e,this.start),Jo.subVectors(this.end,this.start);const n=Jo.dot(Jo);let r=Jo.dot(Jf)/n;return t&&(r=ke(r,0,1)),r}closestPointToPoint(e,t,n){const i=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(i).add(this.start)}distanceSqToLine3(e,t=Sb,n=wb){const i=10000000000000001e-32;let r,a;const o=this.start,c=e.start,l=this.end,h=e.end;_r.subVectors(l,o),vr.subVectors(h,c),Wh.subVectors(o,c);const u=_r.dot(_r),d=vr.dot(vr),f=vr.dot(Wh);if(u<=i&&d<=i)return t.copy(o),n.copy(c),t.sub(n),t.dot(t);if(u<=i)r=0,a=f/d,a=ke(a,0,1);else{const p=_r.dot(Wh);if(d<=i)a=0,r=ke(-p/u,0,1);else{const g=_r.dot(vr),x=u*d-g*g;x!==0?r=ke((g*f-p*d)/x,0,1):r=0,a=(g*r+f)/d,a<0?(a=0,r=ke(-p/u,0,1)):a>1&&(a=1,r=ke((g-p)/u,0,1))}}return t.copy(o).add(_r.multiplyScalar(r)),n.copy(c).add(vr.multiplyScalar(a)),t.sub(n),t.dot(t)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}const jf=new E;class Tb extends nt{constructor(e,t){super(),this.light=e,this.matrixAutoUpdate=!1,this.color=t,this.type="SpotLightHelper";const n=new Ye,i=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let a=0,o=1,c=32;a<c;a++,o++){const l=a/c*Math.PI*2,h=o/c*Math.PI*2;i.push(Math.cos(l),Math.sin(l),1,Math.cos(h),Math.sin(h),1)}n.setAttribute("position",new Se(i,3));const r=new sn({fog:!1,toneMapped:!1});this.cone=new li(n,r),this.add(this.cone),this.update()}dispose(){this.cone.geometry.dispose(),this.cone.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),this.parent?(this.parent.updateWorldMatrix(!0),this.matrix.copy(this.parent.matrixWorld).invert().multiply(this.light.matrixWorld)):this.matrix.copy(this.light.matrixWorld),this.matrixWorld.copy(this.light.matrixWorld);const e=this.light.distance?this.light.distance:1e3,t=e*Math.tan(this.light.angle);this.cone.scale.set(t,t,e),jf.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(jf),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}}const Vi=new E,jo=new De,Xh=new De;class Eb extends li{constructor(e){const t=xx(e),n=new Ye,i=[],r=[];for(let l=0;l<t.length;l++){const h=t[l];h.parent&&h.parent.isBone&&(i.push(0,0,0),i.push(0,0,0),r.push(0,0,0),r.push(0,0,0))}n.setAttribute("position",new Se(i,3)),n.setAttribute("color",new Se(r,3));const a=new sn({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,a),this.isSkeletonHelper=!0,this.type="SkeletonHelper",this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1;const o=new _e(255),c=new _e(65280);this.setColors(o,c)}updateMatrixWorld(e){const t=this.bones,n=this.geometry,i=n.getAttribute("position");Xh.copy(this.root.matrixWorld).invert();for(let r=0,a=0;r<t.length;r++){const o=t[r];o.parent&&o.parent.isBone&&(jo.multiplyMatrices(Xh,o.matrixWorld),Vi.setFromMatrixPosition(jo),i.setXYZ(a,Vi.x,Vi.y,Vi.z),jo.multiplyMatrices(Xh,o.parent.matrixWorld),Vi.setFromMatrixPosition(jo),i.setXYZ(a+1,Vi.x,Vi.y,Vi.z),a+=2)}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(e)}setColors(e,t){const i=this.geometry.getAttribute("color");for(let r=0;r<i.count;r+=2)i.setXYZ(r,e.r,e.g,e.b),i.setXYZ(r+1,t.r,t.g,t.b);return i.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}function xx(s){const e=[];s.isBone===!0&&e.push(s);for(let t=0;t<s.children.length;t++)e.push(...xx(s.children[t]));return e}class Ab extends It{constructor(e,t,n){const i=new ro(t,4,2),r=new Ui({wireframe:!0,fog:!1,toneMapped:!1});super(i,r),this.light=e,this.color=n,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){this.geometry.dispose(),this.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}}const Cb=new E,Qf=new _e,ep=new _e;class Rb extends nt{constructor(e,t,n){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="HemisphereLightHelper";const i=new so(t);i.rotateY(Math.PI*.5),this.material=new Ui({wireframe:!0,fog:!1,toneMapped:!1}),this.color===void 0&&(this.material.vertexColors=!0);const r=i.getAttribute("position"),a=new Float32Array(r.count*3);i.setAttribute("color",new dt(a,3)),this.add(new It(i,this.material)),this.update()}dispose(){this.children[0].geometry.dispose(),this.children[0].material.dispose()}update(){const e=this.children[0];if(this.color!==void 0)this.material.color.set(this.color);else{const t=e.geometry.getAttribute("color");Qf.copy(this.light.color),ep.copy(this.light.groundColor);for(let n=0,i=t.count;n<i;n++){const r=n<i/2?Qf:ep;t.setXYZ(n,r.r,r.g,r.b)}t.needsUpdate=!0}this.light.updateWorldMatrix(!0,!1),e.lookAt(Cb.setFromMatrixPosition(this.light.matrixWorld).negate())}}class Pb extends li{constructor(e=10,t=10,n=4473924,i=8947848){n=new _e(n),i=new _e(i);const r=t/2,a=e/t,o=e/2,c=[],l=[];for(let d=0,f=0,p=-o;d<=t;d++,p+=a){c.push(-o,0,p,o,0,p),c.push(p,0,-o,p,0,o);const g=d===r?n:i;g.toArray(l,f),f+=3,g.toArray(l,f),f+=3,g.toArray(l,f),f+=3,g.toArray(l,f),f+=3}const h=new Ye;h.setAttribute("position",new Se(c,3)),h.setAttribute("color",new Se(l,3));const u=new sn({vertexColors:!0,toneMapped:!1});super(h,u),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class Ib extends li{constructor(e=10,t=16,n=8,i=64,r=4473924,a=8947848){r=new _e(r),a=new _e(a);const o=[],c=[];if(t>1)for(let u=0;u<t;u++){const d=u/t*(Math.PI*2),f=Math.sin(d)*e,p=Math.cos(d)*e;o.push(0,0,0),o.push(f,0,p);const g=u&1?r:a;c.push(g.r,g.g,g.b),c.push(g.r,g.g,g.b)}for(let u=0;u<n;u++){const d=u&1?r:a,f=e-e/n*u;for(let p=0;p<i;p++){let g=p/i*(Math.PI*2),x=Math.sin(g)*f,m=Math.cos(g)*f;o.push(x,0,m),c.push(d.r,d.g,d.b),g=(p+1)/i*(Math.PI*2),x=Math.sin(g)*f,m=Math.cos(g)*f,o.push(x,0,m),c.push(d.r,d.g,d.b)}}const l=new Ye;l.setAttribute("position",new Se(o,3)),l.setAttribute("color",new Se(c,3));const h=new sn({vertexColors:!0,toneMapped:!1});super(l,h),this.type="PolarGridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}const tp=new E,Qo=new E,np=new E;class Db extends nt{constructor(e,t,n){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="DirectionalLightHelper",t===void 0&&(t=1);let i=new Ye;i.setAttribute("position",new Se([-t,t,0,t,t,0,t,-t,0,-t,-t,0,-t,t,0],3));const r=new sn({fog:!1,toneMapped:!1});this.lightPlane=new ts(i,r),this.add(this.lightPlane),i=new Ye,i.setAttribute("position",new Se([0,0,0,0,0,1],3)),this.targetLine=new ts(i,r),this.add(this.targetLine),this.update()}dispose(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),tp.setFromMatrixPosition(this.light.matrixWorld),Qo.setFromMatrixPosition(this.light.target.matrixWorld),np.subVectors(Qo,tp),this.lightPlane.lookAt(Qo),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(Qo),this.targetLine.scale.z=np.length()}}const ec=new E,wt=new Ll;class Lb extends li{constructor(e){const t=new Ye,n=new sn({color:16777215,vertexColors:!0,toneMapped:!1}),i=[],r=[],a={};o("n1","n2"),o("n2","n4"),o("n4","n3"),o("n3","n1"),o("f1","f2"),o("f2","f4"),o("f4","f3"),o("f3","f1"),o("n1","f1"),o("n2","f2"),o("n3","f3"),o("n4","f4"),o("p","n1"),o("p","n2"),o("p","n3"),o("p","n4"),o("u1","u2"),o("u2","u3"),o("u3","u1"),o("c","t"),o("p","c"),o("cn1","cn2"),o("cn3","cn4"),o("cf1","cf2"),o("cf3","cf4");function o(p,g){c(p),c(g)}function c(p){i.push(0,0,0),r.push(0,0,0),a[p]===void 0&&(a[p]=[]),a[p].push(i.length/3-1)}t.setAttribute("position",new Se(i,3)),t.setAttribute("color",new Se(r,3)),super(t,n),this.type="CameraHelper",this.camera=e,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=a,this.update();const l=new _e(16755200),h=new _e(16711680),u=new _e(43775),d=new _e(16777215),f=new _e(3355443);this.setColors(l,h,u,d,f)}setColors(e,t,n,i,r){const o=this.geometry.getAttribute("color");return o.setXYZ(0,e.r,e.g,e.b),o.setXYZ(1,e.r,e.g,e.b),o.setXYZ(2,e.r,e.g,e.b),o.setXYZ(3,e.r,e.g,e.b),o.setXYZ(4,e.r,e.g,e.b),o.setXYZ(5,e.r,e.g,e.b),o.setXYZ(6,e.r,e.g,e.b),o.setXYZ(7,e.r,e.g,e.b),o.setXYZ(8,e.r,e.g,e.b),o.setXYZ(9,e.r,e.g,e.b),o.setXYZ(10,e.r,e.g,e.b),o.setXYZ(11,e.r,e.g,e.b),o.setXYZ(12,e.r,e.g,e.b),o.setXYZ(13,e.r,e.g,e.b),o.setXYZ(14,e.r,e.g,e.b),o.setXYZ(15,e.r,e.g,e.b),o.setXYZ(16,e.r,e.g,e.b),o.setXYZ(17,e.r,e.g,e.b),o.setXYZ(18,e.r,e.g,e.b),o.setXYZ(19,e.r,e.g,e.b),o.setXYZ(20,e.r,e.g,e.b),o.setXYZ(21,e.r,e.g,e.b),o.setXYZ(22,e.r,e.g,e.b),o.setXYZ(23,e.r,e.g,e.b),o.setXYZ(24,t.r,t.g,t.b),o.setXYZ(25,t.r,t.g,t.b),o.setXYZ(26,t.r,t.g,t.b),o.setXYZ(27,t.r,t.g,t.b),o.setXYZ(28,t.r,t.g,t.b),o.setXYZ(29,t.r,t.g,t.b),o.setXYZ(30,t.r,t.g,t.b),o.setXYZ(31,t.r,t.g,t.b),o.setXYZ(32,n.r,n.g,n.b),o.setXYZ(33,n.r,n.g,n.b),o.setXYZ(34,n.r,n.g,n.b),o.setXYZ(35,n.r,n.g,n.b),o.setXYZ(36,n.r,n.g,n.b),o.setXYZ(37,n.r,n.g,n.b),o.setXYZ(38,i.r,i.g,i.b),o.setXYZ(39,i.r,i.g,i.b),o.setXYZ(40,r.r,r.g,r.b),o.setXYZ(41,r.r,r.g,r.b),o.setXYZ(42,r.r,r.g,r.b),o.setXYZ(43,r.r,r.g,r.b),o.setXYZ(44,r.r,r.g,r.b),o.setXYZ(45,r.r,r.g,r.b),o.setXYZ(46,r.r,r.g,r.b),o.setXYZ(47,r.r,r.g,r.b),o.setXYZ(48,r.r,r.g,r.b),o.setXYZ(49,r.r,r.g,r.b),o.needsUpdate=!0,this}update(){const e=this.geometry,t=this.pointMap,n=1,i=1;let r,a;if(wt.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),this.camera.reversedDepth===!0)r=1,a=0;else if(this.camera.coordinateSystem===bn)r=-1,a=1;else if(this.camera.coordinateSystem===Or)r=0,a=1;else throw new Error("THREE.CameraHelper.update(): Invalid coordinate system: "+this.camera.coordinateSystem);Et("c",t,e,wt,0,0,r),Et("t",t,e,wt,0,0,a),Et("n1",t,e,wt,-n,-i,r),Et("n2",t,e,wt,n,-i,r),Et("n3",t,e,wt,-n,i,r),Et("n4",t,e,wt,n,i,r),Et("f1",t,e,wt,-n,-i,a),Et("f2",t,e,wt,n,-i,a),Et("f3",t,e,wt,-n,i,a),Et("f4",t,e,wt,n,i,a),Et("u1",t,e,wt,n*.7,i*1.1,r),Et("u2",t,e,wt,-n*.7,i*1.1,r),Et("u3",t,e,wt,0,i*2,r),Et("cf1",t,e,wt,-n,0,a),Et("cf2",t,e,wt,n,0,a),Et("cf3",t,e,wt,0,-i,a),Et("cf4",t,e,wt,0,i,a),Et("cn1",t,e,wt,-n,0,r),Et("cn2",t,e,wt,n,0,r),Et("cn3",t,e,wt,0,-i,r),Et("cn4",t,e,wt,0,i,r),e.getAttribute("position").needsUpdate=!0}dispose(){this.geometry.dispose(),this.material.dispose()}}function Et(s,e,t,n,i,r,a){ec.set(i,r,a).unproject(n);const o=e[s];if(o!==void 0){const c=t.getAttribute("position");for(let l=0,h=o.length;l<h;l++)c.setXYZ(o[l],ec.x,ec.y,ec.z)}}const tc=new Rt;class Ub extends li{constructor(e,t=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=new Float32Array(24),r=new Ye;r.setIndex(new dt(n,1)),r.setAttribute("position",new dt(i,3)),super(r,new sn({color:t,toneMapped:!1})),this.object=e,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(){if(this.object!==void 0&&tc.setFromObject(this.object),tc.isEmpty())return;const e=tc.min,t=tc.max,n=this.geometry.attributes.position,i=n.array;i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=e.x,i[4]=t.y,i[5]=t.z,i[6]=e.x,i[7]=e.y,i[8]=t.z,i[9]=t.x,i[10]=e.y,i[11]=t.z,i[12]=t.x,i[13]=t.y,i[14]=e.z,i[15]=e.x,i[16]=t.y,i[17]=e.z,i[18]=e.x,i[19]=e.y,i[20]=e.z,i[21]=t.x,i[22]=e.y,i[23]=e.z,n.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(e){return this.object=e,this.update(),this}copy(e,t){return super.copy(e,t),this.object=e.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class Nb extends li{constructor(e,t=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],r=new Ye;r.setIndex(new dt(n,1)),r.setAttribute("position",new Se(i,3)),super(r,new sn({color:t,toneMapped:!1})),this.box=e,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(e){const t=this.box;t.isEmpty()||(t.getCenter(this.position),t.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(e))}dispose(){this.geometry.dispose(),this.material.dispose()}}class Fb extends ts{constructor(e,t=1,n=16776960){const i=n,r=[1,-1,0,-1,1,0,-1,-1,0,1,1,0,-1,1,0,-1,-1,0,1,-1,0,1,1,0],a=new Ye;a.setAttribute("position",new Se(r,3)),a.computeBoundingSphere(),super(a,new sn({color:i,toneMapped:!1})),this.type="PlaneHelper",this.plane=e,this.size=t;const o=[1,1,0,-1,1,0,-1,-1,0,1,1,0,-1,-1,0,1,-1,0],c=new Ye;c.setAttribute("position",new Se(o,3)),c.computeBoundingSphere(),this.add(new It(c,new Ui({color:i,opacity:.2,transparent:!0,depthWrite:!1,toneMapped:!1})))}updateMatrixWorld(e){this.position.set(0,0,0),this.scale.set(.5*this.size,.5*this.size,1),this.lookAt(this.plane.normal),this.translateZ(-this.plane.constant),super.updateMatrixWorld(e)}dispose(){this.geometry.dispose(),this.material.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}}const ip=new E;let nc,qh;class Ob extends nt{constructor(e=new E(0,0,1),t=new E(0,0,0),n=1,i=16776960,r=n*.2,a=r*.2){super(),this.type="ArrowHelper",nc===void 0&&(nc=new Ye,nc.setAttribute("position",new Se([0,0,0,0,1,0],3)),qh=new io(.5,1,5,1),qh.translate(0,-.5,0)),this.position.copy(t),this.line=new ts(nc,new sn({color:i,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new It(qh,new Ui({color:i,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(n,r,a)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{ip.set(e.z,0,-e.x).normalize();const t=Math.acos(e.y);this.quaternion.setFromAxisAngle(ip,t)}}setLength(e,t=e*.2,n=t*.2){this.line.scale.set(1,Math.max(1e-4,e-t),1),this.line.updateMatrix(),this.cone.scale.set(n,t,n),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}class Bb extends li{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],i=new Ye;i.setAttribute("position",new Se(t,3)),i.setAttribute("color",new Se(n,3));const r=new sn({vertexColors:!0,toneMapped:!1});super(i,r),this.type="AxesHelper"}setColors(e,t,n){const i=new _e,r=this.geometry.attributes.color.array;return i.set(e),i.toArray(r,0),i.toArray(r,3),i.set(t),i.toArray(r,6),i.toArray(r,9),i.set(n),i.toArray(r,12),i.toArray(r,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class zb{constructor(){this.type="ShapePath",this.color=new _e,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new rl,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,i){return this.currentPath.quadraticCurveTo(e,t,n,i),this}bezierCurveTo(e,t,n,i,r,a){return this.currentPath.bezierCurveTo(e,t,n,i,r,a),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(m){const v=[];for(let _=0,y=m.length;_<y;_++){const A=m[_],w=new Ns;w.curves=A.curves,v.push(w)}return v}function n(m,v){const _=v.length;let y=!1;for(let A=_-1,w=0;w<_;A=w++){let P=v[A],I=v[w],S=I.x-P.x,M=I.y-P.y;if(Math.abs(M)>Number.EPSILON){if(M<0&&(P=v[w],S=-S,I=v[A],M=-M),m.y<P.y||m.y>I.y)continue;if(m.y===P.y){if(m.x===P.x)return!0}else{const D=M*(m.x-P.x)-S*(m.y-P.y);if(D===0)return!0;if(D<0)continue;y=!y}}else{if(m.y!==P.y)continue;if(I.x<=m.x&&m.x<=P.x||P.x<=m.x&&m.x<=I.x)return!0}}return y}const i=Gn.isClockWise,r=this.subPaths;if(r.length===0)return[];let a,o,c;const l=[];if(r.length===1)return o=r[0],c=new Ns,c.curves=o.curves,l.push(c),l;let h=!i(r[0].getPoints());h=e?!h:h;const u=[],d=[];let f=[],p=0,g;d[p]=void 0,f[p]=[];for(let m=0,v=r.length;m<v;m++)o=r[m],g=o.getPoints(),a=i(g),a=e?!a:a,a?(!h&&d[p]&&p++,d[p]={s:new Ns,p:g},d[p].s.curves=o.curves,h&&p++,f[p]=[]):f[p].push({h:o,p:g[0]});if(!d[0])return t(r);if(d.length>1){let m=!1,v=0;for(let _=0,y=d.length;_<y;_++)u[_]=[];for(let _=0,y=d.length;_<y;_++){const A=f[_];for(let w=0;w<A.length;w++){const P=A[w];let I=!0;for(let S=0;S<d.length;S++)n(P.p,d[S].p)&&(_!==S&&v++,I?(I=!1,u[S].push(P)):m=!0);I&&u[_].push(P)}}v>0&&m===!1&&(f=u)}let x;for(let m=0,v=d.length;m<v;m++){c=d[m].s,l.push(c),x=f[m];for(let _=0,y=x.length;_<y;_++)c.holes.push(x[_].h)}return l}}class gx extends ci{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){me("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function kb(s,e){const t=s.image&&s.image.width?s.image.width/s.image.height:1;return t>e?(s.repeat.x=1,s.repeat.y=t/e,s.offset.x=0,s.offset.y=(1-s.repeat.y)/2):(s.repeat.x=e/t,s.repeat.y=1,s.offset.x=(1-s.repeat.x)/2,s.offset.y=0),s}function Vb(s,e){const t=s.image&&s.image.width?s.image.width/s.image.height:1;return t>e?(s.repeat.x=e/t,s.repeat.y=1,s.offset.x=(1-s.repeat.x)/2,s.offset.y=0):(s.repeat.x=1,s.repeat.y=t/e,s.offset.x=0,s.offset.y=(1-s.repeat.y)/2),s}function Gb(s){return s.repeat.x=1,s.repeat.y=1,s.offset.x=0,s.offset.y=0,s}function bu(s,e,t,n){const i=Hb(n);switch(t){case Xu:return s*e;case Tl:return s*e/i.components*i.byteLength;case eo:return s*e/i.components*i.byteLength;case El:return s*e*2/i.components*i.byteLength;case Al:return s*e*2/i.components*i.byteLength;case qu:return s*e*3/i.components*i.byteLength;case tn:return s*e*4/i.components*i.byteLength;case Cl:return s*e*4/i.components*i.byteLength;case _a:case va:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case ya:case ba:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Cc:case Pc:return Math.max(s,16)*Math.max(e,8)/4;case Ac:case Rc:return Math.max(s,8)*Math.max(e,8)/2;case Ic:case Dc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Lc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Uc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Nc:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Fc:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Oc:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Bc:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case zc:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case kc:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Vc:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Gc:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Hc:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Wc:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Xc:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case qc:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Yc:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Zc:case $c:case Kc:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Jc:case jc:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Qc:case el:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Hb(s){switch(s){case Yn:case Vu:return{byteLength:1,components:1};case Lr:case Gu:case qs:return{byteLength:2,components:1};case Sl:case wl:return{byteLength:2,components:4};case Ci:case Ml:case fn:return{byteLength:4,components:1};case Hu:case Wu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}class Wb{static contain(e,t){return kb(e,t)}static cover(e,t){return Vb(e,t)}static fill(e){return Gb(e)}static getByteLength(e,t,n,i){return bu(e,t,n,i)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:yl}}));typeof window<"u"&&(window.__THREE__?me("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=yl);function _x(){let s=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Xb(s){const e=new WeakMap;function t(o,c){const l=o.array,h=o.usage,u=l.byteLength,d=s.createBuffer();s.bindBuffer(c,d),s.bufferData(c,l,h),o.onUploadCallback();let f;if(l instanceof Float32Array)f=s.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=s.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=s.SHORT;else if(l instanceof Uint32Array)f=s.UNSIGNED_INT;else if(l instanceof Int32Array)f=s.INT;else if(l instanceof Int8Array)f=s.BYTE;else if(l instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,c,l){const h=c.array,u=c.updateRanges;if(s.bindBuffer(l,o),u.length===0)s.bufferSubData(l,0,h);else{u.sort((f,p)=>f.start-p.start);let d=0;for(let f=1;f<u.length;f++){const p=u[d],g=u[f];g.start<=p.start+p.count+1?p.count=Math.max(p.count,g.start+g.count-p.start):(++d,u[d]=g)}u.length=d+1;for(let f=0,p=u.length;f<p;f++){const g=u[f];s.bufferSubData(l,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(s.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:i,remove:r,update:a}}var qb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Yb=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Zb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$b=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Kb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Jb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,jb=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Qb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,eM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,tM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,nM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,iM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,sM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,rM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,aM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,oM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,cM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,lM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,hM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,uM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,dM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,fM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,pM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,mM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,xM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,gM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,_M=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,vM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,yM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,bM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,MM="gl_FragColor = linearToOutputTexel( gl_FragColor );",SM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,wM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,TM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,EM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,AM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,CM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,RM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,PM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,IM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,DM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,LM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,UM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,NM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,FM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,OM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,BM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,zM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,kM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,VM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,GM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,HM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,WM=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 uv = vec2( roughness, dotNV );
	return texture2D( dfgLUT, uv ).rg;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNV * dotNV), 0.0, dotNV), material.roughness );
	vec2 dfgL = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNL * dotNL), 0.0, dotNL), material.roughness );
	vec3 FssEss_V = material.specularColor * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColor * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColor + ( 1.0 - material.specularColor ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,XM=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,qM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,YM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ZM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$M=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,KM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,JM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,jM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,QM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,eS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,tS=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,nS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,iS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,sS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,rS=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,aS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,oS=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,cS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,hS=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,uS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,pS=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,mS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,xS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,gS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,_S=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,vS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,yS=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,bS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,MS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,SS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,wS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,TS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ES=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,AS=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,CS=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,RS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,PS=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,IS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,DS=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,LS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,US=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,NS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,FS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,OS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,BS=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,zS=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,kS=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,VS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,GS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,HS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,WS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const XS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,qS=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,YS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ZS=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$S=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,KS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,JS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,jS=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,QS=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,e1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,t1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,n1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,i1=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,s1=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,r1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,a1=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,o1=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,c1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,l1=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,h1=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,u1=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,d1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,f1=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,p1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,m1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,x1=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,g1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,v1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,y1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,b1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,M1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,S1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,w1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Oe={alphahash_fragment:qb,alphahash_pars_fragment:Yb,alphamap_fragment:Zb,alphamap_pars_fragment:$b,alphatest_fragment:Kb,alphatest_pars_fragment:Jb,aomap_fragment:jb,aomap_pars_fragment:Qb,batching_pars_vertex:eM,batching_vertex:tM,begin_vertex:nM,beginnormal_vertex:iM,bsdfs:sM,iridescence_fragment:rM,bumpmap_pars_fragment:aM,clipping_planes_fragment:oM,clipping_planes_pars_fragment:cM,clipping_planes_pars_vertex:lM,clipping_planes_vertex:hM,color_fragment:uM,color_pars_fragment:dM,color_pars_vertex:fM,color_vertex:pM,common:mM,cube_uv_reflection_fragment:xM,defaultnormal_vertex:gM,displacementmap_pars_vertex:_M,displacementmap_vertex:vM,emissivemap_fragment:yM,emissivemap_pars_fragment:bM,colorspace_fragment:MM,colorspace_pars_fragment:SM,envmap_fragment:wM,envmap_common_pars_fragment:TM,envmap_pars_fragment:EM,envmap_pars_vertex:AM,envmap_physical_pars_fragment:BM,envmap_vertex:CM,fog_vertex:RM,fog_pars_vertex:PM,fog_fragment:IM,fog_pars_fragment:DM,gradientmap_pars_fragment:LM,lightmap_pars_fragment:UM,lights_lambert_fragment:NM,lights_lambert_pars_fragment:FM,lights_pars_begin:OM,lights_toon_fragment:zM,lights_toon_pars_fragment:kM,lights_phong_fragment:VM,lights_phong_pars_fragment:GM,lights_physical_fragment:HM,lights_physical_pars_fragment:WM,lights_fragment_begin:XM,lights_fragment_maps:qM,lights_fragment_end:YM,logdepthbuf_fragment:ZM,logdepthbuf_pars_fragment:$M,logdepthbuf_pars_vertex:KM,logdepthbuf_vertex:JM,map_fragment:jM,map_pars_fragment:QM,map_particle_fragment:eS,map_particle_pars_fragment:tS,metalnessmap_fragment:nS,metalnessmap_pars_fragment:iS,morphinstance_vertex:sS,morphcolor_vertex:rS,morphnormal_vertex:aS,morphtarget_pars_vertex:oS,morphtarget_vertex:cS,normal_fragment_begin:lS,normal_fragment_maps:hS,normal_pars_fragment:uS,normal_pars_vertex:dS,normal_vertex:fS,normalmap_pars_fragment:pS,clearcoat_normal_fragment_begin:mS,clearcoat_normal_fragment_maps:xS,clearcoat_pars_fragment:gS,iridescence_pars_fragment:_S,opaque_fragment:vS,packing:yS,premultiplied_alpha_fragment:bS,project_vertex:MS,dithering_fragment:SS,dithering_pars_fragment:wS,roughnessmap_fragment:TS,roughnessmap_pars_fragment:ES,shadowmap_pars_fragment:AS,shadowmap_pars_vertex:CS,shadowmap_vertex:RS,shadowmask_pars_fragment:PS,skinbase_vertex:IS,skinning_pars_vertex:DS,skinning_vertex:LS,skinnormal_vertex:US,specularmap_fragment:NS,specularmap_pars_fragment:FS,tonemapping_fragment:OS,tonemapping_pars_fragment:BS,transmission_fragment:zS,transmission_pars_fragment:kS,uv_pars_fragment:VS,uv_pars_vertex:GS,uv_vertex:HS,worldpos_vertex:WS,background_vert:XS,background_frag:qS,backgroundCube_vert:YS,backgroundCube_frag:ZS,cube_vert:$S,cube_frag:KS,depth_vert:JS,depth_frag:jS,distanceRGBA_vert:QS,distanceRGBA_frag:e1,equirect_vert:t1,equirect_frag:n1,linedashed_vert:i1,linedashed_frag:s1,meshbasic_vert:r1,meshbasic_frag:a1,meshlambert_vert:o1,meshlambert_frag:c1,meshmatcap_vert:l1,meshmatcap_frag:h1,meshnormal_vert:u1,meshnormal_frag:d1,meshphong_vert:f1,meshphong_frag:p1,meshphysical_vert:m1,meshphysical_frag:x1,meshtoon_vert:g1,meshtoon_frag:_1,points_vert:v1,points_frag:y1,shadow_vert:b1,shadow_frag:M1,sprite_vert:S1,sprite_frag:w1},he={common:{diffuse:{value:new _e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ze}},envmap:{envMap:{value:null},envMapRotation:{value:new Ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ze},normalScale:{value:new X(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new _e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new _e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0},uvTransform:{value:new Ze}},sprite:{diffuse:{value:new _e(16777215)},opacity:{value:1},center:{value:new X(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}}},Pn={basic:{uniforms:jt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:Oe.meshbasic_vert,fragmentShader:Oe.meshbasic_frag},lambert:{uniforms:jt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new _e(0)}}]),vertexShader:Oe.meshlambert_vert,fragmentShader:Oe.meshlambert_frag},phong:{uniforms:jt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new _e(0)},specular:{value:new _e(1118481)},shininess:{value:30}}]),vertexShader:Oe.meshphong_vert,fragmentShader:Oe.meshphong_frag},standard:{uniforms:jt([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new _e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag},toon:{uniforms:jt([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new _e(0)}}]),vertexShader:Oe.meshtoon_vert,fragmentShader:Oe.meshtoon_frag},matcap:{uniforms:jt([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:Oe.meshmatcap_vert,fragmentShader:Oe.meshmatcap_frag},points:{uniforms:jt([he.points,he.fog]),vertexShader:Oe.points_vert,fragmentShader:Oe.points_frag},dashed:{uniforms:jt([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Oe.linedashed_vert,fragmentShader:Oe.linedashed_frag},depth:{uniforms:jt([he.common,he.displacementmap]),vertexShader:Oe.depth_vert,fragmentShader:Oe.depth_frag},normal:{uniforms:jt([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:Oe.meshnormal_vert,fragmentShader:Oe.meshnormal_frag},sprite:{uniforms:jt([he.sprite,he.fog]),vertexShader:Oe.sprite_vert,fragmentShader:Oe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Oe.background_vert,fragmentShader:Oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ze}},vertexShader:Oe.backgroundCube_vert,fragmentShader:Oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Oe.cube_vert,fragmentShader:Oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Oe.equirect_vert,fragmentShader:Oe.equirect_frag},distanceRGBA:{uniforms:jt([he.common,he.displacementmap,{referencePosition:{value:new E},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Oe.distanceRGBA_vert,fragmentShader:Oe.distanceRGBA_frag},shadow:{uniforms:jt([he.lights,he.fog,{color:{value:new _e(0)},opacity:{value:1}}]),vertexShader:Oe.shadow_vert,fragmentShader:Oe.shadow_frag}};Pn.physical={uniforms:jt([Pn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ze},clearcoatNormalScale:{value:new X(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ze},sheen:{value:0},sheenColor:{value:new _e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ze},transmissionSamplerSize:{value:new X},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ze},attenuationDistance:{value:0},attenuationColor:{value:new _e(0)},specularColor:{value:new _e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ze},anisotropyVector:{value:new X},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ze}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag};const ic={r:0,b:0,g:0},bs=new wn,T1=new De;function E1(s,e,t,n,i,r,a){const o=new _e(0);let c=r===!0?0:1,l,h,u=null,d=0,f=null;function p(_){let y=_.isScene===!0?_.background:null;return y&&y.isTexture&&(y=(_.backgroundBlurriness>0?t:e).get(y)),y}function g(_){let y=!1;const A=p(_);A===null?m(o,c):A&&A.isColor&&(m(A,1),y=!0);const w=s.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,a):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function x(_,y){const A=p(y);A&&(A.isCubeTexture||A.mapping===Wr)?(h===void 0&&(h=new It(new Ys(1,1,1),new Ln({name:"BackgroundCubeMaterial",uniforms:kr(Pn.backgroundCube.uniforms),vertexShader:Pn.backgroundCube.vertexShader,fragmentShader:Pn.backgroundCube.fragmentShader,side:nn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(w,P,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),bs.copy(y.backgroundRotation),bs.x*=-1,bs.y*=-1,bs.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(bs.y*=-1,bs.z*=-1),h.material.uniforms.envMap.value=A,h.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(T1.makeRotationFromEuler(bs)),h.material.toneMapped=tt.getTransfer(A.colorSpace)!==ct,(u!==A||d!==A.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,u=A,d=A.version,f=s.toneMapping),h.layers.enableAll(),_.unshift(h,h.geometry,h.material,0,0,null)):A&&A.isTexture&&(l===void 0&&(l=new It(new qr(2,2),new Ln({name:"BackgroundMaterial",uniforms:kr(Pn.background.uniforms),vertexShader:Pn.background.vertexShader,fragmentShader:Pn.background.fragmentShader,side:Ei,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=A,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=tt.getTransfer(A.colorSpace)!==ct,A.matrixAutoUpdate===!0&&A.updateMatrix(),l.material.uniforms.uvTransform.value.copy(A.matrix),(u!==A||d!==A.version||f!==s.toneMapping)&&(l.material.needsUpdate=!0,u=A,d=A.version,f=s.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function m(_,y){_.getRGB(ic,g0(s)),n.buffers.color.setClear(ic.r,ic.g,ic.b,y,a)}function v(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(_,y=1){o.set(_),c=y,m(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(_){c=_,m(o,c)},render:g,addToRenderList:x,dispose:v}}function A1(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null);let r=i,a=!1;function o(M,D,F,B,q){let G=!1;const Y=u(B,F,D);r!==Y&&(r=Y,l(r.object)),G=f(M,B,F,q),G&&p(M,B,F,q),q!==null&&e.update(q,s.ELEMENT_ARRAY_BUFFER),(G||a)&&(a=!1,y(M,D,F,B),q!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function c(){return s.createVertexArray()}function l(M){return s.bindVertexArray(M)}function h(M){return s.deleteVertexArray(M)}function u(M,D,F){const B=F.wireframe===!0;let q=n[M.id];q===void 0&&(q={},n[M.id]=q);let G=q[D.id];G===void 0&&(G={},q[D.id]=G);let Y=G[B];return Y===void 0&&(Y=d(c()),G[B]=Y),Y}function d(M){const D=[],F=[],B=[];for(let q=0;q<t;q++)D[q]=0,F[q]=0,B[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:F,attributeDivisors:B,object:M,attributes:{},index:null}}function f(M,D,F,B){const q=r.attributes,G=D.attributes;let Y=0;const J=F.getAttributes();for(const W in J)if(J[W].location>=0){const ce=q[W];let Ce=G[W];if(Ce===void 0&&(W==="instanceMatrix"&&M.instanceMatrix&&(Ce=M.instanceMatrix),W==="instanceColor"&&M.instanceColor&&(Ce=M.instanceColor)),ce===void 0||ce.attribute!==Ce||Ce&&ce.data!==Ce.data)return!0;Y++}return r.attributesNum!==Y||r.index!==B}function p(M,D,F,B){const q={},G=D.attributes;let Y=0;const J=F.getAttributes();for(const W in J)if(J[W].location>=0){let ce=G[W];ce===void 0&&(W==="instanceMatrix"&&M.instanceMatrix&&(ce=M.instanceMatrix),W==="instanceColor"&&M.instanceColor&&(ce=M.instanceColor));const Ce={};Ce.attribute=ce,ce&&ce.data&&(Ce.data=ce.data),q[W]=Ce,Y++}r.attributes=q,r.attributesNum=Y,r.index=B}function g(){const M=r.newAttributes;for(let D=0,F=M.length;D<F;D++)M[D]=0}function x(M){m(M,0)}function m(M,D){const F=r.newAttributes,B=r.enabledAttributes,q=r.attributeDivisors;F[M]=1,B[M]===0&&(s.enableVertexAttribArray(M),B[M]=1),q[M]!==D&&(s.vertexAttribDivisor(M,D),q[M]=D)}function v(){const M=r.newAttributes,D=r.enabledAttributes;for(let F=0,B=D.length;F<B;F++)D[F]!==M[F]&&(s.disableVertexAttribArray(F),D[F]=0)}function _(M,D,F,B,q,G,Y){Y===!0?s.vertexAttribIPointer(M,D,F,q,G):s.vertexAttribPointer(M,D,F,B,q,G)}function y(M,D,F,B){g();const q=B.attributes,G=F.getAttributes(),Y=D.defaultAttributeValues;for(const J in G){const W=G[J];if(W.location>=0){let re=q[J];if(re===void 0&&(J==="instanceMatrix"&&M.instanceMatrix&&(re=M.instanceMatrix),J==="instanceColor"&&M.instanceColor&&(re=M.instanceColor)),re!==void 0){const ce=re.normalized,Ce=re.itemSize,Ke=e.get(re);if(Ke===void 0)continue;const Qe=Ke.buffer,rt=Ke.type,ot=Ke.bytesPerElement,Z=rt===s.INT||rt===s.UNSIGNED_INT||re.gpuType===Ml;if(re.isInterleavedBufferAttribute){const j=re.data,Me=j.stride,Ne=re.offset;if(j.isInstancedInterleavedBuffer){for(let Pe=0;Pe<W.locationSize;Pe++)m(W.location+Pe,j.meshPerAttribute);M.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let Pe=0;Pe<W.locationSize;Pe++)x(W.location+Pe);s.bindBuffer(s.ARRAY_BUFFER,Qe);for(let Pe=0;Pe<W.locationSize;Pe++)_(W.location+Pe,Ce/W.locationSize,rt,ce,Me*ot,(Ne+Ce/W.locationSize*Pe)*ot,Z)}else{if(re.isInstancedBufferAttribute){for(let j=0;j<W.locationSize;j++)m(W.location+j,re.meshPerAttribute);M.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let j=0;j<W.locationSize;j++)x(W.location+j);s.bindBuffer(s.ARRAY_BUFFER,Qe);for(let j=0;j<W.locationSize;j++)_(W.location+j,Ce/W.locationSize,rt,ce,Ce*ot,Ce/W.locationSize*j*ot,Z)}}else if(Y!==void 0){const ce=Y[J];if(ce!==void 0)switch(ce.length){case 2:s.vertexAttrib2fv(W.location,ce);break;case 3:s.vertexAttrib3fv(W.location,ce);break;case 4:s.vertexAttrib4fv(W.location,ce);break;default:s.vertexAttrib1fv(W.location,ce)}}}}v()}function A(){I();for(const M in n){const D=n[M];for(const F in D){const B=D[F];for(const q in B)h(B[q].object),delete B[q];delete D[F]}delete n[M]}}function w(M){if(n[M.id]===void 0)return;const D=n[M.id];for(const F in D){const B=D[F];for(const q in B)h(B[q].object),delete B[q];delete D[F]}delete n[M.id]}function P(M){for(const D in n){const F=n[D];if(F[M.id]===void 0)continue;const B=F[M.id];for(const q in B)h(B[q].object),delete B[q];delete F[M.id]}}function I(){S(),a=!0,r!==i&&(r=i,l(r.object))}function S(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:I,resetDefaultState:S,dispose:A,releaseStatesOfGeometry:w,releaseStatesOfProgram:P,initAttributes:g,enableAttribute:x,disableUnusedAttributes:v}}function C1(s,e,t){let n;function i(l){n=l}function r(l,h){s.drawArrays(n,l,h),t.update(h,n,1)}function a(l,h,u){u!==0&&(s.drawArraysInstanced(n,l,h,u),t.update(h,n,u))}function o(l,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let f=0;for(let p=0;p<u;p++)f+=h[p];t.update(f,n,1)}function c(l,h,u,d){if(u===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let p=0;p<l.length;p++)a(l[p],h[p],d[p]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let p=0;for(let g=0;g<u;g++)p+=h[g]*d[g];t.update(p,n,1)}}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function R1(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(P){return!(P!==tn&&n.convert(P)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(P){const I=P===qs&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==Yn&&n.convert(P)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==fn&&!I)}function c(P){if(P==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const h=c(l);h!==l&&(me("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_TEXTURE_SIZE),x=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),m=s.getParameter(s.MAX_VERTEX_ATTRIBS),v=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),_=s.getParameter(s.MAX_VARYING_VECTORS),y=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),A=p>0,w=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:g,maxCubemapSize:x,maxAttributes:m,maxVertexUniforms:v,maxVaryings:_,maxFragmentUniforms:y,vertexTextures:A,maxSamples:w}}function P1(s){const e=this;let t=null,n=0,i=!1,r=!1;const a=new yi,o=new Ze,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){const p=u.clippingPlanes,g=u.clipIntersection,x=u.clipShadows,m=s.get(u);if(!i||p===null||p.length===0||r&&!x)r?h(null):l();else{const v=r?0:n,_=v*4;let y=m.clippingState||null;c.value=y,y=h(p,d,_,f);for(let A=0;A!==_;++A)y[A]=t[A];m.clippingState=y,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,p){const g=u!==null?u.length:0;let x=null;if(g!==0){if(x=c.value,p!==!0||x===null){const m=f+g*4,v=d.matrixWorldInverse;o.getNormalMatrix(v),(x===null||x.length<m)&&(x=new Float32Array(m));for(let _=0,y=f;_!==g;++_,y+=4)a.copy(u[_]).applyMatrix4(v,o),a.normal.toArray(x,y),x[y+3]=a.constant}c.value=x,c.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,x}}function I1(s){let e=new WeakMap;function t(a,o){return o===Pa?a.mapping=Ai:o===Ia&&(a.mapping=Qi),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Pa||o===Ia)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new v0(c.height);return l.fromEquirectangularTexture(s,a),e.set(a,l),a.addEventListener("dispose",i),t(l.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const qi=4,sp=[.125,.215,.35,.446,.526,.582],Ts=20,D1=256,ca=new co,rp=new _e;let Yh=null,Zh=0,$h=0,Kh=!1;const L1=new E;class Mu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,r={}){const{size:a=256,position:o=L1}=r;Yh=this._renderer.getRenderTarget(),Zh=this._renderer.getActiveCubeFace(),$h=this._renderer.getActiveMipmapLevel(),Kh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,i,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=cp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=op(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Yh,Zh,$h),this._renderer.xr.enabled=Kh,e.scissorTest=!1,yr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ai||e.mapping===Qi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Yh=this._renderer.getRenderTarget(),Zh=this._renderer.getActiveCubeFace(),$h=this._renderer.getActiveMipmapLevel(),Kh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:At,minFilter:At,generateMipmaps:!1,type:qs,format:tn,colorSpace:ks,depthBuffer:!1},i=ap(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ap(e,t,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=U1(r)),this._blurMaterial=F1(r,e,t),this._ggxMaterial=N1(r,e,t)}return i}_compileMaterial(e){const t=new It(new Ye,e);this._renderer.compile(t,ca)}_sceneToCubeUV(e,t,n,i,r){const c=new Ot(90,1,t,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(rp),u.toneMapping=wi,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(i),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new It(new Ys,new Ui({name:"PMREM.Background",side:nn,depthWrite:!1,depthTest:!1})));const g=this._backgroundBox,x=g.material;let m=!1;const v=e.background;v?v.isColor&&(x.color.copy(v),e.background=null,m=!0):(x.color.copy(rp),m=!0);for(let _=0;_<6;_++){const y=_%3;y===0?(c.up.set(0,l[_],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[_],r.y,r.z)):y===1?(c.up.set(0,0,l[_]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[_],r.z)):(c.up.set(0,l[_],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[_]));const A=this._cubeSize;yr(i,y*A,_>2?A:0,A,A),u.setRenderTarget(i),m&&u.render(g,c),u.render(e,c)}u.toneMapping=f,u.autoClear=d,e.background=v}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Ai||e.mapping===Qi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=cp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=op());const r=i?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=e;const c=this._cubeSize;yr(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,ca)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodMeshes.length;for(let r=1;r<i;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){const i=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const c=a.uniforms,l=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),u=Math.sqrt(l*l-h*h),d=.05+l*.95,f=u*d,{_lodMax:p}=this,g=this._sizeLods[n],x=3*g*(n>p-qi?n-p+qi:0),m=4*(this._cubeSize-g);c.envMap.value=e.texture,c.roughness.value=f,c.mipInt.value=p-t,yr(r,x,m,3*g,2*g),i.setRenderTarget(r),i.render(o,ca),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=p-n,yr(e,x,m,3*g,2*g),i.setRenderTarget(e),i.render(o,ca)}_blur(e,t,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",r),this._halfBlur(a,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&We("blur direction must be either latitudinal or longitudinal!");const h=3,u=this._lodMeshes[i];u.material=l;const d=l.uniforms,f=this._sizeLods[n]-1,p=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Ts-1),g=r/p,x=isFinite(r)?1+Math.floor(h*g):Ts;x>Ts&&me(`sigmaRadians, ${r}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${Ts}`);const m=[];let v=0;for(let P=0;P<Ts;++P){const I=P/g,S=Math.exp(-I*I/2);m.push(S),P===0?v+=S:P<x&&(v+=2*S)}for(let P=0;P<m.length;P++)m[P]=m[P]/v;d.envMap.value=e.texture,d.samples.value=x,d.weights.value=m,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:_}=this;d.dTheta.value=p,d.mipInt.value=_-n;const y=this._sizeLods[i],A=3*y*(i>_-qi?i-_+qi:0),w=4*(this._cubeSize-y);yr(t,A,w,3*y,2*y),c.setRenderTarget(t),c.render(u,ca)}}function U1(s){const e=[],t=[],n=[];let i=s;const r=s-qi+1+sp.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);e.push(o);let c=1/o;a>s-qi?c=sp[a-s+qi-1]:a===0&&(c=0),t.push(c);const l=1/(o-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,p=6,g=3,x=2,m=1,v=new Float32Array(g*p*f),_=new Float32Array(x*p*f),y=new Float32Array(m*p*f);for(let w=0;w<f;w++){const P=w%3*2/3-1,I=w>2?0:-1,S=[P,I,0,P+2/3,I,0,P+2/3,I+1,0,P,I,0,P+2/3,I+1,0,P,I+1,0];v.set(S,g*p*w),_.set(d,x*p*w);const M=[w,w,w,w,w,w];y.set(M,m*p*w)}const A=new Ye;A.setAttribute("position",new dt(v,g)),A.setAttribute("uv",new dt(_,x)),A.setAttribute("faceIndex",new dt(y,m)),n.push(new It(A,null)),i>qi&&i--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function ap(s,e,t){const n=new oi(s,e,t);return n.texture.mapping=Wr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function yr(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function N1(s,e,t){return new Ln({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:D1,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:eh(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:ai,depthTest:!1,depthWrite:!1})}function F1(s,e,t){const n=new Float32Array(Ts),i=new E(0,1,0);return new Ln({name:"SphericalGaussianBlur",defines:{n:Ts,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:eh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ai,depthTest:!1,depthWrite:!1})}function op(){return new Ln({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:eh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ai,depthTest:!1,depthWrite:!1})}function cp(){return new Ln({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:eh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ai,depthTest:!1,depthWrite:!1})}function eh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function O1(s){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===Pa||c===Ia,h=c===Ai||c===Qi;if(l||h){let u=e.get(o);const d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new Mu(s)),u=l?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{const f=o.image;return l&&f&&f.height>0||h&&f&&i(f)?(t===null&&(t=new Mu(s)),u=l?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function i(o){let c=0;const l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){const c=o.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function B1(s){const e={};function t(n){if(e[n]!==void 0)return e[n];const i=s.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Br("WebGLRenderer: "+n+" extension not supported."),i}}}function z1(s,e,t,n){const i={},r=new WeakMap;function a(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const p in d.attributes)e.remove(d.attributes[p]);d.removeEventListener("dispose",a),delete i[d.id];const f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,t.memory.geometries++),d}function c(u){const d=u.attributes;for(const f in d)e.update(d[f],s.ARRAY_BUFFER)}function l(u){const d=[],f=u.index,p=u.attributes.position;let g=0;if(f!==null){const v=f.array;g=f.version;for(let _=0,y=v.length;_<y;_+=3){const A=v[_+0],w=v[_+1],P=v[_+2];d.push(A,w,w,P,P,A)}}else if(p!==void 0){const v=p.array;g=p.version;for(let _=0,y=v.length/3-1;_<y;_+=3){const A=_+0,w=_+1,P=_+2;d.push(A,w,w,P,P,A)}}else return;const x=new(d0(d)?ju:Ju)(d,1);x.version=g;const m=r.get(u);m&&e.remove(m),r.set(u,x)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function k1(s,e,t){let n;function i(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function c(d,f){s.drawElements(n,f,r,d*a),t.update(f,n,1)}function l(d,f,p){p!==0&&(s.drawElementsInstanced(n,f,r,d*a,p),t.update(f,n,p))}function h(d,f,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,p);let x=0;for(let m=0;m<p;m++)x+=f[m];t.update(x,n,1)}function u(d,f,p,g){if(p===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let m=0;m<d.length;m++)l(d[m]/a,f[m],g[m]);else{x.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,g,0,p);let m=0;for(let v=0;v<p;v++)m+=f[v]*g[v];t.update(m,n,1)}}this.setMode=i,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function V1(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:We("WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function G1(s,e,t){const n=new WeakMap,i=new je;function r(a,o,c){const l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(o);if(d===void 0||d.count!==u){let M=function(){I.dispose(),n.delete(o),o.removeEventListener("dispose",M)};var f=M;d!==void 0&&d.texture.dispose();const p=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],v=o.morphAttributes.normal||[],_=o.morphAttributes.color||[];let y=0;p===!0&&(y=1),g===!0&&(y=2),x===!0&&(y=3);let A=o.attributes.position.count*y,w=1;A>e.maxTextureSize&&(w=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const P=new Float32Array(A*w*4*u),I=new Pl(P,A,w,u);I.type=fn,I.needsUpdate=!0;const S=y*4;for(let D=0;D<u;D++){const F=m[D],B=v[D],q=_[D],G=A*w*4*D;for(let Y=0;Y<F.count;Y++){const J=Y*S;p===!0&&(i.fromBufferAttribute(F,Y),P[G+J+0]=i.x,P[G+J+1]=i.y,P[G+J+2]=i.z,P[G+J+3]=0),g===!0&&(i.fromBufferAttribute(B,Y),P[G+J+4]=i.x,P[G+J+5]=i.y,P[G+J+6]=i.z,P[G+J+7]=0),x===!0&&(i.fromBufferAttribute(q,Y),P[G+J+8]=i.x,P[G+J+9]=i.y,P[G+J+10]=i.z,P[G+J+11]=q.itemSize===4?i.w:1)}}d={count:u,texture:I,size:new X(A,w)},n.set(o,d),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",a.morphTexture,t);else{let p=0;for(let x=0;x<l.length;x++)p+=l[x];const g=o.morphTargetsRelative?1:1-p;c.getUniforms().setValue(s,"morphTargetBaseInfluence",g),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function H1(s,e,t,n){let i=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,u=e.get(c,h);if(i.get(u)!==l&&(e.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),i.get(c)!==l&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;i.get(d)!==l&&(d.update(),i.set(d,l))}return u}function a(){i=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:a}}const vx=new Tt,lp=new sd(1,1),yx=new Pl,bx=new Il,Mx=new to,hp=[],up=[],dp=new Float32Array(16),fp=new Float32Array(9),pp=new Float32Array(4);function Yr(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=hp[i];if(r===void 0&&(r=new Float32Array(i),hp[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function Ut(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Nt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function th(s,e){let t=up[e];t===void 0&&(t=new Int32Array(e),up[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function W1(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function X1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;s.uniform2fv(this.addr,e),Nt(t,e)}}function q1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ut(t,e))return;s.uniform3fv(this.addr,e),Nt(t,e)}}function Y1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;s.uniform4fv(this.addr,e),Nt(t,e)}}function Z1(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ut(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Nt(t,e)}else{if(Ut(t,n))return;pp.set(n),s.uniformMatrix2fv(this.addr,!1,pp),Nt(t,n)}}function $1(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ut(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Nt(t,e)}else{if(Ut(t,n))return;fp.set(n),s.uniformMatrix3fv(this.addr,!1,fp),Nt(t,n)}}function K1(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ut(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Nt(t,e)}else{if(Ut(t,n))return;dp.set(n),s.uniformMatrix4fv(this.addr,!1,dp),Nt(t,n)}}function J1(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function j1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;s.uniform2iv(this.addr,e),Nt(t,e)}}function Q1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ut(t,e))return;s.uniform3iv(this.addr,e),Nt(t,e)}}function ew(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;s.uniform4iv(this.addr,e),Nt(t,e)}}function tw(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function nw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;s.uniform2uiv(this.addr,e),Nt(t,e)}}function iw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ut(t,e))return;s.uniform3uiv(this.addr,e),Nt(t,e)}}function sw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;s.uniform4uiv(this.addr,e),Nt(t,e)}}function rw(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(lp.compareFunction=Zu,r=lp):r=vx,t.setTexture2D(e||r,i)}function aw(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||bx,i)}function ow(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Mx,i)}function cw(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||yx,i)}function lw(s){switch(s){case 5126:return W1;case 35664:return X1;case 35665:return q1;case 35666:return Y1;case 35674:return Z1;case 35675:return $1;case 35676:return K1;case 5124:case 35670:return J1;case 35667:case 35671:return j1;case 35668:case 35672:return Q1;case 35669:case 35673:return ew;case 5125:return tw;case 36294:return nw;case 36295:return iw;case 36296:return sw;case 35678:case 36198:case 36298:case 36306:case 35682:return rw;case 35679:case 36299:case 36307:return aw;case 35680:case 36300:case 36308:case 36293:return ow;case 36289:case 36303:case 36311:case 36292:return cw}}function hw(s,e){s.uniform1fv(this.addr,e)}function uw(s,e){const t=Yr(e,this.size,2);s.uniform2fv(this.addr,t)}function dw(s,e){const t=Yr(e,this.size,3);s.uniform3fv(this.addr,t)}function fw(s,e){const t=Yr(e,this.size,4);s.uniform4fv(this.addr,t)}function pw(s,e){const t=Yr(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function mw(s,e){const t=Yr(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function xw(s,e){const t=Yr(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function gw(s,e){s.uniform1iv(this.addr,e)}function _w(s,e){s.uniform2iv(this.addr,e)}function vw(s,e){s.uniform3iv(this.addr,e)}function yw(s,e){s.uniform4iv(this.addr,e)}function bw(s,e){s.uniform1uiv(this.addr,e)}function Mw(s,e){s.uniform2uiv(this.addr,e)}function Sw(s,e){s.uniform3uiv(this.addr,e)}function ww(s,e){s.uniform4uiv(this.addr,e)}function Tw(s,e,t){const n=this.cache,i=e.length,r=th(t,i);Ut(n,r)||(s.uniform1iv(this.addr,r),Nt(n,r));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||vx,r[a])}function Ew(s,e,t){const n=this.cache,i=e.length,r=th(t,i);Ut(n,r)||(s.uniform1iv(this.addr,r),Nt(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||bx,r[a])}function Aw(s,e,t){const n=this.cache,i=e.length,r=th(t,i);Ut(n,r)||(s.uniform1iv(this.addr,r),Nt(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||Mx,r[a])}function Cw(s,e,t){const n=this.cache,i=e.length,r=th(t,i);Ut(n,r)||(s.uniform1iv(this.addr,r),Nt(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||yx,r[a])}function Rw(s){switch(s){case 5126:return hw;case 35664:return uw;case 35665:return dw;case 35666:return fw;case 35674:return pw;case 35675:return mw;case 35676:return xw;case 5124:case 35670:return gw;case 35667:case 35671:return _w;case 35668:case 35672:return vw;case 35669:case 35673:return yw;case 5125:return bw;case 36294:return Mw;case 36295:return Sw;case 36296:return ww;case 35678:case 36198:case 36298:case 36306:case 35682:return Tw;case 35679:case 36299:case 36307:return Ew;case 35680:case 36300:case 36308:case 36293:return Aw;case 36289:case 36303:case 36311:case 36292:return Cw}}class Pw{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=lw(t.type)}}class Iw{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Rw(t.type)}}class Dw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(e,t[o.id],n)}}}const Jh=/(\w+)(\])?(\[|\.)?/g;function mp(s,e){s.seq.push(e),s.map[e.id]=e}function Lw(s,e,t){const n=s.name,i=n.length;for(Jh.lastIndex=0;;){const r=Jh.exec(n),a=Jh.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===i){mp(t,l===void 0?new Pw(o,s,e):new Iw(o,s,e));break}else{let u=t.map[o];u===void 0&&(u=new Dw(o),mp(t,u)),t=u}}}class hc{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),a=e.getUniformLocation(t,r.name);Lw(r,a,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){const o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function xp(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const Uw=37297;let Nw=0;function Fw(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const gp=new Ze;function Ow(s){tt._getMatrix(gp,tt.workingColorSpace,s);const e=`mat3( ${gp.elements.map(t=>t.toFixed(4))} )`;switch(tt.getTransfer(s)){case Fa:return[e,"LinearTransferOETF"];case ct:return[e,"sRGBTransferOETF"];default:return me("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function _p(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+Fw(s.getShaderSource(e),o)}else return r}function Bw(s,e){const t=Ow(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function zw(s,e){let t;switch(e){case qm:t="Linear";break;case Ym:t="Reinhard";break;case Zm:t="Cineon";break;case $m:t="ACESFilmic";break;case Ec:t="AgX";break;case Jm:t="Neutral";break;case Km:t="Custom";break;default:me("WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const sc=new E;function kw(){tt.getLuminanceCoefficients(sc);const s=sc.x.toFixed(4),e=sc.y.toFixed(4),t=sc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Vw(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(da).join(`
`)}function Gw(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Hw(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function da(s){return s!==""}function vp(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function yp(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Ww=/^[ \t]*#include +<([\w\d./]+)>/gm;function Su(s){return s.replace(Ww,qw)}const Xw=new Map;function qw(s,e){let t=Oe[e];if(t===void 0){const n=Xw.get(e);if(n!==void 0)t=Oe[n],me('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Su(t)}const Yw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function bp(s){return s.replace(Yw,Zw)}function Zw(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Mp(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function $w(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===zu?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===xa?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Qn&&(e="SHADOWMAP_TYPE_VSM"),e}function Kw(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Ai:case Qi:e="ENVMAP_TYPE_CUBE";break;case Wr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Jw(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Qi:e="ENVMAP_MODE_REFRACTION";break}return e}function jw(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Qa:e="ENVMAP_BLENDING_MULTIPLY";break;case Wm:e="ENVMAP_BLENDING_MIX";break;case Xm:e="ENVMAP_BLENDING_ADD";break}return e}function Qw(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function eT(s,e,t,n){const i=s.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=$w(t),l=Kw(t),h=Jw(t),u=jw(t),d=Qw(t),f=Vw(t),p=Gw(r),g=i.createProgram();let x,m,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(da).join(`
`),x.length>0&&(x+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(da).join(`
`),m.length>0&&(m+=`
`)):(x=[Mp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(da).join(`
`),m=[Mp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==wi?"#define TONE_MAPPING":"",t.toneMapping!==wi?Oe.tonemapping_pars_fragment:"",t.toneMapping!==wi?zw("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Oe.colorspace_pars_fragment,Bw("linearToOutputTexel",t.outputColorSpace),kw(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(da).join(`
`)),a=Su(a),a=vp(a,t),a=yp(a,t),o=Su(o),o=vp(o,t),o=yp(o,t),a=bp(a),o=bp(o),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,x=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,m=["#define varying in",t.glslVersion===fu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===fu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const _=v+x+a,y=v+m+o,A=xp(i,i.VERTEX_SHADER,_),w=xp(i,i.FRAGMENT_SHADER,y);i.attachShader(g,A),i.attachShader(g,w),t.index0AttributeName!==void 0?i.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function P(D){if(s.debug.checkShaderErrors){const F=i.getProgramInfoLog(g)||"",B=i.getShaderInfoLog(A)||"",q=i.getShaderInfoLog(w)||"",G=F.trim(),Y=B.trim(),J=q.trim();let W=!0,re=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(W=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,g,A,w);else{const ce=_p(i,A,"vertex"),Ce=_p(i,w,"fragment");We("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+G+`
`+ce+`
`+Ce)}else G!==""?me("WebGLProgram: Program Info Log:",G):(Y===""||J==="")&&(re=!1);re&&(D.diagnostics={runnable:W,programLog:G,vertexShader:{log:Y,prefix:x},fragmentShader:{log:J,prefix:m}})}i.deleteShader(A),i.deleteShader(w),I=new hc(i,g),S=Hw(i,g)}let I;this.getUniforms=function(){return I===void 0&&P(this),I};let S;this.getAttributes=function(){return S===void 0&&P(this),S};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=i.getProgramParameter(g,Uw)),M},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Nw++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=A,this.fragmentShader=w,this}let tT=0;class nT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new iT(e),t.set(e,n)),n}}class iT{constructor(e){this.id=tT++,this.code=e,this.usedTimes=0}}function sT(s,e,t,n,i,r,a){const o=new Dl,c=new nT,l=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(S){return l.add(S),S===0?"uv":`uv${S}`}function x(S,M,D,F,B){const q=F.fog,G=B.geometry,Y=S.isMeshStandardMaterial?F.environment:null,J=(S.isMeshStandardMaterial?t:e).get(S.envMap||Y),W=J&&J.mapping===Wr?J.image.height:null,re=p[S.type];S.precision!==null&&(f=i.getMaxPrecision(S.precision),f!==S.precision&&me("WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));const ce=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Ce=ce!==void 0?ce.length:0;let Ke=0;G.morphAttributes.position!==void 0&&(Ke=1),G.morphAttributes.normal!==void 0&&(Ke=2),G.morphAttributes.color!==void 0&&(Ke=3);let Qe,rt,ot,Z;if(re){const lt=Pn[re];Qe=lt.vertexShader,rt=lt.fragmentShader}else Qe=S.vertexShader,rt=S.fragmentShader,c.update(S),ot=c.getVertexShaderID(S),Z=c.getFragmentShaderID(S);const j=s.getRenderTarget(),Me=s.state.buffers.depth.getReversed(),Ne=B.isInstancedMesh===!0,Pe=B.isBatchedMesh===!0,Je=!!S.map,ft=!!S.matcap,Ge=!!J,ee=!!S.aoMap,R=!!S.lightMap,Q=!!S.bumpMap,se=!!S.normalMap,oe=!!S.displacementMap,ne=!!S.emissiveMap,Te=!!S.metalnessMap,fe=!!S.roughnessMap,be=S.anisotropy>0,C=S.clearcoat>0,b=S.dispersion>0,O=S.iridescence>0,H=S.sheen>0,K=S.transmission>0,V=be&&!!S.anisotropyMap,Ie=C&&!!S.clearcoatMap,pe=C&&!!S.clearcoatNormalMap,Le=C&&!!S.clearcoatRoughnessMap,Re=O&&!!S.iridescenceMap,te=O&&!!S.iridescenceThicknessMap,le=H&&!!S.sheenColorMap,Ve=H&&!!S.sheenRoughnessMap,Be=!!S.specularMap,ve=!!S.specularColorMap,Xe=!!S.specularIntensityMap,L=K&&!!S.transmissionMap,xe=K&&!!S.thicknessMap,ue=!!S.gradientMap,de=!!S.alphaMap,ie=S.alphaTest>0,$=!!S.alphaHash,Ee=!!S.extensions;let qe=wi;S.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(qe=s.toneMapping);const xt={shaderID:re,shaderType:S.type,shaderName:S.name,vertexShader:Qe,fragmentShader:rt,defines:S.defines,customVertexShaderID:ot,customFragmentShaderID:Z,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:Pe,batchingColor:Pe&&B._colorsTexture!==null,instancing:Ne,instancingColor:Ne&&B.instanceColor!==null,instancingMorph:Ne&&B.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:j===null?s.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:ks,alphaToCoverage:!!S.alphaToCoverage,map:Je,matcap:ft,envMap:Ge,envMapMode:Ge&&J.mapping,envMapCubeUVHeight:W,aoMap:ee,lightMap:R,bumpMap:Q,normalMap:se,displacementMap:d&&oe,emissiveMap:ne,normalMapObjectSpace:se&&S.normalMapType===s0,normalMapTangentSpace:se&&S.normalMapType===ss,metalnessMap:Te,roughnessMap:fe,anisotropy:be,anisotropyMap:V,clearcoat:C,clearcoatMap:Ie,clearcoatNormalMap:pe,clearcoatRoughnessMap:Le,dispersion:b,iridescence:O,iridescenceMap:Re,iridescenceThicknessMap:te,sheen:H,sheenColorMap:le,sheenRoughnessMap:Ve,specularMap:Be,specularColorMap:ve,specularIntensityMap:Xe,transmission:K,transmissionMap:L,thicknessMap:xe,gradientMap:ue,opaque:S.transparent===!1&&S.blending===Ls&&S.alphaToCoverage===!1,alphaMap:de,alphaTest:ie,alphaHash:$,combine:S.combine,mapUv:Je&&g(S.map.channel),aoMapUv:ee&&g(S.aoMap.channel),lightMapUv:R&&g(S.lightMap.channel),bumpMapUv:Q&&g(S.bumpMap.channel),normalMapUv:se&&g(S.normalMap.channel),displacementMapUv:oe&&g(S.displacementMap.channel),emissiveMapUv:ne&&g(S.emissiveMap.channel),metalnessMapUv:Te&&g(S.metalnessMap.channel),roughnessMapUv:fe&&g(S.roughnessMap.channel),anisotropyMapUv:V&&g(S.anisotropyMap.channel),clearcoatMapUv:Ie&&g(S.clearcoatMap.channel),clearcoatNormalMapUv:pe&&g(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Le&&g(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Re&&g(S.iridescenceMap.channel),iridescenceThicknessMapUv:te&&g(S.iridescenceThicknessMap.channel),sheenColorMapUv:le&&g(S.sheenColorMap.channel),sheenRoughnessMapUv:Ve&&g(S.sheenRoughnessMap.channel),specularMapUv:Be&&g(S.specularMap.channel),specularColorMapUv:ve&&g(S.specularColorMap.channel),specularIntensityMapUv:Xe&&g(S.specularIntensityMap.channel),transmissionMapUv:L&&g(S.transmissionMap.channel),thicknessMapUv:xe&&g(S.thicknessMap.channel),alphaMapUv:de&&g(S.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(se||be),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!G.attributes.uv&&(Je||de),fog:!!q,useFog:S.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:Me,skinning:B.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:Ce,morphTextureStride:Ke,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:s.shadowMap.enabled&&D.length>0,shadowMapType:s.shadowMap.type,toneMapping:qe,decodeVideoTexture:Je&&S.map.isVideoTexture===!0&&tt.getTransfer(S.map.colorSpace)===ct,decodeVideoTextureEmissive:ne&&S.emissiveMap.isVideoTexture===!0&&tt.getTransfer(S.emissiveMap.colorSpace)===ct,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===ei,flipSided:S.side===nn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Ee&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ee&&S.extensions.multiDraw===!0||Pe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return xt.vertexUv1s=l.has(1),xt.vertexUv2s=l.has(2),xt.vertexUv3s=l.has(3),l.clear(),xt}function m(S){const M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(const D in S.defines)M.push(D),M.push(S.defines[D]);return S.isRawShaderMaterial===!1&&(v(M,S),_(M,S),M.push(s.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function v(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function _(S,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),M.gradientMap&&o.enable(22),S.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reversedDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),S.push(o.mask)}function y(S){const M=p[S.type];let D;if(M){const F=Pn[M];D=Qu.clone(F.uniforms)}else D=S.uniforms;return D}function A(S,M){let D;for(let F=0,B=h.length;F<B;F++){const q=h[F];if(q.cacheKey===M){D=q,++D.usedTimes;break}}return D===void 0&&(D=new eT(s,M,S,r),h.push(D)),D}function w(S){if(--S.usedTimes===0){const M=h.indexOf(S);h[M]=h[h.length-1],h.pop(),S.destroy()}}function P(S){c.remove(S)}function I(){c.dispose()}return{getParameters:x,getProgramCacheKey:m,getUniforms:y,acquireProgram:A,releaseProgram:w,releaseShaderCache:P,programs:h,dispose:I}}function rT(){let s=new WeakMap;function e(a){return s.has(a)}function t(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,c){s.get(a)[o]=c}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function aT(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Sp(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function wp(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(u,d,f,p,g,x){let m=s[e];return m===void 0?(m={id:u.id,object:u,geometry:d,material:f,groupOrder:p,renderOrder:u.renderOrder,z:g,group:x},s[e]=m):(m.id=u.id,m.object=u,m.geometry=d,m.material=f,m.groupOrder=p,m.renderOrder=u.renderOrder,m.z=g,m.group=x),e++,m}function o(u,d,f,p,g,x){const m=a(u,d,f,p,g,x);f.transmission>0?n.push(m):f.transparent===!0?i.push(m):t.push(m)}function c(u,d,f,p,g,x){const m=a(u,d,f,p,g,x);f.transmission>0?n.unshift(m):f.transparent===!0?i.unshift(m):t.unshift(m)}function l(u,d){t.length>1&&t.sort(u||aT),n.length>1&&n.sort(d||Sp),i.length>1&&i.sort(d||Sp)}function h(){for(let u=e,d=s.length;u<d;u++){const f=s[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:o,unshift:c,finish:h,sort:l}}function oT(){let s=new WeakMap;function e(n,i){const r=s.get(n);let a;return r===void 0?(a=new wp,s.set(n,[a])):i>=r.length?(a=new wp,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function cT(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new E,color:new _e};break;case"SpotLight":t={position:new E,direction:new E,color:new _e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new E,color:new _e,distance:0,decay:0};break;case"HemisphereLight":t={direction:new E,skyColor:new _e,groundColor:new _e};break;case"RectAreaLight":t={color:new _e,position:new E,halfWidth:new E,halfHeight:new E};break}return s[e.id]=t,t}}}function lT(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new X};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new X};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new X,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let hT=0;function uT(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function dT(s){const e=new cT,t=lT(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new E);const i=new E,r=new De,a=new De;function o(l){let h=0,u=0,d=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let f=0,p=0,g=0,x=0,m=0,v=0,_=0,y=0,A=0,w=0,P=0;l.sort(uT);for(let S=0,M=l.length;S<M;S++){const D=l[S],F=D.color,B=D.intensity,q=D.distance,G=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)h+=F.r*B,u+=F.g*B,d+=F.b*B;else if(D.isLightProbe){for(let Y=0;Y<9;Y++)n.probe[Y].addScaledVector(D.sh.coefficients[Y],B);P++}else if(D.isDirectionalLight){const Y=e.get(D);if(Y.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const J=D.shadow,W=t.get(D);W.shadowIntensity=J.intensity,W.shadowBias=J.bias,W.shadowNormalBias=J.normalBias,W.shadowRadius=J.radius,W.shadowMapSize=J.mapSize,n.directionalShadow[f]=W,n.directionalShadowMap[f]=G,n.directionalShadowMatrix[f]=D.shadow.matrix,v++}n.directional[f]=Y,f++}else if(D.isSpotLight){const Y=e.get(D);Y.position.setFromMatrixPosition(D.matrixWorld),Y.color.copy(F).multiplyScalar(B),Y.distance=q,Y.coneCos=Math.cos(D.angle),Y.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),Y.decay=D.decay,n.spot[g]=Y;const J=D.shadow;if(D.map&&(n.spotLightMap[A]=D.map,A++,J.updateMatrices(D),D.castShadow&&w++),n.spotLightMatrix[g]=J.matrix,D.castShadow){const W=t.get(D);W.shadowIntensity=J.intensity,W.shadowBias=J.bias,W.shadowNormalBias=J.normalBias,W.shadowRadius=J.radius,W.shadowMapSize=J.mapSize,n.spotShadow[g]=W,n.spotShadowMap[g]=G,y++}g++}else if(D.isRectAreaLight){const Y=e.get(D);Y.color.copy(F).multiplyScalar(B),Y.halfWidth.set(D.width*.5,0,0),Y.halfHeight.set(0,D.height*.5,0),n.rectArea[x]=Y,x++}else if(D.isPointLight){const Y=e.get(D);if(Y.color.copy(D.color).multiplyScalar(D.intensity),Y.distance=D.distance,Y.decay=D.decay,D.castShadow){const J=D.shadow,W=t.get(D);W.shadowIntensity=J.intensity,W.shadowBias=J.bias,W.shadowNormalBias=J.normalBias,W.shadowRadius=J.radius,W.shadowMapSize=J.mapSize,W.shadowCameraNear=J.camera.near,W.shadowCameraFar=J.camera.far,n.pointShadow[p]=W,n.pointShadowMap[p]=G,n.pointShadowMatrix[p]=D.shadow.matrix,_++}n.point[p]=Y,p++}else if(D.isHemisphereLight){const Y=e.get(D);Y.skyColor.copy(D.color).multiplyScalar(B),Y.groundColor.copy(D.groundColor).multiplyScalar(B),n.hemi[m]=Y,m++}}x>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=he.LTC_FLOAT_1,n.rectAreaLTC2=he.LTC_FLOAT_2):(n.rectAreaLTC1=he.LTC_HALF_1,n.rectAreaLTC2=he.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const I=n.hash;(I.directionalLength!==f||I.pointLength!==p||I.spotLength!==g||I.rectAreaLength!==x||I.hemiLength!==m||I.numDirectionalShadows!==v||I.numPointShadows!==_||I.numSpotShadows!==y||I.numSpotMaps!==A||I.numLightProbes!==P)&&(n.directional.length=f,n.spot.length=g,n.rectArea.length=x,n.point.length=p,n.hemi.length=m,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=y+A-w,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=P,I.directionalLength=f,I.pointLength=p,I.spotLength=g,I.rectAreaLength=x,I.hemiLength=m,I.numDirectionalShadows=v,I.numPointShadows=_,I.numSpotShadows=y,I.numSpotMaps=A,I.numLightProbes=P,n.version=hT++)}function c(l,h){let u=0,d=0,f=0,p=0,g=0;const x=h.matrixWorldInverse;for(let m=0,v=l.length;m<v;m++){const _=l[m];if(_.isDirectionalLight){const y=n.directional[u];y.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(x),u++}else if(_.isSpotLight){const y=n.spot[f];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(x),y.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(x),f++}else if(_.isRectAreaLight){const y=n.rectArea[p];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(x),a.identity(),r.copy(_.matrixWorld),r.premultiply(x),a.extractRotation(r),y.halfWidth.set(_.width*.5,0,0),y.halfHeight.set(0,_.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),p++}else if(_.isPointLight){const y=n.point[d];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(x),d++}else if(_.isHemisphereLight){const y=n.hemi[g];y.direction.setFromMatrixPosition(_.matrixWorld),y.direction.transformDirection(x),g++}}}return{setup:o,setupView:c,state:n}}function Tp(s){const e=new dT(s),t=[],n=[];function i(h){l.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function c(h){e.setupView(t,h)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function fT(s){let e=new WeakMap;function t(i,r=0){const a=e.get(i);let o;return a===void 0?(o=new Tp(s),e.set(i,[o])):r>=a.length?(o=new Tp(s),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const pT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,mT=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function xT(s,e,t){let n=new Xr;const i=new X,r=new X,a=new je,o=new fd({depthPacking:i0}),c=new pd,l={},h=t.maxTextureSize,u={[Ei]:nn,[nn]:Ei,[ei]:ei},d=new Ln({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new X},radius:{value:4}},vertexShader:pT,fragmentShader:mT}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const p=new Ye;p.setAttribute("position",new dt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new It(p,d),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=zu;let m=this.type;this.render=function(w,P,I){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||w.length===0)return;const S=s.getRenderTarget(),M=s.getActiveCubeFace(),D=s.getActiveMipmapLevel(),F=s.state;F.setBlending(ai),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const B=m!==Qn&&this.type===Qn,q=m===Qn&&this.type!==Qn;for(let G=0,Y=w.length;G<Y;G++){const J=w[G],W=J.shadow;if(W===void 0){me("WebGLShadowMap:",J,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;i.copy(W.mapSize);const re=W.getFrameExtents();if(i.multiply(re),r.copy(W.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/re.x),i.x=r.x*re.x,W.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/re.y),i.y=r.y*re.y,W.mapSize.y=r.y)),W.map===null||B===!0||q===!0){const Ce=this.type!==Qn?{minFilter:kt,magFilter:kt}:{};W.map!==null&&W.map.dispose(),W.map=new oi(i.x,i.y,Ce),W.map.texture.name=J.name+".shadowMap",W.camera.updateProjectionMatrix()}s.setRenderTarget(W.map),s.clear();const ce=W.getViewportCount();for(let Ce=0;Ce<ce;Ce++){const Ke=W.getViewport(Ce);a.set(r.x*Ke.x,r.y*Ke.y,r.x*Ke.z,r.y*Ke.w),F.viewport(a),W.updateMatrices(J,Ce),n=W.getFrustum(),y(P,I,W.camera,J,this.type)}W.isPointLightShadow!==!0&&this.type===Qn&&v(W,I),W.needsUpdate=!1}m=this.type,x.needsUpdate=!1,s.setRenderTarget(S,M,D)};function v(w,P){const I=e.update(g);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new oi(i.x,i.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,s.setRenderTarget(w.mapPass),s.clear(),s.renderBufferDirect(P,null,I,d,g,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,s.setRenderTarget(w.map),s.clear(),s.renderBufferDirect(P,null,I,f,g,null)}function _(w,P,I,S){let M=null;const D=I.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(D!==void 0)M=D;else if(M=I.isPointLight===!0?c:o,s.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const F=M.uuid,B=P.uuid;let q=l[F];q===void 0&&(q={},l[F]=q);let G=q[B];G===void 0&&(G=M.clone(),q[B]=G,P.addEventListener("dispose",A)),M=G}if(M.visible=P.visible,M.wireframe=P.wireframe,S===Qn?M.side=P.shadowSide!==null?P.shadowSide:P.side:M.side=P.shadowSide!==null?P.shadowSide:u[P.side],M.alphaMap=P.alphaMap,M.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,M.map=P.map,M.clipShadows=P.clipShadows,M.clippingPlanes=P.clippingPlanes,M.clipIntersection=P.clipIntersection,M.displacementMap=P.displacementMap,M.displacementScale=P.displacementScale,M.displacementBias=P.displacementBias,M.wireframeLinewidth=P.wireframeLinewidth,M.linewidth=P.linewidth,I.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const F=s.properties.get(M);F.light=I}return M}function y(w,P,I,S,M){if(w.visible===!1)return;if(w.layers.test(P.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&M===Qn)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,w.matrixWorld);const B=e.update(w),q=w.material;if(Array.isArray(q)){const G=B.groups;for(let Y=0,J=G.length;Y<J;Y++){const W=G[Y],re=q[W.materialIndex];if(re&&re.visible){const ce=_(w,re,S,M);w.onBeforeShadow(s,w,P,I,B,ce,W),s.renderBufferDirect(I,null,B,ce,w,W),w.onAfterShadow(s,w,P,I,B,ce,W)}}}else if(q.visible){const G=_(w,q,S,M);w.onBeforeShadow(s,w,P,I,B,G,null),s.renderBufferDirect(I,null,B,G,w,null),w.onAfterShadow(s,w,P,I,B,G,null)}}const F=w.children;for(let B=0,q=F.length;B<q;B++)y(F[B],P,I,S,M)}function A(w){w.target.removeEventListener("dispose",A);for(const I in l){const S=l[I],M=w.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}const gT={[vc]:yc,[bc]:wc,[Mc]:Tc,[zs]:Sc,[yc]:vc,[wc]:bc,[Tc]:Mc,[Sc]:zs};function _T(s,e){function t(){let L=!1;const xe=new je;let ue=null;const de=new je(0,0,0,0);return{setMask:function(ie){ue!==ie&&!L&&(s.colorMask(ie,ie,ie,ie),ue=ie)},setLocked:function(ie){L=ie},setClear:function(ie,$,Ee,qe,xt){xt===!0&&(ie*=qe,$*=qe,Ee*=qe),xe.set(ie,$,Ee,qe),de.equals(xe)===!1&&(s.clearColor(ie,$,Ee,qe),de.copy(xe))},reset:function(){L=!1,ue=null,de.set(-1,0,0,0)}}}function n(){let L=!1,xe=!1,ue=null,de=null,ie=null;return{setReversed:function($){if(xe!==$){const Ee=e.get("EXT_clip_control");$?Ee.clipControlEXT(Ee.LOWER_LEFT_EXT,Ee.ZERO_TO_ONE_EXT):Ee.clipControlEXT(Ee.LOWER_LEFT_EXT,Ee.NEGATIVE_ONE_TO_ONE_EXT),xe=$;const qe=ie;ie=null,this.setClear(qe)}},getReversed:function(){return xe},setTest:function($){$?j(s.DEPTH_TEST):Me(s.DEPTH_TEST)},setMask:function($){ue!==$&&!L&&(s.depthMask($),ue=$)},setFunc:function($){if(xe&&($=gT[$]),de!==$){switch($){case vc:s.depthFunc(s.NEVER);break;case yc:s.depthFunc(s.ALWAYS);break;case bc:s.depthFunc(s.LESS);break;case zs:s.depthFunc(s.LEQUAL);break;case Mc:s.depthFunc(s.EQUAL);break;case Sc:s.depthFunc(s.GEQUAL);break;case wc:s.depthFunc(s.GREATER);break;case Tc:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}de=$}},setLocked:function($){L=$},setClear:function($){ie!==$&&(xe&&($=1-$),s.clearDepth($),ie=$)},reset:function(){L=!1,ue=null,de=null,ie=null,xe=!1}}}function i(){let L=!1,xe=null,ue=null,de=null,ie=null,$=null,Ee=null,qe=null,xt=null;return{setTest:function(lt){L||(lt?j(s.STENCIL_TEST):Me(s.STENCIL_TEST))},setMask:function(lt){xe!==lt&&!L&&(s.stencilMask(lt),xe=lt)},setFunc:function(lt,$n,Fn){(ue!==lt||de!==$n||ie!==Fn)&&(s.stencilFunc(lt,$n,Fn),ue=lt,de=$n,ie=Fn)},setOp:function(lt,$n,Fn){($!==lt||Ee!==$n||qe!==Fn)&&(s.stencilOp(lt,$n,Fn),$=lt,Ee=$n,qe=Fn)},setLocked:function(lt){L=lt},setClear:function(lt){xt!==lt&&(s.clearStencil(lt),xt=lt)},reset:function(){L=!1,xe=null,ue=null,de=null,ie=null,$=null,Ee=null,qe=null,xt=null}}}const r=new t,a=new n,o=new i,c=new WeakMap,l=new WeakMap;let h={},u={},d=new WeakMap,f=[],p=null,g=!1,x=null,m=null,v=null,_=null,y=null,A=null,w=null,P=new _e(0,0,0),I=0,S=!1,M=null,D=null,F=null,B=null,q=null;const G=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,J=0;const W=s.getParameter(s.VERSION);W.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(W)[1]),Y=J>=1):W.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),Y=J>=2);let re=null,ce={};const Ce=s.getParameter(s.SCISSOR_BOX),Ke=s.getParameter(s.VIEWPORT),Qe=new je().fromArray(Ce),rt=new je().fromArray(Ke);function ot(L,xe,ue,de){const ie=new Uint8Array(4),$=s.createTexture();s.bindTexture(L,$),s.texParameteri(L,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(L,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ee=0;Ee<ue;Ee++)L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY?s.texImage3D(xe,0,s.RGBA,1,1,de,0,s.RGBA,s.UNSIGNED_BYTE,ie):s.texImage2D(xe+Ee,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ie);return $}const Z={};Z[s.TEXTURE_2D]=ot(s.TEXTURE_2D,s.TEXTURE_2D,1),Z[s.TEXTURE_CUBE_MAP]=ot(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[s.TEXTURE_2D_ARRAY]=ot(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Z[s.TEXTURE_3D]=ot(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),j(s.DEPTH_TEST),a.setFunc(zs),Q(!1),se(ou),j(s.CULL_FACE),ee(ai);function j(L){h[L]!==!0&&(s.enable(L),h[L]=!0)}function Me(L){h[L]!==!1&&(s.disable(L),h[L]=!1)}function Ne(L,xe){return u[L]!==xe?(s.bindFramebuffer(L,xe),u[L]=xe,L===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=xe),L===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=xe),!0):!1}function Pe(L,xe){let ue=f,de=!1;if(L){ue=d.get(xe),ue===void 0&&(ue=[],d.set(xe,ue));const ie=L.textures;if(ue.length!==ie.length||ue[0]!==s.COLOR_ATTACHMENT0){for(let $=0,Ee=ie.length;$<Ee;$++)ue[$]=s.COLOR_ATTACHMENT0+$;ue.length=ie.length,de=!0}}else ue[0]!==s.BACK&&(ue[0]=s.BACK,de=!0);de&&s.drawBuffers(ue)}function Je(L){return p!==L?(s.useProgram(L),p=L,!0):!1}const ft={[Wi]:s.FUNC_ADD,[Am]:s.FUNC_SUBTRACT,[Cm]:s.FUNC_REVERSE_SUBTRACT};ft[Rm]=s.MIN,ft[Pm]=s.MAX;const Ge={[Im]:s.ZERO,[Dm]:s.ONE,[Lm]:s.SRC_COLOR,[gc]:s.SRC_ALPHA,[zm]:s.SRC_ALPHA_SATURATE,[Om]:s.DST_COLOR,[Nm]:s.DST_ALPHA,[Um]:s.ONE_MINUS_SRC_COLOR,[_c]:s.ONE_MINUS_SRC_ALPHA,[Bm]:s.ONE_MINUS_DST_COLOR,[Fm]:s.ONE_MINUS_DST_ALPHA,[km]:s.CONSTANT_COLOR,[Vm]:s.ONE_MINUS_CONSTANT_COLOR,[Gm]:s.CONSTANT_ALPHA,[Hm]:s.ONE_MINUS_CONSTANT_ALPHA};function ee(L,xe,ue,de,ie,$,Ee,qe,xt,lt){if(L===ai){g===!0&&(Me(s.BLEND),g=!1);return}if(g===!1&&(j(s.BLEND),g=!0),L!==Em){if(L!==x||lt!==S){if((m!==Wi||y!==Wi)&&(s.blendEquation(s.FUNC_ADD),m=Wi,y=Wi),lt)switch(L){case Ls:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case cu:s.blendFunc(s.ONE,s.ONE);break;case lu:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case hu:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:We("WebGLState: Invalid blending: ",L);break}else switch(L){case Ls:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case cu:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case lu:We("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case hu:We("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:We("WebGLState: Invalid blending: ",L);break}v=null,_=null,A=null,w=null,P.set(0,0,0),I=0,x=L,S=lt}return}ie=ie||xe,$=$||ue,Ee=Ee||de,(xe!==m||ie!==y)&&(s.blendEquationSeparate(ft[xe],ft[ie]),m=xe,y=ie),(ue!==v||de!==_||$!==A||Ee!==w)&&(s.blendFuncSeparate(Ge[ue],Ge[de],Ge[$],Ge[Ee]),v=ue,_=de,A=$,w=Ee),(qe.equals(P)===!1||xt!==I)&&(s.blendColor(qe.r,qe.g,qe.b,xt),P.copy(qe),I=xt),x=L,S=!1}function R(L,xe){L.side===ei?Me(s.CULL_FACE):j(s.CULL_FACE);let ue=L.side===nn;xe&&(ue=!ue),Q(ue),L.blending===Ls&&L.transparent===!1?ee(ai):ee(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),r.setMask(L.colorWrite);const de=L.stencilWrite;o.setTest(de),de&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),ne(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?j(s.SAMPLE_ALPHA_TO_COVERAGE):Me(s.SAMPLE_ALPHA_TO_COVERAGE)}function Q(L){M!==L&&(L?s.frontFace(s.CW):s.frontFace(s.CCW),M=L)}function se(L){L!==wm?(j(s.CULL_FACE),L!==D&&(L===ou?s.cullFace(s.BACK):L===Tm?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Me(s.CULL_FACE),D=L}function oe(L){L!==F&&(Y&&s.lineWidth(L),F=L)}function ne(L,xe,ue){L?(j(s.POLYGON_OFFSET_FILL),(B!==xe||q!==ue)&&(s.polygonOffset(xe,ue),B=xe,q=ue)):Me(s.POLYGON_OFFSET_FILL)}function Te(L){L?j(s.SCISSOR_TEST):Me(s.SCISSOR_TEST)}function fe(L){L===void 0&&(L=s.TEXTURE0+G-1),re!==L&&(s.activeTexture(L),re=L)}function be(L,xe,ue){ue===void 0&&(re===null?ue=s.TEXTURE0+G-1:ue=re);let de=ce[ue];de===void 0&&(de={type:void 0,texture:void 0},ce[ue]=de),(de.type!==L||de.texture!==xe)&&(re!==ue&&(s.activeTexture(ue),re=ue),s.bindTexture(L,xe||Z[L]),de.type=L,de.texture=xe)}function C(){const L=ce[re];L!==void 0&&L.type!==void 0&&(s.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function b(){try{s.compressedTexImage2D(...arguments)}catch(L){L("WebGLState:",L)}}function O(){try{s.compressedTexImage3D(...arguments)}catch(L){L("WebGLState:",L)}}function H(){try{s.texSubImage2D(...arguments)}catch(L){L("WebGLState:",L)}}function K(){try{s.texSubImage3D(...arguments)}catch(L){L("WebGLState:",L)}}function V(){try{s.compressedTexSubImage2D(...arguments)}catch(L){L("WebGLState:",L)}}function Ie(){try{s.compressedTexSubImage3D(...arguments)}catch(L){L("WebGLState:",L)}}function pe(){try{s.texStorage2D(...arguments)}catch(L){L("WebGLState:",L)}}function Le(){try{s.texStorage3D(...arguments)}catch(L){L("WebGLState:",L)}}function Re(){try{s.texImage2D(...arguments)}catch(L){L("WebGLState:",L)}}function te(){try{s.texImage3D(...arguments)}catch(L){L("WebGLState:",L)}}function le(L){Qe.equals(L)===!1&&(s.scissor(L.x,L.y,L.z,L.w),Qe.copy(L))}function Ve(L){rt.equals(L)===!1&&(s.viewport(L.x,L.y,L.z,L.w),rt.copy(L))}function Be(L,xe){let ue=l.get(xe);ue===void 0&&(ue=new WeakMap,l.set(xe,ue));let de=ue.get(L);de===void 0&&(de=s.getUniformBlockIndex(xe,L.name),ue.set(L,de))}function ve(L,xe){const de=l.get(xe).get(L);c.get(xe)!==de&&(s.uniformBlockBinding(xe,de,L.__bindingPointIndex),c.set(xe,de))}function Xe(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},re=null,ce={},u={},d=new WeakMap,f=[],p=null,g=!1,x=null,m=null,v=null,_=null,y=null,A=null,w=null,P=new _e(0,0,0),I=0,S=!1,M=null,D=null,F=null,B=null,q=null,Qe.set(0,0,s.canvas.width,s.canvas.height),rt.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:j,disable:Me,bindFramebuffer:Ne,drawBuffers:Pe,useProgram:Je,setBlending:ee,setMaterial:R,setFlipSided:Q,setCullFace:se,setLineWidth:oe,setPolygonOffset:ne,setScissorTest:Te,activeTexture:fe,bindTexture:be,unbindTexture:C,compressedTexImage2D:b,compressedTexImage3D:O,texImage2D:Re,texImage3D:te,updateUBOMapping:Be,uniformBlockBinding:ve,texStorage2D:pe,texStorage3D:Le,texSubImage2D:H,texSubImage3D:K,compressedTexSubImage2D:V,compressedTexSubImage3D:Ie,scissor:le,viewport:Ve,reset:Xe}}function vT(s,e,t,n,i,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new X,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(C,b){return f?new OffscreenCanvas(C,b):Ba("canvas")}function g(C,b,O){let H=1;const K=be(C);if((K.width>O||K.height>O)&&(H=O/Math.max(K.width,K.height)),H<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const V=Math.floor(H*K.width),Ie=Math.floor(H*K.height);u===void 0&&(u=p(V,Ie));const pe=b?p(V,Ie):u;return pe.width=V,pe.height=Ie,pe.getContext("2d").drawImage(C,0,0,V,Ie),me("WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+V+"x"+Ie+")."),pe}else return"data"in C&&me("WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),C;return C}function x(C){return C.generateMipmaps}function m(C){s.generateMipmap(C)}function v(C){return C.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?s.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function _(C,b,O,H,K=!1){if(C!==null){if(s[C]!==void 0)return s[C];me("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let V=b;if(b===s.RED&&(O===s.FLOAT&&(V=s.R32F),O===s.HALF_FLOAT&&(V=s.R16F),O===s.UNSIGNED_BYTE&&(V=s.R8)),b===s.RED_INTEGER&&(O===s.UNSIGNED_BYTE&&(V=s.R8UI),O===s.UNSIGNED_SHORT&&(V=s.R16UI),O===s.UNSIGNED_INT&&(V=s.R32UI),O===s.BYTE&&(V=s.R8I),O===s.SHORT&&(V=s.R16I),O===s.INT&&(V=s.R32I)),b===s.RG&&(O===s.FLOAT&&(V=s.RG32F),O===s.HALF_FLOAT&&(V=s.RG16F),O===s.UNSIGNED_BYTE&&(V=s.RG8)),b===s.RG_INTEGER&&(O===s.UNSIGNED_BYTE&&(V=s.RG8UI),O===s.UNSIGNED_SHORT&&(V=s.RG16UI),O===s.UNSIGNED_INT&&(V=s.RG32UI),O===s.BYTE&&(V=s.RG8I),O===s.SHORT&&(V=s.RG16I),O===s.INT&&(V=s.RG32I)),b===s.RGB_INTEGER&&(O===s.UNSIGNED_BYTE&&(V=s.RGB8UI),O===s.UNSIGNED_SHORT&&(V=s.RGB16UI),O===s.UNSIGNED_INT&&(V=s.RGB32UI),O===s.BYTE&&(V=s.RGB8I),O===s.SHORT&&(V=s.RGB16I),O===s.INT&&(V=s.RGB32I)),b===s.RGBA_INTEGER&&(O===s.UNSIGNED_BYTE&&(V=s.RGBA8UI),O===s.UNSIGNED_SHORT&&(V=s.RGBA16UI),O===s.UNSIGNED_INT&&(V=s.RGBA32UI),O===s.BYTE&&(V=s.RGBA8I),O===s.SHORT&&(V=s.RGBA16I),O===s.INT&&(V=s.RGBA32I)),b===s.RGB&&(O===s.UNSIGNED_INT_5_9_9_9_REV&&(V=s.RGB9_E5),O===s.UNSIGNED_INT_10F_11F_11F_REV&&(V=s.R11F_G11F_B10F)),b===s.RGBA){const Ie=K?Fa:tt.getTransfer(H);O===s.FLOAT&&(V=s.RGBA32F),O===s.HALF_FLOAT&&(V=s.RGBA16F),O===s.UNSIGNED_BYTE&&(V=Ie===ct?s.SRGB8_ALPHA8:s.RGBA8),O===s.UNSIGNED_SHORT_4_4_4_4&&(V=s.RGBA4),O===s.UNSIGNED_SHORT_5_5_5_1&&(V=s.RGB5_A1)}return(V===s.R16F||V===s.R32F||V===s.RG16F||V===s.RG32F||V===s.RGBA16F||V===s.RGBA32F)&&e.get("EXT_color_buffer_float"),V}function y(C,b){let O;return C?b===null||b===Ci||b===Ur?O=s.DEPTH24_STENCIL8:b===fn?O=s.DEPTH32F_STENCIL8:b===Lr&&(O=s.DEPTH24_STENCIL8,me("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Ci||b===Ur?O=s.DEPTH_COMPONENT24:b===fn?O=s.DEPTH_COMPONENT32F:b===Lr&&(O=s.DEPTH_COMPONENT16),O}function A(C,b){return x(C)===!0||C.isFramebufferTexture&&C.minFilter!==kt&&C.minFilter!==At?Math.log2(Math.max(b.width,b.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?b.mipmaps.length:1}function w(C){const b=C.target;b.removeEventListener("dispose",w),I(b),b.isVideoTexture&&h.delete(b)}function P(C){const b=C.target;b.removeEventListener("dispose",P),M(b)}function I(C){const b=n.get(C);if(b.__webglInit===void 0)return;const O=C.source,H=d.get(O);if(H){const K=H[b.__cacheKey];K.usedTimes--,K.usedTimes===0&&S(C),Object.keys(H).length===0&&d.delete(O)}n.remove(C)}function S(C){const b=n.get(C);s.deleteTexture(b.__webglTexture);const O=C.source,H=d.get(O);delete H[b.__cacheKey],a.memory.textures--}function M(C){const b=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let H=0;H<6;H++){if(Array.isArray(b.__webglFramebuffer[H]))for(let K=0;K<b.__webglFramebuffer[H].length;K++)s.deleteFramebuffer(b.__webglFramebuffer[H][K]);else s.deleteFramebuffer(b.__webglFramebuffer[H]);b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer[H])}else{if(Array.isArray(b.__webglFramebuffer))for(let H=0;H<b.__webglFramebuffer.length;H++)s.deleteFramebuffer(b.__webglFramebuffer[H]);else s.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&s.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let H=0;H<b.__webglColorRenderbuffer.length;H++)b.__webglColorRenderbuffer[H]&&s.deleteRenderbuffer(b.__webglColorRenderbuffer[H]);b.__webglDepthRenderbuffer&&s.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const O=C.textures;for(let H=0,K=O.length;H<K;H++){const V=n.get(O[H]);V.__webglTexture&&(s.deleteTexture(V.__webglTexture),a.memory.textures--),n.remove(O[H])}n.remove(C)}let D=0;function F(){D=0}function B(){const C=D;return C>=i.maxTextures&&me("WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+i.maxTextures),D+=1,C}function q(C){const b=[];return b.push(C.wrapS),b.push(C.wrapT),b.push(C.wrapR||0),b.push(C.magFilter),b.push(C.minFilter),b.push(C.anisotropy),b.push(C.internalFormat),b.push(C.format),b.push(C.type),b.push(C.generateMipmaps),b.push(C.premultiplyAlpha),b.push(C.flipY),b.push(C.unpackAlignment),b.push(C.colorSpace),b.join()}function G(C,b){const O=n.get(C);if(C.isVideoTexture&&Te(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&O.__version!==C.version){const H=C.image;if(H===null)me("WebGLRenderer: Texture marked for update but no image data found.");else if(H.complete===!1)me("WebGLRenderer: Texture marked for update but image is incomplete");else{Z(O,C,b);return}}else C.isExternalTexture&&(O.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,O.__webglTexture,s.TEXTURE0+b)}function Y(C,b){const O=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&O.__version!==C.version){Z(O,C,b);return}else C.isExternalTexture&&(O.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,O.__webglTexture,s.TEXTURE0+b)}function J(C,b){const O=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&O.__version!==C.version){Z(O,C,b);return}t.bindTexture(s.TEXTURE_3D,O.__webglTexture,s.TEXTURE0+b)}function W(C,b){const O=n.get(C);if(C.version>0&&O.__version!==C.version){j(O,C,b);return}t.bindTexture(s.TEXTURE_CUBE_MAP,O.__webglTexture,s.TEXTURE0+b)}const re={[Da]:s.REPEAT,[dn]:s.CLAMP_TO_EDGE,[La]:s.MIRRORED_REPEAT},ce={[kt]:s.NEAREST,[ku]:s.NEAREST_MIPMAP_NEAREST,[Sr]:s.NEAREST_MIPMAP_LINEAR,[At]:s.LINEAR,[ga]:s.LINEAR_MIPMAP_NEAREST,[ii]:s.LINEAR_MIPMAP_LINEAR},Ce={[r0]:s.NEVER,[u0]:s.ALWAYS,[a0]:s.LESS,[Zu]:s.LEQUAL,[o0]:s.EQUAL,[h0]:s.GEQUAL,[c0]:s.GREATER,[l0]:s.NOTEQUAL};function Ke(C,b){if(b.type===fn&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===At||b.magFilter===ga||b.magFilter===Sr||b.magFilter===ii||b.minFilter===At||b.minFilter===ga||b.minFilter===Sr||b.minFilter===ii)&&me("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(C,s.TEXTURE_WRAP_S,re[b.wrapS]),s.texParameteri(C,s.TEXTURE_WRAP_T,re[b.wrapT]),(C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY)&&s.texParameteri(C,s.TEXTURE_WRAP_R,re[b.wrapR]),s.texParameteri(C,s.TEXTURE_MAG_FILTER,ce[b.magFilter]),s.texParameteri(C,s.TEXTURE_MIN_FILTER,ce[b.minFilter]),b.compareFunction&&(s.texParameteri(C,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(C,s.TEXTURE_COMPARE_FUNC,Ce[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===kt||b.minFilter!==Sr&&b.minFilter!==ii||b.type===fn&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");s.texParameterf(C,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,i.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function Qe(C,b){let O=!1;C.__webglInit===void 0&&(C.__webglInit=!0,b.addEventListener("dispose",w));const H=b.source;let K=d.get(H);K===void 0&&(K={},d.set(H,K));const V=q(b);if(V!==C.__cacheKey){K[V]===void 0&&(K[V]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,O=!0),K[V].usedTimes++;const Ie=K[C.__cacheKey];Ie!==void 0&&(K[C.__cacheKey].usedTimes--,Ie.usedTimes===0&&S(b)),C.__cacheKey=V,C.__webglTexture=K[V].texture}return O}function rt(C,b,O){return Math.floor(Math.floor(C/O)/b)}function ot(C,b,O,H){const V=C.updateRanges;if(V.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,b.width,b.height,O,H,b.data);else{V.sort((te,le)=>te.start-le.start);let Ie=0;for(let te=1;te<V.length;te++){const le=V[Ie],Ve=V[te],Be=le.start+le.count,ve=rt(Ve.start,b.width,4),Xe=rt(le.start,b.width,4);Ve.start<=Be+1&&ve===Xe&&rt(Ve.start+Ve.count-1,b.width,4)===ve?le.count=Math.max(le.count,Ve.start+Ve.count-le.start):(++Ie,V[Ie]=Ve)}V.length=Ie+1;const pe=s.getParameter(s.UNPACK_ROW_LENGTH),Le=s.getParameter(s.UNPACK_SKIP_PIXELS),Re=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,b.width);for(let te=0,le=V.length;te<le;te++){const Ve=V[te],Be=Math.floor(Ve.start/4),ve=Math.ceil(Ve.count/4),Xe=Be%b.width,L=Math.floor(Be/b.width),xe=ve,ue=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,Xe),s.pixelStorei(s.UNPACK_SKIP_ROWS,L),t.texSubImage2D(s.TEXTURE_2D,0,Xe,L,xe,ue,O,H,b.data)}C.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,pe),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Le),s.pixelStorei(s.UNPACK_SKIP_ROWS,Re)}}function Z(C,b,O){let H=s.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(H=s.TEXTURE_2D_ARRAY),b.isData3DTexture&&(H=s.TEXTURE_3D);const K=Qe(C,b),V=b.source;t.bindTexture(H,C.__webglTexture,s.TEXTURE0+O);const Ie=n.get(V);if(V.version!==Ie.__version||K===!0){t.activeTexture(s.TEXTURE0+O);const pe=tt.getPrimaries(tt.workingColorSpace),Le=b.colorSpace===bi?null:tt.getPrimaries(b.colorSpace),Re=b.colorSpace===bi||pe===Le?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);let te=g(b.image,!1,i.maxTextureSize);te=fe(b,te);const le=r.convert(b.format,b.colorSpace),Ve=r.convert(b.type);let Be=_(b.internalFormat,le,Ve,b.colorSpace,b.isVideoTexture);Ke(H,b);let ve;const Xe=b.mipmaps,L=b.isVideoTexture!==!0,xe=Ie.__version===void 0||K===!0,ue=V.dataReady,de=A(b,te);if(b.isDepthTexture)Be=y(b.format===Fr,b.type),xe&&(L?t.texStorage2D(s.TEXTURE_2D,1,Be,te.width,te.height):t.texImage2D(s.TEXTURE_2D,0,Be,te.width,te.height,0,le,Ve,null));else if(b.isDataTexture)if(Xe.length>0){L&&xe&&t.texStorage2D(s.TEXTURE_2D,de,Be,Xe[0].width,Xe[0].height);for(let ie=0,$=Xe.length;ie<$;ie++)ve=Xe[ie],L?ue&&t.texSubImage2D(s.TEXTURE_2D,ie,0,0,ve.width,ve.height,le,Ve,ve.data):t.texImage2D(s.TEXTURE_2D,ie,Be,ve.width,ve.height,0,le,Ve,ve.data);b.generateMipmaps=!1}else L?(xe&&t.texStorage2D(s.TEXTURE_2D,de,Be,te.width,te.height),ue&&ot(b,te,le,Ve)):t.texImage2D(s.TEXTURE_2D,0,Be,te.width,te.height,0,le,Ve,te.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){L&&xe&&t.texStorage3D(s.TEXTURE_2D_ARRAY,de,Be,Xe[0].width,Xe[0].height,te.depth);for(let ie=0,$=Xe.length;ie<$;ie++)if(ve=Xe[ie],b.format!==tn)if(le!==null)if(L){if(ue)if(b.layerUpdates.size>0){const Ee=bu(ve.width,ve.height,b.format,b.type);for(const qe of b.layerUpdates){const xt=ve.data.subarray(qe*Ee/ve.data.BYTES_PER_ELEMENT,(qe+1)*Ee/ve.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ie,0,0,qe,ve.width,ve.height,1,le,xt)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ie,0,0,0,ve.width,ve.height,te.depth,le,ve.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ie,Be,ve.width,ve.height,te.depth,0,ve.data,0,0);else me("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else L?ue&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,ie,0,0,0,ve.width,ve.height,te.depth,le,Ve,ve.data):t.texImage3D(s.TEXTURE_2D_ARRAY,ie,Be,ve.width,ve.height,te.depth,0,le,Ve,ve.data)}else{L&&xe&&t.texStorage2D(s.TEXTURE_2D,de,Be,Xe[0].width,Xe[0].height);for(let ie=0,$=Xe.length;ie<$;ie++)ve=Xe[ie],b.format!==tn?le!==null?L?ue&&t.compressedTexSubImage2D(s.TEXTURE_2D,ie,0,0,ve.width,ve.height,le,ve.data):t.compressedTexImage2D(s.TEXTURE_2D,ie,Be,ve.width,ve.height,0,ve.data):me("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?ue&&t.texSubImage2D(s.TEXTURE_2D,ie,0,0,ve.width,ve.height,le,Ve,ve.data):t.texImage2D(s.TEXTURE_2D,ie,Be,ve.width,ve.height,0,le,Ve,ve.data)}else if(b.isDataArrayTexture)if(L){if(xe&&t.texStorage3D(s.TEXTURE_2D_ARRAY,de,Be,te.width,te.height,te.depth),ue)if(b.layerUpdates.size>0){const ie=bu(te.width,te.height,b.format,b.type);for(const $ of b.layerUpdates){const Ee=te.data.subarray($*ie/te.data.BYTES_PER_ELEMENT,($+1)*ie/te.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,$,te.width,te.height,1,le,Ve,Ee)}b.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,le,Ve,te.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Be,te.width,te.height,te.depth,0,le,Ve,te.data);else if(b.isData3DTexture)L?(xe&&t.texStorage3D(s.TEXTURE_3D,de,Be,te.width,te.height,te.depth),ue&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,le,Ve,te.data)):t.texImage3D(s.TEXTURE_3D,0,Be,te.width,te.height,te.depth,0,le,Ve,te.data);else if(b.isFramebufferTexture){if(xe)if(L)t.texStorage2D(s.TEXTURE_2D,de,Be,te.width,te.height);else{let ie=te.width,$=te.height;for(let Ee=0;Ee<de;Ee++)t.texImage2D(s.TEXTURE_2D,Ee,Be,ie,$,0,le,Ve,null),ie>>=1,$>>=1}}else if(Xe.length>0){if(L&&xe){const ie=be(Xe[0]);t.texStorage2D(s.TEXTURE_2D,de,Be,ie.width,ie.height)}for(let ie=0,$=Xe.length;ie<$;ie++)ve=Xe[ie],L?ue&&t.texSubImage2D(s.TEXTURE_2D,ie,0,0,le,Ve,ve):t.texImage2D(s.TEXTURE_2D,ie,Be,le,Ve,ve);b.generateMipmaps=!1}else if(L){if(xe){const ie=be(te);t.texStorage2D(s.TEXTURE_2D,de,Be,ie.width,ie.height)}ue&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,le,Ve,te)}else t.texImage2D(s.TEXTURE_2D,0,Be,le,Ve,te);x(b)&&m(H),Ie.__version=V.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function j(C,b,O){if(b.image.length!==6)return;const H=Qe(C,b),K=b.source;t.bindTexture(s.TEXTURE_CUBE_MAP,C.__webglTexture,s.TEXTURE0+O);const V=n.get(K);if(K.version!==V.__version||H===!0){t.activeTexture(s.TEXTURE0+O);const Ie=tt.getPrimaries(tt.workingColorSpace),pe=b.colorSpace===bi?null:tt.getPrimaries(b.colorSpace),Le=b.colorSpace===bi||Ie===pe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le);const Re=b.isCompressedTexture||b.image[0].isCompressedTexture,te=b.image[0]&&b.image[0].isDataTexture,le=[];for(let $=0;$<6;$++)!Re&&!te?le[$]=g(b.image[$],!0,i.maxCubemapSize):le[$]=te?b.image[$].image:b.image[$],le[$]=fe(b,le[$]);const Ve=le[0],Be=r.convert(b.format,b.colorSpace),ve=r.convert(b.type),Xe=_(b.internalFormat,Be,ve,b.colorSpace),L=b.isVideoTexture!==!0,xe=V.__version===void 0||H===!0,ue=K.dataReady;let de=A(b,Ve);Ke(s.TEXTURE_CUBE_MAP,b);let ie;if(Re){L&&xe&&t.texStorage2D(s.TEXTURE_CUBE_MAP,de,Xe,Ve.width,Ve.height);for(let $=0;$<6;$++){ie=le[$].mipmaps;for(let Ee=0;Ee<ie.length;Ee++){const qe=ie[Ee];b.format!==tn?Be!==null?L?ue&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,Ee,0,0,qe.width,qe.height,Be,qe.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,Ee,Xe,qe.width,qe.height,0,qe.data):me("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?ue&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,Ee,0,0,qe.width,qe.height,Be,ve,qe.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,Ee,Xe,qe.width,qe.height,0,Be,ve,qe.data)}}}else{if(ie=b.mipmaps,L&&xe){ie.length>0&&de++;const $=be(le[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,de,Xe,$.width,$.height)}for(let $=0;$<6;$++)if(te){L?ue&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,le[$].width,le[$].height,Be,ve,le[$].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Xe,le[$].width,le[$].height,0,Be,ve,le[$].data);for(let Ee=0;Ee<ie.length;Ee++){const xt=ie[Ee].image[$].image;L?ue&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,Ee+1,0,0,xt.width,xt.height,Be,ve,xt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,Ee+1,Xe,xt.width,xt.height,0,Be,ve,xt.data)}}else{L?ue&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Be,ve,le[$]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Xe,Be,ve,le[$]);for(let Ee=0;Ee<ie.length;Ee++){const qe=ie[Ee];L?ue&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,Ee+1,0,0,Be,ve,qe.image[$]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,Ee+1,Xe,Be,ve,qe.image[$])}}}x(b)&&m(s.TEXTURE_CUBE_MAP),V.__version=K.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function Me(C,b,O,H,K,V){const Ie=r.convert(O.format,O.colorSpace),pe=r.convert(O.type),Le=_(O.internalFormat,Ie,pe,O.colorSpace),Re=n.get(b),te=n.get(O);if(te.__renderTarget=b,!Re.__hasExternalTextures){const le=Math.max(1,b.width>>V),Ve=Math.max(1,b.height>>V);K===s.TEXTURE_3D||K===s.TEXTURE_2D_ARRAY?t.texImage3D(K,V,Le,le,Ve,b.depth,0,Ie,pe,null):t.texImage2D(K,V,Le,le,Ve,0,Ie,pe,null)}t.bindFramebuffer(s.FRAMEBUFFER,C),ne(b)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,H,K,te.__webglTexture,0,oe(b)):(K===s.TEXTURE_2D||K>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,H,K,te.__webglTexture,V),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ne(C,b,O){if(s.bindRenderbuffer(s.RENDERBUFFER,C),b.depthBuffer){const H=b.depthTexture,K=H&&H.isDepthTexture?H.type:null,V=y(b.stencilBuffer,K),Ie=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,pe=oe(b);ne(b)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,pe,V,b.width,b.height):O?s.renderbufferStorageMultisample(s.RENDERBUFFER,pe,V,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,V,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ie,s.RENDERBUFFER,C)}else{const H=b.textures;for(let K=0;K<H.length;K++){const V=H[K],Ie=r.convert(V.format,V.colorSpace),pe=r.convert(V.type),Le=_(V.internalFormat,Ie,pe,V.colorSpace),Re=oe(b);O&&ne(b)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Re,Le,b.width,b.height):ne(b)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Re,Le,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,Le,b.width,b.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Pe(C,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,C),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const H=n.get(b.depthTexture);H.__renderTarget=b,(!H.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),G(b.depthTexture,0);const K=H.__webglTexture,V=oe(b);if(b.depthTexture.format===Nr)ne(b)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,K,0,V):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,K,0);else if(b.depthTexture.format===Fr)ne(b)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,K,0,V):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function Je(C){const b=n.get(C),O=C.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==C.depthTexture){const H=C.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),H){const K=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,H.removeEventListener("dispose",K)};H.addEventListener("dispose",K),b.__depthDisposeCallback=K}b.__boundDepthTexture=H}if(C.depthTexture&&!b.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");const H=C.texture.mipmaps;H&&H.length>0?Pe(b.__webglFramebuffer[0],C):Pe(b.__webglFramebuffer,C)}else if(O){b.__webglDepthbuffer=[];for(let H=0;H<6;H++)if(t.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[H]),b.__webglDepthbuffer[H]===void 0)b.__webglDepthbuffer[H]=s.createRenderbuffer(),Ne(b.__webglDepthbuffer[H],C,!1);else{const K=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,V=b.__webglDepthbuffer[H];s.bindRenderbuffer(s.RENDERBUFFER,V),s.framebufferRenderbuffer(s.FRAMEBUFFER,K,s.RENDERBUFFER,V)}}else{const H=C.texture.mipmaps;if(H&&H.length>0?t.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=s.createRenderbuffer(),Ne(b.__webglDepthbuffer,C,!1);else{const K=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,V=b.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,V),s.framebufferRenderbuffer(s.FRAMEBUFFER,K,s.RENDERBUFFER,V)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function ft(C,b,O){const H=n.get(C);b!==void 0&&Me(H.__webglFramebuffer,C,C.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),O!==void 0&&Je(C)}function Ge(C){const b=C.texture,O=n.get(C),H=n.get(b);C.addEventListener("dispose",P);const K=C.textures,V=C.isWebGLCubeRenderTarget===!0,Ie=K.length>1;if(Ie||(H.__webglTexture===void 0&&(H.__webglTexture=s.createTexture()),H.__version=b.version,a.memory.textures++),V){O.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(b.mipmaps&&b.mipmaps.length>0){O.__webglFramebuffer[pe]=[];for(let Le=0;Le<b.mipmaps.length;Le++)O.__webglFramebuffer[pe][Le]=s.createFramebuffer()}else O.__webglFramebuffer[pe]=s.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){O.__webglFramebuffer=[];for(let pe=0;pe<b.mipmaps.length;pe++)O.__webglFramebuffer[pe]=s.createFramebuffer()}else O.__webglFramebuffer=s.createFramebuffer();if(Ie)for(let pe=0,Le=K.length;pe<Le;pe++){const Re=n.get(K[pe]);Re.__webglTexture===void 0&&(Re.__webglTexture=s.createTexture(),a.memory.textures++)}if(C.samples>0&&ne(C)===!1){O.__webglMultisampledFramebuffer=s.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let pe=0;pe<K.length;pe++){const Le=K[pe];O.__webglColorRenderbuffer[pe]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,O.__webglColorRenderbuffer[pe]);const Re=r.convert(Le.format,Le.colorSpace),te=r.convert(Le.type),le=_(Le.internalFormat,Re,te,Le.colorSpace,C.isXRRenderTarget===!0),Ve=oe(C);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ve,le,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+pe,s.RENDERBUFFER,O.__webglColorRenderbuffer[pe])}s.bindRenderbuffer(s.RENDERBUFFER,null),C.depthBuffer&&(O.__webglDepthRenderbuffer=s.createRenderbuffer(),Ne(O.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(V){t.bindTexture(s.TEXTURE_CUBE_MAP,H.__webglTexture),Ke(s.TEXTURE_CUBE_MAP,b);for(let pe=0;pe<6;pe++)if(b.mipmaps&&b.mipmaps.length>0)for(let Le=0;Le<b.mipmaps.length;Le++)Me(O.__webglFramebuffer[pe][Le],C,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Le);else Me(O.__webglFramebuffer[pe],C,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);x(b)&&m(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ie){for(let pe=0,Le=K.length;pe<Le;pe++){const Re=K[pe],te=n.get(Re);let le=s.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(le=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(le,te.__webglTexture),Ke(le,Re),Me(O.__webglFramebuffer,C,Re,s.COLOR_ATTACHMENT0+pe,le,0),x(Re)&&m(le)}t.unbindTexture()}else{let pe=s.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(pe=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(pe,H.__webglTexture),Ke(pe,b),b.mipmaps&&b.mipmaps.length>0)for(let Le=0;Le<b.mipmaps.length;Le++)Me(O.__webglFramebuffer[Le],C,b,s.COLOR_ATTACHMENT0,pe,Le);else Me(O.__webglFramebuffer,C,b,s.COLOR_ATTACHMENT0,pe,0);x(b)&&m(pe),t.unbindTexture()}C.depthBuffer&&Je(C)}function ee(C){const b=C.textures;for(let O=0,H=b.length;O<H;O++){const K=b[O];if(x(K)){const V=v(C),Ie=n.get(K).__webglTexture;t.bindTexture(V,Ie),m(V),t.unbindTexture()}}}const R=[],Q=[];function se(C){if(C.samples>0){if(ne(C)===!1){const b=C.textures,O=C.width,H=C.height;let K=s.COLOR_BUFFER_BIT;const V=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ie=n.get(C),pe=b.length>1;if(pe)for(let Re=0;Re<b.length;Re++)t.bindFramebuffer(s.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Re,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Ie.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Re,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer);const Le=C.texture.mipmaps;Le&&Le.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer);for(let Re=0;Re<b.length;Re++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(K|=s.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(K|=s.STENCIL_BUFFER_BIT)),pe){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ie.__webglColorRenderbuffer[Re]);const te=n.get(b[Re]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,te,0)}s.blitFramebuffer(0,0,O,H,0,0,O,H,K,s.NEAREST),c===!0&&(R.length=0,Q.length=0,R.push(s.COLOR_ATTACHMENT0+Re),C.depthBuffer&&C.resolveDepthBuffer===!1&&(R.push(V),Q.push(V),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Q)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,R))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),pe)for(let Re=0;Re<b.length;Re++){t.bindFramebuffer(s.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Re,s.RENDERBUFFER,Ie.__webglColorRenderbuffer[Re]);const te=n.get(b[Re]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Ie.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Re,s.TEXTURE_2D,te,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&c){const b=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[b])}}}function oe(C){return Math.min(i.maxSamples,C.samples)}function ne(C){const b=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Te(C){const b=a.render.frame;h.get(C)!==b&&(h.set(C,b),C.update())}function fe(C,b){const O=C.colorSpace,H=C.format,K=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||O!==ks&&O!==bi&&(tt.getTransfer(O)===ct?(H!==tn||K!==Yn)&&me("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):We("WebGLTextures: Unsupported texture color space:",O)),b}function be(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(l.width=C.naturalWidth||C.width,l.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(l.width=C.displayWidth,l.height=C.displayHeight):(l.width=C.width,l.height=C.height),l}this.allocateTextureUnit=B,this.resetTextureUnits=F,this.setTexture2D=G,this.setTexture2DArray=Y,this.setTexture3D=J,this.setTextureCube=W,this.rebindTextures=ft,this.setupRenderTarget=Ge,this.updateRenderTargetMipmap=ee,this.updateMultisampleRenderTarget=se,this.setupDepthRenderbuffer=Je,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=ne}function Sx(s,e){function t(n,i=bi){let r;const a=tt.getTransfer(i);if(n===Yn)return s.UNSIGNED_BYTE;if(n===Sl)return s.UNSIGNED_SHORT_4_4_4_4;if(n===wl)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Hu)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Wu)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===Vu)return s.BYTE;if(n===Gu)return s.SHORT;if(n===Lr)return s.UNSIGNED_SHORT;if(n===Ml)return s.INT;if(n===Ci)return s.UNSIGNED_INT;if(n===fn)return s.FLOAT;if(n===qs)return s.HALF_FLOAT;if(n===Xu)return s.ALPHA;if(n===qu)return s.RGB;if(n===tn)return s.RGBA;if(n===Nr)return s.DEPTH_COMPONENT;if(n===Fr)return s.DEPTH_STENCIL;if(n===Tl)return s.RED;if(n===eo)return s.RED_INTEGER;if(n===El)return s.RG;if(n===Al)return s.RG_INTEGER;if(n===Cl)return s.RGBA_INTEGER;if(n===_a||n===va||n===ya||n===ba)if(a===ct)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===_a)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===va)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ya)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ba)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===_a)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===va)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ya)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ba)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ac||n===Cc||n===Rc||n===Pc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ac)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Cc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Rc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Pc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ic||n===Dc||n===Lc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ic||n===Dc)return a===ct?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Lc)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Uc||n===Nc||n===Fc||n===Oc||n===Bc||n===zc||n===kc||n===Vc||n===Gc||n===Hc||n===Wc||n===Xc||n===qc||n===Yc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Uc)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Nc)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Fc)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Oc)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Bc)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===zc)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===kc)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Vc)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Gc)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Hc)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Wc)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Xc)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===qc)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Yc)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Zc||n===$c||n===Kc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Zc)return a===ct?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===$c)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Kc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Jc||n===jc||n===Qc||n===el)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Jc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===jc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Qc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===el)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ur?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}const yT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,bT=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class MT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new rd(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Ln({vertexShader:yT,fragmentShader:bT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new It(new qr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ST extends ci{constructor(e,t){super();const n=this;let i=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,p=null;const g=typeof XRWebGLBinding<"u",x=new MT,m={},v=t.getContextAttributes();let _=null,y=null;const A=[],w=[],P=new X;let I=null;const S=new Ot;S.viewport=new je;const M=new Ot;M.viewport=new je;const D=[S,M],F=new hx;let B=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let j=A[Z];return j===void 0&&(j=new lc,A[Z]=j),j.getTargetRaySpace()},this.getControllerGrip=function(Z){let j=A[Z];return j===void 0&&(j=new lc,A[Z]=j),j.getGripSpace()},this.getHand=function(Z){let j=A[Z];return j===void 0&&(j=new lc,A[Z]=j),j.getHandSpace()};function G(Z){const j=w.indexOf(Z.inputSource);if(j===-1)return;const Me=A[j];Me!==void 0&&(Me.update(Z.inputSource,Z.frame,l||a),Me.dispatchEvent({type:Z.type,data:Z.inputSource}))}function Y(){i.removeEventListener("select",G),i.removeEventListener("selectstart",G),i.removeEventListener("selectend",G),i.removeEventListener("squeeze",G),i.removeEventListener("squeezestart",G),i.removeEventListener("squeezeend",G),i.removeEventListener("end",Y),i.removeEventListener("inputsourceschange",J);for(let Z=0;Z<A.length;Z++){const j=w[Z];j!==null&&(w[Z]=null,A[Z].disconnect(j))}B=null,q=null,x.reset();for(const Z in m)delete m[Z];e.setRenderTarget(_),f=null,d=null,u=null,i=null,y=null,ot.stop(),n.isPresenting=!1,e.setPixelRatio(I),e.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,n.isPresenting===!0&&me("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,n.isPresenting===!0&&me("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(Z){l=Z},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&g&&(u=new XRWebGLBinding(i,t)),u},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(Z){if(i=Z,i!==null){if(_=e.getRenderTarget(),i.addEventListener("select",G),i.addEventListener("selectstart",G),i.addEventListener("selectend",G),i.addEventListener("squeeze",G),i.addEventListener("squeezestart",G),i.addEventListener("squeezeend",G),i.addEventListener("end",Y),i.addEventListener("inputsourceschange",J),v.xrCompatible!==!0&&await t.makeXRCompatible(),I=e.getPixelRatio(),e.getSize(P),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let Me=null,Ne=null,Pe=null;v.depth&&(Pe=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Me=v.stencil?Fr:Nr,Ne=v.stencil?Ur:Ci);const Je={colorFormat:t.RGBA8,depthFormat:Pe,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(Je),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new oi(d.textureWidth,d.textureHeight,{format:tn,type:Yn,depthTexture:new sd(d.textureWidth,d.textureHeight,Ne,void 0,void 0,void 0,void 0,void 0,void 0,Me),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const Me={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,Me),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new oi(f.framebufferWidth,f.framebufferHeight,{format:tn,type:Yn,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await i.requestReferenceSpace(o),ot.setContext(i),ot.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function J(Z){for(let j=0;j<Z.removed.length;j++){const Me=Z.removed[j],Ne=w.indexOf(Me);Ne>=0&&(w[Ne]=null,A[Ne].disconnect(Me))}for(let j=0;j<Z.added.length;j++){const Me=Z.added[j];let Ne=w.indexOf(Me);if(Ne===-1){for(let Je=0;Je<A.length;Je++)if(Je>=w.length){w.push(Me),Ne=Je;break}else if(w[Je]===null){w[Je]=Me,Ne=Je;break}if(Ne===-1)break}const Pe=A[Ne];Pe&&Pe.connect(Me)}}const W=new E,re=new E;function ce(Z,j,Me){W.setFromMatrixPosition(j.matrixWorld),re.setFromMatrixPosition(Me.matrixWorld);const Ne=W.distanceTo(re),Pe=j.projectionMatrix.elements,Je=Me.projectionMatrix.elements,ft=Pe[14]/(Pe[10]-1),Ge=Pe[14]/(Pe[10]+1),ee=(Pe[9]+1)/Pe[5],R=(Pe[9]-1)/Pe[5],Q=(Pe[8]-1)/Pe[0],se=(Je[8]+1)/Je[0],oe=ft*Q,ne=ft*se,Te=Ne/(-Q+se),fe=Te*-Q;if(j.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(fe),Z.translateZ(Te),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Pe[10]===-1)Z.projectionMatrix.copy(j.projectionMatrix),Z.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{const be=ft+Te,C=Ge+Te,b=oe-fe,O=ne+(Ne-fe),H=ee*Ge/C*be,K=R*Ge/C*be;Z.projectionMatrix.makePerspective(b,O,H,K,be,C),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function Ce(Z,j){j===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(j.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(i===null)return;let j=Z.near,Me=Z.far;x.texture!==null&&(x.depthNear>0&&(j=x.depthNear),x.depthFar>0&&(Me=x.depthFar)),F.near=M.near=S.near=j,F.far=M.far=S.far=Me,(B!==F.near||q!==F.far)&&(i.updateRenderState({depthNear:F.near,depthFar:F.far}),B=F.near,q=F.far),F.layers.mask=Z.layers.mask|6,S.layers.mask=F.layers.mask&3,M.layers.mask=F.layers.mask&5;const Ne=Z.parent,Pe=F.cameras;Ce(F,Ne);for(let Je=0;Je<Pe.length;Je++)Ce(Pe[Je],Ne);Pe.length===2?ce(F,S,M):F.projectionMatrix.copy(S.projectionMatrix),Ke(Z,F,Ne)};function Ke(Z,j,Me){Me===null?Z.matrix.copy(j.matrixWorld):(Z.matrix.copy(Me.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(j.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(j.projectionMatrix),Z.projectionMatrixInverse.copy(j.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=zr*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(Z){c=Z,d!==null&&(d.fixedFoveation=Z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Z)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(F)},this.getCameraTexture=function(Z){return m[Z]};let Qe=null;function rt(Z,j){if(h=j.getViewerPose(l||a),p=j,h!==null){const Me=h.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let Ne=!1;Me.length!==F.cameras.length&&(F.cameras.length=0,Ne=!0);for(let Ge=0;Ge<Me.length;Ge++){const ee=Me[Ge];let R=null;if(f!==null)R=f.getViewport(ee);else{const se=u.getViewSubImage(d,ee);R=se.viewport,Ge===0&&(e.setRenderTargetTextures(y,se.colorTexture,se.depthStencilTexture),e.setRenderTarget(y))}let Q=D[Ge];Q===void 0&&(Q=new Ot,Q.layers.enable(Ge),Q.viewport=new je,D[Ge]=Q),Q.matrix.fromArray(ee.transform.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.projectionMatrix.fromArray(ee.projectionMatrix),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert(),Q.viewport.set(R.x,R.y,R.width,R.height),Ge===0&&(F.matrix.copy(Q.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),Ne===!0&&F.cameras.push(Q)}const Pe=i.enabledFeatures;if(Pe&&Pe.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&g){u=n.getBinding();const Ge=u.getDepthInformation(Me[0]);Ge&&Ge.isValid&&Ge.texture&&x.init(Ge,i.renderState)}if(Pe&&Pe.includes("camera-access")&&g){e.state.unbindTexture(),u=n.getBinding();for(let Ge=0;Ge<Me.length;Ge++){const ee=Me[Ge].camera;if(ee){let R=m[ee];R||(R=new rd,m[ee]=R);const Q=u.getCameraImage(ee);R.sourceTexture=Q}}}}for(let Me=0;Me<A.length;Me++){const Ne=w[Me],Pe=A[Me];Ne!==null&&Pe!==void 0&&Pe.update(Ne,j,l||a)}Qe&&Qe(Z,j),j.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:j}),p=null}const ot=new _x;ot.setAnimationLoop(rt),this.setAnimationLoop=function(Z){Qe=Z},this.dispose=function(){}}}const Ms=new wn,wT=new De;function TT(s,e){function t(x,m){x.matrixAutoUpdate===!0&&x.updateMatrix(),m.value.copy(x.matrix)}function n(x,m){m.color.getRGB(x.fogColor.value,g0(s)),m.isFog?(x.fogNear.value=m.near,x.fogFar.value=m.far):m.isFogExp2&&(x.fogDensity.value=m.density)}function i(x,m,v,_,y){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(x,m):m.isMeshToonMaterial?(r(x,m),u(x,m)):m.isMeshPhongMaterial?(r(x,m),h(x,m)):m.isMeshStandardMaterial?(r(x,m),d(x,m),m.isMeshPhysicalMaterial&&f(x,m,y)):m.isMeshMatcapMaterial?(r(x,m),p(x,m)):m.isMeshDepthMaterial?r(x,m):m.isMeshDistanceMaterial?(r(x,m),g(x,m)):m.isMeshNormalMaterial?r(x,m):m.isLineBasicMaterial?(a(x,m),m.isLineDashedMaterial&&o(x,m)):m.isPointsMaterial?c(x,m,v,_):m.isSpriteMaterial?l(x,m):m.isShadowMaterial?(x.color.value.copy(m.color),x.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(x,m){x.opacity.value=m.opacity,m.color&&x.diffuse.value.copy(m.color),m.emissive&&x.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(x.map.value=m.map,t(m.map,x.mapTransform)),m.alphaMap&&(x.alphaMap.value=m.alphaMap,t(m.alphaMap,x.alphaMapTransform)),m.bumpMap&&(x.bumpMap.value=m.bumpMap,t(m.bumpMap,x.bumpMapTransform),x.bumpScale.value=m.bumpScale,m.side===nn&&(x.bumpScale.value*=-1)),m.normalMap&&(x.normalMap.value=m.normalMap,t(m.normalMap,x.normalMapTransform),x.normalScale.value.copy(m.normalScale),m.side===nn&&x.normalScale.value.negate()),m.displacementMap&&(x.displacementMap.value=m.displacementMap,t(m.displacementMap,x.displacementMapTransform),x.displacementScale.value=m.displacementScale,x.displacementBias.value=m.displacementBias),m.emissiveMap&&(x.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,x.emissiveMapTransform)),m.specularMap&&(x.specularMap.value=m.specularMap,t(m.specularMap,x.specularMapTransform)),m.alphaTest>0&&(x.alphaTest.value=m.alphaTest);const v=e.get(m),_=v.envMap,y=v.envMapRotation;_&&(x.envMap.value=_,Ms.copy(y),Ms.x*=-1,Ms.y*=-1,Ms.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Ms.y*=-1,Ms.z*=-1),x.envMapRotation.value.setFromMatrix4(wT.makeRotationFromEuler(Ms)),x.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=m.reflectivity,x.ior.value=m.ior,x.refractionRatio.value=m.refractionRatio),m.lightMap&&(x.lightMap.value=m.lightMap,x.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,x.lightMapTransform)),m.aoMap&&(x.aoMap.value=m.aoMap,x.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,x.aoMapTransform))}function a(x,m){x.diffuse.value.copy(m.color),x.opacity.value=m.opacity,m.map&&(x.map.value=m.map,t(m.map,x.mapTransform))}function o(x,m){x.dashSize.value=m.dashSize,x.totalSize.value=m.dashSize+m.gapSize,x.scale.value=m.scale}function c(x,m,v,_){x.diffuse.value.copy(m.color),x.opacity.value=m.opacity,x.size.value=m.size*v,x.scale.value=_*.5,m.map&&(x.map.value=m.map,t(m.map,x.uvTransform)),m.alphaMap&&(x.alphaMap.value=m.alphaMap,t(m.alphaMap,x.alphaMapTransform)),m.alphaTest>0&&(x.alphaTest.value=m.alphaTest)}function l(x,m){x.diffuse.value.copy(m.color),x.opacity.value=m.opacity,x.rotation.value=m.rotation,m.map&&(x.map.value=m.map,t(m.map,x.mapTransform)),m.alphaMap&&(x.alphaMap.value=m.alphaMap,t(m.alphaMap,x.alphaMapTransform)),m.alphaTest>0&&(x.alphaTest.value=m.alphaTest)}function h(x,m){x.specular.value.copy(m.specular),x.shininess.value=Math.max(m.shininess,1e-4)}function u(x,m){m.gradientMap&&(x.gradientMap.value=m.gradientMap)}function d(x,m){x.metalness.value=m.metalness,m.metalnessMap&&(x.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,x.metalnessMapTransform)),x.roughness.value=m.roughness,m.roughnessMap&&(x.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,x.roughnessMapTransform)),m.envMap&&(x.envMapIntensity.value=m.envMapIntensity)}function f(x,m,v){x.ior.value=m.ior,m.sheen>0&&(x.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),x.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(x.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,x.sheenColorMapTransform)),m.sheenRoughnessMap&&(x.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,x.sheenRoughnessMapTransform))),m.clearcoat>0&&(x.clearcoat.value=m.clearcoat,x.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(x.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,x.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(x.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===nn&&x.clearcoatNormalScale.value.negate())),m.dispersion>0&&(x.dispersion.value=m.dispersion),m.iridescence>0&&(x.iridescence.value=m.iridescence,x.iridescenceIOR.value=m.iridescenceIOR,x.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(x.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,x.iridescenceMapTransform)),m.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),m.transmission>0&&(x.transmission.value=m.transmission,x.transmissionSamplerMap.value=v.texture,x.transmissionSamplerSize.value.set(v.width,v.height),m.transmissionMap&&(x.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,x.transmissionMapTransform)),x.thickness.value=m.thickness,m.thicknessMap&&(x.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=m.attenuationDistance,x.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(x.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(x.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=m.specularIntensity,x.specularColor.value.copy(m.specularColor),m.specularColorMap&&(x.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,x.specularColorMapTransform)),m.specularIntensityMap&&(x.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,x.specularIntensityMapTransform))}function p(x,m){m.matcap&&(x.matcap.value=m.matcap)}function g(x,m){const v=e.get(m).light;x.referencePosition.value.setFromMatrixPosition(v.matrixWorld),x.nearDistance.value=v.shadow.camera.near,x.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function ET(s,e,t,n){let i={},r={},a=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,_){const y=_.program;n.uniformBlockBinding(v,y)}function l(v,_){let y=i[v.id];y===void 0&&(p(v),y=h(v),i[v.id]=y,v.addEventListener("dispose",x));const A=_.program;n.updateUBOMapping(v,A);const w=e.render.frame;r[v.id]!==w&&(d(v),r[v.id]=w)}function h(v){const _=u();v.__bindingPointIndex=_;const y=s.createBuffer(),A=v.__size,w=v.usage;return s.bindBuffer(s.UNIFORM_BUFFER,y),s.bufferData(s.UNIFORM_BUFFER,A,w),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,_,y),y}function u(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return We("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){const _=i[v.id],y=v.uniforms,A=v.__cache;s.bindBuffer(s.UNIFORM_BUFFER,_);for(let w=0,P=y.length;w<P;w++){const I=Array.isArray(y[w])?y[w]:[y[w]];for(let S=0,M=I.length;S<M;S++){const D=I[S];if(f(D,w,S,A)===!0){const F=D.__offset,B=Array.isArray(D.value)?D.value:[D.value];let q=0;for(let G=0;G<B.length;G++){const Y=B[G],J=g(Y);typeof Y=="number"||typeof Y=="boolean"?(D.__data[0]=Y,s.bufferSubData(s.UNIFORM_BUFFER,F+q,D.__data)):Y.isMatrix3?(D.__data[0]=Y.elements[0],D.__data[1]=Y.elements[1],D.__data[2]=Y.elements[2],D.__data[3]=0,D.__data[4]=Y.elements[3],D.__data[5]=Y.elements[4],D.__data[6]=Y.elements[5],D.__data[7]=0,D.__data[8]=Y.elements[6],D.__data[9]=Y.elements[7],D.__data[10]=Y.elements[8],D.__data[11]=0):(Y.toArray(D.__data,q),q+=J.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,F,D.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(v,_,y,A){const w=v.value,P=_+"_"+y;if(A[P]===void 0)return typeof w=="number"||typeof w=="boolean"?A[P]=w:A[P]=w.clone(),!0;{const I=A[P];if(typeof w=="number"||typeof w=="boolean"){if(I!==w)return A[P]=w,!0}else if(I.equals(w)===!1)return I.copy(w),!0}return!1}function p(v){const _=v.uniforms;let y=0;const A=16;for(let P=0,I=_.length;P<I;P++){const S=Array.isArray(_[P])?_[P]:[_[P]];for(let M=0,D=S.length;M<D;M++){const F=S[M],B=Array.isArray(F.value)?F.value:[F.value];for(let q=0,G=B.length;q<G;q++){const Y=B[q],J=g(Y),W=y%A,re=W%J.boundary,ce=W+re;y+=re,ce!==0&&A-ce<J.storage&&(y+=A-ce),F.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=y,y+=J.storage}}}const w=y%A;return w>0&&(y+=A-w),v.__size=y,v.__cache={},this}function g(v){const _={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(_.boundary=4,_.storage=4):v.isVector2?(_.boundary=8,_.storage=8):v.isVector3||v.isColor?(_.boundary=16,_.storage=12):v.isVector4?(_.boundary=16,_.storage=16):v.isMatrix3?(_.boundary=48,_.storage=48):v.isMatrix4?(_.boundary=64,_.storage=64):v.isTexture?me("WebGLRenderer: Texture samplers can not be part of an uniforms group."):me("WebGLRenderer: Unsupported uniform value type.",v),_}function x(v){const _=v.target;_.removeEventListener("dispose",x);const y=a.indexOf(_.__bindingPointIndex);a.splice(y,1),s.deleteBuffer(i[_.id]),delete i[_.id],delete r[_.id]}function m(){for(const v in i)s.deleteBuffer(i[v]);a=[],i={},r={}}return{bind:c,update:l,dispose:m}}const AT=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let xi=null;function CT(){return xi===null&&(xi=new Wn(AT,32,32,El,qs),xi.minFilter=At,xi.magFilter=At,xi.wrapS=dn,xi.wrapT=dn,xi.generateMipmaps=!1,xi.needsUpdate=!0),xi}class wx{constructor(e={}){const{canvas:t=f0(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;const p=new Set([Cl,Al,eo]),g=new Set([Yn,Ci,Lr,Ur,Sl,wl]),x=new Uint32Array(4),m=new Int32Array(4);let v=null,_=null;const y=[],A=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=wi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const w=this;let P=!1;this._outputColorSpace=hn;let I=0,S=0,M=null,D=-1,F=null;const B=new je,q=new je;let G=null;const Y=new _e(0);let J=0,W=t.width,re=t.height,ce=1,Ce=null,Ke=null;const Qe=new je(0,0,W,re),rt=new je(0,0,W,re);let ot=!1;const Z=new Xr;let j=!1,Me=!1;const Ne=new De,Pe=new E,Je=new je,ft={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ge=!1;function ee(){return M===null?ce:1}let R=n;function Q(T,U){return t.getContext(T,U)}try{const T={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${yl}`),t.addEventListener("webglcontextlost",ie,!1),t.addEventListener("webglcontextrestored",$,!1),t.addEventListener("webglcontextcreationerror",Ee,!1),R===null){const U="webgl2";if(R=Q(U,T),R===null)throw Q(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw T("WebGLRenderer: "+T.message),T}let se,oe,ne,Te,fe,be,C,b,O,H,K,V,Ie,pe,Le,Re,te,le,Ve,Be,ve,Xe,L,xe;function ue(){se=new B1(R),se.init(),Xe=new Sx(R,se),oe=new R1(R,se,e,Xe),ne=new _T(R,se),oe.reversedDepthBuffer&&d&&ne.buffers.depth.setReversed(!0),Te=new V1(R),fe=new rT,be=new vT(R,se,ne,fe,oe,Xe,Te),C=new I1(w),b=new O1(w),O=new Xb(R),L=new A1(R,O),H=new z1(R,O,Te,L),K=new H1(R,H,O,Te),Ve=new G1(R,oe,be),Re=new P1(fe),V=new sT(w,C,b,se,oe,L,Re),Ie=new TT(w,fe),pe=new oT,Le=new fT(se),le=new E1(w,C,b,ne,K,f,c),te=new xT(w,K,oe),xe=new ET(R,Te,oe,ne),Be=new C1(R,se,Te),ve=new k1(R,se,Te),Te.programs=V.programs,w.capabilities=oe,w.extensions=se,w.properties=fe,w.renderLists=pe,w.shadowMap=te,w.state=ne,w.info=Te}ue();const de=new ST(w,R);this.xr=de,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const T=se.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=se.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return ce},this.setPixelRatio=function(T){T!==void 0&&(ce=T,this.setSize(W,re,!1))},this.getSize=function(T){return T.set(W,re)},this.setSize=function(T,U,z=!0){if(de.isPresenting){me("WebGLRenderer: Can't change size while VR device is presenting.");return}W=T,re=U,t.width=Math.floor(T*ce),t.height=Math.floor(U*ce),z===!0&&(t.style.width=T+"px",t.style.height=U+"px"),this.setViewport(0,0,T,U)},this.getDrawingBufferSize=function(T){return T.set(W*ce,re*ce).floor()},this.setDrawingBufferSize=function(T,U,z){W=T,re=U,ce=z,t.width=Math.floor(T*z),t.height=Math.floor(U*z),this.setViewport(0,0,T,U)},this.getCurrentViewport=function(T){return T.copy(B)},this.getViewport=function(T){return T.copy(Qe)},this.setViewport=function(T,U,z,k){T.isVector4?Qe.set(T.x,T.y,T.z,T.w):Qe.set(T,U,z,k),ne.viewport(B.copy(Qe).multiplyScalar(ce).round())},this.getScissor=function(T){return T.copy(rt)},this.setScissor=function(T,U,z,k){T.isVector4?rt.set(T.x,T.y,T.z,T.w):rt.set(T,U,z,k),ne.scissor(q.copy(rt).multiplyScalar(ce).round())},this.getScissorTest=function(){return ot},this.setScissorTest=function(T){ne.setScissorTest(ot=T)},this.setOpaqueSort=function(T){Ce=T},this.setTransparentSort=function(T){Ke=T},this.getClearColor=function(T){return T.copy(le.getClearColor())},this.setClearColor=function(){le.setClearColor(...arguments)},this.getClearAlpha=function(){return le.getClearAlpha()},this.setClearAlpha=function(){le.setClearAlpha(...arguments)},this.clear=function(T=!0,U=!0,z=!0){let k=0;if(T){let N=!1;if(M!==null){const ae=M.texture.format;N=p.has(ae)}if(N){const ae=M.texture.type,ge=g.has(ae),Ae=le.getClearColor(),we=le.getClearAlpha(),ze=Ae.r,He=Ae.g,Ue=Ae.b;ge?(x[0]=ze,x[1]=He,x[2]=Ue,x[3]=we,R.clearBufferuiv(R.COLOR,0,x)):(m[0]=ze,m[1]=He,m[2]=Ue,m[3]=we,R.clearBufferiv(R.COLOR,0,m))}else k|=R.COLOR_BUFFER_BIT}U&&(k|=R.DEPTH_BUFFER_BIT),z&&(k|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ie,!1),t.removeEventListener("webglcontextrestored",$,!1),t.removeEventListener("webglcontextcreationerror",Ee,!1),le.dispose(),pe.dispose(),Le.dispose(),fe.dispose(),C.dispose(),b.dispose(),K.dispose(),L.dispose(),xe.dispose(),V.dispose(),de.dispose(),de.removeEventListener("sessionstart",Dd),de.removeEventListener("sessionend",Ld),os.stop()};function ie(T){T.preventDefault(),za("WebGLRenderer: Context Lost."),P=!0}function $(){za("WebGLRenderer: Context Restored."),P=!1;const T=Te.autoReset,U=te.enabled,z=te.autoUpdate,k=te.needsUpdate,N=te.type;ue(),Te.autoReset=T,te.enabled=U,te.autoUpdate=z,te.needsUpdate=k,te.type=N}function Ee(T){We("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function qe(T){const U=T.target;U.removeEventListener("dispose",qe),xt(U)}function xt(T){lt(T),fe.remove(T)}function lt(T){const U=fe.get(T).programs;U!==void 0&&(U.forEach(function(z){V.releaseProgram(z)}),T.isShaderMaterial&&V.releaseShaderCache(T))}this.renderBufferDirect=function(T,U,z,k,N,ae){U===null&&(U=ft);const ge=N.isMesh&&N.matrixWorld.determinant()<0,Ae=Vx(T,U,z,k,N);ne.setMaterial(k,ge);let we=z.index,ze=1;if(k.wireframe===!0){if(we=H.getWireframeAttribute(z),we===void 0)return;ze=2}const He=z.drawRange,Ue=z.attributes.position;let et=He.start*ze,ht=(He.start+He.count)*ze;ae!==null&&(et=Math.max(et,ae.start*ze),ht=Math.min(ht,(ae.start+ae.count)*ze)),we!==null?(et=Math.max(et,0),ht=Math.min(ht,we.count)):Ue!=null&&(et=Math.max(et,0),ht=Math.min(ht,Ue.count));const Mt=ht-et;if(Mt<0||Mt===1/0)return;L.setup(N,k,Ae,z,we);let St,pt=Be;if(we!==null&&(St=O.get(we),pt=ve,pt.setIndex(St)),N.isMesh)k.wireframe===!0?(ne.setLineWidth(k.wireframeLinewidth*ee()),pt.setMode(R.LINES)):pt.setMode(R.TRIANGLES);else if(N.isLine){let Fe=k.linewidth;Fe===void 0&&(Fe=1),ne.setLineWidth(Fe*ee()),N.isLineSegments?pt.setMode(R.LINES):N.isLineLoop?pt.setMode(R.LINE_LOOP):pt.setMode(R.LINE_STRIP)}else N.isPoints?pt.setMode(R.POINTS):N.isSprite&&pt.setMode(R.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)Br("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),pt.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(se.get("WEBGL_multi_draw"))pt.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const Fe=N._multiDrawStarts,gt=N._multiDrawCounts,st=N._multiDrawCount,xn=we?O.get(we).bytesPerElement:1,Js=fe.get(k).currentProgram.getUniforms();for(let gn=0;gn<st;gn++)Js.setValue(R,"_gl_DrawID",gn),pt.render(Fe[gn]/xn,gt[gn])}else if(N.isInstancedMesh)pt.renderInstances(et,Mt,N.count);else if(z.isInstancedBufferGeometry){const Fe=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,gt=Math.min(z.instanceCount,Fe);pt.renderInstances(et,Mt,gt)}else pt.render(et,Mt)};function $n(T,U,z){T.transparent===!0&&T.side===ei&&T.forceSinglePass===!1?(T.side=nn,T.needsUpdate=!0,ho(T,U,z),T.side=Ei,T.needsUpdate=!0,ho(T,U,z),T.side=ei):ho(T,U,z)}this.compile=function(T,U,z=null){z===null&&(z=T),_=Le.get(z),_.init(U),A.push(_),z.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(_.pushLight(N),N.castShadow&&_.pushShadow(N))}),T!==z&&T.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(_.pushLight(N),N.castShadow&&_.pushShadow(N))}),_.setupLights();const k=new Set;return T.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const ae=N.material;if(ae)if(Array.isArray(ae))for(let ge=0;ge<ae.length;ge++){const Ae=ae[ge];$n(Ae,z,N),k.add(Ae)}else $n(ae,z,N),k.add(ae)}),_=A.pop(),k},this.compileAsync=function(T,U,z=null){const k=this.compile(T,U,z);return new Promise(N=>{function ae(){if(k.forEach(function(ge){fe.get(ge).currentProgram.isReady()&&k.delete(ge)}),k.size===0){N(T);return}setTimeout(ae,10)}se.get("KHR_parallel_shader_compile")!==null?ae():setTimeout(ae,10)})};let Fn=null;function kx(T){Fn&&Fn(T)}function Dd(){os.stop()}function Ld(){os.start()}const os=new _x;os.setAnimationLoop(kx),typeof self<"u"&&os.setContext(self),this.setAnimationLoop=function(T){Fn=T,de.setAnimationLoop(T),T===null?os.stop():os.start()},de.addEventListener("sessionstart",Dd),de.addEventListener("sessionend",Ld),this.render=function(T,U){if(U!==void 0&&U.isCamera!==!0){We("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),de.enabled===!0&&de.isPresenting===!0&&(de.cameraAutoUpdate===!0&&de.updateCamera(U),U=de.getCamera()),T.isScene===!0&&T.onBeforeRender(w,T,U,M),_=Le.get(T,A.length),_.init(U),A.push(_),Ne.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Z.setFromProjectionMatrix(Ne,bn,U.reversedDepth),Me=this.localClippingEnabled,j=Re.init(this.clippingPlanes,Me),v=pe.get(T,y.length),v.init(),y.push(v),de.enabled===!0&&de.isPresenting===!0){const ae=w.xr.getDepthSensingMesh();ae!==null&&oh(ae,U,-1/0,w.sortObjects)}oh(T,U,0,w.sortObjects),v.finish(),w.sortObjects===!0&&v.sort(Ce,Ke),Ge=de.enabled===!1||de.isPresenting===!1||de.hasDepthSensing()===!1,Ge&&le.addToRenderList(v,T),this.info.render.frame++,j===!0&&Re.beginShadows();const z=_.state.shadowsArray;te.render(z,T,U),j===!0&&Re.endShadows(),this.info.autoReset===!0&&this.info.reset();const k=v.opaque,N=v.transmissive;if(_.setupLights(),U.isArrayCamera){const ae=U.cameras;if(N.length>0)for(let ge=0,Ae=ae.length;ge<Ae;ge++){const we=ae[ge];Nd(k,N,T,we)}Ge&&le.render(T);for(let ge=0,Ae=ae.length;ge<Ae;ge++){const we=ae[ge];Ud(v,T,we,we.viewport)}}else N.length>0&&Nd(k,N,T,U),Ge&&le.render(T),Ud(v,T,U);M!==null&&S===0&&(be.updateMultisampleRenderTarget(M),be.updateRenderTargetMipmap(M)),T.isScene===!0&&T.onAfterRender(w,T,U),L.resetDefaultState(),D=-1,F=null,A.pop(),A.length>0?(_=A[A.length-1],j===!0&&Re.setGlobalState(w.clippingPlanes,_.state.camera)):_=null,y.pop(),y.length>0?v=y[y.length-1]:v=null};function oh(T,U,z,k){if(T.visible===!1)return;if(T.layers.test(U.layers)){if(T.isGroup)z=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(U);else if(T.isLight)_.pushLight(T),T.castShadow&&_.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Z.intersectsSprite(T)){k&&Je.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Ne);const ge=K.update(T),Ae=T.material;Ae.visible&&v.push(T,ge,Ae,z,Je.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Z.intersectsObject(T))){const ge=K.update(T),Ae=T.material;if(k&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Je.copy(T.boundingSphere.center)):(ge.boundingSphere===null&&ge.computeBoundingSphere(),Je.copy(ge.boundingSphere.center)),Je.applyMatrix4(T.matrixWorld).applyMatrix4(Ne)),Array.isArray(Ae)){const we=ge.groups;for(let ze=0,He=we.length;ze<He;ze++){const Ue=we[ze],et=Ae[Ue.materialIndex];et&&et.visible&&v.push(T,ge,et,z,Je.z,Ue)}}else Ae.visible&&v.push(T,ge,Ae,z,Je.z,null)}}const ae=T.children;for(let ge=0,Ae=ae.length;ge<Ae;ge++)oh(ae[ge],U,z,k)}function Ud(T,U,z,k){const{opaque:N,transmissive:ae,transparent:ge}=T;_.setupLightsView(z),j===!0&&Re.setGlobalState(w.clippingPlanes,z),k&&ne.viewport(B.copy(k)),N.length>0&&lo(N,U,z),ae.length>0&&lo(ae,U,z),ge.length>0&&lo(ge,U,z),ne.buffers.depth.setTest(!0),ne.buffers.depth.setMask(!0),ne.buffers.color.setMask(!0),ne.setPolygonOffset(!1)}function Nd(T,U,z,k){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[k.id]===void 0&&(_.state.transmissionRenderTarget[k.id]=new oi(1,1,{generateMipmaps:!0,type:se.has("EXT_color_buffer_half_float")||se.has("EXT_color_buffer_float")?qs:Yn,minFilter:ii,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:tt.workingColorSpace}));const ae=_.state.transmissionRenderTarget[k.id],ge=k.viewport||B;ae.setSize(ge.z*w.transmissionResolutionScale,ge.w*w.transmissionResolutionScale);const Ae=w.getRenderTarget(),we=w.getActiveCubeFace(),ze=w.getActiveMipmapLevel();w.setRenderTarget(ae),w.getClearColor(Y),J=w.getClearAlpha(),J<1&&w.setClearColor(16777215,.5),w.clear(),Ge&&le.render(z);const He=w.toneMapping;w.toneMapping=wi;const Ue=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),_.setupLightsView(k),j===!0&&Re.setGlobalState(w.clippingPlanes,k),lo(T,z,k),be.updateMultisampleRenderTarget(ae),be.updateRenderTargetMipmap(ae),se.has("WEBGL_multisampled_render_to_texture")===!1){let et=!1;for(let ht=0,Mt=U.length;ht<Mt;ht++){const St=U[ht],{object:pt,geometry:Fe,material:gt,group:st}=St;if(gt.side===ei&&pt.layers.test(k.layers)){const xn=gt.side;gt.side=nn,gt.needsUpdate=!0,Fd(pt,z,k,Fe,gt,st),gt.side=xn,gt.needsUpdate=!0,et=!0}}et===!0&&(be.updateMultisampleRenderTarget(ae),be.updateRenderTargetMipmap(ae))}w.setRenderTarget(Ae,we,ze),w.setClearColor(Y,J),Ue!==void 0&&(k.viewport=Ue),w.toneMapping=He}function lo(T,U,z){const k=U.isScene===!0?U.overrideMaterial:null;for(let N=0,ae=T.length;N<ae;N++){const ge=T[N],{object:Ae,geometry:we,group:ze}=ge;let He=ge.material;He.allowOverride===!0&&k!==null&&(He=k),Ae.layers.test(z.layers)&&Fd(Ae,U,z,we,He,ze)}}function Fd(T,U,z,k,N,ae){T.onBeforeRender(w,U,z,k,N,ae),T.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),N.onBeforeRender(w,U,z,k,T,ae),N.transparent===!0&&N.side===ei&&N.forceSinglePass===!1?(N.side=nn,N.needsUpdate=!0,w.renderBufferDirect(z,U,k,N,T,ae),N.side=Ei,N.needsUpdate=!0,w.renderBufferDirect(z,U,k,N,T,ae),N.side=ei):w.renderBufferDirect(z,U,k,N,T,ae),T.onAfterRender(w,U,z,k,N,ae)}function ho(T,U,z){U.isScene!==!0&&(U=ft);const k=fe.get(T),N=_.state.lights,ae=_.state.shadowsArray,ge=N.state.version,Ae=V.getParameters(T,N.state,ae,U,z),we=V.getProgramCacheKey(Ae);let ze=k.programs;k.environment=T.isMeshStandardMaterial?U.environment:null,k.fog=U.fog,k.envMap=(T.isMeshStandardMaterial?b:C).get(T.envMap||k.environment),k.envMapRotation=k.environment!==null&&T.envMap===null?U.environmentRotation:T.envMapRotation,ze===void 0&&(T.addEventListener("dispose",qe),ze=new Map,k.programs=ze);let He=ze.get(we);if(He!==void 0){if(k.currentProgram===He&&k.lightsStateVersion===ge)return Bd(T,Ae),He}else Ae.uniforms=V.getUniforms(T),T.onBeforeCompile(Ae,w),He=V.acquireProgram(Ae,we),ze.set(we,He),k.uniforms=Ae.uniforms;const Ue=k.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ue.clippingPlanes=Re.uniform),Bd(T,Ae),k.needsLights=Hx(T),k.lightsStateVersion=ge,k.needsLights&&(Ue.ambientLightColor.value=N.state.ambient,Ue.lightProbe.value=N.state.probe,Ue.directionalLights.value=N.state.directional,Ue.directionalLightShadows.value=N.state.directionalShadow,Ue.spotLights.value=N.state.spot,Ue.spotLightShadows.value=N.state.spotShadow,Ue.rectAreaLights.value=N.state.rectArea,Ue.ltc_1.value=N.state.rectAreaLTC1,Ue.ltc_2.value=N.state.rectAreaLTC2,Ue.pointLights.value=N.state.point,Ue.pointLightShadows.value=N.state.pointShadow,Ue.hemisphereLights.value=N.state.hemi,Ue.directionalShadowMap.value=N.state.directionalShadowMap,Ue.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Ue.spotShadowMap.value=N.state.spotShadowMap,Ue.spotLightMatrix.value=N.state.spotLightMatrix,Ue.spotLightMap.value=N.state.spotLightMap,Ue.pointShadowMap.value=N.state.pointShadowMap,Ue.pointShadowMatrix.value=N.state.pointShadowMatrix),k.currentProgram=He,k.uniformsList=null,He}function Od(T){if(T.uniformsList===null){const U=T.currentProgram.getUniforms();T.uniformsList=hc.seqWithValue(U.seq,T.uniforms)}return T.uniformsList}function Bd(T,U){const z=fe.get(T);z.outputColorSpace=U.outputColorSpace,z.batching=U.batching,z.batchingColor=U.batchingColor,z.instancing=U.instancing,z.instancingColor=U.instancingColor,z.instancingMorph=U.instancingMorph,z.skinning=U.skinning,z.morphTargets=U.morphTargets,z.morphNormals=U.morphNormals,z.morphColors=U.morphColors,z.morphTargetsCount=U.morphTargetsCount,z.numClippingPlanes=U.numClippingPlanes,z.numIntersection=U.numClipIntersection,z.vertexAlphas=U.vertexAlphas,z.vertexTangents=U.vertexTangents,z.toneMapping=U.toneMapping}function Vx(T,U,z,k,N){U.isScene!==!0&&(U=ft),be.resetTextureUnits();const ae=U.fog,ge=k.isMeshStandardMaterial?U.environment:null,Ae=M===null?w.outputColorSpace:M.isXRRenderTarget===!0?M.texture.colorSpace:ks,we=(k.isMeshStandardMaterial?b:C).get(k.envMap||ge),ze=k.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,He=!!z.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Ue=!!z.morphAttributes.position,et=!!z.morphAttributes.normal,ht=!!z.morphAttributes.color;let Mt=wi;k.toneMapped&&(M===null||M.isXRRenderTarget===!0)&&(Mt=w.toneMapping);const St=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,pt=St!==void 0?St.length:0,Fe=fe.get(k),gt=_.state.lights;if(j===!0&&(Me===!0||T!==F)){const $t=T===F&&k.id===D;Re.setState(k,T,$t)}let st=!1;k.version===Fe.__version?(Fe.needsLights&&Fe.lightsStateVersion!==gt.state.version||Fe.outputColorSpace!==Ae||N.isBatchedMesh&&Fe.batching===!1||!N.isBatchedMesh&&Fe.batching===!0||N.isBatchedMesh&&Fe.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Fe.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Fe.instancing===!1||!N.isInstancedMesh&&Fe.instancing===!0||N.isSkinnedMesh&&Fe.skinning===!1||!N.isSkinnedMesh&&Fe.skinning===!0||N.isInstancedMesh&&Fe.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Fe.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Fe.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Fe.instancingMorph===!1&&N.morphTexture!==null||Fe.envMap!==we||k.fog===!0&&Fe.fog!==ae||Fe.numClippingPlanes!==void 0&&(Fe.numClippingPlanes!==Re.numPlanes||Fe.numIntersection!==Re.numIntersection)||Fe.vertexAlphas!==ze||Fe.vertexTangents!==He||Fe.morphTargets!==Ue||Fe.morphNormals!==et||Fe.morphColors!==ht||Fe.toneMapping!==Mt||Fe.morphTargetsCount!==pt)&&(st=!0):(st=!0,Fe.__version=k.version);let xn=Fe.currentProgram;st===!0&&(xn=ho(k,U,N));let Js=!1,gn=!1,Zr=!1;const _t=xn.getUniforms(),rn=Fe.uniforms;if(ne.useProgram(xn.program)&&(Js=!0,gn=!0,Zr=!0),k.id!==D&&(D=k.id,gn=!0),Js||F!==T){ne.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),_t.setValue(R,"projectionMatrix",T.projectionMatrix),_t.setValue(R,"viewMatrix",T.matrixWorldInverse);const an=_t.map.cameraPosition;an!==void 0&&an.setValue(R,Pe.setFromMatrixPosition(T.matrixWorld)),oe.logarithmicDepthBuffer&&_t.setValue(R,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&_t.setValue(R,"isOrthographic",T.isOrthographicCamera===!0),F!==T&&(F=T,gn=!0,Zr=!0)}if(N.isSkinnedMesh){_t.setOptional(R,N,"bindMatrix"),_t.setOptional(R,N,"bindMatrixInverse");const $t=N.skeleton;$t&&($t.boneTexture===null&&$t.computeBoneTexture(),_t.setValue(R,"boneTexture",$t.boneTexture,be))}N.isBatchedMesh&&(_t.setOptional(R,N,"batchingTexture"),_t.setValue(R,"batchingTexture",N._matricesTexture,be),_t.setOptional(R,N,"batchingIdTexture"),_t.setValue(R,"batchingIdTexture",N._indirectTexture,be),_t.setOptional(R,N,"batchingColorTexture"),N._colorsTexture!==null&&_t.setValue(R,"batchingColorTexture",N._colorsTexture,be));const En=z.morphAttributes;if((En.position!==void 0||En.normal!==void 0||En.color!==void 0)&&Ve.update(N,z,xn),(gn||Fe.receiveShadow!==N.receiveShadow)&&(Fe.receiveShadow=N.receiveShadow,_t.setValue(R,"receiveShadow",N.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(rn.envMap.value=we,rn.flipEnvMap.value=we.isCubeTexture&&we.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&U.environment!==null&&(rn.envMapIntensity.value=U.environmentIntensity),rn.dfgLUT!==void 0&&(rn.dfgLUT.value=CT()),gn&&(_t.setValue(R,"toneMappingExposure",w.toneMappingExposure),Fe.needsLights&&Gx(rn,Zr),ae&&k.fog===!0&&Ie.refreshFogUniforms(rn,ae),Ie.refreshMaterialUniforms(rn,k,ce,re,_.state.transmissionRenderTarget[T.id]),hc.upload(R,Od(Fe),rn,be)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(hc.upload(R,Od(Fe),rn,be),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&_t.setValue(R,"center",N.center),_t.setValue(R,"modelViewMatrix",N.modelViewMatrix),_t.setValue(R,"normalMatrix",N.normalMatrix),_t.setValue(R,"modelMatrix",N.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const $t=k.uniformsGroups;for(let an=0,ch=$t.length;an<ch;an++){const cs=$t[an];xe.update(cs,xn),xe.bind(cs,xn)}}return xn}function Gx(T,U){T.ambientLightColor.needsUpdate=U,T.lightProbe.needsUpdate=U,T.directionalLights.needsUpdate=U,T.directionalLightShadows.needsUpdate=U,T.pointLights.needsUpdate=U,T.pointLightShadows.needsUpdate=U,T.spotLights.needsUpdate=U,T.spotLightShadows.needsUpdate=U,T.rectAreaLights.needsUpdate=U,T.hemisphereLights.needsUpdate=U}function Hx(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(T,U,z){const k=fe.get(T);k.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),fe.get(T.texture).__webglTexture=U,fe.get(T.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:z,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,U){const z=fe.get(T);z.__webglFramebuffer=U,z.__useDefaultFramebuffer=U===void 0};const Wx=R.createFramebuffer();this.setRenderTarget=function(T,U=0,z=0){M=T,I=U,S=z;let k=!0,N=null,ae=!1,ge=!1;if(T){const we=fe.get(T);if(we.__useDefaultFramebuffer!==void 0)ne.bindFramebuffer(R.FRAMEBUFFER,null),k=!1;else if(we.__webglFramebuffer===void 0)be.setupRenderTarget(T);else if(we.__hasExternalTextures)be.rebindTextures(T,fe.get(T.texture).__webglTexture,fe.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Ue=T.depthTexture;if(we.__boundDepthTexture!==Ue){if(Ue!==null&&fe.has(Ue)&&(T.width!==Ue.image.width||T.height!==Ue.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");be.setupDepthRenderbuffer(T)}}const ze=T.texture;(ze.isData3DTexture||ze.isDataArrayTexture||ze.isCompressedArrayTexture)&&(ge=!0);const He=fe.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(He[U])?N=He[U][z]:N=He[U],ae=!0):T.samples>0&&be.useMultisampledRTT(T)===!1?N=fe.get(T).__webglMultisampledFramebuffer:Array.isArray(He)?N=He[z]:N=He,B.copy(T.viewport),q.copy(T.scissor),G=T.scissorTest}else B.copy(Qe).multiplyScalar(ce).floor(),q.copy(rt).multiplyScalar(ce).floor(),G=ot;if(z!==0&&(N=Wx),ne.bindFramebuffer(R.FRAMEBUFFER,N)&&k&&ne.drawBuffers(T,N),ne.viewport(B),ne.scissor(q),ne.setScissorTest(G),ae){const we=fe.get(T.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+U,we.__webglTexture,z)}else if(ge){const we=U;for(let ze=0;ze<T.textures.length;ze++){const He=fe.get(T.textures[ze]);R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0+ze,He.__webglTexture,z,we)}}else if(T!==null&&z!==0){const we=fe.get(T.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,we.__webglTexture,z)}D=-1},this.readRenderTargetPixels=function(T,U,z,k,N,ae,ge,Ae=0){if(!(T&&T.isWebGLRenderTarget)){We("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=fe.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ge!==void 0&&(we=we[ge]),we){ne.bindFramebuffer(R.FRAMEBUFFER,we);try{const ze=T.textures[Ae],He=ze.format,Ue=ze.type;if(!oe.textureFormatReadable(He)){We("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!oe.textureTypeReadable(Ue)){We("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=T.width-k&&z>=0&&z<=T.height-N&&(T.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+Ae),R.readPixels(U,z,k,N,Xe.convert(He),Xe.convert(Ue),ae))}finally{const ze=M!==null?fe.get(M).__webglFramebuffer:null;ne.bindFramebuffer(R.FRAMEBUFFER,ze)}}},this.readRenderTargetPixelsAsync=async function(T,U,z,k,N,ae,ge,Ae=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let we=fe.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ge!==void 0&&(we=we[ge]),we)if(U>=0&&U<=T.width-k&&z>=0&&z<=T.height-N){ne.bindFramebuffer(R.FRAMEBUFFER,we);const ze=T.textures[Ae],He=ze.format,Ue=ze.type;if(!oe.textureFormatReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!oe.textureTypeReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const et=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,et),R.bufferData(R.PIXEL_PACK_BUFFER,ae.byteLength,R.STREAM_READ),T.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+Ae),R.readPixels(U,z,k,N,Xe.convert(He),Xe.convert(Ue),0);const ht=M!==null?fe.get(M).__webglFramebuffer:null;ne.bindFramebuffer(R.FRAMEBUFFER,ht);const Mt=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await Z_(R,Mt,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,et),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,ae),R.deleteBuffer(et),R.deleteSync(Mt),ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,U=null,z=0){const k=Math.pow(2,-z),N=Math.floor(T.image.width*k),ae=Math.floor(T.image.height*k),ge=U!==null?U.x:0,Ae=U!==null?U.y:0;be.setTexture2D(T,0),R.copyTexSubImage2D(R.TEXTURE_2D,z,0,0,ge,Ae,N,ae),ne.unbindTexture()};const Xx=R.createFramebuffer(),qx=R.createFramebuffer();this.copyTextureToTexture=function(T,U,z=null,k=null,N=0,ae=null){ae===null&&(N!==0?(Br("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ae=N,N=0):ae=0);let ge,Ae,we,ze,He,Ue,et,ht,Mt;const St=T.isCompressedTexture?T.mipmaps[ae]:T.image;if(z!==null)ge=z.max.x-z.min.x,Ae=z.max.y-z.min.y,we=z.isBox3?z.max.z-z.min.z:1,ze=z.min.x,He=z.min.y,Ue=z.isBox3?z.min.z:0;else{const En=Math.pow(2,-N);ge=Math.floor(St.width*En),Ae=Math.floor(St.height*En),T.isDataArrayTexture?we=St.depth:T.isData3DTexture?we=Math.floor(St.depth*En):we=1,ze=0,He=0,Ue=0}k!==null?(et=k.x,ht=k.y,Mt=k.z):(et=0,ht=0,Mt=0);const pt=Xe.convert(U.format),Fe=Xe.convert(U.type);let gt;U.isData3DTexture?(be.setTexture3D(U,0),gt=R.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(be.setTexture2DArray(U,0),gt=R.TEXTURE_2D_ARRAY):(be.setTexture2D(U,0),gt=R.TEXTURE_2D),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,U.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,U.unpackAlignment);const st=R.getParameter(R.UNPACK_ROW_LENGTH),xn=R.getParameter(R.UNPACK_IMAGE_HEIGHT),Js=R.getParameter(R.UNPACK_SKIP_PIXELS),gn=R.getParameter(R.UNPACK_SKIP_ROWS),Zr=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,St.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,St.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,ze),R.pixelStorei(R.UNPACK_SKIP_ROWS,He),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Ue);const _t=T.isDataArrayTexture||T.isData3DTexture,rn=U.isDataArrayTexture||U.isData3DTexture;if(T.isDepthTexture){const En=fe.get(T),$t=fe.get(U),an=fe.get(En.__renderTarget),ch=fe.get($t.__renderTarget);ne.bindFramebuffer(R.READ_FRAMEBUFFER,an.__webglFramebuffer),ne.bindFramebuffer(R.DRAW_FRAMEBUFFER,ch.__webglFramebuffer);for(let cs=0;cs<we;cs++)_t&&(R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,fe.get(T).__webglTexture,N,Ue+cs),R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,fe.get(U).__webglTexture,ae,Mt+cs)),R.blitFramebuffer(ze,He,ge,Ae,et,ht,ge,Ae,R.DEPTH_BUFFER_BIT,R.NEAREST);ne.bindFramebuffer(R.READ_FRAMEBUFFER,null),ne.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else if(N!==0||T.isRenderTargetTexture||fe.has(T)){const En=fe.get(T),$t=fe.get(U);ne.bindFramebuffer(R.READ_FRAMEBUFFER,Xx),ne.bindFramebuffer(R.DRAW_FRAMEBUFFER,qx);for(let an=0;an<we;an++)_t?R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,En.__webglTexture,N,Ue+an):R.framebufferTexture2D(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,En.__webglTexture,N),rn?R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,$t.__webglTexture,ae,Mt+an):R.framebufferTexture2D(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,$t.__webglTexture,ae),N!==0?R.blitFramebuffer(ze,He,ge,Ae,et,ht,ge,Ae,R.COLOR_BUFFER_BIT,R.NEAREST):rn?R.copyTexSubImage3D(gt,ae,et,ht,Mt+an,ze,He,ge,Ae):R.copyTexSubImage2D(gt,ae,et,ht,ze,He,ge,Ae);ne.bindFramebuffer(R.READ_FRAMEBUFFER,null),ne.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else rn?T.isDataTexture||T.isData3DTexture?R.texSubImage3D(gt,ae,et,ht,Mt,ge,Ae,we,pt,Fe,St.data):U.isCompressedArrayTexture?R.compressedTexSubImage3D(gt,ae,et,ht,Mt,ge,Ae,we,pt,St.data):R.texSubImage3D(gt,ae,et,ht,Mt,ge,Ae,we,pt,Fe,St):T.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,ae,et,ht,ge,Ae,pt,Fe,St.data):T.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,ae,et,ht,St.width,St.height,pt,St.data):R.texSubImage2D(R.TEXTURE_2D,ae,et,ht,ge,Ae,pt,Fe,St);R.pixelStorei(R.UNPACK_ROW_LENGTH,st),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,xn),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Js),R.pixelStorei(R.UNPACK_SKIP_ROWS,gn),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Zr),ae===0&&U.generateMipmaps&&R.generateMipmap(gt),ne.unbindTexture()},this.initRenderTarget=function(T){fe.get(T).__webglFramebuffer===void 0&&be.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?be.setTextureCube(T,0):T.isData3DTexture?be.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?be.setTexture2DArray(T,0):be.setTexture2D(T,0),ne.unbindTexture()},this.resetState=function(){I=0,S=0,M=null,ne.reset(),L.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return bn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=tt._getDrawingBufferColorSpace(e),t.unpackColorSpace=tt._getUnpackColorSpace()}}const RT=Object.freeze(Object.defineProperty({__proto__:null,ACESFilmicToneMapping:$m,AddEquation:Wi,AddOperation:Xm,AdditiveAnimationBlendMode:Yu,AdditiveBlending:cu,AgXToneMapping:Ec,AlphaFormat:Xu,AlwaysCompare:u0,AlwaysDepth:yc,AlwaysStencilFunc:du,AmbientLight:sx,AnimationAction:px,AnimationClip:Xa,AnimationLoader:Oy,AnimationMixer:db,AnimationObjectGroup:hb,AnimationUtils:Ly,ArcCurve:P0,ArrayCamera:hx,ArrowHelper:Ob,AttachedBindMode:uu,Audio:dx,AudioAnalyser:eb,AudioContext:yd,AudioListener:Jy,AudioLoader:Zy,AxesHelper:Bb,BackSide:nn,BasicDepthPacking:n0,BasicShadowMap:c_,BatchedMesh:T0,Bone:nd,BooleanKeyframeTrack:Zs,Box2:Mb,Box3:Rt,Box3Helper:Nb,BoxGeometry:Ys,BoxHelper:Ub,BufferAttribute:dt,BufferGeometry:Ye,BufferGeometryLoader:lx,ByteType:Vu,Cache:si,Camera:Ll,CameraHelper:Lb,CanvasTexture:ny,CapsuleGeometry:kl,CatmullRomCurve3:I0,CineonToneMapping:Zm,CircleGeometry:Vl,ClampToEdgeWrapping:dn,Clock:ux,Color:_e,ColorKeyframeTrack:gd,ColorManagement:tt,CompressedArrayTexture:ey,CompressedCubeTexture:ty,CompressedTexture:zl,CompressedTextureLoader:By,ConeGeometry:io,ConstantAlphaFactor:Gm,ConstantColorFactor:km,Controls:gx,CubeCamera:_0,CubeReflectionMapping:Ai,CubeRefractionMapping:Qi,CubeTexture:to,CubeTextureLoader:zy,CubeUVReflectionMapping:Wr,CubicBezierCurve:od,CubicBezierCurve3:D0,CubicInterpolant:J0,CullFaceBack:ou,CullFaceFront:Tm,CullFaceFrontBack:o_,CullFaceNone:wm,Curve:Zn,CurvePath:U0,CustomBlending:Em,CustomToneMapping:Km,CylinderGeometry:no,Cylindrical:bb,Data3DTexture:Il,DataArrayTexture:Pl,DataTexture:Wn,DataTextureLoader:ky,DataUtils:Tv,DecrementStencilOp:M_,DecrementWrapStencilOp:w_,DefaultLoadingManager:Ks,DepthFormat:Nr,DepthStencilFormat:Fr,DepthTexture:sd,DetachedBindMode:jm,DirectionalLight:ix,DirectionalLightHelper:Db,DiscreteInterpolant:j0,DodecahedronGeometry:Gl,DoubleSide:ei,DstAlphaFactor:Nm,DstColorFactor:Om,DynamicCopyUsage:z_,DynamicDrawUsage:L_,DynamicReadUsage:F_,EdgesGeometry:R0,EllipseCurve:Hl,EqualCompare:o0,EqualDepth:Mc,EqualStencilFunc:C_,EquirectangularReflectionMapping:Pa,EquirectangularRefractionMapping:Ia,Euler:wn,EventDispatcher:ci,ExternalTexture:rd,ExtrudeGeometry:Wl,FileLoader:Ri,Float16BufferAttribute:Dv,Float32BufferAttribute:Se,FloatType:fn,Fog:Nl,FogExp2:Ul,FramebufferTexture:Qv,FrontSide:Ei,Frustum:Xr,FrustumArray:Bl,GLBufferAttribute:gb,GLSL1:V_,GLSL3:fu,GreaterCompare:c0,GreaterDepth:wc,GreaterEqualCompare:h0,GreaterEqualDepth:Sc,GreaterEqualStencilFunc:D_,GreaterStencilFunc:P_,GridHelper:Pb,Group:Tr,HalfFloatType:qs,HemisphereLight:ex,HemisphereLightHelper:Rb,IcosahedronGeometry:Xl,ImageBitmapLoader:Yy,ImageLoader:qa,ImageUtils:m0,IncrementStencilOp:b_,IncrementWrapStencilOp:S_,InstancedBufferAttribute:Vr,InstancedBufferGeometry:cx,InstancedInterleavedBuffer:xb,InstancedMesh:w0,Int16BufferAttribute:Pv,Int32BufferAttribute:Iv,Int8BufferAttribute:Av,IntType:Ml,InterleavedBuffer:Fl,InterleavedBufferAttribute:Vs,Interpolant:ao,InterpolateDiscrete:Ua,InterpolateLinear:tl,InterpolateSmooth:cc,InterpolationSamplingMode:W_,InterpolationSamplingType:H_,InvertStencilOp:T_,KeepStencilOp:ws,KeyframeTrack:Nn,LOD:M0,LatheGeometry:ql,Layers:Dl,LessCompare:a0,LessDepth:bc,LessEqualCompare:Zu,LessEqualDepth:zs,LessEqualStencilFunc:R_,LessStencilFunc:A_,Light:as,LightProbe:ox,Line:ts,Line3:mx,LineBasicMaterial:sn,LineCurve:cd,LineCurve3:L0,LineDashedMaterial:Z0,LineLoop:E0,LineSegments:li,LinearFilter:At,LinearInterpolant:xd,LinearMipMapLinearFilter:d_,LinearMipMapNearestFilter:u_,LinearMipmapLinearFilter:ii,LinearMipmapNearestFilter:ga,LinearSRGBColorSpace:ks,LinearToneMapping:qm,LinearTransfer:Fa,Loader:mn,LoaderUtils:_u,LoadingManager:_d,LoopOnce:Qm,LoopPingPong:t0,LoopRepeat:e0,MOUSE:Ds,Material:Zt,MaterialLoader:Ql,MathUtils:p0,Matrix2:wd,Matrix3:Ze,Matrix4:De,MaxEquation:Pm,Mesh:It,MeshBasicMaterial:Ui,MeshDepthMaterial:fd,MeshDistanceMaterial:pd,MeshLambertMaterial:q0,MeshMatcapMaterial:Y0,MeshNormalMaterial:X0,MeshPhongMaterial:H0,MeshPhysicalMaterial:G0,MeshStandardMaterial:dd,MeshToonMaterial:W0,MinEquation:Rm,MirroredRepeatWrapping:La,MixOperation:Wm,MultiplyBlending:hu,MultiplyOperation:Qa,NearestFilter:kt,NearestMipMapLinearFilter:h_,NearestMipMapNearestFilter:l_,NearestMipmapLinearFilter:Sr,NearestMipmapNearestFilter:ku,NeutralToneMapping:Jm,NeverCompare:r0,NeverDepth:vc,NeverStencilFunc:E_,NoBlending:ai,NoColorSpace:bi,NoToneMapping:wi,NormalAnimationBlendMode:Rl,NormalBlending:Ls,NotEqualCompare:l0,NotEqualDepth:Tc,NotEqualStencilFunc:I_,NumberKeyframeTrack:Ha,Object3D:nt,ObjectLoader:Xy,ObjectSpaceNormalMap:s0,OctahedronGeometry:so,OneFactor:Dm,OneMinusConstantAlphaFactor:Hm,OneMinusConstantColorFactor:Vm,OneMinusDstAlphaFactor:Fm,OneMinusDstColorFactor:Bm,OneMinusSrcAlphaFactor:_c,OneMinusSrcColorFactor:Um,OrthographicCamera:co,PCFShadowMap:zu,PCFSoftShadowMap:xa,PMREMGenerator:Mu,Path:rl,PerspectiveCamera:Ot,Plane:yi,PlaneGeometry:qr,PlaneHelper:Fb,PointLight:nx,PointLightHelper:Ab,Points:A0,PointsMaterial:id,PolarGridHelper:Ib,PolyhedronGeometry:rs,PositionalAudio:Qy,PropertyBinding:it,PropertyMixer:fx,QuadraticBezierCurve:ld,QuadraticBezierCurve3:hd,Quaternion:Yt,QuaternionKeyframeTrack:oo,QuaternionLinearInterpolant:Q0,RED_GREEN_RGTC2_Format:Qc,RED_RGTC1_Format:Jc,REVISION:yl,RGBADepthPacking:i0,RGBAFormat:tn,RGBAIntegerFormat:Cl,RGBA_ASTC_10x10_Format:Xc,RGBA_ASTC_10x5_Format:Gc,RGBA_ASTC_10x6_Format:Hc,RGBA_ASTC_10x8_Format:Wc,RGBA_ASTC_12x10_Format:qc,RGBA_ASTC_12x12_Format:Yc,RGBA_ASTC_4x4_Format:Uc,RGBA_ASTC_5x4_Format:Nc,RGBA_ASTC_5x5_Format:Fc,RGBA_ASTC_6x5_Format:Oc,RGBA_ASTC_6x6_Format:Bc,RGBA_ASTC_8x5_Format:zc,RGBA_ASTC_8x6_Format:kc,RGBA_ASTC_8x8_Format:Vc,RGBA_BPTC_Format:Zc,RGBA_ETC2_EAC_Format:Lc,RGBA_PVRTC_2BPPV1_Format:Pc,RGBA_PVRTC_4BPPV1_Format:Rc,RGBA_S3TC_DXT1_Format:va,RGBA_S3TC_DXT3_Format:ya,RGBA_S3TC_DXT5_Format:ba,RGBDepthPacking:g_,RGBFormat:qu,RGBIntegerFormat:f_,RGB_BPTC_SIGNED_Format:$c,RGB_BPTC_UNSIGNED_Format:Kc,RGB_ETC1_Format:Ic,RGB_ETC2_Format:Dc,RGB_PVRTC_2BPPV1_Format:Cc,RGB_PVRTC_4BPPV1_Format:Ac,RGB_S3TC_DXT1_Format:_a,RGDepthPacking:__,RGFormat:El,RGIntegerFormat:Al,RawShaderMaterial:V0,Ray:Li,Raycaster:_b,RectAreaLight:rx,RedFormat:Tl,RedIntegerFormat:eo,ReinhardToneMapping:Ym,RenderTarget:Ku,RenderTarget3D:fb,RepeatWrapping:Da,ReplaceStencilOp:y_,ReverseSubtractEquation:Cm,RingGeometry:Yl,SIGNED_RED_GREEN_RGTC2_Format:el,SIGNED_RED_RGTC1_Format:jc,SRGBColorSpace:hn,SRGBTransfer:ct,Scene:ed,ShaderChunk:Oe,ShaderLib:Pn,ShaderMaterial:Ln,ShadowMaterial:k0,Shape:Ns,ShapeGeometry:Zl,ShapePath:zb,ShapeUtils:Gn,ShortType:Gu,Skeleton:Ol,SkeletonHelper:Eb,SkinnedMesh:S0,Source:Xi,Sphere:Pt,SphereGeometry:ro,Spherical:yu,SphericalHarmonics3:ax,SplineCurve:ud,SpotLight:tx,SpotLightHelper:Tb,Sprite:b0,SpriteMaterial:td,SrcAlphaFactor:gc,SrcAlphaSaturateFactor:zm,SrcColorFactor:Lm,StaticCopyUsage:B_,StaticDrawUsage:Oa,StaticReadUsage:N_,StereoCamera:$y,StreamCopyUsage:k_,StreamDrawUsage:U_,StreamReadUsage:O_,StringKeyframeTrack:$s,SubtractEquation:Am,SubtractiveBlending:lu,TOUCH:As,TangentSpaceNormalMap:ss,TetrahedronGeometry:$l,Texture:Tt,TextureLoader:Vy,TextureUtils:Wb,Timer:vb,TimestampQuery:G_,TorusGeometry:Kl,TorusKnotGeometry:Jl,Triangle:un,TriangleFanDrawMode:x_,TriangleStripDrawMode:m_,TrianglesDrawMode:p_,TubeGeometry:jl,UVMapping:bl,Uint16BufferAttribute:Ju,Uint32BufferAttribute:ju,Uint8BufferAttribute:Cv,Uint8ClampedBufferAttribute:Rv,Uniform:Sd,UniformsGroup:mb,UniformsLib:he,UniformsUtils:Qu,UnsignedByteType:Yn,UnsignedInt101111Type:Wu,UnsignedInt248Type:Ur,UnsignedInt5999Type:Hu,UnsignedIntType:Ci,UnsignedShort4444Type:Sl,UnsignedShort5551Type:wl,UnsignedShortType:Lr,VSMShadowMap:Qn,Vector2:X,Vector3:E,Vector4:je,VectorKeyframeTrack:Wa,VideoFrameTexture:jv,VideoTexture:C0,WebGL3DRenderTarget:mv,WebGLArrayRenderTarget:pv,WebGLCoordinateSystem:bn,WebGLCubeRenderTarget:v0,WebGLRenderTarget:oi,WebGLRenderer:wx,WebGLUtils:Sx,WebGPUCoordinateSystem:Or,WebXRController:lc,WireframeGeometry:z0,WrapAroundEnding:Na,ZeroCurvatureEnding:Cs,ZeroFactor:Im,ZeroSlopeEnding:Rs,ZeroStencilOp:v_,createCanvasElement:f0,error:We,getConsoleFunction:Y_,log:za,setConsoleFunction:q_,warn:me,warnOnce:Br},Symbol.toStringTag,{value:"Module"}));function al(s){let e;const t=Zp(i=>{let r=!1;const a=s.subscribe(o=>{e=o,r&&i()});return r=!0,a});function n(){return Pr()?(t(),e):bm(s)}return"set"in s?{get current(){return n()},set current(i){s.set(i)}}:{get current(){return n()}}}const Ep=Symbol(),PT=s=>typeof s?.subscribe=="function",Tx=(s,e,t)=>{const n=s().map(a=>PT(a)?al(a):Ep),i=qn(()=>s().map((a,o)=>n[o]===Ep?a:n[o].current)),r=()=>{ye(i);let a;return is(()=>{a=e(ye(i))}),a};t?zt(r):Ir(r)},IT=(s,e)=>Tx(s,e,!1),DT=(s,e)=>Tx(s,e,!0);Object.assign(IT,{pre:DT});const Vn=(s,e)=>s?.[`is${e}`]===!0,LT=typeof window<"u",vi=(s,e)=>{const t=Bu(s,r=>r);let n;const i=t.subscribe(async r=>{n&&n();const a=await e(r);a&&(n=a)});ja(()=>{i(),n&&n()})},Bt=s=>{const e=Dr(s),t={set:n=>{t.current=n,e.set(n)},subscribe:e.subscribe,update:n=>{const i=n(t.current);t.current=i,e.set(i)},current:s};return t},UT=s=>({subscribe:s.subscribe,get current(){return s.current}}),Ex=(s,e)=>{if(e.includes(".")){const t=e.split("."),n=t.pop();for(let i=0;i<t.length;i+=1)s=s[t[i]];return{target:s,key:n}}else return{target:s,key:e}},NT=s=>{const{dom:e,canvas:t}=s,n=Bt({width:e.offsetWidth,height:e.offsetHeight});Sm(()=>{const r=new ResizeObserver(()=>{const{offsetWidth:a,offsetHeight:o}=e;(n.current.width!==a||n.current.height!==o)&&n.set({width:a,height:o})});return r.observe(e),()=>{r.disconnect()}});const i={dom:e,canvas:t,size:UT(n)};return Un("threlte-dom-context",i),i},Td=()=>{const s=Tn("threlte-dom-context");if(!s)throw new Error("useDOM can only be used in a child component to <Canvas>.");return s};function FT(s){return{all:s=s||new Map,on:function(e,t){var n=s.get(e);n?n.push(t):s.set(e,[t])},off:function(e,t){var n=s.get(e);n&&(t?n.splice(n.indexOf(t)>>>0,1):s.set(e,[]))},emit:function(e,t){var n=s.get(e);n&&n.slice().map(function(i){i(t)}),(n=s.get("*"))&&n.slice().map(function(i){i(e,t)})}}}const OT=FT;class Hi{allVertices={};isolatedVertices={};connectedVertices={};sortedConnectedValues=[];needsSort=!1;emitter=OT();emit=this.emitter.emit.bind(this.emitter);on=this.emitter.on.bind(this.emitter);off=this.emitter.off.bind(this.emitter);get sortedVertices(){return this.mapNodes(e=>e)}moveToIsolated(e){const t=this.connectedVertices[e];t&&(this.isolatedVertices[e]=t,delete this.connectedVertices[e])}moveToConnected(e){const t=this.isolatedVertices[e];t&&(this.connectedVertices[e]=t,delete this.isolatedVertices[e])}getKey=e=>typeof e=="object"?e.key:e;add(e,t,n){if(this.allVertices[e]&&this.allVertices[e].value!==void 0)throw new Error(`A node with the key ${e.toString()} already exists`);let i=this.allVertices[e];i?i.value===void 0&&(i.value=t):(i={value:t,previous:new Set,next:new Set},this.allVertices[e]=i);const r=i.next.size>0||i.previous.size>0;if(!n?.after&&!n?.before&&!r){this.isolatedVertices[e]=i,this.emit("node:added",{key:e,type:"isolated",value:t});return}else this.connectedVertices[e]=i;if(n?.after){const a=Array.isArray(n.after)?n.after:[n.after];a.forEach(o=>{i.previous.add(this.getKey(o))}),a.forEach(o=>{const c=this.getKey(o),l=this.allVertices[c];l?(l.next.add(e),this.moveToConnected(c)):(this.allVertices[c]={value:void 0,previous:new Set,next:new Set([e])},this.connectedVertices[c]=this.allVertices[c])})}if(n?.before){const a=Array.isArray(n.before)?n.before:[n.before];a.forEach(o=>{i.next.add(this.getKey(o))}),a.forEach(o=>{const c=this.getKey(o),l=this.allVertices[c];l?(l.previous.add(e),this.moveToConnected(c)):(this.allVertices[c]={value:void 0,previous:new Set([e]),next:new Set},this.connectedVertices[c]=this.allVertices[c])})}this.emit("node:added",{key:e,type:"connected",value:t}),this.needsSort=!0}remove(e){const t=this.getKey(e);if(this.isolatedVertices[t]){delete this.isolatedVertices[t],delete this.allVertices[t],this.emit("node:removed",{key:t,type:"isolated"});return}const i=this.connectedVertices[t];i&&(i.next.forEach(r=>{const a=this.connectedVertices[r];a&&(a.previous.delete(t),a.previous.size===0&&a.next.size===0&&this.moveToIsolated(r))}),i.previous.forEach(r=>{const a=this.connectedVertices[r];a&&(a.next.delete(t),a.previous.size===0&&a.next.size===0&&this.moveToIsolated(r))}),delete this.connectedVertices[t],delete this.allVertices[t],this.emit("node:removed",{key:t,type:"connected"}),this.needsSort=!0)}mapNodes(e){this.needsSort&&this.sort();const t=[];return this.forEachNode((n,i)=>{t.push(e(n,i))}),t}forEachNode(e){this.needsSort&&this.sort();let t=0;for(;t<this.sortedConnectedValues.length;t++)e(this.sortedConnectedValues[t],t);Reflect.ownKeys(this.isolatedVertices).forEach(n=>{const i=this.isolatedVertices[n];i.value!==void 0&&e(i.value,t++)})}getValueByKey(e){return this.allVertices[e]?.value}getKeyByValue(e){return Reflect.ownKeys(this.connectedVertices).find(t=>this.connectedVertices[t].value===e)??Reflect.ownKeys(this.isolatedVertices).find(t=>this.isolatedVertices[t].value===e)}sort(){const e=new Map,t=[],n=[],i=Reflect.ownKeys(this.connectedVertices).filter(a=>this.connectedVertices[a].value!==void 0);for(i.forEach(a=>{e.set(a,0)}),i.forEach(a=>{this.connectedVertices[a].next.forEach(c=>{this.connectedVertices[c]&&e.set(c,(e.get(c)||0)+1)})}),e.forEach((a,o)=>{a===0&&t.push(o)});t.length>0;){const a=t.shift();n.push(a);const o=i.find(c=>c===a);o&&this.connectedVertices[o]?.next.forEach(c=>{const l=(e.get(c)||0)-1;e.set(c,l),l===0&&t.push(c)})}if(n.length!==i.length)throw new Error("The graph contains a cycle, and thus can not be sorted topologically.");const r=a=>a!==void 0;this.sortedConnectedValues=n.map(a=>this.connectedVertices[a].value).filter(r),this.needsSort=!1}clear(){this.allVertices={},this.isolatedVertices={},this.connectedVertices={},this.sortedConnectedValues=[],this.needsSort=!1}static isKey(e){return typeof e=="string"||typeof e=="symbol"}static isValue(e){return typeof e=="object"&&"key"in e}}class BT{key;stage;callback;runTask=!0;stop(){this.runTask=!1}start(){this.runTask=!0}constructor(e,t,n){this.stage=e,this.key=t,this.callback=n}run(e){this.runTask&&this.callback(e)}}class zT extends Hi{key;scheduler;runTask=!0;stop(){this.runTask=!1}start(){this.runTask=!0}get tasks(){return this.sortedVertices}callback=(e,t)=>t();constructor(e,t,n){super(),this.scheduler=e,this.key=t,this.start=this.start.bind(this),this.stop=this.stop.bind(this),n&&(this.callback=n.bind(this))}createTask(e,t,n){const i=new BT(this,e,t);return this.add(e,i,n),i}getTask(e){return this.getValueByKey(e)}removeTask=this.remove.bind(this);run(e){this.runTask&&this.callback(e,t=>{this.forEachNode(n=>{n.run(t??e)})})}runWithTiming(e){if(!this.runTask)return{};const t={};return this.callback(e,n=>{this.forEachNode(i=>{const r=performance.now();i.run(n??e);const a=performance.now()-r;t[i.key]=a})}),t}getSchedule(){return this.mapNodes(e=>e.key.toString())}}class kT extends Hi{lastTime=performance.now();clampDeltaTo=.1;get stages(){return this.sortedVertices}constructor(e){super(),e?.clampDeltaTo&&(this.clampDeltaTo=e.clampDeltaTo),this.run=this.run.bind(this)}createStage(e,t){const n=new zT(this,e,t?.callback);return this.add(e,n,{after:t?.after,before:t?.before}),n}getStage(e){return this.getValueByKey(e)}removeStage=this.remove.bind(this);run(e){const t=e-this.lastTime;this.forEachNode(n=>{n.run(Math.min(t/1e3,this.clampDeltaTo))}),this.lastTime=e}runWithTiming(e){const t=e-this.lastTime,n={},i=performance.now();return this.forEachNode(r=>{const a=performance.now(),o=r.runWithTiming(Math.min(t/1e3,this.clampDeltaTo)),c=performance.now()-a;n[r.key.toString()]={duration:c,tasks:o}}),{total:performance.now()-i,stages:n}}getSchedule(e={tasks:!0}){return{stages:this.mapNodes(t=>{if(t===void 0)throw new Error("Stage not found");return{key:t.key.toString(),tasks:e.tasks?t.getSchedule():void 0}})}}dispose(){this.clear()}}const VT=s=>{const e=new kT,t=e.createStage(Symbol("threlte-main-stage")),n={scheduler:e,frameInvalidated:!0,autoInvalidations:new Set,shouldAdvance:!1,advance:()=>{n.shouldAdvance=!0},autoRender:Bt(s.autoRender??!0),renderMode:Bt(s.renderMode??"on-demand"),invalidate(){n.frameInvalidated=!0},mainStage:t,shouldRender:()=>n.renderMode.current==="always"||n.renderMode.current==="on-demand"&&(n.frameInvalidated||n.autoInvalidations.size>0)||n.renderMode.current==="manual"&&n.shouldAdvance,renderStage:e.createStage(Symbol("threlte-render-stage"),{after:t,callback(i,r){n.shouldRender()&&r()}}),resetFrameInvalidation(){n.frameInvalidated=!1,n.shouldAdvance=!1}};return Ir(()=>{n.autoRender.set(s.autoRender??!0)}),Ir(()=>{n.renderMode.set(s.renderMode??"on-demand")}),ja(()=>{n.scheduler.dispose()}),Un("threlte-scheduler-context",n),n},nh=()=>{const s=Tn("threlte-scheduler-context");if(!s)throw new Error("useScheduler can only be used in a child component to <Canvas>.");return s},GT=()=>{const{size:s}=Td(),{invalidate:e}=nh(),t=new Ot(75,0,.1,1e3);t.position.z=5,t.lookAt(0,0,0);const n=Bt(t);vi(s,r=>{if(n.current===t){const a=n.current;a.aspect=r.width/r.height,a.updateProjectionMatrix(),e()}}),vi(n,r=>{r===void 0&&n.set(t)});const i={camera:n};return Un("threlte-camera-context",i),i},Ax=()=>{const s=Tn("threlte-camera-context");if(!s)throw new Error("useCamera can only be used in a child component to <Canvas>.");return s},HT=()=>{const s={removeObjectFromDisposal:e=>{s.disposableObjects.delete(e)},disposableObjectMounted:e=>{const t=s.disposableObjects.get(e);t?s.disposableObjects.set(e,t+1):s.disposableObjects.set(e,1)},disposableObjectUnmounted:e=>{const t=s.disposableObjects.get(e);t&&t>0&&(s.disposableObjects.set(e,t-1),t-1<=0&&(s.shouldDispose=!0))},disposableObjects:new Map,shouldDispose:!1,dispose:async(e=!1)=>{await Hg(),!(!s.shouldDispose&&!e)&&(s.disposableObjects.forEach((t,n)=>{(t===0||e)&&(n?.dispose?.(),s.disposableObjects.delete(n))}),s.shouldDispose=!1)}};return ja(()=>{s.dispose(!0)}),Un("threlte-disposal-context",s),s},Cx=()=>{const s=Tn("threlte-disposal-context");if(!s)throw new Error("useDisposal can only be used in a child component to <Canvas>.");return s},Rx=Symbol("threlte-parent-context"),Px=s=>{const e=Bt(s);return Un(Rx,e),e},Ix=()=>Tn(Rx),ol=Symbol("threlte-parent-object3d-context"),WT=s=>{const e=Ou(s);return Un(ol,e),e},XT=s=>{const e=Tn(ol),t=Dr(s),n=Bu([t,e],([i,r])=>i??r);return Un(ol,n),t},qT=()=>Tn(ol);function Dx(s,e,t){if(!LT)return{task:void 0,start:()=>{},stop:()=>{},started:Ou(!1)};let n,i,r;Hi.isKey(s)?(n=s,i=e,r=t):(n=Symbol("useTask"),i=s,r=e);const a=nh();let o=a.mainStage;if(r){if(r.stage)if(Hi.isValue(r.stage))o=r.stage;else{const d=a.scheduler.getStage(r.stage);if(!d)throw new Error(`No stage found with key ${r.stage.toString()}`);o=d}else if(r.after)if(Array.isArray(r.after))for(let d=0;d<r.after.length;d++){const f=r.after[d];if(Hi.isValue(f)){o=f.stage;break}}else Hi.isValue(r.after)&&(o=r.after.stage);else if(r.before)if(Array.isArray(r.before))for(let d=0;d<r.before.length;d++){const f=r.before[d];if(Hi.isValue(f)){o=f.stage;break}}else Hi.isValue(r.before)&&(o=r.before.stage)}const c=Dr(!1),l=o.createTask(n,i,r),h=()=>{c.set(!0),(r?.autoInvalidate??!0)&&a.autoInvalidations.add(i),l.start()},u=()=>{c.set(!1),(r?.autoInvalidate??!0)&&a.autoInvalidations.delete(i),l.stop()};return r?.autoStart??!0?h():u(),ja(()=>{u(),o.removeTask(n)}),{task:l,start:h,stop:u,started:{subscribe:c.subscribe}}}const YT=s=>{const e={scene:new ed};return Un("threlte-scene-context",e),e},Lx=()=>{const s=Tn("threlte-scene-context");if(!s)throw new Error("useScene can only be used in a child component to <Canvas>.");return s},ZT=s=>{const{dispose:e}=Cx(),{camera:t}=Ax(),{scene:n}=Lx(),{invalidate:i,renderStage:r,autoRender:a,scheduler:o,resetFrameInvalidation:c}=nh(),{size:l,canvas:h}=Td(),u=s.createRenderer?s.createRenderer(h):new wx({canvas:h,powerPreference:"high-performance",antialias:!0,alpha:!0}),d=r.createTask(Symbol("threlte-auto-render-task"),()=>{u.render(n,t.current)}),f={renderer:u,colorManagementEnabled:Bt(s.colorManagementEnabled??!0),colorSpace:Bt(s.colorSpace??"srgb"),dpr:Bt(s.dpr??window.devicePixelRatio),shadows:Bt(s.shadows??xa),toneMapping:Bt(s.toneMapping??Ec),autoRenderTask:d};Un("threlte-renderer-context",f),vi([f.colorManagementEnabled],([x])=>{tt.enabled=x}),vi([f.colorSpace],([x])=>{"outputColorSpace"in u&&(u.outputColorSpace=x)}),vi([f.dpr],([x])=>{"setPixelRatio"in u&&u.setPixelRatio(x)});const{start:p,stop:g}=Dx(()=>{!("xr"in u)||u.xr?.isPresenting||(u.setSize(l.current.width,l.current.height),i(),g())},{before:d,autoStart:!1,autoInvalidate:!1});return vi([l],()=>{p()}),vi([f.shadows],([x])=>{"shadowMap"in u&&(u.shadowMap.enabled=!!x,x&&x!==!0?u.shadowMap.type=x:x===!0&&(u.shadowMap.type=xa))}),vi([f.toneMapping],([x])=>{"toneMapping"in u&&(u.toneMapping=x)}),vi([a],([x])=>(x?f.autoRenderTask.start():f.autoRenderTask.stop(),()=>{f.autoRenderTask.stop()})),"setAnimationLoop"in f.renderer&&f.renderer.setAnimationLoop(m=>{e(),o.run(m),c()}),ja(()=>{if("dispose"in f.renderer){const x=f.renderer.dispose;x()}}),zt(()=>{f.colorManagementEnabled.set(s.colorManagementEnabled??!0)}),zt(()=>{f.colorSpace.set(s.colorSpace??"srgb")}),zt(()=>{f.toneMapping.set(s.toneMapping??Ec)}),zt(()=>{f.shadows.set(s.shadows??xa)}),zt(()=>{f.dpr.set(s.dpr??window.devicePixelRatio)}),f},$T=()=>{const s=Tn("threlte-renderer-context");if(!s)throw new Error("useRenderer can only be used in a child component to <Canvas>.");return s},KT=()=>{const s=Bt({});return Un("threlte-user-context",s),s},JT=()=>{const s=Tn("threlte-user-context");if(!s)throw new Error("useUserContext can only be used in a child component to <Canvas>.");return s},jT=s=>{const{scene:e}=YT();return{scene:e,...NT(s),...a_(),...Px(e),...WT(e),...HT(),...VT(s),...GT(),...ZT(s),...KT()}};function QT(s,e){ll(e,!0),jT(vl(e,["$$slots","$$events","$$legacy","children"]));var n=gl(),i=Rr(n);_l(i,()=>e.children),ji(s,n),hl()}var eE=xl('<div class="svelte-clyidt"><canvas class="svelte-clyidt"><!></canvas></div>');function tE(s,e){let t=vl(e,["$$slots","$$events","$$legacy","children"]),n=jn(void 0),i=jn(void 0);var r=eE(),a=pc(r),o=pc(a);{var c=l=>{QT(l,Mm({get dom(){return ye(i)},get canvas(){return ye(n)}},()=>t,{children:(h,u)=>{var d=gl(),f=Rr(d);_l(f,()=>e.children??Hn),ji(h,d)},$$slots:{default:!0}}))};jg(o,l=>{ye(n)&&ye(i)&&l(c)})}Zd(a,l=>kn(n,l),()=>ye(n)),Zd(r,l=>kn(i,l),()=>ye(i)),ji(s,r)}const ih=()=>{const s=nh(),e=$T(),t=Ax(),n=Lx(),i=Td();return{advance:s.advance,autoRender:s.autoRender,autoRenderTask:e.autoRenderTask,camera:t.camera,colorManagementEnabled:e.colorManagementEnabled,colorSpace:e.colorSpace,dpr:e.dpr,invalidate:s.invalidate,mainStage:s.mainStage,renderer:e.renderer,renderMode:s.renderMode,renderStage:s.renderStage,scheduler:s.scheduler,shadows:e.shadows,shouldRender:s.shouldRender,dom:i.dom,canvas:i.canvas,size:i.size,toneMapping:e.toneMapping,get scene(){return n.scene},set scene(a){n.scene=a}}},nE=s=>typeof s=="object"&&s!==null,iE=(s,e)=>{const{invalidate:t}=ih(),n=qn(s),i=qn(e),r=al(Ix()),a=al(qT()),o=Px(),c=XT();zt(()=>{o.set(ye(n)),Vn(ye(n),"Object3D")&&c.set(ye(n)),t()}),zt(()=>{t();const l=ye(n);if(ye(i)===void 0&&Vn(l,"Object3D"))return a.current?.add(l),()=>{t(),a.current?.remove(l)};if(ye(i)===void 0&&nE(r.current)){const h=r.current;if(Vn(l,"Material")){const u=h.material;return h.material=l,()=>{t(),h.material=u}}else if(Vn(l,"BufferGeometry")){const u=h.geometry;return h.geometry=l,()=>{t(),h.geometry=u}}}if(ye(i)===!1)return()=>{t()};if(typeof ye(i)=="function"){const h=ye(i)({ref:l,parent:r.current,parentObject3D:a.current});return()=>{t(),h?.()}}if(typeof ye(i)=="string"){const{target:h,key:u}=Ex(r.current,ye(i));if(u in h){const d=h[u];return h[u]=l,()=>{t(),h[u]=d}}else return h[u]=l,()=>{t(),delete h[u]}}if(Vn(ye(i),"Object3D")&&Vn(l,"Object3D"))return ye(i).add(l),()=>{t(),ye(i).remove(l)}})},jh=new Set,sE=(s,e,t)=>{const{invalidate:n,size:i,camera:r}=ih(),a=qn(s),o=al(i);zt(()=>{if(!t())return;const c=ye(a);return jh.add(c),r.set(c),n(),()=>{jh.delete(c),jh.size===0&&(r.set(void 0),n())}}),zt(()=>{if(e())return;const{width:c,height:l}=o.current;Vn(ye(a),"PerspectiveCamera")?ye(a).aspect=c/l:Vn(ye(a),"OrthographicCamera")&&(ye(a).left=c/-2,ye(a).right=c/2,ye(a).top=l/2,ye(a).bottom=l/-2),ye(a).updateProjectionMatrix(),ye(a).updateMatrixWorld(),n()})},wu=Symbol("threlte-disposable-object-context"),rE=s=>typeof s?.dispose=="function",aE=s=>{const e=Tn(wu),t=qn(()=>s()??e?.()??!0);Un(wu,()=>ye(t))},oE=s=>{const e=qn(s),{disposableObjectMounted:t,disposableObjectUnmounted:n,removeObjectFromDisposal:i}=Cx(),r=Tn(wu),a=qn(()=>r?.()??!0);Ir(()=>{if(ye(a))return t(ye(e)),()=>n(ye(e));i(ye(e))})},cE=s=>s!==null&&typeof s=="object"&&"addEventListener"in s&&"removeEventListener"in s,lE=(s,e,t)=>{const n=qn(s);for(const i of e){const r=qn(()=>t[i]);i.startsWith("on")&&zt(()=>{if(typeof ye(r)!="function"||!cE(ye(n)))return;const a=i.slice(2);return ye(n).addEventListener(a,ye(r)),()=>ye(n).removeEventListener(a,ye(r))})}};let Tu;const hE=s=>{Tu=s},uE=()=>{const s=Tu;return Tu=void 0,s},dE="threlte-plugin-context",fE=s=>{const e=Tn(dE);if(!e)return;const t=[],n=Object.values(e);if(n.length>0){const i=s();for(let r=0;r<n.length;r++){const a=n[r],o=a(i);o&&o.pluginProps&&t.push(...o.pluginProps)}}return{pluginsProps:t}},pE=new Set(["$$scope","$$slots","type","args","attach","instance"]),mE=new Set(["fov","aspect","near","far","left","right","top","bottom","zoom"]),xE=s=>typeof s=="string"||typeof s=="number"||typeof s=="boolean"||typeof s>"u"||s===null,Ap=(s,e,t)=>!Array.isArray(t)&&typeof t=="number"&&typeof s[e]=="object"&&s[e]!==null&&typeof s[e]?.setScalar=="function"&&!s[e]?.isColor?(n,i,r)=>{n[i].setScalar(r)}:typeof s[e]?.set=="function"&&typeof s[e]=="object"&&s[e]!==null?Array.isArray(t)?(n,i,r)=>{n[i].set(...r)}:(n,i,r)=>{n[i].set(r)}:(n,i,r)=>{n[i]=r},gE=()=>{const{invalidate:s}=ih(),e=new Map,t=new Map,n=(r,a,o,c)=>{if(xE(o)){const u=e.get(a);if(u&&u.instance===r&&u.value===o)return;e.set(a,{instance:r,value:o})}const{key:l,target:h}=Ex(r,a);if(o!=null){const u=t.get(a);if(u)u(h,l,o);else{const d=Ap(h,l,o);t.set(a,d),d(h,l,o)}}else Ap(h,l,o)(h,l,o);c||mE.has(l)&&(h.isPerspectiveCamera||h.isOrthographicCamera)&&h.updateProjectionMatrix()};return{updateProp:(r,a,o,c,l)=>{!pE.has(a)&&!c?.includes(a)&&n(r,a,o,l),s()}}},_E=s=>typeof s=="function"&&Function.prototype.toString.call(s).startsWith("class "),vE=(s,e)=>_E(s)?Array.isArray(e)?new s(...e):new s:s;function Qh(s,e){ll(e,!0);let t=la(e,"is",19,uE),n=la(e,"manual",3,!1),i=la(e,"makeDefault",3,!1),r=la(e,"ref",15),a=vl(e,["$$slots","$$events","$$legacy","is","args","attach","manual","makeDefault","dispose","ref","oncreate","children"]);const o=qn(()=>vE(t(),e.args));zt(()=>{r()!==ye(o)&&r(ye(o))});const c=fE(()=>({get ref(){return ye(o)},get args(){return e.args},get attach(){return e.attach},get manual(){return n()},get makeDefault(){return i()},get dispose(){return e.dispose},get props(){return a}})),l=Object.keys(a),{updateProp:h}=gE();l.forEach(f=>{const p=qn(()=>a[f]);zt(()=>{h(ye(o),f,ye(p),c?.pluginsProps,n())})}),iE(()=>ye(o),()=>e.attach),zt(()=>{(Vn(ye(o),"PerspectiveCamera")||Vn(ye(o),"OrthographicCamera"))&&sE(()=>ye(o),()=>n(),()=>i())}),aE(()=>e.dispose),zt(()=>{rE(ye(o))&&oE(()=>ye(o))}),lE(()=>ye(o),l,a),Ir(()=>{ye(o);let f;return is(()=>{f=e.oncreate?.(ye(o))}),f});var u=gl(),d=Rr(u);_l(d,()=>e.children??Hn,()=>({ref:ye(o)})),ji(s,u),hl()}const yE={},Gi=new Proxy(Qh,{get(s,e){if(typeof e!="string")return Qh;const t=yE[e]||RT[e];if(t===void 0)throw new Error(`No Three.js module found for ${e}. Did you forget to extend the catalogue?`);return hE(t),Qh}});function bE(s,e,t){const n=JT();if(!n)throw new Error("No user context store found, did you invoke this function outside of your main <Canvas> component?");return e?(n.update(i=>{if(s in i)return i;const r=typeof e=="function"?e():e;return i[s]=r,i}),n.current[s]):Bu(n,i=>i[s])}const Ss=s=>({subscribe:s.subscribe,get current(){return s.current}});let Ta=0;const Ed=Bt(!1),sh=Bt(!1),Ad=Bt(void 0),Cd=Bt(0),Rd=Bt(0),Ux=Bt([]),Pd=Bt(0),{onStart:ME,onLoad:SE,onError:wE}=Ks;Ks.onStart=(s,e,t)=>{ME?.(s,e,t),sh.set(!0),Ad.set(s),Cd.set(e),Rd.set(t);const n=(e-Ta)/(t-Ta);Pd.set(n),n===1&&Ed.set(!0)};Ks.onLoad=()=>{SE?.(),sh.set(!1)};Ks.onError=s=>{wE?.(s),Ux.update(e=>[...e,s])};Ks.onProgress=(s,e,t)=>{e===t&&(Ta=t),sh.set(!0),Ad.set(s),Cd.set(e),Rd.set(t);const n=(e-Ta)/(t-Ta)||1;Pd.set(n),n===1&&Ed.set(!0)};Ss(sh),Ss(Ad),Ss(Cd),Ss(Rd),Ss(Ux),Ss(Pd),Ss(Ed);new E;new E;new E;new Pt;new De;new Li;new E;new E;new De;new E;new E;new nt;new E;new E;new E;new X;const TE="Right",EE="Top",AE="Front",CE="Left",RE="Bottom",PE="Back";[TE,EE,AE,CE,RE,PE].map(s=>s.toLocaleLowerCase());new Rt;new E;he.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new X(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};Pn.line={uniforms:Qu.merge([he.common,he.fog,he.line]),vertexShader:`
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		void trimSegment( const in vec4 start, inout vec4 end ) {

			// trim end segment so it terminates between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
			float nearEstimate = - 0.5 * b / a;

			float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

			end.xyz = mix( start.xyz, end.xyz, alpha );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
				vUv = uv;

			#endif

			float aspect = resolution.x / resolution.y;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			#ifdef WORLD_UNITS

				worldStart = start.xyz;
				worldEnd = end.xyz;

			#else

				vUv = uv;

			#endif

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					trimSegment( start, end );

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					trimSegment( end, start );

				}

			}

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec3 ndcStart = clipStart.xyz / clipStart.w;
			vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

			// direction
			vec2 dir = ndcEnd.xy - ndcStart.xy;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			#ifdef WORLD_UNITS

				vec3 worldDir = normalize( end.xyz - start.xyz );
				vec3 tmpFwd = normalize( mix( start.xyz, end.xyz, 0.5 ) );
				vec3 worldUp = normalize( cross( worldDir, tmpFwd ) );
				vec3 worldFwd = cross( worldDir, worldUp );
				worldPos = position.y < 0.5 ? start: end;

				// height offset
				float hw = linewidth * 0.5;
				worldPos.xyz += position.x < 0.0 ? hw * worldUp : - hw * worldUp;

				// don't extend the line if we're rendering dashes because we
				// won't be rendering the endcaps
				#ifndef USE_DASH

					// cap extension
					worldPos.xyz += position.y < 0.5 ? - hw * worldDir : hw * worldDir;

					// add width to the box
					worldPos.xyz += worldFwd * hw;

					// endcaps
					if ( position.y > 1.0 || position.y < 0.0 ) {

						worldPos.xyz -= worldFwd * 2.0 * hw;

					}

				#endif

				// project the worldpos
				vec4 clip = projectionMatrix * worldPos;

				// shift the depth of the projected points so the line
				// segments overlap neatly
				vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
				clip.z = clipPose.z * clip.w;

			#else

				vec2 offset = vec2( dir.y, - dir.x );
				// undo aspect ratio adjustment
				dir.x /= aspect;
				offset.x /= aspect;

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				// endcaps
				if ( position.y < 0.0 ) {

					offset += - dir;

				} else if ( position.y > 1.0 ) {

					offset += dir;

				}

				// adjust for linewidth
				offset *= linewidth;

				// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
				offset /= resolution.y;

				// select end
				vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

				// back to clip space
				offset *= clip.w;

				clip.xy += offset;

			#endif

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

		}
		`,fragmentShader:`
		uniform vec3 diffuse;
		uniform float opacity;
		uniform float linewidth;

		#ifdef USE_DASH

			uniform float dashOffset;
			uniform float dashSize;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

			float mua;
			float mub;

			vec3 p13 = p1 - p3;
			vec3 p43 = p4 - p3;

			vec3 p21 = p2 - p1;

			float d1343 = dot( p13, p43 );
			float d4321 = dot( p43, p21 );
			float d1321 = dot( p13, p21 );
			float d4343 = dot( p43, p43 );
			float d2121 = dot( p21, p21 );

			float denom = d2121 * d4343 - d4321 * d4321;

			float numer = d1343 * d4321 - d1321 * d4343;

			mua = numer / denom;
			mua = clamp( mua, 0.0, 1.0 );
			mub = ( d1343 + d4321 * ( mua ) ) / d4343;
			mub = clamp( mub, 0.0, 1.0 );

			return vec2( mua, mub );

		}

		void main() {

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			float alpha = opacity;

			#ifdef WORLD_UNITS

				// Find the closest points on the view ray and the line segment
				vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
				vec3 lineDir = worldEnd - worldStart;
				vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

				vec3 p1 = worldStart + lineDir * params.x;
				vec3 p2 = rayEnd * params.y;
				vec3 delta = p1 - p2;
				float len = length( delta );
				float norm = len / linewidth;

				#ifndef USE_DASH

					#ifdef USE_ALPHA_TO_COVERAGE

						float dnorm = fwidth( norm );
						alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

					#else

						if ( norm > 0.5 ) {

							discard;

						}

					#endif

				#endif

			#else

				#ifdef USE_ALPHA_TO_COVERAGE

					// artifacts appear on some hardware if a derivative is taken within a conditional
					float a = vUv.x;
					float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
					float len2 = a * a + b * b;
					float dlen = fwidth( len2 );

					if ( abs( vUv.y ) > 1.0 ) {

						alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

					}

				#else

					if ( abs( vUv.y ) > 1.0 ) {

						float a = vUv.x;
						float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
						float len2 = a * a + b * b;

						if ( len2 > 1.0 ) discard;

					}

				#endif

			#endif

			vec4 diffuseColor = vec4( diffuse, alpha );

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, alpha );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		`};new je;new E;new E;new je;new je;new je;new E;new De;new mx;new E;new Rt;new Pt;new je;const Cp={type:"change"},Id={type:"start"},Nx={type:"end"},rc=new Li,Rp=new yi,IE=Math.cos(70*p0.DEG2RAD),Dt=new E,cn=2*Math.PI,ut={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},eu=1e-6;let DE=class extends gx{constructor(e,t=null){super(e,t),this.state=ut.NONE,this.target=new E,this.cursor=new E,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ds.ROTATE,MIDDLE:Ds.DOLLY,RIGHT:Ds.PAN},this.touches={ONE:As.ROTATE,TWO:As.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new E,this._lastQuaternion=new Yt,this._lastTargetPosition=new E,this._quat=new Yt().setFromUnitVectors(e.up,new E(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new yu,this._sphericalDelta=new yu,this._scale=1,this._panOffset=new E,this._rotateStart=new X,this._rotateEnd=new X,this._rotateDelta=new X,this._panStart=new X,this._panEnd=new X,this._panDelta=new X,this._dollyStart=new X,this._dollyEnd=new X,this._dollyDelta=new X,this._dollyDirection=new E,this._mouse=new X,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=UE.bind(this),this._onPointerDown=LE.bind(this),this._onPointerUp=NE.bind(this),this._onContextMenu=GE.bind(this),this._onMouseWheel=BE.bind(this),this._onKeyDown=zE.bind(this),this._onTouchStart=kE.bind(this),this._onTouchMove=VE.bind(this),this._onMouseDown=FE.bind(this),this._onMouseMove=OE.bind(this),this._interceptControlDown=HE.bind(this),this._interceptControlUp=WE.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Cp),this.update(),this.state=ut.NONE}update(e=null){const t=this.object.position;Dt.copy(t).sub(this.target),Dt.applyQuaternion(this._quat),this._spherical.setFromVector3(Dt),this.autoRotate&&this.state===ut.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(n)&&isFinite(i)&&(n<-Math.PI?n+=cn:n>Math.PI&&(n-=cn),i<-Math.PI?i+=cn:i>Math.PI&&(i-=cn),n<=i?this._spherical.theta=Math.max(n,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+i)/2?Math.max(n,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(Dt.setFromSpherical(this._spherical),Dt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Dt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=Dt.length();a=this._clampDistance(o*this._scale);const c=o-a;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){const o=new E(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;const l=new E(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(o),this.object.updateMatrixWorld(),a=Dt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(rc.origin.copy(this.object.position),rc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(rc.direction))<IE?this.object.lookAt(this.target):(Rp.setFromNormalAndCoplanarPoint(this.object.up,this.target),rc.intersectPlane(Rp,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>eu||8*(1-this._lastQuaternion.dot(this.object.quaternion))>eu||this._lastTargetPosition.distanceToSquared(this.target)>eu?(this.dispatchEvent(Cp),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?cn/60*this.autoRotateSpeed*e:cn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Dt.setFromMatrixColumn(t,0),Dt.multiplyScalar(-e),this._panOffset.add(Dt)}_panUp(e,t){this.screenSpacePanning===!0?Dt.setFromMatrixColumn(t,1):(Dt.setFromMatrixColumn(t,0),Dt.crossVectors(this.object.up,Dt)),Dt.multiplyScalar(e),this._panOffset.add(Dt)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const i=this.object.position;Dt.copy(i).sub(this.target);let r=Dt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),i=e-n.left,r=t-n.top,a=n.width,o=n.height;this._mouse.x=i/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(cn*this._rotateDelta.x/t.clientHeight),this._rotateUp(cn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(cn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-cn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(cn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-cn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._rotateStart.set(n,i)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panStart.set(n,i)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,r=Math.sqrt(n*n+i*i);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(i,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(cn*this._rotateDelta.x/t.clientHeight),this._rotateUp(cn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panEnd.set(n,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,r=Math.sqrt(n*n+i*i);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new X,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function LE(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function UE(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function NE(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Nx),this.state=ut.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function FE(s){let e;switch(s.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Ds.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=ut.DOLLY;break;case Ds.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=ut.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=ut.ROTATE}break;case Ds.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=ut.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=ut.PAN}break;default:this.state=ut.NONE}this.state!==ut.NONE&&this.dispatchEvent(Id)}function OE(s){switch(this.state){case ut.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case ut.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case ut.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function BE(s){this.enabled===!1||this.enableZoom===!1||this.state!==ut.NONE||(s.preventDefault(),this.dispatchEvent(Id),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(Nx))}function zE(s){this.enabled!==!1&&this._handleKeyDown(s)}function kE(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case As.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=ut.TOUCH_ROTATE;break;case As.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=ut.TOUCH_PAN;break;default:this.state=ut.NONE}break;case 2:switch(this.touches.TWO){case As.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=ut.TOUCH_DOLLY_PAN;break;case As.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=ut.TOUCH_DOLLY_ROTATE;break;default:this.state=ut.NONE}break;default:this.state=ut.NONE}this.state!==ut.NONE&&this.dispatchEvent(Id)}function VE(s){switch(this._trackPointer(s),this.state){case ut.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case ut.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case ut.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case ut.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=ut.NONE}}function GE(s){this.enabled!==!1&&s.preventDefault()}function HE(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function WE(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const XE=()=>bE("threlte-controls",{orbitControls:Dr(void 0),trackballControls:Dr(void 0)});function qE(s,e){ll(e,!0);const t=()=>Qg(o,"$parent",n),[n,i]=e_();let r=la(e,"ref",15),a=vl(e,["$$slots","$$events","$$legacy","ref","children"]);const o=Ix(),{dom:c,invalidate:l}=ih();if(!Vn(t(),"Camera"))throw new Error("Parent missing: <OrbitControls> need to be a child of a <Camera>");const h=new DE(t(),c),{orbitControls:u}=XE(),{start:d,stop:f}=Dx(()=>{h.update()},{autoStart:!1,autoInvalidate:!1});zt(()=>{e.autoRotate||e.enableDamping?d():f()}),zt(()=>{const p=g=>{l(),e.onchange?.(g)};return u.set(h),h.addEventListener("change",p),()=>{u.set(void 0),h.removeEventListener("change",p)}}),Gi(s,Mm({get is(){return h}},()=>a,{get ref(){return r()},set ref(p){r(p)},children:(p,g)=>{var x=gl(),m=Rr(x);_l(m,()=>e.children??Hn,()=>({ref:h})),ji(p,x)},$$slots:{default:!0}})),hl(),i()}new De;new De;new It;`${Oe.logdepthbuf_pars_vertex}${Oe.fog_pars_vertex}${Oe.logdepthbuf_vertex}${Oe.fog_vertex}`;`${Oe.tonemapping_fragment}${Oe.colorspace_fragment}`;`${Oe.tonemapping_fragment}${Oe.colorspace_fragment}`;const YE=`

// A stack of uint32 indices can can store the indices for
// a perfectly balanced tree with a depth up to 31. Lower stack
// depth gets higher performance.
//
// However not all trees are balanced. Best value to set this to
// is the trees max depth.
#ifndef BVH_STACK_DEPTH
#define BVH_STACK_DEPTH 60
#endif

#ifndef INFINITY
#define INFINITY 1e20
#endif

// Utilities
uvec4 uTexelFetch1D( usampler2D tex, uint index ) {

	uint width = uint( textureSize( tex, 0 ).x );
	uvec2 uv;
	uv.x = index % width;
	uv.y = index / width;

	return texelFetch( tex, ivec2( uv ), 0 );

}

ivec4 iTexelFetch1D( isampler2D tex, uint index ) {

	uint width = uint( textureSize( tex, 0 ).x );
	uvec2 uv;
	uv.x = index % width;
	uv.y = index / width;

	return texelFetch( tex, ivec2( uv ), 0 );

}

vec4 texelFetch1D( sampler2D tex, uint index ) {

	uint width = uint( textureSize( tex, 0 ).x );
	uvec2 uv;
	uv.x = index % width;
	uv.y = index / width;

	return texelFetch( tex, ivec2( uv ), 0 );

}

vec4 textureSampleBarycoord( sampler2D tex, vec3 barycoord, uvec3 faceIndices ) {

	return
		barycoord.x * texelFetch1D( tex, faceIndices.x ) +
		barycoord.y * texelFetch1D( tex, faceIndices.y ) +
		barycoord.z * texelFetch1D( tex, faceIndices.z );

}

void ndcToCameraRay(
	vec2 coord, mat4 cameraWorld, mat4 invProjectionMatrix,
	out vec3 rayOrigin, out vec3 rayDirection
) {

	// get camera look direction and near plane for camera clipping
	vec4 lookDirection = cameraWorld * vec4( 0.0, 0.0, - 1.0, 0.0 );
	vec4 nearVector = invProjectionMatrix * vec4( 0.0, 0.0, - 1.0, 1.0 );
	float near = abs( nearVector.z / nearVector.w );

	// get the camera direction and position from camera matrices
	vec4 origin = cameraWorld * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec4 direction = invProjectionMatrix * vec4( coord, 0.5, 1.0 );
	direction /= direction.w;
	direction = cameraWorld * direction - origin;

	// slide the origin along the ray until it sits at the near clip plane position
	origin.xyz += direction.xyz * near / dot( direction, lookDirection );

	rayOrigin = origin.xyz;
	rayDirection = direction.xyz;

}
`,ZE=`

#ifndef TRI_INTERSECT_EPSILON
#define TRI_INTERSECT_EPSILON 1e-5
#endif

// Raycasting
bool intersectsBounds( vec3 rayOrigin, vec3 rayDirection, vec3 boundsMin, vec3 boundsMax, out float dist ) {

	// https://www.reddit.com/r/opengl/comments/8ntzz5/fast_glsl_ray_box_intersection/
	// https://tavianator.com/2011/ray_box.html
	vec3 invDir = 1.0 / rayDirection;

	// find intersection distances for each plane
	vec3 tMinPlane = invDir * ( boundsMin - rayOrigin );
	vec3 tMaxPlane = invDir * ( boundsMax - rayOrigin );

	// get the min and max distances from each intersection
	vec3 tMinHit = min( tMaxPlane, tMinPlane );
	vec3 tMaxHit = max( tMaxPlane, tMinPlane );

	// get the furthest hit distance
	vec2 t = max( tMinHit.xx, tMinHit.yz );
	float t0 = max( t.x, t.y );

	// get the minimum hit distance
	t = min( tMaxHit.xx, tMaxHit.yz );
	float t1 = min( t.x, t.y );

	// set distance to 0.0 if the ray starts inside the box
	dist = max( t0, 0.0 );

	return t1 >= dist;

}

bool intersectsTriangle(
	vec3 rayOrigin, vec3 rayDirection, vec3 a, vec3 b, vec3 c,
	out vec3 barycoord, out vec3 norm, out float dist, out float side
) {

	// https://stackoverflow.com/questions/42740765/intersection-between-line-and-triangle-in-3d
	vec3 edge1 = b - a;
	vec3 edge2 = c - a;
	norm = cross( edge1, edge2 );

	float det = - dot( rayDirection, norm );
	float invdet = 1.0 / det;

	vec3 AO = rayOrigin - a;
	vec3 DAO = cross( AO, rayDirection );

	vec4 uvt;
	uvt.x = dot( edge2, DAO ) * invdet;
	uvt.y = - dot( edge1, DAO ) * invdet;
	uvt.z = dot( AO, norm ) * invdet;
	uvt.w = 1.0 - uvt.x - uvt.y;

	// set the hit information
	barycoord = uvt.wxy; // arranged in A, B, C order
	dist = uvt.z;
	side = sign( det );
	norm = side * normalize( norm );

	// add an epsilon to avoid misses between triangles
	uvt += vec4( TRI_INTERSECT_EPSILON );

	return all( greaterThanEqual( uvt, vec4( 0.0 ) ) );

}

bool intersectTriangles(
	// geometry info and triangle range
	sampler2D positionAttr, usampler2D indexAttr, uint offset, uint count,

	// ray
	vec3 rayOrigin, vec3 rayDirection,

	// outputs
	inout float minDistance, inout uvec4 faceIndices, inout vec3 faceNormal, inout vec3 barycoord,
	inout float side, inout float dist
) {

	bool found = false;
	vec3 localBarycoord, localNormal;
	float localDist, localSide;
	for ( uint i = offset, l = offset + count; i < l; i ++ ) {

		uvec3 indices = uTexelFetch1D( indexAttr, i ).xyz;
		vec3 a = texelFetch1D( positionAttr, indices.x ).rgb;
		vec3 b = texelFetch1D( positionAttr, indices.y ).rgb;
		vec3 c = texelFetch1D( positionAttr, indices.z ).rgb;

		if (
			intersectsTriangle( rayOrigin, rayDirection, a, b, c, localBarycoord, localNormal, localDist, localSide )
			&& localDist < minDistance
		) {

			found = true;
			minDistance = localDist;

			faceIndices = uvec4( indices.xyz, i );
			faceNormal = localNormal;

			side = localSide;
			barycoord = localBarycoord;
			dist = localDist;

		}

	}

	return found;

}

bool intersectsBVHNodeBounds( vec3 rayOrigin, vec3 rayDirection, sampler2D bvhBounds, uint currNodeIndex, out float dist ) {

	uint cni2 = currNodeIndex * 2u;
	vec3 boundsMin = texelFetch1D( bvhBounds, cni2 ).xyz;
	vec3 boundsMax = texelFetch1D( bvhBounds, cni2 + 1u ).xyz;
	return intersectsBounds( rayOrigin, rayDirection, boundsMin, boundsMax, dist );

}

// use a macro to hide the fact that we need to expand the struct into separate fields
#define	bvhIntersectFirstHit(		bvh,		rayOrigin, rayDirection, faceIndices, faceNormal, barycoord, side, dist	)	_bvhIntersectFirstHit(		bvh.position, bvh.index, bvh.bvhBounds, bvh.bvhContents,		rayOrigin, rayDirection, faceIndices, faceNormal, barycoord, side, dist	)

bool _bvhIntersectFirstHit(
	// bvh info
	sampler2D bvh_position, usampler2D bvh_index, sampler2D bvh_bvhBounds, usampler2D bvh_bvhContents,

	// ray
	vec3 rayOrigin, vec3 rayDirection,

	// output variables split into separate variables due to output precision
	inout uvec4 faceIndices, inout vec3 faceNormal, inout vec3 barycoord,
	inout float side, inout float dist
) {

	// stack needs to be twice as long as the deepest tree we expect because
	// we push both the left and right child onto the stack every traversal
	int ptr = 0;
	uint stack[ BVH_STACK_DEPTH ];
	stack[ 0 ] = 0u;

	float triangleDistance = INFINITY;
	bool found = false;
	while ( ptr > - 1 && ptr < BVH_STACK_DEPTH ) {

		uint currNodeIndex = stack[ ptr ];
		ptr --;

		// check if we intersect the current bounds
		float boundsHitDistance;
		if (
			! intersectsBVHNodeBounds( rayOrigin, rayDirection, bvh_bvhBounds, currNodeIndex, boundsHitDistance )
			|| boundsHitDistance > triangleDistance
		) {

			continue;

		}

		uvec2 boundsInfo = uTexelFetch1D( bvh_bvhContents, currNodeIndex ).xy;
		bool isLeaf = bool( boundsInfo.x & 0xffff0000u );

		if ( isLeaf ) {

			uint count = boundsInfo.x & 0x0000ffffu;
			uint offset = boundsInfo.y;

			found = intersectTriangles(
				bvh_position, bvh_index, offset, count,
				rayOrigin, rayDirection, triangleDistance,
				faceIndices, faceNormal, barycoord, side, dist
			) || found;

		} else {

			uint leftIndex = currNodeIndex + 1u;
			uint splitAxis = boundsInfo.x & 0x0000ffffu;
			uint rightIndex = boundsInfo.y;

			bool leftToRight = rayDirection[ splitAxis ] >= 0.0;
			uint c1 = leftToRight ? leftIndex : rightIndex;
			uint c2 = leftToRight ? rightIndex : leftIndex;

			// set c2 in the stack so we traverse it later. We need to keep track of a pointer in
			// the stack while we traverse. The second pointer added is the one that will be
			// traversed first
			ptr ++;
			stack[ ptr ] = c2;

			ptr ++;
			stack[ ptr ] = c1;

		}

	}

	return found;

}
`,$E=`
struct BVH {

	usampler2D index;
	sampler2D position;

	sampler2D bvhBounds;
	usampler2D bvhContents;

};
`,KE=$E,JE=`
	${YE}
	${ZE}
`;`${KE}${JE}${Oe.tonemapping_fragment}${Oe.colorspace_fragment}`;new Rt;typeof window<"u"&&document.createElement("div");for(let s=0;s<256;s++)(s<16?"0":"")+s.toString(16);new co(-1,1,1,-1,0,1);class jE extends Ye{constructor(){super(),this.setAttribute("position",new Se([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Se([0,2,0,0,2,0],2))}}new jE;var Fx={exports:{}};Fx.exports=rh;Fx.exports.default=rh;function rh(s,e,t){t=t||2;var n=e&&e.length,i=n?e[0]*t:s.length,r=Ox(s,0,i,t,!0),a=[];if(!r||r.next===r.prev)return a;var o,c,l,h,u,d,f;if(n&&(r=iA(s,e,r,t)),s.length>80*t){o=l=s[0],c=h=s[1];for(var p=t;p<i;p+=t)u=s[p],d=s[p+1],u<o&&(o=u),d<c&&(c=d),u>l&&(l=u),d>h&&(h=d);f=Math.max(l-o,h-c),f=f!==0?32767/f:0}return Ya(r,a,t,o,c,f,0),a}function Ox(s,e,t,n,i){var r,a;if(i===Cu(s,e,t,n)>0)for(r=e;r<t;r+=n)a=Pp(r,s[r],s[r+1],a);else for(r=t-n;r>=e;r-=n)a=Pp(r,s[r],s[r+1],a);return a&&ah(a,a.next)&&($a(a),a=a.next),a}function Hs(s,e){if(!s)return s;e||(e=s);var t=s,n;do if(n=!1,!t.steiner&&(ah(t,t.next)||yt(t.prev,t,t.next)===0)){if($a(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Ya(s,e,t,n,i,r,a){if(s){!a&&r&&cA(s,n,i,r);for(var o=s,c,l;s.prev!==s.next;){if(c=s.prev,l=s.next,r?eA(s,n,i,r):QE(s)){e.push(c.i/t|0),e.push(s.i/t|0),e.push(l.i/t|0),$a(s),s=l.next,o=l.next;continue}if(s=l,s===o){a?a===1?(s=tA(Hs(s),e,t),Ya(s,e,t,n,i,r,2)):a===2&&nA(s,e,t,n,i,r):Ya(Hs(s),e,t,n,i,r,1);break}}}}function QE(s){var e=s.prev,t=s,n=s.next;if(yt(e,t,n)>=0)return!1;for(var i=e.x,r=t.x,a=n.x,o=e.y,c=t.y,l=n.y,h=i<r?i<a?i:a:r<a?r:a,u=o<c?o<l?o:l:c<l?c:l,d=i>r?i>a?i:a:r>a?r:a,f=o>c?o>l?o:l:c>l?c:l,p=n.next;p!==e;){if(p.x>=h&&p.x<=d&&p.y>=u&&p.y<=f&&Er(i,o,r,c,a,l,p.x,p.y)&&yt(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function eA(s,e,t,n){var i=s.prev,r=s,a=s.next;if(yt(i,r,a)>=0)return!1;for(var o=i.x,c=r.x,l=a.x,h=i.y,u=r.y,d=a.y,f=o<c?o<l?o:l:c<l?c:l,p=h<u?h<d?h:d:u<d?u:d,g=o>c?o>l?o:l:c>l?c:l,x=h>u?h>d?h:d:u>d?u:d,m=Eu(f,p,e,t,n),v=Eu(g,x,e,t,n),_=s.prevZ,y=s.nextZ;_&&_.z>=m&&y&&y.z<=v;){if(_.x>=f&&_.x<=g&&_.y>=p&&_.y<=x&&_!==i&&_!==a&&Er(o,h,c,u,l,d,_.x,_.y)&&yt(_.prev,_,_.next)>=0||(_=_.prevZ,y.x>=f&&y.x<=g&&y.y>=p&&y.y<=x&&y!==i&&y!==a&&Er(o,h,c,u,l,d,y.x,y.y)&&yt(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;_&&_.z>=m;){if(_.x>=f&&_.x<=g&&_.y>=p&&_.y<=x&&_!==i&&_!==a&&Er(o,h,c,u,l,d,_.x,_.y)&&yt(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;y&&y.z<=v;){if(y.x>=f&&y.x<=g&&y.y>=p&&y.y<=x&&y!==i&&y!==a&&Er(o,h,c,u,l,d,y.x,y.y)&&yt(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function tA(s,e,t){var n=s;do{var i=n.prev,r=n.next.next;!ah(i,r)&&Bx(i,n,n.next,r)&&Za(i,r)&&Za(r,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),$a(n),$a(n.next),n=s=r),n=n.next}while(n!==s);return Hs(n)}function nA(s,e,t,n,i,r){var a=s;do{for(var o=a.next.next;o!==a.prev;){if(a.i!==o.i&&uA(a,o)){var c=zx(a,o);a=Hs(a,a.next),c=Hs(c,c.next),Ya(a,e,t,n,i,r,0),Ya(c,e,t,n,i,r,0);return}o=o.next}a=a.next}while(a!==s)}function iA(s,e,t,n){var i=[],r,a,o,c,l;for(r=0,a=e.length;r<a;r++)o=e[r]*n,c=r<a-1?e[r+1]*n:s.length,l=Ox(s,o,c,n,!1),l===l.next&&(l.steiner=!0),i.push(hA(l));for(i.sort(sA),r=0;r<i.length;r++)t=rA(i[r],t);return t}function sA(s,e){return s.x-e.x}function rA(s,e){var t=aA(s,e);if(!t)return e;var n=zx(t,s);return Hs(n,n.next),Hs(t,t.next)}function aA(s,e){var t=e,n=s.x,i=s.y,r=-1/0,a;do{if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){var o=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(o<=n&&o>r&&(r=o,a=t.x<t.next.x?t:t.next,o===n))return a}t=t.next}while(t!==e);if(!a)return null;var c=a,l=a.x,h=a.y,u=1/0,d;t=a;do n>=t.x&&t.x>=l&&n!==t.x&&Er(i<h?n:r,i,l,h,i<h?r:n,i,t.x,t.y)&&(d=Math.abs(i-t.y)/(n-t.x),Za(t,s)&&(d<u||d===u&&(t.x>a.x||t.x===a.x&&oA(a,t)))&&(a=t,u=d)),t=t.next;while(t!==c);return a}function oA(s,e){return yt(s.prev,s,e.prev)<0&&yt(e.next,s,s.next)<0}function cA(s,e,t,n){var i=s;do i.z===0&&(i.z=Eu(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,lA(i)}function lA(s){var e,t,n,i,r,a,o,c,l=1;do{for(t=s,s=null,r=null,a=0;t;){for(a++,n=t,o=0,e=0;e<l&&(o++,n=n.nextZ,!!n);e++);for(c=l;o>0||c>0&&n;)o!==0&&(c===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,o--):(i=n,n=n.nextZ,c--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;t=n}r.nextZ=null,l*=2}while(a>1);return s}function Eu(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function hA(s){var e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function Er(s,e,t,n,i,r,a,o){return(i-a)*(e-o)>=(s-a)*(r-o)&&(s-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(i-a)*(n-o)}function uA(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!dA(s,e)&&(Za(s,e)&&Za(e,s)&&fA(s,e)&&(yt(s.prev,s,e.prev)||yt(s,e.prev,e))||ah(s,e)&&yt(s.prev,s,s.next)>0&&yt(e.prev,e,e.next)>0)}function yt(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function ah(s,e){return s.x===e.x&&s.y===e.y}function Bx(s,e,t,n){var i=oc(yt(s,e,t)),r=oc(yt(s,e,n)),a=oc(yt(t,n,s)),o=oc(yt(t,n,e));return!!(i!==r&&a!==o||i===0&&ac(s,t,e)||r===0&&ac(s,n,e)||a===0&&ac(t,s,n)||o===0&&ac(t,e,n))}function ac(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function oc(s){return s>0?1:s<0?-1:0}function dA(s,e){var t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&Bx(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function Za(s,e){return yt(s.prev,s,s.next)<0?yt(s,e,s.next)>=0&&yt(s,s.prev,e)>=0:yt(s,e,s.prev)<0||yt(s,s.next,e)<0}function fA(s,e){var t=s,n=!1,i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function zx(s,e){var t=new Au(s.i,s.x,s.y),n=new Au(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Pp(s,e,t,n){var i=new Au(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function $a(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Au(s,e,t){this.i=s,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}rh.deviation=function(s,e,t,n){var i=e&&e.length,r=i?e[0]*t:s.length,a=Math.abs(Cu(s,0,r,t));if(i)for(var o=0,c=e.length;o<c;o++){var l=e[o]*t,h=o<c-1?e[o+1]*t:s.length;a-=Math.abs(Cu(s,l,h,t))}var u=0;for(o=0;o<n.length;o+=3){var d=n[o]*t,f=n[o+1]*t,p=n[o+2]*t;u+=Math.abs((s[d]-s[p])*(s[f+1]-s[d+1])-(s[d]-s[f])*(s[p+1]-s[d+1]))}return a===0&&u===0?0:Math.abs((u-a)/a)};function Cu(s,e,t,n){for(var i=0,r=e,a=t-n;r<t;r+=n)i+=(s[a]-s[r])*(s[r+1]+s[a+1]),a=r;return i}rh.flatten=function(s){for(var e=s[0][0].length,t={vertices:[],holes:[],dimensions:e},n=0,i=0;i<s.length;i++){for(var r=0;r<s[i].length;r++)for(var a=0;a<e;a++)t.vertices.push(s[i][r][a]);i>0&&(n+=s[i-1].length,t.holes.push(n))}return t};new X;new X;var Ip;(s=>{function e(i){let r=i.slice();return r.sort(s.POINT_COMPARATOR),s.makeHullPresorted(r)}s.makeHull=e;function t(i){if(i.length<=1)return i.slice();let r=[];for(let o=0;o<i.length;o++){const c=i[o];for(;r.length>=2;){const l=r[r.length-1],h=r[r.length-2];if((l.x-h.x)*(c.y-h.y)>=(l.y-h.y)*(c.x-h.x))r.pop();else break}r.push(c)}r.pop();let a=[];for(let o=i.length-1;o>=0;o--){const c=i[o];for(;a.length>=2;){const l=a[a.length-1],h=a[a.length-2];if((l.x-h.x)*(c.y-h.y)>=(l.y-h.y)*(c.x-h.x))a.pop();else break}a.push(c)}return a.pop(),r.length==1&&a.length==1&&r[0].x==a[0].x&&r[0].y==a[0].y?r:r.concat(a)}s.makeHullPresorted=t;function n(i,r){return i.x<r.x?-1:i.x>r.x?1:i.y<r.y?-1:i.y>r.y?1:0}s.POINT_COMPARATOR=n})(Ip||(Ip={}));new Ui;new E;new De;new Li;new Pt;new Rt;new E;new E;var pA=xl("<!> <!>",1),mA=xl("<!> <!> <!> <!> <!>",1);function xA(s){var e=mA(),t=Rr(e);Gi.PerspectiveCamera(t,{makeDefault:!0,position:[10,10,10],fov:24,children:(o,c)=>{qE(o,{})},$$slots:{default:!0}});var n=br(t,2);Gi.DirectionalLight(n,{position:[3,10,7]});var i=br(n,2);Gi.AmbientLight(i,{intensity:.2});var r=br(i,2);Gi.Mesh(r,{"position.y":1,children:(o,c)=>{var l=pA(),h=Rr(l);Gi.BoxGeometry(h,{args:[1,1,1]});var u=br(h,2);Gi.MeshStandardMaterial(u,{color:"hotpink"}),ji(o,l)},$$slots:{default:!0}});var a=br(r,2);Gi.GridHelper(a,{args:[10,10]}),ji(s,e)}var gA=xl('<main class="svelte-1n46o8q"><h1>Hello Svelte + Threlte!</h1> <div class="canvas-container svelte-1n46o8q"><!></div></main>');function _A(s){var e=gA(),t=br(pc(e),2),n=pc(t);tE(n,{children:(i,r)=>{xA(i)},$$slots:{default:!0}}),ji(s,e)}$g(_A,{target:document.getElementById("app")});
