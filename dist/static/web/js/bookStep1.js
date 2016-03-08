webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	/* 建议这里都引入 */
	__webpack_require__(13);
	__webpack_require__(30);
	var $ = window.$ || __webpack_require__(33);
	
	//工具类方法
	var util = __webpack_require__(34);
	
	//公共方法
	var common = __webpack_require__(35);
	
	/* 具体实现 */
	// 验证组件
	__webpack_require__(50);
	
	//弹窗模板
	var tmpl_detail = __webpack_require__(96);
	var tmpl_questions = __webpack_require__(97);
	
	//checkbox定制
	$('.label_radio').click(function(){
	  util.setupLabel();
	});
	
	util.setupLabel();
	
	//切换顶部nav高亮
	common.switchNav(1);
	
	// 表单校验
	$("#assessForm_1").validator({
		errorParent: '.row',
	    successCallback: function(e) {
	      var target = $(e.target).closest('.btn');
	      //执行到下一步操作
	      //
	
	    },
	    focusinCallback: function() {
	      var _ele = $(this);
	      common.hideError($('.errTxt'));
	    },
	
	    errorCallback: function(unvalidFields) {
	      var oError = $('.errTxt');
	      common.showError($('.errTxt'));
	    }
	});
	
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

/***/ 30:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }

});
//# sourceMappingURL=bookStep1.js.map