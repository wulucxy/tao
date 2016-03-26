webpackJsonp([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	/* 建议这里都引入 */
	__webpack_require__(14);
	__webpack_require__(104);
	var $ = window.$ || __webpack_require__(36);
	
	//工具类方法
	var util = __webpack_require__(37);
	
	//公共方法
	var common = __webpack_require__(38);
	
	
	//自定义功能写下面
	//切换顶部nav高亮
	common.switchNav(1);
	//弹窗模板
	var tmpl_Info = __webpack_require__(106);
	
	$(".toggle").on("click",function(e){
		e.preventDefault();
		var oRow = $(this).closest(".detailContent");
		oRow.toggleClass("open");
	});
	
	function transformData(){
		var _data = {
			majorList : $.parseJSON($("[name=majorList]").text()),
			c :  $.parseJSON($("[name=c]").text()),
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

/***/ 104:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(105);
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

/***/ 105:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(16)();
	// imports
	
	
	// module
	exports.push([module.id, ".orange {\n  color: #f4b64f;\n}\n.formWrap {\n  background-color: #fff;\n  padding: 28px;\n  margin-bottom: 30px;\n}\n.bg-e8 {\n  background-color: #e8e8e8;\n  color: #555;\n}\n.lh42 {\n  line-height: 42px;\n  font-size: 16px;\n}\n.caseSection h4 {\n  margin-bottom: 15px;\n}\n.detailContent {\n  border-bottom: 1px solid #e2e2e2;\n  margin-bottom: 20px;\n  padding-bottom: 20px;\n  position: relative;\n}\n.detailContent .index {\n  display: inline-block;\n  font-size: 24px;\n  width: 44px;\n  height: 44px;\n  line-height: 44px;\n  text-align: center;\n  color: #fff;\n  background-color: #e2e2e2;\n  margin-right: 15px;\n}\n.detailContent .detail {\n  font-size: 14px;\n  color: #555;\n  line-height: 1.5;\n}\n.detailContent .detail .field {\n  display: inline-block;\n  margin-right: 20px;\n  min-width: 108px;\n  width: auto;\n  cursor: default;\n}\n.detailContent .detail .field:last-child {\n  margin-right: 0;\n}\n.aboard h3 .small {\n  font-weight: normal;\n  font-size: 16px;\n  color: #666;\n  position: relative;\n  top: 2px;\n}\npre {\n  display: none;\n}\n", ""]);
	
	// exports


/***/ }

});
//# sourceMappingURL=aboardSuccess.js.map