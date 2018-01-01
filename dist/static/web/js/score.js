webpackJsonp([49],{

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	/* 建议这里都引入 */
	__webpack_require__(22);
	__webpack_require__(316);
	var $ = window.$ || __webpack_require__(45);
	
	//工具类方法
	var util = __webpack_require__(46);
	
	//公共方法
	var common = __webpack_require__(47);
	
	//自定义功能写下面
	var tmpl_recommend = __webpack_require__(318);
	var tmpl_exam = __webpack_require__(319);
	
	
	// var charts = require("./lib/chart");
	
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
	
				var keys = $.map(that.state.promoteSubjects,function(list){
					return list.subjectId;
				}).join("");
	
				that.state.recommend = list;
				that.state.keys = keys;
	
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
				url : preServer+provinceId+"/profile/score/detail?"+Math.random(),
				type : "get",
				success : function(res){
					if(typeof res == "string"){
						var res = $.parseJSON(res);
					}
	
					if(res.code!=1){
						warn(res.msg || "网络错误，请稍后重试");
						return;
					}
	
					var res = res.result;
	
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
	
	            },
	            error : function(err){
	            	btn.removeClass("disabled");
	            }
			});
	
		},
	
		tableEditor : function(){
			var that = this;
			
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
				if(window.console){
					console.log("修改出错");
				}
				
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
	
					if(res.code!=1){
						warn(res.msg);
						return;
					}
					window.location.reload();
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
	               warn("请录入分数");
	          }else if(!that.isRegex(ele)){ 
	              that.allPass=false;
	              $(ele).addClass("error");
	               warn("请录入正确的分数");
	          }else if(Number(ele.value) > 200){
	              $(ele).addClass("error");
	              that.allPass=false;
	              warn("录入分数不能超过200分");
	          }
	      }
	
	};
	
	score.init();

/***/ }),

/***/ 316:
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(317);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(42)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/autoprefixer-loader/index.js!../../../node_modules/less-loader/index.js!./index.less", function() {
				var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/autoprefixer-loader/index.js!../../../node_modules/less-loader/index.js!./index.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),

/***/ 317:
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(24)();
	// imports
	
	
	// module
	exports.push([module.id, ".blue {\n  color: #61c0e2;\n}\n.formWrap {\n  background-color: #fff;\n  padding: 32px 28px;\n  margin-bottom: 30px;\n}\n.recommend {\n  min-height: 74px;\n  margin-top: 32px;\n}\n.recommend .btnRow {\n  margin-top: 20px;\n}\n.tableWrap {\n  margin-top: 36px;\n  color: #555;\n}\n.tableWrap th {\n  font-weight: normal;\n}\n.tableWrap th.top {\n  font-size: 16px;\n  background-color: #f1f1f1;\n  text-align: left;\n}\n.tableWrap .control .btn {\n  margin-top: 18px;\n  width: 108px;\n  line-height: 28px;\n  padding-top: 0;\n  padding-bottom: 0;\n  font-size: 16px;\n}\n[editable] {\n  cursor: pointer;\n}\n.editTxt {\n  display: inline-block;\n}\n.saveTxt {\n  display: none;\n}\n.needEditing .editTxt {\n  display: none;\n}\n.needEditing .saveTxt {\n  display: inline-block;\n}\nselect.editor {\n  position: absolute;\n  background-color: #fff;\n  cursor: pointer;\n}\n.editor {\n  border: 1px solid #61c0e2;\n}\n.editor.error {\n  border-color: #ec5524;\n  z-index: 2;\n}\n.table.text-center th {\n  vertical-align: middle;\n}\n#charts {\n  width: 900px;\n  height: 450px;\n  border: 1px solid #e2e2e2;\n  padding: 32px;\n  margin: 0 auto;\n}\n* {\n  box-sizing: content-box;\n}\n.header *,\n.footer *,\n.m-aside *,\n.tableWrap * {\n  box-sizing: border-box;\n}\n[tabindex] {\n  outline: none !important;\n}\n.table-bordered tbody tr td.onEditor {\n  border-top: none;\n}\n", ""]);
	
	// exports


/***/ }),

/***/ 318:
/***/ (function(module, exports) {

	module.exports = function (obj) {
	obj || (obj = {});
	var __t, __p = '';
	with (obj) {
	__p += '<p>\n	<span class="blue">推荐选考：</span>\n	<span class="list">\n		<em class="recommendList">' +
	((__t = ( recommend )) == null ? '' : __t) +
	'</em>\n	</span>\n</p>\n<div class="btnRow">\n	<a href="/library/subject?keys=' +
	((__t = ( keys )) == null ? '' : __t) +
	'" class="btn btn-primary" target="_blank">查查看，能选什么专业</a>\n</div>';
	
	}
	return __p
	}

/***/ }),

/***/ 319:
/***/ (function(module, exports) {

	module.exports = function (obj) {
	obj || (obj = {});
	var __t, __p = '', __j = Array.prototype.join;
	function print() { __p += __j.call(arguments, '') }
	with (obj) {
	
	 for (var i = 0; i < scores.length; i++) { ;
	__p += '\n	';
	 for (var k = 0; k < scores[i].subjects.length; k++) { ;
	__p += '\n<tr examid="' +
	((__t = ( scores[i].exam.examId )) == null ? '' : __t) +
	'">\n	';
	 if(k == 0 ) { ;
	__p += '\n	<th rowspan="' +
	((__t = ( scores[i].subjects.length )) == null ? '' : __t) +
	'" >\n		<div class="control">\n		<p>' +
	((__t = ( scores[i].exam.examName )) == null ? '' : __t) +
	'</p>\n		<a href="javascript:;" class="btn btn-primary toggleTxt" txtStatus="0" rel="' +
	((__t = ( scores[i].exam.examId )) == null ? '' : __t) +
	'" >\n			<em class="editTxt">编辑</em>\n			<em class="saveTxt">保存</em>\n		</a>\n		</div>\n	</th>\n	';
	 } ;
	__p += '\n	<td examid="' +
	((__t = ( scores[i].exam.examId )) == null ? '' : __t) +
	'" select subjectid="' +
	((__t = ( scores[i].subjects[k].subjectId )) == null ? '' : __t) +
	'" >\n		' +
	((__t = ( scores[i].subjects[k].subjectName )) == null ? '' : __t) +
	'\n	</td>\n	<td editable examid="' +
	((__t = ( scores[i].exam.examId )) == null ? '' : __t) +
	'" pattern="^[0-9]{1,3}$" >' +
	((__t = ( scores[i].subjects[k].score )) == null ? '' : __t) +
	'</td>\n	<td examid="' +
	((__t = ( scores[i].exam.examId )) == null ? '' : __t) +
	'" pattern="^[0-9]{1,8}$" >' +
	((__t = ( scores[i].subjects[k].place )) == null ? '' : __t) +
	'</td>\n</tr>\n	';
	 } ;
	__p += '\n';
	 } ;
	
	
	}
	return __p
	}

/***/ })

});
//# sourceMappingURL=score.js.map