/* 建议这里都引入 */
require('../../assets/less/common.less');
require('./index.less');
var $ = window.$ || require("jquery");

//工具类方法
var util = require("../../assets/components/util");

//公共方法
var common = require("../../assets/components/common");
var provinceId = $("[name=province]").val();

require("../../assets/components/validator");

function subFunc(btn, oForm) {
	$.ajax({
		url: preServer+provinceId + '/coupon/dole',
		type: 'post',
		contentType: "application/json",
		data: JSON.stringify({
			invitationCode: util.getQuery('userId'),
			mobile: $('#mobile').val()
		}),
		success: function(res){
			if(typeof res =="string"){
                var res = $.parseJSON(res);
            }

            // code为1表示领取成功，如果不为1展示错误信息
            if(res.code!=1){
                warn(res.msg);
                return;
            }

            var data = res.result;
           	
           	$('.recieveTxts').show();
            return false;
		},
		error: function(err){
			console.error(err);
		}
	})
}

if($("#recieveCouponForm").length){
	$("#recieveCouponForm").validator({
		errorParent: '.row',
	    successCallback: function(e) {
	      var target = $(e.target).closest('.btn');
	      //执行到下一步操作
	      subFunc(target, $("#recieveCouponForm"));
	    },
	    focusinCallback: function() {
	      
	    },
	    errorCallback: function(unvalidFields) {
	      var oError = $('.errTxt');
	      
	    }
	})
}
