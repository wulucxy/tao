webpackJsonp([32],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	/* 建议这里都引入 */
	__webpack_require__(14);
	__webpack_require__(345);
	var $ = window.$ || __webpack_require__(36);
	
	//工具类方法
	var util = __webpack_require__(37);
	
	//公共方法
	var common = __webpack_require__(38);
	
	var searchSchool = __webpack_require__(348);
	
	__webpack_require__(53);
	
	//checkbox定制
	$('.label_radio').click(function(){
	  util.setupLabel();
	});
	
	util.setupLabel();
	
	//切换顶部nav高亮
	common.switchNav(2);
	
	var provinceId = $("[name=province]").val();
	
	var score = {
	
		init : function(){
			searchSchool.init({
				el : ".addSchool",
				selectListCallback : function(li){
					var self = this;
					self.trigger.val(li.attr("name"));
					self.trigger.closest(".row").find(".hiddenCode").val(li.attr("code"));
	
					self.trigger.closest(".row").removeClass("errorIpt empty unvalid");
	
					var subCode = self.trigger.closest(".row").find(".subCode");
					if(subCode.length){
						subCode.val(li.attr("code"));
						subCode.prop("checked",true);
					}
				}
			});
	
			this.bindEvt();
		},
	
		bindEvt : function(){
			var that = this;
	
			$("#scorelineForm").validator({
				errorParent: '.row',
			    successCallback: function(e) {
			      var target = $(e.target).closest('.btn');
			      //执行到下一步操作
			      if(that.checkStatus()){
			      	that.subFunc(target,$("#scorelineForm"));
			      }
	
			    },
			    focusinCallback: function() {
			      var _ele = $(this);
			      common.hideError($('.errTxt'));
			    },
	
			    errorCallback: function(unvalidFields) {
			      var oError = $('.errTxt');
			      that.unvalidFieldsCallback(unvalidFields);
			    }
			});
		},
	
		checkStatus : function(){
			var that = this;
	
			if(!$("[name=contrast]").eq(0).val() && !$("[name=contrast]").eq(0).val()) return false;
	
			if($("[name=contrast]").eq(0).val() == $("[name=contrast]").eq(1).val()){
				$("[name=contrast]").eq(0).closest(".row").addClass("errorIpt unvalid");
				return false;
			}else{
				$("[name=contrast]").each(function(idx,ele){
					if($(ele).val() == $("[name=primarySub]").val()){
						$(ele).closest(".row").addClass("errorIpt unvalid");
						return false;
					}
				});
				return false;
			}
			return true;
		},
		
		unvalidFieldsCallback : function(unvalidFields){
			$.each(unvalidFields,function(idx,ele){
				$(ele).closest(".row").addClass("errorIpt");
			});
		},
	
		subFunc : function(btn,oForm){
			var that = this;
	
			var parm = [];
			parm.push("courseType="+$("[name=courseType]:checked").val());
			parm.push("batch="+$("[name=batch]:checked").val());
			parm.push("primary="+$("[name=primaryCode]").val());
			parm.push("second="+$("[name=secondCode]").val());
			parm.push("third="+$("[name=thirdCode]").val());
	
	
			$.ajax({
				url : "/v2/client/"+provinceId+"/data/college/threshold/compare?"+parm.join(""),
				type : "get",
				success : function(res){
					if(typeof res == "string"){
						var res = $.parseJSON(res);
					}
	
					if(res.code){
						 common.showError($('.errTxt'),res.msg || "网络错误,请稍后重试");
						 return;
					}	
	
					//分数线对比结果页
					window.location = "/";
					return false;
				},
				error : function(err){
					common.showError($('.errTxt'),res.msg || "网络错误,请稍后重试");
				}
			});
		}	
	};
	
	
	score.init();
	
	
	 

/***/ },

/***/ 164:
/***/ function(module, exports, __webpack_require__) {

	var $ = window.$ || __webpack_require__(36);
	var extend =  __webpack_require__(41);
	
	  function Plugin(t,o){
			this.target=t;
			this.options=o;
		    this.pages = o.pages ? o.pages : Math.ceil(o.items / o.itemsOnPage);  //总页数
			this.currentPage = o.currentPage - 1;                                 //当前页，默认为0
			o.halfDisplayed = o.displayedPages / 2;                               //活动页的一半
			this.init(this.options);
	  }
	 
	  Plugin.prototype = {
	
	  	destroy : function(){
	  	  this.target.empty();
	  	},
	
	  	draw : function(){
	  	  var that = this,o = that.options;
	  	  that.destroy();
	  	  that.interval = that._getInterval();
	  	  that.panel = that.target;
	  	  if (o.prevText) {			
			that._appendItem(that.currentPage - 1, {text: o.prevText, classes: 'prev'});
		  }
	
		  if (that.interval.start > 0 && o.edges > 0) {				// 边缘按钮
			var end = Math.min(o.edges, that.interval.start);
			for (i = 0; i < end; i++) {                            // left
				that._appendItem(i);
			}
			
			if (o.edges < that.interval.start && (that.interval.start - o.edges != 1)) {     //区分是否可点击中间按钮
				that.panel.append('<span class="ellipse disabled">' + o.ellipseText + '</span>');
			} else if (that.interval.start - o.edges == 1) {
				that._appendItem(o.edges);
			}
		 }
	
		for (i = that.interval.start; i < that.interval.end; i++) {      // Generate interval links
			that._appendItem(i);
		}
	
		if (that.interval.end < o.pages && o.edges > 0) {                    // Generate end edges
			if (o.pages - o.edges > that.interval.end && (o.pages - o.edges - that.interval.end != 1)) {
				that.panel.append('<span class="ellipse disabled">' + o.ellipseText + '</span>');
			} else if (o.pages - o.edges - that.interval.end == 1) {
				that._appendItem(that.interval.end++);
			}
			var begin = Math.max(o.pages - o.edges, that.interval.end);   //从end往后
			for (i = begin; i < o.pages; i++) {
				that._appendItem(i);
			}
		}
	
		if (o.nextText) {
			that._appendItem(this.currentPage + 1, {text: o.nextText, classes: 'next'});
		}
	
	  	},
	
	  	_appendItem: function(pageIndex, opts) {
	  		var that = this,o = that.options,$link;
			pageIndex = pageIndex < 0 ? 0 : (pageIndex < this.pages ? pageIndex : this.pages - 1);
			var options = $.extend({
				text: pageIndex + 1,
				classes: ''
			}, opts);
	
			if (pageIndex == that.currentPage) {
				$link = $('<span class="currentPage">' + (options.text) + '</span>');
			} else {
				$link = $('<a href="' + o.hrefTextPrefix + (pageIndex + 1) + '">' + (options.text) + '</a>');
				$link.on('click',function(){
					that._selectPage(pageIndex);
					return false;
				});
			}
			if (options.classes) {
				$link.addClass(options.classes);
			}
	
			that.panel.append($link);
		},
	
		_selectPage : function(pageIndex){
			var that = this,o = that.options;
			that.currentPage = pageIndex;
			if (o.selectOnClick) {
				that.draw();
			}
			 o.onPageClick.call(that,pageIndex + 1);
		},
	
	  	_getInterval : function(){
	  	  var that = this,o = that.options;
	  	  return {
			start: Math.ceil(that.currentPage > o.halfDisplayed ? Math.max(Math.min(that.currentPage - o.halfDisplayed, (o.pages - o.displayedPages)), 0) : 0),
			end: Math.ceil(that.currentPage > o.halfDisplayed ? Math.min(that.currentPage + o.halfDisplayed, o.pages) : Math.min(o.displayedPages, o.pages))
		  };
	  	},
	
	
	  	init : function(o){
		  var that = this, $this = that.target;
		  if(that.options.onInit){
		  	 that.options.onInit.call(that);
		  }
		  that.draw();
		}
	
	  };
	
			
	var pagination = function(target,o) {
		var instance = $.data( $(target), 'pagination' );
		var settings=extend({
			items: 1,                  //分页条目数
			itemsOnPage: 1,            //每页显示item条数
			pages: 0,                  //手动指定分页数（如果指定此项就不需要以上两个参数）
			displayedPages: 5,         //中间活动页数
			edges: 2,                  //边缘显示页数
			currentPage: 1,            //当前页数
			hrefTextPrefix: '#page-',
			hrefTextSuffix: '',
			prevText: '&lt;',
			nextText: '&gt;',
			ellipseText: '&hellip;',
			cssStyle: 'light-theme',
			selectOnClick: true,
			onPageClick: function(pageNumber) {
			},
			onInit: function() {
			}
		},o);
	
		
		$(target).each(function(index) {
			var me = $(this);  
			if ( instance ) {
	          instance.init();
	        }else {
	            instance = $.data( this, 'pagination', new Plugin( me,settings ) );
	        }
		});
		return instance;
	};	
	
	module.exports = pagination;

/***/ },

/***/ 345:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(346);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(33)(content, {});
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

/***/ 346:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(16)();
	// imports
	
	
	// module
	exports.push([module.id, ".orange {\n  color: #f4b64f;\n}\n.dbWrapper {\n  margin-top: 12px;\n}\n.db .formWrap > .col1 {\n  width: 590px;\n}\n.db .formWrap > .col2 {\n  width: 300px;\n}\n.formWrap {\n  background-color: #fff;\n  padding: 28px 32px 36px;\n  margin-bottom: 30px;\n}\n.scoreIcon {\n  vertical-align: middle;\n  display: inline-block;\n  width: 18px;\n  height: 18px;\n  background-image: url(" + __webpack_require__(347) + ");\n  background-position: 0 0;\n}\n.icon-book {\n  background-position: 0 0;\n}\n.icon-list {\n  background-position: -18px 0;\n}\n.icon-school {\n  background-position: -36px 0;\n}\n.row label + .col2 {\n  margin-left: 100px;\n  width: 374px;\n}\n.formWrap .footerCnt {\n  border-top: none;\n}\n.formWrap .footerCnt .btnRow {\n  text-align: left;\n  margin-left: 100px;\n}\n.hidden {\n  display: none !important;\n}\n.error .input {\n  border-color: #ccc;\n}\n.errorIpt .input {\n  border-color: #ec5524;\n}\n.errInfo {\n  padding-left: 100px;\n}\n.error .p-error {\n  display: none;\n}\n.errorIpt.unvalid .p-error {\n  display: inline-block;\n}\n", ""]);
	
	// exports


/***/ },

/***/ 347:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/web/img/scoreLine.png"

/***/ },

/***/ 348:
/***/ function(module, exports, __webpack_require__) {

	var $ = window.$ || __webpack_require__(36);
	var extend =  __webpack_require__(41);
	
	__webpack_require__(349);
	//自定义功能写下面
	var tmpl_school = __webpack_require__(351);
	var tmpl_list = __webpack_require__(352);
	
	//分页
	var pagination = __webpack_require__(164);
	
	var searchSchool = {
	
		init : function(options){
			this.pager = 1;
			this.options = extend({
				el : ".addSchool" 
			},options);
	
			this.bindEvt();
		},
	
		bindEvt : function(){
			var that = this,o = that.options;
			
			$(o.el).on("focusin",function(e){
		      e.preventDefault();
		      var oInput = $(e.target);
		      if(oInput.hasClass("cur")) return;
		      oInput.addClass("cur");
	
		      that.trigger = oInput;
	
		      modalBox(oInput,{
		        html : tmpl_school(),
		        klass : 'w540 shadow',
		        closeByOverlay : false,
		        startCallback : function(modal){
		          //指向
		          that.modal = modal;
		          that.modal.ref = this;
	
		          modal.majorType = oInput.attr("major");
		          that.requestData(that.pager);
		          
		        },
		        completeCallback : function(){
		          var self = oInput; 
		          var oInput = $("#wd");
		          $("#sBtn").on("click",function(e){
		            e.preventDefault();
		            if($.trim(oInput.val()) == ""){
		              warn("请输入搜索关键词");
		              return false;
		            }
	
		            that.requestData(that.pager);
		          });
		          
		        },
		        closeCallback : function(){
		          oInput.removeClass("cur");
		        }
		      });
	
		    });
		},
		requestData : function(pager){
		    var that = this;
		    $.ajax({
		      url : "/v2/client/getCollegeList",
		      type : "post",
		      contentType: "application/json",
		      data : JSON.stringify({page:pager,"wd":$.trim($("#wd").val())}),
		      success : function(res){
		        if(typeof res == "string"){
		          var res = $.parseJSON(res);
		        }
	
		        that.renderList(res);
		        that.detailpagination(res);
		        that.Evt();
		      }
		    });
		},
	
	    renderList : function(res){
	      var that = this;
	      var modal = that.modal;
	
	      $('.schoolLists').empty().append(tmpl_list(res)).hide().fadeIn();
	    },
	
	   detailpagination : function(res){
	     var that = this;
	     var modal = that.modal;
	     if(!modal.find('.pagination').length){
	       modal.find('.s-Content').append('<div class="pagination"></div>');
	          var $page = modal.find(".pagination");
	          pagination($page,{
	            pages: res.count,
	            displayedPages: 3,
	            currentPage : 1,
	            edges: 1,
	            onPageClick : function(pageNo){
	              that.requestData(pageNo);
	            }
	          });
	      }    
	    },
	
		Evt : function(){
		    var that = this,o = that.options;
		    $(document).off().on("click",".schoolList",function(e){
		      e.preventDefault();
		      var $this = $(this);
		      $this.siblings().removeClass("active");
		      $this.addClass("active");
	
		  	  o.selectListCallback && o.selectListCallback.call(that,$this);
	
		      $(".btn-close").trigger("click");
		    });
		}
	
	};
	
	module.exports = searchSchool;

/***/ },

/***/ 349:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(350);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(33)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/autoprefixer-loader/index.js!./../../../../node_modules/less-loader/index.js!./index.less", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/autoprefixer-loader/index.js!./../../../../node_modules/less-loader/index.js!./index.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 350:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(16)();
	// imports
	
	
	// module
	exports.push([module.id, ".s-Content {\n  padding: 12px 14px;\n}\n.s-Content .btn-search {\n  background-color: #1d718f;\n  border: none;\n  padding-left: 10px;\n  padding-right: 10px;\n}\n.s-Content .inputWrap {\n  margin-right: 41px;\n}\n.s-Content .inputWrap .form-control {\n  border-radius: 0;\n}\n.s-Content .schoolLists {\n  margin-top: 8px;\n}\n.s-Content .schoolList {\n  line-height: 30px;\n  position: relative;\n  font-size: 14px;\n  padding-left: 10px;\n  color: #444;\n  -webkit-transition: background-color 0.4s, color 0.4s;\n          transition: background-color 0.4s, color 0.4s;\n  cursor: pointer;\n}\n.s-Content .schoolList .icon-check {\n  visibility: hidden;\n  margin-right: 4px;\n  vertical-align: middle;\n}\n.s-Content .schoolList.active,\n.s-Content .schoolList:hover {\n  color: #fff;\n  background-color: #61c0e2;\n}\n.s-Content .schoolList.active .icon-check,\n.s-Content .schoolList:hover .icon-check {\n  visibility: visible;\n}\n.s-Content .no_transList {\n  color: #333;\n  margin-top: 20px;\n}\n", ""]);
	
	// exports


/***/ },

/***/ 351:
/***/ function(module, exports) {

	module.exports = function (obj) {
	obj || (obj = {});
	var __t, __p = '';
	with (obj) {
	__p += '<div class="modalCntWrap g9 modalForm sSchoolModal">\n <h3 class="clearfix"><a href="javascript:;" class="icons btn-close fr"></a><span class="fl">选择大学</span></h3>\n <form class="modalSubCnt" id="sSchoolForm" onsubmit="return false;">\n  \n  <div class="s-Content">\n    <div class="input-group clearfix rel">\n      <span class="input-group-btn fr" id="searchBtn">\n        <button class="btn btn-default btn-search" type="button" id="sBtn">\n          <i class="iconList icon-search"></i>\n        </button>\n      </span>\n      <div class="inputWrap">\n         <input type="text" class="form-control fl" placeholder="请输入关键字搜索" id="wd">\n      </div>\n     \n    </div>\n\n    <ul class="schoolLists">\n     \n    </ul>\n\n</div>\n\n</form>\n</div>';
	
	}
	return __p
	}

/***/ },

/***/ 352:
/***/ function(module, exports) {

	module.exports = function (obj) {
	obj || (obj = {});
	var __t, __p = '', __j = Array.prototype.join;
	function print() { __p += __j.call(arguments, '') }
	with (obj) {
	__p += ' ';
	 if (list.length == 0) { ;
	__p += '\n	<li class="no_transList"><i class="noListIcon"></i><em class="vm">暂时搜索不到数据</em></li>\n';
	 }else{ ;
	__p += '\n	';
	 for (var i = 0; i < list.length; i++) { ;
	__p += '\n	 	<li class="schoolList" code="' +
	((__t = ( list[i].code )) == null ? '' : __t) +
	'" name="' +
	((__t = ( list[i].name )) == null ? '' : __t) +
	'"><em class="icon-check"></em><em class="vm">' +
	((__t = ( list[i].name )) == null ? '' : __t) +
	'</em></li>\n ';
	 }} ;
	
	
	}
	return __p
	}

/***/ }

});
//# sourceMappingURL=scoreLine.js.map