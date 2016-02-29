var $ = window.$ || require("jquery");
var userUtil = require("./userUtil");

var telReg = /^1\d{10}$/;
var verify = {
	init : function(oError){
		var that = this;
		that.oLabel = $('#verifyLabel'), 
		that.oCount = $('#minCount'), 
		that.oActive = $("#activeStatus"),
		that.oResend = $('#reSend'),
		that.clickable = true;

		//发送验证码
		$(document).on('click','#verifyLabel',function(e){
			e.preventDefault();
			if(!that.clickable) return;
			that.clickable = false;

			if (!$("#mobile").val() || !telReg.test($("#mobile").val())) {
	          userUtil.showError(oError,'请输入正确的手机号码');
	          that.clickable = true;
	          return;
	        }

	        that.timeCount();
	        that.requestCode();
		});

	},
	timeCount :function(){
	    var that = this;
	    clearInterval(that.smsTimer);
	    var t=6;

	      var count = function () { 
	          if (t <= 0) {                   //倒计时结束
	              clearInterval(that.smsTimer);  
	              that.oLabel.addClass('active');
	              that.clickable = true;
	              that.oCount.hide();
	              that.oResend.show();
	              that.oActive.hide(); 
	              that.clickable = true;   
	          } else {
	              if(that.oCount[0].style.display !== 'block'){
	                that.oCount.show();
	                that.oActive.hide();
	                that.oResend.hide();
	              }
	              that.oLabel.removeClass('active');
	              that.oLabel.find('time').html(t);   
	          }
	          t--;
	      };
	      count();
	      that.smsTimer = setInterval(count, 1000); 
	},

	clearTimeCount : function(){
      var that = this;
      clearInterval(that.smsTimer);
      if(!that.oCount || !that.oCount.length){
        return;
      }
      that.oCount.hide();
      that.oResend.show();
      that.oActive.hide();
      that.oLabel.addClass('active'); 
      that.clickable = true;
	},

	requestCode : function(sendSMSUrl){
	  var that = this;
		//公共参数
      var _data = {mobile: document.getElementById('mobile').value};

        $.ajax({
            url: sendSMSUrl || "/v2/client/auth/requestCode",
            type: 'POST',
            contentType: "application/json",
            data: JSON.stringify(_data),
            success : function(data){
             //发送短信验证码成功
             if(typeof data == "string"){
              var data = $.parseJSON(data);
             }
             if(data.code != "200"){
              that.clearTimeCount();
              warn(data.msg);
             }
            }
        });
	}


};

module.exports = verify;