webpackJsonp([37],{

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	/* 建议这里都引入 */
	__webpack_require__(22);
	__webpack_require__(286);
	var $ = window.$ || __webpack_require__(45);
	
	//工具类方法
	var util = __webpack_require__(46);
	
	//公共方法
	var common = __webpack_require__(47);
	
	
	//自定义功能写下面
	//数据绑定
	var dataSet = __webpack_require__(288);
	
	dataSet.init();


/***/ }),

/***/ 286:
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(287);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(42)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/autoprefixer-loader/index.js!../../../node_modules/less-loader/index.js!./index.less", function() {
				var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/autoprefixer-loader/index.js!../../../node_modules/less-loader/index.js!./index.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),

/***/ 287:
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(24)();
	// imports
	
	
	// module
	exports.push([module.id, ".majorListWrap {\n  background-color: #fff;\n  padding: 28px 20px 36px;\n  margin-bottom: 30px;\n}\n.majorListWrap .itemLists .item {\n  white-space: nowrap;\n}\n.majorListWrap .col1 {\n  width: 590px;\n}\n.majorListWrap h4 {\n  font-size: 16px;\n  font-weight: bold;\n}\n.majorListWrap .detail {\n  margin-top: 16px;\n  font-size: 14px;\n  color: #999;\n}\n.majorListWrap .footCnt {\n  margin-top: 16px;\n  font-size: 14px;\n  color: #999;\n  line-height: 1.5;\n  cursor: pointer;\n}\n.majorListWrap .footCnt .moment {\n  vertical-align: baseline;\n  text-align: right;\n  font-size: 12px;\n  display: block;\n}\n.majorList li > a {\n  color: inherit;\n}\n.majorList-inner {\n  margin-top: 60px;\n}\n", ""]);
	
	// exports


/***/ }),

/***/ 288:
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * 专业解读
	 */
	
	var $ = window.$ || __webpack_require__(45);
	var extend =  __webpack_require__(50);
	var tmpl = __webpack_require__(289);
	
	var localData = __webpack_require__(134);
	
	//工具类方法
	var util = __webpack_require__(46);
	
	var provinceId = $("[name=province]").val();
	
	var dataSet = { 
		render : function(){
			var that = this;
			// 选择的列表
	        if(this.state.tagList.length){
	            var tagLis = $.map(that.state.tagList,function(item){
	            	var _val = item.type+":"+item.value;
	                return '<a class="tags" data-action="remove" href="javascript:;" data-value="'+_val+'">'+item.text+'<span class="taoIcon btn-x"></span></a>';
	            });
	
	            var _htmlArr = [];
	            _htmlArr.push('<a href="javascript:;" class="fr btn btn-default" data-action="clear">清空所有</a>');
	            _htmlArr.push('<span class="cat-text fl">已选择：</span>');
	            _htmlArr.push(tagLis.join(""));
	            $(".crumb").html(_htmlArr.join(""));
	        }else{
	        	$(".crumb").html('<span class="cat-text fl">已选择：</span>');
	        }
	
	        if(!$("input[name=major]").length){
	        	var inputList = [];
	        	inputList.push('<input type="hidden" name="major">');
	        	inputList.push('<input type="hidden" name="university">');
	        	inputList.push('<input type="hidden" name="universityLevel">');
	        	$(".crumb").append(inputList.join(""));
	        }
	
	        var _key = "0";
	    	$.each(that.state.tagList,function(idx,item){
	    		$('[name='+item.type+']').val(item.value || "");
	    		_key += $('[name='+item.type+']').val();
	    	});
	
	    	//分页
	    	// if(!that.pager){
	    	// 	that.pager = 1;
	    	// }
		},
	
		requestData : function(btn){
			var that = this,o = that.options;
	        var majorId =  $("[name=major]").val()
	        var universityId = $("[name=university]").val()
	        var universityLevel = $("[name=universityLevel]").val()
			var _data = {
	            capacity : that.capacity
			};
	
	        if (!util.isUndefined(majorId)) {
	            _data.majorId = majorId;
	        }
	        if (!util.isUndefined(universityId)) {
	            _data.universityId = universityId;
	        }
	        if (!util.isUndefined(universityLevel)) {
	            _data.universityLevel = universityLevel;
	        }
			
	        //如果是点击加载更多，页码++，否则重置为1
	        if(btn && $(btn).hasClass("btn-loading")){
	            that.pager++;
	        }else{
	            that.pager = 1;
	        }
	
	        _data.page = that.pager;
	
	      
			$.ajax({
				url : preServer+provinceId + "/newsV3/majorUnscrambleListWeb",
				type : "post",
	            contentType: "application/json",
				data : JSON.stringify(_data),
				success : function(res){
					if(typeof res == "string"){
						var res = $.parseJSON(res);
					}
	
	                if(res.code !=1){
	                    warn(res.msg);
	                    return;
	                }
	                res.result.majorList.forEach(function(item){
	                    item.date = util.formatDate(item.newsDate, 'yyyy-MM-dd hh:mm:ss')
	                })
	                res.result.provinceId = provinceId
	                res = res.result;
					that.loadList(res, that.pager);
				}
			});
		},
	
		loadList : function(data,pager){
			var that = this,o = that.options;
			var _html = tmpl(data);
	
			if(pager == 1){
				$(".majorList").empty().html(_html);
			}else{
				$(".majorList").append(_html);
			}
	
	        if(pager == 1 && data.total == 0){
	            $(".btn-loading").hide();
	        }else{
	            $(".btn-loading").show();
	            $(".btn-loading").removeClass("loading disabled");
	        }
	
	        var pageCount = Math.ceil(data.total / that.capacity);
	
			//最后一页
			if(pager >= pageCount){
				$(".btn-loading").addClass("loading-all");
			}else{
	            $(".btn-loading").removeClass("loading-all");
	        }
		},
	
		updateUI : function() {
	       this.render(); 
	    },
	
	    init : function(o){
	    	this.state = {
	            tagList:  []
	        };
	
	        this.options = o;
	
	        this.capacity = 10;
	
	        //保存分页对象
	        this.pager = 1;
	
	        this.render();
	        this.bindEvt();
	        
	    },
	
	    bindEvt : function(){
	    	var that = this;
	    	$(document).on("click","[data-action=add]",function(e){
	    		e.preventDefault();
	    		var link = $(e.target);
	
	            $("#collegeInput").val("");
	
	            that.state.searchType = 0;
	    		
	    		var type = link.data("value").split(":")[0],
	    			val =  link.data("value").split(":")[1];
	
	            link.closest(".row").find(".item").not(link).removeClass("current");
	            link.toggleClass('current')
	
	            $.each(that.state.tagList,function(idx,item){
	                if(type == item.type){
	                    that.state.tagList.splice(idx,1);
	                    return false;
	                }
	            });
	
				that.state.tagList.push({
					type : type,
					value : val,
					text : link.text()
				});  
	
	             that.render();
				that.requestData(link);  		
	    	});
	
	    	$(document).on("click","[data-action=clear]",function(e){
	    		e.preventDefault();
	
	            that.state.searchType = 0;
	
	            $("#collegeInput").val("");
	    		$("[data-action=add]").removeClass("current");
				that.state.tagList = [];
	
	            that.render();
				that.requestData();  		
	    	});
	
	    	$(document).on("click","[data-action=remove]",function(e){
	    		e.preventDefault();
	
	            $("#collegeInput").val("");
	
	            //searchType控制是否为关键词搜索
	            that.state.searchType = 0;
	
	    		var link = $(e.target).closest(".tags");
	    		var type = link.data("value").split(":")[0],
	    			value =  link.data("value").split(":")[1];
				
				 $.each(that.state.tagList,function(idx,item){
	                if(type == item.type && value == item.value){
	                    that.state.tagList.splice(idx,1);
	                    var attr = '[data-value="'+type+':'+value+'"]';
	                    $(attr).removeClass("current");
	                    return false;
	                }
	            });
	
	            that.render();
				that.requestData(link);  		
	    	});
	
	    	$(".btn-loading").on("click",function(e){
	    		e.preventDefault();
	    		var btn = $(this).closest(".btn");
	    		if(btn.hasClass("disabled") || btn.hasClass("loading-all")) return;
	    		btn.addClass("disabled loading");
	
	            if(that.state.searchType == 0){
	                that.requestData(btn);
	            }
	    	});
	
	        that.state.searchType = 0;
	        that.requestData();
	        
	    }
	};
	
	module.exports = dataSet;

/***/ }),

/***/ 289:
/***/ (function(module, exports) {

	module.exports = function (obj) {
	obj || (obj = {});
	var __t, __p = '', __j = Array.prototype.join;
	function print() { __p += __j.call(arguments, '') }
	with (obj) {
	
	 if (majorList.length == 0 && page == 1) { ;
	__p += '\n	<li class="no_transList"><i class="noListIcon"></i><em class="vm">暂无记录</em></li>\n';
	 }else{ ;
	__p += '	\n';
	 for (var i = 0; i < majorList.length; i++) { ;
	__p += '\n<li class="clearfix">\n	<a class="media" href=\'/' +
	((__t = ( provinceId )) == null ? '' : __t) +
	'/newsV3/majorUnscrambleDetail?newsId=' +
	((__t = ( majorList[i].newsId )) == null ? '' : __t) +
	'\'>\n	<span class="fl imgWrap mr10 dib">\n		<img src="' +
	((__t = ( majorList[i].newsIconUrl )) == null ? '' : __t) +
	'" class="responsive" />\n	</span>\n	<div className="media-body">\n		<h4 class="name">' +
	((__t = ( majorList[i].newsTitle )) == null ? '' : __t) +
	'</h4>\n		<div class="detail">样本院校：' +
	((__t = ( majorList[i].newsUniversityName )) == null ? '' : __t) +
	'</div>\n	</div>\n	<div class="footCnt clearfix">\n		<span class="moment">' +
	((__t = ( majorList[i].date )) == null ? '' : __t) +
	'</span>\n	</div>\n	</a>\n</li>\n';
	 }} ;
	
	
	}
	return __p
	}

/***/ })

});
//# sourceMappingURL=majorList.js.map