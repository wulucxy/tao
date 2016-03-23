/* 建议这里都引入 */
require('../../assets/less/common.less');
require('./index.less');
var $ = window.$ || require("jquery");

//工具类方法
var util = require("../../assets/components/util");

//公共方法
var common = require("../../assets/components/common");


/* 可选，视需求而定 */
var Cookies = require("js-cookie");
var tmpl = require("./templates/tmpl.ejs");

require("../../assets/components/validator");

//保存所有答案
var allItems = 210;
var answer = Cookies.get("answer") ? Cookies.get("answer").split("") : [];


if(answer.length == allItems){
	Cookies.remove('answer');
	resetTest();
}else if(answer.length){
	$("#goProTest").text("上次已使用，继续测试").attr({"href" : "/box/plan/major_exam2"});
}else{
	resetTest();
}

function resetTest(){
	answer = [];
	$("#goProTest").text("填写授权码，并开始测试");
	$("#goProTest").on("click",function(e){
		e.preventDefault();
		var btn = $(e.target);
		btn.addClass("disabled");
		verifyCodeModal(btn);
	});
}

function subCodeAction(btn,oForm){
	answer = [];
	var provinceId = $("[name=province]").val();
	$.ajax({
		url : preServer+provinceId + "/tzy/mtest/code",
		type  : "post",
		contentType: "application/json",
		data : JSON.stringify({code : $("#code").val()}),
		success : function(res){
			if(typeof res == "string"){
				var res = $.parseJSON(res);
			}

			//点击确定要记录用户信息，方便下次进来不需要再次录入验证码
			if(res.code==1){
				//保存cookie,0是特殊的
				answer.push("0");
				Cookies.set("answer",answer.join(""),{expire : 356});

				window.location.href = "/box/plan/major_exam2";
			}else{
				common.showError($("#errTxt"),res.msg);
				return;
			}
		},
		error : function(err){
			console.log(err);
		}
	})

};

function verifyCodeModal(btn){
	modalBox(btn,{
		html:tmpl({}),
        klass : 'w540 shadow',
        closeByOverlay : false,
        completeCallback : function(){
        	var self = btn; 
        	
        	$("#verifyCodeForm").validator({
        		errorParent: '.row',
        		focusinCallback: function() {
		          common.hideError($('.errTxt'));
		        },
			    successCallback: function(e) {
			      var target = $(e.target).closest('.btn');
			      //执行到下一步操作
			      subCodeAction(target,$("#verifyCodeForm"));

			    },
			  
		        errorCallback: function(unvalidFields) {
		         
		        }
        	});
        	
        },
        closeCallback : function(){
        	btn.removeClass("disabled");
        }

	});
}