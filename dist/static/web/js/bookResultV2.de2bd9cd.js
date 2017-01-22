webpackJsonp([5],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	/* 建议这里都引入 */
	__webpack_require__(21);
	__webpack_require__(128);
	var $ = window.$ || __webpack_require__(44);
	
	//工具类方法
	var util = __webpack_require__(45);
	
	//公共方法
	var common = __webpack_require__(46);
	
	//自定义功能写下面
	var tabs = __webpack_require__(131);
	
	var myProfile = __webpack_require__(132);
	
	tabs($("#bookResultTab"),{
		tabsItem : "nav li",
		items : ".content-wrap > section",
		klass : "current"
	});
	
	var planId = util.getQuery("planId");
	var provinceId = $("[name=province]").val();
	var provinceName = $('[name=provinceName]').val();
	
	myProfile.init({
		planId: planId,
		provinceId: provinceId,
		provinceName: provinceName
	})

/***/ },

/***/ 128:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

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

/***/ }

});
//# sourceMappingURL=bookResultV2.de2bd9cd.js.map