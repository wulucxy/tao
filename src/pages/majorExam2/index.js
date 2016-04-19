/* 建议这里都引入 */
require('../../assets/less/common.less');
require('./index.less');
var $ = window.$ || require("jquery");

//工具类方法
var util = require("../../assets/components/util");

//公共方法
var common = require("../../assets/components/common");


/* 可选，视需求而定 */
var questions = require("./questions.json");

var tmpl = require("./templates/list.ejs");

var Cookies = require("js-cookie");
var contentSlider = require("../../assets/components/contentSlider");

//需要配置
var allItems = questions.questions.length;
$(".all").text(allItems);

//保存所有答案
var answer = Cookies.get("answer") ? Cookies.get("answer").split("") : [];

if(answer.length > allItems){
	_alert("你已经完成全部问题");
	setTimeout(function(){
		window.location = "/box/plan/major_exam3";
	},3000);
}else if(answer.length == 1 && answer[0] == "0"){  //如果仅仅是录入验证码
	answer = [];
	renderSlider(0);
}else if(answer.length){
	var len = Math.min((answer.length+1),210);
	_confirm("上次已经做到第"+len+"题，是否继续",{
		cancel_txt : "重新开始",
		btn_txt : "继续上次",
		callback : function(){
			renderSlider(len-1);
			if(len >= allItems){
				$("#subTestFooter").fadeIn(100);
				subAnswer();
			}
		},
		cancelcallback : function(){
			answer = [];
			renderSlider(0);
		}
	});
}else{
	renderSlider(0);
}

function renderSlider(pageIndex){
	contentSlider($("#qtestSliderWrap"),{
		key : "questions",
		tmpl : tmpl,
		data : questions,
		pageIndex : pageIndex,
		allItems : allItems,
		speed : 20,
		startCallback : function(pageIndex,$oldItem,$newItem){
			answer.push($oldItem.find(".current").data("type"));
			Cookies.set("answer",answer.join(""),{expire : 356});


			if((pageIndex+1) >= allItems){
				subAnswer();
			};
		},
		callback : function(pageIndex,$oldItem,$newItem){
			if((pageIndex+1) >= allItems){
				$("#subTestFooter").fadeIn(100);
				//subAnswer();
			}

			//140题以后
			if((pageIndex+1) >= 140){
				if($(".qtestSliderWrap").hasClass("part1")){
					$(".qtestSliderWrap").removeClass("part1").addClass("part2");
				}
			}else{
				if($(".qtestSliderWrap").hasClass("part2")){
					$(".qtestSliderWrap").removeClass("part2").addClass("part1");
				}
			}
		},
		nav : function(pageIndex){
			$(".progressCount .current").text(Math.min(allItems,pageIndex+1));
			var percent =Math.min(100,Number((pageIndex+1)/allItems*100).toFixed(2)) + "%";
			$(".progressInner").stop(true,true).animate({width: percent});
		}
	});
}



function subAnswer(){
	$("#subTestBtn").on("click",function(e){
		e.preventDefault();
		var btn = $(e.target);
		if(answer.length != allItems){
			_alert("请完成所有选项才能提交");
		}else{
			if(btn.hasClass("disabled")) return;
			btn.addClass("disabled");
			postAnswer(btn,answer);
		}
	});
}

function postAnswer(btn,answer){
	var provinceId = $("[name=province]").val();

	var _code = util.getQuery("code");

	$.ajax({
		url : preServer+provinceId + "/tzy/mtest/submit",
		type  : "post",
		contentType: "application/json",
		data : JSON.stringify({code : _code,answer:answer.join("")}),
		success : function(res){
			if(typeof res == "string"){
				var res = $.parseJSON(res);
			}

			if(res.code==1){
				window.location.href = "/box/plan/major_exam3";
			}else{
				common.showError($("#errTxt"),res.msg);
				btn.removeClass("disabled");
				return;
			}
		},
		error : function(){
			btn.removeClass("disabled");
			warn("网络错误，请稍后重试");
		}
	});
};



