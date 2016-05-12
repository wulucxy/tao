var $ = window.$ || require("jquery");

//回到顶部
var sideBar  = require("./sideBar");

//弹窗模块
var modalBox = require("./modalBox");
window.modalBox = modalBox;

//placeholder模块
var placeholder = require("./placeholder");
window.placeholder = placeholder;

var preServer = "/v2_1/client/";
window.preServer = preServer;

//工具类方法
var util = require("./util");

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

//cookie
var Cookies = require("js-cookie");

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

		this.bindEvt();

		//搜索
		this.searchForm();
	},

	searchForm : function(){
		var that = this;
		var oInput = $("#searchField");
		$("#searchForm").on("click","#searchBtn",function(e){
			e.preventDefault();

			var btn = $(e.target).closest(".btn");
			if($.trim(oInput.val())==""){
				warn("请输入搜索条件");
				return false;
			}

			that.goSearch(btn,$("#searchForm"));
			return false;

		});

		$("#searchField").on("keyup",function(e){
			e.preventDefault();
			var keyCode = e.which || e.keyCode;
			var btn = $(e.target);

			if(keyCode == 13){
				if($.trim(oInput.val())=="" || $.trim(oInput.val())== oInput.attr("placeholder") ){
					warn("请输入搜索条件");
					return false;
				}

				that.goSearch(btn,$("#searchForm"));
				return false;
			}

		})
	},

	goSearch : function(btn,oForm){
		var that = this;

		util.post(oForm.attr("action"),{
			keyword : encodeURI($('[name=keyword]').val()),
			type : Number($('[name=type]').val())
		},true);
	},

	bindEvt : function(){
		var that = this;
		//广告轮播
		if($(".directs").length){
			direct($(".directs"));
		}

		$("#signout").on("click",function(){
			Cookies.remove("answer");
			window.location = "/signout";
			return false;
		});
	},

	//顶部导航
	dropdown : function(){
		var dropdown = require("./dropdown");

		dropdown($("[data-toggle=dropdown]"),{
			event : "hover",
			clickHandle : function(nav){
				$(".navList").removeClass("current");
				nav.addClass("current");
			},
			leaveHandle : function(nav){
				nav.removeClass("current");
			}
		});

		dropdown($("#selectSwitch"),{
			event : "hover",
			selectMode : true,
			li : "li",
			onSelectCallback : function(list){
				$("[name=type]").val(list.data("field"));
			}
		});

		$(".no-dropdown").hover(function(){
			$(".navList").removeClass("current");
			$(this).addClass("current");
		},function(){
			$(this).removeClass("current");
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

