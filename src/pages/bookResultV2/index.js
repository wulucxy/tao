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

var myProfile = require("../../assets/components/myProfile");

tabs($("#bookResultTab"),{
	tabsItem : "nav li",
	items : ".content-wrap > section",
	klass : "current"
});

var planId = util.getQuery("planId");
var provinceId = $("[name=province]").val();
var provinceName = $('[name=provinceName]').val();

myProfile.init({
	planId: planId,
	provinceId: provinceId,
	provinceName: provinceName
})