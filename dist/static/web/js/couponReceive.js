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
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(189);
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

/***/ 189:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(18)();
	// imports
	
	
	// module
	exports.push([module.id, ".positive {\n  color: #fff21e;\n}\n.bookWrapper {\n  margin-top: 12px;\n}\n.bookWrapper .col1 {\n  width: 500px;\n  margin-left: 64px;\n}\n.bookWrapper .col2 {\n  width: 300px;\n}\n.formWrap {\n  background-color: #fff;\n  padding: 28px 24px 36px;\n  margin-bottom: 30px;\n}\n.formWrap .btnRow {\n  margin-top: 80px;\n}\n.bg {\n  text-align: center;\n  display: inline-block;\n  margin: 0 auto;\n}\n.coupon_texts {\n  position: absolute;\n  bottom: 80px;\n  left: 124px;\n  line-height: 1.6;\n  color: #fff;\n  font-size: 14px;\n}\n.coupon_texts p {\n  margin-bottom: 4px;\n}\n.recieveForm {\n  width: 320px;\n  margin: 54px auto 36px;\n}\n.recieveForm .btn-block {\n  margin-top: 8px;\n  font-size: 20px;\n}\n.recieveForm .error-rows {\n  height: 18px;\n}\n.recommend-texts {\n  width: 456px;\n  font-size: 18px;\n  line-height: 2.2;\n  color: #666;\n}\n.recieveTxts {\n  margin-top: 50px;\n  margin-bottom: 100px;\n  font-size: 22px;\n  color: #f87875;\n}\n", ""]);
	
	// exports


/***/ }

});
//# sourceMappingURL=couponReceive.js.map