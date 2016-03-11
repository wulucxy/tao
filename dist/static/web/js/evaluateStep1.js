webpackJsonp([9],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	/* 建议这里都引入 */
	__webpack_require__(14);
	__webpack_require__(135);
	var $ = window.$ || __webpack_require__(36);
	
	//工具类方法
	var util = __webpack_require__(37);
	
	//公共方法
	var common = __webpack_require__(38);
	
	/* 具体实现 */
	// 验证组件
	__webpack_require__(53);
	
	//弹窗模板
	var tmpl_detail = __webpack_require__(105);
	var tmpl_questions = __webpack_require__(106);
	
	//checkbox定制
	$('.label_radio').click(function(){
	  util.setupLabel();
	});
	
	util.setupLabel();
	
	//切换顶部nav高亮
	common.switchNav(1);
	
	var provinceId = $("[name=province]").val();
	
	function subFunc(btn,oForm){
	  var _data = {
	    courseType : $("[name=courseType]").val(),
	    batch : $("[name=batch]").val(),
	    socre : $("[name=socre]").val(),
	    place : $("[name=place]").val()
	  };
	  $.ajax({
	    url : "/v2/client/"+provinceId+"/tzy/plan/assessment/step1",
	    type : "post",
	    contentType: "application/json",
	    data : JSON.stringify(_data),
	    success : function(res){
	      if(typeof res == "string"){
	        var res = $.parseJSON(res);
	      }
	
	      if(!res.code){
	        window.location = "/box/plan/evaluate_step2";
	        return false;
	      }else{
	        common.showError($('.errTxt'),res.msg || "网络错误,请稍后重试");
	        return;
	      }
	    },
	    error : function(res){
	       common.showError($('.errTxt'),res.msg || "网络错误,请稍后重试");
	    }
	  });
	
	}
	
	// 表单校验
	$("#assessForm_1").validator({
		errorParent: '.row',
	    successCallback: function(e) {
	      var target = $(e.target).closest('.btn');
	      //执行到下一步操作
	      subFunc(target,$("#assessForm_1"));
	
	    },
	    focusinCallback: function() {
	      var _ele = $(this);
	      common.hideError($('.errTxt'));
	    },
	
	    errorCallback: function(unvalidFields) {
	      var oError = $('.errTxt');
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

/***/ 135:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }

});
//# sourceMappingURL=evaluateStep1.js.map