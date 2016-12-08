webpackJsonp([4],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	/* 建议这里都引入 */
	__webpack_require__(16);
	__webpack_require__(119);
	var $ = window.$ || __webpack_require__(38);
	
	//工具类方法
	var util = __webpack_require__(39);
	
	//公共方法
	var common = __webpack_require__(40);
	
	
	//自定义功能写下面
	
	//弹窗模板
	var tmpl_Info = __webpack_require__(121);
	
	$(".toggle").on("click",function(e){
		e.preventDefault();
		var oRow = $(this).closest(".detailContent");
		oRow.toggleClass("open");
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

/***/ 119:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }

});
//# sourceMappingURL=bookResult.b5af71c1.js.map