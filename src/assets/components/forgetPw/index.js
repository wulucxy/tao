var $ = window.$ || require("jquery");

var modalBox = require("../modalBox");
require("../validator");

// 去除缓存
delete require.cache[require.resolve("../login/")];
var login = require("../login/");

var userUtil = require("../userUtil");
var verify = require("../verifyCode");
var tmpl = require("./tmpl.ejs");

var reg = {

	Box : function(btn){
		var that = this;
		modalBox( btn.get(0), {
	        html:tmpl({}),
	        klass : 'w540 shadow',
	        closeByOverlay : false,
	        completeCallback : function(){
	        	var self = btn; 
	        	placeholder($('input[placeholder],textarea[placeholder]')); 
	        	//去注册
	        	$("#m_goLogin").on("click",function(e){
	        		e.preventDefault();
	        		var btn = $(this);
	        		if(btn.hasClass("disabled")) return;
    				btn.addClass("disabled");
	        		$(self).data("modalBox")._close(true);

	        		setTimeout(function(){
	        			login.Box(btn);
	        			btn.removeClass("disabled");
	        		},400);

	        	});

	        	var oError = $(".errTxt");
	        	verify.init(oError,{type : 1});
	        	that.forgetEvt();
	        }
	    });	
	},

	forgetEvt : function(){
		var that = this;
		$("#forgetPwForm").validator({
			errorParent: '.row',
		    successCallback: function(e) {
		      var target = $(e.target).closest('.btn');
		      //执行到下一步操作
		      that.postforgetInfo(target, $("#forgetPwForm"));

		    },
		    focusinCallback: function() {
	          userUtil.hideError($('.errTxt'));
	          $(".row").removeClass('errorIpt');
	        },
	        errorCallback: function(unvalidFields) {
	          var oError = $('.errTxt');
	          userUtil.showErrorMsg($("#forgetPwForm"), oError, unvalidFields);
	        }
		});
	},

	postforgetInfo : function(btn,oForm){
		var that = this;
	    btn.addClass('disabled');
	    var oError = $('.errTxt');

	    $.ajax({
	        url: preServer+"auth/resetPassword",
	        type: "post",
	        contentType: "application/json",
	        data: JSON.stringify({
	          code : $("[name=code]").val(),
	          mobile: $("[name=mobile]").val(),
	          pw: userUtil.encrypt($("[name=pw]").val())
	        }),
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


module.exports = reg;