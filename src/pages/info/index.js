/* 建议这里都引入 */
require('../../assets/less/common.less');
require('./index.less');
var $ = window.$ || require("jquery");

//工具类方法
var util = require("../../assets/components/util");

//公共方法
var common = require("../../assets/components/common");


//自定义功能写下面
//
////加载更多模块
var loadMore = require("../../assets/components/loadMore");
var tmpl = require("./templates/infoList.ejs");

var province = $("[name=province]").val();

var info = {
	init : function(){
		//默认分页开始
		this.pager = 1;
		this.tagIndex = 0;
		this.bindEvt();
	},
	requestList : function(btn){
		var that = this;

		var parm = [];
		parm.push("page="+that.pager);
		parm.push("code="+$(".infoTag").eq(that.tagIndex).attr("code"));

		$.ajax({
			url : "/v2/client/"+province+"/news?"+parm.join("&"),
			type : "get",
			success : function(res){
				if(typeof res == "string"){
					var res = $.parseJSON(res);
				}
				$(".infoListWrap").removeClass("preloading");
				//如果是点击加载更多，页码++，否则重置为1
                if(btn){
                    that.pager++;
                }else{
                    that.pager = 1;
                }

				that.loadList(res,that.pager);
			},
			error : function(){
				$(".infoListWrap").removeClass("preloading");
			}
		});
	},
	loadList : function(data,pager){
		var that = this,o = that.options;
		var _html = tmpl(data);

		if(pager == 1){
			$(".infoList").empty().html(_html);
			$(".s-title").text($(".infoTag.active").text());
		}else{
			$(".infoList").append(_html);
		}


		$(".btn-loading").removeClass("loading disabled");

		//最后一页
		if(pager > data.count){
			$(".btn-loading").addClass("loading-all");
		};

		if($(".infoList .no_transList").length){
			$(".btn-loading").addClass("loading-all");
		}
	},

	bindEvt : function(){
		var that = this;
		$(".btn-loading").on("click",function(e){
    		e.preventDefault();
    		var btn = $(this).closest(".btn");
    		if(btn.hasClass("disabled") || btn.hasClass("loading-all")) return;
    		btn.addClass("disabled loading");
    		that.requestList(btn);
    	});

    	$(".infoTag").on("click",function(e){
    		e.preventDefault();
    		var btn = $(this);
    		btn.siblings().removeClass("active");
    		if(btn.hasClass("active")) return;
    		btn.addClass("active");
    		$(".infoListWrap").addClass("preloading");
    		that.tagIndex = btn.attr("code");
    		that.requestList();
    	});

    	$(".infoTag").eq(0).trigger("click");
	}
};

info.init();