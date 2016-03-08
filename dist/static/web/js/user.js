webpackJsonp([20],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	/* 建议这里都引入 */
	__webpack_require__(12);
	__webpack_require__(334);
	var $ = window.$ || __webpack_require__(32);
	
	//工具类方法
	var util = __webpack_require__(33);
	
	//公共方法
	var common = __webpack_require__(34);
	
	
	//自定义功能写下面
	var tabs = __webpack_require__(116);
	//加载更多模块
	var loadMore = __webpack_require__(306);
	
	
	//历史模块
	var archive = __webpack_require__(336);
	
	//历史模块
	var history = __webpack_require__(337);
	
	//收藏模块
	var collection = __webpack_require__(338);
	
	//图片上传模块
	var uploader = __webpack_require__(339);
	
	// 导航切换
	$(".userInfoList").on("click","[data-link]",function(e){
		e.preventDefault();
		var olink = $(this);
		var linkObj = $("."+olink.data("link"));
		if(olink.parent().hasClass("current")) return;
	
		$(".userInfoList li").removeClass("current");
		olink.parent().addClass("current");
	
		linkObj.siblings().hide();
		linkObj.show();
	});
	
	
	//加载更多
	$(".load-more-list").each(function(idx,ele){
		if(idx == 0){
			loadMore($(ele),{
				tmpl : __webpack_require__(341)("./"+$(ele).data("tmpl")+".ejs"),
				listAttr : "historyList"
			});
		}else if(idx == 1){
			loadMore($(ele),{
				tmpl : __webpack_require__(341)("./"+$(ele).data("tmpl")+".ejs"),
				listAttr : "codes"
			});
		}
	});
	
	//我的资料
	archive.init();
	
	//历史模块调用
	history.init();
	
	//收藏模块调用
	collection.init();
	
	//图片上传
	uploader.init({
		ele : $("#picker")
	});
	
	
	
	
	
	
	


/***/ },

/***/ 116:
/***/ function(module, exports, __webpack_require__) {

	var $ = window.$ || __webpack_require__(32);
	var extend =  __webpack_require__(37);
	 
	function Plugin(t,o){
			this.target=t;
			this.options=o;
		   	this.tabs = t.find(o.tabsItem);
		 	this.items =t.find(o.items);
		 	this.visible_item = o.visible_item;
		 	
		 	this.tabs.eq(this.visible_item).addClass(o.klass);
		 	this.items.eq(this.visible_item).addClass(o.klass);
			this.total_items=this.tabs.length;
			this.init(this.options);
		   }
	  
	   Plugin.prototype.change=function(now){
		  var that = this, o = that.options, $this = that.target;
		  
		  if (typeof now == "undefined") {  	
					now = that.visible_item + 1;                   
					now = now >= that.total_items ? 0 : now;         
				}
	
		  that.tabs.removeClass(o.klass).eq(now).addClass(o.klass);
		  that.items.hide().removeClass(o.klass).eq(now).addClass(o.klass).show(0,function(){
			  that.visible_item=now;
			  });  
		  };
	  
	  Plugin.prototype.init=function(o){
		  var that = this, $this = that.target;
		  if(that.options.startCallback){
		  	 that.options.startCallback.call(that);
		  }
	    that.change(o.visible_item);
		  that.tabs.off(o.event).on(o.event,function(e){
		  		e.preventDefault();
			  	if(o.event=='mouseover' || o.event=='click' ){
				  if($(this).hasClass(o.klass)){return;}
				  that.change($(this).index());
	        if(that.options.callback){
	          that.options.callback.call(that);
	        }
				}
			  	else return false;
	      });
		};
	
	 var Tabs = function(target,o){
	 	var settings=extend({
			event : 'click',       //触发条件
			visible_item : 0,      //默认显示条目
			callback : null,       //点击tab回调
			tabsItem : "",
			items : "",
			klass : "current"
		},o);
	
		return $(target).each(function(index) {
			var me = $(this);  
			return new Plugin(me,settings);
		});
	 };
	
	 module.exports = Tabs;

/***/ },

/***/ 306:
/***/ function(module, exports, __webpack_require__) {

	var $ = window.$ || __webpack_require__(32);
	var extend =  __webpack_require__(37);
	 
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

/***/ 334:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 336:
/***/ function(module, exports, __webpack_require__) {

	var $ = window.$ || __webpack_require__(32);
	__webpack_require__(49);
	
	//公共方法
	var common = __webpack_require__(34);
	
	var archive = {
		init : function(){
			$("#myInfoForm").validator({
				errorParent: '.row',
			    successCallback: function(e) {
			      var target = $(e.target).closest('.btn');
			      //执行到下一步操作
			      //
	
			    },
			    focusinCallback: function() {
			      var _ele = $(this);
			      common.hideError($('.errTxt'));
			    },
	
			    errorCallback: function(unvalidFields) {
			      var oError = $('.errTxt');
			      common.showError($('.errTxt'));
			    }
			});
		}
	
	
	};
	
	module.exports = archive;

/***/ },

/***/ 337:
/***/ function(module, exports, __webpack_require__) {

	var $ = window.$ || __webpack_require__(32);
	
	module.exports = {
		init : function(){
			// 历史方案
			$("#caseType").on("change",function(){
				var val = $(this).val();
					
				$(".btnLoadingWrap").toggle(!Number(val));
	
				$("#historyWrapper .well").each(function(idx,ele){
					var type = $(ele).attr("type");
					var item = $(ele);
	
					if(val == 0){
						var match = true;
					}else{
						var match = (val.indexOf(type) >= 0);
					}
	
					return item.toggle(match);
				});
			});
	
			$(".btn-loading").trigger("click");
		}
	};

/***/ },

/***/ 338:
/***/ function(module, exports, __webpack_require__) {

	var $ = window.$ || __webpack_require__(32);
	var tabs = __webpack_require__(116);
	
	var collection = {
		init : function(){
			tabs($("#collectionWrapper"),{
				tabsItem : "nav li",
				items : ".content-wrap > section",
				klass : "current"
			});
		}
	
	
	};
	
	module.exports = collection;

/***/ },

/***/ 339:
/***/ function(module, exports, __webpack_require__) {

	var $ = window.$ || __webpack_require__(32);
	var extend = __webpack_require__(340);
	var BASE_URL = "//localhost:9999/";
	var uploader = {
		init : function(settings){
			this.settings = settings;
			this.bindEvt();
		},
	
		bindEvt : function(){
			var that = this,o = that.settings;
	
			that.uploader = WebUploader.create({
			    // swf文件路径
			    swf: BASE_URL + 'js/Uploader.swf',
	
			    // 文件接收服务端。
			    server: 'http://webuploader.duapp.com/server/fileupload.php',
	
			    // 选择文件的按钮。可选。
			    // 内部根据当前运行是创建，可能是input元素，也可能是flash.
			    pick: o.el,
	
			    // 不压缩image, 默认如果是jpeg，文件上传前会压缩一把再上传！
			    resize: false
			});
	
			console.log(that.uploader);
	
		}
	
	
	};
	
	module.exports = uploader;

/***/ },

/***/ 340:
/***/ function(module, exports) {

	'use strict';
	
	var hasOwn = Object.prototype.hasOwnProperty;
	var toStr = Object.prototype.toString;
	
	var isArray = function isArray(arr) {
		if (typeof Array.isArray === 'function') {
			return Array.isArray(arr);
		}
	
		return toStr.call(arr) === '[object Array]';
	};
	
	var isPlainObject = function isPlainObject(obj) {
		if (!obj || toStr.call(obj) !== '[object Object]') {
			return false;
		}
	
		var hasOwnConstructor = hasOwn.call(obj, 'constructor');
		var hasIsPrototypeOf = obj.constructor && obj.constructor.prototype && hasOwn.call(obj.constructor.prototype, 'isPrototypeOf');
		// Not own constructor property must be Object
		if (obj.constructor && !hasOwnConstructor && !hasIsPrototypeOf) {
			return false;
		}
	
		// Own properties are enumerated firstly, so to speed up,
		// if last one is own, then all properties are own.
		var key;
		for (key in obj) {/**/}
	
		return typeof key === 'undefined' || hasOwn.call(obj, key);
	};
	
	module.exports = function extend() {
		var options, name, src, copy, copyIsArray, clone,
			target = arguments[0],
			i = 1,
			length = arguments.length,
			deep = false;
	
		// Handle a deep copy situation
		if (typeof target === 'boolean') {
			deep = target;
			target = arguments[1] || {};
			// skip the boolean and the target
			i = 2;
		} else if ((typeof target !== 'object' && typeof target !== 'function') || target == null) {
			target = {};
		}
	
		for (; i < length; ++i) {
			options = arguments[i];
			// Only deal with non-null/undefined values
			if (options != null) {
				// Extend the base object
				for (name in options) {
					src = target[name];
					copy = options[name];
	
					// Prevent never-ending loop
					if (target !== copy) {
						// Recurse if we're merging plain objects or arrays
						if (deep && copy && (isPlainObject(copy) || (copyIsArray = isArray(copy)))) {
							if (copyIsArray) {
								copyIsArray = false;
								clone = src && isArray(src) ? src : [];
							} else {
								clone = src && isPlainObject(src) ? src : {};
							}
	
							// Never move original objects, clone them
							target[name] = extend(deep, clone, copy);
	
						// Don't bring in undefined values
						} else if (typeof copy !== 'undefined') {
							target[name] = copy;
						}
					}
				}
			}
		}
	
		// Return the modified object
		return target;
	};
	


/***/ },

/***/ 341:
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./college.ejs": 342,
		"./history.ejs": 343,
		"./info.ejs": 344,
		"./test.ejs": 345
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 341;


/***/ },

/***/ 342:
/***/ function(module, exports) {

	module.exports = function (obj) {
	obj || (obj = {});
	var __t, __p = '', __j = Array.prototype.join;
	function print() { __p += __j.call(arguments, '') }
	with (obj) {
	
	 if (colleges.length == 0) { ;
	__p += '\n	<li class="no_transList"><i class="noListIcon"></i><em class="vm">暂无记录</em></li>\n';
	 }else{ ;
	__p += '	\n';
	 for (var i = 0; i < colleges.length; i++) { ;
	__p += '\n<li class="clearfix">\n	<div class="fl">\n	<h4 class="name badgeRow"><em class="badgetitle vm">' +
	((__t = ( colleges[i].collegeName )) == null ? '' : __t) +
	'</em>\n		';
	 for (var j = 0; j < colleges[i].feature.length; j++) { ;
	__p += '\n			';
	 if(colleges[i].feature[j].type == 1) { ;
	__p += '\n				<span class="badge green">' +
	((__t = ( colleges[i].feature[j].name )) == null ? '' : __t) +
	'</span>\n			';
	 }else if(colleges[i].feature[j].type == 2){ ;
	__p += '\n				<span class="badge red">' +
	((__t = ( colleges[i].feature[j].name )) == null ? '' : __t) +
	'</span>\n			';
	 }else{ ;
	__p += '\n				<span class="badge">' +
	((__t = ( colleges[i].feature[j].name )) == null ? '' : __t) +
	'</span>\n			';
	 } ;
	__p += '\n		';
	 } ;
	__p += '\n	</h4>\n	<div class="detail">\n		<span class="label">院校属地：</span><span class="field">' +
	((__t = ( colleges[i].city.name )) == null ? '' : __t) +
	'</span>\n		<span class="label">院校分类：</span><span class="field">' +
	((__t = ( colleges[i].collegeType.name )) == null ? '' : __t) +
	'</span>\n		<span class="label">院校性质：</span><span class="field">' +
	((__t = ( colleges[i].ownerType.name )) == null ? '' : __t) +
	'</span>\n		<span class="label">院校层次：</span><span class="field">' +
	((__t = ( colleges[i].level.name )) == null ? '' : __t) +
	'</span>\n	</div>\n	</div>\n	<div class="fr">\n		<a href="#" class="btn btn-primary btn-mid">查看详情</a>\n	</div>\n</li>\n';
	 }} ;
	
	
	}
	return __p
	}

/***/ },

/***/ 343:
/***/ function(module, exports) {

	module.exports = function (obj) {
	obj || (obj = {});
	var __t, __p = '', __j = Array.prototype.join;
	function print() { __p += __j.call(arguments, '') }
	with (obj) {
	
	 for (var i = 0; i < historyList.length; i++) { ;
	__p += '\n<div class="well clearfix" type ="' +
	((__t = ( historyList[i].type )) == null ? '' : __t) +
	'">\n	<div class="media fl">\n		<div class="span fl">\n			<span class="btn btn-primary">' +
	((__t = ( historyList[i].caseName )) == null ? '' : __t) +
	'</span>\n		</div>\n		<div class="media-body g3 well_body">\n			<p>\n			<span class="label">订单号：</span><span class="field">' +
	((__t = ( historyList[i].order )) == null ? '' : __t) +
	'</span>\n			<span class="label">生成日期：</span><span class="field">' +
	((__t = ( historyList[i].createTime )) == null ? '' : __t) +
	'</span>\n			</p>\n			<p>\n			<span class="label">高考分数：</span><span class="field">' +
	((__t = ( historyList[i].score )) == null ? '' : __t) +
	'</span>\n			<span class="label">全省排名：</span><span class="field">' +
	((__t = ( historyList[i].place )) == null ? '' : __t) +
	'</span>\n			</p>\n		</div>\n	</div>\n	<div class="detailInfo fr">\n		<div class="row btnRow"><a href="#" class="btn btn-primary btn-medium" targe="_blank">付款</a></div>\n		';
	 if( historyList[i].detailUrl != '' ) { ;
	__p += '				\n				<a class="detailTxt" href="' +
	((__t = ( historyList[i].detailUrl )) == null ? '' : __t) +
	'" target="_blank">查看详细信息</a>\n		';
	 }else{ ;
	__p += '\n				<a href="javascript:;" >&nbsp;</a>\n		';
	 } ;
	__p += '\n	</div>\n</div>\n';
	 } ;
	
	
	}
	return __p
	}

/***/ },

/***/ 344:
/***/ function(module, exports) {

	module.exports = function (obj) {
	obj || (obj = {});
	var __t, __p = '';
	with (obj) {
	__p += '';
	
	}
	return __p
	}

/***/ },

/***/ 345:
/***/ function(module, exports) {

	module.exports = function (obj) {
	obj || (obj = {});
	var __t, __p = '', __j = Array.prototype.join;
	function print() { __p += __j.call(arguments, '') }
	with (obj) {
	
	 if (codes.length == 0) { ;
	__p += '\n	<li class="no_transList"><i class="noListIcon"></i><em class="vm">暂无记录</em></li>\n';
	 }else{ ;
	__p += '	\n';
	 for (var i = 0; i < codes.length; i++) { ;
	__p += '\n<li class="clearfix">\n	<div class="well clearfix" type="1">\n	<div class="media fl">\n		<p><em class="label">授权码：</em><em className="field">' +
	((__t = ( codes[i].code )) == null ? '' : __t) +
	'</em></p>\n		<p><em class="label">生成日期：</em><em className="field">' +
	((__t = ( codes[i].date )) == null ? '' : __t) +
	'</em></p>\n	</div>\n	<div class="detailInfo fr">\n		<div class="row btnRow"><a href="#" class="btn btn-primary btn-medium" targe="_blank">查看</a></div>\n	</div>\n</div>\n</li>\n';
	 }} ;
	
	
	}
	return __p
	}

/***/ }

});
//# sourceMappingURL=user.js.map