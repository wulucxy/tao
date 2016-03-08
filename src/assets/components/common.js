var $ = window.$ || require("jquery");

//回到顶部
var sideBar  = require("./sideBar");

//弹窗模块
var modalBox = require("./modalBox");
window.modalBox = modalBox;

//登录模块
var mLogin = require("./login/");

//注册模块
var mReg = require("./reg/");

//商品筛选模块
var mNav = require("./mNav");

//收藏
var fav = require("./favorite");

//广告轮播
var direct = require("./direct");

var common = {

	init : function(){
		//导航栏dropdown
		this.dropdown();
		
		mLogin.init();
		mReg.init();

		//搜索条件
		mNav.init();

		//收藏条件
		fav.init();

		//广告轮播
		if($(".directs").length){
			direct($(".directs"));
		}
	},

	//顶部导航
	dropdown : function(){
		var dropdown = require("./dropdown");

		dropdown($("[data-toggle=dropdown]"),{
			event : "hover"
		});

		dropdown($("#selectSwitch"),{
			event : "hover",
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
    }
};

common.init();

module.exports = common;

