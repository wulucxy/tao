webpackJsonp([25],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	/* 建议这里都引入 */
	__webpack_require__(14);
	__webpack_require__(199);
	var $ = window.$ || __webpack_require__(36);
	
	//工具类方法
	var util = __webpack_require__(37);
	
	//公共方法
	var common = __webpack_require__(38);
	
	
	//自定义功能写下面
	//切换顶部nav高亮
	common.switchNav(2);
	
	//数据绑定
	var dataSet = __webpack_require__(201);
	
	dataSet.init();

/***/ },

/***/ 199:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(200);
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

/***/ 200:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(16)();
	// imports
	
	
	// module
	exports.push([module.id, ".orange {\n  color: #f4b64f;\n}\n.dbWrapper {\n  margin-top: 12px;\n}\n.db .col1 {\n  width: 590px;\n}\n.db .col2 {\n  width: 300px;\n}\n.formWrap {\n  background-color: #fff;\n  padding: 28px 24px 36px;\n  margin-bottom: 30px;\n}\n.m-nav .btn-default > em {\n  display: inline-block;\n  margin-right: 3px;\n}\n.badgeRow {\n  margin-bottom: 10px;\n}\n.badgeRow .badgetitle {\n  display: inline-block;\n  color: #333;\n  font-size: 18px;\n  margin-right: 8px;\n}\n.majorListWrap {\n  margin-top: 20px;\n}\n.majorListWrap .bg {\n  margin-bottom: 16px;\n}\n.majorListWrap li {\n  margin-bottom: 10px;\n}\n.majorListWrap .majorBtnRow .btn {\n  font-size: 13px;\n  min-width: 108px;\n  padding: 5px 10px;\n  width: auto;\n  margin-right: 20px;\n  margin-bottom: 10px;\n  border-radius: 0;\n}\n.subMajorList {\n  float: left;\n  margin-top: 34px;\n}\n", ""]);
	
	// exports


/***/ },

/***/ 201:
/***/ function(module, exports, __webpack_require__) {

	var $ = window.$ || __webpack_require__(36);
	var extend =  __webpack_require__(41);
	var tmpl = __webpack_require__(202);
	var tmpl_all= __webpack_require__(203);
	
	var provinceId = $("[name=province]").val();
	
	var dataSet = { 
		render : function(){
			var that = this;
			//省列表
	        if(this.state.tagList.length){
	            var tagLis = $.map(that.state.tagList,function(item){
	            	var _val = item.type+":"+item.value;
	                return '<a class="tags" data-action="remove" href="javascript:;" data-value="'+_val+'">'+item.text+'<span class="taoIcon btn-x"></span></a>';
	            });
	
	            var _htmlArr = [];
	            _htmlArr.push('<a href="javascript:;" class="fr btn btn-default" data-action="clear">清空所有</a>');
	            _htmlArr.push('<span class="cat-text fl">已选择：</span>');
	            _htmlArr.push(tagLis.join(""));
	            $(".crumb").html(_htmlArr.join(""));
	        }else{
	        	$(".crumb").html('<span class="cat-text fl">已选择：</span>');
	        }
	
	        if(!$("input[name=city]").length){
	        	var inputList = [];
	        	inputList.push('<input type="hidden" name="bachelor">');
	        	inputList.push('<input type="hidden" name="junior">');
	        	$(".crumb").append(inputList.join(""));
	        }
	
	        var _key ="";
	    	$.each(that.state.tagList,function(idx,item){
	    		$('[name='+item.type+']').val(item.value || "");
	    		_key += $('[name='+item.type+']').val();
	    	});
	    	 
		},
	
	    //点击各个大类触发专业选择
		requestData : function(btn){
			var that = this,o = that.options;
	
	        var categoryId = btn.data("value").split(":")[1];
	
	        var _data = {
				Undergraduate : $("[name=bachelor]").val(),
				speciality : $("[name=junior]").val()
			};
	
			$.ajax({
				url : preServer+provinceId + "/data/major/category/"+categoryId,
				type : "get",
	            contentType: "application/json",
				success : function(res){
					if(typeof res == "string"){
						var res = $.parseJSON(res);
					}
	
	                if(res.code!=1){
	                    warn(res.msg);
	                    return;
	                }
	
	                res.majors = res.result;
	               
					that.loadList(res);
				}
			});
		},
	
		loadList : function(data){
			var that = this,o = that.options;
			var _html = tmpl(data);
	
			$(".majorList").empty().html(_html);
		},
	
	    loadListAll : function(data){
	        var that = this,o = that.options;
	        var _html = tmpl_all(data);
	        $(".majorList").empty().html(_html);
	    },
	
		updateUI : function() {
	       this.render(); 
	    },
	
	    init : function(o){
	    	this.state = {
	            tagList:  []
	        };
	
	        this.options = o;
	
	        //专业数据缓存
	        this.majorDataCache;
	
	        this.bindEvt();
	
	        //首次进来默认加载全部数据
	        this.requestAll();
	    },
	
	    //首次加载请求全部数据
	    //本科：type：1
	    //专科  type：2
	    //默认为空，代表全部
	    requestAll : function(type){
	        var that = this;
	
	        if(typeof that.majorDataCache != "undefined" ){  //已添加缓存
	
	          console.log(that.majorDataCache);
	
	          if(typeof type != "undefined"){
	            that.majorDataCache.majors = that.majorDataCache[type];
	          }
	
	          that.loadListAll(that.majorDataCache);
	          
	          return;
	        }
	
	        $.ajax({
	            url : preServer+provinceId + "/data/major/all",
	            type : "get",
	            contentType: "application/json",
	            success : function(res){
	                if(typeof res == "string"){
	                    var res = $.parseJSON(res);
	                }
	
	                if(res.code!=1){
	                    warn(res.msg);
	                    return;
	                }
	
	                res = res.result;
	
	                //所有专业
	                var majorList = $.map(res.subs,function(ele,idx){
	                    return ele.subs;
	                });
	
	                //本科专业
	                var benMajorList = res.subs[0].subs;
	
	                //本科专业
	                var zMajorList = res.subs[1].subs;
	
	                res.majors = majorList;
	                res["1"] = benMajorList;
	                res["2"] = zMajorList;
	
	                //设置为缓存
	                that.majorDataCache = res;
	                
	                that.loadListAll(res);
	            }
	        });
	    },
	
	    searchMajorReq : function(btn){
	        var that = this;
	        var oInput = $("#majorInput");
	        $.ajax({
	            url : preServer+provinceId + "/data/major/search",
	            type : "post",
	            data : {keyword : oInput.val() },
	            contentType: "application/json",
	            success : function(res){
	                if(typeof res == "string"){
	                    var res = $.parseJSON(res);
	                }
	
	                if(res.code != 1){
	                    warn(res.msg);
	                    btn.removeClass("disabled");
	                    return;
	                }
	
	                res.majors = res.result;
	                that.loadList(res);
	
	            },
	            error : function(err){
	                console.log(err);
	                btn.removeClass("disabled");
	            }
	        });
	
	    },
	
	    bindEvt : function(){
	    	var that = this;
	    	$(document).on("click","[data-action=add]",function(e){
	    		e.preventDefault();
	    		var link = $(e.target);
	    		
	    		var type = link.data("value").split(":")[0],
	    			val =  link.data("value").split(":")[1];
	
	    		if(link.hasClass("current")) return;
	            $("[data-action=add]").removeClass("current");
	
	            $.each(that.state.tagList,function(idx,item){
	                if(type == item.type){
	                    that.state.tagList.splice(idx,1);
	                    return false;
	                }
	            });
	
	    		link.addClass("current");
	            that.state.tagList = [];
				that.state.tagList.push({
					type : type,
					value : val,
					text : link.text()
				});  
	
	            //这边要区分,1：本科，2：专科
	            var majorType;
	            if(val == "" || val == "0"){
	               if(type == "undergraduate" && val == ""){
	                    majorType = 1;
	               }else if(type == "undergraduate" && val == "0"){
	                    majorType = 2;
	               }else if(type == "speciality" && val == ""){
	                    majorType = 2;
	               }else if(type == "speciality" && val == "0"){
	                    majorType = 1;
	               }
	               that.requestAll(majorType);
	            }else{
				   that.requestData(link);
	            }
	
	            that.updateUI();  		
	    	});
	
	    	$(document).on("click","[data-action=clear]",function(e){
	    		e.preventDefault();
	    		$("[data-action=add]").removeClass("current");
				that.state.tagList = [];
				that.updateUI();  		
	    	});
	
	    	$(document).on("click","[data-action=remove]",function(e){
	    		e.preventDefault();
	
	    		var link = $(e.target).closest(".tags");
	    		var type = link.data("value").split(":")[0],
	    			value =  link.data("value").split(":")[1];
				
				 $.each(that.state.tagList,function(idx,item){
	                if(type == item.type && value == item.value){
	                    that.state.tagList.splice(idx,1);
	                    var attr = '[data-value="'+type+':'+value+'"]';
	                    $(attr).removeClass("current");
	                    return false;
	                }
	            });
	
	            that.updateUI(); 
				that.requestAll();  		
	    	});
	
	        $("#sBtn").on("click",function(e){
	            e.preventDefault();
	            var oInput = $("#majorInput"),btn = $(this).closest(".btn");
	            if($.trim(oInput.val()) == ""){
	                warn("请输入专业名称");
	                return;
	            }
	
	            if(btn.hasClass('disabled')) return;
	            btn.addClass("disabled");
	            that.searchMajorReq(btn);
	
	        })
	    }
	};
	
	module.exports = dataSet;

/***/ },

/***/ 202:
/***/ function(module, exports) {

	module.exports = function (obj) {
	obj || (obj = {});
	var __t, __p = '', __j = Array.prototype.join;
	function print() { __p += __j.call(arguments, '') }
	with (obj) {
	
	 if (majors.length == 0) { ;
	__p += '\n	<li class="no_transList"><i class="noListIcon"></i><em class="vm">暂无记录</em></li>\n';
	 }else{ ;
	__p += '	\n';
	 for (var i = 0; i < majors.length; i++) { ;
	__p += '\n<li class="clearfix subMajorList">\n	<div class="majorBtnRow">\n		<a target="_blank" href="/library/major/' +
	((__t = ( majors[i].majorId )) == null ? '' : __t) +
	'" data-id="' +
	((__t = ( majors[i].majorId )) == null ? '' : __t) +
	'" class="btn btn-primary btn-mid">' +
	((__t = ( majors[i].majorName )) == null ? '' : __t) +
	'</a>\n	</div>\n</li>\n';
	 }} ;
	
	
	}
	return __p
	}

/***/ },

/***/ 203:
/***/ function(module, exports) {

	module.exports = function (obj) {
	obj || (obj = {});
	var __t, __p = '', __j = Array.prototype.join;
	function print() { __p += __j.call(arguments, '') }
	with (obj) {
	
	 if (majors.length == 0) { ;
	__p += '\n	<li class="no_transList"><i class="noListIcon"></i><em class="vm">暂无记录</em></li>\n';
	 }else{ ;
	__p += '	\n';
	 for (var i = 0; i < majors.length; i++) { ;
	__p += '\n<li class="clearfix">\n	<div class="bg bg-f1">' +
	((__t = ( majors[i].name )) == null ? '' : __t) +
	'：' +
	((__t = ( majors[i].subs.length )) == null ? '' : __t) +
	'个</div>\n	<div class="majorBtnRow">\n		';
	 for (var j = 0; j < majors[i].subs.length; j++) { ;
	__p += '\n		<a target="_blank" href="/library/major/' +
	((__t = ( majors[i].subs[j].id )) == null ? '' : __t) +
	'" data-id="' +
	((__t = ( majors[i].subs[j].id )) == null ? '' : __t) +
	'" class="btn btn-primary btn-mid">' +
	((__t = ( majors[i].subs[j].name )) == null ? '' : __t) +
	'</a>\n		';
	 } ;
	__p += '\n	</div>\n</li>\n';
	 }} ;
	
	
	}
	return __p
	}

/***/ }

});
//# sourceMappingURL=major.js.map