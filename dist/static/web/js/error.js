webpackJsonp([5],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	/* 建议这里都引入 */
	__webpack_require__(13);
	__webpack_require__(122);
	var $ = window.$ || __webpack_require__(33);
	
	//工具类方法
	var util = __webpack_require__(34);
	
	//公共方法
	var common = __webpack_require__(35);
	
	
	//自定义功能写下面
	util.count($(".count"),5,function(){
		window.location = "/";
	})

/***/ },

/***/ 122:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(123);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(29)(content, {});
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

/***/ 123:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(15)();
	// imports
	
	
	// module
	exports.push([module.id, "html,\nbody {\n  height: 100%;\n}\nbody {\n  background-color: #cfebf4;\n}\n.mainContainer,\n.content {\n  height: 100%;\n  color: #33788e;\n}\n.mt48 {\n  margin-top: 48px;\n}\n.mt32 {\n  margin-top: 32px;\n}\n.content {\n  text-align: center;\n}\n.errWrapper {\n  display: inline-block;\n  zoom: 1;\n  *display: inline;\n}\n.btn-mid {\n  font-size: 16px;\n}\n", ""]);
	
	// exports


/***/ }

});
//# sourceMappingURL=error.js.map