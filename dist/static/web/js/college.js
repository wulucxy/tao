webpackJsonp([8],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	/* 建议这里都引入 */
	__webpack_require__(14);
	__webpack_require__(136);
	var $ = window.$ || __webpack_require__(36);
	
	//工具类方法
	var util = __webpack_require__(37);
	
	//公共方法
	var common = __webpack_require__(38);
	
	
	//自定义功能写下面
	//切换顶部nav高亮
	common.switchNav(2);
	
	//数据绑定
	var dataSet = __webpack_require__(138);
	
	dataSet.init();

/***/ },

/***/ 136:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 138:
/***/ function(module, exports, __webpack_require__) {

	var $ = window.$ || __webpack_require__(36);
	var extend =  __webpack_require__(41);
	var tmpl = __webpack_require__(139);
	
	var localData = __webpack_require__(140);
	
	//工具类方法
	var util = __webpack_require__(37);
	
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
	        	inputList.push('<input type="hidden" name="collegeType">');
	        	inputList.push('<input type="hidden" name="ownerType">');
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
	    	if(!that.pageObject[_key]){
	    		that.pageObject[_key] = 1;
	    	}
		},
	
		requestData : function(btn){
			var that = this,o = that.options;
	
			var _data = {
	            province:0,
				city : $("[name=city]").val(),
				collegeType : $("[name=collegeType]").val(),
				ownerType : $("[name=ownerType]").val(),
				level : $("[name=level]").val(),
				feature : [Number($("[name=feature]").val())]
			};
	
			var _key = _data.city + _data.collegeType + _data.ownerType + _data.level + _data.feature;
			
	        //如果是点击加载更多，页码++，否则重置为1
	        if(btn && $(btn).hasClass("btn-loading")){
	            that.pageObject[_key]++;
	        }else{
	            that.pageObject[_key] = 1;
	        }
	
	        _data.page = that.pageObject[_key];
	
	      
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
					
					that.loadList(res,that.pageObject[_key]);
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
	
			$(".btn-loading").removeClass("loading disabled");
	
			//最后一页
			if(pager > data.count){
				$(".btn-loading").addClass("loading-all");
			};
		},
	
		updateUI : function() {
	       this.render(); 
	    },
	
	    init : function(o){
	    	this.state = {
	            tagList:  []
	        };
	
	        this.options = o;
	
	        //保存分页对象
	        this.pageObject = {};
	
	        this.render();
	        this.bindEvt();
	        
	    },
	
	    searchCollegeReq : function(btn,keyword){
	        var that = this;
	        var oInput = $("#collegeInput");
	        $.ajax({
	            url : preServer+provinceId + "/data/college/search",
	            type : "post",
	            data : JSON.stringify({keyword : keyword || oInput.val() }),
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
	                that.loadList(res,1);
	
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
	
	            $("#collegeInput").val("");
	    		
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
	            $("#collegeInput").val("");
	    		$("[data-action=add]").removeClass("current");
				that.state.tagList = [];
	
	            that.render();
				that.requestData();  		
	    	});
	
	    	$(document).on("click","[data-action=remove]",function(e){
	    		e.preventDefault();
	
	            $("#collegeInput").val("");
	
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
	    		that.requestData(btn);
	    	});
	
	        $("#sBtn").on("click",function(e){
	            e.preventDefault();
	            var oInput = $("#collegeInput"),btn = $(this).closest(".btn");
	            if($.trim(oInput.val()) == ""){
	                warn("请输入院校名称");
	                return;
	            }
	
	            if(btn.hasClass('disabled')) return;
	            btn.addClass("disabled");
	
	            that.state.tagList = [];
	            $(".itemLists .item").removeClass("current");
	            that.render();
	
	            that.searchCollegeReq(btn);
	
	        })
	
	        //需要区分是通过导航搜索进来还是直接进来
	        if(!!util.getQuery("keyword")){
	            that.searchCollegeReq($("#sBtn"),decodeURI(util.getQuery("keyword")));
	        }else{
	            that.requestData();
	        }
	        
	    }
	};
	
	module.exports = dataSet;

/***/ },

/***/ 139:
/***/ function(module, exports) {

	module.exports = function (obj) {
	obj || (obj = {});
	var __t, __p = '', __j = Array.prototype.join;
	function print() { __p += __j.call(arguments, '') }
	with (obj) {
	
	 if (colleges.length == 0) { ;
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