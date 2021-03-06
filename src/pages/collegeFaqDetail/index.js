/* 建议这里都引入 */
require('../../assets/less/common.less');
require('./index.less');
var $ = window.$ || require("jquery");

//工具类方法
var util = require("../../assets/components/util");

//公共方法
var common = require("../../assets/components/common");


//自定义功能写下面
var tmpl_q = require("./templates/apply.ejs");
var tmpl_list = require("./templates/list.ejs");

// 验证组件
require("../../assets/components/validator");

//高校名称
var collegeName = $("[name=collegeName]").val();
var provinceId =  $("[name=province]").val();
var scheduleId =  $("[name=scheduleId]").val();

var faq = {

	init : function(){
		this.pager = 1;
		this.capacity = 10;

		this.initStatus();

		this.bindEvt();
	},

	initStatus : function(){
		var that = this;
		 if(util.getQuery("on") == 1){
		 	$("#applyQ").show();
		 }
	},

	bindEvt : function(){
		var that = this;
		$("#applyQ").on("click",function(e){
			e.preventDefault();
			var btn = $(e.target);
			that.showQModal(btn);
		});	

		$(".btn-loading").on("click",function(e){
    		e.preventDefault();
    		var btn = $(this).closest(".btn");
    		if(btn.hasClass("disabled") || btn.hasClass("loading-all")) return;
    		btn.addClass("disabled loading");
    		that.requestList(btn);
    	});

    	$(".btn-loading").trigger("click");

	},

	requestList : function(btn){
		var that = this;

		var parm = [];
		parm.push("capacity="+that.capacity);
		parm.push("page="+that.pager);
		parm.push("scheduleId="+scheduleId);

		$.ajax({
			url : preServer+provinceId+"/tzy/qa/"+scheduleId+"?"+parm.join("&"),
			type : "get",
			success : function(res){
				if(typeof res == "string"){
					var res = $.parseJSON(res);
				}

				if(res.code!=1){
					warn(res.msg);
					return;
				}

				$(".qaListWrap").removeClass("preloading");
                
				that.loadList(res.result,that.pager);
			},
			error : function(err){
				console.log(err)
				$(".qaListWrap").removeClass("preloading");
			}
		});
	},

	loadList : function(data,pager){
		var that = this,o = that.options;
		var _html = tmpl_list(data);

		if(pager == 1){
			$(".qaList").empty().html(_html);
		}else{
			$(".qaList").append(_html);
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

		
		//如果是点击加载更多，页码++，否则重置为1
        that.pager++;
	},

	showQModal: function(btn){
		var that = this;

		var qJSON = {
			"collegeName" : collegeName
		}; 
		modalBox(btn,{
			html:tmpl_q(qJSON),
	        klass : 'w540 shadow',
	        closeByOverlay : false,
	        startCallback : function(){

	        },
	        completeCallback : function(){
	        	var self = btn; 
	        	$("#qForm").validator({
	        		errorParent: '.row',
				    successCallback: function(e) {
				      var target = $(e.target).closest('.btn');
				      //执行到下一步操作
				      that.subFunc(target,$("#qForm"));

				    },
				    focusinCallback: function() {
				      var _ele = $(this);
				      common.hideError($('.errTxt'));
				    },

				    errorCallback: function(unvalidFields) {
				      var oError = $('.errTxt');
				    }
	        	});
	        	
	        }
		});
	},
	subFunc : function(btn,oForm){
		var that = this;

		if(btn.hasClass("disabled")) return;
		btn.addClass("disabled");

		var _data = {
			scheduleId : scheduleId,
			q : $("[name=q]").val()
		};

		$.ajax({
			url : preServer+provinceId+"/tzy/qa/"+scheduleId+"/ask",
			type : "post",
			contentType: "application/json",
		    data : JSON.stringify(_data),
		    success : function(res){
		      if(typeof res == "string"){
		        var res = $.parseJSON(res);
		      }

		      if(res.code==1){
		        warn("提交成功",function(){
		        	window.location = "/box/college_faq/success";
		        	return false;
		        });  
		      }else{
		        warn(res.msg);
		        btn.removeClass("disabled");
		        return;
		      }
		    },
		    error : function(err){
		       btn.removeClass("disabled");
		       console.log(err);
		    }
		});
	}
};

faq.init();

