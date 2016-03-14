webpackJsonp([9],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	/* 建议这里都引入 */
	__webpack_require__(14);
	__webpack_require__(135);
	var $ = window.$ || __webpack_require__(36);
	
	//工具类方法
	var util = __webpack_require__(37);
	
	//公共方法
	var common = __webpack_require__(38);
	
	
	//自定义功能写下面
	var tabs = __webpack_require__(138);
	
	//百度地图
	var baidu = __webpack_require__(139);
	
	//报考专业
	var major =  __webpack_require__(140);
	
	//切换顶部nav高亮
	common.switchNav(2);
	
	tabs($("#collegeWrapper"),{
		tabsItem : "nav li",
		items : ".content-wrap > section",
		klass : "current"
	});
	
	baidu.init(document.getElementById("baiduMap"),{
		location : {
			lat : $("[name=location]").val().split(":")[0],
			lng : $("[name=location]").val().split(":")[1]
		} 
	});
	
	major.init();
	
	// 排名文案处理
	var place = $("[name=place]").val().split("-");
	$(".place em").eq(0).text(place[0]+"排名");
	$(".place em").eq(1).text("No."+place[1]);


/***/ },

/***/ 135:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 138:
/***/ function(module, exports, __webpack_require__) {

	var $ = window.$ || __webpack_require__(36);
	var extend =  __webpack_require__(41);
	 
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

/***/ 139:
/***/ function(module, exports, __webpack_require__) {

	var extend =  __webpack_require__(41);
	
	var baidu = {
	
		init : function(wrapper,options){
			var options = extend({
				location : {
					lat : "116.404",
					lng : "39.915"
				}
			},options);
	
			this.wrapper = wrapper;
			this.options = options;
			this.renderMap();
		},
	
		renderMap : function(){
			var that = this,o = that.options;
			var map = new BMap.Map(this.wrapper);          // 创建地图实例  
			console.log(o.location.lat, o.location.lng);
			var point = new BMap.Point(o.location.lat, o.location.lng);  // 创建点坐标 
			map.centerAndZoom(point, 15); 
			var marker = new BMap.Marker(point);        // 创建标注    
			map.addOverlay(marker);                     // 将标注添加到地图中
		}
	
	};
	
	module.exports = baidu;

/***/ },

/***/ 140:
/***/ function(module, exports, __webpack_require__) {

	var $ = window.$ || __webpack_require__(36);
	var extend =  __webpack_require__(41);
	var tmpl = __webpack_require__(141);
	
	var major = {
		init : function(o){
			 //保存分页对象
	        this.pageObject = {};
	
	        this.collegeId = $("[name=collegeId]").val();
	        this.province = $("[name=province]").val();
	
			//this.requestData();
			this.bindEvt();
		},
	
		requestData : function(btn){
			var that = this;
			var _data = {
				province : $("[name=province]").val(),
				year : $("[name=year]").val(),
				courseType : $("[name=courseType]").val(),
				collegeId : that.collegeId
			};
	
			var _key = _data.province + _data.collegeType + _data.year;
			_data.page = that.pageObject[_key];
	
			$.ajax({
				url : "/v2/client/"+that.province + "/data/college/"+that.collegeId+"/majors",
				type : "post",
				contentType: "application/json",
				data : JSON.stringify(_data),
				success : function(res){
					if(typeof res == "string"){
						var res = $.parseJSON(res);
					}
	
					//如果是点击加载更多，页码++，否则重置为1
	                if(btn){
	                    that.pageObject[_key]++;
	                }else{
	                    that.pageObject[_key] = 1;
	                }
	
					that.insertData(res,that.pageObject[_key]);
				}
			});
		},
	
		insertData : function(res,pager){
			var that = this;
			var _html = tmpl(res);
	
			if(pager == 1){
				$(".majorLists").empty().html(_html);
			}else{
				$(".majorLists").append(_html);
			}
	
			$(".btn-loading").removeClass("loading disabled");
	
			//最后一页
			if(pager > res.count){
				$(".btn-loading").addClass("loading-all");
			};
		},
	
		bindEvt : function(){
			var that = this;
	
			$(".trigger").on("change",function(){
				var _data = {
					province : $("[name=province]").val(),
					year : $("[name=year]").val(),
					courseType : $("[name=courseType]").val()
				};
	
				var _key = _data.province + _data.collegeType + _data.year;
				that.pageObject[_key] = 1;
				that.requestData();
			});
	
			$(".btn-loading").on("click",function(e){
	    		e.preventDefault();
	    		var btn = $(this).closest(".btn");
	    		if(btn.hasClass("disabled") || btn.hasClass("loading-all")) return;
	    		btn.addClass("disabled loading");
	    		that.requestData(btn);
	    	});
	
			$(".trigger").trigger("change");
	
		}
	
	
	};
	
	module.exports = major;

/***/ },

/***/ 141:
/***/ function(module, exports) {

	module.exports = function (obj) {
	obj || (obj = {});
	var __t, __p = '', __j = Array.prototype.join;
	function print() { __p += __j.call(arguments, '') }
	with (obj) {
	
	 if (majors.length == 0) { ;
	__p += '\n	<li class="no_transList"><i class="noListIcon"></i><em class="vm">暂无记录</em></li>\n';
	 }else{ ;
	__p += '	\n';
	 for (var i = 0; i < majors.length; i++) { ;
	__p += '\n<li class="majorList clearfix">\n	<a class="fr taoIcon next" href="#" target="_blank"></a>\n	<div class="majorDetail">\n		<h5 class="name badgeRow">\n			<em class="badgetitle vm">' +
	((__t = ( majors[i].majorName )) == null ? '' : __t) +
	'</em>\n			';
	 for (var j = 0; j < majors[i].tags.length; j++) { ;
	__p += '\n				<span class="badge red">' +
	((__t = ( majors[i].tags[j] )) == null ? '' : __t) +
	'</span>\n			';
	 } ;
	__p += '\n		</h5>\n		<p class="details">\n			<span>\n				<i class="icon-major icon-score"></i>\n				<em class="label">分数线：</em>\n				<em class="field orange">' +
	((__t = ( majors[i].majorName )) == null ? '' : __t) +
	'</em>\n			</span>\n			<span>\n				<i class="icon-major icon-term"></i>\n				<em class="label">学制：</em>\n				<em class="field orange">' +
	((__t = ( majors[i].eductionalSystme )) == null ? '' : __t) +
	'年</em>\n			</span>\n			<span>\n				<i class="icon-major icon-human"></i>\n				<em class="label">招生人数：</em>\n				<em class="field orange">' +
	((__t = ( majors[i].recruitCount )) == null ? '' : __t) +
	'人</em>\n			</span>\n		</p>\n		<p class="foot">\n			<i class="icon-major icon-hat"></i>\n			<em class="label g6 vm">所需科目：</em>\n			';
	 for (var k = 0; k < majors[i].subjects.length; k++) { ;
	__p += '\n				<span class="btn btn-primary btn-outlined vm">\n				' +
	((__t = ( majors[i].subjects[k].subjectName )) == null ? '' : __t) +
	'\n				</span>\n			';
	 } ;
	__p += '\n		</p>\n	</div>\n</li>\n';
	 }} ;
	
	
	}
	return __p
	}

/***/ }

});
//# sourceMappingURL=collegeDetail.js.map