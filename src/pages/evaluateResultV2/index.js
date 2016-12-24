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
var tmpl_Info = require("../../assets/templates/applyInfo.ejs");

//弹窗模板
var tmpl_wish = require("./templates/wish.ejs");

//自定义功能写下面
var tabs = require("../../assets/components/tabs");

tabs($("#bookResultTab"),{
	tabsItem : "nav li",
	items : ".content-wrap > section",
	klass : "current"
});

var wishes = $.parseJSON($("[name=wishesString]").text()) || [];

var conservative = $(wishes).filter(function(idx, ele){
	return ele.assessment == -1;
}).get();

var normal = $(wishes).filter(function(idx, ele){
	return ele.assessment == 0;
}).get();

var rush = $(wishes).filter(function(idx, ele){
	return ele.assessment == 1;
}).get();

var bad = $(wishes).filter(function(idx, ele){
	return ele.assessment == -2;
}).get();


$('.wish0Wrap').empty().html(tmpl_wish(
  {
  	wishes:conservative,
  	klass: 'conservative'
  }
))

$('.wish1Wrap').empty().html(tmpl_wish(
  {
  	wishes:normal,
  	klass: 'normal'
  }
))

$('.wish2Wrap').empty().html(tmpl_wish(
  {
  	wishes:rush,
  	klass: 'rush'
  }
))

$('.wish3Wrap').empty().html(tmpl_wish(
  {
  	wishes:bad,
  	klass: 'bad'
  }
))


function transformData(){
	var _data = {
		majorList :0,
		c :  0,
		batch : $("[name=batch]").text(),
		courseType : $("[name=courseType]").text(),
		score : $("[name=score]").text(),
		place : $("[name=place]").text(),
		province : $("[name=province]").val(),
		provinceName : $("[name=provinceName]").val(),
		userName : $("[name=userName]").val()
	}

	return _data;
}


function detailTrigger(){
	var data = transformData();
	//详情弹窗
	$("[data-trigger]").on("click",function(e){
	    e.preventDefault();
	    var btn = $(e.target).closest(".trigger");

	    modalBox( btn.get(0), {
	          html:tmpl_Info(data),
	          klass : 'w540 shadow',
	          closeByOverlay : false,
	          startCallback : function(){
				util.setupLabel();
	          },
	          completeCallback : function(){ 
	            
	          }
	      });
	});
};


detailTrigger();
