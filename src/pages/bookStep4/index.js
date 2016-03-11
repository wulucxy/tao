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
var tmpl_detail = require("../../assets/templates/detail.ejs");
var tmpl_questions = require("../../assets/templates/questions.ejs");

var provinceId = $("[name=province]").val();

var book = {

	init : function(){

		this.detailTrigger();
		this.bindEvt();
	},

	detailTrigger : function(){
		//详情弹窗
		$("[data-trigger]").on("click",function(e){
		    e.preventDefault();
		    var btn = $(e.target).closest(".trigger");
		    var tmpl = btn.data("trigger") == "detail" ? tmpl_detail : tmpl_questions;

		    modalBox( btn.get(0), {
		          html:tmpl(),
		          klass : 'w540 shadow',
		          closeByOverlay : false,
		          completeCallback : function(){ 
		            
		          }
		      });
		});
	},

	bindEvt : function(){
		var that = this;
		util.setupLabel();

		$("#nBtn").on("click",function(e){
			e.preventDefault();
			var btn = $(e.target).closest(".btn");
			if(btn.hasClass("disabled")) return;
			btn.addClass("disabled");
			that.submitFunc(btn);
		});
	},

	submitFunc : function(btn){
		var that = this;
		$.ajax({
			url : "/v2/client/"+provinceId+"/tzy/plan/wishes/step4",
			type : "get",
			success : function(res){
				if(typeof res == "string"){
					var res = $.parseJSON(res);
				}

				 if(!res.code){
                    window.location = "/pay";
                    return false;
                }else{
                    warn(res.msg);
                    btn.removeClass("disabled");
                    return false;
                }
            },
            error : function(err){
            	btn.removeClass("disabled");
                warn(err || "网络错误，请稍后重试");
            }
		});
	}
};


book.init();
