webpackJsonp([30],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	/* 建议这里都引入 */
	__webpack_require__(14);
	__webpack_require__(229);
	var $ = window.$ || __webpack_require__(36);
	
	//工具类方法
	var util = __webpack_require__(37);
	
	//公共方法
	var common = __webpack_require__(38);
	
	
	//自定义功能写下面
	//
	////弹窗模板
	var tmpl_Info = __webpack_require__(117);
	
	//ping++
	var ping = __webpack_require__(231);
	
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

/***/ 229:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 231:
/***/ function(module, exports) {

	var
	  version = "2.0.8",
	  hasOwn = {}.hasOwnProperty,
	  PingppSDK = function(){},
	  cfg = {
	    PINGPP_NOTIFY_URL: 'https://api.pingxx.com/notify/charges/',
	    PINGPP_MOCK_URL: 'http://sissi.pingxx.com/mock.php',
	    ALIPAY_PC_DIRECT_URL: 'https://mapi.alipay.com/gateway.do',
	    UPACP_PC_URL: 'https://gateway.95516.com/gateway/api/frontTransReq.do',
	    CP_B2B_URL: 'https://payment.chinapay.com/CTITS/service/rest/page/nref/000000000017/0/0/0/0/0'
	  },
	  channels = {
	    alipay_pc_direct: 'alipay_pc_direct',
	    upacp_pc: 'upacp_pc',
	    cp_b2b: 'cp_b2b'
	  };
	
	PingppSDK.prototype = {
	
	  version: version,
	
	  _resultCallback: undefined,
	
	  _debug: false,
	
	  createPayment: function(charge_json, callback, debug) {
	    if (typeof callback == "function") {
	      this._resultCallback = callback;
	    }
	    if (typeof debug == "boolean") {
	      this._debug = debug;
	    }
	
	    var charge;
	    if(typeof charge_json == "string"){
	      try{
	        charge = JSON.parse(charge_json);
	      }catch(err){
	        this._innerCallback("fail", this._error("json_decode_fail"));
	        return;
	      }
	    }else{
	      charge = charge_json;
	    }
	    if(typeof charge == "undefined"){
	      this._innerCallback("fail", this._error("json_decode_fail"));
	      return;
	    }
	    if(!hasOwn.call(charge, 'id')){
	      this._innerCallback("fail", this._error("invalid_charge", "no_charge_id"));
	      return;
	    }
	    if(!hasOwn.call(charge, 'channel')){
	      this._innerCallback("fail", this._error("invalid_charge", "no_channel"));
	      return;
	    }
	    var channel = charge['channel'];
	    if(!hasOwn.call(charge, 'credential')){
	      this._innerCallback("fail", this._error("invalid_charge", "no_credential"));
	      return;
	    }
	    if (!charge['credential']) {
	      this._innerCallback("fail", this._error("invalid_credential", "credential_is_undefined"));
	      return;
	    }
	    if (!hasOwn.call(channels, channel)) {
	      this._innerCallback("fail", this._error("invalid_charge", "no_such_channel:" + channel));
	      return;
	    }
	    if (!hasOwn.call(charge['credential'], channel)) {
	      this._innerCallback("fail", this._error("invalid_credential", "no_valid_channel_credential"));
	      return;
	    }
	    if(!hasOwn.call(charge, 'livemode')){
	      this._innerCallback("fail", this._error("invalid_charge", "no_livemode"));
	      return;
	    }
	    if (charge['livemode'] == false) {
	      this._testModeNotify(charge);
	      return;
	    }
	    var credential = charge['credential'][channel];
	    if (channel == channels.upacp_pc) {
	      form_submit(cfg.UPACP_PC_URL, 'post', credential);
	    } else if (channel == channels.alipay_pc_direct) {
	      if (!hasOwn.call(credential, "_input_charset")) {
	        credential["_input_charset"] = 'utf-8';
	      }
	      var query = stringify_data(credential, channel, true);
	      window.location.href = cfg.ALIPAY_PC_DIRECT_URL + "?" + query;
	    } else if (channel == channels.cp_b2b) {
	      form_submit(cfg.CP_B2B_URL, 'post', credential);
	    }
	  },
	
	  _error: function(msg, extra) {
	    msg = (typeof msg == "undefined") ? "" : msg;
	    extra = (typeof extra == "undefined") ? "" : extra;
	    return {
	      msg:msg,
	      extra:extra
	    };
	  },
	
	  _innerCallback: function(result, err) {
	    if (typeof this._resultCallback == "function") {
	      if (typeof err == "undefined") {
	        err = this._error();
	      }
	      this._resultCallback(result, err);
	    }
	  },
	
	  _testModeNotify: function(charge) {
	    var params = {
	      'ch_id': charge['id'],
	      'scheme': 'http',
	      'channel': charge['channel']
	    };
	    if (hasOwn.call(charge, 'order_no')) {
	      params['order_no'] = charge['order_no'];
	    } else if (hasOwn.call(charge, 'orderNo')) {
	      params['order_no'] = charge['orderNo'];
	    }
	    if (hasOwn.call(charge, 'time_expire')) {
	      params['time_expire'] = charge['time_expire'];
	    } else if (hasOwn.call(charge, 'timeExpire')) {
	      params['time_expire'] = charge['timeExpire'];
	    }
	    if (hasOwn.call(charge, 'extra')) {
	      params['extra'] = encodeURIComponent(JSON.stringify(charge['extra']));
	    }
	    location.href = cfg.PINGPP_MOCK_URL+'?'+stringify_data(params);
	  }
	};
	
	function form_submit(url, method, params) {
	  var form = document.createElement("form");
	  form.setAttribute("method", method);
	  form.setAttribute("action", url);
	
	  for (var key in params) {
	    if (hasOwn.call(params, key)) {
	      var hiddenField = document.createElement("input");
	      hiddenField.setAttribute("type", "hidden");
	      hiddenField.setAttribute("name", key);
	      hiddenField.setAttribute("value", params[key]);
	      form.appendChild(hiddenField);
	    }
	  }
	
	  document.body.appendChild(form);
	  form.submit();
	}
	
	function stringify_data(data, channel, urlencode) {
	  if (typeof urlencode == "undefined") {
	    urlencode = false;
	  }
	  var output = [];
	  for (var i in data) {
	    if (channel == "bfb_wap" && i == "url") {
	      continue;
	    }
	    if (channel == "yeepay_wap" && i == "mode") {
	      continue;
	    }
	    output.push(i + '=' + (urlencode ? encodeURIComponent(data[i]) : data[i]));
	  }
	  return output.join('&');
	}
	
	PingppSDK.prototype.payment = PingppSDK.prototype.createPayment;
	
	module.exports = new PingppSDK();

/***/ }

});
//# sourceMappingURL=assessment.js.map