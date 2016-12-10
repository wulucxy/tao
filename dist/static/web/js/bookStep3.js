webpackJsonp([8],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	/* 建议这里都引入 */
	__webpack_require__(18);
	__webpack_require__(141);
	var $ = window.$ || __webpack_require__(40);
	
	//工具类方法
	var util = __webpack_require__(41);
	
	//公共方法
	var common = __webpack_require__(42);
	
	//自定义功能写下面
	var tmpl_list = __webpack_require__(144);
	var tmpl_subMajor = __webpack_require__(145);
	//require("../../assets/components/validator");
	
	//弹窗模板
	var tmpl_detail = __webpack_require__(131);
	var tmpl_questions = __webpack_require__(132);
	
	var browser = __webpack_require__(49);
	
	var Cookie = __webpack_require__(103);
	
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
	
		requestData : function(){
			var that = this;
			$.ajax({
				url : preServer+provinceId + "/data/major/all",
				type : "get",
				success : function(res){
					if(typeof rs == "string"){
						var res = $.parseJSON(res);
					}
	
				
					if(res.code!=1){
						warn(res.msg);
						return;
					}
	
					res.result.batch = batch;
					that.res = res.result;
	
					//读取选择项
					var selectList = [];
					if(!!Cookie.get(userId)){
						selectList = Cookie.get(userId).split("&");
					}
	
					//遍历结果列表
					$.each(that.res.subs,function(m,l){
						$.each(l.subs,function(n,k){
							if(selectList.indexOf(k.id) != "-1"){
								k.status = 1;
							}
						})
					})
	
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
	
		    // if(selectAll){
		    // 	boxList = eleBoxs;
		    // }else{
		     	boxList = $('input[type=checkbox][name=majorType]:checked');
		    // }
	
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
	
			var subList1 = $.grep(that.res.subs,function(e,i){
				if(e.id == supId){
					return true;
				}
			});
	
	
			//var idx = (batch==3) ? 1 : 0;
	
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
	


/***/ },

/***/ 141:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(142);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(37)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/autoprefixer-loader/index.js!./../../../node_modules/less-loader/index.js!./index.less", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/autoprefixer-loader/index.js!./../../../node_modules/less-loader/index.js!./index.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 142:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(20)();
	// imports
	
	
	// module
	exports.push([module.id, ".breadcrumb li {\n  width: 25%;\n}\n.formWrap {\n  background-color: #fff;\n  padding: 32px 24px;\n  margin-bottom: 30px;\n}\n.formWrap .btnRow .btn {\n  margin-right: 30px;\n}\n.label_check {\n  font-size: 13px;\n  color: #333;\n  overflow: visible;\n  line-height: 32px;\n  cursor: pointer;\n  margin-right: 30px;\n  background-color: #f3f3f3;\n  border: 1px solid #ccc;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  margin-bottom: 12px;\n  min-width: 128px;\n  width: auto;\n}\n.label_check input {\n  background: transparent;\n  border: 0;\n  position: absolute;\n  left: -100%;\n  width: 0;\n  height: 0;\n  visibility: hidden;\n}\n.label_check.c_on {\n  border-color: #61c0e2;\n}\n.label_check:hover {\n  background-color: #f3f3f3;\n}\n.mb12 {\n  margin-bottom: 12px;\n}\n.icon-eye {\n  display: inline-block;\n  width: 28px;\n  height: 15px;\n  vertical-align: middle;\n  background: url(" + __webpack_require__(143) + ");\n  margin-right: 3px;\n}\n.c_on .icon-eye {\n  background-position: 0 -15px;\n}\n.icon-yes {\n  position: absolute;\n}\n.c_on .icon-yes {\n  width: 24px;\n  height: 24px;\n  display: inline-block;\n  border-radius: 50%;\n  text-align: center;\n  line-height: 24px;\n  right: -10px;\n  top: -10px;\n  background-color: #61c0e2;\n}\n.c_on .icon-yes i {\n  display: inline-block;\n  width: 18px;\n  height: 11px;\n  vertical-align: middle;\n  background: url(" + __webpack_require__(22) + ");\n}\n.selectContent .row {\n  margin-bottom: 40px;\n}\n.footerCnt {\n  padding-top: 28px;\n}\n.modalCntWrap.majorListModal {\n  padding-bottom: 0;\n}\n.majorListWrap {\n  background-color: #e5e5e5;\n  overflow: scroll;\n  max-height: 368px;\n  padding: 16px 12px 0;\n}\n.majorList .btn-list {\n  display: inline-block;\n  width: 208px;\n  font-size: 13px;\n  background-color: #f3f3f3;\n  margin-bottom: 14px;\n  margin-right: 16px;\n  border-color: #ccc;\n  cursor: default;\n  line-height: 28px;\n  padding-top: 0;\n  padding-bottom: 0;\n}\n.majorList .btn-list:hover {\n  border-color: #ccc;\n}\n.label_check input {\n  background-color: red;\n}\n", ""]);
	
	// exports


/***/ },

/***/ 143:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/web/img/eye.png"

/***/ },

/***/ 144:
/***/ function(module, exports) {

	module.exports = function (obj) {
	obj || (obj = {});
	var __t, __p = '', __j = Array.prototype.join;
	function print() { __p += __j.call(arguments, '') }
	with (obj) {
	
	 if (batch == 1 || batch == 2 ) { ;
	__p += '\n<div class="row">\n	<p class="g6 mb12">本科大类：</p>\n\n	';
	 for (var i = 0; i < subs[0].subs.length; i++) { ;
	__p += '\n		';
	 var checkedStatus;
			 if(subs[0].subs[i].status == 1) {
				checkedStatus = "checked";
			 }else{
				checkedStatus = "";
			 } ;
	__p += '\n	<label class="label_check" for="majorType' +
	((__t = ( subs[0].id )) == null ? '' : __t) +
	'_' +
	((__t = ( subs[0].subs[i].id )) == null ? '' : __t) +
	'">\n		<em class="icon-eye" data-supType=' +
	((__t = ( subs[0].id )) == null ? '' : __t) +
	' data-majorId=' +
	((__t = ( subs[0].subs[i].id )) == null ? '' : __t) +
	' data-name="' +
	((__t = ( subs[0].subs[i].name )) == null ? '' : __t) +
	'" ></em>\n		<input type="checkbox" class="input form-control" id="majorType' +
	((__t = ( subs[0].id )) == null ? '' : __t) +
	'_' +
	((__t = ( subs[0].subs[i].id )) == null ? '' : __t) +
	'" name="majorType" ' +
	((__t = ( checkedStatus )) == null ? '' : __t) +
	' required>\n		<em class="vm">' +
	((__t = ( subs[0].subs[i].name )) == null ? '' : __t) +
	'</em>\n		<em class="icon-yes">\n			<i></i>\n		</em>\n	</label>\n	';
	 } ;
	__p += '\n</div>\n';
	 }else if(batch == 3){ ;
	__p += '\n<div class="row">\n	<p class="g6 mb12">专科大类：</p>\n\n	';
	 for (var m = 0; m < subs[1].subs.length; m++) { ;
	__p += '\n		';
	 var checkedStatus; 
			 if(subs[1].subs[m].status == 1) { 
				checkedStatus = "checked"; 
			 }else{ 
				checkedStatus = ""; 
			 } ;
	__p += '\n	<label class="label_check" for="majorType' +
	((__t = ( subs[1].id )) == null ? '' : __t) +
	'_' +
	((__t = ( subs[1].subs[m].id )) == null ? '' : __t) +
	'">\n		<em class="icon-eye" data-supType=' +
	((__t = ( subs[1].id )) == null ? '' : __t) +
	' data-majorId=' +
	((__t = ( subs[1].subs[m].id )) == null ? '' : __t) +
	' data-name="' +
	((__t = ( subs[1].subs[m].name )) == null ? '' : __t) +
	'" ></em>\n		<input type="checkbox" class="input form-control" id="majorType' +
	((__t = ( subs[1].id )) == null ? '' : __t) +
	'_' +
	((__t = ( subs[1].subs[m].id )) == null ? '' : __t) +
	'" name="majorType" ' +
	((__t = ( checkedStatus )) == null ? '' : __t) +
	' required>\n		<em class="vm">' +
	((__t = ( subs[1].subs[m].name )) == null ? '' : __t) +
	'</em>\n		<em class="icon-yes">\n			<i></i>\n		</em>\n	</label>\n	';
	 } ;
	__p += '\n</div>\n';
	 } ;
	
	
	}
	return __p
	}

/***/ },

/***/ 145:
/***/ function(module, exports) {

	module.exports = function (obj) {
	obj || (obj = {});
	var __t, __p = '', __j = Array.prototype.join;
	function print() { __p += __j.call(arguments, '') }
	with (obj) {
	__p += '<div class="modalCntWrap taoModal g9 majorListModal">\n <h3 class="clearfix">\n <a href="javascript:;" class="icons btn-close fr"></a>\n <span class="fl"><em class="majorName">' +
	((__t = ( name )) == null ? '' : __t) +
	'</em>&nbsp;包含的专业</span>\n</h3>\n\n<div class="majorListWrap">\n  <div class="majorList">\n  	  ';
	 for (var i = 0; i < list.length; i++) { ;
	__p += '\n      <span class="btn btn-default btn-list">' +
	((__t = ( list[i].name )) == null ? '' : __t) +
	'</span>\n      ';
	 } ;
	__p += '\n  </div>\n</div>\n\n</div>';
	
	}
	return __p
	}

/***/ }

});
//# sourceMappingURL=bookStep3.js.map