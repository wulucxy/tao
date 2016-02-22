/* 建议这里都引入 */
require('../../assets/less/common.less');
require('./index.less');
var $ = window.$ || require("jquery");

//工具类方法
var util = require("../../assets/components/util");

//公共方法
var common = require("../../assets/components/common");


var book = {

	init : function(){
		var that = this;
		util.count($(".count"),3,function(){
			window.location = "/book";
		});
	}

};


book.init();



