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

//报考专业
var major =  require("./lib/major");

//切换顶部nav高亮
common.switchNav(2);

tabs($("#collegeWrapper"),{
	tabsItem : "nav li",
	items : ".content-wrap > section",
	klass : "current"
});

major.init();