/* 建议这里都引入 */
require('../../assets/less/common.less');
require('./index.less');
var $ = window.$ || require("jquery");

//工具类方法
var util = require("../../assets/components/util");

//公共方法
var common = require("../../assets/components/common");

//自定义功能写下面
var tmpl_recommend = require("./templates/recommend.ejs");
var tmpl_exam = require("./templates/exam.ejs");


var charts = require("./lib/chart");

var provinceId = $("[name=province]").val();


var score = {
	init : function(){
		this.getScore();
		this.state = {};
	},

	render : function(){
		var that = this;

		//推荐专业
		if(that.state.promoteSubjects.length){
			var list = $.map(that.state.promoteSubjects,function(list){
				return list.subjectName;
			}).join("、");

			that.state.recommend = list;

			$(".recommend").empty().html(tmpl_recommend(that.state)).fadeIn();
		}

		//渲染表格
		if(that.state.scores.length){
			$("#scoreTable").find("tbody").html(tmpl_exam(that.state));
			that.tableEditor();
		}
	},

	getScore : function(){
		var that = this;
		$.ajax({
			url : preServer+provinceId+"/profile/score/detail",
			type : "get",
			success : function(res){
				if(typeof res == "string"){
					var res = $.parseJSON(res);
				}

				if(res.code!=1){
					warn(res.msg || "网络错误，请稍后重试");
					return;
				}

				//推荐数据
				that.state.promoteSubjects = res.promoteSubjects;

				//对应的分数数据
				that.state.scores = res.scores;

				that.render();

				//拼接select数据源（科目名称、科目id）
				that.subjectList = $.map(res.scores[0].subjects,function(ele){
					return {
						subjectId : ele.subjectId,
						subjectName : ele.subjectName
					};
				});

				//渲染图表
				// charts.init(document.getElementById("charts"),{
				// 	data : that.state
				// });
				
            },
            error : function(err){
            	btn.removeClass("disabled");
            }
		});

	},

	tableEditor : function(){
		var that = this;
		// tableEditor($("#scoreTable"),{
		// 	ele : "[editable]"
		// });
		// 
		$("[editable]").prop('tabindex', 1);

		$(".toggleTxt").on("click",function(e){
			e.preventDefault();
			var btn = $(e.target).closest(".btn");
			
			if(btn.attr("txtstatus") == 0){
				//变成可编辑状态
				btn.addClass("needEditing");
				btn.attr("txtstatus",1);
				that.editAction(btn);
			}else if(btn.attr("txtstatus") == 1){
				that.saveAction(btn);
			}
		});
	},

	editAction : function(btn){
		var that = this;

		var cloneProperties = ['padding', 'padding-top', 'padding-bottom', 'padding-left', 'padding-right',
					  'text-align', 'font', 'font-size', 'font-family', 'font-weight'];

		$("td[editable]").removeClass("onEditor");

		if(btn.hasClass("needEditing")){
			var examid = btn.attr("rel");
			var tdList = $("td[examid="+examid+"][editable]");

			tdList.each(function(idx,td){
				var $td = $(td);
				var inputType,_type = 1;
				if(typeof $td.attr("select") != "undefined"){
					_type = 2;
					inputType = "<select class='editor'></select>";
				}else{
					inputType = "<input class='editor'/>";
					_type = 1;
				}

				$td.append(inputType).addClass("onEditor");

				//如果是select
				if(_type == 2){
					var optionList = [];

					//td内容
					var subjectid = $td.attr("subjectid");

	    			$.each(that.subjectList,function(idx,ele){
	    				var selected = (ele.subjectId == subjectid ? "selected" : "");

	    				optionList.push('<option value='+ele.subjectId+" "+selected+' >'+ele.subjectName+'</option>');
	    			});

	    			optionList = optionList.join("");
				}

				if(_type == 1){
					$td.find(".editor")
					.css('position', 'absolute')
					.offset($td.offset())
					.css($td.css(cloneProperties))
					.width($td.width())
					.height($td.height())
					.val($.trim($td.text()));
				}else if(_type == 2){
					$td.find(".editor")
					.offset($td.offset())
					.css($td.css(cloneProperties))
					.width($td.outerWidth(true))
					.height($td.outerHeight(true))
					.append(optionList);
				}
				
			});

			$(".editor").on("focusin",function(){
				$(this).removeClass("error");
			});
		}

	},

	saveAction : function(btn){
		var that = this;
		
		if(that.validateField(btn)){
			//变成可编辑状态
			btn.removeClass("needEditing");
			btn.attr("txtstatus",0);

			that.renderSaveRes(btn);

		}else{
			console.log("修改出错");
		}
	},

	renderSaveRes : function(btn){
		var that = this;
		var examid = btn.attr("rel");
		var tdList = $("td[examid="+examid+"][editable]"),
			trList = $("tr[examid="+examid+"]");

		//专业列表
		var subjects = [];

		$.each(tdList,function(idx,ele){
			var $ele = $(ele);
			var oItem = $ele.find(".editor");

			var _val = oItem.val();

			if(oItem.get(0).tagName == "SELECT"){
				_val = oItem.find('option:selected').text();
				$ele.attr("subjectid",oItem.val());
			}

			//移除input
			oItem.remove();

			//td赋值
			$ele.html(_val);
		});

		$.each(trList,function(idx,ele){
			var $ele = $(ele);
			//保存数据
			subjects.push({
				subjectId : $ele.find("td").eq(0).attr("subjectid"),
				subjectName : $ele.find("td").eq(0).text(),
				score : $ele.find("td").eq(1).text(),
				place : $ele.find("td").eq(2).text()
			});
		});


		//更新数据
		$.each(that.state.scores,function(idx,ele){
			if(ele.exam.examId == examid){
				that.state.scores[idx].subjects = subjects;
				return false;
			}

		});

		that.reqEditScore(btn);

	},

	reqEditScore : function(btn){
		var that = this;

		var _idx;
		var examId = btn.attr("rel");

		$.each(that.state.scores,function(idx,ele){
			if(ele.exam.examId == examId){
				_idx = idx;
				return false;
			}
		});


		var _data = {
			"examId":btn.attr("rel"),
			"subjects":that.state.scores[_idx].subjects
		};

		$.ajax({
			url : preServer+provinceId + "/profile/score/edit",
			type : "post",
			contentType: "application/json",
			data : JSON.stringify(_data),
			success : function(res){
				if(typeof res == "string"){
					var res= $.parseJSON(res);
				}
			}
		})
	},

	validateField : function(btn){
		var that = this;

		that.reg= /^radio|checkbox/;
		var examid = btn.attr("rel");

		var fields = $("td[examid="+examid+"]").find(".editor");

		that.allPass = true;

		$.each(fields,function(index,ele){
             that.validate(ele);
        });

        if(!that.allPass){
          return false;
        }else{
          return true;
        }
	},

      //是否为空判断
      isEmpty : function(ele){
        var empty=0;
        var n=$(ele).val();
        if($.trim(n) == ""){
          empty++;
        }
        if(empty == 0){
        return false;
        }else return true;
      },

      isRegex: function(ele) {
        // 原始值和处理值
        var inputValue = ele.value,type = ele.getAttribute("type");
        // 获取正则表达式
        var regex = $(ele).closest("td").attr("pattern");
 
        if(typeof regex == 'string'){
          regex = new RegExp(regex,'i');
        }


        return regex.test(inputValue); 
      },

      // 对输入项进行校验
      validate: function(ele){
          var that=this,
          type = ele.getAttribute("type");
      
          if (ele.tagName == "SELECT") {
            // 下拉框只要关心值
            if(!ele.value){ 
              that.allPass=false;
              $(ele).addClass("error");
            }
          }else if (that.isEmpty(ele)) {
              that.allPass=false;
              $(ele).addClass("error");
          }else if(!that.isRegex(ele)){ 
              that.allPass=false;
              $(ele).addClass("error");
          }else {
            
          }
      }

};

score.init();