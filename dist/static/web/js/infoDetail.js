webpackJsonp([15],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	/* 建议这里都引入 */
	__webpack_require__(14);
	__webpack_require__(160);
	var $ = window.$ || __webpack_require__(36);
	
	//工具类方法
	var util = __webpack_require__(37);
	
	//公共方法
	var common = __webpack_require__(38);
	
	
	//自定义功能写下面
	__webpack_require__(162);
	var province = $("[name=province]").val();
	var newsId = $("[name=newsId]").val();
	
	$(document).on("click",'.up',function(e){
		e.preventDefault();
		var btn = $(this);
		updown(btn,1);
	});
	
	$(document).on("click",'.down',function(e){
		e.preventDefault();
		var btn = $(this);
		updown(btn,2);
	});
	
	function updown(btn,type){
		if(btn.hasClass("active") ||  $("[btn-type=1]").length){
			if($("[btn-type=1]").hasClass("up")){
				var warnTxt = "您已经点过支持了";
			}else if($("[btn-type=1]").hasClass("down")){
				var warnTxt = "您已经点过反对了";
			}else{
				var warnTxt = "您暂时不可以点击";
			}
			warn(warnTxt);
			return;
		}
		btn.addClass("active");
		var _url = (type == 1 ? "/news/up" : "/news/down");
	
		$.ajax({
			url : "/v2/client/" + province + _url,
			type : "post",
			contentType: "application/json",
			data : JSON.stringify({newsId : newsId}),
			success : function(res){
				if(typeof res == "string"){
					var res = $.parseJSON(res);
				};
	
				if(type == 1){
					$("#upCount").text(Number($("#upCount").text())+1);
				}else if(type==2){
					$("#downCount").text(Number($("#downCount").text())+1);
				}
	
				btn.attr("btn-type",1);
			}
		});
	}

/***/ },

/***/ 160:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 162:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }

});
//# sourceMappingURL=infoDetail.js.map