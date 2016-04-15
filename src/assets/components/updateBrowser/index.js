var $ = window.$ || require("jquery");
var extend =  require('object-assign');

require("./index.less");

var browser = require("../browser");
var Cookies = require("js-cookie");

var tmpl = require("./template.ejs");

var updateBrowser = {
	init : function(){
		var that = this;
		if (browser.isIE () && browser.isIE () < 8) {
		 	that.bindEvt();
		}else{
			that.bindEvt();
			return false;
		}
	},

	bindEvt : function(){
		var that = this;

		if(Cookies.get('browser_nav')) return;

		var _body = $("body");
		_body.animate({"padding-top":50},300);

		_body.append(tmpl());

		var _browser_nav = $("#browser_nav");
		_browser_nav.slideDown(300);

		$("#nav_close").click(function(){
			// 创建一天的cookie防止刷新继续弹出等
			Cookies.set('browser_nav','close', { expires: 3 });
			_browser_nav.slideUp(300);
			_body.animate({"padding-top":0},300);
		});
	}
};


module.exports = updateBrowser;