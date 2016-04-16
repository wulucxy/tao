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

$(".toggle").on("click",function(e){
	e.preventDefault();
	var oRow = $(this).closest(".detailContent");
	oRow.toggleClass("open");
});

function transformData(){
	var _data = {
		majorList : $.parseJSON($("[name=majorListJson]").text()),
		c :  $.parseJSON($("[name=cJson]").text()),
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
