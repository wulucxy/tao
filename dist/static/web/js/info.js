webpackJsonp([17],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	/* 建议这里都引入 */
	__webpack_require__(14);
	__webpack_require__(165);
	var $ = window.$ || __webpack_require__(36);
	
	//工具类方法
	var util = __webpack_require__(37);
	
	//公共方法
	var common = __webpack_require__(38);
	
	
	//自定义功能写下面
	//
	////加载更多模块
	var loadMore = __webpack_require__(167);
	var tmpl = __webpack_require__(168);
	
	var province = $("[name=province]").val();
	
	var info = {
		init : function(){
			//默认分页开始
			this.pager = 1;
			this.tagIndex = 0;
			this.bindEvt();
		},
		requestList : function(btn){
			var that = this;
	
			var parm = [];
			parm.push("page="+that.pager);
			parm.push("code="+$(".infoTag").eq(that.tagIndex).attr("code"));
	
			$.ajax({
				url : "/v2/client/"+province+"/news?"+parm.join("&"),
				type : "get",
				success : function(res){
					if(typeof res == "string"){
						var res = $.parseJSON(res);
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
			var _html = tmpl(data);
	
			if(pager == 1){
				$(".infoList").empty().html(_html);
				$(".s-title").text($(".infoTag.active").text());
			}else{
				$(".infoList").append(_html);
			}
	
	
			$(".btn-loading").removeClass("loading disabled");
	
			//最后一页
			if(pager > data.count){
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
	
	    	$(".infoTag").on("click",function(e){
	    		e.preventDefault();
	    		var btn = $(this);
	    		btn.siblings().removeClass("active");
	    		if(btn.hasClass("active")) return;
	    		btn.addClass("active");
	    		$(".infoListWrap").addClass("preloading");
	    		that.tagIndex = btn.attr("code");
	    		that.requestList();
	    	});
	
	    	$(".infoTag").eq(0).trigger("click");
		}
	};
	
	info.init();

/***/ },

/***/ 165:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 167:
/***/ function(module, exports, __webpack_require__) {

	var $ = window.$ || __webpack_require__(36);
	var extend =  __webpack_require__(41);
	 
	function Plugin(t,o){
			this.target=t;
			this.options=o;
			this.init(this.options);
		   }
	  
	Plugin.prototype = {
	   	init : function(o){
	    	var that = this,$this = that.target;
	    	// 分页默认从第1页开始
	    	that.pager = o.pager;
	
	    	//模板地址
	    	that.tmpl = o.tmpl;
	    	that.btn = that.target.closest(".content").find(".btn-loading");
	
	    	if(Object.prototype.toString.call(that.tmpl) != '[object Function]'){
	    		return;
	    	}
	
	    	that.btn.off().on("click",function(e){
	    		e.preventDefault();
	    		var btn = $(this).closest(".btn");
	    		if(btn.hasClass("disabled") || btn.hasClass("loading-all")) return;
	    		btn.addClass("disabled loading");
	    		that.fetch.call(that);
	    	});
		},
	
		fetch : function(){
			var that = this,o = that.options,$this = that.target;
			$.ajax({
				url : o.url || $this.data("url"),
				type : "post",
				contentType: "application/json",
				data : JSON.stringify({page : that.pager}),
				success : function(res){
					if(typeof(res) == 'string'){
	                   var res = $.parseJSON(res);
	                }
	
	                that.insertData.call(that,res);
				}
			});
		},
	
		renderData : function(res){
			var that = this;
			return that.tmpl(res);
		},
	
		insertData : function(res){
			var that = this,$this = that.target,o = that.options;
			if(res[o.listAttr].length){
				var _html = that.renderData(res);
				if(that.pager == 1){
					$this.empty().append(_html);
				}else{
					$this.append(_html);
				}
	
				that.pager++;
	
				//最后一页
				if(that.pager > res.count){
					that.btn.addClass("loading-all");
				};
	
			}else{
				that.target.html('<div class="no_transList"><p class="tc mb10"><i class="noListIcon"></i></p><em class="g9">暂无数据</em></div>');
				$(".btn-loading").length && $(".btn-loading").hide();
			}
	
	
			that.btn.removeClass("loading disabled");
		}
	};
	
	 var loadMore = function(target,o){
	 	var settings=extend({
	 		url : "",
	 		pager : 1,
			button : ".btn-loading",
			callback : null,
			listAttr : ""
		},o);
	
		return $(target).each(function(index) {
			var me = $(this);  
			return new Plugin(me,settings);
		});
	 };
	
	 module.exports = loadMore;

/***/ },

/***/ 168:
/***/ function(module, exports) {

	module.exports = function (obj) {
	obj || (obj = {});
	var __t, __p = '', __j = Array.prototype.join;
	function print() { __p += __j.call(arguments, '') }
	with (obj) {
	
	 if (news.length == 0) { ;
	__p += '\n	<li class="no_transList"><i class="noListIcon"></i><em class="vm">暂无记录</em></li>\n';
	 }else{ ;
	__p += '\n';
	 for (var i = 0; i < news.length; i++) { ;
	__p += '\n<li>\n   	 <div class="media">\n		<span class="fl imgWrap">\n			<img src="' +
	((__t = ( news[i].newsIconUrl )) == null ? '' : __t) +
	'">\n		</span>\n		<div class="media-body">\n				<a class="detailTitle ellipsis" href="' +
	((__t = ( news[i].newsUrl )) == null ? '' : __t) +
	'" target="_blank">\n					' +
	((__t = ( news[i].newsName )) == null ? '' : __t) +
	'\n				</a>\n				<div class="clearfix detailSub g6">\n					';
	 for (var k = 0; k < news[i].newsTags.length; k++) { ;
	__p += '\n					<span class="fl article-tag mr10">' +
	((__t = ( news[i].newsTags[k] )) == null ? '' : __t) +
	'</span>\n					';
	 } ;
	__p += '\n				<span class="fr moment">' +
	((__t = ( news[i].newsDate )) == null ? '' : __t) +
	'</span>\n				</div>\n				<a class="db detailCnt" href="' +
	((__t = ( news[i].newsUrl )) == null ? '' : __t) +
	'" target="_blank">\n					' +
	((__t = ( news[i].discription )) == null ? '' : __t) +
	'\n				</a>\n		</div>\n	</div>\n</li>\n';
	 }} ;
	
	
	}
	return __p
	}

/***/ }

});
//# sourceMappingURL=info.js.map