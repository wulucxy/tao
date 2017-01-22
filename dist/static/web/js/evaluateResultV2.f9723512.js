webpackJsonp([21],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	/* 建议这里都引入 */
	__webpack_require__(21);
	__webpack_require__(209);
	var $ = window.$ || __webpack_require__(44);
	
	//工具类方法
	var util = __webpack_require__(45);
	
	//公共方法
	var common = __webpack_require__(46);
	
	
	//自定义功能写下面
	
	//弹窗模板
	var tmpl_wish = __webpack_require__(212);
	
	//自定义功能写下面
	var tabs = __webpack_require__(131);
	
	var myProfile = __webpack_require__(132);
	
	tabs($("#bookResultTab"),{
		tabsItem : "nav li",
		items : ".content-wrap > section",
		klass : "current"
	});
	
	var wishes = $.parseJSON($("[name=wishesString]").text()) || [];
	
	var conservative = $(wishes).filter(function(idx, ele){
		return ele.assessment == 1;
	}).get();
	
	var normal = $(wishes).filter(function(idx, ele){
		return ele.assessment == 0;
	}).get();
	
	var rush = $(wishes).filter(function(idx, ele){
		return ele.assessment == -1;
	}).get();
	
	var bad = $(wishes).filter(function(idx, ele){
		return ele.assessment == -2;
	}).get();
	
	
	$('.wish0Wrap').empty().html(tmpl_wish(
	  {
	  	wishes:conservative,
	  	klass: 'conservative'
	  }
	))
	
	$('.wish1Wrap').empty().html(tmpl_wish(
	  {
	  	wishes:normal,
	  	klass: 'normal'
	  }
	))
	
	$('.wish2Wrap').empty().html(tmpl_wish(
	  {
	  	wishes:rush,
	  	klass: 'rush'
	  }
	))
	
	$('.wish3Wrap').empty().html(tmpl_wish(
	  {
	  	wishes:bad,
	  	klass: 'bad'
	  }
	))
	
	
	var planId = util.getQuery("planId");
	var provinceId = $("[name=province]").val();
	var provinceName = $('[name=provinceName]').val();
	
	myProfile.init({
		planId: planId,
		provinceId: provinceId,
		provinceName: provinceName
	})

/***/ },

/***/ 132:
/***/ function(module, exports, __webpack_require__) {

	var $ = window.$ || __webpack_require__(44);
	var extend =  __webpack_require__(49);
	
	// 模板
	var tmpl_Info = __webpack_require__(127);
	var localData = __webpack_require__(133);
	//工具类方法
	var util = __webpack_require__(45);
	
	var myProfile = {
	
		init : function(options){
			this.options = extend({
				provinceName : "浙江省",
				provinceId : 330000,
				planId  : ""
			},options);
	
			this.bindEvt();
		},
	
		bindEvt : function(){
			var that = this,o = that.options;
			
			this.detailTrigger();
			
		},
		
		requestProfile: function(btn, callback){
			var that = this,o = that.options;
			$.ajax({
		        url : preServer+o.provinceId+"/profile/plan/param?planId="+o.planId,
		        contentType: "application/json",
		        success : function(res){
		          if(typeof res == "string"){
		            var res = $.parseJSON(res);
		          }
	
		          btn.removeClass('flag');
	
		          if(res.code !=1){
		            warn(res.msg);
		            return;
		          }
	
		          callback && callback(res.result);
	
		        },
		        error : function(err){
		           btn.removeClass('flag');
		           console.log(err);
		        }
		      })
		},
	
	
		transformData: function(data){
			var that = this,o = that.options;
			var param = data.param;
	
			var subjects = $.map(param.subjects, function(sb){
					return {
						name: localData.getSubjectName(sb),
						code: sb
					}})
	
			var cities;
			if(param.cities){
				cities = $.map(param.cities, function(city){
					return {
						name: localData.getCityName(city),
						code: city
					}})
			}else {
				cities = [];
			}
	
			return {
				provinceName: o.provinceName,
				score: param.score,
				subjects: subjects,
				cities: cities,
				majors: param.majors
			}
		},
	
	
		detailTrigger: function(){
			var that = this,o = that.options;
			//详情弹窗
			$("[data-trigger]").on("click",function(e){
			    e.preventDefault();
			    var btn = $(e.target).closest(".trigger");
	
			    if(btn.hasClass('flag')) return;
			    btn.addClass('flag');
	
			    that.requestProfile(btn, function(data){
	
			    	var result = that.transformData(data);
	
			    	modalBox( btn.get(0), {
			          html:tmpl_Info(result),
			          klass : 'w540 shadow',
			          closeByOverlay : false,
			          startCallback : function(){
						util.setupLabel();
			          },
			          completeCallback : function(){ 
			            
			          }
			      });
			    });
			});
		}
	
	};
	
	module.exports = myProfile;

/***/ },

/***/ 209:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 212:
/***/ function(module, exports) {

	module.exports = function (obj) {
	obj || (obj = {});
	var __t, __p = '', __j = Array.prototype.join;
	function print() { __p += __j.call(arguments, '') }
	with (obj) {
	__p += '<section class="tab-box ' +
	((__t = ( klass )) == null ? '' : __t) +
	' current detailContent">\n';
	 if (wishes.length > 0) { ;
	__p += '\n\n	';
	 for (var i = 0; i < wishes.length; i++) { 
				var list = wishes[i];
			;
	__p += '\n\n		<div class="caseSection">\n			<span class="badge squre wishBadge">\n				';
	 if (list.assessment == '-2') { ;
	__p += '\n					不建议\n				';
	 }else if (list.assessment == '-1') { ;
	__p += '\n				   	保守\n				';
	 }else if (list.assessment == 0) { ;
	__p += '\n				   	平稳\n				';
	 }else if (list.assessment == 1) { ;
	__p += '\n				   	冲刺\n				';
	 } ;
	__p += '\n			</span>\n			<h3>\n				\n			<a href="/library/major/' +
	((__t = ( list.majorId )) == null ? '' : __t) +
	'" class="textLink" target="_blank">' +
	((__t = (list.majorName)) == null ? '' : __t) +
	'\n			</a>\n\n			<small class="g9">\n				' +
	((__t = ( list.batch )) == null ? '' : __t) +
	'\n				';
	 if (list.field){ ;
	__p += '\n					(' +
	((__t = ( list.field )) == null ? '' : __t) +
	') \n				';
	 } ;
	__p += '\n			</small></h3>\n			<h4 class="name badgeRow">\n				<a class="badgetitle vm textLink"  \n				href=\'/library/college/' +
	((__t = ( list.collegeId )) == null ? '' : __t) +
	'\'\n				target="_blank" >' +
	((__t = ( list.collegeName )) == null ? '' : __t) +
	'</a>\n				';
	 for (var k = 0; k < list.feature.length; k++) { ;
	__p += '\n					<span class="badge">' +
	((__t = ( list.feature[k].name )) == null ? '' : __t) +
	'</span>\n				';
	 } ;
	__p += '\n			</h4>\n			<div class="detail">\n		<i class="icon icon-city"></i><span class="field">' +
	((__t = ( list.city )) == null ? '' : __t) +
	'</span>\n		<span class="label">院校分类：</span><span class="field">' +
	((__t = ( list.type )) == null ? '' : __t) +
	'</span>\n		<span class="label">院校性质：</span><span class="field">' +
	((__t = ( list.ownerType )) == null ? '' : __t) +
	'</span>\n		<span class="label">院校层次：</span><span class="field">' +
	((__t = ( list.level )) == null ? '' : __t) +
	'</span>\n		</div>\n\n	';
	 if (list.scoreList.length > 0) { ;
	__p += '\n		<div class="tableWrap">\n			<div class="orange tc f24 mt10 mb10">2016年录取情况</div>\n				<table class="table table-bordered text-center">\n					<thead>\n						<tr>\n							<td width="240"></td>\n							<td width="240">平均分</td>\n							<td width="140">省控线分差</td>\n							<td width="140">学制</td>\n							<td width="140">人数</td>\n						</tr>\n					</thead>\n					<tbody>\n						';
	 for (var j = 0; j < list.scoreList.length; j++) { 
								var score = list.scoreList[j];
							;
	__p += '\n						<tr>\n							<td>\n							';
	 if (score.courseType == 1) { ;
	__p += '\n							   		文科\n							';
	 }else if (score.courseType == 0) { ;
	__p += '\n							   		理科\n							';
	 } ;
	__p += '\n							</td>\n					<td>' +
	((__t = ( score.admittedScore )) == null ? '' : __t) +
	'分</td>\n					<td>' +
	((__t = ( score.diffScore )) == null ? '' : __t) +
	'分</td>\n					<td>' +
	((__t = ( score.eductionalSystme )) == null ? '' : __t) +
	'年</td>\n					<td>' +
	((__t = ( score.recruitCount )) == null ? '' : __t) +
	'人</td>\n					</tr>\n					';
	 } ;
	__p += '\n					</tbody>\n				</table>\n		</div>\n	';
	 }else{ ;
	__p += '\n			<div class="f16 g3 empty">暂无历史数据</div>\n	';
	 } ;
	__p += '\n	</div>\n';
	 } ;
	__p += '		\n';
	 }else{ ;
	__p += '\n	<div class="f16 g3">暂无数据</div>\n';
	 } ;
	__p += '\n</section>\n';
	
	}
	return __p
	}

/***/ }

});
//# sourceMappingURL=evaluateResultV2.f9723512.js.map