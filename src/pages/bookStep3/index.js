/* 建议这里都引入 */
require('../../assets/less/common.less');
require('./index.less');
var $ = window.$ || require("jquery");

//工具类方法
var util = require("../../assets/components/util");

//公共方法
var common = require("../../assets/components/common");

//自定义功能写下面
var tmpl_list = require("./templates/majorList.ejs");
var tmpl_subMajor = require("./templates/majorDetail.ejs");
//require("../../assets/components/validator");

//弹窗模板
var tmpl_detail = require("../../assets/templates/detail.ejs");
var tmpl_questions = require("../../assets/templates/questions.ejs");

var browser = require("../../assets/components/browser");

var provinceId = $("[name=province]").val();
var batch = $("[name=batch]").val();

var isModernBrower = browser.isModernBrower;

var majors = {

	init : function(){
		this.detailTrigger();
		this.requestData();
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

	requestData : function(){
		var that = this;
		$.ajax({
			url : preServer+provinceId + "/data/major/all",
			type : "get",
			success : function(res){
				if(typeof rs == "string"){
					var res = $.parseJSON(res);
				}

				res.batch = batch;
				that.res = res;

				if(res.code!=1){
					warn(res.msg);
					return;
				}

				that.insertData(res);

			},
			error : function(err){
				console.log(err);
				return;
			}
		});
	},

	insertData : function(res){
		var that = this;

		$("#caseFormWrapper").removeClass("preloading");
		$("#majorSelectWrapper").empty().html(tmpl_list(res));

		this.bindEvt();
	},

	bindEvt : function(){
		var that = this;

		// $("#caseForm_3").validator({
		// 	autoDisabled : true,
		// 	autoValidate : true,
		// 	onSubmitActive : true
		// });

		//checkbox定制
		$('.label_check').on("click",function(e){
		  e.stopPropagation();
		  
		  var target = $(e.target);
		  var label = $(this).closest("label");
		  if(target.is(".icon-eye")){
		  	e.preventDefault();
		  	that.subMajorModal(target);
		  }else{
		  	if(!isModernBrower){
		  		if (label.attr("for") != ""){
			        $("#" + label.attr("for")).click();
			        util.setupLabel();
		  		}
		  	}
		  }
		});

		util.setupLabel();		

		$("#nBtn").on("click",function(e){
			e.preventDefault();
			var btn = $(this).closest(".btn");
			if(btn.hasClass("disabled")) return;
			btn.addClass('disabled');

			that.submitFunc.call(that,btn);
		});
	},

	submitFunc : function(btn){
		var that = this;

		var eleBoxs=$('input[type=checkbox][name=majorType]'),
			boxList = [],
	        selectAll = true;

	    eleBoxs.each(function(){
          if($(this).prop("checked")){
            selectAll=false;
          }
	    });

	    if(selectAll){
	    	boxList = eleBoxs;
	    }else{
	    	boxList = $('input[type=checkbox][name=majorType]:checked');
	    }

	    var majorList = that.selectList(boxList);

		var _data = {
			majorList : majorList
		};

		$.ajax({
			url : preServer+provinceId+"/tzy/plan/wishes/step3",
			type : "post",
            contentType: "application/json",
            data : JSON.stringify(_data),
            success : function(res){
                if(typeof res == "string"){
                    var res = $.parseJSON(res);
                }

                if(res.code!=1){
                    window.location = "/box/plan/book_step4";
                    return false;
                }else{
                    warn(res.msg);
                    btn.removeClass("disabled");
                    return false;
                }
            },
            error : function(err){
            	btn.removeClass("disabled");
                warn($.parseJSON(err.responseText).msg || "网络错误，请稍后重试");
            }
		})
	},

	selectList : function(eleBoxs){
		return $.map(eleBoxs,function(ele,idx){
    		var icon = $(ele).siblings("[data-majorid]");
    		return {
    			"majorId":icon.data("majorid"),
    			"majorName":icon.data("name")
    		};
    	});
	},

	subMajorModal :function(btn){
		var that = this;

		var supId = btn.data("suptype"),
			majorId = btn.data("majorid");

		var subList1 = $.grep(that.res.subs,function(e,i){
			if(e.id == supId){
				return true;
			}
		});


		var idx = (batch==3) ? 1 : 0;

		var subList = $.grep(subList1[0].subs,function(e,i){
			if(e.id == majorId){
				return true;
			}
		});

		var detailData = {
			name : btn.data("name"),
			list : subList[0].subs
		};

		modalBox( btn, {
		        html:tmpl_subMajor(detailData),
		        klass : 'w540 shadow',
		        closeByOverlay : true,
		        completeCallback : function(){}
		});
	}

};


majors.init();

