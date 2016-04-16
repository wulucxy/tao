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

//百度地图
var baidu = require("./lib/baidu");

//报考专业
var major =  require("./lib/major");

//切换顶部nav高亮
common.switchNav(2);

tabs($("#collegeWrapper"),{
	tabsItem : "nav li",
	items : ".content-wrap > section",
	klass : "current"
});

baidu.init(document.getElementById("baiduMap"),{
	location : {
		lat : $("[name=location]").val().split(":")[1],
		lng : $("[name=location]").val().split(":")[0]
	} 
});

major.init();

var college = {
	init : function(){
		this.renderArea();
	},
	renderArea : function(){
		var that = this;
		$.ajax({
    		url : "/system/area",
    		type : "get",
    		contentType: "application/json",
    		success : function(res){
    			if(typeof res == "string"){
    				var res = $.parseJSON(res);
    			}

    			if(res.code!=1){
					warn(res.msg);
					return;
				}

				var res = res.result;
    			var optionList = [];

    			$.each(res,function(idx,ele){
    				optionList.push('<option value='+ele.code+'>'+ele.name+'</option>');
    			});

    			$("[name=studentProvince]").empty();
    			$("[name=studentProvince]").append(optionList.join(""));
    		},
    		error : function(){
    			warn("网络请求失败，请稍后重试");
    		}
    	});
	}
};

college.init();




