webpackJsonp([45],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	/* 建议这里都引入 */
	__webpack_require__(16);
	__webpack_require__(421);
	var $ = window.$ || __webpack_require__(38);
	
	//工具类方法
	var util = __webpack_require__(39);
	
	//公共方法
	var common = __webpack_require__(40);
	
	
	var ZeroClipboard = __webpack_require__(423);
	
	
	ZeroClipboard.config({
	    swfPath: 'http://s1.wacdn.com/public/lib/ZeroClipboard.swf'
	});
	
	$('#copy').attr('data-clipboard-text', $('#inviteUrl').val());
	
	var client = new ZeroClipboard(document.getElementById("copy"));
	
	client.on( "ready", function( readyEvent ) {
	    client.on( "aftercopy", function( event ) {
	        // 复制成功后的回调
	        alert('链接复制成功，快分享给好友吧！');
	        // event.target.style.display = "none";
	        // console.log("Copied text to clipboard: " + event.data["text/plain"] );
	    });
	})
	


/***/ },

/***/ 421:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(422);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(35)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/autoprefixer-loader/index.js!./../../../node_modules/less-loader/index.js!./index.less", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/autoprefixer-loader/index.js!./../../../node_modules/less-loader/index.js!./index.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 422:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(18)();
	// imports
	
	
	// module
	exports.push([module.id, ".positive {\n  color: #fff21e;\n}\n.bookWrapper {\n  margin-top: 12px;\n}\n.bookWrapper .col1 {\n  width: 500px;\n  margin-left: 64px;\n}\n.bookWrapper .col2 {\n  width: 300px;\n}\n.formWrap {\n  background-color: #fff;\n  padding: 28px 24px 36px;\n  margin-bottom: 30px;\n}\n.formWrap .btnRow {\n  margin-top: 80px;\n}\n.bg {\n  text-align: center;\n  display: inline-block;\n  margin: 0 auto;\n}\n.coupon_texts {\n  position: absolute;\n  bottom: 80px;\n  left: 124px;\n  line-height: 1.6;\n  color: #fff;\n  font-size: 14px;\n}\n.coupon_texts p {\n  margin-bottom: 4px;\n}\n.recommend-texts {\n  width: 456px;\n  font-size: 18px;\n  line-height: 2.2;\n  color: #666;\n}\n.copy {\n  margin-top: 40px;\n  margin-bottom: 100px;\n  line-height: 34px;\n}\n.copy .inputWrap {\n  margin-left: 60px;\n  margin-right: 60px;\n}\n.copy .label {\n  color: #666;\n  float: left;\n  font-size: 20px;\n}\n.copy .link {\n  color: #5899e3;\n  float: right;\n  font-size: 20px;\n}\n", ""]);
	
	// exports


/***/ },

/***/ 423:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * ZeroClipboard
	 * The ZeroClipboard library provides an easy way to copy text to the clipboard using an invisible Adobe Flash movie and a JavaScript interface.
	 * Copyright (c) 2009-2015 Jon Rohan, James M. Greene
	 * Licensed MIT
	 * http://zeroclipboard.org/
	 * v2.3.0-beta.1
	 */
	!function(a,b){"use strict";var c,d,e,f=a,g=f.document,h=f.navigator,i=f.setTimeout,j=f.clearTimeout,k=f.setInterval,l=f.clearInterval,m=f.getComputedStyle,n=f.encodeURIComponent,o=f.ActiveXObject,p=f.Error,q=f.Number.parseInt||f.parseInt,r=f.Number.parseFloat||f.parseFloat,s=f.Number.isNaN||f.isNaN,t=f.Date.now,u=f.Object.keys,v=f.Object.defineProperty,w=f.Object.prototype.hasOwnProperty,x=f.Array.prototype.slice,y=function(){var a=function(a){return a};if("function"==typeof f.wrap&&"function"==typeof f.unwrap)try{var b=g.createElement("div"),c=f.unwrap(b);1===b.nodeType&&c&&1===c.nodeType&&(a=f.unwrap)}catch(d){}return a}(),z=function(a){return x.call(a,0)},A=function(){var a,c,d,e,f,g,h=z(arguments),i=h[0]||{};for(a=1,c=h.length;c>a;a++)if(null!=(d=h[a]))for(e in d)w.call(d,e)&&(f=i[e],g=d[e],i!==g&&g!==b&&(i[e]=g));return i},B=function(a){var b,c,d,e;if("object"!=typeof a||null==a||"number"==typeof a.nodeType)b=a;else if("number"==typeof a.length)for(b=[],c=0,d=a.length;d>c;c++)w.call(a,c)&&(b[c]=B(a[c]));else{b={};for(e in a)w.call(a,e)&&(b[e]=B(a[e]))}return b},C=function(a,b){for(var c={},d=0,e=b.length;e>d;d++)b[d]in a&&(c[b[d]]=a[b[d]]);return c},D=function(a,b){var c={};for(var d in a)-1===b.indexOf(d)&&(c[d]=a[d]);return c},E=function(a){if(a)for(var b in a)w.call(a,b)&&delete a[b];return a},F=function(a,b){if(a&&1===a.nodeType&&a.ownerDocument&&b&&(1===b.nodeType&&b.ownerDocument&&b.ownerDocument===a.ownerDocument||9===b.nodeType&&!b.ownerDocument&&b===a.ownerDocument))do{if(a===b)return!0;a=a.parentNode}while(a);return!1},G=function(a){var b;return"string"==typeof a&&a&&(b=a.split("#")[0].split("?")[0],b=a.slice(0,a.lastIndexOf("/")+1)),b},H=function(a){var b,c;return"string"==typeof a&&a&&(c=a.match(/^(?:|[^:@]*@|.+\)@(?=http[s]?|file)|.+?\s+(?: at |@)(?:[^:\(]+ )*[\(]?)((?:http[s]?|file):\/\/[\/]?.+?\/[^:\)]*?)(?::\d+)(?::\d+)?/),c&&c[1]?b=c[1]:(c=a.match(/\)@((?:http[s]?|file):\/\/[\/]?.+?\/[^:\)]*?)(?::\d+)(?::\d+)?/),c&&c[1]&&(b=c[1]))),b},I=function(){var a,b;try{throw new p}catch(c){b=c}return b&&(a=b.sourceURL||b.fileName||H(b.stack)),a},J=function(){var a,c,d;if(g.currentScript&&(a=g.currentScript.src))return a;if(c=g.getElementsByTagName("script"),1===c.length)return c[0].src||b;if("readyState"in c[0])for(d=c.length;d--;)if("interactive"===c[d].readyState&&(a=c[d].src))return a;return"loading"===g.readyState&&(a=c[c.length-1].src)?a:(a=I())?a:b},K=function(){var a,c,d,e=g.getElementsByTagName("script");for(a=e.length;a--;){if(!(d=e[a].src)){c=null;break}if(d=G(d),null==c)c=d;else if(c!==d){c=null;break}}return c||b},L=function(){var a=G(J())||K()||"";return a+"ZeroClipboard.swf"},M=function(){var a=/win(dows|[\s]?(nt|me|ce|xp|vista|[\d]+))/i;return!!h&&(a.test(h.appVersion||"")||a.test(h.platform||"")||-1!==(h.userAgent||"").indexOf("Windows"))},N=function(){return null==a.opener&&(!!a.top&&a!=a.top||!!a.parent&&a!=a.parent)}(),O={bridge:null,version:"0.0.0",pluginType:"unknown",disabled:null,outdated:null,sandboxed:null,unavailable:null,degraded:null,deactivated:null,overdue:null,ready:null},P="11.0.0",Q={},R={},S=null,T=0,U=0,V={ready:"Flash communication is established",error:{"flash-disabled":"Flash is disabled or not installed. May also be attempting to run Flash in a sandboxed iframe, which is impossible.","flash-outdated":"Flash is too outdated to support ZeroClipboard","flash-sandboxed":"Attempting to run Flash in a sandboxed iframe, which is impossible","flash-unavailable":"Flash is unable to communicate bidirectionally with JavaScript","flash-degraded":"Flash is unable to preserve data fidelity when communicating with JavaScript","flash-deactivated":"Flash is too outdated for your browser and/or is configured as click-to-activate.\nThis may also mean that the ZeroClipboard SWF object could not be loaded, so please check your `swfPath` configuration and/or network connectivity.\nMay also be attempting to run Flash in a sandboxed iframe, which is impossible.","flash-overdue":"Flash communication was established but NOT within the acceptable time limit","version-mismatch":"ZeroClipboard JS version number does not match ZeroClipboard SWF version number","clipboard-error":"At least one error was thrown while ZeroClipboard was attempting to inject your data into the clipboard","config-mismatch":"ZeroClipboard configuration does not match Flash's reality","swf-not-found":"The ZeroClipboard SWF object could not be loaded, so please check your `swfPath` configuration and/or network connectivity"}},W=["flash-unavailable","flash-degraded","flash-overdue","version-mismatch","config-mismatch","clipboard-error"],X=["flash-disabled","flash-outdated","flash-sandboxed","flash-unavailable","flash-degraded","flash-deactivated","flash-overdue"],Y=new RegExp("^flash-("+X.map(function(a){return a.replace(/^flash-/,"")}).join("|")+")$"),Z=new RegExp("^flash-("+X.slice(1).map(function(a){return a.replace(/^flash-/,"")}).join("|")+")$"),$={swfPath:L(),trustedDomains:a.location.host?[a.location.host]:[],cacheBust:!0,forceEnhancedClipboard:!1,flashLoadTimeout:3e4,autoActivate:!0,bubbleEvents:!0,fixLineEndings:!0,containerId:"global-zeroclipboard-html-bridge",containerClass:"global-zeroclipboard-container",swfObjectId:"global-zeroclipboard-flash-bridge",hoverClass:"zeroclipboard-is-hover",activeClass:"zeroclipboard-is-active",forceHandCursor:!1,title:null,zIndex:999999999},_=function(a){if("object"==typeof a&&null!==a)for(var b in a)if(w.call(a,b))if(/^(?:forceHandCursor|title|zIndex|bubbleEvents|fixLineEndings)$/.test(b))$[b]=a[b];else if(null==O.bridge)if("containerId"===b||"swfObjectId"===b){if(!oa(a[b]))throw new Error("The specified `"+b+"` value is not valid as an HTML4 Element ID");$[b]=a[b]}else $[b]=a[b];{if("string"!=typeof a||!a)return B($);if(w.call($,a))return $[a]}},aa=function(){return Va(),{browser:C(h,["userAgent","platform","appName","appVersion"]),flash:D(O,["bridge"]),zeroclipboard:{version:Xa.version,config:Xa.config()}}},ba=function(){return!!(O.disabled||O.outdated||O.sandboxed||O.unavailable||O.degraded||O.deactivated)},ca=function(a,d){var e,f,g,h={};if("string"==typeof a&&a)g=a.toLowerCase().split(/\s+/);else if("object"==typeof a&&a&&"undefined"==typeof d)for(e in a)w.call(a,e)&&"string"==typeof e&&e&&"function"==typeof a[e]&&Xa.on(e,a[e]);if(g&&g.length){for(e=0,f=g.length;f>e;e++)a=g[e].replace(/^on/,""),h[a]=!0,Q[a]||(Q[a]=[]),Q[a].push(d);if(h.ready&&O.ready&&Xa.emit({type:"ready"}),h.error){for(e=0,f=X.length;f>e;e++)if(O[X[e].replace(/^flash-/,"")]===!0){Xa.emit({type:"error",name:X[e]});break}c!==b&&Xa.version!==c&&Xa.emit({type:"error",name:"version-mismatch",jsVersion:Xa.version,swfVersion:c})}}return Xa},da=function(a,b){var c,d,e,f,g;if(0===arguments.length)f=u(Q);else if("string"==typeof a&&a)f=a.split(/\s+/);else if("object"==typeof a&&a&&"undefined"==typeof b)for(c in a)w.call(a,c)&&"string"==typeof c&&c&&"function"==typeof a[c]&&Xa.off(c,a[c]);if(f&&f.length)for(c=0,d=f.length;d>c;c++)if(a=f[c].toLowerCase().replace(/^on/,""),g=Q[a],g&&g.length)if(b)for(e=g.indexOf(b);-1!==e;)g.splice(e,1),e=g.indexOf(b,e);else g.length=0;return Xa},ea=function(a){var b;return b="string"==typeof a&&a?B(Q[a])||null:B(Q)},fa=function(a){var b,c,d;return a=pa(a),a&&!wa(a)?"ready"===a.type&&O.overdue===!0?Xa.emit({type:"error",name:"flash-overdue"}):(b=A({},a),ua.call(this,b),"copy"===a.type&&(d=Ea(R),c=d.data,S=d.formatMap),c):void 0},ga=function(){var a=O.sandboxed;if(Va(),"boolean"!=typeof O.ready&&(O.ready=!1),O.sandboxed!==a&&O.sandboxed===!0)O.ready=!1,Xa.emit({type:"error",name:"flash-sandboxed"});else if(!Xa.isFlashUnusable()&&null===O.bridge){var b=$.flashLoadTimeout;"number"==typeof b&&b>=0&&(T=i(function(){"boolean"!=typeof O.deactivated&&(O.deactivated=!0),O.deactivated===!0&&Xa.emit({type:"error",name:"flash-deactivated"})},b)),O.overdue=!1,Ca()}},ha=function(){Xa.clearData(),Xa.blur(),Xa.emit("destroy"),Da(),Xa.off()},ia=function(a,b){var c;if("object"==typeof a&&a&&"undefined"==typeof b)c=a,Xa.clearData();else{if("string"!=typeof a||!a)return;c={},c[a]=b}for(var d in c)"string"==typeof d&&d&&w.call(c,d)&&"string"==typeof c[d]&&c[d]&&(R[d]=Ua(c[d]))},ja=function(a){"undefined"==typeof a?(E(R),S=null):"string"==typeof a&&w.call(R,a)&&delete R[a]},ka=function(a){return"undefined"==typeof a?B(R):"string"==typeof a&&w.call(R,a)?R[a]:void 0},la=function(a){if(a&&1===a.nodeType){d&&(Ma(d,$.activeClass),d!==a&&Ma(d,$.hoverClass)),d=a,La(a,$.hoverClass);var b=a.getAttribute("title")||$.title;if("string"==typeof b&&b){var c=Ba(O.bridge);c&&c.setAttribute("title",b)}var e=$.forceHandCursor===!0||"pointer"===Na(a,"cursor");Sa(e),Ra()}},ma=function(){var a=Ba(O.bridge);a&&(a.removeAttribute("title"),a.style.left="0px",a.style.top="-9999px",a.style.width="1px",a.style.height="1px"),d&&(Ma(d,$.hoverClass),Ma(d,$.activeClass),d=null)},na=function(){return d||null},oa=function(a){return"string"==typeof a&&a&&/^[A-Za-z][A-Za-z0-9_:\-\.]*$/.test(a)},pa=function(a){var b;if("string"==typeof a&&a?(b=a,a={}):"object"==typeof a&&a&&"string"==typeof a.type&&a.type&&(b=a.type),b){b=b.toLowerCase(),!a.target&&(/^(copy|aftercopy|_click)$/.test(b)||"error"===b&&"clipboard-error"===a.name)&&(a.target=e),A(a,{type:b,target:a.target||d||null,relatedTarget:a.relatedTarget||null,currentTarget:O&&O.bridge||null,timeStamp:a.timeStamp||t()||null});var c=V[a.type];return"error"===a.type&&a.name&&c&&(c=c[a.name]),c&&(a.message=c),"ready"===a.type&&A(a,{target:null,version:O.version}),"error"===a.type&&(Y.test(a.name)&&A(a,{target:null,minimumVersion:P}),Z.test(a.name)&&A(a,{version:O.version})),"copy"===a.type&&(a.clipboardData={setData:Xa.setData,clearData:Xa.clearData}),"aftercopy"===a.type&&(a=Fa(a,S)),a.target&&!a.relatedTarget&&(a.relatedTarget=qa(a.target)),ra(a)}},qa=function(a){var b=a&&a.getAttribute&&a.getAttribute("data-clipboard-target");return b?g.getElementById(b):null},ra=function(a){if(a&&/^_(?:click|mouse(?:over|out|down|up|move))$/.test(a.type)){var c=a.target,d="_mouseover"===a.type&&a.relatedTarget?a.relatedTarget:b,e="_mouseout"===a.type&&a.relatedTarget?a.relatedTarget:b,h=Oa(c),i=f.screenLeft||f.screenX||0,j=f.screenTop||f.screenY||0,k=g.body.scrollLeft+g.documentElement.scrollLeft,l=g.body.scrollTop+g.documentElement.scrollTop,m=h.left+("number"==typeof a._stageX?a._stageX:0),n=h.top+("number"==typeof a._stageY?a._stageY:0),o=m-k,p=n-l,q=i+o,r=j+p,s="number"==typeof a.movementX?a.movementX:0,t="number"==typeof a.movementY?a.movementY:0;delete a._stageX,delete a._stageY,A(a,{srcElement:c,fromElement:d,toElement:e,screenX:q,screenY:r,pageX:m,pageY:n,clientX:o,clientY:p,x:o,y:p,movementX:s,movementY:t,offsetX:0,offsetY:0,layerX:0,layerY:0})}return a},sa=function(a){var b=a&&"string"==typeof a.type&&a.type||"";return!/^(?:(?:before)?copy|destroy)$/.test(b)},ta=function(a,b,c,d){d?i(function(){a.apply(b,c)},0):a.apply(b,c)},ua=function(a){if("object"==typeof a&&a&&a.type){var b=sa(a),c=Q["*"]||[],d=Q[a.type]||[],e=c.concat(d);if(e&&e.length){var g,h,i,j,k,l=this;for(g=0,h=e.length;h>g;g++)i=e[g],j=l,"string"==typeof i&&"function"==typeof f[i]&&(i=f[i]),"object"==typeof i&&i&&"function"==typeof i.handleEvent&&(j=i,i=i.handleEvent),"function"==typeof i&&(k=A({},a),ta(i,j,[k],b))}return this}},va=function(a){var b=null;return(N===!1||a&&"error"===a.type&&a.name&&-1!==W.indexOf(a.name))&&(b=!1),b},wa=function(a){var b=a.target||d||null,f="swf"===a._source;switch(delete a._source,a.type){case"error":var g="flash-sandboxed"===a.name||va(a);"boolean"==typeof g&&(O.sandboxed=g),-1!==X.indexOf(a.name)?A(O,{disabled:"flash-disabled"===a.name,outdated:"flash-outdated"===a.name,unavailable:"flash-unavailable"===a.name,degraded:"flash-degraded"===a.name,deactivated:"flash-deactivated"===a.name,overdue:"flash-overdue"===a.name,ready:!1}):"version-mismatch"===a.name&&(c=a.swfVersion,A(O,{disabled:!1,outdated:!1,unavailable:!1,degraded:!1,deactivated:!1,overdue:!1,ready:!1})),Qa();break;case"ready":c=a.swfVersion;var h=O.deactivated===!0;A(O,{disabled:!1,outdated:!1,sandboxed:!1,unavailable:!1,degraded:!1,deactivated:!1,overdue:h,ready:!h}),Qa();break;case"beforecopy":e=b;break;case"copy":var i,j,k=a.relatedTarget;!R["text/html"]&&!R["text/plain"]&&k&&(j=k.value||k.outerHTML||k.innerHTML)&&(i=k.value||k.textContent||k.innerText)?(a.clipboardData.clearData(),a.clipboardData.setData("text/plain",i),j!==i&&a.clipboardData.setData("text/html",j)):!R["text/plain"]&&a.target&&(i=a.target.getAttribute("data-clipboard-text"))&&(a.clipboardData.clearData(),a.clipboardData.setData("text/plain",i));break;case"aftercopy":xa(a),Xa.clearData(),b&&b!==Ka()&&b.focus&&b.focus();break;case"_mouseover":Xa.focus(b),$.bubbleEvents===!0&&f&&(b&&b!==a.relatedTarget&&!F(a.relatedTarget,b)&&ya(A({},a,{type:"mouseenter",bubbles:!1,cancelable:!1})),ya(A({},a,{type:"mouseover"})));break;case"_mouseout":Xa.blur(),$.bubbleEvents===!0&&f&&(b&&b!==a.relatedTarget&&!F(a.relatedTarget,b)&&ya(A({},a,{type:"mouseleave",bubbles:!1,cancelable:!1})),ya(A({},a,{type:"mouseout"})));break;case"_mousedown":La(b,$.activeClass),$.bubbleEvents===!0&&f&&ya(A({},a,{type:a.type.slice(1)}));break;case"_mouseup":Ma(b,$.activeClass),$.bubbleEvents===!0&&f&&ya(A({},a,{type:a.type.slice(1)}));break;case"_click":e=null,$.bubbleEvents===!0&&f&&ya(A({},a,{type:a.type.slice(1)}));break;case"_mousemove":$.bubbleEvents===!0&&f&&ya(A({},a,{type:a.type.slice(1)}))}return/^_(?:click|mouse(?:over|out|down|up|move))$/.test(a.type)?!0:void 0},xa=function(a){if(a.errors&&a.errors.length>0){var b=B(a);A(b,{type:"error",name:"clipboard-error"}),delete b.success,i(function(){Xa.emit(b)},0)}},ya=function(a){if(a&&"string"==typeof a.type&&a){var b,c=a.target||null,d=c&&c.ownerDocument||g,e={view:d.defaultView||f,canBubble:!0,cancelable:!0,detail:"click"===a.type?1:0,button:"number"==typeof a.which?a.which-1:"number"==typeof a.button?a.button:d.createEvent?0:1},h=A(e,a);c&&d.createEvent&&c.dispatchEvent&&(h=[h.type,h.canBubble,h.cancelable,h.view,h.detail,h.screenX,h.screenY,h.clientX,h.clientY,h.ctrlKey,h.altKey,h.shiftKey,h.metaKey,h.button,h.relatedTarget],b=d.createEvent("MouseEvents"),b.initMouseEvent&&(b.initMouseEvent.apply(b,h),b._source="js",c.dispatchEvent(b)))}},za=function(){var a=$.flashLoadTimeout;if("number"==typeof a&&a>=0){var b=Math.min(1e3,a/10),c=$.swfObjectId+"_fallbackContent";U=k(function(){var a=g.getElementById(c);Pa(a)&&(Qa(),O.deactivated=null,Xa.emit({type:"error",name:"swf-not-found"}))},b)}},Aa=function(){var a=g.createElement("div");return a.id=$.containerId,a.className=$.containerClass,a.style.position="absolute",a.style.left="0px",a.style.top="-9999px",a.style.width="1px",a.style.height="1px",a.style.zIndex=""+Ta($.zIndex),a},Ba=function(a){for(var b=a&&a.parentNode;b&&"OBJECT"===b.nodeName&&b.parentNode;)b=b.parentNode;return b||null},Ca=function(){var a,b=O.bridge,c=Ba(b);if(!b){var d=Ja(f.location.host,$),e="never"===d?"none":"all",h=Ha(A({jsVersion:Xa.version},$)),i=$.swfPath+Ga($.swfPath,$);c=Aa();var j=g.createElement("div");c.appendChild(j),g.body.appendChild(c);var k=g.createElement("div"),l="activex"===O.pluginType;k.innerHTML='<object id="'+$.swfObjectId+'" name="'+$.swfObjectId+'" width="100%" height="100%" '+(l?'classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"':'type="application/x-shockwave-flash" data="'+i+'"')+">"+(l?'<param name="movie" value="'+i+'"/>':"")+'<param name="allowScriptAccess" value="'+d+'"/><param name="allowNetworking" value="'+e+'"/><param name="menu" value="false"/><param name="wmode" value="transparent"/><param name="flashvars" value="'+h+'"/><div id="'+$.swfObjectId+'_fallbackContent">&nbsp;</div></object>',b=k.firstChild,k=null,y(b).ZeroClipboard=Xa,c.replaceChild(b,j),za()}return b||(b=g[$.swfObjectId],b&&(a=b.length)&&(b=b[a-1]),!b&&c&&(b=c.firstChild)),O.bridge=b||null,b},Da=function(){var a=O.bridge;if(a){var d=Ba(a);d&&("activex"===O.pluginType&&"readyState"in a?(a.style.display="none",function e(){if(4===a.readyState){for(var b in a)"function"==typeof a[b]&&(a[b]=null);a.parentNode&&a.parentNode.removeChild(a),d.parentNode&&d.parentNode.removeChild(d)}else i(e,10)}()):(a.parentNode&&a.parentNode.removeChild(a),d.parentNode&&d.parentNode.removeChild(d))),Qa(),O.ready=null,O.bridge=null,O.deactivated=null,c=b}},Ea=function(a){var b={},c={};if("object"==typeof a&&a){for(var d in a)if(d&&w.call(a,d)&&"string"==typeof a[d]&&a[d])switch(d.toLowerCase()){case"text/plain":case"text":case"air:text":case"flash:text":b.text=a[d],c.text=d;break;case"text/html":case"html":case"air:html":case"flash:html":b.html=a[d],c.html=d;break;case"application/rtf":case"text/rtf":case"rtf":case"richtext":case"air:rtf":case"flash:rtf":b.rtf=a[d],c.rtf=d}return{data:b,formatMap:c}}},Fa=function(a,b){if("object"!=typeof a||!a||"object"!=typeof b||!b)return a;var c={};for(var d in a)if(w.call(a,d))if("errors"===d){c[d]=a[d]?a[d].slice():[];for(var e=0,f=c[d].length;f>e;e++)c[d][e].format=b[c[d][e].format]}else if("success"!==d&&"data"!==d)c[d]=a[d];else{c[d]={};var g=a[d];for(var h in g)h&&w.call(g,h)&&w.call(b,h)&&(c[d][b[h]]=g[h])}return c},Ga=function(a,b){var c=null==b||b&&b.cacheBust===!0;return c?(-1===a.indexOf("?")?"?":"&")+"noCache="+t():""},Ha=function(a){var b,c,d,e,g="",h=[];if(a.trustedDomains&&("string"==typeof a.trustedDomains?e=[a.trustedDomains]:"object"==typeof a.trustedDomains&&"length"in a.trustedDomains&&(e=a.trustedDomains)),e&&e.length)for(b=0,c=e.length;c>b;b++)if(w.call(e,b)&&e[b]&&"string"==typeof e[b]){if(d=Ia(e[b]),!d)continue;if("*"===d){h.length=0,h.push(d);break}h.push.apply(h,[d,"//"+d,f.location.protocol+"//"+d])}return h.length&&(g+="trustedOrigins="+n(h.join(","))),a.forceEnhancedClipboard===!0&&(g+=(g?"&":"")+"forceEnhancedClipboard=true"),"string"==typeof a.swfObjectId&&a.swfObjectId&&(g+=(g?"&":"")+"swfObjectId="+n(a.swfObjectId)),"string"==typeof a.jsVersion&&a.jsVersion&&(g+=(g?"&":"")+"jsVersion="+n(a.jsVersion)),g},Ia=function(a){if(null==a||""===a)return null;if(a=a.replace(/^\s+|\s+$/g,""),""===a)return null;var b=a.indexOf("//");a=-1===b?a:a.slice(b+2);var c=a.indexOf("/");return a=-1===c?a:-1===b||0===c?null:a.slice(0,c),a&&".swf"===a.slice(-4).toLowerCase()?null:a||null},Ja=function(){var a=function(a){var b,c,d,e=[];if("string"==typeof a&&(a=[a]),"object"!=typeof a||!a||"number"!=typeof a.length)return e;for(b=0,c=a.length;c>b;b++)if(w.call(a,b)&&(d=Ia(a[b]))){if("*"===d){e.length=0,e.push("*");break}-1===e.indexOf(d)&&e.push(d)}return e};return function(b,c){var d=Ia(c.swfPath);null===d&&(d=b);var e=a(c.trustedDomains),f=e.length;if(f>0){if(1===f&&"*"===e[0])return"always";if(-1!==e.indexOf(b))return 1===f&&b===d?"sameDomain":"always"}return"never"}}(),Ka=function(){try{return g.activeElement}catch(a){return null}},La=function(a,b){var c,d,e,f=[];if("string"==typeof b&&b&&(f=b.split(/\s+/)),a&&1===a.nodeType&&f.length>0){for(e=(" "+(a.className||"")+" ").replace(/[\t\r\n\f]/g," "),c=0,d=f.length;d>c;c++)-1===e.indexOf(" "+f[c]+" ")&&(e+=f[c]+" ");e=e.replace(/^\s+|\s+$/g,""),e!==a.className&&(a.className=e)}return a},Ma=function(a,b){var c,d,e,f=[];if("string"==typeof b&&b&&(f=b.split(/\s+/)),a&&1===a.nodeType&&f.length>0&&a.className){for(e=(" "+a.className+" ").replace(/[\t\r\n\f]/g," "),c=0,d=f.length;d>c;c++)e=e.replace(" "+f[c]+" "," ");e=e.replace(/^\s+|\s+$/g,""),e!==a.className&&(a.className=e)}return a},Na=function(a,b){var c=m(a,null).getPropertyValue(b);return"cursor"!==b||c&&"auto"!==c||"A"!==a.nodeName?c:"pointer"},Oa=function(a){var b={left:0,top:0,width:0,height:0};if(a.getBoundingClientRect){var c=a.getBoundingClientRect(),d=f.pageXOffset,e=f.pageYOffset,h=g.documentElement.clientLeft||0,i=g.documentElement.clientTop||0,j=0,k=0;if("relative"===Na(g.body,"position")){var l=g.body.getBoundingClientRect(),m=g.documentElement.getBoundingClientRect();j=l.left-m.left||0,k=l.top-m.top||0}b.left=c.left+d-h-j,b.top=c.top+e-i-k,b.width="width"in c?c.width:c.right-c.left,b.height="height"in c?c.height:c.bottom-c.top}return b},Pa=function(a){if(!a)return!1;var b=m(a,null);if(!b)return!1;var c=r(b.height)>0,d=r(b.width)>0,e=r(b.top)>=0,f=r(b.left)>=0,g=c&&d&&e&&f,h=g?null:Oa(a),i="none"!==b.display&&"collapse"!==b.visibility&&(g||!!h&&(c||h.height>0)&&(d||h.width>0)&&(e||h.top>=0)&&(f||h.left>=0));return i},Qa=function(){j(T),T=0,l(U),U=0},Ra=function(){var a;if(d&&(a=Ba(O.bridge))){var b=Oa(d);A(a.style,{width:b.width+"px",height:b.height+"px",top:b.top+"px",left:b.left+"px",zIndex:""+Ta($.zIndex)})}},Sa=function(a){O.ready===!0&&(O.bridge&&"function"==typeof O.bridge.setHandCursor?O.bridge.setHandCursor(a):O.ready=!1)},Ta=function(a){if(/^(?:auto|inherit)$/.test(a))return a;var b;return"number"!=typeof a||s(a)?"string"==typeof a&&(b=Ta(q(a,10))):b=a,"number"==typeof b?b:"auto"},Ua=function(a){var b=/(\r\n|\r|\n)/g;return"string"==typeof a&&$.fixLineEndings===!0&&(M()?/((^|[^\r])\n|\r([^\n]|$))/.test(a)&&(a=a.replace(b,"\r\n")):/\r/.test(a)&&(a=a.replace(b,"\n"))),a},Va=function(b){var c,d,e,f=O.sandboxed,g=null;if(b=b===!0,N===!1)g=!1;else{try{d=a.frameElement||null}catch(h){e={name:h.name,message:h.message}}if(d&&1===d.nodeType&&"IFRAME"===d.nodeName)try{g=d.hasAttribute("sandbox")}catch(h){g=null}else{try{c=document.domain||null}catch(h){c=null}(null===c||e&&"SecurityError"===e.name&&/(^|[\s\(\[@])sandbox(es|ed|ing|[\s\.,!\)\]@]|$)/.test(e.message.toLowerCase()))&&(g=!0)}}return O.sandboxed=g,f===g||b||Wa(o),g},Wa=function(a){function b(a){var b=a.match(/[\d]+/g);return b.length=3,b.join(".")}function c(a){return!!a&&(a=a.toLowerCase())&&(/^(pepflashplayer\.dll|libpepflashplayer\.so|pepperflashplayer\.plugin)$/.test(a)||"chrome.plugin"===a.slice(-13))}function d(a){a&&(i=!0,a.version&&(l=b(a.version)),!l&&a.description&&(l=b(a.description)),a.filename&&(k=c(a.filename)))}var e,f,g,i=!1,j=!1,k=!1,l="";if(h.plugins&&h.plugins.length)e=h.plugins["Shockwave Flash"],d(e),h.plugins["Shockwave Flash 2.0"]&&(i=!0,l="2.0.0.11");else if(h.mimeTypes&&h.mimeTypes.length)g=h.mimeTypes["application/x-shockwave-flash"],e=g&&g.enabledPlugin,d(e);else if("undefined"!=typeof a){j=!0;try{f=new a("ShockwaveFlash.ShockwaveFlash.7"),i=!0,l=b(f.GetVariable("$version"))}catch(m){try{f=new a("ShockwaveFlash.ShockwaveFlash.6"),i=!0,l="6.0.21"}catch(n){try{f=new a("ShockwaveFlash.ShockwaveFlash"),i=!0,l=b(f.GetVariable("$version"))}catch(o){j=!1}}}}O.disabled=i!==!0,O.outdated=l&&r(l)<r(P),O.version=l||"0.0.0",O.pluginType=k?"pepper":j?"activex":i?"netscape":"unknown"};Wa(o),Va(!0);var Xa=function(){return this instanceof Xa?void("function"==typeof Xa._createClient&&Xa._createClient.apply(this,z(arguments))):new Xa};v(Xa,"version",{value:"2.3.0-beta.1",writable:!1,configurable:!0,enumerable:!0}),Xa.config=function(){return _.apply(this,z(arguments))},Xa.state=function(){return aa.apply(this,z(arguments))},Xa.isFlashUnusable=function(){return ba.apply(this,z(arguments))},Xa.on=function(){return ca.apply(this,z(arguments))},Xa.off=function(){return da.apply(this,z(arguments))},Xa.handlers=function(){return ea.apply(this,z(arguments))},Xa.emit=function(){return fa.apply(this,z(arguments))},Xa.create=function(){return ga.apply(this,z(arguments))},Xa.destroy=function(){return ha.apply(this,z(arguments))},Xa.setData=function(){return ia.apply(this,z(arguments))},Xa.clearData=function(){return ja.apply(this,z(arguments))},Xa.getData=function(){return ka.apply(this,z(arguments))},Xa.focus=Xa.activate=function(){return la.apply(this,z(arguments))},Xa.blur=Xa.deactivate=function(){return ma.apply(this,z(arguments))},Xa.activeElement=function(){return na.apply(this,z(arguments))};var Ya=0,Za={},$a=0,_a={},ab={};A($,{autoActivate:!0});var bb=function(a){var b=this;b.id=""+Ya++,Za[b.id]={instance:b,elements:[],handlers:{}},a&&b.clip(a),Xa.on("*",function(a){return b.emit(a)}),Xa.on("destroy",function(){b.destroy()}),Xa.create()},cb=function(a,d){var e,f,g,h={},i=Za[this.id],j=i&&i.handlers;if(!i)throw new Error("Attempted to add new listener(s) to a destroyed ZeroClipboard client instance");if("string"==typeof a&&a)g=a.toLowerCase().split(/\s+/);else if("object"==typeof a&&a&&"undefined"==typeof d)for(e in a)w.call(a,e)&&"string"==typeof e&&e&&"function"==typeof a[e]&&this.on(e,a[e]);if(g&&g.length){for(e=0,f=g.length;f>e;e++)a=g[e].replace(/^on/,""),h[a]=!0,j[a]||(j[a]=[]),j[a].push(d);if(h.ready&&O.ready&&this.emit({type:"ready",client:this}),h.error){for(e=0,f=X.length;f>e;e++)if(O[X[e].replace(/^flash-/,"")]){this.emit({type:"error",name:X[e],client:this});break}c!==b&&Xa.version!==c&&this.emit({type:"error",name:"version-mismatch",jsVersion:Xa.version,swfVersion:c})}}return this},db=function(a,b){var c,d,e,f,g,h=Za[this.id],i=h&&h.handlers;if(!i)return this;if(0===arguments.length)f=u(i);else if("string"==typeof a&&a)f=a.split(/\s+/);else if("object"==typeof a&&a&&"undefined"==typeof b)for(c in a)w.call(a,c)&&"string"==typeof c&&c&&"function"==typeof a[c]&&this.off(c,a[c]);if(f&&f.length)for(c=0,d=f.length;d>c;c++)if(a=f[c].toLowerCase().replace(/^on/,""),g=i[a],g&&g.length)if(b)for(e=g.indexOf(b);-1!==e;)g.splice(e,1),e=g.indexOf(b,e);else g.length=0;return this},eb=function(a){var b=null,c=Za[this.id]&&Za[this.id].handlers;return c&&(b="string"==typeof a&&a?c[a]?c[a].slice(0):[]:B(c)),b},fb=function(a){if(kb.call(this,a)){"object"==typeof a&&a&&"string"==typeof a.type&&a.type&&(a=A({},a));var b=A({},pa(a),{client:this});lb.call(this,b)}return this},gb=function(a){if(!Za[this.id])throw new Error("Attempted to clip element(s) to a destroyed ZeroClipboard client instance");a=mb(a);for(var b=0;b<a.length;b++)if(w.call(a,b)&&a[b]&&1===a[b].nodeType){a[b].zcClippingId?-1===_a[a[b].zcClippingId].indexOf(this.id)&&_a[a[b].zcClippingId].push(this.id):(a[b].zcClippingId="zcClippingId_"+$a++,_a[a[b].zcClippingId]=[this.id],$.autoActivate===!0&&nb(a[b]));var c=Za[this.id]&&Za[this.id].elements;-1===c.indexOf(a[b])&&c.push(a[b])}return this},hb=function(a){var b=Za[this.id];if(!b)return this;var c,d=b.elements;a="undefined"==typeof a?d.slice(0):mb(a);for(var e=a.length;e--;)if(w.call(a,e)&&a[e]&&1===a[e].nodeType){for(c=0;-1!==(c=d.indexOf(a[e],c));)d.splice(c,1);var f=_a[a[e].zcClippingId];if(f){for(c=0;-1!==(c=f.indexOf(this.id,c));)f.splice(c,1);0===f.length&&($.autoActivate===!0&&ob(a[e]),delete a[e].zcClippingId)}}return this},ib=function(){var a=Za[this.id];return a&&a.elements?a.elements.slice(0):[]},jb=function(){Za[this.id]&&(this.unclip(),this.off(),delete Za[this.id])},kb=function(a){if(!a||!a.type)return!1;if(a.client&&a.client!==this)return!1;var b=Za[this.id],c=b&&b.elements,d=!!c&&c.length>0,e=!a.target||d&&-1!==c.indexOf(a.target),f=a.relatedTarget&&d&&-1!==c.indexOf(a.relatedTarget),g=a.client&&a.client===this;return b&&(e||f||g)?!0:!1},lb=function(a){var b=Za[this.id];if("object"==typeof a&&a&&a.type&&b){var c=sa(a),d=b&&b.handlers["*"]||[],e=b&&b.handlers[a.type]||[],g=d.concat(e);if(g&&g.length){var h,i,j,k,l,m=this;for(h=0,i=g.length;i>h;h++)j=g[h],k=m,"string"==typeof j&&"function"==typeof f[j]&&(j=f[j]),"object"==typeof j&&j&&"function"==typeof j.handleEvent&&(k=j,j=j.handleEvent),"function"==typeof j&&(l=A({},a),ta(j,k,[l],c))}}},mb=function(a){return"string"==typeof a&&(a=[]),"number"!=typeof a.length?[a]:a},nb=function(a){if(a&&1===a.nodeType){var b=function(a){(a||(a=f.event))&&("js"!==a._source&&(a.stopImmediatePropagation(),a.preventDefault()),delete a._source)},c=function(c){(c||(c=f.event))&&(b(c),Xa.focus(a))};a.addEventListener("mouseover",c,!1),a.addEventListener("mouseout",b,!1),a.addEventListener("mouseenter",b,!1),a.addEventListener("mouseleave",b,!1),a.addEventListener("mousemove",b,!1),ab[a.zcClippingId]={mouseover:c,mouseout:b,mouseenter:b,mouseleave:b,mousemove:b}}},ob=function(a){if(a&&1===a.nodeType){var b=ab[a.zcClippingId];if("object"==typeof b&&b){for(var c,d,e=["move","leave","enter","out","over"],f=0,g=e.length;g>f;f++)c="mouse"+e[f],d=b[c],"function"==typeof d&&a.removeEventListener(c,d,!1);delete ab[a.zcClippingId]}}};Xa._createClient=function(){bb.apply(this,z(arguments))},Xa.prototype.on=function(){return cb.apply(this,z(arguments))},Xa.prototype.off=function(){return db.apply(this,z(arguments))},Xa.prototype.handlers=function(){return eb.apply(this,z(arguments))},Xa.prototype.emit=function(){return fb.apply(this,z(arguments))},Xa.prototype.clip=function(){return gb.apply(this,z(arguments))},Xa.prototype.unclip=function(){return hb.apply(this,z(arguments))},Xa.prototype.elements=function(){return ib.apply(this,z(arguments))},Xa.prototype.destroy=function(){return jb.apply(this,z(arguments))},Xa.prototype.setText=function(a){if(!Za[this.id])throw new Error("Attempted to set pending clipboard data from a destroyed ZeroClipboard client instance");return Xa.setData("text/plain",a),this},Xa.prototype.setHtml=function(a){if(!Za[this.id])throw new Error("Attempted to set pending clipboard data from a destroyed ZeroClipboard client instance");return Xa.setData("text/html",a),this},Xa.prototype.setRichText=function(a){if(!Za[this.id])throw new Error("Attempted to set pending clipboard data from a destroyed ZeroClipboard client instance");return Xa.setData("application/rtf",a),this},Xa.prototype.setData=function(){if(!Za[this.id])throw new Error("Attempted to set pending clipboard data from a destroyed ZeroClipboard client instance");return Xa.setData.apply(this,z(arguments)),this},Xa.prototype.clearData=function(){if(!Za[this.id])throw new Error("Attempted to clear pending clipboard data from a destroyed ZeroClipboard client instance");return Xa.clearData.apply(this,z(arguments)),this},Xa.prototype.getData=function(){if(!Za[this.id])throw new Error("Attempted to get pending clipboard data from a destroyed ZeroClipboard client instance");return Xa.getData.apply(this,z(arguments))}, true?!(__WEBPACK_AMD_DEFINE_RESULT__ = function(){return Xa}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):"object"==typeof module&&module&&"object"==typeof module.exports&&module.exports?module.exports=Xa:a.ZeroClipboard=Xa}(function(){return this||window}());
	//# sourceMappingURL=ZeroClipboard.min.map

/***/ }

});
//# sourceMappingURL=share.js.map