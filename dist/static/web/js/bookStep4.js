webpackJsonp([5],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	/* 建议这里都引入 */
	__webpack_require__(14);
	__webpack_require__(119);
	var $ = window.$ || __webpack_require__(34);
	
	//工具类方法
	var util = __webpack_require__(35);
	
	//公共方法
	var common = __webpack_require__(36);
	
	
	//自定义功能写下面
	//弹窗模板
	var tmpl_detail = __webpack_require__(104);
	var tmpl_questions = __webpack_require__(105);
	
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
			$.ajax({
				url : "/v2/client/"+provinceId+"/tzy/plan/wishes/step4",
				type : "get",
				success : function(res){
					if(typeof res == "string"){
						var res = $.parseJSON(res);
					}
	
					 if(!res.code){
	                    window.location = "/pay";
	                    return false;
	                }else{
	                    warn(res.msg);
	                    btn.removeClass("disabled");
	                    return false;
	                }
	            },
	            error : function(err){
	            	btn.removeClass("disabled");
	                warn(err || "网络错误，请稍后重试");
	            }
			});
		}
	};
	
	
	book.init();
	


/***/ },

/***/ 119:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }

});
//# sourceMappingURL=bookStep4.js.map