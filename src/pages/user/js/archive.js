var $ = window.$ || require("jquery");
require("../../../assets/components/validator");

//公共方法
var common = require("../../../assets/components/common");

var searchSchool = require("../../../assets/components/searchSchool");

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
			selectListCallback : function(li){
				var self = this;

				
				
			}
		});

	}


};

module.exports = archive;