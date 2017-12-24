webpackJsonp([3],{

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	/* 建议这里都引入 */
	__webpack_require__(21);
	__webpack_require__(123);
	var $ = window.$ || __webpack_require__(44);
	
	//工具类方法
	var util = __webpack_require__(45);
	
	//公共方法
	var common = __webpack_require__(46);
	
	__webpack_require__(62);
	
	var userUtil = __webpack_require__(64);
	var verify = __webpack_require__(101);
	
	var telReg = /^1\d{10}$/;
	
	var accessToken = $('[name=accessToken]').val();
	var bangUrl = $('[name=bangUrl]').val();
	var openId = $('[name=openId]').val();
	var uid = $('[name=uid]').val();
	
	var bang = {
		init: function(){
			this.bangEvt();
			this.verifyEvt();
		},
	
		verifyEvt: function(){
			var that = this;
			var oError = $(".errTxt");
		    verify.init(oError);
		},
	
		bangEvt : function(){
			var that = this;
			$("#bangMobileForm").validator({
				errorParent: '.row',
			    successCallback: function(e) {
			      var target = $(e.target).closest('.btn');
			      //执行到下一步操作
			      that.postRegInfo(target, $("#bangMobileForm"));
	
			    },
			    focusinCallback: function() {
		          userUtil.hideError($('.errTxt'));
		          $(".row").removeClass('errorIpt');
		        },
		        errorCallback: function(unvalidFields) {
		          var oError = $('.errTxt');
		          // userUtil.showErrorMsg($("#bangMobileForm"), oError, unvalidFields);
		        }
			});
		},
	
		postRegInfo : function(btn,oForm){
			var that = this;
		    btn.addClass('disabled');
		    var oError = $('.errTxt');
	
		    var _data = {
		    	code : $("[name=code]").val(),
		        mobile: $("[name=mobile]").val(),
		        province :  $("#provinceId").val()
		    };
	
		    if(!!openId) _data.openId = openId;
		    if(!!uid) _data.uid = uid;
		    if(!!accessToken) _data.accessToken = accessToken;
	
		    $.ajax({
		        url: bangUrl,
		        type: "post",
		        contentType: "application/json",
		        data: JSON.stringify(_data),
		        success: function(res) {
		          if (typeof res == "string") {
		            var res = $.parseJSON(res);
		          }
	
		          if(res.code==1){
		          	setTimeout(function(){
		          		window.location = "/";
		          	},400);
		          }else{
		          	
		          	btn.removeClass('disabled');
		          	userUtil.showError(oError, res.msg);
		          	return;
		          }
	
		        },
		        error : function(err){
		        	btn.removeClass('disabled');
		        	return;
		        }
			});
	
		}
	};
	
	bang.init();
	


/***/ }),

/***/ 123:
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(124);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(41)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/autoprefixer-loader/index.js!../../../node_modules/less-loader/index.js!./index.less", function() {
				var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/autoprefixer-loader/index.js!../../../node_modules/less-loader/index.js!./index.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),

/***/ 124:
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(23)();
	// imports
	
	
	// module
	exports.push([module.id, ".blue {\n  color: #61c0e2;\n}\n.breadcrumb li {\n  width: 33.3%;\n}\n.p_assess {\n  margin-top: 24px;\n}\n.formWrap {\n  background-color: #fff;\n  padding: 28px 24px;\n  margin-bottom: 30px;\n}\n.formWrap .row .col2 {\n  margin-left: 160px;\n}\n.formWrap .row .col2 .fieldWrap {\n  display: inline-block;\n  width: 374px;\n}\n.formWrap .row .errInfo {\n  margin-left: 160px;\n}\n.formWrap .row .control-label {\n  font-size: 15px;\n  color: #444;\n}\n.formWrap .row .control-label em {\n  margin-left: 10px;\n}\n.bangMobile .verifyLabel {\n  right: 4px;\n  top: 4px;\n  line-height: 26px;\n  border-radius: 4px;\n  font-size: 12px;\n}\n", ""]);
	
	// exports


/***/ })

});
//# sourceMappingURL=bangMobile.js.map