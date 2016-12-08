webpackJsonp([13],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	/* 建议这里都引入 */
	__webpack_require__(16);
	__webpack_require__(167);
	var $ = window.$ || __webpack_require__(38);
	
	//工具类方法
	var util = __webpack_require__(39);
	
	//公共方法
	var common = __webpack_require__(40);
	
	var provinceId = $("[name=province]").val();
	
	var tmpl_list = __webpack_require__(169);
	
	//自定义功能写下面
	var history = {
		init : function(){
			//默认分页开始
			this.pager = 1;
			this.capacity = 10;
			this.reqList($("#sBtn"));
			this.bindEvt();
		},
	
		reqList : function(btn){
			var that = this;
			$.ajax({
				url : preServer+provinceId+"/tzy/qa/history",
				type : "post",
				data : JSON.stringify({"keyword":$("[name=keyword2]").val()}),
				success : function(res){
					if(typeof res == "string"){
						var res = $.parseJSON(res);
					}
	
					if(res.code!=1){
						warn(res.msg);
						btn.removeClass("disabled");
						return;
					}
	
					that.rendList(btn,res.result);
					
				},
				error : function(err){
					console.log(err);
				}
			})
		},
	
		rendList : function(btn,res){
			var that = this;
			var resData = {
				data : res
			};
	
			$(".faqList .list-group").empty();
			$(".faqList .list-group").append(tmpl_list(resData)).hide().fadeIn();
			btn.removeClass("disabled");
	
		},
	
		bindEvt : function(){
			var that = this;
			$("#sBtn").on("click",function(e){
				var target = $(this);
	            reqList(e);
	        })
	
	        $("[name=keyword2]").on("keyup",function(e){
	        	if(e.keyCode == 13){
	        		var target = $(this);
	            	reqList(e);
	        	}
	        })
	
	        function reqList(e){
	        	e.preventDefault();
	        	var target = $(e.target);
	            var oInput = $("#qInput"),btn = target.closest(".btn");
	            if($.trim(oInput.val()) == "" ||  oInput.val() == oInput.attr("placeholder") ){
	                warn("请输入院校关键词搜索");
	                return;
	            }
	
	            if(btn.hasClass('disabled')) return;
	            btn.addClass("disabled");
	
	            that.reqList(btn);
	        }
		}
	};
	
	history.init();
	
	


/***/ },

/***/ 167:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 169:
/***/ function(module, exports) {

	module.exports = function (obj) {
	obj || (obj = {});
	var __t, __p = '', __j = Array.prototype.join;
	function print() { __p += __j.call(arguments, '') }
	with (obj) {
	__p += ' ';
	 if (data.length == 0) { ;
	__p += '\n	<div class="no_transList"><i class="noListIcon"></i><em class="vm">暂无记录</em></div>\n';
	 }else{ ;
	__p += '	\n';
	 for (var i = 0; i < data.length; i++) { ;
	__p += '\n <a href="/box/college_faq/' +
	((__t = ( data[i].college.collegeId )) == null ? '' : __t) +
	'" target="_blank" class="list-group-item clearfix">\n    <div class="fl">\n    	<p class="collegeName"> ' +
	((__t = ( data[i].college.collegeName  )) == null ? '' : __t) +
	'</p>\n    	<p class="f13">总共&nbsp;' +
	((__t = ( data[i].count )) == null ? '' : __t) +
	'&nbsp;条回答</p>\n    </div>\n    <i class="fr taoIcon icon-right"></i>\n  </a>\n';
	 }} ;
	
	
	}
	return __p
	}

/***/ }

});
//# sourceMappingURL=collegeFaqHistory.36922f66.js.map