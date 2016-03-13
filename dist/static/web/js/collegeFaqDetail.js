webpackJsonp([11],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	/* 建议这里都引入 */
	__webpack_require__(14);
	__webpack_require__(142);
	var $ = window.$ || __webpack_require__(36);
	
	//工具类方法
	var util = __webpack_require__(37);
	
	//公共方法
	var common = __webpack_require__(38);
	
	
	//自定义功能写下面
	var tmpl_q = __webpack_require__(144);
	
	// 验证组件
	__webpack_require__(53);
	
	//高校名称
	var collegeName = $("[name=collegeName]").val();
	var provinceId =  $("[name=province]").val();
	var scheduleId =  $("[name=scheduleId]").val();
	
	var faq = {
	
		init : function(){
			this.bindEvt();
		},
	
		bindEvt : function(){
			var that = this;
			$("#applyQ").on("click",function(e){
				e.preventDefault();
				var btn = $(e.target);
				that.showQModal(btn);
			});	
	
		},
	
		showQModal: function(btn){
			var that = this;
	
			var qJSON = {
				"collegeName" : collegeName
			}; 
			modalBox(btn,{
				html:tmpl_q(qJSON),
		        klass : 'w540 shadow',
		        closeByOverlay : false,
		        startCallback : function(){
	
		        },
		        completeCallback : function(){
		        	var self = btn; 
		        	$("#qForm").validator({
		        		errorParent: '.row',
					    successCallback: function(e) {
					      var target = $(e.target).closest('.btn');
					      //执行到下一步操作
					      that.subFunc(target,$("#qForm"));
	
					    },
					    focusinCallback: function() {
					      var _ele = $(this);
					      common.hideError($('.errTxt'));
					    },
	
					    errorCallback: function(unvalidFields) {
					      var oError = $('.errTxt');
					    }
		        	});
		        	
		        }
			});
		},
		subFunc : function(){
			var that = this;
	
			var _data = {
				scheduleId : scheduleId,
				q : $("[name=q]").val()
			};
	
			$.ajax({
				url : "/v2/client/"+provinceId+"/tzy/qa/"+scheduleId+"/ask",
				type : "post",
				contentType: "application/json",
			    data : JSON.stringify(_data),
			    success : function(res){
			      if(typeof res == "string"){
			        var res = $.parseJSON(res);
			      }
	
			      if(!res.code){
			        warn("提交成功",function(){
			        	window.location = "/box/college_faq_success";
			        	return false;
			        });  
			      }else{
			        common.showError($('.errTxt'),res.msg || "网络错误,请稍后重试");
			        return;
			      }
			    },
			    error : function(res){
			       common.showError($('.errTxt'),res.msg || "网络错误,请稍后重试");
			    }
			});
		}
	};
	
	faq.init();
	


/***/ },

/***/ 142:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 144:
/***/ function(module, exports) {

	module.exports = function (obj) {
	obj || (obj = {});
	var __t, __p = '';
	with (obj) {
	__p += '<div class="modalCntWrap taoModal g9 modalForm">\n <h3 class="clearfix"><a href="javascript:;" class="icons btn-close fr"></a><span class="fl">提问</span></h3>\n <form class="modalSubCnt" id="qForm" onsubmit="return false;" autocomplete="off">\n\n<div class="row clearfix">\n  <label for="collegeName" class="control-label column col1 fl">\n    <em class="vm">当前学校：</em></label>\n  <div class="col2 inputWrap rel">\n    <div class="fieldWrap">\n      <input type="text" class="input form-control" id="collegeName" name="collegeName" value="' +
	((__t = ( collegeName )) == null ? '' : __t) +
	'" readonly required>\n    </div>\n  </div>\n</div>\n\n<div class="row clearfix inline">\n  <label for="collegeName" class="control-label column col1 fl">\n    <em class="vm">当前学校：</em></label>\n  <div class="col2 textWrap rel">\n   <textarea class="form-control" placeholder="请填写预约内容" name="q" rows="8" cols="6" required></textarea>\n  </div>\n</div>\n\n<div class="footerCnt">\n  <div class="row btnRow tc">\n    <button type="submit" class="btn btn-positive btn-form" id="verifyBtn">提&nbsp;交</button>\n  </div>\n\n</div>\n\n</form>\n</div>';
	
	}
	return __p
	}

/***/ }

});
//# sourceMappingURL=collegeFaqDetail.js.map