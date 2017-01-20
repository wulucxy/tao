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
var tmpl_wish = require("./templates/wish.ejs");

//自定义功能写下面
var tabs = require("../../assets/components/tabs");

var myProfile = require("../../assets/components/myProfile");

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


var planId = util.getQuery("planId");
var provinceId = $("[name=province]").val();
var provinceName = $('[name=provinceName]').val();

myProfile.init({
	planId: planId,
	provinceId: provinceId,
	provinceName: provinceName
})