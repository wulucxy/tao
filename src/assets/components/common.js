var $ = window.$ || require("jquery");

//回到顶部
var gotoTop  = require("./gototop");

//弹窗模块
var modalBox = require("./modalBox");
window.modalBox = modalBox;

//登录模块
var mLogin = require("./login/");

//注册模块
var mReg = require("./reg/");

var common = {

	init : function(){
		//导航栏dropdown
		this.dropdown();
		gotoTop();
		
		mLogin.init();
		mReg.init();

		//加载更多
		this.loadingMore();
	},

	//顶部导航
	dropdown : function(){
		var dropdown = require("./dropdown");

		dropdown($("[data-toggle=dropdown]"),{
			event : "hover"
		});

		dropdown($("#selectSwitch"),{
			event : "click",
			selectMode : true
		});

		$(".navList>a")
		.on("mouseenter",function(){
			 $(".navList").removeClass("current");
			 $(this).closest(".navList").addClass("current");

			 if($(this).parent().siblings(".navList").hasClass("open")){
			 	$(this).parent().siblings(".navList").removeClass("open");
			 	$(this).parent().siblings(".navList").find(".open").removeClass("open");
			 }
			
		})
		.on("mouseleave",function(e){
			e.stopPropagation();
			var $ele = $(this).closest(".navList");
			$ele.removeClass("current");
		});
	},

	//顶部导航切换
	switchNav : function(idx){
		$(".navList").removeClass("current");
		$(".navList").eq(idx).addClass("current");
	},

	//控制公共表单错误展示和隐藏
	hideError: function(obj, txt) {
      var errortxt = txt || '';
      obj.html(errortxt).css({
        'visibility': 'hidden'
      });
    },
    showError: function(obj, txt) {
      var errortxt = txt || obj.html();
      obj.html(errortxt).css({
        'visibility': 'visible'
      });
    },

    loadingMore : function(){
    	var that = this;
    	$(".btn-loading").on("click",function(e){
    		e.preventDefault();
    		var btn = $(this).closest(".btn");
    		if(btn.hasClass("disabled")) return;
    		btn.addClass("disabled loading");
    		

    	})

    }
};

common.init();

module.exports = common;

