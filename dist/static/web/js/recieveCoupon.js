webpackJsonp([35],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	/* 建议这里都引入 */
	__webpack_require__(14);
	__webpack_require__(245);
	var $ = window.$ || __webpack_require__(36);
	
	//工具类方法
	var util = __webpack_require__(37);
	
	//公共方法
	var common = __webpack_require__(38);
	
	__webpack_require__(54);
	
	$("#recieveCouponForm").validator({
		errorParent: '.row',
	    successCallback: function(e) {
	      var target = $(e.target).closest('.btn');
	      //执行到下一步操作
	
	    },
	    focusinCallback: function() {
	      
	    },
	    errorCallback: function(unvalidFields) {
	      var oError = $('.errTxt');
	      
	    }
	});

/***/ },

/***/ 245:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(246);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(33)(content, {});
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

/***/ 246:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(16)();
	// imports
	
	
	// module
	exports.push([module.id, ".positive {\n  color: #fff21e;\n}\n.bookWrapper {\n  margin-top: 12px;\n}\n.bookWrapper .col1 {\n  width: 500px;\n  margin-left: 64px;\n}\n.bookWrapper .col2 {\n  width: 300px;\n}\n.formWrap {\n  background-color: #fff;\n  padding: 28px 24px 36px;\n  margin-bottom: 30px;\n}\n.formWrap .btnRow {\n  margin-top: 80px;\n}\n.bg {\n  text-align: center;\n  display: inline-block;\n  margin: 0 auto;\n}\n.coupon_texts {\n  position: absolute;\n  bottom: 80px;\n  left: 124px;\n  line-height: 1.6;\n  color: #fff;\n  font-size: 14px;\n}\n.coupon_texts p {\n  margin-bottom: 4px;\n}\n.recieve {\n  width: 320px;\n  margin: 54px auto 36px;\n}\n.recieve .btn-block {\n  margin-top: 8px;\n  font-size: 20px;\n}\n.recieve .error-rows {\n  height: 18px;\n}\n", ""]);
	
	// exports


/***/ }

});
//# sourceMappingURL=recieveCoupon.js.map