/* 建议这里都引入 */
require('../../assets/less/common.less');
require('./index.less');
var extend =  require('object-assign');
var $ = window.$ || require("jquery");

//工具类方法
var util = require("../../assets/components/util");

//公共方法
var common = require("../../assets/components/common");

/* 可选，视需求而定 */
var slider = require("../../assets/components/unslider");
var carousel = require("./lib/carousel");
var updateBrowser = require("../../assets/components/updateBrowser");
var planModal = require('../../assets/components/planModal')
var provinceId = $("[name=province]").val();
var INITDATA = extend({score: '', rank: ''}, window.__INITDATA__)

slider($("#bannerShow"));

updateBrowser.init();

carousel.init();

$(".sloganTag").on("click",function(e){
	e.preventDefault();
	var rel = $(this).attr("id");
	var target = $("[rel="+rel+"]");

	var offset = target.offset().top;

	$("html,body").animate({
		"scrollTop" : offset
	},600);
});

var home = {
	init: function () {
		this.bindEvt()
	},

	
	bindEvt: function () {
		var that = this
		$(".js-edit").on('click', function(e){
			e.preventDefault();
			var btn = $(e.target);
			planModal.init(btn, {
				provinceId: provinceId,
				data: INITDATA,
				successCallback: function(){
					setTimeout(function(){
        		window.location = '/'
        	}, 400)
				}
			})

			planModal.box()
		})
	}
}

home.init()
