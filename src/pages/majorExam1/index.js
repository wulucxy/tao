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
	_alert("你已经完成全部问题");
	setTimeout(function(){
		//window.location = "/";
	},3000);
}else if(answer.length){
	$("#goProTest").text("上次已使用，继续测试").attr({"href" : "/pro2"});
}else{
	$("#goProTest").text("开始测试");
	$("#goProTest").on("click",function(e){
		e.preventDefault();
		var btn = $(e.target);
		btn.addClass("disabled");
		verifyCodeModal(btn);
	});
}


function verifyCodeModal(btn){
	modalBox(btn,{
		html:tmpl({}),
        klass : 'w540 shadow',
        closeByOverlay : false,
        completeCallback : function(){
        	var self = btn; 
        	
        	$("#verifyCodeForm").validator({
        		errorParent: '.row',
			    successCallback: function(e) {
			      var target = $(e.target).closest('.btn');
			      //执行到下一步操作
			      

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