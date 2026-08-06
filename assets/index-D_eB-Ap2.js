var e=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),t=(e=>typeof require<`u`?require:typeof Proxy<`u`?new Proxy(e,{get:(e,t)=>(typeof require<`u`?require:e)[t]}):e)(function(e){if(typeof require<`u`)return require.apply(this,arguments);throw Error('Calling `require` for "'+e+"\" in an environment that doesn't expose the `require` function. See https://rolldown.rs/in-depth/bundling-cjs#require-external-modules for more details.")});(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var n=e((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.iterator;function m(e){return typeof e!=`object`||!e?null:(e=p&&e[p]||e[`@@iterator`],typeof e==`function`?e:null)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,_={};function v(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function y(){}y.prototype=v.prototype;function b(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}var x=b.prototype=new y;x.constructor=b,g(x,v.prototype),x.isPureReactComponent=!0;var S=Array.isArray;function C(){}var w={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function E(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function D(e,t){return E(e.type,t,e.props)}function O(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function k(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var A=/\/+/g;function j(e,t){return typeof e==`object`&&e&&e.key!=null?k(``+e.key):t.toString(36)}function M(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(C,C):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function N(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,N(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+j(e,0):a,S(o)?(i=``,c!=null&&(i=c.replace(A,`$&/`)+`/`),N(o,r,i,``,function(e){return e})):o!=null&&(O(o)&&(o=D(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(A,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(S(e))for(var u=0;u<e.length;u++)a=e[u],s=l+j(a,u),c+=N(a,r,i,s,o);else if(u=m(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+j(a,u++),c+=N(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return N(M(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function P(e,t,n){if(e==null)return e;var r=[],i=0;return N(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function F(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var I=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},L={map:P,forEach:function(e,t,n){P(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return P(e,function(){t++}),t},toArray:function(e){return P(e,function(e){return e})||[]},only:function(e){if(!O(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=L,e.Component=v,e.Fragment=r,e.Profiler=a,e.PureComponent=b,e.StrictMode=i,e.Suspense=l,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=w,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return w.H.useMemoCache(e)}},e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=g({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!T.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return E(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)T.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return E(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=O,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:F}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=w.T,n={};w.T=n;try{var r=e(),i=w.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(C,I)}catch(e){I(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),w.T=t}},e.unstable_useCacheRefresh=function(){return w.H.useCacheRefresh()},e.use=function(e){return w.H.use(e)},e.useActionState=function(e,t,n){return w.H.useActionState(e,t,n)},e.useCallback=function(e,t){return w.H.useCallback(e,t)},e.useContext=function(e){return w.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return w.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return w.H.useEffect(e,t)},e.useEffectEvent=function(e){return w.H.useEffectEvent(e)},e.useId=function(){return w.H.useId()},e.useImperativeHandle=function(e,t,n){return w.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return w.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return w.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return w.H.useMemo(e,t)},e.useOptimistic=function(e,t){return w.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return w.H.useReducer(e,t,n)},e.useRef=function(e){return w.H.useRef(e)},e.useState=function(e){return w.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return w.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return w.H.useTransition()},e.version=`19.2.8`})),r=e(((e,t)=>{t.exports=n()})),i=e((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m)if(n(c)!==null)m=!0,S||(S=!0,O());else{var t=n(l);t!==null&&j(x,t.startTime-e)}}var S=!1,C=-1,w=5,T=-1;function E(){return g?!0:!(e.unstable_now()-T<w)}function D(){if(g=!1,S){var t=e.unstable_now();T=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(C),C=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&E());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&j(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}i=void 0}}finally{i?O():S=!1}}}var O;if(typeof y==`function`)O=function(){y(D)};else if(typeof MessageChannel<`u`){var k=new MessageChannel,A=k.port2;k.port1.onmessage=D,O=function(){A.postMessage(null)}}else O=function(){_(D,0)};function j(t,n){C=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):w=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(C),C=-1):h=!0,j(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,S||(S=!0,O()))),r},e.unstable_shouldYield=E,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),a=e(((e,t)=>{t.exports=i()})),o=e((e=>{var t=r();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function i(){}var a={d:{f:i,r:function(){throw Error(n(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},o=Symbol.for(`react.portal`);function s(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}var c=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function l(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return s(e,t,null,r)},e.flushSync=function(e){var t=c.T,n=a.p;try{if(c.T=null,a.p=2,e)return e()}finally{c.T=t,a.p=n,a.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,a.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&a.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=l(n,t.crossOrigin),i=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?a.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:i,fetchPriority:o}):n===`script`&&a.d.X(e,{crossOrigin:r,integrity:i,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`)if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=l(t.as,t.crossOrigin);a.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0})}}else t??a.d.M(e)},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=l(n,t.crossOrigin);a.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`)if(t){var n=l(t.as,t.crossOrigin);a.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0})}else a.d.m(e)},e.requestFormReset=function(e){a.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return c.H.useFormState(e,t,n)},e.useFormStatus=function(){return c.H.useHostTransitionStatus()},e.version=`19.2.8`})),s=e(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=o()})),c=e((e=>{var t=a(),n=r(),i=s();function o(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function c(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function l(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function u(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function d(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function f(e){if(l(e)!==e)throw Error(o(188))}function p(e){var t=e.alternate;if(!t){if(t=l(e),t===null)throw Error(o(188));return t===e?e:null}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var a=i.alternate;if(a===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===n)return f(i),e;if(a===r)return f(i),t;a=a.sibling}throw Error(o(188))}if(n.return!==r.return)n=i,r=a;else{for(var s=!1,c=i.child;c;){if(c===n){s=!0,n=i,r=a;break}if(c===r){s=!0,r=i,n=a;break}c=c.sibling}if(!s){for(c=a.child;c;){if(c===n){s=!0,n=a,r=i;break}if(c===r){s=!0,r=a,n=i;break}c=c.sibling}if(!s)throw Error(o(189))}}if(n.alternate!==r)throw Error(o(190))}if(n.tag!==3)throw Error(o(188));return n.stateNode.current===n?e:t}function m(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=m(e),t!==null)return t;e=e.sibling}return null}var h=Object.assign,g=Symbol.for(`react.element`),_=Symbol.for(`react.transitional.element`),v=Symbol.for(`react.portal`),y=Symbol.for(`react.fragment`),b=Symbol.for(`react.strict_mode`),x=Symbol.for(`react.profiler`),S=Symbol.for(`react.consumer`),C=Symbol.for(`react.context`),w=Symbol.for(`react.forward_ref`),T=Symbol.for(`react.suspense`),E=Symbol.for(`react.suspense_list`),D=Symbol.for(`react.memo`),O=Symbol.for(`react.lazy`),k=Symbol.for(`react.activity`),A=Symbol.for(`react.memo_cache_sentinel`),j=Symbol.iterator;function M(e){return typeof e!=`object`||!e?null:(e=j&&e[j]||e[`@@iterator`],typeof e==`function`?e:null)}var N=Symbol.for(`react.client.reference`);function P(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===N?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case y:return`Fragment`;case x:return`Profiler`;case b:return`StrictMode`;case T:return`Suspense`;case E:return`SuspenseList`;case k:return`Activity`}if(typeof e==`object`)switch(e.$$typeof){case v:return`Portal`;case C:return e.displayName||`Context`;case S:return(e._context.displayName||`Context`)+`.Consumer`;case w:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case D:return t=e.displayName||null,t===null?P(e.type)||`Memo`:t;case O:t=e._payload,e=e._init;try{return P(e(t))}catch{}}return null}var F=Array.isArray,I=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,L=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,R={pending:!1,data:null,method:null,action:null},z=[],B=-1;function V(e){return{current:e}}function H(e){0>B||(e.current=z[B],z[B]=null,B--)}function U(e,t){B++,z[B]=e.current,e.current=t}var ee=V(null),te=V(null),ne=V(null),re=V(null);function ie(e,t){switch(U(ne,t),U(te,e),U(ee,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Vd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Vd(t),e=Hd(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}H(ee),U(ee,e)}function ae(){H(ee),H(te),H(ne)}function oe(e){e.memoizedState!==null&&U(re,e);var t=ee.current,n=Hd(t,e.type);t!==n&&(U(te,e),U(ee,n))}function se(e){te.current===e&&(H(ee),H(te)),re.current===e&&(H(re),Qf._currentValue=R)}var ce,le;function ue(e){if(ce===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);ce=t&&t[1]||``,le=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+ce+e+le}var de=!1;function fe(e,t){if(!e||de)return``;de=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}e.call(n.prototype)}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{de=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?ue(n):``}function pe(e,t){switch(e.tag){case 26:case 27:case 5:return ue(e.type);case 16:return ue(`Lazy`);case 13:return e.child!==t&&t!==null?ue(`Suspense Fallback`):ue(`Suspense`);case 19:return ue(`SuspenseList`);case 0:case 15:return fe(e.type,!1);case 11:return fe(e.type.render,!1);case 1:return fe(e.type,!0);case 31:return ue(`Activity`);default:return``}}function me(e){try{var t=``,n=null;do t+=pe(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var he=Object.prototype.hasOwnProperty,ge=t.unstable_scheduleCallback,_e=t.unstable_cancelCallback,ve=t.unstable_shouldYield,ye=t.unstable_requestPaint,be=t.unstable_now,xe=t.unstable_getCurrentPriorityLevel,W=t.unstable_ImmediatePriority,Se=t.unstable_UserBlockingPriority,Ce=t.unstable_NormalPriority,we=t.unstable_LowPriority,Te=t.unstable_IdlePriority,Ee=t.log,De=t.unstable_setDisableYieldValue,Oe=null,ke=null;function Ae(e){if(typeof Ee==`function`&&De(e),ke&&typeof ke.setStrictMode==`function`)try{ke.setStrictMode(Oe,e)}catch{}}var je=Math.clz32?Math.clz32:Pe,Me=Math.log,Ne=Math.LN2;function Pe(e){return e>>>=0,e===0?32:31-(Me(e)/Ne|0)|0}var Fe=256,Ie=262144,Le=4194304;function Re(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ze(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=Re(n))):i=Re(o):i=Re(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=Re(n))):i=Re(o)):i=Re(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function Be(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Ve(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function He(){var e=Le;return Le<<=1,!(Le&62914560)&&(Le=4194304),e}function Ue(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function We(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Ge(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-je(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&Ke(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function Ke(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-je(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function qe(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-je(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function Je(e,t){var n=t&-t;return n=n&42?1:Ye(n),(n&(e.suspendedLanes|t))===0?n:0}function Ye(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Xe(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function Ze(){var e=L.p;return e===0?(e=window.event,e===void 0?32:mp(e.type)):e}function Qe(e,t){var n=L.p;try{return L.p=e,t()}finally{L.p=n}}var $e=Math.random().toString(36).slice(2),et=`__reactFiber$`+$e,tt=`__reactProps$`+$e,nt=`__reactContainer$`+$e,rt=`__reactEvents$`+$e,it=`__reactListeners$`+$e,at=`__reactHandles$`+$e,ot=`__reactResources$`+$e,st=`__reactMarker$`+$e;function ct(e){delete e[et],delete e[tt],delete e[rt],delete e[it],delete e[at]}function lt(e){var t=e[et];if(t)return t;for(var n=e.parentNode;n;){if(t=n[nt]||n[et]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=df(e);e!==null;){if(n=e[et])return n;e=df(e)}return t}e=n,n=e.parentNode}return null}function ut(e){if(e=e[et]||e[nt]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function dt(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(o(33))}function ft(e){var t=e[ot];return t||=e[ot]={hoistableStyles:new Map,hoistableScripts:new Map},t}function pt(e){e[st]=!0}var mt=new Set,ht={};function gt(e,t){_t(e,t),_t(e+`Capture`,t)}function _t(e,t){for(ht[e]=t,e=0;e<t.length;e++)mt.add(t[e])}var vt=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),yt={},bt={};function xt(e){return he.call(bt,e)?!0:he.call(yt,e)?!1:vt.test(e)?bt[e]=!0:(yt[e]=!0,!1)}function St(e,t,n){if(xt(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,``+n)}}function Ct(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,``+n)}}function wt(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,``+r)}}function Tt(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function Et(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function Dt(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ot(e){if(!e._valueTracker){var t=Et(e)?`checked`:`value`;e._valueTracker=Dt(e,t,``+e[t])}}function kt(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=Et(e)?e.checked?`true`:`false`:e.value),e=r,e===n?!1:(t.setValue(e),!0)}function At(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}var jt=/[\n"\\]/g;function Mt(e){return e.replace(jt,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function Nt(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+Tt(t)):e.value!==``+Tt(t)&&(e.value=``+Tt(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):Ft(e,o,Tt(n)):Ft(e,o,Tt(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+Tt(s):e.removeAttribute(`name`)}function Pt(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){Ot(e);return}n=n==null?``:``+Tt(n),t=t==null?n:``+Tt(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),Ot(e)}function Ft(e,t,n){t===`number`&&At(e.ownerDocument)===e||e.defaultValue===``+n||(e.defaultValue=``+n)}function It(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+Tt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Lt(e,t,n){if(t!=null&&(t=``+Tt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+Tt(n)}function Rt(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(o(92));if(F(r)){if(1<r.length)throw Error(o(93));r=r[0]}n=r}n??=``,t=n}n=Tt(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),Ot(e)}function zt(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Bt=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function Vt(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||Bt.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function Ht(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(o(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``);for(var i in t)r=t[i],t.hasOwnProperty(i)&&n[i]!==r&&Vt(e,i,r)}else for(var a in t)t.hasOwnProperty(a)&&Vt(e,a,t[a])}function Ut(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var Wt=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),Gt=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Kt(e){return Gt.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function qt(){}var Jt=null;function Yt(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Xt=null,Zt=null;function Qt(e){var t=ut(e);if(t&&(e=t.stateNode)){var n=e[tt]||null;a:switch(e=t.stateNode,t.type){case`input`:if(Nt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+Mt(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=r[tt]||null;if(!i)throw Error(o(90));Nt(r,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&kt(r)}break a;case`textarea`:Lt(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&It(e,!!n.multiple,t,!1)}}}var $t=!1;function en(e,t,n){if($t)return e(t,n);$t=!0;try{return e(t)}finally{if($t=!1,(Xt!==null||Zt!==null)&&(vu(),Xt&&(t=Xt,e=Zt,Zt=Xt=null,Qt(t),e)))for(t=0;t<e.length;t++)Qt(e[t])}}function tn(e,t){var n=e.stateNode;if(n===null)return null;var r=n[tt]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=!(e===`button`||e===`input`||e===`select`||e===`textarea`)),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(o(231,t,typeof n));return n}var nn=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),rn=!1;if(nn)try{var an={};Object.defineProperty(an,"passive",{get:function(){rn=!0}}),window.addEventListener(`test`,an,an),window.removeEventListener(`test`,an,an)}catch{rn=!1}var on=null,sn=null,cn=null;function ln(){if(cn)return cn;var e,t=sn,n=t.length,r,i=`value`in on?on.value:on.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return cn=i.slice(e,1<r?1-r:void 0)}function un(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function dn(){return!0}function fn(){return!1}function pn(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?dn:fn,this.isPropagationStopped=fn,this}return h(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=dn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=dn)},persist:function(){},isPersistent:dn}),t}var mn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},G=pn(mn),hn=h({},mn,{view:0,detail:0}),gn=pn(hn),_n,vn,yn,bn=h({},hn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:An,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==yn&&(yn&&e.type===`mousemove`?(_n=e.screenX-yn.screenX,vn=e.screenY-yn.screenY):vn=_n=0,yn=e),_n)},movementY:function(e){return`movementY`in e?e.movementY:vn}}),K=pn(bn),xn=pn(h({},bn,{dataTransfer:0})),Sn=pn(h({},hn,{relatedTarget:0})),Cn=pn(h({},mn,{animationName:0,elapsedTime:0,pseudoElement:0})),wn=pn(h({},mn,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),Tn=pn(h({},mn,{data:0})),En={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},Dn={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},On={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function kn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=On[e])?!!t[e]:!1}function An(){return kn}var jn=pn(h({},hn,{key:function(e){if(e.key){var t=En[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=un(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?Dn[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:An,charCode:function(e){return e.type===`keypress`?un(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?un(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),Mn=pn(h({},bn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Nn=pn(h({},hn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:An})),Pn=pn(h({},mn,{propertyName:0,elapsedTime:0,pseudoElement:0})),Fn=pn(h({},bn,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),In=pn(h({},mn,{newState:0,oldState:0})),Ln=[9,13,27,32],Rn=nn&&`CompositionEvent`in window,zn=null;nn&&`documentMode`in document&&(zn=document.documentMode);var Bn=nn&&`TextEvent`in window&&!zn,Vn=nn&&(!Rn||zn&&8<zn&&11>=zn),Hn=` `,Un=!1;function Wn(e,t){switch(e){case`keyup`:return Ln.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function Gn(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var Kn=!1;function qn(e,t){switch(e){case`compositionend`:return Gn(t);case`keypress`:return t.which===32?(Un=!0,Hn):null;case`textInput`:return e=t.data,e===Hn&&Un?null:e;default:return null}}function Jn(e,t){if(Kn)return e===`compositionend`||!Rn&&Wn(e,t)?(e=ln(),cn=sn=on=null,Kn=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return Vn&&t.locale!==`ko`?null:t.data;default:return null}}var Yn={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Xn(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!Yn[e.type]:t===`textarea`}function Zn(e,t,n,r){Xt?Zt?Zt.push(r):Zt=[r]:Xt=r,t=Td(t,`onChange`),0<t.length&&(n=new G(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var Qn=null,$n=null;function er(e){vd(e,0)}function tr(e){if(kt(dt(e)))return e}function nr(e,t){if(e===`change`)return t}var rr=!1;if(nn){var ir;if(nn){var ar=`oninput`in document;if(!ar){var or=document.createElement(`div`);or.setAttribute(`oninput`,`return;`),ar=typeof or.oninput==`function`}ir=ar}else ir=!1;rr=ir&&(!document.documentMode||9<document.documentMode)}function sr(){Qn&&(Qn.detachEvent(`onpropertychange`,cr),$n=Qn=null)}function cr(e){if(e.propertyName===`value`&&tr($n)){var t=[];Zn(t,$n,e,Yt(e)),en(er,t)}}function lr(e,t,n){e===`focusin`?(sr(),Qn=t,$n=n,Qn.attachEvent(`onpropertychange`,cr)):e===`focusout`&&sr()}function ur(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return tr($n)}function dr(e,t){if(e===`click`)return tr(t)}function fr(e,t){if(e===`input`||e===`change`)return tr(t)}function pr(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var mr=typeof Object.is==`function`?Object.is:pr;function hr(e,t){if(mr(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!he.call(t,i)||!mr(e[i],t[i]))return!1}return!0}function gr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function _r(e,t){var n=gr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=gr(n)}}function vr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?vr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function yr(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=At(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=At(e.document)}return t}function br(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var xr=nn&&`documentMode`in document&&11>=document.documentMode,Sr=null,Cr=null,wr=null,Tr=!1;function Er(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Tr||Sr==null||Sr!==At(r)||(r=Sr,`selectionStart`in r&&br(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),wr&&hr(wr,r)||(wr=r,r=Td(Cr,`onSelect`),0<r.length&&(t=new G(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Sr)))}function Dr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Or={animationend:Dr(`Animation`,`AnimationEnd`),animationiteration:Dr(`Animation`,`AnimationIteration`),animationstart:Dr(`Animation`,`AnimationStart`),transitionrun:Dr(`Transition`,`TransitionRun`),transitionstart:Dr(`Transition`,`TransitionStart`),transitioncancel:Dr(`Transition`,`TransitionCancel`),transitionend:Dr(`Transition`,`TransitionEnd`)},kr={},Ar={};nn&&(Ar=document.createElement(`div`).style,`AnimationEvent`in window||(delete Or.animationend.animation,delete Or.animationiteration.animation,delete Or.animationstart.animation),`TransitionEvent`in window||delete Or.transitionend.transition);function jr(e){if(kr[e])return kr[e];if(!Or[e])return e;var t=Or[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Ar)return kr[e]=t[n];return e}var Mr=jr(`animationend`),Nr=jr(`animationiteration`),Pr=jr(`animationstart`),Fr=jr(`transitionrun`),Ir=jr(`transitionstart`),Lr=jr(`transitioncancel`),Rr=jr(`transitionend`),zr=new Map,Br=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);Br.push(`scrollEnd`);function Vr(e,t){zr.set(e,t),gt(t,[e])}var Hr=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},Ur=[],Wr=0,Gr=0;function Kr(){for(var e=Wr,t=Gr=Wr=0;t<e;){var n=Ur[t];Ur[t++]=null;var r=Ur[t];Ur[t++]=null;var i=Ur[t];Ur[t++]=null;var a=Ur[t];if(Ur[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&Xr(n,i,a)}}function qr(e,t,n,r){Ur[Wr++]=e,Ur[Wr++]=t,Ur[Wr++]=n,Ur[Wr++]=r,Gr|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function Jr(e,t,n,r){return qr(e,t,n,r),Zr(e)}function Yr(e,t){return qr(e,null,null,t),Zr(e)}function Xr(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-je(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function Zr(e){if(50<lu)throw lu=0,uu=null,Error(o(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Qr={};function $r(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ei(e,t,n,r){return new $r(e,t,n,r)}function ti(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ni(e,t){var n=e.alternate;return n===null?(n=ei(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function ri(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function ii(e,t,n,r,i,a){var s=0;if(r=e,typeof e==`function`)ti(e)&&(s=1);else if(typeof e==`string`)s=Uf(e,n,ee.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(e){case k:return e=ei(31,n,t,i),e.elementType=k,e.lanes=a,e;case y:return ai(n.children,i,a,t);case b:s=8,i|=24;break;case x:return e=ei(12,n,t,i|2),e.elementType=x,e.lanes=a,e;case T:return e=ei(13,n,t,i),e.elementType=T,e.lanes=a,e;case E:return e=ei(19,n,t,i),e.elementType=E,e.lanes=a,e;default:if(typeof e==`object`&&e)switch(e.$$typeof){case C:s=10;break a;case S:s=9;break a;case w:s=11;break a;case D:s=14;break a;case O:s=16,r=null;break a}s=29,n=Error(o(130,e===null?`null`:typeof e,``)),r=null}return t=ei(s,n,t,i),t.elementType=e,t.type=r,t.lanes=a,t}function ai(e,t,n,r){return e=ei(7,e,r,t),e.lanes=n,e}function oi(e,t,n){return e=ei(6,e,null,t),e.lanes=n,e}function si(e){var t=ei(18,null,null,0);return t.stateNode=e,t}function ci(e,t,n){return t=ei(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var li=new WeakMap;function ui(e,t){if(typeof e==`object`&&e){var n=li.get(e);return n===void 0?(t={value:e,source:t,stack:me(t)},li.set(e,t),t):n}return{value:e,source:t,stack:me(t)}}var di=[],fi=0,pi=null,mi=0,hi=[],gi=0,_i=null,vi=1,yi=``;function bi(e,t){di[fi++]=mi,di[fi++]=pi,pi=e,mi=t}function xi(e,t,n){hi[gi++]=vi,hi[gi++]=yi,hi[gi++]=_i,_i=e;var r=vi;e=yi;var i=32-je(r)-1;r&=~(1<<i),n+=1;var a=32-je(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,vi=1<<32-je(t)+i|n<<i|r,yi=a+e}else vi=1<<a|n<<i|r,yi=e}function Si(e){e.return!==null&&(bi(e,1),xi(e,1,0))}function Ci(e){for(;e===pi;)pi=di[--fi],di[fi]=null,mi=di[--fi],di[fi]=null;for(;e===_i;)_i=hi[--gi],hi[gi]=null,yi=hi[--gi],hi[gi]=null,vi=hi[--gi],hi[gi]=null}function wi(e,t){hi[gi++]=vi,hi[gi++]=yi,hi[gi++]=_i,vi=t.id,yi=t.overflow,_i=e}var Ti=null,q=null,J=!1,Ei=null,Di=!1,Oi=Error(o(519));function ki(e){throw Fi(ui(Error(o(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),Oi}function Ai(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[et]=e,t[tt]=r,n){case`dialog`:$(`cancel`,t),$(`close`,t);break;case`iframe`:case`object`:case`embed`:$(`load`,t);break;case`video`:case`audio`:for(n=0;n<gd.length;n++)$(gd[n],t);break;case`source`:$(`error`,t);break;case`img`:case`image`:case`link`:$(`error`,t),$(`load`,t);break;case`details`:$(`toggle`,t);break;case`input`:$(`invalid`,t),Pt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:$(`invalid`,t);break;case`textarea`:$(`invalid`,t),Rt(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||jd(t.textContent,n)?(r.popover!=null&&($(`beforetoggle`,t),$(`toggle`,t)),r.onScroll!=null&&$(`scroll`,t),r.onScrollEnd!=null&&$(`scrollend`,t),r.onClick!=null&&(t.onclick=qt),t=!0):t=!1,t||ki(e,!0)}function ji(e){for(Ti=e.return;Ti;)switch(Ti.tag){case 5:case 31:case 13:Di=!1;return;case 27:case 3:Di=!0;return;default:Ti=Ti.return}}function Mi(e){if(e!==Ti)return!1;if(!J)return ji(e),J=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!==`form`&&n!==`button`)||Ud(e.type,e.memoizedProps)),n=!n),n&&q&&ki(e),ji(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(o(317));q=uf(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(o(317));q=uf(e)}else t===27?(t=q,Zd(e.type)?(e=lf,lf=null,q=e):q=t):q=Ti?cf(e.stateNode.nextSibling):null;return!0}function Ni(){q=Ti=null,J=!1}function Pi(){var e=Ei;return e!==null&&(Yl===null?Yl=e:Yl.push.apply(Yl,e),Ei=null),e}function Fi(e){Ei===null?Ei=[e]:Ei.push(e)}var Ii=V(null),Li=null,Ri=null;function zi(e,t,n){U(Ii,t._currentValue),t._currentValue=n}function Bi(e){e._currentValue=Ii.current,H(Ii)}function Vi(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function Hi(e,t,n,r){var i=e.child;for(i!==null&&(i.return=e);i!==null;){var a=i.dependencies;if(a!==null){var s=i.child;a=a.firstContext;a:for(;a!==null;){var c=a;a=i;for(var l=0;l<t.length;l++)if(c.context===t[l]){a.lanes|=n,c=a.alternate,c!==null&&(c.lanes|=n),Vi(a.return,n,e),r||(s=null);break a}a=c.next}}else if(i.tag===18){if(s=i.return,s===null)throw Error(o(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),Vi(s,n,e),s=null}else s=i.child;if(s!==null)s.return=i;else for(s=i;s!==null;){if(s===e){s=null;break}if(i=s.sibling,i!==null){i.return=s.return,s=i;break}s=s.return}i=s}}function Ui(e,t,n,r){e=null;for(var i=t,a=!1;i!==null;){if(!a){if(i.flags&524288)a=!0;else if(i.flags&262144)break}if(i.tag===10){var s=i.alternate;if(s===null)throw Error(o(387));if(s=s.memoizedProps,s!==null){var c=i.type;mr(i.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(i===re.current){if(s=i.alternate,s===null)throw Error(o(387));s.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(e===null?e=[Qf]:e.push(Qf))}i=i.return}e!==null&&Hi(t,e,n,r),t.flags|=262144}function Wi(e){for(e=e.firstContext;e!==null;){if(!mr(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Gi(e){Li=e,Ri=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ki(e){return Ji(Li,e)}function qi(e,t){return Li===null&&Gi(e),Ji(e,t)}function Ji(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Ri===null){if(e===null)throw Error(o(308));Ri=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Ri=Ri.next=t;return n}var Yi=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},Xi=t.unstable_scheduleCallback,Zi=t.unstable_NormalPriority,Qi={$$typeof:C,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function $i(){return{controller:new Yi,data:new Map,refCount:0}}function ea(e){e.refCount--,e.refCount===0&&Xi(Zi,function(){e.controller.abort()})}var ta=null,na=0,ra=0,ia=null;function aa(e,t){if(ta===null){var n=ta=[];na=0,ra=ud(),ia={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return na++,t.then(oa,oa),t}function oa(){if(--na===0&&ta!==null){ia!==null&&(ia.status=`fulfilled`);var e=ta;ta=null,ra=0,ia=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function sa(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var ca=I.S;I.S=function(e,t){Ql=be(),typeof t==`object`&&t&&typeof t.then==`function`&&aa(e,t),ca!==null&&ca(e,t)};var la=V(null);function ua(){var e=la.current;return e===null?Fl.pooledCache:e}function da(e,t){t===null?U(la,la.current):U(la,t.pool)}function fa(){var e=ua();return e===null?null:{parent:Qi._currentValue,pool:e}}var pa=Error(o(460)),ma=Error(o(474)),ha=Error(o(542)),ga={then:function(){}};function _a(e){return e=e.status,e===`fulfilled`||e===`rejected`}function va(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(qt,qt),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Sa(e),e;default:if(typeof t.status==`string`)t.then(qt,qt);else{if(e=Fl,e!==null&&100<e.shellSuspendCounter)throw Error(o(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Sa(e),e}throw ba=t,pa}}function ya(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(ba=e,pa):e}}var ba=null;function xa(){if(ba===null)throw Error(o(459));var e=ba;return ba=null,e}function Sa(e){if(e===pa||e===ha)throw Error(o(483))}var Ca=null,wa=0;function Ta(e){var t=wa;return wa+=1,Ca===null&&(Ca=[]),va(Ca,e,t)}function Ea(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function Da(e,t){throw t.$$typeof===g?Error(o(525)):(e=Object.prototype.toString.call(t),Error(o(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function Oa(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function i(e,t){return e=ni(e,t),e.index=0,e.sibling=null,e}function a(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=67108866,n):(r=r.index,r<n?(t.flags|=67108866,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=67108866),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=oi(n,e.mode,r),t.return=e,t):(t=i(t,n),t.return=e,t)}function l(e,t,n,r){var a=n.type;return a===y?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===a||typeof a==`object`&&a&&a.$$typeof===O&&ya(a)===t.type)?(t=i(t,n.props),Ea(t,n),t.return=e,t):(t=ii(n.type,n.key,n.props,null,e.mode,r),Ea(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=ci(n,e.mode,r),t.return=e,t):(t=i(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,a){return t===null||t.tag!==7?(t=ai(n,e.mode,r,a),t.return=e,t):(t=i(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=oi(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case _:return n=ii(t.type,t.key,t.props,null,e.mode,n),Ea(n,t),n.return=e,n;case v:return t=ci(t,e.mode,n),t.return=e,t;case O:return t=ya(t),f(e,t,n)}if(F(t)||M(t))return t=ai(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,Ta(t),n);if(t.$$typeof===C)return f(e,qi(e,t),n);Da(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case _:return n.key===i?l(e,t,n,r):null;case v:return n.key===i?u(e,t,n,r):null;case O:return n=ya(n),p(e,t,n,r)}if(F(n)||M(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,Ta(n),r);if(n.$$typeof===C)return p(e,t,qi(e,n),r);Da(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case _:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case v:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case O:return r=ya(r),m(e,t,n,r,i)}if(F(r)||M(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,Ta(r),i);if(r.$$typeof===C)return m(e,t,n,qi(t,r),i);Da(t,r)}return null}function h(i,o,s,c){for(var l=null,u=null,d=o,h=o=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),o=a(_,o,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),J&&bi(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(o=a(d,o,h),u===null?l=d:u.sibling=d,u=d);return J&&bi(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),o=a(g,o,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),J&&bi(i,h),l}function g(i,s,c,l){if(c==null)throw Error(o(151));for(var u=null,d=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(i,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(i,h),s=a(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(i,h),J&&bi(i,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(i,v.value,l),v!==null&&(s=a(v,s,g),d===null?u=v:d.sibling=v,d=v);return J&&bi(i,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,i,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),s=a(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(i,e)}),J&&bi(i,g),u}function b(e,r,a,c){if(typeof a==`object`&&a&&a.type===y&&a.key===null&&(a=a.props.children),typeof a==`object`&&a){switch(a.$$typeof){case _:a:{for(var l=a.key;r!==null;){if(r.key===l){if(l=a.type,l===y){if(r.tag===7){n(e,r.sibling),c=i(r,a.props.children),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===O&&ya(l)===r.type){n(e,r.sibling),c=i(r,a.props),Ea(c,a),c.return=e,e=c;break a}n(e,r);break}else t(e,r);r=r.sibling}a.type===y?(c=ai(a.props.children,e.mode,c,a.key),c.return=e,e=c):(c=ii(a.type,a.key,a.props,null,e.mode,c),Ea(c,a),c.return=e,e=c)}return s(e);case v:a:{for(l=a.key;r!==null;){if(r.key===l)if(r.tag===4&&r.stateNode.containerInfo===a.containerInfo&&r.stateNode.implementation===a.implementation){n(e,r.sibling),c=i(r,a.children||[]),c.return=e,e=c;break a}else{n(e,r);break}else t(e,r);r=r.sibling}c=ci(a,e.mode,c),c.return=e,e=c}return s(e);case O:return a=ya(a),b(e,r,a,c)}if(F(a))return h(e,r,a,c);if(M(a)){if(l=M(a),typeof l!=`function`)throw Error(o(150));return a=l.call(a),g(e,r,a,c)}if(typeof a.then==`function`)return b(e,r,Ta(a),c);if(a.$$typeof===C)return b(e,r,qi(e,a),c);Da(e,a)}return typeof a==`string`&&a!==``||typeof a==`number`||typeof a==`bigint`?(a=``+a,r!==null&&r.tag===6?(n(e,r.sibling),c=i(r,a),c.return=e,e=c):(n(e,r),c=oi(a,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{wa=0;var i=b(e,t,n,r);return Ca=null,i}catch(t){if(t===pa||t===ha)throw t;var a=ei(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var ka=Oa(!0),Aa=Oa(!1),ja=!1;function Ma(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Na(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Pa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Fa(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,X&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=Zr(e),Xr(e,null,n),t}return qr(e,r,t,n),Zr(e)}function Ia(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,qe(e,n)}}function La(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Ra=!1;function za(){if(Ra){var e=ia;if(e!==null)throw e}}function Ba(e,t,n,r){Ra=!1;var i=e.updateQueue;ja=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(Q&f)===f:(r&f)===f){f!==0&&f===ra&&(Ra=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var m=e,g=s;f=t;var _=n;switch(g.tag){case 1:if(m=g.payload,typeof m==`function`){d=m.call(_,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=g.payload,f=typeof m==`function`?m.call(_,d,f):m,f==null)break a;d=h({},d,f);break a;case 2:ja=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),Ul|=o,e.lanes=o,e.memoizedState=d}}function Va(e,t){if(typeof e!=`function`)throw Error(o(191,e));e.call(t)}function Ha(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Va(n[e],t)}var Ua=V(null),Wa=V(0);function Ga(e,t){e=Vl,U(Wa,e),U(Ua,t),Vl=e|t.baseLanes}function Ka(){U(Wa,Vl),U(Ua,Ua.current)}function qa(){Vl=Wa.current,H(Ua),H(Wa)}var Ja=V(null),Ya=null;function Xa(e){var t=e.alternate;U(to,to.current&1),U(Ja,e),Ya===null&&(t===null||Ua.current!==null||t.memoizedState!==null)&&(Ya=e)}function Za(e){U(to,to.current),U(Ja,e),Ya===null&&(Ya=e)}function Qa(e){e.tag===22?(U(to,to.current),U(Ja,e),Ya===null&&(Ya=e)):$a(e)}function $a(){U(to,to.current),U(Ja,Ja.current)}function eo(e){H(Ja),Ya===e&&(Ya=null),H(to)}var to=V(0);function no(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||af(n)||of(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder===`forwards`||t.memoizedProps.revealOrder===`backwards`||t.memoizedProps.revealOrder===`unstable_legacy-backwards`||t.memoizedProps.revealOrder===`together`)){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ro=0,Y=null,io=null,ao=null,oo=!1,so=!1,co=!1,lo=0,uo=0,fo=null,po=0;function mo(){throw Error(o(321))}function ho(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!mr(e[n],t[n]))return!1;return!0}function go(e,t,n,r,i,a){return ro=a,Y=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,I.H=e===null||e.memoizedState===null?Ns:Ps,co=!1,a=n(r,i),co=!1,so&&(a=vo(t,n,r,i)),_o(e),a}function _o(e){I.H=Ms;var t=io!==null&&io.next!==null;if(ro=0,ao=io=Y=null,oo=!1,uo=0,fo=null,t)throw Error(o(300));e===null||Zs||(e=e.dependencies,e!==null&&Wi(e)&&(Zs=!0))}function vo(e,t,n,r){Y=e;var i=0;do{if(so&&(fo=null),uo=0,so=!1,25<=i)throw Error(o(301));if(i+=1,ao=io=null,e.updateQueue!=null){var a=e.updateQueue;a.lastEffect=null,a.events=null,a.stores=null,a.memoCache!=null&&(a.memoCache.index=0)}I.H=Fs,a=t(n,r)}while(so);return a}function yo(){var e=I.H,t=e.useState()[0];return t=typeof t.then==`function`?Eo(t):t,e=e.useState()[0],(io===null?null:io.memoizedState)!==e&&(Y.flags|=1024),t}function bo(){var e=lo!==0;return lo=0,e}function xo(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function So(e){if(oo){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}oo=!1}ro=0,ao=io=Y=null,so=!1,uo=lo=0,fo=null}function Co(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ao===null?Y.memoizedState=ao=e:ao=ao.next=e,ao}function wo(){if(io===null){var e=Y.alternate;e=e===null?null:e.memoizedState}else e=io.next;var t=ao===null?Y.memoizedState:ao.next;if(t!==null)ao=t,io=e;else{if(e===null)throw Y.alternate===null?Error(o(467)):Error(o(310));io=e,e={memoizedState:io.memoizedState,baseState:io.baseState,baseQueue:io.baseQueue,queue:io.queue,next:null},ao===null?Y.memoizedState=ao=e:ao=ao.next=e}return ao}function To(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Eo(e){var t=uo;return uo+=1,fo===null&&(fo=[]),e=va(fo,e,t),t=Y,(ao===null?t.memoizedState:ao.next)===null&&(t=t.alternate,I.H=t===null||t.memoizedState===null?Ns:Ps),e}function Do(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return Eo(e);if(e.$$typeof===C)return Ki(e)}throw Error(o(438,String(e)))}function Oo(e){var t=null,n=Y.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=Y.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=To(),Y.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=A;return t.index++,n}function ko(e,t){return typeof t==`function`?t(e):t}function Ao(e){return jo(wo(),io,e)}function jo(e,t,n){var r=e.queue;if(r===null)throw Error(o(311));r.lastRenderedReducer=n;var i=e.baseQueue,a=r.pending;if(a!==null){if(i!==null){var s=i.next;i.next=a.next,a.next=s}t.baseQueue=i=a,r.pending=null}if(a=e.baseState,i===null)e.memoizedState=a;else{t=i.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(ro&f)===f:(Q&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===ra&&(d=!0);else if((ro&p)===p){u=u.next,p===ra&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=a):l=l.next=f,Y.lanes|=p,Ul|=p;f=u.action,co&&n(a,f),a=u.hasEagerState?u.eagerState:n(a,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=a):l=l.next=p,Y.lanes|=f,Ul|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=a:l.next=c,!mr(a,e.memoizedState)&&(Zs=!0,d&&(n=ia,n!==null)))throw n;e.memoizedState=a,e.baseState=s,e.baseQueue=l,r.lastRenderedState=a}return i===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Mo(e){var t=wo(),n=t.queue;if(n===null)throw Error(o(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,a=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do a=e(a,s.action),s=s.next;while(s!==i);mr(a,t.memoizedState)||(Zs=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function No(e,t,n){var r=Y,i=wo(),a=J;if(a){if(n===void 0)throw Error(o(407));n=n()}else n=t();var s=!mr((io||i).memoizedState,n);if(s&&(i.memoizedState=n,Zs=!0),i=i.queue,is(Io.bind(null,r,i,e),[e]),i.getSnapshot!==t||s||ao!==null&&ao.memoizedState.tag&1){if(r.flags|=2048,$o(9,{destroy:void 0},Fo.bind(null,r,i,n,t),null),Fl===null)throw Error(o(349));a||ro&127||Po(r,t,n)}return n}function Po(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Y.updateQueue,t===null?(t=To(),Y.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Fo(e,t,n,r){t.value=n,t.getSnapshot=r,Lo(t)&&Ro(e)}function Io(e,t,n){return n(function(){Lo(t)&&Ro(e)})}function Lo(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!mr(e,n)}catch{return!0}}function Ro(e){var t=Yr(e,2);t!==null&&pu(t,e,2)}function zo(e){var t=Co();if(typeof e==`function`){var n=e;if(e=n(),co){Ae(!0);try{n()}finally{Ae(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ko,lastRenderedState:e},t}function Bo(e,t,n,r){return e.baseState=n,jo(e,io,typeof r==`function`?r:ko)}function Vo(e,t,n,r,i){if(ks(e))throw Error(o(485));if(e=t.action,e!==null){var a={payload:i,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){a.listeners.push(e)}};I.T===null?a.isTransition=!1:n(!0),r(a),n=t.pending,n===null?(a.next=t.pending=a,Ho(t,a)):(a.next=n.next,t.pending=n.next=a)}}function Ho(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=I.T,o={};I.T=o;try{var s=n(i,r),c=I.S;c!==null&&c(o,s),Uo(e,t,s)}catch(n){Go(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),I.T=a}}else try{a=n(i,r),Uo(e,t,a)}catch(n){Go(e,t,n)}}function Uo(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){Wo(e,t,n)},function(n){return Go(e,t,n)}):Wo(e,t,n)}function Wo(e,t,n){t.status=`fulfilled`,t.value=n,Ko(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Ho(e,n)))}function Go(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,Ko(t),t=t.next;while(t!==r)}e.action=null}function Ko(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function qo(e,t){return t}function Jo(e,t){if(J){var n=Fl.formState;if(n!==null){a:{var r=Y;if(J){if(q){b:{for(var i=q,a=Di;i.nodeType!==8;){if(!a){i=null;break b}if(i=cf(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){q=cf(i.nextSibling),r=i.data===`F!`;break a}}ki(r)}r=!1}r&&(t=n[0])}}return n=Co(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:qo,lastRenderedState:t},n.queue=r,n=Es.bind(null,Y,r),r.dispatch=n,r=zo(!1),a=Os.bind(null,Y,!1,r.queue),r=Co(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=Vo.bind(null,Y,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function Yo(e){return Xo(wo(),io,e)}function Xo(e,t,n){if(t=jo(e,t,qo)[0],e=Ao(ko)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=Eo(t)}catch(e){throw e===pa?ha:e}else r=t;t=wo();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(Y.flags|=2048,$o(9,{destroy:void 0},Zo.bind(null,i,n),null)),[r,a,e]}function Zo(e,t){e.action=t}function Qo(e){var t=wo(),n=io;if(n!==null)return Xo(t,n,e);wo(),t=t.memoizedState,n=wo();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function $o(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=Y.updateQueue,t===null&&(t=To(),Y.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function es(){return wo().memoizedState}function ts(e,t,n,r){var i=Co();Y.flags|=e,i.memoizedState=$o(1|t,{destroy:void 0},n,r===void 0?null:r)}function ns(e,t,n,r){var i=wo();r=r===void 0?null:r;var a=i.memoizedState.inst;io!==null&&r!==null&&ho(r,io.memoizedState.deps)?i.memoizedState=$o(t,a,n,r):(Y.flags|=e,i.memoizedState=$o(1|t,a,n,r))}function rs(e,t){ts(8390656,8,e,t)}function is(e,t){ns(2048,8,e,t)}function as(e){Y.flags|=4;var t=Y.updateQueue;if(t===null)t=To(),Y.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function os(e){var t=wo().memoizedState;return as({ref:t,nextImpl:e}),function(){if(X&2)throw Error(o(440));return t.impl.apply(void 0,arguments)}}function ss(e,t){return ns(4,2,e,t)}function cs(e,t){return ns(4,4,e,t)}function ls(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function us(e,t,n){n=n==null?null:n.concat([e]),ns(4,4,ls.bind(null,t,e),n)}function ds(){}function fs(e,t){var n=wo();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&ho(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function ps(e,t){var n=wo();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&ho(t,r[1]))return r[0];if(r=e(),co){Ae(!0);try{e()}finally{Ae(!1)}}return n.memoizedState=[r,t],r}function ms(e,t,n){return n===void 0||ro&1073741824&&!(Q&261930)?e.memoizedState=t:(e.memoizedState=n,e=fu(),Y.lanes|=e,Ul|=e,n)}function hs(e,t,n,r){return mr(n,t)?n:Ua.current===null?!(ro&42)||ro&1073741824&&!(Q&261930)?(Zs=!0,e.memoizedState=n):(e=fu(),Y.lanes|=e,Ul|=e,t):(e=ms(e,n,r),mr(e,t)||(Zs=!0),e)}function gs(e,t,n,r,i){var a=L.p;L.p=a!==0&&8>a?a:8;var o=I.T,s={};I.T=s,Os(e,!1,t,n);try{var c=i(),l=I.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?Ds(e,t,sa(c,r),du(e)):Ds(e,t,r,du(e))}catch(n){Ds(e,t,{then:function(){},status:`rejected`,reason:n},du())}finally{L.p=a,o!==null&&s.types!==null&&(o.types=s.types),I.T=o}}function _s(){}function vs(e,t,n,r){if(e.tag!==5)throw Error(o(476));var i=ys(e).queue;gs(e,i,t,R,n===null?_s:function(){return bs(e),n(r)})}function ys(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:R,baseState:R,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ko,lastRenderedState:R},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ko,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function bs(e){var t=ys(e);t.next===null&&(t=e.alternate.memoizedState),Ds(e,t.next.queue,{},du())}function xs(){return Ki(Qf)}function Ss(){return wo().memoizedState}function Cs(){return wo().memoizedState}function ws(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=du();e=Pa(n);var r=Fa(t,e,n);r!==null&&(pu(r,t,n),Ia(r,t,n)),t={cache:$i()},e.payload=t;return}t=t.return}}function Ts(e,t,n){var r=du();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},ks(e)?As(t,n):(n=Jr(e,t,n,r),n!==null&&(pu(n,e,r),js(n,t,r)))}function Es(e,t,n){Ds(e,t,n,du())}function Ds(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(ks(e))As(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,mr(s,o))return qr(e,t,i,0),Fl===null&&Kr(),!1}catch{}if(n=Jr(e,t,i,r),n!==null)return pu(n,e,r),js(n,t,r),!0}return!1}function Os(e,t,n,r){if(r={lane:2,revertLane:ud(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},ks(e)){if(t)throw Error(o(479))}else t=Jr(e,n,r,2),t!==null&&pu(t,e,2)}function ks(e){var t=e.alternate;return e===Y||t!==null&&t===Y}function As(e,t){so=oo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function js(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,qe(e,n)}}var Ms={readContext:Ki,use:Do,useCallback:mo,useContext:mo,useEffect:mo,useImperativeHandle:mo,useLayoutEffect:mo,useInsertionEffect:mo,useMemo:mo,useReducer:mo,useRef:mo,useState:mo,useDebugValue:mo,useDeferredValue:mo,useTransition:mo,useSyncExternalStore:mo,useId:mo,useHostTransitionStatus:mo,useFormState:mo,useActionState:mo,useOptimistic:mo,useMemoCache:mo,useCacheRefresh:mo};Ms.useEffectEvent=mo;var Ns={readContext:Ki,use:Do,useCallback:function(e,t){return Co().memoizedState=[e,t===void 0?null:t],e},useContext:Ki,useEffect:rs,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),ts(4194308,4,ls.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ts(4194308,4,e,t)},useInsertionEffect:function(e,t){ts(4,2,e,t)},useMemo:function(e,t){var n=Co();t=t===void 0?null:t;var r=e();if(co){Ae(!0);try{e()}finally{Ae(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=Co();if(n!==void 0){var i=n(t);if(co){Ae(!0);try{n(t)}finally{Ae(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=Ts.bind(null,Y,e),[r.memoizedState,e]},useRef:function(e){var t=Co();return e={current:e},t.memoizedState=e},useState:function(e){e=zo(e);var t=e.queue,n=Es.bind(null,Y,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:ds,useDeferredValue:function(e,t){return ms(Co(),e,t)},useTransition:function(){var e=zo(!1);return e=gs.bind(null,Y,e.queue,!0,!1),Co().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=Y,i=Co();if(J){if(n===void 0)throw Error(o(407));n=n()}else{if(n=t(),Fl===null)throw Error(o(349));Q&127||Po(r,t,n)}i.memoizedState=n;var a={value:n,getSnapshot:t};return i.queue=a,rs(Io.bind(null,r,a,e),[e]),r.flags|=2048,$o(9,{destroy:void 0},Fo.bind(null,r,a,n,t),null),n},useId:function(){var e=Co(),t=Fl.identifierPrefix;if(J){var n=yi,r=vi;n=(r&~(1<<32-je(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=lo++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=po++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:xs,useFormState:Jo,useActionState:Jo,useOptimistic:function(e){var t=Co();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Os.bind(null,Y,!0,n),n.dispatch=t,[e,t]},useMemoCache:Oo,useCacheRefresh:function(){return Co().memoizedState=ws.bind(null,Y)},useEffectEvent:function(e){var t=Co(),n={impl:e};return t.memoizedState=n,function(){if(X&2)throw Error(o(440));return n.impl.apply(void 0,arguments)}}},Ps={readContext:Ki,use:Do,useCallback:fs,useContext:Ki,useEffect:is,useImperativeHandle:us,useInsertionEffect:ss,useLayoutEffect:cs,useMemo:ps,useReducer:Ao,useRef:es,useState:function(){return Ao(ko)},useDebugValue:ds,useDeferredValue:function(e,t){return hs(wo(),io.memoizedState,e,t)},useTransition:function(){var e=Ao(ko)[0],t=wo().memoizedState;return[typeof e==`boolean`?e:Eo(e),t]},useSyncExternalStore:No,useId:Ss,useHostTransitionStatus:xs,useFormState:Yo,useActionState:Yo,useOptimistic:function(e,t){return Bo(wo(),io,e,t)},useMemoCache:Oo,useCacheRefresh:Cs};Ps.useEffectEvent=os;var Fs={readContext:Ki,use:Do,useCallback:fs,useContext:Ki,useEffect:is,useImperativeHandle:us,useInsertionEffect:ss,useLayoutEffect:cs,useMemo:ps,useReducer:Mo,useRef:es,useState:function(){return Mo(ko)},useDebugValue:ds,useDeferredValue:function(e,t){var n=wo();return io===null?ms(n,e,t):hs(n,io.memoizedState,e,t)},useTransition:function(){var e=Mo(ko)[0],t=wo().memoizedState;return[typeof e==`boolean`?e:Eo(e),t]},useSyncExternalStore:No,useId:Ss,useHostTransitionStatus:xs,useFormState:Qo,useActionState:Qo,useOptimistic:function(e,t){var n=wo();return io===null?(n.baseState=e,[e,n.queue.dispatch]):Bo(n,io,e,t)},useMemoCache:Oo,useCacheRefresh:Cs};Fs.useEffectEvent=os;function Is(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:h({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ls={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=du(),i=Pa(r);i.payload=t,n!=null&&(i.callback=n),t=Fa(e,i,r),t!==null&&(pu(t,e,r),Ia(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=du(),i=Pa(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Fa(e,i,r),t!==null&&(pu(t,e,r),Ia(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=du(),r=Pa(n);r.tag=2,t!=null&&(r.callback=t),t=Fa(e,r,n),t!==null&&(pu(t,e,n),Ia(t,e,n))}};function Rs(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!hr(n,r)||!hr(i,a):!0}function zs(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ls.enqueueReplaceState(t,t.state,null)}function Bs(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=h({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function Vs(e){Hr(e)}function Hs(e){console.error(e)}function Us(e){Hr(e)}function Ws(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function Gs(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function Ks(e,t,n){return n=Pa(n),n.tag=3,n.payload={element:null},n.callback=function(){Ws(e,t)},n}function qs(e){return e=Pa(e),e.tag=3,e}function Js(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){Gs(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){Gs(t,n,r),typeof i!=`function`&&(tu===null?tu=new Set([this]):tu.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function Ys(e,t,n,r,i){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&Ui(t,n,i,!0),n=Ja.current,n!==null){switch(n.tag){case 31:case 13:return Ya===null?Tu():n.alternate===null&&Hl===0&&(Hl=3),n.flags&=-257,n.flags|=65536,n.lanes=i,r===ga?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),Wu(e,r,i)),!1;case 22:return n.flags|=65536,r===ga?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),Wu(e,r,i)),!1}throw Error(o(435,n.tag))}return Wu(e,r,i),Tu(),!1}if(J)return t=Ja.current,t===null?(r!==Oi&&(t=Error(o(423),{cause:r}),Fi(ui(t,n))),e=e.current.alternate,e.flags|=65536,i&=-i,e.lanes|=i,r=ui(r,n),i=Ks(e.stateNode,r,i),La(e,i),Hl!==4&&(Hl=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=i,r!==Oi&&(e=Error(o(422),{cause:r}),Fi(ui(e,n)))),!1;var a=Error(o(520),{cause:r});if(a=ui(a,n),Jl===null?Jl=[a]:Jl.push(a),Hl!==4&&(Hl=2),t===null)return!0;r=ui(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=i&-i,n.lanes|=e,e=Ks(n.stateNode,r,e),La(n,e),!1;case 1:if(t=n.type,a=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||a!==null&&typeof a.componentDidCatch==`function`&&(tu===null||!tu.has(a))))return n.flags|=65536,i&=-i,n.lanes|=i,i=qs(i),Js(i,e,n,r),La(n,i),!1}n=n.return}while(n!==null);return!1}var Xs=Error(o(461)),Zs=!1;function Qs(e,t,n,r){t.child=e===null?Aa(t,null,n,r):ka(t,e.child,n,r)}function $s(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return Gi(t),r=go(e,t,n,o,a,i),s=bo(),e!==null&&!Zs?(xo(e,t,i),Cc(e,t,i)):(J&&s&&Si(t),t.flags|=1,Qs(e,t,r,i),t.child)}function ec(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!ti(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,tc(e,t,a,r,i)):(e=ii(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!wc(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?hr:n,n(o,r)&&e.ref===t.ref)return Cc(e,t,i)}return t.flags|=1,e=ni(a,r),e.ref=t.ref,e.return=t,t.child=e}function tc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(hr(a,r)&&e.ref===t.ref)if(Zs=!1,t.pendingProps=r=a,wc(e,i))e.flags&131072&&(Zs=!0);else return t.lanes=e.lanes,Cc(e,t,i)}return lc(e,t,n,r,i)}function nc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return ic(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&da(t,a===null?null:a.cachePool),a===null?Ka():Ga(t,a),Qa(t);else return r=t.lanes=536870912,ic(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&da(t,null),Ka(),$a(t)):(da(t,a.cachePool),Ga(t,a),$a(t),t.memoizedState=null);return Qs(e,t,i,n),t.child}function rc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function ic(e,t,n,r,i){var a=ua();return a=a===null?null:{parent:Qi._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&da(t,null),Ka(),Qa(t),e!==null&&Ui(e,t,r,!0),t.childLanes=i,null}function ac(e,t){return t=vc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function oc(e,t,n){return ka(t,e.child,null,n),e=ac(t,t.pendingProps),e.flags|=2,eo(t),t.memoizedState=null,e}function sc(e,t,n){var r=t.pendingProps,i=(t.flags&128)!=0;if(t.flags&=-129,e===null){if(J){if(r.mode===`hidden`)return e=ac(t,r),t.lanes=536870912,rc(null,e);if(Za(t),(e=q)?(e=rf(e,Di),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:_i===null?null:{id:vi,overflow:yi},retryLane:536870912,hydrationErrors:null},n=si(e),n.return=t,t.child=n,Ti=t,q=null)):e=null,e===null)throw ki(t);return t.lanes=536870912,null}return ac(t,r)}var a=e.memoizedState;if(a!==null){var s=a.dehydrated;if(Za(t),i)if(t.flags&256)t.flags&=-257,t=oc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(o(558));else if(Zs||Ui(e,t,n,!1),i=(n&e.childLanes)!==0,Zs||i){if(r=Fl,r!==null&&(s=Je(r,n),s!==0&&s!==a.retryLane))throw a.retryLane=s,Yr(e,s),pu(r,e,s),Xs;Tu(),t=oc(e,t,n)}else e=a.treeContext,q=cf(s.nextSibling),Ti=t,J=!0,Ei=null,Di=!1,e!==null&&wi(t,e),t=ac(t,r),t.flags|=4096;return t}return e=ni(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function cc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(o(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function lc(e,t,n,r,i){return Gi(t),n=go(e,t,n,r,void 0,i),r=bo(),e!==null&&!Zs?(xo(e,t,i),Cc(e,t,i)):(J&&r&&Si(t),t.flags|=1,Qs(e,t,n,i),t.child)}function uc(e,t,n,r,i,a){return Gi(t),t.updateQueue=null,n=vo(t,r,n,i),_o(e),r=bo(),e!==null&&!Zs?(xo(e,t,a),Cc(e,t,a)):(J&&r&&Si(t),t.flags|=1,Qs(e,t,n,a),t.child)}function dc(e,t,n,r,i){if(Gi(t),t.stateNode===null){var a=Qr,o=n.contextType;typeof o==`object`&&o&&(a=Ki(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Ls,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},Ma(t),o=n.contextType,a.context=typeof o==`object`&&o?Ki(o):Qr,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(Is(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&Ls.enqueueReplaceState(a,a.state,null),Ba(t,r,a,i),za(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=Bs(n,s);a.props=c;var l=a.context,u=n.contextType;o=Qr,typeof u==`object`&&u&&(o=Ki(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&zs(t,a,r,o),ja=!1;var f=t.memoizedState;a.state=f,Ba(t,r,a,i),za(),l=t.memoizedState,s||f!==l||ja?(typeof d==`function`&&(Is(t,n,d,r),l=t.memoizedState),(c=ja||Rs(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Na(e,t),o=t.memoizedProps,u=Bs(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=Qr,typeof l==`object`&&l&&(c=Ki(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&zs(t,a,r,c),ja=!1,f=t.memoizedState,a.state=f,Ba(t,r,a,i),za();var p=t.memoizedState;o!==d||f!==p||ja||e!==null&&e.dependencies!==null&&Wi(e.dependencies)?(typeof s==`function`&&(Is(t,n,s,r),p=t.memoizedState),(u=ja||Rs(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&Wi(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,cc(e,t),r=(t.flags&128)!=0,a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=ka(t,e.child,null,i),t.child=ka(t,null,n,i)):Qs(e,t,n,i),t.memoizedState=a.state,e=t.child):e=Cc(e,t,i),e}function fc(e,t,n,r){return Ni(),t.flags|=256,Qs(e,t,n,r),t.child}var pc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function mc(e){return{baseLanes:e,cachePool:fa()}}function hc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=Kl),e}function gc(e,t,n){var r=t.pendingProps,i=!1,a=(t.flags&128)!=0,s;if((s=a)||(s=e!==null&&e.memoizedState===null?!1:(to.current&2)!=0),s&&(i=!0,t.flags&=-129),s=(t.flags&32)!=0,t.flags&=-33,e===null){if(J){if(i?Xa(t):$a(t),(e=q)?(e=rf(e,Di),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:_i===null?null:{id:vi,overflow:yi},retryLane:536870912,hydrationErrors:null},n=si(e),n.return=t,t.child=n,Ti=t,q=null)):e=null,e===null)throw ki(t);return of(e)?t.lanes=32:t.lanes=536870912,null}var c=r.children;return r=r.fallback,i?($a(t),i=t.mode,c=vc({mode:`hidden`,children:c},i),r=ai(r,i,n,null),c.return=t,r.return=t,c.sibling=r,t.child=c,r=t.child,r.memoizedState=mc(n),r.childLanes=hc(e,s,n),t.memoizedState=pc,rc(null,r)):(Xa(t),_c(t,c))}var l=e.memoizedState;if(l!==null&&(c=l.dehydrated,c!==null)){if(a)t.flags&256?(Xa(t),t.flags&=-257,t=yc(e,t,n)):t.memoizedState===null?($a(t),c=r.fallback,i=t.mode,r=vc({mode:`visible`,children:r.children},i),c=ai(c,i,n,null),c.flags|=2,r.return=t,c.return=t,r.sibling=c,t.child=r,ka(t,e.child,null,n),r=t.child,r.memoizedState=mc(n),r.childLanes=hc(e,s,n),t.memoizedState=pc,t=rc(null,r)):($a(t),t.child=e.child,t.flags|=128,t=null);else if(Xa(t),of(c)){if(s=c.nextSibling&&c.nextSibling.dataset,s)var u=s.dgst;s=u,r=Error(o(419)),r.stack=``,r.digest=s,Fi({value:r,source:null,stack:null}),t=yc(e,t,n)}else if(Zs||Ui(e,t,n,!1),s=(n&e.childLanes)!==0,Zs||s){if(s=Fl,s!==null&&(r=Je(s,n),r!==0&&r!==l.retryLane))throw l.retryLane=r,Yr(e,r),pu(s,e,r),Xs;af(c)||Tu(),t=yc(e,t,n)}else af(c)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,q=cf(c.nextSibling),Ti=t,J=!0,Ei=null,Di=!1,e!==null&&wi(t,e),t=_c(t,r.children),t.flags|=4096);return t}return i?($a(t),c=r.fallback,i=t.mode,l=e.child,u=l.sibling,r=ni(l,{mode:`hidden`,children:r.children}),r.subtreeFlags=l.subtreeFlags&65011712,u===null?(c=ai(c,i,n,null),c.flags|=2):c=ni(u,c),c.return=t,r.return=t,r.sibling=c,t.child=r,rc(null,r),r=t.child,c=e.child.memoizedState,c===null?c=mc(n):(i=c.cachePool,i===null?i=fa():(l=Qi._currentValue,i=i.parent===l?i:{parent:l,pool:l}),c={baseLanes:c.baseLanes|n,cachePool:i}),r.memoizedState=c,r.childLanes=hc(e,s,n),t.memoizedState=pc,rc(e.child,r)):(Xa(t),n=e.child,e=n.sibling,n=ni(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=n,t.memoizedState=null,n)}function _c(e,t){return t=vc({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function vc(e,t){return e=ei(22,e,null,t),e.lanes=0,e}function yc(e,t,n){return ka(t,e.child,null,n),e=_c(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function bc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Vi(e.return,t,n)}function xc(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function Sc(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=to.current,s=(o&2)!=0;if(s?(o=o&1|2,t.flags|=128):o&=1,U(to,o),Qs(e,t,r,n),r=J?mi:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&bc(e,n,t);else if(e.tag===19)bc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&no(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),xc(t,!1,i,n,a,r);break;case`backwards`:case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&no(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}xc(t,!0,n,null,a,r);break;case`together`:xc(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function Cc(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Ul|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Ui(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(o(153));if(t.child!==null){for(e=t.child,n=ni(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=ni(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function wc(e,t){return(e.lanes&t)===0?(e=e.dependencies,!!(e!==null&&Wi(e))):!0}function Tc(e,t,n){switch(t.tag){case 3:ie(t,t.stateNode.containerInfo),zi(t,Qi,e.memoizedState.cache),Ni();break;case 27:case 5:oe(t);break;case 4:ie(t,t.stateNode.containerInfo);break;case 10:zi(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Za(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(Xa(t),e=Cc(e,t,n),e===null?null:e.sibling):gc(e,t,n):(Xa(t),t.flags|=128,null);Xa(t);break;case 19:var i=(e.flags&128)!=0;if(r=(n&t.childLanes)!==0,r||=(Ui(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return Sc(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),U(to,to.current),r)break;return null;case 22:return t.lanes=0,nc(e,t,n,t.pendingProps);case 24:zi(t,Qi,e.memoizedState.cache)}return Cc(e,t,n)}function Ec(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)Zs=!0;else{if(!wc(e,n)&&!(t.flags&128))return Zs=!1,Tc(e,t,n);Zs=!!(e.flags&131072)}else Zs=!1,J&&t.flags&1048576&&xi(t,mi,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=ya(t.elementType),t.type=e,typeof e==`function`)ti(e)?(r=Bs(e,r),t.tag=1,t=dc(null,t,e,r,n)):(t.tag=0,t=lc(null,t,e,r,n));else{if(e!=null){var i=e.$$typeof;if(i===w){t.tag=11,t=$s(null,t,e,r,n);break a}else if(i===D){t.tag=14,t=ec(null,t,e,r,n);break a}}throw t=P(e)||e,Error(o(306,t,``))}}return t;case 0:return lc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,i=Bs(r,t.pendingProps),dc(e,t,r,i,n);case 3:a:{if(ie(t,t.stateNode.containerInfo),e===null)throw Error(o(387));r=t.pendingProps;var a=t.memoizedState;i=a.element,Na(e,t),Ba(t,r,null,n);var s=t.memoizedState;if(r=s.cache,zi(t,Qi,r),r!==a.cache&&Hi(t,[Qi],n,!0),za(),r=s.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){t=fc(e,t,r,n);break a}else if(r!==i){i=ui(Error(o(424)),t),Fi(i),t=fc(e,t,r,n);break a}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(q=cf(e.firstChild),Ti=t,J=!0,Ei=null,Di=!0,n=Aa(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Ni(),r===i){t=Cc(e,t,n);break a}Qs(e,t,r,n)}t=t.child}return t;case 26:return cc(e,t),e===null?(n=kf(t.type,null,t.pendingProps,null))?t.memoizedState=n:J||(n=t.type,e=t.pendingProps,r=Bd(ne.current).createElement(n),r[et]=t,r[tt]=e,Pd(r,n,e),pt(r),t.stateNode=r):t.memoizedState=kf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return oe(t),e===null&&J&&(r=t.stateNode=ff(t.type,t.pendingProps,ne.current),Ti=t,Di=!0,i=q,Zd(t.type)?(lf=i,q=cf(r.firstChild)):q=i),Qs(e,t,t.pendingProps.children,n),cc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&J&&((i=r=q)&&(r=tf(r,t.type,t.pendingProps,Di),r===null?i=!1:(t.stateNode=r,Ti=t,q=cf(r.firstChild),Di=!1,i=!0)),i||ki(t)),oe(t),i=t.type,a=t.pendingProps,s=e===null?null:e.memoizedProps,r=a.children,Ud(i,a)?r=null:s!==null&&Ud(i,s)&&(t.flags|=32),t.memoizedState!==null&&(i=go(e,t,yo,null,null,n),Qf._currentValue=i),cc(e,t),Qs(e,t,r,n),t.child;case 6:return e===null&&J&&((e=n=q)&&(n=nf(n,t.pendingProps,Di),n===null?e=!1:(t.stateNode=n,Ti=t,q=null,e=!0)),e||ki(t)),null;case 13:return gc(e,t,n);case 4:return ie(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=ka(t,null,r,n):Qs(e,t,r,n),t.child;case 11:return $s(e,t,t.type,t.pendingProps,n);case 7:return Qs(e,t,t.pendingProps,n),t.child;case 8:return Qs(e,t,t.pendingProps.children,n),t.child;case 12:return Qs(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,zi(t,t.type,r.value),Qs(e,t,r.children,n),t.child;case 9:return i=t.type._context,r=t.pendingProps.children,Gi(t),i=Ki(i),r=r(i),t.flags|=1,Qs(e,t,r,n),t.child;case 14:return ec(e,t,t.type,t.pendingProps,n);case 15:return tc(e,t,t.type,t.pendingProps,n);case 19:return Sc(e,t,n);case 31:return sc(e,t,n);case 22:return nc(e,t,n,t.pendingProps);case 24:return Gi(t),r=Ki(Qi),e===null?(i=ua(),i===null&&(i=Fl,a=$i(),i.pooledCache=a,a.refCount++,a!==null&&(i.pooledCacheLanes|=n),i=a),t.memoizedState={parent:r,cache:i},Ma(t),zi(t,Qi,i)):((e.lanes&n)!==0&&(Na(e,t),Ba(t,null,null,n),za()),i=e.memoizedState,a=t.memoizedState,i.parent===r?(r=a.cache,zi(t,Qi,r),r!==i.cache&&Hi(t,[Qi],n,!0)):(i={parent:r,cache:r},t.memoizedState=i,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=i),zi(t,Qi,r))),Qs(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(o(156,t.tag))}function Dc(e){e.flags|=4}function Oc(e,t,n,r,i){if((t=(e.mode&32)!=0)&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(Su())e.flags|=8192;else throw ba=ga,ma}else e.flags&=-16777217}function kc(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Wf(t))if(Su())e.flags|=8192;else throw ba=ga,ma}function Ac(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:He(),e.lanes|=t,ql|=t)}function jc(e,t){if(!J)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Mc(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&65011712,r|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Nc(e,t,n){var r=t.pendingProps;switch(Ci(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Mc(t),null;case 1:return Mc(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),Bi(Qi),ae(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Mi(t)?Dc(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Pi())),Mc(t),null;case 26:var i=t.type,a=t.memoizedState;return e===null?(Dc(t),a===null?(Mc(t),Oc(t,i,null,r,n)):(Mc(t),kc(t,a))):a?a===e.memoizedState?(Mc(t),t.flags&=-16777217):(Dc(t),Mc(t),kc(t,a)):(e=e.memoizedProps,e!==r&&Dc(t),Mc(t),Oc(t,i,e,r,n)),null;case 27:if(se(t),n=ne.current,i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Dc(t);else{if(!r){if(t.stateNode===null)throw Error(o(166));return Mc(t),null}e=ee.current,Mi(t)?Ai(t,e):(e=ff(i,r,n),t.stateNode=e,Dc(t))}return Mc(t),null;case 5:if(se(t),i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Dc(t);else{if(!r){if(t.stateNode===null)throw Error(o(166));return Mc(t),null}if(a=ee.current,Mi(t))Ai(t,a);else{var s=Bd(ne.current);switch(a){case 1:a=s.createElementNS(`http://www.w3.org/2000/svg`,i);break;case 2:a=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,i);break;default:switch(i){case`svg`:a=s.createElementNS(`http://www.w3.org/2000/svg`,i);break;case`math`:a=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,i);break;case`script`:a=s.createElement(`div`),a.innerHTML=`<script><\/script>`,a=a.removeChild(a.firstChild);break;case`select`:a=typeof r.is==`string`?s.createElement(`select`,{is:r.is}):s.createElement(`select`),r.multiple?a.multiple=!0:r.size&&(a.size=r.size);break;default:a=typeof r.is==`string`?s.createElement(i,{is:r.is}):s.createElement(i)}}a[et]=t,a[tt]=r;a:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)a.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break a;for(;s.sibling===null;){if(s.return===null||s.return===t)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=a;a:switch(Pd(a,i,r),i){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&Dc(t)}}return Mc(t),Oc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&Dc(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(o(166));if(e=ne.current,Mi(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,i=Ti,i!==null)switch(i.tag){case 27:case 5:r=i.memoizedProps}e[et]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||jd(e.nodeValue,n)),e||ki(t,!0)}else e=Bd(e).createTextNode(r),e[et]=t,t.stateNode=e}return Mc(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=Mi(t),n!==null){if(e===null){if(!r)throw Error(o(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(o(557));e[et]=t}else Ni(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Mc(t),e=!1}else n=Pi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(eo(t),t):(eo(t),null);if(t.flags&128)throw Error(o(558))}return Mc(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(i=Mi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(o(318));if(i=t.memoizedState,i=i===null?null:i.dehydrated,!i)throw Error(o(317));i[et]=t}else Ni(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Mc(t),i=!1}else i=Pi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=i),i=!0;if(!i)return t.flags&256?(eo(t),t):(eo(t),null)}return eo(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,i=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(i=r.alternate.memoizedState.cachePool.pool),a=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(a=r.memoizedState.cachePool.pool),a!==i&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Ac(t,t.updateQueue),Mc(t),null);case 4:return ae(),e===null&&xd(t.stateNode.containerInfo),Mc(t),null;case 10:return Bi(t.type),Mc(t),null;case 19:if(H(to),r=t.memoizedState,r===null)return Mc(t),null;if(i=(t.flags&128)!=0,a=r.rendering,a===null)if(i)jc(r,!1);else{if(Hl!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=no(e),a!==null){for(t.flags|=128,jc(r,!1),e=a.updateQueue,t.updateQueue=e,Ac(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)ri(n,e),n=n.sibling;return U(to,to.current&1|2),J&&bi(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&be()>$l&&(t.flags|=128,i=!0,jc(r,!1),t.lanes=4194304)}else{if(!i)if(e=no(a),e!==null){if(t.flags|=128,i=!0,e=e.updateQueue,t.updateQueue=e,Ac(t,e),jc(r,!0),r.tail===null&&r.tailMode===`hidden`&&!a.alternate&&!J)return Mc(t),null}else 2*be()-r.renderingStartTime>$l&&n!==536870912&&(t.flags|=128,i=!0,jc(r,!1),t.lanes=4194304);r.isBackwards?(a.sibling=t.child,t.child=a):(e=r.last,e===null?t.child=a:e.sibling=a,r.last=a)}return r.tail===null?(Mc(t),null):(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=be(),e.sibling=null,n=to.current,U(to,i?n&1|2:n&1),J&&bi(t,r.treeForkCount),e);case 22:case 23:return eo(t),qa(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(Mc(t),t.subtreeFlags&6&&(t.flags|=8192)):Mc(t),n=t.updateQueue,n!==null&&Ac(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&H(la),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Bi(Qi),Mc(t),null;case 25:return null;case 30:return null}throw Error(o(156,t.tag))}function Pc(e,t){switch(Ci(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Bi(Qi),ae(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return se(t),null;case 31:if(t.memoizedState!==null){if(eo(t),t.alternate===null)throw Error(o(340));Ni()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(eo(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(o(340));Ni()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return H(to),null;case 4:return ae(),null;case 10:return Bi(t.type),null;case 22:case 23:return eo(t),qa(),e!==null&&H(la),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Bi(Qi),null;case 25:return null;default:return null}}function Fc(e,t){switch(Ci(t),t.tag){case 3:Bi(Qi),ae();break;case 26:case 27:case 5:se(t);break;case 4:ae();break;case 31:t.memoizedState!==null&&eo(t);break;case 13:eo(t);break;case 19:H(to);break;case 10:Bi(t.type);break;case 22:case 23:eo(t),qa(),e!==null&&H(la);break;case 24:Bi(Qi)}}function Ic(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){Uu(t,t.return,e)}}function Lc(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){Uu(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){Uu(t,t.return,e)}}function Rc(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Ha(t,n)}catch(t){Uu(e,e.return,t)}}}function zc(e,t,n){n.props=Bs(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){Uu(e,t,n)}}function Bc(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){Uu(e,t,n)}}function Vc(e,t){var n=e.ref,r=e.refCleanup;if(n!==null)if(typeof r==`function`)try{r()}catch(n){Uu(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){Uu(e,t,n)}else n.current=null}function Hc(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){Uu(e,e.return,t)}}function Uc(e,t,n){try{var r=e.stateNode;Fd(r,e.type,n,t),r[tt]=t}catch(t){Uu(e,e.return,t)}}function Wc(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Zd(e.type)||e.tag===4}function Gc(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Wc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Zd(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Kc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=qt));else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Kc(e,t,n),e=e.sibling;e!==null;)Kc(e,t,n),e=e.sibling}function qc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(qc(e,t,n),e=e.sibling;e!==null;)qc(e,t,n),e=e.sibling}function Jc(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Pd(t,r,n),t[et]=e,t[tt]=n}catch(t){Uu(e,e.return,t)}}var Yc=!1,Xc=!1,Zc=!1,Qc=typeof WeakSet==`function`?WeakSet:Set,$c=null;function el(e,t){if(e=e.containerInfo,Rd=sp,e=yr(e),br(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||i!==0&&f.nodeType!==3||(c=s+i),f!==a||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===i&&(c=s),p===a&&++d===r&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(zd={focusedElem:e,selectionRange:n},sp=!1,$c=t;$c!==null;)if(t=$c,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,$c=e;else for(;$c!==null;){switch(t=$c,a=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e===null?null:e.events,e!==null))for(n=0;n<e.length;n++)i=e[n],i.ref.impl=i.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&a!==null){e=void 0,n=t,i=a.memoizedProps,a=a.memoizedState,r=n.stateNode;try{var h=Bs(n.type,i);e=r.getSnapshotBeforeUpdate(h,a),r.__reactInternalSnapshotBeforeUpdate=e}catch(e){Uu(n,n.return,e)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)ef(e);else if(n===1)switch(e.nodeName){case`HEAD`:case`HTML`:case`BODY`:ef(e);break;default:e.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(o(163))}if(e=t.sibling,e!==null){e.return=t.return,$c=e;break}$c=t.return}}function tl(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:gl(e,n),r&4&&Ic(5,n);break;case 1:if(gl(e,n),r&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){Uu(n,n.return,e)}else{var i=Bs(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){Uu(n,n.return,e)}}r&64&&Rc(n),r&512&&Bc(n,n.return);break;case 3:if(gl(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Ha(e,t)}catch(e){Uu(n,n.return,e)}}break;case 27:t===null&&r&4&&Jc(n);case 26:case 5:gl(e,n),t===null&&r&4&&Hc(n),r&512&&Bc(n,n.return);break;case 12:gl(e,n);break;case 31:gl(e,n),r&4&&sl(e,n);break;case 13:gl(e,n),r&4&&cl(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=qu.bind(null,n),sf(e,n))));break;case 22:if(r=n.memoizedState!==null||Yc,!r){t=t!==null&&t.memoizedState!==null||Xc,i=Yc;var a=Xc;Yc=r,(Xc=t)&&!a?vl(e,n,(n.subtreeFlags&8772)!=0):gl(e,n),Yc=i,Xc=a}break;case 30:break;default:gl(e,n)}}function nl(e){var t=e.alternate;t!==null&&(e.alternate=null,nl(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&ct(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var rl=null,il=!1;function al(e,t,n){for(n=n.child;n!==null;)ol(e,t,n),n=n.sibling}function ol(e,t,n){if(ke&&typeof ke.onCommitFiberUnmount==`function`)try{ke.onCommitFiberUnmount(Oe,n)}catch{}switch(n.tag){case 26:Xc||Vc(n,t),al(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Xc||Vc(n,t);var r=rl,i=il;Zd(n.type)&&(rl=n.stateNode,il=!1),al(e,t,n),pf(n.stateNode),rl=r,il=i;break;case 5:Xc||Vc(n,t);case 6:if(r=rl,i=il,rl=null,al(e,t,n),rl=r,il=i,rl!==null)if(il)try{(rl.nodeType===9?rl.body:rl.nodeName===`HTML`?rl.ownerDocument.body:rl).removeChild(n.stateNode)}catch(e){Uu(n,t,e)}else try{rl.removeChild(n.stateNode)}catch(e){Uu(n,t,e)}break;case 18:rl!==null&&(il?(e=rl,Qd(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Np(e)):Qd(rl,n.stateNode));break;case 4:r=rl,i=il,rl=n.stateNode.containerInfo,il=!0,al(e,t,n),rl=r,il=i;break;case 0:case 11:case 14:case 15:Lc(2,n,t),Xc||Lc(4,n,t),al(e,t,n);break;case 1:Xc||(Vc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&zc(n,t,r)),al(e,t,n);break;case 21:al(e,t,n);break;case 22:Xc=(r=Xc)||n.memoizedState!==null,al(e,t,n),Xc=r;break;default:al(e,t,n)}}function sl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Np(e)}catch(e){Uu(t,t.return,e)}}}function cl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Np(e)}catch(e){Uu(t,t.return,e)}}function ll(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Qc),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Qc),t;default:throw Error(o(435,e.tag))}}function ul(e,t){var n=ll(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=Ju.bind(null,e,t);t.then(r,r)}})}function dl(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r],a=e,s=t,c=s;a:for(;c!==null;){switch(c.tag){case 27:if(Zd(c.type)){rl=c.stateNode,il=!1;break a}break;case 5:rl=c.stateNode,il=!1;break a;case 3:case 4:rl=c.stateNode.containerInfo,il=!0;break a}c=c.return}if(rl===null)throw Error(o(160));ol(a,s,i),rl=null,il=!1,a=i.alternate,a!==null&&(a.return=null),i.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)pl(t,e),t=t.sibling}var fl=null;function pl(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:dl(t,e),ml(e),r&4&&(Lc(3,e,e.return),Ic(3,e),Lc(5,e,e.return));break;case 1:dl(t,e),ml(e),r&512&&(Xc||n===null||Vc(n,n.return)),r&64&&Yc&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var i=fl;if(dl(t,e),ml(e),r&512&&(Xc||n===null||Vc(n,n.return)),r&4){var a=n===null?null:n.memoizedState;if(r=e.memoizedState,n===null)if(r===null)if(e.stateNode===null){a:{r=e.type,n=e.memoizedProps,i=i.ownerDocument||i;b:switch(r){case`title`:a=i.getElementsByTagName(`title`)[0],(!a||a[st]||a[et]||a.namespaceURI===`http://www.w3.org/2000/svg`||a.hasAttribute(`itemprop`))&&(a=i.createElement(r),i.head.insertBefore(a,i.querySelector(`head > title`))),Pd(a,r,n),a[et]=e,pt(a),r=a;break a;case`link`:var s=Vf(`link`,`href`,i).get(r+(n.href||``));if(s){for(var c=0;c<s.length;c++)if(a=s[c],a.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&a.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&a.getAttribute(`title`)===(n.title==null?null:n.title)&&a.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(c,1);break b}}a=i.createElement(r),Pd(a,r,n),i.head.appendChild(a);break;case`meta`:if(s=Vf(`meta`,`content`,i).get(r+(n.content||``))){for(c=0;c<s.length;c++)if(a=s[c],a.getAttribute(`content`)===(n.content==null?null:``+n.content)&&a.getAttribute(`name`)===(n.name==null?null:n.name)&&a.getAttribute(`property`)===(n.property==null?null:n.property)&&a.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&a.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){s.splice(c,1);break b}}a=i.createElement(r),Pd(a,r,n),i.head.appendChild(a);break;default:throw Error(o(468,r))}a[et]=e,pt(a),r=a}e.stateNode=r}else Hf(i,e.type,e.stateNode);else e.stateNode=If(i,r,e.memoizedProps);else a===r?r===null&&e.stateNode!==null&&Uc(e,e.memoizedProps,n.memoizedProps):(a===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):a.count--,r===null?Hf(i,e.type,e.stateNode):If(i,r,e.memoizedProps))}break;case 27:dl(t,e),ml(e),r&512&&(Xc||n===null||Vc(n,n.return)),n!==null&&r&4&&Uc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(dl(t,e),ml(e),r&512&&(Xc||n===null||Vc(n,n.return)),e.flags&32){i=e.stateNode;try{zt(i,``)}catch(t){Uu(e,e.return,t)}}r&4&&e.stateNode!=null&&(i=e.memoizedProps,Uc(e,i,n===null?i:n.memoizedProps)),r&1024&&(Zc=!0);break;case 6:if(dl(t,e),ml(e),r&4){if(e.stateNode===null)throw Error(o(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(t){Uu(e,e.return,t)}}break;case 3:if(Bf=null,i=fl,fl=gf(t.containerInfo),dl(t,e),fl=i,ml(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Np(t.containerInfo)}catch(t){Uu(e,e.return,t)}Zc&&(Zc=!1,hl(e));break;case 4:r=fl,fl=gf(e.stateNode.containerInfo),dl(t,e),ml(e),fl=r;break;case 12:dl(t,e),ml(e);break;case 31:dl(t,e),ml(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,ul(e,r)));break;case 13:dl(t,e),ml(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Zl=be()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,ul(e,r)));break;case 22:i=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,u=Yc,d=Xc;if(Yc=u||i,Xc=d||l,dl(t,e),Xc=d,Yc=u,ml(e),r&8192)a:for(t=e.stateNode,t._visibility=i?t._visibility&-2:t._visibility|1,i&&(n===null||l||Yc||Xc||_l(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(a=l.stateNode,i)s=a.style,typeof s.setProperty==`function`?s.setProperty(`display`,`none`,`important`):s.display=`none`;else{c=l.stateNode;var f=l.memoizedProps.style,p=f!=null&&f.hasOwnProperty(`display`)?f.display:null;c.style.display=p==null||typeof p==`boolean`?``:(``+p).trim()}}catch(e){Uu(l,l.return,e)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=i?``:l.memoizedProps}catch(e){Uu(l,l.return,e)}}}else if(t.tag===18){if(n===null){l=t;try{var m=l.stateNode;i?$d(m,!0):$d(l.stateNode,!1)}catch(e){Uu(l,l.return,e)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break a;for(;t.sibling===null;){if(t.return===null||t.return===e)break a;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,ul(e,n))));break;case 19:dl(t,e),ml(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,ul(e,r)));break;case 30:break;case 21:break;default:dl(t,e),ml(e)}}function ml(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(Wc(r)){n=r;break}r=r.return}if(n==null)throw Error(o(160));switch(n.tag){case 27:var i=n.stateNode;qc(e,Gc(e),i);break;case 5:var a=n.stateNode;n.flags&32&&(zt(a,``),n.flags&=-33),qc(e,Gc(e),a);break;case 3:case 4:var s=n.stateNode.containerInfo;Kc(e,Gc(e),s);break;default:throw Error(o(161))}}catch(t){Uu(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function hl(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;hl(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function gl(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)tl(e,t.alternate,t),t=t.sibling}function _l(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Lc(4,t,t.return),_l(t);break;case 1:Vc(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount==`function`&&zc(t,t.return,n),_l(t);break;case 27:pf(t.stateNode);case 26:case 5:Vc(t,t.return),_l(t);break;case 22:t.memoizedState===null&&_l(t);break;case 30:_l(t);break;default:_l(t)}e=e.sibling}}function vl(e,t,n){for(n&&=(t.subtreeFlags&8772)!=0,t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags;switch(a.tag){case 0:case 11:case 15:vl(i,a,n),Ic(4,a);break;case 1:if(vl(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){Uu(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var s=r.stateNode;try{var c=i.shared.hiddenCallbacks;if(c!==null)for(i.shared.hiddenCallbacks=null,i=0;i<c.length;i++)Va(c[i],s)}catch(e){Uu(r,r.return,e)}}n&&o&64&&Rc(a),Bc(a,a.return);break;case 27:Jc(a);case 26:case 5:vl(i,a,n),n&&r===null&&o&4&&Hc(a),Bc(a,a.return);break;case 12:vl(i,a,n);break;case 31:vl(i,a,n),n&&o&4&&sl(i,a);break;case 13:vl(i,a,n),n&&o&4&&cl(i,a);break;case 22:a.memoizedState===null&&vl(i,a,n),Bc(a,a.return);break;case 30:break;default:vl(i,a,n)}t=t.sibling}}function yl(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&ea(n))}function bl(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ea(e))}function xl(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Sl(e,t,n,r),t=t.sibling}function Sl(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:xl(e,t,n,r),i&2048&&Ic(9,t);break;case 1:xl(e,t,n,r);break;case 3:xl(e,t,n,r),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ea(e)));break;case 12:if(i&2048){xl(e,t,n,r),e=t.stateNode;try{var a=t.memoizedProps,o=a.id,s=a.onPostCommit;typeof s==`function`&&s(o,t.alternate===null?`mount`:`update`,e.passiveEffectDuration,-0)}catch(e){Uu(t,t.return,e)}}else xl(e,t,n,r);break;case 31:xl(e,t,n,r);break;case 13:xl(e,t,n,r);break;case 23:break;case 22:a=t.stateNode,o=t.alternate,t.memoizedState===null?a._visibility&2?xl(e,t,n,r):(a._visibility|=2,Cl(e,t,n,r,(t.subtreeFlags&10256)!=0||!1)):a._visibility&2?xl(e,t,n,r):wl(e,t),i&2048&&yl(o,t);break;case 24:xl(e,t,n,r),i&2048&&bl(t.alternate,t);break;default:xl(e,t,n,r)}}function Cl(e,t,n,r,i){for(i&&=(t.subtreeFlags&10256)!=0||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:Cl(a,o,s,c,i),Ic(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,Cl(a,o,s,c,i)):u._visibility&2?Cl(a,o,s,c,i):wl(a,o),i&&l&2048&&yl(o.alternate,o);break;case 24:Cl(a,o,s,c,i),i&&l&2048&&bl(o.alternate,o);break;default:Cl(a,o,s,c,i)}t=t.sibling}}function wl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:wl(n,r),i&2048&&yl(r.alternate,r);break;case 24:wl(n,r),i&2048&&bl(r.alternate,r);break;default:wl(n,r)}t=t.sibling}}var Tl=8192;function El(e,t,n){if(e.subtreeFlags&Tl)for(e=e.child;e!==null;)Dl(e,t,n),e=e.sibling}function Dl(e,t,n){switch(e.tag){case 26:El(e,t,n),e.flags&Tl&&e.memoizedState!==null&&Gf(n,fl,e.memoizedState,e.memoizedProps);break;case 5:El(e,t,n);break;case 3:case 4:var r=fl;fl=gf(e.stateNode.containerInfo),El(e,t,n),fl=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Tl,Tl=16777216,El(e,t,n),Tl=r):El(e,t,n));break;default:El(e,t,n)}}function Ol(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function kl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];$c=r,Ml(r,e)}Ol(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Al(e),e=e.sibling}function Al(e){switch(e.tag){case 0:case 11:case 15:kl(e),e.flags&2048&&Lc(9,e,e.return);break;case 3:kl(e);break;case 12:kl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,jl(e)):kl(e);break;default:kl(e)}}function jl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];$c=r,Ml(r,e)}Ol(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Lc(8,t,t.return),jl(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,jl(t));break;default:jl(t)}e=e.sibling}}function Ml(e,t){for(;$c!==null;){var n=$c;switch(n.tag){case 0:case 11:case 15:Lc(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:ea(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,$c=r;else a:for(n=e;$c!==null;){r=$c;var i=r.sibling,a=r.return;if(nl(r),r===n){$c=null;break a}if(i!==null){i.return=a,$c=i;break a}$c=a}}}var Nl={getCacheForType:function(e){var t=Ki(Qi),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return Ki(Qi).controller.signal}},Pl=typeof WeakMap==`function`?WeakMap:Map,X=0,Fl=null,Z=null,Q=0,Il=0,Ll=null,Rl=!1,zl=!1,Bl=!1,Vl=0,Hl=0,Ul=0,Wl=0,Gl=0,Kl=0,ql=0,Jl=null,Yl=null,Xl=!1,Zl=0,Ql=0,$l=1/0,eu=null,tu=null,nu=0,ru=null,iu=null,au=0,ou=0,su=null,cu=null,lu=0,uu=null;function du(){return X&2&&Q!==0?Q&-Q:I.T===null?Ze():ud()}function fu(){if(Kl===0)if(!(Q&536870912)||J){var e=Ie;Ie<<=1,!(Ie&3932160)&&(Ie=262144),Kl=e}else Kl=536870912;return e=Ja.current,e!==null&&(e.flags|=32),Kl}function pu(e,t,n){(e===Fl&&(Il===2||Il===9)||e.cancelPendingCommit!==null)&&(bu(e,0),_u(e,Q,Kl,!1)),We(e,n),(!(X&2)||e!==Fl)&&(e===Fl&&(!(X&2)&&(Wl|=n),Hl===4&&_u(e,Q,Kl,!1)),nd(e))}function mu(e,t,n){if(X&6)throw Error(o(327));var r=!n&&(t&127)==0&&(t&e.expiredLanes)===0||Be(e,t),i=r?Ou(e,t):Eu(e,t,!0),a=r;do{if(i===0){zl&&!r&&_u(e,t,0,!1);break}else{if(n=e.current.alternate,a&&!gu(n)){i=Eu(e,t,!1),a=!1;continue}if(i===2){if(a=t,e.errorRecoveryDisabledLanes&a)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;i=Jl;var l=c.current.memoizedState.isDehydrated;if(l&&(bu(c,s).flags|=256),s=Eu(c,s,!1),s!==2){if(Bl&&!l){c.errorRecoveryDisabledLanes|=a,Wl|=a,i=4;break a}a=Yl,Yl=i,a!==null&&(Yl===null?Yl=a:Yl.push.apply(Yl,a))}i=s}if(a=!1,i!==2)continue}}if(i===1){bu(e,0),_u(e,t,0,!0);break}a:{switch(r=e,a=i,a){case 0:case 1:throw Error(o(345));case 4:if((t&4194048)!==t)break;case 6:_u(r,t,Kl,!Rl);break a;case 2:Yl=null;break;case 3:case 5:break;default:throw Error(o(329))}if((t&62914560)===t&&(i=Zl+300-be(),10<i)){if(_u(r,t,Kl,!Rl),ze(r,0,!0)!==0)break a;au=t,r.timeoutHandle=Kd(hu.bind(null,r,n,Yl,eu,Xl,t,Kl,Wl,ql,Rl,a,`Throttled`,-0,0),i);break a}hu(r,n,Yl,eu,Xl,t,Kl,Wl,ql,Rl,a,null,-0,0)}}break}while(1);nd(e)}function hu(e,t,n,r,i,a,o,s,c,l,u,d,f,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)==16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:qt},Dl(t,a,d);var m=(a&62914560)===a?Zl-be():(a&4194048)===a?Ql-be():0;if(m=qf(d,m),m!==null){au=a,e.cancelPendingCommit=m(Fu.bind(null,e,t,a,n,r,i,o,s,c,u,d,null,f,p)),_u(e,a,o,!l);return}}Fu(e,t,a,n,r,i,o,s,c)}function gu(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!mr(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function _u(e,t,n,r){t&=~Gl,t&=~Wl,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-je(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&Ke(e,n,t)}function vu(){return X&6?!0:(rd(0,!1),!1)}function yu(){if(Z!==null){if(Il===0)var e=Z.return;else e=Z,Ri=Li=null,So(e),Ca=null,wa=0,e=Z;for(;e!==null;)Fc(e.alternate,e),e=e.return;Z=null}}function bu(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,qd(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),au=0,yu(),Fl=e,Z=n=ni(e.current,null),Q=t,Il=0,Ll=null,Rl=!1,zl=Be(e,t),Bl=!1,ql=Kl=Gl=Wl=Ul=Hl=0,Yl=Jl=null,Xl=!1,t&8&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var i=31-je(r),a=1<<i;t|=e[i],r&=~a}return Vl=t,Kr(),n}function xu(e,t){Y=null,I.H=Ms,t===pa||t===ha?(t=xa(),Il=3):t===ma?(t=xa(),Il=4):Il=t===Xs?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,Ll=t,Z===null&&(Hl=1,Ws(e,ui(t,e.current)))}function Su(){var e=Ja.current;return e===null?!0:(Q&4194048)===Q?Ya===null:(Q&62914560)===Q||Q&536870912?e===Ya:!1}function Cu(){var e=I.H;return I.H=Ms,e===null?Ms:e}function wu(){var e=I.A;return I.A=Nl,e}function Tu(){Hl=4,Rl||(Q&4194048)!==Q&&Ja.current!==null||(zl=!0),!(Ul&134217727)&&!(Wl&134217727)||Fl===null||_u(Fl,Q,Kl,!1)}function Eu(e,t,n){var r=X;X|=2;var i=Cu(),a=wu();(Fl!==e||Q!==t)&&(eu=null,bu(e,t)),t=!1;var o=Hl;a:do try{if(Il!==0&&Z!==null){var s=Z,c=Ll;switch(Il){case 8:yu(),o=6;break a;case 3:case 2:case 9:case 6:Ja.current===null&&(t=!0);var l=Il;if(Il=0,Ll=null,Mu(e,s,c,l),n&&zl){o=0;break a}break;default:l=Il,Il=0,Ll=null,Mu(e,s,c,l)}}Du(),o=Hl;break}catch(t){xu(e,t)}while(1);return t&&e.shellSuspendCounter++,Ri=Li=null,X=r,I.H=i,I.A=a,Z===null&&(Fl=null,Q=0,Kr()),o}function Du(){for(;Z!==null;)Au(Z)}function Ou(e,t){var n=X;X|=2;var r=Cu(),i=wu();Fl!==e||Q!==t?(eu=null,$l=be()+500,bu(e,t)):zl=Be(e,t);a:do try{if(Il!==0&&Z!==null){t=Z;var a=Ll;b:switch(Il){case 1:Il=0,Ll=null,Mu(e,t,a,1);break;case 2:case 9:if(_a(a)){Il=0,Ll=null,ju(t);break}t=function(){Il!==2&&Il!==9||Fl!==e||(Il=7),nd(e)},a.then(t,t);break a;case 3:Il=7;break a;case 4:Il=5;break a;case 7:_a(a)?(Il=0,Ll=null,ju(t)):(Il=0,Ll=null,Mu(e,t,a,7));break;case 5:var s=null;switch(Z.tag){case 26:s=Z.memoizedState;case 5:case 27:var c=Z;if(s?Wf(s):c.stateNode.complete){Il=0,Ll=null;var l=c.sibling;if(l!==null)Z=l;else{var u=c.return;u===null?Z=null:(Z=u,Nu(u))}break b}}Il=0,Ll=null,Mu(e,t,a,5);break;case 6:Il=0,Ll=null,Mu(e,t,a,6);break;case 8:yu(),Hl=6;break a;default:throw Error(o(462))}}ku();break}catch(t){xu(e,t)}while(1);return Ri=Li=null,I.H=r,I.A=i,X=n,Z===null?(Fl=null,Q=0,Kr(),Hl):0}function ku(){for(;Z!==null&&!ve();)Au(Z)}function Au(e){var t=Ec(e.alternate,e,Vl);e.memoizedProps=e.pendingProps,t===null?Nu(e):Z=t}function ju(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=uc(n,t,t.pendingProps,t.type,void 0,Q);break;case 11:t=uc(n,t,t.pendingProps,t.type.render,t.ref,Q);break;case 5:So(t);default:Fc(n,t),t=Z=ri(t,Vl),t=Ec(n,t,Vl)}e.memoizedProps=e.pendingProps,t===null?Nu(e):Z=t}function Mu(e,t,n,r){Ri=Li=null,So(t),Ca=null,wa=0;var i=t.return;try{if(Ys(e,i,t,n,Q)){Hl=1,Ws(e,ui(n,e.current)),Z=null;return}}catch(t){if(i!==null)throw Z=i,t;Hl=1,Ws(e,ui(n,e.current)),Z=null;return}t.flags&32768?(J||r===1?e=!0:zl||Q&536870912?e=!1:(Rl=e=!0,(r===2||r===9||r===3||r===6)&&(r=Ja.current,r!==null&&r.tag===13&&(r.flags|=16384))),Pu(t,e)):Nu(t)}function Nu(e){var t=e;do{if(t.flags&32768){Pu(t,Rl);return}e=t.return;var n=Nc(t.alternate,t,Vl);if(n!==null){Z=n;return}if(t=t.sibling,t!==null){Z=t;return}Z=t=e}while(t!==null);Hl===0&&(Hl=5)}function Pu(e,t){do{var n=Pc(e.alternate,e);if(n!==null){n.flags&=32767,Z=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){Z=e;return}Z=e=n}while(e!==null);Hl=6,Z=null}function Fu(e,t,n,r,i,a,s,c,l){e.cancelPendingCommit=null;do Bu();while(nu!==0);if(X&6)throw Error(o(327));if(t!==null){if(t===e.current)throw Error(o(177));if(a=t.lanes|t.childLanes,a|=Gr,Ge(e,n,a,s,c,l),e===Fl&&(Z=Fl=null,Q=0),iu=t,ru=e,au=n,ou=a,su=i,cu=r,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,Yu(Ce,function(){return Vu(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(t.flags&13878)!=0,t.subtreeFlags&13878||r){r=I.T,I.T=null,i=L.p,L.p=2,s=X,X|=4;try{el(e,t,n)}finally{X=s,L.p=i,I.T=r}}nu=1,Iu(),Lu(),Ru()}}function Iu(){if(nu===1){nu=0;var e=ru,t=iu,n=(t.flags&13878)!=0;if(t.subtreeFlags&13878||n){n=I.T,I.T=null;var r=L.p;L.p=2;var i=X;X|=4;try{pl(t,e);var a=zd,o=yr(e.containerInfo),s=a.focusedElem,c=a.selectionRange;if(o!==s&&s&&s.ownerDocument&&vr(s.ownerDocument.documentElement,s)){if(c!==null&&br(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=_r(s,h),v=_r(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}sp=!!Rd,zd=Rd=null}finally{X=i,L.p=r,I.T=n}}e.current=t,nu=2}}function Lu(){if(nu===2){nu=0;var e=ru,t=iu,n=(t.flags&8772)!=0;if(t.subtreeFlags&8772||n){n=I.T,I.T=null;var r=L.p;L.p=2;var i=X;X|=4;try{tl(e,t.alternate,t)}finally{X=i,L.p=r,I.T=n}}nu=3}}function Ru(){if(nu===4||nu===3){nu=0,ye();var e=ru,t=iu,n=au,r=cu;t.subtreeFlags&10256||t.flags&10256?nu=5:(nu=0,iu=ru=null,zu(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(tu=null),Xe(n),t=t.stateNode,ke&&typeof ke.onCommitFiberRoot==`function`)try{ke.onCommitFiberRoot(Oe,t,void 0,(t.current.flags&128)==128)}catch{}if(r!==null){t=I.T,i=L.p,L.p=2,I.T=null;try{for(var a=e.onRecoverableError,o=0;o<r.length;o++){var s=r[o];a(s.value,{componentStack:s.stack})}}finally{I.T=t,L.p=i}}au&3&&Bu(),nd(e),i=e.pendingLanes,n&261930&&i&42?e===uu?lu++:(lu=0,uu=e):lu=0,rd(0,!1)}}function zu(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,ea(t)))}function Bu(){return Iu(),Lu(),Ru(),Vu()}function Vu(){if(nu!==5)return!1;var e=ru,t=ou;ou=0;var n=Xe(au),r=I.T,i=L.p;try{L.p=32>n?32:n,I.T=null,n=su,su=null;var a=ru,s=au;if(nu=0,iu=ru=null,au=0,X&6)throw Error(o(331));var c=X;if(X|=4,Al(a.current),Sl(a,a.current,s,n),X=c,rd(0,!1),ke&&typeof ke.onPostCommitFiberRoot==`function`)try{ke.onPostCommitFiberRoot(Oe,a)}catch{}return!0}finally{L.p=i,I.T=r,zu(e,t)}}function Hu(e,t,n){t=ui(n,t),t=Ks(e.stateNode,t,2),e=Fa(e,t,2),e!==null&&(We(e,2),nd(e))}function Uu(e,t,n){if(e.tag===3)Hu(e,e,n);else for(;t!==null;){if(t.tag===3){Hu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(tu===null||!tu.has(r))){e=ui(n,e),n=qs(2),r=Fa(t,n,2),r!==null&&(Js(n,r,t,e),We(r,2),nd(r));break}}t=t.return}}function Wu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Pl;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(Bl=!0,i.add(n),e=Gu.bind(null,e,t,n),t.then(e,e))}function Gu(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Fl===e&&(Q&n)===n&&(Hl===4||Hl===3&&(Q&62914560)===Q&&300>be()-Zl?!(X&2)&&bu(e,0):Gl|=n,ql===Q&&(ql=0)),nd(e)}function Ku(e,t){t===0&&(t=He()),e=Yr(e,t),e!==null&&(We(e,t),nd(e))}function qu(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Ku(e,n)}function Ju(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(o(314))}r!==null&&r.delete(t),Ku(e,n)}function Yu(e,t){return ge(e,t)}var Xu=null,Zu=null,Qu=!1,$u=!1,ed=!1,td=0;function nd(e){e!==Zu&&e.next===null&&(Zu===null?Xu=Zu=e:Zu=Zu.next=e),$u=!0,Qu||(Qu=!0,ld())}function rd(e,t){if(!ed&&$u){ed=!0;do for(var n=!1,r=Xu;r!==null;){if(!t)if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-je(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,cd(r,a))}else a=Q,a=ze(r,r===Fl?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||Be(r,a)||(n=!0,cd(r,a));r=r.next}while(n);ed=!1}}function id(){ad()}function ad(){$u=Qu=!1;var e=0;td!==0&&Gd()&&(e=td);for(var t=be(),n=null,r=Xu;r!==null;){var i=r.next,a=od(r,t);a===0?(r.next=null,n===null?Xu=i:n.next=i,i===null&&(Zu=n)):(n=r,(e!==0||a&3)&&($u=!0)),r=i}nu!==0&&nu!==5||rd(e,!1),td!==0&&(td=0)}function od(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-je(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=Ve(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=Fl,n=Q,n=ze(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(Il===2||Il===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&_e(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||Be(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&_e(r),Xe(n)){case 2:case 8:n=Se;break;case 32:n=Ce;break;case 268435456:n=Te;break;default:n=Ce}return r=sd.bind(null,e),n=ge(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&_e(r),e.callbackPriority=2,e.callbackNode=null,2}function sd(e,t){if(nu!==0&&nu!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Bu()&&e.callbackNode!==n)return null;var r=Q;return r=ze(e,e===Fl?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(mu(e,r,t),od(e,be()),e.callbackNode!=null&&e.callbackNode===n?sd.bind(null,e):null)}function cd(e,t){if(Bu())return null;mu(e,t,!0)}function ld(){Yd(function(){X&6?ge(W,id):ad()})}function ud(){if(td===0){var e=ra;e===0&&(e=Fe,Fe<<=1,!(Fe&261888)&&(Fe=256)),td=e}return td}function dd(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:Kt(``+e)}function fd(e,t){var n=t.ownerDocument.createElement(`input`);return n.name=t.name,n.value=t.value,e.id&&n.setAttribute(`form`,e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function pd(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=dd((i[tt]||null).action),o=r.submitter;o&&(t=(t=o[tt]||null)?dd(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new G(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(td!==0){var e=o?fd(i,o):new FormData(i);vs(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=o?fd(i,o):new FormData(i),vs(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var md=0;md<Br.length;md++){var hd=Br[md];Vr(hd.toLowerCase(),`on`+(hd[0].toUpperCase()+hd.slice(1)))}Vr(Mr,`onAnimationEnd`),Vr(Nr,`onAnimationIteration`),Vr(Pr,`onAnimationStart`),Vr(`dblclick`,`onDoubleClick`),Vr(`focusin`,`onFocus`),Vr(`focusout`,`onBlur`),Vr(Fr,`onTransitionRun`),Vr(Ir,`onTransitionStart`),Vr(Lr,`onTransitionCancel`),Vr(Rr,`onTransitionEnd`),_t(`onMouseEnter`,[`mouseout`,`mouseover`]),_t(`onMouseLeave`,[`mouseout`,`mouseover`]),_t(`onPointerEnter`,[`pointerout`,`pointerover`]),_t(`onPointerLeave`,[`pointerout`,`pointerover`]),gt(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),gt(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),gt(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),gt(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),gt(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),gt(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var gd=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),_d=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(gd));function vd(e,t){t=(t&4)!=0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){Hr(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){Hr(e)}i.currentTarget=null,a=c}}}}function $(e,t){var n=t[rt];n===void 0&&(n=t[rt]=new Set);var r=e+`__bubble`;n.has(r)||(Sd(t,e,2,!1),n.add(r))}function yd(e,t,n){var r=0;t&&(r|=4),Sd(n,e,r,t)}var bd=`_reactListening`+Math.random().toString(36).slice(2);function xd(e){if(!e[bd]){e[bd]=!0,mt.forEach(function(t){t!==`selectionchange`&&(_d.has(t)||yd(t,!1,e),yd(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[bd]||(t[bd]=!0,yd(`selectionchange`,!1,t))}}function Sd(e,t,n,r){switch(mp(t)){case 2:var i=cp;break;case 8:i=lp;break;default:i=up}n=i.bind(null,t,n,e),i=void 0,!rn||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function Cd(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var s=r.stateNode.containerInfo;if(s===i)break;if(o===4)for(o=r.return;o!==null;){var c=o.tag;if((c===3||c===4)&&o.stateNode.containerInfo===i)return;o=o.return}for(;s!==null;){if(o=lt(s),o===null)return;if(c=o.tag,c===5||c===6||c===26||c===27){r=a=o;continue a}s=s.parentNode}}r=r.return}en(function(){var r=a,i=Yt(n),o=[];a:{var s=zr.get(e);if(s!==void 0){var c=G,u=e;switch(e){case`keypress`:if(un(n)===0)break a;case`keydown`:case`keyup`:c=jn;break;case`focusin`:u=`focus`,c=Sn;break;case`focusout`:u=`blur`,c=Sn;break;case`beforeblur`:case`afterblur`:c=Sn;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:c=K;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:c=xn;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:c=Nn;break;case Mr:case Nr:case Pr:c=Cn;break;case Rr:c=Pn;break;case`scroll`:case`scrollend`:c=gn;break;case`wheel`:c=Fn;break;case`copy`:case`cut`:case`paste`:c=wn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:c=Mn;break;case`toggle`:case`beforetoggle`:c=In}var d=(t&4)!=0,f=!d&&(e===`scroll`||e===`scrollend`),p=d?s===null?null:s+`Capture`:s;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=tn(m,p),g!=null&&d.push(wd(m,g,h))),f)break;m=m.return}0<d.length&&(s=new c(s,u,null,n,i),o.push({event:s,listeners:d}))}}if(!(t&7)){a:{if(s=e===`mouseover`||e===`pointerover`,c=e===`mouseout`||e===`pointerout`,s&&n!==Jt&&(u=n.relatedTarget||n.fromElement)&&(lt(u)||u[nt]))break a;if((c||s)&&(s=i.window===i?i:(s=i.ownerDocument)?s.defaultView||s.parentWindow:window,c?(u=n.relatedTarget||n.toElement,c=r,u=u?lt(u):null,u!==null&&(f=l(u),d=u.tag,u!==f||d!==5&&d!==27&&d!==6)&&(u=null)):(c=null,u=r),c!==u)){if(d=K,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=Mn,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=c==null?s:dt(c),h=u==null?s:dt(u),s=new d(g,m+`leave`,c,n,i),s.target=f,s.relatedTarget=h,g=null,lt(i)===r&&(d=new d(p,m+`enter`,u,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,c&&u)b:{for(d=Ed,p=c,m=u,h=0,g=p;g;g=d(g))h++;g=0;for(var _=m;_;_=d(_))g++;for(;0<h-g;)p=d(p),h--;for(;0<g-h;)m=d(m),g--;for(;h--;){if(p===m||m!==null&&p===m.alternate){d=p;break b}p=d(p),m=d(m)}d=null}else d=null;c!==null&&Dd(o,s,c,d,!1),u!==null&&f!==null&&Dd(o,f,u,d,!0)}}a:{if(s=r?dt(r):window,c=s.nodeName&&s.nodeName.toLowerCase(),c===`select`||c===`input`&&s.type===`file`)var v=nr;else if(Xn(s))if(rr)v=fr;else{v=ur;var y=lr}else c=s.nodeName,!c||c.toLowerCase()!==`input`||s.type!==`checkbox`&&s.type!==`radio`?r&&Ut(r.elementType)&&(v=nr):v=dr;if(v&&=v(e,r)){Zn(o,v,n,i);break a}y&&y(e,s,r),e===`focusout`&&r&&s.type===`number`&&r.memoizedProps.value!=null&&Ft(s,`number`,s.value)}switch(y=r?dt(r):window,e){case`focusin`:(Xn(y)||y.contentEditable===`true`)&&(Sr=y,Cr=r,wr=null);break;case`focusout`:wr=Cr=Sr=null;break;case`mousedown`:Tr=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:Tr=!1,Er(o,n,i);break;case`selectionchange`:if(xr)break;case`keydown`:case`keyup`:Er(o,n,i)}var b;if(Rn)b:{switch(e){case`compositionstart`:var x=`onCompositionStart`;break b;case`compositionend`:x=`onCompositionEnd`;break b;case`compositionupdate`:x=`onCompositionUpdate`;break b}x=void 0}else Kn?Wn(e,n)&&(x=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(x=`onCompositionStart`);x&&(Vn&&n.locale!==`ko`&&(Kn||x!==`onCompositionStart`?x===`onCompositionEnd`&&Kn&&(b=ln()):(on=i,sn=`value`in on?on.value:on.textContent,Kn=!0)),y=Td(r,x),0<y.length&&(x=new Tn(x,e,null,n,i),o.push({event:x,listeners:y}),b?x.data=b:(b=Gn(n),b!==null&&(x.data=b)))),(b=Bn?qn(e,n):Jn(e,n))&&(x=Td(r,`onBeforeInput`),0<x.length&&(y=new Tn(`onBeforeInput`,`beforeinput`,null,n,i),o.push({event:y,listeners:x}),y.data=b)),pd(o,e,r,n,i)}vd(o,t)})}function wd(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Td(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=tn(e,n),i!=null&&r.unshift(wd(e,i,a)),i=tn(e,t),i!=null&&r.push(wd(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Ed(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Dd(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=tn(n,a),l!=null&&o.unshift(wd(n,l,c))):i||(l=tn(n,a),l!=null&&o.push(wd(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Od=/\r\n?/g,kd=/\u0000|\uFFFD/g;function Ad(e){return(typeof e==`string`?e:``+e).replace(Od,`
`).replace(kd,``)}function jd(e,t){return t=Ad(t),Ad(e)===t}function Md(e,t,n,r,i,a){switch(n){case`children`:typeof r==`string`?t===`body`||t===`textarea`&&r===``||zt(e,r):(typeof r==`number`||typeof r==`bigint`)&&t!==`body`&&zt(e,``+r);break;case`className`:Ct(e,`class`,r);break;case`tabIndex`:Ct(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:Ct(e,n,r);break;case`style`:Ht(e,r,a);break;case`data`:if(t!==`object`){Ct(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=Kt(``+r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}else typeof a==`function`&&(n===`formAction`?(t!==`input`&&Md(e,t,`name`,i.name,i,null),Md(e,t,`formEncType`,i.formEncType,i,null),Md(e,t,`formMethod`,i.formMethod,i,null),Md(e,t,`formTarget`,i.formTarget,i,null)):(Md(e,t,`encType`,i.encType,i,null),Md(e,t,`method`,i.method,i,null),Md(e,t,`target`,i.target,i,null)));if(r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=Kt(``+r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=qt);break;case`onScroll`:r!=null&&$(`scroll`,e);break;case`onScrollEnd`:r!=null&&$(`scrollend`,e);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(o(61));if(n=r.__html,n!=null){if(i.children!=null)throw Error(o(60));e.innerHTML=n}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=Kt(``+r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``+r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:$(`beforetoggle`,e),$(`toggle`,e),St(e,`popover`,r);break;case`xlinkActuate`:wt(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:wt(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:wt(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:wt(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:wt(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:wt(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:wt(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:wt(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:wt(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:St(e,`is`,r);break;case`innerText`:case`textContent`:break;default:(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)&&(n=Wt.get(n)||n,St(e,n,r))}}function Nd(e,t,n,r,i,a){switch(n){case`style`:Ht(e,r,a);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(o(61));if(n=r.__html,n!=null){if(i.children!=null)throw Error(o(60));e.innerHTML=n}}break;case`children`:typeof r==`string`?zt(e,r):(typeof r==`number`||typeof r==`bigint`)&&zt(e,``+r);break;case`onScroll`:r!=null&&$(`scroll`,e);break;case`onScrollEnd`:r!=null&&$(`scrollend`,e);break;case`onClick`:r!=null&&(e.onclick=qt);break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:break;case`innerText`:case`textContent`:break;default:if(!ht.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(i=n.endsWith(`Capture`),t=n.slice(2,i?n.length-7:void 0),a=e[tt]||null,a=a==null?null:a[n],typeof a==`function`&&e.removeEventListener(t,a,i),typeof r==`function`)){typeof a!=`function`&&a!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,i);break a}n in e?e[n]=r:!0===r?e.setAttribute(n,``):St(e,n,r)}}}function Pd(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:$(`error`,e),$(`load`,e);var r=!1,i=!1,a;for(a in n)if(n.hasOwnProperty(a)){var s=n[a];if(s!=null)switch(a){case`src`:r=!0;break;case`srcSet`:i=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(o(137,t));default:Md(e,t,a,s,n,null)}}i&&Md(e,t,`srcSet`,n.srcSet,n,null),r&&Md(e,t,`src`,n.src,n,null);return;case`input`:$(`invalid`,e);var c=a=s=i=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:i=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:a=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(o(137,t));break;default:Md(e,t,r,d,n,null)}}Pt(e,a,c,l,u,s,i,!1);return;case`select`:for(i in $(`invalid`,e),r=s=a=null,n)if(n.hasOwnProperty(i)&&(c=n[i],c!=null))switch(i){case`value`:a=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:Md(e,t,i,c,n,null)}t=a,n=s,e.multiple=!!r,t==null?n!=null&&It(e,!!r,n,!0):It(e,!!r,t,!1);return;case`textarea`:for(s in $(`invalid`,e),a=i=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:i=c;break;case`children`:a=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(o(91));break;default:Md(e,t,s,c,n,null)}Rt(e,r,i,a);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:Md(e,t,l,r,n,null)}return;case`dialog`:$(`beforetoggle`,e),$(`toggle`,e),$(`cancel`,e),$(`close`,e);break;case`iframe`:case`object`:$(`load`,e);break;case`video`:case`audio`:for(r=0;r<gd.length;r++)$(gd[r],e);break;case`image`:$(`error`,e),$(`load`,e);break;case`details`:$(`toggle`,e);break;case`embed`:case`source`:case`link`:$(`error`,e),$(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(o(137,t));default:Md(e,t,u,r,n,null)}return;default:if(Ut(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&Nd(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&Md(e,t,c,r,n,null))}function Fd(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var i=null,a=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||Md(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:a=m;break;case`name`:i=m;break;case`checked`:u=m;break;case`defaultChecked`:d=m;break;case`value`:s=m;break;case`defaultValue`:c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(o(137,t));break;default:m!==f&&Md(e,t,p,m,r,f)}}Nt(e,s,c,l,u,d,a,i);return;case`select`:for(a in m=s=c=p=null,n)if(l=n[a],n.hasOwnProperty(a)&&l!=null)switch(a){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(a)||Md(e,t,a,null,r,l)}for(i in r)if(a=r[i],l=n[i],r.hasOwnProperty(i)&&(a!=null||l!=null))switch(i){case`value`:p=a;break;case`defaultValue`:c=a;break;case`multiple`:s=a;default:a!==l&&Md(e,t,i,a,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?It(e,!!n,n?[]:``,!1):It(e,!!n,t,!0)):It(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(i=n[c],n.hasOwnProperty(c)&&i!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:Md(e,t,c,null,r,i)}for(s in r)if(i=r[s],a=n[s],r.hasOwnProperty(s)&&(i!=null||a!=null))switch(s){case`value`:p=i;break;case`defaultValue`:m=i;break;case`children`:break;case`dangerouslySetInnerHTML`:if(i!=null)throw Error(o(91));break;default:i!==a&&Md(e,t,s,i,r,a)}Lt(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:Md(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:Md(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&Md(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(o(137,t));break;default:Md(e,t,u,p,r,m)}return;default:if(Ut(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&Nd(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||Nd(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&Md(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||Md(e,t,f,p,r,m)}function Id(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function Ld(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&Id(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&Id(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var Rd=null,zd=null;function Bd(e){return e.nodeType===9?e:e.ownerDocument}function Vd(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function Hd(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function Ud(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Wd=null;function Gd(){var e=window.event;return e&&e.type===`popstate`?e===Wd?!1:(Wd=e,!0):(Wd=null,!1)}var Kd=typeof setTimeout==`function`?setTimeout:void 0,qd=typeof clearTimeout==`function`?clearTimeout:void 0,Jd=typeof Promise==`function`?Promise:void 0,Yd=typeof queueMicrotask==`function`?queueMicrotask:Jd===void 0?Kd:function(e){return Jd.resolve(null).then(e).catch(Xd)};function Xd(e){setTimeout(function(){throw e})}function Zd(e){return e===`head`}function Qd(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Np(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)pf(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,pf(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[st]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&pf(e.ownerDocument.body);n=i}while(n);Np(t)}function $d(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8)if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++;n=r}while(n)}function ef(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:ef(n),ct(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function tf(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r)if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e;else if(!e[st])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=cf(e.nextSibling),e===null)break}return null}function nf(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=cf(e.nextSibling),e===null))return null;return e}function rf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=cf(e.nextSibling),e===null))return null;return e}function af(e){return e.data===`$?`||e.data===`$~`}function of(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function sf(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function cf(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var lf=null;function uf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return cf(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function df(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function ff(e,t,n){switch(t=Bd(n),e){case`html`:if(e=t.documentElement,!e)throw Error(o(452));return e;case`head`:if(e=t.head,!e)throw Error(o(453));return e;case`body`:if(e=t.body,!e)throw Error(o(454));return e;default:throw Error(o(451))}}function pf(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);ct(e)}var mf=new Map,hf=new Set;function gf(e){return typeof e.getRootNode==`function`?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var _f=L.d;L.d={f:vf,r:yf,D:Sf,C:Cf,L:wf,m:Tf,X:Df,S:Ef,M:Of};function vf(){var e=_f.f(),t=vu();return e||t}function yf(e){var t=ut(e);t!==null&&t.tag===5&&t.type===`form`?bs(t):_f.r(e)}var bf=typeof document>`u`?null:document;function xf(e,t,n){var r=bf;if(r&&typeof t==`string`&&t){var i=Mt(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),hf.has(i)||(hf.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),Pd(t,`link`,e),pt(t),r.head.appendChild(t)))}}function Sf(e){_f.D(e),xf(`dns-prefetch`,e,null)}function Cf(e,t){_f.C(e,t),xf(`preconnect`,e,t)}function wf(e,t,n){_f.L(e,t,n);var r=bf;if(r&&e&&t){var i=`link[rel="preload"][as="`+Mt(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+Mt(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+Mt(n.imageSizes)+`"]`)):i+=`[href="`+Mt(e)+`"]`;var a=i;switch(t){case`style`:a=Af(e);break;case`script`:a=Pf(e)}mf.has(a)||(e=h({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),mf.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(jf(a))||t===`script`&&r.querySelector(Ff(a))||(t=r.createElement(`link`),Pd(t,`link`,e),pt(t),r.head.appendChild(t)))}}function Tf(e,t){_f.m(e,t);var n=bf;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+Mt(r)+`"][href="`+Mt(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Pf(e)}if(!mf.has(a)&&(e=h({rel:`modulepreload`,href:e},t),mf.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(Ff(a)))return}r=n.createElement(`link`),Pd(r,`link`,e),pt(r),n.head.appendChild(r)}}}function Ef(e,t,n){_f.S(e,t,n);var r=bf;if(r&&e){var i=ft(r).hoistableStyles,a=Af(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(jf(a)))s.loading=5;else{e=h({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=mf.get(a))&&Rf(e,n);var c=o=r.createElement(`link`);pt(c),Pd(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Lf(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function Df(e,t){_f.X(e,t);var n=bf;if(n&&e){var r=ft(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),pt(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Of(e,t){_f.M(e,t);var n=bf;if(n&&e){var r=ft(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0,type:`module`},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),pt(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function kf(e,t,n,r){var i=(i=ne.current)?gf(i):null;if(!i)throw Error(o(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(t=Af(n.href),n=ft(i).hoistableStyles,r=n.get(t),r||(r={type:`style`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Af(n.href);var a=ft(i).hoistableStyles,s=a.get(e);if(s||(i=i.ownerDocument||i,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},a.set(e,s),(a=i.querySelector(jf(e)))&&!a._p&&(s.instance=a,s.state.loading=5),mf.has(e)||(n={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},mf.set(e,n),a||Nf(i,e,n,s.state))),t&&r===null)throw Error(o(528,``));return s}if(t&&r!==null)throw Error(o(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(t=Pf(n),n=ft(i).hoistableScripts,r=n.get(t),r||(r={type:`script`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(o(444,e))}}function Af(e){return`href="`+Mt(e)+`"`}function jf(e){return`link[rel="stylesheet"][`+e+`]`}function Mf(e){return h({},e,{"data-precedence":e.precedence,precedence:null})}function Nf(e,t,n,r){e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)?r.loading=1:(t=e.createElement(`link`),r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2}),Pd(t,`link`,n),pt(t),e.head.appendChild(t))}function Pf(e){return`[src="`+Mt(e)+`"]`}function Ff(e){return`script[async]`+e}function If(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+Mt(n.href)+`"]`);if(r)return t.instance=r,pt(r),r;var i=h({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),pt(r),Pd(r,`style`,i),Lf(r,n.precedence,e),t.instance=r;case`stylesheet`:i=Af(n.href);var a=e.querySelector(jf(i));if(a)return t.state.loading|=4,t.instance=a,pt(a),a;r=Mf(n),(i=mf.get(i))&&Rf(r,i),a=(e.ownerDocument||e).createElement(`link`),pt(a);var s=a;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),Pd(a,`link`,r),t.state.loading|=4,Lf(a,n.precedence,e),t.instance=a;case`script`:return a=Pf(n.src),(i=e.querySelector(Ff(a)))?(t.instance=i,pt(i),i):(r=n,(i=mf.get(a))&&(r=h({},n),zf(r,i)),e=e.ownerDocument||e,i=e.createElement(`script`),pt(i),Pd(i,`link`,r),e.head.appendChild(i),t.instance=i);case`void`:return null;default:throw Error(o(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Lf(r,n.precedence,e));return t.instance}function Lf(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Rf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function zf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Bf=null;function Vf(e,t,n){if(Bf===null){var r=new Map,i=Bf=new Map;i.set(n,r)}else i=Bf,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[st]||a[et]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Hf(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function Uf(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Wf(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Gf(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Af(r.href),a=t.querySelector(jf(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=Jf.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,pt(a);return}a=t.ownerDocument||t,r=Mf(r),(i=mf.get(i))&&Rf(r,i),a=a.createElement(`link`),pt(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Pd(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=Jf.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var Kf=0;function qf(e,t){return e.stylesheets&&e.count===0&&Xf(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&Kf===0&&(Kf=62500*Ld());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>Kf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function Jf(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Xf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Yf=null;function Xf(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Yf=new Map,t.forEach(Zf,e),Yf=null,Jf.call(e))}function Zf(e,t){if(!(t.state.loading&4)){var n=Yf.get(e);if(n)var r=n.get(null);else{n=new Map,Yf.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=Jf.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var Qf={$$typeof:C,Provider:null,Consumer:null,_currentValue:R,_currentValue2:R,_threadCount:0};function $f(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ue(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ue(0),this.hiddenUpdates=Ue(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function ep(e,t,n,r,i,a,o,s,c,l,u,d){return e=new $f(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=ei(3,null,null,t),e.current=a,a.stateNode=e,t=$i(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},Ma(a),e}function tp(e){return e?(e=Qr,e):Qr}function np(e,t,n,r,i,a){i=tp(i),r.context===null?r.context=i:r.pendingContext=i,r=Pa(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=Fa(e,r,t),n!==null&&(pu(n,e,t),Ia(n,e,t))}function rp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ip(e,t){rp(e,t),(e=e.alternate)&&rp(e,t)}function ap(e){if(e.tag===13||e.tag===31){var t=Yr(e,67108864);t!==null&&pu(t,e,67108864),ip(e,67108864)}}function op(e){if(e.tag===13||e.tag===31){var t=du();t=Ye(t);var n=Yr(e,t);n!==null&&pu(n,e,t),ip(e,t)}}var sp=!0;function cp(e,t,n,r){var i=I.T;I.T=null;var a=L.p;try{L.p=2,up(e,t,n,r)}finally{L.p=a,I.T=i}}function lp(e,t,n,r){var i=I.T;I.T=null;var a=L.p;try{L.p=8,up(e,t,n,r)}finally{L.p=a,I.T=i}}function up(e,t,n,r){if(sp){var i=dp(r);if(i===null)Cd(e,t,r,fp,n),Cp(e,r);else if(Tp(i,e,t,n,r))r.stopPropagation();else if(Cp(e,r),t&4&&-1<Sp.indexOf(e)){for(;i!==null;){var a=ut(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=Re(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-je(o);s.entanglements[1]|=c,o&=~c}nd(a),!(X&6)&&($l=be()+500,rd(0,!1))}}break;case 31:case 13:s=Yr(a,2),s!==null&&pu(s,a,2),vu(),ip(a,2)}if(a=dp(r),a===null&&Cd(e,t,r,fp,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else Cd(e,t,r,null,n)}}function dp(e){return e=Yt(e),pp(e)}var fp=null;function pp(e){if(fp=null,e=lt(e),e!==null){var t=l(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=u(t),e!==null)return e;e=null}else if(n===31){if(e=d(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return fp=e,null}function mp(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(xe()){case W:return 2;case Se:return 8;case Ce:case we:return 32;case Te:return 268435456;default:return 32}default:return 32}}var hp=!1,gp=null,_p=null,vp=null,yp=new Map,bp=new Map,xp=[],Sp=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Cp(e,t){switch(e){case`focusin`:case`focusout`:gp=null;break;case`dragenter`:case`dragleave`:_p=null;break;case`mouseover`:case`mouseout`:vp=null;break;case`pointerover`:case`pointerout`:yp.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:bp.delete(t.pointerId)}}function wp(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=ut(t),t!==null&&ap(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Tp(e,t,n,r,i){switch(t){case`focusin`:return gp=wp(gp,e,t,n,r,i),!0;case`dragenter`:return _p=wp(_p,e,t,n,r,i),!0;case`mouseover`:return vp=wp(vp,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return yp.set(a,wp(yp.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,bp.set(a,wp(bp.get(a)||null,e,t,n,r,i)),!0}return!1}function Ep(e){var t=lt(e.target);if(t!==null){var n=l(t);if(n!==null){if(t=n.tag,t===13){if(t=u(n),t!==null){e.blockedOn=t,Qe(e.priority,function(){op(n)});return}}else if(t===31){if(t=d(n),t!==null){e.blockedOn=t,Qe(e.priority,function(){op(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Dp(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=dp(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Jt=r,n.target.dispatchEvent(r),Jt=null}else return t=ut(n),t!==null&&ap(t),e.blockedOn=n,!1;t.shift()}return!0}function Op(e,t,n){Dp(e)&&n.delete(t)}function kp(){hp=!1,gp!==null&&Dp(gp)&&(gp=null),_p!==null&&Dp(_p)&&(_p=null),vp!==null&&Dp(vp)&&(vp=null),yp.forEach(Op),bp.forEach(Op)}function Ap(e,n){e.blockedOn===n&&(e.blockedOn=null,hp||(hp=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,kp)))}var jp=null;function Mp(e){jp!==e&&(jp=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){jp===e&&(jp=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(pp(r||n)===null)continue;break}var a=ut(n);a!==null&&(e.splice(t,3),t-=3,vs(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Np(e){function t(t){return Ap(t,e)}gp!==null&&Ap(gp,e),_p!==null&&Ap(_p,e),vp!==null&&Ap(vp,e),yp.forEach(t),bp.forEach(t);for(var n=0;n<xp.length;n++){var r=xp[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<xp.length&&(n=xp[0],n.blockedOn===null);)Ep(n),n.blockedOn===null&&xp.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[tt]||null;if(typeof a==`function`)o||Mp(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[tt]||null)s=o.formAction;else if(pp(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Mp(n)}}}function Pp(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Fp(e){this._internalRoot=e}Ip.prototype.render=Fp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(o(409));var n=t.current;np(n,du(),e,t,null,null)},Ip.prototype.unmount=Fp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;np(e.current,2,null,e,null,null),vu(),t[nt]=null}};function Ip(e){this._internalRoot=e}Ip.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ze();e={blockedOn:null,target:e,priority:t};for(var n=0;n<xp.length&&t!==0&&t<xp[n].priority;n++);xp.splice(n,0,e),n===0&&Ep(e)}};var Lp=n.version;if(Lp!==`19.2.8`)throw Error(o(527,Lp,`19.2.8`));L.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(o(188)):(e=Object.keys(e).join(`,`),Error(o(268,e)));return e=p(t),e=e===null?null:m(e),e=e===null?null:e.stateNode,e};var Rp={bundleType:0,version:`19.2.8`,rendererPackageName:`react-dom`,currentDispatcherRef:I,reconcilerVersion:`19.2.8`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var zp=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zp.isDisabled&&zp.supportsFiber)try{Oe=zp.inject(Rp),ke=zp}catch{}}e.createRoot=function(e,t){if(!c(e))throw Error(o(299));var n=!1,r=``,i=Vs,a=Hs,s=Us;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(i=t.onUncaughtError),t.onCaughtError!==void 0&&(a=t.onCaughtError),t.onRecoverableError!==void 0&&(s=t.onRecoverableError)),t=ep(e,1,!1,null,null,n,r,null,i,a,s,Pp),e[nt]=t.current,xd(e),new Fp(t)}})),l=e(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=c()})),u=r(),d=l(),f={xray:`X-ray`,ct:`CT`,mri:`MRI`,us:`Ultrasound`,mammogram:`Mammogram`},p={abdomen:`Abdomen`,kidney:`Kidney`,liver:`Liver`,chest:`Chest`,chest_abdomen:`Chest & Abdomen`,angio_aorta:`Angio — Aorta`,angio_coronary:`Angio — Coronary`,angio_carotid_brain:`Angio — Carotid / Brain`,angio_extremities:`Angio — Extremities`,angio_other:`Angio — Other`,brain:`Brain`,spine:`Spine`,kub:`KUB / Kidney`,neck:`Neck / Thyroid`,doppler_extremity:`Doppler — Extremity`,pelvis:`Pelvis`,spine_extremity:`Spine & Extremity`,extremity:`Extremity`,soft_tissue:`Soft Tissue`,thyroid:`Thyroid`,knee:`Knee`};function m(e){return f[e]||e}function h(e){return p[e]||e.replace(/_/g,` `).replace(/\b\w/g,e=>e.toUpperCase())}var g=e((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),_=e(((e,t)=>{t.exports=g()}))();function v(e){let t=[];for(let n of Object.keys(e))for(let r of Object.keys(e[n]))for(let i of Object.keys(e[n][r]))t.push({modality:n,region:r,name:i,data:e[n][r][i]});return t}function y({templates:e,userTemplates:t,onSelectTemplate:n,selected:r,openScope:i,onOpenScopeChange:a,onDeleteUserTemplate:o,onRenameUserTemplate:s,onDeleteUserRegion:c,onDeleteUserModality:l,collapsed:d,onToggleCollapsed:f}){let[p,g]=(0,u.useState)(``),[y,b]=(0,u.useState)(null),x=i?.modality??null,S=i?`${i.modality}.${i.region}`:null,C=Object.keys(e).filter(t=>Object.keys(e[t]).length>0),w=p.trim().toLowerCase(),T=w?v(e).filter(e=>e.name.toLowerCase().includes(w)):null;(0,u.useEffect)(()=>{if(!y)return;let e=()=>b(null);return window.addEventListener(`click`,e),window.addEventListener(`scroll`,e,!0),()=>{window.removeEventListener(`click`,e),window.removeEventListener(`scroll`,e,!0)}},[y]);let E=(e,n,r,i)=>{e.preventDefault(),t?.[n]?.[r]?.[i]&&b({x:e.clientX,y:e.clientY,type:`template`,modality:n,region:r,name:i})},D=(e,n,r)=>{e.preventDefault(),Object.keys(t?.[n]?.[r]||{}).length&&b({x:e.clientX,y:e.clientY,type:`region`,modality:n,region:r})},O=(e,n)=>{e.preventDefault();let r=t?.[n]||{};Object.values(r).some(e=>Object.keys(e||{}).length>0)&&b({x:e.clientX,y:e.clientY,type:`modality`,modality:n})},k=(t,i,a)=>(0,_.jsx)(`li`,{children:(0,_.jsx)(`button`,{className:`w-full text-left pl-8 pr-3 py-1.5 text-sm hover:bg-blue-50 ${r&&r.modality===t&&r.region===i&&r.name===a?`bg-blue-100 text-blue-800 font-medium`:`text-slate-700`}`,onClick:()=>n(t,i,a,e[t][i][a]),onContextMenu:e=>E(e,t,i,a),children:a})},`${t}-${i}-${a}`);return d?(0,_.jsx)(`div`,{className:`h-full min-h-0 flex flex-col items-center bg-slate-50 border-r border-slate-200 py-2`,children:(0,_.jsx)(`button`,{className:`text-slate-500 hover:text-slate-800 hover:bg-slate-200 rounded px-1 py-2`,title:`Expand template menu`,onClick:f,children:`▸`})}):(0,_.jsxs)(`div`,{className:`h-full min-h-0 flex flex-col bg-slate-50 border-r border-slate-200`,children:[(0,_.jsxs)(`div`,{className:`p-2 border-b border-slate-200 shrink-0 flex items-center gap-1`,children:[(0,_.jsx)(`input`,{className:`w-full border border-slate-300 rounded px-2 py-1.5 text-sm`,placeholder:`🔍 Search templates...`,value:p,onChange:e=>g(e.target.value)}),(0,_.jsx)(`button`,{className:`shrink-0 text-slate-500 hover:text-slate-800 hover:bg-slate-200 rounded px-1.5 py-1.5`,title:`Collapse template menu`,onClick:f,children:`◂`})]}),(0,_.jsx)(`div`,{className:`flex-1 overflow-y-auto`,children:T?T.length===0?(0,_.jsxs)(`div`,{className:`p-4 text-sm text-slate-400`,children:[`No templates match "`,p.trim(),`".`]}):(0,_.jsx)(`ul`,{children:T.map(e=>(0,_.jsx)(`li`,{className:`border-b border-slate-100`,children:(0,_.jsxs)(`button`,{className:`w-full text-left px-3 py-1.5 text-sm hover:bg-blue-50 text-slate-700`,onClick:()=>n(e.modality,e.region,e.name,e.data),onContextMenu:t=>E(t,e.modality,e.region,e.name),children:[(0,_.jsx)(`div`,{children:e.name}),(0,_.jsxs)(`div`,{className:`text-xs text-slate-400`,children:[m(e.modality),` · `,h(e.region)]})]})},`${e.modality}-${e.region}-${e.name}`))}):C.map(t=>{let n=Object.keys(e[t]),r=x===t;return(0,_.jsxs)(`div`,{className:`border-b border-slate-200`,children:[(0,_.jsxs)(`button`,{className:`w-full text-left px-3 py-2 font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 sticky top-0 flex items-center justify-between`,onClick:()=>a(r?null:{modality:t,region:null}),onContextMenu:e=>O(e,t),children:[(0,_.jsx)(`span`,{children:m(t)}),(0,_.jsx)(`span`,{className:`text-xs text-slate-500`,children:r?`▾`:`▸`})]}),r&&(0,_.jsx)(`div`,{children:n.map(n=>{let r=`${t}.${n}`,i=S===r,o=Object.keys(e[t][n]);return(0,_.jsxs)(`div`,{children:[(0,_.jsxs)(`button`,{className:`w-full text-left pl-5 pr-3 py-1.5 text-sm font-medium text-slate-600 uppercase tracking-wide hover:bg-slate-100 flex items-center justify-between`,onClick:()=>a(i?{modality:t,region:null}:{modality:t,region:n}),onContextMenu:e=>D(e,t,n),children:[(0,_.jsx)(`span`,{children:h(n)}),(0,_.jsx)(`span`,{className:`text-xs text-slate-400`,children:i?`▾`:`▸`})]}),i&&(0,_.jsx)(`ul`,{children:o.map(e=>k(t,n,e))})]},n)})})]},t)})}),y&&(0,_.jsxs)(`div`,{className:`fixed z-50 bg-white border border-slate-200 rounded shadow-lg py-1 text-sm min-w-[120px]`,style:{top:y.y,left:y.x},onClick:e=>e.stopPropagation(),children:[y.type===`template`&&(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(`button`,{className:`w-full text-left px-3 py-1.5 hover:bg-slate-100 text-slate-700`,onClick:()=>{s(y.modality,y.region,y.name),b(null)},children:`Rename`}),(0,_.jsx)(`button`,{className:`w-full text-left px-3 py-1.5 hover:bg-red-50 text-red-600`,onClick:()=>{o(y.modality,y.region,y.name),b(null)},children:`Delete`})]}),y.type===`region`&&(0,_.jsx)(`button`,{className:`w-full text-left px-3 py-1.5 hover:bg-red-50 text-red-600`,onClick:()=>{c(y.modality,y.region),b(null)},children:`Delete region`}),y.type===`modality`&&(0,_.jsx)(`button`,{className:`w-full text-left px-3 py-1.5 hover:bg-red-50 text-red-600`,onClick:()=>{l(y.modality),b(null)},children:`Delete modality`})]})]})}var b=Object.create,x=Object.defineProperty,S=Object.getOwnPropertyDescriptor,C=Object.getOwnPropertyNames,w=Object.getPrototypeOf,T=Object.prototype.hasOwnProperty,E=(e,t)=>()=>(e&&(t=e(e=0)),t),D=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),O=(e,t,n,r)=>{if(t&&typeof t==`object`||typeof t==`function`)for(var i=C(t),a=0,o=i.length,s;a<o;a++)s=i[a],!T.call(e,s)&&s!==n&&x(e,s,{get:(e=>t[e]).bind(null,s),enumerable:!(r=S(t,s))||r.enumerable});return e},k=(e,t,n)=>(n=e==null?{}:b(w(e)),O(t||!e||!e.__esModule?x(n,`default`,{value:e,enumerable:!0}):n,e)),A=(e=>t===void 0?typeof Proxy<`u`?new Proxy(e,{get:(e,n)=>(t===void 0?e:t)[n]}):e:t)(function(e){if(t!==void 0)return t.apply(this,arguments);throw Error('Calling `require` for "'+e+"\" in an environment that doesn't expose the `require` function. See https://rolldown.rs/in-depth/bundling-cjs#require-external-modules for more details.")});function j(e){"@babel/helpers - typeof";return j=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},j(e)}function M(e,t){if(j(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(j(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function N(e){var t=M(e,`string`);return j(t)==`symbol`?t:t+``}function P(e,t,n){return(t=N(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var F=class{constructor(e){P(this,`rootKey`,void 0),this.rootKey=e}},I=Object.seal({}),L=class extends F{constructor(e){super(e),P(this,`root`,void 0),this.root=[]}prepForXml(e){e.stack.push(this);let t=this.root.map(t=>t instanceof F?t.prepForXml(e):t).filter(e=>e!==void 0);return e.stack.pop(),{[this.rootKey]:t.length?t.length===1&&t[0]?._attr?t[0]:t:I}}addChildElement(e){return this.root.push(e),this}},R=class extends L{constructor(e,t){super(e),P(this,`includeIfEmpty`,void 0),this.includeIfEmpty=t}prepForXml(e){let t=super.prepForXml(e);if(this.includeIfEmpty||t&&(typeof t[this.rootKey]!=`object`||Object.keys(t[this.rootKey]).length))return t}};function z(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function B(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?z(Object(n),!0).forEach(function(t){P(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):z(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var V=class extends F{constructor(e){super(`_attr`),P(this,`root`,void 0),P(this,`xmlKeys`,void 0),this.root=e}prepForXml(e){let t={};return Object.entries(this.root).forEach(([e,n])=>{if(n!==void 0){let r=this.xmlKeys&&this.xmlKeys[e]||e;t[r]=n}}),{_attr:t}}},H=class extends F{constructor(e){super(`_attr`),P(this,`root`,void 0),this.root=e}prepForXml(e){return{_attr:Object.values(this.root).filter(({value:e})=>e!==void 0).reduce((e,{key:t,value:n})=>B(B({},e),{},{[t]:n}),{})}}},U=class extends V{constructor(...e){super(...e),P(this,`xmlKeys`,{val:`w:val`,color:`w:color`,fill:`w:fill`,space:`w:space`,sz:`w:sz`,type:`w:type`,rsidR:`w:rsidR`,rsidRPr:`w:rsidRPr`,rsidSect:`w:rsidSect`,w:`w:w`,h:`w:h`,top:`w:top`,right:`w:right`,bottom:`w:bottom`,left:`w:left`,header:`w:header`,footer:`w:footer`,gutter:`w:gutter`,linePitch:`w:linePitch`,pos:`w:pos`})}},ee=D(((e,t)=>{var n=typeof Reflect==`object`?Reflect:null,r=n&&typeof n.apply==`function`?n.apply:function(e,t,n){return Function.prototype.apply.call(e,t,n)},i=n&&typeof n.ownKeys==`function`?n.ownKeys:Object.getOwnPropertySymbols?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:function(e){return Object.getOwnPropertyNames(e)};function a(e){console&&console.warn&&console.warn(e)}var o=Number.isNaN||function(e){return e!==e};function s(){s.init.call(this)}t.exports=s,t.exports.once=y,s.EventEmitter=s,s.prototype._events=void 0,s.prototype._eventsCount=0,s.prototype._maxListeners=void 0;var c=10;function l(e){if(typeof e!=`function`)throw TypeError(`The "listener" argument must be of type Function. Received type `+typeof e)}Object.defineProperty(s,"defaultMaxListeners",{enumerable:!0,get:function(){return c},set:function(e){if(typeof e!=`number`||e<0||o(e))throw RangeError(`The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received `+e+`.`);c=e}}),s.init=function(){(this._events===void 0||this._events===Object.getPrototypeOf(this)._events)&&(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},s.prototype.setMaxListeners=function(e){if(typeof e!=`number`||e<0||o(e))throw RangeError(`The value of "n" is out of range. It must be a non-negative number. Received `+e+`.`);return this._maxListeners=e,this};function u(e){return e._maxListeners===void 0?s.defaultMaxListeners:e._maxListeners}s.prototype.getMaxListeners=function(){return u(this)},s.prototype.emit=function(e){for(var t=[],n=1;n<arguments.length;n++)t.push(arguments[n]);var i=e===`error`,a=this._events;if(a!==void 0)i&&=a.error===void 0;else if(!i)return!1;if(i){var o;if(t.length>0&&(o=t[0]),o instanceof Error)throw o;var s=Error(`Unhandled error.`+(o?` (`+o.message+`)`:``));throw s.context=o,s}var c=a[e];if(c===void 0)return!1;if(typeof c==`function`)r(c,this,t);else for(var l=c.length,u=g(c,l),n=0;n<l;++n)r(u[n],this,t);return!0};function d(e,t,n,r){var i,o,s;if(l(n),o=e._events,o===void 0?(o=e._events=Object.create(null),e._eventsCount=0):(o.newListener!==void 0&&(e.emit(`newListener`,t,n.listener?n.listener:n),o=e._events),s=o[t]),s===void 0)s=o[t]=n,++e._eventsCount;else if(typeof s==`function`?s=o[t]=r?[n,s]:[s,n]:r?s.unshift(n):s.push(n),i=u(e),i>0&&s.length>i&&!s.warned){s.warned=!0;var c=Error(`Possible EventEmitter memory leak detected. `+s.length+` `+String(t)+` listeners added. Use emitter.setMaxListeners() to increase limit`);c.name=`MaxListenersExceededWarning`,c.emitter=e,c.type=t,c.count=s.length,a(c)}return e}s.prototype.addListener=function(e,t){return d(this,e,t,!1)},s.prototype.on=s.prototype.addListener,s.prototype.prependListener=function(e,t){return d(this,e,t,!0)};function f(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,arguments.length===0?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function p(e,t,n){var r={fired:!1,wrapFn:void 0,target:e,type:t,listener:n},i=f.bind(r);return i.listener=n,r.wrapFn=i,i}s.prototype.once=function(e,t){return l(t),this.on(e,p(this,e,t)),this},s.prototype.prependOnceListener=function(e,t){return l(t),this.prependListener(e,p(this,e,t)),this},s.prototype.removeListener=function(e,t){var n,r,i,a,o;if(l(t),r=this._events,r===void 0||(n=r[e],n===void 0))return this;if(n===t||n.listener===t)--this._eventsCount===0?this._events=Object.create(null):(delete r[e],r.removeListener&&this.emit(`removeListener`,e,n.listener||t));else if(typeof n!=`function`){for(i=-1,a=n.length-1;a>=0;a--)if(n[a]===t||n[a].listener===t){o=n[a].listener,i=a;break}if(i<0)return this;i===0?n.shift():_(n,i),n.length===1&&(r[e]=n[0]),r.removeListener!==void 0&&this.emit(`removeListener`,e,o||t)}return this},s.prototype.off=s.prototype.removeListener,s.prototype.removeAllListeners=function(e){var t,n=this._events,r;if(n===void 0)return this;if(n.removeListener===void 0)return arguments.length===0?(this._events=Object.create(null),this._eventsCount=0):n[e]!==void 0&&(--this._eventsCount===0?this._events=Object.create(null):delete n[e]),this;if(arguments.length===0){var i=Object.keys(n),a;for(r=0;r<i.length;++r)a=i[r],a!==`removeListener`&&this.removeAllListeners(a);return this.removeAllListeners(`removeListener`),this._events=Object.create(null),this._eventsCount=0,this}if(t=n[e],typeof t==`function`)this.removeListener(e,t);else if(t!==void 0)for(r=t.length-1;r>=0;r--)this.removeListener(e,t[r]);return this};function m(e,t,n){var r=e._events;if(r===void 0)return[];var i=r[t];return i===void 0?[]:typeof i==`function`?n?[i.listener||i]:[i]:n?v(i):g(i,i.length)}s.prototype.listeners=function(e){return m(this,e,!0)},s.prototype.rawListeners=function(e){return m(this,e,!1)},s.listenerCount=function(e,t){return typeof e.listenerCount==`function`?e.listenerCount(t):h.call(e,t)},s.prototype.listenerCount=h;function h(e){var t=this._events;if(t!==void 0){var n=t[e];if(typeof n==`function`)return 1;if(n!==void 0)return n.length}return 0}s.prototype.eventNames=function(){return this._eventsCount>0?i(this._events):[]};function g(e,t){for(var n=Array(t),r=0;r<t;++r)n[r]=e[r];return n}function _(e,t){for(;t+1<e.length;t++)e[t]=e[t+1];e.pop()}function v(e){for(var t=Array(e.length),n=0;n<t.length;++n)t[n]=e[n].listener||e[n];return t}function y(e,t){return new Promise(function(n,r){function i(n){e.removeListener(t,a),r(n)}function a(){typeof e.removeListener==`function`&&e.removeListener(`error`,i),n([].slice.call(arguments))}x(e,t,a,{once:!0}),t!==`error`&&b(e,i,{once:!0})})}function b(e,t,n){typeof e.on==`function`&&x(e,`error`,t,n)}function x(e,t,n,r){if(typeof e.on==`function`)r.once?e.once(t,n):e.on(t,n);else if(typeof e.addEventListener==`function`)e.addEventListener(t,function i(a){r.once&&e.removeEventListener(t,i),n(a)});else throw TypeError(`The "emitter" argument must be of type EventEmitter. Received type `+typeof e)}})),te=D(((e,t)=>{typeof Object.create==`function`?t.exports=function(e,t){t&&(e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}))}:t.exports=function(e,t){if(t){e.super_=t;var n=function(){};n.prototype=t.prototype,e.prototype=new n,e.prototype.constructor=e}}})),ne,re=E((()=>{ne=globalThis||self}));function ie(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,`default`)?e.default:e}function ae(){throw Error(`setTimeout has not been defined`)}function oe(){throw Error(`clearTimeout has not been defined`)}function se(e){if(he===setTimeout)return setTimeout(e,0);if((he===ae||!he)&&setTimeout)return he=setTimeout,setTimeout(e,0);try{return he(e,0)}catch{try{return he.call(null,e,0)}catch{return he.call(this,e,0)}}}function ce(e){if(ge===clearTimeout)return clearTimeout(e);if((ge===oe||!ge)&&clearTimeout)return ge=clearTimeout,clearTimeout(e);try{return ge(e)}catch{try{return ge.call(null,e)}catch{return ge.call(this,e)}}}function le(){!ve||!ye||(ve=!1,ye.length?_e=ye.concat(_e):be=-1,_e.length&&ue())}function ue(){if(!ve){var e=se(le);ve=!0;for(var t=_e.length;t;){for(ye=_e,_e=[];++be<t;)ye&&ye[be].run();be=-1,t=_e.length}ye=null,ve=!1,ce(e)}}function de(e,t){this.fun=e,this.array=t}function fe(){}var pe,me,he,ge,_e,ve,ye,be,xe,W,Se=E((()=>{pe={exports:{}},me=pe.exports={},(function(){try{he=typeof setTimeout==`function`?setTimeout:ae}catch{he=ae}try{ge=typeof clearTimeout==`function`?clearTimeout:oe}catch{ge=oe}})(),_e=[],ve=!1,be=-1,me.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];_e.push(new de(e,t)),_e.length===1&&!ve&&se(ue)},de.prototype.run=function(){this.fun.apply(null,this.array)},me.title=`browser`,me.browser=!0,me.env={},me.argv=[],me.version=``,me.versions={},me.on=fe,me.addListener=fe,me.once=fe,me.off=fe,me.removeListener=fe,me.removeAllListeners=fe,me.emit=fe,me.prependListener=fe,me.prependOnceListener=fe,me.listeners=function(e){return[]},me.binding=function(e){throw Error(`process.binding is not supported`)},me.cwd=function(){return`/`},me.chdir=function(e){throw Error(`process.chdir is not supported`)},me.umask=function(){return 0},xe=pe.exports,W=ie(xe)})),Ce=D(((e,t)=>{t.exports=ee().EventEmitter})),we=D((e=>{e.byteLength=c,e.toByteArray=u,e.fromByteArray=p;for(var t=[],n=[],r=typeof Uint8Array<`u`?Uint8Array:Array,i=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/`,a=0,o=i.length;a<o;++a)t[a]=i[a],n[i.charCodeAt(a)]=a;n[45]=62,n[95]=63;function s(e){var t=e.length;if(t%4>0)throw Error(`Invalid string. Length must be a multiple of 4`);var n=e.indexOf(`=`);n===-1&&(n=t);var r=n===t?0:4-n%4;return[n,r]}function c(e){var t=s(e),n=t[0],r=t[1];return(n+r)*3/4-r}function l(e,t,n){return(t+n)*3/4-n}function u(e){var t,i=s(e),a=i[0],o=i[1],c=new r(l(e,a,o)),u=0,d=o>0?a-4:a,f;for(f=0;f<d;f+=4)t=n[e.charCodeAt(f)]<<18|n[e.charCodeAt(f+1)]<<12|n[e.charCodeAt(f+2)]<<6|n[e.charCodeAt(f+3)],c[u++]=t>>16&255,c[u++]=t>>8&255,c[u++]=t&255;return o===2&&(t=n[e.charCodeAt(f)]<<2|n[e.charCodeAt(f+1)]>>4,c[u++]=t&255),o===1&&(t=n[e.charCodeAt(f)]<<10|n[e.charCodeAt(f+1)]<<4|n[e.charCodeAt(f+2)]>>2,c[u++]=t>>8&255,c[u++]=t&255),c}function d(e){return t[e>>18&63]+t[e>>12&63]+t[e>>6&63]+t[e&63]}function f(e,t,n){for(var r,i=[],a=t;a<n;a+=3)r=(e[a]<<16&16711680)+(e[a+1]<<8&65280)+(e[a+2]&255),i.push(d(r));return i.join(``)}function p(e){for(var n,r=e.length,i=r%3,a=[],o=16383,s=0,c=r-i;s<c;s+=o)a.push(f(e,s,s+o>c?c:s+o));return i===1?(n=e[r-1],a.push(t[n>>2]+t[n<<4&63]+`==`)):i===2&&(n=(e[r-2]<<8)+e[r-1],a.push(t[n>>10]+t[n>>4&63]+t[n<<2&63]+`=`)),a.join(``)}})),Te=D((e=>{e.read=function(e,t,n,r,i){var a,o,s=i*8-r-1,c=(1<<s)-1,l=c>>1,u=-7,d=n?i-1:0,f=n?-1:1,p=e[t+d];for(d+=f,a=p&(1<<-u)-1,p>>=-u,u+=s;u>0;a=a*256+e[t+d],d+=f,u-=8);for(o=a&(1<<-u)-1,a>>=-u,u+=r;u>0;o=o*256+e[t+d],d+=f,u-=8);if(a===0)a=1-l;else if(a===c)return o?NaN:(p?-1:1)*(1/0);else o+=2**r,a-=l;return(p?-1:1)*o*2**(a-r)},e.write=function(e,t,n,r,i,a){var o,s,c,l=a*8-i-1,u=(1<<l)-1,d=u>>1,f=i===23?2**-24-2**-77:0,p=r?0:a-1,m=r?1:-1,h=+(t<0||t===0&&1/t<0);for(t=Math.abs(t),isNaN(t)||t===1/0?(s=+!!isNaN(t),o=u):(o=Math.floor(Math.log(t)/Math.LN2),t*(c=2**-o)<1&&(o--,c*=2),o+d>=1?t+=f/c:t+=f*2**(1-d),t*c>=2&&(o++,c/=2),o+d>=u?(s=0,o=u):o+d>=1?(s=(t*c-1)*2**i,o+=d):(s=t*2**(d-1)*2**i,o=0));i>=8;e[n+p]=s&255,p+=m,s/=256,i-=8);for(o=o<<i|s,l+=i;l>0;e[n+p]=o&255,p+=m,o/=256,l-=8);e[n+p-m]|=h*128}})),Ee=D((e=>{var t=we(),n=Te(),r=typeof Symbol==`function`&&typeof Symbol.for==`function`?Symbol.for(`nodejs.util.inspect.custom`):null;e.Buffer=s,e.SlowBuffer=v,e.INSPECT_MAX_BYTES=50;var i=2147483647;e.kMaxLength=i,s.TYPED_ARRAY_SUPPORT=a(),!s.TYPED_ARRAY_SUPPORT&&typeof console<`u`&&typeof console.error==`function`&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function a(){try{var e=new Uint8Array(1),t={foo:function(){return 42}};return Object.setPrototypeOf(t,Uint8Array.prototype),Object.setPrototypeOf(e,t),e.foo()===42}catch{return!1}}Object.defineProperty(s.prototype,"parent",{enumerable:!0,get:function(){if(s.isBuffer(this))return this.buffer}}),Object.defineProperty(s.prototype,"offset",{enumerable:!0,get:function(){if(s.isBuffer(this))return this.byteOffset}});function o(e){if(e>i)throw RangeError(`The value "`+e+`" is invalid for option "size"`);var t=new Uint8Array(e);return Object.setPrototypeOf(t,s.prototype),t}function s(e,t,n){if(typeof e==`number`){if(typeof t==`string`)throw TypeError(`The "string" argument must be of type string. Received type number`);return d(e)}return c(e,t,n)}s.poolSize=8192;function c(e,t,n){if(typeof e==`string`)return f(e,t);if(ArrayBuffer.isView(e))return m(e);if(e==null)throw TypeError(`The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type `+typeof e);if(ae(e,ArrayBuffer)||e&&ae(e.buffer,ArrayBuffer)||typeof SharedArrayBuffer<`u`&&(ae(e,SharedArrayBuffer)||e&&ae(e.buffer,SharedArrayBuffer)))return h(e,t,n);if(typeof e==`number`)throw TypeError(`The "value" argument must not be of type number. Received type number`);var r=e.valueOf&&e.valueOf();if(r!=null&&r!==e)return s.from(r,t,n);var i=g(e);if(i)return i;if(typeof Symbol<`u`&&Symbol.toPrimitive!=null&&typeof e[Symbol.toPrimitive]==`function`)return s.from(e[Symbol.toPrimitive](`string`),t,n);throw TypeError(`The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type `+typeof e)}s.from=function(e,t,n){return c(e,t,n)},Object.setPrototypeOf(s.prototype,Uint8Array.prototype),Object.setPrototypeOf(s,Uint8Array);function l(e){if(typeof e!=`number`)throw TypeError(`"size" argument must be of type number`);if(e<0)throw RangeError(`The value "`+e+`" is invalid for option "size"`)}function u(e,t,n){return l(e),e<=0||t===void 0?o(e):typeof n==`string`?o(e).fill(t,n):o(e).fill(t)}s.alloc=function(e,t,n){return u(e,t,n)};function d(e){return l(e),o(e<0?0:_(e)|0)}s.allocUnsafe=function(e){return d(e)},s.allocUnsafeSlow=function(e){return d(e)};function f(e,t){if((typeof t!=`string`||t===``)&&(t=`utf8`),!s.isEncoding(t))throw TypeError(`Unknown encoding: `+t);var n=y(e,t)|0,r=o(n),i=r.write(e,t);return i!==n&&(r=r.slice(0,i)),r}function p(e){for(var t=e.length<0?0:_(e.length)|0,n=o(t),r=0;r<t;r+=1)n[r]=e[r]&255;return n}function m(e){if(ae(e,Uint8Array)){var t=new Uint8Array(e);return h(t.buffer,t.byteOffset,t.byteLength)}return p(e)}function h(e,t,n){if(t<0||e.byteLength<t)throw RangeError(`"offset" is outside of buffer bounds`);if(e.byteLength<t+(n||0))throw RangeError(`"length" is outside of buffer bounds`);var r=t===void 0&&n===void 0?new Uint8Array(e):n===void 0?new Uint8Array(e,t):new Uint8Array(e,t,n);return Object.setPrototypeOf(r,s.prototype),r}function g(e){if(s.isBuffer(e)){var t=_(e.length)|0,n=o(t);return n.length===0||e.copy(n,0,0,t),n}if(e.length!==void 0)return typeof e.length!=`number`||oe(e.length)?o(0):p(e);if(e.type===`Buffer`&&Array.isArray(e.data))return p(e.data)}function _(e){if(e>=i)throw RangeError(`Attempt to allocate Buffer larger than maximum size: 0x`+i.toString(16)+` bytes`);return e|0}function v(e){return+e!=e&&(e=0),s.alloc(+e)}s.isBuffer=function(e){return e!=null&&e._isBuffer===!0&&e!==s.prototype},s.compare=function(e,t){if(ae(e,Uint8Array)&&(e=s.from(e,e.offset,e.byteLength)),ae(t,Uint8Array)&&(t=s.from(t,t.offset,t.byteLength)),!s.isBuffer(e)||!s.isBuffer(t))throw TypeError(`The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array`);if(e===t)return 0;for(var n=e.length,r=t.length,i=0,a=Math.min(n,r);i<a;++i)if(e[i]!==t[i]){n=e[i],r=t[i];break}return n<r?-1:+(r<n)},s.isEncoding=function(e){switch(String(e).toLowerCase()){case`hex`:case`utf8`:case`utf-8`:case`ascii`:case`latin1`:case`binary`:case`base64`:case`ucs2`:case`ucs-2`:case`utf16le`:case`utf-16le`:return!0;default:return!1}},s.concat=function(e,t){if(!Array.isArray(e))throw TypeError(`"list" argument must be an Array of Buffers`);if(e.length===0)return s.alloc(0);var n;if(t===void 0)for(t=0,n=0;n<e.length;++n)t+=e[n].length;var r=s.allocUnsafe(t),i=0;for(n=0;n<e.length;++n){var a=e[n];if(ae(a,Uint8Array))i+a.length>r.length?s.from(a).copy(r,i):Uint8Array.prototype.set.call(r,a,i);else if(s.isBuffer(a))a.copy(r,i);else throw TypeError(`"list" argument must be an Array of Buffers`);i+=a.length}return r};function y(e,t){if(s.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||ae(e,ArrayBuffer))return e.byteLength;if(typeof e!=`string`)throw TypeError(`The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type `+typeof e);var n=e.length,r=arguments.length>2&&arguments[2]===!0;if(!r&&n===0)return 0;for(var i=!1;;)switch(t){case`ascii`:case`latin1`:case`binary`:return n;case`utf8`:case`utf-8`:return ee(e).length;case`ucs2`:case`ucs-2`:case`utf16le`:case`utf-16le`:return n*2;case`hex`:return n>>>1;case`base64`:return re(e).length;default:if(i)return r?-1:ee(e).length;t=(``+t).toLowerCase(),i=!0}}s.byteLength=y;function b(e,t,n){var r=!1;if((t===void 0||t<0)&&(t=0),t>this.length||((n===void 0||n>this.length)&&(n=this.length),n<=0)||(n>>>=0,t>>>=0,n<=t))return``;for(e||=`utf8`;;)switch(e){case`hex`:return F(this,t,n);case`utf8`:case`utf-8`:return A(this,t,n);case`ascii`:return N(this,t,n);case`latin1`:case`binary`:return P(this,t,n);case`base64`:return k(this,t,n);case`ucs2`:case`ucs-2`:case`utf16le`:case`utf-16le`:return I(this,t,n);default:if(r)throw TypeError(`Unknown encoding: `+e);e=(e+``).toLowerCase(),r=!0}}s.prototype._isBuffer=!0;function x(e,t,n){var r=e[t];e[t]=e[n],e[n]=r}s.prototype.swap16=function(){var e=this.length;if(e%2!=0)throw RangeError(`Buffer size must be a multiple of 16-bits`);for(var t=0;t<e;t+=2)x(this,t,t+1);return this},s.prototype.swap32=function(){var e=this.length;if(e%4!=0)throw RangeError(`Buffer size must be a multiple of 32-bits`);for(var t=0;t<e;t+=4)x(this,t,t+3),x(this,t+1,t+2);return this},s.prototype.swap64=function(){var e=this.length;if(e%8!=0)throw RangeError(`Buffer size must be a multiple of 64-bits`);for(var t=0;t<e;t+=8)x(this,t,t+7),x(this,t+1,t+6),x(this,t+2,t+5),x(this,t+3,t+4);return this},s.prototype.toString=function(){var e=this.length;return e===0?``:arguments.length===0?A(this,0,e):b.apply(this,arguments)},s.prototype.toLocaleString=s.prototype.toString,s.prototype.equals=function(e){if(!s.isBuffer(e))throw TypeError(`Argument must be a Buffer`);return this===e||s.compare(this,e)===0},s.prototype.inspect=function(){var t=``,n=e.INSPECT_MAX_BYTES;return t=this.toString(`hex`,0,n).replace(/(.{2})/g,`$1 `).trim(),this.length>n&&(t+=` ... `),`<Buffer `+t+`>`},r&&(s.prototype[r]=s.prototype.inspect),s.prototype.compare=function(e,t,n,r,i){if(ae(e,Uint8Array)&&(e=s.from(e,e.offset,e.byteLength)),!s.isBuffer(e))throw TypeError(`The "target" argument must be one of type Buffer or Uint8Array. Received type `+typeof e);if(t===void 0&&(t=0),n===void 0&&(n=e?e.length:0),r===void 0&&(r=0),i===void 0&&(i=this.length),t<0||n>e.length||r<0||i>this.length)throw RangeError(`out of range index`);if(r>=i&&t>=n)return 0;if(r>=i)return-1;if(t>=n)return 1;if(t>>>=0,n>>>=0,r>>>=0,i>>>=0,this===e)return 0;for(var a=i-r,o=n-t,c=Math.min(a,o),l=this.slice(r,i),u=e.slice(t,n),d=0;d<c;++d)if(l[d]!==u[d]){a=l[d],o=u[d];break}return a<o?-1:+(o<a)};function S(e,t,n,r,i){if(e.length===0)return-1;if(typeof n==`string`?(r=n,n=0):n>2147483647?n=2147483647:n<-2147483648&&(n=-2147483648),n=+n,oe(n)&&(n=i?0:e.length-1),n<0&&(n=e.length+n),n>=e.length){if(i)return-1;n=e.length-1}else if(n<0)if(i)n=0;else return-1;if(typeof t==`string`&&(t=s.from(t,r)),s.isBuffer(t))return t.length===0?-1:C(e,t,n,r,i);if(typeof t==`number`)return t&=255,typeof Uint8Array.prototype.indexOf==`function`?i?Uint8Array.prototype.indexOf.call(e,t,n):Uint8Array.prototype.lastIndexOf.call(e,t,n):C(e,[t],n,r,i);throw TypeError(`val must be string, number or Buffer`)}function C(e,t,n,r,i){var a=1,o=e.length,s=t.length;if(r!==void 0&&(r=String(r).toLowerCase(),r===`ucs2`||r===`ucs-2`||r===`utf16le`||r===`utf-16le`)){if(e.length<2||t.length<2)return-1;a=2,o/=2,s/=2,n/=2}function c(e,t){return a===1?e[t]:e.readUInt16BE(t*a)}var l;if(i){var u=-1;for(l=n;l<o;l++)if(c(e,l)===c(t,u===-1?0:l-u)){if(u===-1&&(u=l),l-u+1===s)return u*a}else u!==-1&&(l-=l-u),u=-1}else for(n+s>o&&(n=o-s),l=n;l>=0;l--){for(var d=!0,f=0;f<s;f++)if(c(e,l+f)!==c(t,f)){d=!1;break}if(d)return l}return-1}s.prototype.includes=function(e,t,n){return this.indexOf(e,t,n)!==-1},s.prototype.indexOf=function(e,t,n){return S(this,e,t,n,!0)},s.prototype.lastIndexOf=function(e,t,n){return S(this,e,t,n,!1)};function w(e,t,n,r){n=Number(n)||0;var i=e.length-n;r?(r=Number(r),r>i&&(r=i)):r=i;var a=t.length;r>a/2&&(r=a/2);for(var o=0;o<r;++o){var s=parseInt(t.substr(o*2,2),16);if(oe(s))return o;e[n+o]=s}return o}function T(e,t,n,r){return ie(ee(t,e.length-n),e,n,r)}function E(e,t,n,r){return ie(te(t),e,n,r)}function D(e,t,n,r){return ie(re(t),e,n,r)}function O(e,t,n,r){return ie(ne(t,e.length-n),e,n,r)}s.prototype.write=function(e,t,n,r){if(t===void 0)r=`utf8`,n=this.length,t=0;else if(n===void 0&&typeof t==`string`)r=t,n=this.length,t=0;else if(isFinite(t))t>>>=0,isFinite(n)?(n>>>=0,r===void 0&&(r=`utf8`)):(r=n,n=void 0);else throw Error(`Buffer.write(string, encoding, offset[, length]) is no longer supported`);var i=this.length-t;if((n===void 0||n>i)&&(n=i),e.length>0&&(n<0||t<0)||t>this.length)throw RangeError(`Attempt to write outside buffer bounds`);r||=`utf8`;for(var a=!1;;)switch(r){case`hex`:return w(this,e,t,n);case`utf8`:case`utf-8`:return T(this,e,t,n);case`ascii`:case`latin1`:case`binary`:return E(this,e,t,n);case`base64`:return D(this,e,t,n);case`ucs2`:case`ucs-2`:case`utf16le`:case`utf-16le`:return O(this,e,t,n);default:if(a)throw TypeError(`Unknown encoding: `+r);r=(``+r).toLowerCase(),a=!0}},s.prototype.toJSON=function(){return{type:`Buffer`,data:Array.prototype.slice.call(this._arr||this,0)}};function k(e,n,r){return n===0&&r===e.length?t.fromByteArray(e):t.fromByteArray(e.slice(n,r))}function A(e,t,n){n=Math.min(e.length,n);for(var r=[],i=t;i<n;){var a=e[i],o=null,s=a>239?4:a>223?3:a>191?2:1;if(i+s<=n){var c,l,u,d;switch(s){case 1:a<128&&(o=a);break;case 2:c=e[i+1],(c&192)==128&&(d=(a&31)<<6|c&63,d>127&&(o=d));break;case 3:c=e[i+1],l=e[i+2],(c&192)==128&&(l&192)==128&&(d=(a&15)<<12|(c&63)<<6|l&63,d>2047&&(d<55296||d>57343)&&(o=d));break;case 4:c=e[i+1],l=e[i+2],u=e[i+3],(c&192)==128&&(l&192)==128&&(u&192)==128&&(d=(a&15)<<18|(c&63)<<12|(l&63)<<6|u&63,d>65535&&d<1114112&&(o=d))}}o===null?(o=65533,s=1):o>65535&&(o-=65536,r.push(o>>>10&1023|55296),o=56320|o&1023),r.push(o),i+=s}return M(r)}var j=4096;function M(e){var t=e.length;if(t<=j)return String.fromCharCode.apply(String,e);for(var n=``,r=0;r<t;)n+=String.fromCharCode.apply(String,e.slice(r,r+=j));return n}function N(e,t,n){var r=``;n=Math.min(e.length,n);for(var i=t;i<n;++i)r+=String.fromCharCode(e[i]&127);return r}function P(e,t,n){var r=``;n=Math.min(e.length,n);for(var i=t;i<n;++i)r+=String.fromCharCode(e[i]);return r}function F(e,t,n){var r=e.length;(!t||t<0)&&(t=0),(!n||n<0||n>r)&&(n=r);for(var i=``,a=t;a<n;++a)i+=se[e[a]];return i}function I(e,t,n){for(var r=e.slice(t,n),i=``,a=0;a<r.length-1;a+=2)i+=String.fromCharCode(r[a]+r[a+1]*256);return i}s.prototype.slice=function(e,t){var n=this.length;e=~~e,t=t===void 0?n:~~t,e<0?(e+=n,e<0&&(e=0)):e>n&&(e=n),t<0?(t+=n,t<0&&(t=0)):t>n&&(t=n),t<e&&(t=e);var r=this.subarray(e,t);return Object.setPrototypeOf(r,s.prototype),r};function L(e,t,n){if(e%1!=0||e<0)throw RangeError(`offset is not uint`);if(e+t>n)throw RangeError(`Trying to access beyond buffer length`)}s.prototype.readUintLE=s.prototype.readUIntLE=function(e,t,n){e>>>=0,t>>>=0,n||L(e,t,this.length);for(var r=this[e],i=1,a=0;++a<t&&(i*=256);)r+=this[e+a]*i;return r},s.prototype.readUintBE=s.prototype.readUIntBE=function(e,t,n){e>>>=0,t>>>=0,n||L(e,t,this.length);for(var r=this[e+--t],i=1;t>0&&(i*=256);)r+=this[e+--t]*i;return r},s.prototype.readUint8=s.prototype.readUInt8=function(e,t){return e>>>=0,t||L(e,1,this.length),this[e]},s.prototype.readUint16LE=s.prototype.readUInt16LE=function(e,t){return e>>>=0,t||L(e,2,this.length),this[e]|this[e+1]<<8},s.prototype.readUint16BE=s.prototype.readUInt16BE=function(e,t){return e>>>=0,t||L(e,2,this.length),this[e]<<8|this[e+1]},s.prototype.readUint32LE=s.prototype.readUInt32LE=function(e,t){return e>>>=0,t||L(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+this[e+3]*16777216},s.prototype.readUint32BE=s.prototype.readUInt32BE=function(e,t){return e>>>=0,t||L(e,4,this.length),this[e]*16777216+(this[e+1]<<16|this[e+2]<<8|this[e+3])},s.prototype.readIntLE=function(e,t,n){e>>>=0,t>>>=0,n||L(e,t,this.length);for(var r=this[e],i=1,a=0;++a<t&&(i*=256);)r+=this[e+a]*i;return i*=128,r>=i&&(r-=2**(8*t)),r},s.prototype.readIntBE=function(e,t,n){e>>>=0,t>>>=0,n||L(e,t,this.length);for(var r=t,i=1,a=this[e+--r];r>0&&(i*=256);)a+=this[e+--r]*i;return i*=128,a>=i&&(a-=2**(8*t)),a},s.prototype.readInt8=function(e,t){return e>>>=0,t||L(e,1,this.length),this[e]&128?(255-this[e]+1)*-1:this[e]},s.prototype.readInt16LE=function(e,t){e>>>=0,t||L(e,2,this.length);var n=this[e]|this[e+1]<<8;return n&32768?n|4294901760:n},s.prototype.readInt16BE=function(e,t){e>>>=0,t||L(e,2,this.length);var n=this[e+1]|this[e]<<8;return n&32768?n|4294901760:n},s.prototype.readInt32LE=function(e,t){return e>>>=0,t||L(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},s.prototype.readInt32BE=function(e,t){return e>>>=0,t||L(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},s.prototype.readFloatLE=function(e,t){return e>>>=0,t||L(e,4,this.length),n.read(this,e,!0,23,4)},s.prototype.readFloatBE=function(e,t){return e>>>=0,t||L(e,4,this.length),n.read(this,e,!1,23,4)},s.prototype.readDoubleLE=function(e,t){return e>>>=0,t||L(e,8,this.length),n.read(this,e,!0,52,8)},s.prototype.readDoubleBE=function(e,t){return e>>>=0,t||L(e,8,this.length),n.read(this,e,!1,52,8)};function R(e,t,n,r,i,a){if(!s.isBuffer(e))throw TypeError(`"buffer" argument must be a Buffer instance`);if(t>i||t<a)throw RangeError(`"value" argument is out of bounds`);if(n+r>e.length)throw RangeError(`Index out of range`)}s.prototype.writeUintLE=s.prototype.writeUIntLE=function(e,t,n,r){if(e=+e,t>>>=0,n>>>=0,!r){var i=2**(8*n)-1;R(this,e,t,n,i,0)}var a=1,o=0;for(this[t]=e&255;++o<n&&(a*=256);)this[t+o]=e/a&255;return t+n},s.prototype.writeUintBE=s.prototype.writeUIntBE=function(e,t,n,r){if(e=+e,t>>>=0,n>>>=0,!r){var i=2**(8*n)-1;R(this,e,t,n,i,0)}var a=n-1,o=1;for(this[t+a]=e&255;--a>=0&&(o*=256);)this[t+a]=e/o&255;return t+n},s.prototype.writeUint8=s.prototype.writeUInt8=function(e,t,n){return e=+e,t>>>=0,n||R(this,e,t,1,255,0),this[t]=e&255,t+1},s.prototype.writeUint16LE=s.prototype.writeUInt16LE=function(e,t,n){return e=+e,t>>>=0,n||R(this,e,t,2,65535,0),this[t]=e&255,this[t+1]=e>>>8,t+2},s.prototype.writeUint16BE=s.prototype.writeUInt16BE=function(e,t,n){return e=+e,t>>>=0,n||R(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=e&255,t+2},s.prototype.writeUint32LE=s.prototype.writeUInt32LE=function(e,t,n){return e=+e,t>>>=0,n||R(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=e&255,t+4},s.prototype.writeUint32BE=s.prototype.writeUInt32BE=function(e,t,n){return e=+e,t>>>=0,n||R(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e&255,t+4},s.prototype.writeIntLE=function(e,t,n,r){if(e=+e,t>>>=0,!r){var i=2**(8*n-1);R(this,e,t,n,i-1,-i)}var a=0,o=1,s=0;for(this[t]=e&255;++a<n&&(o*=256);)e<0&&s===0&&this[t+a-1]!==0&&(s=1),this[t+a]=(e/o>>0)-s&255;return t+n},s.prototype.writeIntBE=function(e,t,n,r){if(e=+e,t>>>=0,!r){var i=2**(8*n-1);R(this,e,t,n,i-1,-i)}var a=n-1,o=1,s=0;for(this[t+a]=e&255;--a>=0&&(o*=256);)e<0&&s===0&&this[t+a+1]!==0&&(s=1),this[t+a]=(e/o>>0)-s&255;return t+n},s.prototype.writeInt8=function(e,t,n){return e=+e,t>>>=0,n||R(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=e&255,t+1},s.prototype.writeInt16LE=function(e,t,n){return e=+e,t>>>=0,n||R(this,e,t,2,32767,-32768),this[t]=e&255,this[t+1]=e>>>8,t+2},s.prototype.writeInt16BE=function(e,t,n){return e=+e,t>>>=0,n||R(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=e&255,t+2},s.prototype.writeInt32LE=function(e,t,n){return e=+e,t>>>=0,n||R(this,e,t,4,2147483647,-2147483648),this[t]=e&255,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4},s.prototype.writeInt32BE=function(e,t,n){return e=+e,t>>>=0,n||R(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e&255,t+4};function z(e,t,n,r,i,a){if(n+r>e.length||n<0)throw RangeError(`Index out of range`)}function B(e,t,r,i,a){return t=+t,r>>>=0,a||z(e,t,r,4,34028234663852886e22,-34028234663852886e22),n.write(e,t,r,i,23,4),r+4}s.prototype.writeFloatLE=function(e,t,n){return B(this,e,t,!0,n)},s.prototype.writeFloatBE=function(e,t,n){return B(this,e,t,!1,n)};function V(e,t,r,i,a){return t=+t,r>>>=0,a||z(e,t,r,8,17976931348623157e292,-17976931348623157e292),n.write(e,t,r,i,52,8),r+8}s.prototype.writeDoubleLE=function(e,t,n){return V(this,e,t,!0,n)},s.prototype.writeDoubleBE=function(e,t,n){return V(this,e,t,!1,n)},s.prototype.copy=function(e,t,n,r){if(!s.isBuffer(e))throw TypeError(`argument should be a Buffer`);if(n||=0,!r&&r!==0&&(r=this.length),t>=e.length&&(t=e.length),t||=0,r>0&&r<n&&(r=n),r===n||e.length===0||this.length===0)return 0;if(t<0)throw RangeError(`targetStart out of bounds`);if(n<0||n>=this.length)throw RangeError(`Index out of range`);if(r<0)throw RangeError(`sourceEnd out of bounds`);r>this.length&&(r=this.length),e.length-t<r-n&&(r=e.length-t+n);var i=r-n;return this===e&&typeof Uint8Array.prototype.copyWithin==`function`?this.copyWithin(t,n,r):Uint8Array.prototype.set.call(e,this.subarray(n,r),t),i},s.prototype.fill=function(e,t,n,r){if(typeof e==`string`){if(typeof t==`string`?(r=t,t=0,n=this.length):typeof n==`string`&&(r=n,n=this.length),r!==void 0&&typeof r!=`string`)throw TypeError(`encoding must be a string`);if(typeof r==`string`&&!s.isEncoding(r))throw TypeError(`Unknown encoding: `+r);if(e.length===1){var i=e.charCodeAt(0);(r===`utf8`&&i<128||r===`latin1`)&&(e=i)}}else typeof e==`number`?e&=255:typeof e==`boolean`&&(e=Number(e));if(t<0||this.length<t||this.length<n)throw RangeError(`Out of range index`);if(n<=t)return this;t>>>=0,n=n===void 0?this.length:n>>>0,e||=0;var a;if(typeof e==`number`)for(a=t;a<n;++a)this[a]=e;else{var o=s.isBuffer(e)?e:s.from(e,r),c=o.length;if(c===0)throw TypeError(`The value "`+e+`" is invalid for argument "value"`);for(a=0;a<n-t;++a)this[a+t]=o[a%c]}return this};var H=/[^+/0-9A-Za-z-_]/g;function U(e){if(e=e.split(`=`)[0],e=e.trim().replace(H,``),e.length<2)return``;for(;e.length%4!=0;)e+=`=`;return e}function ee(e,t){t||=1/0;for(var n,r=e.length,i=null,a=[],o=0;o<r;++o){if(n=e.charCodeAt(o),n>55295&&n<57344){if(!i){if(n>56319){(t-=3)>-1&&a.push(239,191,189);continue}else if(o+1===r){(t-=3)>-1&&a.push(239,191,189);continue}i=n;continue}if(n<56320){(t-=3)>-1&&a.push(239,191,189),i=n;continue}n=(i-55296<<10|n-56320)+65536}else i&&(t-=3)>-1&&a.push(239,191,189);if(i=null,n<128){if(--t<0)break;a.push(n)}else if(n<2048){if((t-=2)<0)break;a.push(n>>6|192,n&63|128)}else if(n<65536){if((t-=3)<0)break;a.push(n>>12|224,n>>6&63|128,n&63|128)}else if(n<1114112){if((t-=4)<0)break;a.push(n>>18|240,n>>12&63|128,n>>6&63|128,n&63|128)}else throw Error(`Invalid code point`)}return a}function te(e){for(var t=[],n=0;n<e.length;++n)t.push(e.charCodeAt(n)&255);return t}function ne(e,t){for(var n,r,i,a=[],o=0;o<e.length&&!((t-=2)<0);++o)n=e.charCodeAt(o),r=n>>8,i=n%256,a.push(i),a.push(r);return a}function re(e){return t.toByteArray(U(e))}function ie(e,t,n,r){for(var i=0;i<r&&!(i+n>=t.length||i>=e.length);++i)t[i+n]=e[i];return i}function ae(e,t){return e instanceof t||e!=null&&e.constructor!=null&&e.constructor.name!=null&&e.constructor.name===t.name}function oe(e){return e!==e}var se=(function(){for(var e=`0123456789abcdef`,t=Array(256),n=0;n<16;++n)for(var r=n*16,i=0;i<16;++i)t[r+i]=e[n]+e[i];return t})()})),De=D(((e,t)=>{t.exports=function(){if(typeof Symbol!=`function`||typeof Object.getOwnPropertySymbols!=`function`)return!1;if(typeof Symbol.iterator==`symbol`)return!0;var e={},t=Symbol(`test`),n=Object(t);if(typeof t==`string`||Object.prototype.toString.call(t)!==`[object Symbol]`||Object.prototype.toString.call(n)!==`[object Symbol]`)return!1;var r=42;for(var i in e[t]=r,e)return!1;if(typeof Object.keys==`function`&&Object.keys(e).length!==0||typeof Object.getOwnPropertyNames==`function`&&Object.getOwnPropertyNames(e).length!==0)return!1;var a=Object.getOwnPropertySymbols(e);if(a.length!==1||a[0]!==t||!Object.prototype.propertyIsEnumerable.call(e,t))return!1;if(typeof Object.getOwnPropertyDescriptor==`function`){var o=Object.getOwnPropertyDescriptor(e,t);if(o.value!==r||o.enumerable!==!0)return!1}return!0}})),Oe=D(((e,t)=>{var n=De();t.exports=function(){return n()&&!!Symbol.toStringTag}})),ke=D(((e,t)=>{t.exports=Object})),Ae=D(((e,t)=>{t.exports=Error})),je=D(((e,t)=>{t.exports=EvalError})),Me=D(((e,t)=>{t.exports=RangeError})),Ne=D(((e,t)=>{t.exports=ReferenceError})),Pe=D(((e,t)=>{t.exports=SyntaxError})),Fe=D(((e,t)=>{t.exports=TypeError})),Ie=D(((e,t)=>{t.exports=URIError})),Le=D(((e,t)=>{t.exports=Math.abs})),Re=D(((e,t)=>{t.exports=Math.floor})),ze=D(((e,t)=>{t.exports=Math.max})),Be=D(((e,t)=>{t.exports=Math.min})),Ve=D(((e,t)=>{t.exports=Math.pow})),He=D(((e,t)=>{t.exports=Math.round})),Ue=D(((e,t)=>{t.exports=Number.isNaN||function(e){return e!==e}})),We=D(((e,t)=>{var n=Ue();t.exports=function(e){return n(e)||e===0?e:e<0?-1:1}})),Ge=D(((e,t)=>{t.exports=Object.getOwnPropertyDescriptor})),Ke=D(((e,t)=>{var n=Ge();if(n)try{n([],`length`)}catch{n=null}t.exports=n})),qe=D(((e,t)=>{var n=Object.defineProperty||!1;if(n)try{n({},`a`,{value:1})}catch{n=!1}t.exports=n})),Je=D(((e,t)=>{var n=typeof Symbol<`u`&&Symbol,r=De();t.exports=function(){return typeof n!=`function`||typeof Symbol!=`function`||typeof n(`foo`)!=`symbol`||typeof Symbol(`bar`)!=`symbol`?!1:r()}})),Ye=D(((e,t)=>{t.exports=typeof Reflect<`u`&&Reflect.getPrototypeOf||null})),Xe=D(((e,t)=>{t.exports=ke().getPrototypeOf||null})),Ze=D(((e,t)=>{var n=Object.prototype.toString,r=Math.max,i=`[object Function]`,a=function(e,t){for(var n=[],r=0;r<e.length;r+=1)n[r]=e[r];for(var i=0;i<t.length;i+=1)n[i+e.length]=t[i];return n},o=function(e,t){for(var n=[],r=t||0,i=0;r<e.length;r+=1,i+=1)n[i]=e[r];return n},s=function(e,t){for(var n=``,r=0;r<e.length;r+=1)n+=e[r],r+1<e.length&&(n+=t);return n};t.exports=function(e){var t=this;if(typeof t!=`function`||n.apply(t)!==i)throw TypeError(`Function.prototype.bind called on incompatible `+t);for(var c=o(arguments,1),l,u=function(){if(this instanceof l){var n=t.apply(this,a(c,arguments));return Object(n)===n?n:this}return t.apply(e,a(c,arguments))},d=r(0,t.length-c.length),f=[],p=0;p<d;p++)f[p]=`$`+p;if(l=Function(`binder`,`return function (`+s(f,`,`)+`){ return binder.apply(this,arguments); }`)(u),t.prototype){var m=function(){};m.prototype=t.prototype,l.prototype=new m,m.prototype=null}return l}})),Qe=D(((e,t)=>{var n=Ze();t.exports=Function.prototype.bind||n})),$e=D(((e,t)=>{t.exports=Function.prototype.call})),et=D(((e,t)=>{t.exports=Function.prototype.apply})),tt=D(((e,t)=>{t.exports=typeof Reflect<`u`&&Reflect&&Reflect.apply})),nt=D(((e,t)=>{var n=Qe(),r=et(),i=$e();t.exports=tt()||n.call(i,r)})),rt=D(((e,t)=>{var n=Qe(),r=Fe(),i=$e(),a=nt();t.exports=function(e){if(e.length<1||typeof e[0]!=`function`)throw new r(`a function is required`);return a(n,i,e)}})),it=D(((e,t)=>{var n=rt(),r=Ke(),i;try{i=[].__proto__===Array.prototype}catch(e){if(!e||typeof e!=`object`||!(`code`in e)||e.code!==`ERR_PROTO_ACCESS`)throw e}var a=!!i&&r&&r(Object.prototype,`__proto__`),o=Object,s=o.getPrototypeOf;t.exports=a&&typeof a.get==`function`?n([a.get]):typeof s==`function`&&function(e){return s(e==null?e:o(e))}})),at=D(((e,t)=>{var n=Ye(),r=Xe(),i=it();t.exports=n?function(e){return n(e)}:r?function(e){if(!e||typeof e!=`object`&&typeof e!=`function`)throw TypeError(`getProto: not an object`);return r(e)}:i?function(e){return i(e)}:null})),ot=D(((e,t)=>{var n=Function.prototype.call,r=Object.prototype.hasOwnProperty;t.exports=Qe().call(n,r)})),st=D(((e,t)=>{var n,r=ke(),i=Ae(),a=je(),o=Me(),s=Ne(),c=Pe(),l=Fe(),u=Ie(),d=Le(),f=Re(),p=ze(),m=Be(),h=Ve(),g=He(),_=We(),v=Function,y=function(e){try{return v(`"use strict"; return (`+e+`).constructor;`)()}catch{}},b=Ke(),x=qe(),S=function(){throw new l},C=b?function(){try{return arguments.callee,S}catch{try{return b(arguments,`callee`).get}catch{return S}}}():S,w=Je()(),T=at(),E=Xe(),D=Ye(),O=et(),k=$e(),A={},j=typeof Uint8Array>`u`||!T?n:T(Uint8Array),M={__proto__:null,"%AggregateError%":typeof AggregateError>`u`?n:AggregateError,"%Array%":Array,"%ArrayBuffer%":typeof ArrayBuffer>`u`?n:ArrayBuffer,"%ArrayIteratorPrototype%":w&&T?T([][Symbol.iterator]()):n,"%AsyncFromSyncIteratorPrototype%":n,"%AsyncFunction%":A,"%AsyncGenerator%":A,"%AsyncGeneratorFunction%":A,"%AsyncIteratorPrototype%":A,"%Atomics%":typeof Atomics>`u`?n:Atomics,"%BigInt%":typeof BigInt>`u`?n:BigInt,"%BigInt64Array%":typeof BigInt64Array>`u`?n:BigInt64Array,"%BigUint64Array%":typeof BigUint64Array>`u`?n:BigUint64Array,"%Boolean%":Boolean,"%DataView%":typeof DataView>`u`?n:DataView,"%Date%":Date,"%decodeURI%":decodeURI,"%decodeURIComponent%":decodeURIComponent,"%encodeURI%":encodeURI,"%encodeURIComponent%":encodeURIComponent,"%Error%":i,"%eval%":eval,"%EvalError%":a,"%Float16Array%":typeof Float16Array>`u`?n:Float16Array,"%Float32Array%":typeof Float32Array>`u`?n:Float32Array,"%Float64Array%":typeof Float64Array>`u`?n:Float64Array,"%FinalizationRegistry%":typeof FinalizationRegistry>`u`?n:FinalizationRegistry,"%Function%":v,"%GeneratorFunction%":A,"%Int8Array%":typeof Int8Array>`u`?n:Int8Array,"%Int16Array%":typeof Int16Array>`u`?n:Int16Array,"%Int32Array%":typeof Int32Array>`u`?n:Int32Array,"%isFinite%":isFinite,"%isNaN%":isNaN,"%IteratorPrototype%":w&&T?T(T([][Symbol.iterator]())):n,"%JSON%":typeof JSON==`object`?JSON:n,"%Map%":typeof Map>`u`?n:Map,"%MapIteratorPrototype%":typeof Map>`u`||!w||!T?n:T(new Map()[Symbol.iterator]()),"%Math%":Math,"%Number%":Number,"%Object%":r,"%Object.getOwnPropertyDescriptor%":b,"%parseFloat%":parseFloat,"%parseInt%":parseInt,"%Promise%":typeof Promise>`u`?n:Promise,"%Proxy%":typeof Proxy>`u`?n:Proxy,"%RangeError%":o,"%ReferenceError%":s,"%Reflect%":typeof Reflect>`u`?n:Reflect,"%RegExp%":RegExp,"%Set%":typeof Set>`u`?n:Set,"%SetIteratorPrototype%":typeof Set>`u`||!w||!T?n:T(new Set()[Symbol.iterator]()),"%SharedArrayBuffer%":typeof SharedArrayBuffer>`u`?n:SharedArrayBuffer,"%String%":String,"%StringIteratorPrototype%":w&&T?T(``[Symbol.iterator]()):n,"%Symbol%":w?Symbol:n,"%SyntaxError%":c,"%ThrowTypeError%":C,"%TypedArray%":j,"%TypeError%":l,"%Uint8Array%":typeof Uint8Array>`u`?n:Uint8Array,"%Uint8ClampedArray%":typeof Uint8ClampedArray>`u`?n:Uint8ClampedArray,"%Uint16Array%":typeof Uint16Array>`u`?n:Uint16Array,"%Uint32Array%":typeof Uint32Array>`u`?n:Uint32Array,"%URIError%":u,"%WeakMap%":typeof WeakMap>`u`?n:WeakMap,"%WeakRef%":typeof WeakRef>`u`?n:WeakRef,"%WeakSet%":typeof WeakSet>`u`?n:WeakSet,"%Function.prototype.call%":k,"%Function.prototype.apply%":O,"%Object.defineProperty%":x,"%Object.getPrototypeOf%":E,"%Math.abs%":d,"%Math.floor%":f,"%Math.max%":p,"%Math.min%":m,"%Math.pow%":h,"%Math.round%":g,"%Math.sign%":_,"%Reflect.getPrototypeOf%":D};if(T)try{null.error}catch(e){M[`%Error.prototype%`]=T(T(e))}var N=function e(t){var n;if(t===`%AsyncFunction%`)n=y(`async function () {}`);else if(t===`%GeneratorFunction%`)n=y(`function* () {}`);else if(t===`%AsyncGeneratorFunction%`)n=y(`async function* () {}`);else if(t===`%AsyncGenerator%`){var r=e(`%AsyncGeneratorFunction%`);r&&(n=r.prototype)}else if(t===`%AsyncIteratorPrototype%`){var i=e(`%AsyncGenerator%`);i&&T&&(n=T(i.prototype))}return M[t]=n,n},P={__proto__:null,"%ArrayBufferPrototype%":[`ArrayBuffer`,`prototype`],"%ArrayPrototype%":[`Array`,`prototype`],"%ArrayProto_entries%":[`Array`,`prototype`,`entries`],"%ArrayProto_forEach%":[`Array`,`prototype`,`forEach`],"%ArrayProto_keys%":[`Array`,`prototype`,`keys`],"%ArrayProto_values%":[`Array`,`prototype`,`values`],"%AsyncFunctionPrototype%":[`AsyncFunction`,`prototype`],"%AsyncGenerator%":[`AsyncGeneratorFunction`,`prototype`],"%AsyncGeneratorPrototype%":[`AsyncGeneratorFunction`,`prototype`,`prototype`],"%BooleanPrototype%":[`Boolean`,`prototype`],"%DataViewPrototype%":[`DataView`,`prototype`],"%DatePrototype%":[`Date`,`prototype`],"%ErrorPrototype%":[`Error`,`prototype`],"%EvalErrorPrototype%":[`EvalError`,`prototype`],"%Float32ArrayPrototype%":[`Float32Array`,`prototype`],"%Float64ArrayPrototype%":[`Float64Array`,`prototype`],"%FunctionPrototype%":[`Function`,`prototype`],"%Generator%":[`GeneratorFunction`,`prototype`],"%GeneratorPrototype%":[`GeneratorFunction`,`prototype`,`prototype`],"%Int8ArrayPrototype%":[`Int8Array`,`prototype`],"%Int16ArrayPrototype%":[`Int16Array`,`prototype`],"%Int32ArrayPrototype%":[`Int32Array`,`prototype`],"%JSONParse%":[`JSON`,`parse`],"%JSONStringify%":[`JSON`,`stringify`],"%MapPrototype%":[`Map`,`prototype`],"%NumberPrototype%":[`Number`,`prototype`],"%ObjectPrototype%":[`Object`,`prototype`],"%ObjProto_toString%":[`Object`,`prototype`,`toString`],"%ObjProto_valueOf%":[`Object`,`prototype`,`valueOf`],"%PromisePrototype%":[`Promise`,`prototype`],"%PromiseProto_then%":[`Promise`,`prototype`,`then`],"%Promise_all%":[`Promise`,`all`],"%Promise_reject%":[`Promise`,`reject`],"%Promise_resolve%":[`Promise`,`resolve`],"%RangeErrorPrototype%":[`RangeError`,`prototype`],"%ReferenceErrorPrototype%":[`ReferenceError`,`prototype`],"%RegExpPrototype%":[`RegExp`,`prototype`],"%SetPrototype%":[`Set`,`prototype`],"%SharedArrayBufferPrototype%":[`SharedArrayBuffer`,`prototype`],"%StringPrototype%":[`String`,`prototype`],"%SymbolPrototype%":[`Symbol`,`prototype`],"%SyntaxErrorPrototype%":[`SyntaxError`,`prototype`],"%TypedArrayPrototype%":[`TypedArray`,`prototype`],"%TypeErrorPrototype%":[`TypeError`,`prototype`],"%Uint8ArrayPrototype%":[`Uint8Array`,`prototype`],"%Uint8ClampedArrayPrototype%":[`Uint8ClampedArray`,`prototype`],"%Uint16ArrayPrototype%":[`Uint16Array`,`prototype`],"%Uint32ArrayPrototype%":[`Uint32Array`,`prototype`],"%URIErrorPrototype%":[`URIError`,`prototype`],"%WeakMapPrototype%":[`WeakMap`,`prototype`],"%WeakSetPrototype%":[`WeakSet`,`prototype`]},F=Qe(),I=ot(),L=F.call(k,Array.prototype.concat),R=F.call(O,Array.prototype.splice),z=F.call(k,String.prototype.replace),B=F.call(k,String.prototype.slice),V=F.call(k,RegExp.prototype.exec),H=/[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,U=/\\(\\)?/g,ee=function(e){var t=B(e,0,1),n=B(e,-1);if(t===`%`&&n!==`%`)throw new c("invalid intrinsic syntax, expected closing `%`");if(n===`%`&&t!==`%`)throw new c("invalid intrinsic syntax, expected opening `%`");var r=[];return z(e,H,function(e,t,n,i){r[r.length]=n?z(i,U,`$1`):t||e}),r},te=function(e,t){var n=e,r;if(I(P,n)&&(r=P[n],n=`%`+r[0]+`%`),I(M,n)){var i=M[n];if(i===A&&(i=N(n)),i===void 0&&!t)throw new l(`intrinsic `+e+` exists, but is not available. Please file an issue!`);return{alias:r,name:n,value:i}}throw new c(`intrinsic `+e+` does not exist!`)};t.exports=function(e,t){if(typeof e!=`string`||e.length===0)throw new l(`intrinsic name must be a non-empty string`);if(arguments.length>1&&typeof t!=`boolean`)throw new l(`"allowMissing" argument must be a boolean`);if(V(/^%?[^%]*%?$/,e)===null)throw new c("`%` may not be present anywhere but at the beginning and end of the intrinsic name");var n=ee(e),r=n.length>0?n[0]:``,i=te(`%`+r+`%`,t),a=i.name,o=i.value,s=!1,u=i.alias;u&&(r=u[0],R(n,L([0,1],u)));for(var d=1,f=!0;d<n.length;d+=1){var p=n[d],m=B(p,0,1),h=B(p,-1);if((m===`"`||m===`'`||m==="`"||h===`"`||h===`'`||h==="`")&&m!==h)throw new c(`property names with quotes must have matching quotes`);if((p===`constructor`||!f)&&(s=!0),r+=`.`+p,a=`%`+r+`%`,I(M,a))o=M[a];else if(o!=null){if(!(p in o)){if(!t)throw new l(`base intrinsic for `+e+` exists, but the property is not available.`);return}if(b&&d+1>=n.length){var g=b(o,p);f=!!g,o=f&&`get`in g&&!(`originalValue`in g.get)?g.get:o[p]}else f=I(o,p),o=o[p];f&&!s&&(M[a]=o)}}return o}})),ct=D(((e,t)=>{var n=st(),r=rt(),i=r([n(`%String.prototype.indexOf%`)]);t.exports=function(e,t){var a=n(e,!!t);return typeof a==`function`&&i(e,`.prototype.`)>-1?r([a]):a}})),lt=D(((e,t)=>{var n=Oe()(),r=ct()(`Object.prototype.toString`),i=function(e){return n&&e&&typeof e==`object`&&Symbol.toStringTag in e?!1:r(e)===`[object Arguments]`},a=function(e){return i(e)?!0:typeof e==`object`&&!!e&&`length`in e&&typeof e.length==`number`&&e.length>=0&&r(e)!==`[object Array]`&&`callee`in e&&r(e.callee)===`[object Function]`},o=function(){return i(arguments)}();i.isLegacyArguments=a,t.exports=o?i:a})),ut=D(((e,t)=>{var n=Object.prototype.toString,r=Function.prototype.toString,i=/^\s*(?:function)?\*/,a=Oe()(),o=Object.getPrototypeOf,s=function(){if(!a)return!1;try{return Function(`return function*() {}`)()}catch{}},c;t.exports=function(e){if(typeof e!=`function`)return!1;if(i.test(r.call(e)))return!0;if(!a)return n.call(e)===`[object GeneratorFunction]`;if(!o)return!1;if(c===void 0){var t=s();c=t?o(t):!1}return o(e)===c}})),dt=D(((e,t)=>{var n=Function.prototype.toString,r=typeof Reflect==`object`&&Reflect!==null&&Reflect.apply,i,a;if(typeof r==`function`&&typeof Object.defineProperty==`function`)try{i=Object.defineProperty({},"length",{get:function(){throw a}}),a={},r(function(){throw 42},null,i)}catch(e){e!==a&&(r=null)}else r=null;var o=/^\s*class\b/,s=function(e){try{var t=n.call(e);return o.test(t)}catch{return!1}},c=function(e){try{return s(e)?!1:(n.call(e),!0)}catch{return!1}},l=Object.prototype.toString,u=`[object Object]`,d=`[object Function]`,f=`[object GeneratorFunction]`,p=`[object HTMLAllCollection]`,m=`[object HTML document.all class]`,h=`[object HTMLCollection]`,g=typeof Symbol==`function`&&!!Symbol.toStringTag,_=!(0 in[,]),v=function(){return!1};if(typeof document==`object`){var y=document.all;l.call(y)===l.call(document.all)&&(v=function(e){if((_||!e)&&(e===void 0||typeof e==`object`))try{var t=l.call(e);return(t===p||t===m||t===h||t===u)&&e(``)==null}catch{}return!1})}t.exports=r?function(e){if(v(e))return!0;if(!e||typeof e!=`function`&&typeof e!=`object`)return!1;try{r(e,null,i)}catch(e){if(e!==a)return!1}return!s(e)&&c(e)}:function(e){if(v(e))return!0;if(!e||typeof e!=`function`&&typeof e!=`object`)return!1;if(g)return c(e);if(s(e))return!1;var t=l.call(e);return t!==d&&t!==f&&!/^\[object HTML/.test(t)?!1:c(e)}})),ft=D(((e,t)=>{var n=dt(),r=Object.prototype.toString,i=Object.prototype.hasOwnProperty,a=function(e,t,n){for(var r=0,a=e.length;r<a;r++)i.call(e,r)&&(n==null?t(e[r],r,e):t.call(n,e[r],r,e))},o=function(e,t,n){for(var r=0,i=e.length;r<i;r++)n==null?t(e.charAt(r),r,e):t.call(n,e.charAt(r),r,e)},s=function(e,t,n){for(var r in e)i.call(e,r)&&(n==null?t(e[r],r,e):t.call(n,e[r],r,e))};function c(e){return r.call(e)===`[object Array]`}t.exports=function(e,t,r){if(!n(t))throw TypeError(`iterator must be a function`);var i;arguments.length>=3&&(i=r),c(e)?a(e,t,i):typeof e==`string`?o(e,t,i):s(e,t,i)}})),pt=D(((e,t)=>{t.exports=[`Float32Array`,`Float64Array`,`Int8Array`,`Int16Array`,`Int32Array`,`Uint8Array`,`Uint8ClampedArray`,`Uint16Array`,`Uint32Array`,`BigInt64Array`,`BigUint64Array`]})),mt=D(((e,t)=>{re();var n=pt(),r=typeof globalThis>`u`?ne:globalThis;t.exports=function(){for(var e=[],t=0;t<n.length;t++)typeof r[n[t]]==`function`&&(e[e.length]=n[t]);return e}})),ht=D(((e,t)=>{var n=qe(),r=Pe(),i=Fe(),a=Ke();t.exports=function(e,t,o){if(!e||typeof e!=`object`&&typeof e!=`function`)throw new i("`obj` must be an object or a function`");if(typeof t!=`string`&&typeof t!=`symbol`)throw new i("`property` must be a string or a symbol`");if(arguments.length>3&&typeof arguments[3]!=`boolean`&&arguments[3]!==null)throw new i("`nonEnumerable`, if provided, must be a boolean or null");if(arguments.length>4&&typeof arguments[4]!=`boolean`&&arguments[4]!==null)throw new i("`nonWritable`, if provided, must be a boolean or null");if(arguments.length>5&&typeof arguments[5]!=`boolean`&&arguments[5]!==null)throw new i("`nonConfigurable`, if provided, must be a boolean or null");if(arguments.length>6&&typeof arguments[6]!=`boolean`)throw new i("`loose`, if provided, must be a boolean");var s=arguments.length>3?arguments[3]:null,c=arguments.length>4?arguments[4]:null,l=arguments.length>5?arguments[5]:null,u=arguments.length>6&&arguments[6],d=!!a&&a(e,t);if(n)n(e,t,{configurable:l===null&&d?d.configurable:!l,enumerable:s===null&&d?d.enumerable:!s,value:o,writable:c===null&&d?d.writable:!c});else if(u||!s&&!c&&!l)e[t]=o;else throw new r(`This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.`)}})),gt=D(((e,t)=>{var n=qe(),r=function(){return!!n};r.hasArrayLengthDefineBug=function(){if(!n)return null;try{return n([],`length`,{value:1}).length!==1}catch{return!0}},t.exports=r})),_t=D(((e,t)=>{var n=st(),r=ht(),i=gt()(),a=Ke(),o=Fe(),s=n(`%Math.floor%`);t.exports=function(e,t){if(typeof e!=`function`)throw new o("`fn` is not a function");if(typeof t!=`number`||t<0||t>4294967295||s(t)!==t)throw new o("`length` must be a positive 32-bit integer");var n=arguments.length>2&&!!arguments[2],c=!0,l=!0;if(`length`in e&&a){var u=a(e,`length`);u&&!u.configurable&&(c=!1),u&&!u.writable&&(l=!1)}return(c||l||!n)&&(i?r(e,`length`,t,!0,!0):r(e,`length`,t)),e}})),vt=D(((e,t)=>{var n=Qe(),r=et(),i=nt();t.exports=function(){return i(n,r,arguments)}})),yt=D(((e,t)=>{var n=_t(),r=qe(),i=rt(),a=vt();t.exports=function(e){var t=i(arguments),r=e.length-(arguments.length-1);return n(t,1+(r>0?r:0),!0)},r?r(t.exports,`apply`,{value:a}):t.exports.apply=a})),bt=D(((e,t)=>{re();var n=ft(),r=mt(),i=yt(),a=ct(),o=Ke(),s=at(),c=a(`Object.prototype.toString`),l=Oe()(),u=typeof globalThis>`u`?ne:globalThis,d=r(),f=a(`String.prototype.slice`),p=a(`Array.prototype.indexOf`,!0)||function(e,t){for(var n=0;n<e.length;n+=1)if(e[n]===t)return n;return-1},m={__proto__:null};l&&o&&s?n(d,function(e){var t=new u[e];if(Symbol.toStringTag in t&&s){var n=s(t),r=o(n,Symbol.toStringTag);!r&&n&&(r=o(s(n),Symbol.toStringTag)),m[`$`+e]=i(r.get)}}):n(d,function(e){var t=new u[e],n=t.slice||t.set;n&&(m[`$`+e]=i(n))});var h=function(e){var t=!1;return n(m,function(n,r){if(!t)try{`$`+n(e)===r&&(t=f(r,1))}catch{}}),t},g=function(e){var t=!1;return n(m,function(n,r){if(!t)try{n(e),t=f(r,1)}catch{}}),t};t.exports=function(e){if(!e||typeof e!=`object`)return!1;if(!l){var t=f(c(e),8,-1);return p(d,t)>-1?t:t===`Object`&&g(e)}return o?h(e):null}})),xt=D(((e,t)=>{var n=bt();t.exports=function(e){return!!n(e)}})),St=D((e=>{var t=lt(),n=ut(),r=bt(),i=xt();function a(e){return e.call.bind(e)}var o=typeof BigInt<`u`,s=typeof Symbol<`u`,c=a(Object.prototype.toString),l=a(Number.prototype.valueOf),u=a(String.prototype.valueOf),d=a(Boolean.prototype.valueOf);if(o)var f=a(BigInt.prototype.valueOf);if(s)var p=a(Symbol.prototype.valueOf);function m(e,t){if(typeof e!=`object`)return!1;try{return t(e),!0}catch{return!1}}e.isArgumentsObject=t,e.isGeneratorFunction=n,e.isTypedArray=i;function h(e){return typeof Promise<`u`&&e instanceof Promise||typeof e==`object`&&!!e&&typeof e.then==`function`&&typeof e.catch==`function`}e.isPromise=h;function g(e){return typeof ArrayBuffer<`u`&&ArrayBuffer.isView?ArrayBuffer.isView(e):i(e)||z(e)}e.isArrayBufferView=g;function _(e){return r(e)===`Uint8Array`}e.isUint8Array=_;function v(e){return r(e)===`Uint8ClampedArray`}e.isUint8ClampedArray=v;function y(e){return r(e)===`Uint16Array`}e.isUint16Array=y;function b(e){return r(e)===`Uint32Array`}e.isUint32Array=b;function x(e){return r(e)===`Int8Array`}e.isInt8Array=x;function S(e){return r(e)===`Int16Array`}e.isInt16Array=S;function C(e){return r(e)===`Int32Array`}e.isInt32Array=C;function w(e){return r(e)===`Float32Array`}e.isFloat32Array=w;function T(e){return r(e)===`Float64Array`}e.isFloat64Array=T;function E(e){return r(e)===`BigInt64Array`}e.isBigInt64Array=E;function D(e){return r(e)===`BigUint64Array`}e.isBigUint64Array=D;function O(e){return c(e)===`[object Map]`}O.working=typeof Map<`u`&&O(new Map);function k(e){return typeof Map>`u`?!1:O.working?O(e):e instanceof Map}e.isMap=k;function A(e){return c(e)===`[object Set]`}A.working=typeof Set<`u`&&A(new Set);function j(e){return typeof Set>`u`?!1:A.working?A(e):e instanceof Set}e.isSet=j;function M(e){return c(e)===`[object WeakMap]`}M.working=typeof WeakMap<`u`&&M(new WeakMap);function N(e){return typeof WeakMap>`u`?!1:M.working?M(e):e instanceof WeakMap}e.isWeakMap=N;function P(e){return c(e)===`[object WeakSet]`}P.working=typeof WeakSet<`u`&&P(new WeakSet);function F(e){return P(e)}e.isWeakSet=F;function I(e){return c(e)===`[object ArrayBuffer]`}I.working=typeof ArrayBuffer<`u`&&I(new ArrayBuffer);function L(e){return typeof ArrayBuffer>`u`?!1:I.working?I(e):e instanceof ArrayBuffer}e.isArrayBuffer=L;function R(e){return c(e)===`[object DataView]`}R.working=typeof ArrayBuffer<`u`&&typeof DataView<`u`&&R(new DataView(new ArrayBuffer(1),0,1));function z(e){return typeof DataView>`u`?!1:R.working?R(e):e instanceof DataView}e.isDataView=z;var B=typeof SharedArrayBuffer<`u`?SharedArrayBuffer:void 0;function V(e){return c(e)===`[object SharedArrayBuffer]`}function H(e){return B===void 0?!1:(V.working===void 0&&(V.working=V(new B)),V.working?V(e):e instanceof B)}e.isSharedArrayBuffer=H;function U(e){return c(e)===`[object AsyncFunction]`}e.isAsyncFunction=U;function ee(e){return c(e)===`[object Map Iterator]`}e.isMapIterator=ee;function te(e){return c(e)===`[object Set Iterator]`}e.isSetIterator=te;function ne(e){return c(e)===`[object Generator]`}e.isGeneratorObject=ne;function re(e){return c(e)===`[object WebAssembly.Module]`}e.isWebAssemblyCompiledModule=re;function ie(e){return m(e,l)}e.isNumberObject=ie;function ae(e){return m(e,u)}e.isStringObject=ae;function oe(e){return m(e,d)}e.isBooleanObject=oe;function se(e){return o&&m(e,f)}e.isBigIntObject=se;function ce(e){return s&&m(e,p)}e.isSymbolObject=ce;function le(e){return ie(e)||ae(e)||oe(e)||se(e)||ce(e)}e.isBoxedPrimitive=le;function ue(e){return typeof Uint8Array<`u`&&(L(e)||H(e))}e.isAnyArrayBuffer=ue,[`isProxy`,`isExternal`,`isModuleNamespaceObject`].forEach(function(t){Object.defineProperty(e,t,{enumerable:!1,value:function(){throw Error(t+` is not supported in userland`)}})})})),Ct=D(((e,t)=>{t.exports=function(e){return e&&typeof e==`object`&&typeof e.copy==`function`&&typeof e.fill==`function`&&typeof e.readUInt8==`function`}})),wt=D((e=>{Se();var t=Object.getOwnPropertyDescriptors||function(e){for(var t=Object.keys(e),n={},r=0;r<t.length;r++)n[t[r]]=Object.getOwnPropertyDescriptor(e,t[r]);return n},n=/%[sdj%]/g;e.format=function(e){if(!x(e)){for(var t=[],r=0;r<arguments.length;r++)t.push(o(arguments[r]));return t.join(` `)}for(var r=1,i=arguments,a=i.length,s=String(e).replace(n,function(e){if(e===`%%`)return`%`;if(r>=a)return e;switch(e){case`%s`:return String(i[r++]);case`%d`:return Number(i[r++]);case`%j`:try{return JSON.stringify(i[r++])}catch{return`[Circular]`}default:return e}}),c=i[r];r<a;c=i[++r])v(c)||!T(c)?s+=` `+c:s+=` `+o(c);return s},e.deprecate=function(t,n){if(W!==void 0&&W.noDeprecation===!0)return t;if(W===void 0)return function(){return e.deprecate(t,n).apply(this,arguments)};var r=!1;function i(){if(!r){if(W.throwDeprecation)throw Error(n);W.traceDeprecation?console.trace(n):console.error(n),r=!0}return t.apply(this,arguments)}return i};var r={},i=/^$/;if(W.env.NODE_DEBUG){var a=W.env.NODE_DEBUG;a=a.replace(/[|\\{}()[\]^$+?.]/g,`\\$&`).replace(/\*/g,`.*`).replace(/,/g,`$|^`).toUpperCase(),i=RegExp(`^`+a+`$`,`i`)}e.debuglog=function(t){if(t=t.toUpperCase(),!r[t])if(i.test(t)){var n=W.pid;r[t]=function(){var r=e.format.apply(e,arguments);console.error(`%s %d: %s`,t,n,r)}}else r[t]=function(){};return r[t]};function o(t,n){var r={seen:[],stylize:c};return arguments.length>=3&&(r.depth=arguments[2]),arguments.length>=4&&(r.colors=arguments[3]),_(n)?r.showHidden=n:n&&e._extend(r,n),C(r.showHidden)&&(r.showHidden=!1),C(r.depth)&&(r.depth=2),C(r.colors)&&(r.colors=!1),C(r.customInspect)&&(r.customInspect=!0),r.colors&&(r.stylize=s),u(r,t,r.depth)}e.inspect=o,o.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},o.styles={special:`cyan`,number:`yellow`,boolean:`yellow`,undefined:`grey`,null:`bold`,string:`green`,date:`magenta`,regexp:`red`};function s(e,t){var n=o.styles[t];return n?`\x1B[`+o.colors[n][0]+`m`+e+`\x1B[`+o.colors[n][1]+`m`:e}function c(e,t){return e}function l(e){var t={};return e.forEach(function(e,n){t[e]=!0}),t}function u(t,n,r){if(t.customInspect&&n&&O(n.inspect)&&n.inspect!==e.inspect&&!(n.constructor&&n.constructor.prototype===n)){var i=n.inspect(r,t);return x(i)||(i=u(t,i,r)),i}var a=d(t,n);if(a)return a;var o=Object.keys(n),s=l(o);if(t.showHidden&&(o=Object.getOwnPropertyNames(n)),D(n)&&(o.indexOf(`message`)>=0||o.indexOf(`description`)>=0))return f(n);if(o.length===0){if(O(n)){var c=n.name?`: `+n.name:``;return t.stylize(`[Function`+c+`]`,`special`)}if(w(n))return t.stylize(RegExp.prototype.toString.call(n),`regexp`);if(E(n))return t.stylize(Date.prototype.toString.call(n),`date`);if(D(n))return f(n)}var _=``,v=!1,y=[`{`,`}`];if(g(n)&&(v=!0,y=[`[`,`]`]),O(n)&&(_=` [Function`+(n.name?`: `+n.name:``)+`]`),w(n)&&(_=` `+RegExp.prototype.toString.call(n)),E(n)&&(_=` `+Date.prototype.toUTCString.call(n)),D(n)&&(_=` `+f(n)),o.length===0&&(!v||n.length==0))return y[0]+_+y[1];if(r<0)return w(n)?t.stylize(RegExp.prototype.toString.call(n),`regexp`):t.stylize(`[Object]`,`special`);t.seen.push(n);var b=v?p(t,n,r,s,o):o.map(function(e){return m(t,n,r,s,e,v)});return t.seen.pop(),h(b,_,y)}function d(e,t){if(C(t))return e.stylize(`undefined`,`undefined`);if(x(t)){var n=`'`+JSON.stringify(t).replace(/^"|"$/g,``).replace(/'/g,`\\'`).replace(/\\"/g,`"`)+`'`;return e.stylize(n,`string`)}if(b(t))return e.stylize(``+t,`number`);if(_(t))return e.stylize(``+t,`boolean`);if(v(t))return e.stylize(`null`,`null`)}function f(e){return`[`+Error.prototype.toString.call(e)+`]`}function p(e,t,n,r,i){for(var a=[],o=0,s=t.length;o<s;++o)P(t,String(o))?a.push(m(e,t,n,r,String(o),!0)):a.push(``);return i.forEach(function(i){i.match(/^\d+$/)||a.push(m(e,t,n,r,i,!0))}),a}function m(e,t,n,r,i,a){var o,s,c=Object.getOwnPropertyDescriptor(t,i)||{value:t[i]};if(c.get?s=c.set?e.stylize(`[Getter/Setter]`,`special`):e.stylize(`[Getter]`,`special`):c.set&&(s=e.stylize(`[Setter]`,`special`)),P(r,i)||(o=`[`+i+`]`),s||(e.seen.indexOf(c.value)<0?(s=v(n)?u(e,c.value,null):u(e,c.value,n-1),s.indexOf(`
`)>-1&&(s=a?s.split(`
`).map(function(e){return`  `+e}).join(`
`).slice(2):`
`+s.split(`
`).map(function(e){return`   `+e}).join(`
`))):s=e.stylize(`[Circular]`,`special`)),C(o)){if(a&&i.match(/^\d+$/))return s;o=JSON.stringify(``+i),o.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(o=o.slice(1,-1),o=e.stylize(o,`name`)):(o=o.replace(/'/g,`\\'`).replace(/\\"/g,`"`).replace(/(^"|"$)/g,`'`),o=e.stylize(o,`string`))}return o+`: `+s}function h(e,t,n){var r=0;return e.reduce(function(e,t){return r++,t.indexOf(`
`)>=0&&r++,e+t.replace(/\u001b\[\d\d?m/g,``).length+1},0)>60?n[0]+(t===``?``:t+`
 `)+` `+e.join(`,
  `)+` `+n[1]:n[0]+t+` `+e.join(`, `)+` `+n[1]}e.types=St();function g(e){return Array.isArray(e)}e.isArray=g;function _(e){return typeof e==`boolean`}e.isBoolean=_;function v(e){return e===null}e.isNull=v;function y(e){return e==null}e.isNullOrUndefined=y;function b(e){return typeof e==`number`}e.isNumber=b;function x(e){return typeof e==`string`}e.isString=x;function S(e){return typeof e==`symbol`}e.isSymbol=S;function C(e){return e===void 0}e.isUndefined=C;function w(e){return T(e)&&A(e)===`[object RegExp]`}e.isRegExp=w,e.types.isRegExp=w;function T(e){return typeof e==`object`&&!!e}e.isObject=T;function E(e){return T(e)&&A(e)===`[object Date]`}e.isDate=E,e.types.isDate=E;function D(e){return T(e)&&(A(e)===`[object Error]`||e instanceof Error)}e.isError=D,e.types.isNativeError=D;function O(e){return typeof e==`function`}e.isFunction=O;function k(e){return e===null||typeof e==`boolean`||typeof e==`number`||typeof e==`string`||typeof e==`symbol`||e===void 0}e.isPrimitive=k,e.isBuffer=Ct();function A(e){return Object.prototype.toString.call(e)}function j(e){return e<10?`0`+e.toString(10):e.toString(10)}var M=[`Jan`,`Feb`,`Mar`,`Apr`,`May`,`Jun`,`Jul`,`Aug`,`Sep`,`Oct`,`Nov`,`Dec`];function N(){var e=new Date,t=[j(e.getHours()),j(e.getMinutes()),j(e.getSeconds())].join(`:`);return[e.getDate(),M[e.getMonth()],t].join(` `)}e.log=function(){console.log(`%s - %s`,N(),e.format.apply(e,arguments))},e.inherits=te(),e._extend=function(e,t){if(!t||!T(t))return e;for(var n=Object.keys(t),r=n.length;r--;)e[n[r]]=t[n[r]];return e};function P(e,t){return Object.prototype.hasOwnProperty.call(e,t)}var F=typeof Symbol<`u`?Symbol(`util.promisify.custom`):void 0;e.promisify=function(e){if(typeof e!=`function`)throw TypeError(`The "original" argument must be of type Function`);if(F&&e[F]){var n=e[F];if(typeof n!=`function`)throw TypeError(`The "util.promisify.custom" argument must be of type Function`);return Object.defineProperty(n,F,{value:n,enumerable:!1,writable:!1,configurable:!0}),n}function n(){for(var t,n,r=new Promise(function(e,r){t=e,n=r}),i=[],a=0;a<arguments.length;a++)i.push(arguments[a]);i.push(function(e,r){e?n(e):t(r)});try{e.apply(this,i)}catch(e){n(e)}return r}return Object.setPrototypeOf(n,Object.getPrototypeOf(e)),F&&Object.defineProperty(n,F,{value:n,enumerable:!1,writable:!1,configurable:!0}),Object.defineProperties(n,t(e))},e.promisify.custom=F;function I(e,t){if(!e){var n=Error(`Promise was rejected with a falsy value`);n.reason=e,e=n}return t(e)}function L(e){if(typeof e!=`function`)throw TypeError(`The "original" argument must be of type Function`);function n(){for(var t=[],n=0;n<arguments.length;n++)t.push(arguments[n]);var r=t.pop();if(typeof r!=`function`)throw TypeError(`The last argument must be of type Function`);var i=this,a=function(){return r.apply(i,arguments)};e.apply(this,t).then(function(e){W.nextTick(a.bind(null,null,e))},function(e){W.nextTick(I.bind(null,e,a))})}return Object.setPrototypeOf(n,Object.getPrototypeOf(e)),Object.defineProperties(n,t(e)),n}e.callbackify=L})),Tt=D(((e,t)=>{function n(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function r(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]==null?{}:arguments[t];t%2?n(Object(r),!0).forEach(function(t){i(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function i(e,t,n){return t=c(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){if(!(e instanceof t))throw TypeError(`Cannot call a class as a function`)}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,`value`in r&&(r.writable=!0),Object.defineProperty(e,c(r.key),r)}}function s(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function c(e){var t=l(e,`string`);return typeof t==`symbol`?t:String(t)}function l(e,t){if(typeof e!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(typeof r!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}var u=Ee().Buffer,d=wt().inspect,f=d&&d.custom||`inspect`;function p(e,t,n){u.prototype.copy.call(e,t,n)}t.exports=function(){function e(){a(this,e),this.head=null,this.tail=null,this.length=0}return s(e,[{key:`push`,value:function(e){var t={data:e,next:null};this.length>0?this.tail.next=t:this.head=t,this.tail=t,++this.length}},{key:`unshift`,value:function(e){var t={data:e,next:this.head};this.length===0&&(this.tail=t),this.head=t,++this.length}},{key:`shift`,value:function(){if(this.length!==0){var e=this.head.data;return this.length===1?this.head=this.tail=null:this.head=this.head.next,--this.length,e}}},{key:`clear`,value:function(){this.head=this.tail=null,this.length=0}},{key:`join`,value:function(e){if(this.length===0)return``;for(var t=this.head,n=``+t.data;t=t.next;)n+=e+t.data;return n}},{key:`concat`,value:function(e){if(this.length===0)return u.alloc(0);for(var t=u.allocUnsafe(e>>>0),n=this.head,r=0;n;)p(n.data,t,r),r+=n.data.length,n=n.next;return t}},{key:`consume`,value:function(e,t){var n;return e<this.head.data.length?(n=this.head.data.slice(0,e),this.head.data=this.head.data.slice(e)):n=e===this.head.data.length?this.shift():t?this._getString(e):this._getBuffer(e),n}},{key:`first`,value:function(){return this.head.data}},{key:`_getString`,value:function(e){var t=this.head,n=1,r=t.data;for(e-=r.length;t=t.next;){var i=t.data,a=e>i.length?i.length:e;if(a===i.length?r+=i:r+=i.slice(0,e),e-=a,e===0){a===i.length?(++n,t.next?this.head=t.next:this.head=this.tail=null):(this.head=t,t.data=i.slice(a));break}++n}return this.length-=n,r}},{key:`_getBuffer`,value:function(e){var t=u.allocUnsafe(e),n=this.head,r=1;for(n.data.copy(t),e-=n.data.length;n=n.next;){var i=n.data,a=e>i.length?i.length:e;if(i.copy(t,t.length-e,0,a),e-=a,e===0){a===i.length?(++r,n.next?this.head=n.next:this.head=this.tail=null):(this.head=n,n.data=i.slice(a));break}++r}return this.length-=r,t}},{key:f,value:function(e,t){return d(this,r(r({},t),{},{depth:0,customInspect:!1}))}}]),e}()})),Et=D(((e,t)=>{Se();function n(e,t){var n=this,a=this._readableState&&this._readableState.destroyed,s=this._writableState&&this._writableState.destroyed;return a||s?(t?t(e):e&&(this._writableState?this._writableState.errorEmitted||(this._writableState.errorEmitted=!0,W.nextTick(o,this,e)):W.nextTick(o,this,e)),this):(this._readableState&&(this._readableState.destroyed=!0),this._writableState&&(this._writableState.destroyed=!0),this._destroy(e||null,function(e){!t&&e?n._writableState?n._writableState.errorEmitted?W.nextTick(i,n):(n._writableState.errorEmitted=!0,W.nextTick(r,n,e)):W.nextTick(r,n,e):t?(W.nextTick(i,n),t(e)):W.nextTick(i,n)}),this)}function r(e,t){o(e,t),i(e)}function i(e){e._writableState&&!e._writableState.emitClose||e._readableState&&!e._readableState.emitClose||e.emit(`close`)}function a(){this._readableState&&(this._readableState.destroyed=!1,this._readableState.reading=!1,this._readableState.ended=!1,this._readableState.endEmitted=!1),this._writableState&&(this._writableState.destroyed=!1,this._writableState.ended=!1,this._writableState.ending=!1,this._writableState.finalCalled=!1,this._writableState.prefinished=!1,this._writableState.finished=!1,this._writableState.errorEmitted=!1)}function o(e,t){e.emit(`error`,t)}function s(e,t){var n=e._readableState,r=e._writableState;n&&n.autoDestroy||r&&r.autoDestroy?e.destroy(t):e.emit(`error`,t)}t.exports={destroy:n,undestroy:a,errorOrDestroy:s}})),Dt=D(((e,t)=>{function n(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}var r={};function i(e,t,i){i||=Error;function a(e,n,r){return typeof t==`string`?t:t(e,n,r)}var o=function(e){n(t,e);function t(t,n,r){return e.call(this,a(t,n,r))||this}return t}(i);o.prototype.name=i.name,o.prototype.code=e,r[e]=o}function a(e,t){if(Array.isArray(e)){var n=e.length;return e=e.map(function(e){return String(e)}),n>2?`one of ${t} ${e.slice(0,n-1).join(`, `)}, or `+e[n-1]:n===2?`one of ${t} ${e[0]} or ${e[1]}`:`of ${t} ${e[0]}`}else return`of ${t} ${String(e)}`}function o(e,t,n){return e.substr(!n||n<0?0:+n,t.length)===t}function s(e,t,n){return(n===void 0||n>e.length)&&(n=e.length),e.substring(n-t.length,n)===t}function c(e,t,n){return typeof n!=`number`&&(n=0),n+t.length>e.length?!1:e.indexOf(t,n)!==-1}i(`ERR_INVALID_OPT_VALUE`,function(e,t){return`The value "`+t+`" is invalid for option "`+e+`"`},TypeError),i(`ERR_INVALID_ARG_TYPE`,function(e,t,n){var r;typeof t==`string`&&o(t,`not `)?(r=`must not be`,t=t.replace(/^not /,``)):r=`must be`;var i=s(e,` argument`)?`The ${e} ${r} ${a(t,`type`)}`:`The "${e}" ${c(e,`.`)?`property`:`argument`} ${r} ${a(t,`type`)}`;return i+=`. Received type ${typeof n}`,i},TypeError),i(`ERR_STREAM_PUSH_AFTER_EOF`,`stream.push() after EOF`),i(`ERR_METHOD_NOT_IMPLEMENTED`,function(e){return`The `+e+` method is not implemented`}),i(`ERR_STREAM_PREMATURE_CLOSE`,`Premature close`),i(`ERR_STREAM_DESTROYED`,function(e){return`Cannot call `+e+` after a stream was destroyed`}),i(`ERR_MULTIPLE_CALLBACK`,`Callback called multiple times`),i(`ERR_STREAM_CANNOT_PIPE`,`Cannot pipe, not readable`),i(`ERR_STREAM_WRITE_AFTER_END`,`write after end`),i(`ERR_STREAM_NULL_VALUES`,`May not write null values to stream`,TypeError),i(`ERR_UNKNOWN_ENCODING`,function(e){return`Unknown encoding: `+e},TypeError),i(`ERR_STREAM_UNSHIFT_AFTER_END_EVENT`,`stream.unshift() after end event`),t.exports.codes=r})),Ot=D(((e,t)=>{var n=Dt().codes.ERR_INVALID_OPT_VALUE;function r(e,t,n){return e.highWaterMark==null?t?e[n]:null:e.highWaterMark}function i(e,t,i,a){var o=r(t,a,i);if(o!=null){if(!(isFinite(o)&&Math.floor(o)===o)||o<0)throw new n(a?i:`highWaterMark`,o);return Math.floor(o)}return e.objectMode?16:16*1024}t.exports={getHighWaterMark:i}})),kt=D(((e,t)=>{re(),t.exports=n;function n(e,t){if(r(`noDeprecation`))return e;var n=!1;function i(){if(!n){if(r(`throwDeprecation`))throw Error(t);r(`traceDeprecation`)?console.trace(t):console.warn(t),n=!0}return e.apply(this,arguments)}return i}function r(e){try{if(!ne.localStorage)return!1}catch{return!1}var t=ne.localStorage[e];return t!=null&&String(t).toLowerCase()===`true`}})),At=D(((e,t)=>{re(),Se(),t.exports=T;function n(e){var t=this;this.next=null,this.entry=null,this.finish=function(){H(t,e)}}var r;T.WritableState=C;var i={deprecate:kt()},a=Ce(),o=Ee().Buffer,s=(ne===void 0?typeof window<`u`?window:typeof self<`u`?self:{}:ne).Uint8Array||function(){};function c(e){return o.from(e)}function l(e){return o.isBuffer(e)||e instanceof s}var u=Et(),d=Ot().getHighWaterMark,f=Dt().codes,p=f.ERR_INVALID_ARG_TYPE,m=f.ERR_METHOD_NOT_IMPLEMENTED,h=f.ERR_MULTIPLE_CALLBACK,g=f.ERR_STREAM_CANNOT_PIPE,_=f.ERR_STREAM_DESTROYED,v=f.ERR_STREAM_NULL_VALUES,y=f.ERR_STREAM_WRITE_AFTER_END,b=f.ERR_UNKNOWN_ENCODING,x=u.errorOrDestroy;te()(T,a);function S(){}function C(e,t,i){r||=jt(),e||={},typeof i!=`boolean`&&(i=t instanceof r),this.objectMode=!!e.objectMode,i&&(this.objectMode=this.objectMode||!!e.writableObjectMode),this.highWaterMark=d(this,e,`writableHighWaterMark`,i),this.finalCalled=!1,this.needDrain=!1,this.ending=!1,this.ended=!1,this.finished=!1,this.destroyed=!1;var a=e.decodeStrings===!1;this.decodeStrings=!a,this.defaultEncoding=e.defaultEncoding||`utf8`,this.length=0,this.writing=!1,this.corked=0,this.sync=!0,this.bufferProcessing=!1,this.onwrite=function(e){N(t,e)},this.writecb=null,this.writelen=0,this.bufferedRequest=null,this.lastBufferedRequest=null,this.pendingcb=0,this.prefinished=!1,this.errorEmitted=!1,this.emitClose=e.emitClose!==!1,this.autoDestroy=!!e.autoDestroy,this.bufferedRequestCount=0,this.corkedRequestsFree=new n(this)}C.prototype.getBuffer=function(){for(var e=this.bufferedRequest,t=[];e;)t.push(e),e=e.next;return t},(function(){try{Object.defineProperty(C.prototype,"buffer",{get:i.deprecate(function(){return this.getBuffer()},`_writableState.buffer is deprecated. Use _writableState.getBuffer instead.`,`DEP0003`)})}catch{}})();var w;typeof Symbol==`function`&&Symbol.hasInstance&&typeof Function.prototype[Symbol.hasInstance]==`function`?(w=Function.prototype[Symbol.hasInstance],Object.defineProperty(T,Symbol.hasInstance,{value:function(e){return w.call(this,e)?!0:this===T&&e&&e._writableState instanceof C}})):w=function(e){return e instanceof this};function T(e){r||=jt();var t=this instanceof r;if(!t&&!w.call(T,this))return new T(e);this._writableState=new C(e,this,t),this.writable=!0,e&&(typeof e.write==`function`&&(this._write=e.write),typeof e.writev==`function`&&(this._writev=e.writev),typeof e.destroy==`function`&&(this._destroy=e.destroy),typeof e.final==`function`&&(this._final=e.final)),a.call(this)}T.prototype.pipe=function(){x(this,new g)};function E(e,t){var n=new y;x(e,n),W.nextTick(t,n)}function D(e,t,n,r){var i;return n===null?i=new v:typeof n!=`string`&&!t.objectMode&&(i=new p(`chunk`,[`string`,`Buffer`],n)),i?(x(e,i),W.nextTick(r,i),!1):!0}T.prototype.write=function(e,t,n){var r=this._writableState,i=!1,a=!r.objectMode&&l(e);return a&&!o.isBuffer(e)&&(e=c(e)),typeof t==`function`&&(n=t,t=null),a?t=`buffer`:t||=r.defaultEncoding,typeof n!=`function`&&(n=S),r.ending?E(this,n):(a||D(this,r,e,n))&&(r.pendingcb++,i=k(this,r,a,e,t,n)),i},T.prototype.cork=function(){this._writableState.corked++},T.prototype.uncork=function(){var e=this._writableState;e.corked&&(e.corked--,!e.writing&&!e.corked&&!e.bufferProcessing&&e.bufferedRequest&&I(this,e))},T.prototype.setDefaultEncoding=function(e){if(typeof e==`string`&&(e=e.toLowerCase()),!([`hex`,`utf8`,`utf-8`,`ascii`,`binary`,`base64`,`ucs2`,`ucs-2`,`utf16le`,`utf-16le`,`raw`].indexOf((e+``).toLowerCase())>-1))throw new b(e);return this._writableState.defaultEncoding=e,this},Object.defineProperty(T.prototype,"writableBuffer",{enumerable:!1,get:function(){return this._writableState&&this._writableState.getBuffer()}});function O(e,t,n){return!e.objectMode&&e.decodeStrings!==!1&&typeof t==`string`&&(t=o.from(t,n)),t}Object.defineProperty(T.prototype,"writableHighWaterMark",{enumerable:!1,get:function(){return this._writableState.highWaterMark}});function k(e,t,n,r,i,a){if(!n){var o=O(t,r,i);r!==o&&(n=!0,i=`buffer`,r=o)}var s=t.objectMode?1:r.length;t.length+=s;var c=t.length<t.highWaterMark;if(c||(t.needDrain=!0),t.writing||t.corked){var l=t.lastBufferedRequest;t.lastBufferedRequest={chunk:r,encoding:i,isBuf:n,callback:a,next:null},l?l.next=t.lastBufferedRequest:t.bufferedRequest=t.lastBufferedRequest,t.bufferedRequestCount+=1}else A(e,t,!1,s,r,i,a);return c}function A(e,t,n,r,i,a,o){t.writelen=r,t.writecb=o,t.writing=!0,t.sync=!0,t.destroyed?t.onwrite(new _(`write`)):n?e._writev(i,t.onwrite):e._write(i,a,t.onwrite),t.sync=!1}function j(e,t,n,r,i){--t.pendingcb,n?(W.nextTick(i,r),W.nextTick(B,e,t),e._writableState.errorEmitted=!0,x(e,r)):(i(r),e._writableState.errorEmitted=!0,x(e,r),B(e,t))}function M(e){e.writing=!1,e.writecb=null,e.length-=e.writelen,e.writelen=0}function N(e,t){var n=e._writableState,r=n.sync,i=n.writecb;if(typeof i!=`function`)throw new h;if(M(n),t)j(e,n,r,t,i);else{var a=L(n)||e.destroyed;!a&&!n.corked&&!n.bufferProcessing&&n.bufferedRequest&&I(e,n),r?W.nextTick(P,e,n,a,i):P(e,n,a,i)}}function P(e,t,n,r){n||F(e,t),t.pendingcb--,r(),B(e,t)}function F(e,t){t.length===0&&t.needDrain&&(t.needDrain=!1,e.emit(`drain`))}function I(e,t){t.bufferProcessing=!0;var r=t.bufferedRequest;if(e._writev&&r&&r.next){var i=t.bufferedRequestCount,a=Array(i),o=t.corkedRequestsFree;o.entry=r;for(var s=0,c=!0;r;)a[s]=r,r.isBuf||(c=!1),r=r.next,s+=1;a.allBuffers=c,A(e,t,!0,t.length,a,``,o.finish),t.pendingcb++,t.lastBufferedRequest=null,o.next?(t.corkedRequestsFree=o.next,o.next=null):t.corkedRequestsFree=new n(t),t.bufferedRequestCount=0}else{for(;r;){var l=r.chunk,u=r.encoding,d=r.callback;if(A(e,t,!1,t.objectMode?1:l.length,l,u,d),r=r.next,t.bufferedRequestCount--,t.writing)break}r===null&&(t.lastBufferedRequest=null)}t.bufferedRequest=r,t.bufferProcessing=!1}T.prototype._write=function(e,t,n){n(new m(`_write()`))},T.prototype._writev=null,T.prototype.end=function(e,t,n){var r=this._writableState;return typeof e==`function`?(n=e,e=null,t=null):typeof t==`function`&&(n=t,t=null),e!=null&&this.write(e,t),r.corked&&(r.corked=1,this.uncork()),r.ending||V(this,r,n),this},Object.defineProperty(T.prototype,"writableLength",{enumerable:!1,get:function(){return this._writableState.length}});function L(e){return e.ending&&e.length===0&&e.bufferedRequest===null&&!e.finished&&!e.writing}function R(e,t){e._final(function(n){t.pendingcb--,n&&x(e,n),t.prefinished=!0,e.emit(`prefinish`),B(e,t)})}function z(e,t){!t.prefinished&&!t.finalCalled&&(typeof e._final==`function`&&!t.destroyed?(t.pendingcb++,t.finalCalled=!0,W.nextTick(R,e,t)):(t.prefinished=!0,e.emit(`prefinish`)))}function B(e,t){var n=L(t);if(n&&(z(e,t),t.pendingcb===0&&(t.finished=!0,e.emit(`finish`),t.autoDestroy))){var r=e._readableState;(!r||r.autoDestroy&&r.endEmitted)&&e.destroy()}return n}function V(e,t,n){t.ending=!0,B(e,t),n&&(t.finished?W.nextTick(n):e.once(`finish`,n)),t.ended=!0,e.writable=!1}function H(e,t,n){var r=e.entry;for(e.entry=null;r;){var i=r.callback;t.pendingcb--,i(n),r=r.next}t.corkedRequestsFree.next=e}Object.defineProperty(T.prototype,"destroyed",{enumerable:!1,get:function(){return this._writableState!==void 0&&this._writableState.destroyed},set:function(e){this._writableState&&(this._writableState.destroyed=e)}}),T.prototype.destroy=u.destroy,T.prototype._undestroy=u.undestroy,T.prototype._destroy=function(e,t){t(e)}})),jt=D(((e,t)=>{Se();var n=Object.keys||function(e){var t=[];for(var n in e)t.push(n);return t};t.exports=c;var r=Lt(),i=At();te()(c,r);for(var a=n(i.prototype),o=0;o<a.length;o++){var s=a[o];c.prototype[s]||(c.prototype[s]=i.prototype[s])}function c(e){if(!(this instanceof c))return new c(e);r.call(this,e),i.call(this,e),this.allowHalfOpen=!0,e&&(e.readable===!1&&(this.readable=!1),e.writable===!1&&(this.writable=!1),e.allowHalfOpen===!1&&(this.allowHalfOpen=!1,this.once(`end`,l)))}Object.defineProperty(c.prototype,"writableHighWaterMark",{enumerable:!1,get:function(){return this._writableState.highWaterMark}}),Object.defineProperty(c.prototype,"writableBuffer",{enumerable:!1,get:function(){return this._writableState&&this._writableState.getBuffer()}}),Object.defineProperty(c.prototype,"writableLength",{enumerable:!1,get:function(){return this._writableState.length}});function l(){this._writableState.ended||W.nextTick(u,this)}function u(e){e.end()}Object.defineProperty(c.prototype,"destroyed",{enumerable:!1,get:function(){return this._readableState===void 0||this._writableState===void 0?!1:this._readableState.destroyed&&this._writableState.destroyed},set:function(e){this._readableState===void 0||this._writableState===void 0||(this._readableState.destroyed=e,this._writableState.destroyed=e)}})})),Mt=D(((e,t)=>{var n=Ee(),r=n.Buffer;function i(e,t){for(var n in e)t[n]=e[n]}r.from&&r.alloc&&r.allocUnsafe&&r.allocUnsafeSlow?t.exports=n:(i(n,e),e.Buffer=a);function a(e,t,n){return r(e,t,n)}i(r,a),a.from=function(e,t,n){if(typeof e==`number`)throw TypeError(`Argument must not be a number`);return r(e,t,n)},a.alloc=function(e,t,n){if(typeof e!=`number`)throw TypeError(`Argument must be a number`);var i=r(e);return t===void 0?i.fill(0):typeof n==`string`?i.fill(t,n):i.fill(t),i},a.allocUnsafe=function(e){if(typeof e!=`number`)throw TypeError(`Argument must be a number`);return r(e)},a.allocUnsafeSlow=function(e){if(typeof e!=`number`)throw TypeError(`Argument must be a number`);return n.SlowBuffer(e)}})),Nt=D((e=>{var t=Mt().Buffer,n=t.isEncoding||function(e){switch(e=``+e,e&&e.toLowerCase()){case`hex`:case`utf8`:case`utf-8`:case`ascii`:case`binary`:case`base64`:case`ucs2`:case`ucs-2`:case`utf16le`:case`utf-16le`:case`raw`:return!0;default:return!1}};function r(e){if(!e)return`utf8`;for(var t;;)switch(e){case`utf8`:case`utf-8`:return`utf8`;case`ucs2`:case`ucs-2`:case`utf16le`:case`utf-16le`:return`utf16le`;case`latin1`:case`binary`:return`latin1`;case`base64`:case`ascii`:case`hex`:return e;default:if(t)return;e=(``+e).toLowerCase(),t=!0}}function i(e){var i=r(e);if(typeof i!=`string`&&(t.isEncoding===n||!n(e)))throw Error(`Unknown encoding: `+e);return i||e}e.StringDecoder=a;function a(e){this.encoding=i(e);var n;switch(this.encoding){case`utf16le`:this.text=f,this.end=p,n=4;break;case`utf8`:this.fillLast=l,n=4;break;case`base64`:this.text=m,this.end=h,n=3;break;default:this.write=g,this.end=_;return}this.lastNeed=0,this.lastTotal=0,this.lastChar=t.allocUnsafe(n)}a.prototype.write=function(e){if(e.length===0)return``;var t,n;if(this.lastNeed){if(t=this.fillLast(e),t===void 0)return``;n=this.lastNeed,this.lastNeed=0}else n=0;return n<e.length?t?t+this.text(e,n):this.text(e,n):t||``},a.prototype.end=d,a.prototype.text=u,a.prototype.fillLast=function(e){if(this.lastNeed<=e.length)return e.copy(this.lastChar,this.lastTotal-this.lastNeed,0,this.lastNeed),this.lastChar.toString(this.encoding,0,this.lastTotal);e.copy(this.lastChar,this.lastTotal-this.lastNeed,0,e.length),this.lastNeed-=e.length};function o(e){return e<=127?0:e>>5==6?2:e>>4==14?3:e>>3==30?4:e>>6==2?-1:-2}function s(e,t,n){var r=t.length-1;if(r<n)return 0;var i=o(t[r]);return i>=0?(i>0&&(e.lastNeed=i-1),i):--r<n||i===-2?0:(i=o(t[r]),i>=0?(i>0&&(e.lastNeed=i-2),i):--r<n||i===-2?0:(i=o(t[r]),i>=0?(i>0&&(i===2?i=0:e.lastNeed=i-3),i):0))}function c(e,t,n){if((t[0]&192)!=128)return e.lastNeed=0,`�`;if(e.lastNeed>1&&t.length>1){if((t[1]&192)!=128)return e.lastNeed=1,`�`;if(e.lastNeed>2&&t.length>2&&(t[2]&192)!=128)return e.lastNeed=2,`�`}}function l(e){var t=this.lastTotal-this.lastNeed,n=c(this,e,t);if(n!==void 0)return n;if(this.lastNeed<=e.length)return e.copy(this.lastChar,t,0,this.lastNeed),this.lastChar.toString(this.encoding,0,this.lastTotal);e.copy(this.lastChar,t,0,e.length),this.lastNeed-=e.length}function u(e,t){var n=s(this,e,t);if(!this.lastNeed)return e.toString(`utf8`,t);this.lastTotal=n;var r=e.length-(n-this.lastNeed);return e.copy(this.lastChar,0,r),e.toString(`utf8`,t,r)}function d(e){var t=e&&e.length?this.write(e):``;return this.lastNeed?t+`�`:t}function f(e,t){if((e.length-t)%2==0){var n=e.toString(`utf16le`,t);if(n){var r=n.charCodeAt(n.length-1);if(r>=55296&&r<=56319)return this.lastNeed=2,this.lastTotal=4,this.lastChar[0]=e[e.length-2],this.lastChar[1]=e[e.length-1],n.slice(0,-1)}return n}return this.lastNeed=1,this.lastTotal=2,this.lastChar[0]=e[e.length-1],e.toString(`utf16le`,t,e.length-1)}function p(e){var t=e&&e.length?this.write(e):``;if(this.lastNeed){var n=this.lastTotal-this.lastNeed;return t+this.lastChar.toString(`utf16le`,0,n)}return t}function m(e,t){var n=(e.length-t)%3;return n===0?e.toString(`base64`,t):(this.lastNeed=3-n,this.lastTotal=3,n===1?this.lastChar[0]=e[e.length-1]:(this.lastChar[0]=e[e.length-2],this.lastChar[1]=e[e.length-1]),e.toString(`base64`,t,e.length-n))}function h(e){var t=e&&e.length?this.write(e):``;return this.lastNeed?t+this.lastChar.toString(`base64`,0,3-this.lastNeed):t}function g(e){return e.toString(this.encoding)}function _(e){return e&&e.length?this.write(e):``}})),Pt=D(((e,t)=>{var n=Dt().codes.ERR_STREAM_PREMATURE_CLOSE;function r(e){var t=!1;return function(){if(!t){t=!0;var n=[...arguments];e.apply(this,n)}}}function i(){}function a(e){return e.setHeader&&typeof e.abort==`function`}function o(e,t,s){if(typeof t==`function`)return o(e,null,t);t||={},s=r(s||i);var c=t.readable||t.readable!==!1&&e.readable,l=t.writable||t.writable!==!1&&e.writable,u=function(){e.writable||f()},d=e._writableState&&e._writableState.finished,f=function(){l=!1,d=!0,c||s.call(e)},p=e._readableState&&e._readableState.endEmitted,m=function(){c=!1,p=!0,l||s.call(e)},h=function(t){s.call(e,t)},g=function(){var t;if(c&&!p)return(!e._readableState||!e._readableState.ended)&&(t=new n),s.call(e,t);if(l&&!d)return(!e._writableState||!e._writableState.ended)&&(t=new n),s.call(e,t)},_=function(){e.req.on(`finish`,f)};return a(e)?(e.on(`complete`,f),e.on(`abort`,g),e.req?_():e.on(`request`,_)):l&&!e._writableState&&(e.on(`end`,u),e.on(`close`,u)),e.on(`end`,m),e.on(`finish`,f),t.error!==!1&&e.on(`error`,h),e.on(`close`,g),function(){e.removeListener(`complete`,f),e.removeListener(`abort`,g),e.removeListener(`request`,_),e.req&&e.req.removeListener(`finish`,f),e.removeListener(`end`,u),e.removeListener(`close`,u),e.removeListener(`finish`,f),e.removeListener(`end`,m),e.removeListener(`error`,h),e.removeListener(`close`,g)}}t.exports=o})),Ft=D(((e,t)=>{Se();var n;function r(e,t,n){return t=i(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e){var t=a(e,`string`);return typeof t==`symbol`?t:String(t)}function a(e,t){if(typeof e!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(typeof r!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}var o=Pt(),s=Symbol(`lastResolve`),c=Symbol(`lastReject`),l=Symbol(`error`),u=Symbol(`ended`),d=Symbol(`lastPromise`),f=Symbol(`handlePromise`),p=Symbol(`stream`);function m(e,t){return{value:e,done:t}}function h(e){var t=e[s];if(t!==null){var n=e[p].read();n!==null&&(e[d]=null,e[s]=null,e[c]=null,t(m(n,!1)))}}function g(e){W.nextTick(h,e)}function _(e,t){return function(n,r){e.then(function(){if(t[u]){n(m(void 0,!0));return}t[f](n,r)},r)}}var v=Object.getPrototypeOf(function(){}),y=Object.setPrototypeOf((n={get stream(){return this[p]},next:function(){var e=this,t=this[l];if(t!==null)return Promise.reject(t);if(this[u])return Promise.resolve(m(void 0,!0));if(this[p].destroyed)return new Promise(function(t,n){W.nextTick(function(){e[l]?n(e[l]):t(m(void 0,!0))})});var n=this[d],r;if(n)r=new Promise(_(n,this));else{var i=this[p].read();if(i!==null)return Promise.resolve(m(i,!1));r=new Promise(this[f])}return this[d]=r,r}},r(n,Symbol.asyncIterator,function(){return this}),r(n,`return`,function(){var e=this;return new Promise(function(t,n){e[p].destroy(null,function(e){if(e){n(e);return}t(m(void 0,!0))})})}),n),v);t.exports=function(e){var t,n=Object.create(y,(t={},r(t,p,{value:e,writable:!0}),r(t,s,{value:null,writable:!0}),r(t,c,{value:null,writable:!0}),r(t,l,{value:null,writable:!0}),r(t,u,{value:e._readableState.endEmitted,writable:!0}),r(t,f,{value:function(e,t){var r=n[p].read();r?(n[d]=null,n[s]=null,n[c]=null,e(m(r,!1))):(n[s]=e,n[c]=t)},writable:!0}),t));return n[d]=null,o(e,function(e){if(e&&e.code!==`ERR_STREAM_PREMATURE_CLOSE`){var t=n[c];t!==null&&(n[d]=null,n[s]=null,n[c]=null,t(e)),n[l]=e;return}var r=n[s];r!==null&&(n[d]=null,n[s]=null,n[c]=null,r(m(void 0,!0))),n[u]=!0}),e.on(`readable`,g.bind(null,n)),n}})),It=D(((e,t)=>{t.exports=function(){throw Error(`Readable.from is not available in the browser`)}})),Lt=D(((e,t)=>{re(),Se(),t.exports=E;var n;E.ReadableState=T,ee().EventEmitter;var r=function(e,t){return e.listeners(t).length},i=Ce(),a=Ee().Buffer,o=(ne===void 0?typeof window<`u`?window:typeof self<`u`?self:{}:ne).Uint8Array||function(){};function s(e){return a.from(e)}function c(e){return a.isBuffer(e)||e instanceof o}var l=wt(),u=l&&l.debuglog?l.debuglog(`stream`):function(){},d=Tt(),f=Et(),p=Ot().getHighWaterMark,m=Dt().codes,h=m.ERR_INVALID_ARG_TYPE,g=m.ERR_STREAM_PUSH_AFTER_EOF,_=m.ERR_METHOD_NOT_IMPLEMENTED,v=m.ERR_STREAM_UNSHIFT_AFTER_END_EVENT,y,b,x;te()(E,i);var S=f.errorOrDestroy,C=[`error`,`close`,`destroy`,`pause`,`resume`];function w(e,t,n){if(typeof e.prependListener==`function`)return e.prependListener(t,n);!e._events||!e._events[t]?e.on(t,n):Array.isArray(e._events[t])?e._events[t].unshift(n):e._events[t]=[n,e._events[t]]}function T(e,t,r){n||=jt(),e||={},typeof r!=`boolean`&&(r=t instanceof n),this.objectMode=!!e.objectMode,r&&(this.objectMode=this.objectMode||!!e.readableObjectMode),this.highWaterMark=p(this,e,`readableHighWaterMark`,r),this.buffer=new d,this.length=0,this.pipes=null,this.pipesCount=0,this.flowing=null,this.ended=!1,this.endEmitted=!1,this.reading=!1,this.sync=!0,this.needReadable=!1,this.emittedReadable=!1,this.readableListening=!1,this.resumeScheduled=!1,this.paused=!0,this.emitClose=e.emitClose!==!1,this.autoDestroy=!!e.autoDestroy,this.destroyed=!1,this.defaultEncoding=e.defaultEncoding||`utf8`,this.awaitDrain=0,this.readingMore=!1,this.decoder=null,this.encoding=null,e.encoding&&(y||=Nt().StringDecoder,this.decoder=new y(e.encoding),this.encoding=e.encoding)}function E(e){if(n||=jt(),!(this instanceof E))return new E(e);var t=this instanceof n;this._readableState=new T(e,this,t),this.readable=!0,e&&(typeof e.read==`function`&&(this._read=e.read),typeof e.destroy==`function`&&(this._destroy=e.destroy)),i.call(this)}Object.defineProperty(E.prototype,"destroyed",{enumerable:!1,get:function(){return this._readableState!==void 0&&this._readableState.destroyed},set:function(e){this._readableState&&(this._readableState.destroyed=e)}}),E.prototype.destroy=f.destroy,E.prototype._undestroy=f.undestroy,E.prototype._destroy=function(e,t){t(e)},E.prototype.push=function(e,t){var n=this._readableState,r;return n.objectMode?r=!0:typeof e==`string`&&(t||=n.defaultEncoding,t!==n.encoding&&(e=a.from(e,t),t=``),r=!0),D(this,e,t,!1,r)},E.prototype.unshift=function(e){return D(this,e,null,!0,!1)};function D(e,t,n,r,i){u(`readableAddChunk`,t);var o=e._readableState;if(t===null)o.reading=!1,N(e,o);else{var c;if(i||(c=k(o,t)),c)S(e,c);else if(o.objectMode||t&&t.length>0)if(typeof t!=`string`&&!o.objectMode&&Object.getPrototypeOf(t)!==a.prototype&&(t=s(t)),r)o.endEmitted?S(e,new v):O(e,o,t,!0);else if(o.ended)S(e,new g);else if(o.destroyed)return!1;else o.reading=!1,o.decoder&&!n?(t=o.decoder.write(t),o.objectMode||t.length!==0?O(e,o,t,!1):I(e,o)):O(e,o,t,!1);else r||(o.reading=!1,I(e,o))}return!o.ended&&(o.length<o.highWaterMark||o.length===0)}function O(e,t,n,r){t.flowing&&t.length===0&&!t.sync?(t.awaitDrain=0,e.emit(`data`,n)):(t.length+=t.objectMode?1:n.length,r?t.buffer.unshift(n):t.buffer.push(n),t.needReadable&&P(e)),I(e,t)}function k(e,t){var n;return!c(t)&&typeof t!=`string`&&t!==void 0&&!e.objectMode&&(n=new h(`chunk`,[`string`,`Buffer`,`Uint8Array`],t)),n}E.prototype.isPaused=function(){return this._readableState.flowing===!1},E.prototype.setEncoding=function(e){y||=Nt().StringDecoder;var t=new y(e);this._readableState.decoder=t,this._readableState.encoding=this._readableState.decoder.encoding;for(var n=this._readableState.buffer.head,r=``;n!==null;)r+=t.write(n.data),n=n.next;return this._readableState.buffer.clear(),r!==``&&this._readableState.buffer.push(r),this._readableState.length=r.length,this};var A=1073741824;function j(e){return e>=A?e=A:(e--,e|=e>>>1,e|=e>>>2,e|=e>>>4,e|=e>>>8,e|=e>>>16,e++),e}function M(e,t){return e<=0||t.length===0&&t.ended?0:t.objectMode?1:e===e?(e>t.highWaterMark&&(t.highWaterMark=j(e)),e<=t.length?e:t.ended?t.length:(t.needReadable=!0,0)):t.flowing&&t.length?t.buffer.head.data.length:t.length}E.prototype.read=function(e){u(`read`,e),e=parseInt(e,10);var t=this._readableState,n=e;if(e!==0&&(t.emittedReadable=!1),e===0&&t.needReadable&&((t.highWaterMark===0?t.length>0:t.length>=t.highWaterMark)||t.ended))return u(`read: emitReadable`,t.length,t.ended),t.length===0&&t.ended?ae(this):P(this),null;if(e=M(e,t),e===0&&t.ended)return t.length===0&&ae(this),null;var r=t.needReadable;u(`need readable`,r),(t.length===0||t.length-e<t.highWaterMark)&&(r=!0,u(`length less than watermark`,r)),t.ended||t.reading?(r=!1,u(`reading or ended`,r)):r&&(u(`do read`),t.reading=!0,t.sync=!0,t.length===0&&(t.needReadable=!0),this._read(t.highWaterMark),t.sync=!1,t.reading||(e=M(n,t)));var i=e>0?ie(e,t):null;return i===null?(t.needReadable=t.length<=t.highWaterMark,e=0):(t.length-=e,t.awaitDrain=0),t.length===0&&(t.ended||(t.needReadable=!0),n!==e&&t.ended&&ae(this)),i!==null&&this.emit(`data`,i),i};function N(e,t){if(u(`onEofChunk`),!t.ended){if(t.decoder){var n=t.decoder.end();n&&n.length&&(t.buffer.push(n),t.length+=t.objectMode?1:n.length)}t.ended=!0,t.sync?P(e):(t.needReadable=!1,t.emittedReadable||(t.emittedReadable=!0,F(e)))}}function P(e){var t=e._readableState;u(`emitReadable`,t.needReadable,t.emittedReadable),t.needReadable=!1,t.emittedReadable||(u(`emitReadable`,t.flowing),t.emittedReadable=!0,W.nextTick(F,e))}function F(e){var t=e._readableState;u(`emitReadable_`,t.destroyed,t.length,t.ended),!t.destroyed&&(t.length||t.ended)&&(e.emit(`readable`),t.emittedReadable=!1),t.needReadable=!t.flowing&&!t.ended&&t.length<=t.highWaterMark,U(e)}function I(e,t){t.readingMore||(t.readingMore=!0,W.nextTick(L,e,t))}function L(e,t){for(;!t.reading&&!t.ended&&(t.length<t.highWaterMark||t.flowing&&t.length===0);){var n=t.length;if(u(`maybeReadMore read 0`),e.read(0),n===t.length)break}t.readingMore=!1}E.prototype._read=function(e){S(this,new _(`_read()`))},E.prototype.pipe=function(e,t){var n=this,i=this._readableState;switch(i.pipesCount){case 0:i.pipes=e;break;case 1:i.pipes=[i.pipes,e];break;default:i.pipes.push(e);break}i.pipesCount+=1,u(`pipe count=%d opts=%j`,i.pipesCount,t);var a=(!t||t.end!==!1)&&e!==W.stdout&&e!==W.stderr?s:g;i.endEmitted?W.nextTick(a):n.once(`end`,a),e.on(`unpipe`,o);function o(e,t){u(`onunpipe`),e===n&&t&&t.hasUnpiped===!1&&(t.hasUnpiped=!0,d())}function s(){u(`onend`),e.end()}var c=R(n);e.on(`drain`,c);var l=!1;function d(){u(`cleanup`),e.removeListener(`close`,m),e.removeListener(`finish`,h),e.removeListener(`drain`,c),e.removeListener(`error`,p),e.removeListener(`unpipe`,o),n.removeListener(`end`,s),n.removeListener(`end`,g),n.removeListener(`data`,f),l=!0,i.awaitDrain&&(!e._writableState||e._writableState.needDrain)&&c()}n.on(`data`,f);function f(t){u(`ondata`);var r=e.write(t);u(`dest.write`,r),r===!1&&((i.pipesCount===1&&i.pipes===e||i.pipesCount>1&&se(i.pipes,e)!==-1)&&!l&&(u(`false write response, pause`,i.awaitDrain),i.awaitDrain++),n.pause())}function p(t){u(`onerror`,t),g(),e.removeListener(`error`,p),r(e,`error`)===0&&S(e,t)}w(e,`error`,p);function m(){e.removeListener(`finish`,h),g()}e.once(`close`,m);function h(){u(`onfinish`),e.removeListener(`close`,m),g()}e.once(`finish`,h);function g(){u(`unpipe`),n.unpipe(e)}return e.emit(`pipe`,n),i.flowing||(u(`pipe resume`),n.resume()),e};function R(e){return function(){var t=e._readableState;u(`pipeOnDrain`,t.awaitDrain),t.awaitDrain&&t.awaitDrain--,t.awaitDrain===0&&r(e,`data`)&&(t.flowing=!0,U(e))}}E.prototype.unpipe=function(e){var t=this._readableState,n={hasUnpiped:!1};if(t.pipesCount===0)return this;if(t.pipesCount===1)return e&&e!==t.pipes?this:(e||=t.pipes,t.pipes=null,t.pipesCount=0,t.flowing=!1,e&&e.emit(`unpipe`,this,n),this);if(!e){var r=t.pipes,i=t.pipesCount;t.pipes=null,t.pipesCount=0,t.flowing=!1;for(var a=0;a<i;a++)r[a].emit(`unpipe`,this,{hasUnpiped:!1});return this}var o=se(t.pipes,e);return o===-1?this:(t.pipes.splice(o,1),--t.pipesCount,t.pipesCount===1&&(t.pipes=t.pipes[0]),e.emit(`unpipe`,this,n),this)},E.prototype.on=function(e,t){var n=i.prototype.on.call(this,e,t),r=this._readableState;return e===`data`?(r.readableListening=this.listenerCount(`readable`)>0,r.flowing!==!1&&this.resume()):e===`readable`&&!r.endEmitted&&!r.readableListening&&(r.readableListening=r.needReadable=!0,r.flowing=!1,r.emittedReadable=!1,u(`on readable`,r.length,r.reading),r.length?P(this):r.reading||W.nextTick(B,this)),n},E.prototype.addListener=E.prototype.on,E.prototype.removeListener=function(e,t){var n=i.prototype.removeListener.call(this,e,t);return e===`readable`&&W.nextTick(z,this),n},E.prototype.removeAllListeners=function(e){var t=i.prototype.removeAllListeners.apply(this,arguments);return(e===`readable`||e===void 0)&&W.nextTick(z,this),t};function z(e){var t=e._readableState;t.readableListening=e.listenerCount(`readable`)>0,t.resumeScheduled&&!t.paused?t.flowing=!0:e.listenerCount(`data`)>0&&e.resume()}function B(e){u(`readable nexttick read 0`),e.read(0)}E.prototype.resume=function(){var e=this._readableState;return e.flowing||(u(`resume`),e.flowing=!e.readableListening,V(this,e)),e.paused=!1,this};function V(e,t){t.resumeScheduled||(t.resumeScheduled=!0,W.nextTick(H,e,t))}function H(e,t){u(`resume`,t.reading),t.reading||e.read(0),t.resumeScheduled=!1,e.emit(`resume`),U(e),t.flowing&&!t.reading&&e.read(0)}E.prototype.pause=function(){return u(`call pause flowing=%j`,this._readableState.flowing),this._readableState.flowing!==!1&&(u(`pause`),this._readableState.flowing=!1,this.emit(`pause`)),this._readableState.paused=!0,this};function U(e){var t=e._readableState;for(u(`flow`,t.flowing);t.flowing&&e.read()!==null;);}E.prototype.wrap=function(e){var t=this,n=this._readableState,r=!1;for(var i in e.on(`end`,function(){if(u(`wrapped end`),n.decoder&&!n.ended){var e=n.decoder.end();e&&e.length&&t.push(e)}t.push(null)}),e.on(`data`,function(i){u(`wrapped data`),n.decoder&&(i=n.decoder.write(i)),!(n.objectMode&&i==null)&&(!n.objectMode&&(!i||!i.length)||t.push(i)||(r=!0,e.pause()))}),e)this[i]===void 0&&typeof e[i]==`function`&&(this[i]=function(t){return function(){return e[t].apply(e,arguments)}}(i));for(var a=0;a<C.length;a++)e.on(C[a],this.emit.bind(this,C[a]));return this._read=function(t){u(`wrapped _read`,t),r&&(r=!1,e.resume())},this},typeof Symbol==`function`&&(E.prototype[Symbol.asyncIterator]=function(){return b===void 0&&(b=Ft()),b(this)}),Object.defineProperty(E.prototype,"readableHighWaterMark",{enumerable:!1,get:function(){return this._readableState.highWaterMark}}),Object.defineProperty(E.prototype,"readableBuffer",{enumerable:!1,get:function(){return this._readableState&&this._readableState.buffer}}),Object.defineProperty(E.prototype,"readableFlowing",{enumerable:!1,get:function(){return this._readableState.flowing},set:function(e){this._readableState&&(this._readableState.flowing=e)}}),E._fromList=ie,Object.defineProperty(E.prototype,"readableLength",{enumerable:!1,get:function(){return this._readableState.length}});function ie(e,t){if(t.length===0)return null;var n;return t.objectMode?n=t.buffer.shift():!e||e>=t.length?(n=t.decoder?t.buffer.join(``):t.buffer.length===1?t.buffer.first():t.buffer.concat(t.length),t.buffer.clear()):n=t.buffer.consume(e,t.decoder),n}function ae(e){var t=e._readableState;u(`endReadable`,t.endEmitted),t.endEmitted||(t.ended=!0,W.nextTick(oe,t,e))}function oe(e,t){if(u(`endReadableNT`,e.endEmitted,e.length),!e.endEmitted&&e.length===0&&(e.endEmitted=!0,t.readable=!1,t.emit(`end`),e.autoDestroy)){var n=t._writableState;(!n||n.autoDestroy&&n.finished)&&t.destroy()}}typeof Symbol==`function`&&(E.from=function(e,t){return x===void 0&&(x=It()),x(E,e,t)});function se(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1}})),Rt=D(((e,t)=>{t.exports=l;var n=Dt().codes,r=n.ERR_METHOD_NOT_IMPLEMENTED,i=n.ERR_MULTIPLE_CALLBACK,a=n.ERR_TRANSFORM_ALREADY_TRANSFORMING,o=n.ERR_TRANSFORM_WITH_LENGTH_0,s=jt();te()(l,s);function c(e,t){var n=this._transformState;n.transforming=!1;var r=n.writecb;if(r===null)return this.emit(`error`,new i);n.writechunk=null,n.writecb=null,t!=null&&this.push(t),r(e);var a=this._readableState;a.reading=!1,(a.needReadable||a.length<a.highWaterMark)&&this._read(a.highWaterMark)}function l(e){if(!(this instanceof l))return new l(e);s.call(this,e),this._transformState={afterTransform:c.bind(this),needTransform:!1,transforming:!1,writecb:null,writechunk:null,writeencoding:null},this._readableState.needReadable=!0,this._readableState.sync=!1,e&&(typeof e.transform==`function`&&(this._transform=e.transform),typeof e.flush==`function`&&(this._flush=e.flush)),this.on(`prefinish`,u)}function u(){var e=this;typeof this._flush==`function`&&!this._readableState.destroyed?this._flush(function(t,n){d(e,t,n)}):d(this,null,null)}l.prototype.push=function(e,t){return this._transformState.needTransform=!1,s.prototype.push.call(this,e,t)},l.prototype._transform=function(e,t,n){n(new r(`_transform()`))},l.prototype._write=function(e,t,n){var r=this._transformState;if(r.writecb=n,r.writechunk=e,r.writeencoding=t,!r.transforming){var i=this._readableState;(r.needTransform||i.needReadable||i.length<i.highWaterMark)&&this._read(i.highWaterMark)}},l.prototype._read=function(e){var t=this._transformState;t.writechunk!==null&&!t.transforming?(t.transforming=!0,this._transform(t.writechunk,t.writeencoding,t.afterTransform)):t.needTransform=!0},l.prototype._destroy=function(e,t){s.prototype._destroy.call(this,e,function(e){t(e)})};function d(e,t,n){if(t)return e.emit(`error`,t);if(n!=null&&e.push(n),e._writableState.length)throw new o;if(e._transformState.transforming)throw new a;return e.push(null)}})),zt=D(((e,t)=>{t.exports=r;var n=Rt();te()(r,n);function r(e){if(!(this instanceof r))return new r(e);n.call(this,e)}r.prototype._transform=function(e,t,n){n(null,e)}})),Bt=D(((e,t)=>{var n;function r(e){var t=!1;return function(){t||(t=!0,e.apply(void 0,arguments))}}var i=Dt().codes,a=i.ERR_MISSING_ARGS,o=i.ERR_STREAM_DESTROYED;function s(e){if(e)throw e}function c(e){return e.setHeader&&typeof e.abort==`function`}function l(e,t,i,a){a=r(a);var s=!1;e.on(`close`,function(){s=!0}),n===void 0&&(n=Pt()),n(e,{readable:t,writable:i},function(e){if(e)return a(e);s=!0,a()});var l=!1;return function(t){if(!s&&!l){if(l=!0,c(e))return e.abort();if(typeof e.destroy==`function`)return e.destroy();a(t||new o(`pipe`))}}}function u(e){e()}function d(e,t){return e.pipe(t)}function f(e){return!e.length||typeof e[e.length-1]!=`function`?s:e.pop()}function p(){var e=[...arguments],t=f(e);if(Array.isArray(e[0])&&(e=e[0]),e.length<2)throw new a(`streams`);var n,r=e.map(function(i,a){var o=a<e.length-1;return l(i,o,a>0,function(e){n||=e,e&&r.forEach(u),!o&&(r.forEach(u),t(n))})});return e.reduce(d)}t.exports=p})),Vt=D(((e,t)=>{t.exports=r;var n=ee().EventEmitter;te()(r,n),r.Readable=Lt(),r.Writable=At(),r.Duplex=jt(),r.Transform=Rt(),r.PassThrough=zt(),r.finished=Pt(),r.pipeline=Bt(),r.Stream=r;function r(){n.call(this)}r.prototype.pipe=function(e,t){var r=this;function i(t){e.writable&&!1===e.write(t)&&r.pause&&r.pause()}r.on(`data`,i);function a(){r.readable&&r.resume&&r.resume()}e.on(`drain`,a),!e._isStdio&&(!t||t.end!==!1)&&(r.on(`end`,s),r.on(`close`,c));var o=!1;function s(){o||(o=!0,e.end())}function c(){o||(o=!0,typeof e.destroy==`function`&&e.destroy())}function l(e){if(u(),n.listenerCount(this,`error`)===0)throw e}r.on(`error`,l),e.on(`error`,l);function u(){r.removeListener(`data`,i),e.removeListener(`drain`,a),r.removeListener(`end`,s),r.removeListener(`close`,c),r.removeListener(`error`,l),e.removeListener(`error`,l),r.removeListener(`end`,u),r.removeListener(`close`,u),e.removeListener(`close`,u)}return r.on(`end`,u),r.on(`close`,u),e.on(`close`,u),e.emit(`pipe`,r),e}})),Ht=D((e=>{(function(e){e.parser=function(e,t){return new n(e,t)},e.SAXParser=n,e.SAXStream=l,e.createStream=c,e.MAX_BUFFER_LENGTH=64*1024;var t=[`comment`,`sgmlDecl`,`textNode`,`tagName`,`doctype`,`procInstName`,`procInstBody`,`entity`,`attribName`,`attribValue`,`cdata`,`script`];e.EVENTS=[`text`,`processinginstruction`,`sgmldeclaration`,`doctype`,`comment`,`opentagstart`,`attribute`,`opentag`,`closetag`,`opencdata`,`cdata`,`closecdata`,`error`,`end`,`ready`,`script`,`opennamespace`,`closenamespace`];function n(t,r){if(!(this instanceof n))return new n(t,r);var a=this;i(a),a.q=a.c=``,a.bufferCheckPosition=e.MAX_BUFFER_LENGTH,a.opt=r||{},a.opt.lowercase=a.opt.lowercase||a.opt.lowercasetags,a.looseCase=a.opt.lowercase?`toLowerCase`:`toUpperCase`,a.tags=[],a.closed=a.closedRoot=a.sawRoot=!1,a.tag=a.error=null,a.strict=!!t,a.noscript=!!(t||a.opt.noscript),a.state=w.BEGIN,a.strictEntities=a.opt.strictEntities,a.ENTITIES=a.strictEntities?Object.create(e.XML_ENTITIES):Object.create(e.ENTITIES),a.attribList=[],a.opt.xmlns&&(a.ns=Object.create(m)),a.trackPosition=a.opt.position!==!1,a.trackPosition&&(a.position=a.line=a.column=0),E(a,`onready`)}Object.create||(Object.create=function(e){function t(){}return t.prototype=e,new t}),Object.keys||(Object.keys=function(e){var t=[];for(var n in e)e.hasOwnProperty(n)&&t.push(n);return t});function r(n){for(var r=Math.max(e.MAX_BUFFER_LENGTH,10),i=0,a=0,o=t.length;a<o;a++){var s=n[t[a]].length;if(s>r)switch(t[a]){case`textNode`:O(n);break;case`cdata`:D(n,`oncdata`,n.cdata),n.cdata=``;break;case`script`:D(n,`onscript`,n.script),n.script=``;break;default:A(n,`Max buffer length exceeded: `+t[a])}i=Math.max(i,s)}n.bufferCheckPosition=e.MAX_BUFFER_LENGTH-i+n.position}function i(e){for(var n=0,r=t.length;n<r;n++)e[t[n]]=``}function a(e){O(e),e.cdata!==``&&(D(e,`oncdata`,e.cdata),e.cdata=``),e.script!==``&&(D(e,`onscript`,e.script),e.script=``)}n.prototype={end:function(){j(this)},write:V,resume:function(){return this.error=null,this},close:function(){return this.write(null)},flush:function(){a(this)}};var o;try{o=Vt().Stream}catch{o=function(){}}var s=e.EVENTS.filter(function(e){return e!==`error`&&e!==`end`});function c(e,t){return new l(e,t)}function l(e,t){if(!(this instanceof l))return new l(e,t);o.apply(this),this._parser=new n(e,t),this.writable=!0,this.readable=!0;var r=this;this._parser.onend=function(){r.emit(`end`)},this._parser.onerror=function(e){r.emit(`error`,e),r._parser.error=null},this._decoder=null,s.forEach(function(e){Object.defineProperty(r,`on`+e,{get:function(){return r._parser[`on`+e]},set:function(t){if(!t)return r.removeAllListeners(e),r._parser[`on`+e]=t,t;r.on(e,t)},enumerable:!0,configurable:!1})})}l.prototype=Object.create(o.prototype,{constructor:{value:l}}),l.prototype.write=function(e){if(typeof Buffer==`function`&&typeof Buffer.isBuffer==`function`&&Buffer.isBuffer(e)){if(!this._decoder){var t=Nt().StringDecoder;this._decoder=new t(`utf8`)}e=this._decoder.write(e)}return this._parser.write(e.toString()),this.emit(`data`,e),!0},l.prototype.end=function(e){return e&&e.length&&this.write(e),this._parser.end(),!0},l.prototype.on=function(e,t){var n=this;return!n._parser[`on`+e]&&s.indexOf(e)!==-1&&(n._parser[`on`+e]=function(){var t=arguments.length===1?[arguments[0]]:Array.apply(null,arguments);t.splice(0,0,e),n.emit.apply(n,t)}),o.prototype.on.call(n,e,t)};var u=`[CDATA[`,d=`DOCTYPE`,f=`http://www.w3.org/XML/1998/namespace`,p=`http://www.w3.org/2000/xmlns/`,m={xml:f,xmlns:p},h=/[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,g=/[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/,_=/[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,v=/[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/;function y(e){return e===` `||e===`
`||e===`\r`||e===`	`}function b(e){return e===`"`||e===`'`}function x(e){return e===`>`||y(e)}function S(e,t){return e.test(t)}function C(e,t){return!S(e,t)}var w=0;for(var T in e.STATE={BEGIN:w++,BEGIN_WHITESPACE:w++,TEXT:w++,TEXT_ENTITY:w++,OPEN_WAKA:w++,SGML_DECL:w++,SGML_DECL_QUOTED:w++,DOCTYPE:w++,DOCTYPE_QUOTED:w++,DOCTYPE_DTD:w++,DOCTYPE_DTD_QUOTED:w++,COMMENT_STARTING:w++,COMMENT:w++,COMMENT_ENDING:w++,COMMENT_ENDED:w++,CDATA:w++,CDATA_ENDING:w++,CDATA_ENDING_2:w++,PROC_INST:w++,PROC_INST_BODY:w++,PROC_INST_ENDING:w++,OPEN_TAG:w++,OPEN_TAG_SLASH:w++,ATTRIB:w++,ATTRIB_NAME:w++,ATTRIB_NAME_SAW_WHITE:w++,ATTRIB_VALUE:w++,ATTRIB_VALUE_QUOTED:w++,ATTRIB_VALUE_CLOSED:w++,ATTRIB_VALUE_UNQUOTED:w++,ATTRIB_VALUE_ENTITY_Q:w++,ATTRIB_VALUE_ENTITY_U:w++,CLOSE_TAG:w++,CLOSE_TAG_SAW_WHITE:w++,SCRIPT:w++,SCRIPT_ENDING:w++},e.XML_ENTITIES={amp:`&`,gt:`>`,lt:`<`,quot:`"`,apos:`'`},e.ENTITIES={amp:`&`,gt:`>`,lt:`<`,quot:`"`,apos:`'`,AElig:198,Aacute:193,Acirc:194,Agrave:192,Aring:197,Atilde:195,Auml:196,Ccedil:199,ETH:208,Eacute:201,Ecirc:202,Egrave:200,Euml:203,Iacute:205,Icirc:206,Igrave:204,Iuml:207,Ntilde:209,Oacute:211,Ocirc:212,Ograve:210,Oslash:216,Otilde:213,Ouml:214,THORN:222,Uacute:218,Ucirc:219,Ugrave:217,Uuml:220,Yacute:221,aacute:225,acirc:226,aelig:230,agrave:224,aring:229,atilde:227,auml:228,ccedil:231,eacute:233,ecirc:234,egrave:232,eth:240,euml:235,iacute:237,icirc:238,igrave:236,iuml:239,ntilde:241,oacute:243,ocirc:244,ograve:242,oslash:248,otilde:245,ouml:246,szlig:223,thorn:254,uacute:250,ucirc:251,ugrave:249,uuml:252,yacute:253,yuml:255,copy:169,reg:174,nbsp:160,iexcl:161,cent:162,pound:163,curren:164,yen:165,brvbar:166,sect:167,uml:168,ordf:170,laquo:171,not:172,shy:173,macr:175,deg:176,plusmn:177,sup1:185,sup2:178,sup3:179,acute:180,micro:181,para:182,middot:183,cedil:184,ordm:186,raquo:187,frac14:188,frac12:189,frac34:190,iquest:191,times:215,divide:247,OElig:338,oelig:339,Scaron:352,scaron:353,Yuml:376,fnof:402,circ:710,tilde:732,Alpha:913,Beta:914,Gamma:915,Delta:916,Epsilon:917,Zeta:918,Eta:919,Theta:920,Iota:921,Kappa:922,Lambda:923,Mu:924,Nu:925,Xi:926,Omicron:927,Pi:928,Rho:929,Sigma:931,Tau:932,Upsilon:933,Phi:934,Chi:935,Psi:936,Omega:937,alpha:945,beta:946,gamma:947,delta:948,epsilon:949,zeta:950,eta:951,theta:952,iota:953,kappa:954,lambda:955,mu:956,nu:957,xi:958,omicron:959,pi:960,rho:961,sigmaf:962,sigma:963,tau:964,upsilon:965,phi:966,chi:967,psi:968,omega:969,thetasym:977,upsih:978,piv:982,ensp:8194,emsp:8195,thinsp:8201,zwnj:8204,zwj:8205,lrm:8206,rlm:8207,ndash:8211,mdash:8212,lsquo:8216,rsquo:8217,sbquo:8218,ldquo:8220,rdquo:8221,bdquo:8222,dagger:8224,Dagger:8225,bull:8226,hellip:8230,permil:8240,prime:8242,Prime:8243,lsaquo:8249,rsaquo:8250,oline:8254,frasl:8260,euro:8364,image:8465,weierp:8472,real:8476,trade:8482,alefsym:8501,larr:8592,uarr:8593,rarr:8594,darr:8595,harr:8596,crarr:8629,lArr:8656,uArr:8657,rArr:8658,dArr:8659,hArr:8660,forall:8704,part:8706,exist:8707,empty:8709,nabla:8711,isin:8712,notin:8713,ni:8715,prod:8719,sum:8721,minus:8722,lowast:8727,radic:8730,prop:8733,infin:8734,ang:8736,and:8743,or:8744,cap:8745,cup:8746,int:8747,there4:8756,sim:8764,cong:8773,asymp:8776,ne:8800,equiv:8801,le:8804,ge:8805,sub:8834,sup:8835,nsub:8836,sube:8838,supe:8839,oplus:8853,otimes:8855,perp:8869,sdot:8901,lceil:8968,rceil:8969,lfloor:8970,rfloor:8971,lang:9001,rang:9002,loz:9674,spades:9824,clubs:9827,hearts:9829,diams:9830},Object.keys(e.ENTITIES).forEach(function(t){var n=e.ENTITIES[t],r=typeof n==`number`?String.fromCharCode(n):n;e.ENTITIES[t]=r}),e.STATE)e.STATE[e.STATE[T]]=T;w=e.STATE;function E(e,t,n){e[t]&&e[t](n)}function D(e,t,n){e.textNode&&O(e),E(e,t,n)}function O(e){e.textNode=k(e.opt,e.textNode),e.textNode&&E(e,`ontext`,e.textNode),e.textNode=``}function k(e,t){return e.trim&&(t=t.trim()),e.normalize&&(t=t.replace(/\s+/g,` `)),t}function A(e,t){return O(e),e.trackPosition&&(t+=`
Line: `+e.line+`
Column: `+e.column+`
Char: `+e.c),t=Error(t),e.error=t,E(e,`onerror`,t),e}function j(e){return e.sawRoot&&!e.closedRoot&&M(e,`Unclosed root tag`),e.state!==w.BEGIN&&e.state!==w.BEGIN_WHITESPACE&&e.state!==w.TEXT&&A(e,`Unexpected end`),O(e),e.c=``,e.closed=!0,E(e,`onend`),n.call(e,e.strict,e.opt),e}function M(e,t){if(typeof e!=`object`||!(e instanceof n))throw Error(`bad call to strictFail`);e.strict&&A(e,t)}function N(e){e.strict||(e.tagName=e.tagName[e.looseCase]());var t=e.tags[e.tags.length-1]||e,n=e.tag={name:e.tagName,attributes:{}};e.opt.xmlns&&(n.ns=t.ns),e.attribList.length=0,D(e,`onopentagstart`,n)}function P(e,t){var n=e.indexOf(`:`)<0?[``,e]:e.split(`:`),r=n[0],i=n[1];return t&&e===`xmlns`&&(r=`xmlns`,i=``),{prefix:r,local:i}}function F(e){if(e.strict||(e.attribName=e.attribName[e.looseCase]()),e.attribList.indexOf(e.attribName)!==-1||e.tag.attributes.hasOwnProperty(e.attribName)){e.attribName=e.attribValue=``;return}if(e.opt.xmlns){var t=P(e.attribName,!0),n=t.prefix,r=t.local;if(n===`xmlns`)if(r===`xml`&&e.attribValue!==f)M(e,`xml: prefix must be bound to `+f+`
Actual: `+e.attribValue);else if(r===`xmlns`&&e.attribValue!==p)M(e,`xmlns: prefix must be bound to `+p+`
Actual: `+e.attribValue);else{var i=e.tag,a=e.tags[e.tags.length-1]||e;i.ns===a.ns&&(i.ns=Object.create(a.ns)),i.ns[r]=e.attribValue}e.attribList.push([e.attribName,e.attribValue])}else e.tag.attributes[e.attribName]=e.attribValue,D(e,`onattribute`,{name:e.attribName,value:e.attribValue});e.attribName=e.attribValue=``}function I(e,t){if(e.opt.xmlns){var n=e.tag,r=P(e.tagName);n.prefix=r.prefix,n.local=r.local,n.uri=n.ns[r.prefix]||``,n.prefix&&!n.uri&&(M(e,`Unbound namespace prefix: `+JSON.stringify(e.tagName)),n.uri=r.prefix);var i=e.tags[e.tags.length-1]||e;n.ns&&i.ns!==n.ns&&Object.keys(n.ns).forEach(function(t){D(e,`onopennamespace`,{prefix:t,uri:n.ns[t]})});for(var a=0,o=e.attribList.length;a<o;a++){var s=e.attribList[a],c=s[0],l=s[1],u=P(c,!0),d=u.prefix,f=u.local,p=d===``?``:n.ns[d]||``,m={name:c,value:l,prefix:d,local:f,uri:p};d&&d!==`xmlns`&&!p&&(M(e,`Unbound namespace prefix: `+JSON.stringify(d)),m.uri=d),e.tag.attributes[c]=m,D(e,`onattribute`,m)}e.attribList.length=0}e.tag.isSelfClosing=!!t,e.sawRoot=!0,e.tags.push(e.tag),D(e,`onopentag`,e.tag),t||(!e.noscript&&e.tagName.toLowerCase()===`script`?e.state=w.SCRIPT:e.state=w.TEXT,e.tag=null,e.tagName=``),e.attribName=e.attribValue=``,e.attribList.length=0}function L(e){if(!e.tagName){M(e,`Weird empty close tag.`),e.textNode+=`</>`,e.state=w.TEXT;return}if(e.script){if(e.tagName!==`script`){e.script+=`</`+e.tagName+`>`,e.tagName=``,e.state=w.SCRIPT;return}D(e,`onscript`,e.script),e.script=``}var t=e.tags.length,n=e.tagName;e.strict||(n=n[e.looseCase]());for(var r=n;t--&&e.tags[t].name!==r;)M(e,`Unexpected close tag`);if(t<0){M(e,`Unmatched closing tag: `+e.tagName),e.textNode+=`</`+e.tagName+`>`,e.state=w.TEXT;return}e.tagName=n;for(var i=e.tags.length;i-->t;){var a=e.tag=e.tags.pop();e.tagName=e.tag.name,D(e,`onclosetag`,e.tagName);var o={};for(var s in a.ns)o[s]=a.ns[s];var c=e.tags[e.tags.length-1]||e;e.opt.xmlns&&a.ns!==c.ns&&Object.keys(a.ns).forEach(function(t){var n=a.ns[t];D(e,`onclosenamespace`,{prefix:t,uri:n})})}t===0&&(e.closedRoot=!0),e.tagName=e.attribValue=e.attribName=``,e.attribList.length=0,e.state=w.TEXT}function R(e){var t=e.entity,n=t.toLowerCase(),r,i=``;return e.ENTITIES[t]?e.ENTITIES[t]:e.ENTITIES[n]?e.ENTITIES[n]:(t=n,t.charAt(0)===`#`&&(t.charAt(1)===`x`?(t=t.slice(2),r=parseInt(t,16),i=r.toString(16)):(t=t.slice(1),r=parseInt(t,10),i=r.toString(10))),t=t.replace(/^0+/,``),isNaN(r)||i.toLowerCase()!==t?(M(e,`Invalid character entity`),`&`+e.entity+`;`):String.fromCodePoint(r))}function z(e,t){t===`<`?(e.state=w.OPEN_WAKA,e.startTagPosition=e.position):y(t)||(M(e,`Non-whitespace before first tag.`),e.textNode=t,e.state=w.TEXT)}function B(e,t){var n=``;return t<e.length&&(n=e.charAt(t)),n}function V(e){var t=this;if(this.error)throw this.error;if(t.closed)return A(t,`Cannot write after close. Assign an onready handler.`);if(e===null)return j(t);typeof e==`object`&&(e=e.toString());for(var n=0,i=``;i=B(e,n++),t.c=i,i;)switch(t.trackPosition&&(t.position++,i===`
`?(t.line++,t.column=0):t.column++),t.state){case w.BEGIN:if(t.state=w.BEGIN_WHITESPACE,i===`﻿`)continue;z(t,i);continue;case w.BEGIN_WHITESPACE:z(t,i);continue;case w.TEXT:if(t.sawRoot&&!t.closedRoot){for(var a=n-1;i&&i!==`<`&&i!==`&`;)i=B(e,n++),i&&t.trackPosition&&(t.position++,i===`
`?(t.line++,t.column=0):t.column++);t.textNode+=e.substring(a,n-1)}i===`<`&&!(t.sawRoot&&t.closedRoot&&!t.strict)?(t.state=w.OPEN_WAKA,t.startTagPosition=t.position):(!y(i)&&(!t.sawRoot||t.closedRoot)&&M(t,`Text data outside of root node.`),i===`&`?t.state=w.TEXT_ENTITY:t.textNode+=i);continue;case w.SCRIPT:i===`<`?t.state=w.SCRIPT_ENDING:t.script+=i;continue;case w.SCRIPT_ENDING:i===`/`?t.state=w.CLOSE_TAG:(t.script+=`<`+i,t.state=w.SCRIPT);continue;case w.OPEN_WAKA:if(i===`!`)t.state=w.SGML_DECL,t.sgmlDecl=``;else if(!y(i))if(S(h,i))t.state=w.OPEN_TAG,t.tagName=i;else if(i===`/`)t.state=w.CLOSE_TAG,t.tagName=``;else if(i===`?`)t.state=w.PROC_INST,t.procInstName=t.procInstBody=``;else{if(M(t,`Unencoded <`),t.startTagPosition+1<t.position){var o=t.position-t.startTagPosition;i=Array(o).join(` `)+i}t.textNode+=`<`+i,t.state=w.TEXT}continue;case w.SGML_DECL:(t.sgmlDecl+i).toUpperCase()===u?(D(t,`onopencdata`),t.state=w.CDATA,t.sgmlDecl=``,t.cdata=``):t.sgmlDecl+i===`--`?(t.state=w.COMMENT,t.comment=``,t.sgmlDecl=``):(t.sgmlDecl+i).toUpperCase()===d?(t.state=w.DOCTYPE,(t.doctype||t.sawRoot)&&M(t,`Inappropriately located doctype declaration`),t.doctype=``,t.sgmlDecl=``):i===`>`?(D(t,`onsgmldeclaration`,t.sgmlDecl),t.sgmlDecl=``,t.state=w.TEXT):(b(i)&&(t.state=w.SGML_DECL_QUOTED),t.sgmlDecl+=i);continue;case w.SGML_DECL_QUOTED:i===t.q&&(t.state=w.SGML_DECL,t.q=``),t.sgmlDecl+=i;continue;case w.DOCTYPE:i===`>`?(t.state=w.TEXT,D(t,`ondoctype`,t.doctype),t.doctype=!0):(t.doctype+=i,i===`[`?t.state=w.DOCTYPE_DTD:b(i)&&(t.state=w.DOCTYPE_QUOTED,t.q=i));continue;case w.DOCTYPE_QUOTED:t.doctype+=i,i===t.q&&(t.q=``,t.state=w.DOCTYPE);continue;case w.DOCTYPE_DTD:t.doctype+=i,i===`]`?t.state=w.DOCTYPE:b(i)&&(t.state=w.DOCTYPE_DTD_QUOTED,t.q=i);continue;case w.DOCTYPE_DTD_QUOTED:t.doctype+=i,i===t.q&&(t.state=w.DOCTYPE_DTD,t.q=``);continue;case w.COMMENT:i===`-`?t.state=w.COMMENT_ENDING:t.comment+=i;continue;case w.COMMENT_ENDING:i===`-`?(t.state=w.COMMENT_ENDED,t.comment=k(t.opt,t.comment),t.comment&&D(t,`oncomment`,t.comment),t.comment=``):(t.comment+=`-`+i,t.state=w.COMMENT);continue;case w.COMMENT_ENDED:i===`>`?t.state=w.TEXT:(M(t,`Malformed comment`),t.comment+=`--`+i,t.state=w.COMMENT);continue;case w.CDATA:i===`]`?t.state=w.CDATA_ENDING:t.cdata+=i;continue;case w.CDATA_ENDING:i===`]`?t.state=w.CDATA_ENDING_2:(t.cdata+=`]`+i,t.state=w.CDATA);continue;case w.CDATA_ENDING_2:i===`>`?(t.cdata&&D(t,`oncdata`,t.cdata),D(t,`onclosecdata`),t.cdata=``,t.state=w.TEXT):i===`]`?t.cdata+=`]`:(t.cdata+=`]]`+i,t.state=w.CDATA);continue;case w.PROC_INST:i===`?`?t.state=w.PROC_INST_ENDING:y(i)?t.state=w.PROC_INST_BODY:t.procInstName+=i;continue;case w.PROC_INST_BODY:if(!t.procInstBody&&y(i))continue;i===`?`?t.state=w.PROC_INST_ENDING:t.procInstBody+=i;continue;case w.PROC_INST_ENDING:i===`>`?(D(t,`onprocessinginstruction`,{name:t.procInstName,body:t.procInstBody}),t.procInstName=t.procInstBody=``,t.state=w.TEXT):(t.procInstBody+=`?`+i,t.state=w.PROC_INST_BODY);continue;case w.OPEN_TAG:S(g,i)?t.tagName+=i:(N(t),i===`>`?I(t):i===`/`?t.state=w.OPEN_TAG_SLASH:(y(i)||M(t,`Invalid character in tag name`),t.state=w.ATTRIB));continue;case w.OPEN_TAG_SLASH:i===`>`?(I(t,!0),L(t)):(M(t,`Forward-slash in opening tag not followed by >`),t.state=w.ATTRIB);continue;case w.ATTRIB:if(y(i))continue;i===`>`?I(t):i===`/`?t.state=w.OPEN_TAG_SLASH:S(h,i)?(t.attribName=i,t.attribValue=``,t.state=w.ATTRIB_NAME):M(t,`Invalid attribute name`);continue;case w.ATTRIB_NAME:i===`=`?t.state=w.ATTRIB_VALUE:i===`>`?(M(t,`Attribute without value`),t.attribValue=t.attribName,F(t),I(t)):y(i)?t.state=w.ATTRIB_NAME_SAW_WHITE:S(g,i)?t.attribName+=i:M(t,`Invalid attribute name`);continue;case w.ATTRIB_NAME_SAW_WHITE:if(i===`=`)t.state=w.ATTRIB_VALUE;else if(y(i))continue;else M(t,`Attribute without value`),t.tag.attributes[t.attribName]=``,t.attribValue=``,D(t,`onattribute`,{name:t.attribName,value:``}),t.attribName=``,i===`>`?I(t):S(h,i)?(t.attribName=i,t.state=w.ATTRIB_NAME):(M(t,`Invalid attribute name`),t.state=w.ATTRIB);continue;case w.ATTRIB_VALUE:if(y(i))continue;b(i)?(t.q=i,t.state=w.ATTRIB_VALUE_QUOTED):(M(t,`Unquoted attribute value`),t.state=w.ATTRIB_VALUE_UNQUOTED,t.attribValue=i);continue;case w.ATTRIB_VALUE_QUOTED:if(i!==t.q){i===`&`?t.state=w.ATTRIB_VALUE_ENTITY_Q:t.attribValue+=i;continue}F(t),t.q=``,t.state=w.ATTRIB_VALUE_CLOSED;continue;case w.ATTRIB_VALUE_CLOSED:y(i)?t.state=w.ATTRIB:i===`>`?I(t):i===`/`?t.state=w.OPEN_TAG_SLASH:S(h,i)?(M(t,`No whitespace between attributes`),t.attribName=i,t.attribValue=``,t.state=w.ATTRIB_NAME):M(t,`Invalid attribute name`);continue;case w.ATTRIB_VALUE_UNQUOTED:if(!x(i)){i===`&`?t.state=w.ATTRIB_VALUE_ENTITY_U:t.attribValue+=i;continue}F(t),i===`>`?I(t):t.state=w.ATTRIB;continue;case w.CLOSE_TAG:if(t.tagName)i===`>`?L(t):S(g,i)?t.tagName+=i:t.script?(t.script+=`</`+t.tagName,t.tagName=``,t.state=w.SCRIPT):(y(i)||M(t,`Invalid tagname in closing tag`),t.state=w.CLOSE_TAG_SAW_WHITE);else{if(y(i))continue;C(h,i)?t.script?(t.script+=`</`+i,t.state=w.SCRIPT):M(t,`Invalid tagname in closing tag.`):t.tagName=i}continue;case w.CLOSE_TAG_SAW_WHITE:if(y(i))continue;i===`>`?L(t):M(t,`Invalid characters in closing tag`);continue;case w.TEXT_ENTITY:case w.ATTRIB_VALUE_ENTITY_Q:case w.ATTRIB_VALUE_ENTITY_U:var s,c;switch(t.state){case w.TEXT_ENTITY:s=w.TEXT,c=`textNode`;break;case w.ATTRIB_VALUE_ENTITY_Q:s=w.ATTRIB_VALUE_QUOTED,c=`attribValue`;break;case w.ATTRIB_VALUE_ENTITY_U:s=w.ATTRIB_VALUE_UNQUOTED,c=`attribValue`;break}i===`;`?(t[c]+=R(t),t.entity=``,t.state=s):S(t.entity.length?v:_,i)?t.entity+=i:(M(t,`Invalid character in entity name`),t[c]+=`&`+t.entity+i,t.entity=``,t.state=s);continue;default:throw Error(t,`Unknown state: `+t.state)}return t.position>=t.bufferCheckPosition&&r(t),t}String.fromCodePoint||(function(){var e=String.fromCharCode,t=Math.floor,n=function(){var n=16384,r=[],i,a,o=-1,s=arguments.length;if(!s)return``;for(var c=``;++o<s;){var l=Number(arguments[o]);if(!isFinite(l)||l<0||l>1114111||t(l)!==l)throw RangeError(`Invalid code point: `+l);l<=65535?r.push(l):(l-=65536,i=(l>>10)+55296,a=l%1024+56320,r.push(i,a)),(o+1===s||r.length>n)&&(c+=e.apply(null,r),r.length=0)}return c};Object.defineProperty?Object.defineProperty(String,"fromCodePoint",{value:n,configurable:!0,writable:!0}):String.fromCodePoint=n})()})(e===void 0?e.sax={}:e)})),Ut=D(((e,t)=>{t.exports={isArray:function(e){return Array.isArray?Array.isArray(e):Object.prototype.toString.call(e)===`[object Array]`}}})),Wt=D(((e,t)=>{var n=Ut().isArray;t.exports={copyOptions:function(e){var t,n={};for(t in e)e.hasOwnProperty(t)&&(n[t]=e[t]);return n},ensureFlagExists:function(e,t){(!(e in t)||typeof t[e]!=`boolean`)&&(t[e]=!1)},ensureSpacesExists:function(e){(!(`spaces`in e)||typeof e.spaces!=`number`&&typeof e.spaces!=`string`)&&(e.spaces=0)},ensureAlwaysArrayExists:function(e){(!(`alwaysArray`in e)||typeof e.alwaysArray!=`boolean`&&!n(e.alwaysArray))&&(e.alwaysArray=!1)},ensureKeyExists:function(e,t){(!(e+`Key`in t)||typeof t[e+`Key`]!=`string`)&&(t[e+`Key`]=t.compact?`_`+e:e)},checkFnExists:function(e,t){return e+`Fn`in t}}})),Gt=D(((e,t)=>{var n=Ht(),r={on:function(){},parse:function(){}},i=Wt(),a=Ut().isArray,o,s=!0,c;function l(e){return o=i.copyOptions(e),i.ensureFlagExists(`ignoreDeclaration`,o),i.ensureFlagExists(`ignoreInstruction`,o),i.ensureFlagExists(`ignoreAttributes`,o),i.ensureFlagExists(`ignoreText`,o),i.ensureFlagExists(`ignoreComment`,o),i.ensureFlagExists(`ignoreCdata`,o),i.ensureFlagExists(`ignoreDoctype`,o),i.ensureFlagExists(`compact`,o),i.ensureFlagExists(`alwaysChildren`,o),i.ensureFlagExists(`addParent`,o),i.ensureFlagExists(`trim`,o),i.ensureFlagExists(`nativeType`,o),i.ensureFlagExists(`nativeTypeAttributes`,o),i.ensureFlagExists(`sanitize`,o),i.ensureFlagExists(`instructionHasAttributes`,o),i.ensureFlagExists(`captureSpacesBetweenElements`,o),i.ensureAlwaysArrayExists(o),i.ensureKeyExists(`declaration`,o),i.ensureKeyExists(`instruction`,o),i.ensureKeyExists(`attributes`,o),i.ensureKeyExists(`text`,o),i.ensureKeyExists(`comment`,o),i.ensureKeyExists(`cdata`,o),i.ensureKeyExists(`doctype`,o),i.ensureKeyExists(`type`,o),i.ensureKeyExists(`name`,o),i.ensureKeyExists(`elements`,o),i.ensureKeyExists(`parent`,o),i.checkFnExists(`doctype`,o),i.checkFnExists(`instruction`,o),i.checkFnExists(`cdata`,o),i.checkFnExists(`comment`,o),i.checkFnExists(`text`,o),i.checkFnExists(`instructionName`,o),i.checkFnExists(`elementName`,o),i.checkFnExists(`attributeName`,o),i.checkFnExists(`attributeValue`,o),i.checkFnExists(`attributes`,o),o}function u(e){var t=Number(e);if(!isNaN(t))return t;var n=e.toLowerCase();return n===`true`||n!==`false`&&e}function d(e,t){var n;if(o.compact){if(!c[o[e+`Key`]]&&(a(o.alwaysArray)?o.alwaysArray.indexOf(o[e+`Key`])!==-1:o.alwaysArray)&&(c[o[e+`Key`]]=[]),c[o[e+`Key`]]&&!a(c[o[e+`Key`]])&&(c[o[e+`Key`]]=[c[o[e+`Key`]]]),e+`Fn`in o&&typeof t==`string`&&(t=o[e+`Fn`](t,c)),e===`instruction`&&(`instructionFn`in o||`instructionNameFn`in o)){for(n in t)if(t.hasOwnProperty(n))if(`instructionFn`in o)t[n]=o.instructionFn(t[n],n,c);else{var r=t[n];delete t[n],t[o.instructionNameFn(n,r,c)]=r}}a(c[o[e+`Key`]])?c[o[e+`Key`]].push(t):c[o[e+`Key`]]=t}else{c[o.elementsKey]||(c[o.elementsKey]=[]);var i={};if(i[o.typeKey]=e,e===`instruction`){for(n in t)if(t.hasOwnProperty(n))break;i[o.nameKey]=`instructionNameFn`in o?o.instructionNameFn(n,t,c):n,o.instructionHasAttributes?(i[o.attributesKey]=t[n][o.attributesKey],`instructionFn`in o&&(i[o.attributesKey]=o.instructionFn(i[o.attributesKey],n,c))):(`instructionFn`in o&&(t[n]=o.instructionFn(t[n],n,c)),i[o.instructionKey]=t[n])}else e+`Fn`in o&&(t=o[e+`Fn`](t,c)),i[o[e+`Key`]]=t;o.addParent&&(i[o.parentKey]=c),c[o.elementsKey].push(i)}}function f(e){if(`attributesFn`in o&&e&&(e=o.attributesFn(e,c)),(o.trim||`attributeValueFn`in o||`attributeNameFn`in o||o.nativeTypeAttributes)&&e){for(var t in e)if(e.hasOwnProperty(t)&&(o.trim&&(e[t]=e[t].trim()),o.nativeTypeAttributes&&(e[t]=u(e[t])),`attributeValueFn`in o&&(e[t]=o.attributeValueFn(e[t],t,c)),`attributeNameFn`in o)){var n=e[t];delete e[t],e[o.attributeNameFn(t,e[t],c)]=n}}return e}function p(e){var t={};if(e.body&&(e.name.toLowerCase()===`xml`||o.instructionHasAttributes)){for(var n=/([\w:-]+)\s*=\s*(?:"([^"]*)"|'([^']*)'|(\w+))\s*/g,r;(r=n.exec(e.body))!==null;)t[r[1]]=r[2]||r[3]||r[4];t=f(t)}if(e.name.toLowerCase()===`xml`){if(o.ignoreDeclaration)return;c[o.declarationKey]={},Object.keys(t).length&&(c[o.declarationKey][o.attributesKey]=t),o.addParent&&(c[o.declarationKey][o.parentKey]=c)}else{if(o.ignoreInstruction)return;o.trim&&(e.body=e.body.trim());var i={};o.instructionHasAttributes&&Object.keys(t).length?(i[e.name]={},i[e.name][o.attributesKey]=t):i[e.name]=e.body,d(`instruction`,i)}}function m(e,t){var n;if(typeof e==`object`&&(t=e.attributes,e=e.name),t=f(t),`elementNameFn`in o&&(e=o.elementNameFn(e,c)),o.compact){if(n={},!o.ignoreAttributes&&t&&Object.keys(t).length)for(var r in n[o.attributesKey]={},t)t.hasOwnProperty(r)&&(n[o.attributesKey][r]=t[r]);!(e in c)&&(a(o.alwaysArray)?o.alwaysArray.indexOf(e)!==-1:o.alwaysArray)&&(c[e]=[]),c[e]&&!a(c[e])&&(c[e]=[c[e]]),a(c[e])?c[e].push(n):c[e]=n}else c[o.elementsKey]||(c[o.elementsKey]=[]),n={},n[o.typeKey]=`element`,n[o.nameKey]=e,!o.ignoreAttributes&&t&&Object.keys(t).length&&(n[o.attributesKey]=t),o.alwaysChildren&&(n[o.elementsKey]=[]),c[o.elementsKey].push(n);n[o.parentKey]=c,c=n}function h(e){o.ignoreText||!e.trim()&&!o.captureSpacesBetweenElements||(o.trim&&(e=e.trim()),o.nativeType&&(e=u(e)),o.sanitize&&(e=e.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`)),d(`text`,e))}function g(e){o.ignoreComment||(o.trim&&(e=e.trim()),d(`comment`,e))}function _(e){var t=c[o.parentKey];o.addParent||delete c[o.parentKey],c=t}function v(e){o.ignoreCdata||(o.trim&&(e=e.trim()),d(`cdata`,e))}function y(e){o.ignoreDoctype||(e=e.replace(/^ /,``),o.trim&&(e=e.trim()),d(`doctype`,e))}function b(e){e.note=e}t.exports=function(e,t){var i=s?n.parser(!0,{}):i=new r.Parser(`UTF-8`),a={};if(c=a,o=l(t),s?(i.opt={strictEntities:!0},i.onopentag=m,i.ontext=h,i.oncomment=g,i.onclosetag=_,i.onerror=b,i.oncdata=v,i.ondoctype=y,i.onprocessinginstruction=p):(i.on(`startElement`,m),i.on(`text`,h),i.on(`comment`,g),i.on(`endElement`,_),i.on(`error`,b)),s)i.write(e).close();else if(!i.parse(e))throw Error(`XML parsing error: `+i.getError());if(a[o.elementsKey]){var u=a[o.elementsKey];delete a[o.elementsKey],a[o.elementsKey]=u,delete a.text}return a}})),Kt=D(((e,t)=>{var n=Wt(),r=Gt();function i(e){var t=n.copyOptions(e);return n.ensureSpacesExists(t),t}t.exports=function(e,t){var n=i(t),a=r(e,n),o,s=`compact`in n&&n.compact?`_parent`:`parent`;return o=`addParent`in n&&n.addParent?JSON.stringify(a,function(e,t){return e===s?`_`:t},n.spaces):JSON.stringify(a,null,n.spaces),o.replace(/\u2028/g,`\\u2028`).replace(/\u2029/g,`\\u2029`)}})),qt=D(((e,t)=>{var n=Wt(),r=Ut().isArray,i,a;function o(e){var t=n.copyOptions(e);return n.ensureFlagExists(`ignoreDeclaration`,t),n.ensureFlagExists(`ignoreInstruction`,t),n.ensureFlagExists(`ignoreAttributes`,t),n.ensureFlagExists(`ignoreText`,t),n.ensureFlagExists(`ignoreComment`,t),n.ensureFlagExists(`ignoreCdata`,t),n.ensureFlagExists(`ignoreDoctype`,t),n.ensureFlagExists(`compact`,t),n.ensureFlagExists(`indentText`,t),n.ensureFlagExists(`indentCdata`,t),n.ensureFlagExists(`indentAttributes`,t),n.ensureFlagExists(`indentInstruction`,t),n.ensureFlagExists(`fullTagEmptyElement`,t),n.ensureFlagExists(`noQuotesForNativeAttributes`,t),n.ensureSpacesExists(t),typeof t.spaces==`number`&&(t.spaces=Array(t.spaces+1).join(` `)),n.ensureKeyExists(`declaration`,t),n.ensureKeyExists(`instruction`,t),n.ensureKeyExists(`attributes`,t),n.ensureKeyExists(`text`,t),n.ensureKeyExists(`comment`,t),n.ensureKeyExists(`cdata`,t),n.ensureKeyExists(`doctype`,t),n.ensureKeyExists(`type`,t),n.ensureKeyExists(`name`,t),n.ensureKeyExists(`elements`,t),n.checkFnExists(`doctype`,t),n.checkFnExists(`instruction`,t),n.checkFnExists(`cdata`,t),n.checkFnExists(`comment`,t),n.checkFnExists(`text`,t),n.checkFnExists(`instructionName`,t),n.checkFnExists(`elementName`,t),n.checkFnExists(`attributeName`,t),n.checkFnExists(`attributeValue`,t),n.checkFnExists(`attributes`,t),n.checkFnExists(`fullTagEmptyElement`,t),t}function s(e,t,n){return(!n&&e.spaces?`
`:``)+Array(t+1).join(e.spaces)}function c(e,t,n){if(t.ignoreAttributes)return``;`attributesFn`in t&&(e=t.attributesFn(e,a,i));var r,o,c,l,u=[];for(r in e)e.hasOwnProperty(r)&&e[r]!==null&&e[r]!==void 0&&(l=t.noQuotesForNativeAttributes&&typeof e[r]!=`string`?``:`"`,o=``+e[r],o=o.replace(/"/g,`&quot;`),c=`attributeNameFn`in t?t.attributeNameFn(r,o,a,i):r,u.push(t.spaces&&t.indentAttributes?s(t,n+1,!1):` `),u.push(c+`=`+l+(`attributeValueFn`in t?t.attributeValueFn(o,r,a,i):o)+l));return e&&Object.keys(e).length&&t.spaces&&t.indentAttributes&&u.push(s(t,n,!1)),u.join(``)}function l(e,t,n){return i=e,a=`xml`,t.ignoreDeclaration?``:`<?xml`+c(e[t.attributesKey],t,n)+`?>`}function u(e,t,n){if(t.ignoreInstruction)return``;for(var r in e)if(e.hasOwnProperty(r))break;var o=`instructionNameFn`in t?t.instructionNameFn(r,e[r],a,i):r;if(typeof e[r]==`object`)return i=e,a=o,`<?`+o+c(e[r][t.attributesKey],t,n)+`?>`;var s=e[r]?e[r]:``;return`instructionFn`in t&&(s=t.instructionFn(s,r,a,i)),`<?`+o+(s?` `+s:``)+`?>`}function d(e,t){return t.ignoreComment?``:`<!--`+(`commentFn`in t?t.commentFn(e,a,i):e)+`-->`}function f(e,t){return t.ignoreCdata?``:`<![CDATA[`+(`cdataFn`in t?t.cdataFn(e,a,i):e.replace(`]]>`,`]]]]><![CDATA[>`))+`]]>`}function p(e,t){return t.ignoreDoctype?``:`<!DOCTYPE `+(`doctypeFn`in t?t.doctypeFn(e,a,i):e)+`>`}function m(e,t){return t.ignoreText?``:(e=``+e,e=e.replace(/&amp;/g,`&`),e=e.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`),`textFn`in t?t.textFn(e,a,i):e)}function h(e,t){var n;if(e.elements&&e.elements.length)for(n=0;n<e.elements.length;++n)switch(e.elements[n][t.typeKey]){case`text`:if(t.indentText)return!0;break;case`cdata`:if(t.indentCdata)return!0;break;case`instruction`:if(t.indentInstruction)return!0;break;case`doctype`:case`comment`:case`element`:return!0;default:return!0}return!1}function g(e,t,n){i=e,a=e.name;var r=[],o=`elementNameFn`in t?t.elementNameFn(e.name,e):e.name;r.push(`<`+o),e[t.attributesKey]&&r.push(c(e[t.attributesKey],t,n));var s=e[t.elementsKey]&&e[t.elementsKey].length||e[t.attributesKey]&&e[t.attributesKey][`xml:space`]===`preserve`;return s||=`fullTagEmptyElementFn`in t?t.fullTagEmptyElementFn(e.name,e):t.fullTagEmptyElement,s?(r.push(`>`),e[t.elementsKey]&&e[t.elementsKey].length&&(r.push(_(e[t.elementsKey],t,n+1)),i=e,a=e.name),r.push(t.spaces&&h(e,t)?`
`+Array(n+1).join(t.spaces):``),r.push(`</`+o+`>`)):r.push(`/>`),r.join(``)}function _(e,t,n,r){return e.reduce(function(e,i){var a=s(t,n,r&&!e);switch(i.type){case`element`:return e+a+g(i,t,n);case`comment`:return e+a+d(i[t.commentKey],t);case`doctype`:return e+a+p(i[t.doctypeKey],t);case`cdata`:return e+(t.indentCdata?a:``)+f(i[t.cdataKey],t);case`text`:return e+(t.indentText?a:``)+m(i[t.textKey],t);case`instruction`:var o={};return o[i[t.nameKey]]=i[t.attributesKey]?i:i[t.instructionKey],e+(t.indentInstruction?a:``)+u(o,t,n)}},``)}function v(e,t,n){for(var r in e)if(e.hasOwnProperty(r))switch(r){case t.parentKey:case t.attributesKey:break;case t.textKey:if(t.indentText||n)return!0;break;case t.cdataKey:if(t.indentCdata||n)return!0;break;case t.instructionKey:if(t.indentInstruction||n)return!0;break;case t.doctypeKey:case t.commentKey:return!0;default:return!0}return!1}function y(e,t,n,r,o){i=e,a=t;var l=`elementNameFn`in n?n.elementNameFn(t,e):t;if(e==null||e===``)return`fullTagEmptyElementFn`in n&&n.fullTagEmptyElementFn(t,e)||n.fullTagEmptyElement?`<`+l+`></`+l+`>`:`<`+l+`/>`;var u=[];if(t){if(u.push(`<`+l),typeof e!=`object`)return u.push(`>`+m(e,n)+`</`+l+`>`),u.join(``);e[n.attributesKey]&&u.push(c(e[n.attributesKey],n,r));var d=v(e,n,!0)||e[n.attributesKey]&&e[n.attributesKey][`xml:space`]===`preserve`;if(d||=`fullTagEmptyElementFn`in n?n.fullTagEmptyElementFn(t,e):n.fullTagEmptyElement,d)u.push(`>`);else return u.push(`/>`),u.join(``)}return u.push(b(e,n,r+1,!1)),i=e,a=t,t&&u.push((o?s(n,r,!1):``)+`</`+l+`>`),u.join(``)}function b(e,t,n,i){var a,o,c,h=[];for(o in e)if(e.hasOwnProperty(o))for(c=r(e[o])?e[o]:[e[o]],a=0;a<c.length;++a){switch(o){case t.declarationKey:h.push(l(c[a],t,n));break;case t.instructionKey:h.push((t.indentInstruction?s(t,n,i):``)+u(c[a],t,n));break;case t.attributesKey:case t.parentKey:break;case t.textKey:h.push((t.indentText?s(t,n,i):``)+m(c[a],t));break;case t.cdataKey:h.push((t.indentCdata?s(t,n,i):``)+f(c[a],t));break;case t.doctypeKey:h.push(s(t,n,i)+p(c[a],t));break;case t.commentKey:h.push(s(t,n,i)+d(c[a],t));break;default:h.push(s(t,n,i)+y(c[a],o,t,n,v(c[a],t)))}i&&=!h.length}return h.join(``)}t.exports=function(e,t){t=o(t);var n=[];return i=e,a=`_root_`,t.compact?n.push(b(e,t,0,!0)):(e[t.declarationKey]&&n.push(l(e[t.declarationKey],t,0)),e[t.elementsKey]&&e[t.elementsKey].length&&n.push(_(e[t.elementsKey],t,0,!n.length))),n.join(``)}})),Jt=D(((e,t)=>{var n=qt();t.exports=function(e,t){e instanceof Buffer&&(e=e.toString());var r=null;if(typeof e==`string`)try{r=JSON.parse(e)}catch{throw Error(`The JSON structure is invalid`)}else r=e;return n(r,t)}})),Yt=D(((e,t)=>{t.exports={xml2js:Gt(),xml2json:Kt(),js2xml:qt(),json2xml:Jt()}}))(),Xt=e=>{switch(e.type){case void 0:case`element`:let t=new Qt(e.name,e.attributes),n=e.elements||[];for(let e of n){let n=Xt(e);n!==void 0&&t.push(n)}return t;case`text`:return e.text;default:return}},Zt=class extends V{},Qt=class extends L{static fromXmlString(e){return Xt((0,Yt.xml2js)(e,{compact:!1}))}constructor(e,t){super(e),t&&this.root.push(new Zt(t))}push(e){this.root.push(e)}},$t=class extends L{constructor(e){super(``),P(this,`_attr`,void 0),this._attr=e}prepForXml(e){return{_attr:this._attr}}},en=class extends L{constructor(e,t){super(e),t&&(this.root=t.root)}},tn=e=>{if(isNaN(e))throw Error(`Invalid value '${e}' specified. Must be an integer.`);return Math.floor(e)},nn=e=>{let t=tn(e);if(t<0)throw Error(`Invalid value '${e}' specified. Must be a positive integer.`);return t},rn=(e,t)=>{let n=t*2;if(e.length!==n||isNaN(Number(`0x${e}`)))throw Error(`Invalid hex value '${e}'. Expected ${n} digit hex value`);return e},an=e=>rn(e,1),on=e=>{let t=e.slice(-2),n=e.substring(0,e.length-2);return`${Number(n)}${t}`},sn=e=>{let t=on(e);if(parseFloat(t)<0)throw Error(`Invalid value '${t}' specified. Expected a positive number.`);return t},cn=e=>e===`auto`?e:rn(e.charAt(0)===`#`?e.substring(1):e,3),ln=e=>typeof e==`string`?on(e):tn(e),un=e=>typeof e==`string`?sn(e):nn(e),dn=e=>typeof e==`string`?sn(e):nn(e),fn=nn,pn=nn,mn=e=>e.toISOString(),G=class extends L{constructor(e,t=!0){super(e),t!==!0&&this.root.push(new U({val:t}))}},hn=class extends L{constructor(e,t){super(e),this.root.push(new U({val:un(t)}))}},gn=class extends L{},_n=class extends L{constructor(e,t){super(e),this.root.push(new U({val:t}))}},vn=(e,t)=>new K({name:e,attributes:{value:{key:`w:val`,value:t}}}),yn=class extends L{constructor(e,t){super(e),this.root.push(new U({val:t}))}},bn=class extends L{constructor(e,t){super(e),this.root.push(t)}},K=class extends L{constructor({name:e,attributes:t,children:n}){super(e),t&&this.root.push(new H(t)),n&&this.root.push(...n)}},xn={START:`start`,CENTER:`center`,END:`end`,BOTH:`both`,MEDIUM_KASHIDA:`mediumKashida`,DISTRIBUTE:`distribute`,NUM_TAB:`numTab`,HIGH_KASHIDA:`highKashida`,LOW_KASHIDA:`lowKashida`,THAI_DISTRIBUTE:`thaiDistribute`,LEFT:`left`,RIGHT:`right`,JUSTIFIED:`both`},Sn=e=>new K({name:`w:jc`,attributes:{val:{key:`w:val`,value:e}}}),Cn=(e,{color:t,size:n,space:r,style:i})=>new K({name:e,attributes:{style:{key:`w:val`,value:i},color:{key:`w:color`,value:t===void 0?void 0:cn(t)},size:{key:`w:sz`,value:n===void 0?void 0:fn(n)},space:{key:`w:space`,value:r===void 0?void 0:pn(r)}}}),wn={SINGLE:`single`,DASH_DOT_STROKED:`dashDotStroked`,DASHED:`dashed`,DASH_SMALL_GAP:`dashSmallGap`,DOT_DASH:`dotDash`,DOT_DOT_DASH:`dotDotDash`,DOTTED:`dotted`,DOUBLE:`double`,DOUBLE_WAVE:`doubleWave`,INSET:`inset`,NIL:`nil`,NONE:`none`,OUTSET:`outset`,THICK:`thick`,THICK_THIN_LARGE_GAP:`thickThinLargeGap`,THICK_THIN_MEDIUM_GAP:`thickThinMediumGap`,THICK_THIN_SMALL_GAP:`thickThinSmallGap`,THIN_THICK_LARGE_GAP:`thinThickLargeGap`,THIN_THICK_MEDIUM_GAP:`thinThickMediumGap`,THIN_THICK_SMALL_GAP:`thinThickSmallGap`,THIN_THICK_THIN_LARGE_GAP:`thinThickThinLargeGap`,THIN_THICK_THIN_MEDIUM_GAP:`thinThickThinMediumGap`,THIN_THICK_THIN_SMALL_GAP:`thinThickThinSmallGap`,THREE_D_EMBOSS:`threeDEmboss`,THREE_D_ENGRAVE:`threeDEngrave`,TRIPLE:`triple`,WAVE:`wave`},Tn=class extends R{constructor(e){super(`w:pBdr`),e.top&&this.root.push(Cn(`w:top`,e.top)),e.bottom&&this.root.push(Cn(`w:bottom`,e.bottom)),e.left&&this.root.push(Cn(`w:left`,e.left)),e.right&&this.root.push(Cn(`w:right`,e.right)),e.between&&this.root.push(Cn(`w:between`,e.between))}},En=class extends L{constructor(){super(`w:pBdr`);let e=Cn(`w:bottom`,{color:`auto`,space:1,style:wn.SINGLE,size:6});this.root.push(e)}},Dn=({start:e,end:t,left:n,right:r,hanging:i,firstLine:a,firstLineChars:o})=>new K({name:`w:ind`,attributes:{start:{key:`w:start`,value:e===void 0?void 0:ln(e)},end:{key:`w:end`,value:t===void 0?void 0:ln(t)},left:{key:`w:left`,value:n===void 0?void 0:ln(n)},right:{key:`w:right`,value:r===void 0?void 0:ln(r)},hanging:{key:`w:hanging`,value:i===void 0?void 0:dn(i)},firstLine:{key:`w:firstLine`,value:a===void 0?void 0:dn(a)},firstLineChars:{key:`w:firstLineChars`,value:o===void 0?void 0:tn(o)}}}),On=()=>new K({name:`w:br`}),kn={BEGIN:`begin`,END:`end`,SEPARATE:`separate`},An=(e,t)=>new K({name:`w:fldChar`,attributes:{type:{key:`w:fldCharType`,value:e},dirty:{key:`w:dirty`,value:t}}}),jn=e=>An(kn.BEGIN,e),Mn=e=>An(kn.SEPARATE,e),Nn=e=>An(kn.END,e),Pn={DEFAULT:`default`,PRESERVE:`preserve`},Fn=class extends V{constructor(...e){super(...e),P(this,`xmlKeys`,{space:`xml:space`})}},In=class extends L{constructor(){super(`w:instrText`),this.root.push(new Fn({space:Pn.PRESERVE})),this.root.push(`PAGE`)}},Ln=class extends L{constructor(){super(`w:instrText`),this.root.push(new Fn({space:Pn.PRESERVE})),this.root.push(`NUMPAGES`)}},Rn=class extends L{constructor(){super(`w:instrText`),this.root.push(new Fn({space:Pn.PRESERVE})),this.root.push(`SECTIONPAGES`)}},zn=class extends L{constructor(){super(`w:instrText`),this.root.push(new Fn({space:Pn.PRESERVE})),this.root.push(`SECTION`)}},Bn=({fill:e,color:t,type:n})=>new K({name:`w:shd`,attributes:{fill:{key:`w:fill`,value:e===void 0?void 0:cn(e)},color:{key:`w:color`,value:t===void 0?void 0:cn(t)},type:{key:`w:val`,value:n}}}),Vn=class extends V{constructor(...e){super(...e),P(this,`xmlKeys`,{id:`w:id`,author:`w:author`,date:`w:date`})}},Hn=class extends L{constructor(e){super(`w:del`),this.root.push(new Vn({id:e.id,author:e.author,date:e.date}))}},Un=class extends L{constructor(e){super(`w:ins`),this.root.push(new Vn({id:e.id,author:e.author,date:e.date}))}},Wn={DOT:`dot`},Gn=(e=Wn.DOT)=>new K({name:`w:em`,attributes:{val:{key:`w:val`,value:e}}}),Kn=class extends L{constructor(e){super(`w:spacing`),this.root.push(new U({val:ln(e)}))}},qn=class extends L{constructor(e){super(`w:color`),this.root.push(new U({val:cn(e)}))}},Jn=class extends L{constructor(e){super(`w:highlight`),this.root.push(new U({val:e}))}},Yn=class extends L{constructor(e){super(`w:highlightCs`),this.root.push(new U({val:e}))}},Xn=e=>new K({name:`w:lang`,attributes:{value:{key:`w:val`,value:e.value},eastAsia:{key:`w:eastAsia`,value:e.eastAsia},bidirectional:{key:`w:bidi`,value:e.bidirectional}}}),Zn=(e,t)=>{if(typeof e==`string`){let n=e;return new K({name:`w:rFonts`,attributes:{ascii:{key:`w:ascii`,value:n},cs:{key:`w:cs`,value:n},eastAsia:{key:`w:eastAsia`,value:n},hAnsi:{key:`w:hAnsi`,value:n},hint:{key:`w:hint`,value:t}}})}let n=e;return new K({name:`w:rFonts`,attributes:{ascii:{key:`w:ascii`,value:n.ascii},cs:{key:`w:cs`,value:n.cs},eastAsia:{key:`w:eastAsia`,value:n.eastAsia},hAnsi:{key:`w:hAnsi`,value:n.hAnsi},hint:{key:`w:hint`,value:n.hint}}})},Qn=e=>new K({name:`w:vertAlign`,attributes:{val:{key:`w:val`,value:e}}}),$n=()=>Qn(`superscript`),er=()=>Qn(`subscript`),tr={SINGLE:`single`,WORDS:`words`,DOUBLE:`double`,THICK:`thick`,DOTTED:`dotted`,DOTTEDHEAVY:`dottedHeavy`,DASH:`dash`,DASHEDHEAVY:`dashedHeavy`,DASHLONG:`dashLong`,DASHLONGHEAVY:`dashLongHeavy`,DOTDASH:`dotDash`,DASHDOTHEAVY:`dashDotHeavy`,DOTDOTDASH:`dotDotDash`,DASHDOTDOTHEAVY:`dashDotDotHeavy`,WAVE:`wave`,WAVYHEAVY:`wavyHeavy`,WAVYDOUBLE:`wavyDouble`,NONE:`none`},nr=(e=tr.SINGLE,t)=>new K({name:`w:u`,attributes:{val:{key:`w:val`,value:e},color:{key:`w:color`,value:t===void 0?void 0:cn(t)}}}),rr=class extends R{constructor(e){if(super(`w:rPr`),!e)return;e.style&&this.push(new _n(`w:rStyle`,e.style)),e.font&&(typeof e.font==`string`?this.push(Zn(e.font)):`name`in e.font?this.push(Zn(e.font.name,e.font.hint)):this.push(Zn(e.font))),e.bold!==void 0&&this.push(new G(`w:b`,e.bold)),(e.boldComplexScript===void 0&&e.bold!==void 0||e.boldComplexScript)&&this.push(new G(`w:bCs`,e.boldComplexScript??e.bold)),e.italics!==void 0&&this.push(new G(`w:i`,e.italics)),(e.italicsComplexScript===void 0&&e.italics!==void 0||e.italicsComplexScript)&&this.push(new G(`w:iCs`,e.italicsComplexScript??e.italics)),e.smallCaps===void 0?e.allCaps!==void 0&&this.push(new G(`w:caps`,e.allCaps)):this.push(new G(`w:smallCaps`,e.smallCaps)),e.strike!==void 0&&this.push(new G(`w:strike`,e.strike)),e.doubleStrike!==void 0&&this.push(new G(`w:dstrike`,e.doubleStrike)),e.emboss!==void 0&&this.push(new G(`w:emboss`,e.emboss)),e.imprint!==void 0&&this.push(new G(`w:imprint`,e.imprint)),e.noProof!==void 0&&this.push(new G(`w:noProof`,e.noProof)),e.snapToGrid!==void 0&&this.push(new G(`w:snapToGrid`,e.snapToGrid)),e.vanish&&this.push(new G(`w:vanish`,e.vanish)),e.color&&this.push(new qn(e.color)),e.characterSpacing&&this.push(new Kn(e.characterSpacing)),e.scale!==void 0&&this.push(new yn(`w:w`,e.scale)),e.kern&&this.push(new hn(`w:kern`,e.kern)),e.position&&this.push(new _n(`w:position`,e.position)),e.size!==void 0&&this.push(new hn(`w:sz`,e.size));let t=e.sizeComplexScript===void 0||e.sizeComplexScript===!0?e.size:e.sizeComplexScript;t&&this.push(new hn(`w:szCs`,t)),e.highlight&&this.push(new Jn(e.highlight));let n=e.highlightComplexScript===void 0||e.highlightComplexScript===!0?e.highlight:e.highlightComplexScript;n&&this.push(new Yn(n)),e.underline&&this.push(nr(e.underline.type,e.underline.color)),e.effect&&this.push(new _n(`w:effect`,e.effect)),e.border&&this.push(Cn(`w:bdr`,e.border)),e.shading&&this.push(Bn(e.shading)),e.subScript&&this.push(er()),e.superScript&&this.push($n()),e.rightToLeft!==void 0&&this.push(new G(`w:rtl`,e.rightToLeft)),e.emphasisMark&&this.push(Gn(e.emphasisMark.type)),e.language&&this.push(Xn(e.language)),e.specVanish&&this.push(new G(`w:specVanish`,e.vanish)),e.math&&this.push(new G(`w:oMath`,e.math)),e.revision&&this.push(new ar(e.revision))}push(e){this.root.push(e)}},ir=class extends rr{constructor(e){super(e),e?.insertion&&this.push(new Un(e.insertion)),e?.deletion&&this.push(new Hn(e.deletion))}},ar=class extends L{constructor(e){super(`w:rPrChange`),this.root.push(new Vn({id:e.id,author:e.author,date:e.date})),this.addChildElement(new rr(e))}},or=class extends L{constructor(e){super(`w:t`),typeof e==`string`?(this.root.push(new Fn({space:Pn.PRESERVE})),this.root.push(e)):(this.root.push(new Fn({space:e.space??Pn.DEFAULT})),this.root.push(e.text))}},sr={CURRENT:`CURRENT`,TOTAL_PAGES:`TOTAL_PAGES`,TOTAL_PAGES_IN_SECTION:`TOTAL_PAGES_IN_SECTION`,CURRENT_SECTION:`SECTION`},cr=class extends L{constructor(e){if(super(`w:r`),P(this,`properties`,void 0),this.properties=new rr(e),this.root.push(this.properties),e.break)for(let t=0;t<e.break;t++)this.root.push(On());if(e.children)for(let t of e.children){if(typeof t==`string`){switch(t){case sr.CURRENT:this.root.push(jn()),this.root.push(new In),this.root.push(Mn()),this.root.push(Nn());break;case sr.TOTAL_PAGES:this.root.push(jn()),this.root.push(new Ln),this.root.push(Mn()),this.root.push(Nn());break;case sr.TOTAL_PAGES_IN_SECTION:this.root.push(jn()),this.root.push(new Rn),this.root.push(Mn()),this.root.push(Nn());break;case sr.CURRENT_SECTION:this.root.push(jn()),this.root.push(new zn),this.root.push(Mn()),this.root.push(Nn());break;default:this.root.push(new or(t));break}continue}this.root.push(t)}else e.text!==void 0&&this.root.push(new or(e.text))}},lr=class extends cr{constructor(e){super(typeof e==`string`?{text:e}:e)}},ur=D(((e,t)=>{t.exports=n;function n(e,t){if(!e)throw Error(t||`Assertion failed`)}n.equal=function(e,t,n){if(e!=t)throw Error(n||`Assertion failed: `+e+` != `+t)}})),dr=D((e=>{var t=ur();e.inherits=te();function n(e,t){return(e.charCodeAt(t)&64512)!=55296||t<0||t+1>=e.length?!1:(e.charCodeAt(t+1)&64512)==56320}function r(e,t){if(Array.isArray(e))return e.slice();if(!e)return[];var r=[];if(typeof e==`string`){if(!t)for(var i=0,a=0;a<e.length;a++){var o=e.charCodeAt(a);o<128?r[i++]=o:o<2048?(r[i++]=o>>6|192,r[i++]=o&63|128):n(e,a)?(o=65536+((o&1023)<<10)+(e.charCodeAt(++a)&1023),r[i++]=o>>18|240,r[i++]=o>>12&63|128,r[i++]=o>>6&63|128,r[i++]=o&63|128):(r[i++]=o>>12|224,r[i++]=o>>6&63|128,r[i++]=o&63|128)}else if(t===`hex`)for(e=e.replace(/[^a-z0-9]+/gi,``),e.length%2!=0&&(e=`0`+e),a=0;a<e.length;a+=2)r.push(parseInt(e[a]+e[a+1],16))}else for(a=0;a<e.length;a++)r[a]=e[a]|0;return r}e.toArray=r;function i(e){for(var t=``,n=0;n<e.length;n++)t+=s(e[n].toString(16));return t}e.toHex=i;function a(e){return(e>>>24|e>>>8&65280|e<<8&16711680|(e&255)<<24)>>>0}e.htonl=a;function o(e,t){for(var n=``,r=0;r<e.length;r++){var i=e[r];t===`little`&&(i=a(i)),n+=c(i.toString(16))}return n}e.toHex32=o;function s(e){return e.length===1?`0`+e:e}e.zero2=s;function c(e){return e.length===7?`0`+e:e.length===6?`00`+e:e.length===5?`000`+e:e.length===4?`0000`+e:e.length===3?`00000`+e:e.length===2?`000000`+e:e.length===1?`0000000`+e:e}e.zero8=c;function l(e,n,r,i){var a=r-n;t(a%4==0);for(var o=Array(a/4),s=0,c=n;s<o.length;s++,c+=4)o[s]=(i===`big`?e[c]<<24|e[c+1]<<16|e[c+2]<<8|e[c+3]:e[c+3]<<24|e[c+2]<<16|e[c+1]<<8|e[c])>>>0;return o}e.join32=l;function u(e,t){for(var n=Array(e.length*4),r=0,i=0;r<e.length;r++,i+=4){var a=e[r];t===`big`?(n[i]=a>>>24,n[i+1]=a>>>16&255,n[i+2]=a>>>8&255,n[i+3]=a&255):(n[i+3]=a>>>24,n[i+2]=a>>>16&255,n[i+1]=a>>>8&255,n[i]=a&255)}return n}e.split32=u;function d(e,t){return e>>>t|e<<32-t}e.rotr32=d;function f(e,t){return e<<t|e>>>32-t}e.rotl32=f;function p(e,t){return e+t>>>0}e.sum32=p;function m(e,t,n){return e+t+n>>>0}e.sum32_3=m;function h(e,t,n,r){return e+t+n+r>>>0}e.sum32_4=h;function g(e,t,n,r,i){return e+t+n+r+i>>>0}e.sum32_5=g;function _(e,t,n,r){var i=e[t],a=r+e[t+1]>>>0;e[t]=+(a<r)+n+i>>>0,e[t+1]=a}e.sum64=_;function v(e,t,n,r){return+(t+r>>>0<t)+e+n>>>0}e.sum64_hi=v;function y(e,t,n,r){return t+r>>>0}e.sum64_lo=y;function b(e,t,n,r,i,a,o,s){var c=0,l=t;return l=l+r>>>0,c+=+(l<t),l=l+a>>>0,c+=+(l<a),l=l+s>>>0,c+=+(l<s),e+n+i+o+c>>>0}e.sum64_4_hi=b;function x(e,t,n,r,i,a,o,s){return t+r+a+s>>>0}e.sum64_4_lo=x;function S(e,t,n,r,i,a,o,s,c,l){var u=0,d=t;return d=d+r>>>0,u+=+(d<t),d=d+a>>>0,u+=+(d<a),d=d+s>>>0,u+=+(d<s),d=d+l>>>0,u+=+(d<l),e+n+i+o+c+u>>>0}e.sum64_5_hi=S;function C(e,t,n,r,i,a,o,s,c,l){return t+r+a+s+l>>>0}e.sum64_5_lo=C;function w(e,t,n){return(t<<32-n|e>>>n)>>>0}e.rotr64_hi=w;function T(e,t,n){return(e<<32-n|t>>>n)>>>0}e.rotr64_lo=T;function E(e,t,n){return e>>>n}e.shr64_hi=E;function D(e,t,n){return(e<<32-n|t>>>n)>>>0}e.shr64_lo=D})),fr=D((e=>{var t=dr(),n=ur();function r(){this.pending=null,this.pendingTotal=0,this.blockSize=this.constructor.blockSize,this.outSize=this.constructor.outSize,this.hmacStrength=this.constructor.hmacStrength,this.padLength=this.constructor.padLength/8,this.endian=`big`,this._delta8=this.blockSize/8,this._delta32=this.blockSize/32}e.BlockHash=r,r.prototype.update=function(e,n){if(e=t.toArray(e,n),this.pending?this.pending=this.pending.concat(e):this.pending=e,this.pendingTotal+=e.length,this.pending.length>=this._delta8){e=this.pending;var r=e.length%this._delta8;this.pending=e.slice(e.length-r,e.length),this.pending.length===0&&(this.pending=null),e=t.join32(e,0,e.length-r,this.endian);for(var i=0;i<e.length;i+=this._delta32)this._update(e,i,i+this._delta32)}return this},r.prototype.digest=function(e){return this.update(this._pad()),n(this.pending===null),this._digest(e)},r.prototype._pad=function(){var e=this.pendingTotal,t=this._delta8,n=t-(e+this.padLength)%t,r=Array(n+this.padLength);r[0]=128;for(var i=1;i<n;i++)r[i]=0;if(e<<=3,this.endian===`big`){for(var a=8;a<this.padLength;a++)r[i++]=0;r[i++]=0,r[i++]=0,r[i++]=0,r[i++]=0,r[i++]=e>>>24&255,r[i++]=e>>>16&255,r[i++]=e>>>8&255,r[i++]=e&255}else for(r[i++]=e&255,r[i++]=e>>>8&255,r[i++]=e>>>16&255,r[i++]=e>>>24&255,r[i++]=0,r[i++]=0,r[i++]=0,r[i++]=0,a=8;a<this.padLength;a++)r[i++]=0;return r}})),pr=D((e=>{var t=dr().rotr32;function n(e,t,n,o){if(e===0)return r(t,n,o);if(e===1||e===3)return a(t,n,o);if(e===2)return i(t,n,o)}e.ft_1=n;function r(e,t,n){return e&t^~e&n}e.ch32=r;function i(e,t,n){return e&t^e&n^t&n}e.maj32=i;function a(e,t,n){return e^t^n}e.p32=a;function o(e){return t(e,2)^t(e,13)^t(e,22)}e.s0_256=o;function s(e){return t(e,6)^t(e,11)^t(e,25)}e.s1_256=s;function c(e){return t(e,7)^t(e,18)^e>>>3}e.g0_256=c;function l(e){return t(e,17)^t(e,19)^e>>>10}e.g1_256=l})),mr=D(((e,t)=>{var n=dr(),r=fr(),i=pr(),a=n.rotl32,o=n.sum32,s=n.sum32_5,c=i.ft_1,l=r.BlockHash,u=[1518500249,1859775393,2400959708,3395469782];function d(){if(!(this instanceof d))return new d;l.call(this),this.h=[1732584193,4023233417,2562383102,271733878,3285377520],this.W=Array(80)}n.inherits(d,l),t.exports=d,d.blockSize=512,d.outSize=160,d.hmacStrength=80,d.padLength=64,d.prototype._update=function(e,t){for(var n=this.W,r=0;r<16;r++)n[r]=e[t+r];for(;r<n.length;r++)n[r]=a(n[r-3]^n[r-8]^n[r-14]^n[r-16],1);var i=this.h[0],l=this.h[1],d=this.h[2],f=this.h[3],p=this.h[4];for(r=0;r<n.length;r++){var m=~~(r/20),h=s(a(i,5),c(m,l,d,f),p,n[r],u[m]);p=f,f=d,d=a(l,30),l=i,i=h}this.h[0]=o(this.h[0],i),this.h[1]=o(this.h[1],l),this.h[2]=o(this.h[2],d),this.h[3]=o(this.h[3],f),this.h[4]=o(this.h[4],p)},d.prototype._digest=function(e){return e===`hex`?n.toHex32(this.h,`big`):n.split32(this.h,`big`)}})),hr=D(((e,t)=>{var n=dr(),r=fr(),i=pr(),a=ur(),o=n.sum32,s=n.sum32_4,c=n.sum32_5,l=i.ch32,u=i.maj32,d=i.s0_256,f=i.s1_256,p=i.g0_256,m=i.g1_256,h=r.BlockHash,g=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298];function _(){if(!(this instanceof _))return new _;h.call(this),this.h=[1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225],this.k=g,this.W=Array(64)}n.inherits(_,h),t.exports=_,_.blockSize=512,_.outSize=256,_.hmacStrength=192,_.padLength=64,_.prototype._update=function(e,t){for(var n=this.W,r=0;r<16;r++)n[r]=e[t+r];for(;r<n.length;r++)n[r]=s(m(n[r-2]),n[r-7],p(n[r-15]),n[r-16]);var i=this.h[0],h=this.h[1],g=this.h[2],_=this.h[3],v=this.h[4],y=this.h[5],b=this.h[6],x=this.h[7];for(a(this.k.length===n.length),r=0;r<n.length;r++){var S=c(x,f(v),l(v,y,b),this.k[r],n[r]),C=o(d(i),u(i,h,g));x=b,b=y,y=v,v=o(_,S),_=g,g=h,h=i,i=o(S,C)}this.h[0]=o(this.h[0],i),this.h[1]=o(this.h[1],h),this.h[2]=o(this.h[2],g),this.h[3]=o(this.h[3],_),this.h[4]=o(this.h[4],v),this.h[5]=o(this.h[5],y),this.h[6]=o(this.h[6],b),this.h[7]=o(this.h[7],x)},_.prototype._digest=function(e){return e===`hex`?n.toHex32(this.h,`big`):n.split32(this.h,`big`)}})),gr=D(((e,t)=>{var n=dr(),r=hr();function i(){if(!(this instanceof i))return new i;r.call(this),this.h=[3238371032,914150663,812702999,4144912697,4290775857,1750603025,1694076839,3204075428]}n.inherits(i,r),t.exports=i,i.blockSize=512,i.outSize=224,i.hmacStrength=192,i.padLength=64,i.prototype._digest=function(e){return e===`hex`?n.toHex32(this.h.slice(0,7),`big`):n.split32(this.h.slice(0,7),`big`)}})),_r=D(((e,t)=>{var n=dr(),r=fr(),i=ur(),a=n.rotr64_hi,o=n.rotr64_lo,s=n.shr64_hi,c=n.shr64_lo,l=n.sum64,u=n.sum64_hi,d=n.sum64_lo,f=n.sum64_4_hi,p=n.sum64_4_lo,m=n.sum64_5_hi,h=n.sum64_5_lo,g=r.BlockHash,_=[1116352408,3609767458,1899447441,602891725,3049323471,3964484399,3921009573,2173295548,961987163,4081628472,1508970993,3053834265,2453635748,2937671579,2870763221,3664609560,3624381080,2734883394,310598401,1164996542,607225278,1323610764,1426881987,3590304994,1925078388,4068182383,2162078206,991336113,2614888103,633803317,3248222580,3479774868,3835390401,2666613458,4022224774,944711139,264347078,2341262773,604807628,2007800933,770255983,1495990901,1249150122,1856431235,1555081692,3175218132,1996064986,2198950837,2554220882,3999719339,2821834349,766784016,2952996808,2566594879,3210313671,3203337956,3336571891,1034457026,3584528711,2466948901,113926993,3758326383,338241895,168717936,666307205,1188179964,773529912,1546045734,1294757372,1522805485,1396182291,2643833823,1695183700,2343527390,1986661051,1014477480,2177026350,1206759142,2456956037,344077627,2730485921,1290863460,2820302411,3158454273,3259730800,3505952657,3345764771,106217008,3516065817,3606008344,3600352804,1432725776,4094571909,1467031594,275423344,851169720,430227734,3100823752,506948616,1363258195,659060556,3750685593,883997877,3785050280,958139571,3318307427,1322822218,3812723403,1537002063,2003034995,1747873779,3602036899,1955562222,1575990012,2024104815,1125592928,2227730452,2716904306,2361852424,442776044,2428436474,593698344,2756734187,3733110249,3204031479,2999351573,3329325298,3815920427,3391569614,3928383900,3515267271,566280711,3940187606,3454069534,4118630271,4000239992,116418474,1914138554,174292421,2731055270,289380356,3203993006,460393269,320620315,685471733,587496836,852142971,1086792851,1017036298,365543100,1126000580,2618297676,1288033470,3409855158,1501505948,4234509866,1607167915,987167468,1816402316,1246189591];function v(){if(!(this instanceof v))return new v;g.call(this),this.h=[1779033703,4089235720,3144134277,2227873595,1013904242,4271175723,2773480762,1595750129,1359893119,2917565137,2600822924,725511199,528734635,4215389547,1541459225,327033209],this.k=_,this.W=Array(160)}n.inherits(v,g),t.exports=v,v.blockSize=1024,v.outSize=512,v.hmacStrength=192,v.padLength=128,v.prototype._prepareBlock=function(e,t){for(var n=this.W,r=0;r<32;r++)n[r]=e[t+r];for(;r<n.length;r+=2){var i=k(n[r-4],n[r-3]),a=A(n[r-4],n[r-3]),o=n[r-14],s=n[r-13],c=D(n[r-30],n[r-29]),l=O(n[r-30],n[r-29]),u=n[r-32],d=n[r-31];n[r]=f(i,a,o,s,c,l,u,d),n[r+1]=p(i,a,o,s,c,l,u,d)}},v.prototype._update=function(e,t){this._prepareBlock(e,t);var n=this.W,r=this.h[0],a=this.h[1],o=this.h[2],s=this.h[3],c=this.h[4],f=this.h[5],p=this.h[6],g=this.h[7],_=this.h[8],v=this.h[9],D=this.h[10],O=this.h[11],k=this.h[12],A=this.h[13],j=this.h[14],M=this.h[15];i(this.k.length===n.length);for(var N=0;N<n.length;N+=2){var P=j,F=M,I=T(_,v),L=E(_,v),R=y(_,v,D,O,k,A),z=b(_,v,D,O,k,A),B=this.k[N],V=this.k[N+1],H=n[N],U=n[N+1],ee=m(P,F,I,L,R,z,B,V,H,U),te=h(P,F,I,L,R,z,B,V,H,U);P=C(r,a),F=w(r,a),I=x(r,a,o,s,c,f),L=S(r,a,o,s,c,f);var ne=u(P,F,I,L),re=d(P,F,I,L);j=k,M=A,k=D,A=O,D=_,O=v,_=u(p,g,ee,te),v=d(g,g,ee,te),p=c,g=f,c=o,f=s,o=r,s=a,r=u(ee,te,ne,re),a=d(ee,te,ne,re)}l(this.h,0,r,a),l(this.h,2,o,s),l(this.h,4,c,f),l(this.h,6,p,g),l(this.h,8,_,v),l(this.h,10,D,O),l(this.h,12,k,A),l(this.h,14,j,M)},v.prototype._digest=function(e){return e===`hex`?n.toHex32(this.h,`big`):n.split32(this.h,`big`)};function y(e,t,n,r,i){var a=e&n^~e&i;return a<0&&(a+=4294967296),a}function b(e,t,n,r,i,a){var o=t&r^~t&a;return o<0&&(o+=4294967296),o}function x(e,t,n,r,i){var a=e&n^e&i^n&i;return a<0&&(a+=4294967296),a}function S(e,t,n,r,i,a){var o=t&r^t&a^r&a;return o<0&&(o+=4294967296),o}function C(e,t){var n=a(e,t,28),r=a(t,e,2),i=a(t,e,7),o=n^r^i;return o<0&&(o+=4294967296),o}function w(e,t){var n=o(e,t,28),r=o(t,e,2),i=o(t,e,7),a=n^r^i;return a<0&&(a+=4294967296),a}function T(e,t){var n=a(e,t,14),r=a(e,t,18),i=a(t,e,9),o=n^r^i;return o<0&&(o+=4294967296),o}function E(e,t){var n=o(e,t,14),r=o(e,t,18),i=o(t,e,9),a=n^r^i;return a<0&&(a+=4294967296),a}function D(e,t){var n=a(e,t,1),r=a(e,t,8),i=s(e,t,7),o=n^r^i;return o<0&&(o+=4294967296),o}function O(e,t){var n=o(e,t,1),r=o(e,t,8),i=c(e,t,7),a=n^r^i;return a<0&&(a+=4294967296),a}function k(e,t){var n=a(e,t,19),r=a(t,e,29),i=s(e,t,6),o=n^r^i;return o<0&&(o+=4294967296),o}function A(e,t){var n=o(e,t,19),r=o(t,e,29),i=c(e,t,6),a=n^r^i;return a<0&&(a+=4294967296),a}})),vr=D(((e,t)=>{var n=dr(),r=_r();function i(){if(!(this instanceof i))return new i;r.call(this),this.h=[3418070365,3238371032,1654270250,914150663,2438529370,812702999,355462360,4144912697,1731405415,4290775857,2394180231,1750603025,3675008525,1694076839,1203062813,3204075428]}n.inherits(i,r),t.exports=i,i.blockSize=1024,i.outSize=384,i.hmacStrength=192,i.padLength=128,i.prototype._digest=function(e){return e===`hex`?n.toHex32(this.h.slice(0,12),`big`):n.split32(this.h.slice(0,12),`big`)}})),yr=D((e=>{e.sha1=mr(),e.sha224=gr(),e.sha256=hr(),e.sha384=vr(),e.sha512=_r()})),br=D((e=>{var t=dr(),n=fr(),r=t.rotl32,i=t.sum32,a=t.sum32_3,o=t.sum32_4,s=n.BlockHash;function c(){if(!(this instanceof c))return new c;s.call(this),this.h=[1732584193,4023233417,2562383102,271733878,3285377520],this.endian=`little`}t.inherits(c,s),e.ripemd160=c,c.blockSize=512,c.outSize=160,c.hmacStrength=192,c.padLength=64,c.prototype._update=function(e,t){for(var n=this.h[0],s=this.h[1],c=this.h[2],g=this.h[3],_=this.h[4],v=n,y=s,b=c,x=g,S=_,C=0;C<80;C++){var w=i(r(o(n,l(C,s,c,g),e[f[C]+t],u(C)),m[C]),_);n=_,_=g,g=r(c,10),c=s,s=w,w=i(r(o(v,l(79-C,y,b,x),e[p[C]+t],d(C)),h[C]),S),v=S,S=x,x=r(b,10),b=y,y=w}w=a(this.h[1],c,x),this.h[1]=a(this.h[2],g,S),this.h[2]=a(this.h[3],_,v),this.h[3]=a(this.h[4],n,y),this.h[4]=a(this.h[0],s,b),this.h[0]=w},c.prototype._digest=function(e){return e===`hex`?t.toHex32(this.h,`little`):t.split32(this.h,`little`)};function l(e,t,n,r){return e<=15?t^n^r:e<=31?t&n|~t&r:e<=47?(t|~n)^r:e<=63?t&r|n&~r:t^(n|~r)}function u(e){return e<=15?0:e<=31?1518500249:e<=47?1859775393:e<=63?2400959708:2840853838}function d(e){return e<=15?1352829926:e<=31?1548603684:e<=47?1836072691:e<=63?2053994217:0}var f=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,7,4,13,1,10,6,15,3,12,0,9,5,2,14,11,8,3,10,14,4,9,15,8,1,2,7,0,6,13,11,5,12,1,9,11,10,0,8,12,4,13,3,7,15,14,5,6,2,4,0,5,9,7,12,2,10,14,1,3,8,11,6,15,13],p=[5,14,7,0,9,2,11,4,13,6,15,8,1,10,3,12,6,11,3,7,0,13,5,10,14,15,8,12,4,9,1,2,15,5,1,3,7,14,6,9,11,8,12,2,10,0,4,13,8,6,4,1,3,11,15,0,5,12,2,13,9,7,10,14,12,15,10,4,1,5,8,7,6,2,13,14,0,3,9,11],m=[11,14,15,12,5,8,7,9,11,13,14,15,6,7,9,8,7,6,8,13,11,9,7,15,7,12,15,9,11,7,13,12,11,13,6,7,14,9,13,15,14,8,13,6,5,12,7,5,11,12,14,15,14,15,9,8,9,14,5,6,8,6,5,12,9,15,5,11,6,8,13,12,5,12,13,14,11,8,5,6],h=[8,9,9,11,13,15,15,5,7,7,8,11,14,14,12,6,9,13,15,7,12,8,9,11,7,7,12,7,6,15,13,11,9,7,15,11,8,6,6,14,12,13,5,14,13,13,7,5,15,5,8,11,14,14,6,14,6,9,12,9,12,5,15,8,8,5,12,9,12,5,14,6,8,13,6,5,15,13,11,11]})),xr=D(((e,t)=>{var n=dr(),r=ur();function i(e,t,r){if(!(this instanceof i))return new i(e,t,r);this.Hash=e,this.blockSize=e.blockSize/8,this.outSize=e.outSize/8,this.inner=null,this.outer=null,this._init(n.toArray(t,r))}t.exports=i,i.prototype._init=function(e){e.length>this.blockSize&&(e=new this.Hash().update(e).digest()),r(e.length<=this.blockSize);for(var t=e.length;t<this.blockSize;t++)e.push(0);for(t=0;t<e.length;t++)e[t]^=54;for(this.inner=new this.Hash().update(e),t=0;t<e.length;t++)e[t]^=106;this.outer=new this.Hash().update(e)},i.prototype.update=function(e,t){return this.inner.update(e,t),this},i.prototype.digest=function(e){return this.outer.update(this.inner.digest()),this.outer.digest(e)}}));D((e=>{var t=e;t.utils=dr(),t.common=fr(),t.sha=yr(),t.ripemd=br(),t.hmac=xr(),t.sha1=t.sha.sha1,t.sha256=t.sha.sha256,t.sha224=t.sha.sha224,t.sha384=t.sha.sha384,t.sha512=t.sha.sha512,t.ripemd160=t.ripemd.ripemd160}))();var Sr=`useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict`,Cr=(e,t=21)=>(n=t)=>{let r=``,i=n|0;for(;i--;)r+=e[Math.random()*e.length|0];return r},wr=(e=21)=>{let t=``,n=e|0;for(;n--;)t+=Sr[Math.random()*64|0];return t},Tr=e=>Math.floor(e*72*20),Er=(e=0)=>{let t=e;return()=>++t},Dr=()=>Er(),Or=()=>Er(1),kr=()=>Er(),Ar=()=>wr().toLowerCase(),jr=e=>Cr(`1234567890abcdef`,e)(),Mr=()=>`${jr(8)}-${jr(4)}-${jr(4)}-${jr(4)}-${jr(12)}`,Nr=e=>new Uint8Array(new TextEncoder().encode(e)),Pr=class extends V{constructor(...e){super(...e),P(this,`xmlKeys`,{xmlns:`xmlns`})}},Fr={EXTERNAL:`External`},Ir=(e,t,n,r)=>new K({name:`Relationship`,attributes:{id:{key:`Id`,value:e},type:{key:`Type`,value:t},target:{key:`Target`,value:n},targetMode:{key:`TargetMode`,value:r}}}),Lr=class extends L{constructor(){super(`Relationships`),this.root.push(new Pr({xmlns:`http://schemas.openxmlformats.org/package/2006/relationships`}))}addRelationship(e,t,n,r){this.root.push(Ir(`rId${e}`,t,n,r))}get RelationshipCount(){return this.root.length-1}},Rr=class extends V{constructor(...e){super(...e),P(this,`xmlKeys`,{id:`w:id`,initials:`w:initials`,author:`w:author`,date:`w:date`})}},zr=class extends V{constructor(...e){super(...e),P(this,`xmlKeys`,{"xmlns:cx":`xmlns:cx`,"xmlns:cx1":`xmlns:cx1`,"xmlns:cx2":`xmlns:cx2`,"xmlns:cx3":`xmlns:cx3`,"xmlns:cx4":`xmlns:cx4`,"xmlns:cx5":`xmlns:cx5`,"xmlns:cx6":`xmlns:cx6`,"xmlns:cx7":`xmlns:cx7`,"xmlns:cx8":`xmlns:cx8`,"xmlns:mc":`xmlns:mc`,"xmlns:aink":`xmlns:aink`,"xmlns:am3d":`xmlns:am3d`,"xmlns:o":`xmlns:o`,"xmlns:r":`xmlns:r`,"xmlns:m":`xmlns:m`,"xmlns:v":`xmlns:v`,"xmlns:wp14":`xmlns:wp14`,"xmlns:wp":`xmlns:wp`,"xmlns:w10":`xmlns:w10`,"xmlns:w":`xmlns:w`,"xmlns:w14":`xmlns:w14`,"xmlns:w15":`xmlns:w15`,"xmlns:w16cex":`xmlns:w16cex`,"xmlns:w16cid":`xmlns:w16cid`,"xmlns:w16":`xmlns:w16`,"xmlns:w16sdtdh":`xmlns:w16sdtdh`,"xmlns:w16se":`xmlns:w16se`,"xmlns:wpg":`xmlns:wpg`,"xmlns:wpi":`xmlns:wpi`,"xmlns:wne":`xmlns:wne`,"xmlns:wps":`xmlns:wps`})}},Br=class extends L{constructor({id:e,initials:t,author:n,date:r=new Date,children:i},a){super(`w:comment`),P(this,`paraId`,void 0),this.paraId=a,this.root.push(new Rr({id:e,initials:t,author:n,date:r.toISOString()}));for(let e of i)this.root.push(e)}prepForXml(e){let t=super.prepForXml(e);if(!t||!this.paraId)return t;let n=t[`w:comment`];if(!Array.isArray(n))return t;for(let e=n.length-1;e>=0;e--){let t=n[e];if(t&&typeof t==`object`&&`w:p`in t){let e=t[`w:p`];Array.isArray(e)&&e.unshift({_attr:{"w14:paraId":this.paraId,"w14:textId":this.paraId}});break}}return t}},Vr=e=>(e+1).toString(16).toUpperCase().padStart(8,`0`),Hr=class extends L{constructor({children:e}){if(super(`w:comments`),P(this,`relationships`,void 0),P(this,`threadData`,void 0),this.root.push(new zr({"xmlns:cx":`http://schemas.microsoft.com/office/drawing/2014/chartex`,"xmlns:cx1":`http://schemas.microsoft.com/office/drawing/2015/9/8/chartex`,"xmlns:cx2":`http://schemas.microsoft.com/office/drawing/2015/10/21/chartex`,"xmlns:cx3":`http://schemas.microsoft.com/office/drawing/2016/5/9/chartex`,"xmlns:cx4":`http://schemas.microsoft.com/office/drawing/2016/5/10/chartex`,"xmlns:cx5":`http://schemas.microsoft.com/office/drawing/2016/5/11/chartex`,"xmlns:cx6":`http://schemas.microsoft.com/office/drawing/2016/5/12/chartex`,"xmlns:cx7":`http://schemas.microsoft.com/office/drawing/2016/5/13/chartex`,"xmlns:cx8":`http://schemas.microsoft.com/office/drawing/2016/5/14/chartex`,"xmlns:mc":`http://schemas.openxmlformats.org/markup-compatibility/2006`,"xmlns:aink":`http://schemas.microsoft.com/office/drawing/2016/ink`,"xmlns:am3d":`http://schemas.microsoft.com/office/drawing/2017/model3d`,"xmlns:o":`urn:schemas-microsoft-com:office:office`,"xmlns:r":`http://schemas.openxmlformats.org/officeDocument/2006/relationships`,"xmlns:m":`http://schemas.openxmlformats.org/officeDocument/2006/math`,"xmlns:v":`urn:schemas-microsoft-com:vml`,"xmlns:wp14":`http://schemas.microsoft.com/office/word/2010/wordprocessingDrawing`,"xmlns:wp":`http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing`,"xmlns:w10":`urn:schemas-microsoft-com:office:word`,"xmlns:w":`http://schemas.openxmlformats.org/wordprocessingml/2006/main`,"xmlns:w14":`http://schemas.microsoft.com/office/word/2010/wordml`,"xmlns:w15":`http://schemas.microsoft.com/office/word/2012/wordml`,"xmlns:w16cex":`http://schemas.microsoft.com/office/word/2018/wordml/cex`,"xmlns:w16cid":`http://schemas.microsoft.com/office/word/2016/wordml/cid`,"xmlns:w16":`http://schemas.microsoft.com/office/word/2018/wordml`,"xmlns:w16sdtdh":`http://schemas.microsoft.com/office/word/2020/wordml/sdtdatahash`,"xmlns:w16se":`http://schemas.microsoft.com/office/word/2015/wordml/symex`,"xmlns:wpg":`http://schemas.microsoft.com/office/word/2010/wordprocessingGroup`,"xmlns:wpi":`http://schemas.microsoft.com/office/word/2010/wordprocessingInk`,"xmlns:wne":`http://schemas.microsoft.com/office/word/2006/wordml`,"xmlns:wps":`http://schemas.microsoft.com/office/word/2010/wordprocessingShape`})),e.some(e=>e.parentId!==void 0)){let t=new Map(e.map(e=>[e.id,Vr(e.id)]));for(let n of e)this.root.push(new Br(n,t.get(n.id)));this.threadData=e.map(e=>({paraId:t.get(e.id),parentParaId:e.parentId===void 0?void 0:t.get(e.parentId),done:e.resolved}))}else for(let t of e)this.root.push(new Br(t));this.relationships=new Lr}get Relationships(){return this.relationships}get ThreadData(){return this.threadData}},Ur=class extends V{constructor(...e){super(...e),P(this,`xmlKeys`,{"xmlns:wpc":`xmlns:wpc`,"xmlns:mc":`xmlns:mc`,"xmlns:w15":`xmlns:w15`,"mc:Ignorable":`mc:Ignorable`})}},Wr=class extends V{constructor(...e){super(...e),P(this,`xmlKeys`,{paraId:`w15:paraId`,paraIdParent:`w15:paraIdParent`,done:`w15:done`})}},Gr=class extends L{constructor(e){super(`w15:commentEx`),this.root.push(new Wr({paraId:e.paraId,paraIdParent:e.parentParaId,done:e.done===void 0?void 0:e.done?`1`:`0`}))}},Kr=class extends L{constructor(e){super(`w15:commentsEx`),this.root.push(new Ur({"xmlns:wpc":`http://schemas.microsoft.com/office/word/2010/wordprocessingCanvas`,"xmlns:mc":`http://schemas.openxmlformats.org/markup-compatibility/2006`,"xmlns:w15":`http://schemas.microsoft.com/office/word/2012/wordml`,"mc:Ignorable":`w15`}));for(let t of e)this.root.push(new Gr(t))}},qr=class extends gn{constructor(){super(`w:endnoteRef`)}},Jr=class extends L{constructor(){super(`w:pageBreakBefore`)}},Yr={AT_LEAST:`atLeast`,EXACTLY:`exactly`,EXACT:`exact`,AUTO:`auto`},Xr=({after:e,before:t,line:n,lineRule:r,beforeAutoSpacing:i,afterAutoSpacing:a})=>new K({name:`w:spacing`,attributes:{after:{key:`w:after`,value:e},before:{key:`w:before`,value:t},line:{key:`w:line`,value:n},lineRule:{key:`w:lineRule`,value:r},beforeAutoSpacing:{key:`w:beforeAutospacing`,value:i},afterAutoSpacing:{key:`w:afterAutospacing`,value:a}}}),Zr=e=>new K({name:`w:pStyle`,attributes:{val:{key:`w:val`,value:e}}}),Qr={LEFT:`left`,RIGHT:`right`,CENTER:`center`,BAR:`bar`,CLEAR:`clear`,DECIMAL:`decimal`,END:`end`,NUM:`num`,START:`start`},$r=({type:e,position:t,leader:n})=>new K({name:`w:tab`,attributes:{val:{key:`w:val`,value:e},pos:{key:`w:pos`,value:t},leader:{key:`w:leader`,value:n}}}),ei=e=>new K({name:`w:tabs`,children:e.map(e=>$r(e))}),ti=class extends L{constructor(e,t){super(`w:numPr`),this.root.push(new ni(t)),this.root.push(new ri(e))}},ni=class extends L{constructor(e){if(super(`w:ilvl`),e>9)throw Error(`Level cannot be greater than 9. Read more here: https://answers.microsoft.com/en-us/msoffice/forum/all/does-word-support-more-than-9-list-levels/d130fdcd-1781-446d-8c84-c6c79124e4d7`);this.root.push(new U({val:e}))}},ri=class extends L{constructor(e){super(`w:numId`),this.root.push(new U({val:typeof e==`string`?`{${e}}`:e}))}},ii=class extends L{constructor(...e){super(...e),P(this,`fileChild`,Symbol())}},ai=class extends V{constructor(...e){super(...e),P(this,`xmlKeys`,{id:`r:id`,history:`w:history`,anchor:`w:anchor`})}},oi=class extends L{constructor(e,t,n){super(`w:hyperlink`),P(this,`linkId`,void 0),this.linkId=t;let r=new ai({history:1,anchor:n||void 0,id:n?void 0:`rId${this.linkId}`});this.root.push(r),e.forEach(e=>{this.root.push(e)})}},si=class extends L{constructor(e){super(`w:externalHyperlink`),P(this,`options`,void 0),this.options=e}},ci=class extends V{constructor(...e){super(...e),P(this,`xmlKeys`,{id:`w:id`,name:`w:name`})}},li=class extends V{constructor(...e){super(...e),P(this,`xmlKeys`,{id:`w:id`})}},ui=class{constructor(e){P(this,`bookmarkUniqueNumericId`,kr()),P(this,`start`,void 0),P(this,`children`,void 0),P(this,`end`,void 0);let t=this.bookmarkUniqueNumericId();this.start=new di(e.id,t),this.children=e.children,this.end=new fi(t)}},di=class extends L{constructor(e,t){super(`w:bookmarkStart`);let n=new ci({name:e,id:t});this.root.push(n)}},fi=class extends L{constructor(e){super(`w:bookmarkEnd`);let t=new li({id:e});this.root.push(t)}},pi=e=>new K({name:`w:outlineLvl`,attributes:{val:{key:`w:val`,value:e}}}),mi=({id:e,fontKey:t,subsetted:n},r)=>new K({name:r,attributes:B({id:{key:`r:id`,value:e}},t?{fontKey:{key:`w:fontKey`,value:`{${t}}`}}:{}),children:[...n?[new G(`w:subsetted`,n)]:[]]}),hi=({name:e,altName:t,panose1:n,charset:r,family:i,notTrueType:a,pitch:o,sig:s,embedRegular:c,embedBold:l,embedItalic:u,embedBoldItalic:d})=>new K({name:`w:font`,attributes:{name:{key:`w:name`,value:e}},children:[...t?[vn(`w:altName`,t)]:[],...n?[vn(`w:panose1`,n)]:[],...r?[vn(`w:charset`,r)]:[],...i?[vn(`w:family`,i)]:[],...a?[new G(`w:notTrueType`,a)]:[],...o?[vn(`w:pitch`,o)]:[],...s?[new K({name:`w:sig`,attributes:{usb0:{key:`w:usb0`,value:s.usb0},usb1:{key:`w:usb1`,value:s.usb1},usb2:{key:`w:usb2`,value:s.usb2},usb3:{key:`w:usb3`,value:s.usb3},csb0:{key:`w:csb0`,value:s.csb0},csb1:{key:`w:csb1`,value:s.csb1}}})]:[],...c?[mi(c,`w:embedRegular`)]:[],...l?[mi(l,`w:embedBold`)]:[],...u?[mi(u,`w:embedItalic`)]:[],...d?[mi(d,`w:embedBoldItalic`)]:[]]}),gi=({name:e,index:t,fontKey:n,characterSet:r})=>hi({name:e,sig:{usb0:`E0002AFF`,usb1:`C000247B`,usb2:`00000009`,usb3:`00000000`,csb0:`000001FF`,csb1:`00000000`},charset:r,family:`auto`,pitch:`variable`,embedRegular:{fontKey:n,id:`rId${t}`}}),_i=e=>new K({name:`w:fonts`,attributes:{mc:{key:`xmlns:mc`,value:`http://schemas.openxmlformats.org/markup-compatibility/2006`},r:{key:`xmlns:r`,value:`http://schemas.openxmlformats.org/officeDocument/2006/relationships`},w:{key:`xmlns:w`,value:`http://schemas.openxmlformats.org/wordprocessingml/2006/main`},w14:{key:`xmlns:w14`,value:`http://schemas.microsoft.com/office/word/2010/wordml`},w15:{key:`xmlns:w15`,value:`http://schemas.microsoft.com/office/word/2012/wordml`},w16cex:{key:`xmlns:w16cex`,value:`http://schemas.microsoft.com/office/word/2018/wordml/cex`},w16cid:{key:`xmlns:w16cid`,value:`http://schemas.microsoft.com/office/word/2016/wordml/cid`},w16:{key:`xmlns:w16`,value:`http://schemas.microsoft.com/office/word/2018/wordml`},w16sdtdh:{key:`xmlns:w16sdtdh`,value:`http://schemas.microsoft.com/office/word/2020/wordml/sdtdatahash`},w16se:{key:`xmlns:w16se`,value:`http://schemas.microsoft.com/office/word/2015/wordml/symex`},Ignorable:{key:`mc:Ignorable`,value:`w14 w15 w16se w16cid w16 w16cex w16sdtdh`}},children:e.map((e,t)=>gi({name:e.name,index:t+1,fontKey:e.fontKey,characterSet:e.characterSet}))}),vi=class{constructor(e){P(this,`options`,void 0),P(this,`fontTable`,void 0),P(this,`relationships`,void 0),P(this,`fontOptionsWithKey`,[]),this.options=e,this.fontOptionsWithKey=e.map(e=>B(B({},e),{},{fontKey:Mr()})),this.fontTable=_i(this.fontOptionsWithKey),this.relationships=new Lr;for(let t=0;t<e.length;t++)this.relationships.addRelationship(t+1,`http://schemas.openxmlformats.org/officeDocument/2006/relationships/font`,`fonts/font${t+1}.odttf`)}get View(){return this.fontTable}get Relationships(){return this.relationships}},yi=()=>new K({name:`w:wordWrap`,attributes:{val:{key:`w:val`,value:0}}}),bi=e=>new K({name:`w:framePr`,attributes:{anchorLock:{key:`w:anchorLock`,value:e.anchorLock},dropCap:{key:`w:dropCap`,value:e.dropCap},width:{key:`w:w`,value:e.width},height:{key:`w:h`,value:e.height},x:{key:`w:x`,value:e.position?e.position.x:void 0},y:{key:`w:y`,value:e.position?e.position.y:void 0},anchorHorizontal:{key:`w:hAnchor`,value:e.anchor.horizontal},anchorVertical:{key:`w:vAnchor`,value:e.anchor.vertical},spaceHorizontal:{key:`w:hSpace`,value:e.space?.horizontal},spaceVertical:{key:`w:vSpace`,value:e.space?.vertical},rule:{key:`w:hRule`,value:e.rule},alignmentX:{key:`w:xAlign`,value:e.alignment?e.alignment.x:void 0},alignmentY:{key:`w:yAlign`,value:e.alignment?e.alignment.y:void 0},lines:{key:`w:lines`,value:e.lines},wrap:{key:`w:wrap`,value:e.wrap}}}),xi=class extends R{constructor(e){if(super(`w:pPr`,e?.includeIfEmpty),P(this,`numberingReferences`,[]),!e)return this;e.heading&&this.push(Zr(e.heading)),e.bullet&&this.push(Zr(`ListParagraph`)),e.numbering&&!e.style&&!e.heading&&(e.numbering.custom||this.push(Zr(`ListParagraph`))),e.style&&this.push(Zr(e.style)),e.keepNext!==void 0&&this.push(new G(`w:keepNext`,e.keepNext)),e.keepLines!==void 0&&this.push(new G(`w:keepLines`,e.keepLines)),e.pageBreakBefore&&this.push(new Jr),e.frame&&this.push(bi(e.frame)),e.widowControl!==void 0&&this.push(new G(`w:widowControl`,e.widowControl)),e.bullet&&this.push(new ti(1,e.bullet.level)),e.numbering?(this.numberingReferences.push({reference:e.numbering.reference,instance:e.numbering.instance??0}),this.push(new ti(`${e.numbering.reference}-${e.numbering.instance??0}`,e.numbering.level))):e.numbering===!1&&this.push(new ti(0,0)),e.border&&this.push(new Tn(e.border)),e.thematicBreak&&this.push(new En),e.shading&&this.push(Bn(e.shading)),e.wordWrap&&this.push(yi()),e.overflowPunctuation&&this.push(new G(`w:overflowPunct`,e.overflowPunctuation));let t=[...e.rightTabStop===void 0?[]:[{type:Qr.RIGHT,position:e.rightTabStop}],...e.tabStops?e.tabStops:[],...e.leftTabStop===void 0?[]:[{type:Qr.LEFT,position:e.leftTabStop}]];t.length>0&&this.push(ei(t)),e.bidirectional!==void 0&&this.push(new G(`w:bidi`,e.bidirectional)),e.spacing&&this.push(Xr(e.spacing)),e.indent&&this.push(Dn(e.indent)),e.contextualSpacing!==void 0&&this.push(new G(`w:contextualSpacing`,e.contextualSpacing)),e.alignment&&this.push(Sn(e.alignment)),e.outlineLevel!==void 0&&this.push(pi(e.outlineLevel)),e.suppressLineNumbers!==void 0&&this.push(new G(`w:suppressLineNumbers`,e.suppressLineNumbers)),e.autoSpaceEastAsianText!==void 0&&this.push(new G(`w:autoSpaceDN`,e.autoSpaceEastAsianText)),e.run&&this.push(new ir(e.run)),e.revision&&this.push(new Si(e.revision))}push(e){this.root.push(e)}prepForXml(e){if(!(e.viewWrapper instanceof vi))for(let t of this.numberingReferences)e.file.Numbering.createConcreteNumberingInstance(t.reference,t.instance);return super.prepForXml(e)}},Si=class extends L{constructor(e){super(`w:pPrChange`),this.root.push(new Vn({id:e.id,author:e.author,date:e.date})),this.root.push(new xi(B(B({},e),{},{includeIfEmpty:!0})))}},Ci=class extends ii{constructor(e){if(super(`w:p`),P(this,`properties`,void 0),typeof e==`string`)return this.properties=new xi({}),this.root.push(this.properties),this.root.push(new lr(e)),this;if(this.properties=new xi(e),this.root.push(this.properties),e.text&&this.root.push(new lr(e.text)),e.children)for(let t of e.children){if(t instanceof ui){this.root.push(t.start);for(let e of t.children)this.root.push(e);this.root.push(t.end);continue}this.root.push(t)}}prepForXml(e){for(let t of this.root)if(t instanceof si){let n=this.root.indexOf(t),r=new oi(t.options.children,Ar());e.viewWrapper.Relationships.addRelationship(r.linkId,`http://schemas.openxmlformats.org/officeDocument/2006/relationships/hyperlink`,t.options.link,Fr.EXTERNAL),this.root[n]=r}return super.prepForXml(e)}addRunToFront(e){return this.root.splice(1,0,e),this}};B(B({},{TOP:`top`,CENTER:`center`,BOTTOM:`bottom`}),{},{BOTH:`both`});var wi=e=>new K({name:`w:vAlign`,attributes:{verticalAlign:{key:`w:val`,value:e}}}),Ti={style:wn.NONE,size:0,color:`auto`},q={style:wn.SINGLE,size:4,color:`auto`};P(class extends L{constructor(e){super(`w:tblBorders`),this.root.push(Cn(`w:top`,e.top??q)),this.root.push(Cn(`w:left`,e.left??q)),this.root.push(Cn(`w:bottom`,e.bottom??q)),this.root.push(Cn(`w:right`,e.right??q)),this.root.push(Cn(`w:insideH`,e.insideHorizontal??q)),this.root.push(Cn(`w:insideV`,e.insideVertical??q))}},`NONE`,{top:Ti,bottom:Ti,left:Ti,right:Ti,insideHorizontal:Ti,insideVertical:Ti});var J=class extends V{constructor(...e){super(...e),P(this,`xmlKeys`,{xmlns:`xmlns`,vt:`xmlns:vt`})}},Ei=class extends L{constructor(){super(`Properties`),this.root.push(new J({xmlns:`http://schemas.openxmlformats.org/officeDocument/2006/extended-properties`,vt:`http://schemas.openxmlformats.org/officeDocument/2006/docPropsVTypes`}))}},Di=class extends V{constructor(...e){super(...e),P(this,`xmlKeys`,{xmlns:`xmlns`})}},Oi=(e,t)=>new K({name:`Default`,attributes:{contentType:{key:`ContentType`,value:e},extension:{key:`Extension`,value:t}}}),ki=(e,t)=>new K({name:`Override`,attributes:{contentType:{key:`ContentType`,value:e},partName:{key:`PartName`,value:t}}}),Ai=class extends L{constructor(){super(`Types`),this.root.push(new Di({xmlns:`http://schemas.openxmlformats.org/package/2006/content-types`})),this.root.push(Oi(`image/png`,`png`)),this.root.push(Oi(`image/jpeg`,`jpeg`)),this.root.push(Oi(`image/jpeg`,`jpg`)),this.root.push(Oi(`image/bmp`,`bmp`)),this.root.push(Oi(`image/gif`,`gif`)),this.root.push(Oi(`image/svg+xml`,`svg`)),this.root.push(Oi(`application/vnd.openxmlformats-package.relationships+xml`,`rels`)),this.root.push(Oi(`application/xml`,`xml`)),this.root.push(Oi(`application/vnd.openxmlformats-officedocument.obfuscatedFont`,`odttf`)),this.root.push(ki(`application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml`,`/word/document.xml`)),this.root.push(ki(`application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml`,`/word/styles.xml`)),this.root.push(ki(`application/vnd.openxmlformats-package.core-properties+xml`,`/docProps/core.xml`)),this.root.push(ki(`application/vnd.openxmlformats-officedocument.custom-properties+xml`,`/docProps/custom.xml`)),this.root.push(ki(`application/vnd.openxmlformats-officedocument.extended-properties+xml`,`/docProps/app.xml`)),this.root.push(ki(`application/vnd.openxmlformats-officedocument.wordprocessingml.numbering+xml`,`/word/numbering.xml`)),this.root.push(ki(`application/vnd.openxmlformats-officedocument.wordprocessingml.footnotes+xml`,`/word/footnotes.xml`)),this.root.push(ki(`application/vnd.openxmlformats-officedocument.wordprocessingml.endnotes+xml`,`/word/endnotes.xml`)),this.root.push(ki(`application/vnd.openxmlformats-officedocument.wordprocessingml.settings+xml`,`/word/settings.xml`)),this.root.push(ki(`application/vnd.openxmlformats-officedocument.wordprocessingml.comments+xml`,`/word/comments.xml`)),this.root.push(ki(`application/vnd.openxmlformats-officedocument.wordprocessingml.fontTable+xml`,`/word/fontTable.xml`))}addCommentsExtended(){this.root.push(ki(`application/vnd.openxmlformats-officedocument.wordprocessingml.commentsExtended+xml`,`/word/commentsExtended.xml`))}addFooter(e){this.root.push(ki(`application/vnd.openxmlformats-officedocument.wordprocessingml.footer+xml`,`/word/footer${e}.xml`))}addHeader(e){this.root.push(ki(`application/vnd.openxmlformats-officedocument.wordprocessingml.header+xml`,`/word/header${e}.xml`))}},ji={wpc:`http://schemas.microsoft.com/office/word/2010/wordprocessingCanvas`,mc:`http://schemas.openxmlformats.org/markup-compatibility/2006`,o:`urn:schemas-microsoft-com:office:office`,r:`http://schemas.openxmlformats.org/officeDocument/2006/relationships`,m:`http://schemas.openxmlformats.org/officeDocument/2006/math`,v:`urn:schemas-microsoft-com:vml`,wp14:`http://schemas.microsoft.com/office/word/2010/wordprocessingDrawing`,wp:`http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing`,w10:`urn:schemas-microsoft-com:office:word`,w:`http://schemas.openxmlformats.org/wordprocessingml/2006/main`,w14:`http://schemas.microsoft.com/office/word/2010/wordml`,w15:`http://schemas.microsoft.com/office/word/2012/wordml`,wpg:`http://schemas.microsoft.com/office/word/2010/wordprocessingGroup`,wpi:`http://schemas.microsoft.com/office/word/2010/wordprocessingInk`,wne:`http://schemas.microsoft.com/office/word/2006/wordml`,wps:`http://schemas.microsoft.com/office/word/2010/wordprocessingShape`,cp:`http://schemas.openxmlformats.org/package/2006/metadata/core-properties`,dc:`http://purl.org/dc/elements/1.1/`,dcterms:`http://purl.org/dc/terms/`,dcmitype:`http://purl.org/dc/dcmitype/`,xsi:`http://www.w3.org/2001/XMLSchema-instance`,cx:`http://schemas.microsoft.com/office/drawing/2014/chartex`,cx1:`http://schemas.microsoft.com/office/drawing/2015/9/8/chartex`,cx2:`http://schemas.microsoft.com/office/drawing/2015/10/21/chartex`,cx3:`http://schemas.microsoft.com/office/drawing/2016/5/9/chartex`,cx4:`http://schemas.microsoft.com/office/drawing/2016/5/10/chartex`,cx5:`http://schemas.microsoft.com/office/drawing/2016/5/11/chartex`,cx6:`http://schemas.microsoft.com/office/drawing/2016/5/12/chartex`,cx7:`http://schemas.microsoft.com/office/drawing/2016/5/13/chartex`,cx8:`http://schemas.microsoft.com/office/drawing/2016/5/14/chartex`,aink:`http://schemas.microsoft.com/office/drawing/2016/ink`,am3d:`http://schemas.microsoft.com/office/drawing/2017/model3d`,w16cex:`http://schemas.microsoft.com/office/word/2018/wordml/cex`,w16cid:`http://schemas.microsoft.com/office/word/2016/wordml/cid`,w16:`http://schemas.microsoft.com/office/word/2018/wordml`,w16sdtdh:`http://schemas.microsoft.com/office/word/2020/wordml/sdtdatahash`,w16se:`http://schemas.microsoft.com/office/word/2015/wordml/symex`},Mi=class extends V{constructor(e,t){super(B({Ignorable:t},Object.fromEntries(e.map(e=>[e,ji[e]])))),P(this,`xmlKeys`,B({Ignorable:`mc:Ignorable`},Object.fromEntries(Object.keys(ji).map(e=>[e,`xmlns:${e}`]))))}},Ni=class extends L{constructor(e){super(`cp:coreProperties`),this.root.push(new Mi([`cp`,`dc`,`dcterms`,`dcmitype`,`xsi`])),e.title&&this.root.push(new bn(`dc:title`,e.title)),e.subject&&this.root.push(new bn(`dc:subject`,e.subject)),e.creator&&this.root.push(new bn(`dc:creator`,e.creator)),e.keywords&&this.root.push(new bn(`cp:keywords`,e.keywords)),e.description&&this.root.push(new bn(`dc:description`,e.description)),e.lastModifiedBy&&this.root.push(new bn(`cp:lastModifiedBy`,e.lastModifiedBy)),e.revision&&this.root.push(new bn(`cp:revision`,String(e.revision))),this.root.push(new Fi(`dcterms:created`)),this.root.push(new Fi(`dcterms:modified`))}},Pi=class extends V{constructor(...e){super(...e),P(this,`xmlKeys`,{type:`xsi:type`})}},Fi=class extends L{constructor(e){super(e),this.root.push(new Pi({type:`dcterms:W3CDTF`})),this.root.push(mn(new Date))}},Ii=class extends V{constructor(...e){super(...e),P(this,`xmlKeys`,{xmlns:`xmlns`,vt:`xmlns:vt`})}},Li=class extends V{constructor(...e){super(...e),P(this,`xmlKeys`,{formatId:`fmtid`,pid:`pid`,name:`name`})}},Ri=class extends L{constructor(e,t){super(`property`),this.root.push(new Li({formatId:`{D5CDD505-2E9C-101B-9397-08002B2CF9AE}`,pid:e.toString(),name:t.name})),this.root.push(new zi(t.value))}},zi=class extends L{constructor(e){super(`vt:lpwstr`),this.root.push(e)}},Bi=class extends L{constructor(e){super(`Properties`),P(this,`nextId`,void 0),P(this,`properties`,[]),this.root.push(new Ii({xmlns:`http://schemas.openxmlformats.org/officeDocument/2006/custom-properties`,vt:`http://schemas.openxmlformats.org/officeDocument/2006/docPropsVTypes`})),this.nextId=2;for(let t of e)this.addCustomProperty(t)}prepForXml(e){return this.properties.forEach(e=>this.root.push(e)),super.prepForXml(e)}addCustomProperty(e){this.properties.push(new Ri(this.nextId++,e))}},Vi=({space:e,count:t,separate:n,equalWidth:r,children:i})=>new K({name:`w:cols`,attributes:{space:{key:`w:space`,value:e===void 0?void 0:dn(e)},count:{key:`w:num`,value:t===void 0?void 0:tn(t)},separate:{key:`w:sep`,value:n},equalWidth:{key:`w:equalWidth`,value:r}},children:!r&&i?i:void 0}),Hi=({type:e,linePitch:t,charSpace:n})=>new K({name:`w:docGrid`,attributes:{type:{key:`w:type`,value:e},linePitch:{key:`w:linePitch`,value:tn(t)},charSpace:{key:`w:charSpace`,value:n?tn(n):void 0}}}),Ui={DEFAULT:`default`,FIRST:`first`,EVEN:`even`},Wi={HEADER:`w:headerReference`,FOOTER:`w:footerReference`},Gi=(e,t)=>new K({name:e,attributes:{type:{key:`w:type`,value:t.type||Ui.DEFAULT},id:{key:`r:id`,value:`rId${t.id}`}}}),Ki=({countBy:e,start:t,restart:n,distance:r})=>new K({name:`w:lnNumType`,attributes:{countBy:{key:`w:countBy`,value:e===void 0?void 0:tn(e)},start:{key:`w:start`,value:t===void 0?void 0:tn(t)},restart:{key:`w:restart`,value:n},distance:{key:`w:distance`,value:r===void 0?void 0:dn(r)}}}),qi=class extends V{constructor(...e){super(...e),P(this,`xmlKeys`,{display:`w:display`,offsetFrom:`w:offsetFrom`,zOrder:`w:zOrder`})}},Ji=class extends R{constructor(e){if(super(`w:pgBorders`),!e)return this;e.pageBorders?this.root.push(new qi({display:e.pageBorders.display,offsetFrom:e.pageBorders.offsetFrom,zOrder:e.pageBorders.zOrder})):this.root.push(new qi({})),e.pageBorderTop&&this.root.push(Cn(`w:top`,e.pageBorderTop)),e.pageBorderLeft&&this.root.push(Cn(`w:left`,e.pageBorderLeft)),e.pageBorderBottom&&this.root.push(Cn(`w:bottom`,e.pageBorderBottom)),e.pageBorderRight&&this.root.push(Cn(`w:right`,e.pageBorderRight))}},Yi=(e,t,n,r,i,a,o)=>new K({name:`w:pgMar`,attributes:{top:{key:`w:top`,value:ln(e)},right:{key:`w:right`,value:dn(t)},bottom:{key:`w:bottom`,value:ln(n)},left:{key:`w:left`,value:dn(r)},header:{key:`w:header`,value:dn(i)},footer:{key:`w:footer`,value:dn(a)},gutter:{key:`w:gutter`,value:dn(o)}}}),Xi=({start:e,formatType:t,separator:n})=>new K({name:`w:pgNumType`,attributes:{start:{key:`w:start`,value:e===void 0?void 0:tn(e)},formatType:{key:`w:fmt`,value:t},separator:{key:`w:chapSep`,value:n}}}),Zi={PORTRAIT:`portrait`,LANDSCAPE:`landscape`},Qi=({width:e,height:t,orientation:n,code:r})=>{let i=dn(e),a=dn(t);return new K({name:`w:pgSz`,attributes:{width:{key:`w:w`,value:n===Zi.LANDSCAPE?a:i},height:{key:`w:h`,value:n===Zi.LANDSCAPE?i:a},orientation:{key:`w:orient`,value:n},code:{key:`w:code`,value:r}}})},$i=class extends V{constructor(...e){super(...e),P(this,`xmlKeys`,{val:`w:val`})}},ea=class extends L{constructor(e){super(`w:textDirection`),this.root.push(new $i({val:e}))}},ta=e=>new K({name:`w:type`,attributes:{val:{key:`w:val`,value:e}}}),na={TOP:1440,RIGHT:1440,BOTTOM:1440,LEFT:1440,HEADER:708,FOOTER:708,GUTTER:0},ra={WIDTH:11906,HEIGHT:16838,ORIENTATION:Zi.PORTRAIT},ia=class extends L{constructor({page:{size:{width:e=ra.WIDTH,height:t=ra.HEIGHT,orientation:n=ra.ORIENTATION,code:r}={},margin:{top:i=na.TOP,right:a=na.RIGHT,bottom:o=na.BOTTOM,left:s=na.LEFT,header:c=na.HEADER,footer:l=na.FOOTER,gutter:u=na.GUTTER}={},pageNumbers:d={},borders:f,textDirection:p}={},grid:{linePitch:m=360,charSpace:h,type:g}={},headerWrapperGroup:_={},footerWrapperGroup:v={},lineNumbers:y,titlePage:b,verticalAlign:x,column:S,type:C,revision:w}={}){super(`w:sectPr`),this.addHeaderFooterGroup(Wi.HEADER,_),this.addHeaderFooterGroup(Wi.FOOTER,v),C&&this.root.push(ta(C)),this.root.push(Qi({width:e,height:t,orientation:n,code:r})),this.root.push(Yi(i,a,o,s,c,l,u)),f&&this.root.push(new Ji(f)),y&&this.root.push(Ki(y)),this.root.push(Xi(d)),S&&this.root.push(Vi(S)),x&&this.root.push(wi(x)),b!==void 0&&this.root.push(new G(`w:titlePg`,b)),p&&this.root.push(new ea(p)),w&&this.root.push(new aa(w)),this.root.push(Hi({linePitch:m,charSpace:h,type:g}))}addHeaderFooterGroup(e,t){t.default&&this.root.push(Gi(e,{type:Ui.DEFAULT,id:t.default.View.ReferenceId})),t.first&&this.root.push(Gi(e,{type:Ui.FIRST,id:t.first.View.ReferenceId})),t.even&&this.root.push(Gi(e,{type:Ui.EVEN,id:t.even.View.ReferenceId}))}},aa=class extends L{constructor(e){super(`w:sectPrChange`),this.root.push(new Vn({id:e.id,author:e.author,date:e.date})),this.root.push(new ia(e))}},oa=class extends L{constructor(){super(`w:body`),P(this,`sections`,[])}addSection(e){let t=this.sections.pop();this.root.push(this.createSectionParagraph(t)),this.sections.push(new ia(e))}prepForXml(e){return this.sections.length===1&&(this.root.splice(0,1),this.root.push(this.sections.pop())),super.prepForXml(e)}push(e){this.root.push(e)}createSectionParagraph(e){let t=new Ci({}),n=new xi({});return n.push(e),t.addChildElement(n),t}},sa=class extends V{constructor(...e){super(...e),P(this,`xmlKeys`,{color:`w:color`,themeColor:`w:themeColor`,themeShade:`w:themeShade`,themeTint:`w:themeTint`})}},ca=class extends L{constructor(e){super(`w:background`),this.root.push(new sa({color:e.color===void 0?void 0:cn(e.color),themeColor:e.themeColor,themeShade:e.themeShade===void 0?void 0:an(e.themeShade),themeTint:e.themeTint===void 0?void 0:an(e.themeTint)}))}},la=class extends L{constructor(e){super(`w:document`),P(this,`body`,void 0),this.root.push(new Mi(`wpc.mc.o.r.m.v.wp14.wp.w10.w.w14.w15.wpg.wpi.wne.wps.cx.cx1.cx2.cx3.cx4.cx5.cx6.cx7.cx8.aink.am3d.w16cex.w16cid.w16.w16sdtdh.w16se`.split(`.`),`w14 w15 wp14`)),this.body=new oa,e.background&&this.root.push(new ca(e.background)),this.root.push(this.body)}add(e){return this.body.push(e),this}get Body(){return this.body}},ua=class{constructor(e){P(this,`document`,void 0),P(this,`relationships`,void 0),this.document=new la(e),this.relationships=new Lr}get View(){return this.document}get Relationships(){return this.relationships}},da=class extends V{constructor(...e){super(...e),P(this,`xmlKeys`,{wpc:`xmlns:wpc`,mc:`xmlns:mc`,o:`xmlns:o`,r:`xmlns:r`,m:`xmlns:m`,v:`xmlns:v`,wp14:`xmlns:wp14`,wp:`xmlns:wp`,w10:`xmlns:w10`,w:`xmlns:w`,w14:`xmlns:w14`,w15:`xmlns:w15`,wpg:`xmlns:wpg`,wpi:`xmlns:wpi`,wne:`xmlns:wne`,wps:`xmlns:wps`,Ignorable:`mc:Ignorable`})}},fa=class extends V{constructor(...e){super(...e),P(this,`xmlKeys`,{type:`w:type`,id:`w:id`})}},pa=class extends cr{constructor(){super({style:`EndnoteReference`}),this.root.push(new qr)}},ma={SEPARATOR:`separator`,CONTINUATION_SEPARATOR:`continuationSeparator`},ha=class extends L{constructor(e){super(`w:endnote`),this.root.push(new fa({type:e.type,id:e.id}));for(let t=0;t<e.children.length;t++){let n=e.children[t];t===0&&n.addRunToFront(new pa),this.root.push(n)}}},ga=class extends L{constructor(){super(`w:continuationSeparator`)}},_a=class extends cr{constructor(){super({}),this.root.push(new ga)}},va=class extends L{constructor(){super(`w:separator`)}},ya=class extends cr{constructor(){super({}),this.root.push(new va)}},ba=class extends L{constructor(){super(`w:endnotes`),this.root.push(new da({wpc:`http://schemas.microsoft.com/office/word/2010/wordprocessingCanvas`,mc:`http://schemas.openxmlformats.org/markup-compatibility/2006`,o:`urn:schemas-microsoft-com:office:office`,r:`http://schemas.openxmlformats.org/officeDocument/2006/relationships`,m:`http://schemas.openxmlformats.org/officeDocument/2006/math`,v:`urn:schemas-microsoft-com:vml`,wp14:`http://schemas.microsoft.com/office/word/2010/wordprocessingDrawing`,wp:`http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing`,w10:`urn:schemas-microsoft-com:office:word`,w:`http://schemas.openxmlformats.org/wordprocessingml/2006/main`,w14:`http://schemas.microsoft.com/office/word/2010/wordml`,w15:`http://schemas.microsoft.com/office/word/2012/wordml`,wpg:`http://schemas.microsoft.com/office/word/2010/wordprocessingGroup`,wpi:`http://schemas.microsoft.com/office/word/2010/wordprocessingInk`,wne:`http://schemas.microsoft.com/office/word/2006/wordml`,wps:`http://schemas.microsoft.com/office/word/2010/wordprocessingShape`,Ignorable:`w14 w15 wp14`}));let e=new ha({id:-1,type:ma.SEPARATOR,children:[new Ci({spacing:{after:0,line:240,lineRule:Yr.AUTO},children:[new ya]})]});this.root.push(e);let t=new ha({id:0,type:ma.CONTINUATION_SEPARATOR,children:[new Ci({spacing:{after:0,line:240,lineRule:Yr.AUTO},children:[new _a]})]});this.root.push(t)}createEndnote(e,t){let n=new ha({id:e,children:t});this.root.push(n)}},xa=class{constructor(){P(this,`endnotes`,void 0),P(this,`relationships`,void 0),this.endnotes=new ba,this.relationships=new Lr}get View(){return this.endnotes}get Relationships(){return this.relationships}},Sa=class extends V{constructor(...e){super(...e),P(this,`xmlKeys`,{wpc:`xmlns:wpc`,mc:`xmlns:mc`,o:`xmlns:o`,r:`xmlns:r`,m:`xmlns:m`,v:`xmlns:v`,wp14:`xmlns:wp14`,wp:`xmlns:wp`,w10:`xmlns:w10`,w:`xmlns:w`,w14:`xmlns:w14`,w15:`xmlns:w15`,wpg:`xmlns:wpg`,wpi:`xmlns:wpi`,wne:`xmlns:wne`,wps:`xmlns:wps`,cp:`xmlns:cp`,dc:`xmlns:dc`,dcterms:`xmlns:dcterms`,dcmitype:`xmlns:dcmitype`,xsi:`xmlns:xsi`,type:`xsi:type`})}},Ca=class extends en{constructor(e,t){super(`w:ftr`,t),P(this,`refId`,void 0),this.refId=e,t||this.root.push(new Sa({wpc:`http://schemas.microsoft.com/office/word/2010/wordprocessingCanvas`,mc:`http://schemas.openxmlformats.org/markup-compatibility/2006`,o:`urn:schemas-microsoft-com:office:office`,r:`http://schemas.openxmlformats.org/officeDocument/2006/relationships`,m:`http://schemas.openxmlformats.org/officeDocument/2006/math`,v:`urn:schemas-microsoft-com:vml`,wp14:`http://schemas.microsoft.com/office/word/2010/wordprocessingDrawing`,wp:`http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing`,w10:`urn:schemas-microsoft-com:office:word`,w:`http://schemas.openxmlformats.org/wordprocessingml/2006/main`,w14:`http://schemas.microsoft.com/office/word/2010/wordml`,w15:`http://schemas.microsoft.com/office/word/2012/wordml`,wpg:`http://schemas.microsoft.com/office/word/2010/wordprocessingGroup`,wpi:`http://schemas.microsoft.com/office/word/2010/wordprocessingInk`,wne:`http://schemas.microsoft.com/office/word/2006/wordml`,wps:`http://schemas.microsoft.com/office/word/2010/wordprocessingShape`}))}get ReferenceId(){return this.refId}add(e){this.root.push(e)}},wa=class{constructor(e,t,n){P(this,`media`,void 0),P(this,`footer`,void 0),P(this,`relationships`,void 0),this.media=e,this.footer=new Ca(t,n),this.relationships=new Lr}add(e){this.footer.add(e)}addChildElement(e){this.footer.addChildElement(e)}get View(){return this.footer}get Relationships(){return this.relationships}get Media(){return this.media}},Ta=class extends V{constructor(...e){super(...e),P(this,`xmlKeys`,{type:`w:type`,id:`w:id`})}},Ea=class extends L{constructor(){super(`w:footnoteRef`)}},Da=class extends cr{constructor(){super({style:`FootnoteReference`}),this.root.push(new Ea)}},Oa={SEPERATOR:`separator`,CONTINUATION_SEPERATOR:`continuationSeparator`},ka=class extends L{constructor(e){super(`w:footnote`),this.root.push(new Ta({type:e.type,id:e.id}));for(let t=0;t<e.children.length;t++){let n=e.children[t];t===0&&n.addRunToFront(new Da),this.root.push(n)}}},Aa=class extends V{constructor(...e){super(...e),P(this,`xmlKeys`,{wpc:`xmlns:wpc`,mc:`xmlns:mc`,o:`xmlns:o`,r:`xmlns:r`,m:`xmlns:m`,v:`xmlns:v`,wp14:`xmlns:wp14`,wp:`xmlns:wp`,w10:`xmlns:w10`,w:`xmlns:w`,w14:`xmlns:w14`,w15:`xmlns:w15`,wpg:`xmlns:wpg`,wpi:`xmlns:wpi`,wne:`xmlns:wne`,wps:`xmlns:wps`,Ignorable:`mc:Ignorable`})}},ja=class extends L{constructor(){super(`w:footnotes`),this.root.push(new Aa({wpc:`http://schemas.microsoft.com/office/word/2010/wordprocessingCanvas`,mc:`http://schemas.openxmlformats.org/markup-compatibility/2006`,o:`urn:schemas-microsoft-com:office:office`,r:`http://schemas.openxmlformats.org/officeDocument/2006/relationships`,m:`http://schemas.openxmlformats.org/officeDocument/2006/math`,v:`urn:schemas-microsoft-com:vml`,wp14:`http://schemas.microsoft.com/office/word/2010/wordprocessingDrawing`,wp:`http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing`,w10:`urn:schemas-microsoft-com:office:word`,w:`http://schemas.openxmlformats.org/wordprocessingml/2006/main`,w14:`http://schemas.microsoft.com/office/word/2010/wordml`,w15:`http://schemas.microsoft.com/office/word/2012/wordml`,wpg:`http://schemas.microsoft.com/office/word/2010/wordprocessingGroup`,wpi:`http://schemas.microsoft.com/office/word/2010/wordprocessingInk`,wne:`http://schemas.microsoft.com/office/word/2006/wordml`,wps:`http://schemas.microsoft.com/office/word/2010/wordprocessingShape`,Ignorable:`w14 w15 wp14`}));let e=new ka({id:-1,type:Oa.SEPERATOR,children:[new Ci({spacing:{after:0,line:240,lineRule:Yr.AUTO},children:[new ya]})]});this.root.push(e);let t=new ka({id:0,type:Oa.CONTINUATION_SEPERATOR,children:[new Ci({spacing:{after:0,line:240,lineRule:Yr.AUTO},children:[new _a]})]});this.root.push(t)}createFootNote(e,t){let n=new ka({id:e,children:t});this.root.push(n)}},Ma=class{constructor(){P(this,`footnotess`,void 0),P(this,`relationships`,void 0),this.footnotess=new ja,this.relationships=new Lr}get View(){return this.footnotess}get Relationships(){return this.relationships}},Na=class extends V{constructor(...e){super(...e),P(this,`xmlKeys`,{wpc:`xmlns:wpc`,mc:`xmlns:mc`,o:`xmlns:o`,r:`xmlns:r`,m:`xmlns:m`,v:`xmlns:v`,wp14:`xmlns:wp14`,wp:`xmlns:wp`,w10:`xmlns:w10`,w:`xmlns:w`,w14:`xmlns:w14`,w15:`xmlns:w15`,wpg:`xmlns:wpg`,wpi:`xmlns:wpi`,wne:`xmlns:wne`,wps:`xmlns:wps`,cp:`xmlns:cp`,dc:`xmlns:dc`,dcterms:`xmlns:dcterms`,dcmitype:`xmlns:dcmitype`,xsi:`xmlns:xsi`,type:`xsi:type`,cx:`xmlns:cx`,cx1:`xmlns:cx1`,cx2:`xmlns:cx2`,cx3:`xmlns:cx3`,cx4:`xmlns:cx4`,cx5:`xmlns:cx5`,cx6:`xmlns:cx6`,cx7:`xmlns:cx7`,cx8:`xmlns:cx8`,w16cid:`xmlns:w16cid`,w16se:`xmlns:w16se`})}},Pa=class extends en{constructor(e,t){super(`w:hdr`,t),P(this,`refId`,void 0),this.refId=e,t||this.root.push(new Na({wpc:`http://schemas.microsoft.com/office/word/2010/wordprocessingCanvas`,mc:`http://schemas.openxmlformats.org/markup-compatibility/2006`,o:`urn:schemas-microsoft-com:office:office`,r:`http://schemas.openxmlformats.org/officeDocument/2006/relationships`,m:`http://schemas.openxmlformats.org/officeDocument/2006/math`,v:`urn:schemas-microsoft-com:vml`,wp14:`http://schemas.microsoft.com/office/word/2010/wordprocessingDrawing`,wp:`http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing`,w10:`urn:schemas-microsoft-com:office:word`,w:`http://schemas.openxmlformats.org/wordprocessingml/2006/main`,w14:`http://schemas.microsoft.com/office/word/2010/wordml`,w15:`http://schemas.microsoft.com/office/word/2012/wordml`,wpg:`http://schemas.microsoft.com/office/word/2010/wordprocessingGroup`,wpi:`http://schemas.microsoft.com/office/word/2010/wordprocessingInk`,wne:`http://schemas.microsoft.com/office/word/2006/wordml`,wps:`http://schemas.microsoft.com/office/word/2010/wordprocessingShape`,cx:`http://schemas.microsoft.com/office/drawing/2014/chartex`,cx1:`http://schemas.microsoft.com/office/drawing/2015/9/8/chartex`,cx2:`http://schemas.microsoft.com/office/drawing/2015/10/21/chartex`,cx3:`http://schemas.microsoft.com/office/drawing/2016/5/9/chartex`,cx4:`http://schemas.microsoft.com/office/drawing/2016/5/10/chartex`,cx5:`http://schemas.microsoft.com/office/drawing/2016/5/11/chartex`,cx6:`http://schemas.microsoft.com/office/drawing/2016/5/12/chartex`,cx7:`http://schemas.microsoft.com/office/drawing/2016/5/13/chartex`,cx8:`http://schemas.microsoft.com/office/drawing/2016/5/14/chartex`,w16cid:`http://schemas.microsoft.com/office/word/2016/wordml/cid`,w16se:`http://schemas.microsoft.com/office/word/2015/wordml/symex`}))}get ReferenceId(){return this.refId}add(e){this.root.push(e)}},Fa=class{constructor(e,t,n){P(this,`media`,void 0),P(this,`header`,void 0),P(this,`relationships`,void 0),this.media=e,this.header=new Pa(t,n),this.relationships=new Lr}add(e){return this.header.add(e),this}addChildElement(e){this.header.addChildElement(e)}get View(){return this.header}get Relationships(){return this.relationships}get Media(){return this.media}},Ia=class{constructor(){P(this,`map`,void 0),this.map=new Map}addImage(e,t){this.map.set(e,t)}get Array(){return Array.from(this.map.values())}},La={DECIMAL:`decimal`,UPPER_ROMAN:`upperRoman`,LOWER_ROMAN:`lowerRoman`,UPPER_LETTER:`upperLetter`,LOWER_LETTER:`lowerLetter`,ORDINAL:`ordinal`,CARDINAL_TEXT:`cardinalText`,ORDINAL_TEXT:`ordinalText`,HEX:`hex`,CHICAGO:`chicago`,IDEOGRAPH__DIGITAL:`ideographDigital`,JAPANESE_COUNTING:`japaneseCounting`,AIUEO:`aiueo`,IROHA:`iroha`,DECIMAL_FULL_WIDTH:`decimalFullWidth`,DECIMAL_HALF_WIDTH:`decimalHalfWidth`,JAPANESE_LEGAL:`japaneseLegal`,JAPANESE_DIGITAL_TEN_THOUSAND:`japaneseDigitalTenThousand`,DECIMAL_ENCLOSED_CIRCLE:`decimalEnclosedCircle`,DECIMAL_FULL_WIDTH2:`decimalFullWidth2`,AIUEO_FULL_WIDTH:`aiueoFullWidth`,IROHA_FULL_WIDTH:`irohaFullWidth`,DECIMAL_ZERO:`decimalZero`,BULLET:`bullet`,GANADA:`ganada`,CHOSUNG:`chosung`,DECIMAL_ENCLOSED_FULLSTOP:`decimalEnclosedFullstop`,DECIMAL_ENCLOSED_PARENTHESES:`decimalEnclosedParen`,DECIMAL_ENCLOSED_CIRCLE_CHINESE:`decimalEnclosedCircleChinese`,IDEOGRAPH_ENCLOSED_CIRCLE:`ideographEnclosedCircle`,IDEOGRAPH_TRADITIONAL:`ideographTraditional`,IDEOGRAPH_ZODIAC:`ideographZodiac`,IDEOGRAPH_ZODIAC_TRADITIONAL:`ideographZodiacTraditional`,TAIWANESE_COUNTING:`taiwaneseCounting`,IDEOGRAPH_LEGAL_TRADITIONAL:`ideographLegalTraditional`,TAIWANESE_COUNTING_THOUSAND:`taiwaneseCountingThousand`,TAIWANESE_DIGITAL:`taiwaneseDigital`,CHINESE_COUNTING:`chineseCounting`,CHINESE_LEGAL_SIMPLIFIED:`chineseLegalSimplified`,CHINESE_COUNTING_THOUSAND:`chineseCountingThousand`,KOREAN_DIGITAL:`koreanDigital`,KOREAN_COUNTING:`koreanCounting`,KOREAN_LEGAL:`koreanLegal`,KOREAN_DIGITAL2:`koreanDigital2`,VIETNAMESE_COUNTING:`vietnameseCounting`,RUSSIAN_LOWER:`russianLower`,RUSSIAN_UPPER:`russianUpper`,NONE:`none`,NUMBER_IN_DASH:`numberInDash`,HEBREW1:`hebrew1`,HEBREW2:`hebrew2`,ARABIC_ALPHA:`arabicAlpha`,ARABIC_ABJAD:`arabicAbjad`,HINDI_VOWELS:`hindiVowels`,HINDI_CONSONANTS:`hindiConsonants`,HINDI_NUMBERS:`hindiNumbers`,HINDI_COUNTING:`hindiCounting`,THAI_LETTERS:`thaiLetters`,THAI_NUMBERS:`thaiNumbers`,THAI_COUNTING:`thaiCounting`,BAHT_TEXT:`bahtText`,DOLLAR_TEXT:`dollarText`,CUSTOM:`custom`},Ra=class extends V{constructor(...e){super(...e),P(this,`xmlKeys`,{ilvl:`w:ilvl`,tentative:`w15:tentative`})}},za=class extends L{constructor(e){super(`w:numFmt`),this.root.push(new U({val:e}))}},Ba=class extends L{constructor(e){super(`w:lvlText`),this.root.push(new U({val:e}))}},Va=class extends L{constructor(e){super(`w:lvlJc`),this.root.push(new U({val:e}))}},Ha=class extends L{constructor(e){super(`w:suff`),this.root.push(new U({val:e}))}},Ua=class extends L{constructor(){super(`w:isLgl`)}},Wa=class extends L{constructor({level:e,format:t,text:n,alignment:r=xn.START,start:i=1,style:a,suffix:o,isLegalNumberingStyle:s}){if(super(`w:lvl`),P(this,`paragraphProperties`,void 0),P(this,`runProperties`,void 0),this.root.push(new yn(`w:start`,tn(i))),t&&this.root.push(new za(t)),o&&this.root.push(new Ha(o)),s&&this.root.push(new Ua),n&&this.root.push(new Ba(n)),this.root.push(new Va(r)),a?.style&&this.root.push(Zr(a.style)),this.paragraphProperties=new xi(a&&a.paragraph),this.runProperties=new rr(a&&a.run),this.root.push(this.paragraphProperties),this.root.push(this.runProperties),e>9)throw Error(`Level cannot be greater than 9. Read more here: https://answers.microsoft.com/en-us/msoffice/forum/all/does-word-support-more-than-9-list-levels/d130fdcd-1781-446d-8c84-c6c79124e4d7`);this.root.push(new Ra({ilvl:tn(e),tentative:1}))}},Ga=class extends Wa{},Ka=class extends L{constructor(e){super(`w:multiLevelType`),this.root.push(new U({val:e}))}},qa=class extends V{constructor(...e){super(...e),P(this,`xmlKeys`,{abstractNumId:`w:abstractNumId`,restartNumberingAfterBreak:`w15:restartNumberingAfterBreak`})}},Ja=class extends L{constructor(e,t){super(`w:abstractNum`),P(this,`id`,void 0),this.root.push(new qa({abstractNumId:tn(e),restartNumberingAfterBreak:0})),this.root.push(new Ka(`hybridMultilevel`)),this.id=e;for(let e of t)this.root.push(new Ga(e))}},Ya=class extends L{constructor(e){super(`w:abstractNumId`),this.root.push(new U({val:e}))}},Xa=class extends V{constructor(...e){super(...e),P(this,`xmlKeys`,{numId:`w:numId`})}},Za=class extends L{constructor(e){if(super(`w:num`),P(this,`numId`,void 0),P(this,`reference`,void 0),P(this,`instance`,void 0),this.numId=e.numId,this.reference=e.reference,this.instance=e.instance,this.root.push(new Xa({numId:tn(e.numId)})),this.root.push(new Ya(tn(e.abstractNumId))),e.overrideLevels&&e.overrideLevels.length)for(let t of e.overrideLevels)this.root.push(new $a(t.num,t.start))}},Qa=class extends V{constructor(...e){super(...e),P(this,`xmlKeys`,{ilvl:`w:ilvl`})}},$a=class extends L{constructor(e,t){super(`w:lvlOverride`),this.root.push(new Qa({ilvl:e})),t!==void 0&&this.root.push(new to(t))}},eo=class extends V{constructor(...e){super(...e),P(this,`xmlKeys`,{val:`w:val`})}},to=class extends L{constructor(e){super(`w:startOverride`),this.root.push(new eo({val:e}))}},no=class extends L{constructor(e){super(`w:numbering`),P(this,`abstractNumberingMap`,new Map),P(this,`concreteNumberingMap`,new Map),P(this,`referenceConfigMap`,new Map),P(this,`abstractNumUniqueNumericId`,Dr()),P(this,`concreteNumUniqueNumericId`,Or()),this.root.push(new Mi([`wpc`,`mc`,`o`,`r`,`m`,`v`,`wp14`,`wp`,`w10`,`w`,`w14`,`w15`,`wpg`,`wpi`,`wne`,`wps`],`w14 w15 wp14`));let t=new Ja(this.abstractNumUniqueNumericId(),[{level:0,format:La.BULLET,text:`●`,alignment:xn.LEFT,style:{paragraph:{indent:{left:Tr(.5),hanging:Tr(.25)}}}},{level:1,format:La.BULLET,text:`○`,alignment:xn.LEFT,style:{paragraph:{indent:{left:Tr(1),hanging:Tr(.25)}}}},{level:2,format:La.BULLET,text:`■`,alignment:xn.LEFT,style:{paragraph:{indent:{left:2160,hanging:Tr(.25)}}}},{level:3,format:La.BULLET,text:`●`,alignment:xn.LEFT,style:{paragraph:{indent:{left:2880,hanging:Tr(.25)}}}},{level:4,format:La.BULLET,text:`○`,alignment:xn.LEFT,style:{paragraph:{indent:{left:3600,hanging:Tr(.25)}}}},{level:5,format:La.BULLET,text:`■`,alignment:xn.LEFT,style:{paragraph:{indent:{left:4320,hanging:Tr(.25)}}}},{level:6,format:La.BULLET,text:`●`,alignment:xn.LEFT,style:{paragraph:{indent:{left:5040,hanging:Tr(.25)}}}},{level:7,format:La.BULLET,text:`●`,alignment:xn.LEFT,style:{paragraph:{indent:{left:5760,hanging:Tr(.25)}}}},{level:8,format:La.BULLET,text:`●`,alignment:xn.LEFT,style:{paragraph:{indent:{left:6480,hanging:Tr(.25)}}}}]);this.concreteNumberingMap.set(`default-bullet-numbering`,new Za({numId:1,abstractNumId:t.id,reference:`default-bullet-numbering`,instance:0,overrideLevels:[{num:0,start:1}]})),this.abstractNumberingMap.set(`default-bullet-numbering`,t);for(let t of e.config)this.abstractNumberingMap.set(t.reference,new Ja(this.abstractNumUniqueNumericId(),t.levels)),this.referenceConfigMap.set(t.reference,t.levels)}prepForXml(e){for(let e of this.abstractNumberingMap.values())this.root.push(e);for(let e of this.concreteNumberingMap.values())this.root.push(e);return super.prepForXml(e)}createConcreteNumberingInstance(e,t){let n=this.abstractNumberingMap.get(e);if(!n)return;let r=`${e}-${t}`;if(this.concreteNumberingMap.has(r))return;let i=this.referenceConfigMap.get(e),a=i&&i[0].start,o={numId:this.concreteNumUniqueNumericId(),abstractNumId:n.id,reference:e,instance:t,overrideLevels:[typeof a==`number`&&Number.isInteger(a)?{num:0,start:a}:{num:0,start:1}]};this.concreteNumberingMap.set(r,new Za(o))}get ConcreteNumbering(){return Array.from(this.concreteNumberingMap.values())}get ReferenceConfig(){return Array.from(this.referenceConfigMap.values())}},ro=e=>new K({name:`w:compatSetting`,attributes:{version:{key:`w:val`,value:e},name:{key:`w:name`,value:`compatibilityMode`},uri:{key:`w:uri`,value:`http://schemas.microsoft.com/office/word`}}}),Y=class extends L{constructor(e){super(`w:compat`),e.version&&this.root.push(ro(e.version)),e.useSingleBorderforContiguousCells&&this.root.push(new G(`w:useSingleBorderforContiguousCells`,e.useSingleBorderforContiguousCells)),e.wordPerfectJustification&&this.root.push(new G(`w:wpJustification`,e.wordPerfectJustification)),e.noTabStopForHangingIndent&&this.root.push(new G(`w:noTabHangInd`,e.noTabStopForHangingIndent)),e.noLeading&&this.root.push(new G(`w:noLeading`,e.noLeading)),e.spaceForUnderline&&this.root.push(new G(`w:spaceForUL`,e.spaceForUnderline)),e.noColumnBalance&&this.root.push(new G(`w:noColumnBalance`,e.noColumnBalance)),e.balanceSingleByteDoubleByteWidth&&this.root.push(new G(`w:balanceSingleByteDoubleByteWidth`,e.balanceSingleByteDoubleByteWidth)),e.noExtraLineSpacing&&this.root.push(new G(`w:noExtraLineSpacing`,e.noExtraLineSpacing)),e.doNotLeaveBackslashAlone&&this.root.push(new G(`w:doNotLeaveBackslashAlone`,e.doNotLeaveBackslashAlone)),e.underlineTrailingSpaces&&this.root.push(new G(`w:ulTrailSpace`,e.underlineTrailingSpaces)),e.doNotExpandShiftReturn&&this.root.push(new G(`w:doNotExpandShiftReturn`,e.doNotExpandShiftReturn)),e.spacingInWholePoints&&this.root.push(new G(`w:spacingInWholePoints`,e.spacingInWholePoints)),e.lineWrapLikeWord6&&this.root.push(new G(`w:lineWrapLikeWord6`,e.lineWrapLikeWord6)),e.printBodyTextBeforeHeader&&this.root.push(new G(`w:printBodyTextBeforeHeader`,e.printBodyTextBeforeHeader)),e.printColorsBlack&&this.root.push(new G(`w:printColBlack`,e.printColorsBlack)),e.spaceWidth&&this.root.push(new G(`w:wpSpaceWidth`,e.spaceWidth)),e.showBreaksInFrames&&this.root.push(new G(`w:showBreaksInFrames`,e.showBreaksInFrames)),e.subFontBySize&&this.root.push(new G(`w:subFontBySize`,e.subFontBySize)),e.suppressBottomSpacing&&this.root.push(new G(`w:suppressBottomSpacing`,e.suppressBottomSpacing)),e.suppressTopSpacing&&this.root.push(new G(`w:suppressTopSpacing`,e.suppressTopSpacing)),e.suppressSpacingAtTopOfPage&&this.root.push(new G(`w:suppressSpacingAtTopOfPage`,e.suppressSpacingAtTopOfPage)),e.suppressTopSpacingWP&&this.root.push(new G(`w:suppressTopSpacingWP`,e.suppressTopSpacingWP)),e.suppressSpBfAfterPgBrk&&this.root.push(new G(`w:suppressSpBfAfterPgBrk`,e.suppressSpBfAfterPgBrk)),e.swapBordersFacingPages&&this.root.push(new G(`w:swapBordersFacingPages`,e.swapBordersFacingPages)),e.convertMailMergeEsc&&this.root.push(new G(`w:convMailMergeEsc`,e.convertMailMergeEsc)),e.truncateFontHeightsLikeWP6&&this.root.push(new G(`w:truncateFontHeightsLikeWP6`,e.truncateFontHeightsLikeWP6)),e.macWordSmallCaps&&this.root.push(new G(`w:mwSmallCaps`,e.macWordSmallCaps)),e.usePrinterMetrics&&this.root.push(new G(`w:usePrinterMetrics`,e.usePrinterMetrics)),e.doNotSuppressParagraphBorders&&this.root.push(new G(`w:doNotSuppressParagraphBorders`,e.doNotSuppressParagraphBorders)),e.wrapTrailSpaces&&this.root.push(new G(`w:wrapTrailSpaces`,e.wrapTrailSpaces)),e.footnoteLayoutLikeWW8&&this.root.push(new G(`w:footnoteLayoutLikeWW8`,e.footnoteLayoutLikeWW8)),e.shapeLayoutLikeWW8&&this.root.push(new G(`w:shapeLayoutLikeWW8`,e.shapeLayoutLikeWW8)),e.alignTablesRowByRow&&this.root.push(new G(`w:alignTablesRowByRow`,e.alignTablesRowByRow)),e.forgetLastTabAlignment&&this.root.push(new G(`w:forgetLastTabAlignment`,e.forgetLastTabAlignment)),e.adjustLineHeightInTable&&this.root.push(new G(`w:adjustLineHeightInTable`,e.adjustLineHeightInTable)),e.autoSpaceLikeWord95&&this.root.push(new G(`w:autoSpaceLikeWord95`,e.autoSpaceLikeWord95)),e.noSpaceRaiseLower&&this.root.push(new G(`w:noSpaceRaiseLower`,e.noSpaceRaiseLower)),e.doNotUseHTMLParagraphAutoSpacing&&this.root.push(new G(`w:doNotUseHTMLParagraphAutoSpacing`,e.doNotUseHTMLParagraphAutoSpacing)),e.layoutRawTableWidth&&this.root.push(new G(`w:layoutRawTableWidth`,e.layoutRawTableWidth)),e.layoutTableRowsApart&&this.root.push(new G(`w:layoutTableRowsApart`,e.layoutTableRowsApart)),e.useWord97LineBreakRules&&this.root.push(new G(`w:useWord97LineBreakRules`,e.useWord97LineBreakRules)),e.doNotBreakWrappedTables&&this.root.push(new G(`w:doNotBreakWrappedTables`,e.doNotBreakWrappedTables)),e.doNotSnapToGridInCell&&this.root.push(new G(`w:doNotSnapToGridInCell`,e.doNotSnapToGridInCell)),e.selectFieldWithFirstOrLastCharacter&&this.root.push(new G(`w:selectFldWithFirstOrLastChar`,e.selectFieldWithFirstOrLastCharacter)),e.applyBreakingRules&&this.root.push(new G(`w:applyBreakingRules`,e.applyBreakingRules)),e.doNotWrapTextWithPunctuation&&this.root.push(new G(`w:doNotWrapTextWithPunct`,e.doNotWrapTextWithPunctuation)),e.doNotUseEastAsianBreakRules&&this.root.push(new G(`w:doNotUseEastAsianBreakRules`,e.doNotUseEastAsianBreakRules)),e.useWord2002TableStyleRules&&this.root.push(new G(`w:useWord2002TableStyleRules`,e.useWord2002TableStyleRules)),e.growAutofit&&this.root.push(new G(`w:growAutofit`,e.growAutofit)),e.useFELayout&&this.root.push(new G(`w:useFELayout`,e.useFELayout)),e.useNormalStyleForList&&this.root.push(new G(`w:useNormalStyleForList`,e.useNormalStyleForList)),e.doNotUseIndentAsNumberingTabStop&&this.root.push(new G(`w:doNotUseIndentAsNumberingTabStop`,e.doNotUseIndentAsNumberingTabStop)),e.useAlternateEastAsianLineBreakRules&&this.root.push(new G(`w:useAltKinsokuLineBreakRules`,e.useAlternateEastAsianLineBreakRules)),e.allowSpaceOfSameStyleInTable&&this.root.push(new G(`w:allowSpaceOfSameStyleInTable`,e.allowSpaceOfSameStyleInTable)),e.doNotSuppressIndentation&&this.root.push(new G(`w:doNotSuppressIndentation`,e.doNotSuppressIndentation)),e.doNotAutofitConstrainedTables&&this.root.push(new G(`w:doNotAutofitConstrainedTables`,e.doNotAutofitConstrainedTables)),e.autofitToFirstFixedWidthCell&&this.root.push(new G(`w:autofitToFirstFixedWidthCell`,e.autofitToFirstFixedWidthCell)),e.underlineTabInNumberingList&&this.root.push(new G(`w:underlineTabInNumList`,e.underlineTabInNumberingList)),e.displayHangulFixedWidth&&this.root.push(new G(`w:displayHangulFixedWidth`,e.displayHangulFixedWidth)),e.splitPgBreakAndParaMark&&this.root.push(new G(`w:splitPgBreakAndParaMark`,e.splitPgBreakAndParaMark)),e.doNotVerticallyAlignCellWithSp&&this.root.push(new G(`w:doNotVertAlignCellWithSp`,e.doNotVerticallyAlignCellWithSp)),e.doNotBreakConstrainedForcedTable&&this.root.push(new G(`w:doNotBreakConstrainedForcedTable`,e.doNotBreakConstrainedForcedTable)),e.ignoreVerticalAlignmentInTextboxes&&this.root.push(new G(`w:doNotVertAlignInTxbx`,e.ignoreVerticalAlignmentInTextboxes)),e.useAnsiKerningPairs&&this.root.push(new G(`w:useAnsiKerningPairs`,e.useAnsiKerningPairs)),e.cachedColumnBalance&&this.root.push(new G(`w:cachedColBalance`,e.cachedColumnBalance))}},io=class extends V{constructor(...e){super(...e),P(this,`xmlKeys`,{wpc:`xmlns:wpc`,mc:`xmlns:mc`,o:`xmlns:o`,r:`xmlns:r`,m:`xmlns:m`,v:`xmlns:v`,wp14:`xmlns:wp14`,wp:`xmlns:wp`,w10:`xmlns:w10`,w:`xmlns:w`,w14:`xmlns:w14`,w15:`xmlns:w15`,wpg:`xmlns:wpg`,wpi:`xmlns:wpi`,wne:`xmlns:wne`,wps:`xmlns:wps`,Ignorable:`mc:Ignorable`})}},ao=class extends L{constructor(e){super(`w:settings`),this.root.push(new io({wpc:`http://schemas.microsoft.com/office/word/2010/wordprocessingCanvas`,mc:`http://schemas.openxmlformats.org/markup-compatibility/2006`,o:`urn:schemas-microsoft-com:office:office`,r:`http://schemas.openxmlformats.org/officeDocument/2006/relationships`,m:`http://schemas.openxmlformats.org/officeDocument/2006/math`,v:`urn:schemas-microsoft-com:vml`,wp14:`http://schemas.microsoft.com/office/word/2010/wordprocessingDrawing`,wp:`http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing`,w10:`urn:schemas-microsoft-com:office:word`,w:`http://schemas.openxmlformats.org/wordprocessingml/2006/main`,w14:`http://schemas.microsoft.com/office/word/2010/wordml`,w15:`http://schemas.microsoft.com/office/word/2012/wordml`,wpg:`http://schemas.microsoft.com/office/word/2010/wordprocessingGroup`,wpi:`http://schemas.microsoft.com/office/word/2010/wordprocessingInk`,wne:`http://schemas.microsoft.com/office/word/2006/wordml`,wps:`http://schemas.microsoft.com/office/word/2010/wordprocessingShape`,Ignorable:`w14 w15 wp14`})),this.root.push(new G(`w:displayBackgroundShape`,!0)),e.trackRevisions!==void 0&&this.root.push(new G(`w:trackRevisions`,e.trackRevisions)),e.evenAndOddHeaders!==void 0&&this.root.push(new G(`w:evenAndOddHeaders`,e.evenAndOddHeaders)),e.updateFields!==void 0&&this.root.push(new G(`w:updateFields`,e.updateFields)),e.defaultTabStop!==void 0&&this.root.push(new yn(`w:defaultTabStop`,e.defaultTabStop)),e.hyphenation?.autoHyphenation!==void 0&&this.root.push(new G(`w:autoHyphenation`,e.hyphenation.autoHyphenation)),e.hyphenation?.hyphenationZone!==void 0&&this.root.push(new yn(`w:hyphenationZone`,e.hyphenation.hyphenationZone)),e.hyphenation?.consecutiveHyphenLimit!==void 0&&this.root.push(new yn(`w:consecutiveHyphenLimit`,e.hyphenation.consecutiveHyphenLimit)),e.hyphenation?.doNotHyphenateCaps!==void 0&&this.root.push(new G(`w:doNotHyphenateCaps`,e.hyphenation.doNotHyphenateCaps)),this.root.push(new Y(B(B({},e.compatibility??{}),{},{version:e.compatibility?.version??e.compatibilityModeVersion??15})))}},oo=class extends V{constructor(...e){super(...e),P(this,`xmlKeys`,{val:`w:val`})}},so=class extends L{constructor(e){super(`w:name`),this.root.push(new oo({val:e}))}},co=class extends L{constructor(e){super(`w:uiPriority`),this.root.push(new oo({val:tn(e)}))}},lo=class extends V{constructor(...e){super(...e),P(this,`xmlKeys`,{type:`w:type`,styleId:`w:styleId`,default:`w:default`,customStyle:`w:customStyle`})}},uo=class extends L{constructor(e,t){super(`w:style`),this.root.push(new lo(e)),t.name&&this.root.push(new so(t.name)),t.basedOn&&this.root.push(new _n(`w:basedOn`,t.basedOn)),t.next&&this.root.push(new _n(`w:next`,t.next)),t.link&&this.root.push(new _n(`w:link`,t.link)),t.uiPriority!==void 0&&this.root.push(new co(t.uiPriority)),t.semiHidden!==void 0&&this.root.push(new G(`w:semiHidden`,t.semiHidden)),t.unhideWhenUsed!==void 0&&this.root.push(new G(`w:unhideWhenUsed`,t.unhideWhenUsed)),t.quickFormat!==void 0&&this.root.push(new G(`w:qFormat`,t.quickFormat))}},fo=class extends uo{constructor(e){super({type:`paragraph`,styleId:e.id},e),P(this,`paragraphProperties`,void 0),P(this,`runProperties`,void 0),this.paragraphProperties=new xi(e.paragraph),this.runProperties=new rr(e.run),this.root.push(this.paragraphProperties),this.root.push(this.runProperties)}},po=class extends uo{constructor(e){super({type:`character`,styleId:e.id},B({uiPriority:99,unhideWhenUsed:!0},e)),P(this,`runProperties`,void 0),this.runProperties=new rr(e.run),this.root.push(this.runProperties)}},mo=class extends fo{constructor(e){super(B({basedOn:`Normal`,next:`Normal`,quickFormat:!0},e))}},ho=class extends mo{constructor(e){super(B({id:`Title`,name:`Title`},e))}},go=class extends mo{constructor(e){super(B({id:`Heading1`,name:`Heading 1`},e))}},_o=class extends mo{constructor(e){super(B({id:`Heading2`,name:`Heading 2`},e))}},vo=class extends mo{constructor(e){super(B({id:`Heading3`,name:`Heading 3`},e))}},yo=class extends mo{constructor(e){super(B({id:`Heading4`,name:`Heading 4`},e))}},bo=class extends mo{constructor(e){super(B({id:`Heading5`,name:`Heading 5`},e))}},xo=class extends mo{constructor(e){super(B({id:`Heading6`,name:`Heading 6`},e))}},So=class extends mo{constructor(e){super(B({id:`Strong`,name:`Strong`},e))}},Co=class extends fo{constructor(e){super(B({id:`ListParagraph`,name:`List Paragraph`,basedOn:`Normal`,quickFormat:!0},e))}},wo=class extends fo{constructor(e){super(B({id:`FootnoteText`,name:`footnote text`,link:`FootnoteTextChar`,basedOn:`Normal`,uiPriority:99,semiHidden:!0,unhideWhenUsed:!0,paragraph:{spacing:{after:0,line:240,lineRule:Yr.AUTO}},run:{size:20}},e))}},To=class extends po{constructor(e){super(B({id:`FootnoteReference`,name:`footnote reference`,basedOn:`DefaultParagraphFont`,semiHidden:!0,run:{superScript:!0}},e))}},Eo=class extends po{constructor(e){super(B({id:`FootnoteTextChar`,name:`Footnote Text Char`,basedOn:`DefaultParagraphFont`,link:`FootnoteText`,semiHidden:!0,run:{size:20}},e))}},Do=class extends fo{constructor(e){super(B({id:`EndnoteText`,name:`endnote text`,link:`EndnoteTextChar`,basedOn:`Normal`,uiPriority:99,semiHidden:!0,unhideWhenUsed:!0,paragraph:{spacing:{after:0,line:240,lineRule:Yr.AUTO}},run:{size:20}},e))}},Oo=class extends po{constructor(e){super(B({id:`EndnoteReference`,name:`endnote reference`,basedOn:`DefaultParagraphFont`,semiHidden:!0,run:{superScript:!0}},e))}},ko=class extends po{constructor(e){super(B({id:`EndnoteTextChar`,name:`Endnote Text Char`,basedOn:`DefaultParagraphFont`,link:`EndnoteText`,semiHidden:!0,run:{size:20}},e))}},Ao=class extends po{constructor(e){super(B({id:`Hyperlink`,name:`Hyperlink`,basedOn:`DefaultParagraphFont`,run:{color:`0563C1`,underline:{type:tr.SINGLE}}},e))}},jo=class extends L{constructor(e){if(super(`w:styles`),e.initialStyles&&this.root.push(e.initialStyles),e.importedStyles)for(let t of e.importedStyles)this.root.push(t);if(e.paragraphStyles)for(let t of e.paragraphStyles)this.root.push(new fo(t));if(e.characterStyles)for(let t of e.characterStyles)this.root.push(new po(t))}},Mo=class extends L{constructor(e){super(`w:pPrDefault`),this.root.push(new xi(e))}},No=class extends L{constructor(e){super(`w:rPrDefault`),this.root.push(new rr(e))}},Po=class extends L{constructor(e){super(`w:docDefaults`),P(this,`runPropertiesDefaults`,void 0),P(this,`paragraphPropertiesDefaults`,void 0),this.runPropertiesDefaults=new No(e.run),this.paragraphPropertiesDefaults=new Mo(e.paragraph),this.root.push(this.runPropertiesDefaults),this.root.push(this.paragraphPropertiesDefaults)}},Fo=class{newInstance(e){let t=(0,Yt.xml2js)(e,{compact:!1}),n;for(let e of t.elements||[])e.name===`w:styles`&&(n=e);if(n===void 0)throw Error(`can not find styles element`);let r=n.elements||[];return{initialStyles:new $t(n.attributes),importedStyles:r.map(e=>Xt(e))}}},Io=class{newInstance(e={}){return{initialStyles:new Mi([`mc`,`r`,`w`,`w14`,`w15`],`w14 w15`),importedStyles:[new Po(e.document??{}),new ho(B({run:{size:56}},e.title)),new go(B({run:{color:`2E74B5`,size:32}},e.heading1)),new _o(B({run:{color:`2E74B5`,size:26}},e.heading2)),new vo(B({run:{color:`1F4D78`,size:24}},e.heading3)),new yo(B({run:{color:`2E74B5`,italics:!0}},e.heading4)),new bo(B({run:{color:`2E74B5`}},e.heading5)),new xo(B({run:{color:`1F4D78`}},e.heading6)),new So(B({run:{bold:!0}},e.strong)),new Co(e.listParagraph||{}),new Ao(e.hyperlink||{}),new To(e.footnoteReference||{}),new wo(e.footnoteText||{}),new Eo(e.footnoteTextChar||{}),new Oo(e.endnoteReference||{}),new Do(e.endnoteText||{}),new ko(e.endnoteTextChar||{})]}}},Lo=class{constructor(e){if(P(this,`currentRelationshipId`,1),P(this,`documentWrapper`,void 0),P(this,`headers`,[]),P(this,`footers`,[]),P(this,`coreProperties`,void 0),P(this,`numbering`,void 0),P(this,`media`,void 0),P(this,`fileRelationships`,void 0),P(this,`footnotesWrapper`,void 0),P(this,`endnotesWrapper`,void 0),P(this,`settings`,void 0),P(this,`contentTypes`,void 0),P(this,`customProperties`,void 0),P(this,`appProperties`,void 0),P(this,`styles`,void 0),P(this,`comments`,void 0),P(this,`commentsExtended`,void 0),P(this,`fontWrapper`,void 0),this.coreProperties=new Ni(B(B({},e),{},{creator:e.creator??`Un-named`,revision:e.revision??1,lastModifiedBy:e.lastModifiedBy??`Un-named`})),this.numbering=new no(e.numbering?e.numbering:{config:[]}),this.comments=new Hr(e.comments??{children:[]}),this.comments.ThreadData&&(this.commentsExtended=new Kr(this.comments.ThreadData)),this.fileRelationships=new Lr,this.customProperties=new Bi(e.customProperties??[]),this.appProperties=new Ei,this.footnotesWrapper=new Ma,this.endnotesWrapper=new xa,this.contentTypes=new Ai,this.documentWrapper=new ua({background:e.background}),this.settings=new ao({compatibilityModeVersion:e.compatabilityModeVersion,compatibility:e.compatibility,evenAndOddHeaders:!!e.evenAndOddHeaderAndFooters,trackRevisions:e.features?.trackRevisions,updateFields:e.features?.updateFields,defaultTabStop:e.defaultTabStop,hyphenation:{autoHyphenation:e.hyphenation?.autoHyphenation,hyphenationZone:e.hyphenation?.hyphenationZone,consecutiveHyphenLimit:e.hyphenation?.consecutiveHyphenLimit,doNotHyphenateCaps:e.hyphenation?.doNotHyphenateCaps}}),this.media=new Ia,e.externalStyles!==void 0){let t=new Io().newInstance(e.styles?.default),n=new Fo().newInstance(e.externalStyles);this.styles=new jo(B(B({},n),{},{importedStyles:[...t.importedStyles,...n.importedStyles]}))}else if(e.styles){let t=new Io().newInstance(e.styles.default);this.styles=new jo(B(B({},t),e.styles))}else{let e=new Io;this.styles=new jo(e.newInstance())}this.addDefaultRelationships();for(let t of e.sections)this.addSection(t);if(e.footnotes)for(let t in e.footnotes)this.footnotesWrapper.View.createFootNote(parseFloat(t),e.footnotes[t].children);if(e.endnotes)for(let t in e.endnotes)this.endnotesWrapper.View.createEndnote(parseFloat(t),e.endnotes[t].children);this.fontWrapper=new vi(e.fonts??[])}addSection({headers:e={},footers:t={},children:n,properties:r}){this.documentWrapper.View.Body.addSection(B(B({},r),{},{headerWrapperGroup:{default:e.default?this.createHeader(e.default):void 0,first:e.first?this.createHeader(e.first):void 0,even:e.even?this.createHeader(e.even):void 0},footerWrapperGroup:{default:t.default?this.createFooter(t.default):void 0,first:t.first?this.createFooter(t.first):void 0,even:t.even?this.createFooter(t.even):void 0}}));for(let e of n)this.documentWrapper.View.add(e)}createHeader(e){let t=new Fa(this.media,this.currentRelationshipId++);for(let n of e.options.children)t.add(n);return this.addHeaderToDocument(t),t}createFooter(e){let t=new wa(this.media,this.currentRelationshipId++);for(let n of e.options.children)t.add(n);return this.addFooterToDocument(t),t}addHeaderToDocument(e,t=Ui.DEFAULT){this.headers.push({header:e,type:t}),this.documentWrapper.Relationships.addRelationship(e.View.ReferenceId,`http://schemas.openxmlformats.org/officeDocument/2006/relationships/header`,`header${this.headers.length}.xml`),this.contentTypes.addHeader(this.headers.length)}addFooterToDocument(e,t=Ui.DEFAULT){this.footers.push({footer:e,type:t}),this.documentWrapper.Relationships.addRelationship(e.View.ReferenceId,`http://schemas.openxmlformats.org/officeDocument/2006/relationships/footer`,`footer${this.footers.length}.xml`),this.contentTypes.addFooter(this.footers.length)}addDefaultRelationships(){this.fileRelationships.addRelationship(1,`http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument`,`word/document.xml`),this.fileRelationships.addRelationship(2,`http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties`,`docProps/core.xml`),this.fileRelationships.addRelationship(3,`http://schemas.openxmlformats.org/officeDocument/2006/relationships/extended-properties`,`docProps/app.xml`),this.fileRelationships.addRelationship(4,`http://schemas.openxmlformats.org/officeDocument/2006/relationships/custom-properties`,`docProps/custom.xml`),this.documentWrapper.Relationships.addRelationship(this.currentRelationshipId++,`http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles`,`styles.xml`),this.documentWrapper.Relationships.addRelationship(this.currentRelationshipId++,`http://schemas.openxmlformats.org/officeDocument/2006/relationships/numbering`,`numbering.xml`),this.documentWrapper.Relationships.addRelationship(this.currentRelationshipId++,`http://schemas.openxmlformats.org/officeDocument/2006/relationships/footnotes`,`footnotes.xml`),this.documentWrapper.Relationships.addRelationship(this.currentRelationshipId++,`http://schemas.openxmlformats.org/officeDocument/2006/relationships/endnotes`,`endnotes.xml`),this.documentWrapper.Relationships.addRelationship(this.currentRelationshipId++,`http://schemas.openxmlformats.org/officeDocument/2006/relationships/settings`,`settings.xml`),this.documentWrapper.Relationships.addRelationship(this.currentRelationshipId++,`http://schemas.openxmlformats.org/officeDocument/2006/relationships/comments`,`comments.xml`),this.commentsExtended&&(this.documentWrapper.Relationships.addRelationship(this.currentRelationshipId++,`http://schemas.microsoft.com/office/2011/relationships/commentsExtended`,`commentsExtended.xml`),this.contentTypes.addCommentsExtended())}get Document(){return this.documentWrapper}get Styles(){return this.styles}get CoreProperties(){return this.coreProperties}get Numbering(){return this.numbering}get Media(){return this.media}get FileRelationships(){return this.fileRelationships}get Headers(){return this.headers.map(e=>e.header)}get Footers(){return this.footers.map(e=>e.footer)}get ContentTypes(){return this.contentTypes}get CustomProperties(){return this.customProperties}get AppProperties(){return this.appProperties}get FootNotes(){return this.footnotesWrapper}get Endnotes(){return this.endnotesWrapper}get Settings(){return this.settings}get Comments(){return this.comments}get CommentsExtended(){return this.commentsExtended}get FontTable(){return this.fontWrapper}},Ro=D(((e,t)=>{re(),Se(),(function(n){typeof e==`object`&&t!==void 0?t.exports=n():typeof define==`function`&&define.amd?define([],n):(typeof window<`u`?window:ne===void 0?typeof self<`u`?self:this:ne).JSZip=n()})(function(){return function e(t,n,r){function i(o,s){if(!n[o]){if(!t[o]){var c=typeof A==`function`&&A;if(!s&&c)return c(o,!0);if(a)return a(o,!0);var l=Error(`Cannot find module '`+o+`'`);throw l.code=`MODULE_NOT_FOUND`,l}var u=n[o]={exports:{}};t[o][0].call(u.exports,function(e){var n=t[o][1][e];return i(n||e)},u,u.exports,e,t,n,r)}return n[o].exports}for(var a=typeof A==`function`&&A,o=0;o<r.length;o++)i(r[o]);return i}({1:[function(e,t,n){var r=e(`./utils`),i=e(`./support`),a=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=`;n.encode=function(e){for(var t,n,i,o,s,c,l,u=[],d=0,f=e.length,p=f,m=r.getTypeOf(e)!==`string`;d<e.length;)p=f-d,i=m?(t=e[d++],n=d<f?e[d++]:0,d<f?e[d++]:0):(t=e.charCodeAt(d++),n=d<f?e.charCodeAt(d++):0,d<f?e.charCodeAt(d++):0),o=t>>2,s=(3&t)<<4|n>>4,c=1<p?(15&n)<<2|i>>6:64,l=2<p?63&i:64,u.push(a.charAt(o)+a.charAt(s)+a.charAt(c)+a.charAt(l));return u.join(``)},n.decode=function(e){var t,n,r,o,s,c,l=0,u=0,d=`data:`;if(e.substr(0,d.length)===d)throw Error(`Invalid base64 input, it looks like a data url.`);var f,p=3*(e=e.replace(/[^A-Za-z0-9+/=]/g,``)).length/4;if(e.charAt(e.length-1)===a.charAt(64)&&p--,e.charAt(e.length-2)===a.charAt(64)&&p--,p%1!=0)throw Error(`Invalid base64 input, bad content length.`);for(f=i.uint8array?new Uint8Array(0|p):Array(0|p);l<e.length;)t=a.indexOf(e.charAt(l++))<<2|(o=a.indexOf(e.charAt(l++)))>>4,n=(15&o)<<4|(s=a.indexOf(e.charAt(l++)))>>2,r=(3&s)<<6|(c=a.indexOf(e.charAt(l++))),f[u++]=t,s!==64&&(f[u++]=n),c!==64&&(f[u++]=r);return f}},{"./support":30,"./utils":32}],2:[function(e,t,n){var r=e(`./external`),i=e(`./stream/DataWorker`),a=e(`./stream/Crc32Probe`),o=e(`./stream/DataLengthProbe`);function s(e,t,n,r,i){this.compressedSize=e,this.uncompressedSize=t,this.crc32=n,this.compression=r,this.compressedContent=i}s.prototype={getContentWorker:function(){var e=new i(r.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new o(`data_length`)),t=this;return e.on(`end`,function(){if(this.streamInfo.data_length!==t.uncompressedSize)throw Error(`Bug : uncompressed data size mismatch`)}),e},getCompressedWorker:function(){return new i(r.Promise.resolve(this.compressedContent)).withStreamInfo(`compressedSize`,this.compressedSize).withStreamInfo(`uncompressedSize`,this.uncompressedSize).withStreamInfo(`crc32`,this.crc32).withStreamInfo(`compression`,this.compression)}},s.createWorkerFrom=function(e,t,n){return e.pipe(new a).pipe(new o(`uncompressedSize`)).pipe(t.compressWorker(n)).pipe(new o(`compressedSize`)).withStreamInfo(`compression`,t)},t.exports=s},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(e,t,n){var r=e(`./stream/GenericWorker`);n.STORE={magic:`\0\0`,compressWorker:function(){return new r(`STORE compression`)},uncompressWorker:function(){return new r(`STORE decompression`)}},n.DEFLATE=e(`./flate`)},{"./flate":7,"./stream/GenericWorker":28}],4:[function(e,t,n){var r=e(`./utils`),i=function(){for(var e,t=[],n=0;n<256;n++){e=n;for(var r=0;r<8;r++)e=1&e?3988292384^e>>>1:e>>>1;t[n]=e}return t}();t.exports=function(e,t){return e!==void 0&&e.length?r.getTypeOf(e)===`string`?function(e,t,n,r){var a=i,o=r+n;e^=-1;for(var s=r;s<o;s++)e=e>>>8^a[255&(e^t.charCodeAt(s))];return-1^e}(0|t,e,e.length,0):function(e,t,n,r){var a=i,o=r+n;e^=-1;for(var s=r;s<o;s++)e=e>>>8^a[255&(e^t[s])];return-1^e}(0|t,e,e.length,0):0}},{"./utils":32}],5:[function(e,t,n){n.base64=!1,n.binary=!1,n.dir=!1,n.createFolders=!0,n.date=null,n.compression=null,n.compressionOptions=null,n.comment=null,n.unixPermissions=null,n.dosPermissions=null},{}],6:[function(e,t,n){var r=null;r=typeof Promise<`u`?Promise:e(`lie`),t.exports={Promise:r}},{lie:37}],7:[function(e,t,n){var r=typeof Uint8Array<`u`&&typeof Uint16Array<`u`&&typeof Uint32Array<`u`,i=e(`pako`),a=e(`./utils`),o=e(`./stream/GenericWorker`),s=r?`uint8array`:`array`;function c(e,t){o.call(this,`FlateWorker/`+e),this._pako=null,this._pakoAction=e,this._pakoOptions=t,this.meta={}}n.magic=`\b\0`,a.inherits(c,o),c.prototype.processChunk=function(e){this.meta=e.meta,this._pako===null&&this._createPako(),this._pako.push(a.transformTo(s,e.data),!1)},c.prototype.flush=function(){o.prototype.flush.call(this),this._pako===null&&this._createPako(),this._pako.push([],!0)},c.prototype.cleanUp=function(){o.prototype.cleanUp.call(this),this._pako=null},c.prototype._createPako=function(){this._pako=new i[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var e=this;this._pako.onData=function(t){e.push({data:t,meta:e.meta})}},n.compressWorker=function(e){return new c(`Deflate`,e)},n.uncompressWorker=function(){return new c(`Inflate`,{})}},{"./stream/GenericWorker":28,"./utils":32,pako:38}],8:[function(e,t,n){function r(e,t){var n,r=``;for(n=0;n<t;n++)r+=String.fromCharCode(255&e),e>>>=8;return r}function i(e,t,n,i,o,u){var d,f,p=e.file,m=e.compression,h=u!==s.utf8encode,g=a.transformTo(`string`,u(p.name)),_=a.transformTo(`string`,s.utf8encode(p.name)),v=p.comment,y=a.transformTo(`string`,u(v)),b=a.transformTo(`string`,s.utf8encode(v)),x=_.length!==p.name.length,S=b.length!==v.length,C=``,w=``,T=``,E=p.dir,D=p.date,O={crc32:0,compressedSize:0,uncompressedSize:0};t&&!n||(O.crc32=e.crc32,O.compressedSize=e.compressedSize,O.uncompressedSize=e.uncompressedSize);var k=0;t&&(k|=8),h||!x&&!S||(k|=2048);var A=0,j=0;E&&(A|=16),o===`UNIX`?(j=798,A|=function(e,t){var n=e;return e||(n=t?16893:33204),(65535&n)<<16}(p.unixPermissions,E)):(j=20,A|=function(e){return 63&(e||0)}(p.dosPermissions)),d=D.getUTCHours(),d<<=6,d|=D.getUTCMinutes(),d<<=5,d|=D.getUTCSeconds()/2,f=D.getUTCFullYear()-1980,f<<=4,f|=D.getUTCMonth()+1,f<<=5,f|=D.getUTCDate(),x&&(w=r(1,1)+r(c(g),4)+_,C+=`up`+r(w.length,2)+w),S&&(T=r(1,1)+r(c(y),4)+b,C+=`uc`+r(T.length,2)+T);var M=``;return M+=`
\0`,M+=r(k,2),M+=m.magic,M+=r(d,2),M+=r(f,2),M+=r(O.crc32,4),M+=r(O.compressedSize,4),M+=r(O.uncompressedSize,4),M+=r(g.length,2),M+=r(C.length,2),{fileRecord:l.LOCAL_FILE_HEADER+M+g+C,dirRecord:l.CENTRAL_FILE_HEADER+r(j,2)+M+r(y.length,2)+`\0\0\0\0`+r(A,4)+r(i,4)+g+C+y}}var a=e(`../utils`),o=e(`../stream/GenericWorker`),s=e(`../utf8`),c=e(`../crc32`),l=e(`../signature`);function u(e,t,n,r){o.call(this,`ZipFileWorker`),this.bytesWritten=0,this.zipComment=t,this.zipPlatform=n,this.encodeFileName=r,this.streamFiles=e,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}a.inherits(u,o),u.prototype.push=function(e){var t=e.meta.percent||0,n=this.entriesCount,r=this._sources.length;this.accumulate?this.contentBuffer.push(e):(this.bytesWritten+=e.data.length,o.prototype.push.call(this,{data:e.data,meta:{currentFile:this.currentFile,percent:n?(t+100*(n-r-1))/n:100}}))},u.prototype.openedSource=function(e){this.currentSourceOffset=this.bytesWritten,this.currentFile=e.file.name;var t=this.streamFiles&&!e.file.dir;if(t){var n=i(e,t,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:n.fileRecord,meta:{percent:0}})}else this.accumulate=!0},u.prototype.closedSource=function(e){this.accumulate=!1;var t=this.streamFiles&&!e.file.dir,n=i(e,t,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(n.dirRecord),t)this.push({data:function(e){return l.DATA_DESCRIPTOR+r(e.crc32,4)+r(e.compressedSize,4)+r(e.uncompressedSize,4)}(e),meta:{percent:100}});else for(this.push({data:n.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},u.prototype.flush=function(){for(var e=this.bytesWritten,t=0;t<this.dirRecords.length;t++)this.push({data:this.dirRecords[t],meta:{percent:100}});var n=this.bytesWritten-e,i=function(e,t,n,i,o){var s=a.transformTo(`string`,o(i));return l.CENTRAL_DIRECTORY_END+`\0\0\0\0`+r(e,2)+r(e,2)+r(t,4)+r(n,4)+r(s.length,2)+s}(this.dirRecords.length,n,e,this.zipComment,this.encodeFileName);this.push({data:i,meta:{percent:100}})},u.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},u.prototype.registerPrevious=function(e){this._sources.push(e);var t=this;return e.on(`data`,function(e){t.processChunk(e)}),e.on(`end`,function(){t.closedSource(t.previous.streamInfo),t._sources.length?t.prepareNextSource():t.end()}),e.on(`error`,function(e){t.error(e)}),this},u.prototype.resume=function(){return!!o.prototype.resume.call(this)&&(!this.previous&&this._sources.length?(this.prepareNextSource(),!0):this.previous||this._sources.length||this.generatedError?void 0:(this.end(),!0))},u.prototype.error=function(e){var t=this._sources;if(!o.prototype.error.call(this,e))return!1;for(var n=0;n<t.length;n++)try{t[n].error(e)}catch{}return!0},u.prototype.lock=function(){o.prototype.lock.call(this);for(var e=this._sources,t=0;t<e.length;t++)e[t].lock()},t.exports=u},{"../crc32":4,"../signature":23,"../stream/GenericWorker":28,"../utf8":31,"../utils":32}],9:[function(e,t,n){var r=e(`../compressions`),i=e(`./ZipFileWorker`);n.generateWorker=function(e,t,n){var a=new i(t.streamFiles,n,t.platform,t.encodeFileName),o=0;try{e.forEach(function(e,n){o++;var i=function(e,t){var n=e||t,i=r[n];if(!i)throw Error(n+` is not a valid compression method !`);return i}(n.options.compression,t.compression),s=n.options.compressionOptions||t.compressionOptions||{},c=n.dir,l=n.date;n._compressWorker(i,s).withStreamInfo(`file`,{name:e,dir:c,date:l,comment:n.comment||``,unixPermissions:n.unixPermissions,dosPermissions:n.dosPermissions}).pipe(a)}),a.entriesCount=o}catch(e){a.error(e)}return a}},{"../compressions":3,"./ZipFileWorker":8}],10:[function(e,t,n){function r(){if(!(this instanceof r))return new r;if(arguments.length)throw Error(`The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.`);this.files=Object.create(null),this.comment=null,this.root=``,this.clone=function(){var e=new r;for(var t in this)typeof this[t]!=`function`&&(e[t]=this[t]);return e}}(r.prototype=e(`./object`)).loadAsync=e(`./load`),r.support=e(`./support`),r.defaults=e(`./defaults`),r.version=`3.10.1`,r.loadAsync=function(e,t){return new r().loadAsync(e,t)},r.external=e(`./external`),t.exports=r},{"./defaults":5,"./external":6,"./load":11,"./object":15,"./support":30}],11:[function(e,t,n){var r=e(`./utils`),i=e(`./external`),a=e(`./utf8`),o=e(`./zipEntries`),s=e(`./stream/Crc32Probe`),c=e(`./nodejsUtils`);function l(e){return new i.Promise(function(t,n){var r=e.decompressed.getContentWorker().pipe(new s);r.on(`error`,function(e){n(e)}).on(`end`,function(){r.streamInfo.crc32===e.decompressed.crc32?t():n(Error(`Corrupted zip : CRC32 mismatch`))}).resume()})}t.exports=function(e,t){var n=this;return t=r.extend(t||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:a.utf8decode}),c.isNode&&c.isStream(e)?i.Promise.reject(Error(`JSZip can't accept a stream when loading a zip file.`)):r.prepareContent(`the loaded zip file`,e,!0,t.optimizedBinaryString,t.base64).then(function(e){var n=new o(t);return n.load(e),n}).then(function(e){var n=[i.Promise.resolve(e)],r=e.files;if(t.checkCRC32)for(var a=0;a<r.length;a++)n.push(l(r[a]));return i.Promise.all(n)}).then(function(e){for(var i=e.shift(),a=i.files,o=0;o<a.length;o++){var s=a[o],c=s.fileNameStr,l=r.resolve(s.fileNameStr);n.file(l,s.decompressed,{binary:!0,optimizedBinaryString:!0,date:s.date,dir:s.dir,comment:s.fileCommentStr.length?s.fileCommentStr:null,unixPermissions:s.unixPermissions,dosPermissions:s.dosPermissions,createFolders:t.createFolders}),s.dir||(n.file(l).unsafeOriginalName=c)}return i.zipComment.length&&(n.comment=i.zipComment),n})}},{"./external":6,"./nodejsUtils":14,"./stream/Crc32Probe":25,"./utf8":31,"./utils":32,"./zipEntries":33}],12:[function(e,t,n){var r=e(`../utils`),i=e(`../stream/GenericWorker`);function a(e,t){i.call(this,`Nodejs stream input adapter for `+e),this._upstreamEnded=!1,this._bindStream(t)}r.inherits(a,i),a.prototype._bindStream=function(e){var t=this;(this._stream=e).pause(),e.on(`data`,function(e){t.push({data:e,meta:{percent:0}})}).on(`error`,function(e){t.isPaused?this.generatedError=e:t.error(e)}).on(`end`,function(){t.isPaused?t._upstreamEnded=!0:t.end()})},a.prototype.pause=function(){return!!i.prototype.pause.call(this)&&(this._stream.pause(),!0)},a.prototype.resume=function(){return!!i.prototype.resume.call(this)&&(this._upstreamEnded?this.end():this._stream.resume(),!0)},t.exports=a},{"../stream/GenericWorker":28,"../utils":32}],13:[function(e,t,n){var r=e(`readable-stream`).Readable;function i(e,t,n){r.call(this,t),this._helper=e;var i=this;e.on(`data`,function(e,t){i.push(e)||i._helper.pause(),n&&n(t)}).on(`error`,function(e){i.emit(`error`,e)}).on(`end`,function(){i.push(null)})}e(`../utils`).inherits(i,r),i.prototype._read=function(){this._helper.resume()},t.exports=i},{"../utils":32,"readable-stream":16}],14:[function(e,t,n){t.exports={isNode:typeof Buffer<`u`,newBufferFrom:function(e,t){if(Buffer.from&&Buffer.from!==Uint8Array.from)return Buffer.from(e,t);if(typeof e==`number`)throw Error(`The "data" argument must not be a number`);return new Buffer(e,t)},allocBuffer:function(e){if(Buffer.alloc)return Buffer.alloc(e);var t=new Buffer(e);return t.fill(0),t},isBuffer:function(e){return Buffer.isBuffer(e)},isStream:function(e){return e&&typeof e.on==`function`&&typeof e.pause==`function`&&typeof e.resume==`function`}}},{}],15:[function(e,t,n){function r(e,t,n){var r,i=a.getTypeOf(t),s=a.extend(n||{},c);s.date=s.date||new Date,s.compression!==null&&(s.compression=s.compression.toUpperCase()),typeof s.unixPermissions==`string`&&(s.unixPermissions=parseInt(s.unixPermissions,8)),s.unixPermissions&&16384&s.unixPermissions&&(s.dir=!0),s.dosPermissions&&16&s.dosPermissions&&(s.dir=!0),s.dir&&(e=h(e)),s.createFolders&&(r=m(e))&&g.call(this,r,!0);var d=i===`string`&&!1===s.binary&&!1===s.base64;n&&n.binary!==void 0||(s.binary=!d),(t instanceof l&&t.uncompressedSize===0||s.dir||!t||t.length===0)&&(s.base64=!1,s.binary=!0,t=``,s.compression=`STORE`,i=`string`);var _=null;_=t instanceof l||t instanceof o?t:f.isNode&&f.isStream(t)?new p(e,t):a.prepareContent(e,t,s.binary,s.optimizedBinaryString,s.base64);var v=new u(e,_,s);this.files[e]=v}var i=e(`./utf8`),a=e(`./utils`),o=e(`./stream/GenericWorker`),s=e(`./stream/StreamHelper`),c=e(`./defaults`),l=e(`./compressedObject`),u=e(`./zipObject`),d=e(`./generate`),f=e(`./nodejsUtils`),p=e(`./nodejs/NodejsStreamInputAdapter`),m=function(e){e.slice(-1)===`/`&&(e=e.substring(0,e.length-1));var t=e.lastIndexOf(`/`);return 0<t?e.substring(0,t):``},h=function(e){return e.slice(-1)!==`/`&&(e+=`/`),e},g=function(e,t){return t=t===void 0?c.createFolders:t,e=h(e),this.files[e]||r.call(this,e,null,{dir:!0,createFolders:t}),this.files[e]};function _(e){return Object.prototype.toString.call(e)===`[object RegExp]`}t.exports={load:function(){throw Error(`This method has been removed in JSZip 3.0, please check the upgrade guide.`)},forEach:function(e){var t,n,r;for(t in this.files)r=this.files[t],(n=t.slice(this.root.length,t.length))&&t.slice(0,this.root.length)===this.root&&e(n,r)},filter:function(e){var t=[];return this.forEach(function(n,r){e(n,r)&&t.push(r)}),t},file:function(e,t,n){if(arguments.length!==1)return e=this.root+e,r.call(this,e,t,n),this;if(_(e)){var i=e;return this.filter(function(e,t){return!t.dir&&i.test(e)})}var a=this.files[this.root+e];return a&&!a.dir?a:null},folder:function(e){if(!e)return this;if(_(e))return this.filter(function(t,n){return n.dir&&e.test(t)});var t=this.root+e,n=g.call(this,t),r=this.clone();return r.root=n.name,r},remove:function(e){e=this.root+e;var t=this.files[e];if(t||=(e.slice(-1)!==`/`&&(e+=`/`),this.files[e]),t&&!t.dir)delete this.files[e];else for(var n=this.filter(function(t,n){return n.name.slice(0,e.length)===e}),r=0;r<n.length;r++)delete this.files[n[r].name];return this},generate:function(){throw Error(`This method has been removed in JSZip 3.0, please check the upgrade guide.`)},generateInternalStream:function(e){var t,n={};try{if((n=a.extend(e||{},{streamFiles:!1,compression:`STORE`,compressionOptions:null,type:``,platform:`DOS`,comment:null,mimeType:`application/zip`,encodeFileName:i.utf8encode})).type=n.type.toLowerCase(),n.compression=n.compression.toUpperCase(),n.type===`binarystring`&&(n.type=`string`),!n.type)throw Error(`No output type specified.`);a.checkSupport(n.type),n.platform!==`darwin`&&n.platform!==`freebsd`&&n.platform!==`linux`&&n.platform!==`sunos`||(n.platform=`UNIX`),n.platform===`win32`&&(n.platform=`DOS`);var r=n.comment||this.comment||``;t=d.generateWorker(this,n,r)}catch(e){(t=new o(`error`)).error(e)}return new s(t,n.type||`string`,n.mimeType)},generateAsync:function(e,t){return this.generateInternalStream(e).accumulate(t)},generateNodeStream:function(e,t){return(e||={}).type||(e.type=`nodebuffer`),this.generateInternalStream(e).toNodejsStream(t)}}},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31,"./utils":32,"./zipObject":35}],16:[function(e,t,n){t.exports=e(`stream`)},{stream:void 0}],17:[function(e,t,n){var r=e(`./DataReader`);function i(e){r.call(this,e);for(var t=0;t<this.data.length;t++)e[t]=255&e[t]}e(`../utils`).inherits(i,r),i.prototype.byteAt=function(e){return this.data[this.zero+e]},i.prototype.lastIndexOfSignature=function(e){for(var t=e.charCodeAt(0),n=e.charCodeAt(1),r=e.charCodeAt(2),i=e.charCodeAt(3),a=this.length-4;0<=a;--a)if(this.data[a]===t&&this.data[a+1]===n&&this.data[a+2]===r&&this.data[a+3]===i)return a-this.zero;return-1},i.prototype.readAndCheckSignature=function(e){var t=e.charCodeAt(0),n=e.charCodeAt(1),r=e.charCodeAt(2),i=e.charCodeAt(3),a=this.readData(4);return t===a[0]&&n===a[1]&&r===a[2]&&i===a[3]},i.prototype.readData=function(e){if(this.checkOffset(e),e===0)return[];var t=this.data.slice(this.zero+this.index,this.zero+this.index+e);return this.index+=e,t},t.exports=i},{"../utils":32,"./DataReader":18}],18:[function(e,t,n){var r=e(`../utils`);function i(e){this.data=e,this.length=e.length,this.index=0,this.zero=0}i.prototype={checkOffset:function(e){this.checkIndex(this.index+e)},checkIndex:function(e){if(this.length<this.zero+e||e<0)throw Error(`End of data reached (data length = `+this.length+`, asked index = `+e+`). Corrupted zip ?`)},setIndex:function(e){this.checkIndex(e),this.index=e},skip:function(e){this.setIndex(this.index+e)},byteAt:function(){},readInt:function(e){var t,n=0;for(this.checkOffset(e),t=this.index+e-1;t>=this.index;t--)n=(n<<8)+this.byteAt(t);return this.index+=e,n},readString:function(e){return r.transformTo(`string`,this.readData(e))},readData:function(){},lastIndexOfSignature:function(){},readAndCheckSignature:function(){},readDate:function(){var e=this.readInt(4);return new Date(Date.UTC(1980+(e>>25&127),(e>>21&15)-1,e>>16&31,e>>11&31,e>>5&63,(31&e)<<1))}},t.exports=i},{"../utils":32}],19:[function(e,t,n){var r=e(`./Uint8ArrayReader`);function i(e){r.call(this,e)}e(`../utils`).inherits(i,r),i.prototype.readData=function(e){this.checkOffset(e);var t=this.data.slice(this.zero+this.index,this.zero+this.index+e);return this.index+=e,t},t.exports=i},{"../utils":32,"./Uint8ArrayReader":21}],20:[function(e,t,n){var r=e(`./DataReader`);function i(e){r.call(this,e)}e(`../utils`).inherits(i,r),i.prototype.byteAt=function(e){return this.data.charCodeAt(this.zero+e)},i.prototype.lastIndexOfSignature=function(e){return this.data.lastIndexOf(e)-this.zero},i.prototype.readAndCheckSignature=function(e){return e===this.readData(4)},i.prototype.readData=function(e){this.checkOffset(e);var t=this.data.slice(this.zero+this.index,this.zero+this.index+e);return this.index+=e,t},t.exports=i},{"../utils":32,"./DataReader":18}],21:[function(e,t,n){var r=e(`./ArrayReader`);function i(e){r.call(this,e)}e(`../utils`).inherits(i,r),i.prototype.readData=function(e){if(this.checkOffset(e),e===0)return new Uint8Array;var t=this.data.subarray(this.zero+this.index,this.zero+this.index+e);return this.index+=e,t},t.exports=i},{"../utils":32,"./ArrayReader":17}],22:[function(e,t,n){var r=e(`../utils`),i=e(`../support`),a=e(`./ArrayReader`),o=e(`./StringReader`),s=e(`./NodeBufferReader`),c=e(`./Uint8ArrayReader`);t.exports=function(e){var t=r.getTypeOf(e);return r.checkSupport(t),t!==`string`||i.uint8array?t===`nodebuffer`?new s(e):i.uint8array?new c(r.transformTo(`uint8array`,e)):new a(r.transformTo(`array`,e)):new o(e)}},{"../support":30,"../utils":32,"./ArrayReader":17,"./NodeBufferReader":19,"./StringReader":20,"./Uint8ArrayReader":21}],23:[function(e,t,n){n.LOCAL_FILE_HEADER=`PK`,n.CENTRAL_FILE_HEADER=`PK`,n.CENTRAL_DIRECTORY_END=`PK`,n.ZIP64_CENTRAL_DIRECTORY_LOCATOR=`PK\x07`,n.ZIP64_CENTRAL_DIRECTORY_END=`PK`,n.DATA_DESCRIPTOR=`PK\x07\b`},{}],24:[function(e,t,n){var r=e(`./GenericWorker`),i=e(`../utils`);function a(e){r.call(this,`ConvertWorker to `+e),this.destType=e}i.inherits(a,r),a.prototype.processChunk=function(e){this.push({data:i.transformTo(this.destType,e.data),meta:e.meta})},t.exports=a},{"../utils":32,"./GenericWorker":28}],25:[function(e,t,n){var r=e(`./GenericWorker`),i=e(`../crc32`);function a(){r.call(this,`Crc32Probe`),this.withStreamInfo(`crc32`,0)}e(`../utils`).inherits(a,r),a.prototype.processChunk=function(e){this.streamInfo.crc32=i(e.data,this.streamInfo.crc32||0),this.push(e)},t.exports=a},{"../crc32":4,"../utils":32,"./GenericWorker":28}],26:[function(e,t,n){var r=e(`../utils`),i=e(`./GenericWorker`);function a(e){i.call(this,`DataLengthProbe for `+e),this.propName=e,this.withStreamInfo(e,0)}r.inherits(a,i),a.prototype.processChunk=function(e){if(e){var t=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=t+e.data.length}i.prototype.processChunk.call(this,e)},t.exports=a},{"../utils":32,"./GenericWorker":28}],27:[function(e,t,n){var r=e(`../utils`),i=e(`./GenericWorker`);function a(e){i.call(this,`DataWorker`);var t=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type=``,this._tickScheduled=!1,e.then(function(e){t.dataIsReady=!0,t.data=e,t.max=e&&e.length||0,t.type=r.getTypeOf(e),t.isPaused||t._tickAndRepeat()},function(e){t.error(e)})}r.inherits(a,i),a.prototype.cleanUp=function(){i.prototype.cleanUp.call(this),this.data=null},a.prototype.resume=function(){return!!i.prototype.resume.call(this)&&(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,r.delay(this._tickAndRepeat,[],this)),!0)},a.prototype._tickAndRepeat=function(){this._tickScheduled=!1,this.isPaused||this.isFinished||(this._tick(),this.isFinished||(r.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))},a.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var e=null,t=Math.min(this.max,this.index+16384);if(this.index>=this.max)return this.end();switch(this.type){case`string`:e=this.data.substring(this.index,t);break;case`uint8array`:e=this.data.subarray(this.index,t);break;case`array`:case`nodebuffer`:e=this.data.slice(this.index,t)}return this.index=t,this.push({data:e,meta:{percent:this.max?this.index/this.max*100:0}})},t.exports=a},{"../utils":32,"./GenericWorker":28}],28:[function(e,t,n){function r(e){this.name=e||`default`,this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}r.prototype={push:function(e){this.emit(`data`,e)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit(`end`),this.cleanUp(),this.isFinished=!0}catch(e){this.emit(`error`,e)}return!0},error:function(e){return!this.isFinished&&(this.isPaused?this.generatedError=e:(this.isFinished=!0,this.emit(`error`,e),this.previous&&this.previous.error(e),this.cleanUp()),!0)},on:function(e,t){return this._listeners[e].push(t),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(e,t){if(this._listeners[e])for(var n=0;n<this._listeners[e].length;n++)this._listeners[e][n].call(this,t)},pipe:function(e){return e.registerPrevious(this)},registerPrevious:function(e){if(this.isLocked)throw Error(`The stream '`+this+`' has already been used.`);this.streamInfo=e.streamInfo,this.mergeStreamInfo(),this.previous=e;var t=this;return e.on(`data`,function(e){t.processChunk(e)}),e.on(`end`,function(){t.end()}),e.on(`error`,function(e){t.error(e)}),this},pause:function(){return!this.isPaused&&!this.isFinished&&(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;var e=this.isPaused=!1;return this.generatedError&&(this.error(this.generatedError),e=!0),this.previous&&this.previous.resume(),!e},flush:function(){},processChunk:function(e){this.push(e)},withStreamInfo:function(e,t){return this.extraStreamInfo[e]=t,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var e in this.extraStreamInfo)Object.prototype.hasOwnProperty.call(this.extraStreamInfo,e)&&(this.streamInfo[e]=this.extraStreamInfo[e])},lock:function(){if(this.isLocked)throw Error(`The stream '`+this+`' has already been used.`);this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var e=`Worker `+this.name;return this.previous?this.previous+` -> `+e:e}},t.exports=r},{}],29:[function(e,t,n){var r=e(`../utils`),i=e(`./ConvertWorker`),a=e(`./GenericWorker`),o=e(`../base64`),s=e(`../support`),c=e(`../external`),l=null;if(s.nodestream)try{l=e(`../nodejs/NodejsStreamOutputAdapter`)}catch{}function u(e,t){return new c.Promise(function(n,i){var a=[],s=e._internalType,c=e._outputType,l=e._mimeType;e.on(`data`,function(e,n){a.push(e),t&&t(n)}).on(`error`,function(e){a=[],i(e)}).on(`end`,function(){try{n(function(e,t,n){switch(e){case`blob`:return r.newBlob(r.transformTo(`arraybuffer`,t),n);case`base64`:return o.encode(t);default:return r.transformTo(e,t)}}(c,function(e,t){var n,r=0,i=null,a=0;for(n=0;n<t.length;n++)a+=t[n].length;switch(e){case`string`:return t.join(``);case`array`:return Array.prototype.concat.apply([],t);case`uint8array`:for(i=new Uint8Array(a),n=0;n<t.length;n++)i.set(t[n],r),r+=t[n].length;return i;case`nodebuffer`:return Buffer.concat(t);default:throw Error(`concat : unsupported type '`+e+`'`)}}(s,a),l))}catch(e){i(e)}a=[]}).resume()})}function d(e,t,n){var o=t;switch(t){case`blob`:case`arraybuffer`:o=`uint8array`;break;case`base64`:o=`string`}try{this._internalType=o,this._outputType=t,this._mimeType=n,r.checkSupport(o),this._worker=e.pipe(new i(o)),e.lock()}catch(e){this._worker=new a(`error`),this._worker.error(e)}}d.prototype={accumulate:function(e){return u(this,e)},on:function(e,t){var n=this;return e===`data`?this._worker.on(e,function(e){t.call(n,e.data,e.meta)}):this._worker.on(e,function(){r.delay(t,arguments,n)}),this},resume:function(){return r.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(e){if(r.checkSupport(`nodestream`),this._outputType!==`nodebuffer`)throw Error(this._outputType+` is not supported by this method`);return new l(this,{objectMode:this._outputType!==`nodebuffer`},e)}},t.exports=d},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"../support":30,"../utils":32,"./ConvertWorker":24,"./GenericWorker":28}],30:[function(e,t,n){if(n.base64=!0,n.array=!0,n.string=!0,n.arraybuffer=typeof ArrayBuffer<`u`&&typeof Uint8Array<`u`,n.nodebuffer=typeof Buffer<`u`,n.uint8array=typeof Uint8Array<`u`,typeof ArrayBuffer>`u`)n.blob=!1;else{var r=new ArrayBuffer(0);try{n.blob=new Blob([r],{type:`application/zip`}).size===0}catch{try{var i=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);i.append(r),n.blob=i.getBlob(`application/zip`).size===0}catch{n.blob=!1}}}try{n.nodestream=!!e(`readable-stream`).Readable}catch{n.nodestream=!1}},{"readable-stream":16}],31:[function(e,t,n){for(var r=e(`./utils`),i=e(`./support`),a=e(`./nodejsUtils`),o=e(`./stream/GenericWorker`),s=Array(256),c=0;c<256;c++)s[c]=252<=c?6:248<=c?5:240<=c?4:224<=c?3:192<=c?2:1;s[254]=s[254]=1;function l(){o.call(this,`utf-8 decode`),this.leftOver=null}function u(){o.call(this,`utf-8 encode`)}n.utf8encode=function(e){return i.nodebuffer?a.newBufferFrom(e,`utf-8`):function(e){var t,n,r,a,o,s=e.length,c=0;for(a=0;a<s;a++)(64512&(n=e.charCodeAt(a)))==55296&&a+1<s&&(64512&(r=e.charCodeAt(a+1)))==56320&&(n=65536+(n-55296<<10)+(r-56320),a++),c+=n<128?1:n<2048?2:n<65536?3:4;for(t=i.uint8array?new Uint8Array(c):Array(c),a=o=0;o<c;a++)(64512&(n=e.charCodeAt(a)))==55296&&a+1<s&&(64512&(r=e.charCodeAt(a+1)))==56320&&(n=65536+(n-55296<<10)+(r-56320),a++),n<128?t[o++]=n:(n<2048?t[o++]=192|n>>>6:(n<65536?t[o++]=224|n>>>12:(t[o++]=240|n>>>18,t[o++]=128|n>>>12&63),t[o++]=128|n>>>6&63),t[o++]=128|63&n);return t}(e)},n.utf8decode=function(e){return i.nodebuffer?r.transformTo(`nodebuffer`,e).toString(`utf-8`):function(e){var t,n,i,a,o=e.length,c=Array(2*o);for(t=n=0;t<o;)if((i=e[t++])<128)c[n++]=i;else if(4<(a=s[i]))c[n++]=65533,t+=a-1;else{for(i&=a===2?31:a===3?15:7;1<a&&t<o;)i=i<<6|63&e[t++],a--;1<a?c[n++]=65533:i<65536?c[n++]=i:(i-=65536,c[n++]=55296|i>>10&1023,c[n++]=56320|1023&i)}return c.length!==n&&(c.subarray?c=c.subarray(0,n):c.length=n),r.applyFromCharCode(c)}(e=r.transformTo(i.uint8array?`uint8array`:`array`,e))},r.inherits(l,o),l.prototype.processChunk=function(e){var t=r.transformTo(i.uint8array?`uint8array`:`array`,e.data);if(this.leftOver&&this.leftOver.length){if(i.uint8array){var a=t;(t=new Uint8Array(a.length+this.leftOver.length)).set(this.leftOver,0),t.set(a,this.leftOver.length)}else t=this.leftOver.concat(t);this.leftOver=null}var o=function(e,t){var n;for((t||=e.length)>e.length&&(t=e.length),n=t-1;0<=n&&(192&e[n])==128;)n--;return n<0||n===0?t:n+s[e[n]]>t?n:t}(t),c=t;o!==t.length&&(i.uint8array?(c=t.subarray(0,o),this.leftOver=t.subarray(o,t.length)):(c=t.slice(0,o),this.leftOver=t.slice(o,t.length))),this.push({data:n.utf8decode(c),meta:e.meta})},l.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:n.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)},n.Utf8DecodeWorker=l,r.inherits(u,o),u.prototype.processChunk=function(e){this.push({data:n.utf8encode(e.data),meta:e.meta})},n.Utf8EncodeWorker=u},{"./nodejsUtils":14,"./stream/GenericWorker":28,"./support":30,"./utils":32}],32:[function(e,t,n){var r=e(`./support`),i=e(`./base64`),a=e(`./nodejsUtils`),o=e(`./external`);function s(e){return e}function c(e,t){for(var n=0;n<e.length;++n)t[n]=255&e.charCodeAt(n);return t}e(`setimmediate`),n.newBlob=function(e,t){n.checkSupport(`blob`);try{return new Blob([e],{type:t})}catch{try{var r=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);return r.append(e),r.getBlob(t)}catch{throw Error(`Bug : can't construct the Blob.`)}}};var l={stringifyByChunk:function(e,t,n){var r=[],i=0,a=e.length;if(a<=n)return String.fromCharCode.apply(null,e);for(;i<a;)t===`array`||t===`nodebuffer`?r.push(String.fromCharCode.apply(null,e.slice(i,Math.min(i+n,a)))):r.push(String.fromCharCode.apply(null,e.subarray(i,Math.min(i+n,a)))),i+=n;return r.join(``)},stringifyByChar:function(e){for(var t=``,n=0;n<e.length;n++)t+=String.fromCharCode(e[n]);return t},applyCanBeUsed:{uint8array:function(){try{return r.uint8array&&String.fromCharCode.apply(null,new Uint8Array(1)).length===1}catch{return!1}}(),nodebuffer:function(){try{return r.nodebuffer&&String.fromCharCode.apply(null,a.allocBuffer(1)).length===1}catch{return!1}}()}};function u(e){var t=65536,r=n.getTypeOf(e),i=!0;if(r===`uint8array`?i=l.applyCanBeUsed.uint8array:r===`nodebuffer`&&(i=l.applyCanBeUsed.nodebuffer),i)for(;1<t;)try{return l.stringifyByChunk(e,r,t)}catch{t=Math.floor(t/2)}return l.stringifyByChar(e)}function d(e,t){for(var n=0;n<e.length;n++)t[n]=e[n];return t}n.applyFromCharCode=u;var f={};f.string={string:s,array:function(e){return c(e,Array(e.length))},arraybuffer:function(e){return f.string.uint8array(e).buffer},uint8array:function(e){return c(e,new Uint8Array(e.length))},nodebuffer:function(e){return c(e,a.allocBuffer(e.length))}},f.array={string:u,array:s,arraybuffer:function(e){return new Uint8Array(e).buffer},uint8array:function(e){return new Uint8Array(e)},nodebuffer:function(e){return a.newBufferFrom(e)}},f.arraybuffer={string:function(e){return u(new Uint8Array(e))},array:function(e){return d(new Uint8Array(e),Array(e.byteLength))},arraybuffer:s,uint8array:function(e){return new Uint8Array(e)},nodebuffer:function(e){return a.newBufferFrom(new Uint8Array(e))}},f.uint8array={string:u,array:function(e){return d(e,Array(e.length))},arraybuffer:function(e){return e.buffer},uint8array:s,nodebuffer:function(e){return a.newBufferFrom(e)}},f.nodebuffer={string:u,array:function(e){return d(e,Array(e.length))},arraybuffer:function(e){return f.nodebuffer.uint8array(e).buffer},uint8array:function(e){return d(e,new Uint8Array(e.length))},nodebuffer:s},n.transformTo=function(e,t){return t||=``,e?(n.checkSupport(e),f[n.getTypeOf(t)][e](t)):t},n.resolve=function(e){for(var t=e.split(`/`),n=[],r=0;r<t.length;r++){var i=t[r];i===`.`||i===``&&r!==0&&r!==t.length-1||(i===`..`?n.pop():n.push(i))}return n.join(`/`)},n.getTypeOf=function(e){return typeof e==`string`?`string`:Object.prototype.toString.call(e)===`[object Array]`?`array`:r.nodebuffer&&a.isBuffer(e)?`nodebuffer`:r.uint8array&&e instanceof Uint8Array?`uint8array`:r.arraybuffer&&e instanceof ArrayBuffer?`arraybuffer`:void 0},n.checkSupport=function(e){if(!r[e.toLowerCase()])throw Error(e+` is not supported by this platform`)},n.MAX_VALUE_16BITS=65535,n.MAX_VALUE_32BITS=-1,n.pretty=function(e){var t,n,r=``;for(n=0;n<(e||``).length;n++)r+=`\\x`+((t=e.charCodeAt(n))<16?`0`:``)+t.toString(16).toUpperCase();return r},n.delay=function(e,t,n){setImmediate(function(){e.apply(n||null,t||[])})},n.inherits=function(e,t){function n(){}n.prototype=t.prototype,e.prototype=new n},n.extend=function(){var e,t,n={};for(e=0;e<arguments.length;e++)for(t in arguments[e])Object.prototype.hasOwnProperty.call(arguments[e],t)&&n[t]===void 0&&(n[t]=arguments[e][t]);return n},n.prepareContent=function(e,t,a,s,l){return o.Promise.resolve(t).then(function(e){return r.blob&&(e instanceof Blob||[`[object File]`,`[object Blob]`].indexOf(Object.prototype.toString.call(e))!==-1)&&typeof FileReader<`u`?new o.Promise(function(t,n){var r=new FileReader;r.onload=function(e){t(e.target.result)},r.onerror=function(e){n(e.target.error)},r.readAsArrayBuffer(e)}):e}).then(function(t){var u=n.getTypeOf(t);return u?(u===`arraybuffer`?t=n.transformTo(`uint8array`,t):u===`string`&&(l?t=i.decode(t):a&&!0!==s&&(t=function(e){return c(e,r.uint8array?new Uint8Array(e.length):Array(e.length))}(t))),t):o.Promise.reject(Error(`Can't read the data of '`+e+`'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?`))})}},{"./base64":1,"./external":6,"./nodejsUtils":14,"./support":30,setimmediate:54}],33:[function(e,t,n){var r=e(`./reader/readerFor`),i=e(`./utils`),a=e(`./signature`),o=e(`./zipEntry`),s=e(`./support`);function c(e){this.files=[],this.loadOptions=e}c.prototype={checkSignature:function(e){if(!this.reader.readAndCheckSignature(e)){this.reader.index-=4;var t=this.reader.readString(4);throw Error(`Corrupted zip or bug: unexpected signature (`+i.pretty(t)+`, expected `+i.pretty(e)+`)`)}},isSignature:function(e,t){var n=this.reader.index;this.reader.setIndex(e);var r=this.reader.readString(4)===t;return this.reader.setIndex(n),r},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var e=this.reader.readData(this.zipCommentLength),t=s.uint8array?`uint8array`:`array`,n=i.transformTo(t,e);this.zipComment=this.loadOptions.decodeFileName(n)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var e,t,n,r=this.zip64EndOfCentralSize-44;0<r;)e=this.reader.readInt(2),t=this.reader.readInt(4),n=this.reader.readData(t),this.zip64ExtensibleData[e]={id:e,length:t,value:n}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),1<this.disksCount)throw Error(`Multi-volumes zip are not supported`)},readLocalFiles:function(){var e,t;for(e=0;e<this.files.length;e++)t=this.files[e],this.reader.setIndex(t.localHeaderOffset),this.checkSignature(a.LOCAL_FILE_HEADER),t.readLocalPart(this.reader),t.handleUTF8(),t.processAttributes()},readCentralDir:function(){var e;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(a.CENTRAL_FILE_HEADER);)(e=new o({zip64:this.zip64},this.loadOptions)).readCentralPart(this.reader),this.files.push(e);if(this.centralDirRecords!==this.files.length&&this.centralDirRecords!==0&&this.files.length===0)throw Error(`Corrupted zip or bug: expected `+this.centralDirRecords+` records in central dir, got `+this.files.length)},readEndOfCentral:function(){var e=this.reader.lastIndexOfSignature(a.CENTRAL_DIRECTORY_END);if(e<0)throw this.isSignature(0,a.LOCAL_FILE_HEADER)?Error(`Corrupted zip: can't find end of central directory`):Error(`Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html`);this.reader.setIndex(e);var t=e;if(this.checkSignature(a.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===i.MAX_VALUE_16BITS||this.diskWithCentralDirStart===i.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===i.MAX_VALUE_16BITS||this.centralDirRecords===i.MAX_VALUE_16BITS||this.centralDirSize===i.MAX_VALUE_32BITS||this.centralDirOffset===i.MAX_VALUE_32BITS){if(this.zip64=!0,(e=this.reader.lastIndexOfSignature(a.ZIP64_CENTRAL_DIRECTORY_LOCATOR))<0)throw Error(`Corrupted zip: can't find the ZIP64 end of central directory locator`);if(this.reader.setIndex(e),this.checkSignature(a.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,a.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(a.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw Error(`Corrupted zip: can't find the ZIP64 end of central directory`);this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(a.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var n=this.centralDirOffset+this.centralDirSize;this.zip64&&(n+=20,n+=12+this.zip64EndOfCentralSize);var r=t-n;if(0<r)this.isSignature(t,a.CENTRAL_FILE_HEADER)||(this.reader.zero=r);else if(r<0)throw Error(`Corrupted zip: missing `+Math.abs(r)+` bytes.`)},prepareReader:function(e){this.reader=r(e)},load:function(e){this.prepareReader(e),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},t.exports=c},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utils":32,"./zipEntry":34}],34:[function(e,t,n){var r=e(`./reader/readerFor`),i=e(`./utils`),a=e(`./compressedObject`),o=e(`./crc32`),s=e(`./utf8`),c=e(`./compressions`),l=e(`./support`);function u(e,t){this.options=e,this.loadOptions=t}u.prototype={isEncrypted:function(){return(1&this.bitFlag)==1},useUTF8:function(){return(2048&this.bitFlag)==2048},readLocalPart:function(e){var t,n;if(e.skip(22),this.fileNameLength=e.readInt(2),n=e.readInt(2),this.fileName=e.readData(this.fileNameLength),e.skip(n),this.compressedSize===-1||this.uncompressedSize===-1)throw Error(`Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)`);if((t=function(e){for(var t in c)if(Object.prototype.hasOwnProperty.call(c,t)&&c[t].magic===e)return c[t];return null}(this.compressionMethod))===null)throw Error(`Corrupted zip : compression `+i.pretty(this.compressionMethod)+` unknown (inner file : `+i.transformTo(`string`,this.fileName)+`)`);this.decompressed=new a(this.compressedSize,this.uncompressedSize,this.crc32,t,e.readData(this.compressedSize))},readCentralPart:function(e){this.versionMadeBy=e.readInt(2),e.skip(2),this.bitFlag=e.readInt(2),this.compressionMethod=e.readString(2),this.date=e.readDate(),this.crc32=e.readInt(4),this.compressedSize=e.readInt(4),this.uncompressedSize=e.readInt(4);var t=e.readInt(2);if(this.extraFieldsLength=e.readInt(2),this.fileCommentLength=e.readInt(2),this.diskNumberStart=e.readInt(2),this.internalFileAttributes=e.readInt(2),this.externalFileAttributes=e.readInt(4),this.localHeaderOffset=e.readInt(4),this.isEncrypted())throw Error(`Encrypted zip are not supported`);e.skip(t),this.readExtraFields(e),this.parseZIP64ExtraField(e),this.fileComment=e.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var e=this.versionMadeBy>>8;this.dir=!!(16&this.externalFileAttributes),e==0&&(this.dosPermissions=63&this.externalFileAttributes),e==3&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||this.fileNameStr.slice(-1)!==`/`||(this.dir=!0)},parseZIP64ExtraField:function(){if(this.extraFields[1]){var e=r(this.extraFields[1].value);this.uncompressedSize===i.MAX_VALUE_32BITS&&(this.uncompressedSize=e.readInt(8)),this.compressedSize===i.MAX_VALUE_32BITS&&(this.compressedSize=e.readInt(8)),this.localHeaderOffset===i.MAX_VALUE_32BITS&&(this.localHeaderOffset=e.readInt(8)),this.diskNumberStart===i.MAX_VALUE_32BITS&&(this.diskNumberStart=e.readInt(4))}},readExtraFields:function(e){var t,n,r,i=e.index+this.extraFieldsLength;for(this.extraFields||={};e.index+4<i;)t=e.readInt(2),n=e.readInt(2),r=e.readData(n),this.extraFields[t]={id:t,length:n,value:r};e.setIndex(i)},handleUTF8:function(){var e=l.uint8array?`uint8array`:`array`;if(this.useUTF8())this.fileNameStr=s.utf8decode(this.fileName),this.fileCommentStr=s.utf8decode(this.fileComment);else{var t=this.findExtraFieldUnicodePath();if(t!==null)this.fileNameStr=t;else{var n=i.transformTo(e,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(n)}var r=this.findExtraFieldUnicodeComment();if(r!==null)this.fileCommentStr=r;else{var a=i.transformTo(e,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(a)}}},findExtraFieldUnicodePath:function(){var e=this.extraFields[28789];if(e){var t=r(e.value);return t.readInt(1)===1&&o(this.fileName)===t.readInt(4)?s.utf8decode(t.readData(e.length-5)):null}return null},findExtraFieldUnicodeComment:function(){var e=this.extraFields[25461];if(e){var t=r(e.value);return t.readInt(1)===1&&o(this.fileComment)===t.readInt(4)?s.utf8decode(t.readData(e.length-5)):null}return null}},t.exports=u},{"./compressedObject":2,"./compressions":3,"./crc32":4,"./reader/readerFor":22,"./support":30,"./utf8":31,"./utils":32}],35:[function(e,t,n){function r(e,t,n){this.name=e,this.dir=n.dir,this.date=n.date,this.comment=n.comment,this.unixPermissions=n.unixPermissions,this.dosPermissions=n.dosPermissions,this._data=t,this._dataBinary=n.binary,this.options={compression:n.compression,compressionOptions:n.compressionOptions}}var i=e(`./stream/StreamHelper`),a=e(`./stream/DataWorker`),o=e(`./utf8`),s=e(`./compressedObject`),c=e(`./stream/GenericWorker`);r.prototype={internalStream:function(e){var t=null,n=`string`;try{if(!e)throw Error(`No output type specified.`);var r=(n=e.toLowerCase())===`string`||n===`text`;n!==`binarystring`&&n!==`text`||(n=`string`),t=this._decompressWorker();var a=!this._dataBinary;a&&!r&&(t=t.pipe(new o.Utf8EncodeWorker)),!a&&r&&(t=t.pipe(new o.Utf8DecodeWorker))}catch(e){(t=new c(`error`)).error(e)}return new i(t,n,``)},async:function(e,t){return this.internalStream(e).accumulate(t)},nodeStream:function(e,t){return this.internalStream(e||`nodebuffer`).toNodejsStream(t)},_compressWorker:function(e,t){if(this._data instanceof s&&this._data.compression.magic===e.magic)return this._data.getCompressedWorker();var n=this._decompressWorker();return this._dataBinary||(n=n.pipe(new o.Utf8EncodeWorker)),s.createWorkerFrom(n,e,t)},_decompressWorker:function(){return this._data instanceof s?this._data.getContentWorker():this._data instanceof c?this._data:new a(this._data)}};for(var l=[`asText`,`asBinary`,`asNodeBuffer`,`asUint8Array`,`asArrayBuffer`],u=function(){throw Error(`This method has been removed in JSZip 3.0, please check the upgrade guide.`)},d=0;d<l.length;d++)r.prototype[l[d]]=u;t.exports=r},{"./compressedObject":2,"./stream/DataWorker":27,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31}],36:[function(e,t,n){(function(e){var n,r,i=e.MutationObserver||e.WebKitMutationObserver;if(i){var a=0,o=new i(u),s=e.document.createTextNode(``);o.observe(s,{characterData:!0}),n=function(){s.data=a=++a%2}}else if(e.setImmediate||e.MessageChannel===void 0)n=`document`in e&&`onreadystatechange`in e.document.createElement(`script`)?function(){var t=e.document.createElement(`script`);t.onreadystatechange=function(){u(),t.onreadystatechange=null,t.parentNode.removeChild(t),t=null},e.document.documentElement.appendChild(t)}:function(){setTimeout(u,0)};else{var c=new e.MessageChannel;c.port1.onmessage=u,n=function(){c.port2.postMessage(0)}}var l=[];function u(){var e,t;r=!0;for(var n=l.length;n;){for(t=l,l=[],e=-1;++e<n;)t[e]();n=l.length}r=!1}t.exports=function(e){l.push(e)!==1||r||n()}}).call(this,ne===void 0?typeof self<`u`?self:typeof window<`u`?window:{}:ne)},{}],37:[function(e,t,n){var r=e(`immediate`);function i(){}var a={},o=[`REJECTED`],s=[`FULFILLED`],c=[`PENDING`];function l(e){if(typeof e!=`function`)throw TypeError(`resolver must be a function`);this.state=c,this.queue=[],this.outcome=void 0,e!==i&&p(this,e)}function u(e,t,n){this.promise=e,typeof t==`function`&&(this.onFulfilled=t,this.callFulfilled=this.otherCallFulfilled),typeof n==`function`&&(this.onRejected=n,this.callRejected=this.otherCallRejected)}function d(e,t,n){r(function(){var r;try{r=t(n)}catch(t){return a.reject(e,t)}r===e?a.reject(e,TypeError(`Cannot resolve promise with itself`)):a.resolve(e,r)})}function f(e){var t=e&&e.then;if(e&&(typeof e==`object`||typeof e==`function`)&&typeof t==`function`)return function(){t.apply(e,arguments)}}function p(e,t){var n=!1;function r(t){n||(n=!0,a.reject(e,t))}function i(t){n||(n=!0,a.resolve(e,t))}var o=m(function(){t(i,r)});o.status===`error`&&r(o.value)}function m(e,t){var n={};try{n.value=e(t),n.status=`success`}catch(e){n.status=`error`,n.value=e}return n}(t.exports=l).prototype.finally=function(e){if(typeof e!=`function`)return this;var t=this.constructor;return this.then(function(n){return t.resolve(e()).then(function(){return n})},function(n){return t.resolve(e()).then(function(){throw n})})},l.prototype.catch=function(e){return this.then(null,e)},l.prototype.then=function(e,t){if(typeof e!=`function`&&this.state===s||typeof t!=`function`&&this.state===o)return this;var n=new this.constructor(i);return this.state===c?this.queue.push(new u(n,e,t)):d(n,this.state===s?e:t,this.outcome),n},u.prototype.callFulfilled=function(e){a.resolve(this.promise,e)},u.prototype.otherCallFulfilled=function(e){d(this.promise,this.onFulfilled,e)},u.prototype.callRejected=function(e){a.reject(this.promise,e)},u.prototype.otherCallRejected=function(e){d(this.promise,this.onRejected,e)},a.resolve=function(e,t){var n=m(f,t);if(n.status===`error`)return a.reject(e,n.value);var r=n.value;if(r)p(e,r);else{e.state=s,e.outcome=t;for(var i=-1,o=e.queue.length;++i<o;)e.queue[i].callFulfilled(t)}return e},a.reject=function(e,t){e.state=o,e.outcome=t;for(var n=-1,r=e.queue.length;++n<r;)e.queue[n].callRejected(t);return e},l.resolve=function(e){return e instanceof this?e:a.resolve(new this(i),e)},l.reject=function(e){var t=new this(i);return a.reject(t,e)},l.all=function(e){var t=this;if(Object.prototype.toString.call(e)!==`[object Array]`)return this.reject(TypeError(`must be an array`));var n=e.length,r=!1;if(!n)return this.resolve([]);for(var o=Array(n),s=0,c=-1,l=new this(i);++c<n;)u(e[c],c);return l;function u(e,i){t.resolve(e).then(function(e){o[i]=e,++s!==n||r||(r=!0,a.resolve(l,o))},function(e){r||(r=!0,a.reject(l,e))})}},l.race=function(e){var t=this;if(Object.prototype.toString.call(e)!==`[object Array]`)return this.reject(TypeError(`must be an array`));var n=e.length,r=!1;if(!n)return this.resolve([]);for(var o=-1,s=new this(i);++o<n;)c=e[o],t.resolve(c).then(function(e){r||(r=!0,a.resolve(s,e))},function(e){r||(r=!0,a.reject(s,e))});var c;return s}},{immediate:36}],38:[function(e,t,n){var r={};(0,e(`./lib/utils/common`).assign)(r,e(`./lib/deflate`),e(`./lib/inflate`),e(`./lib/zlib/constants`)),t.exports=r},{"./lib/deflate":39,"./lib/inflate":40,"./lib/utils/common":41,"./lib/zlib/constants":44}],39:[function(e,t,n){var r=e(`./zlib/deflate`),i=e(`./utils/common`),a=e(`./utils/strings`),o=e(`./zlib/messages`),s=e(`./zlib/zstream`),c=Object.prototype.toString,l=0,u=-1,d=0,f=8;function p(e){if(!(this instanceof p))return new p(e);this.options=i.assign({level:u,method:f,chunkSize:16384,windowBits:15,memLevel:8,strategy:d,to:``},e||{});var t=this.options;t.raw&&0<t.windowBits?t.windowBits=-t.windowBits:t.gzip&&0<t.windowBits&&t.windowBits<16&&(t.windowBits+=16),this.err=0,this.msg=``,this.ended=!1,this.chunks=[],this.strm=new s,this.strm.avail_out=0;var n=r.deflateInit2(this.strm,t.level,t.method,t.windowBits,t.memLevel,t.strategy);if(n!==l)throw Error(o[n]);if(t.header&&r.deflateSetHeader(this.strm,t.header),t.dictionary){var m;if(m=typeof t.dictionary==`string`?a.string2buf(t.dictionary):c.call(t.dictionary)===`[object ArrayBuffer]`?new Uint8Array(t.dictionary):t.dictionary,(n=r.deflateSetDictionary(this.strm,m))!==l)throw Error(o[n]);this._dict_set=!0}}function m(e,t){var n=new p(t);if(n.push(e,!0),n.err)throw n.msg||o[n.err];return n.result}p.prototype.push=function(e,t){var n,o,s=this.strm,u=this.options.chunkSize;if(this.ended)return!1;o=t===~~t?t:!0===t?4:0,typeof e==`string`?s.input=a.string2buf(e):c.call(e)===`[object ArrayBuffer]`?s.input=new Uint8Array(e):s.input=e,s.next_in=0,s.avail_in=s.input.length;do{if(s.avail_out===0&&(s.output=new i.Buf8(u),s.next_out=0,s.avail_out=u),(n=r.deflate(s,o))!==1&&n!==l)return this.onEnd(n),!(this.ended=!0);s.avail_out!==0&&(s.avail_in!==0||o!==4&&o!==2)||(this.options.to===`string`?this.onData(a.buf2binstring(i.shrinkBuf(s.output,s.next_out))):this.onData(i.shrinkBuf(s.output,s.next_out)))}while((0<s.avail_in||s.avail_out===0)&&n!==1);return o===4?(n=r.deflateEnd(this.strm),this.onEnd(n),this.ended=!0,n===l):o!==2||(this.onEnd(l),!(s.avail_out=0))},p.prototype.onData=function(e){this.chunks.push(e)},p.prototype.onEnd=function(e){e===l&&(this.options.to===`string`?this.result=this.chunks.join(``):this.result=i.flattenChunks(this.chunks)),this.chunks=[],this.err=e,this.msg=this.strm.msg},n.Deflate=p,n.deflate=m,n.deflateRaw=function(e,t){return(t||={}).raw=!0,m(e,t)},n.gzip=function(e,t){return(t||={}).gzip=!0,m(e,t)}},{"./utils/common":41,"./utils/strings":42,"./zlib/deflate":46,"./zlib/messages":51,"./zlib/zstream":53}],40:[function(e,t,n){var r=e(`./zlib/inflate`),i=e(`./utils/common`),a=e(`./utils/strings`),o=e(`./zlib/constants`),s=e(`./zlib/messages`),c=e(`./zlib/zstream`),l=e(`./zlib/gzheader`),u=Object.prototype.toString;function d(e){if(!(this instanceof d))return new d(e);this.options=i.assign({chunkSize:16384,windowBits:0,to:``},e||{});var t=this.options;t.raw&&0<=t.windowBits&&t.windowBits<16&&(t.windowBits=-t.windowBits,t.windowBits===0&&(t.windowBits=-15)),!(0<=t.windowBits&&t.windowBits<16)||e&&e.windowBits||(t.windowBits+=32),15<t.windowBits&&t.windowBits<48&&!(15&t.windowBits)&&(t.windowBits|=15),this.err=0,this.msg=``,this.ended=!1,this.chunks=[],this.strm=new c,this.strm.avail_out=0;var n=r.inflateInit2(this.strm,t.windowBits);if(n!==o.Z_OK)throw Error(s[n]);this.header=new l,r.inflateGetHeader(this.strm,this.header)}function f(e,t){var n=new d(t);if(n.push(e,!0),n.err)throw n.msg||s[n.err];return n.result}d.prototype.push=function(e,t){var n,s,c,l,d,f,p=this.strm,m=this.options.chunkSize,h=this.options.dictionary,g=!1;if(this.ended)return!1;s=t===~~t?t:!0===t?o.Z_FINISH:o.Z_NO_FLUSH,typeof e==`string`?p.input=a.binstring2buf(e):u.call(e)===`[object ArrayBuffer]`?p.input=new Uint8Array(e):p.input=e,p.next_in=0,p.avail_in=p.input.length;do{if(p.avail_out===0&&(p.output=new i.Buf8(m),p.next_out=0,p.avail_out=m),(n=r.inflate(p,o.Z_NO_FLUSH))===o.Z_NEED_DICT&&h&&(f=typeof h==`string`?a.string2buf(h):u.call(h)===`[object ArrayBuffer]`?new Uint8Array(h):h,n=r.inflateSetDictionary(this.strm,f)),n===o.Z_BUF_ERROR&&!0===g&&(n=o.Z_OK,g=!1),n!==o.Z_STREAM_END&&n!==o.Z_OK)return this.onEnd(n),!(this.ended=!0);p.next_out&&(p.avail_out!==0&&n!==o.Z_STREAM_END&&(p.avail_in!==0||s!==o.Z_FINISH&&s!==o.Z_SYNC_FLUSH)||(this.options.to===`string`?(c=a.utf8border(p.output,p.next_out),l=p.next_out-c,d=a.buf2string(p.output,c),p.next_out=l,p.avail_out=m-l,l&&i.arraySet(p.output,p.output,c,l,0),this.onData(d)):this.onData(i.shrinkBuf(p.output,p.next_out)))),p.avail_in===0&&p.avail_out===0&&(g=!0)}while((0<p.avail_in||p.avail_out===0)&&n!==o.Z_STREAM_END);return n===o.Z_STREAM_END&&(s=o.Z_FINISH),s===o.Z_FINISH?(n=r.inflateEnd(this.strm),this.onEnd(n),this.ended=!0,n===o.Z_OK):s!==o.Z_SYNC_FLUSH||(this.onEnd(o.Z_OK),!(p.avail_out=0))},d.prototype.onData=function(e){this.chunks.push(e)},d.prototype.onEnd=function(e){e===o.Z_OK&&(this.options.to===`string`?this.result=this.chunks.join(``):this.result=i.flattenChunks(this.chunks)),this.chunks=[],this.err=e,this.msg=this.strm.msg},n.Inflate=d,n.inflate=f,n.inflateRaw=function(e,t){return(t||={}).raw=!0,f(e,t)},n.ungzip=f},{"./utils/common":41,"./utils/strings":42,"./zlib/constants":44,"./zlib/gzheader":47,"./zlib/inflate":49,"./zlib/messages":51,"./zlib/zstream":53}],41:[function(e,t,n){var r=typeof Uint8Array<`u`&&typeof Uint16Array<`u`&&typeof Int32Array<`u`;n.assign=function(e){for(var t=Array.prototype.slice.call(arguments,1);t.length;){var n=t.shift();if(n){if(typeof n!=`object`)throw TypeError(n+`must be non-object`);for(var r in n)n.hasOwnProperty(r)&&(e[r]=n[r])}}return e},n.shrinkBuf=function(e,t){return e.length===t?e:e.subarray?e.subarray(0,t):(e.length=t,e)};var i={arraySet:function(e,t,n,r,i){if(t.subarray&&e.subarray)e.set(t.subarray(n,n+r),i);else for(var a=0;a<r;a++)e[i+a]=t[n+a]},flattenChunks:function(e){var t,n,r,i,a,o;for(t=r=0,n=e.length;t<n;t++)r+=e[t].length;for(o=new Uint8Array(r),t=i=0,n=e.length;t<n;t++)a=e[t],o.set(a,i),i+=a.length;return o}},a={arraySet:function(e,t,n,r,i){for(var a=0;a<r;a++)e[i+a]=t[n+a]},flattenChunks:function(e){return[].concat.apply([],e)}};n.setTyped=function(e){e?(n.Buf8=Uint8Array,n.Buf16=Uint16Array,n.Buf32=Int32Array,n.assign(n,i)):(n.Buf8=Array,n.Buf16=Array,n.Buf32=Array,n.assign(n,a))},n.setTyped(r)},{}],42:[function(e,t,n){var r=e(`./common`),i=!0,a=!0;try{String.fromCharCode.apply(null,[0])}catch{i=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{a=!1}for(var o=new r.Buf8(256),s=0;s<256;s++)o[s]=252<=s?6:248<=s?5:240<=s?4:224<=s?3:192<=s?2:1;function c(e,t){if(t<65537&&(e.subarray&&a||!e.subarray&&i))return String.fromCharCode.apply(null,r.shrinkBuf(e,t));for(var n=``,o=0;o<t;o++)n+=String.fromCharCode(e[o]);return n}o[254]=o[254]=1,n.string2buf=function(e){var t,n,i,a,o,s=e.length,c=0;for(a=0;a<s;a++)(64512&(n=e.charCodeAt(a)))==55296&&a+1<s&&(64512&(i=e.charCodeAt(a+1)))==56320&&(n=65536+(n-55296<<10)+(i-56320),a++),c+=n<128?1:n<2048?2:n<65536?3:4;for(t=new r.Buf8(c),a=o=0;o<c;a++)(64512&(n=e.charCodeAt(a)))==55296&&a+1<s&&(64512&(i=e.charCodeAt(a+1)))==56320&&(n=65536+(n-55296<<10)+(i-56320),a++),n<128?t[o++]=n:(n<2048?t[o++]=192|n>>>6:(n<65536?t[o++]=224|n>>>12:(t[o++]=240|n>>>18,t[o++]=128|n>>>12&63),t[o++]=128|n>>>6&63),t[o++]=128|63&n);return t},n.buf2binstring=function(e){return c(e,e.length)},n.binstring2buf=function(e){for(var t=new r.Buf8(e.length),n=0,i=t.length;n<i;n++)t[n]=e.charCodeAt(n);return t},n.buf2string=function(e,t){var n,r,i,a,s=t||e.length,l=Array(2*s);for(n=r=0;n<s;)if((i=e[n++])<128)l[r++]=i;else if(4<(a=o[i]))l[r++]=65533,n+=a-1;else{for(i&=a===2?31:a===3?15:7;1<a&&n<s;)i=i<<6|63&e[n++],a--;1<a?l[r++]=65533:i<65536?l[r++]=i:(i-=65536,l[r++]=55296|i>>10&1023,l[r++]=56320|1023&i)}return c(l,r)},n.utf8border=function(e,t){var n;for((t||=e.length)>e.length&&(t=e.length),n=t-1;0<=n&&(192&e[n])==128;)n--;return n<0||n===0?t:n+o[e[n]]>t?n:t}},{"./common":41}],43:[function(e,t,n){t.exports=function(e,t,n,r){for(var i=65535&e|0,a=e>>>16&65535|0,o=0;n!==0;){for(n-=o=2e3<n?2e3:n;a=a+(i=i+t[r++]|0)|0,--o;);i%=65521,a%=65521}return i|a<<16|0}},{}],44:[function(e,t,n){t.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],45:[function(e,t,n){var r=function(){for(var e,t=[],n=0;n<256;n++){e=n;for(var r=0;r<8;r++)e=1&e?3988292384^e>>>1:e>>>1;t[n]=e}return t}();t.exports=function(e,t,n,i){var a=r,o=i+n;e^=-1;for(var s=i;s<o;s++)e=e>>>8^a[255&(e^t[s])];return-1^e}},{}],46:[function(e,t,n){var r,i=e(`../utils/common`),a=e(`./trees`),o=e(`./adler32`),s=e(`./crc32`),c=e(`./messages`),l=0,u=4,d=0,f=-2,p=-1,m=4,h=2,g=8,_=9,v=286,y=30,b=19,x=2*v+1,S=15,C=3,w=258,T=w+C+1,E=42,D=113,O=1,k=2,A=3,j=4;function M(e,t){return e.msg=c[t],t}function N(e){return(e<<1)-(4<e?9:0)}function P(e){for(var t=e.length;0<=--t;)e[t]=0}function F(e){var t=e.state,n=t.pending;n>e.avail_out&&(n=e.avail_out),n!==0&&(i.arraySet(e.output,t.pending_buf,t.pending_out,n,e.next_out),e.next_out+=n,t.pending_out+=n,e.total_out+=n,e.avail_out-=n,t.pending-=n,t.pending===0&&(t.pending_out=0))}function I(e,t){a._tr_flush_block(e,0<=e.block_start?e.block_start:-1,e.strstart-e.block_start,t),e.block_start=e.strstart,F(e.strm)}function L(e,t){e.pending_buf[e.pending++]=t}function R(e,t){e.pending_buf[e.pending++]=t>>>8&255,e.pending_buf[e.pending++]=255&t}function z(e,t){var n,r,i=e.max_chain_length,a=e.strstart,o=e.prev_length,s=e.nice_match,c=e.strstart>e.w_size-T?e.strstart-(e.w_size-T):0,l=e.window,u=e.w_mask,d=e.prev,f=e.strstart+w,p=l[a+o-1],m=l[a+o];e.prev_length>=e.good_match&&(i>>=2),s>e.lookahead&&(s=e.lookahead);do if(l[(n=t)+o]===m&&l[n+o-1]===p&&l[n]===l[a]&&l[++n]===l[a+1]){a+=2,n++;do;while(l[++a]===l[++n]&&l[++a]===l[++n]&&l[++a]===l[++n]&&l[++a]===l[++n]&&l[++a]===l[++n]&&l[++a]===l[++n]&&l[++a]===l[++n]&&l[++a]===l[++n]&&a<f);if(r=w-(f-a),a=f-w,o<r){if(e.match_start=t,s<=(o=r))break;p=l[a+o-1],m=l[a+o]}}while((t=d[t&u])>c&&--i!=0);return o<=e.lookahead?o:e.lookahead}function B(e){var t,n,r,a,c,l,u,d,f,p,m=e.w_size;do{if(a=e.window_size-e.lookahead-e.strstart,e.strstart>=m+(m-T)){for(i.arraySet(e.window,e.window,m,m,0),e.match_start-=m,e.strstart-=m,e.block_start-=m,t=n=e.hash_size;r=e.head[--t],e.head[t]=m<=r?r-m:0,--n;);for(t=n=m;r=e.prev[--t],e.prev[t]=m<=r?r-m:0,--n;);a+=m}if(e.strm.avail_in===0)break;if(l=e.strm,u=e.window,d=e.strstart+e.lookahead,f=a,p=void 0,p=l.avail_in,f<p&&(p=f),n=p===0?0:(l.avail_in-=p,i.arraySet(u,l.input,l.next_in,p,d),l.state.wrap===1?l.adler=o(l.adler,u,p,d):l.state.wrap===2&&(l.adler=s(l.adler,u,p,d)),l.next_in+=p,l.total_in+=p,p),e.lookahead+=n,e.lookahead+e.insert>=C)for(c=e.strstart-e.insert,e.ins_h=e.window[c],e.ins_h=(e.ins_h<<e.hash_shift^e.window[c+1])&e.hash_mask;e.insert&&(e.ins_h=(e.ins_h<<e.hash_shift^e.window[c+C-1])&e.hash_mask,e.prev[c&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=c,c++,e.insert--,!(e.lookahead+e.insert<C)););}while(e.lookahead<T&&e.strm.avail_in!==0)}function V(e,t){for(var n,r;;){if(e.lookahead<T){if(B(e),e.lookahead<T&&t===l)return O;if(e.lookahead===0)break}if(n=0,e.lookahead>=C&&(e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+C-1])&e.hash_mask,n=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart),n!==0&&e.strstart-n<=e.w_size-T&&(e.match_length=z(e,n)),e.match_length>=C)if(r=a._tr_tally(e,e.strstart-e.match_start,e.match_length-C),e.lookahead-=e.match_length,e.match_length<=e.max_lazy_match&&e.lookahead>=C){for(e.match_length--;e.strstart++,e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+C-1])&e.hash_mask,n=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart,--e.match_length!=0;);e.strstart++}else e.strstart+=e.match_length,e.match_length=0,e.ins_h=e.window[e.strstart],e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+1])&e.hash_mask;else r=a._tr_tally(e,0,e.window[e.strstart]),e.lookahead--,e.strstart++;if(r&&(I(e,!1),e.strm.avail_out===0))return O}return e.insert=e.strstart<C-1?e.strstart:C-1,t===u?(I(e,!0),e.strm.avail_out===0?A:j):e.last_lit&&(I(e,!1),e.strm.avail_out===0)?O:k}function H(e,t){for(var n,r,i;;){if(e.lookahead<T){if(B(e),e.lookahead<T&&t===l)return O;if(e.lookahead===0)break}if(n=0,e.lookahead>=C&&(e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+C-1])&e.hash_mask,n=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart),e.prev_length=e.match_length,e.prev_match=e.match_start,e.match_length=C-1,n!==0&&e.prev_length<e.max_lazy_match&&e.strstart-n<=e.w_size-T&&(e.match_length=z(e,n),e.match_length<=5&&(e.strategy===1||e.match_length===C&&4096<e.strstart-e.match_start)&&(e.match_length=C-1)),e.prev_length>=C&&e.match_length<=e.prev_length){for(i=e.strstart+e.lookahead-C,r=a._tr_tally(e,e.strstart-1-e.prev_match,e.prev_length-C),e.lookahead-=e.prev_length-1,e.prev_length-=2;++e.strstart<=i&&(e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+C-1])&e.hash_mask,n=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart),--e.prev_length!=0;);if(e.match_available=0,e.match_length=C-1,e.strstart++,r&&(I(e,!1),e.strm.avail_out===0))return O}else if(e.match_available){if((r=a._tr_tally(e,0,e.window[e.strstart-1]))&&I(e,!1),e.strstart++,e.lookahead--,e.strm.avail_out===0)return O}else e.match_available=1,e.strstart++,e.lookahead--}return e.match_available&&=(r=a._tr_tally(e,0,e.window[e.strstart-1]),0),e.insert=e.strstart<C-1?e.strstart:C-1,t===u?(I(e,!0),e.strm.avail_out===0?A:j):e.last_lit&&(I(e,!1),e.strm.avail_out===0)?O:k}function U(e,t,n,r,i){this.good_length=e,this.max_lazy=t,this.nice_length=n,this.max_chain=r,this.func=i}function ee(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=g,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new i.Buf16(2*x),this.dyn_dtree=new i.Buf16(2*(2*y+1)),this.bl_tree=new i.Buf16(2*(2*b+1)),P(this.dyn_ltree),P(this.dyn_dtree),P(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new i.Buf16(S+1),this.heap=new i.Buf16(2*v+1),P(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new i.Buf16(2*v+1),P(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function te(e){var t;return e&&e.state?(e.total_in=e.total_out=0,e.data_type=h,(t=e.state).pending=0,t.pending_out=0,t.wrap<0&&(t.wrap=-t.wrap),t.status=t.wrap?E:D,e.adler=t.wrap===2?0:1,t.last_flush=l,a._tr_init(t),d):M(e,f)}function ne(e){var t=te(e);return t===d&&function(e){e.window_size=2*e.w_size,P(e.head),e.max_lazy_match=r[e.level].max_lazy,e.good_match=r[e.level].good_length,e.nice_match=r[e.level].nice_length,e.max_chain_length=r[e.level].max_chain,e.strstart=0,e.block_start=0,e.lookahead=0,e.insert=0,e.match_length=e.prev_length=C-1,e.match_available=0,e.ins_h=0}(e.state),t}function re(e,t,n,r,a,o){if(!e)return f;var s=1;if(t===p&&(t=6),r<0?(s=0,r=-r):15<r&&(s=2,r-=16),a<1||_<a||n!==g||r<8||15<r||t<0||9<t||o<0||m<o)return M(e,f);r===8&&(r=9);var c=new ee;return(e.state=c).strm=e,c.wrap=s,c.gzhead=null,c.w_bits=r,c.w_size=1<<c.w_bits,c.w_mask=c.w_size-1,c.hash_bits=a+7,c.hash_size=1<<c.hash_bits,c.hash_mask=c.hash_size-1,c.hash_shift=~~((c.hash_bits+C-1)/C),c.window=new i.Buf8(2*c.w_size),c.head=new i.Buf16(c.hash_size),c.prev=new i.Buf16(c.w_size),c.lit_bufsize=1<<a+6,c.pending_buf_size=4*c.lit_bufsize,c.pending_buf=new i.Buf8(c.pending_buf_size),c.d_buf=1*c.lit_bufsize,c.l_buf=3*c.lit_bufsize,c.level=t,c.strategy=o,c.method=n,ne(e)}r=[new U(0,0,0,0,function(e,t){var n=65535;for(n>e.pending_buf_size-5&&(n=e.pending_buf_size-5);;){if(e.lookahead<=1){if(B(e),e.lookahead===0&&t===l)return O;if(e.lookahead===0)break}e.strstart+=e.lookahead,e.lookahead=0;var r=e.block_start+n;if((e.strstart===0||e.strstart>=r)&&(e.lookahead=e.strstart-r,e.strstart=r,I(e,!1),e.strm.avail_out===0)||e.strstart-e.block_start>=e.w_size-T&&(I(e,!1),e.strm.avail_out===0))return O}return e.insert=0,t===u?(I(e,!0),e.strm.avail_out===0?A:j):(e.strstart>e.block_start&&(I(e,!1),e.strm.avail_out),O)}),new U(4,4,8,4,V),new U(4,5,16,8,V),new U(4,6,32,32,V),new U(4,4,16,16,H),new U(8,16,32,32,H),new U(8,16,128,128,H),new U(8,32,128,256,H),new U(32,128,258,1024,H),new U(32,258,258,4096,H)],n.deflateInit=function(e,t){return re(e,t,g,15,8,0)},n.deflateInit2=re,n.deflateReset=ne,n.deflateResetKeep=te,n.deflateSetHeader=function(e,t){return e&&e.state&&e.state.wrap===2?(e.state.gzhead=t,d):f},n.deflate=function(e,t){var n,i,o,c;if(!e||!e.state||5<t||t<0)return e?M(e,f):f;if(i=e.state,!e.output||!e.input&&e.avail_in!==0||i.status===666&&t!==u)return M(e,e.avail_out===0?-5:f);if(i.strm=e,n=i.last_flush,i.last_flush=t,i.status===E)if(i.wrap===2)e.adler=0,L(i,31),L(i,139),L(i,8),i.gzhead?(L(i,+!!i.gzhead.text+(i.gzhead.hcrc?2:0)+(i.gzhead.extra?4:0)+(i.gzhead.name?8:0)+(i.gzhead.comment?16:0)),L(i,255&i.gzhead.time),L(i,i.gzhead.time>>8&255),L(i,i.gzhead.time>>16&255),L(i,i.gzhead.time>>24&255),L(i,i.level===9?2:2<=i.strategy||i.level<2?4:0),L(i,255&i.gzhead.os),i.gzhead.extra&&i.gzhead.extra.length&&(L(i,255&i.gzhead.extra.length),L(i,i.gzhead.extra.length>>8&255)),i.gzhead.hcrc&&(e.adler=s(e.adler,i.pending_buf,i.pending,0)),i.gzindex=0,i.status=69):(L(i,0),L(i,0),L(i,0),L(i,0),L(i,0),L(i,i.level===9?2:2<=i.strategy||i.level<2?4:0),L(i,3),i.status=D);else{var p=g+(i.w_bits-8<<4)<<8;p|=(2<=i.strategy||i.level<2?0:i.level<6?1:i.level===6?2:3)<<6,i.strstart!==0&&(p|=32),p+=31-p%31,i.status=D,R(i,p),i.strstart!==0&&(R(i,e.adler>>>16),R(i,65535&e.adler)),e.adler=1}if(i.status===69)if(i.gzhead.extra){for(o=i.pending;i.gzindex<(65535&i.gzhead.extra.length)&&(i.pending!==i.pending_buf_size||(i.gzhead.hcrc&&i.pending>o&&(e.adler=s(e.adler,i.pending_buf,i.pending-o,o)),F(e),o=i.pending,i.pending!==i.pending_buf_size));)L(i,255&i.gzhead.extra[i.gzindex]),i.gzindex++;i.gzhead.hcrc&&i.pending>o&&(e.adler=s(e.adler,i.pending_buf,i.pending-o,o)),i.gzindex===i.gzhead.extra.length&&(i.gzindex=0,i.status=73)}else i.status=73;if(i.status===73)if(i.gzhead.name){o=i.pending;do{if(i.pending===i.pending_buf_size&&(i.gzhead.hcrc&&i.pending>o&&(e.adler=s(e.adler,i.pending_buf,i.pending-o,o)),F(e),o=i.pending,i.pending===i.pending_buf_size)){c=1;break}c=i.gzindex<i.gzhead.name.length?255&i.gzhead.name.charCodeAt(i.gzindex++):0,L(i,c)}while(c!==0);i.gzhead.hcrc&&i.pending>o&&(e.adler=s(e.adler,i.pending_buf,i.pending-o,o)),c===0&&(i.gzindex=0,i.status=91)}else i.status=91;if(i.status===91)if(i.gzhead.comment){o=i.pending;do{if(i.pending===i.pending_buf_size&&(i.gzhead.hcrc&&i.pending>o&&(e.adler=s(e.adler,i.pending_buf,i.pending-o,o)),F(e),o=i.pending,i.pending===i.pending_buf_size)){c=1;break}c=i.gzindex<i.gzhead.comment.length?255&i.gzhead.comment.charCodeAt(i.gzindex++):0,L(i,c)}while(c!==0);i.gzhead.hcrc&&i.pending>o&&(e.adler=s(e.adler,i.pending_buf,i.pending-o,o)),c===0&&(i.status=103)}else i.status=103;if(i.status===103&&(i.gzhead.hcrc?(i.pending+2>i.pending_buf_size&&F(e),i.pending+2<=i.pending_buf_size&&(L(i,255&e.adler),L(i,e.adler>>8&255),e.adler=0,i.status=D)):i.status=D),i.pending!==0){if(F(e),e.avail_out===0)return i.last_flush=-1,d}else if(e.avail_in===0&&N(t)<=N(n)&&t!==u)return M(e,-5);if(i.status===666&&e.avail_in!==0)return M(e,-5);if(e.avail_in!==0||i.lookahead!==0||t!==l&&i.status!==666){var m=i.strategy===2?function(e,t){for(var n;;){if(e.lookahead===0&&(B(e),e.lookahead===0)){if(t===l)return O;break}if(e.match_length=0,n=a._tr_tally(e,0,e.window[e.strstart]),e.lookahead--,e.strstart++,n&&(I(e,!1),e.strm.avail_out===0))return O}return e.insert=0,t===u?(I(e,!0),e.strm.avail_out===0?A:j):e.last_lit&&(I(e,!1),e.strm.avail_out===0)?O:k}(i,t):i.strategy===3?function(e,t){for(var n,r,i,o,s=e.window;;){if(e.lookahead<=w){if(B(e),e.lookahead<=w&&t===l)return O;if(e.lookahead===0)break}if(e.match_length=0,e.lookahead>=C&&0<e.strstart&&(r=s[i=e.strstart-1])===s[++i]&&r===s[++i]&&r===s[++i]){o=e.strstart+w;do;while(r===s[++i]&&r===s[++i]&&r===s[++i]&&r===s[++i]&&r===s[++i]&&r===s[++i]&&r===s[++i]&&r===s[++i]&&i<o);e.match_length=w-(o-i),e.match_length>e.lookahead&&(e.match_length=e.lookahead)}if(e.match_length>=C?(n=a._tr_tally(e,1,e.match_length-C),e.lookahead-=e.match_length,e.strstart+=e.match_length,e.match_length=0):(n=a._tr_tally(e,0,e.window[e.strstart]),e.lookahead--,e.strstart++),n&&(I(e,!1),e.strm.avail_out===0))return O}return e.insert=0,t===u?(I(e,!0),e.strm.avail_out===0?A:j):e.last_lit&&(I(e,!1),e.strm.avail_out===0)?O:k}(i,t):r[i.level].func(i,t);if(m!==A&&m!==j||(i.status=666),m===O||m===A)return e.avail_out===0&&(i.last_flush=-1),d;if(m===k&&(t===1?a._tr_align(i):t!==5&&(a._tr_stored_block(i,0,0,!1),t===3&&(P(i.head),i.lookahead===0&&(i.strstart=0,i.block_start=0,i.insert=0))),F(e),e.avail_out===0))return i.last_flush=-1,d}return t===u?i.wrap<=0?1:(i.wrap===2?(L(i,255&e.adler),L(i,e.adler>>8&255),L(i,e.adler>>16&255),L(i,e.adler>>24&255),L(i,255&e.total_in),L(i,e.total_in>>8&255),L(i,e.total_in>>16&255),L(i,e.total_in>>24&255)):(R(i,e.adler>>>16),R(i,65535&e.adler)),F(e),0<i.wrap&&(i.wrap=-i.wrap),i.pending===0?1:d):d},n.deflateEnd=function(e){var t;return e&&e.state?(t=e.state.status)!==E&&t!==69&&t!==73&&t!==91&&t!==103&&t!==D&&t!==666?M(e,f):(e.state=null,t===D?M(e,-3):d):f},n.deflateSetDictionary=function(e,t){var n,r,a,s,c,l,u,p,m=t.length;if(!e||!e.state||(s=(n=e.state).wrap)===2||s===1&&n.status!==E||n.lookahead)return f;for(s===1&&(e.adler=o(e.adler,t,m,0)),n.wrap=0,m>=n.w_size&&(s===0&&(P(n.head),n.strstart=0,n.block_start=0,n.insert=0),p=new i.Buf8(n.w_size),i.arraySet(p,t,m-n.w_size,n.w_size,0),t=p,m=n.w_size),c=e.avail_in,l=e.next_in,u=e.input,e.avail_in=m,e.next_in=0,e.input=t,B(n);n.lookahead>=C;){for(r=n.strstart,a=n.lookahead-(C-1);n.ins_h=(n.ins_h<<n.hash_shift^n.window[r+C-1])&n.hash_mask,n.prev[r&n.w_mask]=n.head[n.ins_h],n.head[n.ins_h]=r,r++,--a;);n.strstart=r,n.lookahead=C-1,B(n)}return n.strstart+=n.lookahead,n.block_start=n.strstart,n.insert=n.lookahead,n.lookahead=0,n.match_length=n.prev_length=C-1,n.match_available=0,e.next_in=l,e.input=u,e.avail_in=c,n.wrap=s,d},n.deflateInfo=`pako deflate (from Nodeca project)`},{"../utils/common":41,"./adler32":43,"./crc32":45,"./messages":51,"./trees":52}],47:[function(e,t,n){t.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name=``,this.comment=``,this.hcrc=0,this.done=!1}},{}],48:[function(e,t,n){t.exports=function(e,t){var n=e.state,r=e.next_in,i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T=e.input,E;i=r+(e.avail_in-5),a=e.next_out,E=e.output,o=a-(t-e.avail_out),s=a+(e.avail_out-257),c=n.dmax,l=n.wsize,u=n.whave,d=n.wnext,f=n.window,p=n.hold,m=n.bits,h=n.lencode,g=n.distcode,_=(1<<n.lenbits)-1,v=(1<<n.distbits)-1;e:do{m<15&&(p+=T[r++]<<m,m+=8,p+=T[r++]<<m,m+=8),y=h[p&_];t:for(;;){if(p>>>=b=y>>>24,m-=b,(b=y>>>16&255)==0)E[a++]=65535&y;else{if(!(16&b)){if(!(64&b)){y=h[(65535&y)+(p&(1<<b)-1)];continue t}if(32&b){n.mode=12;break e}e.msg=`invalid literal/length code`,n.mode=30;break e}x=65535&y,(b&=15)&&(m<b&&(p+=T[r++]<<m,m+=8),x+=p&(1<<b)-1,p>>>=b,m-=b),m<15&&(p+=T[r++]<<m,m+=8,p+=T[r++]<<m,m+=8),y=g[p&v];r:for(;;){if(p>>>=b=y>>>24,m-=b,!(16&(b=y>>>16&255))){if(!(64&b)){y=g[(65535&y)+(p&(1<<b)-1)];continue r}e.msg=`invalid distance code`,n.mode=30;break e}if(S=65535&y,m<(b&=15)&&(p+=T[r++]<<m,(m+=8)<b&&(p+=T[r++]<<m,m+=8)),c<(S+=p&(1<<b)-1)){e.msg=`invalid distance too far back`,n.mode=30;break e}if(p>>>=b,m-=b,(b=a-o)<S){if(u<(b=S-b)&&n.sane){e.msg=`invalid distance too far back`,n.mode=30;break e}if(w=f,(C=0)===d){if(C+=l-b,b<x){for(x-=b;E[a++]=f[C++],--b;);C=a-S,w=E}}else if(d<b){if(C+=l+d-b,(b-=d)<x){for(x-=b;E[a++]=f[C++],--b;);if(C=0,d<x){for(x-=b=d;E[a++]=f[C++],--b;);C=a-S,w=E}}}else if(C+=d-b,b<x){for(x-=b;E[a++]=f[C++],--b;);C=a-S,w=E}for(;2<x;)E[a++]=w[C++],E[a++]=w[C++],E[a++]=w[C++],x-=3;x&&(E[a++]=w[C++],1<x&&(E[a++]=w[C++]))}else{for(C=a-S;E[a++]=E[C++],E[a++]=E[C++],E[a++]=E[C++],2<(x-=3););x&&(E[a++]=E[C++],1<x&&(E[a++]=E[C++]))}break}}break}}while(r<i&&a<s);r-=x=m>>3,p&=(1<<(m-=x<<3))-1,e.next_in=r,e.next_out=a,e.avail_in=r<i?i-r+5:5-(r-i),e.avail_out=a<s?s-a+257:257-(a-s),n.hold=p,n.bits=m}},{}],49:[function(e,t,n){var r=e(`../utils/common`),i=e(`./adler32`),a=e(`./crc32`),o=e(`./inffast`),s=e(`./inftrees`),c=1,l=2,u=0,d=-2,f=1,p=852,m=592;function h(e){return(e>>>24&255)+(e>>>8&65280)+((65280&e)<<8)+((255&e)<<24)}function g(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new r.Buf16(320),this.work=new r.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function _(e){var t;return e&&e.state?(t=e.state,e.total_in=e.total_out=t.total=0,e.msg=``,t.wrap&&(e.adler=1&t.wrap),t.mode=f,t.last=0,t.havedict=0,t.dmax=32768,t.head=null,t.hold=0,t.bits=0,t.lencode=t.lendyn=new r.Buf32(p),t.distcode=t.distdyn=new r.Buf32(m),t.sane=1,t.back=-1,u):d}function v(e){var t;return e&&e.state?((t=e.state).wsize=0,t.whave=0,t.wnext=0,_(e)):d}function y(e,t){var n,r;return e&&e.state?(r=e.state,t<0?(n=0,t=-t):(n=1+(t>>4),t<48&&(t&=15)),t&&(t<8||15<t)?d:(r.window!==null&&r.wbits!==t&&(r.window=null),r.wrap=n,r.wbits=t,v(e))):d}function b(e,t){var n,r;return e?(r=new g,(e.state=r).window=null,(n=y(e,t))!==u&&(e.state=null),n):d}var x,S,C=!0;function w(e){if(C){var t;for(x=new r.Buf32(512),S=new r.Buf32(32),t=0;t<144;)e.lens[t++]=8;for(;t<256;)e.lens[t++]=9;for(;t<280;)e.lens[t++]=7;for(;t<288;)e.lens[t++]=8;for(s(c,e.lens,0,288,x,0,e.work,{bits:9}),t=0;t<32;)e.lens[t++]=5;s(l,e.lens,0,32,S,0,e.work,{bits:5}),C=!1}e.lencode=x,e.lenbits=9,e.distcode=S,e.distbits=5}function T(e,t,n,i){var a,o=e.state;return o.window===null&&(o.wsize=1<<o.wbits,o.wnext=0,o.whave=0,o.window=new r.Buf8(o.wsize)),i>=o.wsize?(r.arraySet(o.window,t,n-o.wsize,o.wsize,0),o.wnext=0,o.whave=o.wsize):(i<(a=o.wsize-o.wnext)&&(a=i),r.arraySet(o.window,t,n-i,a,o.wnext),(i-=a)?(r.arraySet(o.window,t,n-i,i,0),o.wnext=i,o.whave=o.wsize):(o.wnext+=a,o.wnext===o.wsize&&(o.wnext=0),o.whave<o.wsize&&(o.whave+=a))),0}n.inflateReset=v,n.inflateReset2=y,n.inflateResetKeep=_,n.inflateInit=function(e){return b(e,15)},n.inflateInit2=b,n.inflate=function(e,t){var n,p,m,g,_,v,y,b,x,S,C,E,D,O,k,A,j,M,N,P,F,I,L,R,z=0,B=new r.Buf8(4),V=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!e||!e.state||!e.output||!e.input&&e.avail_in!==0)return d;(n=e.state).mode===12&&(n.mode=13),_=e.next_out,m=e.output,y=e.avail_out,g=e.next_in,p=e.input,v=e.avail_in,b=n.hold,x=n.bits,S=v,C=y,I=u;e:for(;;)switch(n.mode){case f:if(n.wrap===0){n.mode=13;break}for(;x<16;){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}if(2&n.wrap&&b===35615){B[n.check=0]=255&b,B[1]=b>>>8&255,n.check=a(n.check,B,2,0),x=b=0,n.mode=2;break}if(n.flags=0,n.head&&(n.head.done=!1),!(1&n.wrap)||(((255&b)<<8)+(b>>8))%31){e.msg=`incorrect header check`,n.mode=30;break}if((15&b)!=8){e.msg=`unknown compression method`,n.mode=30;break}if(x-=4,F=8+(15&(b>>>=4)),n.wbits===0)n.wbits=F;else if(F>n.wbits){e.msg=`invalid window size`,n.mode=30;break}n.dmax=1<<F,e.adler=n.check=1,n.mode=512&b?10:12,x=b=0;break;case 2:for(;x<16;){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}if(n.flags=b,(255&n.flags)!=8){e.msg=`unknown compression method`,n.mode=30;break}if(57344&n.flags){e.msg=`unknown header flags set`,n.mode=30;break}n.head&&(n.head.text=b>>8&1),512&n.flags&&(B[0]=255&b,B[1]=b>>>8&255,n.check=a(n.check,B,2,0)),x=b=0,n.mode=3;case 3:for(;x<32;){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}n.head&&(n.head.time=b),512&n.flags&&(B[0]=255&b,B[1]=b>>>8&255,B[2]=b>>>16&255,B[3]=b>>>24&255,n.check=a(n.check,B,4,0)),x=b=0,n.mode=4;case 4:for(;x<16;){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}n.head&&(n.head.xflags=255&b,n.head.os=b>>8),512&n.flags&&(B[0]=255&b,B[1]=b>>>8&255,n.check=a(n.check,B,2,0)),x=b=0,n.mode=5;case 5:if(1024&n.flags){for(;x<16;){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}n.length=b,n.head&&(n.head.extra_len=b),512&n.flags&&(B[0]=255&b,B[1]=b>>>8&255,n.check=a(n.check,B,2,0)),x=b=0}else n.head&&(n.head.extra=null);n.mode=6;case 6:if(1024&n.flags&&(v<(E=n.length)&&(E=v),E&&(n.head&&(F=n.head.extra_len-n.length,n.head.extra||(n.head.extra=Array(n.head.extra_len)),r.arraySet(n.head.extra,p,g,E,F)),512&n.flags&&(n.check=a(n.check,p,E,g)),v-=E,g+=E,n.length-=E),n.length))break e;n.length=0,n.mode=7;case 7:if(2048&n.flags){if(v===0)break e;for(E=0;F=p[g+E++],n.head&&F&&n.length<65536&&(n.head.name+=String.fromCharCode(F)),F&&E<v;);if(512&n.flags&&(n.check=a(n.check,p,E,g)),v-=E,g+=E,F)break e}else n.head&&(n.head.name=null);n.length=0,n.mode=8;case 8:if(4096&n.flags){if(v===0)break e;for(E=0;F=p[g+E++],n.head&&F&&n.length<65536&&(n.head.comment+=String.fromCharCode(F)),F&&E<v;);if(512&n.flags&&(n.check=a(n.check,p,E,g)),v-=E,g+=E,F)break e}else n.head&&(n.head.comment=null);n.mode=9;case 9:if(512&n.flags){for(;x<16;){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}if(b!==(65535&n.check)){e.msg=`header crc mismatch`,n.mode=30;break}x=b=0}n.head&&(n.head.hcrc=n.flags>>9&1,n.head.done=!0),e.adler=n.check=0,n.mode=12;break;case 10:for(;x<32;){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}e.adler=n.check=h(b),x=b=0,n.mode=11;case 11:if(n.havedict===0)return e.next_out=_,e.avail_out=y,e.next_in=g,e.avail_in=v,n.hold=b,n.bits=x,2;e.adler=n.check=1,n.mode=12;case 12:if(t===5||t===6)break e;case 13:if(n.last){b>>>=7&x,x-=7&x,n.mode=27;break}for(;x<3;){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}switch(n.last=1&b,--x,3&(b>>>=1)){case 0:n.mode=14;break;case 1:if(w(n),n.mode=20,t!==6)break;b>>>=2,x-=2;break e;case 2:n.mode=17;break;case 3:e.msg=`invalid block type`,n.mode=30}b>>>=2,x-=2;break;case 14:for(b>>>=7&x,x-=7&x;x<32;){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}if((65535&b)!=(b>>>16^65535)){e.msg=`invalid stored block lengths`,n.mode=30;break}if(n.length=65535&b,x=b=0,n.mode=15,t===6)break e;case 15:n.mode=16;case 16:if(E=n.length){if(v<E&&(E=v),y<E&&(E=y),E===0)break e;r.arraySet(m,p,g,E,_),v-=E,g+=E,y-=E,_+=E,n.length-=E;break}n.mode=12;break;case 17:for(;x<14;){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}if(n.nlen=257+(31&b),b>>>=5,x-=5,n.ndist=1+(31&b),b>>>=5,x-=5,n.ncode=4+(15&b),b>>>=4,x-=4,286<n.nlen||30<n.ndist){e.msg=`too many length or distance symbols`,n.mode=30;break}n.have=0,n.mode=18;case 18:for(;n.have<n.ncode;){for(;x<3;){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}n.lens[V[n.have++]]=7&b,b>>>=3,x-=3}for(;n.have<19;)n.lens[V[n.have++]]=0;if(n.lencode=n.lendyn,n.lenbits=7,L={bits:n.lenbits},I=s(0,n.lens,0,19,n.lencode,0,n.work,L),n.lenbits=L.bits,I){e.msg=`invalid code lengths set`,n.mode=30;break}n.have=0,n.mode=19;case 19:for(;n.have<n.nlen+n.ndist;){for(;A=(z=n.lencode[b&(1<<n.lenbits)-1])>>>16&255,j=65535&z,!((k=z>>>24)<=x);){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}if(j<16)b>>>=k,x-=k,n.lens[n.have++]=j;else{if(j===16){for(R=k+2;x<R;){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}if(b>>>=k,x-=k,n.have===0){e.msg=`invalid bit length repeat`,n.mode=30;break}F=n.lens[n.have-1],E=3+(3&b),b>>>=2,x-=2}else if(j===17){for(R=k+3;x<R;){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}x-=k,F=0,E=3+(7&(b>>>=k)),b>>>=3,x-=3}else{for(R=k+7;x<R;){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}x-=k,F=0,E=11+(127&(b>>>=k)),b>>>=7,x-=7}if(n.have+E>n.nlen+n.ndist){e.msg=`invalid bit length repeat`,n.mode=30;break}for(;E--;)n.lens[n.have++]=F}}if(n.mode===30)break;if(n.lens[256]===0){e.msg=`invalid code -- missing end-of-block`,n.mode=30;break}if(n.lenbits=9,L={bits:n.lenbits},I=s(c,n.lens,0,n.nlen,n.lencode,0,n.work,L),n.lenbits=L.bits,I){e.msg=`invalid literal/lengths set`,n.mode=30;break}if(n.distbits=6,n.distcode=n.distdyn,L={bits:n.distbits},I=s(l,n.lens,n.nlen,n.ndist,n.distcode,0,n.work,L),n.distbits=L.bits,I){e.msg=`invalid distances set`,n.mode=30;break}if(n.mode=20,t===6)break e;case 20:n.mode=21;case 21:if(6<=v&&258<=y){e.next_out=_,e.avail_out=y,e.next_in=g,e.avail_in=v,n.hold=b,n.bits=x,o(e,C),_=e.next_out,m=e.output,y=e.avail_out,g=e.next_in,p=e.input,v=e.avail_in,b=n.hold,x=n.bits,n.mode===12&&(n.back=-1);break}for(n.back=0;A=(z=n.lencode[b&(1<<n.lenbits)-1])>>>16&255,j=65535&z,!((k=z>>>24)<=x);){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}if(A&&!(240&A)){for(M=k,N=A,P=j;A=(z=n.lencode[P+((b&(1<<M+N)-1)>>M)])>>>16&255,j=65535&z,!(M+(k=z>>>24)<=x);){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}b>>>=M,x-=M,n.back+=M}if(b>>>=k,x-=k,n.back+=k,n.length=j,A===0){n.mode=26;break}if(32&A){n.back=-1,n.mode=12;break}if(64&A){e.msg=`invalid literal/length code`,n.mode=30;break}n.extra=15&A,n.mode=22;case 22:if(n.extra){for(R=n.extra;x<R;){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}n.length+=b&(1<<n.extra)-1,b>>>=n.extra,x-=n.extra,n.back+=n.extra}n.was=n.length,n.mode=23;case 23:for(;A=(z=n.distcode[b&(1<<n.distbits)-1])>>>16&255,j=65535&z,!((k=z>>>24)<=x);){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}if(!(240&A)){for(M=k,N=A,P=j;A=(z=n.distcode[P+((b&(1<<M+N)-1)>>M)])>>>16&255,j=65535&z,!(M+(k=z>>>24)<=x);){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}b>>>=M,x-=M,n.back+=M}if(b>>>=k,x-=k,n.back+=k,64&A){e.msg=`invalid distance code`,n.mode=30;break}n.offset=j,n.extra=15&A,n.mode=24;case 24:if(n.extra){for(R=n.extra;x<R;){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}n.offset+=b&(1<<n.extra)-1,b>>>=n.extra,x-=n.extra,n.back+=n.extra}if(n.offset>n.dmax){e.msg=`invalid distance too far back`,n.mode=30;break}n.mode=25;case 25:if(y===0)break e;if(E=C-y,n.offset>E){if((E=n.offset-E)>n.whave&&n.sane){e.msg=`invalid distance too far back`,n.mode=30;break}D=E>n.wnext?(E-=n.wnext,n.wsize-E):n.wnext-E,E>n.length&&(E=n.length),O=n.window}else O=m,D=_-n.offset,E=n.length;for(y<E&&(E=y),y-=E,n.length-=E;m[_++]=O[D++],--E;);n.length===0&&(n.mode=21);break;case 26:if(y===0)break e;m[_++]=n.length,y--,n.mode=21;break;case 27:if(n.wrap){for(;x<32;){if(v===0)break e;v--,b|=p[g++]<<x,x+=8}if(C-=y,e.total_out+=C,n.total+=C,C&&(e.adler=n.check=n.flags?a(n.check,m,C,_-C):i(n.check,m,C,_-C)),C=y,(n.flags?b:h(b))!==n.check){e.msg=`incorrect data check`,n.mode=30;break}x=b=0}n.mode=28;case 28:if(n.wrap&&n.flags){for(;x<32;){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}if(b!==(4294967295&n.total)){e.msg=`incorrect length check`,n.mode=30;break}x=b=0}n.mode=29;case 29:I=1;break e;case 30:I=-3;break e;case 31:return-4;case 32:default:return d}return e.next_out=_,e.avail_out=y,e.next_in=g,e.avail_in=v,n.hold=b,n.bits=x,(n.wsize||C!==e.avail_out&&n.mode<30&&(n.mode<27||t!==4))&&T(e,e.output,e.next_out,C-e.avail_out)?(n.mode=31,-4):(S-=e.avail_in,C-=e.avail_out,e.total_in+=S,e.total_out+=C,n.total+=C,n.wrap&&C&&(e.adler=n.check=n.flags?a(n.check,m,C,e.next_out-C):i(n.check,m,C,e.next_out-C)),e.data_type=n.bits+(n.last?64:0)+(n.mode===12?128:0)+(n.mode===20||n.mode===15?256:0),(S==0&&C===0||t===4)&&I===u&&(I=-5),I)},n.inflateEnd=function(e){if(!e||!e.state)return d;var t=e.state;return t.window&&=null,e.state=null,u},n.inflateGetHeader=function(e,t){var n;return e&&e.state&&2&(n=e.state).wrap?((n.head=t).done=!1,u):d},n.inflateSetDictionary=function(e,t){var n,r=t.length;return e&&e.state?(n=e.state).wrap!==0&&n.mode!==11?d:n.mode===11&&i(1,t,r,0)!==n.check?-3:T(e,t,r,r)?(n.mode=31,-4):(n.havedict=1,u):d},n.inflateInfo=`pako inflate (from Nodeca project)`},{"../utils/common":41,"./adler32":43,"./crc32":45,"./inffast":48,"./inftrees":50}],50:[function(e,t,n){var r=e(`../utils/common`),i=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],a=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],o=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],s=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];t.exports=function(e,t,n,c,l,u,d,f){var p,m,h,g,_,v,y,b,x,S=f.bits,C=0,w=0,T=0,E=0,D=0,O=0,k=0,A=0,j=0,M=0,N=null,P=0,F=new r.Buf16(16),I=new r.Buf16(16),L=null,R=0;for(C=0;C<=15;C++)F[C]=0;for(w=0;w<c;w++)F[t[n+w]]++;for(D=S,E=15;1<=E&&F[E]===0;E--);if(E<D&&(D=E),E===0)return l[u++]=20971520,l[u++]=20971520,f.bits=1,0;for(T=1;T<E&&F[T]===0;T++);for(D<T&&(D=T),C=A=1;C<=15;C++)if(A<<=1,(A-=F[C])<0)return-1;if(0<A&&(e===0||E!==1))return-1;for(I[1]=0,C=1;C<15;C++)I[C+1]=I[C]+F[C];for(w=0;w<c;w++)t[n+w]!==0&&(d[I[t[n+w]]++]=w);if(v=e===0?(N=L=d,19):e===1?(N=i,P-=257,L=a,R-=257,256):(N=o,L=s,-1),C=T,_=u,k=w=M=0,h=-1,g=(j=1<<(O=D))-1,e===1&&852<j||e===2&&592<j)return 1;for(;;){for(y=C-k,x=d[w]<v?(b=0,d[w]):d[w]>v?(b=L[R+d[w]],N[P+d[w]]):(b=96,0),p=1<<C-k,T=m=1<<O;l[_+(M>>k)+(m-=p)]=y<<24|b<<16|x|0,m!==0;);for(p=1<<C-1;M&p;)p>>=1;if(p===0?M=0:(M&=p-1,M+=p),w++,--F[C]==0){if(C===E)break;C=t[n+d[w]]}if(D<C&&(M&g)!==h){for(k===0&&(k=D),_+=T,A=1<<(O=C-k);O+k<E&&!((A-=F[O+k])<=0);)O++,A<<=1;if(j+=1<<O,e===1&&852<j||e===2&&592<j)return 1;l[h=M&g]=D<<24|O<<16|_-u|0}}return M!==0&&(l[_+M]=C-k<<24|4194304),f.bits=D,0}},{"../utils/common":41}],51:[function(e,t,n){t.exports={2:`need dictionary`,1:`stream end`,0:``,"-1":`file error`,"-2":`stream error`,"-3":`data error`,"-4":`insufficient memory`,"-5":`buffer error`,"-6":`incompatible version`}},{}],52:[function(e,t,n){var r=e(`../utils/common`),i=0,a=1;function o(e){for(var t=e.length;0<=--t;)e[t]=0}var s=0,c=29,l=256,u=l+1+c,d=30,f=19,p=2*u+1,m=15,h=16,g=7,_=256,v=16,y=17,b=18,x=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],S=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],C=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],w=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],T=Array(2*(u+2));o(T);var E=Array(2*d);o(E);var D=Array(512);o(D);var O=Array(256);o(O);var k=Array(c);o(k);var A,j,M,N=Array(d);function P(e,t,n,r,i){this.static_tree=e,this.extra_bits=t,this.extra_base=n,this.elems=r,this.max_length=i,this.has_stree=e&&e.length}function F(e,t){this.dyn_tree=e,this.max_code=0,this.stat_desc=t}function I(e){return e<256?D[e]:D[256+(e>>>7)]}function L(e,t){e.pending_buf[e.pending++]=255&t,e.pending_buf[e.pending++]=t>>>8&255}function R(e,t,n){e.bi_valid>h-n?(e.bi_buf|=t<<e.bi_valid&65535,L(e,e.bi_buf),e.bi_buf=t>>h-e.bi_valid,e.bi_valid+=n-h):(e.bi_buf|=t<<e.bi_valid&65535,e.bi_valid+=n)}function z(e,t,n){R(e,n[2*t],n[2*t+1])}function B(e,t){for(var n=0;n|=1&e,e>>>=1,n<<=1,0<--t;);return n>>>1}function V(e,t,n){var r,i,a=Array(m+1),o=0;for(r=1;r<=m;r++)a[r]=o=o+n[r-1]<<1;for(i=0;i<=t;i++){var s=e[2*i+1];s!==0&&(e[2*i]=B(a[s]++,s))}}function H(e){var t;for(t=0;t<u;t++)e.dyn_ltree[2*t]=0;for(t=0;t<d;t++)e.dyn_dtree[2*t]=0;for(t=0;t<f;t++)e.bl_tree[2*t]=0;e.dyn_ltree[2*_]=1,e.opt_len=e.static_len=0,e.last_lit=e.matches=0}function U(e){8<e.bi_valid?L(e,e.bi_buf):0<e.bi_valid&&(e.pending_buf[e.pending++]=e.bi_buf),e.bi_buf=0,e.bi_valid=0}function ee(e,t,n,r){var i=2*t,a=2*n;return e[i]<e[a]||e[i]===e[a]&&r[t]<=r[n]}function te(e,t,n){for(var r=e.heap[n],i=n<<1;i<=e.heap_len&&(i<e.heap_len&&ee(t,e.heap[i+1],e.heap[i],e.depth)&&i++,!ee(t,r,e.heap[i],e.depth));)e.heap[n]=e.heap[i],n=i,i<<=1;e.heap[n]=r}function ne(e,t,n){var r,i,a,o,s=0;if(e.last_lit!==0)for(;r=e.pending_buf[e.d_buf+2*s]<<8|e.pending_buf[e.d_buf+2*s+1],i=e.pending_buf[e.l_buf+s],s++,r===0?z(e,i,t):(z(e,(a=O[i])+l+1,t),(o=x[a])!==0&&R(e,i-=k[a],o),z(e,a=I(--r),n),(o=S[a])!==0&&R(e,r-=N[a],o)),s<e.last_lit;);z(e,_,t)}function re(e,t){var n,r,i,a=t.dyn_tree,o=t.stat_desc.static_tree,s=t.stat_desc.has_stree,c=t.stat_desc.elems,l=-1;for(e.heap_len=0,e.heap_max=p,n=0;n<c;n++)a[2*n]===0?a[2*n+1]=0:(e.heap[++e.heap_len]=l=n,e.depth[n]=0);for(;e.heap_len<2;)a[2*(i=e.heap[++e.heap_len]=l<2?++l:0)]=1,e.depth[i]=0,e.opt_len--,s&&(e.static_len-=o[2*i+1]);for(t.max_code=l,n=e.heap_len>>1;1<=n;n--)te(e,a,n);for(i=c;n=e.heap[1],e.heap[1]=e.heap[e.heap_len--],te(e,a,1),r=e.heap[1],e.heap[--e.heap_max]=n,e.heap[--e.heap_max]=r,a[2*i]=a[2*n]+a[2*r],e.depth[i]=(e.depth[n]>=e.depth[r]?e.depth[n]:e.depth[r])+1,a[2*n+1]=a[2*r+1]=i,e.heap[1]=i++,te(e,a,1),2<=e.heap_len;);e.heap[--e.heap_max]=e.heap[1],function(e,t){var n,r,i,a,o,s,c=t.dyn_tree,l=t.max_code,u=t.stat_desc.static_tree,d=t.stat_desc.has_stree,f=t.stat_desc.extra_bits,h=t.stat_desc.extra_base,g=t.stat_desc.max_length,_=0;for(a=0;a<=m;a++)e.bl_count[a]=0;for(c[2*e.heap[e.heap_max]+1]=0,n=e.heap_max+1;n<p;n++)g<(a=c[2*c[2*(r=e.heap[n])+1]+1]+1)&&(a=g,_++),c[2*r+1]=a,l<r||(e.bl_count[a]++,o=0,h<=r&&(o=f[r-h]),s=c[2*r],e.opt_len+=s*(a+o),d&&(e.static_len+=s*(u[2*r+1]+o)));if(_!==0){do{for(a=g-1;e.bl_count[a]===0;)a--;e.bl_count[a]--,e.bl_count[a+1]+=2,e.bl_count[g]--,_-=2}while(0<_);for(a=g;a!==0;a--)for(r=e.bl_count[a];r!==0;)l<(i=e.heap[--n])||(c[2*i+1]!==a&&(e.opt_len+=(a-c[2*i+1])*c[2*i],c[2*i+1]=a),r--)}}(e,t),V(a,l,e.bl_count)}function ie(e,t,n){var r,i,a=-1,o=t[1],s=0,c=7,l=4;for(o===0&&(c=138,l=3),t[2*(n+1)+1]=65535,r=0;r<=n;r++)i=o,o=t[2*(r+1)+1],++s<c&&i===o||(s<l?e.bl_tree[2*i]+=s:i===0?s<=10?e.bl_tree[2*y]++:e.bl_tree[2*b]++:(i!==a&&e.bl_tree[2*i]++,e.bl_tree[2*v]++),a=i,l=(s=0)===o?(c=138,3):i===o?(c=6,3):(c=7,4))}function ae(e,t,n){var r,i,a=-1,o=t[1],s=0,c=7,l=4;for(o===0&&(c=138,l=3),r=0;r<=n;r++)if(i=o,o=t[2*(r+1)+1],!(++s<c&&i===o)){if(s<l)for(;z(e,i,e.bl_tree),--s!=0;);else i===0?s<=10?(z(e,y,e.bl_tree),R(e,s-3,3)):(z(e,b,e.bl_tree),R(e,s-11,7)):(i!==a&&(z(e,i,e.bl_tree),s--),z(e,v,e.bl_tree),R(e,s-3,2));a=i,l=(s=0)===o?(c=138,3):i===o?(c=6,3):(c=7,4)}}o(N);var oe=!1;function se(e,t,n,i){R(e,(s<<1)+ +!!i,3),function(e,t,n,i){U(e),i&&(L(e,n),L(e,~n)),r.arraySet(e.pending_buf,e.window,t,n,e.pending),e.pending+=n}(e,t,n,!0)}n._tr_init=function(e){oe||=(function(){var e,t,n,r,i,a=Array(m+1);for(r=n=0;r<c-1;r++)for(k[r]=n,e=0;e<1<<x[r];e++)O[n++]=r;for(O[n-1]=r,r=i=0;r<16;r++)for(N[r]=i,e=0;e<1<<S[r];e++)D[i++]=r;for(i>>=7;r<d;r++)for(N[r]=i<<7,e=0;e<1<<S[r]-7;e++)D[256+i++]=r;for(t=0;t<=m;t++)a[t]=0;for(e=0;e<=143;)T[2*e+1]=8,e++,a[8]++;for(;e<=255;)T[2*e+1]=9,e++,a[9]++;for(;e<=279;)T[2*e+1]=7,e++,a[7]++;for(;e<=287;)T[2*e+1]=8,e++,a[8]++;for(V(T,u+1,a),e=0;e<d;e++)E[2*e+1]=5,E[2*e]=B(e,5);A=new P(T,x,l+1,u,m),j=new P(E,S,0,d,m),M=new P([],C,0,f,g)}(),!0),e.l_desc=new F(e.dyn_ltree,A),e.d_desc=new F(e.dyn_dtree,j),e.bl_desc=new F(e.bl_tree,M),e.bi_buf=0,e.bi_valid=0,H(e)},n._tr_stored_block=se,n._tr_flush_block=function(e,t,n,r){var o,s,c=0;0<e.level?(e.strm.data_type===2&&(e.strm.data_type=function(e){var t,n=4093624447;for(t=0;t<=31;t++,n>>>=1)if(1&n&&e.dyn_ltree[2*t]!==0)return i;if(e.dyn_ltree[18]!==0||e.dyn_ltree[20]!==0||e.dyn_ltree[26]!==0)return a;for(t=32;t<l;t++)if(e.dyn_ltree[2*t]!==0)return a;return i}(e)),re(e,e.l_desc),re(e,e.d_desc),c=function(e){var t;for(ie(e,e.dyn_ltree,e.l_desc.max_code),ie(e,e.dyn_dtree,e.d_desc.max_code),re(e,e.bl_desc),t=f-1;3<=t&&e.bl_tree[2*w[t]+1]===0;t--);return e.opt_len+=3*(t+1)+5+5+4,t}(e),o=e.opt_len+3+7>>>3,(s=e.static_len+3+7>>>3)<=o&&(o=s)):o=s=n+5,n+4<=o&&t!==-1?se(e,t,n,r):e.strategy===4||s===o?(R(e,2+ +!!r,3),ne(e,T,E)):(R(e,4+ +!!r,3),function(e,t,n,r){var i;for(R(e,t-257,5),R(e,n-1,5),R(e,r-4,4),i=0;i<r;i++)R(e,e.bl_tree[2*w[i]+1],3);ae(e,e.dyn_ltree,t-1),ae(e,e.dyn_dtree,n-1)}(e,e.l_desc.max_code+1,e.d_desc.max_code+1,c+1),ne(e,e.dyn_ltree,e.dyn_dtree)),H(e),r&&U(e)},n._tr_tally=function(e,t,n){return e.pending_buf[e.d_buf+2*e.last_lit]=t>>>8&255,e.pending_buf[e.d_buf+2*e.last_lit+1]=255&t,e.pending_buf[e.l_buf+e.last_lit]=255&n,e.last_lit++,t===0?e.dyn_ltree[2*n]++:(e.matches++,t--,e.dyn_ltree[2*(O[n]+l+1)]++,e.dyn_dtree[2*I(t)]++),e.last_lit===e.lit_bufsize-1},n._tr_align=function(e){R(e,2,3),z(e,_,T),function(e){e.bi_valid===16?(L(e,e.bi_buf),e.bi_buf=0,e.bi_valid=0):8<=e.bi_valid&&(e.pending_buf[e.pending++]=255&e.bi_buf,e.bi_buf>>=8,e.bi_valid-=8)}(e)}},{"../utils/common":41}],53:[function(e,t,n){t.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg=``,this.state=null,this.data_type=2,this.adler=0}},{}],54:[function(e,t,n){(function(e){(function(e,t){if(!e.setImmediate){var n,r,i,a,o=1,s={},c=!1,l=e.document,u=Object.getPrototypeOf&&Object.getPrototypeOf(e);u=u&&u.setTimeout?u:e,n={}.toString.call(e.process)===`[object process]`?function(e){W.nextTick(function(){f(e)})}:function(){if(e.postMessage&&!e.importScripts){var t=!0,n=e.onmessage;return e.onmessage=function(){t=!1},e.postMessage(``,`*`),e.onmessage=n,t}}()?(a=`setImmediate$`+Math.random()+`$`,e.addEventListener?e.addEventListener(`message`,p,!1):e.attachEvent(`onmessage`,p),function(t){e.postMessage(a+t,`*`)}):e.MessageChannel?((i=new MessageChannel).port1.onmessage=function(e){f(e.data)},function(e){i.port2.postMessage(e)}):l&&`onreadystatechange`in l.createElement(`script`)?(r=l.documentElement,function(e){var t=l.createElement(`script`);t.onreadystatechange=function(){f(e),t.onreadystatechange=null,r.removeChild(t),t=null},r.appendChild(t)}):function(e){setTimeout(f,0,e)},u.setImmediate=function(e){typeof e!=`function`&&(e=Function(``+e));for(var t=Array(arguments.length-1),r=0;r<t.length;r++)t[r]=arguments[r+1];return s[o]={callback:e,args:t},n(o),o++},u.clearImmediate=d}function d(e){delete s[e]}function f(e){if(c)setTimeout(f,0,e);else{var n=s[e];if(n){c=!0;try{(function(e){var n=e.callback,r=e.args;switch(r.length){case 0:n();break;case 1:n(r[0]);break;case 2:n(r[0],r[1]);break;case 3:n(r[0],r[1],r[2]);break;default:n.apply(t,r)}})(n)}finally{d(e),c=!1}}}}function p(t){t.source===e&&typeof t.data==`string`&&t.data.indexOf(a)===0&&f(+t.data.slice(a.length))}})(typeof self>`u`?e===void 0?this:e:self)}).call(this,ne===void 0?typeof self<`u`?self:typeof window<`u`?window:{}:ne)},{}]},{},[10])(10)})})),zo=D(((e,t)=>{var n={"&":`&amp;`,'"':`&quot;`,"'":`&apos;`,"<":`&lt;`,">":`&gt;`};function r(e){return e&&e.replace?e.replace(/([&"<>'])/g,function(e,t){return n[t]}):e}t.exports=r})),Bo=D(((e,t)=>{Se();var n=zo(),r=Vt().Stream,i=`    `;function a(e,t){typeof t!=`object`&&(t={indent:t});var n=t.stream?new r:null,a=``,o=!1,s=t.indent?t.indent===!0?i:t.indent:``,u=!0;function d(e){u?W.nextTick(e):e()}function f(e,t){if(t!==void 0&&(a+=t),e&&!o&&(n||=new r,o=!0),e&&o){var i=a;d(function(){n.emit(`data`,i)}),a=``}}function p(e,t){l(f,c(e,s,+!!s),t)}function m(){if(n){var e=a;d(function(){n.emit(`data`,e),n.emit(`end`),n.readable=!1,n.emit(`close`)})}}function h(e){var t={version:`1.0`,encoding:e.encoding||`UTF-8`};e.standalone&&(t.standalone=e.standalone),p({"?xml":{_attr:t}}),a=a.replace(`/>`,`?>`)}return d(function(){u=!1}),t.declaration&&h(t.declaration),e&&e.forEach?e.forEach(function(t,n){var r;n+1===e.length&&(r=m),p(t,r)}):p(e,m),n?(n.readable=!0,n):a}function o(){var e={_elem:c(Array.prototype.slice.call(arguments))};return e.push=function(e){if(!this.append)throw Error(`not assigned to a parent!`);var t=this,n=this._elem.indent;l(this.append,c(e,n,this._elem.icount+ +!!n),function(){t.append(!0)})},e.close=function(e){e!==void 0&&this.push(e),this.end&&this.end()},e}function s(e,t){return Array(t||0).join(e||``)}function c(e,t,r){r||=0;var i=s(t,r),a,o=e,l=!1;if(typeof e==`object`&&(a=Object.keys(e)[0],o=e[a],o&&o._elem))return o._elem.name=a,o._elem.icount=r,o._elem.indent=t,o._elem.indents=i,o._elem.interrupt=o,o._elem;var d=[],f=[],p;function m(e){Object.keys(e).forEach(function(t){d.push(u(t,e[t]))})}switch(typeof o){case`object`:if(o===null)break;o._attr&&m(o._attr),o._cdata&&f.push((`<![CDATA[`+o._cdata).replace(/\]\]>/g,`]]]]><![CDATA[>`)+`]]>`),o.forEach&&(p=!1,f.push(``),o.forEach(function(e){typeof e==`object`?Object.keys(e)[0]==`_attr`?m(e._attr):f.push(c(e,t,r+1)):(f.pop(),p=!0,f.push(n(e)))}),p||f.push(``));break;default:f.push(n(o))}return{name:a,interrupt:l,attributes:d,content:f,icount:r,indents:i,indent:t}}function l(e,t,n){if(typeof t!=`object`)return e(!1,t);var r=t.interrupt?1:t.content.length;function i(){for(;t.content.length;){var i=t.content.shift();if(i!==void 0){if(a(i))return;l(e,i)}}e(!1,(r>1?t.indents:``)+(t.name?`</`+t.name+`>`:``)+(t.indent&&!n?`
`:``)),n&&n()}function a(t){return t.interrupt?(t.interrupt.append=e,t.interrupt.end=i,t.interrupt=!1,e(!0),!0):!1}if(e(!1,t.indents+(t.name?`<`+t.name:``)+(t.attributes.length?` `+t.attributes.join(` `):``)+(r?t.name?`>`:``:t.name?`/>`:``)+(t.indent&&r>1?`
`:``)),!r)return e(!1,t.indent?`
`:``);a(t)||i()}function u(e,t){return e+`="`+n(t)+`"`}t.exports=a,t.exports.element=t.exports.Element=o})),Vo=Vt(),Ho=k(Ro(),1),Uo=k(Bo(),1),Wo=0,Go=32,Ko=32,qo=(e,t)=>{let n=t.replace(/-/g,``);if(n.length!==Ko)throw Error(`Error: Cannot extract GUID from font filename: ${t}`);let r=n.replace(/(..)/g,`$1 `).trim().split(` `).map(e=>parseInt(e,16));r.reverse();let i=e.slice(Wo,Go).map((e,t)=>e^r[t%r.length]),a=new Uint8Array(Wo+i.length+Math.max(0,e.length-Go));return a.set(e.slice(0,Wo)),a.set(i,Wo),a.set(e.slice(Go),Wo+i.length),a},Jo=class{format(e,t={stack:[]}){let n=e.prepForXml(t);if(n)return n;throw Error(`XMLComponent did not format correctly`)}},Yo=class{replace(e,t,n){let r=e;return t.forEach((e,t)=>{r=r.replace(RegExp(`{${e.fileName}}`,`g`),(n+t).toString())}),r}getMediaData(e,t){return t.Array.filter(t=>e.search(`{${t.fileName}}`)>0)}},Xo=class{replace(e,t){let n=e;for(let e of t)n=n.replace(RegExp(`{${e.reference}-${e.instance}}`,`g`),e.numId.toString());return n}},Zo=class{constructor(){P(this,`formatter`,void 0),P(this,`imageReplacer`,void 0),P(this,`numberingReplacer`,void 0),this.formatter=new Jo,this.imageReplacer=new Yo,this.numberingReplacer=new Xo}compile(e,t,n=[]){let r=new Ho.default,i=this.xmlifyFile(e,t),a=new Map(Object.entries(i));for(let[,e]of a)if(Array.isArray(e))for(let t of e)r.file(t.path,Nr(t.data));else r.file(e.path,Nr(e.data));for(let e of n)r.file(e.path,Nr(e.data));for(let t of e.Media.Array)t.type===`svg`?(r.file(`word/media/${t.fileName}`,t.data),r.file(`word/media/${t.fallback.fileName}`,t.fallback.data)):r.file(`word/media/${t.fileName}`,t.data);for(let[t,{data:n,fontKey:i}]of e.FontTable.fontOptionsWithKey.entries())r.file(`word/fonts/font${t+1}.odttf`,qo(n,i));return r}xmlifyFile(e,t){let n=e.Document.Relationships.RelationshipCount+1,r=(0,Uo.default)(this.formatter.format(e.Document.View,{viewWrapper:e.Document,file:e,stack:[]}),{indent:t,declaration:{standalone:`yes`,encoding:`UTF-8`}}),i=e.Comments.Relationships.RelationshipCount+1,a=(0,Uo.default)(this.formatter.format(e.Comments,{viewWrapper:{View:e.Comments,Relationships:e.Comments.Relationships},file:e,stack:[]}),{indent:t,declaration:{standalone:`yes`,encoding:`UTF-8`}}),o=e.FootNotes.Relationships.RelationshipCount+1,s=(0,Uo.default)(this.formatter.format(e.FootNotes.View,{viewWrapper:e.FootNotes,file:e,stack:[]}),{indent:t,declaration:{standalone:`yes`,encoding:`UTF-8`}}),c=this.imageReplacer.getMediaData(r,e.Media),l=this.imageReplacer.getMediaData(a,e.Media),u=this.imageReplacer.getMediaData(s,e.Media);return B(B({Relationships:{data:(c.forEach((t,r)=>{e.Document.Relationships.addRelationship(n+r,`http://schemas.openxmlformats.org/officeDocument/2006/relationships/image`,`media/${t.fileName}`)}),e.Document.Relationships.addRelationship(e.Document.Relationships.RelationshipCount+1,`http://schemas.openxmlformats.org/officeDocument/2006/relationships/fontTable`,`fontTable.xml`),(0,Uo.default)(this.formatter.format(e.Document.Relationships,{viewWrapper:e.Document,file:e,stack:[]}),{indent:t,declaration:{encoding:`UTF-8`}})),path:`word/_rels/document.xml.rels`},Document:{data:(()=>{let t=this.imageReplacer.replace(r,c,n);return this.numberingReplacer.replace(t,e.Numbering.ConcreteNumbering)})(),path:`word/document.xml`},Styles:{data:(()=>{let n=(0,Uo.default)(this.formatter.format(e.Styles,{viewWrapper:e.Document,file:e,stack:[]}),{indent:t,declaration:{standalone:`yes`,encoding:`UTF-8`}});return this.numberingReplacer.replace(n,e.Numbering.ConcreteNumbering)})(),path:`word/styles.xml`},Properties:{data:(0,Uo.default)(this.formatter.format(e.CoreProperties,{viewWrapper:e.Document,file:e,stack:[]}),{indent:t,declaration:{standalone:`yes`,encoding:`UTF-8`}}),path:`docProps/core.xml`},Numbering:{data:(0,Uo.default)(this.formatter.format(e.Numbering,{viewWrapper:e.Document,file:e,stack:[]}),{indent:t,declaration:{standalone:`yes`,encoding:`UTF-8`}}),path:`word/numbering.xml`},FileRelationships:{data:(0,Uo.default)(this.formatter.format(e.FileRelationships,{viewWrapper:e.Document,file:e,stack:[]}),{indent:t,declaration:{encoding:`UTF-8`}}),path:`_rels/.rels`},HeaderRelationships:e.Headers.map((n,r)=>{let i=(0,Uo.default)(this.formatter.format(n.View,{viewWrapper:n,file:e,stack:[]}),{indent:t,declaration:{encoding:`UTF-8`}});return this.imageReplacer.getMediaData(i,e.Media).forEach((e,t)=>{n.Relationships.addRelationship(t,`http://schemas.openxmlformats.org/officeDocument/2006/relationships/image`,`media/${e.fileName}`)}),{data:(0,Uo.default)(this.formatter.format(n.Relationships,{viewWrapper:n,file:e,stack:[]}),{indent:t,declaration:{encoding:`UTF-8`}}),path:`word/_rels/header${r+1}.xml.rels`}}),FooterRelationships:e.Footers.map((n,r)=>{let i=(0,Uo.default)(this.formatter.format(n.View,{viewWrapper:n,file:e,stack:[]}),{indent:t,declaration:{encoding:`UTF-8`}});return this.imageReplacer.getMediaData(i,e.Media).forEach((e,t)=>{n.Relationships.addRelationship(t,`http://schemas.openxmlformats.org/officeDocument/2006/relationships/image`,`media/${e.fileName}`)}),{data:(0,Uo.default)(this.formatter.format(n.Relationships,{viewWrapper:n,file:e,stack:[]}),{indent:t,declaration:{encoding:`UTF-8`}}),path:`word/_rels/footer${r+1}.xml.rels`}}),Headers:e.Headers.map((n,r)=>{let i=(0,Uo.default)(this.formatter.format(n.View,{viewWrapper:n,file:e,stack:[]}),{indent:t,declaration:{encoding:`UTF-8`}}),a=this.imageReplacer.getMediaData(i,e.Media),o=this.imageReplacer.replace(i,a,0);return{data:this.numberingReplacer.replace(o,e.Numbering.ConcreteNumbering),path:`word/header${r+1}.xml`}}),Footers:e.Footers.map((n,r)=>{let i=(0,Uo.default)(this.formatter.format(n.View,{viewWrapper:n,file:e,stack:[]}),{indent:t,declaration:{encoding:`UTF-8`}}),a=this.imageReplacer.getMediaData(i,e.Media),o=this.imageReplacer.replace(i,a,0);return{data:this.numberingReplacer.replace(o,e.Numbering.ConcreteNumbering),path:`word/footer${r+1}.xml`}}),ContentTypes:{data:(0,Uo.default)(this.formatter.format(e.ContentTypes,{viewWrapper:e.Document,file:e,stack:[]}),{indent:t,declaration:{encoding:`UTF-8`}}),path:`[Content_Types].xml`},CustomProperties:{data:(0,Uo.default)(this.formatter.format(e.CustomProperties,{viewWrapper:e.Document,file:e,stack:[]}),{indent:t,declaration:{standalone:`yes`,encoding:`UTF-8`}}),path:`docProps/custom.xml`},AppProperties:{data:(0,Uo.default)(this.formatter.format(e.AppProperties,{viewWrapper:e.Document,file:e,stack:[]}),{indent:t,declaration:{standalone:`yes`,encoding:`UTF-8`}}),path:`docProps/app.xml`},FootNotes:{data:(()=>{let t=this.imageReplacer.replace(s,u,o);return this.numberingReplacer.replace(t,e.Numbering.ConcreteNumbering)})(),path:`word/footnotes.xml`},FootNotesRelationships:{data:(u.forEach((t,n)=>{e.FootNotes.Relationships.addRelationship(o+n,`http://schemas.openxmlformats.org/officeDocument/2006/relationships/image`,`media/${t.fileName}`)}),(0,Uo.default)(this.formatter.format(e.FootNotes.Relationships,{viewWrapper:e.FootNotes,file:e,stack:[]}),{indent:t,declaration:{encoding:`UTF-8`}})),path:`word/_rels/footnotes.xml.rels`},Endnotes:{data:(0,Uo.default)(this.formatter.format(e.Endnotes.View,{viewWrapper:e.Endnotes,file:e,stack:[]}),{indent:t,declaration:{encoding:`UTF-8`}}),path:`word/endnotes.xml`},EndnotesRelationships:{data:(0,Uo.default)(this.formatter.format(e.Endnotes.Relationships,{viewWrapper:e.Endnotes,file:e,stack:[]}),{indent:t,declaration:{encoding:`UTF-8`}}),path:`word/_rels/endnotes.xml.rels`},Settings:{data:(0,Uo.default)(this.formatter.format(e.Settings,{viewWrapper:e.Document,file:e,stack:[]}),{indent:t,declaration:{standalone:`yes`,encoding:`UTF-8`}}),path:`word/settings.xml`},Comments:{data:(()=>{let t=this.imageReplacer.replace(a,l,i);return this.numberingReplacer.replace(t,e.Numbering.ConcreteNumbering)})(),path:`word/comments.xml`},CommentsRelationships:{data:(l.forEach((t,n)=>{e.Comments.Relationships.addRelationship(i+n,`http://schemas.openxmlformats.org/officeDocument/2006/relationships/image`,`media/${t.fileName}`)}),(0,Uo.default)(this.formatter.format(e.Comments.Relationships,{viewWrapper:{View:e.Comments,Relationships:e.Comments.Relationships},file:e,stack:[]}),{indent:t,declaration:{encoding:`UTF-8`}})),path:`word/_rels/comments.xml.rels`}},e.CommentsExtended?{CommentsExtended:{data:(0,Uo.default)(this.formatter.format(e.CommentsExtended,{viewWrapper:{View:e.CommentsExtended,Relationships:e.Comments.Relationships},file:e,stack:[]}),{indent:t,declaration:{standalone:`yes`,encoding:`UTF-8`}}),path:`word/commentsExtended.xml`}}:{}),{},{FontTable:{data:(0,Uo.default)(this.formatter.format(e.FontTable.View,{viewWrapper:e.Document,file:e,stack:[]}),{indent:t,declaration:{standalone:`yes`,encoding:`UTF-8`}}),path:`word/fontTable.xml`},FontTableRelationships:{data:(0,Uo.default)(this.formatter.format(e.FontTable.Relationships,{viewWrapper:e.Document,file:e,stack:[]}),{indent:t,declaration:{encoding:`UTF-8`}}),path:`word/_rels/fontTable.xml.rels`}})}};function Qo(e,t,n,r,i,a,o){try{var s=e[a](o),c=s.value}catch(e){n(e);return}s.done?t(c):Promise.resolve(c).then(r,i)}function $o(e){return function(){var t=this,n=arguments;return new Promise(function(r,i){var a=e.apply(t,n);function o(e){Qo(a,r,i,o,s,`next`,e)}function s(e){Qo(a,r,i,o,s,`throw`,e)}o(void 0)})}}var es={NONE:``,WITH_2_BLANKS:`  `,WITH_4_BLANKS:`    `,WITH_TAB:`	`},ts=e=>e===!0?es.WITH_2_BLANKS:e===!1?void 0:e,ns=class e{static pack(e,t,n){var r=this;return $o(function*(e,t,n,i=[]){return r.compiler.compile(e,ts(n),i).generateAsync({type:t,mimeType:`application/vnd.openxmlformats-officedocument.wordprocessingml.document`,compression:`DEFLATE`})}).apply(this,arguments)}static toString(t,n,r=[]){return e.pack(t,`string`,n,r)}static toBuffer(t,n,r=[]){return e.pack(t,`nodebuffer`,n,r)}static toBase64String(t,n,r=[]){return e.pack(t,`base64`,n,r)}static toBlob(t,n,r=[]){return e.pack(t,`blob`,n,r)}static toArrayBuffer(t,n,r=[]){return e.pack(t,`arraybuffer`,n,r)}static toStream(e,t,n=[]){let r=new Vo.Stream;return this.compiler.compile(e,ts(t),n).generateAsync({type:`nodebuffer`,mimeType:`application/vnd.openxmlformats-officedocument.wordprocessingml.document`,compression:`DEFLATE`}).then(e=>{r.emit(`data`,e),r.emit(`end`)}),r}};P(ns,`compiler`,new Zo);var rs=new Jo,is=e=>(0,Yt.xml2js)(e,{compact:!1,captureSpacesBetweenElements:!0}),as=e=>is((0,Uo.default)(rs.format(new or({text:e})))).elements[0].elements??[],os=e=>B(B({},e),{},{attributes:{"xml:space":`preserve`}}),ss=(e,t)=>e.elements?.filter(e=>e.name===t)[0].elements??[],cs=(e,t,n)=>{let r=ss(e,`Types`);r.some(e=>{var r,i;return e.type===`element`&&e.name===`Default`&&(e==null||(r=e.attributes)==null?void 0:r.ContentType)===t&&(e==null||(i=e.attributes)==null?void 0:i.Extension)===n})||r.push({attributes:{ContentType:t,Extension:n},name:`Default`,type:`element`})},ls=e=>{let t=parseInt(e.substring(3),10);return isNaN(t)?0:t},us=e=>ss(e,`Relationships`).map(e=>{var t;return ls(((t=e.attributes)==null||(t=t.Id)==null?void 0:t.toString())??``)}).reduce((e,t)=>Math.max(e,t),0)+1,ds=(e,t,n,r,i)=>{let a=ss(e,`Relationships`);return a.push({attributes:{Id:`rId${t}`,Type:n,Target:r,TargetMode:i},name:`Relationship`,type:`element`}),a},fs=class extends Error{constructor(e){super(`Token ${e} not found`),this.name=`TokenNotFoundError`}},ps=(e,t)=>{for(let n=0;n<(e.elements??[]).length;n++){let r=e.elements[n];if(r.type===`element`&&r.name===`w:r`){let e=(r.elements??[]).filter(e=>e.type===`element`&&e.name===`w:t`);for(let r of e)if(r.elements?.[0]&&r.elements[0].text?.includes(t))return n}}throw new fs(t)},ms=(e,t)=>{let n=-1,r=e.elements?.map((e,r)=>{if(n!==-1)return e;if(e.type===`element`&&e.name===`w:t`){var i;let a=(((i=e.elements)==null||(i=i[0])==null?void 0:i.text)??``).split(t),o=a.map(t=>B(B(B({},e),os(e)),{},{elements:as(t)}));return a.length>1&&(n=r),o}else return e}).flat()??[];return{left:B(B({},JSON.parse(JSON.stringify(e))),{},{elements:r.slice(0,n+1)}),right:B(B({},JSON.parse(JSON.stringify(e))),{},{elements:r.slice(n+1)})}},hs={START:0,MIDDLE:1,END:2},gs=({paragraphElement:e,renderedParagraph:t,originalText:n,replacementText:r})=>{let i=t.text.indexOf(n),a=i+n.length-1,o=hs.START;for(let n of t.runs)for(let{text:t,index:s,start:c,end:l}of n.parts)switch(o){case hs.START:if(i>=c&&i<=l){let u=i-c,d=Math.min(a,l)-c,f=n.text.substring(u,d+1);if(f===``)continue;let p=t.replace(f,r);_s(e.elements[n.index].elements[s],p),o=hs.MIDDLE;continue}break;case hs.MIDDLE:if(a<=l){let r=t.substring(a-c+1);_s(e.elements[n.index].elements[s],r);let i=e.elements[n.index].elements[s];e.elements[n.index].elements[s]=os(i),o=hs.END}else _s(e.elements[n.index].elements[s],``);break;default:}return e},_s=(e,t)=>(e.elements=as(t),e),vs=e=>{if(e.element.name!==`w:p`)throw Error(`Invalid node type: ${e.element.name}`);if(!e.element.elements)return{text:``,runs:[],index:-1,pathToParagraph:[]};let t=0,n=e.element.elements.map((e,t)=>({element:e,i:t})).filter(({element:e})=>e.name===`w:r`).map(({element:e,i:n})=>{let r=ys(e,n,t);return t+=r.text.length,r}).filter(e=>!!e);return{text:n.reduce((e,t)=>e+t.text,``),runs:n,index:e.index,pathToParagraph:bs(e)}},ys=(e,t,n)=>{if(!e.elements)return{text:``,parts:[],index:-1,start:n,end:n};let r=n,i=e.elements.map((e,t)=>e.name===`w:t`&&e.elements&&e.elements.length>0?{text:e.elements[0].text?.toString()??``,index:t,start:r,end:(r+=(e.elements[0].text?.toString()??``).length-1,r)}:void 0).filter(e=>!!e).map(e=>e);return{text:i.reduce((e,t)=>e+t.text,``),parts:i,index:t,start:n,end:r}},bs=e=>e.parent?[...bs(e.parent),e.index]:[e.index],xs=e=>e.element.elements?.map((t,n)=>({element:t,index:n,parent:e}))??[],Ss=e=>{let t=[],n=[...xs({element:e,index:0,parent:void 0})],r;for(;n.length>0;)r=n.shift(),r.element.name===`w:p`&&(t=[...t,vs(r)]),n.push(...xs(r));return t},Cs=(e,t)=>Ss(e).filter(e=>e.text.includes(t)),ws=new Jo,Ts=`ɵ`,Es=({json:e,patch:t,patchText:n,context:r,keepOriginalStyles:i=!0})=>{let a=Cs(e,n);if(a.length===0)return{element:e,didFindOccurrence:!1};for(let o of a){let a=t.children.map(e=>is((0,Uo.default)(ws.format(e,r)))).map(e=>e.elements[0]);switch(t.type){case As.DOCUMENT:{let t=Os(e,o.pathToParagraph),n=ks(o.pathToParagraph);t.elements.splice(n,1,...a);break}case As.PARAGRAPH:default:{let t=Ds(e,o.pathToParagraph);gs({paragraphElement:t,renderedParagraph:o,originalText:n,replacementText:Ts});let r=ps(t,Ts),s=t.elements[r],{left:c,right:l}=ms(s,Ts),u=a,d=l;if(i){let e=s.elements.filter(e=>e.type===`element`&&e.name===`w:rPr`);u=a.map(t=>B(B({},t),{},{elements:[...e,...t.elements??[]]})),d=B(B({},l),{},{elements:[...e,...l.elements]})}t.elements.splice(r,1,c,...u,d);break}}}return{element:e,didFindOccurrence:!0}},Ds=(e,t)=>{let n=e;for(let e=1;e<t.length;e++){let r=t[e];n=n.elements[r]}return n},Os=(e,t)=>Ds(e,t.slice(0,t.length-1)),ks=e=>e[e.length-1],As={DOCUMENT:`file`,PARAGRAPH:`paragraph`},js=new Yo,Ms=new Uint8Array([255,254]),Ns=new Uint8Array([254,255]),Ps=(e,t)=>{if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0};(function(){var e=$o(function*({outputType:e,data:t,patches:n,keepOriginalStyles:r,placeholderDelimiters:i={start:`{{`,end:`}}`},recursive:a=!0}){let o=t instanceof Ho.default?t:yield Ho.default.loadAsync(t),s=new Map,c={Media:new Ia},l=new Map,u=[],d=[],f=!1,p=new Map;for(let[e,t]of Object.entries(o.files)){let o=yield t.async(`uint8array`),m=o.slice(0,2);if(Ps(m,Ms)||Ps(m,Ns)){p.set(e,o);continue}if(!e.endsWith(`.xml`)&&!e.endsWith(`.rels`)){p.set(e,o);continue}let h=is(yield t.async(`text`));if(e===`word/document.xml`){let e=h.elements?.find(e=>e.name===`w:document`);if(e&&e.attributes){for(let t of[`mc`,`wp`,`r`,`w15`,`m`])e.attributes[`xmlns:${t}`]=ji[t];e.attributes[`mc:Ignorable`]=`${e.attributes[`mc:Ignorable`]||``} w15`.trim()}}if(e.startsWith(`word/`)&&!e.endsWith(`.xml.rels`)){let t={file:c,viewWrapper:{Relationships:{addRelationship:(t,n,r,i)=>{d.push({key:e,hyperlink:{id:t,link:r}})}}},stack:[]};if(s.set(e,t),!i?.start.trim()||!i?.end.trim())throw Error(`Both start and end delimiters must be non-empty strings.`);let{start:o,end:l}=i;for(let[i,s]of Object.entries(n)){let n=`${o}${i}${l}`;for(;;){let{didFindOccurrence:i}=Es({json:h,patch:B(B({},s),{},{children:s.children.map(t=>{if(t instanceof si){let n=new oi(t.options.children,Ar());return d.push({key:e,hyperlink:{id:n.linkId,link:t.options.link}}),n}else return t})}),patchText:n,context:t,keepOriginalStyles:r});if(!a||!i)break}}let p=js.getMediaData(JSON.stringify(h),t.file.Media);p.length>0&&(f=!0,u.push({key:e,mediaDatas:p}))}l.set(e,h)}for(let{key:e,mediaDatas:t}of u){let n=`word/_rels/${e.split(`/`).pop()}.rels`,r=l.get(n)??Is();l.set(n,r);let i=us(r),a=js.replace(JSON.stringify(l.get(e)),t,i);l.set(e,JSON.parse(a));for(let e=0;e<t.length;e++){let{fileName:n}=t[e];ds(r,i+e,`http://schemas.openxmlformats.org/officeDocument/2006/relationships/image`,`media/${n}`)}}for(let{key:e,hyperlink:t}of d){let n=`word/_rels/${e.split(`/`).pop()}.rels`,r=l.get(n)??Is();l.set(n,r),ds(r,t.id,`http://schemas.openxmlformats.org/officeDocument/2006/relationships/hyperlink`,t.link,Fr.EXTERNAL)}if(f){let e=l.get(`[Content_Types].xml`);if(!e)throw Error(`Could not find content types file`);cs(e,`image/png`,`png`),cs(e,`image/jpeg`,`jpeg`),cs(e,`image/jpeg`,`jpg`),cs(e,`image/bmp`,`bmp`),cs(e,`image/gif`,`gif`),cs(e,`image/svg+xml`,`svg`)}let m=new Ho.default;for(let[e,t]of l){let n=Fs(t);m.file(e,Nr(n))}for(let[e,t]of p)m.file(e,t);for(let{data:e,fileName:t}of c.Media.Array)m.file(`word/media/${t}`,e);return m.generateAsync({type:e,mimeType:`application/vnd.openxmlformats-officedocument.wordprocessingml.document`,compression:`DEFLATE`})});return function(t){return e.apply(this,arguments)}})();var Fs=e=>(0,Yt.js2xml)(e,{attributeValueFn:e=>String(e).replace(/&(?!amp;|lt;|gt;|quot;|apos;)/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`).replace(/'/g,`&apos;`)}),Is=()=>({declaration:{attributes:{version:`1.0`,encoding:`UTF-8`,standalone:`yes`}},elements:[{type:`element`,name:`Relationships`,attributes:{xmlns:`http://schemas.openxmlformats.org/package/2006/relationships`},elements:[]}]});(function(){var e=$o(function*({data:e}){let t=e instanceof Ho.default?e:yield Ho.default.loadAsync(e),n=new Set;for(let[e,r]of Object.entries(t.files))!e.endsWith(`.xml`)&&!e.endsWith(`.rels`)||e.startsWith(`word/`)&&!e.endsWith(`.xml.rels`)&&Ss(is(yield r.async(`text`))).forEach(e=>Ls(e.text).forEach(e=>n.add(e)));return Array.from(n)});return function(t){return e.apply(this,arguments)}})();var Ls=e=>{let t=RegExp(`(?<=\\{\\{).+?(?=\\}\\})`,`gs`);return e.match(t)??[]},Rs=`Waratchaya M.D.`;function zs(e){return(e||``).split(`
`).filter(e=>e.trim()!==``).join(`
`)}function Bs({studyType:e,patientName:t,history:n,technique:r,comparison:i,findings:a,impression:o}){return`${t||``}

${e||``}

HISTORY
${zs(n)}

TECHNIQUE
${zs(r)}

COMPARISON
${zs(i)}

FINDINGS
${zs(a)}

IMPRESSION
${zs(o)}

${Rs}`}function Vs(e,t){let n=(t||``).split(`
`),r=n[0]||``,i=[new Ci({children:[new lr({text:`${e}: `,bold:!0}),new lr(r)]})];for(let e=1;e<n.length;e++)i.push(new Ci({children:[new lr(n[e])]}));return i}async function Hs({studyType:e,patientName:t,history:n,technique:r,comparison:i,findings:a,impression:o}){let s=new Lo({sections:[{children:[new Ci({children:[new lr({text:t||``})]}),new Ci({children:[]}),new Ci({children:[new lr({text:e||``,bold:!0})]}),new Ci({children:[]}),...Vs(`HISTORY`,n),new Ci({children:[]}),...Vs(`TECHNIQUE`,r),new Ci({children:[]}),...Vs(`COMPARISON`,i),new Ci({children:[]}),...Vs(`FINDINGS`,a),new Ci({children:[]}),...Vs(`IMPRESSION`,o),new Ci({children:[]}),new Ci({children:[new lr(Rs)]})]}]});Us(await ns.toBlob(s),`${(e||`report`).replace(/[^\w\- ]/g,``).trim().replace(/\s+/g,`-`)||`report`}.docx`)}function Us(e,t){let n=URL.createObjectURL(e),r=document.createElement(`a`);r.href=n,r.download=t,r.click(),URL.revokeObjectURL(n)}function Ws(e){let t=0;for(let n of Object.values(e||{}))for(let e of Object.values(n||{}))t+=Object.keys(e||{}).length;return t}function Gs(e){return Object.values(e||{}).reduce((e,t)=>e+(t?.length||0),0)}function Ks(e,t){let n=Ws(e),r=Gs(t);if(n===0&&r===0){window.alert(`Nothing to back up yet — you have no saved templates or phrases.`);return}let i={version:1,savedAt:new Date().toISOString(),templates:e,phrases:t};Us(new Blob([JSON.stringify(i,null,2)],{type:`application/json`}),`radiology-backup-${new Date().toISOString().slice(0,10)}.json`)}function qs(e,t,n){let r=new FileReader;r.onload=()=>{let e;try{e=JSON.parse(r.result)}catch{window.alert(`That file isn't valid backup data — it couldn't be read as JSON.`);return}if(!e||!e.templates&&!e.phrases){window.alert(`That file doesn't look like a radiology backup — no templates or phrases found in it.`);return}e.templates&&t(t=>Js(t,e.templates)),e.phrases&&n(t=>Ys(t,e.phrases)),window.alert(`Restored ${Ws(e.templates)} template(s) and ${Gs(e.phrases)} phrase(s). Anything already saved here was kept.`)},r.onerror=()=>window.alert(`Couldn't read that file.`),r.readAsText(e)}function Js(e,t){let n=structuredClone(e||{});for(let[e,r]of Object.entries(t)){n[e]=n[e]||{};for(let[t,i]of Object.entries(r||{}))n[e][t]={...n[e][t]||{},...i}}return n}function Ys(e,t){let n={...e||{}};for(let[e,r]of Object.entries(t))n[e]=Array.from(new Set([...n[e]||[],...r||[]]));return n}var Xs=[{group:`Age & sex`,items:[{label:`-year-old male`,text:`A -year-old male `},{label:`-year-old female`,text:`A -year-old female `},{label:`-year-old boy`,text:`A -year-old boy `},{label:`-year-old girl`,text:`A -year-old girl `}]},{group:`Connectors`,items:[{label:`known case of`,text:`known case of `},{label:`with history of`,text:`with history of `},{label:`S/P`,text:`S/P `},{label:`presented with`,text:`presented with `},{label:`physical examination showed`,text:`Physical examination showed `}]},{group:`Reason for study`,items:[{label:`sent to evaluate`,text:`This study was sent to evaluate `},{label:`sent to follow up`,text:`This study was sent to follow up.`},{label:`sent to rule out`,text:`This study was sent to rule out `},{label:`requested for surveillance`,text:`This study was requested for surveillance.`}]}],Zs=44,Qs=320,$s={history:``,technique:``,comparison:`None.`,findings:``,impression:``};function ec(e){if(!e)return;e.style.height=`auto`;let t=Math.min(Math.max(e.scrollHeight,Zs),Qs);e.style.height=`${t}px`,e.style.overflowY=e.scrollHeight>Qs?`auto`:`hidden`}var tc=(0,u.forwardRef)(function({patientInfo:e,setPatientInfo:t,fields:n,setFields:r,onSaveTemplate:i,onSaveTemplateAs:a,onDeleteCurrentTemplate:o,onUndo:s,canUndo:c},l){let[d,f]=(0,u.useState)(`findings`),[p,m]=(0,u.useState)(!1),h=(0,u.useRef)(null),g={history:(0,u.useRef)(null),technique:(0,u.useRef)(null),comparison:(0,u.useRef)(null),findings:(0,u.useRef)(null),impression:(0,u.useRef)(null)},v=e=>{let t=h.current,n=t?.scrollTop;e(),t&&n!=null&&(t.scrollTop=n)};(0,u.useEffect)(()=>{v(()=>{Object.values(g).forEach(e=>ec(e.current))})},[n.history,n.technique,n.comparison,n.findings,n.impression]);let y=(e,t)=>{let i=g[e].current,a=n[e]||``;if(!i){r(n=>({...n,[e]:(a?a+` `:``)+t}));return}let o=i.selectionStart??a.length,s=i.selectionEnd??a.length,c=a.slice(0,o)+t+a.slice(s);r(t=>({...t,[e]:c})),requestAnimationFrame(()=>{i.focus();let e=o+t.length;i.setSelectionRange(e,e)})};(0,u.useImperativeHandle)(l,()=>({insertAtCursor(e){y(d,e)}}));let b=e=>{r(t=>({...t,[e]:$s[e]}))};return(0,_.jsx)(`div`,{className:`h-full flex flex-col min-h-0`,children:(0,_.jsxs)(`div`,{ref:h,className:`flex-1 overflow-y-auto p-4 flex flex-col gap-3`,children:[(0,_.jsxs)(`div`,{className:`grid grid-cols-2 gap-2`,children:[(0,_.jsx)(`input`,{className:`border border-slate-300 rounded px-2 py-1 text-sm`,placeholder:`Patient name`,value:e.name,onChange:e=>t(t=>({...t,name:e.target.value}))}),(0,_.jsx)(`input`,{className:`border border-slate-300 rounded px-2 py-1 text-sm`,placeholder:`Study type`,value:e.studyType,onChange:e=>t(t=>({...t,studyType:e.target.value}))})]}),[{key:`history`,label:`History`},{key:`technique`,label:`Technique`},{key:`comparison`,label:`Comparison`},{key:`findings`,label:`Findings`},{key:`impression`,label:`Impression`}].map(({key:e,label:t})=>(0,_.jsxs)(`div`,{className:`flex flex-col shrink-0`,children:[(0,_.jsx)(`div`,{className:`flex items-center justify-between mb-1`,children:(0,_.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,_.jsx)(`button`,{type:`button`,className:`text-[11px] text-slate-400 hover:text-red-600 hover:bg-red-50 px-1.5 py-0.5 rounded border border-slate-200`,title:`Clear ${t}`,onClick:()=>b(e),children:`Clear`}),(0,_.jsx)(`label`,{className:`text-sm font-semibold text-slate-700`,children:t})]})}),e===`history`&&(0,_.jsx)(`div`,{className:`flex flex-wrap gap-x-3 gap-y-1 mb-1`,children:Xs.map(({group:e,items:t})=>(0,_.jsxs)(`div`,{className:`flex items-center gap-1 flex-wrap`,children:[(0,_.jsxs)(`span`,{className:`text-[11px] text-slate-400`,children:[e,`:`]}),t.map(({label:e,text:t})=>(0,_.jsx)(`button`,{type:`button`,className:`text-xs bg-slate-100 hover:bg-blue-100 text-slate-600 hover:text-blue-700 px-2 py-0.5 rounded-full border border-slate-200`,title:`Insert "${t.trim()}"`,onClick:()=>y(`history`,t),children:e},e))]},e))}),(0,_.jsx)(`textarea`,{ref:g[e],className:`border border-slate-300 rounded p-2 text-sm resize-none overflow-hidden focus:outline-none focus:ring-2 focus:ring-blue-300`,style:{height:Zs},value:n[e]||``,onFocus:()=>f(e),onChange:t=>{r(n=>({...n,[e]:t.target.value})),v(()=>ec(t.target))},spellCheck:`true`,lang:`en`})]},e)),(0,_.jsxs)(`div`,{className:`flex flex-col shrink-0`,children:[(0,_.jsx)(`span`,{className:`text-sm font-semibold text-slate-700 mb-1`,children:`Signature`}),(0,_.jsx)(`div`,{className:`px-2 py-1.5 text-sm text-slate-500 italic bg-slate-50 border border-dashed border-slate-200 rounded`,children:Rs})]}),(0,_.jsxs)(`div`,{className:`flex items-center gap-2 flex-wrap pt-1`,children:[(0,_.jsx)(`button`,{className:`text-slate-600 hover:text-slate-900 hover:bg-slate-100 disabled:text-slate-300 disabled:hover:bg-transparent text-sm font-medium px-3 py-2 rounded`,onClick:s,disabled:!c,title:`Undo (Ctrl+Z)`,children:`↺ Undo`}),(0,_.jsx)(`button`,{className:`bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded`,onClick:async()=>{let t=Bs({studyType:e.studyType,patientName:e.name,history:n.history,technique:n.technique,comparison:n.comparison,findings:n.findings,impression:n.impression});await navigator.clipboard.writeText(t),m(!0),setTimeout(()=>m(!1),1500)},children:p?`Copied!`:`Copy Report`}),(0,_.jsx)(`button`,{className:`bg-slate-700 hover:bg-slate-800 text-white text-sm font-medium px-4 py-2 rounded`,onClick:()=>{Hs({studyType:e.studyType,patientName:e.name,history:n.history,technique:n.technique,comparison:n.comparison,findings:n.findings,impression:n.impression})},children:`Export as DOCX`}),(0,_.jsx)(`button`,{className:`text-slate-600 hover:text-slate-900 hover:bg-slate-100 text-sm font-medium px-3 py-2 rounded`,onClick:i,title:`Save changes to the loaded template`,children:`Save`}),(0,_.jsx)(`button`,{className:`text-slate-600 hover:text-slate-900 hover:bg-slate-100 text-sm font-medium px-3 py-2 rounded`,onClick:a,title:`Save a copy under a new name`,children:`Save As`}),(0,_.jsx)(`button`,{className:`text-red-600 hover:text-red-800 hover:bg-red-50 text-sm font-medium px-3 py-2 rounded`,onClick:o,title:`Delete the loaded template`,children:`Delete`})]})]})})});function nc(e,t){let n=[];for(let r of Object.keys(e)){let[i,a]=r.split(`.`);for(let o of e[r])n.push({modality:i,region:a,key:r,phrase:o,source:t,searchText:o.toLowerCase()})}return n}function rc({premadePhrases:e,userPhrases:t,openScope:n,onInsertPhrase:r,onSavePhrase:i,onDeleteUserPhrase:a,collapsed:o,onToggleCollapsed:s}){let[c,l]=(0,u.useState)(``),d=(0,u.useMemo)(()=>[...nc(e,`premade`),...nc(t,`user`)],[e,t]),f=n&&n.region,p=f?d.filter(e=>e.modality===n.modality&&e.region===n.region):[],g=c.trim().toLowerCase(),v=g?p.filter(e=>e.searchText.includes(g)):p;return o?(0,_.jsx)(`div`,{className:`h-full min-h-0 flex flex-col items-center bg-slate-50 border-l border-slate-200 py-2`,children:(0,_.jsx)(`button`,{className:`text-slate-500 hover:text-slate-800 hover:bg-slate-200 rounded px-1 py-2`,title:`Expand phrases panel`,onClick:s,children:`◂`})}):(0,_.jsxs)(`div`,{className:`h-full min-h-0 flex flex-col bg-slate-50 border-l border-slate-200`,children:[(0,_.jsxs)(`div`,{className:`p-3 border-b border-slate-200`,children:[(0,_.jsxs)(`div`,{className:`flex items-center justify-between mb-2`,children:[(0,_.jsx)(`h2`,{className:`text-sm font-semibold text-slate-700`,children:`Phrases`}),(0,_.jsx)(`button`,{className:`shrink-0 text-slate-500 hover:text-slate-800 hover:bg-slate-200 rounded px-1.5 py-0.5`,title:`Collapse phrases panel`,onClick:s,children:`▸`})]}),(0,_.jsx)(`input`,{className:`w-full border border-slate-300 rounded px-3 py-1.5 text-sm`,placeholder:`🔍 Search phrases...`,value:c,onChange:e=>l(e.target.value)})]}),(0,_.jsxs)(`div`,{className:`flex-1 overflow-y-auto`,children:[!f&&(0,_.jsx)(`div`,{className:`p-4 text-sm text-slate-400`,children:`Open a modality & region on the left to see its phrases.`}),f&&v.length===0&&(0,_.jsxs)(`div`,{className:`p-4 text-sm text-slate-400`,children:[`No phrases yet for `,m(n.modality),` · `,h(n.region),`.`]}),v.map((e,t)=>(0,_.jsxs)(`div`,{className:`group flex items-center justify-between px-3 py-2 text-sm hover:bg-blue-50 cursor-pointer border-b border-slate-100`,onClick:()=>r(e.phrase),title:`Click to insert at cursor`,children:[(0,_.jsx)(`div`,{className:`text-slate-800`,children:e.phrase}),e.source===`user`&&(0,_.jsx)(`button`,{className:`opacity-0 group-hover:opacity-100 text-red-500 hover:text-red-700 text-xs px-2 shrink-0`,title:`Delete phrase`,onClick:t=>{t.stopPropagation(),a(e.key,e.phrase)},children:`🗑`})]},`${e.source}-${e.key}-${t}`))]}),(0,_.jsx)(`div`,{className:`p-3 border-t border-slate-200`,children:(0,_.jsx)(`button`,{className:`w-full bg-slate-800 hover:bg-slate-900 disabled:bg-slate-300 text-white text-xs font-medium py-2 rounded`,onClick:i,disabled:!f,children:`+ Add Phrase`})})]})}function ic(e,t){let[n,r]=(0,u.useState)(()=>{try{let n=window.localStorage.getItem(e);return n===null?t:JSON.parse(n)}catch{return t}});return(0,u.useEffect)(()=>{try{window.localStorage.setItem(e,JSON.stringify(n))}catch{}},[e,n]),[n,r]}var ac={ct:{abdomen:{"Hepatocellular Carcinoma (HCC)":{history:``,studyType:`CT Upper Abdomen`,technique:`Axial CT scans of the whole abdomen were performed with IV contrast material according to the standard protocol.`,comparison:`None.`,findings:`The study reveals normal sized liver with smooth surface, diffused decreased attenuation of liver parenchyma, compatible with moderate fatty liver.

 Two well-defined liver masses with heterogeneous arterial enhancement with necrotic portion and washout in portovenous phase. Capsular enhancement is seen on delayed phase, size about 4.7x6.4 cm and 9.4x8.6 cm at left and right hepatic lobe, respectively. Another arterial enhancing mass with washout on portovenous phase. Delayed capsular enhancement and fat containing is also seen at hepatic segment V, size about 4.2x3.6 cm.

 These masses cause pressure effect to right hepatic vein and obliterate posterior branch of right portal vein. Questionable invasion to right hemidiaphragm is also noted (IM 123, SE 3).

 Several homogeneous arterial enhancing nodules scattering both hepatic lobes, size up to 1 cm at hepatic segment VIII.

 All of these liver masses/nodules are compatible with hepatocellular carcinoma (HCC) without evidence of liver cirrhosis.

 No biliary dilatation is found. Portal vein and hepatic veins are patent.

 Gallbladder has smooth, thin wall without opaque gallstone.

 Spleen, pancreas are unremarkable.

 Nodular appearance of bilateral adrenal glands, could be adrenal metastases or adrenal nodules. Follow-up is advised.

 Both kidneys have normal size and symmetrical enhancement without stone or hydronephrosis.1.2-cm right renal cyst and 1.0-cm left renal cyst is seen, Bosniak I.

 Stomach and visualized small bowels are unremarkable.

 Colonic diverticula along right sided colon with adjacent minimal fat stranding (IM213, SE4), could be from prior infection/inflammation. Please correlate with clinical context.

 Minimal perihepatic and perinephric fluid.

 No peritoneal nodule is noted.

 Subcentimeter periportal, aortocaval and right cardiophrenic nodes.

 Atherosclerotic abdominal aorta.

 Mild degenerative change of spine. No evidence of bone metastasis.

 Subtle pleural effusion both basal lungs. Minimal fibrosis and plate atelectasis of both basal lungs. No gross pulmonary mass is observed.`,impression:`Multifocal HCC with mass effect to right hepatic vein and obliteration of posterior branch of right portal vein. Questionable invasion to right hemidiaphragm is noted.
No evidence of cirrhosis or portal hypertension.
Moderate fatty liver.`},Cholangiocarcinoma:{history:``,studyType:`CT Chest & Whole Abdomen`,technique:`Axial CT scans of the whole abdomen were performed with IV contrast material according to the standard protocol.`,comparison:`None.`,findings:`-A large well-defined lobulated mass occupying segment 7, 6, and 5 depicting mild continuous irregular peripheral arterial enhancement with progressive centripetal filled-in in portovenous phase, with associated subcapsular retraction and adjacent IHD dilatation, measured 9.8x7.8x8.6 cm (APxWxH). These are suggestive of mass forming cholangiocarcinoma.

- A tiny liver cyst at hepatic segment 2 is noted.

HEPATIC VV: Patent.

GALLBLADDER/BILE DUCTS: Collapse gallbladder without calcified gallstones. No wall thickening, no pericholecystic fat stranding. No CBD dilatation.

SPLEEN: Splenimegaly, measured 14.2 cm. No focal lesions.

PANCREAS: No stone or duct dilatation.

ADRENALS: Unremarkable.

KIDNEYS: Normal size with symmetrical enhancement of both kidneys. Cortical thinning of left kidney is observed. Few calcified bilateral renal stones, size up to 0.6 cm at lower pole of left kidney. Another 2.3 cm calcified stone at left upper ureter, causing upstream moderate hydronephrosis and hydroureter.

 The right ureter is unremarkable.

BLADDER: Normal.

PELVIC ORGANS: Normal.

GI TRACT: No distension or wall thickening.

PERITONEUM/RETROPERITONEUM: Minimal low density free fluid in pelvic cavity.

VESSELS: Atherosclerotic change of aorta and its branches. Patent IVC.

LYMPH NODES: Multiple lymphadenopathies along peripancreatic, paraaortic, aortocaval and retrocaval regions. The largest one is lobulated contour with internal necrotic portion, measured 4.5x5.9x6.9 cm at paraaortic region.

 Multiple subcentimeter periportal lymph nodes are noted.

ABDOMINAL WALL: Left lower abdominal muscle wall atrophy, causing minimal bulging of small bowel at LLQ. No abdominal wall defect is seen. These findings could be abdominal wall paralysis or eventration.

BONES: Osteolytic lesion at right pedicle, laminar, and transverse process of T10 spinal level and right posterior 10th and 11th ribs with extraosseous soft tissue formation along right paraspinal area (T9-T12 level). The extraosseous soft tissue formation extends to the spinal canal (T9-T10 level). Pathological fracture of right posterior 10th and 11th ribs are noted. All of these findings suggested bony metastasis.

TUBES/LINES: None.

LUNGS/MAJOR AIRWAYS: Passive atelectasis with adjacent ground glass opacity of RLL, suggestive of infectious/inflammatory process. No gross pulmonary mass. Patent airways.

PLEURA: Moderate degree of right pleural effusion connecting to loculated right pleural effusion Ddx mild enhancing pleural nodule with adjacent mild thickening and enhancing pleura, suspected right pleural metastasis or pleuritis. Correlated with pleural fluid cell cytology or C/S could be helpful.

 Obliteration of fat plane between the aforementioned extraosseous soft tissue mass and adjacent right posterior pleura (T9-T11 level)

 No pneumothorax.

DIAPHRAGM: Normal position.

HEART/PERICARDIUM/GREAT VESSELS: Cardiomegaly with pericardial effusion. MEDIASTINUM: Normal visualized thyroid. Multiple subcentimeter mediastinal nodes.

CHEST WALL/AXILLA: No mass.`,impression:`A 9.8x7.8x8.6-cm (APxWxH) mass-forming cholangiocarcinoma at hepatic segment 7/6/5`},"Liver Cirrhosis with Portal Hypertension":{history:``,studyType:`CT Upper Abdomen`,technique:`Axial CT scans of the whole abdomen were performed with IV contrast material according to the standard protocol.`,comparison:`None.`,findings:`The study reveals enlarged caudate and left lobe liver with nodular surface, suggestive of liver cirrhosis.

 - No definite liver mass or biliary dilatation is found.

 - Portal vein and hepatic veins are patent.

 - Gallbladder has smooth, thin wall without opaque gallstone. Few tiny gallbladder polyps are seen.

 - Spleen size 16 cm in craniocaudal length, suggestive splenomegaly. Paraesophageal varices.

 - Epigastric, paraesophageal, and splenic varies are seen

All of these are evidence of portal hypertension.

 - Pancreas is unremarkable.

 - Mild thickening of left adrenal gland. Right adrenal gland shows unremarkable.

 - Both kidneys have normal size and symmetrical enhancement without stone or hydronephrosis.

 - Stomach and visualized bowels are unremarkable.

 - Atherosclerosis of aorta is noted.

 - No ascites, peritoneal nodule or significant intraabdominal lymphadenopathy is found.

 - Degenerative changed of visualized spine with narrowing disc space at L4-L5 and L5-S1 level. Grade 1 retrolisthesis of L4 over L5. No bony destruction is found.`,impression:`Liver cirrhosis with portal hypertension. No evidence of HCC.`},"Hepatic Cyst":{history:``,studyType:`CT Whole Abdomen (Emergency)`,technique:`Axial CT scans of the whole abdomen were performed with IV contrast material according to the standard protocol.`,comparison:`None.`,findings:`TUBE AND LINE: The tip of the tracheostomy tube is located 3.3 cm from the carina.

Central line placement with the tip in SVC-RA junction.

The tip of the NG/OG tube is in the gastric body.

LIVER: Normal size with homogeneous density of liver parenchyma. Multiple well-defined hypodense lesions scatter in both lobe, size up to 1.2 cm at segment 4a, suggestive of liver cysts.

HEPATIC VESSELS: Patent.

GALLBLADDER/BILE DUCTS: No wall thickening, calcified gallstones or pericholecystic fat stranding. No duct dilatation.

SPLEEN: Normal size. No focal lesions.

PANCREAS: Atrophic changed without stone or duct dilatation.

ADRENALS: No nodule.

KIDNEYS/URETERS: A non-obstructive tiny calyceal stone at upper pole or left kidney. No hydronephrosis or solid mass. Few simple cysts at both kidneys, size 0.7 cm.

BLADDER: Collapse with indwelling Foley’s catheter.

PELVIC ORGANS: S/P hysterectomy with a 2.6x2.1 cm right ovarian cyst. Left adnexa is unremarkable.

GI TRACT: No distension or wall thickening.

PERITONEUM/RETROPERITONEUM: No free fluid, fluid collection or free air.

OTHER VESSELS: Atherosclerotic changed along abdominal aorta.

LYMPH NODES: No enlargement.

ABDOMINAL WALL/BONES: Hypodense lesion at mid lower sternum, size 2.2x1.7 cm, suggestive of post operative change.

Compression fracture at L1 and L4 vertebral body. Grade 1 anterolisthesis of L4 over L5. Grade 1 retrolisthesis of L1 over L2.

OTHER: A 3.1x1.6 cm fat density lesion at left gluteus minimus muscle, suggestive of lipoma.

Left hemiarthroplasty.`,impression:`Multiple liver cysts scatter in both lobe, size up to 1.2 cm at segment 4a.`},"Cholelithiasis / Cholecystitis":{history:``,studyType:`CT Whole Abdomen`,technique:`Axial CT scans of the whole abdomen were performed with IV contrast material according to the standard protocol.`,comparison:`None.`,findings:`The study reveals still seen homogeneous enhancement with edematous change of pancreatic head, body and tail with no area of pancreatic necrosis, suggestive of interstitial edematous pancreatitis (IEP).

 Increased heterogenous enhancement peripancreatic fluid with fat necrotic component, extending to subhepatic, perisplenic, perigastric, anterior pararenal fascia, hepatic flexure colon, mesenteric root and omentum, suggestive of increased degree of acute peripancreatic fluid collection(APFC) with fat necrosis or acute necrotic collection (peripancreatic alone) (modified CT severity index score = 4). Few subcentimetre periportal nodules and anterior pararenal fascia thickening were seen.

 Anterior pararenal fascia thickening and enhancing could be from inflammatory process.

 No pancreatic stone, parenchymal calcification, parenchymal hemorrhage, duct dilatation or mass is demonstrated.

 No pseudoaneurysm or venous thrombosis of splenic vessels is seen.

 Few subcentimetre periportal, portocaval, and paraaortic lymph nodes, suggestive of reactive nodes.

 Normal-sized liver with homogeneous density of liver parenchyma. No definite liver mass or biliary dilatation is found. Portal vein and hepatic veins are patent.

 Few small gallstones without evidence of cholecystitis.

 Spleen and bilateral adrenal glands are unremarkable.

 Stomach, small bowels and colon appear unremarkable.

 Bilateral kidneys have normal size with symmetrical enhancement without stone or hydronephrosis. Unchanged renal cyst at lower pole right kidney, measured about 1.2 cm and hemorrhagic cyst at lower pole left kidney, measured about 1.0 cm.

 Urinary bladder has smooth, thin wall without detectable stone.

 Prostate gland enlargement with calcification, measured about 5.1x7.1x4.7 cm (Volume=88.5 ml) and bilateral seminal vesicles are unremarkable.

 No gross ascites or peritoneal nodule.

 Atherosclerosis of abdominal aorta and iliac branches.

 Degenerative change of visualized spine with heterogenous bony density without gross bony destruction.

 Subsegmental atelectasis at both lower lung and few calcified nodules at left lower lobe were seen. No pleural effusion is detected.

 Evidence of gastric tube with its tip in body of stomach.

- S/P percutaneous catheter drainage via right side abdomen with slightly decreased in size of rim-enhancing fluid collection in right perinephric space, now measuring approximately 8.5x4.8 cm. which extends inferomedially into right retroperitoneal space. Perinephric fluid and fat stranding is still seen. Inflammatory soft tissue at medial side of the collection (IM212, SE302) is observed. All of these are compatible with infected hematoma.

- The collection causes pressure effect to right kidney. Interval decrease size of right kidney is observed. Heterogeneous enhancement with indistinct corticomedullary differentiation of right kidney is noted, suggestive of pyelonephritis.

- No new collection is detected.

- Decreased enhancement with delayed excretory function of both kidneys, compatible with history of ESRD.

- Not seen hydronephrosis or mass at both kidneys.

- Diffuse urinary bladder wall thickening, suggestive of inflammatory process.

- Still noted gallbladder wall thickening measured 0.5 cm with focal wall less enhancement, and slightly decreased degree of distension. Pericholecystic fluid, fat stranding, and transient hepatic attenuation differences (THADs) at gallbladder fossa is also noted, suggestive of gangrenous cholecystitis.

- Evidence of cholecystostomy insertion with its tip on gallbladder lumen.

- Normal-sized liver with homogeneous density of liver parenchyma. No definite liver mass or biliary dilatation is found. Portal vein and hepatic veins are patent.

- Pancreas and adrenal glands appear unremarkable.

- Seen a 0.6 cm hypodense lesion in splenic parenchyma, suggestive splenic cyst.

- Stomach, small bowels and colon appear unremarkable. Seen hyperdense content within gastric lumen.

- Absent uterus and both adnexas. Intact vaginal stump. No gross mass is seen.

- No peritoneal nodule.

- Minimal ascites at perihepatic region.

- Multiple subcentimeter lymph nodes at paraaortic and aortocaval regions, suggestive of reactive nodes

- Minimal pleural thickening at LLL. No pulmonary nodules or infiltration is noted.

- Degenerative change of visualized spine with heterogenous bony density without gross bony destruction.`,impression:`Few small gallstones without evidence of cholecystitis.
Gangrenous cholecystitis with evidence of cholecystostomy with slightly decreased degree of gallbladder distension.`},"Acute Pancreatitis":{history:``,studyType:`CT Whole Abdomen`,technique:`Axial CT scans of the whole abdomen were performed with IV contrast material according to the standard protocol.`,comparison:`None.`,findings:`- Diffuse enlargement with focal hypoenhancing area at pancreatic tail, about <30%, represented acute necrotizing pancreatitis. Surrounding fluid and fat haziness along peripancreatic region, perigastric, perihepatic, perisplenic, both anterior pararenal spaces, interbowel loops and both paracolic gutters, corresponding with acute necrotic collection (ANC).

 Small amount of ascites. No well-formed collection or intraperitoneal free air. Patent splenic vein. No detectable splenic artery pseudoaneurysm.

 Normal size and diffused decreased homogenous density of liver parenchyma, suggestive of fatty liver. No focal lesion. Portal vein and hepatic veins are patent.

 Not well-distened gallbladder. No detectable opaque stone. No CBD and IHD dilatation.

 Spleen and bilateral adrenal glands are unremarkable.

 Both kidneys have normal size and symmetrical enhancement without stone or hydronephrosis.

 Stomach and visualized bowels are unremarkable.

 Several subcentrimeter intraabdominal lymph nodes at perigastric, peripancreatic, aortocaval and paraaortic, up to 0.6 cm, likely reactive lymph nodes.

 Fat containing left indirect inguinal hernia

 No gross bony destruction.

 Subsegmental atelectasis at both basal lungs. No pleural effusion. Cardiomegaly.`,impression:`Acute necrotizing pancreatitis; modified CT severity index = 8
#Pancreatic Necrosis <30%
#Surrounding acute necrotic collection
#Ascites`},Splenomegaly:{history:``,studyType:`CT Urography`,technique:`Axial CT scans of the whole abdomen were performed with IV contrast material according to the standard protocol.`,comparison:`None.`,findings:`- The study reveals normal size of both kidneys with symmetrical enhancement and normal excretory function. A staghorn stone at right renal pelvis was seen, measured about 2.2 cm.

- Prominent size of bilateral renal pelvicalyceal system. No renal mass is seen.

- Suspected kicking or mild stricture at lower left ureter. The right ureter is unremarkable.

- The urinary bladder has mild thickening wall without mass or stone.

- Diffuse fat standing surrounding bilateral ureter, abdominal aorta, celiac trunk, SMA, IMA, IVC, head&neck pancreas, and mesentery, suspected post treatment change or inflammatory process. DDx retroperitoneal fibrosis.

- Liver shows normal size, smooth surface, and normal parenchymal attenuation. No other liver masses are observed.

- Portal veins and hepatic veins appear patent.

- Gallbladder has smooth, thin wall with no detectable opaque stone.

- Mild splenomegaly, measured size about 13.6 cm with no evidence of gross lesion.

- Stomach, small bowels and colon appear unremarkable.

- Bilateral adrenal glands appear unremarkable.

- Prostate gland measured about 3.0x4.5x3.8 cm, 26.7 ml and bilateral seminal vesicles are unremarkable.

- No ascites or peritoneal nodules.

- Atherosclerosis of abdominal aorta and iliac branches.

- Degenerative change of visualized spine with decreased vertebral height at L5 level. No destruction of visualized bony structure was seen.

- No pleural effusion or gross mass is seen.`,impression:`Mild splenomegaly, measured size about 13.6 cm with no evidence of gross lesion.`},"Splenic Lymphangioma":{history:``,studyType:`CT Urography`,technique:`Axial CT scans of the whole abdomen were performed with IV contrast material according to the standard protocol.`,comparison:`None.`,findings:`The study reveals an increased size of mild lobulated enhancing mass at left side vaginal stump, measured about 1.7x1.7 cm (IM 252 SE 302). The mass had pressure effect to adjacent left distal ureter, causing mild left hydronephrosis and mild left hydroureter.

 Few bilateral renal simple cysts, size up to 0.5-cm at lower pole of left kidney, Bosniak I.

 Normal size of both kidneys with symmetrical enhancement and excretory function. No renal mass or hydronephrosis/hydroureter of right kidney.

 The urinary bladder has a smooth thin wall without mass or stone.

 Liver shows normal size, smooth surface, and normal parenchymal attenuation. No other liver masses are observed.

 Portal veins and hepatic veins appear patent.

 No IHD or CBD dilatation is found.

 There are several small gallstones without evidence of cholecystitis.

 Pancreas and both adrenal glands appear unremarkable.

 The spleen shows increased size of a 1.9 cm (prior 1.5 cm in 08/2025, 0.6 cm in 2023) cystic lesion at subcapsular at posterior aspect of spleen, suspected lymphangioma.

 Stomach, small bowels and colon appear unremarkable.

 Post hysterectomy and oophorectomy with enhancing mass at vaginal stump as mentioned above.

 No significant change in size of three enhancing nodules at anterior abdominal wall. (IM 215, 256, 289, SE 304), suspicious for tumoral seeding.

 Multiple subcentimeter nodes at paraaortic and aortocaval nodes, could be reactive nodes.

 No ascites is noted.

 Spondylosis without gross lytic lesion. Bilateral L5 spondylolysis with grade 1 anterolisthesis of L5 over S1.

 Unchanged pulmonary nodule, size 0.9 cm at medial-basal segment of right lower lobe.`,impression:`Increased size of a 1.8 cm subcapsular cyst at posterior aspect of spleen, suspected lymphangioma.`},"Adrenal Nodule / Metastasis":{history:``,studyType:`CT Upper Abdomen`,technique:`Axial CT scans of the whole abdomen were performed with IV contrast material according to the standard protocol.`,comparison:`None.`,findings:`The study reveals normal sized liver with smooth surface, diffused decreased attenuation of liver parenchyma, compatible with moderate fatty liver.

 Two well-defined liver masses with heterogeneous arterial enhancement with necrotic portion and washout in portovenous phase. Capsular enhancement is seen on delayed phase, size about 4.7x6.4 cm and 9.4x8.6 cm at left and right hepatic lobe, respectively. Another arterial enhancing mass with washout on portovenous phase. Delayed capsular enhancement and fat containing is also seen at hepatic segment V, size about 4.2x3.6 cm.

 These masses cause pressure effect to right hepatic vein and obliterate posterior branch of right portal vein. Questionable invasion to right hemidiaphragm is also noted (IM 123, SE 3).

 Several homogeneous arterial enhancing nodules scattering both hepatic lobes, size up to 1 cm at hepatic segment VIII.

 All of these liver masses/nodules are compatible with hepatocellular carcinoma (HCC) without evidence of liver cirrhosis.

 No biliary dilatation is found. Portal vein and hepatic veins are patent.

 Gallbladder has smooth, thin wall without opaque gallstone.

 Spleen, pancreas are unremarkable.

 Nodular appearance of bilateral adrenal glands, could be adrenal metastases or adrenal nodules. Follow-up is advised.

 Both kidneys have normal size and symmetrical enhancement without stone or hydronephrosis.1.2-cm right renal cyst and 1.0-cm left renal cyst is seen, Bosniak I.

 Stomach and visualized small bowels are unremarkable.

 Colonic diverticula along right sided colon with adjacent minimal fat stranding (IM213, SE4), could be from prior infection/inflammation. Please correlate with clinical context.

 Minimal perihepatic and perinephric fluid.

 No peritoneal nodule is noted.

 Subcentimeter periportal, aortocaval and right cardiophrenic nodes.

 Atherosclerotic abdominal aorta.

 Mild degenerative change of spine. No evidence of bone metastasis.

 Subtle pleural effusion both basal lungs. Minimal fibrosis and plate atelectasis of both basal lungs. No gross pulmonary mass is observed.`,impression:`Nodular appearance of bilateral adrenal glands, could be adrenal metastases or adrenal nodules. Follow-up is advised.`},"Renal Cyst":{history:``,studyType:`CT Whole Abdomen`,technique:`Axial CT scans of the whole abdomen were performed with IV contrast material according to the standard protocol.`,comparison:`None.`,findings:`The study reveals normal-sized liver with homogeneous density of liver parenchyma. Unchanged multiple well-defined non-enhanced hypodense lesions scatter in both hepatic lobes, size up to 0.8 cm at hepatic dome, suggestive of liver cysts. No definite liver mass or biliary dilatation is found. Portal vein and hepatic veins are patent.

 Gallbladder has smooth, thin wall with no detectable opaque stone.

 Spleen and bilateral adrenal glands are unremarkable.

 Small hypodense lesion at pancreatic head, measured 0.4 cm, suspected lipoma.

 Stomach, small bowels and colon appear unremarkable.

 Bilateral kidneys have normal size with symmetrical enhancement with a 0.2-cm calyceal stone at upper pole of left kidney without evidence of obstruction. Unchanged few bilateral renal cysts, measured size up to 1.4 cm at interpolar region of left kidney.

 Urinary bladder has smooth, thin wall without detectable stone.

 Prostate gland measured about 4.1x4.5x3.9 cm, 37.4 ml and bilateral seminal vesicles are unremarkable.

 No ascites, peritoneal nodule or significant intraabdominal lymphadenopathy.

 Atherosclerosis of abdominal aorta and iliac branches.

 Degenerative change of visualized thoracolumbar spine without gross bony destruction. Decreased vertebral height at L2 level. Narrowing intervertebral disc space at L4/5.

 Unchanged fat containing left direct inguinal hernia.

 Elevation of right hemidiaphragm.

 For lower thorax, please see chest report on the same date.`,impression:`Unchanged a few bilateral renal cysts.`},"Nephrolithiasis with Hydronephrosis":{history:``,studyType:`CT Whole Abdomen (Emergency)`,technique:`Axial CT scans of the whole abdomen were performed with IV contrast material according to the standard protocol.`,comparison:`None.`,findings:`The study reveals a 3.7-mm stone at left ureterovesical junction(UVJ), causing upstream mild hydronephrosis and mild hydroureter. Mild enhancing thickened wall along left ureter and left renal pelvis with surrounding fat stranding, compatible with left pyeloureteritis.

 Relatively enlarged left kidney surrounding with mild fat reticulation is suggestive of acute pyelonephritis. No evidence of renal abscess is found. Symmetrical enhancement of both renal parenchyma is noted.

 Visualized right kidney shows no abnormal enhancement, stone or hydronephrosis.

 The urinary bladder has smooth, thin wall without detectable stone.

 Prostate gland and seminal vesicles are unremarkable.

 Prominent-sized liver with homogeneous density of liver parenchyma. A 1.6 cm cystic lesion at hepatic segment 5. Prominent size of IHD and CBD, measured 0.8 mm without demonstrated calcified stone or gross mass. Portal vein and hepatic veins are patent.

 A 1.5 cm gall stone with fundal adenomyomatosis. No evidence of acute cholecystitis is seen.

 Spleen, pancreas, and bilateral adrenal glands are unremarkable.

 Stomach, small bowels and colon appear unremarkable. A 2.7x1.6 cm diverticulum at 1st part of duodenum. Colonic diverticula are noted.

 No ascites, fluid collection or significant intraabdominal lymphadenopathy.

 Visualized both lower lungs show no active infiltration. No pleural effusion.

 No bony destruction.`,impression:`An obstructive 3.7-mm left ureterovesical junction(UVJ) stone, causing mild hydroureter and hydronephrosis.
Prominent size of IHD and CBD, measured 0.8 mm without demonstrated calcified stone or gross mass.
A 1.5 cm gall stone. No evidence of acute cholecystitis.`},"Acute Appendicitis":{history:``,studyType:`CT Whole Abdomen (Emergency)`,technique:`Axial CT scans of the whole abdomen were performed with IV contrast material according to the standard protocol.`,comparison:`None.`,findings:`LIVER: Normal size. Diffuse hypoattenuation of liver parenchyma suggestive of fatty liver. A tiny cystic lesion at hepatic segment 7. No gross mass.

HEPATIC VESSELS: Patent.

GALLBLADDER/BILE DUCTS: Collapse gallbladder. No gallbladder wall thickening, calcified gallstones or pericholecystic fat stranding. No pericholecystic fluid. IHD and CBD show no dilatation.

SPLEEN: Normal size. No focal lesion.

PANCREAS: No stone or duct dilatation.

ADRENALS: No nodule.

KIDNEYS/URETERS: No stone, hydronephrosis or solid mass. A 0.9 mm cyst at lower pole of left kidney.

BLADDER: Not well-distened bladder with indwelling Foley’s catheter. Diffused urinary bladder wall thickening without stone.

PELVIC ORGANS: unremarkable.

GI TRACT/PERITONEUM: Enlarged appendix, 1.5 cm in maximal diameter at proximal part of appendix with irregular enhanced wall and diffuse wall thickening (0.5 cm in maximal thickness). No definite appendiceal wall discontinuation is seen. A rim-enhancing loculated fluid collection with internal air bubbles, measured 0.8x0.2 cm at RLQ. All of these findings are compatible with ruptured appendicitis with appendiceal abscess.

- Periappendiceal fat stranding, thickening and enhancing at adjacent right lateral conal fascia, as well as circumferential wall edema of IC valve, adjacent cecum and ascending colon are suggestive of secondary inflammation.

- Diffuse small bowel dilatation with a few sites of abrupt focal luminal narrowing such as at proximal jejunum and ileum. No definite mass at the transition point, suspected small bowel obstruction from fibrosis.

- A 0.5x0.2 cm rim-enhancing fluid collection in pelvic cavity.

- No demonstrable appendicolith.

- No gross of colonic diverticulum.

- Minimal ascites along subhepatic, right paracolic gutter, right lower abdomen, and interbowel loop regions.

LYMPH NODES: Several subcentrimeter lymph nodes at ileocolic and mesenteric regions. A 1.0-cm lymphadenopathy at ileocolic region is noted.

ABDOMINAL WALL/BONES: Normal.

VISUALIZED LOWER THORAX: Minimal bilateral pleural effusion with atelectasis at both lower lungs. Mild cardiomegaly.

Evidence of NG/OG tube with its tip in gastric fundus.`,impression:`Suggestive of ruptured appendicitis with appendiceal abscess and localized peritonitis at adjacent right lateroconal fascia.`},Malakoplakia:{history:``,studyType:`CT Whole Abdomen`,technique:`Axial CT scans of the whole abdomen were performed with IV contrast material according to the standard protocol.`,comparison:`None.`,findings:`The study reveals residual multiloculated cystic lesions with rim calcific enhancement at bilateral adnexa. Left adnexal lesion is decreased in size to 5.9x4.0 cm with extends to or involves left psoas and left iliacus. No significant change of right adnexal lesion with extends to or involves right psoas and attach to right external iliac vessels, measured about 3.4x2.7 cm.

 Decrease size of loculated cystic lesion with rim enhancement anteromedial to left iliacus muscle up to 2.4x6.8 cm.

 All of these findings suggest residual malakoplakia.

 Newly seen loculated cystic lesion with rim enhancement at anterior aspect of left psoas, measured about 2.7x1.6x2.6 cm (IM 153, SE 302).

 Post TAH and BSO. Intact vaginal stump.

 Slightly decreased in size of well-defined internal hypodensity lesion with rim calcific enhancement at upper pole of left kidney, measured about 1.2x1.2 cm, probably Malakoplakia.

 Unchanged bilateral renal cysts, size up to 1.5 cm at upper pole of left kidney (Bosniak 1). A 1.3 cm hemorrhagic cyst at upper pole of right kidney is still noted (Bosniak 2).

 Diffuse nodular thickening of bladder wall, probably Malakoplakia.

 No significant change of lymphadenopathies along paraaoric, aortocaval and left common iliac regions, size up to 2.1 cm at paraaortic region.

 The liver shows scattering few low density foci of too small to characterize. There is no IHD dilatation.

 The gallbladder shows no gallstone. Patent portal veins and hepatic veins

 The pancreas, spleen and both adrenal glands are not remarkable.

 Colonic diverticula are seen.The stomach and the rest of bowel loops are not remarkable.

 No ascites or intraabdominal collection are noted.

 Unchanged collapsed vertebral bodies of L1 and L3 level without bony destruction. Unchanged few areas of fracture at right inferior pubic ramus. Bony degenerative changes are seen.

 No significant change of posterior basal segment of LLL nodule, size 0.8 cm.

 Evidence of surgical scar with surgical material at mid anterior abdominal wall.`,impression:`Two residual abscess at bilateral adnexa with extends to or involves left psoas, left iliacus, right psoas and attach to right external iliac vessels. Decrease size of another abscess anteromedial to left iliacus muscle.
Newly seen abscess at anterior aspect of left psoas, compatible with Malakoplakia.
Slightly decreased in size of well-defined hypodensity cystic lesion at upper pole of left kidney, measured about 1.2x1.2 cm, probably Malakoplakia.
Diffuse nodular thickening of bladder, probably Malakoplakia.`},"Intra-abdominal Lymphadenopathy / Lymphoma":{history:``,studyType:`CT Whole Abdomen`,technique:`Axial CT scans of the whole abdomen were performed with IV contrast material according to the standard protocol.`,comparison:`None.`,findings:`The study reveals normal-sized liver with homogeneous density of liver parenchyma. No definite liver mass or biliary dilatation is found.

 Portal vein and hepatic veins are patent.

 Gallbladder has smooth, thin wall with no detectable opaque stone.

 Pancreas and bilateral adrenal glands are unremarkable.

 Prominent size of spleen, measured 11.9 cm without focal lesion. Lymphoma involvement cannot be excluded. Splenic varices are also noted.

 Bilateral kidneys have normal size with symmetrical delayed nephrogram. No stone, mass, or hydronephrosis.

 Stomach, small bowels and colon appear unremarkable. A 2 cm diverticulum at 3rd part duodenum.

 Collapse urinary bladder without detectable stone.

 Enhancing mass with tiny calcification protrudes from uterine fundus, measured 4.9x2.8 cm, suggestive of calcified myoma uteri. No gross adnexal mass is observed.

 No ascites or peritoneal nodules.

 Non-specific subcentimeter paraaortic nodes.

 Atherosclerotic change of abdominal aorta.

 No pulmonary nodule or infiltration of visualized both lower lungs.

 Degenerative change of visualized spine without gross bony destruction. Decrease anterior height of L2 vertebral body with grade 1 anterolisthesis of L4 over L5.`,impression:`Suspicious lymphoma involvement of spleen with splenic varices.`},"Bony Metastasis":{history:``,studyType:`CT Whole Abdomen`,technique:`Axial CT scans of the whole abdomen were performed with IV contrast material according to the standard protocol.`,comparison:`None.`,findings:`- The study revealed normal-sized liver with homogeneous density of liver parenchyma. No definite liver mass or biliary dilatation is found. Portal vein and hepatic veins are patent.

- Gallbladder has smooth, thin wall with no detectable opaque stone.

- Spleen, pancreas, and bilateral adrenal glands are unremarkable.

- Bilateral kidneys have normal size with symmetrical enhancement without hydronephrosis.

- A 0.3 cm calyceal stone at lower pole of right kidney without evidence of obstruction. No opaque stone in left kidney.

- Few bilateral renal cysts, size up to 0.9 cm at interpolar region of left kidney.

- Stomach, small bowels and colon appear unremarkable.A few diverticula at sigmoid colon is also noted.

- Diffuse heterogeneous enlargement of prostate gland with calcification, measured 132 ml in volume, compatible with history of prostate cancer. However, there are limitations to evaluate prostate cancer in CT study. Please further correlate with MRI.

- The marked enlarged prostate causes indentation/invasion to posterior and right anterior wall of urinary bladder. Collapse urinary bladder with questionable prostate cancer invasion. Indwelling Foley’s catheter is also noted.

- No enlargement of seminal vesicles.

- Atherosclerotic changes of abdominal aorta are seen.

- Several subcentimeter lymph nodes at bilateral periprostate regions.

- No gross ascites or peritoneal nodule.

- Osteoblastic lesion at vertebral body of T9-12, L2-3, sacrum, left pelvis, posterior left rib 9th and right rib 10th. Suggestive of bone metastasis.

- Partially seen posterior spinal fixation at T9-10 with T9 laminectomy.

- Degenerative change of visualized spine with narrowing disc space at L5-S1.

- Lung shows fibrosis with traction bronchiectasis at dependent part of both lower lobes. A 0.5 cm fibrotic nodule at RML. Limitation to evaluate due to beam hardening artifact.`,impression:`Multiple bone metastasis as described above.
No evidence of liver metastasis.`},"Abdominal Aortic Aneurysm / Dissection":{history:``,studyType:`CT Neck, Chest & Upper Abdomen`,technique:`Axial CT scans of the whole abdomen were performed with IV contrast material according to the standard protocol.`,comparison:`None.`,findings:`-The study reveals normal-sized liver with homogeneous density of liver parenchyma. No definite liver mass or biliary dilatation is found. Portal vein and hepatic veins are patent.

- Collapsed gallbladder with adenomyomatosis with no detectable opaque stone.

- Spleen and bilateral adrenal glands are unremarkable.

- Atrophic change of pancreas.

- Bilateral kidneys have normal size with symmetrical enhancement without hydronephrosis. Thin cortical scar at upper pole left kidney. Unchanged parapelvic renal cyst with calcified wall at right kidney, measured 3.2x2.2 cm (Boniak II) causing mass effect to adjacent pelvocalyceal system without evidence of hydronephrosis or obstruction. Tiny calyceal stone at lower pole of right kidney.

- Stomach, small bowels and colon appear unremarkable.

- No ascites or peritoneal nodules are found. Few subcentimeter lymph nodes at periportal, gastrohepatic, and celiac region.

- Severe atherosclerosis of abdominal aorta with soft plaque. Unchanged short segment of calcified wall flap at infrarenal abdominal aorta to bilateral proximal common iliac artery, compatible with history of chronic aortic dissection, measured about 5.9 cm in length.

- Degenerative change of visualized spine without gross bony destruction.

- Proper position of percutaneous endoscopic gastrostomy at anterior abdominal wall.`,impression:`Severe atherosclerosis of abdominal aorta with unchanged chronic aortic dissection.`},"Incisional / Abdominal Wall Hernia":{history:``,studyType:`CT Whole Abdomen (Emergency)`,technique:`Axial CT scans of the whole abdomen were performed with IV contrast material according to the standard protocol.`,comparison:`None.`,findings:`- The study reveals increased degree of focal bulging at anterior abdominal wall, through prior lower midline scar, containing small bowel loop (probably distal jejunum) with fluid trapping. Bowel wall enhancement is preserved. However, strangulated incisional hernia cannot be excluded. The neck of incisional hernia measured about 5.0 cm in width.

- This lesion caused disproportionate upstream dilatation of air-fluid filled bowel loop from 1st part duodenum through distal jejunum, measured up to 3.9 cm in maximum diameter with distal bowel collapsed. Suggestive of small bowel obstruction.

- The rest of bowel wall enhancement is preserved. No evidence of pneumatosis intestinalis or extraluminal gas.

- Increased in size of two enhancing mucosal lesions at gastric antrum and pylorus (IM132,149 SE302), size up to 2.0 cm. Please correlate with further EGD.

- Enlarged left lobe and caudate lobe liver with nodular surface, suggestive of cirrhosis. No definite liver mass or biliary dilatation is found. Unchanged of a 0.8-cm calcification abut to liver surface at hepatic segment 8. Portal vein and hepatic veins are patent.

- Surgical absence of gallbladder.

- Still noted splenic varices and splenorenal shunt.

- Splenomegaly, size up to 15.9 cm with unchanged a 0.5 cm hypodense lesion at lower pole.

- Pancreas and bilateral adrenal glands are unremarkable.

- Bilateral kidneys have normal size with symmetrical enhancement without stone or hydronephrosis.

- Indwelling Foley’s catheter with collapsed urinary bladder.

- Surgical absence of uterus and both ovaries.

- Low attenuated ascites at perihepatic, perisplenic, both paracolic gutters, interbowel loop, and pelvic region.

- No peritoneal nodule or significant intraabdominal lymphadenopathy

- New right pleural effusion with passive atelectasis of RML. Lobar RLL collapsed. Both visualized basal lungs show no suspicious pulmonary nodule.

- Degenerative change of spine without destructive lesion.

- Evidence of feeding tube insertion with its tip placed at gastric body.`,impression:`Incisional hernia, containing small bowel loop with fluid trapping. The strangulation cannot be excluded. Distal jejunal obstruction without bowel wall hypoenhancement, pneumatosis intestinalis or extraluminal gas.`},"Bowel Obstruction":{history:``,studyType:`CT Whole Abdomen (Emergency)`,technique:`Axial CT scans of the whole abdomen were performed with IV contrast material according to the standard protocol.`,comparison:`None.`,findings:`- The study reveals increased degree of focal bulging at anterior abdominal wall, through prior lower midline scar, containing small bowel loop (probably distal jejunum) with fluid trapping. Bowel wall enhancement is preserved. However, strangulated incisional hernia cannot be excluded. The neck of incisional hernia measured about 5.0 cm in width.

- This lesion caused disproportionate upstream dilatation of air-fluid filled bowel loop from 1st part duodenum through distal jejunum, measured up to 3.9 cm in maximum diameter with distal bowel collapsed. Suggestive of small bowel obstruction.

- The rest of bowel wall enhancement is preserved. No evidence of pneumatosis intestinalis or extraluminal gas.

- Increased in size of two enhancing mucosal lesions at gastric antrum and pylorus (IM132,149 SE302), size up to 2.0 cm. Please correlate with further EGD.

- Enlarged left lobe and caudate lobe liver with nodular surface, suggestive of cirrhosis. No definite liver mass or biliary dilatation is found. Unchanged of a 0.8-cm calcification abut to liver surface at hepatic segment 8. Portal vein and hepatic veins are patent.

- Surgical absence of gallbladder.

- Still noted splenic varices and splenorenal shunt.

- Splenomegaly, size up to 15.9 cm with unchanged a 0.5 cm hypodense lesion at lower pole.

- Pancreas and bilateral adrenal glands are unremarkable.

- Bilateral kidneys have normal size with symmetrical enhancement without stone or hydronephrosis.

- Indwelling Foley’s catheter with collapsed urinary bladder.

- Surgical absence of uterus and both ovaries.

- Low attenuated ascites at perihepatic, perisplenic, both paracolic gutters, interbowel loop, and pelvic region.

- No peritoneal nodule or significant intraabdominal lymphadenopathy

- New right pleural effusion with passive atelectasis of RML. Lobar RLL collapsed. Both visualized basal lungs show no suspicious pulmonary nodule.

- Degenerative change of spine without destructive lesion.

- Evidence of feeding tube insertion with its tip placed at gastric body.`,impression:`Incisional hernia, containing small bowel loop with fluid trapping. The strangulation cannot be excluded. Distal jejunal obstruction without bowel wall hypoenhancement, pneumatosis intestinalis or extraluminal gas.`},"Acute Pyelonephritis":{history:``,studyType:`CT Whole Abdomen (Emergency)`,technique:`Axial CT scans of the whole abdomen were performed with IV contrast material according to the standard protocol.`,comparison:`None.`,findings:`The study reveals a 3.7-mm stone at left ureterovesical junction(UVJ), causing upstream mild hydronephrosis and mild hydroureter. Mild enhancing thickened wall along left ureter and left renal pelvis with surrounding fat stranding, compatible with left pyeloureteritis.

 Relatively enlarged left kidney surrounding with mild fat reticulation is suggestive of acute pyelonephritis. No evidence of renal abscess is found. Symmetrical enhancement of both renal parenchyma is noted.

 Visualized right kidney shows no abnormal enhancement, stone or hydronephrosis.

 The urinary bladder has smooth, thin wall without detectable stone.

 Prostate gland and seminal vesicles are unremarkable.

 Prominent-sized liver with homogeneous density of liver parenchyma. A 1.6 cm cystic lesion at hepatic segment 5. Prominent size of IHD and CBD, measured 0.8 mm without demonstrated calcified stone or gross mass. Portal vein and hepatic veins are patent.

 A 1.5 cm gall stone with fundal adenomyomatosis. No evidence of acute cholecystitis is seen.

 Spleen, pancreas, and bilateral adrenal glands are unremarkable.

 Stomach, small bowels and colon appear unremarkable. A 2.7x1.6 cm diverticulum at 1st part of duodenum. Colonic diverticula are noted.

 No ascites, fluid collection or significant intraabdominal lymphadenopathy.

 Visualized both lower lungs show no active infiltration. No pleural effusion.

 No bony destruction.`,impression:`Suggestive evidence of left pyeloureteritis and acute pyelonephritis.`},"Liver Metastasis":{history:``,studyType:`CT Whole Abdomen`,technique:`Axial CT scans of the whole abdomen were performed with IV contrast material according to the standard protocol.`,comparison:`None.`,findings:`The study reveals normal-sized liver with homogeneous density of liver parenchyma. Increased size and number of multiple ill-defined hypodense lesions scatter in both lobe liver, size up to 1.5 cm at hepatic segment IVa, favor liver metastasis more than liver abscess.

 Portal vein and hepatic veins are patent.

 Gallbladder diameter is 2.6 cm in transverse plane. Again noted multiple small tiny calcified gallstones with mild diffuse wall thickening, suggestive of chronic cholecystitis. No IHD and CBD dilatation.

 Spleen and bilateral adrenal glands are unremarkable.

 Pancreatic diversum with unchanged few cysts at pancreatic tail up to 0.8 cm.

 Bilateral kidneys have normal size with symmetrical enhancement without stone or hydronephrosis. Few bilateral renal cysts up to 3.1 cm at interpolar region of left kidney.

 Evidence of subtotal colectomy with ileosigmoid colostomy opening in the LLQ.

 No dilatation of stomach, small bowels and colon. Small duodenum diverticulum at the 2nd part

 Urinary bladder has collapsed with indwelling catheter and intraluminal air. No mass or stone.

 Uterus and both adnexas are unremarkable.

 Unchanged moderate amount of low attenuation ascites with diffused thickened and enhanced peritoneum, suggestive of peritonitis. No intraabdominal collection.

 Atherosclerotic changes of aorta and its branches. Calcified aorta and mitral annulus. Unchanged 1.5x2.2 cm thrombosed splenic aneurysm with rim-calcification.

 Increased size of multiple enlarged lymph nodes at paraaortic, aortocaval, retrocaval, bilateral common iliac region up to 1.7 cm at right common iliac region are suggestive of lymph node metastases.

 Surgical scar at midline abdomen without collection.

 Diffused osteopenia. Degenerative changes of visualized spines without gross bony destructions.

 Unchange moderate amount of low attenuation bilateral pleural effusion and adjacent passive atelectasis. No active pulmonary infiltration or nodules.

 Evidence of gastric tube with it's tip in body of stomach.`,impression:`Increased size and number of multiple ill-defined hypodense lesions scatter in both lobe liver, size up to 1.5 cm at hepatic segment IVa, favor liver metastasis more than liver abscess.`},"Hepatic Hemangioma":{history:``,studyType:`CT Whole Abdomen`,technique:`Axial CT scans of the whole abdomen were performed with IV contrast material according to the standard protocol.`,comparison:`None.`,findings:`The study reveals normal-sized liver with homogeneous density of liver parenchyma. There are 3 hypodense lesion with discontinuous peripheral nodular enhancement with progressive centripetal fill-in, suggestive of hepatic hemangioma scatter in both lobe liver as described;

 #At hepatic segment 8, size 2.6 cm

 #At hepatic segment 3, size 0.6 cm

 #At hepatic segment 7/6, size 1.6 cm

 No definite liver mass.

 No biliary dilatation is found. Portal vein and hepatic veins are patent.

 Gallbladder has smooth, thin wall with no detectable opaque stone.

 Prominent size spleen, measured 11.6 cm

 Pancreas and bilateral adrenal glands are unremarkable.

 Bilateral kidneys have normal size with symmetrical enhancement without stone or hydronephrosis.

 Stomach, small bowels and colon appear unremarkable.

 Urinary bladder has smooth, thin wall without detectable stone.

 Prominent size of prostate gland (volume=25ml) with a 1.0 cm cyst. Bilateral seminal vesicles are unremarkable.

 No ascites or peritoneal nodule

 Multiple heterogeneous enhancement lymphadenopathies at mesenteric and paraaortic regions size up to 1.6 cm. surrounding mesenteric fat haziness,suggestive of residual lymphoma.

 No bony destruction with sclerotic lesion at superior end plate of L1 vertebral body.`,impression:`Hepatic hemangioma at hepatic segment 3, 8, and 7/6 as described.`},"Gallbladder Polyps":{history:``,studyType:`CT Upper Abdomen`,technique:`Axial CT scans of the whole abdomen were performed with IV contrast material according to the standard protocol.`,comparison:`None.`,findings:`The study reveals enlarged caudate and left lobe liver with nodular surface, suggestive of liver cirrhosis.

 - No definite liver mass or biliary dilatation is found.

 - Portal vein and hepatic veins are patent.

 - Gallbladder has smooth, thin wall without opaque gallstone. Few tiny gallbladder polyps are seen.

 - Spleen size 16 cm in craniocaudal length, suggestive splenomegaly. Paraesophageal varices.

 - Epigastric, paraesophageal, and splenic varies are seen

All of these are evidence of portal hypertension.

 - Pancreas is unremarkable.

 - Mild thickening of left adrenal gland. Right adrenal gland shows unremarkable.

 - Both kidneys have normal size and symmetrical enhancement without stone or hydronephrosis.

 - Stomach and visualized bowels are unremarkable.

 - Atherosclerosis of aorta is noted.

 - No ascites, peritoneal nodule or significant intraabdominal lymphadenopathy is found.

 - Degenerative changed of visualized spine with narrowing disc space at L4-L5 and L5-S1 level. Grade 1 retrolisthesis of L4 over L5. No bony destruction is found.`,impression:`Few tiny gallbladder polyps`},"Renal Angiomyolipoma (AML)":{history:``,studyType:`CT Whole Abdomen`,technique:`Axial CT scans of the whole abdomen were performed with IV contrast material according to the standard protocol.`,comparison:`None.`,findings:`The study reveals normal-sized liver with homogeneous density of liver parenchyma. Unchanged size of a few small hypodense lesions at both lobes, up to 0.7 cm at hepatic segment 2/3, possibly liver cysts.

 No definite biliary dilatation is found.

 Gallbladder has smooth, thin wall with no detectable opaque stone.

 Spleenomegaly, measured 12.7 cm craniocaudal length.

 Unchanged a 1 cm hypodense lesion at head of pancreas since 2023, possibly cyst. Unchanged a 0.4-cm calcification at pancreatic body. No pancreatic duct dilatation.

 Bilateral adrenal glands are unremarkable.

 Post bilateral nephroureterectomy and cystoprostatectomy. No gross mass at surgical bed.

 Stomach, small bowels and colon are no distension.

 Urinary bladder has smooth, thin wall without detectable stone.

 Prostate gland and bilateral seminal vesicles are unremarkable.

 No ascites, peritoneal nodule or significant intraabdominal lymphadenopathy

 Atherosclerotic change of aorta. Evidence of partially seen left thigh AV graft.

 Evidence of midline surgical scar without gross mass.

 Degenerative change of visualized spine. No significant changed osteolytic with sclerotic rim lesion at right parapubic symphysis, size 2.8x2.1 cm.

 New calcified mass at LLL, size 3.9x6.0 cm, suggestive of progressive of lung metastasis.

# Left kidney: The well-defined mass with soft tissue and fat component. It is about 3.6x3.5 cm. The mass shows internal multiple small aneurysmal dilatation or arterial ectasia. The classic renal angiomyolipoma is considered.

- Small cortical cysts and small calyceal stones.

- No hydronephrosis.

Right kidney: - Small cortical cysts and small calyceal stones.

- No hydronephrosis.

# Liver: Multiple liver lesions and different pattern:

1) few well-defined and lobulated border arterial enhancing lesions with persisted enhancement or progressive filled in, favored hemangiomas. The large one with round calcification or phleboliths at segment 6 of liver, about 4.7x2.6 cm.

2) few thin wall cysts, up to 5.1x4.4 cm at segment 3.

3) multiple geographic areas of hypovascular and no displaced of the traversing vessels. They appear delayed enhancement. (as correlated with MRI findings and hyper T2 SI, no restriction) These are probably hemangiomas or atypical hemangiomas and forming of surrounding inflammatory pseudotumor. The large one at segment 7- about 8.5x3.9 cm

4) Few well-defined arterial enhancing lesions, with isodense on portal phase, and the large one at segment 8, 2.0x1.7 cm (no restriction on MRI and intermediate T2 SI), probably focal nodular hyperplasia (FNHs)

- No dilatation of intrahepatic bile ducts.

- Hepatic veins, portal vein and intrahepatic IVC are patent.

# Left psoas muscle: The well-defined low density lesion with internal septation, about 2.4x2.1 cm, at anterior of the psoas muscle, probably benign or lymphangioma or cystic nerve sheath tumor. (as correlated with MRI- iso T1 signal intensity (SI) hyper T2 SI, progressive enhancement and no restriction on MRI- differential diagnosis are hemangioma or nerve sheath tumor or fibrous myxoid tumor.

# Lower thorax: The well-defined mass with minimal enhancement at right paravertebral region (T9-T10 level), about 1.8x0.9 cm, probably benign. It shows the MRI signal intensity and enhancement as same as of the mass at left psoas muscle. It shows no restriction, and probably benign, and differential diagnosis are hemangioma or nerve sheath tumor or fibrous myxoid tumor.

Gallbladder: No opaque gallstone.

Bile duct: Not dilated.

Spleen and pancreas: Normal size, shape and no mass.

Adrenal glands: No definite nodule.

Peritoneum: No ascites. No peritoneal nodule.

Node: No detectable of nodal enlargement.

Pelvic cavity: Post hysterectomy. No pelvic mass or adnexal mass.

- Smooth bladder wall and no mass.

GI tract: No gross mass.

# Lung bases: The ground glass nodule at anterior basal segment of LLL, 1.3x0.9 cm and part solid opacity or infiltration at medial basal segment of LLL 2.1x1 cm. Please follow up.

- No pleural effusion.

Bone: No bony destruction. The small benign sclerotic lesion at right iliac bone, benign or bone island`,impression:`AML`},"Pulmonary Metastasis (Incidental)":{history:``,studyType:`CT Whole Abdomen`,technique:`Axial CT scans of the whole abdomen were performed with IV contrast material according to the standard protocol.`,comparison:`None.`,findings:`The study reveals normal-sized liver with homogeneous density of liver parenchyma. Unchanged size of a few small hypodense lesions at both lobes, up to 0.7 cm at hepatic segment 2/3, possibly liver cysts.

 No definite biliary dilatation is found.

 Gallbladder has smooth, thin wall with no detectable opaque stone.

 Spleenomegaly, measured 12.7 cm craniocaudal length.

 Unchanged a 1 cm hypodense lesion at head of pancreas since 2023, possibly cyst. Unchanged a 0.4-cm calcification at pancreatic body. No pancreatic duct dilatation.

 Bilateral adrenal glands are unremarkable.

 Post bilateral nephroureterectomy and cystoprostatectomy. No gross mass at surgical bed.

 Stomach, small bowels and colon are no distension.

 Urinary bladder has smooth, thin wall without detectable stone.

 Prostate gland and bilateral seminal vesicles are unremarkable.

 No ascites, peritoneal nodule or significant intraabdominal lymphadenopathy

 Atherosclerotic change of aorta. Evidence of partially seen left thigh AV graft.

 Evidence of midline surgical scar without gross mass.

 Degenerative change of visualized spine. No significant changed osteolytic with sclerotic rim lesion at right parapubic symphysis, size 2.8x2.1 cm.

 New calcified mass at LLL, size 3.9x6.0 cm, suggestive of progressive of lung metastasis.

# Left kidney: The well-defined mass with soft tissue and fat component. It is about 3.6x3.5 cm. The mass shows internal multiple small aneurysmal dilatation or arterial ectasia. The classic renal angiomyolipoma is considered.

- Small cortical cysts and small calyceal stones.

- No hydronephrosis.

Right kidney: - Small cortical cysts and small calyceal stones.

- No hydronephrosis.

# Liver: Multiple liver lesions and different pattern:

1) few well-defined and lobulated border arterial enhancing lesions with persisted enhancement or progressive filled in, favored hemangiomas. The large one with round calcification or phleboliths at segment 6 of liver, about 4.7x2.6 cm.

2) few thin wall cysts, up to 5.1x4.4 cm at segment 3.

3) multiple geographic areas of hypovascular and no displaced of the traversing vessels. They appear delayed enhancement. (as correlated with MRI findings and hyper T2 SI, no restriction) These are probably hemangiomas or atypical hemangiomas and forming of surrounding inflammatory pseudotumor. The large one at segment 7- about 8.5x3.9 cm

4) Few well-defined arterial enhancing lesions, with isodense on portal phase, and the large one at segment 8, 2.0x1.7 cm (no restriction on MRI and intermediate T2 SI), probably focal nodular hyperplasia (FNHs)

- No dilatation of intrahepatic bile ducts.

- Hepatic veins, portal vein and intrahepatic IVC are patent.

# Left psoas muscle: The well-defined low density lesion with internal septation, about 2.4x2.1 cm, at anterior of the psoas muscle, probably benign or lymphangioma or cystic nerve sheath tumor. (as correlated with MRI- iso T1 signal intensity (SI) hyper T2 SI, progressive enhancement and no restriction on MRI- differential diagnosis are hemangioma or nerve sheath tumor or fibrous myxoid tumor.

# Lower thorax: The well-defined mass with minimal enhancement at right paravertebral region (T9-T10 level), about 1.8x0.9 cm, probably benign. It shows the MRI signal intensity and enhancement as same as of the mass at left psoas muscle. It shows no restriction, and probably benign, and differential diagnosis are hemangioma or nerve sheath tumor or fibrous myxoid tumor.

Gallbladder: No opaque gallstone.

Bile duct: Not dilated.

Spleen and pancreas: Normal size, shape and no mass.

Adrenal glands: No definite nodule.

Peritoneum: No ascites. No peritoneal nodule.

Node: No detectable of nodal enlargement.

Pelvic cavity: Post hysterectomy. No pelvic mass or adnexal mass.

- Smooth bladder wall and no mass.

GI tract: No gross mass.

# Lung bases: The ground glass nodule at anterior basal segment of LLL, 1.3x0.9 cm and part solid opacity or infiltration at medial basal segment of LLL 2.1x1 cm. Please follow up.

- No pleural effusion.

Bone: No bony destruction. The small benign sclerotic lesion at right iliac bone, benign or bone island`,impression:`New calcified mass at LLL, size 3.9x6.0 cm, suggestive of progressive of lung metastasis.`},"Cystitis / Bladder Wall Thickening":{history:``,studyType:`CT Whole Abdomen`,technique:`Axial CT scans of the whole abdomen were performed with IV contrast material according to the standard protocol.`,comparison:`None.`,findings:`The study reveals normal-sized liver with homogeneous density of liver parenchyma. Multiple well-defined non-enhanced hypodense lesions scatter in both hepatic lobes, size up to 1.0 cm at segment II, suggestive of liver cysts.

 Portal vein and hepatic veins are patent.

 Surgically absent gallbladder with dilated CBD, measured 1.1 cm. No obstructive cause. Suggestive from post chelecystectomy.

 Spleen, pancreas and bilateral adrenal glands are unremarkable.

 Stomach appears unremarkable.

 Diffuse large bowel dilatation along ascending colon, transverse colon, descending colon, measured 7.3 cm in maximal diameter with no evidence of transitional point, suspected pseudocolonic obstruction.

 Diffuse gas-filled along small bowel, also suspected mild small bowel ileus.

 Bilateral kidneys have normal size with symmetrical enhancement without stone or hydronephrosis. A few bilateral renal cysts, measured size up to 0.7 cm at interpolar right kidney.

 Partially distend urinary bladder with diffuse wall thickening, suggestive of cystitis. Please correlate with clinical context.

 There is focal enhancing nodule protruding from right lateral wall of urinary bladder, measured 0.5 cm. which cannot exclude mucosal lesion.

 No detectable vesical stone. Indwelling Foley’s catheter is seen.

 Normal size prostate gland, measured about 3.8x2.9x3.3 cm (Volume 19 ml). Bilateral seminal vesicles are unremarkable.

 No ascites, peritoneal nodule or significant intraabdominal lymphadenopathy. No intraabdominal collection.

 Atherosclerosis of abdominal aorta and iliac branches.

 Bony island at vertebral body of L4 level (HU 1198). No destruction of visualized bony structure was seen.

 For lower thorax, please see chest report on the same date.`,impression:`Suggestive of cystitis. Please correlate with clinical context.`},"Bladder Outlet Obstruction":{history:``,studyType:`CT Urography`,technique:`Axial CT scans of the whole abdomen were performed with IV contrast material according to the standard protocol.`,comparison:`None.`,findings:`The study reveals moderate bilateral hydronephrosis with hydroureter. Narrowing of bilateral UVJ, suggestive of stricture. No evidence of mass or obstructive stone.

 Mild enhancement along bilateral ureteral wall is noted, suggestive of inflammatory process.

 Bilateral kidneys have normal size with symmetrical enhancement.

 Non-obstructive bilateral calyceal stones are noted, size up to 0.6 cm at interpolar region of left kidney

 Few simple cysts at lower pole of right kidney, measured up to 1 cm (Bosniak 1)

 Right incomplete double collecting system is observed.

 The urinary bladder has irregular wall thickening without mass or stone, suspected chronic cystitis, chronic bladder outlet obstruction, or infiltrative lesion. Please correlate with cystoscope.

 Liver shows normal size, smooth surface, and normal parenchymal attenuation. No other liver masses are observed.

 Portal veins and hepatic veins appear patent.

 No IHD or CBD dilatation is found.

 Gallbladder has smooth, thin wall with no detectable opaque stone.

 Spleen, pancreas, and bilateral adrenal glands are unremarkable.

 Stomach, small bowels and colon appear unremarkable.

 Prostate and seminal vesicles are unremarkable.

 No ascites, peritoneal nodule or significant intraabdominal lymphadenopathy.

 Degenerative change of visualized spine without gross bony destruction.

 Calcified nodule at RML. No pleural effusion. Limitation to evaluate due to respiratory motion artifacts.`,impression:`- Irregular wall thickening of urinary bladder without mass or stone, suspected chronic cystitis, chronic bladder outlet obstruction, or infiltrative lesion. Please correlate with cystoscope.`},"Psoas Abscess":{history:``,studyType:`CT Whole Abdomen`,technique:`Axial CT scans of the whole abdomen were performed with IV contrast material according to the standard protocol.`,comparison:`None.`,findings:`Still seen rim enhancing hypodense lesion at right psoas muscle, measured 3.0x2.3x7.5 cm with relatively enlargement of right psoas muscle, compatible with history of psoas abscess. However, comparative size with previous study cannot be done due to different imaging modality.

- Normal-sized liver with homogeneous density of liver parenchyma. No definite liver mass. A few small liver cysts, size up to 0.6 cm at hepatic segment VII. No biliary dilatation is found.

- Dilated HVs and IVC, suggestive from right-sided heart failure.

- Multiple calcified gallstones with desiccated bile content/turbid content is seen. Thin gallbladder wall with submucosal swelling. No evidence of cholecystitis.

- Prominent size spleen, measured 11.5 cm.

- Pancreas and bilateral adrenal glands are unremarkable.

- Bilateral kidneys have normal size with symmetrical enhancement. No stone or hydronephrosis. Multiple bilateral renal cysts, size up to 3.5x2.6 cm at interpolar region of left kidney.

- Stomach, small bowels and colon appear unremarkable.

- Diffused mesenteric fat haziness with minimal ascites at perihepatic region, suggestive from right-sided heart failure.

- Collapse urinary bladder with diffuse non-specific wall thickening. No detectable stone.

- Prostate gland and bilateral seminal vesicles are unremarkable.

- No peritoneal nodule or significant intraabdominal lymphadenopathy.

- No intraabdominal collection.

- Ground glass opacities at lateral and posterior basal segment of RLL with smooth interlobular septal thickening at both lungs, suggestive of pulmonary congestion. Increased amount of right pleural effusion with passive atelectasis.

- Degenerative change of spine without bony destruction. Narrowing disc space L2-L3, L5-S1 with retrolisthesis grade 1 of L2 over L3.

- Marked cardiomegaly. Partially seen tip of three-chamber pacemaker placed in RA, RV and LV. No pericardial effusion.

- Atherosclerotic changes of abdominal aorta and its branches. Unchanged infrarenal aneurysm at abdominal aorta about L2-L3 vertebral level with partial thrombosis, about 4.3x3.8 in diameter.

- Diffuse subcutaneous tissue swelling with fat reticulation along trunk, suggestive from right-sided heart failure.`,impression:`Still seen right psoas abscess, measured 3.0x2.3x7.5 cm. However, comparative size with previous study cannot be done due to different imaging modality.`},"Right-Sided Heart Failure (Abdominal Signs)":{history:``,studyType:`CT Whole Abdomen`,technique:`Axial CT scans of the whole abdomen were performed with IV contrast material according to the standard protocol.`,comparison:`None.`,findings:`Still seen rim enhancing hypodense lesion at right psoas muscle, measured 3.0x2.3x7.5 cm with relatively enlargement of right psoas muscle, compatible with history of psoas abscess. However, comparative size with previous study cannot be done due to different imaging modality.

- Normal-sized liver with homogeneous density of liver parenchyma. No definite liver mass. A few small liver cysts, size up to 0.6 cm at hepatic segment VII. No biliary dilatation is found.

- Dilated HVs and IVC, suggestive from right-sided heart failure.

- Multiple calcified gallstones with desiccated bile content/turbid content is seen. Thin gallbladder wall with submucosal swelling. No evidence of cholecystitis.

- Prominent size spleen, measured 11.5 cm.

- Pancreas and bilateral adrenal glands are unremarkable.

- Bilateral kidneys have normal size with symmetrical enhancement. No stone or hydronephrosis. Multiple bilateral renal cysts, size up to 3.5x2.6 cm at interpolar region of left kidney.

- Stomach, small bowels and colon appear unremarkable.

- Diffused mesenteric fat haziness with minimal ascites at perihepatic region, suggestive from right-sided heart failure.

- Collapse urinary bladder with diffuse non-specific wall thickening. No detectable stone.

- Prostate gland and bilateral seminal vesicles are unremarkable.

- No peritoneal nodule or significant intraabdominal lymphadenopathy.

- No intraabdominal collection.

- Ground glass opacities at lateral and posterior basal segment of RLL with smooth interlobular septal thickening at both lungs, suggestive of pulmonary congestion. Increased amount of right pleural effusion with passive atelectasis.

- Degenerative change of spine without bony destruction. Narrowing disc space L2-L3, L5-S1 with retrolisthesis grade 1 of L2 over L3.

- Marked cardiomegaly. Partially seen tip of three-chamber pacemaker placed in RA, RV and LV. No pericardial effusion.

- Atherosclerotic changes of abdominal aorta and its branches. Unchanged infrarenal aneurysm at abdominal aorta about L2-L3 vertebral level with partial thrombosis, about 4.3x3.8 in diameter.

- Diffuse subcutaneous tissue swelling with fat reticulation along trunk, suggestive from right-sided heart failure.`,impression:`Dilated HVs and IVC, diffused mesenteric fat haziness, and anasarca, suggestive from right-sided heart failure.`},"Splenic Lipoma":{history:``,studyType:`CT Whole Abdomen`,technique:`Axial CT scans of the whole abdomen were performed with IV contrast material according to the standard protocol.`,comparison:`None.`,findings:`The study revealed normal size and smooth surface of liver without detectable space-taking lesion. Diffuse decreased attenuation of liver parenchyma, suggestive of fatty liver.

 Portal vein and hepatic veins were patent.

 No dilatation of biliary system was noted.

 Gallbladder showed no gallstone.

 Spleen and both adrenal glands appeared unremarkable.

 Splenic lipoma at distal part of body of pancreas, size 0.8 cm.

 Both kidneys were in normal size without stone, hydronephrosis or perinephric collection.

 S/P right hemicolectomy. Patent ileocolic anastomosis at right sided abdomen with no gross enhancing mass. Unchange soft tissue thickening at colic stump.

 Seen short segment thickening of bowel wall at sigmoid colon, measured 2.5 cm in length. differential diagnosis of mucosal lesion or collapse bowel loop. Follow-up is suggested.

 Stomach and other parts of bowel loops appeared unremarkable.

 Urinary bladder has smooth thin wall without stone or mass.

 No gross ascites or significant intraabdominal lymphadenopathy was detected.

 A 1.2x1.4 cm myoma uteri at fundus of uterus.

 Both ovaries appear unremarkable.

 No destruction of visualized bony structure was seen.`,impression:`Splenic lipoma at distal part of body of pancreas.`},"Uterine Myoma (Fibroid)":{history:``,studyType:`CT Whole Abdomen`,technique:`Axial CT scans of the whole abdomen were performed with IV contrast material according to the standard protocol.`,comparison:`None.`,findings:`The study revealed normal size and smooth surface of liver without detectable space-taking lesion. Diffuse decreased attenuation of liver parenchyma, suggestive of fatty liver.

 Portal vein and hepatic veins were patent.

 No dilatation of biliary system was noted.

 Gallbladder showed no gallstone.

 Spleen and both adrenal glands appeared unremarkable.

 Splenic lipoma at distal part of body of pancreas, size 0.8 cm.

 Both kidneys were in normal size without stone, hydronephrosis or perinephric collection.

 S/P right hemicolectomy. Patent ileocolic anastomosis at right sided abdomen with no gross enhancing mass. Unchange soft tissue thickening at colic stump.

 Seen short segment thickening of bowel wall at sigmoid colon, measured 2.5 cm in length. differential diagnosis of mucosal lesion or collapse bowel loop. Follow-up is suggested.

 Stomach and other parts of bowel loops appeared unremarkable.

 Urinary bladder has smooth thin wall without stone or mass.

 No gross ascites or significant intraabdominal lymphadenopathy was detected.

 A 1.2x1.4 cm myoma uteri at fundus of uterus.

 Both ovaries appear unremarkable.

 No destruction of visualized bony structure was seen.`,impression:`A 1.2x1.4 cm myoma uteri at fundus of uterus.`},"Colonic Mass / Suspected Colorectal Malignancy":{history:``,studyType:`CT Whole Abdomen`,technique:`Axial CT scans of the whole abdomen were performed with IV contrast material according to the standard protocol.`,comparison:`None.`,findings:`The study revealed normal size and smooth surface of liver without detectable space-taking lesion. Diffuse decreased attenuation of liver parenchyma, suggestive of fatty liver.

 Portal vein and hepatic veins were patent.

 No dilatation of biliary system was noted.

 Gallbladder showed no gallstone.

 Spleen and both adrenal glands appeared unremarkable.

 Splenic lipoma at distal part of body of pancreas, size 0.8 cm.

 Both kidneys were in normal size without stone, hydronephrosis or perinephric collection.

 S/P right hemicolectomy. Patent ileocolic anastomosis at right sided abdomen with no gross enhancing mass. Unchange soft tissue thickening at colic stump.

 Seen short segment thickening of bowel wall at sigmoid colon, measured 2.5 cm in length. differential diagnosis of mucosal lesion or collapse bowel loop. Follow-up is suggested.

 Stomach and other parts of bowel loops appeared unremarkable.

 Urinary bladder has smooth thin wall without stone or mass.

 No gross ascites or significant intraabdominal lymphadenopathy was detected.

 A 1.2x1.4 cm myoma uteri at fundus of uterus.

 Both ovaries appear unremarkable.

 No destruction of visualized bony structure was seen.`,impression:`Short segment thickening of bowel wall at sigmoid colon, measured 2.5 cm in length. differential diagnosis of mucosal lesion or collapse bowel loop. Follow-up is suggested.`},"Prostate Cancer (CT Correlate)":{history:``,studyType:`CT Whole Abdomen`,technique:`Axial CT scans of the whole abdomen were performed with IV contrast material according to the standard protocol.`,comparison:`None.`,findings:`- The study revealed normal-sized liver with homogeneous density of liver parenchyma. No definite liver mass or biliary dilatation is found. Portal vein and hepatic veins are patent.

- Gallbladder has smooth, thin wall with no detectable opaque stone.

- Spleen, pancreas, and bilateral adrenal glands are unremarkable.

- Bilateral kidneys have normal size with symmetrical enhancement without hydronephrosis.

- A 0.3 cm calyceal stone at lower pole of right kidney without evidence of obstruction. No opaque stone in left kidney.

- Few bilateral renal cysts, size up to 0.9 cm at interpolar region of left kidney.

- Stomach, small bowels and colon appear unremarkable.A few diverticula at sigmoid colon is also noted.

- Diffuse heterogeneous enlargement of prostate gland with calcification, measured 132 ml in volume, compatible with history of prostate cancer. However, there are limitations to evaluate prostate cancer in CT study. Please further correlate with MRI.

- The marked enlarged prostate causes indentation/invasion to posterior and right anterior wall of urinary bladder. Collapse urinary bladder with questionable prostate cancer invasion. Indwelling Foley’s catheter is also noted.

- No enlargement of seminal vesicles.

- Atherosclerotic changes of abdominal aorta are seen.

- Several subcentimeter lymph nodes at bilateral periprostate regions.

- No gross ascites or peritoneal nodule.

- Osteoblastic lesion at vertebral body of T9-12, L2-3, sacrum, left pelvis, posterior left rib 9th and right rib 10th. Suggestive of bone metastasis.

- Partially seen posterior spinal fixation at T9-10 with T9 laminectomy.

- Degenerative change of visualized spine with narrowing disc space at L5-S1.

- Lung shows fibrosis with traction bronchiectasis at dependent part of both lower lobes. A 0.5 cm fibrotic nodule at RML. Limitation to evaluate due to beam hardening artifact.`,impression:`Diffuse heterogeneous enlargement of prostate gland with calcification, compatible with history of prostate cancer. However, there are limitations to evaluate prostate cancer in CT study. Please further correlate with MRI.
Questionable prostate cancer invasion to posterior and right anterior wall of urinary bladder.
Several subcentimeter lymph nodes at bilateral periprostate regions.`},"Umbilical Hernia":{history:``,studyType:`CT Whole Abdomen`,technique:`Axial CT scans of the whole abdomen were performed with IV contrast material according to the standard protocol.`,comparison:`None.`,findings:`The study reveals post Roux en y gastric bypass with patent of gastrojejunal anastomosis. No evidence of obstruction or collection.

 Fat streak at anterior midline abdomen, suspected post surgical change.

 Fat containing umbilical hernia with 0.9 cm neck width, adjacent to the surgical site.

 There are multiple fat-containing lesions with rim enhancement at subcutaneous layer and anterior omentum near surgical site with few calcifications, size up to 3.1 cm, suggestive of fat necrosis.

 Normal-sized liver with homogeneous density of liver parenchyma. No definite liver mass or biliary dilatation is found. Portal vein and hepatic veins are patent.

 Surgical absence of gallbladder.

 Spleen, pancreas, and right adrenal gland are unremarkable.

 Thickening of left adrenal gland.

 Bilateral kidneys have normal size with symmetrical enhancement without stone or hydronephrosis. Few bilateral renal cysts, size up to 3.6 cm at interpolar of left kidney.

 Small size stomach. Small bowels and colon appear unremarkable.

 Urinary bladder has smooth, thin wall without detectable stone.

 Uterus and both adnexas are unremarkable.

 No ascites, peritoneal nodule or significant intraabdominal lymphadenopathy

 Atherosclerotic change of abdominal aorta.

 No pulmonary nodule or infiltration of visualized both lower lungs.

 Degenerative change of visualized spine without gross bony destruction.`,impression:`Fat containing umbilical hernia with 0.9 cm neck width, adjacent to the surgical site.`},"Inguinal Hernia":{history:``,studyType:`CT Whole Abdomen`,technique:`Axial CT scans of the whole abdomen were performed with IV contrast material according to the standard protocol.`,comparison:`None.`,findings:`The study reveals normal-sized liver with homogeneous density of liver parenchyma. Unchanged multiple well-defined non-enhanced hypodense lesions scatter in both hepatic lobes, size up to 0.8 cm at hepatic dome, suggestive of liver cysts. No definite liver mass or biliary dilatation is found. Portal vein and hepatic veins are patent.

 Gallbladder has smooth, thin wall with no detectable opaque stone.

 Spleen and bilateral adrenal glands are unremarkable.

 Small hypodense lesion at pancreatic head, measured 0.4 cm, suspected lipoma.

 Stomach, small bowels and colon appear unremarkable.

 Bilateral kidneys have normal size with symmetrical enhancement with a 0.2-cm calyceal stone at upper pole of left kidney without evidence of obstruction. Unchanged few bilateral renal cysts, measured size up to 1.4 cm at interpolar region of left kidney.

 Urinary bladder has smooth, thin wall without detectable stone.

 Prostate gland measured about 4.1x4.5x3.9 cm, 37.4 ml and bilateral seminal vesicles are unremarkable.

 No ascites, peritoneal nodule or significant intraabdominal lymphadenopathy.

 Atherosclerosis of abdominal aorta and iliac branches.

 Degenerative change of visualized thoracolumbar spine without gross bony destruction. Decreased vertebral height at L2 level. Narrowing intervertebral disc space at L4/5.

 Unchanged fat containing left direct inguinal hernia.

 Elevation of right hemidiaphragm.

 For lower thorax, please see chest report on the same date.`,impression:`Unchanged left direct inguinal hernia.`},"Retroperitoneal Fibrosis":{history:``,studyType:`CT Urography`,technique:`Axial CT scans of the whole abdomen were performed with IV contrast material according to the standard protocol.`,comparison:`None.`,findings:`- The study reveals normal size of both kidneys with symmetrical enhancement and normal excretory function. A staghorn stone at right renal pelvis was seen, measured about 2.2 cm.

- Prominent size of bilateral renal pelvicalyceal system. No renal mass is seen.

- Suspected kicking or mild stricture at lower left ureter. The right ureter is unremarkable.

- The urinary bladder has mild thickening wall without mass or stone.

- Diffuse fat standing surrounding bilateral ureter, abdominal aorta, celiac trunk, SMA, IMA, IVC, head&neck pancreas, and mesentery, suspected post treatment change or inflammatory process. DDx retroperitoneal fibrosis.

- Liver shows normal size, smooth surface, and normal parenchymal attenuation. No other liver masses are observed.

- Portal veins and hepatic veins appear patent.

- Gallbladder has smooth, thin wall with no detectable opaque stone.

- Mild splenomegaly, measured size about 13.6 cm with no evidence of gross lesion.

- Stomach, small bowels and colon appear unremarkable.

- Bilateral adrenal glands appear unremarkable.

- Prostate gland measured about 3.0x4.5x3.8 cm, 26.7 ml and bilateral seminal vesicles are unremarkable.

- No ascites or peritoneal nodules.

- Atherosclerosis of abdominal aorta and iliac branches.

- Degenerative change of visualized spine with decreased vertebral height at L5 level. No destruction of visualized bony structure was seen.

- No pleural effusion or gross mass is seen.`,impression:`Diffuse fat standing surrounding bilateral ureter, abdominal aorta, celiac trunk, SMA, IMA, IVC, head&neck pancreas, and mesentery, suspected post treatment change or inflammatory process. DDx retroperitoneal fibrosis.`},"Staghorn Renal Calculus":{history:``,studyType:`CT Urography`,technique:`Axial CT scans of the whole abdomen were performed with IV contrast material according to the standard protocol.`,comparison:`None.`,findings:`- The study reveals normal size of both kidneys with symmetrical enhancement and normal excretory function. A staghorn stone at right renal pelvis was seen, measured about 2.2 cm.

- Prominent size of bilateral renal pelvicalyceal system. No renal mass is seen.

- Suspected kicking or mild stricture at lower left ureter. The right ureter is unremarkable.

- The urinary bladder has mild thickening wall without mass or stone.

- Diffuse fat standing surrounding bilateral ureter, abdominal aorta, celiac trunk, SMA, IMA, IVC, head&neck pancreas, and mesentery, suspected post treatment change or inflammatory process. DDx retroperitoneal fibrosis.

- Liver shows normal size, smooth surface, and normal parenchymal attenuation. No other liver masses are observed.

- Portal veins and hepatic veins appear patent.

- Gallbladder has smooth, thin wall with no detectable opaque stone.

- Mild splenomegaly, measured size about 13.6 cm with no evidence of gross lesion.

- Stomach, small bowels and colon appear unremarkable.

- Bilateral adrenal glands appear unremarkable.

- Prostate gland measured about 3.0x4.5x3.8 cm, 26.7 ml and bilateral seminal vesicles are unremarkable.

- No ascites or peritoneal nodules.

- Atherosclerosis of abdominal aorta and iliac branches.

- Degenerative change of visualized spine with decreased vertebral height at L5 level. No destruction of visualized bony structure was seen.

- No pleural effusion or gross mass is seen.`,impression:`Staghorn stone at right renal pelvic, measured about 2.2 cm.`},"Ovarian Lymphoma":{history:``,studyType:`CT Whole Abdomen`,technique:`Axial CT scans of the whole abdomen were performed with IV contrast material according to the standard protocol.`,comparison:`None.`,findings:`The study reveals normal-sized liver with homogeneous density of liver parenchyma. No definite liver mass or biliary dilatation is found. Portal vein and hepatic veins are patent.

 Gallbladder has smooth, thin wall with no detectable opaque stone.

 Surgically absent spleen.

 Pancreas and bilateral adrenal glands are unremarkable.

 Bilateral kidneys have normal size with symmetrical enhancement without stone or hydronephrosis. Abnormal axis of right kidney and right extrarenal pelvis is observed. Unchanged few tiny bilateral renal cysts are noted.

 Stomach, small bowels and colon appear unremarkable.

 Partially distended of urinary bladder without detectable stone.

 No significant change of enhancing soft tissue at right adnexal region, sized about 5.5x3.4 cm. (prior was 5.7x3.6 cm), which is known ovarian lymphoma. Uterus is unremarkable. Post left salpingo-oophorectomy is noted.

 No ascites, peritoneal nodule or significant intraabdominal lymphadenopathy

 No pulmonary nodule or infiltration of visualized both lower lungs.

 No destruction of visualized bone.`,impression:`No significant change of enhancing in size of right ovarian lymphoma, sized about 5.5x3.4 cm. Post left salpingo-oophorectomy.`},"Polycystic Kidney / Liver Disease":{history:``,studyType:`CT Whole Abdomen`,technique:`Axial CT scans of the whole abdomen were performed with IV contrast material according to the standard protocol.`,comparison:`None.`,findings:`The study reveals both kidneys are markedly enlarged with multiple well-defined cystic lesions, vary in size, and some have calcified walls and hyperdense fluid that represent hemorrhagic or proteinaceous content. The right kidney is measured about 17.7x11.3x9.3 cm. and 17.5x11.2x8.3 cm. on the left.

 Some of these cysts show irregularly enhancing thick walls, more prominent in the right kidney. The largest cyst at upper pole of right kidney is measured about 6.4x4.5 cm. No air or air-fluid level in the cysts is observed. Also noted, adjacent fascial enhancing and thickening in RLQ is seen.

 All of these findings are corresponding with infected cystic lesions in both polycystic kidney disease with localized peritonitis in RLQ. However, early abscess formation cannot be excluded.

 Suspected a 1.1x1.0 cm calcified stone at the left ureterovesical junction(UVJ). Still no demonstrated excretory function of both kidneys in the excretory phase.

 Liver has normal-size and homogeneous density of liver parenchyma. There are multiple hepatic cysts, varying in size, scattered both hepatic lobe, size up to 2.4 cm at hepatic segment 6, which compatible with polycystic liver disease. Patent HVs and PV.

 Dilatation of IHD and CBD, measured 1.1 cm. No distal CBD stone or gross mass is seen.

 Prominent size of main pancreatic duct without gross mass is noted.

 Distended gallbladder with smooth thin wall. No detectable gallstone.

 Spleen and both adrenal glands appear unremarkable.

 The stomach and bowel loops appear unremarkable without abnormal mass or dilatation.

 Small amount of ascites in pelvic cavity. No intraabdominal collection. No significant intraabdominal lymph node is seen.

 Collapse urinary bladder with diffused thickening wall. No stone.

 Minimal bilateral pleural effusion with subsegmental atelectasis of both lower lobes and lateral segment of RML.

 Degenerative change of visualized bony structure without definite destruction is seen.`,impression:`Infected cystic lesions in both polycystic kidney disease, more prominent in the right kidney with localized peritonitis in RLQ. However, early abscess formation cannot be excluded.
Polycystic liver disease`}},kidney:{"CT of Kidney":{history:``,technique:`The serial axial CT scan of kidneys was performed on noncontrast, nephrographic, and excretory phases, using 1.25 mm slice thickness. Oral water was also administered.

COMPARISON STUDY: MRI kidney .`,comparison:``,findings:`Limitation to evaluate due to respiratory artifacts.

- Bilateral kidneys have normal size, symmetrical enhancement and normal excretory function. No stone or hydronephrosis are detected.

- Still seen multiple fat-containing nodules/mass occupy in bilateral kidneys, varying in size. Increased size of two largest nodules/mass at lower pole of right kidney, measured 5.4x6.5 cm (prior was 5.3x6.2 cm) and 7.1x5.1 cm (prior was 6.9x4.7 cm), suggestive of renal AML. The masses cause pressure effect to adjacent pelvicalyceal system without evidence of obstruction.

- Prominent sized liver with smooth surface and homogeneous density of liver parenchyma. Few small fat-containing lesions scattering at both hepatic lobes, size up to 1.5 cm at hepatic segment II, suggestive of hepatic AML, unchanged.

- Portal vein and hepatic veins are patent. No biliary dilatation is detected.

- Gallbladder has smooth, thin walls with no detectable opaque stone.

- Prominent size of spleen without focal lesion.

- Few fat-containing lesions at the uncinate process of pancreas, suspected lipoma.

- Bilateral adrenal glands are unremarkable.

- Stomach and visualized bowels are unremarkable.

- No ascites, peritoneal nodule, or significant intraabdominal lymphadenopathy is found.

No bony destruction.

- Partially seen evidence of VP shunt at left mid abdomen.

- Ground-glass opacity at both lower lungs, suspected from respiratory effect. Multiple non-specific pulmonary nodules scatter at both lungs. Few subpleural bullae at both basal lungs, up to 1.6 cm`,impression:`- Multiple bilateral renal AML occupy in both kidneys which cause pressure effect to adjacent pelvicalyceal system without evidence of obstruction. Increased size of two largest AML at lower pole right kidney, compared with prior study, is also noted.

- Unchanged few hepatic AML scatter in both hepatic lobes.

- Partially seen evidence of VP shunt at left mid abdomen.

- Multiple non-specific pulmonary nodules scatter at both lungs. Few subpleural bullae at both basal lungs, up to 1.6 cm.`}},liver:{"CT of Liver (Triple Phase)":{history:``,technique:`The triple phase CT scan of liver was performed on precontrast, arterial, portal and 5-min delayed phases, using 1.25 mm slice thickness.`,comparison:`CT SCAN OF THE UPPER ABDOMEN`,findings:`No significant change of multiseptate cystic lesion with rim enhancement involving hepatic segment 5, 6, 7 and 8, measured about 7.0x5.5x6.6 cm. Associated with perilesional edema and perilesional transient hepatic attenuation differences (THADs), compatible with unchanged liver abscess.

 Evidence of transhepatic percutaneous drainage (PCD) insertion via right flank with its tip in the liver abscess.

 No significant change of multiple well-defined lobulated and non-lobilated cystic lesion scattering in both hepatic lobes, The largest cyst is measured up to 2.9 cm at hepatic segment 5 (IM126 SE4), suspected multiple liver cysts.

 Portal vein and hepatic veins are patent.

 Distended gallbladder with tiny gallstone without wall thickening or pericholecystic fat stranding. Prominent size of common bile duct without wall thickening, opaque stone or mass, suggestive of aging change.

 Spleen, pancreas and adrenal glands are unremarkable.

 Few simple bilateral renal cysts, size up to 3.9-cm at lower pole of right kidney, Bosniak I. No stone, hydronephrosis or solid mass of both kidneys.

 Collapsed stomach. Segmental bowel wall thickening, target-water pattern along duodenum to proximal jejunum, possibly due to infection/inflammation. Please correlate with clinical context.

 Unchanged fat containing umbilical hernia, measuring the neck about 1 cm.

 No significant intraabdominal lymphadenopathy.

 Minimal ascites at perihepatic and perisplenic regions.

 Atherosclerotic abdominal aorta and partially seen coronary artery.

 Degenerative changes of the visualized spine. Retrolisthesis grade I at L3/L4 level. No gross bony destruction.

 Increased right pleural effusion with passive atelectasis of right basal lung. Subtle left pleural effusion. Fibrosis with traction bronchiectasis of left lower lobe. Subsegmental atelectasis at lingula segment of left upper lobe. No gross pulmonary mass is observed.`,impression:`- No significant change of liver abscess involving hepatic segment 5, 6, 7 and 8, measured about 7.0x5.5x6.6 cm.

- Evidence of transhepatic percutaneous drainage (PCD) insertion via right flank with its tip in the liver abscess.

- No significant change of multiple liver cysts.

- Few simple bilateral renal cysts, size up to 3.9-cm at lower pole of right kidney, Bosniak I.

- Segmental bowel wall thickening along duodenum to proximal jejunum, possibly due to infection/inflammation. Please correlate with clinical context.

- Unchanged fat containing umbilical hernia, measuring the neck about 1 cm.

- Minimal ascites at perihepatic and perisplenic regions.

- Increased right pleural effusion. No gross pulmonary mass is observed.`}},chest:{"CT of Chest":{history:``,technique:`Axial CT scans were performed in pre and post contrast images and were reconstructed with a 7.5 mm interval.`,comparison:`CT chest .`,findings:`Unchanged well demarcated consolidation with internal dilated bronchus with lung volume loss at right paramediastinum of RUL and medial segment of RML, suggestive of radiation fibrosis. Please correlate with the patient's history.

 Stable size of few small subpleural nodules at right major fissure, non-specific.

 Cluster of centilobular nodules at RUL, suggestive of prior inflammation.

 Overall no significant change in size of subaortic, prevascular, upper and left lower paratrachial lymph nodes, size up to 1.1 cm at subaortic region.

 No supraclavicular or axillary lymphadenopathy is shown.

 No cardiomegaly. No pericardial effusion.

 No pleural effusion.

 No abnormal density or space occupying lesions in liver parenchyma. Gallbladder and biliary system show no abnormal dilatation or stone.

 Spleen, pancreas, adrenal glands and both visualized kidneys are unremarkable.

 No ascites or para-aortic lymphadenopathy.

 Wire over mediastinum with total thrombosis of vascular shunt between brachiocephalic vein and SVC, please correlate with the patient's history.

 No bony destruction.`,impression:`- Unchanged radiation fibrosis at RUL and medial segment of RML. Please correlate with the patient's history

- Stable size of few small subpleural nodules at right major fissure, non-specific.

- Cluster of centilobular nodules at RUL, suggestive of prior inflammation.

- Overall no significant change in size of subaortic, prevascular, upper and left lower paratrachial lymph nodes, size up to 1.1 cm at subaortic region.

- Wire over mediastinum with total thrombosis of vascular shunt between brachiocephalic vein and SVC, please correlate with the patient's history.`},"CT of Chest (Without Contrast)":{history:``,technique:`Axial scans of the chest were performed without contrast.`,comparison:`CT chest non contrast .`,findings:`Unchanged 0.4 cm ground glass nodule at apical segment of RUL, suggestive of adenocarcinoma spectrum, please annual follow up.

 Two 0.4 cm and 0.3 cm calcified nodules at apico-posterior segment of LUL and lateral basal segment of LLL, respectively.

 Dependent atelectasis at both lower lobes.

 Trachea and main bronchi are patent.

 Heart and great vessels are unremarkable.

 Neither pleural nor pericardial effusion is found.

 Multiple subcentimeter mediastinal nodes.

 No significant supraclavicular or axillary lymphadenopathy is shown.

 Elevation of left hemidiaphragm.

 The visualized thyroid gland is normal size.

 No dilatation of great vessels.

 No mass at chest wall.

 Old rib fracture with callus formation at left lateral 6th and 8th ribs.

 Mild degenerative changes of spines without destruction.`,impression:`- Unchanged 0.4 cm ground glass nodule at apical segment of RUL, suggestive of adenocarcinoma spectrum, please annual follow up.

- Two calcified nodules at apico-posterior segment of LUL and lateral basal segment of LLL, respectively, benign.

- No significant lymphadenopathy.

 -No mass at chest wall.`},"CT of Chest (Emergency)":{history:``,technique:`Axial scans of the chest were performed without and with IV contrast material according to the standard protocol.`,comparison:`None.`,findings:`TUBES/LINES: None.

LUNGS/MAJOR AIRWAYS: Normal lung volumes. Clear lungs. Patent airways.

PLEURA: No effusion or pneumothorax.

DIAPHRAGM: Normal position.

HEART/PERICARDIUM/GREAT VESSELS: Normal heart size. No pericardial effusion.

MEDIASTINUM: Normal visualized thyroid. No lymph node enlargement.

CHEST WALL/AXILLA: No mass.

BONES: No suspicious lytic lesion.

INCLUDED UPPER ABDOMEN: Normal allowing scan technique and phase of contrast enhancement.`,impression:`-

-

-

[If incidental pulmonary nodule is present,\\ please place Fleischner Society guideline 2017 subtemplate - see a separate ReportTemplate)

According to

SI lung

45117864`},"Low-Dose CT of Chest":{history:``,technique:``,comparison:`Low dose CT chest .

CT chest .`,findings:`Limited evaluation of vascular and mediastinal structures due to the lack of IV contrast.

 Evidence of RUL lobectomy with intact bronchial stump and post-surgical changes along right-sided anterior mediastinum. No gross mass at surgical bed.

 Unchanged mild fibrosis and bronchiectasis at RML. Compensatory hypertrophy of RML and RLL.

 Unchanged several small pulmonary nodules and subpleural nodules in both lungs, size up to 0.4 cm.

 No definite new pulmonary nodule.

 Stable calcified nodule at RML (0.2 cm).

 Trachea and main bronchi are patent.

 No cardiomegaly with atherosclerotic changed aorta. Moderate pulmonary artery calcification.

 Neither pleural nor pericardial effusion is found.

 Unchanged several subcentimeter mediastinal, supraclavicular, and axillary LNs with some calcifications.

 Unchanged size of a 1.1 cm right breast nodule (compared with CT chest on )

 Normal size visualized thyroid gland with a few calcifications.

 The visualized liver shows normal parenchymal attenuation.

 Bilateral adrenal glands appear normal.

 Degenerative change of spines.

 Evidence of RLL lobectomy with intact bronchial stump.

 No change of fibrosis and multiple high attenuate materials in right lung, likely post-operative change.

 No significant change of multiple pulmonary and subpleural nodules at both lungs.

 No new suspicious lung nodule.

 No change of minimal right pleural effusion.

 Trachea and both main bronchi are patent. Normal-sized thyroid gland.

 No significant change of multiple subcentimeter mediastinal lymph nodes at prevascular, both paratracheal, paraaortic, right paraesophagus and left supraclavicular.

 Axillary and right supraclavicular nodes are unremarkable.

 Normal heart size. No coronary calcification.

 Normal-sized bilateral adrenal glands.

 Degenerative change of spine. Old fractures at right 5th-6th ribs.`,impression:`- Post RUL lobectomy with no gross mass at surgical bed.

- Post tumor removal of right sided anterior mediastinum with no gross local recurrence.

- Unchanged several small pulmonary and subpleural nodules in both lungs, up to 0.4 cm

- Unchanged size of a 1.1 cm right breast nodule (compared with CT chest on ). please correlate with MMG/US.

- Evidence of RLL lobectomy with intact bronchial stump.

- No significant change of multiple pulmonary and subpleural nodules at both lungs.`},"CT of Chest (With Contrast)":{history:``,technique:``,comparison:`CT chest`,findings:`- Evidence of right mastectomy without gross mass at surgical bed.

- No gross mass at left breast is seen.

- Increase size and number of multiple solid pulmonary nodules in both lungs, sized up to 1.8x2.0 cm, prior was 1.8x1.8 cm at apical segment of RUL.

- Subsegmental atelectasis at RML.

- Overall increased size of multiple mediastinal nodes, sized up to 1.5 cm at right hilar region, prior was 1.2 cm.

- No significant change of a few subcentrimeter supraclavicular nodes.

- No axillary and internal mammary lymphadenopathy is detected.

- No pleural effusion is found.

- Trachea and main bronchi are patent.

- No cardiomegaly. Mild calcified coronary artery.

- Visualized thyroid gland is unremarkable.

- No esophageal dilatation or gross mass is noted.

- No bony destruction is detected.

- Visualized liver shows smooth liver surface and homogeneous density of liver parenchyma. No definite liver mass is found. Both adrenal glands are unremarkable.`,impression:`- Evidence of right mastectomy without gross mass at surgical bed.

- Increase size and number of multiple solid pulmonary nodules in both lungs, sized up to 1.8x2.0 cm at apical segment of RUL.

- Overall increased size of multiple mediastinal nodes, sized up to 1.5 cm at right hilar region, prior was 1.2 cm.`}},chest_abdomen:{"CT of Chest & Upper Abdomen":{history:``,technique:`Axial scans of the chest and abdomen was performed without and with IV contrast material according to the standard protocol. Lung window was also obtained.

Axial scans of the chest were performed with IV contrast material according to the standard protocol.`,comparison:`CT chest and upper abdomen
CT brain, neck, chest with contrast .`,findings:`The study reveals evidence of post esophagectomy with gastric pull through. Surgical materials are seen along posterior mediastinum with esophagogastric anastomosis at T2 level and evidence of stomach replacing normal esophageal location, containing food and fluid contents. No demonstrable gross enhancing mass at anastomotic site.

 Unchanged 0.5 cm solid nodule at apico-posterior segment of LUL is seen (IM 110/SE303)

 There is no change of a 0.3 cm calcification at posterior-basal segment of right lower lobe (IM 191/SE303), benign lesion.

 No pleural effusion is demonstrated.

 Trachea and main bronchus are normal.

 Heart and great vessels appear unremarkable.

 No pericardial effusion is noted.

 No significant mediastinal lymphadenopathy is seen.

 A 0.7 cm right thyroid nodule is noted, unchanged.

 Bony thorax is intact.

 Resolved prior seen focal consolidation at lateral basal segment of RLL.

 No significant changes of several small solid pulmonary nodules at both lungs. The largest one is 0.6 cm at posterior basal segment of LLL (IM212, SE9).

 These are suspected indeterminate nodules, pulmonary metastasis cannot be excluded. Please follow up.

 Unchanged calcified nodules at apico-posterior segment of LUL and apical segment of RUL, benign, size up to 0.5 cm.

 Subsegmental atelectasis with dilated internal bronchus at RML and lingular segment.

 Trachea and main bronchi are patent.

 Heart and great vessels are unremarkable. Mild atherosclerotic change of aorta.

 Neither pleural nor pericardial effusion is found.

 Overall decreased size of multiple lymphadenopathies, size up to 1 cm at right hilar node. Some nodes show internal calcifications at right hila and right interlobar regions.

 The visualized thyroid gland shows unremarkable.

 The visualized liver shows normal size with smooth surface and normal parenchymal attenuation. No gross liver mass.

 Bilateral adrenal glands appear normal.

 Mild degenerative change of visualized spine. Several areas of decreased bone density along bilateral transverse process, pedicle and body of T12-L2 vertebrae, benign.`,impression:`- Evidence of gastric pull through without evidence of local recurrence.

- No pulmonary metastasis.

- Unchanged 0.5 cm nodule at apico-posterior segment of LUL.

- No enlarged mediastinal LN.

- A 0.7 cm right thyroid nodule is noted, unchanged.

CT SCAN OF NECK AND CHEST (Page 2/2)

- Resolved prior seen focal consolidation at lateral basal segment of RLL. Unchanged other small solid pulmonary nodules at both lungs, up to 0.6 cm at LLL, pulmonary metastasis cannot be excluded.

- No change of few calcified granulomas at both upper lungs

- Overall decreased size of multiple lymphadenopathies, size up to 1 cm at right hilar node. Some nodes show internal calcifications at right hila and right interlobar regions.`},"CT of Chest & Whole Abdomen":{history:``,technique:``,comparison:`CT Chest with whole abdomen .`,findings:`- Unchanged of a 0.5-cm ground glass nodule in anterior segment of RUL(IM100 SE301), since, suggestive of adenocarcinoma spectrum, please follow up.

- Unchanged of a tiny subpleural nodule at left major fissure(IM139 SE301), non-specific.

- No newly detected pulmonary nodule or infiltration is noted.

- No pneumothorax or pleural effusion is seen.

- Trachea and both main bronchi are patent.

- Heart and great vessels appear unremarkable. No pericardial effusion is seen.

- No change of several subcentimeter mediastinal, supraclavicular and axilla lymphadenopathy.

- No other significant lymphadenopathy is observed.

- Increased size of a 1.0-cm right thyroid nodule is shown. Further ultrasound is suggested.

- No bony destruction is detected.`,impression:`- Unchanged of a 0.5-cm ground glass nodule in anterior segment of RUL since 2020, suggestive of adenocarcinoma spectrum, please follow up.

- No newly detected pulmonary nodule or infiltration

- Increased size of a 1.0-cm right thyroid nodule is shown. Further ultrasound is suggested.`},"CT of Chest & Whole Abdomen (Without Contrast)":{history:``,technique:`The axial CT scan of chest were performed in 0.63 mm. slice thickness, inspiration and expiration phase without intravenous contrast medium administration.`,comparison:`CTPA with whole abdomen .

CT Chest low dose .

CXR .`,findings:`Cannot evaluate filling defect in PA due to non contrast study

 New focal consolidation at posterior segment of RUL and anterior basal segment of RLL, suggestive of infection.

 Overall decreased size and density of multifocal ground glass opacities in both upper lungs and multifocal consolidation with ground glass opacities in RLL, likely resolving prior infectious process.

 Still seen fibrocalcific opacity at apicoposterior segment LUL, suggestive of prior granulomatous infection.

 Subsegmental atelectasis RML. No suspicious pulmonary.

 Mucus plug in segmental bronchus of RLL.

 Trachea and main bronchi are patent.

 Dilatation of main PA, measured about 3.0 cm, unchanged.

 Atherisclerotic changed aorta with severe coronary calcification.

 No cardiomegaly.

 Neither pleural nor pericardial effusion is found.

 No change of multiple subcentimeter mediastinal lymph nodes sized up to 0.8 cm at subaortic region.

 No significant supraclavicular or axillary lymphadenopathy is shown.

 Normal size thyroid gland.

 Degenerative change visualized spine. No change of osteoporotic compression fracture at T12 levels with vertebroplasty. Partially seen evidence of spinal fixation at vertebral body L2 and L3 level. No suspicious lytic lesion.

- Mild increase reticulation, fibrosis with traction bronchiectasis/bronchiolectasis, and honeycombing in both lungs, pronounced at subpleural regions and both lower lobes. These are compatible with UIP pattern.

- Unchanged few tiny perifissural nodules at right major fissure, benign.

- No new solid pulmonary nodule or ground glass opacity.

- No pleural effusion.

- Trachea and main bronchus are unremarkable.

- No significant mediastinal lymphadenopathy is found.

- Normal heart size without pericardial effusion. Mild coronary calcification.

- Atherosclerosis of aorta. Pulmonary trunk is not dilated.

- No significant changed a 0.6-cm calcified right thyroid nodule.

- No gross adrenal mass is noted.

- Degenerative change of visualized spines.

- No active pulmonary infiltration, nodule, or mass is noted.

- No pneumothorax or pleural effusion is shown.

- No cardiomegaly is observed.

- Bony thorax appears intact.

- Suboptimal inspiration

- No interval change of diffuse interstitial opacities at both lungs.

- No change of blunt bilateral costophrenic angle, suspected pleural thickening.

- No change of flattening of bilateral hemidiaphragm.

- No active pulmonary infiltration, nodule, or mass is noted.

- No pneumothorax is shown.

- Bony thorax appears intact.`,impression:`Cannot evaluate filling defect in PA due to non contrast study

- New infectious process at posterior segment of RUL and anterior basal segment of RLL.

- Resolving prior infectious process at both upper lobes and RLL.

- No change of multiple subcentimeter mediastinal lymph nodes sized up to 0.8 cm at subaortic region.

HRCT

- Mild increase degree of fibrotic extents of usual interstitial pneumonia (UIP) pattern in both lungs.

- No increased degree of global extents of usual interstitial pneumonia (UIP) pattern in both lungs

CXR

- No active pulmonary disease

- No interval change of diffuse interstitial opacities at both lungs.

- No change of blunt bilateral costophrenic angle, suspected pleural thickening.

- No change of flattening of bilateral hemidiaphragm.`}},angio_aorta:{"CTA of Whole Aorta (Emergency)":{history:``,technique:``,comparison:`None.`,findings:`Limitation to evaluate due to cardiac motion artifact.

- The study reveals patent total arch replacement with frozen elephant trunk. Multiple sternal wires are intact.

- Evidence of stent placement from proximal descending thoracic aorta (T6 level) to distal descending thoracic aorta (T4 level) with dynamic contrast accumulation at right posterolateral aspect of aneurysmal sac about level T5-T6 (IM79 SE600) with probable arterial feeder from left 5th intercostal artery, suggestive of endoleak type II.

- Rim-enhancing perigraft fluid collection along ascending aorta, aortic arch, and descending aorta, extending to anterior mediastinum subjacent to the sternum and causing pressure effect to adjacent SVC, as well as associated mild mediastinal fat stranding.

- Intimal flap at visualize left common carotid artery and from descending thoracic aorta (T8 level) down to bilateral external iliac arteries, compatible with aortic dissection.

- The narrowing true lumen located at abdominal aorta (T12-L1) is noted, measured 0.9 cm at the narrowest part.

- The right brachiocephalic and left subclavian artery originate from true lumen.

- Celiac trunk, SMA, IMA, and right renal artery originate from true lumen. Narrowing of celiac trunk ostium with well distal contrast opacification.

- Left renal artery originate from both true and false lumen.

- Aortic diameter measurement

 # Celiac origin: 2.9x2.8 cm

 # SMA origin: 2.5x2.4 cm

 # Right renal artery origin: 2.4x2.0 cm

- Cardiomegaly without pericardial effusion.

- Unremarkable visualized thyroid gland.

- Moderate amount of mixed left pleural effusion with hemothorax. Total atelectasis of LLL, subsegmental atelectasis in apicoposterior segment of LUL, and plate-atelectasis in posterior segment of RUL, posterior basal segment of RLL.

- No pneumothorax.

- Hepatomegaly, measured 20 cm midclavicular line, with mild fatty liver. No focal lesion.

- Distended gallbladder without calcified stone. No evidence of cholecystitis. No CBD or IHD dilatation.

- Normal spleen, pancreas and bilateral adrenal glands.

- Unremarkable stomach and bowels, no ascites.

- A few renal cortical cysts, some with internal hyperdense content, size upto 1.7 cm, bilaterally, Bosniak I-II.

- Partially distended urinary bladder with indwelling Foley catheter.

- Multiple enlarged node at prevascular, paraaortic, subaortic regions, size up to 1.2 cm

- No pathologic lymph nodes in abdomen.

- Normal size prostate gland

- Degenerative changes of spines, no worrisome bone lesions.`,impression:`Limitation to evaluate due to cardiac motion artifact.

- Patent total arch replacement with frozen elephant trunk. Multiple sternal wires are intact.

- Evidence of stent placement from proximal descending thoracic aorta (T6 level) to distal descending thoracic aorta (T4 level) with endoleak type II at right posterolateral aspect of aneurysmal sac about level T5-T6 with probable arterial feeder from left 5th intercostal artery.

- Rim-enhancing perigraft fluid collection along ascending aorta, aortic arch, and descending aorta, extending to anterior mediastinum subjacent to the sternum and cause pressure effect to adjacent SVC, as well as associated mild mediastinal fat stranding.

- Multiple enlarged node at prevascular, paraaortic, subaortic regions, size up to 1.2 cm

- Aortic dissection at visualized left common carotid artery and from descending thoracic aorta (T8 level) down to bilateral external iliac arteries.

- Moderate amount of mixed left pleural effusion with hemothorax. Total atelectasis of LLL, subsegmental atelectasis in apicoposterior segment of LUL, and plate-atelectasis in posterior segment of RUL, posterior basal segment of RLL.

- Cardiomegaly

- Hepatomegaly

- A few renal cortical cysts, some with internal hyperdense content, size upto 1.7 cm, bilaterally, Bosniak I-II.`},"CTA of Whole Aorta":{history:``,technique:`Axial scans of the chest were performed without IV contrast material according to the standard protocol.

COMPARISION: CT whole abdomen .`,comparison:``,findings:`** Limitation due to non-contrast study

- Small amount calcified plaque along right anterolateral aspect of ascending aorta. Small amount calcification at left lateral aspect of ascending aorta.

- No gross calcification along upper thoracic course of internal mammary arteries (IMAs).

- Almost circumferential calcification along the aortic arch, descending thoracic aorta, abdominal aorta, and visceral branches of abdominal aorta without aneurysmal dilatation.

- Dense calcification at ostium of celiac, SMA, and both renal arteries without aneurysmal dilatation.

- No cardiomegaly. Severe calcification along RCA, LAD and LCx.

- Few calcified aortic valve.

- Aortic diameter measurement as described

# Ascending aorta at T7 level: 3.6x3.6 cm

# Aortic arch: 3.1x2.4 cm

# Descending aorta at T7 level: 2.3x2.1 cm

# Celiac origin: 2.2x1.9 cm

# SMA origin: 1.9x1.9 cm

# RIght renal artery origin: 1.9x1.8 cm

** Limitation due to non-contrast study

- No enlargement of the visualized thyroid gland.

- A 0.7 cm thin wall cyst at the anterior segment of RUL.

- No pleural effusion or pneumothorax.

- No pleural bullae or emphysema is noted.

- Subsegmental atelectasis at BLL.

- Normal size of liver. A few calcified gallstones, size up to 0.3 cm.

- No biliary tract dilatation.

- Normal size spleen and both adrenal glands.

- Multiple bilateral renal cysts, size up to 1.9 cm at lower pole of left kidney.

- Degenerative change of visualized spine without destructive bone lesion.`,impression:`- Small amount calcified plaque along right anterolateral aspect of ascending aorta. Small amount calcification at left lateral aspect of ascending aorta.

- No gross calcification along upper thoracic course of bilateral IMAs.

- Atherosclerotic change along thoracic and abdominal aorta and its branches without aneurysmal change.

- A 0.7 cm thin wall cyst at the anterior segment of RUL.

- A few calcified gallstones, size up to 0.3 cm.

- Multiple bilateral renal cysts, size up to 1.9 cm at lower pole of left kidney.`}},angio_carotid_brain:{"CTA of Brain & Carotid":{history:``,technique:``,comparison:``,findings:`- No intra- or extra-axial hemorrhage or hemorrhagic transform is detected.

- Normal attenuation of brain parenchyma without definite space occupying lesions.

- No large recent territorial infarction is detected.

- No shifting of midline structures is seen.

- The ventricular system is not dilated.

- Posterior fossa appears unremarkable.

- Both orbits, the visualized PNSs, and both mastoid air cells appear unremarkable.

- Bony calvarium has intact.`,impression:``}},angio_extremities:{"CTA of Lower Extremities (Emergency)":{history:``,technique:`Coronary CTA was performed using one-beat volumetric scan ECG-gated technique. Post-processing reconstruction was performed using MPR, curved-MPR, VRT and quantitative analysis.

BODY PARAMETERS: Weight 15 kg, Height 83 cm, BSA 0.58 m2.

Coronary calcium score was performed using prospective ECG gating technique. Coronary CTA was performed using one-beat volumetric scan ECG-gated technique. Post-processing reconstruction was performed using MPR, curved-MPR, VRT and quantitative analysis. CT chest with contrast was also performed.

Coronary calcium score was performed using prospective ECG gating technique.

CTV of upper extremities (delayed at 60 and 80 sec)`,comparison:`Outside MRI thigh .

None`,findings:`Mild atherosclerotic change at lower part of abdominal aorta. No aneurysm, or dissection.

 Aortic diameter as following;

 # At descending thoracic aorta (T10 level): 2.0x1.8 cm

 # At celiac origin: 1.8x1.7 cm

 # At SMA origin: 1.7x1.5 cm

 # At left renal artery origin: 1.5x1.5 cm

 Celiac trunk, SMA, IMA, and bilateral renal arteries are well-opacified, no significant stenosis.

 A 0.6x0.7 cm fusiform aneurysm at proximal SMA.

 Mild calcified plaque along both CIAs, EIAs, IIAs, and both CFAs without significant stenosis, no aneurysm or dissection.

#Right lower extremity:

 SFA: Few calcified plaque with mild stenosis.

 Popliteal artery: Patent.

 Tibioperoneal trunk: Patent.

 ATA: Patent

 PTA: Patent

 Peroneal artery: Patent

 Dorsalis pedis artery and plantar artery: Patent

#Left lower extremity:

 SFA: Patent

 Popliteal artery: Focal calcified plaque with mild stenosis.

 Tibioperoneal trunk: Patent

 ATA: Multifoci calcified plaque without significant stenosis along ATA.

 PTA: Patent

 Peroneal artery: Patent.

 Dorsalis pedis artery and plantar artery: Patent

- Average heart size, no pericardial effusion.

- Increased size of well-defined intramuscular thin wall cystic lesion with internal multiple septation, measured 16.3x10.2x9.9 cm without enhancing solid portion locates at posterior compartment of left calf. Fat reticulation around the left calf with an increased amount of superficial veins. All of these findings suggest organizing hematoma DDx abscess.

- No active contrast extravasation is seen.

- Centrilobular nodules with tree-in bud pattern at BLL. Consolidation with bronchiectasis at RML, suggestive of infectious process DDx TB. No pleural effusion.

- Hepatosplenomegaly. No focal liver lesion. Few wedge shape board-based hypodense lesions at peripheral part of spleen, suggestive of splenic infarction.

- Pancreas and both adrenal glands appear unremarkable.

- Normal size and enhancement of both kidneys. No stones or hydronephrosis.

- No ascites, no significant lymph nodes.

- Normal distended bladder. Phlebolith in the left sided pelvic cavity.

- Uterus and both adnexa are unremarkable.

- Soft tissue defect at left posteromedial calf, please correlated with clinical.

- Degenerative change of the spine.

- Few bilateral thyroid nodules up to 0.6 cm at left lobe.

- Unchanged mild centrilobular emphysema and paraseptal emphysema at both upper lungs.

- Unchange few calcified granulomas at apical segment of RUL and anterior basal segment of RLL

- Subsegmental atelectasis at BLL.

- Increased size of few enlarged mediastinal lymph nodes, size up to 1.8 cm at right lower paratracheal nodes. No significant supraclavicular, axillary or intra-abdominal lymphadenopathy.

- No pleural effusion is seen.

- Normal size liver without focal lesion.

- Post cholecystectomy. No IHD or CBD dilatation.

- Unchanged multiple bilateral renal cysts up to 1.5 cm at lower pole of left kidney. Some are hemorrhagic cysts. (Bosniak I-II)

- A 2.4x1.1-cm periampullary diverticulum.

- Few sigmoid diverticula with no evidence of diverticulitis.

- Increased size of rim enhancing lesion, size 3.0x2.7 cm at right groin with increased degree of surrounding fat stranding, suggestive of abscess or infected hematoma.

- Unchanged non-enhancing fluid collection at lower tip of prior femoropopliteal graft, measured 2.0x1.8 cm (IM700, SE303). No perilesional fat stranding, suggestive of post operative changed.

- Degenerative change of spine without gross bony destruction. Grade 1 anterolisthesis of L4 over L5.

CTA coronary

Coronary arteries

 - Left main (LM): No dilatation or stenosis, diameter 2.9 mm.

 - Left anterior descending artery (LAD): Partial peripheral recanalization of thrombosed giant aneurysm, diameter 12.4x12.4 mm and length 25.0 mm at proximal LAD. Distal contrast reconstitution with two new aneurysms at mid and distal LAD, diameter 7.0x6.7 mm and 4.2x3.0 mm, respectively.

- Left circumflex artery(LCx): Slightly increased size of giant aneurysm at proximal LCx-OM1, measured 11.6 x 10.3 mm, length 16.7 mm.

 - Right coronary artery (RCA): Increased size of giant aneurysm at proximal RCA, diameter 16.1 mm. Partial recanalization and increased size giant aneurysm with eccentric thrombus at mid RCA, diameter 13.3 x 11.3 mm. The distal RCA shows luminal dilatation and irregularity.

 - Posterior descending artery (PDA): No dilatation or stenosis.

 - Posterolateral branch (PL): No dilatation or stenosis.

 - Dominance: Right

Non-coronary cardiac findings

 - Still seen hypoenhancement of subendocardial at base to mid of anteroseptal and anterior wall of LV, suggestive of ischemia or infarction.

 - Aortic valve and mitral valve are unremarkable.

 - Unchanged patent foramen ovale, measured 3.5 mm width.

 - No pericardial effusion.

- Aortic diameter measurement as follows;

 #Aortic annulus 17.3 x 14.8 mm.

 #Sinus of Valsalva 29.6 x 19.3 x 18.9 mm.

 #Sinotubular junction 16.5 x 15.4 mm.

 #Ascending aorta 13.6 x 12.9 mm.

 #Aortic arch 11.5 x 10.5 mm

 #Descending aorta 8.3 x 8.3 mm

- Pulmonary trunk is measured about 17.3 mm in diameter with internal air bubbles.

- Plate atelectasis at apical segment of RUL.

- Unremarkable bony structure.

- Coronary calcium score

 LM = 0

 LAD = 0

 LCX = 0

 RCA = 0

- Total coronary calcium score = 0, is at the 0th percentile for subjects of the same age, gender, and race/ethnicity who are free of clinical cardiovascular disease and treated diabetes.

Coronary arteries

- Left main (LM): No stenosis.

- Left anterior descending artery (LAD): No stenosis.

- Diagonal branch (DG): No stenosis.

- Left circumflex artery (LCx): No stenosis.

- Obtuse marginal artery (OM): No stenosis.

- Right coronary artery (RCA): No stenosis.

- Posterior descending artery (PDA): No stenosis.

- Posterolateral branch (PL): No stenosis.

- Dominance: Right.

Non-coronary findings

- Interatrial and interventricular septum are intact.

- No pericardial effusion.

- Multifocal calcified plaque along the visualized aorta.

Aortic diameter measurement

- Aortic annulus 2.7x2.0 cm

- Sinus of valsalva 3.3x3.2x3.0 cm

- Sinotubular junction 3.0x2.8 cm

- Ascending aorta 3.1 x 3.1 cm

Extracardiac findings

- The visualized lung shows no pulmonary nodules or infiltration.

- Visualized trachea and main bronchi are patent.

Coronary calcium score:

 LM = 0

 LAD = 0

 LCX = 0

 RCA = 0

 Total coronary calcium score = 0, is at the 0 th percentile for subjects of the same age, gender and race who are free of clinical cardiovascular disease and treated diabetes.

Non-coronary cardiac findings:

- No calcified mitral annulus.

- No pericardial effusion.

- No pulmonary nodules.

- The visualized upper abdomen shows unremarkable.

- Intact bony structure..

CENTRAL VEINS: Patent SVC, Bilateral IJVs and bilateral brachocephalic veins.

Evidence of PermCath insertion via right IJV with its tip in RA. There is fat stranding and rim-enhancing fluid along PermCath, suggestive of infectious processes.

- AVF: Brachiocephalic AVF at the cubital fossa with thrombosis at outflow through venous pouch at mid arm. The thrombosed segment measures 14.2 cm in length. No significant stenosis of the entering brachial artery (0.6 cm).

- Arteries: Patent entire arterial inflow course from the left subclavian artery origin to brachial artery. Patent radial and ulnar arteries

- Veins: Patent subclavian, axillary, brachial, and basilic veins.

- Others: No significant lymph node

- AVF: Radiocephalic AVF at radial side of forearm with thrombosis along venous outflow, from the fistula site to cephalic vein at wrist level. The thrombosed segment measures 20 cm in length. Opacification of contrast at distal arch. No significant stenosis of the entering radial artery.

- Arteries: Patent in the entire course, from the right subclavian artery to brachial artery. Patent radial and ulnar arteries.

- Veins: Patent subclavian, axillary, brachial, and basilic veins.

- Others: No significant lymph node

HEAD&NECK:

- No infraction, hemorrhage, or gross focal lesion of brain parenchyma.

- Patent intracranial, CCAs, cervical ICAs and VAs.

- Patent bilateral internal jugular veins.

- No gross nasopharyngeal mass.

- No gross mass in the aerodigestive tract, no significant lymph nodes.

- Right thyroid nodule with rim calcification, measured 1.4 cm please correlate with ultrasound.

CHEST

- Patent visualized airways, no significant lung lesion, no pleural effusion

- Small plaques in the aortic arch.

- No pericardial effusion

- No significant lymph node

- Degenerative change of visualized spines.`,impression:`- Patent of both calf arteries without active contrast extravasation.

- Increased sized organizing hematoma DDx abscess at posterior compartment of left calf, measured 16.3x10.2x9.9 cm.

- A 0.6x0.7 cm fusiform aneurysm at proximal SMA.

- Hepatosplenomegaly with splenic infarction.

- Centrilobular nodules with tree-in bud pattern at BLL. Consolidation with bronchiectasis at RML, suggestive of infectious process DDx TB.

LEFT LOWER EXTREMITY;

# CFA: Severe calcified plaque with total occlusion. Contrast reconstitution at distal CFA is noted.

# SFA: Calcified plaque with multifocal severe stenosis at mid and distal parts. Multifocal mild stenosis at proximal part.

# Popliteal artery: Calcified plaque with multi focal severe stenosis.

# Tibioperoneal trunk: Calcification with moderate stenosis.

# ATA: Severe calcification with multifocal total occlusion.

# PTA: Seen contrast opacification along its course.

# Peroneal artery: Seen contrast opacification along its course.

# DPA: Faint contrast opacification proximally but occlusion at distal part.

# Plantar artery: Seen contrast opacification along its course.

1. Partial peripheral recanalization of thrombosed giant aneurysm (12.4x12.4 mm) at proximal LAD.

2. Two new aneurysms at mid and distal LAD, diameter 7.0x6.7 mm and 4.2x3.0 mm, respectively.

3. Slightly increased size of giant aneurysm at proximal LCx-OM1 (11.6 x 10.3 mm) and proximal RCA (16.1 mm.)

4. Partial recanalization and increased size giant aneurysm with eccentric thrombus at mid RCA (13.3 x 11.3 mm)

5. Evidence suggestive of myocardial ischemia/infarction at base to mid anteroseptal and anterior wall of LV.

6. Patent foramen ovale, measured 3.5 mm width.

1. No stenosis of LM, LADn LCx, and RCA..

2. Total coronary calcium score = 0.

CT coronary calcium score

- Total coronary calcium score = 0.

CTV upper ext

- No central venous thrombosis.

- Left brachiocephalic AVF and right radiocephalic AVF with thrombosis along venous outflow of bilateral cephalic vein. No significant stenosis of the entering arteries.

- Infected PermCath insertion via right IJV with its tip in RA.

- Right thyroid nodule with rim calcification, measured 1.4 cm please correlate with ultrasound.`},"CTA of Upper Extremity & CT Chest (Emergency)":{history:``,technique:`Axial scans of the right upper extremity and chest were performed with IV contrast material according to standard protocol.`,comparison:`None.`,findings:`**Limitation due to inability to elevate the arm overhead**

TUBES/LINES: Central venous catheter insertion via left IJV with its tip located in right SVC/RA junction. Nasogastric tube insertion with its tip placed in gastric body. Endotracheal tube with tip about 3.5 cm above the carina. Double lumen catheter insertion via left CFV with its tip placed at left CIV.

LUNGS/MAJOR AIRWAYS: Multifocal ground-glass opacities with centrilobular nodules in the posterior aspect of RUL and dependent part of both lower lobes, suspected aspiration pneumonia.

PLEURA: Bilateral pleural effusions with passive atelectasis.

DIAPHRAGM: Normal position.

AORTA: No aortic or aortic branch injury.

HEART/MEDIASTINUM: No pericardial fluid.

SOLID ORGANS: No injuries of the liver, spleen, pancreas, kidneys or adrenal glands.

GB/BILE DUCTS: No dilatation.

GI TRACT/MESENTERY: Short segmental bowel wall thickening with preserved bowel wall enhancement at rectum, suspected proctitis.

NON-AORTIC VESSELS: No arterial dissection, contrast extravasation, or aneurysm. No venous thrombosis along right upper extremity.

BLADDER/PELVIC ORGANS: Collapsed urinary bladder with diffuse wall thickening, perivesicle fat stranding, suspected cystitis. Indwelling Foley’s catheter.

PERITONEUM/RETROPERITONEUM: Small amount low-attenuation free fluid at right paracolic gutter, mesentery and pelvic cavity.

PELVIS: Minimal displaced fracture at left acetabulum involving anterior column and anterior wall without intra-articular bony fragment. Intramuscular hematoma at right iliacus (7.7x2.9x6.5 cm) and obturator externus muscles (4.9x3.4x2.9 cm). No active contrast extravasation.

SPINE: No fracture.

OTHER BONES: Two-part fracture of proximal humerus involving greater tuberosity with a maximal gap of 1.9 cm and anterior shoulder dislocation. Associated lipohemarthrosis is noted. Additionally, a small hematoma at right subclavian region and intramuscular hematoma at right deltoid (4.8x2.4x4.3 cm) and subscapularis (6.5x3.6x6.6 cm). Comminuted fracture at left DER and distal ulnar with intra-articular involvement. Partially seen comminuted fracture mandibular body.`,impression:`**This is a PRELIMINARY report, pending finalization by an attending radiologist.

- No evidence of vascular injury or venous thrombosis in right upper extremity.

- Two-part fracture of proximal humerus involving greater tuberosity (maximal gap 1.9 cm) with anterior shoulder dislocation, lipohemarthrosis and adjacent intramuscular hematoma.

- Comminuted fracture at left DER and distal ulnar with intra-articular involvement.

- Partial seen comminuted fracture mandibular body

- Suspected aspiration pneumonia at posterior aspect of both lungs with bilateral pleural effusions and passive atelectasis.

- No aortic or aortic branch injury.

- No solid abdominal organs, bowel wall thickening or extraluminal air.

- Small amount of low-attenuation intra-abdominal free fluid.

- Minimal displaced fracture at left acetabulum involving anterior column and anterior wall without intra-articular bony fragment or active contrast extravasation.

- Intramuscular hematoma at right iliacus and obturator externus muscles.

- No TLS spinal fractures.

- Suspected proctitis and cystitis.

COMMUNICATION: The critical results (Multiple fracture at right humerus, left wrist, left acetabulum and mandible, No aortic and solid organ injury, intramuscular hematoma) were discussed with Dr.Pittawit on at 23.50 by phone.`}},brain:{"CT of Brain (Without Contrast)":{history:``,technique:`The serial CT scan was performed whole brain without contrast administration in 1.25 and 5.0 mm. slice thickness.`,comparison:`None.`,findings:`The study reveals no acute intra-/extra-axial hemorrhage.

- No recent large territorial infarction is detected.

- No shifting of midline structures or other type of brain herniation is found.

- The ventricular system ils not dilated.

- Posterior fossa appears unremarkable, given limitation due to beam hardening artifacts.

- Both orbits, the visualized PNSs and both mastoid air cells appear unremarkable.

- The bony calvarium is intact.`,impression:`- No acute intracranial hemorrhage or recent large territorial infarction.

- No skull fracture.

EDH

 Lens-shape hyperdensity fluid lying along right cerebral hemisphere is noted, compatible with epidural hemorrhage.

SDH

 Crescent-shape hyperdense lesion along at right frontal region, measured about 0.6 cm, is suspected of acute subdural hematoma.

SAH

 Hyperdensity fluid lying along sulci and gyri of right cerebral hemisphere, right sylvian fissure and basal cistern.

Brain atrophy

 Prominent sulci and gyri of bilateral cerebral hemisphere and cerebellar folia in proportionate to degree of ventricular system dilatation (EVANS' index = ) are suggestive of generalized brain atrophy.

Nonspecific white matter change

 Patchy confluent hypodensity lesion along bilateral centrum semiovale and bilateral periventricular white matter, possibly nonspecific white matter change.

Pneumocephalus

 Multiple pneumocephalus at parasagittal, bilateral frontal, bilateral parietal, bilateral tentorial cerebelli and pineal regions are noted, suggestive of post-opeartive change

Staple

 Craniotomy defect at left fronto-parietal region and bilateral parieto-occipital regions with overlying multiple surgical materials are seen, please correlated with surgical history.

Residual Tumor?

 Hyperdense lesion with calcification at quadrigerminal cistern and pineal region is observed, could be surgical material or remaining calcified lesion, pleased correlated with surgical procedure and pre-operative imaging. However, residual tumoiir cannot be evaluated due to non contrast study.

Ventriculostomy

 Ventriculostomy tube is inserted via right occi

Encephalomalacic change

 Well-defined CSF-density area with ex vacuo dilatation of left lateral ventricle compatible with encephalomalacic change of left frontoparietotemporal lobe.

Lamina papyracea dehiscence

 There are protrusion of bilateral orbital fat via the defects at bilateral lamina papyracea without containing EOM, which could represent bilateral lamina papyracea dehiscence.

- Fluid filled with high proteinaceous content at the right frontal sinus with mucoperiosteal thickening at bilateral ethmoid, sphhenoid, and bilateral maxillary sinuses, possibly pansinusitis.`},"CT of Brain (With Contrast)":{history:``,technique:`The serial CT scan was performed whole brain with contrast administration in 1.25 and 5.0 mm. slice thickness.

COMPARATIVE STUDY: None.`,comparison:``,findings:`- This study reveals no intra- and extra-axial hemorrhage.

- No large recent territorial infarction is detected.

- After contrast administration, there is no abnormal enhancing lesion or leptomeningeal enhancement.

- The venous system appears unremarkable.

- No shifting of midline structures or other types of brain herniation is seen.

- The ventricular system is not dilated.

- Posterior fossa appears unremarkable, given limitation due to beam hardening artifacts.

- Mild mucoperiosteal thickening of both ethmoid sinuses.

- Small retention cysts at both maxillary sinuses.

- Both orbits, the rest of visualized PNSs, and both mastoid air cells appear unremarkable.

- Bony calvarium appears intact.

- Prominent sulci and gyri of bilateral frontal and parietal lobes.`,impression:`- No intracranial hemorrhage or large recent territorial infarction.

- No abnormal enhancing lesion or leptomeningeal enhancement.`},"CT of Neck (With Contrast)":{history:``,technique:`Axial CT neck scan is performed by 1.25 mm thickness from nasopharynx to thoracic inlet in pre- and post-contrast phase.

COMPARATIVE STUDY:`,comparison:``,findings:`Nasopharynx shows symmetrical mucosal enhancement without abnormal thickening or blunting of bilateral Rosenmuller fossa.

 Oropharynx, oral cavity and larynx are unremarkable.

 No significant cervical lymphadenopathy is noted.

 Both lobes of thyroid gland appear unremarkable.

 The visualized brain parenchyma shows normal attenuation without definite space taking lesion or abnormal enhancement. The visualized cerebral venous and arterial systems are normal.

 The visualized bilateral external and internal carotid arteries and bilateral internal jugular veins appear unremarkable.

 Both orbits,orbital apices and retroorbital area are normal.

 The visualized paranasal sinuses and bilateral mastoid air cells are unremarkable.

 Mandible appears normal.

 Cervical spines shows normal lordotic curve without evidence of fracture. No bony destruction.`,impression:`-

Temporal`},"CT of Temporal Bone":{history:``,technique:`The serial axial CT scans were performed through the temporal bone using 0.6, 1.0, and 3.0 mm slice thickness.`,comparison:``,findings:`The study reveals soft tissue density lesions in right middle ear cavity along epitympanum and Prussak's space. Associated blunting of right scutum and retraction with thickening of right tympanic membrane are demonstrated. Erosion of right ear ossicles, especially incus and stapes are noted. According to these findings, cholesteatoma; pars flaccida is most likely.

- Minimal fluid or soft tissue thickening at cartilaginous and bony parts of right external auditory canal extending to epitympanum, aditus ad antrum, mastoid antrum and the mastoid air cells with associated sclerosis of right tegmen tympani, mastoid antrum and mastoid air cells. All of these findings could be chronic otomastoiditis.

- Bilateral internal acoustic canal and bilateral cerebellopontine angle are unremarkable.

- Left Prussak space showed patency without abnormal lesion.

- Normal appearance of left tympanic membranes is seen.

- Left ear ossicles appear unremarkable.

- No fluid in left middle ear cavities is depicted.

- Left mastoid antrum and aditus ad antrum appear normal.

- Bilateral cochlears show normal turns.

- Bilateral semicircular canals are unremarkable.

- Both temporomandibular joints and styloid processes appear unremarkable.

- Nasopharynx and oropharynx are unremarkable.

- Both parotid glands appear unremarkable.

- No significant cervical lymphadenopathy is noted.

- Visualized brain parenchyma shows normal attenuation without abnormal enhancing lesion.

- Mild mucoperiosteal thickening at both maxillary and right frontal sinus is seen.

- Both orbits and the rest of PNSs appear unremarkable.

- Bony calvarium appears unremarkable.`,impression:`- Soft tissue density lesions in right middle ear cavity along epitympanum and Prussak's space. Associated blunting of right scutum and retraction with thickening of right tympanic membrane are demonstrated. Erosion of right ear ossicles, especially incus and stapes are noted. According to these findings, cholesteatoma; pars flaccida is most likely. Please correlate with clinical context.

- Suggestive right chronic otomastoiditis.

Brain + C-spine`},"CT of Brain & Facial Bone (Without Contrast)":{history:``,technique:`The serial CT scan was performed on the whole brain without contrast administration in 1.25- and 5.0-mm slice thickness with multiplanar reformations.`,comparison:`F-18 PSMA PET/CT .`,findings:`- No intra- or extra-axial hemorrhage.

- No large recent territorial infarction is detected.

- A few well-defined hypodense lesions at left caudate nucleus, could be old lacunar infarction.

- Patchy confluent hypodensity lesions along bilateral centrum semiovale and bilateral periventricular white matter, possibly non-specific white matter

- A well-defined hyperdense extra-axial lesion with calcification, measured about 0.9x1.1x9.6-cm at the left frontal region, suspected calcified meningioma.

- No shifting of midline structures or brain herniation is seen.

- The ventricular system is not dilated.

- Prominent sulci and gyri at both cerebral hemispheres and cerebellar folias, suggestive of cortical brain atrophy brain atrophy.

- Posterior fossa appears unremarkable, given limitation due to beam hardening artifacts

- Calcified plaques at both cavernous and supraclinoid parts of both ICAs are seen.

- Mucoperiosteal thickening at both ethmoid and maxillary sinuses and retention cysts at right ethmoid, both maxillary sinuses.

- Artificial lensese in both orbits.

- The rest of visualized PNSs and both mastoid air cells appear unremarkable.

- Bony calvarium appears intact.

- No fracture of the upper/mid face and mandible.

- The visualized c-spines revealed degenerative changed of visualized spines, no fracture, dislocation or subluxation.

- Hyperdense lesion at anterior to left maxilla, measured about 1.2-cm, could be hematoma.`,impression:`- No acute intracranial hemorrhage or large recent territorial infarction.

- Old lacunar infarction at left caudate nucleus.

- A 1.2-cm hematoma at anterior to left maxilla.

- No detectable skull fracture

- Calcified meningioma at the left frontal region.`}},spine:{"CT of L-S Spine":{history:``,technique:`The serial CT scan was performed through T-L spines with contrast administration in 1.25 and 2.5 mm slice thickness.

LIMITATION: DUE TO SURGICAL MATERIAL BEAM ARTIFACT

COMPARATIVE STUDY: Film LS SPINE`,comparison:``,findings:`- The study reveals decreased normal lordotic curvature of LS spine without evidence of dislocation, subluxation or spondylolithesis.

- Compression fracture at L2 and L4 level with sclerotic change. There are retropulsed bony fragments causing mild spinal canal stenosis.

- Marginal osteophytes at visualized vertebral bodies are demonstrated.

- No bony destructive lesions are observed.

- Mild narrowing of intervertebral disc spaces of L2/3 and L4/5.

- No evidence of narrowing of neural foramina.

- No paravertebral soft tissue mass is seen.

- Atherosclerotic change of visualized aorta, both common iliac arteries and both internal iliac arteries.

- A 0.9 cm AML at lower pole of left kidney is seen.

- Visualized right kidney appear unremarkable.

- No gross intraabdominal lymphadenopathy is noted.

- Partially full urinary bladder is detected.`,impression:`- No obvious evidence of osteolytic lesion or gross enhancing paravertebral soft tissue mass

- Compression fracture at L2 and L4 level with sclerotic change. There are retropulsed bony fragments causing mild spinal canal stenosis, further MRI LS spine is suggested.

- Degenerative change of LS spine

brain con`},"CT of Brain & C-Spine (Emergency)":{history:``,technique:`The serial CT scan was performed whole brain and cervical spine without contrast administration in 1.25 and 2.5 mm. slice thickness.`,comparison:`None.`,findings:`- The study reveals no intra-extraaxial hemorrhage.

- No large recent territorial infarction.

- The ventricular system is not dilated.

- No shifting of midline structure or other type of brain herniation.

- Posterior fossa appears unremarkable, given limitation due to beam hardening artifacts

- Hyperdensity lesion with internal air bubbles of scalp at left fronto-parietal region, measured 0.7 cm in thickness, suggestive of scalp contusion.

- Both orbits, the PNSs and both mastoid air cells appear unremarkable.

- No gross skull fracture is seen.

C-SPINE FINDINGS:

- Loss of normal curve.

- No acute displaced fracture or dislocation is detected.

- Unremarkable of craniocervical junction.

- Unremarkable of disc spaces.

- No prevertebral soft tissue swelling.`,impression:`- No intra-extraaxial hemorrhage.

- No large recent territorial infarction.

- No cervical spine fracture or dislocation is detected.

- Hyperdensity lesion with internal air bubbles of scalp at left fronto-parietal region, measured 0.7 cm in thickness, suggestive of scalp contusion.

Brain + facial bone`},"CT of Brain, C-Spine & Facial Bone (Emergency)":{history:``,technique:`The serial CT scan was performed whole brain, cervical spine, and facial bone without contrast administration in 1.25 and 2.5 mm. slice thickness.`,comparison:`None.`,findings:`- The study reveals no intra-extraaxial hemorrhage.

- No large recent territorial infarction.

- Patchy confluent hypodensity lesion along bilateral centrum semiovale and bilateral periventricular white matter, possibly nonspecific white matter change.

- The ventricular system is not dilated.

- Posterior fossa appears unremarkable, given limitation due to beam hardening artifacts

- No shifting of midline structure or other type of brain herniation.

- Mild mucoperiosteal thickening at both maxillary and ethmoid sinuses.

- Both orbits and the rest of PNSs and both mastoid air cells appear unremarkable.

- Bony calvarium appears intact.

- No fracture of the upper/mid face and mandible.

C-SPINE FINDINGS:

- Loss of normal curve of cervical spine. Mild degenerative changes.

- No acute displaced fracture or dislocation is detected.

- Unremarkable of craniocervical junction.

- Unremarkable of disc spaces.

- No prevertebral soft tissue swelling.`,impression:`- No intra-extraaxial hemorrhage.

- No large recent territorial infarction.

- No fracture of the upper/mid face and mandible.

- Mild degenerative changes of cervical spine without fracture or dislocation.`}}},mri:{angio_aorta:{"MRA of Whole Aorta":{history:``,technique:``,comparison:``,findings:`- Evidence of median sternotomy and total arch replacement with patent aortic interposition graft at ascending aorta and its re-implanted trunks without contrast leakage, internal thrombosis or perigraft collection. Also patent left aorto-axillary bypass graft.

- Patent endovascular stent graft with proximal cover marker at proximal aortic arch (T4 level) and distal cover marker located at descending thoracic aorta (T6 level) without in-stent thrombosis or endoleak.

- No significant change in extension or total diameter of residual aortic dissection with partial thrombosed false lumen, involving from descending thoracic aorta (T7 level) to just above aortic bifurcation (lower L3 level). The maximal total diameter is measured about 3.9x3.8 cm (prior 3.8x3.7 cm) at T11 level.

- Celiac trunk, SMA and bilateral renal arteries originate from true lumen, without significant stenosis.

- IMA arises from both true and false lumen, unchanged. No significant stenosis.

- Aortic diameters are measured as following (total diameter);

# Descending thoracic aorta (T7 level): 2.7x2.3 cm

# Suprarenal abdominal aorta (T11 level): 2.1x1.8 cm

# Celiac trunk origin: 2.3x1.7 cm

# SMA origin: 1.8x1.7 cm

# Left renal arteries origin: 2.1x1.5 cm

- Bilateral CIAs show no aneurysmal dilatation or significant stenosis.

- Limited to evaluate lung lesions due to susceptibility and motion artifacts. Few subsegmental atelectasis at LLL.

- No pericardial effusion or pleural effusion.

- Unchanged a 0.3-cm low SI in T1WI at hepatic segment 8, corresponding with prior seen calcified hepatic lesion that possibly calcified granuloma.

- Multiple small gallstones at dependent part of gallbladder without evidence of acute cholecystitis, size up to 0.4 cm.

- Spleen, pancreas and bilateral adrenal glands are unremarkable.

- A 0.3-cm tiny cyst at interpolar region of right kidney. Normal size and symmetrical enhancement of both kidneys. No hydronephrosis.

- No abnormal enhancing marrow replacing lesion. No gross bony destruction.

- Evidence of sternotomy with midline sternal wires with susceptibility artifacts.`,impression:`- S/P total arch replacement with frozen elephant trunk. Patent aortic interposition graft, endovascular stent graft and aorto-left axillary bypass graft, without contrast leakage, endoleak or internal thrombosis.

 - No significant change in total diameter and extension of residual dissection with partial thrombosed false lumen along descending thoracic aorta to infrarenal abdominal aorta.

 - No evidence of significant stenosis or end-organ infarction.

 - Unchanged a small calcified hepatic lesion at segment 8, gallstones and a tiny renal cyst at right kidney.`}},spine:{"MRI of C-Spine (with Screening Whole Spine)":{history:``,technique:`MRI of C spines was performed on;

 - Sagittal: T1WI, T2WI, STIR, T2W/GRE

 - Coronal: STIR

 - Axial: T1WI, T2WI

- Screening whole spine: sagittal T2W

COMPARISON STUDY: CT brain with facial bone with c-spine out sourced .`,comparison:``,findings:`Limitation to evaluate C-spine due to metallic artifacts.

- The study reveals loss of cervical lordosis.

- There is hypo SI on T1W at the body of dens, representing an oblique fracture line, suggestive of type II odontoid fracture according to Anderson and D’Alonzo classification.

- Fracture of bilateral posterior arch of C1 is noted, correlated with prior CT C-spine.

- Evidence of metallic fixation along the anterior vertebral body of C3-C6 level.

- No evidence of central spinal canal stenosis or cord compression at C1, C2 level.

- Fatty changes of marrow SI along C-spine. No bone marrow edema is observed.

- Decreased water SI and fattening of disc space along C1/2,C2/3, C3/4, C4/5, C5/6 and C6/7, suggestive of degenerative disc.

- No blooming artifact is seen on GRE.

- Details of each intervertebral level are described as following;

#C1/2: No central canal or neural foramen stenosis.

#C2/3: Disc osteophyte with facet hypertrophy causing bilateral neural foramen stenosis. No central canal stenosis.

#C3/4, C4/5, and C5/6: Disc osteophyte with facet hypertrophy causing bilateral neural foramen stenosis. Mild central canal stenosis.

Hyper SI on T2W of spinal cord with volume loss, suggestive of chronic myelopathy.

#C6/7 and C7/T1: Disc osteophyte with facet hypertrophy causing bilateral neural foramen stenosis. Mild central canal stenosis.

Volume loss of the central canal without SI changed on T2W is noted.

- The cervicomedullary junction and visualized posterior fossa appear unremarkable.

Screening whole spine:

- Lumbarization of S1

- No T-spine fracture. Disc degeneration with flattening disc at T10/11 level. Loss of thoracic kyphosis. No central spinal canal stenosis or cord compression along T spine level.

- Clonus medullaris terminates at L1 level.

- Degenerative change of L-spine. Bony spur and disc degeneration is observed. No L-spine fracture. Posterior disc bulging causing severe central canal stenosis at L2/3, L3/4, and L4/5.

- Bilateral small Talov cysts at S3 level.`,impression:`Limitation to evaluate C-spine due to metallic artifacts.

- Evidence of metallic fixation along the anterior vertebral body of C3-C6 level.

- Type II odontoid fracture according to Anderson and D’Alonzo classification and fracture of bilateral posterior arch of C1, correlated with prior CT C-spine.

- No evidence of central spinal canal stenosis or cord compression at fracture level.

- Degenerative change of CTL spine as described.

- Bilateral neural foramen stenosis along C2/3, C3/4, C4/5, C5/6, C6/7 and C7/T1level.

- Mild central canal stenosis along C3/4, C4/5, C5/6, C6/7 and C7/T1level.

- Spinal cord volume loss along C-spine with spinal cord hyper SI on T2W of C3/4, C4/5, and C5/6, suggestive of degenerative cervical myelopathy.`},"MRI of Cervical & Lumbar Spine (Emergency)":{history:``,technique:`MRI of cervical spine was performed
 - Sagittal: T1W, T2W, STIR

 - Axial: T1W, T2W, T2W/FFE

 - Coronal: STIR

 - Additional myelogram was also obtained

COMPARATIVE STUDY: MRI C spine .`,comparison:``,findings:`- The study reveals heterogeneous signal marrow background with loss of lordotic curve of C-spine and L-spine.

- Degenerative change along C-spine with narrowing disc space and marginal osteophyte at C4/5, C5/6, and C6/7 level. Decreased water SI of all cervical disc, suggestive of degenerative change.

- Degenerative change along L-spine with narrowing disc space at L2/3, L3/4 level, marginal osteophyte at L2, L3, L4, and L5 vertebral body. Decreased water SI of lumbar disc at L2/3, L3/4, L4/5, and L5/S1 level, suggestive of degenerative change.

- Retrolisthesis of L2 over L3 and L3 over L4 is noted.

- Fatty marrow SI change of the cervical spine.

- The detail of each intervertebral levels are as follow;

#C1/2 and C2/3: No central canal or neural foramen stenosis.

#C3/4: Mild posterior disc bulging without central canal or bilateral neural foramen stenosis.

#C4/5: Disc osteophyte with posterior disc bulging and left facet hypertrophy causing mild central canal stenosis and bilateral neural foramen stenosis (severe at left-sided).

#C5/6: Disc osteophyte with posterior disc bulging with moderate spinal canal stenosis. Bilateral neural foraminal stenosis (severe at right-sided). Degenerative change of endplate is noted.

#C6/7: Disc osteophyte with posterior disc bulging and left facet hypertrophy causing mild central canal stenosis and mild bilateral neural foramen stenosis. Degenerative change of endplate is noted.

#C7/L1: Mild posterior disc bulging without mild central canal stenosis. No bilateral neural foramen stenosis.

- The spinal cord shows high SI along C3 to T1 level, prominent at C5-C6 level, suggestive of compressive myelopathy

#L1/2: Mild posterior disc bulging without spinal canal stenosis. No traversing nerve root compression.

#L2/L3: Posterior disc bulging without spinal canal stenosis. Right facet hypertrophy without traversing nerve root compression.

#L3/L4: Posterior disc bulging with bilateral facet hypertrophy causing moderate spinal canal stenosis and bilateral lateral recess stenosis with traversing nerve root L4 compression. Moderate stenosis of right neural foramen.

#L4/L5: Posterior disc bulging with bilateral facet hypertrophy causing moderate spinal canal stenosis and bilateral lateral recess stenosis with traversing nerve root L5 compression. Moderate stenosis of left neural foramen.

#L5/S1: Posterior disc bulging with bilateral facet hypertrophy causing right lateral recess stenosis and right traversing nerve root S1 compression. No spinal canal stenosis. severe stenosis of left neural foramen with left exiting nerve root compression.

- No intrinsic cord lesions.

- The cervicomedullary junction and visualized posterior fossa appear unremarkable.

- A small Schmorl's node at superior endplate of L3 vertebral body.

- Conus medullaris terminates at lower L1 level.

- A 0.7 cm renal cyst at left lower pole.

- Both SI joints are unremarkable.`,impression:`- Degenerative change along C-spine as described with compressive myelopathy of C-spine, prominent at C5-C6 level.

- Severe neural foramen stenosis at left C4/5 and right C5/6.

- Degenerative change along L-spine as described with compressive myelopathy, prominent at C5-C6 level.

- Moderate spinal canal stenosis and bilateral traversing nerve root L4 compression. Moderate stenosis of right neural foramen of L3/L4 level.

- Moderate spinal canal stenosis and bilateral traversing nerve root L5 compression. Moderate stenosis of left neural foramen of L4/L5 level.

- Right traversing nerve root S1 compression. Severe stenosis of left neural foramen with left exiting nerve root compression.

- A 0.7 cm renal cyst at left lower pole.

- Both SI joints are unremarkable.`},"MRI of Cervical & Thoracic Spine":{history:``,technique:`MRI C-T spine was performed in the following sequences,

 Sagittal: T1W, T2W, T2W/STIR, T1W/FS/Gd

 Axial: T1W, T2W, T1W/FS/Gd

 Coronal: T2W/STIR, T1W/FS/Gd`,comparison:`MRI C-T spine .`,findings:`The study reveals evidence of laminectomy along C3 to T5 levels

- There is hyperSI on T2W at left dorsal medulla, cervicomedullary junction, cervical spinal cord down to T5 spinal cord level. Spinal cord distortion and atrophy is also noted. Still seen small cystic parts at C3,C4 spinal cord level. Intramedullary T2W hypoSI foci along C spine to upper T spine level, suggestive of old hemorrhage.

- Also detected spinal cord adheres posteriorly to the thecal sac.

All of these findings are suggested post treatment changes.

- No new enhancement or other cystic lesion in the spinal cord.

- Increased thoracic kyphosis curve at upper thoracic level.

- The rest of the spinal cord shows unremarkable. No leptomeningeal enhancement.

- No central canal or neural foramen stenosis.

- Vertebral marrow is normal SI without abnormal enhancement.

- Intervertebral discs appear unremarkable.

- Clonus medullaris is located at L1-L2 levels.

- No pre-or paravertebral collection is detected.

- Unremarked visualized brain.`,impression:`Known case cervical pilomyxoid astrocytoma S/P laminectomy along C3 to T5 level.

- Post treatment changes along cervicothoracic cord, extending to cervicomedullary junction and left dorsal medulla.

- No gross residual tumor.`},"MRI of C-Spine":{history:``,technique:`MRI of C spines was performed on;

 - Sagittal: T1WI, T2WI, STIR, T1W/FS/Gd

 - Coronal: STIR, T1W/FS/Gd

 - Axial: T1WI, T2WI, T1W/FS/Gd

COMPARISON STUDY: CT and CTA brain include carotid .`,comparison:``,findings:`- The study reveals loss of cervical lordosis. No scoliosis or spondylolisthesis

- Loss of water SI along cervical disc space, suggestive of degenerative disc.

- Endplate Modic change type1 at inferior endplate of C5 vertebra.

- No marrow replacing lesions along cervical spine.

- Details of each intervertebral level are described as following;

#C1/2: No central canal or neural foramen stenosis

#C2/3: Mild posterior disc bulging with facet joint, ligamentum flavum, and uncovertebral joint hypertrophy. Mild central canal stenosis. Severe left neural foramen stenosis with suspected left C3 nerve root compression.

#C3/4: Posterior disc bulging with facet joint, ligamentum flavum, and uncovertebral joint hypertrophy. There is focal dense calcification of left ligamentum flavum corresponding with prior CT. Severe central canal stenosis. Severe both neural foramen stenosis with suspected both C4 nerve root compression.

 HyperSI on T2W of spinal cord at C3-C4 level with adjacent epidural thickening with enhancement at C3-C4 level, suggestive of compressive myelopathy with reactive inflammation.

#C4/5: Posterior disc bulging with facet joint, ligamentum flavum, and uncovertebral joint hypertrophy. Moderate central canal stenosis. Severe both neural foramen stenosis with suspected both C5 nerve root compression.

 Anterior annular fissure is observed.

#C5/6: Mild posterior disc bulging with facet joint, ligamentum flavum, and uncovertebral joint hypertrophy. Moderate central canal stenosis. Severe left neural foramen stenosis with suspected left C6 nerve root compression. Moderate right neural foramen stenosis.

#C6/7: Mild posterior disc bulging with facet joint, ligamentum flavum, and uncovertebral joint hypertrophy. No central canal stenosis. Mild right neural foramen stenosis.

#C7/T1: Mild posterior disc protrusion without central canal stenosis. No neural foramen stenosis.

- The cervicomedullary junction and visualized posterior fossa appear unremarkable.

- There is fluid SI with enhancement at anterior interspinous area of C3-C4 level, possibly interspinous bursitis related degenerative change`,impression:`1. Degenerative change of cervical spine;

 - Severe left neural foramen stenosis at C2/3 spinal level with suspected left C3 nerve root compression.

 - Severe central canal stenosis at C3/C4 spinal level. Severe both neural foramen stenosis with suspected both C4 nerve root compression.

 - Severe both neural foramen stenosis at C4/C5 spinal level with suspected both C5 nerve root compression.

 - Severe left neural foramen stenosis at C5/C6 spinal level with suspected left C6 nerve root compression.

2. Compressive myelopathy with reactive inflammation at C3/C4 spinal level.

3. Interspinous bursitis related degenerative change at C3-C4 spinal level`},"MRI of Brain & Cervical Spine (with Screening Whole Spine)":{history:``,technique:`Axial: T1W, T2W, FLAIR, DWI, ADC, SWI, T1W FS GD, c-spine T1W and T2W

 Coronal: T2W, T1W FS GD, c-spine STIR

 Sagittal: T1W, c-spine T1W, T2W,STIR

 Myelogram was performed on heavily T2WI.

 Screening whole spine: sagittal T2W

COMPARATIVE STUDY: MRI BRAIN WITH C-SPINE .`,comparison:``,findings:`The study reveals evidence of left fronto-temporal craniotomy with left sphenoidectomy with surgical cavity, gliotic change and hemosiderin deposits at left frontobasal region.

 No gross residual or recurrent tumor is seen at surgical bed, please clinical correlate

 A few T2-hyperintense subcortical foci at bilateral fronto-parietal areas that are compatible with non-specific white matter change is unchanged.

 A small T2 and FLAIR-hyperintense area at left periventricular area that is compatible with old lacunar infarction is unchanged.

 The rest of brain parenchyma shows no enhancing mass.

 Ventricular system is not dilated.

 No shifting of midline structure is noted.

 No restricted diffusion is noted.

 Cerebellar, brainstem and pituitary gland are unremarkable. Posterior bright spot of pituitary gland is noted.

 Mucosal thickening of left ethmoid and both maxillary sinuses are seen.

 Orbits, the rest of PNSs and mastoid antrums are unremarkable.

 Evidence of right C4 hemilaminectomy with tumor removal and surgical material causing artifact at C4.

 No changed adhesion fibrosis of spinal cord C3-4 level to the right-sided thecal sac without spinal cord compression, suspected post surgical change. No residual or recurrent tumor is seen.

 Cervical spine shows normal lordotic curve. Minimal rightward curvature of cervical spine is seen.

 Decreased C5 vertebral height is noted.

 Fatty bone marrow signal is noted.

 Loss of water signal along cervical discs is compatible with disc desiccation.

 Spinal cord shows no abnormal signal intensity.

 No intradural extramedullary lesion is seen. No leptomeningeal enhancement.

 Posterior disc/osteophyte complex bulging along cervical levels, more prominent at C3-4 and C4-5 level causing mild spinal canal stenosis of C4-5 without spinal cord compression. No neural foramen stenosis. Annular fissure at C3-4 and C4-5.

 No central canal and neural foramen stenosis along the rest of cervical spines.

 Thoracic and lumbar spondylosis without spinal cord compression.

 No abnormal enhancing lesion, fracture, or dislocation is seen.

 TL spinal cord shows no abnormal signal intensity.

 Loss of water signal along TL discs is compatible with disc desiccation.

 Mild decreased T6 vertebral height is noted.

 Fatty bone marrow signal is noted.

 Conus medullaris terminates at L1/2 level.

 Posterior disc bulging along L spine, prominent at L4-L5 level causing spinal canal stenosis.

 A 1.5x1.9 cm of enhancing thyroid nodule at left lobe thyroid gland.`,impression:`- No change of gliotic and post surgical change at left fronto-basal area showing surgical cavity with volume loss. No gross residual or recurrent tumor is seen at surgical bed.

- Old lacunar infarction at left periventricular area.

- S/P right C4 hemilaminectomy with surgical material causing artifact at C4.

- No changed adhesion fibrosis of spinal cord C3-4 level to the right-sided thecal sac without spinal cord compression, suspected post surgical change. No residual or recurrent tumor is seen.

- Posterior disc/osteophyte complex bulging along cervical levels, more prominent at C3-4 and C4-5 level causing mild spinal canal stenosis of C4-5 without spinal cord compression.

- CTL spondylosis as described.

- A 1.5x1.9 cm of enhancing thyroid nodule at left lobe thyroid gland.`},"MRI of Thoracic Spine":{history:``,technique:`MRI of thoracic spine

 Axial : T1W, T2W, T1W/GD/FS

 Sagittal : T1W, T2W, STIR, T1W/GD/FS

 Coronal : STIR, T1W/GD/FS

COMPARATIVE STUDY: None.`,comparison:``,findings:`The study reveals decreased Thoracic kyphotic curve. No scoliosis.

 Decreased anterior vertebral height about 34% with posterior bulging of epidural space at T5 spine, suggestive of compression fracture.

 Abnormal marrow replacing lesions, showing low signal intensity (SI) on T1W, high SI on STIR and heterogeneous enhancement involving T5 vertebral body, both lamina and both pedicle of T5 level, left lamina and pedicle of T4 level. All of these findings suggest bone metastases.

 Enhancing extraosseous soft tissue formation at T5 vertebral body, extending posteriorly to epidural space and superiorly to T4 left epidural space with obliterate left neural foramen of T5, suspected left T5 nerve root compression.

 Also noted, the soft tissue formation compresses the posterior aspect of T5 spinal cord, causing hyperSI on T2W with enhancement of spinal cord at T5 level, suggestive of compressive myelopathy.

 The remaining spinal cord shows normal size and signal intensity. The conus ends normally at L2 level.

 Disc desiccation along the thoracic spine is noted.

 No spinal canal stenosis or neural foraminal narrowing of thoracic spine is seen.

 The paravertebral muscles and both SI joints are unremarkable.

Screening whole spine:

- No L-spine fracture. Loss of cervical and lumbar lordosis. No central spinal canal stenosis or cord compression along L spine level.

- Disc desiccation associated with end plate degenerative change at L5/S1 level

- Posterior disc bulging without spinal canal stenosis along L spine.`,impression:`- Compression fracture at T5 spine.

- Bone metastases involving T5 vertebral body, both lamina and both pedicle of T5 level, left lamina and pedicle of T4 level.

- Enhancing extraosseous soft tissue formation at T5 vertebral body, extending posteriorly to epidural space and superiorly to T4 left epidural space with obliterate left neural foramen of T5, suspected left T5 nerve root compression.

- Compressive myelopathy at T5 level.`},"MRI of Thoracic Spine (with Screening Whole Spine)":{history:``,technique:`MRI of thoracic spine

 Axial : T1W, T2W, T1W/GD/FS

 Sagittal : T1W, T2W, STIR, T1W/GD/FS, DWI, ADC

 Coronal : STIR, T1W/GD/FS

COMPARATIVE STUDY: None.`,comparison:``,findings:`The study reveals normal Thoracic kyphotic curve.

 No spondylolisthesis, scoliosis, fracture, or dislocation.

 The bone marrow signal intensity appears unremarkable with age. Sacralization is noted.

 Two focal enhancing lesions shown as hyperSI on T2W, and STIR with corduroy appearance at T9 and T11 vertebral body are seen, size up to 2.2x1.7 cm at T12 level, possibly vertebral hemangiomas.

 There are intramedullary hyperSI foci on T2W of the mid posterior spinal cord at lower T2-T3 level, posterior left lateral spinal cord at T4 level, and right anterolateral at T9 level without enhancement. These lesions are only seen in axial view which cannot exclude demyelination. Please correlate with clinical and laboratory. Follow up imaging is recommended.

 No spinal leptomeningeal enhancement.

 No focal restricted diffusion in visualized spinal cord to indicate acute infarction.

 The remaining spinal cord shows normal size and signal intensity. The conus ends normally at lower L1 level.

 Disc desiccation along the thoracic spine is noted.

 Mild posterior disc bulge at T5/6, T6/7, and T7/8. Left lateroposterior disc bulge at T5/6 level causing mild central canal stenosis. No other spinal canal stenosis or neural foraminal narrowing of thoracic spine is seen.

 The rest of the spinal canal shows no stenosis or neural foraminal narrowing of thoracic spine. No extramedullary compression is noted.

 The paravertebral muscles and both SI joints are unremarkable.

Screening whole spine:

- Loss of cervical lordosis with normal lumbar lordosis curvature. No central spinal canal stenosis or cord compression along L spine level.

- Disc desiccation along C and L level.

- Posterior disc bulging at C3/4, C5/6, and C 6/7 with mild central canal stenosis at C5/6 level.

- Posterior disc bulging at L3/4, and L4/5 without spinal canal stenosis at L4/5 level.

- No abnormal intrinsic cord SI.

- A focal enhancing lesion with hyperSI on T2W at L3 vertebral body, possibly another vertebral hemangiomas.

- Two CSF-filled dilatations of the posterior nerve root sheath at sacrum, size up to 0.9 cm, suggestive of perineural cysts.

- The visualized brain is unremarkable.`,impression:`- Intramedullary hyperSI foci on T2W of the mid posterior spinal cord at lower T2-T3 level, posterior left lateral spinal cord at T4 level, and right anterolateral at T9 level without enhancement. These lesions are only seen in axial view which cannot exclude demyelination. Please correlate with clinical and laboratory. Follow up imaging is recommended.

- No evidence of acute spinal cord infarction.

- No extramedullary compression is noted.

- Degenerative changes of spines.

- Vertebral hemangiomas at T9, T11, and L3 levels.

- Two perineural cysts at sacrum.

TL spine`},"MRI of T-L Spine (with Screening Whole Spine)":{history:``,technique:`MRI TL spine and screening whole spine were performed in standard protocol with Gadolinium.`,comparison:`Outside MRI of TL spine .`,findings:`- Post laminectomy and corpectomy at T12 vertebral body with posterior spinal fixation at T9-L2 levels.

- Fat marrow SI at T10-L2 vertebral bodies, suggestive of post radiation changes.

- Normal thoracic kyphotic and lumbar lordotic curvature of thoracolumbar spine.

- No spondylolisthesis, scoliosis, fracture, or dislocation.

- No significant change in size of enhancing intradural mass at surgical bed of L1 level, measured 1.6x2.0 cm (prior 1.5x2.2 cm) with enhancing extraosseous soft tissue formation and epidural extension at left paravertebral region of T12-L2 level, measure 4.9x6.2 cm (prior 3.5x5.6 cm).

- Fatty infiltration with atrophic change of left erector spinae muscle, suggestive of chronic denervation.

- Limitation to evaluate disc and spinal cord SI at T9-L2 level due to metallic artifacts.

- No other abnormal signal intensity or enhancement along thoracolumbar spine and spinal cord.

- Normal water disc signal intensity (SI) with preserved disc height at other disc levels.

- Posterior disc bulging at L4/L5 level. No spinal canal or neural foramen stenosis along thoracolumbar spine.

- Evidence of surgical tract, showing hypo SI on T1W and T2W with enhancement at soft tissue of mid posterior back of T11-L2 level. Soft tissue thickening with dural thickening along the surgical bed is also noted. All of these findings suggest post-treatment changed.

SCREENING WHOLE SPINE:

- Enhancing extraosseous soft tissue formation at left perivertebral region of C7, measure 5.4x4.7 cm, with epidural extension to lower C6 and upper T1, and obliteration of both neural foramen of C7 and left neural foramen of T1 level with considering left C8 nerve root compression.

 Mild central canal compression causing faint hyper SI of spinal cord on T2W, suggestive of compressive myelopathy.

 All of these findings suggest metastasis foci

- Bilateral sacroiliac joints are unremarkable.

- An enhancing lung nodule at right upper lobe, measured 1.4x1.6 cm.

- Minimal bilateral pleural effusions are noted.`,impression:`- Post laminectomy and corpectomy at T12 vertebral body with posterior spinal fixation at T9-L2 levels. Post-treatment changed at surgical bed as described.

- Unchanged residual enhancing intradural mass at surgical bed of L1 level, measured 1.6x2.0 cm (prior 1.5x2.2 cm) with enhancing extraosseous soft tissue formation and epidural extension at left paravertebral region of T12-L2 level, measure 4.9x6.2 cm (prior 3.5x5.6 cm). Chronic denervation of left erector spinae muscle.

- Still seen spinal metastasis at left perivertebral region of C7 with epidural and neural foraminal extension with compressive myelopathy of C7 and considering left C8 nerve root compression.

- Limitation to evaluate disc and spinal cord SI at T9-L2 level due to metallic artifacts.

- Mild lumbar spondylosis.

- An enhancing lung nodule at right upper lobe, measured 1.4x1.6 cm.

- Minimal bilateral pleural effusions are noted.`},"MRI of L-S Spine":{history:``,technique:`The MRI of LS spine was performed by

 Sagittal: T1wi, T2wi, STIR

 Axial: T1wi, T2wi

 Coronal: STIR

 Additional MR myelogram was also obtained.`,comparison:`None.`,findings:`The study reveals decreased lumbar lordotic curve without scoliosis.

 Grade 1 anterolisthesis of L5 over S1 is seen.

 Decreased anterior height of L4 vertebral body, suggestive of compression fracture.

 Decreased disc water signal intensity along L-spine with narrowing disc space could be disc degeneration.

 Degenerative endplate change of L3 levels is noted, Modic II. Vertebral marrow signal intensity appears unremarkable.

 Schmorl node at superior and inferior endplate of L4 with adjacent marrow edema.

 No gross enhancing lesion to suggest spinal metastasis.

 L1-2, No significant spinal canal stenosis or nerve root compression is noted. Both neural foramen are unremarkable.

 L2-3, Lateral disc bulging with bilateral facet joint hypertrophy and thickening of ligamentum flavum, causing narrowing of left lateral recess which considering left L3 traversing nerve root compression and narrowing of left neural foramen which considering left L2 exiting nerve root compression. No significant spinal canal stenosis or right nerve root compression is noted. Right neural foramen and right lateral recess are unremarkable.

 L3-4, Lateral disc bulging. Bilateral facet joint hypertrophy and thickening of ligamentum flavum are noted, causing narrowing of right lateral recess which considering left L4 traversing nerve root compression. Mild narrowing of left neural foramen which considering left L3 exiting nerve root compression.

 No significant spinal canal stenosis or narrowing of right neural foramen and left lateral recess are observed.

 L4-5, Posterior disc bulging, bilateral facet joint hypertrophy and thickening of ligamentum flavum are noted, causing and severe narrowing of spinal canal, bilateral lateral recess, and bilateral neural foramen which considering both L5 traversing nerve root and both L4 exiting nerve root compression.

 L5-S1, Posterior disc bulging, bilateral facet joint hypertrophy and thickening of ligamentum flavum are noted, causing mild narrowing spinal canal. Narrowing of right lateral recess which considering right S1 traversing nerve root compression. Narrowing of both neural foramen which considering both L5 exiting nerve root compression.

 Conus medullaris is located at lower L1 level. Visualized conus medullaris appears unremarkable.

 Paravertebral muscles and both SI joints are unremarkable.`,impression:`Lumbar spondylosis with degenerative disc and multiple levels of nerve root compression as described.

- No gross enhancing lesion to suggest spinal metastasis.

- Grade 1 anterolisthesis of L5 over S1.

- Compression fracture of L4 vertebral body.

- Degenerative endplate change of L3 levels is noted, Modic II.

- Schmorl node at superior and inferior endplate of L4 with adjacent marrow edema.

Whole spine`},"MRI of L-S Spine (with Screening Whole Spine)":{history:``,technique:`The MRI of L-S spine were performed on sequences as follow:

 Axial : T1W, T2W. T1W/FS/Gd

 Coronal : STIR, T1W/FS/Gd

 Sagittal : T1W, T2W, STIR, T1W/FS/Gd

 MR myelography was also performed.

Screening whole spine was done as follow:

 Sagittal : T2W and T1W/FS/Gd`,comparison:`CT LS SPINE .`,findings:`The study reveals L2-L3 kyphosis with fusion vertebral body of T11-T12, T12-L1, L2-L3, and L4-L5.

 Fusion of spinous processes at T10-L1, L2-L3, L3-4 level.

 S2 deformity with fusion to S3 vertebral body.

 Sacral vertebral body dysgenesis at S4-5 with coccygeal agenesis.

 No compression fracture is noted.

 All of bone findings are correspond with prior CT TL spine.

 Normal water signal intensity along LS-spine with narrowing disc space of T10-L1, L2-3, and L4-5 levels.

 Widening vertebral disc space at L3-4 is detected.

 Normal cord SI with central cord dilatation at T10 to L3 level. Questionable central cord dilatation at T4 to T10 is also noted.

 Vertebral marrow signal intensity appears unremarkable.

 T12-L1, Fusion of both pedicle and lamina without significant spinal canal stenosis. Mild stenosis of right neural foramen, No left neural foramen.

 L1-2, No significant spinal canal stenosis or nerve root compression is noted. Both neural foramen are unremarkable.

 L2-3, Kyphosis with fusion of right pedicle and lamina. No significant spinal canal stenosis or nerve root compression is noted. Both neural foramen are unremarkable.

 L3-4, No significant spinal canal stenosis or nerve root compression is noted. Both neural foramen are unremarkable.

 L4-5, No significant spinal canal stenosis or nerve root compression is noted. Both neural foramen are unremarkable.

 L5-S1, No significant spinal canal stenosis or nerve root compression is noted. Both neural foramen are unremarkable.

 Low lying conus medullaris is located at L3 level.

 Cystic change of the filum terminale from the L3 to L5 levels, with continuity with fatty signal intensity of the filum terminale from the L5 to S2 levels, suggestive of a fatty filum terminale

 Thecal sac terminates at S2 level.

 No epidural or intradural mass is seen.

 Paravertebral muscles and both SI joints are unremarkable.

 Left renal agenesis is seen.

Screening of whole spine reveals decreased cervical lordosis and thoracic kyphosis.

 Normal water SI of CT disc. Narrowing disc space at C6-C7 and T1-T2 level

 No abnormal cord SI.

 No neural foramen stenosis of T spine.

 No abnormal marrow SI.

 Unremarkable visualized brain and spinal cord.`,impression:`- Low lying conus medullaris is located at L3 level

- Cystic change of the filum terminale from the L3 to L5 levels, with continuity with fatty filum terminale from the L5 to S2 levels.

- L2-L3 kyphosis with fusion vertebral body of T11-T12, T12-L1, L2-L3, and L4-L5. No left neural foramen of T12-L1.

- Fusion of spinous processes at T10-L1, L2-L3, L3-4 level.

- S2 deformity with fusion to S3 vertebral body.

- Sacral vertebral body dysgenesis at S4-5 with coccygeal agenesis.

- Narrowing disc space of T10-L1, L2-3, and L4-5 levels. Widening vertebral disc space at L3-4.

- Central cord dilatation at T10 to L3 level.

- No epidural or intradural mass`},"MRI of Brain & Whole Spine (With Contrast)":{history:``,technique:``,comparison:`MRI BRAIN AND SCREENING WHOLE SPINE WITH CONTRAST .`,findings:`S/P left craniotomy with tumor removal and surgical cavity with hemosiderin deposit in 4th ventricle and left temporal region is suggestive of post-surgical change.

- No change of nodular faint enhancement without restricted diffusion along left-sided anterior wall of 4th ventricle and at posterior wall of 4th ventricle, possibly post-treatment change or vascular structure. Less likely residual tumor. Follow imaging is recommended.

- No significant change in size of non-enhancing cystic portion without internal solid part at left cerebellar hemisphere, measured about 2.0x1.6x1.4 cm (prior was 1.8x1.8x1.4 cm).

- No enhancement or focal mass at hippocampal regions. No enhancing lesion at suprasellar and pituitary stalk.

- Evidence of left posterior parietal approach VP shunt with its tip in posterior horn of left lateral ventricle and gliotic change along VP shunt tract.

- No demonstrable newly abnormal enhancing lesion/mass or leptomeningeal enhancement.

- The rest of brain show normal signal intensities in grey and white matter.

- No dilatation of ventricular system.

- The pituitary gland is normal size, signal intensity and posterior bright spot.

- Mild mucoperiosteal thickening in both ethmoid and left sphenoid sinuses. Fluid with enhancement in bilateral mastoid air cells, suggestive of mastoiditis.

- Both orbits and the rest of PNS appeared unremarkable.

- The rest of bony calvarium appear intact.

- No longer seen epidural mass at anterior to thecal sac at T7-T8 level.

- No longer seen residual subarachnoid seeding of intradural mass posterior thecal sac at T10-T11 levels.

- No demonstrable abnormal high SI of spinal cord level to indicate spinal cord edema.

- Few dorsal root ganglions at sacral level.

- No leptomeningeal enhancement or new enhancing mass.

- Diffuse fatty signal marrow with fat suppression of spines, could be post-radiation change.

- Unremarkable signal intensity of the intervertebral discs.

- No abnormal mass at the visualized prevertebral and paravertebral area.`,impression:`- No change of nodular faint enhancement along left-sided anterior wall of 4th ventricle and at posterior wall of 4th ventricle, possibly post-treatment change or vascular structure. Less likely residual tumor. Follow imaging is recommended.

- No demonstrable newly abnormal enhancing mass or leptomeningeal enhancement in brain and spines

- S/P left craniotomy with tumor removal and surgical cavity with hemosiderin deposit in 4th ventricle and left temporal region is suggestive of post-surgical change.

- No significant change in size of non-enhancing cystic portion without internal solid part at left cerebellar hemisphere, measured about 2.0x1.6x1.4 cm.

- Evidence of left posterior parietal approach VP shunt with its tip in posterior horn of left lateral ventricle and gliotic change along VP shunt tract.

- Bilateral mastoiditis`},"MRI of Whole Spine":{history:``,technique:`The MRI of whole spine was performed by

 Sagittal: T1WI, T2WI, STIR

 Axial: T1WI, T2WI

 Coronal: STIR

 Additional MR myelogram was also obtained.

MRI whole spines are performed with these following pulse sequences:

Sagittal T1WSE/T2WSE/STIR of whole spines

Coronal T2WSE at C-T-L levels

Axial T1WSE/ T2WSE at C-T-L level

MR Myelography at C-T-L level

Comparison study: Previous CT whole abdomen on and MIBG .`,comparison:`CT T-spine`,findings:`The study reveals levoscoliosis of thoracic spine with Cobb's angle approximately 45 degree and apex of curvature at T8-9 level.

 Loss lordotic curvature of cervical and lumbar spine. Loss of thoracic kyphosis

 Decreased height and fusion of vertebral body and spinous process at T3-T10 levels, correspond with prior CT T-spine.

 Unfused T11 vertebral body is noted.

 The spinal cord SI is unremarked.

 No abnormal marrow and spinal cord SI. No intramedullary lesion.

 Abnormal alignment of T8-T11 spine which causes right-sided located spinal canal without spinal canal or neural foramens narrowing.

 No abnormal mass formation.

 Conus medullaris is located at lower L1-L2 level. Visualized conus medullaris appears unremarkable.

 Paravertebral muscles and both SI joints are unremarkable.

 The visualized brain appears unremarkable.

The study of whole spines reveals soft tissue mass at left paravertebral region along T9-T12 level, showing isoSI on T1W, slightly hyperSI on T2W, with enhancement, measured 1.9x4.3x4.9 cm, suggestive of recurrent tumor.

 The lesion extends to left neural foramen of T11 level without pressure effect to spinal canal and left neural foramen. Epidural space is preserved.

-Spinal curvature:

Normal lordotic curvature of cervical and lumbar spine. Normal thoracic kyphosis.

-Spinal column:

C-T-L spine: C-T-L-S Vertebrae are in normal height. There is fat signal intensity at T9-L1 spines, corresponding with history of post radiation change. No demonstrable fracture nor spondylolisthesis.

Intervertebral discs:

C- spine: Normal hypersignal intensity T2W of nucleus pulposus in all cervical levels from C2-3 to C7-T1 discs.

T- spine: Normal signal T2W of nucleus pulposus in all thoracic discs.

L- spine: Normal signal T2W at lumbar disc signal at L1-2, L2-3, L3-4, L4-5 and L5-S1 levels.

-Spinal canal & spinal cord:

 The study of spinal canal and spinal cord from cervical-thoracic and thoracolumbar-conus medullaris shows normal size and signal intensity of whole spinal cord.

 The distal end of spinal cord at conus medullaris at level L1. No evidence of extradural cord compression. No evidence of space occupying lesions in cord. No congenital anomaly of cord.`,impression:`- Levoscoliosis of thoracic spine with Cobb's angle approximately 45 degree and apex of curvature at T8-9 level.

- Decreased height and fusion of vertebral body and spinous process at T3-T10 levels, correspond with prior CT T-spine.

- Unfused T11 vertebral body.

- No abnormal spinal cord SI. No intramedullary lesion.

MRI whole spines

- Enhancing soft tissue mass at left paravertebral region along T9-T12 level, measured 1.9x4.3x4.9 cm, suggestive of recurrent tumor.

- The lesion extends to left neural foramen of T11 level without pressure effect to spinal canal and left neural foramen.

- Fat signal intensity at T9-L1 spines, corresponding with history of post radiation change.

- No demonstrable spinal cord lesion.

- Unremarkable spinal canal and neural foramen.`},"MRI of Brain & Whole Spine":{history:``,technique:`The MRI of brain was performed by :

 Axial : T1W/3D, T2W, SWI, DWI/ADC, T1W/FS/GD/VISTA/3D

 Coronal: T2W

 Sagittal: T1W/3D, T2W/FLAIR/3D, T1W/GD/FS/3D`,comparison:`MRI brain on MRI brain with screening whole spine .`,findings:`The study reveals evidence of suboccipital craniotomy.

 Unchanged surgical cavity and gliotic change at mid part of cerebellar hemisphere and vermis.

 Overall unchanged multiple heterogeneous high signal intensity (SI) lesions on T1W and low SI on T2W with at superior aspect of surgical bed is suggestive of post-operative change with blood product.

 Unchanged thickening along bilateral tentorium cerebelli, more prominent on the right side.

 Unchanged of enhancing linear lesion within the surgical bed. No other nodular enhancement or enhancing mass at surgical bed.

 All of these findings are suggestive from post-operative changes.

 No significant change of gliotic change along previously inserted right frontal approached VP shunt.

 No new enhancing lesion at the surgical bed or remaining brain parenchyma. No definite leptomeningeal enhancement.

 No extra-axial fluid collection.

 Unchanged multiple foci of high SI on T2W/FLAIR at subcortical white matter of bilateral frontoparietal regions is suggestive of white matter change.

 Microbleeds at right cerebellum, periventricular white matter of right temporal and right parietal region

 Cavum septum pellucidum. No significant change in degree of communicating hydrocephalus with Evan's index of 0.33 (prior was 0.34).

 No low lying cerebellar tonsil or ascending transtentorial herniation is demonstrated. No shifting of midline structure is seen.

 No abnormal restricted diffusion lesion.

 A compared to age, relatively prominent sulci and gyri at both cerebral hemisphere as well as cerebellar folia, suspected generalized brain atrophy.

 The pituitary gland has normal size and normal posterior bright spot.

 Mucoperiosteal thickening at left maxillary, both ethmoid, both sphenoid, and left frontal sinuses.

 Fluid fill in bilateral mastoid air cells is noted.

 Both orbits and the rest of the PNSs are unremarkable.

 The bony calvarium shows normal signal intensity.`,impression:`- Evidence of suboccipital craniotomy and post-operative change as described above.

- No evidence of gross recurrent/residual tumor at the surgical bed.

- No evidence of leptomeningeal or calvarial metastasis.

- No significant change in degree of communicating hydrocephalus, Evan's index of 0.33.

- Suspected generalized atrophy.`}},brain:{"MRI of Brain":{history:``,technique:``,comparison:`MRI brain with tumor protocol .`,findings:`- Evidence of craniotomy defects at left frontal, parietal, and temporal bones with underneath mild smooth dural thickening along left cerebral convexity with some hemosiderin deposit. Unchanged fluid filled surgical cavity at left anterior to inferior temporal lobe including left hippocampus with ex-vacuo dilatation of temporal horn of left lateral ventricle. These are suggestive of post-operative change.

- No significant change in the area of non-enhancing T2/FLAIR lesion with sulcal effacement involving left insular lobe, left temporal stem and left temporal lobe including anterior aspect of surgical bed. MRS shows tumor spectrum (increased Cho, decreased NAA) without increased CBV. These are suggestive of stable infiltrative tumor.

- No interval change area of few small nodular enhancing lesions with mild restricted diffusion at left temporal operculum. MRS at left temporal lobe shows tumor spectrum (increased Cho and decreased NAA) without increased CBV. These findings are stable residual tumor.

- No significant change of other non-enhaning T2/FLAIR lesion at right frontoparietal white matter, centrum semiovale, periventricular region of right fronto-temporo-occipital lobe, likely white matter ischemia.

- No definite new enhancing lesion, leptomeningeal enhancement, or subependymal seeding.

- Right hippocampus shows no significant atrophy and abnormal increased T2W signal intensity (SI) to suggest evidence of mesial temporal sclerosis. Symmetrical in size of bilateral fornices and mammillary bodies.

- No significant change of small old hemorrhage at left cerebellar hemisphere and several microbleeds at left cerebellar hemisphere, left sided pons, left frontoparietal lobes, and posterior body of right corpus callosum could related from post-treatment change.

- Unchanged small DVA at left frontal lobe.

- No acute or interval infarction, new intracranial hemorrhage, or extraaxial collection. No abnormal restricted diffusion.

- No shifting of midline structure or other type of brain herniation.

- The rest of ventricular system is not dilated.

- Cerebral venous system is unremarkable.

- Normal height of pituitary gland with preserved posterior bright spot.

- As correlate as previous CT, there is metallic foci at right cheek causes metallic artifact resulting in limitation to evaluate right maxillary sinus and right orbit.

- Fluid in left mastoid air cells.

- Mild mucosal thickening at right maxillary sinus. Left orbit, the rest of visualized PNSs, and right mastoid regions are unremarkable.`,impression:`- Overall stable infiltrative tumor involving left insular lobe, left temporal stem and left temporal lobe. Stable residual tumor at left temporal operculum.

- No definite new enhancing lesion, leptomeningeal enhancement, or subependymal seeding.

- Likely white matter ischemia at right frontoparietal white matter, centrum semiovale, periventricular region of right fronto-temporo-occipital lobe

- S/P left frontoparietotemporal craniotomy with underneath surgical cavity at left anterior to inferior temporal lobe including left hippocampus.

- No significant change of small old hemorrhage at left cerebellar hemisphere and several microbleeds could be related from post-treatment change.

- Unchanged small DVA at left frontal lobe.

Dementia`},"MRI of Brain (Epilepsy Protocol)":{history:``,technique:`The MR of brain were performed in:

 Axial: T1W, T2W, T2W/FLAIR, T2W/FFE, DWI, ADC

 Sagittal: T1W/3D, T2W

 Coronal: T2W, T2/FLAIR, T1W/IR

MRI brain were performed by

 - Axial: T1W, T2W, MPR_T2W/FLAIR, DWI/ADC, SWI, MPR_T1W/Gd, VISTA_T1W/FS/Gd

 - Coronal: T2W, MPR_T1W/Gd

 - Sagittal: 3D_T1W, 3D_T2W/FLAIR, 3D_T1W/Gd/TFE

 MRI of orbits are also performed by

 - Axial: T1W/DIXON, T2W/DIXON, DWI/ADC/eADC, T1W/FS/Gd

 - Coronal: T1W/FS, T2W/FS, T1W/FS/Gd

COMPARSION: Sedative MRI of brain and orbits`,comparison:`CT BRAIN NC .`,findings:`The study reveals hyperSI on T2W/FLAIR at subcortical areas of bilateral frontal, parietal, occipital, and posterior temporal regions, representing white matter vasogenic edema.

 Cortical restricted diffusion with multiple punctate cortical enhancement at bilateral frontal, parietal, occipital, and posterior temporal regions and diffuse pachymeningitis.

 Few isoSI on T1W, hypoSI on T2W with blooming artifacts on SWI lesions at right parietooccipital region, suggestive of acute intraparenchymal hemorrhagic, size up to 1.3x1.8 cm.

 Multiple microbleeding on SWI at bilateral frontal, parietal, occipital, and posterior temporal regions.

 All of these findings could be posterior reversible encephalopathy syndrome (PRES) DDx encephalitis.

 There is no dilatation of ventricular system, brain herniation or shifting of midline structure.

 The brain stem and cerebellum appear unremarkable.

 Pituitary gland and posterior bright spot are unremarkable.

 Minimal effusion in both mastoid air cells is seen.

 PNSs and both orbits appear unremarkable.

 Bony calvarium show normal signal intensity.

 Evidence of nasopharyngeal tube insertion via left nasal cavity.

The study reveals no significant change in size of diffuse fusiform enlargement at intraorbital part of bilateral optic nerves more prominent at the right side, showing iso signal intensity (SI) on T1W and T2W. Minimal enhancement of right intraorbital optic nerve. Still seen high SI on T2W at intraorbital part of right optic nerve is detected.No restricted diffusion is noted. These findings are compatible with bilateral optic nerve gliomas.

 No bilateral proptosis is noted.

 Lens and eyeballs are unremarkable, bilaterally.

 No evidence of intraocular mass, vitreous lesion is noted.

 Bilateral EOMs show normal size and course.

 Both lacrimal glands are unremarkable.

 There is no significant change in size and extension of multiple ill-defined lesions with hyper SI on T2W/FLAIR without enhancement or pressure effect at bilateral globus pallidus, bilateral thalami, bilateral pons, bilateral cerebral peduncles, bilateral middle cerebellar peduncles, dentate nuclei and medulla oblongata are suggestive of focal areas of signal intensity (FASI).

 Still seen decreased undulating left hippocampus with mild increased SI in T2W of left hippocampus.

 The rest of brain parenchyma shows no focal mass, microbleeds, or restricted diffusion.

 No dilatation of ventricular system, brain herniation, nor shifting of midline structure.

 No extra-axial fluid collection is noted.

 Adenoid hypertrophy is still detected.

 Mucoperiosteal thickening at bilateral maxillary and sphenoid sinuses are seen.

 The rest of visualized PNS and both mastoid air cells are unremarkable.

 Bony calvarium shows normal SI.`,impression:`- White matter vasogenic edema at bilateral frontal, parietal, occipital, and posterior temporal regions with multiple punctate cortical enhancement and multiple microbleeding. Also noted, acute IPH at right parietooccipital region.

 All of these findings could be posterior reversible encephalopathy syndrome (PRES) DDx encephalitis.

Orbit

- No significant change in size of bilateral optic nerve gliomas.

- No significant change in size and extension of focal areas of signal intensity (FASI) without enhancement or pressure effect at at bilateral globus pallidus, bilateral thalami, bilateral pons, bilateral cerebral peduncles, bilateral middle cerebellar peduncles, dentate nuclei and medulla oblongata. Interval follow up is suggested.

- Still seen decreased undulating left hippocampus with mild increased SI in T2W of left hippocampus.`},"MRI of Brain (Base of Skull Protocol)":{history:``,technique:`The MRI skull base was performed
 Axial: T1W, T2W/FS, Heavily T2W, DWI/ADC, T1W/FS/Gd

 Coronal: T1W/FS, T2W, T2W/FS, T1W/FS/Gd

 Screening whole brain was done by axial T2W, axial T2W/FLAIR, and axial T1W/Gd/3D.`,comparison:`MRI skull base .`,findings:`The study reveals evidence of left temporal craniectomy and canal wall of left mastoidectomy with gliotic/encephalomalacic change of left cerebellar hemisphere, left temporal lobe, left middle cerebellar peduncle and distorsion of right pons with ex vacuole dilatation of fourth ventricle and temporal horn of left lateral ventricle.

 Diffuse dural thickening along left cerebral convexity, suggestive of post-treatment change.

 Evidence of CSF draining tube inserted from left occipital region and its tip is located nearby cystic encephalomalacic change of left cerebellar peduncle.

 No significant change in size of enhancing extra-axial mass; showing T1 and T2 isointensity, involving

 # Left cavernous sinus with encasement from cavernous part to left ICA terminus with mild to moderate narrowing cavernous ICA as well as abutting right cavernous ICA, preserved normal flow void.

 #Anterior extension to narrowing left optic canal and left SOF and orbital apex with associated left optic neuropathy; intraorbital, and intracanalicular parts. As well as pressure effect to superior displacement of left prechiasmatic part and side optic chiasm.

 # Posteriorly extension along left tentorial cerebelli. Diffuse dural thickening at left tentorium cerebelli

 # Sellar turcica and extending to suprasellar region and right deviation of pituitary stalk. Pituitary gland cannot be identified.

 # Intraosseous involvement at left petrous apex, clivus bones,abutting left jugular foramen and extending to left prepontine region causing pressure effect to left pons and encasement of BA without significant stenosis, as well as posterior wall of left sphenoid sinus, and left foramen ovale extending to left masticator space with denervation of left masticator muscle.

 # Involving left Dorello canal and left Meckel's cave as well as involving left porus acusticus and dural thickening extending to left IAC, causing pressure effect on left cranial nerve 3, 5, 6 and 7-8 complex. Normal water SI of left inner apparatus.

 All of these findings are suggestive of stable size of residual meningioma, measured up to 4.4x2.8x2.6 cm (prior 4.4x2.8x2.6 cm) of left cavernous sinus with multiple adjacent organ involvement as described above.

 A few punctate non-specific white matter changes at bilateral frontal white matter.

 Mild diffuse cortical and cerebellar atrophy proportionate to degree of ventricular system dilatation

 No midline shifting, leptomeningeal enhancement or pathological filling defect of the rest of venous sinus.

 Retention cysts at right maxillary sinus and mild mucoperiosteal thickening at both ethmoid sinuses. Effusion at left mastoid air cells.

 The rest of orbits, the rest of PNS and right mastoid air cells are unremarkable.`,impression:`- Evidence of left temporal craniectomy and canal wall of left mastoidectomy with post-treatment change as described above.

- Stable size and extension of residual left cavernous meningioma as described above.

- Mild degree of non-specific white matter change`},"MRI of Pituitary":{history:``,technique:`MRI of brain was done in

 Axial : T1W, T2W, FLAIR, SWI, DWI/ADC and T1W/Gd_3D

 Coronal: T2W, T1W/Gd

 Sagittal: T1W, T1W/Gd

 Thin slice coronal and sagittal T1W, T1W/Gd/FS, T2W/FS with coronal dynamic T1W contrast enhancement and T2_CISS at pituitary gland

COMPARISON STUDY: MRI of pituitary gland .`,comparison:``,findings:`The study demonstrates slightly increased size of heterogeneous enhancing sella-suprasellar mass, measuring 2.3x1.7x2.1 cm (prior was 2.2x1.7x2.0 cm in horizontal x AP x Height dimension).

 The mass abut left cavernous sinus (Grade 0 according to Knosp’s classification) and invade right cavernous sinus (Grade 3 according to Knosp’s classification). No significant luminal narrowing of the cavernous ICA is seen.

 Superior extension of the mass abuts prechiasmatic part of right optic nerve and mild superior bowing of optic chiasm without abnormal SI of right optic nerve.

 No sphenoid sinuses invasion is seen.

 Cannot identify pituitary stalk with suspected the normal pituitary gland at left inferior aspect of the mass with posterior pituitary bright spot.

 No significant change of old infarct left superior frontal lobe and left occipital lobe.

 Old lacunar infarct in bilateral basal ganglia, involving to right frontal periventricular region, at left postcentral gyrus, left temporal, and bilateral cerebellar hemispheres.

 Generalized cerebral atrophy, appropriate to degree of ventricular dilatation is seen.

 No pathologic enhancement within the brain parenchyma.

 No acute intraparenchymal hemorrhage or extra-axial fluid collection.

 There is no midline shift or mass effect. The ventricles are normal in size. Basal cisterns are patented.

 The flow void within the visualized major intracranial vessels is preserved.

 Minimal mucoperiosteal thickening in right ethmoid and both maxillary sinuses are shown. The rest of the visualized paranasal sinuses and mastoid air cells are clear. Orbits are unremarkable.`,impression:`1. Slightly increased size of a pituitary macroadenoma with right cavernous sinus invasion (Grade 3 according to Knosp’s classification) with out luminal narrowing of the cavernous ICA, measuring 2.3x1.7x2.1 cm, causing

 - Leftward displacement of the normal pituitary gland at stalk

 - Pressure effect to optic chiasm and abutting prechiasmatic part of right optic nerve without evidence of optic neuropathy

3. No change of

 - Old infarction left superior frontal lobe and left occipital lobe.

 - Old lacunar infarction and hemorrhagic lacunar infarction at bilateral basal ganglia, involving to right frontal periventricular region, at left postcentral gyrus, left temporal, and bilateral cerebellar hemispheres.

3. Generalized cerebral atrophy, appropriate to degree of ventricular dilatation.

CT

brain NC`},"MRI of Brain (With Contrast)":{history:``,technique:`The MRI of brain was performed by

 Axial: T1wi, T2wi, FLAIR, Dwi/ADC map, Swi, T1wi/Gd

 Coronal: T2wi, T1wi/Gd

 Sagittal: T1wi, T1wi/Gd`,comparison:`MRI BRAIN WITH GD .`,findings:`- No significant change of multiple subependymal nodules in bilateral lateral ventricles with blooming artifacts. Few nodules in frontal horn of bilateral lateral ventricles (near foramen of Monro) showing enhancement, measuring 0.8x0.6, 0.3x0.4 cm and 0.9x0.6 cm, on the left and right side, respectively.

- S/P right frontal craniotomy defects with encephalomalacic right frontal shunt tract and genu of corpus callosum with ex-vacuo dilatation of right lateral ventricle, gliosis along frontal and gliosis at anterior corpus callosum.

- Overall no change of multiple areas of high T2/FLAIR involving cortical and subcortical white matter with burring of gray-white junction scattering in bilateral cerebral hemispheres with associated radial band at bilateral frontal regions, suggested cortical and subcortical tuber.

- No change of few CSF SI lesions at right parietal white matter are suspicious for dilated perivascular spaces.

- No change of DVA at left cerebellum

- Mild asymmetrical dilatation of right lateral ventricle is observed.

- The pituitary gland shows normal posterior bright spot.

- No brain herniation.

- The rest of posterior fossa appears normal.

- Both orbits, the PNS, and the rest of bony calvarium show normal SI.`,impression:`- No significant change of multiple subependymal nodules in bilateral lateral ventricles, few of which in frontal horn of bilateral lateral ventricles (near foramen of Monro) show enhancement, measuring 0.8x0.6, 0.3x0.4 cm and 0.9x0.6 cm, on the left and right side, respectively.

- No change of multiple areas of cortical and subcortical tuber in bilateral cerebral hemispheres.

- No change of few dilated perivascular spaces at right parietal white matter

- Post right frontal craniotomy with encephalomalacic change at right frontal lobe and genu of corpus callosum.

- No change of DVA at left cerebellum`},"MRI of Brain & Pituitary":{history:``,technique:`The MRI of brain was performed by

 Axial: T1wi, T2wi, FLAIR, Dwi/ADC map, Swi, T1wi/Gd

 Coronal: T2wi, T1wi/Gd

 Sagittal: T1wi, T1wi/Gd

The MRI of pituitary gland was performed, sequences as following;

 Axial T2W, T2W/FLAIR, T1W/Gd/FS

 Sagittal T1W, T1W/Gd/FS

 Coronal T1W, T2W, T1W/Gd/FS, high-resolution T2 3D ISO

 Dynamic phases of contrast medium, scanned at pituitary fossa were also obtained.

COMPARATIVE STUDY: CT PNS .`,comparison:``,findings:`The study revealed loss of posterior pituitary bright spot with thickening of pituitary stalk.

 There is hyposignal intensity(SI) on T1W with relatively less enhancement than normal pituitary gland in posterior pituitary gland, suspicious infundibulum and pituitary metastasis.

 The pituitary stalk is in midline.

 No mass effect on the optic chiasm and prechiasmatic optic nerves is detected.

 Cavernous sinus is not involved.

 New pachymeningeal and leptomeningeal enhancement at right fronto-parieto-temporal region and left temporal region, suggestive of meningeal metastasis.

 There is hypoSI on T1W, hyperSI on T2W at cortical and subcortical area of right frontal lobe with hemorrhagic component and adjacent brain edema, suggestive of brain metastasis with pressure effect to frontal horn of right lateral ventricle.

 Subfalcine herniation to the left. Impending right uncal herniation.

 Multiple small foci of high SI on T2W at bilateral basal ganglia are compatible with dilated perivascular space.

 No intra-axial hemorrhage or extra-axial collection is detected.

 Evidence of right uncinectomy, right posterior ethmoidectomy, right sphenoidectomy, right middle turbinectomy.

 The ventricles are not dilated.

 Mucoperiosteal thickening at both maxillary, both frontal, and left ethmoid sinuses and retention cyst at left maxillary sinus is seen.

 No longer seen mass at right nasal cavity. No new enhancing mass at surgical bed.

 Effusion at bilateral mastoid air cells

 Both orbits are unremarkable.

 Patchy area of hypoSI on T1W and T2W with enhancement scatter at bilateral fronto-parieto-temporo-occipital regions, suggestive of skull metastasis.`,impression:`- Suspicious infundibulum and pituitary metastasis.

 - New pachymeningeal and leptomeningeal metastasis at right fronto-parieto-temporal region and left temporal region.

 - Direct extension of tumor to brain parenchyma at right frontal lobe with pressure effect to frontal horn of right lateral ventricle. Subfalcine herniation to the left and impending right uncal herniation.

 - Patchy area of hypoSI on T1W and T2W with enhancement scatter at bilateral fronto-parieto-temporo-occipital regions, suggestive of skull metastasis.

 - Evidence of right uncinectomy, right posterior ethmoidectomy, right sphenoidectomy, right middle turbinectomy. No longer seen mass at right nasal cavity. No new enhancing mass at surgical bed.

 - Suspected mastoiditis with sinusitis.`},"MRI/MRA of Brain":{history:``,technique:``,comparison:`MRI AND MRA BRAIN (VESSEL WALL) .`,findings:`BRAIN:

- New restricted diffusion focus at right lentiform nucleus with hyperSI on T2W, measured 0.8 cm, suggestive of acute infarction.

- No intracranial hemorrhage, or extraaxial collection. No focal mass or leptomeningeal enhancement.

- No change of multiple old lacunar infarctions at both corona radiata extending to both lentiform nucleus, bilateral thalami, corpus callosum, midbrain, and pons.

- Multiple microbleeds at left parietal lobe, left temporal lobe, right temporo-occipital region, left caudate nucleus, bilateral putamens, bilateral thalami, pons, and right cerebellar hemisphere.

- No interval change of patchy confluent non-specific white matter at bilateral centrum semiovale, periventricular regions, and along external capsules.

- No shifting of midline structure or other type of brain herniation.

- The ventricular system is not dilated.

- Unchanged small DVA at right frontal lobe.

- Cerebral venous system appears unremarkable.

- Normal height of pituitary gland with preserved posterior bright spot.

- Evidence of lens extraction at both eye globes.

- The PNSs and both mastoid air cells are unremarkable.

- Bony calvarium appears unremarkable.

MRA AND VESSEL WALL:

#Anterior circulation.

- No vessel wall thickening or enhancement.

- No change of focal small out-pouching lesion at supraclinoid part of right ICA, pointing medially, sized about 5.2x2.3 mm, is suggestive of small aneurysm. No definite wall enhancement.

- Irregularity along M1 and M2 segments of left MCA with multifocal severe stenosis along inferior division of M2.

- Focal mild stenosis at distal M1 segment of right MCA

- Focal mild stenosis of origin of A1 segment of right ACA.

- The rest of both intracranial ICAs and ACAs are patent.

#Posterior circulation

- No interval changes of focal outpouching lesion at distal V4 segment of left VA, pointing anterolaterally, now measured about 2.0x3.5 mm, without wall enhancement could be small aneurysm.

- No interval changes of focal outpouching lesion at proximal BA, pointing laterally, now measured about 3.8x2.5 mm, with wall enhancement could be small aneurysm.

- The rest of vessel walls show no enhancing or wall thickening.

- Hypoplasia of right VA with right PICA termination.

- Focal severe stenosis at P1 segment with post-stenotic dilatation of right PCA.

- Irregularity along V4 of left VA and BA without significant stenosis.

- The rest of left PCA, and right VA are patent without significant stenosis.`,impression:`- No change of 5.2x2.3 mm aneurysm at supraclinoid part of right ICA without definite wall enhancement.

- No change of another aneurysm at distal V4 segment of left VA, about 2.0x3.5 mm without definite wall enhancement.

- No change of another aneurysm at proximal BA, about 3.8x2.5 mm with wall enhancement.

- Irregularity along M1 and M2 segments of left MCA with multifocal severe stenosis along inferior division of M2.

- Focal severe stenosis at P1 segment with post-stenotic dilatation of right PCA.

- New acute infarction at right lentiform nucleus, measured 0.8 cm.

- Multiple old lacunar infarctions at both corona radiata extending to both lentiform nucleus, bilateral thalami, corpus callosum, midbrain, and pons.

- Multiple microbleeds at left parietal lobe, left temporal lobe, right temporo-occipital region, left caudate nucleus, bilateral putamens, bilateral thalami, pons, and right cerebellar hemisphere.

- Non-specific white matter changes at bilateral centrum semiovale, periventricular regions, and along external capsules.

- Small DVA at right frontal lobe.`},"MRI of Brain (with PNS)":{history:``,technique:`The MRI of brain was performed by

 Axial : T1W, T2W, T2W/FLAIR, DWI/ADC, and VEN_BOLD, T1W/Gd

 Coronal : T2W, T2W_3D, and T2W/ORBIT/FS, T1W/Gd

 Sagittal : T1W, and T1W_3D, T1W/Gd

COMPARATIVE STUDY: MRI Brain .`,comparison:``,findings:`The study reveals absence of left olfactory bulb with preserved of both olfactory sulcus, suggestive of Kallmann syndrome.

 Right olfactory bulb is unremarkable.

 There is normal gray-white differentiation of the rest brain parenchyma without definite abnormal signal intensity or focal brain lesion. The pattern of myelination is also proportional with age.

 No enhancing lesion or leptomeningeal enhancement is seen.

 No evidence of sellar and suprasellar mass is detected.

 No visualized restricted diffusion lesion or microbleed is seen.

 The pituitary gland and posterior bright spot are normal.

 The ventricular system is not dilated.

 Corpus callosum, septum pellucidum and optic chiasm are intact.

 Both basal ganglia, and thalami are normal.

 No shifting of midline structures is seen.

 Midbrain, pons, and medulla are unremarkable.

 Effusion at left mastoid air cell is noted.

 Both orbits, PNS and mastoid air cells are normal.`,impression:`- Absence of left olfactory bulb, suggestive of Kallmann syndrome.

 - No evidence of sellar and suprasellar mass

 - Effusion at left mastoid air cell`},"MRI of Brain & Orbit":{history:``,technique:`#MRI Brain was performed in:

 Axial: T1W, T2W, T2W/FLAIR, DWI/ADC, T1W/GD, T1W/FS/GD

 Coronal: T1W, T2W

 Sagittal: T1W, T2W/FLAIR, T1W/GD

#MRI Orbit was performed in:

 Axial: T1W, T1W/FS, T2W/FS, T1W/FS/GD, T2W/3D/DRIVE, SWI, DWI/ADC

 Coronal: T2W/FS, T1W/FS/GD, T2W/3D/DRIVE`,comparison:`MRI Brain and orbit .`,findings:`- The study reveals no interval change of an intravitreal endophytic mass at inferolateral aspect of left globe (4-6 o'clock) which showed low signal intensity (SI) on T1W and T2W with susceptibility artifact which possibly coarse calcification. No definite enhancement within the lesion. All these findings are probably post-treated retinoblastoma.

- No significant change of small nodular thickening at left optic disc without definite enhancement, possibly post-treated previous tumor involvement.

- Relative small size of intraorbital, intracanaliculi and prechiasmatic part of left optic nerve with slightly high SI of intracanalicular part of left optic nerve, suspected left optic neuropathy. Please clinical correlation.

- Unremarkable right globe without enhancing mass. Right optic nerve appears unremarkable.

- Normal position and contour of bilateral lens.

- Neither vitreous hemorrhage nor retinal detachment.

- Bilateral extra-ocular muscles show normal size and course.

- Bilateral intraconal and extraconal fats appear unremarkable.

- Bilateral lacrimal glands are unremarkable.

- Bilateral superior ophthalmic veins (SOV) show no dilatation.

BRAIN PARENCHYMA:

- Midline structures, pituitary gland, stalk, and its posterior bright spot appear unremarkable. Neither sellar nor suprasellar mass.

- Unchanged 0.6-cm cystic lesion at anterior aspect of pineal gland with low T1 SI, high T2 SI and thin wall enhancement, likely pineal cyst.

- Myelination is compatible with age.

- No evidence of microbleed on SWI.

- The rest of brain parenchyma show normal grey-white differentiation without focal mass, acute infarction, intracranial hemorrhage, or extra-axial collection.

- Brainstem and cerebellar hemispheres appear unremarkable.

- No new enhancing mass or leptomeningeal enhancement.

- No ventricular system dilatation. No midline shifting or other types of brain herniation.

- Effusion of left mastoid air cells.

- PNSs and right mastoid air cells are unremarkable.`,impression:`- No significant change in size and character of an intraocular mass at at inferolateral aspect (4-6 o'clock) of left globe without definite enhancement, probably post-treated retinoblastoma with internal coarse calcification.

- No significant change of small nodular thickening at left optic disc without definite enhancement, possibly post-treated previous tumor involvement.

- No new intraocular mass.

- Unchanged relative small size of intraorbital, intracanaliculi and prechiasmatic part of left optic nerve with slightly high SI of intracanalicular part of left optic nerve, suspected left optic neuropathy. Please clinical correlation.

- Unchanged 0.6-cm cystic lesion at pineal gland.`},"MRI of Orbits":{history:``,technique:`MRI of PNS, orbits were done
- Axial T1WI, T1WI/FS, T2WI, T2WI/FS, DWI, ADC, T1WI/Gd/FS

- Coronal T1WI, T2WI/FS, T1WI/Gd/FS

Screening brain : Axial T2W, T1WI/Gd/FS`,comparison:`MRI PNS with orbits`,findings:`The study reveals minimal patchy soft tissue thickening at inferomedial aspect of right orbit and medial canthus area with absence of the right nasolacrimal duct. No definite enhancing mass lesion. These are suggestive post-treatment changes without recurrent or residual tumor.

- Eyeballs, orbital apex, optic nerves, optic chiasm and EOMs of both orbits are unremarkable.

- Both lacrimal glands are unremarkable.

- No restricted diffusion in orbital region is detected.

- Partially visualized relatively small size of right parotid gland is compatible with history of surgery.

- The visualized brain parenchyma shows normal SI of brain parenchyma without definite space taking lesion or abnormal enhancing lesion.

- The visualized cerebral venous system of the brain is unremarkable.

- The cerebellum and brainstem are unremarkable.

- The pituitary gland and posterior bright spot are unremarkable.

- No midline shifting is seen.

- No dilatation of the ventricular system is detected.

- Mucoperiosteal thickening at both ethmoid sinuses is noted.

- The rest of visualized PNS and left mastoid air cells are unremarkable.`,impression:`- Post-treatment change at inferomedial aspect of right orbit and medial canthus area without recurrent or residual tumor.

- Partially visualized relatively small size of right parotid gland is compatible with history of surgery.`},"MRI/MRA of Brain with Carotid (Vessel Wall Protocol)":{history:``,technique:`MRI and MRA brain, carotid with vessel wall were performed in

 Axial: T1W, T2W, T2W/FLAIR, SWI, DWI/ADC, T1W/GD

 Coronal: T1W/GD

 Sagittal: T1W, T2W/FLAIR, T1W/GD

 MRA of brain was performed by 3D TOF and CE-MRA technique with reconstruction image.

 Vessel wall imaging were done in coronal T1W/FS_SPACE, coronal T2W/FS_SPACE and T1W/FS/GD_SPACE

COMPARISON STUDY : CT brain NC .`,comparison:``,findings:`The study reveals patent left CCA-ICA anastomosis. Focal hypoSI on TOF at posterior aspect of the origin of left ICA suggest post anastomosis site. No gross intramural hematoma, intimal flap, double lumen, or luminal enlargement to indicate residual dissection. No wall thickening or enhancement is depicted.

 Evidence of proximal left ECA ligation with remaining distal part of ECA.

 Symmetrical luminal size of bilateral CCA and cervical ICA is noted.

 Dominant left VA.

 The rest of SCAs, brachiocephalic trunk, right CCA, right ICA, both VAs show normal flow-related and contrast enhancement without significant stenosis, abnormal outpouching lesion or dissection. No wall thickening or enhancement.

 Irregularity of distal M1 of left MCA without significant luminal stenosis is noted.

 Fetal origin of left PCA.

 The rest of both intracranial ICAs, ACAs, AcoA, right MCA, PCAs, left PcoA, both VAs and BA show normal flow-related and contrast enhancement without significant stenosis, abnormal outpouching lesion or dissection.

 No vessel wall thickening or wall enhancement of intracranial vessels.

 There is hyperSI lesion on T2W/FLAIR, hypoSI on T1W, blooming artifact on SWAN without restricted diffusion, involving left parietotemporal, left insular lobe, left external capsule, and left posterior limb of internal capsule. Also noted, linear hyperSI on T1W with gyral enhancement, blooming artifact on SWAN, and pseudonormalization on DWI/ADC along left parietotemporal gyrus.

 Few small foci of gyral enhancement at cortical and subcortical area of left frontoparietal lobe.

 All of these findings suggest subacute infarction.

 Another hyperSI on T2W/FLAIR with restricted diffusion at left amygdala, suggestive of acute infarction.

 Decreased degree of rightward midline shift, measured 0.2 mm. with partial obliteration of left lateral ventricle. No other brain herniation is seen.

 No focal mass, intracranial hemorrhage or extra-axial collection.

 The brain stem and cerebellum appear unremarkable.

 Pituitary gland and posterior bright spot are unremarkable.

 Mild mucoperiosteal thickening at both ethmoid and maxillary sinuses are noted.

 Minimal effusion in left mastoid air cells is seen.

 Both orbits, the rest of PNS, and right mastoid air cell appear unremarkable.

 Bony calvarium shows normal signal intensity.

 Abnormal marrow replacing lesions along cervical spine, upper T spine, and clivus with enhancing extraosseous soft tissue formation, prominent at posterior element of C2-C3 level, suggestive of extensive bony metastasis. No evidence of spinal cord compression.

 Partially seen bilateral cervical nodes, size up to 1.1 cm at left cervical node groupV.`,impression:`- Patent left CCA-ICA anastomosis. No gross intramural hematoma, intimal flap, double lumen, or luminal enlargement to indicate residual dissection. No wall thickening or enhancement is depicted.

- Evidence of proximal left ECA ligation with remaining distal part of ECA.

- Patent of the rest of extra- and intracranial vessels without vessel wall thickening or wall enhancement.

- Subacute infarction, involving left parietotemporal, left insular lobe, left external capsule, and left posterior limb of internal capsule.

- Few small foci of subacute infarction at cortical and subcortical area of left frontoparietal lobe.

- Acute infarction at left amygdala.

- Decreased degree of rightward midline shift, measured 0.2 mm. with partial obliteration of left lateral ventricle. No other brain herniation is seen.

- Extensive bony metastasis along cervical spine, upper T spine, and clivus with enhancing extraosseous soft tissue formation, prominent at posterior element of C2-C3 level.

- Partially seen bilateral cervical nodes, size up to 1.1 cm at left cervical node groupV.`},"MRI/MRA of Brain with Carotid Artery":{history:``,technique:`The MRI and MRA brain were performed in

 Axial: T1W, T2W, FLAIR, T1W/GD, DWI/ADC, SWI

 Coronal: T2W, T1W/GD/FS

 Sagittal:T1W_3D, T1W/GD

 MRA of brain was performed by 3D_TOF and contrast-enhanced techniques

COMPARATIVE STUDY : MRI AND MRA BRAIN WITH CAROTID ARTERY .`,comparison:``,findings:`The study demonstrates multiple T2/FLAIR hyperintensities in subcortical and periventricular white matter of bilateral frontal and parietal lobes, possibly non-specific white matter change. The Fazekas' score =1 .

 Re-demonstration of old infarction at left-sided pons.

 Mild prominent subarachnoid spaces of bilateral cerebral hemispheres, represent minimal cortical brain atrophy.

 The remaining brain parenchyma exhibits normal signal intensity and grey-white differentiation. No abnormal restriction diffusion to suggest acute infarct.

 There is no focal mass, abnormal enhancing lesion or leptomeningeal enhancement.

 No intracranial hemorrhage, extraaxial collection, midline shift or brain herniation is noted.

 The ventricular system is not dilated.

 Susceptibility artifact at cerebellar vermis is noted, suggestive of microbleeding.

 Unremarkable pituitary gland with normal bright posterior lobe is identified. The basal cistern is not remarkable.

 The visualized cerebral venous system is not remarkable.

 Bilateral mastoid effusion is noted. Mucoperiosteal thickening in bilateral ethmoid, maxillary, and right sphenoid sinuses is apparent. The orbits and the remaining PNSs are not remarkable.

MRA and Vessel wall of brain:

Intracranial arteries:

 VA: Focal severe stenosis at distal V4 of left VA. Irregularity of proximal V4 of right VA without luminal stenosis.

 BA: Increased in size of two outpouching flow enhancement at left lateral wall with intimal flap adjacent to proximal part of the aneurysm (proximal BA), measuring 0.6x0.2 and 0.5x0.3 cm without enhancing wall, suspected dissecting aneurysm.

 PCA: Irregular with mild narrowing at both P2 and right P1 of PCA

 PcoA: No demonstrable

 ICA: Irregular with narrowing at supraclinoid part of both ICA.

 MCA: Mild narrowing at distal M1 left MCA

 ACA: No significant stenosis, aneurysm or dissection

 AcoA: Patent

 No abnormal AV shunting of vascular malformation or other aneurysm.

- Diffuse eccentric wall thickening of intracranial arteries, including both V4 of VA, BA, ICA, and left MCA.

- Abnormal wall enhancement at V4 of both VA, supraclinoid parts of both ICA

 All of these findings suggest atherosclerotic change.`,impression:`- Re-demonstration of old infarction at left-sided pons.

- Multiple foci of non-specific white matter change at bilateral frontal and parietal lobes. The Fazekas' score =1.

- Microbleeding at cerebellar vermis

- Increased in size of two dissecting aneurysms at left lateral wall with intimal flap adjacent to proximal part of the aneurysm (proximal BA), measuring 0.6x0.2 and 0.5x0.3 cm without enhancing wall.

- Atherosclerotic change of intracranial vessels

- Focal severe stenosis at distal V4 of left VA

- Bilateral mastoid effusion`},"MRI/MRA of Brain (Vessel Wall Protocol)":{history:``,technique:``,comparison:`MRI and MRA brain .`,findings:`The study reveals no restricted diffusion to suggest acute infarction.

- Still noted encephalomalacic change and gliosis at right frontal basal lobe and left centrum semiovale.

- No significant change of old infarction at right-sided pons, and left cerebellar hemisphere.

- Multiple punctate foci T2 hyperSI with some areas of confluent lesions at white matter of bilateral frontal lobes and periventricular region, suggestive of non-specific white matter change.

- Mild cortical and cerebellar atrophy.

- No intra- and extra-axial hemorrhage is seen.

- No demonstrable space-taking lesion, abnormal enhancing lesion, and leptomeningeal enhancement is noted.

- Microbleeds at left-sided pons.

- Corpus callosum is unremarkable.

- The ventricular system is not dilated.

- The rest of brainstem is unremarkable.

- The pituitary gland and posterior bright spot are unremarkable.

- No midline shifting is seen. No other types of brain herniation.

- Mucoperiosteal thickening with retention cysts at both ethmoid and maxillary sinuses.

- Both orbits, the rest of PNSs, and both mastoid air cells are unremarkable.

- Bony calvarium is no abnormal signal.

- Evidence of stent-assisted coil embolization of giant partially thrombosed aneurysm at left cavernous ICA with patent flow diverter stent, size 2.4x2.3 cm (prior 2.5x2.3 cm). Unchanged coil compaction replacing with increased degree of thrombus in aneurysmal sac.

 No aneurysmal wall enhancement in vessel wall study.

- Minimal flow-related enhancement at horizontal cavernous segment is seen. The giant aneurysm cause pressure effect resulting medial displacement of left lateral ventricle, 3rd ventricle, left lentiform nucleus, left PcoA, left-sided optic chiasm.

- Unchanged ectasia of supraclinoid part of left ICA just distal to the stent with eccentric wall thickening and enhancement, compatible with atherosclerotic change.

- Fusiform aneurysm at A2 segment of left ACA, measuring 0.7 cm in maximal diameter (prior 0.6 cm) with eccentric wall thickening and enhancement, compatible with atherosclerotic change.

- Mild luminal irregularity at left distal M1 is still seen.

- Right A1 hypoplasia is seen.

- Hypoplasia of right VA with PICA termination.

- Unchanged size of long segment fusiform aneurysm, measuring up to 0.4 cm in maximal diameter (prior 0.6 cm).There is also eccentric wall thickening and enhancement of V4 segment of left VA, compatible with atherosclerotic change.

- Hypoplasia P1 segment of left PCA with persistent fetal origin.

- The rest of intracranial arteries show no significant stenosis, aneurysm or vascular malformation.

- No abnormal wall thickening or enhancement of the rest intracranial vessels.`,impression:`- Evidence of stent-assisted coil embolization of an unchanged size 2.4x2.3-cm giant partially thrombosed aneurysm at left cavernous ICA with patent flow diverter stent with unchanged degree of coil compaction and increased size of thrombus in the aneurysm. No aneurysmal wall enhancement

- Minimal flow-related enhancement at horizontal cavernous segment.

- Unchanged ectasia of supraclinoid part of left ICA, fusiform aneurysm at A2 segment of left ACA, and long segment fusiform aneurysm at V4 segment of left VA with eccentric wall thickening and enhancement, compatible with atherosclerotic change.

- Old infarction at right-sided pons, and left cerebellar hemisphere.

- Microbleeds at left-sided pons.`},"MRI/MRA of Brain (AVM Protocol)":{history:``,technique:`Axial : T2W, PD, T2W/FLAIR/Cube_3D, SWAN_3D, DWI/ADC, T1W/3D/Gd

Sagittal : T1W_3D

Coronal : T2W

MR perfusion was performed with ASL technique.

MRA were performed in TOF image and CE MRA.`,comparison:`MRI BRAIN AVM PROTOCOL`,findings:`- The study reveals no change of conglomerated vascular structures with flow-related enhancement at left lateral ventricular trigone, adjacent periventricular and involving left splenium of corpus callosum, measures about 1.4x0.8 (prior was 1.4x0.8 cm), suggested arteriovenous malformation (AVM). Associated with intranidal flow void and blooming artifacts compatible with hemosiderin deposition from prior ruptured AVM.

 : The AVM possibly fed by branches from left PCA.

 : The venous drains into left internal cerebral vein.

- Symmetrical perfusion is observed.

- No evidence of intra-nidal aneurysm or flow related aneurysm is seen.

- No abnormal filling defect in venous sinus system is shown.

- The rest of intracranial arteries including intracranial part of both ICAs, ACAs, MCAs, right PCAs, BA, both VAs and right PCoA show normal flow-related and contrast enhancement without irregularity, significant stenosis or aneurysm.

- Both distal CCAs, both carotid bulbs, V2 and V3 of both VAs show normal flow-related and contrast enhancement without irregularity, significant stenosis or aneurysm.

- Blooming artifacts lying on the ependymal lining of the ventricle and left ventricular trigone are compatible with history of prior IVH. The ventricular system is not dilated.

- Evidence of craniotomy defects at bilateral frontal bone with gliosis change anterior body of corpus callosum and hemosiderin deposition along bilateral shunt tract.

- Few small punctate foci of high T2/FLAIR lesion at subcortical region of left frontal and both parietal regions, suspected of white matter change.

- No evidence of acute infarction, acute intraparenchymal hemorrhage, or extraaxial collection is seen.

- No visualized restricted diffusion lesion is seen.

- No shifting of midline structure is depicted.

- Pituitary gland appears normal with unremarkable posterior bright spot

- Posterior fossa appears unremarkable.

- Visualized both orbits, the rest of PNSs and both mastoid air cells appear unremarkable.`,impression:`- No change of AVM at left lateral ventricular trigone involving adjacent periventricular and left splenium of corpus callosum which is fed by branches from left PCA and drain into left internal cerebral vein. Associated with intranidal flow void and blooming artifacts compatible with hemosiderin deposition from prior ruptured AVM.

- No evidence of intra-nidal aneurysm, flow related aneurysm, or cerebral venous thrombosis.

- No acute infarction or acute intracranial hemorrhage

- Evidence of previous intraventricular hemorrhage

- Bifrontal craniotomy defects and gliosis change with hemosiderin deposit along previous shunt tracts.`},"MRI of Brain (IAC Protocol)":{history:``,technique:`MRI of brain with IAC protocol was performed in

 Axial: T2W, T2W/FLAIR, T1W/Gd

 Coronal: T2W

 Thin slice at IACs were performed in

 Axial: T1W/HR, T2W/3D/DRIVE, DWI/ADC, T1W/Gd/FS

 Coronal: T2W/FS, T1W/Gd/FS

COMPARISON STUDY : Outside CT brain NC .

The MRI of brain; base of skull protocol was performed on sequences as follows;

 Axial: T1W, T2W/FS, T1W/FS, 3DT2W/Cube, T1W/FS/GD, DWI/ADC

 Coronal: T2W/FS, T1W/FS, T1W/FS/GD

 Sagittal: T1W/FS/GD

Screening brain: axial T2W, 3D/FLAIR and T1W/FS/GD

COMPARATIVE STUDY: MRI base of skull .`,comparison:``,findings:`The study reveals well-defined dural based enhancing mass with some area of restricted diffusion at right cerebellopontine angle, extending to right IAC with internal multistage hemorrhage, measured 4.0x3.0 cm, favored hemorrhagic meningioma more than schwannoma.

 The mass cause pressure effect to right pons, medulla oblongata, and 4th ventricle

 Cannot identify cisternal and intracanalicular part of right CN VII-VIII complex

 Cisternal and intracanalicular part of left CN VII-VIII complex has normal signal without mass or abnormal enhancement.

 The bilateral membranous labyrinth appears unremarkable.

 Left cerebellopontine angle has no mass or abnormal signal.

 The study of brain shows right frontal craniotomy defect with encephalomalacic change

 Multiple high T2 with total suppressed signal on FLAIR at bilateral basal ganglia, representing dilated perivascular space.

 No significant change in degree of multiple areas of high T2/FLAIR of white matter at bilateral periventricular regions, and centrum semiovale is observed, suggestive of moderated degree of white matter change (Fazeka's scale = 2).

 No evidence of acute infarction, intracranial hemorrhage, extra-axial collection, enhancing mass or leptomeningeal enhancement is found.

 Mild cortical brain atrophy and cerebellar atrophy is evident.

 No dilatation of ventricular system is observed.

 Artificial lens both eyes.

 PNS and mastoid air cells appear unremarkable.

- The study reveals no significant unchanged well-defined homogenous enhancing mass at left anterior clinoid process showing isosignal intensity (SI) on T1W and slightly hyperSI on T2W, with dural tail sign, sized about 1.1x0.8x1.0 (Prior 1.3x0.9x0.8 cm in APxWxHt), suggestive of stable meningioma.

- No abnormal increased T2 signal intensity or enhancement of visualized optic nerves, optic chiasm, and optic tracts.

- Unchanged gliotic change with brain volume loss at both gyrus rectus and right medial orbital gyrus could be due to remote traumatic event.

- No change of a tiny DVA at right frontal region

- The ventricular system is not dilated.

- No shifting of midline structure is shown.

- Cerebral venous system appears unremarked.

- The posterior fossa is unremarkable.

- Both orbits, the visualized PNSs and both mastoid air cells appear unremarkable.`,impression:`- A well-defined dural based enhancing mass with some area of restricted diffusion at right cerebellopontine angle, extending to right IAC with internal multistage hemorrhage, measured 4.0x3.0 cm, favored hemorrhagic meningioma more than schwannoma.

- The mass cause pressure effect to right pons, medulla oblongata, and 4th ventricle

- Cannot identify cisternal and intracanalicular part of right CN VII-VIII complex

- No other enhancing mass or leptomeningeal enhancement.

MRI BRAIN (base of skull protocol)

- Stable left anterior clinoid meningioma, about 1.1x0.8x1.0 cm.

- Unchanged of gliotic change at both gyrus rectus and right medial orbital gyrus could be due to remote trauma.

- No change of a tiny DVA at right frontal region.`},"MRI of Nasopharynx":{history:``,technique:`MR imaging of nasopharynx was performed with following sequences:

NASOPHARYNX:

AXIAL/CORONAL/SAGITTAL: T1W/ T1WFS/T2W/ T2WFS/ T1W+FS+GD

BRAIN: Axial T1W/T2W/ T2W_FLAIR/ DWI/ADC/ T1W+FS+GD

Coronal T2WSE/ T1W+FS+GD / Sagittal T1W/ T1W+FS+GD

COMPARATIVE STUDY: Previous MRI nasopharynx on, CT brain with contrast .`,comparison:``,findings:`The study reveals

NASOPHARYNX:

Decreased degree enhancement with no significant change in size of the heterogenously infiltrative mass in nasopharynx and its extension, comparing to prior CT brain as follows:-

Superiorly:Remaining of infiltrative enhancement lesion in clivus, sphenoid bone as well as left cavernous sinus and left orbital apex.

Inferiorly: Infiltrative enhancement extension into oropharynx.left parapharyngeal space and left masticator space.

Anteriorly: Heterogenously infiltrative lesion at left ethmoid sinus and right nasal cavity, suggestive of post treatment change or residual tumor.

Posteriorly: No mass into prevertebral soft tissue.

Posterolaterally: Infiltrative enhancement in left parapharyngeal space(PPS), left carotid space(CS).

Medially: The infiltrative lesion abut cavernous part of left ICA with preserved flow void.

ORAL CAVITY, OROPHARYNX:

No extension into lateral oropharyngeal wall.

Normal oral cavity structures.

Normal posterior third of tongue, uvula.

HYPOPHARYNX:

Normal pyriform sinus and valleculae.

LARYNX:

Normal of True vocal cord and infraglottic level.

SALIVARY GLANDs:

Normal size and signal intensity both submandibular glands.

NECK:

No cervical lymphadenopathy

BRAIN:

- Normal brain parenchyma signal intensities in grey and white matter.

- No space occupying lesions in the visualised brain.

- Multiple small foci of high SI on T2W at bilateral basal ganglia are compatible with dilated perivascular space.

ORBITS & PNS and Mastoid:

Normal bilateral orbits. Fluid in bilateral mastoid air cell with enhancement, suggestive of mastoiditis.

Mucoperiosteal thickening in right ethmoid and both maxillary sinuses could be mild pansinusitis

C-SPINES:

No evidence of vertebral destructive lesion in area scanned.

Normal cervical spinal cord signal intensity.`,impression:`- Overall no significant change of the previously heterogenous infiltrative mass in nasopharynx and its extension as described.

- Infiltrative enhancement tissue at left ethmoid sinus and right nasal cavity, suggestive of post treatment change or residual tumor.

- No cervical lymphadenopathy.

- Mucositis in PNSs and both mastoiditis.`},"MRI of Nasopharynx (with Screening Neck)":{history:``,technique:`The MRI of nasopharynx was performed on sequences as following;

 Axial: T1W, T1W/FS, T2W/FS, DWI/ADC, LAVA_T1W/FS/GD, T1W/FS/GD

 Coronal: T1W, T2W/FS, T1W/FS/GD

 Sagittal: T1W, T2W/FS, T1W/FS/GD

 Screening MRI neck was done by coronal T2W/FS, and axial T1W/FS/GD

COMPARISON STUDY: Outside MRI Nasopharynx on and CT neck .`,comparison:``,findings:`- The study reveals evidence of medial wall defect at right maxillary sinus. Please correlate with surgical history.

- Decreased size of hyperSI lesion at mucosa-submucosa area of nasopharynx (right-sided more than left), right posterior nasal cavity, and right masticator space, showing iso-hypoSI on T1W and iso-hyperSI on T2W, heterogeneous enhancement without restricted diffusion, measured about 4.1x4.9x2.1 cm, suggestive of post treatment changed with suspected residual nasopharyngeal cancer. Follow up imaging is recommended. The extension of the lesion is described as followed;

 Anterior: Still seen invade posterior wall of right maxillary, right side of posterior choana and right nasal cavity, right posterior ethmoid sinus, pterygopalatine fossa/pterygomaxillary fissure, and sphenoid bone.

 Posterior: Right prevertebral spaces, destruct clivus bone, petrous apex, right foramen lacerum and ovale.

 Inferior: Right parapharyngeal space, right pterygoid muscles.

 Superior: Right sphenoid sinus, petrous part&cavernous part of right ICA.

 Medial: Minimal crossing midline to left side of nasopharynx.

 Lateral: Right masticator space, right mandibular condyle.

- Unremarkable of bilateral submandibular and parotid glands

- No restricted diffusion lesion.

- Normal cavernous sinus and orbital apices.

- Both lacrimal glands are unremarkable. Both SOFs and both optic canals are unremarkable.

- Normal left rosen muller fossa, oropharyngeal mucosa.

- Visualized the rest of neck spaces are unremarkable.

- Subcentimeter bilateral cervical node, size up to 0.6 cm.

- Visualized brain parenchyma shows normal SI without area of infarction or hemorrhage or abnormal enhancing lesion. Generalized mild cortical cerebral and cerebellar atrophy.

- The brain stem appears unremarkable.

- Mucoperiosteal thickening along both maxillary, ethmoid, sphenoid, and frontal sinuses with massive effusion in both middle ears and mastoid air cells, suggestive of pansinusitis with bilateral otomastoiditis.

- Orbits are unremarkable.

- Evidence of tracheostomy is seen.`,impression:`- Evidence of medial wall defect at right maxillary sinus. Please correlate with surgical history.

- Decreased size of hyperSI lesion at nasopharynx (right-sided more than left), right posterior nasal cavity, and right masticator space, measured about 4.1x4.9x2.1 cm, suggestive of Follow up imaging is recommended. The extension of the lesion is described as followed;

- Subcentimeter bilateral cervical node, size up to 0.6 cm.

- Pansinusitis with bilateral otomastoiditis.

- Evidence of tracheostomy`},"MRI of Brain (NMO Protocol)":{history:``,technique:`MRI of the brain was performed in

 Axial - T2W, DWI, ADC, SWI, T1W/Gd/3D

 Coronal - T1W, T2W (orbit), T1W/Gd/3D

 Sagittal - T1W/3D, T2W/FLAIR/3D, T1W/Gd/3D

 MRI of spine was performed in sagittal T2W, T1W/Gd/FS whole spine and axial T2W, T1W/Gd/FS cervical and thoracic spine.

COMPARISON STUDY: MRI of the brain-NMO protocol .`,comparison:``,findings:`The study reveals no interval change of multiple patchy and confluent foci of hyperSI on T2W and T2W/FLAIR at bilateral centrum semiovale, periventricular white matter (which some of them as seen as Dawson fingers pattern), juxtacortical white matter at left parietal region, bilateral subcortical white matter of frontal and parietal region, both genu of internal capsules, left sided pons, ventral medulla, left middle cerebellar peduncle and left cerebellar hemispheres.

 No abnormal enhancing lesion, restrictive diffusion or susceptibility area is noted.

 No detectable new enhancing or high T2W/FLAIR lesion is demonstrated.

 No acute infarction or extra-axial collection is seen.

 No abnormal SI of both optic nerve, optic chiasm and visualized optic tract is seen.

 The ventricular system is normal size and midline position. No evidence of hydrocephalus.

 Minimal mucoperiosteal thickening in both ethmoid sinuses are seen.

 Both orbit, residual PNSs and both mastoid air cells are unremarkable.

 MRI spine shows poorly demarcated area of intramedullary faint hyperSI on T2W lesions without enhancement at posterior aspect of C2-3 and T3-T5 levels, unchanged.

 No new intramedullary lesion is demonstrable.

 No evidence of myelomalacic change or cord atrophy.

 Loss of cervical lordosis with loss of water SI of intervertebral disc is compatible with cervical spondylosis with disc degeneration.

 No spondylolisthesis is noted.

 Normal bone marrow SI is observed.

 Conus medullaris terminates at L1 vertebral level.

 Multiple small myoma uteri in uterus are seen.`,impression:`- Overall stable multiple patchy and confluent foci of hyperSI on T2W at bilateral centrum semiovale, periventricular white matter, juxtacortical white matter at left parietal region, bilateral subcortical white matter of frontal and parietal region, both genu of internal capsules, left sided pons, ventral medulla, left middle cerebellar peduncle and left cerebellar hemispheres.

- Stable faint spinal cord lesions at C2-3 and T3-T5 levels as described above.

- No evidence of active or new lesion along brain parenchyma and spinal lesion

- No evidence of optic neuritis in this study

- Cervical spondylosis.

MRS`},"MRI of Brain (Dementia Protocol)":{history:``,technique:`MRI brain were performed by

Axial: T1W, T2W, FLAIR, DWI, ADC, SWAN

Coronal: T1W/3D

Sagittal: T1W, T2W/FLAIR

COMPARATIVE STUDY: MRI brain .`,comparison:``,findings:`- The study reveals no focal mass, acute infarction, or restricted diffusion area.

- No intra- or extraaxial hemorrhage.

- Multiple punctate and confluent high-T2W/FLAIR lesions without restricted diffusion at periventricular white matter, favored non-specific white matter change (Fazekas scale = 1).

- Prominent sulci and gyri at bilateral cerebral hemispheres, prominent at bilateral frontoparietal lobes (right more than left), suggested cortical brain atrophy (GCA scale = 1-2). (Koedam score=1 left side, 2 right side; all ages: score more than one is abnormal).

- Visual assessment scales for dementia are as described below;

 # ERICA score = 1 both sides

 # MTA score = 2 left side, 1 right side (age <=75 years old: score more than 2 is abnormal).

- Dilated perivascular space, showing hypoSI T1W and hyperSI on T2W at both lentiform nuclei.

- Old lacunar infarction at right caudate (periventricular of right frontal horn) is noted.

- Few microbleeds at subcortical of left frontal and right parietal lobes are seen.

- No shifting of midline structures or brain herniation is detected.

- No ventriculomegaly.

- The rest of brainstem and cerebellum appear unremarkable.

- Mucoperiosteal thickening at both ethmoid sinuses are noted.

- Both orbits, the rest of visualized PNSs, and both mastoid air cells are unremarkable.

- Normal signal of visualized bony calvarium is seen.`,impression:`- Suggested cortical brain atrophy, predominate at bilateral frontoparietal lobes (right more than left).

- Mild left medial temporal lobe atrophy (MTA score = 2 left side)

- Few microbleed at subcortical of left frontal and right parietal lobes

- No definite brain infraction or mass lesion

- Mucoperiosteal thickening of both ethmoid sinuses

Brachial plexus`},"MRI of Brachial Plexus":{history:``,technique:`Axial: T1W, T2W, 3D/T2W/Cube, T1W/Gd, InphaseT1W, InphaseT2W

Coronal: T1W, T2W, 3D/STIR, DWI/STIR, T1W/Gd, InphaseT1W, InphaseT2W

Sagittal: Oblique left arm T1W, T2W, STIR, T1W/Gd, InphaseT1W, InphaseT2W

COMPARATIVE STUDY: Outside MRI brachial plexus .`,comparison:``,findings:`- Mild loss of cervical lordosis. Scoliosis is noted.

- Normal water signal in the intervertebral discs of C-spine. No significant disc bulging and central canal stenosis. No abnormal SI of spinal cord.

Detail of each cervical nerve root and the left brachial plexus as described:

# C1–C4: Preganglionic nerve roots appear intact.

# C5: Normal appearance of the ventral and dorsal preganglionic nerve roots. There is decreased degree thickening with high T2W signal along the postganglionic root (extending along the root to branches), suggesting post ganglionic injury or post operative change.

# C6: Discontinuation of C6 preganglionic nerve roots with a well-defined CSF-signal-intensity lesion at the left side of the thecal sac extending through the left neural foramen, suggestive of a pseudomeningocele. Loss of the normal postganglionic C6 nerve root is noted, suggesting a preganglionic and post ganglionic injury with postoperative changes.

# C7: Loss of the C7 root sleeves with a well-defined CSF-signal-intensity lesion at the left side of the thecal sac extending through the left neural foramen, suggestive of a preganglionic injury with pseudomeningocele. There is decreased degree thickening with high T2W signal along the postganglionic root (extending along the root to branches), suggesting post ganglionic injury or post operative change.

# C8-T1: Preganglionic nerve roots appear intact.

- Right branchial plexus appears unremarkable.

- Left shoulder muscle shows fatty infiltration with atrophic change, suggesting muscle atrophy due to denervation.

- Visualized brain is unremarkable.`,impression:`- Left C6 preganglionic and post ganglionic injury with postoperative changes and associated pseudomeningocele formation.

- Left C7 preganglionic injury with pseudomeningocele. Post ganglionic injury or post operative change.

- Left C5 post ganglionic injury or post operative change.

- Denervation changes in the left shoulder muscles.

Neck`},"MRI of Neck":{history:``,technique:`The MRI of the neck was performed with

 Axial : T1W, T2W, T1W/FS, T2W/FS, T1W/FS/Gd

 Sagittal : T1W, T2W, T2W/FS, T1W/FS/Gd

 Coronal : T1W, T2W, T2W/FS, T1W/FS/Gd

 MRI brain was also performed on axial T2W.`,comparison:``,findings:`The study reveals enlargement of both lobe thyroid (left more than right) with heterogeneous enhancement and multiple thyroid nodules. Please correlate with ultrasound.

 Mild rightward displacement of trachea without airway obstruction. No invasion of adjacent structures.

 No definite mass or enhancing lesion at visualized neck spaces, such as nasopharynx, oropharynx, larynx, masticator space and hypopharynx.

 Multiple bilateral reactive lymph nodes along bilateral cervical group IIa and IIb, size up to 1.1 cm at left neck node group IIA are observed.

 The visualized submandibular glands and both parotid glands are unremarkable.

 Both orbits, visualized PNSs and both mastoid air cells are unremarkable.

 The visualized brain parenchyma appears normal attenuation without definite mass or hemorrhage or abnormal enhancing lesion.`,impression:`- Enlargement of both lobe thyroid (left more than right) with heterogeneous enhancement and multiple thyroid nodules. Please correlate with ultrasound.

- Mild rightward displacement of trachea without airway obstruction. No invasion of adjacent structures.

- Multiple bilateral reactive lymph nodes along bilateral cervical group IIa and IIb.`},"MRI of Neck (Emergency)":{history:``,technique:`The thin-slice MRI of neck was performed by:

 Axial : T1W, T2W, T1W/FS, T2W/FS, T1W/FS/Gd

 Sagittal : T1W, T2W, T2W/FS, T1W/FS/Gd

 Coronal : T1W, T2W, T2W/FS, T1W/FS/Gd`,comparison:``,findings:`The study reveals an lobulate shape high SI on T2W with multiseptate ring enhancing lesion which measured about 3.5x2.8x13.7 cm(WxAPxH) at left retropharyngeal space, suggestive of retropharyngeal abscess. The extension of this lesion is described below;

 Anterior : bulging and obliterate oropharyngeal space.

 Posterior : Retropharyngeal space involvement with intact prevertebral muscle.

 Medial : bulging cross mid line to the right from C2 to C5 level.

 Lateral : left parapharyngeal space

 Superior : lower aspect of nasopharyngeal space without evidence of intracranial extension.

 Inferior : downward extension to T1 vertebral body level.

 High SI on T2W with enhancement along left carotid space, left masticator space and left parotid gland, suggestive of infection/inflammation. Preserved flow void of left CCA, ICA, and ECA.

 Narrowing of the laryngeal airway is seen.

 Right parapharyngeal, right carotid and right masticator spaces appear unremarkable.

 Cavernous sinus and both orbital apex are intact.

 Multiple subcentrimeter cervical lymph nodes; 2A, 2B.

 Visualized PNSs and both mastoid air cells appear intact.

 Soft tissue edema with fat reticulation along left side neck extending to left face.

 The visualized brain appear normal.

 Retrolisthesis at C5 over C6 level. No marrow replacing lesions. No osteomyelitis.`,impression:`- An abscess at left retropharyngeal space with extension as describe above.

- Infection/inflammation along left carotid space, left masticator space and left parotid gland.

- Narrowing of the laryngeal airway

- Soft tissue edema with fat reticulation along left side neck extending to left face.

Pituitary`}}},mammogram:{breast:{"BI-RADS 1 (Negative)":{history:`Asymptomatic`,studyType:`Mammography and Ultrasound Breasts Both Sides`,technique:`Bilateral digital mammography routine (CC and MLO) views and tomosynthesis both MLO views.`,comparison:`None.`,findings:`MAMMOGRAPHY: Breast tissue: Scattered fibroglandular densities. Mass: Not detectable. Calcifications: Not detectable. Architectural distortion: Not detectable. Asymmetry: Not detectable. Dilated tubular structure: Not detectable. Other: No significant axillary lymphadenopathy, bilaterally.

ULTRASOUND: Background echotexture: Homogeneous background echotexture-fibrogladular. Cysts: Not detectable. Mass: Not detectable. Architectural disruption: Not detectable. Other: No significant axillary lymphadenopathy, bilaterally.`,impression:`No radiographic evidence of malignancy.

ASSESSMENT: BI-RADS Category 1 (Negative)

RECOMMENDATION: Routine screening mammography if unchanged breast self-exam, monthly.

NOTES: False negative rate of mammography is approximately 10-15%. Management of palpable abnormality must be based on clinical consideration.`},"BI-RADS 2 (Benign)":{history:`Asymptomatic`,studyType:`Mammography and Ultrasound Breasts Both Sides`,technique:`Bilateral digital mammography routine (CC and MLO) views and tomosynthesis both MLO views.`,comparison:`None.`,findings:`MAMMOGRAPHY: Breast tissue: Scattered fibroglandular densities. Mass: Not detectable. Microcalcifications: Diffuse punctate/round microcalcifications at both breasts, benign. Architectural distortion: Not detectable. Asymmetry: Not detectable. Dilated tubular structure: Not detectable. Others: No significant abnormal axillary lymphadenopathy.

ULTRASOUND: Background echotexture: Homogeneous background echotexture-fibrogladular. Cyst: A few simple cysts at both breasts, benign. Mass: Not detectable. Architectural disruption: Not detectable. Others: No significant abnormal axillary lymphadenopathy.`,impression:`No radiographic evidence of malignancy.

ASSESSMENT: BI-RADS Category 2 (Benign)

RECOMMENDATION: Routine screening mammography if unchanged breast self-exam, monthly.

NOTES: False negative rate of mammography is approximately 10-15%. Management of palpable abnormality must be based on clinical consideration.`},"BI-RADS 3 (Probably Benign)":{history:`Asymptomatic / Follow up probably benign lesion / Palpable mass at`,studyType:`Mammography and Ultrasound Breasts Both Sides`,technique:`Bilateral digital mammography routine (CC and MLO) views and tomosynthesis both MLO views.`,comparison:`None.`,findings:`MAMMOGRAPHY: Breast tissue: Scattered fibroglandular densities. Mass: Not detectable. Microcalcifications: Diffuse punctate/round microcalcifications at both breasts, benign. Architectural distortion: Not detectable. Asymmetry: Not detectable. Dilated tubular structure: Not detectable. Others: No significant axillary lymphadenopathy, bilaterally.

ULTRASOUND: Background echotexture: Homogeneous background echotexture-fibrogladular. Cyst: A few simple cysts at both breasts, benign. Mass: A few well-defined oval shape hypoechoic nodules at both breasts, probably benign at
- M1 =
- M2 =
Architectural disruption: Not detectable. Abnormal vessels: Not detectable. Others: No significant axillary lymphadenopathy, bilaterally.`,impression:`1)

2)

ASSESSMENT: BI-RADS Category 3 (Probably benign)

RECOMMENDATION: Suggest 6 months follow up complete study if unchanged breast self-exam, monthly and breast specialist surgeon consultation. Suggested 6 months follow up with ultrasound if unchanged breast self-exam, monthly and breast specialist surgeon consultation.

NOTES: False negative rate of mammography is approximately 10-15%. Management of palpable abnormality must be based on clinical consideration.`},"BI-RADS - Full Template (choose category)":{history:`Asymptomatic`,studyType:`Mammography and Ultrasound Breasts Both Sides`,technique:`Bilateral digital mammography routine (CC and MLO) views and tomosynthesis both MLO views.`,comparison:`None.`,findings:`MAMMOGRAPHY: Breast tissue: Scattered fibroglandular densities. Mass: Not detectable. Calcifications: Diffuse punctate/round microcalcifications at both breasts / Not detectable. Architectural distortion: Not detectable. Asymmetry: Not detectable. Other: Not detectable.

ULTRASOUND: Background echotexture: Homogeneous background echotexture-fibrogladular. Cyst: A few simple cysts at both breasts, benign / Not detectable. Mass: A few well-defined oval hypoechoic nodules at both breasts, probably benign at
- M1 =
- M2 =
Architectural disruption: Not detectable. Others: No significant abnormal axillary lymphadenopathy.`,impression:`1)

2)

OVERALL ASSESSMENT (choose one):
BI-RADS Category 1 (Negative)
BI-RADS Category 2 (Benign)
BI-RADS Category 3 (Probably benign)
BI-RADS Category 4A (Low suspicious for malignancy)
BI-RADS Category 4B (Moderate suspicious for malignancy)
BI-RADS Category 4C (High suspicious for malignancy)
BI-RADS Category 5 (Highly suggestive of malignancy)
BI-RADS Category 6 (Known Biopsy-Proven Malignancy)

RECOMMENDATION (choose as applicable):
- Routine screening mammography if unchanged breast self-exam, monthly
- Suggest 6 months follow up complete study if unchanged breast self-exam, monthly and breast specialist surgeon consultation
- Suggested 6 months follow up with ultrasound breast if unchanged breast self-exam, monthly and breast specialist surgeon consultation
- Ultrasound-guide core needle biopsy and breast specialist surgeon consultation
- Stereotactic guide core breast biopsy and breast specialist surgeon consultation
- Vacuum-assisted breast biopsy with ultrasound-guide/stereotactic guide and breast specialist surgeon consultation
- Excision mass and breast specialist surgeon consultation

NOTES: False negative rate of mammography is approximately 10-15%. Management of palpable abnormality must be based on clinical consideration.`}}},us:{kub:{"Ultrasound of KUB (Emergency)":{history:``,technique:``,comparison:`None.`,findings:`RIGHT KIDNEY: Renal length = cm. Parenchymal thickness = cm. No stone, hydronephrosis or mass.

LEFT KIDNEY: Renal length = cm. Parenchymal thickness = cm. No stone, hydronephrosis or mass.

BLADDER: Well distended bladder. No stone, wall thickening or mass.

UTERUS: Normal.

ADNEXAE: No mass.

AORTA: Normal diameter.

OTHERS: Normal.`,impression:`This is a PRELIMINARY report, pending finalization by an attending radiologist.

-

-

-`},"Ultrasound of KUB":{history:``,technique:``,comparison:`None.`,findings:`RIGHT KIDNEY: Renal length = 9.2 cm. Cortical thickness = 1.3 cm. No hydronephrosis or mass. Mild increased echogenicity of renal parenchyma.

LEFT KIDNEY: Renal length = 9.1 cm. Cortical thickness = 1.1 cm. No hydronephrosis or mass. Normal echogenicity of renal parenchyma.

BLADDER: Collapse bladder.

PROSTATE: Cannot identified due to collapse bladder.

AORTA: Normal diameter.

OTHERS: No ascotes.

 Real-time gray-scale sonography revealed normal size and echogenictiy of liver parenchyma without definite space occupying lesion.

 No evidence of biliary system dilatation was noted. Visualized main portal vein was patent.

 Gallbladder had smooth thin wall wtihout evidence of gallstone.

 Both kidneys appeared normal in size, shape, axis, and renal parenchymal echogenicity without evidence of hydronephrosis or renal calculi.

 The urinary bladder appeared unremarkable.

 Limitation to evalaute pelvic organ due to bowel gas artifacts. No gross adnexal mass is found.

 No evidence of ascites or para-aortic lymphadenopathy was noted.`,impression:`- Normal size right kidney with mild increased parenchymal echogenicity, suspected renal parenchymal disease.

Whole abdomen`}},abdomen:{"Ultrasound of Whole Abdomen (Emergency)":{history:``,technique:``,comparison:`None.`,findings:`LIVER: Normal size and echogenicity of liver parenchyma. A 1.7x1.9 cm hyperechoic lesion at subcapsular region of right hepatic lobe, could be hemangioma.

GALLBLADDER/BILE DUCTS: Collapse gallbladder. No stone

Common duct diameter =0.4 cm. No IHD dilatation.

PANCREAS: No duct dilatation or mass at the visualized portion.

SPLEEN: Splenomegaly, size 15.2 cm. No visualized focal lesion.

KIDNEYS: Normal size and echogenicity. No hydronephrosis or mass.

BLADDER: Well distended bladder. No stone, wall thickening or mass.

PROSTATE: Size = 25 mL.

AORTA: Normal diameter.

OTHERS: No upper abdominal free fluid.

Visualized liver: Prominent left hepatic lobe, irregular liver surface, and heterogeneous echogenicity of liver parenchyma, suggested liver cirrhosis. No evidence of space taking lesion.

Biliary system: No dilatation.

Gallbladder: Smooth thin wall without gallstone.

Visualized pancreas: Unremarkable.

GI tract: Limitation of the US due to bowel gas artifact.

Visualized spleen: Unremarkable.

Both kidneys: Normal size and echogenicity of renal parenchyma. No hydronephrosis or obvious stone.

Others: No ascites or para-aortic lymphadenopathy.

Visualized liver: Normal-sized liver with smooth surface but diffuse homogenous increased echogenicity of the liver parenchyma that is consistent with fatty liver. No evidence of space taking lesion.

Biliary system: No dilatation.

Gallbladder: Smooth thin wall without gallstone.

Visualized pancreas: Unremarkable.

GI tract: Limitation of the US due to bowel gas artifact.

Visualized spleen: Unremarkable.

Both kidneys: Normal size and echogenicity of renal parenchyma. No hydronephrosis or obvious stone.

Others: No ascites or para-aortic lymphadenopathy.`,impression:`- A 1.7x1.9 cm hyperechoic lesion at subcapsular region of right hepatic lobe, could be hemangioma.

- Splenomegaly, size 15.2 cm. No visualized focal lesion.

Upper abdomen

- Liver cirrhosis without space taking lesion

Correlation with clinical context will be helpful.

- Fatty liver without space taking lesion

Correlation with clinical context will be helpful.`},"Ultrasound of Upper Abdomen (Emergency)":{history:``,technique:``,comparison:`None.`,findings:`LIVER: Normal size. No focal lesions.

GALLBLADDER/BILE DUCTS: Transverse diameter of gallbladder (mid-wall to mid-wall) = ... cm. No stone, wall thickening or mass. Common duct diameter = mm. No IHD dilatation.

SONOGRAPHIC MURPHY: Positive / Negative / Not assessable

PSV: Cystic artery = ... cm/s. Hepatic artery = ... cm/s.

PANCREAS: No duct dilatation or mass at the visualized portion.

SPLEEN: Normal size.

KIDNEYS: Right and left renal lengths are ..., ..., respectively. No stone, hydronephrosis or mass.

AORTA: Normal diameter.

OTHERS: No upper abdominal free fluid.`,impression:`This is a PRELIMINARY report, pending finalization by an attending radiologist.

(Please refer to "subtemplate acute chole")

-

-

-`},"Ultrasound of Upper Abdomen":{history:``,technique:``,comparison:`None.`,findings:`Real time sonography shows small-sized right hepatic lobe with compensatory hypertrophy of left hepatic lobe and caudate lobe. Liver shows coarse, heterogeneous parenchymal echogenicity with mild nodular liver surface. These are compatible with liver cirrhosis.

 No definite liver mass/abscess.

 IHD and common duct dilatation is visualized. Common duct diameter up to 1.8 cm.

 Portal vein is patent.

 Gallbladder has marked wall thickening, measured 5.5 mm without distension. Sonographic Murphy sign negative. There is a hyperechoic lesion in CBD without vascular flow and no posterior acoustic shadow, suspected mass or CBD stone. Further CT is suggested.

 Normal size spleen with a 1.1 cm hyperechoic lesion with posterior acoustic shadow, could be calcification.

 Visualized pancreas is unremarkable.

 Both kidneys have normal size, measured about 10.8x5.8 cm and 9.5x4.9 cm in left and right-sided, respectively. Diffused increased echogenicity of both kidneys with multiple cystic lesions, some have internal septation and calcification, size up to 1.9 cm. No hydronephrosis.

 Moderate amount of ascites is found.

 Bilateral pleural effusion.`,impression:`- IHD and common duct dilatation is visualized. Common duct diameter up to 1.8 cm. There is a hyperechoic lesion in CBD without vascular flow and no posterior acoustic shadow, suspected mass or CBD stone. Further CT is suggested.

- Gallbladder has marked wall thickening, measured 5.5 mm. No evidence of acute cholecystitis.

- Liver cirrhosis without definite liver mass/abscess.

- A 1.1 cm hyperechoic lesion with posterior acoustic shadow at spleen, could be calcification.

- Bilateral renal parenchymal disease with multiple cystic lesions, some have internal septation and calcification, size up to 1.9 cm.

- Moderate amount of ascites is found.

- Bilateral pleural effusion.

Neck`}},neck:{"Ultrasound of Neck":{history:``,technique:`Grey-scale US of the neck with screening color Doppler of neck vessels.`,comparison:`None.`,findings:`SURGICAL BED/DRAINS: ....

LYMPH NODES: No enlargement.

THYROID: Right and left lobes are ...cm, respectively. The isthmus is ... mm in thickness. No nodules or mass.

PAROTID: Normal.

SUBMANDIBULAR GLANDS: Normal.

VESSELS: Screening color Doppler shows normal flow in bilateral IJVs, CCAs and ICAs. No significant narrowing of these vessels.

OTHERS: ...`,impression:`-

-`}},breast:{"Ultrasound of Breast":{history:`Asymptomatic`,studyType:`Ultrasound Breasts Both Sides`,technique:``,comparison:`None.`,findings:`Background echotexture: Homogeneous background echotexture-fibrogladular. Cyst: A few simple cysts at both breasts, benign. Mass: A few well-defined oval hypoechoic nodules at both breasts, probably benign at
- M1 =
- M2 =
Architectural disruption: Not detectable. Others: No significant abnormal axillary lymphadenopathy.`,impression:`OVERALL ASSESSMENT: BI-RADS Category 3 (Probably benign)

RECOMMENDATION: Suggest 6 months follow up complete study if unchanged breast self-exam, monthly and breast specialist surgeon consultation. Suggested 6 months follow up with ultrasound breast if unchanged breast self-exam, monthly and breast specialist surgeon consultation. Routine screening mammography if unchanged breast self-exam, monthly.

NOTES: Low sensitivity in detect ductal carcinoma in situ (DCIS). Management of palpable abnormality must be based on clinical consideration.`}}},xray:{chest:{"Chest PA (Normal)":{history:``,studyType:`Chest Radiography PA`,technique:``,comparison:`None.`,findings:`No active pulmonary infiltration, nodule, or mass is noted.

No pneumothorax or pleural effusion is shown.

No cardiomegaly is observed.

Bony thorax appears intact.`,impression:`No active pulmonary disease.`},"Chest PA (Interstitial Opacities, Follow-up)":{history:``,studyType:`Chest Radiography PA`,technique:``,comparison:`Prior CXR.`,findings:`Suboptimal inspiration.

No interval change of diffuse interstitial opacities at both lungs.

No change of blunt bilateral costophrenic angle, suspected pleural thickening.

No change of flattening of bilateral hemidiaphragm.

No active pulmonary infiltration, nodule, or mass is noted.

No pneumothorax is shown.

Bony thorax appears intact.`,impression:`No interval change of diffuse interstitial opacities at both lungs.

No change of blunt bilateral costophrenic angle, suspected pleural thickening.

No change of flattening of bilateral hemidiaphragm.`}}}},oc={"ct.abdomen":`LIVER: Normal size.(HEPATIC VESSELS: Patent.(GALLBLADDER/BILE DUCTS: No wall thickening, calcified gallstones or pericholecystic fat stranding.(No duct dilatation.(SPLEEN: Normal size.(PANCREAS: No stone or duct dilatation.(ADRENALS: No nodule.(KIDNEYS/URETERS: No stone, hydronephrosis or solid mass.(PELVIC ORGANS: Normal.(GI TRACT: No distension or wall thickening.(PERITONEUM/RETROPERITONEUM: No free fluid, fluid collection or free air.(OTHER VESSELS: Normal.(LYMPH NODES: No enlargement.(The study reveals normal-sized liver with homogeneous density of liver parenchyma.(No definite liver mass or biliary dilatation is found.(Portal vein and hepatic veins are patent.(Gallbladder has smooth, thin wall with no detectable opaque stone.(Pancreas and bilateral adrenal glands are unremarkable.(Bilateral kidneys have normal size with symmetrical delayed nephrogram.(No stone, mass, or hydronephrosis.(Stomach, small bowels and colon appear unremarkable.(Collapse urinary bladder without detectable stone.(No gross adnexal mass is observed.(No ascites or peritoneal nodules.(No pulmonary nodule or infiltration of visualized both lower lungs.(Degenerative change of visualized spine without gross bony destruction.(No GI tract or liver metastasis.(No IHD and CBD dilatation.(Spleen and bilateral adrenal glands are unremarkable.(Bilateral kidneys have normal size with symmetrical enhancement without stone or hydronephrosis.(No dilatation of stomach, small bowels and colon.(Uterus and both adnexas are unremarkable.(No intraabdominal collection.(Surgical scar at midline abdomen without collection.(Degenerative changes of visualized spines without gross bony destructions.(No active pulmonary infiltration or nodules.(Normal size of both kidneys with symmetrical enhancement and excretory function.(No renal mass or hydronephrosis/hydroureter of right kidney.(The urinary bladder has a smooth thin wall without mass or stone.(Liver shows normal size, smooth surface, and normal parenchymal attenuation.(No other liver masses are observed.(Portal veins and hepatic veins appear patent.(No IHD or CBD dilatation is found.(Pancreas and both adrenal glands appear unremarkable.(No significant change in size of three enhancing nodules at anterior abdominal wall.(No ascites is noted.(Spondylosis without gross lytic lesion.(No significant change of three anterior abdominal wall enhancing nodules.(The study revealed normal-sized liver with homogeneous density of liver parenchyma.(Spleen, pancreas, and bilateral adrenal glands are unremarkable.(Bilateral kidneys have normal size with symmetrical enhancement without hydronephrosis.(No opaque stone in left kidney.(Stomach, small bowels and colon appear unremarkable.A few diverticula at sigmoid colon is also noted.(No enlargement of seminal vesicles.(No gross ascites or peritoneal nodule.(No biliary dilatation is found.(Gallbladder has smooth, thin wall without opaque gallstone.(Spleen, pancreas are unremarkable.(Stomach and visualized small bowels are unremarkable.(No peritoneal nodule is noted.(No gross pulmonary mass is observed.(No abnormal bowel dilatation.(No gross mass at the surgical bed.(No gross colonic mass or wall thickening.(No rim enhancing fluid collection is observed.(Normal-sized liver, smooth liver surface with homogeneous density of liver parenchyma.(Spleen appears normal in size.(No enhancing lesion.(Right adrenal gland is unremarkable.(Normal size and symmetrical enhancement of both kidneys.(No stone or hydronephrosis.(Stomach, small bowels and the rest of colon appear unremarkable.(The urinary bladder has a partially distended, smooth, thin wall without detectable stone.(Bilateral seminal vesicles are unremarkable.(No peritoneal nodule or significant intraabdominal lymphadenopathy.(Degenerative change of visualized spine without bony destruction is detected.(HEPATIC VV: Patent.(GALLBLADDER/BILE DUCTS: Collapse gallbladder without calcified gallstones.(No wall thickening, no pericholecystic fat stranding.(No CBD dilatation.(ADRENALS: Unremarkable.(KIDNEYS: Normal size with symmetrical enhancement of both kidneys.(The right ureter is unremarkable.(No abdominal wall defect is seen.(No gross pulmonary mass.(DIAPHRAGM: Normal position.(MEDIASTINUM: Normal visualized thyroid.(CHEST WALL/AXILLA: No mass.(Intact vaginal stump.(There is no IHD dilatation.(The gallbladder shows no gallstone.(The pancreas, spleen and both adrenal glands are not remarkable.(Colonic diverticula are seen.The stomach and the rest of bowel loops are not remarkable.(No ascites or intraabdominal collection are noted.(No significant change of intraabdominal lymphadenopathy.(No significant change of posterior basal segment of LLL nodule.(Collapsed gallbladder with adenomyomatosis with no detectable opaque stone.(No ascites or peritoneal nodules are found.(The rest of bowel loops are not distended without definite abnormal bowel wall thickening.(Visualized liver shows homogeneous attenuation of liver parenchyma without definite space taking lesion.(No significant abdominal lymphadenopathy or peritoneal nodule.(Visualized aorta and its branches are unremarkable.(Visualized spine show no gross bony destruction.`.split(`(`),"ct.kidney":[`Bilateral kidneys have normal size, symmetrical enhancement and normal excretory function.`,`No stone or hydronephrosis are detected.`,`Portal vein and hepatic veins are patent.`,`No biliary dilatation is detected.`,`Gallbladder has smooth, thin walls with no detectable opaque stone.`,`Prominent size of spleen without focal lesion.`,`Bilateral adrenal glands are unremarkable.`,`Stomach and visualized bowels are unremarkable.`,`No ascites, peritoneal nodule, or significant intraabdominal lymphadenopathy is found.`,`No bony destruction.`],"ct.liver":[`Portal vein and hepatic veins are patent.`,`Distended gallbladder with tiny gallstone without wall thickening or pericholecystic fat stranding.`,`Spleen, pancreas and adrenal glands are unremarkable.`,`No stone, hydronephrosis or solid mass of both kidneys.`,`No significant intraabdominal lymphadenopathy.`,`No gross bony destruction.`,`No gross pulmonary mass is observed.`,`No significant change of multiple liver cysts.`],"ct.chest":`No definite pulmonary nodule or infiltration is detected.(Trachea and main bronchi are patent.(Heart and great vessels are unremarkable.(No significant mediastinal, supraclavicular, or axillary lymphadenopathy is shown.(The visualized thyroid gland is unremarkable.(The visualized liver shows normal parenchymal attenuation.(Bilateral adrenal glands appear normal.(Bony thorax is intact.(LUNGS/MAJOR AIRWAYS: Normal lung volumes.(PLEURA: No effusion or pneumothorax.(DIAPHRAGM: Normal position.(HEART/PERICARDIUM/GREAT VESSELS: Normal heart size.(No pericardial effusion.(MEDIASTINUM: Normal visualized thyroid.(No lymph node enlargement.(CHEST WALL/AXILLA: No mass.(BONES: No suspicious lytic lesion.(INCLUDED UPPER ABDOMEN: Unremarkable on unenhanced scan.(INCLUDED UPPER ABDOMEN: Normal allowing scan technique and phase of contrast enhancement.(No gross mass at surgical bed.(No definite new pulmonary nodule.(No cardiomegaly with atherosclerotic changed aorta.(Normal size visualized thyroid gland with a few calcifications.(No significant change of multiple pulmonary and subpleural nodules at both lungs.(No new suspicious lung nodule.(No change of minimal right pleural effusion.(Trachea and both main bronchi are patent.(Normal-sized thyroid gland.(Axillary and right supraclavicular nodes are unremarkable.(Normal heart size.(No coronary calcification.(Normal-sized bilateral adrenal glands.(Post RUL lobectomy with no gross mass at surgical bed.(Post tumor removal of right sided anterior mediastinum with no gross local recurrence.(No detectable mass at the stump.(No new suspicious nodule is detected.(No significant change of bilateral apical pleural thickening.(The visualized thyroid gland is normal size.(Degenerative changes of visualized spine without gross bony destruction.(No supraclavicular or axillary lymphadenopathy is shown.(No pleural effusion.(No abnormal density or space occupying lesions in liver parenchyma.(Gallbladder and biliary system show no abnormal dilatation or stone.(Spleen, pancreas, adrenal glands and both visualized kidneys are unremarkable.(No ascites or para-aortic lymphadenopathy.(No bony destruction.(No gross mass at left breast is seen.(No significant change of a few subcentrimeter supraclavicular nodes.(No axillary and internal mammary lymphadenopathy is detected.(No pleural effusion is found.(Visualized thyroid gland is unremarkable.(No esophageal dilatation or gross mass is noted.(No bony destruction is detected.(No definite liver mass is found.(Both adrenal glands are unremarkable.(Central airways: Patent airway and bilateral main bronchi.(Pleura: No pneumothorax or pleural effusion.(Unremarkable thyroid gland.(Bones: No suspicious lytic lesions.(No acute cholecystitis.(No significant supraclavicular or axillary lymphadenopathy is shown.(No dilatation of great vessels.(No mass at chest wall.(Mild degenerative changes of spines without destruction.(No significant lymphadenopathy.`.split(`(`),"ct.chest_abdomen":`Trachea and main bronchi are patent.(No pleural thickening or pleural nodularity.(Liver shows normal parenchymal attenuation.(Spleen and bilateral right adrenal gland appear unremarkable.(No intraabdominal lymphadenopathy.(No gross bony destruction is noted.(No demonstrable gross enhancing mass at anastomotic site.(No pleural effusion is demonstrated.(Trachea and main bronchus are normal.(Heart and great vessels appear unremarkable.(No pericardial effusion is noted.(No significant mediastinal lymphadenopathy is seen.(Bony thorax is intact.(No significant changes of several small solid pulmonary nodules at both lungs.(Heart and great vessels are unremarkable.(The visualized thyroid gland shows unremarkable.(The visualized liver shows normal size with smooth surface and normal parenchymal attenuation.(No gross liver mass.(Bilateral adrenal glands appear normal.(No pulmonary metastasis.(No enlarged mediastinal LN.(No newly detected pulmonary nodule or infiltration is noted.(No pneumothorax or pleural effusion is seen.(Trachea and both main bronchi are patent.(No pericardial effusion is seen.(No change of several subcentimeter mediastinal, supraclavicular and axilla lymphadenopathy.(No other significant lymphadenopathy is observed.(No bony destruction is detected.(No suspicious pulmonary.(No significant supraclavicular or axillary lymphadenopathy is shown.(Normal size thyroid gland.(No change of osteoporotic compression fracture at T12 levels with vertebroplasty.(No suspicious lytic lesion.(No new solid pulmonary nodule or ground glass opacity.(No pleural effusion.(Trachea and main bronchus are unremarkable.(No significant mediastinal lymphadenopathy is found.(Normal heart size without pericardial effusion.(Pulmonary trunk is not dilated.(No significant changed a 0.6-cm calcified right thyroid nodule.(No gross adrenal mass is noted.(No active pulmonary infiltration, nodule, or mass is noted.(No pneumothorax or pleural effusion is shown.(No cardiomegaly is observed.(Bony thorax appears intact.(No interval change of diffuse interstitial opacities at both lungs.(No change of blunt bilateral costophrenic angle, suspected pleural thickening.(No change of flattening of bilateral hemidiaphragm.(No pneumothorax is shown.`.split(`(`),"ct.angio_aorta":[`The dissections do not extend to the ascending aorta or visceral branch of abdominal aorta.`,`Brachiocephalic trunk, both common carotid and both subclavian arteries are patent.`,`Patent along left common and bilateral CFAs, EIAs, and IIAs.`,`Normal-sized liver with homogeneous density of liver parenchyma.`,`Spleen, pancreas, and right adrenal glands are unremarkable.`,`Stomach, small bowels and colon appear unremarkable.`,`Urinary bladder has smooth, thin wall without detectable stone.`,`Uterus and both adnexa are unremarkable.`,`Unremarkable thyroid gland.`,`No significant mediastinal lymphadenopathy.`,`No extending into the ascending aorta or visceral branch of abdominal aorta.`,`No organ malperfusion.`,`No gross calcification along upper thoracic course of internal mammary arteries (IMAs).`,`Dense calcification at ostium of celiac, SMA, and both renal arteries without aneurysmal dilatation.`,`No enlargement of the visualized thyroid gland.`,`No pleural effusion or pneumothorax.`,`No pleural bullae or emphysema is noted.`,`Normal size of liver.`,`No biliary tract dilatation.`,`Normal size spleen and both adrenal glands.`,`Degenerative change of visualized spine without destructive bone lesion.`,`No gross calcification along upper thoracic course of bilateral IMAs.`,`Atherosclerotic change along thoracic and abdominal aorta and its branches without aneurysmal change.`,`The study reveals patent total arch replacement with frozen elephant trunk.`,`Multiple sternal wires are intact.`,`Cardiomegaly without pericardial effusion.`,`Unremarkable visualized thyroid gland.`,`Distended gallbladder without calcified stone.`,`No CBD or IHD dilatation.`,`Normal spleen, pancreas and bilateral adrenal glands.`,`Unremarkable stomach and bowels, no ascites.`,`No pathologic lymph nodes in abdomen.`,`Degenerative changes of spines, no worrisome bone lesions.`,`Patent total arch replacement with frozen elephant trunk.`,`Patent ostium of the celiac trunk, SMA, IMA and both renal arteries.`,`Normal-sized liver without definite liver mass or biliary dilatation is found.`,`Spleen, pancreas, bilateral kidneys and bilateral adrenal glands is unremarkable.`,`Not well distended urinary bladder.`,`No pathologic lymph nodes in their chest and abdomen.`,`Intact bony structures.`,`Romanesque arch appearance with normal branching of the aortic arch.`],"ct.angio_carotid_brain":[`No intra- or extra-axial hemorrhage or hemorrhagic transform is detected.`,`Normal attenuation of brain parenchyma without definite space occupying lesions.`,`No large recent territorial infarction is detected.`,`No shifting of midline structures is seen.`,`The ventricular system is not dilated.`,`Posterior fossa appears unremarkable.`,`Both orbits, the visualized PNSs, and both mastoid air cells appear unremarkable.`,`Bony calvarium is intact.`],"ct.angio_extremities":[`No aneurysm, or dissection.`,`Celiac trunk, SMA, IMA, and bilateral renal arteries are well-opacified, no significant stenosis.`,`Popliteal artery: Patent.`,`Tibioperoneal trunk: Patent.`,`ATA: Multifoci calcified plaque without significant stenosis along ATA.`,`Peroneal artery: Patent.`,`Average heart size, no pericardial effusion.`,`No active contrast extravasation is seen.`,`No pleural effusion.`,`No focal liver lesion.`,`Pancreas and both adrenal glands appear unremarkable.`,`Normal size and enhancement of both kidneys.`,`No stones or hydronephrosis.`,`No ascites, no significant lymph nodes.`,`Normal distended bladder.`,`Uterus and both adnexa are unremarkable.`,`No significant supraclavicular, axillary or intra-abdominal lymphadenopathy.`,`No pleural effusion is seen.`,`Normal size liver without focal lesion.`,`No IHD or CBD dilatation.`,`Degenerative change of spine without gross bony destruction.`,`Posterior descending artery (PDA): No dilatation or stenosis.`,`Posterolateral branch (PL): No dilatation or stenosis.`,`Aortic valve and mitral valve are unremarkable.`,`No pericardial effusion.`,`Unremarkable bony structure.`,`Left main (LM): No stenosis.`,`Left anterior descending artery (LAD): No stenosis.`,`Diagonal branch (DG): No stenosis.`,`Left circumflex artery (LCx): No stenosis.`,`Obtuse marginal artery (OM): No stenosis.`,`Right coronary artery (RCA): No stenosis.`,`Posterior descending artery (PDA): No stenosis.`,`Posterolateral branch (PL): No stenosis.`,`Interatrial and interventricular septum are intact.`,`The visualized lung shows no pulmonary nodules or infiltration.`,`Visualized trachea and main bronchi are patent.`,`No calcified mitral annulus.`,`No pulmonary nodules.`,`The visualized upper abdomen shows unremarkable.`,`Intact bony structure..`,`CENTRAL VEINS: Patent SVC, Bilateral IJVs and bilateral brachocephalic veins.`,`Arteries: Patent entire arterial inflow course from the left subclavian artery origin to brachial artery.`,`Veins: Patent subclavian, axillary, brachial, and basilic veins.`,`No significant stenosis of the entering radial artery.`,`Arteries: Patent in the entire course, from the right subclavian artery to brachial artery.`,`Patent radial and ulnar arteries.`,`No infraction, hemorrhage, or gross focal lesion of brain parenchyma.`,`Patent intracranial, CCAs, cervical ICAs and VAs.`,`Patent bilateral internal jugular veins.`,`No gross nasopharyngeal mass.`,`No gross mass in the aerodigestive tract, no significant lymph nodes.`,`Patent of both calf arteries without active contrast extravasation.`,`No stenosis of LM, LADn LCx, and RCA..`,`No central venous thrombosis.`,`No significant stenosis of the entering arteries.`,`DIAPHRAGM: Normal position.`,`AORTA: No aortic or aortic branch injury.`,`HEART/MEDIASTINUM: No pericardial fluid.`,`SOLID ORGANS: No injuries of the liver, spleen, pancreas, kidneys or adrenal glands.`,`GB/BILE DUCTS: No dilatation.`,`NON-AORTIC VESSELS: No arterial dissection, contrast extravasation, or aneurysm.`,`No venous thrombosis along right upper extremity.`,`No active contrast extravasation.`,`SPINE: No fracture.`,`No aortic or aortic branch injury.`,`No solid abdominal organs, bowel wall thickening or extraluminal air.`,`No TLS spinal fractures.`],"mri.angio_aorta":[`Also patent left aorto-axillary bypass graft.`,`Celiac trunk, SMA and bilateral renal arteries originate from true lumen, without significant stenosis.`,`No significant stenosis.`,`Bilateral CIAs show no aneurysmal dilatation or significant stenosis.`,`No pericardial effusion or pleural effusion.`,`Spleen, pancreas and bilateral adrenal glands are unremarkable.`,`Normal size and symmetrical enhancement of both kidneys.`,`No hydronephrosis.`,`No abnormal enhancing marrow replacing lesion.`,`No gross bony destruction.`],"mri.spine":[`No bone marrow edema is observed.`,`No blooming artifact is seen on GRE.`,`C1/2: No central canal or neural foramen stenosis.`,`No central canal stenosis.`,`Volume loss of the central canal without SI changed on T2W is noted.`,`The cervicomedullary junction and visualized posterior fossa appear unremarkable.`,`No T-spine fracture.`,`No central spinal canal stenosis or cord compression along T spine level.`,`No L-spine fracture.`,`C1/2 and C2/3: No central canal or neural foramen stenosis.`,`C3/4: Mild posterior disc bulging without central canal or bilateral neural foramen stenosis.`,`C7/L1: Mild posterior disc bulging without mild central canal stenosis.`,`No bilateral neural foramen stenosis.`,`L1/2: Mild posterior disc bulging without spinal canal stenosis.`,`No traversing nerve root compression.`,`L2/L3: Posterior disc bulging without spinal canal stenosis.`,`Right facet hypertrophy without traversing nerve root compression.`,`No spinal canal stenosis.`,`No intrinsic cord lesions.`,`Both SI joints are unremarkable.`,`No new enhancement or other cystic lesion in the spinal cord.`,`The rest of the spinal cord shows unremarkable.`,`No leptomeningeal enhancement.`,`No central canal or neural foramen stenosis.`,`Vertebral marrow is normal SI without abnormal enhancement.`,`Intervertebral discs appear unremarkable.`,`No pre-or paravertebral collection is detected.`,`No marrow replacing lesions along cervical spine.`,`C7/T1: Mild posterior disc protrusion without central canal stenosis.`,`No neural foramen stenosis.`,`No spondylolisthesis is seen.`,`No abnormal marrow SI along C-spine.`,`C2/3: No central canal or neural foramen stenosis.`,`C6/7: Mild posterior disc bulging without central canal stenosis.`,`C7/T1: No central canal or neural foramen stenosis.`,`Normal thoracic kyphosis.`,`No spinal canal stenosis or cord compression along T spinal level.`,`No enhancing lesion of thecal sac or leptomeningeal enhancement.`,`The rest of brain parenchyma shows no enhancing mass.`,`Ventricular system is not dilated.`,`No shifting of midline structure is noted.`,`No restricted diffusion is noted.`,`Cerebellar, brainstem and pituitary gland are unremarkable.`,`Orbits, the rest of PNSs and mastoid antrums are unremarkable.`,`Cervical spine shows normal lordotic curve.`,`Spinal cord shows no abnormal signal intensity.`,`No intradural extramedullary lesion is seen.`,`No central canal and neural foramen stenosis along the rest of cervical spines.`,`Thoracic and lumbar spondylosis without spinal cord compression.`,`No abnormal enhancing lesion, fracture, or dislocation is seen.`,`TL spinal cord shows no abnormal signal intensity.`,`The remaining spinal cord shows normal size and signal intensity.`,`No spinal canal stenosis or neural foraminal narrowing of thoracic spine is seen.`,`The paravertebral muscles and both SI joints are unremarkable.`,`No central spinal canal stenosis or cord compression along L spine level.`,`Posterior disc bulging without spinal canal stenosis along L spine.`,`The study reveals normal Thoracic kyphotic curve.`,`No spondylolisthesis, scoliosis, fracture, or dislocation.`,`The bone marrow signal intensity appears unremarkable with age.`,`No spinal leptomeningeal enhancement.`,`No focal restricted diffusion in visualized spinal cord to indicate acute infarction.`,`No other spinal canal stenosis or neural foraminal narrowing of thoracic spine is seen.`,`The rest of the spinal canal shows no stenosis or neural foraminal narrowing of thoracic spine.`,`No extramedullary compression is noted.`,`Loss of cervical lordosis with normal lumbar lordosis curvature.`,`Posterior disc bulging at L3/4, and L4/5 without spinal canal stenosis at L4/5 level.`,`No abnormal intrinsic cord SI.`,`The visualized brain is unremarkable.`,`Normal thoracic kyphotic and lumbar lordotic curvature of thoracolumbar spine.`,`No other abnormal signal intensity or enhancement along thoracolumbar spine and spinal cord.`,`Normal water disc signal intensity (SI) with preserved disc height at other disc levels.`,`No spinal canal or neural foramen stenosis along thoracolumbar spine.`,`Bilateral sacroiliac joints are unremarkable.`,`No scoliosis is noted.`,`No longer seen epidural abscess.`,`Normal vertebral height is noted.`,`Visualized spinal cord appears normal SI.`,`The rest of the spinal canal and neural foramen are unremarkable.`,`No definite collection or abscess at paravertebral and psoas muscles.`,`No vertebral body destruction is observed.`,`No gross spinal canal stenosis or nerve root compression.`,`Unremarkable both neural foramina.`,`Central canal and left recess are unremarkable.`,`Central canal and lateral recess are unremarkable.`,`No gross spinal canal and lateral recess stenosis.`,`No obvious paraspinal soft tissue mass is shown.`,`The SI joints are unremarkable, bilaterally.`,`Mild posterior disc bulging of C4/5, C5/6, and C6/7 without central canal stenosis.`,`No central canal stenosis, significant posterior disc bulging, or neural foramen stenosis of T spine.`,`No abnormal marrow SI.`,`No central canal stenosis of L spine.`,`Visualized spinal cord shows normal signal intensity.`,`L1-2: No spinal canal stenosis, ligamentum flavum and bilateral facet joints hypertrophy.`,`No neural foramen or lateral recess stenosis.`,`L2-3: No spinal canal stenosis, ligamentum flavum and bilateral facet joints hypertrophy.`,`Mild narrowing of bilateral lateral recesses without nerve root compression.`,`Bilateral SI joints appear unremarkable.`,`Vertebral marrow signal intensity appears unremarkable.`,`L1-2, No significant spinal canal stenosis or nerve root compression is noted.`,`Both neural foramen are unremarkable.`,`No significant spinal canal stenosis or right nerve root compression is noted.`,`Right neural foramen and right lateral recess are unremarkable.`,`Visualized conus medullaris appears unremarkable.`,`Paravertebral muscles and both SI joints are unremarkable.`,`No compression fracture is noted.`,`Normal water signal intensity along LS-spine with narrowing disc space of T10-L1, L2-3, and L4-5 levels.`,`Normal cord SI with central cord dilatation at T10 to L3 level.`,`T12-L1, Fusion of both pedicle and lamina without significant spinal canal stenosis.`,`Mild stenosis of right neural foramen, No left neural foramen.`,`No significant spinal canal stenosis or nerve root compression is noted.`,`L3-4, No significant spinal canal stenosis or nerve root compression is noted.`,`L4-5, No significant spinal canal stenosis or nerve root compression is noted.`,`L5-S1, No significant spinal canal stenosis or nerve root compression is noted.`,`No epidural or intradural mass is seen.`,`Normal water SI of CT disc.`,`No abnormal cord SI.`,`No neural foramen stenosis of T spine.`,`Unremarkable visualized brain and spinal cord.`,`No left neural foramen of T12-L1.`,`No enhancement or focal mass at hippocampal regions.`,`No enhancing lesion at suprasellar and pituitary stalk.`,`No demonstrable newly abnormal enhancing lesion/mass or leptomeningeal enhancement.`,`The rest of brain show normal signal intensities in grey and white matter.`,`No dilatation of ventricular system.`,`The pituitary gland is normal size, signal intensity and posterior bright spot.`,`Both orbits and the rest of PNS appeared unremarkable.`,`The rest of bony calvarium appear intact.`,`No longer seen epidural mass at anterior to thecal sac at T7-T8 level.`,`No demonstrable abnormal high SI of spinal cord level to indicate spinal cord edema.`,`No leptomeningeal enhancement or new enhancing mass.`,`Unremarkable signal intensity of the intervertebral discs.`,`No abnormal mass at the visualized prevertebral and paravertebral area.`,`No abnormal marrow and spinal cord SI.`,`No intramedullary lesion.`,`No abnormal mass formation.`,`The visualized brain appears unremarkable.`,`Normal lordotic curvature of cervical and lumbar spine.`,`C-T-L spine: C-T-L-S Vertebrae are in normal height.`,`No demonstrable fracture nor spondylolisthesis.`,`T- spine: Normal signal T2W of nucleus pulposus in all thoracic discs.`,`L- spine: Normal signal T2W at lumbar disc signal at L1-2, L2-3, L3-4, L4-5 and L5-S1 levels.`,`No congenital anomaly of cord.`,`No abnormal spinal cord SI.`,`No demonstrable spinal cord lesion.`,`Unremarkable spinal canal and neural foramen.`,`No other nodular enhancement or enhancing mass at surgical bed.`,`No significant change of gliotic change along previously inserted right frontal approached VP shunt.`,`No new enhancing lesion at the surgical bed or remaining brain parenchyma.`,`No definite leptomeningeal enhancement.`,`No extra-axial fluid collection.`,`No low lying cerebellar tonsil or ascending transtentorial herniation is demonstrated.`,`No shifting of midline structure is seen.`,`No abnormal restricted diffusion lesion.`,`The pituitary gland has normal size and normal posterior bright spot.`,`Both orbits and the rest of the PNSs are unremarkable.`,`The bony calvarium shows normal signal intensity.`,`No significant change in degree of communicating hydrocephalus, Evan's index of 0.33.`],"mri.brain":[`The study reveals no focal mass, acute infarction, intracranial hemorrhage or extra-axial collection.`,`No gross structural malformation.`,`No low lying tonsil.`,`No abnormal enhancing lesion or leptomeningeal enhancement.`,`No brain herniation or shifting of midline structure.`,`The brain stem and cerebellum appear unremarkable.`,`Pituitary gland and posterior bright spot are unremarkable.`,`Both orbits, the visualized PNSs and both mastoid air cells appear unremarkable.`,`Bony calvarium shows normal signal intensity.`,`No acute infarction, intracranial enhancing lesion or abnormal leptomeningeal enhancement.`,`There is no dilatation of ventricular system, brain herniation or shifting of midline structure.`,`PNSs and both orbits appear unremarkable.`,`Bony calvarium show normal signal intensity.`,`No bilateral proptosis is noted.`,`Lens and eyeballs are unremarkable, bilaterally.`,`Bilateral EOMs show normal size and course.`,`Both lacrimal glands are unremarkable.`,`The rest of brain parenchyma shows no focal mass, microbleeds, or restricted diffusion.`,`No dilatation of ventricular system, brain herniation, nor shifting of midline structure.`,`No extra-axial fluid collection is noted.`,`The rest of visualized PNS and both mastoid air cells are unremarkable.`,`Bony calvarium shows normal SI.`,`No significant change in size of bilateral optic nerve gliomas.`,`No dilatation of the ventricular system.`,`No brain herniation nor shifting of midline structure.`,`The brainstem and cerebellum appear unremarkable.`,`Pituitary gland and posterior bright spot is unremarkable.`,`Bilateral orbits appear unremarkable.`,`The rest of PNSs are unremarkable.`,`Clear left mastoid region.`,`No mass effect on the optic chiasm and prechiasmatic optic nerves is detected.`,`No definite invasion to the sphenoid sinus is noted.`,`Cavernous sinus is not involved.`,`No intra-axial hemorrhage or extra-axial collection is detected.`,`Both hippocampi show normal signal intensity and internal architecture.`,`No midline structures shifting is seen.`,`The ventricles are not dilated.`,`Both orbits and the rest of visualized PNSs and bilateral mastoid air cells are clear.`,`No mass effect on the optic chiasm and prechiasmatic optic nerves.`,`Cannot identify normal pituitary gland, pituitary posterior bright spot, and pituitary stalk.`,`No other enhancing intraaxial space taking lesion is seen.`,`Normal size of ventricle.`,`No abnormal enhancing lesion of the brain is seen.`,`Both orbits and the rest of visible paranasal sinuses are clear.`,`Normal position of posterior bright spot.`,`Normal size and appearance of pituitary stalk.`,`No demonstrable suprasellar or pineal mass is noted.`,`No structural abnormality of the brain is observed.`,`Both orbits, the rest of PNSs and both mastoid air cells are unremarkable.`,`No demonstrable enhancing mass along hypothalamic-pituitary axis and pineal gland.`,`No demonstrable other area of abnormal enhancing lesion or leptomeningeal enhancement.`,`Pituitary gland shows normal in size.`,`Normal posterior pituitary bright spot on T1W is noted.`,`Ventricular system is not dilated.`,`No shifting of midline structure or brain herniation is seen.`,`Both orbits, visualized PNS and bilateral mastoid air cells appear unremarkable.`,`The rest of bony structures is intact.`,`No new abnormal enhancing lesions or leptomeningeal enhancement.`,`No definite new enhancing lesion, leptomeningeal enhancement, or subependymal seeding.`,`No acute or interval infarction, new intracranial hemorrhage, or extraaxial collection.`,`No abnormal restricted diffusion.`,`No shifting of midline structure or other type of brain herniation.`,`The rest of ventricular system is not dilated.`,`Cerebral venous system is unremarkable.`,`Normal height of pituitary gland with preserved posterior bright spot.`,`Left orbit, the rest of visualized PNSs, and right mastoid regions are unremarkable.`,`The rest of brain exhibits normal grey and white matter differentiation without space taking lesion.`,`No other abnormal enhancing lesion within the brain parenchyma.`,`No abnormal leptomeningeal or dural enhancement is seen.`,`The ventricular system is not dilated with some distortion of shape.`,`No extra-axial fluid collection is seen.`,`Both orbits and paranasal sinuses are unremarkable.`,`Cannot identify normal pituitary gland and pituitary posterior bright spot.`,`Both orbits, the rest of visible paranasal sinuses, and both mastoid air cells are clear.`,`No change of few CSF SI lesions at right parietal white matter are suspicious for dilated perivascular spaces.`,`The pituitary gland shows normal posterior bright spot.`,`No brain herniation.`,`The rest of posterior fossa appears normal.`,`Both orbits, the PNS, and the rest of bony calvarium show normal SI.`,`No change of multiple areas of cortical and subcortical tuber in bilateral cerebral hemispheres.`,`The rest of visualized cerebral venous system of the brain are unremarkable.`,`The cerebellum and brainstem are unremarkable.`,`The pituitary gland and posterior bright spot are unremarkable.`,`No midline shifting is seen.`,`No dilatation of the ventricular system is detected.`,`No extra-axial collection is noted.`,`The visualized both orbits, PNS and mastoid air cells are unremarkable.`,`No low lying of cerebellar tonsil is noted.`,`The both PcoA and AcoA areas are unremarkable without abnormal aneurysmal dilatation.`,`Right olfactory bulb is unremarkable.`,`No enhancing lesion or leptomeningeal enhancement is seen.`,`No visualized restricted diffusion lesion or microbleed is seen.`,`The pituitary gland and posterior bright spot are normal.`,`The ventricular system is not dilated.`,`Corpus callosum, septum pellucidum and optic chiasm are intact.`,`Both basal ganglia, and thalami are normal.`,`No shifting of midline structures is seen.`,`Midbrain, pons, and medulla are unremarkable.`,`Both orbits, PNS and mastoid air cells are normal.`,`Normal water SI of left inner apparatus.`,`No midline shifting, leptomeningeal enhancement or pathological filling defect of the rest of venous sinus.`,`The rest of orbits, the rest of PNS and right mastoid air cells are unremarkable.`,`No infratentorial hyperSI or enhancing lesion.`,`No paramagnetic rim lesions or central vein signs are seen.`,`No abnormal SI of visualized spinal cord.`,`No definite enhancing mass lesion.`,`Eyeballs, orbital apex, optic nerves, optic chiasm and EOMs of both orbits are unremarkable.`,`No restricted diffusion in orbital region is detected.`,`The visualized cerebral venous system of the brain is unremarkable.`,`The rest of visualized PNS and left mastoid air cells are unremarkable.`,`No definite enhancement within the lesion.`,`Unremarkable right globe without enhancing mass.`,`Right optic nerve appears unremarkable.`,`Normal position and contour of bilateral lens.`,`Bilateral extra-ocular muscles show normal size and course.`,`Bilateral intraconal and extraconal fats appear unremarkable.`,`Bilateral lacrimal glands are unremarkable.`,`Bilateral superior ophthalmic veins (SOV) show no dilatation.`,`Midline structures, pituitary gland, stalk, and its posterior bright spot appear unremarkable.`,`Brainstem and cerebellar hemispheres appear unremarkable.`,`No new enhancing mass or leptomeningeal enhancement.`,`No ventricular system dilatation.`,`No midline shifting or other types of brain herniation.`,`PNSs and right mastoid air cells are unremarkable.`,`No new intraocular mass.`,`No mass intraoccular or extraoccular regions.`,`No demonstrable flow-related aneurysm.`,`The optic chiasm is unremarkable.`,`No new acute intracranial hemorrhage or recent large territorial infarction.`,`No detectable acute brain infarction, hemorrhage or abnormal mass lesion is seen.`,`Both orbits, the rest of visualized PNSs and both mastoid air cells appear unremarkable.`,`No detectable acute brain infarction or hemorrhage.`,`No definite intranidal aneurysm or flow-related aneurysm is seen.`,`The rest of intracranial arteries are unremarkable.`,`Both PcoAs and AcoA are patent.`,`No brain focal mass or acute infarct is noted.`,`The pituitary gland has normal size and normal posterior bright spot.`,`No intra- or extra-axial hemorrhage is noted.`,`No shifting of midline structure is seen.`,`Brainstem and cerebellum are unremarkable.`,`Visualized orbits, PNSs and mastoid air cells are unremarkable.`,`No intranidal aneurysm or flow-related aneurysm.`,`The remaining brain parenchyma exhibits normal signal intensity and grey-white differentiation.`,`There is no focal mass, abnormal enhancing lesion or leptomeningeal enhancement.`,`No intracranial hemorrhage, extraaxial collection, midline shift or brain herniation is noted.`,`Unremarkable pituitary gland with normal bright posterior lobe is identified.`,`The basal cistern is not remarkable.`,`The visualized cerebral venous system is not remarkable.`,`The orbits and the remaining PNSs are not remarkable.`,`Irregularity of proximal V4 of right VA without luminal stenosis.`,`No abnormal AV shunting of vascular malformation or other aneurysm.`,`Patent with irregularity and tortuosity both V4 of VA.`,`The rest of brain parenchyma show no focal mass, recent intracranial hemorrhage or extra-axial collection.`,`No enhancing mass or leptomeningeal enhancement is detected.`,`Both orbits, the rest of visualized PNS and bilateral mastoid air cells are unremarkable.`,`No significant change of fusiform dilatation at cavernous part of both ICAs and proximal right A2 of ACA.`,`No significant change of old infarction at right-sided pons, and left cerebellar hemisphere.`,`No intra- and extra-axial hemorrhage is seen.`,`No demonstrable space-taking lesion, abnormal enhancing lesion, and leptomeningeal enhancement is noted.`,`Corpus callosum is unremarkable.`,`The rest of brainstem is unremarkable.`,`No other types of brain herniation.`,`Both orbits, the rest of PNSs, and both mastoid air cells are unremarkable.`,`Bony calvarium is no abnormal signal.`,`No aneurysmal wall enhancement in vessel wall study.`,`The rest of intracranial arteries show no significant stenosis, aneurysm or vascular malformation.`,`No abnormal wall thickening or enhancement of the rest intracranial vessels.`,`No intracranial hemorrhage, or extraaxial collection.`,`No focal mass or leptomeningeal enhancement.`,`Cerebral venous system appears unremarkable.`,`The PNSs and both mastoid air cells are unremarkable.`,`Bony calvarium appears unremarkable.`,`No vessel wall thickening or enhancement.`,`No definite wall enhancement.`,`The rest of both intracranial ICAs and ACAs are patent.`,`The rest of vessel walls show no enhancing or wall thickening.`,`Irregularity along V4 of left VA and BA without significant stenosis.`,`The rest of left PCA, and right VA are patent without significant stenosis.`,`The study reveals patent left CCA-ICA anastomosis.`,`No wall thickening or enhancement is depicted.`,`No wall thickening or enhancement.`,`Irregularity of distal M1 of left MCA without significant luminal stenosis is noted.`,`No vessel wall thickening or wall enhancement of intracranial vessels.`,`No other brain herniation is seen.`,`No focal mass, intracranial hemorrhage or extra-axial collection.`,`Both orbits, the rest of PNS, and right mastoid air cell appear unremarkable.`,`Patent left CCA-ICA anastomosis.`,`Patent of the rest of extra- and intracranial vessels without vessel wall thickening or wall enhancement.`,`No abnormal filling defect in venous sinus system is shown.`,`No visualized restricted diffusion lesion is seen.`,`No shifting of midline structure is depicted.`,`Posterior fossa appears unremarkable.`,`Visualized both orbits, the rest of PNSs and both mastoid air cells appear unremarkable.`,`No other detectable abnormal area of conglomerate vessels or AV shunt.`,`ASL images show no abnormal arterialization or AV shunting signal.`,`No space-occupying lesion is visualized.`,`No abnormal enhancing lesion is detected.`,`Pituitary gland appears unremarkable.`,`Normal posterior bright spot is depicted.`,`No restricted diffusion is seen on DWI/ADC.`,`No microbleed is detected on SWI.`,`Both orbits, the PNSs, and both mastoid air cells appear no remarkable.`,`Visualized bilateral CCAs, cervical ICAs and ECAs are unremarkable.`,`The rest of intracranial vessels show no enhancing wall.`,`No new aneurysmal dilatation of intracranial vessels.`,`Diffuse irregularity along bilateral MCAs without severe stenosis nor wall enhancement.`,`No significant luminal stenosis.`,`The rest of ICAs, bilateral ACAs are patent.`,`Fetal origin of bilateral PCAs with well patent PcoAs are noted.`,`Patent flow-related enhancement in the rest of VAs and BA.`,`Brainstem is unremarkable.`,`Paranasal sinuses and mastoid regions are clear.`,`The visualized cerebral venous system of the brain are unremarkable.`,`No definite space taking lesion or abnormal enhancing lesion or area of infarction or large hemorrhage.`,`The study reveals no recent infarction, intracranial hemorrhage or extraaxial collection.`,`No shifting of midline structure or other type of brain herniation is seen.`,`The visualized dural venous sinuses appear unremarkable.`,`Again noted, mild narrowing at distal M1 to proximal M2 segment of right MCA without wall enhancement.`,`No enhancing wall is seen.`,`No intracranial hemorrhage, recent infarction, extraaxial collection, or focal mass.`,`Anterior circulation: Bilateral MCAs, ACAs, and ACoA show no significant stenosis or aneurysmal dilatation.`,`No IMH or intramural thrombus.`,`No demonstrable intimal flap.`,`The rest of PCAsm SCAs and BA shows no significant stenosis or aneurysmal dilatation.`,`The rest intracranial vessels show no abnormal wall thickening or wall enhancement.`,`No hydrocephalus, midline shift or brain herniation.`,`No widening pituitary fossa.`,`Bony structures shows no abnormal SI.`,`The bilateral membranous labyrinth appears unremarkable.`,`Left cerebellopontine angle has no mass or abnormal signal.`,`No dilatation of ventricular system is observed.`,`PNS and mastoid air cells appear unremarkable.`,`No shifting of midline structure is shown.`,`The posterior fossa is unremarkable.`,`No other enhancing mass or leptomeningeal enhancement.`,`No change of a tiny DVA at right frontal region.`,`The study reveals no nodular enhancing lesion at left IAC.`,`No both superior semicircular canal dehiscence.`,`The vestibular aqueduct are not enlarged.`,`No abnormal mass at both CPA cisterns is detected.`,`Visualized brainstem and cerebellum appear unremarkable.`,`The ventricular system is within normal limits.`,`No enhancing intracranial lesion or abnormal leptomeningeal enhancement is detected.`,`The visualized major dural venous sinuses are unremarkable.`,`The paranasal sinuses, mastoid air cells and orbits are unremarkable.`,`No destructive marrow lesion is detected.`,`Posteriorly: No mass into prevertebral soft tissue.`,`No extension into lateral oropharyngeal wall.`,`Normal oral cavity structures.`,`Normal posterior third of tongue, uvula.`,`Normal pyriform sinus and valleculae.`,`Normal of True vocal cord and infraglottic level.`,`Normal size and signal intensity both submandibular glands.`,`Normal brain parenchyma signal intensities in grey and white matter.`,`No space occupying lesions in the visualised brain.`,`Normal bilateral orbits.`,`Normal cervical spinal cord signal intensity.`,`No cervical lymphadenopathy.`,`No gross enhancing mass is seen.`,`Both parotid glands are unremarkable.`,`The rest of visualized neck spaces are unremarkable.`,`The visualized trachea and upper esophagus are unremarkable.`,`The visualized both submandibular glands and both parotid glands are unremarkable.`,`No significant lymphadenopathy is noted.`,`No other gross enhancing mass.`,`No restricted diffusion lesion.`,`Normal cavernous sinus and orbital apices.`,`Both SOFs and both optic canals are unremarkable.`,`Normal left rosen muller fossa, oropharyngeal mucosa.`,`Visualized the rest of neck spaces are unremarkable.`,`The brain stem appears unremarkable.`,`Orbits are unremarkable.`,`Hard palate, soft palate, and uvular are unremarkable.`,`The nasopharynx is unremarkable.`,`No intracranial involvement at visualized brain parenchyma.`,`No abnormal enhancing lesion, restrictive diffusion or susceptibility area is noted.`,`No detectable new enhancing or high T2W/FLAIR lesion is demonstrated.`,`No acute infarction or extra-axial collection is seen.`,`No abnormal SI of both optic nerve, optic chiasm and visualized optic tract is seen.`,`The ventricular system is normal size and midline position.`,`No new intramedullary lesion is demonstrable.`,`No spondylolisthesis is noted.`,`Normal bone marrow SI is observed.`,`The study reveals no focal mass, acute infarction, or restricted diffusion area.`,`No shifting of midline structures or brain herniation is detected.`,`No ventriculomegaly.`,`The rest of brainstem and cerebellum appear unremarkable.`,`Both orbits and the rest of visualized PNSs are unremarkable.`,`Normal signal of visualized bony calvarium is seen.`,`No intra- or extraaxial hemorrhage.`,`Both orbits, the rest of visualized PNSs, and both mastoid air cells are unremarkable.`,`Normal water signal in the intervertebral discs of C-spine.`,`No significant disc bulging and central canal stenosis.`,`No abnormal SI of spinal cord.`,`C1–C4: Preganglionic nerve roots appear intact.`,`C5: Normal appearance of the ventral and dorsal preganglionic nerve roots.`,`C8-T1: Preganglionic nerve roots appear intact.`,`Right branchial plexus appears unremarkable.`,`Visualized brain is unremarkable.`,`Mild rightward displacement of trachea without airway obstruction.`,`No invasion of adjacent structures.`,`The visualized submandibular glands and both parotid glands are unremarkable.`,`Both orbits, visualized PNSs and both mastoid air cells are unremarkable.`,`Posterior : Retropharyngeal space involvement with intact prevertebral muscle.`,`Right parapharyngeal, right carotid and right masticator spaces appear unremarkable.`,`Cavernous sinus and both orbital apex are intact.`,`Visualized PNSs and both mastoid air cells appear intact.`,`The visualized brain appear normal.`,`No marrow replacing lesions.`,`No longer seen mass at right nasal cavity.`,`No new enhancing mass at surgical bed.`,`Both orbits are unremarkable.`,`No significant luminal narrowing of the cavernous ICA is seen.`,`No sphenoid sinuses invasion is seen.`,`No significant change of old infarct left superior frontal lobe and left occipital lobe.`,`No pathologic enhancement within the brain parenchyma.`,`No acute intraparenchymal hemorrhage or extra-axial fluid collection.`,`There is no midline shift or mass effect.`,`The ventricles are normal in size.`,`Basal cisterns are patent.`,`The rest of the visualized paranasal sinuses and mastoid air cells are clear.`],"ct.brain":`The study reveals no acute intra-/extra-axial hemorrhage.(No recent large territorial infarction is detected.(No shifting of midline structures or other type of brain herniation is found.(The ventricular system is not dilated.(Posterior fossa appears unremarkable, given limitation due to beam hardening artifacts.(Both orbits, the visualized PNSs and both mastoid air cells appear unremarkable.(The bony calvarium is intact.(No acute intracranial hemorrhage or recent large territorial infarction.(No skull fracture.(No new intra- and extra-axial hemorrhage.(Visualized orbits are unremarkable.(The study reveals normal attenuation of brain parenchyma without detectable space taking lesion.(No intra- or extra-axial hemorrhage is noted.(No shifting of midline structures is seen.(Posterior fossa appears unremarkable.(After contrast medium administration, there is no abnormal enhancing lesion or leptomeningeal enhancement.(Cerebral venous system appears unremarkable.(Both orbits, the visualized PNSs, and both mastoid air cells appear unremarkable.(This study reveals no intra- and extra-axial hemorrhage.(No large recent territorial infarction is detected.(After contrast administration, there is no abnormal enhancing lesion or leptomeningeal enhancement.(The venous system appears unremarkable.(No shifting of midline structures or other types of brain herniation is seen.(Both orbits, the rest of visualized PNSs, and both mastoid air cells appear unremarkable.(Bony calvarium appears intact.(No intracranial hemorrhage or large recent territorial infarction.(No abnormal enhancing lesion or leptomeningeal enhancement.(Oropharynx, oral cavity and larynx are unremarkable.(No significant cervical lymphadenopathy is noted.(Both lobes of thyroid gland appear unremarkable.(The visualized cerebral venous and arterial systems are normal.(Both orbits,orbital apices and retroorbital area are normal.(The visualized paranasal sinuses and bilateral mastoid air cells are unremarkable.(Mandible appears normal.(No bony destruction.(Bilateral internal acoustic canal and bilateral cerebellopontine angle are unremarkable.(Left Prussak space showed patency without abnormal lesion.(Normal appearance of left tympanic membranes is seen.(Left ear ossicles appear unremarkable.(No fluid in left middle ear cavities is depicted.(Left mastoid antrum and aditus ad antrum appear normal.(Bilateral cochlears show normal turns.(Bilateral semicircular canals are unremarkable.(Both temporomandibular joints and styloid processes appear unremarkable.(Nasopharynx and oropharynx are unremarkable.(Both parotid glands appear unremarkable.(Visualized brain parenchyma shows normal attenuation without abnormal enhancing lesion.(Both orbits and the rest of PNSs appear unremarkable.(Bony calvarium appears unremarkable.(No intra- or extra-axial hemorrhage.(No shifting of midline structures or brain herniation is seen.(The rest of visualized PNSs and both mastoid air cells appear unremarkable.(No fracture of the upper/mid face and mandible.(No acute intracranial hemorrhage or large recent territorial infarction.`.split(`(`),"ct.spine":[`No bony destructive lesions are observed.`,`No paravertebral soft tissue mass is seen.`,`Visualized right kidney appear unremarkable.`,`No gross intraabdominal lymphadenopathy is noted.`,`The study reveals no intra-extraaxial hemorrhage.`,`No large recent territorial infarction.`,`The ventricular system is not dilated.`,`No shifting of midline structure or other type of brain herniation.`,`Both orbits, the PNSs and both mastoid air cells appear unremarkable.`,`No gross skull fracture is seen.`,`Loss of normal curve.`,`No acute displaced fracture or dislocation is detected.`,`Unremarkable of craniocervical junction.`,`Unremarkable of disc spaces.`,`No prevertebral soft tissue swelling.`,`No intra-extraaxial hemorrhage.`,`No cervical spine fracture or dislocation is detected.`,`Both orbits and the rest of PNSs and both mastoid air cells appear unremarkable.`,`Bony calvarium appears intact.`,`No fracture of the upper/mid face and mandible.`,`Loss of normal curve of cervical spine.`,`Mild degenerative changes of cervical spine without fracture or dislocation.`],"us.kub":[`No stone, hydronephrosis or mass.`,`No stone, wall thickening or mass.`,`AORTA: Normal diameter.`,`Real time sonography shows normal size and echogenicity of both kidneys.`,`No detectable renal stone, mass or hydronephrosis.`,`The urinary bladder has smooth, thin wall without detectable mass or stone.`,`No ascites is seen.`,`No detectable gross abnormality.`,`No hydronephrosis or mass.`,`Normal echogenicity of renal parenchyma.`,`OTHERS: No ascites.`,`Visualized main portal vein was patent.`,`The urinary bladder appeared unremarkable.`,`No gross adnexal mass is found.`],"us.abdomen":[`LIVER: Normal size and echogenicity of liver parenchyma.`,`No IHD dilatation.`,`PANCREAS: No duct dilatation or mass at the visualized portion.`,`No visualized focal lesion.`,`KIDNEYS: Normal size and echogenicity.`,`No hydronephrosis or mass.`,`No stone, wall thickening or mass.`,`AORTA: Normal diameter.`,`OTHERS: No upper abdominal free fluid.`,`Biliary system: No dilatation.`,`Gallbladder: Smooth thin wall without gallstone.`,`Visualized pancreas: Unremarkable.`,`Visualized spleen: Unremarkable.`,`Both kidneys: Normal size and echogenicity of renal parenchyma.`,`No hydronephrosis or obvious stone.`,`Others: No ascites or para-aortic lymphadenopathy.`,`LIVER: Normal size.`,`SPLEEN: Normal size.`,`No stone, hydronephrosis or mass.`,`No definite liver mass/abscess.`,`Portal vein is patent.`,`Sonographic Murphy sign negative.`,`Visualized pancreas is unremarkable.`,`No hydronephrosis.`,`Liver cirrhosis without definite liver mass/abscess.`],"us.neck":[`LYMPH NODES: No enlargement.`,`No nodules or mass.`,`SUBMANDIBULAR GLANDS: Normal.`,`VESSELS: Screening color Doppler shows normal flow in bilateral IJVs, CCAs and ICAs.`,`No significant narrowing of these vessels.`]};function sc(e){return e.trim().toLowerCase().replace(/[^a-z0-9]+/g,`_`).replace(/^_+|_+$/g,``)}function cc(e,t){let n=e.trim().toLowerCase();for(let e of Object.keys(t))if(e.toLowerCase()===n||m(e).toLowerCase()===n)return e;return sc(e)}function lc(e,t,n){let r=e.trim().toLowerCase(),i=t[n]||{};for(let e of Object.keys(i))if(e.toLowerCase()===r||h(e).toLowerCase()===r)return e;return sc(e)}var uc={history:``,technique:``,comparison:`None.`,findings:``,impression:``};function dc(){let[e,t]=ic(`radiology.userTemplates`,{}),[n,r]=ic(`radiology.userPhrases`,{}),[i,a]=(0,u.useState)({name:``,studyType:``}),[o,s]=(0,u.useState)(uc),[c,l]=(0,u.useState)(null),[d,f]=(0,u.useState)([]),p=(0,u.useRef)(o),g=(0,u.useRef)(i),v=(0,u.useRef)(0);p.current=o,g.current=i;let b=()=>{let e=Date.now();e-v.current<800||(v.current=e,f(e=>[...e.slice(-49),{fields:p.current,patientInfo:g.current}]))},x=e=>{b(),s(e)},S=e=>{b(),a(e)},C=()=>{if(!d.length)return;let e=d[d.length-1];f(e=>e.slice(0,-1)),s(e.fields),a(e.patientInfo)},w=(0,u.useRef)(C);w.current=C,(0,u.useEffect)(()=>{let e=e=>{(e.ctrlKey||e.metaKey)&&!e.shiftKey&&e.key.toLowerCase()===`z`&&(e.preventDefault(),w.current())};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[]);let[T,E]=(0,u.useState)(null),[D,O]=(0,u.useState)(!1),[k,A]=(0,u.useState)(!1),j=(0,u.useRef)(null),M=(0,u.useRef)(null),N=(e,t,n,r)=>{l({modality:e,region:t,name:n}),E({modality:e,region:t}),x({history:r.history||``,technique:r.technique||``,comparison:r.comparison||`None.`,findings:r.findings||``,impression:r.impression||``}),S(e=>({...e,studyType:r.studyType||n}))},P=e=>{j.current?.insertAtCursor(e)},F=(e,n,r)=>{t(t=>({...t,[e]:{...t[e]||{},[n]:{...(t[e]||{})[n]||{},[r]:{...o,studyType:i.studyType}}}})),l({modality:e,region:n,name:r}),E({modality:e,region:n})},I=(t,n)=>{let r=fc(ac,e),i=window.prompt(`Modality (e.g. CT, MRI, X-ray, Ultrasound — type a new one to create it):`,t?m(t):``);if(!i?.trim())return null;let a=cc(i,r),o=window.prompt(`Region (e.g. Abdomen, Chest, Brain — type a new one to create it):`,n?h(n):``);return o?.trim()?{modality:a,region:lc(o,r,a)}:null},L=()=>{let e=c?.modality||T?.modality,t=c?.region||T?.region;if(!e||!t){let n=I(e,t);if(!n)return;({modality:e,region:t}=n)}let n=c?.name||window.prompt(`Template name:`);n?.trim()&&F(e,t,n.trim())},R=()=>{let e=I(c?.modality||T?.modality,c?.region||T?.region);if(!e)return;let{modality:t,region:n}=e,r=window.prompt(`Save as new template named:`,c?.name||``);r?.trim()&&F(t,n,r.trim())},z=(e,n,r)=>{t(t=>{let i=structuredClone(t);return delete i?.[e]?.[n]?.[r],i})};return(0,_.jsxs)(`div`,{className:`h-screen flex flex-col`,children:[(0,_.jsxs)(`header`,{className:`px-4 py-3 bg-slate-900 text-white flex items-center justify-between`,children:[(0,_.jsx)(`h1`,{className:`text-lg font-semibold`,children:`Radiology Report Generator`}),(0,_.jsxs)(`div`,{className:`flex items-center gap-1 text-xs`,children:[(0,_.jsx)(`button`,{className:`text-slate-400 hover:text-white hover:bg-slate-800 px-2 py-1 rounded`,onClick:()=>Ks(e,n),title:`Download your saved templates & phrases as a backup file`,children:`Back up`}),(0,_.jsx)(`button`,{className:`text-slate-400 hover:text-white hover:bg-slate-800 px-2 py-1 rounded`,onClick:()=>M.current?.click(),title:`Restore saved templates & phrases from a backup file`,children:`Restore`}),(0,_.jsx)(`input`,{ref:M,type:`file`,accept:`application/json,.json`,className:`hidden`,onChange:e=>{let n=e.target.files?.[0];n&&qs(n,t,r),e.target.value=``}})]})]}),(0,_.jsxs)(`div`,{className:`flex-1 grid ${D?`grid-cols-[36px_1fr_var(--right-w)]`:`grid-cols-[var(--left-w)_1fr_var(--right-w)]`} grid-rows-[minmax(0,1fr)] min-h-0`,style:{"--left-w":`clamp(180px, 20vw, 260px)`,"--right-w":k?`36px`:`clamp(200px, 22vw, 300px)`},children:[(0,_.jsx)(y,{templates:fc(ac,e),userTemplates:e,onSelectTemplate:N,selected:c,openScope:T,onOpenScopeChange:E,onDeleteUserTemplate:z,onRenameUserTemplate:(n,r,i)=>{let a=e[n]?.[r]?.[i];if(!a){window.alert(`This is a built-in template and can't be renamed — only custom-saved templates can be.`);return}let o=window.prompt(`New name:`,i);if(!(!o||o===i)){if(e[n]?.[r]?.[o]){window.alert(`"${o}" already exists in this region.`);return}t(e=>{let t=structuredClone(e);return delete t[n][r][i],t[n][r][o]=a,t}),c&&c.modality===n&&c.region===r&&c.name===i&&l({modality:n,region:r,name:o})}},onDeleteUserRegion:(n,r)=>{let i=Object.keys(e[n]?.[r]||{}).length;i&&window.confirm(`Delete all ${i} custom template(s) saved under "${h(r)}"? This can't be undone.`)&&(t(e=>{let t=structuredClone(e);return delete t?.[n]?.[r],t}),c?.modality===n&&c?.region===r&&l(null),T?.modality===n&&T?.region===r&&E({modality:n,region:null}))},onDeleteUserModality:n=>{let r=e[n]||{},i=Object.values(r).reduce((e,t)=>e+Object.keys(t||{}).length,0);i&&window.confirm(`Delete all ${i} custom template(s) saved under "${m(n)}"? This can't be undone.`)&&(t(e=>{let t=structuredClone(e);return delete t?.[n],t}),c?.modality===n&&l(null),T?.modality===n&&E(null))},collapsed:D,onToggleCollapsed:()=>O(e=>!e)}),(0,_.jsx)(tc,{ref:j,patientInfo:i,setPatientInfo:S,fields:o,setFields:x,onSaveTemplate:L,onSaveTemplateAs:R,onDeleteCurrentTemplate:()=>{if(!c){window.alert(`Select a template first, then Delete.`);return}if(!e[c.modality]?.[c.region]?.[c.name]){window.alert(`This is a built-in template and can't be deleted — only custom-saved templates can be.`);return}window.confirm(`Delete "${c.name}"? This can't be undone.`)&&(z(c.modality,c.region,c.name),l(null))},onUndo:C,canUndo:d.length>0}),(0,_.jsx)(rc,{premadePhrases:oc,userPhrases:n,openScope:T,onInsertPhrase:P,onSavePhrase:()=>{if(!T?.region)return;let e=window.prompt(`New phrase:`);if(!e?.trim())return;let t=`${T.modality}.${T.region}`;r(n=>({...n,[t]:[...n[t]||[],e.trim()]}))},onDeleteUserPhrase:(e,t)=>{r(n=>({...n,[e]:(n[e]||[]).filter(e=>e!==t)}))},collapsed:k,onToggleCollapsed:()=>A(e=>!e)})]})]})}function fc(e,t){let n=structuredClone(e);for(let e of Object.keys(t)){n[e]=n[e]||{};for(let r of Object.keys(t[e]))n[e][r]={...n[e][r]||{},...t[e][r]}}return n}(0,d.createRoot)(document.getElementById(`root`)).render((0,_.jsx)(u.StrictMode,{children:(0,_.jsx)(dc,{})}));