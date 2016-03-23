var $ = window.$ || require("jquery");
var extend =  require('object-assign');

var tmpl = require("../templates/appointment.ejs");

//公共方法
var util = require("../../../assets/components/util");

//本地数据库
var localData = require("../../../assets/components/localData");

module.exports = {
	init : function(o){
		// 分页默认从第1页开始
    	this.pager = 1;
    	this.tmpl = tmpl;


    	this.options = extend({

    	},o);

    	this.target = $(o.ele);

		this.bindEvt();
	},

	bindEvt : function(){
		var that = this;
		

		that.fetch.call(that);
	},

	fetch : function(){
		var that = this,o = that.options,$this = that.target;

		var parm = [];

		$.ajax({
			url : o.url,
			type : o.type,
			contentType: "application/json",
			success : function(res){
				if(typeof(res) == 'string'){
                   var res = $.parseJSON(res);
                }

                var res = res.result;
                
                if(!res.appointments.length) return;

                 $.each(res.appointments,function(idx,ele){
                	//获取city名称
                    ele.param = extend(ele.param,{
                    	cityName : localData.getCityName(ele.param.city),
                    	courseTypeName : localData.getCourseTypeName(ele.param.courseType)
                    });

                    ele.createTime = util.buildDate(ele.createTime,"yyyy-MM-dd hh:mm:ss");

                });

                that.insertData.call(that,res);
			}
		});
	},

	renderData : function(res){
		var that = this;
		console.log(res);
		return that.tmpl(res);
	},

	insertData : function(res){
		var that = this,$this = that.target,o = that.options;

		var _html = that.renderData(res);
		if(that.pager == 1){
			$this.empty().append(_html);
		}else{
			$this.append(_html);
		}
	}
};