webpackJsonp([12],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	/* 建议这里都引入 */
	__webpack_require__(14);
	__webpack_require__(161);
	var $ = window.$ || __webpack_require__(36);
	
	//工具类方法
	var util = __webpack_require__(37);
	
	//公共方法
	var common = __webpack_require__(38);
	
	var provinceId = $("[name=province]").val();
	
	var tmpl_list = __webpack_require__(163);
	
	//自定义功能写下面
	var history = {
		init : function(){
			//默认分页开始
			this.pager = 1;
			this.capacity = 10;
			this.initList();
			this.bindEvt();
		},
	
		initList : function(){
			var that = this;
			$.ajax({
				url : preServer+provinceId+"/tzy/qa/history",
				type : "get",
				success : function(res){
					if(typeof res == "string"){
						var res = $.parseJSON(res);
					}
	
					if(res.code!=1){
						warn(res.msg);
						return;
					}
	
					this.rendList();
					
				}
			})
	
		},
	
		requestList : function(btn){
			var that = this;
	
			var parm = [];
			parm.push("capacity="+that.capacity);
			parm.push("page="+that.pager);
			parm.push("code="+$(".infoTag").eq(that.tagIndex).attr("code"));
	
			$.ajax({
				url : preServer+provinceId+"/news?"+parm.join("&"),
				type : "get",
				success : function(res){
					if(typeof res == "string"){
						var res = $.parseJSON(res);
					}
	
					if(res.code!=1){
						warn(res.msg);
						return;
					}
	
					$(".infoListWrap").removeClass("preloading");
					//如果是点击加载更多，页码++，否则重置为1
	                if(btn){
	                    that.pager++;
	                }else{
	                    that.pager = 1;
	                }
	
					that.loadList(res,that.pager);
				},
				error : function(){
					$(".infoListWrap").removeClass("preloading");
				}
			});
		},
		loadList : function(data,pager){
			var that = this,o = that.options;
			var _html = tmpl_list(data);
	
			if(pager == 1){
				$(".infoList").empty().html(_html);
				$(".s-title").text($(".infoTag.active").text());
			}else{
				$(".infoList").append(_html);
			}
	
	
			$(".btn-loading").removeClass("loading disabled");
	
			var pageCount = Math.ceil(data.total / that.capacity);
			//最后一页
			if(pager > pageCount){
				$(".btn-loading").addClass("loading-all");
			};
	
			if($(".infoList .no_transList").length){
				$(".btn-loading").addClass("loading-all");
			}
		},
	
		bindEvt : function(){
			var that = this;
			$(".btn-loading").on("click",function(e){
	    		e.preventDefault();
	    		var btn = $(this).closest(".btn");
	    		if(btn.hasClass("disabled") || btn.hasClass("loading-all")) return;
	    		btn.addClass("disabled loading");
	    		that.requestList(btn);
	    	});
	
	    	$(".btn-loading").trigger("click");
		}
	};
	
	history.init();
	
	


/***/ },

/***/ 161:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 163:
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
	__p += '\n <a href="javascript:;" class="list-group-item clearfix">\n    <div class="fl">\n    	<p class="collegeName">浙江大学</p>\n    	<p class="f13">总共&nbsp;158&nbsp;条回答</p>\n    </div>\n    <i class="fr taoIcon icon-right"></i>\n  </a>\n';
	 }} ;
	
	
	}
	return __p
	}

/***/ }

});
//# sourceMappingURL=collegeFaqHistory.js.map