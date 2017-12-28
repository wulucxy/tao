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
	var tabs = __webpack_require__(132);
	
	//报考专业
	var major =  __webpack_require__(288);
	
	//切换顶部nav高亮
	common.switchNav(2);
	
	tabs($("#collegeWrapper"),{
		tabsItem : "nav li",
		items : ".content-wrap > section",
		klass : "current"
	});
	
	var archive = {
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
	    		url : "/system/allProvinces",
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
	
	                optionList.push('<option value="0">全部区域</option>');
	
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
	
	archive.init();

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
	exports.push([module.id, ".majorWrap .pad {\n  margin-right: -40px;\n}\n.majorWrap .bg {\n  padding: 14px 20px 0;\n}\n.majorWrap .bg .row {\n  margin-right: 40px;\n}\n.majorWrap .row {\n  margin-bottom: 14px;\n}\n.majorWrap .selectWrap {\n  width: 180px;\n}\n.majorWrap .selectWrap .form-control {\n  width: 100%;\n}\n.row label {\n  font-size: 14px;\n  color: #666;\n}\n.fieldRow {\n  font-size: 18px;\n  color: #999;\n  line-height: 1.5;\n}\n.orange {\n  color: #f4b64f;\n}\n.dbWrapper {\n  margin-top: 12px;\n}\n.db .col1 {\n  width: 590px;\n}\n.db .col2 {\n  width: 300px;\n}\n.formWrap {\n  background-color: #fff;\n  padding: 20px 24px 36px;\n  margin-bottom: 30px;\n}\n.row.inline > * {\n  display: inline-block;\n}\n.contentWrap > h4 {\n  font-weight: normal;\n  font-size: 18px;\n  margin-bottom: 24px;\n}\n.contentWrap .btn-mid {\n  width: 118px;\n  padding-top: 3px;\n  padding-bottom: 3px;\n  font-size: 16px;\n}\n.detailWrap .inline .field {\n  display: inline-block;\n  margin-right: 100px;\n}\n.db-major .row {\n  margin-bottom: 20px;\n}\n.badgeRow {\n  margin-bottom: 10px;\n}\n.badgeRow .badgetitle {\n  display: inline-block;\n  color: #333;\n  font-size: 18px;\n  margin-right: 8px;\n}\n.schoolList li {\n  padding: 16px 0;\n  border-bottom: 1px solid #e2e2e2;\n  margin-bottom: 10px;\n  background-color: transparent;\n}\n.schoolList .detail {\n  font-size: 14px;\n  color: #555;\n  line-height: 1.5;\n}\n.schoolList .detail .field {\n  display: inline-block;\n  margin-right: 16px;\n  color: #f4b64f;\n}\n.schoolList .detail .field:last-child {\n  margin-right: 0;\n}\n.schoolList .btn {\n  margin-top: 6px;\n}\n.detailInfos {\n  font-size: 13px;\n  color: #555;\n  line-height: 1.5;\n}\n.detailInfos .field {\n  display: inline-block;\n}\n.detailInfos .col {\n  float: left;\n  width: 33.3%;\n  margin-bottom: 14px;\n  font-size: 14px;\n  line-height: 18px;\n  height: 18px;\n}\n.detailInfos .col.c-6 {\n  width: 60%;\n}\n", ""]);
	
	// exports


/***/ }),

/***/ 288:
/***/ (function(module, exports, __webpack_require__) {

	var $ = window.$ || __webpack_require__(45);
	var extend =  __webpack_require__(50);
	var tmpl = __webpack_require__(289);
	var localData = __webpack_require__(134);
	
	var major = {
		init : function(o){
			
	        this.majorId = $("[name=majorId]").val();
	        this.pager = 1;
	        this.capacity = 10;
			this.bindEvt();
		},
	
		requestData : function(btn){
			var that = this;
	
			that.province = $('[name=studentProvince]').val();
	        that.year = $("[name=Year]").val();
	        that.batch = $("[name=batch]").val();
	        that.orderCondition = $("[name=orderCondition]").val();
			
			var _data = {
				capacty: that.capacity,
				year: that.year,
				batch: that.batch,
				majorId: that.majorId,
				page: that.pager,
				orderCondition: that.orderCondition
			};
	
			if(that.province){
				_data.province = that.province;
			}
	
			$.ajax({
				url : preServer+that.province + "/data/major/college",
				type : "post",
				data : JSON.stringify(_data),
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
	                        code : ele.collegeNature,
	                        name : localData.getOwnerTypeName(ele.collegeNature)
	                    };
	
	                    //获取getLevelName(院校层次)
	                    ele.level = {
	                        code : ele.level,
	                        name : localData.getLevelName(ele.collegeLevel)
	                    };
	
	                    //获取featrueList
	                    ele.feature = ele.feature ? $.map(ele.feature,function(el,index){
	                        return {
	                            type : el,
	                            name : localData.getFeatureName(el)
	                        };
	                    }) : [];
	                });
	
	                res = res.result;
	
	                console.log(res);
	
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
	
			$(".trigger").on("change",function(){
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

/***/ }),

/***/ 289:
/***/ (function(module, exports) {

	module.exports = function (obj) {
	obj || (obj = {});
	var __t, __p = '', __j = Array.prototype.join;
	function print() { __p += __j.call(arguments, '') }
	with (obj) {
	
	 if (colleges.length == 0) { ;
	__p += '\n	<li class="no_transList"><i class="noListIcon"></i><em class="vm">暂无记录</em></li>\n';
	 }else{ ;
	__p += '	\n';
	 for (var i = 0; i < colleges.length; i++) { 
		var list = colleges[i]
	;
	__p += '\n<li class="clearfix">\n	<div class="">\n	<h4 class="name badgeRow">\n		<a class="badgetitle vm textLink" target="_blank" href="/library/college/' +
	((__t = ( colleges[i].collegeId )) == null ? '' : __t) +
	' ">' +
	((__t = ( colleges[i].collegeName )) == null ? '' : __t) +
	'</a>\n		';
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
	__p += '\n	</h4>\n\n	<div class="detail">\n		<i class="icon icon-city"></i><span class="field">' +
	((__t = ( list.city.name )) == null ? '' : __t) +
	'</span>\n		<span class="label">院校分类：</span><span class="field">' +
	((__t = ( list.collegeType.name )) == null ? '' : __t) +
	'</span>\n		<span class="label">院校性质：</span><span class="field">' +
	((__t = ( list.ownerType.name )) == null ? '' : __t) +
	'</span>\n		<span class="label">院校层次：</span><span class="field">' +
	((__t = ( list.level.name )) == null ? '' : __t) +
	'</span>\n		</div>\n	</div>\n\n	';
	 if (list.field){ ;
	__p += '\n	<div class="fieldRow">\n		' +
	((__t = ( list.field )) == null ? '' : __t) +
	'\n	</div>\n	';
	 } ;
	__p += '\n	\n	';
	 if (list.scores.length > 0) { ;
	__p += '\n		<div class="tableWrap mt10 mb10">\n				<table class="table table-bordered text-center">\n					<thead>\n						<tr>\n							<td width="140">科类</td>\n							<td width="240">录取平均分（分）</td>\n							<td width="140">分差（分）</td>\n							<td width="140">学制（年）</td>\n							<td width="240">招生人数（人）</td>\n						</tr>\n					</thead>\n					<tbody>\n						';
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
	__p += '\n\n	<div class="row mt10">\n		<span class="label">所需科目：</span>\n		';
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

/***/ })

});
//# sourceMappingURL=major_2.js.map