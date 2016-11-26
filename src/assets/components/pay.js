var $ = window.$ || require("jquery");
var extend =  require('object-assign');
var ping = require('./ping');

var pay = {
	subPay : function(btn, o){
		var that = this;

		var options=extend({
			channel: 'alipay_pc_direct',
			provinceId: '330000',
			planId: '',
			orderId: '',
			type: 1,
			couponCode: ''
		},o);

		this.options = options;

		if(btn.hasClass("disabled")) return;
		btn.addClass("disabled");

		var _data = {
			channel: options.channel,
			provinceId: options.provinceId,
			orderId: options.orderId,
			type: options.type,
			couponCode: options.couponCode
		};

		$.ajax({
			url : preServer + options.provinceId + "/pay",
			type : "post",
			contentType: "application/json",
        	data : JSON.stringify(options),
        	success : function(res){

        		if(typeof res == "string"){
        			var res = $.parseJSON(res);
        		}

        		if(res.code !=1){
        			btn.removeClass("disabled");
        			warn(res.msg);
        			return;
        		}

        		var charge = res.result;
        		if(/alipay/.test(options.channel)){
        			that.requestAlipay(btn,charge);
        		}else{
        			that.requestCoupon(btn,charge);
        		}

        	},
        	error : function(err){
        		btn.removeClass("disabled");
        		console.log(err);
        	}
		});
	},

	requestAlipay : function(btn,charge){
		var that = this;
		ping.createPayment(charge, function(result, err){
			if(err){
				warn(err.msg);
				btn.removeClass("disabled");
			}else{
				console.log(result);
				window.location.href = '/user';
			}
		});
	},

	requestCoupon : function(btn,res){
		var that = this;
		warn("恭喜您已成功下单，稍后跳转结果页",function(){
			window.location = "/box/plan/result?planId="+that.options.planId;
			btn.removeClass("disabled");
		});
	}
}


module.exports = pay;