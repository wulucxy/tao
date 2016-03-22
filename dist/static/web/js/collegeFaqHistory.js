webpackJsonp([12],{

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
	var history = {
		init : function(){
			//默认分页开始
			this.pager = 1;
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
	
	    	$(".btn-loading").trigger("click");
		}
	};
	
	//history.init();
	
	


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
	exports.push([module.id, ".orange {\n  color: #f4b64f;\n}\n.faqWrapper {\n  margin-top: 12px;\n}\n.formWrap > .col1 {\n  width: 590px;\n}\n.formWrap > .col2 {\n  width: 300px;\n}\n.formWrap {\n  background-color: #fff;\n  padding: 32px 24px 36px;\n  margin-bottom: 30px;\n}\n.list-group-item {\n  color: #555;\n  font-size: 15px;\n  line-height: 23px;\n}\n.list-group-item .body {\n  display: block;\n  margin-left: 232px;\n}\n.icon-right {\n  width: 13px;\n  height: 23px;\n  background-position: -43px 0;\n}\n.active .icon-right {\n  width: 13px;\n  height: 23px;\n  background-position: -30px 0;\n}\n.faqList {\n  margin: 32px 0;\n}\n.history .list-group-item .fr {\n  margin-top: 12px;\n}\n", ""]);
	
	// exports


/***/ }

});
//# sourceMappingURL=collegeFaqHistory.js.map