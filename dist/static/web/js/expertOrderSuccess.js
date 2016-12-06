webpackJsonp([23],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	/* 建议这里都引入 */
	__webpack_require__(16);
	__webpack_require__(208);
	var $ = window.$ || __webpack_require__(38);
	
	//工具类方法
	var util = __webpack_require__(39);
	
	//公共方法
	var common = __webpack_require__(40);
	
	
	var book = {
	
		init : function(){
			var that = this;
			util.count($(".count"),3,function(){
				window.location = "/appointment/create";
			});
		}
	
	};
	
	
	book.init();
	
	
	


/***/ },

/***/ 208:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }

});
//# sourceMappingURL=expertOrderSuccess.js.map