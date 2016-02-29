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
var tmpl_detail = require("./templates/majorDetail.ejs");
require("../../assets/components/validator");

var provinceId = $("[name=province]").val();

var majors = {

	init : function(){
		this.requestData();
	},

	requestData : function(){
		var that = this;
		$.ajax({
			url : "/v2/client/"+provinceId + "/v2/client/data/major/all",
			type : "get",
			success : function(res){
				if(typeof rs == "string"){
					var res = $.parseJSON(res);
				}

				that.res = res;

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

		$("#caseForm_3").validator({
			autoDisabled : true,
			autoValidate : true,
			onSubmitActive : true
		});

		//checkbox定制
		$('.label_radio').on("click",function(e){
		  e.stopPropagation();
		  
		  var target = $(e.target);
		  if(target.is(".icon-eye")){
		  	e.preventDefault();
		  	that.subMajorModal(target);
		  }else{
		  	util.setupLabel();
		  }
		});

		util.setupLabel();
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
		        html:tmpl_detail(detailData),
		        klass : 'w540 shadow',
		        closeByOverlay : true,
		        completeCallback : function(){}
		});
	}

};


majors.init();

