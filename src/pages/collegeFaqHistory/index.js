/* 建议这里都引入 */
require('../../assets/less/common.less');
require('./index.less');
var $ = window.$ || require("jquery");

//工具类方法
var util = require("../../assets/components/util");

//公共方法
var common = require("../../assets/components/common");

var provinceId = $("[name=province]").val();

var tmpl_list = require("./templates/faqList.ejs");

//自定义功能写下面
var history = {
	init : function(){
		//默认分页开始
		this.pager = 1;
		this.capacity = 10;
		this.initList();
		this.bindEvt();
	},

	initList : function(){
		var that = this;
		$.ajax({
			url : preServer+provinceId+"/tzy/qa/history",
			type : "get",
			success : function(res){
				if(typeof res == "string"){
					var res = $.parseJSON(res);
				}

				if(res.code!=1){
					warn(res.msg);
					return;
				}

				this.rendList();
				
			},
		})

	},

	requestList : function(btn){
		var that = this;

		var parm = [];
		parm.push("capacity="+that.capacity);
		parm.push("page="+that.pager);
		parm.push("code="+$(".infoTag").eq(that.tagIndex).attr("code"));

		$.ajax({
			url : preServer+provinceId+"/news?"+parm.join("&"),
			type : "get",
			success : function(res){
				if(typeof res == "string"){
					var res = $.parseJSON(res);
				}

				if(res.code!=1){
					warn(res.msg);
					return;
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
		var _html = tmpl_list(data);

		if(pager == 1){
			$(".infoList").empty().html(_html);
			$(".s-title").text($(".infoTag.active").text());
		}else{
			$(".infoList").append(_html);
		}


		$(".btn-loading").removeClass("loading disabled");

		var pageCount = Math.ceil(data.total / that.capacity);
		//最后一页
		if(pager >= pageCount){
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

    	$(".btn-loading").trigger("click");
	}
};

history.init();


