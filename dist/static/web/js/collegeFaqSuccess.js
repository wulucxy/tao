webpackJsonp([15],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	/* 建议这里都引入 */
	__webpack_require__(17);
	__webpack_require__(174);
	var $ = window.$ || __webpack_require__(39);
	
	//工具类方法
	var util = __webpack_require__(40);
	
	//公共方法
	var common = __webpack_require__(41);
	
	
	var book = {
	
		init : function(){
			var that = this;
			util.count($(".count"),3,function(){
				history.back(-1);
			});
		}
	
	};
	
	
	book.init();
	
	
	


/***/ },

/***/ 174:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(175);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(36)(content, {});
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

/***/ 175:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(19)();
	// imports
	
	
	// module
	exports.push([module.id, ".orange {\n  color: #f4b64f;\n}\n.blue {\n  color: #61c0e2;\n}\n.bookWrapper {\n  margin-top: 12px;\n}\n.bookWrapper .col1 {\n  width: 590px;\n}\n.bookWrapper .col2 {\n  width: 300px;\n}\n.formWrap {\n  background-color: #fff;\n  padding: 28px 24px 36px;\n  margin-bottom: 30px;\n}\n.formWrap .btnRow {\n  margin-top: 80px;\n}\n.bookRes {\n  margin-top: 80px;\n}\n.rTxt {\n  margin: 28px 0 24px;\n}\n.f15 {\n  font-size: 15px;\n}\n", ""]);
	
	// exports


/***/ }

});
//# sourceMappingURL=collegeFaqSuccess.js.map