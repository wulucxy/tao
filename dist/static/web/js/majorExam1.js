webpackJsonp([16],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	/* 建议这里都引入 */
	__webpack_require__(13);
	__webpack_require__(322);
	var $ = window.$ || __webpack_require__(33);
	
	//工具类方法
	var util = __webpack_require__(34);
	
	//公共方法
	var common = __webpack_require__(35);
	
	
	/* 可选，视需求而定 */
	var Cookies = __webpack_require__(95);
	var tmpl = __webpack_require__(325);
	
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

/***/ 322:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 325:
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