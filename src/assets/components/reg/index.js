var $ = window.$ || require("jquery");

// 去除缓存
delete require.cache[require.resolve("../login/")];
var login = require("../login/");

require("../validator");

var tmpl = require("./tmpl.ejs");

var userUtil = require("../userUtil");
var verify = require("../verifyCode");

var telReg = /^1\d{10}$/;

// md5处理
var CryptoJS = require('crypto-js');

var reg = {
	init : function(){
		var that = this;
		$("#reg").on("click",function(e){
			e.preventDefault();
			var btn = $(e.target);
			that.Box.call(that,btn);
		});
	},

	Box : function(btn){
		var that = this;


		modalBox( btn.get(0), {
	        html:tmpl({}),
	        klass : 'w540 shadow',
	        closeByOverlay : false,
	        completeCallback : function(){ 
	        	var self = btn; 
	        	//去注册
	        	$("#m_goLogin").on("click",function(e){
	        		e.preventDefault();
	        		var btn = $(this);
	        		$(self).data("modalBox")._close(true);

	        		setTimeout(function(){
	        			login.Box(btn);
	        		},400);

	        	});

	        	var oError = $(".errTxt");

	        	verify.init(oError);

	        	that.regEvt();
	        	
	        }
	    });	
	},

	regEvt : function(){
		var that = this;
		$("#regForm").validator({
			errorParent: '.row',
		    successCallback: function(e) {
		      var target = $(e.target).closest('.btn');
		      //执行到下一步操作
		      that.postRegInfo(target, $("#regForm"));

		    },
		    focusinCallback: function() {
	          userUtil.hideError($('.errTxt'));
	          $(".row").removeClass('errorIpt');
	        },
	        errorCallback: function(unvalidFields) {
	          var oError = $('.errTxt');
	          userUtil.showErrorMsg($("#regForm"), oError, unvalidFields);
	        }
		});
	},

	postRegInfo : function(btn,oForm){
		var that = this;
	    btn.addClass('disabled');
	    $.ajax({
	        url: "/v2/client/auth/signup",
	        type: "post",
	        contentType: "application/json",
	        data: JSON.stringify({
	          code : $("[name=code]").val(),
	          mobile: $("[name=mobile]").val(),
	          pw: userUtil.encrypt($("[name=pw]").val()),
	          province :  $("#provinceId").val()
	        }),
	        success: function(res) {
	          if (typeof res == "string") {
	            var res = $.parseJSON(res);
	          }

	          if(!res.code){
	          	setTimeout(function(){
	          		window.location = "/";
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


module.exports = reg;