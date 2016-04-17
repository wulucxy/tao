webpackJsonp([12],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	/* 建议这里都引入 */
	__webpack_require__(14);
	__webpack_require__(162);
	var $ = window.$ || __webpack_require__(36);
	
	//工具类方法
	var util = __webpack_require__(37);
	
	//公共方法
	var common = __webpack_require__(38);
	
	var provinceId = $("[name=province]").val();
	
	var tmpl_list = __webpack_require__(164);
	
	//自定义功能写下面
	var history = {
		init : function(){
			//默认分页开始
			this.pager = 1;
			this.capacity = 10;
			this.reqList();
			this.bindEvt();
		},
	
		reqList : function(){
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
						return;
					}
	
					that.rendList(res.result);
					
				},
				error : function(err){
					console.log(err);
				}
			})
		},
	
		rendList : function(res){
			var that = this;
			var resData = {
				data : res
			};
	
			$(".faqList .list-group").empty();
			$(".faqList .list-group").append(tmpl_list(resData)).hide().fadeIn();
	
		},
	
		bindEvt : function(){
			var that = this;
			$("#sBtn").on("click",function(e){
	            e.preventDefault();
	            var oInput = $("#qInput"),btn = $(this).closest(".btn");
	            if($.trim(oInput.val()) == ""){
	                warn("请输入院校关键词搜索");
	                return;
	            }
	
	            if(btn.hasClass('disabled')) return;
	            btn.addClass("disabled");
	
	            that.reqList();
	
	        })
		}
	};
	
	history.init();
	
	


/***/ },

/***/ 162:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 164:
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
//# sourceMappingURL=collegeFaqHistory.js.map