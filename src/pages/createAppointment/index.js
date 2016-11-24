/* 建议这里都引入 */
require('../../assets/less/common.less');
require('./index.less');
var $ = window.$ || require("jquery");

//工具类方法
var util = require("../../assets/components/util");

//公共方法
var common = require("../../assets/components/common");

/* 具体实现 */
// 验证组件
require("../../assets/components/validator");
var requestArea = require("../../assets/components/requestArea");
var tmpl = require('../../assets/templates/pay.ejs');

//pay
var pay = require("../../assets/components/pay");

var province = $("[name=province]").val();

//checkbox定制
$('.label_radio').click(function(){
  util.setupLabel();
});

util.setupLabel();


var educationPlan = {
	
	subFunc: function(btn,oForm){
		
		var data = {
			name : $("[name=name]").val(),
			mobile : $("[name=mobile]").val(),
			city : $("[name=city]").val(),
			appointmentType: $('[name=appointmentType]:checked').val()
		};

		$.ajax({
			url : preServer+province+"/tzy/appointment/create",
			type : "post",
			contentType: "application/json",
			data : JSON.stringify(data),
			success : function(res){
				if(typeof res == "string"){
					var res = $.parseJSON(res);
				}

				if(res.code!=1){
					warn(res.msg);
					return;
				}

				window.location = "/user";
				btn.removeClass('disabled')
				return false;

			},
			error : function(){
				btn.removeClass('disabled')
				warn("网络错误，请稍后再试");
			}
		});
	},

	init: function(){
		this.bindEvt();
	},

	bindEvt: function(){
		var that = this;
		// 表单校验
		$("#educationPlanForm").validator({
			errorParent: '.row',
		    successCallback: function(e) {
		      var target = $(e.target).closest('.btn');
		      //执行到下一步操作
		      that.subFunc(target,$("#educationPlanForm"));

		    },
		    focusinCallback: function() {
		      var _ele = $(this);
		      common.hideError($('.errTxt'));
		    },

		    errorCallback: function(unvalidFields) {
		      var oError = $('.errTxt');
		    }
		});

		// 请求地区
		requestArea($('#city'));
	}

};


educationPlan.init();


