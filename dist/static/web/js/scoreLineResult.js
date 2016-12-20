webpackJsonp([46],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	/* 建议这里都引入 */
	__webpack_require__(19);
	__webpack_require__(434);
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

/***/ 434:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(435);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(38)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/autoprefixer-loader/index.js!./../../../node_modules/less-loader/index.js!./index.less", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/autoprefixer-loader/index.js!./../../../node_modules/less-loader/index.js!./index.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 435:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(21)();
	// imports
	
	
	// module
	exports.push([module.id, ".orange {\n  color: #f4b64f;\n}\n.dbWrapper {\n  margin-top: 12px;\n}\n.db .formWrap > .col1 {\n  width: 590px;\n}\n.db .formWrap > .col2 {\n  width: 300px;\n}\n.formWrap {\n  background-color: #fff;\n  padding: 28px 32px 36px;\n  margin-bottom: 30px;\n}\n.scoreIcon {\n  vertical-align: middle;\n  display: inline-block;\n  width: 18px;\n  height: 18px;\n  background-image: url(" + __webpack_require__(436) + ");\n  background-position: 0 0;\n}\n.icon-book {\n  background-position: 0 0;\n}\n.icon-list {\n  background-position: -18px 0;\n}\n.icon-school {\n  background-position: -36px 0;\n}\n.row label + .col2 {\n  margin-left: 100px;\n  width: 374px;\n}\n.formWrap .footerCnt {\n  border-top: none;\n}\n.formWrap .footerCnt .btnRow {\n  text-align: left;\n  margin-left: 100px;\n}\n.hidden {\n  display: none !important;\n}\n.error .input {\n  border-color: #ccc;\n}\n.errorIpt .input {\n  border-color: #ec5524;\n}\n.errInfo {\n  padding-left: 100px;\n}\n.error .p-error {\n  display: none;\n}\n.errorIpt.unvalid .p-error {\n  display: inline-block;\n}\n#charts {\n  height: 320px;\n  margin-bottom: 24px;\n}\n.scoreLineTxt {\n  line-height: 1.8;\n  margin-top: 20px;\n  color: #333;\n}\n.chartTitle {\n  font-size: 18px;\n  margin-bottom: 16px;\n  color: #333;\n  font-weight: normal;\n}\n", ""]);
	
	// exports


/***/ },

/***/ 436:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/web/img/scoreLine.png"

/***/ }

});
//# sourceMappingURL=scoreLineResult.js.map