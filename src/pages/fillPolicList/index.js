/* 建议这里都引入 */
require('../../assets/less/common.less');
require('./index.less');
var $ = window.$ || require("jquery");

//工具类方法
var util = require("../../assets/components/util");

//公共方法
var common = require("../../assets/components/common");

//自定义功能写下面
//切换顶部nav高亮
common.switchNav(4);

//加载更多模块
var loadMore = require("../../assets/components/loadMore");
var tmpl = require("./templates/infoList.ejs");

var province = $("[name=province]").val();

var infoModule = {
	init : function(){
		//默认分页开始
		this.pager = 1;
		this.capacity = 10;
		this.tagIndex = 0;
		this.bindEvt();
	},

	requestList : function(btn){
		var that = this;

		//如果是点击加载更多，页码++，否则重置为1
        if(btn && $(btn).hasClass("btn-loading")){
            that.pager++;
        }else{
            that.pager = 1;
        }

		var parm = {
			pageSize: 10,
			page: that.pager
		};

		$.ajax({
			url : preServer+province+"/newsV3/fillPolicList",
			type : "post",
			contentType: "application/json",
			data: JSON.stringify(parm),
			success : function(res){
				if(typeof res == "string"){
					var res = $.parseJSON(res);
				}

				if(res.code!=1){
					warn(res.msg);
					return;
				}
				res.result.news.forEach(function(item){
          item.date = util.formatDate(item.newsDate, 'yyyy-MM-dd hh:mm:ss')
        })
				var res = res.result;
				$('.preloading').removeClass('preloading');				

				that.loadList(res,that.pager);
			},
			error : function(err){
				console.log(err);
			}
		});
	},
	loadList : function(data,pager){
		var that = this,o = that.options;
		var _html = tmpl(data);

		if(pager == 1){
			$(".infoList").empty().html(_html);
		}else{
			$(".infoList").append(_html);
		}


		if(pager == 1 && data.total == 0){
			$(".btn-loading").hide();
		}else{
			$(".btn-loading").show();
			$(".btn-loading").removeClass("loading disabled");
		}

		var pageCount = Math.ceil(data.total / that.capacity);

		//最后一页
		if(pager >= pageCount){
			$(".btn-loading").addClass("loading-all");
		}else{
      $(".btn-loading").removeClass("loading-all");
    }

		// if($(".infoList .no_transList").length){
		// 	$(".btn-loading").addClass("loading-all");
		// }
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

    	that.requestList();
	}
};

infoModule.init();