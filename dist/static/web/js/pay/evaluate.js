webpackJsonp([29],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	/* 建议这里都引入 */
	__webpack_require__(14);
	__webpack_require__(204);
	var $ = window.$ || __webpack_require__(36);
	
	//工具类方法
	var util = __webpack_require__(37);
	
	//公共方法
	var common = __webpack_require__(38);
	
	
	//自定义功能写下面
	//
	////弹窗模板
	var tmpl_Info = __webpack_require__(105);
	
	var pay = {
		init : function(){
			this.detailTrigger();
		},
	
		transformData : function(){
			var that = this;
			var _data = {
				majorList : $.parseJSON($("[name=majorList]").text()),
				c :  $.parseJSON($("[name=c]").text()),
				batch : $("[name=batch]").text(),
				courseType : $("[name=courseType]").text(),
				score : $("[name=score]").text(),
				place : $("[name=place]").text(),
				province : $("[name=province]").val(),
				userName : $("[name=userName]").val()
			};
	
			return _data;
		},
	
		detailTrigger : function(){
			var that = this;
			var data = that.transformData();
	
			console.log(data);
	
			//详情弹窗
			$("[data-trigger]").on("click",function(e){
			    e.preventDefault();
			    var btn = $(e.target).closest(".trigger");
	
			    modalBox( btn.get(0), {
			          html:tmpl_Info(data),
			          klass : 'w540 shadow',
			          closeByOverlay : false,
			          startCallback : function(){
						util.setupLabel();
			          },
			          completeCallback : function(){ 
			            
			          }
			      });
			});
		}
	};
	
	pay.init();

/***/ },

/***/ 204:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }

});
//# sourceMappingURL=evaluate.js.map