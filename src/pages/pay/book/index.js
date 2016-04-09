/* 建议这里都引入 */
require('../../../assets/less/common.less');
require('./index.less');
var $ = window.$ || require("jquery");

//工具类方法
var util = require("../../../assets/components/util");

//公共方法
var common = require("../../../assets/components/common");


//自定义功能写下面
//
////弹窗模板
var tmpl_Info = require("../../../assets/templates/applyInfo.ejs");

//ping++
var ping = require("../../../assets/components/ping");

var provinceId = $("[name=province]").val();
var planId = $("[name=planId]").val();

var pay = {
	init : function(){
		this.detailTrigger();
		this.bindEvt();
	},

	transformData : function(){
		var that = this;
		var _data = {
			majorList : [],
			c :  [],
			batch : $("[name=batch]").text(),
			courseType : $("[name=courseType]").text(),
			score : $("[name=score]").text(),
			place : $("[name=place]").text(),
			provinceName : $("[name=provinceName]").val(),
			userName : $("[name=userName]").val()
		};

		return _data;
	},

	detailTrigger : function(){
		var that = this;
		var data = that.transformData();

		//详情弹窗
		$("[data-trigger]").on("click",function(e){
		    e.preventDefault();
		    var btn = $(e.target).closest(".trigger");

		    modalBox( btn.get(0), {
		          html:tmpl_Info(data),
		          klass : 'w540 shadow',
		          closeByOverlay : false,
		          startCallback : function(){
					util.setupLabel();
		          },
		          completeCallback : function(){ 
		            
		          }
		      });
		});
	},

	bindEvt : function(){
		var that = this;
		$("#verifyBtn").on("click",function(e){
			e.preventDefault();
			var btn = $(this);
			var channel = $("[name=channel]:checked").val();

			if(channel == "coupon"){
				if($.trim($("#card").val()) == ""){
					warn("请输入正确的支付卡号");
					return;
				}
			}
			
			that.subPay(btn);
			
		});
	},

	subPay : function(btn){
		var that = this;

		if(btn.hasClass("disabled")) return;
		btn.addClass("disabled");

		var _data = {
			orderId : $("[name=orderId]").val(),
			channel : $("[name=channel]:checked").val()
		};

		if(!/alipay/.test(_data.channel) && $("#card").val() != $("#card").attr("placeholder") ){
			_data.couponCode = $("#card").val();
		}

		$.ajax({
			url : preServer+provinceId+"/pay",
			type : "post",
			contentType: "application/json",
        	data : JSON.stringify(_data),
        	success : function(res){

        		if(typeof res == "string"){
        			var res = $.parseJSON(res);
        		}

        		if(res.code !=1){
        			warn(res.msg);
        			return;
        		}

        		var charge = res.result;
        		if(/alipay/.test(_data.channel)){
        			that.requestAlipay(btn,charge);
        		}else{
        			that.requestCoupon(btn,charge);
        		}

        		btn.removeClass("disabled");

        	},
        	error : function(err){
        		console.log(err);
        		btn.removeClass("disabled");
        	}
		});
	},

	requestAlipay : function(btn,charge){
		var that = this;
		ping.createPayment(charge, function(result, err){
			if(err){
				warn(err.msg);
			}
		});
	},

	requestCoupon : function(btn,res){
		warn("恭喜您已成功下单，稍后跳转结果页",function(){
			window.location = "/box/plan/result?planId="+planId;
		});
	}

};

pay.init();