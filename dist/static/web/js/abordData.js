webpackJsonp([2],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	/* 建议这里都引入 */
	__webpack_require__(14);
	__webpack_require__(110);
	var $ = window.$ || __webpack_require__(36);
	
	//工具类方法
	var util = __webpack_require__(37);
	
	//公共方法
	var common = __webpack_require__(38);
	
	
	//自定义功能写下面
	//切换顶部nav高亮
	common.switchNav(2);
	
	//数据绑定
	var dataSet = __webpack_require__(112);
	
	dataSet.init({
		completeCallback : function(){
			$(".toggle").on("click",function(e){
				e.preventDefault();
				var oRow = $(this).closest(".detailContent");
				oRow.toggleClass("open");
			});
		}
	});

/***/ },

/***/ 110:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 112:
/***/ function(module, exports, __webpack_require__) {

	var $ = window.$ || __webpack_require__(36);
	var extend =  __webpack_require__(41);
	var tmpl = __webpack_require__(113);
	
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
	
	        if(!$("input[name=country]").length){
	        	var inputList = [];
	        	inputList.push('<input type="hidden" name="country">');
	        	$(".m-nav").append(inputList.join(""));
	        }
	
		},
	
		requestData : function(btn){
			var that = this,o = that.options;
	
	        //默认首次加载US的数据
	        if(typeof btn == "undefined"){
	            $("[name=country]").val("US");
	        };
	
			var _data = {
				country : $("[name=country]").val(),
				school_name_key : $("[name=school_name_key]").val()
			};
	
			var _key = _data.country + _data.school_name_key;
	
	        //如果是点击加载更多，页码++，否则重置为1
	        if(btn && $(btn).hasClass("btn-loading")){
	            that.pager++;
	        }else{
	            that.pager = 1;
	        }
	
			//_data.page = that.pager;
	
	        var provinceId = $("[name=province]").val();
	
			$.ajax({
				url : preServer+provinceId + "/tzy/plan/abroad/assessment",
				type : "post",
	            contentType: "application/json",
				data : JSON.stringify(_data),
				success : function(res){
					if(typeof res == "string"){
						var res = $.parseJSON(res);
					}
	
	                if(res.code == "1011"){
	                    window.location = "/home/signin";
	                    return false;
	                }else if(res.code != "1"){
	                    warn(res.msg);
	                    return false;
	                }
	
	                res = res.result;
	
					that.loadList(res,that.pager);
				}
			});
		},
	
		loadList : function(data,pager){
			var that = this,o = that.options;
			var _html = tmpl(data);
	
	        $(".schoolListWrap").removeClass("preloading");
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
	
	        o.completeCallback && o.completeCallback.call(that);
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
	        this.pager = 1;
	
	        this.updateUI();
	        this.bindEvt();
	    },
	
	    bindEvt : function(){
	    	var that = this;
	    	$(document).on("click","[data-action=add]",function(e){
	    		e.preventDefault();
	    		var link = $(e.target);
	    		  
	            //reset
	            that.pager = 1;
	
	    		var type = link.data("value").split(":")[0],
	    			val =  link.data("value").split(":")[1];
	
	    		if(link.hasClass("current") || val == "" ) return;
	            link.siblings().removeClass("current");
	
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
	
	            $("[name=country]").val(val);
	
				that.updateUI();
	            that.requestData(link);  		
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
	    	});
	
	    	$(".btn-loading").on("click",function(e){
	    		e.preventDefault();
	    		var btn = $(this).closest(".btn");
	    		if(btn.hasClass("disabled") || btn.hasClass("loading-all")) return;
	    		btn.addClass("disabled loading");
	    		that.requestData(btn);
	    	});
	
	        //点击搜索
	        $(".btn-search").on("click",function(e){
	            e.preventDefault();
	            var oInput = $("[name=school_name_key]");
	            if($.trim(oInput.val()) == ""){
	                warn("请输入院校名称");
	                return false;
	            }
	
	            var btn = $(e.target).closest(".btn");
	
	            that.requestData(btn);
	
	        });
	
	        this.requestData();
	
	    }
	};
	
	module.exports = dataSet;

/***/ },

/***/ 113:
/***/ function(module, exports) {

	module.exports = function (obj) {
	obj || (obj = {});
	var __t, __p = '', __j = Array.prototype.join;
	function print() { __p += __j.call(arguments, '') }
	with (obj) {
	
	 if (data.length == 0) { ;
	__p += '\n	<li class="no_transList"><i class="noListIcon"></i><em class="vm">暂无记录</em></li>\n';
	 }else{ ;
	__p += '	\n';
	 for (var i = 0; i < data.length; i++) { ;
	__p += '\n<li class="clearfix rel detailContent">\n	<div class="fl">\n	<h4 class="name"><em class="vm">' +
	((__t = ( data[i].school_name )) == null ? '' : __t) +
	'</em>&nbsp;<em class="vm">' +
	((__t = ( data[i].school_name_en )) == null ? '' : __t) +
	'</em>\n	</h4>\n	<div class="detail row">\n		<span class="label">所在地区：</span><span class="field">' +
	((__t = ( data[i].country )) == null ? '' : __t) +
	'&nbsp;' +
	((__t = ( data[i].city )) == null ? '' : __t) +
	'</span>\n		<span class="label">成立年份：</span><span class="field">' +
	((__t = ( data[i].build_year )) == null ? '' : __t) +
	'</span>\n		<span class="label">院校性质：</span><span class="field">' +
	((__t = ( data[i].school_type )) == null ? '' : __t) +
	'</span>\n	</div>\n	<div class="detail row">\n		<span class="label">在该国排名：</span><span class="field">NO.' +
	((__t = ( data[i].traffic_rank )) == null ? '' : __t) +
	'</span>\n	</div>\n	<div class="detail row">\n		<span class="label">著名校友：</span><span class="field">NO.' +
	((__t = ( data[i].fame_alumnus )) == null ? '' : __t) +
	'</span>\n	</div>\n	<div class="detail row media">\n		<span class="label fl">地理环境优势：</span>\n		<div className="media-body">\n		<p class="orange">' +
	((__t = ( data[i].geog_superiority )) == null ? '' : __t) +
	'</p>\n		</div>\n	</div>\n	</div>\n	\n	<a href="javascript:;" class="taoIcon toggleIcon toggle"></a>\n</li>\n';
	 }} ;
	
	
	}
	return __p
	}

/***/ }

});
//# sourceMappingURL=abordData.js.map