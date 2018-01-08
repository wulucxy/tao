/* 建议这里都引入 */
require('../../assets/less/common.less');
require('./index.less');
var $ = window.$ || require("jquery");

//工具类方法
var util = require("../../assets/components/util");

//公共方法
var common = require("../../assets/components/common");
common.switchNav(1);

//自定义功能写下面
var planModal = require('../../assets/components/planModal')
var provinceId = $("[name=province]").val();

planModal.init($(document), {
	provinceId: provinceId,
	data: {score: '', rank: ''},
	successCallback: function(info){
		$('.btn-close').trigger('click')
		if(info && info.target) {
			var href = info.target.attr('href')
			window.location = href
		}
		
	}
})

$('.planCard').on('click', function(e){
	e.preventDefault()
	var target = $(e.currentTarget)
	planModal.requestExamInfo({target: target})
})

