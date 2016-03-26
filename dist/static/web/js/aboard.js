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
	
	var getStateUrl = preServer+"getStateUrl";
	
	
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
	                
	                if(res.code!=1){
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
	                console.log(err);
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
	
			      if(res.code==1){
			        window.location = "/box/plan/aboard_success";
			        return false;
			      }else{
			        console.log(res);
			        return;
			      }
			    },
			    error : function(err){
			       console.log(err);
			    }
			})
		}
	};
	
	aboard.init();
	
	
	


/***/ },

/***/ 34:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

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
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }

});
//# sourceMappingURL=aboard.js.map