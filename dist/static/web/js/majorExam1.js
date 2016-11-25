webpackJsonp([30],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	/* 建议这里都引入 */
	__webpack_require__(16);
	__webpack_require__(241);
	var $ = window.$ || __webpack_require__(38);
	
	//工具类方法
	var util = __webpack_require__(39);
	
	//公共方法
	var common = __webpack_require__(40);
	
	
	/* 可选，视需求而定 */
	var Cookies = __webpack_require__(101);
	var tmpl = __webpack_require__(243);
	
	__webpack_require__(56);
	
	//保存所有答案
	var allItems = 210;
	var answer = Cookies.get("answer") ? Cookies.get("answer").split("") : [];
	
	
	if(answer.length == allItems){
		Cookies.remove('answer');
		resetTest();
	}else if(answer.length){
		var _code = Cookies.get('code');
		$("#goProTest").text("上次已使用，继续测试").attr({"href" : "/box/plan/major_exam2?code="+_code});
	}else{
		resetTest();
	}
	
	function resetTest(){
		answer = [];
		$("#goProTest").text("填写授权码，并开始测试");
		$("#goProTest").on("click",function(e){
			e.preventDefault();
			var btn = $(e.target);
			btn.addClass("disabled");
			verifyCodeModal(btn);
		});
	}
	
	function subCodeAction(btn,oForm){
		answer = [];
		var provinceId = $("[name=province]").val();
		$.ajax({
			url : preServer+provinceId + "/tzy/mtest/code",
			type  : "post",
			contentType: "application/json",
			data : JSON.stringify({code : $("#code").val()}),
			success : function(res){
				if(typeof res == "string"){
					var res = $.parseJSON(res);
				}
	
				//点击确定要记录用户信息，方便下次进来不需要再次录入验证码
				if(res.code==1){
					//保存cookie,0是特殊的
					answer.push("0");
					Cookies.set("answer",answer.join(""),{expire : 356});
	
					Cookies.set("code",$("#code").val());
	
					window.location.href = "/box/plan/major_exam2?code="+$("#code").val();
				}else{
					common.showError($("#errTxt"),res.msg);
					return;
				}
			},
			error : function(err){
				console.log(err);
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

/***/ 241:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(242);
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

/***/ 242:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(18)();
	// imports
	
	
	// module
	exports.push([module.id, ".proTestWrapper {\n  margin-top: 12px;\n}\n.s-proTest .badge {\n  margin-left: 4px;\n}\n.lh2 {\n  line-height: 2;\n}\n.contentWrap {\n  background-color: #fff;\n  padding: 48px 36px;\n  margin-bottom: 40px;\n}\n.contentWrap .media > .imgWrap {\n  margin-right: 30px;\n}\n.contentWrap .media > .media-body {\n  font-size: 15px;\n}\n.footerCnt {\n  border-top: 1px solid #e2e2e2;\n  margin-top: 40px;\n  padding-top: 48px;\n  text-align: center;\n}\n.verifyCodeModal .icon-code {\n  display: inline-block;\n  vertical-align: middle;\n  background-repeat: no-repeat;\n  width: 20px;\n  height: 24px;\n  background-image: url(" + __webpack_require__(22) + ");\n  background-position: -40px 0;\n}\n.verifyCodeModal.modalCntWrap .footerCnt {\n  padding-top: 0;\n  margin-top: 10px;\n}\n.verifyCodeModal .errInfo {\n  margin-left: 90px;\n}\n", ""]);
	
	// exports


/***/ },

/***/ 243:
/***/ function(module, exports) {

	module.exports = function (obj) {
	obj || (obj = {});
	var __t, __p = '';
	with (obj) {
	__p += '<div class="modalCntWrap verifyCodeModal taoModal g9">\n <h3 class="clearfix"><a href="javascript:;" class="icons btn-close fr"></a><span class="fl">授权码</span></h3>\n <form class="modalSubCnt" id="verifyCodeForm" onsubmit="return false;">\n\n<!-- <div class="inputRows">\n   <div class="row clearfix">\n    <div class="inputWrap inputTextWrap">\n      <span class="iconWrap"><i class="icon-user icon-code"></i><em class="vm">授权码：</em></span>\n      <input type="text" class="input form-control" id="code" name="code" maxLength="6" placeholder="请输入授权码" required autocomplete="off">\n    </div>\n     <span class="p-error"授权码为6位字母、数字格式</span>\n    <span class="p-error-empty">授权码不能为空</span>\n </div>\n   -->\n  <div class="row clearfix">\n      <label for="verifyCode" class="control-label g3 column col1 fl">\n        <i class="icon-code"></i>\n        <em class="vm">授权码：</em></label>\n      <div class="col2 inputWrap rel">\n        <div class="fieldWrap">\n          <input type="text" class="input form-control" id="code" name="code" required placeholder="请输入授权码">\n        </div>\n      </div>\n      <div class="errInfo">\n        <span class="p-error-empty">授权码不能为空</span>\n      </div>\n  </div>\n\n <div class="footerCnt">\n     <p id="errTxt" class="errTxt"></p>\n     <div class="row btnRow">\n       <button type="submit" class="btn btn-positive btn-form" id="verifyCode">\n       		<em class="subTxt">确定</em></button>\n     </div>\n </div>\n\n</form>\n</div>';
	
	}
	return __p
	}

/***/ }

});
//# sourceMappingURL=majorExam1.js.map