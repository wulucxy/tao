webpackJsonp([34],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	/* 建议这里都引入 */
	__webpack_require__(16);
	__webpack_require__(260);
	var $ = window.$ || __webpack_require__(38);
	
	//工具类方法
	var util = __webpack_require__(39);
	
	//公共方法
	var common = __webpack_require__(40);
	
	
	//自定义功能写下面
	var tabs = __webpack_require__(154);
	
	//报考专业
	var major =  __webpack_require__(262);
	
	//切换顶部nav高亮
	common.switchNav(2);
	
	tabs($("#collegeWrapper"),{
		tabsItem : "nav li",
		items : ".content-wrap > section",
		klass : "current"
	});
	
	major.init();

/***/ },

/***/ 154:
/***/ function(module, exports, __webpack_require__) {

	var $ = window.$ || __webpack_require__(38);
	var extend =  __webpack_require__(43);
	 
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

/***/ 260:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 262:
/***/ function(module, exports, __webpack_require__) {

	var $ = window.$ || __webpack_require__(38);
	var extend =  __webpack_require__(43);
	var tmpl = __webpack_require__(263);
	var localData = __webpack_require__(143);
	
	var major = {
		init : function(o){
			
	        this.majorId = $("[name=majorId]").val();
	        this.province = $("[name=province]").val();
	        this.pager = 1;
	        this.capacity = 10;
			//this.requestData();
			this.bindEvt();
		},
	
		requestData : function(btn){
			var that = this;
			// var _data = {
			// 	province : that.province,
			// 	majorId : that.majorId,
			// 	page : that.pager
			// };
	
			var parm = [];
			parm.push("capacity="+that.capacity);
			parm.push("province="+that.province);
			parm.push("majorId="+that.majorId);
			parm.push("page="+that.pager);
	
			$.ajax({
				url : preServer+that.province + "/data/major/college?"+parm.join("&"),
				type : "get",
				contentType: "application/json",
				success : function(res){
					if(typeof res == "string"){
						var res = $.parseJSON(res);
					}
	
					if(res.code != 1){
						warn(res.msg);
						return;
					}
	
					//客户端修改数据
	                $.each(res.result.colleges,function(idx,ele){
	                    //增加code,name
	                    ele.code = ele.collegeId;
	                    ele.name = ele.collegeName;
	
	                    //获取city名称
	                    ele.city = {
	                        code : ele.city,
	                        name : localData.getCityName(ele.city)
	                    };
	
	                    //获取getCollegeTypeName(院校属性)
	                    ele.collegeType = {
	                        code : ele.collegeType,
	                        name : localData.getCollegeTypeName(ele.collegeType)
	                    };
	
	                    //获取getCollegeTypeName(院校性质)
	                    ele.ownerType = {
	                        code : ele.ownerType,
	                        name : localData.getOwnerTypeName(ele.ownerType)
	                    };
	
	                    //获取getLevelName(院校层次)
	                    ele.level = {
	                        code : ele.level,
	                        name : localData.getLevelName(ele.level)
	                    };
	
	                    //获取featrueList
	                    ele.feature = $.map(ele.feature,function(el,index){
	                        return {
	                            type : el,
	                            name : localData.getFeatureName(el)
	                        };
	                    });
	                });
	
	                res = res.result;
	
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
	
			if(pager == 1 && res.total == 0){
				$(".btn-loading").hide();
			}else{
				$(".btn-loading").show();
				$(".btn-loading").removeClass("loading disabled");
			}
	
			var pageCount = Math.ceil(res.total / that.capacity);
			//最后一页
			if(pager >= pageCount){
				$(".btn-loading").addClass("loading-all");
			}else{
	            $(".btn-loading").removeClass("loading-all");
	        }
	
			that.pager++;
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

/***/ 263:
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
	'</span>\n	</div>\n	</div>\n	<div class="fr">\n		<a href="/library/college/' +
	((__t = ( colleges[i].collegeId )) == null ? '' : __t) +
	'" target="_blank" class="btn btn-primary btn-mid">查看详情</a>\n	</div>\n</li>\n';
	 }} ;
	
	
	}
	return __p
	}

/***/ }

});
//# sourceMappingURL=major_2.a0c2ed48.js.map