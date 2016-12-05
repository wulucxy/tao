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
		this.capacity = 10;
		this.tagIndex = 0;
		this.bindEvt();
	},

	initRequest: function(){
		var that = this;
		var arrayOfAjax = [];
		for(var i=0; i<window.__initData__.length; i++) {
			arrayOfAjax.push(that.request(window.__initData__[i].id))
		}

		$.when.apply($, arrayOfAjax)
		.done(function(){
			var args = Array.prototype.slice.call(arguments);
			$(".infoListWrap").removeClass("preloading");

			for(var i=0;i<args.length;i++){
				that.loadList.call(that,args[i][0],i);
			}
		})
	},

	request: function(moduleId){
		var parm = [];
		parm.push("capacity="+5);
		parm.push("moduleId="+moduleId);

		return $.ajax({
			url : preServer+province+"/news?"+parm.join("&"),
			type : "get",
			success : function(res){
				if(typeof res == "string"){
					var res = $.parseJSON(res);
				}

				if(res.code!=1){
					warn(res.msg);
					return;
				}
			},
			error : function(err){
				console.log(err);
			}
		});
	},

	requestList : function(btn){
		var that = this;

		//如果是点击加载更多，页码++，否则重置为1
        if(btn && $(btn).hasClass("btn-loading")){
            that.pager++;
        }else{
            that.pager = 1;
        }

		var parm = [];
		parm.push("capacity="+5);
		//parm.push("page="+that.pager);
		parm.push("tag="+$(".infoTag").eq(that.tagIndex).attr("code"));

		//var tagType = $(".tagsList .infoTag").eq(that.tagIndex).text();

		$.ajax({
			url : preServer+province+"/news?"+parm.join("&"),
			type : "get",
			success : function(res){
				if(typeof res == "string"){
					var res = $.parseJSON(res);
				}

				if(res.code!=1){
					warn(res.msg);
					return;
				}

				res.result.tagType = tagType;
				var res = res.result;

				$(".infoListWrap").removeClass("preloading");
				

				that.loadList(res,that.pager);
			},
			error : function(err){
				console.log(err);
			}
		});
	},
	loadList : function(data,index){
		var that = this,o = that.options;
		var _html = tmpl(data.result);

		console.log(_html);
		
		$(".infoList").eq(index).empty().html(_html);
	},

	bindEvt : function(){
		var that = this;
		
		this.initRequest();
	}
};

info.init();