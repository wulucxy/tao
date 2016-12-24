webpackJsonp([11],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	/* 建议这里都引入 */
	__webpack_require__(19);
	__webpack_require__(161);
	var $ = window.$ || __webpack_require__(41);
	
	//工具类方法
	var util = __webpack_require__(42);
	
	//公共方法
	var common = __webpack_require__(43);
	
	
	//自定义功能写下面
	var tabs = __webpack_require__(128);
	
	//百度地图
	var baidu = __webpack_require__(164);
	
	//报考专业
	var major =  __webpack_require__(165);
	
	//切换顶部nav高亮
	common.switchNav(2);
	
	tabs($("#collegeWrapper"),{
		tabsItem : "nav li",
		items : ".content-wrap > section",
		klass : "current"
	});
	
	baidu.init(document.getElementById("baiduMap"),{
		location : {
			lat : $("[name=location]").val().split(":")[1],
			lng : $("[name=location]").val().split(":")[0]
		} 
	});
	
	major.init();
	
	var college = {
		init : function(){
			this.renderArea();
		},
		renderArea : function(){
			var that = this;
			$.ajax({
	    		url : "/system/area",
	    		type : "get",
	    		contentType: "application/json",
	    		success : function(res){
	    			if(typeof res == "string"){
	    				var res = $.parseJSON(res);
	    			}
	
	    			if(res.code!=1){
						warn(res.msg);
						return;
					}
	
					var res = res.result;
	    			var optionList = [];
	
	    			$.each(res,function(idx,ele){
	    				optionList.push('<option value='+ele.code+'>'+ele.name+'</option>');
	    			});
	
	    			$("[name=studentProvince]").empty();
	    			$("[name=studentProvince]").append(optionList.join(""));
	    		},
	    		error : function(){
	    			warn("网络请求失败，请稍后重试");
	    		}
	    	});
		}
	};
	
	college.init();
	
	
	
	


/***/ },

/***/ 161:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 164:
/***/ function(module, exports, __webpack_require__) {

	var extend =  __webpack_require__(46);
	
	var baidu = {
	
		init : function(wrapper,options){
			var options = extend({
				location : {
					lat : "39.915",
					lng : "116.404"
				}
			},options);
	
			this.wrapper = wrapper;
			this.options = options;
			this.renderMap();
		},
	
		renderMap : function(){
			var that = this,o = that.options;
			var map = new BMap.Map(this.wrapper);          // 创建地图实例  
			var point = new BMap.Point(o.location.lng,o.location.lat);  // 创建点坐标 
			map.centerAndZoom(point, 15); 
			var marker = new BMap.Marker(point);        // 创建标注    
			map.addOverlay(marker);                     // 将标注添加到地图中
		}
	
	};
	
	module.exports = baidu;

/***/ },

/***/ 165:
/***/ function(module, exports, __webpack_require__) {

	var $ = window.$ || __webpack_require__(41);
	var extend =  __webpack_require__(46);
	var tmpl = __webpack_require__(166);
	
	var major = {
		init : function(o){
			 //保存分页对象
	        this.pager = 1;
	
	        this.collegeId = $("[name=collegeId]").val();
	        this.province = $("[name=province]").val();
	
	        this.capacity = 10;
			//this.requestData();
			this.bindEvt();
		},
	
		requestData : function(btn){
			var that = this;
			var _data = {
				capacity : that.capacity,
				province : $("[name=studentProvince]").val(),
				year : $("[name=year]").val(),
				courseType : $("[name=courseType]").val(),
				collegeId : that.collegeId
			};
	
			var _key = _data.province + _data.courseType + _data.year;
	
			that.pager = that.pager || 1;
	
			_data.page = that.pager;
	
			$.ajax({
				url : preServer+that.province + "/data/college/"+that.collegeId+"/majors",
				type : "post",
				contentType: "application/json",
				data : JSON.stringify(_data),
				success : function(res){
					if(typeof res == "string"){
						var res = $.parseJSON(res);
					}
	
					if(res.code!=1){
						warn(res.msg);
						return;
					}
	
					
					that.insertData(btn,res.result,that.pager);
				}
			});
		},
	
		insertData : function(btn,res,pager){
	
			var that = this;
			var _html = tmpl(res);
	
			if(pager == 1){
				$(".majorLists").empty().html(_html);
			}else{
				$(".majorLists").append(_html);
			}
	
			$(".btn-loading").removeClass("loading disabled");
	
			var pageCount = Math.ceil(res.total / that.capacity);
			//最后一页
			if(pager >= pageCount){
				$(".btn-loading").addClass("loading-all");
			}else{
	            $(".btn-loading").removeClass("loading-all");
	        }
	
			//如果是点击加载更多，页码++
	        that.pager++;
		},
	
		bindEvt : function(){
			var that = this;
	
			$(".trigger").on("change",function(){
				var _data = {
					province : $("[name=studentProvince]").val(),
					year : $("[name=year]").val(),
					courseType : $("[name=courseType]").val()
				};
	
				var _key = _data.province + _data.courseType + _data.year;
				that.pager = 1;
	
			
				that.requestData();
			});
	
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

/***/ 166:
/***/ function(module, exports) {

	module.exports = function (obj) {
	obj || (obj = {});
	var __t, __p = '', __j = Array.prototype.join;
	function print() { __p += __j.call(arguments, '') }
	with (obj) {
	
	 if (majors.length == 0 && page == 1) { ;
	__p += '\n	<li class="no_transList"><i class="noListIcon"></i><em class="vm">暂无记录</em></li>\n';
	 }else{ ;
	__p += '	\n';
	 for (var i = 0; i < majors.length; i++) { ;
	__p += '\n<li class="majorList clearfix">\n	<a class="fr taoIcon next" href="/library/major/' +
	((__t = ( majors[i].majorId )) == null ? '' : __t) +
	'" target="_blank"></a>\n	<div class="majorDetail">\n		<h5 class="name badgeRow">\n			<em class="badgetitle vm">' +
	((__t = ( majors[i].majorName )) == null ? '' : __t) +
	'</em>\n			';
	 for (var j = 0; j < majors[i].tags.length; j++) { ;
	__p += '\n				<span class="badge red">' +
	((__t = ( majors[i].tags[j] )) == null ? '' : __t) +
	'</span>\n			';
	 } ;
	__p += '\n		</h5>\n		<p class="details">\n			<span>\n				<i class="icon-major icon-score"></i>\n				<em class="label">分数线：</em>\n				<em class="field orange">' +
	((__t = ( majors[i].threshold )) == null ? '' : __t) +
	'</em>\n			</span>\n			<span>\n				<i class="icon-major icon-term"></i>\n				<em class="label">学制：</em>\n				<em class="field orange">' +
	((__t = ( majors[i].eductionalSystme )) == null ? '' : __t) +
	'年</em>\n			</span>\n			<span>\n				<i class="icon-major icon-human"></i>\n				<em class="label">招生人数：</em>\n				<em class="field orange">' +
	((__t = ( majors[i].recruitCount )) == null ? '' : __t) +
	'人</em>\n			</span>\n		</p>\n		<p class="foot">\n			<i class="icon-major icon-hat"></i>\n			<em class="label g6 vm">所需科目：</em>\n			';
	 if (majors[i].subjects.length == 0) { ;
	__p += '\n				<span class="btn btn-primary btn-outlined vm">\n					不限\n				</span>\n			';
	 }else{ ;
	__p += '\n				';
	 for (var k = 0; k < majors[i].subjects.length; k++) { ;
	__p += '\n					<span class="btn btn-primary btn-outlined vm">\n					' +
	((__t = ( majors[i].subjects[k].subjectName )) == null ? '' : __t) +
	'\n					</span>\n				';
	 } ;
	__p += '\n			';
	 } ;
	__p += '\n		</p>\n	</div>\n</li>\n';
	 }} ;
	
	
	}
	return __p
	}

/***/ }

});
//# sourceMappingURL=collegeDetail.2a848290.js.map