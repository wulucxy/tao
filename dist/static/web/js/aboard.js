webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	/* 建议这里都引入 */
	__webpack_require__(14);
	__webpack_require__(34);
	var $ = window.$ || __webpack_require__(36);
	
	//工具类方法
	var util = __webpack_require__(37);
	
	//公共方法
	var common = __webpack_require__(38);
	
	/* 具体实现 */
	// 验证组件
	__webpack_require__(54);
	
	//selct组件
	var beautifySelect = __webpack_require__(101);
	
	//checkbox定制
	$('.label_radio').click(function(){
	  util.setupLabel();
	});
	
	util.setupLabel();
	
	//切换顶部nav高亮
	common.switchNav(1);
	
	var provinceId = $("[name=province]").val();
	
	var getStateUrl = "/v2/client/getStateUrl";
	
	
	var aboard = {
	
		render : function(){
			var that = this;
	
			//渲染城市列表
			if(this.state.stateList && this.state.stateList.length){
				var optionList = [];
				$.each(this.state.stateList,function(idx,ele){
					optionList.push('<li name='+ele.name+' code='+ele.code+'>'+ele.name+'</li>');
				});
	
				optionList = optionList.join("");
				$("#statesSelect .options").empty().append(optionList);
			};
	
			//渲染选中城市信息
			if(that.state.selectedState && that.state.selectedState.name){
				$("#statesSelect .triggerTxt").text(that.state.selectedState.name);
			}else{
				$("#statesSelect .triggerTxt").text("请选择");
			}
		},
		init : function(){
	
			this.state = {};
			this.bindEvt();
	
			this.formAction();
		},
	
		bindEvt : function(){
			var that = this;
	
			//地区不可点
			$("#statesSelect .trigger").addClass("disabled");
	
			beautifySelect($("#countrySelect"),{
				selectCallback : function(li,index){
					$("[name=country]").val($(li).attr("code"));
					$(li).closest(".row").removeClass("error empty");
					that.getStateInfo($(li).attr("code"));
				}
			});	
	
			beautifySelect($("#statesSelect"),{
				selectCallback : function(li,index){
					$(li).closest(".row").removeClass("error empty");
					$("[name=states_cn]").val($(li).attr("code"));
				}
			});
	
			beautifySelect($("#exam_typeSelect"),{
				selectCallback : function(li,index){
					$(li).closest(".row").removeClass("error empty");
					$("[name=exam_type]").val($(li).attr("code"));
				}
			});
		},
	
		getStateInfo : function(code){
			var that = this;
			$.ajax({
				url : getStateUrl,
	            type : "post",
	            contentType: "application/json",
	            data : JSON.stringify({country:code}),
	            success : function(res){
	                if(typeof res =="string"){
	                    var res = $.parseJSON(res);
	                }
	                
	                if(res.code){
	                	warn(res.msg);
	                	$("#statesSelect .trigger").addClass("disabled");
	                	return;
	                }
	
	                $("#statesSelect .trigger").removeClass("disabled");
	                
	                //选中城市列表
	                that.state.stateList = res.stateList;
	                //选中的城市
	                that.state.selectedState = {
	                	code : "",
	                	name : ""
	                };
	
	                that.render();
	
	
	            },
	            error : function(err){
	                console.log($.parseJSON(err.responseText).msg);
	            }
			});
		},
	
		formAction : function(){
			var that = this;
			$("#aboardForm").validator({
				errorParent: '.row',
			    successCallback: function(e) {
			      var target = $(e.target).closest('.btn');
			      //执行到下一步操作
			      that.subFunc(target,$("#aboardForm"));
	
			    },
			    focusinCallback: function() {
			      var _ele = $(this);
			      common.hideError($('.errTxt'));
			    },
	
			    errorCallback: function(unvalidFields) {
			      var oError = $('.errTxt');
			    }
			});
		},
	
		subFunc : function(btn,oForm){
			var that = this;
	
			var _data = {
				user_mobile	: $("[name=mobile]").val(),
				country	: $("[name=country]").val(),
				states_cn : $("[name=states_cn]").val(),	
				degree	: $("[name=degree]").val(),
				major_key : $("[name=major_key]").val(),
				exam_type : $("[name=exam_type]").val(),
				exam_score : $("[name=exam_score]").val(),
				gpa_score : $("[name=gpa_score]").val()
			};
	
		
			$.ajax({
				url : preServer+provinceId+"/tzy/plan/abroad/create",
				contentType: "application/json",
				type : "post",
			    data : JSON.stringify(_data),
			    success : function(res){
			      if(typeof res == "string"){
			        var res = $.parseJSON(res);
			      }
	
			      if(!res.code){
			        window.location = "/box/plan/aboard_success";
			        return false;
			      }else{
			        common.showError($('.errTxt'),res.msg || "网络错误,请稍后重试");
			        return;
			      }
			    },
			    error : function(res){
			       common.showError($('.errTxt'),$.parseJSON(err.responseText).msg || "网络错误,请稍后重试");
			    }
			})
		}
	};
	
	aboard.init();
	
	
	


/***/ },

/***/ 34:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(35);
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

/***/ 35:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(16)();
	// imports
	
	
	// module
	exports.push([module.id, ".breadcrumb li {\n  width: 33.3%;\n}\n.p_assess {\n  margin-top: 24px;\n}\n.icon-location {\n  display: inline-block;\n  vertical-align: middle;\n  background-repeat: no-repeat;\n  width: 20px;\n  height: 21px;\n  background-image: url(" + __webpack_require__(31) + ");\n  background-position: 0 0;\n}\n.icon-book {\n  background-position: -20px 0;\n}\n.icon-list {\n  background-position: -40px 0;\n}\n.icon-fenshu {\n  background-position: -60px 0;\n}\n.icon-rank {\n  background-position: -80px 0;\n}\n.formWrap {\n  background-color: #fff;\n  padding: 28px 24px;\n  margin-bottom: 30px;\n}\n.formWrap .row .col2 {\n  margin-left: 160px;\n}\n.formWrap .row .col2 .fieldWrap {\n  display: inline-block;\n  width: 374px;\n}\n.formWrap .row .errInfo {\n  margin-left: 160px;\n}\n.formWrap .row .control-label {\n  font-size: 15px;\n  color: #444;\n}\n.formWrap .row .control-label em {\n  margin-left: 10px;\n}\n", ""]);
	
	// exports


/***/ },

/***/ 101:
/***/ function(module, exports, __webpack_require__) {

	var $ = window.$ || __webpack_require__(36);
	var extend =  __webpack_require__(41);
	
	__webpack_require__(102);
	
		function Plugin(t,o){
			this.target=t;
			this.settings=o;
			this.trigger = this.target.find(o.trigger),
			this.ul = this.target.find(".options");
	      	this.lists = this.ul.find("li");
	
			this.init(this.settings);
		}
	
		Plugin.prototype={
			init : function(){
				this.bindEvt();
			},
	
			bindEvt : function(){
				var that = this,o = that.settings;
	
				that.trigger.on("click",function(){
			        if($(this).hasClass('disabled')) return;
			        that.toggle($(this));
		      	});
	
		      	that.ul.on('mouseenter', 'li', function(e) {
			        $(this).addClass('current');
			    });
	
			    that.ul.on('mouseleave', 'li', function(e) {
			        $(this).removeClass('current');
			    });
	
			    that.ul.on('click','li',function(e){
		          var index = $(this).index();
		          if(!$(this).hasClass("disabled")){
		            that.updateTriggerText(index);
		            $(this).siblings().removeClass('current');
		            $(this).addClass('current');
		            that.toggle();
		            o.selectCallback && o.selectCallback($(this),index);
		          }
		      	});
			},
	
			updateTriggerText : function(index){
		      var that = this;
		      if(typeof index=='undefined'){
		        that.trigger.find(".triggerTxt").text("未选择");
		        that.trigger.addClass('disable');
		      }else{
		        that.trigger.find(".triggerTxt").text(that.lists.eq(index).text());
		      }
	
		      that.selectedIndex = index;
		    },
	
			toggle : function(){
		      var that = this;
		      that.trigger.toggleClass('open');
		      if(!that.ul.hasClass("open")){
		      	that.ul.show(50,function(){
		      		that.ul.addClass("open");
		      	});
		      }else{
		      	that.ul.removeClass("open");
		      	setTimeout(function(){
		      		that.ul.hide();
		      	},400)
		      }
		      
		    },
	
		    close : function(){
		      var that = this;
		      that.trigger.removeClass('open');
		      that.ul.removeClass('open');
		    }
		};
		
	
	var beautifySelect = function(target,o) {
		var instance = $.data( $(target), 'beautifySelect' );
		var settings=extend({
			"trigger" : "[data-toggle]"
		},o);
	
		
		$(target).each(function(index) {
			var me = $(this);  
			if ( instance ) {
	          instance.init();
	        }else {
	            instance = $.data( this, 'beautifySelect', new Plugin( me,settings ) );
	        }
		});
		return instance;
	};	
	
	module.exports = beautifySelect;

/***/ },

/***/ 102:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(103);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(33)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/autoprefixer-loader/index.js!./../../../../node_modules/less-loader/index.js!./index.less", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/autoprefixer-loader/index.js!./../../../../node_modules/less-loader/index.js!./index.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 103:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(16)();
	// imports
	
	
	// module
	exports.push([module.id, ".beautify-select {\n  position: relative;\n  font-size: 14px;\n}\n.beautify-select.disabled {\n  opacity: 0.5;\n  filter: alpha(opacity:50);\n}\n.beautify-select .trigger {\n  border-radius: 4px;\n  cursor: pointer;\n  width: 100%;\n  padding: 6px 24px 6px 9px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  position: relative;\n  border: 1px solid #e7e7e7;\n  -webkit-transition: all 240ms ease-out;\n          transition: all 240ms ease-out;\n  zoom: 1;\n}\n.beautify-select .trigger.error {\n  border-color: #ec5524;\n}\n.beautify-select .trigger.disabled {\n  color: #ccc;\n}\n.beautify-select .trigger.disabled:hover {\n  color: #ccc;\n  background-color: #fff;\n  cursor: default;\n}\n.beautify-select .options {\n  display: none;\n  position: absolute;\n  top: 30px;\n  left: 0;\n  opacity: 0;\n  filter: alpha(opacity:0);\n  z-index: 50;\n  overflow: auto;\n  max-height: 0;\n  background: #f9f9f9;\n  border-radius: 4px;\n  border-top: 1px solid #e7e7e7;\n  width: 100%;\n  -webkit-transition: max-height 0.3s ease-out, opacity 0.3s ease-out, top 0.3s ease-out, visibility 0.3s ease-out;\n          transition: max-height 0.3s ease-out, opacity 0.3s ease-out, top 0.3s ease-out, visibility 0.3s ease-out;\n}\n.beautify-select .options.open {\n  top: 40px;\n  opacity: 1;\n  filter: alpha(opacity:100);\n  max-height: 150px;\n  _height: 150px;\n}\n.beautify-select .options.overflowing {\n  top: auto;\n  bottom: 30px;\n  -webkit-transition: opacity 0.3s ease-out, bottom 0.3s ease-out;\n          transition: opacity 0.3s ease-out, bottom 0.3s ease-out;\n}\n.beautify-select .options.overflowing.open {\n  top: auto;\n  bottom: 50px;\n  -webkit-transition: opacity 0.3s ease-out, bottom 0.3s ease-out;\n          transition: opacity 0.3s ease-out, bottom 0.3s ease-out;\n}\n.beautify-select .options li {\n  padding: 5px 9pt;\n  color: #333;\n  cursor: pointer;\n  white-space: nowrap;\n  -webkit-transition: all 150ms ease-out;\n          transition: all 150ms ease-out;\n}\n.beautify-select .options li.current {\n  color: #fff;\n  background-color: #61c0e2;\n}\n", ""]);
	
	// exports


/***/ }

});
//# sourceMappingURL=aboard.js.map