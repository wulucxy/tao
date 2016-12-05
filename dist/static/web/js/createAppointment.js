webpackJsonp([16],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	/* 建议这里都引入 */
	__webpack_require__(16);
	__webpack_require__(184);
	var $ = window.$ || __webpack_require__(38);
	
	//工具类方法
	var util = __webpack_require__(39);
	
	//公共方法
	var common = __webpack_require__(40);
	
	/* 具体实现 */
	// 验证组件
	__webpack_require__(56);
	var requestArea = __webpack_require__(187);
	var tmpl = __webpack_require__(188);
	
	//pay
	var pay = __webpack_require__(189);
	
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
	
			$('.serviceItem .link').each(function(idx, item){
				var $item = $(item);
				$(item).attr('href', '/'+$item.data('url'));
			})
	
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
	
	


/***/ },

/***/ 184:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(185);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(35)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/autoprefixer-loader/index.js!./../../../node_modules/less-loader/index.js!./index.less", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/autoprefixer-loader/index.js!./../../../node_modules/less-loader/index.js!./index.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 185:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(18)();
	// imports
	
	
	// module
	exports.push([module.id, ".positive {\n  color: #fff21e;\n}\n.orange {\n  color: #f4b64f;\n}\n.c7 {\n  color: #c7c7c7;\n}\n.bookWrapper {\n  margin-top: 12px;\n}\n.bookWrapper .col1 {\n  width: 500px;\n  margin-left: 64px;\n}\n.bookWrapper .col2 {\n  width: 300px;\n}\n.formWrap {\n  background-color: #fff;\n  padding: 28px 24px 36px;\n  margin-bottom: 30px;\n}\n.formWrap .btnRow {\n  margin-top: 80px;\n}\n#educationPlanForm {\n  width: 640px;\n  overflow: hidden;\n}\n.formWrap .row .errInfo {\n  margin-left: 70px;\n  height: 30px;\n}\n.label_radio {\n  display: inline-block;\n  position: relative;\n  overflow: hidden;\n  text-align: center;\n  font-size: 16px;\n  width: auto;\n  line-height: 20px;\n  height: 20px;\n  background: none;\n}\n.label_radio:hover {\n  background: none;\n}\n.label_radio input {\n  background: transparent;\n  border: 0;\n  position: absolute;\n  left: -100%;\n  width: 0;\n  height: 0;\n}\n.label_radio .checkmark {\n  display: inline-block;\n  width: 14px;\n  height: 14px;\n  margin-right: 12px;\n  vertical-align: middle;\n  background-color: #c8c8c8;\n  border-radius: 50%;\n  line-height: 20px;\n}\n.label_radio.c_on {\n  background: none;\n}\n.label_radio.c_on .checkmark {\n  background-color: #61c0e2;\n}\n.inviteLink {\n  display: block;\n  margin-top: 40px;\n  margin-bottom: 24px;\n}\n.educationRow {\n  margin-right: -15px;\n}\n.educationRow .row {\n  width: 312px;\n  margin-right: 15px;\n}\n.educationRow .row label + .col2 {\n  margin-left: 70px;\n}\n.service_title {\n  font-size: 16px;\n  color: #333;\n  margin-right: 20px;\n}\n.serviceList .serviceDetail {\n  margin-right: 72px;\n  margin-bottom: 20px;\n  width: auto;\n  line-height: 20px;\n  height: 20px;\n}\n.serviceList .link {\n  font-size: 14px;\n  color: #c7c7c7;\n  padding-right: 20px;\n  background: url(" + __webpack_require__(186) + ") right center no-repeat;\n  -webkit-transition: color 0.4s ease;\n          transition: color 0.4s ease;\n}\n.serviceList .link:hover {\n  color: #666;\n}\n.serviceList .service_name {\n  font-size: 16px;\n  color: #333;\n  display: inline-block;\n  vertical-align: middle;\n}\n.patWrap {\n  width: 320px;\n  margin: 0 auto;\n}\n.patWrap .btn-block {\n  font-size: 20px;\n}\n.payContent {\n  padding-top: 20px;\n}\n", ""]);
	
	// exports


/***/ },

/***/ 186:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/web/img/arrow.png"

/***/ },

/***/ 187:
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

/***/ 188:
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

/***/ 189:
/***/ function(module, exports, __webpack_require__) {

	var $ = window.$ || __webpack_require__(38);
	var extend =  __webpack_require__(43);
	var ping = __webpack_require__(190);
	
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
	        			warn(res.msg, function(){
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
//# sourceMappingURL=createAppointment.js.map