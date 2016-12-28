webpackJsonp([3],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	/* 建议这里都引入 */
	__webpack_require__(16);
	__webpack_require__(117);
	var $ = window.$ || __webpack_require__(38);
	
	//工具类方法
	var util = __webpack_require__(39);
	
	//公共方法
	var common = __webpack_require__(40);
	
	__webpack_require__(56);
	
	var userUtil = __webpack_require__(58);
	var verify = __webpack_require__(95);
	
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
	


/***/ },

/***/ 117:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }

});
//# sourceMappingURL=bangMobile.js.map