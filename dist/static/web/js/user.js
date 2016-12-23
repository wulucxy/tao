webpackJsonp([50],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	/* 建议这里都引入 */
	__webpack_require__(19);
	__webpack_require__(447);
	var $ = window.$ || __webpack_require__(41);
	
	//工具类方法
	var util = __webpack_require__(42);
	
	//公共方法
	var common = __webpack_require__(43);
	
	
	//自定义功能写下面
	var tabs = __webpack_require__(128);
	//加载更多模块
	var loadMore = __webpack_require__(248);
	
	
	//历史模块
	var archive = __webpack_require__(180);
	
	//历史模块
	var history = __webpack_require__(455);
	
	//收藏模块
	var collection = __webpack_require__(457);
	
	//历史测试模块
	var test = __webpack_require__(461);
	
	//qa模块
	var qa = __webpack_require__(463);
	
	//qa模块
	var appointment = __webpack_require__(465);
	
	//优惠券模块
	var coupon = __webpack_require__(470);
	
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
		provinceId : provinceId,
		submitFormCallback: archive.subFunc
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
	
	coupon.init({
		url : preServer+provinceId +"/profile/couponListWeb"
	})
	
	
	
	
	
	


/***/ },

/***/ 106:
/***/ function(module, exports, __webpack_require__) {

	var $ = window.$ || __webpack_require__(41);
	var extend =  __webpack_require__(46);
	
	__webpack_require__(107);
	
		function Plugin(t,o){
			this.target=t;
			this.settings=o;
			this.trigger = this.target.find(o.trigger),
			this.ul = this.target.find(".options");
	      	this.lists = this.ul.find("li");
	
			this.init(this.settings);
		}
	
		Plugin.prototype={
			init : function(){
				this.bindEvt();
			},
	
			bindEvt : function(){
				var that = this,o = that.settings;
	
				that.trigger.on("click",function(){
			        if($(this).hasClass('disabled')) return;
			        that.toggle($(this));
		      	});
	
		      	that.ul.on('mouseenter', 'li', function(e) {
			        $(this).addClass('current');
			    });
	
			    that.ul.on('mouseleave', 'li', function(e) {
			        $(this).removeClass('current');
			    });
	
			    that.ul.on('click','li',function(e){
		          var index = $(this).index();
		          if(!$(this).hasClass("disabled")){
		            that.updateTriggerText(index);
		            $(this).siblings().removeClass('current');
		            $(this).addClass('current');
		            that.toggle();
		            o.selectCallback && o.selectCallback($(this),index);
		          }
		      	});
			},
	
			updateTriggerText : function(index){
		      var that = this;
		      if(typeof index=='undefined'){
		        that.trigger.find(".triggerTxt").text("未选择");
		        that.trigger.addClass('disable');
		      }else{
		        that.trigger.find(".triggerTxt").text(that.lists.eq(index).text());
		      }
	
		      that.selectedIndex = index;
		    },
	
			toggle : function(){
		      var that = this;
		      that.trigger.toggleClass('open');
		      if(!that.ul.hasClass("open")){
		      	that.ul.show(50,function(){
		      		that.ul.addClass("open");
		      	});
		      }else{
		      	that.ul.removeClass("open");
		      	setTimeout(function(){
		      		that.ul.hide();
		      	},400)
		      }
		      
		    },
	
		    close : function(){
		      var that = this;
		      that.trigger.removeClass('open');
		      that.ul.removeClass('open');
		    }
		};
		
	
	var beautifySelect = function(target,o) {
		var instance = $.data( $(target), 'beautifySelect' );
		var settings=extend({
			"trigger" : "[data-toggle]"
		},o);
	
		
		$(target).each(function(index) {
			var me = $(this);  
			if ( instance ) {
	          instance.init();
	        }else {
	            instance = $.data( this, 'beautifySelect', new Plugin( me,settings ) );
	        }
		});
		return instance;
	};	
	
	module.exports = beautifySelect;

/***/ },

/***/ 107:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(108);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(38)(content, {});
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

/***/ 108:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(21)();
	// imports
	
	
	// module
	exports.push([module.id, ".beautify-select {\n  position: relative;\n  font-size: 14px;\n}\n.beautify-select.disabled {\n  opacity: 0.5;\n  filter: alpha(opacity:50);\n}\n.beautify-select .trigger {\n  border-radius: 4px;\n  cursor: pointer;\n  width: 100%;\n  padding: 6px 24px 6px 9px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  position: relative;\n  border: 1px solid #e7e7e7;\n  -webkit-transition: all 240ms ease-out;\n          transition: all 240ms ease-out;\n  zoom: 1;\n}\n.beautify-select .trigger.error {\n  border-color: #ec5524;\n}\n.beautify-select .trigger.disabled {\n  color: #ccc;\n}\n.beautify-select .trigger.disabled:hover {\n  color: #ccc;\n  background-color: #fff;\n  cursor: default;\n}\n.beautify-select .options {\n  display: none;\n  position: absolute;\n  top: 30px;\n  left: 0;\n  opacity: 0;\n  filter: alpha(opacity:0);\n  z-index: 50;\n  overflow: auto;\n  max-height: 0;\n  background: #f9f9f9;\n  border-radius: 4px;\n  border-top: 1px solid #e7e7e7;\n  width: 100%;\n  -webkit-transition: max-height 0.3s ease-out, opacity 0.3s ease-out, top 0.3s ease-out, visibility 0.3s ease-out;\n          transition: max-height 0.3s ease-out, opacity 0.3s ease-out, top 0.3s ease-out, visibility 0.3s ease-out;\n}\n.beautify-select .options.open {\n  top: 40px;\n  opacity: 1;\n  filter: alpha(opacity:100);\n  max-height: 150px;\n  _height: 150px;\n}\n.beautify-select .options.overflowing {\n  top: auto;\n  bottom: 30px;\n  -webkit-transition: opacity 0.3s ease-out, bottom 0.3s ease-out;\n          transition: opacity 0.3s ease-out, bottom 0.3s ease-out;\n}\n.beautify-select .options.overflowing.open {\n  top: auto;\n  bottom: 50px;\n  -webkit-transition: opacity 0.3s ease-out, bottom 0.3s ease-out;\n          transition: opacity 0.3s ease-out, bottom 0.3s ease-out;\n}\n.beautify-select .options li {\n  padding: 5px 12px;\n  line-height: 20px;\n  color: #333;\n  cursor: pointer;\n  white-space: nowrap;\n  -webkit-transition: all 150ms ease-out;\n          transition: all 150ms ease-out;\n}\n.beautify-select .options li.current {\n  color: #fff;\n  background-color: #61c0e2;\n}\n", ""]);
	
	// exports


/***/ },

/***/ 180:
/***/ function(module, exports, __webpack_require__) {

	var $ = window.$ || __webpack_require__(41);
	__webpack_require__(59);
	
	//公共方法
	var common = __webpack_require__(43);
	
	var searchSchool = __webpack_require__(181);
	
	var browser = __webpack_require__(50);
	
	var uploader = __webpack_require__(188);
	
	var uploaderFix = __webpack_require__(190);
	
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
			      
			      options.submitFormCallback &&  options.submitFormCallback(target,$("#myInfoForm"))
			     
			      //that.subFunc(target,$("#myInfoForm"));
	
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
	
	
			if(browser.isModernBrower && browser.isIE() != "9"){
				uploader.init();
			}else if(browser.isIE() == "9" || browser.isIE() == "8"){
				uploaderFix.init();
			}
			
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

/***/ 188:
/***/ function(module, exports, __webpack_require__) {

	var $ = window.$ || __webpack_require__(41);
	var extend = __webpack_require__(189);
	
	var provinceId = $("[name=province]").val();
	var browser = __webpack_require__(50);
	
	var uploader = {
		init : function(settings){
			this.settings = settings;
			this.bindEvt();
		},
	
		bindEvt : function(){
			var that = this,o = that.settings;
	
	        if(!$('#picker').length) return;
	
			var uploader = WebUploader.create({
	
	            auto : true,
	            //runtimeOrder : "flash",
	            // swf文件路径
	            swf: 'http://www.tzhiyuan.net/data/upload/swfupload.swf',
	
	            // 文件接收服务端。
	            server: preServer+provinceId+"/attach/uploadAttach",
	            chunked: true,
	            // 选择文件的按钮。可选。
	            // 内部根据当前运行是创建，可能是input元素，也可能是flash.
	
	            pick: {
	                id: '#picker',
	                innerHTML: '编辑图片'
	            },
	
	            // 不压缩image, 默认如果是jpeg，文件上传前会压缩一把再上传！
	            resize: false,
	            // 只允许选择图片文件。
	            accept: {
	                title: 'Images',
	                extensions: 'gif,jpg,jpeg,bmp,png',
	                mimeTypes: 'image/*'
	            },
	            formData: {
	                avatar: ""
	            },
	            fileVal : "avatar"
	        });
	
	
	        uploader.on("beforeFileQueued",function(file){
	            //alert("beforeFileQueued: "+file);
	        })
	
	        uploader.on("fileQueued",function(file){
	            //alert("fileQueued "+file);
	        })
	        
	
	        uploader.on( 'uploadProgress', function( file,percentage) {
	            that.loadingStart();
	        });
	
	        // 文件上传成功，给item添加成功class, 用样式标记上传成功。
	        uploader.on( 'uploadSuccess', function( file,response) {
	           that.setAvatar(file,response);
	    
	        });
	
	        uploader.on( 'uploadError', function( file,reason) {
	            console.log(reason);
	            //alert(reason);
	        });
	
	        // 完成上传完了，成功或者失败，先删除进度条。
	        uploader.on( 'uploadComplete', function( file ) {
	            that.loadingStop();
	        });
	
	        uploader.on('error', function(error){
	            //alert("error event: "+error);
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

/***/ 189:
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

/***/ 190:
/***/ function(module, exports, __webpack_require__) {

	var $ = window.$ || __webpack_require__(41);
	var extend = __webpack_require__(189);
	
	var provinceId = $("[name=province]").val();
	
	var uploaderFixIE = {
		init : function(settings){
			this.settings = settings;
			this.bindEvt();
		},
	
		bindEvt : function(){
			var that = this,o = that.settings;
	        if(!$('#picker').length) return;
			 var settings = {
	            flash_url : "http://www.tzhiyuan.net/data/upload/swfupload.swf",
	            //flash_url : "http://223.95.73.206/static/swfupload.swf",
	            upload_url: preServer+provinceId+"/attach/uploadAttach", 
	            post_params: {"avatar":""},
	            file_post_name : "avatar",
	            file_size_limit : "4 MB",
	            file_types : "*.jpg;*.gif;*.png;*.jpeg;*.bmp",
	            file_types_description : "img",
	            custom_settings : {
	                cancelButtonId : "btnCancel"
	            },
	            debug: false,
	            use_query_string : true,
	            // Button settings
	            button_image_url: "http://wacai-file.b0.upaiyun.com/assets/img/editAvatar.png",
	            button_width: "82",
	            button_height: "21",
	            button_placeholder_id: "spanButtonPlaceHolder",
	            button_action:SWFUpload.BUTTON_ACTION.SELECT_FILE,
	
	            file_queued_handler : fileQueued,
	            file_queue_error_handler : fileQueueError,
	            file_dialog_complete_handler : fileDialogComplete,
	            upload_error_handler : uploadError,
	            upload_success_handler : uploadSuccess
	
	        };
	        swfu = new SWFUpload(settings);
	
	        function froward(file,serveData){
	            that.setAvatar(file,serveData);   
		    }
	
		    window.froward = froward;
	
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
	
	module.exports = uploaderFixIE;

/***/ },

/***/ 197:
/***/ function(module, exports) {

	module.exports = function (obj) {
	obj || (obj = {});
	var __t, __p = '', __j = Array.prototype.join;
	function print() { __p += __j.call(arguments, '') }
	with (obj) {
	__p += '<div class="modalCntWrap taoModal g9 modalForm payModal">\n <h3 class="clearfix">\n  <a href="javascript:;" class="icons btn-close fr"></a>\n  <span class="fl">支付</span>\n</h3>\n <form class="modalSubCnt" id="payForm" onsubmit="return false;">\n\n<div class="patWrap">\n  <div class="payContent tc">\n      <div class="f20 mb10">\n        <em class="vm">支付金额：</em>\n        <span class="orange f28 vm">' +
	((__t = ( price )) == null ? '' : __t) +
	'元</span>\n      </div>\n\n      <div class="row">\n        <label>\n          <input type="radio" name="channel" value="alipay_pc_direct" checked>\n          <i class="payIcon zhifubao"></i>\n          <em>支付宝</em>\n        </label>\n      </div>\n\n      <div class="couponSelectWrap row">\n        <div class="selectWrap beautify-select" id="couponSelect">\n         <div class="trigger usn" data-toggle>\n          <span class="triggerTxt">使用优惠券</span>\n          <em class="caret"></em>\n         </div>\n         <ul class="options" id="countryList">\n              ';
	 for (var i = 0; i < items.length; i++) { ;
	__p += '\n                <li code="' +
	((__t = ( items[i].coupinId )) == null ? '' : __t) +
	'" name="' +
	((__t = ( items[i].title )) == null ? '' : __t) +
	'">使用' +
	((__t = ( items[i].discount )) == null ? '' : __t) +
	'元优惠券</li>\n              ';
	 } ;
	__p += '\n              <li id="" name="">不使用优惠券</li>\n         </ul>\n        </div>\n      </div>\n  </div>\n\n   <div class="footerCnt">\n       <p id="errTxt" class="errTxt"></p>\n       <div class="row btnRow">\n         <button type="submit" class="btn btn-primary btn-block" id="payBtn">\n         		<em class="subTxt">确定支付</em></button>\n       </div>\n   </div>\n </div>\n\n</form>\n</div>';
	
	}
	return __p
	}

/***/ },

/***/ 198:
/***/ function(module, exports, __webpack_require__) {

	var $ = window.$ || __webpack_require__(41);
	var extend =  __webpack_require__(46);
	var ping = __webpack_require__(199);
	
	var pay = {
		subPay : function(btn, o){
			var that = this;
	
			var options=extend({
				channel: 'alipay_pc_direct',
				provinceId: '330000',
				planId: '',
				orderId: '',
				type: 1,
				couponCode: ''
			},o);
	
			this.options = options;
	
			if(btn.hasClass("disabled")) return;
			btn.addClass("disabled");
	
			var _data = {
				channel: options.channel,
				provinceId: options.provinceId,
				orderId: options.orderId,
				type: options.type,
				couponCode: options.couponCode
			};
	
			$.ajax({
				url : preServer + options.provinceId + "/pay",
				type : "post",
				contentType: "application/json",
	        	data : JSON.stringify(options),
	        	success : function(res){
	
	        		if(typeof res == "string"){
	        			var res = $.parseJSON(res);
	        		}
	
	        		if(res.code !=1){
	        			btn.removeClass("disabled");
	        			warn(res.msg);
	        			return;
	        		}else if(res.code ==1 && typeof res.result == 'undefined'){
	        			// 此时不需要请求ping++
	        			warn('支付成功', function(){
	        				window.location.href = '/user';
	        				return false;
	        			});
	        		}else{
		        		var charge = res.result;
		        		if(/alipay/.test(options.channel)){
		        			that.requestAlipay(btn,charge);
		        		}else{
		        			that.requestCoupon(btn,charge);
		        		}
		        	}
	
	        	},
	        	error : function(err){
	        		btn.removeClass("disabled");
	        		console.log(err);
	        	}
			});
		},
	
		requestAlipay : function(btn,charge){
			var that = this;
			ping.createPayment(charge, function(result, err){
				if(err){
					warn(err.msg);
					btn.removeClass("disabled");
				}else{
					console.log(result);
					window.location.href = '/user';
				}
			});
		},
	
		requestCoupon : function(btn,res){
			var that = this;
			warn("恭喜您已成功下单，稍后跳转结果页",function(){
				window.location = "/box/plan/result?planId="+that.options.planId;
				btn.removeClass("disabled");
			});
		}
	}
	
	
	module.exports = pay;

/***/ },

/***/ 447:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(448);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(38)(content, {});
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

/***/ 448:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(21)();
	// imports
	
	
	// module
	exports.push([module.id, ".g7 {\n  color: #c7c7c7;\n}\n.appointments .purple {\n  color: #7ca6f2;\n}\n.appointments .gray {\n  color: #818a8d;\n}\n.appointments .green {\n  color: #63bd60;\n}\n.appointments .darkgreen {\n  color: #65c0e0;\n}\n.appointments .red {\n  color: #eb0748;\n}\n.appointments .orange {\n  color: #f8481f;\n}\n.appointments .statusRow {\n  font-size: 22px;\n}\n.appointments .detailInfo.payRow {\n  margin-top: 16px;\n}\n.appointments h3 {\n  font-weight: normal;\n  font-size: 24px;\n  color: #333;\n}\n.appointments h3 .name {\n  display: inline-block;\n  margin-right: 24px;\n}\n.appointments .well-bd {\n  line-height: 1.6;\n  margin-top: 10px;\n}\n.appointments .well-ft {\n  margin-top: 64px;\n}\n.appointments .price {\n  color: #f8481f;\n  font-size: 22px;\n}\n.orange {\n  color: #f4b64f;\n}\nul li {\n  list-style-type: none;\n}\n.f56 {\n  font-size: 56px;\n}\n.mainContainer {\n  margin-bottom: 36px;\n}\n.m-sideNav {\n  background-color: #ddd;\n  padding-top: 20px;\n}\n.avatarWrap .imgWrap {\n  display: inline-block;\n  width: 148px;\n  height: 148px;\n}\n.avatarWrap .imgWrap img {\n  width: 100%;\n  height: 100%;\n}\n.userInfoList {\n  margin-top: 20px;\n  font-size: 16px;\n  overflow: hidden;\n}\n.userInfoList a {\n  color: #fff;\n  display: block;\n}\n.blue {\n  color: #59afec;\n}\n.userInfoList li {\n  text-align: center;\n  line-height: 40px;\n  border-bottom: 1px solid #fff;\n  background-color: #606060;\n}\n.userInfoList li:hover,\n.userInfoList li.current {\n  background-color: #59afec;\n}\n.userInfoList li.last {\n  border-bottom: none;\n}\n.kefu {\n  margin-top: 180px;\n  font-size: 14px;\n  color: #333;\n  line-height: 2;\n  padding: 0 0 16px 16px;\n}\n.contentWrap .topWell {\n  color: #59afec;\n  font-size: 15px;\n  background-color: #fff;\n  padding-left: 16px;\n  line-height: 36px;\n  margin-bottom: 10px;\n}\n.contentWrap .topWell .square {\n  width: 10px;\n  height: 10px;\n  display: inline-block;\n  background-color: #59afec;\n  margin-right: 8px;\n}\n.contentInner .content {\n  background-color: #fff;\n  border: 1px solid #e5e5e5;\n  padding: 30px 24px;\n}\n.row label + .col2 {\n  width: 374px;\n}\n.contentInner {\n  display: none;\n}\n.myInfo {\n  display: block;\n}\n.wellWrapper .well {\n  background-color: #f9f9f9;\n  border: 1px solid #dadada;\n  padding: 15px;\n  font-size: 14px;\n  color: #333;\n  line-height: 20px;\n  margin-bottom: 30px;\n}\n#historyWrapper .well .media {\n  margin-top: 8px;\n  min-width: 480px;\n}\n#historyWrapper .well .media .well_body {\n  min-width: 280px;\n}\n.well .media .fl {\n  margin-right: 16px;\n}\n.well .media .fl .btn {\n  width: 108px;\n  padding: 9px 0;\n}\n.well .media-body .field {\n  display: inline-block;\n  margin-right: 30px;\n}\n.detailInfo .btn {\n  padding-top: 5px;\n  padding-bottom: 5px;\n  margin-top: 7px;\n}\n.detailInfo .detailTxt {\n  color: #59afec;\n  margin-top: 4px;\n  display: block;\n  text-align: center;\n}\n.badgeRow {\n  margin-bottom: 10px;\n}\n.badgeRow .badge {\n  font-size: 12px;\n  line-height: 18px;\n  border-radius: 10px;\n  text-align: center;\n  width: 36px;\n  color: #fff;\n  margin-left: 5px;\n}\n.badge.red {\n  background-color: #eb0748;\n}\n.badge.green {\n  background-color: #5aa403;\n}\n.badgeRow .badgetitle {\n  display: inline-block;\n  color: #333;\n  font-size: 18px;\n  margin-right: 8px;\n}\n.myInfo .errInfo {\n  padding-left: 90px;\n}\n.schoolList li {\n  padding: 16px 14px;\n  background-color: #f9f9f9;\n  border: 1px solid #e2e2e2;\n  margin-bottom: 10px;\n}\n.schoolList .detail {\n  font-size: 14px;\n  color: #555;\n  line-height: 1.5;\n}\n.schoolList .detail .field {\n  display: inline-block;\n  margin-right: 20px;\n  color: #f4b64f;\n}\n.schoolList .btn {\n  margin-top: 6px;\n}\n.majorList li {\n  margin-bottom: 20px;\n}\n.majorList .bs {\n  font-size: 16px;\n  color: #333;\n  line-height: 36px;\n  padding-left: 10px;\n}\n.bg-gf {\n  background-color: #f1f1f1;\n}\n.majorList .btnsRow .btn {\n  min-width: 110px;\n  font-size: 14px;\n  border-radius: 0;\n  margin-right: 20px;\n  margin-bottom: 10px;\n}\n.infoList li {\n  margin-bottom: 20px;\n  border-bottom: 1px solid #e2e2e2;\n  padding-bottom: 20px;\n}\n.detailCnt {\n  font-size: 14px;\n  color: #999;\n  line-height: 1.5;\n  cursor: pointer;\n}\n.detailCnt:hover {\n  color: #666;\n}\n.infoList .media > .fl {\n  margin-right: 14px;\n}\n.infoList .detailTitle {\n  font-size: 18px;\n  color: #333;\n  margin-bottom: 12px;\n}\n.infoList .btn-negative {\n  padding-top: 2px;\n  padding-bottom: 2px;\n}\n.infoList .detailCnt {\n  margin-top: 24px;\n}\n.q-school {\n  margin-bottom: 24px;\n}\n.q-school h3 {\n  font-size: 16px;\n  margin-bottom: 16px;\n}\n.s-faq {\n  font-size: 15px;\n  color: #333;\n  padding: 0 12px;\n  border: 1px solid #e2e2e2;\n  margin-bottom: 20px;\n}\n.s-faq .q,\n.s-faq .a {\n  padding: 16px 0px;\n}\n.s-faq .q {\n  border-bottom: 1px solid #e2e2e2;\n}\n.s-faq .badges {\n  margin-top: 16px;\n}\n.s-faq .badge {\n  display: inline-block;\n  min-width: 72px;\n  font-size: 14px;\n  color: #fff;\n  text-align: center;\n  line-height: 24px;\n  border-radius: 12px;\n  background-color: #59afec;\n  margin-right: 10px;\n}\n.btn-mid {\n  vertical-align: middle;\n  width: 108px;\n  padding-top: 9px;\n  padding-bottom: 9px;\n}\n.coupon .btn {\n  border-radius: 0;\n  margin-right: 16px;\n}\n.coupon .detailInfo {\n  color: #999;\n  font-size: 14px;\n  float: right;\n  text-align: right;\n  vertical-align: middle;\n  height: 40px;\n}\n.coupon .well .media {\n  margin-top: 0;\n}\n.coupon .well.disabled {\n  color: #999;\n}\n.coupon-type {\n  font-size: 20px;\n}\n.vm-wrapper {\n  width: 99%;\n  vertical-align: middle;\n}\n.avatarWrap .thumbnail {\n  width: 84px;\n  height: 84px;\n  border: 1px solid #dadada;\n  cursor: pointer;\n}\n.avatarWrap .thumbnail .info {\n  position: absolute;\n  height: 24px;\n  bottom: 0px;\n  left: 0;\n  right: 0;\n  color: #fff;\n  text-align: center;\n  background: #999;\n  background-color: rgba(0, 0, 0, 0.3);\n}\n.avatarWrap .thumbnail img.responsive {\n  width: 100%;\n  height: 100%;\n}\n.contentInner .no_transList {\n  padding: 16px 14px;\n  background-color: #f9f9f9;\n  border: 1px solid #e2e2e2;\n  margin-bottom: 10px;\n}\n.favorInfoList li {\n  border-bottom: 1px solid #e6e4e4;\n  padding-bottom: 14px;\n  padding-top: 14px;\n}\n.favorInfoList li .imgWrap {\n  display: inline-block;\n  width: 130px;\n  height: 130px;\n  margin-right: 10px;\n}\n.favorInfoList .detailTitle {\n  color: #333;\n  margin-bottom: 8px;\n  font-size: 18px;\n  display: inline-block;\n  overflow: hidden;\n  height: auto;\n  max-height: 50px;\n}\n.payModal .modalSubCnt {\n  padding-top: 40px;\n  font-size: 14px;\n  color: #333;\n}\n.payModal .modalSubCnt .row {\n  margin-bottom: 18px;\n}\n.payModal .modalSubCnt .payIcon {\n  margin-left: 10px;\n}\n#sSchoolForm .schoolLists {\n  height: 310px\\9;\n}\n.avatarRow {\n  margin-bottom: 20px;\n}\n.pickerTxt {\n  display: none;\n}\n.webuploader-container {\n  position: relative;\n}\n.webuploader-element-invisible {\n  position: absolute !important;\n  clip: rect(1px 1px 1px 1px);\n  /* IE6, IE7 */\n  clip: rect(1px, 1px, 1px, 1px);\n}\n.webuploader-pick {\n  position: relative;\n  display: inline-block;\n  cursor: pointer;\n  background: #999;\n  padding: 0 4px;\n  line-height: 24px;\n  color: #fff;\n  text-align: center;\n  border-radius: 3px;\n  overflow: hidden;\n  height: 24px;\n  width: 100%;\n}\n.webuploader-pick-hover {\n  background: #666;\n}\n.webuploader-pick-disable {\n  opacity: 0.6;\n  pointer-events: none;\n}\n.coupon .well {\n  background: none;\n  border: none;\n  width: 680px;\n}\n.coupon .well .col1 {\n  width: auto;\n  margin-right: 160px;\n  position: relative;\n  padding-left: 10px;\n  background-color: #dce7f0;\n}\n.coupon .well .col1:after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  width: 10px;\n  height: 100%;\n  left: -10px;\n  background: url(" + __webpack_require__(449) + ") left top no-repeat;\n}\n.coupon .well .col2 {\n  float: right;\n  position: relative;\n  width: 160px;\n  text-align: center;\n  height: 242px;\n  background-color: #8ec5ec;\n}\n.coupon .well .col2:after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  width: 10px;\n  height: 100%;\n  right: -10px;\n  background: url(" + __webpack_require__(450) + ") right top no-repeat;\n}\n.coupon .well .col2 .coupon_text {\n  padding-top: 44px;\n  color: #fff;\n  margin: 0 auto;\n  line-height: 1.5;\n  font-size: 36px;\n  width: 1em;\n}\n.coupon .well.disabled .col2 {\n  background: #bdbdbd;\n}\n.coupon .well.disabled .col2 .coupon_text {\n  color: #d3d3d3;\n}\n.coupon .well.disabled .col2:after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  width: 10px;\n  height: 100%;\n  right: -10px;\n  background: url(" + __webpack_require__(451) + ") right top no-repeat;\n}\n.coupon .well.disabled .col1 {\n  background: #ebebeb;\n}\n.coupon .well.disabled .col1 .coupon_title_primary {\n  color: #d6d6d6;\n}\n.coupon .well.disabled .col1 .coupon_title_second {\n  color: #bdbdbd;\n}\n.coupon .well.disabled .col1 .coupon_count {\n  color: #d3d3d3;\n}\n.coupon .well.disabled .col1 .coupon_count .coupon-deno {\n  color: #d3d3d3;\n}\n.coupon .well.disabled .col1:after {\n  background: url(" + __webpack_require__(452) + ") left top no-repeat;\n}\n.coupon .well.disabled .coupon_inner:before {\n  content: \"\";\n  position: absolute;\n  width: 112px;\n  height: 112px;\n  right: 20px;\n  top: 4px;\n  background: url(" + __webpack_require__(453) + ") left top no-repeat;\n}\n.coupon .well.disabled.outdated .coupon_inner:before {\n  background: url(" + __webpack_require__(454) + ") left top no-repeat;\n}\n.coupon .coupon_title_primary {\n  color: #59afec;\n  font-weight: normal;\n}\n.coupon .coupon_title_second {\n  float: right;\n  color: #333;\n  font-size: 18px;\n  font-weight: normal;\n}\n.coupon .coupon_count {\n  font-size: 24px;\n  color: #59afec;\n  margin: 36px 0 44px;\n}\n.coupon .coupon_inner {\n  padding: 20px 25px 0;\n  height: 242px;\n  position: relative;\n}\n.coupon .coupon_desc {\n  font-size: 14px;\n  color: #999;\n  max-width: 332px;\n  line-height: 1.5;\n  position: absolute;\n  bottom: 20px;\n  left: 25px;\n}\n.coupon .coupon-deno {\n  font-size: 56px;\n  color: #3193d9;\n  display: inline-block;\n  line-height: 1;\n}\n", ""]);
	
	// exports


/***/ },

/***/ 449:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/web/img/coupon1.png"

/***/ },

/***/ 450:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/web/img/coupon2.png"

/***/ },

/***/ 451:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/web/img/coupon4.png"

/***/ },

/***/ 452:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/web/img/coupon3.png"

/***/ },

/***/ 453:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/web/img/used.png"

/***/ },

/***/ 454:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/web/img/outdated.png"

/***/ },

/***/ 455:
/***/ function(module, exports, __webpack_require__) {

	var $ = window.$ || __webpack_require__(41);
	var extend =  __webpack_require__(46);
	
	var tmpl = __webpack_require__(456);
	
	//公共方法
	var util = __webpack_require__(42);
	
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

/***/ 456:
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

/***/ 457:
/***/ function(module, exports, __webpack_require__) {

	var $ = window.$ || __webpack_require__(41);
	var tabs = __webpack_require__(128);
	
	//公共方法
	var util = __webpack_require__(42);
	
	//本地数据库
	var localData = __webpack_require__(153);
	
	var tmpl_college = __webpack_require__(458);
	var tmpl_major = __webpack_require__(459);
	var tmpl_info = __webpack_require__(460);
	
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

/***/ 458:
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

/***/ 459:
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

/***/ 460:
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

/***/ 461:
/***/ function(module, exports, __webpack_require__) {

	var $ = window.$ || __webpack_require__(41);
	var extend =  __webpack_require__(46);
	
	var tmpl = __webpack_require__(462);
	
	//公共方法
	var util = __webpack_require__(42);
	
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

/***/ 462:
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

/***/ 463:
/***/ function(module, exports, __webpack_require__) {

	var $ = window.$ || __webpack_require__(41);
	var extend =  __webpack_require__(46);
	
	var tmpl = __webpack_require__(464);
	
	//公共方法
	var util = __webpack_require__(42);
	
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

/***/ 464:
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

/***/ 465:
/***/ function(module, exports, __webpack_require__) {

	var $ = window.$ || __webpack_require__(41);
	var extend =  __webpack_require__(46);
	
	var tmpl = __webpack_require__(466);
	
	//公共方法
	var util = __webpack_require__(42);
	
	
	var payModal = __webpack_require__(467);
	//本地数据库
	var localData = __webpack_require__(153);
	
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
	                    ele.param = extend(ele,{
	                    	cityName : localData.getCityName(ele.city)
	                    	// courseTypeName : localData.getCourseTypeName(ele.param.courseType)
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
	
				if(btn.hasClass('disabled')) return;
				btn.addClass('disabled');
	
				var orderId = btn.attr("orderid");
				that.orderId = orderId;
	
				var payList = $.map(res.result,function(ele){
					if(ele.orderId == orderId){
						return ele;
					}
				});
	
				payModal.init(btn, {
					provinceId: provinceId,
					price: btn.attr('price'),
					orderId:  btn.attr('orderid'),
					appointmentType: btn.attr('appointmenttype')
				});
			});
		}
	};

/***/ },

/***/ 466:
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
	__p += '\n<div class="well clearfix appointments" >\n	<div class="clearfix well-hd">\n		<h3 class="fl">\n			<span class="name">\n				' +
	((__t = ( appointments[i].name )) == null ? '' : __t) +
	'	\n			</span>\n			<span>' +
	((__t = ( appointments[i].mobile )) == null ? '' : __t) +
	'</span>\n		</h3>\n		<span class="fr f16 g7">' +
	((__t = ( appointments[i].createTime )) == null ? '' : __t) +
	'</span>\n	</div>	\n	<div class="well-bd g6 f20">\n		<p>' +
	((__t = ( appointments[i].cityName )) == null ? '' : __t) +
	'</p>\n		<p>' +
	((__t = ( appointments[i].appointmentTypeName )) == null ? '' : __t) +
	'\n			';
	 if(appointments[i].remarks) { ;
	__p += '\n				（' +
	((__t = ( appointments[i].remarks )) == null ? '' : __t) +
	'）\n			';
	 } ;
	__p += '	\n		</p>\n	</div>\n	<div class="well-ft clearfix">\n		<div class="statusRow clearfix">\n			<div class="fl">\n				';
	 if(appointments[i].status == 0) { ;
	__p += '\n					<span class="purple">待审核</span>\n				';
	 }else if(appointments[i].status == 1) { ;
	__p += '\n					<span class="green">待受理</span>\n				';
	 }else if(appointments[i].status == 2) { ;
	__p += '\n					<span class="darkgreen">已受理</span>\n				';
	 }else if(appointments[i].status == 3) { ;
	__p += '\n					';
	 if(appointments[i].statusDesc) { ;
	__p += '\n					<span class="gray">已关闭\n						<span class="f12 db">(' +
	((__t = ( appointments[i].statusDesc )) == null ? '' : __t) +
	')</span>\n					</span>\n					';
	 }else{ ;
	__p += '\n						<span class="gray">已关闭</span>\n					';
	 } ;
	__p += '\n				';
	 }else if(appointments[i].status == 4) { ;
	__p += '\n					<span class="orange">待支付</span>\n				';
	 }else if(appointments[i].status == 5) { ;
	__p += '\n					<span class="gray">已取消</span>\n				';
	 }else if(appointments[i].status == 6) { ;
	__p += '\n					<span class="gray">已退款</span>\n				';
	 } ;
	__p += '\n			</div>\n			<div class="fr price">\n				¥ ' +
	((__t = ( appointments[i].price )) == null ? '' : __t) +
	'元\n			</div>\n		</div>\n		';
	 if(appointments[i].status == 4) { ;
	__p += '\n			<div class="detailInfo payRow tc">\n				<a href="javascript:;" class="btn btn-positive btn-pay btn-form" orderid="' +
	((__t = ( appointments[i].orderId )) == null ? '' : __t) +
	'"\n					price="' +
	((__t = ( appointments[i].price )) == null ? '' : __t) +
	'"\n					appointmenttype="' +
	((__t = ( appointments[i].appointmentType )) == null ? '' : __t) +
	'"\n					face=' +
	((__t = ( appointments[i].isFace )) == null ? '' : __t) +
	'\n				>去支付</a>\n			</div>\n		';
	 } ;
	__p += '\n	</div>\n\n</div>\n';
	 }} ;
	
	
	}
	return __p
	}

/***/ },

/***/ 467:
/***/ function(module, exports, __webpack_require__) {

	var $ = window.$ || __webpack_require__(41);
	__webpack_require__(468);
	
	//selct组件
	var beautifySelect = __webpack_require__(106);
	
	//selct组件
	var pay = __webpack_require__(198);
	
	var tmpl_pay = __webpack_require__(197);
	
	var payModal = {
		init: function(btn, options){
			this.options = options;
			this.btn = btn;
			this.couponState = {};
			var that = this;
	
			this.requestCoupon();
		},
	
		requestCoupon: function(){
			var that = this;
			var _data = {
				page: 1,
				couponStatus: 0
			};
			$.ajax({
				url : preServer+that.options.provinceId+"/profile/couponListWeb",
				contentType: "application/json",
				type : "post",
			    data : JSON.stringify(_data),
			    success : function(res){
			      if(typeof res == "string"){
			        var res = $.parseJSON(res);
			      }
	
			      if(res.code==1){
			      	that.box(that.calCoupon(res.result));
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
	
		calCoupon: function(data){
			var that = this;
			var appointmentType = that.btn.attr('appointmenttype');
			var arr = data.couponList || [];
			var face = that.btn.attr('face');
			var newArr = $.each(arr, function(index, ele){
				// face：1代表线上，2代表线下
				ele.discount = face == 1 ? ele.onlineValue : ele.lineValue;
			})
			return newArr;
		},
	
		box: function(arr){
			var that = this;
			modalBox(that.btn,{
				html:tmpl_pay({
					items: arr,
					price: that.options.price,
					appointmentType:that.options.appointmentType
				}),
				klass : 'w540 shadow',
		        closeByOverlay : false,
		        completeCallback : function(){
	
		        	beautifySelect($("#couponSelect"),{
						selectCallback : function(li, index){
							console.log(li);
							that.couponState.couponCode = li.attr('code');
						}
					});	
	
		        	$("#payBtn").on("click",function(e){
						e.preventDefault();
						var target = $(this);
						var channel = $("[name=channel]:checked").val();
						
						pay.subPay(target,{
							provinceId: that.options.provinceId,
							channel: channel,
							planId: that.options.planId,
							orderId: that.options.orderId,
							type: !!that.couponState.couponCode ? 2 : 1,
							couponCode: !!that.couponState.couponCode ? that.couponState.couponCode : ''
						});
						
					});
		        },
		        closeCallback: function(){
		        	that.btn.removeClass('disabled');
		        }
			});
		}
	}
	
	module.exports = payModal;


/***/ },

/***/ 468:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(469);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(38)(content, {});
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

/***/ 469:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(21)();
	// imports
	
	
	// module
	exports.push([module.id, ".payModal {\n  overflow: visible;\n}\n.couponSelectWrap {\n  width: 200px;\n  margin: 24px auto 20px;\n  position: relative;\n}\n.couponSelectWrap .beautify-select .trigger {\n  border-color: #a0a0a0;\n  background-color: #f3f3f3;\n  text-align: left;\n}\n.beautify-select .trigger .caret {\n  border-width: 5px;\n  position: absolute;\n  top: 15px;\n  right: 9px;\n}\n::-webkit-scrollbar {\n  -webkit-appearance: none;\n  width: 7px;\n}\n::-webkit-scrollbar-thumb {\n  border-radius: 4px;\n  background-color: rgba(0, 0, 0, 0.5);\n  -webkit-box-shadow: 0 0 1px rgba(255, 255, 255, 0.5);\n}\n", ""]);
	
	// exports


/***/ },

/***/ 470:
/***/ function(module, exports, __webpack_require__) {

	var $ = window.$ || __webpack_require__(41);
	var extend =  __webpack_require__(46);
	
	var tmpl = __webpack_require__(471);
	
	//公共方法
	var util = __webpack_require__(42);
	
	var provinceId = $("[name=province]").val();
	
	module.exports = {
		init : function(o){
	    	//默认分页开始
			this.pager = 1;
			this.capacity = 10;
	    	this.tmpl = tmpl;
	    	this.options = extend({
	
	    	},o);
	
	    	this.target = $(o.ele);
	
			this.bindEvt();
			this.fetch();
		},
	
		fetch : function(btn){
			var that = this,o = that.options,$this = that.target;
	
			//如果是点击加载更多，页码++，否则重置为1
	        if(btn && $(btn).hasClass("btn-loading")){
	            that.pager++;
	        }else{
	            that.pager = 1;
	        }
	
			var parmData = {
				page: that.pager,
				capacity: that.capacity
			};
	
			$.ajax({
				url : o.url,
				type : 'post',
				data: JSON.stringify(parmData),
				contentType: "application/json",
				success : function(res){
					if(typeof(res) == 'string'){
	                   var res = $.parseJSON(res);
	                }
	
	                var couponList = res.result.couponList;
	                
	                 $.each(couponList,function(idx,ele){
	                    ele.availableTime = util.buildDate(ele.activeTime,"yyyy-MM-dd");
	                });
	
	                that.loadList(res.result,that.pager);
				}
			});
		},
	
		loadList : function(data,pager){
			var that = this,o = that.options;
			var _html = that.tmpl(data);
	
			if(pager == 1){
				$("#couponWrapper").empty().html(_html);
			}else{
				$("#couponWrapper").append(_html);
			}
	
	
			if(pager == 1 && data.total == 0){
				$(".btn-loading").hide();
			}else{
				$(".btn-loading").show();
				$(".btn-loading").removeClass("loading disabled");
			}
	
			var pageCount = Math.ceil(data.total / that.capacity);
	
			//最后一页
			if(pager >= pageCount){
				$(".btn-loading").addClass("loading-all");
			}else{
	            $(".btn-loading").removeClass("loading-all");
	        }
		},
	
		bindEvt : function(){
			var that = this;
			$(".btn-loading").on("click",function(e){
	    		e.preventDefault();
	    		var btn = $(this).closest(".btn");
	    		if(btn.hasClass("disabled") || btn.hasClass("loading-all")) return;
	    		btn.addClass("disabled loading");
	    		that.fetch(btn);
	    	});
		}
	
	};

/***/ },

/***/ 471:
/***/ function(module, exports) {

	module.exports = function (obj) {
	obj || (obj = {});
	var __t, __p = '', __j = Array.prototype.join;
	function print() { __p += __j.call(arguments, '') }
	with (obj) {
	
	 if (couponList.length == 0) { ;
	__p += '\n	<div class="no_transList"><i class="noListIcon"></i><em class="vm">暂无记录</em></div>\n';
	 }else{ ;
	__p += '\n';
	 for (var i = 0; i < couponList.length; i++) { ;
	__p += '\n';
	 if(couponList[i].status == 0) { ;
	__p += '\n	<div class="well clearfix" >\n';
	 }else if(couponList[i].status == 1) { ;
	__p += '\n	<div class="well clearfix disabled" >\n';
	 }else if(couponList[i].status == 2) { ;
	__p += '\n	<div class="well clearfix disabled outdated" >\n';
	 } ;
	__p += '\n	<div class="col2">\n		<p class="coupon_text">优惠券</p>\n	</div>\n	<div class="col1">\n		<div class="coupon_inner">\n			<h3 class="coupon_title">\n				<span class="coupon_title_primary">' +
	((__t = ( couponList[i].title )) == null ? '' : __t) +
	'</span>\n				<span class="coupon_title_second">有效期至' +
	((__t = ( couponList[i].availableTime )) == null ? '' : __t) +
	'</span>\n			</h3>\n			<div class="coupon_count">\n				¥<em class="coupon-deno">' +
	((__t = ( couponList[i].onlineValue )) == null ? '' : __t) +
	'</em>或<em class="coupon-deno">' +
	((__t = ( couponList[i].lineValue )) == null ? '' : __t) +
	'</em>\n			</div>\n			<p class="coupon_desc">' +
	((__t = ( couponList[i].description )) == null ? '' : __t) +
	'</p>\n		</div>\n	</div>\n	\n</div>\n';
	 }} ;
	
	
	}
	return __p
	}

/***/ }

});
//# sourceMappingURL=user.js.map