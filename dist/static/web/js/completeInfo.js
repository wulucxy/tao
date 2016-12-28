webpackJsonp([16],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	/* 建议这里都引入 */
	__webpack_require__(16);
	__webpack_require__(175);
	var $ = window.$ || __webpack_require__(38);
	
	//工具类方法
	var util = __webpack_require__(39);
	
	//公共方法
	var common = __webpack_require__(40);
	
	/* 具体实现 */
	//历史模块
	var archive = __webpack_require__(177);
	
	//provinceId
	var provinceId = $("[name=province]").val();
	
	//我的资料
	archive.init({
		provinceId : provinceId,
		submitFormCallback: archive.subFunc
	});


/***/ },

/***/ 175:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 177:
/***/ function(module, exports, __webpack_require__) {

	var $ = window.$ || __webpack_require__(38);
	__webpack_require__(56);
	
	//公共方法
	var common = __webpack_require__(40);
	
	var searchSchool = __webpack_require__(178);
	
	var browser = __webpack_require__(47);
	
	var uploader = __webpack_require__(185);
	
	var uploaderFix = __webpack_require__(187);
	
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

/***/ 185:
/***/ function(module, exports, __webpack_require__) {

	var $ = window.$ || __webpack_require__(38);
	var extend = __webpack_require__(186);
	
	var provinceId = $("[name=province]").val();
	var browser = __webpack_require__(47);
	
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

/***/ 186:
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

/***/ 187:
/***/ function(module, exports, __webpack_require__) {

	var $ = window.$ || __webpack_require__(38);
	var extend = __webpack_require__(186);
	
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

/***/ }

});
//# sourceMappingURL=completeInfo.js.map