/* 建议这里都引入 */
require('../../assets/less/common.less');
require('./index.less');
var $ = window.$ || require("jquery");

//工具类方法
var util = require("../../assets/components/util");

//公共方法
var common = require("../../assets/components/common");

require("../../assets/components/validator");

var userUtil = require("../../assets/components/userUtil");
var verify = require("../../assets/components/verifyCode");

var telReg = /^1\d{10}$/;

var accessToken = $('[name=accessToken]').val();
var bangUrl = $('[name=bangUrl]').val();
var openId = $('[name=openId]').val();
var uid = $('[name=uid]').val();

var bang = {
	init: function(){
		this.bangEvt();
		this.verifyEvt();
	},

	verifyEvt: function(){
		var that = this;
		var oError = $(".errTxt");
	    verify.init(oError);
	},

	bangEvt : function(){
		var that = this;
		$("#bangMobileForm").validator({
			errorParent: '.row',
		    successCallback: function(e) {
		      var target = $(e.target).closest('.btn');
		      //执行到下一步操作
		      that.postRegInfo(target, $("#bangMobileForm"));

		    },
		    focusinCallback: function() {
	          userUtil.hideError($('.errTxt'));
	          $(".row").removeClass('errorIpt');
	        },
	        errorCallback: function(unvalidFields) {
	          var oError = $('.errTxt');
	          // userUtil.showErrorMsg($("#bangMobileForm"), oError, unvalidFields);
	        }
		});
	},

	postRegInfo : function(btn,oForm){
		var that = this;
	    btn.addClass('disabled');
	    var oError = $('.errTxt');

	    var _data = {
	    	code : $("[name=code]").val(),
	        mobile: $("[name=mobile]").val(),
	        province :  $("#provinceId").val()
	    };

	    if(!!openId) _data.openId = openId;
	    if(!!uid) _data.uid = uid;
	    if(!!accessToken) _data.accessToken = accessToken;

	    $.ajax({
	        url: bangUrl,
	        type: "post",
	        contentType: "application/json",
	        data: JSON.stringify(_data),
	        success: function(res) {
	          if (typeof res == "string") {
	            var res = $.parseJSON(res);
	          }

	          if(res.code==1){
	          	setTimeout(function(){
	          		window.location = "/";
	          	},400);
	          }else{
	          	
	          	btn.removeClass('disabled');
	          	userUtil.showError(oError, res.msg);
	          	return;
	          }

	        },
	        error : function(err){
	        	btn.removeClass('disabled');
	        	return;
	        }
		});

	}
};

bang.init();

