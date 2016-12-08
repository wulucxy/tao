webpackJsonp([17],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	/* 建议这里都引入 */
	__webpack_require__(16);
	__webpack_require__(188);
	var $ = window.$ || __webpack_require__(38);
	
	//工具类方法
	var util = __webpack_require__(39);
	
	//公共方法
	var common = __webpack_require__(40);
	var provinceId = $("[name=province]").val();
	
	__webpack_require__(56);
	
	function subFunc(btn, oForm) {
		$.ajax({
			url: preServer+provinceId + '/coupon/dole',
			type: 'post',
			contentType: "application/json",
			data: JSON.stringify({
				invitationCode: util.getQuery('userId'),
				mobile: $('#mobile').val()
			}),
			success: function(res){
				if(typeof res =="string"){
	                var res = $.parseJSON(res);
	            }
	
	            // code为1表示领取成功，如果不为1展示错误信息
	            if(res.code!=1){
	                warn(res.msg);
	                return;
	            }
	
	            var data = res.result;
	           	
	           	$('.recieveTxts').show();
	            return false;
			},
			error: function(err){
				console.error(err);
			}
		})
	}
	
	if($("#recieveCouponForm").length){
		$("#recieveCouponForm").validator({
			errorParent: '.row',
		    successCallback: function(e) {
		      var target = $(e.target).closest('.btn');
		      //执行到下一步操作
		      subFunc(target, $("#recieveCouponForm"));
		    },
		    focusinCallback: function() {
		      
		    },
		    errorCallback: function(unvalidFields) {
		      var oError = $('.errTxt');
		      
		    }
		})
	}


/***/ },

/***/ 188:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }

});
//# sourceMappingURL=couponReceive.41ec5eb6.js.map