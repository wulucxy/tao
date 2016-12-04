/* 建议这里都引入 */
require('../../assets/less/common.less');
require('./index.less');
var $ = window.$ || require("jquery");

//工具类方法
var util = require("../../assets/components/util");

//公共方法
var common = require("../../assets/components/common");


/* 可选，视需求而定 */
var slider = require("../../assets/components/unslider");
var carousel = require("./lib/carousel");
var updateBrowser = require("../../assets/components/updateBrowser");


slider($("#bannerShow"));

updateBrowser.init();

carousel.init();

$(".sloganTag").on("click",function(e){
	e.preventDefault();
	var rel = $(this).attr("id");
	var target = $("[rel="+rel+"]");

	var offset = target.offset().top;

	$("html,body").animate({
		"scrollTop" : offset
	},600);

});
