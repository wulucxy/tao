/* 建议这里都引入 */
require('../../assets/less/common.less');
require('./index.less');
var $ = window.$ || require("jquery");

//工具类方法
var util = require("../../assets/components/util");

//公共方法
var common = require("../../assets/components/common");


//自定义功能写下面

//extend
var extend =  require('object-assign');

//自定义滚动插件
var scroll = require("../../assets/components/scroll");

//城市选择插件
var citySelect = require("./lib/citySelect");

//数据绑定
var dataSet = require("./lib/dataSet");

// //渲染
// citySelect.init($("#citySelectContainer"),{
// 	url : "/getCity",
// 	prov : 500000,
// 	//初始化回调
// 	startCallback : function(){
// 		var self = this;
// 		scroll($(".prov"),{
// 			height : $(".selectWrap").height(),
// 			start : $(".prov li").eq(self.provIndex),
// 			alwaysVisible : true
// 		});

// 		scroll($(".city"),{
// 			height : $(".selectWrap").height(),
// 			strt : "top",
// 			alwaysVisible : true
// 		});
// 	},

// 	citySuccessCb : function(data){

// 		var obj = this;
// 		//重新计算高度
// 		$(".city").data("scroll").getBarHeight();


// 		var itemLists = $.map(data,function(ele){
// 			return extend(ele,{"checked" : false});
// 		});


// 		//将原有的数据传入
// 		dataSet.init({
// 			items : itemLists
// 		});
// 	}

// });


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

