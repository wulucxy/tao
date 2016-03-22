webpackJsonp([22],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	/* 建议这里都引入 */
	__webpack_require__(14);
	__webpack_require__(189);
	var $ = window.$ || __webpack_require__(36);
	
	//工具类方法
	var util = __webpack_require__(37);
	
	//公共方法
	var common = __webpack_require__(38);
	
	
	//自定义功能写下面
	//
	////加载更多模块
	var loadMore = __webpack_require__(191);
	var tmpl = __webpack_require__(192);
	
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
				url : preServer+province+"/news?"+parm.join("&"),
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
				error : function(err){
					//$(".infoListWrap").removeClass("preloading");
					warn($.parseJSON(err.responseText).msg || "网络错误，请稍后重试");
				}
			});
		},
		loadList : function(data,pager){
			var that = this,o = that.options;
			var _html = tmpl(data);
	
			if(pager == 1){
				$(".infoList").empty().html(_html);
				$("#toggleTitle").text($(".infoTag.active").text());
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

/***/ 189:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(190);
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

/***/ 190:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(16)();
	// imports
	
	
	// module
	exports.push([module.id, ".jimu .col1 {\n  width: 50%;\n}\n.jimu .col2 {\n  width: 49%;\n}\n.jimu .imgWrap {\n  display: inline-block;\n  width: 100%;\n  margin-bottom: 10px;\n}\n.jimu .imgWrap,\n.jimu .imgWrap img {\n  width: 100%;\n  height: 100%;\n}\n.jimu .infoLink {\n  position: relative;\n  display: block;\n  cursor: pointer;\n}\n.figbar {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  padding: 0 10px;\n  background-color: #999;\n  background: rgba(0, 0, 0, 0.5);\n  font-size: 14px;\n  color: #fff;\n}\n.figbar:hover {\n  color: #ddd;\n}\n.infoLink.big {\n  width: 500px;\n  height: 360px;\n}\n.infoLink.mid {\n  width: 490px;\n  height: 180px;\n}\n.infoLink.sml {\n  width: 240px;\n  height: 170px;\n}\n.big .figbar {\n  height: 48px;\n  line-height: 48px;\n}\n.mid .figbar {\n  height: 38px;\n  line-height: 38px;\n}\n.sml .figbar {\n  height: 48px;\n  line-height: 1.2;\n  padding: 6px 10px;\n}\n.bot {\n  margin-right: -10px;\n}\n.bot .column {\n  width: 240px;\n  margin-right: 10px;\n}\n.infoLists {\n  margin-top: 28px;\n}\n.infoList li {\n  margin-bottom: 20px;\n  border-bottom: 1px solid #e2e2e2;\n  padding-bottom: 20px;\n}\n.detailCnt {\n  font-size: 14px;\n  color: #999;\n  line-height: 1.5;\n  cursor: pointer;\n}\n.detailCnt:hover {\n  color: #666;\n}\n.infoList {\n  min-height: 300px;\n}\n.infoList .media > .fl {\n  margin-right: 14px;\n  display: inline-block;\n  width: 130px;\n  height: 130px;\n}\n.infoList .media > .fl img {\n  max-width: 100%;\n  height: auto;\n  display: inline-block;\n}\n.infoList .detailTitle {\n  font-size: 18px;\n  color: #333;\n  margin-bottom: 12px;\n}\n.infoList .detailTitle:hover {\n  color: #666;\n}\n.infoList .btn-negative {\n  padding-top: 2px;\n  padding-bottom: 2px;\n}\n.infoList .detailCnt {\n  margin-top: 24px;\n}\n.tagsWrap .tagsList {\n  margin-right: -18px;\n}\n.tagsWrap .tagsList .btn {\n  display: inline-block;\n  margin: 0 14px 18px 0;\n  font-size: 16px;\n  width: 88px;\n  padding-left: 0;\n  padding-right: 0;\n}\n.infoLists .col1 {\n  width: 68%;\n}\n.infoLists .col2 {\n  width: 32%;\n}\n.timeline {\n  font-size: 14px;\n  color: #333;\n  line-height: 16px;\n  margin-bottom: 16px;\n}\n.timeline a {\n  display: block;\n  color: #333;\n}\n.timeline a:hover {\n  color: #666;\n}\n.timeline .label {\n  background-color: #d7d7d7;\n  display: inline-block;\n  line-height: 32px;\n  width: 80px;\n  margin-right: 8px;\n  text-align: center;\n}\n.btnLoadingWrap {\n  margin-bottom: 32px;\n}\n", ""]);
	
	// exports


/***/ },

/***/ 191:
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
				type : o.type,
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
			listAttr : "",
			type : "post"
		},o);
	
		return $(target).each(function(index) {
			var me = $(this);  
			return new Plugin(me,settings);
		});
	 };
	
	 module.exports = loadMore;

/***/ },

/***/ 192:
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
	'">\n		</span>\n		<div class="media-body">\n				<a class="detailTitle" href="' +
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
	((__t = ( news[i].time )) == null ? '' : __t) +
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