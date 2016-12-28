webpackJsonp([5],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	/* 建议这里都引入 */
	__webpack_require__(16);
	__webpack_require__(122);
	var $ = window.$ || __webpack_require__(38);
	
	//工具类方法
	var util = __webpack_require__(39);
	
	//公共方法
	var common = __webpack_require__(40);
	
	
	//自定义功能写下面
	
	//弹窗模板
	var tmpl_Info = __webpack_require__(121);
	
	//自定义功能写下面
	var tabs = __webpack_require__(125);
	
	tabs($("#bookResultTab"),{
		tabsItem : "nav li",
		items : ".content-wrap > section",
		klass : "current"
	});
	
	function transformData(){
		var _data = {
			majorList : $.parseJSON($("[name=majorListJson]").text()),
			c :  $.parseJSON($("[name=cJson]").text()),
			batch : $("[name=batch]").text(),
			courseType : $("[name=courseType]").text(),
			score : $("[name=score]").text(),
			place : $("[name=place]").text(),
			province : $("[name=province]").val(),
			provinceName : $("[name=provinceName]").val(),
			userName : $("[name=userName]").val()
		}
	
		return _data;
	}
	
	
	function detailTrigger(){
		var data = transformData();
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
	};
	
	
	detailTrigger();


/***/ },

/***/ 122:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }

});
//# sourceMappingURL=bookResultV2.js.map