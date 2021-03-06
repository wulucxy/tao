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

var Cookie = require("js-cookie");

var provinceId = $("[name=province]").val();
var batch = $("[name=batch]").val();

var userId =  $("[name=userId]").val();

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

	travelMajorList: function(selectList, list){
		//遍历结果列表
		$.each(list,function(m,l){
			if(selectList.indexOf(l.categoryId) != "-1"){
				l.status = 1;
			}
		})
	},

	requestData : function(){
		var that = this;
		$.ajax({
			url : preServer+provinceId + "/data/major/categoryList",
			type : "get",
			success : function(res){
				if(typeof rs == "string"){
					var res = $.parseJSON(res);
				}

			
				if(res.code!=1){
					warn(res.msg);
					return;
				}

				// res.result.batch = batch;
				that.res = res.result;

				//读取选择项
				var selectList = [];
				if(!!Cookie.get(userId)){
					selectList = Cookie.get(userId).split("&");
				}

				// 遍历本科
				that.travelMajorList(selectList, that.res.undergraduateList);

				// 遍历专科
				that.travelMajorList(selectList, that.res.juniorList);

				console.log(that.res);

				that.insertData(res.result);

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
		   util.setupLabel();
		  var target = $(e.target);
		  var label = $(this).closest("label");
		  if(target.is(".icon-eye")){
		  	e.preventDefault();
		  	that.subMajorModal(target);
		  }else{
		  	if(!isModernBrower){
		  		if (label.attr("for") != ""){
			        $("#" + label.attr("for")).trigger("click");
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

	
	    boxList = $('input[type=checkbox][name=majorType]:checked');

	    var majorList = that.selectList(boxList);

	    //保存到cookie里面
	    var cookieList = $.map(majorList,function(c){
	    	return c.majorId;
	    })

	    //保存选择
	    var majorSelectList = (cookieList.length > 0) ? cookieList.join("&") : 0;
	    Cookie.set(userId,majorSelectList);

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

                if(res.code==1){
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
                console.log(err);
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

		$.ajax({
			url : preServer+provinceId+"/data/major/category/"+majorId,
			type : "get",
            contentType: "application/json",
            success : function(res){
                if(typeof res == "string"){
                    var res = $.parseJSON(res);
                }

                if(res.code != 1){
                    warn(res.msg);
                    btn.removeClass("disabled");
                    return false;
                }

                var detailData = {
					name : btn.data("name"),
					list : res.result || []
				};

				modalBox(btn, {
				        html:tmpl_subMajor(detailData),
				        klass : 'w540 shadow',
				        closeByOverlay : true,
				        completeCallback : function(){}
				});
            },
            error : function(err){
            	btn.removeClass("disabled");
                console.log(err);
            }
		})
	}

};


majors.init();

