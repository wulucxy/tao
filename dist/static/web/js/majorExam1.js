webpackJsonp([16],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	/* 建议这里都引入 */
	__webpack_require__(13);
	__webpack_require__(320);
	var $ = window.$ || __webpack_require__(33);
	
	//工具类方法
	var util = __webpack_require__(34);
	
	//公共方法
	var common = __webpack_require__(35);
	
	
	/* 可选，视需求而定 */
	var Cookies = __webpack_require__(323);
	var tmpl = __webpack_require__(324);
	
	__webpack_require__(50);
	
	//保存所有答案
	var allItems = 210;
	var answer = Cookies.get("answer") ? Cookies.get("answer").split("") : [];
	
	
	if(answer.length == allItems){
		// _alert("你已经完成全部问题");
		// setTimeout(function(){
		// 	window.location = "/box/plan/major_exam3";
		// },3000);
		Cookies.remove('answer');
		resetTest();
	
	
	}else if(answer.length){
		$("#goProTest").text("上次已使用，继续测试").attr({"href" : "/pro2"});
	}else{
		resetTest();
	}
	
	function resetTest(){
		$("#goProTest").text("开始测试");
		$("#goProTest").on("click",function(e){
			e.preventDefault();
			var btn = $(e.target);
			btn.addClass("disabled");
			verifyCodeModal(btn);
		});
	}
	
	function subCodeAction(btn,oForm){
		var provinceId = $("[name=province]").val();
		$.ajax({
			url : "/v2/client/"+provinceId + "/tzy/mtest/code",
			type  : "post",
			contentType: "application/json",
			data : JSON.stringify({code : $("#code").val()}),
			success : function(res){
				if(typeof res == "string"){
					var res = $.parseJSON(res);
				}
	
				if(!res.code){
					window.location.href = "/box/plan/major_exam2";
				}else{
					common.showError($("#errTxt"),res.msg);
					return;
				}
			},
			error : function(){
				warn("网络错误，请稍后重试");
			}
		})
	
	};
	
	function verifyCodeModal(btn){
		modalBox(btn,{
			html:tmpl({}),
	        klass : 'w540 shadow',
	        closeByOverlay : false,
	        completeCallback : function(){
	        	var self = btn; 
	        	
	        	$("#verifyCodeForm").validator({
	        		errorParent: '.row',
	        		focusinCallback: function() {
			          common.hideError($('.errTxt'));
			        },
				    successCallback: function(e) {
				      var target = $(e.target).closest('.btn');
				      //执行到下一步操作
				      subCodeAction(target,$("#verifyCodeForm"));
	
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

/***/ 320:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(321);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(29)(content, {});
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

/***/ 321:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(15)();
	// imports
	
	
	// module
	exports.push([module.id, ".proTestWrapper {\n  margin-top: 12px;\n}\n.s-proTest .badge {\n  margin-left: 4px;\n}\n.lh2 {\n  line-height: 2;\n}\n.contentWrap {\n  background-color: #fff;\n  padding: 48px 36px;\n  margin-bottom: 40px;\n}\n.contentWrap .media > .imgWrap {\n  margin-right: 30px;\n}\n.contentWrap .media > .media-body {\n  font-size: 15px;\n}\n.footerCnt {\n  border-top: 1px solid #e2e2e2;\n  margin-top: 40px;\n  padding-top: 48px;\n  text-align: center;\n}\n.verifyCodeModal .icon-code {\n  display: inline-block;\n  vertical-align: middle;\n  background-repeat: no-repeat;\n  width: 20px;\n  height: 24px;\n  background-image: url(" + __webpack_require__(322) + ");\n  background-position: -40px 0;\n}\n.verifyCodeModal.modalCntWrap .footerCnt {\n  padding-top: 0;\n  margin-top: 10px;\n}\n.verifyCodeModal .errInfo {\n  margin-left: 90px;\n}\n", ""]);
	
	// exports


/***/ },

/***/ 322:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/web/img/iconUser.png"

/***/ },

/***/ 323:
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

/***/ 324:
/***/ function(module, exports) {

	module.exports = function (obj) {
	obj || (obj = {});
	var __t, __p = '';
	with (obj) {
	__p += '<div class="modalCntWrap verifyCodeModal taoModal g9">\n <h3 class="clearfix"><a href="javascript:;" class="icons btn-close fr"></a><span class="fl">授权码</span></h3>\n <form class="modalSubCnt" id="verifyCodeForm" onsubmit="return false;">\n\n<!-- <div class="inputRows">\n   <div class="row clearfix">\n    <div class="inputWrap inputTextWrap">\n      <span class="iconWrap"><i class="icon-user icon-code"></i><em class="vm">授权码：</em></span>\n      <input type="text" class="input form-control" id="code" name="code" maxLength="6" placeholder="请输入授权码" required autocomplete="off">\n    </div>\n     <span class="p-error"授权码为6位字母、数字格式</span>\n    <span class="p-error-empty">授权码不能为空</span>\n </div>\n   -->\n  <div class="row clearfix">\n      <label for="verifyCode" class="control-label g3 column col1 fl">\n        <i class="icon-code"></i>\n        <em class="vm">授权码：</em></label>\n      <div class="col2 inputWrap rel">\n        <div class="fieldWrap">\n          <input type="text" class="input form-control" id="code" name="code" maxlength="6" required placeholder="请输入授权码">\n        </div>\n      </div>\n      <div class="errInfo">\n        <span class="p-error-empty">授权码不能为空</span>\n      </div>\n  </div>\n\n <div class="footerCnt">\n     <p id="errTxt" class="errTxt"></p>\n     <div class="row btnRow">\n       <button type="submit" class="btn btn-positive btn-form" id="verifyCode">\n       		<em class="subTxt">确定</em></button>\n     </div>\n </div>\n\n</form>\n</div>';
	
	}
	return __p
	}

/***/ }

});
//# sourceMappingURL=majorExam1.js.map