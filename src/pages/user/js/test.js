var $ = window.$ || require("jquery");
var extend =  require('object-assign');

var tmpl = require("../templates/test.ejs");

//公共方法
var util = require("../../../assets/components/util");

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

                $.each(res,function(idx,ele){
                	console.log(ele.createTime);
                	ele.createTime = util.buildDate(ele.createTime,"yyyy-MM-dd");
                });

                res = {codes : res};

                that.insertData.call(that,res);
			}
		});
	},

	renderData : function(res){
		var that = this;
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
