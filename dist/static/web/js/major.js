webpackJsonp([14],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	/* 建议这里都引入 */
	__webpack_require__(11);
	__webpack_require__(306);
	var $ = window.$ || __webpack_require__(31);
	
	//工具类方法
	var util = __webpack_require__(32);
	
	//公共方法
	var common = __webpack_require__(33);
	
	
	//自定义功能写下面
	//切换顶部nav高亮
	common.switchNav(2);
	
	//数据绑定
	var dataSet = __webpack_require__(308);
	
	dataSet.init();

/***/ },

/***/ 306:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 308:
/***/ function(module, exports, __webpack_require__) {

	var $ = window.$ || __webpack_require__(31);
	var extend =  __webpack_require__(36);
	var tmpl = __webpack_require__(309);
	
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
	    	 
	        that.requestData();
		},
	
		requestData : function(btn){
			var that = this,o = that.options;
	
			var _data = {
				bachelor : $("[name=bachelor]").val(),
				junior : $("[name=junior]").val()
			};
	
	        if(_data.bachelor == "" && _data.junior == "") return;
	
	        var provinceId = $("[name=province]").val();
	
			$.ajax({
				url : "/v2/client/"+provinceId + "/data/major",
				type : "post",
	            contentType: "application/json",
				data : JSON.stringify(_data),
				success : function(res){
					if(typeof res == "string"){
						var res = $.parseJSON(res);
					}
	
	               
					that.loadList(res);
				}
			});
		},
	
		loadList : function(data){
			var that = this,o = that.options;
			var _html = tmpl(data);
	
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
	
	        this.bindEvt();
	        this.updateUI();
	    },
	
	    bindEvt : function(){
	    	var that = this;
	    	$(document).on("click","[data-action=add]",function(e){
	    		e.preventDefault();
	    		var link = $(e.target);
	    		
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
	    	});
	    }
	};
	
	module.exports = dataSet;

/***/ },

/***/ 309:
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
	__p += '\n		<a href="#" data-id="' +
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