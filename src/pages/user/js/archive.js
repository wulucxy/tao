var $ = window.$ || require("jquery");
require("../../../assets/components/validator");

//公共方法
var common = require("../../../assets/components/common");

var archive = {
	init : function(){
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
	}


};

module.exports = archive;