webpackJsonp([28],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	/* 建议这里都引入 */
	__webpack_require__(16);
	__webpack_require__(238);
	var $ = window.$ || __webpack_require__(38);
	
	//工具类方法
	var util = __webpack_require__(39);
	
	//公共方法
	var common = __webpack_require__(40);
	
	
	//自定义功能写下面
	//
	////加载更多模块
	var loadMore = __webpack_require__(232);
	var tmpl = __webpack_require__(240);
	
	var province = $("[name=province]").val();
	
	var info = {
		init : function(){
			//默认分页开始
			this.pager = 1;
			this.capacity = 10;
			this.tagIndex = 0;
			this.bindEvt();
		},
	
		initRequest: function(){
			var that = this;
			var arrayOfAjax = [];
			for(var i=0; i<window.__initData__.length; i++) {
				arrayOfAjax.push(that.request(window.__initData__[i].id))
			}
	
			$.when.apply($, arrayOfAjax)
			.done(function(){
				var args = Array.prototype.slice.call(arguments);
				$(".infoListWrap").removeClass("preloading");
	
				for(var i=0;i<args.length;i++){
					that.loadList.call(that,args[i][0],i);
				}
			})
		},
	
		request: function(moduleId){
			var parm = [];
			parm.push("capacity="+5);
			parm.push("moduleId="+moduleId);
	
			return $.ajax({
				url : preServer+province+"/news?"+parm.join("&"),
				type : "get",
				success : function(res){
					if(typeof res == "string"){
						var res = $.parseJSON(res);
					}
	
					if(res.code!=1){
						warn(res.msg);
						return;
					}
				},
				error : function(err){
					console.log(err);
				}
			});
		},
	
		requestList : function(btn){
			var that = this;
	
			//如果是点击加载更多，页码++，否则重置为1
	        if(btn && $(btn).hasClass("btn-loading")){
	            that.pager++;
	        }else{
	            that.pager = 1;
	        }
	
			var parm = [];
			parm.push("capacity="+5);
			//parm.push("page="+that.pager);
			parm.push("tag="+$(".infoTag").eq(that.tagIndex).attr("code"));
	
			//var tagType = $(".tagsList .infoTag").eq(that.tagIndex).text();
	
			$.ajax({
				url : preServer+province+"/news?"+parm.join("&"),
				type : "get",
				success : function(res){
					if(typeof res == "string"){
						var res = $.parseJSON(res);
					}
	
					if(res.code!=1){
						warn(res.msg);
						return;
					}
	
					res.result.tagType = tagType;
					var res = res.result;
	
					$(".infoListWrap").removeClass("preloading");
					
	
					that.loadList(res,that.pager);
				},
				error : function(err){
					console.log(err);
				}
			});
		},
		loadList : function(data,index){
			var that = this,o = that.options;
			var _html = tmpl(data.result);
	
			console.log(_html);
			
			$(".infoList").eq(index).empty().html(_html);
		},
	
		bindEvt : function(){
			var that = this;
			
			this.initRequest();
		}
	};
	
	info.init();

/***/ },

/***/ 238:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 240:
/***/ function(module, exports) {

	module.exports = function (obj) {
	obj || (obj = {});
	var __t, __p = '', __j = Array.prototype.join;
	function print() { __p += __j.call(arguments, '') }
	with (obj) {
	
	 if (news.length == 0 && page == 1) { ;
	__p += '\n	<li class="no_transList"><i class="noListIcon"></i><em class="vm">暂无记录</em></li>\n';
	 }else{ ;
	__p += '\n';
	 for (var i = 0; i < news.length; i++) { ;
	__p += '\n<li>\n   	 <div class="media">\n		<span class="fl imgWrap">\n			<img src="' +
	((__t = ( news[i].newsIconUrl )) == null ? '' : __t) +
	'">\n		</span>\n		<div class="media-body">\n				<h3 class="clearfix">\n					';
	 if (news[i].newsTags.length && !!news[i].newsTags[0]) { ;
	__p += '\n					<span class="btn btn-primary infoTag btn-outlined fr">\n						' +
	((__t = ( news[i].newsTags )) == null ? '' : __t) +
	'\n					</span>\n					';
	 } ;
	__p += '\n					<a class="detailTitle" href="' +
	((__t = ( news[i].newsUrl )) == null ? '' : __t) +
	'" target="_blank">\n						' +
	((__t = ( news[i].newsName )) == null ? '' : __t) +
	'\n					</a>\n					\n				</h3>\n				\n				<!-- <div class="clearfix detailSub g6">\n					';
	 for (var k = 0; k < news[i].newsTags.length; k++) { ;
	__p += '\n					<span class="fl article-tag mr10">' +
	((__t = ( news[i].newsTags[k] )) == null ? '' : __t) +
	'</span>\n					';
	 } ;
	__p += '\n				\n				</div> -->\n\n				<div class="detailCnt clearfix">\n					<span class="moment">' +
	((__t = ( news[i].time )) == null ? '' : __t) +
	'</span>\n				</div>\n				\n		</div>\n	</div>\n</li>\n';
	 }} ;
	
	
	}
	return __p
	}

/***/ }

});
//# sourceMappingURL=infoV2.js.map