var $ = window.$ || require("jquery");
var extend =  require('object-assign');

// 模板
var tmpl_Info = require("../../templates/applyInfo.ejs");
var localData = require("../localData");
//工具类方法
var util = require("../util");

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