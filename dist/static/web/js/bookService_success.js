webpackJsonp([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	/* 建议这里都引入 */
	__webpack_require__(11);
	__webpack_require__(96);
	var $ = window.$ || __webpack_require__(31);
	
	//工具类方法
	var util = __webpack_require__(32);
	
	//公共方法
	var common = __webpack_require__(33);
	
	
	var book = {
	
		init : function(){
			var that = this;
			util.count($(".count"),3,function(){
				window.location = "/book";
			});
		}
	
	};
	
	
	book.init();
	
	
	


/***/ },

/***/ 96:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }

});
//# sourceMappingURL=bookService_success.js.map