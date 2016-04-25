var $ = window.$ || require("jquery");
require("../../../assets/components/validator");

//公共方法
var common = require("../../../assets/components/common");

var searchSchool = require("../../../assets/components/searchSchool");

var browser = require("../../../assets/components/browser");

var uploader = require("./uploader.js");

var uploaderFix = require("./uploaderFixIE.js");

//provinceId
var provinceId = $("[name=province]").val();

var archive = {
	init : function(options){
		//保存参数
		this.options = options;
		var that = this;

		$("#myInfoForm").validator({
			errorParent: '.row',
		    successCallback: function(e) {
		      var target = $(e.target).closest('.btn');
		      //执行到下一步操作
		      that.subFunc(target,$("#myInfoForm"));

		    },
		    focusinCallback: function() {
		      var _ele = $(this);
		      common.hideError($('.errTxt'));
		    },

		    errorCallback: function(unvalidFields) {
		      var oError = $('.errTxt');
		      common.showError($('.errTxt'));
		    }
		});

		this.bindEvt();

		if(browser.isModernBrower){
			uploader.init();
		}else if(browser.isIE() == "9" || browser.isIE() == "8"){
			uploaderFix.init();
		}
		
	},

	subFunc :  function(btn,oForm){
		var that = this;
		var fields = [
			{"type":"name",url : "/profile/name",field : "userName"},
			{"type":"sex",url : "/profile/sex",field : "sex"},
			{"type":"highSchool",url : "/profile/school",field : "schoolId"},
			{"type":"highYear",url : "/profile/school/year",field : "year"},
		];

		var uploadAll = 0;

		$.each(fields,function(idx,ele){
			var _data = {};
			_data[ele.field] = $("[name="+ele["type"]+"]").val();

			if(ele.type == "highSchool"){
				_data[ele.field] = $("[name="+ele["type"]+"]").attr("code");
			}

			$.ajax({
				url : preServer+provinceId+ele.url,
				data : JSON.stringify(_data),
				type : "post",
				success : function(res){
					if(typeof res == "string"){
						var res= $.parseJSON(res);
					}

					if(res.code!=1){
						warn(res.msg);
						return;
					}

					uploadAll++;

					if(uploadAll == fields.length){
						that.subSuccessCallback();
					}

				}
			})

		});
	},

	subSuccessCallback : function(){
		warn("个人资料更新成功",function(){
			window.location = "/user";
		});
	},

	bindEvt : function(){
		this.addSchool();

		this.addYear();
	},

	addYear : function(){
		var that = this;

		var nowYear = new Date().getFullYear();
		var yearArr = [];

		for(var i=0;i<5;i++){
			yearArr.push(nowYear--);
		}

		var highYear = $("[name=highYearInput]").length ? $("[name=highYearInput]").val() : "";
		var optionList = [];

		$.each(yearArr,function(idx,ele){
			optionList.push('<option value='+ele+'>'+ele+'</option>');
		});

		$("[name=highYear]").empty().append('<option value="">请选择</option>');
		$("[name=highYear]").append(optionList.join(""));

		if(highYear){
			$("[name=highYear]").val(highYear);
		}
	},

	addSchool : function(){
		var o = this.options;
		searchSchool.init({
			el : ".addSchool",
			provinceId : o.provinceId,
			type : "highSchool",
			url : "/v2_1/client/"+provinceId+"/highSchool/search",
			startCallback  : function(modal){
				modal.find("h3 span").text("选择高中");	
			},
			selectListCallback : function(li){
				var self = this;
				$(".btn-close").trigger("click");
				$(".addSchool").val(li.attr("name"));
				$(".addSchool").attr("code",li.attr("code"));
				$(".addSchool").closest(".row").removeClass("error empty")
			}
		});

	}


};

module.exports = archive;