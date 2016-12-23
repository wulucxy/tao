webpackJsonp([43],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	/* 建议这里都引入 */
	__webpack_require__(19);
	__webpack_require__(291);
	var $ = window.$ || __webpack_require__(41);
	
	//工具类方法
	var util = __webpack_require__(42);
	
	//公共方法
	var common = __webpack_require__(43);
	
	
	//自定义功能写下面

/***/ },

/***/ 291:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(292);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(38)(content, {});
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

/***/ 292:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(21)();
	// imports
	
	
	// module
	exports.push([module.id, ".formWrap {\n  background-color: #fff;\n  padding: 28px;\n  margin-bottom: 30px;\n}\n.lh42 {\n  line-height: 42px;\n  font-size: 16px;\n}\n.sampleSection {\n  margin-bottom: 32px;\n}\n.sampleSection h4 {\n  margin-bottom: 20px;\n}\nh4 {\n  font-weight: normal;\n}\n.table thead tr th {\n  background-color: #fbfafa;\n  font-weight: normal;\n}\n.detailContent {\n  margin-bottom: 24px;\n}\n.detailContent .subTitle {\n  line-height: 44px;\n  font-size: 15px;\n  color: #333;\n}\n.detailContent .index {\n  display: inline-block;\n  font-size: 24px;\n  width: 44px;\n  height: 44px;\n  line-height: 44px;\n  text-align: center;\n  color: #fff;\n  background-color: #e2e2e2;\n  margin-right: 15px;\n}\n.table .collegeInfo {\n  font-size: 12px;\n  line-height: 1.5;\n  color: #555;\n}\n.table .collegeInfo .collegeName {\n  background-color: #e2e2e2;\n  line-height: 2;\n  color: #212121;\n  margin: 6px 12px;\n}\n.subSampleSection {\n  border-bottom: 1px solid #e2e2e2;\n  margin-bottom: 28px;\n  padding-bottom: 32px;\n}\n.subSampleSection:last-child {\n  border-bottom: none;\n  margin-bottom: 0;\n  padding-bottom: 0;\n}\n", ""]);
	
	// exports


/***/ }

});
//# sourceMappingURL=sampleWishes.js.map