webpackJsonp([10],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	/* 建议这里都引入 */
	__webpack_require__(14);
	__webpack_require__(151);
	var $ = window.$ || __webpack_require__(36);
	
	//工具类方法
	var util = __webpack_require__(37);
	
	//公共方法
	var common = __webpack_require__(38);
	
	
	//自定义功能写下面
	// $(".list-group-item").on("mouseenter",function(){
	// 	$(this).siblings().removeClass("active");
	// 	$(this).addClass("active");
	// }).on("mouseleave",function(){
	
	// })

/***/ },

/***/ 151:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(152);
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

/***/ 152:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(16)();
	// imports
	
	
	// module
	exports.push([module.id, ".orange {\n  color: #f4b64f;\n}\n.faqWrapper {\n  margin-top: 12px;\n}\n.formWrap > .col1 {\n  width: 590px;\n}\n.formWrap > .col2 {\n  width: 300px;\n}\n.formWrap {\n  background-color: #fff;\n  padding: 32px 24px 36px;\n  margin-bottom: 30px;\n}\n.list-group-item {\n  color: #555;\n  font-size: 15px;\n  line-height: 23px;\n}\n.list-group-item .body {\n  display: block;\n  margin-left: 232px;\n}\n.icon-right {\n  width: 13px;\n  height: 23px;\n  background-position: -43px 0;\n}\n.active .icon-right {\n  width: 13px;\n  height: 23px;\n  background-position: -30px 0;\n}\n.faqList {\n  margin-bottom: 24px;\n}\n.faqList h4 {\n  color: #61c0e2;\n  font-weight: normal;\n  margin-bottom: 20px;\n  font-size: 18px;\n}\n.faqList .more > a {\n  color: #555;\n  font-size: 15px;\n}\n.faqList .more > a:hover {\n  color: #333;\n}\n.pre .list-group-item .fr {\n  margin-right: 36px;\n}\n.history .list-group-item .fr {\n  margin-top: 12px;\n}\n", ""]);
	
	// exports


/***/ }

});
//# sourceMappingURL=collegeFaq.js.map