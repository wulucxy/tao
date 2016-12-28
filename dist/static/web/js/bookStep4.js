webpackJsonp([9],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	/* 建议这里都引入 */
	__webpack_require__(16);
	__webpack_require__(144);
	var $ = window.$ || __webpack_require__(38);
	
	//工具类方法
	var util = __webpack_require__(39);
	
	//公共方法
	var common = __webpack_require__(40);
	
	
	//自定义功能写下面
	//弹窗模板
	var tmpl_detail = __webpack_require__(129);
	var tmpl_questions = __webpack_require__(130);
	
	var provinceId = $("[name=province]").val();
	
	var book = {
	
		init : function(){
	
			this.detailTrigger();
			this.bindEvt();
		},
	
		detailTrigger : function(){
			//详情弹窗
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
		},
	
		bindEvt : function(){
			var that = this;
			util.setupLabel();
	
			$("#nBtn").on("click",function(e){
				e.preventDefault();
				var btn = $(e.target).closest(".btn");
				if(btn.hasClass("disabled")) return;
				btn.addClass("disabled");
				that.submitFunc(btn);
			});
		},
	
		submitFunc : function(btn){
			var that = this;
	
			var _data = {
				province : $("[name=province]").val(),
				mobile : $("[name=mobile]").val(),
				courseType : $("[name=courseType]:checked").val(),
				batch : $("[name=batch]:checked").val(),
				score : $("[name=score]").val(),
				place : $("[name=place]").val(),
				c : $("[name=city]:checked").map(function(idx,ele){
					return {"name":$(ele).attr("cityname"),"code":$(ele).val()}
				}).get(),
				majorList : $("[name=majorId]:checked").map(function(idx,ele){
					return {"majorName":$(ele).attr("majorname"),"majorId":$(ele).val()}
				}).get(),
				subjects : $("[name=subjectId]:checked").map(function(idx,ele){
					return {"name":$(ele).attr("subjectname"),"majorId":$(ele).val()}
				}).get()
			};
	
	
			$.ajax({
				url : preServer+provinceId+"/tzy/plan/wishes/step4",
				type : "post",
				contentType: "application/json",
	    		data : JSON.stringify(_data),
				success : function(res){
					if(typeof res == "string"){
						var res = $.parseJSON(res);
					}
	
					 if(res.code==1 && res.result.planId){
	                    window.location = "/pay/wishes?planId="+res.result.planId;
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
		}
	};
	
	
	book.init();
	


/***/ },

/***/ 144:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }

});
//# sourceMappingURL=bookStep4.js.map