webpackJsonp([8],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	/* 建议这里都引入 */
	__webpack_require__(16);
	__webpack_require__(139);
	var $ = window.$ || __webpack_require__(38);
	
	//工具类方法
	var util = __webpack_require__(39);
	
	//公共方法
	var common = __webpack_require__(40);
	
	
	//自定义功能写下面
	//切换顶部nav高亮
	common.switchNav(2);
	
	//数据绑定
	var dataSet = __webpack_require__(141);
	
	dataSet.init();

/***/ },

/***/ 139:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(140);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(35)(content, {});
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

/***/ 140:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(18)();
	// imports
	
	
	// module
	exports.push([module.id, ".orange {\n  color: #f4b64f;\n}\n.dbWrapper {\n  margin-top: 12px;\n}\n.db .col1 {\n  width: 590px;\n}\n.db .col2 {\n  width: 300px;\n}\n.formWrap {\n  background-color: #fff;\n  padding: 28px 24px 36px;\n  margin-bottom: 30px;\n}\n.formWrap .s-search {\n  margin-bottom: 20px;\n}\n.formWrap .s-search > div {\n  padding-top: 0;\n}\n.formWrap .s-search .form-control {\n  width: 100%;\n  background-color: #f9f9f9;\n}\n.formWrap .s-search .input-group-btn {\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n.m-nav .btn-default > em {\n  display: inline-block;\n  margin-right: 3px;\n}\n.badgeRow {\n  margin-bottom: 10px;\n}\n.badgeRow .badgetitle {\n  display: inline-block;\n  color: #333;\n  font-size: 18px;\n  margin-right: 8px;\n}\n.schoolList li {\n  padding: 16px 0;\n  border-bottom: 1px solid #e2e2e2;\n  margin-bottom: 10px;\n}\n.schoolList .detail {\n  font-size: 14px;\n  color: #555;\n  line-height: 1.5;\n}\n.schoolList .detail .field {\n  display: inline-block;\n  margin-right: 16px;\n  color: #f4b64f;\n}\n.schoolList .detail .field:last-child {\n  margin-right: 0;\n}\n.schoolList .btn {\n  margin-top: 6px;\n}\n.schoolListWrap {\n  border-top: 1px solid #e2e2e2;\n  margin-top: 24px;\n}\n", ""]);
	
	// exports


/***/ },

/***/ 141:
/***/ function(module, exports, __webpack_require__) {

	var $ = window.$ || __webpack_require__(38);
	var extend =  __webpack_require__(43);
	var tmpl = __webpack_require__(142);
	
	var localData = __webpack_require__(143);
	
	//工具类方法
	var util = __webpack_require__(39);
	
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
	        	inputList.push('<input type="hidden" name="city">');
	        	// inputList.push('<input type="hidden" name="collegeType">');
	        	// inputList.push('<input type="hidden" name="ownerType">');
	        	inputList.push('<input type="hidden" name="level">');
	        	inputList.push('<input type="hidden" name="feature">');
	        	$(".crumb").append(inputList.join(""));
	        }
	
	        var _key = "0";
	    	$.each(that.state.tagList,function(idx,item){
	    		$('[name='+item.type+']').val(item.value || "");
	    		_key += $('[name='+item.type+']').val();
	    	});
	
	    	//分页
	    	// if(!that.pager){
	    	// 	that.pager = 1;
	    	// }
		},
	
		requestData : function(btn){
			var that = this,o = that.options;
	
			var _data = {
	            province: Number($("[name=city]").val()),
	            capacity : that.capacity,
				// collegeType : $("[name=collegeType]").val(),
				// ownerType : $("[name=ownerType]").val(),
				level : $("[name=level]").val(),
				feature : [Number($("[name=feature]").val())]
			};
	
			var _key = _data.city + _data.level + _data.feature;
			
	        //如果是点击加载更多，页码++，否则重置为1
	        if(btn && $(btn).hasClass("btn-loading")){
	            that.pager++;
	        }else{
	            that.pager = 1;
	        }
	
	        _data.page = that.pager;
	
	      
			$.ajax({
				url : preServer+provinceId + "/data/college",
				type : "post",
	            contentType: "application/json",
				data : JSON.stringify(_data),
				success : function(res){
					if(typeof res == "string"){
						var res = $.parseJSON(res);
					}
	
	                if(res.code !=1){
	                    warn(res.msg);
	                    return;
	                }
	
	                res = res.result;
	
	                //客户端修改数据
	                $.each(res.colleges,function(idx,ele){
	
	                    //增加code,name
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
					
					that.loadList(res,that.pager);
				}
			});
		},
	
		loadList : function(data,pager){
			var that = this,o = that.options;
			var _html = tmpl(data);
	
			if(pager == 1){
				$(".schoolList").empty().html(_html);
			}else{
				$(".schoolList").append(_html);
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
	
		updateUI : function() {
	       this.render(); 
	    },
	
	    init : function(o){
	    	this.state = {
	            tagList:  []
	        };
	
	        this.options = o;
	
	        this.capacity = 10;
	
	        //保存分页对象
	        this.pager = 1;
	
	        this.render();
	        this.bindEvt();
	        
	    },
	
	    searchCollegeReq : function(btn,keyword){
	        var that = this;
	        var oInput = $("#collegeInput");
	        $.ajax({
	            url : preServer+provinceId + "/data/college/search",
	            type : "post",
	            data : JSON.stringify({keyword : keyword || oInput.val(),page : that.pager }),
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
	
	                res = res.result;
	
	                //客户端修改数据
	                $.each(res.colleges,function(idx,ele){
	                    //增加code,name
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
	
	                btn.removeClass("disabled");
	                that.loadList(res,that.pager);
	                that.pager++;
	            },
	            error : function(err){
	                btn.removeClass("disabled");
	                console.log(err);
	            }
	        });
	
	    },
	
	    bindEvt : function(){
	    	var that = this;
	    	$(document).on("click","[data-action=add]",function(e){
	    		e.preventDefault();
	    		var link = $(e.target);
	
	            $("#collegeInput").val("");
	
	            that.state.searchType = 0;
	    		
	    		var type = link.data("value").split(":")[0],
	    			val =  link.data("value").split(":")[1];
	
	    		if(link.hasClass("current") || val == "" ) return;
	            link.closest(".row").find(".item").removeClass("current");
	
	            $.each(that.state.tagList,function(idx,item){
	                if(type == item.type){
	                    that.state.tagList.splice(idx,1);
	                    return false;
	                }
	            });
	
	    		link.addClass("current");
	
				that.state.tagList.push({
					type : type,
					value : val,
					text : link.text()
				});  
	
	             that.render();
				that.requestData(link);  		
	    	});
	
	    	$(document).on("click","[data-action=clear]",function(e){
	    		e.preventDefault();
	
	            that.state.searchType = 0;
	
	            $("#collegeInput").val("");
	    		$("[data-action=add]").removeClass("current");
				that.state.tagList = [];
	
	            that.render();
				that.requestData();  		
	    	});
	
	    	$(document).on("click","[data-action=remove]",function(e){
	    		e.preventDefault();
	
	            $("#collegeInput").val("");
	
	            //searchType控制是否为关键词搜索
	            that.state.searchType = 0;
	
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
	
	            that.render();
				that.requestData(link);  		
	    	});
	
	    	$(".btn-loading").on("click",function(e){
	    		e.preventDefault();
	    		var btn = $(this).closest(".btn");
	    		if(btn.hasClass("disabled") || btn.hasClass("loading-all")) return;
	    		btn.addClass("disabled loading");
	
	            // 区分是否为关键字搜索 or 筛选
	            if(that.state.searchType == 1){
	                var _key = $("#collegeInput").val() || decodeURI(util.getQuery("keyword"));
	                that.searchCollegeReq($("#sBtn"),_key);
	            }else if(that.state.searchType == 0){
	                that.requestData(btn);
	            }
	    	});
	
	        $("#sBtn").on("click",function(e){
	            goSearch(e);
	        });
	
	        $("#collegeInput").on("keyup",function(e){
	            if(e.keyCode == 13){
	                goSearch(e);
	            }else{
	                return false;
	            }
	            
	        });
	
	        function goSearch(e){
	            e.preventDefault();
	
	            that.pager = 1;
	
	            var oInput = $("#collegeInput"),btn = $(this).closest(".btn");
	            if($.trim(oInput.val()) == ""){
	                warn("请输入院校名称");
	                return;
	            }
	
	            that.state.searchType = 1;
	
	            if(btn.hasClass('disabled')) return;
	            btn.addClass("disabled");
	
	            that.state.tagList = [];
	            $(".itemLists .item").removeClass("current");
	            that.render();
	
	            that.searchCollegeReq(btn);
	        };
	
	        //需要区分是通过导航搜索进来还是直接进来
	        if(!!util.getQuery("keyword")){
	            that.state.searchType = 1;
	            that.searchCollegeReq($("#sBtn"),decodeURI(util.getQuery("keyword")));
	            
	        }else{
	            that.state.searchType = 0;
	            that.requestData();
	        }
	        
	    }
	};
	
	module.exports = dataSet;

/***/ },

/***/ 142:
/***/ function(module, exports) {

	module.exports = function (obj) {
	obj || (obj = {});
	var __t, __p = '', __j = Array.prototype.join;
	function print() { __p += __j.call(arguments, '') }
	with (obj) {
	
	 if (colleges.length == 0 && page == 1) { ;
	__p += '\n	<li class="no_transList"><i class="noListIcon"></i><em class="vm">暂无记录</em></li>\n';
	 }else{ ;
	__p += '	\n';
	 for (var i = 0; i < colleges.length; i++) { ;
	__p += '\n<li class="clearfix">\n	<div class="fl">\n	<h4 class="name badgeRow"><em class="badgetitle vm">' +
	((__t = ( colleges[i].collegeName )) == null ? '' : __t) +
	'</em>\n		';
	 for (var j = 0; j < colleges[i].feature.length; j++) { ;
	__p += '\n			';
	 if(colleges[i].feature[j].type == 1) { ;
	__p += '\n				<span class="badge green">' +
	((__t = ( colleges[i].feature[j].name )) == null ? '' : __t) +
	'</span>\n			';
	 }else if(colleges[i].feature[j].type == 2){ ;
	__p += '\n				<span class="badge red">' +
	((__t = ( colleges[i].feature[j].name )) == null ? '' : __t) +
	'</span>\n			';
	 }else{ ;
	__p += '\n				<span class="badge">' +
	((__t = ( colleges[i].feature[j].name )) == null ? '' : __t) +
	'</span>\n			';
	 } ;
	__p += '\n		';
	 } ;
	__p += '\n	</h4>\n	<div class="detail">\n		<span class="label">院校属地：</span><span class="field">' +
	((__t = ( colleges[i].city.name )) == null ? '' : __t) +
	'</span>\n		<span class="label">院校分类：</span><span class="field">' +
	((__t = ( colleges[i].collegeType.name )) == null ? '' : __t) +
	'</span>\n		<span class="label">院校性质：</span><span class="field">' +
	((__t = ( colleges[i].ownerType.name )) == null ? '' : __t) +
	'</span>\n		<span class="label">院校层次：</span><span class="field">' +
	((__t = ( colleges[i].level.name )) == null ? '' : __t) +
	'</span>\n	</div>\n	</div>\n	<div class="fr">\n		<a href="/library/college/' +
	((__t = ( colleges[i].collegeId )) == null ? '' : __t) +
	'" target="_blank" class="btn btn-primary btn-mid">查看详情</a>\n	</div>\n</li>\n';
	 }} ;
	
	
	}
	return __p
	}

/***/ }

});
//# sourceMappingURL=college.js.map