webpackJsonp([4],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	/* 建议这里都引入 */
	__webpack_require__(12);
	__webpack_require__(109);
	var $ = window.$ || __webpack_require__(32);
	
	//工具类方法
	var util = __webpack_require__(33);
	
	//公共方法
	var common = __webpack_require__(34);
	
	//自定义功能写下面
	var tmpl_list = __webpack_require__(112);
	var tmpl_detail = __webpack_require__(113);
	__webpack_require__(49);
	
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
	


/***/ },

/***/ 109:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 112:
/***/ function(module, exports) {

	module.exports = function (obj) {
	obj || (obj = {});
	var __t, __p = '', __j = Array.prototype.join;
	function print() { __p += __j.call(arguments, '') }
	with (obj) {
	__p += '<div class="row">\n	<p class="g6 mb12">本科大类：</p>\n\n	';
	 for (var i = 0; i < subs[0].subs.length; i++) { ;
	__p += '\n	<label class="label_radio">\n		<em class="icon-eye" data-supType=' +
	((__t = ( subs[0].id )) == null ? '' : __t) +
	' data-majorId=' +
	((__t = ( subs[0].subs[i].id )) == null ? '' : __t) +
	' data-name="' +
	((__t = ( subs[0].subs[i].name )) == null ? '' : __t) +
	'" ></em>\n		<input type="radio" class="input form-control" id="majorType' +
	((__t = ( subs[0].id )) == null ? '' : __t) +
	'_' +
	((__t = ( subs[0].subs[i].id )) == null ? '' : __t) +
	'" name="majorType" required>\n		<em class="vm">' +
	((__t = ( subs[0].subs[i].name )) == null ? '' : __t) +
	'</em>\n		<em class="icon-yes">\n			<i></i>\n		</em>\n	</label>\n	';
	 } ;
	__p += '\n</div>\n<div class="row">\n	<p class="g6 mb12">专科大类：</p>\n\n	';
	 for (var m = 0; m < subs[1].subs.length; m++) { ;
	__p += '\n	<label class="label_radio">\n		<em class="icon-eye" data-supType=' +
	((__t = ( subs[1].id )) == null ? '' : __t) +
	' data-majorId=' +
	((__t = ( subs[1].subs[m].id )) == null ? '' : __t) +
	' data-name="' +
	((__t = ( subs[1].subs[m].name )) == null ? '' : __t) +
	'" ></em>\n		<input type="radio" class="input form-control" id="majorType' +
	((__t = ( subs[1].id )) == null ? '' : __t) +
	'_' +
	((__t = ( subs[1].subs[m].id )) == null ? '' : __t) +
	'" name="majorType" required>\n		<em class="vm">' +
	((__t = ( subs[1].subs[m].name )) == null ? '' : __t) +
	'</em>\n		<em class="icon-yes">\n			<i></i>\n		</em>\n	</label>\n	';
	 } ;
	__p += '\n</div>';
	
	}
	return __p
	}

/***/ },

/***/ 113:
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