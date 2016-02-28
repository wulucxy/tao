/* 建议这里都引入 */
require('../../assets/less/common.less');
require('./index.less');
var $ = window.$ || require("jquery");

//工具类方法
var util = require("../../assets/components/util");

//公共方法
var common = require("../../assets/components/common");


//自定义功能写下面
var tabs = require("../../assets/components/tabs");
//加载更多模块
var loadMore = require("../../assets/components/loadMore");


//历史模块
var archive = require("./js/archive");

//历史模块
var history = require("./js/history");

//收藏模块
var collection = require("./js/collection");

// 导航切换
$(".userInfoList").on("click","[data-link]",function(e){
	e.preventDefault();
	var olink = $(this);
	var linkObj = $("."+olink.data("link"));
	if(olink.parent().hasClass("current")) return;

	$(".userInfoList li").removeClass("current");
	olink.parent().addClass("current");

	linkObj.siblings().hide();
	linkObj.show();
});


//加载更多
$(".load-more-list").each(function(idx,ele){
	if(idx == 0){
		loadMore($(ele),{
			tmpl : require("./templates/"+$(ele).data("tmpl")+".ejs"),
			listAttr : "historyList"
		});
	}else if(idx == 1){
		loadMore($(ele),{
			tmpl : require("./templates/"+$(ele).data("tmpl")+".ejs"),
			listAttr : "codes"
		});
	}
});

//我的资料
archive.init();

//历史模块调用
history.init();

//收藏模块调用
collection.init();









