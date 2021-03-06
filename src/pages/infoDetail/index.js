/* 建议这里都引入 */
require('../../assets/less/common.less');
require('./index.less');
var $ = window.$ || require("jquery");

//工具类方法
var util = require("../../assets/components/util");

//公共方法
var common = require("../../assets/components/common");


//自定义功能写下面
require('./article.less');
var province = $("[name=province]").val();
var newsId = $("[name=newsId]").val();

$(document).on("click",'.up',function(e){
	e.preventDefault();
	var btn = $(this);
	updown(btn,1);
});

$(document).on("click",'.down',function(e){
	e.preventDefault();
	var btn = $(this);
	updown(btn,2);
});

document.title = $(".articleWrap .head h4").text();

function updown(btn,type){
	if(btn.hasClass("btn-primary") ||  $("[btn-type=1]").length){
		if($("[btn-type=1]").hasClass("up")){
			var warnTxt = "您已经点过支持了";
		}else if($("[btn-type=1]").hasClass("down")){
			var warnTxt = "您已经点过反对了";
		}else{
			var warnTxt = "您暂时不可以点击";
		}
		warn(warnTxt);
		return;
	}
	
	var _url = (type == 1 ? "/news/up" : "/news/down");

	$.ajax({
		url : preServer + province + _url,
		type : "post",
		contentType: "application/json",
		data : JSON.stringify({newsId : newsId}),
		success : function(res){
			if(typeof res == "string"){
				var res = $.parseJSON(res);
			};

			
			if(res.code == "1011"){
                window.location = "/home/signin";
                return false;
            }else if(res.code!=1){
				warn(res.msg);
				return;
			}

			btn.removeClass("btn-negative").addClass("btn-primary");

			if(type == 1){
				$("#upCount").text(Number($("#upCount").text())+1);
			}else if(type==2){
				$("#downCount").text(Number($("#downCount").text())+1);
			}

			btn.attr("btn-type",1);
		},
		error : function(err){
			console.log(err);
		}
	});
}