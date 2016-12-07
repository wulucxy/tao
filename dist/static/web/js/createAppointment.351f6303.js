webpackJsonp([16],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	/* 建议这里都引入 */
	__webpack_require__(16);
	__webpack_require__(185);
	var $ = window.$ || __webpack_require__(38);
	
	//工具类方法
	var util = __webpack_require__(39);
	
	//公共方法
	var common = __webpack_require__(40);
	
	/* 具体实现 */
	// 验证组件
	__webpack_require__(56);
	var requestArea = __webpack_require__(188);
	var tmpl = __webpack_require__(189);
	
	//pay
	var pay = __webpack_require__(190);
	
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
	
					window.location = "/expertOrderSuccess";
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
			//requestArea($('#city'));
		}
	
	};
	
	
	educationPlan.init();
	
	


/***/ },

/***/ 185:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 188:
/***/ function(module, exports, __webpack_require__) {

	var $ = window.$ || __webpack_require__(38);
	
	var requestArea =  function(ele){
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
	
				$(ele).empty();
				$(ele).append(optionList.join(""));
			},
			error : function(){
				warn("网络请求失败，请稍后重试");
			}
		});
	}
	
	module.exports = requestArea;

/***/ },

/***/ 189:
/***/ function(module, exports) {

	module.exports = function (obj) {
	obj || (obj = {});
	var __t, __p = '', __j = Array.prototype.join;
	function print() { __p += __j.call(arguments, '') }
	with (obj) {
	__p += '<div class="modalCntWrap taoModal g9 modalForm payModal">\n <h3 class="clearfix">\n  <a href="javascript:;" class="icons btn-close fr"></a>\n  <span class="fl">支付</span>\n</h3>\n <form class="modalSubCnt" id="payForm" onsubmit="return false;">\n\n<div class="patWrap">\n  <div class="payContent tc">\n      <div class="f20 mb10">\n        <em class="vm">支付金额：</em>\n        <span class="orange f28 vm">' +
	((__t = ( price )) == null ? '' : __t) +
	'元</span>\n      </div>\n\n      <div class="row">\n        <label>\n          <input type="radio" name="channel" value="alipay_pc_direct" checked>\n          <i class="payIcon zhifubao"></i>\n          <em>支付宝</em>\n        </label>\n      </div>\n\n      <div class="couponSelectWrap row">\n        <div class="selectWrap beautify-select" id="couponSelect">\n         <div class="trigger usn" data-toggle>\n          <span class="triggerTxt">使用优惠券</span>\n          <em class="caret"></em>\n         </div>\n         <ul class="options" id="countryList">\n              ';
	 for (var i = 0; i < items.length; i++) { ;
	__p += '\n                <li code="' +
	((__t = ( items[i].coupinId )) == null ? '' : __t) +
	'" name="' +
	((__t = ( items[i].title )) == null ? '' : __t) +
	'">使用' +
	((__t = ( items[i].discount )) == null ? '' : __t) +
	'元优惠券</li>\n              ';
	 } ;
	__p += '\n              <li id="" name="">不使用优惠券</li>\n         </ul>\n        </div>\n      </div>\n  </div>\n\n   <div class="footerCnt">\n       <p id="errTxt" class="errTxt"></p>\n       <div class="row btnRow">\n         <button type="submit" class="btn btn-primary btn-block" id="payBtn">\n         		<em class="subTxt">确定支付</em></button>\n       </div>\n   </div>\n </div>\n\n</form>\n</div>';
	
	}
	return __p
	}

/***/ },

/***/ 190:
/***/ function(module, exports, __webpack_require__) {

	var $ = window.$ || __webpack_require__(38);
	var extend =  __webpack_require__(43);
	var ping = __webpack_require__(191);
	
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
	        		}else if(res.code ==1 && typeof res.result == 'undefined'){
	        			// 此时不需要请求ping++
	        			warn('支付成功', function(){
	        				window.location.href = '/user';
	        				return false;
	        			});
	        		}else{
		        		var charge = res.result;
		        		if(/alipay/.test(options.channel)){
		        			that.requestAlipay(btn,charge);
		        		}else{
		        			that.requestCoupon(btn,charge);
		        		}
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

/***/ }

});
//# sourceMappingURL=createAppointment.351f6303.js.map