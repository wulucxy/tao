webpackJsonp([33],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	/* 建议这里都引入 */
	__webpack_require__(16);
	__webpack_require__(246);
	var $ = window.$ || __webpack_require__(38);
	
	//工具类方法
	var util = __webpack_require__(39);
	
	//公共方法
	var common = __webpack_require__(40);
	
	
	//自定义功能写下面
	//
	////弹窗模板
	var tmpl_Info = __webpack_require__(119);
	
	//ping++
	var ping = __webpack_require__(175);
	
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
				majorList : 0,
				c :  0,
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
					if($.trim($("#card").val()) == "" || ($("#card").val() == $("#card").attr("placeholder"))){
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
	        			btn.removeClass("disabled");
	        			return;
	        		}
	
	        		var charge = res.result;
	        		if(/alipay/.test(_data.channel)){
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
				}
			});
		},
	
		requestCoupon : function(btn,res){
			warn("恭喜您已成功下单，稍后跳转结果页",function(){
				window.location = "/box/plan/result?planId="+planId;
				btn.removeClass("disabled");
			});
		}
	};
	
	pay.init();

/***/ },

/***/ 246:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(247);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(35)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/autoprefixer-loader/index.js!./../../../../node_modules/less-loader/index.js!./index.less", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/autoprefixer-loader/index.js!./../../../../node_modules/less-loader/index.js!./index.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 247:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(18)();
	// imports
	
	
	// module
	exports.push([module.id, "pre {\n  display: none;\n}\n.formWrap {\n  background-color: #fff;\n  padding: 28px 48px 60px;\n  margin-bottom: 30px;\n}\n.txts {\n  color: #333;\n  line-height: 2;\n}\n.lh42 {\n  line-height: 42px;\n}\n.g4 {\n  color: #444;\n}\n.blue {\n  color: #61c0e2;\n}\n.f26 {\n  font-size: 26px;\n}\n.formWrap .col2 {\n  line-height: 34px;\n  margin-left: 108px;\n}\n.formWrap .col2 label {\n  padding-left: 4px;\n}\n.formWrap .col2 label * {\n  vertical-align: middle;\n  display: inline-block;\n}\n.formWrap .footerCnt {\n  margin-top: 20px;\n  border-top: none;\n}\n.demoImg {\n  margin-top: 44px;\n  text-align: center;\n}\n.btn-sample {\n  width: 322px;\n  position: absolute;\n  display: inline-block;\n  font-size: 20px;\n  color: #fff;\n  line-height: 40px;\n  text-align: center;\n  bottom: -20px;\n  left: 50%;\n  margin-left: -161px;\n  background-color: #525252;\n  padding: 0;\n  border: none;\n  transtion: 0.4s all ease;\n}\n.btn-sample:hover {\n  background-color: #707070;\n}\n", ""]);
	
	// exports


/***/ }

});
//# sourceMappingURL=assessment.js.map