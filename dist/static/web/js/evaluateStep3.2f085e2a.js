webpackJsonp([21],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	/* 建议这里都引入 */
	__webpack_require__(16);
	__webpack_require__(204);
	var $ = window.$ || __webpack_require__(38);
	
	//工具类方法
	var util = __webpack_require__(39);
	
	//公共方法
	var common = __webpack_require__(40);
	
	/* 具体实现 */
	
	// 表单验证组件
	__webpack_require__(56);
	
	// 弹窗组件
	var modalBox = __webpack_require__(42);
	
	//弹窗模板
	var tmpl_detail = __webpack_require__(123);
	var tmpl_questions = __webpack_require__(124);
	
	
	
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
	    courseType : $("[name=courseType]").val(),
	    score : $("[name=score]").val(),
	    batch : $("[name=batch]").val(),
	    place : $("[name=place]").val(),
	    wishes : $.parseJSON($("[name=wishesString]").text())
	  };
	
	  $.each(_data.wishes,function(idx,ele){
	      var majorList = [];
	
	      if(ele.majors){
	        $.each(ele.majors,function(l,n){
	          if(n.majorId && n.majorName){
	             majorList.push({
	              "majorId":n.majorId,
	              "majorName":n.majorName
	             });
	          }
	        });
	
	        ele.majors = majorList;
	      }
	  });
	
	
	
	  $.ajax({
	    url : preServer+provinceId +"/tzy/plan/upgradeAssessment/create",
	    type : "post",
	    contentType: "application/json",
	    data : JSON.stringify(_data),
	    success : function(res){
	      if(typeof res == "string"){
	        var res = $.parseJSON(res);
	      }
	
	      if(res.code==1 && res.result.planId){
	          window.location = "/pay/assessment?planId="+res.result.planId;
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

/***/ 204:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }

});
//# sourceMappingURL=evaluateStep3.2f085e2a.js.map