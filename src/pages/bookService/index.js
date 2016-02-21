/* 建议这里都引入 */
require('../../assets/less/common.less');
require('./index.less');
var $ = window.$ || require("jquery");

//工具类方法
var util = require("../../assets/components/util");

//公共方法
var common = require("../../assets/components/common");


//自定义功能写下面
var tmpl = require("./templates/apply.ejs");
$("#applyBtn").on("click",function(e){
	var btn = $(e.target);
	modalBox(btn,{
		html:tmpl(),
		klass : 'w540 shadow',
        closeByOverlay : false,
        completeCallback : function(){
        	//checkbox定制
			$('.label_radio').click(function(){
			  util.setupLabel();
			});

			util.setupLabel();

			
        }
	});

});