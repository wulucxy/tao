webpackJsonp([27],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	/* 建议这里都引入 */
	__webpack_require__(14);
	__webpack_require__(218);
	var $ = window.$ || __webpack_require__(36);
	
	//工具类方法
	var util = __webpack_require__(37);
	
	//公共方法
	var common = __webpack_require__(38);
	
	
	/* 可选，视需求而定 */
	var questions = __webpack_require__(220);
	
	var tmpl = __webpack_require__(221);
	
	var Cookies = __webpack_require__(99);
	var contentSlider = __webpack_require__(222);
	
	//需要配置
	var allItems = questions.questions.length;
	$(".all").text(allItems);
	
	//保存所有答案
	var answer = Cookies.get("answer") ? Cookies.get("answer").split("") : [];
	
	if(answer.length > allItems){
		_alert("你已经完成全部问题");
		setTimeout(function(){
			window.location = "/box/plan/major_exam3";
		},3000);
	}else if(answer.length == 1 && answer[0] == "0"){  //如果仅仅是录入验证码
		answer = [];
		renderSlider(0);
	}else if(answer.length){
		var len = Math.min((answer.length+1),210);
		_confirm("上次已经做到第"+len+"题，是否继续",{
			cancel_txt : "重新开始",
			btn_txt : "继续上次",
			callback : function(){
				renderSlider(len-1);
				if(len >= allItems){
					$("#subTestFooter").fadeIn(100);
					subAnswer();
				}
			},
			cancelcallback : function(){
				answer = [];
				renderSlider(0);
			}
		});
	}else{
		renderSlider(0);
	}
	
	function renderSlider(pageIndex){
		contentSlider($("#qtestSliderWrap"),{
			key : "questions",
			tmpl : tmpl,
			data : questions,
			pageIndex : pageIndex,
			allItems : allItems,
			speed : 20,
			startCallback : function(pageIndex,$oldItem,$newItem){
				answer.push($oldItem.find(".current").data("type"));
				Cookies.set("answer",answer.join(""),{expire : 356});
	
	
				if((pageIndex+1) >= allItems){
					//subAnswer();
				};
			},
			callback : function(pageIndex,$oldItem,$newItem){
				if((pageIndex+1) >= allItems){
					$("#subTestFooter").fadeIn(100);
					subAnswer();
				}
	
				//140题以后
				if((pageIndex+1) >= 140){
					if($(".qtestSliderWrap").hasClass("part1")){
						$(".qtestSliderWrap").removeClass("part1").addClass("part2");
					}
				}else{
					if($(".qtestSliderWrap").hasClass("part2")){
						$(".qtestSliderWrap").removeClass("part2").addClass("part1");
					}
				}
			},
			nav : function(pageIndex){
				$(".progressCount .current").text(Math.min(allItems,pageIndex+1));
				var percent =Math.min(100,Number((pageIndex+1)/allItems*100).toFixed(2)) + "%";
				$(".progressInner").stop(true,true).animate({width: percent});
			}
		});
	}
	
	
	
	function subAnswer(){
		$("#subTestBtn").on("click",function(e){
			e.preventDefault();
			var btn = $(e.target);
			if(answer.length != allItems){
				_alert("请完成所有选项才能提交");
			}else{
				if(btn.hasClass("disabled")) return;
				btn.addClass("disabled");
				postAnswer(btn,answer);
			}
		});
	}
	
	function postAnswer(btn,answer){
		var provinceId = $("[name=province]").val();
	
		var _code = util.getQuery("code");
	
		$.ajax({
			url : preServer+provinceId + "/tzy/mtest/submit",
			type  : "post",
			contentType: "application/json",
			data : JSON.stringify({code : _code,answer:answer.join("")}),
			success : function(res){
				if(typeof res == "string"){
					var res = $.parseJSON(res);
				}
	
				if(res.code==1){
					window.location.href = "/box/plan/major_exam3";
				}else{
					common.showError($("#errTxt"),res.msg);
					btn.removeClass("disabled");
					return;
				}
			},
			error : function(){
				btn.removeClass("disabled");
				warn("网络错误，请稍后重试");
			}
		});
	};
	
	
	


/***/ },

/***/ 218:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(219);
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

/***/ 219:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(16)();
	// imports
	
	
	// module
	exports.push([module.id, ".proTestWrapper {\n  margin-top: 12px;\n}\n.s-proTest .badge {\n  margin-left: 4px;\n}\n.lh2 {\n  line-height: 2;\n}\n.contentWrap {\n  background-color: #fff;\n  padding: 48px 36px;\n  margin-bottom: 40px;\n}\n.qtestSliderWrap {\n  width: 510px;\n  margin: 0 auto;\n}\n.qtestSliderWrap h5 {\n  font-size: 18px;\n  text-align: center;\n  margin-bottom: 40px;\n}\n.qtestSliderWrap > ul {\n  height: 260px;\n}\n.part1 .title1 {\n  display: block;\n}\n.part1 .title2 {\n  display: none;\n}\n.part2 .title1 {\n  display: none;\n}\n.part2 .title2 {\n  display: block;\n}\n.contentSlider {\n  color: #333;\n  position: absolute;\n  top: 0;\n  left: 0%;\n  width: 100%;\n  height: 100%;\n}\n.contentSlider .label {\n  font-size: 16px;\n  margin-bottom: 32px;\n}\n.fieldsWrap {\n  overflow: hidden;\n  margin-right: -30px;\n}\n.fieldsWrap li {\n  float: left;\n  cursor: pointer;\n  box-shadow: 0 2px 0 #ccc;\n  margin: 0 30px 32px 0;\n  width: 150px;\n  border-radius: 8px;\n  border: 1px solid #d2d2d2;\n  text-align: center;\n  background-color: #fff;\n  line-height: 40px;\n  font-size: 14px;\n}\n.fieldsWrap li:hover {\n  background-color: #f1efef;\n}\n.progressWrap {\n  margin-top: 80px;\n  height: 12px;\n  border: 1px solid #666;\n  position: relative;\n}\n.progressInner {\n  position: absolute;\n  left: 0;\n  top: 0;\n  background-color: #61c0e2;\n  height: 100%;\n  width: 0;\n  display: inline-block;\n}\n.progressCount {\n  font-size: 15px;\n  color: #000;\n  margin: 10px 0 40px;\n}\n#subTestFooter {\n  display: none;\n}\n", ""]);
	
	// exports


/***/ },

/***/ 220:
/***/ function(module, exports) {

	module.exports = {
		"questions": [
			{
				"index": 0,
				"question": "分析商品的供需状况",
				"answers": [
					"非常不喜欢",
					"不喜欢",
					"有点不喜欢",
					"有点喜欢",
					"喜欢",
					"非常喜欢"
				]
			},
			{
				"index": 1,
				"question": "拆装家里的小物件",
				"answers": [
					"非常不喜欢",
					"不喜欢",
					"有点不喜欢",
					"有点喜欢",
					"喜欢",
					"非常喜欢"
				]
			},
			{
				"index": 2,
				"question": "做听课笔记",
				"answers": [
					"非常不喜欢",
					"不喜欢",
					"有点不喜欢",
					"有点喜欢",
					"喜欢",
					"非常喜欢"
				]
			},
			{
				"index": 3,
				"question": "清点存储货物",
				"answers": [
					"非常不喜欢",
					"不喜欢",
					"有点不喜欢",
					"有点喜欢",
					"喜欢",
					"非常喜欢"
				]
			},
			{
				"index": 4,
				"question": "演奏乐器",
				"answers": [
					"非常不喜欢",
					"不喜欢",
					"有点不喜欢",
					"有点喜欢",
					"喜欢",
					"非常喜欢"
				]
			},
			{
				"index": 5,
				"question": "寻求不同现象的内在联系",
				"answers": [
					"非常不喜欢",
					"不喜欢",
					"有点不喜欢",
					"有点喜欢",
					"喜欢",
					"非常喜欢"
				]
			},
			{
				"index": 6,
				"question": "知道从何种角度鉴赏室内装修设计",
				"answers": [
					"非常不喜欢",
					"不喜欢",
					"有点不喜欢",
					"有点喜欢",
					"喜欢",
					"非常喜欢"
				]
			},
			{
				"index": 7,
				"question": "探讨社会的起源",
				"answers": [
					"非常不喜欢",
					"不喜欢",
					"有点不喜欢",
					"有点喜欢",
					"喜欢",
					"非常喜欢"
				]
			},
			{
				"index": 8,
				"question": "设计贺卡",
				"answers": [
					"非常不喜欢",
					"不喜欢",
					"有点不喜欢",
					"有点喜欢",
					"喜欢",
					"非常喜欢"
				]
			},
			{
				"index": 9,
				"question": "按照说明书了解家用电子产品",
				"answers": [
					"非常不喜欢",
					"不喜欢",
					"有点不喜欢",
					"有点喜欢",
					"喜欢",
					"非常喜欢"
				]
			},
			{
				"index": 10,
				"question": "参加学术研讨会",
				"answers": [
					"非常不喜欢",
					"不喜欢",
					"有点不喜欢",
					"有点喜欢",
					"喜欢",
					"非常喜欢"
				]
			},
			{
				"index": 11,
				"question": "进行研究并撰写研究报告",
				"answers": [
					"非常不喜欢",
					"不喜欢",
					"有点不喜欢",
					"有点喜欢",
					"喜欢",
					"非常喜欢"
				]
			},
			{
				"index": 12,
				"question": "执行和推广社会福利政策",
				"answers": [
					"非常不喜欢",
					"不喜欢",
					"有点不喜欢",
					"有点喜欢",
					"喜欢",
					"非常喜欢"
				]
			},
			{
				"index": 13,
				"question": "向别人讲解规则或技能",
				"answers": [
					"非常不喜欢",
					"不喜欢",
					"有点不喜欢",
					"有点喜欢",
					"喜欢",
					"非常喜欢"
				]
			},
			{
				"index": 14,
				"question": "为书刊杂事画插图",
				"answers": [
					"非常不喜欢",
					"不喜欢",
					"有点不喜欢",
					"有点喜欢",
					"喜欢",
					"非常喜欢"
				]
			},
			{
				"index": 15,
				"question": "加工金属零件",
				"answers": [
					"非常不喜欢",
					"不喜欢",
					"有点不喜欢",
					"有点喜欢",
					"喜欢",
					"非常喜欢"
				]
			},
			{
				"index": 16,
				"question": "将统计资料做成图标",
				"answers": [
					"非常不喜欢",
					"不喜欢",
					"有点不喜欢",
					"有点喜欢",
					"喜欢",
					"非常喜欢"
				]
			},
			{
				"index": 17,
				"question": "学习工程类制图",
				"answers": [
					"非常不喜欢",
					"不喜欢",
					"有点不喜欢",
					"有点喜欢",
					"喜欢",
					"非常喜欢"
				]
			},
			{
				"index": 18,
				"question": "清点班级作业的收交",
				"answers": [
					"非常不喜欢",
					"不喜欢",
					"有点不喜欢",
					"有点喜欢",
					"喜欢",
					"非常喜欢"
				]
			},
			{
				"index": 19,
				"question": "编辑报刊杂志",
				"answers": [
					"非常不喜欢",
					"不喜欢",
					"有点不喜欢",
					"有点喜欢",
					"喜欢",
					"非常喜欢"
				]
			},
			{
				"index": 20,
				"question": "阅读管理方面的书籍",
				"answers": [
					"非常不喜欢",
					"不喜欢",
					"有点不喜欢",
					"有点喜欢",
					"喜欢",
					"非常喜欢"
				]
			},
			{
				"index": 21,
				"question": "编写电脑程序",
				"answers": [
					"非常不喜欢",
					"不喜欢",
					"有点不喜欢",
					"有点喜欢",
					"喜欢",
					"非常喜欢"
				]
			},
			{
				"index": 22,
				"question": "勘探矿藏",
				"answers": [
					"非常不喜欢",
					"不喜欢",
					"有点不喜欢",
					"有点喜欢",
					"喜欢",
					"非常喜欢"
				]
			},
			{
				"index": 23,
				"question": "制定更为有效的管理制度",
				"answers": [
					"非常不喜欢",
					"不喜欢",
					"有点不喜欢",
					"有点喜欢",
					"喜欢",
					"非常喜欢"
				]
			},
			{
				"index": 24,
				"question": "按照装配说明书制作成品",
				"answers": [
					"非常不喜欢",
					"不喜欢",
					"有点不喜欢",
					"有点喜欢",
					"喜欢",
					"非常喜欢"
				]
			},
			{
				"index": 25,
				"question": "栽培花卉树木",
				"answers": [
					"非常不喜欢",
					"不喜欢",
					"有点不喜欢",
					"有点喜欢",
					"喜欢",
					"非常喜欢"
				]
			},
			{
				"index": 26,
				"question": "了解证券基础知识",
				"answers": [
					"非常不喜欢",
					"不喜欢",
					"有点不喜欢",
					"有点喜欢",
					"喜欢",
					"非常喜欢"
				]
			},
			{
				"index": 27,
				"question": "文字录入与排版",
				"answers": [
					"非常不喜欢",
					"不喜欢",
					"有点不喜欢",
					"有点喜欢",
					"喜欢",
					"非常喜欢"
				]
			},
			{
				"index": 28,
				"question": "进行雕塑创作",
				"answers": [
					"非常不喜欢",
					"不喜欢",
					"有点不喜欢",
					"有点喜欢",
					"喜欢",
					"非常喜欢"
				]
			},
			{
				"index": 29,
				"question": "陪伴照顾孤寡老人",
				"answers": [
					"非常不喜欢",
					"不喜欢",
					"有点不喜欢",
					"有点喜欢",
					"喜欢",
					"非常喜欢"
				]
			},
			{
				"index": 30,
				"question": "关注社会教育发展中的问题",
				"answers": [
					"非常不喜欢",
					"不喜欢",
					"有点不喜欢",
					"有点喜欢",
					"喜欢",
					"非常喜欢"
				]
			},
			{
				"index": 31,
				"question": "操作机械设备",
				"answers": [
					"非常不喜欢",
					"不喜欢",
					"有点不喜欢",
					"有点喜欢",
					"喜欢",
					"非常喜欢"
				]
			},
			{
				"index": 32,
				"question": "艺术表演",
				"answers": [
					"非常不喜欢",
					"不喜欢",
					"有点不喜欢",
					"有点喜欢",
					"喜欢",
					"非常喜欢"
				]
			},
			{
				"index": 33,
				"question": "诊断疾病或治疗损伤",
				"answers": [
					"非常不喜欢",
					"不喜欢",
					"有点不喜欢",
					"有点喜欢",
					"喜欢",
					"非常喜欢"
				]
			},
			{
				"index": 34,
				"question": "明确规划个人的发展方向",
				"answers": [
					"非常不喜欢",
					"不喜欢",
					"有点不喜欢",
					"有点喜欢",
					"喜欢",
					"非常喜欢"
				]
			},
			{
				"index": 35,
				"question": "担任少先队、团委的辅导员工作",
				"answers": [
					"非常不喜欢",
					"不喜欢",
					"有点不喜欢",
					"有点喜欢",
					"喜欢",
					"非常喜欢"
				]
			},
			{
				"index": 36,
				"question": "作词作曲",
				"answers": [
					"非常不喜欢",
					"不喜欢",
					"有点不喜欢",
					"有点喜欢",
					"喜欢",
					"非常喜欢"
				]
			},
			{
				"index": 37,
				"question": "管理归档或物品",
				"answers": [
					"非常不喜欢",
					"不喜欢",
					"有点不喜欢",
					"有点喜欢",
					"喜欢",
					"非常喜欢"
				]
			},
			{
				"index": 38,
				"question": "了解珍奇动植物的特征",
				"answers": [
					"非常不喜欢",
					"不喜欢",
					"有点不喜欢",
					"有点喜欢",
					"喜欢",
					"非常喜欢"
				]
			},
			{
				"index": 39,
				"question": "排除机械设备的故障",
				"answers": [
					"非常不喜欢",
					"不喜欢",
					"有点不喜欢",
					"有点喜欢",
					"喜欢",
					"非常喜欢"
				]
			},
			{
				"index": 40,
				"question": "对树木进行修剪或嫁接",
				"answers": [
					"非常不喜欢",
					"不喜欢",
					"有点不喜欢",
					"有点喜欢",
					"喜欢",
					"非常喜欢"
				]
			},
			{
				"index": 41,
				"question": "关注财经新闻",
				"answers": [
					"非常不喜欢",
					"不喜欢",
					"有点不喜欢",
					"有点喜欢",
					"喜欢",
					"非常喜欢"
				]
			},
			{
				"index": 42,
				"question": "自制小装置以方便生活",
				"answers": [
					"非常不喜欢",
					"不喜欢",
					"有点不喜欢",
					"有点喜欢",
					"喜欢",
					"非常喜欢"
				]
			},
			{
				"index": 43,
				"question": "帮助残疾人掌握知识或技能",
				"answers": [
					"非常不喜欢",
					"不喜欢",
					"有点不喜欢",
					"有点喜欢",
					"喜欢",
					"非常喜欢"
				]
			},
			{
				"index": 44,
				"question": "在校内做产品促销",
				"answers": [
					"非常不喜欢",
					"不喜欢",
					"有点不喜欢",
					"有点喜欢",
					"喜欢",
					"非常喜欢"
				]
			},
			{
				"index": 45,
				"question": "文学创作",
				"answers": [
					"非常不喜欢",
					"不喜欢",
					"有点不喜欢",
					"有点喜欢",
					"喜欢",
					"非常喜欢"
				]
			},
			{
				"index": 46,
				"question": "了解网上售卖物品流程",
				"answers": [
					"非常不喜欢",
					"不喜欢",
					"有点不喜欢",
					"有点喜欢",
					"喜欢",
					"非常喜欢"
				]
			},
			{
				"index": 47,
				"question": "分析社会问题，探索产生原因",
				"answers": [
					"非常不喜欢",
					"不喜欢",
					"有点不喜欢",
					"有点喜欢",
					"喜欢",
					"非常喜欢"
				]
			},
			{
				"index": 48,
				"question": "解决人际纠纷",
				"answers": [
					"非常不喜欢",
					"不喜欢",
					"有点不喜欢",
					"有点喜欢",
					"喜欢",
					"非常喜欢"
				]
			},
			{
				"index": 49,
				"question": "比较、分析哲学命题",
				"answers": [
					"非常不喜欢",
					"不喜欢",
					"有点不喜欢",
					"有点喜欢",
					"喜欢",
					"非常喜欢"
				]
			},
			{
				"index": 50,
				"question": "进行成本核算和资金使用管理",
				"answers": [
					"非常不喜欢",
					"不喜欢",
					"有点不喜欢",
					"有点喜欢",
					"喜欢",
					"非常喜欢"
				]
			},
			{
				"index": 51,
				"question": "搜集整理图书资料",
				"answers": [
					"非常不喜欢",
					"不喜欢",
					"有点不喜欢",
					"有点喜欢",
					"喜欢",
					"非常喜欢"
				]
			},
			{
				"index": 52,
				"question": "奇想分析及预报",
				"answers": [
					"非常不喜欢",
					"不喜欢",
					"有点不喜欢",
					"有点喜欢",
					"喜欢",
					"非常喜欢"
				]
			},
			{
				"index": 53,
				"question": "仔细核对计算类题目的正确性",
				"answers": [
					"非常不喜欢",
					"不喜欢",
					"有点不喜欢",
					"有点喜欢",
					"喜欢",
					"非常喜欢"
				]
			},
			{
				"index": 54,
				"question": "商品买卖业务",
				"answers": [
					"非常不喜欢",
					"不喜欢",
					"有点不喜欢",
					"有点喜欢",
					"喜欢",
					"非常喜欢"
				]
			},
			{
				"index": 55,
				"question": "核对自己钱款的使用状况",
				"answers": [
					"非常不喜欢",
					"不喜欢",
					"有点不喜欢",
					"有点喜欢",
					"喜欢",
					"非常喜欢"
				]
			},
			{
				"index": 56,
				"question": "检测电子仪器",
				"answers": [
					"非常不喜欢",
					"不喜欢",
					"有点不喜欢",
					"有点喜欢",
					"喜欢",
					"非常喜欢"
				]
			},
			{
				"index": 57,
				"question": "观测地形地貌",
				"answers": [
					"非常不喜欢",
					"不喜欢",
					"有点不喜欢",
					"有点喜欢",
					"喜欢",
					"非常喜欢"
				]
			},
			{
				"index": 58,
				"question": "关注湿地保护",
				"answers": [
					"非常不喜欢",
					"不喜欢",
					"有点不喜欢",
					"有点喜欢",
					"喜欢",
					"非常喜欢"
				]
			},
			{
				"index": 59,
				"question": "主动与他人交流或分享学习经验",
				"answers": [
					"非常不喜欢",
					"不喜欢",
					"有点不喜欢",
					"有点喜欢",
					"喜欢",
					"非常喜欢"
				]
			},
			{
				"index": 60,
				"question": "舞蹈演出",
				"answers": [
					"非常不喜欢",
					"不喜欢",
					"有点不喜欢",
					"有点喜欢",
					"喜欢",
					"非常喜欢"
				]
			},
			{
				"index": 61,
				"question": "维护、保养设备",
				"answers": [
					"非常不喜欢",
					"不喜欢",
					"有点不喜欢",
					"有点喜欢",
					"喜欢",
					"非常喜欢"
				]
			},
			{
				"index": 62,
				"question": "动物的科学饲养和两种繁殖",
				"answers": [
					"非常不喜欢",
					"不喜欢",
					"有点不喜欢",
					"有点喜欢",
					"喜欢",
					"非常喜欢"
				]
			},
			{
				"index": 63,
				"question": "维护公共秩序",
				"answers": [
					"非常不喜欢",
					"不喜欢",
					"有点不喜欢",
					"有点喜欢",
					"喜欢",
					"非常喜欢"
				]
			},
			{
				"index": 64,
				"question": "进行摄影创作",
				"answers": [
					"非常不喜欢",
					"不喜欢",
					"有点不喜欢",
					"有点喜欢",
					"喜欢",
					"非常喜欢"
				]
			},
			{
				"index": 65,
				"question": "做有风险的投资",
				"answers": [
					"非常不喜欢",
					"不喜欢",
					"有点不喜欢",
					"有点喜欢",
					"喜欢",
					"非常喜欢"
				]
			},
			{
				"index": 66,
				"question": "利用所学知识计算经营投资活动的收益",
				"answers": [
					"非常不喜欢",
					"不喜欢",
					"有点不喜欢",
					"有点喜欢",
					"喜欢",
					"非常喜欢"
				]
			},
			{
				"index": 67,
				"question": "了解人造卫星为什么不落地",
				"answers": [
					"非常不喜欢",
					"不喜欢",
					"有点不喜欢",
					"有点喜欢",
					"喜欢",
					"非常喜欢"
				]
			},
			{
				"index": 68,
				"question": "对权威的观点提出质疑",
				"answers": [
					"非常不喜欢",
					"不喜欢",
					"有点不喜欢",
					"有点喜欢",
					"喜欢",
					"非常喜欢"
				]
			},
			{
				"index": 69,
				"question": "协助街道或村镇开展活动",
				"answers": [
					"非常不喜欢",
					"不喜欢",
					"有点不喜欢",
					"有点喜欢",
					"喜欢",
					"非常喜欢"
				]
			},
			{
				"index": 70,
				"question": "在社区宣传安全、文明知识",
				"answers": [
					"非常不喜欢",
					"不喜欢",
					"有点不喜欢",
					"有点喜欢",
					"喜欢",
					"非常喜欢"
				]
			},
			{
				"index": 71,
				"question": "探索事务发展变化的规律",
				"answers": [
					"非常不喜欢",
					"不喜欢",
					"有点不喜欢",
					"有点喜欢",
					"喜欢",
					"非常喜欢"
				]
			},
			{
				"index": 72,
				"question": "广告策划与制作",
				"answers": [
					"非常不喜欢",
					"不喜欢",
					"有点不喜欢",
					"有点喜欢",
					"喜欢",
					"非常喜欢"
				]
			},
			{
				"index": 73,
				"question": "对问题提出多种假设",
				"answers": [
					"非常不喜欢",
					"不喜欢",
					"有点不喜欢",
					"有点喜欢",
					"喜欢",
					"非常喜欢"
				]
			},
			{
				"index": 74,
				"question": "了解水质被污染的情况",
				"answers": [
					"非常不喜欢",
					"不喜欢",
					"有点不喜欢",
					"有点喜欢",
					"喜欢",
					"非常喜欢"
				]
			},
			{
				"index": 75,
				"question": "文字校对",
				"answers": [
					"非常不喜欢",
					"不喜欢",
					"有点不喜欢",
					"有点喜欢",
					"喜欢",
					"非常喜欢"
				]
			},
			{
				"index": 76,
				"question": "了解科学理论的原理",
				"answers": [
					"非常不喜欢",
					"不喜欢",
					"有点不喜欢",
					"有点喜欢",
					"喜欢",
					"非常喜欢"
				]
			},
			{
				"index": 77,
				"question": "了解某种动物的生活习性",
				"answers": [
					"非常不喜欢",
					"不喜欢",
					"有点不喜欢",
					"有点喜欢",
					"喜欢",
					"非常喜欢"
				]
			},
			{
				"index": 78,
				"question": "组织小型乐队表演",
				"answers": [
					"非常不喜欢",
					"不喜欢",
					"有点不喜欢",
					"有点喜欢",
					"喜欢",
					"非常喜欢"
				]
			},
			{
				"index": 79,
				"question": "学习化学反应原理",
				"answers": [
					"非常不喜欢",
					"不喜欢",
					"有点不喜欢",
					"有点喜欢",
					"喜欢",
					"非常喜欢"
				]
			},
			{
				"index": 80,
				"question": "做会议记录",
				"answers": [
					"非常不喜欢",
					"不喜欢",
					"有点不喜欢",
					"有点喜欢",
					"喜欢",
					"非常喜欢"
				]
			},
			{
				"index": 81,
				"question": "总结现有理论，提出新的观点",
				"answers": [
					"非常不喜欢",
					"不喜欢",
					"有点不喜欢",
					"有点喜欢",
					"喜欢",
					"非常喜欢"
				]
			},
			{
				"index": 82,
				"question": "修理机器",
				"answers": [
					"非常不喜欢",
					"不喜欢",
					"有点不喜欢",
					"有点喜欢",
					"喜欢",
					"非常喜欢"
				]
			},
			{
				"index": 83,
				"question": "服装设计",
				"answers": [
					"非常不喜欢",
					"不喜欢",
					"有点不喜欢",
					"有点喜欢",
					"喜欢",
					"非常喜欢"
				]
			},
			{
				"index": 84,
				"question": "倾听他人倾述心理困扰并提供建议",
				"answers": [
					"非常不喜欢",
					"不喜欢",
					"有点不喜欢",
					"有点喜欢",
					"喜欢",
					"非常喜欢"
				]
			},
			{
				"index": 85,
				"question": "分拣信函、包裹",
				"answers": [
					"非常不喜欢",
					"不喜欢",
					"有点不喜欢",
					"有点喜欢",
					"喜欢",
					"非常喜欢"
				]
			},
			{
				"index": 86,
				"question": "生态农业作业",
				"answers": [
					"非常不喜欢",
					"不喜欢",
					"有点不喜欢",
					"有点喜欢",
					"喜欢",
					"非常喜欢"
				]
			},
			{
				"index": 87,
				"question": "学习商业经营状况统计方法",
				"answers": [
					"非常不喜欢",
					"不喜欢",
					"有点不喜欢",
					"有点喜欢",
					"喜欢",
					"非常喜欢"
				]
			},
			{
				"index": 88,
				"question": "解决电脑操作系统出现的小问题",
				"answers": [
					"非常不喜欢",
					"不喜欢",
					"有点不喜欢",
					"有点喜欢",
					"喜欢",
					"非常喜欢"
				]
			},
			{
				"index": 89,
				"question": "通过实验验证理论知识",
				"answers": [
					"非常不喜欢",
					"不喜欢",
					"有点不喜欢",
					"有点喜欢",
					"喜欢",
					"非常喜欢"
				]
			},
			{
				"index": 90,
				"question": "编制信息资料的分类目录",
				"answers": [
					"非常不喜欢",
					"不喜欢",
					"有点不喜欢",
					"有点喜欢",
					"喜欢",
					"非常喜欢"
				]
			},
			{
				"index": 91,
				"question": "驾驶机动车",
				"answers": [
					"非常不喜欢",
					"不喜欢",
					"有点不喜欢",
					"有点喜欢",
					"喜欢",
					"非常喜欢"
				]
			},
			{
				"index": 92,
				"question": "帮助走入歧途的人改过自新",
				"answers": [
					"非常不喜欢",
					"不喜欢",
					"有点不喜欢",
					"有点喜欢",
					"喜欢",
					"非常喜欢"
				]
			},
			{
				"index": 93,
				"question": "野外生态考察",
				"answers": [
					"非常不喜欢",
					"不喜欢",
					"有点不喜欢",
					"有点喜欢",
					"喜欢",
					"非常喜欢"
				]
			},
			{
				"index": 94,
				"question": "统筹调配人员和物资",
				"answers": [
					"非常不喜欢",
					"不喜欢",
					"有点不喜欢",
					"有点喜欢",
					"喜欢",
					"非常喜欢"
				]
			},
			{
				"index": 95,
				"question": "培育栽培植物",
				"answers": [
					"非常不喜欢",
					"不喜欢",
					"有点不喜欢",
					"有点喜欢",
					"喜欢",
					"非常喜欢"
				]
			},
			{
				"index": 96,
				"question": "检索信息、图片",
				"answers": [
					"非常不喜欢",
					"不喜欢",
					"有点不喜欢",
					"有点喜欢",
					"喜欢",
					"非常喜欢"
				]
			},
			{
				"index": 97,
				"question": "进行复杂的数学推导",
				"answers": [
					"非常不喜欢",
					"不喜欢",
					"有点不喜欢",
					"有点喜欢",
					"喜欢",
					"非常喜欢"
				]
			},
			{
				"index": 98,
				"question": "自己动手做航模",
				"answers": [
					"非常不喜欢",
					"不喜欢",
					"有点不喜欢",
					"有点喜欢",
					"喜欢",
					"非常喜欢"
				]
			},
			{
				"index": 99,
				"question": "主持班会",
				"answers": [
					"非常不喜欢",
					"不喜欢",
					"有点不喜欢",
					"有点喜欢",
					"喜欢",
					"非常喜欢"
				]
			},
			{
				"index": 100,
				"question": "坚持学习一门乐器演奏",
				"answers": [
					"非常不喜欢",
					"不喜欢",
					"有点不喜欢",
					"有点喜欢",
					"喜欢",
					"非常喜欢"
				]
			},
			{
				"index": 101,
				"question": "参加音乐或美术鉴赏课",
				"answers": [
					"非常不喜欢",
					"不喜欢",
					"有点不喜欢",
					"有点喜欢",
					"喜欢",
					"非常喜欢"
				]
			},
			{
				"index": 102,
				"question": "修补朋友间的破裂的关系",
				"answers": [
					"非常不喜欢",
					"不喜欢",
					"有点不喜欢",
					"有点喜欢",
					"喜欢",
					"非常喜欢"
				]
			},
			{
				"index": 103,
				"question": "搞小发明",
				"answers": [
					"非常不喜欢",
					"不喜欢",
					"有点不喜欢",
					"有点喜欢",
					"喜欢",
					"非常喜欢"
				]
			},
			{
				"index": 104,
				"question": "了解人体的解剖生理特点或各器官功能",
				"answers": [
					"非常不喜欢",
					"不喜欢",
					"有点不喜欢",
					"有点喜欢",
					"喜欢",
					"非常喜欢"
				]
			},
			{
				"index": 105,
				"question": "关注尖端科学的的进展",
				"answers": [
					"非常不喜欢",
					"不喜欢",
					"有点不喜欢",
					"有点喜欢",
					"喜欢",
					"非常喜欢"
				]
			},
			{
				"index": 106,
				"question": "解决数理难题",
				"answers": [
					"非常不喜欢",
					"不喜欢",
					"有点不喜欢",
					"有点喜欢",
					"喜欢",
					"非常喜欢"
				]
			},
			{
				"index": 107,
				"question": "通过写作来抒发心情",
				"answers": [
					"非常不喜欢",
					"不喜欢",
					"有点不喜欢",
					"有点喜欢",
					"喜欢",
					"非常喜欢"
				]
			},
			{
				"index": 108,
				"question": "观察天文现象",
				"answers": [
					"非常不喜欢",
					"不喜欢",
					"有点不喜欢",
					"有点喜欢",
					"喜欢",
					"非常喜欢"
				]
			},
			{
				"index": 109,
				"question": "经常整理自己的书本和文具",
				"answers": [
					"非常不喜欢",
					"不喜欢",
					"有点不喜欢",
					"有点喜欢",
					"喜欢",
					"非常喜欢"
				]
			},
			{
				"index": 110,
				"question": "收集和制作生物标本",
				"answers": [
					"非常不喜欢",
					"不喜欢",
					"有点不喜欢",
					"有点喜欢",
					"喜欢",
					"非常喜欢"
				]
			},
			{
				"index": 111,
				"question": "为了帮助他人而做出一些自我牺牲",
				"answers": [
					"非常不喜欢",
					"不喜欢",
					"有点不喜欢",
					"有点喜欢",
					"喜欢",
					"非常喜欢"
				]
			},
			{
				"index": 112,
				"question": "了解股票相关知识",
				"answers": [
					"非常不喜欢",
					"不喜欢",
					"有点不喜欢",
					"有点喜欢",
					"喜欢",
					"非常喜欢"
				]
			},
			{
				"index": 113,
				"question": "学会使用各种机械器材",
				"answers": [
					"非常不喜欢",
					"不喜欢",
					"有点不喜欢",
					"有点喜欢",
					"喜欢",
					"非常喜欢"
				]
			},
			{
				"index": 114,
				"question": "关心班费使用办法",
				"answers": [
					"非常不喜欢",
					"不喜欢",
					"有点不喜欢",
					"有点喜欢",
					"喜欢",
					"非常喜欢"
				]
			},
			{
				"index": 115,
				"question": "装配小电器",
				"answers": [
					"非常不喜欢",
					"不喜欢",
					"有点不喜欢",
					"有点喜欢",
					"喜欢",
					"非常喜欢"
				]
			},
			{
				"index": 116,
				"question": "通过阅读科普读物获得科学发展动态",
				"answers": [
					"非常不喜欢",
					"不喜欢",
					"有点不喜欢",
					"有点喜欢",
					"喜欢",
					"非常喜欢"
				]
			},
			{
				"index": 117,
				"question": "设计与绘制海报",
				"answers": [
					"非常不喜欢",
					"不喜欢",
					"有点不喜欢",
					"有点喜欢",
					"喜欢",
					"非常喜欢"
				]
			},
			{
				"index": 118,
				"question": "在课余时间定期参与志愿活动",
				"answers": [
					"非常不喜欢",
					"不喜欢",
					"有点不喜欢",
					"有点喜欢",
					"喜欢",
					"非常喜欢"
				]
			},
			{
				"index": 119,
				"question": "到野外考察动植物的生态特征",
				"answers": [
					"非常不喜欢",
					"不喜欢",
					"有点不喜欢",
					"有点喜欢",
					"喜欢",
					"非常喜欢"
				]
			},
			{
				"index": 120,
				"question": "阅读经济方面的书籍",
				"answers": [
					"非常不喜欢",
					"不喜欢",
					"有点不喜欢",
					"有点喜欢",
					"喜欢",
					"非常喜欢"
				]
			},
			{
				"index": 121,
				"question": "自己动手做小东西",
				"answers": [
					"非常不喜欢",
					"不喜欢",
					"有点不喜欢",
					"有点喜欢",
					"喜欢",
					"非常喜欢"
				]
			},
			{
				"index": 122,
				"question": "向低年级同学介绍学习经验",
				"answers": [
					"非常不喜欢",
					"不喜欢",
					"有点不喜欢",
					"有点喜欢",
					"喜欢",
					"非常喜欢"
				]
			},
			{
				"index": 123,
				"question": "整理文件和资料",
				"answers": [
					"非常不喜欢",
					"不喜欢",
					"有点不喜欢",
					"有点喜欢",
					"喜欢",
					"非常喜欢"
				]
			},
			{
				"index": 124,
				"question": "了解不同的动植物或矿石种类",
				"answers": [
					"非常不喜欢",
					"不喜欢",
					"有点不喜欢",
					"有点喜欢",
					"喜欢",
					"非常喜欢"
				]
			},
			{
				"index": 125,
				"question": "有创意地为自己活朋友搭配服饰",
				"answers": [
					"非常不喜欢",
					"不喜欢",
					"有点不喜欢",
					"有点喜欢",
					"喜欢",
					"非常喜欢"
				]
			},
			{
				"index": 126,
				"question": "获取大量的科学知识",
				"answers": [
					"非常不喜欢",
					"不喜欢",
					"有点不喜欢",
					"有点喜欢",
					"喜欢",
					"非常喜欢"
				]
			},
			{
				"index": 127,
				"question": "参加学科知识竞赛",
				"answers": [
					"非常不喜欢",
					"不喜欢",
					"有点不喜欢",
					"有点喜欢",
					"喜欢",
					"非常喜欢"
				]
			},
			{
				"index": 128,
				"question": "给自己的图书分类、编号",
				"answers": [
					"非常不喜欢",
					"不喜欢",
					"有点不喜欢",
					"有点喜欢",
					"喜欢",
					"非常喜欢"
				]
			},
			{
				"index": 129,
				"question": "听植物学和动物学方面的讲座",
				"answers": [
					"非常不喜欢",
					"不喜欢",
					"有点不喜欢",
					"有点喜欢",
					"喜欢",
					"非常喜欢"
				]
			},
			{
				"index": 130,
				"question": "帮邻里照顾孩子、辅导学习",
				"answers": [
					"非常不喜欢",
					"不喜欢",
					"有点不喜欢",
					"有点喜欢",
					"喜欢",
					"非常喜欢"
				]
			},
			{
				"index": 131,
				"question": "习惯把自己的物品放在固定位置",
				"answers": [
					"非常不喜欢",
					"不喜欢",
					"有点不喜欢",
					"有点喜欢",
					"喜欢",
					"非常喜欢"
				]
			},
			{
				"index": 132,
				"question": "参加营销类的社会实践",
				"answers": [
					"非常不喜欢",
					"不喜欢",
					"有点不喜欢",
					"有点喜欢",
					"喜欢",
					"非常喜欢"
				]
			},
			{
				"index": 133,
				"question": "了解市场的运作体系",
				"answers": [
					"非常不喜欢",
					"不喜欢",
					"有点不喜欢",
					"有点喜欢",
					"喜欢",
					"非常喜欢"
				]
			},
			{
				"index": 134,
				"question": "主动帮助新同学熟悉环境",
				"answers": [
					"非常不喜欢",
					"不喜欢",
					"有点不喜欢",
					"有点喜欢",
					"喜欢",
					"非常喜欢"
				]
			},
			{
				"index": 135,
				"question": "定期整理通讯录",
				"answers": [
					"非常不喜欢",
					"不喜欢",
					"有点不喜欢",
					"有点喜欢",
					"喜欢",
					"非常喜欢"
				]
			},
			{
				"index": 136,
				"question": "定期整理通讯录",
				"answers": [
					"非常不喜欢",
					"不喜欢",
					"有点不喜欢",
					"有点喜欢",
					"喜欢",
					"非常喜欢"
				]
			},
			{
				"index": 137,
				"question": "定期整理通讯录",
				"answers": [
					"非常不喜欢",
					"不喜欢",
					"有点不喜欢",
					"有点喜欢",
					"喜欢",
					"非常喜欢"
				]
			},
			{
				"index": 138,
				"question": "修理自行车",
				"answers": [
					"非常不喜欢",
					"不喜欢",
					"有点不喜欢",
					"有点喜欢",
					"喜欢",
					"非常喜欢"
				]
			},
			{
				"index": 139,
				"question": "讨论财经方面的话题",
				"answers": [
					"非常不喜欢",
					"不喜欢",
					"有点不喜欢",
					"有点喜欢",
					"喜欢",
					"非常喜欢"
				]
			},
			{
				"index": 140,
				"question": "修理家中小电器",
				"answers": [
					"完全没把握",
					"比较没把握",
					"有点没把握",
					"有一点把握",
					"比较有把握",
					"完全有把握"
				]
			},
			{
				"index": 141,
				"question": "观察小动物、了解其生物习性",
				"answers": [
					"完全没把握",
					"比较没把握",
					"有点没把握",
					"有一点把握",
					"比较有把握",
					"完全有把握"
				]
			},
			{
				"index": 142,
				"question": "学会作曲",
				"answers": [
					"完全没把握",
					"比较没把握",
					"有点没把握",
					"有一点把握",
					"比较有把握",
					"完全有把握"
				]
			},
			{
				"index": 143,
				"question": "提前核对所需物品的准备情况",
				"answers": [
					"完全没把握",
					"比较没把握",
					"有点没把握",
					"有一点把握",
					"比较有把握",
					"完全有把握"
				]
			},
			{
				"index": 144,
				"question": "拆卸、组装机器",
				"answers": [
					"完全没把握",
					"比较没把握",
					"有点没把握",
					"有一点把握",
					"比较有把握",
					"完全有把握"
				]
			},
			{
				"index": 145,
				"question": "研究如何提高企业知名度",
				"answers": [
					"完全没把握",
					"比较没把握",
					"有点没把握",
					"有一点把握",
					"比较有把握",
					"完全有把握"
				]
			},
			{
				"index": 146,
				"question": "协助社区开展互助活动",
				"answers": [
					"完全没把握",
					"比较没把握",
					"有点没把握",
					"有一点把握",
					"比较有把握",
					"完全有把握"
				]
			},
			{
				"index": 147,
				"question": "组装计算机",
				"answers": [
					"完全没把握",
					"比较没把握",
					"有点没把握",
					"有一点把握",
					"比较有把握",
					"完全有把握"
				]
			},
			{
				"index": 148,
				"question": "设计、搭配衣服",
				"answers": [
					"完全没把握",
					"比较没把握",
					"有点没把握",
					"有一点把握",
					"比较有把握",
					"完全有把握"
				]
			},
			{
				"index": 149,
				"question": "使用精密仪器工作",
				"answers": [
					"完全没把握",
					"比较没把握",
					"有点没把握",
					"有一点把握",
					"比较有把握",
					"完全有把握"
				]
			},
			{
				"index": 150,
				"question": "参加独唱或合唱演出",
				"answers": [
					"完全没把握",
					"比较没把握",
					"有点没把握",
					"有一点把握",
					"比较有把握",
					"完全有把握"
				]
			},
			{
				"index": 151,
				"question": "设计新颖广告词",
				"answers": [
					"完全没把握",
					"比较没把握",
					"有点没把握",
					"有一点把握",
					"比较有把握",
					"完全有把握"
				]
			},
			{
				"index": 152,
				"question": "绘制图表以简明扼要地表示资料信息",
				"answers": [
					"完全没把握",
					"比较没把握",
					"有点没把握",
					"有一点把握",
					"比较有把握",
					"完全有把握"
				]
			},
			{
				"index": 153,
				"question": "科学培育花卉树木",
				"answers": [
					"完全没把握",
					"比较没把握",
					"有点没把握",
					"有一点把握",
					"比较有把握",
					"完全有把握"
				]
			},
			{
				"index": 154,
				"question": "制作航模",
				"answers": [
					"完全没把握",
					"比较没把握",
					"有点没把握",
					"有一点把握",
					"比较有把握",
					"完全有把握"
				]
			},
			{
				"index": 155,
				"question": "参加学科竞赛并获奖",
				"answers": [
					"完全没把握",
					"比较没把握",
					"有点没把握",
					"有一点把握",
					"比较有把握",
					"完全有把握"
				]
			},
			{
				"index": 156,
				"question": "校对文字和数据",
				"answers": [
					"完全没把握",
					"比较没把握",
					"有点没把握",
					"有一点把握",
					"比较有把握",
					"完全有把握"
				]
			},
			{
				"index": 157,
				"question": "思考分析事物的发展变化过程",
				"answers": [
					"完全没把握",
					"比较没把握",
					"有点没把握",
					"有一点把握",
					"比较有把握",
					"完全有把握"
				]
			},
			{
				"index": 158,
				"question": "电脑网络维护",
				"answers": [
					"完全没把握",
					"比较没把握",
					"有点没把握",
					"有一点把握",
					"比较有把握",
					"完全有把握"
				]
			},
			{
				"index": 159,
				"question": "调解人际纠纷",
				"answers": [
					"完全没把握",
					"比较没把握",
					"有点没把握",
					"有一点把握",
					"比较有把握",
					"完全有把握"
				]
			},
			{
				"index": 160,
				"question": "学习掌握贸易法规",
				"answers": [
					"完全没把握",
					"比较没把握",
					"有点没把握",
					"有一点把握",
					"比较有把握",
					"完全有把握"
				]
			},
			{
				"index": 161,
				"question": "传授给他人自己总结或掌握的知识或技能",
				"answers": [
					"完全没把握",
					"比较没把握",
					"有点没把握",
					"有一点把握",
					"比较有把握",
					"完全有把握"
				]
			},
			{
				"index": 162,
				"question": "分析某产品成功占有市场的原因",
				"answers": [
					"完全没把握",
					"比较没把握",
					"有点没把握",
					"有一点把握",
					"比较有把握",
					"完全有把握"
				]
			},
			{
				"index": 163,
				"question": "组织学生参加夏令营活动",
				"answers": [
					"完全没把握",
					"比较没把握",
					"有点没把握",
					"有一点把握",
					"比较有把握",
					"完全有把握"
				]
			},
			{
				"index": 164,
				"question": "领导并组织小组或社团活动",
				"answers": [
					"完全没把握",
					"比较没把握",
					"有点没把握",
					"有一点把握",
					"比较有把握",
					"完全有把握"
				]
			},
			{
				"index": 165,
				"question": "制作动漫短片",
				"answers": [
					"完全没把握",
					"比较没把握",
					"有点没把握",
					"有一点把握",
					"比较有把握",
					"完全有把握"
				]
			},
			{
				"index": 166,
				"question": "按照计划做事情",
				"answers": [
					"完全没把握",
					"比较没把握",
					"有点没把握",
					"有一点把握",
					"比较有把握",
					"完全有把握"
				]
			},
			{
				"index": 167,
				"question": "对课本中的实验进行改造",
				"answers": [
					"完全没把握",
					"比较没把握",
					"有点没把握",
					"有一点把握",
					"比较有把握",
					"完全有把握"
				]
			},
			{
				"index": 168,
				"question": "策划新产品的推广活动",
				"answers": [
					"完全没把握",
					"比较没把握",
					"有点没把握",
					"有一点把握",
					"比较有把握",
					"完全有把握"
				]
			},
			{
				"index": 169,
				"question": "思考分析某种科学理论",
				"answers": [
					"完全没把握",
					"比较没把握",
					"有点没把握",
					"有一点把握",
					"比较有把握",
					"完全有把握"
				]
			},
			{
				"index": 170,
				"question": "修理家具",
				"answers": [
					"完全没把握",
					"比较没把握",
					"有点没把握",
					"有一点把握",
					"比较有把握",
					"完全有把握"
				]
			},
			{
				"index": 171,
				"question": "修理简单电器",
				"answers": [
					"完全没把握",
					"比较没把握",
					"有点没把握",
					"有一点把握",
					"比较有把握",
					"完全有把握"
				]
			},
			{
				"index": 172,
				"question": "设计表格准确记录各项收支情况",
				"answers": [
					"完全没把握",
					"比较没把握",
					"有点没把握",
					"有一点把握",
					"比较有把握",
					"完全有把握"
				]
			},
			{
				"index": 173,
				"question": "做活动义务讲解员",
				"answers": [
					"完全没把握",
					"比较没把握",
					"有点没把握",
					"有一点把握",
					"比较有把握",
					"完全有把握"
				]
			},
			{
				"index": 174,
				"question": "科学饲养动物",
				"answers": [
					"完全没把握",
					"比较没把握",
					"有点没把握",
					"有一点把握",
					"比较有把握",
					"完全有把握"
				]
			},
			{
				"index": 175,
				"question": "参加模拟的投资游戏并获胜",
				"answers": [
					"完全没把握",
					"比较没把握",
					"有点没把握",
					"有一点把握",
					"比较有把握",
					"完全有把握"
				]
			},
			{
				"index": 176,
				"question": "种植或培育盆栽",
				"answers": [
					"完全没把握",
					"比较没把握",
					"有点没把握",
					"有一点把握",
					"比较有把握",
					"完全有把握"
				]
			},
			{
				"index": 177,
				"question": "快速掌握设备的操作",
				"answers": [
					"完全没把握",
					"比较没把握",
					"有点没把握",
					"有一点把握",
					"比较有把握",
					"完全有把握"
				]
			},
			{
				"index": 178,
				"question": "改进机械装置",
				"answers": [
					"完全没把握",
					"比较没把握",
					"有点没把握",
					"有一点把握",
					"比较有把握",
					"完全有把握"
				]
			},
			{
				"index": 179,
				"question": "分析、理解哲学问题",
				"answers": [
					"完全没把握",
					"比较没把握",
					"有点没把握",
					"有一点把握",
					"比较有把握",
					"完全有把握"
				]
			},
			{
				"index": 180,
				"question": "养殖水产动物",
				"answers": [
					"完全没把握",
					"比较没把握",
					"有点没把握",
					"有一点把握",
					"比较有把握",
					"完全有把握"
				]
			},
			{
				"index": 181,
				"question": "编制图书资料的分类目录",
				"answers": [
					"完全没把握",
					"比较没把握",
					"有点没把握",
					"有一点把握",
					"比较有把握",
					"完全有把握"
				]
			},
			{
				"index": 182,
				"question": "缓解或真正解决他人心理困扰",
				"answers": [
					"完全没把握",
					"比较没把握",
					"有点没把握",
					"有一点把握",
					"比较有把握",
					"完全有把握"
				]
			},
			{
				"index": 183,
				"question": "主动帮助陌生人了解新环境",
				"answers": [
					"完全没把握",
					"比较没把握",
					"有点没把握",
					"有一点把握",
					"比较有把握",
					"完全有把握"
				]
			},
			{
				"index": 184,
				"question": "探求自然现象间的内在联系",
				"answers": [
					"完全没把握",
					"比较没把握",
					"有点没把握",
					"有一点把握",
					"比较有把握",
					"完全有把握"
				]
			},
			{
				"index": 185,
				"question": "观察记录动植物的生态特征",
				"answers": [
					"完全没把握",
					"比较没把握",
					"有点没把握",
					"有一点把握",
					"比较有把握",
					"完全有把握"
				]
			},
			{
				"index": 186,
				"question": "准确登记物品使用情况",
				"answers": [
					"完全没把握",
					"比较没把握",
					"有点没把握",
					"有一点把握",
					"比较有把握",
					"完全有把握"
				]
			},
			{
				"index": 187,
				"question": "组织慈善公益活动",
				"answers": [
					"完全没把握",
					"比较没把握",
					"有点没把握",
					"有一点把握",
					"比较有把握",
					"完全有把握"
				]
			},
			{
				"index": 188,
				"question": "有创意的想法或点子",
				"answers": [
					"完全没把握",
					"比较没把握",
					"有点没把握",
					"有一点把握",
					"比较有把握",
					"完全有把握"
				]
			},
			{
				"index": 189,
				"question": "了解青少年相关的法律知识，维护合法权益",
				"answers": [
					"完全没把握",
					"比较没把握",
					"有点没把握",
					"有一点把握",
					"比较有把握",
					"完全有把握"
				]
			},
			{
				"index": 190,
				"question": "帮助同学提高学习成绩",
				"answers": [
					"完全没把握",
					"比较没把握",
					"有点没把握",
					"有一点把握",
					"比较有把握",
					"完全有把握"
				]
			},
			{
				"index": 191,
				"question": "管理班级或实验室物品",
				"answers": [
					"完全没把握",
					"比较没把握",
					"有点没把握",
					"有一点把握",
					"比较有把握",
					"完全有把握"
				]
			},
			{
				"index": 192,
				"question": "通过推理解决某些难题或事件",
				"answers": [
					"完全没把握",
					"比较没把握",
					"有点没把握",
					"有一点把握",
					"比较有把握",
					"完全有把握"
				]
			},
			{
				"index": 193,
				"question": "对文件、资料进行汇总",
				"answers": [
					"完全没把握",
					"比较没把握",
					"有点没把握",
					"有一点把握",
					"比较有把握",
					"完全有把握"
				]
			},
			{
				"index": 194,
				"question": "为书刊创作插图",
				"answers": [
					"完全没把握",
					"比较没把握",
					"有点没把握",
					"有一点把握",
					"比较有把握",
					"完全有把握"
				]
			},
			{
				"index": 195,
				"question": "演奏乐器",
				"answers": [
					"完全没把握",
					"比较没把握",
					"有点没把握",
					"有一点把握",
					"比较有把握",
					"完全有把握"
				]
			},
			{
				"index": 196,
				"question": "从事某产品的销售代理",
				"answers": [
					"完全没把握",
					"比较没把握",
					"有点没把握",
					"有一点把握",
					"比较有把握",
					"完全有把握"
				]
			},
			{
				"index": 197,
				"question": "对事物提出新的看法和观点",
				"answers": [
					"完全没把握",
					"比较没把握",
					"有点没把握",
					"有一点把握",
					"比较有把握",
					"完全有把握"
				]
			},
			{
				"index": 198,
				"question": "掌握社会问题的研究方法",
				"answers": [
					"完全没把握",
					"比较没把握",
					"有点没把握",
					"有一点把握",
					"比较有把握",
					"完全有把握"
				]
			},
			{
				"index": 199,
				"question": "据图谱辨认动植物或矿石",
				"answers": [
					"完全没把握",
					"比较没把握",
					"有点没把握",
					"有一点把握",
					"比较有把握",
					"完全有把握"
				]
			},
			{
				"index": 200,
				"question": "掌握人体解剖图",
				"answers": [
					"完全没把握",
					"比较没把握",
					"有点没把握",
					"有一点把握",
					"比较有把握",
					"完全有把握"
				]
			},
			{
				"index": 201,
				"question": "制作生物标本",
				"answers": [
					"完全没把握",
					"比较没把握",
					"有点没把握",
					"有一点把握",
					"比较有把握",
					"完全有把握"
				]
			},
			{
				"index": 202,
				"question": "分析商业经营状况",
				"answers": [
					"完全没把握",
					"比较没把握",
					"有点没把握",
					"有一点把握",
					"比较有把握",
					"完全有把握"
				]
			},
			{
				"index": 203,
				"question": "专研某学科的知识",
				"answers": [
					"完全没把握",
					"比较没把握",
					"有点没把握",
					"有一点把握",
					"比较有把握",
					"完全有把握"
				]
			},
			{
				"index": 204,
				"question": "进行艺术摄影",
				"answers": [
					"完全没把握",
					"比较没把握",
					"有点没把握",
					"有一点把握",
					"比较有把握",
					"完全有把握"
				]
			},
			{
				"index": 205,
				"question": "按照剧本扮演角色",
				"answers": [
					"完全没把握",
					"比较没把握",
					"有点没把握",
					"有一点把握",
					"比较有把握",
					"完全有把握"
				]
			},
			{
				"index": 206,
				"question": "观察分析气象图",
				"answers": [
					"完全没把握",
					"比较没把握",
					"有点没把握",
					"有一点把握",
					"比较有把握",
					"完全有把握"
				]
			},
			{
				"index": 207,
				"question": "编排舞蹈",
				"answers": [
					"完全没把握",
					"比较没把握",
					"有点没把握",
					"有一点把握",
					"比较有把握",
					"完全有把握"
				]
			},
			{
				"index": 208,
				"question": "有清晰的个人规划",
				"answers": [
					"完全没把握",
					"比较没把握",
					"有点没把握",
					"有一点把握",
					"比较有把握",
					"完全有把握"
				]
			},
			{
				"index": 209,
				"question": "认真整理归类各学科学习笔记等资料",
				"answers": [
					"完全没把握",
					"比较没把握",
					"有点没把握",
					"有一点把握",
					"比较有把握",
					"完全有把握"
				]
			}
		]
	};

/***/ },

/***/ 221:
/***/ function(module, exports) {

	module.exports = function (obj) {
	obj || (obj = {});
	var __t, __p = '', __j = Array.prototype.join;
	function print() { __p += __j.call(arguments, '') }
	with (obj) {
	
	 for (var i = 0; i < questions.length; i++) { ;
	__p += '\n	<li class="contentSlider" data-index="' +
	((__t = ( questions[i].index )) == null ? '' : __t) +
	'">\n		<p class="label"><em class="index">' +
	((__t = ( questions[i].index+1 )) == null ? '' : __t) +
	'</em>.' +
	((__t = ( questions[i].question )) == null ? '' : __t) +
	'</p>\n		<ol class="fieldsWrap clearfix">\n		';
	 if(questions[i].index < 140 ) { ;
	__p += '\n			';
	 for (var k = 0; k < 6; k++) { ;
	__p += '\n				<li data-type=' +
	((__t = ( k+1 )) == null ? '' : __t) +
	' class="usn">\n					<i class="smileIcons smile_' +
	((__t = ( k+1 )) == null ? '' : __t) +
	'"></i>\n					<span class="fieldTxt">' +
	((__t = ( questions[i].answers[k] )) == null ? '' : __t) +
	'</span>\n				</li>\n			';
	 } ;
	__p += '\n		';
	 }else if(questions[i].index <= 210){ ;
	__p += '\n			';
	 for (var j = 0; j < 6; j++) { ;
	__p += '\n				<li data-type=' +
	((__t = ( j+1 )) == null ? '' : __t) +
	' class="usn" >\n					<i class="fisIcons fis_' +
	((__t = ( j+1 )) == null ? '' : __t) +
	'"></i>\n					<span class="fieldTxt">' +
	((__t = ( questions[i].answers[j] )) == null ? '' : __t) +
	'</span>\n				</li>\n			';
	 } ;
	__p += '\n		';
	 } ;
	__p += '\n		</ol>\n	</li>\n';
	 } ;
	
	
	}
	return __p
	}

/***/ },

/***/ 222:
/***/ function(module, exports, __webpack_require__) {

	var $ = window.$ || __webpack_require__(36);
	var extend =  __webpack_require__(41);
	var browser = __webpack_require__(45);
	
	function contentSlider(target,options){
	
	    function Plugin(t,o){
	      this.target=t;
	      this.ul = t.find('ul');
	      this.options=o;
	      this.init(this.options);
	    }
	
	    Plugin.prototype = {
	      init : function(o){
	        var that = this, $this = that.target;
	
	        //控制切换的屏数
	        that.startPoint = 0;
	        that.endPoint = that.startPoint+1;
	        that.count = 5;
	
	        //当前可视屏索,从0开始
	        this.current = 0;
	
	        //当前页面索引
	        that.pageIndex = o.pageIndex;
	
	        //取css动画结束方法浏览器兼容
	        that.transEndEventName = browser.whichTransitionEvent();
	
	        //初始化dom
	        this.insertHTML(that.startPoint,that.endPoint);
	
	        //初始化进度条
	        o.nav && o.nav.call(that,that.pageIndex);
	      },
	
	      renderPos : function(){
	        var that = this,o = that.options;
	        
	        this.li = this.ul.find('>li');
	
	        if(browser.isModernBrower){
	          this.li.css( 'transition', 'opacity ' + o.speed + 'ms '+o.easing);
	        }
	        //默认进来列表隐藏
	        if(that.startPoint == 0){
	          this.li.hide();
	          this.li.eq( this.current ).show();
	        //其他情况下将下一块列表的首屏展示设置在右侧
	        }else{
	          this.li.eq( this.count).nextAll().hide();
	          this.li.eq( this.count).css({"left":"0%","transition":"none"});
	          setTimeout(function(){
	            that.li.eq( that.count).css({"left":"0%",'transition':'opacity ' + o.speed + 'ms '+o.easing});
	          },20);
	          
	        }
	        
	        this.bindEvt();
	      },
	     
	      insertHTML : function(startPoint,endPoint){
	        var that = this,o = that.options;
	
	        var _key = o.key;
	        that.availData = {};
	        that.availData[_key] = o.data[o.key].slice(o.pageIndex+startPoint*that.count,o.pageIndex+endPoint*that.count);
	
	        var _html = o.tmpl(that.availData);
	
	        //初始化插入数据
	        if(startPoint == 0){
	          this.ul.empty().append(_html);
	        //其他情况下append数据
	        }else{
	          this.ul.append(_html);
	        }
	        
	        that.renderPos();
	      },
	
	      transitionEnd : function($oldItem,$newItem){
	        var that = this,o = that.options;
	
	        var transitionendfn = function() {
	
	          $oldItem.off( that.transEndEventName ).hide();
	          that.isAnimating = false;
	
	          
	          //当前页面索引++
	          that.pageIndex++;
	
	          //nav回调
	          o.nav && o.nav.call(that,that.pageIndex);
	
	          //其他回调
	          o.callback && o.callback.call(that,that.pageIndex,$oldItem,$newItem);
	
	          if( !$newItem.length && $oldItem.next().length){
	              //移除前面的list
	              that.li.slice(0,that.count).remove();
	              //将current重新职位o
	              that.current = 0;
	          }
	
	        };
	
	        if( browser.isModernBrower ) {
	          $oldItem.on( that.transEndEventName, transitionendfn );
	        }else {
	          transitionendfn.call();
	        }
	      },
	
	      switchItem : function($oldItem,$newItem){
	        var that = this;
	
	        if( browser.isModernBrower ) {
	            //运动完毕回调函数
	            that.transitionEnd($oldItem,$newItem);
	
	            setTimeout( function() {
	              $oldItem.css( 'opacity', '0');
	              $newItem.css( 'opacity', '1' );
	            }, 25 );
	        }else{
	            $oldItem.css({'opacity':'0'});
	            $newItem.css({'opacity':'1'});
	            that.transitionEnd.call(that,$oldItem,$newItem)
	        }
	      },
	
	      bindEvt : function(){
	        var that = this, o= that.options;
	        
	        $(o.trigger).on("click",function(e){
	
	          e.preventDefault();
	          var btn = $(this).closest(o.trigger);
	
	
	          if(btn.hasClass(o.klass)) return;
	          if(!!that.isAnimating) return;
	
	          btn.siblings(o.trigger).removeClass(o.klass);
	          btn.addClass(o.klass);
	
	          that.isAnimating = true;
	          that.li =  that.ul.find('>li');
	
	          var $oldItem = that.li.eq( that.current );
	          that.idx = ++that.current;
	          var $newItem = that.li.eq( that.idx );
	
	          //初始化nextItem位置
	          $newItem.css( 'opacity', '0' );
	          $newItem.show();
	
	          //点击回调
	          o.startCallback && o.startCallback.call(that,that.pageIndex,$oldItem,$newItem)
	
	          //已经是最后一个了，直接返回
	          if((that.pageIndex+1) >= o.allItems) return;
	
	          //当点击到当前最后一个列表时，需要往后再插入新的列表数据
	          if(!$newItem.length){
	            that.startPoint++;
	            that.endPoint = that.startPoint+1;
	            that.insertHTML(that.startPoint,that.endPoint);
	          }
	
	          //动画
	          that.switchItem($oldItem,$newItem);
	            
	        });
	      }
	    };
	
	    var settings = extend({
	      data: {},
	      speed: 500,
	      nav : true,
	      easing : 'linear',    
	      pageIndex : 0,
	      allItems : 10,
	      trigger : "[data-type]",
	      klass : "current",
	      tmpl : null
	    },options);
	    
	    return target.each(function(index) {
	      var me = $(this);  
	        return new Plugin(me,settings);
	    });
	}
	
	module.exports = contentSlider;


/***/ }

});
//# sourceMappingURL=majorExam2.js.map