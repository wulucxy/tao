webpackJsonp([19],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	/* 建议这里都引入 */
	__webpack_require__(12);
	__webpack_require__(323);
	var $ = window.$ || __webpack_require__(32);
	
	//工具类方法
	var util = __webpack_require__(33);
	
	//公共方法
	var common = __webpack_require__(34);
	
	
	//自定义功能写下面
	var tabs = __webpack_require__(116);
	
	//报考专业
	var major =  __webpack_require__(325);
	
	//切换顶部nav高亮
	common.switchNav(2);
	
	tabs($("#collegeWrapper"),{
		tabsItem : "nav li",
		items : ".content-wrap > section",
		klass : "current"
	});
	
	major.init();

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

/***/ 323:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(324);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(28)(content, {});
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

/***/ 324:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(14)();
	// imports
	
	
	// module
	exports.push([module.id, ".orange {\n  color: #f4b64f;\n}\n.dbWrapper {\n  margin-top: 12px;\n}\n.db .col1 {\n  width: 590px;\n}\n.db .col2 {\n  width: 300px;\n}\n.formWrap {\n  background-color: #fff;\n  padding: 20px 24px 36px;\n  margin-bottom: 30px;\n}\n.row.inline > * {\n  display: inline-block;\n}\n.contentWrap > h4 {\n  font-weight: normal;\n  font-size: 18px;\n  margin-bottom: 24px;\n}\n.contentWrap .btn-mid {\n  width: 118px;\n  padding-top: 3px;\n  padding-bottom: 3px;\n  font-size: 16px;\n}\n.favIcon {\n  width: 17px;\n  height: 15px;\n  background-position: 0 -20px;\n  margin-right: 6px;\n}\n.detailWrap .inline .field {\n  display: inline-block;\n  margin-right: 100px;\n}\n.db-major .row {\n  margin-bottom: 20px;\n}\n.badgeRow {\n  margin-bottom: 10px;\n}\n.badgeRow .badgetitle {\n  display: inline-block;\n  color: #333;\n  font-size: 18px;\n  margin-right: 8px;\n}\n.schoolList li {\n  padding: 16px 0;\n  border-bottom: 1px solid #e2e2e2;\n  margin-bottom: 10px;\n}\n.schoolList .detail {\n  font-size: 14px;\n  color: #555;\n  line-height: 1.5;\n}\n.schoolList .detail .field {\n  display: inline-block;\n  margin-right: 16px;\n  color: #f4b64f;\n}\n.schoolList .detail .field:last-child {\n  margin-right: 0;\n}\n.schoolList .btn {\n  margin-top: 6px;\n}\n.schoolListWrap {\n  margin-top: 24px;\n}\n.detailInfos {\n  font-size: 13px;\n  color: #555;\n  line-height: 1.5;\n}\n.detailInfos .field {\n  display: inline-block;\n}\n.detailInfos .col {\n  float: left;\n  width: 33.3%;\n  margin-bottom: 14px;\n  font-size: 14px;\n  line-height: 18px;\n  height: 18px;\n}\n.detailInfos .col.c-6 {\n  width: 60%;\n}\n", ""]);
	
	// exports


/***/ },

/***/ 325:
/***/ function(module, exports, __webpack_require__) {

	var $ = window.$ || __webpack_require__(32);
	var extend =  __webpack_require__(37);
	var tmpl = __webpack_require__(326);
	
	var major = {
		init : function(o){
			
	        this.majorId = $("[name=majorId]").val();
	        this.province = $("[name=province]").val();
	        this.pager = 1;
	
			//this.requestData();
			this.bindEvt();
		},
	
		requestData : function(btn){
			var that = this;
			var _data = {
				province : that.province,
				majorId : that.majorId,
				page : that.pager
			};
	
			$.ajax({
				url : "/v2/client/"+that.province + "/data/major/college",
				type : "post",
				contentType: "application/json",
				data : JSON.stringify(_data),
				success : function(res){
					if(typeof res == "string"){
						var res = $.parseJSON(res);
					}
	
					//如果是点击加载更多，页码++，否则重置为1
	                if(btn){
	                    that.pager++;
	                }else{
	                    that.pager = 1;
	                }
	
					that.insertData(res,that.pager);
				}
			});
		},
	
		insertData : function(res,pager){
			var that = this;
			var _html = tmpl(res);
	
			if(pager == 1){
				$(".schoolList").empty().html(_html);
			}else{
				$(".schoolList").append(_html);
			}
	
			$(".btn-loading").removeClass("loading disabled");
	
			//最后一页
			if(pager > res.count){
				$(".btn-loading").addClass("loading-all");
			};
		},
	
		bindEvt : function(){
			var that = this;
	
			$(".btn-loading").on("click",function(e){
	    		e.preventDefault();
	    		var btn = $(this).closest(".btn");
	    		if(btn.hasClass("disabled") || btn.hasClass("loading-all")) return;
	    		btn.addClass("disabled loading");
	    		that.requestData(btn);
	    	});
	
			$(".btn-loading").trigger("click");
	
		}
	};
	
	module.exports = major;

/***/ },

/***/ 326:
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

/***/ }

});
//# sourceMappingURL=major_2.js.map