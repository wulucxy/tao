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
		this.reqList();
		this.bindEvt();
	},

	reqList : function(){
		var that = this;
		$.ajax({
			url : preServer+provinceId+"/tzy/qa/history",
			type : "post",
			data : JSON.stringify({"keyword":$("[name=keyword]").val()}),
			success : function(res){
				if(typeof res == "string"){
					var res = $.parseJSON(res);
				}

				if(res.code!=1){
					warn(res.msg);
					return;
				}

				that.rendList(res.result);
				
			},
			error : function(err){
				console.log(err);
			}
		})
	},

	rendList : function(res){
		var that = this;
		var resData = {
			data : res
		};

		$(".faqList .list-group").empty();
		$(".faqList .list-group").append(tmpl_list(resData)).hide().fadeIn();

	},

	bindEvt : function(){
		var that = this;
		$("#sBtn").on("click",function(e){
            e.preventDefault();
            var oInput = $("#qInput"),btn = $(this).closest(".btn");
            if($.trim(oInput.val()) == ""){
                warn("请输入院校关键词搜索");
                return;
            }

            if(btn.hasClass('disabled')) return;
            btn.addClass("disabled");

            that.reqList();

        })
	}
};

history.init();


