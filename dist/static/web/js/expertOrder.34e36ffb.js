webpackJsonp([23],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	/* 建议这里都引入 */
	__webpack_require__(16);
	__webpack_require__(208);
	var $ = window.$ || __webpack_require__(38);
	
	//工具类方法
	var util = __webpack_require__(39);
	
	//公共方法
	var common = __webpack_require__(40);
	
	
	//自定义功能写下面
	var tmpl = __webpack_require__(210);
	__webpack_require__(56);
	
	var provinceId = $("[name=province]").val();
	
	var book = {
	
		init : function(){
			var that = this;
			$("#applyBtn").on("click",function(e){
				var btn = $(e.target);
				modalBox(btn,{
					html:tmpl(),
					klass : 'w540 shadow',
			        closeByOverlay : false,
			        startCallback : function(){
			        	//checkbox定制
						$('.label_radio').click(function(){
						  util.setupLabel();
						});
	
						util.setupLabel();
	
						$.ajax({
			        		url : "/system/city?provinceId="+provinceId,
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
	
			        			$.each(res.c,function(idx,ele){
			        				optionList.push('<option value='+ele.code+'>'+ele.name+'</option>');
			        			});
	
			        			$("[name=city]").empty();
			        			$("[name=city]").append(optionList.join(""));
			        		},
			        		error : function(){
			        			warn("网络请求失败，请稍后重试");
			        		}
			        	});
	
			        	that.requestAppoint();
			        },
			        completeCallback : function(){
			        	placeholder($('input[placeholder],textarea[placeholder]')); 
	 					that.formAction(btn);
			        }
				});
	
			});
		},
	
		requestAppoint : function(){
			var that = this;
			$.ajax({
	    		url : preServer+provinceId+"/tzy/appointment/types",
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
	
	    			if(res[0].appointmentDesc){
	    				$(".appointmentDesc").eq(0).text(res[0].appointmentDesc);
	    				$(".appointmentDesc").eq(1).text(res[1].appointmentDesc);
	    			}
	    			
	    		},
	    		error : function(err){
	    			console.log(err);
	    		}
	    	});
		},
	
		formAction : function(){
			var that = this;
	
			$("#bookForm").validator({
				errorParent : ".row",
				successCallback : function(e){
					 var target = $(e.target).closest('.btn');
					 that.postBookInfo(target,$("#bookForm"));
				}
			});
		},
	
		postBookInfo : function(){
			var that = this;
			var province = $("[name=province]").val();
	
			var data = {
				name : $("[name=name]").val(),
				mobile : $("[name=mobile]").val(),
				city : $("[name=city]").val(),
				courseType : $("[name=courseType]:checked").val(),
				score : $("[name=score]").val(),
				appointmentType : $("[name=bookType]:checked").val(),
				content : $("[name=booktime]").val()
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
					return false;
	
				},
				error : function(){
					warn("网络错误，请稍后再试");
				}
			});
		}
	
	};
	
	
	book.init();
	
	
	


/***/ },

/***/ 208:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 210:
/***/ function(module, exports) {

	module.exports = function (obj) {
	obj || (obj = {});
	var __t, __p = '';
	with (obj) {
	__p += '<div class="modalCntWrap taoModal g9 modalForm">\n <h3 class="clearfix"><a href="javascript:;" class="icons btn-close fr"></a><span class="fl">预约申请</span></h3>\n <form class="modalSubCnt" id="bookForm" onsubmit="return false;" autocomplete="off">\n\n<div class="row clearfix">\n  <label for="province" class="control-label column col1 fl">\n    <i class="icon-location icon-newuser"></i>\n    <em class="vm">姓名：</em></label>\n  <div class="col2 inputWrap rel">\n    <div class="fieldWrap">\n      <input type="text" class="input form-control" id="name" name="name" required placeholder="请输入姓名">\n    </div>\n  </div>\n</div>\n\n<div class="row clearfix">\n  <label for="province" class="control-label column col1 fl">\n    <i class="icon-location icon-newphone"></i>\n    <em class="vm">联系电话：</em></label>\n  <div class="col2 inputWrap rel">\n    <div class="fieldWrap">\n      <input type="tel" class="input form-control" id="mobile" name="mobile" required placeholder="请输入联系电话" maxlength="11">\n    </div>\n  </div>\n</div>\n\n<div class="row clearfix">\n  <label for="province" class="control-label column col1 fl">\n    <i class="icon-location"></i>\n    <em class="vm">所在城市：</em></label>\n  <div class="col2 selectWrap rel">\n    <div class="fieldWrap">\n      <select class="form-control" name="city">\n        </select>\n    </div>\n  </div>\n</div>\n\n<div class="row clearfix">\n  <label for="courseType" class="control-label column col1 fl">\n    <i class="icon-location icon-book"></i>\n    <em class="vm">高考科类：</em></label>\n  <div class="col2 inputWrap rel">\n    <div class="fieldWrap">\n      <label for="courseType_0"  class="label_radio inline">\n      <em class="icon-radio"></em>\n      <input type="radio" class="input form-control" id="courseType_0" name="courseType" checked value="0" required>\n      <em class="vm">理科</em>\n      </label>\n\n      <label for="courseType_1" class="label_radio inline">\n      <em class="icon-radio"></em>\n      <input type="radio" class="input form-control" id="courseType_1" name="courseType" value="1" required>\n      <em class="vm">文科</em>\n      </label>\n    </div>\n  </div>\n</div>\n\n<div class="row clearfix inline">\n  <label for="score" class="control-label column col1 fl">\n    <i class="icon-location icon-fenshu"></i>\n    <em class="vm">高考分数：</em></label>\n  <div class="col2 inputWrap rel">\n    <span class="fieldWrap db">\n      <input type="text" class="input form-control dib" id="score" name="score" placeholder="请输入高考分数(分)" pattern="^[0-9]{1,3}" required>\n    </span>\n  </div>\n</div>\n\n<div class="row clearfix bookRow">\n  <label for="bookType" class="control-label column col1 fl">\n    <i class="icon-location icon-txt"></i>\n    <em class="vm">预约内容：</em></label>\n  <div class="col2 inputWrap rel">\n    <div class="fieldWrap bookCnt">\n      <label for="bookType_0"  class="label_radio inline clearfix">\n      <em class="icon-radio c1"></em>\n      <input type="radio" class="input form-control" id="bookType_0" name="bookType" checked value="0" required>\n      <em class="vm appointmentDesc">专家线上服务</em>\n      </label>\n\n      <label for="bookType_1" class="label_radio inline last clearfix">\n      <em class="icon-radio c1"></em>\n      <input type="radio" value="1" class="input form-control" id="bookType_1" name="bookType" required>\n      <em class="vm appointmentDesc">专家面对面服务</em>\n      </label>\n    </div>\n  </div>\n</div>\n\n<div class="row clearfix">\n  <label for="booktime" class="control-label column col1 fl">\n    <i class="icon-location icon-time"></i>\n    <em class="vm">预约时间：</em></label>\n  <div class="col2 inputWrap rel">\n    <div class="fieldWrap">\n      <input type="text" class="input form-control" id="booktime" name="booktime" required placeholder="例如：3月30日 下午2点">\n    </div>\n  </div>\n</div>\n\n<!-- <div class="row clearfix inline">\n   <textarea class="form-control" placeholder="请填写预约内容" name="content" rows="3" required></textarea>\n</div> -->\n\n<div class="footerCnt">\n  <div class="row btnRow tc">\n    <button type="submit" class="btn btn-positive btn-form" id="verifyBtn">\n        <em class="subTxt">提&nbsp;交</em>\n    </button>\n  </div>\n\n</div>\n\n</form>\n</div>';
	
	}
	return __p
	}

/***/ }

});
//# sourceMappingURL=expertOrder.34e36ffb.js.map