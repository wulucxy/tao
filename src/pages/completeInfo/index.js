/* 建议这里都引入 */
require('../../assets/less/common.less');
require('./index.less');
var $ = window.$ || require("jquery");

//工具类方法
var util = require("../../assets/components/util");

//公共方法
var common = require("../../assets/components/common");

/* 具体实现 */
//历史模块
var archive = require("../user/js/archive");

//provinceId
var provinceId = $("[name=province]").val();

//我的资料
archive.init({
	provinceId : provinceId,
	submitFormCallback: function(){
		archive.subFunc.call(archive)
	}
});
