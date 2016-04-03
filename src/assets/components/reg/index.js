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
	        startCallback : function(){
	        	$.ajax({
	        		url : "/system/area",
	        		type : "get",
	        		contentType: "application/json",
	        		success : function(res){
	        			if(typeof res == "string"){
	        				var res = $.parseJSON(res);
	        			}

	        			if(res.code!=1){
							warn(res.msg);
							return;
						}

						var res = res.result;
	        			var optionList = [];

	        			$.each(res,function(idx,ele){
	        				optionList.push('<option value='+ele.code+'>'+ele.name+'</option>');
	        			});

	        			$("#provinceId").empty();
	        			$("#provinceId").append(optionList.join(""));
	        		},
	        		error : function(){
	        			warn("网络请求失败，请稍后重试");
	        		}
	        	});
	        },
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
	    var oError = $('.errTxt');
	    $.ajax({
	        url: preServer+"/auth/signup",
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