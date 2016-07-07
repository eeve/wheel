/*! a collection of utils for web development */
!function(r,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("$w",[],t):"object"==typeof exports?exports.$w=t():r.$w=t()}(this,function(){return function(r){function t(e){if(n[e])return n[e].exports;var o=n[e]={exports:{},id:e,loaded:!1};return r[e].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=r,t.c=n,t.p="",t(0)}([function(r,t,n){var e=n(2);r.exports=new e},function(r,t){var n=function(){};n.fn=n.prototype,n.fn.mixin=n.mixin=function(r,t){for(var n in t)r[n]=t[n];return r},r.exports=n},function(r,t,n){for(var e=n(1),o=["./utils/object","./utils/string","./utils/array","./utils/format","./utils/storage"],i=o.length-1;i>=0;i--){var u=o[i],a=n(8)(u);e.mixin(e.fn,a)}r.exports=e},function(r,t){var n={};n.isEmpty=function(r){return!Boolean($.trim(r)||0===r)||"null"==r||"undefined"==r},n.isUndefined=function(r){return"undefined"==typeof r},n.isNull=function(r){return null===r},n.isNumber=function(r){return(0===r||r)&&r.constructor===Number},n.isBoolean=function(r){return(r===!1||r)&&r.constructor===Boolean},n.isString=function(r){return(""===r||r)&&r.constructor===String},n.isObject=function(r){return r&&(r.constructor===Object||"[object Object]"===Object.prototype.toString.call(r))},n.isArray=function(r){return r&&(r.constructor===Array||"[object Array]"===Object.prototype.toString.call(r))},n.isArguments=function(r){return!!(r&&r.callee&&isNumber(r.length))},n.isFunction=function(r){return r&&r.constructor===Function},n.$typeof=function(r){return n.isUndefined(r)?"undefined":n.isNull(r)?"null":n.isNumber(r)?"number":n.isBoolean(r)?"boolean":n.isString(r)?"string":n.isObject(r)?"object":n.isArray(r)?"array":n.isArguments(r)?"arguments":n.isFunction(r)?"function":"other"},n.getUrlParam=function(r){var t=new RegExp("(^|&)"+r+"=([^&]*)(&|$)"),e=n.decodingURI(window.location.search).substr(1).match(t);return null!=e?e[2]:null},n.random=function(r,t){return Math.floor(Math.random()*(t-r+1)+r)},n.clone=function(r){var t=function(){};return tempClass.prototype=r,new t},n.now=function(){return+new Date},r.exports=n},function(r,t,n){var e=n(3),o={};o.indexOf=Array.prototype.indexOf?function(){var r=Array.prototype.slice.call(arguments,1);return Array.prototype.indexOf.apply(arguments[0],r)}:function(r,t,n){null==n?n=0:n<0&&(n=Math.max(0,r.length+n));for(var e=n;e<r.length;e++)if(r[e]===t)return e;return-1},o.lastIndexOf=Array.prototype.lastIndexOf?function(){var r=Array.prototype.slice.call(arguments,1);return Array.prototype.lastIndexOf.apply(arguments[0],r)}:function(r,t,n){null==n?n=r.length-1:n<0&&(n=Math.max(0,r.length+n));for(var e=n;e>=0;e--)if(r[e]===t)return e;return-1},o.forEach=Array.prototype.forEach?function(){var r=Array.prototype.slice.call(arguments,1);return Array.prototype.forEach.apply(arguments[0],r)}:function(r,t){var n=r.length;if("function"!=typeof t)throw new TypeError;for(var e=arguments[2],o=0;o<n;o++)o in r&&t.call(e,r[o],o,r)},o.filter=Array.prototype.filter?function(){var r=Array.prototype.slice.call(arguments,1);return Array.prototype.filter.apply(arguments[0],r)}:function(r,t){var n=r.length;if("function"!=typeof t)throw new TypeError;for(var e=[],o=arguments[2],i=0;i<n;i++)if(i in r){var u=r[i];t.call(o,u,i,r)&&e.push(u)}return e},o.some=Array.prototype.some?function(){var r=Array.prototype.slice.call(arguments,1);return Array.prototype.some.apply(arguments[0],r)}:function(r,t){var n=r.length;if("function"!=typeof t)throw new TypeError;for(var e=arguments[2],o=0;o<n;o++)if(o in r&&t.call(e,r[o],o,r))return!0;return!1},o.map=Array.prototype.map?function(){var r=Array.prototype.slice.call(arguments,1);return Array.prototype.map.apply(arguments[0],r)}:function(r,t){var n=r.length;if("function"!=typeof t)throw new TypeError;for(var e=new Array(n),o=arguments[2],i=0;i<n;i++)i in r&&(e[i]=t.call(o,r[i],i,r));return e},o.every=Array.prototype.every?function(){var r=Array.prototype.slice.call(arguments,1);return Array.prototype.every.apply(arguments[0],r)}:function(r,t){var n=r.length;if("function"!=typeof t)throw new TypeError;for(var e=arguments[2],o=0;o<n;o++)if(o in r&&!t.call(e,r[o],o,r))return!1;return!0},o.reduce=Array.prototype.reduce?function(){var r=Array.prototype.slice.call(arguments,1);return Array.prototype.reduce.apply(arguments[0],r)}:function(r,t){var n=r.length>>>0;if("function"!=typeof t)throw new TypeError;if(0==n&&2==arguments.length)throw new TypeError;var e=0;if(arguments.length>=3)var o=arguments[2];else for(;;){if(e in r){o=r[e++];break}if(++e>=n)throw new TypeError}for(;e<n;e++)e in r&&(o=t.call(null,o,r[e],e,r));return o},o.reduceRight=Array.prototype.reduceRight?function(){var r=Array.prototype.slice.call(arguments,1);return Array.prototype.reduceRight.apply(arguments[0],r)}:function(r,t){var n=r.length>>>0;if("function"!=typeof t)throw new TypeError;if(0==n&&2==arguments.length)throw new TypeError;var e=n-1;if(arguments.length>=3)var o=arguments[2];else for(;;){if(e in r){o=r[e--];break}if(--e<0)throw new TypeError}for(;e>=0;e--)e in r&&(o=t.call(null,o,r[e],e,r));return o},o.toArray=function(r){var t=e.$typeof(r);return t?"array"!=t&&"arguments"!=t?[r]:r:[]},o.remove=function(r,t){var n,e,t=o.toArray(t),i=!1;for(n=0;n<t.length;n++)for(e=0;e<r.length;e++)r[e]===t[n]&&(r.splice(e,1),i=!0);return i},o.replace=function(r,t,n){var e;for(e=0;e<r.length;e++)if(r[e]===t)return r[e]=n,!0;return!1},o.bubbleSort=function(r,t){t=t||function(r,t){return r-t};for(var n,e,o=r.length,i=0;i<o-1;i++){e=!1;for(var u=o-1;u>i;u--)t(r[u],r[u-1])<0&&(e=!0,n=r[u-1],r[u-1]=r[u],r[u]=n);if(!e)break}return r},o.binarySearch=function(r,t,n){for(var e=0,o=r.length,i=Math.floor(r.length/2);o!=i;)n(t,r[i])>0?e=i+1:o=i,i=Math.floor((e+o)/2);return i},o.contains=function(r,t){return o.indexOf(r,t)>-1},o.uniquelize=function(r){for(var t=[],n=0,e=r.length;n<e;n++)o.contains(t,r[n])||t.push(r[n]);return t},o.intersect=function(r,t){for(var n=[],e=0,i=r.length;e<i;e++)o.contains(t,r[e])&&n.push(r[e]);return n},o.minus=function(r,t){for(var n=[],e=0,i=r.length;e<i;e++)o.contains(t,r[e])||n.push(r[e]);return n},o.union=function(r,t){return o.uniquelize(r.concat(t))},r.exports={array:o}},function(r,t){var n={};n.date=function(r,t){var n={"M+":r.getMonth()+1,"D+":r.getDate(),"h+":r.getHours(),"m+":r.getMinutes(),"s+":r.getSeconds(),"q+":Math.floor((r.getMonth()+3)/3),S:r.getMilliseconds()};/(Y+)/.test(t)&&(t=t.replace(RegExp.$1,(r.getFullYear()+"").substr(4-RegExp.$1.length)));for(var e in n)new RegExp("("+e+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?n[e]:("00"+n[e]).substr((""+n[e]).length)));return t},n.number=function(r,t){for(var n=r?r.toString().split("."):["0"],e=t?t.split("."):[""],o="",i=n[0],u=e[0],a=i.length-1,c=!1,l=u.length-1;l>=0;l--)switch(u.substr(l,1)){case"":a>=0&&(o=i.substr(a--,1)+o);break;case"0":o=a>=0?i.substr(a--,1)+o:"0"+o;break;case",":c=!0,o=","+o}if(a>=0)if(c)for(var s=i.length;a>=0;a--)o=i.substr(a,1)+o,a>0&&(s-a)%3==0&&(o=","+o);else o=i.substr(0,a+1)+o;o+=".",i=n.length>1?n[1]:"",u=e.length>1?e[1]:"",a=0;for(var l=0;l<u.length;l++)switch(u.substr(l,1)){case"":a<i.length&&(o+=i.substr(a++,1));break;case"0":o+=a<i.length?i.substr(a++,1):"0"}return o.replace(/^,+/,"").replace(/\.$/,"")},r.exports={format:n}},function(r,t){var n=window.location.host,e={set:function(r,t,e,o,i){if(i){var u=new Date,a=new Date;a.setTime(u.getTime()+36e5*i)}return window.document.cookie=r+"="+t+"; "+(i?"expires="+a.toGMTString()+"; ":"")+(o?"path="+o+"; ":"path=/; ")+(e?"domain="+e+";":"domain="+n+";"),!0},get:function(r){var t=new RegExp("(?:^|;+|\\s+)"+r+"=([^;]*)"),n=window.document.cookie.match(t);return n?n[1]:""},remove:function(r,t,e){window.document.cookie=r+"=; expires=Mon, 26 Jul 1997 05:00:00 GMT; "+(e?"path="+e+"; ":"path=/; ")+(t?"domain="+t+";":"domain="+n+";")}},o={setItem:function(r,t){this.isSupports()&&window.localStorage.setItem(r,t)},getItem:function(r){return this.isSupports()?window.localStorage.getItem(r):null},removeItem:function(r){this.isSupports()&&window.localStorage.removeItem(r)},clear:function(){this.isSupports()&&window.localStorage.clear()},isSupports:function(){return"localStorage"in window&&null!==window.localStorage}};r.exports={cookie:e,localStorage:o}},function(r,t){var n={};n.toString=function(r){return r+""},n.isURL=function(r){return n.isURL.RE.test(r)},n.isURL.RE=/^(?:ht|f)tp(?:s)?\:\/\/(?:[\w\-\.]+)\.\w+/i,n.parseURL=function(r){var t=null;if(null!==(t=n.parseURL.RE.exec(r))){for(var e={},o=0,i=n.parseURL.SPEC.length;o<i;o++){var u=n.parseURL.SPEC[o];e[u]=t[o+1]}t=e,e=null}return t},n.parseURL.SPEC=["scheme","user","pass","host","port","path","query","fragment"],n.parseURL.RE=/^([^:]+):\/\/(?:([^:@]+):?([^@]*)@)?(?:([^\/?#:]+):?(\d*))([^?#]*)(?:\?([^#]+))?(?:#(.+))?$/,n.mapQuery=function(r){var t,n,e,r=r&&r.split("#")[0]||window.location.search,o=r.indexOf("?"),i=r.substring(o+1).split("&"),u={};if(o===-1)return u;for(t=0;t<i.length;t++)try{if(o=i[t].indexOf("="),n=i[t].substring(0,o),e=i[t].substring(o+1),!(u[n]=unescape(e)))throw new Error("uri has wrong query string when run mapQuery.")}catch(a){throw new Error("错误：has wrong when run mapQuery.")}return u},n.contains=function(r,t,n){return n?(n+r+n).indexOf(n+t+n)>-1:r.indexOf(t)>-1},n.trim=function(r){return String(r).replace(/^\s+|\s+$/g,"")},n.clean=function(r){return n.trim(r.replace(/\s+/g," "))},n.camelCase=function(r){return n.toString(r).replace(/-\D/g,function(r){return r.charAt(1).toUpperCase()})},n.hyphenate=function(r){return n.toString(r).replace(/[A-Z]/g,function(r){return"-"+r.charAt(0).toLowerCase()})},n.capitalize=function(r){return n.toString(r).replace(/\b[a-z]/g,function(r){return r.toUpperCase()})},n.toInt=function(r,t){return parseInt(r,t||10)},n.toFloat=function(r){return parseFloat(r)},n.hexToRgb=function(r){var t=r.match(/^#?(\w{1,2})(\w{1,2})(\w{1,2})$/),n=function(r){var t=r.length;if(3!==t)return null;for(var n,e=0;e<t;e++)n=r[e],1===n.length&&(n+=n),r[e]=parseInt(n,16);return"rgb("+r+")"};return t?n(t.slice(1)):null},n.rgbToHex=function(r){var t=r.match(/\d{1,3}/g);return t?"#"+((1<<24)+(t[0]<<0<<16)+(t[1]<<0<<8)+(t[2]<<0)).toString(16).slice(1):null},n.toQueryPair=function(r,t){return encodeURIComponent(String(r))+"="+encodeURIComponent(String(t))},n.toQueryString=function(r){var t=[];for(var e in r)t.push(n.toQueryPair(e,r[e]));return t.join("&")},n.replaceAll=function(r,t,n,e){return RegExp.prototype.isPrototypeOf(t)?r.replace(t,n):r.replace(new RegExp(t,e?"gi":"g"),n)},n.isNumber=function(r){return n.toString(r).search(/^\d+$/)!==-1},n.isEmail=function(r){return r.search(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/)!==-1},r.exports={string:n}},function(r,t,n){function e(r){return n(o(r))}function o(r){return i[r]||function(){throw new Error("Cannot find module '"+r+"'.")}()}var i={"./core":1,"./core.js":1,"./index":2,"./index.js":2,"./utils/array":4,"./utils/array.js":4,"./utils/format":5,"./utils/format.js":5,"./utils/object":3,"./utils/object.js":3,"./utils/storage":6,"./utils/storage.js":6,"./utils/string":7,"./utils/string.js":7};e.keys=function(){return Object.keys(i)},e.resolve=o,r.exports=e,e.id=8}])});
//# sourceMappingURL=index.js.map