webpackJsonp([16],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	/* 建议这里都引入 */
	__webpack_require__(12);
	__webpack_require__(311);
	var $ = window.$ || __webpack_require__(32);
	
	//工具类方法
	var util = __webpack_require__(33);
	
	//公共方法
	var common = __webpack_require__(34);
	
	
	/* 可选，视需求而定 */
	var Cookies = __webpack_require__(314);
	var tmpl = __webpack_require__(315);
	
	__webpack_require__(49);
	
	//保存所有答案
	var allItems = 210;
	var answer = Cookies.get("answer") ? Cookies.get("answer").split("") : [];
	
	
	if(answer.length == allItems){
		_alert("你已经完成全部问题");
		setTimeout(function(){
			//window.location = "/";
		},3000);
	}else if(answer.length){
		$("#goProTest").text("上次已使用，继续测试").attr({"href" : "/pro2"});
	}else{
		$("#goProTest").text("开始测试");
		$("#goProTest").on("click",function(e){
			e.preventDefault();
			var btn = $(e.target);
			btn.addClass("disabled");
			verifyCodeModal(btn);
		});
	}
	
	
	function verifyCodeModal(btn){
		modalBox(btn,{
			html:tmpl({}),
	        klass : 'w540 shadow',
	        closeByOverlay : false,
	        completeCallback : function(){
	        	var self = btn; 
	        	
	        	$("#verifyCodeForm").validator({
	        		errorParent: '.row',
				    successCallback: function(e) {
				      var target = $(e.target).closest('.btn');
				      //执行到下一步操作
				      
	
				    },
				  
			        errorCallback: function(unvalidFields) {
			         
			        }
	        	});
	        	
	        },
	        closeCallback : function(){
	        	btn.removeClass("disabled");
	        }
	
		});
	}

/***/ },

/***/ 311:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 314:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * JavaScript Cookie v2.1.0
	 * https://github.com/js-cookie/js-cookie
	 *
	 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
	 * Released under the MIT license
	 */
	(function (factory) {
		if (true) {
			!(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else if (typeof exports === 'object') {
			module.exports = factory();
		} else {
			var _OldCookies = window.Cookies;
			var api = window.Cookies = factory();
			api.noConflict = function () {
				window.Cookies = _OldCookies;
				return api;
			};
		}
	}(function () {
		function extend () {
			var i = 0;
			var result = {};
			for (; i < arguments.length; i++) {
				var attributes = arguments[ i ];
				for (var key in attributes) {
					result[key] = attributes[key];
				}
			}
			return result;
		}
	
		function init (converter) {
			function api (key, value, attributes) {
				var result;
	
				// Write
	
				if (arguments.length > 1) {
					attributes = extend({
						path: '/'
					}, api.defaults, attributes);
	
					if (typeof attributes.expires === 'number') {
						var expires = new Date();
						expires.setMilliseconds(expires.getMilliseconds() + attributes.expires * 864e+5);
						attributes.expires = expires;
					}
	
					try {
						result = JSON.stringify(value);
						if (/^[\{\[]/.test(result)) {
							value = result;
						}
					} catch (e) {}
	
					if (!converter.write) {
						value = encodeURIComponent(String(value))
							.replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);
					} else {
						value = converter.write(value, key);
					}
	
					key = encodeURIComponent(String(key));
					key = key.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent);
					key = key.replace(/[\(\)]/g, escape);
	
					return (document.cookie = [
						key, '=', value,
						attributes.expires && '; expires=' + attributes.expires.toUTCString(), // use expires attribute, max-age is not supported by IE
						attributes.path    && '; path=' + attributes.path,
						attributes.domain  && '; domain=' + attributes.domain,
						attributes.secure ? '; secure' : ''
					].join(''));
				}
	
				// Read
	
				if (!key) {
					result = {};
				}
	
				// To prevent the for loop in the first place assign an empty array
				// in case there are no cookies at all. Also prevents odd result when
				// calling "get()"
				var cookies = document.cookie ? document.cookie.split('; ') : [];
				var rdecode = /(%[0-9A-Z]{2})+/g;
				var i = 0;
	
				for (; i < cookies.length; i++) {
					var parts = cookies[i].split('=');
					var name = parts[0].replace(rdecode, decodeURIComponent);
					var cookie = parts.slice(1).join('=');
	
					if (cookie.charAt(0) === '"') {
						cookie = cookie.slice(1, -1);
					}
	
					try {
						cookie = converter.read ?
							converter.read(cookie, name) : converter(cookie, name) ||
							cookie.replace(rdecode, decodeURIComponent);
	
						if (this.json) {
							try {
								cookie = JSON.parse(cookie);
							} catch (e) {}
						}
	
						if (key === name) {
							result = cookie;
							break;
						}
	
						if (!key) {
							result[name] = cookie;
						}
					} catch (e) {}
				}
	
				return result;
			}
	
			api.get = api.set = api;
			api.getJSON = function () {
				return api.apply({
					json: true
				}, [].slice.call(arguments));
			};
			api.defaults = {};
	
			api.remove = function (key, attributes) {
				api(key, '', extend(attributes, {
					expires: -1
				}));
			};
	
			api.withConverter = init;
	
			return api;
		}
	
		return init(function () {});
	}));


/***/ },

/***/ 315:
/***/ function(module, exports) {

	module.exports = function (obj) {
	obj || (obj = {});
	var __t, __p = '';
	with (obj) {
	__p += '<div class="modalCntWrap verifyCodeModal taoModal g9">\n <h3 class="clearfix"><a href="javascript:;" class="icons btn-close fr"></a><span class="fl">授权码</span></h3>\n <form class="modalSubCnt" id="verifyCodeForm" onsubmit="return false;">\n\n<!-- <div class="inputRows">\n   <div class="row clearfix">\n    <div class="inputWrap inputTextWrap">\n      <span class="iconWrap"><i class="icon-user icon-code"></i><em class="vm">授权码：</em></span>\n      <input type="text" class="input form-control" id="code" name="code" maxLength="6" placeholder="请输入授权码" required autocomplete="off">\n    </div>\n     <span class="p-error"授权码为6位字母、数字格式</span>\n    <span class="p-error-empty">授权码不能为空</span>\n </div>\n   -->\n  <div class="row clearfix">\n      <label for="verifyCode" class="control-label g3 column col1 fl">\n        <i class="icon-code"></i>\n        <em class="vm">授权码：</em></label>\n      <div class="col2 inputWrap rel">\n        <div class="fieldWrap">\n          <input type="text" class="input form-control" id="name" name="name" maxlength="6" required placeholder="请输入授权码" pattern="^\\w{6}">\n        </div>\n      </div>\n      <div class="errInfo">\n        <span class="p-error">授权码为6位字母、数字格式</span>\n        <span class="p-error-empty">授权码不能为空</span>\n      </div>\n  </div>\n\n <div class="footerCnt">\n     <p id="errTxt" class="errTxt"></p>\n     <div class="row btnRow">\n       <button type="submit" class="btn btn-positive btn-form" id="verifyCode">\n       		<em class="subTxt">确定</em></button>\n     </div>\n </div>\n\n</form>\n</div>';
	
	}
	return __p
	}

/***/ }

});
//# sourceMappingURL=majorExam1.js.map