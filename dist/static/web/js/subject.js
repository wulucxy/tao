webpackJsonp([36],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	/* 建议这里都引入 */
	__webpack_require__(14);
	__webpack_require__(382);
	var $ = window.$ || __webpack_require__(36);
	
	//工具类方法
	var util = __webpack_require__(37);
	
	//公共方法
	var common = __webpack_require__(38);
	
	
	//自定义功能写下面
	//切换顶部nav高亮
	common.switchNav(2);
	
	//数据绑定
	var dataSet = __webpack_require__(384);
	
	dataSet.init();

/***/ },

/***/ 382:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 384:
/***/ function(module, exports, __webpack_require__) {

	var $ = window.$ || __webpack_require__(36);
	var extend =  __webpack_require__(41);
	var tmpl = __webpack_require__(385);
	
	var localData = __webpack_require__(140);
	var tmpl_favWrap = __webpack_require__(386);
	var tmpl_favList = __webpack_require__(387);
	
	var pagination = __webpack_require__(178);
	
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
	
	                 $('[subject='+item.value+']').addClass("current");
	
	                return '<a class="tags" data-action="remove" href="javascript:;" data-value="'+_val+'">'+item.text+'<span class="taoIcon btn-x"></span></a>';
	            });
	
	            var _htmlArr = [];
	            _htmlArr.push('<a href="javascript:;" class="fr btn btn-default" data-action="clear">清空所有</a>');
	            _htmlArr.push('<span class="cat-text fl">已选择：</span>');
	            _htmlArr.push('<span class="tagsWrap">'+tagLis.join("")+'</span>');
	            $(".crumb").html(_htmlArr.join(""));
	        }else{
	        	$(".crumb").html('<span class="cat-text fl">已选择：</span>');
	        }
	
	        if(!$("input[name=subjectList]").length){
	        	var inputList = [];
	            inputList.push('<input type="hidden" name="subjectList">');
	        	$(".m-nav").append(inputList.join(""));
	        }
		 
		},
	
		requestData : function(btn){
			var that = this,o = that.options;
	
	        var subjectList = $.map(that.state.tagList,function(ele){
	            return Number(ele.value);
	        });
	
			var _data = {
	            capacity : that.capacity,
	            subjectList : subjectList
			};
	
	        //如果是点击加载更多，页码++，否则重置为1
	        if(btn){
	            that.pager++;
	        }else{
	            that.pager = 1;
	        }
	
	        _data.page = that.pager;
	
			$.ajax({
				url : preServer+provinceId + "/data/subject/search",
				type : "post",
	            contentType: "application/json",
				data : JSON.stringify(_data),
				success : function(res){
					if(typeof res == "string"){
						var res = $.parseJSON(res);
					}
	
	                if(res.code!=1){
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
	
			$(".btn-loading").removeClass("loading disabled");
	
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
	        var that = this;
	    	this.state = {
	            tagList:  []
	        };
	
	        this.options = o;
	
	        this.capacity = 10;
	        //弹窗假分页对象
	        this.pager = 1;
	        this.len = 6;
	
	        this.bindEvt();
	        
	
	        //需要区分是通过导航搜索进来还是直接进来
	        if(!!util.getQuery("keys")){
	
	            var subjectItems = $(".itemLists .item").map(function(idx,ele){
	                console.log(ele);
	                return {
	                   type : $(ele).data("value").split(":")[0],
	                   value : $(ele).data("value").split(":")[1],
	                   text : $(ele).text()
	                }
	            });
	
	            var keys = util.getQuery("keys").split("");
	
	            $.each(keys,function(idx,ele){
	                $.each(subjectItems,function(d,e){
	                    if(ele == e.value){
	                        that.state.tagList.push({
	                            type : e.type,
	                            value : e.value,
	                            text : e.text
	                        });
	
	                        return false;
	                    }
	                });
	            });
	
	            this.updateUI();
	            this.requestData();
	            
	        }else{
	            this.updateUI();
	            //首次进来默认加载全部数据
	            this.requestData();
	        }
	
	    },
	
	    bindEvt : function(){
	    	var that = this;
	    	$(document).on("click","[data-action=add]",function(e){
	    		e.preventDefault();
	    		var link = $(e.target);
	    		
	    		var type = link.data("value").split(":")[0],
	    			val =  link.data("value").split(":")[1];
	
	    		if(link.hasClass("current") || val == "" ) return;
	            //link.siblings().removeClass("current");
	
	            // $.each(that.state.tagList,function(idx,item){
	            //     if(type == item.type){
	            //         that.state.tagList.splice(idx,1);
	            //         return false;
	            //     }
	            // });
	
	            //if(that.state.tagList.length<4){
	                that.state.tagList.push({
	                    type : type,
	                    value : val,
	                    text : link.text()
	                });  
	                
	            //}
				
	
	
				that.updateUI();  
	            that.requestData();		
	    	});
	
	    	$(document).on("click","[data-action=clear]",function(e){
	    		e.preventDefault();
	    		$("[data-action=add]").removeClass("current");
				that.state.tagList = [];
				that.updateUI();  	
	            that.requestData();	
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
	            that.requestData();   		
	    	});
	
	    	$(".btn-loading").on("click",function(e){
	    		e.preventDefault();
	    		var btn = $(this).closest(".btn");
	    		if(btn.hasClass("disabled") || btn.hasClass("loading-all")) return;
	    		btn.addClass("disabled loading");
	    		that.requestData(btn);
	    	});
	
	        //收藏
	        $(document).on("click",".favMajorBtn",function(e){
	            e.preventDefault();
	            var btn = $(e.target).closest(".btn");
	            if(btn.hasClass("disabled")) return false;
	            btn.addClass("disabled");
	            that.reqCollegeInfo(btn);
	        });
	    },
	
	    pagination : function($page,data){
	        var that = this;   
	
	        var pageCount = Math.ceil(data.majors.length / 6);
	
	        pagination($page,{
	          pages: pageCount,
	          displayedPages: 3,
	          currentPage : 1,
	          edges: 1,
	          onPageClick : function(pageNo){
	            that.requestItemList(pageNo);
	          }
	        });
	    },
	
	    requestItemList : function(pager){
	        var that = this;
	
	        that.majorRes.subMajors = that.majorRes.majors.slice((pager-1)*that.len,pager*that.len);
	        that.pager++;
	
	        that.renderList(that.majorRes);
	    },
	
	    renderList : function(data){
	        var that = this;
	        $(".majorList").empty().append(tmpl_favList(data));
	    },
	
	    majorBox : function(btn,data){
	        var that = this;
	
	        modalBox(btn,{
	        html:tmpl_favWrap(data),
	        klass : 'w540 shadow',
	        closeByOverlay : false,
	        startCallback : function(){
	
	            that.pager = 1;
	            that.requestItemList(that.pager);
	
	            if(!$('.majorListWrap').find('.pagination').length){
	               $('.majorListWrap').append('<div class="pagination"></div>');
	                   var $page = $('.majorListWrap').find('.pagination');
	                   that.pagination($page,data);
	            }
	        },
	        completeCallback : function(){
	            var self = btn; 
	            
	            
	            
	        },
	        closeCallback : function(){
	            btn.removeClass("disabled");
	        }
	
	    });
	    },
	
	    reqCollegeInfo : function(btn){
	        var that = this;
	
	        var subjectList = $.map(that.state.tagList,function(ele){
	            return Number(ele.value);
	        });
	
	        $.ajax({
	            url : preServer+provinceId + "/data/subject/"+btn.attr("collegeid"),
	            type : "post",
	            data : JSON.stringify({subjectList : subjectList,"aa":"aa"}),
	            success : function(res){
	                if(typeof res == "string"){
	                    var res = $.parseJSON(res);
	                }
	
	                if(res.code!=1){
	                    warn(res.msg);
	                    return false;
	                }
	
	                //保存数据
	                that.majorRes = res.result;
	                
	                that.majorBox(btn,that.majorRes);
	            }
	        })
	
	
	    }
	};
	
	module.exports = dataSet;

/***/ },

/***/ 385:
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
	'</span>\n	</div>\n	</div>\n	<div class="fr">\n		<a href="javascript:;" class="btn btn-primary btn-mid favMajorBtn" collegeid=' +
	((__t = ( colleges[i].collegeId )) == null ? '' : __t) +
	' >' +
	((__t = ( colleges[i].majorCount )) == null ? '' : __t) +
	'个专业</a>\n	</div>\n</li>\n';
	 }} ;
	
	
	}
	return __p
	}

/***/ },

/***/ 386:
/***/ function(module, exports) {

	module.exports = function (obj) {
	obj || (obj = {});
	var __t, __p = '';
	with (obj) {
	__p += '<div class="modalCntWrap g9 favMajorModal">\n <h3 class="clearfix">\n <a href="javascript:;" class="icons btn-close fr"></a>\n <span class="fl">' +
	((__t = ( collegeName )) == null ? '' : __t) +
	'</span>\n</h3>\n\n<div class="majorListWrap">\n  <div class="majorList">\n  	\n  </div>\n</div>\n\n</div>';
	
	}
	return __p
	}

/***/ },

/***/ 387:
/***/ function(module, exports) {

	module.exports = function (obj) {
	obj || (obj = {});
	var __t, __p = '', __j = Array.prototype.join;
	function print() { __p += __j.call(arguments, '') }
	with (obj) {
	
	 for (var i = 0; i < subMajors.length; i++) { ;
	__p += '\n  <div class="row clearfix"> \n  	<span class="col1 fl">\n	  	<a target="_blank" href="/library/major/' +
	((__t = ( subMajors[i].majorId )) == null ? '' : __t) +
	'" title="' +
	((__t = ( subMajors[i].majorName )) == null ? '' : __t) +
	'">\n	  		' +
	((__t = ( subMajors[i].majorName )) == null ? '' : __t) +
	':\n	  	</a>\n  	</span>\n  	<div class="col2 fl">\n      ';
	 if (subMajors[i].subjects.length == 0) { ;
	__p += '\n        <span class="btn btn-default">不限</span>\n      ';
	 }else{ ;
	__p += '\n  		';
	 for (var k = 0; k < subMajors[i].subjects.length; k++) { ;
	__p += '\n  		<span class="btn btn-default">' +
	((__t = ( subMajors[i].subjects[k].subjectName )) == null ? '' : __t) +
	'</span>\n  		';
	 }} ;
	__p += '\n  	</div>\n  </div>\n';
	 } ;
	
	
	}
	return __p
	}

/***/ }

});
//# sourceMappingURL=subject.js.map