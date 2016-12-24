webpackJsonp([46],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	/* 建议这里都引入 */
	__webpack_require__(19);
	__webpack_require__(432);
	var $ = window.$ || __webpack_require__(41);
	
	//工具类方法
	var util = __webpack_require__(42);
	
	//公共方法
	var common = __webpack_require__(43);
	
	var searchSchool = __webpack_require__(181);
	
	__webpack_require__(59);
	
	//checkbox定制
	$('.label_radio').click(function(){
	  util.setupLabel();
	});
	
	util.setupLabel();
	
	//切换顶部nav高亮
	common.switchNav(2);
	
	var provinceId = $("[name=province]").val();
	
	var score = {
	
		init : function(){
			searchSchool.init({
				el : ".addSchool",
				provinceId : provinceId,
				selectListCallback : function(li){
					var self = this;
	
					//如果选择的是对比类型
					if(self.trigger.hasClass("sub")){
						if(li.attr("code") == $("[name=primaryCode]").val()){
							warn("请选择不同的学校进行对比");
							return;
						}else if(li.attr("name") == $(".sub").not(self.trigger).val()){
							warn("请选择不同的学校进行对比");
							return;
						}
					}else{	//如果选择的是主类型
						var pName = li.attr("name"),
							pSame;
						$.each($(".sub"),function(idx,ele){
							if(pName == ele.value){
								warn("请选择不同的学校进行对比");
								pSame = true;
								return false;
							}
						});
	
						if(!!pSame) return false;
					}
	
					$(".btn-close").trigger("click");
	
					self.trigger.val(li.attr("name"));
					self.trigger.closest(".row").find(".hiddenCode").val(li.attr("code"));
	
					self.trigger.closest(".row").removeClass("errorIpt empty unvalid");
	
					var subCode = self.trigger.closest(".row").find(".subCode");
					if(subCode.length){
						subCode.val(li.attr("code"));
						subCode.prop("checked",true);
					}
	
					//需要增加不能同时选择同所学校的判断
					
				}
			});
	
			this.bindEvt();
		},
	
		bindEvt : function(){
			var that = this;
	
			$("#scorelineForm").validator({
				errorParent: '.row',
			    successCallback: function(e) {
			      var target = $(e.target).closest('.btn');
			      //执行到下一步操作
			      if(that.checkStatus()){
			      	that.subFunc(target,$("#scorelineForm"));
			      }
	
			    },
			    focusinCallback: function() {
			      var _ele = $(this);
			      common.hideError($('.errTxt'));
			    },
	
			    errorCallback: function(unvalidFields) {
			      var oError = $('.errTxt');
			      that.unvalidFieldsCallback(unvalidFields);
			    }
			});
		},
	
		checkStatus : function(){
			var that = this;
	
			if(!$("[name=contrast]").eq(0).val() && !$("[name=contrast]").eq(1).val()) return false;
	
			if($("[name=contrast]").eq(0).val() == $("[name=contrast]").eq(1).val()){
				$("[name=contrast]").eq(0).closest(".row").addClass("errorIpt unvalid");
				return false;
			}else{
				var passed = true;
				$("[name=contrast]").each(function(idx,ele){
					if($(ele).val() == $("[name=primarySub]").val()){
						$(ele).closest(".row").addClass("errorIpt unvalid");
						passed = false;
						return false;
					}
				});
				return passed;
			}
			return true;
		},
		
		unvalidFieldsCallback : function(unvalidFields){
			$.each(unvalidFields,function(idx,ele){
				$(ele).closest(".row").addClass("errorIpt");
			});
		},
	
		subFunc : function(btn,oForm){
			var that = this;
	
			var parm = [];
			parm.push("courseType="+$("[name=courseType]:checked").val());
			parm.push("batch="+$("[name=batch]:checked").val());
			parm.push("primary="+$("[name=primaryCode]").val());
			parm.push("second="+$("[name=secondCode]").val());
			parm.push("third="+$("[name=thirdCode]").val());
	
	
			$.ajax({
				url : preServer+provinceId+"/data/college/threshold/compare?"+parm.join("&"),
				type : "get",
				success : function(res){
					if(typeof res == "string"){
						var res = $.parseJSON(res);
					}
	
					if(res.code!=1){
						 warn(res.msg);
						 return;
					}	
	
					//分数线对比结果页
					window.location = "/";
					return false;
				},
				error : function(err){
					console.log(err);
				}
			});
		}	
	};
	
	
	score.init();
	
	
	 

/***/ },

/***/ 432:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }

});
//# sourceMappingURL=scoreLineResult.99c3effb.js.map