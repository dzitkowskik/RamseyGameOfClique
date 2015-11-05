/**
 * Created by ghash on 11.09.15.
 */
/*! jQuery v1.8.2 jquery.com | jquery.org/license */
(function(a,b){function G(a){var b=F[a]={};return p.each(a.split(s),function(a,c){b[c]=!0}),b}function J(a,c,d){if(d===b&&a.nodeType===1){var e="data-"+c.replace(I,"-$1").toLowerCase();d=a.getAttribute(e);if(typeof d=="string"){try{d=d==="true"?!0:d==="false"?!1:d==="null"?null:+d+""===d?+d:H.test(d)?p.parseJSON(d):d}catch(f){}p.data(a,c,d)}else d=b}return d}function K(a){var b;for(b in a){if(b==="data"&&p.isEmptyObject(a[b]))continue;if(b!=="toJSON")return!1}return!0}function ba(){return!1}function bb(){return!0}function bh(a){return!a||!a.parentNode||a.parentNode.nodeType===11}function bi(a,b){do a=a[b];while(a&&a.nodeType!==1);return a}function bj(a,b,c){b=b||0;if(p.isFunction(b))return p.grep(a,function(a,d){var e=!!b.call(a,d,a);return e===c});if(b.nodeType)return p.grep(a,function(a,d){return a===b===c});if(typeof b=="string"){var d=p.grep(a,function(a){return a.nodeType===1});if(be.test(b))return p.filter(b,d,!c);b=p.filter(b,d)}return p.grep(a,function(a,d){return p.inArray(a,b)>=0===c})}function bk(a){var b=bl.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}function bC(a,b){return a.getElementsByTagName(b)[0]||a.appendChild(a.ownerDocument.createElement(b))}function bD(a,b){if(b.nodeType!==1||!p.hasData(a))return;var c,d,e,f=p._data(a),g=p._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;d<e;d++)p.event.add(b,c,h[c][d])}g.data&&(g.data=p.extend({},g.data))}function bE(a,b){var c;if(b.nodeType!==1)return;b.clearAttributes&&b.clearAttributes(),b.mergeAttributes&&b.mergeAttributes(a),c=b.nodeName.toLowerCase(),c==="object"?(b.parentNode&&(b.outerHTML=a.outerHTML),p.support.html5Clone&&a.innerHTML&&!p.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):c==="input"&&bv.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):c==="option"?b.selected=a.defaultSelected:c==="input"||c==="textarea"?b.defaultValue=a.defaultValue:c==="script"&&b.text!==a.text&&(b.text=a.text),b.removeAttribute(p.expando)}function bF(a){return typeof a.getElementsByTagName!="undefined"?a.getElementsByTagName("*"):typeof a.querySelectorAll!="undefined"?a.querySelectorAll("*"):[]}function bG(a){bv.test(a.type)&&(a.defaultChecked=a.checked)}function bY(a,b){if(b in a)return b;var c=b.charAt(0).toUpperCase()+b.slice(1),d=b,e=bW.length;while(e--){b=bW[e]+c;if(b in a)return b}return d}function bZ(a,b){return a=b||a,p.css(a,"display")==="none"||!p.contains(a.ownerDocument,a)}function b$(a,b){var c,d,e=[],f=0,g=a.length;for(;f<g;f++){c=a[f];if(!c.style)continue;e[f]=p._data(c,"olddisplay"),b?(!e[f]&&c.style.display==="none"&&(c.style.display=""),c.style.display===""&&bZ(c)&&(e[f]=p._data(c,"olddisplay",cc(c.nodeName)))):(d=bH(c,"display"),!e[f]&&d!=="none"&&p._data(c,"olddisplay",d))}for(f=0;f<g;f++){c=a[f];if(!c.style)continue;if(!b||c.style.display==="none"||c.style.display==="")c.style.display=b?e[f]||"":"none"}return a}function b_(a,b,c){var d=bP.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function ca(a,b,c,d){var e=c===(d?"border":"content")?4:b==="width"?1:0,f=0;for(;e<4;e+=2)c==="margin"&&(f+=p.css(a,c+bV[e],!0)),d?(c==="content"&&(f-=parseFloat(bH(a,"padding"+bV[e]))||0),c!=="margin"&&(f-=parseFloat(bH(a,"border"+bV[e]+"Width"))||0)):(f+=parseFloat(bH(a,"padding"+bV[e]))||0,c!=="padding"&&(f+=parseFloat(bH(a,"border"+bV[e]+"Width"))||0));return f}function cb(a,b,c){var d=b==="width"?a.offsetWidth:a.offsetHeight,e=!0,f=p.support.boxSizing&&p.css(a,"boxSizing")==="border-box";if(d<=0||d==null){d=bH(a,b);if(d<0||d==null)d=a.style[b];if(bQ.test(d))return d;e=f&&(p.support.boxSizingReliable||d===a.style[b]),d=parseFloat(d)||0}return d+ca(a,b,c||(f?"border":"content"),e)+"px"}function cc(a){if(bS[a])return bS[a];var b=p("<"+a+">").appendTo(e.body),c=b.css("display");b.remove();if(c==="none"||c===""){bI=e.body.appendChild(bI||p.extend(e.createElement("iframe"),{frameBorder:0,width:0,height:0}));if(!bJ||!bI.createElement)bJ=(bI.contentWindow||bI.contentDocument).document,bJ.write("<!doctype html><html><body>"),bJ.close();b=bJ.body.appendChild(bJ.createElement(a)),c=bH(b,"display"),e.body.removeChild(bI)}return bS[a]=c,c}function ci(a,b,c,d){var e;if(p.isArray(b))p.each(b,function(b,e){c||ce.test(a)?d(a,e):ci(a+"["+(typeof e=="object"?b:"")+"]",e,c,d)});else if(!c&&p.type(b)==="object")for(e in b)ci(a+"["+e+"]",b[e],c,d);else d(a,b)}function cz(a){return function(b,c){typeof b!="string"&&(c=b,b="*");var d,e,f,g=b.toLowerCase().split(s),h=0,i=g.length;if(p.isFunction(c))for(;h<i;h++)d=g[h],f=/^\+/.test(d),f&&(d=d.substr(1)||"*"),e=a[d]=a[d]||[],e[f?"unshift":"push"](c)}}function cA(a,c,d,e,f,g){f=f||c.dataTypes[0],g=g||{},g[f]=!0;var h,i=a[f],j=0,k=i?i.length:0,l=a===cv;for(;j<k&&(l||!h);j++)h=i[j](c,d,e),typeof h=="string"&&(!l||g[h]?h=b:(c.dataTypes.unshift(h),h=cA(a,c,d,e,h,g)));return(l||!h)&&!g["*"]&&(h=cA(a,c,d,e,"*",g)),h}function cB(a,c){var d,e,f=p.ajaxSettings.flatOptions||{};for(d in c)c[d]!==b&&((f[d]?a:e||(e={}))[d]=c[d]);e&&p.extend(!0,a,e)}function cC(a,c,d){var e,f,g,h,i=a.contents,j=a.dataTypes,k=a.responseFields;for(f in k)f in d&&(c[k[f]]=d[f]);while(j[0]==="*")j.shift(),e===b&&(e=a.mimeType||c.getResponseHeader("content-type"));if(e)for(f in i)if(i[f]&&i[f].test(e)){j.unshift(f);break}if(j[0]in d)g=j[0];else{for(f in d){if(!j[0]||a.converters[f+" "+j[0]]){g=f;break}h||(h=f)}g=g||h}if(g)return g!==j[0]&&j.unshift(g),d[g]}function cD(a,b){var c,d,e,f,g=a.dataTypes.slice(),h=g[0],i={},j=0;a.dataFilter&&(b=a.dataFilter(b,a.dataType));if(g[1])for(c in a.converters)i[c.toLowerCase()]=a.converters[c];for(;e=g[++j];)if(e!=="*"){if(h!=="*"&&h!==e){c=i[h+" "+e]||i["* "+e];if(!c)for(d in i){f=d.split(" ");if(f[1]===e){c=i[h+" "+f[0]]||i["* "+f[0]];if(c){c===!0?c=i[d]:i[d]!==!0&&(e=f[0],g.splice(j--,0,e));break}}}if(c!==!0)if(c&&a["throws"])b=c(b);else try{b=c(b)}catch(k){return{state:"parsererror",error:c?k:"No conversion from "+h+" to "+e}}}h=e}return{state:"success",data:b}}function cL(){try{return new a.XMLHttpRequest}catch(b){}}function cM(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}function cU(){return setTimeout(function(){cN=b},0),cN=p.now()}function cV(a,b){p.each(b,function(b,c){var d=(cT[b]||[]).concat(cT["*"]),e=0,f=d.length;for(;e<f;e++)if(d[e].call(a,b,c))return})}function cW(a,b,c){var d,e=0,f=0,g=cS.length,h=p.Deferred().always(function(){delete i.elem}),i=function(){var b=cN||cU(),c=Math.max(0,j.startTime+j.duration-b),d=1-(c/j.duration||0),e=0,f=j.tweens.length;for(;e<f;e++)j.tweens[e].run(d);return h.notifyWith(a,[j,d,c]),d<1&&f?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:p.extend({},b),opts:p.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:cN||cU(),duration:c.duration,tweens:[],createTween:function(b,c,d){var e=p.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(e),e},stop:function(b){var c=0,d=b?j.tweens.length:0;for(;c<d;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;cX(k,j.opts.specialEasing);for(;e<g;e++){d=cS[e].call(j,a,k,j.opts);if(d)return d}return cV(j,k),p.isFunction(j.opts.start)&&j.opts.start.call(a,j),p.fx.timer(p.extend(i,{anim:j,queue:j.opts.queue,elem:a})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}function cX(a,b){var c,d,e,f,g;for(c in a){d=p.camelCase(c),e=b[d],f=a[c],p.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=p.cssHooks[d];if(g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}}function cY(a,b,c){var d,e,f,g,h,i,j,k,l=this,m=a.style,n={},o=[],q=a.nodeType&&bZ(a);c.queue||(j=p._queueHooks(a,"fx"),j.unqueued==null&&(j.unqueued=0,k=j.empty.fire,j.empty.fire=function(){j.unqueued||k()}),j.unqueued++,l.always(function(){l.always(function(){j.unqueued--,p.queue(a,"fx").length||j.empty.fire()})})),a.nodeType===1&&("height"in b||"width"in b)&&(c.overflow=[m.overflow,m.overflowX,m.overflowY],p.css(a,"display")==="inline"&&p.css(a,"float")==="none"&&(!p.support.inlineBlockNeedsLayout||cc(a.nodeName)==="inline"?m.display="inline-block":m.zoom=1)),c.overflow&&(m.overflow="hidden",p.support.shrinkWrapBlocks||l.done(function(){m.overflow=c.overflow[0],m.overflowX=c.overflow[1],m.overflowY=c.overflow[2]}));for(d in b){f=b[d];if(cP.exec(f)){delete b[d];if(f===(q?"hide":"show"))continue;o.push(d)}}g=o.length;if(g){h=p._data(a,"fxshow")||p._data(a,"fxshow",{}),q?p(a).show():l.done(function(){p(a).hide()}),l.done(function(){var b;p.removeData(a,"fxshow",!0);for(b in n)p.style(a,b,n[b])});for(d=0;d<g;d++)e=o[d],i=l.createTween(e,q?h[e]:0),n[e]=h[e]||p.style(a,e),e in h||(h[e]=i.start,q&&(i.end=i.start,i.start=e==="width"||e==="height"?1:0))}}function cZ(a,b,c,d,e){return new cZ.prototype.init(a,b,c,d,e)}function c$(a,b){var c,d={height:a},e=0;b=b?1:0;for(;e<4;e+=2-b)c=bV[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function da(a){return p.isWindow(a)?a:a.nodeType===9?a.defaultView||a.parentWindow:!1}var c,d,e=a.document,f=a.location,g=a.navigator,h=a.jQuery,i=a.$,j=Array.prototype.push,k=Array.prototype.slice,l=Array.prototype.indexOf,m=Object.prototype.toString,n=Object.prototype.hasOwnProperty,o=String.prototype.trim,p=function(a,b){return new p.fn.init(a,b,c)},q=/[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,r=/\S/,s=/\s+/,t=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,u=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^[\],:{}\s]*$/,x=/(?:^|:|,)(?:\s*\[)+/g,y=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,z=/"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,A=/^-ms-/,B=/-([\da-z])/gi,C=function(a,b){return(b+"").toUpperCase()},D=function(){e.addEventListener?(e.removeEventListener("DOMContentLoaded",D,!1),p.ready()):e.readyState==="complete"&&(e.detachEvent("onreadystatechange",D),p.ready())},E={};p.fn=p.prototype={constructor:p,init:function(a,c,d){var f,g,h,i;if(!a)return this;if(a.nodeType)return this.context=this[0]=a,this.length=1,this;if(typeof a=="string"){a.charAt(0)==="<"&&a.charAt(a.length-1)===">"&&a.length>=3?f=[null,a,null]:f=u.exec(a);if(f&&(f[1]||!c)){if(f[1])return c=c instanceof p?c[0]:c,i=c&&c.nodeType?c.ownerDocument||c:e,a=p.parseHTML(f[1],i,!0),v.test(f[1])&&p.isPlainObject(c)&&this.attr.call(a,c,!0),p.merge(this,a);g=e.getElementById(f[2]);if(g&&g.parentNode){if(g.id!==f[2])return d.find(a);this.length=1,this[0]=g}return this.context=e,this.selector=a,this}return!c||c.jquery?(c||d).find(a):this.constructor(c).find(a)}return p.isFunction(a)?d.ready(a):(a.selector!==b&&(this.selector=a.selector,this.context=a.context),p.makeArray(a,this))},selector:"",jquery:"1.8.2",length:0,size:function(){return this.length},toArray:function(){return k.call(this)},get:function(a){return a==null?this.toArray():a<0?this[this.length+a]:this[a]},pushStack:function(a,b,c){var d=p.merge(this.constructor(),a);return d.prevObject=this,d.context=this.context,b==="find"?d.selector=this.selector+(this.selector?" ":"")+c:b&&(d.selector=this.selector+"."+b+"("+c+")"),d},each:function(a,b){return p.each(this,a,b)},ready:function(a){return p.ready.promise().done(a),this},eq:function(a){return a=+a,a===-1?this.slice(a):this.slice(a,a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(k.apply(this,arguments),"slice",k.call(arguments).join(","))},map:function(a){return this.pushStack(p.map(this,function(b,c){return a.call(b,c,b)}))},end:function(){return this.prevObject||this.constructor(null)},push:j,sort:[].sort,splice:[].splice},p.fn.init.prototype=p.fn,p.extend=p.fn.extend=function(){var a,c,d,e,f,g,h=arguments[0]||{},i=1,j=arguments.length,k=!1;typeof h=="boolean"&&(k=h,h=arguments[1]||{},i=2),typeof h!="object"&&!p.isFunction(h)&&(h={}),j===i&&(h=this,--i);for(;i<j;i++)if((a=arguments[i])!=null)for(c in a){d=h[c],e=a[c];if(h===e)continue;k&&e&&(p.isPlainObject(e)||(f=p.isArray(e)))?(f?(f=!1,g=d&&p.isArray(d)?d:[]):g=d&&p.isPlainObject(d)?d:{},h[c]=p.extend(k,g,e)):e!==b&&(h[c]=e)}return h},p.extend({noConflict:function(b){return a.$===p&&(a.$=i),b&&a.jQuery===p&&(a.jQuery=h),p},isReady:!1,readyWait:1,holdReady:function(a){a?p.readyWait++:p.ready(!0)},ready:function(a){if(a===!0?--p.readyWait:p.isReady)return;if(!e.body)return setTimeout(p.ready,1);p.isReady=!0;if(a!==!0&&--p.readyWait>0)return;d.resolveWith(e,[p]),p.fn.trigger&&p(e).trigger("ready").off("ready")},isFunction:function(a){return p.type(a)==="function"},isArray:Array.isArray||function(a){return p.type(a)==="array"},isWindow:function(a){return a!=null&&a==a.window},isNumeric:function(a){return!isNaN(parseFloat(a))&&isFinite(a)},type:function(a){return a==null?String(a):E[m.call(a)]||"object"},isPlainObject:function(a){if(!a||p.type(a)!=="object"||a.nodeType||p.isWindow(a))return!1;try{if(a.constructor&&!n.call(a,"constructor")&&!n.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}var d;for(d in a);return d===b||n.call(a,d)},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},error:function(a){throw new Error(a)},parseHTML:function(a,b,c){var d;return!a||typeof a!="string"?null:(typeof b=="boolean"&&(c=b,b=0),b=b||e,(d=v.exec(a))?[b.createElement(d[1])]:(d=p.buildFragment([a],b,c?null:[]),p.merge([],(d.cacheable?p.clone(d.fragment):d.fragment).childNodes)))},parseJSON:function(b){if(!b||typeof b!="string")return null;b=p.trim(b);if(a.JSON&&a.JSON.parse)return a.JSON.parse(b);if(w.test(b.replace(y,"@").replace(z,"]").replace(x,"")))return(new Function("return "+b))();p.error("Invalid JSON: "+b)},parseXML:function(c){var d,e;if(!c||typeof c!="string")return null;try{a.DOMParser?(e=new DOMParser,d=e.parseFromString(c,"text/xml")):(d=new ActiveXObject("Microsoft.XMLDOM"),d.async="false",d.loadXML(c))}catch(f){d=b}return(!d||!d.documentElement||d.getElementsByTagName("parsererror").length)&&p.error("Invalid XML: "+c),d},noop:function(){},globalEval:function(b){b&&r.test(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(A,"ms-").replace(B,C)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,c,d){var e,f=0,g=a.length,h=g===b||p.isFunction(a);if(d){if(h){for(e in a)if(c.apply(a[e],d)===!1)break}else for(;f<g;)if(c.apply(a[f++],d)===!1)break}else if(h){for(e in a)if(c.call(a[e],e,a[e])===!1)break}else for(;f<g;)if(c.call(a[f],f,a[f++])===!1)break;return a},trim:o&&!o.call("﻿ ")?function(a){return a==null?"":o.call(a)}:function(a){return a==null?"":(a+"").replace(t,"")},makeArray:function(a,b){var c,d=b||[];return a!=null&&(c=p.type(a),a.length==null||c==="string"||c==="function"||c==="regexp"||p.isWindow(a)?j.call(d,a):p.merge(d,a)),d},inArray:function(a,b,c){var d;if(b){if(l)return l.call(b,a,c);d=b.length,c=c?c<0?Math.max(0,d+c):c:0;for(;c<d;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,c){var d=c.length,e=a.length,f=0;if(typeof d=="number")for(;f<d;f++)a[e++]=c[f];else while(c[f]!==b)a[e++]=c[f++];return a.length=e,a},grep:function(a,b,c){var d,e=[],f=0,g=a.length;c=!!c;for(;f<g;f++)d=!!b(a[f],f),c!==d&&e.push(a[f]);return e},map:function(a,c,d){var e,f,g=[],h=0,i=a.length,j=a instanceof p||i!==b&&typeof i=="number"&&(i>0&&a[0]&&a[i-1]||i===0||p.isArray(a));if(j)for(;h<i;h++)e=c(a[h],h,d),e!=null&&(g[g.length]=e);else for(f in a)e=c(a[f],f,d),e!=null&&(g[g.length]=e);return g.concat.apply([],g)},guid:1,proxy:function(a,c){var d,e,f;return typeof c=="string"&&(d=a[c],c=a,a=d),p.isFunction(a)?(e=k.call(arguments,2),f=function(){return a.apply(c,e.concat(k.call(arguments)))},f.guid=a.guid=a.guid||p.guid++,f):b},access:function(a,c,d,e,f,g,h){var i,j=d==null,k=0,l=a.length;if(d&&typeof d=="object"){for(k in d)p.access(a,c,k,d[k],1,g,e);f=1}else if(e!==b){i=h===b&&p.isFunction(e),j&&(i?(i=c,c=function(a,b,c){return i.call(p(a),c)}):(c.call(a,e),c=null));if(c)for(;k<l;k++)c(a[k],d,i?e.call(a[k],k,c(a[k],d)):e,h);f=1}return f?a:j?c.call(a):l?c(a[0],d):g},now:function(){return(new Date).getTime()}}),p.ready.promise=function(b){if(!d){d=p.Deferred();if(e.readyState==="complete")setTimeout(p.ready,1);else if(e.addEventListener)e.addEventListener("DOMContentLoaded",D,!1),a.addEventListener("load",p.ready,!1);else{e.attachEvent("onreadystatechange",D),a.attachEvent("onload",p.ready);var c=!1;try{c=a.frameElement==null&&e.documentElement}catch(f){}c&&c.doScroll&&function g(){if(!p.isReady){try{c.doScroll("left")}catch(a){return setTimeout(g,50)}p.ready()}}()}}return d.promise(b)},p.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(a,b){E["[object "+b+"]"]=b.toLowerCase()}),c=p(e);var F={};p.Callbacks=function(a){a=typeof a=="string"?F[a]||G(a):p.extend({},a);var c,d,e,f,g,h,i=[],j=!a.once&&[],k=function(b){c=a.memory&&b,d=!0,h=f||0,f=0,g=i.length,e=!0;for(;i&&h<g;h++)if(i[h].apply(b[0],b[1])===!1&&a.stopOnFalse){c=!1;break}e=!1,i&&(j?j.length&&k(j.shift()):c?i=[]:l.disable())},l={add:function(){if(i){var b=i.length;(function d(b){p.each(b,function(b,c){var e=p.type(c);e==="function"&&(!a.unique||!l.has(c))?i.push(c):c&&c.length&&e!=="string"&&d(c)})})(arguments),e?g=i.length:c&&(f=b,k(c))}return this},remove:function(){return i&&p.each(arguments,function(a,b){var c;while((c=p.inArray(b,i,c))>-1)i.splice(c,1),e&&(c<=g&&g--,c<=h&&h--)}),this},has:function(a){return p.inArray(a,i)>-1},empty:function(){return i=[],this},disable:function(){return i=j=c=b,this},disabled:function(){return!i},lock:function(){return j=b,c||l.disable(),this},locked:function(){return!j},fireWith:function(a,b){return b=b||[],b=[a,b.slice?b.slice():b],i&&(!d||j)&&(e?j.push(b):k(b)),this},fire:function(){return l.fireWith(this,arguments),this},fired:function(){return!!d}};return l},p.extend({Deferred:function(a){var b=[["resolve","done",p.Callbacks("once memory"),"resolved"],["reject","fail",p.Callbacks("once memory"),"rejected"],["notify","progress",p.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return p.Deferred(function(c){p.each(b,function(b,d){var f=d[0],g=a[b];e[d[1]](p.isFunction(g)?function(){var a=g.apply(this,arguments);a&&p.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f+"With"](this===e?c:this,[a])}:c[f])}),a=null}).promise()},promise:function(a){return a!=null?p.extend(a,d):d}},e={};return d.pipe=d.then,p.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[a^1][2].disable,b[2][2].lock),e[f[0]]=g.fire,e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=k.call(arguments),d=c.length,e=d!==1||a&&p.isFunction(a.promise)?d:0,f=e===1?a:p.Deferred(),g=function(a,b,c){return function(d){b[a]=this,c[a]=arguments.length>1?k.call(arguments):d,c===h?f.notifyWith(b,c):--e||f.resolveWith(b,c)}},h,i,j;if(d>1){h=new Array(d),i=new Array(d),j=new Array(d);for(;b<d;b++)c[b]&&p.isFunction(c[b].promise)?c[b].promise().done(g(b,j,c)).fail(f.reject).progress(g(b,i,h)):--e}return e||f.resolveWith(j,c),f.promise()}}),p.support=function(){var b,c,d,f,g,h,i,j,k,l,m,n=e.createElement("div");n.setAttribute("className","t"),n.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",c=n.getElementsByTagName("*"),d=n.getElementsByTagName("a")[0],d.style.cssText="top:1px;float:left;opacity:.5";if(!c||!c.length)return{};f=e.createElement("select"),g=f.appendChild(e.createElement("option")),h=n.getElementsByTagName("input")[0],b={leadingWhitespace:n.firstChild.nodeType===3,tbody:!n.getElementsByTagName("tbody").length,htmlSerialize:!!n.getElementsByTagName("link").length,style:/top/.test(d.getAttribute("style")),hrefNormalized:d.getAttribute("href")==="/a",opacity:/^0.5/.test(d.style.opacity),cssFloat:!!d.style.cssFloat,checkOn:h.value==="on",optSelected:g.selected,getSetAttribute:n.className!=="t",enctype:!!e.createElement("form").enctype,html5Clone:e.createElement("nav").cloneNode(!0).outerHTML!=="<:nav></:nav>",boxModel:e.compatMode==="CSS1Compat",submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,boxSizingReliable:!0,pixelPosition:!1},h.checked=!0,b.noCloneChecked=h.cloneNode(!0).checked,f.disabled=!0,b.optDisabled=!g.disabled;try{delete n.test}catch(o){b.deleteExpando=!1}!n.addEventListener&&n.attachEvent&&n.fireEvent&&(n.attachEvent("onclick",m=function(){b.noCloneEvent=!1}),n.cloneNode(!0).fireEvent("onclick"),n.detachEvent("onclick",m)),h=e.createElement("input"),h.value="t",h.setAttribute("type","radio"),b.radioValue=h.value==="t",h.setAttribute("checked","checked"),h.setAttribute("name","t"),n.appendChild(h),i=e.createDocumentFragment(),i.appendChild(n.lastChild),b.checkClone=i.cloneNode(!0).cloneNode(!0).lastChild.checked,b.appendChecked=h.checked,i.removeChild(h),i.appendChild(n);if(n.attachEvent)for(k in{submit:!0,change:!0,focusin:!0})j="on"+k,l=j in n,l||(n.setAttribute(j,"return;"),l=typeof n[j]=="function"),b[k+"Bubbles"]=l;return p(function(){var c,d,f,g,h="padding:0;margin:0;border:0;display:block;overflow:hidden;",i=e.getElementsByTagName("body")[0];if(!i)return;c=e.createElement("div"),c.style.cssText="visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px",i.insertBefore(c,i.firstChild),d=e.createElement("div"),c.appendChild(d),d.innerHTML="<table><tr><td></td><td>t</td></tr></table>",f=d.getElementsByTagName("td"),f[0].style.cssText="padding:0;margin:0;border:0;display:none",l=f[0].offsetHeight===0,f[0].style.display="",f[1].style.display="none",b.reliableHiddenOffsets=l&&f[0].offsetHeight===0,d.innerHTML="",d.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",b.boxSizing=d.offsetWidth===4,b.doesNotIncludeMarginInBodyOffset=i.offsetTop!==1,a.getComputedStyle&&(b.pixelPosition=(a.getComputedStyle(d,null)||{}).top!=="1%",b.boxSizingReliable=(a.getComputedStyle(d,null)||{width:"4px"}).width==="4px",g=e.createElement("div"),g.style.cssText=d.style.cssText=h,g.style.marginRight=g.style.width="0",d.style.width="1px",d.appendChild(g),b.reliableMarginRight=!parseFloat((a.getComputedStyle(g,null)||{}).marginRight)),typeof d.style.zoom!="undefined"&&(d.innerHTML="",d.style.cssText=h+"width:1px;padding:1px;display:inline;zoom:1",b.inlineBlockNeedsLayout=d.offsetWidth===3,d.style.display="block",d.style.overflow="visible",d.innerHTML="<div></div>",d.firstChild.style.width="5px",b.shrinkWrapBlocks=d.offsetWidth!==3,c.style.zoom=1),i.removeChild(c),c=d=f=g=null}),i.removeChild(n),c=d=f=g=h=i=n=null,b}();var H=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,I=/([A-Z])/g;p.extend({cache:{},deletedIds:[],uuid:0,expando:"jQuery"+(p.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(a){return a=a.nodeType?p.cache[a[p.expando]]:a[p.expando],!!a&&!K(a)},data:function(a,c,d,e){if(!p.acceptData(a))return;var f,g,h=p.expando,i=typeof c=="string",j=a.nodeType,k=j?p.cache:a,l=j?a[h]:a[h]&&h;if((!l||!k[l]||!e&&!k[l].data)&&i&&d===b)return;l||(j?a[h]=l=p.deletedIds.pop()||p.guid++:l=h),k[l]||(k[l]={},j||(k[l].toJSON=p.noop));if(typeof c=="object"||typeof c=="function")e?k[l]=p.extend(k[l],c):k[l].data=p.extend(k[l].data,c);return f=k[l],e||(f.data||(f.data={}),f=f.data),d!==b&&(f[p.camelCase(c)]=d),i?(g=f[c],g==null&&(g=f[p.camelCase(c)])):g=f,g},removeData:function(a,b,c){if(!p.acceptData(a))return;var d,e,f,g=a.nodeType,h=g?p.cache:a,i=g?a[p.expando]:p.expando;if(!h[i])return;if(b){d=c?h[i]:h[i].data;if(d){p.isArray(b)||(b in d?b=[b]:(b=p.camelCase(b),b in d?b=[b]:b=b.split(" ")));for(e=0,f=b.length;e<f;e++)delete d[b[e]];if(!(c?K:p.isEmptyObject)(d))return}}if(!c){delete h[i].data;if(!K(h[i]))return}g?p.cleanData([a],!0):p.support.deleteExpando||h!=h.window?delete h[i]:h[i]=null},_data:function(a,b,c){return p.data(a,b,c,!0)},acceptData:function(a){var b=a.nodeName&&p.noData[a.nodeName.toLowerCase()];return!b||b!==!0&&a.getAttribute("classid")===b}}),p.fn.extend({data:function(a,c){var d,e,f,g,h,i=this[0],j=0,k=null;if(a===b){if(this.length){k=p.data(i);if(i.nodeType===1&&!p._data(i,"parsedAttrs")){f=i.attributes;for(h=f.length;j<h;j++)g=f[j].name,g.indexOf("data-")||(g=p.camelCase(g.substring(5)),J(i,g,k[g]));p._data(i,"parsedAttrs",!0)}}return k}return typeof a=="object"?this.each(function(){p.data(this,a)}):(d=a.split(".",2),d[1]=d[1]?"."+d[1]:"",e=d[1]+"!",p.access(this,function(c){if(c===b)return k=this.triggerHandler("getData"+e,[d[0]]),k===b&&i&&(k=p.data(i,a),k=J(i,a,k)),k===b&&d[1]?this.data(d[0]):k;d[1]=c,this.each(function(){var b=p(this);b.triggerHandler("setData"+e,d),p.data(this,a,c),b.triggerHandler("changeData"+e,d)})},null,c,arguments.length>1,null,!1))},removeData:function(a){return this.each(function(){p.removeData(this,a)})}}),p.extend({queue:function(a,b,c){var d;if(a)return b=(b||"fx")+"queue",d=p._data(a,b),c&&(!d||p.isArray(c)?d=p._data(a,b,p.makeArray(c)):d.push(c)),d||[]},dequeue:function(a,b){b=b||"fx";var c=p.queue(a,b),d=c.length,e=c.shift(),f=p._queueHooks(a,b),g=function(){p.dequeue(a,b)};e==="inprogress"&&(e=c.shift(),d--),e&&(b==="fx"&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return p._data(a,c)||p._data(a,c,{empty:p.Callbacks("once memory").add(function(){p.removeData(a,b+"queue",!0),p.removeData(a,c,!0)})})}}),p.fn.extend({queue:function(a,c){var d=2;return typeof a!="string"&&(c=a,a="fx",d--),arguments.length<d?p.queue(this[0],a):c===b?this:this.each(function(){var b=p.queue(this,a,c);p._queueHooks(this,a),a==="fx"&&b[0]!=="inprogress"&&p.dequeue(this,a)})},dequeue:function(a){return this.each(function(){p.dequeue(this,a)})},delay:function(a,b){return a=p.fx?p.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,c){var d,e=1,f=p.Deferred(),g=this,h=this.length,i=function(){--e||f.resolveWith(g,[g])};typeof a!="string"&&(c=a,a=b),a=a||"fx";while(h--)d=p._data(g[h],a+"queueHooks"),d&&d.empty&&(e++,d.empty.add(i));return i(),f.promise(c)}});var L,M,N,O=/[\t\r\n]/g,P=/\r/g,Q=/^(?:button|input)$/i,R=/^(?:button|input|object|select|textarea)$/i,S=/^a(?:rea|)$/i,T=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,U=p.support.getSetAttribute;p.fn.extend({attr:function(a,b){return p.access(this,p.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){p.removeAttr(this,a)})},prop:function(a,b){return p.access(this,p.prop,a,b,arguments.length>1)},removeProp:function(a){return a=p.propFix[a]||a,this.each(function(){try{this[a]=b,delete this[a]}catch(c){}})},addClass:function(a){var b,c,d,e,f,g,h;if(p.isFunction(a))return this.each(function(b){p(this).addClass(a.call(this,b,this.className))});if(a&&typeof a=="string"){b=a.split(s);for(c=0,d=this.length;c<d;c++){e=this[c];if(e.nodeType===1)if(!e.className&&b.length===1)e.className=a;else{f=" "+e.className+" ";for(g=0,h=b.length;g<h;g++)f.indexOf(" "+b[g]+" ")<0&&(f+=b[g]+" ");e.className=p.trim(f)}}}return this},removeClass:function(a){var c,d,e,f,g,h,i;if(p.isFunction(a))return this.each(function(b){p(this).removeClass(a.call(this,b,this.className))});if(a&&typeof a=="string"||a===b){c=(a||"").split(s);for(h=0,i=this.length;h<i;h++){e=this[h];if(e.nodeType===1&&e.className){d=(" "+e.className+" ").replace(O," ");for(f=0,g=c.length;f<g;f++)while(d.indexOf(" "+c[f]+" ")>=0)d=d.replace(" "+c[f]+" "," ");e.className=a?p.trim(d):""}}}return this},toggleClass:function(a,b){var c=typeof a,d=typeof b=="boolean";return p.isFunction(a)?this.each(function(c){p(this).toggleClass(a.call(this,c,this.className,b),b)}):this.each(function(){if(c==="string"){var e,f=0,g=p(this),h=b,i=a.split(s);while(e=i[f++])h=d?h:!g.hasClass(e),g[h?"addClass":"removeClass"](e)}else if(c==="undefined"||c==="boolean")this.className&&p._data(this,"__className__",this.className),this.className=this.className||a===!1?"":p._data(this,"__className__")||""})},hasClass:function(a){var b=" "+a+" ",c=0,d=this.length;for(;c<d;c++)if(this[c].nodeType===1&&(" "+this[c].className+" ").replace(O," ").indexOf(b)>=0)return!0;return!1},val:function(a){var c,d,e,f=this[0];if(!arguments.length){if(f)return c=p.valHooks[f.type]||p.valHooks[f.nodeName.toLowerCase()],c&&"get"in c&&(d=c.get(f,"value"))!==b?d:(d=f.value,typeof d=="string"?d.replace(P,""):d==null?"":d);return}return e=p.isFunction(a),this.each(function(d){var f,g=p(this);if(this.nodeType!==1)return;e?f=a.call(this,d,g.val()):f=a,f==null?f="":typeof f=="number"?f+="":p.isArray(f)&&(f=p.map(f,function(a){return a==null?"":a+""})),c=p.valHooks[this.type]||p.valHooks[this.nodeName.toLowerCase()];if(!c||!("set"in c)||c.set(this,f,"value")===b)this.value=f})}}),p.extend({valHooks:{option:{get:function(a){var b=a.attributes.value;return!b||b.specified?a.value:a.text}},select:{get:function(a){var b,c,d,e,f=a.selectedIndex,g=[],h=a.options,i=a.type==="select-one";if(f<0)return null;c=i?f:0,d=i?f+1:h.length;for(;c<d;c++){e=h[c];if(e.selected&&(p.support.optDisabled?!e.disabled:e.getAttribute("disabled")===null)&&(!e.parentNode.disabled||!p.nodeName(e.parentNode,"optgroup"))){b=p(e).val();if(i)return b;g.push(b)}}return i&&!g.length&&h.length?p(h[f]).val():g},set:function(a,b){var c=p.makeArray(b);return p(a).find("option").each(function(){this.selected=p.inArray(p(this).val(),c)>=0}),c.length||(a.selectedIndex=-1),c}}},attrFn:{},attr:function(a,c,d,e){var f,g,h,i=a.nodeType;if(!a||i===3||i===8||i===2)return;if(e&&p.isFunction(p.fn[c]))return p(a)[c](d);if(typeof a.getAttribute=="undefined")return p.prop(a,c,d);h=i!==1||!p.isXMLDoc(a),h&&(c=c.toLowerCase(),g=p.attrHooks[c]||(T.test(c)?M:L));if(d!==b){if(d===null){p.removeAttr(a,c);return}return g&&"set"in g&&h&&(f=g.set(a,d,c))!==b?f:(a.setAttribute(c,d+""),d)}return g&&"get"in g&&h&&(f=g.get(a,c))!==null?f:(f=a.getAttribute(c),f===null?b:f)},removeAttr:function(a,b){var c,d,e,f,g=0;if(b&&a.nodeType===1){d=b.split(s);for(;g<d.length;g++)e=d[g],e&&(c=p.propFix[e]||e,f=T.test(e),f||p.attr(a,e,""),a.removeAttribute(U?e:c),f&&c in a&&(a[c]=!1))}},attrHooks:{type:{set:function(a,b){if(Q.test(a.nodeName)&&a.parentNode)p.error("type property can't be changed");else if(!p.support.radioValue&&b==="radio"&&p.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}},value:{get:function(a,b){return L&&p.nodeName(a,"button")?L.get(a,b):b in a?a.value:null},set:function(a,b,c){if(L&&p.nodeName(a,"button"))return L.set(a,b,c);a.value=b}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(a,c,d){var e,f,g,h=a.nodeType;if(!a||h===3||h===8||h===2)return;return g=h!==1||!p.isXMLDoc(a),g&&(c=p.propFix[c]||c,f=p.propHooks[c]),d!==b?f&&"set"in f&&(e=f.set(a,d,c))!==b?e:a[c]=d:f&&"get"in f&&(e=f.get(a,c))!==null?e:a[c]},propHooks:{tabIndex:{get:function(a){var c=a.getAttributeNode("tabindex");return c&&c.specified?parseInt(c.value,10):R.test(a.nodeName)||S.test(a.nodeName)&&a.href?0:b}}}}),M={get:function(a,c){var d,e=p.prop(a,c);return e===!0||typeof e!="boolean"&&(d=a.getAttributeNode(c))&&d.nodeValue!==!1?c.toLowerCase():b},set:function(a,b,c){var d;return b===!1?p.removeAttr(a,c):(d=p.propFix[c]||c,d in a&&(a[d]=!0),a.setAttribute(c,c.toLowerCase())),c}},U||(N={name:!0,id:!0,coords:!0},L=p.valHooks.button={get:function(a,c){var d;return d=a.getAttributeNode(c),d&&(N[c]?d.value!=="":d.specified)?d.value:b},set:function(a,b,c){var d=a.getAttributeNode(c);return d||(d=e.createAttribute(c),a.setAttributeNode(d)),d.value=b+""}},p.each(["width","height"],function(a,b){p.attrHooks[b]=p.extend(p.attrHooks[b],{set:function(a,c){if(c==="")return a.setAttribute(b,"auto"),c}})}),p.attrHooks.contenteditable={get:L.get,set:function(a,b,c){b===""&&(b="false"),L.set(a,b,c)}}),p.support.hrefNormalized||p.each(["href","src","width","height"],function(a,c){p.attrHooks[c]=p.extend(p.attrHooks[c],{get:function(a){var d=a.getAttribute(c,2);return d===null?b:d}})}),p.support.style||(p.attrHooks.style={get:function(a){return a.style.cssText.toLowerCase()||b},set:function(a,b){return a.style.cssText=b+""}}),p.support.optSelected||(p.propHooks.selected=p.extend(p.propHooks.selected,{get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null}})),p.support.enctype||(p.propFix.enctype="encoding"),p.support.checkOn||p.each(["radio","checkbox"],function(){p.valHooks[this]={get:function(a){return a.getAttribute("value")===null?"on":a.value}}}),p.each(["radio","checkbox"],function(){p.valHooks[this]=p.extend(p.valHooks[this],{set:function(a,b){if(p.isArray(b))return a.checked=p.inArray(p(a).val(),b)>=0}})});var V=/^(?:textarea|input|select)$/i,W=/^([^\.]*|)(?:\.(.+)|)$/,X=/(?:^|\s)hover(\.\S+|)\b/,Y=/^key/,Z=/^(?:mouse|contextmenu)|click/,$=/^(?:focusinfocus|focusoutblur)$/,_=function(a){return p.event.special.hover?a:a.replace(X,"mouseenter$1 mouseleave$1")};p.event={add:function(a,c,d,e,f){var g,h,i,j,k,l,m,n,o,q,r;if(a.nodeType===3||a.nodeType===8||!c||!d||!(g=p._data(a)))return;d.handler&&(o=d,d=o.handler,f=o.selector),d.guid||(d.guid=p.guid++),i=g.events,i||(g.events=i={}),h=g.handle,h||(g.handle=h=function(a){return typeof p!="undefined"&&(!a||p.event.triggered!==a.type)?p.event.dispatch.apply(h.elem,arguments):b},h.elem=a),c=p.trim(_(c)).split(" ");for(j=0;j<c.length;j++){k=W.exec(c[j])||[],l=k[1],m=(k[2]||"").split(".").sort(),r=p.event.special[l]||{},l=(f?r.delegateType:r.bindType)||l,r=p.event.special[l]||{},n=p.extend({type:l,origType:k[1],data:e,handler:d,guid:d.guid,selector:f,needsContext:f&&p.expr.match.needsContext.test(f),namespace:m.join(".")},o),q=i[l];if(!q){q=i[l]=[],q.delegateCount=0;if(!r.setup||r.setup.call(a,e,m,h)===!1)a.addEventListener?a.addEventListener(l,h,!1):a.attachEvent&&a.attachEvent("on"+l,h)}r.add&&(r.add.call(a,n),n.handler.guid||(n.handler.guid=d.guid)),f?q.splice(q.delegateCount++,0,n):q.push(n),p.event.global[l]=!0}a=null},global:{},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,q,r=p.hasData(a)&&p._data(a);if(!r||!(m=r.events))return;b=p.trim(_(b||"")).split(" ");for(f=0;f<b.length;f++){g=W.exec(b[f])||[],h=i=g[1],j=g[2];if(!h){for(h in m)p.event.remove(a,h+b[f],c,d,!0);continue}n=p.event.special[h]||{},h=(d?n.delegateType:n.bindType)||h,o=m[h]||[],k=o.length,j=j?new RegExp("(^|\\.)"+j.split(".").sort().join("\\.(?:.*\\.|)")+"(\\.|$)"):null;for(l=0;l<o.length;l++)q=o[l],(e||i===q.origType)&&(!c||c.guid===q.guid)&&(!j||j.test(q.namespace))&&(!d||d===q.selector||d==="**"&&q.selector)&&(o.splice(l--,1),q.selector&&o.delegateCount--,n.remove&&n.remove.call(a,q));o.length===0&&k!==o.length&&((!n.teardown||n.teardown.call(a,j,r.handle)===!1)&&p.removeEvent(a,h,r.handle),delete m[h])}p.isEmptyObject(m)&&(delete r.handle,p.removeData(a,"events",!0))},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(c,d,f,g){if(!f||f.nodeType!==3&&f.nodeType!==8){var h,i,j,k,l,m,n,o,q,r,s=c.type||c,t=[];if($.test(s+p.event.triggered))return;s.indexOf("!")>=0&&(s=s.slice(0,-1),i=!0),s.indexOf(".")>=0&&(t=s.split("."),s=t.shift(),t.sort());if((!f||p.event.customEvent[s])&&!p.event.global[s])return;c=typeof c=="object"?c[p.expando]?c:new p.Event(s,c):new p.Event(s),c.type=s,c.isTrigger=!0,c.exclusive=i,c.namespace=t.join("."),c.namespace_re=c.namespace?new RegExp("(^|\\.)"+t.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,m=s.indexOf(":")<0?"on"+s:"";if(!f){h=p.cache;for(j in h)h[j].events&&h[j].events[s]&&p.event.trigger(c,d,h[j].handle.elem,!0);return}c.result=b,c.target||(c.target=f),d=d!=null?p.makeArray(d):[],d.unshift(c),n=p.event.special[s]||{};if(n.trigger&&n.trigger.apply(f,d)===!1)return;q=[[f,n.bindType||s]];if(!g&&!n.noBubble&&!p.isWindow(f)){r=n.delegateType||s,k=$.test(r+s)?f:f.parentNode;for(l=f;k;k=k.parentNode)q.push([k,r]),l=k;l===(f.ownerDocument||e)&&q.push([l.defaultView||l.parentWindow||a,r])}for(j=0;j<q.length&&!c.isPropagationStopped();j++)k=q[j][0],c.type=q[j][1],o=(p._data(k,"events")||{})[c.type]&&p._data(k,"handle"),o&&o.apply(k,d),o=m&&k[m],o&&p.acceptData(k)&&o.apply&&o.apply(k,d)===!1&&c.preventDefault();return c.type=s,!g&&!c.isDefaultPrevented()&&(!n._default||n._default.apply(f.ownerDocument,d)===!1)&&(s!=="click"||!p.nodeName(f,"a"))&&p.acceptData(f)&&m&&f[s]&&(s!=="focus"&&s!=="blur"||c.target.offsetWidth!==0)&&!p.isWindow(f)&&(l=f[m],l&&(f[m]=null),p.event.triggered=s,f[s](),p.event.triggered=b,l&&(f[m]=l)),c.result}return},dispatch:function(c){c=p.event.fix(c||a.event);var d,e,f,g,h,i,j,l,m,n,o=(p._data(this,"events")||{})[c.type]||[],q=o.delegateCount,r=k.call(arguments),s=!c.exclusive&&!c.namespace,t=p.event.special[c.type]||{},u=[];r[0]=c,c.delegateTarget=this;if(t.preDispatch&&t.preDispatch.call(this,c)===!1)return;if(q&&(!c.button||c.type!=="click"))for(f=c.target;f!=this;f=f.parentNode||this)if(f.disabled!==!0||c.type!=="click"){h={},j=[];for(d=0;d<q;d++)l=o[d],m=l.selector,h[m]===b&&(h[m]=l.needsContext?p(m,this).index(f)>=0:p.find(m,this,null,[f]).length),h[m]&&j.push(l);j.length&&u.push({elem:f,matches:j})}o.length>q&&u.push({elem:this,matches:o.slice(q)});for(d=0;d<u.length&&!c.isPropagationStopped();d++){i=u[d],c.currentTarget=i.elem;for(e=0;e<i.matches.length&&!c.isImmediatePropagationStopped();e++){l=i.matches[e];if(s||!c.namespace&&!l.namespace||c.namespace_re&&c.namespace_re.test(l.namespace))c.data=l.data,c.handleObj=l,g=((p.event.special[l.origType]||{}).handle||l.handler).apply(i.elem,r),g!==b&&(c.result=g,g===!1&&(c.preventDefault(),c.stopPropagation()))}}return t.postDispatch&&t.postDispatch.call(this,c),c.result},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return a.which==null&&(a.which=b.charCode!=null?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,c){var d,f,g,h=c.button,i=c.fromElement;return a.pageX==null&&c.clientX!=null&&(d=a.target.ownerDocument||e,f=d.documentElement,g=d.body,a.pageX=c.clientX+(f&&f.scrollLeft||g&&g.scrollLeft||0)-(f&&f.clientLeft||g&&g.clientLeft||0),a.pageY=c.clientY+(f&&f.scrollTop||g&&g.scrollTop||0)-(f&&f.clientTop||g&&g.clientTop||0)),!a.relatedTarget&&i&&(a.relatedTarget=i===a.target?c.toElement:i),!a.which&&h!==b&&(a.which=h&1?1:h&2?3:h&4?2:0),a}},fix:function(a){if(a[p.expando])return a;var b,c,d=a,f=p.event.fixHooks[a.type]||{},g=f.props?this.props.concat(f.props):this.props;a=p.Event(d);for(b=g.length;b;)c=g[--b],a[c]=d[c];return a.target||(a.target=d.srcElement||e),a.target.nodeType===3&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,f.filter?f.filter(a,d):a},special:{load:{noBubble:!0},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(a,b,c){p.isWindow(this)&&(this.onbeforeunload=c)},teardown:function(a,b){this.onbeforeunload===b&&(this.onbeforeunload=null)}}},simulate:function(a,b,c,d){var e=p.extend(new p.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?p.event.trigger(e,null,b):p.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},p.event.handle=p.event.dispatch,p.removeEvent=e.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){var d="on"+b;a.detachEvent&&(typeof a[d]=="undefined"&&(a[d]=null),a.detachEvent(d,c))},p.Event=function(a,b){if(this instanceof p.Event)a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault()?bb:ba):this.type=a,b&&p.extend(this,b),this.timeStamp=a&&a.timeStamp||p.now(),this[p.expando]=!0;else return new p.Event(a,b)},p.Event.prototype={preventDefault:function(){this.isDefaultPrevented=bb;var a=this.originalEvent;if(!a)return;a.preventDefault?a.preventDefault():a.returnValue=!1},stopPropagation:function(){this.isPropagationStopped=bb;var a=this.originalEvent;if(!a)return;a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=bb,this.stopPropagation()},isDefaultPrevented:ba,isPropagationStopped:ba,isImmediatePropagationStopped:ba},p.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){p.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj,g=f.selector;if(!e||e!==d&&!p.contains(d,e))a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b;return c}}}),p.support.submitBubbles||(p.event.special.submit={setup:function(){if(p.nodeName(this,"form"))return!1;p.event.add(this,"click._submit keypress._submit",function(a){var c=a.target,d=p.nodeName(c,"input")||p.nodeName(c,"button")?c.form:b;d&&!p._data(d,"_submit_attached")&&(p.event.add(d,"submit._submit",function(a){a._submit_bubble=!0}),p._data(d,"_submit_attached",!0))})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&p.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){if(p.nodeName(this,"form"))return!1;p.event.remove(this,"._submit")}}),p.support.changeBubbles||(p.event.special.change={setup:function(){if(V.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio")p.event.add(this,"propertychange._change",function(a){a.originalEvent.propertyName==="checked"&&(this._just_changed=!0)}),p.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1),p.event.simulate("change",this,a,!0)});return!1}p.event.add(this,"beforeactivate._change",function(a){var b=a.target;V.test(b.nodeName)&&!p._data(b,"_change_attached")&&(p.event.add(b,"change._change",function(a){this.parentNode&&!a.isSimulated&&!a.isTrigger&&p.event.simulate("change",this.parentNode,a,!0)}),p._data(b,"_change_attached",!0))})},handle:function(a){var b=a.target;if(this!==b||a.isSimulated||a.isTrigger||b.type!=="radio"&&b.type!=="checkbox")return a.handleObj.handler.apply(this,arguments)},teardown:function(){return p.event.remove(this,"._change"),!V.test(this.nodeName)}}),p.support.focusinBubbles||p.each({focus:"focusin",blur:"focusout"},function(a,b){var c=0,d=function(a){p.event.simulate(b,a.target,p.event.fix(a),!0)};p.event.special[b]={setup:function(){c++===0&&e.addEventListener(a,d,!0)},teardown:function(){--c===0&&e.removeEventListener(a,d,!0)}}}),p.fn.extend({on:function(a,c,d,e,f){var g,h;if(typeof a=="object"){typeof c!="string"&&(d=d||c,c=b);for(h in a)this.on(h,c,d,a[h],f);return this}d==null&&e==null?(e=c,d=c=b):e==null&&(typeof c=="string"?(e=d,d=b):(e=d,d=c,c=b));if(e===!1)e=ba;else if(!e)return this;return f===1&&(g=e,e=function(a){return p().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=p.guid++)),this.each(function(){p.event.add(this,a,e,d,c)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,c,d){var e,f;if(a&&a.preventDefault&&a.handleObj)return e=a.handleObj,p(a.delegateTarget).off(e.namespace?e.origType+"."+e.namespace:e.origType,e.selector,e.handler),this;if(typeof a=="object"){for(f in a)this.off(f,c,a[f]);return this}if(c===!1||typeof c=="function")d=c,c=b;return d===!1&&(d=ba),this.each(function(){p.event.remove(this,a,d,c)})},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},live:function(a,b,c){return p(this.context).on(a,this.selector,b,c),this},die:function(a,b){return p(this.context).off(a,this.selector||"**",b),this},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return arguments.length===1?this.off(a,"**"):this.off(b,a||"**",c)},trigger:function(a,b){return this.each(function(){p.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0])return p.event.trigger(a,b,this[0],!0)},toggle:function(a){var b=arguments,c=a.guid||p.guid++,d=0,e=function(c){var e=(p._data(this,"lastToggle"+a.guid)||0)%d;return p._data(this,"lastToggle"+a.guid,e+1),c.preventDefault(),b[e].apply(this,arguments)||!1};e.guid=c;while(d<b.length)b[d++].guid=c;return this.click(e)},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),p.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){p.fn[b]=function(a,c){return c==null&&(c=a,a=null),arguments.length>0?this.on(b,null,a,c):this.trigger(b)},Y.test(b)&&(p.event.fixHooks[b]=p.event.keyHooks),Z.test(b)&&(p.event.fixHooks[b]=p.event.mouseHooks)}),function(a,b){function bc(a,b,c,d){c=c||[],b=b||r;var e,f,i,j,k=b.nodeType;if(!a||typeof a!="string")return c;if(k!==1&&k!==9)return[];i=g(b);if(!i&&!d)if(e=P.exec(a))if(j=e[1]){if(k===9){f=b.getElementById(j);if(!f||!f.parentNode)return c;if(f.id===j)return c.push(f),c}else if(b.ownerDocument&&(f=b.ownerDocument.getElementById(j))&&h(b,f)&&f.id===j)return c.push(f),c}else{if(e[2])return w.apply(c,x.call(b.getElementsByTagName(a),0)),c;if((j=e[3])&&_&&b.getElementsByClassName)return w.apply(c,x.call(b.getElementsByClassName(j),0)),c}return bp(a.replace(L,"$1"),b,c,d,i)}function bd(a){return function(b){var c=b.nodeName.toLowerCase();return c==="input"&&b.type===a}}function be(a){return function(b){var c=b.nodeName.toLowerCase();return(c==="input"||c==="button")&&b.type===a}}function bf(a){return z(function(b){return b=+b,z(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function bg(a,b,c){if(a===b)return c;var d=a.nextSibling;while(d){if(d===b)return-1;d=d.nextSibling}return 1}function bh(a,b){var c,d,f,g,h,i,j,k=C[o][a];if(k)return b?0:k.slice(0);h=a,i=[],j=e.preFilter;while(h){if(!c||(d=M.exec(h)))d&&(h=h.slice(d[0].length)),i.push(f=[]);c=!1;if(d=N.exec(h))f.push(c=new q(d.shift())),h=h.slice(c.length),c.type=d[0].replace(L," ");for(g in e.filter)(d=W[g].exec(h))&&(!j[g]||(d=j[g](d,r,!0)))&&(f.push(c=new q(d.shift())),h=h.slice(c.length),c.type=g,c.matches=d);if(!c)break}return b?h.length:h?bc.error(a):C(a,i).slice(0)}function bi(a,b,d){var e=b.dir,f=d&&b.dir==="parentNode",g=u++;return b.first?function(b,c,d){while(b=b[e])if(f||b.nodeType===1)return a(b,c,d)}:function(b,d,h){if(!h){var i,j=t+" "+g+" ",k=j+c;while(b=b[e])if(f||b.nodeType===1){if((i=b[o])===k)return b.sizset;if(typeof i=="string"&&i.indexOf(j)===0){if(b.sizset)return b}else{b[o]=k;if(a(b,d,h))return b.sizset=!0,b;b.sizset=!1}}}else while(b=b[e])if(f||b.nodeType===1)if(a(b,d,h))return b}}function bj(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function bk(a,b,c,d,e){var f,g=[],h=0,i=a.length,j=b!=null;for(;h<i;h++)if(f=a[h])if(!c||c(f,d,e))g.push(f),j&&b.push(h);return g}function bl(a,b,c,d,e,f){return d&&!d[o]&&(d=bl(d)),e&&!e[o]&&(e=bl(e,f)),z(function(f,g,h,i){if(f&&e)return;var j,k,l,m=[],n=[],o=g.length,p=f||bo(b||"*",h.nodeType?[h]:h,[],f),q=a&&(f||!b)?bk(p,m,a,h,i):p,r=c?e||(f?a:o||d)?[]:g:q;c&&c(q,r,h,i);if(d){l=bk(r,n),d(l,[],h,i),j=l.length;while(j--)if(k=l[j])r[n[j]]=!(q[n[j]]=k)}if(f){j=a&&r.length;while(j--)if(k=r[j])f[m[j]]=!(g[m[j]]=k)}else r=bk(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):w.apply(g,r)})}function bm(a){var b,c,d,f=a.length,g=e.relative[a[0].type],h=g||e.relative[" "],i=g?1:0,j=bi(function(a){return a===b},h,!0),k=bi(function(a){return y.call(b,a)>-1},h,!0),m=[function(a,c,d){return!g&&(d||c!==l)||((b=c).nodeType?j(a,c,d):k(a,c,d))}];for(;i<f;i++)if(c=e.relative[a[i].type])m=[bi(bj(m),c)];else{c=e.filter[a[i].type].apply(null,a[i].matches);if(c[o]){d=++i;for(;d<f;d++)if(e.relative[a[d].type])break;return bl(i>1&&bj(m),i>1&&a.slice(0,i-1).join("").replace(L,"$1"),c,i<d&&bm(a.slice(i,d)),d<f&&bm(a=a.slice(d)),d<f&&a.join(""))}m.push(c)}return bj(m)}function bn(a,b){var d=b.length>0,f=a.length>0,g=function(h,i,j,k,m){var n,o,p,q=[],s=0,u="0",x=h&&[],y=m!=null,z=l,A=h||f&&e.find.TAG("*",m&&i.parentNode||i),B=t+=z==null?1:Math.E;y&&(l=i!==r&&i,c=g.el);for(;(n=A[u])!=null;u++){if(f&&n){for(o=0;p=a[o];o++)if(p(n,i,j)){k.push(n);break}y&&(t=B,c=++g.el)}d&&((n=!p&&n)&&s--,h&&x.push(n))}s+=u;if(d&&u!==s){for(o=0;p=b[o];o++)p(x,q,i,j);if(h){if(s>0)while(u--)!x[u]&&!q[u]&&(q[u]=v.call(k));q=bk(q)}w.apply(k,q),y&&!h&&q.length>0&&s+b.length>1&&bc.uniqueSort(k)}return y&&(t=B,l=z),x};return g.el=0,d?z(g):g}function bo(a,b,c,d){var e=0,f=b.length;for(;e<f;e++)bc(a,b[e],c,d);return c}function bp(a,b,c,d,f){var g,h,j,k,l,m=bh(a),n=m.length;if(!d&&m.length===1){h=m[0]=m[0].slice(0);if(h.length>2&&(j=h[0]).type==="ID"&&b.nodeType===9&&!f&&e.relative[h[1].type]){b=e.find.ID(j.matches[0].replace(V,""),b,f)[0];if(!b)return c;a=a.slice(h.shift().length)}for(g=W.POS.test(a)?-1:h.length-1;g>=0;g--){j=h[g];if(e.relative[k=j.type])break;if(l=e.find[k])if(d=l(j.matches[0].replace(V,""),R.test(h[0].type)&&b.parentNode||b,f)){h.splice(g,1),a=d.length&&h.join("");if(!a)return w.apply(c,x.call(d,0)),c;break}}}return i(a,m)(d,b,f,c,R.test(a)),c}function bq(){}var c,d,e,f,g,h,i,j,k,l,m=!0,n="undefined",o=("sizcache"+Math.random()).replace(".",""),q=String,r=a.document,s=r.documentElement,t=0,u=0,v=[].pop,w=[].push,x=[].slice,y=[].indexOf||function(a){var b=0,c=this.length;for(;b<c;b++)if(this[b]===a)return b;return-1},z=function(a,b){return a[o]=b==null||b,a},A=function(){var a={},b=[];return z(function(c,d){return b.push(c)>e.cacheLength&&delete a[b.shift()],a[c]=d},a)},B=A(),C=A(),D=A(),E="[\\x20\\t\\r\\n\\f]",F="(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+",G=F.replace("w","w#"),H="([*^$|!~]?=)",I="\\["+E+"*("+F+")"+E+"*(?:"+H+E+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+G+")|)|)"+E+"*\\]",J=":("+F+")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:"+I+")|[^:]|\\\\.)*|.*))\\)|)",K=":(even|odd|eq|gt|lt|nth|first|last)(?:\\("+E+"*((?:-\\d)?\\d*)"+E+"*\\)|)(?=[^-]|$)",L=new RegExp("^"+E+"+|((?:^|[^\\\\])(?:\\\\.)*)"+E+"+$","g"),M=new RegExp("^"+E+"*,"+E+"*"),N=new RegExp("^"+E+"*([\\x20\\t\\r\\n\\f>+~])"+E+"*"),O=new RegExp(J),P=/^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,Q=/^:not/,R=/[\x20\t\r\n\f]*[+~]/,S=/:not\($/,T=/h\d/i,U=/input|select|textarea|button/i,V=/\\(?!\\)/g,W={ID:new RegExp("^#("+F+")"),CLASS:new RegExp("^\\.("+F+")"),NAME:new RegExp("^\\[name=['\"]?("+F+")['\"]?\\]"),TAG:new RegExp("^("+F.replace("w","w*")+")"),ATTR:new RegExp("^"+I),PSEUDO:new RegExp("^"+J),POS:new RegExp(K,"i"),CHILD:new RegExp("^:(only|nth|first|last)-child(?:\\("+E+"*(even|odd|(([+-]|)(\\d*)n|)"+E+"*(?:([+-]|)"+E+"*(\\d+)|))"+E+"*\\)|)","i"),needsContext:new RegExp("^"+E+"*[>+~]|"+K,"i")},X=function(a){var b=r.createElement("div");try{return a(b)}catch(c){return!1}finally{b=null}},Y=X(function(a){return a.appendChild(r.createComment("")),!a.getElementsByTagName("*").length}),Z=X(function(a){return a.innerHTML="<a href='#'></a>",a.firstChild&&typeof a.firstChild.getAttribute!==n&&a.firstChild.getAttribute("href")==="#"}),$=X(function(a){a.innerHTML="<select></select>";var b=typeof a.lastChild.getAttribute("multiple");return b!=="boolean"&&b!=="string"}),_=X(function(a){return a.innerHTML="<div class='hidden e'></div><div class='hidden'></div>",!a.getElementsByClassName||!a.getElementsByClassName("e").length?!1:(a.lastChild.className="e",a.getElementsByClassName("e").length===2)}),ba=X(function(a){a.id=o+0,a.innerHTML="<a name='"+o+"'></a><div name='"+o+"'></div>",s.insertBefore(a,s.firstChild);var b=r.getElementsByName&&r.getElementsByName(o).length===2+r.getElementsByName(o+0).length;return d=!r.getElementById(o),s.removeChild(a),b});try{x.call(s.childNodes,0)[0].nodeType}catch(bb){x=function(a){var b,c=[];for(;b=this[a];a++)c.push(b);return c}}bc.matches=function(a,b){return bc(a,null,null,b)},bc.matchesSelector=function(a,b){return bc(b,null,null,[a]).length>0},f=bc.getText=function(a){var b,c="",d=0,e=a.nodeType;if(e){if(e===1||e===9||e===11){if(typeof a.textContent=="string")return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=f(a)}else if(e===3||e===4)return a.nodeValue}else for(;b=a[d];d++)c+=f(b);return c},g=bc.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?b.nodeName!=="HTML":!1},h=bc.contains=s.contains?function(a,b){var c=a.nodeType===9?a.documentElement:a,d=b&&b.parentNode;return a===d||!!(d&&d.nodeType===1&&c.contains&&c.contains(d))}:s.compareDocumentPosition?function(a,b){return b&&!!(a.compareDocumentPosition(b)&16)}:function(a,b){while(b=b.parentNode)if(b===a)return!0;return!1},bc.attr=function(a,b){var c,d=g(a);return d||(b=b.toLowerCase()),(c=e.attrHandle[b])?c(a):d||$?a.getAttribute(b):(c=a.getAttributeNode(b),c?typeof a[b]=="boolean"?a[b]?b:null:c.specified?c.value:null:null)},e=bc.selectors={cacheLength:50,createPseudo:z,match:W,attrHandle:Z?{}:{href:function(a){return a.getAttribute("href",2)},type:function(a){return a.getAttribute("type")}},find:{ID:d?function(a,b,c){if(typeof b.getElementById!==n&&!c){var d=b.getElementById(a);return d&&d.parentNode?[d]:[]}}:function(a,c,d){if(typeof c.getElementById!==n&&!d){var e=c.getElementById(a);return e?e.id===a||typeof e.getAttributeNode!==n&&e.getAttributeNode("id").value===a?[e]:b:[]}},TAG:Y?function(a,b){if(typeof b.getElementsByTagName!==n)return b.getElementsByTagName(a)}:function(a,b){var c=b.getElementsByTagName(a);if(a==="*"){var d,e=[],f=0;for(;d=c[f];f++)d.nodeType===1&&e.push(d);return e}return c},NAME:ba&&function(a,b){if(typeof b.getElementsByName!==n)return b.getElementsByName(name)},CLASS:_&&function(a,b,c){if(typeof b.getElementsByClassName!==n&&!c)return b.getElementsByClassName(a)}},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(V,""),a[3]=(a[4]||a[5]||"").replace(V,""),a[2]==="~="&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),a[1]==="nth"?(a[2]||bc.error(a[0]),a[3]=+(a[3]?a[4]+(a[5]||1):2*(a[2]==="even"||a[2]==="odd")),a[4]=+(a[6]+a[7]||a[2]==="odd")):a[2]&&bc.error(a[0]),a},PSEUDO:function(a){var b,c;if(W.CHILD.test(a[0]))return null;if(a[3])a[2]=a[3];else if(b=a[4])O.test(b)&&(c=bh(b,!0))&&(c=b.indexOf(")",b.length-c)-b.length)&&(b=b.slice(0,c),a[0]=a[0].slice(0,c)),a[2]=b;return a.slice(0,3)}},filter:{ID:d?function(a){return a=a.replace(V,""),function(b){return b.getAttribute("id")===a}}:function(a){return a=a.replace(V,""),function(b){var c=typeof b.getAttributeNode!==n&&b.getAttributeNode("id");return c&&c.value===a}},TAG:function(a){return a==="*"?function(){return!0}:(a=a.replace(V,"").toLowerCase(),function(b){return b.nodeName&&b.nodeName.toLowerCase()===a})},CLASS:function(a){var b=B[o][a];return b||(b=B(a,new RegExp("(^|"+E+")"+a+"("+E+"|$)"))),function(a){return b.test(a.className||typeof a.getAttribute!==n&&a.getAttribute("class")||"")}},ATTR:function(a,b,c){return function(d,e){var f=bc.attr(d,a);return f==null?b==="!=":b?(f+="",b==="="?f===c:b==="!="?f!==c:b==="^="?c&&f.indexOf(c)===0:b==="*="?c&&f.indexOf(c)>-1:b==="$="?c&&f.substr(f.length-c.length)===c:b==="~="?(" "+f+" ").indexOf(c)>-1:b==="|="?f===c||f.substr(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d){return a==="nth"?function(a){var b,e,f=a.parentNode;if(c===1&&d===0)return!0;if(f){e=0;for(b=f.firstChild;b;b=b.nextSibling)if(b.nodeType===1){e++;if(a===b)break}}return e-=d,e===c||e%c===0&&e/c>=0}:function(b){var c=b;switch(a){case"only":case"first":while(c=c.previousSibling)if(c.nodeType===1)return!1;if(a==="first")return!0;c=b;case"last":while(c=c.nextSibling)if(c.nodeType===1)return!1;return!0}}},PSEUDO:function(a,b){var c,d=e.pseudos[a]||e.setFilters[a.toLowerCase()]||bc.error("unsupported pseudo: "+a);return d[o]?d(b):d.length>1?(c=[a,a,"",b],e.setFilters.hasOwnProperty(a.toLowerCase())?z(function(a,c){var e,f=d(a,b),g=f.length;while(g--)e=y.call(a,f[g]),a[e]=!(c[e]=f[g])}):function(a){return d(a,0,c)}):d}},pseudos:{not:z(function(a){var b=[],c=[],d=i(a.replace(L,"$1"));return d[o]?z(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)if(f=g[h])a[h]=!(b[h]=f)}):function(a,e,f){return b[0]=a,d(b,null,f,c),!c.pop()}}),has:z(function(a){return function(b){return bc(a,b).length>0}}),contains:z(function(a){return function(b){return(b.textContent||b.innerText||f(b)).indexOf(a)>-1}}),enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return b==="input"&&!!a.checked||b==="option"&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},parent:function(a){return!e.pseudos.empty(a)},empty:function(a){var b;a=a.firstChild;while(a){if(a.nodeName>"@"||(b=a.nodeType)===3||b===4)return!1;a=a.nextSibling}return!0},header:function(a){return T.test(a.nodeName)},text:function(a){var b,c;return a.nodeName.toLowerCase()==="input"&&(b=a.type)==="text"&&((c=a.getAttribute("type"))==null||c.toLowerCase()===b)},radio:bd("radio"),checkbox:bd("checkbox"),file:bd("file"),password:bd("password"),image:bd("image"),submit:be("submit"),reset:be("reset"),button:function(a){var b=a.nodeName.toLowerCase();return b==="input"&&a.type==="button"||b==="button"},input:function(a){return U.test(a.nodeName)},focus:function(a){var b=a.ownerDocument;return a===b.activeElement&&(!b.hasFocus||b.hasFocus())&&(!!a.type||!!a.href)},active:function(a){return a===a.ownerDocument.activeElement},first:bf(function(a,b,c){return[0]}),last:bf(function(a,b,c){return[b-1]}),eq:bf(function(a,b,c){return[c<0?c+b:c]}),even:bf(function(a,b,c){for(var d=0;d<b;d+=2)a.push(d);return a}),odd:bf(function(a,b,c){for(var d=1;d<b;d+=2)a.push(d);return a}),lt:bf(function(a,b,c){for(var d=c<0?c+b:c;--d>=0;)a.push(d);return a}),gt:bf(function(a,b,c){for(var d=c<0?c+b:c;++d<b;)a.push(d);return a})}},j=s.compareDocumentPosition?function(a,b){return a===b?(k=!0,0):(!a.compareDocumentPosition||!b.compareDocumentPosition?a.compareDocumentPosition:a.compareDocumentPosition(b)&4)?-1:1}:function(a,b){if(a===b)return k=!0,0;if(a.sourceIndex&&b.sourceIndex)return a.sourceIndex-b.sourceIndex;var c,d,e=[],f=[],g=a.parentNode,h=b.parentNode,i=g;if(g===h)return bg(a,b);if(!g)return-1;if(!h)return 1;while(i)e.unshift(i),i=i.parentNode;i=h;while(i)f.unshift(i),i=i.parentNode;c=e.length,d=f.length;for(var j=0;j<c&&j<d;j++)if(e[j]!==f[j])return bg(e[j],f[j]);return j===c?bg(a,f[j],-1):bg(e[j],b,1)},[0,0].sort(j),m=!k,bc.uniqueSort=function(a){var b,c=1;k=m,a.sort(j);if(k)for(;b=a[c];c++)b===a[c-1]&&a.splice(c--,1);return a},bc.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},i=bc.compile=function(a,b){var c,d=[],e=[],f=D[o][a];if(!f){b||(b=bh(a)),c=b.length;while(c--)f=bm(b[c]),f[o]?d.push(f):e.push(f);f=D(a,bn(e,d))}return f},r.querySelectorAll&&function(){var a,b=bp,c=/'|\\/g,d=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,e=[":focus"],f=[":active",":focus"],h=s.matchesSelector||s.mozMatchesSelector||s.webkitMatchesSelector||s.oMatchesSelector||s.msMatchesSelector;X(function(a){a.innerHTML="<select><option selected=''></option></select>",a.querySelectorAll("[selected]").length||e.push("\\["+E+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),a.querySelectorAll(":checked").length||e.push(":checked")}),X(function(a){a.innerHTML="<p test=''></p>",a.querySelectorAll("[test^='']").length&&e.push("[*^$]="+E+"*(?:\"\"|'')"),a.innerHTML="<input type='hidden'/>",a.querySelectorAll(":enabled").length||e.push(":enabled",":disabled")}),e=new RegExp(e.join("|")),bp=function(a,d,f,g,h){if(!g&&!h&&(!e||!e.test(a))){var i,j,k=!0,l=o,m=d,n=d.nodeType===9&&a;if(d.nodeType===1&&d.nodeName.toLowerCase()!=="object"){i=bh(a),(k=d.getAttribute("id"))?l=k.replace(c,"\\$&"):d.setAttribute("id",l),l="[id='"+l+"'] ",j=i.length;while(j--)i[j]=l+i[j].join("");m=R.test(a)&&d.parentNode||d,n=i.join(",")}if(n)try{return w.apply(f,x.call(m.querySelectorAll(n),0)),f}catch(p){}finally{k||d.removeAttribute("id")}}return b(a,d,f,g,h)},h&&(X(function(b){a=h.call(b,"div");try{h.call(b,"[test!='']:sizzle"),f.push("!=",J)}catch(c){}}),f=new RegExp(f.join("|")),bc.matchesSelector=function(b,c){c=c.replace(d,"='$1']");if(!g(b)&&!f.test(c)&&(!e||!e.test(c)))try{var i=h.call(b,c);if(i||a||b.document&&b.document.nodeType!==11)return i}catch(j){}return bc(c,null,null,[b]).length>0})}(),e.pseudos.nth=e.pseudos.eq,e.filters=bq.prototype=e.pseudos,e.setFilters=new bq,bc.attr=p.attr,p.find=bc,p.expr=bc.selectors,p.expr[":"]=p.expr.pseudos,p.unique=bc.uniqueSort,p.text=bc.getText,p.isXMLDoc=bc.isXML,p.contains=bc.contains}(a);var bc=/Until$/,bd=/^(?:parents|prev(?:Until|All))/,be=/^.[^:#\[\.,]*$/,bf=p.expr.match.needsContext,bg={children:!0,contents:!0,next:!0,prev:!0};p.fn.extend({find:function(a){var b,c,d,e,f,g,h=this;if(typeof a!="string")return p(a).filter(function(){for(b=0,c=h.length;b<c;b++)if(p.contains(h[b],this))return!0});g=this.pushStack("","find",a);for(b=0,c=this.length;b<c;b++){d=g.length,p.find(a,this[b],g);if(b>0)for(e=d;e<g.length;e++)for(f=0;f<d;f++)if(g[f]===g[e]){g.splice(e--,1);break}}return g},has:function(a){var b,c=p(a,this),d=c.length;return this.filter(function(){for(b=0;b<d;b++)if(p.contains(this,c[b]))return!0})},not:function(a){return this.pushStack(bj(this,a,!1),"not",a)},filter:function(a){return this.pushStack(bj(this,a,!0),"filter",a)},is:function(a){return!!a&&(typeof a=="string"?bf.test(a)?p(a,this.context).index(this[0])>=0:p.filter(a,this).length>0:this.filter(a).length>0)},closest:function(a,b){var c,d=0,e=this.length,f=[],g=bf.test(a)||typeof a!="string"?p(a,b||this.context):0;for(;d<e;d++){c=this[d];while(c&&c.ownerDocument&&c!==b&&c.nodeType!==11){if(g?g.index(c)>-1:p.find.matchesSelector(c,a)){f.push(c);break}c=c.parentNode}}return f=f.length>1?p.unique(f):f,this.pushStack(f,"closest",a)},index:function(a){return a?typeof a=="string"?p.inArray(this[0],p(a)):p.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.prevAll().length:-1},add:function(a,b){var c=typeof a=="string"?p(a,b):p.makeArray(a&&a.nodeType?[a]:a),d=p.merge(this.get(),c);return this.pushStack(bh(c[0])||bh(d[0])?d:p.unique(d))},addBack:function(a){return this.add(a==null?this.prevObject:this.prevObject.filter(a))}}),p.fn.andSelf=p.fn.addBack,p.each({parent:function(a){var b=a.parentNode;return b&&b.nodeType!==11?b:null},parents:function(a){return p.dir(a,"parentNode")},parentsUntil:function(a,b,c){return p.dir(a,"parentNode",c)},next:function(a){return bi(a,"nextSibling")},prev:function(a){return bi(a,"previousSibling")},nextAll:function(a){return p.dir(a,"nextSibling")},prevAll:function(a){return p.dir(a,"previousSibling")},nextUntil:function(a,b,c){return p.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return p.dir(a,"previousSibling",c)},siblings:function(a){return p.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return p.sibling(a.firstChild)},contents:function(a){return p.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:p.merge([],a.childNodes)}},function(a,b){p.fn[a]=function(c,d){var e=p.map(this,b,c);return bc.test(a)||(d=c),d&&typeof d=="string"&&(e=p.filter(d,e)),e=this.length>1&&!bg[a]?p.unique(e):e,this.length>1&&bd.test(a)&&(e=e.reverse()),this.pushStack(e,a,k.call(arguments).join(","))}}),p.extend({filter:function(a,b,c){return c&&(a=":not("+a+")"),b.length===1?p.find.matchesSelector(b[0],a)?[b[0]]:[]:p.find.matches(a,b)},dir:function(a,c,d){var e=[],f=a[c];while(f&&f.nodeType!==9&&(d===b||f.nodeType!==1||!p(f).is(d)))f.nodeType===1&&e.push(f),f=f[c];return e},sibling:function(a,b){var c=[];for(;a;a=a.nextSibling)a.nodeType===1&&a!==b&&c.push(a);return c}});var bl="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",bm=/ jQuery\d+="(?:null|\d+)"/g,bn=/^\s+/,bo=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bp=/<([\w:]+)/,bq=/<tbody/i,br=/<|&#?\w+;/,bs=/<(?:script|style|link)/i,bt=/<(?:script|object|embed|option|style)/i,bu=new RegExp("<(?:"+bl+")[\\s/>]","i"),bv=/^(?:checkbox|radio)$/,bw=/checked\s*(?:[^=]|=\s*.checked.)/i,bx=/\/(java|ecma)script/i,by=/^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,bz={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},bA=bk(e),bB=bA.appendChild(e.createElement("div"));bz.optgroup=bz.option,bz.tbody=bz.tfoot=bz.colgroup=bz.caption=bz.thead,bz.th=bz.td,p.support.htmlSerialize||(bz._default=[1,"X<div>","</div>"]),p.fn.extend({text:function(a){return p.access(this,function(a){return a===b?p.text(this):this.empty().append((this[0]&&this[0].ownerDocument||e).createTextNode(a))},null,a,arguments.length)},wrapAll:function(a){if(p.isFunction(a))return this.each(function(b){p(this).wrapAll(a.call(this,b))});if(this[0]){var b=p(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&a.firstChild.nodeType===1)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return p.isFunction(a)?this.each(function(b){p(this).wrapInner(a.call(this,b))}):this.each(function(){var b=p(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=p.isFunction(a);return this.each(function(c){p(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){p.nodeName(this,"body")||p(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(a){(this.nodeType===1||this.nodeType===11)&&this.appendChild(a)})},prepend:function(){return this.domManip(arguments,!0,function(a){(this.nodeType===1||this.nodeType===11)&&this.insertBefore(a,this.firstChild)})},before:function(){if(!bh(this[0]))return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this)});if(arguments.length){var a=p.clean(arguments);return this.pushStack(p.merge(a,this),"before",this.selector)}},after:function(){if(!bh(this[0]))return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this.nextSibling)});if(arguments.length){var a=p.clean(arguments);return this.pushStack(p.merge(this,a),"after",this.selector)}},remove:function(a,b){var c,d=0;for(;(c=this[d])!=null;d++)if(!a||p.filter(a,[c]).length)!b&&c.nodeType===1&&(p.cleanData(c.getElementsByTagName("*")),p.cleanData([c])),c.parentNode&&c.parentNode.removeChild(c);return this},empty:function(){var a,b=0;for(;(a=this[b])!=null;b++){a.nodeType===1&&p.cleanData(a.getElementsByTagName("*"));while(a.firstChild)a.removeChild(a.firstChild)}return this},clone:function(a,b){return a=a==null?!1:a,b=b==null?a:b,this.map(function(){return p.clone(this,a,b)})},html:function(a){return p.access(this,function(a){var c=this[0]||{},d=0,e=this.length;if(a===b)return c.nodeType===1?c.innerHTML.replace(bm,""):b;if(typeof a=="string"&&!bs.test(a)&&(p.support.htmlSerialize||!bu.test(a))&&(p.support.leadingWhitespace||!bn.test(a))&&!bz[(bp.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(bo,"<$1></$2>");try{for(;d<e;d++)c=this[d]||{},c.nodeType===1&&(p.cleanData(c.getElementsByTagName("*")),c.innerHTML=a);c=0}catch(f){}}c&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(a){return bh(this[0])?this.length?this.pushStack(p(p.isFunction(a)?a():a),"replaceWith",a):this:p.isFunction(a)?this.each(function(b){var c=p(this),d=c.html();c.replaceWith(a.call(this,b,d))}):(typeof a!="string"&&(a=p(a).detach()),this.each(function(){var b=this.nextSibling,c=this.parentNode;p(this).remove(),b?p(b).before(a):p(c).append(a)}))},detach:function(a){return this.remove(a,!0)},domManip:function(a,c,d){a=[].concat.apply([],a);var e,f,g,h,i=0,j=a[0],k=[],l=this.length;if(!p.support.checkClone&&l>1&&typeof j=="string"&&bw.test(j))return this.each(function(){p(this).domManip(a,c,d)});if(p.isFunction(j))return this.each(function(e){var f=p(this);a[0]=j.call(this,e,c?f.html():b),f.domManip(a,c,d)});if(this[0]){e=p.buildFragment(a,this,k),g=e.fragment,f=g.firstChild,g.childNodes.length===1&&(g=f);if(f){c=c&&p.nodeName(f,"tr");for(h=e.cacheable||l-1;i<l;i++)d.call(c&&p.nodeName(this[i],"table")?bC(this[i],"tbody"):this[i],i===h?g:p.clone(g,!0,!0))}g=f=null,k.length&&p.each(k,function(a,b){b.src?p.ajax?p.ajax({url:b.src,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0}):p.error("no ajax"):p.globalEval((b.text||b.textContent||b.innerHTML||"").replace(by,"")),b.parentNode&&b.parentNode.removeChild(b)})}return this}}),p.buildFragment=function(a,c,d){var f,g,h,i=a[0];return c=c||e,c=!c.nodeType&&c[0]||c,c=c.ownerDocument||c,a.length===1&&typeof i=="string"&&i.length<512&&c===e&&i.charAt(0)==="<"&&!bt.test(i)&&(p.support.checkClone||!bw.test(i))&&(p.support.html5Clone||!bu.test(i))&&(g=!0,f=p.fragments[i],h=f!==b),f||(f=c.createDocumentFragment(),p.clean(a,c,f,d),g&&(p.fragments[i]=h&&f)),{fragment:f,cacheable:g}},p.fragments={},p.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){p.fn[a]=function(c){var d,e=0,f=[],g=p(c),h=g.length,i=this.length===1&&this[0].parentNode;if((i==null||i&&i.nodeType===11&&i.childNodes.length===1)&&h===1)return g[b](this[0]),this;for(;e<h;e++)d=(e>0?this.clone(!0):this).get(),p(g[e])[b](d),f=f.concat(d);return this.pushStack(f,a,g.selector)}}),p.extend({clone:function(a,b,c){var d,e,f,g;p.support.html5Clone||p.isXMLDoc(a)||!bu.test("<"+a.nodeName+">")?g=a.cloneNode(!0):(bB.innerHTML=a.outerHTML,bB.removeChild(g=bB.firstChild));if((!p.support.noCloneEvent||!p.support.noCloneChecked)&&(a.nodeType===1||a.nodeType===11)&&!p.isXMLDoc(a)){bE(a,g),d=bF(a),e=bF(g);for(f=0;d[f];++f)e[f]&&bE(d[f],e[f])}if(b){bD(a,g);if(c){d=bF(a),e=bF(g);for(f=0;d[f];++f)bD(d[f],e[f])}}return d=e=null,g},clean:function(a,b,c,d){var f,g,h,i,j,k,l,m,n,o,q,r,s=b===e&&bA,t=[];if(!b||typeof b.createDocumentFragment=="undefined")b=e;for(f=0;(h=a[f])!=null;f++){typeof h=="number"&&(h+="");if(!h)continue;if(typeof h=="string")if(!br.test(h))h=b.createTextNode(h);else{s=s||bk(b),l=b.createElement("div"),s.appendChild(l),h=h.replace(bo,"<$1></$2>"),i=(bp.exec(h)||["",""])[1].toLowerCase(),j=bz[i]||bz._default,k=j[0],l.innerHTML=j[1]+h+j[2];while(k--)l=l.lastChild;if(!p.support.tbody){m=bq.test(h),n=i==="table"&&!m?l.firstChild&&l.firstChild.childNodes:j[1]==="<table>"&&!m?l.childNodes:[];for(g=n.length-1;g>=0;--g)p.nodeName(n[g],"tbody")&&!n[g].childNodes.length&&n[g].parentNode.removeChild(n[g])}!p.support.leadingWhitespace&&bn.test(h)&&l.insertBefore(b.createTextNode(bn.exec(h)[0]),l.firstChild),h=l.childNodes,l.parentNode.removeChild(l)}h.nodeType?t.push(h):p.merge(t,h)}l&&(h=l=s=null);if(!p.support.appendChecked)for(f=0;(h=t[f])!=null;f++)p.nodeName(h,"input")?bG(h):typeof h.getElementsByTagName!="undefined"&&p.grep(h.getElementsByTagName("input"),bG);if(c){q=function(a){if(!a.type||bx.test(a.type))return d?d.push(a.parentNode?a.parentNode.removeChild(a):a):c.appendChild(a)};for(f=0;(h=t[f])!=null;f++)if(!p.nodeName(h,"script")||!q(h))c.appendChild(h),typeof h.getElementsByTagName!="undefined"&&(r=p.grep(p.merge([],h.getElementsByTagName("script")),q),t.splice.apply(t,[f+1,0].concat(r)),f+=r.length)}return t},cleanData:function(a,b){var c,d,e,f,g=0,h=p.expando,i=p.cache,j=p.support.deleteExpando,k=p.event.special;for(;(e=a[g])!=null;g++)if(b||p.acceptData(e)){d=e[h],c=d&&i[d];if(c){if(c.events)for(f in c.events)k[f]?p.event.remove(e,f):p.removeEvent(e,f,c.handle);i[d]&&(delete i[d],j?delete e[h]:e.removeAttribute?e.removeAttribute(h):e[h]=null,p.deletedIds.push(d))}}}}),function(){var a,b;p.uaMatch=function(a){a=a.toLowerCase();var b=/(chrome)[ \/]([\w.]+)/.exec(a)||/(webkit)[ \/]([\w.]+)/.exec(a)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a)||/(msie) ([\w.]+)/.exec(a)||a.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},a=p.uaMatch(g.userAgent),b={},a.browser&&(b[a.browser]=!0,b.version=a.version),b.chrome?b.webkit=!0:b.webkit&&(b.safari=!0),p.browser=b,p.sub=function(){function a(b,c){return new a.fn.init(b,c)}p.extend(!0,a,this),a.superclass=this,a.fn=a.prototype=this(),a.fn.constructor=a,a.sub=this.sub,a.fn.init=function c(c,d){return d&&d instanceof p&&!(d instanceof a)&&(d=a(d)),p.fn.init.call(this,c,d,b)},a.fn.init.prototype=a.fn;var b=a(e);return a}}();var bH,bI,bJ,bK=/alpha\([^)]*\)/i,bL=/opacity=([^)]*)/,bM=/^(top|right|bottom|left)$/,bN=/^(none|table(?!-c[ea]).+)/,bO=/^margin/,bP=new RegExp("^("+q+")(.*)$","i"),bQ=new RegExp("^("+q+")(?!px)[a-z%]+$","i"),bR=new RegExp("^([-+])=("+q+")","i"),bS={},bT={position:"absolute",visibility:"hidden",display:"block"},bU={letterSpacing:0,fontWeight:400},bV=["Top","Right","Bottom","Left"],bW=["Webkit","O","Moz","ms"],bX=p.fn.toggle;p.fn.extend({css:function(a,c){return p.access(this,function(a,c,d){return d!==b?p.style(a,c,d):p.css(a,c)},a,c,arguments.length>1)},show:function(){return b$(this,!0)},hide:function(){return b$(this)},toggle:function(a,b){var c=typeof a=="boolean";return p.isFunction(a)&&p.isFunction(b)?bX.apply(this,arguments):this.each(function(){(c?a:bZ(this))?p(this).show():p(this).hide()})}}),p.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=bH(a,"opacity");return c===""?"1":c}}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":p.support.cssFloat?"cssFloat":"styleFloat"},style:function(a,c,d,e){if(!a||a.nodeType===3||a.nodeType===8||!a.style)return;var f,g,h,i=p.camelCase(c),j=a.style;c=p.cssProps[i]||(p.cssProps[i]=bY(j,i)),h=p.cssHooks[c]||p.cssHooks[i];if(d===b)return h&&"get"in h&&(f=h.get(a,!1,e))!==b?f:j[c];g=typeof d,g==="string"&&(f=bR.exec(d))&&(d=(f[1]+1)*f[2]+parseFloat(p.css(a,c)),g="number");if(d==null||g==="number"&&isNaN(d))return;g==="number"&&!p.cssNumber[i]&&(d+="px");if(!h||!("set"in h)||(d=h.set(a,d,e))!==b)try{j[c]=d}catch(k){}},css:function(a,c,d,e){var f,g,h,i=p.camelCase(c);return c=p.cssProps[i]||(p.cssProps[i]=bY(a.style,i)),h=p.cssHooks[c]||p.cssHooks[i],h&&"get"in h&&(f=h.get(a,!0,e)),f===b&&(f=bH(a,c)),f==="normal"&&c in bU&&(f=bU[c]),d||e!==b?(g=parseFloat(f),d||p.isNumeric(g)?g||0:f):f},swap:function(a,b,c){var d,e,f={};for(e in b)f[e]=a.style[e],a.style[e]=b[e];d=c.call(a);for(e in b)a.style[e]=f[e];return d}}),a.getComputedStyle?bH=function(b,c){var d,e,f,g,h=a.getComputedStyle(b,null),i=b.style;return h&&(d=h[c],d===""&&!p.contains(b.ownerDocument,b)&&(d=p.style(b,c)),bQ.test(d)&&bO.test(c)&&(e=i.width,f=i.minWidth,g=i.maxWidth,i.minWidth=i.maxWidth=i.width=d,d=h.width,i.width=e,i.minWidth=f,i.maxWidth=g)),d}:e.documentElement.currentStyle&&(bH=function(a,b){var c,d,e=a.currentStyle&&a.currentStyle[b],f=a.style;return e==null&&f&&f[b]&&(e=f[b]),bQ.test(e)&&!bM.test(b)&&(c=f.left,d=a.runtimeStyle&&a.runtimeStyle.left,d&&(a.runtimeStyle.left=a.currentStyle.left),f.left=b==="fontSize"?"1em":e,e=f.pixelLeft+"px",f.left=c,d&&(a.runtimeStyle.left=d)),e===""?"auto":e}),p.each(["height","width"],function(a,b){p.cssHooks[b]={get:function(a,c,d){if(c)return a.offsetWidth===0&&bN.test(bH(a,"display"))?p.swap(a,bT,function(){return cb(a,b,d)}):cb(a,b,d)},set:function(a,c,d){return b_(a,c,d?ca(a,b,d,p.support.boxSizing&&p.css(a,"boxSizing")==="border-box"):0)}}}),p.support.opacity||(p.cssHooks.opacity={get:function(a,b){return bL.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=p.isNumeric(b)?"alpha(opacity="+b*100+")":"",f=d&&d.filter||c.filter||"";c.zoom=1;if(b>=1&&p.trim(f.replace(bK,""))===""&&c.removeAttribute){c.removeAttribute("filter");if(d&&!d.filter)return}c.filter=bK.test(f)?f.replace(bK,e):f+" "+e}}),p(function(){p.support.reliableMarginRight||(p.cssHooks.marginRight={get:function(a,b){return p.swap(a,{display:"inline-block"},function(){if(b)return bH(a,"marginRight")})}}),!p.support.pixelPosition&&p.fn.position&&p.each(["top","left"],function(a,b){p.cssHooks[b]={get:function(a,c){if(c){var d=bH(a,b);return bQ.test(d)?p(a).position()[b]+"px":d}}}})}),p.expr&&p.expr.filters&&(p.expr.filters.hidden=function(a){return a.offsetWidth===0&&a.offsetHeight===0||!p.support.reliableHiddenOffsets&&(a.style&&a.style.display||bH(a,"display"))==="none"},p.expr.filters.visible=function(a){return!p.expr.filters.hidden(a)}),p.each({margin:"",padding:"",border:"Width"},function(a,b){p.cssHooks[a+b]={expand:function(c){var d,e=typeof c=="string"?c.split(" "):[c],f={};for(d=0;d<4;d++)f[a+bV[d]+b]=e[d]||e[d-2]||e[0];return f}},bO.test(a)||(p.cssHooks[a+b].set=b_)});var cd=/%20/g,ce=/\[\]$/,cf=/\r?\n/g,cg=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,ch=/^(?:select|textarea)/i;p.fn.extend({serialize:function(){return p.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?p.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||ch.test(this.nodeName)||cg.test(this.type))}).map(function(a,b){var c=p(this).val();return c==null?null:p.isArray(c)?p.map(c,function(a,c){return{name:b.name,value:a.replace(cf,"\r\n")}}):{name:b.name,value:c.replace(cf,"\r\n")}}).get()}}),p.param=function(a,c){var d,e=[],f=function(a,b){b=p.isFunction(b)?b():b==null?"":b,e[e.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};c===b&&(c=p.ajaxSettings&&p.ajaxSettings.traditional);if(p.isArray(a)||a.jquery&&!p.isPlainObject(a))p.each(a,function(){f(this.name,this.value)});else for(d in a)ci(d,a[d],c,f);return e.join("&").replace(cd,"+")};var cj,ck,cl=/#.*$/,cm=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,cn=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,co=/^(?:GET|HEAD)$/,cp=/^\/\//,cq=/\?/,cr=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,cs=/([?&])_=[^&]*/,ct=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,cu=p.fn.load,cv={},cw={},cx=["*/"]+["*"];try{ck=f.href}catch(cy){ck=e.createElement("a"),ck.href="",ck=ck.href}cj=ct.exec(ck.toLowerCase())||[],p.fn.load=function(a,c,d){if(typeof a!="string"&&cu)return cu.apply(this,arguments);if(!this.length)return this;var e,f,g,h=this,i=a.indexOf(" ");return i>=0&&(e=a.slice(i,a.length),a=a.slice(0,i)),p.isFunction(c)?(d=c,c=b):c&&typeof c=="object"&&(f="POST"),p.ajax({url:a,type:f,dataType:"html",data:c,complete:function(a,b){d&&h.each(d,g||[a.responseText,b,a])}}).done(function(a){g=arguments,h.html(e?p("<div>").append(a.replace(cr,"")).find(e):a)}),this},p.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(a,b){p.fn[b]=function(a){return this.on(b,a)}}),p.each(["get","post"],function(a,c){p[c]=function(a,d,e,f){return p.isFunction(d)&&(f=f||e,e=d,d=b),p.ajax({type:c,url:a,data:d,success:e,dataType:f})}}),p.extend({getScript:function(a,c){return p.get(a,b,c,"script")},getJSON:function(a,b,c){return p.get(a,b,c,"json")},ajaxSetup:function(a,b){return b?cB(a,p.ajaxSettings):(b=a,a=p.ajaxSettings),cB(a,b),a},ajaxSettings:{url:ck,isLocal:cn.test(cj[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded; charset=UTF-8",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":cx},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":a.String,"text html":!0,"text json":p.parseJSON,"text xml":p.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:cz(cv),ajaxTransport:cz(cw),ajax:function(a,c){function y(a,c,f,i){var k,s,t,u,w,y=c;if(v===2)return;v=2,h&&clearTimeout(h),g=b,e=i||"",x.readyState=a>0?4:0,f&&(u=cC(l,x,f));if(a>=200&&a<300||a===304)l.ifModified&&(w=x.getResponseHeader("Last-Modified"),w&&(p.lastModified[d]=w),w=x.getResponseHeader("Etag"),w&&(p.etag[d]=w)),a===304?(y="notmodified",k=!0):(k=cD(l,u),y=k.state,s=k.data,t=k.error,k=!t);else{t=y;if(!y||a)y="error",a<0&&(a=0)}x.status=a,x.statusText=(c||y)+"",k?o.resolveWith(m,[s,y,x]):o.rejectWith(m,[x,y,t]),x.statusCode(r),r=b,j&&n.trigger("ajax"+(k?"Success":"Error"),[x,l,k?s:t]),q.fireWith(m,[x,y]),j&&(n.trigger("ajaxComplete",[x,l]),--p.active||p.event.trigger("ajaxStop"))}typeof a=="object"&&(c=a,a=b),c=c||{};var d,e,f,g,h,i,j,k,l=p.ajaxSetup({},c),m=l.context||l,n=m!==l&&(m.nodeType||m instanceof p)?p(m):p.event,o=p.Deferred(),q=p.Callbacks("once memory"),r=l.statusCode||{},t={},u={},v=0,w="canceled",x={readyState:0,setRequestHeader:function(a,b){if(!v){var c=a.toLowerCase();a=u[c]=u[c]||a,t[a]=b}return this},getAllResponseHeaders:function(){return v===2?e:null},getResponseHeader:function(a){var c;if(v===2){if(!f){f={};while(c=cm.exec(e))f[c[1].toLowerCase()]=c[2]}c=f[a.toLowerCase()]}return c===b?null:c},overrideMimeType:function(a){return v||(l.mimeType=a),this},abort:function(a){return a=a||w,g&&g.abort(a),y(0,a),this}};o.promise(x),x.success=x.done,x.error=x.fail,x.complete=q.add,x.statusCode=function(a){if(a){var b;if(v<2)for(b in a)r[b]=[r[b],a[b]];else b=a[x.status],x.always(b)}return this},l.url=((a||l.url)+"").replace(cl,"").replace(cp,cj[1]+"//"),l.dataTypes=p.trim(l.dataType||"*").toLowerCase().split(s),l.crossDomain==null&&(i=ct.exec(l.url.toLowerCase())||!1,l.crossDomain=i&&i.join(":")+(i[3]?"":i[1]==="http:"?80:443)!==cj.join(":")+(cj[3]?"":cj[1]==="http:"?80:443)),l.data&&l.processData&&typeof l.data!="string"&&(l.data=p.param(l.data,l.traditional)),cA(cv,l,c,x);if(v===2)return x;j=l.global,l.type=l.type.toUpperCase(),l.hasContent=!co.test(l.type),j&&p.active++===0&&p.event.trigger("ajaxStart");if(!l.hasContent){l.data&&(l.url+=(cq.test(l.url)?"&":"?")+l.data,delete l.data),d=l.url;if(l.cache===!1){var z=p.now(),A=l.url.replace(cs,"$1_="+z);l.url=A+(A===l.url?(cq.test(l.url)?"&":"?")+"_="+z:"")}}(l.data&&l.hasContent&&l.contentType!==!1||c.contentType)&&x.setRequestHeader("Content-Type",l.contentType),l.ifModified&&(d=d||l.url,p.lastModified[d]&&x.setRequestHeader("If-Modified-Since",p.lastModified[d]),p.etag[d]&&x.setRequestHeader("If-None-Match",p.etag[d])),x.setRequestHeader("Accept",l.dataTypes[0]&&l.accepts[l.dataTypes[0]]?l.accepts[l.dataTypes[0]]+(l.dataTypes[0]!=="*"?", "+cx+"; q=0.01":""):l.accepts["*"]);for(k in l.headers)x.setRequestHeader(k,l.headers[k]);if(!l.beforeSend||l.beforeSend.call(m,x,l)!==!1&&v!==2){w="abort";for(k in{success:1,error:1,complete:1})x[k](l[k]);g=cA(cw,l,c,x);if(!g)y(-1,"No Transport");else{x.readyState=1,j&&n.trigger("ajaxSend",[x,l]),l.async&&l.timeout>0&&(h=setTimeout(function(){x.abort("timeout")},l.timeout));try{v=1,g.send(t,y)}catch(B){if(v<2)y(-1,B);else throw B}}return x}return x.abort()},active:0,lastModified:{},etag:{}});var cE=[],cF=/\?/,cG=/(=)\?(?=&|$)|\?\?/,cH=p.now();p.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=cE.pop()||p.expando+"_"+cH++;return this[a]=!0,a}}),p.ajaxPrefilter("json jsonp",function(c,d,e){var f,g,h,i=c.data,j=c.url,k=c.jsonp!==!1,l=k&&cG.test(j),m=k&&!l&&typeof i=="string"&&!(c.contentType||"").indexOf("application/x-www-form-urlencoded")&&cG.test(i);if(c.dataTypes[0]==="jsonp"||l||m)return f=c.jsonpCallback=p.isFunction(c.jsonpCallback)?c.jsonpCallback():c.jsonpCallback,g=a[f],l?c.url=j.replace(cG,"$1"+f):m?c.data=i.replace(cG,"$1"+f):k&&(c.url+=(cF.test(j)?"&":"?")+c.jsonp+"="+f),c.converters["script json"]=function(){return h||p.error(f+" was not called"),h[0]},c.dataTypes[0]="json",a[f]=function(){h=arguments},e.always(function(){a[f]=g,c[f]&&(c.jsonpCallback=d.jsonpCallback,cE.push(f)),h&&p.isFunction(g)&&g(h[0]),h=g=b}),"script"}),p.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(a){return p.globalEval(a),a}}}),p.ajaxPrefilter("script",function(a){a.cache===b&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),p.ajaxTransport("script",function(a){if(a.crossDomain){var c,d=e.head||e.getElementsByTagName("head")[0]||e.documentElement;return{send:function(f,g){c=e.createElement("script"),c.async="async",a.scriptCharset&&(c.charset=a.scriptCharset),c.src=a.url,c.onload=c.onreadystatechange=function(a,e){if(e||!c.readyState||/loaded|complete/.test(c.readyState))c.onload=c.onreadystatechange=null,d&&c.parentNode&&d.removeChild(c),c=b,e||g(200,"success")},d.insertBefore(c,d.firstChild)},abort:function(){c&&c.onload(0,1)}}}});var cI,cJ=a.ActiveXObject?function(){for(var a in cI)cI[a](0,1)}:!1,cK=0;p.ajaxSettings.xhr=a.ActiveXObject?function(){return!this.isLocal&&cL()||cM()}:cL,function(a){p.extend(p.support,{ajax:!!a,cors:!!a&&"withCredentials"in a})}(p.ajaxSettings.xhr()),p.support.ajax&&p.ajaxTransport(function(c){if(!c.crossDomain||p.support.cors){var d;return{send:function(e,f){var g,h,i=c.xhr();c.username?i.open(c.type,c.url,c.async,c.username,c.password):i.open(c.type,c.url,c.async);if(c.xhrFields)for(h in c.xhrFields)i[h]=c.xhrFields[h];c.mimeType&&i.overrideMimeType&&i.overrideMimeType(c.mimeType),!c.crossDomain&&!e["X-Requested-With"]&&(e["X-Requested-With"]="XMLHttpRequest");try{for(h in e)i.setRequestHeader(h,e[h])}catch(j){}i.send(c.hasContent&&c.data||null),d=function(a,e){var h,j,k,l,m;try{if(d&&(e||i.readyState===4)){d=b,g&&(i.onreadystatechange=p.noop,cJ&&delete cI[g]);if(e)i.readyState!==4&&i.abort();else{h=i.status,k=i.getAllResponseHeaders(),l={},m=i.responseXML,m&&m.documentElement&&(l.xml=m);try{l.text=i.responseText}catch(a){}try{j=i.statusText}catch(n){j=""}!h&&c.isLocal&&!c.crossDomain?h=l.text?200:404:h===1223&&(h=204)}}}catch(o){e||f(-1,o)}l&&f(h,j,l,k)},c.async?i.readyState===4?setTimeout(d,0):(g=++cK,cJ&&(cI||(cI={},p(a).unload(cJ)),cI[g]=d),i.onreadystatechange=d):d()},abort:function(){d&&d(0,1)}}}});var cN,cO,cP=/^(?:toggle|show|hide)$/,cQ=new RegExp("^(?:([-+])=|)("+q+")([a-z%]*)$","i"),cR=/queueHooks$/,cS=[cY],cT={"*":[function(a,b){var c,d,e=this.createTween(a,b),f=cQ.exec(b),g=e.cur(),h=+g||0,i=1,j=20;if(f){c=+f[2],d=f[3]||(p.cssNumber[a]?"":"px");if(d!=="px"&&h){h=p.css(e.elem,a,!0)||c||1;do i=i||".5",h=h/i,p.style(e.elem,a,h+d);while(i!==(i=e.cur()/g)&&i!==1&&--j)}e.unit=d,e.start=h,e.end=f[1]?h+(f[1]+1)*c:c}return e}]};p.Animation=p.extend(cW,{tweener:function(a,b){p.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");var c,d=0,e=a.length;for(;d<e;d++)c=a[d],cT[c]=cT[c]||[],cT[c].unshift(b)},prefilter:function(a,b){b?cS.unshift(a):cS.push(a)}}),p.Tween=cZ,cZ.prototype={constructor:cZ,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(p.cssNumber[c]?"":"px")},cur:function(){var a=cZ.propHooks[this.prop];return a&&a.get?a.get(this):cZ.propHooks._default.get(this)},run:function(a){var b,c=cZ.propHooks[this.prop];return this.options.duration?this.pos=b=p.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):cZ.propHooks._default.set(this),this}},cZ.prototype.init.prototype=cZ.prototype,cZ.propHooks={_default:{get:function(a){var b;return a.elem[a.prop]==null||!!a.elem.style&&a.elem.style[a.prop]!=null?(b=p.css(a.elem,a.prop,!1,""),!b||b==="auto"?0:b):a.elem[a.prop]},set:function(a){p.fx.step[a.prop]?p.fx.step[a.prop](a):a.elem.style&&(a.elem.style[p.cssProps[a.prop]]!=null||p.cssHooks[a.prop])?p.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},cZ.propHooks.scrollTop=cZ.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},p.each(["toggle","show","hide"],function(a,b){var c=p.fn[b];p.fn[b]=function(d,e,f){return d==null||typeof d=="boolean"||!a&&p.isFunction(d)&&p.isFunction(e)?c.apply(this,arguments):this.animate(c$(b,!0),d,e,f)}}),p.fn.extend({fadeTo:function(a,b,c,d){return this.filter(bZ).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=p.isEmptyObject(a),f=p.speed(b,c,d),g=function(){var b=cW(this,p.extend({},a),f);e&&b.stop(!0)};return e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,c,d){var e=function(a){var b=a.stop;delete a.stop,b(d)};return typeof a!="string"&&(d=c,c=a,a=b),c&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,c=a!=null&&a+"queueHooks",f=p.timers,g=p._data(this);if(c)g[c]&&g[c].stop&&e(g[c]);else for(c in g)g[c]&&g[c].stop&&cR.test(c)&&e(g[c]);for(c=f.length;c--;)f[c].elem===this&&(a==null||f[c].queue===a)&&(f[c].anim.stop(d),b=!1,f.splice(c,1));(b||!d)&&p.dequeue(this,a)})}}),p.each({slideDown:c$("show"),slideUp:c$("hide"),slideToggle:c$("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){p.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),p.speed=function(a,b,c){var d=a&&typeof a=="object"?p.extend({},a):{complete:c||!c&&b||p.isFunction(a)&&a,duration:a,easing:c&&b||b&&!p.isFunction(b)&&b};d.duration=p.fx.off?0:typeof d.duration=="number"?d.duration:d.duration in p.fx.speeds?p.fx.speeds[d.duration]:p.fx.speeds._default;if(d.queue==null||d.queue===!0)d.queue="fx";return d.old=d.complete,d.complete=function(){p.isFunction(d.old)&&d.old.call(this),d.queue&&p.dequeue(this,d.queue)},d},p.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},p.timers=[],p.fx=cZ.prototype.init,p.fx.tick=function(){var a,b=p.timers,c=0;for(;c<b.length;c++)a=b[c],!a()&&b[c]===a&&b.splice(c--,1);b.length||p.fx.stop()},p.fx.timer=function(a){a()&&p.timers.push(a)&&!cO&&(cO=setInterval(p.fx.tick,p.fx.interval))},p.fx.interval=13,p.fx.stop=function(){clearInterval(cO),cO=null},p.fx.speeds={slow:600,fast:200,_default:400},p.fx.step={},p.expr&&p.expr.filters&&(p.expr.filters.animated=function(a){return p.grep(p.timers,function(b){return a===b.elem}).length});var c_=/^(?:body|html)$/i;p.fn.offset=function(a){if(arguments.length)return a===b?this:this.each(function(b){p.offset.setOffset(this,a,b)});var c,d,e,f,g,h,i,j={top:0,left:0},k=this[0],l=k&&k.ownerDocument;if(!l)return;return(d=l.body)===k?p.offset.bodyOffset(k):(c=l.documentElement,p.contains(c,k)?(typeof k.getBoundingClientRect!="undefined"&&(j=k.getBoundingClientRect()),e=da(l),f=c.clientTop||d.clientTop||0,g=c.clientLeft||d.clientLeft||0,h=e.pageYOffset||c.scrollTop,i=e.pageXOffset||c.scrollLeft,{top:j.top+h-f,left:j.left+i-g}):j)},p.offset={bodyOffset:function(a){var b=a.offsetTop,c=a.offsetLeft;return p.support.doesNotIncludeMarginInBodyOffset&&(b+=parseFloat(p.css(a,"marginTop"))||0,c+=parseFloat(p.css(a,"marginLeft"))||0),{top:b,left:c}},setOffset:function(a,b,c){var d=p.css(a,"position");d==="static"&&(a.style.position="relative");var e=p(a),f=e.offset(),g=p.css(a,"top"),h=p.css(a,"left"),i=(d==="absolute"||d==="fixed")&&p.inArray("auto",[g,h])>-1,j={},k={},l,m;i?(k=e.position(),l=k.top,m=k.left):(l=parseFloat(g)||0,m=parseFloat(h)||0),p.isFunction(b)&&(b=b.call(a,c,f)),b.top!=null&&(j.top=b.top-f.top+l),b.left!=null&&(j.left=b.left-f.left+m),"using"in b?b.using.call(a,j):e.css(j)}},p.fn.extend({position:function(){if(!this[0])return;var a=this[0],b=this.offsetParent(),c=this.offset(),d=c_.test(b[0].nodeName)?{top:0,left:0}:b.offset();return c.top-=parseFloat(p.css(a,"marginTop"))||0,c.left-=parseFloat(p.css(a,"marginLeft"))||0,d.top+=parseFloat(p.css(b[0],"borderTopWidth"))||0,d.left+=parseFloat(p.css(b[0],"borderLeftWidth"))||0,{top:c.top-d.top,left:c.left-d.left}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||e.body;while(a&&!c_.test(a.nodeName)&&p.css(a,"position")==="static")a=a.offsetParent;return a||e.body})}}),p.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,c){var d=/Y/.test(c);p.fn[a]=function(e){return p.access(this,function(a,e,f){var g=da(a);if(f===b)return g?c in g?g[c]:g.document.documentElement[e]:a[e];g?g.scrollTo(d?p(g).scrollLeft():f,d?f:p(g).scrollTop()):a[e]=f},a,e,arguments.length,null)}}),p.each({Height:"height",Width:"width"},function(a,c){p.each({padding:"inner"+a,content:c,"":"outer"+a},function(d,e){p.fn[e]=function(e,f){var g=arguments.length&&(d||typeof e!="boolean"),h=d||(e===!0||f===!0?"margin":"border");return p.access(this,function(c,d,e){var f;return p.isWindow(c)?c.document.documentElement["client"+a]:c.nodeType===9?(f=c.documentElement,Math.max(c.body["scroll"+a],f["scroll"+a],c.body["offset"+a],f["offset"+a],f["client"+a])):e===b?p.css(c,d,e,h):p.style(c,d,e,h)},c,g?e:b,g,null)}})}),a.jQuery=a.$=p,typeof define=="function"&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return p})})(window);;/* sigma.js - A JavaScript library dedicated to graph drawing. - Version: 1.0.3 - Author: Alexis Jacomy, Sciences-Po Médialab - License: MIT */
(function(a){"use strict";var b={},c=function(a){var d,e,f,g,h;c.classes.dispatcher.extend(this);var i=this,j=a||{};if("string"==typeof j||j instanceof HTMLElement?j={renderers:[j]}:"[object Array]"===Object.prototype.toString.call(j)&&(j={renderers:j}),g=j.renderers||j.renderer||j.container,j.renderers&&0!==j.renderers.length||("string"==typeof g||g instanceof HTMLElement||"object"==typeof g&&"container"in g)&&(j.renderers=[g]),j.id){if(b[j.id])throw'sigma: Instance "'+j.id+'" already exists.';Object.defineProperty(this,"id",{value:j.id})}else{for(h=0;b[h];)h++;Object.defineProperty(this,"id",{value:""+h})}for(b[this.id]=this,this.settings=new c.classes.configurable(c.settings,j.settings||{}),Object.defineProperty(this,"graph",{value:new c.classes.graph(this.settings),configurable:!0}),Object.defineProperty(this,"middlewares",{value:[],configurable:!0}),Object.defineProperty(this,"cameras",{value:{},configurable:!0}),Object.defineProperty(this,"renderers",{value:{},configurable:!0}),Object.defineProperty(this,"renderersPerCamera",{value:{},configurable:!0}),Object.defineProperty(this,"cameraFrames",{value:{},configurable:!0}),Object.defineProperty(this,"camera",{get:function(){return this.cameras[0]}}),Object.defineProperty(this,"events",{value:["click","rightClick","clickStage","doubleClickStage","rightClickStage","clickNode","clickNodes","doubleClickNode","doubleClickNodes","rightClickNode","rightClickNodes","overNode","overNodes","outNode","outNodes","downNode","downNodes","upNode","upNodes"],configurable:!0}),this._handler=function(a){var b,c={};for(b in a.data)c[b]=a.data[b];c.renderer=a.target,this.dispatchEvent(a.type,c)}.bind(this),f=j.renderers||[],d=0,e=f.length;e>d;d++)this.addRenderer(f[d]);for(f=j.middlewares||[],d=0,e=f.length;e>d;d++)this.middlewares.push("string"==typeof f[d]?c.middlewares[f[d]]:f[d]);"object"==typeof j.graph&&j.graph&&(this.graph.read(j.graph),this.refresh()),window.addEventListener("resize",function(){i.settings&&i.refresh()})};if(c.prototype.addCamera=function(b){var d,e=this;if(!arguments.length){for(b=0;this.cameras[""+b];)b++;b=""+b}if(this.cameras[b])throw'sigma.addCamera: The camera "'+b+'" already exists.';return d=new c.classes.camera(b,this.graph,this.settings),this.cameras[b]=d,d.quadtree=new c.classes.quad,c.classes.edgequad!==a&&(d.edgequadtree=new c.classes.edgequad),d.bind("coordinatesUpdated",function(a){e.renderCamera(d,d.isAnimated)}),this.renderersPerCamera[b]=[],d},c.prototype.killCamera=function(a){if(a="string"==typeof a?this.cameras[a]:a,!a)throw"sigma.killCamera: The camera is undefined.";var b,c,d=this.renderersPerCamera[a.id];for(c=d.length,b=c-1;b>=0;b--)this.killRenderer(d[b]);return delete this.renderersPerCamera[a.id],delete this.cameraFrames[a.id],delete this.cameras[a.id],a.kill&&a.kill(),this},c.prototype.addRenderer=function(a){var b,d,e,f,g=a||{};if("string"==typeof g?g={container:document.getElementById(g)}:g instanceof HTMLElement&&(g={container:g}),"string"==typeof g.container&&(g.container=document.getElementById(g.container)),"id"in g)b=g.id;else{for(b=0;this.renderers[""+b];)b++;b=""+b}if(this.renderers[b])throw'sigma.addRenderer: The renderer "'+b+'" already exists.';if(d="function"==typeof g.type?g.type:c.renderers[g.type],d=d||c.renderers.def,e="camera"in g?g.camera instanceof c.classes.camera?g.camera:this.cameras[g.camera]||this.addCamera(g.camera):this.addCamera(),this.cameras[e.id]!==e)throw"sigma.addRenderer: The camera is not properly referenced.";return f=new d(this.graph,e,this.settings,g),this.renderers[b]=f,Object.defineProperty(f,"id",{value:b}),f.bind&&f.bind(["click","rightClick","clickStage","doubleClickStage","rightClickStage","clickNode","clickNodes","clickEdge","clickEdges","doubleClickNode","doubleClickNodes","doubleClickEdge","doubleClickEdges","rightClickNode","rightClickNodes","rightClickEdge","rightClickEdges","overNode","overNodes","overEdge","overEdges","outNode","outNodes","outEdge","outEdges","downNode","downNodes","downEdge","downEdges","upNode","upNodes","upEdge","upEdges"],this._handler),this.renderersPerCamera[e.id].push(f),f},c.prototype.killRenderer=function(a){if(a="string"==typeof a?this.renderers[a]:a,!a)throw"sigma.killRenderer: The renderer is undefined.";var b=this.renderersPerCamera[a.camera.id],c=b.indexOf(a);return c>=0&&b.splice(c,1),a.kill&&a.kill(),delete this.renderers[a.id],this},c.prototype.refresh=function(b){var d,e,f,g,h,i,j=0;for(b=b||{},g=this.middlewares||[],d=0,e=g.length;e>d;d++)g[d].call(this,0===d?"":"tmp"+j+":",d===e-1?"ready:":"tmp"+ ++j+":");for(f in this.cameras)h=this.cameras[f],h.settings("autoRescale")&&this.renderersPerCamera[h.id]&&this.renderersPerCamera[h.id].length?c.middlewares.rescale.call(this,g.length?"ready:":"",h.readPrefix,{width:this.renderersPerCamera[h.id][0].width,height:this.renderersPerCamera[h.id][0].height}):c.middlewares.copy.call(this,g.length?"ready:":"",h.readPrefix),b.skipIndexation||(i=c.utils.getBoundaries(this.graph,h.readPrefix),h.quadtree.index(this.graph.nodes(),{prefix:h.readPrefix,bounds:{x:i.minX,y:i.minY,width:i.maxX-i.minX,height:i.maxY-i.minY}}),h.edgequadtree!==a&&h.settings("drawEdges")&&h.settings("enableEdgeHovering")&&h.edgequadtree.index(this.graph,{prefix:h.readPrefix,bounds:{x:i.minX,y:i.minY,width:i.maxX-i.minX,height:i.maxY-i.minY}}));for(g=Object.keys(this.renderers),d=0,e=g.length;e>d;d++)if(this.renderers[g[d]].process)if(this.settings("skipErrors"))try{this.renderers[g[d]].process()}catch(k){console.log('Warning: The renderer "'+g[d]+'" crashed on ".process()"')}else this.renderers[g[d]].process();return this.render(),this},c.prototype.render=function(){var a,b,c;for(c=Object.keys(this.renderers),a=0,b=c.length;b>a;a++)if(this.settings("skipErrors"))try{this.renderers[c[a]].render()}catch(d){this.settings("verbose")&&console.log('Warning: The renderer "'+c[a]+'" crashed on ".render()"')}else this.renderers[c[a]].render();return this},c.prototype.renderCamera=function(a,b){var c,d,e,f=this;if(b)for(e=this.renderersPerCamera[a.id],c=0,d=e.length;d>c;c++)if(this.settings("skipErrors"))try{e[c].render()}catch(g){this.settings("verbose")&&console.log('Warning: The renderer "'+e[c].id+'" crashed on ".render()"')}else e[c].render();else if(!this.cameraFrames[a.id]){for(e=this.renderersPerCamera[a.id],c=0,d=e.length;d>c;c++)if(this.settings("skipErrors"))try{e[c].render()}catch(g){this.settings("verbose")&&console.log('Warning: The renderer "'+e[c].id+'" crashed on ".render()"')}else e[c].render();this.cameraFrames[a.id]=requestAnimationFrame(function(){delete f.cameraFrames[a.id]})}return this},c.prototype.kill=function(){var a;this.dispatchEvent("kill"),this.graph.kill(),delete this.middlewares;for(a in this.renderers)this.killRenderer(this.renderers[a]);for(a in this.cameras)this.killCamera(this.cameras[a]);delete this.renderers,delete this.cameras;for(a in this)this.hasOwnProperty(a)&&delete this[a];delete b[this.id]},c.instances=function(a){return arguments.length?b[a]:c.utils.extend({},b)},c.version="1.0.3","undefined"!=typeof this.sigma)throw"An object called sigma is already in the global scope.";this.sigma=c}).call(this),function(a){"use strict";function b(a,c){var d,e,f,g;if(arguments.length)if(1===arguments.length&&Object(arguments[0])===arguments[0])for(a in arguments[0])b(a,arguments[0][a]);else if(arguments.length>1)for(g=Array.isArray(a)?a:a.split(/ /),d=0,e=g.length;d!==e;d+=1)f=g[d],C[f]||(C[f]=[]),C[f].push({handler:c})}function c(a,b){var c,d,e,f,g,h,i=Array.isArray(a)?a:a.split(/ /);if(arguments.length)if(b)for(c=0,d=i.length;c!==d;c+=1){if(h=i[c],C[h]){for(g=[],e=0,f=C[h].length;e!==f;e+=1)C[h][e].handler!==b&&g.push(C[h][e]);C[h]=g}C[h]&&0===C[h].length&&delete C[h]}else for(c=0,d=i.length;c!==d;c+=1)delete C[i[c]];else C=Object.create(null)}function d(a,b){var c,d,e,f,g,h,i=Array.isArray(a)?a:a.split(/ /);for(b=void 0===b?{}:b,c=0,e=i.length;c!==e;c+=1)if(h=i[c],C[h])for(g={type:h,data:b||{}},d=0,f=C[h].length;d!==f;d+=1)try{C[h][d].handler(g)}catch(j){}}function e(){var a,b,c,d,e=!1,f=s(),g=x.shift();if(c=g.job(),f=s()-f,g.done++,g.time+=f,g.currentTime+=f,g.weightTime=g.currentTime/(g.weight||1),g.averageTime=g.time/g.done,d=g.count?g.count<=g.done:!c,!d){for(a=0,b=x.length;b>a;a++)if(x[a].weightTime>g.weightTime){x.splice(a,0,g),e=!0;break}e||x.push(g)}return d?g:null}function f(a){var b=x.length;w[a.id]=a,a.status="running",b&&(a.weightTime=x[b-1].weightTime,a.currentTime=a.weightTime*(a.weight||1)),a.startTime=s(),d("jobStarted",q(a)),x.push(a)}function g(){var a,b,c;for(a in v)b=v[a],b.after?y[a]=b:f(b),delete v[a];for(u=!!x.length;x.length&&s()-t<B.frameDuration;)if(c=e()){i(c.id);for(a in y)y[a].after===c.id&&(f(y[a]),delete y[a])}u?(t=s(),d("enterFrame"),setTimeout(g,0)):d("stop")}function h(a,b){var c,e,f;if(Array.isArray(a)){for(A=!0,c=0,e=a.length;e>c;c++)h(a[c].id,p(a[c],b));A=!1,u||(t=s(),d("start"),g())}else if("object"==typeof a)if("string"==typeof a.id)h(a.id,a);else{A=!0;for(c in a)"function"==typeof a[c]?h(c,p({job:a[c]},b)):h(c,p(a[c],b));A=!1,u||(t=s(),d("start"),g())}else{if("string"!=typeof a)throw new Error("[conrad.addJob] Wrong arguments.");if(k(a))throw new Error('[conrad.addJob] Job with id "'+a+'" already exists.');if("function"==typeof b)f={id:a,done:0,time:0,status:"waiting",currentTime:0,averageTime:0,weightTime:0,job:b};else{if("object"!=typeof b)throw new Error("[conrad.addJob] Wrong arguments.");f=p({id:a,done:0,time:0,status:"waiting",currentTime:0,averageTime:0,weightTime:0},b)}v[a]=f,d("jobAdded",q(f)),u||A||(t=s(),d("start"),g())}return this}function i(a){var b,c,e,f,g=!1;if(Array.isArray(a))for(b=0,c=a.length;c>b;b++)i(a[b]);else{if("string"!=typeof a)throw new Error("[conrad.killJob] Wrong arguments.");for(e=[w,y,v],b=0,c=e.length;c>b;b++)a in e[b]&&(f=e[b][a],B.history&&(f.status="done",z.push(f)),d("jobEnded",q(f)),delete e[b][a],"function"==typeof f.end&&f.end(),g=!0);for(e=x,b=0,c=e.length;c>b;b++)if(e[b].id===a){e.splice(b,1);break}if(!g)throw new Error('[conrad.killJob] Job "'+a+'" not found.')}return this}function j(){var a,b=p(v,w,y);if(B.history)for(a in b)b[a].status="done",z.push(b[a]),"function"==typeof b[a].end&&b[a].end();return v={},y={},w={},x=[],u=!1,this}function k(a){var b=v[a]||w[a]||y[a];return b?p(b):null}function l(a,b){var c;if("string"==typeof a1&&1===arguments.length)return B[a1];c="object"==typeof a1&&1===arguments.length?a1||{}:{},"string"==typeof a1&&(c[a1]=a2);for(var d in c)void 0!==c[d]?B[d]=c[d]:delete B[d];return this}function m(){return u}function n(){return z=[],this}function o(a,b){var c,d,e,f,g,h,i;if(!arguments.length){g=[];for(d in v)g.push(v[d]);for(d in y)g.push(y[d]);for(d in w)g.push(w[d]);g=g.concat(z)}if("string"==typeof a)switch(a){case"waiting":g=r(y);break;case"running":g=r(w);break;case"done":g=z;break;default:h=a}if(a instanceof RegExp&&(h=a),!h&&("string"==typeof b||b instanceof RegExp)&&(h=b),h){if(i="string"==typeof h,g instanceof Array)c=g;else if("object"==typeof g){c=[];for(d in g)c=c.concat(g[d])}else{c=[];for(d in v)c.push(v[d]);for(d in y)c.push(y[d]);for(d in w)c.push(w[d]);c=c.concat(z)}for(g=[],e=0,f=c.length;f>e;e++)(i?c[e].id===h:c[e].id.match(h))&&g.push(c[e])}return q(g)}function p(){var a,b,c={},d=arguments.length;for(a=d-1;a>=0;a--)for(b in arguments[a])c[b]=arguments[a][b];return c}function q(a){var b,c,d;if(!a)return a;if(Array.isArray(a))for(b=[],c=0,d=a.length;d>c;c++)b.push(q(a[c]));else if("object"==typeof a){b={};for(c in a)b[c]=q(a[c])}else b=a;return b}function r(a){var b,c=[];for(b in a)c.push(a[b]);return c}function s(){return Date.now?Date.now():(new Date).getTime()}if(a.conrad)throw new Error("conrad already exists");var t,u=!1,v={},w={},x=[],y={},z=[],A=!1,B={frameDuration:20,history:!0},C=Object.create(null);Array.isArray||(Array.isArray=function(a){return"[object Array]"===Object.prototype.toString.call(a)});var D={hasJob:k,addJob:h,killJob:i,killAll:j,settings:l,getStats:o,isRunning:m,clearHistory:n,bind:b,unbind:c,version:"0.1.0"};"undefined"!=typeof exports&&("undefined"!=typeof module&&module.exports&&(exports=module.exports=D),exports.conrad=D),a.conrad=D}(this),function(a){"use strict";if("undefined"==typeof sigma)throw"sigma is not declared";var b=this;sigma.utils=sigma.utils||{},sigma.utils.extend=function(){var a,b,c={},d=arguments.length;for(a=d-1;a>=0;a--)for(b in arguments[a])c[b]=arguments[a][b];return c},sigma.utils.dateNow=function(){return Date.now?Date.now():(new Date).getTime()},sigma.utils.pkg=function(a){return(a||"").split(".").reduce(function(a,b){return b in a?a[b]:a[b]={}},b)},sigma.utils.id=function(){var a=0;return function(){return++a}}(),sigma.utils.floatColor=function(a){var b=[0,0,0];return a.match(/^#/)?(a=(a||"").replace(/^#/,""),b=3===a.length?[parseInt(a.charAt(0)+a.charAt(0),16),parseInt(a.charAt(1)+a.charAt(1),16),parseInt(a.charAt(2)+a.charAt(2),16)]:[parseInt(a.charAt(0)+a.charAt(1),16),parseInt(a.charAt(2)+a.charAt(3),16),parseInt(a.charAt(4)+a.charAt(5),16)]):a.match(/^ *rgba? *\(/)&&(a=a.match(/^ *rgba? *\( *([0-9]*) *, *([0-9]*) *, *([0-9]*) *(,.*)?\) *$/),b=[+a[1],+a[2],+a[3]]),256*b[0]*256+256*b[1]+b[2]},sigma.utils.zoomTo=function(a,b,c,d,e){var f,g,h,i=a.settings;g=Math.max(i("zoomMin"),Math.min(i("zoomMax"),a.ratio*d)),g!==a.ratio&&(d=g/a.ratio,h={x:b*(1-d)+a.x,y:c*(1-d)+a.y,ratio:g},e&&e.duration?(f=sigma.misc.animation.killAll(a),e=sigma.utils.extend(e,{easing:f?"quadraticOut":"quadraticInOut"}),sigma.misc.animation.camera(a,h,e)):(a.goTo(h),e&&e.onComplete&&e.onComplete()))},sigma.utils.getQuadraticControlPoint=function(a,b,c,d){return{x:(a+c)/2+(d-b)/4,y:(b+d)/2+(a-c)/4}},sigma.utils.getPointOnQuadraticCurve=function(a,b,c,d,e,f,g){return{x:Math.pow(1-a,2)*b+2*(1-a)*a*f+Math.pow(a,2)*d,y:Math.pow(1-a,2)*c+2*(1-a)*a*g+Math.pow(a,2)*e}},sigma.utils.getPointOnBezierCurve=function(a,b,c,d,e,f,g,h,i){var j=Math.pow(1-a,3),k=3*a*Math.pow(1-a,2),l=3*Math.pow(a,2)*(1-a),m=Math.pow(a,3);return{x:j*b+k*f+l*h+m*d,y:j*c+k*g+l*i+m*e}},sigma.utils.getSelfLoopControlPoints=function(a,b,c){return{x1:a-7*c,y1:b,x2:a,y2:b+7*c}},sigma.utils.getDistance=function(a,b,c,d){return Math.sqrt(Math.pow(c-a,2)+Math.pow(d-b,2))},sigma.utils.getCircleIntersection=function(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o;if(h=d-a,i=e-b,j=Math.sqrt(i*i+h*h),j>c+f)return!1;if(j<Math.abs(c-f))return!1;g=(c*c-f*f+j*j)/(2*j),n=a+h*g/j,o=b+i*g/j,k=Math.sqrt(c*c-g*g),l=-i*(k/j),m=h*(k/j);var p=n+l,q=n-l,r=o+m,s=o-m;return{xi:p,xi_prime:q,yi:r,yi_prime:s}},sigma.utils.isPointOnSegment=function(a,b,c,d,e,f,g){var h=Math.abs((b-d)*(e-c)-(a-c)*(f-d)),i=sigma.utils.getDistance(c,d,e,f),j=h/i;return g>j&&Math.min(c,e)<=a&&a<=Math.max(c,e)&&Math.min(d,f)<=b&&b<=Math.max(d,f)},sigma.utils.isPointOnQuadraticCurve=function(a,b,c,d,e,f,g,h,i){var j=sigma.utils.getDistance(c,d,e,f);if(Math.abs(a-c)>j||Math.abs(b-d)>j)return!1;for(var k,l=sigma.utils.getDistance(a,b,c,d),m=sigma.utils.getDistance(a,b,e,f),n=.5,o=m>l?-.01:.01,p=.001,q=100,r=sigma.utils.getPointOnQuadraticCurve(n,c,d,e,f,g,h),s=sigma.utils.getDistance(a,b,r.x,r.y);q-->0&&n>=0&&1>=n&&s>i&&(o>p||-p>o);)k=s,r=sigma.utils.getPointOnQuadraticCurve(n,c,d,e,f,g,h),s=sigma.utils.getDistance(a,b,r.x,r.y),s>k?(o=-o/2,n+=o):0>n+o||n+o>1?(o/=2,s=k):n+=o;return i>s},sigma.utils.isPointOnBezierCurve=function(a,b,c,d,e,f,g,h,i,j,k){var l=sigma.utils.getDistance(c,d,g,h);if(Math.abs(a-c)>l||Math.abs(b-d)>l)return!1;for(var m,n=sigma.utils.getDistance(a,b,c,d),o=sigma.utils.getDistance(a,b,e,f),p=.5,q=o>n?-.01:.01,r=.001,s=100,t=sigma.utils.getPointOnBezierCurve(p,c,d,e,f,g,h,i,j),u=sigma.utils.getDistance(a,b,t.x,t.y);s-->0&&p>=0&&1>=p&&u>k&&(q>r||-r>q);)m=u,t=sigma.utils.getPointOnBezierCurve(p,c,d,e,f,g,h,i,j),u=sigma.utils.getDistance(a,b,t.x,t.y),u>m?(q=-q/2,p+=q):0>p+q||p+q>1?(q/=2,u=m):p+=q;return k>u},sigma.utils.getX=function(b){return b.offsetX!==a&&b.offsetX||b.layerX!==a&&b.layerX||b.clientX!==a&&b.clientX},sigma.utils.getY=function(b){return b.offsetY!==a&&b.offsetY||b.layerY!==a&&b.layerY||b.clientY!==a&&b.clientY},sigma.utils.getWidth=function(b){var c=b.target.ownerSVGElement?b.target.ownerSVGElement.width:b.target.width;return"number"==typeof c&&c||c!==a&&c.baseVal!==a&&c.baseVal.value},sigma.utils.getHeight=function(b){var c=b.target.ownerSVGElement?b.target.ownerSVGElement.height:b.target.height;return"number"==typeof c&&c||c!==a&&c.baseVal!==a&&c.baseVal.value},sigma.utils.getDelta=function(b){return b.wheelDelta!==a&&b.wheelDelta||b.detail!==a&&-b.detail},sigma.utils.getOffset=function(a){for(var b=0,c=0;a;)c+=parseInt(a.offsetTop),b+=parseInt(a.offsetLeft),a=a.offsetParent;return{top:c,left:b}},sigma.utils.doubleClick=function(a,b,c){var d,e=0;a._doubleClickHandler=a._doubleClickHandler||{},a._doubleClickHandler[b]=a._doubleClickHandler[b]||[],d=a._doubleClickHandler[b],d.push(function(a){return e++,2===e?(e=0,c(a)):void(1===e&&setTimeout(function(){e=0},sigma.settings.doubleClickTimeout))}),a.addEventListener(b,d[d.length-1],!1)},sigma.utils.unbindDoubleClick=function(a,b){for(var c,d=(a._doubleClickHandler||{})[b]||[];c=d.pop();)a.removeEventListener(b,c);delete(a._doubleClickHandler||{})[b]},sigma.utils.easings=sigma.utils.easings||{},sigma.utils.easings.linearNone=function(a){return a},sigma.utils.easings.quadraticIn=function(a){return a*a},sigma.utils.easings.quadraticOut=function(a){return a*(2-a)},sigma.utils.easings.quadraticInOut=function(a){return(a*=2)<1?.5*a*a:-.5*(--a*(a-2)-1)},sigma.utils.easings.cubicIn=function(a){return a*a*a},sigma.utils.easings.cubicOut=function(a){return--a*a*a+1},sigma.utils.easings.cubicInOut=function(a){return(a*=2)<1?.5*a*a*a:.5*((a-=2)*a*a+2)},sigma.utils.loadShader=function(a,b,c,d){var e,f=a.createShader(c);return a.shaderSource(f,b),a.compileShader(f),e=a.getShaderParameter(f,a.COMPILE_STATUS),e?f:(d&&d('Error compiling shader "'+f+'":'+a.getShaderInfoLog(f)),a.deleteShader(f),null)},sigma.utils.loadProgram=function(a,b,c,d,e){var f,g,h=a.createProgram();for(f=0;f<b.length;++f)a.attachShader(h,b[f]);if(c)for(f=0;f<c.length;++f)a.bindAttribLocation(h,locations?locations[f]:f,opt_attribs[f]);return a.linkProgram(h),g=a.getProgramParameter(h,a.LINK_STATUS),g?h:(e&&e("Error in program linking: "+a.getProgramInfoLog(h)),a.deleteProgram(h),null)},sigma.utils.pkg("sigma.utils.matrices"),sigma.utils.matrices.translation=function(a,b){return[1,0,0,0,1,0,a,b,1]},sigma.utils.matrices.rotation=function(a,b){var c=Math.cos(a),d=Math.sin(a);return b?[c,-d,d,c]:[c,-d,0,d,c,0,0,0,1]},sigma.utils.matrices.scale=function(a,b){return b?[a,0,0,a]:[a,0,0,0,a,0,0,0,1]},sigma.utils.matrices.multiply=function(a,b,c){var d=c?2:3,e=a[0*d+0],f=a[0*d+1],g=a[0*d+2],h=a[1*d+0],i=a[1*d+1],j=a[1*d+2],k=a[2*d+0],l=a[2*d+1],m=a[2*d+2],n=b[0*d+0],o=b[0*d+1],p=b[0*d+2],q=b[1*d+0],r=b[1*d+1],s=b[1*d+2],t=b[2*d+0],u=b[2*d+1],v=b[2*d+2];return c?[e*n+f*q,e*o+f*r,h*n+i*q,h*o+i*r]:[e*n+f*q+g*t,e*o+f*r+g*u,e*p+f*s+g*v,h*n+i*q+j*t,h*o+i*r+j*u,h*p+i*s+j*v,k*n+l*q+m*t,k*o+l*r+m*u,k*p+l*s+m*v]}}.call(this),function(a){"use strict";var b,c=0,d=["ms","moz","webkit","o"];for(b=0;b<d.length&&!a.requestAnimationFrame;b++)a.requestAnimationFrame=a[d[b]+"RequestAnimationFrame"],a.cancelAnimationFrame=a[d[b]+"CancelAnimationFrame"]||a[d[b]+"CancelRequestAnimationFrame"];a.requestAnimationFrame||(a.requestAnimationFrame=function(b,d){var e=(new Date).getTime(),f=Math.max(0,16-(e-c)),g=a.setTimeout(function(){b(e+f)},f);return c=e+f,g}),a.cancelAnimationFrame||(a.cancelAnimationFrame=function(a){clearTimeout(a)}),Function.prototype.bind||(Function.prototype.bind=function(a){if("function"!=typeof this)throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");var b,c,d=Array.prototype.slice.call(arguments,1),e=this;return b=function(){},c=function(){return e.apply(this instanceof b&&a?this:a,d.concat(Array.prototype.slice.call(arguments)))},b.prototype=this.prototype,c.prototype=new b,c})}(this),function(a){"use strict";if("undefined"==typeof sigma)throw"sigma is not declared";sigma.utils.pkg("sigma.settings");var b={clone:!0,immutable:!0,verbose:!1,classPrefix:"sigma",defaultNodeType:"def",defaultEdgeType:"def",defaultLabelColor:"#000",defaultEdgeColor:"#000",defaultNodeColor:"#000",defaultLabelSize:14,edgeColor:"source",minArrowSize:0,font:"arial",fontStyle:"",labelColor:"default",labelSize:"fixed",labelSizeRatio:1,labelThreshold:8,webglOversamplingRatio:2,borderSize:0,defaultNodeBorderColor:"#000",hoverFont:"",singleHover:!0,hoverFontStyle:"",labelHoverShadow:"default",labelHoverShadowColor:"#000",nodeHoverColor:"node",defaultNodeHoverColor:"#000",labelHoverBGColor:"default",defaultHoverLabelBGColor:"#fff",labelHoverColor:"default",defaultLabelHoverColor:"#000",edgeHoverColor:"edge",edgeHoverSizeRatio:1,defaultEdgeHoverColor:"#000",edgeHoverExtremities:!1,drawEdges:!0,drawNodes:!0,drawLabels:!0,drawEdgeLabels:!1,batchEdgesDrawing:!1,hideEdgesOnMove:!1,canvasEdgesBatchSize:500,webglEdgesBatchSize:1e3,scalingMode:"inside",sideMargin:0,minEdgeSize:.5,maxEdgeSize:1,minNodeSize:1,maxNodeSize:8,touchEnabled:!0,mouseEnabled:!0,mouseWheelEnabled:!0,doubleClickEnabled:!0,eventsEnabled:!0,zoomingRatio:1.7,doubleClickZoomingRatio:2.2,zoomMin:.0625,zoomMax:2,mouseZoomDuration:200,doubleClickZoomDuration:200,mouseInertiaDuration:200,mouseInertiaRatio:3,touchInertiaDuration:200,touchInertiaRatio:3,doubleClickTimeout:300,doubleTapTimeout:300,dragTimeout:200,autoResize:!0,autoRescale:!0,enableCamera:!0,enableHovering:!0,enableEdgeHovering:!1,edgeHoverPrecision:5,rescaleIgnoreSize:!1,skipErrors:!1,nodesPowRatio:.5,edgesPowRatio:.5,animationsTime:200};sigma.settings=sigma.utils.extend(sigma.settings||{},b)}.call(this),function(){"use strict";var a=function(){Object.defineProperty(this,"_handlers",{value:{}})};a.prototype.bind=function(a,b){var c,d,e,f;if(1===arguments.length&&"object"==typeof arguments[0])for(a in arguments[0])this.bind(a,arguments[0][a]);else{if(2!==arguments.length||"function"!=typeof arguments[1])throw"bind: Wrong arguments.";for(f="string"==typeof a?a.split(" "):a,c=0,d=f.length;c!==d;c+=1)e=f[c],e&&(this._handlers[e]||(this._handlers[e]=[]),this._handlers[e].push({handler:b}))}return this},a.prototype.unbind=function(a,b){var c,d,e,f,g,h,i,j="string"==typeof a?a.split(" "):a;if(!arguments.length){for(g in this._handlers)delete this._handlers[g];return this}if(b)for(c=0,d=j.length;c!==d;c+=1){if(i=j[c],this._handlers[i]){for(h=[],e=0,f=this._handlers[i].length;e!==f;e+=1)this._handlers[i][e].handler!==b&&h.push(this._handlers[i][e]);this._handlers[i]=h}this._handlers[i]&&0===this._handlers[i].length&&delete this._handlers[i]}else for(c=0,d=j.length;c!==d;c+=1)delete this._handlers[j[c]];return this},a.prototype.dispatchEvent=function(a,b){var c,d,e,f,g,h,i,j=this,k="string"==typeof a?a.split(" "):a;for(b=void 0===b?{}:b,c=0,d=k.length;c!==d;c+=1)if(i=k[c],this._handlers[i]){for(h=j.getEvent(i,b),g=[],e=0,f=this._handlers[i].length;e!==f;e+=1)this._handlers[i][e].handler(h),this._handlers[i][e].one||g.push(this._handlers[i][e]);this._handlers[i]=g}return this},a.prototype.getEvent=function(a,b){return{type:a,data:b||{},target:this}},a.extend=function(b,c){var d;for(d in a.prototype)a.prototype.hasOwnProperty(d)&&(b[d]=a.prototype[d]);a.apply(b,c)},"undefined"!=typeof this.sigma?(this.sigma.classes=this.sigma.classes||{},this.sigma.classes.dispatcher=a):"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=a),exports.dispatcher=a):this.dispatcher=a}.call(this),function(){"use strict";var a=function(){var b,c,d={},e=Array.prototype.slice.call(arguments,0),f=function(a,b){var c,g,h,i;if(1===arguments.length&&"string"==typeof a){if(void 0!==d[a])return d[a];for(g=0,h=e.length;h>g;g++)if(void 0!==e[g][a])return e[g][a];return void 0}if("object"==typeof a&&"string"==typeof b)return void 0!==(a||{})[b]?a[b]:f(b);for(c="object"==typeof a&&void 0===b?a:{},"string"==typeof a&&(c[a]=b),g=0,i=Object.keys(c),h=i.length;h>g;g++)d[i[g]]=c[i[g]];return this};for(f.embedObjects=function(){var b=e.concat(d).concat(Array.prototype.splice.call(arguments,0));return a.apply({},b)},b=0,c=arguments.length;c>b;b++)f(arguments[b]);return f};"undefined"!=typeof this.sigma?(this.sigma.classes=this.sigma.classes||{},this.sigma.classes.configurable=a):"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=a),exports.configurable=a):this.configurable=a}.call(this),function(a){"use strict";function b(a,b,c){var d=function(){var d,e;for(d in h[a])h[a][d].apply(b,arguments);e=c.apply(b,arguments);for(d in g[a])g[a][d].apply(b,arguments);return e};return d}function c(a){var b;for(b in a)"hasOwnProperty"in a&&!a.hasOwnProperty(b)||delete a[b];return a}var d=Object.create(null),e=Object.create(null),f=Object.create(null),g=Object.create(null),h=Object.create(null),i={immutable:!0,clone:!0},j=function(a){return i[a]},k=function(a){var c,e,g;g={settings:a||j,nodesArray:[],edgesArray:[],nodesIndex:Object.create(null),edgesIndex:Object.create(null),inNeighborsIndex:Object.create(null),outNeighborsIndex:Object.create(null),allNeighborsIndex:Object.create(null),inNeighborsCount:Object.create(null),outNeighborsCount:Object.create(null),allNeighborsCount:Object.create(null)};for(c in f)f[c].call(g);for(c in d)e=b(c,g,d[c]),this[c]=e,g[c]=e};k.addMethod=function(a,b){if("string"!=typeof a||"function"!=typeof b||2!==arguments.length)throw"addMethod: Wrong arguments.";if(d[a]||k[a])throw'The method "'+a+'" already exists.';return d[a]=b,g[a]=Object.create(null),h[a]=Object.create(null),this},k.hasMethod=function(a){return!(!d[a]&&!k[a])},k.attach=function(a,b,c,d){if("string"!=typeof a||"string"!=typeof b||"function"!=typeof c||arguments.length<3||arguments.length>4)throw"attach: Wrong arguments.";var e;if("constructor"===a)e=f;else if(d){if(!h[a])throw'The method "'+a+'" does not exist.';e=h[a]}else{if(!g[a])throw'The method "'+a+'" does not exist.';e=g[a]}if(e[b])throw'A function "'+b+'" is already attached to the method "'+a+'".';return e[b]=c,this},k.attachBefore=function(a,b,c){return this.attach(a,b,c,!0)},k.addIndex=function(a,b){if("string"!=typeof a||Object(b)!==b||2!==arguments.length)throw"addIndex: Wrong arguments.";if(e[a])throw'The index "'+a+'" already exists.';var c;e[a]=b;for(c in b){if("function"!=typeof b[c])throw"The bindings must be functions.";k.attach(c,a,b[c])}return this},k.addMethod("addNode",function(a){if(Object(a)!==a||1!==arguments.length)throw"addNode: Wrong arguments.";if("string"!=typeof a.id&&"number"!=typeof a.id)throw"The node must have a string or number id.";if(this.nodesIndex[a.id])throw'The node "'+a.id+'" already exists.';var b,c=a.id,d=Object.create(null);if(this.settings("clone"))for(b in a)"id"!==b&&(d[b]=a[b]);else d=a;return this.settings("immutable")?Object.defineProperty(d,"id",{value:c,enumerable:!0}):d.id=c,this.inNeighborsIndex[c]=Object.create(null),this.outNeighborsIndex[c]=Object.create(null),this.allNeighborsIndex[c]=Object.create(null),this.inNeighborsCount[c]=0,this.outNeighborsCount[c]=0,this.allNeighborsCount[c]=0,this.nodesArray.push(d),this.nodesIndex[d.id]=d,this}),k.addMethod("addEdge",function(a){if(Object(a)!==a||1!==arguments.length)throw"addEdge: Wrong arguments.";if("string"!=typeof a.id&&"number"!=typeof a.id)throw"The edge must have a string or number id.";if("string"!=typeof a.source&&"number"!=typeof a.source||!this.nodesIndex[a.source])throw"The edge source must have an existing node id.";if("string"!=typeof a.target&&"number"!=typeof a.target||!this.nodesIndex[a.target])throw"The edge target must have an existing node id.";if(this.edgesIndex[a.id])throw'The edge "'+a.id+'" already exists.';var b,c=Object.create(null);if(this.settings("clone"))for(b in a)"id"!==b&&"source"!==b&&"target"!==b&&(c[b]=a[b]);else c=a;return this.settings("immutable")?(Object.defineProperty(c,"id",{value:a.id,enumerable:!0}),Object.defineProperty(c,"source",{value:a.source,enumerable:!0}),Object.defineProperty(c,"target",{value:a.target,enumerable:!0})):(c.id=a.id,c.source=a.source,c.target=a.target),this.edgesArray.push(c),this.edgesIndex[c.id]=c,this.inNeighborsIndex[c.target][c.source]||(this.inNeighborsIndex[c.target][c.source]=Object.create(null)),this.inNeighborsIndex[c.target][c.source][c.id]=c,this.outNeighborsIndex[c.source][c.target]||(this.outNeighborsIndex[c.source][c.target]=Object.create(null)),this.outNeighborsIndex[c.source][c.target][c.id]=c,this.allNeighborsIndex[c.source][c.target]||(this.allNeighborsIndex[c.source][c.target]=Object.create(null)),this.allNeighborsIndex[c.source][c.target][c.id]=c,c.target!==c.source&&(this.allNeighborsIndex[c.target][c.source]||(this.allNeighborsIndex[c.target][c.source]=Object.create(null)),this.allNeighborsIndex[c.target][c.source][c.id]=c),this.inNeighborsCount[c.target]++,this.outNeighborsCount[c.source]++,this.allNeighborsCount[c.target]++,this.allNeighborsCount[c.source]++,this}),k.addMethod("dropNode",function(a){if("string"!=typeof a&&"number"!=typeof a||1!==arguments.length)throw"dropNode: Wrong arguments.";if(!this.nodesIndex[a])throw'The node "'+a+'" does not exist.';var b,c,d;for(delete this.nodesIndex[a],b=0,d=this.nodesArray.length;d>b;b++)if(this.nodesArray[b].id===a){this.nodesArray.splice(b,1);break}for(b=this.edgesArray.length-1;b>=0;b--)(this.edgesArray[b].source===a||this.edgesArray[b].target===a)&&this.dropEdge(this.edgesArray[b].id);delete this.inNeighborsIndex[a],delete this.outNeighborsIndex[a],delete this.allNeighborsIndex[a],delete this.inNeighborsCount[a],delete this.outNeighborsCount[a],delete this.allNeighborsCount[a];for(c in this.nodesIndex)delete this.inNeighborsIndex[c][a],delete this.outNeighborsIndex[c][a],delete this.allNeighborsIndex[c][a];return this}),k.addMethod("dropEdge",function(a){if("string"!=typeof a&&"number"!=typeof a||1!==arguments.length)throw"dropEdge: Wrong arguments.";if(!this.edgesIndex[a])throw'The edge "'+a+'" does not exist.';var b,c,d;for(d=this.edgesIndex[a],delete this.edgesIndex[a],b=0,c=this.edgesArray.length;c>b;b++)if(this.edgesArray[b].id===a){this.edgesArray.splice(b,1);break}return delete this.inNeighborsIndex[d.target][d.source][d.id],Object.keys(this.inNeighborsIndex[d.target][d.source]).length||delete this.inNeighborsIndex[d.target][d.source],delete this.outNeighborsIndex[d.source][d.target][d.id],Object.keys(this.outNeighborsIndex[d.source][d.target]).length||delete this.outNeighborsIndex[d.source][d.target],delete this.allNeighborsIndex[d.source][d.target][d.id],Object.keys(this.allNeighborsIndex[d.source][d.target]).length||delete this.allNeighborsIndex[d.source][d.target],d.target!==d.source&&(delete this.allNeighborsIndex[d.target][d.source][d.id],Object.keys(this.allNeighborsIndex[d.target][d.source]).length||delete this.allNeighborsIndex[d.target][d.source]),this.inNeighborsCount[d.target]--,this.outNeighborsCount[d.source]--,this.allNeighborsCount[d.source]--,this.allNeighborsCount[d.target]--,this}),k.addMethod("kill",function(){this.nodesArray.length=0,this.edgesArray.length=0,delete this.nodesArray,delete this.edgesArray,delete this.nodesIndex,delete this.edgesIndex,delete this.inNeighborsIndex,delete this.outNeighborsIndex,delete this.allNeighborsIndex,delete this.inNeighborsCount,delete this.outNeighborsCount,delete this.allNeighborsCount}),k.addMethod("clear",function(){return this.nodesArray.length=0,this.edgesArray.length=0,c(this.nodesIndex),c(this.edgesIndex),c(this.nodesIndex),c(this.inNeighborsIndex),c(this.outNeighborsIndex),c(this.allNeighborsIndex),c(this.inNeighborsCount),c(this.outNeighborsCount),c(this.allNeighborsCount),this}),k.addMethod("read",function(a){var b,c,d;for(c=a.nodes||[],b=0,d=c.length;d>b;b++)this.addNode(c[b]);for(c=a.edges||[],b=0,d=c.length;d>b;b++)this.addEdge(c[b]);return this}),k.addMethod("nodes",function(a){if(!arguments.length)return this.nodesArray.slice(0);if(1===arguments.length&&("string"==typeof a||"number"==typeof a))return this.nodesIndex[a];if(1===arguments.length&&"[object Array]"===Object.prototype.toString.call(a)){
var b,c,d=[];for(b=0,c=a.length;c>b;b++){if("string"!=typeof a[b]&&"number"!=typeof a[b])throw"nodes: Wrong arguments.";d.push(this.nodesIndex[a[b]])}return d}throw"nodes: Wrong arguments."}),k.addMethod("degree",function(a,b){if(b={"in":this.inNeighborsCount,out:this.outNeighborsCount}[b||""]||this.allNeighborsCount,"string"==typeof a||"number"==typeof a)return b[a];if("[object Array]"===Object.prototype.toString.call(a)){var c,d,e=[];for(c=0,d=a.length;d>c;c++){if("string"!=typeof a[c]&&"number"!=typeof a[c])throw"degree: Wrong arguments.";e.push(b[a[c]])}return e}throw"degree: Wrong arguments."}),k.addMethod("edges",function(a){if(!arguments.length)return this.edgesArray.slice(0);if(1===arguments.length&&("string"==typeof a||"number"==typeof a))return this.edgesIndex[a];if(1===arguments.length&&"[object Array]"===Object.prototype.toString.call(a)){var b,c,d=[];for(b=0,c=a.length;c>b;b++){if("string"!=typeof a[b]&&"number"!=typeof a[b])throw"edges: Wrong arguments.";d.push(this.edgesIndex[a[b]])}return d}throw"edges: Wrong arguments."}),"undefined"!=typeof sigma?(sigma.classes=sigma.classes||Object.create(null),sigma.classes.graph=k):"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=k),exports.graph=k):this.graph=k}.call(this),function(a){"use strict";if("undefined"==typeof sigma)throw"sigma is not declared";sigma.utils.pkg("sigma.classes"),sigma.classes.camera=function(a,b,c,d){sigma.classes.dispatcher.extend(this),Object.defineProperty(this,"graph",{value:b}),Object.defineProperty(this,"id",{value:a}),Object.defineProperty(this,"readPrefix",{value:"read_cam"+a+":"}),Object.defineProperty(this,"prefix",{value:"cam"+a+":"}),this.x=0,this.y=0,this.ratio=1,this.angle=0,this.isAnimated=!1,this.settings="object"==typeof d&&d?c.embedObject(d):c},sigma.classes.camera.prototype.goTo=function(b){if(!this.settings("enableCamera"))return this;var c,d,e=b||{},f=["x","y","ratio","angle"];for(c=0,d=f.length;d>c;c++)if(e[f[c]]!==a){if("number"!=typeof e[f[c]]||isNaN(e[f[c]]))throw'Value for "'+f[c]+'" is not a number.';this[f[c]]=e[f[c]]}return this.dispatchEvent("coordinatesUpdated"),this},sigma.classes.camera.prototype.applyView=function(b,c,d){d=d||{},c=c!==a?c:this.prefix,b=b!==a?b:this.readPrefix;var e,f,g,h=d.nodes||this.graph.nodes(),i=d.edges||this.graph.edges(),j=Math.cos(this.angle),k=Math.sin(this.angle),l=Math.pow(this.ratio,this.settings("nodesPowRatio")),m=Math.pow(this.ratio,this.settings("edgesPowRatio"));for(e=0,f=h.length;f>e;e++)g=h[e],g[c+"x"]=(((g[b+"x"]||0)-this.x)*j+((g[b+"y"]||0)-this.y)*k)/this.ratio+(d.width||0)/2,g[c+"y"]=(((g[b+"y"]||0)-this.y)*j-((g[b+"x"]||0)-this.x)*k)/this.ratio+(d.height||0)/2,g[c+"size"]=(g[b+"size"]||0)/l;for(e=0,f=i.length;f>e;e++)i[e][c+"size"]=(i[e][b+"size"]||0)/m;return this},sigma.classes.camera.prototype.graphPosition=function(a,b,c){var d=0,e=0,f=Math.cos(this.angle),g=Math.sin(this.angle);return c||(d=-(this.x*f+this.y*g)/this.ratio,e=-(this.y*f-this.x*g)/this.ratio),{x:(a*f+b*g)/this.ratio+d,y:(b*f-a*g)/this.ratio+e}},sigma.classes.camera.prototype.cameraPosition=function(a,b,c){var d=0,e=0,f=Math.cos(this.angle),g=Math.sin(this.angle);return c||(d=-(this.x*f+this.y*g)/this.ratio,e=-(this.y*f-this.x*g)/this.ratio),{x:((a-d)*f-(b-e)*g)*this.ratio,y:((b-e)*f+(a-d)*g)*this.ratio}},sigma.classes.camera.prototype.getMatrix=function(){var a=sigma.utils.matrices.scale(1/this.ratio),b=sigma.utils.matrices.rotation(this.angle),c=sigma.utils.matrices.translation(-this.x,-this.y),d=sigma.utils.matrices.multiply(c,sigma.utils.matrices.multiply(b,a));return d},sigma.classes.camera.prototype.getRectangle=function(a,b){var c=this.cameraPosition(a,0,!0),d=this.cameraPosition(0,b,!0),e=this.cameraPosition(a/2,b/2,!0),f=this.cameraPosition(a/4,0,!0).x,g=this.cameraPosition(0,b/4,!0).y;return{x1:this.x-e.x-f,y1:this.y-e.y-g,x2:this.x-e.x+f+c.x,y2:this.y-e.y-g+c.y,height:Math.sqrt(Math.pow(d.x,2)+Math.pow(d.y+2*g,2))}}}.call(this),function(a){"use strict";function b(a,b){var c=b.x+b.width/2,d=b.y+b.height/2,e=a.y<d,f=a.x<c;return e?f?0:1:f?2:3}function c(a,b){for(var c=[],d=0;4>d;d++)a.x2>=b[d][0].x&&a.x1<=b[d][1].x&&a.y1+a.height>=b[d][0].y&&a.y1<=b[d][2].y&&c.push(d);return c}function d(a,b){for(var c=[],d=0;4>d;d++)j.collision(a,b[d])&&c.push(d);return c}function e(a,b){var c,d,e=b.level+1,f=Math.round(b.bounds.width/2),g=Math.round(b.bounds.height/2),h=Math.round(b.bounds.x),j=Math.round(b.bounds.y);switch(a){case 0:c=h,d=j;break;case 1:c=h+f,d=j;break;case 2:c=h,d=j+g;break;case 3:c=h+f,d=j+g}return i({x:c,y:d,width:f,height:g},e,b.maxElements,b.maxLevel)}function f(b,d,g){if(g.level<g.maxLevel)for(var h=c(d,g.corners),i=0,j=h.length;j>i;i++)g.nodes[h[i]]===a&&(g.nodes[h[i]]=e(h[i],g)),f(b,d,g.nodes[h[i]]);else g.elements.push(b)}function g(c,d){if(d.level<d.maxLevel){var e=b(c,d.bounds);return d.nodes[e]!==a?g(c,d.nodes[e]):[]}return d.elements}function h(b,c,d,e){if(e=e||{},c.level<c.maxLevel)for(var f=d(b,c.corners),g=0,i=f.length;i>g;g++)c.nodes[f[g]]!==a&&h(b,c.nodes[f[g]],d,e);else for(var j=0,k=c.elements.length;k>j;j++)e[c.elements[j].id]===a&&(e[c.elements[j].id]=c.elements[j]);return e}function i(a,b,c,d){return{level:b||0,bounds:a,corners:j.splitSquare(a),maxElements:c||20,maxLevel:d||4,elements:[],nodes:[]}}var j={pointToSquare:function(a){return{x1:a.x-a.size,y1:a.y-a.size,x2:a.x+a.size,y2:a.y-a.size,height:2*a.size}},isAxisAligned:function(a){return a.x1===a.x2||a.y1===a.y2},axisAlignedTopPoints:function(a){return a.y1===a.y2&&a.x1<a.x2?a:a.x1===a.x2&&a.y2>a.y1?{x1:a.x1-a.height,y1:a.y1,x2:a.x1,y2:a.y1,height:a.height}:a.x1===a.x2&&a.y2<a.y1?{x1:a.x1,y1:a.y2,x2:a.x2+a.height,y2:a.y2,height:a.height}:{x1:a.x2,y1:a.y1-a.height,x2:a.x1,y2:a.y1-a.height,height:a.height}},lowerLeftCoor:function(a){var b=Math.sqrt(Math.pow(a.x2-a.x1,2)+Math.pow(a.y2-a.y1,2));return{x:a.x1-(a.y2-a.y1)*a.height/b,y:a.y1+(a.x2-a.x1)*a.height/b}},lowerRightCoor:function(a,b){return{x:b.x-a.x1+a.x2,y:b.y-a.y1+a.y2}},rectangleCorners:function(a){var b=this.lowerLeftCoor(a),c=this.lowerRightCoor(a,b);return[{x:a.x1,y:a.y1},{x:a.x2,y:a.y2},{x:b.x,y:b.y},{x:c.x,y:c.y}]},splitSquare:function(a){return[[{x:a.x,y:a.y},{x:a.x+a.width/2,y:a.y},{x:a.x,y:a.y+a.height/2},{x:a.x+a.width/2,y:a.y+a.height/2}],[{x:a.x+a.width/2,y:a.y},{x:a.x+a.width,y:a.y},{x:a.x+a.width/2,y:a.y+a.height/2},{x:a.x+a.width,y:a.y+a.height/2}],[{x:a.x,y:a.y+a.height/2},{x:a.x+a.width/2,y:a.y+a.height/2},{x:a.x,y:a.y+a.height},{x:a.x+a.width/2,y:a.y+a.height}],[{x:a.x+a.width/2,y:a.y+a.height/2},{x:a.x+a.width,y:a.y+a.height/2},{x:a.x+a.width/2,y:a.y+a.height},{x:a.x+a.width,y:a.y+a.height}]]},axis:function(a,b){return[{x:a[1].x-a[0].x,y:a[1].y-a[0].y},{x:a[1].x-a[3].x,y:a[1].y-a[3].y},{x:b[0].x-b[2].x,y:b[0].y-b[2].y},{x:b[0].x-b[1].x,y:b[0].y-b[1].y}]},projection:function(a,b){var c=(a.x*b.x+a.y*b.y)/(Math.pow(b.x,2)+Math.pow(b.y,2));return{x:c*b.x,y:c*b.y}},axisCollision:function(a,b,c){for(var d=[],e=[],f=0;4>f;f++){var g=this.projection(b[f],a),h=this.projection(c[f],a);d.push(g.x*a.x+g.y*a.y),e.push(h.x*a.x+h.y*a.y)}var i=Math.max.apply(Math,d),j=Math.max.apply(Math,e),k=Math.min.apply(Math,d),l=Math.min.apply(Math,e);return i>=l&&j>=k},collision:function(a,b){for(var c=this.axis(a,b),d=!0,e=0;4>e;e++)d=d&&this.axisCollision(c[e],a,b);return d}},k=function(){this._geom=j,this._tree=null,this._cache={query:!1,result:!1}};k.prototype.index=function(a,b){if(!b.bounds)throw"sigma.classes.quad.index: bounds information not given.";var c=b.prefix||"";this._tree=i(b.bounds,0,b.maxElements,b.maxLevel);for(var d=0,e=a.length;e>d;d++)f(a[d],j.pointToSquare({x:a[d][c+"x"],y:a[d][c+"y"],size:a[d][c+"size"]}),this._tree);return this._cache={query:!1,result:!1},this._tree},k.prototype.point=function(a,b){return this._tree?g({x:a,y:b},this._tree)||[]:[]},k.prototype.area=function(a){var b,e,f=JSON.stringify(a);if(this._cache.query===f)return this._cache.result;j.isAxisAligned(a)?(b=c,e=j.axisAlignedTopPoints(a)):(b=d,e=j.rectangleCorners(a));var g=this._tree?h(e,this._tree,b):[],i=[];for(var k in g)i.push(g[k]);return this._cache.query=f,this._cache.result=i,i},"undefined"!=typeof this.sigma?(this.sigma.classes=this.sigma.classes||{},this.sigma.classes.quad=k):"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=k),exports.quad=k):this.quad=k}.call(this),function(a){"use strict";function b(a,b){var c=b.x+b.width/2,d=b.y+b.height/2,e=a.y<d,f=a.x<c;return e?f?0:1:f?2:3}function c(a,b){for(var c=[],d=0;4>d;d++)a.x2>=b[d][0].x&&a.x1<=b[d][1].x&&a.y1+a.height>=b[d][0].y&&a.y1<=b[d][2].y&&c.push(d);return c}function d(a,b){for(var c=[],d=0;4>d;d++)j.collision(a,b[d])&&c.push(d);return c}function e(a,b){var c,d,e=b.level+1,f=Math.round(b.bounds.width/2),g=Math.round(b.bounds.height/2),h=Math.round(b.bounds.x),j=Math.round(b.bounds.y);switch(a){case 0:c=h,d=j;break;case 1:c=h+f,d=j;break;case 2:c=h,d=j+g;break;case 3:c=h+f,d=j+g}return i({x:c,y:d,width:f,height:g},e,b.maxElements,b.maxLevel)}function f(b,d,g){if(g.level<g.maxLevel)for(var h=c(d,g.corners),i=0,j=h.length;j>i;i++)g.nodes[h[i]]===a&&(g.nodes[h[i]]=e(h[i],g)),f(b,d,g.nodes[h[i]]);else g.elements.push(b)}function g(c,d){if(d.level<d.maxLevel){var e=b(c,d.bounds);return d.nodes[e]!==a?g(c,d.nodes[e]):[]}return d.elements}function h(b,c,d,e){if(e=e||{},c.level<c.maxLevel)for(var f=d(b,c.corners),g=0,i=f.length;i>g;g++)c.nodes[f[g]]!==a&&h(b,c.nodes[f[g]],d,e);else for(var j=0,k=c.elements.length;k>j;j++)e[c.elements[j].id]===a&&(e[c.elements[j].id]=c.elements[j]);return e}function i(a,b,c,d){return{level:b||0,bounds:a,corners:j.splitSquare(a),maxElements:c||40,maxLevel:d||8,elements:[],nodes:[]}}var j={pointToSquare:function(a){return{x1:a.x-a.size,y1:a.y-a.size,x2:a.x+a.size,y2:a.y-a.size,height:2*a.size}},lineToSquare:function(a){return a.y1<a.y2?a.x1<a.x2?{x1:a.x1-a.size,y1:a.y1-a.size,x2:a.x2+a.size,y2:a.y1-a.size,height:a.y2-a.y1+2*a.size}:{x1:a.x2-a.size,y1:a.y1-a.size,x2:a.x1+a.size,y2:a.y1-a.size,height:a.y2-a.y1+2*a.size}:a.x1<a.x2?{x1:a.x1-a.size,y1:a.y2-a.size,x2:a.x2+a.size,y2:a.y2-a.size,height:a.y1-a.y2+2*a.size}:{x1:a.x2-a.size,y1:a.y2-a.size,x2:a.x1+a.size,y2:a.y2-a.size,height:a.y1-a.y2+2*a.size}},quadraticCurveToSquare:function(a,b){var c=sigma.utils.getPointOnQuadraticCurve(.5,a.x1,a.y1,a.x2,a.y2,b.x,b.y),d=Math.min(a.x1,a.x2,c.x),e=Math.max(a.x1,a.x2,c.x),f=Math.min(a.y1,a.y2,c.y),g=Math.max(a.y1,a.y2,c.y);return{x1:d-a.size,y1:f-a.size,x2:e+a.size,y2:f-a.size,height:g-f+2*a.size}},selfLoopToSquare:function(a){var b=sigma.utils.getSelfLoopControlPoints(a.x,a.y,a.size),c=Math.min(a.x,b.x1,b.x2),d=Math.max(a.x,b.x1,b.x2),e=Math.min(a.y,b.y1,b.y2),f=Math.max(a.y,b.y1,b.y2);return{x1:c-a.size,y1:e-a.size,x2:d+a.size,y2:e-a.size,height:f-e+2*a.size}},isAxisAligned:function(a){return a.x1===a.x2||a.y1===a.y2},axisAlignedTopPoints:function(a){return a.y1===a.y2&&a.x1<a.x2?a:a.x1===a.x2&&a.y2>a.y1?{x1:a.x1-a.height,y1:a.y1,x2:a.x1,y2:a.y1,height:a.height}:a.x1===a.x2&&a.y2<a.y1?{x1:a.x1,y1:a.y2,x2:a.x2+a.height,y2:a.y2,height:a.height}:{x1:a.x2,y1:a.y1-a.height,x2:a.x1,y2:a.y1-a.height,height:a.height}},lowerLeftCoor:function(a){var b=Math.sqrt(Math.pow(a.x2-a.x1,2)+Math.pow(a.y2-a.y1,2));return{x:a.x1-(a.y2-a.y1)*a.height/b,y:a.y1+(a.x2-a.x1)*a.height/b}},lowerRightCoor:function(a,b){return{x:b.x-a.x1+a.x2,y:b.y-a.y1+a.y2}},rectangleCorners:function(a){var b=this.lowerLeftCoor(a),c=this.lowerRightCoor(a,b);return[{x:a.x1,y:a.y1},{x:a.x2,y:a.y2},{x:b.x,y:b.y},{x:c.x,y:c.y}]},splitSquare:function(a){return[[{x:a.x,y:a.y},{x:a.x+a.width/2,y:a.y},{x:a.x,y:a.y+a.height/2},{x:a.x+a.width/2,y:a.y+a.height/2}],[{x:a.x+a.width/2,y:a.y},{x:a.x+a.width,y:a.y},{x:a.x+a.width/2,y:a.y+a.height/2},{x:a.x+a.width,y:a.y+a.height/2}],[{x:a.x,y:a.y+a.height/2},{x:a.x+a.width/2,y:a.y+a.height/2},{x:a.x,y:a.y+a.height},{x:a.x+a.width/2,y:a.y+a.height}],[{x:a.x+a.width/2,y:a.y+a.height/2},{x:a.x+a.width,y:a.y+a.height/2},{x:a.x+a.width/2,y:a.y+a.height},{x:a.x+a.width,y:a.y+a.height}]]},axis:function(a,b){return[{x:a[1].x-a[0].x,y:a[1].y-a[0].y},{x:a[1].x-a[3].x,y:a[1].y-a[3].y},{x:b[0].x-b[2].x,y:b[0].y-b[2].y},{x:b[0].x-b[1].x,y:b[0].y-b[1].y}]},projection:function(a,b){var c=(a.x*b.x+a.y*b.y)/(Math.pow(b.x,2)+Math.pow(b.y,2));return{x:c*b.x,y:c*b.y}},axisCollision:function(a,b,c){for(var d=[],e=[],f=0;4>f;f++){var g=this.projection(b[f],a),h=this.projection(c[f],a);d.push(g.x*a.x+g.y*a.y),e.push(h.x*a.x+h.y*a.y)}var i=Math.max.apply(Math,d),j=Math.max.apply(Math,e),k=Math.min.apply(Math,d),l=Math.min.apply(Math,e);return i>=l&&j>=k},collision:function(a,b){for(var c=this.axis(a,b),d=!0,e=0;4>e;e++)d=d&&this.axisCollision(c[e],a,b);return d}},k=function(){this._geom=j,this._tree=null,this._cache={query:!1,result:!1},this._enabled=!0};k.prototype.index=function(a,b){if(!this._enabled)return this._tree;if(!b.bounds)throw"sigma.classes.edgequad.index: bounds information not given.";var c,d,e,g,h,k=b.prefix||"";this._tree=i(b.bounds,0,b.maxElements,b.maxLevel);for(var l=a.edges(),m=0,n=l.length;n>m;m++)d=a.nodes(l[m].source),e=a.nodes(l[m].target),h={x1:d[k+"x"],y1:d[k+"y"],x2:e[k+"x"],y2:e[k+"y"],size:l[m][k+"size"]||0},"curve"===l[m].type||"curvedArrow"===l[m].type?d.id===e.id?(g={x:d[k+"x"],y:d[k+"y"],size:d[k+"size"]||0},f(l[m],j.selfLoopToSquare(g),this._tree)):(c=sigma.utils.getQuadraticControlPoint(h.x1,h.y1,h.x2,h.y2),f(l[m],j.quadraticCurveToSquare(h,c),this._tree)):f(l[m],j.lineToSquare(h),this._tree);return this._cache={query:!1,result:!1},this._tree},k.prototype.point=function(a,b){return this._enabled&&this._tree?g({x:a,y:b},this._tree)||[]:[]},k.prototype.area=function(a){if(!this._enabled)return[];var b,e,f=JSON.stringify(a);if(this._cache.query===f)return this._cache.result;j.isAxisAligned(a)?(b=c,e=j.axisAlignedTopPoints(a)):(b=d,e=j.rectangleCorners(a));var g=this._tree?h(e,this._tree,b):[],i=[];for(var k in g)i.push(g[k]);return this._cache.query=f,this._cache.result=i,i},"undefined"!=typeof this.sigma?(this.sigma.classes=this.sigma.classes||{},this.sigma.classes.edgequad=k):"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=k),exports.edgequad=k):this.edgequad=k}.call(this),function(a){"use strict";if("undefined"==typeof sigma)throw"sigma is not declared";sigma.utils.pkg("sigma.captors"),sigma.captors.mouse=function(a,b,c){function d(a){var b,c,d;return y("mouseEnabled")&&v.dispatchEvent("mousemove",{x:sigma.utils.getX(a)-sigma.utils.getWidth(a)/2,y:sigma.utils.getY(a)-sigma.utils.getHeight(a)/2,clientX:a.clientX,clientY:a.clientY,ctrlKey:a.ctrlKey,metaKey:a.metaKey,altKey:a.altKey,shiftKey:a.shiftKey}),y("mouseEnabled")&&q?(r=!0,s=!0,u&&clearTimeout(u),u=setTimeout(function(){r=!1},y("dragTimeout")),sigma.misc.animation.killAll(x),x.isMoving=!0,d=x.cameraPosition(sigma.utils.getX(a)-o,sigma.utils.getY(a)-p,!0),b=k-d.x,c=l-d.y,(b!==x.x||c!==x.y)&&(m=x.x,n=x.y,x.goTo({x:b,y:c})),a.preventDefault?a.preventDefault():a.returnValue=!1,a.stopPropagation(),!1):void 0}function e(a){if(y("mouseEnabled")&&q){q=!1,u&&clearTimeout(u),x.isMoving=!1;var b=sigma.utils.getX(a),c=sigma.utils.getY(a);r?(sigma.misc.animation.killAll(x),sigma.misc.animation.camera(x,{x:x.x+y("mouseInertiaRatio")*(x.x-m),y:x.y+y("mouseInertiaRatio")*(x.y-n)},{easing:"quadraticOut",duration:y("mouseInertiaDuration")})):(o!==b||p!==c)&&x.goTo({x:x.x,y:x.y}),v.dispatchEvent("mouseup",{x:b-sigma.utils.getWidth(a)/2,y:c-sigma.utils.getHeight(a)/2,clientX:a.clientX,clientY:a.clientY,ctrlKey:a.ctrlKey,metaKey:a.metaKey,altKey:a.altKey,shiftKey:a.shiftKey}),r=!1}}function f(a){if(y("mouseEnabled"))switch(k=x.x,l=x.y,m=x.x,n=x.y,o=sigma.utils.getX(a),p=sigma.utils.getY(a),s=!1,t=(new Date).getTime(),a.which){case 2:break;case 3:v.dispatchEvent("rightclick",{x:o-sigma.utils.getWidth(a)/2,y:p-sigma.utils.getHeight(a)/2,clientX:a.clientX,clientY:a.clientY,ctrlKey:a.ctrlKey,metaKey:a.metaKey,altKey:a.altKey,shiftKey:a.shiftKey});break;default:q=!0,v.dispatchEvent("mousedown",{x:o-sigma.utils.getWidth(a)/2,y:p-sigma.utils.getHeight(a)/2,clientX:a.clientX,clientY:a.clientY,ctrlKey:a.ctrlKey,metaKey:a.metaKey,altKey:a.altKey,shiftKey:a.shiftKey})}}function g(a){y("mouseEnabled")&&v.dispatchEvent("mouseout")}function h(a){return y("mouseEnabled")&&v.dispatchEvent("click",{x:sigma.utils.getX(a)-sigma.utils.getWidth(a)/2,y:sigma.utils.getY(a)-sigma.utils.getHeight(a)/2,clientX:a.clientX,clientY:a.clientY,ctrlKey:a.ctrlKey,metaKey:a.metaKey,altKey:a.altKey,shiftKey:a.shiftKey,isDragging:(new Date).getTime()-t>100&&s}),a.preventDefault?a.preventDefault():a.returnValue=!1,a.stopPropagation(),!1}function i(a){var b,c,d;return y("mouseEnabled")?(c=1/y("doubleClickZoomingRatio"),v.dispatchEvent("doubleclick",{x:o-sigma.utils.getWidth(a)/2,y:p-sigma.utils.getHeight(a)/2,clientX:a.clientX,clientY:a.clientY,ctrlKey:a.ctrlKey,metaKey:a.metaKey,altKey:a.altKey,shiftKey:a.shiftKey}),y("doubleClickEnabled")&&(b=x.cameraPosition(sigma.utils.getX(a)-sigma.utils.getWidth(a)/2,sigma.utils.getY(a)-sigma.utils.getHeight(a)/2,!0),d={duration:y("doubleClickZoomDuration")},sigma.utils.zoomTo(x,b.x,b.y,c,d)),a.preventDefault?a.preventDefault():a.returnValue=!1,a.stopPropagation(),!1):void 0}function j(a){var b,c,d;return y("mouseEnabled")&&y("mouseWheelEnabled")?(c=sigma.utils.getDelta(a)>0?1/y("zoomingRatio"):y("zoomingRatio"),b=x.cameraPosition(sigma.utils.getX(a)-sigma.utils.getWidth(a)/2,sigma.utils.getY(a)-sigma.utils.getHeight(a)/2,!0),d={duration:y("mouseZoomDuration")},sigma.utils.zoomTo(x,b.x,b.y,c,d),a.preventDefault?a.preventDefault():a.returnValue=!1,a.stopPropagation(),!1):void 0}var k,l,m,n,o,p,q,r,s,t,u,v=this,w=a,x=b,y=c;sigma.classes.dispatcher.extend(this),sigma.utils.doubleClick(w,"click",i),w.addEventListener("DOMMouseScroll",j,!1),w.addEventListener("mousewheel",j,!1),w.addEventListener("mousemove",d,!1),w.addEventListener("mousedown",f,!1),w.addEventListener("click",h,!1),w.addEventListener("mouseout",g,!1),document.addEventListener("mouseup",e,!1),this.kill=function(){sigma.utils.unbindDoubleClick(w,"click"),w.removeEventListener("DOMMouseScroll",j),w.removeEventListener("mousewheel",j),w.removeEventListener("mousemove",d),w.removeEventListener("mousedown",f),w.removeEventListener("click",h),w.removeEventListener("mouseout",g),document.removeEventListener("mouseup",e)}}}.call(this),function(a){"use strict";if("undefined"==typeof sigma)throw"sigma is not declared";sigma.utils.pkg("sigma.captors"),sigma.captors.touch=function(a,b,c){function d(a){var b=sigma.utils.getOffset(B);return{x:a.pageX-b.left,y:a.pageY-b.top}}function e(a){if(D("touchEnabled")){var b,c,e,f,g,h;switch(E=a.touches,E.length){case 1:C.isMoving=!0,w=1,i=C.x,j=C.y,m=C.x,n=C.y,g=d(E[0]),q=g.x,r=g.y;break;case 2:return C.isMoving=!0,w=2,g=d(E[0]),h=d(E[1]),b=g.x,e=g.y,c=h.x,f=h.y,m=C.x,n=C.y,k=C.angle,l=C.ratio,i=C.x,j=C.y,q=b,r=e,s=c,t=f,u=Math.atan2(t-r,s-q),v=Math.sqrt(Math.pow(t-r,2)+Math.pow(s-q,2)),a.preventDefault(),!1}}}function f(a){if(D("touchEnabled")){E=a.touches;var b=D("touchInertiaRatio");switch(z&&(x=!1,clearTimeout(z)),w){case 2:if(1===a.touches.length){e(a),a.preventDefault();break}case 1:C.isMoving=!1,A.dispatchEvent("stopDrag"),x&&(y=!1,sigma.misc.animation.camera(C,{x:C.x+b*(C.x-m),y:C.y+b*(C.y-n)},{easing:"quadraticOut",duration:D("touchInertiaDuration")})),x=!1,w=0}}}function g(a){if(!y&&D("touchEnabled")){var b,c,e,f,g,h,B,F,G,H,I,J,K,L,M,N,O;switch(E=a.touches,x=!0,z&&clearTimeout(z),z=setTimeout(function(){x=!1},D("dragTimeout")),w){case 1:F=d(E[0]),b=F.x,e=F.y,H=C.cameraPosition(b-q,e-r,!0),L=i-H.x,M=j-H.y,(L!==C.x||M!==C.y)&&(m=C.x,n=C.y,C.goTo({x:L,y:M}),A.dispatchEvent("mousemove",{x:F.x-sigma.utils.getWidth(a)/2,y:F.y-sigma.utils.getHeight(a)/2,clientX:a.clientX,clientY:a.clientY,ctrlKey:a.ctrlKey,metaKey:a.metaKey,altKey:a.altKey,shiftKey:a.shiftKey}),A.dispatchEvent("drag"));break;case 2:F=d(E[0]),G=d(E[1]),b=F.x,e=F.y,c=G.x,f=G.y,I=C.cameraPosition((q+s)/2-sigma.utils.getWidth(a)/2,(r+t)/2-sigma.utils.getHeight(a)/2,!0),B=C.cameraPosition((b+c)/2-sigma.utils.getWidth(a)/2,(e+f)/2-sigma.utils.getHeight(a)/2,!0),J=Math.atan2(f-e,c-b)-u,K=Math.sqrt(Math.pow(f-e,2)+Math.pow(c-b,2))/v,b=I.x,e=I.y,N=l/K,b*=K,e*=K,O=k-J,g=Math.cos(-J),h=Math.sin(-J),c=b*g+e*h,f=e*g-b*h,b=c,e=f,L=b-B.x+i,M=e-B.y+j,(N!==C.ratio||O!==C.angle||L!==C.x||M!==C.y)&&(m=C.x,n=C.y,o=C.angle,p=C.ratio,C.goTo({x:L,y:M,angle:O,ratio:N}),A.dispatchEvent("drag"))}return a.preventDefault(),!1}}function h(a){var b,c,e;return a.touches&&1===a.touches.length&&D("touchEnabled")?(y=!0,c=1/D("doubleClickZoomingRatio"),b=d(a.touches[0]),A.dispatchEvent("doubleclick",{x:b.x-sigma.utils.getWidth(a)/2,y:b.y-sigma.utils.getHeight(a)/2,clientX:a.clientX,clientY:a.clientY,ctrlKey:a.ctrlKey,metaKey:a.metaKey,altKey:a.altKey,shiftKey:a.shiftKey}),D("doubleClickEnabled")&&(b=C.cameraPosition(b.x-sigma.utils.getWidth(a)/2,b.y-sigma.utils.getHeight(a)/2,!0),e={duration:D("doubleClickZoomDuration"),onComplete:function(){y=!1}},sigma.utils.zoomTo(C,b.x,b.y,c,e)),a.preventDefault?a.preventDefault():a.returnValue=!1,a.stopPropagation(),!1):void 0}var i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A=this,B=a,C=b,D=c,E=[];sigma.classes.dispatcher.extend(this),sigma.utils.doubleClick(B,"touchstart",h),B.addEventListener("touchstart",e,!1),B.addEventListener("touchend",f,!1),B.addEventListener("touchcancel",f,!1),B.addEventListener("touchleave",f,!1),B.addEventListener("touchmove",g,!1),this.kill=function(){sigma.utils.unbindDoubleClick(B,"touchstart"),B.addEventListener("touchstart",e),B.addEventListener("touchend",f),B.addEventListener("touchcancel",f),B.addEventListener("touchleave",f),B.addEventListener("touchmove",g)}}}.call(this),function(a){"use strict";if("undefined"==typeof sigma)throw"sigma is not declared";if("undefined"==typeof conrad)throw"conrad is not declared";sigma.utils.pkg("sigma.renderers"),sigma.renderers.canvas=function(a,b,c,d){if("object"!=typeof d)throw"sigma.renderers.canvas: Wrong arguments.";if(!(d.container instanceof HTMLElement))throw"Container not found.";var e,f,g,h;for(sigma.classes.dispatcher.extend(this),Object.defineProperty(this,"conradId",{value:sigma.utils.id()}),this.graph=a,this.camera=b,this.contexts={},this.domElements={},this.options=d,this.container=this.options.container,this.settings="object"==typeof d.settings&&d.settings?c.embedObjects(d.settings):c,this.nodesOnScreen=[],this.edgesOnScreen=[],this.jobs={},this.options.prefix="renderer"+this.conradId+":",this.settings("batchEdgesDrawing")?(this.initDOM("canvas","edges"),this.initDOM("canvas","scene"),this.contexts.nodes=this.contexts.scene,this.contexts.labels=this.contexts.scene):(this.initDOM("canvas","scene"),this.contexts.edges=this.contexts.scene,this.contexts.nodes=this.contexts.scene,this.contexts.labels=this.contexts.scene),this.initDOM("canvas","mouse"),this.contexts.hover=this.contexts.mouse,this.captors=[],g=this.options.captors||[sigma.captors.mouse,sigma.captors.touch],e=0,f=g.length;f>e;e++)h="function"==typeof g[e]?g[e]:sigma.captors[g[e]],this.captors.push(new h(this.domElements.mouse,this.camera,this.settings));sigma.misc.bindEvents.call(this,this.options.prefix),sigma.misc.drawHovers.call(this,this.options.prefix),this.resize(!1)},sigma.renderers.canvas.prototype.render=function(b){b=b||{};var c,d,e,f,g,h,i,j,k,l,m,n,o,p={},q=this.graph,r=this.graph.nodes,s=(this.options.prefix||"",this.settings(b,"drawEdges")),t=this.settings(b,"drawNodes"),u=this.settings(b,"drawLabels"),v=this.settings(b,"drawEdgeLabels"),w=this.settings.embedObjects(b,{prefix:this.options.prefix});this.resize(!1),this.settings(b,"hideEdgesOnMove")&&(this.camera.isAnimated||this.camera.isMoving)&&(s=!1),this.camera.applyView(a,this.options.prefix,{width:this.width,height:this.height}),this.clear();for(e in this.jobs)conrad.hasJob(e)&&conrad.killJob(e);for(this.edgesOnScreen=[],this.nodesOnScreen=this.camera.quadtree.area(this.camera.getRectangle(this.width,this.height)),c=this.nodesOnScreen,d=0,f=c.length;f>d;d++)p[c[d].id]=c[d];if(s){for(c=q.edges(),d=0,f=c.length;f>d;d++)g=c[d],!p[g.source]&&!p[g.target]||g.hidden||r(g.source).hidden||r(g.target).hidden||this.edgesOnScreen.push(g);if(this.settings(b,"batchEdgesDrawing"))h="edges_"+this.conradId,n=w("canvasEdgesBatchSize"),l=this.edgesOnScreen,f=l.length,k=0,i=Math.min(l.length,k+n),j=function(){for(o=this.contexts.edges.globalCompositeOperation,this.contexts.edges.globalCompositeOperation="destination-over",m=sigma.canvas.edges,d=k;i>d;d++)g=l[d],(m[g.type||this.settings(b,"defaultEdgeType")]||m.def)(g,q.nodes(g.source),q.nodes(g.target),this.contexts.edges,w);if(v)for(m=sigma.canvas.edges.labels,d=k;i>d;d++)g=l[d],g.hidden||(m[g.type||this.settings(b,"defaultEdgeType")]||m.def)(g,q.nodes(g.source),q.nodes(g.target),this.contexts.labels,w);return this.contexts.edges.globalCompositeOperation=o,i===l.length?(delete this.jobs[h],!1):(k=i+1,i=Math.min(l.length,k+n),!0)},this.jobs[h]=j,conrad.addJob(h,j.bind(this));else{for(m=sigma.canvas.edges,c=this.edgesOnScreen,d=0,f=c.length;f>d;d++)g=c[d],(m[g.type||this.settings(b,"defaultEdgeType")]||m.def)(g,q.nodes(g.source),q.nodes(g.target),this.contexts.edges,w);if(v)for(m=sigma.canvas.edges.labels,c=this.edgesOnScreen,d=0,f=c.length;f>d;d++)c[d].hidden||(m[c[d].type||this.settings(b,"defaultEdgeType")]||m.def)(c[d],q.nodes(c[d].source),q.nodes(c[d].target),this.contexts.labels,w)}}if(t)for(m=sigma.canvas.nodes,c=this.nodesOnScreen,d=0,f=c.length;f>d;d++)c[d].hidden||(m[c[d].type||this.settings(b,"defaultNodeType")]||m.def)(c[d],this.contexts.nodes,w);if(u)for(m=sigma.canvas.labels,c=this.nodesOnScreen,d=0,f=c.length;f>d;d++)c[d].hidden||(m[c[d].type||this.settings(b,"defaultNodeType")]||m.def)(c[d],this.contexts.labels,w);return this.dispatchEvent("render"),this},sigma.renderers.canvas.prototype.initDOM=function(a,b){var c=document.createElement(a);c.style.position="absolute",c.setAttribute("class","sigma-"+b),this.domElements[b]=c,this.container.appendChild(c),"canvas"===a.toLowerCase()&&(this.contexts[b]=c.getContext("2d"))},sigma.renderers.canvas.prototype.resize=function(b,c){var d,e=this.width,f=this.height,g=1;if(b!==a&&c!==a?(this.width=b,this.height=c):(this.width=this.container.offsetWidth,this.height=this.container.offsetHeight,b=this.width,c=this.height),e!==this.width||f!==this.height)for(d in this.domElements)this.domElements[d].style.width=b+"px",this.domElements[d].style.height=c+"px","canvas"===this.domElements[d].tagName.toLowerCase()&&(this.domElements[d].setAttribute("width",b*g+"px"),this.domElements[d].setAttribute("height",c*g+"px"),1!==g&&this.contexts[d].scale(g,g));return this},sigma.renderers.canvas.prototype.clear=function(){var a;for(a in this.domElements)"CANVAS"===this.domElements[a].tagName&&(this.domElements[a].width=this.domElements[a].width);return this},sigma.renderers.canvas.prototype.kill=function(){for(var a,b;b=this.captors.pop();)b.kill();delete this.captors;for(a in this.domElements)this.domElements[a].parentNode.removeChild(this.domElements[a]),delete this.domElements[a],delete this.contexts[a];delete this.domElements,delete this.contexts},sigma.utils.pkg("sigma.canvas.nodes"),sigma.utils.pkg("sigma.canvas.edges"),sigma.utils.pkg("sigma.canvas.labels")}.call(this),function(a){"use strict";if("undefined"==typeof sigma)throw"sigma is not declared";sigma.utils.pkg("sigma.renderers"),sigma.renderers.webgl=function(a,b,c,d){if("object"!=typeof d)throw"sigma.renderers.webgl: Wrong arguments.";if(!(d.container instanceof HTMLElement))throw"Container not found.";var e,f,g,h;for(sigma.classes.dispatcher.extend(this),this.jobs={},Object.defineProperty(this,"conradId",{value:sigma.utils.id()}),this.graph=a,this.camera=b,this.contexts={},this.domElements={},this.options=d,this.container=this.options.container,this.settings="object"==typeof d.settings&&d.settings?c.embedObjects(d.settings):c,this.options.prefix=this.camera.readPrefix,Object.defineProperty(this,"nodePrograms",{value:{}}),Object.defineProperty(this,"edgePrograms",{value:{}}),Object.defineProperty(this,"nodeFloatArrays",{value:{}}),Object.defineProperty(this,"edgeFloatArrays",{value:{}}),this.settings(d,"batchEdgesDrawing")?(this.initDOM("canvas","edges",!0),this.initDOM("canvas","nodes",!0)):(this.initDOM("canvas","scene",!0),this.contexts.nodes=this.contexts.scene,this.contexts.edges=this.contexts.scene),this.initDOM("canvas","labels"),this.initDOM("canvas","mouse"),this.contexts.hover=this.contexts.mouse,this.captors=[],g=this.options.captors||[sigma.captors.mouse,sigma.captors.touch],e=0,f=g.length;f>e;e++)h="function"==typeof g[e]?g[e]:sigma.captors[g[e]],this.captors.push(new h(this.domElements.mouse,this.camera,this.settings));sigma.misc.bindEvents.call(this,this.camera.prefix),sigma.misc.drawHovers.call(this,this.camera.prefix),this.resize()},sigma.renderers.webgl.prototype.process=function(){var a,b,c,d,e,f,g=this.graph,h=sigma.utils.extend(h,this.options);for(d in this.nodeFloatArrays)delete this.nodeFloatArrays[d];for(d in this.edgeFloatArrays)delete this.edgeFloatArrays[d];for(a=g.edges(),b=0,c=a.length;c>b;b++)e=a[b].type||this.settings(h,"defaultEdgeType"),d=e&&sigma.webgl.edges[e]?e:"def",this.edgeFloatArrays[d]||(this.edgeFloatArrays[d]={edges:[]}),this.edgeFloatArrays[d].edges.push(a[b]);for(a=g.nodes(),b=0,c=a.length;c>b;b++)e=a[b].type||this.settings(h,"defaultNodeType"),d=e&&sigma.webgl.nodes[e]?e:"def",this.nodeFloatArrays[d]||(this.nodeFloatArrays[d]={nodes:[]}),this.nodeFloatArrays[d].nodes.push(a[b]);for(d in this.edgeFloatArrays)for(f=sigma.webgl.edges[d],a=this.edgeFloatArrays[d].edges,b=0,c=a.length;c>b;b++)this.edgeFloatArrays[d].array||(this.edgeFloatArrays[d].array=new Float32Array(a.length*f.POINTS*f.ATTRIBUTES)),a[b].hidden||g.nodes(a[b].source).hidden||g.nodes(a[b].target).hidden||f.addEdge(a[b],g.nodes(a[b].source),g.nodes(a[b].target),this.edgeFloatArrays[d].array,b*f.POINTS*f.ATTRIBUTES,h.prefix,this.settings);for(d in this.nodeFloatArrays)for(f=sigma.webgl.nodes[d],a=this.nodeFloatArrays[d].nodes,b=0,c=a.length;c>b;b++)this.nodeFloatArrays[d].array||(this.nodeFloatArrays[d].array=new Float32Array(a.length*f.POINTS*f.ATTRIBUTES)),a[b].hidden||f.addNode(a[b],this.nodeFloatArrays[d].array,b*f.POINTS*f.ATTRIBUTES,h.prefix,this.settings);return this},sigma.renderers.webgl.prototype.render=function(b){var c,d,e,f,g,h,i=this,j=(this.graph,this.contexts.nodes),k=this.contexts.edges,l=this.camera.getMatrix(),m=sigma.utils.extend(b,this.options),n=this.settings(m,"drawLabels"),o=this.settings(m,"drawEdges"),p=this.settings(m,"drawNodes");this.resize(!1),this.settings(m,"hideEdgesOnMove")&&(this.camera.isAnimated||this.camera.isMoving)&&(o=!1),this.clear(),l=sigma.utils.matrices.multiply(l,sigma.utils.matrices.translation(this.width/2,this.height/2));for(f in this.jobs)conrad.hasJob(f)&&conrad.killJob(f);if(o)if(this.settings(m,"batchEdgesDrawing"))(function(){var a,b,c,d,e,f,g,h,i;c="edges_"+this.conradId,i=this.settings(m,"webglEdgesBatchSize"),a=Object.keys(this.edgeFloatArrays),a.length&&(b=0,h=sigma.webgl.edges[a[b]],e=this.edgeFloatArrays[a[b]].array,g=0,f=Math.min(g+i*h.POINTS,e.length/h.ATTRIBUTES),d=function(){return this.edgePrograms[a[b]]||(this.edgePrograms[a[b]]=h.initProgram(k)),f>g&&(k.useProgram(this.edgePrograms[a[b]]),h.render(k,this.edgePrograms[a[b]],e,{settings:this.settings,matrix:l,width:this.width,height:this.height,ratio:this.camera.ratio,scalingRatio:this.settings(m,"webglOversamplingRatio"),start:g,count:f-g})),f>=e.length/h.ATTRIBUTES&&b===a.length-1?(delete this.jobs[c],!1):(f>=e.length/h.ATTRIBUTES?(b++,e=this.edgeFloatArrays[a[b]].array,h=sigma.webgl.edges[a[b]],g=0,f=Math.min(g+i*h.POINTS,e.length/h.ATTRIBUTES)):(g=f,f=Math.min(g+i*h.POINTS,e.length/h.ATTRIBUTES)),!0)},this.jobs[c]=d,conrad.addJob(c,d.bind(this)))}).call(this);else for(f in this.edgeFloatArrays)h=sigma.webgl.edges[f],this.edgePrograms[f]||(this.edgePrograms[f]=h.initProgram(k)),this.edgeFloatArrays[f]&&(k.useProgram(this.edgePrograms[f]),h.render(k,this.edgePrograms[f],this.edgeFloatArrays[f].array,{
settings:this.settings,matrix:l,width:this.width,height:this.height,ratio:this.camera.ratio,scalingRatio:this.settings(m,"webglOversamplingRatio")}));if(p){j.blendFunc(j.SRC_ALPHA,j.ONE_MINUS_SRC_ALPHA),j.enable(j.BLEND);for(f in this.nodeFloatArrays)h=sigma.webgl.nodes[f],this.nodePrograms[f]||(this.nodePrograms[f]=h.initProgram(j)),this.nodeFloatArrays[f]&&(j.useProgram(this.nodePrograms[f]),h.render(j,this.nodePrograms[f],this.nodeFloatArrays[f].array,{settings:this.settings,matrix:l,width:this.width,height:this.height,ratio:this.camera.ratio,scalingRatio:this.settings(m,"webglOversamplingRatio")}))}if(n)for(c=this.camera.quadtree.area(this.camera.getRectangle(this.width,this.height)),this.camera.applyView(a,a,{nodes:c,edges:[],width:this.width,height:this.height}),g=function(a){return i.settings({prefix:i.camera.prefix},a)},d=0,e=c.length;e>d;d++)c[d].hidden||(sigma.canvas.labels[c[d].type||this.settings(m,"defaultNodeType")]||sigma.canvas.labels.def)(c[d],this.contexts.labels,g);return this.dispatchEvent("render"),this},sigma.renderers.webgl.prototype.initDOM=function(a,b,c){var d=document.createElement(a),e=this;d.style.position="absolute",d.setAttribute("class","sigma-"+b),this.domElements[b]=d,this.container.appendChild(d),"canvas"===a.toLowerCase()&&(this.contexts[b]=d.getContext(c?"experimental-webgl":"2d",{preserveDrawingBuffer:!0}),c&&(d.addEventListener("webglcontextlost",function(a){a.preventDefault()},!1),d.addEventListener("webglcontextrestored",function(a){e.render()},!1)))},sigma.renderers.webgl.prototype.resize=function(b,c){var d,e=this.width,f=this.height;if(b!==a&&c!==a?(this.width=b,this.height=c):(this.width=this.container.offsetWidth,this.height=this.container.offsetHeight,b=this.width,c=this.height),e!==this.width||f!==this.height)for(d in this.domElements)this.domElements[d].style.width=b+"px",this.domElements[d].style.height=c+"px","canvas"===this.domElements[d].tagName.toLowerCase()&&(this.contexts[d]&&this.contexts[d].scale?(this.domElements[d].setAttribute("width",b+"px"),this.domElements[d].setAttribute("height",c+"px")):(this.domElements[d].setAttribute("width",b*this.settings("webglOversamplingRatio")+"px"),this.domElements[d].setAttribute("height",c*this.settings("webglOversamplingRatio")+"px")));for(d in this.contexts)this.contexts[d]&&this.contexts[d].viewport&&this.contexts[d].viewport(0,0,this.width*this.settings("webglOversamplingRatio"),this.height*this.settings("webglOversamplingRatio"));return this},sigma.renderers.webgl.prototype.clear=function(){var a;for(a in this.domElements)"CANVAS"===this.domElements[a].tagName&&(this.domElements[a].width=this.domElements[a].width);return this.contexts.nodes.clear(this.contexts.nodes.COLOR_BUFFER_BIT),this.contexts.edges.clear(this.contexts.edges.COLOR_BUFFER_BIT),this},sigma.renderers.webgl.prototype.kill=function(){for(var a,b;b=this.captors.pop();)b.kill();delete this.captors;for(a in this.domElements)this.domElements[a].parentNode.removeChild(this.domElements[a]),delete this.domElements[a],delete this.contexts[a];delete this.domElements,delete this.contexts},sigma.utils.pkg("sigma.webgl.nodes"),sigma.utils.pkg("sigma.webgl.edges"),sigma.utils.pkg("sigma.canvas.labels")}.call(this),function(a){"use strict";if("undefined"==typeof sigma)throw"sigma is not declared";if("undefined"==typeof conrad)throw"conrad is not declared";sigma.utils.pkg("sigma.renderers"),sigma.renderers.svg=function(a,b,c,d){if("object"!=typeof d)throw"sigma.renderers.svg: Wrong arguments.";if(!(d.container instanceof HTMLElement))throw"Container not found.";var e,f,g,h,i=this;for(sigma.classes.dispatcher.extend(this),this.graph=a,this.camera=b,this.domElements={graph:null,groups:{},nodes:{},edges:{},labels:{},hovers:{}},this.measurementCanvas=null,this.options=d,this.container=this.options.container,this.settings="object"==typeof d.settings&&d.settings?c.embedObjects(d.settings):c,this.settings("freeStyle",!!this.options.freeStyle),this.settings("xmlns","http://www.w3.org/2000/svg"),this.nodesOnScreen=[],this.edgesOnScreen=[],this.options.prefix="renderer"+sigma.utils.id()+":",this.initDOM("svg"),this.captors=[],g=this.options.captors||[sigma.captors.mouse,sigma.captors.touch],e=0,f=g.length;f>e;e++)h="function"==typeof g[e]?g[e]:sigma.captors[g[e]],this.captors.push(new h(this.domElements.graph,this.camera,this.settings));window.addEventListener("resize",function(){i.resize()}),sigma.misc.bindDOMEvents.call(this,this.domElements.graph),this.bindHovers(this.options.prefix),this.resize(!1)},sigma.renderers.svg.prototype.render=function(b){b=b||{};var c,d,e,f,g,h,i,j,k,l={},m=this.graph,n=this.graph.nodes,o=(this.options.prefix||"",this.settings(b,"drawEdges")),p=this.settings(b,"drawNodes"),q=(this.settings(b,"drawLabels"),this.settings.embedObjects(b,{prefix:this.options.prefix,forceLabels:this.options.forceLabels}));for(this.settings(b,"hideEdgesOnMove")&&(this.camera.isAnimated||this.camera.isMoving)&&(o=!1),this.camera.applyView(a,this.options.prefix,{width:this.width,height:this.height}),this.hideDOMElements(this.domElements.nodes),this.hideDOMElements(this.domElements.edges),this.hideDOMElements(this.domElements.labels),this.edgesOnScreen=[],this.nodesOnScreen=this.camera.quadtree.area(this.camera.getRectangle(this.width,this.height)),c=this.nodesOnScreen,d=0,f=c.length;f>d;d++)l[c[d].id]=c[d];for(c=m.edges(),d=0,f=c.length;f>d;d++)g=c[d],!l[g.source]&&!l[g.target]||g.hidden||n(g.source).hidden||n(g.target).hidden||this.edgesOnScreen.push(g);if(j=sigma.svg.nodes,k=sigma.svg.labels,p)for(c=this.nodesOnScreen,d=0,f=c.length;f>d;d++)c[d].hidden||this.domElements.nodes[c[d].id]||(e=(j[c[d].type]||j.def).create(c[d],q),this.domElements.nodes[c[d].id]=e,this.domElements.groups.nodes.appendChild(e),e=(k[c[d].type]||k.def).create(c[d],q),this.domElements.labels[c[d].id]=e,this.domElements.groups.labels.appendChild(e));if(p)for(c=this.nodesOnScreen,d=0,f=c.length;f>d;d++)c[d].hidden||((j[c[d].type]||j.def).update(c[d],this.domElements.nodes[c[d].id],q),(k[c[d].type]||k.def).update(c[d],this.domElements.labels[c[d].id],q));if(j=sigma.svg.edges,o)for(c=this.edgesOnScreen,d=0,f=c.length;f>d;d++)this.domElements.edges[c[d].id]||(h=n(c[d].source),i=n(c[d].target),e=(j[c[d].type]||j.def).create(c[d],h,i,q),this.domElements.edges[c[d].id]=e,this.domElements.groups.edges.appendChild(e));if(o)for(c=this.edgesOnScreen,d=0,f=c.length;f>d;d++)h=n(c[d].source),i=n(c[d].target),(j[c[d].type]||j.def).update(c[d],this.domElements.edges[c[d].id],h,i,q);return this.dispatchEvent("render"),this},sigma.renderers.svg.prototype.initDOM=function(a){var b,c,d,e=document.createElementNS(this.settings("xmlns"),a),f=this.settings("classPrefix");e.style.position="absolute",e.setAttribute("class",f+"-svg"),e.setAttribute("xmlns",this.settings("xmlns")),e.setAttribute("xmlns:xlink","http://www.w3.org/1999/xlink"),e.setAttribute("version","1.1");var g=document.createElement("canvas");g.setAttribute("class",f+"-measurement-canvas"),this.domElements.graph=this.container.appendChild(e);var h=["edges","nodes","labels","hovers"];for(d=0,c=h.length;c>d;d++)b=document.createElementNS(this.settings("xmlns"),"g"),b.setAttributeNS(null,"id",f+"-group-"+h[d]),b.setAttributeNS(null,"class",f+"-group"),this.domElements.groups[h[d]]=this.domElements.graph.appendChild(b);this.container.appendChild(g),this.measurementCanvas=g.getContext("2d")},sigma.renderers.svg.prototype.hideDOMElements=function(a){var b,c;for(c in a)b=a[c],sigma.svg.utils.hide(b);return this},sigma.renderers.svg.prototype.bindHovers=function(a){function b(b){var c=b.data.node,d=g.settings.embedObjects({prefix:a});if(d("enableHovering")){var h=(f[c.type]||f.def).create(c,g.domElements.nodes[c.id],g.measurementCanvas,d);g.domElements.hovers[c.id]=h,g.domElements.groups.hovers.appendChild(h),e=c}}function c(b){var c=b.data.node,d=g.settings.embedObjects({prefix:a});d("enableHovering")&&(g.domElements.groups.hovers.removeChild(g.domElements.hovers[c.id]),e=null,delete g.domElements.hovers[c.id],g.domElements.groups.nodes.appendChild(g.domElements.nodes[c.id]))}function d(){if(e){var b=g.settings.embedObjects({prefix:a});g.domElements.groups.hovers.removeChild(g.domElements.hovers[e.id]),delete g.domElements.hovers[e.id];var c=(f[e.type]||f.def).create(e,g.domElements.nodes[e.id],g.measurementCanvas,b);g.domElements.hovers[e.id]=c,g.domElements.groups.hovers.appendChild(c)}}var e,f=sigma.svg.hovers,g=this;this.bind("overNode",b),this.bind("outNode",c),this.bind("render",d)},sigma.renderers.svg.prototype.resize=function(b,c){var d=this.width,e=this.height,f=1;return b!==a&&c!==a?(this.width=b,this.height=c):(this.width=this.container.offsetWidth,this.height=this.container.offsetHeight,b=this.width,c=this.height),(d!==this.width||e!==this.height)&&(this.domElements.graph.style.width=b+"px",this.domElements.graph.style.height=c+"px","svg"===this.domElements.graph.tagName.toLowerCase()&&(this.domElements.graph.setAttribute("width",b*f),this.domElements.graph.setAttribute("height",c*f))),this},sigma.utils.pkg("sigma.svg.nodes"),sigma.utils.pkg("sigma.svg.edges"),sigma.utils.pkg("sigma.svg.labels")}.call(this),function(a){"use strict";if("undefined"==typeof sigma)throw"sigma is not declared";sigma.utils.pkg("sigma.renderers");var b,c=!!a.WebGLRenderingContext;if(c){b=document.createElement("canvas");try{c=!(!b.getContext("webgl")&&!b.getContext("experimental-webgl"))}catch(d){c=!1}}sigma.renderers.def=c?sigma.renderers.webgl:sigma.renderers.canvas}(this),function(){"use strict";sigma.utils.pkg("sigma.webgl.nodes"),sigma.webgl.nodes.def={POINTS:3,ATTRIBUTES:5,addNode:function(a,b,c,d,e){var f=sigma.utils.floatColor(a.color||e("defaultNodeColor"));b[c++]=a[d+"x"],b[c++]=a[d+"y"],b[c++]=a[d+"size"],b[c++]=f,b[c++]=0,b[c++]=a[d+"x"],b[c++]=a[d+"y"],b[c++]=a[d+"size"],b[c++]=f,b[c++]=2*Math.PI/3,b[c++]=a[d+"x"],b[c++]=a[d+"y"],b[c++]=a[d+"size"],b[c++]=f,b[c++]=4*Math.PI/3},render:function(a,b,c,d){var e,f=a.getAttribLocation(b,"a_position"),g=a.getAttribLocation(b,"a_size"),h=a.getAttribLocation(b,"a_color"),i=a.getAttribLocation(b,"a_angle"),j=a.getUniformLocation(b,"u_resolution"),k=a.getUniformLocation(b,"u_matrix"),l=a.getUniformLocation(b,"u_ratio"),m=a.getUniformLocation(b,"u_scale");e=a.createBuffer(),a.bindBuffer(a.ARRAY_BUFFER,e),a.bufferData(a.ARRAY_BUFFER,c,a.DYNAMIC_DRAW),a.uniform2f(j,d.width,d.height),a.uniform1f(l,1/Math.pow(d.ratio,d.settings("nodesPowRatio"))),a.uniform1f(m,d.scalingRatio),a.uniformMatrix3fv(k,!1,d.matrix),a.enableVertexAttribArray(f),a.enableVertexAttribArray(g),a.enableVertexAttribArray(h),a.enableVertexAttribArray(i),a.vertexAttribPointer(f,2,a.FLOAT,!1,this.ATTRIBUTES*Float32Array.BYTES_PER_ELEMENT,0),a.vertexAttribPointer(g,1,a.FLOAT,!1,this.ATTRIBUTES*Float32Array.BYTES_PER_ELEMENT,8),a.vertexAttribPointer(h,1,a.FLOAT,!1,this.ATTRIBUTES*Float32Array.BYTES_PER_ELEMENT,12),a.vertexAttribPointer(i,1,a.FLOAT,!1,this.ATTRIBUTES*Float32Array.BYTES_PER_ELEMENT,16),a.drawArrays(a.TRIANGLES,d.start||0,d.count||c.length/this.ATTRIBUTES)},initProgram:function(a){var b,c,d;return b=sigma.utils.loadShader(a,["attribute vec2 a_position;","attribute float a_size;","attribute float a_color;","attribute float a_angle;","uniform vec2 u_resolution;","uniform float u_ratio;","uniform float u_scale;","uniform mat3 u_matrix;","varying vec4 color;","varying vec2 center;","varying float radius;","void main() {","radius = a_size * u_ratio;","vec2 position = (u_matrix * vec3(a_position, 1)).xy;","center = position * u_scale;","center = vec2(center.x, u_scale * u_resolution.y - center.y);","position = position +","2.0 * radius * vec2(cos(a_angle), sin(a_angle));","position = (position / u_resolution * 2.0 - 1.0) * vec2(1, -1);","radius = radius * u_scale;","gl_Position = vec4(position, 0, 1);","float c = a_color;","color.b = mod(c, 256.0); c = floor(c / 256.0);","color.g = mod(c, 256.0); c = floor(c / 256.0);","color.r = mod(c, 256.0); c = floor(c / 256.0); color /= 255.0;","color.a = 1.0;","}"].join("\n"),a.VERTEX_SHADER),c=sigma.utils.loadShader(a,["precision mediump float;","varying vec4 color;","varying vec2 center;","varying float radius;","void main(void) {","vec4 color0 = vec4(0.0, 0.0, 0.0, 0.0);","vec2 m = gl_FragCoord.xy - center;","float diff = radius - sqrt(m.x * m.x + m.y * m.y);","if (diff > 0.0)","gl_FragColor = color;","else","gl_FragColor = color0;","}"].join("\n"),a.FRAGMENT_SHADER),d=sigma.utils.loadProgram(a,[b,c])}}}(),function(){"use strict";sigma.utils.pkg("sigma.webgl.nodes"),sigma.webgl.nodes.fast={POINTS:1,ATTRIBUTES:4,addNode:function(a,b,c,d,e){b[c++]=a[d+"x"],b[c++]=a[d+"y"],b[c++]=a[d+"size"],b[c++]=sigma.utils.floatColor(a.color||e("defaultNodeColor"))},render:function(a,b,c,d){var e,f=a.getAttribLocation(b,"a_position"),g=a.getAttribLocation(b,"a_size"),h=a.getAttribLocation(b,"a_color"),i=a.getUniformLocation(b,"u_resolution"),j=a.getUniformLocation(b,"u_matrix"),k=a.getUniformLocation(b,"u_ratio"),l=a.getUniformLocation(b,"u_scale");e=a.createBuffer(),a.bindBuffer(a.ARRAY_BUFFER,e),a.bufferData(a.ARRAY_BUFFER,c,a.DYNAMIC_DRAW),a.uniform2f(i,d.width,d.height),a.uniform1f(k,1/Math.pow(d.ratio,d.settings("nodesPowRatio"))),a.uniform1f(l,d.scalingRatio),a.uniformMatrix3fv(j,!1,d.matrix),a.enableVertexAttribArray(f),a.enableVertexAttribArray(g),a.enableVertexAttribArray(h),a.vertexAttribPointer(f,2,a.FLOAT,!1,this.ATTRIBUTES*Float32Array.BYTES_PER_ELEMENT,0),a.vertexAttribPointer(g,1,a.FLOAT,!1,this.ATTRIBUTES*Float32Array.BYTES_PER_ELEMENT,8),a.vertexAttribPointer(h,1,a.FLOAT,!1,this.ATTRIBUTES*Float32Array.BYTES_PER_ELEMENT,12),a.drawArrays(a.POINTS,d.start||0,d.count||c.length/this.ATTRIBUTES)},initProgram:function(a){var b,c,d;return b=sigma.utils.loadShader(a,["attribute vec2 a_position;","attribute float a_size;","attribute float a_color;","uniform vec2 u_resolution;","uniform float u_ratio;","uniform float u_scale;","uniform mat3 u_matrix;","varying vec4 color;","void main() {","gl_Position = vec4(","((u_matrix * vec3(a_position, 1)).xy /","u_resolution * 2.0 - 1.0) * vec2(1, -1),","0,","1",");","gl_PointSize = a_size * u_ratio * u_scale * 2.0;","float c = a_color;","color.b = mod(c, 256.0); c = floor(c / 256.0);","color.g = mod(c, 256.0); c = floor(c / 256.0);","color.r = mod(c, 256.0); c = floor(c / 256.0); color /= 255.0;","color.a = 1.0;","}"].join("\n"),a.VERTEX_SHADER),c=sigma.utils.loadShader(a,["precision mediump float;","varying vec4 color;","void main(void) {","gl_FragColor = color;","}"].join("\n"),a.FRAGMENT_SHADER),d=sigma.utils.loadProgram(a,[b,c])}}}(),function(){"use strict";sigma.utils.pkg("sigma.webgl.edges"),sigma.webgl.edges.def={POINTS:6,ATTRIBUTES:7,addEdge:function(a,b,c,d,e,f,g){var h=(a[f+"size"]||1)/2,i=b[f+"x"],j=b[f+"y"],k=c[f+"x"],l=c[f+"y"],m=a.color;if(!m)switch(g("edgeColor")){case"source":m=b.color||g("defaultNodeColor");break;case"target":m=c.color||g("defaultNodeColor");break;default:m=g("defaultEdgeColor")}m=sigma.utils.floatColor(m),d[e++]=i,d[e++]=j,d[e++]=k,d[e++]=l,d[e++]=h,d[e++]=0,d[e++]=m,d[e++]=k,d[e++]=l,d[e++]=i,d[e++]=j,d[e++]=h,d[e++]=1,d[e++]=m,d[e++]=k,d[e++]=l,d[e++]=i,d[e++]=j,d[e++]=h,d[e++]=0,d[e++]=m,d[e++]=k,d[e++]=l,d[e++]=i,d[e++]=j,d[e++]=h,d[e++]=0,d[e++]=m,d[e++]=i,d[e++]=j,d[e++]=k,d[e++]=l,d[e++]=h,d[e++]=1,d[e++]=m,d[e++]=i,d[e++]=j,d[e++]=k,d[e++]=l,d[e++]=h,d[e++]=0,d[e++]=m},render:function(a,b,c,d){var e,f=a.getAttribLocation(b,"a_color"),g=a.getAttribLocation(b,"a_position1"),h=a.getAttribLocation(b,"a_position2"),i=a.getAttribLocation(b,"a_thickness"),j=a.getAttribLocation(b,"a_minus"),k=a.getUniformLocation(b,"u_resolution"),l=a.getUniformLocation(b,"u_matrix"),m=a.getUniformLocation(b,"u_matrixHalfPi"),n=a.getUniformLocation(b,"u_matrixHalfPiMinus"),o=a.getUniformLocation(b,"u_ratio"),p=a.getUniformLocation(b,"u_scale");e=a.createBuffer(),a.bindBuffer(a.ARRAY_BUFFER,e),a.bufferData(a.ARRAY_BUFFER,c,a.STATIC_DRAW),a.uniform2f(k,d.width,d.height),a.uniform1f(o,d.ratio/Math.pow(d.ratio,d.settings("edgesPowRatio"))),a.uniform1f(p,d.scalingRatio),a.uniformMatrix3fv(l,!1,d.matrix),a.uniformMatrix2fv(m,!1,sigma.utils.matrices.rotation(Math.PI/2,!0)),a.uniformMatrix2fv(n,!1,sigma.utils.matrices.rotation(-Math.PI/2,!0)),a.enableVertexAttribArray(f),a.enableVertexAttribArray(g),a.enableVertexAttribArray(h),a.enableVertexAttribArray(i),a.enableVertexAttribArray(j),a.vertexAttribPointer(g,2,a.FLOAT,!1,this.ATTRIBUTES*Float32Array.BYTES_PER_ELEMENT,0),a.vertexAttribPointer(h,2,a.FLOAT,!1,this.ATTRIBUTES*Float32Array.BYTES_PER_ELEMENT,8),a.vertexAttribPointer(i,1,a.FLOAT,!1,this.ATTRIBUTES*Float32Array.BYTES_PER_ELEMENT,16),a.vertexAttribPointer(j,1,a.FLOAT,!1,this.ATTRIBUTES*Float32Array.BYTES_PER_ELEMENT,20),a.vertexAttribPointer(f,1,a.FLOAT,!1,this.ATTRIBUTES*Float32Array.BYTES_PER_ELEMENT,24),a.drawArrays(a.TRIANGLES,d.start||0,d.count||c.length/this.ATTRIBUTES)},initProgram:function(a){var b,c,d;return b=sigma.utils.loadShader(a,["attribute vec2 a_position1;","attribute vec2 a_position2;","attribute float a_thickness;","attribute float a_minus;","attribute float a_color;","uniform vec2 u_resolution;","uniform float u_ratio;","uniform float u_scale;","uniform mat3 u_matrix;","uniform mat2 u_matrixHalfPi;","uniform mat2 u_matrixHalfPiMinus;","varying vec4 color;","void main() {","vec2 position = a_thickness * u_ratio *","normalize(a_position2 - a_position1);","mat2 matrix = a_minus * u_matrixHalfPiMinus +","(1.0 - a_minus) * u_matrixHalfPi;","position = matrix * position + a_position1;","gl_Position = vec4(","((u_matrix * vec3(position, 1)).xy /","u_resolution * 2.0 - 1.0) * vec2(1, -1),","0,","1",");","float c = a_color;","color.b = mod(c, 256.0); c = floor(c / 256.0);","color.g = mod(c, 256.0); c = floor(c / 256.0);","color.r = mod(c, 256.0); c = floor(c / 256.0); color /= 255.0;","color.a = 1.0;","}"].join("\n"),a.VERTEX_SHADER),c=sigma.utils.loadShader(a,["precision mediump float;","varying vec4 color;","void main(void) {","gl_FragColor = color;","}"].join("\n"),a.FRAGMENT_SHADER),d=sigma.utils.loadProgram(a,[b,c])}}}(),function(){"use strict";sigma.utils.pkg("sigma.webgl.edges"),sigma.webgl.edges.fast={POINTS:2,ATTRIBUTES:3,addEdge:function(a,b,c,d,e,f,g){var h=((a[f+"size"]||1)/2,b[f+"x"]),i=b[f+"y"],j=c[f+"x"],k=c[f+"y"],l=a.color;if(!l)switch(g("edgeColor")){case"source":l=b.color||g("defaultNodeColor");break;case"target":l=c.color||g("defaultNodeColor");break;default:l=g("defaultEdgeColor")}l=sigma.utils.floatColor(l),d[e++]=h,d[e++]=i,d[e++]=l,d[e++]=j,d[e++]=k,d[e++]=l},render:function(a,b,c,d){var e,f=a.getAttribLocation(b,"a_color"),g=a.getAttribLocation(b,"a_position"),h=a.getUniformLocation(b,"u_resolution"),i=a.getUniformLocation(b,"u_matrix");e=a.createBuffer(),a.bindBuffer(a.ARRAY_BUFFER,e),a.bufferData(a.ARRAY_BUFFER,c,a.DYNAMIC_DRAW),a.uniform2f(h,d.width,d.height),a.uniformMatrix3fv(i,!1,d.matrix),a.enableVertexAttribArray(g),a.enableVertexAttribArray(f),a.vertexAttribPointer(g,2,a.FLOAT,!1,this.ATTRIBUTES*Float32Array.BYTES_PER_ELEMENT,0),a.vertexAttribPointer(f,1,a.FLOAT,!1,this.ATTRIBUTES*Float32Array.BYTES_PER_ELEMENT,8),a.lineWidth(3),a.drawArrays(a.LINES,d.start||0,d.count||c.length/this.ATTRIBUTES)},initProgram:function(a){var b,c,d;return b=sigma.utils.loadShader(a,["attribute vec2 a_position;","attribute float a_color;","uniform vec2 u_resolution;","uniform mat3 u_matrix;","varying vec4 color;","void main() {","gl_Position = vec4(","((u_matrix * vec3(a_position, 1)).xy /","u_resolution * 2.0 - 1.0) * vec2(1, -1),","0,","1",");","float c = a_color;","color.b = mod(c, 256.0); c = floor(c / 256.0);","color.g = mod(c, 256.0); c = floor(c / 256.0);","color.r = mod(c, 256.0); c = floor(c / 256.0); color /= 255.0;","color.a = 1.0;","}"].join("\n"),a.VERTEX_SHADER),c=sigma.utils.loadShader(a,["precision mediump float;","varying vec4 color;","void main(void) {","gl_FragColor = color;","}"].join("\n"),a.FRAGMENT_SHADER),d=sigma.utils.loadProgram(a,[b,c])}}}(),function(){"use strict";sigma.utils.pkg("sigma.webgl.edges"),sigma.webgl.edges.arrow={POINTS:9,ATTRIBUTES:11,addEdge:function(a,b,c,d,e,f,g){var h=(a[f+"size"]||1)/2,i=b[f+"x"],j=b[f+"y"],k=c[f+"x"],l=c[f+"y"],m=c[f+"size"],n=a.color;if(!n)switch(g("edgeColor")){case"source":n=b.color||g("defaultNodeColor");break;case"target":n=c.color||g("defaultNodeColor");break;default:n=g("defaultEdgeColor")}n=sigma.utils.floatColor(n),d[e++]=i,d[e++]=j,d[e++]=k,d[e++]=l,d[e++]=h,d[e++]=m,d[e++]=0,d[e++]=0,d[e++]=0,d[e++]=0,d[e++]=n,d[e++]=k,d[e++]=l,d[e++]=i,d[e++]=j,d[e++]=h,d[e++]=m,d[e++]=1,d[e++]=1,d[e++]=0,d[e++]=0,d[e++]=n,d[e++]=k,d[e++]=l,d[e++]=i,d[e++]=j,d[e++]=h,d[e++]=m,d[e++]=1,d[e++]=0,d[e++]=0,d[e++]=0,d[e++]=n,d[e++]=k,d[e++]=l,d[e++]=i,d[e++]=j,d[e++]=h,d[e++]=m,d[e++]=1,d[e++]=0,d[e++]=0,d[e++]=0,d[e++]=n,d[e++]=i,d[e++]=j,d[e++]=k,d[e++]=l,d[e++]=h,d[e++]=m,d[e++]=0,d[e++]=1,d[e++]=0,d[e++]=0,d[e++]=n,d[e++]=i,d[e++]=j,d[e++]=k,d[e++]=l,d[e++]=h,d[e++]=m,d[e++]=0,d[e++]=0,d[e++]=0,d[e++]=0,d[e++]=n,d[e++]=k,d[e++]=l,d[e++]=i,d[e++]=j,d[e++]=h,d[e++]=m,d[e++]=1,d[e++]=0,d[e++]=1,d[e++]=-1,d[e++]=n,d[e++]=k,d[e++]=l,d[e++]=i,d[e++]=j,d[e++]=h,d[e++]=m,d[e++]=1,d[e++]=0,d[e++]=1,d[e++]=0,d[e++]=n,d[e++]=k,d[e++]=l,d[e++]=i,d[e++]=j,d[e++]=h,d[e++]=m,d[e++]=1,d[e++]=0,d[e++]=1,d[e++]=1,d[e++]=n},render:function(a,b,c,d){var e,f=a.getAttribLocation(b,"a_pos1"),g=a.getAttribLocation(b,"a_pos2"),h=a.getAttribLocation(b,"a_thickness"),i=a.getAttribLocation(b,"a_tSize"),j=a.getAttribLocation(b,"a_delay"),k=a.getAttribLocation(b,"a_minus"),l=a.getAttribLocation(b,"a_head"),m=a.getAttribLocation(b,"a_headPosition"),n=a.getAttribLocation(b,"a_color"),o=a.getUniformLocation(b,"u_resolution"),p=a.getUniformLocation(b,"u_matrix"),q=a.getUniformLocation(b,"u_matrixHalfPi"),r=a.getUniformLocation(b,"u_matrixHalfPiMinus"),s=a.getUniformLocation(b,"u_ratio"),t=a.getUniformLocation(b,"u_nodeRatio"),u=a.getUniformLocation(b,"u_arrowHead"),v=a.getUniformLocation(b,"u_scale");e=a.createBuffer(),a.bindBuffer(a.ARRAY_BUFFER,e),a.bufferData(a.ARRAY_BUFFER,c,a.STATIC_DRAW),a.uniform2f(o,d.width,d.height),a.uniform1f(s,d.ratio/Math.pow(d.ratio,d.settings("edgesPowRatio"))),a.uniform1f(t,Math.pow(d.ratio,d.settings("nodesPowRatio"))/d.ratio),a.uniform1f(u,5),a.uniform1f(v,d.scalingRatio),a.uniformMatrix3fv(p,!1,d.matrix),a.uniformMatrix2fv(q,!1,sigma.utils.matrices.rotation(Math.PI/2,!0)),a.uniformMatrix2fv(r,!1,sigma.utils.matrices.rotation(-Math.PI/2,!0)),a.enableVertexAttribArray(f),a.enableVertexAttribArray(g),a.enableVertexAttribArray(h),a.enableVertexAttribArray(i),a.enableVertexAttribArray(j),a.enableVertexAttribArray(k),a.enableVertexAttribArray(l),a.enableVertexAttribArray(m),a.enableVertexAttribArray(n),a.vertexAttribPointer(f,2,a.FLOAT,!1,this.ATTRIBUTES*Float32Array.BYTES_PER_ELEMENT,0),a.vertexAttribPointer(g,2,a.FLOAT,!1,this.ATTRIBUTES*Float32Array.BYTES_PER_ELEMENT,8),a.vertexAttribPointer(h,1,a.FLOAT,!1,this.ATTRIBUTES*Float32Array.BYTES_PER_ELEMENT,16),a.vertexAttribPointer(i,1,a.FLOAT,!1,this.ATTRIBUTES*Float32Array.BYTES_PER_ELEMENT,20),a.vertexAttribPointer(j,1,a.FLOAT,!1,this.ATTRIBUTES*Float32Array.BYTES_PER_ELEMENT,24),a.vertexAttribPointer(k,1,a.FLOAT,!1,this.ATTRIBUTES*Float32Array.BYTES_PER_ELEMENT,28),a.vertexAttribPointer(l,1,a.FLOAT,!1,this.ATTRIBUTES*Float32Array.BYTES_PER_ELEMENT,32),a.vertexAttribPointer(m,1,a.FLOAT,!1,this.ATTRIBUTES*Float32Array.BYTES_PER_ELEMENT,36),a.vertexAttribPointer(n,1,a.FLOAT,!1,this.ATTRIBUTES*Float32Array.BYTES_PER_ELEMENT,40),a.drawArrays(a.TRIANGLES,d.start||0,d.count||c.length/this.ATTRIBUTES)},initProgram:function(a){var b,c,d;return b=sigma.utils.loadShader(a,["attribute vec2 a_pos1;","attribute vec2 a_pos2;","attribute float a_thickness;","attribute float a_tSize;","attribute float a_delay;","attribute float a_minus;","attribute float a_head;","attribute float a_headPosition;","attribute float a_color;","uniform vec2 u_resolution;","uniform float u_ratio;","uniform float u_nodeRatio;","uniform float u_arrowHead;","uniform float u_scale;","uniform mat3 u_matrix;","uniform mat2 u_matrixHalfPi;","uniform mat2 u_matrixHalfPiMinus;","varying vec4 color;","void main() {","vec2 pos = normalize(a_pos2 - a_pos1);","mat2 matrix = (1.0 - a_head) *","(","a_minus * u_matrixHalfPiMinus +","(1.0 - a_minus) * u_matrixHalfPi",") + a_head * (","a_headPosition * u_matrixHalfPiMinus * 0.6 +","(a_headPosition * a_headPosition - 1.0) * mat2(1.0)",");","pos = a_pos1 + (","(1.0 - a_head) * a_thickness * u_ratio * matrix * pos +","a_head * u_arrowHead * a_thickness * u_ratio * matrix * pos +","a_delay * pos * (","a_tSize / u_nodeRatio +","u_arrowHead * a_thickness * u_ratio",")",");","gl_Position = vec4(","((u_matrix * vec3(pos, 1)).xy /","u_resolution * 2.0 - 1.0) * vec2(1, -1),","0,","1",");","float c = a_color;","color.b = mod(c, 256.0); c = floor(c / 256.0);","color.g = mod(c, 256.0); c = floor(c / 256.0);","color.r = mod(c, 256.0); c = floor(c / 256.0); color /= 255.0;","color.a = 1.0;","}"].join("\n"),a.VERTEX_SHADER),c=sigma.utils.loadShader(a,["precision mediump float;","varying vec4 color;","void main(void) {","gl_FragColor = color;","}"].join("\n"),a.FRAGMENT_SHADER),d=sigma.utils.loadProgram(a,[b,c])}}}(),function(a){"use strict";if("undefined"==typeof sigma)throw"sigma is not declared";sigma.utils.pkg("sigma.canvas.labels"),sigma.canvas.labels.def=function(a,b,c){var d,e=c("prefix")||"",f=a[e+"size"];f<c("labelThreshold")||a.label&&"string"==typeof a.label&&(d="fixed"===c("labelSize")?c("defaultLabelSize"):c("labelSizeRatio")*f,b.font=(c("fontStyle")?c("fontStyle")+" ":"")+d+"px "+c("font"),b.fillStyle="node"===c("labelColor")?a.color||c("defaultNodeColor"):c("defaultLabelColor"),b.fillText(a.label,Math.round(a[e+"x"]+f+3),Math.round(a[e+"y"]+d/3)))}}.call(this),function(a){"use strict";if("undefined"==typeof sigma)throw"sigma is not declared";sigma.utils.pkg("sigma.canvas.hovers"),sigma.canvas.hovers.def=function(a,b,c){var d,e,f,g,h,i=c("hoverFontStyle")||c("fontStyle"),j=c("prefix")||"",k=a[j+"size"],l="fixed"===c("labelSize")?c("defaultLabelSize"):c("labelSizeRatio")*k;b.font=(i?i+" ":"")+l+"px "+(c("hoverFont")||c("font")),b.beginPath(),b.fillStyle="node"===c("labelHoverBGColor")?a.color||c("defaultNodeColor"):c("defaultHoverLabelBGColor"),a.label&&c("labelHoverShadow")&&(b.shadowOffsetX=0,b.shadowOffsetY=0,b.shadowBlur=8,b.shadowColor=c("labelHoverShadowColor")),a.label&&"string"==typeof a.label&&(d=Math.round(a[j+"x"]-l/2-2),e=Math.round(a[j+"y"]-l/2-2),f=Math.round(b.measureText(a.label).width+l/2+k+7),g=Math.round(l+4),h=Math.round(l/2+2),b.moveTo(d,e+h),b.arcTo(d,e,d+h,e,h),b.lineTo(d+f,e),b.lineTo(d+f,e+g),b.lineTo(d+h,e+g),b.arcTo(d,e+g,d,e+g-h,h),b.lineTo(d,e+h),b.closePath(),b.fill(),b.shadowOffsetX=0,b.shadowOffsetY=0,b.shadowBlur=0),c("borderSize")>0&&(b.beginPath(),b.fillStyle="node"===c("nodeBorderColor")?a.color||c("defaultNodeColor"):c("defaultNodeBorderColor"),b.arc(a[j+"x"],a[j+"y"],k+c("borderSize"),0,2*Math.PI,!0),b.closePath(),b.fill());var m=sigma.canvas.nodes[a.type]||sigma.canvas.nodes.def;m(a,b,c),a.label&&"string"==typeof a.label&&(b.fillStyle="node"===c("labelHoverColor")?a.color||c("defaultNodeColor"):c("defaultLabelHoverColor"),b.fillText(a.label,Math.round(a[j+"x"]+k+3),Math.round(a[j+"y"]+l/3)))}}.call(this),function(){"use strict";sigma.utils.pkg("sigma.canvas.nodes"),sigma.canvas.nodes.def=function(a,b,c){var d=c("prefix")||"";b.fillStyle=a.color||c("defaultNodeColor"),b.beginPath(),b.arc(a[d+"x"],a[d+"y"],a[d+"size"],0,2*Math.PI,!0),b.closePath(),b.fill()}}(),function(){"use strict";sigma.utils.pkg("sigma.canvas.edges"),sigma.canvas.edges.def=function(a,b,c,d,e){var f=a.color,g=e("prefix")||"",h=a[g+"size"]||1,i=e("edgeColor"),j=e("defaultNodeColor"),k=e("defaultEdgeColor");if(!f)switch(i){case"source":f=b.color||j;break;case"target":f=c.color||j;break;default:f=k}d.strokeStyle=f,d.lineWidth=h,d.beginPath(),d.moveTo(b[g+"x"],b[g+"y"]),d.lineTo(c[g+"x"],c[g+"y"]),d.stroke()}}(),function(){"use strict";sigma.utils.pkg("sigma.canvas.edges"),sigma.canvas.edges.curve=function(a,b,c,d,e){var f=a.color,g=e("prefix")||"",h=a[g+"size"]||1,i=e("edgeColor"),j=e("defaultNodeColor"),k=e("defaultEdgeColor"),l={},m=b[g+"size"],n=b[g+"x"],o=b[g+"y"],p=c[g+"x"],q=c[g+"y"];if(l=b.id===c.id?sigma.utils.getSelfLoopControlPoints(n,o,m):sigma.utils.getQuadraticControlPoint(n,o,p,q),!f)switch(i){case"source":f=b.color||j;break;case"target":f=c.color||j;break;default:f=k}d.strokeStyle=f,d.lineWidth=h,d.beginPath(),d.moveTo(n,o),b.id===c.id?d.bezierCurveTo(l.x1,l.y1,l.x2,l.y2,p,q):d.quadraticCurveTo(l.x,l.y,p,q),d.stroke()}}(),function(){"use strict";sigma.utils.pkg("sigma.canvas.edges"),sigma.canvas.edges.arrow=function(a,b,c,d,e){var f=a.color,g=e("prefix")||"",h=e("edgeColor"),i=e("defaultNodeColor"),j=e("defaultEdgeColor"),k=a[g+"size"]||1,l=c[g+"size"],m=b[g+"x"],n=b[g+"y"],o=c[g+"x"],p=c[g+"y"],q=Math.max(2.5*k,e("minArrowSize")),r=Math.sqrt(Math.pow(o-m,2)+Math.pow(p-n,2)),s=m+(o-m)*(r-q-l)/r,t=n+(p-n)*(r-q-l)/r,u=(o-m)*q/r,v=(p-n)*q/r;if(!f)switch(h){case"source":f=b.color||i;break;case"target":f=c.color||i;break;default:f=j}d.strokeStyle=f,d.lineWidth=k,d.beginPath(),d.moveTo(m,n),d.lineTo(s,t),d.stroke(),d.fillStyle=f,d.beginPath(),d.moveTo(s+u,t+v),d.lineTo(s+.6*v,t-.6*u),d.lineTo(s-.6*v,t+.6*u),d.lineTo(s+u,t+v),d.closePath(),d.fill()}}(),function(){"use strict";sigma.utils.pkg("sigma.canvas.edges"),sigma.canvas.edges.curvedArrow=function(a,b,c,d,e){var f,g,h,i,j,k=a.color,l=e("prefix")||"",m=e("edgeColor"),n=e("defaultNodeColor"),o=e("defaultEdgeColor"),p={},q=a[l+"size"]||1,r=c[l+"size"],s=b[l+"x"],t=b[l+"y"],u=c[l+"x"],v=c[l+"y"],w=Math.max(2.5*q,e("minArrowSize"));if(p=b.id===c.id?sigma.utils.getSelfLoopControlPoints(s,t,r):sigma.utils.getQuadraticControlPoint(s,t,u,v),b.id===c.id?(f=Math.sqrt(Math.pow(u-p.x1,2)+Math.pow(v-p.y1,2)),g=p.x1+(u-p.x1)*(f-w-r)/f,h=p.y1+(v-p.y1)*(f-w-r)/f,i=(u-p.x1)*w/f,j=(v-p.y1)*w/f):(f=Math.sqrt(Math.pow(u-p.x,2)+Math.pow(v-p.y,2)),g=p.x+(u-p.x)*(f-w-r)/f,h=p.y+(v-p.y)*(f-w-r)/f,i=(u-p.x)*w/f,j=(v-p.y)*w/f),!k)switch(m){case"source":k=b.color||n;break;case"target":k=c.color||n;break;default:k=o}d.strokeStyle=k,d.lineWidth=q,d.beginPath(),d.moveTo(s,t),b.id===c.id?d.bezierCurveTo(p.x2,p.y2,p.x1,p.y1,g,h):d.quadraticCurveTo(p.x,p.y,g,h),d.stroke(),d.fillStyle=k,d.beginPath(),d.moveTo(g+i,h+j),d.lineTo(g+.6*j,h-.6*i),d.lineTo(g-.6*j,h+.6*i),d.lineTo(g+i,h+j),d.closePath(),d.fill()}}(),function(){"use strict";sigma.utils.pkg("sigma.canvas.edgehovers"),sigma.canvas.edgehovers.def=function(a,b,c,d,e){var f=a.color,g=e("prefix")||"",h=a[g+"size"]||1,i=e("edgeColor"),j=e("defaultNodeColor"),k=e("defaultEdgeColor");if(!f)switch(i){case"source":f=b.color||j;break;case"target":f=c.color||j;break;default:f=k}f="edge"===e("edgeHoverColor")?a.hover_color||f:a.hover_color||e("defaultEdgeHoverColor")||f,h*=e("edgeHoverSizeRatio"),d.strokeStyle=f,d.lineWidth=h,d.beginPath(),d.moveTo(b[g+"x"],b[g+"y"]),d.lineTo(c[g+"x"],c[g+"y"]),d.stroke()}}(),function(){"use strict";sigma.utils.pkg("sigma.canvas.edgehovers"),sigma.canvas.edgehovers.curve=function(a,b,c,d,e){var f=a.color,g=e("prefix")||"",h=e("edgeHoverSizeRatio")*(a[g+"size"]||1),i=e("edgeColor"),j=e("defaultNodeColor"),k=e("defaultEdgeColor"),l={},m=b[g+"size"],n=b[g+"x"],o=b[g+"y"],p=c[g+"x"],q=c[g+"y"];if(l=b.id===c.id?sigma.utils.getSelfLoopControlPoints(n,o,m):sigma.utils.getQuadraticControlPoint(n,o,p,q),!f)switch(i){case"source":f=b.color||j;break;case"target":f=c.color||j;break;default:f=k}f="edge"===e("edgeHoverColor")?a.hover_color||f:a.hover_color||e("defaultEdgeHoverColor")||f,d.strokeStyle=f,d.lineWidth=h,d.beginPath(),d.moveTo(n,o),b.id===c.id?d.bezierCurveTo(l.x1,l.y1,l.x2,l.y2,p,q):d.quadraticCurveTo(l.x,l.y,p,q),d.stroke()}}(),function(){"use strict";sigma.utils.pkg("sigma.canvas.edgehovers"),sigma.canvas.edgehovers.arrow=function(a,b,c,d,e){var f=a.color,g=e("prefix")||"",h=e("edgeColor"),i=e("defaultNodeColor"),j=e("defaultEdgeColor"),k=a[g+"size"]||1,l=c[g+"size"],m=b[g+"x"],n=b[g+"y"],o=c[g+"x"],p=c[g+"y"];
k=a.hover?e("edgeHoverSizeRatio")*k:k;var q=2.5*k,r=Math.sqrt(Math.pow(o-m,2)+Math.pow(p-n,2)),s=m+(o-m)*(r-q-l)/r,t=n+(p-n)*(r-q-l)/r,u=(o-m)*q/r,v=(p-n)*q/r;if(!f)switch(h){case"source":f=b.color||i;break;case"target":f=c.color||i;break;default:f=j}f="edge"===e("edgeHoverColor")?a.hover_color||f:a.hover_color||e("defaultEdgeHoverColor")||f,d.strokeStyle=f,d.lineWidth=k,d.beginPath(),d.moveTo(m,n),d.lineTo(s,t),d.stroke(),d.fillStyle=f,d.beginPath(),d.moveTo(s+u,t+v),d.lineTo(s+.6*v,t-.6*u),d.lineTo(s-.6*v,t+.6*u),d.lineTo(s+u,t+v),d.closePath(),d.fill()}}(),function(){"use strict";sigma.utils.pkg("sigma.canvas.edgehovers"),sigma.canvas.edgehovers.curvedArrow=function(a,b,c,d,e){var f,g,h,i,j,k,l=a.color,m=e("prefix")||"",n=e("edgeColor"),o=e("defaultNodeColor"),p=e("defaultEdgeColor"),q={},r=e("edgeHoverSizeRatio")*(a[m+"size"]||1),s=c[m+"size"],t=b[m+"x"],u=b[m+"y"],v=c[m+"x"],w=c[m+"y"];if(q=b.id===c.id?sigma.utils.getSelfLoopControlPoints(t,u,s):sigma.utils.getQuadraticControlPoint(t,u,v,w),b.id===c.id?(f=Math.sqrt(Math.pow(v-q.x1,2)+Math.pow(w-q.y1,2)),g=2.5*r,h=q.x1+(v-q.x1)*(f-g-s)/f,i=q.y1+(w-q.y1)*(f-g-s)/f,j=(v-q.x1)*g/f,k=(w-q.y1)*g/f):(f=Math.sqrt(Math.pow(v-q.x,2)+Math.pow(w-q.y,2)),g=2.5*r,h=q.x+(v-q.x)*(f-g-s)/f,i=q.y+(w-q.y)*(f-g-s)/f,j=(v-q.x)*g/f,k=(w-q.y)*g/f),!l)switch(n){case"source":l=b.color||o;break;case"target":l=c.color||o;break;default:l=p}l="edge"===e("edgeHoverColor")?a.hover_color||l:a.hover_color||e("defaultEdgeHoverColor")||l,d.strokeStyle=l,d.lineWidth=r,d.beginPath(),d.moveTo(t,u),b.id===c.id?d.bezierCurveTo(q.x2,q.y2,q.x1,q.y1,h,i):d.quadraticCurveTo(q.x,q.y,h,i),d.stroke(),d.fillStyle=l,d.beginPath(),d.moveTo(h+j,i+k),d.lineTo(h+.6*k,i-.6*j),d.lineTo(h-.6*k,i+.6*j),d.lineTo(h+j,i+k),d.closePath(),d.fill()}}(),function(a){"use strict";if("undefined"==typeof sigma)throw"sigma is not declared";sigma.utils.pkg("sigma.canvas.extremities"),sigma.canvas.extremities.def=function(a,b,c,d,e){(sigma.canvas.hovers[b.type]||sigma.canvas.hovers.def)(b,d,e),(sigma.canvas.hovers[c.type]||sigma.canvas.hovers.def)(c,d,e)}}.call(this),function(){"use strict";sigma.utils.pkg("sigma.svg.utils"),sigma.svg.utils={show:function(a){return a.style.display="",this},hide:function(a){return a.style.display="none",this}}}(),function(){"use strict";sigma.utils.pkg("sigma.svg.nodes"),sigma.svg.nodes.def={create:function(a,b){var c=(b("prefix")||"",document.createElementNS(b("xmlns"),"circle"));return c.setAttributeNS(null,"data-node-id",a.id),c.setAttributeNS(null,"class",b("classPrefix")+"-node"),c.setAttributeNS(null,"fill",a.color||b("defaultNodeColor")),c},update:function(a,b,c){var d=c("prefix")||"";return b.setAttributeNS(null,"cx",a[d+"x"]),b.setAttributeNS(null,"cy",a[d+"y"]),b.setAttributeNS(null,"r",a[d+"size"]),c("freeStyle")||b.setAttributeNS(null,"fill",a.color||c("defaultNodeColor")),b.style.display="",this}}}(),function(){"use strict";sigma.utils.pkg("sigma.svg.edges"),sigma.svg.edges.def={create:function(a,b,c,d){var e=a.color,f=(d("prefix")||"",d("edgeColor")),g=d("defaultNodeColor"),h=d("defaultEdgeColor");if(!e)switch(f){case"source":e=b.color||g;break;case"target":e=c.color||g;break;default:e=h}var i=document.createElementNS(d("xmlns"),"line");return i.setAttributeNS(null,"data-edge-id",a.id),i.setAttributeNS(null,"class",d("classPrefix")+"-edge"),i.setAttributeNS(null,"stroke",e),i},update:function(a,b,c,d,e){var f=e("prefix")||"";return b.setAttributeNS(null,"stroke-width",a[f+"size"]||1),b.setAttributeNS(null,"x1",c[f+"x"]),b.setAttributeNS(null,"y1",c[f+"y"]),b.setAttributeNS(null,"x2",d[f+"x"]),b.setAttributeNS(null,"y2",d[f+"y"]),b.style.display="",this}}}(),function(){"use strict";sigma.utils.pkg("sigma.svg.edges"),sigma.svg.edges.curve={create:function(a,b,c,d){var e=a.color,f=(d("prefix")||"",d("edgeColor")),g=d("defaultNodeColor"),h=d("defaultEdgeColor");if(!e)switch(f){case"source":e=b.color||g;break;case"target":e=c.color||g;break;default:e=h}var i=document.createElementNS(d("xmlns"),"path");return i.setAttributeNS(null,"data-edge-id",a.id),i.setAttributeNS(null,"class",d("classPrefix")+"-edge"),i.setAttributeNS(null,"stroke",e),i},update:function(a,b,c,d,e){var f=e("prefix")||"";b.setAttributeNS(null,"stroke-width",a[f+"size"]||1);var g=(c[f+"x"]+d[f+"x"])/2+(d[f+"y"]-c[f+"y"])/4,h=(c[f+"y"]+d[f+"y"])/2+(c[f+"x"]-d[f+"x"])/4,i="M"+c[f+"x"]+","+c[f+"y"]+" Q"+g+","+h+" "+d[f+"x"]+","+d[f+"y"];return b.setAttributeNS(null,"d",i),b.setAttributeNS(null,"fill","none"),b.style.display="",this}}}(),function(a){"use strict";if("undefined"==typeof sigma)throw"sigma is not declared";sigma.utils.pkg("sigma.svg.labels"),sigma.svg.labels.def={create:function(a,b){var c=b("prefix")||"",d=a[c+"size"],e=document.createElementNS(b("xmlns"),"text"),f="fixed"===b("labelSize")?b("defaultLabelSize"):b("labelSizeRatio")*d,g="node"===b("labelColor")?a.color||b("defaultNodeColor"):b("defaultLabelColor");return e.setAttributeNS(null,"data-label-target",a.id),e.setAttributeNS(null,"class",b("classPrefix")+"-label"),e.setAttributeNS(null,"font-size",f),e.setAttributeNS(null,"font-family",b("font")),e.setAttributeNS(null,"fill",g),e.innerHTML=a.label,e.textContent=a.label,e},update:function(a,b,c){var d=c("prefix")||"",e=a[d+"size"],f="fixed"===c("labelSize")?c("defaultLabelSize"):c("labelSizeRatio")*e;return!c("forceLabels")&&e<c("labelThreshold")||"string"!=typeof a.label?void 0:(b.setAttributeNS(null,"x",Math.round(a[d+"x"]+e+3)),b.setAttributeNS(null,"y",Math.round(a[d+"y"]+f/3)),b.style.display="",this)}}}.call(this),function(a){"use strict";if("undefined"==typeof sigma)throw"sigma is not declared";sigma.utils.pkg("sigma.svg.hovers"),sigma.svg.hovers.def={create:function(a,b,c,d){var e,f,g,h,i,j=(d("hoverFontStyle")||d("fontStyle"),d("prefix")||""),k=a[j+"size"],l="fixed"===d("labelSize")?d("defaultLabelSize"):d("labelSizeRatio")*k,m="node"===d("labelHoverColor")?a.color||d("defaultNodeColor"):d("defaultLabelHoverColor"),n=document.createElementNS(d("xmlns"),"g"),o=document.createElementNS(d("xmlns"),"rect"),p=document.createElementNS(d("xmlns"),"circle"),q=document.createElementNS(d("xmlns"),"text");return n.setAttributeNS(null,"class",d("classPrefix")+"-hover"),n.setAttributeNS(null,"data-node-id",a.id),"string"==typeof a.label&&(q.innerHTML=a.label,q.textContent=a.label,q.setAttributeNS(null,"class",d("classPrefix")+"-hover-label"),q.setAttributeNS(null,"font-size",l),q.setAttributeNS(null,"font-family",d("font")),q.setAttributeNS(null,"fill",m),q.setAttributeNS(null,"x",Math.round(a[j+"x"]+k+3)),q.setAttributeNS(null,"y",Math.round(a[j+"y"]+l/3)),e=Math.round(a[j+"x"]-l/2-2),f=Math.round(a[j+"y"]-l/2-2),g=Math.round(c.measureText(a.label).width+l/2+k+9),h=Math.round(l+4),i=Math.round(l/2+2),p.setAttributeNS(null,"class",d("classPrefix")+"-hover-area"),p.setAttributeNS(null,"fill","#fff"),p.setAttributeNS(null,"cx",a[j+"x"]),p.setAttributeNS(null,"cy",a[j+"y"]),p.setAttributeNS(null,"r",i),o.setAttributeNS(null,"class",d("classPrefix")+"-hover-area"),o.setAttributeNS(null,"fill","#fff"),o.setAttributeNS(null,"x",a[j+"x"]+i/4),o.setAttributeNS(null,"y",a[j+"y"]-i),o.setAttributeNS(null,"width",g),o.setAttributeNS(null,"height",h)),n.appendChild(p),n.appendChild(o),n.appendChild(q),n.appendChild(b),n}}}.call(this),function(a){"use strict";if("undefined"==typeof sigma)throw"sigma is not declared";sigma.utils.pkg("sigma.middlewares"),sigma.utils.pkg("sigma.utils"),sigma.middlewares.rescale=function(a,b,c){var d,e,f,g,h,i,j,k,l=this.graph.nodes(),m=this.graph.edges(),n=this.settings.embedObjects(c||{}),o=n("bounds")||sigma.utils.getBoundaries(this.graph,a,!0),p=o.minX,q=o.minY,r=o.maxX,s=o.maxY,t=o.sizeMax,u=o.weightMax,v=n("width")||1,w=n("height")||1,x=n("autoRescale"),y={nodePosition:1,nodeSize:1,edgeSize:1};for(x instanceof Array||(x=["nodePosition","nodeSize","edgeSize"]),d=0,e=x.length;e>d;d++)if(!y[x[d]])throw new Error('The rescale setting "'+x[d]+'" is not recognized.');var z=~x.indexOf("nodePosition"),A=~x.indexOf("nodeSize"),B=~x.indexOf("edgeSize");for(j="outside"===n("scalingMode")?Math.max(v/Math.max(r-p,1),w/Math.max(s-q,1)):Math.min(v/Math.max(r-p,1),w/Math.max(s-q,1)),k=(n("rescaleIgnoreSize")?0:(n("maxNodeSize")||t)/j)+(n("sideMargin")||0),r+=k,p-=k,s+=k,q-=k,j="outside"===n("scalingMode")?Math.max(v/Math.max(r-p,1),w/Math.max(s-q,1)):Math.min(v/Math.max(r-p,1),w/Math.max(s-q,1)),n("maxNodeSize")||n("minNodeSize")?n("maxNodeSize")===n("minNodeSize")?(f=0,g=+n("maxNodeSize")):(f=(n("maxNodeSize")-n("minNodeSize"))/t,g=+n("minNodeSize")):(f=1,g=0),n("maxEdgeSize")||n("minEdgeSize")?n("maxEdgeSize")===n("minEdgeSize")?(h=0,i=+n("minEdgeSize")):(h=(n("maxEdgeSize")-n("minEdgeSize"))/u,i=+n("minEdgeSize")):(h=1,i=0),d=0,e=m.length;e>d;d++)m[d][b+"size"]=m[d][a+"size"]*(B?h:1)+(B?i:0);for(d=0,e=l.length;e>d;d++)l[d][b+"size"]=l[d][a+"size"]*(A?f:1)+(A?g:0),l[d][b+"x"]=(l[d][a+"x"]-(r+p)/2)*(z?j:1),l[d][b+"y"]=(l[d][a+"y"]-(s+q)/2)*(z?j:1)},sigma.utils.getBoundaries=function(a,b,c){var d,e,f=a.edges(),g=a.nodes(),h=-(1/0),i=-(1/0),j=1/0,k=1/0,l=-(1/0),m=-(1/0);if(c)for(d=0,e=f.length;e>d;d++)h=Math.max(f[d][b+"size"],h);for(d=0,e=g.length;e>d;d++)i=Math.max(g[d][b+"size"],i),l=Math.max(g[d][b+"x"],l),j=Math.min(g[d][b+"x"],j),m=Math.max(g[d][b+"y"],m),k=Math.min(g[d][b+"y"],k);return h=h||1,i=i||1,{weightMax:h,sizeMax:i,minX:j,minY:k,maxX:l,maxY:m}}}.call(this),function(a){"use strict";if("undefined"==typeof sigma)throw"sigma is not declared";sigma.utils.pkg("sigma.middlewares"),sigma.middlewares.copy=function(a,b){var c,d,e;if(b+""!=a+""){for(e=this.graph.nodes(),c=0,d=e.length;d>c;c++)e[c][b+"x"]=e[c][a+"x"],e[c][b+"y"]=e[c][a+"y"],e[c][b+"size"]=e[c][a+"size"];for(e=this.graph.edges(),c=0,d=e.length;d>c;c++)e[c][b+"size"]=e[c][a+"size"]}}}.call(this),function(a){"use strict";if("undefined"==typeof sigma)throw"sigma is not declared";sigma.utils.pkg("sigma.misc.animation.running");var b=function(){var a=0;return function(){return""+ ++a}}();sigma.misc.animation.camera=function(c,d,e){if(!(c instanceof sigma.classes.camera&&"object"==typeof d&&d))throw"animation.camera: Wrong arguments.";if("number"!=typeof d.x&&"number"!=typeof d.y&&"number"!=typeof d.ratio&&"number"!=typeof d.angle)throw"There must be at least one valid coordinate in the given val.";var f,g,h,i,j,k,l=e||{},m=sigma.utils.dateNow();return k={x:c.x,y:c.y,ratio:c.ratio,angle:c.angle},j=l.duration,i="function"!=typeof l.easing?sigma.utils.easings[l.easing||"quadraticInOut"]:l.easing,f=function(){var b,e=l.duration?(sigma.utils.dateNow()-m)/l.duration:1;e>=1?(c.isAnimated=!1,c.goTo({x:d.x!==a?d.x:k.x,y:d.y!==a?d.y:k.y,ratio:d.ratio!==a?d.ratio:k.ratio,angle:d.angle!==a?d.angle:k.angle}),cancelAnimationFrame(g),delete sigma.misc.animation.running[g],"function"==typeof l.onComplete&&l.onComplete()):(b=i(e),c.isAnimated=!0,c.goTo({x:d.x!==a?k.x+(d.x-k.x)*b:k.x,y:d.y!==a?k.y+(d.y-k.y)*b:k.y,ratio:d.ratio!==a?k.ratio+(d.ratio-k.ratio)*b:k.ratio,angle:d.angle!==a?k.angle+(d.angle-k.angle)*b:k.angle}),"function"==typeof l.onNewFrame&&l.onNewFrame(),h.frameId=requestAnimationFrame(f))},g=b(),h={frameId:requestAnimationFrame(f),target:c,type:"camera",options:l,fn:f},sigma.misc.animation.running[g]=h,g},sigma.misc.animation.kill=function(a){if(1!==arguments.length||"number"!=typeof a)throw"animation.kill: Wrong arguments.";var b=sigma.misc.animation.running[a];return b&&(cancelAnimationFrame(a),delete sigma.misc.animation.running[b.frameId],"camera"===b.type&&(b.target.isAnimated=!1),"function"==typeof(b.options||{}).onComplete&&b.options.onComplete()),this},sigma.misc.animation.killAll=function(a){var b,c,d=0,e="string"==typeof a?a:null,f="object"==typeof a?a:null,g=sigma.misc.animation.running;for(c in g)e&&g[c].type!==e||f&&g[c].target!==f||(b=sigma.misc.animation.running[c],cancelAnimationFrame(b.frameId),delete sigma.misc.animation.running[c],"camera"===b.type&&(b.target.isAnimated=!1),d++,"function"==typeof(b.options||{}).onComplete&&b.options.onComplete());return d},sigma.misc.animation.has=function(a){var b,c="string"==typeof a?a:null,d="object"==typeof a?a:null,e=sigma.misc.animation.running;for(b in e)if(!(c&&e[b].type!==c||d&&e[b].target!==d))return!0;return!1}}.call(this),function(a){"use strict";if("undefined"==typeof sigma)throw"sigma is not declared";sigma.utils.pkg("sigma.misc"),sigma.misc.bindEvents=function(b){function c(a){a&&(h="x"in a.data?a.data.x:h,i="y"in a.data?a.data.y:i);var c,d,e,f,g,k,l,m,n=[],o=h+j.width/2,p=i+j.height/2,q=j.camera.cameraPosition(h,i),r=j.camera.quadtree.point(q.x,q.y);if(r.length)for(c=0,e=r.length;e>c;c++)if(f=r[c],g=f[b+"x"],k=f[b+"y"],l=f[b+"size"],!f.hidden&&o>g-l&&g+l>o&&p>k-l&&k+l>p&&Math.sqrt(Math.pow(o-g,2)+Math.pow(p-k,2))<l){for(m=!1,d=0;d<n.length;d++)if(f.size>n[d].size){n.splice(d,0,f),m=!0;break}m||n.push(f)}return n}function d(c){function d(a,b){for(r=!1,g=0;g<a.length;g++)if(b.size>a[g].size){a.splice(g,0,b),r=!0;break}r||a.push(b)}if(!j.settings("enableEdgeHovering"))return[];var e=sigma.renderers.canvas&&j instanceof sigma.renderers.canvas;if(!e)throw new Error("The edge events feature is not compatible with the WebGL renderer");c&&(h="x"in c.data?c.data.x:h,i="y"in c.data?c.data.y:i);var f,g,k,l,m,n,o,p,q,r,s=j.settings("edgeHoverPrecision"),t={},u=[],v=h+j.width/2,w=i+j.height/2,x=j.camera.cameraPosition(h,i),y=[];if(e){var z=j.camera.quadtree.area(j.camera.getRectangle(j.width,j.height));for(l=z,f=0,k=l.length;k>f;f++)t[l[f].id]=l[f]}if(j.camera.edgequadtree!==a&&(y=j.camera.edgequadtree.point(x.x,x.y)),y.length)for(f=0,k=y.length;k>f;f++)m=y[f],o=j.graph.nodes(m.source),p=j.graph.nodes(m.target),n=m[b+"size"]||m["read_"+b+"size"],!m.hidden&&!o.hidden&&!p.hidden&&(!e||t[m.source]||t[m.target])&&sigma.utils.getDistance(o[b+"x"],o[b+"y"],v,w)>o[b+"size"]&&sigma.utils.getDistance(p[b+"x"],p[b+"y"],v,w)>p[b+"size"]&&("curve"==m.type||"curvedArrow"==m.type?o.id===p.id?(q=sigma.utils.getSelfLoopControlPoints(o[b+"x"],o[b+"y"],o[b+"size"]),sigma.utils.isPointOnBezierCurve(v,w,o[b+"x"],o[b+"y"],p[b+"x"],p[b+"y"],q.x1,q.y1,q.x2,q.y2,Math.max(n,s))&&d(u,m)):(q=sigma.utils.getQuadraticControlPoint(o[b+"x"],o[b+"y"],p[b+"x"],p[b+"y"]),sigma.utils.isPointOnQuadraticCurve(v,w,o[b+"x"],o[b+"y"],p[b+"x"],p[b+"y"],q.x,q.y,Math.max(n,s))&&d(u,m)):sigma.utils.isPointOnSegment(v,w,o[b+"x"],o[b+"y"],p[b+"x"],p[b+"y"],Math.max(n,s))&&d(u,m));return u}function e(a){function b(a){j.settings("eventsEnabled")&&(j.dispatchEvent("click",a.data),i=c(a),k=d(a),i.length?(j.dispatchEvent("clickNode",{node:i[0],captor:a.data}),j.dispatchEvent("clickNodes",{node:i,captor:a.data})):k.length?(j.dispatchEvent("clickEdge",{edge:k[0],captor:a.data}),j.dispatchEvent("clickEdges",{edge:k,captor:a.data})):j.dispatchEvent("clickStage",{captor:a.data}))}function e(a){j.settings("eventsEnabled")&&(j.dispatchEvent("doubleClick",a.data),i=c(a),k=d(a),i.length?(j.dispatchEvent("doubleClickNode",{node:i[0],captor:a.data}),j.dispatchEvent("doubleClickNodes",{node:i,captor:a.data})):k.length?(j.dispatchEvent("doubleClickEdge",{edge:k[0],captor:a.data}),j.dispatchEvent("doubleClickEdges",{edge:k,captor:a.data})):j.dispatchEvent("doubleClickStage",{captor:a.data}))}function f(a){j.settings("eventsEnabled")&&(j.dispatchEvent("rightClick",a.data),i=c(a),k=d(a),i.length?(j.dispatchEvent("rightClickNode",{node:i[0],captor:a.data}),j.dispatchEvent("rightClickNodes",{node:i,captor:a.data})):k.length?(j.dispatchEvent("rightClickEdge",{edge:k[0],captor:a.data}),j.dispatchEvent("rightClickEdges",{edge:k,captor:a.data})):j.dispatchEvent("rightClickStage",{captor:a.data}))}function g(a){if(j.settings("eventsEnabled")){var b,c,d,e,f=[],g=[];for(b in l)f.push(l[b]);for(l={},c=0,d=f.length;d>c;c++)j.dispatchEvent("outNode",{node:f[c],captor:a.data});for(f.length&&j.dispatchEvent("outNodes",{nodes:f,captor:a.data}),m={},c=0,e=g.length;e>c;c++)j.dispatchEvent("outEdge",{edge:g[c],captor:a.data});g.length&&j.dispatchEvent("outEdges",{edges:g,captor:a.data})}}function h(a){if(j.settings("eventsEnabled")){i=c(a),k=d(a);var b,e,f,g,h=[],n=[],o={},p=i.length,q=[],r=[],s={},t=k.length;for(b=0;p>b;b++)f=i[b],o[f.id]=f,l[f.id]||(n.push(f),l[f.id]=f);for(e in l)o[e]||(h.push(l[e]),delete l[e]);for(b=0,p=n.length;p>b;b++)j.dispatchEvent("overNode",{node:n[b],captor:a.data});for(b=0,p=h.length;p>b;b++)j.dispatchEvent("outNode",{node:h[b],captor:a.data});for(n.length&&j.dispatchEvent("overNodes",{nodes:n,captor:a.data}),h.length&&j.dispatchEvent("outNodes",{nodes:h,captor:a.data}),b=0;t>b;b++)g=k[b],s[g.id]=g,m[g.id]||(r.push(g),m[g.id]=g);for(e in m)s[e]||(q.push(m[e]),delete m[e]);for(b=0,t=r.length;t>b;b++)j.dispatchEvent("overEdge",{edge:r[b],captor:a.data});for(b=0,t=q.length;t>b;b++)j.dispatchEvent("outEdge",{edge:q[b],captor:a.data});r.length&&j.dispatchEvent("overEdges",{edges:r,captor:a.data}),q.length&&j.dispatchEvent("outEdges",{edges:q,captor:a.data})}}var i,k,l={},m={};a.bind("click",b),a.bind("mousedown",h),a.bind("mouseup",h),a.bind("mousemove",h),a.bind("mouseout",g),a.bind("doubleclick",e),a.bind("rightclick",f),j.bind("render",h)}var f,g,h,i,j=this;for(f=0,g=this.captors.length;g>f;f++)e(this.captors[f])}}.call(this),function(a){"use strict";if("undefined"==typeof sigma)throw"sigma is not declared";sigma.utils.pkg("sigma.misc"),sigma.misc.bindDOMEvents=function(a){function b(a){this.attr=function(b){return a.getAttributeNS(null,b)},this.tag=a.tagName,this["class"]=this.attr("class"),this.id=this.attr("id"),this.isNode=function(){return!!~this["class"].indexOf(g.settings("classPrefix")+"-node")},this.isEdge=function(){return!!~this["class"].indexOf(g.settings("classPrefix")+"-edge")},this.isHover=function(){return!!~this["class"].indexOf(g.settings("classPrefix")+"-hover")}}function c(a){if(g.settings("eventsEnabled")){g.dispatchEvent("click",a);var c=new b(a.target);c.isNode()?g.dispatchEvent("clickNode",{node:h.nodes(c.attr("data-node-id"))}):g.dispatchEvent("clickStage"),a.preventDefault(),a.stopPropagation()}}function d(a){if(g.settings("eventsEnabled")){g.dispatchEvent("doubleClick",a);var c=new b(a.target);c.isNode()?g.dispatchEvent("doubleClickNode",{node:h.nodes(c.attr("data-node-id"))}):g.dispatchEvent("doubleClickStage"),a.preventDefault(),a.stopPropagation()}}function e(a){var c=a.toElement||a.target;if(g.settings("eventsEnabled")&&c){var d=new b(c);if(d.isNode())g.dispatchEvent("overNode",{node:h.nodes(d.attr("data-node-id"))});else if(d.isEdge()){var e=h.edges(d.attr("data-edge-id"));g.dispatchEvent("overEdge",{edge:e,source:h.nodes(e.source),target:h.nodes(e.target)})}}}function f(a){var c=a.fromElement||a.originalTarget;if(g.settings("eventsEnabled")){var d=new b(c);if(d.isNode())g.dispatchEvent("outNode",{node:h.nodes(d.attr("data-node-id"))});else if(d.isEdge()){var e=h.edges(d.attr("data-edge-id"));g.dispatchEvent("outEdge",{edge:e,source:h.nodes(e.source),target:h.nodes(e.target)})}}}var g=this,h=this.graph;a.addEventListener("click",c,!1),sigma.utils.doubleClick(a,"click",d),a.addEventListener("touchstart",c,!1),sigma.utils.doubleClick(a,"touchstart",d),a.addEventListener("mouseover",e,!0),a.addEventListener("mouseout",f,!0)}}.call(this),function(a){"use strict";if("undefined"==typeof sigma)throw"sigma is not declared";sigma.utils.pkg("sigma.misc"),sigma.misc.drawHovers=function(a){function b(){c.contexts.hover.canvas.width=c.contexts.hover.canvas.width;var b,f,g,h,i,j=c.settings("defaultNodeType"),k=c.settings("defaultEdgeType"),l=sigma.canvas.hovers,m=sigma.canvas.edgehovers,n=sigma.canvas.extremities,o=c.settings.embedObjects({prefix:a});if(o("enableHovering")&&o("singleHover")&&Object.keys(d).length&&(h=d[Object.keys(d)[0]],(l[h.type]||l[j]||l.def)(h,c.contexts.hover,o)),o("enableHovering")&&!o("singleHover"))for(b in d)(l[d[b].type]||l[j]||l.def)(d[b],c.contexts.hover,o);if(o("enableEdgeHovering")&&o("singleHover")&&Object.keys(e).length&&(i=e[Object.keys(e)[0]],f=c.graph.nodes(i.source),g=c.graph.nodes(i.target),i.hidden||((m[i.type]||m[k]||m.def)(i,f,g,c.contexts.hover,o),o("edgeHoverExtremities")?(n[i.type]||n.def)(i,f,g,c.contexts.hover,o):((sigma.canvas.nodes[f.type]||sigma.canvas.nodes.def)(f,c.contexts.hover,o),(sigma.canvas.nodes[g.type]||sigma.canvas.nodes.def)(g,c.contexts.hover,o)))),o("enableEdgeHovering")&&!o("singleHover"))for(b in e)i=e[b],f=c.graph.nodes(i.source),g=c.graph.nodes(i.target),i.hidden||((m[i.type]||m[k]||m.def)(i,f,g,c.contexts.hover,o),o("edgeHoverExtremities")?(n[i.type]||n.def)(i,f,g,c.contexts.hover,o):((sigma.canvas.nodes[f.type]||sigma.canvas.nodes.def)(f,c.contexts.hover,o),(sigma.canvas.nodes[g.type]||sigma.canvas.nodes.def)(g,c.contexts.hover,o)))}var c=this,d={},e={};this.bind("overNode",function(a){var c=a.data.node;c.hidden||(d[c.id]=c,b())}),this.bind("outNode",function(a){delete d[a.data.node.id],b()}),this.bind("overEdge",function(a){var c=a.data.edge;c.hidden||(e[c.id]=c,b())}),this.bind("outEdge",function(a){delete e[a.data.edge.id],b()}),this.bind("render",function(a){b()})}}.call(this);;;(function(undefined) {
  'use strict';

  if (typeof sigma === 'undefined')
    throw 'sigma is not declared';

  /**
   * Sigma ForceAtlas2.5 Supervisor
   * ===============================
   *
   * Author: Guillaume Plique (Yomguithereal)
   * Version: 0.1
   */
  var _root = this;

  /**
   * Feature detection
   * ------------------
   */
  var webWorkers = 'Worker' in _root;

  /**
   * Supervisor Object
   * ------------------
   */
  function Supervisor(sigInst, options) {
    var _this = this,
        workerFn = sigInst.getForceAtlas2Worker &&
          sigInst.getForceAtlas2Worker();

    options = options || {};

    // _root URL Polyfill
    _root.URL = _root.URL || _root.webkitURL;

    // Properties
    this.sigInst = sigInst;
    this.graph = this.sigInst.graph;
    this.ppn = 10;
    this.ppe = 3;
    this.config = {};
    this.shouldUseWorker =
      options.worker === false ? false : true && webWorkers;
    this.workerUrl = options.workerUrl;

    // State
    this.started = false;
    this.running = false;

    // Web worker or classic DOM events?
    if (this.shouldUseWorker) {
      if (!this.workerUrl) {
        var blob = this.makeBlob(workerFn);
        this.worker = new Worker(URL.createObjectURL(blob));
      }
      else {
        this.worker = new Worker(this.workerUrl);
      }

      // Post Message Polyfill
      this.worker.postMessage =
        this.worker.webkitPostMessage || this.worker.postMessage;
    }
    else {

      eval(workerFn);
    }

    // Worker message receiver
    this.msgName = (this.worker) ? 'message' : 'newCoords';
    this.listener = function(e) {

      // Retrieving data
      _this.nodesByteArray = new Float32Array(e.data.nodes);

      // If ForceAtlas2 is running, we act accordingly
      if (_this.running) {

        // Applying layout
        _this.applyLayoutChanges();

        // Send data back to worker and loop
        _this.sendByteArrayToWorker();

        // Rendering graph
        _this.sigInst.refresh();
      }
    };

    (this.worker || document).addEventListener(this.msgName, this.listener);

    // Filling byteArrays
    this.graphToByteArrays();

    // Binding on kill to properly terminate layout when parent is killed
    sigInst.bind('kill', function() {
      sigInst.killForceAtlas2();
    });
  }

  Supervisor.prototype.makeBlob = function(workerFn) {
    var blob;

    try {
      blob = new Blob([workerFn], {type: 'application/javascript'});
    }
    catch (e) {
      _root.BlobBuilder = _root.BlobBuilder ||
                          _root.WebKitBlobBuilder ||
                          _root.MozBlobBuilder;

      blob = new BlobBuilder();
      blob.append(workerFn);
      blob = blob.getBlob();
    }

    return blob;
  };

  Supervisor.prototype.graphToByteArrays = function() {
    var nodes = this.graph.nodes(),
        edges = this.graph.edges(),
        nbytes = nodes.length * this.ppn,
        ebytes = edges.length * this.ppe,
        nIndex = {},
        i,
        j,
        l;

    // Allocating Byte arrays with correct nb of bytes
    this.nodesByteArray = new Float32Array(nbytes);
    this.edgesByteArray = new Float32Array(ebytes);

    // Iterate through nodes
    for (i = j = 0, l = nodes.length; i < l; i++) {

      // Populating index
      nIndex[nodes[i].id] = j;

      // Populating byte array
      this.nodesByteArray[j] = nodes[i].x;
      this.nodesByteArray[j + 1] = nodes[i].y;
      this.nodesByteArray[j + 2] = 0;
      this.nodesByteArray[j + 3] = 0;
      this.nodesByteArray[j + 4] = 0;
      this.nodesByteArray[j + 5] = 0;
      this.nodesByteArray[j + 6] = 1 + this.graph.degree(nodes[i].id);
      this.nodesByteArray[j + 7] = 1;
      this.nodesByteArray[j + 8] = nodes[i].size;
      this.nodesByteArray[j + 9] = 0;
      j += this.ppn;
    }

    // Iterate through edges
    for (i = j = 0, l = edges.length; i < l; i++) {
      this.edgesByteArray[j] = nIndex[edges[i].source];
      this.edgesByteArray[j + 1] = nIndex[edges[i].target];
      this.edgesByteArray[j + 2] = edges[i].weight || 0;
      j += this.ppe;
    }
  };

  // TODO: make a better send function
  Supervisor.prototype.applyLayoutChanges = function() {
    var nodes = this.graph.nodes(),
        j = 0,
        realIndex;

    // Moving nodes
    for (var i = 0, l = this.nodesByteArray.length; i < l; i += this.ppn) {
      nodes[j].x = this.nodesByteArray[i];
      nodes[j].y = this.nodesByteArray[i + 1];
      j++;
    }
  };

  Supervisor.prototype.sendByteArrayToWorker = function(action) {
    var content = {
      action: action || 'loop',
      nodes: this.nodesByteArray.buffer
    };

    var buffers = [this.nodesByteArray.buffer];

    if (action === 'start') {
      content.config = this.config || {};
      content.edges = this.edgesByteArray.buffer;
      buffers.push(this.edgesByteArray.buffer);
    }

    if (this.shouldUseWorker)
      this.worker.postMessage(content, buffers);
    else
      _root.postMessage(content, '*');
  };

  Supervisor.prototype.start = function() {
    if (this.running)
      return;

    this.running = true;

    // Do not refresh edgequadtree during layout:
    var k,
        c;
    for (k in this.sigInst.cameras) {
      c = this.sigInst.cameras[k];
      c.edgequadtree._enabled = false;
    }

    if (!this.started) {

      // Sending init message to worker
      this.sendByteArrayToWorker('start');
      this.started = true;
    }
    else {
      this.sendByteArrayToWorker();
    }
  };

  Supervisor.prototype.stop = function() {
    if (!this.running)
      return;

    // Allow to refresh edgequadtree:
    var k,
        c,
        bounds;
    for (k in this.sigInst.cameras) {
      c = this.sigInst.cameras[k];
      c.edgequadtree._enabled = true;

      // Find graph boundaries:
      bounds = sigma.utils.getBoundaries(
        this.graph,
        c.readPrefix
      );

      // Refresh edgequadtree:
      if (c.settings('drawEdges') && c.settings('enableEdgeHovering'))
        c.edgequadtree.index(this.sigInst.graph, {
          prefix: c.readPrefix,
          bounds: {
            x: bounds.minX,
            y: bounds.minY,
            width: bounds.maxX - bounds.minX,
            height: bounds.maxY - bounds.minY
          }
        });
    }

    this.running = false;
  };

  Supervisor.prototype.killWorker = function() {
    if (this.worker) {
      this.worker.terminate();
    }
    else {
      _root.postMessage({action: 'kill'}, '*');
      document.removeEventListener(this.msgName, this.listener);
    }
  };

  Supervisor.prototype.configure = function(config) {

    // Setting configuration
    this.config = config;

    if (!this.started)
      return;

    var data = {action: 'config', config: this.config};

    if (this.shouldUseWorker)
      this.worker.postMessage(data);
    else
      _root.postMessage(data, '*');
  };

  /**
   * Interface
   * ----------
   */
  sigma.prototype.startForceAtlas2 = function(config) {

    // Create supervisor if undefined
    if (!this.supervisor)
      this.supervisor = new Supervisor(this, config);

    // Configuration provided?
    if (config)
      this.supervisor.configure(config);

    // Start algorithm
    this.supervisor.start();

    return this;
  };

  sigma.prototype.stopForceAtlas2 = function() {
    if (!this.supervisor)
      return this;

    // Pause algorithm
    this.supervisor.stop();

    return this;
  };

  sigma.prototype.killForceAtlas2 = function() {
    if (!this.supervisor)
      return this;

    // Stop Algorithm
    this.supervisor.stop();

    // Kill Worker
    this.supervisor.killWorker();

    // Kill supervisor
    this.supervisor = null;

    return this;
  };

  sigma.prototype.configForceAtlas2 = function(config) {
    if (!this.supervisor)
      this.supervisor = new Supervisor(this, config);

    this.supervisor.configure(config);

    return this;
  };

  sigma.prototype.isForceAtlas2Running = function(config) {
    return !!this.supervisor && this.supervisor.running;
  };
}).call(this);
;;(function(undefined) {
  'use strict';

  /**
   * Sigma ForceAtlas2.5 Webworker
   * ==============================
   *
   * Author: Guillaume Plique (Yomguithereal)
   * Algorithm author: Mathieu Jacomy @ Sciences Po Medialab & WebAtlas
   * Version: 1.0.3
   */

  var _root = this,
      inWebWorker = !('document' in _root);

  /**
   * Worker Function Wrapper
   * ------------------------
   *
   * The worker has to be wrapped into a single stringified function
   * to be passed afterwards as a BLOB object to the supervisor.
   */
  var Worker = function(undefined) {
    'use strict';

    /**
     * Worker settings and properties
     */
    var W = {

      // Properties
      ppn: 10,
      ppe: 3,
      ppr: 9,
      maxForce: 10,
      iterations: 0,
      converged: false,

      // Possible to change through config
      settings: {
        linLogMode: false,
        outboundAttractionDistribution: false,
        adjustSizes: false,
        edgeWeightInfluence: 0,
        scalingRatio: 1,
        strongGravityMode: false,
        gravity: 1,
        slowDown: 1,
        barnesHutOptimize: false,
        barnesHutTheta: 0.5,
        startingIterations: 1,
        iterationsPerRender: 1
      }
    };

    var NodeMatrix,
        EdgeMatrix,
        RegionMatrix;

    /**
     * Helpers
     */
    function extend() {
      var i,
          k,
          res = {},
          l = arguments.length;

      for (i = l - 1; i >= 0; i--)
        for (k in arguments[i])
          res[k] = arguments[i][k];
      return res;
    }

    function __emptyObject(obj) {
      var k;

      for (k in obj)
        if (!('hasOwnProperty' in obj) || obj.hasOwnProperty(k))
          delete obj[k];

      return obj;
    }

    /**
     * Matrices properties accessors
     */
    var nodeProperties = {
      x: 0,
      y: 1,
      dx: 2,
      dy: 3,
      old_dx: 4,
      old_dy: 5,
      mass: 6,
      convergence: 7,
      size: 8,
      fixed: 9
    };

    var edgeProperties = {
      source: 0,
      target: 1,
      weight: 2
    };

    var regionProperties = {
      node: 0,
      centerX: 1,
      centerY: 2,
      size: 3,
      nextSibling: 4,
      firstChild: 5,
      mass: 6,
      massCenterX: 7,
      massCenterY: 8
    };

    function np(i, p) {

      // DEBUG: safeguards
      if ((i % W.ppn) !== 0)
        throw 'np: non correct (' + i + ').';
      if (i !== parseInt(i))
        throw 'np: non int.';

      if (p in nodeProperties)
        return i + nodeProperties[p];
      else
        throw 'ForceAtlas2.Worker - ' +
              'Inexistant node property given (' + p + ').';
    }

    function ep(i, p) {

      // DEBUG: safeguards
      if ((i % W.ppe) !== 0)
        throw 'ep: non correct (' + i + ').';
      if (i !== parseInt(i))
        throw 'ep: non int.';

      if (p in edgeProperties)
        return i + edgeProperties[p];
      else
        throw 'ForceAtlas2.Worker - ' +
              'Inexistant edge property given (' + p + ').';
    }

    function rp(i, p) {

      // DEBUG: safeguards
      if ((i % W.ppr) !== 0)
        throw 'rp: non correct (' + i + ').';
      if (i !== parseInt(i))
        throw 'rp: non int.';

      if (p in regionProperties)
        return i + regionProperties[p];
      else
        throw 'ForceAtlas2.Worker - ' +
              'Inexistant region property given (' + p + ').';
    }

    // DEBUG
    function nan(v) {
      if (isNaN(v))
        throw 'NaN alert!';
    }


    /**
     * Algorithm initialization
     */

    function init(nodes, edges, config) {
      config = config || {};
      var i, l;

      // Matrices
      NodeMatrix = nodes;
      EdgeMatrix = edges;

      // Length
      W.nodesLength = NodeMatrix.length;
      W.edgesLength = EdgeMatrix.length;

      // Merging configuration
      configure(config);
    }

    function configure(o) {
      W.settings = extend(o, W.settings);
    }

    /**
     * Algorithm pass
     */

    // MATH: get distances stuff and power 2 issues
    function pass() {
      var a, i, j, l, r, n, n1, n2, e, w, g, k, m;

      var outboundAttCompensation,
          coefficient,
          xDist,
          yDist,
          ewc,
          mass,
          distance,
          size,
          factor;

      // 1) Initializing layout data
      //-----------------------------

      // Resetting positions & computing max values
      for (n = 0; n < W.nodesLength; n += W.ppn) {
        NodeMatrix[np(n, 'old_dx')] = NodeMatrix[np(n, 'dx')];
        NodeMatrix[np(n, 'old_dy')] = NodeMatrix[np(n, 'dy')];
        NodeMatrix[np(n, 'dx')] = 0;
        NodeMatrix[np(n, 'dy')] = 0;
      }

      // If outbound attraction distribution, compensate
      if (W.settings.outboundAttractionDistribution) {
        outboundAttCompensation = 0;
        for (n = 0; n < W.nodesLength; n += W.ppn) {
          outboundAttCompensation += NodeMatrix[np(n, 'mass')];
        }

        outboundAttCompensation /= W.nodesLength;
      }


      // 1.bis) Barnes-Hut computation
      //------------------------------

      if (W.settings.barnesHutOptimize) {

        var minX = Infinity,
            maxX = -Infinity,
            minY = Infinity,
            maxY = -Infinity,
            q, q0, q1, q2, q3;

        // Setting up
        // RegionMatrix = new Float32Array(W.nodesLength / W.ppn * 4 * W.ppr);
        RegionMatrix = [];

        // Computing min and max values
        for (n = 0; n < W.nodesLength; n += W.ppn) {
          minX = Math.min(minX, NodeMatrix[np(n, 'x')]);
          maxX = Math.max(maxX, NodeMatrix[np(n, 'x')]);
          minY = Math.min(minY, NodeMatrix[np(n, 'y')]);
          maxY = Math.max(maxY, NodeMatrix[np(n, 'y')]);
        }

        // Build the Barnes Hut root region
        RegionMatrix[rp(0, 'node')] = -1;
        RegionMatrix[rp(0, 'centerX')] = (minX + maxX) / 2;
        RegionMatrix[rp(0, 'centerY')] = (minY + maxY) / 2;
        RegionMatrix[rp(0, 'size')] = Math.max(maxX - minX, maxY - minY);
        RegionMatrix[rp(0, 'nextSibling')] = -1;
        RegionMatrix[rp(0, 'firstChild')] = -1;
        RegionMatrix[rp(0, 'mass')] = 0;
        RegionMatrix[rp(0, 'massCenterX')] = 0;
        RegionMatrix[rp(0, 'massCenterY')] = 0;

        // Add each node in the tree
        l = 1;
        for (n = 0; n < W.nodesLength; n += W.ppn) {

          // Current region, starting with root
          r = 0;

          while (true) {
            // Are there sub-regions?

            // We look at first child index
            if (RegionMatrix[rp(r, 'firstChild')] >= 0) {

              // There are sub-regions

              // We just iterate to find a "leave" of the tree
              // that is an empty region or a region with a single node
              // (see next case)

              // Find the quadrant of n
              if (NodeMatrix[np(n, 'x')] < RegionMatrix[rp(r, 'centerX')]) {

                if (NodeMatrix[np(n, 'y')] < RegionMatrix[rp(r, 'centerY')]) {

                  // Top Left quarter
                  q = RegionMatrix[rp(r, 'firstChild')];
                }
                else {

                  // Bottom Left quarter
                  q = RegionMatrix[rp(r, 'firstChild')] + W.ppr;
                }
              }
              else {
                if (NodeMatrix[np(n, 'y')] < RegionMatrix[rp(r, 'centerY')]) {

                  // Top Right quarter
                  q = RegionMatrix[rp(r, 'firstChild')] + W.ppr * 2;
                }
                else {

                  // Bottom Right quarter
                  q = RegionMatrix[rp(r, 'firstChild')] + W.ppr * 3;
                }
              }

              // Update center of mass and mass (we only do it for non-leave regions)
              RegionMatrix[rp(r, 'massCenterX')] =
                (RegionMatrix[rp(r, 'massCenterX')] * RegionMatrix[rp(r, 'mass')] +
                 NodeMatrix[np(n, 'x')] * NodeMatrix[np(n, 'mass')]) /
                (RegionMatrix[rp(r, 'mass')] + NodeMatrix[np(n, 'mass')]);

              RegionMatrix[rp(r, 'massCenterY')] =
                (RegionMatrix[rp(r, 'massCenterY')] * RegionMatrix[rp(r, 'mass')] +
                 NodeMatrix[np(n, 'y')] * NodeMatrix[np(n, 'mass')]) /
                (RegionMatrix[rp(r, 'mass')] + NodeMatrix[np(n, 'mass')]);

              RegionMatrix[rp(r, 'mass')] += NodeMatrix[np(n, 'mass')];

              // Iterate on the right quadrant
              r = q;
              continue;
            }
            else {

              // There are no sub-regions: we are in a "leave"

              // Is there a node in this leave?
              if (RegionMatrix[rp(r, 'node')] < 0) {

                // There is no node in region:
                // we record node n and go on
                RegionMatrix[rp(r, 'node')] = n;
                break;
              }
              else {

                // There is a node in this region

                // We will need to create sub-regions, stick the two
                // nodes (the old one r[0] and the new one n) in two
                // subregions. If they fall in the same quadrant,
                // we will iterate.

                // Create sub-regions
                RegionMatrix[rp(r, 'firstChild')] = l * W.ppr;
                w = RegionMatrix[rp(r, 'size')] / 2;  // new size (half)

                // NOTE: we use screen coordinates
                // from Top Left to Bottom Right

                // Top Left sub-region
                g = RegionMatrix[rp(r, 'firstChild')];

                RegionMatrix[rp(g, 'node')] = -1;
                RegionMatrix[rp(g, 'centerX')] = RegionMatrix[rp(r, 'centerX')] - w;
                RegionMatrix[rp(g, 'centerY')] = RegionMatrix[rp(r, 'centerY')] - w;
                RegionMatrix[rp(g, 'size')] = w;
                RegionMatrix[rp(g, 'nextSibling')] = g + W.ppr;
                RegionMatrix[rp(g, 'firstChild')] = -1;
                RegionMatrix[rp(g, 'mass')] = 0;
                RegionMatrix[rp(g, 'massCenterX')] = 0;
                RegionMatrix[rp(g, 'massCenterY')] = 0;

                // Bottom Left sub-region
                g += W.ppr;
                RegionMatrix[rp(g, 'node')] = -1;
                RegionMatrix[rp(g, 'centerX')] = RegionMatrix[rp(r, 'centerX')] - w;
                RegionMatrix[rp(g, 'centerY')] = RegionMatrix[rp(r, 'centerY')] + w;
                RegionMatrix[rp(g, 'size')] = w;
                RegionMatrix[rp(g, 'nextSibling')] = g + W.ppr;
                RegionMatrix[rp(g, 'firstChild')] = -1;
                RegionMatrix[rp(g, 'mass')] = 0;
                RegionMatrix[rp(g, 'massCenterX')] = 0;
                RegionMatrix[rp(g, 'massCenterY')] = 0;

                // Top Right sub-region
                g += W.ppr;
                RegionMatrix[rp(g, 'node')] = -1;
                RegionMatrix[rp(g, 'centerX')] = RegionMatrix[rp(r, 'centerX')] + w;
                RegionMatrix[rp(g, 'centerY')] = RegionMatrix[rp(r, 'centerY')] - w;
                RegionMatrix[rp(g, 'size')] = w;
                RegionMatrix[rp(g, 'nextSibling')] = g + W.ppr;
                RegionMatrix[rp(g, 'firstChild')] = -1;
                RegionMatrix[rp(g, 'mass')] = 0;
                RegionMatrix[rp(g, 'massCenterX')] = 0;
                RegionMatrix[rp(g, 'massCenterY')] = 0;

                // Bottom Right sub-region
                g += W.ppr;
                RegionMatrix[rp(g, 'node')] = -1;
                RegionMatrix[rp(g, 'centerX')] = RegionMatrix[rp(r, 'centerX')] + w;
                RegionMatrix[rp(g, 'centerY')] = RegionMatrix[rp(r, 'centerY')] + w;
                RegionMatrix[rp(g, 'size')] = w;
                RegionMatrix[rp(g, 'nextSibling')] = RegionMatrix[rp(r, 'nextSibling')];
                RegionMatrix[rp(g, 'firstChild')] = -1;
                RegionMatrix[rp(g, 'mass')] = 0;
                RegionMatrix[rp(g, 'massCenterX')] = 0;
                RegionMatrix[rp(g, 'massCenterY')] = 0;

                l += 4;

                // Now the goal is to find two different sub-regions
                // for the two nodes: the one previously recorded (r[0])
                // and the one we want to add (n)

                // Find the quadrant of the old node
                if (NodeMatrix[np(RegionMatrix[rp(r, 'node')], 'x')] < RegionMatrix[rp(r, 'centerX')]) {
                  if (NodeMatrix[np(RegionMatrix[rp(r, 'node')], 'y')] < RegionMatrix[rp(r, 'centerY')]) {

                    // Top Left quarter
                    q = RegionMatrix[rp(r, 'firstChild')];
                  }
                  else {

                    // Bottom Left quarter
                    q = RegionMatrix[rp(r, 'firstChild')] + W.ppr;
                  }
                }
                else {
                  if (NodeMatrix[np(RegionMatrix[rp(r, 'node')], 'y')] < RegionMatrix[rp(r, 'centerY')]) {

                    // Top Right quarter
                    q = RegionMatrix[rp(r, 'firstChild')] + W.ppr * 2;
                  }
                  else {

                    // Bottom Right quarter
                    q = RegionMatrix[rp(r, 'firstChild')] + W.ppr * 3;
                  }
                }

                // We remove r[0] from the region r, add its mass to r and record it in q
                RegionMatrix[rp(r, 'mass')] = NodeMatrix[np(RegionMatrix[rp(r, 'node')], 'mass')];
                RegionMatrix[rp(r, 'massCenterX')] = NodeMatrix[np(RegionMatrix[rp(r, 'node')], 'x')];
                RegionMatrix[rp(r, 'massCenterY')] = NodeMatrix[np(RegionMatrix[rp(r, 'node')], 'y')];

                RegionMatrix[rp(q, 'node')] = RegionMatrix[rp(r, 'node')];
                RegionMatrix[rp(r, 'node')] = -1;

                // Find the quadrant of n
                if (NodeMatrix[np(n, 'x')] < RegionMatrix[rp(r, 'centerX')]) {
                  if (NodeMatrix[np(n, 'y')] < RegionMatrix[rp(r, 'centerY')]) {

                    // Top Left quarter
                    q2 = RegionMatrix[rp(r, 'firstChild')];
                  }
                  else {
                    // Bottom Left quarter
                    q2 = RegionMatrix[rp(r, 'firstChild')] + W.ppr;
                  }
                }
                else {
                  if(NodeMatrix[np(n, 'y')] < RegionMatrix[rp(r, 'centerY')]) {

                    // Top Right quarter
                    q2 = RegionMatrix[rp(r, 'firstChild')] + W.ppr * 2;
                  }
                  else {

                    // Bottom Right quarter
                    q2 = RegionMatrix[rp(r, 'firstChild')] + W.ppr * 3;
                  }
                }

                if (q === q2) {

                  // If both nodes are in the same quadrant,
                  // we have to try it again on this quadrant
                  r = q;
                  continue;
                }

                // If both quadrants are different, we record n
                // in its quadrant
                RegionMatrix[rp(q2, 'node')] = n;
                break;
              }
            }
          }
        }
      }


      // 2) Repulsion
      //--------------
      // NOTES: adjustSize = antiCollision & scalingRatio = coefficient

      if (W.settings.barnesHutOptimize) {
        coefficient = W.settings.scalingRatio;

        // Applying repulsion through regions
        for (n = 0; n < W.nodesLength; n += W.ppn) {

          // Computing leaf quad nodes iteration

          r = 0; // Starting with root region
          while (true) {

            if (RegionMatrix[rp(r, 'firstChild')] >= 0) {

              // The region has sub-regions

              // We run the Barnes Hut test to see if we are at the right distance
              distance = Math.sqrt(
                (Math.pow(NodeMatrix[np(n, 'x')] - RegionMatrix[rp(r, 'massCenterX')], 2)) +
                (Math.pow(NodeMatrix[np(n, 'y')] - RegionMatrix[rp(r, 'massCenterY')], 2))
              );

              if (2 * RegionMatrix[rp(r, 'size')] / distance < W.settings.barnesHutTheta) {

                // We treat the region as a single body, and we repulse

                xDist = NodeMatrix[np(n, 'x')] - RegionMatrix[rp(r, 'massCenterX')];
                yDist = NodeMatrix[np(n, 'y')] - RegionMatrix[rp(r, 'massCenterY')];

                if (W.settings.adjustSize) {

                  //-- Linear Anti-collision Repulsion
                  if (distance > 0) {
                    factor = coefficient * NodeMatrix[np(n, 'mass')] *
                      RegionMatrix[rp(r, 'mass')] / distance / distance;

                    NodeMatrix[np(n, 'dx')] += xDist * factor;
                    NodeMatrix[np(n, 'dy')] += yDist * factor;
                  }
                  else if (distance < 0) {
                    factor = -coefficient * NodeMatrix[np(n, 'mass')] *
                      RegionMatrix[rp(r, 'mass')] / distance;

                    NodeMatrix[np(n, 'dx')] += xDist * factor;
                    NodeMatrix[np(n, 'dy')] += yDist * factor;
                  }
                }
                else {

                  //-- Linear Repulsion
                  if (distance > 0) {
                    factor = coefficient * NodeMatrix[np(n, 'mass')] *
                      RegionMatrix[rp(r, 'mass')] / distance / distance;

                    NodeMatrix[np(n, 'dx')] += xDist * factor;
                    NodeMatrix[np(n, 'dy')] += yDist * factor;
                  }
                }

                // When this is done, we iterate. We have to look at the next sibling.
                if (RegionMatrix[rp(r, 'nextSibling')] < 0)
                  break;  // No next sibling: we have finished the tree
                r = RegionMatrix[rp(r, 'nextSibling')];
                continue;

              }
              else {

                // The region is too close and we have to look at sub-regions
                r = RegionMatrix[rp(r, 'firstChild')];
                continue;
              }

            }
            else {

              // The region has no sub-region
              // If there is a node r[0] and it is not n, then repulse

              if (RegionMatrix[rp(r, 'node')] >= 0 && RegionMatrix[rp(r, 'node')] !== n) {
                xDist = NodeMatrix[np(n, 'x')] - NodeMatrix[np(RegionMatrix[rp(r, 'node')], 'x')];
                yDist = NodeMatrix[np(n, 'y')] - NodeMatrix[np(RegionMatrix[rp(r, 'node')], 'y')];

                distance = Math.sqrt(xDist * xDist + yDist * yDist);

                if (W.settings.adjustSize) {

                  //-- Linear Anti-collision Repulsion
                  if (distance > 0) {
                    factor = coefficient * NodeMatrix[np(n, 'mass')] *
                      NodeMatrix[np(RegionMatrix[rp(r, 'node')], 'mass')] / distance / distance;

                    NodeMatrix[np(n, 'dx')] += xDist * factor;
                    NodeMatrix[np(n, 'dy')] += yDist * factor;
                  }
                  else if (distance < 0) {
                    factor = -coefficient * NodeMatrix[np(n, 'mass')] *
                      NodeMatrix[np(RegionMatrix[rp(r, 'node')], 'mass')] / distance;

                    NodeMatrix[np(n, 'dx')] += xDist * factor;
                    NodeMatrix[np(n, 'dy')] += yDist * factor;
                  }
                }
                else {

                  //-- Linear Repulsion
                  if (distance > 0) {
                    factor = coefficient * NodeMatrix[np(n, 'mass')] *
                      NodeMatrix[np(RegionMatrix[rp(r, 'node')], 'mass')] / distance / distance;

                    NodeMatrix[np(n, 'dx')] += xDist * factor;
                    NodeMatrix[np(n, 'dy')] += yDist * factor;
                  }
                }

              }

              // When this is done, we iterate. We have to look at the next sibling.
              if (RegionMatrix[rp(r, 'nextSibling')] < 0)
                break;  // No next sibling: we have finished the tree
              r = RegionMatrix[rp(r, 'nextSibling')];
              continue;
            }
          }
        }
      }
      else {
        coefficient = W.settings.scalingRatio;

        // Square iteration
        for (n1 = 0; n1 < W.nodesLength; n1 += W.ppn) {
          for (n2 = 0; n2 < n1; n2 += W.ppn) {

            // Common to both methods
            xDist = NodeMatrix[np(n1, 'x')] - NodeMatrix[np(n2, 'x')];
            yDist = NodeMatrix[np(n1, 'y')] - NodeMatrix[np(n2, 'y')];

            if (W.settings.adjustSize) {

              //-- Anticollision Linear Repulsion
              distance = Math.sqrt(xDist * xDist + yDist * yDist) -
                NodeMatrix[np(n1, 'size')] -
                NodeMatrix[np(n2, 'size')];

              if (distance > 0) {
                factor = coefficient *
                  NodeMatrix[np(n1, 'mass')] *
                  NodeMatrix[np(n2, 'mass')] /
                  distance / distance;

                // Updating nodes' dx and dy
                NodeMatrix[np(n1, 'dx')] += xDist * factor;
                NodeMatrix[np(n1, 'dy')] += yDist * factor;

                NodeMatrix[np(n2, 'dx')] += xDist * factor;
                NodeMatrix[np(n2, 'dy')] += yDist * factor;
              }
              else if (distance < 0) {
                factor = 100 * coefficient *
                  NodeMatrix[np(n1, 'mass')] *
                  NodeMatrix[np(n2, 'mass')];

                // Updating nodes' dx and dy
                NodeMatrix[np(n1, 'dx')] += xDist * factor;
                NodeMatrix[np(n1, 'dy')] += yDist * factor;

                NodeMatrix[np(n2, 'dx')] -= xDist * factor;
                NodeMatrix[np(n2, 'dy')] -= yDist * factor;
              }
            }
            else {

              //-- Linear Repulsion
              distance = Math.sqrt(xDist * xDist + yDist * yDist);

              if (distance > 0) {
                factor = coefficient *
                  NodeMatrix[np(n1, 'mass')] *
                  NodeMatrix[np(n2, 'mass')] /
                  distance / distance;

                // Updating nodes' dx and dy
                NodeMatrix[np(n1, 'dx')] += xDist * factor;
                NodeMatrix[np(n1, 'dy')] += yDist * factor;

                NodeMatrix[np(n2, 'dx')] -= xDist * factor;
                NodeMatrix[np(n2, 'dy')] -= yDist * factor;
              }
            }
          }
        }
      }


      // 3) Gravity
      //------------
      g = W.settings.gravity / W.settings.scalingRatio;
      coefficient = W.settings.scalingRatio;
      for (n = 0; n < W.nodesLength; n += W.ppn) {
        factor = 0;

        // Common to both methods
        xDist = NodeMatrix[np(n, 'x')];
        yDist = NodeMatrix[np(n, 'y')];
        distance = Math.sqrt(
          Math.pow(xDist, 2) + Math.pow(yDist, 2)
        );

        if (W.settings.strongGravityMode) {

          //-- Strong gravity
          if (distance > 0)
            factor = coefficient * NodeMatrix[np(n, 'mass')] * g;
        }
        else {

          //-- Linear Anti-collision Repulsion n
          if (distance > 0)
            factor = coefficient * NodeMatrix[np(n, 'mass')] * g / distance;
        }

        // Updating node's dx and dy
        NodeMatrix[np(n, 'dx')] -= xDist * factor;
        NodeMatrix[np(n, 'dy')] -= yDist * factor;
      }



      // 4) Attraction
      //---------------
      coefficient = 1 *
        (W.settings.outboundAttractionDistribution ?
          outboundAttCompensation :
          1);

      // TODO: simplify distance
      // TODO: coefficient is always used as -c --> optimize?
      for (e = 0; e < W.edgesLength; e += W.ppe) {
        n1 = EdgeMatrix[ep(e, 'source')];
        n2 = EdgeMatrix[ep(e, 'target')];
        w = EdgeMatrix[ep(e, 'weight')];

        // Edge weight influence
        ewc = Math.pow(w, W.settings.edgeWeightInfluence);

        // Common measures
        xDist = NodeMatrix[np(n1, 'x')] - NodeMatrix[np(n2, 'x')];
        yDist = NodeMatrix[np(n1, 'y')] - NodeMatrix[np(n2, 'y')];

        // Applying attraction to nodes
        if (W.settings.adjustSizes) {

          distance = Math.sqrt(
            (Math.pow(xDist, 2) + Math.pow(yDist, 2)) -
            NodeMatrix[np(n1, 'size')] -
            NodeMatrix[np(n2, 'size')]
          );

          if (W.settings.linLogMode) {
            if (W.settings.outboundAttractionDistribution) {

              //-- LinLog Degree Distributed Anti-collision Attraction
              if (distance > 0) {
                factor = -coefficient * ewc * Math.log(1 + distance) /
                distance /
                NodeMatrix[np(n1, 'mass')];
              }
            }
            else {

              //-- LinLog Anti-collision Attraction
              if (distance > 0) {
                factor = -coefficient * ewc * Math.log(1 + distance) / distance;
              }
            }
          }
          else {
            if (W.settings.outboundAttractionDistribution) {

              //-- Linear Degree Distributed Anti-collision Attraction
              if (distance > 0) {
                factor = -coefficient * ewc / NodeMatrix[np(n1, 'mass')];
              }
            }
            else {

              //-- Linear Anti-collision Attraction
              if (distance > 0) {
                factor = -coefficient * ewc;
              }
            }
          }
        }
        else {

          distance = Math.sqrt(
            Math.pow(xDist, 2) + Math.pow(yDist, 2)
          );

          if (W.settings.linLogMode) {
            if (W.settings.outboundAttractionDistribution) {

              //-- LinLog Degree Distributed Attraction
              if (distance > 0) {
                factor = -coefficient * ewc * Math.log(1 + distance) /
                  distance /
                  NodeMatrix[np(n1, 'mass')];
              }
            }
            else {

              //-- LinLog Attraction
              if (distance > 0)
                factor = -coefficient * ewc * Math.log(1 + distance) / distance;
            }
          }
          else {
            if (W.settings.outboundAttractionDistribution) {

              //-- Linear Attraction Mass Distributed
              // NOTE: Distance is set to 1 to override next condition
              distance = 1;
              factor = -coefficient * ewc / NodeMatrix[np(n1, 'mass')];
            }
            else {

              //-- Linear Attraction
              // NOTE: Distance is set to 1 to override next condition
              distance = 1;
              factor = -coefficient * ewc;
            }
          }
        }

        // Updating nodes' dx and dy
        // TODO: if condition or factor = 1?
        if (distance > 0) {

          // Updating nodes' dx and dy
          NodeMatrix[np(n1, 'dx')] += xDist * factor;
          NodeMatrix[np(n1, 'dy')] += yDist * factor;

          NodeMatrix[np(n2, 'dx')] -= xDist * factor;
          NodeMatrix[np(n2, 'dy')] -= yDist * factor;
        }
      }


      // 5) Apply Forces
      //-----------------
      var force,
          swinging,
          traction,
          nodespeed;

      // MATH: sqrt and square distances
      if (W.settings.adjustSizes) {

        for (n = 0; n < W.nodesLength; n += W.ppn) {
          if (!NodeMatrix[np(n, 'fixed')]) {
            force = Math.sqrt(
              Math.pow(NodeMatrix[np(n, 'dx')], 2) +
              Math.pow(NodeMatrix[np(n, 'dy')], 2)
            );

            if (force > W.maxForce) {
              NodeMatrix[np(n, 'dx')] =
                NodeMatrix[np(n, 'dx')] * W.maxForce / force;
              NodeMatrix[np(n, 'dy')] =
                NodeMatrix[np(n, 'dy')] * W.maxForce / force;
            }

            swinging = NodeMatrix[np(n, 'mass')] *
              Math.sqrt(
                (NodeMatrix[np(n, 'old_dx')] - NodeMatrix[np(n, 'dx')]) *
                (NodeMatrix[np(n, 'old_dx')] - NodeMatrix[np(n, 'dx')]) +
                (NodeMatrix[np(n, 'old_dy')] - NodeMatrix[np(n, 'dy')]) *
                (NodeMatrix[np(n, 'old_dy')] - NodeMatrix[np(n, 'dy')])
              );

            traction = Math.sqrt(
              (NodeMatrix[np(n, 'old_dx')] + NodeMatrix[np(n, 'dx')]) *
              (NodeMatrix[np(n, 'old_dx')] + NodeMatrix[np(n, 'dx')]) +
              (NodeMatrix[np(n, 'old_dy')] + NodeMatrix[np(n, 'dy')]) *
              (NodeMatrix[np(n, 'old_dy')] + NodeMatrix[np(n, 'dy')])
            ) / 2;

            nodespeed =
              0.1 * Math.log(1 + traction) / (1 + Math.sqrt(swinging));

            // Updating node's positon
            NodeMatrix[np(n, 'x')] =
              NodeMatrix[np(n, 'x')] + NodeMatrix[np(n, 'dx')] *
              (nodespeed / W.settings.slowDown);
            NodeMatrix[np(n, 'y')] =
              NodeMatrix[np(n, 'y')] + NodeMatrix[np(n, 'dy')] *
              (nodespeed / W.settings.slowDown);
          }
        }
      }
      else {

        for (n = 0; n < W.nodesLength; n += W.ppn) {
          if (!NodeMatrix[np(n, 'fixed')]) {

            swinging = NodeMatrix[np(n, 'mass')] *
              Math.sqrt(
                (NodeMatrix[np(n, 'old_dx')] - NodeMatrix[np(n, 'dx')]) *
                (NodeMatrix[np(n, 'old_dx')] - NodeMatrix[np(n, 'dx')]) +
                (NodeMatrix[np(n, 'old_dy')] - NodeMatrix[np(n, 'dy')]) *
                (NodeMatrix[np(n, 'old_dy')] - NodeMatrix[np(n, 'dy')])
              );

            traction = Math.sqrt(
              (NodeMatrix[np(n, 'old_dx')] + NodeMatrix[np(n, 'dx')]) *
              (NodeMatrix[np(n, 'old_dx')] + NodeMatrix[np(n, 'dx')]) +
              (NodeMatrix[np(n, 'old_dy')] + NodeMatrix[np(n, 'dy')]) *
              (NodeMatrix[np(n, 'old_dy')] + NodeMatrix[np(n, 'dy')])
            ) / 2;

            nodespeed = NodeMatrix[np(n, 'convergence')] *
              Math.log(1 + traction) / (1 + Math.sqrt(swinging));

            // Updating node convergence
            NodeMatrix[np(n, 'convergence')] =
              Math.min(1, Math.sqrt(
                nodespeed *
                (Math.pow(NodeMatrix[np(n, 'dx')], 2) +
                 Math.pow(NodeMatrix[np(n, 'dy')], 2)) /
                (1 + Math.sqrt(swinging))
              ));

            // Updating node's positon
            NodeMatrix[np(n, 'x')] =
              NodeMatrix[np(n, 'x')] + NodeMatrix[np(n, 'dx')] *
              (nodespeed / W.settings.slowDown);
            NodeMatrix[np(n, 'y')] =
              NodeMatrix[np(n, 'y')] + NodeMatrix[np(n, 'dy')] *
              (nodespeed / W.settings.slowDown);
          }
        }
      }

      // Counting one more iteration
      W.iterations++;
    }

    /**
     * Message reception & sending
     */

    // Sending data back to the supervisor
    var sendNewCoords;

    if (typeof window !== 'undefined' && window.document) {

      // From same document as sigma
      sendNewCoords = function() {
        var e;

        if (document.createEvent) {
          e = document.createEvent('Event');
          e.initEvent('newCoords', true, false);
        }
        else {
          e = document.createEventObject();
          e.eventType = 'newCoords';
        }

        e.eventName = 'newCoords';
        e.data = {
          nodes: NodeMatrix.buffer
        };
        requestAnimationFrame(function() {
          document.dispatchEvent(e);
        });
      };
    }
    else {

      // From a WebWorker
      sendNewCoords = function() {
        self.postMessage(
          {nodes: NodeMatrix.buffer},
          [NodeMatrix.buffer]
        );
      };
    }

    // Algorithm run
    function run(n) {
      for (var i = 0; i < n; i++)
        pass();
      sendNewCoords();
    }

    // On supervisor message
    var listener = function(e) {
      switch (e.data.action) {
        case 'start':
          init(
            new Float32Array(e.data.nodes),
            new Float32Array(e.data.edges),
            e.data.config
          );

          // First iteration(s)
          run(W.settings.startingIterations);
          break;

        case 'loop':
          NodeMatrix = new Float32Array(e.data.nodes);
          run(W.settings.iterationsPerRender);
          break;

        case 'config':

          // Merging new settings
          configure(e.data.config);
          break;

        case 'kill':

          // Deleting context for garbage collection
          __emptyObject(W);
          NodeMatrix = null;
          EdgeMatrix = null;
          RegionMatrix = null;
          self.removeEventListener('message', listener);
          break;

        default:
      }
    };

    // Adding event listener
    self.addEventListener('message', listener);
  };


  /**
   * Exporting
   * ----------
   *
   * Crush the worker function and make it accessible by sigma's instances so
   * the supervisor can call it.
   */
  function crush(fnString) {
    var pattern,
        i,
        l;

    var np = [
      'x',
      'y',
      'dx',
      'dy',
      'old_dx',
      'old_dy',
      'mass',
      'convergence',
      'size',
      'fixed'
    ];

    var ep = [
      'source',
      'target',
      'weight'
    ];

    var rp = [
      'node',
      'centerX',
      'centerY',
      'size',
      'nextSibling',
      'firstChild',
      'mass',
      'massCenterX',
      'massCenterY'
    ];

    // rp
    // NOTE: Must go first
    for (i = 0, l = rp.length; i < l; i++) {
      pattern = new RegExp('rp\\(([^,]*), \'' + rp[i] + '\'\\)', 'g');
      fnString = fnString.replace(
        pattern,
        (i === 0) ? '$1' : '$1 + ' + i
      );
    }

    // np
    for (i = 0, l = np.length; i < l; i++) {
      pattern = new RegExp('np\\(([^,]*), \'' + np[i] + '\'\\)', 'g');
      fnString = fnString.replace(
        pattern,
        (i === 0) ? '$1' : '$1 + ' + i
      );
    }

    // ep
    for (i = 0, l = ep.length; i < l; i++) {
      pattern = new RegExp('ep\\(([^,]*), \'' + ep[i] + '\'\\)', 'g');
      fnString = fnString.replace(
        pattern,
        (i === 0) ? '$1' : '$1 + ' + i
      );
    }

    return fnString;
  }

  // Exporting
  function getWorkerFn() {
    var fnString = crush ? crush(Worker.toString()) : Worker.toString();
    return ';(' + fnString + ').call(this);';
  }

  if (inWebWorker) {

    // We are in a webworker, so we launch the Worker function
    eval(getWorkerFn());
  }
  else {

    // We are requesting the worker from sigma, we retrieve it therefore
    if (typeof sigma === 'undefined')
      throw 'sigma is not declared';

    sigma.prototype.getForceAtlas2Worker = getWorkerFn;
  }
}).call(this);
