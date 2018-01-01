webpackJsonp([39],{

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	/* 建议这里都引入 */
	__webpack_require__(22);
	__webpack_require__(291);
	var $ = window.$ || __webpack_require__(45);
	
	//工具类方法
	var util = __webpack_require__(46);
	
	//公共方法
	var common = __webpack_require__(47);
	
	
	//自定义功能写下面

/***/ }),

/***/ 291:
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(292);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(42)(content, {});
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

/***/ 292:
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(24)();
	// imports
	
	
	// module
	exports.push([module.id, ".blue {\n  color: #61c0e2;\n}\n.articleWrap {\n  margin-top: 28px;\n  padding-bottom: 100px;\n}\n.articleWrap .moment {\n  margin-top: 8px;\n}\n.articleWrap .videoWrap {\n  margin-top: 32px;\n  margin-bottom: 32px;\n}\n.labelList .labelItem {\n  margin-bottom: 32px;\n}\n", ""]);
	
	// exports


/***/ })

});
//# sourceMappingURL=majorUnscrambleDetail.js.map