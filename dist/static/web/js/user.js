webpackJsonp([39],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	/* 建议这里都引入 */
	__webpack_require__(14);
	__webpack_require__(394);
	var $ = window.$ || __webpack_require__(36);
	
	//工具类方法
	var util = __webpack_require__(37);
	
	//公共方法
	var common = __webpack_require__(38);
	
	
	//自定义功能写下面
	var tabs = __webpack_require__(152);
	//加载更多模块
	var loadMore = __webpack_require__(202);
	
	
	//历史模块
	var archive = __webpack_require__(396);
	
	//历史模块
	var history = __webpack_require__(399);
	
	//收藏模块
	var collection = __webpack_require__(401);
	
	//历史测试模块
	var test = __webpack_require__(405);
	
	//qa模块
	var qa = __webpack_require__(407);
	
	//qa模块
	var appointment = __webpack_require__(409);
	
	//图片上传模块
	//var uploader = require("./js/uploader");
	
	//provinceId
	var provinceId = $("[name=province]").val();
	
	// 导航切换
	$(".userInfoList").on("click","[data-link]",function(e){
		e.preventDefault();
		var olink = $(this);
		var linkObj = $("."+olink.data("link"));
		if(olink.parent().hasClass("current")) return;
	
		$(".userInfoList li").removeClass("current");
		olink.parent().addClass("current");
	
		linkObj.siblings().hide();
		linkObj.show();
	});
	
	
	//我的资料
	archive.init({
		provinceId : provinceId
	});
	
	//历史方案模块调用
	history.init({
		url : preServer+provinceId +"/profile/plan/list",
		type : "get",
		listAttr : "wishes",
		ele : "#historyWrapper"
	});
	
	//历史测试模块调用
	test.init({
		url : preServer+provinceId +"/tzy/mtest/all",
		type : "get",
		ele : "#testWrapper"
	});
	
	//收藏模块调用
	collection.init();
	
	//提问列表
	qa.init({
		url : preServer+provinceId +"/profile/qa",
		type : "get",
		ele : "#qschoolList"
	});
	
	//图片上传
	// uploader.init({
	// 	ele : $("#picker")
	// });
	
	appointment.init({
		url : preServer+provinceId +"/tzy/appointment/all",
		type : "get",
		ele : "#bookWrapper"
	})
	
	
	
	
	
	
	


/***/ },

/***/ 152:
/***/ function(module, exports, __webpack_require__) {

	var $ = window.$ || __webpack_require__(36);
	var extend =  __webpack_require__(41);
	 
	function Plugin(t,o){
			this.target=t;
			this.options=o;
		   	this.tabs = t.find(o.tabsItem);
		 	this.items =t.find(o.items);
		 	this.visible_item = o.visible_item;
		 	
		 	this.tabs.eq(this.visible_item).addClass(o.klass);
		 	this.items.eq(this.visible_item).addClass(o.klass);
			this.total_items=this.tabs.length;
			this.init(this.options);
		   }
	  
	   Plugin.prototype.change=function(now){
		  var that = this, o = that.options, $this = that.target;
		  
		  if (typeof now == "undefined") {  	
					now = that.visible_item + 1;                   
					now = now >= that.total_items ? 0 : now;         
				}
	
		  that.tabs.removeClass(o.klass).eq(now).addClass(o.klass);
		  that.items.hide().removeClass(o.klass).eq(now).addClass(o.klass).show(0,function(){
			  that.visible_item=now;
			  });  
		  };
	  
	  Plugin.prototype.init=function(o){
		  var that = this, $this = that.target;
		  if(that.options.startCallback){
		  	 that.options.startCallback.call(that);
		  }
	    that.change(o.visible_item);
		  that.tabs.off(o.event).on(o.event,function(e){
		  		e.preventDefault();
			  	if(o.event=='mouseover' || o.event=='click' ){
				  if($(this).hasClass(o.klass)){return;}
				  that.change($(this).index());
	        if(that.options.callback){
	          that.options.callback.call(that);
	        }
				}
			  	else return false;
	      });
		};
	
	 var Tabs = function(target,o){
	 	var settings=extend({
			event : 'click',       //触发条件
			visible_item : 0,      //默认显示条目
			callback : null,       //点击tab回调
			tabsItem : "",
			items : "",
			klass : "current"
		},o);
	
		return $(target).each(function(index) {
			var me = $(this);  
			return new Plugin(me,settings);
		});
	 };
	
	 module.exports = Tabs;

/***/ },

/***/ 202:
/***/ function(module, exports, __webpack_require__) {

	var $ = window.$ || __webpack_require__(36);
	var extend =  __webpack_require__(41);
	 
	function Plugin(t,o){
			this.target=t;
			this.options=o;
			this.init(this.options);
		   }
	  
	Plugin.prototype = {
	   	init : function(o){
	    	var that = this,$this = that.target;
	    	// 分页默认从第1页开始
	    	that.pager = o.pager;
	    	that.capacity = 10;
	
	    	//模板地址
	    	that.tmpl = o.tmpl;
	    	that.btn = that.target.closest(".content").find(".btn-loading");
	
	    	if(Object.prototype.toString.call(that.tmpl) != '[object Function]'){
	    		return;
	    	}
	
	    	that.btn.off().on("click",function(e){
	    		e.preventDefault();
	    		var btn = $(this).closest(".btn");
	    		if(btn.hasClass("disabled") || btn.hasClass("loading-all")) return;
	    		btn.addClass("disabled loading");
	    		that.fetch.call(that);
	    	});
		},
	
		fetch : function(){
			var that = this,o = that.options,$this = that.target;
			$.ajax({
				url : o.url || $this.data("url"),
				type : o.type,
				contentType: "application/json",
				data : JSON.stringify({page : that.pager,capacity : 10}),
				success : function(res){
					if(typeof(res) == 'string'){
	                   var res = $.parseJSON(res);
	                }
	
	                that.insertData.call(that,res);
				}
			});
		},
	
		renderData : function(res){
			var that = this;
			return that.tmpl(res);
		},
	
		insertData : function(res){
			var that = this,$this = that.target,o = that.options;
			if(res[o.listAttr].length){
				var _html = that.renderData(res);
				if(that.pager == 1){
					$this.empty().append(_html);
				}else{
					$this.append(_html);
				}
	
				that.pager++;
	
				var pageCount = Math.ceil(res.total / that.capacity);
				//最后一页
				if(that.pager >= pageCount){
					that.btn.addClass("loading-all");
				}else{
		            $(".btn-loading").removeClass("loading-all");
		        }
	
			}else{
				that.target.html('<div class="no_transList"><p class="tc mb10"><i class="noListIcon"></i></p><em class="g9">暂无数据</em></div>');
				$(".btn-loading").length && $(".btn-loading").hide();
			}
	
	
			that.btn.removeClass("loading disabled");
		}
	};
	
	 var loadMore = function(target,o){
	 	var settings=extend({
	 		url : "",
	 		pager : 1,
			button : ".btn-loading",
			callback : null,
			listAttr : "",
			type : "post"
		},o);
	
		return $(target).each(function(index) {
			var me = $(this);  
			return new Plugin(me,settings);
		});
	 };
	
	 module.exports = loadMore;

/***/ },

/***/ 231:
/***/ function(module, exports) {

	var
	  version = "2.0.8",
	  hasOwn = {}.hasOwnProperty,
	  PingppSDK = function(){},
	  cfg = {
	    PINGPP_NOTIFY_URL: 'https://api.pingxx.com/notify/charges/',
	    PINGPP_MOCK_URL: 'http://sissi.pingxx.com/mock.php',
	    ALIPAY_PC_DIRECT_URL: 'https://mapi.alipay.com/gateway.do',
	    UPACP_PC_URL: 'https://gateway.95516.com/gateway/api/frontTransReq.do',
	    CP_B2B_URL: 'https://payment.chinapay.com/CTITS/service/rest/page/nref/000000000017/0/0/0/0/0'
	  },
	  channels = {
	    alipay_pc_direct: 'alipay_pc_direct',
	    upacp_pc: 'upacp_pc',
	    cp_b2b: 'cp_b2b'
	  };
	
	PingppSDK.prototype = {
	
	  version: version,
	
	  _resultCallback: undefined,
	
	  _debug: false,
	
	  createPayment: function(charge_json, callback, debug) {
	    if (typeof callback == "function") {
	      this._resultCallback = callback;
	    }
	    if (typeof debug == "boolean") {
	      this._debug = debug;
	    }
	
	    var charge;
	    if(typeof charge_json == "string"){
	      try{
	        charge = JSON.parse(charge_json);
	      }catch(err){
	        this._innerCallback("fail", this._error("json_decode_fail"));
	        return;
	      }
	    }else{
	      charge = charge_json;
	    }
	    if(typeof charge == "undefined"){
	      this._innerCallback("fail", this._error("json_decode_fail"));
	      return;
	    }
	    if(!hasOwn.call(charge, 'id')){
	      this._innerCallback("fail", this._error("invalid_charge", "no_charge_id"));
	      return;
	    }
	    if(!hasOwn.call(charge, 'channel')){
	      this._innerCallback("fail", this._error("invalid_charge", "no_channel"));
	      return;
	    }
	    var channel = charge['channel'];
	    if(!hasOwn.call(charge, 'credential')){
	      this._innerCallback("fail", this._error("invalid_charge", "no_credential"));
	      return;
	    }
	    if (!charge['credential']) {
	      this._innerCallback("fail", this._error("invalid_credential", "credential_is_undefined"));
	      return;
	    }
	    if (!hasOwn.call(channels, channel)) {
	      this._innerCallback("fail", this._error("invalid_charge", "no_such_channel:" + channel));
	      return;
	    }
	    if (!hasOwn.call(charge['credential'], channel)) {
	      this._innerCallback("fail", this._error("invalid_credential", "no_valid_channel_credential"));
	      return;
	    }
	    if(!hasOwn.call(charge, 'livemode')){
	      this._innerCallback("fail", this._error("invalid_charge", "no_livemode"));
	      return;
	    }
	    if (charge['livemode'] == false) {
	      this._testModeNotify(charge);
	      return;
	    }
	    var credential = charge['credential'][channel];
	    if (channel == channels.upacp_pc) {
	      form_submit(cfg.UPACP_PC_URL, 'post', credential);
	    } else if (channel == channels.alipay_pc_direct) {
	      if (!hasOwn.call(credential, "_input_charset")) {
	        credential["_input_charset"] = 'utf-8';
	      }
	      var query = stringify_data(credential, channel, true);
	      window.location.href = cfg.ALIPAY_PC_DIRECT_URL + "?" + query;
	    } else if (channel == channels.cp_b2b) {
	      form_submit(cfg.CP_B2B_URL, 'post', credential);
	    }
	  },
	
	  _error: function(msg, extra) {
	    msg = (typeof msg == "undefined") ? "" : msg;
	    extra = (typeof extra == "undefined") ? "" : extra;
	    return {
	      msg:msg,
	      extra:extra
	    };
	  },
	
	  _innerCallback: function(result, err) {
	    if (typeof this._resultCallback == "function") {
	      if (typeof err == "undefined") {
	        err = this._error();
	      }
	      this._resultCallback(result, err);
	    }
	  },
	
	  _testModeNotify: function(charge) {
	    var params = {
	      'ch_id': charge['id'],
	      'scheme': 'http',
	      'channel': charge['channel']
	    };
	    if (hasOwn.call(charge, 'order_no')) {
	      params['order_no'] = charge['order_no'];
	    } else if (hasOwn.call(charge, 'orderNo')) {
	      params['order_no'] = charge['orderNo'];
	    }
	    if (hasOwn.call(charge, 'time_expire')) {
	      params['time_expire'] = charge['time_expire'];
	    } else if (hasOwn.call(charge, 'timeExpire')) {
	      params['time_expire'] = charge['timeExpire'];
	    }
	    if (hasOwn.call(charge, 'extra')) {
	      params['extra'] = encodeURIComponent(JSON.stringify(charge['extra']));
	    }
	    location.href = cfg.PINGPP_MOCK_URL+'?'+stringify_data(params);
	  }
	};
	
	function form_submit(url, method, params) {
	  var form = document.createElement("form");
	  form.setAttribute("method", method);
	  form.setAttribute("action", url);
	
	  for (var key in params) {
	    if (hasOwn.call(params, key)) {
	      var hiddenField = document.createElement("input");
	      hiddenField.setAttribute("type", "hidden");
	      hiddenField.setAttribute("name", key);
	      hiddenField.setAttribute("value", params[key]);
	      form.appendChild(hiddenField);
	    }
	  }
	
	  document.body.appendChild(form);
	  form.submit();
	}
	
	function stringify_data(data, channel, urlencode) {
	  if (typeof urlencode == "undefined") {
	    urlencode = false;
	  }
	  var output = [];
	  for (var i in data) {
	    if (channel == "bfb_wap" && i == "url") {
	      continue;
	    }
	    if (channel == "yeepay_wap" && i == "mode") {
	      continue;
	    }
	    output.push(i + '=' + (urlencode ? encodeURIComponent(data[i]) : data[i]));
	  }
	  return output.join('&');
	}
	
	PingppSDK.prototype.payment = PingppSDK.prototype.createPayment;
	
	module.exports = new PingppSDK();

/***/ },

/***/ 376:
/***/ function(module, exports, __webpack_require__) {

	var $ = window.$ || __webpack_require__(36);
	var extend =  __webpack_require__(41);
	
	__webpack_require__(377);
	//自定义功能写下面
	var tmpl_school = __webpack_require__(379);
	var tmpl_list = __webpack_require__(380);
	var tmpl_highschool = __webpack_require__(381);
	
	var browser = __webpack_require__(45);
	//分页
	var pagination = __webpack_require__(179);
	
	var searchSchool = {
	
		init : function(options){
			this.pager = 1;
			this.options = extend({
				el : ".addSchool",
				provinceId : 330000,
				type  : "college",
				capacity : 10
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
		          
		          o.startCallback && o.startCallback.call(that,modal);
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
		    var o = that.options;
	
		    var url = o.url || preServer+o.provinceId+"/data/college/search";
	
		    $.ajax({
		      url : url,
	      	  type : "post",
		      contentType: "application/json",
		      data : JSON.stringify({page:pager,capacity:o.capacity,"keyword":$.trim($("#wd").val())}),
		      success : function(res){
		        if(typeof res == "string"){
		          var res = $.parseJSON(res);
		        }
	
		        if(res.code!=1){
					warn(res.msg);
					return;
				}
	
				res = res.result;
	
		        that.renderList(res);
		        that.detailpagination(res);
		        that.Evt();
		      }
		    });
		},
	
	    renderList : function(res){
	      var that = this;
	      var o = that.options;
	      var modal = that.modal;
	
	      	var _tmpl;
	        if(o.type=="highSchool"){
		       _tmpl = tmpl_highschool(res)
		    }else{
		    	_tmpl = tmpl_list(res)
		    }
	
		  if(browser.isModernBrower){
		  	$('.schoolLists').empty().append(_tmpl).hide().fadeIn();
		  }else{
		  	$('.schoolLists').empty().append(_tmpl).show();
		  }
	      
	    },
	
	   detailpagination : function(res){
	     var that = this;
	     var o = that.options;
	     var modal = that.modal;
	     if(!modal.find('.pagination').length){
	       modal.find('.s-Content').append('<div class="pagination"></div>');
	     } 
	
	    var $page = modal.find(".pagination");
		  pagination($page,{
		    pages: Math.ceil(res.total / o.capacity),
		    displayedPages: 3,
		    currentPage : 1,
		    edges: 1,
		    onPageClick : function(pageNo){
		      that.requestData(pageNo);
		    }
		  });
	
	    },
	
		Evt : function(){
		    var that = this,o = that.options;
		    $(document).off().on("click",".schoolList",function(e){
		      e.preventDefault();
		      var $this = $(this);
		      $this.siblings().removeClass("active");
		      $this.addClass("active");
	
		  	  o.selectListCallback && o.selectListCallback.call(that,$this);
		    });
		}
	
	};
	
	module.exports = searchSchool;

/***/ },

/***/ 377:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 379:
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

/***/ 380:
/***/ function(module, exports) {

	module.exports = function (obj) {
	obj || (obj = {});
	var __t, __p = '', __j = Array.prototype.join;
	function print() { __p += __j.call(arguments, '') }
	with (obj) {
	__p += ' ';
	 if (colleges.length == 0 && page == 1) { ;
	__p += '\n	<li class="no_transList"><i class="noListIcon"></i><em class="vm">暂时搜索不到数据</em></li>\n';
	 }else{ ;
	__p += '\n	';
	 for (var i = 0; i < colleges.length; i++) { ;
	__p += '\n	 	<li class="schoolList" code="' +
	((__t = ( colleges[i].collegeId )) == null ? '' : __t) +
	'" name="' +
	((__t = ( colleges[i].collegeName )) == null ? '' : __t) +
	'"><em class="icon-check"></em><em class="vm">' +
	((__t = ( colleges[i].collegeName )) == null ? '' : __t) +
	'</em></li>\n ';
	 }} ;
	
	
	}
	return __p
	}

/***/ },

/***/ 381:
/***/ function(module, exports) {

	module.exports = function (obj) {
	obj || (obj = {});
	var __t, __p = '', __j = Array.prototype.join;
	function print() { __p += __j.call(arguments, '') }
	with (obj) {
	__p += ' ';
	 if (schools.length == 0 && page == 1) { ;
	__p += '\n	<li class="no_transList"><i class="noListIcon"></i><em class="vm">暂时搜索不到数据</em></li>\n';
	 }else{ ;
	__p += '\n	';
	 for (var i = 0; i < schools.length; i++) { ;
	__p += '\n	 	<li class="schoolList" code="' +
	((__t = ( schools[i].code )) == null ? '' : __t) +
	'" name="' +
	((__t = ( schools[i].name )) == null ? '' : __t) +
	'"><em class="icon-check"></em><em class="vm">' +
	((__t = ( schools[i].name )) == null ? '' : __t) +
	'</em></li>\n ';
	 }} ;
	
	
	}
	return __p
	}

/***/ },

/***/ 394:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 396:
/***/ function(module, exports, __webpack_require__) {

	var $ = window.$ || __webpack_require__(36);
	__webpack_require__(54);
	
	//公共方法
	var common = __webpack_require__(38);
	
	var searchSchool = __webpack_require__(376);
	
	var uploader = __webpack_require__(397);
	
	//provinceId
	var provinceId = $("[name=province]").val();
	
	var archive = {
		init : function(options){
			//保存参数
			this.options = options;
			var that = this;
	
			$("#myInfoForm").validator({
				errorParent: '.row',
			    successCallback: function(e) {
			      var target = $(e.target).closest('.btn');
			      //执行到下一步操作
			      that.subFunc(target,$("#myInfoForm"));
	
			    },
			    focusinCallback: function() {
			      var _ele = $(this);
			      common.hideError($('.errTxt'));
			    },
	
			    errorCallback: function(unvalidFields) {
			      var oError = $('.errTxt');
			      common.showError($('.errTxt'));
			    }
			});
	
			this.bindEvt();
	
			uploader.init();
		},
	
		subFunc :  function(btn,oForm){
			var that = this;
			var fields = [
				{"type":"name",url : "/profile/name",field : "userName"},
				{"type":"sex",url : "/profile/sex",field : "sex"},
				{"type":"highSchool",url : "/profile/school",field : "schoolId"},
				{"type":"highYear",url : "/profile/school/year",field : "year"}
			];
	
			var uploadAll = 0;
	
			$.each(fields,function(idx,ele){
				var _data = {};
				_data[ele.field] = $("[name="+ele["type"]+"]").val();
	
				if(ele.type == "highSchool"){
					_data[ele.field] = $("[name="+ele["type"]+"]").attr("code");
				}
	
				$.ajax({
					url : preServer+provinceId+ele.url,
					data : JSON.stringify(_data),
					type : "post",
					success : function(res){
						if(typeof res == "string"){
							var res= $.parseJSON(res);
						}
	
						if(res.code!=1){
							warn(res.msg);
							return;
						}
	
						uploadAll++;
	
						if(uploadAll == fields.length){
							that.subSuccessCallback();
						}
	
					}
				})
	
			});
		},
	
		subSuccessCallback : function(){
			warn("个人资料更新成功",function(){
				window.location = "/user";
			});
		},
	
		bindEvt : function(){
			this.addSchool();
	
			this.addYear();
		},
	
		addYear : function(){
			var that = this;
	
			var nowYear = new Date().getFullYear();
			var yearArr = [];
	
			for(var i=0;i<5;i++){
				yearArr.push(nowYear--);
			}
	
			var highYear = $("[name=highYearInput]").length ? $("[name=highYearInput]").val() : "";
			var optionList = [];
	
			$.each(yearArr,function(idx,ele){
				optionList.push('<option value='+ele+'>'+ele+'</option>');
			});
	
			$("[name=highYear]").empty().append('<option value="">请选择</option>');
			$("[name=highYear]").append(optionList.join(""));
	
			if(highYear){
				$("[name=highYear]").val(highYear);
			}
		},
	
		addSchool : function(){
			var o = this.options;
			searchSchool.init({
				el : ".addSchool",
				provinceId : o.provinceId,
				type : "highSchool",
				url : "/v2_1/client/"+provinceId+"/highSchool/search",
				startCallback  : function(modal){
					modal.find("h3 span").text("选择高中");	
				},
				selectListCallback : function(li){
					var self = this;
					$(".btn-close").trigger("click");
					$(".addSchool").val(li.attr("name"));
					$(".addSchool").attr("code",li.attr("code"));
					$(".addSchool").closest(".row").removeClass("error empty")
				}
			});
	
		}
	
	
	};
	
	module.exports = archive;

/***/ },

/***/ 397:
/***/ function(module, exports, __webpack_require__) {

	var $ = window.$ || __webpack_require__(36);
	var extend = __webpack_require__(398);
	
	var provinceId = $("[name=province]").val();
	
	var uploader = {
		init : function(settings){
			this.settings = settings;
			this.bindEvt();
		},
	
		bindEvt : function(){
			var that = this,o = that.settings;
	
			var uploader = WebUploader.create({
	
	            auto : true,
	            // swf文件路径
	            swf: '/data/upload/swfupload.swf',
	
	            // 文件接收服务端。
	            server: preServer+provinceId+"/attach/uploadAttach",
	
	            // 选择文件的按钮。可选。
	            // 内部根据当前运行是创建，可能是input元素，也可能是flash.
	            pick: '#picker',
	
	            // 不压缩image, 默认如果是jpeg，文件上传前会压缩一把再上传！
	            resize: false,
	            // 只允许选择图片文件。
	            accept: {
	                title: 'Images',
	                extensions: 'gif,jpg,jpeg,bmp,png',
	                mimeTypes: 'image/*'
	            }
	        });
	
	        uploader.on( 'uploadProgress', function( file,percentage) {
	            that.loadingStart();
	        });
	
	        // 文件上传成功，给item添加成功class, 用样式标记上传成功。
	        uploader.on( 'uploadSuccess', function( file,response) {
	           that.setAvatar(file,response);
	    
	        });
	
	        uploader.on( 'uploadError', function( file,reason) {
	            
	        });
	
	        // 完成上传完了，成功或者失败，先删除进度条。
	        uploader.on( 'uploadComplete', function( file ) {
	            that.loadingStop();
	        });
	
	        uploader.on('error', function(error){
	            console.log(error);
	        })
		},
	
	    loadingStart : function(){
	        document.getElementById("loading").style.display = "inline";
	    },
	
	    loadingStop : function() {
	        document.getElementById("loading").style.display = "none";
	    },
	
	    setAvatar : function(file,serveData){
	        var that = this;
	
	        if(typeof serveData == "string"){
	            var serveData = $.parseJSON(serveData);
	        }
	
	        if(serveData.code != 1){
	            warn(serveData.msg);
	            return;
	        }
	
	        $.ajax({
	            url : preServer+provinceId+'/profile/avatar',
	            type : "post",
	            data : JSON.stringify({avatar:serveData.result.avatar}),
	            success : function(res){
	                if(typeof res == "string"){
	                    var res = $.parseJSON(res);
	                }
	
	                if(res.code !=1){
	                    warn(res.msg);
	                    return;
	                }
	
	                warn("头像上传成功",function(){
	                    window.location.href='/user';
	                });
	
	            }
	
	        })
	    }
	
	
	};
	
	module.exports = uploader;

/***/ },

/***/ 398:
/***/ function(module, exports) {

	'use strict';
	
	var hasOwn = Object.prototype.hasOwnProperty;
	var toStr = Object.prototype.toString;
	
	var isArray = function isArray(arr) {
		if (typeof Array.isArray === 'function') {
			return Array.isArray(arr);
		}
	
		return toStr.call(arr) === '[object Array]';
	};
	
	var isPlainObject = function isPlainObject(obj) {
		if (!obj || toStr.call(obj) !== '[object Object]') {
			return false;
		}
	
		var hasOwnConstructor = hasOwn.call(obj, 'constructor');
		var hasIsPrototypeOf = obj.constructor && obj.constructor.prototype && hasOwn.call(obj.constructor.prototype, 'isPrototypeOf');
		// Not own constructor property must be Object
		if (obj.constructor && !hasOwnConstructor && !hasIsPrototypeOf) {
			return false;
		}
	
		// Own properties are enumerated firstly, so to speed up,
		// if last one is own, then all properties are own.
		var key;
		for (key in obj) {/**/}
	
		return typeof key === 'undefined' || hasOwn.call(obj, key);
	};
	
	module.exports = function extend() {
		var options, name, src, copy, copyIsArray, clone,
			target = arguments[0],
			i = 1,
			length = arguments.length,
			deep = false;
	
		// Handle a deep copy situation
		if (typeof target === 'boolean') {
			deep = target;
			target = arguments[1] || {};
			// skip the boolean and the target
			i = 2;
		} else if ((typeof target !== 'object' && typeof target !== 'function') || target == null) {
			target = {};
		}
	
		for (; i < length; ++i) {
			options = arguments[i];
			// Only deal with non-null/undefined values
			if (options != null) {
				// Extend the base object
				for (name in options) {
					src = target[name];
					copy = options[name];
	
					// Prevent never-ending loop
					if (target !== copy) {
						// Recurse if we're merging plain objects or arrays
						if (deep && copy && (isPlainObject(copy) || (copyIsArray = isArray(copy)))) {
							if (copyIsArray) {
								copyIsArray = false;
								clone = src && isArray(src) ? src : [];
							} else {
								clone = src && isPlainObject(src) ? src : {};
							}
	
							// Never move original objects, clone them
							target[name] = extend(deep, clone, copy);
	
						// Don't bring in undefined values
						} else if (typeof copy !== 'undefined') {
							target[name] = copy;
						}
					}
				}
			}
		}
	
		// Return the modified object
		return target;
	};
	


/***/ },

/***/ 399:
/***/ function(module, exports, __webpack_require__) {

	var $ = window.$ || __webpack_require__(36);
	var extend =  __webpack_require__(41);
	
	var tmpl = __webpack_require__(400);
	
	//公共方法
	var util = __webpack_require__(37);
	
	module.exports = {
		init : function(o){
			// 分页默认从第1页开始
	    	this.pager = 1;
	    	this.tmpl = tmpl;
	
	
	    	this.options = extend({
	
	    	},o);
	
	    	this.target = $(o.ele);
	
			this.bindEvt();
		},
	
		bindEvt : function(){
			var that = this;
			//select切换
			$("#caseType").on("change",function(){
				var val = $(this).val();
					
				$("#historyWrapper .well").each(function(idx,ele){
					var type = $(ele).attr("type");
					var item = $(ele);
	
					if(val == 0){
						var match = true;
					}else{
						var match = (val.indexOf(type) >= 0);
					}
	
					return item.toggle(match);
				});
			});
	
			that.fetch.call(that);
	
		},
	
		fetch : function(){
			var that = this,o = that.options,$this = that.target;
	
			var parm = [];
	
			$.ajax({
				url : o.url,
				type : o.type,
				contentType: "application/json",
				success : function(res){
					if(typeof(res) == 'string'){
	                   var res = $.parseJSON(res);
	                }
	
	                if(res.code!=1){
						warn(res.msg);
						return;
					}
	
					 var res = res.result;
	
					//时间优化,区分wishes和assessment
	                $.each(res.wishes,function(idx,ele){
	                	ele.type = 1;
	                });
	
	                $.each(res.assessment,function(idx,ele){
	                	ele.type = 2;
	                });
	
	
	                //组装新的list
	                var newList = res.wishes.concat(res.assessment).sort(that.sortNumber);
	
	                $.each(newList,function(idx,ele){
	                	ele.createTime = util.buildDate(ele.createTime,"yyyy-MM-dd");
	                });
	
	                res.caseList = newList;
	
	                that.insertData.call(that,res);
				}
			});
		},
	
		sortNumber : function(arr1,arr2){
			return (arr2.createTime  - arr1.createTime);
		},
	
		renderData : function(res){
			var that = this;
			return that.tmpl(res);
		},
	
		insertData : function(res){
			var that = this,$this = that.target,o = that.options;
	
			var _html = that.renderData(res);
			if(that.pager == 1){
				$this.empty().append(_html);
			}else{
				$this.append(_html);
			}
	
		}
	};

/***/ },

/***/ 400:
/***/ function(module, exports) {

	module.exports = function (obj) {
	obj || (obj = {});
	var __t, __p = '', __j = Array.prototype.join;
	function print() { __p += __j.call(arguments, '') }
	with (obj) {
	
	 if (caseList.length == 0 ) { ;
	__p += '\n	<li class="no_transList"><i class="noListIcon"></i><em class="vm">暂无记录</em></li>\n';
	 }else{ ;
	__p += '\n';
	 for (var i = 0; i < caseList.length; i++) { ;
	__p += '\n	';
	 if (caseList[i].type == 1) { ;
	__p += '\n	<div class="well clearfix" type ="' +
	((__t = ( caseList[i].type )) == null ? '' : __t) +
	'">\n		<div class="media fl">\n			<div class="span fl">\n				<span class="btn btn-primary">高考志愿定制</span>\n			</div>\n			<div class="media-body g3 well_body">\n				<p>\n				<span class="label">订单号：</span><span class="field">' +
	((__t = ( caseList[i].orderId )) == null ? '' : __t) +
	'</span>\n				<span class="label">生成日期：</span><span class="field">' +
	((__t = ( caseList[i].createTime )) == null ? '' : __t) +
	'</span>\n				</p>\n				<p>\n				<span class="label">高考分数：</span><span class="field">' +
	((__t = ( caseList[i].score )) == null ? '' : __t) +
	'</span>\n				<span class="label">全省排名：</span><span class="field">' +
	((__t = ( caseList[i].place )) == null ? '' : __t) +
	'</span>\n				</p>\n			</div>\n		</div>\n		<div class="detailInfo fr">\n			<div class="row btnRow">\n			';
	 if (caseList[i].payed) { ;
	__p += '\n			<a href="/box/plan/result?planId=' +
	((__t = ( caseList[i].planId )) == null ? '' : __t) +
	'" class="btn btn-positive btn-medium bd">查看</a>\n			';
	 }else{ ;
	__p += '\n			<a href="/pay/wishes?planId=' +
	((__t = ( caseList[i].planId )) == null ? '' : __t) +
	'" class="btn btn-primary btn-medium">付款</a>\n			';
	 } ;
	__p += '\n			</div>\n		</div>\n	</div>\n	';
	 }else if(caseList[i].type == 2){ ;
	__p += '\n	<div class="well clearfix" type ="2">\n		<div class="media fl">\n			<div class="span fl">\n				<span class="btn btn-primary">高考志愿评估</span>\n			</div>\n			<div class="media-body g3 well_body">\n				<p>\n				<span class="label">订单号：</span><span class="field">' +
	((__t = ( caseList[i].orderId )) == null ? '' : __t) +
	'</span>\n				<span class="label">生成日期：</span><span class="field">' +
	((__t = ( caseList[i].createTime )) == null ? '' : __t) +
	'</span>\n				</p>\n				<p>\n				<span class="label">高考分数：</span><span class="field">' +
	((__t = ( caseList[i].score )) == null ? '' : __t) +
	'</span>\n				<span class="label">全省排名：</span><span class="field">' +
	((__t = ( caseList[i].place )) == null ? '' : __t) +
	'</span>\n				</p>\n			</div>\n		</div>\n		<div class="detailInfo fr">\n			<div class="row btnRow">\n\n			';
	 if (caseList[i].payed) { ;
	__p += '\n			<a href="/box/plan/result?planId=' +
	((__t = ( caseList[i].planId )) == null ? '' : __t) +
	'" class="btn btn-positive btn-medium bd">查看</a>\n			';
	 }else{ ;
	__p += '\n			<a href="/pay/assessment?planId=' +
	((__t = ( caseList[i].planId )) == null ? '' : __t) +
	'" class="btn btn-primary btn-medium">付款</a>\n			';
	 } ;
	__p += '\n			</div>\n		</div>\n	</div>\n	';
	 } ;
	__p += '\n';
	 }} ;
	__p += '\n\n\n';
	
	}
	return __p
	}

/***/ },

/***/ 401:
/***/ function(module, exports, __webpack_require__) {

	var $ = window.$ || __webpack_require__(36);
	var tabs = __webpack_require__(152);
	
	//公共方法
	var util = __webpack_require__(37);
	
	//本地数据库
	var localData = __webpack_require__(141);
	
	var tmpl_college = __webpack_require__(402);
	var tmpl_major = __webpack_require__(403);
	var tmpl_info = __webpack_require__(404);
	
	var provinceId = $("[name=province]").val();
	
	var collection = {
		init : function(){
			tabs($("#collectionWrapper"),{
				tabsItem : ".tab-item",
				items : ".content-wrap > section",
				klass : "current"
			});
	
			this.bindEvt();
		},
	
		bindEvt : function(){
			var that = this;
			this.requestCollege();
			this.requestMajor();
			this.requestInfo();
		},
	
		requestCollege : function(){
			var that = this;
			$.ajax({
				url : preServer+provinceId+"/profile/favor/college",
				type : "get",
				contentType: "application/json",
				success : function(res){
					if(typeof(res) == 'string'){
	                   var res = $.parseJSON(res);
	                }
	
	                if(res.code!=1){
	                    warn(res.msg);
	                    return;
	                }
	
	                res = res.result;
	
	                $.each(res.favorites,function(idx,el){
	                	
	                	var ele = el.college;
	                	//保存name和code
	                	ele.code = ele.collegeId; 
	                	ele.name = ele.collegeName; 
	
	                	//获取city名称
	                    ele.city = {
	                        code : ele.city,
	                        name : localData.getCityName(ele.city)
	                    };
	
	                    //获取getCollegeTypeName(院校属性)
	                    ele.collegeType = {
	                        code : ele.collegeType,
	                        name : localData.getCollegeTypeName(ele.collegeType)
	                    };
	
	                    //获取getCollegeTypeName(院校性质)
	                    ele.ownerType = {
	                        code : ele.ownerType,
	                        name : localData.getOwnerTypeName(ele.ownerType)
	                    };
	
	                    //获取getLevelName(院校层次)
	                    ele.level = {
	                        code : ele.level,
	                        name : localData.getLevelName(ele.level)
	                    };
	
	                    //获取featrueList
	                    ele.feature = $.map(ele.feature,function(el,index){
	                        return {
	                            type : el,
	                            name : localData.getFeatureName(el)
	                        };
	                    });
	                }); 
	
	                that.insertCollege.call(that,res);
				}
			});
		},
	
	    insertCollege : function(data){
	        var that = this;
	        var _html = tmpl_college(data);
	       $(".schoolList").append(_html);
	    },
	    requestMajor : function(){
	        var that = this;
	        $.ajax({
	            url : preServer+provinceId+"/profile/favor/major",
	            type : "get",
	            contentType: "application/json",
	            success : function(res){
	                if(typeof(res) == 'string'){
	                   var res = $.parseJSON(res);
	                }
	
	                 if(res.code!=1){
	                    warn(res.msg);
	                    return;
	                }
	
	                res = res.result;
	
	                that.insertMajor.call(that,res);
	            }
	        });
	    },
	
	    insertMajor : function(data){
	        var that = this;
	        var _html = tmpl_major(data);
	       $(".majorList").empty().append(_html);
	    },
	
	     requestInfo : function(){
	        var that = this;
	        $.ajax({
	            url : preServer+provinceId+"/profile/favor/news",
	            type : "get",
	            contentType: "application/json",
	            success : function(res){
	                if(typeof(res) == 'string'){
	                   var res = $.parseJSON(res);
	                }
	
	                 if(res.code!=1){
	                    warn(res.msg);
	                    return;
	                }
	
	
	
	                res = res.result;
	
	                 $.each(res.favorites,function(idx,ele){
	                    if(ele.news.newsDate){
	                        ele.news.newsDate = util.buildDate(ele.news.newsDate,"yyyy-MM-dd hh:mm:ss");
	                    }
	                })
	
	                that.insertInfo.call(that,res);
	            }
	        });
	    },
	
	    insertInfo : function(data){
	        var that = this;
	        var _html = tmpl_info(data);
	       $(".favorInfoList").empty().append(_html);
	    }
	
	
	};
	
	module.exports = collection;

/***/ },

/***/ 402:
/***/ function(module, exports) {

	module.exports = function (obj) {
	obj || (obj = {});
	var __t, __p = '', __j = Array.prototype.join;
	function print() { __p += __j.call(arguments, '') }
	with (obj) {
	
	 if (favorites.length == 0) { ;
	__p += '\n	<li class="no_transList"><i class="noListIcon"></i><em class="vm">暂无记录</em></li>\n';
	 }else{ ;
	__p += '	\n';
	 for (var i = 0; i < favorites.length; i++) { ;
	__p += '\n<li class="clearfix">\n	<div class="fl">\n	<h4 class="name badgeRow"><em class="badgetitle vm">' +
	((__t = ( favorites[i].college.collegeName )) == null ? '' : __t) +
	'</em>\n		';
	 for (var j = 0; j < favorites[i].college.feature.length; j++) { ;
	__p += '\n			';
	 if(favorites[i].college.feature[j].type == 1) { ;
	__p += '\n				<span class="badge green">' +
	((__t = ( favorites[i].college.feature[j].name )) == null ? '' : __t) +
	'</span>\n			';
	 }else if(favorites[i].college.feature[j].type == 2){ ;
	__p += '\n				<span class="badge red">' +
	((__t = ( favorites[i].college.feature[j].name )) == null ? '' : __t) +
	'</span>\n			';
	 }else{ ;
	__p += '\n				<span class="badge">' +
	((__t = ( favorites[i].college.feature[j].name )) == null ? '' : __t) +
	'</span>\n			';
	 } ;
	__p += '\n		';
	 } ;
	__p += '\n	</h4>\n	<div class="detail">\n		<span class="label">院校属地：</span><span class="field">' +
	((__t = ( favorites[i].college.city.name )) == null ? '' : __t) +
	'</span>\n		<span class="label">院校分类：</span><span class="field">' +
	((__t = ( favorites[i].college.collegeType.name )) == null ? '' : __t) +
	'</span>\n		<span class="label">院校性质：</span><span class="field">' +
	((__t = ( favorites[i].college.ownerType.name )) == null ? '' : __t) +
	'</span>\n		<span class="label">院校层次：</span><span class="field">' +
	((__t = ( favorites[i].college.level.name )) == null ? '' : __t) +
	'</span>\n	</div>\n	</div>\n	<div class="fr">\n		<a href="/library/college/' +
	((__t = ( favorites[i].college.collegeId )) == null ? '' : __t) +
	'" class="btn btn-primary btn-mid" target="_blank">查看详情</a>\n	</div>\n</li>\n';
	 }} ;
	
	
	}
	return __p
	}

/***/ },

/***/ 403:
/***/ function(module, exports) {

	module.exports = function (obj) {
	obj || (obj = {});
	var __t, __p = '', __j = Array.prototype.join;
	function print() { __p += __j.call(arguments, '') }
	with (obj) {
	
	 if (favorites.length == 0) { ;
	__p += '\n	<li class="no_transList"><i class="noListIcon"></i><em class="vm">暂无记录</em></li>\n';
	 }else{ ;
	__p += '	\n\n<li>\n	<div class="btnsRow">\n		';
	 for (var i = 0; i < favorites.length; i++) { ;
	__p += '\n		<a href="/library/major/' +
	((__t = ( favorites[i].major.majorId )) == null ? '' : __t) +
	'" class="btn btn-primary" target="_blank">' +
	((__t = ( favorites[i].major.majorName )) == null ? '' : __t) +
	'</a>\n		';
	 } ;
	__p += '\n	</div>\n</li>\n';
	 } ;
	
	
	}
	return __p
	}

/***/ },

/***/ 404:
/***/ function(module, exports) {

	module.exports = function (obj) {
	obj || (obj = {});
	var __t, __p = '', __j = Array.prototype.join;
	function print() { __p += __j.call(arguments, '') }
	with (obj) {
	
	 if (favorites.length == 0) { ;
	__p += '\n	<li class="no_transList"><i class="noListIcon"></i><em class="vm">暂无记录</em></li>\n';
	 }else{ ;
	__p += '\n';
	 for (var i = 0; i < favorites.length; i++) { ;
	__p += '\n<li>\n   	 <div class="media">\n		<span class="fl imgWrap">\n			<img src="' +
	((__t = ( favorites[i].news.newsIconUrl )) == null ? '' : __t) +
	'" class="responsive">\n		</span>\n		<div class="media-body">\n				<a class="detailTitle" href="/info/' +
	((__t = ( favorites[i].news.newsId )) == null ? '' : __t) +
	'" target="_blank">\n					' +
	((__t = ( favorites[i].news.newsName )) == null ? '' : __t) +
	'\n				</a>\n				<div class="clearfix detailSub g6">\n					';
	 for (var k = 0; k < favorites[i].news.newsTags.length; k++) { ;
	__p += '\n					<span class="fl article-tag mr10">' +
	((__t = ( favorites[i].news.newsTags[k] )) == null ? '' : __t) +
	'</span>\n					';
	 } ;
	__p += '\n				<span class="fr moment">' +
	((__t = ( favorites[i].news.newsDate )) == null ? '' : __t) +
	'</span>\n				</div>\n				<a class="db detailCnt" href="' +
	((__t = ( favorites[i].news.newsUrl )) == null ? '' : __t) +
	'" target="_blank">\n					' +
	((__t = ( favorites[i].news.discription )) == null ? '' : __t) +
	'\n				</a>\n		</div>\n	</div>\n</li>\n';
	 }} ;
	
	
	}
	return __p
	}

/***/ },

/***/ 405:
/***/ function(module, exports, __webpack_require__) {

	var $ = window.$ || __webpack_require__(36);
	var extend =  __webpack_require__(41);
	
	var tmpl = __webpack_require__(406);
	
	//公共方法
	var util = __webpack_require__(37);
	
	module.exports = {
		init : function(o){
			// 分页默认从第1页开始
	    	this.pager = 1;
	    	this.tmpl = tmpl;
	
	
	    	this.options = extend({
	
	    	},o);
	
	    	this.target = $(o.ele);
	    	
			this.bindEvt();
		},
	
		bindEvt : function(){
			var that = this;
			that.fetch.call(that);
		},
	
		fetch : function(){
			var that = this,o = that.options,$this = that.target;
	
			var parm = [];
	
			$.ajax({
				url : o.url,
				type : o.type,
				contentType: "application/json",
				success : function(res){
					if(typeof(res) == 'string'){
	                   var res = $.parseJSON(res);
	                }
	
	                if(res.code!=1){
						warn(res.msg);
						return;
					}
	
					res = res.result;
	
	                $.each(res,function(idx,ele){
	                	ele.createTime = util.buildDate(ele.createTime,"yyyy-MM-dd");
	                });
	
	                res = {codes : res};
	
	                that.insertData.call(that,res);
				}
			});
		},
	
		renderData : function(res){
			var that = this;
			return that.tmpl(res);
		},
	
		insertData : function(res){
			var that = this,$this = that.target,o = that.options;
	
			var _html = that.renderData(res);
			if(that.pager == 1){
				$this.empty().append(_html);
			}else{
				$this.append(_html);
			}
		}
	};


/***/ },

/***/ 406:
/***/ function(module, exports) {

	module.exports = function (obj) {
	obj || (obj = {});
	var __t, __p = '', __j = Array.prototype.join;
	function print() { __p += __j.call(arguments, '') }
	with (obj) {
	
	 if (codes.length == 0) { ;
	__p += '\n	<li class="no_transList"><i class="noListIcon"></i><em class="vm">暂无记录</em></li>\n';
	 }else{ ;
	__p += '	\n';
	 for (var i = 0; i < codes.length; i++) { ;
	__p += '\n<li class="clearfix">\n	<div class="well clearfix">\n	<div class="media fl">\n		<p><em class="label">授权码：</em><em className="field">' +
	((__t = ( codes[i].code )) == null ? '' : __t) +
	'</em></p>\n		<p><em class="label">生成日期：</em><em className="field">' +
	((__t = ( codes[i].createTime )) == null ? '' : __t) +
	'</em></p>\n	</div>\n	<div class="detailInfo fr">\n		<div class="row btnRow"><a href="/box/plan/major_exam3?mtestId=' +
	((__t = ( codes[i].mtestId )) == null ? '' : __t) +
	'" target="_blank" class="btn btn-primary btn-medium" targe="_blank">查看</a></div>\n	</div>\n</div>\n</li>\n';
	 }} ;
	
	
	}
	return __p
	}

/***/ },

/***/ 407:
/***/ function(module, exports, __webpack_require__) {

	var $ = window.$ || __webpack_require__(36);
	var extend =  __webpack_require__(41);
	
	var tmpl = __webpack_require__(408);
	
	//公共方法
	var util = __webpack_require__(37);
	
	module.exports = {
		init : function(o){
			// 分页默认从第1页开始
	    	this.pager = 1;
	    	this.tmpl = tmpl;
	
	
	    	this.options = extend({
	
	    	},o);
	
	    	this.target = $(o.ele);
	
			this.bindEvt();
		},
	
		bindEvt : function(){
			var that = this;
			
	
			that.fetch.call(that);
		},
	
		fetch : function(){
			var that = this,o = that.options,$this = that.target;
	
			var parm = [];
	
			$.ajax({
				url : o.url,
				type : o.type,
				contentType: "application/json",
				success : function(res){
					if(typeof(res) == 'string'){
	                   var res = $.parseJSON(res);
	                }
	
	                if(res.code!=1){
						warn(res.msg);
						return;
					}
	
	                res = {
	                	questions : res.result
	                };
	
	                that.insertData.call(that,res);
				}
			});
		},
	
		renderData : function(res){
			var that = this;
			return that.tmpl(res);
		},
	
		insertData : function(res){
			var that = this,$this = that.target,o = that.options;
	
			var _html = that.renderData(res);
			if(that.pager == 1){
				$this.empty().append(_html);
			}else{
				$this.append(_html);
			}
		}
	};

/***/ },

/***/ 408:
/***/ function(module, exports) {

	module.exports = function (obj) {
	obj || (obj = {});
	var __t, __p = '', __j = Array.prototype.join;
	function print() { __p += __j.call(arguments, '') }
	with (obj) {
	
	 if (questions.length == 0) { ;
	__p += '\n	<li class="no_transList"><i class="noListIcon"></i><em class="vm">暂无记录</em></li>\n';
	 }else{ ;
	__p += '\n';
	 for (var i = 0; i < questions.length; i++) { ;
	__p += '\n<li class="q-school">\n		<h3 class="blue">' +
	((__t = ( questions[i].college.collegeName )) == null ? '' : __t) +
	'</h3>\n		<div class="s-faq">\n			<div class="q media">\n				<span class="fl blue">问：</span>\n				<div class="media-body">\n					<p>' +
	((__t = ( questions[i].q )) == null ? '' : __t) +
	'</p>\n					<div class="badges">\n						';
	 if (questions[i].province) { ;
	__p += '\n						<span class="badge">' +
	((__t = ( questions[i].province )) == null ? '' : __t) +
	'考生</span>\n						';
	 } ;
	__p += '\n						';
	 if (questions[i].year) { ;
	__p += '\n						<span class="badge">' +
	((__t = ( questions[i].year )) == null ? '' : __t) +
	'</span>\n						';
	 } ;
	__p += '\n					</div>\n				</div>\n			</div>\n			<div class="a media">\n				<span class="fl orange">答：</span>\n				<div class="media-body">\n					' +
	((__t = ( questions[i].a )) == null ? '' : __t) +
	'\n				</div>\n			</div>\n		</div>\n</li>\n';
	 }} ;
	
	
	}
	return __p
	}

/***/ },

/***/ 409:
/***/ function(module, exports, __webpack_require__) {

	var $ = window.$ || __webpack_require__(36);
	var extend =  __webpack_require__(41);
	
	var tmpl = __webpack_require__(410);
	
	//公共方法
	var util = __webpack_require__(37);
	
	//本地数据库
	var localData = __webpack_require__(141);
	
	var tmpl_pay = __webpack_require__(411);
	
	//ping++
	var ping = __webpack_require__(231);
	
	var provinceId = $("[name=province]").val();
	
	module.exports = {
		init : function(o){
			// 分页默认从第1页开始
	    	this.pager = 1;
	    	this.tmpl = tmpl;
	
	
	    	this.options = extend({
	
	    	},o);
	
	    	this.target = $(o.ele);
	
			this.bindEvt();
		},
	
		bindEvt : function(){
			var that = this;
			
	
			that.fetch.call(that);
		},
	
		fetch : function(){
			var that = this,o = that.options,$this = that.target;
	
			var parm = [];
	
			$.ajax({
				url : o.url,
				type : o.type,
				contentType: "application/json",
				success : function(res){
					if(typeof(res) == 'string'){
	                   var res = $.parseJSON(res);
	                }
	
	                res.appointments = res.result;
	                
	                //if(!res.appointments.length) return;
	
	                 $.each(res.appointments,function(idx,ele){
	                	//获取city名称
	                    ele.param = extend(ele.param,{
	                    	cityName : localData.getCityName(ele.param.city),
	                    	courseTypeName : localData.getCourseTypeName(ele.param.courseType)
	                    });
	
	                    ele.createTime = util.buildDate(ele.createTime,"yyyy-MM-dd hh:mm:ss");
	                    if(ele.price){
	                    	ele.price = Math.floor(ele.price*100)/10000;
	                    }
	                });
	
	                that.insertData.call(that,res);
				}
			});
		},
	
		renderData : function(res){
			var that = this;
			return that.tmpl(res);
		},
	
		insertData : function(res){
			var that = this,$this = that.target,o = that.options;
	
			var _html = that.renderData(res);
	
			if(that.pager == 1){
				$this.empty().append(_html);
			}else{
				$this.append(_html);
			}
	
			that.appointEvt(res);
		},
	
		appointEvt : function(res){
			var that = this;
	
	
			$('.btn-pay').on("click",function(e){
				e.preventDefault();
				var btn = $(e.target);
	
				var orderId = btn.attr("orderid");
				that.orderId = orderId;
	
				var payList = $.map(res.result,function(ele){
					if(ele.orderId == orderId){
						return ele;
					}
				});
	
				modalBox(btn,{
					html:tmpl_pay(payList[0]),
					klass : 'w540 shadow',
			        closeByOverlay : false,
			        completeCallback : function(){
			        	$("#payBtn").on("click",function(e){
							e.preventDefault();
							var btn = $(this);
							var channel = $("[name=channel]:checked").val();
							
							that.subPay(btn);
							
						});
			        }
				});
			});
	
		},
		subPay : function(btn){
			var that = this;
	
			if(btn.hasClass("disabled")) return;
			btn.addClass("disabled");
	
			var _data = {
				orderId : that.orderId,
				channel : $("[name=channel]:checked").val()
			};
	
			$.ajax({
				url : preServer+provinceId+"/pay",
				type : "post",
				contentType: "application/json",
	        	data : JSON.stringify(_data),
	        	success : function(res){
	
	        		if(res.code != 1){
	        			warn(res.msg);
	        			btn.removeClass("disabled");
	        			return;
	        		}
	
	        		var charge = res.result;
	        		if(/alipay/.test(_data.channel)){
	        			that.requestAlipay(btn,charge);
	        		}
	
	        		btn.removeClass("disabled");
	
	        	},
	        	error : function(err){
	        		console.log(err);
	        		btn.removeClass("disabled");
	        	}
			});
		},
	
		requestAlipay : function(btn,charge){
			var that = this;
			ping.createPayment(charge, function(result, err){
				if(err){
					warn(err.msg);
				}
			});
		}
	};

/***/ },

/***/ 410:
/***/ function(module, exports) {

	module.exports = function (obj) {
	obj || (obj = {});
	var __t, __p = '', __j = Array.prototype.join;
	function print() { __p += __j.call(arguments, '') }
	with (obj) {
	
	 if (appointments.length == 0) { ;
	__p += '\n	<div class="no_transList"><i class="noListIcon"></i><em class="vm">暂无记录</em></div>\n';
	 }else{ ;
	__p += '\n';
	 for (var i = 0; i < appointments.length; i++) { ;
	__p += '\n<div class="well clearfix" >\n	<div class="media fl">\n		<div class="span fl">\n			';
	 if(appointments[i].status == 0) { ;
	__p += '\n				<span class="btn btn-primary">待审核</span>\n			';
	 }else if(appointments[i].status == 1) { ;
	__p += '\n				<span class="btn btn-green">待受理</span>\n			';
	 }else if(appointments[i].status == 2) { ;
	__p += '\n				<span class="btn btn-red">已受理</span>\n			';
	 }else if(appointments[i].status == 3) { ;
	__p += '\n				';
	 if(appointments[i].statusDesc) { ;
	__p += '\n				<span class="btn btn-gray btn-lines">已关闭\n					<span class="f12 db">(' +
	((__t = ( appointments[i].statusDesc )) == null ? '' : __t) +
	')</span>\n				</span>\n				';
	 }else{ ;
	__p += '\n					<span class="btn btn-gray">已关闭</span>\n				';
	 } ;
	__p += '\n			';
	 }else if(appointments[i].status == 4) { ;
	__p += '\n				<span class="btn btn-orange">待付款</span>\n			';
	 }else if(appointments[i].status == 5) { ;
	__p += '\n				<span class="btn btn-gray">已取消</span>\n			';
	 }else if(appointments[i].status == 6) { ;
	__p += '\n				<span class="btn btn-gray">已退款</span>\n			';
	 } ;
	__p += '\n		</div>\n		<div class="media-body g3 well_body">\n			<p>\n				<span>' +
	((__t = ( appointments[i].param.name )) == null ? '' : __t) +
	'</span>\n				<span>' +
	((__t = ( appointments[i].param.cityName )) == null ? '' : __t) +
	'</span><span>' +
	((__t = ( appointments[i].param.mobile )) == null ? '' : __t) +
	'</span>\n				<span>' +
	((__t = ( appointments[i].param.courseTypeName )) == null ? '' : __t) +
	'</span><span>' +
	((__t = ( appointments[i].param.score )) == null ? '' : __t) +
	'</span>\n				';
	 if(appointments[i].appointmentType == 0) { ;
	__p += '\n					<span>线上服务</span>\n				';
	 }else if(appointments[i].appointmentType == 1) { ;
	__p += '\n					<span>面对面服务</span>\n				';
	 } ;
	__p += '\n			</p>\n			<p>\n				' +
	((__t = ( appointments[i].content )) == null ? '' : __t) +
	'\n			</p>\n		</div>\n	</div>\n	';
	 if(appointments[i].status == 4) { ;
	__p += '\n	<div class="detailInfo fr payRow">\n		<a href="javascript:;" class="btn btn-orange btn-pay db" orderid=' +
	((__t = ( appointments[i].orderId )) == null ? '' : __t) +
	'>支付' +
	((__t = ( appointments[i].price )) == null ? '' : __t) +
	'元</a>\n	';
	 }else{ ;
	__p += '\n	<div class="detailInfo fr">\n	';
	 } ;
	__p += '\n		<span class="moment">' +
	((__t = ( appointments[i].createTime )) == null ? '' : __t) +
	'</span>\n	</div>\n</div>\n';
	 }} ;
	
	
	}
	return __p
	}

/***/ },

/***/ 411:
/***/ function(module, exports) {

	module.exports = function (obj) {
	obj || (obj = {});
	var __t, __p = '';
	with (obj) {
	__p += '<div class="modalCntWrap payModal g9">\n <h3 class="clearfix"><a href="javascript:;" class="icons btn-close fr"></a><span class="fl">支付</span></h3>\n <form class="modalSubCnt tc" id="payForm" onsubmit="return false;">\n\n <div class="row">\n   <em class="vm f14">支付金额：</em><span class="vm orange f18">' +
	((__t = ( price )) == null ? '' : __t) +
	'元</span>\n </div>\n <div class="row">\n    <label>\n    <input type="radio" name="channel" value="alipay_pc_direct" checked>\n    <i class="payIcon zhifubao"></i>\n    <em>支付宝 支付</em>\n    </label>\n  </div>\n\n <div class="footerCnt">\n     <p id="errTxt" class="errTxt"></p>\n     <div class="row btnRow">\n       <button type="submit" class="btn btn-positive btn-form" id="payBtn">\n       		<em class="subTxt">支付</em></button>\n     </div>\n </div>\n\n</form>\n</div>';
	
	}
	return __p
	}

/***/ }

});
//# sourceMappingURL=user.js.map