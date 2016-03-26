var $ = window.$ || require("jquery");
require("../../../assets/components/validator");

//公共方法
var common = require("../../../assets/components/common");

var searchSchool = require("../../../assets/components/searchSchool");
//provinceId
var provinceId = $("[name=province]").val();

var archive = {
	init : function(options){
		//保存参数
		this.options = options;

		$("#myInfoForm").validator({
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

		this.bindEvt();
	},

	bindEvt : function(){
		this.addSchool();
	},

	addSchool : function(){
		var o = this.options;
		searchSchool.init({
			el : ".addSchool",
			provinceId : o.provinceId,
			url : "/v2_1/client/"+provinceId+"/highSchool/search",
			selectListCallback : function(li){
				var self = this;
				$(".btn-close").trigger("click");
				$(".addSchool").val(li.attr("name"));
				$(".addSchool").attr("code",li.attr("code"));
				$(".addSchool").closest(".row").removeClass("error empty")
			}
		});

	}


};

module.exports = archive;