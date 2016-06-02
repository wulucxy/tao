webpackJsonp([23],{

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
	__webpack_require__(206);
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
	
	document.title = $(".articleWrap .head h4").text();
	
	function updown(btn,type){
		if(btn.hasClass("btn-primary") ||  $("[btn-type=1]").length){
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
		
		var _url = (type == 1 ? "/news/up" : "/news/down");
	
		$.ajax({
			url : preServer + province + _url,
			type : "post",
			contentType: "application/json",
			data : JSON.stringify({newsId : newsId}),
			success : function(res){
				if(typeof res == "string"){
					var res = $.parseJSON(res);
				};
	
				
				if(res.code == "1011"){
	                window.location = "/home/signin";
	                return false;
	            }else if(res.code!=1){
					warn(res.msg);
					return;
				}
	
				btn.removeClass("btn-negative").addClass("btn-primary");
	
				if(type == 1){
					$("#upCount").text(Number($("#upCount").text())+1);
				}else if(type==2){
					$("#downCount").text(Number($("#downCount").text())+1);
				}
	
				btn.attr("btn-type",1);
			},
			error : function(err){
				console.log(err);
			}
		});
	}

/***/ },

/***/ 204:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(205);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(33)(content, {});
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

/***/ 205:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(16)();
	// imports
	
	
	// module
	exports.push([module.id, ".r-content {\n  margin-top: 16px;\n}\n.timeline {\n  font-size: 14px;\n  color: #333;\n  line-height: 16px;\n  margin-bottom: 16px;\n}\n.timeline a {\n  display: block;\n  color: #333;\n}\n.timeline a:hover {\n  color: #666;\n}\n.timeline .label {\n  background-color: #d7d7d7;\n  display: inline-block;\n  line-height: 32px;\n  width: 80px;\n  margin-right: 8px;\n  text-align: center;\n}\n.articleWrap {\n  margin-top: 28px;\n}\n.thirdParts {\n  margin: 40px 0 48px;\n}\n.procons .btn {\n  display: inline-block;\n  width: 156px;\n  border-radius: 4px;\n  margin-right: 40px;\n  font-size: 16px;\n}\n.procons .btn.last {\n  margin-right: 0;\n}\n.shareComponents {\n  margin: 40px auto 0;\n  width: 320px;\n}\n.btn-fav.faved {\n  background-color: #61c0e2;\n  border-color: #61c0e2;\n}\n.btn-fav.faved .unfavedTxt {\n  display: inline-block;\n}\n", ""]);
	
	// exports


/***/ },

/***/ 206:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(207);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(33)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/autoprefixer-loader/index.js!./../../../node_modules/less-loader/index.js!./article.less", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/autoprefixer-loader/index.js!./../../../node_modules/less-loader/index.js!./article.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 207:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(16)();
	// imports
	
	
	// module
	exports.push([module.id, "article {\n  font-size: 71.4%;\n}\narticle h4 {\n  color: #333;\n  font-size: 2.4em;\n  margin-bottom: 0.83em;\n  line-height: 1.5;\n}\narticle .subTitle {\n  font-size: 1.4em;\n  color: #666;\n  margin-bottom: 2em;\n}\narticle .subTitle .tag {\n  line-height: 1.7em;\n  padding: 0 0.714em;\n  background-color: #d7d7d7;\n  border-radius: 3px;\n}\narticle .txts {\n  font-size: 1.4em;\n  line-height: 2;\n  color: #444;\n  margin-top: 0.714em;\n}\n", ""]);
	
	// exports


/***/ }

});
//# sourceMappingURL=infoDetail.js.map