/* 建议这里都引入 */
require('../../assets/less/common.less');
require('./index.less');
var $ = window.$ || require("jquery");

//工具类方法
var util = require("../../assets/components/util");

//公共方法
var common = require("../../assets/components/common");


//自定义功能写下面

//加载更多模块
var loadMore = require("../../assets/components/loadMore");

//切换顶部nav高亮
common.switchNav(2);

//数据绑定
var dataSet = require("./lib/dataSet");

dataSet.init({
	pager : 1
});