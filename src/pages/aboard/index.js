/* 建议这里都引入 */
require('../../assets/less/common.less');
require('./index.less');
var $ = window.$ || require("jquery");

//工具类方法
var util = require("../../assets/components/util");

//公共方法
var common = require("../../assets/components/common");

/* 具体实现 */
// 验证组件
require("../../assets/components/validator");

//selct组件
var beautifySelect = require("../../assets/components/beautifySelect");

// 城市
var countryJSON =  require("../../assets/components/country");
var tmpl_country = require("./templates/country.ejs");

//考试
var examJSON =  require("../../assets/components/exam");
var tmpl_exam = require("./templates/exam.ejs");

//checkbox定制
$('.label_radio').click(function(){
  util.setupLabel();
});

util.setupLabel();

//切换顶部nav高亮
common.switchNav(1);

var provinceId = $("[name=province]").val();

var getStateUrl = preServer+"getStateUrl";

var aboard = {

	render : function(){
		var that = this;

		//渲染城市列表
		if(this.state.stateList && this.state.stateList.length){
			var optionList = [];
			$.each(this.state.stateList,function(idx,ele){
				optionList.push('<li name='+ele.name+' code='+ele.code+'>'+ele.name+'</li>');
			});

			optionList = optionList.join("");
			$("#statesSelect .trigger").removeClass("disabled");
			$("#statesSelect .options").empty().append(optionList);
		}else{
			$("#statesSelect .options").empty();
			$("#statesSelect .trigger").addClass("disabled");
		}

		//渲染选中城市信息
		if(that.state.selectedState && that.state.selectedState.name){
			$("#statesSelect .triggerTxt").text(that.state.selectedState.name);
		}else{
			$("#statesSelect .triggerTxt").text("请选择");
		}
	},
	init : function(){

		this.state = {};

		//组装本地数据
		this.getLocalData();
		//本地渲染城市列表
		this.renderHTML();

		this.bindEvt();

		this.formAction();
	},

	getLocalData : function(){
		var that = this;
		var countryList = $.map(countryJSON,function(ele){
			return {
				"code": ele.code,
        		"name": ele.name
			};
		});

		that.coutryRes = {
			countries : countryList
		};

		var examList = $.map(examJSON,function(ele){
			return {
				"code": ele.id,
        		"name": ele.name
			};
		});

		that.examRes = {
			exam : examList
		};

	},

	renderHTML : function(){
		var that = this;

		$("#countryList").empty().html(tmpl_country(that.coutryRes));
		$("#examList").empty().html(tmpl_exam(that.examRes));
	},

	bindEvt : function(){
		var that = this;

		//地区不可点
		$("#statesSelect .trigger").addClass("disabled");

		beautifySelect($("#countrySelect"),{
			selectCallback : function(li,index){
				$("[name=country]").val($(li).attr("code"));
				$(li).closest(".row").removeClass("error empty");
				that.getStateInfo($(li).attr("code"));
			}
		});	

		beautifySelect($("#statesSelect"),{
			selectCallback : function(li,index){
				$(li).closest(".row").removeClass("error empty");
				$("[name=states_cn]").val($(li).attr("code"));

				that.state.selectedState = {
                	code : $(li).attr("code"),
                	name : $(li).attr("name")
                };

                that.render();

			}
		});

		beautifySelect($("#exam_typeSelect"),{
			selectCallback : function(li,index){
				$(li).closest(".row").removeClass("error empty");
				$("[name=exam_type]").val($(li).attr("code"));
			}
		});
	},

	getStateInfo : function(code){
		var that = this;
		// $.ajax({
		// 	url : getStateUrl,
  //           type : "post",
  //           contentType: "application/json",
  //           data : JSON.stringify({country:code}),
  //           success : function(res){
  //               if(typeof res =="string"){
  //                   var res = $.parseJSON(res);
  //               }
                
  //               if(res.code!=1){
  //               	warn(res.msg);
  //               	$("#statesSelect .trigger").addClass("disabled");
  //               	return;
  //               }
  				
  				var stateList;

  				$.each(countryJSON,function(idx,ele){
  					if(ele.code == code){
  						stateList = ele.states;
  						return false;
  					}
  				});

                $("#statesSelect .trigger").removeClass("disabled");
                
                //选中城市列表
                that.state.stateList = stateList;
                //选中的城市清空
                that.state.selectedState = {
                	code : "",
                	name : ""
                };

                that.render();


            // },
            // error : function(err){
            //     console.log(err);
            // }
		//});
	},

	formAction : function(){
		var that = this;
		$("#aboardForm").validator({
			errorParent: '.row',
		    successCallback: function(e) {
		      var target = $(e.target).closest('.btn');
		      //执行到下一步操作
		      that.subFunc(target,$("#aboardForm"));

		    },
		    focusinCallback: function() {
		      var _ele = $(this);
		      common.hideError($('.errTxt'));
		    },

		    errorCallback: function(unvalidFields) {
		      var oError = $('.errTxt');
		    }
		});
	},

	subFunc : function(btn,oForm){
		var that = this;

		if(btn.hasClass("disabled")) return;
		btn.addClass("disabled");

		var _data = {
			user_mobile	: $("[name=mobile]").val(),
			country	: $("[name=country]").val(),
			states_cn : $("[name=states_cn]").val(),	
			major_key : $("[name=major_key]").val(),
			exam_type : $("[name=exam_type]").val(),
			exam_score : $("[name=exam_score]").val(),
			gpa_score : $("[name=gpa_score]").val()
		};

		var parm = [];
		parm.push("user_mobile="+_data.user_mobile);
		parm.push("country="+_data.country);
		if(_data.states_cn){
			parm.push("states_cn="+_data.states_cn);
		}
		if(_data.major_key){
			parm.push("major_key="+_data.major_key);
		}else{
			parm.push("major_key=");
		}
		
		parm.push("exam_type="+_data.exam_type);
		parm.push("exam_score="+_data.exam_score);
		parm.push("gpa_score="+_data.gpa_score);
	
		$.ajax({
			url : preServer+provinceId+"/tzy/plan/abroad/create",
			contentType: "application/json",
			type : "post",
		    data : JSON.stringify(_data),
		    success : function(res){
		      if(typeof res == "string"){
		        var res = $.parseJSON(res);
		      }

		      if(res.code==0){
		        window.location = "/box/plan/aboardSuccess?"+parm.join("&");
		        return false;
		      }else{
		        warn(res.msg);
		        btn.removeClass("disabled");
		        return;
		      }
		    },
		    error : function(err){
		       console.log(err);
		       btn.removeClass("disabled");
		    }
		})
	}
};

aboard.init();



