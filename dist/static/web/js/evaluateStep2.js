webpackJsonp([9],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	/* 建议这里都引入 */
	__webpack_require__(11);
	__webpack_require__(130);
	var $ = window.$ || __webpack_require__(31);
	
	//工具类方法
	var util = __webpack_require__(32);
	
	//公共方法
	var common = __webpack_require__(33);
	
	/* 具体实现 */
	
	// 表单验证组件
	__webpack_require__(48);
	
	// 弹窗组件
	var modalBox = __webpack_require__(35);
	
	//弹窗模板
	var tmpl_detail = __webpack_require__(100);
	var tmpl_questions = __webpack_require__(101);
	
	
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

/***/ 130:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }

});
//# sourceMappingURL=evaluateStep2.js.map