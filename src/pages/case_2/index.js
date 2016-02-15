/* 建议这里都引入 */
require('../../assets/less/common.less');
require('./index.less');
var $ = window.$ || require("jquery");

//工具类方法
var util = require("../../assets/components/util");

//公共方法
var common = require("../../assets/components/common");


//自定义功能写下面
//自定义滚动插件
var scroll = require("../../assets/components/scroll");

//数据绑定
var dataSet = require("./lib/dataSet");

//将原有的数据传入
dataSet.init({
	klass : "current",
	url : "/getCity",
	startCallback : function(){
		var self = this;
		scroll($(".prov"),{
			height : $(".selectWrap").height(),
			alwaysVisible : true
		});

		scroll($(".city"),{
			height : $(".selectWrap").height(),
			alwaysVisible : true
		});

		$(".prov").find("li").eq(0).trigger("click");
	}
});

