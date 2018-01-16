webpackJsonp([45],{

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	/* 建议这里都引入 */
	__webpack_require__(23);
	__webpack_require__(312);
	var $ = window.$ || __webpack_require__(46);
	
	//工具类方法
	var util = __webpack_require__(47);
	
	//公共方法
	var common = __webpack_require__(48);
	common.switchNav(1);
	
	//自定义功能写下面
	var planModal = __webpack_require__(262)
	var provinceId = $("[name=province]").val();
	
	planModal.init($(document), {
		provinceId: provinceId,
		data: {score: '', rank: ''},
		successCallback: function(info){
			$('.btn-close').length && $('.btn-close').trigger('click')
			if(info && info.target) {
				var href = info.target.attr('href')
				window.location = href
			}
		}
	})
	
	$('.planCard').on('click', function(e){
		e.preventDefault()
		var target = $(e.currentTarget)
		planModal.requestExamInfo({target: target})
	})
	


/***/ }),

/***/ 262:
/***/ (function(module, exports, __webpack_require__) {

	var $ = window.$ || __webpack_require__(46);
	__webpack_require__(263);
	var tmpl_plan = __webpack_require__(265);
	var checkBox = __webpack_require__(146);
	var userUtil = __webpack_require__(66);
	
	var payModal = {
		init: function(btn, options){
			this.options = options;
			this.btn = btn;
			this.provinceId = this.options.provinceId
		},
	
		requestExamInfo: function(info){
			var that = this;
			
			$.ajax({
				url : preServer+that.options.provinceId+"/profile/isFillExamInfo",
				contentType: "application/json",
				type : "get",
			    success : function(res){
			      if(typeof res == "string"){
			        var res = $.parseJSON(res);
			      }
	
			      if(res.code==1){
			      	var result = res.result
			      	if(!result.isFill) {
			      		that.box(info);
			      	} else {
			      		that.options.successCallback(info)
			      	}
			      }else{
			        warn(res.msg);
			        return;
			      }
			    },
			    error : function(err){
			       console.log(err);
			    }
			})
		},
	
		initSubject: function(){
			var planData = this.options.data || {}
			if(!planData.subjectList) return
	    $('[name=subject]').each(function(idx, ele){
	      var $ele = $(ele);
	      $(planData.subjectList).each(function(l, k){
	        if (k.type == $ele.val()){
	          $ele.prop('checked',true);
	        }
	      })
	    })
	  },
	
	  getSubjects: function(){
	    var that = this;
	    var subjects = $('[name=subject]').map(function(idx, ele){
	        if(ele.checked){
	          return {
	            name: $(ele).attr('n'),
	            code: $(ele).val()
	          }
	        }
	      }).get();
	
	    return subjects;
	  },
	
	  postPlanInfo: function(btn,oForm, info){
	  		var that = this
		    btn.addClass('disabled');
		    var oError = $('.errTxt');
		    var subjects = this.getSubjects().map(function(item){
		    	 return Number(item.code)
		    })
	
		    var data = {
		    	score: Number(oForm.find('[name=score]').val()),
	        subjects: subjects
		    }
	
		    var rank = oForm.find('[name=rank]').val()
		    if(rank) {
		    	data.rank = Number(rank)
		    }
	
		    $.ajax({
		        url: preServer+this.provinceId + "/profile/fillExamInfo",
		        type: "post",
		        data: JSON.stringify(data),
		        contentType: "application/json",
		        success: function(res) {
		          if (typeof res == "string") {
		            var res = $.parseJSON(res);
		          }
		          if(res.code == 1011){
		          	window.location = '/home/signin'
		          }else if(res.code==1){
		          	that.options.successCallback(info)
		          }else{
		          	btn.removeClass('disabled');
		          	userUtil.showError(oError, res.msg);
		          	return;
		          }
	
		        },
		        error : function(err){
		        	btn.removeClass('disabled');
		        	return;
		        }
			});
		},
	
		box: function(info){
			var that = this;
			var planData = this.options.data || {}
	
			modalBox(that.btn.get(), {
			      html:tmpl_plan(planData),
			      klass : 'w540 shadow',
			      closeByOverlay : false,
			      startCallback: function () {
			      	that.initSubject()
			      	checkBox.init()
			      },
			      completeCallback : function(){
			      	// 聚焦
			      	$('#score').focus()
			      	// 表单校验
			        $("#planForm").validator({
								errorParent: '.row',
							    successCallback: function(e) {
							      var target = $(e.target).closest('.btn');
							      var oError = $('.errTxt');
							      var subjects = that.getSubjects();
					          if(subjects.length != 3){
					          	$('.subjectListRow').addClass('unvalid')
					          	userUtil.showErrorMsg($("#planForm"), oError, $('.subjectListRow'));
					            return false;
					          }else{
					          	$('.subjectListRow').removeClass('unvalid')
					            userUtil.hideError($('.errTxt'));
					          }
							      //执行到下一步操作
							      that.postPlanInfo(target, $("#planForm"), info);
							    },
							    focusinCallback: function() {
						          userUtil.hideError($('.errTxt'));
						          $(".row").removeClass('errorIpt');
						        },
						        errorCallback: function(unvalidFields) {
						          var oError = $('.errTxt');
						          userUtil.showErrorMsg($("#planForm"), oError, unvalidFields);
						        }
							});
			      }
			  });
		}
	}
	
	module.exports = payModal;


/***/ }),

/***/ 263:
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(264);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(43)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/autoprefixer-loader/index.js!../../../../node_modules/less-loader/index.js!./index.less", function() {
				var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/autoprefixer-loader/index.js!../../../../node_modules/less-loader/index.js!./index.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),

/***/ 264:
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(25)();
	// imports
	
	
	// module
	exports.push([module.id, "", ""]);
	
	// exports


/***/ }),

/***/ 265:
/***/ (function(module, exports) {

	module.exports = function (obj) {
	obj || (obj = {});
	var __t, __p = '';
	with (obj) {
	__p += '<div class="modalCntWrap planModal taoModal g9 modalForm">\n <h3 class="clearfix"><a href="javascript:;" class="icons btn-close fr"></a><span class="fl">智能志愿定制</span></h3>\n <form class="modalSubCnt" id="planForm" onsubmit="return false;" autocomplete="off">\n\n<div class="inputRows">\n <div class="row clearfix">\n    <div class="inputWrap inputTextWrap">\n      <span class="iconWrap"><i class="icon-location icon-fenshu"></i></span>\n      <input type="text" class="input form-control" id="score" name="score" \n      min="0" max="750" placeholder="请输入高考/模拟考分数" required autocomplete="off" value="' +
	((__t = ( score ? score : '' )) == null ? '' : __t) +
	'">\n    </div>\n    <span class="p-error">高考分数为0-750之间，请重新填写</span>\n    <span class="p-error-empty">分数不能为空</span>\n </div>\n\n <div class="row clearfix">\n    <div class="inputWrap inputTextWrap">\n      <span class="iconWrap"><i class="icon-location icon-rank"></i></span>\n      <input type="number" class="input form-control" id="rank" name="rank" placeholder="请输入位次号" autocomplete="off" value="' +
	((__t = ( rank ? rank : '' )) == null ? '' : __t) +
	'">\n    </div>\n </div>\n</div>\n\n<div class=\'row subjectListRow\'>\n  <div class=\'g3 option-label\'>选考科目（选择3门）</div>\n  <div class="fieldWrap"> \n    <label for="subject_1" class="label_check inline">\n    <em class="icon-radio"></em>\n    <input type="checkbox" class="input form-control" id="subject_1" name="subject" value="1" required n="物理" >\n    <em class="vm">物理</em>\n    </label>\n\n    <label for="subject_2"  class="label_check inline">\n    <em class="icon-radio"></em>\n    <input type="checkbox" class="input form-control" id="subject_2" name="subject" value="2" n="化学" required>\n    <em class="vm">化学</em>\n    </label>\n\n    <label for="subject_3" class="label_check inline">\n    <em class="icon-radio"></em>\n    <input type="checkbox" class="input form-control" id="subject_3" name="subject" value="3" n="生物" required>\n    <em class="vm">生物</em>\n    </label>\n\n    <label for="subject_4"  class="label_check inline">\n    <em class="icon-radio"></em>\n    <input type="checkbox" class="input form-control" id="subject_4" name="subject" value="4" n="技术" required>\n    <em class="vm">技术</em>\n    </label>\n\n    <label for="subject_5" class="label_check inline">\n    <em class="icon-radio"></em>\n    <input type="checkbox" class="input form-control" id="subject_5" name="subject" value="5" n="政治" required>\n    <em class="vm">政治</em>\n    </label>\n\n    <label for="subject_6"  class="label_check inline">\n    <em class="icon-radio"></em>\n    <input type="checkbox" class="input form-control" id="subject_6" name="subject" value="6" n="地理" required>\n    <em class="vm">地理</em>\n    </label>\n\n    <label for="subject_7"  class="label_check inline">\n    <em class="icon-radio"></em>\n    <input type="checkbox" class="input form-control" id="subject_7" name="subject" value="7" n="历史" required>\n    <em class="vm">历史</em>\n    </label>\n  </div>\n  <div class="errInfo">\n    <span class="p-error">请选择3门选考科目</span>\n    <span class="p-error-empty">选考科目不能为空</span>\n  </div>\n</div>\n\n <div class="footerCnt planCnt">\n   <p id="errTxt" class="errTxt"></p>\n   <div class="row btnRow">\n    <a class="btn btn-default btn-form btn-close">\n        <em class="subTxt">取消</em></a>\n     <button type="submit" class="btn btn-primary btn-form">\n     		<em class="subTxt">确认</em></button>\n   </div>\n </div>\n</form>\n</div>';
	
	}
	return __p
	}

/***/ }),

/***/ 312:
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(313);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(43)(content, {});
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

/***/ 313:
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(25)();
	// imports
	
	
	// module
	exports.push([module.id, ".icon-location {\n  display: inline-block;\n  vertical-align: middle;\n  background-repeat: no-repeat;\n  width: 20px;\n  height: 21px;\n  background-image: url(" + __webpack_require__(40) + ");\n  background-position: 0 0;\n}\n.icon-book {\n  background-position: -20px 0;\n}\n.icon-list {\n  background-position: -40px 0;\n}\n.icon-fenshu {\n  background-position: -60px 0;\n}\n.icon-rank {\n  background-position: -80px 0;\n}\n.subjectListRow .option-label {\n  margin: 10px 0;\n  font-size: 14px;\n}\n.subjectListRow .fieldWrap .label_check {\n  margin-bottom: 10px;\n}\n.planCnt .btnRow {\n  text-align: center;\n}\n.planCnt .btnRow .btn {\n  margin-right: 20px;\n  width: 40%;\n}\n.planCnt .btnRow .btn:last-child {\n  margin-right: 0;\n}\n.planEntrance {\n  margin-top: 24px;\n}\n.planContainer {\n  background-color: #fff;\n  margin-bottom: 30px;\n  padding: 70px 50px 240px;\n}\n.planContainer .planCard {\n  float: left;\n  width: 420px;\n  margin-right: 50px;\n  padding: 40px 28px 40px 56px;\n  border: 1px solid #E5E5E5;\n}\n.planContainer .planCard .planTxt {\n  background: url(" + __webpack_require__(314) + ") right center no-repeat;\n}\n.planContainer .planCard:hover {\n  opacity: 0.8;\n}\n.planContainer .planCard h4 {\n  margin-bottom: 8px;\n  color: #333;\n  font-size: 22px;\n}\n.planContainer .planCard .subTxt {\n  font-size: 18px;\n  color: #999;\n}\n.planContainer .planCard:last-child {\n  margin-right: 0;\n}\n", ""]);
	
	// exports


/***/ }),

/***/ 314:
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/web/img/more.png"

/***/ })

});
//# sourceMappingURL=planEntrance.js.map