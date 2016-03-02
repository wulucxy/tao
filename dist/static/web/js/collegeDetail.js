webpackJsonp([4],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	/* 建议这里都引入 */
	__webpack_require__(12);
	__webpack_require__(113);
	var $ = window.$ || __webpack_require__(32);
	
	//工具类方法
	var util = __webpack_require__(33);
	
	//公共方法
	var common = __webpack_require__(34);
	
	
	//自定义功能写下面
	var tabs = __webpack_require__(116);
	
	//百度地图
	var baidu = __webpack_require__(117);
	
	//报考专业
	var major =  __webpack_require__(118);
	
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

/***/ 113:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(114);
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

/***/ 114:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(14)();
	// imports
	
	
	// module
	exports.push([module.id, ".orange {\n  color: #f4b64f;\n}\n.dbWrapper {\n  margin-top: 12px;\n}\n.db .col1 {\n  width: 590px;\n}\n.db .col2 {\n  width: 300px;\n}\n.formWrap {\n  background-color: #fff;\n  padding: 20px 24px 36px;\n  margin-bottom: 30px;\n}\n.row.inline > * {\n  display: inline-block;\n}\n.contentWrap h4 {\n  font-weight: normal;\n  font-size: 18px;\n  margin-bottom: 24px;\n}\n.contentWrap .btn-mid {\n  width: 118px;\n  padding-top: 3px;\n  padding-bottom: 3px;\n  font-size: 16px;\n}\n.favIcon {\n  width: 17px;\n  height: 15px;\n  background-position: 0 -20px;\n  margin-right: 6px;\n}\n.detailInfos {\n  font-size: 13px;\n  color: #555;\n  line-height: 1.5;\n}\n.detailInfos .field {\n  display: inline-block;\n}\n.detailInfos .col {\n  float: left;\n  width: 33.3%;\n  margin-bottom: 14px;\n  font-size: 14px;\n  line-height: 18px;\n  height: 18px;\n}\n.detailInfos .col.c-6 {\n  width: 60%;\n}\n.baiduWrapper {\n  height: 260px;\n}\n.detailTxt {\n  margin-top: 16px;\n  line-height: 1.5;\n}\n.majorWrap .pad {\n  margin-right: -60px;\n}\n.majorWrap .bg {\n  padding: 14px 20px 0;\n}\n.majorWrap .bg .row {\n  margin-right: 60px;\n}\n.majorWrap .bg label {\n  width: 4em;\n}\n.majorWrap .row {\n  margin-bottom: 14px;\n}\n.majorWrap .selectWrap {\n  width: 180px;\n}\n.majorWrap .selectWrap .form-control {\n  width: 100%;\n}\n.row label {\n  font-size: 14px;\n  color: #666;\n}\n.majorLists {\n  border-top: 1px solid #e2e2e2;\n  margin-top: 20px;\n  padding-top: 20px;\n}\n.majorList {\n  border-bottom: 1px solid #e2e2e2;\n  padding-bottom: 20px;\n  margin-bottom: 20px;\n  position: relative;\n}\n.majorList .next {\n  position: absolute;\n  top: 50%;\n  margin-top: -26px;\n  right: 10px;\n}\n.majorList h5 {\n  font-size: 15px;\n  color: #333;\n  font-weight: normal;\n  margin-bottom: 12px;\n}\n.majorList .details {\n  margin-bottom: 20px;\n}\n.majorList .details span {\n  display: inline-block;\n  margin-right: 36px;\n  line-height: 18px;\n  height: 18px;\n}\n.majorList .details .label {\n  display: inline-block;\n  vertical-align: middle;\n  font-size: 13px;\n  color: #666;\n}\n.majorList .details .field {\n  display: inline-block;\n  vertical-align: middle;\n  font-size: 13px;\n}\n.majorList .btn-primary {\n  padding: 1px 12px;\n  border-radius: 0;\n}\n.icon-major {\n  display: inline-block;\n  vertical-align: middle;\n  background-repeat: no-repeat;\n  background-image: url(" + __webpack_require__(115) + ");\n  width: 24px;\n  height: 18px;\n}\n.icon-score {\n  background-position: 0 0;\n}\n.icon-term {\n  background-position: -24px 0;\n}\n.icon-human {\n  background-position: -48px 0;\n}\n.icon-hat {\n  background-position: -72px 0;\n}\n.next {\n  width: 18px;\n  height: 32px;\n  background-position: 0 -35px;\n}\n", ""]);
	
	// exports


/***/ },

/***/ 115:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/web/img/major.png"

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

/***/ 117:
/***/ function(module, exports, __webpack_require__) {

	var extend =  __webpack_require__(37);
	
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

/***/ 118:
/***/ function(module, exports, __webpack_require__) {

	var $ = window.$ || __webpack_require__(32);
	var extend =  __webpack_require__(37);
	var tmpl = __webpack_require__(119);
	
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

/***/ 119:
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