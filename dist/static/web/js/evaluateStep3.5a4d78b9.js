webpackJsonp([24],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	/* 建议这里都引入 */
	__webpack_require__(21);
	__webpack_require__(225);
	var $ = window.$ || __webpack_require__(44);
	
	//工具类方法
	var util = __webpack_require__(45);
	
	//公共方法
	var common = __webpack_require__(46);
	
	/* 具体实现 */
	
	// 表单验证组件
	__webpack_require__(62);
	
	// 弹窗组件
	var modalBox = __webpack_require__(48);
	
	//弹窗模板
	var tmpl_detail = __webpack_require__(145);
	var tmpl_questions = __webpack_require__(146);
	
	var __INITWISHES__ = $('.wishInput').map(function(idx, ele){
	  var $ele = $(ele);
	  return {
	    collegeId: $ele.attr('collegeid'),
	    collegeName: $ele.attr('collegename'),
	    majorId:$ele.attr('majorid'),
	    majorName:$ele.attr('majorname'),
	    field:$ele.attr('field')
	  }
	}).get()
	
	var __INITSUBJECTS__ = $('.subjectInput').map(function(idx, ele){
	  var $ele = $(ele);
	  return {
	    name: $ele.attr('name'),
	    code: $ele.val()
	  }
	}).get()
	
	
	//切换顶部nav高亮
	common.switchNav(1);
	
	var provinceId = $("[name=province]").val();
	
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
	
	$("#verifyBtn").on("click",function(e){
	  e.preventDefault();
	  var btn = $(e.target);
	  if(btn.hasClass("disabled")) return;
	  btn.addClass("disabled");
	
	  var _data = {
	    mobile : $("[name=mobile]").val(),
	    province : $("[name=province]").val(),
	    score : $("[name=score]").val(),
	    wishes: __INITWISHES__,
	    subjects: __INITSUBJECTS__
	  };
	
	
	  $.ajax({
	    url : preServer+provinceId +"/tzy/plan/assessment/step3",
	    type : "post",
	    contentType: "application/json",
	    data : JSON.stringify(_data),
	    success : function(res){
	      if(typeof res == "string"){
	        var res = $.parseJSON(res);
	      }
	
	      if(res.code==1 && res.result.planId){
	          window.location = "/box/plan/result?planId="+res.result.planId;
	          return false;
	      }else{
	          warn(res.msg);
	          btn.removeClass("disabled");
	          return false;
	      }
	    },
	      error : function(err){
	        btn.removeClass("disabled");
	        console.log(err);
	      }
	  });
	});
	
	
	


/***/ },

/***/ 225:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }

});
//# sourceMappingURL=evaluateStep3.5a4d78b9.js.map