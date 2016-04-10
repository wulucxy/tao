webpackJsonp([11],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	/* 建议这里都引入 */
	__webpack_require__(14);
	__webpack_require__(157);
	var $ = window.$ || __webpack_require__(36);
	
	//工具类方法
	var util = __webpack_require__(37);
	
	//公共方法
	var common = __webpack_require__(38);
	
	
	//自定义功能写下面
	var tmpl_q = __webpack_require__(159);
	var tmpl_list = __webpack_require__(160);
	
	// 验证组件
	__webpack_require__(54);
	
	//高校名称
	var collegeName = $("[name=collegeName]").val();
	var provinceId =  $("[name=province]").val();
	var scheduleId =  $("[name=scheduleId]").val();
	
	var faq = {
	
		init : function(){
			this.pager = 1;
			this.capacity = 10;
			this.bindEvt();
		},
	
		bindEvt : function(){
			var that = this;
			$("#applyQ").on("click",function(e){
				e.preventDefault();
				var btn = $(e.target);
				that.showQModal(btn);
			});	
	
			$(".btn-loading").on("click",function(e){
	    		e.preventDefault();
	    		var btn = $(this).closest(".btn");
	    		if(btn.hasClass("disabled") || btn.hasClass("loading-all")) return;
	    		btn.addClass("disabled loading");
	    		that.requestList(btn);
	    	});
	
	    	$(".btn-loading").trigger("click");
	
		},
	
		requestList : function(btn){
			var that = this;
	
			var parm = [];
			parm.push("capacity="+that.capacity);
			parm.push("page="+that.pager);
			parm.push("scheduleId="+scheduleId);
	
			$.ajax({
				url : preServer+provinceId+"/tzy/qa/"+scheduleId+"?"+parm.join("&"),
				type : "get",
				success : function(res){
					if(typeof res == "string"){
						var res = $.parseJSON(res);
					}
	
					if(res.code!=1){
						warn(res.msg);
						return;
					}
	
					$(".qaListWrap").removeClass("preloading");
	                
					that.loadList(res.result,that.pager);
				},
				error : function(err){
					console.log(err)
					$(".qaListWrap").removeClass("preloading");
				}
			});
		},
	
		loadList : function(data,pager){
			var that = this,o = that.options;
			var _html = tmpl_list(data);
	
			if(pager == 1){
				$(".qaList").empty().html(_html);
			}else{
				$(".qaList").append(_html);
			}
	
			
	        if(pager == 1 && data.total == 0){
				$(".btn-loading").hide();
			}else{
				$(".btn-loading").removeClass("loading disabled");
			}
			
	
			var pageCount = Math.ceil(data.total / that.capacity);
			//最后一页
			if(pager >= pageCount){
				$(".btn-loading").addClass("loading-all");
			};
	
			
			//如果是点击加载更多，页码++，否则重置为1
	        that.pager++;
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
				url : preServer+provinceId+"/tzy/qa/"+scheduleId+"/ask",
				type : "post",
				contentType: "application/json",
			    data : JSON.stringify(_data),
			    success : function(res){
			      if(typeof res == "string"){
			        var res = $.parseJSON(res);
			      }
	
			      if(res.code!=1){
			        warn("提交成功",function(){
			        	window.location = "/box/college_faq/success";
			        	return false;
			        });  
			      }else{
			        warn(res.msg);
			        return;
			      }
			    },
			    error : function(err){
			       console.log(err);
			    }
			});
		}
	};
	
	faq.init();
	


/***/ },

/***/ 157:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(158);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(33)(content, {});
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

/***/ 158:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(16)();
	// imports
	
	
	// module
	exports.push([module.id, ".blue {\n  color: #61c0e2;\n}\n.orange {\n  color: #f4b64f;\n}\n.faqWrapper {\n  margin-top: 12px;\n}\n.formWrap > .col1 {\n  width: 590px;\n}\n.formWrap > .col2 {\n  width: 300px;\n}\n.formWrap {\n  background-color: #fff;\n  padding: 32px 24px 36px;\n  margin-bottom: 30px;\n}\n.q-school h3 {\n  font-size: 18px;\n  line-height: 34px;\n  margin-bottom: 18px;\n}\n.q-school .btn {\n  padding-top: 5px;\n  padding-bottom: 5px;\n}\n.s-faq {\n  font-size: 15px;\n  color: #333;\n  padding: 0 12px;\n  border: 1px solid #e2e2e2;\n  margin-bottom: 20px;\n}\n.s-faq .q,\n.s-faq .a {\n  padding: 16px 0px;\n}\n.s-faq .q {\n  border-bottom: 1px solid #e2e2e2;\n}\n.s-faq .badges {\n  margin-top: 16px;\n}\n.s-faq .badge {\n  display: inline-block;\n  min-width: 72px;\n  font-size: 14px;\n  color: #fff;\n  text-align: center;\n  line-height: 24px;\n  border-radius: 12px;\n  background-color: #61c0e2;\n  margin-right: 10px;\n}\n.modalSubCnt .row {\n  margin-bottom: 24px;\n}\n.modalSubCnt .btnRow {\n  margin-bottom: 10px;\n}\n.modalSubCnt .row label + .col2 {\n  margin-left: 80px;\n}\n.qschoolList h3 {\n  font-size: 18px;\n  line-height: 32px;\n  font-weight: normal;\n  margin-bottom: 24px;\n}\n.qschoolList h3 .btn {\n  padding-top: 5px;\n  padding-bottom: 5px;\n}\n", ""]);
	
	// exports


/***/ },

/***/ 159:
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

/***/ },

/***/ 160:
/***/ function(module, exports) {

	module.exports = function (obj) {
	obj || (obj = {});
	var __t, __p = '', __j = Array.prototype.join;
	function print() { __p += __j.call(arguments, '') }
	with (obj) {
	
	 if (questions.length == 0 && page == 1) { ;
	__p += '\n	<li class="no_transList"><i class="noListIcon"></i><em class="vm">暂无记录</em></li>\n';
	 }else{ ;
	__p += '\n';
	 for (var i = 0; i < questions.length; i++) { ;
	__p += '\n<li class="s-faq">\n	<div class="q media">\n		<span class="fl blue">问：</span>\n		<div class="media-body">\n			<p>' +
	((__t = ( questions[i].q )) == null ? '' : __t) +
	'</p>\n			<div class="badges">\n				<span class="badge">' +
	((__t = ( questions[i].province )) == null ? '' : __t) +
	'考生</span><span class="badge">' +
	((__t = ( questions[i].year )) == null ? '' : __t) +
	'</span>\n			</div>\n		</div>\n	</div>\n	<div class="a media">\n		<span class="fl orange">答：</span>\n		<div class="media-body">\n			' +
	((__t = ( questions[i].a )) == null ? '' : __t) +
	'\n		</div>\n	</div>\n</li>\n';
	 }} ;
	
	
	}
	return __p
	}

/***/ }

});
//# sourceMappingURL=collegeFaqDetail.js.map