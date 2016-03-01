webpackJsonp([9],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	/* 建议这里都引入 */
	__webpack_require__(12);
	__webpack_require__(129);
	var $ = window.$ || __webpack_require__(32);
	
	//工具类方法
	var util = __webpack_require__(33);
	
	//公共方法
	var common = __webpack_require__(34);
	
	/* 具体实现 */
	
	// 表单验证组件
	__webpack_require__(49);
	
	// 弹窗组件
	var modalBox = __webpack_require__(36);
	
	//弹窗模板
	var tmpl_detail = __webpack_require__(99);
	var tmpl_questions = __webpack_require__(100);
	
	
	//切换顶部nav高亮
	common.switchNav(1);
	
	//checkbox定制
	$('.label_radio').click(function(){
	  util.setupLabel();
	});
	
	util.setupLabel();
	
	$("[data-trigger]").on("click",function(e){
	    e.preventDefault();
	    var btn = $(e.target).closest(".trigger");
	    var tmpl = btn.data("trigger") == "detail" ? tmpl_detail : tmpl_questions;
	
	    modalBox( btn.get(0), {
	          html:tmpl(),
	          klass : 'w540 shadow',
	          closeByOverlay : false,
	          completeCallback : function(){ 
	            
	          }
	      });
	});


/***/ },

/***/ 129:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }

});
//# sourceMappingURL=evaluateStep2.js.map