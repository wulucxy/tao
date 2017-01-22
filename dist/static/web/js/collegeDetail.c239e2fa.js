webpackJsonp([11],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	/* 建议这里都引入 */
	__webpack_require__(21);
	__webpack_require__(166);
	var $ = window.$ || __webpack_require__(44);
	
	//工具类方法
	var util = __webpack_require__(45);
	
	//公共方法
	var common = __webpack_require__(46);
	
	
	//自定义功能写下面
	var tabs = __webpack_require__(131);
	
	//百度地图
	var baidu = __webpack_require__(169);
	
	//报考专业
	var major =  __webpack_require__(170);
	
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
	
	var college = {
		init : function(){
	        this.addYear();
			this.renderArea();
		},
	
	    addYear : function(){
	        var that = this;
	
	        var nowYear = 2017;
	        var yearArr = [];
	
	        for(var i=0;i<2;i++){
	            yearArr.push(nowYear--);
	        }
	
	        var optionList = [];
	
	        $.each(yearArr,function(idx,ele){
	            optionList.push('<option value='+ele+'>'+ele+'</option>');
	        });
	
	        $("[name=Year]").empty().append(optionList.join(""));
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
	
	                major.init();
	    		},
	    		error : function(){
	    			warn("网络请求失败，请稍后重试");
	    		}
	    	});
		}
	};
	
	college.init();
	
	
	
	


/***/ },

/***/ 166:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 169:
/***/ function(module, exports, __webpack_require__) {

	var extend =  __webpack_require__(49);
	
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

/***/ 170:
/***/ function(module, exports, __webpack_require__) {

	var $ = window.$ || __webpack_require__(44);
	var extend =  __webpack_require__(49);
	var tmpl = __webpack_require__(171);
	
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
				year : $("[name=Year]").val(),
				batch : $("[name=batch]").val(),
				collegeId : that.collegeId
			};
	
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
					batch : $("[name=batch]").val()
				};
	
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

/***/ 171:
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
	 for (var i = 0; i < majors.length; i++) {
		var list = majors[i];
	 ;
	__p += '\n<li class="majorList clearfix v2">\n	<h3>		\n	<a href="/library/major/' +
	((__t = ( list.majorId )) == null ? '' : __t) +
	'" class="textLink" target="_blank">' +
	((__t = (list.majorName)) == null ? '' : __t) +
	'\n	</a>\n	</h3>\n	';
	 if (list.field){ ;
	__p += '\n	<div class="g9">\n		（' +
	((__t = ( list.field )) == null ? '' : __t) +
	'）\n	</div>\n	';
	 } ;
	__p += '\n	';
	 if (list.scores.length > 0) { ;
	__p += '\n		<div class="tableWrap mt20 mb20">\n				<table class="table table-bordered text-center">\n					<thead>\n						<tr>\n							<td width="140">科类</td>\n							<td width="240">录取平均分（分）</td>\n							<td width="140">分差（分）</td>\n							<td width="140">学制（年）</td>\n							<td width="240">招生人数（人）</td>\n						</tr>\n					</thead>\n					<tbody>\n						';
	 for (var j = 0; j < list.scores.length; j++) { 
								var score = list.scores[j];
							;
	__p += '\n						<tr>\n							<td>\n							';
	 if (score.courseType == 1) { ;
	__p += '\n							   		文科\n							';
	 }else if (score.courseType == 0) { ;
	__p += '\n							   		理科\n							';
	 } ;
	__p += '\n							</td>\n					<td>' +
	((__t = ( score.admittedScore )) == null ? '' : __t) +
	'</td>\n					<td>' +
	((__t = ( score.diffScore )) == null ? '' : __t) +
	'</td>\n					<td>' +
	((__t = ( score.eductionalSystme )) == null ? '' : __t) +
	'</td>\n					<td>' +
	((__t = ( score.recruitCount )) == null ? '' : __t) +
	'</td>\n					</tr>\n					';
	 } ;
	__p += '\n					</tbody>\n				</table>\n		</div>\n	';
	 }else{ ;
	__p += '\n			';
	 
					/* 
						<div class="f16 g9 empty mt10 mb10">暂无历史数据</div> 
					*/ 
				;
	__p += '\n	';
	 } ;
	__p += '\n	<div class="row mt10">\n		<span class="label">所需科目：</span>\n		';
	 if (!list.subjects.length) { ;
	__p += '\n		   	<span class="field g9">无</span>\n		';
	 }else if (list.subjects.length >= 7) { ;
	__p += '\n		   	<span class="field g9">不限</span>\n		';
	 }else{ ;
	__p += '\n			';
	 for (var k = 0; k < list.subjects.length; k++) { 
					var subject = list.subjects[k];
				;
	__p += '\n			<span class="field g9">' +
	((__t = ( subject.subjectName )) == null ? '' : __t) +
	'</span>\n		';
	 }} ;
	__p += '\n		\n	</div>\n</li>\n';
	 }} ;
	
	
	}
	return __p
	}

/***/ }

});
//# sourceMappingURL=collegeDetail.c239e2fa.js.map