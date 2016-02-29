var $ = window.$ || require("jquery");

var modalBox = require("../modalBox");
require("../validator");

//工具类方法
var util = require("../util");
var tmpl_login = require("./tmpl.ejs");

var userUtil = require("../userUtil");

if(!window.mReg){
	window.mReg = require("../reg");	
}

if(!window.mForget){
	window.mForget = require("../forgetPw");	
}

var login = {
	init : function(){
		var that = this;

		$("#login").on("click",function(e){
			e.preventDefault();
			var btn = $(e.target);
			that.Box.call(that,btn);
		});
	},

	Box : function(btn){
		var that = this;
		modalBox( btn, {
	        html:tmpl_login({}),
	        klass : 'w540 shadow',
	        closeByOverlay : false,
	        completeCallback : function(){
	        	var self = btn; 
	        	//去注册
	        	$("#m_goReg").on("click",function(e){
	        		e.preventDefault();
	        		var btn = $(this);
	        		$(self).data("modalBox")._close(true);

	        		setTimeout(function(){
	        			mReg.Box(btn);
	        		},400);

	        	});

	        	//忘记密码
	        	$("#m_goForgetPw").on("click",function(e){
	        		e.preventDefault();
	        		var btn = $(this);
	        		$(self).data("modalBox")._close(true);

	        		setTimeout(function(){
	        			mForget.Box(btn);
	        		},400);

	        	});

	        	that.loginEvt();
	        }
	    });
	},

	loginEvt : function(){
		var that = this;
		$("#loginForm").validator({
			errorParent: '.row',
		    successCallback: function(e) {
		      var target = $(e.target).closest('.btn');
		      //执行到下一步操作
		      that.postLoginInfo(target, $("#loginForm"));

		    },
		    focusinCallback: function() {
	          userUtil.hideError($('.errTxt'));
	          $(".row").removeClass('errorIpt');
	        },
	        errorCallback: function(unvalidFields) {
	          var oError = $('.errTxt');
	          userUtil.showErrorMsg($("#loginForm"), oError, unvalidFields);
	        }
		});
	},

	postLoginInfo : function(btn,oForm){
		var that = this;
	    btn.addClass('disabled');
	    $.ajax({
	        url: "/v2/client/auth/signin",
	        type: "post",
	        data: JSON.stringify({
	          mobile: $("[name=mobile]").val(),
	          pw: userUtil.encrypt($("[name=pw]").val())
	        }),
	        contentType: "application/json",
	        success: function(res) {
	          if (typeof res == "string") {
	            var res = $.parseJSON(res);
	          }

	          if(res.code == 200){
	          	setTimeout(function(){
	          		//window.location = "/";
	          	},400);
	          }else{
	          	var oError = $('.errTxt');
	          	btn.removeClass('disabled');
	          	userUtil.showError(oError, res.msg);
	          	return;
	          }

	        },
	        error : function(){
	        	_alert("网络错误，请稍后再试");
	        	btn.removeClass('disabled');
	        	return;
	        }
		});
  	}
};


module.exports = login;