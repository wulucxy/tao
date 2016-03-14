/* 建议这里都引入 */
require('../../assets/less/common.less');
require('./index.less');
var $ = window.$ || require("jquery");

//工具类方法
var util = require("../../assets/components/util");

//公共方法
var common = require("../../assets/components/common");

var searchSchool = require("../../assets/components/searchSchool");

require("../../assets/components/validator");

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
			selectListCallback : function(li){
				var self = this;
				self.trigger.val(li.attr("name"));
				self.trigger.closest(".row").find(".hiddenCode").val(li.attr("code"));

				self.trigger.closest(".row").removeClass("errorIpt empty unvalid");

				var subCode = self.trigger.closest(".row").find(".subCode");
				if(subCode.length){
					subCode.val(li.attr("code"));
					subCode.prop("checked",true);
				}
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

		if(!$("[name=contrast]").eq(0).val() && !$("[name=contrast]").eq(0).val()) return false;

		if($("[name=contrast]").eq(0).val() == $("[name=contrast]").eq(1).val()){
			$("[name=contrast]").eq(0).closest(".row").addClass("errorIpt unvalid");
			return false;
		}else{
			$("[name=contrast]").each(function(idx,ele){
				if($(ele).val() == $("[name=primarySub]").val()){
					$(ele).closest(".row").addClass("errorIpt unvalid");
					return false;
				}
			});
			return false;
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
			url : "/v2/client/"+provinceId+"/data/college/threshold/compare?"+parm.join(""),
			type : "get",
			success : function(res){
				if(typeof res == "string"){
					var res = $.parseJSON(res);
				}

				if(res.code){
					 common.showError($('.errTxt'),res.msg || "网络错误,请稍后重试");
					 return;
				}	

				//分数线对比结果页
				window.location = "/";
				return false;
			},
			error : function(err){
				common.showError($('.errTxt'),res.msg || "网络错误,请稍后重试");
			}
		});
	}	
};


score.init();


 