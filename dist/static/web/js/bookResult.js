webpackJsonp([4],{

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	/* 建议这里都引入 */
	__webpack_require__(21);
	__webpack_require__(125);
	var $ = window.$ || __webpack_require__(44);
	
	//工具类方法
	var util = __webpack_require__(45);
	
	//公共方法
	var common = __webpack_require__(46);
	
	
	//自定义功能写下面
	
	//弹窗模板
	var tmpl_Info = __webpack_require__(127);
	
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


/***/ }),

/***/ 125:
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(126);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(41)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/autoprefixer-loader/index.js!../../../node_modules/less-loader/index.js!./index.less", function() {
				var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/autoprefixer-loader/index.js!../../../node_modules/less-loader/index.js!./index.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),

/***/ 126:
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(23)();
	// imports
	
	
	// module
	exports.push([module.id, ".orange {\n  color: #f4b64f;\n}\n.formWrap {\n  background-color: #fff;\n  padding: 28px;\n  margin-bottom: 30px;\n}\n.bg-e8 {\n  background-color: #e8e8e8;\n  color: #555;\n}\n.lh42 {\n  line-height: 42px;\n  font-size: 16px;\n}\n.caseSection h4 {\n  margin-bottom: 15px;\n}\n.detailContent {\n  border-bottom: 1px solid #e2e2e2;\n  margin-bottom: 20px;\n  padding-bottom: 20px;\n  position: relative;\n}\n.detailContent .index {\n  display: inline-block;\n  font-size: 24px;\n  width: 44px;\n  height: 44px;\n  line-height: 44px;\n  text-align: center;\n  color: #fff;\n  background-color: #e2e2e2;\n  margin-right: 15px;\n}\n.detailContent .detail {\n  font-size: 14px;\n  color: #555;\n  line-height: 1.5;\n}\n.detailContent .detail .field {\n  display: inline-block;\n  margin-right: 20px;\n  color: #f4b64f;\n}\n.detailContent .detail .field:last-child {\n  margin-right: 0;\n}\n.detailContent .tableWrap {\n  margin-top: 14px;\n  min-width: 500px;\n  max-width: 800px;\n}\n.detailContent .tableWrap .table {\n  margin-bottom: 0;\n}\n.detailContent .tableWrap .table td {\n  color: #555;\n}\n.toggleIcon {\n  display: inline-block;\n  vertical-align: middle;\n  position: absolute;\n  right: 0;\n  top: 14px;\n  width: 32px;\n  height: 18px;\n  background-position: -68px -18px;\n}\n.detailContent {\n  height: 70px;\n  overflow: hidden;\n  transition: height 0.4s ease;\n}\n.detailContent.open {\n  height: auto;\n}\n.detailContent.open .toggleIcon {\n  background-position: -68px 0;\n}\n.bookCnt .label_radio {\n  width: 140px;\n}\npre {\n  display: none;\n}\n", ""]);
	
	// exports


/***/ })

});
//# sourceMappingURL=bookResult.js.map