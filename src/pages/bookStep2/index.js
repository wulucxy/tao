/* 建议这里都引入 */
require('../../assets/less/common.less');
require('./index.less');
var $ = window.$ || require("jquery");

//工具类方法
var util = require("../../assets/components/util");

//公共方法
var common = require("../../assets/components/common");


//自定义功能写下面
//弹窗模板
var tmpl_detail = require("../../assets/templates/detail.ejs");
var tmpl_questions = require("../../assets/templates/questions.ejs");

//自定义滚动插件
var scroll = require("../../assets/components/scroll");

//数据绑定
var dataSet = require("./lib/dataSet");

//详情弹窗
$("[data-trigger]").on("click",function(e){
    e.preventDefault();
    var btn = $(e.target).closest(".trigger");
    var tmpl = btn.data("trigger") == "detail" ? tmpl_detail : tmpl_questions;

    modalBox( btn.get(0), {
          html:tmpl(),
          klass : 'w540 shadow',
          closeByOverlay : false,
          completeCallback : function(){ 
            
          }
      });
});


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

