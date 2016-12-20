webpackJsonp([8],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	/* 建议这里都引入 */
	__webpack_require__(19);
	__webpack_require__(142);
	var $ = window.$ || __webpack_require__(41);
	
	//工具类方法
	var util = __webpack_require__(42);
	
	//公共方法
	var common = __webpack_require__(43);
	
	//自定义功能写下面
	var tmpl_list = __webpack_require__(145);
	var tmpl_subMajor = __webpack_require__(146);
	//require("../../assets/components/validator");
	
	//弹窗模板
	var tmpl_detail = __webpack_require__(132);
	var tmpl_questions = __webpack_require__(133);
	
	var browser = __webpack_require__(50);
	
	var Cookie = __webpack_require__(104);
	
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
			  // if(target.is(".icon-eye")){
			  // 	e.preventDefault();
			  // 	that.subMajorModal(target);
			  // }else{
			  // 	if(!isModernBrower){
			  // 		if (label.attr("for") != ""){
				 //        $("#" + label.attr("for")).trigger("click");
				 //        util.setupLabel();
			  // 		}
			  // 	}
			  // }
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
	
			console.log(_data);
	
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

/***/ 142:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 145:
/***/ function(module, exports) {

	module.exports = function (obj) {
	obj || (obj = {});
	var __t, __p = '', __j = Array.prototype.join;
	function print() { __p += __j.call(arguments, '') }
	with (obj) {
	
	 if (undergraduateList.length > 0) { ;
	__p += '\n<div class="row">\n	<p class="g6 mb12">本科大类：</p>\n\n	';
	 for (var i = 0; i <undergraduateList.length; i++) { ;
	__p += '\n		';
	 var checkedStatus;
			 if(undergraduateList[i].status == 1) {
				checkedStatus = "checked";
			 }else{
				checkedStatus = "";
			 } ;
	__p += '\n	<label class="label_check" for="majorType' +
	((__t = ( undergraduateList[i].categoryId )) == null ? '' : __t) +
	'" >\n		<em class="icon-eye"  data-majorId=' +
	((__t = ( undergraduateList[i].categoryId )) == null ? '' : __t) +
	' data-name="' +
	((__t = ( undergraduateList[i].categoryName )) == null ? '' : __t) +
	'"></em>\n		<input type="checkbox" class="input form-control" id="majorType' +
	((__t = ( undergraduateList[i].categoryId )) == null ? '' : __t) +
	'" name="majorType" ' +
	((__t = ( checkedStatus )) == null ? '' : __t) +
	' required>\n		<em class="vm">' +
	((__t = ( undergraduateList[i].categoryName )) == null ? '' : __t) +
	'</em>\n		<em class="icon-yes">\n			<i></i>\n		</em>\n	</label>\n	';
	 } ;
	__p += '\n</div>\n';
	 } ;
	__p += '\n\n';
	 if( juniorList.length > 0){ ;
	__p += '\n<div class="row">\n	<p class="g6 mb12">专科大类：</p>\n\n	';
	 for (var i = 0; i < juniorList.length; i++) { ;
	__p += '\n		';
	 var checkedStatus; 
			 if(juniorList[i].status == 1) { 
				checkedStatus = "checked"; 
			 }else{ 
				checkedStatus = ""; 
			 } ;
	__p += '\n	<label class="label_check" for="majorType' +
	((__t = ( juniorList[i].categoryId )) == null ? '' : __t) +
	'" >\n		<em class="icon-eye" data-majorId=' +
	((__t = ( juniorList[i].categoryId )) == null ? '' : __t) +
	' data-name="' +
	((__t = ( juniorList[i].categoryName )) == null ? '' : __t) +
	'"></em>\n		<input type="checkbox" class="input form-control" id="majorType' +
	((__t = ( juniorList[i].categoryId )) == null ? '' : __t) +
	'" name="majorType" ' +
	((__t = ( checkedStatus )) == null ? '' : __t) +
	' required>\n		<em class="vm">' +
	((__t = ( juniorList[i].categoryName )) == null ? '' : __t) +
	'</em>\n		<em class="icon-yes">\n			<i></i>\n		</em>\n	</label>\n	';
	 } ;
	__p += '\n</div>\n';
	 } ;
	
	
	}
	return __p
	}

/***/ },

/***/ 146:
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
//# sourceMappingURL=bookStep3.160e0280.js.map