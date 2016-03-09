/* 建议这里都引入 */
require('../../assets/less/common.less');
require('./index.less');
var $ = window.$ || require("jquery");

//工具类方法
var util = require("../../assets/components/util");

//公共方法
var common = require("../../assets/components/common");


//自定义功能写下面
var tmpl = require("./templates/apply.ejs");
require("../../assets/components/validator");


var book = {

	init : function(){
		var that = this;
		$("#applyBtn").on("click",function(e){
			var btn = $(e.target);
			modalBox(btn,{
				html:tmpl(),
				klass : 'w540 shadow',
		        closeByOverlay : false,
		        startCallback : function(){
		        	//checkbox定制
					$('.label_radio').click(function(){
					  util.setupLabel();
					});

					util.setupLabel();

					$.ajax({
		        		url : "/system/city",
		        		type : "get",
		        		contentType: "application/json",
		        		success : function(res){
		        			if(typeof res == "string"){
		        				var res = $.parseJSON(res);
		        			}

		        			var optionList = [];

		        			$.each(res,function(idx,ele){
		        				optionList.push('<option value='+ele.code+'>'+ele.name+'</option>');
		        			});

		        			$("[name=city]").empty();
		        			$("[name=city]").append(optionList.join(""));
		        		},
		        		error : function(){
		        			warn("网络请求失败，请稍后重试");
		        		}
		        	});
		        },
		        completeCallback : function(){
 					that.formAction(btn);
		        }
			});

		});
	},

	formAction : function(){
		var that = this;

		$("#bookForm").validator({
			errorParent : ".row",
			successCallback : function(e){
				 var target = $(e.target).closest('.btn');
				 that.postBookInfo(target,$("#bookForm"));
			}
		});
	},

	postBookInfo : function(){
		var that = this;
		var province = $("[name=province]").val();

		var data = {
			name : $("[name=name]").val(),
			mobile : $("[name=mobile]").val(),
			province : $("[name=province]").val(),
			courseType : $("[name=courseType]:checked").val(),
			score : $("[name=score]").val(),
			bookType : $("[name=bookType]:checked").val(),
			booktime : $("[name=booktime]").val()
		};

		$.ajax({
			url : "/v2/client/"+province+"/tzy/appointment/create",
			type : "post",
			contentType: "application/json",
			data : JSON.stringify(data),
			success : function(res){
				if(typeof res == "string"){
					var res = $.parseJSON(res);
				}

				if(res.code){
					warn(res.msg);
					return;
				}

			},
			error : function(){
				warn("网络错误，请稍后再试");
			}
		});
	}

};


book.init();



