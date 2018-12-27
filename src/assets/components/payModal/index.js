var $ = window.$ || require("jquery");
require('./index.less');

//selct组件
var beautifySelect = require("../beautifySelect");

//selct组件
var pay = require("../pay");

var tmpl_pay = require("../../templates/pay.ejs");

var payModal = {
	init: function(btn, options){
		this.options = options;
		this.btn = btn;
		this.couponState = {};
		var that = this;

		this.requestCoupon();
	},

	requestCoupon: function(){
		var that = this;
		var _data = {
			page: 1,
			couponStatus: 0
		};
		$.ajax({
			url : preServer+that.options.provinceId+"/profile/couponListWeb",
			contentType: "application/json",
			type : "post",
		    data : JSON.stringify(_data),
		    success : function(res){
		      if(typeof res == "string"){
		        var res = $.parseJSON(res);
		      }

		      if(res.code==1){
		      	that.box(that.calCoupon(res.result));
		      }else{
		        warn(res.msg);
		        return;
		      }
		    },
		    error : function(err){
		       console.log(err);
		    }
		})
	},

	calCoupon: function(data){
		var that = this;
		var appointmentType = that.btn.attr('appointmenttype');
		var arr = data.couponList || [];
		var face = that.btn.attr('face');
		var newArr = $.each(arr, function(index, ele){
			// face：1代表线上，2代表线下
			ele.discount = face == 1 ? ele.onlineValue : ele.lineValue;
		})
		return newArr;
	},

	box: function(arr){
		var that = this;
		modalBox(that.btn,{
			html:tmpl_pay({
				items: arr,
				price: that.options.price,
				appointmentType:that.options.appointmentType
			}),
			klass : 'w540 shadow',
	        closeByOverlay : false,
	        completeCallback : function(){

	        	beautifySelect($("#couponSelect"),{
					selectCallback : function(li, index){
						console.log(li);
						that.couponState.couponCode = li.attr('code');
					}
				});	

	        	$("#payBtn").on("click",function(e){
					e.preventDefault();
					var target = $(this);
					var channel = $("[name=channel]:checked").val();
					
					pay.subPay(target,{
						provinceId: that.options.provinceId,
						channel: channel,
						planType: that.options.planType,
						planId: that.options.planId,
						orderId: that.options.orderId,
						type: !!that.couponState.couponCode ? 2 : 1,
						couponCode: !!that.couponState.couponCode ? that.couponState.couponCode : ''
					});
					
				});
	        },
	        closeCallback: function(){
	        	that.btn.removeClass('disabled');
	        }
		});
	}
}

module.exports = payModal;
