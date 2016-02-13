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

//checkbox定制
$('.label_radio input').click(function(){
	console.log(util.setupLabel);
  util.setupLabel();
});

util.setupLabel();
